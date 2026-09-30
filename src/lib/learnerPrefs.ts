// App storage for the learner plan (see learnerPlan.ts, shared with the
// website): prefs in AsyncStorage, synced with the account's Supabase
// user_metadata so the website sees the same daily goal / starting level;
// plus the two device-local daily logs (study minutes, new flashcards
// started). Mirrors the website's src/lib/learnerPrefs.ts.
import { supabase } from "@/lib/supabase/client";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import type { FlashcardEntry } from "@/lib/flashcards/store";
import { getDueCards } from "@/lib/srs";
import {
  PREFS_METADATA_KEY,
  PREFS_STORAGE_KEY,
  STUDY_LOG_STORAGE_KEY,
  NEW_CARD_LOG_STORAGE_KEY,
  addToStudyLog,
  isNewCard,
  limitNewCards,
  minutesOnDay,
  newerPrefs,
  normalizePrefs,
  noteNewCardIntroduced,
  type LearnerPrefs,
  type NewCardLog,
  type StudyLog,
} from "@/lib/learnerPlan";

export async function loadPrefsLocal(): Promise<LearnerPrefs> {
  return normalizePrefs(await readJSON<unknown>(PREFS_STORAGE_KEY, null));
}

async function pushPrefsToCloud(prefs: LearnerPrefs): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    if (!data.session) return;
    await supabase.auth.updateUser({ data: { [PREFS_METADATA_KEY]: prefs } });
  } catch {
    // ignore -- the local copy still holds the change
  }
}

/** Applies a change, saves it locally and to the account. */
export async function updatePrefs(patch: Partial<Omit<LearnerPrefs, "updatedAt">>): Promise<LearnerPrefs> {
  const next: LearnerPrefs = { ...(await loadPrefsLocal()), ...patch, updatedAt: Date.now() };
  await writeJSON(PREFS_STORAGE_KEY, next);
  void pushPrefsToCloud(next);
  return next;
}

/** Merges the local copy with the account's (newest wins) and returns it. */
export async function syncPrefs(): Promise<LearnerPrefs> {
  const local = await loadPrefsLocal();
  let cloud: LearnerPrefs | null = null;
  try {
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    if (user) cloud = normalizePrefs(user.user_metadata?.[PREFS_METADATA_KEY]);
    // The cached session can be older than a change made on the website.
    const fresh = user ? await supabase.auth.getUser() : null;
    if (fresh?.data.user) cloud = normalizePrefs(fresh.data.user.user_metadata?.[PREFS_METADATA_KEY]);
  } catch {
    // offline -- use what we have
  }
  if (!cloud) return local;
  const merged = newerPrefs(local, cloud);
  await writeJSON(PREFS_STORAGE_KEY, merged);
  if (merged === local && local.updatedAt > cloud.updatedAt) void pushPrefsToCloud(local);
  return merged;
}

// ---------------------------------------------------------------------------

export async function addStudyMinutes(minutes: number): Promise<void> {
  const log = await readJSON<StudyLog>(STUDY_LOG_STORAGE_KEY, {});
  await writeJSON(STUDY_LOG_STORAGE_KEY, addToStudyLog(log, minutes));
}

export async function getMinutesToday(): Promise<number> {
  return minutesOnDay(await readJSON<StudyLog>(STUDY_LOG_STORAGE_KEY, {}));
}

async function loadNewCardLog(): Promise<NewCardLog> {
  return readJSON<NewCardLog>(NEW_CARD_LOG_STORAGE_KEY, { date: "", ids: [] });
}

/** Call when a card is graded, with the card as it was before grading:
 * a card that was new counts against today's new-card allowance. */
export async function noteCardReviewed(card: FlashcardEntry): Promise<void> {
  if (isNewCard(card)) await writeJSON(NEW_CARD_LOG_STORAGE_KEY, noteNewCardIntroduced(await loadNewCardLog(), card.id));
}

/** Cards to review today: everything due, with never-reviewed cards
 * capped at the learner's new-cards-per-day setting. */
export async function getDueCardsForToday(cards: FlashcardEntry[], prefs?: LearnerPrefs): Promise<FlashcardEntry[]> {
  const p = prefs ?? (await loadPrefsLocal());
  return limitNewCards(getDueCards(cards), cards, p.newCardsPerDay, await loadNewCardLog());
}
