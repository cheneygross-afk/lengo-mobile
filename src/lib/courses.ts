// Which course a levelPath belongs to: "ja-..." is the Japanese beta,
// "zh-..." the Chinese beta, "fr/..." (or "fr", a custom French flashcard)
// the French course -- the same "fr/a1" ... "fr/culture" paths the
// website uses, so completions, highlights and cards sync -- "en/..." the
// English-for-Spanish-speakers beta (website-only for now; its cards still
// arrive here through sync, so they must never be mistaken for Spanish),
// "de/..." (or "de") the German course, "pt/..." (or "pt") the Brazilian
// Portuguese course (open to every account, like French and German),
// "ko/..." (or "ko") the Korean beta (one account only, lib/koreanBeta.ts) --
// anything else Spanish. Flashcards, review lists, Today's review and Home each
// show one course at a time, and ask here instead of testing prefixes
// themselves.
export type CourseId = "es" | "ja" | "zh" | "fr" | "en" | "de" | "pt" | "ko";

export function courseOfLevelPath(levelPath: string): CourseId {
  if (levelPath.startsWith("ja")) return "ja";
  if (levelPath.startsWith("zh")) return "zh";
  if (isFrenchLevelPath(levelPath)) return "fr";
  if (levelPath === "en" || levelPath.startsWith("en/")) return "en";
  if (isGermanLevelPath(levelPath)) return "de";
  if (isPortugueseLevelPath(levelPath)) return "pt";
  if (isKoreanLevelPath(levelPath)) return "ko";
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

/** True for the Brazilian Portuguese course's levelPaths: "pt/a1" ... "pt/c2",
 * and "pt" itself (flashcards written by hand in the Portuguese deck). */
export function isPortugueseLevelPath(levelPath: string): boolean {
  return levelPath === "pt" || levelPath.startsWith("pt/");
}

/** True for the Korean beta's levelPaths: "ko/hangul", "ko/a1" ... "ko/c2",
 * "ko/culture", and "ko" itself (flashcards written by hand in the Korean deck). */
export function isKoreanLevelPath(levelPath: string): boolean {
  return levelPath === "ko" || levelPath.startsWith("ko/");
}

/** The course's language as an English name ("Spanish", "Japanese" ...). */
export function courseName(course: CourseId): string {
  return { es: "Spanish", fr: "French", de: "German", pt: "Portuguese", ko: "Korean", ja: "Japanese", zh: "Chinese", en: "English" }[course];
}
