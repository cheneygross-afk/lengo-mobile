// Synced from cheneygross-afk/lengo:src/lib/stories/de/de-c1-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { DE_C1_S01_GLOSSES } from "./batches/de-c1-s01";
import { DE_C1_S02_GLOSSES } from "./batches/de-c1-s02";
import { DE_C1_S03_GLOSSES } from "./batches/de-c1-s03";
import { DE_C1_S04_GLOSSES } from "./batches/de-c1-s04";
import { DE_C1_S05_GLOSSES } from "./batches/de-c1-s05";
import { DE_C1_S06_GLOSSES } from "./batches/de-c1-s06";
import { DE_C1_S07_GLOSSES } from "./batches/de-c1-s07";
import { DE_C1_S08_GLOSSES } from "./batches/de-c1-s08";

// Glosses for the DE-C1 stories, keyed by story slug (see de-a2-glosses.ts
// for the shape).
export const DE_C1_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...DE_C1_S01_GLOSSES,
  ...DE_C1_S02_GLOSSES,
  ...DE_C1_S03_GLOSSES,
  ...DE_C1_S04_GLOSSES,
  ...DE_C1_S05_GLOSSES,
  ...DE_C1_S06_GLOSSES,
  ...DE_C1_S07_GLOSSES,
  ...DE_C1_S08_GLOSSES,
};
