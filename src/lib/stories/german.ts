// The German course's stories in the app (synced from the website into
// ./de), loaded on demand like the German lessons (lessons/german.ts): the
// stories with their English translations and glosses are about 2 MB, which
// only German readers need. Story levelPaths are the website's ("de/a1" ...
// "de/c2"), so read-tracking and highlights line up across both; German
// story slugs all start with "de-", so they never collide with Spanish ones.
import type { Story, StoryGloss } from "./types";
import type { GermanStoryLevel } from "./de";

export type GermanStories = {
  levels: GermanStoryLevel[];
  glosses: (slug: string) => StoryGloss[];
  /** One English paragraph per story paragraph, or null. */
  english: (slug: string, paragraphCount: number) => string[] | null;
};

let loading: Promise<GermanStories> | null = null;
let loaded: GermanStories | null = null;

export function loadGermanStories(): Promise<GermanStories> {
  if (!loading) {
    loading = Promise.all([import("./de"), import("./de/de-glosses"), import("./de/de-translations")]).then(
      ([stories, glosses, english]) => {
        loaded = {
          levels: stories.DE_STORY_LEVELS,
          glosses: glosses.germanStoryGlosses,
          english: english.germanStoryEnglish,
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

export function germanStoriesIfLoaded(): GermanStories | null {
  return loaded;
}

/** True for a German-course story's slug. */
export function isGermanStorySlug(slug: string): boolean {
  return slug.startsWith("de-");
}

/** A German story, its level ("de/a1" ...) and the next story in that level. */
export function findGermanStory(
  data: GermanStories,
  slug: string
): { story: Story; levelPath: string; levelLabel: string; next?: Story } | null {
  for (const level of data.levels) {
    const i = level.stories.findIndex((s) => s.slug === slug);
    if (i !== -1) return { story: level.stories[i], levelPath: `de/${level.path}`, levelLabel: level.label, next: level.stories[i + 1] };
  }
  return null;
}
