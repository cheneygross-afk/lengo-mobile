// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FR_A1_STORY_ENGLISH } from "./fr-a1-translations";
import { FR_A2_STORY_ENGLISH } from "./fr-a2-translations";
import { FR_B1_STORY_ENGLISH } from "./fr-b1-translations";
import { FR_B2_STORY_ENGLISH } from "./fr-b2-translations";
import { FR_C1_STORY_ENGLISH } from "./fr-c1-translations";
import { FR_C2_STORY_ENGLISH } from "./fr-c2-translations";

// English translations of the French course's stories.
// No longer shown on the story pages: the user decided (2026-10-12) that
// readings have no whole-text translation, only word meanings on tap.
// Kept as reference data (the course checkers still validate it).

export const FR_STORY_ENGLISH: Record<string, string[]> = {
  ...FR_A1_STORY_ENGLISH,
  ...FR_A2_STORY_ENGLISH,
  ...FR_B1_STORY_ENGLISH,
  ...FR_B2_STORY_ENGLISH,
  ...FR_C1_STORY_ENGLISH,
  ...FR_C2_STORY_ENGLISH,
};

/** One English paragraph per story paragraph, or null when the story has
 * no (complete) translation. */
export function frenchStoryEnglish(slug: string, paragraphCount: number): string[] | null {
  const en = FR_STORY_ENGLISH[slug];
  return en && en.length === paragraphCount ? en : null;
}
