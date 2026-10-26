// Synced from cheneygross-afk/lengo:src/lib/exams/ko/text.ts by scripts/sync-content.mjs -- edit it there, not here.
// Small helpers for writing the TOPIK practice data compactly: a question,
// a recording from "남자: …" / "여자: …" lines, a listening or reading task
// per recording or text (as the real test prints a numbered group such as
// [25~26] with its own instruction), and the real per-question weights.
import type { ExamAudio, ExamItem, ExamPaper, ExamTask, ExamText } from "../types";

/** Paragraphs joined with a blank line. */
export const paras = (...p: string[]): string => p.join("\n\n");

/** A four-option question. `answer` is 1-based, as TOPIK numbers its
 * options ①-④. The explanation is English. */
export function q(n: number, question: string, options: [string, string, string, string], answer: 1 | 2 | 3 | 4, explanation: string): ExamItem {
  return { n, question, options, answer: answer - 1, explanation };
}

/** A recording from lines "남자: …" or "여자: …" (the speaker sets the
 * voice). A line without a speaker uses `voice`. */
export function rec(label: string, plays: number, lines: string[], voice: "f" | "m" = "f"): ExamAudio {
  return {
    label,
    plays,
    lines: lines.map((line) => {
      const m = /^(남자|여자):\s*/.exec(line);
      if (!m) return { voice, text: line };
      return { voice: m[1] === "남자" ? "m" : "f", text: line.slice(m[0].length) };
    }),
  };
}

/** "1", "25~26": the numbers of a group's questions, as the test prints them. */
export function groupTitle(items: ExamItem[]): string {
  const ns = items.map((i) => i.n);
  return ns.length === 1 ? `${ns[0]}번` : `[${ns[0]}~${ns[ns.length - 1]}]`;
}

/** A listening task: one recording and its question(s). */
export function listen(instructions: string, audio: ExamAudio, items: ExamItem[], instructionsEn?: string): ExamTask {
  return { title: groupTitle(items), instructions, instructionsEn, audio: [audio], items, layout: "choice" };
}

/** A reading task: an optional text and its question(s). */
export function read(instructions: string, text: ExamText | string | undefined, items: ExamItem[], instructionsEn?: string): ExamTask {
  const texts = text === undefined ? undefined : [typeof text === "string" ? { body: text } : text];
  return { title: groupTitle(items), instructions, instructionsEn, texts, items, layout: "choice" };
}

/** Sets every question's weight: `weight(n)` gives the points of question n. */
export function weigh(paper: ExamPaper, weight: (n: number) => number): ExamPaper {
  for (const task of paper.tasks) for (const item of task.items ?? []) item.points = weight(item.n);
  return paper;
}

/** TOPIK I listening: questions worth 4 points (the rest are worth 3). */
export const TOPIK_I_LISTENING_FOURS = new Set([1, 2, 5, 10, 13, 15, 16, 26, 28, 30]);
/** TOPIK I reading: questions worth 3 points (the rest are worth 2). */
export const TOPIK_I_READING_THREES = new Set([36, 37, 38, 40, 41, 42, 43, 45, 46, 47, 51, 54, 56, 57, 60, 64, 66, 67, 68, 70]);

/** The English note on pictures, which the practice tests describe in words. */
export const PICTURE_NOTE =
  "In the real test the four options are pictures; here each picture is described in a sentence. Choose the one that matches what you hear.";

/** The English note on notices, ads and graphs printed as images in the real test. */
export const IMAGE_NOTE = "In the real test this is a printed notice or image; here its text is given as it would appear.";
