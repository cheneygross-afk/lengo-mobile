// Mobile mirror of the web app's src/lib/highlights.ts -- same table
// (public.lesson_highlights), same columns, same merge-overlapping-
// highlights logic in saveLessonHighlight, so a highlight saved here
// shows up (and can be edited/removed) from the website too, and vice
// versa. Unlike flashcards or lesson-completion tracking, these are
// never mirrored into local/AsyncStorage -- they're account data only,
// same as on web, and RLS already scopes each user to their own rows.
import { supabase } from "@/lib/supabase/client";

export type LessonHighlight = {
  id: string;
  lessonSlug: string;
  levelPath: string;
  // Identifies which specific paragraph/example within the lesson this
  // highlight belongs to (e.g. "sec0-body1", "sec2-ex0-es") -- see
  // LessonRunnerScreen's blockKey scheme, which matches the website's
  // LessonRunner.tsx exactly so highlights sync cross-platform. Offsets
  // below are character positions within that one block's plain text,
  // not the whole lesson.
  blockKey: string;
  start: number;
  end: number;
  text: string;
  createdAt: string;
};

type Row = {
  id: string;
  lesson_slug: string;
  level_path: string;
  block_key: string;
  start_offset: number;
  end_offset: number;
  highlighted_text: string;
  created_at: string;
};

function fromRow(row: Row): LessonHighlight {
  return {
    id: row.id,
    lessonSlug: row.lesson_slug,
    levelPath: row.level_path,
    blockKey: row.block_key,
    start: row.start_offset,
    end: row.end_offset,
    text: row.highlighted_text,
    createdAt: row.created_at,
  };
}

/** All of the current user's highlights for one lesson (or story --
 *  anything keyed by a lessonSlug in lesson_highlights). Empty (not an
 *  error) when logged out -- callers treat "no highlights" and "can't
 *  have highlights right now" the same way. */
export async function loadLessonHighlights(lessonSlug: string): Promise<LessonHighlight[]> {
  const { data, error } = await supabase
    .from("lesson_highlights")
    .select("id, lesson_slug, level_path, block_key, start_offset, end_offset, highlighted_text, created_at")
    .eq("lesson_slug", lessonSlug);
  if (error || !data) return [];
  return (data as Row[]).map(fromRow);
}

/**
 * Saves a new highlight, first deleting any of this user's existing
 * highlights in the same block that the new range overlaps -- so two
 * overlapping selections merge into one wider highlight instead of
 * rendering as broken, partially-nested spans. Returns the saved
 * highlight (with its new id) on success, or null if the write failed
 * (not logged in, RLS rejection, network error, etc.) -- best-effort,
 * same as this app's other account-synced data.
 */
export async function saveLessonHighlight(params: {
  lessonSlug: string;
  levelPath: string;
  blockKey: string;
  start: number;
  end: number;
  text: string;
  // Full plain text of the paragraph/example this highlight belongs to --
  // needed because a merge with an overlapping existing highlight can
  // widen the saved range beyond params.start/end, and the correct
  // highlighted_text for that wider range has to come from the whole
  // block, not just the newly-selected fragment.
  blockText: string;
  existing: LessonHighlight[]; // this block's current highlights, to merge against
}): Promise<LessonHighlight | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  let mergedStart = params.start;
  let mergedEnd = params.end;
  const overlapping = params.existing.filter(
    (h) => h.blockKey === params.blockKey && h.start < mergedEnd && h.end > mergedStart
  );
  for (const h of overlapping) {
    mergedStart = Math.min(mergedStart, h.start);
    mergedEnd = Math.max(mergedEnd, h.end);
  }

  if (overlapping.length > 0) {
    await supabase
      .from("lesson_highlights")
      .delete()
      .in("id", overlapping.map((h) => h.id));
  }

  const { data, error } = await supabase
    .from("lesson_highlights")
    .insert({
      user_id: user.id,
      lesson_slug: params.lessonSlug,
      level_path: params.levelPath,
      block_key: params.blockKey,
      start_offset: mergedStart,
      end_offset: mergedEnd,
      highlighted_text: params.blockText.slice(mergedStart, mergedEnd),
    })
    .select("id, lesson_slug, level_path, block_key, start_offset, end_offset, highlighted_text, created_at")
    .single();

  if (error || !data) return null;
  return fromRow(data as Row);
}

/** Every one of the current user's highlights across every lesson, most
 *  recent first. Empty (not an error) when logged out, same convention
 *  as loadLessonHighlights. */
export async function loadAllHighlights(): Promise<LessonHighlight[]> {
  const { data, error } = await supabase
    .from("lesson_highlights")
    .select("id, lesson_slug, level_path, block_key, start_offset, end_offset, highlighted_text, created_at")
    .order("created_at", { ascending: false });
  if (error || !data) return [];
  return (data as Row[]).map(fromRow);
}

export async function deleteLessonHighlight(id: string): Promise<boolean> {
  const { error } = await supabase.from("lesson_highlights").delete().eq("id", id);
  return !error;
}
