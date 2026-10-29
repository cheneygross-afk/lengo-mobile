// The Italian course's CILS practice exams (./it, synced from the website),
// loaded on demand: only the Italian study tools need them.
import type { Exam } from "./types";

let loading: Promise<Exam[]> | null = null;
let loaded: Exam[] | null = null;

export function loadItalianExams(): Promise<Exam[]> {
  if (!loading) {
    loading = import("./it").then((m) => {
      loaded = m.IT_EXAMS;
      return loaded;
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function italianExamsIfLoaded(): Exam[] | null {
  return loaded;
}
