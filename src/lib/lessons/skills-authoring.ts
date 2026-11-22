// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-authoring.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DictationExercise, ListenChooseExercise, SpeakExercise, WriteExercise } from "./types";

// Small constructors for the listening, speaking and writing exercises
// (see types.ts), in the same spirit as authoring.ts: they build exactly
// the objects the level files would spell out by hand.

/** Listen and choose: `audio` is spoken, the learner picks an option. */
export const lc = (
  audio: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string
): ListenChooseExercise => ({ type: "listen-choose", audio, question, options, correctIndex, explanation });

/** Dictation: the learner types what they hear. The answer is the audio
 * itself unless the spelling in `answer` differs (numbers, etc.). */
export const dict = (audio: string, explanation: string, altAnswers?: string[], answer?: string): DictationExercise => ({
  type: "dictation",
  audio,
  ...(answer ? { answer } : {}),
  ...(altAnswers && altAnswers.length ? { altAnswers } : {}),
  explanation,
});

/** Speak (shadowing): hear the model, record yourself, compare. */
/** Say it in Spanish from an English cue (auditor, 2026-11-20): the Spanish
 * stays hidden until the learner has said it, so they produce it rather
 * than read it. The tip shows once the answer does. */
export const sayIt = (text: string, en: string, tip: string, explanation: string): SpeakExercise => ({
  type: "speak",
  prompt: `Say it in Spanish: "${en}"`,
  text,
  tip,
  explanation,
});

export const spk = (text: string, tip: string, explanation: string): SpeakExercise => ({
  type: "speak",
  text,
  tip,
  explanation,
});

/** Free writing with a rubric and a model answer. */
export const wr = (
  prompt: string,
  [minWords, maxWords]: [number, number],
  rubric: string[],
  modelAnswer: string,
  explanation: string
): WriteExercise => ({ type: "write", prompt, minWords, maxWords, rubric, modelAnswer, explanation });
