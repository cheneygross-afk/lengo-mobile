// The memory model behind the single review scheduler
// (docs/curriculum-architecture.md, section 8). One state per concept,
// derived from the append-only attempts log -- never stored as the
// truth, so it can be recomputed whenever these rules change, and two
// devices converge just by sharing their attempts.
//
// The update rules are FSRS-shaped (stability, difficulty, a power
// forgetting curve) but cut down to a handful of constants, so the
// website and the app run them with no library -- the same spirit as the
// Leitner boxes in srs.ts. Pure functions, no storage.

export type Grade = "again" | "hard" | "good" | "easy";

export type AttemptContext = "lesson" | "lesson-pass" | "review" | "unit-test" | "level-test" | "placement" | "flashcard" | "migrated";

/** One answer, as logged. */
export type Attempt = {
  /** Unique per attempt (for merging logs from several devices). */
  id: string;
  /** The item answered: "zh-greetings#3", or a lesson slug for a lesson pass. */
  item: string;
  concepts: string[];
  grade: Grade;
  context: AttemptContext;
  /** Epoch ms. */
  at: number;
  /** Response time, when known. */
  ms?: number;
  /** Migrated history only: the stability (days) the concept had reached. */
  seedStability?: number;
};

export type MemoryState = {
  /** Days until recall probability falls to 90%. */
  stability: number;
  /** 1 (easy) to 10 (hard). */
  difficulty: number;
  /** Epoch ms of the last review that counted. */
  lastReview: number;
  reps: number;
  lapses: number;
  /** Successes since the last lapse (drives the item difficulty asked). */
  streak: number;
};

export type Mastery = Map<string, MemoryState>;

const DAY_MS = 24 * 60 * 60 * 1000;

/** The scheduler's constants, in one place. */
export const MEMORY = {
  /** Stability (days) after a first review, by grade. */
  initialStability: { again: 0.5, hard: 1.5, good: 3, easy: 7 } as Record<Grade, number>,
  initialDifficulty: 5,
  /** Difficulty change per grade; then a 5% pull back toward 5. */
  difficultyStep: { again: 1.5, hard: 0.6, good: 0, easy: -0.8 } as Record<Grade, number>,
  meanReversion: 0.05,
  /** Success growth: S' = S * (1 + e^GROWTH * (11 - D) * S^-DECAY * (e^SPACING*(1-R) - 1) * bonus). */
  growth: 1.5,
  decay: 0.14,
  spacing: 0.94,
  bonus: { again: 1, hard: 0.3, good: 1, easy: 2.5 } as Record<Grade, number>,
  /** A lapse keeps this fraction of the stability (never back to zero),
   * but at most lapseCapDays: a slip means "check again soon." */
  lapseKeep: 0.3,
  lapseCapDays: 14,
  minStability: 0.5,
  /** Due when retrievability falls below this. */
  targetRecall: 0.9,
  minIntervalDays: 1,
  maxIntervalDays: 180,
  /** Two reviews closer than this count as one (the later only if it's a lapse). */
  sameSessionMs: 20 * 60 * 60 * 1000,
};

/** Probability of recall `days` after the last review (FSRS power curve: 0.9 at t = S). */
export function retrievability(s: MemoryState, now: number): number {
  const days = Math.max(0, (now - s.lastReview) / DAY_MS);
  return Math.pow(1 + days / (9 * s.stability), -1);
}

/** When the concept falls due: the interval is the stability, within the caps. */
export function dueAt(s: MemoryState): number {
  const days = Math.min(MEMORY.maxIntervalDays, Math.max(MEMORY.minIntervalDays, s.stability));
  return s.lastReview + days * DAY_MS;
}

export function isDue(s: MemoryState, now: number): boolean {
  return dueAt(s) <= now;
}

/** The item difficulty to ask next: 2 to start, up after clean successes, down after a lapse. */
export function askLevel(s: MemoryState | undefined): 1 | 2 | 3 | 4 {
  if (!s) return 2;
  if (s.streak === 0 && s.lapses > 0) return 1;
  return Math.min(4, 2 + Math.floor(s.streak / 2)) as 2 | 3 | 4;
}

function clampDifficulty(d: number): number {
  return Math.min(10, Math.max(1, d));
}

function nextDifficulty(d: number, grade: Grade): number {
  const stepped = d + MEMORY.difficultyStep[grade];
  return clampDifficulty(stepped + (MEMORY.initialDifficulty - stepped) * MEMORY.meanReversion);
}

/** Applies one graded review to a concept's state (undefined = first time). */
export function review(prev: MemoryState | undefined, grade: Grade, at: number, seedStability?: number): MemoryState {
  if (!prev) {
    return {
      stability: seedStability ?? MEMORY.initialStability[grade],
      difficulty: clampDifficulty(MEMORY.initialDifficulty + MEMORY.difficultyStep[grade]),
      lastReview: at,
      reps: 1,
      lapses: grade === "again" ? 1 : 0,
      streak: grade === "again" ? 0 : 1,
    };
  }
  const sameSession = at - prev.lastReview < MEMORY.sameSessionMs;
  if (grade === "again") {
    // One lapse per session: missing the same thing twice in a sitting
    // isn't twice the evidence.
    if (sameSession && prev.streak === 0) return prev;
    return {
      stability: Math.max(MEMORY.minStability, Math.min(MEMORY.lapseCapDays, prev.stability * MEMORY.lapseKeep)),
      difficulty: nextDifficulty(prev.difficulty, grade),
      lastReview: at,
      reps: prev.reps + 1,
      lapses: prev.lapses + 1,
      streak: 0,
    };
  }
  // A second success in the same sitting proves nothing new about memory.
  if (sameSession) return prev;
  const r = retrievability(prev, at);
  const growth =
    Math.exp(MEMORY.growth) *
    (11 - prev.difficulty) *
    Math.pow(prev.stability, -MEMORY.decay) *
    (Math.exp(MEMORY.spacing * (1 - r)) - 1) *
    MEMORY.bonus[grade];
  return {
    stability: Math.max(MEMORY.minStability, prev.stability * (1 + growth)),
    difficulty: nextDifficulty(prev.difficulty, grade),
    lastReview: at,
    reps: prev.reps + 1,
    lapses: prev.lapses,
    streak: prev.streak + 1,
  };
}

