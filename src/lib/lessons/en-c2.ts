// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_C2_U01 } from "./en-c2-u01";
import { EN_C2_U02 } from "./en-c2-u02";
import { EN_C2_U03 } from "./en-c2-u03";
import { EN_C2_U04 } from "./en-c2-u04";
import { EN_C2_U05 } from "./en-c2-u05";
import { EN_C2_U06 } from "./en-c2-u06";
import { EN_C2_U07 } from "./en-c2-u07";
import { EN_C2_U08 } from "./en-c2-u08";
import { EN_C2_U09 } from "./en-c2-u09";
import { EN_C2_U10 } from "./en-c2-u10";
import { EN_C2_U11 } from "./en-c2-u11";
import { EN_C2_U12 } from "./en-c2-u12";
import { EN_C2_U13 } from "./en-c2-u13";
import { EN_C2_U14 } from "./en-c2-u14";
import { EN_C2_U15 } from "./en-c2-u15";
import { EN_C2_U16 } from "./en-c2-u16";
import { EN_C2_U17 } from "./en-c2-u17";
import { EN_C2_U18 } from "./en-c2-u18";
import { EN_C2_U19 } from "./en-c2-u19";
import { EN_C2_U20 } from "./en-c2-u20";
import { EN_C2_U21 } from "./en-c2-u21";
import { EN_C2_U22 } from "./en-c2-u22";
import { EN_C2_U23 } from "./en-c2-u23";
import { EN_C2_U24 } from "./en-c2-u24";
import { EN_C2_U25 } from "./en-c2-u25";
import { EN_C2_U26 } from "./en-c2-u26";
import { EN_C2_U27 } from "./en-c2-u27";
import { EN_C2_U28 } from "./en-c2-u28";
import { EN_C2_U29 } from "./en-c2-u29";
import { EN_C2_U30 } from "./en-c2-u30";
import { EN_C2_U31 } from "./en-c2-u31";
import { EN_C2_U32 } from "./en-c2-u32";
import { EN_C2_U33 } from "./en-c2-u33";
import { EN_C2_U01_EXTRA } from "./en-c2-u01-extra";
import { EN_C2_U02_EXTRA } from "./en-c2-u02-extra";
import { EN_C2_U03_EXTRA } from "./en-c2-u03-extra";
import { EN_C2_U04_EXTRA } from "./en-c2-u04-extra";
import { EN_C2_U05_EXTRA } from "./en-c2-u05-extra";
import { EN_C2_U06_EXTRA } from "./en-c2-u06-extra";
import { EN_C2_U07_EXTRA } from "./en-c2-u07-extra";
import { EN_C2_U08_EXTRA } from "./en-c2-u08-extra";
import { EN_C2_U09_EXTRA } from "./en-c2-u09-extra";
import { EN_C2_U10_EXTRA } from "./en-c2-u10-extra";
import { EN_C2_U11_EXTRA } from "./en-c2-u11-extra";
import { EN_C2_U12_EXTRA } from "./en-c2-u12-extra";
import { EN_C2_U13_EXTRA } from "./en-c2-u13-extra";
import { EN_C2_U14_EXTRA } from "./en-c2-u14-extra";
import { EN_C2_U15_EXTRA } from "./en-c2-u15-extra";
import { EN_C2_U16_EXTRA } from "./en-c2-u16-extra";
import { EN_C2_U17_EXTRA } from "./en-c2-u17-extra";
import { EN_C2_U18_EXTRA } from "./en-c2-u18-extra";
import { EN_C2_U19_EXTRA } from "./en-c2-u19-extra";
import { EN_C2_U20_EXTRA } from "./en-c2-u20-extra";
import { EN_C2_U21_EXTRA } from "./en-c2-u21-extra";
import { EN_C2_U23_EXTRA } from "./en-c2-u23-extra";
import { EN_C2_U24_EXTRA } from "./en-c2-u24-extra";
import { EN_C2_U25_EXTRA } from "./en-c2-u25-extra";
import { EN_C2_U26_EXTRA } from "./en-c2-u26-extra";
import { EN_C2_U28_EXTRA } from "./en-c2-u28-extra";
import { EN_C2_U29_EXTRA } from "./en-c2-u29-extra";
import { EN_C2_U31_EXTRA } from "./en-c2-u31-extra";
import { EN_C2_U32_EXTRA } from "./en-c2-u32-extra";

