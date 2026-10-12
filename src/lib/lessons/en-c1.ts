// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { buildEnglishLevel, type EnglishUnitDef } from "./en-units";
import { EN_C1_U01 } from "./en-c1-u01";
import { EN_C1_U02 } from "./en-c1-u02";
import { EN_C1_U03 } from "./en-c1-u03";
import { EN_C1_U04 } from "./en-c1-u04";
import { EN_C1_U05 } from "./en-c1-u05";
import { EN_C1_U06 } from "./en-c1-u06";
import { EN_C1_U07 } from "./en-c1-u07";
import { EN_C1_U08 } from "./en-c1-u08";
import { EN_C1_U09 } from "./en-c1-u09";
import { EN_C1_U10 } from "./en-c1-u10";
import { EN_C1_U11 } from "./en-c1-u11";
import { EN_C1_U12 } from "./en-c1-u12";
import { EN_C1_U13 } from "./en-c1-u13";
import { EN_C1_U14 } from "./en-c1-u14";
import { EN_C1_U15 } from "./en-c1-u15";
import { EN_C1_U16 } from "./en-c1-u16";
import { EN_C1_U17 } from "./en-c1-u17";
import { EN_C1_U18 } from "./en-c1-u18";
import { EN_C1_U01_EXTRA } from "./en-c1-u01-extra";
import { EN_C1_U02_EXTRA } from "./en-c1-u02-extra";
import { EN_C1_U03_EXTRA } from "./en-c1-u03-extra";
import { EN_C1_U04_EXTRA } from "./en-c1-u04-extra";
import { EN_C1_U05_EXTRA } from "./en-c1-u05-extra";
import { EN_C1_U06_EXTRA } from "./en-c1-u06-extra";
import { EN_C1_U07_EXTRA } from "./en-c1-u07-extra";
import { EN_C1_U08_EXTRA } from "./en-c1-u08-extra";
import { EN_C1_U09_EXTRA } from "./en-c1-u09-extra";
import { EN_C1_U10_EXTRA } from "./en-c1-u10-extra";
import { EN_C1_U11_EXTRA } from "./en-c1-u11-extra";
import { EN_C1_U12_EXTRA } from "./en-c1-u12-extra";
import { EN_C1_U13_EXTRA } from "./en-c1-u13-extra";
import { EN_C1_U14_EXTRA } from "./en-c1-u14-extra";
import { EN_C1_U15_EXTRA } from "./en-c1-u15-extra";
import { EN_C1_U16_EXTRA } from "./en-c1-u16-extra";

// English for Spanish speakers (beta), C1. Conventions as in en-a1.ts, except that from B1 up
// the teaching text is in English (Spanish words in «guillemets»), mirroring
// the Spanish course's switch to Spanish at B1.

const UNITS: EnglishUnitDef[] = [
  { id: "u01", title: "Inversion", description: "Use negative, conditional and emphatic inversion for formal, rhetorical English.", lessons: [...EN_C1_U01, ...EN_C1_U01_EXTRA] },
  { id: "u02", title: "Cleft Sentences and Emphasis", description: "Highlight information with cleft sentences, fronting and other emphatic structures.", lessons: [...EN_C1_U02, ...EN_C1_U02_EXTRA] },
  { id: "u03", title: "Nominalization", description: "Turn verbs and adjectives into nouns for a compact, formal style.", lessons: [...EN_C1_U03, ...EN_C1_U03_EXTRA] },
  { id: "u04", title: "Ellipsis, Substitution and Cohesion", description: "Avoid repetition with so, do so, one and ellipsis, and link a text together with reference words.", lessons: [...EN_C1_U04, ...EN_C1_U04_EXTRA] },
  { id: "u05", title: "Hedging and Probability", description: "Hedge, distance yourself and express degrees of certainty in speech and writing.", lessons: [...EN_C1_U05, ...EN_C1_U05_EXTRA] },
  { id: "u06", title: "Discourse Markers", description: "Organize, qualify and connect what you say and write with spoken and written discourse markers.", lessons: [...EN_C1_U06, ...EN_C1_U06_EXTRA] },
  { id: "u07", title: "Participle Clauses and Advanced Relative Clauses", description: "Build complex sentences with participle clauses, absolute constructions and formal relative clauses.", lessons: [...EN_C1_U07, ...EN_C1_U07_EXTRA] },
  { id: "u08", title: "Unreal Past and the Subjunctive", description: "Use the unreal past beyond conditionals, and the English subjunctive.", lessons: [...EN_C1_U08, ...EN_C1_U08_EXTRA] },
  { id: "u09", title: "Collocations", description: "Combine words naturally: verb + noun, adjective + noun and dependent prepositions.", lessons: [...EN_C1_U09, ...EN_C1_U09_EXTRA] },
  { id: "u10", title: "Idioms and Figurative Language", description: "Use idioms, binomials, similes and metaphors from everyday English.", lessons: [...EN_C1_U10, ...EN_C1_U10_EXTRA] },
  { id: "u11", title: "Word Formation and False Friends", description: "Use prefixes, suffixes and compounds, and avoid advanced false friends.", lessons: [...EN_C1_U11, ...EN_C1_U11_EXTRA] },
  { id: "u12", title: "Formal and Informal Register", description: "Adapt your tone with the right level of formality, politeness and indirectness.", lessons: [...EN_C1_U12, ...EN_C1_U12_EXTRA] },
  { id: "u13", title: "Formal Emails and Letters", description: "Write emails, complaints, applications and cover letters in professional English.", lessons: [...EN_C1_U13, ...EN_C1_U13_EXTRA] },
  { id: "u14", title: "Reports, Proposals and Essays", description: "Structure and write essays, reports, proposals and reviews in the right style.", lessons: [...EN_C1_U14, ...EN_C1_U14_EXTRA] },
  { id: "u15", title: "Professional English", description: "Handle meetings, presentations, negotiations and feedback at work.", lessons: [...EN_C1_U15, ...EN_C1_U15_EXTRA] },
  { id: "u16", title: "Varieties of English", description: "Understand British, American and other world Englishes.", lessons: [...EN_C1_U16, ...EN_C1_U16_EXTRA] },
  { id: "u17", title: "Level Review", description: "A cumulative review of everything in this level.", lessons: EN_C1_U17 },
  { id: "u18", title: "Level Challenges and Final Exam", description: "Every structure in this level with no hints, and the level's final exam.", lessons: EN_C1_U18 },
];

const LEVEL = buildEnglishLevel("en/c1", UNITS);
export const EN_C1_LESSONS: Lesson[] = LEVEL.lessons;
export const EN_C1_UNITS: UnitOutline[] = LEVEL.units;
