// Synced from cheneygross-afk/lengo:src/lib/grammar/de-types.ts by scripts/sync-content.mjs -- edit it there, not here.
// German grammar guides (/lessons/de/tools/grammar). The shape mirrors the
// French guides in ./fr-types.ts (and the Spanish ./types.ts, the Japanese
// ./ja-types.ts) so the reader page is laid out the same way.
//
// How the guides are organised
// - One file per level: ./de-guides-a1.ts exports DE_A1_GUIDES, ./de-guides-a2.ts
//   DE_A2_GUIDES, and so on. ./de-guides.ts concatenates them, beginner first.
//   ./de-guides.ts already imports all six level files; a level file may be
//   an empty array while it is being written. The index page groups by
//   `level` and the [slug] page is generated from the combined list.
// - Slugs are unique across ALL levels (they are the URL), lowercase ASCII,
//   hyphenated, no umlauts (ae/oe/ue/ss): "konjunktiv-ii", "two-way-prepositions".
// - `lessons` holds course lesson slugs (src/lib/de-tools/data/lessons.json,
//   i.e. docs/german-course/syllabus-*.md), in course order. The page looks
//   each one up with deLessonBySlug() and silently drops slugs that do not
//   exist, so check them against lessons.json.
// - `related` holds other guide slugs; unknown slugs are dropped too, so a
//   lower level may already point at a guide a later file will add.
//
// Writing conventions
// - English prose quotes German in "double quotes": the German voice reads
//   quoted text aloud (TapText, lang "de-DE"). English meanings are never
//   quoted. Words with ä, ö, ü or ß are voiced in German even unquoted.
// - Table cells and example sentences may be plain German (no quotes).
// - Correct standard German (Germany), current spelling: dass, muss, Straße.
//   No French, Spanish or other language anywhere on these pages.

export type DeLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** The Goethe-Zertifikat each course level lines up with. */
export const DIPLOMA_FOR_LEVEL: Record<DeLevel, string> = {
  A1: "Goethe-Zertifikat A1",
  A2: "Goethe-Zertifikat A2",
  B1: "Goethe-Zertifikat B1",
  B2: "Goethe-Zertifikat B2",
  C1: "Goethe-Zertifikat C1",
  C2: "Goethe-Zertifikat C2",
};

export const DE_LEVEL_ORDER: DeLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export type DeGrammarExample = {
  /** The German. */
  de: string;
  /** Its natural English meaning. */
  en: string;
};

/** A small reference table (conjugations, article and pronoun charts). The
 * first column is usually the row label. */
export type DeGrammarTable = {
  headers: string[];
  rows: string[][];
};

export type DeGrammarSection = {
  /** English; German inside it in "double quotes". */
  heading: string;
  /** English paragraphs, German in "double quotes". */
  body: string[];
  /** Shown after the body, before the examples. */
  table?: DeGrammarTable;
  examples?: DeGrammarExample[];
};

export type DeGrammarMistake = {
  /** What learners write (German). */
  wrong: string;
  /** The corrected version (German). */
  right: string;
  /** Why, in English. */
  why: string;
};

export type DeGrammarFaq = {
  q: string;
  a: string;
};

export type DeGrammarGuide = {
  /** URL segment under /lessons/de/tools/grammar/. Lowercase ASCII, hyphenated, unique across all levels. */
  slug: string;
  /** On-page H1 (English, may name the German point, e.g. "Two-Way Prepositions: Wo or Wohin?"). */
  title: string;
  /** One or two sentences for the index card and the <meta> description. */
  description: string;
  level: DeLevel;
  intro: string[];
  sections: DeGrammarSection[];
  mistakes: DeGrammarMistake[];
  faqs: DeGrammarFaq[];
  /** Slugs of other German guides worth reading next. */
  related: string[];
  /** Slugs of the course lessons that teach this point, in course order
   * (/lessons/de/<level>/<slug>; see docs/german-course/syllabus-*.md). */
  lessons: string[];
};
