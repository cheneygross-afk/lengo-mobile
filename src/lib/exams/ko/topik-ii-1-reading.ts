// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-ii-1-reading.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { IMAGE_NOTE, q, read, weigh } from "./text";

// TOPIK II practice test 1 -- 읽기 (reading), questions 1-50, 70 minutes,
// every question 2 points. The real test's question types in its order:
// grammar in a gap (1-2), a similar expression (3-4), what an ad or notice
// is about (5-8), the same content as a notice, graph or article (9-12),
// sentence order (13-15), the gap in a paragraph (16-18), texts with two
// questions (19-24), newspaper headlines (25-27), longer gaps (28-31), the
// same content (32-34), the topic (35-38), where a sentence fits (39-41),
// then a story, an essay, an editorial and an opinion piece (42-50).
// Underlined parts of the real test are shown in 〈 〉.
const I1 = "(  )에 들어갈 가장 알맞은 것을 고르십시오.";
const I1_EN = "Choose the grammar that fits the gap.";
const I3 = "다음 밑줄 친 부분과 의미가 비슷한 것을 고르십시오.";
const I3_EN = "The underlined part is shown in 〈 〉. Choose the expression closest in meaning.";
const I5 = "다음은 무엇에 대한 글인지 고르십시오.";
const I5_EN = `${IMAGE_NOTE} What is it about?`;
const I9 = "다음 글 또는 그래프의 내용과 같은 것을 고르십시오.";
const I9_EN = "Choose the sentence that matches the notice, graph or article.";
const I13 = "다음을 순서대로 맞게 배열한 것을 고르십시오.";
const I13_EN = "Choose the order that makes a connected text. A sentence that starts with a connective (그래서, 하지만, 이처럼) can't come first.";
const I16 = "다음을 읽고 (  )에 들어갈 내용으로 가장 알맞은 것을 고르십시오.";
const I16_EN = "Choose what fits the gap, using the sentences before and after it.";
const I19 = "다음을 읽고 물음에 답하십시오.";
const I19_EN = "Read the text and answer the questions. Underlined parts are shown in 〈 〉.";
const I25 = "다음은 신문 기사의 제목입니다. 가장 잘 설명한 것을 고르십시오.";
const I25_EN = "Headlines pack a lot into a few words, often with figurative expressions. Choose the best explanation.";
const I32 = "다음을 읽고 내용이 같은 것을 고르십시오.";
const I32_EN = "Choose the sentence that matches the text.";
const I35 = "다음 글의 주제로 가장 알맞은 것을 고르십시오.";
const I35_EN = "Choose the topic: the writer's main point, usually stated near the end, not a detail.";
const I39 = "주어진 문장이 들어갈 곳으로 가장 알맞은 것을 고르십시오.";
const I39_EN = "Choose where the given sentence fits. Look for words that point back (이, 그, 이처럼, 예를 들어).";

