// Mobile port of the web app's @/lib/flashcards -- same data shape and
// same storage key, so a learner's cards (were this ever synced) would
// mean the same thing on both platforms. The one real difference:
// AsyncStorage is inherently async, where the web version's localStorage
// calls are synchronous, so every read/write here is a Promise.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

export type FlashcardEntry = {
  id: string;
  es: string;
  en: string;
  pos: string;
  level: string;
  levelPath: string;
  lessonSlug: string;
  lessonTitle: string;
  addedAt: number;
  source?: "lesson" | "custom" | "auto";
  folderId?: string;
  // Spaced-repetition scheduling state -- see @/lib/srs.
  dueAt?: number;
  box?: number;
  reviewCount?: number;
  lastReviewedAt?: number;
};

export function cardSource(card: FlashcardEntry): "lesson" | "custom" | "auto" {
  return card.source ?? "lesson";
}

export const FLASHCARDS_STORAGE_KEY = "deepend-flashcards";

const ARTICLES = new Set(["el", "la", "los", "las", "un", "una"]);

/** Best-effort part-of-speech guess -- see the web app's @/lib/flashcards
 * for the full rationale behind each rule. */
export function guessPartOfSpeech(es: string, en: string): string {
  const word = es.trim().toLowerCase();
  const gloss = (en ?? "").trim().toLowerCase();

  if (!word) return "";
  if (word.includes(".") || word.split(/\s+/).length > 4) return "phr.";

  const firstToken = word.split(/\s+/)[0];
  const isArticleToken =
    word.includes(" ") &&
    firstToken.split("/").length > 0 &&
    firstToken.split("/").every((p) => ARTICLES.has(p));
  if (isArticleToken) return "n.";

  if (gloss.startsWith("to ")) return "v.";
  if (word.endsWith("mente")) return "adv.";
  if (/^[a-záéíóúñü]+\/[a-záéíóúñü]+$/.test(word)) return "adj.";
  if (word.includes(" ") || word.includes("/")) return "phr.";
  if (/(arse|erse|irse|ar|er|ir)$/.test(word)) return "v.";
  return "n.";
}

export function makeFlashcardId(lessonSlug: string, es: string): string {
  return `${lessonSlug}::${es.trim().toLowerCase()}`;
}

export function makeCustomFlashcardId(): string {
  return `custom::${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function buildFlashcardEntry(params: {
  lessonSlug: string;
  es: string;
  en: string;
  level: string;
  levelPath: string;
  lessonTitle: string;
  source?: "lesson" | "auto";
}): FlashcardEntry {
  return {
    id: makeFlashcardId(params.lessonSlug, params.es),
    es: params.es,
    en: params.en,
    pos: guessPartOfSpeech(params.es, params.en),
    level: params.level,
    levelPath: params.levelPath,
    lessonSlug: params.lessonSlug,
    lessonTitle: params.lessonTitle,
    addedAt: Date.now(),
    source: params.source ?? "lesson",
  };
}

/**
 * Builds a flashcard entry the learner saved themselves (e.g. from the
 * translate bar), rather than one pulled from a lesson. Port of the web
 * app's buildCustomFlashcardEntry -- see there for the full rationale.
 */
export function buildCustomFlashcardEntry(params: {
  es: string;
  en: string;
  level?: string;
  note?: string;
  levelPath?: string;
  guessPos?: boolean;
}): FlashcardEntry {
  return {
    id: makeCustomFlashcardId(),
    es: params.es,
    en: params.en,
    pos: params.guessPos === false ? "" : guessPartOfSpeech(params.es, params.en),
    level: params.level ?? "",
    levelPath: params.levelPath ?? "",
    lessonSlug: "",
    lessonTitle: params.note ?? "",
    addedAt: Date.now(),
    source: "custom",
  };
}

export async function loadFlashcards(): Promise<Record<string, FlashcardEntry>> {
  return readJSON<Record<string, FlashcardEntry>>(FLASHCARDS_STORAGE_KEY, {});
}

export async function saveFlashcards(map: Record<string, FlashcardEntry>): Promise<void> {
  await writeJSON(FLASHCARDS_STORAGE_KEY, map);
}

/**
 * Called once, the first time a learner finishes a lesson -- queues every
 * vocabulary example the lesson illustrates into spaced-repetition review
 * automatically. A card that already exists is left untouched, so this
 * never clobbers a learner's own "lesson" source flag with "auto".
 */
export async function autoEnrollLessonVocabulary(params: {
  lessonSlug: string;
  level: string;
  levelPath: string;
  lessonTitle: string;
  examples: { es: string; en?: string }[];
}): Promise<{ added: number }> {
  const all = await loadFlashcards();
  let added = 0;
  for (const ex of params.examples) {
    if (!ex.en) continue;
    const id = makeFlashcardId(params.lessonSlug, ex.es);
    if (all[id]) continue;
    all[id] = buildFlashcardEntry({
      lessonSlug: params.lessonSlug,
      es: ex.es,
      en: ex.en,
      level: params.level,
      levelPath: params.levelPath,
      lessonTitle: params.lessonTitle,
      source: "auto",
    });
    added++;
  }
  if (added > 0) await saveFlashcards(all);
  return { added };
}
