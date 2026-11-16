// Copied from the website (cheneygross-afk/lengo: src/lib/japanese.ts). Keep the two the same.
// Japanese text helpers for the Japanese course: furigana markup, kana
// conversion, word segmentation and answer matching. Pure text logic, no
// platform APIs.
//
// Furigana markup: lesson and story text writes every kanji word as
// {漢字|かんじ} -- the kanji, a pipe, then its reading in hiragana -- with
// okurigana left outside: {食|た}べる, {日本語|にほんご}. Screens show the
// reading above the kanji (<ruby>) when furigana is on; speech, matching
// <select> menus and anything else that can't show ruby use plainJa().
// Typed answers can be written in kanji, kana, any mix of the two, or
// romaji (see jaAnswerForms / matchesJaAnswer).

export type RubyPart = { text: string; reading?: string };

const RUBY = /\{([^{}|]+)\|([^{}|]+)\}/g;

/** True if `text` carries {漢字|かんじ} furigana markup. */
export function hasRuby(text: string): boolean {
  RUBY.lastIndex = 0;
  const found = RUBY.test(text);
  // test() on a /g regex leaves lastIndex past the match, and matchAll()
  // in parseRuby starts from there, so reset it.
  RUBY.lastIndex = 0;
  return found;
}

/** Splits marked-up text into plain runs and {base, reading} groups. */
export function parseRuby(text: string): RubyPart[] {
  const parts: RubyPart[] = [];
  let pos = 0;
  for (const m of text.matchAll(RUBY)) {
    const start = m.index ?? 0;
    if (start > pos) parts.push({ text: text.slice(pos, start) });
    parts.push({ text: m[1], reading: m[2] });
    pos = start + m[0].length;
  }
  if (pos < text.length) parts.push({ text: text.slice(pos) });
  return parts;
}

/** The text as normally written, markup removed: {学生|がくせい} -> 学生. */
export function plainJa(text: string): string {
  return text.replace(RUBY, "$1");
}

/** The text with every marked kanji replaced by its reading: {学生|がくせい} -> がくせい. */
export function kanaJa(text: string): string {
  return text.replace(RUBY, "$2");
}

/** Plain text plus, for each character of it, the ruby group it belongs to
 * (an index into `groups`) or -1. */
export function rubyLayout(text: string): {
  plain: string;
  groupAt: number[];
  groups: { start: number; end: number; reading: string }[];
} {
  let plain = "";
  const groupAt: number[] = [];
  const groups: { start: number; end: number; reading: string }[] = [];
  for (const part of parseRuby(text)) {
    if (part.reading) {
      groups.push({ start: plain.length, end: plain.length + part.text.length, reading: part.reading });
      for (let i = 0; i < part.text.length; i++) groupAt.push(groups.length - 1);
    } else {
      for (let i = 0; i < part.text.length; i++) groupAt.push(-1);
    }
    plain += part.text;
  }
  return { plain, groupAt, groups };
}

// ---- Scripts ------------------------------------------------------------

export const JAPANESE_CHAR = /[぀-ヿ㐀-䶿一-鿿ｦ-ﾟ々〆ヶ]/;
export const KANJI = /[㐀-䶿一-鿿々〆ヶ]/;

/** True if the text contains any Japanese script. */
export function isJapanese(text: string): boolean {
  return JAPANESE_CHAR.test(text);
}

/** Katakana -> hiragana (ー is kept; it's resolved when comparing). */
export function toHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

// ---- Romaji -> hiragana -------------------------------------------------
// Hepburn plus the common wapuro spellings (si, ti, tu, hu, zi, ...), so a
// learner without a Japanese keyboard can still type an answer.

