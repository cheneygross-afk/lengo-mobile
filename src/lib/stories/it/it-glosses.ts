// Synced from cheneygross-afk/lengo:src/lib/stories/it/it-glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "../types";
import { IT_A1_STORY_GLOSSES } from "./it-a1";
import { IT_A2_STORY_GLOSSES } from "./it-a2";
import { IT_B1_STORY_GLOSSES } from "./it-b1";
import { IT_B2_STORY_GLOSSES } from "./it-b2";
import { IT_C1_STORY_GLOSSES } from "./it-c1";
import { IT_C2_STORY_GLOSSES } from "./it-c2";

// Glosses for every Italian-course story, keyed by slug. `es` holds the
// ITALIAN dictionary form ("svegliarsi", "il forno"; the field name is
// historical), `en` its English meaning in the story, and `forms` the exact
// lowercase spellings in the text ("svegliata", "forno", "l'acqua" with its
// elided article when the text writes it so), without surrounding
// punctuation.
export const IT_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...IT_A1_STORY_GLOSSES,
  ...IT_A2_STORY_GLOSSES,
  ...IT_B1_STORY_GLOSSES,
  ...IT_B2_STORY_GLOSSES,
  ...IT_C1_STORY_GLOSSES,
  ...IT_C2_STORY_GLOSSES,
};

export function italianStoryGlosses(slug: string): StoryGloss[] {
  return IT_STORY_GLOSSES[slug] ?? [];
}
