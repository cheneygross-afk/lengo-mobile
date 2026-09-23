export type MultipleChoiceExercise = {
  type: "multiple-choice";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type MultiSelectExercise = {
  type: "multi-select";
  question: string;
  options: string[];
  correctIndexes: number[];
  explanation: string;
};

export type FillBlankExercise = {
  type: "fill-blank";
  prompt: string;
  sentence: string; // use ___ as the blank placeholder
  answer: string;
  hint?: string;
  explanation: string;
};

export type TranslateExercise = {
  type: "translate";
  direction: "es-en" | "en-es";
  prompt: string;
  source: string;
  answer: string;
  altAnswers?: string[];
  explanation: string;
};

export type WordOrderExercise = {
  type: "word-order";
  prompt: string;
  words: string[]; // the correct order; the UI shuffles for display
  translation?: string;
  explanation: string;
};

export type MatchingExercise = {
  type: "matching";
  instructions: string;
  pairs: { left: string; right: string }[];
  explanation: string;
};

export type Exercise =
  | MultipleChoiceExercise
  | MultiSelectExercise
  | FillBlankExercise
  | TranslateExercise
  | WordOrderExercise
  | MatchingExercise;

export type LessonExample = { es: string; en?: string };

export type LessonSection = {
  heading: string;
  body: string[];
  examples?: LessonExample[];
  // A short 1-2 question check that appears right after this section, so
  // practice is spread through the lesson instead of dumped at the end.
  checkpoint?: Exercise[];
};

export type Lesson = {
  slug: string;
  // Marks a lesson as extra repetition/practice rather than required,
  // core-path content -- e.g. the Japanese alphabet module's dedicated
  // drill lessons, which teach nothing new and exist purely so spaced
  // repetition doesn't have to be crammed into the lessons that DO teach
  // new characters. Shown as "Lesson N · (optional)" in LessonList and
  // LessonRunner. Never set means required, same as before this existed.
  optional?: boolean;
  // "JA-Alphabets", "JA-A1", "JA-A2", and "JA-B1" are the hidden Japanese
  // track's pre-A1 hiragana/katakana module and its first three real grammar
  // modules (see src/lib/lessons/ja-alphabets.ts, ja-a1.ts, ja-a2.ts, and
  // ja-b1.ts) -- not
  // CEFR levels, kept in this same union so the shared Lesson/Exercise/
  // LessonRunner machinery works unchanged for them instead of forking a
  // parallel type.
  // "C1/C2" is the separate, still-combined Cosas Coloquiales module
  // (see c1c2-cosas-coloquiales.ts) -- the core C1/C2 sequence itself
  // was split into standalone "C1" and "C2" modules (c1.ts / c2.ts).
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "C1/C2" | "JA-Alphabets" | "JA-A1" | "JA-A2" | "JA-B1" | "JA-B2";
  number: number;
  title: string;
  summary: string;
  duration: string;
  sections: LessonSection[];
  // The longer, mixed-format review at the end of the lesson.
  exercises: Exercise[];
};
