// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit3.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B1 Unit 3 (comparing: more, less, as much · the most and
// -ísimo · better, worse, older, younger): content fixes from Claude's audit
// in Ricardo's format (Claude Feedback/Spanish (new course)/B1 Intermediate/
// Unit 03). Question numbers are the lessons' own. Only content changes here:
// what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the spiral
// review, Cumulative Circuit 2 and the Elementary Challenge (the future and
// por / para) to B1 Unit 4; es importante que (the subjunctive) to B2 Unit 3.
// The two Comparisons & Superlatives lessons that teach the unit now come
// first, before the drills that say "remember the rule". The lessons that stay
// use Latin American words as their main answers (departamento, carro,
// celular, papas, mesero) with the Spain words still accepted, and say what
// each one practices in its goal.
import type { LessonPatch } from "./patch";
import { B1_UNIT3_LATAM, B1_UNIT3_SWAP } from "./b1-unit3-latam";

const manual: Record<string, LessonPatch> = {
  "a2d-tan-tanto-drill": {
    goal: "choose tan, tanto, tanta, tantos or tantas by looking at the next word: tan alto, tanta gente, trabajo tanto como tú.",
  },
  "a2r-contrast-tan-tanto": {
    goal: "tell tan from tanto side by side, and use them alone for so and so much: ¡estoy tan cansado!, ¡tengo tanto trabajo!",
  },
  "a2d-isimo-and-compare": {
    goal: "switch quickly between -ísimo and comparisons: carísimo, facilísimo, más barato que, tan caro como.",
  },
  "a2d-superlative-build": {
    goal: "build superlatives step by step: el restaurante más caro de la ciudad, la mejor película del año, el mayor de la familia.",
  },
  "a2r-error-hunt-comparisons": {
    goal: "find and fix the four classic slips: más mejor, tan … que, el más alto en la clase, más que cien.",
  },
  "a2d-irregular-comparatives": {
    goal: "choose between mejor and más bueno, mayor and más grande, and use mejores, peores, mayores and menores.",
  },
  "a2r-mission-comparing-apartments": {
    goal: "compare two apartments by size, price, location and light, and decide which one to rent.",
  },
  "a2d-restaurant-ordering-pattern": {
    goal: "order a meal politely: para mí…, quería…, ¿me trae…?, de primero, de segundo and de postre.",
  },
  "a2d-restaurant-ordering-pattern-part-2": {
    goal: "order every course of a meal and pay, with polite questions: ¿nos trae…?, ¿se puede pagar con tarjeta?",
    exercises: {
      replace: {
        // Was "Tráigame un cuchillo." (a usted command, B2 Unit 3).
        13: {
          type: "translate",
          direction: "en-es",
          prompt: "Make it a polite question for the waiter.",
          source: "Quiero un cuchillo.",
          answer: "¿Me trae un cuchillo?",
          altAnswers: ["¿Me trae un cuchillo, por favor?", "¿Me podría traer un cuchillo?", "¿Me puede traer un cuchillo?", "¿Me podría traer un cuchillo, por favor?", "¿Me puede traer un cuchillo, por favor?"],
          explanation: "A present-tense question asks instead of demanding, which is what sounds polite: ¿me trae…?",
        },
      },
    },
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
  for (const [slug, g] of Object.entries(B1_UNIT3_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B1_UNIT3_PATCHES: Record<string, LessonPatch> = withLatam(merge(B1_UNIT3_SWAP, manual));
