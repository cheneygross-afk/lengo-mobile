// Synced from cheneygross-afk/lengo:src/lib/stories/storyPaths.ts by scripts/sync-content.mjs -- edit it there, not here.
// Where a story lives, from its levelPath: the Spanish course's free
// readings ("a1" ... "c1c2") are under /readings; the English for Spanish
// speakers beta's ("en/a1" ... "en/c1c2", see ./en) under /lessons/en/stories,
// gated with the rest of that course. Data-free, so client components can
// use it.

/** True for an English-course story levelPath ("en/a1"). */
export function isEnglishStoryPath(levelPath: string): boolean {
  return levelPath.startsWith("en/");
}

/** The story's page. */
export function storyHref(levelPath: string, slug: string): string {
  return isEnglishStoryPath(levelPath)
    ? `/lessons/en/stories/${levelPath.slice(3)}/${slug}`
    : `/readings/${levelPath}/stories/${slug}`;
}

/** The page listing the level's stories. */
export function storyLevelHref(levelPath: string): string {
  return isEnglishStoryPath(levelPath) ? `/lessons/en/stories/${levelPath.slice(3)}` : `/readings/${levelPath}`;
}
