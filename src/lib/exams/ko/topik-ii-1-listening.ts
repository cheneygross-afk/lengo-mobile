// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-ii-1-listening.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { listen, q, rec, weigh } from "./text";

// TOPIK II practice test 1 -- 듣기 (listening), questions 1-50, 60 minutes,
// every question 2 points. The real test's question types in its order:
// pictures and a graph (1-3), the next line (4-8), the woman's next action
// (9-12), the same content (13-16), the man's main idea (17-20), then 15
// recordings with two questions each (21-50): conversations, an interview,
// a lecture, a speech, an educational programme, a dialogue, a documentary
// and talks. As in the real test, recordings 1-20 are heard once and
// 21-50 twice.
const I1 = "다음을 듣고 알맞은 그림 또는 그래프를 고르십시오.";
const I1_EN = "In the real test the options are pictures or graphs; here each is described in a sentence. Heard once.";
const I4 = "다음 대화를 잘 듣고 이어질 수 있는 말을 고르십시오.";
const I4_EN = "Choose the line that could come next. Heard once.";
const I9 = "다음 대화를 잘 듣고 여자가 이어서 할 행동으로 알맞은 것을 고르십시오.";
const I9_EN = "Choose what the woman will do next. Heard once.";
const I13 = "다음을 듣고 내용과 일치하는 것을 고르십시오.";
const I13_EN = "Choose the sentence that matches what you hear. Heard once.";
const I17 = "다음을 듣고 남자의 중심 생각을 고르십시오.";
const I17_EN = "Choose the man's main idea. Heard once.";
const I21 = "다음을 듣고 물음에 답하십시오.";
const I21_EN = "Two questions on each recording, heard twice.";

