// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/unit-tasks.ts by scripts/sync-content.mjs -- edit it there, not here.
// The "Read and write" lesson of each redesigned unit, in a version for
// each interest topic (interests.ts; curriculum redesign, steps 7-8).
// Every version of a unit's lesson has the same length, the same grammar,
// the same kinds and number of questions and the same checklist for the
// writing, so scores are fair: only what the text is about changes. The
// learner's reason for learning adds one line to the writing task (who
// they're writing to).
//
// All of it is our own writing (no licence needed); it uses only what the
// unit and the units before it have taught.

import type { Exercise, Lesson, LessonExample } from "../types";
import type { CoreTopic, InterestTopic, LearningReason } from "../../interests";

/** [question, options, index of the right one, explanation] */
export type ReadingQuestion = [string, string[], number, string];

export type TopicVersion = {
  /** The reading's title, in English. */
  title: string;
  /** New words the reading needs, glossed: "mesero (waiter)". */
  glossary?: string;
  /** The reading, one sentence per line, Spanish only. */
  text: string[];
  /** The whole reading in English, shown after the first question. */
  english: string;
  questions: ReadingQuestion[];
  /** The writing task. */
  prompt: string;
  model: string;
};

export type UnitTask = {
  level: Lesson["level"];
  /** "a1/1" ... "c2/7" */
  unit: string;
  /** What the writing must include: the same for every topic. */
  checklist: string[];
  words: [number, number];
  /** What the model answer shows, in plain words. */
  explanation: string;
  /** Always the six core topics; the newer ones as they are written. */
  topics: Record<CoreTopic, TopicVersion> & Partial<Record<InterestTopic, TopicVersion>>;
};

/** The newer topics' versions, by unit ("a1/1"): see unit-tasks-more-*.ts. */
export type MoreVersions = Record<string, Partial<Record<Exclude<InterestTopic, CoreTopic>, TopicVersion>>>;

/** Shorthand for writing a version. */
export const version = (title: string, glossary: string, text: string[], english: string, questions: ReadingQuestion[], prompt: string, model: string): TopicVersion => ({
  title,
  glossary: glossary || undefined,
  text,
  english,
  questions,
  prompt,
  model,
});

/** Who the learner writes to, by their reason for learning. */
export const REASON_TWIST: Record<LearningReason, string> = {
  travel: "Write it as a message to the host you'll stay with on a trip.",
  work: "Write it as a short message to a new coworker.",
  family: "Write it as a message to someone in your partner's or your family.",
  school: "Write it as a short paragraph for your Spanish class.",
  heritage: "Write it as a note to a relative who speaks Spanish.",
  fun: "Write it as a post for a language-exchange friend.",
};

export const unitTaskSlug = (unit: string) => `es-${unit.replace("/", "-u")}-read-write`;

/** One topic's lesson for a unit. `reason` adds who the learner writes to. */
export function unitTaskLesson(task: UnitTask, topic: InterestTopic, reason?: LearningReason | null): Lesson {
  const v = task.topics[topic] ?? task.topics["daily-life"];
  const questions: Exercise[] = v.questions.map(([question, options, correctIndex, explanation], i) => ({
    type: "multiple-choice",
    question,
    options,
    correctIndex,
    explanation: i === 0 ? `${explanation} The reading in English: "${v.english}"` : explanation,
  }));
  const examples: LessonExample[] = v.text.map((es) => ({ es }));
  return {
    slug: unitTaskSlug(task.unit),
    level: task.level,
    number: 0,
    title: `Read and write: ${v.title}`,
    summary: "Read a short text on a topic you picked, answer three questions about it, then write your own.",
    goal: "read a short text about something you like, and write your own.",
    duration: "8 min",
    sections: [
      {
        heading: v.title,
        body: ["Read this in Spanish, then answer the questions. The English comes after the first answer.", ...(v.glossary ? [`New words: ${v.glossary}.`] : [])],
        examples,
        checkpoint: questions,
      },
      {
        heading: "Your turn to write",
        body: ["Now write your own, using the reading as a guide. Tick off the checklist as you go."],
        checkpoint: [
          {
            type: "write",
            prompt: reason ? `${v.prompt} ${REASON_TWIST[reason]}` : v.prompt,
            minWords: task.words[0],
            maxWords: task.words[1],
            rubric: task.checklist,
            modelAnswer: v.model,
            explanation: task.explanation,
          },
        ],
      },
    ],
    exercises: [],
  };
}

/** Problems that would make a unit's versions unfair or too long. */
export function checkUnitTask(task: UnitTask): string[] {
  const bad: string[] = [];
  const versions = Object.entries(task.topics) as [string, TopicVersion][];
  const count = (s: string) => s.split(/\s+/).filter(Boolean).length;
  const lengths = versions.map(([, v]) => count(v.text.join(" ")));
  const [lo, hi] = [Math.min(...lengths), Math.max(...lengths)];
  if (hi - lo > Math.max(6, lo * 0.2)) bad.push(`readings differ in length: ${lengths.join(", ")} words`);
  for (const [topic, v] of versions) {
    if (v.questions.length !== versions[0][1].questions.length) bad.push(`${topic}: a different number of questions`);
    v.questions.forEach(([, options, right], i) => {
      if (right < 0 || right >= options.length) bad.push(`${topic}: question ${i + 1} has no right answer`);
      if (options.length !== versions[0][1].questions[i]?.[1].length) bad.push(`${topic}: question ${i + 1} has a different number of options`);
    });
    const w = count(v.model);
    if (w < task.words[0] || w > task.words[1]) bad.push(`${topic}: the model answer is ${w} words (wanted ${task.words[0]}-${task.words[1]})`);
  }
  return bad;
}
