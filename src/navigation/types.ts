import type { LessonModuleKey } from "@/lib/lessons/registry";

export type AppStackParamList = {
  Home: undefined;
  LessonList: { moduleKey?: LessonModuleKey } | undefined;
  LessonRunner: { slug: string };
  Review: undefined;
  // lang defaults to "es" when omitted, so every existing "Flashcards"
  // navigation call (Spanish) keeps working unchanged.
  Flashcards: { lang?: "es" | "ja" } | undefined;
  ReadingsList: undefined;
  StoryReader: { slug: string };
  // Japanese beta's level picker (Alphabets/A1/A2/B1) -- see
  // JapaneseLevelsScreen. Only reachable from Home when the signed-in
  // account has japanese_beta_access.
  JapaneseLevels: undefined;
  Settings: undefined;
  // Every-4th-lesson catch-up drill -- see reviewCadence.ts and
  // ReviewDrillScreen. `levelPath` + `slugs` are enough on their own to
  // pull the right questions; `batch` is only needed to mark that batch
  // done afterwards.
  ReviewDrill: { levelPath: string; batch: number; slugs: string[] };
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};
