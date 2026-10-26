// A copy of the website's src/lib/koreanBeta.ts (cheneygross-afk/lengo):
// the Korean course is a private beta for these accounts only. The app
// shows Korean (Home's pill and every Korean screen) only to them, the way
// the website's proxy 404s /lessons/ko for everyone else. Keep the list
// the same as the website's.
export const KOREAN_BETA_EMAILS: ReadonlySet<string> = new Set(["cheneygross@gmail.com"]);

export function isKoreanBetaEmail(email: string | null | undefined): boolean {
  return !!email && KOREAN_BETA_EMAILS.has(email.trim().toLowerCase());
}
