// Synced from cheneygross-afk/lengo:src/lib/readings/levelIntros.ts by scripts/sync-content.mjs -- edit it there, not here.
// Search-facing intro copy for each /readings/{level} page. Before this,
// the level pages had a single sentence above the story list, which gave
// search engines almost nothing to rank for queries like "B1 Spanish short
// stories". Rendered by ReadingList below the story list, so returning
// readers still see the stories first.
export type LevelIntro = {
  /** Who the stories are for, shown at the top of the page above the
   * story list so a brand-new learner sees it before opening a story. */
  readyNote?: { heading: string; body: string };
  heading: string;
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  // CEFR level whose /grammar guides are linked from this page.
  grammarLevel: "A1" | "A2" | "B1" | "B2" | "C1";
};

export const LEVEL_INTROS: Record<string, LevelIntro> = {
  a1: {
    readyNote: {
      heading: "How much Spanish do I need to read Beginner stories?",
      body: "If you know basic greetings, the verbs ser, estar, and tener, and a few hundred common words, you're ready. Glossed words cover the rest. Brand new to Spanish? Start with the Beginner lessons: each story below says which lesson it's best after, and the list runs from easiest to hardest.",
    },
    heading: "Free Spanish short stories for beginners",
    paragraphs: [
      "These Beginner Spanish stories are written for people in their first months of learning. They stick mostly to the present tense, with short sentences and the everyday vocabulary you meet first: family, food, school, the weather, and getting around town.",
      "Every story is original, free to read, and ends with a short comprehension check in English so you can confirm you understood it. Words a beginner probably hasn't met yet have a dotted underline; tap one to see what it means without leaving the page.",
      "A good way to use them: read a story once for the gist, then read it again aloud. When a story feels easy, move on to the Elementary stories.",
    ],
    faqs: [
      {
        q: "Are these stories really free?",
        a: "Yes. Every story on this page is free to read with no account needed.",
      },
    ],
    grammarLevel: "A1",
  },
  a2: {
    readyNote: {
      heading: "How much Spanish do I need to read Elementary stories?",
      body: "Most Elementary stories tell what happened using the preterite and the imperfect, so they're best once you've met both (Elementary lesson 23). Each story below says which lesson it's best after.",
    },
    heading: "Free elementary Spanish reading practice",
    paragraphs: [
      "Elementary stories bring in the past tenses, so you'll see the preterite and imperfect working together the way they do in real storytelling: one sets the scene, the other moves the plot forward.",
      "The stories are a little longer than at the Beginner level, with more dialogue and everyday situations like travel, work, and friendships. Each one is original, free, and followed by comprehension questions with explanations.",
      "If you're comfortable talking about what you did yesterday but still hesitate over which past tense to use, this is the right level.",
    ],
    faqs: [
      {
        q: "What grammar do Elementary stories use?",
        a: "Mainly the present, preterite, and imperfect, plus object pronouns and common reflexive verbs.",
      },
      {
        q: "How long is each story?",
        a: "Most take five to ten minutes to read, including the comprehension check.",
      },
    ],
    grammarLevel: "A2",
  },
  b1: {
    heading: "Free Spanish short stories for intermediate learners",
    paragraphs: [
      "Intermediate stories read like real short fiction: characters with motives, plots with tension, and natural dialogue. You'll meet the present subjunctive, the future and conditional, and a much wider vocabulary.",
      "Settings range across the Spanish-speaking world, from a national park in Chile to Madrid and Bogotá, so you pick up regional vocabulary and culture along the way.",
      "Each story is free and ends with comprehension questions in English. Harder words are glossed right in the text so you can keep reading instead of reaching for a dictionary.",
    ],
    faqs: [
      {
        q: "What does Intermediate mean here?",
        a: "It's the first level where you can handle most everyday situations and follow the main points of clear, standard Spanish.",
      },
      {
        q: "Should I read Intermediate stories if I'm still unsure about the subjunctive?",
        a: "Yes. Seeing it in context is one of the best ways to get used to it, and the glosses explain tricky forms.",
      },
    ],
    grammarLevel: "B1",
  },
  b2: {
    heading: "Free advanced Spanish reading practice",
    paragraphs: [
      "At the Advanced level, the stories stop simplifying. Expect the full range of tenses, the imperfect subjunctive, si clauses, and idiomatic expressions, in stories about work, family conflict, and hard decisions.",
      "These are good preparation for reading real novels in Spanish, which you'll also find recommended below. Every original story is free and comes with comprehension questions.",
    ],
    faqs: [
      {
        q: "Can I read real Spanish novels at the Advanced level?",
        a: "Many, yes, especially contemporary fiction. The books listed on this page are good starting points.",
      },
      {
        q: "What makes a story Advanced instead of Intermediate?",
        a: "Longer sentences, more abstract topics, the imperfect subjunctive and conditional sentences, and fewer glossed words.",
      },
    ],
    grammarLevel: "B2",
  },
  c1c2: {
    heading: "Spanish reading for the Mastery and Professional levels",
    paragraphs: [
      "These stories are written for readers who can already enjoy Spanish fiction. They use literary vocabulary, complex syntax, regional expressions, and subtle shifts in tone, the things that separate advanced readers from fluent ones.",
      "Use them to push your reading speed and vocabulary, then move on to the native-level books recommended below.",
    ],
    faqs: [
      {
        q: "What's the difference between Mastery and Professional reading?",
        a: "At Mastery, readers understand long, demanding texts and implicit meaning. At Professional & Academic, readers can read virtually anything, including literary and specialized writing, with ease.",
      },
    ],
    grammarLevel: "B2",
  },
};
