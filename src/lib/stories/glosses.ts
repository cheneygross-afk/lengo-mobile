// Synced from cheneygross-afk/lengo:src/lib/stories/glosses.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "./types";
import { A1_STORY_GLOSSES } from "./a1-glosses";
import { A2_STORY_GLOSSES } from "./a2-glosses";
import { B1_STORY_GLOSSES } from "./b1-glosses";
import { B2_STORY_GLOSSES } from "./b2-glosses";
import { C1C2_STORY_GLOSSES } from "./c1c2-glosses";

// Glosses for every story, keyed by slug. Each story glosses the words a
// reader at its level is least likely to know, enough that about 98% of
// the running words are either taught in the lessons by then or glossed.
// That's the share reading research finds a reader needs to follow a text
// without a dictionary. `npm run check-content` keeps it that way.
const ALL_STORY_GLOSSES: Record<string, StoryGloss[]> = {
  ...A1_STORY_GLOSSES,
  ...A2_STORY_GLOSSES,
  ...B1_STORY_GLOSSES,
  ...B2_STORY_GLOSSES,
  ...C1C2_STORY_GLOSSES,
};

export function storyGlosses(slug: string): StoryGloss[] {
  return ALL_STORY_GLOSSES[slug] ?? [];
}

// The lookup helpers live in a data-free module so a page can use them
// without bundling every story's glosses (see glossLookup.ts).
export { glossKey, glossLookup, storyKeyWords } from "./glossLookup";
