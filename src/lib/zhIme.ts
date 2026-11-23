// The pinyin keyboard's lookup (components/ScriptKeyboard.tsx): the
// candidate list half of the website's src/lib/zhIme.ts. The word list
// itself comes from the website (/api/zh-dictionary), built from the
// Chinese course, so the candidates are words the learner meets in lessons.

/** [characters, pinyin with tone marks, toneless key, times seen] */
export type ImeEntry = [string, string, string, number];

const TONED: Record<string, string> = {
  ā: "a", á: "a", ǎ: "a", à: "a", ē: "e", é: "e", ě: "e", è: "e", ī: "i", í: "i", ǐ: "i", ì: "i",
  ō: "o", ó: "o", ǒ: "o", ò: "o", ū: "u", ú: "u", ǔ: "u", ù: "u", ǖ: "v", ǘ: "v", ǚ: "v", ǜ: "v", ü: "v",
};
/** Toneless, lower-case, letters only, ü as v: "Nǐ hǎo!" -> "nihao". */
export function pinyinKey(pinyin: string): string {
  return pinyin
    .toLowerCase()
    .replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/g, (c) => TONED[c])
    .replace(/[^a-z]/g, "");
}

/**
 * Candidates for what's been typed so far: exact matches for the whole
 * input first (most often seen first), then longer words that start with
 * it, then, if nothing covers the whole input, the best matches for its
 * longest leading part that has any -- picking one of those consumes just
 * that part, the way a phone keyboard works through "nihaoma".
 */
export function imeCandidates(dict: ImeEntry[], typed: string, limit = 9): ImeEntry[] {
  const key = pinyinKey(typed);
  if (!key) return [];
  const exact = dict.filter((e) => e[2] === key);
  const longer = dict.filter((e) => e[2].startsWith(key) && e[2] !== key);
  let out = [...exact, ...longer.sort((a, b) => a[0].length - b[0].length || b[3] - a[3])];
  if (out.length === 0) {
    for (let len = key.length - 1; len > 0 && out.length === 0; len--) {
      const prefix = key.slice(0, len);
      out = dict.filter((e) => e[2] === prefix);
    }
  }
  return out.slice(0, limit);
}
