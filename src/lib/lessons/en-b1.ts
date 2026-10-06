// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_B1_U01 } from "./en-b1-u01";
import { EN_B1_U02 } from "./en-b1-u02";
import { EN_B1_U03 } from "./en-b1-u03";
import { EN_B1_U04 } from "./en-b1-u04";
import { EN_B1_U05 } from "./en-b1-u05";
import { EN_B1_U06 } from "./en-b1-u06";
import { EN_B1_U07 } from "./en-b1-u07";
import { EN_B1_U08 } from "./en-b1-u08";
import { EN_B1_U09 } from "./en-b1-u09";
import { EN_B1_U10 } from "./en-b1-u10";
import { EN_B1_U11 } from "./en-b1-u11";
import { EN_B1_U12 } from "./en-b1-u12";
import { EN_B1_U13 } from "./en-b1-u13";
import { EN_B1_U14 } from "./en-b1-u14";
import { EN_B1_U15 } from "./en-b1-u15";
import { EN_B1_U16 } from "./en-b1-u16";
import { EN_B1_U17 } from "./en-b1-u17";
import { EN_B1_U18 } from "./en-b1-u18";
import { EN_B1_U19 } from "./en-b1-u19";
import { EN_B1_U20 } from "./en-b1-u20";
import { EN_B1_U21 } from "./en-b1-u21";
import { EN_B1_U22 } from "./en-b1-u22";
import { EN_B1_U23 } from "./en-b1-u23";
import { EN_B1_U24 } from "./en-b1-u24";
import { EN_B1_U25 } from "./en-b1-u25";
import { EN_B1_U26 } from "./en-b1-u26";
import { EN_B1_U27 } from "./en-b1-u27";
import { EN_B1_U28 } from "./en-b1-u28";
import { EN_B1_U29 } from "./en-b1-u29";
import { EN_B1_U30 } from "./en-b1-u30";
import { EN_B1_U31 } from "./en-b1-u31";
import { EN_B1_U32 } from "./en-b1-u32";
import { EN_B1_U33 } from "./en-b1-u33";
import { EN_B1_U34 } from "./en-b1-u34";
import { EN_B1_U35 } from "./en-b1-u35";
import { EN_B1_U01_EXTRA } from "./en-b1-u01-extra";
import { EN_B1_U02_EXTRA } from "./en-b1-u02-extra";
import { EN_B1_U03_EXTRA } from "./en-b1-u03-extra";
import { EN_B1_U04_EXTRA } from "./en-b1-u04-extra";
import { EN_B1_U05_EXTRA } from "./en-b1-u05-extra";
import { EN_B1_U06_EXTRA } from "./en-b1-u06-extra";
import { EN_B1_U07_EXTRA } from "./en-b1-u07-extra";
import { EN_B1_U08_EXTRA } from "./en-b1-u08-extra";
import { EN_B1_U09_EXTRA } from "./en-b1-u09-extra";
import { EN_B1_U10_EXTRA } from "./en-b1-u10-extra";
import { EN_B1_U11_EXTRA } from "./en-b1-u11-extra";
import { EN_B1_U12_EXTRA } from "./en-b1-u12-extra";
import { EN_B1_U13_EXTRA } from "./en-b1-u13-extra";
import { EN_B1_U14_EXTRA } from "./en-b1-u14-extra";
import { EN_B1_U15_EXTRA } from "./en-b1-u15-extra";
import { EN_B1_U16_EXTRA } from "./en-b1-u16-extra";
import { EN_B1_U17_EXTRA } from "./en-b1-u17-extra";
import { EN_B1_U18_EXTRA } from "./en-b1-u18-extra";
import { EN_B1_U19_EXTRA } from "./en-b1-u19-extra";
import { EN_B1_U20_EXTRA } from "./en-b1-u20-extra";
import { EN_B1_U21_EXTRA } from "./en-b1-u21-extra";
import { EN_B1_U22_EXTRA } from "./en-b1-u22-extra";
import { EN_B1_U23_EXTRA } from "./en-b1-u23-extra";
import { EN_B1_U24_EXTRA } from "./en-b1-u24-extra";
import { EN_B1_U25_EXTRA } from "./en-b1-u25-extra";
import { EN_B1_U26_EXTRA } from "./en-b1-u26-extra";
import { EN_B1_U27_EXTRA } from "./en-b1-u27-extra";
import { EN_B1_U28_EXTRA } from "./en-b1-u28-extra";

