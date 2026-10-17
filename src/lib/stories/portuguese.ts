// The Brazilian Portuguese beta's stories in the app (synced from the
// website into ./pt), loaded on demand like the Portuguese lessons
// (lessons/portuguese.ts): only the beta accounts read them. Story
// levelPaths are the website's ("pt/a1" ... "pt/c2"), so read-tracking and
// highlights line up across both; Portuguese story slugs all start with
// "pt-", so they never collide with another course's. They have no
// whole-text translation: readers tap a word for its meaning.
import type { Story, StoryGloss } from "./types";
import type { PortugueseStoryLevel } from "./pt";

export type PortugueseStories = {
  levels: PortugueseStoryLevel[];
  glosses: (slug: string) => StoryGloss[];
};

let loading: Promise<PortugueseStories> | null = null;
let loaded: PortugueseStories | null = null;

export function loadPortugueseStories(): Promise<PortugueseStories> {
  if (!loading) {
    loading = Promise.all([import("./pt"), import("./pt/pt-glosses")]).then(
      ([stories, glosses]) => {
        loaded = {
          levels: stories.PT_STORY_LEVELS,
          glosses: glosses.portugueseStoryGlosses,
        };
        return loaded;
      }
    );
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function portugueseStoriesIfLoaded(): PortugueseStories | null {
  return loaded;
}

/** True for a Portuguese-course story's slug. */
export function isPortugueseStorySlug(slug: string): boolean {
  return slug.startsWith("pt-");
}

/** A Portuguese story, its level ("pt/a1" ...) and the next story in that level. */
export function findPortugueseStory(
  data: PortugueseStories,
  slug: string
): { story: Story; levelPath: string; levelLabel: string; next?: Story } | null {
  for (const level of data.levels) {
    const i = level.stories.findIndex((s) => s.slug === slug);
    if (i !== -1) return { story: level.stories[i], levelPath: `pt/${level.path}`, levelLabel: level.label, next: level.stories[i + 1] };
  }
  return null;
}
