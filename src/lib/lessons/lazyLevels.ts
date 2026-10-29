// The courses whose levels load on demand -- French ("fr/a1" ...), German
// ("de/a1" ...), the Brazilian Portuguese course ("pt/a1" ...), the
// Korean course ("ko/hangul", "ko/a1" ...) and the Italian beta ("it/a1" ...),
// see lessons/french.ts, lessons/german.ts, lessons/portuguese.ts,
// lessons/korean.ts and lessons/italian.ts -- behind
// one levelPath-keyed interface, for the screens that show a lesson from
// either (the lesson runner, unit tests, review).
import type { Lesson } from "./types";
import type { ModuleUnit } from "./registry";
import { frenchLevelIfLoaded, frenchLevelKeyOf, loadFrenchLevel } from "./french";
import { germanLevelIfLoaded, germanLevelKeyOf, loadGermanLevel } from "./german";
import { loadPortugueseLevel, portugueseLevelIfLoaded, portugueseLevelKeyOf } from "./portuguese";
import { koreanLevelIfLoaded, koreanLevelKeyOf, loadKoreanLevel } from "./korean";
import { italianLevelIfLoaded, italianLevelKeyOf, loadItalianLevel } from "./italian";

export type LazyLevelData = { levelPath: string; lessons: Lesson[]; units: ModuleUnit[] };

/** True for a French, German, Portuguese, Korean or Italian level's levelPath ("fr/a1", "de/culture", "pt/b1", "ko/hangul", "it/a1"). */
export function isLazyLevelPath(levelPath: string | undefined | null): levelPath is string {
  return (
    !!levelPath &&
    (frenchLevelKeyOf(levelPath) !== null || germanLevelKeyOf(levelPath) !== null || portugueseLevelKeyOf(levelPath) !== null ||
      koreanLevelKeyOf(levelPath) !== null || italianLevelKeyOf(levelPath) !== null)
  );
}

/** The level if it's been loaded already, without loading it. */
export function lazyLevelIfLoaded(levelPath: string): LazyLevelData | undefined {
  const fr = frenchLevelKeyOf(levelPath);
  if (fr) return frenchLevelIfLoaded(fr);
  const de = germanLevelKeyOf(levelPath);
  if (de) return germanLevelIfLoaded(de);
  const pt = portugueseLevelKeyOf(levelPath);
  if (pt) return portugueseLevelIfLoaded(pt);
  const ko = koreanLevelKeyOf(levelPath);
  if (ko) return koreanLevelIfLoaded(ko);
  const it = italianLevelKeyOf(levelPath);
  if (it) return italianLevelIfLoaded(it);
  return undefined;
}

/** Loads a French, German, Portuguese, Korean or Italian level; null for any other levelPath. */
export function loadLazyLevel(levelPath: string): Promise<LazyLevelData> | null {
  const fr = frenchLevelKeyOf(levelPath);
  if (fr) return loadFrenchLevel(fr);
  const de = germanLevelKeyOf(levelPath);
  if (de) return loadGermanLevel(de);
  const pt = portugueseLevelKeyOf(levelPath);
  if (pt) return loadPortugueseLevel(pt);
  const ko = koreanLevelKeyOf(levelPath);
  if (ko) return loadKoreanLevel(ko);
  const it = italianLevelKeyOf(levelPath);
  if (it) return loadItalianLevel(it);
  return null;
}
