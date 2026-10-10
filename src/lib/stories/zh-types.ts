// Synced from cheneygross-afk/lengo:src/lib/stories/zh-types.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryQuestion } from "./types";

// A graded reading for the Chinese course (/lessons/zh/stories). Like the
// Japanese stories (ja-types.ts), each one carries its own translation and
// key words. Chinese text is written with a space between words: the
// reader joins the words back up, shows each one's pinyin above it and
// reads it aloud when tapped. The data is in zh-stories.ts.

export type ZhLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type ZhLevelPath = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type ZhParagraph = {
  /** Words separated by spaces; punctuation is a word of its own. */
  zh: string;
  /** One entry per word of `zh`, "_" for a space inside one ("Wáng_Míng"). */
  pinyin: string;
  en: string;
};

export type ZhKeyWord = { zh: string; pinyin: string; en: string };

export type ZhStory = {
  slug: string;
  level: ZhLevel;
  /** Nonfiction names its genre; fiction leaves it off. */
  genre?: string;
  /** Words separated by spaces, like a paragraph. */
  title: string;
  titlePinyin: string;
  titleEn: string;
  subtitle: string;
  paragraphs: ZhParagraph[];
  keyWords: ZhKeyWord[];
  /** In English at every level (the course is taught in English). */
  questions: StoryQuestion[];
};

export type ZhWord = { zh: string; pinyin: string; speakable: boolean };

const HAN = /[㐀-䶿一-鿿]/;

/** A paragraph or title as words with their pinyin. */
export function zhWords(zh: string, pinyin: string): ZhWord[] {
  const words = zh.split(" ").filter(Boolean);
  const readings = pinyin.split(" ").filter(Boolean);
  return words.map((w, i) => ({ zh: w, pinyin: (readings[i] ?? "").replace(/_/g, " "), speakable: HAN.test(w) }));
}

/** The text with the word spaces taken out. */
export function plainZh(zh: string): string {
  return zh.replace(/ /g, "");
}

// Reading speed in characters per minute by level, well under a native
// reader's, like the Japanese stories' (ja-text.ts).
const READING_CPM: Record<ZhLevel, number> = { A1: 60, A2: 90, B1: 130, B2: 180, C1: 240, C2: 280 };

/** A story's study credit: its characters at the level's reading speed,
 * plus half a minute per question. At least one minute. */
export function zhStoryMinutes(story: ZhStory): number {
  const chars = story.paragraphs.reduce((n, p) => n + (plainZh(p.zh).match(/[㐀-䶿一-鿿]/g)?.length ?? 0), 0);
  return Math.round(Math.max(1, chars / READING_CPM[story.level] + story.questions.length * 0.5) * 10) / 10;
}
