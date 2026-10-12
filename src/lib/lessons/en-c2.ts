// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_C2_U01 } from "./en-c2-u01";
import { EN_C2_U02 } from "./en-c2-u02";
import { EN_C2_U03 } from "./en-c2-u03";
import { EN_C2_U04 } from "./en-c2-u04";
import { EN_C2_U05 } from "./en-c2-u05";
import { EN_C2_U06 } from "./en-c2-u06";
import { EN_C2_U07 } from "./en-c2-u07";
import { EN_C2_U08 } from "./en-c2-u08";
import { EN_C2_U09 } from "./en-c2-u09";
import { EN_C2_U10 } from "./en-c2-u10";
import { EN_C2_U11 } from "./en-c2-u11";
import { EN_C2_U12 } from "./en-c2-u12";
import { EN_C2_U13 } from "./en-c2-u13";
import { EN_C2_U14 } from "./en-c2-u14";
import { EN_C2_U15 } from "./en-c2-u15";
import { EN_C2_U16 } from "./en-c2-u16";
import { EN_C2_U17 } from "./en-c2-u17";
import { EN_C2_U18 } from "./en-c2-u18";
import { EN_C2_U19 } from "./en-c2-u19";
import { EN_C2_U20 } from "./en-c2-u20";
import { EN_C2_U21 } from "./en-c2-u21";
import { EN_C2_U22 } from "./en-c2-u22";
import { EN_C2_U23 } from "./en-c2-u23";
import { EN_C2_U24 } from "./en-c2-u24";
import { EN_C2_U25 } from "./en-c2-u25";
import { EN_C2_U26 } from "./en-c2-u26";
import { EN_C2_U27 } from "./en-c2-u27";
import { EN_C2_U28 } from "./en-c2-u28";
import { EN_C2_U29 } from "./en-c2-u29";
import { EN_C2_U30 } from "./en-c2-u30";
import { EN_C2_U31 } from "./en-c2-u31";
import { EN_C2_U32 } from "./en-c2-u32";
import { EN_C2_U33 } from "./en-c2-u33";
import { EN_C2_U01_EXTRA } from "./en-c2-u01-extra";
import { EN_C2_U02_EXTRA } from "./en-c2-u02-extra";
import { EN_C2_U03_EXTRA } from "./en-c2-u03-extra";
import { EN_C2_U04_EXTRA } from "./en-c2-u04-extra";
import { EN_C2_U05_EXTRA } from "./en-c2-u05-extra";
import { EN_C2_U06_EXTRA } from "./en-c2-u06-extra";
import { EN_C2_U07_EXTRA } from "./en-c2-u07-extra";
import { EN_C2_U08_EXTRA } from "./en-c2-u08-extra";
import { EN_C2_U09_EXTRA } from "./en-c2-u09-extra";
import { EN_C2_U10_EXTRA } from "./en-c2-u10-extra";
import { EN_C2_U11_EXTRA } from "./en-c2-u11-extra";
import { EN_C2_U12_EXTRA } from "./en-c2-u12-extra";
import { EN_C2_U13_EXTRA } from "./en-c2-u13-extra";
import { EN_C2_U14_EXTRA } from "./en-c2-u14-extra";
import { EN_C2_U15_EXTRA } from "./en-c2-u15-extra";
import { EN_C2_U16_EXTRA } from "./en-c2-u16-extra";
import { EN_C2_U17_EXTRA } from "./en-c2-u17-extra";
import { EN_C2_U18_EXTRA } from "./en-c2-u18-extra";
import { EN_C2_U19_EXTRA } from "./en-c2-u19-extra";
import { EN_C2_U20_EXTRA } from "./en-c2-u20-extra";
import { EN_C2_U21_EXTRA } from "./en-c2-u21-extra";
import { EN_C2_U23_EXTRA } from "./en-c2-u23-extra";
import { EN_C2_U24_EXTRA } from "./en-c2-u24-extra";
import { EN_C2_U25_EXTRA } from "./en-c2-u25-extra";
import { EN_C2_U26_EXTRA } from "./en-c2-u26-extra";
import { EN_C2_U28_EXTRA } from "./en-c2-u28-extra";
import { EN_C2_U29_EXTRA } from "./en-c2-u29-extra";
import { EN_C2_U31_EXTRA } from "./en-c2-u31-extra";
import { EN_C2_U32_EXTRA } from "./en-c2-u32-extra";

