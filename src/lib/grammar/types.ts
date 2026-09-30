// Synced from cheneygross-afk/lengo:src/lib/grammar/types.ts by scripts/sync-content.mjs -- edit it there, not here.
// Free, public grammar explainers under /grammar. These are original
// short guides written for search visitors -- deliberately NOT the paid
// lesson content (which stays gated and out of robots.txt). Each one
// answers the question someone typed into Google, then points them at
// the matching level of Focused Lessons and a free story at that level.
export type GrammarExample = {
  es: string;
  en: string;
};

export type GrammarSection = {
  heading: string;
  body: string[];
  examples?: GrammarExample[];
};

export type GrammarMistake = {
  wrong: string;
  right: string;
  why: string;
};

export type GrammarFaq = {
  q: string;
  a: string;
};

export type GrammarGuide = {
  slug: string;
  // On-page H1.
  title: string;
  // <title> tag (slotted into the site's "%s — Deep End Spanish" template).
  metaTitle: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  // /readings/{readingLevelPath} -- where the "practice with a free story"
  // links point.
  readingLevelPath: "a1" | "a2" | "b1" | "b2" | "c1c2";
  intro: string[];
  sections: GrammarSection[];
  mistakes: GrammarMistake[];
  faqs: GrammarFaq[];
  // Slugs of other guides worth reading next.
  related: string[];
};
