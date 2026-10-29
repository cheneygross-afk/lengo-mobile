// The Italian course's stories in the app (synced from the website into
// ./it), loaded on demand like the other courses' stories; free to every
// account, like French and German. Story levelPaths are the
// website's ("it/a1" ... "it/c2"), so read-tracking and highlights line up
// across both; Italian story slugs all start with "it-", so they never
// collide with another course's. Levels are shown by name ("Beginner" ...
// "Mastery"), never by code. They have no whole-text translation: readers
// tap a word for its meaning.
import type { Story, StoryGloss } from "./types";
import type { ItalianStoryLevel } from "./it";

export type ItalianStories = {
  levels: ItalianStoryLevel[];
  glosses: (slug: string) => StoryGloss[];
};

let loading: Promise<ItalianStories> | null = null;
let loaded: ItalianStories | null = null;

export function loadItalianStories(): Promise<ItalianStories> {
  if (!loading) {
    loading = Promise.all([import("./it"), import("./it/it-glosses")]).then(([stories, glosses]) => {
      loaded = {
        levels: stories.IT_STORY_LEVELS,
        glosses: glosses.italianStoryGlosses,
      };
      return loaded;
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function italianStoriesIfLoaded(): ItalianStories | null {
  return loaded;
}

/** True for an Italian-course story's slug. */
export function isItalianStorySlug(slug: string): boolean {
  return slug.startsWith("it-");
}

/** An Italian story, its level ("it/a1" ...) and the next story in that level. */
export function findItalianStory(
  data: ItalianStories,
  slug: string
): { story: Story; levelPath: string; levelLabel: string; next?: Story } | null {
  for (const level of data.levels) {
    const i = level.stories.findIndex((s) => s.slug === slug);
    if (i !== -1) return { story: level.stories[i], levelPath: `it/${level.path}`, levelLabel: level.label, next: level.stories[i + 1] };
  }
  return null;
}
