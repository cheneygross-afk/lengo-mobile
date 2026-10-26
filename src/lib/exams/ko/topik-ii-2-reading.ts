// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-ii-2-reading.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { IMAGE_NOTE, q, read, weigh } from "./text";

// TOPIK II practice test 2 -- 읽기 (reading), questions 1-50, 70 minutes,
// every question 2 points, in the real test's order of question types (see
// topik-ii-1-reading.ts). Underlined parts of the real test are shown in 〈 〉.
const I1 = "(  )에 들어갈 가장 알맞은 것을 고르십시오.";
const I1_EN = "Choose the grammar that fits the gap.";
const I3 = "다음 밑줄 친 부분과 의미가 비슷한 것을 고르십시오.";
const I3_EN = "The underlined part is shown in 〈 〉. Choose the expression closest in meaning.";
const I5 = "다음은 무엇에 대한 글인지 고르십시오.";
const I5_EN = `${IMAGE_NOTE} What is it about?`;
const I9 = "다음 글 또는 그래프의 내용과 같은 것을 고르십시오.";
const I9_EN = "Choose the sentence that matches the notice, graph or article.";
const I13 = "다음을 순서대로 맞게 배열한 것을 고르십시오.";
const I13_EN = "Choose the order that makes a connected text. A sentence that starts with a connective (그래서, 그런데, 그 결과) can't come first.";
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
const I39_EN = "Choose where the given sentence fits. Look for words that point back (이, 그, 이는, 이 층).";

