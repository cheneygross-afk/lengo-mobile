// Synced from cheneygross-afk/lengo:src/lib/lessons/it-course.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { IT_A1_LESSONS, IT_A1_UNITS } from "./it-a1";
import { IT_A2_LESSONS, IT_A2_UNITS } from "./it-a2";
import { IT_B1_LESSONS, IT_B1_UNITS } from "./it-b1";
import { IT_B2_LESSONS, IT_B2_UNITS } from "./it-b2";
import { IT_C1_LESSONS, IT_C1_UNITS } from "./it-c1";
import { IT_C2_LESSONS, IT_C2_UNITS } from "./it-c2";
import { IT_CULTURE_LESSONS, IT_CULTURE_UNITS } from "./it-culture";

// The Italian course (private beta): its A1-C2 levels in order, as the
// /lessons/it page lists them (the same shape as the Portuguese and Korean
// courses). Each level is shown by its name and its CILS exam ("Beginner",
// "CILS A1"), never the code. The optional Culture module comes last, as in
// the French and German courses, and has no exam. Scope and authoring
// conventions: docs/italian-course/. The beta is visible to the owner's
// accounts only (lib/italianBeta.ts).
export type ItalianLevel = {
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Culture";
  /** "a1" ... "c2", "culture": the URL segment under /lessons/it. */
  path: string;
  name: string;
  /** What the level cards show: "Beginner". */
  label: string;
  /** The CILS exam it lines up with: "CILS A1" ... "CILS QUATTRO"; null for Culture. */
  exam: string | null;
  description: string;
  lessons: Lesson[];
  units: UnitOutline[];
};

export const IT_COURSE_LEVELS: ItalianLevel[] = [
  {
    code: "A1",
    path: "a1",
    name: "Beginner",
    label: "Beginner",
    exam: "CILS A1",
    description:
      "Greetings and tu or Lei, the sounds of Italian, people and things, articles, numbers, prices and time, the present tense, the bar and the restaurant, where things are, the everyday irregular verbs, likes and dislikes, your daily routine and possessives.",
    lessons: IT_A1_LESSONS,
    units: IT_A1_UNITS,
  },
  {
    code: "A2",
    path: "a2",
    name: "Elementary",
    label: "Elementary",
    exam: "CILS A2",
    description:
      "The passato prossimo with avere and essere, the imperfetto, object pronouns, ci and ne, the future and the conditional, comparisons, commands, articulated prepositions, relative pronouns, health, shopping, travel and everyday life in Italy.",
    lessons: IT_A2_LESSONS,
    units: IT_A2_UNITS,
  },
  {
    code: "B1",
    path: "b1",
    name: "Intermediate",
    label: "Intermediate",
    exam: "CILS UNO",
    description:
      "Combined pronouns, the trapassato, the subjunctive in all its main uses, the past conditional, real if-sentences, reading the passato remoto, the gerund, the passive and impersonal si, reported speech, connectors, work, housing, health, the news and opinions.",
    lessons: IT_B1_LESSONS,
    units: IT_B1_UNITS,
  },
  {
    code: "B2",
    path: "b2",
    name: "Upper-intermediate",
    label: "Upper-intermediate",
    exam: "CILS DUE",
    description:
      "The imperfect and pluperfect subjunctive, the sequence of tenses, hypothetical if-sentences, implicit clauses, concession and cause, the hard prepositions, idioms, spoken and regional Italian, formal and argumentative writing, the economy, politics, science, law and the arts.",
    lessons: IT_B2_LESSONS,
    units: IT_B2_UNITS,
  },
  {
    code: "C1",
    path: "c1",
    name: "Advanced",
    label: "Advanced",
    exam: "CILS TRE",
    description:
      "Writing with the passato remoto, literary syntax, bureaucratic, academic and business Italian, journalism, nuance with mood and modals, proverbs, shifting register, regional Italian, literature, history through texts, film and theatre, rhetoric and translation.",
    lessons: IT_C1_LESSONS,
    units: IT_C1_UNITS,
  },
  {
    code: "C2",
    path: "c2",
    name: "Mastery",
    label: "Mastery",
    exam: "CILS QUATTRO",
    description:
      "Dante, Petrarca, Boccaccio and Leopardi, the questione della lingua, dialects and regional languages, fine shades of meaning, irony and humour, slang, legal, medical and financial Italian, philosophy, style and editing, translation, and near-native listening, speaking and writing.",
    lessons: IT_C2_LESSONS,
    units: IT_C2_UNITS,
  },
  {
    code: "Culture",
    path: "culture",
    name: "Italian Culture & Everyday Life",
    label: "Italian Culture & Everyday Life",
    exam: null,
    description:
      "The regions and their rivalries, the rhythm of the Italian day, food by region, festivals and saints' days, gestures, art, music, cinema, calcio and the practical side of living in Italy. Opens from Intermediate.",
    lessons: IT_CULTURE_LESSONS,
    units: IT_CULTURE_UNITS,
  },
];

/** "a1" -> the A1 level, "culture" -> the Culture module, or undefined. */
export function italianLevel(path: string): ItalianLevel | undefined {
  return IT_COURSE_LEVELS.find((l) => l.path === path.toLowerCase());
}
