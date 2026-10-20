// The Celpe-Bras practice exams (./pt, synced from the website), loaded on
// demand: only the Portuguese course's study tools need them.
import type { Exam } from "./types";

let loading: Promise<Exam[]> | null = null;
let loaded: Exam[] | null = null;

export function loadPortugueseExams(): Promise<Exam[]> {
  if (!loading) {
    loading = import("./pt").then((m) => {
      loaded = m.PT_EXAMS;
      return loaded;
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function portugueseExamsIfLoaded(): Exam[] | null {
  return loaded;
}
