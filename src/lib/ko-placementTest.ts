// Synced from cheneygross-afk/lengo:src/lib/ko-placementTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./lessons/types";

// The Korean course's placement test (/lessons/ko/placement): the same
// two-stage adaptive design as the Brazilian Portuguese one
// (src/lib/pt-placementTest.ts), with one level more at the bottom, the
// Hangul module, for learners who can't read Korean script yet.
//
//   Stage 1 (the router): 14 questions, two Hangul-reading checks and then
//   two per level from A1 to C2, in rising difficulty. The number right
//   picks a band of two adjacent levels (koRouteBand).
//   Stage 2: the four questions of each of the band's two levels (8), so
//   22 questions in all, whoever takes it (42 in the bank).
//
// The recommendation is the first level with gaps: the band's lower level
// if it fails, else its upper level if that fails, else the level above
// the band. A level in the band passes with KO_STAGE2_PASS of its four
// stage-2 questions right. A learner who misses a Hangul check and gets
// little of the rest right is tested on Hangul and A1, so "start with
// Hangul" is a result the test can give.
//
// Levels follow the course (Hangul, then A1 to C2, shown as Beginner ...
// Mastery with TOPIK 1-6 beside them). Instructions are in English; the
// Korean is Seoul standard Korean as written in Korea today, in Hangul only
// (no Hanja, no romanization), and every Hangul word can be tapped to hear
// it (ko-KR). Listening items are played with the course's text-to-speech,
// and typed answers use the on-screen Hangul keyboard and the "ko" grading
// rules (spaces and punctuation ignored). In the Hangul items the Hangul to
// be read sits in the answer options, which can't be heard before they are
// chosen, so tapping the question can't give the answer away. Each question
// links to a lesson of its level that teaches the point
// (/lessons/ko/<level>/<slug>, /lessons/ko/hangul/<slug> for Hangul).

export type KoPlacementLevel = "Hangul" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type KoPlacementSkill = "hangul" | "grammar" | "vocabulary" | "reading" | "listening";

export type KoPlacementQuestion = Exercise & {
  /** Stable id: answers and saved progress are keyed by it. */
  id: string;
  level: KoPlacementLevel;
  skill: KoPlacementSkill;
  /** Slug of the lesson (at this question's level) that teaches the point. */
  relatedLessonSlug: string;
};

export const KO_PLACEMENT_LEVELS: KoPlacementLevel[] = ["Hangul", "A1", "A2", "B1", "B2", "C1", "C2"];

/** Learner-visible names (never the codes). */
export const KO_PLACEMENT_LEVEL_NAME: Record<KoPlacementLevel, string> = {
  Hangul: "Hangul",
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper-intermediate",
  C1: "Advanced",
  C2: "Mastery",
};

/** The TOPIK level beside each name (none for Hangul). */
export const KO_PLACEMENT_LEVEL_TOPIK: Record<KoPlacementLevel, string | null> = {
  Hangul: null,
  A1: "TOPIK 1",
  A2: "TOPIK 2",
  B1: "TOPIK 3",
  B2: "TOPIK 4",
  C1: "TOPIK 5",
  C2: "TOPIK 6 and beyond",
};

/** The URL segment under /lessons/ko. */
export function koPlacementLevelPath(level: KoPlacementLevel): string {
  return level.toLowerCase();
}

/**
 * Each level's first lesson, where "Start at <level>" goes (the first
 * required lesson of its first unit). Kept here so the page needn't import
 * the course; scripts/check-korean-course.ts style checks can compare it.
 */
export const KO_PLACEMENT_FIRST_LESSON: Record<KoPlacementLevel, string> = {
  Hangul: "hangul-how-hangul-works",
  A1: "a1-greetings-1",
  A2: "a2-formal-statements",
  B1: "b1-reported-statements-1",
  B2: "b2-whereas-1",
  C1: "c1-observed-change-1",
  C2: "c2-fiction-point-of-view",
};

const mc = (
  id: string,
  level: KoPlacementLevel,
  skill: KoPlacementSkill,
  relatedLessonSlug: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): KoPlacementQuestion => ({ id, level, skill, relatedLessonSlug, type: "multiple-choice", question, options, correctIndex, explanation });

const listen = (
  id: string,
  level: KoPlacementLevel,
  relatedLessonSlug: string,
  audio: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): KoPlacementQuestion => ({ id, level, skill: "listening", relatedLessonSlug, type: "listen-choose", audio, question, options, correctIndex, explanation });

