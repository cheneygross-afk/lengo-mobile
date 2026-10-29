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

// Hangul syllables and jamo, and the spaces and punctuation between them:
// any such run is Korean (nothing else in this app is written in
// Hangul), so the Korean course needs no quote marks, the way Japanese
// works. TapText still splits a run into its spaced words. Same rule as
// the website's targetSpans.ts.
const KOREAN_RUN =
  /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7FF]+(?:[\s,.?!…~·]*[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7FF]+)*[.?!]?/g;

function koreanSpans(text: string): Span[] {
  const spans: Span[] = [];
  for (const m of text.matchAll(KOREAN_RUN)) {
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

// English function words that are also everyday German words.
const SHARED_WITH_GERMAN = new Set(["in", "was", "an", "so", "also", "will", "die", "war", "form", "best", "fill"]);

function looksEnglishNotGerman(text: string): boolean {
  if (/[äöüß]/i.test(text)) return false;
  const words = text.toLowerCase().match(/[a-z]+/g) ?? [];
  return words.some((w) => ENGLISH_FUNCTION_WORDS.has(w) && !SHARED_WITH_GERMAN.has(w));
}

// English function words that are also everyday Portuguese words.
const SHARED_WITH_PORTUGUESE = new Set(["a", "do", "for", "as"]);

function looksEnglishNotPortuguese(text: string): boolean {
  if (/[ãõçáâàéêíóôú]/i.test(text)) return false;
  const words = text.toLowerCase().match(/[a-z]+/g) ?? [];
  return words.some((w) => ENGLISH_FUNCTION_WORDS.has(w) && !SHARED_WITH_PORTUGUESE.has(w));
}

// English function words that are also everyday Italian words ("a Roma",
// "in centro", "do" = I give). Same as the website's.
const SHARED_WITH_ITALIAN = new Set(["a", "in", "do"]);

function looksEnglishNotItalian(text: string): boolean {
  if (/[àèéìòù]/i.test(text)) return false;
  const words = text.toLowerCase().match(/[a-z]+/g) ?? [];
  return words.some((w) => ENGLISH_FUNCTION_WORDS.has(w) && !SHARED_WITH_ITALIAN.has(w));
}

// Returns the tappable target-language spans within `text`. For Japanese,
// that's every run of Japanese script. For Spanish -- which shares a
// script with the English framing text -- quoted spans first, or (when
// nothing's quoted and the string reads as Spanish throughout, no English
// scaffolding at all) the entire string as one span. An empty array means
// nothing here should be treated as tappable target-language text (most
// often a plain-English comprehension question).
// Chinese characters (plus Chinese punctuation touching them), for the
// Chinese beta. Its English framing quotes pinyin in brackets after the
// characters, so only the characters are voiced. Same as the website's.
const CHINESE_RUN = /[㐀-䶿一-鿿]+(?:[，。？！、：；…“”]*[㐀-䶿一-鿿]+)*[，。？！]?/g;

function chineseSpans(text: string): Span[] {
  const spans: Span[] = [];
  for (const m of text.matchAll(CHINESE_RUN)) {
    if (m.index === undefined) continue;
    spans.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
  }
  return spans;
}

export function targetSpans(text: string, lang: SpeechLang): Span[] {
  if (lang === "ja-JP") return japaneseSpans(text);
  if (lang === "zh-CN") return chineseSpans(text);
  if (lang === "ko-KR") return koreanSpans(text);
  // French, like Spanish, shares the English script: quoted spans, or the
  // whole string when it has no English framing.
  if (lang === "es-ES" || lang === "fr-FR") {
    const quoted = quotedSpans(text);
    if (quoted.length > 0) return quoted;
    if (text.trim() && !looksEnglish(text)) return [{ start: 0, end: text.length, text }];
    return [];
  }
  // German too, but German shares short words with English ("in", "was",
  // "an", "will"), so only clearly English words count as framing.
  if (lang === "de-DE") {
    const quoted = quotedSpans(text);
    if (quoted.length > 0) return quoted;
    if (text.trim() && !looksEnglishNotGerman(text)) return [{ start: 0, end: text.length, text }];
    return [];
  }
  // Brazilian Portuguese the same way ("do", "a", "for" are Portuguese words too).
  if (lang === "pt-BR") {
    const quoted = quotedSpans(text);
    if (quoted.length > 0) return quoted;
    if (text.trim() && !looksEnglishNotPortuguese(text)) return [{ start: 0, end: text.length, text }];
    return [];
  }
  // The Italian course the same way ("a", "in", "do" are Italian words too).
  if (lang === "it-IT") {
    const quoted = quotedSpans(text);
    if (quoted.length > 0) return quoted;
    if (text.trim() && !looksEnglishNotItalian(text)) return [{ start: 0, end: text.length, text }];
    return [];
  }
  return [];
}