// English for Spanish speakers (beta), C2. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "Legal and Administrative English", description: "Understand legal language in plain terms, Latin expressions and who's who in a court case.", lessons: [...EN_C2_U01, ...EN_C2_U01_EXTRA] },
  { id: "u02", title: "Contracts and Official Notices", description: "Read clauses, liabilities and notices, and understand the role of a notary.", lessons: [...EN_C2_U02, ...EN_C2_U02_EXTRA] },
  { id: "u03", title: "Medical English", description: "Talk about symptoms, clinical reports, dosage and informed consent.", lessons: [...EN_C2_U03, ...EN_C2_U03_EXTRA] },
  { id: "u04", title: "Idioms", description: "Use idioms with their restrictions and regional variants, and avoid common calques.", lessons: [...EN_C2_U04, ...EN_C2_U04_EXTRA] },
  { id: "u05", title: "Proverbs and Sayings", description: "Complete, compare and quote proverbs, old and regional.", lessons: [...EN_C2_U05, ...EN_C2_U05_EXTRA] },
  { id: "u06", title: "Humor and Wordplay", description: "Understand double meanings, irony and the humor of each English-speaking country.", lessons: [...EN_C2_U06, ...EN_C2_U06_EXTRA] },
  { id: "u07", title: "Metaphor and Figurative Language", description: "Recognize metaphor, metonymy and literary figures, and the figurative language of everyday life.", lessons: [...EN_C2_U07, ...EN_C2_U07_EXTRA] },
  { id: "u08", title: "Euphemisms and Indirect Language", description: "Say delicate things tactfully and understand what is implied but not said.", lessons: [...EN_C2_U08, ...EN_C2_U08_EXTRA] },
  { id: "u09", title: "Exclamations, Emphasis and Word Formation", description: "React like a native speaker and understand what English affixes add.", lessons: [...EN_C2_U09, ...EN_C2_U09_EXTRA] },
  { id: "u10", title: "Business Idioms", description: "Use idioms for meetings, crises and reports.", lessons: [...EN_C2_U10, ...EN_C2_U10_EXTRA] },
  { id: "u11", title: "Listening and Reading Strategies", description: "Guess unknown words, notice shifts in register and follow fast speech.", lessons: [...EN_C2_U11, ...EN_C2_U11_EXTRA] },
  { id: "u12", title: "Skimming, Scanning and Note-Taking", description: "Follow radio interviews, choose the right reading mode and take notes in lectures.", lessons: [...EN_C2_U12, ...EN_C2_U12_EXTRA] },
  { id: "u13", title: "Debate and Persuasion", description: "Concede, rebut, use sophisticated linking words and spot fallacies.", lessons: [...EN_C2_U13, ...EN_C2_U13_EXTRA] },
  { id: "u14", title: "Rhetoric and Closing Arguments", description: "Use rhetorical devices, deliver forceful conclusions and master the vocabulary of debate.", lessons: [...EN_C2_U14, ...EN_C2_U14_EXTRA] },
  { id: "u15", title: "Presentations and Negotiation", description: "Open a talk, move between points and make counteroffers.", lessons: [...EN_C2_U15, ...EN_C2_U15_EXTRA] },
  { id: "u16", title: "Closing the Deal", description: "Read body language, handle Q&A sessions and put agreements in writing.", lessons: [...EN_C2_U16, ...EN_C2_U16_EXTRA] },
  { id: "u17", title: "Quotations and References", description: "Quote sources, choose reporting verbs and handle citations.", lessons: [...EN_C2_U17, ...EN_C2_U17_EXTRA] },
  { id: "u18", title: "Paraphrasing and Literature Reviews", description: "Paraphrase without plagiarizing and write a literature review.", lessons: [...EN_C2_U18, ...EN_C2_U18_EXTRA] },
  { id: "u19", title: "Rhetorical Questions and Emphatic Structures", description: "Tell real questions from rhetorical ones, use hypophora and add emphasis.", lessons: [...EN_C2_U19, ...EN_C2_U19_EXTRA] },
  { id: "u20", title: "Rhetorical Questions in Speeches", description: "Answer rhetorical questions and prepare a one-minute speech.", lessons: [...EN_C2_U20, ...EN_C2_U20_EXTRA] },
  { id: "u21", title: "Job Interviews", description: "Talk about strengths and weaknesses and answer with the STAR method.", lessons: [...EN_C2_U21, ...EN_C2_U21_EXTRA] },
  { id: "u22", title: "Job Interviews: The Full Mock Interview", description: "Avoid typical mistakes, use résumé vocabulary and handle a complete interview.", lessons: EN_C2_U22 },
  { id: "u23", title: "Conflict Resolution and Mediation", description: "De-escalate, acknowledge without giving in and apologize sincerely.", lessons: [...EN_C2_U23, ...EN_C2_U23_EXTRA] },
  { id: "u24", title: "Historical Narrative", description: "Use the tenses of historical narrative and free indirect speech.", lessons: [...EN_C2_U24, ...EN_C2_U24_EXTRA] },
  { id: "u25", title: "Writing History", description: "Use narrative linking words, the historian's voice, an academic register and periodization.", lessons: [...EN_C2_U25, ...EN_C2_U25_EXTRA] },
  { id: "u26", title: "Science and Technology", description: "Use the language of hypotheses, innovation and popular science.", lessons: [...EN_C2_U26, ...EN_C2_U26_EXTRA] },
  { id: "u27", title: "The Environment and Politics", description: "Use climate vocabulary and recognize polarized and deliberative language.", lessons: EN_C2_U27 },
  { id: "u28", title: "Philosophy and Abstract Ideas", description: "Discuss free will, use abstract nouns and analyze arguments.", lessons: [...EN_C2_U28, ...EN_C2_U28_EXTRA] },
  { id: "u29", title: "Psychology and Complex Emotions", description: "Describe ambivalence and mixed feelings, and name emotions precisely.", lessons: [...EN_C2_U29, ...EN_C2_U29_EXTRA] },
  { id: "u30", title: "Art, Film and Literary Criticism", description: "Discuss plot, characters and film language, and evaluate a work with precise adjectives.", lessons: EN_C2_U30 },
  { id: "u31", title: "Business and Economics", description: "Talk about cause and effect, financial statements, inflation and mergers.", lessons: [...EN_C2_U31, ...EN_C2_U31_EXTRA] },
  { id: "u32", title: "Creative Writing", description: "Use foreshadowing and sensory imagery, and write a 100-word micro-story.", lessons: [...EN_C2_U32, ...EN_C2_U32_EXTRA] },
  { id: "u33", title: "Level Review and Final Exam", description: "General reviews, level challenges and the proficiency exam.", lessons: EN_C2_U33 },
];

const LEVEL = buildEnglishLevel("en/c2", UNITS);
export const EN_C2_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_C2_UNITS: UnitOutline[] = LEVEL.units;
