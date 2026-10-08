// Synced from cheneygross-afk/lengo:src/lib/stories/zh-byLevel.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ZhLevelPath, ZhStory } from "./zh-types";
import { ZH_STORIES } from "./zh-stories";

// The Chinese readings by level path segment, as /lessons/zh/stories/<level>
// lists them, in reading order.
export const ZH_LEVEL_PATHS: ZhLevelPath[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

export const ZH_STORIES_BY_LEVEL: Record<ZhLevelPath, ZhStory[]> = Object.fromEntries(
  ZH_LEVEL_PATHS.map((path) => [path, ZH_STORIES.filter((s) => s.level.toLowerCase() === path)]),
) as Record<ZhLevelPath, ZhStory[]>;

/** The stories at a level path ("a1"), or null for an unknown path. */
export function zhStoriesAt(levelPath: string): ZhStory[] | null {
  return (ZH_STORIES_BY_LEVEL as Record<string, ZhStory[]>)[levelPath] ?? null;
}
