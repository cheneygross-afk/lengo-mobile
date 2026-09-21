export type Reading = {
  title: string;
  author: string;
  // Short descriptor shown as a pill next to the title -- a genre for
  // assorted picks ("Fantasy", "Cookbook"), or left off for by-level
  // picks where the level itself is already the organizing label.
  tag?: string;
  description: string;
  amazonUrl: string;
};

// A plain Amazon search link (title + author + "spanish edition") rather
// than a specific product URL/ASIN -- this always resolves to the right
// book even as editions, printings, and listings change over time.
export function amazonSearchUrl(title: string, author: string): string {
  const query = `${title} ${author} spanish edition`;
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
}
