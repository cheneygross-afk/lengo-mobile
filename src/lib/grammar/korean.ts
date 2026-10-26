// The Korean beta's grammar guides (./ko-guides*.ts, synced from the
// website), loaded on demand: only the Korean study tools need them.
import type { KoGrammarGuide } from "./ko-types";

let loading: Promise<KoGrammarGuide[]> | null = null;

export function loadKoreanGuides(): Promise<KoGrammarGuide[]> {
  if (!loading) {
    loading = import("./ko-guides").then((m) => m.KO_GRAMMAR_GUIDES);
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}
