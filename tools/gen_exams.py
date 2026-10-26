# Sinh 26 đề CA1 theo đúng ma trận đề minh họa: data/de-ca1-so-01..10.js và data/de-ca1-so-15..30.js
# (đề số 11–14 là bốn đề viết tay, không do file này sinh).
#
#   python tools/gen_exams.py            sinh lại toàn bộ đề và cập nhật index.html
#   python tools/gen_exams.py --check    chỉ sinh thử và kiểm tra, không ghi file
#   thêm --serial để chạy tuần tự trong một tiến trình (chậm hơn, dễ dò lỗi hơn)
#
# Các file trong thư mục:
#   g_core.py    khung chung (định dạng LaTeX, tạo câu hỏi, lời giải từng dòng)
#   g_la.py      dạng gốc phần đại số tuyến tính          g_an.py    dạng gốc phần giải tích
#   g_hard.py    dạng khó hơn cho các đề số 15–30         g_more.py  các dạng bổ sung cho từng vị trí
#   g_theory.py  câu lí thuyết giải tích                   g_notes.py phần "Lưu ý" của từng dạng
#   g_essays.py  đề nghị luận                              verify_formulas.py  kiểm tra chéo các công thức
# Mỗi câu hỏi được tính đáp án bằng máy từ chính số liệu trong đề; đổi SEED để sinh bộ đề khác.
import faulthandler, io, json, os, random, re, sys, time
from concurrent.futures import ProcessPoolExecutor
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.stderr.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import g_la as LA
import g_an as AN
import g_hard as HD
import g_more as GM
import g_theory as TH
from g_core import Retry, theory
from g_essays import ESSAYS
from g_notes import NOTES

SEED = 2027
N_EXAMS = 26        # 10 đề đầu (số 01–10): các dạng cơ bản; 16 đề sau (số 15–30): thay bằng các dạng khó hơn trong g_hard.py
N_BASE = 10
SLOW = 30           # một câu sinh lâu hơn chừng này giây thì coi như treo: dừng và in chỗ đang chạy
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class GenError(Exception):
    """Câu sinh ra bị lỗi trình bày hoặc không sinh được."""

MCQ = [LA.s1, LA.s2, LA.s3, LA.s4, LA.s5, LA.s6, LA.s7, AN.s8, AN.s9, AN.s10, AN.s11, AN.s12, AN.s13, AN.s14, AN.s15,
       AN.s16, AN.s17, AN.s18, AN.s19, AN.s20, AN.s21, LA.s22, LA.s23, LA.s24, LA.s25, AN.s26, AN.s27, AN.s28, LA.s29,
       AN.s30, AN.s31, AN.s32, AN.s33, AN.s34, AN.s35, AN.s36, AN.s37, AN.s38, AN.s39]
GROUPS = [LA.g1, AN.g2]
SHORT = [LA.s46, AN.s47, AN.s48, AN.s49, AN.s50]

HEADER = '''// ĐỀ SỐ %(no)s — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push(%(json)s);
'''


def clean(o):
    # bỏ dấu gạch chéo ngược thừa đứng trước dấu nháy ở mọi chuỗi của câu hỏi
    if isinstance(o, str):
        return o.replace(chr(92) + "'", "'")
    if isinstance(o, list):
        return [clean(v) for v in o]
    if isinstance(o, dict):
        return {k_: clean(v) for k_, v in o.items()}
    return o


HINT_KEYS = [('gợi ý:', 'Gợi ý:'), ('Gợi ý:', 'Gợi ý:'), ('Lưu ý:', 'Lưu ý:'), ('Chú ý', 'Chú ý:'), ('có thể dùng', 'Gợi ý: có thể dùng'),
             ('Nhớ rằng', 'Lưu ý: nhớ rằng'), ('Điểm dừng là', 'Lưu ý: điểm dừng là')]


def hintify(q):
    """Đưa phần gợi ý / lưu ý viết trong ngoặc đơn của câu hỏi xuống một dòng riêng (chữ nhỏ, in nghiêng)."""
    for key, label in HINT_KEYS:
        i = q.find('(' + key)
        if i < 0:
            continue
        depth, j = 0, i
        while j < len(q):
            depth += (q[j] == '(') - (q[j] == ')')
            if depth == 0:
                break
            j += 1
        if j >= len(q):
            continue
        inner = q[i + 1 + len(key):j].strip().rstrip('.')
        rest = (q[:i].rstrip() + ' ' + q[j + 1:].strip()).strip()
        return rest + '<span class="q-hint">%s %s.</span>' % (label, inner)
    return q


