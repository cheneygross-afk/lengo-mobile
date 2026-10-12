// The German grammar guides (./de-guides*.ts, synced from the website),
// loaded on demand: only the German study tools need them.
import type { DeGrammarGuide } from "./de-types";

let loading: Promise<DeGrammarGuide[]> | null = null;

export function loadGermanGuides(): Promise<DeGrammarGuide[]> {
  if (!loading) {
    loading = import("./de-guides").then((m) => m.DE_GRAMMAR_GUIDES);
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}
