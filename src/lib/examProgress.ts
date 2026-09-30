// A learner's DELE practice exam attempts (see src/lib/exams), kept on
// this device like other per-device practice state -- the mobile port of
// the website's src/lib/examProgress.ts (same key and shape). Only the
// latest attempt at each paper is kept.
import type { ExamAnswers } from "@/lib/exams/scoring";
import { readJSON, writeJSON } from "@/lib/storage/asyncStore";

export type PaperProgress = {
  answers: ExamAnswers;
  /** 1-5 mark per task, for writing and speaking papers. */
  marks: (number | undefined)[];
  /** Points out of 25 once the paper has been marked. */
  points?: number;
  finishedAt?: number;
};

const KEY = "deepend-exam-progress";

type Store = Record<string, PaperProgress>;

async function load(): Promise<Store> {
  const parsed = await readJSON<Store>(KEY, {});
  return parsed && typeof parsed === "object" ? parsed : {};
}

const keyOf = (examSlug: string, paperId: string) => `${examSlug}/${paperId}`;

export async function loadPaperProgress(examSlug: string, paperId: string): Promise<PaperProgress | null> {
  return (await load())[keyOf(examSlug, paperId)] ?? null;
}

export async function savePaperProgress(examSlug: string, paperId: string, progress: PaperProgress | null): Promise<void> {
  const store = await load();
  if (progress) store[keyOf(examSlug, paperId)] = progress;
  else delete store[keyOf(examSlug, paperId)];
  await writeJSON(KEY, store);
}

/** Points per paper id for the papers of an exam that have been marked. */
export async function loadExamScores(examSlug: string): Promise<Record<string, number | undefined>> {
  const out: Record<string, number | undefined> = {};
  for (const [key, p] of Object.entries(await load())) {
    const [slug, paperId] = key.split("/");
    if (slug === examSlug && typeof p.points === "number") out[paperId] = p.points;
  }
  return out;
}
