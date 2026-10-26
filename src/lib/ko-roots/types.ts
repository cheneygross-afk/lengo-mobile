// Synced from cheneygross-afk/lengo:src/lib/ko-roots/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// One root of the Korean Word Roots tool (src/lib/ko-roots/a1.ts ... c2.ts):
// a Sino-Korean syllable with its Hanja. The only place in the Korean
// course where Hanja appear.
export type KoRootLevel = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type KoRoot = {
  /** The Hanja, in the traditional form used in Korea (學, not 学). */
  h: string;
  /** The standard Korean reading (녀, 력, 학). */
  r: string;
  /** The reading at the start of a word, where the initial-sound rule
   * (두음 법칙) changes it: 녀 -> 여, 력 -> 역, 로 -> 노. */
  initial?: string;
  /** Another reading worth knowing (不 is 부 before ㄷ and ㅈ). */
  other?: string;
  /** Other spellings it takes inside words (낙 for 樂 in 낙관, 율 for 率 in
   * 비율), used only to find and mark it in a word. */
  forms?: string[];
  /** English meaning, most important first. */
  m: string;
  /** A short note on the readings, in English with Hangul examples. */
  note?: string;
  /** Common words built from it, all of which appear in the course. */
  words: { ko: string; en: string }[];
};
