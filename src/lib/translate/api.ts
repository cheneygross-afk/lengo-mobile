import { supabase } from "@/lib/supabase/client";

// Mobile port of the web app's TranslateSearch direction-detection and
// fetch logic (src/components/TranslateSearch.tsx). Now covers both
// tracks the app offers -- Spanish, French, German, the Japanese beta and the
// Brazilian Portuguese course and the Italian course (and ko-en for the Korean
// beta's stories, where a tapped word is looked up) -- same as the
// website: which pair is active follows whichever language is selected
// on Home, not a fixed Spanish/English pair.
export type Direction = "en-es" | "es-en" | "en-ja" | "ja-en" | "en-fr" | "fr-en" | "en-de" | "de-en" | "en-pt" | "pt-en" | "en-ko" | "ko-en" | "en-it" | "it-en";

export type TranslationSense = {
  translation: string;
  partOfSpeech?: string;
  gender?: "m" | "f" | null;
  reading?: string;
  note?: string;
  example?: { source: string; target: string } | null;
  source: "lesson" | "claude" | "mymemory";
};

export type TranslationResult = {
  input: string;
  direction: Direction;
  senses: TranslationSense[];
};

const TRANSLATE_API_URL = "https://deependspanish.com/api/translate";

const COMMON_SPANISH_WORDS = new Set([
  "el", "la", "los", "las", "un", "una", "unos", "unas", "de", "del", "en",
  "y", "a", "que", "es", "son", "por", "para", "con", "sin", "no", "si",
  "sí", "muy", "más", "pero", "como", "cuando", "donde", "quien", "qué",
  "cómo", "cuándo", "dónde", "quién", "yo", "tú", "él", "ella", "nosotros",
  "ellos", "ellas", "usted", "ustedes", "mi", "tu", "su", "nuestro", "este",
  "esta", "eso", "esa", "ese", "hola", "gracias", "buenos", "buenas",
  "porque", "también", "hay", "soy", "eres", "está", "estoy", "estás",
  "tengo", "tiene", "quiero", "puedo", "vamos", "hacer", "ser", "estar",
]);

// Hiragana, katakana, and kanji ranges -- any of these in the query is an
// unambiguous signal the input is Japanese.
const JAPANESE_SCRIPT = /[぀-ヿ一-鿿]/;

// Words that start a French phrase far more often than an English one.
const COMMON_FRENCH_WORDS = new Set([
  "le", "la", "les", "un", "une", "des", "du", "de", "et", "est", "je", "tu", "il", "elle", "nous",
  "vous", "ils", "elles", "ce", "cette", "ces", "mon", "ma", "mes", "ton", "ta", "son", "sa", "pas",
  "ne", "que", "qui", "quoi", "pour", "avec", "sans", "dans", "sur", "très", "bonjour", "merci",
  "oui", "non", "c'est", "j'ai", "suis", "avoir", "être", "faire", "aller", "au", "aux", "mais",
  "quel", "quelle", "comment", "pourquoi", "où", "quand", "chez", "bien", "salut", "voilà",
]);

// French-only letters (Spanish shares é, so it isn't one of them).
const FRENCH_LETTERS = /[àâæçèêëîïôœùûÿ]/i;

/** Which way a French-course lookup goes: French in (by its letters or
 * first word), else English to French. */
