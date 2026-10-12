// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_B1_U01 } from "./en-b1-u01";
import { EN_B1_U02 } from "./en-b1-u02";
import { EN_B1_U03 } from "./en-b1-u03";
import { EN_B1_U04 } from "./en-b1-u04";
import { EN_B1_U05 } from "./en-b1-u05";
import { EN_B1_U06 } from "./en-b1-u06";
import { EN_B1_U07 } from "./en-b1-u07";
import { EN_B1_U08 } from "./en-b1-u08";
import { EN_B1_U09 } from "./en-b1-u09";
import { EN_B1_U10 } from "./en-b1-u10";
import { EN_B1_U11 } from "./en-b1-u11";
import { EN_B1_U12 } from "./en-b1-u12";
import { EN_B1_U13 } from "./en-b1-u13";
import { EN_B1_U14 } from "./en-b1-u14";
import { EN_B1_U15 } from "./en-b1-u15";
import { EN_B1_U16 } from "./en-b1-u16";
import { EN_B1_U17 } from "./en-b1-u17";
import { EN_B1_U18 } from "./en-b1-u18";
import { EN_B1_U19 } from "./en-b1-u19";
import { EN_B1_U20 } from "./en-b1-u20";
import { EN_B1_U21 } from "./en-b1-u21";
import { EN_B1_U22 } from "./en-b1-u22";
import { EN_B1_U23 } from "./en-b1-u23";
import { EN_B1_U24 } from "./en-b1-u24";
import { EN_B1_U25 } from "./en-b1-u25";
import { EN_B1_U26 } from "./en-b1-u26";
import { EN_B1_U27 } from "./en-b1-u27";
import { EN_B1_U28 } from "./en-b1-u28";
import { EN_B1_U29 } from "./en-b1-u29";
import { EN_B1_U30 } from "./en-b1-u30";
import { EN_B1_U31 } from "./en-b1-u31";
import { EN_B1_U32 } from "./en-b1-u32";
import { EN_B1_U33 } from "./en-b1-u33";
import { EN_B1_U34 } from "./en-b1-u34";
import { EN_B1_U35 } from "./en-b1-u35";
import { EN_B1_U01_EXTRA } from "./en-b1-u01-extra";
import { EN_B1_U02_EXTRA } from "./en-b1-u02-extra";
import { EN_B1_U03_EXTRA } from "./en-b1-u03-extra";
import { EN_B1_U04_EXTRA } from "./en-b1-u04-extra";
import { EN_B1_U05_EXTRA } from "./en-b1-u05-extra";
import { EN_B1_U06_EXTRA } from "./en-b1-u06-extra";
import { EN_B1_U07_EXTRA } from "./en-b1-u07-extra";
import { EN_B1_U08_EXTRA } from "./en-b1-u08-extra";
import { EN_B1_U09_EXTRA } from "./en-b1-u09-extra";
import { EN_B1_U10_EXTRA } from "./en-b1-u10-extra";
import { EN_B1_U11_EXTRA } from "./en-b1-u11-extra";
import { EN_B1_U12_EXTRA } from "./en-b1-u12-extra";
import { EN_B1_U13_EXTRA } from "./en-b1-u13-extra";
import { EN_B1_U14_EXTRA } from "./en-b1-u14-extra";
import { EN_B1_U15_EXTRA } from "./en-b1-u15-extra";
import { EN_B1_U16_EXTRA } from "./en-b1-u16-extra";
import { EN_B1_U17_EXTRA } from "./en-b1-u17-extra";
import { EN_B1_U18_EXTRA } from "./en-b1-u18-extra";
import { EN_B1_U19_EXTRA } from "./en-b1-u19-extra";
import { EN_B1_U20_EXTRA } from "./en-b1-u20-extra";
import { EN_B1_U21_EXTRA } from "./en-b1-u21-extra";
import { EN_B1_U22_EXTRA } from "./en-b1-u22-extra";
import { EN_B1_U23_EXTRA } from "./en-b1-u23-extra";
import { EN_B1_U24_EXTRA } from "./en-b1-u24-extra";
import { EN_B1_U25_EXTRA } from "./en-b1-u25-extra";
import { EN_B1_U26_EXTRA } from "./en-b1-u26-extra";
import { EN_B1_U27_EXTRA } from "./en-b1-u27-extra";
import { EN_B1_U28_EXTRA } from "./en-b1-u28-extra";

