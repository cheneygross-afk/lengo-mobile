// Listen-first mode: the lesson runner's toggle that hides an exercise's
// Spanish and plays it instead, so the learner has to understand it by
// ear, until they answer or tap "Show text". This file decides which
// exercises it applies to and what gets spoken.
//
// The website (lengo) and the mobile app (lengo-mobile) keep identical
// copies of this file at the same path -- change both together.
import type { Exercise } from "./lessons/types";
import { isKnownSpanishWord, splitOnBlank } from "./grading";

const WORD = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g;

// Common English words that aren't also Spanish words: one of these in a
// question means it's (at least partly) English framing, not a Spanish
// sentence to listen to.
const ENGLISH_MARKERS = new Set(
  (
    "the what which does do did is are was were mean means meaning word words choose pick select correct right " +
    "form sentence how would could should will can say says you your of to and in for with this that it its they " +
    "we my best answer translate translation english spanish when why who where there these those not at on by " +
    "from an be been being have fill blank missing complete opposite means which one ones verb noun phrase"
  ).split(" "),
);

/** True if `text` reads as Spanish throughout (no English framing). */
export function isSpanishText(text: string): boolean {
  const words = text.match(WORD) ?? [];
  if (words.length === 0) return false;
  let known = 0;
  for (const w of words) {
    const lower = w.toLowerCase();
    if (ENGLISH_MARKERS.has(lower)) return false;
    if (isKnownSpanishWord(lower)) known++;
  }
  return known / words.length >= 0.6;
}

/** A sentence with its blank read as a pause. */
function speakableBlank(sentence: string): string {
  const [before, after] = splitOnBlank(sentence);
  return after || before !== sentence ? `${before.trim()} … ${after.trim()}`.trim() : sentence;
}

/**
 * The Spanish that listen-first mode plays in place of the text, or null
 * if the mode doesn't apply to this exercise (the text stays visible).
 * Only for Spanish lessons: Japanese has no listen-first mode.
 */
export function listenFirstAudio(exercise: Exercise, lang: string): string | null {
  if (!lang.startsWith("es")) return null;
  switch (exercise.type) {
    case "fill-blank":
      return speakableBlank(exercise.sentence);
    case "translate":
      return exercise.direction === "es-en" ? exercise.source : null;
    case "multiple-choice":
      return isSpanishText(exercise.question) ? speakableBlank(exercise.question) : null;
    default:
      return null;
  }
}
