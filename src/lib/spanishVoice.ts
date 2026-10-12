// Which words of a Spanish-course text are Spanish, so tap-to-hear voices
// only those: an A1 explanation ("Spain uses vosotros for an informal
// 'you all'") is English with Spanish words in it, a C1 one is Spanish
// throughout, and a heading ("Subject pronouns") can be either. Pure text
// logic, mirrored byte-for-byte in the mobile app's src/lib/spanishVoice.ts.
//
// Each word is Spanish (Spanish-only letters, or a Spanish word English
// doesn't use), English (src/lib/voiceWords.ts ENGLISH_ONLY), or either
// ("me", "no", "a", names, numbers). An either-word takes the language of
// the nearest decided word around it -- inside quotes, of the quote's
// words first, and Spanish when the quote has none.
import { SPANISH_WORDS } from "./spanishWords";
import { ENGLISH_ONLY, SHARED } from "./voiceWords";

type Kind = "es" | "en" | "either";

let lists: { spanish: Set<string>; english: Set<string>; shared: Set<string> } | null = null;

function kindOf(word: string): Kind {
  lists ??= {
    spanish: new Set(SPANISH_WORDS.split(" ")),
    english: new Set(ENGLISH_ONLY.split(" ")),
    shared: new Set(SHARED.split(" ")),
  };
  const w = word.toLowerCase().replace(/^['’-]+|['’-]+$/g, "");
  if (/[áéíóúüñ]/.test(w)) return "es";
  if (lists.english.has(w)) return "en";
  if (lists.shared.has(w)) return "either";
  return lists.spanish.has(w) ? "es" : "either";
}

const WORD = /[A-Za-z0-9À-ÖØ-öø-ɏ'’-]+/g;
const QUOTED = /["“«]([^"”»]+)["”»]/g;

type Word = { start: number; end: number; spanish: boolean };

// A word across a clause break (". ", ": ", ", ", a bracket) counts as
// further away than one in the same clause.
const BREAK = /[.,:;!?¡¿()[\]—–]/;

function resolve(words: { start: number; end: number; kind: Kind }[], text: string, fallback: boolean): boolean[] {
  const distance = (a: number, b: number) => {
    const [x, y] = a < b ? [a, b] : [b, a];
    return y - x + (BREAK.test(text.slice(words[x].end, words[y].start)) ? 100 : 0);
  };
  return words.map((w, i) => {
    if (w.kind !== "either") return w.kind === "es";
    let left = i - 1;
    while (left >= 0 && words[left].kind === "either") left--;
    let right = i + 1;
    while (right < words.length && words[right].kind === "either") right++;
    const l = left >= 0 ? words[left].kind : null;
    const r = right < words.length ? words[right].kind : null;
    if (!l && !r) return fallback;
    if (!l || !r || l === r) return (l ?? r) === "es";
    // Spanish on one side, English on the other: the nearer one, and
    // English on a tie ("Spain uses vosotros").
    const dl = distance(left, i);
    const dr = distance(i, right);
    return dl < dr ? l === "es" : dl > dr ? r === "es" : false;
  });
}

function spanishWords(text: string): Word[] {
  const words: { start: number; end: number; kind: Kind }[] = [];
  for (const m of text.matchAll(WORD)) {
    const start = m.index ?? 0;
    words.push({ start, end: start + m[0].length, kind: kindOf(m[0]) });
  }
  const spanish = resolve(words, text, true);
  // A quote is decided by its own words first ("me" in "dime" quoted).
  for (const q of text.matchAll(QUOTED)) {
    const start = (q.index ?? 0) + 1;
    const end = start + q[1].length;
    const inside = words.flatMap((w, i) => (w.start >= start && w.end <= end ? [i] : []));
    const resolved = resolve(
      inside.map((i) => words[i]),
      text,
      true,
    );
    inside.forEach((wi, k) => (spanish[wi] = resolved[k]));
  }
  return words.map((w, i) => ({ start: w.start, end: w.end, spanish: spanish[i] }));
}

/** For a Spanish-course text: whether the word at [start, end) is
 * Spanish. */
export function spanishVoicer(text: string): (start: number, end: number) => boolean {
  const words = spanishWords(text);
  return (start, end) => words.some((w) => w.spanish && start < w.end && end > w.start);
}

/** Whether a short Spanish-course string (an answer option, a matching
 * card) is Spanish: more of its words are Spanish than English. */
export function isSpanishText(text: string): boolean {
  const words = spanishWords(text);
  const spanish = words.filter((w) => w.spanish).length;
  return spanish > 0 && spanish >= words.length - spanish;
}
