// Synced from cheneygross-afk/lengo:src/lib/de-tools/data.ts by scripts/sync-content.mjs -- edit it there, not here.
// The German study tools' view of the course, read from the small JSON
// files scripts/build-german-tools-data.ts writes from the lessons (run in
// "prebuild"). Tool pages use this instead of importing de-course.ts, whose
// lesson data would otherwise be bundled again into every route that
// imported it. Client components load the JSON on demand (the load*
// functions); server pages can use ./lessons.ts, which imports the lesson
// list directly.

/** [slug, title, level path ("a1" ... "c2", "culture"), lesson level ("DE-A1" ...)]. */
export type DeLessonRow = [slug: string, title: string, path: string, level: string];

/** [German, English meanings ("; "-separated), index into DE_LESSONS of the lesson that first teaches it]. */
export type DeVocabRow = [de: string, en: string, lesson: number];

export type DeVocabLevel = { path: string; code: string; name: string; exam: string | null };

/** The course's levels and module, in course order. */
export const DE_VOCAB_LEVELS: DeVocabLevel[] = [
  { path: "a1", code: "A1", name: "Beginner", exam: "Goethe-Zertifikat A1" },
  { path: "a2", code: "A2", name: "Elementary", exam: "Goethe-Zertifikat A2" },
  { path: "b1", code: "B1", name: "Intermediate", exam: "Goethe-Zertifikat B1" },
  { path: "b2", code: "B2", name: "Upper-intermediate", exam: "Goethe-Zertifikat B2" },
  { path: "c1", code: "C1", name: "Advanced", exam: "Goethe-Zertifikat C1" },
  { path: "c2", code: "C2", name: "Mastery", exam: "Goethe-Zertifikat C2" },
  { path: "culture", code: "Culture", name: "Colloquial German & Culture", exam: null },
];

export function deVocabLevel(path: string): DeVocabLevel | undefined {
  return DE_VOCAB_LEVELS.find((l) => l.path === path);
}

export function deLessonHref(lesson: DeLessonRow): string {
  return `/lessons/de/${lesson[2]}/${lesson[0]}`;
}

/** Every lesson in course order (loaded on demand). */
export async function loadDeLessons(): Promise<DeLessonRow[]> {
  return (await import("./data/lessons.json")).default as DeLessonRow[];
}

/** The words and phrases first taught at a level, A to Z (loaded on demand). */
export async function loadDeVocab(path: string): Promise<DeVocabRow[]> {
  switch (path) {
    case "a1":
      return (await import("./data/vocab-a1.json")).default as DeVocabRow[];
    case "a2":
      return (await import("./data/vocab-a2.json")).default as DeVocabRow[];
    case "b1":
      return (await import("./data/vocab-b1.json")).default as DeVocabRow[];
    case "b2":
      return (await import("./data/vocab-b2.json")).default as DeVocabRow[];
    case "c1":
      return (await import("./data/vocab-c1.json")).default as DeVocabRow[];
    case "c2":
      return (await import("./data/vocab-c2.json")).default as DeVocabRow[];
    case "culture":
      return (await import("./data/vocab-culture.json")).default as DeVocabRow[];
    default:
      return [];
  }
}

/** Lowercase, umlauts and ß folded: "Straße" -> "strasse", "Mädchen" ->
 * "madchen". Apply to the text searched; search with deQueryForms. */
export function foldGerman(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFC")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss")
    .replace(/’/g, "'");
}

/** The folded forms of a search, so that "Mädchen", "Madchen" and
 * "Maedchen" all find "Mädchen": the query folded as typed, and (when it has
 * them) with ae, oe and ue read as umlauts. Both are tried, since ue is also
 * just u + e ("Feuer", "Museum"). */
export function deQueryForms(query: string): string[] {
  const folded = foldGerman(query);
  const umlauts = folded.replace(/ae/g, "a").replace(/oe/g, "o").replace(/ue/g, "u");
  return umlauts === folded ? [folded] : [folded, umlauts];
}
