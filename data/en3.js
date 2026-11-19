// 영어 기초 문법 3~5단계. 문제마다 해설(x) 포함.
(function () {
  var L = [
    // ── 3단계 ──
    { id: "e15", title: "3단계 · 미래: will / be going to", intro: "즉흥적인 결정·예측은 will, 이미 정한 계획은 be going to. 둘 다 뒤에는 동사 원형.",
      quiz: [
        { q: "I ___ call you tomorrow. (지금 정한 약속)", c: ["will", "wills", "am will"], a: 0, x: "will은 모든 주어에 같고 뒤에 동사 원형. I will call." },
        { q: "She is going ___ visit Busan next week.", c: ["to", "for", "at"], a: 0, x: "be going to + 동사 원형. 이미 정한 계획에 씁니다." },
        { q: "It ___ rain tomorrow. (예측)", c: ["will", "is will", "does"], a: 0, x: "날씨 예측에는 will을 자주 씁니다. It will rain." },
        { q: "We ___ going to eat sushi tonight.", c: ["is", "are", "am"], a: 1, x: "we에는 be동사 are. We are going to eat." },
        { q: "He ___ come to the party. (안 올 것이다)", c: ["won't", "doesn't will", "isn't will"], a: 0, x: "will not = won't. He won't come." }
      ] },
    { id: "e16", title: "3단계 · 비교급과 최상급", intro: "짧은 형용사는 -er / -est, 긴 형용사는 more / most. 비교는 than.",
      quiz: [
        { q: "This bag is ___ than that one. (cheap)", c: ["cheaper", "more cheap", "cheapest"], a: 0, x: "짧은 형용사는 -er. cheap → cheaper + than." },
        { q: "Seoul is the ___ city in Korea. (big)", c: ["bigger", "biggest", "most big"], a: 1, x: "최상급은 the + -est. big은 g를 겹쳐 biggest." },
        { q: "This hotel is ___ than that one. (expensive)", c: ["expensiver", "more expensive", "most expensive"], a: 1, x: "긴 형용사는 more + 원급. more expensive than." },
        { q: "Today is ___ than yesterday. (good)", c: ["gooder", "more good", "better"], a: 2, x: "good의 비교급은 불규칙 better." },
        { q: "He is the ___ student in class. (tall)", c: ["taller", "tallest", "most tall"], a: 1, x: "the + 최상급. tall → the tallest." }
      ] },
    { id: "e17", title: "3단계 · some / any", intro: "긍정문에는 some, 부정문·의문문에는 any. 권유·부탁 의문문에는 some도 씁니다.",
      quiz: [
        { q: "I have ___ questions.", c: ["some", "any"], a: 0, x: "긍정문에는 some." },
        { q: "I don't have ___ money.", c: ["some", "any"], a: 1, x: "부정문에는 any." },
        { q: "Do you have ___ water?", c: ["some", "any"], a: 1, x: "일반 의문문에는 any." },
        { q: "Would you like ___ tea?", c: ["some", "any"], a: 0, x: "권유하는 의문문에는 some을 씁니다." },
        { q: "There aren't ___ seats.", c: ["some", "any"], a: 1, x: "부정문 aren't 뒤에는 any." }
      ] },
    { id: "e18", title: "3단계 · much / many / a lot of", intro: "셀 수 있는 명사에는 many, 셀 수 없는 명사에는 much. 긍정문에서는 a lot of가 자연스럽습니다.",
      quiz: [
        { q: "How ___ people are there?", c: ["much", "many", "a lot"], a: 1, x: "people은 셀 수 있으니 many." },
        { q: "How ___ is this?", c: ["much", "many", "lot"], a: 0, x: "가격을 물을 때는 How much." },
        { q: "I don't have ___ time.", c: ["many", "much", "a few"], a: 1, x: "time은 셀 수 없으니 much." },
        { q: "She has ___ friends in Tokyo.", c: ["a lot of", "much", "a little"], a: 0, x: "긍정문에서 much는 어색하고 a lot of를 씁니다." },
        { q: "There are too ___ cars.", c: ["much", "many", "little"], a: 1, x: "cars는 셀 수 있어서 too many." }
      ] },
    { id: "e19", title: "3단계 · 빈도부사", intro: "always > usually > often > sometimes > never. be동사 뒤, 일반동사 앞에 둡니다.",
      quiz: [
        { q: "I ___ drink coffee in the morning. (항상)", c: ["always", "never", "rarely"], a: 0, x: "always = 항상." },
        { q: "She is ___ late. (절대 ~ 않다)", c: ["never", "always", "sometimes"], a: 0, x: "never = 결코 ~ 않다. 부정어가 이미 들어 있어 not을 같이 쓰지 않습니다." },
        { q: "He ___ goes to the gym. (가끔)", c: ["sometimes", "sometime", "some times"], a: 0, x: "빈도부사 sometimes는 일반동사 앞에." },
        { q: "They are ___ at home on Sundays.", c: ["usually", "usual", "usualy"], a: 0, x: "be동사(are) 뒤에 빈도부사. 철자는 usually." },
        { q: "빈도가 가장 낮은 것은?", c: ["often", "sometimes", "never"], a: 2, x: "never가 0%, often이 높은 편입니다." }
      ] },
    { id: "e20", title: "3단계 · have / has와 소유", intro: "have는 I/you/we/they, has는 he/she/it. 부정과 의문은 don't/doesn't + have.",
      quiz: [
        { q: "She ___ a new phone.", c: ["have", "has", "haves"], a: 1, x: "she는 3인칭 단수라 has." },
        { q: "I ___ two brothers.", c: ["have", "has", "having"], a: 0, x: "I에는 have." },
        { q: "He ___ have a car.", c: ["don't", "doesn't", "isn't"], a: 1, x: "he의 부정은 doesn't have. has가 아니라 have." },
        { q: "___ you have a pen?", c: ["Do", "Does", "Is"], a: 0, x: "you에는 Do로 시작하는 의문문." },
        { q: "My sister ___ a cat.", c: ["have", "has", "have got"], a: 1, x: "my sister = she. 그래서 has." }
      ] },
    { id: "e21", title: "3단계 · should / must / have to", intro: "should(~하는 게 좋다), must(~해야 한다, 강함), have to(~해야 한다, 상황). 뒤에는 동사 원형.",
      quiz: [
        { q: "You ___ see a doctor. (권고)", c: ["should", "shoulds", "must to"], a: 0, x: "조언은 should + 동사 원형." },
        { q: "You ___ drive on the left in Japan.", c: ["must", "musts", "are must"], a: 0, x: "must는 규칙·의무를 나타냅니다." },
        { q: "She ___ work tomorrow.", c: ["have to", "has to", "must to"], a: 1, x: "have to는 주어가 she면 has to. She has to work." },
        { q: "You ___ park here. (금지)", c: ["mustn't", "don't must", "aren't must"], a: 0, x: "mustn't = 하면 안 된다(금지)." },
        { q: "You ___ take off your shoes. (안 해도 된다)", c: ["don't have to", "mustn't", "shouldn't"], a: 0, x: "don't have to = ~할 필요 없다. mustn't(금지)와 뜻이 다릅니다." }
      ] },
    // ── 4단계 ──
    { id: "e22", title: "4단계 · 현재완료", intro: "have/has + 과거분사. 경험(ever/never), 완료(already/yet), 계속(for/since)을 나타냅니다.",
      quiz: [
        { q: "I ___ been to Japan. (경험)", c: ["have", "has", "had"], a: 0, x: "I에는 have. have been to = ~에 가 본 적 있다." },
        { q: "She has ___ finished. (이미)", c: ["already", "yet", "ago"], a: 0, x: "긍정문의 '이미'는 already. yet은 부정·의문문." },
        { q: "I have lived here ___ 2020.", c: ["for", "since", "ago"], a: 1, x: "시작 시점 앞에는 since, 기간 앞에는 for." },
        { q: "Have you ___ sushi?", c: ["eat", "ate", "eaten"], a: 2, x: "eat의 과거분사는 eaten. have + 과거분사." },
        { q: "He has lived here ___ five years.", c: ["for", "since", "from"], a: 0, x: "five years는 기간이라서 for." }
      ] },
    { id: "e23", title: "4단계 · 수동태", intro: "be동사 + 과거분사 = ~되다. 행위자는 by로 나타냅니다.",
      quiz: [
        { q: "The room ___ cleaned every day.", c: ["is", "are", "does"], a: 0, x: "The room은 단수이니 is cleaned." },
        { q: "This book was ___ by Soseki.", c: ["write", "wrote", "written"], a: 2, x: "write의 과거분사는 written. was + 과거분사." },
        { q: "English ___ spoken in many countries.", c: ["is", "are", "be"], a: 0, x: "English는 단수 취급. is spoken." },
        { q: "The windows ___ broken last night.", c: ["was", "were", "are"], a: 1, x: "windows가 복수이고 과거라서 were." },
        { q: "Tickets ___ sold here.", c: ["is", "are", "does"], a: 1, x: "Tickets가 복수라서 are sold." }
      ] },
    { id: "e24", title: "4단계 · to부정사", intro: "to + 동사원형. want / need / decide / hope 뒤에 자주 옵니다.",
      quiz: [
        { q: "I want ___ a ticket.", c: ["buy", "to buy", "buying"], a: 1, x: "want 뒤에는 to + 동사 원형." },
        { q: "She decided ___ the trip.", c: ["to cancel", "cancel", "canceling"], a: 0, x: "decide to + 동사 원형." },
        { q: "I went to the store ___ milk. (목적)", c: ["buy", "to buy", "buying"], a: 1, x: "~하러/~하기 위해는 to + 동사 원형(목적)." },
        { q: "It is important ___ early.", c: ["to arrive", "arrive", "arriving"], a: 0, x: "It is + 형용사 + to 동사원형." },
        { q: "He hopes ___ Japanese.", c: ["learning", "to learn", "learn"], a: 1, x: "hope 뒤에는 to부정사." }
      ] },
    { id: "e25", title: "4단계 · 동명사 (-ing)", intro: "enjoy / finish / mind / avoid 뒤에는 -ing. 전치사 뒤에도 -ing.",
      quiz: [
        { q: "I enjoy ___ music.", c: ["listen to", "to listen", "listening to"], a: 2, x: "enjoy 뒤에는 동명사 -ing. listening to." },
        { q: "She finished ___ dinner.", c: ["cook", "cooking", "to cook"], a: 1, x: "finish 뒤에는 -ing." },
        { q: "Thank you for ___ me.", c: ["help", "to help", "helping"], a: 2, x: "전치사(for) 뒤에는 동명사." },
        { q: "Do you mind ___ the window?", c: ["to open", "opening", "open"], a: 1, x: "mind 뒤에는 -ing." },
        { q: "___ is good for your health.", c: ["Walk", "Walking", "To walking"], a: 1, x: "-ing가 주어 자리에서 '~하는 것'이 됩니다." }
      ] },
    { id: "e26", title: "4단계 · 접속사 and / but / because / so", intro: "and(그리고), but(그러나), because(왜냐하면), so(그래서). because 뒤는 이유, so 앞은 이유.",
      quiz: [
        { q: "I was tired, ___ I went to bed early.", c: ["but", "so", "because"], a: 1, x: "피곤했다(이유) → 그래서 일찍 잤다(결과). so." },
        { q: "I like tea ___ I don't like coffee.", c: ["but", "so", "because"], a: 0, x: "대조에는 but." },
        { q: "I stayed home ___ it was raining.", c: ["so", "because", "but"], a: 1, x: "because 뒤에 이유가 옵니다." },
        { q: "She speaks English ___ Japanese.", c: ["and", "but", "so"], a: 0, x: "나열에는 and." },
        { q: "It was cold, ___ we wore coats.", c: ["because", "so", "but"], a: 1, x: "추웠다 → 그래서 코트를 입었다. so." }
      ] },
    { id: "e27", title: "4단계 · 과거진행과 when / while", intro: "was/were + -ing = 그때 ~하고 있었다. while은 진행 중, when은 시점.",
      quiz: [
        { q: "I ___ sleeping when you called.", c: ["was", "were", "am"], a: 0, x: "I의 과거진행은 was + -ing." },
        { q: "They ___ watching TV at nine.", c: ["was", "were", "are"], a: 1, x: "they의 과거진행은 were + -ing." },
        { q: "She was cooking ___ I was cleaning.", c: ["while", "when", "so"], a: 0, x: "동시에 진행되는 두 동작은 while." },
        { q: "I was walking ___ it started to rain.", c: ["when", "while", "because"], a: 0, x: "진행 중에 갑자기 일어난 일의 시점은 when." },
        { q: "What ___ you doing last night?", c: ["was", "were", "did"], a: 1, x: "you에는 were. What were you doing?" }
      ] },
    // ── 5단계 ──
    { id: "e28", title: "5단계 · 조건문 if", intro: "If + 현재형, will + 동사원형. 조건절에는 미래 will을 쓰지 않습니다.",
      quiz: [
        { q: "If it rains, we ___ stay home.", c: ["will", "would", "are"], a: 0, x: "결과절에는 will + 동사 원형." },
        { q: "If you ___ hard, you will pass.", c: ["study", "will study", "studied"], a: 0, x: "if절에는 현재형. will은 쓰지 않습니다." },
        { q: "If I ___ time, I'll call you.", c: ["have", "will have", "had"], a: 0, x: "조건절은 현재형 have." },
        { q: "___ you need help, call me.", c: ["If", "Because", "Unless"], a: 0, x: "조건을 나타내는 if." },
        { q: "I won't go ___ it stops raining. (멈추지 않는 한)", c: ["unless", "if", "when"], a: 0, x: "unless = ~하지 않는 한(= if not)." }
      ] },
    { id: "e29", title: "5단계 · 관계대명사 who / which / that", intro: "사람은 who, 사물은 which, 둘 다 that. 앞의 명사를 뒤에서 꾸밉니다.",
      quiz: [
        { q: "The man ___ lives next door is kind.", c: ["who", "which", "whom"], a: 0, x: "사람이고 주어 역할이면 who." },
        { q: "This is the book ___ I bought.", c: ["who", "which", "whose"], a: 1, x: "사물이면 which(또는 that)." },
        { q: "I know a girl ___ speaks four languages.", c: ["that", "what", "where"], a: 0, x: "that은 사람과 사물 모두에 씁니다." },
        { q: "The city ___ I visited was beautiful.", c: ["who", "which", "when"], a: 1, x: "city는 사물/장소이므로 which(that)." },
        { q: "She is the teacher ___ helped me.", c: ["who", "which", "whose"], a: 0, x: "teacher는 사람이므로 who." }
      ] },
    { id: "e30", title: "5단계 · 간접화법과 간접의문문", intro: "말을 전할 때 시제를 한 칸 과거로, 간접의문문은 의문사 + 주어 + 동사 어순.",
      quiz: [
        { q: "He said, 'I am tired.' → He said he ___ tired.", c: ["is", "was", "be"], a: 1, x: "전달동사가 과거면 시제도 과거로: am → was." },
        { q: "Can you tell me where ___?", c: ["the station is", "is the station", "does the station"], a: 0, x: "간접의문문은 의문사 + 주어 + 동사 어순. where the station is." },
        { q: "She said, 'I will come.' → She said she ___ come.", c: ["will", "would", "is"], a: 1, x: "will은 would로 바뀝니다." },
        { q: "Do you know what time ___?", c: ["it is", "is it", "does it"], a: 0, x: "간접의문문: what time it is." },
        { q: "He asked me ___ I liked sushi.", c: ["if", "that", "what"], a: 0, x: "예/아니오 질문을 전할 때는 if(whether)." }
      ] },
    { id: "e31", title: "5단계 · 가정법 과거", intro: "현재 사실의 반대 가정: If + 과거형, would + 동사원형. be동사는 were를 씁니다.",
      quiz: [
        { q: "If I ___ rich, I would travel the world.", c: ["am", "were", "will be"], a: 1, x: "가정법 과거에서 be동사는 모든 주어에 were." },
        { q: "If I had a car, I ___ drive to Busan.", c: ["will", "would", "am"], a: 1, x: "결과절은 would + 동사 원형." },
        { q: "If she ___ here, she would help us.", c: ["is", "were", "will be"], a: 1, x: "she에도 were를 씁니다." },
        { q: "What would you do if you ___ a million dollars?", c: ["have", "had", "will have"], a: 1, x: "if절은 과거형 had." },
        { q: "가정법 과거가 나타내는 것은?", c: ["현재 사실의 반대", "과거 사실", "확실한 미래"], a: 0, x: "과거형을 쓰지만 뜻은 '현재 사실과 다른 상상'입니다." }
      ] },
    { id: "e32", title: "5단계 · 분사 -ing / -ed", intro: "감정을 일으키면 -ing(interesting), 감정을 느끼면 -ed(interested).",
      quiz: [
        { q: "The movie was ___.", c: ["boring", "bored", "bore"], a: 0, x: "영화가 지루함을 일으키므로 boring." },
        { q: "I am ___ in Japanese culture.", c: ["interesting", "interested", "interest"], a: 1, x: "사람이 흥미를 느끼므로 interested." },
        { q: "She was ___ by the news.", c: ["surprising", "surprised", "surprise"], a: 1, x: "놀란 사람은 surprised." },
        { q: "That is an ___ story.", c: ["exciting", "excited", "excite"], a: 0, x: "이야기가 흥분을 일으키니 exciting." },
        { q: "I'm ___ because it's late.", c: ["tired", "tiring", "tire"], a: 0, x: "피곤함을 느끼는 사람은 tired." }
      ] },
    { id: "e33", title: "5단계 · 종합 복습", intro: "1~5단계 문법을 섞어서 마지막으로 확인합니다.",
      quiz: [
        { q: "She ___ to school every day.", c: ["go", "goes", "going"], a: 1, x: "3인칭 단수 현재형 -es. goes." },
        { q: "I have never ___ sushi.", c: ["eat", "ate", "eaten"], a: 2, x: "현재완료는 have + 과거분사 eaten." },
        { q: "There ___ two stations near here.", c: ["is", "are", "am"], a: 1, x: "two stations는 복수. There are." },
        { q: "He is ___ than his brother. (tall)", c: ["taller", "tallest", "more tall"], a: 0, x: "비교급은 taller + than." },
        { q: "If I ___ you, I would go.", c: ["am", "were", "will be"], a: 1, x: "가정법 과거는 were." },
        { q: "The letter ___ written yesterday.", c: ["is", "was", "were"], a: 1, x: "단수 + 과거 → was written." },
        { q: "___ you help me, please?", c: ["Can", "Are", "Do"], a: 0, x: "Can you ~? = ~해 줄 수 있어요?" },
        { q: "I want ___ a hotel.", c: ["book", "to book", "booking"], a: 1, x: "want to + 동사 원형." }
      ] }
  ];
  L.forEach(function (l) { window.EN_LESSONS.push(l); });
})();
