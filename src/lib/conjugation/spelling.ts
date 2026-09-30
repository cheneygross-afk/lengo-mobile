// Synced from cheneygross-afk/lengo:src/lib/conjugation/spelling.ts by scripts/sync-content.mjs -- edit it there, not here.
// Spanish spelling helpers for the conjugation engine: syllable nuclei,
// where the stress falls, and where a written accent is needed.
//
// Shared by the website and the mobile app (synced by the app's
// scripts/sync-content.mjs). No \p{L}: Hermes lacks Unicode property
// escapes, so letters are listed explicitly.

const ACCENTED: Record<string, string> = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
const ACUTE: Record<string, string> = { a: "á", e: "é", i: "í", o: "ó", u: "ú" };

export function isVowel(ch: string | undefined): boolean {
  return !!ch && "aeiouáéíóúü".includes(ch);
}

function isStrong(ch: string): boolean {
  return "aeoáéó".includes(ch);
}

function isAccented(ch: string): boolean {
  return ch in ACCENTED;
}

/** "está" -> "esta"; ü and ñ are kept. */
export function stripAcute(s: string): string {
  let out = "";
  for (const ch of s) out += ACCENTED[ch] ?? ch;
  return out;
}

/** Accents, ü and ñ dropped, lowercase: the key used for accent-insensitive search. */
const FOLD: Record<string, string> = { á: "a", é: "e", í: "i", ó: "o", ú: "u", ü: "u", ñ: "n" };

export function foldForSearch(s: string): string {
  const lower = s.toLowerCase().trim();
  // Fast path for the common case; normalize() catches anything else.
  const quick = lower.replace(/[áéíóúüñ]/g, (c) => FOLD[c]);
  return /^[a-z ]*$/.test(quick) ? quick : quick.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// A nucleus is the vowel (or diphthong/triphthong) at the heart of a
// syllable, as [start, end) character positions. Two strong vowels
// (a, e, o) are in separate syllables, and so is an accented í/ú next to
// a strong vowel; two weak vowels (i, u) always count as one nucleus for
// spelling purposes (RAE 2010: "hui", "guion"). The u of que/qui/gue/gui
// is silent and never starts a nucleus of its own.
export function nuclei(word: string): [number, number][] {
  const out: [number, number][] = [];
  let i = 0;
  while (i < word.length) {
    const ch = word[i];
    const silentU =
      ch === "u" && (word[i - 1] === "q" || word[i - 1] === "g") && (word[i + 1] === "e" || word[i + 1] === "i" || word[i + 1] === "é" || word[i + 1] === "í");
    if (!isVowel(ch) || silentU) {
      i++;
      continue;
    }
    let j = i + 1;
    while (j < word.length && isVowel(word[j])) {
      const prev = word[j - 1];
      const cur = word[j];
      const hiatus =
        (isStrong(prev) && isStrong(cur)) ||
        ((cur === "í" || cur === "ú") && isStrong(prev)) ||
        ((prev === "í" || prev === "ú") && isStrong(cur));
      if (hiatus) break;
      j++;
    }
    out.push([i, j]);
    i = j;
  }
  return out;
}

/** The vowel that carries the stress within a nucleus. */
function stressVowelOf(word: string, [start, end]: [number, number]): number {
  for (let k = start; k < end; k++) if (isAccented(word[k])) return k;
  for (let k = start; k < end; k++) if (isStrong(word[k])) return k;
  // Two weak vowels: the second one carries the stress ("cuí", "huí").
  return end - 1;
}

/** Position of the stressed vowel of a word as written. */
export function stressedVowel(word: string): number {
  const ns = nuclei(word);
  if (ns.length === 0) return -1;
  for (const n of ns) for (let k = n[0]; k < n[1]; k++) if (isAccented(word[k])) return k;
  const last = word[word.length - 1];
  const penultRule = isVowel(last) || last === "n" || last === "s";
  const n = penultRule && ns.length > 1 ? ns[ns.length - 2] : ns[ns.length - 1];
  return stressVowelOf(word, n);
}

export function syllableCount(word: string): number {
  return nuclei(word).length;
}

/**
 * Writes `word` so its stress falls on the vowel at `pos`: every accent is
 * removed, then one is added at `pos` only if the default stress rules
 * wouldn't already put the stress there. Used when a prefix or an
 * enclitic pronoun changes a form's length ("ten" -> "mantén",
 * "levanta" + "te" -> "levántate", "levantá" + "te" -> "levantate").
 */
export function withStressAt(word: string, pos: number): string {
  const bare = stripAcute(word);
  if (stressedVowel(bare) === pos) return bare;
  const ch = bare[pos];
  return bare.slice(0, pos) + (ACUTE[ch] ?? ch) + bare.slice(pos + 1);
}

// Monosyllables keep a written accent only when it tells them apart from
// another word (dé "give" vs de "of", sé "I know"/"be" vs se).
const DIACRITIC_MONOSYLLABLES = new Set(["dé", "sé"]);

/** Drops the accent from forms that are monosyllables under the 2010
 * rules: "crió" -> "crio", "guié" -> "guie", "rió" -> "rio", "fié" -> "fie". */
export function fixMonosyllable(form: string): string {
  if (!/[áéíóú]/.test(form) || DIACRITIC_MONOSYLLABLES.has(form)) return form;
  if (form.includes(" ")) return form;
  if (syllableCount(form) === 1) return stripAcute(form);
  return form;
}

/** Adds an acute accent to the character at `pos`. */
export function acuteAt(word: string, pos: number): string {
  const ch = word[pos];
  return word.slice(0, pos) + (ACUTE[ch] ?? ch) + word.slice(pos + 1);
}

/** Position of the last vowel of the given set in `s`, or -1. */
export function lastIndexOfAny(s: string, chars: string): number {
  for (let k = s.length - 1; k >= 0; k--) if (chars.includes(s[k])) return k;
  return -1;
}
