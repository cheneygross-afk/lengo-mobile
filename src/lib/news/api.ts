// Readings > News in the app: the website's news shelf (lengo
// src/lib/news/, GET /api/news), fetched when the screen opens and kept
// for the session. The articles change about every two days.
import type { NewsArticle, NewsLevel } from "./types";

const NEWS_API_URL = "https://deependspanish.com/api/news?lang=es";

export type NewsCredit = { sourceName: string; sourceHome: string; licenceName: string; licenceUrl: string };
export type AppNewsArticle = NewsArticle & { credit: NewsCredit };

export const NEWS_LEVEL_LABEL: Record<NewsLevel, string> = {
  a1: "Beginner",
  a2: "Elementary",
  b1: "Intermediate",
  orig: "Advanced and up",
};

export const NEWS_LEVEL_NOTE: Record<NewsLevel, string> = {
  a1: "Short and simple, in the present tense.",
  a2: "A little longer, with the past tenses.",
  b1: "Close to real news, a bit shorter.",
  orig: "The original article, word for word.",
};

export function newsChanges(level: NewsLevel): string {
  return level === "orig"
    ? "Text only: photos, captions and links removed."
    : `Rewritten in shorter, simpler Spanish for ${NEWS_LEVEL_LABEL[level]} learners; photos and links removed.`;
}

export const newsDate = (ms: number) =>
  new Date(ms).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

let cache: { at: number; articles: AppNewsArticle[] } | null = null;

export async function fetchNews(): Promise<AppNewsArticle[]> {
  if (cache && Date.now() - cache.at < 30 * 60 * 1000) return cache.articles;
  const res = await fetch(NEWS_API_URL);
  if (!res.ok) throw new Error(`news ${res.status}`);
  const data = await res.json();
  const articles: AppNewsArticle[] = Array.isArray(data?.articles) ? data.articles : [];
  cache = { at: Date.now(), articles };
  return articles;
}

export function cachedArticle(slug: string): AppNewsArticle | undefined {
  return cache?.articles.find((a) => a.slug === slug);
}
