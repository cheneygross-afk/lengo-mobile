// The Goethe-Zertifikat practice exams (./de, synced from the website), loaded on
// demand: only the German study tools need them.
import type { Exam } from "./types";

let loading: Promise<Exam[]> | null = null;
let loaded: Exam[] | null = null;

export function loadGermanExams(): Promise<Exam[]> {
  if (!loading) {
    loading = import("./de").then((m) => {
      loaded = m.DE_EXAMS;
      return loaded;
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

export function germanExamsIfLoaded(): Exam[] | null {
  return loaded;
}
