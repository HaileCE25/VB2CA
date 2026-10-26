(function () {
  const LS_STATE = 'vb2ca_state_v1';
  const LS_HISTORY = 'vb2ca_history_v1';
  const LS_STATS = 'vb2ca_stats_v1';
  const LS_SEEN = 'vb2ca_seen_v1';
  const TOP = window.TOPICS || { names: {}, order: [], slots: [] };

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
  function typeset(el) {
    if (window.renderMathInElement) {
      window.renderMathInElement(el, {
        delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
        throwOnError: false
      });
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
  // Lời giải nhiều bước (các bước ngăn nhau bằng <br> trong file đề) được trình bày mỗi bước một dòng
  // Lời giải từng dòng, kèm phần "Lưu ý" ngắn (quy tắc cốt lõi hoặc chỗ hay nhầm) nếu câu hỏi có
  const noteHtml = it => (it.note ? `<div class="note"><b>Lưu ý:</b> ${it.note}</div>` : '');
  const explainHtml = it => (!it.explain ? noteHtml(it) : (it.explain.includes('<br>')
    ? `<div class="exp"><b>Lời giải:</b><div class="steps">${it.explain.split('<br>').map(l => `<div>${l}</div>`).join('')}</div></div>`
    : `<div class="exp"><b>Lời giải:</b> ${it.explain}</div>`) + noteHtml(it));
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
        if (top.formulas && top.formulas.some(f => f.name.toLowerCase().includes(q) || f.content.toLowerCase().includes(q))) return true;
        if (top.traps && top.traps.some(t => t.toLowerCase().includes(q))) return true;
        return false;
      });
    }

    const backText = S.profile ? '← Về màn hình trước' : '← Về trang đăng nhập';

    return `
      <div class="page">
        <div class="page-head">
          <button class="btn-ghost" data-act="theory-back">${backText}</button>
          <div class="small">TÀI LIỆU ÔN THI VB2 CA1</div>
          <h2>CẨM NANG LÝ THUYẾT & CÔNG THỨC TRỌNG TÂM</h2>
        </div>

        <div class="theory-search-wrap">
          <input class="theory-search-input" id="theory-search" placeholder="🔍 Tìm công thức, định lý, từ khóa (ví dụ: Cramer, Green, trị riêng, Maclaurin...)" value="${esc(theoryQuery)}">
        </div>

        <div class="theory-tabs">
          <button class="theory-tab-btn ${theoryCat === 'all' ? 'active' : ''}" data-theory-cat="all">Tất cả (${TOP.order.length} chuyên đề)</button>
          ${TD.categories.map(c => `
            <button class="theory-tab-btn ${theoryCat === c.id ? 'active' : ''}" data-theory-cat="${c.id}">${esc(c.name)} (${c.topics.length})</button>
          `).join('')}
        </div>

        ${!topicIds.length ? `
          <div class="card" style="text-align:center;padding:30px 20px">
            <div style="font-size:32px;margin-bottom:8px">🔍</div>
            <b>Không tìm thấy công thức nào khớp với từ khóa "${esc(theoryQuery)}"</b>
            <div class="pending" style="margin-top:6px">Thử tìm kiếm với từ khóa khác hoặc bấm nút "Tất cả" ở trên.</div>
          </div>
        ` : topicIds.map(id => {
          const top = TD.topics[id];
          if (!top) return '';
          return `
            <div class="theory-topic-card" id="theory-${id}">
              <div class="theory-topic-head">
                <div class="theory-topic-title">
                  <span>${esc(top.title)}</span>
                  <span class="theory-badge">${esc(top.badge || 'Toán cao cấp')}</span>
                </div>
                <button class="btn-small" data-practice-topic="${id}">🎯 Luyện 10 câu chuyên đề này</button>
              </div>

              ${top.formulas && top.formulas.length ? `
                <div class="formula-section-title">📌 Công thức & Định lý cốt lõi</div>
                ${top.formulas.map(f => `
                  <div class="formula-box">
                    <b class="f-name">• ${f.name}</b>
                    <div>${f.content}</div>
                  </div>
                `).join('')}
              ` : ''}

              ${top.traps && top.traps.length ? `
                <div class="trap-box">
                  <b class="t-title">⚠️ Bẫy đề thi & Lưu ý sống còn:</b>
                  <ul class="trap-list">
                    ${top.traps.map(t => `<li>${t}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>`;
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
            <button class="btn-ghost" data-act="p-quit">Về trang thống kê</button>
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
          <button class="btn-ghost" data-act="p-next" ${P.i + 1 < n ? '' : 'disabled'}>Câu sau →</button>
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

  function render() {
    setExam();
    applyPrefs();
    closeModal();
    const free = S.screen === 'stats' || S.screen === 'practice' || S.screen === 'exams' || S.screen === 'theory';   // các màn hình này không cần đăng nhập
    if (!exam || (!S.profile && !free)) S.screen = 'login';
    const views = { login: viewLogin, precheck: viewPrecheck, p1: viewPart1, p2: viewPart2, result: viewResult, stats: viewStats, practice: viewPractice, exams: viewExamList, theory: viewTheory };
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
    'theory-back'() { go(S.profile ? (S.result ? 'result' : 'precheck') : 'login'); },
    'exams-back'() { go(S.profile ? 'precheck' : 'login'); },
    'open-stats'() { go('stats'); },
    'stats-back'() { go(S.result && S.profile ? 'result' : 'login'); },
    'p-quit'() { go('stats'); },
    'p-prev'() { if (S.practice && S.practice.i > 0) { S.practice.i--; go('practice'); } },
    'p-next'() { S.practice.i++; go('practice'); },
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
