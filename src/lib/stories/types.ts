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

// Adapts a story's plain question data into the shared Exercise format so
// stories can reuse ExerciseBlock exactly like lesson exercises do.
export function toExercises(questions: StoryQuestion[]): MultipleChoiceExercise[] {
  return questions.map((q) => ({ type: "multiple-choice", ...q }));
}
