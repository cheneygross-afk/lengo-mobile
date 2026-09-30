// Daily study streak -- the app's copy of the website's src/lib/streak.ts
// (same "deepend-streak" key and shape), in AsyncStorage. A day counts
// once the learner finishes a lesson, pass or not, same as the website.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { localDateKey } from "@/lib/learnerPlan";

const STREAK_STORAGE_KEY = "deepend-streak";

export type StreakData = {
  currentStreak: number;
  longestStreak: number;
  /** YYYY-MM-DD, in the learner's local time. */
  lastActiveDate: string;
};

const EMPTY_STREAK: StreakData = { currentStreak: 0, longestStreak: 0, lastActiveDate: "" };

async function loadStreak(): Promise<StreakData> {
  return { ...EMPTY_STREAK, ...(await readJSON<Partial<StreakData>>(STREAK_STORAGE_KEY, {})) };
}

function yesterdayKey(now: Date): string {
  const d = new Date(now);
  d.setDate(d.getDate() - 1);
  return localDateKey(d);
}

export async function recordStudyActivity(now: Date = new Date()): Promise<StreakData> {
  const data = await loadStreak();
  const today = localDateKey(now);
  if (data.lastActiveDate === today) return data;
  const nextStreak = data.lastActiveDate === yesterdayKey(now) ? data.currentStreak + 1 : 1;
  const next: StreakData = {
    currentStreak: nextStreak,
    longestStreak: Math.max(data.longestStreak, nextStreak),
    lastActiveDate: today,
  };
  await writeJSON(STREAK_STORAGE_KEY, next);
  return next;
}

/** The streak to show: 0 once a day has been missed. */
export async function getDisplayStreak(now: Date = new Date()): Promise<number> {
  const data = await loadStreak();
  if (data.lastActiveDate === localDateKey(now) || data.lastActiveDate === yesterdayKey(now)) return data.currentStreak;
  return 0;
}
