// Synced from cheneygross-afk/lengo:src/lib/stories/types.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { MultipleChoiceExercise } from "@/lib/lessons/types";

export type StoryQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Story = {
  slug: string;
  // "EN-A1" ... "EN-C1/C2" are the English for Spanish speakers beta's
  // stories (src/lib/stories/en/): English text, Spanish everything else.
  level: "A1" | "A2" | "B1" | "B2" | "C1/C2" | "EN-A1" | "EN-A2" | "EN-B1" | "EN-B2" | "EN-C1/C2";
  title: string;
  subtitle: string;
  // Short paragraphs of original Spanish narrative -- max ~3 pages.
  paragraphs: string[];
  // 3-4 English multiple-choice comprehension questions per story.
  questions: StoryQuestion[];
  // Nonfiction texts (explainers, news pieces, columns...) name their
  // genre here, e.g. "Explainer" or "Opinion column"; it's shown in place
  // of "Short story". Fiction leaves it off.
  genre?: string;
  // C1/C2 texts written for one of the two levels say which; the original
  // shared C1/C2 stories leave it off and count for both.
  band?: "C1" | "C2";
};

/** The label for a text's kind: its genre, or "Short story" for fiction
 * ("Historia" in the English course, whose genres are in Spanish too). */
export function storyKind(story: Pick<Story, "genre" | "level">): string {
  return story.genre ?? (story.level.startsWith("EN-") ? "Historia" : "Short story");
}

// A word or phrase a story explains in English because readers at its
// level probably haven't met it yet in the lessons. `forms` are the exact
// lowercase spellings used in the story text (a verb can appear as
// "siguió" and "siguieron"), so readers can match a word in the text to
// its gloss without a stemmer. Kept in the per-level *-glosses.ts files,
// keyed by story slug, so the story files themselves stay untouched.
export type StoryGloss = {
  es: string; // dictionary form, e.g. "el arroyo", "despertarse"
  en: string;
  forms: string[];
};

// Adapts a story's plain question data into the shared Exercise format so
// stories can reuse ExerciseBlock exactly like lesson exercises do.
export function toExercises(questions: StoryQuestion[]): MultipleChoiceExercise[] {
  return questions.map((q) => ({ type: "multiple-choice", ...q }));
}
