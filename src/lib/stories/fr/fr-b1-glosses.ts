// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-b1-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { FR_B1_S01_GLOSSES } from "./batches/fr-b1-s01";
import { FR_B1_S02_GLOSSES } from "./batches/fr-b1-s02";
import { FR_B1_S03_GLOSSES } from "./batches/fr-b1-s03";
import { FR_B1_S04_GLOSSES } from "./batches/fr-b1-s04";
import { FR_B1_S05_GLOSSES } from "./batches/fr-b1-s05";
import { FR_B1_S06_GLOSSES } from "./batches/fr-b1-s06";
import { FR_B1_S07_GLOSSES } from "./batches/fr-b1-s07";
import { FR_B1_S08_GLOSSES } from "./batches/fr-b1-s08";

// Glosses for the FR-B1 stories, keyed by story slug (see fr-a2-glosses.ts
// for the shape).
export const FR_B1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...FR_B1_S01_GLOSSES,
  ...FR_B1_S02_GLOSSES,
  ...FR_B1_S03_GLOSSES,
  ...FR_B1_S04_GLOSSES,
  ...FR_B1_S05_GLOSSES,
  ...FR_B1_S06_GLOSSES,
  ...FR_B1_S07_GLOSSES,
  ...FR_B1_S08_GLOSSES,
};
