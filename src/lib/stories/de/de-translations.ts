// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { DE_A1_STORY_ENGLISH } from "./de-a1-translations";
import { DE_A2_STORY_ENGLISH } from "./de-a2-translations";
import { DE_B1_STORY_ENGLISH } from "./de-b1-translations";
import { DE_B2_STORY_ENGLISH } from "./de-b2-translations";
import { DE_C1_STORY_ENGLISH } from "./de-c1-translations";
import { DE_C2_STORY_ENGLISH } from "./de-c2-translations";

// English translations of the German course's stories.
// No longer shown on the story pages: the user decided (2026-10-12) that
// readings have no whole-text translation, only word meanings on tap.
// Kept as reference data (the course checkers still validate it).

export const DE_STORY_ENGLISH: Record<string, string[]> = {
  ...DE_A1_STORY_ENGLISH,
  ...DE_A2_STORY_ENGLISH,
  ...DE_B1_STORY_ENGLISH,
  ...DE_B2_STORY_ENGLISH,
  ...DE_C1_STORY_ENGLISH,
  ...DE_C2_STORY_ENGLISH,
};

/** One English paragraph per story paragraph, or null when the story has
 * no (complete) translation. */
export function germanStoryEnglish(slug: string, paragraphCount: number): string[] | null {
  const en = DE_STORY_ENGLISH[slug];
  return en && en.length === paragraphCount ? en : null;
}
