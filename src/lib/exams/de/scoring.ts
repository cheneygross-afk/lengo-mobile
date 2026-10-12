// Synced from cheneygross-afk/lengo:src/lib/exams/de/scoring.ts by scripts/sync-content.mjs -- edit it there, not here.
// Marking for the Goethe-Zertifikat practice exams (German course),
// following the real Goethe-Institut rules as closely as the four-paper
// layout allows. Every paper ("Modul") is marked out of 25 here, which is
// the real 100-point scale divided by four:
// - A1 (Start Deutsch 1) and A2 are single exams: all four parts are
//   taken and the candidate passes with at least 60 of the 100 points.
// - B1, B2, C1 and C2 are modular: each module is a certificate of its
//   own, passed with at least 60 % of its points (15 of 25 here).
// The grade bands (sehr gut, gut, befriedigend, ausreichend) are the
// Goethe-Institut's, on the 100-point scale.
//
// Item scoring is the same as the DELE and DELF practice exams
// (../scoring.ts): Lesen and Hören are marked automatically, and
// Schreiben and Sprechen get a 1-5 mark per task (from the writing
// feedback when available, otherwise the candidate's own honest
// self-assessment against the model answer).
import type { Exam, ExamPaper } from "../types";
import { PAPER_POINTS } from "../scoring";

export {
  PAPER_POINTS,
  formatMinutes,
  isAutoMarked,
  itemKey,
  paperItems,
  scoreAutoPaper,
  scoreRatedPaper,
  type ExamAnswers,
  type PaperScore,
} from "../scoring";

export const TOTAL_POINTS = 100;
/** The pass mark: 60 % (of the whole exam at A1 and A2, of each module from B1). */
export const PASS_PERCENT = 60;
export const PASS_POINTS = 60;
export const MODULE_PASS = (PAPER_POINTS * PASS_PERCENT) / 100;

/** Descriptors for the 1-5 mark given to a writing or speaking task. */
export const DE_TASK_MARKS: { mark: number; label: string; hint: string }[] = [
  { mark: 1, label: "1", hint: "Didn't manage the task / Aufgabe nicht erfüllt" },
  { mark: 2, label: "2", hint: "Partly done, many errors that get in the way / Aufgabe teilweise erfüllt, störende Fehler" },
  { mark: 3, label: "3", hint: "Task done at the level, errors don't block understanding / Aufgabe erfüllt, Fehler stören kaum" },
  { mark: 4, label: "4", hint: "Task done well, good range, few errors / Aufgabe gut erfüllt, gutes Spektrum, wenige Fehler" },
  { mark: 5, label: "5", hint: "Everything asked, fluent and accurate for the level / Aufgabe voll erfüllt, flüssig und korrekt" },
];

const round1 = (n: number) => Math.round(n * 10) / 10;

/** A1 and A2 are one exam with one total; B1 to C2 are modular. */
export function isModular(exam: Exam): boolean {
  return exam.level !== "A1" && exam.level !== "A2";
}

/** The Goethe-Institut grade for a score out of 100. */
export function goetheGrade(points100: number): string {
  if (points100 >= 90) return "sehr gut";
  if (points100 >= 80) return "gut";
  if (points100 >= 70) return "befriedigend";
  if (points100 >= 60) return "ausreichend";
  return "nicht bestanden";
}

export type GoetheResult = {
  modular: boolean;
  papers: { paper: ExamPaper; points: number | null; passed: boolean }[];
  /** Points out of 100 from the papers done so far. */
  points: number;
  /** Every paper has a score. */
  complete: boolean;
  /** A1/A2: the whole exam passed. B1 to C2: every module passed. */
  passed: boolean;
};

/** The total and the pass/fail verdict from whatever papers are done.
 * `scores` maps paper id to points (absent: not done yet). */
export function goetheResult(exam: Exam, scores: Record<string, number | undefined>): GoetheResult {
  const modular = isModular(exam);
  const papers = exam.papers.map((paper) => {
    const points = scores[paper.id] ?? null;
    return { paper, points, passed: points !== null && points >= MODULE_PASS };
  });
  const points = round1(papers.reduce((s, p) => s + (p.points ?? 0), 0));
  const complete = papers.length > 0 && papers.every((p) => p.points !== null);
  const passed = complete && (modular ? papers.every((p) => p.passed) : points >= PASS_POINTS);
  return { modular, papers, points, complete, passed };
}

/** How the real exam is marked, for the exam page. */
export function goethePassMarkExplanation(exam: Exam): string {
  const scale =
    `The real exam marks out of 100; here each of the four papers is worth ${PAPER_POINTS} points, so ${PAPER_POINTS} ` +
    `points here are 100 there. Grades: 90-100 sehr gut, 80-89 gut, 70-79 befriedigend, 60-69 ausreichend.`;
  if (!isModular(exam)) {
    return (
      `You take all four parts, and you pass with at least ${PASS_POINTS} of the ${TOTAL_POINTS} points in all. ` +
      `There is no minimum for a single part, so a strong part can make up for a weaker one. ` +
      scale
    );
  }
  return (
    `The Goethe-Zertifikat ${exam.level} is modular: Lesen, Hören, Schreiben and Sprechen are separate modules, each ` +
    `with its own certificate, and you pass a module with at least ${PASS_PERCENT} % of its points (${MODULE_PASS} of ` +
    `${PAPER_POINTS} here). Pass all four and you hold the full certificate; a failed module can be retaken on its own. ` +
    scale
  );
}
