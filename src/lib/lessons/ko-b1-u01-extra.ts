// Synced from cheneygross-afk/lengo:src/lib/lessons/ko-b1-u01-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Korean B1, Unit 1: optional Extra Practice (reported statements in three
// tenses with new verbs, reported wh- and yes/no questions with 묻다 and
// 물어보다, and reports about seniors with 하셨어요, 말씀하셨어요 and
// 물어보셨어요).
export const KO_B1_U01_EXTRA: Lesson[] = [
  {
    slug: "b1-reported-statements-extra-1",
    level: "KO-B1",
    number: 1,
    optional: true,
    title: "Extra Practice: Reported Statements",
    summary: "More practice passing on statements with -다고, -ㄴ다고, -는다고 and -(이)라고, in the present, past and future, with new verbs.",
    duration: "14 min",
    sections: [
      {
        heading: "Three tenses, one pattern",
        body: [
          "Present: adjectives and 있다 / 없다 -다고, action verbs -ㄴ다고 / -는다고, nouns (이)라고. Past: past stem + 다고 for everything, nouns 였다고 / 이었다고. Future: -(으)ㄹ 거라고. The new verbs here follow the same rules: 이사하다 → 이사한다고, 가볍다 → 가볍다고, 배우다 → 배운다고, 열다 → 연다고."
        ],
        examples: [
          {
            es: "수빈 씨가 이번 주말에 이사한다고 했어요.",
            en: "Subin said she's moving this weekend."
          },
          {
            es: "민수 씨가 어제 늦게까지 일했다고 했어요.",
            en: "Minsu said he worked late yesterday."
          },
          {
            es: "지은 씨가 다음 주에 제주도에 갈 거라고 했어요.",
            en: "Jieun said she'll go to Jeju next week."
          },
          {
            es: "서연 씨가 지난달까지 학원 선생님이었다고 했어요.",
            en: "Seoyeon said she was a cram-school teacher until last month."
          },
          {
            es: "지은 씨가 그 가게가 오늘 문을 안 연다고 했어요.",
            en: "Jieun said that shop isn't opening today."
          }
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into Korean (polite).",
            source: "Subin said she's moving this weekend.",
            answer: "수빈 씨가 이번 주말에 이사한다고 했어요.",
            altAnswers: [
              "수빈 씨가 이번 주말에 이사한다고 말했어요.",
              "수빈 씨는 이번 주말에 이사한다고 했어요.",
              "수빈 씨는 이번 주말에 이사한다고 말했어요."
            ],
            explanation: "이사하다 is an action verb: 이사한다고."
          },
          {
            type: "fill-blank",
            prompt: "Write the Korean for the bold words.",
            en: "Hajun said his new laptop [is] really [light].",
            sentence: "하준 씨가 새로 산 노트북이 정말 ___ 했어요.",
            answer: "가볍다고",
            explanation: "가볍다 is an adjective; -다고 starts with a consonant, so the ㅂ stays: 가볍다고."
          }
        ]
      }
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Minsu said he worked late yesterday.",
        answer: "민수 씨가 어제 늦게까지 일했다고 했어요.",
        altAnswers: [
          "민수 씨가 어제 늦게까지 일했다고 말했어요.",
          "민수 씨는 어제 늦게까지 일했다고 했어요.",
          "민수 씨는 어제 늦게까지 일했다고 말했어요."
        ],
        explanation: "Past stem 일했 + 다고."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Jieun said she'll go to Jeju next week.",
        answer: "지은 씨가 다음 주에 제주도에 갈 거라고 했어요.",
        altAnswers: [
          "지은 씨가 다음 주에 제주도에 갈 거라고 말했어요.",
          "지은 씨는 다음 주에 제주도에 갈 거라고 했어요.",
          "지은 씨는 다음 주에 제주도에 갈 거라고 말했어요.",
          "지은 씨가 다음 주에 제주도에 간다고 했어요.",
          "지은 씨가 다음 주에 제주도에 간다고 말했어요."
        ],
        explanation: "갈 거예요 → 갈 거라고; present 간다고 also reports a fixed plan."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Hajun said his new laptop is really light.",
        answer: "하준 씨가 새로 산 노트북이 정말 가볍다고 했어요.",
        altAnswers: [
          "하준 씨가 새로 산 노트북이 정말 가볍다고 말했어요.",
          "하준 씨는 새로 산 노트북이 정말 가볍다고 했어요.",
          "하준 씨는 새로 산 노트북이 정말 가볍다고 말했어요."
        ],
        explanation: "가볍다 is an adjective: 가볍다고."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Seoyeon said she was a cram-school teacher until last month.",
        answer: "서연 씨가 지난달까지 학원 선생님이었다고 했어요.",
        altAnswers: [
          "서연 씨가 지난달까지 학원 선생님이었다고 말했어요.",
          "서연 씨는 지난달까지 학원 선생님이었다고 했어요.",
          "서연 씨는 지난달까지 학원 선생님이었다고 말했어요."
        ],
        explanation: "선생님 ends in a consonant, so its past is 이었어요, reported as 선생님이었다고."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Junho said he's learning guitar these days.",
        answer: "준호 씨가 요즘 기타를 배운다고 했어요.",
        altAnswers: [
          "준호 씨가 요즘 기타를 배운다고 말했어요.",
          "준호 씨는 요즘 기타를 배운다고 했어요.",
          "준호 씨는 요즘 기타를 배운다고 말했어요.",
          "준호 씨가 요즘 기타를 배우고 있다고 했어요."
        ],
        explanation: "배우다 is an action verb: 배운다고, or 배우고 있다고."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Jieun said that shop [isn't opening] today.",
        sentence: "지은 씨가 그 가게가 오늘 문을 ___ 했어요.",
        answer: "안 연다고",
        altAnswers: [
          "열지 않는다고"
        ],
        explanation: "열다 drops ㄹ before ㄴ: 연다고; 안 goes in front."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Minsu said he [won't be] at home tomorrow.",
        sentence: "민수 씨가 내일은 집에 ___ 했어요.",
        answer: "없을 거라고",
        altAnswers: [
          "없다고"
        ],
        explanation: "없을 거예요 → 없을 거라고."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Subin said the exam [was easy].",
        sentence: "수빈 씨가 시험이 ___ 했어요.",
        answer: "쉬웠다고",
        explanation: "Past 쉬웠 + 다고. In the present it would be 쉽다고."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Junho said his hometown [is Daegu].",
        sentence: "준호 씨가 고향이 ___ 했어요.",
        answer: "대구라고",
        explanation: "대구 ends in a vowel: 라고."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Seoyeon said [it isn't] her umbrella.",
        sentence: "서연 씨가 자기 우산이 ___ 했어요.",
        answer: "아니라고",
        explanation: "아니에요 → 아니라고."
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Hajun said he's waiting at the café.",
        words: [
          "하준 씨가",
          "카페에서",
          "기다린다고",
          "했어요."
        ],
        translation: "Hajun said he's waiting at the café.",
        altOrders: [
          [
            "카페에서",
            "하준 씨가",
            "기다린다고",
            "했어요."
          ]
        ],
        explanation: "기다리다 is an action verb: 기다린다고."
      },
      {
        type: "multiple-choice",
        question: "Junho told you 요즘 기타를 배워요. Which report is right?",
        options: [
          "준호 씨가 요즘 기타를 배운다고 했어요.",
          "준호 씨가 요즘 기타를 배우다고 했어요.",
          "준호 씨가 요즘 기타를 배웠다고 했어요.",
          "준호 씨가 요즘 기타를 배워요다고 했어요."
        ],
        correctIndex: 0,
        explanation: "Action verb, present: 배운다고. 배웠다고 would be past."
      },
      {
        type: "multiple-choice",
        question: "Which report means 'Subin said the bag was cheap'?",
        options: [
          "수빈 씨가 가방이 쌌다고 했어요.",
          "수빈 씨가 가방을 샀다고 했어요.",
          "수빈 씨가 가방이 싼다고 했어요.",
          "수빈 씨가 가방이 사다고 했어요."
        ],
        correctIndex: 0,
        explanation: "싸다 'cheap' (adjective), past 쌌다고. 샀다고 is from 사다 'buy': watch the tense consonant."
      },
      {
        type: "listen-choose",
        audio: "민수 씨가 내일은 집에 없을 거라고 했어요.",
        question: "What does it mean?",
        options: [
          "Minsu said he won't be home tomorrow.",
          "Minsu said he wasn't home yesterday.",
          "Minsu asked if I'll be home tomorrow.",
          "Minsu said he'll stay home tomorrow."
        ],
        correctIndex: 0,
        explanation: "없을 거라고: future 'won't be there'."
      },
      {
        type: "dictation",
        audio: "수빈 씨가 이번 주말에 이사한다고 했어요.",
        explanation: "이사한다고: 이사하다 + -ㄴ다고."
      },
      {
        type: "speak",
        prompt: "Say it in Korean: Jieun said the coffee here is good.",
        text: "지은 씨가 여기 커피가 맛있다고 했어요.",
        tip: "맛있다고 is [마싣따고] or [마딛따고].",
        explanation: "맛있다 takes plain -다고."
      }
    ]
  },
  {
    slug: "b1-reported-statements-extra-2",
    level: "KO-B1",
    number: 2,
    optional: true,
    title: "Extra Practice: Reported Questions",
    summary: "Turn wh- and yes/no questions into -냐고 reports with 묻다 and 물어보다.",
    duration: "14 min",
    sections: [
      {
        heading: "-냐고 and the question word",
        body: [
          "Keep the question word where it was (뭐, 언제, 어디, 왜, 누구, 몇) and put -냐고 on the stem; nouns take (이)냐고. Yes/no questions need nothing extra: no 'if', no 'whether'. 묻다 is ㄷ irregular before vowels: 물어요, 물었어요, 물어봤어요."
        ],
        examples: [
          {
            es: "지은 씨가 주말에 뭐 했냐고 물어봤어요.",
            en: "Jieun asked what I did on the weekend."
          },
          {
            es: "민수 씨가 한국에 언제 왔냐고 물었어요.",
            en: "Minsu asked when I came to Korea."
          },
          {
            es: "수빈 씨가 김치를 먹을 수 있냐고 물어봤어요.",
            en: "Subin asked if I can eat kimchi."
          },
          {
            es: "서연 씨가 왜 한국어를 배우냐고 물어봤어요.",
            en: "Seoyeon asked why I'm learning Korean."
          },
          {
            es: "하준 씨가 회사가 어디냐고 물어봤어요.",
            en: "Hajun asked where my office is."
          }
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into Korean (polite).",
            source: "Jieun asked what I did on the weekend.",
            answer: "지은 씨가 주말에 뭐 했냐고 물어봤어요.",
            altAnswers: [
              "지은 씨가 주말에 뭐 했냐고 물었어요.",
              "지은 씨는 주말에 뭐 했냐고 물어봤어요.",
              "지은 씨가 주말에 뭐 했냐고 했어요.",
              "지은 씨가 저한테 주말에 뭐 했냐고 물어봤어요."
            ],
            explanation: "Past stem 했 + 냐고; 뭐 stays in place."
          },
          {
            type: "fill-blank",
            prompt: "Write the Korean for the bold words.",
            en: "Minsu [asked] when I came to Korea.",
            sentence: "민수 씨가 한국에 언제 왔냐고 ___.",
            answer: "물었어요",
            altAnswers: [
              "물어봤어요"
            ],
            explanation: "묻다 → 물었어요 (ㄷ becomes ㄹ before a vowel)."
          }
        ]
      }
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Minsu asked when I came to Korea.",
        answer: "민수 씨가 한국에 언제 왔냐고 물어봤어요.",
        altAnswers: [
          "민수 씨가 한국에 언제 왔냐고 물었어요.",
          "민수 씨는 한국에 언제 왔냐고 물어봤어요.",
          "민수 씨가 한국에 언제 왔냐고 했어요.",
          "민수 씨가 저한테 한국에 언제 왔냐고 물어봤어요."
        ],
        explanation: "왔 + 냐고."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Subin asked if I can eat kimchi.",
        answer: "수빈 씨가 김치를 먹을 수 있냐고 물어봤어요.",
        altAnswers: [
          "수빈 씨가 김치를 먹을 수 있냐고 물었어요.",
          "수빈 씨는 김치를 먹을 수 있냐고 물어봤어요.",
          "수빈 씨가 김치를 먹을 수 있냐고 했어요.",
          "수빈 씨가 저한테 김치를 먹을 수 있냐고 물어봤어요.",
          "수빈 씨가 김치 먹을 수 있냐고 물어봤어요."
        ],
        explanation: "-(으)ㄹ 수 있다 ends in 있다: 먹을 수 있냐고. No word for 'if'."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Junho asked what my phone number is.",
        answer: "준호 씨가 제 전화번호가 뭐냐고 물어봤어요.",
        altAnswers: [
          "준호 씨가 제 전화번호가 뭐냐고 물었어요.",
          "준호 씨는 제 전화번호가 뭐냐고 물어봤어요.",
          "준호 씨가 제 전화번호가 뭐냐고 했어요.",
          "준호 씨가 저한테 제 전화번호가 뭐냐고 물어봤어요."
        ],
        explanation: "뭐 ends in a vowel: 뭐냐고. Your own number stays 제 전화번호 because 'my' means you."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Hajun asked where my office is.",
        answer: "하준 씨가 회사가 어디냐고 물어봤어요.",
        altAnswers: [
          "하준 씨가 회사가 어디냐고 물었어요.",
          "하준 씨는 회사가 어디냐고 물어봤어요.",
          "하준 씨가 회사가 어디냐고 했어요.",
          "하준 씨가 저한테 회사가 어디냐고 물어봤어요.",
          "하준 씨가 회사가 어디에 있냐고 물어봤어요."
        ],
        explanation: "어디냐고, or 어디에 있냐고."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Seoyeon asked why I'm learning Korean.",
        answer: "서연 씨가 왜 한국어를 배우냐고 물어봤어요.",
        altAnswers: [
          "서연 씨가 왜 한국어를 배우냐고 물었어요.",
          "서연 씨는 왜 한국어를 배우냐고 물어봤어요.",
          "서연 씨가 왜 한국어를 배우냐고 했어요.",
          "서연 씨가 저한테 왜 한국어를 배우냐고 물어봤어요.",
          "서연 씨가 왜 한국어를 공부하냐고 물어봤어요."
        ],
        explanation: "배우 + 냐고: -냐고 joins the stem, with no -는-."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Jieun asked [who] I live with.",
        sentence: "지은 씨가 같이 사는 사람이 ___ 물어봤어요.",
        answer: "누구냐고",
        explanation: "누구 ends in a vowel: 누구냐고."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Minsu asked [if I'd eaten].",
        sentence: "민수 씨가 밥 ___ 물어봤어요.",
        answer: "먹었냐고",
        explanation: "먹었 + 냐고, said [머건냐고]."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "The clerk asked [if I needed a bag].",
        sentence: "직원이 봉투가 ___ 물어봤어요.",
        answer: "필요하냐고",
        explanation: "필요하다 + 냐고."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Subin asked [how many] people were coming.",
        sentence: "수빈 씨가 ___ 사람이 오냐고 물어봤어요.",
        answer: "몇 명",
        explanation: "몇 명 'how many people' stays as it was in the question."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Junho asked [if it was cold] in Seoul.",
        sentence: "준호 씨가 서울이 ___ 물어봤어요.",
        answer: "춥냐고",
        altAnswers: [
          "추우냐고"
        ],
        explanation: "춥다 + 냐고; the ㅂ stays before a consonant."
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Hajun asked me where I live.",
        words: [
          "하준 씨가",
          "저한테",
          "어디",
          "사냐고",
          "물어봤어요."
        ],
        translation: "Hajun asked me where I live.",
        altOrders: [
          [
            "저한테",
            "하준 씨가",
            "어디",
            "사냐고",
            "물어봤어요."
          ]
        ],
        explanation: "사냐고: ㄹ drops before ㄴ."
      },
      {
        type: "multiple-choice",
        question: "Which report means 'Jieun asked if I was a student'?",
        options: [
          "지은 씨가 학생이냐고 물어봤어요.",
          "지은 씨가 학생이라고 물어봤어요.",
          "지은 씨가 학생이다고 물어봤어요.",
          "지은 씨가 만약 학생이냐고 물어봤어요."
        ],
        correctIndex: 0,
        explanation: "학생 + 이냐고. 이라고 reports a statement, and 만약 never introduces a question."
      },
      {
        type: "multiple-choice",
        question: "Seoyeon asked you 왜 한국어를 배워요? Which report is right?",
        options: [
          "서연 씨가 왜 한국어를 배우냐고 물어봤어요.",
          "서연 씨가 왜 한국어를 배운냐고 물어봤어요.",
          "서연 씨가 왜 한국어를 배워요냐고 물어봤어요.",
          "서연 씨가 왜 한국어를 배운다고 물어봤어요."
        ],
        correctIndex: 0,
        explanation: "-냐고 on the bare stem 배우-, with no ㄴ and no 요."
      },
      {
        type: "listen-choose",
        audio: "수빈 씨가 김치를 먹을 수 있냐고 물어봤어요.",
        question: "What does it mean?",
        options: [
          "Subin asked if I can eat kimchi.",
          "Subin said she can't eat kimchi.",
          "Subin asked what kimchi is.",
          "Subin said I can eat kimchi."
        ],
        correctIndex: 0,
        explanation: "먹을 수 있냐고: a yes/no question about ability."
      },
      {
        type: "dictation",
        audio: "서연 씨가 왜 한국어를 배우냐고 물어봤어요.",
        explanation: "배우냐고: stem 배우 + 냐고."
      },
      {
        type: "speak",
        prompt: "Say it in Korean: Jieun asked who I live with.",
        text: "지은 씨가 같이 사는 사람이 누구냐고 물어봤어요.",
        explanation: "누구냐고: noun ending in a vowel + 냐고."
      }
    ]
  },
  {
    slug: "b1-reported-statements-extra-3",
    level: "KO-B1",
    number: 3,
    optional: true,
    title: "Extra Practice: Reporting Seniors",
    summary: "Pass on what teachers, managers and grandparents said and asked, with 하셨어요, 말씀하셨어요 and 물어보셨어요.",
    duration: "14 min",
    sections: [
      {
        heading: "Honour the speaker on the last verb",
        body: [
          "A senior speaker gets -시- on the reporting verb: 하셨어요, 말씀하셨어요, 물어보셨어요 or 물으셨어요. The subject can take 께서 for extra respect. Inside the quote you may also honour them when they talk about themselves (가신다고), but never honour yourself: 할머니가 제가 바쁘냐고 물어보셨어요, not *제가 바쁘시냐고."
        ],
        examples: [
          {
            es: "선생님께서 시험이 다음 주라고 말씀하셨어요.",
            en: "The teacher said the exam is next week."
          },
          {
            es: "부장님이 오늘 회식이 없다고 하셨어요.",
            en: "The manager said there's no team dinner today."
          },
          {
            es: "할머니가 밥 먹었냐고 물어보셨어요.",
            en: "Grandma asked if I'd eaten."
          },
          {
            es: "부장님이 내일 부산에 출장 가신다고 하셨어요.",
            en: "The manager said he's going to Busan on business tomorrow."
          },
          {
            es: "할아버지께서 옛날에 경주에 사셨다고 말씀하셨어요.",
            en: "Grandpa said he used to live in Gyeongju."
          }
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into Korean (polite).",
            source: "The teacher said the exam is next week.",
            answer: "선생님께서 시험이 다음 주라고 말씀하셨어요.",
            altAnswers: [
              "선생님께서 시험이 다음 주라고 하셨어요.",
              "선생님이 시험이 다음 주라고 말씀하셨어요.",
              "선생님이 시험이 다음 주라고 하셨어요.",
              "선생님께서 다음 주에 시험이 있다고 말씀하셨어요.",
              "선생님께서 다음 주에 시험이 있다고 하셨어요.",
              "선생님이 다음 주에 시험이 있다고 하셨어요."
            ],
            explanation: "다음 주 is a noun ending in a vowel: 다음 주라고. A teacher gets 말씀하셨어요 or 하셨어요."
          },
          {
            type: "fill-blank",
            prompt: "Write the Korean for the bold words.",
            en: "Grandma [asked] if I'd eaten.",
            sentence: "할머니가 밥 먹었냐고 ___.",
            answer: "물어보셨어요",
            altAnswers: [
              "물으셨어요"
            ],
            explanation: "물어보다 + -시-: 물어보셨어요. Plain 물어봤어요 would not honour her."
          }
        ]
      }
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "The manager said there's no team dinner today.",
        answer: "부장님이 오늘 회식이 없다고 하셨어요.",
        altAnswers: [
          "부장님께서 오늘 회식이 없다고 하셨어요.",
          "부장님이 오늘 회식이 없다고 말씀하셨어요.",
          "부장님께서 오늘 회식이 없다고 말씀하셨어요.",
          "부장님이 오늘은 회식이 없다고 하셨어요.",
          "부장님이 오늘 회식 없다고 하셨어요."
        ],
        explanation: "없다고 + 하셨어요 for the manager."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "Grandpa said he used to live in Gyeongju.",
        answer: "할아버지께서 옛날에 경주에 사셨다고 말씀하셨어요.",
        altAnswers: [
          "할아버지께서 옛날에 경주에 사셨다고 하셨어요.",
          "할아버지가 옛날에 경주에 사셨다고 하셨어요.",
          "할아버지가 옛날에 경주에 사셨다고 말씀하셨어요.",
          "할아버지께서 예전에 경주에 사셨다고 말씀하셨어요.",
          "할아버지께서 옛날에 경주에 살았다고 말씀하셨어요.",
          "할아버지가 옛날에 경주에 살았다고 하셨어요."
        ],
        explanation: "사셨다고 honours him inside the quote too; 살았다고 + 말씀하셨어요 is also fine."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "The manager said he's going to Busan on business tomorrow.",
        answer: "부장님이 내일 부산에 출장 가신다고 하셨어요.",
        altAnswers: [
          "부장님이 내일 부산에 출장 간다고 하셨어요.",
          "부장님께서 내일 부산에 출장 가신다고 하셨어요.",
          "부장님께서 내일 부산에 출장 간다고 하셨어요.",
          "부장님이 내일 부산으로 출장 가신다고 하셨어요.",
          "부장님이 내일 부산에 출장을 가신다고 하셨어요.",
          "부장님이 내일 부산에 출장 가신다고 말씀하셨어요."
        ],
        explanation: "가신다고 (가 + 시 + ㄴ다고) honours him inside the quote; 하셨어요 on the reporting verb is the part you can't skip."
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into Korean (polite).",
        source: "The teacher asked if I had any questions.",
        answer: "선생님께서 질문이 있냐고 물어보셨어요.",
        altAnswers: [
          "선생님께서 질문이 있냐고 물으셨어요.",
          "선생님이 질문이 있냐고 물어보셨어요.",
          "선생님이 질문이 있냐고 물으셨어요.",
          "선생님께서 질문 있냐고 물어보셨어요.",
          "선생님께서 저한테 질문이 있냐고 물어보셨어요.",
          "선생님께서 질문이 있냐고 하셨어요."
        ],
        explanation: "있냐고 + 물어보셨어요 / 물으셨어요."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Grandma said the weather [is cold] today.",
        sentence: "할머니가 오늘 날씨가 ___ 하셨어요.",
        answer: "춥다고",
        explanation: "춥다 is an adjective: 춥다고. The weather isn't honoured, so no -시- in the quote."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "The manager [said] the meeting was cancelled.",
        sentence: "부장님이 회의가 취소됐다고 ___.",
        answer: "하셨어요",
        altAnswers: [
          "말씀하셨어요"
        ],
        explanation: "하셨어요 honours the manager."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "The teacher said [the homework is] page 30.",
        sentence: "선생님께서 ___ 30쪽이라고 하셨어요.",
        answer: "숙제가",
        altAnswers: [
          "숙제는"
        ],
        explanation: "숙제가: the subject of the quoted sentence."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "Grandpa asked [who] Minsu was.",
        sentence: "할아버지께서 민수가 ___ 물어보셨어요.",
        answer: "누구냐고",
        explanation: "누구 + 냐고."
      },
      {
        type: "fill-blank",
        prompt: "Write the Korean for the bold words.",
        en: "The manager asked [when] I could come.",
        sentence: "부장님이 제가 ___ 올 수 있냐고 물어보셨어요.",
        answer: "언제",
        explanation: "언제 stays as in the question; 제가 is right here, because it's me."
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The teacher said there's no class tomorrow.",
        words: [
          "선생님께서",
          "내일",
          "수업이",
          "없다고",
          "말씀하셨어요."
        ],
        translation: "The teacher said there's no class tomorrow.",
        altOrders: [
          [
            "내일",
            "선생님께서",
            "수업이",
            "없다고",
            "말씀하셨어요."
          ]
        ],
        explanation: "Speaker with 께서, quote with 없다고, then 말씀하셨어요."
      },
      {
        type: "multiple-choice",
        question: "Your manager asked 민수 씨, 밥 먹었어요? You tell a colleague. Which is right?",
        options: [
          "부장님이 저한테 밥 먹었냐고 물어보셨어요.",
          "부장님이 저한테 밥 드셨냐고 물어보셨어요.",
          "부장님이 저한테 밥 먹었냐고 물어봤어요.",
          "부장님이 저한테 밥 먹었다고 물어보셨어요."
        ],
        correctIndex: 0,
        explanation: "The question is about you, so no honorific inside (not 드셨냐고); the manager gets 물어보셨어요."
      },
      {
        type: "multiple-choice",
        question: "Grandma said to you 나 오늘 피곤해. Which report is polite and right?",
        options: [
          "할머니가 오늘 피곤하시다고 하셨어요.",
          "할머니가 오늘 피곤하다고 했어요.",
          "할머니가 오늘 피곤해라고 하셨어요.",
          "할머니가 오늘 자기가 피곤하냐고 하셨어요."
        ],
        correctIndex: 0,
        explanation: "Grandma talks about herself, so honouring her inside the quote (피곤하시다고) and on 하셨어요 is natural; 했어요 alone is too plain."
      },
      {
        type: "listen-choose",
        audio: "부장님이 오늘 회식이 없다고 하셨어요.",
        question: "What does it mean?",
        options: [
          "The manager said there's no team dinner today.",
          "The manager asked if there's a team dinner today.",
          "The manager said the team dinner is today.",
          "I told the manager there's no team dinner."
        ],
        correctIndex: 0,
        explanation: "없다고 하셨어요: a senior's statement."
      },
      {
        type: "dictation",
        audio: "선생님께서 시험이 다음 주라고 말씀하셨어요.",
        explanation: "다음 주라고: noun + 라고; 말씀하셨어요 honours the teacher."
      },
      {
        type: "speak",
        prompt: "Say it in Korean: Grandma asked if I'd eaten.",
        text: "할머니가 밥 먹었냐고 물어보셨어요.",
        explanation: "먹었냐고 [머건냐고] + 물어보셨어요."
      }
    ]
  }
];
