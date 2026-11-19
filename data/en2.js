// 영어 기초 문법 2단계. 문제마다 해설(x) 포함.
(function () {
  window.EN_LESSONS.forEach(function (l) { if (!/단계/.test(l.title)) l.title = "1단계 · " + l.title; });
  var L = [
    { id: "e8", title: "2단계 · 소유격과 목적격", intro: "my / your / his / her / our / their는 명사 앞, me / him / her / us / them은 동사 뒤에 옵니다.",
      quiz: [
        { q: "This is ___ book. (나의)", c: ["I", "my", "me"], a: 1, x: "명사(book) 앞에는 소유격 my. I는 주어, me는 목적어 자리입니다." },
        { q: "She loves ___. (그를)", c: ["he", "his", "him"], a: 2, x: "동사(loves) 뒤 목적어 자리에는 목적격 him." },
        { q: "That is ___ car. (그녀의)", c: ["she", "her", "hers"], a: 1, x: "명사 앞은 소유격 her. hers는 '그녀의 것'으로 명사 앞에 쓸 수 없습니다." },
        { q: "Please call ___. (우리를)", c: ["we", "our", "us"], a: 2, x: "call의 목적어이므로 us." },
        { q: "___ names are Tom and Ann. (그들의)", c: ["They", "Their", "Them"], a: 1, x: "names(명사) 앞이니 소유격 Their." }
      ] },
    { id: "e9", title: "2단계 · this / that / these / those", intro: "가까이 있는 것은 this(단수)/these(복수), 멀리 있는 것은 that/those. 복수에는 복수 동사 are.",
      quiz: [
        { q: "___ is my bag. (가까이, 하나)", c: ["This", "That", "These"], a: 0, x: "가깝고 하나이면 This." },
        { q: "___ are my shoes. (가까이, 여러 개)", c: ["This", "These", "Those"], a: 1, x: "가깝고 복수이면 These. 동사도 are." },
        { q: "Look at ___ mountain over there!", c: ["this", "these", "that"], a: 2, x: "over there(저쪽)는 멀리 있으니 that." },
        { q: "___ are expensive. (멀리, 여러 개)", c: ["Those", "That", "This"], a: 0, x: "멀고 복수이면 Those." },
        { q: "Is ___ your phone? (손에 든 것)", c: ["that", "this", "those"], a: 1, x: "가까이 있는 하나는 this." }
      ] },
    { id: "e10", title: "2단계 · There is / There are", intro: "'~이 있다'. 뒤에 오는 명사가 단수면 There is, 복수면 There are.",
      quiz: [
        { q: "There ___ a hotel near here.", c: ["is", "are", "am"], a: 0, x: "a hotel은 단수라서 There is." },
        { q: "There ___ two stations.", c: ["is", "are", "be"], a: 1, x: "two stations는 복수라서 There are." },
        { q: "___ there a bank nearby?", c: ["Is", "Are", "Do"], a: 0, x: "의문문은 be동사를 앞으로: Is there ~? 단수라서 Is." },
        { q: "There ___ any water.", c: ["isn't", "aren't", "don't"], a: 0, x: "water는 셀 수 없는 명사라 단수 취급. 부정은 isn't." },
        { q: "There ___ many people here.", c: ["is", "are", "was"], a: 1, x: "many people은 복수이므로 are." }
      ] },
    { id: "e11", title: "2단계 · 의문사 what / where / when / who / why / how", intro: "여행에서 가장 쓸모 있는 여섯 단어. 뜻에 맞는 의문사를 고르는 연습입니다.",
      quiz: [
        { q: "___ is the station? — It's over there.", c: ["Where", "When", "Who"], a: 0, x: "장소를 묻는 말은 Where." },
        { q: "___ is your name? — I'm Min.", c: ["Where", "What", "When"], a: 1, x: "이름·사물을 묻는 말은 What." },
        { q: "___ does the train leave? — At nine.", c: ["Who", "Why", "When"], a: 2, x: "시간을 묻는 말은 When." },
        { q: "___ is that man? — He's my teacher.", c: ["Who", "How", "Where"], a: 0, x: "사람을 묻는 말은 Who." },
        { q: "___ much is this? — 1,000 yen.", c: ["What", "How", "Why"], a: 1, x: "How much = 얼마예요? 가격을 물을 때 쓰는 가장 중요한 표현." }
      ] },
    { id: "e12", title: "2단계 · 전치사 in / on / at", intro: "시간·장소 모두 작은 것은 at, 중간은 on, 큰 것은 in. at 7:00, on Monday, in July.",
      quiz: [
        { q: "The train leaves ___ 7:30.", c: ["in", "on", "at"], a: 2, x: "시각 앞에는 at." },
        { q: "My birthday is ___ May.", c: ["in", "on", "at"], a: 0, x: "달·계절·해 앞에는 in. in May, in summer, in 2026." },
        { q: "See you ___ Monday.", c: ["in", "on", "at"], a: 1, x: "요일·날짜 앞에는 on. on Monday, on May 5." },
        { q: "She lives ___ Seoul.", c: ["in", "on", "at"], a: 0, x: "도시·나라처럼 큰 장소 앞에는 in." },
        { q: "I'll wait ___ the station.", c: ["in", "at", "of"], a: 1, x: "특정 지점(역)에는 at." }
      ] },
    { id: "e13", title: "2단계 · can / can't", intro: "can + 동사원형 = ~할 수 있다. 모든 주어에 같은 모양이고, can 뒤 동사에는 -s를 붙이지 않습니다.",
      quiz: [
        { q: "I ___ swim.", c: ["can", "cans", "am can"], a: 0, x: "can은 모든 주어에 그대로. I can swim." },
        { q: "She can ___ English.", c: ["speaks", "speak", "speaking"], a: 1, x: "can 뒤에는 동사 원형. speaks는 틀립니다." },
        { q: "He ___ drive. (할 수 없다)", c: ["don't", "can't", "isn't"], a: 1, x: "can의 부정은 can't (cannot)." },
        { q: "___ you help me?", c: ["Do", "Are", "Can"], a: 2, x: "Can you ~? = ~해 줄 수 있어요? 정중한 부탁." },
        { q: "Can I ___ here?", c: ["sit", "sits", "sitting"], a: 0, x: "Can I + 동사 원형. 허락을 구할 때 씁니다." }
      ] },
    { id: "e14", title: "2단계 · 명령문과 Let's", intro: "명령문은 주어 없이 동사 원형으로 시작. 부탁은 please, 부정은 Don't, 함께 하자는 Let's.",
      quiz: [
        { q: "___ the door, please.", c: ["Open", "Opens", "Opening"], a: 0, x: "명령문은 동사 원형으로 시작. Open the door." },
        { q: "___ run in the station.", c: ["Not", "Don't", "No"], a: 1, x: "부정 명령은 Don't + 동사 원형." },
        { q: "___ go to the park!", c: ["Let's", "Lets", "Let"], a: 0, x: "Let's = Let us. ~하자. 뒤에는 동사 원형." },
        { q: "___ careful!", c: ["Be", "Are", "Is"], a: 0, x: "be동사 명령문은 원형 Be. Be careful!" },
        { q: "Please ___ me your passport.", c: ["show", "shows", "showing"], a: 0, x: "Please 뒤도 동사 원형. Please show me ~." }
      ] }
  ];
  L.forEach(function (l) { window.EN_LESSONS.push(l); });
})();