// A typed answer, asked as a translation: `en` is the English sentence with
// [brackets] around the words the blank stands for.
const typed = (
  id: string,
  level: KoPlacementLevel,
  skill: KoPlacementSkill,
  relatedLessonSlug: string,
  sentence: string,
  answer: string,
  en: string,
  explanation: string,
  altAnswers?: string[],
): KoPlacementQuestion => ({
  id,
  level,
  skill,
  relatedLessonSlug,
  type: "fill-blank",
  prompt: "How do you say the bold words in Korean?",
  sentence,
  answer,
  en,
  ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
  explanation,
});

// ---- Stage 1: the router (2 Hangul checks, then 2 per level) -------------

/** The two Hangul-reading checks that open the router. */
export const KO_HANGUL_ROUTER_IDS = ["ko-r-hangul-coffee", "ko-r-hangul-father"];

export const KO_ROUTER_QUESTIONS: KoPlacementQuestion[] = [
  mc(
    "ko-r-hangul-coffee",
    "Hangul",
    "hangul",
    "hangul-reading-loanwords",
    "Which of these words says coffee?",
    ["커피", "카피", "코피", "거피"],
    0,
    "커피: 커 is ㅋ (a k with a puff of air) + ㅓ, and 피 is ㅍ + ㅣ. The others differ by one letter: 카 has ㅏ, 거 has the plain ㄱ, and 코피, with ㅗ, is a real word too: a nosebleed.",
  ),
  listen(
    "ko-r-hangul-father",
    "Hangul",
    "hangul-basic-vowels",
    "아버지",
    "Which word did you hear?",
    ["아버지", "어버지", "아바지", "오버지"],
    0,
    "아버지 (father): 아 with ㅏ, 버 with ㅓ, then 지. ㅏ and ㅓ differ only in which side the short stroke points to, and ㅗ puts it on top.",
  ),
  mc(
    "ko-r-a1-ieyo",
    "A1",
    "grammar",
    "a1-introductions-1",
    "저는 학생___.",
    ["이에요", "예요", "있어요", "이다"],
    0,
    "학생 ends in a consonant (ㅇ), so it takes 이에요: 저는 학생이에요 (I'm a student). After a vowel it is 예요: 저는 의사예요. 있어요 means there is or I have, and 이다 is the dictionary form, never used like this in speech.",
  ),
  listen(
    "ko-r-a1-two-coffees",
    "A1",
    "a1-counters-things-drinks",
    "아이스 아메리카노 두 잔 주세요.",
    "What does the customer order?",
    ["two iced americanos", "one iced americano", "two hot americanos", "an iced americano and a latte"],
    0,
    "두 잔 is two cups: drinks are counted with native numbers (하나, 둘 become 한, 두 before a counter) and the counter 잔. 주세요 is please give me.",
  ),
  mc(
    "ko-r-a2-nikka",
    "A2",
    "grammar",
    "a2-because-so-do-it",
    "비가 ___ 우산을 가져가세요.",
    ["오니까", "와서", "오지만", "오고"],
    0,
    "Because it's raining, take an umbrella: a reason followed by a request or suggestion takes -(으)니까. -아서 / -어서 also means because, but it can't come before a command or a let's: *비가 와서 우산을 가져가세요 is wrong. -지만 is but, and -고 is and.",
  ),
  typed(
    "ko-r-a2-past-modifier",
    "A2",
    "grammar",
    "a2-modifiers-past-verbs",
    "어제 ___ 영화가 정말 재미있었어요.",
    "본",
    "The movie I [saw] yesterday was really good.",
    "A verb that describes a noun takes a modifier ending, and the past one for verbs is -(으)ㄴ: 보다 becomes 본, so 어제 본 영화 is the movie (I) saw yesterday. Korean puts the whole description before the noun, the opposite of English. 봤던 영화 also works: it looks back on the experience.",
    ["봤던"],
  ),
  mc(
    "ko-r-b1-reported",
    "B1",
    "grammar",
    "b1-reported-statements-1",
    "민수가 내일은 바쁘___ 했어요.",
    ["다고", "라고", "냐고", "자고"],
    0,
    "Minsu said he's busy tomorrow: a reported statement with a describing verb takes -다고: 바쁘다고 했어요. -라고 follows a noun (학생이라고), -냐고 reports a question, and -자고 a suggestion (let's).",
  ),
  mc(
    "ko-r-b1-passive",
    "B1",
    "grammar",
    "b1-passive-suffixes-1",
    "바람 때문에 문이 갑자기 ___.",
    ["열렸어요", "열었어요", "열어 줬어요", "열게 했어요"],
    0,
    "The door opened by itself because of the wind, so the verb is the passive 열리다 (to be opened): 문이 열렸어요. 열었어요 needs someone doing the opening (누가 문을 열었어요), and 열게 했어요 is causative: made someone open it.",
  ),
  mc(
    "ko-r-b2-let-alone",
    "B2",
    "grammar",
    "b2-let-alone-1",
    "저는 해외여행___ 제주도에도 못 가 봤어요.",
    ["은커녕", "만큼", "처럼", "으로"],
    0,
    "I haven't even been to Jeju, let alone abroad: noun + 은커녕 / 는커녕 waves away the bigger thing and the sentence goes on to deny even the smaller one, with 도 and a negative. 여행 ends in a consonant, so 은커녕.",
  ),
  mc(
    "ko-r-b2-despite",
    "B2",
    "grammar",
    "b2-despite-1",
    "비가 많이 왔___ 경기는 예정대로 진행되었다.",
    ["음에도 불구하고", "기 때문에", "으므로", "더니"],
    0,
    "Despite the heavy rain, the match went ahead as planned: -(으)ㅁ에도 불구하고 (despite the fact that) is the formal written concession. 때문에 and -(으)므로 both give a reason, which makes no sense here, and -더니 reports something the speaker saw happen.",
  ),
  mc(
    "ko-r-c1-cannot-but",
    "C1",
    "grammar",
    "c1-cannot-but",
    "An editorial ends on a firm conclusion: 이번 사고의 책임은 정부에 있다고 ___.",
    ["하지 않을 수 없다", "할 리가 없다", "할 뻔했다", "하기 일쑤이다"],
    0,
    "-지 않을 수 없다 (cannot help but) is how an editorial states a conclusion it feels forced to: one cannot but say the government is responsible. -(으)ㄹ 리가 없다 is there's no way, -(으)ㄹ 뻔했다 is almost did, and -기 일쑤이다 is always ending up doing something bad.",
  ),
  mc(
    "ko-r-c1-suggests",
    "C1",
    "reading",
    "c1-reporting-findings",
    "A research summary says: 이번 연구 결과는 수면 부족이 비만의 원인이 될 수 있음을 시사한다. What does it claim?",
    [
      "The results suggest that a lack of sleep can contribute to obesity.",
      "The results prove that a lack of sleep always causes obesity.",
      "The results show no link between sleep and obesity.",
      "The researchers advise sleeping less to lose weight.",
    ],
    0,
    "시사하다 is to suggest or point to, a careful academic verb, and -(으)ㄹ 수 있음 (can, may) hedges the claim further. A firm claim would use 입증하다 (to prove) or 밝혀졌다 (it was found).",
  ),
  mc(
    "ko-r-c2-proviso",
    "C2",
    "reading",
    "c2-legal-provisos-exceptions",
    "A statute adds: 다만, 제3항의 경우에는 그러하지 아니하다. What does this sentence do?",
    [
      "It says the rule does not apply in the case of paragraph 3.",
      "It says the rule applies only in the case of paragraph 3.",
      "It says that paragraph 3 must be read before this rule.",
      "It says that paragraph 3 has been deleted.",
    ],
    0,
    "다만 opens the proviso of a Korean statute, and 그러하지 아니하다 (the written-law form of 그렇지 않다) means this is not so: the rule just stated doesn't apply in the case named. It is one of the fixed formulas of legal Korean.",
  ),
  mc(
    "ko-r-c2-sarcasm",
    "C2",
    "vocabulary",
    "c2-spoken-sarcasm",
    "You spill coffee all over your laptop. Your friend watches and says, flatly: 아주 잘한다, 잘해. What do they mean?",
    [
      "Well, that was clever (sarcastic): you've made a mess of it.",
      "You're doing really well, keep going.",
      "You're good at cleaning up, so do it yourself.",
      "Don't worry, it happens to everyone.",
    ],
    0,
    "Repeated praise in a flat tone, 잘한다, 잘해, is a stock piece of Korean sarcasm, like English oh, great job. Praise for a blunder is read as the opposite, and 꼴좋다 (literally it looks good) is always sarcastic: serves you right.",
  ),
];

