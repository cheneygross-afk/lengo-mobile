// "Today's review": one daily queue made of three things --
//   1. lesson questions the learner got wrong, on their 1/3/7/14-day
//      schedule (missedQuestions.ts),
//   2. a daily mix that brings back lessons the learner has finished,
//      right answers included, on a lengthening schedule, so grammar from
//      earlier units and levels keeps coming back (this file),
//   3. flashcards due today (srs.ts).
// One count for all three goes on the home page and the nav badge.
//
// The daily mix keeps one schedule entry per finished lesson -- a lesson
// stands for the grammar point or topic it teaches. A lesson enters the
// schedule when it's passed and comes back after SPACED_INTERVAL_DAYS;
// each time it's due, a few of its own questions are asked (a different
// few each time). All right moves it to the next, longer interval; a
// miss sends it back to the start and puts the missed question in the
// missed-questions pool too.
//
// Shared code: this file is copied byte-identical into the website
// (lengo) and the app (lengo-mobile). No storage calls here.

export const SPACED_INTERVAL_DAYS = [2, 5, 12, 30, 75, 180];
/** Lessons in one day's mix, and questions asked from each. */
export const MIX_MAX_LESSONS = 4;
export const MIX_QUESTIONS_PER_LESSON = 3;
export const MIX_STORAGE_KEY = "deepend-spaced-lessons";

const DAY_MS = 24 * 60 * 60 * 1000;

export type SpacedLesson = {
  levelPath: string;
  slug: string;
  /** Step along SPACED_INTERVAL_DAYS: 0 = just learned. */
  box: number;
  dueAt: number;
  /** How many times it has come up, so each time asks different questions. */
  turns: number;
};

/** "levelPath/slug" -> entry. */
export type SpacedSchedule = Record<string, SpacedLesson>;

export function spacedKey(levelPath: string, slug: string): string {
  return `${levelPath}/${slug}`;
}

/** A small stable hash, to spread seeded lessons over the coming days. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Adds a just-passed lesson (no change if it's already scheduled). */
export function scheduleLesson(schedule: SpacedSchedule, levelPath: string, slug: string, now: number = Date.now()): SpacedSchedule {
  const key = spacedKey(levelPath, slug);
  if (schedule[key]) return schedule;
  return { ...schedule, [key]: { levelPath, slug, box: 0, dueAt: now + SPACED_INTERVAL_DAYS[0] * DAY_MS, turns: 0 } };
}

/**
 * Adds lessons finished before this schedule existed (or on another
 * device). They're spread over the next three weeks by a hash of their
 * key, rather than all falling due on day one.
 */
export function seedSchedule(
  schedule: SpacedSchedule,
  completed: { levelPath: string; slugs: string[] }[],
  now: number = Date.now()
): SpacedSchedule {
  let changed = false;
  const next: SpacedSchedule = { ...schedule };
  for (const { levelPath, slugs } of completed) {
    for (const slug of slugs) {
      const key = spacedKey(levelPath, slug);
      if (next[key]) continue;
      next[key] = { levelPath, slug, box: 1, dueAt: now + (hash(key) % 21) * DAY_MS, turns: 0 };
      changed = true;
    }
  }
  return changed ? next : schedule;
}

export function isSpacedDue(entry: SpacedLesson, now: number = Date.now()): boolean {
  return entry.dueAt <= now;
}

/**
 * Today's mix: the most overdue lessons first, at most one per level
 * before a second from any level, so a B1 learner's mix also reaches back
 * into A1 and A2. `skip` leaves out lessons that can't be asked (no
 * questions, content gone).
 */
export function pickDailyMix(
  schedule: SpacedSchedule,
  now: number = Date.now(),
  limit: number = MIX_MAX_LESSONS,
  skip: (entry: SpacedLesson) => boolean = () => false
): SpacedLesson[] {
  const due = Object.values(schedule)
    .filter((e) => isSpacedDue(e, now) && !skip(e))
    .sort((a, b) => a.dueAt - b.dueAt);
  const picked: SpacedLesson[] = [];
  const perLevel = new Map<string, number>();
  for (let round = 1; picked.length < limit && round <= limit; round++) {
    for (const e of due) {
      if (picked.length >= limit) break;
      if (picked.includes(e)) continue;
      if ((perLevel.get(e.levelPath) ?? 0) >= round) continue;
      picked.push(e);
      perLevel.set(e.levelPath, (perLevel.get(e.levelPath) ?? 0) + 1);
    }
  }
  return picked;
}

/** How many questions today's mix holds, for the badge counts. */
export function dailyMixQuestionCount(schedule: SpacedSchedule, now: number = Date.now()): number {
  return pickDailyMix(schedule, now).length * MIX_QUESTIONS_PER_LESSON;
}

type QuestionLike = { type: string };

/**
 * Which of a lesson's questions to ask this time: gradable ones only
 * (speaking and writing aren't marked), not the ones already in the
 * missed pool (they have their own schedule), rotating through the rest
 * by `turns`. Returns indices into `questions`.
 */
export function pickLessonQuestions(
  questions: QuestionLike[],
  turns: number,
  exclude: (index: number) => boolean = () => false,
  count: number = MIX_QUESTIONS_PER_LESSON
): number[] {
  const usable = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q, i }) => q.type !== "speak" && q.type !== "write" && !exclude(i))
    .map(({ i }) => i);
  if (usable.length <= count) return usable;
  const start = (turns * count) % usable.length;
  const out: number[] = [];
  for (let k = 0; k < count; k++) out.push(usable[(start + k) % usable.length]);
  return out;
}

/** After a lesson's mix questions: all right moves it along the
 * schedule; any miss starts it over (due again in a day). */
export function applyMixResult(entry: SpacedLesson, allCorrect: boolean, now: number = Date.now()): SpacedLesson {
  if (!allCorrect) return { ...entry, box: 0, dueAt: now + DAY_MS, turns: entry.turns + 1 };
  const box = Math.min(entry.box + 1, SPACED_INTERVAL_DAYS.length - 1);
  return { ...entry, box, dueAt: now + SPACED_INTERVAL_DAYS[box] * DAY_MS, turns: entry.turns + 1 };
}

export type TodaysReviewCounts = { missed: number; mix: number; cards: number };

export function todaysReviewTotal(c: TodaysReviewCounts): number {
  return c.missed + c.mix + c.cards;
}

/** "8 cards · 3 missed questions · 6 from earlier lessons". */
export function todaysReviewBreakdown(c: TodaysReviewCounts): string {
  const parts: string[] = [];
  if (c.cards) parts.push(`${c.cards} card${c.cards === 1 ? "" : "s"}`);
  if (c.missed) parts.push(`${c.missed} missed question${c.missed === 1 ? "" : "s"}`);
  if (c.mix) parts.push(`${c.mix} from earlier lessons`);
  return parts.join(" · ");
}
