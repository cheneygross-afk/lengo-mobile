// The Korean beta's TOPIK practice tests (./ko, synced from the website),
// loaded on demand: only the Korean study tools need them.
import type { Exam } from "./types";

let loading: Promise<Exam[]> | null = null;
let loaded: Exam[] | null = null;

export function loadKoreanExams(): Promise<Exam[]> {
  if (!loading) {
    loading = import("./ko").then((m) => {
      loaded = m.KO_EXAMS;
      return loaded;
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function koreanExamsIfLoaded(): Exam[] | null {
  return loaded;
}
