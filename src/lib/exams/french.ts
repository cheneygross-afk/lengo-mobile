// The DELF/DALF practice exams (./fr, synced from the website), loaded on
// demand: only the French study tools need them.
import type { Exam } from "./types";

let loading: Promise<Exam[]> | null = null;
let loaded: Exam[] | null = null;

export function loadFrenchExams(): Promise<Exam[]> {
  if (!loading) {
    loading = import("./fr").then((m) => {
      loaded = m.FR_EXAMS;
      return loaded;
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function frenchExamsIfLoaded(): Exam[] | null {
  return loaded;
}
