// 중국어 발음표 전체: 음절표(PY_TABLE) + 성모·운모·성조 챕터. 한글은 ENGINE.pyKo로 생성(근사치).
(function () {
  var E = window.ENGINE;
  var G1 = "a o ai ei ao an en ang eng i ian iao ie in ing u";
  var T = {
    b: G1, p: G1 + " ou", m: G1 + " e ou iu", f: "a o ei ou an en ang eng u",
    d: "a e ai ei ao ou an en ang eng ong i ia ian iao ie iu ing u uan ui un uo",
    t: "a e ai ao ou an ang eng ong i ian iao ie ing u uan ui un uo",
    n: "a e ai ei ao ou an en ang eng ong i ian iang iao ie in iu ing u uan uo ü üe",
    l: "a e ai ei ao ou an ang eng ong i ia ian iang iao ie in iu ing u uan un uo ü üe",
    g: "a e ai ei ao ou an en ang eng ong u ua uai uan uang ui un uo", k: "", h: "",
    j: "i ia ian iang iao ie in iu ing iong u ue uan un", q: "", x: "",
    zh: "a e i ai ei ao ou an en ang eng ong u ua uai uan uang ui un uo",
    ch: "a e i ai ao ou an en ang eng ong u uai uan uang ui un uo",
    sh: "a e i ai ei ao ou an en ang eng u ua uai uan uang ui un uo",
    r: "e i ao ou an en ang eng ong u uan ui un uo",
    z: "a e i ai ei ao ou an en ang eng ong u uan ui un uo",
    c: "a e i ai ao ou an en ang eng ong u uan ui un uo",
    s: "a e i ai ao ou an en ang eng ong u uan ui un uo"
  };
  T.k = T.g; T.h = T.g; T.q = T.j; T.x = T.j;
  var GROUPS = [
    { name: "입술소리", ini: ["b", "p", "m", "f"] },
    { name: "혀끝소리", ini: ["d", "t", "n", "l"] },
    { name: "목구멍소리", ini: ["g", "k", "h"] },
    { name: "혀면소리 (입술을 옆으로)", ini: ["j", "q", "x"] },
    { name: "혀 말기 (한국어에 없음)", ini: ["zh", "ch", "sh", "r"] },
    { name: "혀 평평하게 (이 뒤)", ini: ["z", "c", "s"] }
  ];
  var ZEROS = "a o e ai ei ao ou an en ang eng er yi ya ye yao you yan yin yang ying yong wu wa wo wai wei wan wen wang weng yu yue yuan yun";
  window.PY_TABLE = GROUPS.map(function (g) {
    return { name: g.name, rows: g.ini.map(function (i) {
      return { ini: i, syl: T[i].split(" ").map(function (f) { return i + f; }) };
    }) };
  });
  window.PY_TABLE.push({ name: "성모 없이 시작", rows: [{ ini: "∅", syl: ZEROS.split(" ") }] });

  function sh(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var POOL = [];
  function mkCards(ch) {
    return ch.cards.map(function (c) {
      POOL.push({ py: c[0], ch: c[1], m: c[2] });
      return { big: c[0], sub: E.pyKo(c[0], true), ko: c[3] || "", ex: c[1] + " " + c[0] + " = " + c[2], say: c[1] };
    });
  }
  function mkQuiz(ch) {
    var qs = [];
    ch.cards.forEach(function (c) {
      var right = E.pyKo(c[0], false), pool = [], seen = {}; seen[right] = 1;
      sh(POOL).forEach(function (p) { var k = E.pyKo(p.py, false); if (!seen[k] && pool.length < 3) { seen[k] = 1; pool.push(k); } });
      var ch1 = sh([right].concat(pool));
      qs.push({ q: "“" + c[0] + "” (" + c[1] + ", " + c[2] + ")의 한글 소리에 가장 가까운 것은?", c: ch1, a: ch1.indexOf(right), x: c[0] + " = " + right + ". " + (c[3] || "") });
      var seen2 = {}, p2 = []; seen2[c[0]] = 1;
      sh(POOL).forEach(function (p) { if (!seen2[p.py] && E.plain(p.py) !== E.plain(c[0]) && p2.length < 3) { seen2[p.py] = 1; p2.push(p.py); } });
      var ch2 = sh([c[0]].concat(p2));
      qs.push({ q: "‘" + c[1] + "’ (" + c[2] + ")의 병음은?", c: ch2, a: ch2.indexOf(c[0]), x: c[1] + "의 병음은 " + c[0] + " (" + right + "). 성조 표시(" + c[0] + ")까지 같이 보세요." });
    });
    return sh(qs).slice(0, 8).concat(ch.extra || []);
  }

  var CH = [
    { id: "p4", title: "입술소리 b p m f", intro: "b는 숨을 약하게(한글 ㅂ), p는 숨을 세게(ㅍ). 손바닥을 입 앞에 대면 p에서만 바람이 느껴집니다. f는 윗니로 아랫입술을 살짝 물고 내는 영어 f 소리입니다(한글 ㅍ으로 근사).",
      cards: [["bā", "八", "8", "b: 숨 약하게, 한글 ㅂ에 가까움"], ["bù", "不", "아니다", "b: 부"], ["pà", "怕", "무섭다", "p: 숨 세게, ㅍ"], ["pǎo", "跑", "달리다", "p: 파오가 아니라 바람 세게 '파'"],
        ["mā", "妈", "엄마", "m: ㅁ"], ["mǐ", "米", "쌀", "m: 미"], ["fā", "发", "보내다", "f: 윗니+아랫입술, ㅍ 근사"], ["fàn", "饭", "밥", "f: 판"]],
      extra: [{ q: "손바닥을 입 앞에 댔을 때 바람이 세게 느껴지는 소리는?", c: ["b", "p", "m"], a: 1, x: "p는 숨을 세게 내보내는 거센소리(ㅍ), b는 약하게(ㅂ)입니다. 한글 ㅂ/ㅍ 차이와 비슷합니다." },
        { q: "f를 내는 올바른 입 모양은?", c: ["두 입술을 붙인다", "윗니로 아랫입술을 살짝 문다", "혀를 만다"], a: 1, x: "f는 영어 f처럼 윗니와 아랫입술 사이로 바람을 냅니다. 한글에는 없어서 ㅍ/ㅎ으로 근사합니다." }] },
    { id: "p5", title: "혀끝소리 d t n l", intro: "d는 약하게(ㄷ), t는 세게(ㅌ). n과 l은 모두 혀끝을 윗잇몸에 대는데, n은 코로, l은 혀 양옆으로 바람이 나갑니다.",
      cards: [["dà", "大", "크다", "d: 다"], ["dōu", "都", "모두", "d: 더우"], ["tā", "他", "그", "t: 숨 세게, 타"], ["tiān", "天", "하늘", "t: 티앤"],
        ["nǐ", "你", "너", "n: 니"], ["nǚ", "女", "여자", "n + ü: 뉘"], ["lái", "来", "오다", "l: 혀 옆으로 라이"], ["lǜ", "绿", "초록", "l + ü: 뤼"]],
      extra: [{ q: "n과 l의 차이는?", c: ["n은 코로, l은 혀 양옆으로 바람이 나간다", "둘은 완전히 같다", "l은 혀를 만다"], a: 0, x: "혀끝 위치는 같지만 n은 코로 소리가 나가고 l은 혀 양옆으로 나갑니다. 코를 막으면 n이 막힙니다." }] },
    { id: "p6", title: "목구멍소리 g k h", intro: "g는 약하게(ㄱ), k는 세게(ㅋ), h는 목 안쪽에서 거칠게 내는 ㅎ입니다. 한국어 ㅎ보다 마찰이 큽니다.",
      cards: [["gè", "个", "개 (세는 말)", "g: 거"], ["gāo", "高", "높다", "g: 까오 (ㄱ 약하게)"], ["kě", "可", "~할 수 있다", "k: 숨 세게 커"], ["kàn", "看", "보다", "k: 칸"],
        ["hǎo", "好", "좋다", "h: 목에서 거친 하오"], ["hē", "喝", "마시다", "h: 허"], ["huí", "回", "돌아가다", "h: 후이"], ["hěn", "很", "매우", "h: 헌"]],
      extra: [{ q: "k와 g의 차이는?", c: ["k는 숨을 세게 내보낸다", "g는 숨을 세게 내보낸다", "차이 없다"], a: 0, x: "k = 거센소리 ㅋ, g = 순한소리 ㄱ. p/b, t/d와 같은 짝입니다." }] },
    { id: "p7", title: "혀면소리 j q x", intro: "입술을 옆으로 벌리고 혀 가운데를 입천장에 붙여서 냅니다. j=ㅈ, q=ㅊ(세게), x=ㅅ. 한국어 지·치·시와 가장 가깝습니다. ju qu xu의 u는 ü(위)로 읽어서 qu는 '추'가 아니라 '취'입니다.",
      cards: [["jiǔ", "九", "9", "j: 지우"], ["jīn", "今", "지금", "j: 진"], ["qī", "七", "7", "q: 치 (혀 말지 않음)"], ["qù", "去", "가다", "qu = qü: 취"],
        ["xī", "西", "서쪽", "x: 시"], ["xué", "学", "배우다", "xu = xü: 쉬에"], ["xiǎo", "小", "작다", "x: 샤오"], ["jiā", "家", "집", "j: 지아"]],
      extra: [{ q: "qù(去)의 소리로 알맞은 것은?", c: ["추", "취", "쿠"], a: 1, x: "j q x 뒤의 u는 ü로 읽습니다. qu = 취." }] },
    { id: "p8", title: "단운모 a o e i u ü", intro: "e는 '에'가 아니라 입을 반쯤 벌리고 내는 '으어'(어), ü는 '우' 입술 모양으로 '이'를 말하는 소리(위)입니다.",
      cards: [["ā", "啊", "아!", "a: 입 크게 아"], ["wǒ", "我", "나", "o: 입술 둥글게 오/워"], ["hē", "喝", "마시다", "e: 에가 아니라 '으어'"], ["yī", "一", "1", "i: 이"],
        ["wǔ", "五", "5", "u: 입술 쭉 내민 우"], ["yǔ", "雨", "비", "ü: 입술은 우, 소리는 이 → 위"], ["nǚ", "女", "여자", "ü: 뉘"], ["lǜ", "绿", "초록", "ü: 뤼"]],
      extra: [{ q: "병음 e (예: 喝 hē)는 어떻게 읽을까요?", c: ["에", "으어 (어)", "이"], a: 1, x: "단독 e는 '에'가 아니라 '으어'입니다. ie, ei 안의 e만 '에'로 읽습니다." },
        { q: "ü를 내는 법은?", c: ["입술을 우 모양으로 하고 이 소리를 낸다", "입을 크게 벌린다", "혀를 만다"], a: 0, x: "입술 모양은 우, 소리는 이. 한글 ㅟ(위)로 근사합니다." }] },
    { id: "p9", title: "복운모 ai ei ao ou", intro: "모음 두 개를 이어서 한 박자로 읽습니다. 앞 모음을 길고 크게, 뒤 모음은 가볍게 붙입니다.",
      cards: [["ài", "爱", "사랑", "ai: 아이"], ["lái", "来", "오다", "ai: 라이"], ["měi", "美", "아름답다", "ei: 메이"], ["hēi", "黑", "검다", "ei: 헤이"],
        ["hǎo", "好", "좋다", "ao: 하오"], ["dào", "到", "도착하다", "ao: 따오"], ["dōu", "都", "모두", "ou: 더우 (어우)"], ["lóu", "楼", "건물", "ou: 러우"]],
      extra: [] },
    { id: "p10", title: "비운모 an en ang eng ong", intro: "-n은 혀끝을 윗잇몸에 대고(ㄴ), -ng은 혀뿌리를 올려 입을 막고 코로(ㅇ) 끝냅니다. an/ang, en/eng를 구분하세요. 한글 받침 ㄴ/ㅇ과 같습니다.",
      cards: [["ān", "安", "편안하다", "an: 안"], ["máng", "忙", "바쁘다", "ang: 망 (ㅇ 받침)"], ["rén", "人", "사람", "en: 런"], ["péng", "朋", "친구 (朋友)", "eng: 펑"],
        ["zhōng", "中", "가운데", "ong: 중 (혀 말고 쭝)"], ["dōng", "东", "동쪽", "ong: 둥"], ["shān", "山", "산", "an: 샨"], ["xiāng", "香", "향기", "iang: 샹"]],
      extra: [{ q: "an과 ang의 차이는?", c: ["an은 혀끝을 윗잇몸에 대고 끝낸다(ㄴ), ang은 입을 열고 코로 끝낸다(ㅇ)", "둘은 같다", "ang은 끝에 ㄱ이 붙는다"], a: 0, x: "받침 ㄴ vs ㅇ. 안 / 앙처럼 구분합니다." }] },
    { id: "p11", title: "결합운모 i u ü 계열", intro: "i, u, ü로 시작하는 합쳐진 운모입니다. 성모가 없으면 i→y, u→w로 씁니다(yi, wu). ian은 '이안'이 아니라 '이앤(옌)'에 가깝습니다.",
      cards: [["jiā", "家", "집", "ia: 지아"], ["xiè", "谢", "감사하다", "ie: 시에"], ["xiǎo", "小", "작다", "iao: 샤오"], ["liù", "六", "6", "iu: 리우 (iou 줄임)"],
        ["tiān", "天", "하늘", "ian: 티앤"], ["xìng", "姓", "성씨", "ing: 싱"], ["guó", "国", "나라", "uo: 궈"], ["kuài", "快", "빠르다", "uai: 콰이"],
        ["guì", "贵", "비싸다", "ui: 구이 (uei 줄임)"], ["chūn", "春", "봄", "un: 춘 (uen 줄임)"], ["xué", "学", "배우다", "üe: 쉬에"], ["xióng", "熊", "곰", "iong: 슝"]],
      extra: [{ q: "성모 없이 시작하는 ‘yi’, ‘wu’, ‘yu’는 각각 어떤 운모일까요?", c: ["i, u, ü", "i, o, e", "a, u, ü"], a: 0, x: "성모가 없으면 i→y, u→w, ü→yu로 씁니다. 소리는 이, 우, 위." }] },
    { id: "p12", title: "성조 변화 규칙", intro: "성조는 짝이 되면 바뀝니다. 3성+3성은 앞이 2성으로, 不는 4성 앞에서 bú로, 一는 뒤 성조에 따라 달라집니다. 표기는 원래 성조로 쓰고 읽을 때만 바꿉니다.",
      cards: [["nǐ hǎo", "你好", "안녕하세요", "3성+3성 → 앞이 2성: ní hǎo"], ["bú shì", "不是", "아니다", "不(bù)+4성 → bú"], ["yí ge", "一个", "한 개", "一(yī)+4성 → yí"], ["yì tiān", "一天", "하루", "一+1·2·3성 → yì"],
        ["bù hǎo", "不好", "좋지 않다", "不+3성은 그대로 bù"], ["shuǐ guǒ", "水果", "과일", "3성+3성: shuí guǒ"]],
      extra: [{ q: "你好의 실제 발음은?", c: ["nǐ hǎo (그대로)", "ní hǎo (앞이 2성)", "nì hǎo"], a: 1, x: "3성이 연속되면 앞의 3성은 2성으로 읽습니다. 표기는 nǐ hǎo 그대로 씁니다." },
        { q: "不是(아니다)의 不는 실제로 어떻게 읽을까요?", c: ["bù", "bú (2성)", "bǔ"], a: 1, x: "不 뒤에 4성이 오면 bú(2성)로 읽습니다." },
        { q: "‘hǎo’ 앞에서 不는?", c: ["bù (그대로)", "bú", "bǔ"], a: 0, x: "不는 4성 앞에서만 2성으로 바뀝니다. 3성 앞에서는 bù 그대로입니다." }] }
  ];
  CH.forEach(function (ch) { ch.cards = ch.cards; });
  // 카드 변환(POOL 채우기)이 끝난 뒤에 퀴즈를 만든다
  var built = CH.map(function (ch) { return { id: ch.id, title: ch.title, intro: ch.intro, raw: ch, cards: mkCards(ch) }; });
  built.forEach(function (b) { b.quiz = mkQuiz(b.raw); delete b.raw; });
  // 기존 p2(혀 말기), p3(z c s / j q x 비교)와 합쳐서 학습 순서대로 배열
  var old = {}; window.PINYIN_LESSONS.forEach(function (l) { old[l.id] = l; });
  var byId = {}; built.forEach(function (b) { byId[b.id] = b; });
  var order = ["p1", "p4", "p5", "p6", "p7", "p2", "p3", "p8", "p9", "p10", "p11", "p12"];
  window.PINYIN_LESSONS = order.map(function (id) { return old[id] || byId[id]; });
  // 종합 복습
  var rev = { id: "p13", title: "종합 복습", intro: "지금까지 배운 소리를 섞어서 확인합니다. 헷갈리면 발음표(홈 화면)를 열어 보세요.", cards: [], quiz: [] };
  var all = []; built.forEach(function (b) { all = all.concat(b.quiz); });
  rev.quiz = sh(all).slice(0, 10);
  window.PINYIN_LESSONS.push(rev);
})();