export const TOPIK_II_2_READING: ExamPaper = weigh(
  {
    id: "reading",
    kind: "reading",
    title: "읽기",
    minutes: 70,
    group: 2,
    tasks: [
      read(I1, undefined, [
        q(1, "아침을 (  ) 출근했더니 배가 너무 고프다.", ["먹지 않고", "먹고 나서", "먹으려고", "먹을수록"], 1, "-지 않고 means 'without doing': I went to work without breakfast, so now I'm starving. -았/었더니 links what I did to what happened."),
        q(2, "그 사람은 마치 모든 것을 다 (  ) 이야기했다.", ["알 텐데", "아는 것처럼", "알기 위해", "알더라도"], 2, "마치 (as if) goes with -(으)ㄴ/는 것처럼: he talked as if he knew everything."),
      ], I1_EN),
      read(I3, undefined, [
        q(3, "시험에 〈합격하기 위해서〉 매일 밤늦게까지 공부했다.", ["합격하도록", "합격하자마자", "합격하더라도", "합격하는 대로"], 1, "-기 위해서 gives a purpose, as -도록 can: so as to pass. -자마자 and -는 대로 mean 'as soon as', -더라도 'even if'."),
        q(4, "하늘을 보니 오후에는 비가 〈올 모양이다〉.", ["올 리가 없다", "올 것 같다", "오기 마련이다", "오는 척한다"], 2, "-(으)ㄹ 모양이다 is a guess from what you see (the sky), like -(으)ㄹ 것 같다."),
      ], I3_EN),
      read(I5, "하루의 피로를 풀어 드립니다.\n누우면 아침까지 푹~", [
        q(5, "", ["냉장고", "운동화", "침대", "에어컨"], 3, "Lying down (누우면) and sleeping soundly till morning (푹): a bed."),
      ], I5_EN),
      read(I5, "싱싱한 채소를 문 앞까지!\n밤 11시 전에 주문하면 다음 날 아침 7시 도착", [
        q(6, "", ["식품 배송 서비스", "식당", "꽃집", "이삿짐 센터"], 1, "Fresh vegetables delivered to your door by 7 a.m.: a grocery delivery service."),
      ], I5_EN),
      read(I5, "작은 불씨가 큰 산불로!\n산에서는 담배를 피우지 마세요.", [
        q(7, "", ["환경 미화", "건강 관리", "교통 안전", "화재 예방"], 4, "A small spark (불씨) can become a wildfire (산불): it's about preventing fires, 화재 예방."),
      ], I5_EN),
      read(I5, "· 제품을 물에 넣지 마십시오.\n· 어린이의 손이 닿지 않는 곳에 보관하십시오.\n· 사용 후에는 전원을 꺼 주십시오.", [
        q(8, "", ["교환 안내", "주의 사항", "제품 소개", "이용 시간"], 2, "Things you must not do and must remember with a product: precautions, 주의 사항."),
      ], I5_EN),
      read(
        I9,
        { title: "제10회 시민 사진 공모전", body: "주제: 우리 동네의 사계절\n접수 기간: 9월 1일 ~ 9월 30일\n접수 방법: 이메일 접수 (1인 3작품까지)\n시상: 대상 1명 100만 원, 우수상 3명 각 30만 원" },
        [q(9, "", ["한 사람이 다섯 작품을 낼 수 있다.", "작품은 우편으로 보내야 한다.", "우수상은 세 명에게 준다.", "공모전은 올해 처음 열린다."], 3, "우수상 3명: three people get the merit prize. Up to three entries each, by e-mail, and this is the 10th contest (제10회).")],
        I9_EN
      ),
      read(
        I9,
        { title: "20대가 여가 시간에 가장 많이 하는 활동", body: "영상 시청: 2016년 30% → 2026년 45%\n운동: 2016년 15% → 2026년 22%\n독서: 2016년 20% → 2026년 8%\n여행: 2016년 10% → 2026년 12%" },
        [q(10, "", ["2026년에는 독서를 하는 비율이 늘었다.", "두 해 모두 영상 시청이 가장 많다.", "운동을 하는 비율은 줄었다.", "2016년에는 여행이 가장 많았다."], 2, "Watching videos leads in both years (30%, then 45%). Reading fell from 20% to 8%, and exercise rose.")],
        `In the real test this is a bar chart; here its figures are given. ${I9_EN}`
      ),
      read(I9, "서울시가 이달부터 밤 12시 이후에 운행하는 심야 버스 노선을 4개 더 늘렸다. 심야 버스는 늦게 퇴근하는 직장인과 학생들의 이용이 많아 지난해에만 이용객이 20% 증가했다. 시는 이용객의 의견을 반영해 앞으로도 노선을 계속 조정할 계획이다.", [
        q(11, "", ["심야 버스 노선이 줄었다.", "심야 버스는 밤 10시에 운행을 시작한다.", "시는 노선을 더 이상 바꾸지 않을 것이다.", "지난해 심야 버스 이용객이 늘었다."], 4, "지난해에만 이용객이 20% 증가했다. Four routes were added, the buses run after midnight, and routes will keep being adjusted."),
      ], I9_EN),
      read(I9, "한 대학 연구팀이 고양이도 자신의 이름을 알아듣는다는 연구 결과를 발표했다. 연구팀은 고양이에게 이름과 길이가 비슷한 다른 단어들을 들려준 뒤 마지막에 이름을 불렀다. 그러자 많은 고양이들이 귀나 머리를 움직이며 반응했다. 다만 주인이 아닌 낯선 사람이 불렀을 때는 반응이 조금 약했다.", [
        q(12, "", ["고양이는 자신의 이름에 반응을 보였다.", "고양이는 낯선 사람의 목소리에 더 크게 반응했다.", "연구팀은 이름을 먼저 부른 뒤 다른 단어를 들려주었다.", "고양이는 어떤 단어에도 반응하지 않았다."], 1, "귀나 머리를 움직이며 반응했다 when they heard their name, which came last. Reactions to strangers were weaker."),
      ], I9_EN),
      read(I13, "(가) 그런데 막상 먹어 보니 생각보다 맵지 않았다.\n(나) 처음 한국에 왔을 때 나는 매운 음식을 전혀 먹지 못했다.\n(다) 그래서 친구가 떡볶이를 먹자고 했을 때 걱정이 되었다.\n(라) 그날 이후 떡볶이는 내가 가장 좋아하는 음식이 되었다.", [
        q(13, "", ["(나)-(가)-(다)-(라)", "(나)-(다)-(가)-(라)", "(다)-(나)-(라)-(가)", "(다)-(가)-(라)-(나)"], 2, "Can't eat spicy food (나), so worried (다, 그래서), but it wasn't so hot (가, 그런데 막상), and from then on (라, 그날 이후)."),
      ], I13_EN),
      read(I13, "(가) 지진이 났을 때 가장 중요한 것은 당황하지 않는 것이다.\n(나) 그리고 흔들림이 멈추면 계단을 이용해 밖으로 나간다.\n(다) 먼저 튼튼한 탁자 아래로 들어가 몸을 보호해야 한다.\n(라) 밖에 나가서는 건물에서 멀리 떨어진 넓은 곳으로 이동한다.", [
        q(14, "", ["(가)-(나)-(다)-(라)", "(다)-(가)-(라)-(나)", "(가)-(다)-(나)-(라)", "(다)-(나)-(가)-(라)"], 3, "The general rule (가), then the steps in order: 먼저 (다), 그리고 (나), and once outside (라)."),
      ], I13_EN),
      read(I13, "(가) 그 결과 가게를 찾는 손님이 오히려 늘었다.\n(나) 한 빵집이 저녁 8시 이후에 남은 빵을 반값에 팔기 시작했다.\n(다) 처음에는 제값을 주고 사는 손님이 줄까 봐 걱정했다.\n(라) 하지만 버려지는 빵이 줄었을 뿐만 아니라 가게의 좋은 이미지도 생겼다.", [
        q(15, "", ["(나)-(라)-(가)-(다)", "(다)-(나)-(가)-(라)", "(다)-(라)-(나)-(가)", "(나)-(다)-(라)-(가)"], 4, "The new practice (나), the fear at first (다, 처음에는), what happened instead (라, 하지만) and the result (가, 그 결과)."),
      ], I13_EN),
      read(I16, "우리가 숨을 쉴 때 코로 들어온 공기는 코 안의 털과 점막을 지나면서 먼지가 걸러지고 적당히 따뜻해진다. 반면 입으로 숨을 쉬면 이런 과정을 거치지 않아 (  ). 그래서 의사들은 가능하면 코로 숨을 쉬라고 권한다.", [
        q(16, "", ["차갑고 더러운 공기가 그대로 몸에 들어온다", "공기가 더 깨끗해진다", "목이 따뜻해진다", "숨을 더 깊이 쉴 수 있다"], 1, "반면 (by contrast): without the nose's filtering and warming, cold, dusty air goes straight in."),
      ], I16_EN),
      read(I16, "새로운 언어를 배울 때 많은 사람들이 문법부터 완벽하게 익히려고 한다. 그러나 아이들이 모국어를 배우는 과정을 보면 (  ). 아이들은 문법을 몰라도 많이 듣고 따라 하면서 자연스럽게 말을 익힌다.", [
        q(17, "", ["문법 공부가 가장 먼저이다", "꼭 그럴 필요는 없다", "아이들은 말을 늦게 배운다", "듣기는 중요하지 않다"], 2, "그러나 questions the grammar-first habit, and the next sentence shows children manage without grammar: it isn't necessary."),
      ], I16_EN),
      read(I16, "어떤 일을 미루는 습관은 게으름 때문이라고 생각하기 쉽다. 하지만 심리학자들은 일을 미루는 사람 중에 오히려 완벽주의자가 많다고 말한다. 일을 완벽하게 해내지 못할까 봐 (  ) 시작 자체를 미루는 것이다.", [
        q(18, "", ["기뻐서", "바빠서", "두려워서", "쉬워서"], 3, "-(으)ㄹ까 봐 expresses a fear: afraid they won't do it perfectly, perfectionists put off starting."),
      ], I16_EN),
      read(I19, "오래된 물건을 고쳐 쓰는 수리 카페가 늘고 있다. 수리 카페에서는 고장 난 물건을 가져오면 자원봉사자들이 함께 고쳐 준다. (  ) 고치는 방법을 배울 수도 있어서 다음에는 혼자 고칠 수 있게 된다. 사람들은 물건을 버리지 않고 고쳐 쓰면서 쓰레기를 줄이고 돈도 아낀다. 무엇보다 오래 쓴 물건에 담긴 추억을 지킬 수 있다는 점이 큰 매력이다.", [
        q(19, "(  )에 들어갈 알맞은 것을 고르십시오.", ["게다가", "그러나", "그러므로", "반면에"], 1, "Volunteers fix things with you, and on top of that you learn how: 게다가 adds a further advantage."),
        q(20, "윗글의 내용과 같은 것을 고르십시오.", ["수리 카페에서는 물건을 팔기만 한다.", "수리 카페에서 고치는 방법을 배울 수 있다.", "수리 카페는 점점 줄고 있다.", "수리 카페에서는 전문가만 물건을 고친다."], 2, "고치는 방법을 배울 수도 있어서. Repair cafés are increasing, and volunteers do the fixing with you."),
      ], I19_EN),
      read(I19, "요즘 젊은 세대 사이에서 무지출 챌린지가 유행이다. 하루 동안 돈을 한 푼도 쓰지 않는 것에 도전하는 것이다. 물가가 오르면서 월급만으로 생활하기 어려워지자 젊은이들이 (  ) 절약에 나선 것이다. 이들은 도시락을 싸 다니고 걸어서 출근하며 그 과정을 인터넷에 공유하기도 한다. 전문가들은 이러한 절약이 일시적인 유행으로 끝나지 않으려면 자신에게 맞는 소비 습관을 만드는 것이 중요하다고 말한다.", [
        q(21, "(  )에 들어갈 알맞은 것을 고르십시오.", ["허리띠를 졸라매고", "손을 놓고", "발을 빼고", "눈을 감고"], 1, "허리띠를 졸라매다 (tighten your belt) means to cut spending, as in English. 손을 놓다 is to stop working at something, 발을 빼다 to pull out."),
        q(22, "윗글의 중심 생각으로 가장 알맞은 것을 고르십시오.", ["젊은이들은 돈을 많이 써야 한다.", "도시락을 싸 다니는 것은 불편하다.", "절약이 계속되려면 자신에게 맞는 소비 습관을 만들어야 한다.", "절약 과정을 인터넷에 공유하면 안 된다."], 3, "The last sentence carries the point: saving lasts only if you build spending habits that suit you."),
      ], I19_EN),
      read(I19, "퇴근길 지하철은 언제나 사람으로 가득했다. 그날도 나는 지친 몸으로 손잡이를 잡고 서 있었다. 그때 앞에 앉아 계시던 할머니가 내 가방을 가리키며 말씀하셨다. '무거워 보이는데 이리 줘요. 내가 들고 있을게.' 나는 괜찮다고 했지만 할머니는 웃으며 가방을 무릎 위에 올려놓으셨다. 〈낯선 사람에게 이런 친절을 받아 본 게 언제였는지 기억나지 않았다.〉 내릴 역에 도착해 가방을 받으며 고개를 숙여 인사했다. 그날 집으로 걸어가는 길은 이상하게 가벼웠다.", [
        q(23, "밑줄 친 부분에 나타난 '나'의 심정으로 가장 알맞은 것을 고르십시오.", ["귀찮다", "고마우면서도 놀랍다", "서운하다", "불안하다"], 2, "Kindness from a stranger the writer can't remember ever receiving: grateful and surprised at once. The light walk home confirms it."),
        q(24, "윗글의 내용과 같은 것을 고르십시오.", ["할머니는 나에게 자리를 양보하셨다.", "할머니께서 내 가방을 들어 주셨다.", "그날 지하철에는 사람이 별로 없었다.", "나는 할머니의 짐을 들어 드렸다."], 2, "할머니는 … 가방을 무릎 위에 올려놓으셨다: the grandmother held the writer's bag on her lap. She didn't give up her seat, and the train was packed."),
      ], I19_EN),
      read(I25, undefined, [
        q(25, "기록적 폭우에 출근길 '아수라장'… 지하철 곳곳 운행 중단", ["비가 많이 와서 지하철 요금이 올랐다.", "비가 매우 많이 와서 출근길이 혼란스러웠고 지하철이 여러 곳에서 멈췄다.", "출근 시간이 바뀌어서 지하철이 혼잡했다.", "비가 그쳐서 지하철이 다시 운행을 시작했다."], 2, "기록적 폭우 is record rainfall, 아수라장 means chaos, and 곳곳 운행 중단 says services stopped in many places."),
        q(26, "인기 그룹 콘서트 표 1분 만에 '동나'", ["콘서트가 1분 만에 끝났다.", "콘서트 표 가격이 1분마다 바뀌었다.", "인기 그룹이 콘서트를 취소했다.", "인기 그룹의 콘서트 표가 1분 만에 모두 팔렸다."], 4, "동나다 means to run out completely: every ticket was gone in a minute."),
        q(27, "커피값 줄줄이 인상, 소비자 '한숨'", ["여러 곳에서 커피 가격을 잇따라 올려서 소비자들이 걱정하고 있다.", "커피값이 내려서 소비자들이 기뻐하고 있다.", "커피를 마시는 사람이 줄어서 가게들이 걱정하고 있다.", "소비자들이 커피 가격을 올려 달라고 요구했다."], 1, "줄줄이 means one after another, 인상 a price rise, and 한숨 (a sigh) shows consumers' worry."),
      ], I25_EN),
      read(I16, "사람들은 여행지에서 사진을 찍느라 정작 풍경을 제대로 보지 못하는 경우가 많다. 한 연구에 따르면 사람들은 사진을 찍은 장소보다 (  ) 장소를 더 자세히 기억한다고 한다. 카메라에 기억을 맡기면 뇌가 그 장면을 덜 중요하게 처리하기 때문이다.", [
        q(28, "", ["사진을 찍지 않고 눈으로만 본", "사진을 여러 번 찍은", "친구와 함께 간", "처음 가 본"], 1, "The reason given is that the brain relies on the camera: so places you only looked at are remembered better than photographed ones."),
      ], I16_EN),
      read(I16, "나무로 지은 고층 건물이 늘고 있다. 나무는 불에 약하다고 생각하기 쉽지만, 최근에는 나무를 여러 겹으로 붙여 만든 목재를 사용해 강도를 높였다. 이런 목재는 불이 나도 겉면만 타고 안쪽은 (  ) 오히려 쉽게 무너지지 않는다. 또한 나무는 자라는 동안 탄소를 흡수하기 때문에 친환경 건축 재료로 주목받고 있다.", [
        q(29, "", ["금방 타 버려서", "잘 타지 않아서", "물에 젖어서", "무게가 늘어서"], 2, "Only the surface burns, and the inside doesn't, so the beam keeps standing: 오히려 shows this goes against the expectation that wood is weak in fire."),
      ], I16_EN),
      read(I16, "회의 시간에 아무 의견도 내지 않는 직원을 보면 관심이 없다고 생각하기 쉽다. 하지만 사람에 따라 생각을 정리하는 방식이 다르다. 어떤 사람은 말을 하면서 생각을 정리하지만, 어떤 사람은 (  ). 따라서 회의 전에 안건을 미리 알려 주거나 회의 후에 글로 의견을 받는 방법을 함께 쓰면 더 다양한 의견을 들을 수 있다.", [
        q(30, "", ["회의를 싫어한다", "다른 사람의 의견을 따른다", "회의 시간에 늦는다", "혼자 충분히 생각한 뒤에야 의견을 말한다"], 4, "Contrasted with people who think by talking, and matched by the advice to share the agenda in advance: some people need to think alone first."),
      ], I16_EN),
      read(I16, "음악이 운동 효과를 높인다는 연구가 있다. 빠르고 리듬감 있는 음악을 들으면 (  ) 같은 운동을 해도 덜 힘들다고 느낀다. 음악이 몸의 피로에 쏠리는 주의를 다른 데로 돌려 주기 때문이다.", [
        q(31, "", ["몸이 더 피곤해져서", "운동을 금방 그만두어서", "피로에 대한 느낌이 줄어들어", "음악에 집중하지 못해서"], 3, "The music draws attention away from fatigue, so you feel it less and the same workout seems easier."),
      ], I16_EN),
      read(I32, "김치는 지역에 따라 맛이 다르다. 날씨가 따뜻한 남쪽 지방에서는 김치가 빨리 시어지지 않도록 소금과 젓갈을 많이 넣어 맛이 짜고 진하다. 반면 추운 북쪽 지방의 김치는 소금을 적게 넣어 맛이 싱겁고 국물이 넉넉한 편이다. 이처럼 김치에는 각 지역의 기후와 생활이 담겨 있다.", [
        q(32, "", ["남쪽 지방의 김치는 싱겁다.", "북쪽 지방의 김치는 소금을 적게 넣는다.", "김치 맛은 지역과 관계없이 같다.", "따뜻한 지역에서는 젓갈을 넣지 않는다."], 2, "북쪽 지방의 김치는 소금을 적게 넣어. Southern kimchi is salty and strong, with plenty of fermented seafood (젓갈)."),
      ], I32_EN),
      read(I32, "해녀는 산소통 같은 장비 없이 바닷속에 들어가 해산물을 채취하는 여성이다. 해녀들은 한 번 숨을 참고 1~2분 동안 물속에서 작업한다. 이들은 경험에 따라 상군, 중군, 하군으로 나뉘며, 경험이 많은 해녀가 더 깊은 바다에서 일한다. 제주 해녀 문화는 그 가치를 인정받아 2016년에 유네스코 인류무형문화유산으로 등재되었다.", [
        q(33, "", ["해녀는 산소통을 메고 바다에 들어간다.", "경험이 적은 해녀가 더 깊은 곳에서 일한다.", "해녀는 한 번에 10분 이상 물속에 있다.", "제주 해녀 문화는 유네스코 인류무형문화유산이 되었다."], 4, "2016년에 유네스코 인류무형문화유산으로 등재되었다. Haenyeo dive without oxygen tanks, for a minute or two, and the most experienced go deepest."),
      ], I32_EN),
      read(I32, "번아웃은 오랫동안 일에 몰두하던 사람이 몸과 마음이 지쳐 무기력해지는 상태를 말한다. 번아웃은 일을 대충 하는 사람보다 오히려 책임감이 강하고 열정적인 사람에게 더 자주 나타난다. 이를 예방하려면 일과 휴식의 경계를 분명히 하고, 자신이 지쳐 가고 있다는 신호를 무시하지 않아야 한다.", [
        q(34, "", ["책임감이 강한 사람도 번아웃을 겪을 수 있다.", "번아웃은 일을 대충 하는 사람에게 많이 나타난다.", "번아웃을 예방하려면 휴식 시간을 줄여야 한다.", "번아웃은 몸에만 영향을 준다."], 1, "책임감이 강하고 열정적인 사람에게 더 자주 나타난다: if anything, conscientious people are more at risk. It affects body and mind."),
      ], I32_EN),
      read(I35, "많은 부모들이 아이가 실패하지 않도록 미리 문제를 해결해 준다. 그러나 작은 실패를 겪어 보지 않은 아이는 나중에 큰 어려움을 만났을 때 쉽게 무너질 수 있다. 실패를 통해 아이는 문제를 해결하는 방법과 다시 일어서는 힘을 배운다. 부모는 아이의 실패를 막기보다 그 경험에서 배울 수 있도록 곁에서 지켜봐 주어야 한다.", [
        q(35, "", ["부모는 아이의 문제를 대신 해결해 주어야 한다.", "아이들은 실패를 하면 안 된다.", "부모는 아이가 실패에서 배울 수 있도록 지켜봐 주어야 한다.", "큰 어려움은 피하는 것이 좋다."], 3, "The last sentence states the point: rather than preventing failure, parents should let children learn from it."),
      ], I35_EN),
      read(I35, "도시의 공원은 단순히 산책하는 곳이 아니다. 공원의 나무와 풀은 미세 먼지를 줄이고 여름철 도시의 온도를 낮춘다. 또 공원은 다양한 사람들이 만나 교류하는 공간이 되어 지역 공동체를 튼튼하게 한다. 따라서 도시 계획을 세울 때 공원을 남는 땅에 만드는 시설로 볼 것이 아니라 도시에 꼭 필요한 기반 시설로 생각해야 한다.", [
        q(36, "", ["공원은 도시에 꼭 필요한 시설로 계획되어야 한다.", "공원은 산책하기 좋은 곳이다.", "나무는 미세 먼지를 줄인다.", "공원은 남는 땅에 만들어야 한다."], 1, "따라서 introduces the conclusion: parks are essential infrastructure. The benefits listed are its supporting details."),
      ], I35_EN),
      read(I35, "외래어를 무조건 우리말로 바꾸어야 한다는 주장이 있다. 모든 외래어를 바꿀 수는 없지만, 쉬운 우리말이 있는데도 굳이 어려운 외래어를 쓰는 것은 바람직하지 않다. 특히 공공 기관의 안내문에 어려운 외래어가 많으면 노인이나 어린이가 정보를 이해하지 못할 수 있다. 공공의 언어는 누구나 이해할 수 있도록 쉽게 써야 한다.", [
        q(37, "", ["외래어는 모두 없애야 한다.", "노인들은 외래어를 좋아한다.", "안내문은 짧게 써야 한다.", "공공 기관은 누구나 이해할 수 있는 쉬운 말을 써야 한다."], 4, "The writer doesn't ban all loanwords; the point is that public language must be easy for everyone to understand."),
      ], I35_EN),
      read(I35, "스마트 기기가 발달하면서 기억해야 할 정보를 기기에 맡기는 사람이 많아졌다. 전화번호나 길을 외우지 않아도 기기가 대신 기억해 주기 때문이다. 이렇게 하면 뇌가 다른 중요한 일에 집중할 수 있다는 장점도 있다. 그러나 모든 것을 기기에 맡기면 스스로 생각하고 판단하는 능력이 약해질 수 있다. 기기를 현명하게 활용하되 생각하는 힘을 기르는 노력을 게을리해서는 안 된다.", [
        q(38, "", ["스마트 기기를 쓰지 않는 것이 좋다.", "기기를 활용하더라도 스스로 생각하는 힘을 길러야 한다.", "전화번호는 꼭 외워야 한다.", "뇌는 한 가지 일에만 집중할 수 있다."], 2, "-되 (use devices, but …) introduces the condition: keep building your own thinking."),
      ], I35_EN),
      read(I39, "한국의 전통 가옥인 한옥은 자연과 조화를 이루도록 지어졌다. (㉠) 한옥에는 바닥을 데우는 온돌과 시원한 마루가 함께 있다. (㉡) 추운 겨울에는 온돌방에서 지내고 더운 여름에는 바람이 잘 통하는 마루에서 생활했다. (㉢) 또한 한옥의 창문에 바른 한지는 빛을 부드럽게 들이고 습도를 조절해 준다. (㉣)", [
        q(39, "〈이처럼 계절에 따라 생활 공간을 달리한 것은 사계절이 뚜렷한 한국의 기후에 맞추기 위한 것이다.〉", ["㉠", "㉡", "㉢", "㉣"], 3, "이처럼 계절에 따라 생활 공간을 달리한 것 sums up living in the ondol room in winter and on the maru in summer, so it follows that sentence, at ㉢, before 또한 adds the paper."),
      ], I39_EN),
      read(I39, "얼음 위에서 미끄러지는 이유는 무엇일까? (㉠) 오랫동안 과학자들은 얼음 위에 압력이 가해지면 표면이 녹아 물이 생기기 때문이라고 설명했다. (㉡) 그런데 이 설명으로는 몸무게가 가벼운 사람도 미끄러지는 현상을 설명하기 어려웠다. (㉢) 최근에는 얼음 표면에 원래부터 아주 얇은 물 같은 층이 있어서 미끄럽다는 설명이 힘을 얻고 있다. (㉣)", [
        q(40, "〈이 층은 영하의 온도에서도 존재하며 마치 윤활유처럼 작용한다.〉", ["㉠", "㉡", "㉢", "㉣"], 4, "이 층 (this layer) needs the thin watery layer mentioned in the last sentence, so it goes at ㉣."),
      ], I39_EN),
      read(I39, "『시간의 정원』은 화가 이수아의 첫 번째 개인전이다. (㉠) 작가는 지난 5년 동안 할머니가 가꾸던 시골 정원을 계절마다 찾아가 그림으로 기록했다. (㉡) 전시장에는 같은 정원을 그린 그림 마흔 점이 계절 순서대로 걸려 있다. (㉢) 관람객들은 그림을 따라 걸으며 정원의 일 년을 경험하게 된다. (㉣)", [
        q(41, "〈할머니가 돌아가신 뒤 아무도 돌보지 않던 정원이었다.〉", ["㉠", "㉡", "㉢", "㉣"], 2, "The sentence describes the garden just introduced, the one grandmother used to tend, so it follows at ㉡."),
      ], I39_EN),
      read(I19, "어머니는 시장에서 오십 년 동안 국밥집을 하셨다. 새벽 네 시면 어김없이 가게 불을 켜고 커다란 솥에 뼈를 넣어 국물을 끓이셨다. 어릴 적 나는 국밥 냄새가 옷에 배는 것이 싫어서 친구들 앞에서 일부러 가게 이야기를 하지 않았다. 대학에 합격하던 날, 어머니는 손님들에게 국밥을 공짜로 대접하시며 '우리 아들이 대학 갔어요!' 하고 몇 번이나 말씀하셨다. 〈나는 가게 구석에서 고개를 숙인 채 아무 말도 하지 못했다.〉 그때는 그것이 부끄러움인 줄 알았다. 하지만 지금 생각하면 그것은 차마 감당할 수 없는 고마움이었다.", [
        q(42, "밑줄 친 부분에 나타난 '나'의 심정으로 가장 알맞은 것을 고르십시오.", ["화가 나고 억울하다", "신나고 즐겁다", "지루하고 답답하다", "쑥스러우면서도 가슴이 벅차다"], 4, "Head bowed, unable to speak while his mother tells everyone: embarrassed but overwhelmed, which the writer later understands as gratitude too great to bear."),
        q(43, "윗글의 내용과 같은 것을 고르십시오.", ["어머니는 오후에 가게 문을 여셨다.", "나는 어릴 때 친구들에게 가게 자랑을 많이 했다.", "어머니는 내가 대학에 합격한 날 손님들에게 국밥을 대접하셨다.", "어머니는 십 년 동안 국밥집을 하셨다."], 3, "손님들에게 국밥을 공짜로 대접하시며. She ran the shop for fifty years, opening at 4 a.m., and the child avoided mentioning it."),
      ], I19_EN),
      read(I19, "과거에는 한 직장에서 정년까지 일하는 것이 당연하게 여겨졌다. 그러나 오늘날에는 기술 변화가 빨라 한 번 배운 지식만으로는 평생 일하기 어렵다. 지금 있는 직업이 10년 뒤에도 있을지 장담할 수 없는 시대가 된 것이다. 이런 변화 속에서 중요한 것은 특정 직업을 갖는 것보다 새로운 것을 (  ) 능력이다. 그래서 많은 나라에서 성인들이 언제든지 다시 배울 수 있도록 평생 교육 제도를 확대하고 있다.", [
        q(44, "윗글의 주제로 가장 알맞은 것을 고르십시오.", ["한 직장에서 오래 일하는 것이 좋다.", "변화하는 시대에는 평생 배우는 능력이 중요하다.", "기술 변화는 느리게 일어난다.", "성인에게는 교육이 필요 없다."], 2, "Knowledge goes out of date fast, so what matters is the ability to keep learning, which is why lifelong education is expanding."),
        q(45, "(  )에 들어갈 내용으로 가장 알맞은 것을 고르십시오.", ["계속 배우고 적응하는", "빨리 잊어버리는", "다른 사람에게 맡기는", "한 번만 배우는"], 1, "The next sentence (다시 배울 수 있도록) confirms it: the ability to keep learning and adapting."),
      ], I19_EN),
      read(I19, "최근 일부 관광지에서는 관광객이 너무 많이 몰려 주민들의 생활이 위협받는 과잉 관광 문제가 나타나고 있다. 좁은 골목에 관광객이 몰리면서 소음과 쓰레기가 늘고, 집값과 물가가 올라 오래 살던 주민들이 떠나기도 한다. 일부 지역에서는 관광객 수를 제한하거나 입장료를 받는 방안을 시행하고 있다. 물론 관광은 지역 경제에 큰 도움이 된다. 그러나 주민의 삶이 무너진 관광지는 결국 그 매력도 잃게 된다. 관광의 이익과 주민의 삶이 균형을 이룰 수 있도록 지역 사회가 함께 규칙을 만들어 가야 한다.", [
        q(46, "윗글에 나타난 필자의 태도로 가장 알맞은 것을 고르십시오.", ["관광객을 모두 막아야 한다고 주장하고 있다.", "관광이 지역 경제에 도움이 되지 않는다고 비판하고 있다.", "관광과 주민 생활의 균형을 위해 함께 규칙을 만들 것을 주장하고 있다.", "입장료 제도의 효과를 의심하고 있다."], 3, "물론 … 그러나 …: the writer grants tourism's economic value but calls for shared rules to balance it with residents' lives."),
        q(47, "윗글의 내용과 같은 것을 고르십시오.", ["과잉 관광으로 오래 살던 주민들이 떠나기도 한다.", "관광객 수를 제한하는 지역은 없다.", "관광은 지역 경제와 관계가 없다.", "과잉 관광은 집값을 내린다."], 1, "오래 살던 주민들이 떠나기도 한다, because rents and prices rise. Some places already limit visitor numbers."),
      ], I19_EN),
      read(I19, "최근 정부는 공공장소에서 사람의 얼굴을 자동으로 인식하는 카메라를 늘리겠다는 계획을 발표했다. 범죄를 예방하고 실종자를 빨리 찾을 수 있다는 것이 그 이유이다. 안전을 위한 기술이라는 점에서 이해할 수 있는 면도 있다. 그러나 이 기술은 시민들의 동의 없이 개인의 이동 경로를 기록할 수 있다는 점에서 심각한 사생활 침해로 이어질 수 있다. 한번 수집된 정보가 원래 목적과 다르게 쓰이거나 밖으로 새어 나간다면 그 피해는 되돌리기 어렵다. 따라서 이 기술을 도입하기 전에 (  ) 법적 장치가 먼저 마련되어야 한다. 〈안전을 이유로 자유를 너무 쉽게 내주어서는 안 된다.〉", [
        q(48, "필자가 이 글을 쓴 목적으로 가장 알맞은 것을 고르십시오.", ["얼굴 인식 기술의 원리를 설명하기 위해", "얼굴 인식 카메라를 도입하기 전에 사생활 보호 장치를 마련할 것을 촉구하기 위해", "실종자를 찾는 방법을 소개하기 위해", "범죄율 통계를 알리기 위해"], 2, "따라서 … 먼저 마련되어야 한다: the writer urges legal safeguards before the cameras are introduced."),
        q(49, "(  )에 들어갈 내용으로 가장 알맞은 것을 고르십시오.", ["정보의 수집과 사용 범위를 엄격하게 제한하는", "카메라 수를 늘리는", "범죄자를 처벌하는", "정보를 자유롭게 공유하는"], 1, "The worry is information being misused or leaked, so the safeguard must strictly limit what is collected and how it's used."),
        q(50, "밑줄 친 부분에 나타난 필자의 태도로 가장 알맞은 것을 고르십시오.", ["기술 도입을 적극 환영하고 있다.", "범죄 예방 효과를 확신하고 있다.", "정부의 발표를 그대로 전달하고 있다.", "사생활 침해 가능성을 경계하고 있다."], 4, "Don't give up freedom too easily for safety: the writer is wary (경계하다) of the threat to privacy."),
      ], I19_EN),
    ],
  },
  () => 2
);
