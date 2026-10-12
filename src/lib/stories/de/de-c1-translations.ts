// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-c1-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { DE_C1_S01_ENGLISH } from "./batches/de-c1-s01";
import { DE_C1_S02_ENGLISH } from "./batches/de-c1-s02";
import { DE_C1_S03_ENGLISH } from "./batches/de-c1-s03";
import { DE_C1_S04_ENGLISH } from "./batches/de-c1-s04";
import { DE_C1_S05_ENGLISH } from "./batches/de-c1-s05";
import { DE_C1_S06_ENGLISH } from "./batches/de-c1-s06";
import { DE_C1_S07_ENGLISH } from "./batches/de-c1-s07";
import { DE_C1_S08_ENGLISH } from "./batches/de-c1-s08";

// English translations of the DE-C1 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const DE_C1_STORY_ENGLISH: Record<string, string[]> = {
  ...DE_C1_S01_ENGLISH,
  ...DE_C1_S02_ENGLISH,
  ...DE_C1_S03_ENGLISH,
  ...DE_C1_S04_ENGLISH,
  ...DE_C1_S05_ENGLISH,
  ...DE_C1_S06_ENGLISH,
  ...DE_C1_S07_ENGLISH,
  ...DE_C1_S08_ENGLISH,
};
