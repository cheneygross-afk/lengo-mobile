// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-b2-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { FR_B2_S01_GLOSSES } from "./batches/fr-b2-s01";
import { FR_B2_S02_GLOSSES } from "./batches/fr-b2-s02";
import { FR_B2_S03_GLOSSES } from "./batches/fr-b2-s03";
import { FR_B2_S04_GLOSSES } from "./batches/fr-b2-s04";
import { FR_B2_S05_GLOSSES } from "./batches/fr-b2-s05";
import { FR_B2_S06_GLOSSES } from "./batches/fr-b2-s06";
import { FR_B2_S07_GLOSSES } from "./batches/fr-b2-s07";
import { FR_B2_S08_GLOSSES } from "./batches/fr-b2-s08";

// Glosses for the FR-B2 stories, keyed by story slug (see fr-a2-glosses.ts
// for the shape).
export const FR_B2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...FR_B2_S01_GLOSSES,
  ...FR_B2_S02_GLOSSES,
  ...FR_B2_S03_GLOSSES,
  ...FR_B2_S04_GLOSSES,
  ...FR_B2_S05_GLOSSES,
  ...FR_B2_S06_GLOSSES,
  ...FR_B2_S07_GLOSSES,
  ...FR_B2_S08_GLOSSES,
};
