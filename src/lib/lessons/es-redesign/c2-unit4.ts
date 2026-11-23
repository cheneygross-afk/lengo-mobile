// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit4.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C2 Unit 4 (softer requests with the wish form; the fact that, and
// que at the start; joining words for essays): content fixes from Claude's audit
// in Ricardo's format (Claude Feedback/Spanish (new course)/C2 Mastery/Unit 04).
// Only content changes here: what is taught, asked and accepted. The answer
// checker and the rubric are untouched.
// 
// Each lesson gets its own goal, four lessons swap a wrong table for the one
// they teach (matching tenses, he / fui / había, time words), second parts get
// their table, the perfect-tense review accepts the Latin American simple past,
// and vosotros and Spain words leave what a Latin America learner sees.
import type { LessonPatch } from "./patch";
import { DISCOURSE_MARKERS, HECHO_DE_QUE, LO_NEUTER, NOMINALIZATION, REPORTED_ORDERS, SEQUENCE, SOFTENING } from "./concept-tables";
import { C2_UNIT4_LATAM, C2_UNIT4_SWAP } from "./c2-unit4-latam";

const manual: Record<string, LessonPatch> = {
 "subjunctive-mastery-review-2": {
  "goal": "match the tenses after a past verb: quería que vinieras, dudaba que hubiera terminado.",
  "sections": {
   "0": {
    "tables": [
     SEQUENCE
    ]
   }
  }
 },
 "c1r-error-hunt-tense-concordance": {
  "goal": "find and fix wish forms in the wrong tense: «Temía que el tren ya salga» → hubiera salido.",
  "sections": {
   "0": {
    "tables": [
     SEQUENCE
    ]
   }
  }
 },
 "c1r-error-hunt-tense-concordance-part-2": {
  "goal": "fix more mismatched tenses in new sentences, present or past wish form.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "subjunctive-mastery-review-4": {
  "goal": "soften what you say with the wish form: no es que…, no digo que…, eso no significa que…"
 },
 "c1r-workshop-attenuation": {
  "goal": "turn a blunt request or criticism into a polite one: quisiera, le agradecería que, no es que…"
 },
 "c1r-workshop-attenuation-part-2": {
  "goal": "soften requests and disagreements in new delicate situations without losing clarity.",
  "sections": {
   "0": {
    "addTables": [
     SOFTENING
    ]
   }
  }
 },
 "subjunctive-advanced-nuances-drill-2": {
  "goal": "use the wish form on its own and after el hecho de que and no porque: ¡Que te vaya bien!"
 },
 "nominalization-part-1-1": {
  "goal": "turn a whole sentence into a noun with el hecho de que, and pick the mood inside it."
 },
 "nominalization-part-1-1-part-2": {
  "goal": "use el hecho de que as subject and object in new sentences: el hecho de que hayan cerrado el puente…",
  "sections": {
   "0": {
    "addTables": [
     HECHO_DE_QUE
    ]
   }
  }
 },
 "nominalization-part-1-mastery-check": {
  "goal": "show you can use el hecho de que, lo + describing word and formal nouns in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     HECHO_DE_QUE
    ]
   }
  }
 },
 "nominalization-part-1-mastery-check-part-2": {
  "goal": "prove it again with headlines and reports: la reorganización del departamento, el hecho de que nadie respondiera.",
  "sections": {
   "0": {
    "addTables": [
     NOMINALIZATION
    ]
   }
  }
 },
 "c1r-extra-nominalization-infinitive-lo-part-2": {
  "goal": "name a fact with el que + wish form and an action with el + whole verb: el que llegue tarde, su constante quejarse.",
  "sections": {
   "0": {
    "addTables": [
     LO_NEUTER
    ]
   }
  }
 },
 "c1r-contrast-el-hecho-de-que": {
  "goal": "choose between el hecho de que, lo + describing word and el + whole verb for each idea."
 },
 "c1r-contrast-el-hecho-de-que-part-2": {
  "goal": "practise picking el hecho de que, lo bueno or el madrugar in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     HECHO_DE_QUE
    ]
   }
  }
 },
 "b1d-rep-perfecto-ronda-final": {
  "goal": "choose he ido, fui or había ido from the time words, knowing Latin America also says fui for today.",
  "sections": {
   "0": {
    "tables": [
     {
      "caption": "He, fui or había?",
      "head": [
       "Time words",
       "Form",
       "Example"
      ],
      "rows": [
       [
        "hoy, este año, ya, nunca",
        "he ido (in Latin America also fui)",
        "Este año he leído / leí tres libros."
       ],
       [
        "ayer, en 2010, hace un mes",
        "fui",
        "Ayer visité a mis abuelos."
       ],
       [
        "before another past",
        "había ido",
        "Cuando llamaste, ya había cenado."
       ]
      ],
      "note": "In most of Latin America the simple past is normal for today and this year too: Esta mañana fui al dentista."
     }
    ],
    "body": [
     "Hoy, este año, ya, nunca → he…; ayer, en 2010, hace un mes → indefinido; ya / nunca antes de otro pasado → había…",
     "En casi toda América también se usa el indefinido con hoy y este año: «Esta mañana fui al dentista». Las dos formas valen."
    ]
   }
  }
 },
 "b2d-circuito-marcadores-tiempo": {
  "goal": "change time and place words when you pass on what someone said: mañana → al día siguiente, aquí → allí.",
  "sections": {
   "0": {
    "tables": [
     REPORTED_ORDERS
    ]
   }
  }
 },
 "c1r-contrast-conclusion-markers": {
  "goal": "close an argument with the right marker: en definitiva, en última instancia, al fin y al cabo."
 },
 "c1r-contrast-conclusion-markers-part-2": {
  "goal": "practise the three closing markers in new arguments and fix the wrong one.",
  "sections": {
   "0": {
    "addTables": [
     DISCOURSE_MARKERS
    ]
   }
  }
 },
 "c1r-error-hunt-risk-markers": {
  "goal": "warn of a risk or penalty correctly: a riesgo de equivocarme, bajo pena de multa, so pena de."
 },
 "nominalization-part-2-1": {
  "goal": "see what formal nouns do to a text, more compact and objective, and when too many make it heavy."
 },
 "nominalization-part-2-2-part-2": {
  "goal": "use the words for analysing formal nouns in new sentences: derivación, sufijo, registro burocrático.",
  "sections": {
   "0": {
    "addTables": [
     NOMINALIZATION
    ]
   }
  }
 },
 "nominalization-part-2-3": {
  "goal": "describe a heavy formal style with the right word: farragoso, enrevesado, circunloquio, condensar."
 },
 "nominalization-part-2-3-part-2": {
  "goal": "use the style words in new sentences: reformular un texto farragoso, evitar el circunloquio."
 },
 "presentations-negotiation-1": {
  "goal": "plan a talk with a short opening, clear blocks and a common thread, addressing the audience as ustedes."
 },
 "presentations-negotiation-1-part-2": {
  "goal": "practise the language of a talk: anticipar los bloques, el hilo conductor, un cierre memorable."
 },
 "c2r-negotiation-deadlock": {
  "goal": "unblock a stuck negotiation: sum up, ask what really matters, and propose with ¿y si…?"
 },
 "c2r-negotiation-deadlock-part-2": {
  "goal": "unblock a new deadlock with soft proposals: ¿y si ampliáramos el plazo?, propongo que…"
 },
 "c2r-cite-mission-lit-review": {
  "goal": "write a paragraph that brings sources together: tanto X como Y coinciden, Z matiza, queda por explorar…"
 },
 "c1r-text-detective-subjunctive": {
  "goal": "read an editorial and use its wish-form patterns: resulta inaceptable que, no basta con que, sea cual sea."
 },
 "nominalization-part-2-2": {
  "parts": [
   {
    "goal": "read a formal text full of formal nouns and see what each one sums up."
   },
   {
    "goal": "learn the words for analysing formal nouns: derivación, sufijo, tecnicismo, registro burocrático."
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
  for (const [slug, g] of Object.entries(C2_UNIT4_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C2_UNIT4_PATCHES: Record<string, LessonPatch> = withLatam(merge(C2_UNIT4_SWAP, manual));
