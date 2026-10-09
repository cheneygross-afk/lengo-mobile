// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-b2-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FR_B2_S01_ENGLISH } from "./batches/fr-b2-s01";
import { FR_B2_S02_ENGLISH } from "./batches/fr-b2-s02";
import { FR_B2_S03_ENGLISH } from "./batches/fr-b2-s03";
import { FR_B2_S04_ENGLISH } from "./batches/fr-b2-s04";
import { FR_B2_S05_ENGLISH } from "./batches/fr-b2-s05";
import { FR_B2_S06_ENGLISH } from "./batches/fr-b2-s06";
import { FR_B2_S07_ENGLISH } from "./batches/fr-b2-s07";
import { FR_B2_S08_ENGLISH } from "./batches/fr-b2-s08";

// English translations of the FR-B2 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const FR_B2_STORY_ENGLISH: Record<string, string[]> = {
  ...FR_B2_S01_ENGLISH,
  ...FR_B2_S02_ENGLISH,
  ...FR_B2_S03_ENGLISH,
  ...FR_B2_S04_ENGLISH,
  ...FR_B2_S05_ENGLISH,
  ...FR_B2_S06_ENGLISH,
  ...FR_B2_S07_ENGLISH,
  ...FR_B2_S08_ENGLISH,
};
