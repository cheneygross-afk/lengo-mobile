// The courses whose levels load on demand -- French ("fr/a1" ...) and
// German ("de/a1" ...), see lessons/french.ts and lessons/german.ts -- behind
// one levelPath-keyed interface, for the screens that show a lesson from
// either (the lesson runner, unit tests, review).
import type { Lesson } from "./types";
import type { ModuleUnit } from "./registry";
import { frenchLevelIfLoaded, frenchLevelKeyOf, loadFrenchLevel } from "./french";
import { germanLevelIfLoaded, germanLevelKeyOf, loadGermanLevel } from "./german";

export type LazyLevelData = { levelPath: string; lessons: Lesson[]; units: ModuleUnit[] };

/** True for a French or German level's levelPath ("fr/a1", "de/culture"). */
export function isLazyLevelPath(levelPath: string | undefined | null): levelPath is string {
  return !!levelPath && (frenchLevelKeyOf(levelPath) !== null || germanLevelKeyOf(levelPath) !== null);
}

/** The level if it's been loaded already, without loading it. */
export function lazyLevelIfLoaded(levelPath: string): LazyLevelData | undefined {
  const fr = frenchLevelKeyOf(levelPath);
  if (fr) return frenchLevelIfLoaded(fr);
  const de = germanLevelKeyOf(levelPath);
  if (de) return germanLevelIfLoaded(de);
  return undefined;
}

/** Loads a French or German level; null for any other levelPath. */
export function loadLazyLevel(levelPath: string): Promise<LazyLevelData> | null {
  const fr = frenchLevelKeyOf(levelPath);
  if (fr) return loadFrenchLevel(fr);
  const de = germanLevelKeyOf(levelPath);
  if (de) return loadGermanLevel(de);
  return null;
}
