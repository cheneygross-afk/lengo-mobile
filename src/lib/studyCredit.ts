// What counts as studying, how many minutes each kind of study is worth,
// and the daily streak worked out from the days studied.
//
// Shared code: this file is copied byte-identical into the website
// (lengo) and the app (lengo-mobile). No storage calls here -- each
// platform keeps its own wrapper (studyDays.ts) that stores the days in
// localStorage / AsyncStorage and syncs them through the `study_days`
// table (supabase/schema_retention.sql).
//
// Any of these counts toward the streak: finishing a lesson (passed or
// not), finishing a story's comprehension check, finishing a video quiz,
// grading STREAK_MIN_FLASHCARDS flashcards (or emptying the due pile),
// answering STREAK_MIN_REVIEW_QUESTIONS review questions (or finishing
// the review), and handing in an exam paper.

// ---------------------------------------------------------------------------
// Minutes credited toward the daily goal

/** Reading speed by level, in words per minute, for the time a story takes. */
export const READING_WPM: Record<string, number> = {
  A1: 150,
  A2: 150,
  B1: 170,
  B2: 185,
  C1: 200,
  C2: 200,
  "C1/C2": 200,
};

/** Roughly what one comprehension or review question takes. */
export const QUESTION_MINUTES = 0.5;

/** Roughly what one flashcard review takes: 10 seconds. */
export const FLASHCARD_SECONDS = 10;
export const FLASHCARD_MINUTES = FLASHCARD_SECONDS / 60;

/** A video quiz whose video length isn't known. */
export const VIDEO_QUIZ_DEFAULT_MINUTES = 10;
const VIDEO_MAX_MINUTES = 40;

export const STREAK_MIN_FLASHCARDS = 5;
export const STREAK_MIN_REVIEW_QUESTIONS = 5;

/** Spanish words in a text: letters, accented letters and apostrophes.
 * Explicit Unicode ranges (no \p{L}) so it runs on Hermes too. */
export function countWords(text: string): number {
  return text.match(/[A-Za-zÀ-ɏ´']+/g)?.length ?? 0;
}

function roundMinutes(m: number): number {
  return Math.round(m * 10) / 10;
}

/** A story: its words at the level's reading speed, plus its questions. */
export function storyMinutes(paragraphs: string[], level: string, questionCount: number): number {
  const words = paragraphs.reduce((sum, p) => sum + countWords(p), 0);
  // French-course stories ("FR-A1" ...) read at the same speeds by level.
  const wpm = READING_WPM[level] ?? READING_WPM[level.replace(/^FR-/, "")] ?? 170;
  return roundMinutes(Math.max(1, words / wpm + questionCount * QUESTION_MINUTES));
}

export function flashcardMinutes(cards: number): number {
  return cards * FLASHCARD_MINUTES;
}

/**
 * A video quiz: watching the video plus answering. The video's length is
 * taken from `durationSeconds` when known, or else estimated from the
 * latest timestamp a question points at (the answer is near the end, so
 * that plus 10% is close); with neither, a fixed estimate.
 */
export function videoQuizMinutes(opts: {
  questionCount: number;
  durationSeconds?: number;
  questionSeconds?: (number | undefined)[];
}): number {
  const latest = Math.max(0, ...(opts.questionSeconds ?? []).map((s) => s ?? 0));
  const videoMinutes = opts.durationSeconds
    ? opts.durationSeconds / 60
    : latest > 0
      ? (latest * 1.1) / 60
      : VIDEO_QUIZ_DEFAULT_MINUTES;
  return roundMinutes(Math.min(VIDEO_MAX_MINUTES, videoMinutes) + opts.questionCount * QUESTION_MINUTES);
}

/**
 * An exam paper: its section time, but never more than the time since
 * the paper was opened (someone clicking straight through a 60-minute
 * paper hasn't studied for an hour). At least a minute.
 */
export function examPaperMinutes(sectionMinutes: number, openedAt: number, now: number = Date.now()): number {
  const elapsed = Math.max(0, (now - openedAt) / 60000);
  return roundMinutes(Math.max(1, Math.min(sectionMinutes, elapsed)));
}

// ---------------------------------------------------------------------------
// Study days and the streak

/** One day's study on one device (or summed across devices). */
export type StudyDay = { minutes: number; counted: boolean };

/** Local date ("YYYY-MM-DD") -> that day's study. */
export type StudyDays = Record<string, StudyDay>;

/** A row of the `study_days` table: one device's study on one day. */
export type StudyDayRow = { day: string; device_id: string; minutes: number; counted: boolean };

/** How many days of history each device keeps and uploads. */
export const STUDY_DAYS_KEPT = 400;

export function dateKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** "2026-10-02" -> "2026-10-01". Calendar arithmetic only, no time zones. */
export function previousDay(day: string): string {
  const [y, m, d] = day.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d) - 86400000);
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
}

