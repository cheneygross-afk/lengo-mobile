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
  level: "A1" | "A2" | "B1" | "B2" | "C1/C2";
  title: string;
  subtitle: string;
  // Short paragraphs of original Spanish narrative -- max ~3 pages.
  paragraphs: string[];
  // 3-4 English multiple-choice comprehension questions per story.
  questions: StoryQuestion[];
};

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
