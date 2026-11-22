// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit5.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B1 Unit 5 (-mente words · telling a friend what to do · hace +
// time): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/B1 Intermediate/Unit 05). Only content changes
// here: what is taught, asked and accepted. The answer checker and the rubric
// are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the four
// directions lessons (usted commands: siga, gire, cruce) to B2 Unit 3; Two
// Pronouns with Commands (both parts), Cumulative Circuit 6 (usted commands,
// me gustaría) and A Week in Buenos Aires (both parts) to B2 Unit 4. The tú
// command lessons that stay teach one pronoun on the end (llámame, dime,
// hazlo); two pronouns (dámelo) wait for B2 Unit 4. Comparisons say "el de
// Ana" instead of el tuyo (possessive pronouns are B1 Unit 6). Every lesson
// says what it practices in its goal.
import type { LessonPatch } from "./patch";
import { B1_UNIT5_LATAM, B1_UNIT5_SWAP } from "./b1-unit5-latam";

const manual: Record<string, LessonPatch> = {
  "a2d-cumulative-circuit-3-unit-review": {
    exercises: {
      replace: {
        // Was "Siga recto y gire a la derecha." (usted commands, B2 Unit 3); it reached the warm-ups.
        4: {
          type: "fill-blank",
          prompt: "How do you say the bold words in Spanish?",
          sentence: "___ derecho y dobla a la derecha.",
          answer: "Sigue",
          en: "[Keep going] straight and turn right. (to a friend)",
          altAnswers: ["Continúa"],
          explanation: "To a friend, the tú command is the él form of the present: él sigue → ¡Sigue! Seguir keeps its stem change (e → i).",
        },
      },
    },
  },
  "mente-adverbs-1": {
    "goal": "form -mente words from the feminine form of a describing word, and keep its written accent: rápidamente, fácilmente."
  },
  "mente-adverbs-2": {
    "goal": "join two -mente words (clara y lentamente) and use the most common ones: realmente, finalmente, totalmente."
  },
  "a2r-contrast-adjective-adverb": {
    "goal": "choose between a describing word and a -ly word: rápido or rápidamente, bueno or bien, malo or mal."
  },
  "a2d-mente-build": {
    "goal": "build -mente words step by step and put them in the sentence: fácil → fácilmente, clara y lentamente."
  },
  "personal-a-negation-mente-drill-1": {
    "goal": "practice when to use the personal a (veo a mi hermana) and when to leave it out (busco mi celular, tengo dos hermanos)."
  },
  "personal-a-negation-mente-drill-2": {
    "goal": "practice negative words and the double negative: no… nada, no… nadie, no… nunca, ningún."
  },
  "personal-a-negation-mente-drill-3": {
    "goal": "practice negative words before the verb (nadie, nunca), -mente words, and dropping -mente on the first of two: rápida y fácilmente."
  },
  "a2r-spiral-a-negation-adverbs": {
    "goal": "mix the personal a, negative words and -mente words with the past tenses and pronouns you already know."
  },
  "a2d-mixed-a-negation-mente": {
    "goal": "practice the personal a, negative words (no… nada, nadie, nunca) and -mente words in one mixed round."
  },
  "a2g-tu-commands-regular": {
    "goal": "tell a friend what to do with regular tú commands (habla, come, escribe) and put one pronoun on the end: llámame, siéntate.",
    "summary": "Habla, come, escribe: the affirmative tú command is the él form of the present. Plus where one object or reflexive pronoun goes: llámame, siéntate."
  },
  "a2g-tu-commands-irregular": {
    "goal": "use the eight short tú commands (di, haz, ve, pon, sal, sé, ten, ven) on their own and with one pronoun: dime, hazlo, ponte.",
    "summary": "The eight irregular tú commands you'll hear every day, alone and with one pronoun attached: dime, hazlo, vete, ponte, ven aquí."
  },
  "a2g-hace-que-desde-hace": {
    "goal": "say how long something has been going on (hace dos años que vivo aquí, desde hace) and how long ago it happened (llegué hace dos años)."
  },
  "a2-common-words-goals-rules": {
    "goal": "use words for work and plans (el objetivo, la regla, obtener, utilizar) and linking words like debido a and apenas."
  },
  "b1-vocabulary-practice-8": {
    "goal": "use words for news and events (el titular, la polémica, el veredicto) and make nouns from verbs: evacuar → la evacuación."
  },
  "b1-vocabulary-practice-8-part-2": {
    "goal": "review the news words in new sentences: rectificar, corroborar, donar, causar daños."
  },
  "a2g-pedir-vs-preguntar": {
    "goal": "choose between pedir (ask for something) and preguntar (ask a question), and use hacer una pregunta and preguntar por."
  },
  "a2r-challenge-big-error-hunt": {
    "goal": "spot and fix one error per sentence across the earlier topics: tenses, irregular stems, pronouns, por and para, comparisons, the personal a and double negatives."
  },
  "a2r-challenge-build-a-sentence": {
    "goal": "build long sentences with pronouns, both past tenses and linking words, with every piece in its place."
  },
  "a2r-challenge-story-chain": {
    "goal": "write a story one sentence at a time, choosing between the preterite and the imperfect in every link."
  },
  "a2d-cumulative-circuit-5": {
    "goal": "describe how people were and how they are now, with ser and estar, the imperfect, comparisons and -mente words."
  },
  "a2r-spiral-pronouns-comparisons-future": {
    "goal": "plan a picnic in a group chat with pronouns, comparisons, the future, por and para, negative words and -mente words."
  },
  "a2r-challenge-comparisons-por-para": {
    "goal": "mix comparisons, superlatives, the future, por and para, negative words and -mente words in one last round."
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
  for (const [slug, g] of Object.entries(B1_UNIT5_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B1_UNIT5_PATCHES: Record<string, LessonPatch> = withLatam(merge(B1_UNIT5_SWAP, manual));
