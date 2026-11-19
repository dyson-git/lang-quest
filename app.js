(function () {
  "use strict";
  var $app = document.getElementById("app");
  var HZ = window.HANZI;

  // ── 저장 ──────────────────────────────
  var KEY = "geulja-yeohaeng-v1";
  var S = { done: {}, xp: 0, streak: 0, last: "" };
  try { var raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) {}
  var STORE_OK = false;
  try { localStorage.setItem(KEY + "-probe", "1"); STORE_OK = localStorage.getItem(KEY + "-probe") === "1"; localStorage.removeItem(KEY + "-probe"); } catch (e) {}
  var IN_APP = /KAKAOTALK|NAVER\(|Instagram|FBAN|FBAV|Line\/|DaumApps/i.test(navigator.userAgent || "");
  var DEFER = null;
  var STANDALONE = false;
  try { STANDALONE = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true; } catch (e) {}
  var CAN_INSTALL = /github\.io$|localhost$/.test(location.hostname) && !STANDALONE;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); DEFER = e; if (V && V.name === "home") render(); });
  window.addEventListener("appinstalled", function () { DEFER = null; CAN_INSTALL = false; STANDALONE = true; if (V && V.name === "home") render(); });
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { STORE_OK = false; } }
  function packCode() { try { return btoa(unescape(encodeURIComponent(JSON.stringify(S)))); } catch (e) { return ""; } }
  function unpackCode(t) {
    try {
      var o = JSON.parse(decodeURIComponent(escape(atob(String(t).replace(/\s+/g, "")))));
      if (o && typeof o === "object" && o.done && typeof o.done === "object") return o;
    } catch (e) {}
    return null;
  }
  function today() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function touchStreak() {
    var t = today();
    if (S.last === t) return;
    var y = new Date(); y.setDate(y.getDate() - 1);
    var ys = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
    S.streak = S.last === ys ? S.streak + 1 : 1;
    S.last = t;
  }

  // ── 노선 ──────────────────────────────
  function mk(list, type) { return list.map(function (l) { return { id: l.id, title: l.title, type: type, data: l }; }); }
  var LINES = [
    { id: "zh", cls: "zh-line", tag: "中", name: "중국어 성조·발음", sub: "성모·운모·성조 전부, 혀 모양부터", st: mk(window.PINYIN_LESSONS, "pinyin") },
    { id: "hz", cls: "mix-line", tag: "字", name: "중국어 + 일본어 한자", sub: "중국어 | 일본어 나란히 · " + Object.keys(HZ).length + "/500개", st: mk(window.HANZI_LESSONS, "hanzi").concat(mk(window.COMBO_LESSONS || [], "en")) },
    { id: "jp", cls: "jp-line", tag: "日", name: "일본어 문장", sub: "이키마스부터 길 묻기까지", group: "sent", st: mk(window.JP_LESSONS, "jp") },
    { id: "zs", cls: "zh-line", tag: "中", name: "중국어 문장", sub: "인사부터 긴급 상황까지, 성조 표시", group: "sent", st: mk(window.ZH_LESSONS || [], "jp") },
    { id: "en", cls: "en-line", tag: "A", name: "영어 문법", sub: "문제마다 해설 포함", st: mk(window.EN_LESSONS, "en") }
  ];
  var GROUPS = { sent: { id: "sent", cls: "mix-line", tag: "文", name: "일본어 / 중국어 문장", sub: "눌러서 일본어나 중국어를 고르세요", kids: ["jp", "zs"] } };
  var HOME_ORDER = ["zh", "hz", "sent", "en"];
  function lineById(id) { return LINES.filter(function (l) { return l.id === id; })[0]; }
  function stageNo(t) { var m = /^(\d)단계/.exec(t); return m ? +m[1] : 0; }
  LINES.forEach(function (ln) {
    ln.st = ln.st.map(function (x, i) { return { x: x, i: i }; }).sort(function (a, b) { return stageNo(a.x.title) - stageNo(b.x.title) || a.i - b.i; }).map(function (o) { return o.x; });
  });
  function unlocked(line, i) { return S.all || i === 0 || !!S.done[line.st[i - 1].id]; }
  function findStation(id) {
    for (var i = 0; i < LINES.length; i++) for (var j = 0; j < LINES[i].st.length; j++) if (LINES[i].st[j].id === id) return { line: LINES[i], st: LINES[i].st[j] };
    return null;
  }
  function learnedChars(stage) {
    var out = [];
    window.HANZI_LESSONS.forEach(function (l) {
      if (!S.done[l.id]) return;
      if (stage && !new RegExp("^" + stage + "단계").test(l.title)) return;
      out = out.concat(l.chars);
    });
    return out;
  }

  // ── 유틸 ──────────────────────────────
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(arr, n) { return shuffle(arr).slice(0, n); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function speakBtn(text, lang, label) {
    return '<button class="speak" data-act="say" data-t="' + esc(encodeURIComponent(text)) + '" data-l="' + lang + '" aria-label="' + label + ' 듣기">🔊 ' + label + "</button>";
  }
  function speak(text, lang) { speakSeq([[text, lang]], true); }
  function speakSeq(list, force) {
    try {
      if (!window.speechSynthesis || (S.mute && !force)) return;
      speechSynthesis.cancel();
      list.forEach(function (it) {
        var u = new SpeechSynthesisUtterance(it[0]); u.lang = it[1]; u.rate = 0.85;
        speechSynthesis.speak(u);
      });
    } catch (e) {}
  }
  function speakIn(root) {
    var list = [];
    Array.prototype.forEach.call(root.querySelectorAll(".speak"), function (b) { list.push([decodeURIComponent(b.getAttribute("data-t")), b.getAttribute("data-l")]); });
    if (list.length) speakSeq(list);
  }
  var TONES = { a: "āáǎà", e: "ēéěè", i: "īíǐì", o: "ōóǒò", u: "ūúǔù", "ü": "ǖǘǚǜ" };
  function toneMark(sy, t) {
    var m = /[aeo]/.exec(sy) || (/iu/.test(sy) ? { index: sy.indexOf("iu") + 1 } : null);
    if (!m) { var vs = sy.split("").map(function (c, i) { return /[iuü]/.test(c) ? i : -1; }).filter(function (i) { return i >= 0; }); m = { index: vs[vs.length - 1] }; }
    if (/ou/.test(sy) && !/[ae]/.test(sy)) m = { index: sy.indexOf("o") };
    var c = sy.charAt(m.index);
    return sy.slice(0, m.index) + (TONES[c] ? TONES[c].charAt(t - 1) : c) + sy.slice(m.index + 1);
  }

  // ── 한자 카드 ──────────────────────────────
  var RAD = { "亻": "사람", "氵": "물", "扌": "손", "艹": "풀", "⺾": "풀", "灬": "불", "忄": "마음", "讠": "말", "訁": "말", "钅": "쇠", "饣": "밥", "犭": "짐승", "刂": "칼", "辶": "가다", "彳": "걷다", "宀": "집", "广": "집", "冖": "덮개", "囗": "에워쌈", "门": "문", "門": "문", "⺍": "작은 장식", "攵": "치다", "阝": "언덕·마을", "礻": "신", "纟": "실", "糸": "실", "厂": "벼랑", "疒": "병", "穴": "구멍", "彡": "털", "𠂉": "삐침", "玉": "옥", "占": "점치다", "首": "머리", "欠": "하품·모자라다", "丿": "삐침", "丶": "점", "ナ": "손", "又": "손", "止": "멈추다(발)", "卜": "점", "冂": "경계(틀)", "彐": "손(변형)", "寸": "마디·손", "斤": "도끼", "矢": "화살", "冫": "얼음", "令": "명령", "厶": "사사로움", "罒": "그물", "贝": "조개(돈)", "主": "주인", "乍": "잠깐", "合": "합하다", "己": "몸·자기", "酉": "술병", "巷": "골목", "至": "이르다", "户": "문짝", "巾": "수건", "匚": "상자", "戈": "창", "也": "~이다", "耂": "늙은이", "豕": "돼지", "方": "모·방향", "爫": "손톱(손)", "夂": "뒤따라 걷다", "夭": "젊다", "亡": "망하다", "歹": "죽음(뼈)", "匕": "숟가락", "禾": "벼", "皿": "그릇", "舟": "배", "垂": "드리우다", "寺": "절", "相": "서로", "昔": "옛날", "卩": "무릎 꿇은 사람", "革": "가죽", "尸": "몸·주검", "勿": "말다", "孝": "효도", "页": "머리", "央": "가운데", "此": "이것", "苗": "싹", "监": "살피다", "介": "끼다·소개", "其": "그것", "衤": "옷", "昌": "창성하다", "哥": "형", "由": "말미암다", "丁": "장정·못", "勺": "국자", "殳": "치다", "旨": "맛·뜻", "角": "뿔", "正": "바르다", "京": "서울", "尤": "더욱", "才": "싹", "胡": "오랑캐", "予": "나·주다", "敬": "공경", "言": "말", "祭": "제사", "弓": "활", "更": "고치다", "奴": "종", "非": "아니다", "咸": "모두", "兆": "조짐", "亭": "정자", "妾": "첩", "官": "벼슬", "舌": "혀", "告": "알리다", "景": "경치", "竟": "마침내", "斗": "말(되)", "支": "가지", "弋": "말뚝", "牜": "소", "戉": "도끼", "免": "면하다", "丙": "셋째 천간(소리)", "甬": "길·통로", "夬": "터놓다", "卬": "오르다", "罙": "깊다", "戋": "작다", "溥": "넓다", "𠂤": "언덕·무리", "艮": "그치다" };
  function partLabel(p) {
    if (RAD[p]) return RAD[p];
    var k = Object.keys(HZ);
    for (var i = 0; i < k.length; i++) { var h = HZ[k[i]]; if (h.zh === p || h.jp === p || k[i] === p) return h.m.split(",")[0].split("(")[0]; }
    return "";
  }
  function hzDetail(key) {
    var h = HZ[key];
    var pair = '<div class="pair">' +
      '<div class="gbox zh"><button class="g zh-glyph peek" lang="zh-Hans" data-act="peek" data-k="' + key + '">' + h.zh + '</button><span class="lbl">중국어 간체</span>' + (h.zt ? '<span class="tr">번체 ' + h.zt + "</span>" : "") + "</div>" +
      '<div class="gbox jp"><button class="g jp-glyph peek" lang="ja" data-act="peek" data-k="' + key + '">' + h.jp + '</button><span class="lbl">일본어</span></div></div>';
    var read = '<div class="read">' +
      '<div class="zhb"><b>중국어 ' + speakBtn(h.zh, "zh-CN", "중") + '</b><span class="big">' + h.py + "</span><br>한글 " + h.pk + "<br>" + h.cx + "</div>" +
      '<div class="jpb"><b>일본어 ' + speakBtn(h.jp, "ja-JP", "일") + '</b><span class="big">' + h.jk + "</span><br>" + h.jr + " · 한글 " + h.jko + "<br>" + h.jx + "</div></div>";
    var evo = "";
    if (h.pic && window.PICS[h.pic]) {
      var res = '<span class="res zh-glyph" lang="zh-Hans">' + h.zh + "</span>" + (h.jp !== h.zh ? '<span class="res jp-glyph" lang="ja">' + h.jp + "</span>" : "");
      evo = '<div class="evo" role="img" aria-label="' + h.m + ' 그림에서 글자로"><svg viewBox="0 0 64 64">' + window.PICS[h.pic] + '</svg><span class="arrow">→</span>' + res + "</div>";
    } else if (h.parts) {
      evo = '<div class="note-h">부품으로 외우기</div><div class="eq">' + h.parts.map(function (p) { var l = partLabel(p); return '<span class="pc"><span class="p zh-glyph">' + p + "</span><small>" + l + "</small></span>"; }).join('<span class="o">+</span>') +
        '<span class="o">=</span><span class="pc"><span class="p zh-glyph" lang="zh-Hans">' + h.zh + "</span><small>" + h.m.split(",")[0].split("(")[0] + "</small></span></div>";
    }
    return '<div class="card">' + pair + '<div><b style="font-family:var(--font-head);font-weight:400;font-size:20px">' + h.m + '</b> <span style="color:var(--ink2)">' + h.e + "</span></div>" +
      read + evo +
      '<div class="note-h">유래</div><p class="note-p">' + h.org + "</p>" +
      '<div class="tip">연상: ' + h.sto + "</div>" +
      (window.MY_TAKE && window.MY_TAKE[key] ? '<div class="take"><b>내 해석 (어원 아님)</b> ' + window.MY_TAKE[key] + "</div>" : "") + "</div>";
  }

  // ── 퀴즈 생성 ──────────────────────────────
  function shortPk(s) { return s.split(" (")[0]; }
  function distract(correct, pool, n) {
    var set = {}; set[correct] = 1; var out = [];
    shuffle(pool).forEach(function (v) { if (out.length < n && !set[v]) { set[v] = 1; out.push(v); } });
    return out;
  }
  function allHz(fn) { return Object.keys(HZ).map(function (k) { return fn(HZ[k]); }); }
  function hzQuestion(key, type) {
    var h = HZ[key], right, pool, prompt;
    if (type === "dual") {
      var zr = h.py + " (" + shortPk(h.pk) + ")", zl = shuffle([zr].concat(distract(zr, allHz(function (x) { return x.py + " (" + shortPk(x.pk) + ")"; }), 3)));
      var jr = h.jk + " (" + h.jko + ")", jl = shuffle([jr].concat(distract(jr, allHz(function (x) { return x.jk + " (" + x.jko + ")"; }), 3)));
      return { dual: true, prompt: "읽는 법을 중국어·일본어 하나씩 고르세요", sub: "왼쪽에서 하나, 오른쪽에서 하나", glyph: key, left: zl, right: jl, answerL: zl.indexOf(zr), answerR: jl.indexOf(jr), after: hzDetail(key) };
    }
    if (type === "mean") { right = h.m; pool = allHz(function (x) { return x.m; }); prompt = "이 한자의 뜻은?"; }
    else { right = h.parts.join(" + "); pool = Object.keys(HZ).filter(function (k) { return HZ[k].parts && HZ[k].parts.length > 1; }).map(function (k) { return HZ[k].parts.join(" + "); }); prompt = "이 글자는 어떤 부품을 합쳐 만들었을까요?"; }
    var choices = shuffle([right].concat(distract(right, pool, 3)));
    var sub = type === "parts" ? "뜻을 떠올리며 부품을 맞혀 보세요" : "";
    return { prompt: prompt, sub: sub, glyph: key, choices: choices, answer: choices.indexOf(right), after: hzDetail(key) };
  }
  function genHanzi(chars) {
    var qs = [];
    chars.forEach(function (c) {
      var h = HZ[c], second = h.parts && h.parts.length > 1 ? pick(["mean", "parts"], 1)[0] : "mean";
      qs.push(hzQuestion(c, "dual")); qs.push(hzQuestion(c, second));
    });
    return shuffle(qs);
  }
  function genTest(chars) {
    return pick(chars, Math.min(10, chars.length)).map(function (c) { return hzQuestion(c, pick(["dual", "mean"], 1)[0]); });
  }
  function jpAll() { var a = []; window.JP_LESSONS.forEach(function (l) { a = a.concat(l.items); }); return a; }
  function zhAll() { var a = []; (window.ZH_LESSONS || []).forEach(function (l) { a = a.concat(l.items); }); return a; }
  function jpAfter(it) {
    var L = it.lang || "ja-JP", zh = L === "zh-CN";
    return '<div class="card"><div class="' + (zh ? "zh-glyph" : "jp-glyph") + '" lang="' + (zh ? "zh-Hans" : "ja") + '" style="font-size:28px;color:var(--' + (zh ? "zh" : "jp") + ')"><button class="peek" data-act="say" data-t="' + esc(encodeURIComponent(it.jp)) + '" data-l="' + L + '">' + it.jp + "</button> " + speakBtn(it.jp, L, zh ? "중" : "일") + "</div>" +
      "<div>" + it.kana + (it.ro ? " · " + it.ro : "") + "</div><div><b>한글</b> " + it.ko + "</div><div><b>영어</b> " + it.e + "</div>" +
      (it.note ? '<div class="tip">' + it.note + "</div>" : "") + "</div>";
  }
  function genJp(lesson) {
    var isZh = lesson.items[0].lang === "zh-CN", pool = isZh ? zhAll() : jpAll(), qs = [];
    lesson.items.forEach(function (it) {
      var a = distract(it.m, pool.map(function (x) { return x.m; }), 3), c1 = shuffle([it.m].concat(a));
      qs.push({ prompt: "이 말의 뜻은?", glyph: null, big: it.jp, bigCls: isZh ? "zh-glyph" : "jp-glyph", lang: it.lang || "ja-JP", choices: c1, answer: c1.indexOf(it.m), after: jpAfter(it) });
      var b = distract(it.jp, pool.map(function (x) { return x.jp; }), 3), c2 = shuffle([it.jp].concat(b));
      qs.push({ prompt: (isZh ? "중국어" : "일본어") + "로 '" + it.m + "'는?", choices: c2, answer: c2.indexOf(it.jp), after: jpAfter(it) });
    });
    return shuffle(qs).slice(0, 12);
  }
  function genStatic(lesson) {
    return lesson.quiz.map(function (q) {
      var en = q.q.replace(/\([^)]*[가-힣][^)]*\)/g, "").replace(/___/, q.c[q.a]).replace(/→/g, ",").replace(/—|–/g, ",").trim();
      var hasEn = /[A-Za-z]{2}/.test(en) && !/[가-힣]/.test(en);
      return { prompt: q.q, choices: q.c, answer: q.a, after: '<div class="card">' + (hasEn ? '<div class="en-say">' + esc(en) + " " + speakBtn(en, "en-US", "영") + "</div>" : "") + q.x + "</div>", shuffle: false };
    });
  }

  // ── 상태 ──────────────────────────────
  var V = { name: "home" };
  var OPEN = {};
  function go(v) { V = v; lastAuto = ""; render(); window.scrollTo(0, 0); }

  function startLesson(id) {
    var f = findStation(id);
    if (!f) return;
    var st = f.st, cards = [];
    if (st.type === "hanzi") cards = st.data.chars.map(function (c) { return { html: hzDetail(c) }; });
    else if (st.type === "pinyin") cards = [{ html: '<div class="card"><p class="note-p">' + st.data.intro + "</p></div>" }].concat(st.data.cards.map(function (c) {
      return { html: '<div class="card"><div class="pybig">' + c.big + '</div><div class="pysub">' + c.sub + "</div><p class=\"note-p\">" + c.ko + '</p><div class="tip">' + c.ex + " " + speakBtn(c.say, "zh-CN", "듣기") + "</div></div>" };
    }));
    else if (st.type === "jp") cards = [{ html: '<div class="card"><p class="note-p">' + st.data.intro + "</p></div>" }].concat(st.data.items.map(function (it) { return { html: jpAfter(it).replace("</div></div>", "</div></div>") + '<div class="card" style="margin-top:8px">뜻: <b>' + it.m + "</b></div>" }; }));
    else cards = [{ html: '<div class="card"><p class="note-p">' + st.data.intro + "</p></div>" }];
    var qs = st.type === "hanzi" ? genHanzi(st.data.chars) : st.type === "jp" ? genJp(st.data) : genStatic(st.data);
    go({ name: "lesson", id: id, line: f.line, st: st, cards: cards, chars: st.type === "hanzi" ? st.data.chars : null, ci: 0, phase: "learn", qs: qs, qi: 0, hearts: 3, right: 0, picked: -1, title: st.title });
  }
  var TEST_STAGE = "";
  function startTest(stage) {
    TEST_STAGE = stage || "";
    var ch = learnedChars(TEST_STAGE);
    if (ch.length < 3) return;
    var t = TEST_STAGE ? TEST_STAGE + "단계 단어 시험" : "단어 시험";
    go({ name: "lesson", id: "test", line: LINES[1], st: { type: "test", title: t }, cards: [], chars: ch, ci: 0, phase: "quiz", qs: genTest(ch), qi: 0, hearts: 3, right: 0, picked: -1, title: t });
  }

  // ── 화면 ──────────────────────────────
  function topbar() {
    return '<header class="top"><div class="wrap"><button class="brand" data-act="home">글자여행</button>' +
      '<span class="stat" title="연속 학습일"><i>🔥</i>' + S.streak + '</span><span class="stat" title="경험치"><i>★</i>' + S.xp + "</span>" +
      '<button class="navbtn" data-act="mute" aria-label="소리 ' + (S.mute ? "켜기" : "끄기") + '">' + (S.mute ? "🔇" : "🔊") + '</button><button class="navbtn" data-act="passport">도장첩</button></div></header>';
  }
  function groupsOf(ln) {
    var groups = [], byKey = {};
    ln.st.forEach(function (s, i) {
      var m = /^(\d)단계 · (.*)$/.exec(s.title), key = m ? m[1] + "단계" : "전체";
      if (!byKey[key]) { byKey[key] = { key: key, items: [], done: 0 }; groups.push(byKey[key]); }
      byKey[key].items.push({ s: s, i: i, t: m ? m[2] : s.title });
      if (S.done[s.id]) byKey[key].done++;
    });
    return groups;
  }
  function curGroup(ln, groups) {
    var cur = -1;
    ln.st.some(function (s, i) { if (!S.done[s.id]) { cur = i; return true; } });
    for (var g = 0; g < groups.length; g++) if (groups[g].items.some(function (x) { return x.i === cur; })) return groups[g].key;
    return groups[groups.length - 1].key;
  }
  function lineTile(ln) {
    var total = ln.st.length, done = ln.st.filter(function (s) { return S.done[s.id]; }).length;
    var gs = groupsOf(ln), cg = curGroup(ln, gs);
    return '<button class="lcard ' + ln.cls + '" data-act="line" data-id="' + ln.id + '"><span class="line-tag" style="background:var(--lc)">' + ln.tag + '</span><span class="lc-body"><span class="lc-name">' + ln.name + '</span><span class="lc-sub">' + ln.sub + '</span><span class="lc-bar"><span style="width:' + Math.round(done / total * 100) + '%"></span></span></span><span class="lc-n">' + done + "/" + total + "<small>" + (gs.length > 1 ? "지금 " + cg : "역") + "</small></span></button>";
  }
  function groupTile(g) {
    var total = 0, done = 0;
    g.kids.forEach(function (k) { var ln = lineById(k); total += ln.st.length; done += ln.st.filter(function (s) { return S.done[s.id]; }).length; });
    return '<button class="lcard ' + g.cls + '" data-act="line" data-id="' + g.id + '"><span class="line-tag" style="background:var(--lc)">' + g.tag + '</span><span class="lc-body"><span class="lc-name">' + g.name + '</span><span class="lc-sub">' + g.sub + '</span><span class="lc-bar"><span style="width:' + Math.round(done / total * 100) + '%"></span></span></span><span class="lc-n">' + done + "/" + total + "<small>역</small></span></button>";
  }
  function viewSent() {
    var g = GROUPS.sent;
    return topbar() + '<main class="wrap"><p><button class="link" data-act="home">← 뒤로</button></p><div class="line-head"><span class="line-tag" style="background:var(--lc)">' + g.tag + "</span><h2>" + g.name + '</h2></div><p class="hint">여행에서 바로 쓰는 문장을 언어별로 배웁니다.</p><div class="lines">' + g.kids.map(function (k) { return lineTile(lineById(k)); }).join("") + "</div></main>";
  }
  function viewHome() {
    var learned = learnedChars().length;
    var html = topbar() + '<main class="wrap"><section class="hero"><h1>어디까지 가볼까요?</h1><p>한자는 그림이었습니다. 역마다 하나씩 도장을 모아 보세요.</p>' +
      '<div class="testbar"><button class="btn primary" data-act="test"' + (learned < 3 ? " disabled" : "") + '>단어 시험</button>' +
      '</div><p class="hint">' + (learned < 3 ? "단어 시험은 한자 레슨을 하나 끝내면 열려요" : "단어 시험: 배운 한자 " + learned + "개에서 무작위 10문제") + '</p></section><div class="lines">';
    HOME_ORDER.forEach(function (id) { html += GROUPS[id] ? groupTile(GROUPS[id]) : lineTile(lineById(id)); });
    var warn = !STORE_OK ? "이 화면에서는 진행이 저장되지 않아요. 크롬·사파리 같은 일반 브라우저(시크릿 창 제외)에서 열거나, 아래 ‘진행 백업’ 코드를 보관해 두세요." : IN_APP ? "카카오톡·네이버 같은 앱 안의 브라우저는 저장이 지워질 수 있어요. 크롬이나 사파리로 열어 주세요." : "";
    html += "</div>" + (warn ? '<p class="warn" role="alert">' + warn + "</p>" : '<p class="hint" style="margin-top:16px">✓ 진행은 이 기기의 이 브라우저에 자동 저장돼요.</p>') +
      '<p class="backup"><button class="btn" data-act="export">진행 백업</button> <button class="btn" data-act="import">진행 복원</button></p>' +
      (CAN_INSTALL ? '<p class="install"><button class="btn primary" data-act="install">📲 앱으로 설치</button></p>' : "") +
      '<p style="margin-top:12px"><button class="link" data-act="unlock">' + (S.all ? "잠금 다시 켜기" : "모든 역 미리 보기 (잠금 해제)") + "</button></p>";
    return html + "</main>";
  }
  function viewLine() {
    if (GROUPS[V.id]) return viewSent();
    var ln = lineById(V.id), gs = groupsOf(ln);
    var key = (S.stage && S.stage[ln.id]) || curGroup(ln, gs);
    if (!gs.some(function (g) { return g.key === key; })) key = gs[0].key;
    var g = gs.filter(function (x) { return x.key === key; })[0];
    var html = topbar() + '<main class="wrap ' + ln.cls + '"><p><button class="link" ' + (ln.group ? 'data-act="line" data-id="' + ln.group + '"' : 'data-act="home"') + '>← 뒤로</button></p><div class="line-head"><span class="line-tag" style="background:var(--lc)">' + ln.tag + "</span><h2>" + ln.name + '</h2></div><p class="hint">' + ln.sub + "</p>";
    if (gs.length > 1) {
      html += '<div class="tabs" role="tablist">' + gs.map(function (x) {
        return '<button role="tab" aria-selected="' + (x.key === key) + '" class="tab' + (x.key === key ? " on" : "") + '" data-act="stage" data-id="' + ln.id + '" data-k="' + x.key + '">' + x.key + "<small>" + x.done + "/" + x.items.length + "</small></button>";
      }).join("") + "</div>";
    }
    if (ln.id === "hz") {
      var sn = parseInt(key, 10), lc = learnedChars(sn).length;
      html += '<p class="stage-test"><button class="btn" data-act="test" data-k="' + sn + '"' + (lc < 3 ? " disabled" : "") + ">" + key + " 단어 시험</button> <small>" + (lc < 3 ? "이 단계 레슨을 하나 끝내면 열려요" : "배운 " + lc + "자에서 무작위 10문제") + "</small></p>";
    }
    html += '<ol class="stations">';
    g.items.forEach(function (x) {
      var s = x.s, done = S.done[s.id], open = unlocked(ln, x.i);
      var glyphs = s.type === "hanzi" ? s.data.chars.map(function (c) { return HZ[c].zh; }).join("") : "";
      var cnt = s.type === "jp" ? s.data.items.length + "문장" : s.type === "hanzi" ? s.data.chars.length + "자" : (s.data.quiz ? s.data.quiz.length + "문제" : "");
      html += '<li class="st' + (done ? " done" : "") + (open ? "" : " lock") + '"><span class="dot"></span><button data-act="start" data-id="' + s.id + '"' + (open ? "" : ' disabled aria-label="잠김"') + '><span><span class="t">' + x.t + '</span><span class="s">' + (open ? (done ? "도장 찍음 · 다시 하기" : "시작하기") : "앞 역을 먼저 끝내세요") + " · " + cnt + '</span></span><span class="gl zh-glyph">' + glyphs + "</span></button></li>";
    });
    html += "</ol>";
    if (ln.id === "zh") html += '<p class="hint" style="margin-top:18px">레슨은 성조·성모·운모 핵심 87개입니다. 전체 음절 406개는 참고용 표로 따로 뒀어요.</p><p><button class="btn" data-act="chart">전체 음절표 보기 (참고)</button></p>';
    return html + "</main>";
  }
  function viewPassport() {
    var ch = learnedChars();
    var html = topbar() + '<main class="wrap"><section class="hero"><h1>도장첩</h1><p>배운 한자가 모입니다. 눌러서 다시 보세요.</p></section>';
    if (!ch.length) html += '<p class="empty">아직 찍은 도장이 없어요. 한자 1단계 첫 역에서 시작해 보세요.</p><button class="btn" data-act="home">노선도로</button>';
    else {
      html += '<div class="passport">' + ch.map(function (c) {
        var h = HZ[c];
        return '<button class="pp" data-act="card" data-c="' + c + '"><div class="g"><span class="zh-glyph" lang="zh-Hans">' + h.zh + '</span> <span class="jp-glyph" lang="ja">' + h.jp + "</span></div><small>" + h.m.split(",")[0] + "</small></button>";
      }).join("") + "</div>";
    }
    return html + "</main>";
  }
  function viewChart() {
    var E = window.ENGINE;
    var html = topbar() + '<main class="wrap"><p><button class="link" data-act="line" data-id="zh">← 뒤로</button></p><section class="hero" style="padding-top:0"><h1>전체 음절표 (참고)</h1><p>음절마다 병음과 한글 근사 표기입니다. <u class="rf">밑줄</u>은 혀를 마는 소리(zh ch sh r)입니다. 칸마다 1·2·3·4성 표시(ā á ǎ à)가 붙어 있고, 누르면 소리를 들을 수 있어요.</p></section>';
    window.PY_TABLE.forEach(function (g) {
      html += '<section class="chart-g"><h2>' + g.name + "</h2>";
      g.rows.forEach(function (r) {
        html += '<div class="chart-row"><b class="ini">' + r.ini + '</b><div class="cells">' + r.syl.map(function (sy) {
          return '<button class="cell" data-act="syl" data-s="' + sy + '"><i class="tn">' + [1, 2, 3, 4].map(function (t) { return toneMark(sy, t); }).join(" ") + "</i>" + E.pyKo(sy, true) + "</button>";
        }).join("") + "</div></div>";
      });
      html += "</section>";
    });
    return html + "</main>";
  }
  function viewCard() {
    return topbar() + '<main class="wrap"><p><button class="link" data-act="passport">← 도장첩</button></p>' + hzDetail(V.c) + "</main>";
  }
  function lessonHead() {
    var total = V.phase === "learn" ? V.cards.length : V.qs.length;
    var cur = V.phase === "learn" ? V.ci : V.qi;
    var pct = Math.round(cur / Math.max(total, 1) * 100);
    return '<div class="wrap ' + V.line.cls + '"><div class="lesson-top"><div class="bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + pct + '%"></span></div>' +
      (V.phase === "quiz" ? '<span class="hearts" aria-label="하트 ' + V.hearts + '개">♥ ' + V.hearts + "</span>" : "") +
      '<button class="x" data-act="back" aria-label="그만두기">✕</button></div>';
  }
  function viewLearn() {
    var c = V.cards[V.ci], last = V.ci === V.cards.length - 1;
    return lessonHead() + "<h2>" + V.title + "</h2>" + c.html +
      '<p style="margin-top:16px"><button class="btn primary block" data-act="next">' + (last ? "문제 풀기" : "다음") + "</button></p></div>";
  }
  function viewQuiz() {
    var q = V.qs[V.qi], answered = V.picked >= 0;
    var head = lessonHead() + '<div class="q-card"><div class="q-prompt">' + q.prompt + "</div>";
    if (q.sub) head += '<div style="color:var(--ink2);margin:-8px 0 8px;font-size:15px">' + q.sub + "</div>";
    if (q.glyph) {
      var h = HZ[q.glyph];
      var pk = answered ? ' data-act="peek" data-k="' + q.glyph + '"' : " disabled";
      var zhBox = '<div class="gbox zh"><button class="g zh-glyph peek" lang="zh-Hans"' + pk + ">" + h.zh + '</button><span class="lbl">중국어</span></div>';
      var jpBox = '<div class="gbox jp"><button class="g jp-glyph peek" lang="ja"' + pk + ">" + h.jp + '</button><span class="lbl">일본어</span></div>';
      head += '<div class="pair">' + zhBox + jpBox + "</div>";
    }
    if (q.big) head += '<div class="' + q.bigCls + '" lang="' + (q.lang === "zh-CN" ? "zh-Hans" : "ja") + '" style="font-size:34px;margin-bottom:8px;color:var(--' + (q.lang === "zh-CN" ? "zh" : "jp") + ')">' + q.big + "</div>";
    if (q.dual) {
      var col = function (side, list, ans, sel, name, cls0) {
        return '<div class="dcol ' + cls0 + '"><div class="dhead">' + name + "</div>" + list.map(function (c, i) {
          var cls = "choice";
          if (answered) { if (i === ans) cls += " right"; else if (i === sel) cls += " wrong"; }
          else if (i === sel) cls += " sel";
          return '<button class="' + cls + '" data-act="pickd" data-s="' + side + '" data-i="' + i + '"' + (answered ? " disabled" : "") + ">" + esc(c) + "</button>";
        }).join("") + "</div>";
      };
      head += '<div class="dual">' + col("L", q.left, q.answerL, V.pL, "중국어", "zh") + col("R", q.right, q.answerR, V.pR, "일본어", "jp") + "</div></div>";
    } else {
      head += '<div class="choices">';
      q.choices.forEach(function (c, i) {
        var cls = "choice";
        if (answered) { if (i === q.answer) cls += " right"; else if (i === V.picked) cls += " wrong"; }
        head += '<button class="' + cls + '" data-act="pick" data-i="' + i + '"' + (answered ? " disabled" : "") + ">" + esc(c) + "</button>";
      });
      head += "</div></div>";
    }
    if (answered) {
      var ok = q.dual ? (V.pL === q.answerL && V.pR === q.answerR) : V.picked === q.answer;
      var rightTxt = q.dual ? "중국어 “" + esc(q.left[q.answerL]) + "”, 일본어 “" + esc(q.right[q.answerR]) + "”" : "“" + esc(q.choices[q.answer]) + "”";
      head += '<div class="feedback' + (ok ? "" : " bad") + '" role="status"><h3>' + (ok ? "정답! +10 XP" : "아쉬워요. 정답은 " + rightTxt) + "</h3>" + q.after +
        '<button class="btn block" data-act="after">' + (V.qi === V.qs.length - 1 || V.hearts === 0 ? "결과 보기" : "계속") + "</button></div>";
    }
    return head + "</div>";
  }
  function viewResult() {
    var failed = V.hearts === 0;
    var acc = Math.round(V.right / V.qs.length * 100);
    var lc = V.line.cls;
    return topbar() + '<main class="wrap ' + lc + '"><section class="result">' +
      (failed ? '<h1>하트가 다 떨어졌어요</h1><p>괜찮아요. 해설을 다시 보고 도전하면 됩니다.</p>' :
        '<div class="stamp">' + esc(V.title).slice(0, 8) + "<br>통과</div><h1 style=\"margin-top:20px\">도장 획득!</h1><p>정답률 " + acc + "% · +" + (V.right * 10 + 20) + " XP</p>") +
      '<p><button class="btn primary" data-act="' + (failed ? "retry" : "back") + '">' + (failed ? "다시 도전" : "역 목록으로") + "</button></p></section></main>";
  }

  function render() {
    var h = "";
    if (V.name === "home") h = viewHome();
    else if (V.name === "passport") h = viewPassport();
    else if (V.name === "card") h = viewCard();
    else if (V.name === "chart") h = viewChart();
    else if (V.name === "line") h = viewLine();
    else if (V.name === "lesson") h = V.phase === "learn" ? viewLearn() : V.phase === "quiz" ? viewQuiz() : viewResult();
    if (V.sheet) h += '<div class="sheet-bg" data-act="closesheet"></div><div class="sheet" role="dialog">' + V.sheet + '<button class="btn block" data-act="closesheet">닫기</button></div>';
    $app.innerHTML = h;
    autoSpeak();
  }
  var lastAuto = "";
  function autoSpeak() {
    var key = "";
    if (V.sheet) return;
    if (V.name === "card") key = "card" + V.c;
    else if (V.name === "lesson" && V.phase === "learn") key = V.id + "L" + V.ci;
    else if (V.name === "lesson" && V.phase === "quiz") key = V.id + "Q" + V.qi + (V.picked >= 0 ? "A" : "");
    if (!key || key === lastAuto) return;
    lastAuto = key;
    var q = V.name === "lesson" && V.phase === "quiz" ? V.qs[V.qi] : null;
    if (q && V.picked < 0) { if (q.big) speak(q.big, q.lang || "ja-JP"); return; }
    var root = q ? $app.querySelector(".feedback") : $app;
    if (root) speakIn(root);
  }
  function peekHtml(key) {
    var h = HZ[key];
    return '<h3>' + h.zh + " · " + h.jp + "</h3>" +
      '<div class="pk zh-side"><b>중국어</b> ' + speakBtn(h.zh, "zh-CN", "듣기") + '<div class="big">' + h.py + "</div>한글 " + h.pk + "<br>" + h.m + "</div>" +
      '<div class="pk jp-side"><b>일본어</b> ' + speakBtn(h.jp, "ja-JP", "듣기") + '<div class="big">' + h.jk + "</div>" + h.jr + " · 한글 " + h.jko + "<br>" + h.m + "</div>";
  }
  function sylHtml(sy) {
    var E = window.ENGINE, arrows = ["―", "↗", "↘↗", "↘"], names = ["1성", "2성", "3성", "4성"];
    var rows = [1, 2, 3, 4].map(function (t) {
      var py = toneMark(sy, t);
      var hz = window.PYHZ && window.PYHZ[sy + t];
      return '<div class="tone-row"><b>' + names[t - 1] + "</b><span class=\"big\">" + py + (hz ? ' <span class="zh-glyph hzs">' + hz + "</span>" : "") + "</span><span>" + E.pyKo(sy, true) + " " + arrows[t - 1] + "</span>" + speakBtn(hz || py, "zh-CN", "듣기") + "</div>";
    }).join("");
    return "<h3>" + sy + "</h3>" + rows + '<p class="hint">옆의 한자를 읽어 주기 때문에 성조가 정확합니다. 한자가 없는 소리는 병음 글자를 읽어서 부정확할 수 있어요.</p>';
  }

  // 정답이면 바로 다음 문제로, 틀리면 해설을 보여 주고 '계속'을 눌러야 넘어간다
  function advance() {
    if (V.hearts === 0 || V.qi === V.qs.length - 1) {
      V.phase = "result";
      if (V.hearts > 0) { S.xp += 20; touchStreak(); if (V.id !== "test") S.done[V.id] = true; save(); }
      return render();
    }
    V.qi++; V.picked = -1; V.pL = -1; V.pR = -1; render();
    window.scrollTo(0, 0);
  }

  // ── 이벤트 ──────────────────────────────
  $app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]");
    if (!el) return;
    var a = el.getAttribute("data-act");
    if (a === "say") return speak(decodeURIComponent(el.getAttribute("data-t")), el.getAttribute("data-l"));
    if (a === "mute") { S.mute = !S.mute; save(); if (S.mute) try { speechSynthesis.cancel(); } catch (x) {} return render(); }
    if (a === "peek") { V.sheet = peekHtml(el.getAttribute("data-k")); render(); return speakIn($app.querySelector(".sheet")); }
    if (a === "syl") { V.sheet = sylHtml(el.getAttribute("data-s")); return render(); }
    if (a === "install") {
      if (DEFER) { DEFER.prompt(); DEFER.userChoice.then(function () { DEFER = null; render(); }); return; }
      var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent || "");
      V.sheet = "<h3>앱으로 설치</h3>" + (ios ? "<p class=\"hint\">사파리에서 아래 순서로 하세요.</p><ol class=\"howto\"><li>화면 아래 <b>공유</b> 버튼(네모에 위쪽 화살표)을 누릅니다.</li><li><b>홈 화면에 추가</b>를 누릅니다.</li><li>오른쪽 위 <b>추가</b>를 누르면 아이콘이 생겨요.</li></ol>" : "<p class=\"hint\">크롬에서 아래 순서로 하세요.</p><ol class=\"howto\"><li>오른쪽 위 <b>⋮ 메뉴</b>를 누릅니다.</li><li><b>앱 설치</b> 또는 <b>홈 화면에 추가</b>를 누릅니다.</li><li>설치하면 앱 아이콘으로 바로 열려요.</li></ol><p class=\"hint\">카카오톡 등 앱 안에서 열었다면 크롬으로 먼저 열어 주세요.</p>");
      return render();
    }
    if (a === "export") {
      V.sheet = "<h3>진행 백업</h3><p class=\"hint\">아래 코드를 복사해 메모 앱 등에 보관하세요. 다른 기기나 브라우저에서 ‘진행 복원’에 붙여 넣으면 이어서 할 수 있어요.</p><textarea id=\"code\" class=\"codebox\" readonly rows=\"5\">" + esc(packCode()) + "</textarea><p><button class=\"btn\" data-act=\"copycode\">코드 복사</button> <small id=\"copied\"></small></p>";
      return render();
    }
    if (a === "copycode") {
      var ta = document.getElementById("code");
      if (!ta) return;
      ta.select();
      var okc = false;
      try { if (navigator.clipboard) { navigator.clipboard.writeText(ta.value); okc = true; } } catch (e) {}
      if (!okc) try { okc = document.execCommand("copy"); } catch (e) {}
      var cp = document.getElementById("copied"); if (cp) cp.textContent = okc ? "복사했어요" : "길게 눌러 직접 복사하세요";
      return;
    }
    if (a === "import") {
      V.sheet = "<h3>진행 복원</h3><p class=\"hint\">백업 코드를 붙여 넣으세요. 지금 진행은 코드의 진행으로 바뀝니다.</p><textarea id=\"codein\" class=\"codebox\" rows=\"5\" placeholder=\"백업 코드\"></textarea><p><button class=\"btn primary\" data-act=\"doimport\">복원하기</button> <small id=\"impmsg\"></small></p>";
      return render();
    }
    if (a === "doimport") {
      var tin = document.getElementById("codein"), o = tin ? unpackCode(tin.value) : null, msg = document.getElementById("impmsg");
      if (!o) { if (msg) msg.textContent = "코드가 올바르지 않아요"; return; }
      S = Object.assign({ done: {}, xp: 0, streak: 0, last: "" }, o); save(); V.sheet = null; return go({ name: "home" });
    }
    if (a === "closesheet") { V.sheet = null; return render(); }
    if (a === "home") return go({ name: "home" });
    if (a === "passport") return go({ name: "passport" });
    if (a === "chart") return go({ name: "chart" });
    if (a === "line") return go({ name: "line", id: el.getAttribute("data-id") });
    if (a === "stage") { S.stage = S.stage || {}; S.stage[el.getAttribute("data-id")] = el.getAttribute("data-k"); save(); return render(); }
    if (a === "back") return go(V.line ? { name: "line", id: V.line.id } : { name: "home" });
    if (a === "unlock") { S.all = !S.all; save(); return render(); }
    if (a === "card") return go({ name: "card", c: el.getAttribute("data-c") });
    if (a === "start") return startLesson(el.getAttribute("data-id"));
    if (a === "test") return startTest(el.getAttribute("data-k") || "");
    if (a === "retry") return V.id === "test" ? startTest(TEST_STAGE) : startLesson(V.id);
    if (a === "next") {
      if (V.ci < V.cards.length - 1) { V.ci++; } else { V.phase = "quiz"; }
      return render();
    }
    if (a === "pickd") {
      if (V.picked >= 0) return;
      var qd = V.qs[V.qi], side = el.getAttribute("data-s"), idx = +el.getAttribute("data-i");
      if (side === "L") V.pL = idx; else V.pR = idx;
      if (V.pL >= 0 && V.pR >= 0) {
        V.picked = 0;
        if (V.pL === qd.answerL && V.pR === qd.answerR) { V.right++; S.xp += 10; save(); return advance(); }
        V.hearts--; save();
      }
      return render();
    }
    if (a === "pick") {
      if (V.picked >= 0) return;
      V.picked = +el.getAttribute("data-i");
      var q = V.qs[V.qi];
      if (V.picked === q.answer) { V.right++; S.xp += 10; save(); return advance(); }
      V.hearts--; save(); return render();
    }
    if (a === "after") return advance();
  });

  $app.addEventListener("toggle", function (e) { var k = e.target.getAttribute && e.target.getAttribute("data-k"); if (k) OPEN[k] = e.target.open; }, true);
  render();
})();
