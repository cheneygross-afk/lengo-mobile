// Synced from cheneygross-afk/lengo:src/lib/grammar/it-types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Italian grammar guides (/lessons/it/tools/grammar). The shape mirrors the
// Portuguese guides in ./pt-types.ts (and the German, French and Spanish
// ones) so the reader page is laid out the same way.
//
// How the guides are organised
// - One file per level: ./it-guides-a1.ts exports IT_A1_GUIDES, ./it-guides-a2.ts
//   IT_A2_GUIDES, and so on. ./it-guides.ts concatenates them, beginner first.
//   ./it-guides.ts already imports all six level files; a level file may be
//   an empty array while it is being written. The index page groups by
//   `level` and the [slug] page is generated from the combined list.
// - Slugs are unique across ALL levels (they are the URL), lowercase ASCII,
//   hyphenated, no accents: "definite-articles", "passato-prossimo-essere".
// - `lessons` holds course lesson slugs from docs/italian-course/syllabus-*.md
//   (the lessons are src/lib/lessons/it-*.ts), in course order. The page
//   looks each one up in the course and silently drops slugs whose lesson
//   isn't written yet, so the checker tests them against the syllabi.
// - `related` holds other guide slugs; unknown slugs are dropped too, so a
//   lower level may already point at a guide a later file will add.
// - `pinned: true` marks the guides the index page shows first, in a box of
//   their own (articles, articulated prepositions, the past tenses,
//   pronouns: docs/italian-course/scope.md, Study Tools).
//
// Writing conventions (docs/italian-course/authoring.md)
// - English prose quotes Italian in "double quotes": the Italian voice reads
//   quoted text aloud (TapText, lang "it-IT"). English meanings are never
//   quoted.
// - Table cells and example sentences may be plain Italian (no quotes).
// - Correct standard Italian: è / é (perché, né), più, città, un po', qual è,
//   un altro / un'altra, double consonants. No Spanish, French or Portuguese
//   anywhere on these pages, except a word quoted to compare it (a false
//   friend), and labelled as such.
// - Level names only (Beginner ... Mastery), never codes, in the text; the
//   only exam is CILS.

export type ItLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** The CILS exam each course level lines up with. */
export const CERTIFICATE_FOR_LEVEL: Record<ItLevel, string | null> = {
  A1: "CILS A1",
  A2: "CILS A2",
  B1: "CILS UNO",
  B2: "CILS DUE",
  C1: "CILS TRE",
  C2: "CILS QUATTRO",
};

export const IT_LEVEL_ORDER: ItLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export type ItGrammarExample = {
  /** The Italian. */
  it: string;
  /** Its natural English meaning. */
  en: string;
};

/** A small reference table (conjugations, article and pronoun charts). The
 * first column is usually the row label. */
export type ItGrammarTable = {
  headers: string[];
  rows: string[][];
};

export type ItGrammarSection = {
  /** English; Italian inside it in "double quotes". */
  heading: string;
  /** English paragraphs, Italian in "double quotes". */
  body: string[];
  /** Shown after the body, before the examples. */
  table?: ItGrammarTable;
  examples?: ItGrammarExample[];
};

export type ItGrammarMistake = {
  /** What learners write (Italian). */
  wrong: string;
  /** The corrected version (Italian). */
  right: string;
  /** Why, in English. */
  why: string;
};

export type ItGrammarFaq = {
  q: string;
  a: string;
};

export type ItGrammarGuide = {
  /** URL segment under /lessons/it/tools/grammar/. Lowercase ASCII, hyphenated, unique across all levels. */
  slug: string;
  /** On-page H1 (English, may name the Italian point, e.g. "Il, Lo, La: The Definite Article"). */
  title: string;
  /** One or two sentences for the index card and the <meta> description. */
  description: string;
  level: ItLevel;
  /** Shown first on the index page, in the "Start here" box. */
  pinned?: boolean;
  intro: string[];
  sections: ItGrammarSection[];
  mistakes: ItGrammarMistake[];
  faqs: ItGrammarFaq[];
  /** Slugs of other Italian guides worth reading next. */
  related: string[];
  /** Slugs of the course lessons that teach this point, in course order
   * (/lessons/it/<level>/<slug>; see docs/italian-course/syllabus-*.md). */
  lessons: string[];
};
