// Synced from cheneygross-afk/lengo:src/lib/stories/english.ts by scripts/sync-content.mjs -- edit it there, not here.
import { A1_STORY_ENGLISH } from "./a1-english";
import { A2_STORY_ENGLISH } from "./a2-english";

// English translations for the "Show English" toggle on A1/A2 stories:
// support that fades by level, on by default at A1 and off from A2 up.
// The reader's on/off choice is handled in englishPrefs.ts, which holds
// no translations, so a page can use it without bundling them all.

export const STORY_ENGLISH: Record<string, string[]> = { ...A1_STORY_ENGLISH, ...A2_STORY_ENGLISH };

/** One English paragraph per story paragraph, or null when the story has
 * no (complete) translation. */
export function storyEnglish(slug: string, paragraphCount: number): string[] | null {
  const en = STORY_ENGLISH[slug];
  return en && en.length === paragraphCount ? en : null;
}

export { STORY_ENGLISH_STORAGE_KEY, showEnglishByDefault, showEnglishFor } from "./englishPrefs";
