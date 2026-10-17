// Synced from cheneygross-afk/lengo:src/lib/stories/pt/pt-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "../types";
import { PT_C2_S01_STORIES, PT_C2_S01_GLOSSES } from "./batches/pt-c2-s01";
import { PT_C2_S02_STORIES, PT_C2_S02_GLOSSES } from "./batches/pt-c2-s02";
import { PT_C2_S03_STORIES, PT_C2_S03_GLOSSES } from "./batches/pt-c2-s03";
import { PT_C2_S04_STORIES, PT_C2_S04_GLOSSES } from "./batches/pt-c2-s04";
import { PT_C2_S05_STORIES, PT_C2_S05_GLOSSES } from "./batches/pt-c2-s05";
import { PT_C2_S06_STORIES, PT_C2_S06_GLOSSES } from "./batches/pt-c2-s06";
import { PT_C2_S07_STORIES, PT_C2_S07_GLOSSES } from "./batches/pt-c2-s07";
import { PT_C2_S08_STORIES, PT_C2_S08_GLOSSES } from "./batches/pt-c2-s08";

// Brazilian Portuguese course: PT-C2 stories (conventions in ./pt-a1.ts).
export const PT_C2_STORIES: Story[] = [
  ...PT_C2_S01_STORIES,
  ...PT_C2_S02_STORIES,
  ...PT_C2_S03_STORIES,
  ...PT_C2_S04_STORIES,
  ...PT_C2_S05_STORIES,
  ...PT_C2_S06_STORIES,
  ...PT_C2_S07_STORIES,
  ...PT_C2_S08_STORIES,
];

export const PT_C2_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...PT_C2_S01_GLOSSES,
  ...PT_C2_S02_GLOSSES,
  ...PT_C2_S03_GLOSSES,
  ...PT_C2_S04_GLOSSES,
  ...PT_C2_S05_GLOSSES,
  ...PT_C2_S06_GLOSSES,
  ...PT_C2_S07_GLOSSES,
  ...PT_C2_S08_GLOSSES,
};
