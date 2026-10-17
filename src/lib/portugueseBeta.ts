// Synced from cheneygross-afk/lengo:src/lib/portugueseBeta.ts by scripts/sync-content.mjs -- edit it there, not here.
// The Brazilian Portuguese course (/lessons/pt) is a private beta for these
// accounts only. Checked by the proxy (src/proxy.ts) before anything
// renders, and again by the /lessons/pt layout (lib/entitlements.ts).
// Plain module with no server imports, so the proxy can use it.
export const PORTUGUESE_BETA_EMAILS: ReadonlySet<string> = new Set(["cheneygross@gmail.com"]);

export function isPortugueseBetaEmail(email: string | null | undefined): boolean {
  return !!email && PORTUGUESE_BETA_EMAILS.has(email.trim().toLowerCase());
}
