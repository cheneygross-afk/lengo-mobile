// Synced from cheneygross-afk/lengo:src/lib/exams/pt/scoring.ts by scripts/sync-content.mjs -- edit it there, not here.
// Marking for the Celpe-Bras practice exams (Brazilian Portuguese course),
// following the real exam's rules as closely as the shared exam framework
// allows. The real Celpe-Bras (Inep, Brazil's Ministry of Education) is
// one exam for every candidate, in two parts:
// - Parte Coletiva: four integrated writing tasks, each given a holistic
//   mark from 0 to 5 (adequação ao contexto, adequação discursiva,
//   adequação linguística); the part's mark is their average.
// - Parte Individual: a 20-minute conversation, marked 0 to 5.
// The certificate level comes from those 0-5 marks (see CELPE_BANDS), and
// a candidate is certified at the level both parts reach, i.e. the lower
// of the two.
//
// Here every paper is marked out of 25 with the shared scoring
// (../scoring.ts): each task gets a 1-5 mark (from the writing feedback
// when available, otherwise the candidate's honest self-assessment), and
// the paper's 25 points are that mark's share of 5. Points out of 25,
// divided by 5, give back the Celpe-Bras 0-5 mark.
//
// The Deep End A2 practice test (slug "pt-pratica-a2") is not a Celpe-Bras
// exam and gives no certificate level; see celpeResult's `practice`.
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

/** Descriptors for the 1-5 mark given to a writing or speaking task,
 * after the Celpe-Bras holistic grid (English / Portuguese). */
export const PT_TASK_MARKS: { mark: number; label: string; hint: string }[] = [
  { mark: 1, label: "1", hint: "Task not done: wrong genre or reader, little use of the source / Não cumpre a tarefa" },
  {
    mark: 2,
    label: "2",
    hint: "Basic: purpose and reader mostly right, some source information, frequent errors / Cumpre a tarefa de forma básica",
  },
  {
    mark: 3,
    label: "3",
    hint: "Adequate: right genre, reader and purpose, the key source information, errors that rarely get in the way / Cumpre a tarefa adequadamente",
  },
  {
    mark: 4,
    label: "4",
    hint: "Good: well organised for its reader, source information reworked in your words, good range, few errors / Cumpre bem a tarefa",
  },
  {
    mark: 5,
    label: "5",
    hint: "Very good: everything asked, natural for its genre and reader, wide and accurate language / Cumpre plenamente a tarefa",
  },
];

/** The four certificate levels and the 0-5 mark each needs. Below 2.00
 * there is no certificate. */
export const CELPE_BANDS: { level: string; en: string; from: number; to: number }[] = [
  { level: "Intermediário", en: "Intermediate", from: 2, to: 2.75 },
  { level: "Intermediário Superior", en: "Upper Intermediate", from: 2.76, to: 3.5 },
  { level: "Avançado", en: "Advanced", from: 3.51, to: 4.25 },
  { level: "Avançado Superior", en: "Upper Advanced", from: 4.26, to: 5 },
];

export const PRACTICE_SLUG = "pt-pratica-a2";

/** The Deep End A2 practice test, not a Celpe-Bras exam. */
export function isPractice(exam: Exam): boolean {
  return exam.slug === PRACTICE_SLUG;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

/** A paper's 25 points as a Celpe-Bras mark from 0 to 5. */
export function celpeMark(points: number): number {
  return round2((points / PAPER_POINTS) * 5);
}

/** The certificate level a 0-5 mark reaches, or null below 2.00. */
export function celpeLevel(mark: number): string | null {
  const band = [...CELPE_BANDS].reverse().find((b) => mark >= b.from);
  return band ? band.level : null;
}

export type CelpeResult = {
  practice: boolean;
  papers: { paper: ExamPaper; points: number | null; mark: number | null; level: string | null }[];
  /** Both parts have a score. */
  complete: boolean;
  /** The lower of the two marks, once both parts are done. */
  finalMark: number | null;
  /** The certificate level that mark reaches (null: no certificate, or not done). */
  level: string | null;
};

/** Each part's mark and level, and the overall level from whatever papers
 * are done. `scores` maps paper id to points (absent: not done yet). */
export function celpeResult(exam: Exam, scores: Record<string, number | undefined>): CelpeResult {
  const papers = exam.papers.map((paper) => {
    const points = scores[paper.id] ?? null;
    const mark = points === null ? null : celpeMark(points);
    return { paper, points, mark, level: mark === null ? null : celpeLevel(mark) };
  });
  const complete = papers.length > 0 && papers.every((p) => p.points !== null);
  const finalMark = complete ? Math.min(...papers.map((p) => p.mark ?? 0)) : null;
  return {
    practice: isPractice(exam),
    papers,
    complete,
    finalMark,
    level: finalMark === null ? null : celpeLevel(finalMark),
  };
}

/** How the real exam is marked, for the exam page. */
export function celpePassMarkExplanation(exam: Exam): string {
  if (isPractice(exam)) {
    return (
      "This is a Deep End practice test, not a Celpe-Bras exam, and it gives no certificate level. Each part is marked out of " +
      `${PAPER_POINTS} from 1-5 marks per task, as in the Celpe-Bras practice exams. Around 3 out of 5 on every task means you ` +
      "handle A2 tasks comfortably and are ready to work towards B1, where Celpe-Bras practice starts."
    );
  }
  const bands = CELPE_BANDS.map((b) => `"${b.level}" ${b.from.toFixed(2)}-${b.to.toFixed(2)}`).join(", ");
  return (
    "The real Celpe-Bras gives each task of the \"Parte Coletiva\" a holistic mark from 0 to 5 and averages them, and marks the " +
    "\"Parte Individual\" from 0 to 5 too. The certificate level depends on those marks: " +
    `${bands}; below 2.00 there is no certificate. You are certified at the level both parts reach, so the weaker part decides. ` +
    `Here each part is worth ${PAPER_POINTS} points, and ${PAPER_POINTS} points are a 5.`
  );
}
