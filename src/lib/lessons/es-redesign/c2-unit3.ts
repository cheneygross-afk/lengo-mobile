// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit3.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C2 Unit 3 (verb pairs like llevar + -ndo; verbs that need a, de,
// en or con; extra pronouns for emphasis): content fixes from Claude's audit in
// Ricardo's format (Claude Feedback/Spanish (new course)/C2 Mastery/Unit 03).
// Only content changes here: what is taught, asked and accepted. The answer
// checker and the rubric are untouched.
// 
// Each lesson gets its own goal, the two mastery checks follow the lessons they
// test, the "gerundio de posterioridad" they ask about is now taught in the
// review card, second parts get their pattern table, and vosotros, Spain words
// and an early "el hecho de que" leave the main answers.
import type { LessonPatch } from "./patch";
import { GERUND_INFINITIVE, PERIPHRASES, PREP_VERBS } from "./concept-tables";
import { C2_UNIT3_LATAM, C2_UNIT3_SWAP } from "./c2-unit3-latam";

const manual: Record<string, LessonPatch> = {
 "gerund-infinitive-advanced-part-1-3-part-2": {
  "goal": "tell keep doing from stop, finish and just did: sigue trabajando, dejó de fumar, terminó de leer, acabo de llegar.",
  "sections": {
   "0": {
    "addTables": [
     PERIPHRASES
    ]
   }
  }
 },
 "c1r-contrast-progressive-periphrases": {
  "goal": "choose between está, va, viene and lleva + -ndo: happening now, little by little, for a while, for how long."
 },
 "gerund-infinitive-advanced-part-2-mastery-check": {
  "goal": "show you can pick estar, ir, venir or llevar + -ndo for each meaning, in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     PERIPHRASES
    ]
   }
  }
 },
 "gerund-infinitive-advanced-part-2-mastery-check-part-2": {
  "goal": "prove it again: gradual change with ir + -ndo and \"for months\" with venir and llevar + -ndo.",
  "sections": {
   "0": {
    "addTables": [
     PERIPHRASES
    ]
   }
  }
 },
 "gerundio-vs-infinitivo-drill-2-part-2": {
  "goal": "use the whole verb after a small word and as a subject, and seguir + -ndo: antes de salir, fumar es malo.",
  "sections": {
   "0": {
    "addTables": [
     GERUND_INFINITIVE
    ]
   }
  }
 },
 "c1r-extra-periphrasis-aspect": {
  "goal": "add a shade of meaning with a verb pair: ponerse a, volver a, llegar a, andar + -ndo, acabar + -ndo."
 },
 "c1r-extra-periphrasis-aspect-part-2": {
  "goal": "practise ponerse a, volver a, llegar a and acabar + -ndo in new sentences: al final acabó aceptando.",
  "sections": {
   "0": {
    "addTables": [
     PERIPHRASES
    ]
   }
  }
 },
 "c1r-contrast-seguir-dejar": {
  "goal": "say where an action stands: still going (sigue), stopped (dejó de), finished (terminó de), again (volvió a)."
 },
 "c1r-contrast-seguir-dejar-part-2": {
  "goal": "practise seguir + -ndo against dejar de, terminar de and volver a + whole verb, and fix the mix-ups.",
  "sections": {
   "0": {
    "addTables": [
     GERUND_INFINITIVE
    ]
   }
  }
 },
 "c1r-error-hunt-interference": {
  "goal": "spot and fix English-style small words: depende de (not en), consiste en, enamorarse de, soñar con."
 },
 "c1r-error-hunt-interference-part-2": {
  "goal": "fix more English-style small words in new sentences: pensar en, casarse con, soñar con.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c1r-transform-queismo-dequeismo": {
  "goal": "decide between de que and plain que with the swap test: me acuerdo de que, pienso que."
 },
 "c1r-transform-queismo-dequeismo-part-2": {
  "goal": "practise de que and que in new sentences: me alegro de que, creo que, no cabe duda de que.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c1r-spiral-verbs-subjunctive": {
  "goal": "keep the small word before que and pick the mood: insistió en que viniera / en que era inocente."
 },
 "c1r-spiral-verbs-subjunctive-part-2": {
  "goal": "practise contar con que, confiar en que and insistir en que with the right mood in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "c1r-extra-prep-verbs-cloze": {
  "goal": "read a letter full of verbs with small words and fill each gap: me acostumbré a, sueño con, me enteré de."
 },
 "c1r-extra-prep-verbs-cloze-part-2": {
  "goal": "complete new sentences with the small word each verb needs: atreverse a, empeñarse en, acordarse de.",
  "sections": {
   "0": {
    "addTables": [
     PREP_VERBS
    ]
   }
  }
 },
 "es-a-mi-me-se-lo-a-juan": {
  "goal": "make se lo clear or stress who you mean with a + person: se lo di a ella, no a él."
 },
 "c1c2-vocabulary-practice-11": {
  "goal": "use Latin phrases the educated way: sine qua non, grosso modo, statu quo, motu proprio, a priori."
 },
 "c1c2-vocabulary-practice-11-part-2": {
  "goal": "use Latin phrases in new sentences and avoid the usual slips: de motu proprio, a grosso modo."
 },
 "c1c2-vocabulary-practice-12-part-2": {
  "goal": "use Greek-root words in new sentences with the right gender: el paradigma, la catarsis, una diatriba."
 },
 "listening-reading-strategies-1": {
  "goal": "work out an unknown word from its job in the sentence, the words around it and its prefix or suffix."
 },
 "listening-reading-strategies-1-part-2": {
  "goal": "use the clues on new texts and tell a gap in your vocabulary from a deliberate ambiguity."
 },
 "listening-reading-strategies-2": {
  "goal": "decide when to keep reading past a doubt and when to stop and check, and leave open what the author left open."
 },
 "c2r-strategy-infer-unknown-word": {
  "goal": "guess rare words from signals like sino, lejos de and es decir, then write how you did it."
 },
 "gerund-infinitive-advanced-part-1-mastery-check": {
  "goal": "show you can use the whole verb as subject and sign, seguir and dejar de, and the -ndo form for \"at the same time\".",
  "sections": {
   "0": {
    "body": [
     "Repaso rápido y, después, práctica con frases nuevas.",
     "El -ndo va con algo que pasa a la vez: «Salió dando un portazo». Si cuenta algo que pasa después («Terminó la carrera, mudándose luego»), es un gerundio de posterioridad y conviene evitarlo: «Terminó la carrera y luego se mudó»."
    ],
    "addTables": [
     GERUND_INFINITIVE
    ]
   }
  }
 },
 "b2r-tema-aprender-idioma-nino": {
  "goal": "tell the story of a child learning a new language: empezó a entender, se fue acostumbrando, llegó a contar chistes."
 },
 "c1c2-vocabulary-practice-12": {
  "parts": [
   {
    "goal": "learn Greek-root words from the news and essays and their gender: la panacea, el paradigma, la hecatombe."
   },
   {
    "goal": "use cultismos that judge and intensify: una apología, una diatriba, el paroxismo, la catarsis."
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
  for (const [slug, g] of Object.entries(C2_UNIT3_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C2_UNIT3_PATCHES: Record<string, LessonPatch> = withLatam(merge(C2_UNIT3_SWAP, manual));
