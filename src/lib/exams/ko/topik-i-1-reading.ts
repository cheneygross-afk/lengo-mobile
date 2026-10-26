// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-i-1-reading.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { IMAGE_NOTE, TOPIK_I_READING_THREES, q, read, weigh } from "./text";

// TOPIK I practice test 1 -- 읽기 (reading), questions 31-70, 60 minutes.
// The real test's question types in its order: what a text is about
// (31-33), the word for the gap (34-39), notices with one wrong statement
// (40-42), the same content (43-45), the main idea (46-48), then texts with
// two questions each (49-56), putting sentences in order (57-58), and
// longer texts with two questions each (59-70).
const I31 = "무엇에 대한 내용입니까? 알맞은 것을 고르십시오.";
const I31_EN = "What is this about? Choose the right word.";
const I34 = "(  )에 들어갈 가장 알맞은 것을 고르십시오.";
const I34_EN = "Choose the best word or ending for the gap.";
const I40 = "다음을 읽고 맞지 않는 것을 고르십시오.";
const I43 = "다음의 내용과 같은 것을 고르십시오.";
const I43_EN = "Choose the sentence that matches the text.";
const I46 = "다음을 읽고 중심 생각을 고르십시오.";
const I46_EN = "Choose the writer's main idea.";
const I49 = "다음을 읽고 물음에 답하십시오.";
const I49_EN = "Read the text and answer the two questions.";
const I57 = "다음을 순서대로 맞게 배열한 것을 고르십시오.";
const I57_EN = "Choose the order that makes a connected text. Words such as 그래서, 그런데 and 그 show what must come before a sentence.";

