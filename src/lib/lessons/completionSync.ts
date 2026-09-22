// Cross-platform mirror of lesson completion, same idea as
// flashcards/sync.ts but simpler: there's no "un-complete a lesson"
// feature on either platform, so this is pure union -- no delete/prune
// case to guard against.
import { supabase } from "@/lib/supabase/client";

export async function pushCompletionToCloud(levelPath: string, slug: string, number: number): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return;
    await supabase
      .from("lesson_completions")
      .upsert(
        { user_id: userId, level_path: levelPath, lesson_slug: slug, lesson_number: number },
        { onConflict: "user_id,level_path,lesson_slug" }
      );
  } catch {
    // ignore -- best-effort, local storage stays authoritative
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
