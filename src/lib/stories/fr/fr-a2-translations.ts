// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-a2-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FR_A2_S01_ENGLISH } from "./batches/fr-a2-s01";
import { FR_A2_S02_ENGLISH } from "./batches/fr-a2-s02";
import { FR_A2_S03_ENGLISH } from "./batches/fr-a2-s03";
import { FR_A2_S04_ENGLISH } from "./batches/fr-a2-s04";

// English translations of the FR-A2 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const FR_A2_STORY_ENGLISH: Record<string, string[]> = {
  ...FR_A2_S01_ENGLISH,
  ...FR_A2_S02_ENGLISH,
  ...FR_A2_S03_ENGLISH,
  ...FR_A2_S04_ENGLISH,
};
