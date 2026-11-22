// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit1.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C1 Unit 1 (when, before, until + wish form; who and which after
// a, con, en; have done, wish form): content fixes from Claude's audit in
// Ricardo's format (Claude Feedback/Spanish (new course)/C1 Advanced/Unit 01).
// Only content changes here: what is taught, asked and accepted. The answer
// checker and the rubric are untouched.
// 
// Lessons built on later grammar moved (es-redesign-units.json): the que venga /
// que haya venido contrast (both parts, built on the imperfect and pluperfect
// subjunctive) to C1 Unit 4, the imperfect-subjunctive dictation to C1 Unit 2,
// the el hecho de que lesson to C2 Unit 4, and the cleft-sentence error hunt and
// register review to C2 Units 1 and 6, next to their first parts. The aunque
// card leaves the adverbial-clauses lesson (aunque + subjunctive is C1 Unit 5).
// Each lesson says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { CUYO, RELATIVES_PREP, SUBJ_TIME } from "./concept-tables";
import { C1_UNIT1_LATAM, C1_UNIT1_SWAP } from "./c1-unit1-latam";

const manual: Record<string, LessonPatch> = {
 "b1d-pares-si-cuando": {
  "goal": "tell si (maybe) from cuando (whenever, or once it happens): si llueve, me quedo en casa / cuando llueve, me quedo en casa."
 },
 "b2d-pares-cuando-llego-llegue": {
  "goal": "tell the three cuando apart: cuando llego (a habit), cuando llegué (the past), cuando llegue (the future)."
 },
 "b2d-circuito-conjunciones-temporales": {
  "goal": "use en cuanto, tan pronto como, hasta que and después de que like cuando: normal form for habits and the past, wish form for the future."
 },
 "b2d-cadena-unir-oraciones": {
  "goal": "join two sentences into one with cuando, para que or antes de que, and pick the right verb form."
 },
 "b2d-ronda-antes-de-que": {
  "goal": "use antes de que + subjunctive every time, and antes de + infinitive when the subject stays the same."
 },
 "b2d-elige-para-que-para": {
  "goal": "choose para + infinitive (same subject) or para que + subjunctive (a new subject): ahorro para viajar / ahorro para que viajes."
 },
 "b2d-circuito-el-cual-preposiciones-part-2": {
  "goal": "use el cual, la cual, los cuales after long prepositions (según, tras, mediante), matching the noun they refer to.",
  "sections": {
   "0": {
    "addTables": [
     RELATIVES_PREP
    ]
   }
  }
 },
 "b2d-rep-cuyo-elige": {
  "goal": "choose cuyo for \"whose\" and a preposition + el cual for \"which\": el autor cuya novela leí / la razón por la cual vine."
 },
 "c1r-extra-prep-verbs-relative": {
  "goal": "keep a verb's preposition in front of the relative: soñar con → la persona con la que sueño, hablar de → el tema del que te hablé."
 },
 "c1r-extra-prep-verbs-relative-part-2": {
  "goal": "practise preposition + que, quien or el cual with new verbs: el amigo en quien confío, la casa en la que crecí.",
  "sections": {
   "0": {
    "addTables": [
     RELATIVES_PREP
    ]
   }
  }
 },
 "subjunctive-mastery-review-1": {
  "goal": "say you hope, are glad or doubt that something has already happened with haya + participle: espero que hayas llegado bien."
 },
 "b2-vocabulary-practice-1": {
  "goal": "learn 50 art and literature words and the families they come in: pintar, el pintor, la pintura.",
  "sections": {
   "0": {
    "body": [
     "Las 50 palabras del arte y la literatura, agrupadas para repasar. Muchas forman familias (pintar, el pintor, la pintura) que verás en la sección siguiente."
    ]
   }
  }
 },
 "b2-vocabulary-practice-1-part-2": {
  "goal": "use the art and literature words in sentences, and watch out for their false friends."
 },
 "b2-vocabulary-practice-9": {
  "goal": "make nouns from verbs (-ación, -ización, -sión, -ducción) and learn 50 debate words: argumentar → la argumentación.",
  "sections": {
   "0": {
    "body": [
     "Gran parte del vocabulario del debate se aprende de dos en dos, porque el español forma sustantivos y adjetivos a partir de verbos con unas pocas terminaciones fijas. Si conoces el verbo, puedes deducir la palabra de la misma familia aunque nunca la hayas visto.",
     "¿Por qué importa? En un texto formal se prefiere el sustantivo al verbo («La polarización del debate preocupa» en lugar de «Que el debate se polarice preocupa»), y en un registro cuidado ese cambio es constante."
    ]
   },
   "3": {
    "body": [
     "Ahora repasa las 50 palabras de la lista «El debate y la argumentación». Fíjate en las parejas de la misma familia: refutar / la refutación, objetar / la objeción, persuadir / persuasivo, moderar / el moderador."
    ]
   }
  }
 },
 "b2-vocabulary-practice-9-part-2": {
  "goal": "use the debate words in sentences: plantear una objeción, llegar a una conclusión."
 },
 "b2d-rep-ser-estar-dictado-final": {
  "goal": "write down what you hear and choose ser, estar or haber: la reunión es en la sala 2, la sala está en el segundo piso, hay dos salas."
 },
 "b2d-cuento-texto-formal": {
  "goal": "complete a museum press release with cuyo and a preposition + el cual, the way formal texts are written.",
  "sections": {
   "0": {
    "addTables": [
     CUYO
    ]
   }
  }
 },
 "b2d-patron-cuando-llegue": {
  "goal": "talk about the future in a fixed frame: cuando + subjunctive, then the future or a command (cuando llegues, llámame).",
  "sections": {
   "0": {
    "addTables": [
     SUBJ_TIME
    ]
   }
  }
 },
 "b2d-habla-de-ti-planes": {
  "goal": "talk about your own plans with cuando, en cuanto, hasta que and antes de que + subjunctive."
 },
 "b1r-challenge-dialogue-marathon": {
  "goal": "get through four everyday scenes in a row in Spanish: a job interview, a complaint, some advice and a goodbye."
 },
 "b1r-tema-admitir-errores": {
  "goal": "admit a mistake, say sorry and offer a fix, with past tenses, double pronouns and the subjunctive."
 },
 "subjunctive-adverbial-clauses-1": {
  "dropSections": [
   3
  ],
  "sections": {
   "2": {
    "body": [
     "\"Antes de que\" siempre lleva subjuntivo, porque la acción de la cláusula todavía no ha ocurrido en el momento de la acción principal.",
     "Compara con después de que: «saldremos después de que pare la lluvia» habla de algo que tiene que pasar primero; «salgamos antes de que empiece la tormenta»: cuando salimos, la tormenta todavía no ha empezado. Con la acción principal en presente o futuro, va el presente de subjuntivo: empiece, sea."
    ],
    "examples": [
     {
      "es": "Salgamos antes de que empiece la tormenta.",
      "en": "Let's leave before the storm starts."
     },
     {
      "es": "Llama antes de que sea demasiado tarde.",
      "en": "Call before it's too late."
     }
    ]
   }
  },
  "summary": "Domina cuándo usar el subjuntivo con cuando, en cuanto, hasta que, antes de que y para que.",
  "parts": [
   {
    "goal": "use the subjunctive after cuando, en cuanto, hasta que and antes de que for what hasn't happened yet: cuando termine, te aviso."
   },
   {
    "goal": "use para que + subjunctive for a new subject and para + infinitive for the same one, mixed with cuando and hasta que + subjunctive."
   }
  ]
 }
};

function merge(a: Record<string, LessonPatch>, b: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...a };
  for (const [slug, p] of Object.entries(b)) {
    const m = out[slug] ?? {};
    out[slug] = {
      ...m,
      ...p,
      sections: Object.fromEntries([...new Set([...Object.keys(m.sections ?? {}), ...Object.keys(p.sections ?? {})])].map((k) => [k, { ...(m.sections?.[+k] ?? {}), ...(p.sections?.[+k] ?? {}) }])),
      exercises: { ...(m.exercises ?? {}), ...(p.exercises ?? {}), replace: { ...(m.exercises?.replace ?? {}), ...(p.exercises?.replace ?? {}) } },
    };
  }
  return out;
}

function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(C1_UNIT1_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C1_UNIT1_PATCHES: Record<string, LessonPatch> = withLatam(merge(C1_UNIT1_SWAP, manual));