// English for Spanish speakers (beta), B1. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "The Present Perfect Continuous", description: "Talk about actions that started in the past and are still going on, with for, since and how long.", lessons: [...EN_B1_U01, ...EN_B1_U01_EXTRA] },
  { id: "u02", title: "Present Perfect or Past Simple?", description: "Choose between have done and did, the classic problem for Spanish speakers.", lessons: [...EN_B1_U02, ...EN_B1_U02_EXTRA] },
  { id: "u03", title: "Narrative Tenses and the Past Perfect", description: "Tell stories with the past simple, past continuous and past perfect.", lessons: [...EN_B1_U03, ...EN_B1_U03_EXTRA] },
  { id: "u04", title: "Past Habits and Getting Used to Things", description: "Talk about past habits and new routines with used to, would, be used to and get used to.", lessons: [...EN_B1_U04, ...EN_B1_U04_EXTRA] },
  { id: "u05", title: "The Future in All Its Forms", description: "Talk about plans, predictions and arrangements, and use the future continuous and future perfect.", lessons: [...EN_B1_U05, ...EN_B1_U05_EXTRA] },
  { id: "u06", title: "Time Clauses and Real Conditions", description: "Use the present after when, as soon as, unless and in case.", lessons: [...EN_B1_U06, ...EN_B1_U06_EXTRA] },
  { id: "u07", title: "Verb Tenses Review", description: "Mix every tense you have learned in this level so far.", lessons: [...EN_B1_U07, ...EN_B1_U07_EXTRA] },
  { id: "u08", title: "The Second Conditional", description: "Talk about imaginary situations: if I had..., I would...", lessons: [...EN_B1_U08, ...EN_B1_U08_EXTRA] },
  { id: "u09", title: "The Third Conditional and Wishes", description: "Talk about an imaginary past and what you would like to change.", lessons: [...EN_B1_U09, ...EN_B1_U09_EXTRA] },
  { id: "u10", title: "Conditionals in Practice", description: "Use all the conditionals together in real situations.", lessons: [...EN_B1_U10, ...EN_B1_U10_EXTRA] },
  { id: "u11", title: "Obligation, Prohibition and Advice", description: "Give rules and advice with must, have to, don't have to, should, ought to and had better.", lessons: [...EN_B1_U11, ...EN_B1_U11_EXTRA] },
  { id: "u12", title: "Ability, Possibility and Deduction", description: "Talk about ability and possibility, and make deductions with could, be able to, might and must.", lessons: [...EN_B1_U12, ...EN_B1_U12_EXTRA] },
  { id: "u13", title: "Modal Verbs in Practice", description: "Make requests and ask for permission with modals in real situations.", lessons: [...EN_B1_U13, ...EN_B1_U13_EXTRA] },
  { id: "u14", title: "The Passive Voice, Part 1", description: "Use the passive when the action matters more than who does it.", lessons: [...EN_B1_U14, ...EN_B1_U14_EXTRA] },
  { id: "u15", title: "The Passive Voice, Part 2, and the Causative", description: "Use have something done and other useful passive structures.", lessons: [...EN_B1_U15, ...EN_B1_U15_EXTRA] },
  { id: "u16", title: "Defining Relative Clauses", description: "Define people, things and places with who, which, that, where and whose.", lessons: [...EN_B1_U16, ...EN_B1_U16_EXTRA] },
  { id: "u17", title: "Non-Defining Relative Clauses and What", description: "Add extra information with non-defining relative clauses, what, and which at the end of a sentence.", lessons: [...EN_B1_U17, ...EN_B1_U17_EXTRA] },
  { id: "u18", title: "Review: The First Half of the Level", description: "A spiral review of tenses, conditionals, modals, the passive and relative clauses.", lessons: [...EN_B1_U18, ...EN_B1_U18_EXTRA] },
  { id: "u19", title: "Reported Speech: Statements", description: "Report what other people said with said, told and backshifted tenses.", lessons: [...EN_B1_U19, ...EN_B1_U19_EXTRA] },
  { id: "u20", title: "Reported Speech: Questions and Commands", description: "Report questions and commands, and use a range of reporting verbs.", lessons: [...EN_B1_U20, ...EN_B1_U20_EXTRA] },
  { id: "u21", title: "Gerunds and Infinitives", description: "Use verb patterns like enjoy doing and want to do, and -ing after prepositions.", lessons: [...EN_B1_U21, ...EN_B1_U21_EXTRA] },
  { id: "u22", title: "Verb Patterns in Practice", description: "Use remember, stop and try; make and let; and like doing vs would like to.", lessons: [...EN_B1_U22, ...EN_B1_U22_EXTRA] },
  { id: "u23", title: "Advanced Questions", description: "Ask indirect questions, subject questions and question tags, and answer with so do I.", lessons: [...EN_B1_U23, ...EN_B1_U23_EXTRA] },
  { id: "u24", title: "Quantifiers and Intensifiers", description: "Use too, enough, so, such and a wider range of quantifiers.", lessons: [...EN_B1_U24, ...EN_B1_U24_EXTRA] },
  { id: "u25", title: "Articles and Nouns", description: "Choose between the and no article, handle uncountable nouns and make verbs agree.", lessons: [...EN_B1_U25, ...EN_B1_U25_EXTRA] },
  { id: "u26", title: "Phrasal Verbs, Make, Do and Get", description: "Use the most common English verbs and the combinations they form.", lessons: [...EN_B1_U26, ...EN_B1_U26_EXTRA] },
  { id: "u27", title: "Adjectives, Adverbs and Comparisons", description: "Use -ed and -ing adjectives, put adjectives in order and make advanced comparisons.", lessons: [...EN_B1_U27, ...EN_B1_U27_EXTRA] },
  { id: "u28", title: "Linking Words and Writing", description: "Connect ideas in writing with although, despite, however and so that.", lessons: [...EN_B1_U28, ...EN_B1_U28_EXTRA] },
  { id: "u29", title: "Review: The Second Half of the Level", description: "A spiral review of reported speech, verb patterns, questions and nouns.", lessons: EN_B1_U29 },
  { id: "u30", title: "Real-Life Situations: Phone Calls, Banks and Apartments", description: "Role-play everyday tasks in English: phone calls, banking and renting an apartment.", lessons: EN_B1_U30 },
  { id: "u31", title: "Real-Life Situations: Offices, Stores and Work", description: "Handle paperwork, complaints, returns and job interviews in English.", lessons: EN_B1_U31 },
  { id: "u32", title: "Word Networks, Part 1", description: "Learn topic vocabulary for this level and practice it in mixed exercises.", lessons: EN_B1_U32 },
  { id: "u33", title: "Word Networks, Part 2", description: "Learn more topic vocabulary and complete the final circuit.", lessons: EN_B1_U33 },
  { id: "u34", title: "Level Review", description: "Full reviews of everything in this level.", lessons: EN_B1_U34 },
  { id: "u35", title: "Level Challenges and Final Exam", description: "Hint-free challenges and the exit exam for the next level.", lessons: EN_B1_U35 },
];

const LEVEL = buildEnglishLevel("en/b1", UNITS);
export const EN_B1_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_B1_UNITS: UnitOutline[] = LEVEL.units;
