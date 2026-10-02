// Synced from cheneygross-afk/lengo:src/lib/lessons/level-test-authoring.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, LessonSection, ListenChooseExercise, MultipleChoiceExercise } from "./types";

// Helpers for the level test files (level-test-a1.ts ... level-test-c2.ts,
// see level-tests.ts).

export type LevelTest = Pick<Lesson, "title" | "summary" | "duration" | "sections" | "exercises">;

// ---- Authoring helpers ------------------------------------------------------
// Multiple-choice options are written with the right answer first; the
// apps shuffle options for display (grading.ts optionOrder).

type Q = [question: string, options: string[], explanation: string];

/** A reading section: instructions, the text (one string per paragraph) and its questions. */
export function readingSection(heading: string, intro: string, text: string[], questions: Q[]): LessonSection {
  return {
    heading,
    body: [intro, ...text],
    checkpoint: questions.map(
      ([question, options, explanation]): MultipleChoiceExercise => ({
        type: "multiple-choice",
        question,
        options,
        correctIndex: 0,
        explanation,
      })
    ),
  };
}

/** Questions on one recording. The voice route speaks at most 200
 * characters per clip, so a recording is a list of parts and each
 * question plays the part (index into `parts`) that it is about. */
export function listeningItems(parts: string[], questions: [part: number, ...q: Q][]): ListenChooseExercise[] {
  return questions.map(([part, question, options, explanation]) => {
    const audio = parts[part];
    if (audio === undefined) throw new Error(`listeningItems: no part ${part} for "${question}"`);
    return { type: "listen-choose", audio, question, options, correctIndex: 0, explanation };
  });
}

export function mcFirst(question: string, options: string[], explanation: string): MultipleChoiceExercise {
  return { type: "multiple-choice", question, options, correctIndex: 0, explanation };
}
