// The Italian beta's study tools (the website's /lessons/it/tools, once it
// has one): what the Italian Study Tools screen lists, and whether the
// Italian level picker shows a "Study tools" link at all (only when the
// list isn't empty). The Portuguese course's tools are the model
// (StudyToolsScreen's PORTUGUESE_TOOLS): grammar guides, verb conjugation,
// exam practice (CILS), vocabulary by level, a glossary and a placement
// test.
//
// Only writing practice is here so far: its open tasks are the ones every
// course shares (lib/writingPrompts.ts), marked by the website's Italian
// writing feedback (lib/writingFeedback.ts). The website has no Italian
// grammar guides, conjugation tables, CILS practice tests, vocabulary
// tables or placement test yet. As each arrives through the content sync
// (src/lib/grammar/it-guides*.ts, src/lib/it-conjugation/, src/lib/exams/it/,
// src/lib/it-tools/data/*.json, src/lib/it-placementTest.ts, mirroring the
// pt-* paths), add its entry below, pointing at the screen that shows it.
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";

export type ItalianTool = {
  title: string;
  body: string;
  /** Short name for the level picker's "Study tools" summary ("writing practice"). */
  summary: string;
  open: (navigation: NativeStackNavigationProp<AppStackParamList>) => void;
};

export const ITALIAN_TOOLS: ItalianTool[] = [
  {
    title: "Writing Practice",
    body: "Write anything from a few sentences to a couple of pages and get instant AI feedback at your level.",
    summary: "writing practice",
    open: (n) => n.navigate("Writing", { lang: "it" }),
  },
];

/** "Writing practice." / "Grammar guides, verb conjugation and writing practice." */
export function italianToolsSummary(): string {
  const names = ITALIAN_TOOLS.map((t) => t.summary);
  const list = names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : (names[0] ?? "");
  return list ? `${list[0].toUpperCase()}${list.slice(1)}.` : "";
}
