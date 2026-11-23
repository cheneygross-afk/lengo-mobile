// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c1-unit2.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C1 Unit 2 (the past wish form, matching tenses, unreal "if"
// sentences): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/C1 Advanced/Unit 02). Only content changes
// here: what is taught, asked and accepted. The answer checker and the rubric
// are untouched.
// 
// The lo que quieras / pase lo que pase dictation moved to C1 Unit 5
// (es-redesign-units.json), and the como si card left the unreal "if" lesson
// (como si is C1 Unit 3). Each lesson says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { IMPERFECT_SUBJ, SEQUENCE, SI_REAL, SI_UNREAL } from "./concept-tables";
import { C1_UNIT2_LATAM, C1_UNIT2_SWAP } from "./c1-unit2-latam";

const manual: Record<string, LessonPatch> = {
 "b2d-patron-ellos-ron-ra": {
  "goal": "build the past wish form from the ellos past: hablaron → hablara, tuvieron → tuviera, fueron → fuera."
 },
 "b2d-pares-quiero-queria": {
  "goal": "match the tenses in pairs: quiero que vengas (now) / quería que vinieras (then)."
 },
 "b2d-circuito-irregulares-imperfecto": {
  "goal": "form the irregular past wish forms from the ellos past: tuviera, pudiera, supiera, dijera, hiciera."
 },
 "b2d-circuito-irregulares-imperfecto-part-2": {
  "goal": "use the irregular past wish forms in quick rounds: quería que vinieras, me pidió que lo hiciera.",
  "sections": {
   "0": {
    "addTables": [
     IMPERFECT_SUBJ
    ]
   }
  }
 },
 "b2d-cadena-presente-pasado": {
  "goal": "retell a scene in the past and move each wish form back with it: no creo que mientan → no creía que mintieran."
 },
 "b2d-rep-relativas-pasado": {
  "goal": "describe what you were looking for with que + the past wish form: buscaba un departamento que tuviera terraza."
 },
 "b2d-rep-relativas-pasado-part-2": {
  "goal": "tell busco alguien que sepa from buscaba alguien que supiera, and use both in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "a2d-directions-sequence": {
  "goal": "give directions step by step (a review from Elementary): sigue recto, gira a la derecha, cruza la plaza."
 },
 "b2r-transform-sequence-of-tenses": {
  "goal": "change a sentence from present to past and match the wish form: me pide que vaya → me pidió que fuera."
 },
 "b2d-corrige-secuencia": {
  "goal": "find and fix tense-matching mistakes in a diary: me pidió que prepare → me pidió que preparara."
 },
 "b2d-habla-de-ti-normas-infancia": {
  "goal": "talk about the rules of your childhood: mis papás no dejaban que saliera solo, querían que estudiara."
 },
 "si-clauses-simple-1": {
  "goal": "say what will happen if something real happens: si llueve, me quedo en casa; si tengo tiempo, te llamaré."
 },
 "si-clauses-simple-2": {
  "goal": "talk about study plans with si + present and words from student life."
 },
 "b1d-rep-si-presente": {
  "goal": "finish si + present sentences three ways: with the present, the future or a command."
 },
 "b1d-rep-si-cadena": {
  "goal": "keep the si + present condition and change the result: te ayudo, te ayudaré, ayúdame."
 },
 "b1d-rep-si-cadena-part-2": {
  "goal": "practise si + present with the present, the future and a command in new sentences.",
  "sections": {
   "0": {
    "addTables": [
     SI_REAL
    ]
   }
  }
 },
 "b2d-cadena-real-a-hipotetico": {
  "goal": "turn a real condition into an unlikely one: si tengo dinero, viajo → si tuviera dinero, viajaría."
 },
 "b2d-cadena-real-a-hipotetico-part-2": {
  "goal": "practise the change from si + present to si + past wish form and the conditional with new sentences.",
  "sections": {
   "0": {
    "addTables": [
     SI_UNREAL
    ]
   }
  }
 },
 "b2-vocabulary-practice-2": {
  "goal": "learn 50 words about politics and government, and the word parts they are built from."
 },
 "b2-vocabulary-practice-2-part-2": {
  "goal": "use the politics and government words in sentences."
 },
 "b2d-dictado-imperfecto-subjuntivo": {
  "goal": "write down sentences you hear with matched tenses: me pidió que esperara, sería mejor que no manejaras.",
  "sections": {
   "1": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "b2d-rep-imperfecto-dictado": {
  "goal": "hear and write the -ra forms in context: le aconsejé que durmiera, nos pidieron que no hiciéramos fotos.",
  "sections": {
   "1": {
    "addTables": [
     IMPERFECT_SUBJ
    ]
   }
  }
 },
 "b2r-mission-study-trip-diary": {
  "goal": "write a study-trip diary about the rules you had to follow: nos pidieron que llegáramos a las nueve.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "b2d-cuento-sueno-infancia": {
  "goal": "complete a story about a childhood dream with the past wish form: quería que su padre la llevara al mar.",
  "sections": {
   "0": {
    "addTables": [
     SEQUENCE
    ]
   }
  }
 },
 "b2d-ronda-ojala-impersonales-pasado-part-2": {
  "goal": "use the past wish form after era necesario que, era importante que and ojalá: ojalá pudiera ir.",
  "sections": {
   "0": {
    "addTables": [
     IMPERFECT_SUBJ
    ]
   }
  }
 },
 "imperfect-subjunctive-sequence-1": {
  "parts": [
   {
    "goal": "form the past wish form from the ellos past (hablaron → hablara) and learn the irregular ones."
   },
   {
    "goal": "match the tenses: present with present (quiero que vengas), past with the past wish form (quería que vinieras)."
   }
  ]
 },
 "hypothetical-si-clauses-1": {
  "dropSections": [
   4
  ],
  "parts": [
   {
    "goal": "say what you would do if things were different: si tuviera tiempo, te ayudaría, and never the conditional after si."
   },
   {
    "goal": "tell a real condition from an unreal one and use the conditional in the result: si llueve, me quedo / si lloviera, me quedaría."
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
  for (const [slug, g] of Object.entries(C1_UNIT2_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C1_UNIT2_PATCHES: Record<string, LessonPatch> = withLatam(merge(C1_UNIT2_SWAP, manual));
