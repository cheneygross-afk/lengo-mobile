// Synced from cheneygross-afk/lengo:src/lib/lessons/contentSources.ts by scripts/sync-content.mjs -- edit it there, not here.
// Where each video and reading in the Spanish course comes from, and what
// lets us use it. One record per item, built from the channel (videos) or
// the lesson (readings), and shown to learners as a small "Sources" line.
//
// The rules:
// - Readings are written for Deep End, or come from public-domain or
//   openly licensed text (CC0, CC BY, CC BY-SA), credited as the license asks.
// - Videos are only ever LINKED on the owner's own YouTube channel. Nothing
//   is copied, embedded, downloaded or re-hosted, so no license is needed.
// - Nothing under a "non-commercial" (NC) or "no derivatives" (ND) license
//   is ever copied into the course.
import { LESSON_VIDEOS, LEVEL_WATCH_VIDEOS, videoUrlFor, type LessonVideo } from "./lessonVideos";
import { splitSource } from "./videoTopics";

export type SourceLicense = "original" | "link-only" | "public-domain" | "cc0" | "cc-by" | "cc-by-sa";

export const LICENSE_LABELS: Record<SourceLicense, string> = {
  original: "written for Deep End",
  "link-only": "linked on the owner's channel, not copied",
  "public-domain": "public domain",
  cc0: "CC0",
  "cc-by": "CC BY",
  "cc-by-sa": "CC BY-SA",
};

/** True for any license name that forbids commercial use or changes. */
export function isForbiddenLicense(name: string): boolean {
  return /(^|[^a-z])(nc|nd)([^a-z]|$)|non-?commercial|no-?deriv/i.test(name);
}

export type SourceRecord = {
  kind: "video" | "reading";
  title: string;
  /** Who made it. */
  owner: string;
  url?: string;
  license: SourceLicense;
  /** When the source and its terms were last checked (YYYY-MM-DD). */
  checked: string;
};

/** The channels the course links to: each one's own, official channel. */
export const VIDEO_CHANNELS: Record<string, { url: string; checked: string }> = {
  "Dreaming Spanish": { url: "https://www.youtube.com/@DreamingSpanish", checked: "2026-11-22" },
  "Easy Spanish": { url: "https://www.youtube.com/@EasySpanish", checked: "2026-11-22" },
  "Butterfly Spanish": { url: "https://www.youtube.com/@ButterflySpanish", checked: "2026-11-22" },
  "Spanish After Hours": { url: "https://www.youtube.com/@SpanishAfterHours", checked: "2026-11-22" },
  "Español con Juan": { url: "https://www.youtube.com/@espanolconjuan", checked: "2026-11-22" },
  "Duolingo Spanish Podcast": { url: "https://www.youtube.com/@duolingo", checked: "2026-11-22" },
  "BBC News Mundo": { url: "https://www.youtube.com/@BBCMundo", checked: "2026-11-22" },
};

export function videoSource(video: LessonVideo): SourceRecord {
  const { channel } = splitSource(video.source);
  return { kind: "video", title: video.title, owner: channel, url: videoUrlFor(video.videoId), license: "link-only", checked: VIDEO_CHANNELS[channel]?.checked ?? "" };
}

/** A reading written for the course (every unit's "Read and write" lesson). */
export function originalReading(title: string): SourceRecord {
  return { kind: "reading", title, owner: "Deep End", license: "original", checked: "2026-11-22" };
}

/** The small line under a lesson: "Sources: reading written for Deep End · video by Easy Spanish, linked on the owner's channel, not copied". */
export function sourcesLine(records: SourceRecord[]): string {
  return records.map((r) => (r.license === "original" ? `${r.kind} ${LICENSE_LABELS.original}` : `${r.kind} by ${r.owner}, ${LICENSE_LABELS[r.license]}`)).join(" · ");
}

/** Every linked video whose channel has no record above (should be none). */
export function videosWithoutSource(): string[] {
  const all: LessonVideo[] = [...Object.values(LEVEL_WATCH_VIDEOS).flatMap((l) => l ?? []), ...Object.values(LESSON_VIDEOS).flatMap((l) => Object.values(l ?? {}))];
  return all.filter((v) => !VIDEO_CHANNELS[splitSource(v.source).channel]).map((v) => `${v.videoId} (${v.source})`);
}
