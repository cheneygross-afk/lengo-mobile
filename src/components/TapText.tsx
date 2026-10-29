import { useMemo } from "react";
import { Text, StyleSheet, type StyleProp, type TextStyle } from "react-native";
import { speak, ENGLISH_LANG, type SpeechLang } from "@/lib/speech";
import { targetSpans } from "@/lib/targetSpans";
import { isSpanishText, spanishVoicer } from "@/lib/spanishVoice";

// Makes every target-language word in a block of text tap-to-hear -- the
// rule for lesson screens is that any word in the language being learned
// can be heard. English (prompts, glosses, explanations) is plain text
// with no voice.
//
// `mode` says what language the text is in:
// - "target": all target language (a Spanish sentence, an answer).
// - "english": all English (an English prompt to translate). Not voiced.
// - "mixed": English framing around target-language words (a question,
//   an explanation). Only the target-language words are voiced: spans
//   found by targetSpans(), plus any word with Spanish-only letters or a
//   Spanish infinitive ending; the English around them is plain text.
//
// With `boldBrackets`, text inside [square brackets] is shown bold and the
// brackets themselves are hidden (see FillBlankExercise.en).

type Mode = "target" | "english" | "mixed";

// Explicit ranges rather than \p{L}, which Hermes doesn't reliably support.
// Hangul (syllables and jamo) is a word character too, for the Korean course.
const WORD = /[A-Za-z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u3040-\u30FF\u3400-\u9FFF\uFF66-\uFF9F\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7FF'’-]+/g;
const SPANISH_LETTERS = /[áéíóúüñ¿¡]/i;
const SPANISH_INFINITIVE = /^[a-záéíóúñ]{2,}(ar|ir|arse|irse|erse)$/i;
const ENGLISH_AR_IR = new Set([
  "car", "far", "bar", "star", "war", "similar", "regular", "particular", "popular", "familiar",
  "singular", "dollar", "clear", "year", "near", "hear", "appear", "their", "air", "chair",
  "pair", "fair", "hair", "stair", "sir", "stir", "affair", "repair", "nuclear", "linear",
  "calendar", "grammar", "bear", "wear", "fear", "tear", "dear", "gear", "rear", "our", "your",
  "four", "hour", "pour", "tour", "flour", "sugar", "collar", "cellar", "cedar", "polar", "solar",
  "lunar", "vinegar", "radar", "scholar", "beggar", "liar", "pillar", "altar", "guitar", "seminar",
  "whir", "fir",
]);

function looksSpanishWord(word: string): boolean {
  if (SPANISH_LETTERS.test(word)) return true;
  const w = word.toLowerCase();
  return SPANISH_INFINITIVE.test(w) && !ENGLISH_AR_IR.has(w);
}

// French shares the English alphabet too; a word with a French-only
// letter is French. Same rule as the website's TapText.
const FRENCH_LETTERS = /[àâæçéèêëîïôœùûüÿ]/i;

// Likewise the letters only German uses. Same rule as the website's TapText.
const GERMAN_LETTERS = /[äöüß]/i;

// And the letters that mark a Brazilian Portuguese word in English text:
// the tildes, circumflexes, grave a, ç and the acute vowels (the website's
// TapText uses only the first ones; "está", "é", "avó" and "maçã" are
// Portuguese too, and the course's English never writes them).
const PORTUGUESE_LETTERS = /[ãõâêôàçáéíóú]/i;

// And the accented vowels Italian writes (è, perché, città), for the
// Italian beta. Shared with French and Portuguese, but each course only
// ever checks its own. Same rule as the website's TapText.
const ITALIAN_LETTERS = /[àèéìòù]/i;

// Hangul (syllables and jamo): in the Korean course any of it is Korean.
const HANGUL = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7FF]/;

// Old Hangul (conjoining jamo, archaic letters such as ㆍ): the voice
// can't say it, so such a word is shown but never voiced. Same rule as
// the website's TapText.
export const OLD_HANGUL = /[\u1100-\u11FF\uA960-\uA97F\uD7B0-\uD7FF\u3165-\u318E]/;

/** Whether a word in mixed text is (probably) in the target language. */
function looksTargetWord(word: string, lang: SpeechLang): boolean {
  if (lang === "fr-FR") return FRENCH_LETTERS.test(word);
  if (lang === "de-DE") return GERMAN_LETTERS.test(word);
  if (lang === "pt-BR") return PORTUGUESE_LETTERS.test(word);
  if (lang === "ko-KR") return HANGUL.test(word);
  if (lang === "it-IT") return ITALIAN_LETTERS.test(word);
  return looksSpanishWord(word);
}

// The courses whose words share the English alphabet, so mixed text is
// decided word by word.
// The Spanish course decides word by word which words are Spanish
// (lib/spanishVoice.ts), the same rule as the website.
const isSpanishLang = (lang: SpeechLang) => lang === "es-ES" || lang === "es-US";

