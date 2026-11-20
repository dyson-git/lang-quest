// 중국어 문장 6~10단계 (일상 빈도순). 행: [중국어, 병음(숫자 성조), 뜻, English, 설명]
(function () {
  var E = window.ENGINE, mark = window.ZH_MARK;
  function plain(sy) { return sy.replace(/[1-5]$/, "").replace(/v/g, "ü"); }
  function add(id, title, intro, rows) {
    window.ZH_LESSONS.push({ id: id, title: title, intro: intro, items: rows.map(function (r) {
      var sy = r[1].split(" ");
      return { jp: r[0], kana: sy.map(mark).join(" "), ro: "", ko: sy.map(function (x) { return E.pyKo(plain(x), false); }).join(" "), m: r[2], e: r[3], note: r[4] || "", lang: "zh-CN" };
    }) });
  }
  // ───────── 6단계 ─────────
  add("z25", "6단계 · 안부와 날씨", "만나면 가장 먼저 나누는 말입니다. 날씨 이야기는 대화를 여는 단골 주제예요.", [
    ["你最近好吗", "ni3 zui4 jin4 hao3 ma5", "요즘 잘 지내요?", "How have you been lately?", "最近=요즘, 吗는 의문 어기조사."],
    ["我很好，谢谢", "wo3 hen3 hao3 xie4 xie5", "잘 지내요, 고마워요", "I'm fine, thanks.", "很은 형용사 앞에 자연스럽게 붙는 말."],
    ["好久不见", "hao3 jiu3 bu2 jian4", "오랜만이에요", "Long time no see.", "'오래 못 봤다'를 그대로 옮긴 표현."],
    ["今天天气很好", "jin1 tian1 tian1 qi4 hen3 hao3", "오늘 날씨 좋네요", "The weather is nice today.", "天气=날씨."],
    ["今天很热", "jin1 tian1 hen3 re4", "오늘 더워요", "It's hot today.", "热=덥다, 冷=춥다."],
    ["今天很冷", "jin1 tian1 hen3 leng3", "오늘 추워요", "It's cold today.", "冷(lěng)은 3성."],
    ["外面在下雨", "wai4 mian5 zai4 xia4 yu3", "밖에 비가 와요", "It's raining outside.", "在+동사=~하고 있다."],
    ["明天会晴天吗", "ming2 tian1 hui4 qing2 tian1 ma5", "내일 맑을까요?", "Will it be sunny tomorrow?", "会=~일 것이다(추측)."],
    ["你带伞了吗", "ni3 dai4 san3 le5 ma5", "우산 가져왔어요?", "Did you bring an umbrella?", "了는 완료, 带=지니다."],
    ["我感冒了", "wo3 gan3 mao4 le5", "감기 걸렸어요", "I caught a cold.", "感冒=감기."]
  ]);
  add("z26", "6단계 · 시간과 약속", "시각을 묻고 약속을 잡는 표현입니다.", [
    ["现在几点", "xian4 zai4 ji3 dian3", "지금 몇 시예요?", "What time is it?", "几点=몇 시."],
    ["现在三点半", "xian4 zai4 san1 dian3 ban4", "지금 3시 반이에요", "It's half past three.", "半=반. 点=시."],
    ["我们几点见面", "wo3 men5 ji3 dian3 jian4 mian4", "우리 몇 시에 만날까요?", "What time shall we meet?", "见面=만나다."],
    ["七点怎么样", "qi1 dian3 zen3 me5 yang4", "7시 어때요?", "How about seven?", "怎么样=어때요?"],
    ["我会晚一点", "wo3 hui4 wan3 yi4 dian3", "조금 늦을 거예요", "I'll be a bit late.", "晚=늦다, 一点=조금."],
    ["我马上到", "wo3 ma3 shang4 dao4", "금방 도착해요", "I'll be there right away.", "马上=곧."],
    ["今天我很忙", "jin1 tian1 wo3 hen3 mang2", "오늘 바빠요", "I'm busy today.", "忙=바쁘다."],
    ["明天你有空吗", "ming2 tian1 ni3 you3 kong4 ma5", "내일 시간 있어요?", "Are you free tomorrow?", "有空=시간이 있다."],
    ["下次吧", "xia4 ci4 ba5", "다음에 해요", "Maybe next time.", "吧는 제안·완곡한 어감."],
    ["请等一下", "qing3 deng3 yi2 xia4", "잠깐 기다려 주세요", "Please wait a moment.", "一下는 '잠깐'을 나타냅니다."]
  ]);
  // ───────── 7단계 ─────────
  add("z27", "7단계 · 쇼핑과 가격", "값을 묻고, 고르고, 계산하는 순서로 익히세요.", [
    ["这个多少钱", "zhe4 ge5 duo1 shao5 qian2", "이거 얼마예요?", "How much is this?", "多少钱=얼마."],
    ["能便宜一点吗", "neng2 pian2 yi5 yi4 dian3 ma5", "조금 싸게 해 줄 수 있나요?", "Can you make it cheaper?", "便宜(pián yi)=싸다."],
    ["有别的颜色吗", "you3 bie2 de5 yan2 se4 ma5", "다른 색 있어요?", "Do you have other colors?", "别的=다른 것."],
    ["我可以试一下吗", "wo3 ke3 yi3 shi4 yi2 xia4 ma5", "입어 봐도 돼요?", "May I try it?", "可以=~해도 된다."],
    ["有点大", "you3 dian3 da4", "좀 커요", "It's a bit big.", "有点=약간(부정적일 때)."],
    ["我要这个", "wo3 yao4 zhe4 ge5", "이걸 주세요", "I'll take this.", "要=원하다."],
    ["不用袋子", "bu2 yong4 dai4 zi5", "봉지는 필요 없어요", "No bag, please.", "不用=~할 필요 없다."],
    ["可以刷卡吗", "ke3 yi3 shua1 ka3 ma5", "카드 결제 되나요?", "Can I pay by card?", "刷卡=카드를 긁다."],
    ["请给我发票", "qing3 gei3 wo3 fa1 piao4", "영수증 주세요", "Please give me a receipt.", "发票=영수증."],
    ["可以退税吗", "ke3 yi3 tui4 shui4 ma5", "세금 환급 되나요?", "Can I get a tax refund?", "退税=세금 환급."]
  ]);
  add("z28", "7단계 · 식당에서", "자리 잡기부터 계산까지, 식당 순서대로 쓰는 말입니다.", [
    ["两位", "liang3 wei4", "두 명이에요", "Two people.", "位는 사람을 세는 정중한 단위."],
    ["请给我菜单", "qing3 gei3 wo3 cai4 dan1", "메뉴 주세요", "The menu, please.", "菜单=메뉴."],
    ["有什么推荐的吗", "you3 shen2 me5 tui1 jian4 de5 ma5", "추천 메뉴 있어요?", "Any recommendations?", "推荐=추천."],
    ["我要一个这个", "wo3 yao4 yi2 ge5 zhe4 ge5", "이거 하나 주세요", "I'll have one of this.", "一(yī)는 뒤 4성 앞에서 2성(yí)으로."],
    ["请给我一杯水", "qing3 gei3 wo3 yi4 bei1 shui3", "물 한 잔 주세요", "A glass of water, please.", "杯=잔."],
    ["不要太辣", "bu2 yao4 tai4 la4", "너무 맵지 않게요", "Not too spicy, please.", "辣=맵다."],
    ["我对花生过敏", "wo3 dui4 hua1 sheng1 guo4 min3", "땅콩 알레르기가 있어요", "I'm allergic to peanuts.", "过敏=알레르기."],
    ["非常好吃", "fei1 chang2 hao3 chi1", "정말 맛있어요", "It's really delicious.", "好吃=맛있다."],
    ["买单", "mai3 dan1", "계산해 주세요", "The check, please.", "식당에서 가장 흔한 계산 요청."],
    ["太好吃了", "tai4 hao3 chi1 le5", "너무 맛있어요", "So tasty!", "太~了=너무 ~하다."]
  ]);
  // ───────── 8단계 ─────────
  add("z29", "8단계 · 길과 교통", "길을 묻고 대중교통을 탈 때 쓰는 말입니다.", [
    ["地铁站在哪里", "di4 tie3 zhan4 zai4 na3 li3", "지하철역이 어디예요?", "Where is the subway station?", "在哪里=어디에 있어요?"],
    ["这趟车去机场吗", "zhe4 tang4 che1 qu4 ji1 chang3 ma5", "이 차는 공항 가나요?", "Does this go to the airport?", "趟=왕복·운행 횟수 단위."],
    ["下一站下车", "xia4 yi2 zhan4 xia4 che1", "다음 역에서 내려요", "I'll get off at the next stop.", "下车=하차."],
    ["要换车吗", "yao4 huan4 che1 ma5", "환승해야 해요?", "Do I need to transfer?", "换=바꾸다."],
    ["票在哪里买", "piao4 zai4 na3 li3 mai3", "표는 어디서 사요?", "Where do I buy tickets?", "买=사다."],
    ["从这里走十分钟", "cong2 zhe4 li3 zou3 shi2 fen1 zhong1", "여기서 걸어 10분이에요", "10 minutes on foot from here.", "从~=~에서부터."],
    ["一直走", "yi4 zhi2 zou3", "곧장 가세요", "Go straight.", "一直=계속, 곧장."],
    ["向右转", "xiang4 you4 zhuan3", "오른쪽으로 도세요", "Turn right.", "左=왼쪽."],
    ["请帮我叫出租车", "qing3 bang1 wo3 jiao4 chu1 zu1 che1", "택시를 불러 주세요", "Please call me a taxi.", "出租车=택시."],
    ["我迷路了", "wo3 mi2 lu4 le5", "길을 잃었어요", "I'm lost.", "迷路=길을 잃다."]
  ]);
  add("z30", "8단계 · 숙소에서", "체크인부터 문제 상황까지, 호텔에서 쓰는 말입니다.", [
    ["我预订了房间", "wo3 yu4 ding4 le5 fang2 jian1", "방을 예약했어요", "I booked a room.", "预订=예약."],
    ["我要办理入住", "wo3 yao4 ban4 li3 ru4 zhu4", "체크인하고 싶어요", "I'd like to check in.", "入住=체크인."],
    ["可以先放行李吗", "ke3 yi3 xian1 fang4 xing2 li5 ma5", "짐 먼저 맡겨도 돼요?", "Can I leave my luggage first?", "行李=짐."],
    ["早餐几点开始", "zao3 can1 ji3 dian3 kai1 shi3", "조식은 몇 시부터예요?", "What time does breakfast start?", "早餐=아침 식사."],
    ["无线网密码是多少", "wu2 xian4 wang3 mi4 ma3 shi4 duo1 shao5", "와이파이 비밀번호가 뭐예요?", "What's the Wi-Fi password?", "无线网=와이파이."],
    ["空调坏了", "kong1 tiao2 huai4 le5", "에어컨이 고장 났어요", "The AC is broken.", "坏了=고장 났다."],
    ["请再给我一条毛巾", "qing3 zai4 gei3 wo3 yi4 tiao2 mao2 jin1", "수건 한 장 더 주세요", "One more towel, please.", "条=긴 물건의 단위."],
    ["可以换房间吗", "ke3 yi3 huan4 fang2 jian1 ma5", "방 바꿀 수 있나요?", "Can I change rooms?", "换=바꾸다."],
    ["我的钥匙丢了", "wo3 de5 yao4 shi5 diu1 le5", "열쇠를 잃어버렸어요", "I lost my key.", "钥匙(yào shi)=열쇠."],
    ["明天早上六点叫醒我", "ming2 tian1 zao3 shang5 liu4 dian3 jiao4 xing3 wo3", "내일 아침 6시에 깨워 주세요", "Please wake me at six tomorrow.", "叫醒=깨우다."]
  ]);
  // ───────── 9단계 ─────────
  add("z31", "9단계 · 몸이 아플 때", "병원·약국에서 증상을 말하는 표현입니다.", [
    ["我头疼", "wo3 tou2 teng2", "머리가 아파요", "I have a headache.", "疼=아프다."],
    ["我肚子疼", "wo3 du4 zi5 teng2", "배가 아파요", "I have a stomachache.", "肚子=배."],
    ["我发烧了", "wo3 fa1 shao1 le5", "열이 나요", "I have a fever.", "发烧=열이 나다."],
    ["我想吐", "wo3 xiang3 tu4", "토할 것 같아요", "I feel like vomiting.", "想=~하고 싶다·~할 것 같다."],
    ["从昨天开始咳嗽", "cong2 zuo2 tian1 kai1 shi3 ke2 sou5", "어제부터 기침해요", "I've been coughing since yesterday.", "咳嗽=기침."],
    ["我在吃药", "wo3 zai4 chi1 yao4", "약을 먹고 있어요", "I'm taking medicine.", "吃药=약을 먹다."],
    ["这个药一天吃几次", "zhe4 ge5 yao4 yi4 tian1 chi1 ji3 ci4", "이 약은 하루 몇 번이에요?", "How often do I take this a day?", "几次=몇 번."],
    ["请叫救护车", "qing3 jiao4 jiu4 hu4 che1", "구급차를 불러 주세요", "Please call an ambulance.", "救护车=구급차."],
    ["我有保险", "wo3 you3 bao3 xian3", "보험이 있어요", "I have insurance.", "保险=보험."],
    ["医院在哪里", "yi1 yuan4 zai4 na3 li3", "병원이 어디예요?", "Where is the hospital?", "药店(약국)도 함께 익히세요."]
  ]);
  add("z32", "9단계 · 전화와 연락", "약속·연락할 때 쓰는 말입니다.", [
    ["喂", "wei2", "여보세요", "Hello (phone).", "전화 받을 때. 성조는 2성."],
    ["请找王先生", "qing3 zhao3 wang2 xian1 sheng5", "왕 선생님 부탁합니다", "May I speak to Mr. Wang?", "先生=~씨(남성에게)."],
    ["请稍等", "qing3 shao1 deng3", "잠시만 기다려 주세요", "Please wait a moment.", "稍=잠깐."],
    ["请再说一遍", "qing3 zai4 shuo1 yi2 bian4", "한 번 더 말해 주세요", "Please say it again.", "遍=번(전체 한 차례)."],
    ["请说慢一点", "qing3 shuo1 man4 yi4 dian3", "천천히 말해 주세요", "Please speak slowly.", "慢=느리다."],
    ["我给你发信息", "wo3 gei3 ni3 fa1 xin4 xi1", "메시지 보낼게요", "I'll message you.", "发=보내다."],
    ["可以告诉我你的联系方式吗", "ke3 yi3 gao4 su5 wo3 ni3 de5 lian2 xi4 fang1 shi4 ma5", "연락처 알려 줄 수 있나요?", "Can you give me your contact?", "联系方式=연락처."],
    ["我一会儿给你打电话", "wo3 yi2 hui4 er5 gei3 ni3 da3 dian4 hua4", "조금 있다가 전화할게요", "I'll call you in a bit.", "一会儿=잠시 후."],
    ["信号不好", "xin4 hao4 bu4 hao3", "신호가 안 좋아요", "The signal is bad.", "信号=신호."],
    ["可以借我充电器吗", "ke3 yi3 jie4 wo3 chong1 dian4 qi4 ma5", "충전기 빌려줄 수 있나요?", "Can I borrow a charger?", "借=빌리다·빌려주다."]
  ]);
  // ───────── 10단계 ─────────
  add("z33", "10단계 · 감정과 의견", "생각과 기분을 말하는 표현입니다.", [
    ["我很高兴", "wo3 hen3 gao1 xing4", "기뻐요", "I'm happy.", "高兴=기쁘다."],
    ["玩得很开心", "wan2 de5 hen3 kai1 xin1", "즐겁게 놀았어요", "I had a great time.", "得는 동작의 정도를 나타냅니다."],
    ["真可惜", "zhen1 ke3 xi1", "정말 아쉬워요", "What a pity.", "可惜=아쉽다."],
    ["真的吗", "zhen1 de5 ma5", "정말이에요?", "Really?", "맞장구 표현."],
    ["我也这么想", "wo3 ye3 zhe4 me5 xiang3", "저도 그렇게 생각해요", "I think so too.", "也=~도."],
    ["我不这么认为", "wo3 bu4 zhe4 me5 ren4 wei2", "저는 그렇게 생각하지 않아요", "I don't think so.", "认为=~라고 여기다."],
    ["我同意", "wo3 tong2 yi4", "동의해요", "I agree.", "不同意=동의하지 않아요."],
    ["有点难", "you3 dian3 nan2", "조금 어려워요", "It's a bit hard.", "难=어렵다."],
    ["没关系", "mei2 guan1 xi5", "괜찮아요", "It's okay.", "사과에 대한 대답으로 자주."],
    ["我很期待", "wo3 hen3 qi1 dai4", "기대돼요", "I'm looking forward to it.", "期待=기대하다."]
  ]);
  add("z34", "10단계 · 집과 가족", "집, 가족 이야기를 하는 표현입니다.", [
    ["我家有四口人", "wo3 jia1 you3 si4 kou3 ren2", "우리 가족은 네 명이에요", "There are four people in my family.", "口는 가족 수를 세는 단위."],
    ["我有一个哥哥", "wo3 you3 yi2 ge5 ge1 ge5", "형이 한 명 있어요", "I have one older brother.", "哥哥=형·오빠."],
    ["我妈妈是老师", "wo3 ma1 ma5 shi4 lao3 shi1", "어머니는 선생님이에요", "My mom is a teacher.", "老师=선생님."],
    ["我有两个孩子", "wo3 you3 liang3 ge5 hai2 zi5", "아이가 둘 있어요", "I have two kids.", "两=둘(양을 셀 때)."],
    ["你结婚了吗", "ni3 jie2 hun1 le5 ma5", "결혼했어요?", "Are you married?", "结婚=결혼."],
    ["你住在哪里", "ni3 zhu4 zai4 na3 li3", "어디 사세요?", "Where do you live?", "住=살다."],
    ["我住在首尔", "wo3 zhu4 zai4 shou3 er3", "서울에 살아요", "I live in Seoul.", "在=~에."],
    ["我一个人住", "wo3 yi2 ge5 ren2 zhu4", "혼자 살아요", "I live alone.", "一个人=혼자."],
    ["我养了一只狗", "wo3 yang3 le5 yi4 zhi1 gou3", "개를 한 마리 키워요", "I have a dog.", "只=동물을 세는 단위."],
    ["你的爱好是什么", "ni3 de5 ai4 hao4 shi4 shen2 me5", "취미가 뭐예요?", "What's your hobby?", "爱好=취미."]
  ]);
})();
