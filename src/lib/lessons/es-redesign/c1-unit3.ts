// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit3.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C1 Unit 3 (como si, passing on what someone said, verbs of
// change): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/C1 Advanced/Unit 03). Only content changes here:
// what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
// 
// Lessons on mixed and past unreal "if" sentences moved to C1 Unit 4, the gossip
// mission to C1 Unit 6, and every lesson built on cuyo ("whose") to C2 Unit 1,
// where cuyo is taught (es-redesign-units.json). The few cuyo questions left in
// B2 Unit 7 now practise que + subjunctive or indicative instead. Each lesson
// says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { COMO_SI, POR_PARA, REPORTED_SPEECH, SUBJ_ADJECTIVE, SUBJ_WISHES } from "./concept-tables";
import { C1_UNIT3_LATAM, C1_UNIT3_SWAP } from "./c1-unit3-latam";

const manual: Record<string, LessonPatch> = {
 "b2d-pares-como-si-como": {
  "goal": "tell como es (real) from como si fuera (imagined): habla como es / habla como si fuera el jefe."
 },
 "b2d-pares-como-si-como-part-2": {
  "goal": "use como si + the past wish form for imagined comparisons, and como si + hubiera for something imagined before.",
  "sections": {
   "0": {
    "addTables": [
     COMO_SI
    ]
   }
  }
 },
 "b2d-rep-si-como-si-ronda": {
  "goal": "choose como si + fuera (same time) or como si + hubiera visto (before) in quick rounds."
 },
 "b2r-tema-volver-a-la-rutina": {
  "goal": "tell how a big trip changed you with como si and the verbs of change: me siento como si fuera un turista, me he vuelto más paciente."
 },
 "reported-speech-1": {
  "goal": "pass on what someone said and move the tenses back: «Estoy cansado» → dijo que estaba cansado; mañana → al día siguiente."
 },
 "b2d-patron-dijo-que": {
  "goal": "practise one frame, dijo que…, and move each tense back: es → era, vendré → vendría."
 },
 "b2d-elige-informar-o-pedir": {
  "goal": "tell dijo que venía (passing on news) from dijo que viniera (passing on a request)."
 },
 "reported-speech-2": {
  "goal": "learn 50 news and media words, and report with anunció, explicó, negó and pidió que + the right form."
 },
 "b2d-rep-estilo-indirecto-ronda": {
  "goal": "pass on what people said in quick rounds, with the right tense and time words."
 },
 "b1d-rep-formacion-cambio-raiz": {
  "goal": "review the stem changes in the present wish form: piense, duerma, pida, and sintamos, durmamos for nosotros."
 },
 "b1d-circuito-cambios-raiz": {
  "goal": "form quiera, pueda, pida and duerma fast, and the -ir verbs that also change for nosotros."
 },
 "b1d-ronda-ortografia-subjuntivo": {
  "goal": "keep the sound with a spelling change in the wish form: busque, llegue, empiece, escoja."
 },
 "verbs-of-change-1": {
  "goal": "say become and get: ponerse (moods), volverse (character), hacerse (by effort), llegar a ser and convertirse en."
 },
 "b2d-patron-ponerse": {
  "goal": "describe quick changes in mood and body with ponerse: se puso rojo, me pongo nervioso."
 },
 "b2r-tema-tradiciones-rurales": {
  "goal": "read about rural traditions and use the wish form after querer que and pedir que, and the verbs of change."
 },
 "b2r-word-web-media": {
  "goal": "learn the people and actions of the news (el reportero, la entrevista, desmentir) and use them to pass on what was said.",
  "sections": {
   "1": {
    "addTables": [
     REPORTED_SPEECH
    ]
   }
  }
 },
 "b2d-rep-mezcla-consejos": {
  "goal": "give advice three ways: yo que tú + would, te sugiero que + wish form, and a polite deberías.",
  "sections": {
   "0": {
    "addTables": [
     SUBJ_WISHES
    ]
   }
  }
 },
 "c1r-mission-business-email-por-para": {
  "goal": "write a work email and choose por or para for reasons, deadlines, means and who it is for.",
  "sections": {
   "0": {
    "addTables": [
     POR_PARA
    ]
   }
  }
 },
 "b2d-cuento-declaracion-oficial": {
  "goal": "complete a news report on what the mayor said, moving each tense back and using pidió que + the past wish form.",
  "sections": {
   "0": {
    "addTables": [
     REPORTED_SPEECH
    ]
   }
  }
 },
 "b2d-rep-relativas-preguntas": {
  "goal": "ask ¿conoces a alguien que sepa…? with the wish form and answer with either form: sí, conozco a alguien que sabe…",
  "sections": {
   "0": {
    "addTables": [
     SUBJ_ADJECTIVE
    ]
   }
  }
 },
 "b1r-tema-memoria-familiar": {
  "goal": "tell what your father used to say and change the persons and tenses: «mi coche» → su carro, decía que era…",
  "sections": {
   "0": {
    "addTables": [
     REPORTED_SPEECH
    ]
   }
  }
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
  for (const [slug, g] of Object.entries(C1_UNIT3_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C1_UNIT3_PATCHES: Record<string, LessonPatch> = withLatam(merge(C1_UNIT3_SWAP, manual));
