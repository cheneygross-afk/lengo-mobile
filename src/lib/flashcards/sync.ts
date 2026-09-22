// Pushes this account's flashcards up to Supabase (the `flashcards`
// table) and pulls them back down -- the cross-platform mirror that
// keeps a learner's cards the same on the website and in this app. Both
// platforms stay local-first: AsyncStorage/localStorage is still what
// every screen actually reads, this just keeps the cloud copy (and
// therefore the OTHER platform) in step with it.
//
// Deletion safety: pushFlashcardsToCloud can also PRUNE remote rows
// that aren't in the local map anymore (the user deleted a card), but
// that's only safe to do once this session has actually pulled the
// cloud's full set down at least once -- otherwise a card added on the
// other platform, never yet merged into this local map, would look
// "deleted" and get wiped from the cloud by the very first save here.
// `hasMerged` is what gates that.
import { supabase } from "@/lib/supabase/client";
import type { FlashcardEntry } from "./store";

let hasMerged = false;

function toRow(userId: string, card: FlashcardEntry) {
  return {
    id: card.id,
    user_id: userId,
    es: card.es,
    en: card.en,
    pos: card.pos,
    level: card.level,
    level_path: card.levelPath,
    lesson_slug: card.lessonSlug,
    lesson_title: card.lessonTitle,
    added_at: card.addedAt,
    source: card.source ?? null,
    folder_id: card.folderId ?? null,
    due_at: card.dueAt ?? null,
    box: card.box ?? null,
    review_count: card.reviewCount ?? null,
    last_reviewed_at: card.lastReviewedAt ?? null,
    updated_at: new Date().toISOString(),
  };
}

function fromRow(row: Record<string, unknown>): FlashcardEntry {
  return {
    id: row.id as string,
    es: row.es as string,
    en: row.en as string,
    pos: row.pos as string,
    level: row.level as string,
    levelPath: row.level_path as string,
    lessonSlug: row.lesson_slug as string,
    lessonTitle: row.lesson_title as string,
    addedAt: row.added_at as number,
    source: (row.source as FlashcardEntry["source"]) ?? undefined,
    folderId: (row.folder_id as string) ?? undefined,
    dueAt: (row.due_at as number) ?? undefined,
    box: (row.box as number) ?? undefined,
    reviewCount: (row.review_count as number) ?? undefined,
    lastReviewedAt: (row.last_reviewed_at as number) ?? undefined,
  };
}

// Fire-and-forget -- called from saveFlashcards after every local write.
// Best-effort like everything else in this store: a network hiccup here
// never blocks or throws for the caller.
export async function pushFlashcardsToCloud(map: Record<string, FlashcardEntry>): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return;
    const cards = Object.values(map);
    if (cards.length > 0) {
      await supabase.from("flashcards").upsert(cards.map((c) => toRow(userId, c)));
    }
    if (hasMerged) {
      const ids = cards.map((c) => c.id);
      let query = supabase.from("flashcards").delete().eq("user_id", userId);
      query = ids.length > 0 ? query.not("id", "in", `(${ids.map((id) => `"${id}"`).join(",")})`) : query;
      await query;
    }
  } catch {
    // ignore -- cloud sync is best-effort, local storage stays authoritative
  }
}

// Pulls every remote card for this account and merges it into the local
// map that's about to be saved -- called once per app session (see
// AuthContext) before the merged flag lets pushFlashcardsToCloud start
// pruning. Returns the merged map; the caller is responsible for saving
// it locally.
export async function mergeFlashcardsFromCloud(
  localMap: Record<string, FlashcardEntry>
): Promise<Record<string, FlashcardEntry>> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return localMap;
    const { data: rows, error } = await supabase.from("flashcards").select("*").eq("user_id", userId);
    if (error) return localMap;
    const merged = { ...localMap };
    for (const row of rows ?? []) {
      const card = fromRow(row as Record<string, unknown>);
      const existing = merged[card.id];
      // Most-recently-touched wins when the same card exists on both
      // sides (e.g. graded on one platform more recently than the
      // other) -- everything else is a straightforward union.
      if (!existing || (card.lastReviewedAt ?? card.addedAt) > (existing.lastReviewedAt ?? existing.addedAt)) {
        merged[card.id] = card;
      }
    }
    hasMerged = true;
    return merged;
  } catch {
    return localMap;
  }
}
