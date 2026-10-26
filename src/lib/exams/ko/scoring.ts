// Synced from cheneygross-afk/lengo:src/lib/exams/ko/scoring.ts by scripts/sync-content.mjs -- edit it there, not here.
// Marking for the TOPIK practice tests of the Korean course, following the
// real Test of Proficiency in Korean (run by NIIED, the National Institute
// for International Education of Korea's Ministry of Education):
// - TOPIK I: listening (30 questions) and reading (40 questions), each
//   section out of 100, 200 in all. Level 1 from 80 points, level 2 from
//   140; below 80, no level.
// - TOPIK II: listening (50 questions), writing (questions 51-54) and
//   reading (50 questions), each out of 100, 300 in all. Level 3 from 120,
//   level 4 from 150, level 5 from 190, level 6 from 230; below 120, no
//   level.
// There's no minimum per section: only the total decides the level.
//
// The shared exam framework (../scoring.ts) marks every paper out of 25;
// here that is a section's 100 points divided by 4. Questions carry their
// real weight (`points` on each item: 3 or 4 in TOPIK I listening, 2 or 3
// in TOPIK I reading, 2 in TOPIK II), and the four writing questions
// theirs (10, 10, 30 and 50 points), so a section's 25 points times 4 give
// back its TOPIK score.
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

/** Every TOPIK section is scored out of 100. */
export const SECTION_POINTS = 100;

/** Descriptors for the 1-5 mark given to a writing question, after the
 * three TOPIK writing criteria: content and task (내용 및 과제 수행),
 * organisation (글의 전개 구조) and language use (언어 사용). */
export const KO_TASK_MARKS: { mark: number; label: string; hint: string }[] = [
  { mark: 1, label: "1", hint: "Task not done: off topic, far too short, or hard to understand" },
  { mark: 2, label: "2", hint: "Partly done: some of what was asked, weak order, errors that get in the way" },
  { mark: 3, label: "3", hint: "Done: everything asked, in a clear order, errors that rarely get in the way" },
  { mark: 4, label: "4", hint: "Done well: well organised, a written style (-다) kept throughout, good range, few errors" },
  { mark: 5, label: "5", hint: "Very good: complete, cohesive and natural, with wide and accurate written Korean" },
];

export type TopikKind = "I" | "II";

/** TOPIK I tests have slugs "topik-i-…", TOPIK II "topik-ii-…". */
export function topikKind(exam: Exam): TopikKind {
  return exam.slug.startsWith("topik-ii-") ? "II" : "I";
}

/** The levels each test certifies and the total each needs. */
export const TOPIK_LEVELS: Record<TopikKind, { level: number; from: number }[]> = {
  I: [
    { level: 1, from: 80 },
    { level: 2, from: 140 },
  ],
  II: [
    { level: 3, from: 120 },
    { level: 4, from: 150 },
    { level: 5, from: 190 },
    { level: 6, from: 230 },
  ],
};

/** The course level that teaches up to each TOPIK level (learner-visible
 * names, with the level's URL segment). */
export const COURSE_FOR_LEVEL: Record<number, { name: string; path: string }> = {
  1: { name: "Beginner", path: "a1" },
  2: { name: "Elementary", path: "a2" },
  3: { name: "Intermediate", path: "b1" },
  4: { name: "Upper Intermediate", path: "b2" },
  5: { name: "Advanced", path: "c1" },
  6: { name: "Mastery", path: "c2" },
};

/** A section's 25 shared points as its TOPIK score out of 100. */
export function sectionScore(points: number): number {
  return Math.round((points / PAPER_POINTS) * SECTION_POINTS);
}

export function totalPoints(exam: Exam): number {
  return exam.papers.length * SECTION_POINTS;
}

/** The TOPIK level a total reaches, or null below the lowest. */
export function topikLevel(kind: TopikKind, total: number): number | null {
  const band = [...TOPIK_LEVELS[kind]].reverse().find((b) => total >= b.from);
  return band ? band.level : null;
}

export type TopikResult = {
  kind: TopikKind;
  sections: { paper: ExamPaper; score: number | null }[];
  total: number;
  max: number;
  /** Every section has a score. */
  complete: boolean;
  /** The level the total reaches, once every section is done. */
  level: number | null;
};

/** Each section's score out of 100, the total and the level, from
 * whatever sections are done. `scores` maps paper id to its 25 points. */
export function topikResult(exam: Exam, scores: Record<string, number | undefined>): TopikResult {
  const kind = topikKind(exam);
  const sections = exam.papers.map((paper) => {
    const p = scores[paper.id];
    return { paper, score: p === undefined ? null : sectionScore(p) };
  });
  const complete = sections.length > 0 && sections.every((s) => s.score !== null);
  const total = sections.reduce((s, x) => s + (x.score ?? 0), 0);
  return { kind, sections, total, max: totalPoints(exam), complete, level: complete ? topikLevel(kind, total) : null };
}

/** How the real test is scored, for the test page. */
export function topikPassMarkExplanation(exam: Exam): string {
  const kind = topikKind(exam);
  const bands = TOPIK_LEVELS[kind].map((b) => `level ${b.level} from ${b.from}`).join(", ");
  return kind === "I"
    ? "TOPIK I has two sections, listening and reading, each scored out of 100 (200 in all). Listening questions are worth 3 or 4 " +
        "points and reading questions 2 or 3, as in the real test. The total decides the level: " +
        `${bands}; below 80 there is no level. There is no minimum per section.`
    : "TOPIK II has three sections, listening, writing and reading, each scored out of 100 (300 in all). Every listening and " +
        "reading question is worth 2 points; in writing, questions 51 and 52 are worth 10 points each, 53 is worth 30 and 54 is " +
        `worth 50. The total decides the level: ${bands}; below 120 there is no level. There is no minimum per section.`;
}
