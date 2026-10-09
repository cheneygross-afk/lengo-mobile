// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-a1-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FR_A1_S01_ENGLISH } from "./batches/fr-a1-s01";
import { FR_A1_S02_ENGLISH } from "./batches/fr-a1-s02";
import { FR_A1_S03_ENGLISH } from "./batches/fr-a1-s03";
import { FR_A1_S04_ENGLISH } from "./batches/fr-a1-s04";

// English translations of the FR-A1 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const FR_A1_STORY_ENGLISH: Record<string, string[]> = {
  ...FR_A1_S01_ENGLISH,
  ...FR_A1_S02_ENGLISH,
  ...FR_A1_S03_ENGLISH,
  ...FR_A1_S04_ENGLISH,
};
