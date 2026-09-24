// Finds the target-language portions of a mixed English/target-language
// string -- an exercise's question text, which quotes or otherwise
// embeds a Spanish/Japanese word or phrase inside English framing (e.g.
// `Which subject pronoun goes with "somos"?` or
// `差し支えなければ is closest in meaning to:`). Used to make just those
// embedded words tappable-to-hear, without also trying to pronounce the
// English sentence around them. Mirrored byte-for-byte in the website's
// src/lib/targetSpans.ts (pure text logic, no platform APIs -- same
// reasoning as this app's shared lesson content files).
import type { SpeechLang } from "./speech";

export type Span = { start: number; end: number; text: string };

// Hiragana, katakana, kanji (plus the half-width katakana block and
// common Japanese punctuation immediately touching them) -- any run of
// these is unambiguously Japanese, since nothing else in this app's
// content uses that script.
const JAPANESE_RUN = /[぀-ヿ㐀-䶿一-鿿･-ﾟ]+[、。・「」『』〜ー]*/g;

function japaneseSpans(text: string): Span[] {
  const spans: Span[] = [];
  for (const m of text.matchAll(JAPANESE_RUN)) {
    if (m.index === undefined) continue;
    spans.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
  }
  return spans;
}

// Spanish shares the Latin alphabet with the English framing text these
// questions are written in, so there's no script to detect by -- instead,
// any span inside double quotes (straight or curly) is a deliberately
// quoted Spanish word/phrase, the convention this app's earlier-level
// content uses (e.g. `Which subject pronoun goes with "somos"?`).
const QUOTED = /["“]([^"”]+)["”]/g;

function quotedSpans(text: string): Span[] {
  const spans: Span[] = [];
  for (const m of text.matchAll(QUOTED)) {
    if (m.index === undefined || !m[1]) continue;
    const innerStart = m.index + m[0].indexOf(m[1]);
    spans.push({ start: innerStart, end: innerStart + m[1].length, text: m[1] });
  }
  return spans;
}

// A curated set of common English function/framing words -- content
// words (nouns, verbs) vary too much to list, but a Spanish sentence
// essentially never contains any of these, while an English framing
// sentence almost always does. Used only to decide "is this whole string
// already Spanish, with no English scaffolding at all" -- later-level
// content increasingly is, per the curriculum's immersion approach --
// never to translate or validate anything.
const ENGLISH_FUNCTION_WORDS = new Set([
  "the", "a", "an", "is", "are", "was", "were", "which", "what", "who", "whom",
  "how", "why", "when", "where", "does", "do", "did", "means", "meaning",
  "closest", "correct", "choose", "select", "complete", "fill", "translate",
  "match", "this", "that", "these", "those", "of", "to", "in", "on", "for",
  "with", "and", "or", "not", "best", "word", "words", "sentence", "blank",
  "following", "phrase", "form", "you", "your", "it", "its", "true", "false",
]);

function looksEnglish(text: string): boolean {
  const words = text.toLowerCase().match(/[a-z]+/g) ?? [];
  return words.some((w) => ENGLISH_FUNCTION_WORDS.has(w));
}

// Returns the tappable target-language spans within `text`. For Japanese,
// that's every run of Japanese script. For Spanish -- which shares a
// script with the English framing text -- quoted spans first, or (when
// nothing's quoted and the string reads as Spanish throughout, no English
// scaffolding at all) the entire string as one span. An empty array means
// nothing here should be treated as tappable target-language text (most
// often a plain-English comprehension question).
export function targetSpans(text: string, lang: SpeechLang): Span[] {
  if (lang === "ja-JP") return japaneseSpans(text);
  if (lang === "es-ES") {
    const quoted = quotedSpans(text);
    if (quoted.length > 0) return quoted;
    if (text.trim() && !looksEnglish(text)) return [{ start: 0, end: text.length, text }];
    return [];
  }
  return [];
}
