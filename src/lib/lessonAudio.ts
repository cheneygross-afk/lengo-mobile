// What a lesson can say, worked out from its content, so the lesson screen
// can get every clip ready before the learner starts (see preloadSpeech in
// lib/speech.ts) and load the clips of the step on screen into players
// (warmSpeech). Follows the same voicing rules as the rendered text
// (TapText's spokenPieces): tappable target-language words, whole answer
// options, word tiles, matching cards, listening clips, and the sentences
// played after checking.
import type { Exercise } from "@/lib/lessons/types";
import type { SpeechItem, SpeechLang } from "@/lib/speech";
import { isTargetText, spokenPieces } from "@/components/TapText";
import { listenFirstAudio } from "@/lib/listenFirst";
import { splitOnBlank } from "@/lib/grading";

// Fields that are never read aloud as a whole.
const NOT_WHOLE = new Set(["type", "id", "direction", "stage", "explanation", "hint", "tip", "prompt", "note"]);
// Fields that are never shown at all.
const NOT_SHOWN = new Set(["type", "id", "direction", "stage"]);

export function textSpeech(text: string, lang: SpeechLang, target = false): SpeechItem[] {
  return spokenPieces(text, lang, target ? "target" : "mixed");
}

export function exerciseSpeech(exercise: Exercise, lang: SpeechLang): SpeechItem[] {
  const out: SpeechItem[] = [];
  const visit = (value: unknown, key: string) => {
    if (NOT_SHOWN.has(key)) return;
    if (typeof value === "string") {
      if (!value.trim()) return;
      const whole = !NOT_WHOLE.has(key) && isTargetText(value, lang);
      if (whole) out.push({ text: value, lang });
      out.push(...textSpeech(value, lang, whole));
    } else if (Array.isArray(value)) {
      for (const v of value) visit(v, key);
    } else if (value && typeof value === "object") {
      for (const [k, v] of Object.entries(value)) visit(v, k);
    }
  };
  visit(exercise, "");
  if (exercise.type === "word-order") {
    for (const w of exercise.words) out.push({ text: w, lang });
    out.push({ text: exercise.words.join(" "), lang });
  }
  if (exercise.type === "fill-blank") {
    const [before, after] = splitOnBlank(exercise.sentence);
    out.push({ text: `${before}${exercise.answer}${after}`, lang });
  }
  const listen = listenFirstAudio(exercise, lang);
  if (listen) out.push({ text: listen, lang });
  return out;
}
