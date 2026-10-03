// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_C1_U01 } from "./en-c1-u01";
import { EN_C1_U02 } from "./en-c1-u02";
import { EN_C1_U03 } from "./en-c1-u03";
import { EN_C1_U04 } from "./en-c1-u04";
import { EN_C1_U05 } from "./en-c1-u05";
import { EN_C1_U06 } from "./en-c1-u06";
import { EN_C1_U07 } from "./en-c1-u07";
import { EN_C1_U08 } from "./en-c1-u08";
import { EN_C1_U09 } from "./en-c1-u09";
import { EN_C1_U10 } from "./en-c1-u10";
import { EN_C1_U11 } from "./en-c1-u11";
import { EN_C1_U12 } from "./en-c1-u12";
import { EN_C1_U13 } from "./en-c1-u13";
import { EN_C1_U14 } from "./en-c1-u14";
import { EN_C1_U15 } from "./en-c1-u15";
import { EN_C1_U16 } from "./en-c1-u16";
import { EN_C1_U17 } from "./en-c1-u17";
import { EN_C1_U18 } from "./en-c1-u18";

// English for Spanish speakers (beta), C1. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "Inversión", description: "Inversión negativa, condicional y enfática para un inglés formal y retórico.", lessons: EN_C1_U01 },
  { id: "u02", title: "Oraciones escindidas y énfasis", description: "Cómo destacar información con cleft sentences, fronting y estructuras enfáticas.", lessons: EN_C1_U02 },
  { id: "u03", title: "Nominalización", description: "Convertir verbos y adjetivos en sustantivos para un estilo formal y compacto.", lessons: EN_C1_U03 },
  { id: "u04", title: "Elipsis, sustitución y cohesión", description: "Evitar repeticiones con so, do so, one y la elipsis, y enlazar el texto con referencias.", lessons: EN_C1_U04 },
  { id: "u05", title: "Matizar y expresar probabilidad", description: "Hedging, distanciamiento y grados de certeza en el habla y la escritura.", lessons: EN_C1_U05 },
  { id: "u06", title: "Marcadores del discurso", description: "Conectores orales y escritos para organizar, matizar y cohesionar el discurso.", lessons: EN_C1_U06 },
  { id: "u07", title: "Cláusulas de participio y relativas avanzadas", description: "Participios, construcciones absolutas y relativas formales para frases complejas.", lessons: EN_C1_U07 },
  { id: "u08", title: "Irrealidad y subjuntivo en inglés", description: "Pasado irreal más allá de los condicionales y el subjuntivo inglés.", lessons: EN_C1_U08 },
  { id: "u09", title: "Colocaciones", description: "Combinaciones naturales de palabras: verbo + sustantivo, adjetivo + sustantivo y preposiciones.", lessons: EN_C1_U09 },
  { id: "u10", title: "Modismos y lenguaje figurado", description: "Expresiones idiomáticas, binomios, comparaciones y metáforas del inglés cotidiano.", lessons: EN_C1_U10 },
  { id: "u11", title: "Formación de palabras y falsos amigos", description: "Prefijos, sufijos, compuestos y falsos amigos de nivel avanzado.", lessons: EN_C1_U11 },
  { id: "u12", title: "Registro formal e informal", description: "Adaptar el tono: formalidad, cortesía e indirección en inglés.", lessons: EN_C1_U12 },
  { id: "u13", title: "Correos y cartas formales", description: "Escribir correos, quejas, solicitudes y cartas de presentación en inglés profesional.", lessons: EN_C1_U13 },
  { id: "u14", title: "Informes, propuestas y ensayos", description: "Estructura, lenguaje y estilo para ensayos, informes, propuestas y reseñas.", lessons: EN_C1_U14 },
  { id: "u15", title: "Inglés profesional", description: "Reuniones, presentaciones, negociaciones y feedback en el trabajo.", lessons: EN_C1_U15 },
  { id: "u16", title: "Variedades del inglés", description: "Inglés británico, americano y otras variedades del mundo.", lessons: EN_C1_U16 },
  { id: "u17", title: "Repaso del nivel C1", description: "Repaso acumulativo de todos los contenidos del nivel C1.", lessons: EN_C1_U17 },
  { id: "u18", title: "Retos y examen final C1", description: "Todas las estructuras C1 sin ayudas y el examen final del nivel.", lessons: EN_C1_U18 },
];

const LEVEL = buildEnglishLevel("en/c1", UNITS);
export const EN_C1_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_C1_UNITS: UnitOutline[] = LEVEL.units;
