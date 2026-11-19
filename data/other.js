// 중국어 발음 · 일본어 동사/여행 문장 · 영어 기초 문법
// 한글 표기는 '가장 가까운 근사치'입니다. 실제 소리는 🔊 버튼으로 같이 들어 보세요.

// ── 중국어 발음 ──────────────────────────────
window.PINYIN_LESSONS = [
  { id: "p1", title: "성조 4개",
    intro: "같은 'ma'라도 높낮이에 따라 뜻이 달라집니다. 손으로 소리의 높낮이를 그려 보세요.",
    cards: [
      { big: "mā", sub: "마 ―", ko: "1성: 높고 평평하게 길게", ex: "妈 mā 엄마", say: "妈" },
      { big: "má", sub: "마 ↗", ko: "2성: '마?' 하고 되묻듯 올림", ex: "麻 má 삼베", say: "麻" },
      { big: "mǎ", sub: "마 ↘↗", ko: "3성: 낮게 내렸다가 살짝 올림", ex: "马 mǎ 말", say: "马" },
      { big: "mà", sub: "마 ↘", ko: "4성: '마!' 하고 뚝 떨어뜨림", ex: "骂 mà 꾸짖다", say: "骂" },
      { big: "ma", sub: "마 (가볍게)", ko: "경성: 짧고 가볍게. 의문 어미로 자주 씀", ex: "吗 ma ~입니까?", say: "吗" }
    ],
    quiz: [
      { q: "'높고 평평하게' 소리 내는 성조는?", c: ["1성 ―", "2성 ↗", "3성 ↘↗", "4성 ↘"], a: 0, x: "1성은 처음부터 끝까지 높은 음을 유지합니다. mā(妈, 엄마)." },
      { q: "'마?' 하고 되묻듯 올라가는 성조는?", c: ["1성", "2성", "3성", "4성"], a: 1, x: "2성은 올라가는 소리입니다. má(麻). 한국어 '뭐?' 하고 되묻는 억양과 비슷합니다." },
      { q: "'마!' 하고 한 번에 떨어지는 성조는?", c: ["1성", "2성", "3성", "4성"], a: 3, x: "4성은 위에서 아래로 짧게 내리꽂습니다. mà(骂). 화난 '안 돼!' 느낌입니다." },
      { q: "mǎ(马, 말)의 성조는?", c: ["1성", "2성", "3성", "4성"], a: 2, x: "ǎ처럼 v 모양 표시가 있으면 3성입니다. 낮게 내려갔다 올라가는 소리입니다." },
      { q: "문장 끝에 붙는 가벼운 'ma(吗)'는 무슨 성조일까요?", c: ["1성", "2성", "4성", "경성(가볍게)"], a: 3, x: "경성은 표시가 없고 짧고 가볍게 읽습니다. 你好吗? (니 하오 마?)에서 마지막 ma가 그렇습니다." }
    ] },
  { id: "p2", title: "헷갈리는 소리 ① zhi chi shi ri",
    intro: "혀끝을 말아 입천장 쪽에 대는 소리(권설음)입니다. 한국어에는 없어서 모두 비슷하게 들립니다. 먼저 이 네 개만 따로 익혀요.",
    cards: [
      { big: "zhi", sub: "쯔r (ㅈ)", ko: "혀를 말고 ㅈ. 입술은 평평하게", ex: "知道 zhīdào 쯔따오 알다", say: "知道" },
      { big: "chi", sub: "츠r (ㅊ)", ko: "혀를 말고 ㅊ. 숨을 세게 내보냄", ex: "吃饭 chīfàn 츠판 밥 먹다", say: "吃饭" },
      { big: "shi", sub: "스r (ㅅ)", ko: "혀를 말고 ㅅ. 바람 새는 소리", ex: "是 shì 스 ~이다", say: "是" },
      { big: "ri", sub: "르r (ㄹ)", ko: "혀를 말고 ㄹ에 가까운 소리(진동 있음)", ex: "日本 Rìběn 르번 일본", say: "日本" }
    ],
    quiz: [
      { q: "혀를 말아서 내는 소리가 아닌 것은?", c: ["zhi", "chi", "shi", "qi"], a: 3, x: "qi는 혀를 말지 않고 혀 가운데를 평평하게 올립니다(다음 레슨). zh, ch, sh, r만 혀를 맙니다." },
      { q: "'吃饭 chīfàn'(밥 먹다)의 chi는 어떤 소리일까요?", c: ["혀를 말고 거센 ㅊ", "혀를 평평하게 ㅊ", "ㅈ에 가까운 소리", "ㅅ 소리"], a: 0, x: "ch는 혀를 말고 숨을 세게 내보내는 ㅊ입니다. 한국어 '치'와 달리 입술이 둥글지 않고 '츠' 쪽으로 가깝습니다." },
      { q: "'是 shì'(~이다)에 가장 가까운 한글은?", c: ["씨", "스 (혀 말고)", "시", "쯔"], a: 1, x: "shi는 '시'가 아니라 혀를 말고 내는 '스'입니다. 한국어 '시'에서 혀를 뒤로 말면 그 소리에 가까워집니다." },
      { q: "日本 Rìběn의 R는 어떤 소리일까요?", c: ["영어 L", "ㄹ에 가까운 혀 말고 내는 소리", "ㅇ", "ㅈ"], a: 1, x: "r는 혀를 말고 ㄹ 같은 소리를 냅니다. 영어 R와 비슷하지만 입술을 내밀지 않습니다." },
      { q: "'知道 zhīdào'(알다)의 zhi는?", c: ["혀 말고 ㅈ", "혀 평평하게 ㅈ", "혀 말고 ㅊ", "혀 말고 ㅅ"], a: 0, x: "zh = 혀를 말고 ㅈ. 숨을 약하게 내보냅니다. ch는 같은 혀 모양에서 숨만 세게 내보낸 소리입니다." }
    ] },
  { id: "p3", title: "헷갈리는 소리 ② z c s / j q x",
    intro: "혀 모양만 다릅니다. z c s는 혀를 이 뒤에 대고, j q x는 혀 가운데를 올리고 입술을 옆으로 벌립니다. chi / shi / zhi가 qi / xi / ji와 헷갈리는 이유가 여기 있어요.",
    cards: [
      { big: "zi · ci · si", sub: "쯔 · 츠 · 쓰", ko: "혀를 평평하게 이 뒤에 댐 (한국어 '으' 입모양)", ex: "四 sì 쓰 4 / 词 cí 츠 단어", say: "四" },
      { big: "ji · qi · xi", sub: "지 · 치 · 시", ko: "입술을 옆으로 벌림. 한국어 지·치·시와 거의 같음", ex: "七 qī 치 7 / 西 xī 시 서쪽", say: "七" },
      { big: "zhi · chi · shi", sub: "쯔r · 츠r · 스r", ko: "혀를 말아서. 한국어에 없는 소리", ex: "十 shí 스 10 / 吃 chī 츠 먹다", say: "十" },
      { big: "한눈에 비교", sub: "qi ≠ chi ≠ ci", ko: "치(qi) : 츠r(chi) : 츠(ci). 혀 위치가 다르면 전혀 다른 글자입니다.", ex: "七 qī 7 / 吃 chī 먹다 / 词 cí 단어", say: "七" }
    ],
    quiz: [
      { q: "한국어 '치'와 거의 같은 소리는?", c: ["chi", "qi", "ci", "zhi"], a: 1, x: "qi는 입술을 옆으로 벌리고 내는 '치'입니다. chi(혀를 말고 츠), ci(혀를 평평하게 츠)와 다릅니다." },
      { q: "七 qī (숫자 7)를 한글로 가장 비슷하게 쓰면?", c: ["츠", "치", "쓰", "스"], a: 1, x: "qi는 한글 '치'와 비슷합니다. 七은 여행 때 숫자 7로 자주 마주칩니다." },
      { q: "十 shí (숫자 10)와 西 xī(서쪽)의 차이는?", c: ["둘 다 같은 소리", "shi는 혀를 말고, xi는 평평하게 입술을 벌림", "xi가 더 낮은 소리", "shi는 성조가 없다"], a: 1, x: "shi는 혀를 말아 '스', xi는 입술을 옆으로 벌려 '시'입니다. 같은 'ㅅ' 계열이지만 혀 모양이 달라요." },
      { q: "혀를 평평하게 두고 이 뒤에 대는 소리 묶음은?", c: ["zh ch sh", "z c s", "j q x", "r"], a: 1, x: "z c s는 혀를 평평하게. zh ch sh는 혀를 만다. j q x는 혀 가운데를 올리고 입술을 옆으로 벌립니다." },
      { q: "吃 chī(먹다)와 七 qī(7)를 구분하는 법은?", c: ["성조만 다르다", "chi는 혀를 말고, qi는 혀를 말지 않음", "qi는 ㅅ 소리", "구분하지 않아도 된다"], a: 1, x: "chi = 혀를 말고 츠r, qi = 입술 옆으로 벌린 치. 병음 글자(ch / q)를 보면 어떤 혀 모양인지 알 수 있습니다." }
    ] }
];