// ---- Stage 2: four per level ---------------------------------------------

export const KO_LEVEL_QUESTIONS: Record<KoPlacementLevel, KoPlacementQuestion[]> = {
  Hangul: [
    mc(
      "ko-hangul-exit",
      "Hangul",
      "hangul",
      "hangul-practice-signs-menus-subway",
      "You're in a subway station. Which sign shows you the way out?",
      ["출구", "입구", "화장실", "매표소"],
      0,
      "출구 is the exit and 입구 the entrance (said [입꾸]). 화장실 is the toilet and 매표소 the ticket office.",
    ),
    listen(
      "ko-hangul-bread",
      "Hangul",
      "hangul-tense-consonants",
      "빵",
      "Which word did you hear?",
      ["빵", "방", "팡", "봉"],
      0,
      "빵 (bread) starts with the tense ㅃ: tight, with no puff of air. 방 (room) has the plain ㅂ and 팡 the breathy ㅍ. Plain, aspirated and tense are three different letters in Korean, and they change the word.",
    ),
    {
      id: "ko-hangul-kimchi",
      level: "Hangul",
      skill: "hangul",
      relatedLessonSlug: "hangul-typing-korean",
      type: "dictation",
      audio: "김치",
      explanation: "김치: 김 is ㄱ + ㅣ with ㅁ as the final consonant underneath, and 치 is ㅊ + ㅣ. On the keyboard you type the letters in order (ㄱ ㅣ ㅁ ㅊ ㅣ) and they stack into blocks by themselves.",
    },
    mc(
      "ko-hangul-linking",
      "Hangul",
      "hangul",
      "hangul-linking-sounds",
      "How is 음악 (music) pronounced?",
      ["[으막]", "[음악]", "[응악]", "[으낙]"],
      0,
      "When a syllable ends in a consonant and the next starts with the silent ㅇ, the consonant moves over: 음악 is said [으막]. The same happens in 한국어 [한구거] and 일요일 [이료일].",
    ),
  ],
  A1: [
    mc(
      "ko-a1-eseo",
      "A1",
      "grammar",
      "a1-doing-things-at-places",
      "저는 도서관___ 공부해요.",
      ["에서", "에", "을", "는"],
      0,
      "The place where you do something takes 에서: 도서관에서 공부해요 (I study at the library). 에 is for where you go or where something is: 도서관에 가요, 도서관에 있어요.",
    ),
    typed(
      "ko-a1-met",
      "A1",
      "grammar",
      "a1-past-tense-1",
      "어제 친구를 ___.",
      "만났어요",
      "Yesterday I [met] a friend.",
      "만나다 has ㅏ in its stem, so the past is 만나 + 았어요, and the two ㅏ merge: 만났어요. Note that 만나다 takes 을 / 를 in Korean: 친구를 만나요.",
      ["만났습니다"],
    ),
    listen(
      "ko-a1-time",
      "A1",
      "a1-telling-time",
      "지금 세 시 삼십 분이에요.",
      "What time is it?",
      ["3:30", "4:30", "3:13", "13:30"],
      0,
      "Hours use native numbers (세 시, three o'clock) and minutes Sino-Korean ones (삼십 분, thirty minutes), so 세 시 삼십 분 is 3:30. You'll often hear 세 시 반 (half past three) too.",
    ),
    mc(
      "ko-a1-who-came",
      "A1",
      "grammar",
      "a1-contrast-topic-subject",
      "A: 누가 왔어요? B: 민수___ 왔어요.",
      ["가", "는", "를", "에"],
      0,
      "The answer to who? is new information, so it takes the subject particle 이 / 가: 민수가 왔어요. 민수는 왔어요 would mean Minsu came (but maybe not the others). The question word itself also takes 가: 누가 (from 누구 + 가).",
    ),
  ],
  A2: [
    mc(
      "ko-a2-hot",
      "A2",
      "grammar",
      "a2-irregular-b-1",
      "오늘 날씨가 너무 ___.",
      ["더워요", "덥어요", "더워어요", "덥워요"],
      0,
      "덥다 is a ㅂ irregular: before a vowel the ㅂ becomes 우, so 덥 + 어요 gives 더워요. Most describing words in ㅂ work this way (춥다 → 추워요, 어렵다 → 어려워요), but not all: 좁다 → 좁아요.",
    ),
    typed(
      "ko-a2-must",
      "A2",
      "grammar",
      "a2-must",
      "내일 아침 일찍 ___.",
      "일어나야 돼요",
      "I [have to get up] early tomorrow morning.",
      "Have to is -아야 / -어야 하다 or 되다: 일어나야 돼요 or 일어나야 해요; 돼요 is a little more conversational. Spell it 돼요, never 되요.",
      ["일어나야 해요", "일어나야 됩니다", "일어나야 합니다"],
    ),
    listen(
      "ko-a2-shall-we",
      "A2",
      "a2-shall-we",
      "이번 주말에 같이 영화 볼까요?",
      "What is the speaker doing?",
      [
        "suggesting that they see a movie together this weekend",
        "asking if the other person saw a movie last weekend",
        "saying that they will see a movie alone this weekend",
        "turning down an invitation to the movies",
      ],
      0,
      "-(으)ㄹ까요? with 같이 (together) is shall we?: 같이 영화 볼까요? is shall we see a movie together? 이번 주말 is this weekend; last weekend would be 지난 주말.",
    ),
    mc(
      "ko-a2-sleeping",
      "A2",
      "grammar",
      "a2-honorific-verbs",
      "할머니께서 지금 방에서 ___.",
      ["주무세요", "자요", "자세요", "잠으세요"],
      0,
      "A few verbs have their own honorific word instead of -시-: 자다 (sleep) becomes 주무시다, so Grandma is sleeping is 할머니께서 주무세요. 자요 is not respectful enough for a grandmother, and 자세요 and 잠으세요 are not the honorific of 자다. Likewise 먹다 → 드시다 and 있다 → 계시다.",
    ),
  ],
  B1: [
    mc(
      "ko-b1-baram",
      "B1",
      "grammar",
      "b1-something-unexpected",
      "버스를 놓치는 ___ 회사에 늦었어요.",
      ["바람에", "덕분에", "대신에", "김에"],
      0,
      "-는 바람에 gives an unexpected cause, usually of something unwelcome: I missed the bus, and so I was late. 덕분에 (thanks to) is for good results, -는 대신에 is instead of, and -는 김에 is while you're at it.",
    ),
    typed(
      "ko-b1-almost",
      "B1",
      "grammar",
      "b1-almost",
      "길이 미끄러워서 ___.",
      "넘어질 뻔했어요",
      "The road was slippery, so I [almost fell].",
      "Almost (but in the end didn't) is -(으)ㄹ 뻔하다, used in the past: 넘어질 뻔했어요. English almost + past doesn't map onto 거의 + past: 거의 다 먹었어요 means I've eaten nearly all of it, so 거의 is the wrong tool for a fall that didn't happen.",
      ["넘어질 뻔했다", "넘어질 뻔했습니다"],
    ),
    listen(
      "ko-b1-reported-command",
      "B1",
      "b1-reported-commands-1",
      "선생님께서 내일까지 숙제를 내라고 하셨어요.",
      "What did the teacher say?",
      [
        "Hand in the homework by tomorrow.",
        "The homework is due today.",
        "There will be no homework tomorrow.",
        "Ask your questions about the homework tomorrow.",
      ],
      0,
      "-(으)라고 하다 reports a command: 내라고 하셨어요 is (the teacher) told us to hand it in. 까지 is by or until, so 내일까지 is by tomorrow. 하셨어요, with -시-, keeps the teacher honoured.",
    ),
    mc(
      "ko-b1-written-style",
      "B1",
      "grammar",
      "b1-written-style-past-future",
      "Which sentence is in the plain written style used in diaries, essays and the news?",
      ["나는 오늘 도서관에 갔다.", "나는 오늘 도서관에 갔어.", "저는 오늘 도서관에 갔어요.", "저는 오늘 도서관에 갔습니다."],
      0,
      "The written style (한다체) ends a past statement in -았다 / -었다 and uses 나, not 저: 나는 오늘 도서관에 갔다. 갔어 is casual speech to a friend, 갔어요 polite speech, and 갔습니다 formal speech, all addressed to someone.",
    ),
  ],
  B2: [
    mc(
      "ko-b2-roseo",
      "B2",
      "grammar",
      "b2-spelling-as-or-by-means-of",
      "그는 회사의 대표___ 책임을 지겠다고 말했다.",
      ["로서", "로써", "에서", "에게"],
      0,
      "In his capacity as the company's head takes (으)로서 (as): 대표로서. (으)로써 is by means of: 대화로써 해결하다 (to solve it through talks). The two sound alike and are a classic spelling trap.",
    ),
    mc(
      "ko-b2-proverb",
      "B2",
      "vocabulary",
      "b2-proverbs-easy-impossible",
      "A colleague says the report is 누워서 떡 먹기. What do they mean?",
      ["It's a piece of cake.", "It's a lazy piece of work.", "It will take a long time.", "It can't be done."],
      0,
      "누워서 떡 먹기, literally eating rice cake lying down, means something is very easy, like a piece of cake. 식은 죽 먹기 (eating cold porridge) means the same.",
    ),
    listen(
      "ko-b2-exports",
      "B2",
      "b2-trend-verbs-1",
      "올해 1분기 수출이 지난해 같은 기간보다 5퍼센트 감소한 것으로 나타났습니다.",
      "What does the news report say?",
      [
        "Exports in the first quarter fell 5% from the same period last year.",
        "Exports in the first quarter rose 5% from the same period last year.",
        "Imports in the first quarter fell 5% from last year.",
        "Exports are expected to fall 5% next year.",
      ],
      0,
      "수출 is exports (imports are 수입), 1분기 the first quarter, and 감소하다 to decrease (증가하다 is to increase). -(으)ㄴ 것으로 나타났다 (it was shown that) is how the news reports figures.",
    ),
    mc(
      "ko-b2-whereas",
      "B2",
      "grammar",
      "b2-whereas-1",
      "서울은 교통이 편리한 ___ 집값이 비싸다.",
      ["반면에", "덕분에", "김에", "대로"],
      0,
      "-(으)ㄴ / 는 반면에 (whereas, on the other hand) sets two sides against each other: transport is convenient, but housing is expensive. 덕분에 (thanks to) would make the cost a good result of the transport, -는 김에 is while you're at it, and -(으)ㄴ 대로 is as or just as.",
    ),
  ],
  C1: [
    mc(
      "ko-c1-exhaustive",
      "C1",
      "grammar",
      "c1-exhaustive-subject",
      "The teacher asks who broke the window. Which answer says it was Minsu and nobody else?",
      ["민수가 깼어요.", "민수는 깼어요.", "민수도 깼어요.", "민수를 깼어요."],
      0,
      "Answering who?, 이 / 가 is exhaustive: 민수가 깼어요 means it was Minsu (who broke it). 민수는 깼어요 contrasts him with others (Minsu did break it, but...), 민수도 is Minsu too, and 민수를 would make Minsu the thing that was broken.",
    ),
    mc(
      "ko-c1-lease",
      "C1",
      "reading",
      "c1-lease-and-deposit",
      "A lease says: 임차인은 계약 기간 만료 1개월 전까지 갱신 여부를 임대인에게 통지하여야 한다. What must the tenant do?",
      [
        "Tell the landlord whether they will renew, at least one month before the lease ends.",
        "Pay one month's rent in advance when the lease is renewed.",
        "Move out within one month after the lease ends.",
        "Renew the lease every month by notifying the landlord.",
      ],
      0,
      "임차인 is the tenant and 임대인 the landlord, 만료 is expiry, 갱신 여부 whether or not to renew, and -여야 한다 (from 하여야 한다) is the written must of contracts. 1개월 전까지 is by one month before.",
    ),
    listen(
      "ko-c1-in-other-words",
      "C1",
      "c1-reformulation-markers",
      "다시 말해, 이 정책은 단기적으로는 효과가 있지만 장기적으로는 부담이 될 수 있다는 것입니다.",
      "What is the speaker doing?",
      [
        "Restating the point: the policy may work now but become a burden later.",
        "Introducing a new topic about long-term planning.",
        "Disagreeing with another speaker about what the policy costs.",
        "Giving evidence that the policy has already failed.",
      ],
      0,
      "다시 말해 (in other words) signals a restatement, and -다는 것입니다 sums the point up. 단기적으로는 ... 장기적으로는 contrasts the short term with the long term.",
    ),
    mc(
      "ko-c1-hedge",
      "C1",
      "grammar",
      "c1-hedge-appears",
      "A report hedges its claim: 이러한 현상은 경제적 요인에서 비롯된 것으로 ___.",
      ["보인다", "보여 준다", "보이게 한다", "본다고 한다"],
      0,
      "-(으)ㄴ 것으로 보인다 (appears to be, seems to) is the standard hedge of reports and articles: this appears to stem from economic factors. 보여 준다 (shows) and 보이게 한다 (makes visible) don't fit after 것으로, and 본다고 한다 reports someone else's view.",
    ),
  ],
  C2: [
    mc(
      "ko-c2-gyeongsang",
      "C2",
      "vocabulary",
      "c2-gyeongsang-questions",
      "An older man at a Busan market asks you: 밥 묵었나? What is he asking?",
      ["Have you eaten?", "Are you hungry?", "Shall we go and eat?", "What did you eat?"],
      0,
      "묵다 is Gyeongsang for 먹다, and a yes/no question ends in -나 (or -가 after a noun): 밥 묵었나? is 밥 먹었어? (have you eaten?). A question with a question word ends in -노 instead: 뭐 묵었노? (what did you eat?).",
    ),
    mc(
      "ko-c2-reportedly",
      "C2",
      "reading",
      "c2-journalism-unconfirmed",
      "A news article says: 김 씨는 사고 직후 병원으로 옮겨진 것으로 알려졌다. What does it tell you?",
      [
        "Kim was reportedly taken to hospital right after the accident.",
        "Kim is known to have caused the accident.",
        "Kim refused to go to hospital after the accident.",
        "Kim will be moved to another hospital.",
      ],
      0,
      "-(으)ㄴ 것으로 알려졌다 (it is reported, it has become known) is how the press passes on information it has not confirmed itself. 옮겨지다 is to be moved, and 직후 is right after.",
    ),
    listen(
      "ko-c2-hage",
      "C2",
      "c2-old-familiar-commands",
      "김 서방, 어서 들어오게.",
      "Who is most likely speaking, and to whom?",
      [
        "A father-in-law to his son-in-law",
        "A child to a teacher",
        "A shop assistant to a customer",
        "Two close friends in their twenties",
      ],
      0,
      "-게 is the 하게체 command: an older man speaking to an adult younger man he treats with some respect, such as a son-in-law (김 서방) or a former student. Friends would say 들어와, a child to a teacher 들어오세요, and a shop assistant 어서 오세요.",
    ),
    mc(
      "ko-c2-translationese",
      "C2",
      "grammar",
      "c2-style-translationese-1",
      "Which sentence sounds most natural in written Korean?",
      [
        "회의에서 많은 의견이 나왔다.",
        "회의는 많은 의견들을 가졌다.",
        "회의에 있어서 많은 의견들이 제시되어졌다.",
        "회의에서 많은 의견들이 가져와졌다.",
      ],
      0,
      "Korean says opinions came out at the meeting: 회의에서 많은 의견이 나왔다. The others are translationese: 가지다 for have a meeting, -에 있어서 for in, the extra plural 들 after 많은, and double passives such as 제시되어졌다 and 가져와졌다.",
    ),
  ],
};

