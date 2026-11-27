// 병음 → 한글, 가나 → 로마자·한글 자동 변환. 모든 한글 표기는 '가까운 근사치'입니다.
(function () {
  "use strict";
  var TONE = { "ā":["a",1],"á":["a",2],"ǎ":["a",3],"à":["a",4],"ē":["e",1],"é":["e",2],"ě":["e",3],"è":["e",4],
    "ī":["i",1],"í":["i",2],"ǐ":["i",3],"ì":["i",4],"ō":["o",1],"ó":["o",2],"ǒ":["o",3],"ò":["o",4],
    "ū":["u",1],"ú":["u",2],"ǔ":["u",3],"ù":["u",4],"ǖ":["ü",1],"ǘ":["ü",2],"ǚ":["ü",3],"ǜ":["ü",4] };
  function plain(s) { var o = ""; for (var i = 0; i < s.length; i++) o += TONE[s[i]] ? TONE[s[i]][0] : s[i]; return o; }
  function compose(L, V, T) { return String.fromCharCode(0xAC00 + (L * 21 + V) * 28 + T); }

  // 초성: 한글 초성 인덱스
  var INI = { b:7, p:17, m:6, f:17, d:3, t:16, n:2, l:5, g:0, k:15, h:18, j:12, q:14, x:10, zh:13, ch:14, sh:9, r:5, z:13, c:14, s:10 };
  var INI_ORDER = ["zh","ch","sh","b","p","m","f","d","t","n","l","g","k","h","j","q","x","r","z","c","s"];
  // 운모: [모음인덱스, 받침인덱스] 목록. 첫 칸은 초성과 합치고, 나머지는 따로 쓴다.
  var FM = {
    a:[[0,0]], o:[[8,0],[14,0]], e:[[4,0]], ai:[[0,0],[20,0]], ei:[[5,0],[20,0]], ao:[[0,0],[13,0]], ou:[[4,0],[13,0]],
    an:[[0,0],[0,4]], en:[[5,0],[5,4]], ang:[[0,0],[0,21]], eng:[[18,0],[4,21]], ong:[[13,0],[13,21]], er:[[4,8]],
    i:[[20,0]], ia:[[20,0],[0,0]], ie:[[20,0],[5,0]], iao:[[2,0],[13,0]], iu:[[20,0],[13,0]], ian:[[20,0],[5,4]],
    "in":[[20,0],[20,4]], iang:[[20,0],[0,21]], ing:[[20,0],[18,21]], iong:[[20,0],[13,21]],
    u:[[13,0]], ua:[[9,0]], uo:[[14,0]], uai:[[9,0],[20,0]], ui:[[13,0],[15,0],[20,0]], uan:[[13,0],[0,4]], un:[[13,0],[4,4]], uang:[[13,0],[0,21]],
    "ü":[[16,0]], "üe":[[16,0],[5,0]], "üan":[[16,0],[5,4]], "ün":[[16,0],[20,4]]
  };
  var ZERO = { a:"아",o:"오워",e:"어",ai:"아이",ei:"에이",ao:"아우",ou:"어우",an:"아안",en:"에엔",ang:"아앙",eng:"으엉",er:"얼",
    yi:"이",ya:"이아",ye:"이에",yao:"야우",you:"이우",yan:"이엔",yin:"이인",yang:"이앙",ying:"이잉",yong:"이웅",
    wu:"우",wa:"와",wo:"워",wai:"와이",wei:"우웨이",wan:"우안",wen:"우언",wang:"우앙",weng:"우웡",
    yu:"위",yue:"위에",yuan:"위엔",yun:"위인" };
  var RETRO = { zh:1, ch:1, sh:1, r:1 };

  function split(syl) {
    var p = plain(syl.toLowerCase()), ini = "";
    if (ZERO[p]) return { ini: "", fin: p, zero: true, p: p };
    for (var i = 0; i < INI_ORDER.length; i++) if (p.indexOf(INI_ORDER[i]) === 0) { ini = INI_ORDER[i]; break; }
    var fin = p.slice(ini.length);
    if ("jqx".indexOf(ini) > -1 && ini && fin[0] === "u") fin = "ü" + fin.slice(1);
    if (ini === "zh" || ini === "ch" || ini === "sh" || ini === "r" || ini === "z" || ini === "c" || ini === "s") { if (fin === "i") fin = "i#"; }
    return { ini: ini, fin: fin, zero: false, p: p };
  }
  function sylKo(syl) {
    var s = split(syl);
    if (s.zero) return ZERO[s.p];
    if (s.fin === "i#") return compose(INI[s.ini], 18, RETRO[s.ini] ? 8 : 0);
    var segs = FM[s.fin];
    if (!segs) return syl;
    if (s.ini === "sh" && segs[0][0] === 13) segs = [[17, segs[0][1]]].concat(segs.slice(1));
    var out = compose(INI[s.ini], segs[0][0], segs[0][1]);
    for (var i = 1; i < segs.length; i++) out += compose(11, segs[i][0], segs[i][1]);
    return out;
  }
  function retro(syl) { var s = split(syl); return !!(s.ini && RETRO[s.ini]); }
  function syls(py) { return py.replace(/^\s+|\s+$/g, "").split(/[\s']+/).filter(Boolean); }
  // 한글 근사 표기. html=true면 혀 말기(zh ch sh r)에 밑줄 표시
  function pyKo(py, html) {
    return py.split(" / ").map(function (alt) {
      return syls(alt).map(function (s) { var k = sylKo(s); return html && retro(s) ? '<u class="rf">' + k + "</u>" : k; }).join("");
    }).join(" / ");
  }

  // ── 가나 ──
  var K = {};
  function add(str, rows) { rows.forEach(function (r) { K[r[0]] = [r[1], r[2]]; }); }
  add("", [["あ","a","아"],["い","i","이"],["う","u","우"],["え","e","에"],["お","o","오"],
    ["か","ka","카"],["き","ki","키"],["く","ku","쿠"],["け","ke","케"],["こ","ko","코"],
    ["が","ga","가"],["ぎ","gi","기"],["ぐ","gu","구"],["げ","ge","게"],["ご","go","고"],
    ["さ","sa","사"],["し","shi","씌"],["す","su","스"],["せ","se","세"],["そ","so","소"],
    ["ざ","za","자"],["じ","ji","지"],["ず","zu","즈"],["ぜ","ze","제"],["ぞ","zo","조"],
    ["た","ta","타"],["ち","chi","치"],["つ","tsu","쯔"],["て","te","테"],["と","to","토"],
    ["だ","da","다"],["ぢ","ji","지"],["づ","zu","즈"],["で","de","데"],["ど","do","도"],
    ["な","na","나"],["に","ni","니"],["ぬ","nu","누"],["ね","ne","네"],["の","no","노"],
    ["は","ha","하"],["ひ","hi","히"],["ふ","fu","흐"],["へ","he","헤"],["ほ","ho","호"],
    ["ば","ba","바"],["び","bi","비"],["ぶ","bu","부"],["べ","be","베"],["ぼ","bo","보"],
    ["ぱ","pa","파"],["ぴ","pi","피"],["ぷ","pu","푸"],["ぺ","pe","페"],["ぽ","po","포"],
    ["ま","ma","마"],["み","mi","미"],["む","mu","무"],["め","me","메"],["も","mo","모"],
    ["や","ya","야"],["ゆ","yu","유"],["よ","yo","요"],
    ["ら","ra","라"],["り","ri","리"],["る","ru","루"],["れ","re","레"],["ろ","ro","로"],
    ["わ","wa","와"],["を","o","오"],
    ["きゃ","kya","캬"],["きゅ","kyu","큐"],["きょ","kyo","쿄"],["ぎゃ","gya","갸"],["ぎゅ","gyu","규"],["ぎょ","gyo","교"],
    ["しゃ","sha","샤"],["しゅ","shu","슈"],["しょ","sho","쇼"],["じゃ","ja","자"],["じゅ","ju","주"],["じょ","jo","조"],
    ["ちゃ","cha","차"],["ちゅ","chu","추"],["ちょ","cho","초"],["にゃ","nya","냐"],["にゅ","nyu","뉴"],["にょ","nyo","뇨"],
    ["ひゃ","hya","햐"],["ひゅ","hyu","휴"],["ひょ","hyo","효"],["みゃ","mya","먀"],["みゅ","myu","뮤"],["みょ","myo","묘"],
    ["りゃ","rya","랴"],["りゅ","ryu","류"],["りょ","ryo","료"],["びゃ","bya","뱌"],["びゅ","byu","뷰"],["びょ","byo","뵤"],
    ["ぴゃ","pya","퍄"],["ぴゅ","pyu","퓨"],["ぴょ","pyo","표"],
    ["ふぁ","fa","파"],["ふぃ","fi","피"],["ふぇ","fe","페"],["ふぉ","fo","포"],["ちぇ","che","체"],["しぇ","she","셰"],["じぇ","je","제"],
    ["てぃ","ti","티"],["でぃ","di","디"],["うぃ","wi","위"],["うぇ","we","웨"],["うぉ","wo","워"],["ヴ","vu","부"]]);
  function toHira(s) {
    var o = "";
    for (var i = 0; i < s.length; i++) { var c = s.charCodeAt(i); o += (c >= 0x30A1 && c <= 0x30F6) ? String.fromCharCode(c - 0x60) : s[i]; }
    return o;
  }
  function addCoda(ko, coda) {
    var last = ko.charCodeAt(ko.length - 1);
    if (last >= 0xAC00 && last <= 0xD7A3 && (last - 0xAC00) % 28 === 0) return ko.slice(0, -1) + String.fromCharCode(last + coda);
    return ko + (coda === 4 ? "ㄴ" : "ㅅ");
  }
  var LONG_O = "おこそとのほもよろをごぞどぼぽょ", LONG_U = "うくすつぬふむゆるぐずづぶぷゅ";
  var FORT = { "카":"까","키":"끼","쿠":"꾸","케":"께","코":"꼬","캬":"꺄","큐":"뀨","쿄":"꾜","타":"따","테":"떼","토":"또","티":"띠","파":"빠","피":"삐","푸":"뿌","페":"뻬","포":"뽀","퍄":"빠","퓨":"쀼","표":"뾰","차":"짜","추":"쭈","초":"쪼","치":"찌","쯔":"쯔" };
  var VK = { a:"아", i:"이", u:"우", e:"에", o:"오" };
  // 입력: 가나(공백 허용, 조사는 は{wa} 처럼 {소리}로 표기). 반환 {kana, ro, ko}
  // 한글은 '들리는 소리' 기준: 단어 가운데 か·た·ぱ행은 된소리, 장음은 모음을 한 번 더, 촉음은 받침, です·ます 끝의 す는 ㅅ.
  function kana(src) {
    var disp = src.replace(/(.)\{(.)\}/g, "$1").replace(/\s+/g, " ").replace(/^ | $/g, "");
    var snd = toHira(src.replace(/(.)\{(.)\}/g, "$2"));
    var ro = "", ko = "", i = 0, pend = 0, first = true;
    while (i < snd.length) {
      var c = snd[i], two = snd.substr(i, 2);
      if (c === " ") { ro += " "; ko += " "; i++; first = true; continue; }
      if (c === "、" || c === "。" || c === "？" || c === "?") { i++; first = true; continue; }
      if (c === "っ") { pend = 1; i++; continue; }
      if (c === "ん") { ro += "n"; ko = addCoda(ko, 4); i++; first = false; continue; }
      if (c === "ー") { var lv = (ro.match(/([aiueo])$/) || [])[1]; ro = ro.replace(/([aiueo])$/, function (m) { return { a:"ā", i:"ī", u:"ū", e:"ē", o:"ō" }[m]; }); if (lv) ko += VK[lv]; i++; continue; }
      var e = (two.length === 2 && K[two]) ? K[two] : null, step = 2;
      if (!e) { e = K[c]; step = 1; }
      if (!e) { ro += c; ko += c; i++; first = false; continue; }
      var r = e[0], k = e[1];
      var nx = snd[i + step];
      var vowel = r[r.length - 1];
      var atEnd = (i + step >= snd.length || snd[i + step] === " " || snd[i + step] === "、");
      if (c === "す" && step === 1 && atEnd && i > 0 && (snd[i - 1] === "で" || snd[i - 1] === "ま")) { ro += "s"; ko = addCoda(ko, 19); i++; first = false; continue; }
      if (pend) { ro += /^ch/.test(r) ? "t" : r[0]; ko = addCoda(ko, /^k/.test(r) ? 1 : /^p/.test(r) ? 17 : 19); if (FORT[k]) k = FORT[k]; pend = 0; }
      else if (!first && FORT[k]) k = FORT[k];
      ro += r; ko += k; i += step; first = false;
      if (nx === "う" && (vowel === "o" || vowel === "u")) { ro = ro.replace(/[ou]$/, vowel === "o" ? "ō" : "ū"); ko += VK[vowel]; i++; }
      else if (nx === "お" && vowel === "o") { ro = ro.replace(/o$/, "ō"); ko += "오"; i++; }
      else if (nx === "あ" && vowel === "a") { ro = ro.replace(/a$/, "ā"); ko += "아"; i++; }
    }
    return { kana: disp, ro: ro.replace(/^\s+|\s+$/g, ""), ko: ko.replace(/^\s+|\s+$/g, "") };
  }
  // '훈・음' 형식 읽기 → {jk, jr, jko}
  function readings(jk) {
    var parts = jk.split("・").map(function (p) { return kana(p.replace(/[()]/g, "")); });
    return { jr: parts.map(function (p) { return p.ro; }).join(" / "), jko: parts.map(function (p) { return p.ko; }).join(" / ") };
  }
  window.ENGINE = { pyKo: pyKo, plain: plain, kana: kana, readings: readings, sylKo: sylKo, retro: retro, split: split, FM: FM, INI_ORDER: INI_ORDER };
})();