// ── 일본어 동사 · 여행 문장 ──────────────────────────────
window.JP_LESSONS = [
  { id: "j1", title: "동사 ます형",
    intro: "일본어 동사는 사전형(行く)에 ます를 붙이면 정중한 말(行きます = 갑니다)이 됩니다. 한자 뒤에 오는 가나가 글자의 읽는 법을 이어 줍니다.",
    items: [
      { jp: "行きます", kana: "いきます", ro: "ikimasu", ko: "이키마스", m: "갑니다", e: "go", note: "行く(이쿠)의 정중한 형태. 行은 '길이 갈라지는 사거리' 그림입니다." },
      { jp: "来ます", kana: "きます", ro: "kimasu", ko: "키마스", m: "옵니다", e: "come", note: "来る(쿠루)는 불규칙 동사라 모양이 변합니다. 来 = 나무(木) 위로 사람들이 모여 오는 모양." },
      { jp: "食べます", kana: "たべます", ro: "tabemasu", ko: "타베마스", m: "먹습니다", e: "eat", note: "食 + べます. 食은 뚜껑 덮은 밥그릇입니다." },
      { jp: "飲みます", kana: "のみます", ro: "nomimasu", ko: "노미마스", m: "마십니다", e: "drink", note: "飲 = 食 + 欠(입 벌린 사람). 입 벌리고 꿀꺽." },
      { jp: "見ます", kana: "みます", ro: "mimasu", ko: "미마스", m: "봅니다", e: "see, watch", note: "見 = 目(눈) + 儿(사람). 눈이 큰 사람." },
      { jp: "買います", kana: "かいます", ro: "kaimasu", ko: "카이마스", m: "삽니다", e: "buy", note: "買い物(かいもの) = 쇼핑. 기념품 살 때 가장 많이 씁니다." },
      { jp: "乗ります", kana: "のります", ro: "norimasu", ko: "노리마스", m: "탑니다", e: "ride, board", note: "電車に乗ります(전철을 탑니다)처럼 に와 함께 씁니다." },
      { jp: "降ります", kana: "おります", ro: "orimasu", ko: "오리마스", m: "내립니다", e: "get off", note: "駅で降ります(역에서 내립니다). 降(내리다)는 비·눈이 내린다고 할 때도 씁니다." }
    ] },
  { id: "j2", title: "여행에서 바로 쓰는 말",
    intro: "듀오링고에서 잘 안 알려주는, 길 묻기·값 묻기 문장입니다. 통째로 외우세요.",
    items: [
      { jp: "駅はどこですか", kana: "えきはどこですか", ro: "eki wa doko desu ka", ko: "에키와 도코데스카", m: "역은 어디예요?", e: "Where is the station?", note: "〜はどこですか = 〜는 어디예요? 이 틀에 トイレ(화장실), ホテル(호텔)를 넣어 쓰세요." },
      { jp: "トイレはどこですか", kana: "トイレはどこですか", ro: "toire wa doko desu ka", ko: "토이레와 도코데스카", m: "화장실은 어디예요?", e: "Where is the restroom?", note: "화장실 표지에는 男(남자), 女(여자)가 쓰여 있습니다." },
      { jp: "いくらですか", kana: "いくらですか", ro: "ikura desu ka", ko: "이쿠라데스카", m: "얼마예요?", e: "How much is it?", note: "가게에서 가격을 물을 때. 安い(야스이, 싸다) / 高い(타카이, 비싸다)와 같이 외우세요." },
      { jp: "これをください", kana: "これをください", ro: "kore o kudasai", ko: "코레오 쿠다사이", m: "이거 주세요", e: "I'll take this, please.", note: "손가락으로 가리키며 これ(이것)를 쓰면 가장 쉽습니다." },
      { jp: "道を教えてください", kana: "みちをおしえてください", ro: "michi o oshiete kudasai", ko: "미치오 오시에테 쿠다사이", m: "길을 알려 주세요", e: "Please tell me the way.", note: "道(길) + を(~을) + 教えて(알려) + ください(주세요)." },
      { jp: "すみません", kana: "すみません", ro: "sumimasen", ko: "스미마센", m: "저기요 / 죄송합니다", e: "Excuse me / Sorry", note: "말을 걸 때도, 사과할 때도 씁니다. 가장 먼저 외울 말입니다." }
    ] }
];