def problems(item):
    """Các lỗi trình bày của một câu (danh sách rỗng = đạt)."""
    bad = []
    subs = item.get('questions', [item])
    texts = [item.get('stem', '')]
    for s in subs:
        texts += [s['q'], s.get('explain', ''), s.get('note', '')] + list(s.get('options', []))
        if not s.get('explain'):
            bad.append('thiếu lời giải')
        if 'options' in s:
            if len(s['options']) != 4 or len(set(s['options'])) != 4 or s['answer'] != 0:
                bad.append('phương án không hợp lệ')
        elif not s['answer'] or any(not re.fullmatch(r'-?\d+([.,/]\d+)?', a) for a in s['answer']):
            bad.append('đáp án trả lời ngắn không hợp lệ: %r' % (s['answer'],))
    for t in texts:
        if t.count('$') % 2 or t.count('$$') % 2:
            bad.append('lẻ dấu $: ' + t[:60])
        odd = re.search(r'\bNone\b|\bnan\b|\bzoo\b|\\text\{NaN\}|\^\{\}|\+ -|- -', t)
        if odd:
            bad.append('chuỗi lạ "%s" trong: %s' % (odd.group(0), t[max(0, odd.start() - 50):odd.end() + 30]))
    return bad


def finish(item, fn_name, slot):
    """Hoàn thiện một câu: sửa dấu nháy, tách gợi ý xuống dòng riêng, gắn phần Lưu ý."""
    item = clean(item)
    note = clean(NOTES.get(fn_name) or NOTES.get(slot) or '')
    subs = item.get('questions', [item])
    for s in subs:
        s['q'] = hintify(s['q'])
    last = subs[-1]
    if note and '<b>Đúng:</b>' not in last.get('explain', ''):
        last['note'] = note
    return item


def make(fn, slot, k, seen, exam_k=None):
    # k: tham số biến thể đưa vào hàm sinh câu; exam_k: thứ tự đề (dùng làm hạt giống ngẫu nhiên)
    exam_k = k if exam_k is None else exam_k
    for attempt in range(400):
        rng = random.Random('%d-%s-%d-%d' % (SEED, slot, exam_k, attempt))
        faulthandler.dump_traceback_later(SLOW, exit=True)
        try:
            item = fn(rng, k)
        except Retry:
            continue
        finally:
            faulthandler.cancel_dump_traceback_later()
        item = finish(item, fn.__name__, slot)
        text = item.get('stem', '') + item.get('q', '') + '|'.join(sorted(item.get('options', [])))
        if text in seen[slot]:
            continue
        bad = problems(item)
        if bad:
            raise GenError('Câu lỗi ở vị trí %s, đề thứ %d (%s): %s' % (slot, exam_k + 1, fn.__name__, '; '.join(bad)))
        seen[slot].add(text)
        return item
    raise GenError('Không sinh được câu cho vị trí %s, đề thứ %d (%s)' % (slot, exam_k + 1, fn.__name__))


USED = {}


def choose(slot, old, new, hard, k):
    """Chọn dạng bài cho một vị trí của đề thứ k: xoay vòng giữa dạng gốc và các dạng bổ sung trong g_more.py,
    dạng nào có nhiều biến thể hơn thì được dùng nhiều lần hơn. Trả về (hàm sinh câu, tham số biến thể)."""
    forms = [old] + new.get('B' if hard else 'A', []) if new else [old]
    if len(forms) == 1:
        return old, k
    cnt = USED.setdefault((slot, hard), {})
    cap = lambda f: (1 if slot in GM.SINGLE else 2) if f is old else GM.VARIANTS.get(f, 1)
    forms = [g for g in forms if cnt.get(g, 0) < GM.LIMIT.get(g, 99)]
    f = min(forms, key=lambda g: (cnt.get(g, 0) / cap(g), forms.index(g)))
    j = cnt.get(f, 0)
    cnt[f] = j + 1
    return f, (j + (N_BASE if hard else 0) if f is old else j)


PLAN = TH.plan(N_EXAMS)      # thứ tự đề -> [(vị trí, câu lí thuyết giải tích)]
TASKS = [('c', i) for i in range(len(MCQ))] + [('g', i) for i in range(len(GROUPS))] + [('s', i) for i in range(len(SHORT))]


