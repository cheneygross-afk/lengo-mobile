// Synced from cheneygross-afk/lengo:src/lib/curriculum/validate.ts by scripts/sync-content.mjs -- edit it there, not here.
// The validator core: every check a lesson must pass before it ships,
// shared by every course. Language-specific rules come in through the
// plugin (grading, normalisation, form detectors, lesson checks). These
// are the checks the Spanish authoring rounds ran by hand (duplicates,
// answer visible, hedging, level leaks) plus the Chinese checker's.

import type { Exercise } from "../lessons/types";
import { allowedAt, buildGraph, checkGraph, type ConceptGraph } from "./graph";
import { exerciseTexts, lessonItems, lessonTexts, promptText } from "./items";
import type { Concept, CourseModule, CoursePlugin, Finding } from "./types";

export type ValidateOptions = {
  /** Fewest final-review exercises in a required lesson. */
  minFinalItems?: number;
  /** Fewest items (difficulty >= 2) that must practise each taught concept. */
  minPracticePerConcept?: number;
};

// Text an author left behind while correcting themselves -- never shown
// to a learner. Kept narrow so real content ("No, I'm not") passes.
const HEDGING = /(?:^|\s)-- no,|keep it simple|\bHmm\b|\bwait:|mejor aún|\bno, better\b|\bI mean\b|\buse: /i;

function structural(e: Exercise, where: string): string[] {
  const out: string[] = [];
  if (!e.explanation || e.explanation.trim().length < 6) out.push("explanation missing or too short");
  switch (e.type) {
    case "multiple-choice":
    case "listen-choose":
      if (e.correctIndex < 0 || e.correctIndex >= e.options.length) out.push("correctIndex out of range");
      if (new Set(e.options).size !== e.options.length) out.push("duplicate options");
      if (e.options.length < 2) out.push("needs at least 2 options");
      break;
    case "multi-select":
      if (!e.correctIndexes.length || e.correctIndexes.some((i) => i < 0 || i >= e.options.length)) out.push("bad correctIndexes");
      if (new Set(e.options).size !== e.options.length) out.push("duplicate options");
      break;
    case "matching":
      if (e.pairs.length < 3) out.push("needs at least 3 pairs");
      if (new Set(e.pairs.map((p) => p.left)).size !== e.pairs.length) out.push("duplicate left side");
      if (new Set(e.pairs.map((p) => p.right)).size !== e.pairs.length) out.push("duplicate right side");
      break;
    case "fill-blank":
      if ((e.sentence.match(/_{3,}/g) ?? []).length !== 1) out.push(`needs exactly one blank: ${e.sentence}`);
      break;
    case "word-order":
      if (e.words.length < 2) out.push("needs at least 2 tiles");
      break;
    case "write":
      if (e.minWords > e.maxWords) out.push("minWords > maxWords");
      break;
    default:
      break;
  }
  return out.map((m) => `${where}: ${e.type}: ${m}`);
}

function answersOf(e: Exercise): string[] | null {
  if (e.type === "fill-blank" || e.type === "translate") return [e.answer, ...(e.altAnswers ?? [])];
  if (e.type === "dictation") return [e.answer ?? e.audio, ...(e.altAnswers ?? [])];
  return null;
}

/** A finding for every problem in the course. Errors block a build. */
export function validateCourse(
  modules: CourseModule[],
  concepts: Concept[],
  plugin: CoursePlugin,
  opts: ValidateOptions = {}
): { findings: Finding[]; graph: ConceptGraph } {
  const minFinal = opts.minFinalItems ?? 5;
  const minPractice = opts.minPracticePerConcept ?? 6;
  const graph = buildGraph(concepts, modules);
  const findings: Finding[] = [...checkGraph(graph)];
  const err = (where: string, message: string) => findings.push({ level: "error", where, message });
  const warn = (where: string, message: string) => findings.push({ level: "warning", where, message });

  const slugs = new Set<string>();
  const seenItems = new Map<string, string>();
  const practice = new Map<string, number>();

  for (const m of modules) {
    for (const l of m.lessons) {
      if (slugs.has(l.slug)) err(l.slug, "duplicate slug");
      slugs.add(l.slug);
      const mins = Number(l.duration.split(" ")[0]);
      if (!(mins >= 4 && mins <= 12)) err(l.slug, `duration ${l.duration} outside 4-12 min`);
      if (!l.sections.length) err(l.slug, "no sections");
      if (!l.optional && l.exercises.length < minFinal) err(l.slug, `only ${l.exercises.length} final exercises (min ${minFinal})`);
      for (const p of plugin.lessonChecks?.(l) ?? []) err(l.slug, p);

      // Hedging / self-correction anywhere in the lesson.
      for (const t of lessonTexts(l)) if (HEDGING.test(t)) err(l.slug, `self-correction left in text: "${t.slice(0, 80)}"`);

      // Concept leaks: target-language forms of concepts not yet taught.
      const allowed = allowedAt(graph, l);
      const target = lessonTexts(l, false).map(plugin.targetText).filter(Boolean);
      for (const d of plugin.detectors) {
        if (allowed.has(d.concept) || !graph.concepts.has(d.concept)) continue;
        const hit = target.find((t) => d.test(t));
        if (!hit) continue;
        const msg = `uses ${d.label} (${d.concept}) before it is taught: "${hit.slice(0, 60)}"`;
        if (d.severity === "error") err(l.slug, msg);
        else warn(l.slug, msg);
      }

      for (const item of lessonItems(l, plugin.typedInTarget)) {
        const e = item.exercise;
        for (const p of structural(e, item.id)) err(l.slug, p);

        // Typed answers the grader can't accept never reach a learner.
        const answers = answersOf(e);
        if (answers && item.production && e.type !== "dictation")
          for (const a of answers) if (!plugin.grade(a, answers).correct) err(item.id, `own answer "${a}" doesn't grade as correct`);

        // Answer visible in the question.
        if (e.type === "fill-blank") {
          const ans = plugin.normalize(e.answer);
          if (ans.length > 1 && plugin.normalize(e.sentence.replace(/_{3,}/, "")).includes(ans))
            warn(item.id, `answer "${e.answer}" is visible in the sentence`);
        }

        // Duplicates anywhere in the course (same prompt and same answer).
        // Keyed on the raw text (not plugin.normalize, which may drop the
        // English or the audio a prompt hinges on).
        const correct = answers?.[0] ?? exerciseTexts(e, false).slice(1, -1).join("|");
        const key = `${e.type}|${promptText(e)}|${correct}`.toLowerCase().replace(/\s+/g, " ").trim();
        if (key.length > 8) {
          const prev = seenItems.get(key);
          if (prev) err(item.id, `duplicates ${prev}`);
          else seenItems.set(key, item.id);
        }

        if (item.difficulty >= 2) for (const c of item.concepts) practice.set(c, (practice.get(c) ?? 0) + 1);
      }
    }
  }

  // Coverage: every taught concept gets enough practice.
  for (const [c] of graph.taughtBy) {
    const n = practice.get(c) ?? 0;
    if (n < minPractice) warn(c, `only ${n} practice items at difficulty 2+ (target ${minPractice})`);
  }
  return { findings, graph };
}

export function formatFindings(findings: Finding[]): string {
  return findings.map((f) => `${f.level === "error" ? "ERROR" : "warn "} ${f.where}: ${f.message}`).join("\n");
}
