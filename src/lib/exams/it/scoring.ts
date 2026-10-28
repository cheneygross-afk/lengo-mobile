// Synced from cheneygross-afk/lengo:src/lib/exams/it/scoring.ts by scripts/sync-content.mjs -- edit it there, not here.
// Marking for the CILS practice exams of the Italian course, following the
// real CILS (Certificazione di Italiano come Lingua Straniera, of the
// Università per Stranieri di Siena) as closely as the shared exam
// framework allows. Every level has the same five sections: ascolto,
// comprensione della lettura, analisi delle strutture di comunicazione,
// produzione scritta and produzione orale. From CILS UNO (B1) to CILS
// QUATTRO (C2) each section is marked out of 20 (100 in all), and you
// pass with at least 11 in every section; a section passed can be kept
// while you resit the others ("capitalizzazione"). CILS A1 and A2 use a
// smaller scale on the same principle; the practice exams here show
// every level on the 20-point scale.
//
// The shared exam framework (../scoring.ts) marks every paper out of 25;
// here that is a section's 20 points times 4/5. Listening, reading and
// structures are marked automatically; writing and speaking get a 1-5
// mark per task (from the writing feedback when available, otherwise
// the candidate's honest self-assessment), and the section's points are
// that mark's share of 5.
import type { Exam, ExamLevel, ExamPaper } from "../types";
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

/** Every CILS section is marked out of 20. */
export const SECTION_POINTS = 20;
/** The pass mark in each section. */
export const SECTION_PASS = 11;

/** Descriptors for the 1-5 mark given to a writing or speaking task,
 * after the four criteria the practice uses (English / Italian). */
export const IT_TASK_MARKS: { mark: number; label: string; hint: string }[] = [
  { mark: 1, label: "1", hint: "Task not done: off topic, far too short, or hard to understand / Compito non svolto" },
  {
    mark: 2,
    label: "2",
    hint: "Partly done: some of what was asked, weak order, errors that get in the way / Compito svolto in parte",
  },
  {
    mark: 3,
    label: "3",
    hint: "Done: everything asked, clear order, errors that rarely get in the way (a pass) / Compito svolto in modo adeguato",
  },
  {
    mark: 4,
    label: "4",
    hint: "Done well: right register, well linked, good range, few errors / Compito svolto bene",
  },
  {
    mark: 5,
    label: "5",
    hint: "Very good: complete, natural for its reader, wide and accurate language for the level / Compito svolto pienamente",
  },
];

/** The CILS exam for each level, with the course level that prepares for
 * it (learner-visible names, with the level's URL segment). */
export const CILS_LEVELS: { level: ExamLevel; exam: string; course: string; path: string }[] = [
  { level: "A1", exam: "CILS A1", course: "Beginner", path: "a1" },
  { level: "A2", exam: "CILS A2", course: "Elementary", path: "a2" },
  { level: "B1", exam: "CILS UNO", course: "Intermediate", path: "b1" },
  { level: "B2", exam: "CILS DUE", course: "Upper Intermediate", path: "b2" },
  { level: "C1", exam: "CILS TRE", course: "Advanced", path: "c1" },
  { level: "C2", exam: "CILS QUATTRO", course: "Mastery", path: "c2" },
];

export function cilsLevel(level: ExamLevel) {
  return CILS_LEVELS.find((l) => l.level === level)!;
}

/** "CILS UNO (Intermediate)". */
export function cilsName(level: ExamLevel): string {
  const l = cilsLevel(level);
  return `${l.exam} (${l.course})`;
}

/** A section's 25 shared points as its CILS score out of 20 (rounded as
 * the exam runner shows it). */
export function sectionScore(points: number): number {
  return Math.round((points / PAPER_POINTS) * SECTION_POINTS);
}

export type CilsResult = {
  sections: { paper: ExamPaper; score: number | null; passed: boolean }[];
  total: number;
  max: number;
  /** Every section has a score. */
  complete: boolean;
  /** Every section reaches the pass mark. */
  passed: boolean;
};

/** Each section's score out of 20 and whether it passes, the total, and
 * the verdict once every section is done. `scores` maps paper id to its
 * 25 shared points (absent: not done yet). */
export function cilsResult(exam: Exam, scores: Record<string, number | undefined>): CilsResult {
  const sections = exam.papers.map((paper) => {
    const p = scores[paper.id];
    const score = p === undefined ? null : sectionScore(p);
    return { paper, score, passed: score !== null && score >= SECTION_PASS };
  });
  const complete = sections.length > 0 && sections.every((s) => s.score !== null);
  const total = sections.reduce((s, x) => s + (x.score ?? 0), 0);
  return {
    sections,
    total,
    max: exam.papers.length * SECTION_POINTS,
    complete,
    passed: complete && sections.every((s) => s.passed),
  };
}

/** How the real exam is marked, for the exam page. */
export function cilsPassMarkExplanation(exam: Exam): string {
  const name = cilsLevel(exam.level).exam;
  const scale =
    exam.level === "A1" || exam.level === "A2"
      ? `The real ${name} marks each of its five sections on a slightly smaller scale, on the same principle; this practice uses the 20-point scale of the higher levels so every level reads the same way.`
      : `The real ${name} works exactly this way.`;
  return (
    `The CILS has five sections, each marked out of ${SECTION_POINTS} (${SECTION_POINTS * 5} in all). You pass with at least ` +
    `${SECTION_PASS} in every section: a strong section can't make up for a weak one. If you pass some sections and not others, ` +
    `the ones you passed can be kept for a limited time while you resit the rest. ${scale}`
  );
}
