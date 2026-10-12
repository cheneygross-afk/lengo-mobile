// Synced from cheneygross-afk/lengo:src/lib/grammar/zh-types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Chinese (Mandarin) grammar guides (/lessons/zh/tools/grammar). The shape
// mirrors the Japanese guides in ./ja-types.ts so the reader page can be
// laid out the same way; the differences are the example fields
// ({zh, pinyin, en}) and the HSK 3.0 tag.
//
// Conventions (see src/lib/lessons/zh/README.md):
// - Simplified characters; pinyin with tone marks, showing each syllable's
//   dictionary tone except 不 and 一, which are written with the tone
//   actually spoken (bú shì, yí ge). Neutral tones are unmarked.
// - Chinese is always rendered tappable (TapText) by the pages.

export type ZhLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** The HSK 3.0 band each course level prepares for. */
export type HskTag = "HSK 1" | "HSK 2" | "HSK 3" | "HSK 4" | "HSK 5–6" | "HSK 7–9";

export const HSK_FOR_LEVEL: Record<ZhLevel, HskTag> = {
  A1: "HSK 1",
  A2: "HSK 2",
  B1: "HSK 3",
  B2: "HSK 4",
  C1: "HSK 5–6",
  C2: "HSK 7–9",
};

export const ZH_LEVEL_ORDER: ZhLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export type ZhGrammarExample = {
  /** The Chinese, in simplified characters. */
  zh: string;
  /** Its pinyin with tone marks (README conventions). */
  pinyin: string;
  /** Its natural English meaning. */
  en: string;
};

/** A small reference table (patterns, comparisons). Cells may hold Chinese
 * (rendered tappable) or English; the first column is usually the row label. */
export type ZhGrammarTable = {
  headers: string[];
  rows: string[][];
};

export type ZhGrammarSection = {
  /** English; Chinese inside it is fine. */
  heading: string;
  /** English paragraphs. Chinese quoted in them is written as
   * 你好 (nǐ hǎo): characters followed by pinyin in brackets. */
  body: string[];
  /** Shown after the body, before the examples. */
  table?: ZhGrammarTable;
  examples?: ZhGrammarExample[];
};

export type ZhGrammarMistake = {
  /** What learners write (Chinese). */
  wrong: string;
  /** The corrected version (Chinese). */
  right: string;
  /** Pinyin of the corrected version. */
  rightPinyin?: string;
  /** Why, in English. */
  why: string;
};

export type ZhGrammarFaq = {
  q: string;
  a: string;
};

export type ZhGrammarGuide = {
  /** URL segment under /lessons/zh/tools/grammar/. Lowercase, hyphenated, unique. */
  slug: string;
  /** On-page H1 (English, may contain Chinese). */
  title: string;
  /** One or two sentences for the index card and the <meta> description. */
  description: string;
  level: ZhLevel;
  hsk: HskTag;
  intro: string[];
  sections: ZhGrammarSection[];
  mistakes: ZhGrammarMistake[];
  faqs: ZhGrammarFaq[];
  /** Slugs of other Chinese guides worth reading next. */
  related: string[];
  /** Slugs of the course lessons that teach this point, in course order
   * (/lessons/zh/<level>/<slug>; every slug starts with "zh-"). */
  lessons: string[];
};
