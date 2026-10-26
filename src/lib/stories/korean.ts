// The Korean course's stories in the app (synced from the website into
// ./ko), loaded on demand like the other courses' stories. A private beta:
// every Korean screen is gated to the beta account (withKoreanBeta.tsx), as
// the website gates /lessons/ko/stories. Story levelPaths are the website's
// ("ko/a1" ... "ko/c2"), so read-tracking and highlights line up across
// both; Korean story slugs all start with "ko-", so they never collide with
// another course's. Levels are shown by name ("Beginner" ... "Mastery"),
// never by code. They have no whole-text translation: readers tap a word
// for its meaning.
import type { Story, StoryGloss } from "./types";
import type { KoreanStoryLevel } from "./ko";

export type KoreanStories = {
  levels: KoreanStoryLevel[];
  glosses: (slug: string) => StoryGloss[];
};

let loading: Promise<KoreanStories> | null = null;
let loaded: KoreanStories | null = null;

export function loadKoreanStories(): Promise<KoreanStories> {
  if (!loading) {
    loading = Promise.all([import("./ko"), import("./ko/ko-glosses")]).then(([stories, glosses]) => {
      loaded = {
        levels: stories.KO_STORY_LEVELS,
        glosses: glosses.koreanStoryGlosses,
      };
      return loaded;
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function koreanStoriesIfLoaded(): KoreanStories | null {
  return loaded;
}

/** True for a Korean-course story's slug. */
export function isKoreanStorySlug(slug: string): boolean {
  return slug.startsWith("ko-");
}

/** A Korean story, its level ("ko/a1" ...) and the next story in that level. */
export function findKoreanStory(
  data: KoreanStories,
  slug: string
): { story: Story; levelPath: string; levelLabel: string; next?: Story } | null {
  for (const level of data.levels) {
    const i = level.stories.findIndex((s) => s.slug === slug);
    if (i !== -1) return { story: level.stories[i], levelPath: `ko/${level.path}`, levelLabel: level.label, next: level.stories[i + 1] };
  }
  return null;
}
