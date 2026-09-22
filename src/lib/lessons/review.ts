// Lessons a learner explicitly asked to come back to later, so they can
// find them again without hunting through the full lesson list. Separate
// from completion tracking (lessons/completion.ts) -- a lesson can be
// completed, in the review list, both, or neither.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

function storageKey(levelPath: string): string {
  return `deepend-${levelPath}-review`;
}

export async function getReviewSlugs(levelPath: string): Promise<string[]> {
  return readJSON<string[]>(storageKey(levelPath), []);
}

export async function addToReview(levelPath: string, slug: string): Promise<void> {
  const list = await getReviewSlugs(levelPath);
  if (!list.includes(slug)) {
    await writeJSON(storageKey(levelPath), [...list, slug]);
  }
}

export async function removeFromReview(levelPath: string, slug: string): Promise<void> {
  const list = await getReviewSlugs(levelPath);
  await writeJSON(
    storageKey(levelPath),
    list.filter((s) => s !== slug)
  );
}
