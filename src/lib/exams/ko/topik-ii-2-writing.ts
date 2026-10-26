// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-ii-2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { paras } from "./text";

// TOPIK II practice test 2 -- 쓰기 (writing), questions 51-54, 50 minutes,
// in the real test's format (see topik-ii-1-writing.ts): two gapped texts
// (10 points each), a 200-300 character chart description (30 points) and
// a 600-700 character essay (50 points).
const GAP_RUBRIC = (a: string, b: string) => [
  `Content and task: ㉠ ${a}`,
  `Content and task: ㉡ ${b}`,
  "Organisation: each answer fits the sentences before and after its gap",
  "Language use: one complete sentence per gap, ending in the same style as the text around it",
];

export const TOPIK_II_2_WRITING: ExamPaper = {
  id: "writing",
  kind: "writing",
  title: "쓰기",
  minutes: 50,
  group: 1,
  tasks: [
    {
      title: "51번",
      points: 10,
      instructions: "다음 글의 ㉠과 ㉡에 알맞은 말을 각각 한 문장으로 쓰십시오.",
      instructionsEn: "Write one sentence for each gap, ㉠ and ㉡, in the style of the text. Label them ㉠ and ㉡.",
      write: [
        {
          prompt:
            "[이메일] 제목: 집들이에 초대합니다. 여러분, 안녕하세요? 제가 지난달에 새 집으로 이사를 했습니다. 그래서 이번 주 토요일 저녁 6시에 (㉠). 맛있는 음식을 많이 준비해 놓겠습니다. 집 주소를 모르시는 분은 (㉡). 바로 알려 드리겠습니다. (㉠과 ㉡에 알맞은 문장을 쓰십시오.)",
          minWords: 4,
          maxWords: 20,
          rubric: GAP_RUBRIC(
            "says what the writer is doing on Saturday evening, matching the e-mail's subject",
            "tells readers who don't know the address what to do, given what the next sentence promises"
          ),
          modelAnswer: "㉠ 집들이를 하려고 합니다.\n㉡ 저에게 문자를 보내 주십시오.",
        },
      ],
    },
    {
      title: "52번",
      points: 10,
      instructions: "다음 글의 ㉠과 ㉡에 알맞은 말을 각각 한 문장으로 쓰십시오.",
      instructionsEn: "Write one sentence for each gap, ㉠ and ㉡, in the written style (-다) of the text. Label them ㉠ and ㉡.",
      write: [
        {
          prompt:
            "사람들은 화가 나면 그 감정을 바로 표현하는 것이 좋다고 생각하기도 한다. 그러나 화가 난 상태에서 한 말은 (㉠). 나중에 후회해도 이미 한 말은 되돌릴 수 없기 때문이다. 그러므로 화가 날 때는 바로 말하기보다 (㉡). 잠시 시간을 두면 감정이 가라앉고 상황을 차분하게 볼 수 있다. (㉠과 ㉡에 알맞은 문장을 쓰십시오.)",
          minWords: 4,
          maxWords: 24,
          rubric: GAP_RUBRIC(
            "says what words spoken in anger tend to do, which the next sentence explains",
            "gives the advice that 그러므로 calls for, which the last sentence supports"
          ),
          modelAnswer: "㉠ 상대방에게 상처를 주기 쉽다.\n㉡ 잠시 시간을 두고 마음을 가라앉히는 것이 좋다.",
        },
      ],
    },
    {
      title: "53번",
      points: 30,
      instructions: "다음을 참고하여 '외국인 유학생 수의 변화'에 대한 글을 200~300자로 쓰십시오. 단, 글의 제목을 쓰지 마십시오.",
      instructionsEn:
        "Describe the chart in 200-300 characters (counting spaces) in the written style (-다): who did the survey, the figures and the trend, the causes and the remaining problem. No title, and no opinion of your own.",
      write: [
        {
          prompt:
            "[자료] 외국인 유학생 수의 변화. 조사 기관: 한국교육연구원. 국내 대학의 외국인 유학생 수: 2016년 10만 명, 2021년 15만 명, 2026년 22만 명. 증가 원인: 한국 대중문화에 대한 관심 증가, 대학의 장학금 지원 확대. 과제: 졸업 후 취업의 어려움. (이 자료를 설명하는 글을 200~300자로 쓰십시오. 제목은 쓰지 마십시오.)",
          minWords: 45,
          maxWords: 80,
          rubric: [
            "Content and task: names the survey, gives the three figures and the trend (more than doubled in ten years), both causes and the remaining problem, adding no opinion of your own",
            "Organisation: survey and figures, then causes, then the problem, linked with -에 따르면, 원인으로는 … 을/를 들 수 있다, 그러나",
            "Language use: the written style (-다, -았/었다) throughout, chart vocabulary (증가하다, 두 배 이상, 확대되다, 과제로 남다)",
            "200-300 characters including spaces, and no title",
          ],
          modelAnswer:
            "한국교육연구원의 조사에 따르면 국내 대학에서 공부하는 외국인 유학생 수는 2016년 10만 명에서 2021년 15만 명으로 늘었고, 2026년에는 22만 명으로 10년 사이에 두 배 이상 증가하였다. 이렇게 유학생이 늘어난 원인으로는 한국 대중문화에 대한 관심이 높아진 것과 대학의 장학금 지원이 확대된 것을 들 수 있다. 그러나 졸업 후 한국에서 일자리를 구하기 어렵다는 점은 앞으로 해결해야 할 과제로 남아 있다.",
        },
      ],
    },
    {
      title: "54번",
      points: 50,
      instructions: "다음을 주제로 하여 자신의 생각을 600~700자로 글을 쓰십시오. 단, 문제를 그대로 옮겨 쓰지 마십시오.",
      instructionsEn:
        "Write an essay of 600-700 characters (counting spaces) in the written style (-다), answering the three questions in order, with an introduction and a conclusion. Don't copy the question.",
      write: [
        {
          prompt:
            "현대 사회에서 경쟁은 피할 수 없는 일이다. 경쟁은 발전의 원동력이 되기도 하지만 여러 가지 문제를 낳기도 한다. 아래의 내용을 중심으로 '경쟁의 긍정적인 면과 부정적인 면'에 대한 자신의 생각을 쓰라. 1) 경쟁의 긍정적인 면은 무엇인가? 2) 경쟁의 부정적인 면은 무엇인가? 3) 바람직한 경쟁이 되려면 어떻게 해야 하는가? (600~700자로 쓰십시오.)",
          minWords: 140,
          maxWords: 200,
          rubric: [
            "Content and task: answers all three questions (the good side, the bad side, what makes competition healthy) with reasons and examples",
            "Organisation: an introduction, a paragraph for each question and a conclusion, linked with 먼저, 그러나, 따라서",
            "Language use: the written style (-다) throughout, never 해요 or 합니다; varied grammar and vocabulary at intermediate-advanced level (원동력, 공정하다, -아서라도, -(으)ㄹ 때)",
            "600-700 characters including spaces, without copying the question",
          ],
          modelAnswer: paras(
            "현대 사회에서 경쟁은 피할 수 없는 삶의 일부가 되었다. 학생들은 좋은 성적을 얻기 위해, 직장인들은 더 나은 평가를 받기 위해 경쟁한다. 이러한 경쟁에는 긍정적인 면과 부정적인 면이 함께 있다.",
            "먼저 경쟁은 개인과 사회를 발전시키는 원동력이 된다. 다른 사람과 실력을 겨루는 과정에서 사람들은 자신의 부족한 점을 발견하고 더 노력하게 된다. 운동선수들이 경쟁자를 의식하며 기록을 깨는 것도 같은 이치이다. 또 기업들 사이의 경쟁 덕분에 더 좋은 제품이 더 싼 가격에 나오기도 한다.",
            "그러나 경쟁이 지나치면 여러 문제가 생긴다. 이기는 것만 중요하게 여기면 다른 사람을 협력의 대상이 아니라 넘어야 할 적으로 보게 된다. 심한 경우에는 부정한 방법을 써서라도 이기려는 사람도 생긴다. 또한 결과만을 중시하는 분위기 속에서 사람들은 큰 스트레스를 받고, 경쟁에서 진 사람은 쉽게 좌절하게 된다.",
            "따라서 바람직한 경쟁이 되려면 무엇보다 공정한 규칙이 필요하다. 모두가 같은 조건에서 출발해야 결과를 인정할 수 있기 때문이다. 그리고 결과뿐만 아니라 노력하는 과정도 존중받는 문화를 만들어야 한다. 경쟁의 목표가 남을 이기는 것이 아니라 어제의 나보다 나아지는 것이 될 때 경쟁은 우리 모두를 성장하게 할 것이다."
          ),
        },
      ],
    },
  ],
};
