// Romaji -> kana, for typing Japanese on a keyboard without a Japanese
// input method (see components/ScriptKeyboard.tsx; a copy of the website's src/lib/kana.ts). Lower-case
// romaji becomes hiragana, upper-case becomes katakana. Follows the usual
// IME rules: a doubled consonant is a small っ ("kitte" -> きって), "n'"
// or "n" before a consonant is ん, "nn" is ん (and ん + n before a vowel, so
// "konnichiha" -> こんにちは), and a lone "n" waits to see the next letter.
// "-" is the long vowel mark ー, and "," and "." become 、 and 。.

const BASE: Record<string, string> = {
  a: "あ", i: "い", u: "う", e: "え", o: "お",
  ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
  sa: "さ", si: "し", shi: "し", su: "す", se: "せ", so: "そ",
  ta: "た", ti: "ち", chi: "ち", tu: "つ", tsu: "つ", te: "て", to: "と",
  na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
  ha: "は", hi: "ひ", hu: "ふ", fu: "ふ", he: "へ", ho: "ほ",
  ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
  ya: "や", yu: "ゆ", yo: "よ",
  ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
  wa: "わ", wi: "うぃ", we: "うぇ", wo: "を",
  ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
  za: "ざ", zi: "じ", ji: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
  da: "だ", di: "ぢ", du: "づ", de: "で", do: "ど",
  ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
  pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
  va: "ゔぁ", vi: "ゔぃ", vu: "ゔ", ve: "ゔぇ", vo: "ゔぉ",
  fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ",
  kya: "きゃ", kyu: "きゅ", kyo: "きょ",
  sha: "しゃ", shu: "しゅ", sho: "しょ", she: "しぇ", sya: "しゃ", syu: "しゅ", syo: "しょ",
  cha: "ちゃ", chu: "ちゅ", cho: "ちょ", che: "ちぇ", tya: "ちゃ", tyu: "ちゅ", tyo: "ちょ",
  nya: "にゃ", nyu: "にゅ", nyo: "にょ",
  hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
  mya: "みゃ", myu: "みゅ", myo: "みょ",
  rya: "りゃ", ryu: "りゅ", ryo: "りょ",
  gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
  ja: "じゃ", ju: "じゅ", jo: "じょ", je: "じぇ", jya: "じゃ", jyu: "じゅ", jyo: "じょ",
  zya: "じゃ", zyu: "じゅ", zyo: "じょ",
  bya: "びゃ", byu: "びゅ", byo: "びょ",
  pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ",
  thi: "てぃ", dhi: "でぃ",
  xa: "ぁ", xi: "ぃ", xu: "ぅ", xe: "ぇ", xo: "ぉ",
  la: "ぁ", li: "ぃ", lu: "ぅ", le: "ぇ", lo: "ぉ",
  xya: "ゃ", xyu: "ゅ", xyo: "ょ", lya: "ゃ", lyu: "ゅ", lyo: "ょ",
  xtu: "っ", xtsu: "っ", ltu: "っ", ltsu: "っ",
  "-": "ー",
  ",": "、",
  ".": "。",
};

const VOWELS = "aiueo";
const LONGEST = Math.max(...Object.keys(BASE).map((k) => k.length));

/** Hiragana -> katakana (leaves everything else alone). */
export function toKatakana(text: string): string {
  return text.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
}

/**
 * Converts a run of romaji. With `final` false (still typing), a trailing
 * piece that could still become a longer syllable ("k", "sh", a lone "n")
 * is left as typed; with `final` true everything left is flushed ("n"
 * becomes ん).
 */
export function romajiToKana(input: string, final = false): string {
  let out = "";
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    const lower = ch.toLowerCase();
    const upper = ch !== lower;
    const conv = (kana: string) => (upper ? toKatakana(kana) : kana);

    if (!/[a-z'\-,.]/.test(lower)) {
      out += ch;
      i++;
      continue;
    }

    // n: "nn" and "n'" are ん; n before a consonant (not y) is ん.
    if (lower === "n") {
      const next = input[i + 1]?.toLowerCase();
      if (next === undefined) {
        out += final ? conv("ん") : ch;
        i++;
        continue;
      }
      if (next === "'") {
        out += conv("ん");
        i += 2;
        continue;
      }
      if (next === "n") {
        // "nn" before a vowel or y is ん + n ("konnichiha" -> こんにちは,
        // "konna" -> こんな); otherwise it's just ん. While still typing,
        // a trailing "nn" waits for the next letter.
        const after = input[i + 2]?.toLowerCase();
        if (after === undefined && !final) {
          out += input.slice(i);
          break;
        }
        out += conv("ん");
        i += after !== undefined && (VOWELS.includes(after) || after === "y") ? 1 : 2;
        continue;
      }
      if (!VOWELS.includes(next) && next !== "y") {
        out += conv("ん");
        i++;
        continue;
      }
    }

    // A doubled consonant is a small っ.
    const next = input[i + 1]?.toLowerCase();
    if (next === lower && /[bcdfghjkmpqrstvwxyz]/.test(lower)) {
      out += conv("っ");
      i++;
      continue;
    }
    // "tch" (matcha) is also っ + ch.
    if (lower === "t" && input.slice(i + 1, i + 3).toLowerCase() === "ch") {
      out += conv("っ");
      i++;
      continue;
    }

    let matched = false;
    for (let len = Math.min(LONGEST, input.length - i); len > 0; len--) {
      const piece = input.slice(i, i + len).toLowerCase();
      const kana = BASE[piece];
      if (kana) {
        out += conv(kana);
        i += len;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // Nothing matches yet: could be the start of a syllable still being typed.
    const rest = input.slice(i).toLowerCase();
    const pending = Object.keys(BASE).some((k) => k.startsWith(rest));
    if (pending && !final) {
      out += input.slice(i);
      break;
    }
    out += ch;
    i++;
  }
  return out;
}

/** The hiragana keyboard's rows (katakana is the same, converted). */
export const KANA_ROWS: string[][] = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "ゆ", "よ"],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "を", "ん"],
  ["が", "ぎ", "ぐ", "げ", "ご"],
  ["ざ", "じ", "ず", "ぜ", "ぞ"],
  ["だ", "ぢ", "づ", "で", "ど"],
  ["ば", "び", "ぶ", "べ", "ぼ"],
  ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
  ["ゃ", "ゅ", "ょ", "っ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ"],
];

export const JA_PUNCTUATION = ["、", "。", "ー", "「", "」", "？", "！", "・", "　"];
