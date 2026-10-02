// Synced from cheneygross-afk/lengo:src/lib/stories/glossLookup.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { StoryGloss } from "./types";

// Helpers for matching a story's words to its glosses. They import no
// gloss data, so a page that is handed one story's glosses doesn't bundle
// every story's (glosses.ts holds the data and re-exports these).

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

/** The story's key vocabulary for a pre-reading box: the glossed words
 * used most often in its text (ties keep gloss order), at most `max`. */
export function storyKeyWords(paragraphs: string[], glosses: StoryGloss[], max = 8): StoryGloss[] {
  const counts = new Map<StoryGloss, number>();
  const lookup = glossLookup(glosses);
  for (const p of paragraphs) {
    for (const word of p.split(/\s+/)) {
      const g = lookup.get(glossKey(word));
      if (g) counts.set(g, (counts.get(g) ?? 0) + 1);
    }
  }
  return glosses
    .map((g, i) => ({ g, i, n: counts.get(g) ?? 0 }))
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n || a.i - b.i)
    .slice(0, max)
    .map((x) => x.g);
}