export const TOPIK_I_1_READING: ExamPaper = weigh(
  {
    id: "reading",
    kind: "reading",
    title: "읽기",
    minutes: 60,
    group: 1,
    tasks: [
      read(I31, undefined, [
        q(31, "저는 은행에서 일합니다. 형은 경찰입니다.", ["직업", "날씨", "주말", "운동"], 1, "Where I work and what my brother does: jobs, 직업."),
        q(32, "오늘은 눈이 옵니다. 바람도 많이 붑니다.", ["쇼핑", "공부", "날씨", "음식"], 3, "Snow (눈이 오다) and wind (바람이 불다) are the weather, 날씨."),
        q(33, "저는 일요일에 쉽니다. 월요일에 다시 일합니다.", ["방학", "요일", "나라", "생일"], 2, "일요일 and 월요일 are days of the week: 요일."),
      ], I31_EN),
      read(I34, undefined, [
        q(34, "배가 고픕니다. (  )을 먹습니다.", ["밥", "물", "책", "옷"], 1, "You eat (먹다) rice when you're hungry. 물 is drunk (마시다), and 물을 would need … 마십니다."),
        q(35, "사진을 찍고 싶습니다. (  )가 필요합니다.", ["모자", "지도", "휴지", "카메라"], 4, "To take photos (사진을 찍다) you need a camera, 카메라."),
        q(36, "친구가 부산에 삽니다. 그래서 저는 친구를 만나러 부산(  ) 갑니다.", ["을", "에", "이", "의"], 2, "가다 takes 에 for the destination: 부산에 갑니다. 에서 would mark where an action happens."),
        q(37, "오늘 시험이 있습니다. 그래서 어젯밤 늦게까지 (  ).", ["잤습니다", "놀았습니다", "쉬었습니다", "공부했습니다"], 4, "그래서 links the exam to what you did last night: you studied (공부했습니다) late."),
        q(38, "이 가방은 아주 (  ). 그래서 혼자 들 수 없습니다.", ["무겁습니다", "가볍습니다", "쌉니다", "작습니다"], 1, "You can't carry it alone (혼자 들 수 없습니다) because it's heavy: 무겁습니다 (from 무겁다, a ㅂ-irregular adjective)."),
        q(39, "길이 많이 막힙니다. (  ) 지하철을 탑시다.", ["그런데", "하지만", "그러니까", "그리고"], 3, "A suggestion (-ㅂ시다) after a reason takes 그러니까. 그래서 can't come before a suggestion or a command, which is why it isn't among the options; 그런데 and 하지만 would contrast."),
      ], I34_EN),
      read(
        I40,
        { title: "생일 파티에 초대합니다", body: "날짜: 12월 5일 토요일 오후 6시\n장소: 우리 집 (한국아파트 101동 302호)\n※ 선물은 가져오지 마세요!\n\n수빈" },
        [q(40, "", ["수빈 씨가 파티를 합니다.", "파티는 저녁에 합니다.", "파티는 수빈 씨 집에서 합니다.", "선물을 가지고 가야 합니다."], 4, "선물은 가져오지 마세요: don't bring a present. 오후 6시 counts as evening, and 우리 집 is 수빈's home.")],
        `${IMAGE_NOTE} Choose the sentence that does NOT match it.`
      ),
      read(
        I40,
        { title: "한강공원 자전거 대여", body: "1시간: 3,000원 / 하루: 15,000원\n대여 시간: 오전 9시 ~ 오후 8시\n※ 신분증을 꼭 가져오세요." },
        [q(41, "", ["자전거를 하루 동안 빌릴 수 있습니다.", "밤 10시에도 자전거를 빌릴 수 있습니다.", "자전거를 빌리려면 신분증이 있어야 합니다.", "한 시간에 삼천 원입니다."], 2, "Bikes are lent from 9 a.m. to 8 p.m. (오후 8시), so not at 10 at night. 대여 means hiring out, 빌리다 is to borrow or hire.")],
        `${IMAGE_NOTE} Choose the sentence that does NOT match it.`
      ),
      read(
        I40,
        { title: "문자 메시지", body: "민수 씨, 오늘 저녁 7시 약속 기억하지요? 제가 회의가 있어서 30분쯤 늦을 것 같아요. 먼저 식당에 들어가 있으세요. 미안해요.\n\n지은" },
        [q(42, "", ["지은 씨는 회의가 있습니다.", "지은 씨가 먼저 식당에 갑니다.", "두 사람은 저녁에 만납니다.", "지은 씨는 늦게 도착할 겁니다."], 2, "먼저 식당에 들어가 있으세요 asks 민수 to go in first, so he arrives first, not 지은.")],
        `${IMAGE_NOTE} Choose the sentence that does NOT match it.`
      ),
      read(I43, "저는 매일 아침 공원에서 달리기를 합니다. 그런데 오늘은 비가 와서 집에서 요가를 했습니다. 내일은 다시 공원에 갈 겁니다.", [
        q(43, "", ["오늘은 공원에 갔습니다.", "오늘 비가 왔습니다.", "저는 매일 요가를 합니다.", "내일은 집에서 운동할 겁니다."], 2, "오늘은 비가 와서: it rained today, so the writer did yoga at home instead of running in the park."),
      ], I43_EN),
      read(I43, "우리 동네에 새 도서관이 생겼습니다. 도서관은 집에서 가깝고 조용합니다. 저는 주말마다 거기에서 책을 읽습니다.", [
        q(44, "", ["저는 주말에 도서관에 갑니다.", "도서관은 집에서 멉니다.", "도서관은 오래되었습니다.", "도서관은 시끄럽습니다."], 1, "주말마다 means every weekend. The library is new (새), close (가깝다) and quiet (조용하다)."),
      ], I43_EN),
      read(I43, "저는 한국 음식을 좋아합니다. 특히 비빔밥을 자주 먹습니다. 그런데 매운 음식은 잘 못 먹습니다. 그래서 고추장을 조금만 넣습니다.", [
        q(45, "", ["저는 매운 음식을 잘 먹습니다.", "저는 비빔밥을 가끔 먹습니다.", "저는 한국 음식을 싫어합니다.", "저는 비빔밥에 고추장을 조금 넣습니다."], 4, "고추장을 조금만 넣습니다: only a little chilli paste, because the writer can't handle spicy food (잘 못 먹습니다). 자주 is often, 가끔 sometimes."),
      ], I43_EN),
      read(I46, "저는 다음 달에 한국으로 여행을 갑니다. 거기에서 한국 사람들과 이야기를 많이 하고 싶습니다. 그래서 요즘 한국어를 열심히 공부하고 있습니다.", [
        q(46, "", ["한국어를 가르치고 싶습니다.", "다음 달에 한국에서 일하고 싶습니다.", "한국 사람들과 한국어로 이야기하고 싶습니다.", "여행을 혼자 가고 싶습니다."], 3, "The trip is the background; what the writer wants is to talk with Korean people, which is why they're studying."),
      ], I46_EN),
      read(I46, "우리 집 근처에는 큰 시장이 있습니다. 시장에는 물건이 많고 값도 쌉니다. 그래서 저는 마트보다 시장에 자주 갑니다.", [
        q(47, "", ["시장에서 물건을 사는 것이 좋습니다.", "마트가 시장보다 편합니다.", "시장에 가려면 시간이 많이 걸립니다.", "마트에는 물건이 많지 않습니다."], 1, "Plenty of goods and low prices make the market the writer's choice: shopping at the market is better. 마트보다 means 'rather than the supermarket'."),
      ], I46_EN),
      read(I46, "저는 지난달부터 자기 전에 휴대폰을 보지 않습니다. 그 대신 책을 읽습니다. 그 후로 잠을 더 잘 잡니다.", [
        q(48, "", ["휴대폰을 새로 사고 싶습니다.", "책을 더 많이 사야 합니다.", "밤에 일찍 자는 것은 어렵습니다.", "자기 전에 휴대폰을 안 보면 잠을 잘 잡니다."], 4, "Since giving up the phone at bedtime (그 후로), the writer sleeps better: that change is the point of the text."),
      ], I46_EN),
      read(I49, "저는 회사원입니다. 회사가 집에서 멀어서 매일 지하철을 한 시간 동안 탑니다. 처음에는 지하철에서 그냥 잤습니다. 그런데 요즘은 지하철에서 (  ㉠  ) 영어 공부를 합니다. 휴대폰으로 영어 방송을 듣습니다. 그래서 한 시간이 아주 빨리 지나갑니다.", [
        q(49, "㉠에 들어갈 알맞은 말을 고르십시오.", ["자지 않고", "자고 나서", "자려고", "자니까"], 1, "Before, the writer slept; now, instead of sleeping, they study: 자지 않고 (without sleeping, instead of sleeping)."),
        q(50, "이 글의 내용과 같은 것을 고르십시오.", ["저는 회사 근처에 삽니다.", "저는 지하철을 삼십 분 동안 탑니다.", "저는 지하철에서 영어 방송을 듣습니다.", "저는 요즘 지하철에서 잡니다."], 3, "휴대폰으로 영어 방송을 듣습니다: English programmes on the phone. The ride is an hour, and the office is far from home."),
      ], I49_EN),
      read(I49, "동물을 키우고 싶은 사람이 많습니다. 하지만 동물을 키우기 전에 생각해야 할 것이 있습니다. 먼저 동물은 매일 밥을 먹고 산책을 해야 합니다. 그래서 동물을 위한 시간이 (  ㉠  ). 또 동물이 아프면 병원에 가야 합니다. 병원비가 많이 들 수도 있습니다. 동물은 가족과 같습니다. 그러니까 잘 생각하고 결정해야 합니다.", [
        q(51, "㉠에 들어갈 알맞은 말을 고르십시오.", ["필요 없습니다", "적어도 됩니다", "있어야 합니다", "끝났습니다"], 3, "Pets need feeding and walking every day, so you must have time for them: 시간이 있어야 합니다."),
        q(52, "무엇에 대한 이야기인지 고르십시오.", ["동물을 키우기 전에 생각할 것", "동물 병원을 찾는 방법", "동물과 산책하는 방법", "동물을 좋아하는 이유"], 1, "The second sentence names the topic: 키우기 전에 생각해야 할 것, what to think about before getting a pet (time, vet bills)."),
      ], I49_EN),
      read(I49, "저는 작년에 처음 김치를 만들었습니다. 할머니께서 방법을 가르쳐 주셨습니다. 배추를 소금에 절이고 양념을 만드는 것이 생각보다 어려웠습니다. 저는 김치를 (  ㉠  ) 할머니께 몇 번이나 전화를 했습니다. 하지만 다 만든 후에 김치를 먹어 보니까 정말 맛있었습니다. 올해 겨울에는 친구들과 같이 만들어 보고 싶습니다.", [
        q(53, "㉠에 들어갈 알맞은 말을 고르십시오.", ["만든 후에", "만들면서", "만들기 전에", "만들지만"], 2, "The phone calls happened while the writer was making the kimchi and found it hard: -(으)면서 means 'while doing'."),
        q(54, "이 글의 내용과 같은 것을 고르십시오.", ["저는 김치를 여러 번 만들어 봤습니다.", "김치를 만드는 것은 쉬웠습니다.", "할머니께서 김치 만드는 방법을 가르쳐 주셨습니다.", "올해는 혼자 김치를 만들 겁니다."], 3, "할머니께서 방법을 가르쳐 주셨습니다. Last year was the first time (처음), it was harder than expected, and this year the plan is to make it with friends."),
      ], I49_EN),
      read(I49, "우리 동네에 특별한 가게가 생겼습니다. 이 가게에서는 비닐봉지를 주지 않습니다. 손님들은 집에서 그릇이나 병을 가지고 와서 필요한 만큼 물건을 삽니다. 그릇을 챙기는 것이 처음에는 불편했습니다. (  ㉠  ) 집에 쓰레기가 많이 줄어서 기분이 좋습니다. 요즘은 친구들에게도 이 가게를 소개합니다.", [
        q(55, "㉠에 들어갈 알맞은 말을 고르십시오.", ["그래서", "그러면", "그리고", "그래도"], 4, "It was inconvenient at first, but still the writer is glad: 그래도 (even so) introduces a good side despite what came before."),
        q(56, "이 글의 내용과 같은 것을 고르십시오.", ["손님들은 그릇을 가지고 가게에 갑니다.", "이 가게는 비닐봉지를 팝니다.", "이 가게는 손님이 별로 없습니다.", "저는 이 가게를 친구들에게 소개하지 않습니다."], 1, "손님들은 집에서 그릇이나 병을 가지고 와서: customers bring their own containers. The shop gives no plastic bags at all."),
      ], I49_EN),
      read(I57, "(가) 그래서 편의점에 가서 우산을 샀습니다.\n(나) 아침에는 날씨가 아주 맑았습니다.\n(다) 그런데 오후에 갑자기 비가 왔습니다.\n(라) 그래서 저는 우산을 안 가지고 나왔습니다.", [
        q(57, "", ["(나)-(라)-(다)-(가)", "(나)-(다)-(라)-(가)", "(라)-(나)-(가)-(다)", "(라)-(다)-(나)-(가)"], 1, "Sunny morning (나), so no umbrella (라); but it rained (다), so the writer bought one (가). 그래서 in (라) needs the sunny morning just before it."),
      ], I57_EN),
      read(I57, "(가) 그 친구와 지금도 자주 연락합니다.\n(나) 저는 대학교 때 기숙사에서 살았습니다.\n(다) 같은 방을 쓴 친구는 다른 나라에서 온 유학생이었습니다.\n(라) 우리는 매일 밤 서로의 나라 말을 가르쳐 주었습니다.", [
        q(58, "", ["(나)-(다)-(가)-(라)", "(다)-(나)-(라)-(가)", "(나)-(다)-(라)-(가)", "(다)-(라)-(나)-(가)"], 3, "The dormitory (나) comes first, then the roommate (다), what they did together (라), and today (가). 그 친구 in (가) points back to the roommate."),
      ], I57_EN),
      read(I49, "저는 주말마다 한국 요리 교실에 다닙니다. (㉠) 요리 선생님은 아주 친절하십니다. (㉡) 지난주에는 불고기를 만들었습니다. (㉢) 집에 가서 가족들에게 만들어 주었는데 모두 맛있다고 했습니다. (㉣)", [
        q(59, "다음 문장이 들어갈 곳을 고르십시오. 〈어려운 요리도 쉽게 가르쳐 주십니다.〉", ["㉠", "㉡", "㉢", "㉣"], 2, "The sentence says more about the teacher (가르쳐 주십니다, with honorific -시-), so it follows 선생님은 아주 친절하십니다, at ㉡."),
        q(60, "이 글의 내용과 같은 것을 고르십시오.", ["저는 요리 선생님입니다.", "요리 교실은 평일에 합니다.", "저는 가족에게 불고기를 만들어 주었습니다.", "가족들은 불고기를 좋아하지 않았습니다."], 3, "가족들에게 만들어 주었는데 모두 맛있다고 했습니다: the writer cooked bulgogi for the family, who all liked it. The class is at weekends (주말마다)."),
      ], I49_EN),
      read(I49, "저는 한 달에 한 번 할머니 댁에 갑니다. 할머니 댁은 시골에 있어서 버스를 세 시간이나 타야 합니다. 그래서 가는 길이 조금 힘듭니다. 하지만 할머니를 (  ㉠  ) 힘든 것을 다 잊어버립니다. 할머니는 제가 좋아하는 음식을 많이 만들어 주시고 옛날 이야기도 해 주십니다.", [
        q(61, "㉠에 들어갈 알맞은 말을 고르십시오.", ["만나려고", "만나면", "만나지만", "만나기 전에"], 2, "Whenever the writer sees grandmother, the tiring trip is forgotten: -(으)면, 'when, whenever'."),
        q(62, "이 글의 내용과 같은 것을 고르십시오.", ["할머니 댁은 도시에 있습니다.", "저는 매주 할머니 댁에 갑니다.", "저는 할머니께 음식을 만들어 드립니다.", "할머니 댁까지 버스로 세 시간 걸립니다."], 4, "버스를 세 시간이나 타야 합니다: three hours by bus (-이나 stresses that it's a lot). The visits are once a month, and it's grandmother who cooks."),
      ], I49_EN),
      read(
        I49,
        {
          title: "이메일",
          body: "받는 사람: 한국어반 학생들\n보내는 사람: 박서연\n제목: 다음 주 수업 안내\n\n여러분, 안녕하세요? 다음 주 수요일은 휴일이라서 수업이 없습니다. 그 대신 목요일 오후 2시에 수업을 하겠습니다. 장소는 3층 301호입니다. 목요일에 수업에 올 수 없는 학생은 화요일까지 저에게 이메일을 보내 주세요.\n\n박서연",
        },
        [
          q(63, "왜 윗글을 썼는지 맞는 것을 고르십시오.", ["교실을 예약하려고", "수업 날짜가 바뀐 것을 알리려고", "시험 날짜를 알려 주려고", "휴일 계획을 물어보려고"], 2, "Wednesday's class moves to Thursday because of the holiday: the e-mail announces a change of day. 그 대신 means 'instead'."),
          q(64, "윗글의 내용과 같은 것을 고르십시오.", ["다음 주 수요일에 수업이 있습니다.", "목요일 수업은 오전에 합니다.", "목요일 수업은 3층에서 합니다.", "수업에 못 오는 학생은 전화해야 합니다."], 3, "장소는 3층 301호입니다. The class is at 2 p.m. (오후), and students who can't come should e-mail, not phone."),
        ],
        I49_EN
      ),
      read(I49, "한국 사람들은 옛날에 이사를 하면 이웃에게 떡을 나누어 주었습니다. 새로 온 사람이 이웃들과 인사하고 친해지려고 떡을 (  ㉠  ). 요즘은 아파트에 사는 사람이 많아서 이런 모습을 보기 어렵습니다. 그래도 아직 작은 선물을 들고 이웃에게 인사하러 가는 사람들이 있습니다.", [
        q(65, "㉠에 들어갈 알맞은 말을 고르십시오.", ["주면 안 됩니다", "준 것입니다", "줄 수 없습니다", "준 적이 없습니다"], 2, "The sentence explains why people gave rice cakes: -(으)ㄴ 것입니다 gives the reason or meaning behind what was just said."),
        q(66, "이 글의 내용과 같은 것을 고르십시오.", ["이사를 하면 이웃에게서 떡을 받았습니다.", "요즘도 모든 사람이 떡을 나누어 줍니다.", "요즘은 아파트에 사는 사람이 적습니다.", "지금도 이웃에게 인사하러 가는 사람이 있습니다."], 4, "아직 … 인사하러 가는 사람들이 있습니다: some people still go to greet their neighbours, with a small present. The newcomer gave the rice cakes, not received them."),
      ], I49_EN),
      read(I49, "걷기는 누구나 쉽게 할 수 있는 운동입니다. 특별한 운동복이나 비싼 기구가 없어도 됩니다. 편한 신발만 있으면 언제 어디에서나 (  ㉠  ). 하루에 30분 정도 빠르게 걸으면 건강에 좋습니다. 그런데 처음부터 너무 오래 걸으면 다리가 아플 수 있습니다. 그러니까 조금씩 시간을 늘리는 것이 좋습니다.", [
        q(67, "㉠에 들어갈 알맞은 말을 고르십시오.", ["걸으면 안 됩니다", "걷기 싫습니다", "걸어 봤습니다", "걸을 수 있습니다"], 4, "All you need is comfortable shoes, and then you can walk anywhere: -(으)ㄹ 수 있습니다. 걷다 is ㄷ-irregular: 걸을 수 있다, 걸으면."),
        q(68, "이 글의 내용과 같은 것을 고르십시오.", ["걷기를 하려면 비싼 운동복이 필요합니다.", "걷기는 편한 신발만 있으면 할 수 있습니다.", "처음부터 오래 걷는 것이 좋습니다.", "하루에 세 시간 걸어야 합니다."], 2, "편한 신발만 있으면: only comfortable shoes are needed. The text advises adding time little by little, about 30 minutes a day."),
      ], I49_EN),
      read(I49, "저는 어렸을 때 그림을 그리는 것을 좋아했습니다. 하지만 어른이 된 후에는 바빠서 그림을 그리지 못했습니다. 그런데 지난봄에 회사 근처 문화 센터에서 그림 수업을 듣기 시작했습니다. 다시 그림을 그리니까 어렸을 때로 (  ㉠  ) 기분이 들었습니다. 지금은 일주일에 한 번 수업에 가는 날을 기다립니다. 내년에는 제 그림으로 작은 전시회를 하고 싶습니다.", [
        q(69, "㉠에 들어갈 알맞은 말을 고르십시오.", ["돌아간 것 같은", "돌아가지 않는", "돌아가기 싫은", "돌아가려고 하는"], 1, "Drawing again felt like going back to childhood: -(으)ㄴ 것 같은 기분이 들다, 'to feel as if …'."),
        q(70, "이 글에서 알 수 있는 것을 고르십시오.", ["저는 그림 수업을 좋아합니다.", "저는 어렸을 때 그림을 싫어했습니다.", "저는 매일 그림 수업에 갑니다.", "저는 작년에 전시회를 했습니다."], 1, "수업에 가는 날을 기다립니다: the writer looks forward to class day, so they enjoy it. The class is once a week, and the exhibition is next year's wish."),
      ], I49_EN),
    ],
  },
  (n) => (TOPIK_I_READING_THREES.has(n) ? 3 : 2)
);