/** Adds study to a day, dropping days older than STUDY_DAYS_KEPT. */
export function addStudy(days: StudyDays, day: string, minutes: number, counted: boolean): StudyDays {
  const prev = days[day] ?? { minutes: 0, counted: false };
  const next: StudyDays = {
    ...days,
    [day]: {
      minutes: Math.round((prev.minutes + Math.max(0, minutes)) * 100) / 100,
      counted: prev.counted || counted,
    },
  };
  const keys = Object.keys(next).sort();
  for (const old of keys.slice(0, Math.max(0, keys.length - STUDY_DAYS_KEPT))) delete next[old];
  return next;
}

/**
 * This device's days plus the other devices' rows from the account:
 * minutes add up across devices (each device only ever uploads its own),
 * and a day counts if it counted anywhere.
 */
export function combineStudyDays(local: StudyDays, rows: StudyDayRow[], thisDevice: string): StudyDays {
  const out: StudyDays = {};
  for (const [day, d] of Object.entries(local)) out[day] = { ...d };
  for (const r of rows) {
    if (r.device_id === thisDevice) continue;
    const prev = out[r.day] ?? { minutes: 0, counted: false };
    out[r.day] = { minutes: prev.minutes + (Number(r.minutes) || 0), counted: prev.counted || !!r.counted };
  }
  return out;
}

/** The days a streak saved before study days existed stands for, so
 * nobody loses a streak when this ships. */
export function legacyStreakDays(legacy: { currentStreak?: number; lastActiveDate?: string } | null): string[] {
  if (!legacy?.lastActiveDate || !legacy.currentStreak || legacy.currentStreak < 1) return [];
  const out: string[] = [];
  let day = legacy.lastActiveDate;
  for (let i = 0; i < Math.min(legacy.currentStreak, STUDY_DAYS_KEPT); i++) {
    out.push(day);
    day = previousDay(day);
  }
  return out;
}

export type Streak = {
  /** Consecutive counted days ending today, or yesterday if today isn't
   * counted yet (the streak is still alive until today ends). */
  current: number;
  longest: number;
  studiedToday: boolean;
};

export function streakFromDays(days: StudyDays, today: string, longestSeen = 0): Streak {
  const counted = new Set(Object.keys(days).filter((d) => days[d].counted));
  const studiedToday = counted.has(today);
  let current = 0;
  let day = studiedToday ? today : previousDay(today);
  while (counted.has(day)) {
    current++;
    day = previousDay(day);
  }
  // Longest run anywhere in the history.
  let longest = 0;
  for (const d of counted) {
    if (counted.has(previousDay(d))) continue;
    let run = 0;
    let cur = d;
    while (counted.has(cur)) {
      run++;
      const [y, m, dd] = cur.split("-").map(Number);
      const t = new Date(Date.UTC(y, m - 1, dd) + 86400000);
      cur = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
    }
    longest = Math.max(longest, run);
  }
  return { current, longest: Math.max(longest, longestSeen, current), studiedToday };
}

export function minutesOn(days: StudyDays, day: string): number {
  return days[day]?.minutes ?? 0;
}

/** Days to upload: this device's days from `since` (inclusive) on. */
export function rowsToUpload(local: StudyDays, deviceId: string, since: string): StudyDayRow[] {
  return Object.entries(local)
    .filter(([day]) => day >= since)
    .map(([day, d]) => ({ day, device_id: deviceId, minutes: d.minutes, counted: d.counted }));
}

/** A random id for this install, so each device owns its own rows. */
export function newDeviceId(): string {
  let s = "";
  for (let i = 0; i < 16; i++) s += Math.floor(Math.random() * 36).toString(36);
  return s;
}
