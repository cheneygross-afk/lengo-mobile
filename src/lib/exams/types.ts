// Synced from cheneygross-afk/lengo:src/lib/exams/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// DELE practice exams (the /exams pages and the app's Exam practice
// screens). Each exam is modelled on the real Instituto Cervantes exam
// for its level: the same four papers ("pruebas"), the same kinds of
// tasks, item counts and timings, with texts, recordings and prompts
// written for this course. Pure data, synced to the app.

export type ExamLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

/** A multiple-choice, true/false, matching or gap-filling item: one
 * right option among `options`. Every auto-graded item is this shape;
 * the task's `layout` decides how it's shown. */
export type ExamItem = {
  /** Item number as printed in the exam ("1", "2"...). */
  n: number;
  /** The question or statement. Empty for a gap in a text, where the
   * number alone identifies it. */
  question: string;
  options: string[];
  answer: number;
  /** Why the answer is right, shown after marking (Spanish; English at A1 and A2). */
  explanation?: string;
  /** Which recording (task.audio index) or text (task.texts index) the
   * item belongs to, when a task has several. */
  source?: number;
};

/** One line of a recording. Dialogue lines alternate voices so a
 * listener can tell speakers apart. */
export type ExamLine = { voice?: "f" | "m"; text: string };

export type ExamAudio = {
  /** "Conversación 1", "Anuncio 3"... */
  label?: string;
  lines: ExamLine[];
};

export type ExamText = {
  /** "A", "Texto 1", a name... shown as the text's heading. */
  label?: string;
  title?: string;
  body: string;
};

/** A writing task, done with the course's "write" exercise (AI feedback
 * when available, otherwise the rubric and model answer as a self-check). */
export type ExamWriteOption = {
  /** "Opción 1"... when the candidate chooses between two. */
  label?: string;
  prompt: string;
  /** Input to react to: a text to read and/or a recording to listen to. */
  input?: { text?: ExamText; audio?: ExamAudio };
  minWords: number;
  maxWords: number;
  rubric: string[];
  modelAnswer: string;
};

/** A speaking task: prompt, preparation and speaking times, what the
 * examiner asks, and a model answer. */
export type ExamSpeakTask = {
  prompt: string;
  /** Material the candidate talks about (a text, a described photo, proposals...). */
  material?: ExamText[];
  /** Points to cover, as in the exam's cue card. */
  points: string[];
  /** Questions the examiner may ask. */
  examinerQuestions?: string[];
  prepMinutes: number;
  speakMinutes: number;
  modelAnswer: string;
};

export type ExamTask = {
  /** "Tarea 1"... */
  title: string;
  /** The exam's own instructions (in Spanish, as in the real exam). */
  instructions: string;
  /** An English gloss of the instructions, for A1 and A2 candidates. */
  instructionsEn?: string;
  texts?: ExamText[];
  audio?: ExamAudio[];
  /** Auto-graded items. */
  items?: ExamItem[];
  /** How items are shown: "choice" lists the options under each question;
   * "select" gives each item a compact picker (matching tasks and gaps,
   * whose options are the same for every item). */
  layout?: "choice" | "select";
  write?: ExamWriteOption[];
  speak?: ExamSpeakTask;
};

export type ExamPaperKind = "reading" | "listening" | "writing" | "speaking";

export type ExamPaper = {
  /** URL segment: "lectura", "auditiva", "escrita", "oral". */
  id: string;
  kind: ExamPaperKind;
  title: string;
  minutes: number;
  /** Preparation time before a speaking paper, not counted in `minutes`. */
  prepMinutes?: number;
  /** DELE marks every exam in two groups of two papers (see scoring.ts). */
  group: 1 | 2;
  tasks: ExamTask[];
};

export type Exam = {
  slug: string;
  level: ExamLevel;
  title: string;
  /** For the list and the page's meta description. */
  description: string;
  papers: ExamPaper[];
};
