// Synced from cheneygross-afk/lengo:src/lib/lessons/en-course.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { EN_A1_LESSONS, EN_A1_UNITS } from "./en-a1";
import { EN_A2_LESSONS, EN_A2_UNITS } from "./en-a2";
import { EN_B1_LESSONS, EN_B1_UNITS } from "./en-b1";
import { EN_C2_LESSONS, EN_C2_UNITS } from "./en-c2";
import { EN_C1_LESSONS, EN_C1_UNITS } from "./en-c1";
import { EN_B2_LESSONS, EN_B2_UNITS } from "./en-b2";

// The English for Spanish speakers beta track: its levels, in order, as
// the /lessons/en level picker lists them. A level with no lessons yet is
// shown as "Próximamente" instead of linking anywhere. Text is in Spanish,
// the learners' own language.
export type EnglishLevel = {
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  name: string;
  description: string;
  lessons: Lesson[];
  units: UnitOutline[];
};

export const EN_COURSE_LEVELS: EnglishLevel[] = [
  {
    code: "A1",
    name: "Fundamentos",
    description:
      "Saludos, el verbo to be, el presente simple y el continuo, los sonidos del inglés, números, fechas, la hora y las preguntas básicas.",
    lessons: EN_A1_LESSONS,
    units: EN_A1_UNITS,
  },
  {
    code: "A2",
    name: "Ganando fluidez",
    description: "El pasado simple, el futuro con going to y will, comparativos, contables e incontables, y los primeros phrasal verbs.",
    lessons: EN_A2_LESSONS,
    units: EN_A2_UNITS,
  },
  {
    code: "B1",
    name: "Independencia",
    description: "El present perfect, el pasado continuo, condicionales, la voz pasiva, verbos modales y el estilo indirecto.",
    lessons: EN_B1_LESSONS,
    units: EN_B1_UNITS,
  },
  {
    code: "B2",
    name: "Intermedio alto",
    description: "Tiempos perfectos continuos, condicionales mixtos, verbos con preposición, matices de los modales y escritura formal.",
    lessons: EN_B2_LESSONS,
    units: EN_B2_UNITS,
  },
  {
    code: "C1",
    name: "Avanzado",
    description: "Inversión, cleft sentences, registro académico y profesional, colocaciones y modismos.",
    lessons: EN_C1_LESSONS,
    units: EN_C1_UNITS,
  },
  {
    code: "C2",
    name: "Maestría",
    description: "Matices de estilo, variedades del inglés, humor, ironía y lenguaje literario.",
    lessons: EN_C2_LESSONS,
    units: EN_C2_UNITS,
  },
];

/** "a1" -> the A1 level, or undefined. */
export function englishLevel(code: string): EnglishLevel | undefined {
  return EN_COURSE_LEVELS.find((l) => l.code.toLowerCase() === code.toLowerCase());
}
