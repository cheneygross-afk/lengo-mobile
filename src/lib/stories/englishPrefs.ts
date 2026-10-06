// Synced from cheneygross-afk/lengo:src/lib/stories/englishPrefs.ts by scripts/sync-content.mjs -- edit it there, not here.
// Whether a reader sees the English under each story paragraph. Each
// reader's choice is remembered per level on their device (the website in
// localStorage, the app in AsyncStorage) under this key, as a
// { [level]: boolean } map. No translation data here (see english.ts).

export const STORY_ENGLISH_STORAGE_KEY = "deepend-story-english";

// Hidden by default at every level, A1 included (user decision,
// 2026-10-03): readers try the Spanish first and tap "Show English" when
// they need it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function showEnglishByDefault(level: string): boolean {
  return false;
}

/** The reader's saved choice for this level, else the level default. */
export function showEnglishFor(level: string, saved: unknown): boolean {
  if (saved && typeof saved === "object" && typeof (saved as Record<string, unknown>)[level] === "boolean") {
    return (saved as Record<string, boolean>)[level];
  }
  return showEnglishByDefault(level);
}

// The English for Spanish speakers course's stories keep the same kind of
// { [level]: boolean } map for their «Mostrar traducción» (Spanish) toggle
// under their own key, hidden by default at every level too.
export const EN_STORY_TRANSLATION_STORAGE_KEY = "deepend-en-story-spanish";
