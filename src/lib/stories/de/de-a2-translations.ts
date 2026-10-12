// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-a2-translations.ts by scripts/sync-content.mjs -- edit it there, not here.
import { DE_A2_S01_ENGLISH } from "./batches/de-a2-s01";
import { DE_A2_S02_ENGLISH } from "./batches/de-a2-s02";
import { DE_A2_S03_ENGLISH } from "./batches/de-a2-s03";
import { DE_A2_S04_ENGLISH } from "./batches/de-a2-s04";

// English translations of the DE-A2 stories, one per paragraph, keyed by
// story slug. Keep each list the same length as the story's paragraphs.
export const DE_A2_STORY_ENGLISH: Record<string, string[]> = {
  ...DE_A2_S01_ENGLISH,
  ...DE_A2_S02_ENGLISH,
  ...DE_A2_S03_ENGLISH,
  ...DE_A2_S04_ENGLISH,
};
