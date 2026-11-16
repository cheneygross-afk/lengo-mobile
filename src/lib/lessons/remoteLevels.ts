// Course levels the app downloads instead of carrying inside it.
//
// Every course but Spanish is too big to build into the app (with all of
// them in, its JavaScript passed 200 MB). The website publishes each level
// as one JSON file, { lessons, units }, with a small index per course (content hashes)
// (lengo: scripts/build-app-content.ts):
//
//   https://deependlanguages.com/app-content/v1/<course>/index.json
//   https://deependlanguages.com/app-content/v1/<course>/<level>.json
//
// A level is downloaded the first time it's opened and kept on the phone,
// so it opens offline and instantly from then on. When a kept copy exists
// it is used straight away; the index is checked in the background and
// a changed level is fetched for the next time it's opened. So lesson
// fixes on the website reach the app without an app update.
//
// Level paths are the website's ("fr/a1", "ja/alphabets", "zh/pinyin").
import { Directory, File, Paths } from "expo-file-system";
import type { Lesson } from "./types";
import type { UnitOutline } from "./units";
import { readJSON, writeJSON } from "../storage/asyncStore";

const CONTENT_ORIGIN = "https://deependlanguages.com/app-content/v1";
/** levelPath -> the hash of the copy kept on the phone. */
const INDEX_KEY = "deepend-remote-levels-v1";

export type RemoteLevel = { lessons: Lesson[]; units: UnitOutline[] };

/** A course's index: per level, the hash of its file and the slugs of its
 * required lessons (enough for a level picker to show progress without
 * downloading the level). */
export type CourseIndex = Record<string, { hash: string; required: string[] }>;

/** Thrown when a level has never been downloaded and can't be fetched now. */
export class LevelUnavailableError extends Error {
  constructor(public levelPath: string) {
    super("This level needs an internet connection the first time you open it.");
    this.name = "LevelUnavailableError";
  }
}

function levelFile(levelPath: string): File {
  const dir = new Directory(Paths.document, "levels");
  dir.create({ intermediates: true, idempotent: true });
  return new File(dir, `${levelPath.replace("/", "-")}.json`);
}

const indexOnce = new Map<string, Promise<CourseIndex | null>>();
const indexKey = (course: string) => `deepend-course-index-v1-${course}`;

/** A course's index ("fr", "ja" ...): asked of the website once per app
 * run and kept on the phone, so it's there offline too. null only when
 * it has never been fetched and can't be now. */
export function loadCourseIndex(course: string): Promise<CourseIndex | null> {
  let pending = indexOnce.get(course);
  if (!pending) {
    pending = (async () => {
      try {
        const res = await fetch(`${CONTENT_ORIGIN}/${course}/index.json`, { headers: { "Cache-Control": "no-cache" } });
        if (res.ok) {
          const body = (await res.json()) as CourseIndex;
          if (body && typeof body === "object") {
            await writeJSON(indexKey(course), body);
            return body;
          }
        }
      } catch {
        // offline: fall through to the kept copy
      }
      // Not kept in memory, so the next ask tries the website again.
      indexOnce.delete(course);
      return readJSON<CourseIndex | null>(indexKey(course), null);
    })();
    indexOnce.set(course, pending);
  }
  return pending;
}

async function currentHash(levelPath: string): Promise<string | undefined> {
  const [course, level] = levelPath.split("/");
  return (await loadCourseIndex(course))?.[level]?.hash;
}

function valid(data: unknown): data is RemoteLevel {
  const d = data as RemoteLevel | null;
  return !!d && Array.isArray(d.lessons) && Array.isArray(d.units) && d.lessons.length > 0;
}

async function readKept(levelPath: string): Promise<RemoteLevel | null> {
  try {
    const file = levelFile(levelPath);
    if (!file.exists) return null;
    const data: unknown = JSON.parse(await file.text());
    return valid(data) ? data : null;
  } catch {
    return null;
  }
}

async function download(levelPath: string, hash: string | undefined): Promise<RemoteLevel> {
  const res = await fetch(`${CONTENT_ORIGIN}/${levelPath}.json${hash ? `?h=${hash}` : ""}`);
  if (!res.ok) throw new Error(`level ${levelPath}: HTTP ${res.status}`);
  const text = await res.text();
  const data: unknown = JSON.parse(text);
  if (!valid(data)) throw new Error(`level ${levelPath}: unexpected content`);
  try {
    levelFile(levelPath).write(text);
    const index = await readJSON<Record<string, string>>(INDEX_KEY, {});
    await writeJSON(INDEX_KEY, { ...index, [levelPath]: hash ?? "" });
  } catch {
    // Couldn't keep it (storage full): the level still opens this time.
  }
  return data;
}

/** Fetches a newer copy for next time, if the website has one. */
async function refreshInBackground(levelPath: string): Promise<void> {
  const hash = await currentHash(levelPath);
  if (!hash) return;
  const index = await readJSON<Record<string, string>>(INDEX_KEY, {});
  if (index[levelPath] === hash) return;
  await download(levelPath, hash);
}

/** A level's lessons and units: the copy on the phone when there is one,
 * otherwise downloaded now. */
export async function loadRemoteLevel(levelPath: string): Promise<RemoteLevel> {
  const kept = await readKept(levelPath);
  if (kept) {
    void refreshInBackground(levelPath).catch(() => {});
    return kept;
  }
  try {
    return await download(levelPath, await currentHash(levelPath));
  } catch {
    throw new LevelUnavailableError(levelPath);
  }
}
