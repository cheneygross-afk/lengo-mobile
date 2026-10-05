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
  Review: { lang?: "es" | "ja" | "zh" } | undefined;
  // lang defaults to "es" when omitted, so every existing "Flashcards"
  // navigation call (Spanish) keeps working unchanged.
  Flashcards: { lang?: "es" | "ja" | "zh" } | undefined;
  // Premade frequency decks (src/lib/decks) to add to Spanish flashcards.
  FrequencyDecks: undefined;
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
  // The Chinese beta's level picker -- see ChineseLevelsScreen. Shown to
  // the same beta testers as Japanese.
  ChineseLevels: undefined;
  Settings: undefined;
  // First-run setup (starting level + daily goal) -- opened by Home when
  // the account hasn't done it here or on the website.
  Onboarding: undefined;
  // Every-4th-lesson catch-up drill -- see reviewCadence.ts and
  // ReviewDrillScreen. `levelPath` + `slugs` are enough on their own to
  // pull the right questions; `batch` is only needed to mark that batch
  // done afterwards.
  ReviewDrill: { levelPath: string; batch: number; slugs: string[] };
  // Today's review: missed questions + the daily mix + flashcards due
  // (dailyReview.ts) -- see TodayReviewScreen. Spanish only.
  TodayReview: undefined;
  // Hub for the Spanish reference/practice tools below (grammar,
  // conjugation, DELE practice, glossary) plus the placement test.
  StudyTools: undefined;
  // Grammar guides (src/lib/grammar, synced from the website) -- the
  // list, then one guide by slug.
  Grammar: undefined;
  GrammarGuide: { slug: string };
  // The website's placement test, with its results screen.
  Placement: undefined;
  // "Test out" of a unit (units.ts) -- see UnitTestScreen.
  UnitTest: { levelPath: string; unitId: string };
  // Reference tools (src/lib/conjugation, src/lib/glossary, synced from
  // the website): verb tables + drills, optionally opened on one verb,
  // and the course glossary.
  Conjugation: { verb?: string } | undefined;
  Glossary: undefined;
  // DELE practice exams (src/lib/exams, synced from the website): the
  // list, one exam's overview and results, and one paper.
  Exams: undefined;
  Exam: { slug: string };
  ExamPaper: { slug: string; paperId: string };
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};
