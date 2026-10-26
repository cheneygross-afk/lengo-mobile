// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-i-2-reading.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { IMAGE_NOTE, TOPIK_I_READING_THREES, q, read, weigh } from "./text";

// TOPIK I practice test 2 -- 읽기 (reading), questions 31-70, 60 minutes,
// in the real test's order of question types (see topik-i-1-reading.ts).
const I31 = "무엇에 대한 내용입니까? 알맞은 것을 고르십시오.";
const I31_EN = "What is this about? Choose the right word.";
const I34 = "(  )에 들어갈 가장 알맞은 것을 고르십시오.";
const I34_EN = "Choose the best word or ending for the gap.";
const I40 = "다음을 읽고 맞지 않는 것을 고르십시오.";
const I40_EN = `${IMAGE_NOTE} Choose the sentence that does NOT match it.`;
const I43 = "다음의 내용과 같은 것을 고르십시오.";
const I43_EN = "Choose the sentence that matches the text.";
const I46 = "다음을 읽고 중심 생각을 고르십시오.";
const I46_EN = "Choose the writer's main idea.";
const I49 = "다음을 읽고 물음에 답하십시오.";
const I49_EN = "Read the text and answer the two questions.";
const I57 = "다음을 순서대로 맞게 배열한 것을 고르십시오.";
const I57_EN = "Choose the order that makes a connected text. Words such as 그래서, 결국 and 그 show what must come before a sentence.";

