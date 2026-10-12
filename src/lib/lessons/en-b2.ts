// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_B2_U01 } from "./en-b2-u01";
import { EN_B2_U02 } from "./en-b2-u02";
import { EN_B2_U03 } from "./en-b2-u03";
import { EN_B2_U04 } from "./en-b2-u04";
import { EN_B2_U05 } from "./en-b2-u05";
import { EN_B2_U06 } from "./en-b2-u06";
import { EN_B2_U07 } from "./en-b2-u07";
import { EN_B2_U08 } from "./en-b2-u08";
import { EN_B2_U09 } from "./en-b2-u09";
import { EN_B2_U10 } from "./en-b2-u10";
import { EN_B2_U11 } from "./en-b2-u11";
import { EN_B2_U12 } from "./en-b2-u12";
import { EN_B2_U13 } from "./en-b2-u13";
import { EN_B2_U14 } from "./en-b2-u14";
import { EN_B2_U15 } from "./en-b2-u15";
import { EN_B2_U16 } from "./en-b2-u16";
import { EN_B2_U17 } from "./en-b2-u17";
import { EN_B2_U18 } from "./en-b2-u18";
import { EN_B2_U19 } from "./en-b2-u19";
import { EN_B2_U20 } from "./en-b2-u20";
import { EN_B2_U21 } from "./en-b2-u21";
import { EN_B2_U22 } from "./en-b2-u22";
import { EN_B2_U23 } from "./en-b2-u23";
import { EN_B2_U24 } from "./en-b2-u24";
import { EN_B2_U25 } from "./en-b2-u25";
import { EN_B2_U26 } from "./en-b2-u26";
import { EN_B2_U27 } from "./en-b2-u27";
import { EN_B2_U28 } from "./en-b2-u28";
import { EN_B2_U29 } from "./en-b2-u29";
import { EN_B2_U30 } from "./en-b2-u30";
import { EN_B2_U01_EXTRA } from "./en-b2-u01-extra";
import { EN_B2_U02_EXTRA } from "./en-b2-u02-extra";
import { EN_B2_U03_EXTRA } from "./en-b2-u03-extra";
import { EN_B2_U04_EXTRA } from "./en-b2-u04-extra";
import { EN_B2_U05_EXTRA } from "./en-b2-u05-extra";
import { EN_B2_U06_EXTRA } from "./en-b2-u06-extra";
import { EN_B2_U07_EXTRA } from "./en-b2-u07-extra";
import { EN_B2_U08_EXTRA } from "./en-b2-u08-extra";
import { EN_B2_U09_EXTRA } from "./en-b2-u09-extra";
import { EN_B2_U10_EXTRA } from "./en-b2-u10-extra";
import { EN_B2_U11_EXTRA } from "./en-b2-u11-extra";
import { EN_B2_U12_EXTRA } from "./en-b2-u12-extra";
import { EN_B2_U13_EXTRA } from "./en-b2-u13-extra";
import { EN_B2_U14_EXTRA } from "./en-b2-u14-extra";
import { EN_B2_U15_EXTRA } from "./en-b2-u15-extra";
import { EN_B2_U16_EXTRA } from "./en-b2-u16-extra";
import { EN_B2_U17_EXTRA } from "./en-b2-u17-extra";
import { EN_B2_U18_EXTRA } from "./en-b2-u18-extra";
import { EN_B2_U19_EXTRA } from "./en-b2-u19-extra";
import { EN_B2_U20_EXTRA } from "./en-b2-u20-extra";
import { EN_B2_U21_EXTRA } from "./en-b2-u21-extra";
import { EN_B2_U22_EXTRA } from "./en-b2-u22-extra";
import { EN_B2_U23_EXTRA } from "./en-b2-u23-extra";
import { EN_B2_U24_EXTRA } from "./en-b2-u24-extra";
import { EN_B2_U25_EXTRA } from "./en-b2-u25-extra";
import { EN_B2_U26_EXTRA } from "./en-b2-u26-extra";
import { EN_B2_U27_EXTRA } from "./en-b2-u27-extra";
import { EN_B2_U28_EXTRA } from "./en-b2-u28-extra";
import { EN_B2_U29_EXTRA } from "./en-b2-u29-extra";

