// The Italian beta's grammar guides (./it-guides*.ts, synced from the
// website), loaded on demand: only the Italian study tools need them.
import type { ItGrammarGuide } from "./it-types";

let loading: Promise<ItGrammarGuide[]> | null = null;

export function loadItalianGuides(): Promise<ItGrammarGuide[]> {
  if (!loading) {
    loading = import("./it-guides").then((m) => m.IT_GRAMMAR_GUIDES);
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}
