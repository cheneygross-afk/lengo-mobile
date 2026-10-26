// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-ii-1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { paras } from "./text";

// TOPIK II practice test 1 -- 쓰기 (writing), questions 51-54, 50 minutes.
// As in the real test: 51 (a practical text) and 52 (an explanatory
// paragraph) ask for the sentence that fills each of two gaps, ㉠ and ㉡,
// 10 points each; 53 asks for a 200-300 character description of a chart,
// 30 points; 54 asks for a 600-700 character essay, 50 points. Length is
// counted in characters including spaces, as on the test's squared
// answer sheet; the word ranges here are the matching number of spaced
// words, for the feedback's word count. Answers to 53 and 54 are written
// in the written style (-다), with no title.
const GAP_RUBRIC = (a: string, b: string) => [
  `Content and task: ㉠ ${a}`,
  `Content and task: ㉡ ${b}`,
  "Organisation: each answer fits the sentences before and after its gap",
  "Language use: one complete sentence per gap, ending in the same style as the text around it",
];

export const TOPIK_II_1_WRITING: ExamPaper = {
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
            "[게시판] 제목: 우산을 찾습니다. 어제 오후 3시쯤 학생 식당 앞 우산꽂이에 파란색 우산을 두었습니다. 그런데 식사를 마치고 나와 보니 (㉠). 손잡이에 제 이름이 적혀 있습니다. 혹시 우산을 잘못 가져가신 분은 (㉡). 제 연락처는 010-1234-5678입니다. (㉠과 ㉡에 알맞은 문장을 쓰십시오.)",
          minWords: 4,
          maxWords: 20,
          rubric: GAP_RUBRIC("says what the writer found on coming out of the cafeteria, which the rest of the notice depends on", "makes the request this notice exists for, to whoever took the umbrella, leading into the phone number"),
          modelAnswer: "㉠ 우산이 없어졌습니다.\n㉡ 아래 번호로 연락해 주시기 바랍니다.",
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
            "사람들은 보통 피곤하면 잠을 더 오래 자려고 한다. 그런데 잠을 너무 많이 자면 오히려 더 피곤해질 수 있다. 수면 시간이 갑자기 길어지면 몸의 생체 리듬이 깨지기 때문이다. 따라서 피로를 풀기 위해서는 (㉠). 매일 같은 시간에 자고 같은 시간에 일어나는 습관이 (㉡). (㉠과 ㉡에 알맞은 문장을 쓰십시오.)",
          minWords: 4,
          maxWords: 24,
          rubric: GAP_RUBRIC(
            "draws the conclusion that 따라서 calls for, from why long sleep can make you more tired",
            "says what the habit of fixed sleeping and waking times does, following on from ㉠"
          ),
          modelAnswer: "㉠ 잠을 오래 자는 것보다 규칙적으로 자는 것이 중요하다.\n㉡ 피로를 푸는 데 가장 도움이 된다.",
        },
      ],
    },
    {
      title: "53번",
      points: 30,
      instructions: "다음을 참고하여 '1인 가구의 변화'에 대한 글을 200~300자로 쓰십시오. 단, 글의 제목을 쓰지 마십시오.",
      instructionsEn:
        "Describe the chart in 200-300 characters (counting spaces) in the written style (-다): who did the survey, the figures and the trend, the causes and the outlook. No title, and no opinion of your own.",
      write: [
        {
          prompt:
            "[자료] 1인 가구의 변화. 조사 기관: 한국생활연구소. 전체 가구 중 1인 가구의 비율: 2005년 20%, 2015년 27%, 2025년 36%. 원인: 결혼에 대한 인식 변화, 고령화. 전망: 2045년 40% 이상. (이 자료를 설명하는 글을 200~300자로 쓰십시오. 제목은 쓰지 마십시오.)",
          minWords: 45,
          maxWords: 80,
          rubric: [
            "Content and task: names the survey, gives all three figures and the rising trend, both causes and the 2045 outlook, adding no opinion of your own",
            "Organisation: survey, then figures, then causes, then outlook, linked with 조사 결과에 따르면, 이는 … 때문이다, 이러한 추세가 계속된다면",
            "Language use: the written style (-다, -았/었다) throughout, chart vocabulary (증가하다, 차지하다, 비율, 예상되다)",
            "200-300 characters including spaces, and no title",
          ],
          modelAnswer:
            "한국생활연구소에서 1인 가구의 변화에 대해 조사하였다. 조사 결과에 따르면 전체 가구 중 1인 가구가 차지하는 비율은 2005년 20%에서 2015년 27%로 늘었고, 2025년에는 36%로 크게 증가하였다. 이렇게 1인 가구가 늘어난 원인은 결혼에 대한 인식이 변화하고 고령화가 진행되었기 때문이다. 이러한 추세가 계속된다면 2045년에는 1인 가구의 비율이 40%를 넘을 것으로 예상된다.",
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
            "요즘 많은 사람들이 인터넷에서 얻은 정보를 바탕으로 결정을 내린다. 그러나 인터넷 정보 중에는 정확하지 않은 것도 많다. 아래의 내용을 중심으로 '인터넷 정보를 올바르게 이용하는 방법'에 대한 자신의 생각을 쓰라. 1) 인터넷 정보의 장점은 무엇인가? 2) 인터넷 정보를 이용할 때 생길 수 있는 문제는 무엇인가? 3) 인터넷 정보를 올바르게 이용하려면 어떻게 해야 하는가? (600~700자로 쓰십시오.)",
          minWords: 140,
          maxWords: 200,
          rubric: [
            "Content and task: answers all three questions (the advantages, the problems, how to use online information well) with reasons and examples",
            "Organisation: an introduction, a paragraph for each question and a conclusion, linked with 그러나, 또한, 따라서, 이처럼",
            "Language use: the written style (-다) throughout, never 해요 or 합니다; varied grammar and vocabulary at intermediate-advanced level (출처, 비판적으로, -(으)ㄹ 위험이 있다)",
            "600-700 characters including spaces, without copying the question",
          ],
          modelAnswer: paras(
            "인터넷이 발달하면서 우리는 언제 어디서나 필요한 정보를 쉽게 찾을 수 있게 되었다. 궁금한 것이 생기면 바로 검색해서 답을 얻을 수 있고, 다른 사람들의 경험이나 의견도 빠르게 확인할 수 있다. 이처럼 인터넷 정보는 시간과 비용을 아껴 주고 더 나은 결정을 내리는 데 도움을 준다는 장점이 있다.",
            "그러나 인터넷 정보를 이용할 때 생길 수 있는 문제도 적지 않다. 인터넷에는 누구나 글을 올릴 수 있기 때문에 출처가 분명하지 않거나 사실과 다른 정보가 많다. 특히 건강이나 돈과 관련된 잘못된 정보를 그대로 믿으면 큰 피해를 입을 수 있다. 또한 보고 싶은 정보만 계속 보게 되면 생각이 한쪽으로 치우칠 위험도 있다.",
            "따라서 인터넷 정보를 올바르게 이용하려면 무엇보다 출처를 확인하는 습관을 길러야 한다. 공공 기관이나 전문가가 제공한 정보인지 살펴보고, 중요한 내용은 여러 자료와 비교해 보는 것이 좋다. 또한 정보가 사실인지 의견인지 구별하려고 노력해야 한다. 학교에서도 정보를 비판적으로 읽는 방법을 가르쳐야 할 것이다.",
            "인터넷 정보는 잘 이용하면 삶을 편리하게 만드는 훌륭한 도구가 된다. 정보를 무조건 믿기보다 스스로 판단하는 태도를 가질 때 인터넷의 장점을 제대로 누릴 수 있을 것이다."
          ),
        },
      ],
    },
  ],
};