// English for Spanish speakers (beta), B2. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "Narrative Tenses", description: "Tell stories in the past: review the past simple, continuous and perfect, and learn the past perfect continuous.", lessons: [...EN_B2_U01, ...EN_B2_U01_EXTRA] },
  { id: "u02", title: "Narrative Tenses in Practice", description: "Tell, listen to and correct stories in the past.", lessons: [...EN_B2_U02, ...EN_B2_U02_EXTRA] },
  { id: "u03", title: "Future Forms", description: "Use will, going to, the present continuous, the future continuous and the future perfect.", lessons: [...EN_B2_U03, ...EN_B2_U03_EXTRA] },
  { id: "u04", title: "The Future in Practice", description: "Talk about plans, predictions and deadlines in real situations.", lessons: [...EN_B2_U04, ...EN_B2_U04_EXTRA] },
  { id: "u05", title: "Conditionals: The Third and Mixed Conditionals", description: "Talk about an imaginary past: if I had known, I would have come.", lessons: [...EN_B2_U05, ...EN_B2_U05_EXTRA] },
  { id: "u06", title: "Conditionals in Practice", description: "Use if in real situations, advice and conversations.", lessons: [...EN_B2_U06, ...EN_B2_U06_EXTRA] },
  { id: "u07", title: "Wishes and Regrets", description: "Express wishes and regrets with I wish, if only and should have.", lessons: [...EN_B2_U07, ...EN_B2_U07_EXTRA] },
  { id: "u08", title: "Deduction with Modals", description: "Make deductions about the present and the past with must be, can't have been and might have.", lessons: [...EN_B2_U08, ...EN_B2_U08_EXTRA] },
  { id: "u09", title: "Modals and Regrets in Practice", description: "Deduce, regret and criticize in real situations.", lessons: [...EN_B2_U09, ...EN_B2_U09_EXTRA] },
  { id: "u10", title: "The Advanced Passive", description: "Use the passive in every tense, with modals and with get.", lessons: [...EN_B2_U10, ...EN_B2_U10_EXTRA] },
  { id: "u11", title: "The Impersonal Passive and the Causative", description: "Use it is said that..., he is believed to... and have something done.", lessons: [...EN_B2_U11, ...EN_B2_U11_EXTRA] },
  { id: "u12", title: "Reporting Verbs", description: "Go beyond say and tell with suggest, deny, accuse and persuade.", lessons: [...EN_B2_U12, ...EN_B2_U12_EXTRA] },
  { id: "u13", title: "Indirect Questions and Question Forms", description: "Ask polite indirect questions (Could you tell me where...?), negative questions and question tags.", lessons: [...EN_B2_U13, ...EN_B2_U13_EXTRA] },
  { id: "u14", title: "Non-Defining Relative Clauses", description: "Use which, whose and whom, and the commas that change the meaning.", lessons: [...EN_B2_U14, ...EN_B2_U14_EXTRA] },
  { id: "u15", title: "The Passive, Reported Speech and Relative Clauses in Practice", description: "Understand and write news, reports and descriptions with this level's structures.", lessons: [...EN_B2_U15, ...EN_B2_U15_EXTRA] },
  { id: "u16", title: "Advanced Gerunds and Infinitives", description: "Remember doing or remember to do: verbs that change their meaning.", lessons: [...EN_B2_U16, ...EN_B2_U16_EXTRA] },
  { id: "u17", title: "Linking Words for Contrast and Purpose", description: "Use although, despite, whereas, so that and in order to.", lessons: [...EN_B2_U17, ...EN_B2_U17_EXTRA] },
  { id: "u18", title: "Writing with Linking Words", description: "Write formal emails and opinion essays in the right register.", lessons: [...EN_B2_U18, ...EN_B2_U18_EXTRA] },
  { id: "u19", title: "Verb Patterns and Linking Words in Practice", description: "Use gerunds, infinitives and linking words in real contexts.", lessons: [...EN_B2_U19, ...EN_B2_U19_EXTRA] },
  { id: "u20", title: "Emphasis and Cleft Sentences", description: "Add emphasis with What I need is..., It was Ana who..., so and such.", lessons: [...EN_B2_U20, ...EN_B2_U20_EXTRA] },
  { id: "u21", title: "Comparing and Quantifying", description: "Compare and quantify with the more..., the better; far better; both, neither, each and every.", lessons: [...EN_B2_U21, ...EN_B2_U21_EXTRA] },
  { id: "u22", title: "Emphasis and Comparisons in Practice", description: "Express yourself forcefully and compare precisely.", lessons: [...EN_B2_U22, ...EN_B2_U22_EXTRA] },
  { id: "u23", title: "Mixed Review: The Level So Far", description: "Themed reviews that mix all the grammar of this level.", lessons: [...EN_B2_U23, ...EN_B2_U23_EXTRA] },
  { id: "u24", title: "Vocabulary: Work, Money and Society", description: "Learn topic vocabulary and collocations for work, money and society.", lessons: [...EN_B2_U24, ...EN_B2_U24_EXTRA] },
  { id: "u25", title: "Vocabulary: Technology, Media and the Environment", description: "Learn vocabulary for talking about technology, the media and nature.", lessons: [...EN_B2_U25, ...EN_B2_U25_EXTRA] },
  { id: "u26", title: "Vocabulary: Mind, Health and Relationships", description: "Talk about emotions, personality and health, and use common idioms.", lessons: [...EN_B2_U26, ...EN_B2_U26_EXTRA] },
  { id: "u27", title: "Vocabulary: Travel, the City and Home", description: "Learn topic vocabulary for traveling and everyday life.", lessons: [...EN_B2_U27, ...EN_B2_U27_EXTRA] },
  { id: "u28", title: "Vocabulary: Phrasal Verbs and Collocations", description: "Use the most useful phrasal verbs and collocations at this level.", lessons: [...EN_B2_U28, ...EN_B2_U28_EXTRA] },
  { id: "u29", title: "Level Review", description: "Full reviews of everything in this level.", lessons: [...EN_B2_U29, ...EN_B2_U29_EXTRA] },
  { id: "u30", title: "Level Challenges and Final Exam", description: "Hint-free challenges and the exit exam for the next level.", lessons: EN_B2_U30 },
];

const LEVEL = buildEnglishLevel("en/b2", UNITS);
export const EN_B2_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_B2_UNITS: UnitOutline[] = LEVEL.units;
