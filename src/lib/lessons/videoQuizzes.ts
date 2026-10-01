// Synced from cheneygross-afk/lengo:src/lib/lessons/videoQuizzes.ts by scripts/sync-content.mjs -- edit it there, not here.
// Comprehension quizzes ("Check your understanding") for the linked YouTube
// videos in lessonVideos.ts. A video with an entry here gets a small "Quiz"
// badge on its card; once the learner has opened the video, the card offers
// the quiz, which runs one question at a time with feedback after each.
// Videos without an entry look and behave exactly as before.
//
// HOW TO ADD A QUIZ -- only after watching the whole video. Never write a
// question from a video's title or thumbnail, and never guess what is said.
//
//   VIDEO_QUIZZES = {
//     "<videoId>": {               // the 11-character id in lessonVideos.ts
//       checkedBy: "<name>",       // who watched it and checked the answers
//       questions: [               // 4-6 questions; check-content allows 3-8
//         {
//           question: "<question>",
//           options: ["<option>", "<option>", "<option>"],  // 3 or 4, shown shuffled
//           answerIndex: 0,         // which option is right (0-based)
//           explanation: "<why, citing what is said>",
//           atSeconds: 95,          // optional: where the answer is (1:35)
//         },
//         {
//           // True/false: exactly ["True", "False"] (A1-A2) or
//           // ["Verdadero", "Falso"] (B1+), kept in that order.
//           question: "<a statement about the video>",
//   //           answerIndex: 1,
//           explanation: "<what is actually said>",
//           atSeconds: 210,
//         },
//       ],
//     },
//   };
//
// Aim for a mix: one or two gist questions (what is the video mostly
// about, what happens in the end), two or three detail questions (a
// number, a place, who did what) and one inference question (why someone
// feels or acts as they do, what they probably mean). Options should all
// be plausible to someone who didn't follow the video.
//
// Language follows the course rule, by the video's level (videoLevel()):
// questions, options and explanations are in English for A1 and A2 videos
// and in Spanish for B1 and above. Quoting a Spanish word inside an English
// question is fine ("What does Pablo mean by 'qué chévere'?"); every word
// is tap-to-hear in the quiz.
//
// `atSeconds` powers the "Rewatch at m:ss" link after each answer, which
// opens the video at that moment on YouTube.
//
// `npm run check-content` checks every key is a videoId in lessonVideos.ts,
// each quiz has 3-8 questions, each question has 3-4 options (or is a
// True/False pair in the quiz's language) and answerIndex points at one.
import { LESSON_VIDEOS, LEVEL_WATCH_VIDEOS, type LessonVideo } from "./lessonVideos";
import type { SpanishLevelPath } from "./levels";

export type VideoQuizQuestion = {
  question: string;
  /** 3-4 options (shown shuffled), or a True/False pair (kept in order). */
  options: string[];
  answerIndex: number;
  /** Why the answer is right, shown after the learner answers. */
  explanation: string;
  /** Where in the video the answer is, in seconds. */
  atSeconds?: number;
};

export type VideoQuiz = {
  questions: VideoQuizQuestion[];
  /** Who watched the video and checked the questions against it. */
  checkedBy?: string;
};

export const VIDEO_QUIZZES: Record<string, VideoQuiz> = {};

// ---- Helpers shared by the website and the app ------------------------

/** A quiz counts as passed at this share of correct answers or more. */
export const VIDEO_QUIZ_PASS = 0.7;
/** "Ready for the next level's videos" once this many quizzes at a level
 * have been taken with at least this average. */
export const READY_MIN_QUIZZES = 5;
export const READY_MIN_AVERAGE = 0.8;

export const QUIZ_MIN_QUESTIONS = 3;
export const QUIZ_MAX_QUESTIONS = 8;

export function quizFor(videoId: string): VideoQuiz | undefined {
  const quiz = VIDEO_QUIZZES[videoId];
  return quiz && quiz.questions.length > 0 ? quiz : undefined;
}

const LESSON_LEVEL_PATH: Record<string, SpanishLevelPath> = {
  A1: "a1",
  A2: "a2",
  B1: "b1",
  B2: "b2",
  C1: "c1",
  C2: "c2",
  "C1/C2": "c1",
};

/** The level a video is listed at: its level page's watch list, or the
 * level of the lesson it follows. */
export function videoLevel(videoId: string): SpanishLevelPath | undefined {
  for (const [path, videos] of Object.entries(LEVEL_WATCH_VIDEOS)) {
    if (videos?.some((v) => v.videoId === videoId)) return path as SpanishLevelPath;
  }
  for (const [level, byLesson] of Object.entries(LESSON_VIDEOS)) {
    if (Object.values(byLesson ?? {}).some((v) => v.videoId === videoId)) return LESSON_LEVEL_PATH[level];
  }
  return undefined;
}

export function findVideo(videoId: string): LessonVideo | undefined {
  for (const videos of Object.values(LEVEL_WATCH_VIDEOS)) {
    const v = videos?.find((x) => x.videoId === videoId);
    if (v) return v;
  }
  for (const byLesson of Object.values(LESSON_VIDEOS)) {
    const v = Object.values(byLesson ?? {}).find((x) => x.videoId === videoId);
    if (v) return v;
  }
  return undefined;
}

/** Quiz text is English for A1/A2 videos, Spanish from B1 up. */
export function quizInEnglish(videoId: string): boolean {
  const level = videoLevel(videoId);
  return level === "a1" || level === "a2";
}

