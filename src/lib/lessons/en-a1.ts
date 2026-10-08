// Synced from cheneygross-afk/lengo:src/lib/lessons/en-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_A1_U1 } from "./en-a1-u1";
import { EN_A1_U2 } from "./en-a1-u2";
import { EN_A1_U3 } from "./en-a1-u3";
import { EN_A1_U4 } from "./en-a1-u4";
import { EN_A1_U5 } from "./en-a1-u5";
import { EN_A1_U6 } from "./en-a1-u6";
import { EN_A1_U7 } from "./en-a1-u7";
import { EN_A1_U8 } from "./en-a1-u8";
import { EN_A1_U9 } from "./en-a1-u9";
import { EN_A1_U10 } from "./en-a1-u10";
import { EN_A1_U9_MORE } from "./en-a1-u9-more";
import { EN_A1_U8_MORE } from "./en-a1-u8-more";
import { EN_A1_U7_MORE } from "./en-a1-u7-more";
import { EN_A1_U6_MORE } from "./en-a1-u6-more";
import { EN_A1_U5_MORE } from "./en-a1-u5-more";
import { EN_A1_U4_MORE } from "./en-a1-u4-more";
import { EN_A1_U3_MORE } from "./en-a1-u3-more";
import { EN_A1_U2_MORE } from "./en-a1-u2-more";
import { EN_A1_U1_MORE } from "./en-a1-u1-more";
import { EN_A1_U1_EXTRA } from "./en-a1-u1-extra";
import { EN_A1_U2_EXTRA } from "./en-a1-u2-extra";
import { EN_A1_U3_EXTRA } from "./en-a1-u3-extra";
import { EN_A1_U4_EXTRA } from "./en-a1-u4-extra";
import { EN_A1_U5_EXTRA } from "./en-a1-u5-extra";
import { EN_A1_U6_EXTRA } from "./en-a1-u6-extra";
import { EN_A1_U7_EXTRA } from "./en-a1-u7-extra";
import { EN_A1_U8_EXTRA } from "./en-a1-u8-extra";

// English for Spanish speakers (beta), A1. The same Lesson/Exercise shapes
// as the Spanish course, with the roles of the two languages swapped:
//
// - `LessonExample.es` holds the ENGLISH (the language being learned) and
//   `.en` the Spanish meaning -- the field names are historical ("es" is
//   always the target language, as in the Japanese track).
// - Explanations are in Spanish at A1/A2 (English from B1 up, mirroring
//   the Spanish course's switch to Spanish), with every English word or
//   phrase inside double quotes so tap-to-hear voices it in English.
// - Exercise prompts are translations from Spanish into English:
//   `translate` with direction "es-en" (Spanish source, English answer),
//   or `fill-blank` with `en` holding the Spanish sentence and the
//   [bracketed] words the blank stands for. Grammar notes go in the
//   explanation, shown after answering.
// - No conversation practice: this track has no instructor booking.

const UNITS: EnglishUnitDef[] = [
  { id: "u1", title: "Saludos, pronombres y to be", description: "Saludar, los pronombres personales, el verbo to be, artículos, plurales y adjetivos.", lessons: [...EN_A1_U1, ...EN_A1_U1_MORE, ...EN_A1_U1_EXTRA] },
  { id: "u2", title: "Los sonidos del inglés", description: "Vocales cortas y largas, th, h, v, la s inicial, el acento de las palabras y la vocal schwa.", lessons: [...EN_A1_U2, ...EN_A1_U2_MORE, ...EN_A1_U2_EXTRA] },
  { id: "u3", title: "El presente simple", description: "I work, she works: la -s de la tercera persona, do y does, negativas, preguntas y adverbios de frecuencia.", lessons: [...EN_A1_U3, ...EN_A1_U3_MORE, ...EN_A1_U3_EXTRA] },
  { id: "u4", title: "El presente continuo", description: "I am working: lo que pasa ahora, y cuándo usar el presente simple o el continuo.", lessons: [...EN_A1_U4, ...EN_A1_U4_MORE, ...EN_A1_U4_EXTRA] },
  { id: "u5", title: "Posesivos, números y la hora", description: "My, his, her y el genitivo 's, preposiciones de lugar, números, precios y la hora.", lessons: [...EN_A1_U5, ...EN_A1_U5_MORE, ...EN_A1_U5_EXTRA] },
  { id: "u6", title: "Fechas, familia y preguntas", description: "Días, meses y fechas, la familia y las palabras interrogativas.", lessons: [...EN_A1_U6, ...EN_A1_U6_MORE, ...EN_A1_U6_EXTRA] },
  { id: "u7", title: "Like, can, have y there is", description: "Hablar de gustos, de lo que sabes hacer, de lo que tienes y de lo que hay.", lessons: [...EN_A1_U7, ...EN_A1_U7_MORE, ...EN_A1_U7_EXTRA] },
  { id: "u8", title: "This, that y el nivel Fundamentos hasta ahora", description: "Demostrativos, pronombres de objeto, el imperativo y un repaso en espiral.", lessons: [...EN_A1_U8, ...EN_A1_U8_MORE, ...EN_A1_U8_EXTRA] },
  { id: "u9", title: "Repaso final del nivel Fundamentos", description: "Repaso completo del nivel antes de pasar al nivel Ganando fluidez.", lessons: [...EN_A1_U9, ...EN_A1_U9_MORE] },
  { id: "u10", title: "Desafíos y examen de salida del nivel Fundamentos", description: "Retos que mezclan todo el nivel Fundamentos y el examen para pasar al nivel Ganando fluidez.", lessons: EN_A1_U10 },
];

const LEVEL = buildEnglishLevel("en/a1", UNITS);
export const EN_A1_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_A1_UNITS: UnitOutline[] = LEVEL.units;