def slot_items(task):
    """Sinh câu của MỘT vị trí cho tất cả các đề. Việc chọn dạng và kiểm tra trùng chỉ diễn ra trong từng vị trí,
    nên các vị trí độc lập với nhau và chạy song song được mà kết quả vẫn y như chạy tuần tự."""
    kind, i = task
    base, hard_map, new, slot, num = {'c': (MCQ[i] if kind == 'c' else None, HD.HARD_MCQ, GM.NEW.get(i + 1), 'c%d' % (i + 1), i + 1),
                                      'g': (GROUPS[i] if kind == 'g' else None, HD.HARD_GROUPS, GM.NEW_GROUPS.get(i), 'g%d' % i, i),
                                      's': (SHORT[i] if kind == 's' else None, HD.HARD_SHORT, GM.NEW.get(46 + i), 's%d' % i, i)}[kind]
    seen, out = {slot: set()}, []
    for k in range(N_EXAMS):
        hard = k >= N_BASE
        th = dict(PLAN.get(k, [])) if kind == 'c' else {}
        if num in th:
            q, ok, why, wrongs = th[num]
            item = finish(theory(q, ok, why, wrongs), 'theory', '')
            bad = problems(item)
            if bad:
                raise GenError('Câu lí thuyết lỗi ở vị trí %s: %s' % (slot, '; '.join(bad)))
            out.append(item)
            continue
        fn = hard_map.get(num, base) if hard else base
        fn, kk = choose(slot, fn, new, hard, k)
        out.append(make(fn, slot, kk, seen, k))
    return out


def build(serial=False):
    """Sinh toàn bộ đề; trả về danh sách (tên file, đề)."""
    if serial:
        cols = [slot_items(t) for t in TASKS]
    else:
        with ProcessPoolExecutor() as pool:
            cols = list(pool.map(slot_items, TASKS))
    out = []
    for k in range(N_EXAMS):
        no = k + 1 if k < N_BASE else k + 5   # số đề: 01–10 và 15–30
        exam = dict(id='ca1-so-%02d' % no, code='CA1', subject='Toán cao cấp', title='CA1 — Đề số %02d' % no,
                    essayMinutes=60, testMinutes=90, testPoints=70, essayPoints=30,
                    essay=dict(ESSAYS[k % len(ESSAYS)], minWords=500), mcq=[], groups=[], short=[])
        for (kind, i), col in zip(TASKS, cols):
            exam[{'c': 'mcq', 'g': 'groups', 's': 'short'}[kind]].append(col[k])
        out.append(('de-ca1-so-%02d.js' % no, exam))
    return out


def main():
    check_only = '--check' in sys.argv
    t0 = time.time()
    try:
        exams = build('--serial' in sys.argv)
    except GenError as e:
        raise SystemExit('LỖI: %s' % e)
    n_q = sum(len(e['mcq']) + sum(len(g['questions']) for g in e['groups']) + len(e['short']) for _, e in exams)
    n_la, n_an = len(exams), sum(len(v) for v in PLAN.values())
    n_note = sum(1 for _, e in exams for q in e['mcq'] + e['short'] + [s for g in e['groups'] for s in g['questions']] if q.get('note'))
    print('%d đề, %d câu, không lỗi trình bày; lí thuyết: %d câu đại số (câu 6) + %d câu giải tích; %d câu có phần Lưu ý; %.0f giây'
          % (len(exams), n_q, n_la, n_an, n_note, time.time() - t0))
    if check_only:
        print('(chế độ --check: không ghi file)')
        return
    for name, exam in exams:
        with io.open(os.path.join(ROOT, 'data', name), 'w', encoding='utf-8', newline='\n') as f:
            f.write(HEADER % dict(no=name[10:12], json=json.dumps(exam, ensure_ascii=False, indent=1)))
    # cập nhật danh sách đề trong index.html (giữa hai dòng đánh dấu): mọi file de-ca1-so-NN.js, kể cả bốn đề viết tay 11–14
    path = os.path.join(ROOT, 'index.html')
    html = io.open(path, encoding='utf-8').read()
    ordered = sorted(n for n in os.listdir(os.path.join(ROOT, 'data')) if re.fullmatch(r'de-ca1-so-\d+\.js', n))
    block = '  <!-- DANH-SACH-DE:BEGIN (tools/gen_exams.py tự cập nhật) -->\n' + ''.join('  <script defer src="data/%s"></script>\n' % n for n in ordered) + '  <!-- DANH-SACH-DE:END -->\n'
    html = re.sub(r'  <!-- DANH-SACH-DE:BEGIN.*?DANH-SACH-DE:END -->\n', lambda m: block, html, flags=re.S)
    io.open(path, 'w', encoding='utf-8', newline='\n').write(html)
    print('đã ghi %d file đề vào data/ và cập nhật index.html' % len(exams))


if __name__ == '__main__':
    main()
