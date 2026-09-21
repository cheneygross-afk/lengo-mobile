// Mobile port of the per-level completion tracking LessonList/LessonRunner
// do on the web app (`deepend-${levelPath}-completed` in localStorage) --
// same key format, AsyncStorage instead of localStorage.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

function storageKey(levelPath: string): string {
  return `deepend-${levelPath}-completed`;
}

export async function getCompletedMap(levelPath: string): Promise<Record<string, boolean>> {
  return readJSON<Record<string, boolean>>(storageKey(levelPath), {});
}

/** Marks a lesson done. Returns whether this was the FIRST time (so the
 * caller knows whether to auto-enroll vocabulary -- see LessonRunner). */
export async function markLessonCompleted(
  levelPath: string,
  slug: string
): Promise<{ wasAlreadyDone: boolean }> {
  const map = await getCompletedMap(levelPath);
  const wasAlreadyDone = !!map[slug];
  if (!wasAlreadyDone) {
    map[slug] = true;
    await writeJSON(storageKey(levelPath), map);
  }
  return { wasAlreadyDone };
}
