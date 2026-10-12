// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-b1-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { DE_B1_S01_GLOSSES } from "./batches/de-b1-s01";
import { DE_B1_S02_GLOSSES } from "./batches/de-b1-s02";
import { DE_B1_S03_GLOSSES } from "./batches/de-b1-s03";
import { DE_B1_S04_GLOSSES } from "./batches/de-b1-s04";
import { DE_B1_S05_GLOSSES } from "./batches/de-b1-s05";
import { DE_B1_S06_GLOSSES } from "./batches/de-b1-s06";
import { DE_B1_S07_GLOSSES } from "./batches/de-b1-s07";
import { DE_B1_S08_GLOSSES } from "./batches/de-b1-s08";

// Glosses for the DE-B1 stories, keyed by story slug (see de-a2-glosses.ts
// for the shape).
export const DE_B1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...DE_B1_S01_GLOSSES,
  ...DE_B1_S02_GLOSSES,
  ...DE_B1_S03_GLOSSES,
  ...DE_B1_S04_GLOSSES,
  ...DE_B1_S05_GLOSSES,
  ...DE_B1_S06_GLOSSES,
  ...DE_B1_S07_GLOSSES,
  ...DE_B1_S08_GLOSSES,
};
