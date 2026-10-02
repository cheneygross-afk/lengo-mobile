// The app's storage for "Today's review" (see dailyReview.ts, shared with
// the website): the daily-mix schedule in AsyncStorage, and the combined
// count -- missed questions + daily mix + Spanish flashcards due -- shown
// on Home. Mirrors the website's src/lib/todaysReview.ts.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import {
  MIX_STORAGE_KEY,
  dailyMixQuestionCount,
  scheduleLesson,
  seedSchedule,
  type SpacedSchedule,
  type TodaysReviewCounts,
} from "@/lib/dailyReview";
import { getDueMissedQuestions } from "@/lib/lessons/missedQuestions";
import { getCompletedMap } from "@/lib/lessons/completion";
import { loadFlashcards } from "@/lib/flashcards/store";
import { getDueCardsForToday } from "@/lib/learnerPrefs";

/** Spanish tracks Today's review covers, in course order. */
export const SPANISH_REVIEW_TRACKS = ["a1", "a2", "b1", "b2", "c1", "c2", "cosas-coloquiales"];

export async function loadSchedule(): Promise<SpacedSchedule> {
  const s = await readJSON<SpacedSchedule>(MIX_STORAGE_KEY, {});
  return s && typeof s === "object" ? s : {};
}

export async function saveSchedule(schedule: SpacedSchedule): Promise<void> {
  await writeJSON(MIX_STORAGE_KEY, schedule);
}

/** Called when a Spanish lesson is passed. */
export async function scheduleLessonForReview(levelPath: string, slug: string): Promise<void> {
  if (levelPath.startsWith("ja")) return;
  const before = await loadSchedule();
  const after = scheduleLesson(before, levelPath, slug);
  if (after !== before) await saveSchedule(after);
}

/** Brings in lessons finished before the schedule existed, or on the
 * website (call after completions are synced from the account). */
export async function seedScheduleFromCompletions(): Promise<SpacedSchedule> {
  const before = await loadSchedule();
  const completed = await Promise.all(
    SPANISH_REVIEW_TRACKS.map(async (levelPath) => {
      const map = await getCompletedMap(levelPath);
      return { levelPath, slugs: Object.keys(map).filter((s) => map[s]) };
    })
  );
  const after = seedSchedule(before, completed);
  if (after !== before) await saveSchedule(after);
  return after;
}

export async function getTodaysReviewCounts(now: number = Date.now()): Promise<TodaysReviewCounts> {
  const missedLists = await Promise.all(SPANISH_REVIEW_TRACKS.map((lp) => getDueMissedQuestions(lp, now)));
  const cards = Object.values(await loadFlashcards()).filter((c) => !c.levelPath.startsWith("ja"));
  return {
    missed: missedLists.reduce((n, l) => n + l.length, 0),
    mix: dailyMixQuestionCount(await loadSchedule(), now),
    cards: (await getDueCardsForToday(cards)).length,
  };
}
