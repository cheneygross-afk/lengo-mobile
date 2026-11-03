// Mobile mirror of the website's src/lib/lessonNotepad.ts: the notepad
// inside every lesson. Same table (public.lesson_notepads), same columns
// and the same levelPath + slug key, so a note written in the app shows
// up on the website's Notes page and in its lesson, and the other way
// round. A copy is kept on the device (AsyncStorage) so the pad opens
// instantly and keeps working offline; the newer copy wins.
import { supabase } from "@/lib/supabase/client";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { courseOfLevelPath, type CourseId } from "@/lib/courses";

export type LessonNotepad = {
  course: CourseId;
  levelPath: string;
  lessonSlug: string;
  lessonTitle: string;
  levelLabel: string;
  body: string;
  /** ms since epoch */
  updatedAt: number;
};

const LOCAL_PREFIX = "deepend-lesson-notepads";

export function notepadKey(levelPath: string, lessonSlug: string): string {
  return `${levelPath}::${lessonSlug}`;
}

function localKey(userId: string | null): string {
  return `${LOCAL_PREFIX}:${userId ?? "guest"}`;
}

type Row = {
  level_path: string;
  lesson_slug: string;
  lesson_title: string;
  level_label: string;
  body: string;
  updated_at: string;
};

const COLUMNS = "level_path, lesson_slug, lesson_title, level_label, body, updated_at";

function fromRow(r: Row): LessonNotepad {
  return {
    course: courseOfLevelPath(r.level_path),
    levelPath: r.level_path,
    lessonSlug: r.lesson_slug,
    lessonTitle: r.lesson_title,
    levelLabel: r.level_label,
    body: r.body,
    updatedAt: Date.parse(r.updated_at) || 0,
  };
}

async function currentUserId(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession();
    return data.session?.user.id ?? null;
  } catch {
    return null;
  }
}

async function saveRemote(userId: string, n: LessonNotepad): Promise<boolean> {
  try {
    if (!n.body.trim()) {
      const { error } = await supabase
        .from("lesson_notepads")
        .delete()
        .eq("user_id", userId)
        .eq("level_path", n.levelPath)
        .eq("lesson_slug", n.lessonSlug);
      return !error;
    }
    const { error } = await supabase.from("lesson_notepads").upsert(
      {
        user_id: userId,
        course: n.course,
        level_path: n.levelPath,
        lesson_slug: n.lessonSlug,
        lesson_title: n.lessonTitle,
        level_label: n.levelLabel,
        body: n.body,
        updated_at: new Date(n.updatedAt).toISOString(),
      },
      { onConflict: "user_id,level_path,lesson_slug" }
    );
    return !error;
  } catch {
    return false;
  }
}

/** This lesson's note (null when there is none yet). */
export async function loadNotepad(
  levelPath: string,
  lessonSlug: string
): Promise<{ userId: string | null; note: LessonNotepad | null }> {
  const userId = await currentUserId();
  const all = await readJSON<Record<string, LessonNotepad>>(localKey(userId), {});
  const key = notepadKey(levelPath, lessonSlug);
  const local = all[key] ?? null;
  if (!userId) return { userId, note: local };
  try {
    const { data, error } = await supabase
      .from("lesson_notepads")
      .select(COLUMNS)
      .eq("user_id", userId)
      .eq("level_path", levelPath)
      .eq("lesson_slug", lessonSlug)
      .maybeSingle();
    if (error || !data) {
      if (!error && local?.body.trim()) void saveRemote(userId, local);
      return { userId, note: local };
    }
    const remote = fromRow(data as Row);
    if (local && local.updatedAt > remote.updatedAt) {
      void saveRemote(userId, local);
      return { userId, note: local };
    }
    all[key] = remote;
    await writeJSON(localKey(userId), all);
    return { userId, note: remote };
  } catch {
    return { userId, note: local };
  }
}

/** Saves on the device right away, then to the account. An emptied note
 * is removed rather than kept as a blank entry. */
export async function saveNotepad(
  userId: string | null,
  n: Omit<LessonNotepad, "course" | "updatedAt">
): Promise<boolean> {
  const note: LessonNotepad = { ...n, course: courseOfLevelPath(n.levelPath), updatedAt: Date.now() };
  const all = await readJSON<Record<string, LessonNotepad>>(localKey(userId), {});
  const key = notepadKey(n.levelPath, n.lessonSlug);
  if (note.body.trim()) all[key] = note;
  else delete all[key];
  await writeJSON(localKey(userId), all);
  if (!userId) return true;
  return saveRemote(userId, note);
}

/** Every note, newest first (account and device merged). */
export async function loadAllNotepads(): Promise<{ userId: string | null; notes: LessonNotepad[] }> {
  const userId = await currentUserId();
  const merged = await readJSON<Record<string, LessonNotepad>>(localKey(userId), {});
  if (userId) {
    try {
      const { data } = await supabase
        .from("lesson_notepads")
        .select(COLUMNS)
        .eq("user_id", userId)
        .order("updated_at", { ascending: false })
        .limit(2000);
      for (const row of (data ?? []) as Row[]) {
        const n = fromRow(row);
        const key = notepadKey(n.levelPath, n.lessonSlug);
        if (!merged[key] || merged[key].updatedAt <= n.updatedAt) merged[key] = n;
      }
      await writeJSON(localKey(userId), merged);
    } catch {
      // Offline: the device copy is all there is.
    }
  }
  const notes = Object.values(merged)
    .filter((n) => n.body.trim())
    .sort((a, b) => b.updatedAt - a.updatedAt);
  return { userId, notes };
}

export async function deleteNotepad(userId: string | null, levelPath: string, lessonSlug: string): Promise<void> {
  await saveNotepad(userId, { levelPath, lessonSlug, lessonTitle: "", levelLabel: "", body: "" });
}
