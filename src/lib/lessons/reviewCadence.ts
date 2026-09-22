// Decides when the "every 5th lesson is a review of the past 4" feature
// (LessonListScreen surfaces it, ReviewDrillScreen runs it) is due for a
// given track. Deliberately keyed off the *chronological* completion
// log (completion.ts) rather than lesson numbers -- lesson numbering has
// gaps (Reading Practice is excluded from A1's list; the Japanese
// alphabet module has extra "optional" drill lessons interspersed with
// the real ones), so "the past 4 lessons" means the last four the
// student actually finished, not four consecutive catalog numbers.
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";
import { getCompletionLog } from "./completion";

function reviewedKey(levelPath: string): string {
  return `deepend-${levelPath}-review-batches-done`;
}

export type PendingReviewBatch = {
  // 1 after lessons 1-4, 2 after lessons 5-8, and so on -- also doubles
  // as this batch's identity for markReviewBatchDone.
  batch: number;
  // The 4 lessons this batch covers, oldest first.
  slugs: string[];
};

export async function getPendingReviewBatch(levelPath: string): Promise<PendingReviewBatch | null> {
  const log = await getCompletionLog(levelPath);
  if (log.length === 0 || log.length % 4 !== 0) return null;
  const batch = log.length / 4;
  const done = await readJSON<number[]>(reviewedKey(levelPath), []);
  if (done.includes(batch)) return null;
  return { batch, slugs: log.slice(log.length - 4).map((e) => e.slug) };
}

export async function markReviewBatchDone(levelPath: string, batch: number): Promise<void> {
  const done = await readJSON<number[]>(reviewedKey(levelPath), []);
  if (!done.includes(batch)) await writeJSON(reviewedKey(levelPath), [...done, batch]);
}
