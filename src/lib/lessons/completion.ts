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

// Ordered log of first-time completions, oldest first -- separate from
// the boolean map above because reviewCadence.ts needs to know WHICH
// four lessons were most recently finished, not just how many lessons
// are done in total. Only grows on a lesson's first completion, same as
// the map (redoing a lesson via "Redo lesson" doesn't re-log it, so
// replaying a lesson can't shift the every-4th-lesson review cadence).
function logKey(levelPath: string): string {
  return `deepend-${levelPath}-completion-log`;
}

export type CompletionLogEntry = { slug: string; number: number; completedAt: number };

export async function getCompletionLog(levelPath: string): Promise<CompletionLogEntry[]> {
  return readJSON<CompletionLogEntry[]>(logKey(levelPath), []);
}

/** Marks a lesson done. Returns whether this was the FIRST time (so the
 * caller knows whether to auto-enroll vocabulary -- see LessonRunner). */
export async function markLessonCompleted(
  levelPath: string,
  slug: string,
  number: number
): Promise<{ wasAlreadyDone: boolean }> {
  const map = await getCompletedMap(levelPath);
  const wasAlreadyDone = !!map[slug];
  if (!wasAlreadyDone) {
    map[slug] = true;
    await writeJSON(storageKey(levelPath), map);
    const log = await getCompletionLog(levelPath);
    await writeJSON(logKey(levelPath), [...log, { slug, number, completedAt: Date.now() }]);
  }
  return { wasAlreadyDone };
}
