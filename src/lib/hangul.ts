// Hangul composition for the on-screen Korean keyboard
// (components/ScriptKeyboard.tsx; a copy of the website's src/lib/hangul.ts): typing jamo one at a time builds
// syllable blocks the way a two-set (두벌식) keyboard does. ㅎ ㅏ ㄴ → 한,
// then ㄱ ㅡ ㄹ → 한글; a vowel after a final consonant takes it over
// (한 + ㅏ → 하나). Only the last character of the text is ever recomposed.

const S_BASE = 0xac00;
const S_END = 0xd7a3;

// Compatibility jamo (what the keys show and type) in Unicode order.
const INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const VOWELS = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
// Index 0 is "no final consonant".
const FINALS = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

const COMPOUND_VOWELS: Record<string, string> = {
  "ㅗㅏ": "ㅘ",
  "ㅗㅐ": "ㅙ",
  "ㅗㅣ": "ㅚ",
  "ㅜㅓ": "ㅝ",
  "ㅜㅔ": "ㅞ",
  "ㅜㅣ": "ㅟ",
  "ㅡㅣ": "ㅢ",
};
const DOUBLE_FINALS: Record<string, string> = {
  "ㄱㅅ": "ㄳ",
  "ㄴㅈ": "ㄵ",
  "ㄴㅎ": "ㄶ",
  "ㄹㄱ": "ㄺ",
  "ㄹㅁ": "ㄻ",
  "ㄹㅂ": "ㄼ",
  "ㄹㅅ": "ㄽ",
  "ㄹㅌ": "ㄾ",
  "ㄹㅍ": "ㄿ",
  "ㄹㅎ": "ㅀ",
  "ㅂㅅ": "ㅄ",
};
const splitPair = (table: Record<string, string>, jamo: string): [string, string] | null => {
  const key = Object.keys(table).find((k) => table[k] === jamo);
  return key ? [key[0], key[1]] : null;
};

export const isConsonantJamo = (ch: string) => INITIALS.includes(ch);
export const isVowelJamo = (ch: string) => VOWELS.includes(ch);

type Block = { initial: number; vowel: number; final: number };

function decompose(ch: string): Block | null {
  const code = ch.charCodeAt(0);
  if (ch.length !== 1 || code < S_BASE || code > S_END) return null;
  const offset = code - S_BASE;
  return { initial: Math.floor(offset / 588), vowel: Math.floor((offset % 588) / 28), final: offset % 28 };
}

function compose(b: Block): string {
  return String.fromCharCode(S_BASE + b.initial * 588 + b.vowel * 28 + b.final);
}

/** `text` with one more jamo typed at its end. Anything that isn't a jamo
 * (a space, punctuation) is simply appended. */
export function typeJamo(text: string, jamo: string): string {
  const before = text.slice(0, -1);
  const last = text.slice(-1);
  if (isVowelJamo(jamo)) {
    // Consonant then vowel: a new block (ㄱ + ㅏ → 가).
    if (isConsonantJamo(last)) return before + compose({ initial: INITIALS.indexOf(last), vowel: VOWELS.indexOf(jamo), final: 0 });
    // Vowel then vowel: a combined vowel (ㅗ + ㅏ → ㅘ).
    if (isVowelJamo(last) && COMPOUND_VOWELS[last + jamo]) return before + COMPOUND_VOWELS[last + jamo];
    const block = decompose(last);
    if (block) {
      if (block.final === 0) {
        const combined = COMPOUND_VOWELS[VOWELS[block.vowel] + jamo];
        if (combined) return before + compose({ ...block, vowel: VOWELS.indexOf(combined) });
        return text + jamo;
      }
      // A vowel takes over the final consonant (한 + ㅏ → 하나; 닭 + ㅏ → 달가).
      const final = FINALS[block.final];
      const pair = splitPair(DOUBLE_FINALS, final);
      const [keep, move] = pair ?? ["", final];
      const kept = compose({ ...block, final: keep ? FINALS.indexOf(keep) : 0 });
      return before + kept + compose({ initial: INITIALS.indexOf(move), vowel: VOWELS.indexOf(jamo), final: 0 });
    }
    return text + jamo;
  }
  if (isConsonantJamo(jamo)) {
    const block = decompose(last);
    if (block) {
      if (block.final === 0) {
        const index = FINALS.indexOf(jamo);
        // ㄸ ㅃ ㅉ never end a block.
        return index > 0 ? before + compose({ ...block, final: index }) : text + jamo;
      }
      const double = DOUBLE_FINALS[FINALS[block.final] + jamo];
      if (double) return before + compose({ ...block, final: FINALS.indexOf(double) });
    }
    return text + jamo;
  }
  return text + jamo;
}

/** `text` with its last jamo removed (한 → 하 → ㅎ → ""), the way
 * Backspace works while a block is being typed. */
export function deleteJamo(text: string): string {
  const before = text.slice(0, -1);
  const last = text.slice(-1);
  const block = decompose(last);
  if (!block) {
    const vowelPair = splitPair(COMPOUND_VOWELS, last);
    return vowelPair ? before + vowelPair[0] : before;
  }
  if (block.final) {
    const pair = splitPair(DOUBLE_FINALS, FINALS[block.final]);
    return before + compose({ ...block, final: pair ? FINALS.indexOf(pair[0]) : 0 });
  }
  const vowelPair = splitPair(COMPOUND_VOWELS, VOWELS[block.vowel]);
  if (vowelPair) return before + compose({ ...block, vowel: VOWELS.indexOf(vowelPair[0]) });
  return before + INITIALS[block.initial];
}

/** The two-set layout, row by row: [plain, shifted]. */
export const HANGUL_KEY_ROWS: [string, string][][] = [
  [["ㅂ", "ㅃ"], ["ㅈ", "ㅉ"], ["ㄷ", "ㄸ"], ["ㄱ", "ㄲ"], ["ㅅ", "ㅆ"], ["ㅛ", "ㅛ"], ["ㅕ", "ㅕ"], ["ㅑ", "ㅑ"], ["ㅐ", "ㅒ"], ["ㅔ", "ㅖ"]],
  [["ㅁ", "ㅁ"], ["ㄴ", "ㄴ"], ["ㅇ", "ㅇ"], ["ㄹ", "ㄹ"], ["ㅎ", "ㅎ"], ["ㅗ", "ㅗ"], ["ㅓ", "ㅓ"], ["ㅏ", "ㅏ"], ["ㅣ", "ㅣ"]],
  [["ㅋ", "ㅋ"], ["ㅌ", "ㅌ"], ["ㅊ", "ㅊ"], ["ㅍ", "ㅍ"], ["ㅠ", "ㅠ"], ["ㅜ", "ㅜ"], ["ㅡ", "ㅡ"]],
];