/** Stage-2 questions right (of a level's four) for that level to pass. */
export const KO_STAGE2_PASS = 3;
/** Every learner answers this many: the router plus two levels' sets. */
export const KO_PLACEMENT_TOTAL = KO_ROUTER_QUESTIONS.length + 2 * KO_LEVEL_QUESTIONS.A1.length;

export type KoPlacementBand = [KoPlacementLevel, KoPlacementLevel];

// Score on the 12 level questions of the router (A1 to C2) to band, as in
// the Portuguese test.
const BAND_CUTOFFS: [minCorrect: number, band: KoPlacementBand][] = [
  [11, ["C1", "C2"]],
  [9, ["B2", "C1"]],
  [7, ["B1", "B2"]],
  [5, ["A2", "B1"]],
  [0, ["A1", "A2"]],
];

/**
 * The band for a router result: `hangulCorrect` of the two Hangul checks and
 * `levelCorrect` of the twelve level questions. Missing a Hangul check with
 * fewer than five of the rest sends the learner to Hangul and Beginner.
 */
export function koRouteBand(hangulCorrect: number, levelCorrect: number): KoPlacementBand {
  if (hangulCorrect < KO_HANGUL_ROUTER_IDS.length && levelCorrect < 5) return ["Hangul", "A1"];
  return BAND_CUTOFFS.find(([min]) => levelCorrect >= min)![1];
}

