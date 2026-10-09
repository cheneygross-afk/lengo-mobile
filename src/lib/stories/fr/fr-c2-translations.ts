// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-c2-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FR_C2_S01_ENGLISH } from "./batches/fr-c2-s01";
import { FR_C2_S02_ENGLISH } from "./batches/fr-c2-s02";
import { FR_C2_S03_ENGLISH } from "./batches/fr-c2-s03";
import { FR_C2_S04_ENGLISH } from "./batches/fr-c2-s04";
import { FR_C2_S05_ENGLISH } from "./batches/fr-c2-s05";
import { FR_C2_S06_ENGLISH } from "./batches/fr-c2-s06";
import { FR_C2_S07_ENGLISH } from "./batches/fr-c2-s07";
import { FR_C2_S08_ENGLISH } from "./batches/fr-c2-s08";

// English translations of the FR-C2 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const FR_C2_STORY_ENGLISH: Record<string, string[]> = {
  ...FR_C2_S01_ENGLISH,
  ...FR_C2_S02_ENGLISH,
  ...FR_C2_S03_ENGLISH,
  ...FR_C2_S04_ENGLISH,
  ...FR_C2_S05_ENGLISH,
  ...FR_C2_S06_ENGLISH,
  ...FR_C2_S07_ENGLISH,
  ...FR_C2_S08_ENGLISH,
};
