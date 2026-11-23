// Copied from the website (lengo src/lib/news/pick.ts); keep the two the same.
// Shared, pure: which news a learner sees first, and at what level. The
// same matching as the lessons' "Para ti" block (interests.ts): articles
// on the learner's topics (their picks, minus ones they keep thumbing
// down, plus ones they've warmed to) come first, newest first within each
// group; everyone else gets the newest first.
import { topicRotation, type InterestProfile, type InterestTopic } from "@/lib/interests";
import type { NewsArticle, NewsLevel } from "./types";

/** Lower is better: the article's best match in the learner's rotation. */
function matchRank(topics: InterestTopic[], rotation: InterestTopic[]): number {
  let best = Infinity;
  for (const t of topics) {
    const i = rotation.indexOf(t);
    if (i !== -1 && i < best) best = i;
  }
  return best;
}

export function orderForLearner<T extends Pick<NewsArticle, "topics" | "publishedAt">>(
  articles: T[],
  interests: InterestProfile | null,
): { article: T; forYou: boolean }[] {
  const personal = !!interests && interests.topics.length > 0;
  const rotation = personal ? topicRotation(interests) : [];
  return articles
    .map((article) => ({ article, rank: personal ? matchRank(article.topics, rotation) : Infinity }))
    .sort((a, b) => (Number.isFinite(a.rank) ? 0 : 1) - (Number.isFinite(b.rank) ? 0 : 1) || b.article.publishedAt - a.article.publishedAt)
    .map(({ article, rank }) => ({ article, forYou: Number.isFinite(rank) }));
}

/** The news level that fits a learner's course level ("b2" and up read the original). */
export function newsLevelFor(courseLevel: string | null | undefined): NewsLevel {
  switch (courseLevel) {
    case "a1":
      return "a1";
    case "a2":
      return "a2";
    case "b1":
      return "b1";
    case "b2":
    case "c1":
    case "c2":
      return "orig";
    default:
      return "a1";
  }
}
