// Synced from cheneygross-afk/lengo:src/lib/stories/englishPrefs.ts by scripts/sync-content.mjs -- edit it there, not here.
// Whether a reader sees the English under each story paragraph. Each
// reader's choice is remembered per level on their device (the website in
// localStorage, the app in AsyncStorage) under this key, as a
// { [level]: boolean } map. No translation data here (see english.ts).

export const STORY_ENGLISH_STORAGE_KEY = "deepend-story-english";

export function showEnglishByDefault(level: string): boolean {
  return level === "A1";
}

/** The reader's saved choice for this level, else the level default. */
export function showEnglishFor(level: string, saved: unknown): boolean {
  if (saved && typeof saved === "object" && typeof (saved as Record<string, unknown>)[level] === "boolean") {
    return (saved as Record<string, boolean>)[level];
  }
  return showEnglishByDefault(level);
}
