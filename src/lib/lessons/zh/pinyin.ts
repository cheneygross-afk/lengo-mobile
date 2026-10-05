// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/pinyin.ts by scripts/sync-content.mjs -- edit it there, not here.
// Pinyin and hanzi answer checking for the Chinese track.
//
// Self-contained (no imports) so the whole zh/ folder can be lifted into
// another project unchanged -- see README.md in this folder. Hermes (the
// mobile app's JS engine) has no \p{...} classes, so character ranges are
// spelled out.

/** Grade result, same shape as the app's grading.ts GradeResult. */
export type ZhGradeResult = { correct: boolean; note?: string };

// Tone-marked vowel -> [plain vowel, tone].
const MARKED: Record<string, [string, number]> = {
  ā: ["a", 1], á: ["a", 2], ǎ: ["a", 3], à: ["a", 4],
  ē: ["e", 1], é: ["e", 2], ě: ["e", 3], è: ["e", 4],
  ī: ["i", 1], í: ["i", 2], ǐ: ["i", 3], ì: ["i", 4],
  ō: ["o", 1], ó: ["o", 2], ǒ: ["o", 3], ò: ["o", 4],
  ū: ["u", 1], ú: ["u", 2], ǔ: ["u", 3], ù: ["u", 4],
  ǖ: ["ü", 1], ǘ: ["ü", 2], ǚ: ["ü", 3], ǜ: ["ü", 4],
};

// CJK ideographs (incl. extension A) -- any of these means the text is
// written in characters, not pinyin.
const HAN = /[㐀-䶿一-鿿]/;

// Punctuation and spacing ignored when comparing answers: ASCII and
// full-width Chinese punctuation alike.
const IGNORED = /[\s.,!?;:'"“”‘’()（）\[\]【】《》〈〉、，。！？；：…—\-·~～]/g;

/** True if `s` contains Chinese characters. */
export function hasHanzi(s: string): boolean {
  return HAN.test(s);
}

/** Characters with punctuation and spaces removed: "你好！" -> "你好". */
export function cleanHanzi(s: string): string {
  return s.normalize("NFC").replace(IGNORED, "");
}

/**
 * Splits pinyin into its letters and its tone sequence, so tone marks and
 * tone numbers compare alike: "nǐ hǎo", "ni3 hao3" and "ni3hao3" all give
 * { letters: "nihao", tones: "33" }. Neutral tone (5 or 0, or no mark) adds
 * nothing to the sequence. "v" and "u:" are read as ü. Returns null for
 * text that contains characters.
 */
export function pinyinParts(s: string): { letters: string; tones: string } | null {
  if (hasHanzi(s)) return null;
  const t = s.normalize("NFC").toLowerCase().replace(/u:/g, "ü").replace(/v/g, "ü");
  let letters = "";
  let tones = "";
  for (const ch of t) {
    const marked = MARKED[ch];
    if (marked) {
      letters += marked[0];
      tones += String(marked[1]);
    } else if (ch >= "1" && ch <= "4") tones += ch;
    else if ((ch >= "a" && ch <= "z") || ch === "ü") letters += ch;
  }
  return letters ? { letters, tones } : null;
}

/** "nǐ hǎo" -> "ni hao": tone marks removed, spacing kept. */
export function stripTones(s: string): string {
  let out = "";
  for (const ch of s.normalize("NFC")) out += MARKED[ch]?.[0] ?? ch;
  return out;
}

/**
 * Grades a typed Chinese answer. `answers` holds the accepted answers --
 * characters and/or tone-marked pinyin. Characters must match exactly
 * (punctuation and spaces ignored). Pinyin matches with tone marks or tone
 * numbers; right syllables typed with no tones at all count as correct
 * with a reminder, wrong tones count as wrong.
 */
export function gradeChineseAnswer(value: string, answers: string[]): ZhGradeResult {
  const typedHanzi = cleanHanzi(value);
  if (!typedHanzi) return { correct: false };
  if (answers.some((a) => cleanHanzi(a) === typedHanzi)) return { correct: true };

  const typed = pinyinParts(value);
  if (!typed) return { correct: false };
  let toneless: string | null = null;
  for (const answer of answers) {
    const p = pinyinParts(answer);
    if (!p || p.letters !== typed.letters) continue;
    if (p.tones === typed.tones) return { correct: true };
    if (!typed.tones && !toneless) toneless = answer;
  }
  if (toneless) return { correct: true, note: `Correct -- now add the tones: "${toneless}".` };
  return { correct: false };
}
