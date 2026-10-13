// The French course's stories in the app (synced from the website into
// ./fr), loaded on demand like the French lessons (lessons/french.ts): the
// stories with their glosses are large, which
// only French readers need. Story levelPaths are the website's ("fr/a1" ...
// "fr/c2"), so read-tracking and highlights line up across both; French
// story slugs all start with "fr-", so they never collide with Spanish ones.
import type { Story, StoryGloss } from "./types";
import type { FrenchStoryLevel } from "./fr";

export type FrenchStories = {
  levels: FrenchStoryLevel[];
  glosses: (slug: string) => StoryGloss[];
};

let loading: Promise<FrenchStories> | null = null;
let loaded: FrenchStories | null = null;

export function loadFrenchStories(): Promise<FrenchStories> {
  if (!loading) {
    loading = Promise.all([import("./fr"), import("./fr/fr-glosses")]).then(
      ([stories, glosses]) => {
        loaded = {
          levels: stories.FR_STORY_LEVELS,
          glosses: glosses.frenchStoryGlosses,
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

export function frenchStoriesIfLoaded(): FrenchStories | null {
  return loaded;
}

/** True for a French-course story's slug. */
export function isFrenchStorySlug(slug: string): boolean {
  return slug.startsWith("fr-");
}

/** A French story, its level ("fr/a1" ...) and the next story in that level. */
export function findFrenchStory(
  data: FrenchStories,
  slug: string
): { story: Story; levelPath: string; levelLabel: string; next?: Story } | null {
  for (const level of data.levels) {
    const i = level.stories.findIndex((s) => s.slug === slug);
    if (i !== -1) return { story: level.stories[i], levelPath: `fr/${level.path}`, levelLabel: level.label, next: level.stories[i + 1] };
  }
  return null;
}
