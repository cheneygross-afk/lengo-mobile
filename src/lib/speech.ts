// Shared pronunciation helper used by Flashcards, the reading/highlight
// tap-to-hear feature, and lesson drills. Uses expo-speech (the device's
// own iOS/Android TTS engine) rather than a paid cloud voice API -- the
// web app tried the browser's free speechSynthesis for this same job and
// shelved it (see lengo/src/components/flashcards/FlashcardsView.tsx,
// AUDIO_PRONUNCIATION_ENABLED = false) because those voices didn't sound
// native enough and a paid service was being considered instead. The
// device TTS engines this wraps are a different (generally better,
// especially on iOS) voice source than a browser's, so it's worth
// re-evaluating on its own merits rather than assuming the same verdict
// applies -- but if it doesn't clear the bar either, swapping this file's
// `speak()` internals for a cloud TTS call is the intended escape hatch;
// nothing outside this file needs to change.
import * as Speech from "expo-speech";

export type SpeechLang = "es-ES" | "ja-JP" | "en-US";

// Spanish dialect choice: es-ES (Castilian), matching the language tag
// the web prototype already used. Nothing in the lesson content commits
// to a dialect either way -- revisit if the curriculum's Spanish leans
// more Latin American in practice.
export const SPANISH_LANG: SpeechLang = "es-ES";
export const JAPANESE_LANG: SpeechLang = "ja-JP";
export const ENGLISH_LANG: SpeechLang = "en-US";

// The two ways language is keyed elsewhere in the app: a flashcard/story
// "levelPath" like "a1" or "ja-a1", or a Lesson's own "level" like "A1"
// or "JA-A1"/"JA-Alphabets"/"JA-B1".
export function langForLevelPath(levelPath: string): SpeechLang {
  return levelPath.startsWith("ja") ? JAPANESE_LANG : SPANISH_LANG;
}

export function langForLevel(level: string): SpeechLang {
  return level.startsWith("JA") ? JAPANESE_LANG : SPANISH_LANG;
}

// Voice availability is a real per-device concern, mainly for Japanese:
// iOS ships a Japanese voice by default on most locales, but Android
// devices vary and some have no ja-JP voice installed at all, in which
// case asking to speak Japanese text either mispronounces it with the
// wrong voice or silently does nothing. Checked once per language and
// cached, so UI can hide/disable pronunciation controls it knows won't
// work rather than fail silently every time.
const availabilityCache = new Map<SpeechLang, Promise<boolean>>();

export function isLanguageAvailable(lang: SpeechLang): Promise<boolean> {
  let cached = availabilityCache.get(lang);
  if (!cached) {
    cached = Speech.getAvailableVoicesAsync()
      .then((voices) => voices.some((v) => v.language?.toLowerCase().startsWith(lang.slice(0, 2))))
      // If the platform can't even report voices, assume available rather
      // than hide every pronunciation control over one failed check --
      // speak() itself will simply no-op/fail silently in that case.
      .catch(() => true);
    availabilityCache.set(lang, cached);
  }
  return cached;
}

// Strips the punctuation tokenize() in HighlightableText leaves attached
// to a word (it splits on whitespace only, not word boundaries) so it
// doesn't get read aloud or thrown off by a trailing "." or "¿".
export function stripForSpeech(text: string): string {
  return text.replace(/[.,;:!?¿¡"'“”()\[\]]/g, "").trim();
}

// Speaks `text` in `lang`, cancelling anything already speaking first so
// rapid taps (flipping through flashcards, tapping several words) don't
// pile up overlapping utterances.
export function speak(text: string, lang: SpeechLang) {
  const clean = stripForSpeech(text);
  if (!clean) return;
  Speech.stop();
  Speech.speak(clean, {
    language: lang,
    pitch: 1.0,
    // Slightly slower for Japanese -- kana/kanji run together with no
    // spaces, so full native rate reads as a blur for a learner.
    rate: lang === JAPANESE_LANG ? 0.85 : 1.0,
  });
}

export function stopSpeaking() {
  Speech.stop();
}