// English for Spanish speakers (beta), B1. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "Presente perfecto continuo", description: "Hablar de acciones que empezaron en el pasado y siguen ahora, con for, since y how long.", lessons: [...EN_B1_U01, ...EN_B1_U01_EXTRA] },
  { id: "u02", title: "Presente perfecto o pasado simple", description: "Elegir entre have done y did, el gran problema de los hispanohablantes.", lessons: [...EN_B1_U02, ...EN_B1_U02_EXTRA] },
  { id: "u03", title: "Tiempos narrativos y pasado perfecto", description: "Contar historias con past simple, past continuous y past perfect.", lessons: [...EN_B1_U03, ...EN_B1_U03_EXTRA] },
  { id: "u04", title: "Hábitos del pasado y costumbres", description: "Used to, would, be used to y get used to.", lessons: [...EN_B1_U04, ...EN_B1_U04_EXTRA] },
  { id: "u05", title: "El futuro en todas sus formas", description: "Planes, predicciones, citas y el futuro continuo y perfecto.", lessons: [...EN_B1_U05, ...EN_B1_U05_EXTRA] },
  { id: "u06", title: "Oraciones temporales y condiciones reales", description: "When, as soon as, unless e in case con el presente.", lessons: [...EN_B1_U06, ...EN_B1_U06_EXTRA] },
  { id: "u07", title: "Repaso de tiempos verbales", description: "Mezclar todos los tiempos del B1 hasta ahora.", lessons: [...EN_B1_U07, ...EN_B1_U07_EXTRA] },
  { id: "u08", title: "El segundo condicional", description: "Situaciones imaginarias: if I had, I would.", lessons: [...EN_B1_U08, ...EN_B1_U08_EXTRA] },
  { id: "u09", title: "El tercer condicional y los deseos", description: "Hablar de un pasado imaginario y de lo que querríamos cambiar.", lessons: [...EN_B1_U09, ...EN_B1_U09_EXTRA] },
  { id: "u10", title: "Condicionales en la práctica", description: "Todas las condicionales juntas en situaciones reales.", lessons: [...EN_B1_U10, ...EN_B1_U10_EXTRA] },
  { id: "u11", title: "Obligación, prohibición y consejo", description: "Must, have to, don't have to, should, ought to y had better.", lessons: [...EN_B1_U11, ...EN_B1_U11_EXTRA] },
  { id: "u12", title: "Habilidad, posibilidad y deducción", description: "Could, be able to, might y must para deducir.", lessons: [...EN_B1_U12, ...EN_B1_U12_EXTRA] },
  { id: "u13", title: "Los modales en la práctica", description: "Peticiones, permisos y modales en situaciones reales.", lessons: [...EN_B1_U13, ...EN_B1_U13_EXTRA] },
  { id: "u14", title: "La voz pasiva I", description: "Cuando lo importante es la acción y no quién la hace.", lessons: [...EN_B1_U14, ...EN_B1_U14_EXTRA] },
  { id: "u15", title: "La voz pasiva II y causativa", description: "Have something done y estructuras pasivas útiles.", lessons: [...EN_B1_U15, ...EN_B1_U15_EXTRA] },
  { id: "u16", title: "Oraciones de relativo especificativas", description: "Who, which, that, where y whose para definir.", lessons: [...EN_B1_U16, ...EN_B1_U16_EXTRA] },
  { id: "u17", title: "Relativas explicativas y lo que", description: "Non-defining relative clauses, what y which al final de frase.", lessons: [...EN_B1_U17, ...EN_B1_U17_EXTRA] },
  { id: "u18", title: "Repaso: la primera mitad del B1", description: "Repaso en espiral de tiempos, condicionales, modales, pasiva y relativas.", lessons: [...EN_B1_U18, ...EN_B1_U18_EXTRA] },
  { id: "u19", title: "El estilo indirecto: afirmaciones", description: "Contar lo que otros dijeron: said, told y el cambio de tiempos.", lessons: [...EN_B1_U19, ...EN_B1_U19_EXTRA] },
  { id: "u20", title: "Estilo indirecto: preguntas y órdenes", description: "Preguntas indirectas, órdenes y verbos para informar.", lessons: [...EN_B1_U20, ...EN_B1_U20_EXTRA] },
  { id: "u21", title: "Gerundios e infinitivos", description: "Verb patterns: enjoy doing, want to do y preposiciones con -ing.", lessons: [...EN_B1_U21, ...EN_B1_U21_EXTRA] },
  { id: "u22", title: "Patrones verbales en la práctica", description: "Remember, stop, try; make y let; like doing y would like to.", lessons: [...EN_B1_U22, ...EN_B1_U22_EXTRA] },
  { id: "u23", title: "Preguntas avanzadas", description: "Preguntas indirectas, question tags, preguntas de sujeto y so do I.", lessons: [...EN_B1_U23, ...EN_B1_U23_EXTRA] },
  { id: "u24", title: "Cuantificadores e intensificadores", description: "Too, enough, so, such y cuantificadores de B1.", lessons: [...EN_B1_U24, ...EN_B1_U24_EXTRA] },
  { id: "u25", title: "Artículos y sustantivos", description: "The o nada, sustantivos incontables y concordancia.", lessons: [...EN_B1_U25, ...EN_B1_U25_EXTRA] },
  { id: "u26", title: "Phrasal verbs, make, do y get", description: "Los verbos más usados del inglés y sus combinaciones.", lessons: [...EN_B1_U26, ...EN_B1_U26_EXTRA] },
  { id: "u27", title: "Adjetivos, adverbios y comparaciones", description: "-ed o -ing, el orden de los adjetivos y comparaciones avanzadas.", lessons: [...EN_B1_U27, ...EN_B1_U27_EXTRA] },
  { id: "u28", title: "Conectores y escritura", description: "Although, despite, however, so that: conectar ideas al escribir.", lessons: [...EN_B1_U28, ...EN_B1_U28_EXTRA] },
  { id: "u29", title: "Repaso: la segunda mitad del B1", description: "Repaso en espiral del estilo indirecto, patrones verbales, preguntas y sustantivos.", lessons: EN_B1_U29 },
  { id: "u30", title: "Situaciones: llamadas, bancos y pisos", description: "Role plays para resolver la vida diaria en inglés.", lessons: EN_B1_U30 },
  { id: "u31", title: "Situaciones: oficinas, tiendas y trabajo", description: "Trámites, reclamaciones, devoluciones y entrevistas.", lessons: EN_B1_U31 },
  { id: "u32", title: "Redes de palabras I", description: "Vocabulario temático del B1 con práctica mezclada.", lessons: EN_B1_U32 },
  { id: "u33", title: "Redes de palabras II", description: "Más vocabulario temático y el circuito final.", lessons: EN_B1_U33 },
  { id: "u34", title: "Repaso del B1", description: "Repasos completos de todo el nivel.", lessons: EN_B1_U34 },
  { id: "u35", title: "Retos del B1 y examen final", description: "Retos sin pistas y el examen de salida hacia el B2.", lessons: EN_B1_U35 },
];

const LEVEL = buildEnglishLevel("en/b1", UNITS);
export const EN_B1_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_B1_UNITS: UnitOutline[] = LEVEL.units;
