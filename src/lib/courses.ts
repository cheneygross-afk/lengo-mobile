// Which course a levelPath belongs to: "ja-..." is the Japanese beta,
// "zh-..." the Chinese beta, "fr/..." (or "fr", a custom French flashcard)
// the French course -- the same "fr/a1" ... "fr/culture" paths the
// website uses, so completions, highlights and cards sync -- "en/..." the
// English-for-Spanish-speakers beta (website-only for now; its cards still
// arrive here through sync, so they must never be mistaken for Spanish),
// "de/..." (or "de") the German course -- anything else Spanish. Flashcards, review lists, Today's review and Home each
// show one course at a time, and ask here instead of testing prefixes
// themselves.
export type CourseId = "es" | "ja" | "zh" | "fr" | "en" | "de";

export function courseOfLevelPath(levelPath: string): CourseId {
  if (levelPath.startsWith("ja")) return "ja";
  if (levelPath.startsWith("zh")) return "zh";
  if (isFrenchLevelPath(levelPath)) return "fr";
  if (levelPath === "en" || levelPath.startsWith("en/")) return "en";
  if (isGermanLevelPath(levelPath)) return "de";
  return "es";
}

/** True for the French course's levelPaths: "fr/a1" ... "fr/culture", and
 * "fr" itself (flashcards written by hand in the French deck). */
export function isFrenchLevelPath(levelPath: string): boolean {
  return levelPath === "fr" || levelPath.startsWith("fr/");
}

/** True for the German course's levelPaths: "de/a1" ... "de/culture", and
 * "de" itself (flashcards written by hand in the German deck). */
export function isGermanLevelPath(levelPath: string): boolean {
  return levelPath === "de" || levelPath.startsWith("de/");
}