export const TOPIK_II_1_READING: ExamPaper = weigh(
  {
    id: "reading",
    kind: "reading",
    title: "읽기",
    minutes: 70,
    group: 2,
    tasks: [
      read(I1, undefined, [
        q(1, "친구와 이야기를 (  ) 내려야 할 정류장을 지나쳤다.", ["하다가", "하려고", "하더니", "하도록"], 1, "-다가 marks an action that is interrupted by something else: while talking, I missed my stop. -더니 needs a change seen in someone else, -려고 an aim."),
        q(2, "내일 비가 (  ) 우산을 챙기는 게 좋겠다.", ["오든지", "올지도 모르니까", "오자마자", "오는 대신에"], 2, "-(으)ㄹ지도 모르니까: since it might rain, take an umbrella. A possibility as the reason for advice."),
      ], I1_EN),
      read(I3, undefined, [
        q(3, "갑자기 손님이 〈오는 바람에〉 약속에 늦었다.", ["오는 탓에", "오는 대로", "오는 김에", "오는 동안"], 1, "-는 바람에 gives an unexpected cause with a bad result, like -는 탓에. -는 김에 is 'while I'm at it', -는 대로 'as soon as'."),
        q(4, "그 식당은 한 번쯤 〈가 볼 만하다〉.", ["가 볼 리가 없다", "가 볼 필요가 없다", "가 볼 가치가 있다", "가 보기로 했다"], 3, "-(으)ㄹ 만하다 means something is worth doing: 가 볼 가치가 있다. -(으)ㄹ 리가 없다 means 'there's no way'."),
      ], I3_EN),
      read(I5, "한 번 충전으로 하루 종일!\n가볍게 귀에 꽂고 어디서든 음악을 즐기세요.", [
        q(5, "", ["세탁기", "자전거", "전기밥솥", "무선 이어폰"], 4, "Charged once, worn in the ear (귀에 꽂고), for listening to music: wireless earphones."),
      ], I5_EN),
      read(I5, "아이들의 꿈이 자라는 곳\n매일 오후 4시, 새로운 책과 함께하는 이야기 시간\n어린이 열람실은 2층에 있습니다.", [
        q(6, "", ["병원", "놀이공원", "도서관", "서점"], 3, "A story time with books and a children's reading room (열람실): a library."),
      ], I5_EN),
      read(I5, "쓰지 않는 전기 제품의 플러그는 뽑아 주세요.\n작은 습관이 지구를 지킵니다.", [
        q(7, "", ["에너지 절약", "건강 관리", "안전 교육", "이웃 사랑"], 1, "Unplugging unused appliances to protect the planet: saving energy, 에너지 절약."),
      ], I5_EN),
      read(I5, "· 신청 기간: 5월 1일 ~ 5월 10일\n· 신청 방법: 홈페이지 접수\n· 문의: 02-123-4567", [
        q(8, "", ["사용 방법", "상품 소개", "주의 사항", "신청 안내"], 4, "Dates, method and a contact number for applying: information on how to apply, 신청 안내."),
      ], I5_EN),
      read(
        I9,
        { title: "제5회 한강 걷기 대회", body: "일시: 10월 셋째 주 토요일 오전 9시\n장소: 여의도 한강공원\n코스: 5km, 10km\n참가비: 무료 (기념품 제공)\n※ 신청은 대회 일주일 전까지 홈페이지에서 할 수 있습니다." },
        [q(9, "", ["대회는 오후에 시작한다.", "참가비를 내야 한다.", "참가자는 두 가지 코스 중 하나를 고를 수 있다.", "대회 당일에도 신청할 수 있다."], 3, "코스: 5km, 10km, two courses to choose from. It starts at 9 a.m., it's free, and sign-up closes a week before.")],
        I9_EN
      ),
      read(
        I9,
        { title: "직장인이 퇴근 후 하는 활동 (복수 응답)", body: "휴식 62%\n운동 35%\n자기 계발 28%\n취미 활동 21%" },
        [q(10, "", ["운동을 하는 직장인이 가장 많다.", "자기 계발을 하는 직장인이 취미 활동을 하는 직장인보다 많다.", "휴식을 하는 직장인은 절반이 안 된다.", "취미 활동이 두 번째로 많다."], 2, "28% is more than 21%. Rest comes first (62%, more than half) and exercise second.")],
        `In the real test this is a bar chart; here its figures are given. ${I9_EN}`
      ),
      read(I9, "지난 주말 부산 해운대에서 열린 모래 축제에 약 30만 명이 다녀갔다. 올해는 처음으로 관광객이 직접 모래 작품을 만들어 보는 체험 행사가 마련되어 큰 인기를 끌었다. 축제를 연 구청은 내년에는 행사 기간을 이틀 더 늘릴 계획이라고 밝혔다.", [
        q(11, "", ["관광객이 모래 작품을 만들어 볼 수 있었다.", "축제에 3만 명이 참가했다.", "체험 행사는 매년 열렸다.", "내년에는 행사 기간이 줄어든다."], 1, "관광객이 직접 모래 작품을 만들어 보는 체험 행사: visitors could make sand sculptures, for the first time (처음으로) this year. About 300,000 came, and next year's festival will be longer."),
      ], I9_EN),
      read(I9, "최근 오래된 시장을 청년 창업 공간으로 바꾸는 사례가 늘고 있다. 대전의 한 시장은 비어 있던 가게 스무 곳을 청년들에게 2년 동안 무료로 빌려주었다. 그 결과 시장을 찾는 젊은 손님이 늘었고, 원래 장사를 하던 상인들의 매출도 함께 올랐다.", [
        q(12, "", ["청년들은 가게를 비싸게 빌렸다.", "시장의 원래 상인들도 매출이 늘었다.", "시장을 찾는 젊은 손님이 줄었다.", "빈 가게는 다섯 곳이었다."], 2, "원래 장사를 하던 상인들의 매출도 함께 올랐다: the existing traders' sales rose too. Twenty empty shops were lent free for two years."),
      ], I9_EN),
      read(I13, "(가) 그래서 요즘은 필요한 물건을 미리 적어 가서 산다.\n(나) 나는 예전에 장을 볼 때 계획 없이 물건을 샀다.\n(다) 그러다 보니 사 놓고 쓰지 않는 물건이 많았다.\n(라) 덕분에 돈도 아끼고 냉장고도 깨끗해졌다.", [
        q(13, "", ["(나)-(가)-(다)-(라)", "(다)-(나)-(라)-(가)", "(다)-(가)-(나)-(라)", "(나)-(다)-(가)-(라)"], 4, "The old habit (나), its result (다, 그러다 보니), the new habit (가, 그래서) and its benefit (라, 덕분에)."),
      ], I13_EN),
      read(I13, "(가) 하지만 막상 해 보니 생각보다 재미있었다.\n(나) 처음에는 사람들 앞에서 말하는 것이 너무 떨려서 그만두고 싶었다.\n(다) 지난 학기에 나는 학교 토론 동아리에 들어갔다.\n(라) 이제는 다른 사람의 의견을 듣고 내 생각을 정리하는 것이 즐겁다.", [
        q(14, "", ["(다)-(가)-(나)-(라)", "(다)-(나)-(가)-(라)", "(나)-(다)-(라)-(가)", "(나)-(가)-(다)-(라)"], 2, "Joining the club (다), nerves at first (나, 처음에는), then 하지만 막상 해 보니 (가), and now (라, 이제는)."),
      ], I13_EN),
      read(I13, "(가) 이처럼 나무는 도시의 온도를 낮추는 역할을 한다.\n(나) 여름철 도시는 주변 지역보다 기온이 높다.\n(다) 그런데 나무가 많은 공원은 주변보다 기온이 2~3도 낮다.\n(라) 건물과 도로가 열을 저장했다가 내보내기 때문이다.", [
        q(15, "", ["(나)-(다)-(라)-(가)", "(라)-(나)-(가)-(다)", "(라)-(다)-(나)-(가)", "(나)-(라)-(다)-(가)"], 4, "The fact (나), its cause (라, -기 때문이다), the contrast with parks (다, 그런데) and the conclusion (가, 이처럼)."),
      ], I13_EN),
      read(I16, "도자기를 만들 때 가장 중요한 과정 중 하나는 굽는 과정이다. 같은 흙으로 만들어도 가마의 온도와 굽는 시간에 따라 (  ). 그래서 도자기를 만드는 사람들은 불을 다루는 법을 익히는 데 오랜 시간을 들인다.", [
        q(16, "", ["색과 단단함이 달라진다", "흙의 양이 늘어난다", "모양을 바꿀 수 없다", "무게가 똑같아진다"], 1, "-에 따라 (depending on) calls for a difference: the same clay comes out different in colour and hardness depending on the kiln."),
      ], I16_EN),
      read(I16, "길을 걸으면서 휴대폰을 보는 사람이 많다. 이렇게 걸으면 시야가 좁아져서 (  ). 실제로 걸으면서 휴대폰을 사용하다가 일어나는 사고가 해마다 늘고 있다.", [
        q(17, "", ["길을 빨리 찾을 수 있다", "주변의 위험을 알아차리기 어렵다", "걷는 속도가 빨라진다", "눈이 좋아진다"], 2, "A narrower field of vision (시야가 좁아지다) makes it hard to notice dangers around you, which the accidents in the next sentence confirm."),
      ], I16_EN),
      read(I16, "많은 사람들이 실수를 숨기려고 한다. 하지만 실수를 인정하고 그 원인을 분석하면 (  ). 같은 실수를 반복하지 않게 되고 다음에 더 좋은 결과를 낼 수 있기 때문이다.", [
        q(18, "", ["다른 사람의 신뢰를 잃는다", "일을 그만둬야 한다", "오히려 성장의 기회가 된다", "실수가 더 많아진다"], 3, "하지만 turns against hiding mistakes, and the next sentence gives the benefits: admitting a mistake becomes a chance to grow. 오히려 means 'on the contrary'."),
      ], I16_EN),
      read(I19, "사람들은 흔히 새해가 되면 거창한 목표를 세운다. (  ) 몇 주가 지나면 대부분 그 목표를 잊어버린다. 전문가들은 목표가 너무 크면 시작하기도 전에 부담을 느끼기 때문이라고 말한다. 따라서 '매일 한 시간 운동하기'보다는 '저녁 먹고 10분 걷기'처럼 작고 구체적인 목표를 세우는 것이 좋다. 작은 성공이 쌓이면 자신감이 생기고 더 큰 목표에도 도전할 수 있다.", [
        q(19, "(  )에 들어갈 알맞은 것을 고르십시오.", ["그런데", "그러므로", "게다가", "예를 들어"], 1, "Grand goals are set, but soon forgotten: 그런데 turns to the unexpected outcome. 그러므로 would make forgetting a consequence, 게다가 would add a similar point."),
        q(20, "윗글의 주제로 가장 알맞은 것을 고르십시오.", ["새해에는 큰 목표를 세워야 한다.", "운동은 매일 해야 한다.", "목표는 작고 구체적으로 세우는 것이 좋다.", "목표를 잊어버리는 것은 당연하다."], 3, "따라서 introduces the writer's point: set small, concrete goals, because small successes build confidence."),
      ], I19_EN),
      read(I19, "요즘 기업들은 신제품을 내놓기 전에 소비자의 반응을 미리 알아보려고 (  ). 온라인에서 일부 소비자에게 제품을 먼저 써 보게 하고 의견을 듣거나, 짧은 기간 동안만 문을 여는 매장을 열어 시장의 분위기를 살피기도 한다. 이렇게 얻은 의견은 제품을 고치는 데 활용된다. 소비자의 목소리를 듣는 것이 곧 성공의 열쇠가 된 것이다.", [
        q(21, "(  )에 들어갈 알맞은 것을 고르십시오.", ["발 벗고 나선다", "손을 뗀다", "눈을 감는다", "입을 모은다"], 1, "발 벗고 나서다 is to throw yourself into something eagerly. 손을 떼다 is to give up on it, 입을 모으다 to say the same thing together."),
        q(22, "윗글의 내용과 같은 것을 고르십시오.", ["기업들은 신제품을 내놓은 후에만 의견을 듣는다.", "소비자의 목소리는 성공과 관계가 없다.", "짧은 기간만 여는 매장은 없다.", "기업들은 소비자의 의견을 제품을 고치는 데 활용한다."], 4, "The text says the feedback is used to improve the product: 이렇게 얻은 의견은 제품을 고치는 데 활용된다. Companies ask before launching (내놓기 전에), not only after."),
      ], I19_EN),
      read(I19, "초등학교 3학년 때 나는 반 대표로 글짓기 대회에 나가게 되었다. 대회 날 아침, 엄마는 내 손에 작은 쪽지를 쥐여 주셨다. '잘하려고 하지 말고 즐겁게 쓰고 와.' 대회장에 앉아 하얀 원고지를 보는 순간 〈머릿속이 하얘졌다〉. 손에 땀이 나고 아무 생각도 나지 않았다. 그때 주머니 속 쪽지가 생각났다. 나는 쪽지를 펴서 다시 읽고 천천히 숨을 쉬었다. 그리고 우리 집 마당의 감나무 이야기를 쓰기 시작했다. 상은 받지 못했지만 그날 나는 처음으로 글 쓰는 것이 즐겁다고 느꼈다. 그 쪽지는 지금도 내 책상 서랍 속에 있다.", [
        q(23, "밑줄 친 부분에 나타난 '나'의 심정으로 가장 알맞은 것을 고르십시오.", ["당황스럽다", "자랑스럽다", "만족스럽다", "후회스럽다"], 1, "머릿속이 하얘지다 (one's mind goes blank), with sweaty hands and no ideas: panic and confusion, 당황스럽다."),
        q(24, "윗글의 내용과 같은 것을 고르십시오.", ["나는 글짓기 대회에서 상을 받았다.", "엄마는 대회장에 같이 들어가셨다.", "나는 감나무에 대한 글을 썼다.", "그 쪽지는 지금 남아 있지 않다."], 3, "감나무 이야기를 쓰기 시작했다: the writer wrote about the persimmon tree. No prize, and the note is still in the drawer."),
      ], I19_EN),
      read(I25, undefined, [
        q(25, "꽃샘추위 기승, 봄옷 입은 시민들 '깜짝'", ["봄에 갑자기 날씨가 추워져서 봄옷을 입은 사람들이 놀랐다.", "봄옷 가격이 크게 올라서 시민들이 놀랐다.", "꽃이 일찍 피어서 시민들이 놀랐다.", "추운 날씨 때문에 꽃 축제가 취소되었다."], 1, "꽃샘추위 is a cold snap in early spring ('cold that envies the flowers'), and 기승 means it's at full force. 깜짝 shows the surprise."),
        q(26, "1인 가구 겨냥한 소포장 채소 '불티'", ["채소 가격이 올라서 1인 가구가 채소를 덜 산다.", "큰 포장 채소가 작은 포장보다 인기가 많다.", "혼자 사는 사람을 위해 작게 포장한 채소가 잘 팔린다.", "1인 가구가 채소를 직접 기르기 시작했다."], 3, "겨냥하다 is to aim at, and 불티(나게 팔리다) means selling like hot cakes: small packs aimed at one-person households are flying off the shelves."),
        q(27, "연휴 첫날 고속도로 '몸살', 귀성길 평소 두 배", ["고속도로 공사가 연휴 첫날 시작되었다.", "연휴 첫날 고속도로가 많이 막혀서 고향에 가는 데 평소보다 두 배 걸렸다.", "고향에 가는 사람이 평소보다 두 배 줄었다.", "연휴 동안 고속도로 이용료가 두 배로 올랐다."], 2, "몸살 (aches from exhaustion) is used for roads strained by traffic, and 귀성길 is the journey home for a holiday: it took twice as long as usual."),
      ], I25_EN),
      read(I16, "다른 사람의 이야기를 들을 때 고개를 끄덕이거나 '그렇군요'라고 반응하는 것은 사소해 보이지만 대화에서 중요한 역할을 한다. 이러한 반응은 말하는 사람에게 (  ) 신호가 되기 때문이다. 상대방은 자신의 말이 존중받고 있다고 느끼고 더 편하게 이야기를 이어 간다.", [
        q(28, "", ["이야기를 잘 듣고 있다는", "이야기를 그만하라는", "다른 주제로 바꾸자는", "대화가 지루하다는"], 1, "The next sentence says the speaker feels respected and keeps talking: nods signal that you're listening."),
      ], I16_EN),
      read(I16, "식물도 서로 소통한다는 연구 결과가 있다. 어떤 식물은 벌레에게 잎을 먹히면 특별한 냄새를 낸다. 그러면 주변의 다른 식물들이 이 냄새를 맡고 벌레가 싫어하는 물질을 미리 만들어 낸다. 즉, 식물은 냄새를 통해 (  ) 것이다.", [
        q(29, "", ["벌레를 불러 모으는", "주변 식물에게 위험을 알리는", "햇빛을 더 많이 받는", "잎을 빨리 자라게 하는"], 2, "즉 (that is) sums up: the smell warns nearby plants, which then prepare their defences."),
      ], I16_EN),
      read(I16, "박물관 관람 방식이 바뀌고 있다. 예전에는 유리 너머의 유물을 조용히 바라보는 것이 전부였다. 하지만 요즘은 가상 현실 기술을 이용해 유물이 만들어지던 시대를 직접 체험하거나, 유물을 입체 화면으로 돌려 보며 (  ). 이러한 변화 덕분에 박물관을 지루한 곳으로 여기던 젊은 세대의 방문이 늘고 있다.", [
        q(30, "", ["관람객이 유물을 직접 만져서 망가뜨리기도 한다", "박물관에 가지 않아도 된다", "원하는 부분을 자세히 살펴볼 수도 있다", "유물이 사라지기도 한다"], 3, "Turning an object round on a 3D screen lets you examine whatever part you want: -기도 하다 adds a second new possibility to the first (-거나)."),
      ], I16_EN),
      read(I16, "기업이 직원을 뽑을 때 경력보다 태도를 중요하게 보는 경우가 많아지고 있다. 업무에 필요한 기술은 입사 후에 교육으로 충분히 익힐 수 있지만, (  ) 쉽게 바뀌지 않기 때문이다. 그래서 면접에서도 지원자가 어려운 상황에 어떻게 대처했는지를 묻는 질문이 늘고 있다.", [
        q(31, "", ["컴퓨터 사용 능력은", "외국어 실력은", "회사의 규칙은", "일에 대한 태도와 습관은"], 4, "-지만 contrasts skills that can be taught with what doesn't change easily: attitude, the thing employers now value."),
      ], I16_EN),
      read(I32, "한지는 닥나무 껍질로 만든 한국의 전통 종이이다. 한지는 바람이 잘 통하고 습기를 조절하는 성질이 있어서 예전에는 창문에 바르는 데 많이 쓰였다. 또 질기고 오래가기 때문에 천 년이 넘은 한지 문서가 지금까지 남아 있기도 하다. 최근에는 한지로 옷이나 가방, 조명 등을 만드는 등 활용 범위가 넓어지고 있다.", [
        q(32, "", ["한지는 쉽게 찢어져서 오래 보관하기 어렵다.", "한지는 예전에 창문에 바르는 데 쓰였다.", "한지는 요즘 종이로만 쓰인다.", "한지는 나무 열매로 만든다."], 2, "창문에 바르는 데 많이 쓰였다. Hanji is tough (질기다), made from mulberry bark (껍질), and now used for clothes and lamps too."),
      ], I32_EN),
      read(I32, "판소리는 한 명의 소리꾼이 북을 치는 고수의 장단에 맞추어 노래와 말, 몸짓으로 긴 이야기를 들려주는 공연이다. 고수는 장단을 맞추는 동시에 '얼씨구', '좋다' 같은 추임새를 넣어 소리꾼의 흥을 돋운다. 관객들도 추임새를 하며 공연에 함께 참여한다. 이처럼 판소리는 무대와 관객이 함께 만들어 가는 예술이다.", [
        q(33, "", ["판소리는 여러 명의 소리꾼이 함께 노래한다.", "관객은 공연 중에 소리를 내면 안 된다.", "고수는 북을 치면서 추임새도 넣는다.", "판소리는 짧은 이야기만 들려준다."], 3, "고수는 장단을 맞추는 동시에 … 추임새를 넣어: the drummer keeps the rhythm and calls out encouragement. One singer, long stories, and the audience joins in."),
      ], I32_EN),
      read(I32, "겨울잠을 자는 동물들은 겨울 동안 몸의 온도를 낮추고 심장 박동을 느리게 해서 에너지를 아낀다. 어떤 다람쥐는 겨울잠을 잘 때 체온이 0도 가까이 떨어지기도 한다. 그러나 겨울잠을 자는 동안에도 계속 잠들어 있는 것은 아니다. 대부분의 동물들은 며칠에 한 번씩 깨어나 체온을 올린 뒤 다시 잠이 든다.", [
        q(34, "", ["겨울잠을 자는 동물은 겨울 내내 한 번도 깨지 않는다.", "겨울잠을 자는 동안에는 심장이 빨리 뛴다.", "겨울잠을 잘 때 체온이 올라간다.", "겨울잠을 자는 동물은 에너지를 아끼려고 체온을 낮춘다."], 4, "몸의 온도를 낮추고 … 에너지를 아낀다. Most animals wake every few days, and the heart slows down."),
      ], I32_EN),
      read(I35, "많은 사람들이 운동은 땀을 많이 흘리고 힘들어야 효과가 있다고 생각한다. 그러나 무리한 운동은 오히려 부상을 일으키고 운동을 오래 계속하지 못하게 만든다. 운동의 효과는 강도보다 꾸준함에서 나온다. 자신의 체력에 맞는 운동을 즐겁게 오래 하는 것이 건강을 지키는 가장 좋은 방법이다.", [
        q(35, "", ["운동은 힘들수록 효과가 크다.", "자신에게 맞는 운동을 꾸준히 하는 것이 중요하다.", "운동할 때 땀을 많이 흘려야 한다.", "부상을 당하면 운동을 그만둬야 한다."], 2, "The first sentence is the view the writer rejects; the point is that consistency (꾸준함), not intensity, brings results."),
      ], I35_EN),
      read(I35, "아이들은 놀이를 통해 세상을 배운다. 블록을 쌓으며 공간을 이해하고, 친구와 역할 놀이를 하며 규칙과 배려를 익힌다. 그런데 요즘 아이들은 학원 일정 때문에 마음껏 놀 시간이 부족하다. 놀이는 시간을 낭비하는 것이 아니라 아이의 성장에 꼭 필요한 과정이라는 점을 어른들이 알아야 한다.", [
        q(36, "", ["아이들은 학원에 더 많이 다녀야 한다.", "블록 놀이는 공간 감각을 키운다.", "아이들의 성장을 위해 놀 시간을 보장해야 한다.", "역할 놀이는 규칙을 배우는 데 도움이 안 된다."], 3, "The blocks are an example; the topic is the last sentence: play is necessary for growth, so children need time to play."),
      ], I35_EN),
      read(I35, "음식물 쓰레기는 처리 과정에서 많은 비용이 들고 온실가스도 발생시킨다. 이 문제를 해결하려면 쓰레기를 잘 처리하는 기술도 필요하지만, 그보다 먼저 쓰레기 자체를 줄이려는 노력이 있어야 한다. 장을 보기 전에 냉장고를 확인하고 먹을 만큼만 요리하는 작은 습관이 가장 효과적인 해결책이다.", [
        q(37, "", ["음식물 쓰레기를 처음부터 줄이는 습관이 가장 중요하다.", "음식물 쓰레기 처리 기술을 개발해야 한다.", "냉장고를 자주 청소해야 한다.", "음식물 쓰레기는 온실가스와 관계가 없다."], 1, "그보다 먼저 … 줄이려는 노력: before better processing, the key is producing less waste through everyday habits."),
      ], I35_EN),
      read(I35, "번역 프로그램의 성능이 좋아지면서 외국어를 배울 필요가 없다고 말하는 사람들이 있다. 그러나 언어는 단순히 정보를 전달하는 도구가 아니다. 한 언어를 배운다는 것은 그 언어를 쓰는 사람들의 생각과 문화를 이해하는 것이다. 기계가 문장은 바꿔 줄 수 있어도 그 속에 담긴 마음까지 전해 주기는 어렵다.", [
        q(38, "", ["번역 프로그램의 성능은 아직 나쁘다.", "외국어 공부는 정보를 얻기 위해서만 한다.", "기계가 사람의 마음을 전할 수 있다.", "번역 프로그램이 있어도 외국어를 배우는 것은 의미가 있다."], 4, "그러나 rejects the opening view: learning a language means understanding its speakers, which machines can't do for you."),
      ], I35_EN),
      read(I39, "사람들은 보통 왼쪽 뇌는 논리, 오른쪽 뇌는 감성을 담당한다고 생각한다. (㉠) 이 때문에 좌뇌형 인간, 우뇌형 인간이라는 말도 생겼다. (㉡) 하지만 최근 연구들은 이러한 생각이 지나치게 단순하다는 것을 보여 준다. (㉢) 대부분의 활동에서 양쪽 뇌는 서로 정보를 주고받으며 함께 일한다. (㉣)", [
        q(39, "〈언어를 이해하는 것처럼 흔히 왼쪽 뇌의 일로 알려진 활동도 마찬가지이다.〉", ["㉠", "㉡", "㉢", "㉣"], 4, "마찬가지이다 (it's the same) needs the claim just before it, that both halves work together in most activities: even language, thought of as left-brain work, is no exception. So it goes at ㉣."),
      ], I39_EN),
      read(I39, "커피 찌꺼기는 보통 쓰레기로 버려진다. (㉠) 하지만 커피 찌꺼기는 활용할 수 있는 곳이 많다. (㉡) 냄새를 흡수하는 성질이 있어서 신발장이나 냉장고에 두면 나쁜 냄새를 없애 준다. (㉢) 또한 잘 말려서 흙에 섞으면 식물의 거름으로 쓸 수 있다. (㉣)", [
        q(40, "〈우리나라에서만 한 해에 십만 톤이 넘게 버려진다고 한다.〉", ["㉠", "㉡", "㉢", "㉣"], 1, "The sentence adds how much is thrown away, so it follows 쓰레기로 버려진다, before 하지만 turns to the uses."),
      ], I39_EN),
      read(I39, "『바람의 집』은 작가 김하늘이 10년 만에 내놓은 장편 소설이다. (㉠) 소설은 제주도의 작은 마을을 배경으로 세 세대에 걸친 한 가족의 이야기를 담고 있다. (㉡) 작가는 섬사람들의 삶을 따뜻하면서도 담담한 문체로 그려 냈다. (㉢) 특히 제주 방언을 그대로 살린 대화는 이야기에 생생함을 더한다. (㉣)", [
        q(41, "〈할머니와 어머니, 그리고 딸이 각자의 시선으로 이야기를 이끌어 간다.〉", ["㉠", "㉡", "㉢", "㉣"], 2, "Grandmother, mother and daughter are the three generations (세 세대) just mentioned, so the sentence goes at ㉡."),
      ], I39_EN),
      read(I19, "아버지는 평생 시골에서 사과 농사를 지으셨다. 내가 서울에서 직장을 구했을 때 아버지는 아무 말 없이 사과 한 상자를 차에 실어 주셨다. 서울 생활은 생각보다 외로웠다. 늦게 퇴근한 밤이면 나는 그 상자에서 사과를 하나씩 꺼내 먹었다. 상자가 거의 비었을 무렵, 맨 아래에서 종이 한 장이 나왔다. 삐뚤삐뚤한 글씨로 '힘들면 언제든 와라.'라고 적혀 있었다. 〈나는 그 종이를 한참 동안 손에 쥐고 있었다.〉 다음 날 아침, 나는 오랜만에 아버지께 전화를 걸었다.", [
        q(42, "밑줄 친 부분에 나타난 '나'의 심정으로 가장 알맞은 것을 고르십시오.", ["부담스럽다", "실망스럽다", "뭉클하다", "억울하다"], 3, "A lonely child finds the father's hidden message; holding it for a long time shows being deeply moved: 가슴이 뭉클하다."),
        q(43, "윗글의 내용과 같은 것을 고르십시오.", ["아버지는 서울에서 사과 농사를 지으셨다.", "나는 서울 생활이 외로웠다.", "아버지는 나에게 긴 편지를 쓰셨다.", "나는 사과 상자를 받자마자 종이를 발견했다."], 2, "서울 생활은 생각보다 외로웠다. The note was one line, found when the box was almost empty."),
      ], I19_EN),
      read(I19, "최근 동네 서점이 다시 주목받고 있다. 대형 온라인 서점보다 책값이 비싸고 책의 종류도 적지만, 사람들은 일부러 동네 서점을 찾는다. 동네 서점은 주인이 직접 고른 책을 소개하고, 작가와의 만남이나 독서 모임 같은 행사를 열어 사람들이 모이는 공간이 되고 있다. 즉 사람들은 동네 서점에서 단순히 책을 사는 것이 아니라 (  ). 책을 매개로 이웃과 연결되는 경험이 동네 서점의 가장 큰 경쟁력인 셈이다.", [
        q(44, "윗글의 주제로 가장 알맞은 것을 고르십시오.", ["동네 서점은 책값을 내려야 한다.", "동네 서점은 사람들을 연결하는 공간으로서 가치가 있다.", "온라인 서점이 동네 서점보다 낫다.", "동네 서점은 책의 종류를 늘려야 한다."], 2, "The last sentence: connecting with neighbours through books is the local bookshop's greatest strength (경쟁력)."),
        q(45, "(  )에 들어갈 내용으로 가장 알맞은 것을 고르십시오.", ["경험과 관계를 함께 얻는다", "싼 책을 찾는다", "빨리 배송을 받는다", "책을 빌려 간다"], 1, "단순히 A가 아니라 B: not just buying books but gaining experiences and relationships, which the next sentence restates."),
      ], I19_EN),
      read(I19, "정부는 내년부터 모든 공공 기관의 회의 자료를 종이 대신 전자 문서로만 만들기로 했다. 종이 사용을 줄여 환경을 보호하고 비용도 아끼겠다는 것이다. 취지는 바람직하다. 그러나 이 정책이 성공하려면 몇 가지를 먼저 점검해야 한다. 우선 전자 기기 사용에 익숙하지 않은 직원들을 위한 교육이 필요하다. 또한 전자 기기를 새로 사거나 자주 바꾸면 오히려 환경에 부담이 될 수 있다. 정책의 목적이 환경 보호라면 기기 구입부터 폐기까지 전 과정을 따져 보는 신중함이 필요하다.", [
        q(46, "윗글에 나타난 필자의 태도로 가장 알맞은 것을 고르십시오.", ["정책의 취지에 공감하면서도 보완할 점을 지적하고 있다.", "정책을 즉시 중단해야 한다고 주장하고 있다.", "정책의 효과를 높이 평가하며 지지하고 있다.", "정책을 만든 과정을 자세히 소개하고 있다."], 1, "취지는 바람직하다. 그러나 …: the writer agrees with the aim but points out what must be checked first."),
        q(47, "윗글의 내용과 같은 것을 고르십시오.", ["이 정책은 이미 시행되고 있다.", "정부는 회의 자료를 종이로만 만들기로 했다.", "전자 기기를 자주 바꾸면 환경에 부담이 될 수 있다.", "모든 직원이 전자 기기 사용에 익숙하다."], 3, "전자 기기를 새로 사거나 자주 바꾸면 오히려 환경에 부담이 될 수 있다. The policy starts next year."),
      ], I19_EN),
      read(I19, "최근 일부 지방 자치 단체들이 청년 인구를 늘리기 위해 이사 오는 청년에게 정착 지원금을 주고 있다. 수백만 원의 지원금은 분명 청년들에게 매력적이다. 하지만 지원금을 받고 이사 온 청년들 중 상당수가 지원 기간이 끝나면 다시 도시로 떠난다는 조사 결과가 있다. 이는 청년들이 지역에 머물지 않는 진짜 이유가 돈이 아니라는 것을 보여 준다. 청년들은 안정적인 일자리와 문화생활을 즐길 수 있는 환경을 원한다. 따라서 지방 자치 단체는 일회성 지원금보다 (  ) 정책에 힘을 쏟아야 한다. 〈돈으로 사람을 잠시 불러올 수는 있어도 붙잡아 둘 수는 없다.〉", [
        q(48, "필자가 이 글을 쓴 목적으로 가장 알맞은 것을 고르십시오.", ["청년 정착 지원금 제도를 소개하기 위해", "지역 청년 정책의 방향을 바꿀 것을 촉구하기 위해", "도시 생활의 장점을 알리기 위해", "지원금 신청 방법을 안내하기 위해"], 2, "따라서 … 힘을 쏟아야 한다: the writer argues local governments should change course, from one-off grants to lasting conditions."),
        q(49, "(  )에 들어갈 내용으로 가장 알맞은 것을 고르십시오.", ["지원금 액수를 늘리는", "일자리와 생활 환경을 만드는", "청년들을 도시로 보내는", "이사 비용을 돌려받는"], 2, "The sentence before says young people want stable jobs and a good living environment, so that is what policy should build."),
        q(50, "밑줄 친 부분에 나타난 필자의 태도로 가장 알맞은 것을 고르십시오.", ["지원금 정책의 한계를 비판하고 있다.", "지원금 정책의 효과를 기대하고 있다.", "청년들의 선택을 이해하지 못하고 있다.", "도시로 떠나는 청년들을 걱정하고 있다."], 1, "Money can bring people for a while but can't keep them: a criticism of the limits of grants."),
      ], I19_EN),
    ],
  },
  () => 2
);
