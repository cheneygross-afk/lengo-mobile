// Which course a levelPath belongs to: "ja-..." is the Japanese beta,
// "zh-..." the Chinese beta, anything else Spanish. Flashcards, review
// lists, Today's review and Home each show one course at a time, and ask
// here instead of testing prefixes themselves.
export type CourseId = "es" | "ja" | "zh";

export function courseOfLevelPath(levelPath: string): CourseId {
  if (levelPath.startsWith("ja")) return "ja";
  if (levelPath.startsWith("zh")) return "zh";
  return "es";
}