/** Answers so far: question id to answered correctly. */
export type KoPlacementAnswers = Record<string, boolean>;

export function koPlacementBand(answers: KoPlacementAnswers): KoPlacementBand | null {
  if (!KO_ROUTER_QUESTIONS.every((q) => q.id in answers)) return null;
  const right = KO_ROUTER_QUESTIONS.filter((q) => answers[q.id]);
  const hangul = right.filter((q) => q.level === "Hangul").length;
  return koRouteBand(hangul, right.length - hangul);
}

/** Every question this learner gets, in order, as far as is known. */
export function koPlacementQuestions(answers: KoPlacementAnswers): KoPlacementQuestion[] {
  const band = koPlacementBand(answers);
  return band ? [...KO_ROUTER_QUESTIONS, ...KO_LEVEL_QUESTIONS[band[0]], ...KO_LEVEL_QUESTIONS[band[1]]] : KO_ROUTER_QUESTIONS;
}

/** The next unanswered question, its position (0-based) and stage, or null when the test is done. */
export function nextKoPlacementQuestion(
  answers: KoPlacementAnswers,
): { question: KoPlacementQuestion; index: number; stage: 1 | 2 } | null {
  const questions = koPlacementQuestions(answers);
  const index = questions.findIndex((q) => !(q.id in answers));
  if (index === -1) return null;
  return { question: questions[index], index, stage: index < KO_ROUTER_QUESTIONS.length ? 1 : 2 };
}

