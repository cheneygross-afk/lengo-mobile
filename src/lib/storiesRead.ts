import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

// Which free stories this device has read (finished the comprehension
// check), so the end of a lesson can suggest one the learner hasn't. Same
// key and shape as the website's src/lib/storiesRead.ts; kept on the
// device only, so losing it just means a read story may be suggested again.
export const STORIES_READ_STORAGE_KEY = "deepend-stories-read";

export async function loadStoriesRead(): Promise<Record<string, number>> {
  const read = await readJSON<Record<string, number>>(STORIES_READ_STORAGE_KEY, {});
  return read && typeof read === "object" ? read : {};
}

export async function markStoryRead(slug: string): Promise<void> {
  const read = await loadStoriesRead();
  if (read[slug]) return;
  read[slug] = Date.now();
  await writeJSON(STORIES_READ_STORAGE_KEY, read);
}