// English for Spanish speakers (beta), C2. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "Inglés jurídico y administrativo", description: "El lenguaje legal en claro, los latinismos y quién es quién en un caso judicial.", lessons: [...EN_C2_U01, ...EN_C2_U01_EXTRA] },
  { id: "u02", title: "Contratos y avisos oficiales", description: "Cláusulas, responsabilidades, notificaciones y el papel del notario.", lessons: [...EN_C2_U02, ...EN_C2_U02_EXTRA] },
  { id: "u03", title: "Inglés médico", description: "Síntomas, informes clínicos, posología y consentimiento informado.", lessons: [...EN_C2_U03, ...EN_C2_U03_EXTRA] },
  { id: "u04", title: "Modismos", description: "Modismos con sus restricciones, variantes regionales y calcos frecuentes.", lessons: [...EN_C2_U04, ...EN_C2_U04_EXTRA] },
  { id: "u05", title: "Refranes y dichos", description: "Completar, contrastar y citar refranes, antiguos y regionales.", lessons: [...EN_C2_U05, ...EN_C2_U05_EXTRA] },
  { id: "u06", title: "Humor y juegos de palabras", description: "Dobles sentidos, ironía y el humor de cada país angloparlante.", lessons: [...EN_C2_U06, ...EN_C2_U06_EXTRA] },
  { id: "u07", title: "Metáfora y lenguaje figurado", description: "Metáfora, metonimia, figuras literarias y el lenguaje figurado de cada día.", lessons: [...EN_C2_U07, ...EN_C2_U07_EXTRA] },
  { id: "u08", title: "Eufemismos y lenguaje indirecto", description: "Decir lo delicado y entender lo que se insinúa sin decirlo.", lessons: [...EN_C2_U08, ...EN_C2_U08_EXTRA] },
  { id: "u09", title: "Exclamaciones, énfasis y formación de palabras", description: "Reaccionar como un nativo y lo que añaden los afijos del inglés.", lessons: [...EN_C2_U09, ...EN_C2_U09_EXTRA] },
  { id: "u10", title: "Modismos del mundo empresarial", description: "Modismos para reuniones, crisis e informes.", lessons: [...EN_C2_U10, ...EN_C2_U10_EXTRA] },
  { id: "u11", title: "Estrategias de comprensión auditiva y lectora", description: "Adivinar palabras desconocidas, cambios de registro y el habla rápida.", lessons: [...EN_C2_U11, ...EN_C2_U11_EXTRA] },
  { id: "u12", title: "Lectura rápida, búsqueda y toma de notas", description: "Entrevistas de radio, modos de lectura y apuntes de conferencias.", lessons: [...EN_C2_U12, ...EN_C2_U12_EXTRA] },
  { id: "u13", title: "Debate y persuasión", description: "Conceder, refutar, conectores cultos y falacias.", lessons: [...EN_C2_U13, ...EN_C2_U13_EXTRA] },
  { id: "u14", title: "Retórica y alegatos finales", description: "Recursos retóricos, conclusiones contundentes y el vocabulario del debate.", lessons: [...EN_C2_U14, ...EN_C2_U14_EXTRA] },
  { id: "u15", title: "Presentaciones y negociación", description: "Aperturas, transiciones y contraofertas.", lessons: [...EN_C2_U15, ...EN_C2_U15_EXTRA] },
  { id: "u16", title: "Cerrar el trato", description: "Lenguaje corporal, turnos de preguntas y acuerdos por escrito.", lessons: [...EN_C2_U16, ...EN_C2_U16_EXTRA] },
  { id: "u17", title: "Citas y referencias", description: "Citar, los verbos de atribución y el aparato crítico.", lessons: [...EN_C2_U17, ...EN_C2_U17_EXTRA] },
  { id: "u18", title: "Paráfrasis y revisión bibliográfica", description: "Parafrasear sin plagiar y escribir el estado de la cuestión.", lessons: [...EN_C2_U18, ...EN_C2_U18_EXTRA] },
  { id: "u19", title: "Preguntas retóricas y estructuras de énfasis", description: "Preguntas reales o retóricas, la hipófora y cómo poner énfasis.", lessons: [...EN_C2_U19, ...EN_C2_U19_EXTRA] },
  { id: "u20", title: "Preguntas retóricas en discursos", description: "Responder a preguntas retóricas y preparar un discurso de un minuto.", lessons: [...EN_C2_U20, ...EN_C2_U20_EXTRA] },
  { id: "u21", title: "Entrevistas de trabajo", description: "Fortalezas, debilidades y el método STAR.", lessons: [...EN_C2_U21, ...EN_C2_U21_EXTRA] },
  { id: "u22", title: "Entrevistas: el simulacro completo", description: "Errores típicos, vocabulario del CV y una entrevista completa.", lessons: EN_C2_U22 },
  { id: "u23", title: "Resolución de conflictos y mediación", description: "Desescalar, reconocer sin ceder y pedir disculpas de verdad.", lessons: [...EN_C2_U23, ...EN_C2_U23_EXTRA] },
  { id: "u24", title: "Narrativa histórica", description: "Los tiempos verbales del relato histórico y el estilo indirecto libre.", lessons: [...EN_C2_U24, ...EN_C2_U24_EXTRA] },
  { id: "u25", title: "Escribir la historia", description: "Conectores del relato, la voz del historiador, registro culto y periodización.", lessons: [...EN_C2_U25, ...EN_C2_U25_EXTRA] },
  { id: "u26", title: "Ciencia y tecnología", description: "El lenguaje de las hipótesis, la innovación y la divulgación científica.", lessons: [...EN_C2_U26, ...EN_C2_U26_EXTRA] },
  { id: "u27", title: "Medio ambiente y política", description: "Vocabulario climático y el lenguaje polarizado y deliberativo.", lessons: EN_C2_U27 },
  { id: "u28", title: "Filosofía e ideas abstractas", description: "El libre albedrío, los sustantivos abstractos y el análisis de argumentos.", lessons: [...EN_C2_U28, ...EN_C2_U28_EXTRA] },
  { id: "u29", title: "Psicología y emociones complejas", description: "Ambivalencia, sentimientos matizados y cómo nombrar las emociones.", lessons: [...EN_C2_U29, ...EN_C2_U29_EXTRA] },
  { id: "u30", title: "Crítica de arte, cine y literatura", description: "Trama, personajes, lenguaje cinematográfico y adjetivos valorativos.", lessons: EN_C2_U30 },
  { id: "u31", title: "Negocios y economía", description: "Causa y efecto, estados financieros, inflación y fusiones.", lessons: [...EN_C2_U31, ...EN_C2_U31_EXTRA] },
  { id: "u32", title: "Escritura creativa", description: "Anticipación, imágenes sensoriales y un microrrelato de 100 palabras.", lessons: [...EN_C2_U32, ...EN_C2_U32_EXTRA] },
  { id: "u33", title: "Repaso de nivel Maestría y examen final", description: "Repasos generales, retos de nivel Maestría y el examen de dominio.", lessons: EN_C2_U33 },
];

const LEVEL = buildEnglishLevel("en/c2", UNITS);
export const EN_C2_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_C2_UNITS: UnitOutline[] = LEVEL.units;