/** The interface words around a quiz, in the quiz's language. */
export function quizStrings(english: boolean) {
  return english
    ? {
        heading: "Check your understanding",
        trueFalse: "True or false?",
        correct: "Correct!",
        wrong: "Not quite.",
        rewatch: "Rewatch at",
        next: "Next question",
        finish: "See your score",
        retry: "Try again",
        close: "Close",
        questionOf: (n: number, total: number) => `Question ${n} of ${total}`,
        score: (c: number, t: number) => `You got ${c} of ${t} right.`,
        passed: "Well done, you followed this video.",
        notPassed: "Watch it again and see what you catch the second time.",
      }
    : {
        heading: "Comprueba lo que has entendido",
        trueFalse: "¿Verdadero o falso?",
        correct: "¡Correcto!",
        wrong: "No exactamente.",
        rewatch: "Volver a ver en",
        next: "Siguiente pregunta",
        finish: "Ver tu resultado",
        retry: "Intentar de nuevo",
        close: "Cerrar",
        questionOf: (n: number, total: number) => `Pregunta ${n} de ${total}`,
        score: (c: number, t: number) => `Has acertado ${c} de ${t}.`,
        passed: "¡Muy bien! Has seguido el vídeo.",
        notPassed: "Vuelve a verlo y fíjate en lo que entiendes la segunda vez.",
      };
}

const TRUE_FALSE = [
  ["True", "False"],
  ["Verdadero", "Falso"],
];

/** A two-option True/False (or Verdadero/Falso) question. */
export function isTrueFalse(q: VideoQuizQuestion): boolean {
  return q.options.length === 2;
}

/** 95 -> "1:35". */
export function formatTimestamp(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function videoUrlAt(videoId: string, seconds: number): string {
  return `https://www.youtube.com/watch?v=${videoId}&t=${Math.max(0, Math.floor(seconds))}s`;
}

export type VideoQuizResult = { correct: number; total: number; finishedAt: number };

export function quizPassed(r: VideoQuizResult): boolean {
  return r.total > 0 && r.correct / r.total >= VIDEO_QUIZ_PASS;
}

/** Every video listed at a level (watch list and lesson videos) that has
 * a quiz. */
export function quizVideoIdsAtLevel(level: SpanishLevelPath): string[] {
  const ids = new Set<string>();
  for (const v of LEVEL_WATCH_VIDEOS[level] ?? []) if (quizFor(v.videoId)) ids.add(v.videoId);
  for (const [lessonLevel, byLesson] of Object.entries(LESSON_VIDEOS)) {
    if (LESSON_LEVEL_PATH[lessonLevel] !== level) continue;
    for (const v of Object.values(byLesson ?? {})) if (quizFor(v.videoId)) ids.add(v.videoId);
  }
  return [...ids];
}

export type ListeningSummary = {
  /** Quizzes at this level. 0 means there's nothing to summarize. */
  available: number;
  taken: number;
  passed: number;
  /** Mean share correct over the quizzes taken, 0-1. */
  average: number;
  readyForNext: boolean;
};

export function listeningSummary(
  level: SpanishLevelPath,
  results: Readonly<Record<string, VideoQuizResult | undefined>>,
): ListeningSummary {
  const ids = quizVideoIdsAtLevel(level);
  const taken = ids.map((id) => results[id]).filter((r): r is VideoQuizResult => !!r && r.total > 0);
  const average = taken.length ? taken.reduce((sum, r) => sum + r.correct / r.total, 0) / taken.length : 0;
  return {
    available: ids.length,
    taken: taken.length,
    passed: taken.filter(quizPassed).length,
    average,
    readyForNext: level !== "c2" && taken.length >= READY_MIN_QUIZZES && average >= READY_MIN_AVERAGE,
  };
}

// ---- Content check (npm run check-content) ----------------------------

export function checkVideoQuizzes(): string[] {
  const problems: string[] = [];
  for (const [videoId, quiz] of Object.entries(VIDEO_QUIZZES)) {
    const where = `videoQuizzes.ts "${videoId}"`;
    if (!findVideo(videoId)) problems.push(`${where}: not a videoId in lessonVideos.ts`);
    const n = quiz.questions.length;
    if (n < QUIZ_MIN_QUESTIONS || n > QUIZ_MAX_QUESTIONS) {
      problems.push(`${where}: has ${n} questions (want ${QUIZ_MIN_QUESTIONS}-${QUIZ_MAX_QUESTIONS})`);
    }
    const english = quizInEnglish(videoId);
    const tf = english ? TRUE_FALSE[0] : TRUE_FALSE[1];
    quiz.questions.forEach((q, i) => {
      const at = `${where} question ${i + 1}`;
      if (!q.question.trim()) problems.push(`${at}: no question`);
      if (!q.explanation.trim()) problems.push(`${at}: no explanation`);
      if (q.atSeconds !== undefined && !(Number.isInteger(q.atSeconds) && q.atSeconds >= 0)) {
        problems.push(`${at}: atSeconds must be a whole number of seconds`);
      }
      if (q.options.length === 2) {
        if (q.options[0] !== tf[0] || q.options[1] !== tf[1]) {
          problems.push(`${at}: a two-option question must be exactly ["${tf[0]}", "${tf[1]}"]`);
        }
      } else if (q.options.length < 3 || q.options.length > 4) {
        problems.push(`${at}: has ${q.options.length} options (want 3-4, or True/False)`);
      }
      if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= q.options.length) {
        problems.push(`${at}: answerIndex ${q.answerIndex} is out of range`);
      }
      if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== q.options.length) {
        problems.push(`${at}: repeats an option`);
      }
    });
  }
  return problems;
}
