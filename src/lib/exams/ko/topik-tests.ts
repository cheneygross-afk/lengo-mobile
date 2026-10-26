// Synced from cheneygross-afk/lengo:src/lib/exams/ko/topik-tests.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { TOPIK_I_1_LISTENING } from "./topik-i-1-listening";
import { TOPIK_I_1_READING } from "./topik-i-1-reading";
import { TOPIK_I_2_LISTENING } from "./topik-i-2-listening";
import { TOPIK_I_2_READING } from "./topik-i-2-reading";
import { TOPIK_II_1_LISTENING } from "./topik-ii-1-listening";
import { TOPIK_II_1_WRITING } from "./topik-ii-1-writing";
import { TOPIK_II_1_READING } from "./topik-ii-1-reading";
import { TOPIK_II_2_LISTENING } from "./topik-ii-2-listening";
import { TOPIK_II_2_WRITING } from "./topik-ii-2-writing";
import { TOPIK_II_2_READING } from "./topik-ii-2-reading";

// The four TOPIK practice tests, each a full test in the real format and
// order. TOPIK I is one sitting (1교시: listening, then reading; level
// "A2", the top of what it certifies, for the writing feedback's scale,
// though it has no writing); TOPIK II is two sittings (1교시: listening and
// writing; 2교시: reading; level "B2", the middle of levels 3-6, which is
// the level the writing feedback judges its answers at).
export const TOPIK_I_1: Exam = {
  slug: "topik-i-1",
  level: "A2",
  title: "TOPIK I practice test 1",
  description:
    "A full TOPIK I in the real format: 30 listening questions (shops, a clinic, a bakery that opens at seven, a department store sale) and 40 reading questions (notices, a text message, a class e-mail, short texts on pets, kimchi, walking and a zero-waste shop), scored out of 200 for levels 1 and 2.",
  papers: [TOPIK_I_1_LISTENING, TOPIK_I_1_READING],
};

export const TOPIK_I_2: Exam = {
  slug: "topik-i-2",
  level: "A2",
  title: "TOPIK I practice test 2",
  description:
    "A second full TOPIK I: 30 listening questions (a dry cleaner's, a taxi, a delayed train, a yoga class, a cooking teacher) and 40 reading questions (a cultural event, a cinema ticket, a gym e-mail, texts on diaries, second-hand apps, first birthdays and eating alone), scored out of 200 for levels 1 and 2.",
  papers: [TOPIK_I_2_LISTENING, TOPIK_I_2_READING],
};

export const TOPIK_II_1: Exam = {
  slug: "topik-ii-1",
  level: "B2",
  title: "TOPIK II practice test 1",
  description:
    "A full TOPIK II in the real format: 50 listening questions (from office talk to a documentary on tidal flats and a lecture on the royal annals), writing questions 51-54 (a lost umbrella, sleep, one-person households, using online information well) and 50 reading questions, scored out of 300 for levels 3 to 6.",
  papers: [TOPIK_II_1_LISTENING, TOPIK_II_1_WRITING, TOPIK_II_1_READING],
};

export const TOPIK_II_2: Exam = {
  slug: "topik-ii-2",
  level: "B2",
  title: "TOPIK II practice test 2",
  description:
    "A second full TOPIK II: 50 listening questions (from a broken vacuum cleaner to CPR, dried pollack and the creation of Hangul), writing questions 51-54 (a housewarming, anger, international students, competition) and 50 reading questions, scored out of 300 for levels 3 to 6.",
  papers: [TOPIK_II_2_LISTENING, TOPIK_II_2_WRITING, TOPIK_II_2_READING],
};
