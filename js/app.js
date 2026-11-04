(function () {
  const LS_STATE = 'vb2ca_state_v1';
  const LS_HISTORY = 'vb2ca_history_v1';
  const LS_STATS = 'vb2ca_stats_v1';
  const LS_SEEN = 'vb2ca_seen_v1';
  const TOP = window.TOPICS || { names: {}, order: [], slots: [] };
  const PRACTICE_BANK_TARGET = 150;

  // Các đề từng mang mã ca1-vd-NN / ca1-nc-NN nay là ca1-so-NN: chuyển dữ liệu đã lưu (đề đang chọn, sổ câu sai, câu đã báo lỗi)
  (function migrateIds() {
    const newId = id => {
      const m = /^ca1-(vd|nc)-(\d+)$/.exec(id || '');
      if (!m) return id;
      const n = Number(m[2]), no = m[1] === 'nc' ? n + 10 : n <= 10 ? n : n + 4;
      return 'ca1-so-' + String(no).padStart(2, '0');
    };
    const newRef = ref => { const i = ref.indexOf('#'); return i < 0 ? ref : newId(ref.slice(0, i)) + ref.slice(i); };
    try {
      const st = JSON.parse(localStorage.getItem(LS_STATS));
      if (st) {
        ['wrong', 'reports'].forEach(key => {
          const out = {};
          Object.keys(st[key] || {}).forEach(ref => { out[newRef(ref)] = st[key][ref]; });
          st[key] = out;
        });
        localStorage.setItem(LS_STATS, JSON.stringify(st));
      }
      const s = JSON.parse(localStorage.getItem(LS_STATE));
      if (s && s.examId !== newId(s.examId)) {
        s.examId = newId(s.examId);
        if (s.practice && s.practice.refs) {
          const p = s.practice, ans = {}, perm = {};
          Object.keys(p.ans || {}).forEach(r => { ans[newRef(r)] = p.ans[r]; });
          Object.keys(p.perm || {}).forEach(r => { perm[newRef(r)] = p.perm[r]; });
          p.refs = p.refs.map(newRef); p.ans = ans; p.perm = perm;
        }
        localStorage.setItem(LS_STATE, JSON.stringify(s));
      }
    } catch (e) { /* bỏ qua dữ liệu hỏng */ }
  })();
  const SAMPLE = 'Kỳ thi đánh giá trên máy tính của Bộ Công an năm 2026';
  const IME_LABEL = { auto: 'Tự động', telex: 'Telex', vni: 'VNI', off: 'Bộ gõ ngoài' };
  const LETTERS = ['A', 'B', 'C', 'D'];

  // #9 — Gợi ý ôn lý thuyết cho từng chủ đề (hiện trong trang thống kê)
  const TOPIC_HINTS = {
    vt: 'Định nghĩa độc lập tuyến tính; phương pháp khử Gauss–Jordan để tính hạng ma trận.',
    mt: 'Công thức Sarrus và khai triển Laplace; ma trận nghịch đảo = adj(A) / det(A).',
    he: 'Điều kiện vô nghiệm / vô số nghiệm / nghiệm duy nhất; Quy tắc Cramer.',
    tr: 'Phương trình đặc trưng det(A − λI) = 0; tìm vectơ riêng từng trị riêng.',
    gh: 'Giới hạn 1 phía; các hình thức vô định 0/0 và ∞/∞; quy tắc L\'Hôpital.',
    dh: 'Quy tắc tích, thương, hàm hợp; tích phân từng phần và phương pháp đổi biến.',
    nb: 'Đạo hàm riêng và vi phân toàn phần; điều kiện cực trị cục bộ qua ma trận Hessian.',
    ch: 'Tiêu chuẩn D\'Alembert và Cauchy; bán kính hội tụ R = 1 / limsup |aₙ|^(1/n).',
    v1: 'Phân ly biến số; dạng thuần nhất y\'=f(y/x); dạng Bernoulli y\'+P(x)y=Q(x)yⁿ.',
    v2: 'Nghiệm TQ = nghiệm thuần nhất + nghiệm riêng; phương pháp hằng số biến thiên.',
    tb: 'Đổi thứ tự tích phân (vẽ miền D); đổi biến sang tọa độ cực x=r cosθ, y=r sinθ.',
    td: 'Tham số hóa đường cong; định lý Green: ∮ P dx+Q dy = ∬(∂Q/∂x − ∂P/∂y) dxdy.'
  };

  const EXAMS = window.EXAMS || [];
  const ESSAY_GUIDES = window.ESSAY_GUIDES || [];
  const app = document.getElementById('app');
  const modalRoot = document.getElementById('modal-root');

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const clock = t => { const d = new Date(t); return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`; };
  const countWords = s => (s.trim().match(/\S+/g) || []).length;
  const fmtScore = x => x.toFixed(2).replace('.', ',');

  // ---------- Đề trộn ngẫu nhiên: mỗi câu lấy từ một đề bất kỳ nhưng giữ nguyên vị trí trong ma trận đề ----------
  const MIX_ID = 'mix';
  const essayPool = () => EXAMS.map(e => e.essay).concat(window.EXTRA_ESSAYS || []);
  const sameShape = e => e.mcq.length === EXAMS[0].mcq.length && e.groups.length === EXAMS[0].groups.length && e.short.length === EXAMS[0].short.length;
  // "Dạng" của một câu hỏi: hai câu chỉ khác số liệu thì cùng dạng. Câu có nhiều lời văn so theo lời văn (bỏ hết công thức);
  // câu ngắn toàn công thức so theo khung công thức (bỏ các con số).
  function kindOf(it) {
    const q = ((it.group && it.first ? it.group.stem + ' ' : '') + it.q).replace(/<span class="q-hint">.*?<\/span>/, '');
    const words = q.replace(/\$\$[^]*?\$\$/g, '§').replace(/\$[^$]*\$/g, '§').replace(/[0-9]+([.,][0-9]+)?/g, '#').replace(/\s+/g, ' ').trim();
    if (words.replace(/[§#]/g, '').length >= 80) return words;
    return q.replace(/-?\s*[0-9]+([.,][0-9]+)?/g, '#').replace(/\s+/g, ' ').trim();
  }
  function loadSeen() {
    try { return JSON.parse(localStorage.getItem(LS_SEEN)) || {}; } catch (e) { return {}; }
  }
  // Ghi lại các dạng vừa gặp ở từng vị trí (dạng gặp gần nhất nằm cuối danh sách)
  function markSeen(list) {
    const seen = loadSeen();
    list.forEach((it, s) => {
      if (it.group && !it.first) return;
      const k = kindOf(it), h = (seen[s] || []).filter(x => x !== k);
      h.push(k);
      seen[s] = h.slice(-60);
    });
    try { localStorage.setItem(LS_SEEN, JSON.stringify(seen)); } catch (e) { /* bỏ qua */ }
  }
  // Đề trộn: ở mỗi vị trí ưu tiên dạng bài chưa gặp; khi đã gặp hết thì lấy dạng gặp lâu nhất
  function newMix() {
    const pick = n => Math.floor(Math.random() * n);
    const pool = EXAMS.map((e, i) => i).filter(i => sameShape(EXAMS[i]));
    const base = EXAMS[0], seen = loadSeen();
    const choose = s => {
      const hist = seen[s] || [], rank = {};
      pool.forEach(i => { const at = hist.lastIndexOf(kindOf(ALL[EXAMS[i].id][s])); (rank[at] = rank[at] || []).push(i); });
      const best = rank[Math.min.apply(null, Object.keys(rank).map(Number))];   // -1 = chưa gặp lần nào
      return best[pick(best.length)];
    };
    let s = 0;
    const mcq = base.mcq.map(() => choose(s++));
    const groups = base.groups.map(g => { const e = choose(s); s += g.questions.length; return e; });
    const short = base.short.map(() => choose(s++));
    return { essay: pick(essayPool().length), mcq, groups, short };
  }
  function validMix(mx) {
    if (!mx || !EXAMS.length) return false;
    const ok = (list, n) => Array.isArray(list) && list.length === n && list.every(i => EXAMS[i] && sameShape(EXAMS[i]));
    const base = EXAMS[0];
    return mx.essay < essayPool().length && ok(mx.mcq, base.mcq.length) && ok(mx.groups, base.groups.length) && ok(mx.short, base.short.length);
  }
  function mixExam(mx) {
    const base = EXAMS[0];
    return Object.assign({}, base, {
      id: MIX_ID, title: base.code + ' — Đề trộn ngẫu nhiên',
      essay: essayPool()[mx.essay],
      mcq: mx.mcq.map((e, i) => EXAMS[e].mcq[i]),
      groups: mx.groups.map((e, i) => EXAMS[e].groups[i]),
      short: mx.short.map((e, i) => EXAMS[e].short[i])
    });
  }

  function fresh() {
    return {
      screen: 'login', examId: MIX_ID, mix: null, perm: {}, profile: null,
      essay: '', answers: {}, flags: {}, p1End: 0, p2End: 0, savedAt: 0,
      imeOk: false, imeMode: 'auto', fs: 15, dark: false, result: null, lock: true, viol: []
    };
  }
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(LS_STATE));
      if (!s) return null;
      const ok = s.examId === MIX_ID ? validMix(s.mix) : EXAMS.some(e => e.id === s.examId);
      return ok ? Object.assign(fresh(), s) : null;
    } catch (e) { return null; }
  }
  function save() {
    S.savedAt = Date.now();
    try { localStorage.setItem(LS_STATE, JSON.stringify(S)); } catch (e) { /* bộ nhớ đầy / chế độ riêng tư */ }
  }
  function history() {
    try { return JSON.parse(localStorage.getItem(LS_HISTORY)) || []; } catch (e) { return []; }
  }

  let S = load() || fresh();
  let exam, items;

  // Danh sách câu của một đề theo thứ tự làm bài; mỗi câu có mã "ref" (đề#số câu) và chủ đề để thống kê
  function itemsOf(ex) {
    const list = [];
    let no = 0;
    ex.mcq.forEach(q => list.push(Object.assign({ no: ++no, type: 'mcq' }, q)));
    ex.groups.forEach(g => g.questions.forEach((q, i) =>
      list.push(Object.assign({ no: ++no, type: 'mcq', group: g, first: i === 0, last: i === g.questions.length - 1 }, q))));
    ex.short.forEach(q => list.push(Object.assign({ no: ++no, type: 'short' }, q)));
    const topics = ex.topics || (list.length === TOP.slots.length ? TOP.slots : []);
    list.forEach(it => { it.ref = ex.id + '#' + it.no; it.topic = topics[it.no - 1] || 'khac'; });
    return list;
  }
  const ALL = {}, REF = {};
  EXAMS.forEach(ex => {
    ALL[ex.id] = itemsOf(ex);
    ALL[ex.id].forEach(it => { REF[it.ref] = { item: it, exam: ex }; });
  });
  const practicePoolCounts = {};
  Object.keys(REF).forEach(ref => {
    const topic = REF[ref].item.topic;
    practicePoolCounts[topic] = (practicePoolCounts[topic] || 0) + 1;
  });
  (window.PRACTICE_BANK || []).forEach(source => {
    const topic = source.topic;
    if (!TOP.order.includes(topic)) throw new Error('Unknown practice-bank topic: ' + topic);
    if ((practicePoolCounts[topic] || 0) >= PRACTICE_BANK_TARGET) return;
    const ref = 'practice-bank-' + source.id;
    const item = Object.assign({}, source, {
      no: (practicePoolCounts[topic] || 0) + 1,
      ref,
      type: source.options ? 'mcq' : 'short'
    });
    REF[ref] = { item, exam: { title: 'Ngân hàng bổ sung · ' + (TOP.names[topic] || topic) } };
    practicePoolCounts[topic] = item.no;
  });
  TOP.order.forEach(topic => {
    if ((practicePoolCounts[topic] || 0) < PRACTICE_BANK_TARGET) {
      throw new Error('Practice bank for "' + topic + '" has fewer than ' + PRACTICE_BANK_TARGET + ' questions');
    }
  });

  function setExam() {
    const mixed = S.examId === MIX_ID && validMix(S.mix);
    exam = mixed ? mixExam(S.mix) : EXAMS.find(e => e.id === S.examId) || EXAMS[0];
    items = [];
    if (!exam) return;
    if (!mixed) { items = ALL[exam.id]; return; }
    // đề trộn: vị trí thứ s lấy đúng câu thứ s của đề nguồn (giữ nguyên mã ref của đề nguồn)
    const src = S.mix.mcq.slice();
    EXAMS[0].groups.forEach((g, gi) => g.questions.forEach(() => src.push(S.mix.groups[gi])));
    S.mix.short.forEach(e => src.push(e));
    items = src.map((e, s) => Object.assign({}, ALL[EXAMS[e].id][s], { no: s + 1 }));
  }

  const wrongCount = () => { try { return Object.keys((JSON.parse(localStorage.getItem(LS_STATS)) || {}).wrong || {}).filter(r => REF[r]).length; } catch (e) { return 0; } };
  const isAnswered = it => {
    const a = S.answers[it.no];
    return it.type === 'mcq' ? typeof a === 'number' : !!(a && a.trim());
  };
  // Thứ tự hiển thị các phương án (xáo trộn mỗi lần vào thi); câu trả lời vẫn lưu theo vị trí gốc trong file đề
  const order = it => (S.perm && S.perm[it.no]) || it.options.map((o, i) => i);
  const letterOf = (it, i) => LETTERS[order(it).indexOf(i)];
  const keys = it => [].concat(it.answer); // đáp án trắc nghiệm có thể là 1 số hoặc 1 mảng
  const normShort = s => String(s).trim().replace(/\s+/g, '').replace(',', '.').toLowerCase();
  // Chấm một câu với câu trả lời a (số thứ tự phương án gốc, hoặc chuỗi với câu trả lời ngắn)
  function check(it, a) {
    if (it.type === 'mcq') return typeof a === 'number' && keys(it).includes(a);
    if (!a || !String(a).trim()) return false;
    const mine = normShort(a);
    return it.answer.some(k => {
      const key = normShort(k);
      if (key === mine) return true;
      const u = Number(mine), v = Number(key);
      return mine !== '' && isFinite(u) && isFinite(v) && Math.abs(u - v) < 1e-9;
    });
  }
  const isCorrect = it => isAnswered(it) && check(it, S.answers[it.no]);

  function applyPrefs() {
    document.body.classList.toggle('dark', !!S.dark);
    document.documentElement.style.setProperty('--fs', S.fs + 'px');
    VnIme.mode = S.imeMode;
  }
  function wrapWideMath(el) {
    el.querySelectorAll('.katex').forEach(math => {
      if (math.closest('.mobile-math-line')) return;
      const matrix = !!math.querySelector('.mtable');
      const card = math.closest('.formula-box, .concept-box, .example-prob, .example-sol, .formula-exercise, .trap-box');
      const boundary = math.closest('.q-text, .group-stem, .opt, .steps > div, .formula-box, .concept-box, .example-prob, .example-sol, .formula-exercise, .trap-box') || el;
      const mathWidth = math.getBoundingClientRect().width;
      const tooWide = boundary.clientWidth > 0 && mathWidth > boundary.clientWidth - 24;
      const longFormula = card && window.matchMedia('(max-width: 600px)').matches && mathWidth > 100;
      if (!matrix && !tooWide && !longFormula) return;
      if (matrix) math.classList.add('mobile-matrix');
      const line = document.createElement('span');
      line.className = matrix ? 'mobile-math-line mobile-math-overflow' : 'mobile-math-line mobile-math-fit';
      math.parentNode.insertBefore(line, math);
      line.appendChild(math);
      if (!matrix && window.matchMedia('(max-width: 600px)').matches) {
        const available = Math.max(80, line.clientWidth - 8);
        const renderedWidth = math.getBoundingClientRect().width;
        if (renderedWidth > available) {
          math.style.fontSize = `${Math.max(.68, available / renderedWidth) * 100}%`;
        }
      }
      let parent = line, next = line.nextSibling;
      while (!next && parent !== el && parent.parentNode) {
        parent = parent.parentNode;
        next = parent.nextSibling;
      }
      if (next && next.nodeType === Node.TEXT_NODE) {
        const punctuation = /^\s*([.,;:!?])\s*/.exec(next.textContent);
        if (punctuation) {
          const mark = document.createElement('span');
          mark.className = 'mobile-math-punctuation';
          mark.textContent = punctuation[1];
          line.appendChild(mark);
          next.textContent = next.textContent.slice(punctuation[0].length);
        }
        if (!next.textContent) next.parentNode.removeChild(next);
      }
    });
  }
  function typeset(el) {
    if (window.renderMathInElement) {
      window.renderMathInElement(el, {
        delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
        throwOnError: false
      });
      wrapWideMath(el);
    }
  }
  function go(screen) {
    S.screen = screen;
    save();
    render();
    window.scrollTo(0, 0);
  }

  // ---------- Hộp thoại ----------
  function modal({ title, body, okText, okClass, cancelText, red, onOk }) {
    modalRoot.innerHTML = `
      <div class="overlay">
        <div class="modal" role="dialog" aria-modal="true">
          <div class="modal-head ${red ? 'red' : ''}"><span>${title}</span><button data-close aria-label="Đóng">×</button></div>
          <div class="modal-body">${body}</div>
          <div class="modal-foot">
            <button class="btn-grey" data-close>${cancelText}</button>
            <button class="${okClass}" data-ok>${okText}</button>
          </div>
        </div>
      </div>`;
    modalRoot.onclick = e => {
      if (e.target.closest('[data-ok]')) {
        const note = modalRoot.querySelector('#report-note');
        const val = note ? note.value : undefined;
        closeModal();
        onOk(val);
      }
      else if (e.target.closest('[data-close]') || e.target.classList.contains('overlay')) closeModal();
    };
  }
  function closeModal() { modalRoot.innerHTML = ''; }

  // ---------- Thành phần dùng chung ----------
  function imeText() {
    if (S.imeMode === 'off') return 'Bộ gõ ngoài';
    return VnIme.enabled ? IME_LABEL[S.imeMode] : 'Tắt';
  }
  function imeFab() {
    const off = S.imeMode === 'off' || !VnIme.enabled;
    return `<button class="ime-fab ${off ? 'off' : ''}" data-act="ime-cycle" title="Bấm để đổi kiểu gõ · Ctrl+Shift để bật/tắt"><b>VN</b>&nbsp; Bộ gõ: ${imeText()}</button>`;
  }
  function topbar(part) {
    const p = S.profile;
    const doneCount = items ? items.filter(isAnswered).length : 0;
    const totalCount = items ? items.length : 0;
    const progText = part === 2 ? `<span class="tb-prog" id="tb-prog">Đã làm: ${doneCount}/${totalCount}</span>` : '';
    return `
      <div class="topbar">
        <div class="tb-left">
          <div class="badge"><b>${esc(exam.code)}</b><small>${esc(exam.subject)}</small></div>
          <span class="tb-name">${esc(p.name)}</span>
          <span class="tb-sbd">${esc(p.sbd)}</span>
          ${S.lock ? `<span class="lock-sm" id="lock-pill-sm">🔒 ${(S.viol || []).length}</span>` : ''}
        </div>
        <div class="tb-timer" id="timer">
          <small>THỜI GIAN CÒN LẠI — PHẦN ${part} (${part === 1 ? 'NLXH' : 'TN/TLN'})</small>
          <span>🕒 <span id="timer-val">--:--</span>${progText}</span>
        </div>
        <div class="tb-right">
          ${S.lock ? `<span class="pill" id="lock-pill">${lockText()}</span>` : ''}
          <span class="pill" id="ime-pill">⌨ Bộ gõ tích hợp · ${imeText()}</span>
          <span>
            <button class="tb-btn" data-act="fs-down" title="Thu nhỏ chữ">A−</button>
            <button class="tb-btn" data-act="fs-up" title="Phóng to chữ">A+</button>
            <button class="tb-btn" data-act="dark" title="Chế độ tối">☾</button>
          </span>
          ${part === 1
            ? '<button class="btn-next" data-act="to-p2">Sang Phần 2</button>'
            : '<button class="btn-submit" data-act="submit">Nộp bài</button>'}
        </div>
      </div>`;
  }
  function connBox() {
    return `
      <div class="conn">
        <small>Tình trạng kết nối</small>
        <span class="ok">▣ Đang kết nối</span>
        <div class="saved">Lưu bài (trên máy này): <span id="saved-at">${S.savedAt ? clock(S.savedAt) : 'chưa có'}</span></div>
      </div>`;
  }

  // ---------- Màn hình ----------
  function viewLogin() {
    if (!EXAMS.length) return '<div class="login-wrap"><div class="login-card">Chưa có đề nào. Hãy thêm file đề vào thư mục <b>data/</b>.</div></div>';
    const last = S.profile || {};
    return `
      <div class="login-wrap">
        <form class="login-card" id="login-form" autocomplete="off">
          <div class="login-logo">🎓</div>
          <h1>Luyện thi Văn bằng 2</h1>
          <div class="login-sub">Mô phỏng bài thi đánh giá trên máy tính — bản luyện tập cá nhân, không phải hệ thống thi chính thức</div>
          <div class="field">
            <label for="sbd">Số báo danh (SBD)</label>
            <input id="sbd" placeholder="Nhập số báo danh" value="${esc(last.sbd || '')}">
          </div>
          <div class="field">
            <label for="pin">Mã xác thực (PIN)</label>
            <input id="pin" type="password" placeholder="Nhập mã PIN...">
          </div>
          <div class="error" id="login-err"></div>
          <button class="btn-login" type="submit">➜ ĐĂNG NHẬP VÀO THI</button>
          <details class="practice-box" open>
            <summary>Thiết lập luyện tập</summary>
            <div class="field">
              <label for="name">Họ và tên</label>
              <input id="name" placeholder="Thí sinh luyện tập" value="${esc(last.name || '')}">
            </div>
            <div class="field">
              <label for="exam">Chọn đề</label>
              <select id="exam"><option value="${MIX_ID}" ${S.examId === MIX_ID ? 'selected' : ''}>Đề trộn ngẫu nhiên (giữ ma trận đề, mỗi lần một đề mới)</option>${EXAMS.map(e => `<option value="${esc(e.id)}" ${e.id === S.examId ? 'selected' : ''}>${esc(e.title)}</option>`).join('')}</select>
            </div>
          </details>
          <div class="login-note">Chế độ luyện tập: nhập SBD và PIN bất kỳ để vào thi.</div>
          <button class="btn-ghost btn-wide" type="button" data-act="open-exams" style="margin-top:10px">📚 Thư viện 32 đề thi & Tiến độ</button>
          <button class="btn-ghost btn-wide" type="button" data-act="open-theory" style="margin-top:6px">📖 Cẩm nang lý thuyết & Công thức trọng tâm</button>
          <button class="btn-ghost btn-wide" type="button" data-act="open-essays" style="margin-top:6px">📝 Cẩm nang nghị luận xã hội 500 chữ</button>
          <button class="btn-ghost btn-wide" type="button" data-act="open-stats" style="margin-top:6px">📊 Thống kê · Luyện theo chủ đề · Sổ câu sai${wrongCount() ? ' (' + wrongCount() + ')' : ''}</button>
        </form>
      </div>`;
  }

  function viewPrecheck() {
    const p = S.profile;
    const nGroupQ = exam.groups.reduce((n, g) => n + g.questions.length, 0);
    const nTest = items.length;
    const perGroup = exam.groups.length ? exam.groups[0].questions.length : 0;
    const total = exam.essayMinutes + exam.testMinutes;
    return `
      <div class="page">
        <div class="page-head">
          <button class="btn-ghost" data-act="logout">⇤ Đăng xuất</button>
          <div class="small">LUYỆN TẬP</div>
          <h2>KIỂM TRA TRƯỚC KHI THI</h2>
        </div>
        <div class="banner"><small>BÀI THI ĐĂNG KÝ</small><b>${esc(exam.code)}</b></div>
        <div style="display:flex;gap:8px;justify-content:center;margin-bottom:16px;flex-wrap:wrap">
          <button class="btn-ghost" data-act="open-exams">📚 Thư viện 32 đề thi</button>
          <button class="btn-ghost" data-act="open-theory">📖 Cẩm nang lý thuyết & Công thức</button>
          <button class="btn-ghost" data-act="open-essays">📝 Ôn nghị luận xã hội</button>
        </div>

        <div class="card accent">
          <h3>Cấu trúc đề thi của bạn</h3>
          <p>Theo bài thi <b>${esc(exam.code)}</b> (${esc(exam.code)} — ${esc(exam.subject)}), đề thi gồm <b>2 phần</b> theo thứ tự cố định dưới đây. Phần 1 (NLXH) tối đa <b>${exam.essayMinutes} phút</b>; Phần 2 (TN/TLN) tối đa <b>${exam.testMinutes} phút</b> (tổng ${total} phút). Khi chuyển sang Phần 2 sẽ khóa bài tự luận và không được quay lại.</p>
          <table class="struct">
            <tr><th>STT</th><th>PHẦN</th><th>HÌNH THỨC</th><th>SỐ CÂU</th><th>THỜI GIAN</th></tr>
            <tr><td>1</td><td><b>Nghị luận xã hội</b></td><td>Tự luận (essay)</td><td><b>1 câu</b></td><td>tối đa ${exam.essayMinutes} phút</td></tr>
            <tr><td>2</td><td><b>${esc(exam.subject)} — Trắc nghiệm độc lập</b></td><td>Trắc nghiệm 4 lựa chọn</td><td><b>${exam.mcq.length} câu</b></td><td>tối đa ${exam.testMinutes} phút</td></tr>
            <tr><td>3</td><td><b>${esc(exam.subject)} — Câu hỏi nhóm</b></td><td>${exam.groups.length} nhóm × ${perGroup} câu</td><td><b>${nGroupQ} câu</b></td><td>—</td></tr>
            <tr><td>4</td><td><b>${esc(exam.subject)} — Trả lời ngắn</b></td><td>Trả lời ngắn độc lập</td><td><b>${exam.short.length} câu</b></td><td>—</td></tr>
          </table>
          <div class="total-row"><b>Tổng số câu trong đề: ${nTest + 1} câu</b> &nbsp; (= 1 câu Nghị luận xã hội + ${nTest} câu ${esc(exam.subject)})</div>
        </div>

        <div class="card">
          <h3>Thông tin đăng ký</h3>
          <div class="info-grid">
            <div class="info-item full"><small>Họ và tên</small><b>${esc(p.name)}</b></div>
            <div class="info-item"><small>Số báo danh</small><b>${esc(p.sbd)}</b></div>
            <div class="info-item"><small>Đề thi</small><b>${esc(exam.title)}</b></div>
            <div class="info-item"><small>Ca thi</small><b>Luyện tập — ${new Date().toLocaleDateString('vi-VN')}</b></div>
            <div class="info-item"><small>Phòng thi</small><b>Tự luyện</b></div>
            <div class="info-item full"><span class="ok">✔ Đã xác thực tài khoản</span></div>
          </div>
        </div>

        <div class="card">
          <h3>Kiểm tra gõ Tiếng Việt</h3>
          <p>Chọn đúng một cách nhập. <b>Bộ gõ tích hợp</b> dùng cho Auto/Telex/VNI; nếu dùng UniKey/EVKey/Windows Vietnamese hãy chọn <b>Bộ gõ ngoài</b> (tắt bộ gõ tích hợp). Sau đó gõ lại câu sau:</p>
          <div class="seg" id="ime-seg">
            ${Object.keys(IME_LABEL).map(m => `<button data-ime-mode="${m}" class="${S.imeMode === m ? 'on' : ''}">${IME_LABEL[m]}</button>`).join('')}
          </div>
          <div class="hint">Chế độ <b>Tự động</b> nhận cả Telex lẫn VNI. Phím tắt <b>Ctrl+Shift</b>: bật/tắt nhanh bộ gõ.</div>
          <div class="sample">${SAMPLE}</div>
          <input class="ime-input" id="ime-test" data-ime placeholder="Gõ vào đây..." autocomplete="off" spellcheck="false" value="${S.imeOk ? SAMPLE : ''}">
          <div id="ime-result" style="margin-top:8px"></div>
        </div>

        <div class="checks">
          <div id="chk-ime"></div>
          <div class="lock-opt"><label><input type="checkbox" id="lock-opt" ${S.lock ? 'checked' : ''}> <b>Chế độ phòng thi</b>: toàn màn hình, chặn sao chép / dán và phím tắt, ghi nhận mỗi lần rời màn hình thi</label>
            <div class="hint">Trang web không thể khóa máy như phần mềm thi thật: Alt+Tab hay phím Windows vẫn hoạt động, nhưng mỗi lần rời đi sẽ bị đếm và hiện cảnh báo.</div></div>
          <div><span class="issued">✔ Đề thi đã được phát</span></div>
          <div><button class="btn-start" id="btn-start" data-act="start">▶ BẮT ĐẦU LÀM BÀI</button></div>
          <div id="chk-ready"></div>
        </div>
      </div>
      ${imeFab()}`;
  }

  function viewPart1() {
    const e = exam.essay;
    return `
      ${topbar(1)}
      <div class="notice"><b>Phần 1 — Nghị luận xã hội:</b> tối đa ${exam.essayMinutes} phút. Khi sang Phần 2 sẽ <b>khóa bài tự luận và không được quay lại</b>. Phần 2 (TN/TLN) tối đa ${exam.testMinutes} phút.</div>
      <div class="exam">
        <div>
          <h2>PHẦN 1: Tự luận</h2>
          <div class="sub"></div>
          <div class="q essay-prompt">
            <b>Đề thi Viết:</b><br>
            ${e.prompt}
            <div class="src">${e.source || ''}</div>
            ${e.task}
            <div class="essay-meta"><span id="wc">0</span> chữ &nbsp;·&nbsp; <span class="saved-ok" id="essay-saved">${S.savedAt ? 'Đã lưu lúc ' + clock(S.savedAt) : 'Chưa lưu'}</span></div>
            <b>Bài làm Nghị luận xã hội</b>
            <textarea id="essay" data-ime spellcheck="false" style="margin-top:8px">${esc(S.essay)}</textarea>
          </div>
        </div>
        <div class="side">${connBox()}</div>
      </div>
      ${imeFab()}`;
  }

  function questionHtml(it) {
    const a = S.answers[it.no];
    let body;
    if (it.type === 'mcq') {
      body = order(it).map((i, d) => `
        <button class="opt ${a === i ? 'sel' : ''}" data-opt="${i}">
          <span class="letter">${LETTERS[d]}</span><span>${it.options[i]}</span>
        </button>`).join('');
    } else {
      body = `
        <span class="answered-tag">Đã trả lời</span>
        <div class="short-box ${isAnswered(it) ? 'filled' : ''}">
          <label for="short-${it.no}">Câu trả lời ngắn câu ${it.no}</label>
          <input id="short-${it.no}" data-short placeholder="Nhập câu trả lời ngắn của bạn..." autocomplete="off" value="${esc(a || '')}">
        </div>`;
    }
    let stem = '';
    if (it.group && it.first) {
      const n = it.group.questions.length;
      stem = `<div class="group-stem"><small>Câu hỏi nhóm (Câu ${it.no} – ${it.no + n - 1})</small>${it.group.stem}</div>`;
    }
    return `${stem}
      <div class="q ${isAnswered(it) ? 'done' : ''}" id="q-${it.no}" data-no="${it.no}">
        <div class="q-no">Câu ${it.no}:</div>
        <div class="q-text">${it.q}</div>
        ${body}
        <div class="flag"><label><input type="checkbox" data-flag ${S.flags[it.no] ? 'checked' : ''}> Đánh dấu xem lại</label></div>
      </div>`;
  }
  const sheetClass = it => (S.flags[it.no] ? 'flagged' : isAnswered(it) ? 'ans' : '');

  function viewPart2() {
    return `
      ${topbar(2)}
      <div class="notice"><b>Phần 2 — Trắc nghiệm / trả lời ngắn:</b> tối đa ${exam.testMinutes} phút. Phần 1 (NLXH) đã khóa — chỉ làm câu trắc nghiệm / trả lời ngắn.</div>
      <div class="exam">
        <div>
          <h2>PHẦN 2: ${esc(exam.subject)}</h2>
          <div class="sub">${items.length} câu trắc nghiệm / trả lời ngắn · tối đa ${exam.testMinutes} phút.</div>
          ${items.map(questionHtml).join('')}
        </div>
        <div class="side">
          <div class="sheet">
            <h3>Phiếu Trả Lời</h3>
            <div class="sheet-grid">
              ${items.map(it => `<button data-goto="${it.no}" id="s-${it.no}" class="${sheetClass(it)}">${it.no}</button>`).join('')}
            </div>
            <div class="legend">
              <span><i style="background:var(--blue);border-color:var(--blue)"></i>Đã trả lời</span>
              <span><i style="background:var(--yellow);border-color:var(--yellow)"></i>Đánh dấu xem lại</span>
              <span><i></i>Chưa làm</span>
            </div>
          </div>
          ${connBox()}
        </div>
      </div>
      ${imeFab()}`;
  }

  function reviewHtml() {
    const st = loadStats();
    return items.map(it => {
      const done = isAnswered(it), right = isCorrect(it);
      const cls = !done ? 'blank' : right ? 'right' : 'wrong';
      const verdict = !done ? 'Chưa trả lời' : right ? '✔ Đúng' : '✘ Sai';
      let detail;
      if (it.type === 'mcq') {
        detail = `<ul class="opts">${order(it).map((i, d) =>
          `<li class="${keys(it).includes(i) ? 'key' : S.answers[it.no] === i ? 'mine' : ''}"><b>${LETTERS[d]}.</b> ${it.options[i]}</li>`).join('')}</ul>
          <div class="res"><b>${verdict}</b> · Bạn chọn: <b>${done ? letterOf(it, S.answers[it.no]) : '—'}</b> · Đáp án: <b>${keys(it).map(k => letterOf(it, k)).sort().join(' hoặc ')}</b></div>`;
      } else {
        detail = `<div class="res"><b>${verdict}</b> · Bạn trả lời: <b>${done ? esc(S.answers[it.no]) : '—'}</b> · Đáp án: <b>${esc(it.answer[0])}</b></div>`;
      }
      const stem = it.group ? `<div class="exp">${it.group.stem}</div>` : '';
      return `<div class="rv ${cls}" id="rv-q-${it.no}"><b>Câu ${it.no}.</b> ${stem}${it.q}${detail}${explainHtml(it)}${reportBtn(it, st)}</div>`;
    }).join('');
  }

  function resultSheetHtml() {
    if (!items || !items.length) return '';
    return `
      <div class="sheet" style="margin-top:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px">
          <h3 style="margin:0;font-size:15px">Phiếu tổng quan kết quả Phần 2</h3>
          <small class="pending">Bấm vào ô câu để cuộn nhanh đến lời giải</small>
        </div>
        <div class="rv-sheet-grid">
          ${items.map(it => {
            const done = isAnswered(it), right = isCorrect(it);
            const cls = !done ? 'rs-blank' : right ? 'rs-right' : 'rs-wrong';
            return `<button type="button" class="${cls}" data-rv-goto="${it.no}" title="Câu ${it.no}: ${!done ? 'Chưa làm' : right ? 'Đúng' : 'Sai'}">${it.no}</button>`;
          }).join('')}
        </div>
        <div class="legend">
          <span><i style="background:#dcfce7;border-color:var(--green)"></i>Đúng (${items.filter(isCorrect).length})</span>
          <span><i style="background:#fee2e2;border-color:var(--red)"></i>Sai (${items.filter(it => isAnswered(it) && !isCorrect(it)).length})</span>
          <span><i style="background:var(--field);border-color:#9ca3af"></i>Chưa làm (${items.filter(it => !isAnswered(it)).length})</span>
        </div>
      </div>`;
  }

  function historyChartHtml(hist) {
    if (!hist || hist.length < 2) return '';
    const pts = hist.slice(-8);
    const maxScore = Math.max.apply(null, pts.map(h => h.max || 70));
    const w = 400, h = 90, padX = 24, padY = 16;
    const step = (w - padX * 2) / (pts.length - 1);
    const coords = pts.map((p, i) => {
      const x = padX + i * step;
      const y = h - padY - ((p.score / (p.max || maxScore)) * (h - padY * 2));
      return { x, y, score: p.score };
    });
    const pathD = coords.map((c, i) => (i === 0 ? `M ${c.x} ${c.y}` : `L ${c.x} ${c.y}`)).join(' ');
    const areaD = `${pathD} L ${coords[coords.length - 1].x} ${h - padY} L ${coords[0].x} ${h - padY} Z`;
    return `
      <div style="margin:12px 0 10px;padding:12px;background:var(--field);border-radius:8px">
        <div style="font-size:12px;font-weight:600;margin-bottom:6px;color:var(--muted)">📈 Xu hướng điểm Phần 2 qua các lần thi gần đây:</div>
        <svg viewBox="0 0 ${w} ${h}" style="width:100%;max-height:100px;overflow:visible">
          <path d="${areaD}" fill="rgba(37,99,235,0.12)" />
          <path d="${pathD}" fill="none" stroke="var(--blue)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          ${coords.map(c => `
            <circle cx="${c.x}" cy="${c.y}" r="3.5" fill="var(--blue)" />
            <text x="${c.x}" y="${c.y - 6}" font-size="9" font-weight="bold" fill="var(--text)" text-anchor="middle">${fmtScore(c.score)}</text>
          `).join('')}
        </svg>
      </div>`;
  }

  function viewResult() {
    const r = S.result, p = S.profile;
    const hist = history().slice(-8).reverse();
    return `
      <div class="page result">
        <div class="card">
          <h2>✔ Nộp bài thành công</h2>
          <div class="confirm-box"><b class="t">Đề nghị thí sinh xác nhận</b>
            Ở kỳ thi thật, thí sinh <b>đối chiếu</b> các thông tin (họ tên, số báo danh, bài thi), <b>điểm phần trắc nghiệm / trả lời ngắn</b> và <b>bài làm tự luận</b> hiển thị bên dưới với bảng điểm do giám thị cung cấp, sau đó <b>ký xác nhận</b> vào bảng điểm.</div>
          <div class="info-grid">
            <div class="info-item full"><small>Họ và tên thí sinh</small><b>${esc(p.name)}</b></div>
            <div class="info-item"><small>Số báo danh</small><b>${esc(p.sbd)}</b></div>
            <div class="info-item"><small>Bài thi</small><b>${esc(exam.code)}</b></div>
          </div>
          <div class="score">
            <small>Điểm Phần 2 — Trắc nghiệm / Trả lời ngắn (tối đa ${exam.testPoints} điểm)</small>
            <b>${fmtScore(r.score)}</b> <span>/ ${exam.testPoints}</span>
            <div class="pending">Đúng ${r.correct} / ${r.total} câu${r.auto ? ' · hệ thống tự nộp do hết giờ' : ''}</div>
          </div>
          ${lockSummary()}
          ${resultSheetHtml()}
          <div class="wait" style="margin-top:14px">⏳ <b>Điểm Phần 1 — Tự luận (NLXH, tối đa ${exam.essayPoints} điểm): Chờ chấm</b><br>
            Tổng điểm cuối cùng = Phần 1 + Phần 2 (tối đa ${exam.essayPoints + exam.testPoints} điểm). Ở bản luyện tập, phần tự luận do bạn tự đánh giá.</div>
          <h3>Bài làm tự luận (NLXH) — ${countWords(S.essay)} chữ</h3>
          <div class="essay-view">${esc(S.essay) || '<span class="pending">(Không có bài làm)</span>'}</div>
          <div class="actions">
            <button class="btn-start" data-act="review">Xem đáp án chi tiết</button>
            <button class="btn-ghost" data-act="print-result">🖨️ In kết quả / PDF</button>
            <button class="btn-ghost" data-act="open-stats">Thống kê · Luyện theo chủ đề</button>
            <button class="btn-ghost" data-act="restart">Làm bài mới</button>
          </div>
        </div>
        ${attemptTopics()}
        <div class="card" id="review" hidden><h3>Đáp án và lời giải Phần 2</h3>${reviewHtml()}</div>
        ${hist.length ? `<div class="card"><h3>Lịch sử luyện tập</h3>
          ${historyChartHtml(history())}
          <table class="history"><tr><th>Thời gian</th><th>Đề</th><th>Điểm Phần 2</th><th>Số câu đúng</th><th></th></tr>
          ${hist.map(h => `<tr>
            <td>${new Date(h.at).toLocaleString('vi-VN')}</td>
            <td>${esc(h.title)}</td>
            <td>${fmtScore(h.score)} / ${h.max}</td>
            <td>${h.correct} / ${h.total}</td>
            <td>${h.answers ? `<button class="btn-small" data-review-hist="${esc(h.id || '')}">Xem lại</button>` : ''}</td>
          </tr>`).join('')}
          </table></div>` : ''}
      </div>`;
  }

  // ---------- Thống kê theo chủ đề, sổ câu sai, báo câu lỗi ----------
  function loadStats() {
    let st = {};
    try { st = JSON.parse(localStorage.getItem(LS_STATS)) || {}; } catch (e) { /* bỏ qua */ }
    return Object.assign({ topics: {}, wrong: {}, reports: {} }, st);
  }
  function saveStats(st) {
    try { localStorage.setItem(LS_STATS, JSON.stringify(st)); } catch (e) { /* bỏ qua */ }
  }
  // Ghi nhận một câu vừa làm: cộng vào thống kê chủ đề; sai thì vào sổ câu sai, đúng thì gỡ khỏi sổ
  function record(st, it, right) {
    const t = st.topics[it.topic] || (st.topics[it.topic] = [0, 0]);
    t[1]++;
    if (right) { t[0]++; delete st.wrong[it.ref]; }
    else { const w = st.wrong[it.ref] || { c: 0 }; w.c++; w.t = Date.now(); st.wrong[it.ref] = w; }
  }
  const topicName = id => TOP.names[id] || 'Khác';
  // Mỗi dòng lời giải là một bước; lời giải ngắn cũng dùng cùng bố cục.
  const noteHtml = it => (it.note ? `<div class="note"><b>Lưu ý:</b> ${it.note}</div>` : '');
  const explainHtml = it => (!it.explain ? noteHtml(it) : `<div class="exp"><b>Lời giải:</b><div class="steps">${
    it.explain.split('<br>').map(l => `<div>${l}</div>`).join('')
  }</div></div>` + noteHtml(it));
  const refLabel = ref => (REF[ref] ? `${REF[ref].exam.title} — Câu ${REF[ref].item.no}` : ref);
  const pct = (a, b) => (b ? Math.round(100 * a / b) : null);
  const barHtml = p => (p === null ? '<span class="pending">chưa có dữ liệu</span>'
    : `<span class="bar"><i class="${p < 50 ? 'low' : p < 75 ? 'mid' : 'high'}" style="width:${p}%"></i></span> <b>${p}%</b>`);
  function reportBtn(it, st) {
    return `<div class="report"><button type="button" class="link-btn" data-report="${esc(it.ref)}">${st.reports[it.ref] ? '⚑ Đã báo lỗi — sửa ghi chú' : '⚑ Báo câu này có vấn đề'}</button></div>`;
  }
  function shuffle(p) {
    for (let i = p.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    return p;
  }

  // Kết quả theo chủ đề của riêng lần thi vừa nộp
  function attemptTopics() {
    const by = {};
    items.forEach(it => { const t = by[it.topic] || (by[it.topic] = [0, 0]); t[1]++; if (isCorrect(it)) t[0]++; });
    const rows = TOP.order.filter(id => by[id]).map(id => ({ id, a: by[id][0], b: by[id][1], p: pct(by[id][0], by[id][1]) })).sort((u, v) => u.p - v.p);
    return `<div class="card"><h3>Kết quả theo chủ đề của lần thi này</h3>
      <table class="history topics"><tr><th>Chủ đề</th><th>Đúng</th><th>Tỉ lệ</th></tr>
      ${rows.map(r => `<tr><td>${esc(topicName(r.id))}</td><td>${r.a} / ${r.b}</td><td>${barHtml(r.p)}</td></tr>`).join('')}
      </table></div>`;
  }

  function viewStats() {
    const st = loadStats();
    const pool = {}, wrongBy = {};
    Object.values(REF).forEach(r => { pool[r.item.topic] = (pool[r.item.topic] || 0) + 1; });
    const wrongRefs = Object.keys(st.wrong).filter(r => REF[r]);
    wrongRefs.forEach(r => { const t = REF[r].item.topic; wrongBy[t] = (wrongBy[t] || 0) + 1; });
    const rows = TOP.order.map(id => { const t = st.topics[id] || [0, 0]; return { id, a: t[0], b: t[1], p: pct(t[0], t[1]) }; })
      .sort((u, v) => (u.p === null) - (v.p === null) || u.p - v.p);
    const total = rows.reduce((s, r) => [s[0] + r.a, s[1] + r.b], [0, 0]);
    const reports = Object.keys(st.reports);
    const back = S.result && S.profile ? '← Về kết quả bài thi' : '← Về trang đăng nhập';
    return `
      <div class="page">
        <div class="page-head">
          <button class="btn-ghost" data-act="stats-back">${back}</button>
          <div class="small">LUYỆN TẬP</div>
          <h2>THỐNG KÊ VÀ LUYỆN THEO CHỦ ĐỀ</h2>
          <div style="margin-top:8px"><button class="btn-ghost" data-act="open-theory" style="font-size:13px">📖 Mở Cẩm nang lý thuyết & Công thức trọng tâm</button></div>
        </div>
        <div class="card accent">
          <h3>Tỉ lệ làm đúng theo chủ đề</h3>
          <p>Cộng dồn từ các lần thi đã nộp và các lượt luyện tập trên máy này (tổng ${total[0]} / ${total[1]} câu đúng). Chủ đề yếu nhất xếp trên cùng. Bấm <b>Luyện 10 câu</b> để làm không tính giờ, xem lời giải ngay sau từng câu.</p>
          <table class="history topics">
            <tr><th>Chủ đề</th><th>Đúng</th><th>Tỉ lệ</th><th>Đang sai</th><th></th></tr>
            ${rows.map(r => `<tr>
              <td>
                <div style="display:flex;align-items:center;gap:6px">
                  <b>${esc(topicName(r.id))}</b>
                  ${TOPIC_HINTS[r.id] ? `<button type="button" class="link-btn" data-toggle-hint="${r.id}" style="font-size:12px" title="Bấm để xem/ẩn gợi ý trọng tâm">💡 Gợi ý</button>` : ''}
                </div>
                <div class="pending">${pool[r.id] || 0} câu trong kho</div>
                ${TOPIC_HINTS[r.id] ? `<div class="topic-hint" id="hint-${r.id}"><b>Trọng tâm:</b> ${esc(TOPIC_HINTS[r.id])}</div>` : ''}
              </td>
              <td>${r.b ? r.a + ' / ' + r.b : '—'}</td>
              <td>${barHtml(r.p)}</td>
              <td>${wrongBy[r.id] || 0}</td>
              <td><button class="btn-small" data-practice-topic="${r.id}" ${pool[r.id] ? '' : 'disabled'}>Luyện 10 câu</button></td></tr>`).join('')}
          </table>
        </div>
        <div class="card">
          <h3>Sổ câu sai</h3>
          <p>Hiện có <b>${wrongRefs.length}</b> câu bạn làm sai (hoặc bỏ trống trong một lần thi đã làm từ nửa đề trở lên) và chưa làm lại đúng. Mỗi câu sẽ được gỡ khỏi sổ khi bạn làm đúng.</p>
          <button class="btn-start" data-act="p-wrong" ${wrongRefs.length ? '' : 'disabled'}>Luyện lại câu sai (tối đa 15 câu mỗi lượt)</button>
        </div>
        <div class="card">
          <h3>Câu đã báo có vấn đề (${reports.length})</h3>
          ${reports.length ? `<p>Gửi danh sách này để được kiểm tra và sửa đề.</p>
            <table class="history">${reports.map(ref => `<tr><td><b>${esc(refLabel(ref))}</b><div class="pending">${esc(st.reports[ref].note || '(không ghi chú)')}</div></td>
              <td style="width:1%"><button class="btn-small" data-del-report="${esc(ref)}">Xóa</button></td></tr>`).join('')}</table>
            <textarea class="report-out" id="report-out" readonly rows="${Math.min(8, reports.length + 1)}">${esc(reports.map(ref => `${refLabel(ref)} [${ref}]: ${st.reports[ref].note || ''}`).join('\n'))}</textarea>
            <div class="actions" style="justify-content:flex-start"><button class="btn-ghost" data-act="copy-reports">Sao chép danh sách</button></div>`
            : '<p class="pending">Chưa có câu nào. Khi xem đáp án hoặc luyện tập, bấm “Báo câu này có vấn đề” ở câu bạn nghi ngờ.</p>'}
        </div>
        <div class="actions"><button class="btn-ghost" data-act="clear-stats">Xóa toàn bộ thống kê và sổ câu sai</button></div>
      </div>`;
  }

  // ---------- Thư viện đề thi & Tiến độ ----------
  let examFilter = 'all';
  function viewExamList() {
    const hist = history();
    const doneExams = {};
    hist.forEach(h => {
      const id = h.examId || (h.title && h.title.includes('Đề số') ? 'ca1-so-' + (h.title.match(/Đề số (\d+)/) || ['','01'])[1] : null);
      if (id) {
        if (!doneExams[id] || doneExams[id].score < h.score) {
          doneExams[id] = h;
        }
      }
    });

    const allList = [{
      id: MIX_ID,
      title: 'Đề trộn ngẫu nhiên',
      code: 'CA1',
      subject: 'Toán cao cấp',
      desc: 'Sinh tự động mỗi lần một đề mới từ kho hơn 600 câu, giữ đúng ma trận Bộ Công an.'
    }].concat(EXAMS);

    const filtered = allList.filter(e => {
      const isDone = !!doneExams[e.id];
      if (examFilter === 'done') return isDone;
      if (examFilter === 'todo') return !isDone && e.id !== MIX_ID;
      return true;
    });

    const doneCount = Object.keys(doneExams).filter(id => id !== MIX_ID).length;
    const back = S.profile ? '← Về màn hình chuẩn bị thi' : '← Về trang đăng nhập';

    return `
      <div class="page">
        <div class="page-head">
          <button class="btn-ghost" data-act="exams-back">${back}</button>
          <div class="small">DANH SÁCH ĐỀ THI</div>
          <h2>THƯ VIỆN ĐỀ THI & TIẾN ĐỘ</h2>
        </div>

        <div class="card accent">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
            <div>
              <b style="font-size:16px">Tiến độ hoàn thành: ${doneCount} / ${EXAMS.length} đề</b>
              <div class="pending">Chọn một đề bất kỳ để vào luyện tập hoặc thi thử</div>
            </div>
            <div class="bar" style="width:160px;height:12px">
              <i class="high" style="width:${Math.round(doneCount * 100 / (EXAMS.length || 1))}%"></i>
            </div>
          </div>
        </div>

        <div class="exam-filter-bar">
          <button class="exam-filter-btn ${examFilter === 'all' ? 'active' : ''}" data-filter-exam="all">Tất cả (${allList.length})</button>
          <button class="exam-filter-btn ${examFilter === 'todo' ? 'active' : ''}" data-filter-exam="todo">Chưa làm (${EXAMS.length - doneCount})</button>
          <button class="exam-filter-btn ${examFilter === 'done' ? 'active' : ''}" data-filter-exam="done">Đã làm (${doneCount})</button>
        </div>

        <div class="exam-cards-grid">
          ${filtered.map(e => {
            const h = doneExams[e.id];
            const isSel = S.examId === e.id;
            return `
              <div class="exam-item-card ${isSel ? 'selected' : ''}">
                <div>
                  <div class="exam-card-title">${esc(e.title)}</div>
                  <div class="exam-card-sub">${esc(e.desc || (e.code + ' · ' + e.subject))}</div>
                  ${h ? `<span class="exam-card-badge badge-done">✔ Cao nhất: ${fmtScore(h.score)} / ${h.max} (${h.correct}/${h.total} câu)</span>`
                      : `<span class="exam-card-badge badge-new">${e.id === MIX_ID ? '★ Vô hạn đề' : '○ Chưa làm'}</span>`}
                </div>
                <button class="btn-start" style="padding:7px 12px;font-size:13px;width:100%;margin-top:10px" data-select-exam="${esc(e.id)}">
                  ${isSel ? '✔ Đang chọn đề này' : 'Chọn đề này'}
                </button>
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }


  // ---------- Khu Ôn Lý Thuyết & Công Thức Trọng Tâm ----------
  let theoryCat = 'all';
  let theoryQuery = '';

  function viewTheory() {
    const TD = window.THEORY_DATA || { categories: [], topics: {} };
    const q = theoryQuery.trim().toLowerCase();
    const addedFormulas = window.THEORY_FORMULA_ADDITIONS || {};
    const formulaPractice = window.THEORY_FORMULA_PRACTICE || {};

    const formulasFor = id => (TD.topics[id].formulas || []).concat(addedFormulas[id] || []);
    const exercisesFor = (id, formula) => formula.examples || (formulaPractice[id] || {})[formula.name] || [];

    let topicIds = TOP.order.slice();
    if (theoryCat !== 'all') {
      const catObj = TD.categories.find(c => c.id === theoryCat);
      if (catObj) topicIds = catObj.topics.slice();
    }

    if (q) {
      topicIds = topicIds.filter(id => {
        const top = TD.topics[id];
        if (!top) return false;
        if (top.title.toLowerCase().includes(q) || topicName(id).toLowerCase().includes(q)) return true;
        if (top.theory && top.theory.some(t => t.title.toLowerCase().includes(q) || t.text.toLowerCase().includes(q))) return true;
        const deep = (window.THEORY_DEEP_DATA || {})[id] || [];
        if (deep.some(section => section.title.toLowerCase().includes(q) || section.content.toLowerCase().includes(q))) return true;
        const formulaMatches = formulasFor(id).some(f =>
          f.name.toLowerCase().includes(q) || f.content.toLowerCase().includes(q) ||
          exercisesFor(id, f).some(ex =>
            (ex.level || '').toLowerCase().includes(q) || ex.problem.toLowerCase().includes(q) || ex.solution.toLowerCase().includes(q)
          )
        );
        if (formulaMatches) return true;
        const examples = (top.examples || []).concat(((window.THEORY_EXTRA_EXAMPLES || {})[id] || []));
        if (examples.some(ex => ex.title.toLowerCase().includes(q) || ex.problem.toLowerCase().includes(q) || ex.solution.toLowerCase().includes(q))) return true;
        if (top.traps && top.traps.some(t => t.toLowerCase().includes(q))) return true;
        return false;
      });
    }

    const topicCount = Object.keys(TD.topics).length;
    const backText = '← Về trang đăng nhập';

    return `
      <div class="page">
        <div class="page-head">
          <button class="btn-ghost" data-act="theory-back">${backText}</button>
          <div class="small">TÀI LIỆU ÔN THI VB2 CA1</div>
          <h2>CẨM NANG LÝ THUYẾT, ĐỊNH LÝ & PHƯƠNG PHÁP GIẢI</h2>
        </div>

        <div class="theory-search-wrap">
          <input class="theory-search-input" id="theory-search" placeholder="🔍 Tìm kiếm công thức, định lý, ví dụ, từ khóa (ví dụ: Gauss, Leontief, Cramer, Green, Hessian...)" value="${esc(theoryQuery)}">
        </div>

        <div class="theory-outline">
          <div class="theory-outline-head">
            <b>Đề cương: ${topicCount} chuyên đề trong ${TD.categories.length} nhóm kiến thức</b>
            <span>${topicIds.length} chuyên đề đang hiển thị</span>
          </div>
          <details class="theory-outline-details">
            <summary>Xem danh sách ${topicIds.length} chuyên đề</summary>
            <nav class="theory-outline-links" aria-label="Mục lục chuyên đề">
              ${topicIds.map(id => `<a href="#theory-${id}" data-theory-topic="${id}">${esc(topicName(id))}</a>`).join('')}
            </nav>
          </details>
          <div class="theory-outline-note">Chọn nhóm để lọc nhanh; mở danh sách nếu muốn đến thẳng một chuyên đề.</div>
        </div>

        <div class="formula-section-title">Lọc theo nhóm kiến thức</div>
        <div class="theory-tabs">
          <button class="theory-tab-btn ${theoryCat === 'all' ? 'active' : ''}" data-theory-cat="all">Tất cả (${topicCount} chuyên đề)</button>
          ${TD.categories.map(c => `
            <button class="theory-tab-btn ${theoryCat === c.id ? 'active' : ''}" data-theory-cat="${c.id}">${esc(c.name)} (${c.topics.length})</button>
          `).join('')}
        </div>

        ${!topicIds.length ? `
          <div class="card" style="text-align:center;padding:30px 20px">
            <div style="font-size:32px;margin-bottom:8px">🔍</div>
            <b>Không tìm thấy nội dung nào khớp với từ khóa "${esc(theoryQuery)}"</b>
            <div class="pending" style="margin-top:6px">Thử tìm kiếm với từ khóa khác hoặc bấm nút "Tất cả" ở trên.</div>
          </div>
        ` : topicIds.map(id => {
          const top = TD.topics[id];
          if (!top) return '';
          const formulas = formulasFor(id);
          const knowledge = (top.theory || []).map(section => ({ title: section.title, content: section.text }))
            .concat((window.THEORY_DEEP_DATA || {})[id] || []);
          const examples = (top.examples || []).concat(((window.THEORY_EXTRA_EXAMPLES || {})[id] || []));
          return `
            <details class="theory-topic-card" id="theory-${id}">
              <summary class="theory-topic-summary">
                <span class="theory-topic-title">
                  <span>${esc(top.title)}</span>
                  <span class="theory-badge">${esc(top.badge || 'Toán cao cấp')}</span>
                </span>
              </summary>
              <div class="theory-topic-content">
                <div class="theory-topic-head">
                <button class="btn-small" data-practice-topic="${id}">🎯 Luyện 10 câu chuyên đề này</button>
                </div>

              ${formulas.length ? `
                <div class="formula-section-title">📌 Công thức trọng tâm & cách áp dụng</div>
                ${formulas.map(f => `
                  <div class="formula-box">
                    <b class="f-name">• ${f.name}</b>
                    <div>${f.content}</div>
                    ${exercisesFor(id, f).length ? `
                      <div class="formula-exercises">
                        <b class="formula-exercises-title">Bài tập vận dụng</b>
                        ${exercisesFor(id, f).map((ex, exIdx) => `
                          <div class="formula-exercise">
                            <div><span class="exercise-level">${esc(ex.level || (exIdx ? 'Vận dụng cao' : 'Vận dụng'))}</span> ${ex.problem}</div>
                            <details>
                              <summary>Xem lời giải</summary>
                              <div class="formula-exercise-solution">${ex.solution}</div>
                            </details>
                          </div>
                        `).join('')}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              ` : ''}

              ${examples.length ? `
                <div class="formula-section-title">💡 Ví dụ theo dạng bài</div>
                ${examples.map((ex, idx) => `
                  <div class="example-card">
                    <div class="example-head">
                      <span>${ex.title || ('Ví dụ ' + (idx + 1))}</span>
                    </div>
                    <div class="example-prob">
                      <b>Bài toán:</b> ${ex.problem}
                    </div>
                    <details class="example-solution-details">
                      <summary>Xem cách giải từng bước</summary>
                      <div class="example-sol">${ex.solution}</div>
                    </details>
                  </div>
                `).join('')}
              ` : ''}

              ${knowledge.length ? `
                <details class="theory-details">
                  <summary>📖 Lý thuyết nền & giải thích chi tiết (${knowledge.length} mục)</summary>
                  <div class="theory-details-content">
                    ${knowledge.map((section, idx) => `
                      <div class="concept-box">
                        <b class="c-title">${idx + 1}. ${section.title}</b>
                        <div>${section.content}</div>
                      </div>
                    `).join('')}
                  </div>
                </details>
              ` : ''}

              ${top.traps && top.traps.length ? `
                <details class="theory-details trap-details">
                  <summary>⚠️ Lỗi thường gặp & lưu ý (${top.traps.length})</summary>
                  <div class="trap-box">
                    <ul class="trap-list">
                      ${top.traps.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                  </div>
                </details>
              ` : ''}
              </div>
            </details>`;
        }).join('')}
      </div>`;
  }

  // ---------- Luyện tập không tính giờ (từng câu, có lời giải ngay) ----------
  function startPractice(title, refs, topic) {
    const perm = {};
    refs.forEach(ref => { const it = REF[ref].item; if (it.type === 'mcq') perm[ref] = shuffle(it.options.map((o, i) => i)); });
    S.practice = { title, refs, i: 0, perm, ans: {}, topic: topic || null };
    go('practice');
  }
  // Chọn câu cho một chủ đề: ưu tiên các câu đang nằm trong sổ câu sai, còn lại lấy ngẫu nhiên
  function pickTopic(id, n) {
    const st = loadStats();
    const all = Object.keys(REF).filter(r => REF[r].item.topic === id);
    const wrong = shuffle(all.filter(r => st.wrong[r])).slice(0, Math.ceil(n / 2));
    // phần còn lại: mỗi dạng bài chỉ lấy một câu, để một lượt luyện không gặp hai câu chỉ khác số
    const kinds = new Set(wrong.map(r => kindOf(REF[r].item))), rest = [], spare = [];
    shuffle(all.filter(r => !wrong.includes(r))).forEach(r => {
      const k = kindOf(REF[r].item);
      if (kinds.has(k)) spare.push(r); else { kinds.add(k); rest.push(r); }
    });
    return shuffle(wrong.concat(rest.concat(spare).slice(0, n - wrong.length)));
  }
  function answerPractice(val) {
    const P = S.practice, ref = P.refs[P.i], it = REF[ref].item;
    if (P.ans[ref] !== undefined) return;
    P.ans[ref] = val;
    const st = loadStats();
    record(st, it, check(it, val));
    saveStats(st);
    save();
    render();
  }
  function viewPractice() {
    const P = S.practice;
    if (!P || !P.refs.length || !P.refs.every(r => REF[r])) return viewStats();
    const n = P.refs.length, st = loadStats();
    const head = `<div class="page-head"><button class="btn-ghost" data-act="p-quit">✕ Kết thúc</button>
      <div class="small">LUYỆN TẬP KHÔNG TÍNH GIỜ</div><h2>${esc(P.title)}</h2></div>`;
    if (P.i >= n) {
      const right = P.refs.filter(r => check(REF[r].item, P.ans[r])).length;
      return `<div class="page">${head}
        <div class="card"><div class="score"><small>Kết quả lượt luyện</small><b>${right}</b> <span>/ ${n} câu đúng</span></div>
          <table class="history">${P.refs.map((r, i) => `<tr><td>Câu ${i + 1}</td><td>${esc(refLabel(r))}</td><td>${check(REF[r].item, P.ans[r]) ? '<span class="ok">✔ Đúng</span>' : '<span style="color:var(--red)">✘ Sai</span>'}</td></tr>`).join('')}</table>
          <div class="actions">
            ${P.topic ? `<button class="btn-start" data-practice-topic="${P.topic}">Luyện tiếp 10 câu chủ đề này</button>` : '<button class="btn-start" data-act="p-wrong">Luyện tiếp câu sai</button>'}
            <button class="btn-ghost" data-act="p-quit">Về trang đăng nhập</button>
          </div></div></div>`;
    }
    const ref = P.refs[P.i], it = REF[ref].item, a = P.ans[ref], done = a !== undefined, right = done && check(it, a);
    let body;
    if (it.type === 'mcq') {
      const ord = P.perm[ref] || it.options.map((o, i) => i);
      body = ord.map((i, d) => `
        <button class="opt ${done ? (keys(it).includes(i) ? 'correct' : a === i ? 'wrongsel' : '') : ''}" data-opt="${i}" ${done ? 'disabled' : ''}>
          <span class="letter">${LETTERS[d]}</span><span>${it.options[i]}</span>
        </button>`).join('');
    } else {
      body = `<div class="short-box ${done ? 'filled' : ''}">
          <label for="p-short">Câu trả lời ngắn</label>
          <input id="p-short" placeholder="Nhập câu trả lời rồi bấm Kiểm tra (hoặc Enter)..." autocomplete="off" value="${esc(done ? a : '')}" ${done ? 'disabled' : ''}>
        </div>
        ${done ? '' : '<div class="actions" style="justify-content:flex-start"><button class="btn-start" data-act="p-check">Kiểm tra</button></div>'}`;
    }
    const key = it.type === 'mcq' ? keys(it).map(k => LETTERS[(P.perm[ref] || []).indexOf(k)]).sort().join(' hoặc ') : esc(it.answer[0]);
    const feedback = !done ? '' : `
      <div class="rv ${right ? 'right' : 'wrong'}" style="margin-top:12px">
        <div class="res"><b>${right ? '✔ Đúng' : '✘ Sai'}</b> · Đáp án: <b>${key}</b></div>
        ${explainHtml(it)}
        <div class="exp">Nguồn: ${esc(refLabel(ref))}</div>
        ${reportBtn(it, st)}
      </div>
      <div class="actions">
        ${P.i > 0 ? '<button class="btn-ghost" data-act="p-prev">← Câu trước</button>' : ''}
        <button class="btn-start" data-act="p-next">${P.i + 1 < n ? 'Câu tiếp theo ➜' : 'Xem kết quả lượt luyện'}</button>
      </div>`;
    return `<div class="page">${head}
      <div class="exam-like">
        <div class="p-nav">
          <button class="btn-ghost" data-act="p-prev" ${P.i > 0 ? '' : 'disabled'}>← Câu trước</button>
          <span class="pending">Câu ${P.i + 1} / ${n} · ${esc(topicName(it.topic))}</span>
          <button class="btn-ghost" data-act="p-next" ${done && P.i + 1 < n ? '' : 'disabled'}>Câu sau →</button>
        </div>
        ${it.group ? `<div class="group-stem"><small>Thông tin chung</small>${it.group.stem}</div>` : ''}
        <div class="q"><div class="q-text">${it.q}</div>${body}</div>
        ${feedback}
      </div></div>`;
  }
  function openReport(ref) {
    const st = loadStats();
    modal({
      title: 'Báo câu hỏi có vấn đề',
      body: `<b>${esc(refLabel(ref))}</b><p style="margin:8px 0">Mô tả ngắn điều bạn nghi ngờ (đáp án sai, đề thiếu dữ kiện, lỗi hiển thị...):</p>
        <textarea id="report-note" rows="4" style="width:100%;padding:8px;border:1px solid var(--line);border-radius:6px">${esc((st.reports[ref] || {}).note || '')}</textarea>`,
      cancelText: 'Hủy', okText: 'Lưu báo lỗi', okClass: 'btn-warn',
      onOk: note => {
        const s2 = loadStats();
        s2.reports[ref] = { note: (note || '').trim(), at: Date.now() };
        saveStats(s2);
        document.querySelectorAll('[data-report]').forEach(b => { if (b.dataset.report === ref) b.textContent = '⚑ Đã báo lỗi — sửa ghi chú'; });
      }
    });
  }

  // ---------- Chế độ phòng thi: toàn màn hình, chặn phím tắt và sao chép/dán, ghi nhận mỗi lần rời màn hình thi ----------
  // Lưu ý: trình duyệt không cho trang web khóa máy thật sự như Safe Exam Browser. Alt+Tab, phím Windows,
  // Ctrl+Alt+Del do hệ điều hành xử lý; trang chỉ có thể phát hiện và ghi lại việc rời đi chứ không ngăn được.
  const guardRoot = document.body.appendChild(document.createElement('div'));
  let fsPending = false, fsBroken = false, awaySince = 0;
  const inExam = () => S.screen === 'p1' || S.screen === 'p2';
  const locked = () => !!S.lock && inExam();
  const lockText = () => '🔒 Phòng thi · rời màn hình: ' + (S.viol || []).length;
  function hideGuard() { guardRoot.innerHTML = ''; }
  function showGuard(title, text) {
    guardRoot.innerHTML = `<div class="guard"><div class="guard-box"><h3>${title}</h3><p>${text}</p>
      <p class="pending">Số lần rời màn hình thi trong bài này: <b>${(S.viol || []).length}</b>. Đồng hồ vẫn đang chạy.</p>
      <button class="btn-start" id="guard-back">Quay lại bài thi</button></div></div>`;
  }
  guardRoot.addEventListener('click', e => { if (e.target.id === 'guard-back') { hideGuard(); enterLock(); } });
  function lockKeys() {
    // Chrome/Edge: khi đang toàn màn hình, giữ luôn phím Esc và một số phím hệ thống cho trang (nếu trình duyệt hỗ trợ)
    if (navigator.keyboard && navigator.keyboard.lock) navigator.keyboard.lock().catch(() => {});
  }
  function enterLock() {
    const el = document.documentElement;
    if (document.fullscreenElement) { lockKeys(); return; }
    if (!el.requestFullscreen) { fsBroken = true; return; }
    fsPending = true;
    el.requestFullscreen().then(() => { fsPending = false; fsBroken = false; lockKeys(); })
      .catch(() => { fsPending = false; fsBroken = true; });
  }
  function leaveLock() {
    hideGuard();
    awaySince = 0;
    if (navigator.keyboard && navigator.keyboard.unlock) navigator.keyboard.unlock();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  }
  function violation(type, secs) {
    (S.viol = S.viol || []).push({ t: Date.now(), type, secs: secs || 0 });
    save();
    const pill = document.getElementById('lock-pill');
    if (pill) pill.textContent = lockText();
    const pillSm = document.getElementById('lock-pill-sm');
    if (pillSm) pillSm.textContent = '🔒 ' + (S.viol || []).length;
  }
  function checkLock() {   // gọi sau mỗi lần vẽ lại màn hình (kể cả khi tải lại trang giữa bài thi)
    if (!locked()) { hideGuard(); return; }
    if (!document.fullscreenElement && !fsPending && !fsBroken && !guardRoot.innerHTML) {
      showGuard('Chế độ phòng thi', 'Bài thi đang ở chế độ phòng thi. Hãy quay lại chế độ toàn màn hình để làm tiếp.');
    }
  }
  document.addEventListener('fullscreenchange', () => {
    if (!locked() || document.fullscreenElement || fsPending) return;
    violation('thoát toàn màn hình');
    showGuard('Bạn đã thoát chế độ toàn màn hình', 'Trong chế độ phòng thi, bài làm phải ở chế độ toàn màn hình.');
  });
  function away() { if (locked() && !awaySince) awaySince = Date.now(); }
  function back() {
    if (!awaySince) return;
    const ms = Date.now() - awaySince;
    awaySince = 0;
    if (!locked() || ms < 800) return;   // bỏ qua mất tiêu điểm chớp nhoáng, ví dụ lúc chuyển sang toàn màn hình
    const secs = Math.round(ms / 1000);
    violation('rời cửa sổ thi', secs);
    showGuard('Bạn đã rời màn hình thi', `Bạn vừa chuyển sang cửa sổ hoặc thẻ khác trong khoảng ${secs} giây.`);
  }
  document.addEventListener('visibilitychange', () => (document.hidden ? away() : back()));
  window.addEventListener('blur', away);
  window.addEventListener('focus', back);
  document.addEventListener('keydown', e => {
    if (!locked()) return;
    const k = (e.key || '').toLowerCase(), ctrl = e.ctrlKey || e.metaKey, one = k.length === 1;
    const fkey = ['f1', 'f3', 'f5', 'f6', 'f7', 'f11', 'f12'].includes(k);
    const combo = ctrl && one && 'rpsufgjhldonwt'.includes(k);                         // tải lại, in, lưu, xem nguồn, tìm, thẻ mới...
    const dev = ctrl && e.shiftKey && one && 'ijc'.includes(k);                         // công cụ nhà phát triển
    const nav = e.altKey && ['arrowleft', 'arrowright', 'home'].includes(k);            // lùi / tiến trang
    if (fkey || combo || dev || nav) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  ['contextmenu', 'copy', 'cut', 'paste', 'dragstart', 'drop'].forEach(type =>
    document.addEventListener(type, e => { if (locked()) e.preventDefault(); }, true));
  function lockSummary() {
    if (!S.lock) return '<div class="pending" style="text-align:center;margin-bottom:12px">Chế độ phòng thi: tắt</div>';
    const v = S.viol || [], secs = v.reduce((s, x) => s + (x.secs || 0), 0);
    return `<div class="${v.length ? 'wait' : 'pending'}" style="text-align:center;margin-bottom:12px">🔒 Chế độ phòng thi: ${v.length
      ? `rời màn hình thi <b>${v.length}</b> lần (tổng khoảng ${secs} giây ở ngoài)` : 'không rời màn hình thi lần nào'}</div>`;
  }

    // ---------- Cẩm nang Nghị luận Xã hội (NLXH 500 từ) ----------
  let essayTab = 'method'; // 'method' | 'evidence' | 'samples' | 'practice'
  let essayTheme = 'theme-all';
  let essayQuery = '';
  let essayPracticeId = 'p-01';
  let essayTimerSec = 45 * 60;
  let essayTimerRunning = false;
  let essayTimerInterval = null;
  let essayShowOutline = false;
  const LS_ESSAY_DRAFTS = 'vb2ca_essay_drafts_v1';
  let essayDrafts = {};
  try {
    essayDrafts = JSON.parse(localStorage.getItem(LS_ESSAY_DRAFTS)) || {};
  } catch (e) { essayDrafts = {}; }

  function getEssayDraft(id) {
    return essayDrafts[id] || '';
  }
  function saveEssayDraft(id, text) {
    essayDrafts[id] = text;
    try {
      localStorage.setItem(LS_ESSAY_DRAFTS, JSON.stringify(essayDrafts));
    } catch (e) {}
  }

  function updateStudioWordMeter() {
    const ta = document.getElementById('studio-essay');
    if (!ta) return;
    const text = ta.value;
    const words = countWords(text);
    const targetWords = 500;
    const pct = Math.min(100, Math.round((words / targetWords) * 100));

    let meterColor = '#f59e0b';
    let statusText = 'Chưa đủ ý (' + words + '/' + targetWords + ' từ)';
    let statusBg = '#fef3c7';
    let statusTextColor = '#92400e';

    if (words >= targetWords && words <= 750) {
      meterColor = '#16a34a';
      statusText = 'Đạt chuẩn điểm cao Bộ Công an (' + words + ' từ)';
      statusBg = '#dcfce7';
      statusTextColor = '#15803d';
    } else if (words > 750) {
      meterColor = '#8b5cf6';
      statusText = 'Bài khá dài (' + words + ' từ), lưu ý thời gian!';
      statusBg = '#f3e8ff';
      statusTextColor = '#6b21a8';
    } else if (words >= 300) {
      meterColor = '#2563eb';
      statusText = 'Sắp đạt (' + words + '/' + targetWords + ' từ)';
      statusBg = '#dbeafe';
      statusTextColor = '#1e40af';
    }

    const counter = document.getElementById('meter-counter');
    if (counter) counter.innerHTML = 'Đã gõ: <b>' + words + '</b> / ' + targetWords + ' từ';

    const bar = document.getElementById('meter-bar');
    if (bar) {
      bar.style.width = pct + '%';
      bar.style.backgroundColor = meterColor;
    }

    const st = document.getElementById('meter-status');
    if (st) {
      st.textContent = statusText;
      st.style.background = statusBg;
      st.style.color = statusTextColor;
    }

    const saveSt = document.getElementById('studio-save-status');
    if (saveSt) {
      saveSt.textContent = '💾 Đã lưu nháp lúc ' + clock(Date.now());
    }
  }

    function viewEssayGuides() {
    const back = S.profile ? 'Về kiểm tra trước khi thi' : 'Về trang đăng nhập';
    const M = window.ESSAY_METHODOLOGY || {};
    const themes = window.ESSAY_THEMES || [];
    const guides = window.ESSAY_GUIDES || [];
    const samples = window.ESSAY_SAMPLES || [];
    const practiceList = window.ESSAY_PRACTICE_LIST || [];

    // Filter evidence by query & theme
    let filteredGuides = guides.slice();
    if (essayTheme !== 'theme-all') {
      filteredGuides = filteredGuides.filter(g => g.themeId === essayTheme);
    }
    if (essayQuery.trim()) {
      const q = essayQuery.trim().toLowerCase();
      filteredGuides = filteredGuides.filter(g =>
        (g.theme || '').toLowerCase().includes(q) ||
        (g.sourceTitle || '').toLowerCase().includes(q) ||
        (g.evidence || '').toLowerCase().includes(q) ||
        (g.issue || '').toLowerCase().includes(q) ||
        (g.sampleQuote || '').toLowerCase().includes(q) ||
        (g.prompt || '').toLowerCase().includes(q)
      );
    }

    // Filter samples by theme
    let filteredSamples = samples.slice();
    if (essayTheme !== 'theme-all') {
      filteredSamples = filteredSamples.filter(s => s.themeId === essayTheme);
    }

    // Get current practice prompt
    const allPrompts = practiceList.slice();
    EXAMS.forEach(ex => {
      if (ex.essay && !allPrompts.some(p => p.id === ex.id)) {
        allPrompts.push({
          id: ex.id,
          themeId: 'theme-era',
          title: ex.title + ' (Đề thi CA1)',
          prompt: ex.essay.prompt,
          task: ex.essay.task,
          minWords: ex.essay.minWords || 500,
          outline: []
        });
      }
    });

    let curPrompt = allPrompts.find(p => p.id === essayPracticeId) || allPrompts[0] || {
      id: 'p-01',
      title: 'Đề tự luyện tập',
      prompt: 'Nghị luận xã hội',
      task: 'Viết bài nghị luận tối thiểu 500 từ',
      minWords: 500,
      outline: []
    };

    const curDraft = getEssayDraft(curPrompt.id);
    const curWords = countWords(curDraft);

    // Meter calculation
    const targetWords = curPrompt.minWords || 500;
    const pct = Math.min(100, Math.round((curWords / targetWords) * 100));
    let meterColor = '#f59e0b';
    let statusText = 'Chưa đủ ý (' + curWords + '/' + targetWords + ' từ)';
    let statusBg = '#fef3c7';
    let statusTextColor = '#92400e';

    if (curWords >= targetWords && curWords <= 750) {
      meterColor = '#16a34a';
      statusText = 'Đạt chuẩn điểm cao Bộ Công an (' + curWords + ' từ)';
      statusBg = '#dcfce7';
      statusTextColor = '#15803d';
    } else if (curWords > 750) {
      meterColor = '#8b5cf6';
      statusText = 'Bài khá dài (' + curWords + ' từ), lưu ý thời gian!';
      statusBg = '#f3e8ff';
      statusTextColor = '#6b21a8';
    } else if (curWords >= 300) {
      meterColor = '#2563eb';
      statusText = 'Sắp đạt (' + curWords + '/' + targetWords + ' từ)';
      statusBg = '#dbeafe';
      statusTextColor = '#1e40af';
    }

    const formatTimer = sec => {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return pad(m) + ':' + pad(s);
    };

    return `
      <div class="page essay-guides">
        <div class="page-head">
          <button class="btn-ghost" data-act="essays-back">${back}</button>
          <div style="text-align:center">
            <div class="essay-badge-pill">🛡️ TÀI LIỆU ÔN THI ĐẶC QUYỀN • BỘ CÔNG AN (CA1)</div>
            <h2>CẨM NANG ÔN THI NGHỊ LUẬN XÃ HỘI (TỐI THIỂU 500 CHỮ)</h2>
            <p class="essay-header-desc">
              Chiến thuật viết văn chính luận đạt 26 - 28/30 điểm • Sổ tay 22 dẫn chứng thời sự Báo CAND 2024 - 2026 • 12 Bài mẫu chuẩn điểm cao • Phòng luyện viết studio thông minh.
            </p>
          </div>
        </div>

        <!-- Tab Navigation -->
        <nav class="essay-tab-bar" aria-label="Tabs nghị luận xã hội">
          <button class="essay-tab-btn ${essayTab === 'method' ? 'active' : ''}" data-essay-tab="method">
            📋 Phương pháp & Thang điểm Bộ CA
          </button>
          <button class="essay-tab-btn ${essayTab === 'evidence' ? 'active' : ''}" data-essay-tab="evidence">
            📰 Sổ tay Dẫn chứng Báo CAND <span class="tab-badge">${guides.length}</span>
          </button>
          <button class="essay-tab-btn ${essayTab === 'samples' ? 'active' : ''}" data-essay-tab="samples">
            📚 Bài mẫu Chuẩn 500+ Chữ <span class="tab-badge">${samples.length}</span>
          </button>
          <button class="essay-tab-btn ${essayTab === 'practice' ? 'active' : ''}" data-essay-tab="practice">
            ✍️ Phòng Luyện Viết Studio
          </button>
        </nav>

        <!-- TAB 1: PHƯƠNG PHÁP & THANG ĐIỂM -->
        ${essayTab === 'method' ? `
          <div class="essay-tab-content">
            <div class="essay-hero-card">
              <h3>🎯 Quy chuẩn Bài thi Tự luận Bộ Công An (Mã CA1, CA2...)</h3>
              <p style="margin:6px 0 10px;line-height:1.6;font-size:14px">
                <b>Thời gian:</b> 45 – 60 phút &nbsp;•&nbsp;
                <b>Điểm số:</b> 30 / 100 điểm tổng &nbsp;•&nbsp;
                <b>Dung lượng bắt buộc:</b> Tối thiểu 500 từ (khuyến nghị chuẩn: <b>550 – 700 từ</b>).
              </p>
              <p style="margin:0;font-size:13.5px;color:var(--muted);line-height:1.55">
                ${esc(M.examFormat ? M.examFormat.summary : '')}
              </p>
            </div>

            <h3 style="color:var(--navy);margin:24px 0 10px">📊 Ma trận 6 Tiêu chí Chấm điểm Tự luận</h3>
            <table class="essay-matrix-table">
              <thead>
                <tr>
                  <th style="width:32%">Tiêu chí & Điểm số</th>
                  <th>Yêu cầu đạt điểm tối đa của Giám khảo</th>
                </tr>
              </thead>
              <tbody>
                ${(M.scoringMatrix || []).map(sm => `
                  <tr>
                    <td><b>${esc(sm.criteria)}</b></td>
                    <td>${esc(sm.detail)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <h3 style="color:var(--navy);margin:24px 0 10px">⚡ Chiến thuật 5 Bước Viết Bài trong 45 Phút</h3>
            <div class="essay-step-grid">
              ${(M.fiveSteps || []).map(st => `
                <div class="essay-step-card">
                  <div class="essay-step-head">
                    <span class="essay-step-num">${esc(st.step)}: ${esc(st.name)}</span>
                  </div>
                  <div style="font-size:13px;line-height:1.55;color:var(--text)">${esc(st.action)}</div>
                </div>
              `).join('')}
            </div>

            <h3 style="color:var(--navy);margin:24px 0 10px">🏆 Cấu trúc "6 Đoạn Vàng" Bài Văn 550 - 700 Từ Điểm Tuyệt Đối</h3>
            <div class="essay-structure-flow">
              ${(M.goldenStructure || []).map((gs, idx) => `
                <div class="essay-flow-item">
                  <div class="flow-meta">
                    <div>${esc(gs.part)}</div>
                    <div class="flow-words">${esc(gs.words)}</div>
                  </div>
                  <div class="flow-body">${esc(gs.content)}</div>
                </div>
              `).join('')}
            </div>

            <!-- Kỹ thuật phối hợp nhiều dẫn chứng -->
            <h3 style="color:var(--navy);margin:24px 0 10px">💡 Bí quyết Phối hợp Nhiều Dẫn chứng Trong 1 Bài Văn</h3>
            <div class="card" style="margin-bottom:20px;padding:16px 20px">
              <p style="margin:0 0 12px;font-size:13.5px;line-height:1.6">
                Để đạt điểm 28 - 30/30, bài văn nghị luận không nên chỉ đưa 1 dẫn chứng đơn độc. Hãy áp dụng 3 kỹ thuật phối hợp dẫn chứng đắt giá dưới đây:
              </p>
              ${(M.multiEvidenceTechniques || []).map(mt => `
                <div style="margin-bottom:14px;border-left:3px solid var(--blue);padding-left:12px">
                  <b style="color:var(--blue);font-size:14px">${esc(mt.name)}</b>
                  <div style="font-size:13.5px;color:var(--text);margin:4px 0 2px">${esc(mt.desc)}</div>
                  <div style="font-size:13px;color:var(--muted);font-style:italic">${esc(mt.example)}</div>
                </div>
              `).join('')}
            </div>

            <!-- BỘ MẪU MỞ BÀI & KẾT BÀI THEO 10 CHỦ ĐỀ ĐÃ RA VÀ NÓNG NHẤT -->
            <h3 style="color:var(--navy);margin:24px 0 10px">✨ Mẫu Mở bài & Kết bài Theo 10 Chủ đề Nóng Hổi / Đã Ra</h3>
            <p style="margin:-4px 0 14px;color:var(--muted);font-size:13px">
              Được biên soạn chuẩn mực văn phong chính luận hành chính, bám sát các đề thi Bộ Công An và thời sự 2024 - 2026. Có thể ứng dụng ngay cho từng dạng đề cụ thể.
            </p>
            <div>
              ${(M.topicTemplates || []).map((tt, idx) => `
                <article class="topic-template-card">
                  <div class="topic-template-title">
                    <span>${esc(tt.topic)}</span>
                    <button class="btn-ghost" style="font-size:12px;padding:3px 8px" data-act="essay-load-template-prompt" data-idx="${idx}">
                      ✍️ Luyện viết chủ đề này
                    </button>
                  </div>
                  <div class="topic-sample-box">
                    <div class="topic-sample-head">
                      <span>✨ Mẫu Mở bài trực tiếp:</span>
                      <button class="btn-ghost" style="padding:2px 8px;font-size:11.5px" data-act="essay-copy-text" data-text="${esc(tt.opening)}">Sao chép mở bài</button>
                    </div>
                    <div>${esc(tt.opening)}</div>
                  </div>
                  <div class="topic-sample-box ending">
                    <div class="topic-sample-head">
                      <span>🔥 Mẫu Kết bài hào hùng (Liên hệ CAND):</span>
                      <button class="btn-ghost" style="padding:2px 8px;font-size:11.5px" data-act="essay-copy-text" data-text="${esc(tt.ending)}">Sao chép kết bài</button>
                    </div>
                    <div>${esc(tt.ending)}</div>
                  </div>
                </article>
              `).join('')}
            </div>

            <h3 style="color:var(--navy);margin:24px 0 10px">🔗 Bộ Từ Nối & Cụm Từ Chính Luận Đắt Giá</h3>
            <div class="card" style="margin-bottom:20px">
              ${(M.transitionPhrases || []).map(tp => `
                <div style="margin-bottom:12px">
                  <b style="color:var(--blue);font-size:13.5px">${esc(tp.useFor)}:</b>
                  <div style="margin-top:4px">
                    ${tp.examples.map(ex => `<span class="essay-phrase-tag">“${esc(ex)}”</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <h3 style="color:var(--red);margin:24px 0 10px">⚠️ 4 Cạm Bẫy Trừ Điểm Nặng Cần Tránh Tuyệt Đối</h3>
            ${(M.deadlyMistakes || []).map(dm => `
              <div class="essay-danger-card">
                <b style="font-size:14px">${esc(dm.name)}</b>
                <div style="margin:4px 0"><b>Hậu quả:</b> ${esc(dm.consequence)}</div>
                <div><b>Khắc phục:</b> ${esc(dm.solution)}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- TAB 2: SỔ TAY DẪN CHỨNG THỜI SỰ -->
        ${essayTab === 'evidence' ? `
          <div class="essay-tab-content">
            <!-- Search & Filter bar -->
            <div class="essay-search-bar">
              <input class="essay-search-input" id="essay-search" placeholder="🔍 Tìm kiếm dẫn chứng (VNeID, Yagi, Lừa đảo, Ma túy, Tô Lâm, Phú Quốc...)" value="${esc(essayQuery)}">
            </div>

            <!-- Theme Chips -->
            <div class="essay-chips-bar">
              ${themes.map(th => `
                <button class="essay-chip ${essayTheme === th.id ? 'active' : ''}" data-essay-theme="${th.id}">
                  ${th.icon} ${esc(th.name)}
                </button>
              `).join('')}
            </div>

            ${!filteredGuides.length ? `
              <div class="card" style="text-align:center;padding:30px 20px">
                <div style="font-size:32px;margin-bottom:8px">🔍</div>
                <b>Không tìm thấy dẫn chứng nào khớp với từ khóa "${esc(essayQuery)}"</b>
                <div class="pending" style="margin-top:6px">Thử tìm kiếm với từ khóa khác hoặc bấm nút "Tất cả chuyên đề".</div>
              </div>
            ` : `
              <div>
                ${filteredGuides.map(g => `
                  <article class="evidence-card">
                    <div class="evidence-head">
                      <span class="evidence-theme-tag">${esc(g.theme)}</span>
                      <span class="evidence-date">Báo CAND • ${esc(g.date)}</span>
                    </div>
                    <h3 class="evidence-title">${esc(g.sourceTitle)}</h3>
                    <div class="evidence-source">
                      Nguồn: <a href="${esc(g.sourceUrl)}" target="_blank" rel="noopener noreferrer" style="color:var(--blue);font-weight:600">${esc(g.sourceName || 'Báo Công an Nhân dân')}</a>
                    </div>

                    <div class="evidence-highlight-box">
                      <b>📌 Sự kiện & Dẫn chứng cốt lõi:</b><br>
                      ${esc(g.evidence)}
                    </div>

                    <p style="margin:8px 0;font-size:13.5px;line-height:1.55">
                      <b>Vấn đề đặt ra:</b> ${esc(g.issue)}
                    </p>

                    ${g.sampleQuote ? `
                      <div class="evidence-quote-snippet">
                        <b>Đoạn văn trích dẫn mẫu vào bài thi:</b><br>
                        “${esc(g.sampleQuote)}”
                      </div>
                    ` : ''}

                    <details style="margin-top:10px;border-top:1px solid var(--line);padding-top:8px">
                      <summary style="cursor:pointer;color:var(--blue);font-size:13px;font-weight:600">
                        Gợi ý luận điểm, giải pháp và đề tự luyện
                      </summary>
                      <div style="font-size:13px;line-height:1.55;padding:8px 0">
                        <b>Hướng bình luận:</b>
                        <ul style="margin:4px 0 10px;padding-left:20px">${(g.angles || []).map(a => `<li>${esc(a)}</li>`).join('')}</ul>
                        <b>Giải pháp đề xuất:</b>
                        <ul style="margin:4px 0 10px;padding-left:20px">${(g.solutions || []).map(s => `<li>${esc(s)}</li>`).join('')}</ul>
                        <div style="background:var(--field);padding:8px 12px;border-radius:6px">
                          <b>Đề tự luyện:</b> ${esc(g.prompt)}
                        </div>
                      </div>
                    </details>

                    <div class="evidence-actions">
                      ${g.sampleQuote ? `
                        <button class="btn-ghost" style="font-size:12px;padding:4px 10px" data-act="essay-copy-text" data-text="${esc(g.sampleQuote)}">
                          📋 Sao chép câu trích dẫn
                        </button>
                      ` : ''}
                      <button class="btn-ghost" style="font-size:12px;padding:4px 10px" data-act="essay-load-prompt" data-prompt="${esc(g.prompt)}" data-title="${esc(g.sourceTitle)}">
                        ✍️ Luyện viết đề này
                      </button>
                    </div>
                  </article>
                `).join('')}
              </div>
            `}
          </div>
        ` : ''}

        <!-- TAB 3: BÀI MẪU CHUẨN 500+ CHỮ -->
        ${essayTab === 'samples' ? `
          <div class="essay-tab-content">
            <!-- Theme Chips -->
            <div class="essay-chips-bar">
              ${themes.map(th => `
                <button class="essay-chip ${essayTheme === th.id ? 'active' : ''}" data-essay-theme="${th.id}">
                  ${th.icon} ${esc(th.name)}
                </button>
              `).join('')}
            </div>

            <div style="margin-bottom:14px;color:var(--muted);font-size:13.5px">
              Tổng cộng <b>${filteredSamples.length}</b> bài văn mẫu hoàn chỉnh chuẩn 520 - 680 từ. Mỗi bài đều có phân tích dàn ý 6 bước, chỉ rõ các dẫn chứng phối hợp và liên hệ sâu sắc với lý tưởng CAND.
            </div>

            ${filteredSamples.map((s, idx) => `
              <article class="sample-card">
                <div class="sample-meta-row">
                  <span class="sample-words-pill">Bài mẫu 0${idx + 1} • ${s.wordCount || countWords(s.text)} từ (Chuẩn CA)</span>
                  <div>
                    <button class="btn-ghost" style="font-size:12px;padding:4px 10px;margin-right:6px" data-act="essay-copy-text" data-text="${esc(s.text)}">
                      📋 Sao chép bài
                    </button>
                    <button class="btn-ghost" style="font-size:12px;padding:4px 10px" data-act="essay-load-sample-prompt" data-idx="${idx}">
                      ✍️ Luyện viết đề này
                    </button>
                  </div>
                </div>

                <h3 style="margin:4px 0 10px;font-size:17px;color:var(--navy)">${esc(s.title)}</h3>

                <div class="sample-prompt-box">
                  <b>Đề bài:</b> ${esc(s.prompt)}
                </div>

                ${s.evidencesUsed ? `
                  <div style="font-size:13px;color:var(--green);font-weight:600;margin-bottom:10px">
                    📌 Dẫn chứng phối hợp trong bài: ${esc(s.evidencesUsed)}
                  </div>
                ` : ''}

                ${s.outline && s.outline.length ? `
                  <details style="margin-bottom:12px">
                    <summary style="cursor:pointer;color:var(--blue);font-weight:600;font-size:13px">
                      💡 Xem phân tích dàn ý 6 bước của bài này
                    </summary>
                    <div class="sample-outline-box" style="margin-top:8px">
                      <ol style="margin:0;padding-left:20px">
                        ${s.outline.map(ol => `<li>${esc(ol)}</li>`).join('')}
                      </ol>
                    </div>
                  </details>
                ` : ''}

                <div class="sample-article-body">
                  ${s.text.split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('')}
                </div>
              </article>
            `).join('')}
          </div>
        ` : ''}

        <!-- TAB 4: PHÒNG LUYỆN VIẾT STUDIO (TỐI ƯU MOBILE & KHÔNG NÚT THỪA) -->
        ${essayTab === 'practice' ? `
          <div class="essay-tab-content">
            <div class="practice-studio-card">
              <!-- Studio Header & Controls -->
              <div class="studio-top-controls">
                <!-- Row 1: Header + Dropdown Full Width -->
                <div class="studio-prompt-header">
                  <div class="studio-prompt-label-row">
                    <span class="studio-prompt-label">📝 Chọn đề bài luyện viết:</span>
                    <button class="btn-ghost" style="font-size:12.5px;padding:4px 10px" data-act="essay-random-prompt" title="Đổi sang một đề thi ngẫu nhiên khác">
                      🎲 Đổi ngẫu nhiên
                    </button>
                  </div>
                  <select id="practice-prompt-select" class="studio-select">
                    ${allPrompts.map(p => `
                      <option value="${esc(p.id)}" ${p.id === curPrompt.id ? 'selected' : ''}>
                        ${esc(p.title || p.task || p.prompt.slice(0, 45))}
                      </option>
                    `).join('')}
                  </select>
                </div>

                <!-- Row 2: Timer Bar -->
                <div class="studio-timer-bar">
                  <div class="studio-timer-display-group">
                    <span>⏱️</span>
                    <span class="timer-digits" id="essay-timer-display">${formatTimer(essayTimerSec)}</span>
                    <button class="btn-ghost" style="font-size:12.5px;padding:4px 10px" data-act="essay-timer-toggle" id="essay-timer-btn">
                      ${essayTimerRunning ? '⏸️ Tạm dừng' : '▶️ Bắt đầu'}
                    </button>
                  </div>
                  <div class="studio-timer-buttons">
                    <button class="btn-ghost" style="font-size:12px;padding:3px 8px" data-act="essay-timer-set" data-mins="45" title="Đặt lại 45 phút chuẩn thi">
                      45p
                    </button>
                    <button class="btn-ghost" style="font-size:12px;padding:3px 8px" data-act="essay-timer-set" data-mins="60" title="Đặt lại 60 phút">
                      60p
                    </button>
                    <button class="btn-ghost" style="font-size:12px;padding:3px 8px" data-act="essay-timer-set" data-mins="30" title="Đặt lại 30 phút luyện tốc độ">
                      30p
                    </button>
                  </div>
                </div>
              </div>

              <!-- Prompt display box -->
              <div class="studio-prompt-display">
                <div style="font-weight:700;color:var(--navy);margin-bottom:6px">
                  📝 ĐỀ BÀI: ${esc(curPrompt.title || 'Nghị luận xã hội')}
                </div>
                <div style="margin-bottom:8px">
                  ${esc(curPrompt.prompt)}
                </div>
                <div style="font-weight:600;color:var(--blue)">
                  👉 Yêu cầu: ${esc(curPrompt.task || 'Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình.')}
                </div>
              </div>

              <!-- Outline hint drawer (optional) -->
              ${curPrompt.outline && curPrompt.outline.length ? `
                <div style="margin-bottom:12px">
                  <button class="btn-ghost" style="font-size:12.5px;padding:4px 10px" data-act="essay-toggle-outline">
                    ${essayShowOutline ? 'Ẩn dàn ý gợi ý' : '💡 Xem dàn ý gợi ý cho đề này'}
                  </button>
                  ${essayShowOutline ? `
                    <div class="sample-outline-box" style="margin-top:8px">
                      <b>Dàn ý gợi ý 5 bước:</b>
                      <ol style="margin:6px 0 0;padding-left:20px">
                        ${curPrompt.outline.map(o => `<li>${esc(o)}</li>`).join('')}
                      </ol>
                    </div>
                  ` : ''}
                </div>
              ` : ''}

              <!-- Live Word Meter -->
              <div class="studio-live-meter">
                <div class="meter-info-row">
                  <span style="font-weight:700" id="meter-counter">
                    Đã gõ: <b>${curWords}</b> / ${targetWords} từ
                  </span>
                  <span class="meter-status-pill" id="meter-status" style="background:${statusBg};color:${statusTextColor}">
                    ${statusText}
                  </span>
                </div>
                <div class="meter-bar-outer">
                  <div class="meter-bar-inner" id="meter-bar" style="width:${pct}%;background-color:${meterColor}"></div>
                </div>
              </div>

              <!-- Textarea Box -->
              <textarea class="studio-textarea-box" id="studio-essay" data-ime spellcheck="false" placeholder="Nhập bài văn nghị luận của bạn tại đây... (Hỗ trợ gõ tiếng Việt Telex/VNI, tự động lưu bản nháp theo đề)">${esc(curDraft)}</textarea>

              <!-- Bottom Actions -->
              <div class="studio-bottom-actions">
                <div style="font-size:12.5px;color:var(--muted)">
                  <span id="studio-save-status">💾 Tự động lưu bản nháp</span>
                </div>
                <div>
                  <button class="btn-ghost" data-act="essay-copy-draft">📋 Sao chép bài</button>
                  <button class="btn-ghost" data-act="essay-print-draft">🖨️ In / Xuất PDF</button>
                  <button class="btn-ghost" data-act="essay-clear-draft" style="color:var(--red)">🗑️ Xóa nháp</button>
                </div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
  function render() {
    setExam();
    applyPrefs();
    closeModal();
    const free = S.screen === 'stats' || S.screen === 'practice' || S.screen === 'exams' || S.screen === 'theory' || S.screen === 'essays';   // các màn hình này không cần đăng nhập
    if (!exam || (!S.profile && !free)) S.screen = 'login';
    const views = { login: viewLogin, precheck: viewPrecheck, p1: viewPart1, p2: viewPart2, result: viewResult, stats: viewStats, practice: viewPractice, exams: viewExamList, theory: viewTheory, essays: viewEssayGuides };
    app.innerHTML = views[S.screen]();
    typeset(app);
    if (S.screen === 'precheck') updatePrecheck();
    if (S.screen === 'p1') updateWordCount();
    checkLock();
    tick();
  }

  // ---------- Cập nhật cục bộ ----------
  function updatePrecheck() {
    const input = document.getElementById('ime-test');
    const val = input.value.normalize('NFC').trim();
    S.imeOk = val === SAMPLE;
    document.getElementById('ime-result').innerHTML = S.imeOk
      ? '<span class="ok">✔ Gõ Tiếng Việt chính xác!</span>'
      : val ? '<span class="pending">Chưa khớp với câu mẫu (cần đúng cả chữ hoa và dấu).</span>' : '';
    document.getElementById('chk-ime').innerHTML = S.imeOk
      ? '<span class="ok">✔ Đã kiểm tra gõ Tiếng Việt</span>'
      : '<span class="pending">○ Đã kiểm tra gõ Tiếng Việt</span>';
    document.getElementById('btn-start').disabled = !S.imeOk;
    document.getElementById('chk-ready').innerHTML = S.imeOk
      ? '<span class="ok">✔ Bạn đã hoàn thành kiểm tra. Có thể bấm Bắt đầu làm bài.</span>'
      : '<span class="pending">Hãy hoàn thành kiểm tra gõ Tiếng Việt để bắt đầu.</span>';
  }
  function updateWordCount() {
    const el = document.getElementById('wc');
    if (el) el.textContent = countWords(S.essay);
  }
  function showSaved() {
    const t = clock(S.savedAt);
    const a = document.getElementById('saved-at'), b = document.getElementById('essay-saved');
    if (a) a.textContent = t;
    if (b) b.textContent = 'Đã lưu lúc ' + t;
  }
  function refreshIme() {
    VnIme.mode = S.imeMode;
    const fab = document.querySelector('.ime-fab');
    if (fab) fab.outerHTML = imeFab();
    const pill = document.getElementById('ime-pill');
    if (pill) pill.textContent = '⌨ Bộ gõ tích hợp · ' + imeText();
    document.querySelectorAll('[data-ime-mode]').forEach(b => b.classList.toggle('on', b.dataset.imeMode === S.imeMode));
  }
  VnIme.onToggle = refreshIme;

  function refreshQuestion(no) {
    const it = items[no - 1];
    const box = document.getElementById('q-' + no);
    box.classList.toggle('done', isAnswered(it));
    if (it.type === 'mcq') {
      box.querySelectorAll('.opt').forEach(o => o.classList.toggle('sel', Number(o.dataset.opt) === S.answers[no]));
    } else {
      box.querySelector('.short-box').classList.toggle('filled', isAnswered(it));
    }
    document.getElementById('s-' + no).className = sheetClass(it);
    const prog = document.getElementById('tb-prog');
    if (prog && items) prog.textContent = `Đã làm: ${items.filter(isAnswered).length}/${items.length}`;
  }

  // ---------- Chuyển phần / nộp bài ----------
  function startExam() {
    S.essay = ''; S.answers = {}; S.flags = {}; S.result = null; S.viol = [];
    if (items.length === TOP.slots.length) markSeen(items);   // nhớ các dạng vừa gặp để đề trộn lần sau tránh lặp lại
    S.perm = {};
    items.forEach(it => {
      if (it.type !== 'mcq') return;
      S.perm[it.no] = shuffle(it.options.map((o, i) => i));
    });
    S.p1End = Date.now() + exam.essayMinutes * 60000;
    if (S.lock) enterLock();   // phải gọi ngay trong lúc xử lý cú bấm chuột thì trình duyệt mới cho vào toàn màn hình
    go('p1');
  }
  function toPart2() {
    S.p2End = Date.now() + exam.testMinutes * 60000;
    go('p2');
  }
  function submit(auto) {
    const correct = items.filter(isCorrect).length;
    // thống kê: câu bỏ trống chỉ tính là sai khi đã làm từ nửa đề trở lên (tránh làm bẩn số liệu khi nộp thử)
    const st = loadStats(), serious = items.filter(isAnswered).length * 2 >= items.length;
    items.forEach(it => { if (isAnswered(it) || serious) record(st, it, isCorrect(it)); });
    saveStats(st);
    S.result = { correct, total: items.length, score: correct * exam.testPoints / items.length, auto: !!auto };
    const hist = history();
    const entryId = 'hist_' + Date.now();
    hist.push({
      id: entryId,
      at: Date.now(),
      title: exam.title,
      examId: exam.id,
      mix: S.mix ? JSON.parse(JSON.stringify(S.mix)) : null,
      score: S.result.score,
      max: exam.testPoints,
      correct,
      total: items.length,
      answers: Object.assign({}, S.answers),
      essay: S.essay,
      perm: Object.assign({}, S.perm || {})
    });
    try { localStorage.setItem(LS_HISTORY, JSON.stringify(hist.slice(-50))); } catch (e) { /* bỏ qua */ }
    leaveLock();
    go('result');
  }

  function tick() {
    const end = S.screen === 'p1' ? S.p1End : S.screen === 'p2' ? S.p2End : 0;
    if (!end) return;
    const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    const el = document.getElementById('timer-val');
    if (el) {
      el.textContent = `${pad(Math.floor(left / 60))}:${pad(left % 60)}`;
      document.getElementById('timer').classList.toggle('low', left <= 300);
    }
    if (left <= 0) {
      if (S.screen === 'p1') toPart2(); else submit(true);
    }
  }
  setInterval(tick, 500);

  // ---------- Sự kiện ----------
  const actions = {
    logout() { leaveLock(); S.profile = null; go('login'); },
    'open-exams'() { go('exams'); },
    'open-theory'() { go('theory'); },
        'open-essays'() { essayTab = 'method'; go('essays'); },
    'essay-load-prompt'(btn) {
      const promptText = btn.dataset.prompt || '';
      const titleText = btn.dataset.title || 'Đề tự luyện';
      let p = (window.ESSAY_PRACTICE_LIST || []).find(x => x.prompt === promptText);
      if (!p) {
        p = {
          id: 'custom-' + Date.now(),
          themeId: 'theme-era',
          title: titleText,
          prompt: promptText,
          task: 'Viết bài nghị luận (tối thiểu 500 từ) bàn về vấn đề trên.',
          minWords: 500,
          outline: []
        };
        (window.ESSAY_PRACTICE_LIST = window.ESSAY_PRACTICE_LIST || []).push(p);
      }
      essayPracticeId = p.id;
      essayTab = 'practice';
      render();
      const ta = document.getElementById('studio-essay');
      if (ta) { ta.focus(); ta.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    },
    'essay-load-sample-prompt'(btn) {
      const idx = Number(btn.dataset.idx || 0);
      const sample = (window.ESSAY_SAMPLES || [])[idx];
      if (sample) {
        let p = (window.ESSAY_PRACTICE_LIST || []).find(x => x.prompt === sample.prompt);
        if (!p) {
          p = {
            id: sample.id || ('sample-p-' + idx),
            themeId: sample.themeId || 'theme-era',
            title: sample.title,
            prompt: sample.prompt,
            task: 'Viết bài nghị luận (tối thiểu 500 từ) trình bày suy nghĩ của anh/chị.',
            minWords: 500,
            outline: sample.outline || []
          };
          (window.ESSAY_PRACTICE_LIST = window.ESSAY_PRACTICE_LIST || []).push(p);
        }
        essayPracticeId = p.id;
        essayTab = 'practice';
        render();
        const ta = document.getElementById('studio-essay');
        if (ta) { ta.focus(); ta.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }
    },
    'essay-random-prompt'() {
      const list = (window.ESSAY_PRACTICE_LIST || []).concat(
        EXAMS.filter(e => e.essay).map(e => ({
          id: e.id,
          themeId: 'theme-era',
          title: e.title,
          prompt: e.essay.prompt,
          task: e.essay.task,
          minWords: e.essay.minWords || 500,
          outline: []
        }))
      );
      if (!list.length) return;
      const rnd = list[Math.floor(Math.random() * list.length)];
      essayPracticeId = rnd.id;
      render();
    },
    'essay-toggle-outline'() {
      essayShowOutline = !essayShowOutline;
      render();
    },
    'essay-timer-toggle'() {
      if (essayTimerRunning) {
        clearInterval(essayTimerInterval);
        essayTimerRunning = false;
      } else {
        essayTimerRunning = true;
        essayTimerInterval = setInterval(() => {
          if (essayTimerSec > 0) {
            essayTimerSec--;
            const el = document.getElementById('essay-timer-display');
            if (el) {
              const m = Math.floor(essayTimerSec / 60);
              const s = essayTimerSec % 60;
              el.textContent = pad(m) + ':' + pad(s);
            }
          } else {
            clearInterval(essayTimerInterval);
            essayTimerRunning = false;
            alert('⏰ Đã hết thời gian làm bài nghị luận xã hội (45 phút)! Hãy dừng bút và soát lại bài.');
            render();
          }
        }, 1000);
      }
      const btn = document.getElementById('essay-timer-btn');
      if (btn) btn.textContent = essayTimerRunning ? '⏸️ Tạm dừng' : '▶️ Bấm giờ';
    },
        'essay-load-template-prompt'(btn) {
      const idx = Number(btn.dataset.idx || 0);
      const tt = (window.ESSAY_METHODOLOGY && window.ESSAY_METHODOLOGY.topicTemplates) ? window.ESSAY_METHODOLOGY.topicTemplates[idx] : null;
      if (tt) {
        let p = (window.ESSAY_PRACTICE_LIST || []).find(x => x.title === tt.topic);
        if (!p) {
          p = {
            id: 'template-' + idx,
            themeId: 'theme-era',
            title: tt.topic,
            prompt: 'Viết bài nghị luận xã hội về chủ đề: ' + tt.topic,
            task: 'Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) làm sáng tỏ chủ đề trên và liên hệ với trách nhiệm của bản thân.',
            minWords: 500,
            outline: []
          };
          (window.ESSAY_PRACTICE_LIST = window.ESSAY_PRACTICE_LIST || []).push(p);
        }
        essayPracticeId = p.id;
        essayTab = 'practice';
        render();
        const ta = document.getElementById('studio-essay');
        if (ta) { ta.focus(); ta.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }
    },
    'essay-timer-set'(btn) {
      clearInterval(essayTimerInterval);
      essayTimerRunning = false;
      const mins = Number(btn.dataset.mins || 45);
      essayTimerSec = mins * 60;
      render();
    },
    'essay-timer-reset'() {
      clearInterval(essayTimerInterval);
      essayTimerRunning = false;
      essayTimerSec = 45 * 60;
      render();
    },
    'essay-copy-text'(btn) {
      const text = btn.dataset.text || '';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      const orig = btn.textContent;
      btn.textContent = '✓ Đã chép!';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    },
    'essay-copy-draft'(btn) {
      const ta = document.getElementById('studio-essay');
      const text = ta ? ta.value : (getEssayDraft(essayPracticeId) || '');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      const orig = btn.textContent;
      btn.textContent = '✓ Đã chép bài!';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    },
    'essay-clear-draft'() {
      if (confirm('Bạn có chắc chắn muốn xóa bài viết nháp này để viết lại từ đầu không?')) {
        saveEssayDraft(essayPracticeId, '');
        render();
      }
    },
    'essay-print-draft'() {
      window.print();
    },
    'theory-back'() { go('login'); },
    'essays-back'() { go(S.profile ? 'precheck' : 'login'); },
    'exams-back'() { go(S.profile ? 'precheck' : 'login'); },
    'open-stats'() { go('stats'); },
    'stats-back'() { go(S.result && S.profile ? 'result' : 'login'); },
    'p-quit'() { go('login'); },
    'p-prev'() { if (S.practice && S.practice.i > 0) { S.practice.i--; go('practice'); } },
    'p-next'() {
      const P = S.practice;
      if (!P || P.i >= P.refs.length || P.ans[P.refs[P.i]] === undefined) return;
      P.i++;
      go('practice');
    },
    'p-check'() {
      const el = document.getElementById('p-short');
      if (el && el.value.trim()) answerPractice(el.value);
    },
    'p-wrong'() {
      const st = loadStats();
      const refs = Object.keys(st.wrong).filter(r => REF[r]).sort((u, v) => (st.wrong[u].t || 0) - (st.wrong[v].t || 0)).slice(0, 15);
      if (refs.length) startPractice('Luyện lại câu sai', refs, null); else go('stats');
    },
    'copy-reports'() {
      const el = document.getElementById('report-out');
      el.select();
      if (navigator.clipboard) navigator.clipboard.writeText(el.value).catch(() => document.execCommand('copy')); else document.execCommand('copy');
    },
    'clear-stats'() {
      modal({
        title: 'Xóa thống kê', red: true,
        body: 'Xóa toàn bộ thống kê theo chủ đề, sổ câu sai và danh sách câu đã báo lỗi trên máy này?<div class="warn">Không thể khôi phục sau khi xóa.</div>',
        cancelText: 'Giữ lại', okText: 'Xóa', okClass: 'btn-danger',
        onOk: () => { try { localStorage.removeItem(LS_STATS); } catch (e) { /* bỏ qua */ } render(); }
      });
    },
    start() { if (S.imeOk) startExam(); },
    'ime-cycle'() {
      const modes = Object.keys(IME_LABEL);
      S.imeMode = modes[(modes.indexOf(S.imeMode) + 1) % modes.length];
      VnIme.enabled = true;
      save(); refreshIme();
    },
    'fs-up'() { S.fs = Math.min(22, S.fs + 1); save(); applyPrefs(); },
    'fs-down'() { S.fs = Math.max(12, S.fs - 1); save(); applyPrefs(); },
    dark() { S.dark = !S.dark; save(); applyPrefs(); },
    'to-p2'() {
      modal({
        title: 'Kết thúc Phần 1 — Sang Phần 2',
        body: `Bạn sắp kết thúc <b>Phần 1 (NLXH)</b> và chuyển sang Phần 2.<br>Số chữ đã gõ: <b>${countWords(S.essay)}</b>.
          <div class="warn">Sau khi chuyển sang Phần 2, bài tự luận (NLXH) sẽ <b>bị khóa vĩnh viễn</b> và bạn <b>không thể quay lại Phần 1</b>.</div>`,
        cancelText: 'Quay lại làm tiếp', okText: 'Xác nhận sang Phần 2', okClass: 'btn-warn', onOk: toPart2
      });
    },
    submit() {
      const done = items.filter(isAnswered).length;
      const flagged = Object.values(S.flags).filter(Boolean).length;
      modal({
        title: 'Xác nhận nộp bài', red: true,
        body: `Bạn đã trả lời <b>${done} / ${items.length}</b> câu${done < items.length ? `, còn <b>${items.length - done}</b> câu chưa làm` : ''}${flagged ? `, <b>${flagged}</b> câu đang đánh dấu xem lại` : ''}.
          <div class="warn">Sau khi nộp bài, bạn <b>không thể sửa</b> câu trả lời.</div>`,
        cancelText: 'Quay lại làm tiếp', okText: 'Nộp bài', okClass: 'btn-danger', onOk: () => submit(false)
      });
    },
    review(btn) {   // bấm lần nữa thì đóng lại
      const el = document.getElementById('review');
      el.hidden = !el.hidden;
      if (btn) btn.textContent = el.hidden ? 'Xem đáp án chi tiết' : 'Ẩn đáp án chi tiết';
      if (!el.hidden) el.scrollIntoView();
    },
    'print-result'() {
      const el = document.getElementById('review');
      if (el) el.hidden = false;
      window.print();
    },
    restart() {
      leaveLock();
      const keep = { profile: S.profile, examId: S.examId, imeMode: S.imeMode, fs: S.fs, dark: S.dark, lock: S.lock };
      S = Object.assign(fresh(), keep);
      go('login');
    }
  };

  app.addEventListener('toggle', e => {
    const details = e.target;
    if (details instanceof HTMLDetailsElement && details.open) {
      wrapWideMath(details.closest('.theory-topic-card') || details);
    }
  }, true);

  app.addEventListener('click', e => {
    const act = e.target.closest('[data-act]');
    if (act) { actions[act.dataset.act](act); return; }

    const mode = e.target.closest('[data-ime-mode]');
    if (mode) {
      S.imeMode = mode.dataset.imeMode;
      VnIme.enabled = true;
      save(); refreshIme();
      document.getElementById('ime-test').focus();
      return;
    }
    const goto = e.target.closest('[data-goto]');
    if (goto) { document.getElementById('q-' + goto.dataset.goto).scrollIntoView(); return; }

    const rvg = e.target.closest('[data-rv-goto]');
    if (rvg) {
      const el = document.getElementById('review');
      if (el && el.hidden) {
        el.hidden = false;
        const btn = document.querySelector('[data-act="review"]');
        if (btn) btn.textContent = 'Ẩn đáp án chi tiết';
      }
      const targetQ = document.getElementById('rv-q-' + rvg.dataset.rvGoto);
      if (targetQ) targetQ.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const rh = e.target.closest('[data-review-hist]');
    if (rh) {
      const id = rh.dataset.reviewHist;
      const h = history().find(x => x.id === id);
      if (h && h.answers) {
        S.examId = h.examId || (h.title && h.title.includes('trộn') ? MIX_ID : S.examId);
        S.mix = h.mix || null;
        S.answers = Object.assign({}, h.answers);
        S.essay = h.essay || '';
        S.perm = Object.assign({}, h.perm || {});
        S.result = { correct: h.correct, total: h.total, score: h.score, auto: false };
        go('result');
      }
      return;
    }

    const th = e.target.closest('[data-toggle-hint]');
    if (th) {
      const el = document.getElementById('hint-' + th.dataset.toggleHint);
      if (el) el.classList.toggle('open');
      return;
    }

    const topicLink = e.target.closest('[data-theory-topic]');
    if (topicLink) {
      e.preventDefault();
      const topic = document.getElementById('theory-' + topicLink.dataset.theoryTopic);
      if (topic && topic.tagName === 'DETAILS') {
        topic.open = true;
        window.history.replaceState(null, '', topicLink.getAttribute('href'));
        topic.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

        const etab = e.target.closest('[data-essay-tab]');
    if (etab) {
      essayTab = etab.dataset.essayTab;
      render();
      return;
    }
    const etheme = e.target.closest('[data-essay-theme]');
    if (etheme) {
      essayTheme = etheme.dataset.essayTheme;
      render();
      return;
    }
    const tc = e.target.closest('[data-theory-cat]');
    if (tc) {
      theoryCat = tc.dataset.theoryCat;
      render();
      return;
    }

    const fe = e.target.closest('[data-filter-exam]');
    if (fe) {
      examFilter = fe.dataset.filterExam;
      render();
      return;
    }

    const se = e.target.closest('[data-select-exam]');
    if (se) {
      const id = se.dataset.selectExam;
      S.examId = id;
      if (id === MIX_ID) S.mix = newMix();
      save();
      go(S.profile ? 'precheck' : 'login');
      return;
    }

    const pt = e.target.closest('[data-practice-topic]');
    if (pt) {
      const id = pt.dataset.practiceTopic;
      startPractice('Chủ đề: ' + topicName(id), pickTopic(id, 10), id);
      return;
    }
    const rp = e.target.closest('[data-report]');
    if (rp) { openReport(rp.dataset.report); return; }
    const dr = e.target.closest('[data-del-report]');
    if (dr) {
      const st = loadStats();
      delete st.reports[dr.dataset.delReport];
      saveStats(st);
      render();
      return;
    }
    const popt = e.target.closest('.opt');
    if (popt && S.screen === 'practice') { answerPractice(Number(popt.dataset.opt)); return; }

    const opt = e.target.closest('.opt');
    if (opt && S.screen === 'p2') {
      const no = Number(opt.closest('.q').dataset.no), i = Number(opt.dataset.opt);
      if (S.answers[no] === i) delete S.answers[no]; else S.answers[no] = i;
      save(); showSaved(); refreshQuestion(no);
    }
  });

  app.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.id === 'p-short') { e.preventDefault(); actions['p-check'](); return; }
    if (S.screen === 'practice' && !['input', 'textarea'].includes((e.target.tagName || '').toLowerCase())) {
      if (e.key === 'ArrowLeft') { actions['p-prev'](); return; }
      if (e.key === 'ArrowRight' || e.key === 'Enter') { actions['p-next'](); return; }
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
      const idx = keyMap[(e.key || '').toLowerCase()];
      if (idx !== undefined && S.practice) {
        const P = S.practice, ref = P.refs[P.i];
        if (ref && REF[ref] && REF[ref].item.type === 'mcq' && P.ans[ref] === undefined) {
          const ord = P.perm[ref] || REF[ref].item.options.map((o, i) => i);
          if (ord[idx] !== undefined) answerPractice(ord[idx]);
        }
      }
    }
  });

  let essayTimer;
  app.addEventListener('input', e => {
    const t = e.target;
    if (t.id === 'essay-search') {
      essayQuery = t.value;
      const pos = t.selectionStart;
      render();
      const el = document.getElementById('essay-search');
      if (el) { el.focus(); el.setSelectionRange(pos, pos); }
      return;
    }
    if (t.id === 'studio-essay') {
      saveEssayDraft(essayPracticeId, t.value);
      updateStudioWordMeter();
      return;
    }
    if (t.id === 'theory-search') {
      theoryQuery = t.value;
      const pos = t.selectionStart;
      render();
      const el = document.getElementById('theory-search');
      if (el) { el.focus(); el.setSelectionRange(pos, pos); }
      return;
    }
    if (t.id === 'ime-test') { updatePrecheck(); return; }
    if (t.id === 'essay') {
      S.essay = t.value;
      updateWordCount();
      clearTimeout(essayTimer);
      essayTimer = setTimeout(() => { save(); showSaved(); }, 800);
      return;
    }
    if (t.matches('[data-short]')) {
      const no = Number(t.closest('.q').dataset.no);
      S.answers[no] = t.value;
      save(); showSaved(); refreshQuestion(no);
    }
  });
  app.addEventListener('change', e => {
    if (e.target.id === 'practice-prompt-select') {
      essayPracticeId = e.target.value;
      render();
      return;
    }
    if (e.target.id === 'lock-opt') { S.lock = e.target.checked; save(); return; }
    if (e.target.matches('[data-flag]')) {
      const no = Number(e.target.closest('.q').dataset.no);
      S.flags[no] = e.target.checked;
      save(); refreshQuestion(no);
    }
  });
  app.addEventListener('submit', e => {
    if (e.target.id !== 'login-form') return;
    e.preventDefault();
    const sbd = document.getElementById('sbd').value.trim();
    const pin = document.getElementById('pin').value.trim();
    if (!sbd || !pin) {
      document.getElementById('login-err').textContent = 'Vui lòng nhập số báo danh và mã PIN.';
      return;
    }
    S = Object.assign(fresh(), { imeMode: S.imeMode, fs: S.fs, dark: S.dark, lock: S.lock });
    S.examId = document.getElementById('exam').value;
    if (S.examId === MIX_ID) S.mix = newMix();
    S.profile = { sbd, name: document.getElementById('name').value.trim() || 'Thí sinh luyện tập' };
    go('precheck');
  });
  // Lưu ngay bài tự luận khi đóng / tải lại trang
  window.addEventListener('beforeunload', e => {
    if (S.screen === 'p1') save();
    if (locked()) { e.preventDefault(); e.returnValue = ''; }   // hỏi lại trước khi đóng / tải lại trang giữa bài thi
  });

  render();
})();
