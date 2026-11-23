// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit6.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B2 Unit 6 (guessing with the future, se for "is sold" and
// "people say", se for accidents): content fixes from Claude's audit in
// Ricardo's format (Claude Feedback/Spanish (new course)/B2 Upper
// Intermediate/Unit 06). Only content changes here: what is taught, asked and
// accepted. The answer checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the two
// "if" chains (si + imperfect subjunctive) to C1 Unit 2, the four lessons
// built on the passive with ser to C1 Unit 6, and the art word web (relatives
// with the subjunctive) to B2 Unit 7. Lessons that showed another concept's
// table now show their own, and each lesson says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { PRET_VS_IMP, SUBJ_DOUBT, SUBJ_EMOTION } from "./concept-tables";
import { B2_UNIT6_LATAM, B2_UNIT6_SWAP } from "./b2-unit6-latam";

const manual: Record<string, LessonPatch> = {
  "b1r-tema-competicion": {
    "summary": "Concursos, jueces y resultados: el condicional, el se y las expresiones de opinión.",
    "goal": "talk about a cooking contest: give opinions (creo que, no creo que), advice (yo en tu lugar pondría) and results with se (se eligió el mejor plato)."
  },
  "a2d-future-probability": {
    "goal": "make a guess about now with the future: ¿Dónde estará? Estará en el trabajo. Tendrá unos cuarenta años."
  },
  "b1d-preguntas-es-posible": {
    "goal": "answer questions about plans and doubts with es posible que, es probable que and puede que + subjunctive.",
    "sections": {
      "0": {
        "tables": [
          SUBJ_DOUBT
        ]
      }
    }
  },
  "b1g-probability-future-conditional": {
    "goal": "make guesses with the future for now (serán las tres), the future perfect for just now (habrá llegado) and the conditional for the past (estaría cansado)."
  },
  "b1d-patron-se-vende-se-venden": {
    "goal": "say what is sold, rented or wanted with se, making the verb match the noun: se vende una casa, se venden casas."
  },
  "b1d-patron-se-vende-se-venden-part-2": {
    "goal": "practise se vende / se venden with new nouns, and keep the verb singular before an infinitive: se necesita saber alemán."
  },
  "b1d-pares-pasivo-impersonal": {
    "goal": "tell passive se from impersonal se in near-identical pairs: se buscan voluntarios, se busca a los niños."
  },
  "b1r-tema-inmigracion": {
    "goal": "talk about starting out in a new country with three pasts (me costaba, aprendí, he hecho amigos) and echar de menos.",
    "sections": {
      "0": {
        "tables": [
          PRET_VS_IMP
        ]
      }
    }
  },
  "b1r-contrast-se-pasivo-impersonal": {
    "goal": "choose in a second between se vende and se venden, se busca and se buscan: find the noun, then match the verb."
  },
  "b1g-accidental-se": {
    "goal": "talk about accidents without taking the blame: se me olvidó, se le cayó el vaso, se nos rompió la tele."
  },
  "b1-vocabulary-practice-3": {
    "goal": "use 50 nature and environment words in sentences, with the right gender for each: el sistema, la selva, el agua."
  },
  "b1-common-words-supernatural": {
    "goal": "use words about faith, legends and the supernatural in everyday sentences: un ángel, un fantasma, ¡qué demonios!"
  },
  "b2-vocabulary-practice-10": {
    "goal": "use 50 words about music and the performing arts, building word families: dirigir, el director, la dirección."
  },
  "b1r-mission-signs-ads": {
    "goal": "read city signs and ads with se: se vende, se alquila, se busca, no se puede fumar."
  },
  "b1r-mission-signs-ads-part-2": {
    "goal": "write and fix signs and ads with se, making the verb match: se busca cocinero, se arreglan computadoras."
  },
  "b1d-rep-ojala-dialogo": {
    "goal": "answer each situation with a fitting wish: ¡Ojalá apruebes!, ¡Que te mejores!, ¡Que sean muy felices!"
  },
  "b1d-cuento-informe-anual": {
    "goal": "read a company report and complete it with se in several tenses: se abrieron dos tiendas, se contratará a más personas."
  },
  "b1r-tema-convivencia-vecinos": {
    "goal": "complain politely to a neighbor: perdona que te moleste, me molesta que…, ¿podrías…?, ¿qué te parece si…?",
    "sections": {
      "0": {
        "tables": [
          SUBJ_EMOTION
        ]
      }
    }
  },
  "b1r-exit-ticket": {
    "goal": "show you are ready for the Advanced level: reading, listening, grammar and a short email from the Intermediate level."
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
  for (const [slug, g] of Object.entries(B2_UNIT6_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B2_UNIT6_PATCHES: Record<string, LessonPatch> = withLatam(merge(B2_UNIT6_SWAP, manual));
