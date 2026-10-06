// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_B2_U01 } from "./en-b2-u01";
import { EN_B2_U02 } from "./en-b2-u02";
import { EN_B2_U03 } from "./en-b2-u03";
import { EN_B2_U04 } from "./en-b2-u04";
import { EN_B2_U05 } from "./en-b2-u05";
import { EN_B2_U06 } from "./en-b2-u06";
import { EN_B2_U07 } from "./en-b2-u07";
import { EN_B2_U08 } from "./en-b2-u08";
import { EN_B2_U09 } from "./en-b2-u09";
import { EN_B2_U10 } from "./en-b2-u10";
import { EN_B2_U11 } from "./en-b2-u11";
import { EN_B2_U12 } from "./en-b2-u12";
import { EN_B2_U13 } from "./en-b2-u13";
import { EN_B2_U14 } from "./en-b2-u14";
import { EN_B2_U15 } from "./en-b2-u15";
import { EN_B2_U16 } from "./en-b2-u16";
import { EN_B2_U17 } from "./en-b2-u17";
import { EN_B2_U18 } from "./en-b2-u18";
import { EN_B2_U19 } from "./en-b2-u19";
import { EN_B2_U20 } from "./en-b2-u20";
import { EN_B2_U21 } from "./en-b2-u21";
import { EN_B2_U22 } from "./en-b2-u22";
import { EN_B2_U23 } from "./en-b2-u23";
import { EN_B2_U24 } from "./en-b2-u24";
import { EN_B2_U25 } from "./en-b2-u25";
import { EN_B2_U26 } from "./en-b2-u26";
import { EN_B2_U27 } from "./en-b2-u27";
import { EN_B2_U28 } from "./en-b2-u28";
import { EN_B2_U29 } from "./en-b2-u29";
import { EN_B2_U30 } from "./en-b2-u30";
import { EN_B2_U01_EXTRA } from "./en-b2-u01-extra";
import { EN_B2_U02_EXTRA } from "./en-b2-u02-extra";
import { EN_B2_U03_EXTRA } from "./en-b2-u03-extra";
import { EN_B2_U04_EXTRA } from "./en-b2-u04-extra";
import { EN_B2_U05_EXTRA } from "./en-b2-u05-extra";
import { EN_B2_U06_EXTRA } from "./en-b2-u06-extra";
import { EN_B2_U07_EXTRA } from "./en-b2-u07-extra";
import { EN_B2_U08_EXTRA } from "./en-b2-u08-extra";
import { EN_B2_U09_EXTRA } from "./en-b2-u09-extra";
import { EN_B2_U10_EXTRA } from "./en-b2-u10-extra";
import { EN_B2_U11_EXTRA } from "./en-b2-u11-extra";
import { EN_B2_U12_EXTRA } from "./en-b2-u12-extra";
import { EN_B2_U13_EXTRA } from "./en-b2-u13-extra";
import { EN_B2_U14_EXTRA } from "./en-b2-u14-extra";
import { EN_B2_U15_EXTRA } from "./en-b2-u15-extra";
import { EN_B2_U16_EXTRA } from "./en-b2-u16-extra";
import { EN_B2_U17_EXTRA } from "./en-b2-u17-extra";
import { EN_B2_U18_EXTRA } from "./en-b2-u18-extra";
import { EN_B2_U19_EXTRA } from "./en-b2-u19-extra";
import { EN_B2_U20_EXTRA } from "./en-b2-u20-extra";
import { EN_B2_U21_EXTRA } from "./en-b2-u21-extra";
import { EN_B2_U22_EXTRA } from "./en-b2-u22-extra";
import { EN_B2_U23_EXTRA } from "./en-b2-u23-extra";
import { EN_B2_U24_EXTRA } from "./en-b2-u24-extra";
import { EN_B2_U25_EXTRA } from "./en-b2-u25-extra";
import { EN_B2_U26_EXTRA } from "./en-b2-u26-extra";
import { EN_B2_U27_EXTRA } from "./en-b2-u27-extra";
import { EN_B2_U28_EXTRA } from "./en-b2-u28-extra";
import { EN_B2_U29_EXTRA } from "./en-b2-u29-extra";

