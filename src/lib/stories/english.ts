// Synced from cheneygross-afk/lengo:src/lib/stories/english.ts by scripts/sync-content.mjs -- edit it there, not here.
import { A1_STORY_ENGLISH } from "./a1-english";
import { A2_STORY_ENGLISH } from "./a2-english";

// English translations of the A1/A2 stories. Kept as reference data but
// no longer shown on the story pages: the user decided (2026-10-12) that
// readings have no whole-text translation, only word meanings on tap.

export const STORY_ENGLISH: Record<string, string[]> = { ...A1_STORY_ENGLISH, ...A2_STORY_ENGLISH };

/** One English paragraph per story paragraph, or null when the story has
 * no (complete) translation. */
export function storyEnglish(slug: string, paragraphCount: number): string[] | null {
  const en = STORY_ENGLISH[slug];
  return en && en.length === paragraphCount ? en : null;
}
