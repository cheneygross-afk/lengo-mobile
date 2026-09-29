import { useMemo } from "react";
import { Text, StyleSheet, type StyleProp, type TextStyle } from "react-native";
import { speak, ENGLISH_LANG, type SpeechLang } from "@/lib/speech";
import { targetSpans } from "@/lib/targetSpans";

// Makes every word in a block of text tap-to-hear -- the rule for lesson
// screens is that any word the learner can see can be heard.
//
// `mode` says what language the text is in:
// - "target": all target language (a Spanish sentence, an answer).
// - "english": all English (an English prompt to translate).
// - "mixed": English framing around target-language words (a question,
//   an explanation). Each word is voiced in the language it's most likely
//   in: target-language spans found by targetSpans(), plus any word with
//   Spanish-only letters or a Spanish infinitive ending, go to the target
//   voice; everything else is read as English.
//
// With `boldBrackets`, text inside [square brackets] is shown bold and the
// brackets themselves are hidden (see FillBlankExercise.en).

type Mode = "target" | "english" | "mixed";

// Explicit ranges rather than \p{L}, which Hermes doesn't reliably support.
const WORD = /[A-Za-z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u3040-\u30FF\u3400-\u9FFF\uFF66-\uFF9F'’-]+/g;
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
  const spans = mode === "mixed" ? targetSpans(plain, lang) : [];
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
    else {
      const inSpan = spans.some((sp) => start >= sp.start && start < sp.end);
      wordLang = inSpan || (lang !== ENGLISH_LANG && looksSpanishWord(word) && lang === "es-ES") ? lang : ENGLISH_LANG;
    }
    push(word, wordLang, start);
    pos = start + word.length;
  }
  if (pos < plain.length) push(plain.slice(pos), null, pos);
  return out;
}

/** Which voice a whole short string (an answer option, a matching card)
 * should be read in. */
export function voiceFor(text: string, lang: SpeechLang): SpeechLang {
  if (targetSpans(text, lang).length > 0) return lang;
  return text.split(/\s+/).some(looksSpanishWord) ? lang : ENGLISH_LANG;
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
  bold: { fontWeight: "700", color: "#000" },
});
