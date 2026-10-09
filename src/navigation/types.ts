import type { LessonModuleKey } from "@/lib/lessons/registry";
import type { ReadingLevelPath } from "@/lib/stories/registry";
import type { FrenchLevelKey } from "@/lib/lessons/french";
import type { FrenchStoryLevel } from "@/lib/stories/fr";

type FrenchStoryLevelPath = FrenchStoryLevel["path"];

// The course a shared screen (review, flashcards, study tools) is showing.
export type CourseLang = "es" | "ja" | "zh" | "fr";

export type AppStackParamList = {
  Home: undefined;
  // Spanish's level picker (A1-C2 + Cosas Coloquiales) -- see
  // SpanishLevelsScreen. Mirrors JapaneseLevels below; Home routes here
  // instead of straight into LessonList so every level beyond A1 is
  // actually reachable.
  SpanishLevels: undefined;
  // The French course's level picker (A1-C2 + Colloquial French &
  // Culture) -- see FrenchLevelsScreen. Open to every account, like Spanish.
  FrenchLevels: undefined;
  // A Spanish/Japanese/Chinese module by moduleKey, or a French level by
  // frenchLevel (French lessons load on demand, see lessons/french.ts).
  LessonList: { moduleKey?: LessonModuleKey; frenchLevel?: FrenchLevelKey } | undefined;
  // levelPath is passed for French lessons ("fr/a1" ...): their slugs can
  // repeat a Spanish lesson's, and their level is loaded on demand.
  LessonRunner: { slug: string; levelPath?: string };
  // lang defaults to "es" when omitted, so every existing "Review"
  // navigation call (Spanish) keeps working unchanged -- see
  // ReviewListScreen, which uses it to only show that language's own
  // saved lessons, never both tracks merged together.
  Review: { lang?: CourseLang } | undefined;
  // lang defaults to "es" when omitted, so every existing "Flashcards"
  // navigation call (Spanish) keeps working unchanged.
  Flashcards: { lang?: CourseLang } | undefined;
  // Premade frequency decks (src/lib/decks) to add to Spanish flashcards.
  FrequencyDecks: undefined;
  // Readings' level picker (A1-C1/C2) -- see ReadingLevelsScreen. Home
  // routes here; each level opens ReadingsList for that level.
  // lang "fr" shows the French course's stories (src/lib/stories/fr).
  ReadingLevels: { lang?: "es" | "fr" } | undefined;
  // levelPath defaults to "a1" when omitted; French levels are "fr/a1" ...
  ReadingsList: { levelPath?: ReadingLevelPath; frenchLevel?: FrenchStoryLevelPath } | undefined;
  // levelPath is passed for French stories, whose slugs live in their own
  // (lazily loaded) collection.
  StoryReader: { slug: string; levelPath?: string };
  // Japanese beta's level picker (Alphabets/A1/A2/B1) -- see
  // JapaneseLevelsScreen. Only reachable from Home when the signed-in
  // account has japanese_beta_access.
  JapaneseLevels: undefined;
  // The Chinese beta's level picker -- see ChineseLevelsScreen. Shown to
  // the same beta testers as Japanese.
  ChineseLevels: undefined;
  // The Chinese beta's own daily review (per-concept scheduler) -- see
  // ChineseReviewScreen. Separate from the Spanish TodayReview.
  ChineseReview: undefined;
  // The Chinese placement test -- see ChinesePlacementScreen.
  ChinesePlacement: undefined;
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
  // lang "fr": the French course's own (missed questions + flashcards).
  TodayReview: { lang?: "es" | "fr" } | undefined;
  // Hub for the Spanish reference/practice tools below (grammar,
  // conjugation, DELE practice, glossary) plus the placement test.
  // lang "fr": the French course's tools (grammar, conjugation, DELF/DALF,
  // glossary, placement).
  StudyTools: { lang?: "es" | "fr" } | undefined;
  // Grammar guides (src/lib/grammar, synced from the website) -- the
  // list, then one guide by slug.
  Grammar: { lang?: "es" | "fr" } | undefined;
  GrammarGuide: { slug: string; lang?: "es" | "fr" };
  // The website's placement test, with its results screen.
  Placement: undefined;
  // The French course's placement test (src/lib/fr-placementTest.ts).
  FrenchPlacement: undefined;
  // "Test out" of a unit (units.ts) -- see UnitTestScreen.
  UnitTest: { levelPath: string; unitId: string };
  // Reference tools (src/lib/conjugation, src/lib/glossary, synced from
  // the website): verb tables + drills, optionally opened on one verb,
  // and the course glossary.
  Conjugation: { verb?: string } | undefined;
  Glossary: undefined;
  // The French counterparts (src/lib/fr-conjugation, the French vocabulary
  // tables in src/lib/fr-tools).
  FrenchConjugation: { verb?: string } | undefined;
  FrenchGlossary: undefined;
  // DELE practice exams (src/lib/exams, synced from the website): the
  // list, one exam's overview and results, and one paper.
  // course "fr": the DELF/DALF practice exams (src/lib/exams/fr).
  Exams: { course?: "es" | "fr" } | undefined;
  Exam: { slug: string; course?: "es" | "fr" };
  ExamPaper: { slug: string; paperId: string; course?: "es" | "fr" };
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};
