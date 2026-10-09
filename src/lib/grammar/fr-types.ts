// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-types.ts by scripts/sync-content.mjs -- edit it there, not here.
// French grammar guides (/lessons/fr/tools/grammar, free to everyone like
// the Spanish /grammar guides). The shape mirrors the Spanish GrammarGuide in
// ./types.ts and the Japanese one in ./ja-types.ts so the reader page is laid
// out the same way. English prose quotes French in "double quotes" (the
// French voice reads quoted text aloud); English meanings are never quoted.

export type FrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** The DELF/DALF diploma each course level lines up with. */
export const DIPLOMA_FOR_LEVEL: Record<FrLevel, string> = {
  A1: "DELF A1",
  A2: "DELF A2",
  B1: "DELF B1",
  B2: "DELF B2",
  C1: "DALF C1",
  C2: "DALF C2",
};

export const FR_LEVEL_ORDER: FrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export type FrGrammarExample = {
  /** The French. */
  fr: string;
  /** Its natural English meaning. */
  en: string;
};

/** A small reference table (conjugations, pronoun charts). The first column
 * is usually the row label. */
export type FrGrammarTable = {
  headers: string[];
  rows: string[][];
};

export type FrGrammarSection = {
  /** English; French inside it in "double quotes". */
  heading: string;
  /** English paragraphs, French in "double quotes". */
  body: string[];
  /** Shown after the body, before the examples. */
  table?: FrGrammarTable;
  examples?: FrGrammarExample[];
};

export type FrGrammarMistake = {
  /** What learners write (French). */
  wrong: string;
  /** The corrected version (French). */
  right: string;
  /** Why, in English. */
  why: string;
};

export type FrGrammarFaq = {
  q: string;
  a: string;
};

export type FrGrammarGuide = {
  /** URL segment under /lessons/fr/tools/grammar/. Lowercase ASCII, hyphenated, unique. */
  slug: string;
  /** On-page H1 (English, may name the French point, e.g. "Passé Composé vs Imparfait"). */
  title: string;
  /** One or two sentences for the index card and the <meta> description. */
  description: string;
  level: FrLevel;
  intro: string[];
  sections: FrGrammarSection[];
  mistakes: FrGrammarMistake[];
  faqs: FrGrammarFaq[];
  /** Slugs of other French guides worth reading next. */
  related: string[];
  /** Slugs of the course lessons that teach this point, in course order
   * (/lessons/fr/<level>/<slug>; see docs/french-course/syllabus-*.md). */
  lessons: string[];
};
