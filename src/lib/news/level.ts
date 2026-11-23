// The news level a learner starts on: the last one they picked, else the
// one that fits their course level.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { loadPrefsLocal } from "@/lib/learnerPrefs";
import { PREFS_METADATA_KEY } from "@/lib/learnerPlan";
import { normalizeInterests, type InterestProfile } from "@/lib/interests";
import { supabase } from "@/lib/supabase/client";
import { newsLevelFor } from "./pick";
import { NEWS_LEVELS, type NewsLevel } from "./types";

const KEY = "deepend-news-level";

export async function startingNewsLevel(): Promise<NewsLevel> {
  const saved = await readJSON<string | null>(KEY, null).catch(() => null);
  if (saved && (NEWS_LEVELS as readonly string[]).includes(saved)) return saved as NewsLevel;
  const prefs = await loadPrefsLocal();
  return newsLevelFor(prefs.startLevel ?? prefs.placement?.level);
}

export function rememberNewsLevel(level: NewsLevel): void {
  writeJSON(KEY, level).catch(() => {});
}

/** The learner's interest survey answers. The app's prefs don't carry
 * them yet (the survey lives on the website), so read them from the
 * signed-in account's synced prefs. Null when signed out or not answered. */
export async function loadNewsInterests(): Promise<InterestProfile | null> {
  try {
    const { data } = await supabase.auth.getSession();
    const raw = data.session?.user?.user_metadata?.[PREFS_METADATA_KEY];
    return normalizeInterests(raw?.interests);
  } catch {
    return null;
  }
}
