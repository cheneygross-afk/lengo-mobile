// The app's store for study days (see studyCredit.ts, shared with the
// website): which days the learner studied and for how many minutes,
// behind both the daily goal and the streak. Mirrors the website's
// src/lib/studyDays.ts with AsyncStorage instead of localStorage.
//
// Saved on the device first, and synced through the `study_days` table
// (supabase/schema_retention.sql in the website repo): each device
// uploads only its own rows (keyed by a random device id) and reads every
// device's rows back, so the streak follows the learner between the app
// and the website. Until that table exists every cloud call fails quietly
// and the device copy is all there is.
import { supabase } from "@/lib/supabase/client";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import {
  STUDY_DAYS_KEPT,
  addStudy,
  combineStudyDays,
  dateKey,
  legacyStreakDays,
  minutesOn,
  newDeviceId,
  rowsToUpload,
  streakFromDays,
  type Streak,
  type StudyDayRow,
  type StudyDays,
} from "@/lib/studyCredit";

const DAYS_KEY = "deepend-study-days";
const DEVICE_KEY = "deepend-device-id";
const OWNER_KEY = "deepend-study-owner";
const CLOUD_KEY = "deepend-study-cloud";
const LONGEST_KEY = "deepend-longest-streak";
const PUSHED_KEY = "deepend-study-pushed";
const CREDITED_KEY = "deepend-credited-today";
// Stores this replaces; read once to carry history over.
const LEGACY_STREAK_KEY = "deepend-streak";
const LEGACY_LOG_KEY = "deepend-study-log";

/** This device's own days, carrying over the old streak and minute log
 * the first time it runs. */
async function loadLocalDays(): Promise<StudyDays> {
  const stored = await readJSON<StudyDays | null>(DAYS_KEY, null);
  if (stored && typeof stored === "object") return stored;
  let days: StudyDays = {};
  const legacyLog = await readJSON<Record<string, number>>(LEGACY_LOG_KEY, {});
  for (const [day, minutes] of Object.entries(legacyLog)) {
    if (typeof minutes === "number") days = addStudy(days, day, minutes, false);
  }
  const legacyStreak = await readJSON<{ currentStreak?: number; longestStreak?: number; lastActiveDate?: string } | null>(
    LEGACY_STREAK_KEY,
    null
  );
  for (const day of legacyStreakDays(legacyStreak)) days = addStudy(days, day, 0, true);
  if (legacyStreak?.longestStreak) await writeJSON(LONGEST_KEY, legacyStreak.longestStreak);
  await writeJSON(DAYS_KEY, days);
  return days;
}

async function deviceId(): Promise<string> {
  let id = await readJSON<string | null>(DEVICE_KEY, null);
  if (!id) {
    id = newDeviceId();
    await writeJSON(DEVICE_KEY, id);
  }
  return id;
}

async function loadAllDays(): Promise<StudyDays> {
  return combineStudyDays(await loadLocalDays(), await readJSON<StudyDayRow[]>(CLOUD_KEY, []), await deviceId());
}

export type StudySummary = { streak: Streak; minutesToday: number };

export async function getStudySummary(now: Date = new Date()): Promise<StudySummary> {
  const days = await loadAllDays();
  const today = dateKey(now);
  return {
    streak: streakFromDays(days, today, await readJSON<number>(LONGEST_KEY, 0)),
    minutesToday: minutesOn(days, today),
  };
}

export type CreditResult = StudySummary & { dayJustCounted: boolean; minutesAdded: number };

/**
 * Credits study to today: `minutes` toward the daily goal and, with
 * `counts`, today toward the streak. Saved on the device right away and
 * pushed to the account shortly after.
 */
export function creditStudy(minutes: number, opts: { counts: boolean }): Promise<CreditResult> {
  // One at a time: AsyncStorage is read-modify-write, and a flashcard
  // session can credit cards faster than a write finishes.
  const run = writeQueue.then(() => creditNow(minutes, opts));
  writeQueue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

let writeQueue: Promise<void> = Promise.resolve();

async function creditNow(minutes: number, opts: { counts: boolean }): Promise<CreditResult> {
  const now = new Date();
  const today = dateKey(now);
  const alreadyCounted = !!(await loadAllDays())[today]?.counted;
  await writeJSON(DAYS_KEY, addStudy(await loadLocalDays(), today, minutes, opts.counts));
  const summary = await getStudySummary(now);
  await writeJSON(LONGEST_KEY, summary.streak.longest);
  schedulePush();
  return { ...summary, dayJustCounted: opts.counts && !alreadyCounted, minutesAdded: Math.max(0, minutes) };
}

/** creditStudy that adds its minutes only once a day per `key` (a story,
 * a video quiz); a repeat still counts the day. */
export async function creditStudyOnce(key: string, minutes: number, opts: { counts: boolean }): Promise<CreditResult> {
  const today = dateKey();
  const log = await readJSON<{ date: string; keys: string[] }>(CREDITED_KEY, { date: "", keys: [] });
  const keys = log.date === today ? log.keys : [];
  if (keys.includes(key)) return creditStudy(0, opts);
  await writeJSON(CREDITED_KEY, { date: today, keys: [...keys, key] });
  return creditStudy(minutes, opts);
}

let pushTimer: ReturnType<typeof setTimeout> | null = null;

function schedulePush(): void {
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushTimer = null;
    void pushDays([dateKey()]);
  }, 2500);
}

