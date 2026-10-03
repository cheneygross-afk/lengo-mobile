// Synced from cheneygross-afk/lengo:src/lib/lessons/en-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_A2_U01 } from "./en-a2-u01";
import { EN_A2_U02 } from "./en-a2-u02";
import { EN_A2_U03 } from "./en-a2-u03";
import { EN_A2_U04 } from "./en-a2-u04";
import { EN_A2_U05 } from "./en-a2-u05";
import { EN_A2_U06 } from "./en-a2-u06";
import { EN_A2_U07 } from "./en-a2-u07";
import { EN_A2_U08 } from "./en-a2-u08";
import { EN_A2_U09 } from "./en-a2-u09";
import { EN_A2_U10 } from "./en-a2-u10";
import { EN_A2_U11 } from "./en-a2-u11";
import { EN_A2_U12 } from "./en-a2-u12";
import { EN_A2_U13 } from "./en-a2-u13";
import { EN_A2_U14 } from "./en-a2-u14";
import { EN_A2_U15 } from "./en-a2-u15";
import { EN_A2_U16 } from "./en-a2-u16";
import { EN_A2_U17 } from "./en-a2-u17";
import { EN_A2_U18 } from "./en-a2-u18";
import { EN_A2_U19 } from "./en-a2-u19";
import { EN_A2_U20 } from "./en-a2-u20";
import { EN_A2_U21 } from "./en-a2-u21";
import { EN_A2_U22 } from "./en-a2-u22";
import { EN_A2_U23 } from "./en-a2-u23";

// English for Spanish speakers (beta), A2. Conventions as in en-a1.ts.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "El pasado simple", description: "Was y were, los verbos regulares en pasado, la pronunciación de -ed y las negativas y preguntas con did.", lessons: EN_A2_U01 },
  { id: "u02", title: "Los verbos irregulares en pasado", description: "Went, had, saw, bought: los verbos irregulares más frecuentes y cómo usarlos en negativas y preguntas.", lessons: EN_A2_U02 },
  { id: "u03", title: "El pasado continuo", description: "I was working: lo que estaba pasando en un momento del pasado, when y while, y cuándo usar cada pasado.", lessons: EN_A2_U03 },
  { id: "u04", title: "Contar historias", description: "Used to para hábitos del pasado, conectores para ordenar una historia y cómo contar una anécdota.", lessons: EN_A2_U04 },
  { id: "u05", title: "El presente perfecto", description: "Have you ever...? El presente perfecto para experiencias, los participios irregulares y been o gone.", lessons: EN_A2_U05 },
  { id: "u06", title: "Just, already, yet, for y since", description: "El presente perfecto con just, already, yet, for y since, y cuándo usar el pasado simple en su lugar.", lessons: EN_A2_U06 },
  { id: "u07", title: "Cantidades", description: "Contables e incontables, much, many, a lot of, a few, a little, too much y enough.", lessons: EN_A2_U07 },
  { id: "u08", title: "Comparativos y superlativos", description: "Bigger, more expensive, the best: comparar personas, lugares y cosas.", lessons: EN_A2_U08 },
  { id: "u09", title: "El futuro", description: "Going to, will y el presente continuo para hablar de planes, predicciones, decisiones y citas.", lessons: EN_A2_U09 },
  { id: "u10", title: "Obligación y consejo", description: "Have to, must, mustn't, don't have to y should: normas, obligaciones y consejos.", lessons: EN_A2_U10 },
  { id: "u11", title: "Posibilidad, peticiones y ofrecimientos", description: "Might, could, Could you...?, Shall I...? y otras formas educadas de pedir, ofrecer y sugerir.", lessons: EN_A2_U11 },
  { id: "u12", title: "Verbo + -ing o verbo + to", description: "Enjoy doing, want to do, I want you to come: qué forma va después de cada verbo, y to para expresar finalidad.", lessons: EN_A2_U12 },
  { id: "u13", title: "Make, do, get y verbos frasales", description: "Colocaciones muy frecuentes y los primeros verbos frasales: make o do, los usos de get, say o tell.", lessons: EN_A2_U13 },
  { id: "u14", title: "Si y cuando: el primer condicional", description: "If it rains, we'll stay home: el primer condicional, el condicional cero y when, as soon as o until con presente.", lessons: EN_A2_U14 },
  { id: "u15", title: "Pronombres y oraciones de relativo", description: "Who, which, that y where; something, anybody, nobody; myself y each other; el rojo = the red one.", lessons: EN_A2_U15 },
  { id: "u16", title: "Adjetivos y adverbios", description: "Quickly, well, bored o boring, too y enough: describir cómo se hacen las cosas y matizar adjetivos.", lessons: EN_A2_U16 },
  { id: "u17", title: "Las preposiciones", description: "Llegar a, depender de, bueno en: preposiciones de movimiento y las que van con verbos y adjetivos.", lessons: EN_A2_U17 },
  { id: "u18", title: "Preguntas y respuestas", description: "Who called?, What's it like?, so do I y neither do I: preguntas más naturales y respuestas cortas.", lessons: EN_A2_U18 },
  { id: "u19", title: "Redes de palabras", description: "Vocabulario temático del A2: viajes, salud, trabajo, tecnología, dinero, tiempo libre, estudios, naturaleza y personalidad.", lessons: EN_A2_U19 },
  { id: "u20", title: "Palabras clave", description: "Las palabras más frecuentes del A2 y los falsos amigos que más confunden a los hispanohablantes.", lessons: EN_A2_U20 },
  { id: "u21", title: "Situaciones de supervivencia", description: "Role plays para la vida diaria en un país de habla inglesa: tiendas, farmacia, médico, hotel, transporte, restaurante y más.", lessons: EN_A2_U21 },
  { id: "u22", title: "Repaso del A2", description: "Repasos completos y circuitos acumulativos de todo el nivel A2.", lessons: EN_A2_U22 },
  { id: "u23", title: "Desafíos y examen final del A2", description: "Desafíos que combinan todo el A2 y el examen de salida para pasar al B1.", lessons: EN_A2_U23 },
];

const LEVEL = buildEnglishLevel("en/a2", UNITS);
export const EN_A2_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_A2_UNITS: UnitOutline[] = LEVEL.units;
