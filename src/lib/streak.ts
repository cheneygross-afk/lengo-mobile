// Daily study streak -- worked out from the study days in studyDays.ts
// (synced with the account, so it matches the website). Keeps the small
// API the app already used. What counts as a study day is listed in
// studyCredit.ts.
import { creditStudy, getStudySummary } from "@/lib/studyDays";

/** Counts today toward the streak (no minutes). Safe to call repeatedly. */
export async function recordStudyActivity(): Promise<void> {
  await creditStudy(0, { counts: true });
}

/** The streak to show: 0 once a whole day has been missed. */
export async function getDisplayStreak(): Promise<number> {
  return (await getStudySummary()).streak.current;
}
