// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "../types";
import { DE_A2_S01_STORIES } from "./batches/de-a2-s01";
import { DE_A2_S02_STORIES } from "./batches/de-a2-s02";
import { DE_A2_S03_STORIES } from "./batches/de-a2-s03";
import { DE_A2_S04_STORIES } from "./batches/de-a2-s04";

// German course: DE-A2 stories (see de-a1.ts for the conventions).
export const DE_A2_STORIES: Story[] = [
  ...DE_A2_S01_STORIES,
  ...DE_A2_S02_STORIES,
  ...DE_A2_S03_STORIES,
  ...DE_A2_S04_STORIES,
];
