// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-i-2-listening.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { PICTURE_NOTE, TOPIK_I_LISTENING_FOURS, listen, q, rec, weigh } from "./text";

// TOPIK I practice test 2 -- 듣기 (listening), questions 1-30, 40 minutes,
// in the real test's order of question types (see topik-i-1-listening.ts).
// Every recording is heard twice.
const I1 = "다음을 듣고 물음에 맞는 대답을 고르십시오.";
const I1_EN = "Listen and choose the answer that fits the question.";
const I5 = "다음을 듣고 이어지는 말을 고르십시오.";
const I5_EN = "Listen and choose what the other person says next.";
const I7 = "여기는 어디입니까? 알맞은 것을 고르십시오.";
const I7_EN = "Where are the speakers? Choose the right place.";
const I11 = "다음은 무엇에 대해 말하고 있습니까? 알맞은 것을 고르십시오.";
const I11_EN = "What are the speakers talking about? Choose the right word.";
const I15 = "다음 대화를 듣고 알맞은 그림을 고르십시오.";
const I17 = "다음을 듣고 대화 내용과 같은 것을 고르십시오.";
const I17_EN = "Listen and choose the sentence that matches the conversation.";
const I22 = "다음을 듣고 여자의 중심 생각을 고르십시오.";
const I22_EN = "Listen and choose the woman's main idea: what she thinks, not just a detail she mentions.";
const I25 = "다음을 듣고 물음에 답하십시오.";
const I25_EN = "Listen and answer the two questions.";

