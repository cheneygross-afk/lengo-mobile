// Synced from cheneygross-afk/lengo:src/lib/exams/it/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// Small helpers for writing the CILS practice data of the Italian course
// compactly: the five sections ("prove") with each level's timings, a
// question, a true/false statement, a recording from "F: …" / "M: …"
// lines, and writing and speaking tasks, plus the English notes shared by
// every exam.
import type { Exam, ExamAudio, ExamItem, ExamLevel, ExamPaper, ExamSpeakTask, ExamTask, ExamText } from "../types";

/** Paragraphs joined with a blank line, as the exam's text blocks show them. */
export const paras = (...p: string[]): string => p.join("\n\n");

/** A question with its options; `answer` is 1-based (a, b, c, d). The
 * explanation is English, with Italian in "double quotes". */
export function q(n: number, question: string, options: string[], answer: number, explanation: string): ExamItem {
  return { n, question, options, answer: answer - 1, explanation };
}

/** A gap in a text ("(3) ______"): the number alone identifies it. */
export function gap(n: number, options: string[], answer: number, explanation: string): ExamItem {
  return q(n, "", options, answer, explanation);
}

export const VERO_FALSO = ["Vero", "Falso"];

/** A true/false statement ("Vero" / "Falso"), as CILS prints them. */
export function vf(n: number, statement: string, isTrue: boolean, explanation: string): ExamItem {
  return { n, question: statement, options: VERO_FALSO, answer: isTrue ? 0 : 1, explanation };
}

/** A matching item: the same lettered options ("A. …") for every item. */
export function match(n: number, question: string, options: string[], letter: string, explanation: string): ExamItem {
  const answer = options.findIndex((o) => o.startsWith(`${letter}.`));
  if (answer < 0) throw new Error(`No option ${letter} for item ${n}`);
  return { n, question, options, answer, explanation };
}

/** A recording from lines "F: …" or "M: …" (the speaker sets the voice).
 * A line without a speaker uses `voice`. Played twice, as in the CILS. */
export function rec(label: string, lines: string[], voice: "f" | "m" = "f"): ExamAudio {
  return {
    label,
    plays: 2,
    lines: lines.map((line) => {
      const m = /^(F|M):\s*/.exec(line);
      if (!m) return { voice, text: line };
      return { voice: m[1] === "M" ? "m" : "f", text: line.slice(m[0].length) };
    }),
  };
}

/** A listening task ("Prova n. 1") with one or more recordings. */
export function listen(n: number, instructions: string, audio: ExamAudio[], items: ExamItem[], instructionsEn?: string): ExamTask {
  return { title: `Prova n. ${n}`, instructions, instructionsEn, audio, items, layout: "choice" };
}

/** A reading or structures task: its text(s) and items. `layout`
 * "select" for matching, where every item has the same options. */
export function read(
  n: number,
  instructions: string,
  texts: ExamText[],
  items: ExamItem[],
  instructionsEn?: string,
  layout: "choice" | "select" = "choice",
): ExamTask {
  return { title: `Prova n. ${n}`, instructions, instructionsEn, texts: texts.length ? texts : undefined, items, layout };
}

/** A writing task: the exam's instruction line, the situation (`prompt`),
 * the word range, the rubric (the four criteria) and a model answer. */
export function write(
  n: number,
  instructions: string,
  w: { prompt: string; words: [number, number]; rubric: string[]; modelAnswer: string; input?: ExamText },
  instructionsEn?: string,
): ExamTask {
  return {
    title: `Prova n. ${n}`,
    instructions,
    instructionsEn,
    write: [
      {
        prompt: w.prompt,
        input: w.input ? { text: w.input } : undefined,
        minWords: w.words[0],
        maxWords: w.words[1],
        rubric: w.rubric,
        modelAnswer: w.modelAnswer,
      },
    ],
  };
}

/** A speaking task. */
export function speak(n: number, instructions: string, s: ExamSpeakTask, instructionsEn?: string): ExamTask {
  return { title: `Prova n. ${n}`, instructions, instructionsEn, speak: s };
}

/** The five CILS sections, in the order of the real exam. */
export const SECTIONS = [
  { id: "ascolto", kind: "listening", title: "Ascolto", en: "Listening" },
  { id: "lettura", kind: "reading", title: "Comprensione della lettura", en: "Reading" },
  { id: "strutture", kind: "reading", title: "Analisi delle strutture di comunicazione", en: "Structures" },
  { id: "scritta", kind: "writing", title: "Produzione scritta", en: "Writing" },
  { id: "orale", kind: "speaking", title: "Produzione orale", en: "Speaking" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

/** Each section's time at each level, close to the real exam's. The
 * speaking section's time is the sum of its tasks' preparation and
 * speaking times. */
export const CILS_MINUTES: Record<ExamLevel, Record<SectionId, number>> = {
  A1: { ascolto: 20, lettura: 30, strutture: 30, scritta: 40, orale: 10 },
  A2: { ascolto: 25, lettura: 35, strutture: 35, scritta: 50, orale: 10 },
  B1: { ascolto: 30, lettura: 50, strutture: 60, scritta: 70, orale: 12 },
  B2: { ascolto: 30, lettura: 50, strutture: 60, scritta: 90, orale: 12 },
  C1: { ascolto: 30, lettura: 70, strutture: 70, scritta: 120, orale: 15 },
  C2: { ascolto: 40, lettura: 90, strutture: 90, scritta: 150, orale: 15 },
};

/** A whole CILS practice exam from its five sections' tasks. */
export function cilsExam(
  e: { slug: string; level: ExamLevel; title: string; description: string },
  tasks: Record<SectionId, ExamTask[]>,
): Exam {
  const papers: ExamPaper[] = SECTIONS.map((s) => ({
    id: s.id,
    kind: s.kind,
    title: s.title,
    minutes: CILS_MINUTES[e.level][s.id],
    // The four written sections are taken in one sitting; the oral on its own.
    group: s.id === "orale" ? 2 : 1,
    tasks: tasks[s.id],
  }));
  return { ...e, papers };
}

/** The English note on every listening task. */
export const AUDIO_NOTE =
  "In the real exam each recording is played twice; here you can play it twice in timed mode, and the transcript appears when you finish the section.";

/** The English note on the conversation with the examiner. */
export const DIALOGUE_NOTE =
  "In the real exam you talk with an examiner. Tap the examiner's questions to hear them, answer out loud, then compare with the model answer.";

/** The English note on the monologue. */
export const MONOLOGUE_NOTE =
  "In the real exam you talk on your own about the topic after a short preparation. Use the preparation time for notes, then speak without reading.";

/** The English note on photos, which the practice exams describe in words. */
export const PHOTO_NOTE = "In the real exam this is a photo; here it is described in words.";
