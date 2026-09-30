import type { LessonModuleKey } from "@/lib/lessons/registry";
import type { ReadingLevelPath } from "@/lib/stories/registry";

export type AppStackParamList = {
  Home: undefined;
  // Spanish's level picker (A1-C2 + Cosas Coloquiales) -- see
  // SpanishLevelsScreen. Mirrors JapaneseLevels below; Home routes here
  // instead of straight into LessonList so every level beyond A1 is
  // actually reachable.
  SpanishLevels: undefined;
  LessonList: { moduleKey?: LessonModuleKey } | undefined;
  LessonRunner: { slug: string };
  // lang defaults to "es" when omitted, so every existing "Review"
  // navigation call (Spanish) keeps working unchanged -- see
  // ReviewListScreen, which uses it to only show that language's own
  // saved lessons, never both tracks merged together.
  Review: { lang?: "es" | "ja" } | undefined;
  // lang defaults to "es" when omitted, so every existing "Flashcards"
  // navigation call (Spanish) keeps working unchanged.
  Flashcards: { lang?: "es" | "ja" } | undefined;
  // Readings' level picker (A1-C1/C2) -- see ReadingLevelsScreen. Home
  // routes here; each level opens ReadingsList for that level.
  ReadingLevels: undefined;
  // levelPath defaults to "a1" when omitted.
  ReadingsList: { levelPath?: ReadingLevelPath } | undefined;
  StoryReader: { slug: string };
  // Japanese beta's level picker (Alphabets/A1/A2/B1) -- see
  // JapaneseLevelsScreen. Only reachable from Home when the signed-in
  // account has japanese_beta_access.
  JapaneseLevels: undefined;
  Settings: undefined;
  // First-run setup (starting level + daily goal) -- opened by Home when
  // the account hasn't done it here or on the website.
  Onboarding: undefined;
  // Every-4th-lesson catch-up drill -- see reviewCadence.ts and
  // ReviewDrillScreen. `levelPath` + `slugs` are enough on their own to
  // pull the right questions; `batch` is only needed to mark that batch
  // done afterwards.
  ReviewDrill: { levelPath: string; batch: number; slugs: string[] };
  // Grammar guides (src/lib/grammar, synced from the website) -- the
  // list, then one guide by slug.
  Grammar: undefined;
  GrammarGuide: { slug: string };
  // The website's placement test, with its results screen.
  Placement: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};
