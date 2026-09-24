import type {
  Exercise,
  FillBlankExercise,
  LessonExample,
  LessonSection,
  MatchingExercise,
  MultiSelectExercise,
  MultipleChoiceExercise,
  TranslateExercise,
  WordOrderExercise,
} from "./types";
import type { AnchoredLesson } from "./weave";

// Small constructors for the reinforcement-lesson files (a1-reinforcement.ts
// and friends). They build the exact same Lesson/Exercise objects the base
// level files spell out as raw object literals -- nothing downstream can
// tell the difference -- but keep several hundred lessons of hand-authored
// content compact enough to read and review.
//
// Instruction language follows each level's convention: A1/A2 teach in
// English, B1 upward in Spanish. `authoring("en" | "es")` returns helpers
// whose default prompts ("Translate to Spanish." / "Traduce al español.")
// match.

type Lang = "en" | "es";

const DEFAULT_PROMPTS: Record<Lang, { toEs: string; toEn: string; order: string }> = {
  en: { toEs: "Translate to Spanish.", toEn: "Translate to English.", order: "Put the words in order." },
  es: { toEs: "Traduce al español.", toEn: "Traduce al inglés.", order: "Ordena las palabras." },
};

export function authoring(lang: Lang) {
  const p = DEFAULT_PROMPTS[lang];

  const mc = (question: string, options: string[], correctIndex: number, explanation: string): MultipleChoiceExercise => ({
    type: "multiple-choice",
    question,
    options,
    correctIndex,
    explanation,
  });

  const ms = (question: string, options: string[], correctIndexes: number[], explanation: string): MultiSelectExercise => ({
    type: "multi-select",
    question,
    options,
    correctIndexes,
    explanation,
  });

  const fb = (prompt: string, sentence: string, answer: string, explanation: string, hint?: string): FillBlankExercise => ({
    type: "fill-blank",
    prompt,
    sentence,
    answer,
    ...(hint ? { hint } : {}),
    explanation,
  });

  // English -> Spanish.
  const toEs = (source: string, answer: string, explanation: string, altAnswers?: string[], prompt?: string): TranslateExercise => ({
    type: "translate",
    direction: "en-es",
    prompt: prompt ?? p.toEs,
    source,
    answer,
    ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
    explanation,
  });

  // Spanish -> English.
  const toEn = (source: string, answer: string, explanation: string, altAnswers?: string[], prompt?: string): TranslateExercise => ({
    type: "translate",
    direction: "es-en",
    prompt: prompt ?? p.toEn,
    source,
    answer,
    ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
    explanation,
  });

  // The sentence is split on spaces into the word tiles, in correct order.
  const wo = (sentence: string, explanation: string, translation?: string, prompt?: string): WordOrderExercise => ({
    type: "word-order",
    prompt: prompt ?? p.order,
    words: sentence.split(" ").filter(Boolean),
    ...(translation ? { translation } : {}),
    explanation,
  });

  const mt = (instructions: string, pairs: [string, string][], explanation: string): MatchingExercise => ({
    type: "matching",
    instructions,
    pairs: pairs.map(([left, right]) => ({ left, right })),
    explanation,
  });

  const sec = (
    heading: string,
    body: string | string[],
    examples: ([string] | [string, string])[],
    checkpoint: Exercise[]
  ): LessonSection => ({
    heading,
    body: Array.isArray(body) ? body : [body],
    ...(examples.length
      ? { examples: examples.map(([es, en]): LessonExample => (en ? { es, en } : { es })) }
      : {}),
    ...(checkpoint.length ? { checkpoint } : {}),
  });

  return { mc, ms, fb, toEs, toEn, wo, mt, sec };
}

type Level = AnchoredLesson["lesson"]["level"];

/** Builds an AnchoredLesson for `weaveLessons` -- `after` is the slug of the
 * existing lesson this one is placed directly after. */
export function anchored(
  level: Level,
  after: string,
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: LessonSection[],
  exercises: Exercise[]
): AnchoredLesson {
  return { after, lesson: { slug, level, title, summary, duration, sections, exercises } };
}