// ---- Saved progress (localStorage) ---------------------------------------

export const KO_PLACEMENT_PROGRESS_KEY = "deepend-ko-placement-progress";

const KNOWN_IDS = new Set([...KO_ROUTER_QUESTIONS, ...Object.values(KO_LEVEL_QUESTIONS).flat()].map((q) => q.id));

/** Saved answers worth resuming, or null. */
export function normalizeKoPlacementProgress(raw: unknown): KoPlacementAnswers | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (r.version !== 1 || !r.answers || typeof r.answers !== "object") return null;
  const answers: KoPlacementAnswers = {};
  for (const [id, v] of Object.entries(r.answers as Record<string, unknown>)) {
    if (KNOWN_IDS.has(id) && typeof v === "boolean") answers[id] = v;
  }
  if (!Object.keys(answers).length || !nextKoPlacementQuestion(answers)) return null;
  return answers;
}

// ---- Scoring --------------------------------------------------------------

export type KoPlacementLevelResult = {
  level: KoPlacementLevel;
  correct: number;
  total: number;
  status: "passed-routing" | "passed" | "gaps" | "not-reached";
  passed: boolean;
};

export type KoPlacementScore = {
  results: KoPlacementLevelResult[];
  band: KoPlacementBand;
  recommendedLevel: KoPlacementLevel;
  /** Both levels of a C1-C2 band passed: nothing above to recommend. */
  masteredEverything: boolean;
  correct: number;
  total: number;
};