export const TOPIK_II_1_LISTENING: ExamPaper = weigh(
  {
    id: "listening",
    kind: "listening",
    title: "듣기",
    minutes: 60,
    group: 1,
    tasks: [
      listen(I1, rec("1번", 1, ["여자: 손님, 이 운동화 어떠세요?", "남자: 좋네요. 그런데 한 치수 큰 걸로 신어 볼 수 있을까요?", "여자: 네, 잠시만 기다려 주세요. 창고에서 가져올게요."]), [
        q(1, "", ["운동화를 신은 채 직원에게 말하는 남자", "운동화 값을 계산하는 남자", "운동화를 신어 보는 여자", "창고에서 상자를 꺼내는 남자"], 1, "He has tried the trainers on and asks the assistant (여자) for a size bigger; she is about to fetch them from the stockroom."),
      ], I1_EN),
      listen(I1, rec("2번", 1, ["남자: 이 화분은 어디에 놓을까요?", "여자: 햇빛이 잘 드는 창가에 놓아 주세요.", "남자: 네, 여기 놓을게요."]), [
        q(2, "", ["화분에 물을 주는 여자", "창가에 화분을 놓는 남자", "꽃집에서 화분을 고르는 두 사람", "화분을 들고 문밖으로 나가는 여자"], 2, "She asks him to put the plant by the sunny window (창가), and he does: 여기 놓을게요."),
      ], I1_EN),
      listen(I1, rec("3번", 1, ["남자: 최근 한 조사에 따르면 직장인들이 점심시간에 가장 많이 하는 일은 식사였습니다. 그다음은 휴식, 운동 순이었습니다. 또 점심을 혼자 먹는 직장인의 비율은 십 년 전 십오 퍼센트에서 올해 삼십팔 퍼센트로 크게 늘었습니다."], "m"), [
        q(3, "", ["막대그래프: 점심시간에 하는 일, 식사 > 운동 > 휴식", "막대그래프: 점심시간에 하는 일, 식사 > 휴식 > 운동", "선그래프: 혼자 점심을 먹는 직장인 비율, 38% → 15%", "선그래프: 혼자 점심을 먹는 직장인 비율, 15% → 25%"], 2, "Meal, then rest, then exercise (식사, 휴식, 운동 순). The solo-lunch line would go from 15% up to 38%, so neither line graph matches."),
      ], I1_EN),
      listen(I4, rec("4번", 1, ["남자: 수미 씨, 회의 자료 다 준비했어요?", "여자: 거의 다 했는데 복사를 아직 못 했어요."]), [
        q(4, "", ["그럼 제가 복사해 올게요.", "회의는 어제 끝났어요.", "자료를 아직 못 만들었어요.", "복사기가 잘 작동했어요."], 1, "She hasn't made the copies yet, so the natural reply offers help: 그럼 제가 복사해 올게요."),
      ], I4_EN),
      listen(I4, rec("5번", 1, ["여자: 이번 주말에 같이 전시회 보러 갈래요?", "남자: 좋아요. 그런데 그 전시회는 예약해야 하지 않아요?"]), [
        q(5, "", ["네, 전시회가 정말 좋았어요.", "제가 어제 인터넷으로 예약해 뒀어요.", "주말에는 집에서 쉬고 싶어요.", "그 전시회는 벌써 봤어요."], 2, "He asks whether booking is needed; she has already booked: 예약해 뒀어요 (-아/어 두다, done in advance)."),
      ], I4_EN),
      listen(I4, rec("6번", 1, ["남자: 노트북 수리를 맡기고 싶은데요.", "여자: 네, 어디가 고장 났나요?"]), [
        q(6, "", ["수리비는 제가 낼게요.", "노트북을 새로 샀어요.", "화면이 갑자기 안 켜져요.", "내일 찾으러 올게요."], 3, "어디가 고장 났나요? asks what's wrong, so he describes the fault: the screen suddenly won't come on."),
      ], I4_EN),
      listen(I4, rec("7번", 1, ["여자: 민준 씨, 얼굴이 안 좋아 보여요. 어디 아파요?", "남자: 어젯밤에 잠을 거의 못 잤어요."]), [
        q(7, "", ["저도 어제 일찍 잤어요.", "잠을 많이 자면 안 돼요.", "얼굴이 아주 좋아 보이네요.", "그럼 오늘은 일찍 들어가서 쉬세요."], 4, "He barely slept, so she tells him to go home early and rest. 들어가다 here means going home."),
      ], I4_EN),
      listen(I4, rec("8번", 1, ["남자: 고객센터죠? 어제 주문한 옷이 아직 안 왔는데요.", "여자: 확인해 보니 배송이 하루 늦어지고 있습니다."]), [
        q(8, "", ["주문을 아직 안 했어요.", "그럼 언제쯤 받을 수 있을까요?", "옷이 너무 커요.", "배송이 빨라서 좋네요."], 2, "Told the delivery is a day late, the customer asks when it will arrive."),
      ], I4_EN),
      listen(I9, rec("9번", 1, ["남자: 지금 회의실 예약할 수 있어요?", "여자: 네, 세 시에 비어 있네요.", "남자: 그럼 예약해 주세요. 참석자들에게도 알려 주시고요.", "여자: 네, 예약하고 바로 메일을 보낼게요."]), [
        q(9, "", ["회의실을 예약한다.", "회의를 시작한다.", "참석자에게 전화한다.", "회의 자료를 만든다."], 1, "예약하고 바로 메일을 보낼게요: first she books the room, then she e-mails (not phones) the attendees."),
      ], I9_EN),
      listen(I9, rec("10번", 1, ["여자: 이 우유 유통기한이 지났네요.", "남자: 정말요? 그럼 버리고 새로 사야겠어요.", "여자: 제가 지금 편의점에 가서 사 올게요.", "남자: 고마워요."]), [
        q(10, "", ["우유를 버린다.", "유통기한을 확인한다.", "편의점에 간다.", "우유를 마신다."], 3, "제가 지금 편의점에 가서 사 올게요: she is going to the convenience store to buy more. The man talks of throwing the old milk away."),
      ], I9_EN),
      listen(I9, rec("11번", 1, ["남자: 등산하기 전에 준비 운동부터 하세요.", "여자: 네, 그런데 물을 차에 두고 왔어요.", "남자: 출발까지 십 분 남았으니까 빨리 가져오세요.", "여자: 네, 금방 다녀올게요."]), [
        q(11, "", ["준비 운동을 한다.", "산에 올라간다.", "남자에게 물을 산다.", "차에 물을 가지러 간다."], 4, "She left the water in the car and will quickly go and fetch it: 금방 다녀올게요."),
      ], I9_EN),
      listen(I9, rec("12번", 1, ["여자: 과장님, 보고서를 수정했는데 한번 봐 주시겠어요?", "남자: 지금은 회의에 들어가야 해서요. 메일로 보내 주면 회의 끝나고 볼게요.", "여자: 네, 알겠습니다."]), [
        q(12, "", ["회의에 들어간다.", "보고서를 메일로 보낸다.", "보고서를 출력한다.", "과장님을 기다린다."], 2, "Her manager asks her to e-mail the report, and she agrees. He's the one going into the meeting."),
      ], I9_EN),
      listen(I13, rec("13번", 1, ["남자: 이번 주 토요일 독서 모임 장소가 바뀌었대요.", "여자: 그래요? 어디로요?", "남자: 원래 카페에서 하려고 했는데 사람이 많아서 구민회관 세미나실로 바뀌었어요. 시간은 그대로 두 시예요.", "여자: 알겠어요."]), [
        q(13, "", ["독서 모임 시간이 바뀌었다.", "독서 모임은 카페에서 한다.", "독서 모임은 일요일에 한다.", "독서 모임 장소가 구민회관으로 바뀌었다."], 4, "The place changed to the district hall seminar room; the time stays at two (시간은 그대로)."),
      ], I13_EN),
      listen(I13, rec("14번", 1, ["여자: 안내 말씀 드립니다. 오늘 오후 두 시부터 네 시까지 건물 전체의 전기 설비 점검이 있습니다. 이 시간에는 엘리베이터와 에어컨을 사용하실 수 없습니다. 컴퓨터 작업은 미리 저장해 주시기 바랍니다."]), [
        q(14, "", ["점검은 오전에 한다.", "점검 시간에 엘리베이터를 사용할 수 없다.", "점검은 하루 종일 한다.", "컴퓨터는 점검과 관계가 없다."], 2, "엘리베이터와 에어컨을 사용하실 수 없습니다 from 2 to 4 p.m. Saving work beforehand suggests the power will be off."),
      ], I13_EN),
      listen(I13, rec("15번", 1, ["남자: 어제 오후 서울의 한 지하철역에서 휴대폰을 보며 걷던 승객이 선로로 떨어지는 사고가 있었습니다. 마침 역에 있던 대학생 두 명이 바로 비상 버튼을 누르고 승객을 구했습니다. 다행히 열차가 들어오기 전이어서 크게 다친 사람은 없었습니다."], "m"), [
        q(15, "", ["사고는 어제 아침에 일어났다.", "승객이 크게 다쳤다.", "대학생들이 비상 버튼을 눌렀다.", "열차가 들어온 후에 승객을 구했다."], 3, "대학생 두 명이 바로 비상 버튼을 누르고: two students pressed the emergency button. It happened in the afternoon, before the train came, and no one was badly hurt."),
      ], I13_EN),
      listen(I13, rec("16번", 1, ["여자: 사장님, 이 서점에서는 손님이 직접 책을 고르지 않는다고요?", "남자: 네, 손님이 요즘 기분이나 고민을 종이에 써 주시면 제가 그분께 맞는 책을 골라 드립니다. 처음에는 손님들이 어색해하셨는데 지금은 일부러 멀리서 찾아오시는 분도 많습니다."]), [
        q(16, "", ["남자는 손님에게 맞는 책을 골라 준다.", "손님들이 직접 책을 고른다.", "처음부터 손님들이 이 방식을 좋아했다.", "이 서점에는 멀리서 오는 손님이 없다."], 1, "제가 그분께 맞는 책을 골라 드립니다: the owner chooses a book for each customer. At first customers felt awkward (어색해하셨는데)."),
      ], I13_EN),
      listen(I17, rec("17번", 1, ["남자: 또 커피 사 왔어요? 하루에 커피값만 만 원은 쓰겠어요.", "여자: 피곤해서 어쩔 수 없어요.", "남자: 집에서 커피를 내려서 텀블러에 담아 오면 돈도 아끼고 쓰레기도 줄일 수 있어요."]), [
        q(17, "", ["피곤할 때는 커피를 마셔야 한다.", "커피를 너무 많이 마시면 건강에 나쁘다.", "집에서 커피를 가져오는 것이 좋다.", "텀블러는 값이 비싸다."], 3, "His point is in his last line: bringing coffee from home in a tumbler saves money and waste."),
      ], I17_EN),
      listen(I17, rec("18번", 1, ["여자: 아이에게 휴대폰을 사 줄까 고민이에요. 친구들이 다 있대요.", "남자: 친구들이 있다고 꼭 사 줄 필요는 없어요. 아이와 먼저 사용 규칙을 정하고, 아이가 그걸 지킬 수 있을 때 사 주는 게 좋다고 생각해요."]), [
        q(18, "", ["아이에게 휴대폰을 빨리 사 줘야 한다.", "사용 규칙을 정한 후에 휴대폰을 사 주는 것이 좋다.", "아이의 친구들과 같은 휴대폰을 사야 한다.", "아이에게 휴대폰은 필요 없다."], 2, "-는 게 좋다고 생각해요 marks his opinion: agree on rules first, buy the phone when the child can keep them. He doesn't say never."),
      ], I17_EN),
      listen(I17, rec("19번", 1, ["남자: 요즘 회사에서 회의를 너무 자주 하는 것 같아요.", "여자: 그래도 서로 의견을 나누려면 필요하지 않을까요?", "남자: 물론 필요하죠. 하지만 간단한 내용은 메신저로 공유하고, 회의는 꼭 함께 결정할 일이 있을 때만 하는 게 효율적이에요."]), [
        q(19, "", ["회의는 꼭 필요할 때만 하는 것이 좋다.", "회의를 더 자주 해야 한다.", "메신저는 업무에 도움이 안 된다.", "의견을 나누는 것은 중요하지 않다."], 1, "물론 필요하죠. 하지만 …: he concedes meetings matter, then gives his view: share simple things by messenger and meet only when a decision needs everyone."),
      ], I17_EN),
      listen(I17, rec("20번", 1, ["여자: 작가님은 어떻게 동화를 쓰게 되셨어요?", "남자: 처음에는 잠들기 전에 제 아이에게 이야기를 지어서 들려준 게 시작이었어요. 아이들은 어른보다 훨씬 솔직한 독자예요. 재미없으면 바로 다른 데로 가 버리거든요. 그래서 저는 아이의 눈높이에서 생각하는 게 가장 중요하다고 생각해요."]), [
        q(20, "", ["동화는 어른을 위해 써야 한다.", "아이에게 매일 책을 읽어 줘야 한다.", "아이들은 재미없는 이야기도 끝까지 듣는다.", "동화를 쓸 때는 아이의 눈높이에서 생각해야 한다."], 4, "가장 중요하다고 생각해요 gives his main idea: think from a child's point of view (눈높이, eye level)."),
      ], I17_EN),
      listen(I21, rec("21~22번", 2, ["여자: 팀장님, 이번 신입 사원 교육을 온라인으로 하면 어떨까요? 장소를 안 빌려도 되고 비용도 줄일 수 있어요.", "남자: 비용은 줄겠지만 신입 사원들은 서로 얼굴을 보고 친해지는 게 중요해요. 처음 며칠이라도 직접 만나서 하는 게 좋겠어요.", "여자: 그럼 첫 이틀은 회사에서 하고 나머지는 온라인으로 할까요?", "남자: 좋아요. 그렇게 계획을 세워 보세요."]), [
        q(21, "남자의 중심 생각으로 가장 알맞은 것을 고르십시오.", ["신입 사원 교육은 온라인으로 하는 것이 좋다.", "신입 사원들은 직접 만나서 친해지는 것이 중요하다.", "교육 비용을 줄여야 한다.", "교육 기간을 늘려야 한다."], 2, "얼굴을 보고 친해지는 게 중요해요: for him, new staff getting to know each other face to face matters more than the savings."),
        q(22, "들은 내용과 같은 것을 고르십시오.", ["여자는 교육 장소를 이미 빌렸다.", "교육은 모두 회사에서 한다.", "처음 이틀은 직접 만나서 교육한다.", "남자는 비용이 늘어날 것이라고 생각한다."], 3, "첫 이틀은 회사에서 하고 나머지는 온라인으로: the first two days in person, the rest online."),
      ], I21_EN),
      listen(I21, rec("23~24번", 2, ["남자: 여보세요. 거기 시청 체육관이죠? 다음 달에 시작하는 평일 저녁 배드민턴 강좌를 신청하고 싶은데요.", "여자: 죄송하지만 그 강좌는 신청이 마감됐습니다. 대신 토요일 오전 반에는 아직 자리가 있습니다.", "남자: 토요일 오전이면 괜찮아요. 신청은 어떻게 하면 되나요?", "여자: 홈페이지에서 회원 가입을 하신 후에 신청하시면 됩니다. 수강료는 한 달에 삼만 원입니다."]), [
        q(23, "남자가 무엇을 하고 있는지 고르십시오.", ["강좌 신청 방법을 문의하고 있다.", "배드민턴 강좌를 소개하고 있다.", "강좌 시간을 바꾸고 있다.", "체육관 회원 가입을 취소하고 있다."], 1, "He phones to sign up and asks 신청은 어떻게 하면 되나요?: he is enquiring (문의하다) how to register."),
        q(24, "들은 내용과 같은 것을 고르십시오.", ["남자는 처음 원한 강좌에 신청할 수 있다.", "토요일 오전 반은 자리가 없다.", "수강료는 한 번에 삼만 원이다.", "신청하려면 먼저 회원 가입을 해야 한다."], 4, "회원 가입을 하신 후에 신청하시면 됩니다. The evening class is full (마감), and the fee is 30,000 won a month."),
      ], I21_EN),
      listen(I21, rec("25~26번", 2, ["여자: 선생님께서는 마을 어르신들께 스마트폰 사용법을 가르치고 계시는데요. 어떻게 시작하게 되셨나요?", "남자: 몇 년 전에 은행에 갔다가 어르신 한 분이 무인 기계 앞에서 한참을 서 계시는 걸 봤어요. 요즘은 식당 주문도, 기차표 예매도 다 기계나 앱으로 하잖아요. 이런 걸 못 하면 생활이 정말 불편해집니다. 기술이 발전할수록 그 기술에서 소외되는 사람이 없도록 사회가 함께 도와야 한다고 생각합니다. 그래서 일주일에 두 번 주민센터에서 무료로 수업을 하고 있습니다."]), [
        q(25, "남자의 중심 생각으로 가장 알맞은 것을 고르십시오.", ["어르신들은 기계를 사용하지 않는 것이 좋다.", "은행은 무인 기계를 없애야 한다.", "기술에서 소외되는 사람이 없도록 사회가 도와야 한다.", "스마트폰 수업은 돈을 받고 해야 한다."], 3, "-아야/어야 한다고 생각합니다 states his view: as technology advances, society must make sure no one is left out (소외되다)."),
        q(26, "들은 내용과 같은 것을 고르십시오.", ["남자는 은행에서 일하고 있다.", "수업은 주민센터에서 무료로 한다.", "수업은 일주일에 한 번 한다.", "남자는 앱으로 기차표를 살 수 없다."], 2, "주민센터에서 무료로 수업을 하고 있습니다, twice a week. He was only a customer at the bank."),
      ], I21_EN),
      listen(I21, rec("27~28번", 2, ["남자: 수진 씨, 우리 아파트에서 다음 달부터 음식물 쓰레기를 카드로 버려야 한대요.", "여자: 카드요? 그게 무슨 말이에요?", "남자: 음식물 쓰레기통에 카드를 대면 무게가 자동으로 측정돼서 버린 만큼 돈을 내는 거예요. 많이 버리면 돈을 더 내야 하니까 다들 음식을 덜 남기게 되겠죠.", "여자: 아, 그렇구나. 그럼 카드는 어디에서 받아요?", "남자: 관리사무소에서 이번 주 금요일까지 나눠 준대요. 잊지 말고 받아 오세요."]), [
        q(27, "남자가 말하는 의도로 알맞은 것을 고르십시오.", ["음식물 쓰레기를 줄이는 요리법을 소개하려고", "관리사무소의 문제를 지적하려고", "쓰레기 카드를 팔려고", "새로운 쓰레기 배출 방법을 알려 주려고"], 4, "He explains how food waste will be thrown away from next month and where to get the card: he's passing on a new procedure."),
        q(28, "들은 내용과 같은 것을 고르십시오.", ["음식물 쓰레기는 무게에 따라 돈을 낸다.", "카드는 다음 달에 나눠 준다.", "여자는 이미 카드를 받았다.", "이 방법은 이번 달부터 시작되었다."], 1, "버린 만큼 돈을 내는 거예요: you pay by weight. Cards are handed out until this Friday, and the scheme starts next month."),
      ], I21_EN),
      listen(I21, rec("29~30번", 2, ["여자: 이 일을 하신 지 얼마나 되셨어요?", "남자: 올해로 십오 년째입니다. 오래된 책이나 문서는 시간이 지나면서 종이가 약해지고 찢어지기도 하잖아요. 저는 그런 책을 원래 모습에 가깝게 되살리는 일을 합니다.", "여자: 가장 어려운 점은 뭔가요?", "남자: 고치는 과정에서 원래 책의 모습을 해치면 안 된다는 점이요. 그래서 종이 한 장을 고치는 데 몇 주가 걸리기도 합니다. 한번 손상된 부분은 다시 되돌릴 수 없으니까요."]), [
        q(29, "남자가 누구인지 고르십시오.", ["책을 쓰는 작가", "오래된 책을 복원하는 사람", "종이를 만드는 사람", "도서관 책을 정리하는 사람"], 2, "He brings old books back close to their original state (원래 모습에 가깝게 되살리다): a book restorer, 복원하는 사람."),
        q(30, "들은 내용과 같은 것을 고르십시오.", ["남자는 이 일을 시작한 지 오 년이 되었다.", "고치는 과정에서 책의 모습을 바꿔도 된다.", "종이 한 장을 고치는 데 몇 주가 걸리기도 한다.", "손상된 부분은 쉽게 되돌릴 수 있다."], 3, "종이 한 장을 고치는 데 몇 주가 걸리기도 합니다. He's been doing it fifteen years, and damage can't be undone."),
      ], I21_EN),
      listen(I21, rec("31~32번", 2, ["여자: 요즘 일부 지역에서 주 사일 근무제를 시험적으로 도입하고 있는데요. 저는 직원들이 충분히 쉬면 일의 효율도 높아진다고 생각해요.", "남자: 물론 휴식은 중요합니다. 하지만 모든 업종에 똑같이 적용하기는 어렵습니다. 병원이나 공장처럼 사람이 계속 있어야 하는 곳은 인력을 더 뽑아야 하는데, 작은 회사는 그 비용을 감당하기 어렵습니다. 업종의 특성을 고려해서 단계적으로 도입해야 합니다."]), [
        q(31, "남자의 중심 생각으로 가장 알맞은 것을 고르십시오.", ["주 사일 근무제는 업종에 따라 단계적으로 도입해야 한다.", "주 사일 근무제를 바로 모든 회사에 도입해야 한다.", "휴식은 일의 효율과 관계가 없다.", "작은 회사는 직원을 더 뽑아야 한다."], 1, "His conclusion: introduce it step by step (단계적으로), taking each industry's nature into account."),
        q(32, "남자의 태도로 가장 알맞은 것을 고르십시오.", ["상대방의 의견을 전적으로 지지하고 있다.", "현실적인 문제를 들어 신중한 태도를 보이고 있다.", "새로운 제도를 강하게 반대하고 있다.", "자신의 경험을 예로 들어 설명하고 있다."], 2, "He agrees rest matters but raises practical problems (staffing, costs for small firms): a cautious stance, not outright opposition."),
      ], I21_EN),
      listen(I21, rec("33~34번", 2, ["여자: 여러분은 하루에 몇 번이나 웃으시나요? 아이들은 어른보다 훨씬 자주 웃는다고 합니다. 웃음은 단순히 기분만 좋게 하는 것이 아닙니다. 웃으면 스트레스를 받을 때 나오는 호르몬이 줄고 몸의 면역력도 좋아진다고 알려져 있습니다. 흥미로운 것은 억지로 웃어도 어느 정도 효과가 있다는 연구도 있다는 점입니다. 우리 뇌가 진짜 웃음과 억지 웃음을 완전히 구별하지는 못하기 때문이라고 합니다. 그러니 오늘은 거울을 보고 한번 웃어 보면 어떨까요?"]), [
        q(33, "무엇에 대한 내용인지 가장 알맞은 것을 고르십시오.", ["아이들의 뇌 발달", "웃음이 건강에 주는 효과", "스트레스의 원인", "면역력을 높이는 음식"], 2, "The talk is about what laughing does for body and mind: less stress hormone, better immunity, even when forced."),
        q(34, "들은 내용과 같은 것을 고르십시오.", ["어른들은 아이들보다 자주 웃는다.", "웃음은 기분에만 영향을 준다.", "뇌는 억지 웃음을 쉽게 구별한다.", "억지로 웃어도 효과가 있다는 연구가 있다."], 4, "억지로 웃어도 어느 정도 효과가 있다는 연구도 있다. Children laugh more than adults, and the brain can't fully tell the difference."),
      ], I21_EN),
      listen(I21, rec("35~36번", 2, ["남자: 오늘 올해의 봉사상을 받게 되어 정말 감사합니다. 십 년 전, 저는 우연히 동네 어르신 댁에 도시락을 배달하는 일을 시작했습니다. 처음에는 한 달만 해 보려고 했습니다. 그런데 매주 저를 기다리시는 어르신들의 얼굴을 보니 그만둘 수가 없었습니다. 이 상은 제 것이 아니라 함께 땀 흘린 봉사자 백여 명의 것입니다. 앞으로도 이웃과 함께하는 마음을 잊지 않겠습니다."], "m"), [
        q(35, "남자가 무엇을 하고 있는지 고르십시오.", ["봉사자를 모집하고 있다.", "도시락 배달 방법을 설명하고 있다.", "상을 받은 소감을 말하고 있다.", "어르신들께 감사 편지를 읽고 있다."], 3, "봉사상을 받게 되어 감사합니다: an acceptance speech, sharing his feelings (소감) about the award."),
        q(36, "들은 내용과 같은 것을 고르십시오.", ["남자는 처음부터 오래 봉사하려고 했다.", "남자는 어르신들께 도시락을 배달했다.", "남자는 십 년 동안 혼자 봉사했다.", "남자는 올해 봉사를 그만두었다."], 2, "도시락을 배달하는 일: he delivered lunch boxes to elderly neighbours. He meant to do it for a month, and a hundred volunteers worked with him."),
      ], I21_EN),
      listen(I21, rec("37~38번", 2, ["남자: 박사님, 요즘 반려 식물을 키우는 사람이 많아졌는데요. 식물을 잘 키우는 비결이 있을까요?", "여자: 많은 분들이 식물이 죽는 이유를 물이 부족해서라고 생각하시는데요. 사실은 물을 너무 자주 줘서 뿌리가 썩는 경우가 더 많습니다. 식물마다 필요한 물의 양이 다르기 때문에 정해진 날에 물을 주기보다는 흙을 손가락으로 만져 보고 말랐을 때 주는 것이 좋습니다. 무엇보다 식물의 상태를 자주 살펴보는 것이 가장 중요합니다."]), [
        q(37, "여자의 중심 생각으로 가장 알맞은 것을 고르십시오.", ["식물에는 물을 매일 줘야 한다.", "식물은 햇빛이 가장 중요하다.", "반려 식물은 키우기 어렵다.", "식물의 상태를 살펴보고 물을 줘야 한다."], 4, "무엇보다 … 가장 중요합니다: watch the plant's condition, and water when the soil is dry rather than on fixed days."),
        q(38, "들은 내용과 같은 것을 고르십시오.", ["물이 부족해서 죽는 식물이 가장 많다.", "물을 너무 자주 주면 뿌리가 썩을 수 있다.", "모든 식물은 같은 양의 물이 필요하다.", "정해진 날에 물을 주는 것이 좋다."], 2, "물을 너무 자주 줘서 뿌리가 썩는 경우가 더 많습니다: overwatering kills more plants than drought."),
      ], I21_EN),
      listen(I21, rec("39~40번", 2, ["여자: 그러니까 이 제도로 지역 농산물 판매가 크게 늘었다는 말씀이시군요.", "남자: 네, 학교 급식에 지역에서 생산된 농산물을 쓰도록 하면서 농민들은 안정적인 판로를 얻었고, 학생들은 신선한 음식을 먹게 되었습니다. 다만 아직 날씨에 따라 공급량이 일정하지 않은 문제가 있습니다. 그래서 여러 지역이 서로 협력해서 부족한 농산물을 나누는 체계를 만들고 있습니다."]), [
        q(39, "이 대화 전의 내용으로 가장 알맞은 것을 고르십시오.", ["학교 급식에 지역 농산물을 쓰는 제도가 소개되었다.", "농민들이 농산물 가격을 올렸다.", "학생들이 급식에 불만을 나타냈다.", "날씨 때문에 농사를 지을 수 없게 되었다."], 1, "그러니까 … 말씀이시군요 sums up what was said before: the scheme had boosted sales of local produce, which the man goes on to explain."),
        q(40, "들은 내용과 같은 것을 고르십시오.", ["이 제도로 농민들은 농산물을 팔 곳이 생겼다.", "날씨와 상관없이 공급량이 일정하다.", "지역끼리 협력하는 체계는 이미 완성되었다.", "학생들은 이 제도 때문에 신선한 음식을 먹지 못한다."], 1, "안정적인 판로를 얻었고: farmers gained a steady outlet (판로, a place to sell). Supply still varies with the weather, and the cooperation system is still being built."),
      ], I21_EN),
      listen(I21, rec("41~42번", 2, ["여자: 우리는 보통 빨리빨리 문화를 한국 사회의 단점으로 이야기합니다. 그런데 이 문화가 꼭 나쁘기만 할까요? 빠른 의사 결정과 실행은 한국이 짧은 시간 안에 경제를 성장시키고 세계적인 수준의 인터넷 환경을 만든 원동력이 되었습니다. 문제는 속도 그 자체가 아니라 속도 때문에 안전과 과정이 무시될 때입니다. 따라서 우리에게 필요한 것은 속도를 버리는 것이 아니라, 언제 빨라야 하고 언제 천천히 가야 하는지를 판단하는 능력입니다."]), [
        q(41, "이 강연의 중심 내용으로 가장 알맞은 것을 고르십시오.", ["빨리빨리 문화는 반드시 없애야 한다.", "언제 빨라야 하는지 판단하는 능력이 중요하다.", "한국 경제는 느리게 성장했다.", "안전보다 속도가 중요하다."], 2, "따라서 introduces the conclusion: what's needed is not giving up speed but judging when to be fast and when to slow down."),
        q(42, "들은 내용과 같은 것을 고르십시오.", ["빠른 실행은 한국의 인터넷 환경을 만드는 데 도움이 되었다.", "빨리빨리 문화는 장점이 전혀 없다.", "속도 그 자체가 가장 큰 문제이다.", "한국 사회는 과정을 항상 중요하게 여겼다."], 1, "빠른 의사 결정과 실행은 … 인터넷 환경을 만든 원동력이 되었습니다. The problem is not speed itself (속도 그 자체가 아니라)."),
      ], I21_EN),
      listen(I21, rec("43~44번", 2, ["남자: 남해안의 한 갯벌. 바닷물이 빠지자 넓은 땅이 모습을 드러낸다. 이곳에는 게, 조개, 갯지렁이 등 수많은 생물이 살고 있다. 갯벌은 육지에서 흘러 들어온 오염 물질을 걸러 내 바다를 깨끗하게 하는 역할도 한다. 또 갯벌의 흙은 많은 양의 탄소를 저장하기 때문에 기후 변화를 늦추는 데에도 도움이 된다. 그러나 개발로 인해 지난 수십 년간 많은 갯벌이 사라졌다. 최근에는 갯벌의 가치가 알려지면서 일부 지역에서 갯벌을 되살리는 사업이 진행되고 있다."], "m"), [
        q(43, "무엇에 대한 내용인지 가장 알맞은 것을 고르십시오.", ["갯벌을 개발해서 땅을 넓혀야 한다.", "갯벌은 다양한 생물이 살고 환경을 지키는 소중한 공간이다.", "갯벌에서 잡은 조개는 맛있다.", "바닷물이 빠질 때는 바다에 들어가면 안 된다."], 2, "The documentary shows what tidal flats do (life, clean water, carbon) and why their loss matters: they're precious."),
        q(44, "갯벌이 기후 변화를 늦추는 데 도움이 되는 이유로 맞는 것을 고르십시오.", ["오염 물질을 걸러 내기 때문에", "생물이 많이 살기 때문에", "흙이 많은 탄소를 저장하기 때문에", "바닷물의 온도를 낮추기 때문에"], 3, "흙은 많은 양의 탄소를 저장하기 때문에 기후 변화를 늦추는 데에도 도움이 된다. Filtering pollution is a different benefit."),
      ], I21_EN),
      listen(I21, rec("45~46번", 2, ["여자: 여러분, 꿀벌이 사라지고 있다는 이야기를 들어 보셨을 겁니다. 꿀벌은 꿀만 만드는 것이 아니라 꽃가루를 옮겨 식물이 열매를 맺게 합니다. 우리가 먹는 과일과 채소의 상당 부분이 꿀벌의 도움을 받습니다. 그런데 최근 농약 사용, 기후 변화, 질병 등으로 꿀벌의 수가 크게 줄었습니다. 꿀벌이 줄면 과일 값이 오르는 것은 물론이고 생태계 전체가 흔들릴 수 있습니다. 도시에 꽃을 심고 농약 사용을 줄이는 작은 노력이 꿀벌을 지키는 출발점이 될 수 있습니다."]), [
        q(45, "들은 내용과 같은 것을 고르십시오.", ["꿀벌은 꿀을 만드는 일만 한다.", "꿀벌의 수가 늘고 있다.", "과일과 채소는 꿀벌과 관계가 없다.", "꿀벌이 줄면 생태계가 흔들릴 수 있다."], 4, "생태계 전체가 흔들릴 수 있습니다. Bees also carry pollen (꽃가루), and their numbers have fallen sharply."),
        q(46, "여자의 태도로 가장 알맞은 것을 고르십시오.", ["꿀벌 감소의 원인을 설명하고 작은 실천을 제안하고 있다.", "꿀벌 연구의 한계를 비판하고 있다.", "과일 값 상승을 걱정하며 정부를 비난하고 있다.", "꿀벌을 키우는 방법을 자세히 설명하고 있다."], 1, "She names the causes (pesticides, climate change, disease) and ends by proposing small actions (작은 노력)."),
      ], I21_EN),
      listen(I21, rec("47~48번", 2, ["여자: 최근 인공지능이 그린 그림이 미술 대회에서 상을 받아 논란이 되었는데요. 교수님은 이 문제를 어떻게 보십니까?", "남자: 인공지능은 이미 우리 창작 활동의 도구가 되었습니다. 사진기가 처음 나왔을 때도 그림의 시대가 끝났다는 말이 있었지만 오히려 새로운 예술이 탄생했죠. 다만 지금 필요한 것은 기준입니다. 작품을 만드는 데 인공지능을 얼마나, 어떻게 사용했는지를 밝히도록 하고, 대회마다 그 기준을 분명히 정해야 합니다. 그렇지 않으면 창작자들 사이에 불신만 커질 것입니다."]), [
        q(47, "들은 내용과 같은 것을 고르십시오.", ["사진기가 나온 후 새로운 예술이 생겨났다.", "인공지능 그림은 대회에서 상을 받은 적이 없다.", "남자는 인공지능을 창작에 쓰면 안 된다고 본다.", "대회의 기준은 이미 분명하다."], 1, "오히려 새로운 예술이 탄생했죠: the camera led to new art instead of ending painting. 오히려 means 'on the contrary'."),
        q(48, "남자의 태도로 가장 알맞은 것을 고르십시오.", ["인공지능 사용을 전면 금지해야 한다고 주장하고 있다.", "인공지능의 가능성을 인정하면서 분명한 기준을 요구하고 있다.", "인공지능 기술의 발전 속도를 걱정하고 있다.", "미술 대회의 심사 결과를 옹호하고 있다."], 2, "He accepts AI as a tool (다만 … introduces his reservation) and calls for clear rules on disclosing how it was used."),
      ], I21_EN),
      listen(I21, rec("49~50번", 2, ["남자: 조선 시대의 왕들이 매일 무엇을 했는지 우리는 어떻게 알 수 있을까요? 바로 사관이라는 관리들이 왕의 말과 행동을 빠짐없이 기록했기 때문입니다. 이 기록을 바탕으로 왕이 세상을 떠난 후에 실록을 편찬했습니다. 놀라운 것은 왕조차도 이 기록을 마음대로 볼 수 없었다는 점입니다. 왕이 기록을 보고 고치게 하면 역사가 왜곡될 수 있기 때문이었습니다. 이처럼 기록의 독립성을 지키려 한 노력 덕분에 조선왕조실록은 오늘날까지 높은 가치를 인정받고 있습니다."], "m"), [
        q(49, "들은 내용과 같은 것을 고르십시오.", ["왕은 실록을 언제든지 볼 수 있었다.", "실록은 왕이 살아 있을 때 완성되었다.", "사관은 왕의 말과 행동을 기록했다.", "실록은 오늘날 가치를 인정받지 못한다."], 3, "사관 … 왕의 말과 행동을 빠짐없이 기록했기 때문입니다. The annals were compiled after the king's death, and even the king couldn't read them freely."),
        q(50, "남자의 태도로 가장 알맞은 것을 고르십시오.", ["기록의 독립성을 지킨 노력을 높이 평가하고 있다.", "실록의 내용이 왜곡되었다고 비판하고 있다.", "사관 제도의 문제점을 지적하고 있다.", "왕의 권력이 약했던 것을 아쉬워하고 있다."], 1, "놀라운 것은 and 덕분에 show admiration: he values the effort to keep the record independent."),
      ], I21_EN),
    ],
  },
  () => 2
);
