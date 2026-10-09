// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-c1-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FR_C1_S01_ENGLISH } from "./batches/fr-c1-s01";
import { FR_C1_S02_ENGLISH } from "./batches/fr-c1-s02";
import { FR_C1_S03_ENGLISH } from "./batches/fr-c1-s03";
import { FR_C1_S04_ENGLISH } from "./batches/fr-c1-s04";
import { FR_C1_S05_ENGLISH } from "./batches/fr-c1-s05";
import { FR_C1_S06_ENGLISH } from "./batches/fr-c1-s06";
import { FR_C1_S07_ENGLISH } from "./batches/fr-c1-s07";
import { FR_C1_S08_ENGLISH } from "./batches/fr-c1-s08";

// English translations of the FR-C1 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const FR_C1_STORY_ENGLISH: Record<string, string[]> = {
  ...FR_C1_S01_ENGLISH,
  ...FR_C1_S02_ENGLISH,
  ...FR_C1_S03_ENGLISH,
  ...FR_C1_S04_ENGLISH,
  ...FR_C1_S05_ENGLISH,
  ...FR_C1_S06_ENGLISH,
  ...FR_C1_S07_ENGLISH,
  ...FR_C1_S08_ENGLISH,
};
