// The Italian beta's study tools (the website's /lessons/it/tools): what the
// Italian Study Tools screen lists, and whether the Italian level picker
// shows a "Study tools" link at all (only when the list isn't empty). The
// Portuguese course's tools are the model (StudyToolsScreen's
// PORTUGUESE_TOOLS), in the website's order.
//
// Each tool is here once its data reaches the app through the content sync:
// grammar guides (src/lib/grammar/it-guides*.ts), the conjugation engine
// (src/lib/it-conjugation/), the vocabulary and lesson tables
// (src/lib/it-tools/data/*.json), the glossary's grammar terms and false
// friends (src/lib/it-tools/glossaryTerms.ts), the Articles & Prepositions
// and Pronunciation & Spelling tables and drills
// (src/lib/it-tools/articles.ts, pronunciation.ts), the CILS practice exams
// (src/lib/exams/it/) and the placement test (src/lib/it-placementTest.ts).
// Writing practice marks the open tasks every course shares
// (lib/writingPrompts.ts) plus the lessons' Italian writing tasks, with the
// website's Italian writing feedback.
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AppStackParamList } from "@/navigation/types";

export type ItalianTool = {
  title: string;
  body: string;
  /** Short name for the level picker's "Study tools" summary ("writing practice"). */
  summary: string;
  /** Shown apart, under "Your level" (the placement test, never required). */
  placement?: boolean;
  open: (navigation: NativeStackNavigationProp<AppStackParamList>) => void;
};

export const ITALIAN_TOOLS: ItalianTool[] = [
  {
    title: "Grammar Guides",
    body: "Short explanations of the grammar points learners get stuck on, from articles and essere or avere to the subjunctive and the passato remoto.",
    summary: "grammar guides",
    open: (n) => n.navigate("Grammar", { lang: "it" }),
  },
  {
    title: "Verb Conjugation",
    body: "Full tables for any verb with the irregular forms and the auxiliary marked, plus drills by tense.",
    summary: "verb conjugation",
    open: (n) => n.navigate("ItalianConjugation"),
  },
  {
    title: "Articles & Prepositions",
    body: "Il, lo, la, l', gli and the fused prepositions (del, al, nel, sul) at a glance, with practice for the choices that trip learners up.",
    summary: "articles and prepositions",
    open: (n) => n.navigate("ItalianArticles"),
  },
  {
    title: "Pronunciation & Spelling",
    body: "How Italian letters sound, double consonants, stress and written accents, with audio for every example.",
    summary: "pronunciation and spelling",
    open: (n) => n.navigate("ItalianPronunciation"),
  },
  {
    title: "Writing Practice",
    body: "Write anything from a sentence to a couple of pages and get instant AI feedback at your level, with open tasks for every level and every writing task from the lessons.",
    summary: "writing practice",
    open: (n) => n.navigate("Writing", { lang: "it" }),
  },
  {
    title: "CILS Practice",
    body: "Practice exams in the format of the CILS, the Italian proficiency exam of the Università per Stranieri di Siena, from CILS A1 to CILS QUATTRO.",
    summary: "CILS practice exams",
    open: (n) => n.navigate("Exams", { course: "it" }),
  },
  {
    title: "Vocabulary by Level",
    body: "Every word and phrase the course teaches, Beginner to Mastery and the culture lessons, with audio, meanings and the lesson each comes from. Add a whole level to your flashcards.",
    summary: "vocabulary by level",
    open: (n) => n.navigate("ItalianGlossary", { level: "a1" }),
  },
  {
    title: "Glossary",
    body: "Grammar terms in plain English, the false friends that trip up English speakers, and any word taught in the course with the lessons it comes from.",
    summary: "a glossary with false friends",
    open: (n) => n.navigate("ItalianGlossary"),
  },
  {
    title: "Placement Test",
    body: "Find your level, retake anytime. Optional: you can start at any level without it.",
    summary: "a placement test",
    placement: true,
    open: (n) => n.navigate("ItalianPlacement"),
  },
];

/** "Writing practice." / "Grammar guides, verb conjugation and writing practice." */
export function italianToolsSummary(): string {
  const names = ITALIAN_TOOLS.map((t) => t.summary);
  const list = names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : (names[0] ?? "");
  return list ? `${list[0].toUpperCase()}${list.slice(1)}.` : "";
}
