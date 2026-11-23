// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit5.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C1 Unit 5 (aunque with each form, no matter how much, whatever /
// however / whoever): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/C1 Advanced/Unit 05). Only content
// changes here: what is taught, asked and accepted. The answer checker and the
// rubric are untouched.
// 
// The two el hecho de que items (C2 Unit 4) now practise aunque; vosotros items
// and model answers use ustedes. A fuller scan also found a few items in C1
// Units 1-4 (vosotros main answers in C1 Unit 2, a past wish form note in C1
// Unit 1, an aunque + wish form note in C1 Unit 3, enfadado as a main word);
// they are fixed here too.
import type { LessonPatch } from "./patch";
import { AUNQUE, CONNECTORS, POR_MUCHO_QUE, SI_UNREAL, SUBJ_TIME, UNIVERSAL_CONCESSIVES } from "./concept-tables";
import { C1_UNIT5_LATAM, C1_UNIT5_SWAP } from "./c1-unit5-latam";

const manual: Record<string, LessonPatch> = {
 "b2d-pares-aunque": {
  "goal": "tell aunque llueve (a fact you know) from aunque llueva (a possibility, or a fact that changes nothing)."
 },
 "b2d-pares-aunque-sin-embargo": {
  "goal": "say the same contrast three ways: aunque llueve, salgo / llueve; sin embargo, salgo / a pesar de la lluvia, salgo."
 },
 "concessive-aunque-1": {
  "goal": "use aunque + the normal form for a fact you accept as true: aunque estaba cansada, terminó el informe."
 },
 "concessive-aunque-1-part-2": {
  "goal": "practise aunque + the normal form for facts and for stories in the past.",
  "sections": {
   "0": {
    "addTables": [
     AUNQUE
    ]
   }
  }
 },
 "concessive-aunque-2": {
  "goal": "use aunque + the wish form for a possible objection, or to say a true fact doesn't matter: aunque sea mi jefe…"
 },
 "concessive-aunque-2-part-2": {
  "goal": "choose aunque + the wish form or the normal form by what you want to say, in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     AUNQUE
    ]
   }
  }
 },
 "b2r-tema-musica-generaciones": {
  "goal": "talk about music across generations with no es que…, sino que…, por mucho que and aunque."
 },
 "subjunctive-advanced-nuances-drill-1": {
  "goal": "use quizás and tal vez with either form, and por muy… que, por mucho que + the wish form."
 },
 "subjunctive-advanced-nuances-drill-1-part-2": {
  "goal": "practise por muy… que, por más que and quizás in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     POR_MUCHO_QUE
    ]
   }
  }
 },
 "c1r-error-hunt-concessives": {
  "goal": "find and fix the usual mistakes: aunque + would, a pesar de que vs. a pesar de, por mucho que + future."
 },
 "concessive-aunque-4": {
  "goal": "say \"no matter how much\" with por más que and por mucho (+ noun) que: por mucho dinero que tenga…"
 },
 "b2d-circuito-como-si": {
  "goal": "review como si + the past wish form in a quick circuit: habla como si lo supiera todo."
 },
 "subjunctive-mastery-review-3": {
  "goal": "use the fixed whatever / no matter forms: cueste lo que cueste, pase lo que pase, diga lo que diga."
 },
 "c1r-transform-universal-concessive": {
  "goal": "turn sentences into the doubled forms: pase lo que pase, digan lo que digan, sea quien sea."
 },
 "c1r-transform-universal-concessive-part-2": {
  "goal": "build the doubled forms in the past too: fuera quien fuera, dijeran lo que dijeran.",
  "sections": {
   "0": {
    "addTables": [
     UNIVERSAL_CONCESSIVES
    ]
   }
  }
 },
 "subjunctive-advanced-nuances-drill-3": {
  "goal": "use sea como sea and quienquiera, dondequiera, comoquiera que + the wish form."
 },
 "b2d-rep-relativas-dictado": {
  "goal": "hear and write open choices: lo que quieras, quien sea, cualquiera que lo pruebe.",
  "sections": {
   "1": {
    "addTables": [
     UNIVERSAL_CONCESSIVES
    ]
   }
  }
 },
 "b2r-mission-plan-event": {
  "goal": "plan a surprise party with para que, antes de que, a menos que, con tal de que and en caso de que.",
  "sections": {
   "0": {
    "addTables": [
     SUBJ_TIME
    ]
   }
  }
 },
 "b2r-mission-hypothetical-interview": {
  "goal": "answer impossible interview questions with si + the past wish form and would: si fuera invisible, entraría…",
  "sections": {
   "0": {
    "addTables": [
     SI_UNREAL
    ]
   }
  }
 },
 "c1r-dialogue-concessive-debate": {
  "goal": "win a debate by conceding first: es verdad que…, pero; aunque tenga razón en eso…",
  "sections": {
   "0": {
    "addTables": [
     AUNQUE
    ]
   }
  }
 },
 "b2d-cuento-debate-educacion": {
  "goal": "complete a parent's speech about homework with connectors of contrast, cause and adding.",
  "sections": {
   "0": {
    "addTables": [
     CONNECTORS
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
  for (const [slug, g] of Object.entries(C1_UNIT5_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C1_UNIT5_PATCHES: Record<string, LessonPatch> = withLatam(merge(C1_UNIT5_SWAP, manual));
