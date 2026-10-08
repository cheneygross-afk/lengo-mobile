// Synced from cheneygross-afk/lengo:src/lib/stories/pickStory.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story } from "./types";
import {
  A1_LESSON_COUNT,
  A1_STORY_READINESS,
  A2_LESSON_COUNT,
  A2_STORY_READINESS,
  type StoryReadiness,
} from "./readiness";

// Which free story to suggest at the end of a lesson: one at the lesson's
// level the learner hasn't read yet and can already read. Shared by the
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

/** When an A1/A2 story reads comfortably (see scripts/story-readiness.ts);
 * null for other levels. */
export function storyReadiness(slug: string): StoryReadiness | null {
  return A1_STORY_READINESS[slug] ?? A2_STORY_READINESS[slug] ?? null;
}

/** "Best after Beginner lesson 41", or "Best after finishing Beginner" for a story
 * that needs the whole level. Null for stories without readiness data. */
export function readinessLabel(slug: string): string | null {
  const r = storyReadiness(slug);
  if (!r) return null;
  const a1 = slug in A1_STORY_READINESS;
  const level = a1 ? "Beginner" : "Elementary";
  if (r.afterLesson >= (a1 ? A1_LESSON_COUNT : A2_LESSON_COUNT)) return `Best after finishing ${level}`;
  return `Best after ${level} lesson ${r.afterLesson}`;
}

/** A1/A2 stories easiest first (fewest unknown words). */
export function sortStoriesByEase(stories: Story[]): Story[] {
  const pct = (s: Story) => storyReadiness(s.slug)?.unknownPct ?? Infinity;
  return [...stories].sort((a, b) => pct(a) - pct(b));
}

/**
 * The story to suggest after a lesson. A1 and A2 stories are only offered
 * once the lesson number has reached the story's afterLesson (none before
 * A1 lesson ~35, and no past-tense A2 story before the imperfect), taking
 * the earliest-ready unread one. If no A2 story is ready yet, an unread A1
 * story is offered instead. Other levels keep the reading-list order.
 */
export function pickStoryForLesson(
  lessonLevelPath: string,
  lessonNumber: number,
  storiesByLevel: Record<string, Story[]>,
  isRead: (slug: string) => boolean
): { story: Story; storyPath: StoryLevelPath } | null {
  const storyPath = storyLevelPathForLesson(lessonLevelPath);
  if (!storyPath) return null;
  const stories = storiesByLevel[storyPath] ?? [];
  if (storyPath !== "a1" && storyPath !== "a2") {
    const story = pickStoryToRead(stories, isRead, lessonNumber);
    return story ? { story, storyPath } : null;
  }
  const after = (s: Story) => storyReadiness(s.slug)?.afterLesson ?? Infinity;
  const ready = stories
    .filter((s) => after(s) <= lessonNumber)
    .sort((a, b) => after(a) - after(b) || (storyReadiness(a.slug)?.unknownPct ?? 0) - (storyReadiness(b.slug)?.unknownPct ?? 0));
  const unread = ready.find((s) => !isRead(s.slug));
  if (unread) return { story: unread, storyPath };
  if (storyPath === "a2") {
    const easier = sortStoriesByEase(storiesByLevel.a1 ?? []).find((s) => !isRead(s.slug));
    if (easier) return { story: easier, storyPath: "a1" };
  }
  if (ready.length === 0) return null;
  return { story: ready[Math.abs(lessonNumber) % ready.length], storyPath };
}
