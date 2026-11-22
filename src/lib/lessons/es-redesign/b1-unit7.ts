// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit7.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B1 Unit 7 (que, quien, el que, lo que · written accents that
// change meaning): content fixes from Claude's audit in Ricardo's format
// (Claude Feedback/Spanish (new course)/B1 Intermediate/Unit 07). Only
// content changes here: what is taught, asked and accepted. The answer
// checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): Las
// emociones (me alegro de que + subjunctive) to B2 Unit 2; the house rules
// (negative commands) and the gazpacho recipe (negative and usted commands)
// to B2 Unit 3; group work (nosotros commands, conditional) and Pronombres
// combinados 2 (commands with two pronouns) to B2 Unit 4; learning to drive,
// the Camino de Santiago, a father's memory (pluperfect, si) and the si-clause
// drill to B2 Unit 5; the Intermediate exit test (se cortará, se ruega) to B2
// Unit 6. The lessons that stay drop the pluperfect and the subjunctive, use
// Latin American words first, and say what each one practices in its goal.
import type { LessonPatch } from "./patch";
import { B1_UNIT7_LATAM, B1_UNIT7_SWAP } from "./b1-unit7-latam";

const manual: Record<string, LessonPatch> = {
  "relative-pronouns-1": {
    "goal": "join two ideas with que, quien, el que and lo que: el libro que leo, la amiga con quien voy, lo que dijiste.",
    "parts": [
      {
        "goal": "join two ideas with que for people and things, and with quien after a preposition or between commas: el libro que leo, la amiga con quien voy."
      },
      {
        "goal": "use el que and la que after a preposition, and lo que for a whole idea: la casa en la que vivo, lo que dijiste fue útil."
      }
    ]
  },
  "b1d-patron-une-con-que": {
    "goal": "join two short sentences into one with que, for people, animals and things: Tengo una gata que duerme todo el día.",
    "alts": { "25": ["Conocí a un hombre que había vivido en China diez años.", "Conocí a un hombre que había vivido en China durante diez años."] }
  },
  "b1d-pares-que-lo-que": {
    "goal": "tell que from lo que in ten pairs: la sopa que preparaste, lo que preparaste."
  },
  "relative-pronouns-2": {
    "goal": "describe places in a city and give directions with relatives: la calle donde vivo, el gimnasio al que voy."
  },
  "b1d-frase-a-frase-descripciones": {
    "goal": "describe people and places without repeating a noun, moving the preposition with the relative: la amiga con la que viajé."
  },
  "b1d-ronda-relativos": {
    "goal": "choose que, quien, el que or lo que fast, with a four-step decision tree."
  },
  "b1d-habla-de-ti-personas-importantes": {
    "goal": "describe the people and places that matter to you with que, donde and con quien."
  },
  "relative-pronouns-mastery-check": {
    "goal": "show you can choose que, quien, el que or lo que in any sentence, with and without a preposition."
  },
  "b1r-build-combine-sentences": {
    "goal": "build one sentence out of two with que, donde, quien or el que: Compré una lámpara que da mucha luz."
  },
  "b1-vocabulary-practice-10": {
    "goal": "use 50 business and work words, and build word families: negociar, la negociación, el fundador, el crecimiento."
  },
  "b1-vocabulary-practice-10-part-2": {
    "goal": "use the business and work words again in new sentences: fundar, rechazar una propuesta, cumplir un plazo, la demanda."
  },
  "b1r-mission-describe-without-word": {
    "goal": "describe a thing, person or place without saying its name: Es una cosa que usas para abrir una puerta."
  },
  "b1d-dictado-relativos": {
    "goal": "write long sentences with relatives exactly as you hear them, with their accents and commas."
  },
  "b1r-dialogue-combined-pronouns": {
    "goal": "handle a chat about lending, borrowing and giving things back with two pronouns together: te lo presto, se la devolví, voy a dártelo.",
    "summary": "Préstamos, regalos y favores entre compañeros de cuarto, sin repetir ni un solo sustantivo."
  },
  "preterite-regular-verbs-1-unit-review": {
    "goal": "listen to, say and write what happened with regular preterite verbs and their accents, getting at least 8 of 10 quiz questions right."
  }
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
  for (const [slug, g] of Object.entries(B1_UNIT7_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B1_UNIT7_PATCHES: Record<string, LessonPatch> = withLatam(merge(B1_UNIT7_SWAP, manual));
