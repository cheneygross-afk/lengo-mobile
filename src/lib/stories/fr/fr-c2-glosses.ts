// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-c2-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { FR_C2_S01_GLOSSES } from "./batches/fr-c2-s01";
import { FR_C2_S02_GLOSSES } from "./batches/fr-c2-s02";
import { FR_C2_S03_GLOSSES } from "./batches/fr-c2-s03";
import { FR_C2_S04_GLOSSES } from "./batches/fr-c2-s04";
import { FR_C2_S05_GLOSSES } from "./batches/fr-c2-s05";
import { FR_C2_S06_GLOSSES } from "./batches/fr-c2-s06";
import { FR_C2_S07_GLOSSES } from "./batches/fr-c2-s07";
import { FR_C2_S08_GLOSSES } from "./batches/fr-c2-s08";

// Glosses for the FR-C2 stories, keyed by story slug (see fr-a2-glosses.ts
// for the shape).
export const FR_C2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...FR_C2_S01_GLOSSES,
  ...FR_C2_S02_GLOSSES,
  ...FR_C2_S03_GLOSSES,
  ...FR_C2_S04_GLOSSES,
  ...FR_C2_S05_GLOSSES,
  ...FR_C2_S06_GLOSSES,
  ...FR_C2_S07_GLOSSES,
  ...FR_C2_S08_GLOSSES,
};
