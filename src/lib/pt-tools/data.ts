// Synced from cheneygross-afk/lengo:src/lib/pt-tools/data.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Brazilian Portuguese study tools' view of the course, read from the
// small JSON files scripts/build-portuguese-tools-data.ts writes from the
// lessons (run in "prebuild"). Tool pages use this instead of importing
// pt-course.ts, whose lesson data would otherwise be bundled again into
// every route that imported it. Client components load the JSON on demand
// (the load* functions); server pages can use ./lessons.ts, which imports
// the lesson list directly.

import type { WriteExercise } from "@/lib/lessons/types";

/** [slug, title, level path ("a1" ... "c2"), lesson level ("PT-A1" ...)]. */
export type PtLessonRow = [slug: string, title: string, path: string, level: string];

export type PtLevelInfo = { path: string; code: string; name: string; exam: string | null };

/** The course's levels, in course order. */
export const PT_TOOL_LEVELS: PtLevelInfo[] = [
  { path: "a1", code: "A1", name: "Beginner", exam: null },
  { path: "a2", code: "A2", name: "Elementary", exam: null },
  { path: "b1", code: "B1", name: "Intermediate", exam: "Celpe-Bras Intermediário" },
  { path: "b2", code: "B2", name: "Upper-intermediate", exam: "Celpe-Bras Intermediário Superior" },
  { path: "c1", code: "C1", name: "Advanced", exam: "Celpe-Bras Avançado" },
  { path: "c2", code: "C2", name: "Mastery", exam: "Celpe-Bras Avançado Superior" },
];

export function ptToolLevel(path: string): PtLevelInfo | undefined {
  return PT_TOOL_LEVELS.find((l) => l.path === path);
}

export function ptLessonHref(lesson: PtLessonRow): string {
  return `/lessons/pt/${lesson[2]}/${lesson[0]}`;
}

/** Every lesson in course order (loaded on demand). */
export async function loadPtLessons(): Promise<PtLessonRow[]> {
  return (await import("./data/lessons.json")).default as PtLessonRow[];
}

/** [Portuguese, English meanings ("; "-separated), index into PT_LESSONS of the lesson that first teaches it]. */
export type PtVocabRow = [pt: string, en: string, lesson: number];

/** The levels the vocabulary pages and the glossary list (the course has no culture module). */
export const PT_VOCAB_LEVELS: PtLevelInfo[] = PT_TOOL_LEVELS;

export function ptVocabLevel(path: string): PtLevelInfo | undefined {
  return ptToolLevel(path);
}

/** The words and phrases first taught at a level, A to Z (loaded on demand). */
export async function loadPtVocab(path: string): Promise<PtVocabRow[]> {
  switch (path) {
    case "a1":
      return (await import("./data/vocab-a1.json")).default as PtVocabRow[];
    case "a2":
      return (await import("./data/vocab-a2.json")).default as PtVocabRow[];
    case "b1":
      return (await import("./data/vocab-b1.json")).default as PtVocabRow[];
    case "b2":
      return (await import("./data/vocab-b2.json")).default as PtVocabRow[];
    case "c1":
      return (await import("./data/vocab-c1.json")).default as PtVocabRow[];
    case "c2":
      return (await import("./data/vocab-c2.json")).default as PtVocabRow[];
    default:
      return [];
  }
}

/** One writing task from the lessons, as scripts/build-portuguese-tools-data.ts writes it. */
export type PtWritingTaskRow = {
  /** "<lesson slug>-<n>". */
  id: string;
  /** The host lesson's title. */
  heading: string;
  exercise: WriteExercise;
  /** "PT-B1". */
  gradeLevel: string;
  lessonHref: string;
};

/** A level's unit writing tasks, grouped by unit. */
export type PtWritingLevel = {
  path: string;
  label: string;
  gradeLevel: string;
  units: { label: string; tasks: PtWritingTaskRow[] }[];
};

/** Every writing task in the lessons, by level and unit (loaded on demand). */
export async function loadPtWriting(): Promise<PtWritingLevel[]> {
  return (await import("./data/writing.json")).default as PtWritingLevel[];
}

/** Lowercase, accents and ç folded: "Você" -> "voce", "açúcar" -> "acucar".
 * Apply to the text searched and to the query, so that a search typed
 * without accents still finds the word. */
export function foldPortuguese(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/’/g, "'");
}
