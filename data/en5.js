// 영어 기초문법 6~10단계. 문제마다 해설(x) 포함.
(function () {
  var L = [
    { id: "e42", title: "6단계 · 현재완료 (have + 과거분사)", intro: "과거에 시작해 지금과 이어지는 일. 경험·완료·계속을 나타냅니다. 3인칭 단수는 has.",
      quiz: [
        { q: "I ___ been to Japan twice.", c: ["have", "has", "had"], a: 0, x: "I에는 have. 경험(~에 가 본 적 있다)은 have been to." },
        { q: "She ___ finished her homework.", c: ["have", "has", "is"], a: 1, x: "she는 3인칭 단수라 has + 과거분사." },
        { q: "Have you ___ sushi?", c: ["eat", "ate", "eaten"], a: 2, x: "eat-ate-eaten. 현재완료에는 과거분사." },
        { q: "I have ___ seen that movie. (한 번도 ~않다)", c: ["ever", "never", "yet"], a: 1, x: "never = 한 번도 ~ 않다. ever는 의문문에서 '한 번이라도'." },
        { q: "He has lived here ___ 2020.", c: ["for", "since", "from"], a: 1, x: "시작 시점에는 since, 기간에는 for." }
      ] },
    { id: "e43", title: "6단계 · 비교급과 최상급", intro: "짧은 형용사는 -er / -est, 긴 형용사는 more / most. 비교 대상에는 than.",
      quiz: [
        { q: "This bag is ___ than that one.", c: ["cheap", "cheaper", "cheapest"], a: 1, x: "둘을 비교할 땐 -er + than." },
        { q: "Tokyo is the ___ city in Japan.", c: ["big", "bigger", "biggest"], a: 2, x: "the + 최상급. big → biggest (자음을 한 번 더)." },
        { q: "This book is ___ interesting than that.", c: ["more", "most", "much"], a: 0, x: "긴 형용사는 more + 원급 + than." },
        { q: "She is as ___ as her sister.", c: ["tall", "taller", "tallest"], a: 0, x: "as ~ as 사이에는 원급." },
        { q: "good의 비교급은?", c: ["gooder", "better", "more good"], a: 1, x: "good - better - best는 불규칙." }
      ] },
    { id: "e44", title: "7단계 · 조동사 can / must / should / may", intro: "동사 앞에 놓여 능력·의무·충고·허락을 나타냅니다. 뒤에는 항상 동사 원형.",
      quiz: [
        { q: "I ___ speak English. (할 수 있다)", c: ["can", "must", "may"], a: 0, x: "can = 능력·가능." },
        { q: "You ___ wear a seatbelt. (의무)", c: ["can", "must", "might"], a: 1, x: "must = ~해야 한다(강한 의무)." },
        { q: "You ___ see a doctor. (충고)", c: ["should", "can", "will"], a: 0, x: "should = ~하는 게 좋다(충고)." },
        { q: "___ I sit here? (허락)", c: ["May", "Must", "Will"], a: 0, x: "May I ~? = ~해도 될까요?" },
        { q: "She can ___ the piano.", c: ["plays", "play", "playing"], a: 1, x: "조동사 뒤에는 동사 원형. 3인칭이어도 -s를 붙이지 않습니다." }
      ] },
    { id: "e45", title: "7단계 · 수동태 (be + 과거분사)", intro: "주어가 행동을 당하는 문장. be동사 + 과거분사, 행한 사람은 by로 나타냅니다.",
      quiz: [
        { q: "The window ___ broken by Tom.", c: ["was", "did", "has"], a: 0, x: "수동태 과거: was/were + 과거분사." },
        { q: "English ___ in many countries.", c: ["speaks", "is spoken", "spoke"], a: 1, x: "영어가 '말해진다' → is spoken." },
        { q: "The book was ___ by a famous writer.", c: ["write", "wrote", "written"], a: 2, x: "write-wrote-written. 수동태는 과거분사." },
        { q: "My bag ___ stolen.", c: ["were", "was", "is"], a: 1, x: "bag은 단수. 도난당했다 → was stolen." },
        { q: "능동 'Mike cooked dinner.'를 수동태로: Dinner ___ by Mike.", c: ["was cooked", "cooked", "is cook"], a: 0, x: "목적어가 주어가 되고 was + 과거분사." }
      ] },
    { id: "e46", title: "8단계 · 관계대명사 who / which / that", intro: "앞의 명사를 설명하는 절을 이어 줍니다. 사람은 who, 사물은 which, 둘 다 that.",
      quiz: [
        { q: "The man ___ lives next door is kind.", c: ["who", "which", "what"], a: 0, x: "사람(the man)을 꾸미면 who." },
        { q: "I lost the bag ___ I bought yesterday.", c: ["who", "which", "whose"], a: 1, x: "사물(the bag)을 꾸미면 which (that도 가능)." },
        { q: "This is the book ___ I told you about.", c: ["that", "who", "where"], a: 0, x: "사람이든 사물이든 that 가능." },
        { q: "A doctor is a person ___ treats patients.", c: ["who", "which", "it"], a: 0, x: "a person이 주어 역할 → who." },
        { q: "That's the girl ___ bag was stolen.", c: ["who", "whose", "which"], a: 1, x: "'~의'는 whose." }
      ] },
    { id: "e47", title: "8단계 · 전치사 in / on / at", intro: "시간과 장소 앞에 쓰는 가장 흔한 전치사. 좁은 지점은 at, 면은 on, 넓은 공간·긴 기간은 in.",
      quiz: [
        { q: "The meeting is ___ 3 o'clock.", c: ["at", "on", "in"], a: 0, x: "정확한 시각에는 at." },
        { q: "My birthday is ___ May.", c: ["at", "on", "in"], a: 2, x: "월·연도·계절은 in." },
        { q: "See you ___ Monday.", c: ["at", "on", "in"], a: 1, x: "요일·날짜는 on." },
        { q: "He lives ___ Seoul.", c: ["at", "on", "in"], a: 2, x: "도시·국가처럼 넓은 곳은 in." },
        { q: "The keys are ___ the table.", c: ["on", "in", "at"], a: 0, x: "표면 위는 on." }
      ] },
    { id: "e48", title: "9단계 · 조건문 if (현실적 조건)", intro: "가능성 있는 조건: If + 현재, will + 동사 원형. if절에는 미래도 현재로 씁니다.",
      quiz: [
        { q: "If it ___ tomorrow, we will stay home.", c: ["rains", "will rain", "rained"], a: 0, x: "if절은 현재형으로: rains." },
        { q: "If you study hard, you ___ pass.", c: ["will", "would", "did"], a: 0, x: "주절은 will + 동사 원형." },
        { q: "If I ___ time, I will call you.", c: ["have", "will have", "had"], a: 0, x: "if절엔 will을 쓰지 않고 현재형." },
        { q: "___ you hurry, you will miss the train.", c: ["If", "Unless", "When"], a: 1, x: "Unless = if ~ not. 서두르지 않으면." },
        { q: "What will you do if you ___ lost?", c: ["get", "will get", "got"], a: 0, x: "if절은 현재형(get)." }
      ] },
    { id: "e49", title: "9단계 · 가정법 과거 (If + 과거, would)", intro: "현실과 다른 상상: If + 과거형, would + 동사 원형. be동사는 주어에 관계없이 were.",
      quiz: [
        { q: "If I ___ rich, I would travel the world.", c: ["am", "were", "will be"], a: 1, x: "가정법에서는 I에도 were." },
        { q: "If I had wings, I ___ fly.", c: ["will", "would", "can"], a: 1, x: "주절은 would + 동사 원형." },
        { q: "I would help you if I ___ the answer.", c: ["know", "knew", "known"], a: 1, x: "if절은 과거형: knew." },
        { q: "'If I were you, I ___ go.' 의미는?", c: ["내가 너라면 갈 거야", "나는 갔다", "너는 가야 해"], a: 0, x: "If I were you = 내가 너라면(충고)." },
        { q: "가정법 과거는 어떤 상황에 쓰나요?", c: ["현재 사실과 반대되는 상상", "확실한 미래", "과거의 습관"], a: 0, x: "현재 사실과 반대되는 상상일 때 쓰는 문법입니다." }
      ] },
    { id: "e50", title: "10단계 · to부정사와 동명사", intro: "동사 뒤에 to 동사가 오는 것과 -ing가 오는 것이 있습니다. want·decide는 to, enjoy·finish는 -ing.",
      quiz: [
        { q: "I want ___ a coffee.", c: ["to have", "having", "have"], a: 0, x: "want 뒤에는 to부정사." },
        { q: "She enjoys ___ music.", c: ["to listen", "listening", "listen"], a: 1, x: "enjoy 뒤에는 동명사(-ing)." },
        { q: "He decided ___ abroad.", c: ["going", "to go", "go"], a: 1, x: "decide + to부정사." },
        { q: "Thank you for ___ me.", c: ["help", "helping", "to help"], a: 1, x: "전치사 뒤에는 동명사." },
        { q: "I'm good at ___ pictures.", c: ["draw", "to draw", "drawing"], a: 2, x: "be good at 뒤는 -ing." }
      ] },
    { id: "e51", title: "10단계 · 간접화법과 명사절 that", intro: "남의 말을 전달할 때 쓰는 문장. say that + 문장, 시제는 한 단계 과거로 맞추는 것이 기본.",
      quiz: [
        { q: "He said, \"I am tired.\" → He said that he ___ tired.", c: ["is", "was", "will be"], a: 1, x: "전달 동사가 과거면 am → was로 시제를 맞춥니다." },
        { q: "I think ___ it will rain.", c: ["that", "what", "who"], a: 0, x: "that 절은 생각·말한 내용을 이끕니다. 생략도 가능." },
        { q: "She asked me ___ I liked coffee.", c: ["that", "if", "what"], a: 1, x: "yes/no 질문을 전달할 땐 if(whether)." },
        { q: "He told me ___ he would come.", c: ["that", "to", "if"], a: 0, x: "told me that ~ = ~라고 내게 말했다." },
        { q: "\"I can swim.\" → She said she ___ swim.", c: ["can", "could", "will"], a: 1, x: "can의 과거형 could로 시제를 맞춥니다." }
      ] }
  ];
  L.forEach(function (l) { window.EN_LESSONS.push(l); });
})();
