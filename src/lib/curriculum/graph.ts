// Synced from cheneygross-afk/lengo:src/lib/curriculum/graph.ts by scripts/sync-content.mjs -- edit it there, not here.
// The concept graph: prerequisite checks, teaching order, and what a
// learner may meet at any point in the course.

import type { Lesson } from "../lessons/types";
import type { Concept, CourseModule, Finding } from "./types";

export type ConceptGraph = {
  concepts: Map<string, Concept>;
  /** concept id -> slug of the one lesson that teaches it. */
  taughtBy: Map<string, string>;
  /** slug -> position in course order (0-based, across modules). */
  position: Map<string, number>;
  /** Every lesson in course order. */
  order: Lesson[];
  /** Module codes that have lessons. */
  levels: Set<string>;
};

export function buildGraph(concepts: Concept[], modules: CourseModule[]): ConceptGraph {
  const map = new Map(concepts.map((c) => [c.id, c]));
  const order = modules.flatMap((m) => m.lessons);
  const position = new Map(order.map((l, i) => [l.slug, i]));
  const taughtBy = new Map<string, string>();
  for (const l of order) for (const c of l.teaches ?? []) if (!taughtBy.has(c)) taughtBy.set(c, l.slug);
  return { concepts: map, taughtBy, position, order, levels: new Set(modules.filter((m) => m.lessons.length).map((m) => m.code)) };
}

/** Concepts taught up to and including the lesson at `slug`. */
export function taughtThrough(g: ConceptGraph, slug: string): Set<string> {
  const at = g.position.get(slug);
  const out = new Set<string>();
  if (at === undefined) return out;
  for (const [c, s] of g.taughtBy) if ((g.position.get(s) ?? Infinity) <= at) out.add(c);
  return out;
}

/** Concepts a lesson may use: everything taught so far, plus its own previews. */
export function allowedAt(g: ConceptGraph, lesson: Lesson): Set<string> {
  const out = taughtThrough(g, lesson.slug);
  for (const c of lesson.previews ?? []) out.add(c);
  return out;
}

/** Concepts in prerequisite order (Kahn's algorithm); throws on a cycle. */
export function topoSort(concepts: Concept[]): Concept[] {
  const byId = new Map(concepts.map((c) => [c.id, c]));
  const indegree = new Map(concepts.map((c) => [c.id, 0]));
  for (const c of concepts) for (const r of c.requires ?? []) if (byId.has(r)) indegree.set(c.id, (indegree.get(c.id) ?? 0) + 1);
  const ready = concepts.filter((c) => indegree.get(c.id) === 0);
  const out: Concept[] = [];
  while (ready.length) {
    const c = ready.shift()!;
    out.push(c);
    for (const d of concepts) {
      if (!(d.requires ?? []).includes(c.id)) continue;
      const n = (indegree.get(d.id) ?? 0) - 1;
      indegree.set(d.id, n);
      if (n === 0) ready.push(d);
    }
  }
  if (out.length !== concepts.length) {
    const stuck = concepts.filter((c) => !out.includes(c)).map((c) => c.id);
    throw new Error(`concept graph has a cycle among: ${stuck.join(", ")}`);
  }
  return out;
}

/** Structural problems with the graph and how lessons are tagged against it. */
export function checkGraph(g: ConceptGraph): Finding[] {
  const out: Finding[] = [];
  const err = (where: string, message: string) => out.push({ level: "error", where, message });
  const warn = (where: string, message: string) => out.push({ level: "warning", where, message });
  try {
    topoSort([...g.concepts.values()]);
  } catch (e) {
    err("graph", (e as Error).message);
  }
  for (const c of g.concepts.values()) {
    for (const r of c.requires ?? []) if (!g.concepts.has(r)) err(c.id, `requires unknown concept ${r}`);
    const slug = g.taughtBy.get(c.id);
    if (!slug) {
      // Only a gap once the concept's own module has lessons.
      if (g.levels.has(c.level)) warn(c.id, "not taught by any lesson yet");
      continue;
    }
    for (const r of c.requires ?? []) {
      const rs = g.taughtBy.get(r);
      if (!rs || (g.position.get(rs) ?? Infinity) > (g.position.get(slug) ?? -1))
        err(c.id, `taught in ${slug} before its prerequisite ${r}${rs ? ` (${rs})` : ""}`);
    }
  }
  const seen = new Map<string, string>();
  for (const l of g.order) {
    for (const c of [...(l.teaches ?? []), ...(l.reviews ?? []), ...(l.previews ?? [])])
      if (!g.concepts.has(c)) err(l.slug, `tags unknown concept ${c}`);
    for (const c of l.teaches ?? []) {
      if (seen.has(c)) err(l.slug, `teaches ${c}, already taught in ${seen.get(c)}`);
      else seen.set(c, l.slug);
    }
    const allowed = taughtThrough(g, l.slug);
    for (const c of l.reviews ?? []) if (!allowed.has(c)) err(l.slug, `reviews ${c} before it is taught`);
  }
  return out;
}
