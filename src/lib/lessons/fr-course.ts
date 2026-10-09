// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-course.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { FR_A1_LESSONS, FR_A1_UNITS } from "./fr-a1";
import { FR_A2_LESSONS, FR_A2_UNITS } from "./fr-a2";
import { FR_B1_LESSONS, FR_B1_UNITS } from "./fr-b1";
import { FR_B2_LESSONS, FR_B2_UNITS } from "./fr-b2";
import { FR_C1_LESSONS, FR_C1_UNITS } from "./fr-c1";
import { FR_C2_LESSONS, FR_C2_UNITS } from "./fr-c2";
import { FR_CULTURE_LESSONS, FR_CULTURE_UNITS } from "./fr-culture";

// The French course: its A1-C2 levels in order, then the Colloquial
// French & Culture module, as the /lessons/fr page lists them (the same
// shape as the Spanish /lessons page). Levels line up with the DELF/DALF
// exams. Scope and authoring conventions: docs/french-course/.
export type FrenchLevel = {
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Culture";
  /** "a1" ... "c2", "culture": the URL segment under /lessons/fr. */
  path: string;
  name: string;
  /** What the level cards show: "Beginner (A1)". */
  label: string;
  exam: string | null;
  description: string;
  lessons: Lesson[];
  units: UnitOutline[];
};

export const FR_COURSE_LEVELS: FrenchLevel[] = [
  {
    code: "A1",
    path: "a1",
    name: "Beginner",
    label: "Beginner (A1)",
    exam: "DELF A1",
    description:
      "Être and avoir, articles and gender, the sounds of French, present-tense verbs, questions and negation, numbers, time and dates, and everyday conversations.",
    lessons: FR_A1_LESSONS,
    units: FR_A1_UNITS,
  },
  {
    code: "A2",
    path: "a2",
    name: "Elementary",
    label: "Elementary (A2)",
    exam: "DELF A2",
    description:
      "The passé composé and imparfait, object pronouns, y and en, pronominal verbs, comparisons, the future, the imperative, and survival situations from restaurants to doctors.",
    lessons: FR_A2_LESSONS,
    units: FR_A2_UNITS,
  },
  {
    code: "B1",
    path: "b1",
    name: "Intermediate",
    label: "Intermediate (B1)",
    exam: "DELF B1",
    description:
      "The subjunctive, the conditional and si-clauses, the plus-que-parfait, relative pronouns, the passive, spoken French, and real situations at the bank, the office and home.",
    lessons: FR_B1_LESSONS,
    units: FR_B1_UNITS,
  },
  {
    code: "B2",
    path: "b2",
    name: "Upper-intermediate",
    label: "Upper-intermediate (B2)",
    exam: "DELF B2",
    description:
      "Subjunctive after conjunctions and in relative clauses, past hypotheticals, reported speech, the gérondif, causative faire, connectors for arguing a point, and emphasis.",
    lessons: FR_B2_LESSONS,
    units: FR_B2_UNITS,
  },
  {
    code: "C1",
    path: "c1",
    name: "Advanced",
    label: "Advanced (C1)",
    exam: "DALF C1",
    description:
      "Concession, nominalization, literary tenses, registers from soutenu to argot and verlan, French around the world, formal letters and academic writing.",
    lessons: FR_C1_LESSONS,
    units: FR_C1_UNITS,
  },
  {
    code: "C2",
    path: "c2",
    name: "Mastery",
    label: "Mastery (C2)",
    exam: "DALF C2",
    description:
      "Legal, medical and business French, idioms and proverbs, humour and wordplay, rhetoric, debate and negotiation, and writing about history, science, art and ideas.",
    lessons: FR_C2_LESSONS,
    units: FR_C2_UNITS,
  },
  {
    code: "Culture",
    path: "culture",
    name: "Colloquial French & Culture",
    label: "Colloquial French & Culture",
    exam: null,
    description:
      "Festivals and food culture, football, cinema and chanson, la bise, tu and vous etiquette, superstitions and the unwritten rules of French social life.",
    lessons: FR_CULTURE_LESSONS,
    units: FR_CULTURE_UNITS,
  },
];

/** "a1" -> the A1 level, "culture" -> the Culture module, or undefined. */
export function frenchLevel(path: string): FrenchLevel | undefined {
  return FR_COURSE_LEVELS.find((l) => l.path === path.toLowerCase());
}
