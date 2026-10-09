// Synced from cheneygross-afk/lengo:src/lib/fr-tools/data.ts by scripts/sync-content.mjs -- edit it there, not here.
// The French study tools' view of the course, read from the small JSON
// files scripts/build-french-tools-data.ts writes from the lessons (run in
// "prebuild"). Tool pages use this instead of importing fr-course.ts, whose
// ~20 MB of lesson data would otherwise be bundled again into every route
// that imported it. Client components load the JSON on demand (the load*
// functions); server pages can use ./lessons.ts, which imports the lesson
// list directly.

/** [slug, title, level path ("a1" ... "c2", "culture"), lesson level ("FR-A1" ...)]. */
export type FrLessonRow = [slug: string, title: string, path: string, level: string];

/** [French, English meanings ("; "-separated), index into FR_LESSONS of the lesson that first teaches it]. */
export type FrVocabRow = [fr: string, en: string, lesson: number];

export type FrVocabLevel = { path: string; code: string; name: string; exam: string | null };

/** The course's levels and module, in course order. */
export const FR_VOCAB_LEVELS: FrVocabLevel[] = [
  { path: "a1", code: "A1", name: "Beginner", exam: "DELF A1" },
  { path: "a2", code: "A2", name: "Elementary", exam: "DELF A2" },
  { path: "b1", code: "B1", name: "Intermediate", exam: "DELF B1" },
  { path: "b2", code: "B2", name: "Upper-intermediate", exam: "DELF B2" },
  { path: "c1", code: "C1", name: "Advanced", exam: "DALF C1" },
  { path: "c2", code: "C2", name: "Mastery", exam: "DALF C2" },
  { path: "culture", code: "Culture", name: "Colloquial French & Culture", exam: null },
];

export function frVocabLevel(path: string): FrVocabLevel | undefined {
  return FR_VOCAB_LEVELS.find((l) => l.path === path);
}

export function frLessonHref(lesson: FrLessonRow): string {
  return `/lessons/fr/${lesson[2]}/${lesson[0]}`;
}

/** Every lesson in course order (loaded on demand). */
export async function loadFrLessons(): Promise<FrLessonRow[]> {
  return (await import("./data/lessons.json")).default as FrLessonRow[];
}

/** The words and phrases first taught at a level, A to Z (loaded on demand). */
export async function loadFrVocab(path: string): Promise<FrVocabRow[]> {
  switch (path) {
    case "a1":
      return (await import("./data/vocab-a1.json")).default as FrVocabRow[];
    case "a2":
      return (await import("./data/vocab-a2.json")).default as FrVocabRow[];
    case "b1":
      return (await import("./data/vocab-b1.json")).default as FrVocabRow[];
    case "b2":
      return (await import("./data/vocab-b2.json")).default as FrVocabRow[];
    case "c1":
      return (await import("./data/vocab-c1.json")).default as FrVocabRow[];
    case "c2":
      return (await import("./data/vocab-c2.json")).default as FrVocabRow[];
    case "culture":
      return (await import("./data/vocab-culture.json")).default as FrVocabRow[];
    default:
      return [];
  }
}

/** Lowercase, accents and ligatures folded: "Œuvre" -> "oeuvre". */
export function foldFrench(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/’/g, "'");
}
