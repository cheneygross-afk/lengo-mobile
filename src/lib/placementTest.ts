// Synced from cheneygross-afk/lengo:src/lib/placementTest.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { MultipleChoiceExercise } from "./lessons/types";

export type PlacementLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type PlacementQuestion = MultipleChoiceExercise & {
  level: PlacementLevel;
  // Slug of the lesson (within this question's level) that teaches/drills
  // the concept being tested -- lets the results screen link a missed
  // question straight to the lesson that covers it, so a learner who
  // passes a level can still revisit and master the specific things they
  // got wrong instead of that gap just disappearing into a passing score.
  relatedLessonSlug: string;
};

// 35 questions, 6 per level (5 for C2), covering grammar and vocabulary
// actually taught in the curriculum at each level -- see src/lib/lessons/
// {a1,a2,b1,b2,c1,c2}.ts for the source material each question is drawn
// from. A1/A2 questions are in English (matching those levels' own
// exercises); B1 and up are in Spanish (same convention as b1.ts onward).
export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // ---------------------------------------------------------------- A1 --
  {
    level: "A1",
    type: "multiple-choice",
    question: "How do you say \"I am a teacher\" (as a permanent trait/profession)?",
    options: ["Estoy profesor.", "Soy profesor.", "Tengo profesor.", "Hay profesor."],
    correctIndex: 1,
    explanation: "Profession is a defining characteristic, so it takes ser: \"Soy profesor.\"",
    relatedLessonSlug: "ser-vs-estar-drill-1",
  },
  {
    level: "A1",
    type: "multiple-choice",
    question: "Which article is correct for \"problema\" (problem)?",
    options: ["la problema", "el problema", "las problema", "los problema"],
    correctIndex: 1,
    explanation: "\"Problema\" ends in -a but is masculine (it comes from Greek) -- \"el problema\", not \"la problema\".",
    relatedLessonSlug: "adjectives-gender-number-drill-1",
  },
  {
    level: "A1",
    type: "multiple-choice",
    question: "La sopa ___ muy caliente ahora mismo.",
    options: ["es", "está", "son", "están"],
    correctIndex: 1,
    explanation: "A temporary, changeable condition (how hot the soup is right now) takes estar: \"está caliente\".",
    relatedLessonSlug: "ser-vs-estar-drill-1",
  },
  {
    level: "A1",
    type: "multiple-choice",
    question: "Nosotros ___ (hablar) español en casa.",
    options: ["hablo", "hablas", "hablamos", "hablan"],
    correctIndex: 2,
    explanation: "Regular -ar verbs take -amos for nosotros: hablar → hablamos.",
    relatedLessonSlug: "present-tense-verbs-drill-1",
  },
  {
    level: "A1",
    type: "multiple-choice",
    question: "Este es el carro de Ana. Es ___ carro.",
    options: ["mi", "tu", "su", "nuestro"],
    correctIndex: 2,
    explanation: "\"Su\" is the possessive for a third person (Ana's car).",
    relatedLessonSlug: "possessives-prepositions-drill-1",
  },
  {
    level: "A1",
    type: "multiple-choice",
    question: "___ tres libros en la mesa.",
    options: ["Es", "Está", "Hay", "Son"],
    correctIndex: 2,
    explanation: "\"Hay\" (from haber) is the invariable form for \"there is/are\", used for both singular and plural.",
    relatedLessonSlug: "tener-ir-hacer-hay-drill-1",
  },

  // ---------------------------------------------------------------- A2 --
  {
    level: "A2",
    type: "multiple-choice",
    question: "Cuando yo ___ niño, ___ en Madrid.",
    options: ["era / vivía", "fui / viví", "era / viví", "fui / vivía"],
    correctIndex: 0,
    explanation: "An ongoing past state (being a child, living somewhere) uses the imperfect: \"era\" and \"vivía\", not the preterite.",
    relatedLessonSlug: "preterite-vs-imperfect-drill-1",
  },
  {
    level: "A2",
    type: "multiple-choice",
    question: "Ayer yo ___ (comer) tacos con mis amigos.",
    options: ["como", "comía", "comí", "he comido"],
    correctIndex: 2,
    explanation: "\"Ayer\" (yesterday) signals a completed, one-time past action -- the preterite: \"comí\".",
    relatedLessonSlug: "preterite-drill-1",
  },
  {
    level: "A2",
    type: "multiple-choice",
    question: "¿Tienes las llaves? Sí, ___ tengo aquí.",
    options: ["lo", "la", "los", "las"],
    correctIndex: 3,
    explanation: "\"Las llaves\" is feminine plural, so the direct object pronoun replacing it is \"las\".",
    relatedLessonSlug: "object-pronouns-drill-1",
  },
  {
    level: "A2",
    type: "multiple-choice",
    question: "Mi hermano es ___ alto ___ yo -- tenemos casi la misma estatura.",
    options: ["más / que", "menos / que", "tan / como", "tanto / como"],
    correctIndex: 2,
    explanation: "Equal comparison (\"as tall as\") uses tan + adjective + como.",
    relatedLessonSlug: "comparisons-superlatives-drill-1",
  },
  {
    level: "A2",
    type: "multiple-choice",
    question: "Mañana nosotros ___ (viajar) a Perú.",
    options: ["viajamos", "viajábamos", "viajaremos", "viajaríamos"],
    correctIndex: 2,
    explanation: "\"Mañana\" (tomorrow) plus a plan calls for the future tense: viajar → viajaremos.",
    relatedLessonSlug: "future-tense-drill-1",
  },
  {
    level: "A2",
    type: "multiple-choice",
    question: "Este regalo es ___ ti -- espero que te guste.",
    options: ["por", "para", "de", "con"],
    correctIndex: 1,
    explanation: "\"Para\" marks the recipient of something (who it's intended for): \"para ti\".",
    relatedLessonSlug: "por-vs-para-drill-1",
  },

  // ---------------------------------------------------------------- B1 --
  {
    level: "B1",
    type: "multiple-choice",
    question: "Espero que tú ___ (poder) venir a la fiesta.",
    options: ["puedes", "puedas", "podrás", "podías"],
    correctIndex: 1,
    explanation: "\"Espero que\" (a wish) triggers the subjunctive: poder → puedas.",
    relatedLessonSlug: "subjunctive-wishes-doubt-emotion-drill-1",
  },
  {
    level: "B1",
    type: "multiple-choice",
    question: "___ (Cerrar, tú) la puerta, por favor.",
    options: ["Cierra", "Cierras", "Cierres", "Cerrar"],
    correctIndex: 0,
    explanation: "An affirmative tú command uses the él/ella present-tense form for -ar/-er/-ir stem-changers like cerrar: \"Cierra\".",
    relatedLessonSlug: "commands-drill-1",
  },
  {
    level: "B1",
    type: "multiple-choice",
    question: "Si tuviera más tiempo, yo ___ (viajar) más.",
    options: ["viajo", "viajaré", "viajaría", "viaje"],
    correctIndex: 2,
    explanation: "\"Si\" + imperfect subjunctive (tuviera) pairs with the conditional in the main clause: \"viajaría\".",
    relatedLessonSlug: "si-clauses-drill-1",
  },
  {
    level: "B1",
    type: "multiple-choice",
    question: "Si ___ (llover), no salimos.",
    options: ["llueve", "llovió", "llueva", "llovería"],
    correctIndex: 0,
    explanation: "A simple, likely condition (\"si\" + present indicative) states a real possibility: \"si llueve\".",
    relatedLessonSlug: "si-clauses-drill-1",
  },
  {
    level: "B1",
    type: "multiple-choice",
    question: "Todavía no ___ (terminar) mi tarea.",
    options: ["terminé", "terminaba", "he terminado", "termino"],
    correctIndex: 2,
    explanation: "\"Todavía no\" + a past action with present relevance calls for the present perfect: \"he terminado\".",
    relatedLessonSlug: "present-past-perfect-drill-1",
  },
  {
    level: "B1",
    type: "multiple-choice",
    question: "La chica ___ conocí ayer es mi vecina.",
    options: ["que", "quien", "cuyo", "el que"],
    correctIndex: 0,
    explanation: "\"Que\" is the standard relative pronoun for both people and things in a simple restrictive clause like this one.",
    relatedLessonSlug: "relative-pronouns-drill-1",
  },

  // ---------------------------------------------------------------- B2 --
  {
    level: "B2",
    type: "multiple-choice",
    question: "Busco un apartamento que ___ (tener) dos habitaciones.",
    options: ["tiene", "tenga", "tendrá", "tuviera"],
    correctIndex: 1,
    explanation: "The apartment is nonspecific/hypothetical (any apartment that fits, not one particular one already known) -- adjective clauses with an uncertain antecedent take the subjunctive: \"tenga\".",
    relatedLessonSlug: "subjunctive-adjective-clauses-drill-1",
  },
  {
    level: "B2",
    type: "multiple-choice",
    question: "Te llamaré cuando ___ (llegar) a casa.",
    options: ["llego", "llegué", "llegue", "llegaba"],
    correctIndex: 2,
    explanation: "\"Cuando\" pointing to a future, not-yet-happened event takes the subjunctive: \"llegue\".",
    relatedLessonSlug: "subjunctive-adverbial-clauses-drill-1",
  },
  {
    level: "B2",
    type: "multiple-choice",
    question: "Si yo ___ (saber) la verdad, te lo habría dicho.",
    options: ["sabía", "supe", "hubiera sabido", "sabría"],
    correctIndex: 2,
    explanation: "A hypothetical about the past (contrary to fact) uses \"si\" + pluperfect subjunctive: \"hubiera sabido\".",
    relatedLessonSlug: "hypothetical-si-clauses-drill-1",
  },
  {
    level: "B2",
    type: "multiple-choice",
    question: "Ella dijo que ___ (venir) al día siguiente.",
    options: ["viene", "vendrá", "vendría", "viniera"],
    correctIndex: 2,
    explanation: "Reported speech shifts a future (\"vendrá\") into the conditional when the reporting verb is in the past: \"dijo que vendría\".",
    relatedLessonSlug: "reported-speech-drill-1",
  },
  {
    level: "B2",
    type: "multiple-choice",
    question: "Después de años de esfuerzo, se ___ médico.",
    options: ["hizo", "puso", "volvió", "quedó"],
    correctIndex: 0,
    explanation: "\"Hacerse\" fits a change reached through effort or deliberate work -- exactly the case for a hard-earned profession. \"Volverse\" is tempting because it also translates as \"become,\" but it's reserved for involuntary, often sudden changes in personality or mental state (\"se volvió loco\"), not professions someone worked toward -- so \"se volvió médico\" sounds off to a native speaker.",
    relatedLessonSlug: "verbs-of-change-drill-1",
  },
  {
    level: "B2",
    type: "multiple-choice",
    question: "___ el tráfico, llegamos a tiempo.",
    options: ["Por eso", "Sin embargo", "A pesar de", "Además de"],
    correctIndex: 2,
    explanation: "\"A pesar de\" (despite) introduces a concession -- the traffic existed, but it didn't stop them from arriving on time.",
    relatedLessonSlug: "advanced-connectors-emphasis-drill-1",
  },

  // ---------------------------------------------------------------- C1 --
  {
    level: "C1",
    type: "multiple-choice",
    question: "___ de que llegaras tarde me sorprendió bastante.",
    options: ["La cosa", "El hecho", "El asunto", "La razón"],
    correctIndex: 1,
    explanation: "\"El hecho de que\" is the standard nominalized structure for turning a clause into the subject of a sentence.",
    relatedLessonSlug: "nominalization-drill-1",
  },
  {
    level: "C1",
    type: "multiple-choice",
    question: "___ es malo para la salud, según todos los estudios recientes.",
    options: ["Fumando", "Fumar", "Fuma", "Fumado"],
    correctIndex: 1,
    explanation: "Spanish uses the infinitive, not the gerund, as the subject of a sentence: \"Fumar es malo\", never \"Fumando es malo\".",
    relatedLessonSlug: "gerundio-vs-infinitivo-drill-1",
  },
  {
    level: "C1",
    type: "multiple-choice",
    question: "___ mucho español en esta oficina -- casi todos los empleados lo hablan.",
    options: ["Se habla", "Se hablan", "Hablase", "Es hablado"],
    correctIndex: 0,
    explanation: "The impersonal se stays singular here (\"se habla\") since \"español\" is the direct object, not the grammatical subject.",
    relatedLessonSlug: "passive-voice-impersonal-se-drill-1",
  },
  {
    level: "C1",
    type: "multiple-choice",
    question: "¿De dónde ___ vos, che?",
    options: ["eres", "sos", "es", "sois"],
    correctIndex: 1,
    explanation: "The voseo present-tense form of ser is \"sos\", not the tú form \"eres\".",
    relatedLessonSlug: "el-voseo-drill-1",
  },
  {
    level: "C1",
    type: "multiple-choice",
    question: "¿Cuál es el saludo más apropiado para abrir una carta formal a un desconocido?",
    options: ["¡Hola! ¿Qué tal?", "Estimado señor Pérez:", "Querido Pedro,", "Buenas,"],
    correctIndex: 1,
    explanation: "\"Estimado/a + apellido\" followed by a colon is the standard register for formal correspondence with someone you don't know personally.",
    relatedLessonSlug: "formal-correspondence-1",
  },
  {
    level: "C1",
    type: "multiple-choice",
    question: "Trabajó ___ dos años en esa empresa antes de renunciar.",
    options: ["para", "por", "desde", "hasta"],
    correctIndex: 1,
    explanation: "\"Por\" expresses a duration of time (\"por dos años\"); \"para\" would instead mark a deadline or purpose, which doesn't fit here.",
    relatedLessonSlug: "por-para-precision-1",
  },

  // ---------------------------------------------------------------- C2 --
  {
    level: "C2",
    type: "multiple-choice",
    question: "\"Tirar la toalla\" significa...",
    options: ["Celebrar una victoria", "Darse por vencido", "Limpiar algo con cuidado", "Empezar de nuevo"],
    correctIndex: 1,
    explanation: "\"Tirar la toalla\" (throw in the towel) es rendirse o abandonar un esfuerzo, igual que en inglés.",
    relatedLessonSlug: "modismos-expresiones-idiomaticas-drill-1",
  },
  {
    level: "C2",
    type: "multiple-choice",
    question: "En un documento legal, \"el compareciente\" es...",
    options: ["El abogado que redacta el contrato", "La persona que se presenta ante la autoridad", "El juez que dicta la sentencia", "El testigo que no pudo asistir"],
    correctIndex: 1,
    explanation: "\"Compareciente\" designa a quien comparece, es decir, se presenta formalmente ante una autoridad o en un documento.",
    relatedLessonSlug: "espanol-juridico-administrativo-drill-1",
  },
  {
    level: "C2",
    type: "multiple-choice",
    question: "Antes de un análisis de sangre, el médico te pide que vengas \"en ayunas\". Esto significa que...",
    options: ["Debes hacer ejercicio antes", "No debes haber comido ni bebido nada", "Debes tomar solo agua", "Debes llegar temprano"],
    correctIndex: 1,
    explanation: "\"Estar en ayunas\" es no haber comido ni bebido (salvo agua, según el caso) durante un periodo antes de la prueba.",
    relatedLessonSlug: "espanol-medico-drill-1",
  },
  {
    level: "C2",
    type: "multiple-choice",
    question: "\"Se le hizo un nudo en la garganta\" expresa que alguien...",
    options: ["Tenía mucha sed", "Estaba a punto de llorar por la emoción", "Se rió sin poder parar", "Tenía dolor de garganta"],
    correctIndex: 1,
    explanation: "Esta expresión figurada describe la sensación física de emoción contenida, típicamente antes de llorar.",
    relatedLessonSlug: "metaforas-eufemismos-lenguaje-figurado-drill-1",
  },
  {
    level: "C2",
    type: "multiple-choice",
    question: "En una negociación formal, decir \"¿Podríamos explorar otras opciones?\" es una manera de...",
    options: ["Rechazar la propuesta de forma tajante", "Proponer una alternativa de manera cortés", "Terminar la reunión", "Pedir más tiempo para decidir"],
    correctIndex: 1,
    explanation: "Es una fórmula indirecta y cortés, típica del registro profesional, para sugerir una alternativa sin rechazar directamente lo ya propuesto.",
    relatedLessonSlug: "registro-argumentacion-debate-negociacion-drill-1",
  },
];

