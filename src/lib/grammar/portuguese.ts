// The Brazilian Portuguese beta's grammar guides (./pt-guides*.ts, synced from the website),
// loaded on demand: only the Portuguese study tools need them.
import type { PtGrammarGuide } from "./pt-types";

let loading: Promise<PtGrammarGuide[]> | null = null;

export function loadPortugueseGuides(): Promise<PtGrammarGuide[]> {
  if (!loading) {
    loading = import("./pt-guides").then((m) => m.PT_GRAMMAR_GUIDES);
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}
