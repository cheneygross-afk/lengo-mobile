import { supabase } from "@/lib/supabase/client";

// Mobile port of the web app's TranslateSearch direction-detection and
// fetch logic (src/components/TranslateSearch.tsx). Now covers both
// tracks the app offers -- Spanish and the Japanese beta -- same as the
// website: which pair is active follows whichever language is selected
// on Home, not a fixed Spanish/English pair.
export type Direction = "en-es" | "es-en" | "en-ja" | "ja-en";

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

// `japaneseContext` is which language is selected on Home -- absent any
// script/vocabulary signal (plain ASCII, nothing recognized as Spanish),
// this decides whether typing falls back to "en-es" or "en-ja".
export function detectDirection(text: string, japaneseContext: boolean): Direction {
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
