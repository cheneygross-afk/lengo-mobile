// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-b1-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FR_B1_S01_ENGLISH } from "./batches/fr-b1-s01";
import { FR_B1_S02_ENGLISH } from "./batches/fr-b1-s02";
import { FR_B1_S03_ENGLISH } from "./batches/fr-b1-s03";
import { FR_B1_S04_ENGLISH } from "./batches/fr-b1-s04";
import { FR_B1_S05_ENGLISH } from "./batches/fr-b1-s05";
import { FR_B1_S06_ENGLISH } from "./batches/fr-b1-s06";
import { FR_B1_S07_ENGLISH } from "./batches/fr-b1-s07";
import { FR_B1_S08_ENGLISH } from "./batches/fr-b1-s08";

// English translations of the FR-B1 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const FR_B1_STORY_ENGLISH: Record<string, string[]> = {
  ...FR_B1_S01_ENGLISH,
  ...FR_B1_S02_ENGLISH,
  ...FR_B1_S03_ENGLISH,
  ...FR_B1_S04_ENGLISH,
  ...FR_B1_S05_ENGLISH,
  ...FR_B1_S06_ENGLISH,
  ...FR_B1_S07_ENGLISH,
  ...FR_B1_S08_ENGLISH,
};
