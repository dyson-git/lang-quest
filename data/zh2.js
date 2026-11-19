// 중국어 문장 레슨 (일본어 문장 레슨과 같은 모양). 병음은 성조 숫자(1~4, 경성 5)로 적고 표시용 성조 기호·한글은 여기서 만든다.
// 행: [중국어, 병음(숫자), 뜻, English, 설명]
(function () {
  var E = window.ENGINE;
  var TONES = { a: "āáǎà", e: "ēéěè", i: "īíǐì", o: "ōóǒò", u: "ūúǔù", "ü": "ǖǘǚǜ" };
  function mark(sy) {
    var t = +sy.slice(-1), s = sy.slice(0, -1).replace(/v/g, "ü");
    if (!(t >= 1 && t <= 4)) return s;
    var i = s.search(/[aeo]/);
    if (i < 0) i = s.indexOf("iu") >= 0 ? s.indexOf("iu") + 1 : -1;
    if (i < 0 && /ui/.test(s)) i = s.indexOf("ui") + 1;
    if (i < 0) { for (var k = s.length - 1; k >= 0; k--) if (/[iuü]/.test(s.charAt(k))) { i = k; break; } }
    if (/ou/.test(s) && !/[ae]/.test(s)) i = s.indexOf("o");
    var c = s.charAt(i);
    return s.slice(0, i) + (TONES[c] ? TONES[c].charAt(t - 1) : c) + s.slice(i + 1);
  }
  function plain(sy) { return sy.replace(/[1-5]$/, "").replace(/v/g, "ü"); }
  var LESSONS = [];
  function add(id, title, intro, rows) {
    LESSONS.push({ id: id, title: title, intro: intro, items: rows.map(function (r) {
      var sy = r[1].split(" ");
      return { jp: r[0], kana: sy.map(mark).join(" "), ro: "", ko: sy.map(function (x) { return E.pyKo(plain(x), false); }).join(" "), m: r[2], e: r[3], note: r[4] || "", lang: "zh-CN" };
    }) });
  }
  window.ZH_LESSONS = LESSONS;
  window.ZH_MARK = mark;

  add("z1", "1단계 · 인사말", "하루 종일 쓰는 인사입니다. 소리 내어 따라 해 보세요.", [
    ["你好", "ni3 hao3", "안녕하세요", "Hello.", "3성이 연달아 오면 앞의 3성은 2성처럼 읽습니다(ní hǎo)."],
    ["早上好", "zao3 shang5 hao3", "좋은 아침이에요", "Good morning.", ""],
    ["晚上好", "wan3 shang5 hao3", "안녕하세요 (저녁)", "Good evening.", ""],
    ["谢谢", "xie4 xie5", "고마워요", "Thank you.", "두 번째 谢는 가볍게(경성)."],
    ["不客气", "bu2 ke4 qi5", "천만에요", "You're welcome.", "不는 4성 앞에서 2성(bú)으로 바뀝니다."],
    ["对不起", "dui4 bu5 qi3", "미안해요", "Sorry.", ""],
    ["没关系", "mei2 guan1 xi5", "괜찮아요", "It's okay.", "对不起에 대한 대답으로 씁니다."],
    ["再见", "zai4 jian4", "안녕히 가세요", "Goodbye.", "再(다시) + 见(보다) = 또 만나요."],
    ["请问", "qing3 wen4", "실례합니다, 말씀 좀 묻겠습니다", "Excuse me.", "길을 물을 때 먼저 건네는 말."],
    ["欢迎光临", "huan1 ying2 guang1 lin2", "어서 오세요", "Welcome.", "가게에 들어설 때 점원이 하는 말."]
  ]);
  add("z2", "1단계 · 숫자와 가격", "숫자는 여행에서 가장 먼저 쓰입니다. 4(sì)와 10(shí)을 헷갈리지 마세요.", [
    ["一二三", "yi1 er4 san1", "1, 2, 3", "one, two, three", ""],
    ["四五六", "si4 wu3 liu4", "4, 5, 6", "four, five, six", ""],
    ["七八九十", "qi1 ba1 jiu3 shi2", "7, 8, 9, 10", "seven to ten", ""],
    ["多少钱", "duo1 shao5 qian2", "얼마예요?", "How much is it?", "가장 많이 쓰는 쇼핑 문장."],
    ["十块钱", "shi2 kuai4 qian2", "10위안", "ten yuan", "块는 말할 때 쓰는 '위안'."],
    ["一百", "yi4 bai3", "100", "one hundred", ""],
    ["两个", "liang3 ge5", "두 개", "two (of them)", "개수를 말할 때 2는 二이 아니라 两."],
    ["三点钟", "san1 dian3 zhong1", "3시", "three o'clock", ""],
    ["我二十岁", "wo3 er4 shi2 sui4", "저는 스무 살이에요", "I am twenty.", ""],
    ["你多大", "ni3 duo1 da4", "몇 살이에요?", "How old are you?", "친구에게 편하게 묻는 말."]
  ]);
  add("z3", "1단계 · 자기소개", "是(~이다)를 쓰는 기본 문장입니다.", [
    ["我是韩国人", "wo3 shi4 han2 guo2 ren2", "저는 한국인이에요", "I am Korean.", ""],
    ["我叫金民", "wo3 jiao4 jin1 min2", "제 이름은 김민이에요", "My name is Kim Min.", "叫 = 부르다. 이름을 말할 때."],
    ["你是学生吗", "ni3 shi4 xue2 sheng5 ma5", "학생이세요?", "Are you a student?", "문장 끝에 吗를 붙이면 질문."],
    ["我是学生", "wo3 shi4 xue2 sheng5", "저는 학생이에요", "I am a student.", ""],
    ["他是老师", "ta1 shi4 lao3 shi1", "그는 선생님이에요", "He is a teacher.", ""],
    ["她是我的朋友", "ta1 shi4 wo3 de5 peng2 you5", "그녀는 제 친구예요", "She is my friend.", "的 = ~의."],
    ["我不是日本人", "wo3 bu2 shi4 ri4 ben3 ren2", "저는 일본인이 아니에요", "I am not Japanese.", "不是 = ~이 아니다."],
    ["我是游客", "wo3 shi4 you2 ke4", "저는 여행자예요", "I am a tourist.", ""],
    ["这是我的", "zhe4 shi4 wo3 de5", "이건 제 거예요", "This is mine.", ""],
    ["认识你很高兴", "ren4 shi5 ni3 hen3 gao1 xing4", "만나서 반가워요", "Nice to meet you.", ""]
  ]);
  add("z4", "1단계 · 이게 뭐예요?", "这(이), 那(저), 什么(무엇), 哪里(어디)로 묻는 기본 질문입니다.", [
    ["这是什么", "zhe4 shi4 shen2 me5", "이게 뭐예요?", "What is this?", ""],
    ["那是什么", "na4 shi4 shen2 me5", "저건 뭐예요?", "What is that?", ""],
    ["这个", "zhe4 ge5", "이것", "this one", ""],
    ["那个", "na4 ge5", "저것", "that one", ""],
    ["这里", "zhe4 li3", "여기", "here", ""],
    ["那里", "na4 li3", "저기", "there", ""],
    ["哪里", "na3 li3", "어디", "where", "哪里? 하고 물으면 어디예요?"],
    ["厕所在哪里", "ce4 suo3 zai4 na3 li3", "화장실이 어디예요?", "Where is the toilet?", "여행 필수 문장."],
    ["我要这个", "wo3 yao4 zhe4 ge5", "이걸로 주세요", "I want this one.", "要 = 원하다."],
    ["有没有", "you3 mei2 you3", "있어요 없어요?", "Do you have it?", "有没有 + 물건으로 있는지 묻는 말."]
  ]);
  add("z5", "1단계 · 가족과 사람", "같은 글자를 겹쳐 쓰는 가족 호칭이 많습니다. 두 번째 글자는 경성으로 가볍게 읽습니다.", [
    ["爸爸", "ba4 ba5", "아빠", "dad", ""],
    ["妈妈", "ma1 ma5", "엄마", "mom", ""],
    ["哥哥", "ge1 ge5", "형, 오빠", "older brother", ""],
    ["姐姐", "jie3 jie5", "누나, 언니", "older sister", ""],
    ["弟弟", "di4 di5", "남동생", "younger brother", ""],
    ["妹妹", "mei4 mei5", "여동생", "younger sister", ""],
    ["朋友", "peng2 you5", "친구", "friend", ""],
    ["家人", "jia1 ren2", "가족", "family", ""],
    ["孩子", "hai2 zi5", "아이", "child", ""],
    ["我爱你", "wo3 ai4 ni3", "사랑해요", "I love you.", ""]
  ]);

  add("z6", "2단계 · 쇼핑", "가격과 색, 크기를 묻는 문장입니다.", [
    ["这个多少钱", "zhe4 ge5 duo1 shao5 qian2", "이건 얼마예요?", "How much is this?", ""],
    ["太贵了", "tai4 gui4 le5", "너무 비싸요", "Too expensive.", "太...了 = 너무 ~하다."],
    ["便宜一点", "pian2 yi5 yi4 dian3", "좀 깎아 주세요", "A bit cheaper, please.", "一点 = 조금."],
    ["有别的颜色吗", "you3 bie2 de5 yan2 se4 ma5", "다른 색 있어요?", "Do you have other colors?", ""],
    ["我要红色的", "wo3 yao4 hong2 se4 de5", "빨간 걸로 주세요", "I want the red one.", ""],
    ["可以试试吗", "ke3 yi3 shi4 shi5 ma5", "입어 봐도 돼요?", "Can I try it?", "试试 = 한번 해 보다."],
    ["有大一点的吗", "you3 da4 yi4 dian3 de5 ma5", "좀 더 큰 거 있어요?", "Do you have a bigger one?", ""],
    ["我买这个", "wo3 mai3 zhe4 ge5", "이걸 살게요", "I'll buy this.", ""],
    ["可以刷卡吗", "ke3 yi3 shua1 ka3 ma5", "카드로 돼요?", "Can I pay by card?", "刷卡 = 카드를 긁다."],
    ["不用袋子", "bu2 yong4 dai4 zi5", "봉투는 필요 없어요", "I don't need a bag.", ""]
  ]);
  add("z7", "2단계 · 식당과 카페", "주문하고 계산할 때 쓰는 말입니다.", [
    ["我要一杯咖啡", "wo3 yao4 yi4 bei1 ka1 fei1", "커피 한 잔 주세요", "A cup of coffee, please.", "杯 = 잔."],
    ["要冰的", "yao4 bing1 de5", "차가운 걸로 주세요", "Iced, please.", "热的(rè de) = 뜨거운 것."],
    ["请给我菜单", "qing3 gei3 wo3 cai4 dan1", "메뉴판 주세요", "The menu, please.", ""],
    ["我不吃辣", "wo3 bu4 chi1 la4", "매운 건 못 먹어요", "I don't eat spicy food.", ""],
    ["很好吃", "hen3 hao3 chi1", "맛있어요", "It's delicious.", ""],
    ["买单", "mai3 dan1", "계산해 주세요", "The bill, please.", ""],
    ["在这里吃", "zai4 zhe4 li3 chi1", "여기서 먹을게요", "For here.", ""],
    ["打包", "da3 bao1", "포장해 주세요", "To go, please.", ""],
    ["再来一瓶啤酒", "zai4 lai2 yi4 ping2 pi2 jiu3", "맥주 한 병 더 주세요", "One more beer, please.", ""],
    ["请给我水", "qing3 gei3 wo3 shui3", "물 주세요", "Water, please.", ""]
  ]);
  add("z8", "2단계 · 관광", "표를 사고 사진을 부탁하는 문장입니다.", [
    ["门票多少钱", "men2 piao4 duo1 shao5 qian2", "입장권이 얼마예요?", "How much is the ticket?", ""],
    ["我想买两张票", "wo3 xiang3 mai3 liang3 zhang1 piao4", "표 두 장 사고 싶어요", "I'd like two tickets.", "张 = 표·종이를 세는 말."],
    ["几点开门", "ji3 dian3 kai1 men2", "몇 시에 열어요?", "What time does it open?", ""],
    ["几点关门", "ji3 dian3 guan1 men2", "몇 시에 닫아요?", "What time does it close?", ""],
    ["可以拍照吗", "ke3 yi3 pai1 zhao4 ma5", "사진 찍어도 돼요?", "May I take photos?", ""],
    ["请帮我拍张照", "qing3 bang1 wo3 pai1 zhang1 zhao4", "사진 한 장 찍어 주세요", "Could you take a photo for me?", ""],
    ["这里不能拍照", "zhe4 li3 bu4 neng2 pai1 zhao4", "여기서는 촬영 금지예요", "No photos here.", ""],
    ["有中文地图吗", "you3 zhong1 wen2 di4 tu2 ma5", "중국어 지도 있어요?", "Do you have a map in Chinese?", ""],
    ["真漂亮", "zhen1 piao4 liang5", "정말 예뻐요", "So beautiful!", ""],
    ["我想参观", "wo3 xiang3 can1 guan1", "구경하고 싶어요", "I'd like to look around.", ""]
  ]);
  add("z9", "2단계 · 길 묻기", "방향을 묻고 알아듣는 문장입니다.", [
    ["请问，地铁站在哪里", "qing3 wen4 di4 tie3 zhan4 zai4 na3 li3", "저기요, 지하철역이 어디예요?", "Excuse me, where is the subway station?", ""],
    ["怎么走", "zen3 me5 zou3", "어떻게 가요?", "How do I get there?", ""],
    ["一直走", "yi4 zhi2 zou3", "쭉 가세요", "Go straight.", ""],
    ["左转", "zuo3 zhuan3", "좌회전", "Turn left.", ""],
    ["右转", "you4 zhuan3", "우회전", "Turn right.", ""],
    ["离这里远吗", "li2 zhe4 li3 yuan3 ma5", "여기서 멀어요?", "Is it far from here?", ""],
    ["走路五分钟", "zou3 lu4 wu3 fen1 zhong1", "걸어서 5분이에요", "Five minutes on foot.", ""],
    ["对面", "dui4 mian4", "맞은편", "opposite side", ""],
    ["旁边", "pang2 bian1", "옆", "next to", ""],
    ["我迷路了", "wo3 mi2 lu4 le5", "길을 잃었어요", "I'm lost.", ""]
  ]);
  add("z10", "2단계 · 교통", "택시와 지하철, 공항에서 쓰는 문장입니다.", [
    ["我要去机场", "wo3 yao4 qu4 ji1 chang3", "공항에 가요", "I'm going to the airport.", ""],
    ["请到这个地址", "qing3 dao4 zhe4 ge5 di4 zhi3", "이 주소로 가 주세요", "To this address, please.", "주소를 보여 주며 말하면 편합니다."],
    ["请打表", "qing3 da3 biao3", "미터기 켜 주세요", "Please use the meter.", ""],
    ["请在这里停车", "qing3 zai4 zhe4 li3 ting2 che1", "여기서 세워 주세요", "Please stop here.", ""],
    ["要多长时间", "yao4 duo1 chang2 shi2 jian1", "얼마나 걸려요?", "How long does it take?", ""],
    ["我要买一张票", "wo3 yao4 mai3 yi4 zhang1 piao4", "표 한 장 주세요", "One ticket, please.", ""],
    ["几号线", "ji3 hao4 xian4", "몇 호선이에요?", "Which line?", ""],
    ["在哪里换乘", "zai4 na3 li3 huan4 cheng2", "어디서 갈아타요?", "Where do I transfer?", ""],
    ["下一站", "xia4 yi2 zhan4", "다음 역", "next stop", ""],
    ["出口在哪里", "chu1 kou3 zai4 na3 li3", "출구가 어디예요?", "Where is the exit?", ""]
  ]);

  add("z11", "3단계 · 호텔", "체크인부터 불편 사항까지 쓰는 문장입니다.", [
    ["我订了房间", "wo3 ding4 le5 fang2 jian1", "방을 예약했어요", "I booked a room.", ""],
    ["我要办理入住", "wo3 yao4 ban4 li3 ru4 zhu4", "체크인할게요", "I'd like to check in.", ""],
    ["几点退房", "ji3 dian3 tui4 fang2", "몇 시에 체크아웃이에요?", "What time is check-out?", ""],
    ["有无线网吗", "you3 wu2 xian4 wang3 ma5", "와이파이 있어요?", "Is there Wi-Fi?", ""],
    ["房间里没有热水", "fang2 jian1 li5 mei2 you3 re4 shui3", "방에 온수가 안 나와요", "There is no hot water.", ""],
    ["请打扫房间", "qing3 da3 sao3 fang2 jian1", "방 청소해 주세요", "Please clean the room.", ""],
    ["我想换房间", "wo3 xiang3 huan4 fang2 jian1", "방을 바꾸고 싶어요", "I'd like to change rooms.", ""],
    ["空调坏了", "kong1 tiao2 huai4 le5", "에어컨이 고장 났어요", "The air conditioner is broken.", ""],
    ["可以寄存行李吗", "ke3 yi3 ji4 cun2 xing2 li5 ma5", "짐을 맡길 수 있어요?", "Can I leave my luggage?", ""],
    ["早餐几点", "zao3 can1 ji3 dian3", "아침 식사는 몇 시예요?", "What time is breakfast?", ""]
  ]);
  add("z12", "3단계 · 병원과 약", "아플 때 증상을 전하는 문장입니다.", [
    ["我不舒服", "wo3 bu4 shu1 fu5", "몸이 안 좋아요", "I don't feel well.", ""],
    ["我头疼", "wo3 tou2 teng2", "머리가 아파요", "I have a headache.", ""],
    ["我发烧了", "wo3 fa1 shao1 le5", "열이 나요", "I have a fever.", ""],
    ["我肚子疼", "wo3 du4 zi5 teng2", "배가 아파요", "My stomach hurts.", ""],
    ["哪里疼", "na3 li3 teng2", "어디가 아프세요?", "Where does it hurt?", ""],
    ["我需要看医生", "wo3 xu1 yao4 kan4 yi1 sheng1", "진료를 받고 싶어요", "I need to see a doctor.", ""],
    ["有药店吗", "you3 yao4 dian4 ma5", "약국 있어요?", "Is there a pharmacy?", ""],
    ["我对花生过敏", "wo3 dui4 hua1 sheng1 guo4 min3", "땅콩 알레르기가 있어요", "I'm allergic to peanuts.", ""],
    ["请叫救护车", "qing3 jiao4 jiu4 hu4 che1", "구급차를 불러 주세요", "Please call an ambulance.", ""],
    ["我想买感冒药", "wo3 xiang3 mai3 gan3 mao4 yao4", "감기약 사고 싶어요", "I'd like cold medicine.", ""]
  ]);
  add("z13", "3단계 · 시간과 날짜", "시각, 요일, 날짜를 묻고 말합니다.", [
    ["现在几点", "xian4 zai4 ji3 dian3", "지금 몇 시예요?", "What time is it?", ""],
    ["现在三点半", "xian4 zai4 san1 dian3 ban4", "지금 3시 반이에요", "It's half past three.", ""],
    ["今天几号", "jin1 tian1 ji3 hao4", "오늘 며칠이에요?", "What's the date today?", ""],
    ["今天星期三", "jin1 tian1 xing1 qi1 san1", "오늘은 수요일이에요", "Today is Wednesday.", "星期 + 숫자 = 요일."],
    ["明天见", "ming2 tian1 jian4", "내일 봐요", "See you tomorrow.", ""],
    ["我昨天到的", "wo3 zuo2 tian1 dao4 de5", "어제 도착했어요", "I arrived yesterday.", ""],
    ["早上八点", "zao3 shang5 ba1 dian3", "아침 8시", "8 a.m.", ""],
    ["晚上七点", "wan3 shang5 qi1 dian3", "저녁 7시", "7 p.m.", ""],
    ["下个月", "xia4 ge5 yue4", "다음 달", "next month", ""],
    ["一月", "yi1 yue4", "1월", "January", "월은 숫자 + 月."]
  ]);
  add("z14", "3단계 · 전화와 대화", "못 알아들었을 때 쓰는 문장이 가장 중요합니다.", [
    ["喂", "wei4", "여보세요", "Hello (phone).", ""],
    ["你的电话号码是多少", "ni3 de5 dian4 hua4 hao4 ma3 shi4 duo1 shao5", "전화번호가 어떻게 돼요?", "What's your phone number?", ""],
    ["请再说一遍", "qing3 zai4 shuo1 yi2 bian4", "다시 한번 말해 주세요", "Please say it again.", ""],
    ["请说慢一点", "qing3 shuo1 man4 yi4 dian3", "좀 천천히 말해 주세요", "Please speak more slowly.", ""],
    ["我听不懂", "wo3 ting1 bu5 dong3", "못 알아듣겠어요", "I don't understand.", "听 = 듣다, 懂 = 이해하다."],
    ["我会说一点中文", "wo3 hui4 shuo1 yi4 dian3 zhong1 wen2", "중국어를 조금 할 수 있어요", "I speak a little Chinese.", ""],
    ["你有微信吗", "ni3 you3 wei1 xin4 ma5", "위챗 있어요?", "Do you have WeChat?", ""],
    ["我给你发消息", "wo3 gei3 ni3 fa1 xiao1 xi5", "메시지 보낼게요", "I'll message you.", ""],
    ["等一下", "deng3 yi2 xia4", "잠깐만요", "Wait a moment.", ""],
    ["我马上到", "wo3 ma3 shang4 dao4", "곧 도착해요", "I'll be there soon.", ""]
  ]);
  add("z15", "3단계 · 감정과 날씨", "느낌과 날씨를 말하는 문장입니다.", [
    ["今天很热", "jin1 tian1 hen3 re4", "오늘 더워요", "It's hot today.", ""],
    ["今天下雨", "jin1 tian1 xia4 yu3", "오늘 비가 와요", "It's raining today.", ""],
    ["天气很好", "tian1 qi4 hen3 hao3", "날씨가 좋아요", "The weather is nice.", ""],
    ["我很高兴", "wo3 hen3 gao1 xing4", "기뻐요", "I'm happy.", ""],
    ["我有点累", "wo3 you3 dian3 lei4", "조금 피곤해요", "I'm a little tired.", ""],
    ["我饿了", "wo3 e4 le5", "배고파요", "I'm hungry.", ""],
    ["我渴了", "wo3 ke3 le5", "목말라요", "I'm thirsty.", ""],
    ["很冷", "hen3 leng3", "추워요", "It's cold.", ""],
    ["很好玩", "hen3 hao3 wan2", "정말 재미있어요", "It's fun.", ""],
    ["我喜欢这里", "wo3 xi3 huan5 zhe4 li3", "여기가 좋아요", "I like it here.", ""]
  ]);

  add("z16", "4단계 · 할 수 있어요", "能(능력·가능), 会(배워서 할 줄 앎), 可以(허락)를 구별합니다.", [
    ["我会说中文", "wo3 hui4 shuo1 zhong1 wen2", "중국어를 할 줄 알아요", "I can speak Chinese.", "会 = 배워서 할 줄 안다."],
    ["我不会游泳", "wo3 bu2 hui4 you2 yong3", "수영을 못 해요", "I can't swim.", ""],
    ["你能帮我吗", "ni3 neng2 bang1 wo3 ma5", "도와주실 수 있어요?", "Can you help me?", "能 = 상황이 되어서 할 수 있다."],
    ["我不能去", "wo3 bu4 neng2 qu4", "갈 수 없어요", "I can't go.", ""],
    ["可以进去吗", "ke3 yi3 jin4 qu5 ma5", "들어가도 돼요?", "May I go in?", "可以 = 허락."],
    ["这里可以抽烟吗", "zhe4 li3 ke3 yi3 chou1 yan1 ma5", "여기서 담배 피워도 돼요?", "May I smoke here?", ""],
    ["我想去", "wo3 xiang3 qu4", "가고 싶어요", "I want to go.", ""],
    ["我可以坐这里吗", "wo3 ke3 yi3 zuo4 zhe4 li3 ma5", "여기 앉아도 돼요?", "May I sit here?", ""],
    ["你会开车吗", "ni3 hui4 kai1 che1 ma5", "운전할 줄 알아요?", "Can you drive?", ""],
    ["我看得懂", "wo3 kan4 de5 dong3", "보면 알아요", "I can understand it (by reading).", "동사 + 得 + 결과 = ~할 수 있다."]
  ]);
  add("z17", "4단계 · 했어요, 해 봤어요, 하고 있어요", "了(완료), 过(경험), 在(진행)를 구별합니다.", [
    ["我去过中国", "wo3 qu4 guo5 zhong1 guo2", "중국에 가 본 적 있어요", "I've been to China.", "过 = 경험."],
    ["我没吃过", "wo3 mei2 chi1 guo5", "먹어 본 적 없어요", "I've never eaten it.", ""],
    ["我吃了", "wo3 chi1 le5", "먹었어요", "I ate.", "了 = 완료."],
    ["我买了一个", "wo3 mai3 le5 yi2 ge5", "하나 샀어요", "I bought one.", ""],
    ["我在等你", "wo3 zai4 deng3 ni3", "당신을 기다리고 있어요", "I'm waiting for you.", "在 + 동사 = ~하고 있다."],
    ["他在打电话", "ta1 zai4 da3 dian4 hua4", "그는 전화하고 있어요", "He is on the phone.", ""],
    ["我正在吃饭", "wo3 zheng4 zai4 chi1 fan4", "지금 밥 먹는 중이에요", "I'm eating right now.", ""],
    ["你吃饭了吗", "ni3 chi1 fan4 le5 ma5", "식사하셨어요?", "Have you eaten?", "인사로도 많이 씁니다."],
    ["还没有", "hai2 mei2 you3", "아직 안 했어요", "Not yet.", ""],
    ["已经到了", "yi3 jing1 dao4 le5", "이미 도착했어요", "I've already arrived.", ""]
  ]);
  add("z18", "4단계 · 부탁하기 (请)", "请을 앞에 붙이면 정중한 부탁이 됩니다.", [
    ["请给我一杯水", "qing3 gei3 wo3 yi4 bei1 shui3", "물 한 잔 주세요", "A glass of water, please.", ""],
    ["请稍等", "qing3 shao1 deng3", "잠시만 기다려 주세요", "Please wait a moment.", ""],
    ["请跟我来", "qing3 gen1 wo3 lai2", "따라오세요", "Please follow me.", ""],
    ["请再说一次", "qing3 zai4 shuo1 yi2 ci4", "한 번 더 말해 주세요", "Please say it once more.", ""],
    ["请帮帮我", "qing3 bang1 bang5 wo3", "저를 좀 도와주세요", "Please help me.", ""],
    ["请开门", "qing3 kai1 men2", "문 열어 주세요", "Please open the door.", ""],
    ["请坐", "qing3 zuo4", "앉으세요", "Please sit.", ""],
    ["请问洗手间在哪里", "qing3 wen4 xi3 shou3 jian1 zai4 na3 li3", "화장실이 어디예요?", "Where is the restroom?", ""],
    ["请把窗户关上", "qing3 ba3 chuang1 hu5 guan1 shang5", "창문을 닫아 주세요", "Please close the window.", "把 = 대상을 앞으로 빼는 말."],
    ["麻烦你了", "ma2 fan5 ni3 le5", "번거롭게 해서 죄송해요", "Sorry to trouble you.", ""]
  ]);
  add("z19", "4단계 · 이유와 이어 말하기", "因为/所以(이유), 虽然/但是(비록~지만), 如果/就(만약)로 문장을 잇습니다.", [
    ["因为下雨，所以我不去", "yin1 wei4 xia4 yu3 suo3 yi3 wo3 bu2 qu4", "비가 와서 안 가요", "Because it rains, I won't go.", ""],
    ["因为太贵了", "yin1 wei4 tai4 gui4 le5", "너무 비싸서요", "Because it's too expensive.", ""],
    ["所以我先走了", "suo3 yi3 wo3 xian1 zou3 le5", "그래서 제가 먼저 갈게요", "So I'll go first.", ""],
    ["但是很好吃", "dan4 shi4 hen3 hao3 chi1", "하지만 맛있어요", "But it's delicious.", ""],
    ["虽然很远，但是很漂亮", "sui1 ran2 hen3 yuan3 dan4 shi4 hen3 piao4 liang5", "멀지만 예뻐요", "It's far, but beautiful.", ""],
    ["如果下雨，我就不去", "ru2 guo3 xia4 yu3 wo3 jiu4 bu2 qu4", "비가 오면 안 갈 거예요", "If it rains, I won't go.", ""],
    ["我迷路了，所以迟到了", "wo3 mi2 lu4 le5 suo3 yi3 chi2 dao4 le5", "길을 잃어서 늦었어요", "I got lost, so I'm late.", ""],
    ["因为我不会说中文", "yin1 wei4 wo3 bu2 hui4 shuo1 zhong1 wen2", "중국어를 못 해서요", "Because I can't speak Chinese.", ""],
    ["可是我很喜欢", "ke3 shi4 wo3 hen3 xi3 huan5", "그래도 저는 좋아해요", "But I like it.", ""],
    ["先吃饭，然后去玩", "xian1 chi1 fan4 ran2 hou4 qu4 wan2", "먼저 밥 먹고 나서 놀러 가요", "Eat first, then go and play.", ""]
  ]);
  add("z20", "4단계 · 비교하기 (比)", "A 比 B + 형용사 = A가 B보다 ~하다.", [
    ["这个比那个贵", "zhe4 ge5 bi3 na4 ge5 gui4", "이게 저것보다 비싸요", "This is more expensive than that.", ""],
    ["今天比昨天热", "jin1 tian1 bi3 zuo2 tian1 re4", "오늘이 어제보다 더워요", "Today is hotter than yesterday.", ""],
    ["我比他高", "wo3 bi3 ta1 gao1", "제가 그보다 커요", "I am taller than him.", ""],
    ["没有那么贵", "mei2 you3 na4 me5 gui4", "그렇게 비싸지 않아요", "It's not that expensive.", ""],
    ["一样", "yi2 yang4", "같아요", "the same", ""],
    ["更便宜", "geng4 pian2 yi5", "더 싸요", "even cheaper", ""],
    ["最好", "zui4 hao3", "가장 좋아요", "the best", ""],
    ["最近", "zui4 jin4", "요즘, 가장 가까운", "recently / nearest", ""],
    ["太多了", "tai4 duo1 le5", "너무 많아요", "That's too many.", ""],
    ["越来越好", "yue4 lai2 yue4 hao3", "점점 좋아져요", "It's getting better and better.", ""]
  ]);

  add("z21", "5단계 · 정중한 말", "가게와 직원이 쓰는 정중한 표현을 알아듣는 연습입니다.", [
    ["您好", "nin2 hao3", "안녕하세요 (높임)", "Hello (polite).", "您 = 你의 높임말."],
    ["请问您要什么", "qing3 wen4 nin2 yao4 shen2 me5", "무엇을 드릴까요?", "What would you like?", ""],
    ["让您久等了", "rang4 nin2 jiu3 deng3 le5", "오래 기다리셨습니다", "Sorry to keep you waiting.", ""],
    ["不好意思", "bu4 hao3 yi4 si5", "죄송합니다, 실례합니다", "Excuse me / Sorry.", ""],
    ["打扰一下", "da3 rao3 yi2 xia4", "실례합니다 (방해해서 죄송)", "Excuse me for the interruption.", ""],
    ["麻烦您", "ma2 fan5 nin2", "수고를 끼쳐 죄송해요", "Sorry to bother you.", ""],
    ["谢谢您的帮助", "xie4 xie5 nin2 de5 bang1 zhu4", "도와주셔서 감사합니다", "Thank you for your help.", ""],
    ["欢迎再来", "huan1 ying2 zai4 lai2", "또 오세요", "Please come again.", ""],
    ["慢走", "man4 zou3", "살펴 가세요", "Take care.", "떠나는 손님에게."],
    ["祝您旅途愉快", "zhu4 nin2 lu3 tu2 yu2 kuai4", "즐거운 여행 되세요", "Have a pleasant trip.", ""]
  ]);
  add("z22", "5단계 · 긴급 상황", "위급할 때 짧고 정확하게 전하는 문장입니다.", [
    ["救命", "jiu4 ming4", "살려 주세요", "Help!", ""],
    ["我的钱包丢了", "wo3 de5 qian2 bao1 diu1 le5", "지갑을 잃어버렸어요", "I lost my wallet.", ""],
    ["我的护照不见了", "wo3 de5 hu4 zhao4 bu2 jian4 le5", "여권이 없어졌어요", "My passport is missing.", ""],
    ["请帮我报警", "qing3 bang1 wo3 bao4 jing3", "경찰에 신고해 주세요", "Please call the police.", ""],
    ["警察局在哪里", "jing3 cha2 ju2 zai4 na3 li3", "경찰서가 어디예요?", "Where is the police station?", ""],
    ["有人偷了我的包", "you3 ren2 tou1 le5 wo3 de5 bao1", "누가 제 가방을 훔쳤어요", "Someone stole my bag.", ""],
    ["我需要翻译", "wo3 xu1 yao4 fan1 yi4", "통역이 필요해요", "I need an interpreter.", ""],
    ["大使馆在哪里", "da4 shi3 guan3 zai4 na3 li3", "대사관이 어디예요?", "Where is the embassy?", ""],
    ["我受伤了", "wo3 shou4 shang1 le5", "다쳤어요", "I'm injured.", ""],
    ["快叫救护车", "kuai4 jiao4 jiu4 hu4 che1", "빨리 구급차를 불러 주세요", "Call an ambulance quickly!", ""]
  ]);
  add("z23", "5단계 · 감상과 의견", "여행의 느낌을 풍부하게 말합니다.", [
    ["太好了", "tai4 hao3 le5", "정말 좋아요", "That's great!", ""],
    ["真好吃", "zhen1 hao3 chi1", "정말 맛있어요", "So delicious!", ""],
    ["太棒了", "tai4 bang4 le5", "최고예요", "Awesome!", ""],
    ["我觉得很有意思", "wo3 jue2 de5 hen3 you3 yi4 si5", "재미있다고 생각해요", "I think it's interesting.", ""],
    ["我很喜欢这个地方", "wo3 hen3 xi3 huan5 zhe4 ge5 di4 fang5", "이곳이 정말 좋아요", "I really like this place.", ""],
    ["不错", "bu2 cuo4", "괜찮네요", "Not bad.", ""],
    ["有点贵", "you3 dian3 gui4", "조금 비싸요", "A bit expensive.", ""],
    ["我想再来", "wo3 xiang3 zai4 lai2", "또 오고 싶어요", "I want to come again.", ""],
    ["下次再见", "xia4 ci4 zai4 jian4", "다음에 또 봐요", "See you next time.", ""],
    ["我会想你的", "wo3 hui4 xiang3 ni3 de5", "보고 싶을 거예요", "I'll miss you.", ""]
  ]);
  add("z24", "5단계 · 표지판과 안내", "거리와 가게에서 마주치는 글자입니다. 알아보는 것이 목표입니다.", [
    ["出口", "chu1 kou3", "출구", "exit", ""],
    ["入口", "ru4 kou3", "입구", "entrance", ""],
    ["禁止吸烟", "jin4 zhi3 xi1 yan1", "금연", "No smoking", ""],
    ["请勿拍照", "qing3 wu4 pai1 zhao4", "촬영 금지", "No photography", ""],
    ["营业中", "ying2 ye4 zhong1", "영업 중", "Open", ""],
    ["休息中", "xiu1 xi5 zhong1", "쉬는 중", "Closed (resting)", ""],
    ["小心", "xiao3 xin1", "조심", "Caution", ""],
    ["请排队", "qing3 pai2 dui4", "줄을 서 주세요", "Please queue.", ""],
    ["免费", "mian3 fei4", "무료", "Free", ""],
    ["洗手间", "xi3 shou3 jian1", "화장실", "restroom", ""]
  ]);
})();
