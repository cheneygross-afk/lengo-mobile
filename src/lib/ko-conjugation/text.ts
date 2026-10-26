// Synced from cheneygross-afk/lengo:src/lib/ko-conjugation/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// English explanations for the Korean conjugation pages: what each
// irregular class does (with its traps), and notes on the words that
// conjugate in their own way. Korean is written plainly in Hangul (the
// pages voice it with ko-KR).
import type { IrrClass, KoWord } from "./types";

export type ClassInfo = { id: IrrClass | "honorific" | "copula"; title: string; rule: string; examples: string[] };

export const CLASS_INFO: ClassInfo[] = [
  {
    id: "하",
    title: "하다 verbs",
    rule: "하다 and every word built on it (공부하다, 조용하다, 좋아하다) turn 하 + 여 into 해: 해요, 했어요, 해서, 해야 해요. Everything else is regular: 합니다, 하세요, 하는. Formal writing still uses the long 하여 and 하였다.",
    examples: ["하다", "공부하다", "조용하다"],
  },
  {
    id: "ㄹ",
    title: "ㄹ-dropping stems",
    rule: "A stem ending in ㄹ never adds 으, and drops its ㄹ before ㄴ, ㅂ and ㅅ: 살다 → 사세요, 삽니다, 사는, 사니까, but 살면, 살아요, 살 거예요. Adjectives too: 멀다 → 먼 곳, 멉니다. The classic slip is *살으세요 or *만들으면: 사세요, 만들면.",
    examples: ["살다", "만들다", "알다", "멀다"],
  },
  {
    id: "으",
    title: "으-dropping stems",
    rule: "A stem ending in ㅡ loses it before 아/어: 쓰다 → 써요, 바쁘다 → 바빠요, 아프다 → 아파요. The syllable before ㅡ decides 아 or 어 (바 → 바빠, 예 → 예뻐); a one-syllable stem takes 어 (크다 → 커요, 끄다 → 꺼요). Before other endings nothing changes: 쓰세요, 바쁜.",
    examples: ["쓰다", "바쁘다", "아프다", "크다"],
  },
  {
    id: "르",
    title: "르 irregular",
    rule: "르 adds a second ㄹ before 아/어: 모르다 → 몰라요, 부르다 → 불러요, 다르다 → 달라요, 빠르다 → 빨라요. Elsewhere it's regular: 모릅니다, 모르는. Three verbs only drop the ㅡ, like 쓰다: 따르다 → 따라요, 들르다 → 들러요, 치르다 → 치러요.",
    examples: ["모르다", "부르다", "다르다", "빠르다"],
  },
  {
    id: "ㅂ",
    title: "ㅂ irregular",
    rule: "ㅂ turns into 우 before a vowel: 춥다 → 추워요, 추운 날, 추우면; 어렵다 → 어려워요. Only 돕다 and 곱다 take 와: 도와요, 고와요. Nearly every adjective in ㅂ does this (쉽다, 맵다, 아름답다, every -스럽다 and -롭다), but some words keep ㅂ: 입다 → 입어요, 잡다 → 잡아요, 좁다 → 좁아요, 넓다 → 넓어요.",
    examples: ["돕다", "춥다", "어렵다", "아름답다"],
  },
  {
    id: "ㄷ",
    title: "ㄷ irregular",
    rule: "ㄷ turns into ㄹ before a vowel and stays before a consonant: 듣다 → 들어요, 들으세요, 들은 이야기, but 듣고, 듣는, 듣습니다. Only a few verbs: 듣다, 걷다 'walk', 묻다 'ask', 싣다, 깨닫다. Most ㄷ stems are regular: 닫다 → 닫아요, 받다, 믿다, 얻다, and 묻다 'bury' → 묻어요.",
    examples: ["듣다", "걷다", "묻다", "묻다-2"],
  },
  {
    id: "ㅅ",
    title: "ㅅ irregular",
    rule: "ㅅ disappears before a vowel, and the vowels stay apart: 낫다 → 나아요 (never 나요), 짓다 → 지어요, 지으세요, 지은 집; before a consonant it's back: 짓고, 짓는. Regular ㅅ stems keep it: 웃다 → 웃어요, 씻다 → 씻어요, 벗다 → 벗어요.",
    examples: ["낫다", "짓다", "붓다", "웃다"],
  },
  {
    id: "ㅎ",
    title: "ㅎ irregular",
    rule: "Colour words and 이렇다, 그렇다, 저렇다, 어떻다 drop ㅎ. Before 아/어 the vowel becomes ㅐ: 빨갛다 → 빨개요, 그렇다 → 그래요, 어떻다 → 어때요 (ㅒ after ㅑ: 하얗다 → 하얘요; ㅔ in dark colour words: 누렇다 → 누레요). Before (으) endings both ㅎ and 으 go: 빨간 차, 그러면, 어떤, 하야니까. Not 좋다, 놓다, 넣다, 많다, 괜찮다, which are regular: 좋아요, 좋은.",
    examples: ["하얗다", "빨갛다", "그렇다", "어떻다"],
  },
  {
    id: "러",
    title: "러 and 우: one-word classes",
    rule: "Two rare patterns worth recognising: 푸르다 'blue, green' adds 러 (푸르러요, 푸르렀다), and 푸다 'scoop' drops its ㅜ (퍼요, 펐어요).",
    examples: ["푸르다", "푸다"],
  },
  {
    id: "honorific",
    title: "Honorific verbs",
    rule: "The honorific -(으)시- goes on the verb when its subject is someone you respect: 가세요, 읽으셨어요. A few verbs swap in a different word: 먹다, 마시다 → 드시다 (also 잡수시다), 자다 → 주무시다, 있다 'be there' → 계시다, 말하다 → 말씀하시다, 아프다 → 편찮으시다, 죽다 → 돌아가시다. 있다 'have' takes 있으시다: 시간 있으세요? Never honor a thing: *커피 나오셨습니다 is wrong; the coffee 나왔습니다.",
    examples: ["드시다", "주무시다", "계시다", "편찮으시다"],
  },
  {
    id: "copula",
    title: "이다 and 아니다",
    rule: "이다 'to be (something)' is written joined to its noun. After a consonant it keeps its 이 (학생이에요, 학생이었어요); after a vowel it shrinks (의사예요, 의사였어요). 입니다 is the same after both. Its negative is 아니다, with 이/가 on the noun: 학생이 아니에요. Writing *의사이에요 or *학생예요 is a common slip.",
    examples: ["이다", "아니다"],
  },
];

