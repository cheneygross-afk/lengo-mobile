// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-i-1-listening.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { PICTURE_NOTE, TOPIK_I_LISTENING_FOURS, listen, q, rec, weigh } from "./text";

// TOPIK I practice test 1 -- 듣기 (listening), questions 1-30, 40 minutes.
// The real test's question types in its order: answering a question
// (1-4), the next line (5-6), where the speakers are (7-10), what they're
// talking about (11-14), the matching picture (15-16), the same content
// (17-21), the woman's main idea (22-24) and three recordings with two
// questions each (25-30). Every recording is heard twice.
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

export const TOPIK_I_1_LISTENING: ExamPaper = weigh(
  {
    id: "listening",
    kind: "listening",
    title: "듣기",
    minutes: 40,
    group: 1,
    tasks: [
      listen(I1, rec("1번", 2, ["남자: 우산이 있어요?"]), [
        q(1, "", ["네, 우산이 있어요.", "네, 우산이 좋아요.", "아니요, 우산이 커요.", "아니요, 우산을 사요."], 1, "A yes/no question with 있어요? is answered with 네, … 있어요 or 아니요, … 없어요. Only the first option answers whether he has one."),
      ], I1_EN),
      listen(I1, rec("2번", 2, ["여자: 동생이에요?"]), [
        q(2, "", ["네, 동생이 없어요.", "네, 동생이 많아요.", "아니요, 동생이 아니에요.", "아니요, 동생을 만나요."], 3, "A question with 이에요? (is it …?) takes 네, … 이에요 or 아니요, … 이/가 아니에요. The negative of 이에요 is 아니에요, not 없어요."),
      ], I1_EN),
      listen(I1, rec("3번", 2, ["남자: 언제 부산에 가요?"]), [
        q(3, "", ["혼자 가요.", "기차로 가요.", "친구 집에 가요.", "다음 주에 가요."], 4, "언제 asks when, so the answer is a time: 다음 주에 (next week). 혼자 answers who with, 기차로 how, 친구 집에 where."),
      ], I1_EN),
      listen(I1, rec("4번", 2, ["여자: 무슨 운동을 좋아해요?"]), [
        q(4, "", ["수영을 좋아해요.", "매일 운동해요.", "공원에서 해요.", "친구하고 해요."], 1, "무슨 운동 asks which sport. 수영 (swimming) names one; the others answer how often, where and with whom."),
      ], I1_EN),
      listen(I5, rec("5번", 2, ["남자: 생일 축하해요."]), [
        q(5, "", ["미안해요.", "고마워요.", "괜찮아요.", "반가워요."], 2, "When someone says 생일 축하해요 (happy birthday), you thank them: 고마워요. 반가워요 is for meeting someone, 괜찮아요 answers an apology."),
      ], I5_EN),
      listen(I5, rec("6번", 2, ["여자: 늦어서 죄송합니다."]), [
        q(6, "", ["축하합니다.", "감사합니다.", "괜찮습니다.", "처음 뵙겠습니다."], 3, "죄송합니다 is an apology, and the usual reply is 괜찮습니다 (that's all right). 처음 뵙겠습니다 is said when meeting someone for the first time."),
      ], I5_EN),
      listen(I7, rec("7번", 2, ["남자: 어서 오세요. 몇 분이세요?", "여자: 두 명이에요. 김치찌개 두 개 주세요."]), [
        q(7, "", ["식당", "은행", "서점", "병원"], 1, "몇 분이세요? (how many of you?) is what restaurant staff ask at the door, and she orders 김치찌개 (kimchi stew): a 식당."),
      ], I7_EN),
      listen(I7, rec("8번", 2, ["여자: 이 책은 어디에서 계산해요?", "남자: 저쪽 계산대로 가세요. 소설책은 오늘 십 퍼센트 할인이에요."]), [
        q(8, "", ["약국", "우체국", "서점", "미용실"], 3, "She wants to pay for a book (책), and novels (소설책) are on sale: a bookshop, 서점."),
      ], I7_EN),
      listen(I7, rec("9번", 2, ["남자: 어디가 아프세요?", "여자: 어제부터 목이 아프고 열이 나요."]), [
        q(9, "", ["공항", "병원", "학교", "시장"], 2, "어디가 아프세요? (where does it hurt?) is the doctor's question, and she has a sore throat and a fever: a 병원 (hospital or clinic)."),
      ], I7_EN),
      listen(I7, rec("10번", 2, ["여자: 이 소포를 미국에 보내고 싶어요.", "남자: 여기에 올려 주세요. 비행기로 보내실 거예요?"]), [
        q(10, "", ["은행", "호텔", "꽃집", "우체국"], 4, "Sending a parcel (소포) abroad by air is done at the post office, 우체국."),
      ], I7_EN),
      listen(I11, rec("11번", 2, ["남자: 이 사과 얼마예요?", "여자: 한 개에 천 원이에요."]), [
        q(11, "", ["값", "맛", "장소", "시간"], 1, "얼마예요? asks the price, and the answer is 천 원 a piece: they're talking about 값 (price)."),
      ], I11_EN),
      listen(I11, rec("12번", 2, ["여자: 저는 주말에 보통 영화를 봐요.", "남자: 저는 등산을 해요."]), [
        q(12, "", ["날씨", "가족", "날짜", "취미"], 4, "What each of them does at weekends, films and hiking, is a hobby: 취미."),
      ], I11_EN),
      listen(I11, rec("13번", 2, ["남자: 오늘 정말 덥지요?", "여자: 네, 그런데 내일은 비가 올 거예요."]), [
        q(13, "", ["계절", "날씨", "쇼핑", "여행"], 2, "Hot today, rain tomorrow: the weather, 날씨. 계절 would be seasons (summer, winter)."),
      ], I11_EN),
      listen(I11, rec("14번", 2, ["여자: 형제가 있어요?", "남자: 네, 형하고 여동생이 있어요."]), [
        q(14, "", ["친구", "가족", "고향", "직업"], 2, "Brothers and sisters (형제, 형, 여동생) are family: 가족."),
      ], I11_EN),
      listen(I15, rec("15번", 2, ["남자: 손님, 이 모자 한번 써 보세요.", "여자: 음, 좀 작은 것 같아요. 더 큰 거 있어요?"]), [
        q(15, "", ["신발 가게에서 신발을 신어 보는 여자", "모자 가게에서 모자를 써 보는 여자", "식당에서 음식을 주문하는 여자", "모자를 사서 가방에 넣는 남자"], 2, "The shop assistant offers a hat (모자) to try on, 써 보세요, and she finds it a little small. Hats are worn with 쓰다, shoes with 신다."),
      ], PICTURE_NOTE),
      listen(I15, rec("16번", 2, ["여자: 민수 씨, 창문 좀 닫아 줄래요? 너무 추워요.", "남자: 네, 지금 닫을게요."]), [
        q(16, "", ["창문을 여는 여자", "에어컨을 켜는 여자", "창문을 닫는 남자", "문을 열고 나가는 남자"], 3, "She is cold and asks 민수 to close the window (창문을 닫다), and he does it now: 지금 닫을게요."),
      ], PICTURE_NOTE),
      listen(I17, rec("17번", 2, ["남자: 수미 씨, 내일 같이 점심 먹을까요?", "여자: 미안해요. 내일은 회의가 있어요. 모레는 어때요?", "남자: 좋아요. 그럼 모레 회사 앞 식당에서 만나요."]), [
        q(17, "", ["여자는 내일 회의가 없습니다.", "두 사람은 내일 점심을 먹습니다.", "남자는 식당에서 일합니다.", "두 사람은 모레 만날 겁니다."], 4, "She has a meeting tomorrow (내일은 회의가 있어요), so they agree on 모레, the day after tomorrow."),
      ], I17_EN),
      listen(I17, rec("18번", 2, ["여자: 이 바지를 바꾸고 싶어요. 너무 길어요.", "남자: 영수증 있으세요?", "여자: 네, 여기 있어요. 어제 샀어요.", "남자: 그럼 조금 더 짧은 걸로 가져다 드릴게요."]), [
        q(18, "", ["여자는 바지를 바꾸려고 합니다.", "여자는 바지를 오늘 샀습니다.", "여자는 영수증이 없습니다.", "남자는 더 긴 바지를 가져올 겁니다."], 1, "바꾸고 싶어요: she wants to exchange the trousers because they're too long. She bought them yesterday and has the receipt; he'll bring a shorter pair."),
      ], I17_EN),
      listen(I17, rec("19번", 2, ["남자: 지은 씨, 요즘 피아노를 배워요?", "여자: 네, 한 달 전부터 배우고 있어요. 일주일에 두 번 학원에 가요.", "남자: 저도 배우고 싶어요.", "여자: 그럼 같이 다녀요. 학원이 회사 근처에 있어요."]), [
        q(19, "", ["남자는 피아노를 배우고 있습니다.", "여자는 매일 학원에 갑니다.", "학원은 회사 근처에 있습니다.", "여자는 일 년 전에 피아노를 시작했습니다."], 3, "학원이 회사 근처에 있어요: the music school is near the office. She goes twice a week (일주일에 두 번) and started a month ago; he only wants to learn."),
      ], I17_EN),
      listen(I17, rec("20번", 2, ["여자: 준호 씨, 이번 주말에 뭐 해요?", "남자: 토요일에 제주도에 가요. 할머니 댁이 거기에 있어요.", "여자: 비행기로 가요?", "남자: 아니요, 배로 가요. 저는 배를 좋아해요."]), [
        q(20, "", ["남자는 일요일에 출발합니다.", "남자의 할머니는 제주도에 사십니다.", "남자는 비행기를 탈 겁니다.", "여자는 주말에 제주도에 갑니다."], 2, "할머니 댁이 거기에 있어요: his grandmother's home is on Jeju, so she lives there. 댁 is the honorific word for someone's home. He leaves on Saturday, by boat (배)."),
      ], I17_EN),
      listen(I17, rec("21번", 2, ["남자: 여보세요. 거기 하늘 꽃집이지요? 장미 스무 송이를 주문하고 싶은데요.", "여자: 네, 언제 필요하세요?", "남자: 내일 오후 세 시까지 회사로 보내 주세요.", "여자: 네, 알겠습니다. 주소는 문자로 보내 주세요."]), [
        q(21, "", ["남자는 꽃집에서 일합니다.", "남자는 장미를 직접 가지러 갈 겁니다.", "여자는 오늘 꽃을 보낼 겁니다.", "남자는 주소를 문자로 보낼 겁니다."], 4, "The florist asks him to text the address (주소는 문자로 보내 주세요). The flowers go to his office by three tomorrow, so he won't collect them."),
      ], I17_EN),
      listen(I22, rec("22번", 2, ["남자: 이 컴퓨터는 너무 느려요. 새 컴퓨터를 살까요?", "여자: 아직 삼 년밖에 안 썼어요. 고쳐서 쓰면 돼요. 서비스 센터에 한번 가 봐요."]), [
        q(22, "", ["새 컴퓨터를 사야 합니다.", "컴퓨터를 오래 쓰면 안 됩니다.", "컴퓨터를 고쳐서 쓰는 게 좋습니다.", "서비스 센터는 너무 멉니다."], 3, "고쳐서 쓰면 돼요: she thinks they should repair it and keep using it. -밖에 안 (only) shows that three years is not long in her view."),
      ], I22_EN),
      listen(I22, rec("23번", 2, ["여자: 민수 씨, 아침을 안 먹어요?", "남자: 네, 시간이 없어서 커피만 마셔요.", "여자: 아침을 먹어야 일을 잘할 수 있어요. 바나나라도 하나 드세요."]), [
        q(23, "", ["아침을 꼭 먹어야 합니다.", "아침에 커피를 마시면 좋습니다.", "아침에 운동을 해야 합니다.", "바나나는 비쌉니다."], 1, "아침을 먹어야 일을 잘할 수 있어요: you have to eat breakfast to work well. 바나나라도 means 'at least a banana', so even a small breakfast is better than none."),
      ], I22_EN),
      listen(I22, rec("24번", 2, ["남자: 이번 휴가에 어디 갈 거예요?", "여자: 아직 몰라요.", "남자: 빨리 예약하지 않으면 비행기표가 비싸져요.", "여자: 그래도 저는 여행지를 천천히 정하고 싶어요. 여행은 준비하는 시간도 즐겁잖아요."]), [
        q(24, "", ["비행기표를 빨리 사야 합니다.", "휴가에는 집에서 쉬고 싶습니다.", "여행은 혼자 가는 게 좋습니다.", "여행을 준비하는 시간도 즐겁습니다."], 4, "Her last sentence is her main idea: 준비하는 시간도 즐겁잖아요, preparing is part of the fun. Buying tickets early is the man's idea, not hers."),
      ], I22_EN),
      listen(I25, rec("25~26번", 2, ["여자: 손님 여러분, 안녕하십니까? 저희 한빛백화점을 찾아 주셔서 감사합니다. 오늘부터 일주일 동안 오 층에서 겨울 옷 할인 행사를 합니다. 코트와 스웨터를 삼십 퍼센트 싸게 사실 수 있습니다. 그리고 오늘 십만 원 이상 사시는 손님께는 장갑을 선물로 드립니다. 감사합니다."]), [
        q(25, "여자가 왜 이 이야기를 하고 있는지 고르십시오.", ["장갑을 팔려고", "할인 행사를 안내하려고", "직원을 찾으려고", "가게 위치를 물어보려고"], 2, "A department store announcement that tells customers about a winter clothes sale: its purpose is to announce the sale, 행사를 안내하려고."),
        q(26, "들은 내용과 같은 것을 고르십시오.", ["할인 행사는 하루 동안 합니다.", "코트를 반값에 살 수 있습니다.", "할인 행사는 오 층에서 합니다.", "모든 손님이 장갑을 받습니다."], 3, "오 층에서 … 할인 행사를 합니다: the sale is on the fifth floor. It lasts a week, the discount is 30%, not half price, and only customers who spend 100,000 won get gloves."),
      ], I25_EN),
      listen(I25, rec("27~28번", 2, ["남자: 수진 씨, 이사했어요?", "여자: 네, 지난주에 학교 근처로 이사했어요.", "남자: 새 집은 어때요?", "여자: 전에 살던 집보다 좁아요. 그런데 학교까지 걸어서 십 분이면 가요. 그래서 아침에 더 잘 수 있어요.", "남자: 정말 좋겠네요. 집들이는 언제 해요?", "여자: 다음 주 토요일에 할 거예요. 민수 씨도 꼭 오세요."]), [
        q(27, "두 사람이 무엇에 대해 이야기하고 있는지 고르십시오.", ["학교 수업", "주말 계획", "아침 운동", "이사한 집"], 4, "The whole conversation is about the place she has just moved to: 이사한 집. The housewarming (집들이) is one detail of it."),
        q(28, "들은 내용과 같은 것을 고르십시오.", ["여자는 학교까지 걸어서 갑니다.", "여자는 다음 주에 이사합니다.", "새 집은 전에 살던 집보다 넓습니다.", "남자는 집들이를 할 겁니다."], 1, "학교까지 걸어서 십 분이면 가요: she walks to school in ten minutes. She moved last week, the new place is smaller (좁아요), and the housewarming is hers."),
      ], I25_EN),
      listen(I25, rec("29~30번", 2, ["여자: 사장님, 이 빵집은 아침 일곱 시에 문을 여네요. 왜 이렇게 일찍 여세요?", "남자: 출근하는 사람들 때문이에요. 아침을 못 먹고 회사에 가는 사람이 많잖아요. 그분들이 따뜻한 빵을 드시면 좋겠다고 생각했어요.", "여자: 힘들지 않으세요?", "남자: 새벽 네 시에 일어나야 해서 조금 힘들어요. 하지만 손님들이 맛있다고 웃으면 정말 기뻐요."]), [
        q(29, "남자가 빵집 문을 일찍 여는 이유를 고르십시오.", ["빵이 많이 남아서", "저녁에 다른 일을 해서", "출근하는 사람들이 아침에 빵을 먹게 하려고", "새벽에 일어나는 것을 좋아해서"], 3, "출근하는 사람들 때문이에요: people who skip breakfast on the way to work can have warm bread. -게 하려고 means 'so that someone can …'."),
        q(30, "들은 내용과 같은 것을 고르십시오.", ["빵집은 아침 아홉 시에 문을 엽니다.", "남자는 새벽 네 시에 일어납니다.", "남자는 일이 하나도 힘들지 않습니다.", "손님들은 빵이 비싸다고 말합니다."], 2, "새벽 네 시에 일어나야 해서: he gets up at four. The shop opens at seven, and he admits it's a little hard (조금 힘들어요)."),
      ], I25_EN),
    ],
  },
  (n) => (TOPIK_I_LISTENING_FOURS.has(n) ? 4 : 3)
);
