// Synced from cheneygross-afk/lengo:src/lib/stories/english.ts by scripts/sync-content.mjs -- edit it there, not here.
import { A1_STORY_ENGLISH } from "./a1-english";
import { A2_STORY_ENGLISH } from "./a2-english";

// English translations for the "Show English" toggle on A1/A2 stories:
// support that fades by level, on by default at A1 and off from A2 up.
// Each reader's choice is remembered per level on their device (the
// website in localStorage, the app in AsyncStorage) under this key, as a
// { [level]: boolean } map.

export const STORY_ENGLISH_STORAGE_KEY = "deepend-story-english";

export const STORY_ENGLISH: Record<string, string[]> = { ...A1_STORY_ENGLISH, ...A2_STORY_ENGLISH };

/** One English paragraph per story paragraph, or null when the story has
 * no (complete) translation. */
export function storyEnglish(slug: string, paragraphCount: number): string[] | null {
  const en = STORY_ENGLISH[slug];
  return en && en.length === paragraphCount ? en : null;
}

export function showEnglishByDefault(level: string): boolean {
  return level === "A1";
}

/** The reader's saved choice for this level, else the level default. */
export function showEnglishFor(level: string, saved: unknown): boolean {
  if (saved && typeof saved === "object" && typeof (saved as Record<string, unknown>)[level] === "boolean") {
    return (saved as Record<string, boolean>)[level];
  }
  return showEnglishByDefault(level);
}