/** A short note on how a particular word behaves, or null. */
export function wordNote(w: KoWord): string | null {
  if (w.note) return w.note;
  switch (w.dict) {
    case "있다":
      return "For people, the honorific is 계시다 (선생님이 교실에 계세요); for things someone has, 있으시다 (시간 있으세요?). The negative is 없다, not 안 있다.";
    case "없다":
      return "For people, the honorific is 안 계시다 (사장님은 지금 안 계세요); for things someone has, 없으시다 (시간 없으세요?).";
    case "알다":
      return "Not *안 알아요: the negative of 알다 is 모르다 (몰라요). 알겠습니다 'understood' is the formal answer to an instruction.";
    case "모르다":
      return "Already negative in meaning: 'I don't know' is 몰라요 (or 모르겠어요, softer).";
    case "아니다":
      return "The noun before it takes 이/가: 학생이 아니에요, 의사가 아니에요.";
    case "먹다":
    case "마시다":
      return "Honorific: 드시다, or the very respectful 잡수시다 (for elders). 먹으세요 is heard among peers, but to a guest or an elder say 드세요.";
    case "자다":
      return "Honorific: 주무시다. Good night to an elder is 안녕히 주무세요.";
    case "말하다":
      return "Honorific: 말씀하시다 (말씀하세요). 말씀드리다 is the humble form: 'I'll tell you' to a superior is 말씀드릴게요.";
    case "아프다":
      return "For a respected person who is ill: 편찮으시다 (할머니가 편찮으세요). For a part of their body: 아프시다 (머리가 아프세요?).";
    case "죽다":
      return "For a respected person: 돌아가시다 (할아버지가 돌아가셨어요).";
    case "주다":
      return "Giving to someone you respect uses the humble 드리다: 선생님께 드렸어요. 주시다 is a respected person giving: 선생님이 주셨어요.";
    case "맛있다":
    case "재미있다":
      return "Pronounced [마싣따], [재미읻따]. The negative is a separate word: 맛없다, 재미없다.";
    case "잘하다":
      return "The opposite is 못하다 or 잘 못하다: 수영을 잘 못해요.";
    case "바라다":
      return "Spelled 바라요, not *바래요 (a very common misspelling): 행복하길 바라요.";
    case "되다":
      return "돼요 is 되 + 어요 shortened: write 돼요, 됐어요, never *되요.";
  }
  if (w.honSelf) return "An honorific verb: use it for someone you respect, never for yourself.";
  if (w.split) return `A noun + 하다 verb: 안 goes before 하다 (${w.dict.slice(0, -2)} 안 해요), or use the long negative (${w.dict.slice(0, -1)}지 않아요).`;
  return null;
}
