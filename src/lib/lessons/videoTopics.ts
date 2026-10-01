// Synced from cheneygross-afk/lengo:src/lib/lessons/videoTopics.ts by scripts/sync-content.mjs -- edit it there, not here.
// Display helpers for the linked YouTube videos in lessonVideos.ts: topic
// labels and order for the level page's filter chips, and the public
// thumbnail URL YouTube serves for linking to a video (not re-hosted).
import type { LessonVideo, VideoTopic } from "./lessonVideos";
import type { SpanishLevelPath } from "./levels";

export type { VideoTopic };

// One line under the "Watch & listen" heading, describing what the level's
// videos are like (learner videos at A1-B1, native media by C1-C2).
export const WATCH_INTRO: Record<SpanishLevelPath, string> = {
  a1: "Slow, clear Spanish made for beginners, for listening practice between lessons.",
  a2: "Easy-to-follow stories, vlogs and tips for learners at about A2 level.",
  b1: "Intermediate videos for learners, plus real street interviews, at about B1 level.",
  b2: "Podcasts and unscripted conversations with native speakers at about B2 level.",
  c1: "Native-speed podcasts, interviews and talks at about C1 level.",
  c2: "Media made for native speakers, such as BBC News Mundo explainers.",
};

// Chip order and labels. Videos with no topic are grouped under "other".
export const VIDEO_TOPICS: { id: VideoTopic | "other"; label: string }[] = [
  { id: "stories", label: "Stories" },
  { id: "daily-life", label: "Daily life" },
  { id: "culture-travel", label: "Culture & travel" },
  { id: "language-tips", label: "Language tips" },
  { id: "interviews", label: "Interviews" },
  { id: "podcasts", label: "Podcasts" },
  { id: "news-ideas", label: "News & ideas" },
  { id: "other", label: "More videos" },
];

export type VideoTopicFilter = VideoTopic | "other" | "all";

export function topicOf(video: LessonVideo): VideoTopic | "other" {
  return video.topic ?? "other";
}

// The topics present in `videos`, in chip order, with counts. Empty when
// there is only one group, since a lone chip next to "All" filters nothing.
export function topicsIn(videos: LessonVideo[]): { id: VideoTopic | "other"; label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const v of videos) counts.set(topicOf(v), (counts.get(topicOf(v)) ?? 0) + 1);
  const present = VIDEO_TOPICS.filter((t) => counts.has(t.id)).map((t) => ({ ...t, count: counts.get(t.id)! }));
  return present.length < 2 ? [] : present;
}

export function filterByTopic(videos: LessonVideo[], filter: VideoTopicFilter): LessonVideo[] {
  return filter === "all" ? videos : videos.filter((v) => topicOf(v) === filter);
}

// YouTube's standard 320x180 thumbnail for a video.
export function videoThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
}

// "Dreaming Spanish · Superbeginner" -> channel "Dreaming Spanish",
// detail "Superbeginner".
export function splitSource(source: string): { channel: string; detail?: string } {
  const i = source.indexOf(" · ");
  return i < 0 ? { channel: source } : { channel: source.slice(0, i), detail: source.slice(i + 3) };
}

// Drops the channel's level suffix from a title, since the card shows the
// source separately: "My Head - Superbeginner Spanish" -> "My Head".
export function displayTitle(title: string): string {
  const t = title.replace(/\s+[-|]\s+(Superbeginner|Beginner|Intermediate|Advanced) Spanish(\s+-\s+.*)?$/, "").trim();
  return t || title;
}
