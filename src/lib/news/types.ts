// Copied from the website (lengo src/lib/news/types.ts); keep the two the same.
// Fresh news readings (Readings > News): real articles from openly
// licensed outlets, refreshed every couple of days by a Netlify scheduled
// function (netlify/functions/news-refresh.mjs -> /api/cron/news), each
// shown at four levels -- three versions rewritten by Claude for learners
// plus the original text for Advanced and up. Free for everyone and
// public, because the text is not ours: only sources whose licence allows
// copying and adapting (see sources.ts), with the credit each licence asks
// for shown at the top of every article.
import type { InterestTopic } from "@/lib/interests";

/** The four ways an article is shown, easiest first. "orig" is the
 * source's own text, unchanged. */
export const NEWS_LEVELS = ["a1", "a2", "b1", "orig"] as const;
export type NewsLevel = (typeof NEWS_LEVELS)[number];

export type NewsQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type NewsVersion = {
  title: string;
  paragraphs: string[];
  questions: NewsQuestion[];
};

export type NewsArticle = {
  /** URL slug, unique among published articles. */
  slug: string;
  /** Course language, e.g. "es". */
  lang: string;
  sourceId: string;
  /** Link to the original article (the licences ask for it). */
  url: string;
  author: string;
  /** When the source published it (ms). */
  publishedAt: number;
  /** When we added it (ms). */
  addedAt: number;
  /** One or two of the interest survey topics, best first. */
  topics: InterestTopic[];
  versions: Record<NewsLevel, NewsVersion>;
};

/** What the public pages read. */
export type NewsShelf = {
  lang: string;
  /** When the newest batch was finished (ms). */
  updatedAt: number;
  articles: NewsArticle[];
};

/** A feed item picked for the next batch, before it is adapted. */
export type NewsCandidate = {
  slug: string;
  sourceId: string;
  url: string;
  author: string;
  publishedAt: number;
  title: string;
  paragraphs: string[];
  /** The topic the source's own section suggests. */
  topicHint: InterestTopic | null;
};

/** A batch being worked through, one Claude call per run. */
export type NewsBatch = {
  lang: string;
  startedAt: number;
  candidates: NewsCandidate[];
  /** Finished work, by candidate slug. */
  done: Record<string, Partial<Record<NewsLevel, NewsVersion>> & { topics?: InterestTopic[] }>;
  /** Failed attempts, by "slug/level"; two strikes and the article is dropped. */
  failures: Record<string, number>;
};
