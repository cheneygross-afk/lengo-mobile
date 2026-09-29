// Synced from cheneygross-afk/lengo:src/lib/lessons/levels.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { LEVEL_EXIT_SLUGS } from "./sequencing";

// The six core Spanish levels as both apps name and count them: the
// lessons page and level headers on the website, the level cards and
// lesson lists in the mobile app. One copy, so the two can't disagree on
// a level's name or on which lessons count toward its progress.

export type SpanishLevelPath = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type SpanishLevelInfo = {
  levelPath: SpanishLevelPath;
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  name: string;
  /** "B2 · Upper-intermediate" -- the code and name, shown together everywhere. */
  label: string;
  description: string;
};

const level = (
  levelPath: SpanishLevelPath,
  code: SpanishLevelInfo["code"],
  name: string,
  description: string
): SpanishLevelInfo => ({ levelPath, code, name, label: `${code} · ${name}`, description });

export const SPANISH_LEVELS: SpanishLevelInfo[] = [
  level(
    "a1",
    "A1",
    "Beginner",
    "The building blocks: greetings, pronouns, ser vs. estar, present-tense verbs, questions, and everyday vocabulary."
  ),
  level("a2", "A2", "Elementary", "Past tenses, comparisons, direct/indirect object pronouns, and more everyday situations."),
  level("b1", "B1", "Intermediate", "Subjunctive mood basics, future and conditional tenses, and more complex storytelling."),
  level(
    "b2",
    "B2",
    "Upper-intermediate",
    "Advanced subjunctive, reported speech, and nuanced connectors for fluent conversation."
  ),
  level(
    "c1",
    "C1",
    "Advanced",
    "Advanced grammar mastery: subjunctive nuance, nominalization, gerund vs. infinitive, and native-level passive constructions."
  ),
  level(
    "c2",
    "C2",
    "Mastery",
    "Specialized registers, idiomatic fluency, and precision for professional and academic Spanish."
  ),
];

export function spanishLevel(levelPath: SpanishLevelPath): SpanishLevelInfo {
  const found = SPANISH_LEVELS.find((l) => l.levelPath === levelPath);
  if (!found) throw new Error(`levels: unknown level "${levelPath}"`);
  return found;
}

/** The lessons that count toward a level's progress: everything but the
 * optional Extra Practice block (see sequencing.ts). */
export function requiredLessons(lessons: Lesson[]): Lesson[] {
  return lessons.filter((l) => !l.optional);
}

const EXIT_SLUGS = new Set<string>(Object.values(LEVEL_EXIT_SLUGS));

/** The lesson to offer after lessons[index], or null when it ends the
 * level (its exit test), which shows the level-complete ending instead.
 * Optional Extra Practice lessons are skipped unless the learner is
 * already in them. */
export function nextLessonInPath(lessons: Lesson[], index: number): Lesson | null {
  const lesson = lessons[index];
  if (!lesson || EXIT_SLUGS.has(lesson.slug)) return null;
  return lessons.slice(index + 1).find((l) => lesson.optional || !l.optional) ?? null;
}