export type PlacementLevelResult = {
  level: PlacementLevel;
  correct: number;
  total: number;
  percent: number;
  passed: boolean;
};

export type PlacementScore = {
  results: PlacementLevelResult[];
  recommendedLevel: PlacementLevel;
  // True only when every level (including C2) passed -- there's no level
  // left to recommend, so the UI points to the conversation feature
  // instead of a lesson level.
  masteredEverything: boolean;
};

const LEVEL_ORDER: PlacementLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

// A level "passes" at 60%+ correct. Recommendation logic: walk the levels
// in order and recommend the FIRST one that doesn't pass -- that's where
// gaps start showing up, and since the curriculum builds cumulatively,
// starting there (not at the highest level barely passed) is what
// actually fills the gaps instead of leaving holes underneath. If every
// level passes, there's nothing left to place them into.
const PASS_THRESHOLD = 0.6;

export function scorePlacementTest(correctByIndex: boolean[]): PlacementScore {
  const results: PlacementLevelResult[] = LEVEL_ORDER.map((level) => {
    const indexes: number[] = [];
    PLACEMENT_QUESTIONS.forEach((q, i) => {
      if (q.level === level) indexes.push(i);
    });
    const correct = indexes.filter((i) => correctByIndex[i]).length;
    const total = indexes.length;
    const percent = total > 0 ? correct / total : 0;
    return { level, correct, total, percent, passed: percent >= PASS_THRESHOLD };
  });

  const firstFail = results.find((r) => !r.passed);
  return {
    results,
    recommendedLevel: firstFail ? firstFail.level : "C2",
    masteredEverything: !firstFail,
  };
}

export type MissedQuestion = {
  question: PlacementQuestion;
  index: number;
};

// Every question the learner got wrong, regardless of whether its level
// ultimately passed -- a passing score (e.g. 5/6) still means one gap.
// This is what "revisit and master" is built on: the level breakdown
// tells you where you stand, this tells you exactly what to go practice.
export function getMissedQuestions(correctByIndex: boolean[]): MissedQuestion[] {
  return PLACEMENT_QUESTIONS.map((question, index) => ({ question, index })).filter(
    ({ index }) => !correctByIndex[index]
  );
}
