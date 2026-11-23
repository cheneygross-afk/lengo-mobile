// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit4.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B1 Unit 4 (the future · por and para · something, nothing,
// someone, no one): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/B1 Intermediate/Unit 04). Question
// numbers are the lessons' own. Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): Common
// Words: When Things Happen (acabar de, ¡cállate!) to B1 Unit 6; the spiral
// review and the Elementary Challenge with -mente adverbs to B1 Unit 5. The
// lessons that stay use Latin American words as their main answers, drop
// hace + time, -mente and commands, and say what each one practices.
import type { LessonPatch } from "./patch";
import { B1_UNIT4_LATAM, B1_UNIT4_SWAP } from "./b1-unit4-latam";

const manual: Record<string, LessonPatch> = {
  "a2d-pattern-future-endings": {
    goal: "add the future endings to the whole infinitive for every person: hablaré, comerás, vivirá, iremos.",
  },
  "future-tense-2": {
    goal: "understand the future in a job interview and use 30 words for work and future plans.",
  },
  "a2d-irregular-future-stems-drill": {
    goal: "use the irregular future stems without hesitating: tendré, saldré, haré, diré, podré, querré.",
  },
  "a2d-ir-a-vs-future": {
    goal: "choose between voy a viajar and viajaré: a plan you've already made, or a prediction or promise.",
  },
  "a2d-say-it-yourself-introduce": {
    goal: "introduce yourself in three time frames: where you lived, what you do now and what you'll do.",
  },
  "a2d-para-four-uses": {
    goal: "use para for destination, deadline, purpose and recipient: para Lima, para el lunes, para aprender, para ti.",
  },
  "a2d-por-four-uses": {
    goal: "use por for duration, cause, exchange and movement through, plus fixed phrases like por eso and por fin.",
  },
  "por-vs-para-2": {
    goal: "understand por and para at the doctor's and use 30 words for health and medical visits.",
  },
  "a2d-minimal-pairs-por-para": {
    goal: "listen for and say the difference between pairs like por ti and para ti, or por la mañana and para mañana.",
  },
  "a2r-transform-make-it-negative": {
    goal: "turn sentences negative: alguien → nadie, algo → nada, siempre → nunca, with no before the verb.",
  },
  "a2d-negation-double": {
    goal: "put a negative word before the verb (nadie viene) or after it with no (no viene nadie).",
  },
  "a2-common-words-news": {
    goal: "use words from the news and the service desk: el gobierno, la situación, la investigación, el negocio, un consejo, el permiso.",
  },
  "a2r-mission-trip-por-para": {
    goal: "plan a trip to Mexico with a travel agent, choosing por or para at every step.",
  },
  "b1r-dialogue-have-you-ever": {
    goal: "ask and answer ¿alguna vez has…?, then give the details in the preterite: sí, fui en 2019.",
  },
  "a2r-spiral-three-times": {
    goal: "move between past, present and future in one life story: se mudó, vive, se mudará.",
  },
  "a2r-challenge-dialogue-marathon": {
    goal: "get through four everyday conversations: at the doctor's, a lost bag, a job interview and a reunion.",
  },
  "a2d-story-cloze-grandfather": {
    goal: "read a family story and fill each gap with the imperfect, the preterite or the future.",
  },
  "a2d-cumulative-circuit-4": {
    goal: "put pronouns in the right place with conjugated verbs, infinitives, gerunds and ir a, in every tense.",
  },
  "a2d-cumulative-circuit-3": {
    goal: "use the same irregular verbs in the preterite, the imperfect and the future: fui, iba, iré.",
  },
  "a2r-spiral-pronouns-reflexives-por-para": {
    goal: "mix object pronouns, reflexive verbs, the future and por or para in one review.",
  },
};

function merge(a: Record<string, LessonPatch>, b: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...a };
  for (const [slug, p] of Object.entries(b)) {
    const m = out[slug] ?? {};
    out[slug] = {
      ...m,
      ...p,
      sections: { ...(m.sections ?? {}), ...(p.sections ?? {}) },
      exercises: { ...(m.exercises ?? {}), ...(p.exercises ?? {}), replace: { ...(m.exercises?.replace ?? {}), ...(p.exercises?.replace ?? {}) } },
    };
  }
  return out;
}

function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(B1_UNIT4_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B1_UNIT4_PATCHES: Record<string, LessonPatch> = withLatam(merge(B1_UNIT4_SWAP, manual));
