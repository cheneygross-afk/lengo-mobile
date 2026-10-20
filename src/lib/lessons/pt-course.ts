// Synced from cheneygross-afk/lengo:src/lib/lessons/pt-course.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { PT_A1_LESSONS, PT_A1_UNITS } from "./pt-a1";
import { PT_A2_LESSONS, PT_A2_UNITS } from "./pt-a2";
import { PT_B1_LESSONS, PT_B1_UNITS } from "./pt-b1";
import { PT_B2_LESSONS, PT_B2_UNITS } from "./pt-b2";
import { PT_C1_LESSONS, PT_C1_UNITS } from "./pt-c1";
import { PT_C2_LESSONS, PT_C2_UNITS } from "./pt-c2";

// The Brazilian Portuguese course: its A1-C2 levels in order, as the
// /lessons/pt page lists them (the same shape as the German course). B1-C1
// line up with the Celpe-Bras certificate levels. Scope and authoring
// conventions: docs/portuguese-course/.
export type PortugueseLevel = {
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  /** "a1" ... "c2": the URL segment under /lessons/pt. */
  path: string;
  name: string;
  /** What the level cards show: "Beginner". */
  label: string;
  exam: string | null;
  description: string;
  lessons: Lesson[];
  units: UnitOutline[];
};

export const PT_COURSE_LEVELS: PortugueseLevel[] = [
  {
    code: "A1",
    path: "a1",
    name: "Beginner",
    label: "Beginner",
    exam: null,
    description:
      "Greetings, ser and estar, the sounds of Brazilian Portuguese, articles and gender, present-tense verbs and ter, questions, numbers and time, family, places and the present progressive.",
    lessons: PT_A1_LESSONS,
    units: PT_A1_UNITS,
  },
  {
    code: "A2",
    path: "a2",
    name: "Elementary",
    label: "Elementary",
    exam: null,
    description:
      "The pretérito perfeito and imperfeito, object pronouns the Brazilian way, comparisons and diminutives, the future, commands, por and para, daily routines, health, shopping and travel.",
    lessons: PT_A2_LESSONS,
    units: PT_A2_UNITS,
  },
  {
    code: "B1",
    path: "b1",
    name: "Intermediate",
    label: "Intermediate",
    exam: "Celpe-Bras Intermediário",
    description:
      "The present subjunctive, the conditional, compound and pluperfect tenses, the personal infinitive, relative clauses, reported speech, the passive, connectors, opinions, formal Portuguese and how Brazilians really talk.",
    lessons: PT_B1_LESSONS,
    units: PT_B1_UNITS,
  },
  {
    code: "B2",
    path: "b2",
    name: "Upper-intermediate",
    label: "Upper-intermediate",
    exam: "Celpe-Bras Intermediário Superior",
    description:
      "The imperfect and future subjunctive, hypothetical conditions, compound tenses, pronouns in writing, regência and crase, register, Brazil's varieties, idioms, the dissertative essay and professional Portuguese.",
    lessons: PT_B2_LESSONS,
    units: PT_B2_UNITS,
  },
  {
    code: "C1",
    path: "c1",
    name: "Advanced",
    label: "Advanced",
    exam: "Celpe-Bras Avançado",
    description:
      "Fine mood distinctions, reduced clauses, academic and official Portuguese, the ENEM-style essay, Brazil and Portugal, nuance and pragmatic particles, word order, the media, literature and history.",
    lessons: PT_C1_LESSONS,
    units: PT_C1_UNITS,
  },
  {
    code: "C2",
    path: "c2",
    name: "Mastery",
    label: "Mastery",
    exam: "Celpe-Bras Avançado Superior",
    description:
      "Style and figures of speech, humour and wordplay, proverbs and cultural references, poetry and song, translation and mediation, rhetoric, specialist registers, sociolinguistics and near-native precision.",
    lessons: PT_C2_LESSONS,
    units: PT_C2_UNITS,
  },
];

/** "a1" -> the A1 level, or undefined. */
export function portugueseLevel(path: string): PortugueseLevel | undefined {
  return PT_COURSE_LEVELS.find((l) => l.path === path.toLowerCase());
}
