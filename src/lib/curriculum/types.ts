// Types for the curriculum engine: concepts, the per-course plugin, and
// what the validator reports. Pure data and functions only -- the engine
// runs in build scripts, on the website and in the app (synced like the
// lesson content). See docs/curriculum-architecture.md.

import type { Exercise, Lesson } from "../lessons/types";

export type ConceptType = "grammar" | "vocab" | "character" | "sound" | "function" | "register";

/** One thing a learner can know: a grammar point, a word group, a sound. */
export type Concept = {
  /** "zh.grammar.le-completed" -- course, type, name. */
  id: string;
  type: ConceptType;
  name: string;
  /** One-line English description, shown in reports and review screens. */
  gloss: string;
  /** Concepts that must be taught first. */
  requires?: string[];
  /** Module code ("A1"); taught somewhere in that module. */
  level: string;
  /** Can-do statement ids this concept contributes to. */
  canDo?: string[];
};

/** Finds a concept's surface forms in text, for the leak check. */
export type FormDetector = {
  concept: string;
  /** True if `text` (target-language text only) uses the concept. */
  test: (text: string) => boolean;
  /** "error" blocks a build; "warning" is reported only (ambiguous forms). */
  severity: "error" | "warning";
  /** Short human description for reports: "把 + object + verb". */
  label: string;
};

/** A course module as the engine sees it: its code and its lessons in order. */
export type CourseModule = { code: string; path: string; lessons: Lesson[] };

/** Everything that differs by language. */
export type CoursePlugin = {
  course: string;
  /** Grades a typed target-language answer (used to self-check items). */
  grade: (value: string, answers: string[]) => { correct: boolean; note?: string };
  /** Normalises item text for duplicate detection. */
  normalize: (text: string) => string;
  /** The target-language text in a string ("" if none) -- what detectors scan. */
  targetText: (text: string) => string;
  /** Surface-form detectors for the concept-leak check. */
  detectors: FormDetector[];
  /** Language-specific checks on one lesson (pinyin marks, etc.). */
  lessonChecks?: (lesson: Lesson) => string[];
  /** Which typed answers are in the target language (vs. English). */
  typedInTarget: (e: Exercise) => boolean;
};

export type Finding = { level: "error" | "warning"; where: string; message: string };
