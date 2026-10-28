// A copy of the website's src/lib/italianBeta.ts (cheneygross-afk/lengo):
// the Italian course is a private beta for these accounts only, like the
// Korean one (lib/koreanBeta.ts). The app shows Italian (Home's pill and
// every Italian screen) only to them, the way the website's proxy 404s
// /lessons/it for everyone else. Keep the list the same as the website's.
export const ITALIAN_BETA_EMAILS: ReadonlySet<string> = new Set(["cheneygross@gmail.com", "cheney@deependspanish.com"]);

export function isItalianBetaEmail(email: string | null | undefined): boolean {
  return !!email && ITALIAN_BETA_EMAILS.has(email.trim().toLowerCase());
}
