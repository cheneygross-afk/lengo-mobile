// Synced from cheneygross-afk/lengo:src/lib/ko-conjugation/hangul.ts by scripts/sync-content.mjs -- edit it there, not here.
// Hangul syllable arithmetic for the Korean conjugator: take a syllable
// block apart into initial, vowel and final, change one part, and put it
// back together (가 + ㅆ = 갔, 살 - ㄹ = 사, 모 + ㄹ = 몰).

const BASE = 0xac00;
const LAST = 0xd7a3;

export const INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
export const VOWELS = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
export const FINALS = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

export type Syllable = { initial: string; vowel: string; final: string };

export function isSyllable(ch: string): boolean {
  const c = ch.charCodeAt(0);
  return ch.length === 1 && c >= BASE && c <= LAST;
}

export function isHangulWord(s: string): boolean {
  return s.length > 0 && [...s].every(isSyllable);
}

export function split(ch: string): Syllable {
  const n = ch.charCodeAt(0) - BASE;
  return { initial: INITIALS[Math.floor(n / 588)], vowel: VOWELS[Math.floor((n % 588) / 28)], final: FINALS[n % 28] };
}

export function join({ initial, vowel, final }: Syllable): string {
  const i = INITIALS.indexOf(initial);
  const v = VOWELS.indexOf(vowel);
  const f = FINALS.indexOf(final);
  if (i < 0 || v < 0 || f < 0) throw new Error(`Not a syllable: ${initial}${vowel}${final}`);
  return String.fromCharCode(BASE + i * 588 + v * 28 + f);
}

const lastOf = (s: string) => split(s[s.length - 1]);

/** The last syllable's final consonant ("" if none). */
export const lastFinal = (s: string): string => lastOf(s).final;

/** The last syllable's vowel. */
export const lastVowel = (s: string): string => lastOf(s).vowel;

/** The word with its last syllable changed. */
export function editLast(s: string, change: Partial<Syllable>): string {
  return s.slice(0, -1) + join({ ...lastOf(s), ...change });
}

/** Puts a final consonant on the last syllable: 가 + ㅆ = 갔. */
export const withFinal = (s: string, final: string): string => editLast(s, { final });

/** True if the jamo can be a final consonant and is meant to join the syllable before it (ㄴ, ㄹ, ㅂ, ㅆ). */
export const isJamo = (ch: string): boolean => FINALS.includes(ch) && ch !== "";