// English for Spanish speakers (beta), B2. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "Tiempos narrativos", description: "Contar historias en pasado: repaso de past simple, continuous y perfect, y el past perfect continuous.", lessons: [...EN_B2_U01, ...EN_B2_U01_EXTRA] },
  { id: "u02", title: "Tiempos narrativos en la práctica", description: "Contar, escuchar y corregir historias en pasado.", lessons: [...EN_B2_U02, ...EN_B2_U02_EXTRA] },
  { id: "u03", title: "Formas de futuro", description: "Will, going to, presente continuo, future continuous y future perfect.", lessons: [...EN_B2_U03, ...EN_B2_U03_EXTRA] },
  { id: "u04", title: "El futuro en la práctica", description: "Planes, predicciones y plazos en situaciones reales.", lessons: [...EN_B2_U04, ...EN_B2_U04_EXTRA] },
  { id: "u05", title: "Condicionales: el tercero y los mixtos", description: "If I had known, I would have come: el pasado imaginario.", lessons: [...EN_B2_U05, ...EN_B2_U05_EXTRA] },
  { id: "u06", title: "Condicionales en la práctica", description: "Situaciones reales, consejos y conversaciones con if.", lessons: [...EN_B2_U06, ...EN_B2_U06_EXTRA] },
  { id: "u07", title: "Deseos y arrepentimientos", description: "I wish, if only, should have: lamentarse y desear en inglés.", lessons: [...EN_B2_U07, ...EN_B2_U07_EXTRA] },
  { id: "u08", title: "Deducción con modales", description: "Must be, can't have been, might have: hacer deducciones sobre el presente y el pasado.", lessons: [...EN_B2_U08, ...EN_B2_U08_EXTRA] },
  { id: "u09", title: "Modales y arrepentimientos en la práctica", description: "Deducir, lamentar y criticar en situaciones reales.", lessons: [...EN_B2_U09, ...EN_B2_U09_EXTRA] },
  { id: "u10", title: "La pasiva avanzada", description: "La pasiva en todos los tiempos, con modales y con get.", lessons: [...EN_B2_U10, ...EN_B2_U10_EXTRA] },
  { id: "u11", title: "Pasiva impersonal y causativa", description: "It is said that…, he is believed to…, have something done.", lessons: [...EN_B2_U11, ...EN_B2_U11_EXTRA] },
  { id: "u12", title: "Verbos introductorios en estilo indirecto", description: "Suggest, deny, accuse, persuade: más allá de say y tell.", lessons: [...EN_B2_U12, ...EN_B2_U12_EXTRA] },
  { id: "u13", title: "Preguntas indirectas y formas de pregunta", description: "Could you tell me where…?, preguntas negativas y question tags.", lessons: [...EN_B2_U13, ...EN_B2_U13_EXTRA] },
  { id: "u14", title: "Oraciones de relativo explicativas", description: "Which, whose, whom y las comas que cambian el sentido.", lessons: [...EN_B2_U14, ...EN_B2_U14_EXTRA] },
  { id: "u15", title: "Pasiva, estilo indirecto y relativos en la práctica", description: "Noticias, informes y descripciones con estructuras del B2.", lessons: [...EN_B2_U15, ...EN_B2_U15_EXTRA] },
  { id: "u16", title: "Gerundios e infinitivos avanzados", description: "Remember doing o remember to do: verbos que cambian de significado.", lessons: [...EN_B2_U16, ...EN_B2_U16_EXTRA] },
  { id: "u17", title: "Conectores de contraste y finalidad", description: "Although, despite, whereas, so that, in order to.", lessons: [...EN_B2_U17, ...EN_B2_U17_EXTRA] },
  { id: "u18", title: "Escribir con conectores", description: "Correos formales, ensayos de opinión y registro.", lessons: [...EN_B2_U18, ...EN_B2_U18_EXTRA] },
  { id: "u19", title: "Patrones verbales y conectores en la práctica", description: "Gerundios, infinitivos y conectores en uso real.", lessons: [...EN_B2_U19, ...EN_B2_U19_EXTRA] },
  { id: "u20", title: "Énfasis y frases escindidas", description: "What I need is…, It was Ana who…, so y such.", lessons: [...EN_B2_U20, ...EN_B2_U20_EXTRA] },
  { id: "u21", title: "Comparar y cuantificar", description: "The more…, the better; far better; both, neither, each, every.", lessons: [...EN_B2_U21, ...EN_B2_U21_EXTRA] },
  { id: "u22", title: "Énfasis y comparaciones en la práctica", description: "Expresarse con fuerza y comparar con precisión.", lessons: [...EN_B2_U22, ...EN_B2_U22_EXTRA] },
  { id: "u23", title: "Repaso mixto: el B2 hasta ahora", description: "Repasos temáticos que mezclan toda la gramática del B2.", lessons: [...EN_B2_U23, ...EN_B2_U23_EXTRA] },
  { id: "u24", title: "Palabras: trabajo, dinero y sociedad", description: "Vocabulario temático del B2 con colocaciones.", lessons: [...EN_B2_U24, ...EN_B2_U24_EXTRA] },
  { id: "u25", title: "Palabras: tecnología, medios y medio ambiente", description: "Vocabulario del B2 sobre tecnología, medios y naturaleza.", lessons: [...EN_B2_U25, ...EN_B2_U25_EXTRA] },
  { id: "u26", title: "Palabras: mente, salud y relaciones", description: "Emociones, personalidad, salud y modismos frecuentes.", lessons: [...EN_B2_U26, ...EN_B2_U26_EXTRA] },
  { id: "u27", title: "Palabras: viajes, ciudad y hogar", description: "Vocabulario temático del B2 para viajar y vivir.", lessons: [...EN_B2_U27, ...EN_B2_U27_EXTRA] },
  { id: "u28", title: "Palabras: phrasal verbs y colocaciones", description: "Los phrasal verbs y colocaciones más útiles del B2.", lessons: [...EN_B2_U28, ...EN_B2_U28_EXTRA] },
  { id: "u29", title: "Repaso del B2", description: "Repasos completos de todo el nivel.", lessons: [...EN_B2_U29, ...EN_B2_U29_EXTRA] },
  { id: "u30", title: "Retos B2 y examen final", description: "Retos sin pistas y el examen de salida hacia el C1.", lessons: EN_B2_U30 },
];

const LEVEL = buildEnglishLevel("en/b2", UNITS);
export const EN_B2_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_B2_UNITS: UnitOutline[] = LEVEL.units;
