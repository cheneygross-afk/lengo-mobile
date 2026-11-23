// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b2-unit7.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B2 Unit 7 (looking for someone who..., so that, unless,
// provided that): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/B2 Upper Intermediate/Unit 07). Only
// content changes here: what is taught, asked and accepted. The answer
// checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the past
// relatives pair (buscaba a alguien que supiera) to C1 Unit 2, the cuando /
// en cuanto chain and plans to C1 Unit 1, and the technology word web, the
// translation relay and the learning-a-language review (si + hubiera, como
// si) to C1 Unit 4. Each lesson says what it practises in its goal.
import type { LessonPatch } from "./patch";
import { SUBJ_ADJECTIVE } from "./concept-tables";
import { B2_UNIT7_LATAM, B2_UNIT7_SWAP } from "./b2-unit7-latam";

const manual: Record<string, LessonPatch> = {
  "subjunctive-adjective-clauses-1": {
    "sections": {
      "2": {
        "heading": "Quien…, cualquier… que"
      }
    },
    "goal": "describe people and things that may not exist: busco un amigo que hable ruso, no hay nadie que lo sepa, quien gane se lleva el premio."
  },
  "subjunctive-adjective-clauses-2": {
    "summary": "Aprende cincuenta palabras del arte y la literatura y repasa el subjuntivo en las oraciones de relativo.",
    "goal": "use 50 art and literature words, and describe the work you want with que + subjunctive: busco una novela que no sea larga."
  },
  "b2r-word-web-art-literature": {
    "summary": "Obras, géneros, técnicas y críticas: el vocabulario del arte, con relativas en subjuntivo y cuyo.",
    "goal": "use words for works, genres and techniques of art, and describe a work you are looking for with que + subjunctive.",
    "sections": {
      "1": {
        "tables": [
          SUBJ_ADJECTIVE
        ]
      }
    }
  },
  "b2d-patron-busco-alguien-que": {
    "goal": "say who or what you are looking for in a fixed frame: busco / necesito a alguien que + subjunctive (sepa, tenga, pueda)."
  },
  "b2d-patron-busco-alguien-que-part-2": {
    "goal": "practise busco / necesito a alguien que + subjunctive with new verbs, and keep the personal a for a person."
  },
  "b2d-pares-tengo-busco": {
    "goal": "tell known from unknown in near-identical pairs: tengo un amigo que habla ruso / busco un amigo que hable ruso."
  },
  "subjunctive-adjective-clauses-drill-1": {
    "goal": "choose the indicative for a known thing and the subjunctive for one you are still looking for: el departamento que tiene / un departamento que tenga."
  },
  "subjunctive-adjective-clauses-drill-1-part-2": {
    "goal": "practise que + indicative or subjunctive in quick rounds: busco un regalo que sea original, tengo uno que es original."
  },
  "subjunctive-adjective-clauses-drill-2": {
    "goal": "use the subjunctive after nadie, nada and ningún, and after busco, necesito and quiero: no hay nada que me guste."
  },
  "subjunctive-adjective-clauses-drill-3": {
    "goal": "use irregular subjunctive forms in relative clauses (sea, esté, vaya, sepa, dé, haya) and mix them with the indicative."
  },
  "b2r-contrast-antecedent": {
    "goal": "compare que sabe and que sepa: the same verb in two moods, and how the meaning changes (el vestido que es rojo / un vestido que sea rojo)."
  },
  "b2r-transform-infinitive-que": {
    "goal": "change para, antes de and sin + infinitive into para que, antes de que and sin que + subjunctive when the subject changes."
  },
  "b2d-rep-adverbiales-finalidad": {
    "goal": "choose between para / sin + infinitive (same subject) and para que / sin que + subjunctive (a new subject): salgo sin que nadie me vea."
  },
  "b2d-habla-de-ti-pareja-ideal": {
    "goal": "describe your ideal home, job and city with que and donde + subjunctive: quiero un barrio donde los niños puedan jugar."
  },
  "b2d-corrige-anuncios-busco": {
    "goal": "fix classified ads with the wrong mood: vendo un carro que tiene, busco departamento que acepte mascotas."
  },
  "b2r-mission-wanted-ads": {
    "goal": "read and write wanted ads for things that may not exist: se busca departamento que tenga terraza, no hay nadie que…"
  },
  "b2r-dialogue-ideal-partner": {
    "goal": "answer a dating agency: describe your last partner with the indicative and the partner you want with the subjunctive."
  },
  "b2r-dialogue-ideal-partner-part-2": {
    "goal": "talk about the partner you are looking for: busco a alguien que nunca mienta, nunca he conocido a nadie que me entienda como tú."
  },
  "b2d-cuento-galeria": {
    "goal": "read and complete a story about a gallery that needs a painting, with que + subjunctive for the work it is looking for."
  },
  "b2d-circuito-no-hay-nadie-que": {
    "goal": "say that something does not exist with no hay nadie que, no existe nada que, no conozco a nadie que + subjunctive."
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
  for (const [slug, g] of Object.entries(B2_UNIT7_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B2_UNIT7_PATCHES: Record<string, LessonPatch> = withLatam(merge(B2_UNIT7_SWAP, manual));
