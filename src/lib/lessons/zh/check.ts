// Synced from cheneygross-afk/lengo:src/lib/lessons/zh/check.ts by scripts/sync-content.mjs -- edit it there, not here.
// Structural checks for Chinese lesson data. Pure functions with no app
// dependencies, so they run in this project's tooling or any other one
// the curriculum moves to (see README.md). Run with:
//   node --experimental-strip-types scripts/zh-curriculum.mjs check

import type { Exercise, Lesson } from "../types";
import { gradeChineseAnswer, hasHanzi, pinyinParts } from "./pinyin";

// A tone mark must sit on the right vowel: on a or e if present, on o in
// "ou", otherwise on the last vowel (iu -> u, ui -> i).
const TONED = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/;
const PLAIN: Record<string, string> = {
  ā: "a", á: "a", ǎ: "a", à: "a", ē: "e", é: "e", ě: "e", è: "e", ī: "i", í: "i", ǐ: "i", ì: "i",
  ō: "o", ó: "o", ǒ: "o", ò: "o", ū: "u", ú: "u", ǔ: "u", ù: "u", ǖ: "ü", ǘ: "ü", ǚ: "ü", ǜ: "ü",
};

/** Problems with tone-mark placement in a pinyin string ("" if none). */
export function pinyinMarkProblems(pinyin: string): string[] {
  const problems: string[] = [];
  // Split into vowel clusters; each cluster is one syllable's nucleus.
  for (const m of pinyin.toLowerCase().matchAll(/[aeiouüāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+/g)) {
    const cluster = m[0];
    const marks = [...cluster].filter((c) => TONED.test(c));
    if (marks.length > 1) {
      // Two syllables can share a cluster only across an apostrophe-less
      // boundary we can't see here; flag so a human looks.
      problems.push(`"${cluster}" has ${marks.length} tone marks in one vowel run`);
      continue;
    }
    if (marks.length === 0) continue;
    const plain = [...cluster].map((c) => PLAIN[c] ?? c).join("");
    const markedAt = [...cluster].findIndex((c) => TONED.test(c));
    let expected: number;
    if (plain.includes("a")) expected = plain.indexOf("a");
    else if (plain.includes("e")) expected = plain.indexOf("e");
    else if (plain.includes("ou")) expected = plain.indexOf("o");
    else expected = plain.length - 1;
    if (markedAt !== expected) problems.push(`tone mark misplaced in "${cluster}"`);
  }
  return problems;
}

function exerciseProblems(e: Exercise, where: string): string[] {
  const out: string[] = [];
  const p = (msg: string) => out.push(`${where}: ${e.type}: ${msg}`);
  if (!("explanation" in e) || !e.explanation || e.explanation.length < 6) p("explanation missing or too short");
  switch (e.type) {
    case "multiple-choice":
    case "listen-choose":
      if (e.correctIndex < 0 || e.correctIndex >= e.options.length) p("correctIndex out of range");
      if (new Set(e.options).size !== e.options.length) p("duplicate options");
      break;
    case "multi-select":
      if (!e.correctIndexes.length || e.correctIndexes.some((i) => i < 0 || i >= e.options.length)) p("bad correctIndexes");
      if (new Set(e.options).size !== e.options.length) p("duplicate options");
      break;
    case "matching": {
      if (e.pairs.length < 3) p("needs at least 3 pairs");
      if (new Set(e.pairs.map((x) => x.left)).size !== e.pairs.length) p("duplicate left side");
      if (new Set(e.pairs.map((x) => x.right)).size !== e.pairs.length) p("duplicate right side");
      break;
    }
    case "fill-blank": {
      if ((e.sentence.match(/_{3,}/g) ?? []).length !== 1) p(`needs exactly one blank: ${e.sentence}`);
      for (const a of [e.answer, ...(e.altAnswers ?? [])]) {
        if (!gradeChineseAnswer(a, [e.answer, ...(e.altAnswers ?? [])]).correct) p(`own answer "${a}" doesn't grade as correct`);
        if (!hasHanzi(a)) for (const q of pinyinMarkProblems(a)) p(q);
      }
      break;
    }
    case "translate":
      if (e.direction === "en-es") {
        for (const a of [e.answer, ...(e.altAnswers ?? [])]) {
          if (!gradeChineseAnswer(a, [e.answer, ...(e.altAnswers ?? [])]).correct) p(`own answer "${a}" doesn't grade`);
          if (!hasHanzi(a)) for (const q of pinyinMarkProblems(a)) p(q);
        }
      }
      break;
    case "word-order":
      if (e.words.length < 2) p("needs at least 2 tiles");
      break;
    default:
      break;
  }
  return out;
}

/** Every problem found in a module's lessons; empty means clean. */
export function checkLessons(lessons: Lesson[]): string[] {
  const out: string[] = [];
  const slugs = new Set<string>();
  for (const l of lessons) {
    if (slugs.has(l.slug)) out.push(`${l.slug}: duplicate slug`);
    slugs.add(l.slug);
    if (!l.slug.startsWith("zh-")) out.push(`${l.slug}: slug should start with "zh-"`);
    const mins = Number(l.duration.split(" ")[0]);
    if (!(mins >= 4 && mins <= 12)) out.push(`${l.slug}: odd duration ${l.duration}`);
    if (!l.sections.length) out.push(`${l.slug}: no sections`);
    if (l.exercises.length < 5) out.push(`${l.slug}: only ${l.exercises.length} review exercises`);
    l.sections.forEach((s, si) => {
      for (const ex of s.examples ?? []) {
        if (!hasHanzi(ex.es)) out.push(`${l.slug}: example without characters: ${ex.es}`);
        const py = (ex.en ?? "").split(" -- ")[0];
        if (!ex.en?.includes(" -- ") || !pinyinParts(py)) out.push(`${l.slug}: example needs "pinyin -- meaning": ${ex.en}`);
        else for (const q of pinyinMarkProblems(py)) out.push(`${l.slug}: example ${ex.es}: ${q}`);
      }
      (s.checkpoint ?? []).forEach((e, i) => out.push(...exerciseProblems(e, `${l.slug} §${si + 1} check ${i + 1}`)));
    });
    l.exercises.forEach((e, i) => out.push(...exerciseProblems(e, `${l.slug} ex ${i + 1}`)));
  }
  return out;
}
