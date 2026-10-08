// Cross-platform mirror of lesson completion, same idea as
// flashcards/sync.ts but simpler: there's no "un-complete a lesson"
// feature on either platform, so this is pure union -- no delete/prune
// case to guard against.
import { supabase } from "@/lib/supabase/client";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

// Completions that didn't reach Supabase (offline, signed out, a failed
// request), kept per level with their lesson numbers and retried the
// next time a lesson list syncs -- otherwise a lesson finished on the
// subway never shows as done on the website. Same key and shape as the
// website's queue (src/lib/lessonCompletion.ts).
const PENDING_KEY = "deepend-pending-completions";
type Pending = Record<string, Record<string, number>>;

async function queuePending(levelPath: string, lessons: { slug: string; number: number }[]): Promise<void> {
  const pending = await readJSON<Pending>(PENDING_KEY, {});
  const level = (pending[levelPath] ??= {});
  for (const l of lessons) level[l.slug] = l.number;
  await writeJSON(PENDING_KEY, pending);
}

async function flushPending(userId: string, levelPath: string): Promise<void> {
  const pending = await readJSON<Pending>(PENDING_KEY, {});
  const level = pending[levelPath];
  if (!level || !Object.keys(level).length) return;
  const { error } = await supabase.from("lesson_completions").upsert(
    Object.entries(level).map(([slug, number]) => ({ user_id: userId, level_path: levelPath, lesson_slug: slug, lesson_number: number })),
    { onConflict: "user_id,level_path,lesson_slug" }
  );
  if (error) return;
  const latest = await readJSON<Pending>(PENDING_KEY, {});
  delete latest[levelPath];
  await writeJSON(PENDING_KEY, latest);
}

export async function pushCompletionToCloud(levelPath: string, slug: string, number: number): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return queuePending(levelPath, [{ slug, number }]);
    const { error } = await supabase
      .from("lesson_completions")
      .upsert(
        { user_id: userId, level_path: levelPath, lesson_slug: slug, lesson_number: number },
        { onConflict: "user_id,level_path,lesson_slug" }
      );
    if (error) await queuePending(levelPath, [{ slug, number }]);
  } catch {
    // Local storage stays authoritative; retry on the next sync.
    await queuePending(levelPath, [{ slug, number }]).catch(() => {});
  }
}

// Many at once (see markLessonsCompletedBulk).
export async function pushCompletionsToCloud(levelPath: string, lessons: { slug: string; number: number }[]): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (lessons.length === 0) return;
    if (!userId) return queuePending(levelPath, lessons);
    const { error } = await supabase.from("lesson_completions").upsert(
      lessons.map((l) => ({ user_id: userId, level_path: levelPath, lesson_slug: l.slug, lesson_number: l.number })),
      { onConflict: "user_id,level_path,lesson_slug" }
    );
    if (error) await queuePending(levelPath, lessons);
  } catch {
    await queuePending(levelPath, lessons).catch(() => {});
  }
}

// Pulls this track's completions down from Supabase and merges them
// into the local map -- a lesson finished on the other platform shows
// as done here too. Returns the merged map; the caller saves it.
export async function mergeCompletionsFromCloud(
  levelPath: string,
  localMap: Record<string, boolean>
): Promise<Record<string, boolean>> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return localMap;
    await flushPending(userId, levelPath).catch(() => {});
    const { data: rows, error } = await supabase
      .from("lesson_completions")
      .select("lesson_slug")
      .eq("user_id", userId)
      .eq("level_path", levelPath);
    if (error) return localMap;
    const merged = { ...localMap };
    for (const row of rows ?? []) {
      merged[row.lesson_slug as string] = true;
    }
    return merged;
  } catch {
    return localMap;
  }
}
