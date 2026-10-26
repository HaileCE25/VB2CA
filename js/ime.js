// Bộ gõ tiếng Việt tích hợp (Telex / VNI / Tự động) cho các ô có thuộc tính data-ime.
(function (root) {
  const TONES = ['', '́', '̀', '̉', '̃', '̣']; // sắc huyền hỏi ngã nặng
  const VOWELS = 'aăâeêioôơuưy';
  const CIRC = { a: 'â', e: 'ê', o: 'ô' };
  const UNCIRC = { 'â': 'a', 'ê': 'e', 'ô': 'o' };
  const HORN = { a: 'ă', o: 'ơ', u: 'ư' };
  const UNHORN = { 'ă': 'a', 'ơ': 'o', 'ư': 'u' };

  const TELEX = {
    s: { t: 1 }, f: { t: 2 }, r: { t: 3 }, x: { t: 4 }, j: { t: 5 }, z: { t: 0 },
    a: { c: 'a' }, e: { c: 'e' }, o: { c: 'o' }, w: { h: 'aou', w: true }, d: { d: true }
  };
  const VNI = {
    1: { t: 1 }, 2: { t: 2 }, 3: { t: 3 }, 4: { t: 4 }, 5: { t: 5 }, 0: { t: 0 },
    6: { c: 'aeo' }, 7: { h: 'ou' }, 8: { h: 'a' }, 9: { d: true }
  };

  function dec(c) {
    const low = c.toLowerCase();
    let n = low.normalize('NFD'), tone = 0;
    for (let i = 1; i <= 5; i++) {
      if (n.includes(TONES[i])) { tone = i; n = n.replace(TONES[i], ''); }
    }
    return { b: n.normalize('NFC'), up: c !== low, tone };
  }
  function enc(ch) {
    const s = ch.tone ? (ch.b.normalize('NFD') + TONES[ch.tone]).normalize('NFC') : ch.b;
    return ch.up ? s.toUpperCase() : s;
  }
  const join = chars => chars.map(enc).join('');
  const isVowel = ch => VOWELS.includes(ch.b);

  // Cụm nguyên âm cuối của từ: [start, end], đã bỏ "u" của "qu" và "i" của "gi".
  function cluster(chars) {
    let e = chars.length - 1;
    while (e >= 0 && !isVowel(chars[e])) e--;
    if (e < 0) return null;
    let s = e;
    while (s > 0 && isVowel(chars[s - 1])) s--;
    if (s > 0 && e > s) {
      const prev = chars[s - 1].b, cur = chars[s].b;
      if ((prev === 'q' && cur === 'u') || (prev === 'g' && cur === 'i')) s++;
    }
    return [s, e];
  }

  // Vị trí đặt dấu thanh (kiểu cũ: hòa, thủy).
  function tonePos(chars, s, e) {
    let horn = -1, shaped = -1;
    for (let i = s; i <= e; i++) {
      if ('ăâêôơư'.includes(chars[i].b)) {
        if (shaped < 0) shaped = i;
        if (chars[i].b === 'ơ') horn = i;
      }
    }
    if (horn >= 0) return horn;
    if (shaped >= 0) return shaped;
    const len = e - s + 1, hasFinal = e < chars.length - 1;
    if (len === 1) return s;
    if (len === 2) return hasFinal ? e : s;
    return hasFinal ? e : s + 1;
  }

  function fixTone(chars) {
    const i = chars.findIndex(c => c.tone);
    if (i < 0) return false;
    const cl = cluster(chars);
    if (!cl || i < cl[0] || i > cl[1]) return false;
    const t = chars[i].tone;
    chars[i].tone = 0;
    chars[tonePos(chars, cl[0], cl[1])].tone = t;
    return true;
  }

  function applyTone(chars, t) {
    const cl = cluster(chars);
    if (!cl) return null;
    const cur = chars.find(c => c.tone);
    if (t === 0) {
      if (!cur) return null;
      cur.tone = 0;
      return {};
    }
    if (cur && cur.tone === t) { cur.tone = 0; return { undo: true }; }
    if (cur) cur.tone = 0;
    chars[tonePos(chars, cl[0], cl[1])].tone = t;
    return {};
  }

  function applyCirc(chars, letters) {
    const cl = cluster(chars);
    if (!cl) return null;
    for (let i = cl[1]; i >= cl[0]; i--) {
      if (letters.includes(chars[i].b)) { chars[i].b = CIRC[chars[i].b]; return {}; }
    }
    for (let i = cl[1]; i >= cl[0]; i--) {
      const plain = UNCIRC[chars[i].b];
      if (plain && letters.includes(plain)) { chars[i].b = plain; return { undo: true }; }
    }
    return null;
  }

  function applyHorn(chars, letters) {
    const cl = cluster(chars);
    if (cl) {
      const [s, e] = cl;
      const ou = letters.includes('o'), a = letters.includes('a');
      if (ou) {
        for (let i = s; i < e; i++) {
          const x = chars[i].b, y = chars[i + 1].b;
          if ((x === 'u' && 'oôơ'.includes(y)) || (x === 'ư' && 'oô'.includes(y))) {
            chars[i].b = 'ư'; chars[i + 1].b = 'ơ';
            return {};
          }
        }
      }
      if (a) {
        for (let i = e; i >= s; i--) {
          if (chars[i].b === 'a' || chars[i].b === 'â') {
            // "ua" + w -> "ưa" (mưa); còn lại a -> ă
            if (ou && i === e && i === s + 1 && chars[s].b === 'u' && e === chars.length - 1) chars[s].b = 'ư';
            else chars[i].b = 'ă';
            return {};
          }
        }
      }
      if (ou) {
        for (let i = e; i >= s; i--) {
          if (chars[i].b === 'o' || chars[i].b === 'ô') { chars[i].b = 'ơ'; return {}; }
        }
        for (let i = s; i <= e; i++) {
          if (chars[i].b === 'u') { chars[i].b = 'ư'; return {}; }
        }
      }
      let reverted = false;
      for (let i = s; i <= e; i++) {
        const plain = UNHORN[chars[i].b];
        if (plain && letters.includes(plain)) { chars[i].b = plain; reverted = true; }
      }
      if (reverted) return { undo: true };
    }
    return null;
  }

  function applyD(chars) {
    if (chars[0].b === 'd') { chars[0].b = 'đ'; return {}; }
    if (chars[0].b === 'đ') { chars[0].b = 'd'; return { undo: true }; }
    return null;
  }

  // Trả về {text, undo} nếu phím làm thay đổi từ đang gõ, ngược lại null (để trình duyệt tự chèn).
  function process(word, key, mode) {
    const k = key.toLowerCase();
    let act = null;
    if (mode !== 'vni') act = TELEX[k];
    if (!act && mode !== 'telex') act = VNI[k];
    const chars = Array.from(word).map(dec);
    if (!chars.length) return null;

    if (act) {
      let r = null;
      if ('t' in act) r = applyTone(chars, act.t);
      else if (act.c) r = applyCirc(chars, act.c);
      else if (act.h) {
        r = applyHorn(chars, act.h);
        if (!r && act.w) return { text: word + (key === 'W' ? 'Ư' : 'ư') };
      } else if (act.d) r = applyD(chars);
      if (r) {
        if (!('t' in act)) fixTone(chars);
        return { text: join(chars) + (r.undo ? key : ''), undo: !!r.undo };
      }
    }

    if (!/\p{L}/u.test(key)) return null;
    chars.push(dec(key));
    if (!fixTone(chars)) return null;
    const out = join(chars);
    return out === word + key ? null : { text: out };
  }

  const api = { process, mode: 'auto', enabled: true, onToggle: null };

  if (typeof document !== 'undefined') {
    let suspended = null; // từ vừa bị "gõ lặp để hủy dấu": không biến đổi tiếp cho tới khi sang từ mới

    document.addEventListener('beforeinput', e => {
      const el = e.target;
      if (!api.enabled || api.mode === 'off' || e.isComposing) return;
      if (!el.matches || !el.matches('[data-ime]')) return;
      if (e.inputType !== 'insertText' || !e.data || e.data.length !== 1) return;
      const pos = el.selectionStart;
      if (pos !== el.selectionEnd) return;
      const m = el.value.slice(Math.max(0, pos - 12), pos).match(/\p{L}+$/u);
      const word = m ? m[0] : '';
      if (suspended !== null) {
        if (word && word.startsWith(suspended)) return;
        suspended = null;
      }
      const r = process(word, e.data, api.mode);
      if (!r) return;
      e.preventDefault();
      el.setRangeText(r.text, pos - word.length, pos, 'end');
      if (r.undo) suspended = r.text;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });

    // Ctrl+Shift: bật/tắt nhanh bộ gõ
    let combo = false;
    document.addEventListener('keydown', e => {
      combo = (e.key === 'Shift' && e.ctrlKey) || (e.key === 'Control' && e.shiftKey);
    });
    document.addEventListener('keyup', e => {
      if (combo && (e.key === 'Shift' || e.key === 'Control')) {
        combo = false;
        api.enabled = !api.enabled;
        if (api.onToggle) api.onToggle();
      }
    });
  }

  root.VnIme = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