const ROMAJI: Record<string, string> = {
  a: "あ", i: "い", u: "う", e: "え", o: "お",
  ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
  ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
  sa: "さ", si: "し", shi: "し", su: "す", se: "せ", so: "そ",
  za: "ざ", zi: "じ", ji: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
  ta: "た", ti: "ち", chi: "ち", tu: "つ", tsu: "つ", te: "て", to: "と",
  da: "だ", di: "ぢ", du: "づ", dzu: "づ", de: "で", do: "ど",
  na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
  ha: "は", hi: "ひ", hu: "ふ", fu: "ふ", he: "へ", ho: "ほ",
  ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
  pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
  ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
  ya: "や", yu: "ゆ", yo: "よ",
  ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
  la: "ら", li: "り", lu: "る", le: "れ", lo: "ろ",
  wa: "わ", wi: "うぃ", we: "うぇ", wo: "を",
  kya: "きゃ", kyu: "きゅ", kyo: "きょ", gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
  sha: "しゃ", shu: "しゅ", sho: "しょ", she: "しぇ", sya: "しゃ", syu: "しゅ", syo: "しょ",
  ja: "じゃ", ju: "じゅ", jo: "じょ", je: "じぇ", zya: "じゃ", zyu: "じゅ", zyo: "じょ", jya: "じゃ", jyu: "じゅ", jyo: "じょ",
  cha: "ちゃ", chu: "ちゅ", cho: "ちょ", che: "ちぇ", tya: "ちゃ", tyu: "ちゅ", tyo: "ちょ", cya: "ちゃ", cyu: "ちゅ", cyo: "ちょ",
  nya: "にゃ", nyu: "にゅ", nyo: "にょ", hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
  bya: "びゃ", byu: "びゅ", byo: "びょ", pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ",
  mya: "みゃ", myu: "みゅ", myo: "みょ", rya: "りゃ", ryu: "りゅ", ryo: "りょ",
  fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ", thi: "てぃ", dhi: "でぃ", tsa: "つぁ", va: "ゔぁ", vi: "ゔぃ", vu: "ゔ", ve: "ゔぇ", vo: "ゔぉ",
  xa: "ぁ", xi: "ぃ", xu: "ぅ", xe: "ぇ", xo: "ぉ", xya: "ゃ", xyu: "ゅ", xyo: "ょ", xtu: "っ", xtsu: "っ",
  "-": "ー",
};
const MAX_ROMAJI = 4;

/** Converts the romaji in `s` to hiragana; anything else is left as is. */
export function romajiToHiragana(input: string): string {
  const s = input.toLowerCase().replace(/[āâ]/g, "aa").replace(/[īî]/g, "ii").replace(/[ūû]/g, "uu").replace(/[ēê]/g, "ee").replace(/[ōô]/g, "ou");
  let out = "";
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    // Doubled consonant -> small tsu (kk, tt, ss, tch ...), but "nn" is ん.
    if (i + 1 < s.length && c === s[i + 1] && /[bcdfghjkmpqrstvwxyz]/.test(c)) {
      out += "っ";
      i += 1;
      continue;
    }
    if (c === "t" && s[i + 1] === "c" && s[i + 2] === "h") {
      out += "っ";
      i += 1;
      continue;
    }
    if (c === "n") {
      const next = s[i + 1];
      if (next === "n") {
        // "konnichiwa": the first n is ん and the second starts に.
        out += "ん";
        i += /[aiueoy]/.test(s[i + 2] ?? "") ? 1 : 2;
        continue;
      }
      if (next === "'" ) {
        out += "ん";
        i += 2;
        continue;
      }
      if (next === undefined || !/[aiueoy]/.test(next)) {
        out += "ん";
        i += 1;
        continue;
      }
    }
    let matched = false;
    for (let len = MAX_ROMAJI; len >= 1; len--) {
      const chunk = s.slice(i, i + len);
      const kana = ROMAJI[chunk];
      if (kana && /[a-z-]/.test(chunk[0])) {
        out += kana;
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += input[i] ?? c;
      i += 1;
    }
  }
  return out;
}

// ---- Answer matching ----------------------------------------------------

