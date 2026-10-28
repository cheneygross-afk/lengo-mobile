// Synced from cheneygross-afk/lengo:src/lib/it-tools/data.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Italian study tools' view of the course, read from the small JSON
// files scripts/build-italian-tools-data.ts writes from the lessons (run in
// "prebuild"). Tool pages use this instead of importing it-course.ts, whose
// lesson data would otherwise be bundled again into every route that
// imported it. Client components load the JSON on demand (the load*
// functions); server pages can use ./lessons.ts, which imports the lesson
// list directly. The Italian counterpart of src/lib/pt-tools/data.ts.

import type { WriteExercise } from "@/lib/lessons/types";

/** [slug, title, level path ("a1" ... "c2", "culture"), lesson level ("IT-A1" ... "IT-Culture")]. */
export type ItLessonRow = [slug: string, title: string, path: string, level: string];

export type ItLevelInfo = {
  path: string;
  /** Internal only ("A1", "Culture"): never shown to learners. */
  code: string;
  /** What learners see: "Beginner". */
  name: string;
  /** The CILS exam beside it ("CILS UNO"); null for the Culture module. */
  exam: string | null;
};

/** The course's levels, in course order, then the optional Culture module. */
export const IT_TOOL_LEVELS: ItLevelInfo[] = [
  { path: "a1", code: "A1", name: "Beginner", exam: "CILS A1" },
  { path: "a2", code: "A2", name: "Elementary", exam: "CILS A2" },
  { path: "b1", code: "B1", name: "Intermediate", exam: "CILS UNO" },
  { path: "b2", code: "B2", name: "Upper-intermediate", exam: "CILS DUE" },
  { path: "c1", code: "C1", name: "Advanced", exam: "CILS TRE" },
  { path: "c2", code: "C2", name: "Mastery", exam: "CILS QUATTRO" },
  { path: "culture", code: "Culture", name: "Italian Culture & Everyday Life", exam: null },
];

export function itToolLevel(path: string): ItLevelInfo | undefined {
  return IT_TOOL_LEVELS.find((l) => l.path === path);
}

/** "Beginner · CILS A1", "Italian Culture & Everyday Life". */
export function itLevelLabel(level: ItLevelInfo): string {
  return level.exam ? `${level.name} · ${level.exam}` : level.name;
}

export function itLessonHref(lesson: ItLessonRow): string {
  return `/lessons/it/${lesson[2]}/${lesson[0]}`;
}

/** Every lesson in course order (loaded on demand). */
export async function loadItLessons(): Promise<ItLessonRow[]> {
  return (await import("./data/lessons.json")).default as ItLessonRow[];
}

/** [Italian, English meanings ("; "-separated), index into the lesson list of the lesson that first teaches it]. */
export type ItVocabRow = [it: string, en: string, lesson: number];

/** The groups the vocabulary pages and the glossary list: A1-C2, then Culture as its own group. */
export const IT_VOCAB_LEVELS: ItLevelInfo[] = IT_TOOL_LEVELS;

export function itVocabLevel(path: string): ItLevelInfo | undefined {
  return itToolLevel(path);
}

/** The words and phrases first taught at a level, A to Z (loaded on demand). */
export async function loadItVocab(path: string): Promise<ItVocabRow[]> {
  switch (path) {
    case "a1":
      return (await import("./data/vocab-a1.json")).default as ItVocabRow[];
    case "a2":
      return (await import("./data/vocab-a2.json")).default as ItVocabRow[];
    case "b1":
      return (await import("./data/vocab-b1.json")).default as ItVocabRow[];
    case "b2":
      return (await import("./data/vocab-b2.json")).default as ItVocabRow[];
    case "c1":
      return (await import("./data/vocab-c1.json")).default as ItVocabRow[];
    case "c2":
      return (await import("./data/vocab-c2.json")).default as ItVocabRow[];
    case "culture":
      return (await import("./data/vocab-culture.json")).default as ItVocabRow[];
    default:
      return [];
  }
}

/** One writing task from the lessons, as scripts/build-italian-tools-data.ts writes it. */
export type ItWritingTaskRow = {
  /** "<lesson slug>-<n>". */
  id: string;
  /** The host lesson's title. */
  heading: string;
  exercise: WriteExercise;
  /** "IT-B1", "IT-Culture". */
  gradeLevel: string;
  lessonHref: string;
};

/** A level's unit writing tasks, grouped by unit. */
export type ItWritingLevel = {
  path: string;
  label: string;
  gradeLevel: string;
  units: { label: string; tasks: ItWritingTaskRow[] }[];
};

/** Every writing task in the lessons, by level and unit, Culture last (loaded on demand). */
export async function loadItWriting(): Promise<ItWritingLevel[]> {
  return (await import("./data/writing.json")).default as ItWritingLevel[];
}

/** Lowercase, accents folded, curly apostrophes straightened: "Perché" ->
 * "perche", "l’acqua" -> "l'acqua". Apply to the text searched and to the
 * query, so that a search typed without accents still finds the word. */
export function foldItalian(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’‘]/g, "'");
}
