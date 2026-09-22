import { supabase } from "@/lib/supabase/client";

// Mobile port of the web app's TranslateSearch direction-detection and
// fetch logic (src/components/TranslateSearch.tsx), scoped to just the
// Spanish directions -- the mobile app doesn't have the Japanese track
// wired up yet, unlike the website.
export type Direction = "en-es" | "es-en";

export type TranslationSense = {
  translation: string;
  partOfSpeech?: string;
  gender?: "m" | "f" | null;
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

export function detectDirection(text: string): Direction {
  if (/[áéíóúñü¿¡]/i.test(text)) return "es-en";
  const firstWord = text.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  if (COMMON_SPANISH_WORDS.has(firstWord)) return "es-en";
  return "en-es";
}

export function swapDirection(direction: Direction): Direction {
  return direction === "en-es" ? "es-en" : "en-es";
}

export function directionPillLabel(direction: Direction): string {
  return direction === "en-es" ? "EN→ES" : "ES→EN";
}

export function directionHeading(direction: Direction): string {
  return direction === "en-es" ? "English → Spanish" : "Spanish → English";
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