export const TOPIK_I_2_READING: ExamPaper = weigh(
  {
    id: "reading",
    kind: "reading",
    title: "읽기",
    minutes: 60,
    group: 1,
    tasks: [
      read(I31, undefined, [
        q(31, "동생은 열 살입니다. 저는 스무 살입니다.", ["키", "나이", "이름", "생일"], 2, "열 살 and 스무 살 are ages: 나이."),
        q(32, "저는 사과를 좋아합니다. 딸기도 좋아합니다.", ["과일", "채소", "가게", "시장"], 1, "Apples (사과) and strawberries (딸기) are fruit, 과일."),
        q(33, "저는 지하철을 탑니다. 버스도 탑니다.", ["여행", "위치", "공부", "교통"], 4, "The underground and the bus are means of transport: 교통."),
      ], I31_EN),
      read(I34, undefined, [
        q(34, "목이 마릅니다. (  )을 마십니다.", ["빵", "밥", "물", "떡"], 3, "목이 마르다 is to be thirsty, and you drink (마시다) water. Bread, rice and rice cakes are eaten (먹다)."),
        q(35, "저는 (  )에서 일합니다. 아이들에게 한국어를 가르칩니다.", ["학교", "공항", "병원", "은행"], 1, "Teaching children happens at a school, 학교."),
        q(36, "저는 지하철(  ) 회사에 갑니다.", ["로", "를", "에", "가"], 1, "(으)로 marks the means of transport: 지하철로, 버스로. After a vowel or ㄹ it's 로 (지하철로, 버스로), after other consonants 으로 (손으로); on foot is 걸어서."),
        q(37, "내일은 친구 생일입니다. 그래서 오늘 선물을 (  ).", ["팔았습니다", "샀습니다", "잊었습니다", "받았습니다"], 2, "Tomorrow is a friend's birthday, so today you bought (샀습니다) a present. 받았습니다 would mean you received one."),
        q(38, "동생은 키가 (  ). 그래서 농구를 잘합니다.", ["작습니다", "낮습니다", "큽니다", "많습니다"], 3, "Height is 키가 크다 / 키가 작다. Tall people tend to be good at basketball: 큽니다. 높다 and 낮다 are for buildings and mountains, not people."),
        q(39, "이 영화는 (  ) 재미있습니다. 벌써 세 번 봤습니다.", ["별로", "전혀", "조금", "아주"], 4, "Seeing it three times means it's very good: 아주. 별로 and 전혀 only go with a negative (별로 재미없다)."),
      ], I34_EN),
      read(
        I40,
        { title: "한국 문화 체험", body: "한복 입기, 떡 만들기\n때: 11월 14일 토요일 10:00~16:00\n곳: 시민회관 2층\n참가비: 무료\n※ 외국인만 신청할 수 있습니다." },
        [q(40, "", ["한복을 입어 볼 수 있습니다.", "돈을 내지 않아도 됩니다.", "체험은 오후 네 시에 끝납니다.", "한국 사람도 신청할 수 있습니다."], 4, "외국인만 신청할 수 있습니다: only foreigners can sign up. 무료 means free, and 16:00 is 4 p.m.")],
        I40_EN
      ),
      read(
        I40,
        { title: "영화표", body: "하늘시네마\n영화: 바다의 노래\n날짜: 11월 21일 토요일 19:30\n상영관: 5관\n좌석: F열 8번\n가격: 14,000원" },
        [q(41, "", ["영화는 저녁에 시작합니다.", "영화표는 만 사천 원입니다.", "영화는 3관에서 합니다.", "좌석은 F열 8번입니다."], 3, "상영관: 5관, so the film shows in screen 5, not 3. 19:30 is 7.30 in the evening.")],
        I40_EN
      ),
      read(
        I40,
        { title: "엘리베이터 점검 안내", body: "내일 오전 10시부터 12시까지 엘리베이터를 점검합니다. 이 시간에는 엘리베이터를 사용할 수 없습니다. 계단을 이용해 주십시오.\n\n관리사무소" },
        [q(42, "", ["점검은 두 시간 동안 합니다.", "점검 시간에는 계단으로 다녀야 합니다.", "관리사무소에서 이 글을 썼습니다.", "점검은 오후에 합니다."], 4, "오전 10시부터 12시까지: the inspection (점검) is in the morning, ending at noon.")],
        I40_EN
      ),
      read(I43, "저는 지난 주말에 친구와 바다에 갔습니다. 바다에서 수영을 하고 맛있는 회를 먹었습니다. 다음에는 가족과 같이 가고 싶습니다.", [
        q(43, "", ["저는 혼자 바다에 갔습니다.", "저는 바다에서 수영을 했습니다.", "저는 가족과 바다에 갔습니다.", "저는 회를 먹지 않았습니다."], 2, "바다에서 수영을 하고: the writer swam. They went with a friend; going with family is next time's plan."),
      ], I43_EN),
      read(I43, "우리 학교 식당은 음식이 싸고 맛있습니다. 그래서 점심시간에는 학생이 아주 많습니다. 저는 사람이 적은 1시 반에 갑니다.", [
        q(44, "", ["학교 식당은 비쌉니다.", "점심시간에는 식당에 사람이 적습니다.", "식당 음식은 맛이 없습니다.", "저는 1시 반에 식당에 갑니다."], 4, "사람이 적은 1시 반에 갑니다: the writer goes at half past one, when it's less crowded. The food is cheap (싸다) and good."),
      ], I43_EN),
      read(I43, "저는 아침마다 강아지와 산책을 합니다. 강아지 이름은 콩이입니다. 콩이는 세 살이고 사과를 제일 좋아합니다.", [
        q(45, "", ["강아지는 사과를 좋아합니다.", "저는 저녁마다 산책합니다.", "강아지는 다섯 살입니다.", "강아지 이름은 사과입니다."], 1, "사과를 제일 좋아합니다: apples are the puppy's favourite. The walks are every morning (아침마다), and the dog is three."),
      ], I43_EN),
      read(I46, "저는 다음 주에 이사를 합니다. 그런데 짐이 많아서 혼자 하기 어렵습니다. 친구들이 도와주면 좋겠습니다.", [
        q(46, "", ["새 집이 마음에 듭니다.", "이사를 혼자 하고 싶습니다.", "친구들이 이사를 도와주면 좋겠습니다.", "짐을 정리하는 것이 재미있습니다."], 3, "-(으)면 좋겠습니다 states a wish: the writer hopes friends will help with the move."),
      ], I46_EN),
      read(I46, "저는 한국 드라마를 자주 봅니다. 처음에는 자막을 보았지만 지금은 자막 없이 봅니다. 드라마로 한국어를 공부하니까 재미있습니다.", [
        q(47, "", ["자막이 있어야 드라마를 볼 수 있습니다.", "드라마로 한국어를 공부하는 것이 재미있습니다.", "한국 드라마는 너무 깁니다.", "드라마를 보는 시간이 아깝습니다."], 2, "The last sentence gives the main idea: learning Korean through dramas is fun. 자막 is subtitles."),
      ], I46_EN),
      read(I46, "저는 내일 중요한 면접이 있습니다. 그래서 오늘은 일찍 자려고 합니다. 잠을 잘 자야 면접을 잘 볼 수 있습니다.", [
        q(48, "", ["면접 준비를 오래 해야 합니다.", "면접은 너무 어렵습니다.", "내일 일찍 일어나고 싶습니다.", "면접 전에 잠을 잘 자야 합니다."], 4, "-아야/어야 means 'only if': only with a good night's sleep can you do well in an interview (면접을 잘 보다)."),
      ], I46_EN),
      read(I49, "저는 작년부터 일기를 씁니다. 처음에는 쓸 것이 없어서 힘들었습니다. 그래서 하루에 한 줄만 썼습니다. 그런데 매일 쓰니까 (  ㉠  ) 쓰는 것이 쉬워졌습니다. 지금은 한 쪽 넘게 씁니다. 가끔 옛날 일기를 읽으면 아주 재미있습니다.", [
        q(49, "㉠에 들어갈 알맞은 말을 고르십시오.", ["점점", "벌써", "아직", "별로"], 1, "Writing every day made it easier little by little: 점점 (gradually) goes with change, -아/어지다."),
        q(50, "이 글의 내용과 같은 것을 고르십시오.", ["저는 올해 일기를 쓰기 시작했습니다.", "처음에는 일기를 한 줄만 썼습니다.", "지금도 일기 쓰는 것이 힘듭니다.", "옛날 일기는 읽지 않습니다."], 2, "하루에 한 줄만 썼습니다: one line a day at first. The diary started last year (작년부터), and now it's easy."),
      ], I49_EN),
      read(I49, "물을 자주 마시는 것은 건강에 좋습니다. 우리 몸의 70%는 물입니다. 물을 충분히 마시면 피부도 좋아지고 피곤함도 줄어듭니다. 하지만 한꺼번에 많이 마시는 것은 좋지 않습니다. 하루에 여러 번 (  ㉠  ) 마시는 것이 좋습니다.", [
        q(51, "㉠에 들어갈 알맞은 말을 고르십시오.", ["한 번에", "조금씩", "차갑게", "빨리"], 2, "The text warns against drinking a lot at once (한꺼번에 많이), so the advice is the opposite: a little at a time, 조금씩."),
        q(52, "무엇에 대한 이야기인지 고르십시오.", ["피부를 관리하는 방법", "물을 사는 방법", "물을 마시는 방법", "피곤할 때 먹는 음식"], 3, "The text is about how to drink water well: often, and a little at a time."),
      ], I49_EN),
      read(I49, "저는 대학교 1학년 때 처음 혼자 살기 시작했습니다. 처음에는 요리도 청소도 다 (  ㉠  ). 그래서 어머니께 전화해서 자주 물어보았습니다. 지금은 혼자 사는 것에 익숙해졌습니다. 이제는 친구들을 집에 초대해서 음식을 만들어 줍니다.", [
        q(53, "㉠에 들어갈 알맞은 말을 고르십시오.", ["쉬웠습니다", "어려웠습니다", "재미있었습니다", "끝났습니다"], 2, "The writer had to phone their mother for help (그래서 … 물어보았습니다), so everything was hard at first: 어려웠습니다."),
        q(54, "이 글의 내용과 같은 것을 고르십시오.", ["저는 지금 가족과 같이 삽니다.", "저는 어머니께 자주 전화해서 물어보았습니다.", "저는 아직 혼자 사는 것이 힘듭니다.", "친구들이 저에게 음식을 만들어 줍니다."], 2, "어머니께 전화해서 자주 물어보았습니다. 께 is the honorific form of 에게. Now the writer cooks for friends, not the other way round."),
      ], I49_EN),
      read(I49, "요즘 많은 사람들이 중고 물건을 사고팝니다. 휴대폰 앱으로 쉽게 물건을 팔 수 있습니다. 필요 없는 물건을 팔면 돈을 벌 수 있고, 필요한 물건을 싸게 살 수도 있습니다. (  ㉠  ) 물건을 사기 전에 사진과 설명을 잘 확인해야 합니다. 물건이 사진과 다를 수도 있기 때문입니다.", [
        q(55, "㉠에 들어갈 알맞은 말을 고르십시오.", ["그래서", "그리고", "그런데", "그러니까"], 3, "After the good points, the text turns to a warning: 그런데 (but, however) changes direction. 그래서 and 그러니까 would make the warning a result of the good points."),
        q(56, "이 글의 내용과 같은 것을 고르십시오.", ["중고 물건은 앱으로 팔 수 없습니다.", "중고 물건은 항상 사진과 같습니다.", "중고 물건을 사면 돈을 아낄 수 있습니다.", "중고 물건을 사는 사람이 줄고 있습니다."], 3, "필요한 물건을 싸게 살 수도 있습니다: buying second-hand (중고) saves money. Items may differ from their photos, and more people are trading."),
      ], I49_EN),
      read(I57, "(가) 그래서 다음 날 아침에 일찍 일어날 수 없었습니다.\n(나) 어제 저는 밤늦게까지 축구 경기를 봤습니다.\n(다) 결국 학교에 지각했습니다.\n(라) 경기가 끝난 시간은 새벽 두 시였습니다.", [
        q(57, "", ["(나)-(가)-(라)-(다)", "(나)-(라)-(가)-(다)", "(라)-(나)-(다)-(가)", "(라)-(가)-(나)-(다)"], 2, "Late-night football (나), finishing at 2 a.m. (라), so no early start (가), and in the end late for school (다). 결국 (in the end) closes the story."),
      ], I57_EN),
      read(I57, "(가) 그 가게에서는 손님이 직접 컵을 디자인할 수 있습니다.\n(나) 친구 생일에 그 컵을 선물했는데 친구가 아주 좋아했습니다.\n(다) 저는 지난주에 인사동에 있는 작은 가게에 갔습니다.\n(라) 저는 컵에 친구의 이름을 쓰고 꽃을 그렸습니다.", [
        q(58, "", ["(다)-(가)-(라)-(나)", "(다)-(라)-(가)-(나)", "(가)-(다)-(나)-(라)", "(가)-(라)-(다)-(나)"], 1, "The shop is introduced in (다) before 그 가게 in (가) can refer to it; then the writer designs the cup (라) and gives it (나, 그 컵)."),
      ], I57_EN),
      read(I49, "저는 지난달에 처음으로 마라톤 대회에 나갔습니다. (㉠) 10킬로미터를 달리는 대회였습니다. (㉡) 중간에 너무 힘들어서 멈추고 싶었습니다. (㉢) 그때 길에 있던 사람들이 힘내라고 응원해 주었습니다. (㉣) 그래서 끝까지 달릴 수 있었습니다.", [
        q(59, "다음 문장이 들어갈 곳을 고르십시오. 〈그 응원을 듣고 다시 힘이 났습니다.〉", ["㉠", "㉡", "㉢", "㉣"], 4, "그 응원 refers to the cheering, so the sentence comes right after it, at ㉣, and leads into 그래서 끝까지 달릴 수 있었습니다."),
        q(60, "이 글의 내용과 같은 것을 고르십시오.", ["저는 마라톤 대회에 여러 번 나갔습니다.", "대회는 10킬로미터를 달리는 대회였습니다.", "저는 중간에 달리기를 그만두었습니다.", "길에 사람이 한 명도 없었습니다."], 2, "10킬로미터를 달리는 대회였습니다. It was the writer's first race (처음으로), and they ran to the end."),
      ], I49_EN),
      read(I49, "우리 아파트 1층에는 작은 도서관이 있습니다. 이 도서관은 주민들이 직접 운영합니다. 주민들이 집에서 읽은 책을 가지고 와서 도서관에 놓습니다. 그래서 책이 (  ㉠  ). 아이들은 학교가 끝나면 이곳에 와서 책을 읽고 숙제를 합니다.", [
        q(61, "㉠에 들어갈 알맞은 말을 고르십시오.", ["점점 많아집니다", "하나도 없습니다", "너무 비쌉니다", "빨리 없어집니다"], 1, "Residents keep bringing books, so the collection keeps growing: 점점 많아집니다."),
        q(62, "이 글의 내용과 같은 것을 고르십시오.", ["도서관은 아파트 꼭대기 층에 있습니다.", "아이들은 도서관에 갈 수 없습니다.", "도서관 책은 모두 새 책입니다.", "주민들이 도서관을 운영합니다."], 4, "주민들이 직접 운영합니다: the residents run it themselves. It's on the ground floor (1층), and the books are ones residents have read."),
      ], I49_EN),
      read(
        I49,
        {
          title: "이메일",
          body: "받는 사람: 김민수\n보내는 사람: 하늘피트니스\n제목: 회원권 기간 안내\n\n김민수 회원님, 안녕하세요? 하늘피트니스입니다. 회원님의 회원권이 이번 달 30일에 끝납니다. 다음 달 10일까지 다시 등록하시면 한 달을 무료로 드립니다. 등록은 안내 데스크나 홈페이지에서 하실 수 있습니다. 감사합니다.",
        },
        [
          q(63, "왜 윗글을 썼는지 맞는 것을 고르십시오.", ["회원권 기간이 끝나는 것을 알리려고", "운동 방법을 가르치려고", "새 운동 기구를 소개하려고", "안내 데스크 위치를 알려 주려고"], 1, "The gym writes to say the membership ends on the 30th and how to renew: 기간이 끝나는 것을 알리려고."),
          q(64, "윗글의 내용과 같은 것을 고르십시오.", ["회원권은 다음 달 10일에 끝납니다.", "등록은 전화로만 할 수 있습니다.", "김민수 씨는 피트니스 직원입니다.", "다음 달 10일까지 다시 등록하면 한 달을 무료로 다닐 수 있습니다."], 4, "다시 등록하시면 한 달을 무료로 드립니다. The membership ends on the 30th of this month; registration is at the desk or online."),
        ],
        I49_EN
      ),
      read(I49, "한국에서는 아기가 태어나고 1년이 되면 돌잔치를 합니다. 옛날에는 아기들이 첫 생일 전에 아파서 죽는 경우가 많았습니다. 그래서 1년 동안 건강하게 (  ㉠  ) 축하하려고 잔치를 했습니다. 돌잔치에서는 아기 앞에 실, 돈, 연필 같은 물건을 놓고 아기가 하나를 잡게 합니다. 이것을 돌잡이라고 합니다. 아기가 실을 잡으면 오래 산다고 생각합니다.", [
        q(65, "㉠에 들어갈 알맞은 말을 고르십시오.", ["자란 것을", "자랄 것을", "자라는 것을", "자라지 않은 것을"], 1, "The party celebrates that the baby has grown up healthy over the year: a finished event takes the past modifier -(으)ㄴ, 자란 것."),
        q(66, "이 글의 내용과 같은 것을 고르십시오.", ["돌잔치는 아기가 태어난 날 합니다.", "실을 잡으면 돈을 많이 번다고 생각합니다.", "돌잡이에서 아기는 물건을 하나 잡습니다.", "옛날에는 아기들이 모두 건강했습니다."], 3, "아기가 하나를 잡게 합니다: the baby picks one object. The party is at one year old, and the thread means a long life."),
      ], I49_EN),
      read(I49, "요즘 혼밥을 하는 사람이 많아지고 있습니다. 혼밥은 혼자 밥을 먹는 것입니다. 옛날에는 혼자 식당에 가는 것을 어색하게 생각하는 사람이 많았습니다. 그런데 요즘은 혼자 사는 사람이 늘어서 혼자 먹기 편한 식당도 많아졌습니다. 이런 식당에는 혼자 앉을 수 있는 자리가 있고 음식도 1인분씩 (  ㉠  ).", [
        q(67, "㉠에 들어갈 알맞은 말을 고르십시오.", ["팔지 않습니다", "먹으면 안 됩니다", "만들 수 없습니다", "주문할 수 있습니다"], 4, "These restaurants suit solo diners, so you can order single portions: 1인분씩 주문할 수 있습니다."),
        q(68, "이 글의 내용과 같은 것을 고르십시오.", ["옛날에도 혼밥이 편했습니다.", "혼자 사는 사람이 줄고 있습니다.", "혼자 먹기 편한 식당이 많아졌습니다.", "혼밥은 친구와 밥을 먹는 것입니다."], 3, "혼자 먹기 편한 식당도 많아졌습니다. 혼밥 is short for 혼자 먹는 밥, eating alone, and more people live alone."),
      ], I49_EN),
      read(I49, "저는 회사에 다니면서 주말에는 동네 아이들에게 축구를 가르칩니다. 3년 전에 공원에서 축구를 하고 있었는데 아이들이 같이 하고 싶다고 했습니다. 그때부터 매주 토요일 아침에 아이들과 공을 찹니다. 처음에는 다섯 명이었는데 지금은 스무 명이 넘습니다. 주말에 쉬지 못해서 (  ㉠  ) 아이들이 웃는 모습을 보면 힘이 납니다.", [
        q(69, "㉠에 들어갈 알맞은 말을 고르십시오.", ["피곤할 때도 있지만", "피곤하니까", "피곤하려고", "피곤해서"], 1, "Tired sometimes, but cheered up by the children: -지만 sets up the contrast. 피곤해서 would make tiredness the reason for feeling energised."),
        q(70, "이 글에서 알 수 있는 것을 고르십시오.", ["저는 축구 선수입니다.", "축구를 배우는 아이들이 많아졌습니다.", "저는 일요일마다 축구를 가르칩니다.", "아이들은 축구를 별로 좋아하지 않습니다."], 2, "From five children to more than twenty: the group has grown. The writer is an office worker who coaches on Saturday mornings."),
      ], I49_EN),
    ],
  },
  (n) => (TOPIK_I_READING_THREES.has(n) ? 3 : 2)
);
