// A second opinion on a typed Spanish answer the grader (grading.ts) marked
// wrong. The grader only knows the answers written into the lesson, so a
// different but equally correct answer ("Tengo veinte años" for "Yo tengo
// 20 años", another word order, a synonym) used to be rejected. Now, before
// a typed answer is marked wrong, Claude is asked whether it is right
// (POST /api/check-answer). Only the meaning and the grammar count, never
// punctuation or capitals (user rule, 2026-11-26).
//
// The website (lengo) and the mobile app (lengo-mobile) keep identical
// copies of this file at the same path.
import type { Exercise } from "./lessons/types";

export type AnswerCheckRequest = {
  /** "translate" (a sentence to write in Spanish or English) or "fill-blank". */
  kind: "translate" | "fill-blank";
  /** The instruction on the card ("Write it in Spanish."). */
  prompt: string;
  /** Translate: the sentence to translate or change. Fill-blank: the sentence with the blank. */
  source: string;
  /** Fill-blank: the English meaning or hint shown, if any. */
  hint?: string;
  /** "en-es" (answer in Spanish), "es-en" (answer in English). */
  direction: "en-es" | "es-en";
  /** The answers the lesson accepts. */
  answers: string[];
  /** What the learner typed. */
  typed: string;
  /** "A1" ... "C2". */
  level: string;
};

export type AnswerCheckResult = { correct: boolean; note?: string };

const MAX = 400;

/** The request for an exercise and what was typed, or null if this kind of
 * item isn't one Claude should judge. Only Spanish-course items: a "Correct
 * the punctuation" task is about the very marks Claude ignores, and
 * dictation is about writing exactly what was heard. */
export function answerCheckRequest(exercise: Exercise, typed: string, lang: string, level: string): AnswerCheckRequest | null {
  if (!lang.startsWith("es") || !typed.trim() || typed.length > MAX) return null;
  if (exercise.type === "translate") {
    if (exercise.source && isMarksTask(exercise.source, [exercise.answer, ...(exercise.altAnswers ?? [])])) return null;
    return {
      kind: "translate",
      prompt: exercise.prompt,
      source: exercise.source,
      direction: exercise.direction === "es-en" ? "es-en" : "en-es",
      answers: [exercise.answer, ...(exercise.altAnswers ?? [])],
      typed: typed.trim(),
      level,
    };
  }
  if (exercise.type === "fill-blank") {
    return {
      kind: "fill-blank",
      prompt: exercise.prompt,
      source: exercise.sentence,
      hint: [exercise.en, exercise.hint].filter(Boolean).join(" · ") || undefined,
      direction: "en-es",
      answers: [exercise.answer, ...(exercise.altAnswers ?? [])],
      typed: typed.trim(),
      level,
    };
  }
  return null;
}

// The source and an answer differ only in punctuation or capitals: the task
// is to fix those, so they matter.
function isMarksTask(source: string, answers: string[]): boolean {
  const letters = (s: string) => s.normalize("NFC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  return answers.some((a) => a.trim() !== source.trim() && letters(a) === letters(source));
}

export function parseAnswerCheckRequest(raw: unknown): AnswerCheckRequest | string {
  if (!raw || typeof raw !== "object") return "Bad request.";
  const r = raw as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.slice(0, MAX) : "");
  const kind = r.kind === "fill-blank" ? "fill-blank" : r.kind === "translate" ? "translate" : null;
  const answers = Array.isArray(r.answers) ? r.answers.filter((a): a is string => typeof a === "string").slice(0, 12).map((a) => a.slice(0, MAX)) : [];
  const typed = str(r.typed).trim();
  if (!kind || !answers.length || !typed) return "Bad request.";
  return {
    kind,
    prompt: str(r.prompt),
    source: str(r.source),
    hint: str(r.hint) || undefined,
    direction: r.direction === "es-en" ? "es-en" : "en-es",
    answers,
    typed,
    level: /^[ABC][12]$/.test(str(r.level)) ? str(r.level) : "A1",
  };
}

export const ANSWER_CHECK_SCHEMA = {
  type: "object",
  properties: {
    correct: { type: "boolean" },
    note: { type: "string" },
  },
  required: ["correct", "note"],
  additionalProperties: false,
};

export const ANSWER_CHECK_SYSTEM = `You mark one answer in a Spanish course for English speakers. The learner typed an answer the course's answer key does not list. Decide whether a fair Spanish teacher would accept it.

Accept it (correct: true) when it says the same thing as the task asks and its grammar and spelling are right, even if it differs from the key in:
- punctuation, capital letters, spacing, opening ¿ or ¡, quotes or dashes (never mark these);
- word choice (a synonym, another common way to say it), word order, or a subject pronoun added or left out;
- tú, usted or ustedes where the English "you" doesn't say which; vosotros is correct Spanish too;
- standard Latin American or Spain vocabulary;
- numbers written as digits or words, unless the task is to write the number in words;
- contractions or no contractions (English answers), British or American spelling.

Reject it (correct: false) when:
- the meaning differs from the task (another tense, person, number, gender, a missing or extra idea);
- it doesn't use the form or structure the instruction asks for, or the grammar point the fill-in sentence clearly tests (if the key uses the subjunctive because the sentence needs it, the indicative is wrong);
- it has a grammar or spelling mistake, including a missing or wrong accent mark that makes another word (esta for está, hablo for habló, tu for tú);
- for a fill-in: the completed sentence is wrong, unnatural, or doesn't match the English meaning or hint given.

note: when correct, at most 12 plain English words, e.g. "Also correct." or "Also correct: another common way to say it." When not correct, at most 20 plain English words saying what is off, with no grammar jargon. Never mention the answer key.`;

export function answerCheckMessage(r: AnswerCheckRequest): string {
  const lines = [
    `Level: ${r.level}`,
    `Task type: ${r.kind === "fill-blank" ? "fill in the blank (the learner types only what goes in ___)" : r.direction === "es-en" ? "write it in English" : "write it in Spanish"}`,
    r.prompt && `Instruction: ${r.prompt}`,
    r.source && `${r.kind === "fill-blank" ? "Sentence" : "Given"}: ${r.source}`,
    r.hint && `Meaning or hint shown: ${r.hint}`,
    `Answer key: ${r.answers.map((a) => `«${a}»`).join(" or ")}`,
    `Learner's answer: «${r.typed}»`,
  ];
  return lines.filter(Boolean).join("\n");
}

export function parseAnswerCheck(text: string): AnswerCheckResult | null {
  try {
    const v = JSON.parse(text) as { correct?: unknown; note?: unknown };
    if (typeof v.correct !== "boolean") return null;
    const note = typeof v.note === "string" ? v.note.trim().slice(0, 200) : "";
    return { correct: v.correct, note: note || undefined };
  } catch {
    return null;
  }
}
