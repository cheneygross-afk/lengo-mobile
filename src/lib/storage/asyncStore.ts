import AsyncStorage from "@react-native-async-storage/async-storage";

// Tiny JSON read/write helper over AsyncStorage -- the mobile equivalent
// of the web app's direct localStorage.getItem/setItem calls (see
// @/lib/flashcards, @/lib/streak, @/lib/lessonNotes on the web repo).
// Same "best-effort, never throw" behavior: a failed read returns the
// fallback, a failed write is silently swallowed.
export async function readJSON<T>(key: string, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export async function writeJSON(key: string, value: unknown): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore -- best-effort persistence, same as the web app's localStorage calls
  }
}
