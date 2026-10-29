import type { LessonModuleKey } from "@/lib/lessons/registry";
import type { ReadingLevelPath } from "@/lib/stories/registry";
import type { FrenchLevelKey } from "@/lib/lessons/french";
import type { FrenchStoryLevel } from "@/lib/stories/fr";
import type { ExamCourse } from "@/components/exams/examCourse";
import type { GermanLevelKey } from "@/lib/lessons/german";
import type { GermanStoryLevel } from "@/lib/stories/de";
import type { PortugueseLevelKey } from "@/lib/lessons/portuguese";
import type { KoreanLevelKey } from "@/lib/lessons/korean";
import type { ItalianLevelKey } from "@/lib/lessons/italian";
import type { PortugueseStoryLevel } from "@/lib/stories/pt";
import type { KoreanStoryLevel } from "@/lib/stories/ko";
import type { ItalianStoryLevel } from "@/lib/stories/it";

type FrenchStoryLevelPath = FrenchStoryLevel["path"];
type GermanStoryLevelPath = GermanStoryLevel["path"];
type PortugueseStoryLevelPath = PortugueseStoryLevel["path"];
type KoreanStoryLevelPath = KoreanStoryLevel["path"];
type ItalianStoryLevelPath = ItalianStoryLevel["path"];