// Off for the rest of this app session once the table turns out to be
// missing (migration not applied yet).
let cloudUnavailable = false;

function isMissingTable(error: { code?: string; message?: string } | null): boolean {
  if (!error) return false;
  const message = error.message ?? "";
  return (
    error.code === "42P01" ||
    error.code === "PGRST205" ||
    (/study_days/.test(message) && /exist|schema cache/.test(message))
  );
}

type Owner = { userId: string; since: string };

/** The first account signed in here takes the device's whole history; a
 * different account later only takes days from then on. */
async function ownerSince(userId: string): Promise<string> {
  const owner = await readJSON<Owner | null>(OWNER_KEY, null);
  if (!owner) {
    await writeJSON(OWNER_KEY, { userId, since: "" });
    return "";
  }
  if (owner.userId === userId) return owner.since;
  const since = dateKey();
  await writeJSON(OWNER_KEY, { userId, since });
  await writeJSON(CLOUD_KEY, []);
  await writeJSON(DEVICE_KEY, newDeviceId());
  return since;
}

async function currentUserId(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession();
    return data.session?.user.id ?? null;
  } catch {
    return null;
  }
}

async function pushDays(only?: string[]): Promise<void> {
  if (cloudUnavailable) return;
  try {
    const userId = await currentUserId();
    if (!userId) return;
    const since = await ownerSince(userId);
    let rows = rowsToUpload(await loadLocalDays(), await deviceId(), since);
    if (only) rows = rows.filter((r) => only.includes(r.day));
    // Only rows that changed since they were last uploaded (per account
    // and device), so a page view doesn't re-send the whole history.
    const pushedKey = `${userId}:${rows[0]?.device_id ?? ""}`;
    const pushed = await readJSON<{ key: string; rows: Record<string, string> }>(PUSHED_KEY, { key: "", rows: {} });
    const sentRows = pushed.key === pushedKey ? pushed.rows : {};
    rows = rows.filter((r) => sentRows[r.day] !== `${r.minutes}|${r.counted}`);
    if (!rows.length) return;
    const { error } = await supabase.from("study_days").upsert(
      rows.map((r) => ({ ...r, user_id: userId, updated_at: new Date().toISOString() })),
      { onConflict: "user_id,device_id,day" }
    );
    if (isMissingTable(error)) cloudUnavailable = true;
    if (!error) {
      const next = { ...sentRows };
      for (const r of rows) next[r.day] = `${r.minutes}|${r.counted}`;
      await writeJSON(PUSHED_KEY, { key: pushedKey, rows: next });
    }
  } catch {
    // offline -- the next sync uploads it
  }
}

/**
 * Uploads this device's days and pulls every device's back. Home calls
 * it on its first focus. Also records the device's time zone on the
 * profile, so the daily reminder email goes out in the learner's evening.
 */
export async function syncStudyDays(): Promise<StudySummary> {
  if (cloudUnavailable) return getStudySummary();
  try {
    const userId = await currentUserId();
    if (!userId) return getStudySummary();
    void saveTimeZone(userId);
    await pushDays();
    if (cloudUnavailable) return getStudySummary();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - STUDY_DAYS_KEPT);
    const { data: rows, error } = await supabase
      .from("study_days")
      .select("day, device_id, minutes, counted")
      .eq("user_id", userId)
      .gte("day", dateKey(cutoff))
      .order("day", { ascending: false })
      .limit(5000);
    if (error) {
      if (isMissingTable(error)) cloudUnavailable = true;
      return getStudySummary();
    }
    await writeJSON(CLOUD_KEY, (rows ?? []) as StudyDayRow[]);
    const summary = await getStudySummary();
    await writeJSON(LONGEST_KEY, summary.streak.longest);
    return summary;
  } catch {
    return getStudySummary();
  }
}

async function saveTimeZone(userId: string): Promise<void> {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz || (await readJSON<string | null>("deepend-saved-tz", null)) === `${userId}:${tz}`) return;
    const { error } = await supabase.from("profiles").update({ timezone: tz }).eq("id", userId);
    if (!error) await writeJSON("deepend-saved-tz", `${userId}:${tz}`);
  } catch {
    // ignore -- the reminder falls back to a default time zone
  }
}
