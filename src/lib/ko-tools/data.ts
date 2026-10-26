// Synced from cheneygross-afk/lengo:src/lib/ko-tools/data.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Korean study tools' view of the course, read from the small JSON
// files scripts/build-korean-tools-data.ts writes from the lessons (run in
// "prebuild"). Tool pages use this instead of importing ko-course.ts,
// whose lesson data would otherwise be bundled again into every route that
// imported it. Client components load the JSON on demand (the load*
// functions); server pages can use ./lessons.ts, which imports the lesson
// list directly. The Korean counterpart of src/lib/pt-tools/data.ts.

import type { WriteExercise } from "@/lib/lessons/types";

/** [slug, title, level path ("hangul", "a1" ... "c2", "culture"), lesson level ("KO-Hangul", "KO-A1" ... "KO-Culture")]. */
export type KoLessonRow = [slug: string, title: string, path: string, level: string];

export type KoLevelInfo = {
  path: string;
  /** Internal only ("A1", "Culture"): never shown to learners. */
  code: string;
  /** What learners see: "Beginner". */
  name: string;
  /** The TOPIK level beside it ("TOPIK 1"); null for the Hangul and Culture modules. */
  topik: string | null;
};

/** The course's modules and levels, in course order: Hangul, A1-C2, then the optional Culture module. */
export const KO_TOOL_LEVELS: KoLevelInfo[] = [
  { path: "hangul", code: "Hangul", name: "Hangul", topik: null },
  { path: "a1", code: "A1", name: "Beginner", topik: "TOPIK 1" },
  { path: "a2", code: "A2", name: "Elementary", topik: "TOPIK 2" },
  { path: "b1", code: "B1", name: "Intermediate", topik: "TOPIK 3" },
  { path: "b2", code: "B2", name: "Upper-intermediate", topik: "TOPIK 4" },
  { path: "c1", code: "C1", name: "Advanced", topik: "TOPIK 5" },
  { path: "c2", code: "C2", name: "Mastery", topik: "TOPIK 6" },
  { path: "culture", code: "Culture", name: "Culture & Everyday Life", topik: null },
];

export function koToolLevel(path: string): KoLevelInfo | undefined {
  return KO_TOOL_LEVELS.find((l) => l.path === path);
}

/** "Beginner · TOPIK 1", "Culture & Everyday Life". */
export function koLevelLabel(level: KoLevelInfo): string {
  return level.topik ? `${level.name} · ${level.topik}` : level.name;
}

export function koLessonHref(lesson: KoLessonRow): string {
  return `/lessons/ko/${lesson[2]}/${lesson[0]}`;
}

/** Every lesson in course order (loaded on demand). */
export async function loadKoLessons(): Promise<KoLessonRow[]> {
  return (await import("./data/lessons.json")).default as KoLessonRow[];
}

/** [Korean, English meanings ("; "-separated), index into the lesson list of the lesson where it's first met]. */
export type KoVocabRow = [ko: string, en: string, lesson: number];

/** The groups the vocabulary pages and the glossary list: A1-C2, then
 * Culture as its own group. The Hangul module teaches letters, not
 * vocabulary, so it has no list. */
export const KO_VOCAB_LEVELS: KoLevelInfo[] = KO_TOOL_LEVELS.filter((l) => l.path !== "hangul");

export function koVocabLevel(path: string): KoLevelInfo | undefined {
  return KO_VOCAB_LEVELS.find((l) => l.path === path);
}

/** The words and phrases first met at a level, in 가나다 order (loaded on demand). */
export async function loadKoVocab(path: string): Promise<KoVocabRow[]> {
  switch (path) {
    case "a1":
      return (await import("./data/vocab-a1.json")).default as KoVocabRow[];
    case "a2":
      return (await import("./data/vocab-a2.json")).default as KoVocabRow[];
    case "b1":
      return (await import("./data/vocab-b1.json")).default as KoVocabRow[];
    case "b2":
      return (await import("./data/vocab-b2.json")).default as KoVocabRow[];
    case "c1":
      return (await import("./data/vocab-c1.json")).default as KoVocabRow[];
    case "c2":
      return (await import("./data/vocab-c2.json")).default as KoVocabRow[];
    case "culture":
      return (await import("./data/vocab-culture.json")).default as KoVocabRow[];
    default:
      return [];
  }
}

/** One writing task from the lessons, as scripts/build-korean-tools-data.ts writes it. */
export type KoWritingTaskRow = {
  /** "<lesson slug>-<n>". */
  id: string;
  /** The host lesson's title. */
  heading: string;
  exercise: WriteExercise;
  /** "KO-B1", "KO-Culture". */
  gradeLevel: string;
  lessonHref: string;
};

/** A level's unit writing tasks, grouped by unit. */
export type KoWritingLevel = {
  path: string;
  label: string;
  gradeLevel: string;
  units: { label: string; tasks: KoWritingTaskRow[] }[];
};

/** Every writing task in the lessons, by level and unit, Culture last (loaded on demand). */
export async function loadKoWriting(): Promise<KoWritingLevel[]> {
  return (await import("./data/writing.json")).default as KoWritingLevel[];
}

/** Text as the glossary compares it: Unicode-composed, lowercase, without
 * spaces or punctuation, so "학교에 가요" finds "학교에가요" and "to go"
 * finds "to go". Apply to the text searched and to the query. */
export function foldKorean(text: string): string {
  return text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\s?!.,~·…'’"]/g, "");
}

const CHOSEONG = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";

/** The initial consonant of each syllable: "학교" -> "ㅎㄱ" (other
 * characters are dropped). Korean dictionaries and phone contacts search
 * by these (초성 검색). */
export function choseong(text: string): string {
  let out = "";
  for (const ch of text.normalize("NFC")) {
    const code = ch.charCodeAt(0) - 0xac00;
    if (code >= 0 && code < 11172) out += CHOSEONG[Math.floor(code / 588)];
  }
  return out;
}

/** True when a query is only initial consonants ("ㅎㄱ"), searched with {@link choseong}. */
export function isChoseongQuery(query: string): boolean {
  return /^[ㄱ-ㅎ]+$/.test(query.replace(/\s/g, ""));
}

/** The consonant a word is listed under on the vocabulary pages: ㄱ for
 * 가방 and for 까치 (tense consonants are filed with their plain
 * counterparts, as in a phone's contact list), "#" for anything else. */
export function koIndexLetter(text: string): string {
  const first = choseong(text.charAt(0));
  if (!first) return "#";
  return ({ ㄲ: "ㄱ", ㄸ: "ㄷ", ㅃ: "ㅂ", ㅆ: "ㅅ", ㅉ: "ㅈ" } as Record<string, string>)[first] ?? first;
}

/** The fourteen index letters, in dictionary order. */
export const KO_INDEX_LETTERS = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
