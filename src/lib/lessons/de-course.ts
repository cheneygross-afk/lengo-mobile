// Synced from cheneygross-afk/lengo:src/lib/lessons/de-course.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { DE_A1_LESSONS, DE_A1_UNITS } from "./de-a1";
import { DE_A2_LESSONS, DE_A2_UNITS } from "./de-a2";
import { DE_B1_LESSONS, DE_B1_UNITS } from "./de-b1";
import { DE_B2_LESSONS, DE_B2_UNITS } from "./de-b2";
import { DE_C1_LESSONS, DE_C1_UNITS } from "./de-c1";
import { DE_C2_LESSONS, DE_C2_UNITS } from "./de-c2";
import { DE_CULTURE_LESSONS, DE_CULTURE_UNITS } from "./de-culture";

// The German course: its A1-C2 levels in order, then the Colloquial
// German & Culture module, as the /lessons/de page lists them (the same
// shape as the Spanish /lessons page). Levels line up with the Goethe-Zertifikat
// exams. Scope and authoring conventions: docs/german-course/.
export type GermanLevel = {
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Culture";
  /** "a1" ... "c2", "culture": the URL segment under /lessons/de. */
  path: string;
  name: string;
  /** What the level cards show: "Beginner (A1)". */
  label: string;
  exam: string | null;
  description: string;
  lessons: Lesson[];
  units: UnitOutline[];
};

export const DE_COURSE_LEVELS: GermanLevel[] = [
  {
    code: "A1",
    path: "a1",
    name: "Beginner",
    label: "Beginner (A1)",
    exam: "Goethe-Zertifikat A1",
    description:
      "Sein and haben, der/die/das and noun plurals, the sounds of German, present-tense verbs and modal verbs, questions, word order, the accusative, numbers, time and everyday conversations.",
    lessons: DE_A1_LESSONS,
    units: DE_A1_UNITS,
  },
  {
    code: "A2",
    path: "a2",
    name: "Elementary",
    label: "Elementary (A2)",
    exam: "Goethe-Zertifikat A2",
    description:
      "The Perfekt and Präteritum, the dative case, reflexive verbs, two-way prepositions, adjective endings, weil/dass clauses, the future and survival situations from restaurants to the Bürgeramt.",
    lessons: DE_A2_LESSONS,
    units: DE_A2_UNITS,
  },
  {
    code: "B1",
    path: "b1",
    name: "Intermediate",
    label: "Intermediate (B1)",
    exam: "Goethe-Zertifikat B1",
    description:
      "Konjunktiv II and wenn-clauses, the Plusquamperfekt, relative and infinitive clauses, the passive, verbs with prepositions, the genitive, spoken German and real situations at the bank, the office and home.",
    lessons: DE_B1_LESSONS,
    units: DE_B1_UNITS,
  },
  {
    code: "B2",
    path: "b2",
    name: "Upper-intermediate",
    label: "Upper-intermediate (B2)",
    exam: "Goethe-Zertifikat B2",
    description:
      "Konjunktiv I and indirect speech, past hypotheticals, passive alternatives, extended participles, nominal style, concessive and causal clauses, connectors for arguing a point, and word order for emphasis.",
    lessons: DE_B2_LESSONS,
    units: DE_B2_UNITS,
  },
  {
    code: "C1",
    path: "c1",
    name: "Advanced",
    label: "Advanced (C1)",
    exam: "Goethe-Zertifikat C1",
    description:
      "Advanced Konjunktiv, nominal and academic style, literary narration, registers from formal to Umgangssprache, Austrian and Swiss German, formal letters and academic writing.",
    lessons: DE_C1_LESSONS,
    units: DE_C1_UNITS,
  },
  {
    code: "C2",
    path: "c2",
    name: "Mastery",
    label: "Mastery (C2)",
    exam: "Goethe-Zertifikat C2",
    description:
      "Legal, medical and business German, idioms and proverbs, humour and wordplay, rhetoric, debate and negotiation, and writing about history, science, art and ideas.",
    lessons: DE_C2_LESSONS,
    units: DE_C2_UNITS,
  },
  {
    code: "Culture",
    path: "culture",
    name: "Colloquial German & Culture",
    label: "Colloquial German & Culture",
    exam: null,
    description:
      "Festivals and food culture, football, film and music, du and Sie etiquette, punctuality, Sunday quiet and the unwritten rules of German social life.",
    lessons: DE_CULTURE_LESSONS,
    units: DE_CULTURE_UNITS,
  },
];

/** "a1" -> the A1 level, "culture" -> the Culture module, or undefined. */
export function germanLevel(path: string): GermanLevel | undefined {
  return DE_COURSE_LEVELS.find((l) => l.path === path.toLowerCase());
}