// ── 영어 기초 문법 ──────────────────────────────
window.EN_LESSONS = [
  { id: "e1", title: "be동사",
    intro: "I → am, he/she/it → is, we/you/they → are.",
    quiz: [
      { q: "I ___ a student.", c: ["am", "is", "are"], a: 0, x: "주어 I에는 항상 am을 씁니다. I am = I'm." },
      { q: "She ___ happy.", c: ["am", "is", "are"], a: 1, x: "she/he/it(3인칭 단수)에는 is. She is happy." },
      { q: "They ___ from Korea.", c: ["is", "am", "are"], a: 2, x: "they/we/you(복수)에는 are." },
      { q: "We ___ friends.", c: ["are", "is", "am"], a: 0, x: "we는 복수라서 are. We are friends." },
      { q: "It ___ cold today.", c: ["are", "is", "am"], a: 1, x: "날씨를 말할 때 주어 it은 3인칭 단수라서 is." }
    ] },
  { id: "e2", title: "a / an 관사",
    intro: "모음 '소리'로 시작하면 an, 자음 소리로 시작하면 a. 철자가 아니라 발음이 기준입니다.",
    quiz: [
      { q: "I want ___ apple.", c: ["a", "an"], a: 1, x: "apple은 모음 소리 [æ]로 시작해서 an." },
      { q: "She has ___ book.", c: ["a", "an"], a: 0, x: "book은 자음 소리 [b]로 시작해서 a." },
      { q: "Bring ___ umbrella.", c: ["a", "an"], a: 1, x: "umbrella는 [ʌ] 모음 소리로 시작하니 an." },
      { q: "Wait ___ hour.", c: ["a", "an"], a: 1, x: "hour는 h가 묵음이라 모음 소리 [aʊ]로 시작합니다. 철자가 아니라 소리가 기준이라 an." },
      { q: "He goes to ___ university.", c: ["a", "an"], a: 0, x: "university는 [juː]로 시작하는 자음 소리(y)라서 a." }
    ] },
  { id: "e3", title: "복수형",
    intro: "대부분 -s. s, x, ch, sh로 끝나면 -es. 자음+y는 -ies. 불규칙은 따로 외웁니다.",
    quiz: [
      { q: "one box → two ___", c: ["boxs", "boxes", "boxies"], a: 1, x: "x로 끝나는 단어는 -es. boxes." },
      { q: "one child → three ___", c: ["childs", "childes", "children"], a: 2, x: "child의 복수는 불규칙 children. 외워야 합니다." },
      { q: "one city → two ___", c: ["citys", "cities", "citis"], a: 1, x: "자음+y로 끝나면 y를 i로 바꾸고 -es. cities." },
      { q: "one bus → two ___", c: ["buses", "buss", "busies"], a: 0, x: "s로 끝나는 단어도 -es. buses." },
      { q: "one knife → two ___", c: ["knifes", "knives", "knifees"], a: 1, x: "f/fe로 끝나는 일부 단어는 f를 v로 바꾸고 -es. knives." }
    ] },
  { id: "e4", title: "현재형 3인칭 -s",
    intro: "he / she / it이 주어면 동사 끝에 -s(-es)를 붙입니다.",
    quiz: [
      { q: "He ___ coffee every morning.", c: ["drink", "drinks", "drinking"], a: 1, x: "he는 3인칭 단수라 동사에 -s. drinks." },
      { q: "She ___ to school by bus.", c: ["go", "goes", "gos"], a: 1, x: "go는 -es를 붙여 goes." },
      { q: "They ___ English at work.", c: ["speak", "speaks", "speaking"], a: 0, x: "they는 복수라서 -s를 붙이지 않습니다." },
      { q: "My mom ___ TV after dinner.", c: ["watch", "watches", "watchs"], a: 1, x: "ch로 끝나면 -es. watches." },
      { q: "The train ___ at nine.", c: ["leave", "leaves", "leavs"], a: 1, x: "the train은 it(3인칭 단수)이라 leaves." }
    ] },
  { id: "e5", title: "부정문·의문문 do/does",
    intro: "일반 동사의 부정과 의문은 do/does를 씁니다. does 뒤에는 동사 원형.",
    quiz: [
      { q: "I ___ like spicy food.", c: ["don't", "doesn't", "isn't"], a: 0, x: "I에는 do not = don't." },
      { q: "She ___ like coffee.", c: ["don't", "doesn't", "aren't"], a: 1, x: "she에는 does not = doesn't." },
      { q: "___ you speak English?", c: ["Do", "Does", "Are"], a: 0, x: "you에는 Do로 시작하는 의문문." },
      { q: "___ he work here?", c: ["Do", "Does", "Is"], a: 1, x: "he에는 Does. 그리고 동사는 works가 아니라 work(원형)입니다." },
      { q: "He doesn't ___ meat.", c: ["eat", "eats", "eating"], a: 0, x: "doesn't 뒤에는 동사 원형. -s는 does가 이미 가져갔습니다." }
    ] },
  { id: "e6", title: "현재진행형",
    intro: "지금 하고 있는 일: am / is / are + 동사-ing.",
    quiz: [
      { q: "I am ___ lunch now.", c: ["eat", "eating", "eats"], a: 1, x: "be동사 + 동사-ing. I am eating." },
      { q: "She ___ reading a map.", c: ["is", "are", "am"], a: 0, x: "she에는 is. She is reading." },
      { q: "They are ___ for the bus.", c: ["wait", "waits", "waiting"], a: 2, x: "are + 동사-ing. waiting." },
      { q: "We ___ walking to the hotel.", c: ["is", "are", "am"], a: 1, x: "we에는 are." },
      { q: "He is ___ a photo.", c: ["take", "taking", "takes"], a: 1, x: "take는 e를 빼고 -ing를 붙여 taking." }
    ] },
  { id: "e7", title: "과거형",
    intro: "be동사: was / were. 일반 동사: 대부분 -ed, 불규칙은 따로(go → went).",
    quiz: [
      { q: "Yesterday I ___ at home.", c: ["was", "were", "am"], a: 0, x: "I의 과거는 was." },
      { q: "They ___ happy last night.", c: ["was", "were", "are"], a: 1, x: "they의 과거는 were." },
      { q: "She ___ the movie last week.", c: ["watch", "watches", "watched"], a: 2, x: "규칙 동사의 과거는 -ed. watched." },
      { q: "We ___ to Seoul last year.", c: ["goed", "went", "go"], a: 1, x: "go의 과거는 불규칙 went. goed는 틀린 말입니다." },
      { q: "I did not ___ him.", c: ["saw", "see", "seen"], a: 1, x: "did not 뒤에는 동사 원형. 과거 표시는 did가 하므로 see." }
    ] }
];