export function scoreKoPlacementTest(answers: KoPlacementAnswers): KoPlacementScore {
  const band = koPlacementBand(answers) ?? koRouteBand(0, 0);
  const [lo, hi] = band.map((l) => KO_PLACEMENT_LEVELS.indexOf(l));
  const asked = koPlacementQuestions(answers);
  const results = KO_PLACEMENT_LEVELS.map((level, i): KoPlacementLevelResult => {
    const qs = asked.filter((q) => q.level === level);
    const correct = qs.filter((q) => answers[q.id]).length;
    let status: KoPlacementLevelResult["status"];
    if (i < lo) status = "passed-routing";
    else if (i > hi) status = "not-reached";
    else status = KO_LEVEL_QUESTIONS[level].filter((q) => answers[q.id]).length >= KO_STAGE2_PASS ? "passed" : "gaps";
    return { level, correct, total: qs.length, status, passed: status === "passed" || status === "passed-routing" };
  });
  const firstGap = results.find((r) => r.status === "gaps");
  return {
    results,
    band,
    recommendedLevel: firstGap ? firstGap.level : KO_PLACEMENT_LEVELS[Math.min(hi + 1, KO_PLACEMENT_LEVELS.length - 1)],
    masteredEverything: !firstGap && hi === KO_PLACEMENT_LEVELS.length - 1,
    correct: asked.filter((q) => answers[q.id]).length,
    total: asked.length,
  };
}

/** Every question answered wrong, in the order asked. */
export function koMissedQuestions(answers: KoPlacementAnswers): KoPlacementQuestion[] {
  return koPlacementQuestions(answers).filter((q) => q.id in answers && !answers[q.id]);
}

/** A one-line label for a question (results list). */
export function koPlacementQuestionText(q: KoPlacementQuestion): string {
  switch (q.type) {
    case "fill-blank":
      return q.en ?? q.sentence;
    case "multiple-choice":
    case "listen-choose":
      return q.question;
    case "dictation":
      return `Type what you hear: ${q.audio}`;
    default:
      return q.explanation;
  }
}

/** Every question in the bank (for checks). */
export const KO_PLACEMENT_BANK: KoPlacementQuestion[] = [...KO_ROUTER_QUESTIONS, ...Object.values(KO_LEVEL_QUESTIONS).flat()];
