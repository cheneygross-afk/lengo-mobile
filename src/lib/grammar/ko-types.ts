// Synced from cheneygross-afk/lengo:src/lib/grammar/ko-types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Korean grammar guides (/lessons/ko/tools/grammar, private beta). The shape
// mirrors the Brazilian Portuguese guides in ./pt-types.ts (and the German,
// French, Spanish and Japanese ones) so the reader page is laid out the same
// way.
//
// How the guides are organised
// - One file per level: ./ko-guides-hangul.ts exports KO_HANGUL_GUIDES (the
//   sound system and the Pronunciation Rules guide), ./ko-guides-a1.ts
//   KO_A1_GUIDES, and so on to ./ko-guides-c2.ts. ./ko-guides.ts concatenates
//   them, Hangul first. The index page groups by `level` and the [slug] page
//   is generated from the combined list.
// - Slugs are unique across ALL levels (they are the URL), lowercase ASCII,
//   hyphenated: "topic-particle-eun-neun", "pronunciation-rules".
// - `lessons` holds course lesson slugs (src/lib/lessons/ko-*.ts, i.e.
//   docs/korean-course/syllabus-*.md), in course order. The page looks each
//   one up in the small lesson list (src/lib/ko-tools/) and silently drops
//   slugs that do not exist.
// - `related` holds other guide slugs; unknown slugs are dropped too.
//
// Writing conventions (docs/korean-course/authoring.md)
// - Korean inside English text is written plainly in Hangul, without quote
//   marks: the page detects Hangul and reads it with the Korean voice
//   (TapText, lang "ko-KR"). English meanings go in 'single quotes' or
//   parentheses.
// - Pronunciation is shown in Hangul brackets: 읽다 [익따]. No romanization.
// - Hangul only: no Hanja (they appear only in the Word Roots tool), no
//   Japanese or Chinese.
// - Only genuinely ungrammatical forms get a star (*민수이에요). A register
//   slip (반말 to a stranger, 해요 in a formal speech) is not starred: such
//   a mistake is marked `register: true` and shown as "less natural / wrong
//   for the situation". 사물 존대 (*커피 나오셨습니다) counts as an error.
// - Seoul standard Korean, spelled and spaced by the official rules.

export type KoLevel = "Hangul" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** The TOPIK level each course level lines up with (the Hangul module has none). */
export const TOPIK_FOR_LEVEL: Record<KoLevel, string | null> = {
  Hangul: null,
  A1: "TOPIK 1",
  A2: "TOPIK 2",
  B1: "TOPIK 3",
  B2: "TOPIK 4",
  C1: "TOPIK 5",
  C2: "TOPIK 6 and beyond",
};

export const KO_LEVEL_ORDER: KoLevel[] = ["Hangul", "A1", "A2", "B1", "B2", "C1", "C2"];

export type KoGrammarExample = {
  /** The Korean. */
  ko: string;
  /** Its natural English meaning. */
  en: string;
};

/** A small reference table (endings, particles, sound changes). The first
 * column is usually the row label. */
export type KoGrammarTable = {
  headers: string[];
  rows: string[][];
};

export type KoGrammarSection = {
  /** English; Korean inside it plainly in Hangul. */
  heading: string;
  /** English paragraphs, Korean plainly in Hangul. */
  body: string[];
  /** Shown after the body, before the examples. */
  table?: KoGrammarTable;
  examples?: KoGrammarExample[];
};

export type KoGrammarMistake = {
  /** What learners write or say (Korean). */
  wrong: string;
  /** The corrected version (Korean). */
  right: string;
  /** Why, in English. */
  why: string;
  /** A register slip rather than an ungrammatical form: shown as "less
   * natural / wrong for the situation", not crossed out. */
  register?: boolean;
};

export type KoGrammarFaq = {
  q: string;
  a: string;
};

export type KoGrammarGuide = {
  /** URL segment under /lessons/ko/tools/grammar/. Lowercase ASCII, hyphenated, unique across all levels. */
  slug: string;
  /** On-page H1 (English, may name the Korean point, e.g. "The Topic Particle 은 / 는"). */
  title: string;
  /** One or two sentences for the index card and the <meta> description. */
  description: string;
  level: KoLevel;
  intro: string[];
  sections: KoGrammarSection[];
  mistakes: KoGrammarMistake[];
  faqs: KoGrammarFaq[];
  /** Slugs of other Korean guides worth reading next. */
  related: string[];
  /** Slugs of the course lessons that teach this point, in course order. */
  lessons: string[];
};
