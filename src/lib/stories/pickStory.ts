// Synced from cheneygross-afk/lengo:src/lib/stories/pickStory.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "./types";

// Which free story to suggest at the end of a lesson: one at the lesson's
// level the learner hasn't read yet, in reading-list order. Shared by the
// website and the app; each keeps its own record of read stories.

export type StoryLevelPath = "a1" | "a2" | "b1" | "b2" | "c1c2";

/** The reading level that goes with a lesson level ("c1", "c2" and
 * "cosas-coloquiales" share the C1/C2 stories), or null for tracks with
 * no Spanish stories (Japanese). */
export function storyLevelPathForLesson(levelPath: string): StoryLevelPath | null {
  switch (levelPath) {
    case "a1":
    case "a2":
    case "b1":
    case "b2":
      return levelPath;
    case "c1":
    case "c2":
    case "cosas-coloquiales":
      return "c1c2";
    default:
      return null;
  }
}

/** The first story the learner hasn't read. Once they've read them all,
 * `seed` (e.g. the lesson number) rotates through the list so different
 * lessons suggest different stories. */
export function pickStoryToRead(stories: Story[], isRead: (slug: string) => boolean, seed = 0): Story | null {
  if (stories.length === 0) return null;
  return stories.find((s) => !isRead(s.slug)) ?? stories[Math.abs(seed) % stories.length];
}