// The course a shared screen (review, flashcards, study tools) is showing.
// "pt" is the Brazilian Portuguese course, open to every account; "ko" the
// Korean beta, for the beta account only (RootNavigator's withKoreanBeta
// turns everyone else away); "it" the Italian course, open to every
// account.
export type CourseLang = "es" | "ja" | "zh" | "fr" | "de" | "pt" | "ko" | "it";
// The courses with stories, Today's review and Study Tools of their own.
export type ToolsLang = "es" | "fr" | "de" | "pt";
// The same, with the Korean beta (only the beta account; RootNavigator's
// withKoreanBeta turns everyone else away from a "ko" lang).
export type ToolsLangKo = ToolsLang | "ko";
// And with the Italian course (open to every account).
export type ToolsLangBeta = ToolsLangKo | "it";

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
  // The German course's level picker (A1-C2 + Colloquial German &
  // Culture) -- see GermanLevelsScreen. Open to every account, like French.
  GermanLevels: undefined;
  // The Brazilian Portuguese course's level picker (A1-C2) -- see
  // PortugueseLevelsScreen. Open to every account, like German.
  PortugueseLevels: undefined;
  // The Korean beta's level picker (Hangul, Beginner ... Mastery, and the
  // Culture bonus) -- see KoreanLevelsScreen. Only the beta account
  // (lib/koreanBeta.ts).
  KoreanLevels: undefined;
  // The Italian course's level picker (Beginner ... Mastery, and the Culture
  // bonus) -- see ItalianLevelsScreen. Open to every account, like German.
  ItalianLevels: undefined;
  // A Spanish/Japanese/Chinese module by moduleKey, a French level by
  // frenchLevel or a German level by germanLevel (French and German lessons
  // load on demand, see lessons/french.ts and lessons/german.ts).
  LessonList:
    | {
        moduleKey?: LessonModuleKey;
        frenchLevel?: FrenchLevelKey;
        germanLevel?: GermanLevelKey;
        portugueseLevel?: PortugueseLevelKey;
        koreanLevel?: KoreanLevelKey;
        italianLevel?: ItalianLevelKey;
      }
    | undefined;
  // levelPath is passed for French, German, Portuguese, Korean and Italian lessons ("fr/a1", "de/a1", "ko/hangul", "it/a1" ...):
  // their slugs can repeat a Spanish lesson's, and their level is loaded on demand.
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
  // lang "fr" shows the French course's stories (src/lib/stories/fr), "de"
  // the German course's (src/lib/stories/de).
  // "pt" the Portuguese course's (src/lib/stories/pt).
  // "ko" the Korean beta's (src/lib/stories/ko; gated, see withKoreanBeta).
  // "it" the Italian course's (src/lib/stories/it).
  ReadingLevels: { lang?: ToolsLangBeta } | undefined;
  // levelPath defaults to "a1" when omitted; French levels are "fr/a1" ...,
  // German ones germanLevel.
  ReadingsList:
    | {
        levelPath?: ReadingLevelPath;
        frenchLevel?: FrenchStoryLevelPath;
        germanLevel?: GermanStoryLevelPath;
        portugueseLevel?: PortugueseStoryLevelPath;
        koreanLevel?: KoreanStoryLevelPath;
        italianLevel?: ItalianStoryLevelPath;
      }
    | undefined;
  // levelPath is passed for French and German stories, whose slugs live in their own
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
  // lang "de": the German course's, the same way.
  // lang "ko": the Korean beta's (missed questions, then Korean flashcards).
  // lang "it": the Italian course's, the same way.
  TodayReview: { lang?: ToolsLangBeta } | undefined;
  // Hub for the Spanish reference/practice tools below (grammar,
  // conjugation, DELE practice, glossary) plus the placement test.
  // lang "fr": the French course's tools (grammar, conjugation, DELF/DALF,
  // glossary, placement); lang "de" the German course's (Goethe-Zertifikat);
  // lang "pt" the Portuguese course's (Celpe-Bras).
  // lang "ko": the Korean beta's tools (KoreanStudyTools below the hub).
  // lang "it": the Italian course's (lib/italianTools.ts).
  StudyTools: { lang?: ToolsLangBeta } | undefined;
  // Grammar guides (src/lib/grammar, synced from the website) -- the
  // list, then one guide by slug.
  Grammar: { lang?: ToolsLangBeta } | undefined;
  GrammarGuide: { slug: string; lang?: ToolsLangBeta };
  // The website's placement test, with its results screen.
  Placement: undefined;
  // The French course's placement test (src/lib/fr-placementTest.ts).
  FrenchPlacement: undefined;
  // The German course's placement test (src/lib/de-placementTest.ts).
  GermanPlacement: undefined;
  // The Portuguese course's placement test (src/lib/pt-placementTest.ts).
  PortuguesePlacement: undefined;
  // The Korean beta's placement test (src/lib/ko-placementTest.ts).
  KoreanPlacement: undefined;
  // The Italian course's placement test (src/lib/it-placementTest.ts), only
  // reached from the Italian Study Tools (never required).
  ItalianPlacement: undefined;
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
  // The German counterparts (src/lib/de-conjugation, src/lib/de-tools).
  GermanConjugation: { verb?: string } | undefined;
  GermanGlossary: undefined;
  // The Portuguese course's counterparts (src/lib/pt-conjugation, src/lib/pt-tools).
  PortugueseConjugation: { verb?: string } | undefined;
  PortugueseGlossary: undefined;
  // The Korean beta's counterparts (src/lib/ko-conjugation, src/lib/ko-tools):
  // the conjugator and the glossary, which also lists a level's vocabulary
  // (level: "a1" ... "c2", "culture"). And the optional Word Roots
  // (src/lib/ko-roots), the only screens with Hanja.
  KoreanConjugation: { verb?: string } | undefined;
  KoreanGlossary: { level?: string } | undefined;
  KoreanRoots: undefined;
  KoreanRootsLevel: { level: "a1" | "a2" | "b1" | "b2" | "c1" | "c2" };
  // The Italian course's counterparts (src/lib/it-conjugation, src/lib/it-tools):
  // the conjugator and drills, and the glossary, which also lists a level's
  // vocabulary (level: "a1" ... "c2", "culture"; opened that way it's
  // "Vocabulary by Level") and has the grammar terms and false friends as
  // its other sections.
  ItalianConjugation: { verb?: string } | undefined;
  ItalianGlossary: { level?: string; section?: "words" | "terms" | "falseFriends" } | undefined;
  // The Italian course's own reference tools, with their drills (src/lib/it-tools/articles.ts
  // and pronunciation.ts): Articles & Prepositions and Pronunciation & Spelling.
  ItalianArticles: undefined;
  ItalianPronunciation: undefined;
  // DELE practice exams (src/lib/exams, synced from the website): the
  // list, one exam's overview and results, and one paper.
  // course "fr": the DELF/DALF practice exams (src/lib/exams/fr); "de" the
  // Goethe-Zertifikat ones (src/lib/exams/de); "pt" the Celpe-Bras ones
  // (src/lib/exams/pt); "ko" the Korean beta's TOPIK ones (src/lib/exams/ko);
  // "it" the Italian course's CILS ones (src/lib/exams/it).
  Exams: { course?: ExamCourse } | undefined;
  // Writing practice (the website's Writing page): open writing tasks per
  // level, marked by the AI writing feedback.
  Writing: { lang?: "es" | "fr" | "de" | "pt" | "ja" | "zh" | "ko" | "it" } | undefined;
  Exam: { slug: string; course?: ExamCourse };
  ExamPaper: { slug: string; paperId: string; course?: ExamCourse };
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};
