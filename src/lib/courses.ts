// Which course a levelPath belongs to: "ja-..." is the Japanese beta,
// "zh-..." the Chinese beta, "fr/..." (or "fr", a custom French flashcard)
// the French course -- the same "fr/a1" ... "fr/culture" paths the
// website uses, so completions, highlights and cards sync -- anything
// else Spanish. Flashcards, review lists, Today's review and Home each
// show one course at a time, and ask here instead of testing prefixes
// themselves.
export type CourseId = "es" | "ja" | "zh" | "fr";

export function courseOfLevelPath(levelPath: string): CourseId {
  if (levelPath.startsWith("ja")) return "ja";
  if (levelPath.startsWith("zh")) return "zh";
  if (isFrenchLevelPath(levelPath)) return "fr";
  return "es";
}

/** True for the French course's levelPaths: "fr/a1" ... "fr/culture", and
 * "fr" itself (flashcards written by hand in the French deck). */
export function isFrenchLevelPath(levelPath: string): boolean {
  return levelPath === "fr" || levelPath.startsWith("fr/");
}
