// 영어 문법 추가: 기존 레슨마다 문제 5개 추가 + 새 레슨. 문제마다 해설(x) 포함.
(function () {
  var EXTRA = {
    e1: [
      { q: "You ___ my friend.", c: ["am", "is", "are"], a: 2, x: "you에는 단수든 복수든 항상 are." },
      { q: "He ___ not a doctor.", c: ["am", "is", "are"], a: 1, x: "he에는 is. is not = isn't." },
      { q: "___ you from Japan?", c: ["Am", "Is", "Are"], a: 2, x: "의문문은 be동사를 앞으로. you에는 Are." },
      { q: "I ___ not hungry. (줄임말)", c: ["amn't", "'m", "isn't"], a: 1, x: "I am not = I'm not. amn't는 쓰지 않습니다." },
      { q: "The shops ___ open.", c: ["is", "are", "am"], a: 1, x: "The shops는 복수라서 are." }
    ],
    e2: [
      { q: "She is ___ engineer.", c: ["a", "an"], a: 1, x: "engineer는 모음 소리 [e]로 시작해서 an." },
      { q: "I need ___ ticket.", c: ["a", "an"], a: 0, x: "ticket은 자음 소리로 시작해서 a." },
      { q: "He has ___ egg.", c: ["a", "an"], a: 1, x: "egg는 모음 소리로 시작해서 an." },
      { q: "That is ___ one-way street.", c: ["a", "an"], a: 0, x: "one은 [wʌn] 자음 소리 [w]로 시작해서 a." },
      { q: "I'm waiting for ___ honest man.", c: ["a", "an"], a: 1, x: "honest의 h는 묵음이라 모음 소리로 시작. an." }
    ],
    e3: [
      { q: "one watch → two ___", c: ["watchs", "watches", "watchies"], a: 1, x: "ch로 끝나면 -es. watches." },
      { q: "one man → two ___", c: ["mans", "men", "manes"], a: 1, x: "man의 복수는 불규칙 men." },
      { q: "one tooth → two ___", c: ["tooths", "teeth", "toothes"], a: 1, x: "tooth의 복수는 불규칙 teeth." },
      { q: "one day → two ___", c: ["days", "daies", "dayes"], a: 0, x: "모음+y는 그냥 -s. days." },
      { q: "one sheep → two ___", c: ["sheeps", "sheep", "sheepes"], a: 1, x: "sheep은 단수와 복수가 같습니다." }
    ],
    e4: [
      { q: "My brother ___ in Osaka.", c: ["live", "lives", "living"], a: 1, x: "my brother = he. 동사에 -s: lives." },
      { q: "She ___ her homework every day.", c: ["do", "does", "dos"], a: 1, x: "do는 3인칭 단수에서 does." },
      { q: "He ___ English very well.", c: ["speak", "speaks", "speaking"], a: 1, x: "he는 3인칭 단수라 speaks." },
      { q: "The shop ___ at 9.", c: ["open", "opens", "opening"], a: 1, x: "the shop = it. 동사에 -s: opens." },
      { q: "He ___ studies hard. (study)", c: ["study", "studys", "studies"], a: 2, x: "자음+y로 끝나는 동사는 y를 i로 바꾸고 -es: studies." }
    ],
    e5: [
      { q: "She ___ speak French.", c: ["don't", "doesn't", "isn't"], a: 1, x: "she에는 doesn't + 동사 원형." },
      { q: "___ she work here?", c: ["Do", "Does", "Is"], a: 1, x: "she에는 Does로 시작하는 의문문." },
      { q: "Do you ___ coffee?", c: ["like", "likes", "liking"], a: 0, x: "Do 뒤에는 동사 원형 like." },
      { q: "We ___ have time.", c: ["don't", "doesn't", "aren't"], a: 0, x: "we에는 don't." },
      { q: "What ___ he do?", c: ["do", "does", "is"], a: 1, x: "he에는 does. What does he do?" }
    ],
    e6: [
      { q: "What ___ you doing?", c: ["is", "are", "am"], a: 1, x: "you에는 are. What are you doing?" },
      { q: "I'm ___ a book.", c: ["read", "reading", "reads"], a: 1, x: "am + 동사-ing. reading." },
      { q: "It is ___ now.", c: ["rain", "raining", "rains"], a: 1, x: "is + 동사-ing. It is raining." },
      { q: "They ___ not working today.", c: ["is", "are", "am"], a: 1, x: "they에는 are. are not = aren't." },
      { q: "She is ___ a letter. (write)", c: ["writeing", "writing", "writting"], a: 1, x: "e로 끝나는 동사는 e를 빼고 -ing: writing." }
    ],
    e7: [
      { q: "He ___ to Tokyo last month.", c: ["go", "goes", "went"], a: 2, x: "go의 과거는 went." },
      { q: "I ___ a good movie yesterday. (see)", c: ["see", "saw", "seen"], a: 1, x: "see의 과거는 saw." },
      { q: "___ you eat breakfast?", c: ["Did", "Do", "Were"], a: 0, x: "과거 의문문은 Did + 동사 원형." },
      { q: "She ___ her keys. (lose)", c: ["losed", "lost", "lose"], a: 1, x: "lose의 과거는 불규칙 lost." },
      { q: "They ___ here yesterday. (be)", c: ["was", "were", "are"], a: 1, x: "they의 과거는 were." }
    ],
    e8: [
      { q: "He gave ___ a gift. (나에게)", c: ["I", "my", "me"], a: 2, x: "동사 뒤 목적어 자리는 me." },
      { q: "This is ___ phone. (너의)", c: ["you", "your", "yours"], a: 1, x: "명사 앞은 소유격 your." },
      { q: "The bag is ___. (내 것)", c: ["my", "mine", "me"], a: 1, x: "mine은 '내 것'. 명사 없이 씁니다." },
      { q: "Tom and ___ are friends. (나)", c: ["me", "I", "my"], a: 1, x: "주어 자리에는 I." },
      { q: "I like ___. (그들을)", c: ["they", "their", "them"], a: 2, x: "목적어 자리에는 them." }
    ],
    e9: [
      { q: "___ is my seat. (가까이)", c: ["This", "Those", "These"], a: 0, x: "가까운 단수는 This." },
      { q: "Are ___ your keys? (멀리, 여러 개)", c: ["that", "this", "those"], a: 2, x: "멀고 복수는 those." },
      { q: "Is ___ a bank? (저기)", c: ["this", "that", "these"], a: 1, x: "멀리 있는 단수는 that." },
      { q: "___ shoes are nice. (가까이)", c: ["This", "That", "These"], a: 2, x: "shoes가 복수라서 These." },
      { q: "Look at ___ birds over there!", c: ["that", "this", "those"], a: 2, x: "멀리 있는 복수는 those." }
    ],
    e10: [
      { q: "There ___ a cat on the sofa.", c: ["is", "are", "have"], a: 0, x: "a cat은 단수라서 There is." },
      { q: "___ there any milk?", c: ["Is", "Are", "Do"], a: 0, x: "milk는 셀 수 없는 명사라 Is there any ~?" },
      { q: "There ___ no seats.", c: ["is", "are", "be"], a: 1, x: "seats는 복수라서 There are." },
      { q: "There ___ a problem. (과거)", c: ["is", "was", "were"], a: 1, x: "단수 과거는 There was." },
      { q: "How many rooms ___ there?", c: ["is", "are", "do"], a: 1, x: "rooms는 복수라서 are there?" }
    ],
    e11: [
      { q: "___ are you late? — The train stopped.", c: ["Who", "Why", "Where"], a: 1, x: "이유를 묻는 말은 Why." },
      { q: "___ old are you?", c: ["What", "How", "Who"], a: 1, x: "나이는 How old." },
      { q: "___ do you go to work? — By bus.", c: ["How", "Where", "Why"], a: 0, x: "방법·수단은 How." },
      { q: "___ bag is this? — It's mine.", c: ["Who", "Whose", "What"], a: 1, x: "누구의 것인지 묻는 말은 Whose." },
      { q: "___ is your birthday? — May 5.", c: ["Where", "When", "Who"], a: 1, x: "때를 묻는 말은 When." }
    ],
    e12: [
      { q: "The book is ___ the table.", c: ["in", "on", "at"], a: 1, x: "표면 위에 있으면 on." },
      { q: "She is ___ home.", c: ["in", "on", "at"], a: 2, x: "집에 있다는 at home." },
      { q: "I'll see you ___ the morning.", c: ["in", "on", "at"], a: 0, x: "아침·오후·저녁에는 in the morning." },
      { q: "He was born ___ 1998.", c: ["in", "on", "at"], a: 0, x: "연도 앞은 in." },
      { q: "We meet ___ night.", c: ["in", "on", "at"], a: 2, x: "at night는 굳은 표현." }
    ],
    e13: [
      { q: "___ I use your phone?", c: ["Can", "Do", "Am"], a: 0, x: "Can I ~? = ~해도 될까요?" },
      { q: "She ___ play the piano.", c: ["can", "cans", "can to"], a: 0, x: "can은 모든 주어에 같은 모양." },
      { q: "I ___ speak Chinese. (못한다)", c: ["can't", "don't can", "can"], a: 0, x: "can't = cannot." },
      { q: "He can ___ fast.", c: ["runs", "run", "running"], a: 1, x: "can 뒤에는 동사 원형." },
      { q: "Yes, I ___. (Can you swim?)", c: ["can", "do", "am"], a: 0, x: "can으로 물었으니 can으로 대답." }
    ],
    e14: [
      { q: "___ late, please.", c: ["Not", "Don't be", "Aren't"], a: 1, x: "be동사 부정 명령은 Don't be." },
      { q: "___ have lunch together.", c: ["Let's", "Let", "Lets"], a: 0, x: "Let's + 동사 원형." },
      { q: "___ your seat belt.", c: ["Fasten", "Fastens", "Fastening"], a: 0, x: "명령문은 동사 원형." },
      { q: "Please ___ quiet.", c: ["be", "are", "is"], a: 0, x: "Please be quiet." },
      { q: "___ forget your passport.", c: ["Not", "Don't", "No"], a: 1, x: "일반동사 부정 명령은 Don't." }
    ],
    e15: [
      { q: "Tomorrow, I ___ visit my aunt.", c: ["am going to", "go to", "went to"], a: 0, x: "이미 정한 계획은 be going to." },
      { q: "___ you help me? (부탁)", c: ["Will", "Do", "Are"], a: 0, x: "Will you ~? 는 부탁하는 정중한 표현." },
      { q: "I think it ___ be sunny.", c: ["will", "is", "does"], a: 0, x: "생각에 따른 예측은 will." },
      { q: "They ___ going to leave soon.", c: ["is", "are", "will"], a: 1, x: "they에는 are going to." },
      { q: "What ___ you do tomorrow?", c: ["will", "did", "are"], a: 0, x: "미래 질문 What will you do?" }
    ],
    e16: [
      { q: "This road is ___ than that one. (long)", c: ["longer", "more long", "longest"], a: 0, x: "짧은 형용사는 -er." },
      { q: "She is the ___ person here. (kind)", c: ["kinder", "kindest", "most kind"], a: 1, x: "the + kindest." },
      { q: "The train is ___ than the bus. (fast)", c: ["faster", "more fast", "fastest"], a: 0, x: "fast → faster." },
      { q: "This is the ___ expensive hotel.", c: ["more", "most", "much"], a: 1, x: "긴 형용사 최상급은 the most + 원급." },
      { q: "I'm as tall ___ my brother.", c: ["as", "than", "that"], a: 0, x: "동등 비교는 as ~ as." }
    ],
    e17: [
      { q: "Would you like ___ coffee?", c: ["some", "any"], a: 0, x: "권유하는 의문문에는 some." },
      { q: "I didn't buy ___ souvenirs.", c: ["some", "any"], a: 1, x: "부정문에는 any." },
      { q: "She has ___ good ideas.", c: ["some", "any"], a: 0, x: "긍정문에는 some." },
      { q: "Is there ___ room left?", c: ["some", "any"], a: 1, x: "의문문에는 any." },
      { q: "I don't have ___ questions.", c: ["some", "any"], a: 1, x: "부정문 → any." }
    ],
    e18: [
      { q: "I don't have ___ money.", c: ["many", "much", "a few"], a: 1, x: "money는 셀 수 없으니 much." },
      { q: "How ___ bags do you have?", c: ["much", "many", "little"], a: 1, x: "bags는 셀 수 있으니 many." },
      { q: "There is ___ water in the bottle. (거의 없다)", c: ["few", "little", "many"], a: 1, x: "셀 수 없는 명사에는 little(거의 없는)." },
      { q: "She has ___ friends here. (몇몇)", c: ["a few", "a little", "much"], a: 0, x: "셀 수 있는 명사에는 a few." },
      { q: "We have a ___ of time.", c: ["lot", "many", "much"], a: 0, x: "a lot of = 많은." }
    ],
    e19: [
      { q: "She ___ gets up early.", c: ["always", "always is", "is always"], a: 0, x: "일반동사 앞에 always." },
      { q: "He is ___ happy. (자주)", c: ["often", "oftenly", "ofter"], a: 0, x: "be동사 뒤에 often." },
      { q: "I ___ eat breakfast. (거의 안)", c: ["hardly ever", "ever hardly", "never not"], a: 0, x: "hardly ever = 거의 ~하지 않는다." },
      { q: "How ___ do you exercise?", c: ["often", "much", "long"], a: 0, x: "빈도는 How often." },
      { q: "We ___ go there. (한 번도)", c: ["never", "not never", "ever"], a: 0, x: "never 자체가 부정이라 not은 쓰지 않습니다." }
    ],
    e20: [
      { q: "They ___ a big house.", c: ["has", "have", "haves"], a: 1, x: "they에는 have." },
      { q: "Does she ___ a sister?", c: ["have", "has", "having"], a: 0, x: "Does 뒤는 동사 원형 have." },
      { q: "I ___ have any cash.", c: ["don't", "doesn't", "hasn't"], a: 0, x: "I에는 don't have." },
      { q: "He ___ a cold. (감기에 걸렸다)", c: ["have", "has", "is"], a: 1, x: "he에는 has. have a cold." },
      { q: "We ___ lunch at noon.", c: ["have", "has", "are"], a: 0, x: "식사를 하다 = have lunch." }
    ],
    e21: [
      { q: "You ___ wear a seat belt. (의무)", c: ["must", "musts", "should to"], a: 0, x: "법·규칙의 의무는 must." },
      { q: "___ I open the window? (제안)", c: ["Should", "Must", "Do"], a: 0, x: "Should I ~? = ~할까요?" },
      { q: "You ___ be late. (하면 안 된다)", c: ["mustn't", "don't have", "aren't"], a: 0, x: "금지는 mustn't." },
      { q: "I ___ go now. (가야 한다)", c: ["have to", "has to", "must to"], a: 0, x: "I에는 have to." },
      { q: "He ___ study more. (충고)", c: ["should", "shoulds", "musts"], a: 0, x: "충고는 should + 동사 원형." }
    ],
    e22: [
      { q: "I have ___ seen that movie.", c: ["never", "ago", "yesterday"], a: 0, x: "현재완료와 never는 함께 씁니다." },
      { q: "She ___ gone home.", c: ["have", "has", "is"], a: 1, x: "she에는 has gone." },
      { q: "We have known him ___ ten years.", c: ["for", "since", "ago"], a: 0, x: "ten years는 기간이므로 for." },
      { q: "Have you ___ been to Korea?", c: ["ever", "never", "yet"], a: 0, x: "경험을 묻는 Have you ever ~?" },
      { q: "I have ___ finished my work.", c: ["already", "yesterday", "last"], a: 0, x: "완료를 나타내는 already." }
    ],
    e23: [
      { q: "The window ___ opened by Tom.", c: ["was", "were", "did"], a: 0, x: "단수 과거 수동태는 was + 과거분사." },
      { q: "English is ___ in many countries.", c: ["speak", "spoke", "spoken"], a: 2, x: "speak의 과거분사는 spoken." },
      { q: "The room ___ cleaned yesterday.", c: ["is", "was", "were"], a: 1, x: "과거이고 단수이니 was." },
      { q: "This car was made ___ Japan.", c: ["in", "by", "at"], a: 0, x: "생산지는 made in." },
      { q: "The song was written ___ her.", c: ["by", "from", "in"], a: 0, x: "행위자는 by." }
    ],
    e24: [
      { q: "She wants ___ a doctor.", c: ["be", "to be", "being"], a: 1, x: "want to + 동사 원형." },
      { q: "I'm happy ___ you.", c: ["to see", "see", "seeing"], a: 0, x: "감정 + to 동사 원형(~해서)." },
      { q: "He needs ___ more water.", c: ["drink", "to drink", "drinking"], a: 1, x: "need to + 동사 원형." },
      { q: "It's time ___ go.", c: ["to", "for", "at"], a: 0, x: "It's time to + 동사 원형." },
      { q: "She learned ___ swim.", c: ["to", "for", "at"], a: 0, x: "learn to + 동사 원형." }
    ],
    e25: [
      { q: "He is good at ___.", c: ["cook", "cooking", "to cook"], a: 1, x: "전치사 at 뒤에는 -ing." },
      { q: "I like ___ movies.", c: ["watching", "watch", "watched"], a: 0, x: "like 뒤에는 -ing 또는 to." },
      { q: "She stopped ___.", c: ["smoking", "smoke", "smoked"], a: 0, x: "stop + -ing = ~하는 것을 그만두다." },
      { q: "Thanks for ___ me.", c: ["calling", "call", "to call"], a: 0, x: "전치사 for 뒤에는 -ing." },
      { q: "We avoid ___ late.", c: ["to be", "being", "be"], a: 1, x: "avoid 뒤에는 -ing." }
    ],
    e26: [
      { q: "I was hungry, ___ I ate something.", c: ["so", "because", "but"], a: 0, x: "배고팠다 → 그래서 먹었다." },
      { q: "He is rich ___ not happy.", c: ["but", "so", "because"], a: 0, x: "대조에는 but." },
      { q: "I'll go ___ it rains.", c: ["even if", "so", "because"], a: 0, x: "even if = 비가 오더라도." },
      { q: "She was late ___ the bus was late.", c: ["because", "so", "but"], a: 0, x: "이유는 because." },
      { q: "Do you want tea ___ coffee?", c: ["or", "and", "but"], a: 0, x: "선택을 물을 때는 or." }
    ],
    e27: [
      { q: "I ___ watching TV when he came.", c: ["was", "were", "did"], a: 0, x: "I의 과거진행은 was + -ing." },
      { q: "They were ___ when I arrived.", c: ["eat", "eating", "ate"], a: 1, x: "were + -ing." },
      { q: "What were you ___ at nine?", c: ["do", "doing", "did"], a: 1, x: "were you + -ing." },
      { q: "She ___ cooking while he was reading.", c: ["was", "were", "is"], a: 0, x: "she의 과거진행은 was." },
      { q: "It was raining ___ we left.", c: ["when", "while", "because"], a: 0, x: "시점을 나타내는 when." }
    ],
    e28: [
      { q: "If you ___ late, call me.", c: ["are", "will be", "were"], a: 0, x: "if절에는 현재형 are." },
      { q: "She will come if he ___ her.", c: ["invites", "will invite", "invited"], a: 0, x: "조건절은 현재형 invites." },
      { q: "If it is sunny, we ___ go out.", c: ["will", "would", "did"], a: 0, x: "결과절은 will + 동사 원형." },
      { q: "___ you hurry, you'll miss the train.", c: ["If", "Unless", "Because"], a: 1, x: "Unless you hurry = If you don't hurry." },
      { q: "If I see him, I ___ tell him.", c: ["will", "would", "am"], a: 0, x: "현재 조건 → will." }
    ],
    e29: [
      { q: "The woman ___ is wearing a hat is my aunt.", c: ["who", "which", "what"], a: 0, x: "사람이 주어 역할이면 who." },
      { q: "This is the hotel ___ I stayed.", c: ["where", "who", "which is"], a: 0, x: "장소를 꾸미면 where." },
      { q: "I lost the bag ___ my mom gave me.", c: ["that", "who", "where"], a: 0, x: "사물에는 that(which)." },
      { q: "He is a man ___ everyone likes.", c: ["whom", "which", "where"], a: 0, x: "목적어 역할인 사람은 whom(who, that도 가능)." },
      { q: "The book ___ is on the desk is mine.", c: ["which", "who", "whose"], a: 0, x: "사물은 which." }
    ],
    e30: [
      { q: "She said she ___ tired. ('I am tired.')", c: ["is", "was", "were"], a: 1, x: "전달동사가 과거면 am → was." },
      { q: "He asked me where I ___.", c: ["live", "lived", "lives"], a: 1, x: "시제가 한 칸 과거: live → lived." },
      { q: "Do you know who ___ is?", c: ["she", "is she", "does she"], a: 0, x: "간접의문문은 의문사 + 주어 + 동사." },
      { q: "I wonder ___ it will rain.", c: ["if", "that", "what"], a: 0, x: "예/아니오 의문을 전할 때는 if." },
      { q: "He told me ___ to be late.", c: ["not", "no", "don't"], a: 0, x: "told + 사람 + not to + 동사 원형." }
    ],
    e31: [
      { q: "If I ___ a bird, I would fly.", c: ["am", "were", "will be"], a: 1, x: "가정법 과거는 were." },
      { q: "I would help you if I ___ time.", c: ["have", "had", "will have"], a: 1, x: "if절은 과거형." },
      { q: "If she ___ here, she would know.", c: ["were", "is", "will be"], a: 0, x: "she에도 were." },
      { q: "What ___ you do if you won?", c: ["will", "would", "do"], a: 1, x: "결과절은 would." },
      { q: "I wish I ___ taller.", c: ["am", "were", "will be"], a: 1, x: "I wish + 과거형(were)은 현재 사실의 반대." }
    ],
    e32: [
      { q: "The game was ___.", c: ["exciting", "excited", "excite"], a: 0, x: "경기가 흥분을 일으키므로 exciting." },
      { q: "I am ___ of spiders.", c: ["frightening", "frightened", "fright"], a: 1, x: "사람이 무서움을 느끼므로 frightened." },
      { q: "She looks ___.", c: ["tired", "tiring", "tire"], a: 0, x: "피곤함을 느끼는 사람은 tired." },
      { q: "It was a ___ movie.", c: ["boring", "bored", "bore"], a: 0, x: "영화가 지루하게 만드므로 boring." },
      { q: "He was ___ by the result.", c: ["disappointing", "disappointed", "disappoint"], a: 1, x: "실망한 사람은 disappointed." }
    ],
    e33: [
      { q: "She ___ been to Paris twice.", c: ["have", "has", "is"], a: 1, x: "she에는 has been." },
      { q: "If I ___ rich, I would buy a house.", c: ["am", "were", "will be"], a: 1, x: "가정법 과거 were." },
      { q: "The man ___ lives here is a doctor.", c: ["who", "which", "where"], a: 0, x: "사람이면 who." },
      { q: "I don't have ___ money.", c: ["some", "any", "many"], a: 1, x: "부정문 any, 셀 수 없는 money." },
      { q: "He ___ to school every day. (go)", c: ["go", "goes", "going"], a: 1, x: "3인칭 단수 goes." }
    ]
  };
  window.EN_LESSONS.forEach(function (l) { if (EXTRA[l.id]) l.quiz = l.quiz.concat(EXTRA[l.id]); });

  function add(id, title, intro, quiz) { window.EN_LESSONS.push({ id: id, title: title, intro: intro, quiz: quiz }); }
  add("e34", "1단계 · 인칭대명사", "I / you / he / she / it / we / they. 누구를 가리키는지 주어를 고르는 연습입니다.", [
    { q: "My sister is a nurse. ___ works at a hospital.", c: ["He", "She", "It"], a: 1, x: "my sister는 여자 한 명이므로 she." },
    { q: "Tom and I are friends. ___ play soccer.", c: ["We", "They", "You"], a: 0, x: "나를 포함한 복수는 we." },
    { q: "The dog is small. ___ is cute.", c: ["He", "It", "They"], a: 1, x: "동물이나 사물은 보통 it." },
    { q: "Ann and Bob are students. ___ study hard.", c: ["We", "They", "She"], a: 1, x: "둘을 가리키는 제3자 복수는 they." },
    { q: "(상대에게) ___ are very kind.", c: ["I", "You", "He"], a: 1, x: "상대에게 하는 말은 you." },
    { q: "My father is tall. ___ plays basketball.", c: ["He", "She", "It"], a: 0, x: "아버지는 남자 한 명이므로 he." },
    { q: "The book is old. ___ is very interesting.", c: ["He", "She", "It"], a: 2, x: "사물은 it." },
    { q: "Lisa and I are late. ___ must hurry.", c: ["They", "We", "You"], a: 1, x: "화자를 포함한 복수는 we." },
    { q: "I have two cats. ___ are black.", c: ["It", "They", "We"], a: 1, x: "cats는 복수이니 they." },
    { q: "Mr. Kim is my teacher. ___ is from Busan.", c: ["He", "She", "They"], a: 0, x: "Mr. Kim은 남자 한 명." }
  ]);
  add("e35", "1단계 · 정관사 the", "이미 말한 것, 하나뿐인 것에는 the. 처음 말하는 것에는 a / an.", [
    { q: "I saw a dog. ___ dog was big.", c: ["A", "The", "An"], a: 1, x: "앞에서 말한 그 개이므로 The." },
    { q: "___ sun is hot.", c: ["A", "The", "An"], a: 1, x: "해는 하나뿐이라 the." },
    { q: "Please close ___ door.", c: ["a", "the", "an"], a: 1, x: "서로 아는 그 문이니 the." },
    { q: "I need ___ pen. Do you have one?", c: ["a", "the", "an"], a: 0, x: "특정하지 않은 펜 하나이므로 a." },
    { q: "She plays ___ piano.", c: ["a", "the", "an"], a: 1, x: "악기 이름 앞에는 the." },
    { q: "I'm ___ student.", c: ["a", "the", "an"], a: 0, x: "직업·신분은 a/an." },
    { q: "He is ___ best player.", c: ["a", "the", "an"], a: 1, x: "최상급 앞에는 the." },
    { q: "We went to ___ same school.", c: ["a", "the", "an"], a: 1, x: "same 앞에는 the." },
    { q: "She has ___ umbrella.", c: ["a", "the", "an"], a: 2, x: "umbrella는 모음 소리라 an." },
    { q: "Look at ___ moon!", c: ["a", "the", "an"], a: 1, x: "달도 하나뿐이라 the." }
  ]);
  add("e36", "1단계 · 예/아니오 질문과 대답", "be동사와 do 질문에 짧게 대답하는 법. Yes, I am. / No, I don't.", [
    { q: "Are you tired? — Yes, I ___.", c: ["am", "are", "do"], a: 0, x: "Are you ~?에는 Yes, I am." },
    { q: "Do you like tea? — No, I ___.", c: ["don't", "am not", "doesn't"], a: 0, x: "Do you ~?에는 No, I don't." },
    { q: "Is she a teacher? — Yes, she ___.", c: ["is", "does", "are"], a: 0, x: "Is she ~?에는 Yes, she is." },
    { q: "Does he work here? — No, he ___.", c: ["doesn't", "isn't", "don't"], a: 0, x: "Does he ~?에는 No, he doesn't." },
    { q: "Are they students? — No, they ___.", c: ["aren't", "don't", "isn't"], a: 0, x: "Are they ~?에는 No, they aren't." },
    { q: "Can you swim? — Yes, I ___.", c: ["can", "do", "am"], a: 0, x: "Can으로 물으면 can으로 대답." },
    { q: "Is it cold? — Yes, it ___.", c: ["is", "does", "are"], a: 0, x: "Is it ~?에는 Yes, it is." },
    { q: "Did you go? — No, I ___.", c: ["didn't", "don't", "wasn't"], a: 0, x: "Did you ~?에는 No, I didn't." },
    { q: "Do they live here? — Yes, they ___.", c: ["do", "are", "does"], a: 0, x: "Do they ~?에는 Yes, they do." },
    { q: "Am I late? — No, you ___.", c: ["aren't", "am not", "isn't"], a: 0, x: "Am I ~?에는 you로 받아 No, you aren't." }
  ]);
  add("e37", "2단계 · 장소 전치사", "in front of / behind / next to / between / under / near. 길을 설명할 때 필수입니다.", [
    { q: "The station is ___ the bank and the hotel.", c: ["between", "behind", "under"], a: 0, x: "둘 사이는 between." },
    { q: "The cat is ___ the table. (아래)", c: ["on", "under", "next"], a: 1, x: "아래는 under." },
    { q: "The hotel is ___ the park. (옆)", c: ["next to", "between", "in"], a: 0, x: "바로 옆은 next to." },
    { q: "He is standing ___ the door. (앞)", c: ["in front of", "behind", "between"], a: 0, x: "앞은 in front of." },
    { q: "My house is ___ the school. (가까이)", c: ["near", "on", "into"], a: 0, x: "가까이는 near." },
    { q: "The bag is ___ the chair. (뒤)", c: ["behind", "between", "under"], a: 0, x: "뒤는 behind." },
    { q: "There is a bridge ___ the river.", c: ["over", "next", "in front"], a: 0, x: "강 위로 가로지르는 다리는 over." },
    { q: "She is sitting ___ me. (맞은편)", c: ["opposite", "behind", "in"], a: 0, x: "맞은편은 opposite." },
    { q: "Turn left ___ the corner.", c: ["at", "in", "between"], a: 0, x: "모퉁이에서는 at the corner." },
    { q: "The shop is ___ the street. (길 건너)", c: ["across", "under", "behind"], a: 0, x: "길 건너는 across." }
  ]);
  add("e38", "2단계 · 시간 표현", "yesterday / today / tomorrow / last / next / ago. 시제와 짝을 맞춥니다.", [
    { q: "I went to Japan three years ___.", c: ["ago", "before", "last"], a: 0, x: "기간 + ago = ~전에." },
    { q: "She will come ___ week.", c: ["next", "last", "ago"], a: 0, x: "미래는 next week." },
    { q: "We met ___ night.", c: ["last", "next", "tomorrow"], a: 0, x: "과거는 last night." },
    { q: "I'm busy ___. (오늘)", c: ["today", "yesterday", "ago"], a: 0, x: "현재는 today." },
    { q: "He called me ___. (어제)", c: ["yesterday", "tomorrow", "next"], a: 0, x: "과거는 yesterday." },
    { q: "See you ___. (내일)", c: ["tomorrow", "yesterday", "last"], a: 0, x: "미래는 tomorrow." },
    { q: "It's 3 o'clock. The meeting starts ___ 5.", c: ["at", "on", "in"], a: 0, x: "시각 앞에는 at." },
    { q: "We stayed there ___ two weeks.", c: ["for", "since", "ago"], a: 0, x: "기간 앞에는 for." },
    { q: "I have lived here ___ 2020.", c: ["since", "for", "ago"], a: 0, x: "시작 시점 앞에는 since." },
    { q: "He gets up ___ 6 every day.", c: ["at", "in", "on"], a: 0, x: "시각 앞에는 at." }
  ]);
  add("e39", "3단계 · 부사와 형용사", "형용사는 명사를 꾸미고, 부사는 동사를 꾸밉니다. 대부분 형용사 + -ly.", [
    { q: "She is a ___ driver. (careful)", c: ["careful", "carefully"], a: 0, x: "명사 driver를 꾸미는 건 형용사." },
    { q: "She drives ___.", c: ["careful", "carefully"], a: 1, x: "동사 drives를 꾸미는 건 부사 carefully." },
    { q: "He speaks ___. (slow)", c: ["slow", "slowly"], a: 1, x: "동사를 꾸미므로 부사." },
    { q: "This is ___ easy question.", c: ["a", "an"], a: 1, x: "easy는 모음 소리로 시작해서 an." },
    { q: "He runs ___. (fast)", c: ["fast", "fastly"], a: 0, x: "fast는 형용사와 부사의 모양이 같습니다." },
    { q: "She works ___. (hard)", c: ["hard", "hardly"], a: 0, x: "hard는 '열심히'. hardly는 '거의 ~않는'으로 뜻이 달라요." },
    { q: "The movie was ___. (good)", c: ["good", "well"], a: 0, x: "be동사 뒤 보어는 형용사 good." },
    { q: "He plays the piano ___.", c: ["good", "well"], a: 1, x: "동사를 꾸미는 good의 부사형은 well." },
    { q: "It rained ___. (heavy)", c: ["heavy", "heavily"], a: 1, x: "동사 rained를 꾸미므로 heavily." },
    { q: "You look ___. (happy)", c: ["happy", "happily"], a: 0, x: "look 뒤에는 형용사." }
  ]);
  add("e40", "4단계 · 현재완료 vs 과거", "시점이 분명하면 과거, 지금까지의 경험·결과면 현재완료.", [
    { q: "I ___ to Kyoto last year.", c: ["went", "have been", "have gone"], a: 0, x: "last year는 분명한 과거 시점이라 과거형." },
    { q: "I ___ never been to Kyoto.", c: ["have", "did", "was"], a: 0, x: "경험은 have + 과거분사." },
    { q: "She ___ her wallet. (지금도 없음)", c: ["has lost", "lost yesterday", "was lose"], a: 0, x: "지금까지 이어지는 결과는 현재완료 has lost." },
    { q: "When ___ you arrive?", c: ["did", "have", "do"], a: 0, x: "When으로 시점을 물으면 과거형." },
    { q: "He has lived here ___ 2019.", c: ["since", "for", "ago"], a: 0, x: "since + 시작 시점." },
    { q: "I ___ the movie yesterday.", c: ["saw", "have seen", "see"], a: 0, x: "yesterday는 과거형." },
    { q: "Have you ___ lunch yet?", c: ["had", "have", "having"], a: 0, x: "have의 과거분사는 had." },
    { q: "They ___ here since morning.", c: ["have been", "were", "are"], a: 0, x: "since morning → 현재완료." },
    { q: "We ___ met before.", c: ["have", "did", "had to"], a: 0, x: "before는 경험을 나타내는 현재완료와 잘 어울립니다." },
    { q: "She ___ just left.", c: ["has", "did", "is"], a: 0, x: "just와 함께 완료를 나타내는 has left." }
  ]);
  add("e41", "5단계 · 문장 바꾸기 (능동↔수동, 직접↔간접)", "같은 뜻을 다른 문장 구조로 바꾸는 연습입니다.", [
    { q: "'Tom broke the cup.' → The cup ___ by Tom.", c: ["was broken", "broke", "is breaking"], a: 0, x: "수동태는 be + 과거분사. 과거라서 was broken." },
    { q: "'They built this bridge.' → This bridge ___.", c: ["was built", "built", "is build"], a: 0, x: "was built." },
    { q: "'I'm hungry,' she said. → She said she ___ hungry.", c: ["was", "is", "be"], a: 0, x: "전달동사 과거 → was." },
    { q: "'Open the door,' he said. → He told me ___ the door.", c: ["to open", "open", "opened"], a: 0, x: "명령의 전달은 told + 사람 + to + 동사 원형." },
    { q: "'Where do you live?' → He asked me where I ___.", c: ["lived", "live", "do live"], a: 0, x: "간접의문문은 평서문 어순, 시제는 과거." },
    { q: "'People speak English here.' → English ___ here.", c: ["is spoken", "speaks", "was speak"], a: 0, x: "현재 수동태 is spoken." },
    { q: "'Someone stole my bag.' → My bag ___.", c: ["was stolen", "stole", "is stealing"], a: 0, x: "steal의 과거분사는 stolen." },
    { q: "'I will call you,' he said. → He said he ___ call me.", c: ["would", "will", "is"], a: 0, x: "will → would." },
    { q: "'Do you like sushi?' → She asked me ___ I liked sushi.", c: ["if", "what", "that"], a: 0, x: "예/아니오 질문은 if로 전달." },
    { q: "'They are repairing the road.' → The road ___ repaired.", c: ["is being", "are", "was"], a: 0, x: "진행 수동태는 is being + 과거분사." }
  ]);
  var stageOf = { e34: 1, e35: 1, e36: 1, e37: 2, e38: 2, e39: 3, e40: 4, e41: 5 };
  window.EN_LESSONS.forEach(function (l) { /* titles already carry stage */ });
})();
