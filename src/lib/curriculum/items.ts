// Synced from cheneygross-afk/lengo:src/lib/curriculum/items.ts by scripts/sync-content.mjs -- edit it there, not here.
// The item bank: every question in the course, with its derived tags.
// Tags written on an exercise (`meta`) win; otherwise concepts come from
// the lesson's tags and skill/difficulty from the exercise type.

import type { Exercise, ExerciseMeta, Lesson } from "../lessons/types";

export type Item = {
  /** Stable id: `${lessonSlug}#c${section}.${i}` for checkpoints, `#${i}` for the final review. */
  id: string;
  lessonSlug: string;
  exercise: Exercise;
  concepts: string[];
  skill: NonNullable<ExerciseMeta["skill"]>;
  difficulty: 1 | 2 | 3 | 4;
  /** True if the learner types or says the target language. */
  production: boolean;
  /** "checkpoint" items sit inside a section; "final" in the lesson's review. */
  place: "checkpoint" | "final";
};

function defaultSkill(e: Exercise): Item["skill"] {
  switch (e.type) {
    case "listen-choose":
    case "dictation":
      return "listening";
    case "speak":
      return "speaking";
    case "write":
      return "writing";
    default:
      return "grammar";
  }
}

function defaultDifficulty(e: Exercise, typedInTarget: boolean): Item["difficulty"] {
  switch (e.type) {
    case "multiple-choice":
    case "matching":
    case "listen-choose":
      return 1;
    case "multi-select":
    case "word-order":
      return 2;
    case "fill-blank":
      return e.en ? 3 : 2;
    case "translate":
      return typedInTarget ? 3 : 2;
    case "dictation":
      return 3;
    case "speak":
      return e.prompt ? 4 : 2;
    case "write":
      return 4;
  }
}

/** The concepts a lesson's items are about when they don't say. */
export function lessonConcepts(l: Lesson): string[] {
  return [...(l.teaches ?? []), ...(l.reviews ?? [])];
}

export function lessonItems(l: Lesson, typedInTarget: (e: Exercise) => boolean): Item[] {
  const out: Item[] = [];
  const base = lessonConcepts(l);
  const make = (e: Exercise, id: string, place: Item["place"]): Item => {
    const target = typedInTarget(e);
    return {
      id,
      lessonSlug: l.slug,
      exercise: e,
      concepts: e.meta?.concepts ?? base,
      skill: e.meta?.skill ?? defaultSkill(e),
      difficulty: e.meta?.difficulty ?? defaultDifficulty(e, target),
      production: target || e.type === "speak" || e.type === "write" || e.type === "dictation",
      place,
    };
  };
  l.sections.forEach((s, si) => (s.checkpoint ?? []).forEach((e, i) => out.push(make(e, `${l.slug}#c${si + 1}.${i + 1}`, "checkpoint"))));
  l.exercises.forEach((e, i) => out.push(make(e, `${l.slug}#${i + 1}`, "final")));
  return out;
}

/** Every string in an exercise a learner reads (prompt, options, answers). */
export function exerciseTexts(e: Exercise, distractors = true): string[] {
  switch (e.type) {
    case "multiple-choice":
      return [e.question, ...(distractors ? e.options : [e.options[e.correctIndex]]), e.explanation];
    case "multi-select":
      return [e.question, ...(distractors ? e.options : e.correctIndexes.map((i) => e.options[i])), e.explanation];
    case "listen-choose":
      return [e.audio, e.question, ...(distractors ? e.options : [e.options[e.correctIndex]]), e.explanation];
    case "fill-blank":
      return [e.prompt, e.sentence, e.answer, ...(e.altAnswers ?? []), e.explanation, e.en ?? ""];
    case "translate":
      return [e.prompt, e.source, e.answer, ...(e.altAnswers ?? []), e.explanation];
    case "word-order":
      return [e.prompt, e.words.join(""), e.translation ?? "", e.explanation];
    case "matching":
      return [e.instructions, ...e.pairs.flatMap((p) => [p.left, p.right]), e.explanation];
    case "dictation":
      return [e.audio, e.answer ?? "", e.explanation];
    case "speak":
      return [e.text, e.prompt ?? "", e.tip ?? "", e.explanation];
    case "write":
      return [e.prompt, e.modelAnswer, ...e.rubric, e.explanation];
  }
}

/** The text a learner sees as the question (not answers or explanations). */
export function promptText(e: Exercise): string {
  switch (e.type) {
    case "multiple-choice":
    case "multi-select":
      return e.question;
    case "listen-choose":
      return `${e.audio} ${e.question}`;
    case "fill-blank":
      return `${e.prompt} ${e.sentence}`;
    case "translate":
      return `${e.prompt} ${e.source}`;
    case "word-order":
      return e.translation ?? e.prompt;
    case "matching":
      return e.instructions;
    case "dictation":
      return "";
    case "speak":
      return e.prompt ?? e.text;
    case "write":
      return e.prompt;
  }
}

/**
 * Every text in a lesson: section bodies, examples, and all its exercises.
 * With distractors false, wrong multiple-choice options are left out --
 * they are often deliberately broken sentences, not forms the lesson uses.
 */
export function lessonTexts(l: Lesson, distractors = true): string[] {
  const out: string[] = [l.title, l.summary];
  for (const s of l.sections) {
    out.push(s.heading, ...s.body);
    for (const ex of s.examples ?? []) out.push(ex.es, ex.en ?? "");
    for (const e of s.checkpoint ?? []) out.push(...exerciseTexts(e, distractors));
  }
  for (const e of l.exercises) out.push(...exerciseTexts(e, distractors));
  return out;
}
