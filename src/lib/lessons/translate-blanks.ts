// Synced from cheneygross-afk/lengo:src/lib/lessons/translate-blanks.ts by scripts/sync-content.mjs -- edit it there, not here.
import { FILL_BLANK_ENGLISH, fillBlankKey } from "./fill-blank-english";
import type { Exercise, Lesson } from "./types";

// A fill-blank that names the word to use -- "Ayer ___ a mi madre.
// (llamar)", or a prompt like "Complete with the preterite of llamar." --
// reads as a conjugation table drill. Where fill-blank-english.ts has an
// English version of the sentence, the exercise is asked as a translation
// instead: the learner sees the English with the target words in bold and
// the Spanish frame without the cue, and the cue's information (verb,
// tense, person) moves into the explanation they see after answering.
//
// Applied to every woven lesson (see weave.ts), so it covers exercises
// written with authoring.ts' fb() and as raw object literals alike.

// Instruction language follows each level's convention: A1/A2 in English,
// B1 upward in Spanish.
const PROMPT: Record<"en" | "es", string> = {
  en: "How do you say the bold words in Spanish?",
  es: "¿Cómo se dicen en español las palabras en negrita?",
};

function translateBlank(e: Exercise, prompt: string): Exercise {
  if (e.type !== "fill-blank" || e.en) return e;
  const entry = FILL_BLANK_ENGLISH[fillBlankKey(e.sentence, e.answer)];
  if (!entry) return e;
  const [en, note] = entry;
  return {
    type: "fill-blank",
    prompt,
    sentence: e.sentence.replace(/\s*\([^()]*\)/g, "").replace(/^\s*→\s*/, "").trim(),
    answer: e.answer,
    en,
    explanation: `${note.replace(/\.$/, "")}. ${e.explanation}`,
  };
}

export function translateBlanks(lesson: Lesson): Lesson {
  const prompt = PROMPT[lesson.level === "A1" || lesson.level === "A2" ? "en" : "es"];
  return {
    ...lesson,
    sections: lesson.sections.map((s) =>
      s.checkpoint ? { ...s, checkpoint: s.checkpoint.map((e) => translateBlank(e, prompt)) } : s
    ),
    ...(lesson.exercises ? { exercises: lesson.exercises.map((e) => translateBlank(e, prompt)) } : {}),
  };
}
