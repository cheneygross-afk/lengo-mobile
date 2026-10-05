// Synced from cheneygross-afk/lengo:src/lib/lessons/types.ts by scripts/sync-content.mjs -- edit it there, not here.
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
  // English meaning of the whole sentence, with [square brackets] around
  // the words the blank stands for. When present the exercise is asked as
  // a translation ("say the bold words in Spanish") rather than a
  // conjugation drill, and the sentence carries no "(verb, person)" cue.
  en?: string;
  // Other answers that are just as correct as `answer` (e.g. "Llevo" for
  // "Estoy" in "___ trabajando desde esta mañana").
  altAnswers?: string[];
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
  // Other word orders that are just as correct as `words`, each a
  // rearrangement of the same words.
  altOrders?: string[][];
  explanation: string;
};

export type MatchingExercise = {
  type: "matching";
  instructions: string;
  pairs: { left: string; right: string }[];
  explanation: string;
};

// ---- Listening, speaking and writing ----------------------------------
// These four practise skills the text-only types above can't: hearing
// Spanish without seeing it, saying it, and writing freely.

// A Spanish word or sentence is played (text hidden until answered); the
// learner picks its meaning, or the word they heard, from the options.
export type ListenChooseExercise = {
  type: "listen-choose";
  audio: string; // the Spanish that is spoken
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

// A Spanish sentence is played; the learner types what they hear. Graded
// like any typed Spanish answer (accent slips and small typos pass with
// a note).
export type DictationExercise = {
  type: "dictation";
  audio: string;
  answer?: string; // what counts as right; defaults to `audio`
  altAnswers?: string[];
  explanation: string;
};

// Record-and-compare: the learner hears the model, records themselves,
// plays both back and judges whether they sounded close. The recording
// never leaves the device. Self-assessed: "close" counts as correct.
export type SpeakExercise = {
  type: "speak";
  text: string; // the Spanish sentence to say
  // Respond aloud: an English cue ("Say it in Spanish: ...") the learner
  // answers out loud before hearing anything. `text` is then the model
  // answer, kept hidden until they've recorded (or tap "Show the answer").
  prompt?: string;
  tip?: string; // a pronunciation tip
  explanation: string;
};

// Free writing. With AI feedback available the text gets corrections, a
// rubric check and a 1-5 score; otherwise the model answer and rubric are
// shown as a self-check. Submitting counts as correct either way.
export type WriteExercise = {
  type: "write";
  prompt: string; // the task, in the level's instruction language
  minWords: number;
  maxWords: number;
  rubric: string[]; // what the text should include
  modelAnswer: string;
  explanation: string;
};

// Optional curriculum tags on an exercise (see src/lib/curriculum and
// docs/curriculum-architecture.md). Everything here can also be derived
// -- concepts from the lesson's own tags, skill and difficulty from the
// exercise type -- so it's only written where the derived value is wrong.
export type ExerciseMeta = {
  // Concept ids the question tests (one or more).
  concepts?: string[];
  skill?: "grammar" | "vocabulary" | "reading" | "listening" | "speaking" | "writing" | "pronunciation" | "characters";
  // 1 recognise, 2 produce with support, 3 produce, 4 use in context.
  difficulty?: 1 | 2 | 3 | 4;
  // Set on a copy placed in a generated review or test: the id of the
  // item it was copied from ("zh-greetings#3"), so a learner's answer is
  // credited to the original item and its concepts.
  from?: string;
};

export type Exercise = (
  | MultipleChoiceExercise
  | MultiSelectExercise
  | FillBlankExercise
  | TranslateExercise
  | WordOrderExercise
  | MatchingExercise
  | ListenChooseExercise
  | DictationExercise
  | SpeakExercise
  | WriteExercise
) & { meta?: ExerciseMeta };

// What a lesson is for in its level's rhythm (teach, then reinforce and
// drill, with spaced review lessons later). See docs/curriculum-architecture.md.
export type LessonKind = "teach" | "reinforce" | "drill" | "review" | "unit-review" | "level-test" | "skills";

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
  // The review lesson at the end of each A1-C2 unit (unit-reviews.ts):
  // a short unit quiz plus listening, speaking and writing practice built
  // from the unit's lessons. Required, but never used for testing out.
  unitReview?: boolean;
  // "JA-Alphabets", "JA-A1", "JA-A2", "JA-B1", "JA-B2", "JA-C1", and "JA-C2" are the hidden
  // Japanese track's pre-A1 hiragana/katakana module and its first four real
  // grammar modules (see src/lib/lessons/ja-alphabets.ts, ja-a1.ts, ja-a2.ts,
  // ja-b1.ts, ja-b2.ts, ja-c1.ts, and ja-c2.ts) -- not
  // CEFR levels, kept in this same union so the shared Lesson/Exercise/
  // LessonRunner machinery works unchanged for them instead of forking a
  // parallel type.
  // "C1/C2" is the separate, still-combined Cosas Coloquiales module
  // (see c1c2-cosas-coloquiales.ts) -- the core C1/C2 sequence itself
  // was split into standalone "C1" and "C2" modules (c1.ts / c2.ts).
  // "EN-A1" ... "EN-C2" are the English for Spanish speakers beta track
  // (see en-course.ts), kept here for the same reason.
  // "ZH-Pinyin", "ZH-A1", "ZH-A2" and "ZH-B1" are the Chinese (Mandarin) beta track (see
  // src/lib/lessons/zh/README.md).
  level:
    | "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "C1/C2"
    | "JA-Alphabets" | "JA-A1" | "JA-A2" | "JA-B1" | "JA-B2" | "JA-C1" | "JA-C2"
    | "EN-A1" | "EN-A2" | "EN-B1" | "EN-B2" | "EN-C1" | "EN-C2"
    | "ZH-Pinyin" | "ZH-A1" | "ZH-A2" | "ZH-B1";
  number: number;
  title: string;
  summary: string;
  duration: string;
  sections: LessonSection[];
  // The longer, mixed-format review at the end of the lesson.
  exercises: Exercise[];
  // ---- Curriculum tags (optional; see src/lib/curriculum) ----
  kind?: LessonKind;
  // Concept ids this lesson introduces (teach lessons).
  teaches?: string[];
  // Concept ids this lesson practises or reviews (every other kind).
  reviews?: string[];
  // Concepts used here as fixed phrases before they're taught (e.g. 很 in
  // 认识你很高兴 before adjective sentences) -- allowed by the leak check.
  previews?: string[];
  // The named format of a reinforce/drill/review lesson ("Pattern practice").
  format?: string;
  // "authored"; "generated:<spec id>" for a lesson drafted from a spec;
  // "assembled:<kind>" for one built from the item bank at build time
  // (spaced reviews, unit reviews, level tests -- src/lib/curriculum/assemble.ts).
  source?: string;
};
