// Synced from cheneygross-afk/lengo:src/lib/interests.ts by scripts/sync-content.mjs -- edit it there, not here.
// What a learner is into, and how lessons use it (curriculum redesign,
// step 7). Three questions, asked once after the first lesson and
// changeable in Settings. Every learner gets the same lesson -- the same
// grammar, words and length -- but its video, reading and writing prompt
// come in a version for each topic, and this picks the learner's.
//
// Pure functions, shared by the website and the app (it syncs to
// lengo-mobile); the answers are stored with the learner prefs
// (learnerPlan.ts).

/** Off until the redesigned course opens to learners: until then the
 * survey shows only in the admin preview (and nowhere in Settings), because
 * there is nothing for the answers to change yet. */
export const INTEREST_SURVEY_LIVE = false;

export const INTEREST_TOPICS = ["food", "sports", "travel", "arts", "work", "daily-life"] as const;
export type InterestTopic = (typeof INTEREST_TOPICS)[number];

export const TOPIC_LABELS: Record<InterestTopic, string> = {
  food: "Food & cooking",
  sports: "Sports & fitness",
  travel: "Travel & places",
  arts: "Music, film & art",
  work: "Work, business & tech",
  "daily-life": "Family, friends & daily life",
};
export const TOPIC_EMOJI: Record<InterestTopic, string> = { food: "🍳", sports: "⚽", travel: "✈️", arts: "🎬", work: "💼", "daily-life": "🏡" };

export const LEARNING_REASONS = ["travel", "work", "family", "school", "heritage", "fun"] as const;
export type LearningReason = (typeof LEARNING_REASONS)[number];
export const REASON_LABELS: Record<LearningReason, string> = {
  travel: "Travel",
  work: "Work",
  family: "Family or partner",
  school: "School",
  heritage: "Heritage",
  fun: "Just for fun",
};

export const CONTENT_STYLES = ["stories", "people", "news"] as const;
export type ContentStyle = (typeof CONTENT_STYLES)[number];
export const STYLE_LABELS: Record<ContentStyle, string> = {
  stories: "Stories",
  people: "Real people talking",
  news: "News and facts",
};

/** How many topics a learner picks. */
export const TOPICS_TO_PICK = 3;

export type InterestProfile = {
  /** The picked topics, favourite first. */
  topics: InterestTopic[];
  reason: LearningReason | null;
  style: ContentStyle | null;
  /** Thumbs up (+1) and down (-1) given to each topic's videos and readings. */
  votes: Partial<Record<InterestTopic, number>>;
  /** When the survey was answered or skipped. */
  answeredAt: number;
};

/** The mix a learner gets before (or without) answering: every topic in turn. */
export const DEFAULT_TOPIC_ORDER: InterestTopic[] = ["daily-life", "travel", "food", "arts", "sports", "work"];

const isTopic = (v: unknown): v is InterestTopic => (INTEREST_TOPICS as readonly unknown[]).includes(v);

/** Reads a stored profile, keeping only valid values. Null = never asked. */
export function normalizeInterests(raw: unknown): InterestProfile | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const answeredAt = typeof r.answeredAt === "number" && Number.isFinite(r.answeredAt) ? r.answeredAt : null;
  if (answeredAt === null) return null;
  const topics = Array.isArray(r.topics) ? [...new Set(r.topics.filter(isTopic))].slice(0, TOPICS_TO_PICK) : [];
  const votes: InterestProfile["votes"] = {};
  if (r.votes && typeof r.votes === "object")
    for (const [k, v] of Object.entries(r.votes as Record<string, unknown>))
      if (isTopic(k) && typeof v === "number" && Number.isFinite(v)) votes[k] = Math.max(-VOTE_LIMIT, Math.min(VOTE_LIMIT, Math.round(v)));
  return {
    topics,
    reason: (LEARNING_REASONS as readonly unknown[]).includes(r.reason) ? (r.reason as LearningReason) : null,
    style: (CONTENT_STYLES as readonly unknown[]).includes(r.style) ? (r.style as ContentStyle) : null,
    votes,
    answeredAt,
  };
}

// ---- Matching ----

/** Votes on one topic stop counting past this, so one bad day can't bury it. */
export const VOTE_LIMIT = 5;
/** Thumbs down this many times (net) and a picked topic stops coming up. */
export const DROP_AT = -3;
/** Thumbs up this many times (net) and a topic the learner didn't pick joins the rotation. */
export const JOIN_AT = 3;

/** The topics a learner's lessons rotate through, best first: their picks
 * (minus any they keep thumbing down), then topics they've warmed to. With
 * no picks left, the default mix. */
export function topicRotation(p: InterestProfile | null): InterestTopic[] {
  if (!p || !p.topics.length) return DEFAULT_TOPIC_ORDER;
  const vote = (t: InterestTopic) => p.votes[t] ?? 0;
  const picked = p.topics.filter((t) => vote(t) > DROP_AT);
  const joined = INTEREST_TOPICS.filter((t) => !p.topics.includes(t) && vote(t) >= JOIN_AT);
  // Stable: a pick keeps its place unless another is clearly better liked.
  const rotation = [...picked, ...joined].sort((a, b) => vote(b) - vote(a) || 0);
  return rotation.length ? rotation : DEFAULT_TOPIC_ORDER;
}

/** The topic for the nth lesson (0-based, counted through the course): the
 * rotation in turn, so two lessons in a row are never on the same topic
 * when the learner picked more than one. */
export function topicForLesson(p: InterestProfile | null, n: number): InterestTopic {
  const r = topicRotation(p);
  return r[((n % r.length) + r.length) % r.length];
}

/** Which version to show, given the topics a lesson has versions for: the
 * lesson's topic, else the learner's next topics in turn, else the default
 * mix, else whatever exists. Null only when there are no versions at all,
 * so nobody ever sees a gap. */
export function pickVersion(available: readonly InterestTopic[], p: InterestProfile | null, n: number): InterestTopic | null {
  if (!available.length) return null;
  const r = topicRotation(p);
  const start = ((n % r.length) + r.length) % r.length;
  for (let i = 0; i < r.length; i++) {
    const t = r[(start + i) % r.length];
    if (available.includes(t)) return t;
  }
  return DEFAULT_TOPIC_ORDER.find((t) => available.includes(t)) ?? available[0];
}

/** The profile after a thumbs up (+1) or down (-1) on a topic's video or reading. */
export function applyVote(p: InterestProfile, topic: InterestTopic, vote: 1 | -1): InterestProfile {
  const next = Math.max(-VOTE_LIMIT, Math.min(VOTE_LIMIT, (p.votes[topic] ?? 0) + vote));
  return { ...p, votes: { ...p.votes, [topic]: next } };
}

/** A profile for someone who skipped the survey: the default mix, and no
 * second ask. */
export function skippedProfile(now: number): InterestProfile {
  return { topics: [], reason: null, style: null, votes: {}, answeredAt: now };
}