/**
 * Mastery for every concept, replayed from the log in time order.
 * A wrong answer met while a concept is first being taught (context
 * "lesson", concept not seen yet) isn't a lapse -- first exposure isn't a
 * review; the lesson pass is what starts the concept's schedule.
 */
export function masteryFromAttempts(attempts: Attempt[]): Mastery {
  const m: Mastery = new Map();
  const sorted = [...attempts].sort((a, b) => a.at - b.at || a.id.localeCompare(b.id));
  for (const a of sorted) {
    for (const c of a.concepts) {
      const prev = m.get(c);
      if (!prev && a.context === "lesson") continue;
      m.set(c, review(prev, a.grade, a.at, prev ? undefined : a.seedStability));
    }
  }
  return m;
}

export type DueConcept = { concept: string; level: 1 | 2 | 3 | 4; overdueDays: number; lapsedRecently: boolean };

/** Due concepts, most overdue first. */
export function dueConcepts(m: Mastery, now: number): DueConcept[] {
  const out: DueConcept[] = [];
  for (const [concept, s] of m) {
    if (!isDue(s, now)) continue;
    out.push({ concept, level: askLevel(s), overdueDays: (now - dueAt(s)) / DAY_MS, lapsedRecently: s.streak === 0 && s.lapses > 0 });
  }
  return out.sort((a, b) => b.overdueDays - a.overdueDays);
}

/**
 * Which course a concept id belongs to: "zh.grammar.x" -> "zh";
 * "lesson:<levelPath>/<slug>" -> its level path's course (`courseOfPath`).
 * Each course's review only ever sees its own concepts.
 */
export function conceptCourse(id: string, courseOfPath: (levelPath: string) => string): string {
  const m = /^lesson:([^/]+)\//.exec(id);
  if (m) return courseOfPath(m[1]);
  return id.split(".")[0];
}

/** Concepts that keep slipping (3+ lapses): worth sending the learner back to the lesson. */
export function troubleConcepts(m: Mastery, minLapses = 3): string[] {
  return [...m].filter(([, s]) => s.lapses >= minLapses).map(([c]) => c);
}

export function gradeFromCorrect(correct: boolean): Grade {
  return correct ? "good" : "again";
}

// ---- One-time migration of the three older schedules ------------------

/** Leitner box -> stability (days), for flashcards (srs.ts boxes 0-6). */
export const CARD_BOX_STABILITY = [0.5, 1, 3, 7, 14, 30, 60];
/** Daily-mix step -> stability (days) (dailyReview.ts SPACED_INTERVAL_DAYS). */
export const MIX_BOX_STABILITY = [2, 5, 12, 30, 75, 180];

export type LegacyHistory = {
  /** Missed questions still in the pool: a lapse when they were added. */
  missed: { item: string; concepts: string[]; addedAt: number }[];
  /** Daily-mix lessons: a success at the last pass, at the reached step. */
  lessons: { item: string; concepts: string[]; box: number; dueAt: number }[];
  /** Flashcards: a success at the last review, at the reached box. */
  cards: { item: string; concepts: string[]; box: number; lastReviewedAt: number }[];
};

/**
 * The older schedules as attempts, so the new scheduler starts from what
 * the learner has already done instead of from zero (section 8.5).
 */
export function attemptsFromLegacy(h: LegacyHistory): Attempt[] {
  const out: Attempt[] = [];
  for (const l of h.lessons) {
    const box = Math.min(Math.max(0, l.box), MIX_BOX_STABILITY.length - 1);
    const at = l.dueAt - MIX_BOX_STABILITY[box] * DAY_MS;
    out.push({ id: `migrated:lesson:${l.item}`, item: l.item, concepts: l.concepts, grade: "good", context: "migrated", at, seedStability: MIX_BOX_STABILITY[box] });
  }
  for (const c of h.cards) {
    const box = Math.min(Math.max(0, c.box), CARD_BOX_STABILITY.length - 1);
    out.push({ id: `migrated:card:${c.item}`, item: c.item, concepts: c.concepts, grade: "good", context: "migrated", at: c.lastReviewedAt, seedStability: CARD_BOX_STABILITY[box] });
  }
  for (const q of h.missed) {
    out.push({ id: `migrated:missed:${q.item}`, item: q.item, concepts: q.concepts, grade: "again", context: "migrated", at: q.addedAt });
  }
  return out;
}

/** Merges attempt logs from several devices (union by id). */
export function mergeAttempts(...logs: Attempt[][]): Attempt[] {
  const by = new Map<string, Attempt>();
  for (const log of logs) for (const a of log) if (!by.has(a.id)) by.set(a.id, a);
  return [...by.values()].sort((a, b) => a.at - b.at);
}
