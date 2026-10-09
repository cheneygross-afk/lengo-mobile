// The French grammar guides (./fr-guides*.ts, synced from the website),
// loaded on demand: only the French study tools need them.
import type { FrGrammarGuide } from "./fr-types";

let loading: Promise<FrGrammarGuide[]> | null = null;

export function loadFrenchGuides(): Promise<FrGrammarGuide[]> {
  if (!loading) {
    loading = import("./fr-guides").then((m) => m.FR_GRAMMAR_GUIDES);
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}