const LATIN_SCRIPT_TARGETS: SpeechLang[] = ["es-ES", "fr-FR", "de-DE", "pt-BR", "it-IT"];

type Piece = { text: string; lang: SpeechLang | null; bold: boolean };

function pieces(text: string, lang: SpeechLang, mode: Mode, boldBrackets: boolean): Piece[] {
  // Strip the bold markers first, remembering which characters were inside.
  let plain = text;
  const boldAt: boolean[] = [];
  if (boldBrackets) {
    plain = "";
    let inBold = false;
    for (const ch of text) {
      if (ch === "[") inBold = true;
      else if (ch === "]") inBold = false;
      else {
        plain += ch;
        boldAt.push(inBold);
      }
    }
  }
  const spanishAt = mode === "mixed" && isSpanishLang(lang) ? spanishVoicer(plain) : null;
  const spans = mode === "mixed" && !spanishAt ? targetSpans(plain, lang) : [];
  const out: Piece[] = [];
  let pos = 0;
  const push = (t: string, l: SpeechLang | null, start: number) => {
    // Split plain runs further where boldness changes.
    let runStart = 0;
    for (let i = 1; i <= t.length; i++) {
      if (i === t.length || !!boldAt[start + i] !== !!boldAt[start + runStart]) {
        out.push({ text: t.slice(runStart, i), lang: l, bold: !!boldAt[start + runStart] });
        runStart = i;
      }
    }
  };
  for (const m of plain.matchAll(WORD)) {
    const start = m.index ?? 0;
    if (start > pos) push(plain.slice(pos, start), null, pos);
    const word = m[0];
    let wordLang: SpeechLang;
    if (mode === "target") wordLang = lang;
    else if (mode === "english") wordLang = ENGLISH_LANG;
    else if (spanishAt) wordLang = spanishAt(start, start + word.length) ? lang : ENGLISH_LANG;
    else {
      const inSpan = spans.some((sp) => start >= sp.start && start < sp.end);
      wordLang =
        inSpan || (LATIN_SCRIPT_TARGETS.includes(lang) && looksTargetWord(word, lang)) ? lang : ENGLISH_LANG;
    }
    // Only the language being learned is voiced, and never Old Hangul.
    const voiced = mode !== "english" && wordLang === lang && !(lang === "ko-KR" && OLD_HANGUL.test(word));
    push(word, voiced ? wordLang : null, start);
    pos = start + word.length;
  }
  if (pos < plain.length) push(plain.slice(pos), null, pos);
  return out;
}

/** For mixed text (English framing around target-language words): a
 * test for whether the word at [start, end) is in the target language,
 * by the same rule TapText's "mixed" mode uses. */
export function targetWordTest(text: string, lang: SpeechLang): (start: number, end: number) => boolean {
  if (isSpanishLang(lang)) return spanishVoicer(text);
  const spans = targetSpans(text, lang);
  return (start, end) =>
    spans.some((sp) => start < sp.end && end > sp.start) ||
    (LATIN_SCRIPT_TARGETS.includes(lang) && looksTargetWord(text.slice(start, end).replace(/[^A-Za-z\u00C0-\u024F'’-]/g, ""), lang));
}

/** Which voice a whole short string (an answer option, a matching card)
 * should be read in; see isTargetText for whether to voice it at all. */
export function voiceFor(text: string, lang: SpeechLang): SpeechLang {
  if (isSpanishLang(lang)) return isSpanishText(text) ? lang : ENGLISH_LANG;
  if (targetSpans(text, lang).length > 0) return lang;
  return text.split(/\s+/).some((w) => looksTargetWord(w, lang)) ? lang : ENGLISH_LANG;
}

/** Whether a short string (an answer option, a matching card) is in the
 * language being learned, so tapping it should play it. */
export function isTargetText(text: string, lang: SpeechLang): boolean {
  // Old Hangul is shown but never voiced (see OLD_HANGUL).
  if (lang === "ko-KR" && OLD_HANGUL.test(text)) return false;
  return voiceFor(text, lang) === lang;
}

export default function TapText({
  text,
  lang,
  mode = "mixed",
  boldBrackets = false,
  style,
}: {
  text: string;
  lang: SpeechLang;
  mode?: Mode;
  boldBrackets?: boolean;
  style?: StyleProp<TextStyle>;
}) {
  const parts = useMemo(() => pieces(text, lang, mode, boldBrackets), [text, lang, mode, boldBrackets]);
  return (
    <Text style={style}>
      {parts.map((p, i) =>
        p.lang ? (
          <Text key={i} style={p.bold ? styles.bold : undefined} onPress={() => speak(p.text, p.lang as SpeechLang)}>
            {p.text}
          </Text>
        ) : (
          <Text key={i} style={p.bold ? styles.bold : undefined}>
            {p.text}
          </Text>
        )
      )}
    </Text>
  );
}

const styles = StyleSheet.create({
  bold: { fontWeight: "700", color: "#2A1513" },
});
