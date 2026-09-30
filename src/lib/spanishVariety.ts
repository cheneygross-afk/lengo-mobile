// Mobile mirror of the website's src/lib/spanishVariety.ts: "Spanish I
// want to learn", Spain or Latin America. One account-level choice, like
// the pronunciation voice (pronunciationVoice.ts), that decides:
//   - which Google voice speaks Spanish (es-ES or es-US, see speech.ts),
//   - whether vosotros forms are practised or recognition-only (see
//     vosotros.ts, LessonRunnerScreen and ReviewDrillScreen).
//
// Kept in memory for synchronous reads, cached in AsyncStorage for the
// next launch, and synced to profiles.spanish_variety -- the same
// Supabase column the website reads (lengo's
// supabase/schema_spanish_variety.sql). The column is nullable: null
// means the learner never chose, which reads as Spain -- the course's
// default and what every existing learner has been taught. If the column
// hasn't been added yet, everything still works from AsyncStorage alone.
//
// Onboarding and Settings use getSpanishVariety() / loadSpanishVariety()
// / setSpanishVariety(); components can use useSpanishVariety().
import { useEffect, useSyncExternalStore } from "react";
import { supabase } from "@/lib/supabase/client";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

export const SPANISH_VARIETIES = [
  { value: "spain", label: "Spain" },
  { value: "latam", label: "Latin America" },
] as const;

export type SpanishVariety = (typeof SPANISH_VARIETIES)[number]["value"];

export const DEFAULT_SPANISH_VARIETY: SpanishVariety = "spain";

/** The BCP 47 tag for Spanish speech in this variety: Castilian (es-ES)
 * or US/Latin American Spanish (es-US), both with Google Neural2 voices. */
export function spanishSpeechLang(variety: SpanishVariety): "es-ES" | "es-US" {
  return variety === "latam" ? "es-US" : "es-ES";
}

export function isSpanishVariety(value: unknown): value is SpanishVariety {
  return value === "spain" || value === "latam";
}

const STORAGE_KEY = "deepend-spanish-variety";

let current: SpanishVariety = DEFAULT_SPANISH_VARIETY;
let localLoad: Promise<SpanishVariety | null> | null = null;
let cloudLoad: Promise<SpanishVariety> | null = null;
const listeners = new Set<() => void>();

function readLocal(): Promise<SpanishVariety | null> {
  if (!localLoad) {
    localLoad = readJSON<unknown>(STORAGE_KEY, null).then((v) => (isSpanishVariety(v) ? v : null));
  }
  return localLoad;
}

function update(variety: SpanishVariety): void {
  localLoad = Promise.resolve(variety);
  void writeJSON(STORAGE_KEY, variety);
  if (variety === current) return;
  current = variety;
  listeners.forEach((l) => l());
}

/** The learner's variety as known right now. Until loadSpanishVariety()
 * has finished once this session, that's the default. */
export function getSpanishVariety(): SpanishVariety {
  return current;
}

/** Reads the saved variety (this device, then the signed-in learner's
 * profile; once per launch) and returns the result. A choice made on
 * this device before the account had one (e.g. during onboarding) is
 * uploaded. */
export function loadSpanishVariety(): Promise<SpanishVariety> {
  if (cloudLoad) return cloudLoad;
  watchAuth();
  cloudLoad = (async () => {
    const local = await readLocal();
    if (local && local !== current) {
      current = local;
      listeners.forEach((l) => l());
    }
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return current;
      const { data, error } = await supabase.from("profiles").select("spanish_variety").eq("id", user.id).single();
      if (error) return current;
      const saved = (data as { spanish_variety?: unknown } | null)?.spanish_variety;
      if (isSpanishVariety(saved)) update(saved);
      else if (local) void saveToProfile(local);
    } catch {
      // Offline -- the local value stands.
    }
    return current;
  })();
  return cloudLoad;
}

// A different learner signing in on this device has their own saved
// choice: forget the loaded one so the next read fetches theirs.
let watchingAuth = false;
function watchAuth(): void {
  if (watchingAuth) return;
  watchingAuth = true;
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN" || event === "SIGNED_OUT") cloudLoad = null;
  });
}

async function saveToProfile(variety: SpanishVariety): Promise<string | null> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;
    const { error } = await supabase.from("profiles").update({ spanish_variety: variety }).eq("id", user.id);
    // A missing column (migration not applied yet) isn't the learner's
    // problem: the choice is still kept on this device.
    if (error && !/spanish_variety/.test(error.message)) return error.message;
    return null;
  } catch {
    return null;
  }
}

/** Saves the learner's choice: takes effect immediately everywhere in
 * the app, is remembered on this device, and is written to their profile
 * when signed in. Resolves with an error message if the profile write
 * failed, or null. */
export async function setSpanishVariety(variety: SpanishVariety): Promise<string | null> {
  update(variety);
  return saveToProfile(variety);
}

export function subscribeSpanishVariety(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** The learner's variety, re-rendering when it changes or when the saved
 * value arrives. */
export function useSpanishVariety(): SpanishVariety {
  const variety = useSyncExternalStore(subscribeSpanishVariety, getSpanishVariety);
  useEffect(() => {
    void loadSpanishVariety();
  }, []);
  return variety;
}

// Read this device's saved choice as soon as the app starts, so the first
// lesson or tap usually already has it.
void readLocal().then((v) => {
  if (v && v !== current && !cloudLoad) {
    current = v;
    listeners.forEach((l) => l());
  }
});
