// Synced from cheneygross-afk/lengo:src/lib/exams/fr/scoring.ts by scripts/sync-content.mjs -- edit it there, not here.
// Marking for the DELF/DALF practice exams (French course), following the
// real France Éducation international rules: every paper ("épreuve") is
// marked out of 25 (100 in all), and a candidate passes with at least 50
// of the 100 points AND at least 5 of the 25 points in every paper -- a
// paper below 5 fails the exam whatever the total.
//
// Item scoring is the same as the DELE practice exams (../scoring.ts):
// compréhension de l'oral and des écrits are marked automatically, and
// production écrite and orale get a 1-5 mark per task (from the writing
// feedback when available, otherwise the candidate's own honest
// self-assessment against the model answer), the paper's 25 points being
// that mark's share of 5.
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
export const PASS_POINTS = 50;
/** The minimum in every single paper (an "épreuve éliminatoire" below it). */
export const PAPER_MIN = 5;

/** Descriptors for the 1-5 mark given to a writing or speaking task. */
export const FR_TASK_MARKS: { mark: number; label: string; hint: string }[] = [
  { mark: 1, label: "1", hint: "Didn't manage the task / Tâche non réalisée" },
  { mark: 2, label: "2", hint: "Partly done, many errors that get in the way / Tâche partiellement réalisée, erreurs gênantes" },
  { mark: 3, label: "3", hint: "Task done at the level, errors don't block understanding / Tâche réalisée, erreurs non gênantes" },
  { mark: 4, label: "4", hint: "Task done well, good range, few errors / Tâche bien réalisée, bon répertoire, peu d'erreurs" },
  { mark: 5, label: "5", hint: "Everything asked, fluent and accurate for the level / Tâche entièrement réalisée, aisance et correction" },
];

const round1 = (n: number) => Math.round(n * 10) / 10;

export type DelfResult = {
  papers: { paper: ExamPaper; points: number | null; belowMinimum: boolean }[];
  /** Points out of 100 from the papers done so far. */
  points: number;
  /** Every paper has a score. */
  complete: boolean;
  passed: boolean;
};

/** The total and the pass/fail verdict from whatever papers are done.
 * `scores` maps paper id to points (absent: not done yet). */
export function delfResult(exam: Exam, scores: Record<string, number | undefined>): DelfResult {
  const papers = exam.papers.map((paper) => {
    const points = scores[paper.id] ?? null;
    return { paper, points, belowMinimum: points !== null && points < PAPER_MIN };
  });
  const points = round1(papers.reduce((s, p) => s + (p.points ?? 0), 0));
  const complete = papers.length > 0 && papers.every((p) => p.points !== null);
  const passed = complete && points >= PASS_POINTS && papers.every((p) => !p.belowMinimum);
  return { papers, points, complete, passed };
}

/** How the real exam is marked, for the exam page. */
export function delfPassMarkExplanation(exam: Exam): string {
  const base =
    `Each paper is worth ${PAPER_POINTS} points (${TOTAL_POINTS} in all). You pass with at least ${PASS_POINTS} of the ` +
    `${TOTAL_POINTS} points, and you need at least ${PAPER_MIN} of the ${PAPER_POINTS} points in every paper: a paper ` +
    `below ${PAPER_MIN} fails the exam however high the total.`;
  if (exam.level !== "C2") return base;
  return (
    base +
    ` The real DALF C2 has two combined papers of 50 points, with a minimum of 10 in each; here each is split into ` +
    `two papers of ${PAPER_POINTS}, which keeps the same total and pass mark.`
  );
}
