# Khung dùng chung cho bộ sinh đề (chạy: python tools/gen_exams.py).
# Mỗi hàm sinh câu hỏi tự tính đáp án bằng sympy nên đáp án luôn khớp với số liệu trong đề.
import random
import re
import sympy as sp
from sympy import Rational as R, Matrix, latex, symbols

x, y, z, t, n, m_ = symbols('x y z t n m')


class Retry(Exception):
    """Bộ tham số vừa chọn cho đáp án xấu / trùng phương án: thử bộ khác."""


def tx(e):
    if isinstance(e, str):
        return e
    out = latex(sp.nsimplify(e) if isinstance(e, float) else sp.sympify(e)).replace('\\frac', '\\dfrac')
    # sympy viết "-1 + e^{2}"; đổi về thứ tự quen thuộc "e^{2} - 1"
    out = re.sub(r'-1 \+ (e\^\{[^{}]+\}|e)(?![\^\w])', r'\1 - 1', out)
    # \log{\left(3 \right)} -> \ln 3 (kí hiệu quen dùng trong đề thi Việt Nam)
    out = re.sub(r'\\log\{\\left\(([^()]*?) \\right\)\}',
                 lambda m_: (r'\ln ' + m_.group(1)) if re.fullmatch(r'[0-9A-Za-z]+', m_.group(1)) else r'\ln\left(' + m_.group(1) + r'\right)', out)
    # "-2 + \pi" -> "\pi - 2" khi biểu thức chỉ có hai số hạng
    two = re.fullmatch(r'- ?(\d+) \+ ([^+\-]+)', out)
    return '%s - %s' % (two.group(2).strip(), two.group(1)) if two else out


def M(e):
    return '$' + tx(e) + '$'


def vn(v, nd=1):
    """Số thập phân kiểu Việt Nam: 12,5"""
    return ('%.*f' % (nd, float(v))).replace('.', ',')


def pmat(A):
    A = Matrix(A)
    rows = [' & '.join(tx(v) for v in A.row(i)) for i in range(A.rows)]
    return r'\begin{pmatrix}' + r' \\ '.join(rows) + r'\end{pmatrix}'


def vec(v):
    return '(' + ';'.join(tx(a) for a in v) + ')'


def T(_tpl, **kw):
    """Điền tham số vào mẫu câu: 'cho <a>' -> giá trị (đã chuyển sang LaTeX)."""
    for k, v in kw.items():
        _tpl = _tpl.replace('<' + k + '>', v if isinstance(v, str) else tx(v))
    return _tpl


def steps(*lines):
    """Lời giải trình bày từng dòng (mỗi dòng một phép biến đổi)."""
    return '<br>'.join(l for l in lines if l)


def Q(q, ok, wrongs, explain=''):
    opts = [ok] + list(wrongs)
    if len(opts) != 4 or len(set(opts)) != 4:
        raise Retry
    return {'q': q, 'options': opts, 'answer': 0, 'explain': explain}


def theory(q, ok, why, wrongs):
    """Câu lí thuyết: wrongs là danh sách (phương án sai, vì sao sai); lời giải nêu lí do cho cả bốn phương án."""
    ex = steps('<b>Đúng:</b> ' + ok + ' ' + why, *['<b>Sai:</b> ' + w + ' ' + r for w, r in wrongs])
    return Q(q, ok, [w for w, _ in wrongs], ex)


def NQ(q, ok, cands, explain='', fmt=M, unit=''):
    """Câu trắc nghiệm đáp án số: cands là các kết quả sai điển hình; tự bổ sung nếu thiếu/trùng."""
    conv = lambda v_: sp.Float(v_) if isinstance(v_, float) else sp.nsimplify(v_)
    ok = conv(ok)
    extra = [ok + 1, ok - 1, ok + 2, 2 * ok, -ok, ok - 2, ok + 3, ok / 2, ok + 5]
    seen, wrongs = {fmt(ok)}, []
    for c in list(cands) + extra:
        s = fmt(conv(c))
        if s not in seen:
            seen.add(s)
            wrongs.append(s)
        if len(wrongs) == 3:
            break
    if len(wrongs) < 3:
        raise Retry
    if explain and '<br>' not in explain:   # lời giải một dòng: thêm dòng kết quả cho rõ
        explain = steps(explain.rstrip('.'), 'Kết quả: ' + fmt(ok) + unit)
    return Q(q, fmt(ok) + unit + '.', [w + unit + '.' for w in wrongs], explain)


def SQ(q, answer, explain=''):
    """Câu trả lời ngắn."""
    ans = answer if isinstance(answer, list) else [answer]
    if explain and '<br>' not in explain:
        explain = steps(explain.rstrip('.'), 'Đáp số: $%s$' % str(ans[0]).replace('.', '{,}'))
    return {'q': q, 'answer': [str(a) for a in ans], 'explain': explain}


def nice(v, maxden=12, maxabs=10 ** 5):
    v = sp.nsimplify(v)
    if not v.is_rational or abs(v) > maxabs or v.q > maxden:
        raise Retry
    return v


def rint(rng, lo, hi, exclude=()):
    while True:
        v = rng.randint(lo, hi)
        if v not in exclude:
            return v


def short_num(v):
    """Chuỗi đáp án cho câu trả lời ngắn: số nguyên hoặc thập phân hữu hạn."""
    v = sp.nsimplify(v)
    if v.is_integer:
        return [str(int(v))]
    f = float(v)
    s = ('%.4f' % f).rstrip('0').rstrip('.')
    if abs(float(s) - f) > 1e-12:
        raise Retry
    return [s, '%d/%d' % (v.p, v.q)]
