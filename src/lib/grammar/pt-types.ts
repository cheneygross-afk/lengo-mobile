// Synced from cheneygross-afk/lengo:src/lib/grammar/pt-types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Brazilian Portuguese grammar guides (/lessons/pt/tools/grammar). The shape
// mirrors the German guides in ./de-types.ts (and the French, Spanish and
// Japanese ones) so the reader page is laid out the same way.
//
// How the guides are organised
// - One file per level: ./pt-guides-a1.ts exports PT_A1_GUIDES, ./pt-guides-a2.ts
//   PT_A2_GUIDES, and so on. ./pt-guides.ts concatenates them, beginner first.
//   ./pt-guides.ts already imports all six level files; a level file may be
//   an empty array while it is being written. The index page groups by
//   `level` and the [slug] page is generated from the combined list.
// - Slugs are unique across ALL levels (they are the URL), lowercase ASCII,
//   hyphenated, no accents: "ser-vs-estar", "future-subjunctive".
// - `lessons` holds course lesson slugs (src/lib/lessons/pt-*.ts, i.e.
//   docs/portuguese-course/syllabus-*.md), in course order. The page looks
//   each one up and silently drops slugs that do not exist, so check them.
// - `related` holds other guide slugs; unknown slugs are dropped too, so a
//   lower level may already point at a guide a later file will add.
//
// Writing conventions
// - English prose quotes Portuguese in "double quotes": the Portuguese
//   voice reads quoted text aloud (TapText, lang "pt-BR"). English meanings
//   are never quoted.
// - Table cells and example sentences may be plain Portuguese (no quotes).
// - Correct Brazilian Portuguese as written in Brazil today (ideia, voo,
//   ótimo, econômico, você). European Portuguese forms appear only where a
//   guide compares the two, quoted and labelled. No Spanish or other
//   language anywhere on these pages.

export type PtLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** The Celpe-Bras certificate each course level lines up with (A1 and A2
 * are below the exam's first certificate). */
export const CERTIFICATE_FOR_LEVEL: Record<PtLevel, string | null> = {
  A1: null,
  A2: null,
  B1: "Celpe-Bras Intermediário",
  B2: "Celpe-Bras Intermediário Superior",
  C1: "Celpe-Bras Avançado",
  C2: "Celpe-Bras Avançado Superior",
};

export const PT_LEVEL_ORDER: PtLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export type PtGrammarExample = {
  /** The Portuguese. */
  pt: string;
  /** Its natural English meaning. */
  en: string;
};

/** A small reference table (conjugations, article and pronoun charts). The
 * first column is usually the row label. */
export type PtGrammarTable = {
  headers: string[];
  rows: string[][];
};

export type PtGrammarSection = {
  /** English; Portuguese inside it in "double quotes". */
  heading: string;
  /** English paragraphs, Portuguese in "double quotes". */
  body: string[];
  /** Shown after the body, before the examples. */
  table?: PtGrammarTable;
  examples?: PtGrammarExample[];
};

export type PtGrammarMistake = {
  /** What learners write (Portuguese). */
  wrong: string;
  /** The corrected version (Portuguese). */
  right: string;
  /** Why, in English. */
  why: string;
};

export type PtGrammarFaq = {
  q: string;
  a: string;
};

export type PtGrammarGuide = {
  /** URL segment under /lessons/pt/tools/grammar/. Lowercase ASCII, hyphenated, unique across all levels. */
  slug: string;
  /** On-page H1 (English, may name the Portuguese point, e.g. "Ser vs Estar: Which To Be?"). */
  title: string;
  /** One or two sentences for the index card and the <meta> description. */
  description: string;
  level: PtLevel;
  intro: string[];
  sections: PtGrammarSection[];
  mistakes: PtGrammarMistake[];
  faqs: PtGrammarFaq[];
  /** Slugs of other Portuguese guides worth reading next. */
  related: string[];
  /** Slugs of the course lessons that teach this point, in course order
   * (/lessons/pt/<level>/<slug>; see docs/portuguese-course/syllabus-*.md). */
  lessons: string[];
};
