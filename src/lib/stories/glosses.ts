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

/** The lookup key for a word as it appears in the text: lowercase, with
 * surrounding punctuation ("«Hola," -> "hola") removed. */
export function glossKey(word: string): string {
  // Explicit letters rather than \p{L}, which older mobile JS engines lack.
  return word.toLowerCase().replace(/^[^a-záéíóúüñ]+|[^a-záéíóúüñ]+$/g, "");
}

/** Word form -> its gloss, for marking glossed words in a story's text. */
export function glossLookup(glosses: StoryGloss[]): Map<string, StoryGloss> {
  const map = new Map<string, StoryGloss>();
  for (const g of glosses) for (const f of g.forms) map.set(f, g);
  return map;
}
