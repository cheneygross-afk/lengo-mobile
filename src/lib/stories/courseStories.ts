// The French and German courses', the Brazilian Portuguese course's and the
// Korean and Italian betas' stories behind one interface, for the shared
// story screens (ReadingLevels, ReadingsList, StoryReader). Each course's
// stories load on demand (stories/french.ts, stories/german.ts,
// stories/portuguese.ts, stories/korean.ts, stories/italian.ts): only that
// course's readers need them.
import type { Story, StoryGloss } from "./types";
import { findFrenchStory, frenchStoriesIfLoaded, isFrenchStorySlug, loadFrenchStories } from "./french";
import { findGermanStory, germanStoriesIfLoaded, isGermanStorySlug, loadGermanStories } from "./german";
import { findPortugueseStory, isPortugueseStorySlug, loadPortugueseStories, portugueseStoriesIfLoaded } from "./portuguese";
import { findKoreanStory, isKoreanStorySlug, koreanStoriesIfLoaded, loadKoreanStories } from "./korean";
import { findItalianStory, isItalianStorySlug, italianStoriesIfLoaded, loadItalianStories } from "./italian";
import { FRENCH_LANG, GERMAN_LANG, ITALIAN_LANG, KOREAN_LANG, PORTUGUESE_LANG, type SpeechLang } from "@/lib/speech";

// "ko" is the Korean beta: its screens are gated (withKoreanBeta.tsx); "it"
// the Italian beta, the same way (withItalianBeta.tsx).
export type StoryCourse = "fr" | "de" | "pt" | "ko" | "it";

export type CourseStoryLevel = {
  path: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  label: string;
  name: string;
  stories: Story[];
};

export type CourseStories = {
  levels: CourseStoryLevel[];
  glosses: (slug: string) => StoryGloss[];
};

export type StoryCourseConfig = {
  course: StoryCourse;
  /** "French", "German", "Portuguese", "Korean", "Italian". */
  name: string;
  lang: SpeechLang;
  /** The translator direction for a tapped word. */
  direction: "fr-en" | "de-en" | "pt-en" | "ko-en" | "it-en";
  /** Levels are shown by name only ("Beginner" ... "Mastery"), never by
   * code: the Korean and Italian courses'. */
  namedLevels: boolean;
  /** The story levels whose key words are listed under the text. */
  keyWordLevels: string[];
  load: () => Promise<CourseStories>;
  ifLoaded: () => CourseStories | null;
  find: (
    data: CourseStories,
    slug: string
  ) => { story: Story; levelPath: string; levelLabel: string; next?: Story } | null;
  isSlug: (slug: string) => boolean;
};

export const STORY_COURSES: Record<StoryCourse, StoryCourseConfig> = {
  fr: {
    course: "fr",
    name: "French",
    lang: FRENCH_LANG,
    direction: "fr-en",
    keyWordLevels: ["FR-A1", "FR-A2"],
    load: loadFrenchStories,
    ifLoaded: frenchStoriesIfLoaded,
    find: findFrenchStory,
    isSlug: isFrenchStorySlug,
    namedLevels: false,
  },
  de: {
    course: "de",
    name: "German",
    lang: GERMAN_LANG,
    direction: "de-en",
    keyWordLevels: ["DE-A1", "DE-A2"],
    load: loadGermanStories,
    ifLoaded: germanStoriesIfLoaded,
    find: findGermanStory,
    isSlug: isGermanStorySlug,
    namedLevels: false,
  },
  pt: {
    course: "pt",
    name: "Portuguese",
    lang: PORTUGUESE_LANG,
    direction: "pt-en",
    keyWordLevels: ["PT-A1", "PT-A2"],
    load: loadPortugueseStories,
    ifLoaded: portugueseStoriesIfLoaded,
    find: findPortugueseStory,
    isSlug: isPortugueseStorySlug,
    namedLevels: false,
  },
  ko: {
    course: "ko",
    name: "Korean",
    lang: KOREAN_LANG,
    direction: "ko-en",
    // No key-word box, as on the website's Korean stories.
    keyWordLevels: [],
    load: loadKoreanStories,
    ifLoaded: koreanStoriesIfLoaded,
    find: findKoreanStory,
    isSlug: isKoreanStorySlug,
    namedLevels: true,
  },
  it: {
    course: "it",
    name: "Italian",
    lang: ITALIAN_LANG,
    direction: "it-en",
    // The key-word box under the first two levels' texts, as for Portuguese.
    keyWordLevels: ["IT-A1", "IT-A2"],
    load: loadItalianStories,
    ifLoaded: italianStoriesIfLoaded,
    find: findItalianStory,
    isSlug: isItalianStorySlug,
    namedLevels: true,
  },
};

/** The course a story belongs to, from its slug or levelPath; null for a
 * Spanish reading. */
export function storyCourseOf(slug: string, levelPath?: string): StoryCourse | null {
  if (isFrenchStorySlug(slug) || levelPath?.startsWith("fr/")) return "fr";
  if (isGermanStorySlug(slug) || levelPath?.startsWith("de/")) return "de";
  if (isPortugueseStorySlug(slug) || levelPath?.startsWith("pt/")) return "pt";
  if (isKoreanStorySlug(slug) || levelPath?.startsWith("ko/")) return "ko";
  if (isItalianStorySlug(slug) || levelPath?.startsWith("it/")) return "it";
  return null;
}