// Punctuation, spaces and brackets that never decide whether a Japanese
// answer is right.
const JA_IGNORED = /[\s。、．，,.!！?？「」『』（）()〜~・…:：;；"“”'’]/g;

/** A typed or stored Japanese answer reduced to what's compared: no
 * markup, punctuation or spaces; romaji converted to hiragana; katakana
 * folded to hiragana; long-vowel marks and full-width letters/digits
 * normalized. */
export function normalizeJa(text: string): string {
  let s = plainJa(text).normalize("NFKC");
  if (/[A-Za-z]/.test(s)) s = romajiToHiragana(s);
  s = toHiragana(s).replace(JA_IGNORED, "");
  return s.toLowerCase();
}

// Romaji can't tell the particles は, を and へ from わ, お and え (they're
// typed as said), so a romaji answer is compared with those folded.
const foldParticles = (s: string) => s.replace(/は/g, "わ").replace(/を/g, "お").replace(/へ/g, "え");

/** Every way an answer can be written: each marked kanji word either as
 * its kanji or its reading. Capped so a long sentence doesn't explode. */
export function jaAnswerForms(answer: string, cap = 256): string[] {
  const parts = parseRuby(answer);
  let forms = [""];
  for (const part of parts) {
    const options = part.reading ? [part.text, part.reading] : [part.text];
    const next: string[] = [];
    for (const f of forms) for (const o of options) if (next.length < cap) next.push(f + o);
    forms = next;
  }
  // Always keep the all-kana form, whatever the cap cut.
  forms.push(kanaJa(answer));
  return [...new Set(forms.map(normalizeJa))];
}

const KANJI_DIGITS: Record<string, number> = { 〇: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
const KANJI_UNITS: Record<string, number> = { 十: 10, 百: 100, 千: 1000 };

/** A run of kanji numerals as a number: 三百六十 -> 360, 二千二十六 -> 2026,
 * 一万五千 -> 15000. */
function kanjiNumber(run: string): number {
  let total = 0;
  let section = 0;
  let digit = 0;
  for (const c of run) {
    if (c in KANJI_DIGITS) digit = digit * 10 + KANJI_DIGITS[c];
    else if (c in KANJI_UNITS) {
      section += (digit || 1) * KANJI_UNITS[c];
      digit = 0;
    } else if (c === "万") {
      total += (section + digit || 1) * 10000;
      section = 0;
      digit = 0;
    }
  }
  return total + section + digit;
}

/** Numbers written in kanji turned into digits, so 3人 matches 三人 and
 * 360円 matches 三百六十円: Japanese written across the page uses digits as
 * often as kanji. Both sides get the same folding, so words that merely
 * contain a numeral kanji (一緒) still compare as before. */
const foldNumbers = (s: string) => s.replace(/[〇一二三四五六七八九十百千万]+/g, (run) => String(kanjiNumber(run)));

/** True if the typed text matches the answer written in kanji, kana, a
 * mix, or romaji. */
export function matchesJaAnswer(typed: string, answer: string): boolean {
  let t = normalizeJa(typed);
  if (!t) return false;
  let forms = jaAnswerForms(answer);
  if (forms.includes(t)) return true;
  if (/\d/.test(t) && forms.some((f) => foldNumbers(f) === foldNumbers(t))) return true;
  if (/[A-Za-z]/.test(typed)) {
    t = foldParticles(t);
    forms = forms.map(foldParticles);
  }
  // A romaji answer can't say whether ー or a doubled vowel was meant
  // (コーヒー / こうひい), nor おう vs おお: fold long vowels on both sides.
  const fold = (s: string) =>
    s
      .replace(/(.)ー/g, (_, c: string) => c + vowelOf(c))
      .replace(/おう/g, "おお")
      .replace(/(こ|そ|と|の|ほ|も|よ|ろ|ご|ぞ|ど|ぼ|ぽ|ょ)う/g, "$1お");
  const tf = fold(t);
  return forms.some((f) => f === t || fold(f) === tf);
}

const VOWEL_ROWS: [string, string][] = [
  ["あかがさざただなはばぱまやらわゃぁ", "あ"],
  ["いきぎしじちぢにひびぴみりぃ", "い"],
  ["うくぐすずつづぬふぶぷむゆるゅぅゔ", "う"],
  ["えけげせぜてでねへべぺめれぇ", "え"],
  ["おこごそぞとどのほぼぽもよろをょぉ", "お"],
];

function vowelOf(kana: string): string {
  for (const [row, v] of VOWEL_ROWS) if (row.includes(kana)) return v;
  return "ー";
}

// ---- Word segmentation --------------------------------------------------

type Segment = { start: number; end: number };

let segmenter: Intl.Segmenter | null | undefined;

/** Splits a run of Japanese into words for tap-to-hear, never cutting a
 * ruby group (`groupAt`, from rubyLayout) in two. Falls back to the whole
 * run where Intl.Segmenter isn't available. */
export function segmentJa(run: string, offset: number, groupAt: number[] = []): Segment[] {
  if (segmenter === undefined) {
    try {
      segmenter = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter("ja", { granularity: "word" }) : null;
    } catch {
      segmenter = null;
    }
  }
  if (!segmenter) return [{ start: offset, end: offset + run.length }];
  const cuts = new Set<number>();
  for (const seg of segmenter.segment(run)) {
    const at = offset + seg.index;
    if (seg.index > 0) cuts.add(at);
  }
  // A cut inside a ruby group moves out of it.
  const inGroup = (pos: number) => pos > 0 && groupAt[pos] !== undefined && groupAt[pos] !== -1 && groupAt[pos] === groupAt[pos - 1];
  const segments: Segment[] = [];
  let start = offset;
  for (let pos = offset + 1; pos <= offset + run.length; pos++) {
    if (pos === offset + run.length || (cuts.has(pos) && !inGroup(pos))) {
      segments.push({ start, end: pos });
      start = pos;
    }
  }
  return mergeParticleTails(run, offset, segments);
}

// The segmenter cuts verbs and adjectives into stem and endings (勉強 /
// し / てい / ます, 見 / ま / せん / で / した); tapping "てい" alone is
// useless. So after a word ending in kanji, the hiragana segments that
// follow join it until a particle (は, を, に ...) or anything that isn't
// hiragana. Lone small kana and ー always join the word before them.
const PARTICLE = /^(は|が|を|に|へ|と|も|の|や|ね|よ|わ|から|まで|より|など|だけ|しか|ほど|くらい|ぐらい|って|けど|けれど|けれども|のに|ので|ばかり|こそ|さえ|でも)$/;
// Common words written in hiragana that stand on their own after a kanji
// word (毎日 / いつも), not endings.
const STANDALONE = /^(いつも|とても|もう|まだ|よく|ちょっと|すこし|たくさん|ぜんぶ|みんな|いっしょに|そして|でも|しかし|それから|だから|ここ|そこ|あそこ|これ|それ|あれ|この|その|あの|どこ|なに|なん|いつ|だれ|どう|どうして|なぜ|すぐ|また|ずっと|やはり|やっぱり|たぶん|きっと|ぜひ|あまり|ぜんぜん|ほとんど|もっと|いちばん|ゆっくり|はっきり|しっかり)/;
const SMALL = /^[ーっゃゅょぁぃぅぇぉッャュョァィゥェォ]+$/;
const HIRAGANA_ONLY = /^[\u3040-\u309F]+$/;

function mergeParticleTails(run: string, offset: number, segments: Segment[]): Segment[] {
  const out: Segment[] = [];
  let inflecting = false;
  segments.forEach((seg, i) => {
    const text = run.slice(seg.start - offset, seg.end - offset);
    const nextText = segments[i + 1] ? run.slice(segments[i + 1].start - offset, segments[i + 1].end - offset) : "";
    // か ends a question (行きますか) unless more hiragana follows (高かった).
    const particle = PARTICLE.test(text) || (text === "か" && !HIRAGANA_ONLY.test(nextText));
    const joins =
      out.length > 0 &&
      (SMALL.test(text) || (inflecting && HIRAGANA_ONLY.test(text) && !particle && !STANDALONE.test(text)));
    if (joins) out[out.length - 1] = { start: out[out.length - 1].start, end: seg.end };
    else {
      out.push(seg);
      inflecting = KANJI.test(text);
    }
  });
  return out;
}