export const TOPIK_I_2_LISTENING: ExamPaper = weigh(
  {
    id: "listening",
    kind: "listening",
    title: "듣기",
    minutes: 40,
    group: 1,
    tasks: [
      listen(I1, rec("1번", 2, ["남자: 지금 바빠요?"]), [
        q(1, "", ["네, 바빠요.", "네, 바쁘지 않아요.", "아니요, 바빠요.", "아니요, 일이 많아요."], 1, "네 agrees with the question and 아니요 denies it, so 네, 바빠요 or 아니요, 안 바빠요. The other options contradict themselves."),
      ], I1_EN),
      listen(I1, rec("2번", 2, ["여자: 이거 수박이에요?"]), [
        q(2, "", ["네, 수박이 커요.", "아니요, 참외예요.", "네, 수박이 없어요.", "아니요, 수박을 먹어요."], 2, "이거 수박이에요? asks whether it's a watermelon, so the answer confirms it (네, 수박이에요) or corrects it: 아니요, 참외예요 (no, it's a Korean melon). The other options don't answer the question."),
      ], I1_EN),
      listen(I1, rec("3번", 2, ["남자: 누구하고 영화를 봤어요?"]), [
        q(3, "", ["어제 봤어요.", "극장에서 봤어요.", "재미있었어요.", "형하고 봤어요."], 4, "누구하고 asks who with: 형하고 (with my older brother). The others answer when, where and how it was."),
      ], I1_EN),
      listen(I1, rec("4번", 2, ["여자: 회사까지 어떻게 와요?"]), [
        q(4, "", ["아홉 시에 와요.", "혼자 와요.", "버스로 와요.", "집에서 와요."], 3, "어떻게 와요? asks how you get there, so the answer is a means of transport with (으)로: 버스로."),
      ], I1_EN),
      listen(I5, rec("5번", 2, ["남자: 맛있게 드세요."]), [
        q(5, "", ["잘 먹겠습니다.", "어서 오세요.", "실례합니다.", "안녕히 계세요."], 1, "When someone serves you food with 맛있게 드세요 (enjoy your meal), you answer 잘 먹겠습니다, said before eating."),
      ], I5_EN),
      listen(I5, rec("6번", 2, ["여자: 그럼 다음 주에 또 만나요."]), [
        q(6, "", ["여기 있어요.", "축하해요.", "네, 다음 주에 봐요.", "잘 먹겠습니다."], 3, "Agreeing to meet again next week: 네, 다음 주에 봐요."),
      ], I5_EN),
      listen(I7, rec("7번", 2, ["남자: 이 사진을 크게 인화하고 싶어요.", "여자: 네, 한 시간 후에 찾으러 오세요."]), [
        q(7, "", ["세탁소", "사진관", "도서관", "문구점"], 2, "Printing a photo (사진을 인화하다) is done at a photo studio, 사진관."),
      ], I7_EN),
      listen(I7, rec("8번", 2, ["여자: 이 셔츠를 내일까지 드라이클리닝해 주세요.", "남자: 네, 내일 오후에 찾으러 오세요."]), [
        q(8, "", ["옷 가게", "은행", "세탁소", "정류장"], 3, "Dry cleaning (드라이클리닝) a shirt and collecting it later: a 세탁소, a dry cleaner's."),
      ], I7_EN),
      listen(I7, rec("9번", 2, ["남자: 서울역까지 가 주세요.", "여자: 네, 손님. 안전벨트를 매 주세요."]), [
        q(9, "", ["기차", "식당", "회사", "택시"], 4, "Telling the driver where to go (서울역까지 가 주세요) and being asked to fasten a seat belt: a taxi."),
      ], I7_EN),
      listen(I7, rec("10번", 2, ["여자: 이 책은 언제까지 반납해야 해요?", "남자: 다음 주 금요일까지요. 대출 카드를 주세요."]), [
        q(10, "", ["도서관", "서점", "학교", "문구점"], 1, "Returning (반납) a book by a date and a borrowing card (대출 카드): a library, 도서관. At a 서점 you'd buy the book."),
      ], I7_EN),
      listen(I11, rec("11번", 2, ["남자: 몇 살이에요?", "여자: 스물다섯 살이에요."]), [
        q(11, "", ["이름", "나이", "키", "생일"], 2, "몇 살 asks someone's age, 나이. Ages use native Korean numbers: 스물다섯 살."),
      ], I11_EN),
      listen(I11, rec("12번", 2, ["여자: 저는 커피를 좋아해요.", "남자: 저는 녹차를 자주 마셔요."]), [
        q(12, "", ["과일", "운동", "음료", "요리"], 3, "Coffee and green tea (녹차) are drinks, 음료."),
      ], I11_EN),
      listen(I11, rec("13번", 2, ["남자: 보통 몇 시에 일어나요?", "여자: 여섯 시에 일어나요."]), [
        q(13, "", ["시간", "날짜", "요일", "계절"], 1, "몇 시 asks the time, 시간. Hours use native numbers: 여섯 시."),
      ], I11_EN),
      listen(I11, rec("14번", 2, ["여자: 봄을 좋아해요?", "남자: 아니요, 저는 가을이 좋아요."]), [
        q(14, "", ["날씨", "방학", "휴일", "계절"], 4, "봄 (spring) and 가을 (autumn) are seasons, 계절."),
      ], I11_EN),
      listen(I15, rec("15번", 2, ["여자: 저, 이 근처에 약국이 있어요?", "남자: 네, 저기 은행 옆에 있어요."]), [
        q(15, "", ["약국에서 약을 사는 여자", "은행에서 돈을 찾는 남자", "길에서 은행 쪽을 가리키며 길을 알려 주는 남자", "지도를 보면서 혼자 걷는 여자"], 3, "She asks the way to a pharmacy and he points to it, next to the bank (은행 옆): they're in the street, not inside."),
      ], PICTURE_NOTE),
      listen(I15, rec("16번", 2, ["남자: 이 상자 좀 같이 들어 줄 수 있어요?", "여자: 네, 어디로 옮길까요?"]), [
        q(16, "", ["상자를 함께 들고 있는 두 사람", "상자를 열어 보는 여자", "혼자 상자를 옮기는 남자", "가게에서 상자를 사는 두 사람"], 1, "He asks her to help lift the box (같이 들어 줄 수 있어요?) and she agrees: they carry it together."),
      ], PICTURE_NOTE),
      listen(I17, rec("17번", 2, ["여자: 민호 씨, 이번 주 금요일에 영화 보러 갈래요?", "남자: 금요일에는 아르바이트가 있어요. 토요일은 어때요?", "여자: 좋아요. 그럼 제가 표를 예매할게요."]), [
        q(17, "", ["두 사람은 금요일에 영화를 봅니다.", "남자는 금요일에 아르바이트를 합니다.", "남자가 표를 예매할 겁니다.", "여자는 아르바이트가 있습니다."], 2, "금요일에는 아르바이트가 있어요: he works his part-time job on Friday, so they'll go on Saturday, and she books the tickets."),
      ], I17_EN),
      listen(I17, rec("18번", 2, ["남자: 이 구두 이백사십오 사이즈 있어요?", "여자: 죄송합니다. 그 사이즈는 다 팔렸어요. 다음 주 월요일에 들어와요.", "남자: 그럼 그때 다시 올게요."]), [
        q(18, "", ["남자는 구두를 샀습니다.", "그 사이즈가 많이 있습니다.", "여자는 구두를 사러 왔습니다.", "그 사이즈의 구두는 다음 주에 들어옵니다."], 4, "다 팔렸어요 (sold out) … 다음 주 월요일에 들어와요: new stock arrives next Monday, so he'll come back then. Korean shoe sizes are in millimetres."),
      ], I17_EN),
      listen(I17, rec("19번", 2, ["여자: 내일 등산 가는 거 맞지요?", "남자: 네, 아침 일곱 시에 학교 앞에서 만나요.", "여자: 점심은 어떻게 해요?", "남자: 산 아래에 식당이 많아요. 거기에서 사 먹어요. 물만 가지고 오세요."]), [
        q(19, "", ["두 사람은 산에서 만납니다.", "두 사람은 점심을 사 먹을 겁니다.", "여자는 도시락을 준비할 겁니다.", "남자는 물을 가지고 가지 않습니다."], 2, "거기에서 사 먹어요: they'll buy lunch at a restaurant at the foot of the mountain. 사 먹다 means to buy food and eat it, as opposed to bringing it."),
      ], I17_EN),
      listen(I17, rec("20번", 2, ["남자: 여보세요, 수진 씨. 지금 어디예요?", "여자: 지하철역이에요. 그런데 지갑을 집에 두고 왔어요.", "남자: 그럼 제가 역으로 갈게요. 거기에서 기다리세요."]), [
        q(20, "", ["여자는 지갑을 잃어버렸습니다.", "남자는 지하철역에 있습니다.", "여자는 지갑을 집에 놓고 왔습니다.", "여자가 남자에게 갈 겁니다."], 3, "두고 왔어요 and 놓고 왔어요 both mean she left it at home. She didn't lose it (잃어버리다), and he is the one coming to the station."),
      ], I17_EN),
      listen(I17, rec("21번", 2, ["여자: 손님, 주문하시겠어요?", "남자: 불고기 정식 하나 주세요. 그리고 물 좀 주세요.", "여자: 물은 저기 셀프 코너에 있어요.", "남자: 아, 네. 알겠습니다."]), [
        q(21, "", ["남자는 물을 직접 가져와야 합니다.", "여자는 불고기를 주문했습니다.", "이 식당에는 물이 없습니다.", "남자는 정식을 두 개 시켰습니다."], 1, "셀프 코너 is a self-service corner: he has to fetch the water himself (직접). Many Korean restaurants work this way."),
      ], I17_EN),
      listen(I22, rec("22번", 2, ["남자: 이번 방학에 고향에 갈 거예요?", "여자: 아니요, 저는 한국에서 아르바이트를 할 거예요. 직접 일을 해 보면 한국어도 더 많이 배울 수 있어요."]), [
        q(22, "", ["방학에는 고향에 가야 합니다.", "아르바이트는 너무 힘듭니다.", "방학이 짧아서 아쉽습니다.", "일을 하면서 한국어를 배울 수 있습니다."], 4, "She stays to work because doing a job (직접 일을 해 보면) will teach her more Korean: that's her point."),
      ], I22_EN),
      listen(I22, rec("23번", 2, ["여자: 민수 씨, 또 택시 탔어요?", "남자: 네, 늦어서요.", "여자: 조금 일찍 일어나서 버스를 타면 돈도 아끼고 좋잖아요."]), [
        q(23, "", ["택시가 버스보다 빠릅니다.", "일찍 일어나서 버스를 타는 것이 좋습니다.", "버스는 너무 복잡합니다.", "늦으면 택시를 타야 합니다."], 2, "-잖아요 appeals to something the listener should know: getting up a bit earlier and taking the bus saves money. That's what she believes."),
      ], I22_EN),
      listen(I22, rec("24번", 2, ["남자: 이 식당은 사람이 너무 많아요. 다른 데 갈까요?", "여자: 조금만 기다려요. 사람이 많은 식당은 다 이유가 있어요. 분명히 맛있을 거예요."]), [
        q(24, "", ["사람이 많은 식당은 맛있습니다.", "다른 식당에 가는 게 좋습니다.", "식당에서 오래 기다리면 안 됩니다.", "이 식당은 값이 쌉니다."], 1, "사람이 많은 식당은 다 이유가 있어요: a busy restaurant is busy for a reason, so it must be good. Going elsewhere is the man's idea."),
      ], I22_EN),
      listen(I25, rec("25~26번", 2, ["여자: 승객 여러분께 안내 말씀 드립니다. 지금 우리 열차는 신호 문제로 잠시 멈췄습니다. 약 십 분 후에 다시 출발할 예정입니다. 바쁘신 분들께 불편을 드려서 죄송합니다. 열차가 출발할 때까지 자리에서 잠시 기다려 주시기 바랍니다."]), [
        q(25, "여자가 왜 이 이야기를 하고 있는지 고르십시오.", ["열차 시간을 바꾸려고", "자리를 바꾸려고", "열차가 멈춘 이유를 알려 주려고", "표를 팔려고"], 3, "A train announcement that explains why the train has stopped (신호 문제로, because of a signal problem) and when it will go on."),
        q(26, "들은 내용과 같은 것을 고르십시오.", ["열차는 오늘 운행하지 않습니다.", "열차는 십 분쯤 후에 출발합니다.", "승객들은 열차에서 내려야 합니다.", "열차는 사고 때문에 멈췄습니다."], 2, "약 십 분 후에 다시 출발할 예정입니다: about ten minutes. Passengers are asked to wait in their seats; the cause is a signal problem, not an accident."),
      ], I25_EN),
      listen(I25, rec("27~28번", 2, ["남자: 지영 씨, 가방에 있는 그게 뭐예요?", "여자: 아, 이거요? 요가 매트예요. 지난달부터 회사 근처에서 요가를 배우고 있어요.", "남자: 요가는 어때요?", "여자: 처음에는 몸이 아팠는데 지금은 아주 좋아요. 허리도 덜 아프고 잠도 잘 와요.", "남자: 저도 해 보고 싶네요. 남자들도 많이 해요?", "여자: 네, 우리 반에도 남자가 세 명 있어요. 같이 가 볼래요?"]), [
        q(27, "두 사람이 무엇에 대해 이야기하고 있는지 고르십시오.", ["회사 생활", "허리 치료", "요가 수업", "운동 가방"], 3, "Everything she says is about the yoga class she started last month: how it feels, who goes, and an invitation to join."),
        q(28, "들은 내용과 같은 것을 고르십시오.", ["여자는 요가를 오래 했습니다.", "여자의 요가 반에는 남자가 없습니다.", "남자는 요가를 배우고 있습니다.", "여자는 요가를 하고 잠을 잘 잡니다."], 4, "잠도 잘 와요: she sleeps well now. She started only last month, there are three men in her class, and he hasn't started yet."),
      ], I25_EN),
      listen(I25, rec("29~30번", 2, ["여자: 선생님, 왜 초등학생들에게 요리를 가르치세요?", "남자: 아이들이 요리를 하면 음식을 덜 남겨요. 자기가 만든 음식은 싫어하는 채소도 다 먹거든요. 그리고 친구들과 같이 만들면서 서로 돕는 것도 배워요.", "여자: 수업은 언제 하세요?", "남자: 매주 수요일 방과 후에 해요. 다음 달부터는 부모님들과 함께하는 수업도 시작할 거예요."]), [
        q(29, "남자가 아이들에게 요리를 가르치는 이유를 고르십시오.", ["아이들이 요리사가 되고 싶어 해서", "아이들이 음식을 덜 남기고 서로 돕는 것을 배워서", "부모님들이 부탁해서", "학교에 식당이 없어서"], 2, "Two reasons: children waste less food (덜 남겨요) because they eat what they made, and they learn to help each other."),
        q(30, "들은 내용과 같은 것을 고르십시오.", ["요리 수업은 매일 합니다.", "부모님과 함께하는 수업은 벌써 시작했습니다.", "아이들은 자기가 만든 음식을 잘 먹습니다.", "아이들은 혼자서 요리합니다."], 3, "자기가 만든 음식은 … 다 먹거든요: they eat what they've cooked themselves, even vegetables they dislike. Classes are on Wednesdays, and the parents' class starts next month."),
      ], I25_EN),
    ],
  },
  (n) => (TOPIK_I_LISTENING_FOURS.has(n) ? 4 : 3)
);
