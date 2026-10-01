// A learner's study plan: the settings chosen at setup or in Settings
// (starting level, daily goal, new flashcards per day, placement result)
// plus the pure helpers built on them (today's minutes, the daily cap on
// new flashcards, the lesson to continue with).
//
// Shared code: this file is copied byte-identical into the website
// (lengo) and the app (lengo-mobile). No storage calls here -- each
// platform keeps its own thin wrapper (localStorage on the web,
// AsyncStorage in the app) and syncs the prefs through the signed-in
// account's Supabase auth user_metadata under PREFS_METADATA_KEY, which
// both platforms can read and write without a schema change.
import type { SpanishLevelPath } from "@/lib/lessons/levels";

export const SPANISH_LEVEL_ORDER: SpanishLevelPath[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

export function isSpanishLevelPath(value: unknown): value is SpanishLevelPath {
  return typeof value === "string" && (SPANISH_LEVEL_ORDER as string[]).includes(value);
}

/** "B1" (placement test / CEFR code) -> "b1". */
export function levelPathFromCode(code: string): SpanishLevelPath | null {
  const path = code.toLowerCase();
  return isSpanishLevelPath(path) ? path : null;
}

/** The levels before `level`, lowest first ("b1" -> ["a1", "a2"]). */
export function levelsBelow(level: SpanishLevelPath): SpanishLevelPath[] {
  return SPANISH_LEVEL_ORDER.slice(0, SPANISH_LEVEL_ORDER.indexOf(level));
}

// ---------------------------------------------------------------------------
// Prefs

// Stored goals from before these options (5, 10, 20) aren't in the list,
// so normalizePrefs() maps them to the default.
export const DAILY_GOAL_OPTIONS = [30, 75, 120] as const;
export type DailyGoalMinutes = (typeof DAILY_GOAL_OPTIONS)[number];
export const DEFAULT_DAILY_GOAL: DailyGoalMinutes = 30;

export const DAILY_GOAL_LABELS: Record<DailyGoalMinutes, string> = {
  30: "Regular",
  75: "Serious",
  120: "Intense",
};

export const NEW_CARDS_PER_DAY_OPTIONS = [5, 10, 20, 30, 50, "unlimited"] as const;
export type NewCardsPerDay = (typeof NEW_CARDS_PER_DAY_OPTIONS)[number];
export const DEFAULT_NEW_CARDS_PER_DAY: NewCardsPerDay = 20;

export function newCardsPerDayLabel(value: NewCardsPerDay): string {
  return value === "unlimited" ? "No limit" : String(value);
}

export type PlacementRecord = {
  /** The level the test recommended starting at. */
  level: SpanishLevelPath;
  correct: number;
  total: number;
  masteredEverything: boolean;
  takenAt: number;
};

export type LearnerPrefs = {
  dailyGoalMinutes: DailyGoalMinutes;
  newCardsPerDay: NewCardsPerDay;
  /** Where the learner chose (or was placed) to start. Null until chosen. */
  startLevel: SpanishLevelPath | null;
  placement: PlacementRecord | null;
  /** When setup was finished or skipped; null means it hasn't been seen. */
  onboardedAt: number | null;
  /** Last change, for merging the local copy with the account's copy. */
  updatedAt: number;
};

export const DEFAULT_PREFS: LearnerPrefs = {
  dailyGoalMinutes: DEFAULT_DAILY_GOAL,
  newCardsPerDay: DEFAULT_NEW_CARDS_PER_DAY,
  startLevel: null,
  placement: null,
  onboardedAt: null,
  updatedAt: 0,
};

export const PREFS_METADATA_KEY = "deepend_prefs";
export const PREFS_STORAGE_KEY = "deepend-learner-prefs";

function num(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

/** Reads prefs from anything (stored JSON, user_metadata), keeping only
 * valid values and filling the rest with defaults. */
export function normalizePrefs(raw: unknown): LearnerPrefs {
  if (!raw || typeof raw !== "object") return { ...DEFAULT_PREFS };
  const r = raw as Record<string, unknown>;
  const goal = (DAILY_GOAL_OPTIONS as readonly unknown[]).includes(r.dailyGoalMinutes)
    ? (r.dailyGoalMinutes as DailyGoalMinutes)
    : DEFAULT_DAILY_GOAL;
  const newCards = (NEW_CARDS_PER_DAY_OPTIONS as readonly unknown[]).includes(r.newCardsPerDay)
    ? (r.newCardsPerDay as NewCardsPerDay)
    : DEFAULT_NEW_CARDS_PER_DAY;
  let placement: PlacementRecord | null = null;
  if (r.placement && typeof r.placement === "object") {
    const p = r.placement as Record<string, unknown>;
    const correct = num(p.correct);
    const total = num(p.total);
    const takenAt = num(p.takenAt);
    if (isSpanishLevelPath(p.level) && correct !== null && total !== null && takenAt !== null) {
      placement = { level: p.level, correct, total, takenAt, masteredEverything: p.masteredEverything === true };
    }
  }
  return {
    dailyGoalMinutes: goal,
    newCardsPerDay: newCards,
    startLevel: isSpanishLevelPath(r.startLevel) ? r.startLevel : null,
    placement,
    onboardedAt: num(r.onboardedAt),
    updatedAt: num(r.updatedAt) ?? 0,
  };
}

/** Whichever copy was changed last wins (ties keep `a`). */
export function newerPrefs(a: LearnerPrefs, b: LearnerPrefs): LearnerPrefs {
  return b.updatedAt > a.updatedAt ? b : a;
}

// ---------------------------------------------------------------------------
// Study minutes, for the daily goal

export const STUDY_LOG_STORAGE_KEY = "deepend-study-log";

/** Local date ("YYYY-MM-DD") -> minutes studied that day. */
export type StudyLog = Record<string, number>;

/** Roughly what one flashcard review takes. */
export const FLASHCARD_REVIEW_MINUTES = 0.25;

const STUDY_LOG_DAYS_KEPT = 30;

export function localDateKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function addToStudyLog(log: StudyLog, minutes: number, now: Date = new Date()): StudyLog {
  if (!(minutes > 0)) return log;
  const key = localDateKey(now);
  const next: StudyLog = { ...log, [key]: (log[key] ?? 0) + minutes };
  const keys = Object.keys(next).sort();
  for (const old of keys.slice(0, Math.max(0, keys.length - STUDY_LOG_DAYS_KEPT))) delete next[old];
  return next;
}

export function minutesOnDay(log: StudyLog, now: Date = new Date()): number {
  return log[localDateKey(now)] ?? 0;
}

// ---------------------------------------------------------------------------
// Daily cap on new flashcards

export const NEW_CARD_LOG_STORAGE_KEY = "deepend-new-cards-introduced";

/** The new cards first reviewed today on this device. */
export type NewCardLog = { date: string; ids: string[] };

type SrsCard = { id: string; addedAt: number; dueAt?: number; reviewCount?: number; lastReviewedAt?: number };

/** Never reviewed yet. */
export function isNewCard(card: SrsCard): boolean {
  return card.dueAt == null && !card.reviewCount;
}

export function noteNewCardIntroduced(log: NewCardLog, id: string, now: Date = new Date()): NewCardLog {
  const date = localDateKey(now);
  const ids = log.date === date ? log.ids : [];
  return ids.includes(id) ? { date, ids } : { date, ids: [...ids, id] };
}

/** New cards started today: the ones logged on this device, plus any card
 * whose one and only review so far happened today (which also catches
 * cards started on the other platform). */
export function newCardsIntroducedToday(cards: SrsCard[], log: NewCardLog, now: Date = new Date()): number {
  const date = localDateKey(now);
  const ids = new Set(log.date === date ? log.ids : []);
  for (const card of cards) {
    if (card.reviewCount === 1 && card.lastReviewedAt != null && localDateKey(new Date(card.lastReviewedAt)) === date) {
      ids.add(card.id);
    }
  }
  return ids.size;
}

/** Keeps every due review, but only as many never-reviewed cards as
 * today's new-card allowance still has room for (oldest-added first). */
export function limitNewCards<T extends SrsCard>(
  dueCards: T[],
  allCards: T[],
  limit: NewCardsPerDay,
  log: NewCardLog,
  now: Date = new Date()
): T[] {
  if (limit === "unlimited") return dueCards;
  let room = Math.max(0, limit - newCardsIntroducedToday(allCards, log, now));
  const allowed = new Set(
    dueCards
      .filter(isNewCard)
      .sort((a, b) => a.addedAt - b.addedAt)
      .filter(() => room-- > 0)
      .map((c) => c.id)
  );
  return dueCards.filter((c) => !isNewCard(c) || allowed.has(c.id));
}

// ---------------------------------------------------------------------------
// The lesson to continue with

export type PathLesson = { slug: string; title: string; number: number; optional?: boolean };

export type ContinueLesson = { levelPath: SpanishLevelPath; slug: string; title: string; number: number };

/**
 * The first required lesson not yet done, starting from the learner's
 * starting level (or, without one, from the highest level they've
 * finished a lesson in) and moving up through the levels. Null once
 * everything from there on is done.
 */
export function nextLessonToContinue(
  lessonsByLevel: Partial<Record<SpanishLevelPath, PathLesson[]>>,
  completedByLevel: Partial<Record<SpanishLevelPath, Record<string, boolean>>>,
  startLevel: SpanishLevelPath | null
): ContinueLesson | null {
  let from = 0;
  if (startLevel) {
    from = SPANISH_LEVEL_ORDER.indexOf(startLevel);
  } else {
    SPANISH_LEVEL_ORDER.forEach((level, i) => {
      const done = completedByLevel[level] ?? {};
      if ((lessonsByLevel[level] ?? []).some((l) => !l.optional && done[l.slug])) from = i;
    });
  }
  for (const level of SPANISH_LEVEL_ORDER.slice(from)) {
    const done = completedByLevel[level] ?? {};
    const next = (lessonsByLevel[level] ?? []).find((l) => !l.optional && !done[l.slug]);
    if (next) return { levelPath: level, slug: next.slug, title: next.title, number: next.number };
  }
  return null;
}
