// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/c2-unit2.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, C2 Unit 2 (lo + describing word; formal nouns from verbs; -ndo form
// or whole verb): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/C2 Mastery/Unit 02). Only content changes here:
// what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
// 
// Lessons built on el hecho de que move to C2 Unit 4 (next to their own first
// parts there), the seguir / dejar de periphrasis contrast moves to C2 Unit 3,
// each lesson gets its own goal, and the humor and proverb lessons drop Spain
// slang (pillar, partirse, sin blanca) and vosotros as main answers.
import type { LessonPatch } from "./patch";
import { GERUND_INFINITIVE, LO_NEUTER, NOMINALIZATION } from "./concept-tables";
import { C2_UNIT2_LATAM, C2_UNIT2_SWAP } from "./c2-unit2-latam";

const manual: Record<string, LessonPatch> = {
 "nominalization-part-1-2": {
  "goal": "turn a quality into a noun with lo: lo bueno, lo mejor, lo raro, and tell lo bueno from la bondad."
 },
 "nominalization-drill-1": {
  "goal": "practise lo + describing word, lo + describing word + de, and el + whole verb: lo difícil del examen, el ir y venir."
 },
 "nominalization-drill-1-part-2": {
  "goal": "name qualities and actions in new sentences: lo malo de vivir lejos, el manejar de noche.",
  "sections": {
   "0": {
    "addTables": [
     LO_NEUTER
    ]
   }
  }
 },
 "nominalization-part-1-3": {
  "goal": "make formal nouns from verbs and describing words with -ción, -miento, -dad and -eza: la reducción, la belleza.",
  "sections": {
   "0": {
    "addTables": [
     NOMINALIZATION
    ]
   }
  }
 },
 "nominalization-part-1-3-part-2": {
  "goal": "practise -ción, -miento, -dad and -eza nouns in new formal sentences.",
  "sections": {
   "0": {
    "addTables": [
     NOMINALIZATION
    ]
   }
  }
 },
 "c1r-transform-verb-to-noun": {
  "goal": "shrink a sentence into a noun phrase: los precios suben → la subida de los precios."
 },
 "c1r-transform-verb-to-noun-part-2": {
  "goal": "turn verbs into nouns in headlines and reports, with the right suffix: el embellecimiento de la plaza.",
  "sections": {
   "0": {
    "addTables": [
     NOMINALIZATION
    ]
   }
  }
 },
 "c1r-extra-infinitive-subject-object": {
  "goal": "say \"swimming is healthy\" with the whole verb, never the -ndo form: nadar es sano, gracias por venir."
 },
 "c1r-extra-infinitive-subject-object-part-2": {
  "goal": "practise the whole verb as subject and after small words: manejar después de beber es peligroso.",
  "sections": {
   "0": {
    "addTables": [
     GERUND_INFINITIVE
    ]
   }
  }
 },
 "proverbs-sayings-1": {
  "goal": "tell a refrán from a dicho and complete one from its rhyme and two halves: más vale tarde que nunca."
 },
 "proverbs-sayings-1-part-2": {
  "goal": "complete and use common refranes in new situations: a quien madruga, Dios lo ayuda."
 },
 "c2r-proverbs-complete": {
  "goal": "rebuild the second half of a refrán and say what it means: más vale pájaro en mano…"
 },
 "proverbs-sayings-2": {
  "goal": "quote a refrán naturally (como dice el refrán…) and see why two refranes can say opposite things."
 },
 "c2r-proverbs-mission-advice": {
  "goal": "give advice with the right refrán for each case: a caballo regalado no le mires el diente."
 },
 "c2r-humor-dialogue-lab": {
  "goal": "answer a joke: play along, turn it back (mira quién habla), say you didn't get it, laugh, or cut it short."
 },
 "c2r-humor-dialogue-lab-part-2": {
  "goal": "practise answering jokes in new situations, with ustedes for a group: no se ofendan."
 },
 "c2r-humor-double-meaning": {
  "goal": "find the two readings behind a joke or a headline: wordplay, double meanings and words that sound alike."
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
  for (const [slug, g] of Object.entries(C2_UNIT2_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const C2_UNIT2_PATCHES: Record<string, LessonPatch> = withLatam(merge(C2_UNIT2_SWAP, manual));
