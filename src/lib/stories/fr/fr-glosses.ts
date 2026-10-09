// Synced from cheneygross-afk/lengo:src/lib/stories/fr/fr-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { FR_A1_STORY_GLOSSES } from "./fr-a1-glosses";
import { FR_A2_STORY_GLOSSES } from "./fr-a2-glosses";
import { FR_B1_STORY_GLOSSES } from "./fr-b1-glosses";
import { FR_B2_STORY_GLOSSES } from "./fr-b2-glosses";
import { FR_C1_STORY_GLOSSES } from "./fr-c1-glosses";
import { FR_C2_STORY_GLOSSES } from "./fr-c2-glosses";

// Glosses for every French-course story, keyed by slug (see
// fr-a1-glosses.ts for the shape).
export const FR_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...FR_A1_STORY_GLOSSES,
  ...FR_A2_STORY_GLOSSES,
  ...FR_B1_STORY_GLOSSES,
  ...FR_B2_STORY_GLOSSES,
  ...FR_C1_STORY_GLOSSES,
  ...FR_C2_STORY_GLOSSES,
};

export function frenchStoryGlosses(slug: string): StoryGloss[] {
  return FR_STORY_GLOSSES[slug] ?? [];
}
