// Synced from cheneygross-afk/lengo:src/lib/exams/scoring.ts by scripts/sync-content.mjs -- edit it there, not here.
// Marking for the DELE practice exams, following the real exam's
// conventions: every paper ("prueba") is worth 25 points, the four papers
// form two groups, and a candidate passes ("APTO") with at least 30 of
// the 50 points in each group. There's no minimum for a single paper.
//
// Reading and listening are marked automatically. Writing and speaking
// get a 1-5 mark per task -- from the writing feedback when it's
// available, otherwise from the candidate's own honest self-assessment
// against the model answer -- and the paper's 25 points are that mark's
// share of 5.
import type { Exam, ExamItem, ExamPaper } from "./types";

export const PAPER_POINTS = 25;
export const GROUP_POINTS = 50;
export const GROUP_PASS = 30;

/** Answers to a paper's items, keyed by itemKey(). */
export type ExamAnswers = Record<string, number>;

export function itemKey(taskIndex: number, item: ExamItem): string {
  return `${taskIndex}.${item.n}`;
}

export function paperItems(paper: ExamPaper): { key: string; item: ExamItem; taskIndex: number }[] {
  return paper.tasks.flatMap((task, taskIndex) =>
    (task.items ?? []).map((item) => ({ key: itemKey(taskIndex, item), item, taskIndex }))
  );
}

export function isAutoMarked(paper: ExamPaper): boolean {
  return paper.kind === "reading" || paper.kind === "listening";
}

export type PaperScore = {
  /** Points out of 25, rounded to one decimal. */
  points: number;
  /** For auto-marked papers: items right and items in all. */
  correct?: number;
  total?: number;
};

const round1 = (n: number) => Math.round(n * 10) / 10;

export function scoreAutoPaper(paper: ExamPaper, answers: ExamAnswers): PaperScore {
  const items = paperItems(paper);
  const correct = items.filter(({ key, item }) => answers[key] === item.answer).length;
  return { points: items.length ? round1((correct / items.length) * PAPER_POINTS) : 0, correct, total: items.length };
}

/** Descriptors for the 1-5 mark given to a writing or speaking task. */
export const TASK_MARKS: { mark: number; label: string; hint: string }[] = [
  { mark: 1, label: "1", hint: "Didn't manage the task / No realiza la tarea" },
  { mark: 2, label: "2", hint: "Partly done, many errors that get in the way / Tarea incompleta, errores que dificultan la comunicación" },
  { mark: 3, label: "3", hint: "Task done at the level, errors don't block understanding / Cumple la tarea, con errores que no impiden entender" },
  { mark: 4, label: "4", hint: "Task done well, good range, few errors / Cumple bien la tarea, buen repertorio, pocos errores" },
  { mark: 5, label: "5", hint: "Everything asked, fluent and accurate for the level / Todo lo pedido, con fluidez y corrección" },
];

/** A writing or speaking paper's points from its tasks' 1-5 marks
 * (tasks without a mark yet count as not done). */
export function scoreRatedPaper(paper: ExamPaper, marks: (number | undefined)[]): PaperScore {
  const n = paper.tasks.length;
  if (!n) return { points: 0 };
  const sum = paper.tasks.reduce((s, _t, i) => s + Math.min(5, Math.max(0, marks[i] ?? 0)), 0);
  return { points: round1((sum / (5 * n)) * PAPER_POINTS) };
}

export type GroupResult = {
  group: 1 | 2;
  papers: { paper: ExamPaper; points: number | null }[];
  points: number;
  /** Every paper in the group has a score. */
  complete: boolean;
  passed: boolean;
};

/** Group totals and the pass/fail verdict from whatever papers are done.
 * `scores` maps paper id to points (absent: not done yet). */
export function examResult(exam: Exam, scores: Record<string, number | undefined>): { groups: GroupResult[]; complete: boolean; passed: boolean } {
  const groups = ([1, 2] as const).map((group) => {
    const papers = exam.papers.filter((p) => p.group === group).map((paper) => ({ paper, points: scores[paper.id] ?? null }));
    const points = round1(papers.reduce((s, p) => s + (p.points ?? 0), 0));
    const complete = papers.every((p) => p.points !== null);
    return { group, papers, points, complete, passed: points >= GROUP_PASS };
  });
  const complete = groups.every((g) => g.complete);
  return { groups, complete, passed: complete && groups.every((g) => g.passed) };
}

/** How the real exam is marked, for the exam page. */
export function passMarkExplanation(exam: Exam): string {
  const names = ([1, 2] as const).map((g) =>
    exam.papers
      .filter((p) => p.group === g)
      .map((p) => p.title)
      .join(" + ")
  );
  return (
    `Each paper is worth ${PAPER_POINTS} points (${PAPER_POINTS * 4} in all). The papers are marked in two groups -- ` +
    `group 1: ${names[0]}; group 2: ${names[1]} -- and you pass ("APTO") with at least ${GROUP_PASS} of the ` +
    `${GROUP_POINTS} points in each group. There is no minimum for a single paper, so a strong paper can make up for a weaker one in the same group.`
  );
}

export function formatMinutes(minutes: number): string {
  return minutes >= 60 && minutes % 60 === 0
    ? `${minutes / 60} h`
    : minutes > 60
      ? `${Math.floor(minutes / 60)} h ${minutes % 60} min`
      : `${minutes} min`;
}
