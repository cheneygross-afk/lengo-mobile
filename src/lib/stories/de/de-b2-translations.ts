// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-b2-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { DE_B2_S01_ENGLISH } from "./batches/de-b2-s01";
import { DE_B2_S02_ENGLISH } from "./batches/de-b2-s02";
import { DE_B2_S03_ENGLISH } from "./batches/de-b2-s03";
import { DE_B2_S04_ENGLISH } from "./batches/de-b2-s04";
import { DE_B2_S05_ENGLISH } from "./batches/de-b2-s05";
import { DE_B2_S06_ENGLISH } from "./batches/de-b2-s06";
import { DE_B2_S07_ENGLISH } from "./batches/de-b2-s07";
import { DE_B2_S08_ENGLISH } from "./batches/de-b2-s08";

// English translations of the DE-B2 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const DE_B2_STORY_ENGLISH: Record<string, string[]> = {
  ...DE_B2_S01_ENGLISH,
  ...DE_B2_S02_ENGLISH,
  ...DE_B2_S03_ENGLISH,
  ...DE_B2_S04_ENGLISH,
  ...DE_B2_S05_ENGLISH,
  ...DE_B2_S06_ENGLISH,
  ...DE_B2_S07_ENGLISH,
  ...DE_B2_S08_ENGLISH,
};