function detectFrenchDirection(text: string): Direction {
  if (FRENCH_LETTERS.test(text)) return "fr-en";
  const firstWord = text.trim().split(/\s+/)[0]?.toLowerCase().replace(/’/g, "'") ?? "";
  if (COMMON_FRENCH_WORDS.has(firstWord) || /^(l|d|j|qu|c|n|s|m|t)'/.test(firstWord)) return "fr-en";
  return "en-fr";
}

// Words that start a German phrase far more often than an English one
// (the website's TranslateSearch list).
const COMMON_GERMAN_WORDS = new Set([
  "der", "die", "das", "den", "dem", "ein", "eine", "einen", "und", "ist", "ich", "du", "er", "sie", "es", "wir",
  "ihr", "nicht", "kein", "keine", "mit", "von", "zu", "auf", "aus", "bei", "nach", "für", "ja", "nein", "danke",
  "bitte", "hallo", "guten", "sehr", "auch", "wie", "wo", "wer", "warum", "sein", "haben", "werden", "bin", "bist",
]);

/** Which way a German-course lookup goes: German in (by its letters or
 * first word), else English to German. */
function detectGermanDirection(text: string): Direction {
  if (/[äöüß]/i.test(text)) return "de-en";
  const firstWord = text.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  return COMMON_GERMAN_WORDS.has(firstWord) ? "de-en" : "en-de";
}

// Words that start a Brazilian Portuguese phrase far more often than an
// English one (the website's TranslateSearch list).
const COMMON_PORTUGUESE_WORDS = new Set([
  "o", "a", "os", "as", "um", "uma", "e", "é", "eu", "você", "ele", "ela", "nós", "eles", "elas", "não", "sim",
  "do", "da", "no", "na", "com", "para", "pra", "que", "muito", "obrigado", "obrigada", "oi", "olá", "tchau",
  "estou", "está", "tenho", "tem", "vou", "vai", "meu", "minha", "isso", "esse", "essa", "como", "onde",
]);

/** Which way a Portuguese-course lookup goes: Portuguese in (by its letters
 * or first word), else English to Portuguese. */
function detectPortugueseDirection(text: string): Direction {
  if (/[ãõçâêôàáéíóú]/i.test(text)) return "pt-en";
  const firstWord = text.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  return COMMON_PORTUGUESE_WORDS.has(firstWord) ? "pt-en" : "en-pt";
}

// Words that start an Italian phrase far more often than an English one
// (the website's TranslateSearch list), for the Italian course.
const COMMON_ITALIAN_WORDS = new Set([
  "il", "lo", "la", "i", "gli", "le", "un", "uno", "una", "e", "è", "io", "tu", "lui", "lei", "noi", "voi", "loro",
  "non", "sì", "di", "del", "della", "che", "con", "per", "molto", "grazie", "ciao", "buongiorno", "sono", "sei",
  "ho", "hai", "ha", "vado", "va", "mio", "mia", "questo", "questa", "come", "dove", "perché", "anche", "ma",
]);

/** Which way an Italian-course lookup goes: Italian in (by an accented
 * vowel, its first word or an elided article), else English to Italian. */
function detectItalianDirection(text: string): Direction {
  if (/[àèéìòù]/i.test(text)) return "it-en";
  const first = text.trim().split(/\s+/)[0]?.toLowerCase().replace(/’/g, "'") ?? "";
  return COMMON_ITALIAN_WORDS.has(first) || /^(l|un|dell|all|nell|c|d)'/.test(first) ? "it-en" : "en-it";
}

// `context` is which language is selected on Home -- absent any
// script/vocabulary signal (plain ASCII, nothing recognized as Spanish),
// this decides whether typing falls back to "en-es" or "en-ja". The
// French and German courses and the Portuguese course have their own pairs
// (en-fr / fr-en, en-de / de-en, en-pt / pt-en), and so does the Italian
// beta (en-it / it-en).
export function detectDirection(text: string, context: "es" | "ja" | "fr" | "de" | "pt" | "it"): Direction {
  if (context === "fr") return detectFrenchDirection(text);
  if (context === "it") return detectItalianDirection(text);
  if (context === "pt") return detectPortugueseDirection(text);
  if (context === "de") return detectGermanDirection(text);
  const japaneseContext = context === "ja";
  if (JAPANESE_SCRIPT.test(text)) return "ja-en";
  if (/[áéíóúñü¿¡]/i.test(text)) return "es-en";
  const firstWord = text.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  if (COMMON_SPANISH_WORDS.has(firstWord)) return "es-en";
  return japaneseContext ? "en-ja" : "en-es";
}

export function swapDirection(direction: Direction): Direction {
  switch (direction) {
    case "en-es":
      return "es-en";
    case "es-en":
      return "en-es";
    case "en-ja":
      return "ja-en";
    case "ja-en":
      return "en-ja";
    case "en-fr":
      return "fr-en";
    case "fr-en":
      return "en-fr";
    case "en-de":
      return "de-en";
    case "de-en":
      return "en-de";
    case "en-pt":
      return "pt-en";
    case "pt-en":
      return "en-pt";
    case "en-ko":
      return "ko-en";
    case "ko-en":
      return "en-ko";
    case "en-it":
      return "it-en";
    case "it-en":
      return "en-it";
  }
}

export function directionPillLabel(direction: Direction): string {
  switch (direction) {
    case "en-es":
      return "EN→ES";
    case "es-en":
      return "ES→EN";
    case "en-ja":
      return "EN→JA";
    case "ja-en":
      return "JA→EN";
    case "en-fr":
      return "EN→FR";
    case "fr-en":
      return "FR→EN";
    case "en-de":
      return "EN→DE";
    case "de-en":
      return "DE→EN";
    case "en-pt":
      return "EN→PT";
    case "pt-en":
      return "PT→EN";
    case "en-ko":
      return "EN→KO";
    case "ko-en":
      return "KO→EN";
    case "en-it":
      return "EN→IT";
    case "it-en":
      return "IT→EN";
  }
}

export function directionHeading(direction: Direction): string {
  switch (direction) {
    case "en-es":
      return "English → Spanish";
    case "es-en":
      return "Spanish → English";
    case "en-ja":
      return "English → Japanese";
    case "ja-en":
      return "Japanese → English";
    case "en-fr":
      return "English → French";
    case "fr-en":
      return "French → English";
    case "en-de":
      return "English → German";
    case "de-en":
      return "German → English";
    case "en-pt":
      return "English → Portuguese";
    case "pt-en":
      return "Portuguese → English";
    case "en-ko":
      return "English → Korean";
    case "ko-en":
      return "Korean → English";
    case "en-it":
      return "English → Italian";
    case "it-en":
      return "Italian → English";
  }
}

export function sourceLabel(senses: TranslationSense[]): string {
  const hasLesson = senses.some((s) => s.source === "lesson");
  const hasClaude = senses.some((s) => s.source === "claude");
  if (hasLesson && hasClaude) return "From this app's lessons, plus Claude for more depth";
  if (hasLesson) return "From this app's own lesson vocabulary";
  if (hasClaude) return "Translated by Claude";
  return "Translated via MyMemory";
}

export type TranslateOutcome =
  | { ok: true; result: TranslationResult }
  | { ok: false; error: string };

// Authenticates with the mobile session's own access token -- the web
// app's /api/translate accepts this as a bearer token (see that route),
// alongside the cookie session the website itself uses.
export async function fetchTranslation(text: string, direction: Direction): Promise<TranslateOutcome> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) {
    return { ok: false, error: "Log in to use the translator." };
  }

  try {
    const res = await fetch(
      `${TRANSLATE_API_URL}?text=${encodeURIComponent(text)}&direction=${direction}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const json = await res.json();
    if (json.ok && Array.isArray(json.senses) && json.senses.length) {
      return { ok: true, result: { input: json.input, direction: json.direction, senses: json.senses } };
    }
    return { ok: false, error: json.error ?? "No translation found." };
  } catch {
    return { ok: false, error: "Translation is unavailable right now." };
  }
}
