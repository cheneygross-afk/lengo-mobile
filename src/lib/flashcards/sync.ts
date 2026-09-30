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

// Batches keep each request small: a frequency deck can add a thousand
// cards at once, and PostgREST caps a select at 1,000 rows. Mirrors the
// website's flashcardsSync.ts.
const BATCH = 500;

// What this session last pushed (or pulled) for each card, so a save only
// uploads the cards that changed, and the ids the cloud has, so a card
// removed here can be deleted there by id instead of with an ever-growing
// "not in (...every id...)" filter.
const pushedRow = new Map<string, string>();
const cloudIds = new Set<string>();

function rowKey(c: FlashcardEntry): string {
  return JSON.stringify([
    c.es, c.en, c.pos, c.level, c.levelPath, c.lessonSlug, c.lessonTitle, c.addedAt, c.source ?? null,
    c.folderId ?? null, c.dueAt ?? null, c.box ?? null, c.reviewCount ?? null, c.lastReviewedAt ?? null,
  ]);
}

// Fire-and-forget -- call after every local save. Best effort: a
// signed-out session or a network hiccup never throws for the caller,
// and local storage stays authoritative either way.
export async function pushFlashcardsToCloud(map: Record<string, FlashcardEntry>): Promise<void> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return;
    const changed = Object.values(map).filter((c) => pushedRow.get(c.id) !== rowKey(c));
    for (let i = 0; i < changed.length; i += BATCH) {
      const batch = changed.slice(i, i + BATCH);
      const { error } = await supabase.from("flashcards").upsert(batch.map((c) => toRow(userId, c)));
      if (error) return;
      for (const c of batch) {
        pushedRow.set(c.id, rowKey(c));
        cloudIds.add(c.id);
      }
    }
    if (hasMerged) {
      const gone = [...cloudIds].filter((id) => !map[id]);
      for (let i = 0; i < gone.length; i += BATCH) {
        const batch = gone.slice(i, i + BATCH);
        const { error } = await supabase.from("flashcards").delete().eq("user_id", userId).in("id", batch);
        if (error) return;
        for (const id of batch) {
          cloudIds.delete(id);
          pushedRow.delete(id);
        }
      }
    }
  } catch {
    // ignore
  }
}

export async function mergeFlashcardsFromCloud(
  localMap: Record<string, FlashcardEntry>
): Promise<Record<string, FlashcardEntry>> {
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;
    if (!userId) return localMap;
    const rows: Record<string, unknown>[] = [];
    for (let from = 0; ; from += 1000) {
      const { data: page, error } = await supabase
        .from("flashcards")
        .select("*")
        .eq("user_id", userId)
        .order("id")
        .range(from, from + 999);
      if (error) return localMap;
      rows.push(...((page ?? []) as Record<string, unknown>[]));
      if (!page || page.length < 1000) break;
    }
    const merged = { ...localMap };
    cloudIds.clear();
    pushedRow.clear();
    for (const row of rows) {
      const card = fromRow(row);
      cloudIds.add(card.id);
      pushedRow.set(card.id, rowKey(card));
      const existing = merged[card.id];
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
