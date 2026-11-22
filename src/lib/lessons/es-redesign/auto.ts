// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/auto.ts by scripts/sync-content.mjs -- edit it there, not here.
// The baseline every redesigned lesson gets when nobody has written a patch
// for it yet (curriculum redesign, steps 4-5): a goal taken from the
// lesson's own summary, a "Let's look again" text taken from the opening of
// each teaching section, and its concept's shared reference tables when the
// lesson has no table of its own. Hand-written patches (a1.ts ...) always
// win; this only fills what they leave empty. Nothing here writes new
// teaching: it reuses what the lesson already says.

import type { Exercise, Lesson } from "../types";
import { withSpeaking } from "../practiceCap";
import { speaksSpanish, speakTarget } from "../speaking";
import { lessonFlow } from "../lessonFlow";
import { applyPatch, type LessonPatch } from "./patch";
import { CONCEPT_TABLES } from "./concept-tables";
import { ES_CAN_DO } from "./can-do";
import { splitLesson } from "./split";

const RETEACH_MAX = 300;
// Sections that set up practice rather than teach a rule.
const NOT_TEACHING = /^(warm-up|quick recap|put it (into|together)|vocabulary|vocabulario|listening|speaking|writing|scene \d|calentamiento|repaso r[aá]pido|ponlo en pr[aá]ctica|en pr[aá]ctica)/i;
// English summaries that open with a plain verb read as "you can ...".
const EN_VERB = /^(Learn|Use|Say|Ask|Tell|Talk|Read|Write|Practice|Practise|Listen|Translate|Review|Describe|Choose|Build|Count|Give|Make|Order|Introduce|Master|Spot|Find|Fix|Tell|Name|Compare|Explain|Answer|Understand|Recognize|Recognise|Conjugate|Combine|Form|Express|Switch|Pick|Put|Turn|Change|Get|Handle|Hold|Meet|Tackle|Test|Check|Drill|Mix)\b/;

const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

/** A goal from the summary, or nothing when it wouldn't read as one. */
export function autoGoal(l: Lesson): string | undefined {
  const s = l.summary?.trim();
  if (!s || s.length > 220) return undefined;
  if (EN_VERB.test(s)) return lowerFirst(s);
  const m = /^Aprender[aá]s a (.+)$/.exec(s);
  if (m) return m[1];
  return undefined;
}

/** The opening sentences of a section, up to 300 characters. */
export function autoReteach(body: string[]): string | undefined {
  const text = body.join(" ").replace(/^Remember the rules?:\s*/i, "").replace(/^Recuerda la regla:\s*/i, "").trim();
  if (!text) return undefined;
  const sentences = text.match(/[^.!?。]+[.!?。]+(?:["”)]+)?\s*/g) ?? [text];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > RETEACH_MAX) break;
    out += s;
  }
  out = out.trim();
  // One sentence longer than the limit: keep it up to its last clause break.
  if (!out) {
    const head = sentences[0].slice(0, RETEACH_MAX - 1);
    const cut = Math.max(head.lastIndexOf("; "), head.lastIndexOf(": "), head.lastIndexOf(", "));
    if (cut < 60) return undefined;
    out = head.slice(0, cut).trim() + ".";
  }
  return out.charAt(0).toUpperCase() + out.slice(1);
}

/** What the unit plan knows about a lesson (data/es-redesign-units.json). */
export type LessonPlace = {
  /** grammar (teaches a concept), practice, words, real-talk, read-write, review, test. */
  role?: string | null;
  /** For a practice lesson: the concept taught just before it. */
  follows?: string | null;
};

// A practice lesson with no goal of its own says what it practises: the
// concept it follows, in the frame of what the lesson is for.
const ROLE_GOAL: Record<string, (canDo: string) => string> = {
  words: (c) => `use new words while you ${c}`,
  "real-talk": (c) => `handle a real conversation where you ${c}`,
  "read-write": (c) => `read and write a short text where you ${c}`,
  review: (c) => `show you can still ${c}`,
  test: (c) => `show you can still ${c}`,
  practice: (c) => c,
  grammar: (c) => c,
};

// With no concept to name (a level review, a general word list): what the
// kind of lesson is for.
const ROLE_ONLY_GOAL: Record<string, string> = {
  words: "use this lesson's new words in real sentences.",
  "real-talk": "handle this real-life situation in Spanish.",
  "read-write": "read a short text and write one of your own.",
  review: "show how much you can do without help.",
  test: "show how much you can do without help.",
};

/** A teaching lesson's Concept step runs 5 to 8 cards. */
export const MIN_CONCEPT_CARDS = 5;

const cardCount = (l: Lesson) => lessonFlow(l, { checkEvery: 2 }).filter((s) => s.kind === "learn").length;

/** Cards a lesson gains when it has too few (nothing new is taught):
 * - a teaching lesson short of 5 cards: its concept's reference tables,
 *   one card each ("At a glance"), then one card that gathers the lesson's
 *   own key points;
 * - a practice lesson with no cards at all: one card that says what it
 *   practises, with the concept's table. */
export function growPatch(l: Lesson, concept?: string | null, place: LessonPlace = {}): NonNullable<LessonPatch["insert"]> {
  const about = concept ?? place.follows ?? null;
  const tables = about ? CONCEPT_TABLES[about] ?? [] : [];
  const canDo = about ? ES_CAN_DO[about] : undefined;
  if (!l.sections.length) {
    if (!canDo) return [];
    return [{ section: { heading: "Before you start", body: [`This lesson practises one thing: how to ${canDo}`], tables: tables.slice(0, 1), reteach: `Go back to the pattern: with it you can ${canDo}`.slice(0, RETEACH_MAX) } }];
  }
  if (place.role !== "grammar" || !concept) return [];
  let short = MIN_CONCEPT_CARDS - cardCount(l);
  if (short <= 0) return [];
  const out: NonNullable<LessonPatch["insert"]> = [];
  const shown = new Set(l.sections.flatMap((s) => (s.tables ?? []).map((t) => JSON.stringify(t.rows))));
  for (const t of tables.filter((t) => !shown.has(JSON.stringify(t.rows))).slice(0, short)) {
    const first = !out.length;
    out.push({
      section: {
        heading: first ? "At a glance" : `One more look${t.caption ? `: ${t.caption}` : ""}`,
        body: [first ? `Here is the whole pattern in one place.${canDo ? ` With it you can ${canDo}` : ""}` : "Keep this table next to the first one. Together they cover the pattern."],
        tables: [t],
        reteach: t.note ?? (canDo ? `Look at the table again. With this pattern you can ${canDo}` : undefined),
      },
    });
    short--;
  }
  // Still short: the lesson's own key points on one card, before practice.
  if (short > 0) {
    const points = l.sections.map((s) => s.reteach ?? autoReteach(s.body)).filter((x): x is string => !!x);
    const firsts = points.map((x) => (x.match(/[^.!?]+[.!?]+/) ?? [x])[0].trim());
    let text = "";
    for (const f of firsts) if ((text + " " + f).trim().length <= RETEACH_MAX) text = (text + " " + f).trim();
    if (points.length >= 2 && text) out.push({ section: { heading: "The key points, before you practise", body: [text], reteach: text } });
  }
  return out;
}

export function autoPatch(l: Lesson, concept?: string | null, place: LessonPlace = {}): LessonPatch {
  const p: LessonPatch = { sections: {} };
  // A goal: the lesson's own summary when it reads as one, else what its
  // concept (or the concept it practises) lets you do.
  if (!l.goal) {
    const own = concept ? ES_CAN_DO[concept] : undefined;
    const followed = place.follows ? ES_CAN_DO[place.follows] : undefined;
    p.goal = autoGoal(l) ?? own ?? (followed ? (ROLE_GOAL[place.role ?? ""] ?? ROLE_GOAL.practice)(followed) : ROLE_ONLY_GOAL[place.role ?? ""]);
  }
  const tables = concept ? CONCEPT_TABLES[concept] ?? [] : [];
  const hasTable = l.sections.some((s) => s.tables?.length);
  const grown = growPatch(l, concept, place);
  if (grown.length) p.insert = grown;
  let tabled = hasTable || !tables.length || !!p.insert?.some((x) => x.section.tables?.length);
  l.sections.forEach((s, i) => {
    const teachingSection = !NOT_TEACHING.test(s.heading);
    const sp: NonNullable<LessonPatch["sections"]>[number] = {};
    if (!s.reteach && teachingSection) sp.reteach = autoReteach(s.body);
    if (!tabled && teachingSection) {
      sp.addTables = tables.slice(0, 1);
      tabled = true;
    }
    if (sp.reteach || sp.addTables) p.sections![i] = sp;
  });
  // A practice lesson whose only cards are a recap or a warm-up: that recap
  // is the "Let's look again" text.
  const anyReteach = l.sections.some((s) => s.reteach) || Object.values(p.sections!).some((sp) => sp.reteach) || !!p.insert?.length;
  if (!anyReteach && l.sections.length) {
    const i = l.sections.findIndex((s) => autoReteach(s.body));
    if (i >= 0) p.sections![i] = { ...p.sections![i], reteach: autoReteach(l.sections[i].body) };
  }
  return p;
}

/** A lesson as the redesigned course shows it: its hand-written patch, then
 * the baseline for whatever the patch left empty. */
export function redesignLesson(l: Lesson, patch: LessonPatch | undefined, concept?: string | null, place: LessonPlace = {}): Lesson {
  const patched = applyPatch(l, patch);
  return applyPatch(patched, autoPatch(patched, concept, place));
}

// Spain's vosotros forms. Beginner lessons teach standard Latin American
// Spanish, so a Beginner question never asks the learner to produce one.
export const VOSOTROS = /(?<!\p{L})(vosotros|vosotras|sois|estáis|habéis|tenéis|vais|vivís|escribís|abrís|decís|venís|salís|\p{L}+(?:áis|éis))(?!\p{L})/iu;
const producedSpanish = (e: Exercise): string =>
  e.type === "translate" && e.direction === "en-es" ? e.answer : e.type === "speak" ? e.text : e.type === "dictation" ? e.audio : e.type === "fill-blank" ? e.answer : e.type === "word-order" ? e.words.join(" ") : "";
const asksVosotros = (e: Exercise) => VOSOTROS.test(producedSpanish(e)) || (e.type === "translate" && /vosotros|vosotras/i.test(e.prompt + " " + e.source));

// "Yo no soy de aquí" as the key also accepts "No soy de aquí" (Ricardo's
// review, SP-02: a correct answer must never be marked wrong).
const SUBJECT = /^(Yo|Nosotros|Nosotras) (?=\p{L})/u;
function withDroppedSubject(e: Exercise): Exercise {
  if (e.type !== "translate" || e.direction !== "en-es" || !SUBJECT.test(e.answer)) return e;
  const bare = e.answer.replace(SUBJECT, "");
  const alt = bare.charAt(0).toUpperCase() + bare.slice(1);
  return (e.altAnswers ?? []).includes(alt) ? e : { ...e, altAnswers: [...(e.altAnswers ?? []), alt] };
}

// A lesson of corrections has few sentences speaking.ts can turn into a
// spoken question. When it is still short of one in five, the answers it
// asks the learner to type are said instead: the corrected sentence, or the
// translation. Same sentences, nothing new written.
const FIX_TASK = /\b(corrige|correct|fix|mistake|error)\b/i;
const PLAIN_TRANSLATE = /^\s*(traduce|translate)\b/i;
function sayMore(l: Lesson): Lesson {
  if (!speaksSpanish(l)) return l;
  const all = [...l.sections.flatMap((s) => s.checkpoint ?? []), ...l.exercises];
  const said = new Set(all.flatMap((e) => (e.type === "speak" ? [e.text] : [])));
  let need = speakTarget(Math.min(20, all.length)) - said.size;
  if (need <= 0) return l;
  const english = l.level === "A1" || l.level === "A2";
  const added: Exercise[] = [];
  for (const e of [...all].reverse()) {
    if (need <= 0) break;
    if (e.type !== "translate" || e.direction !== "en-es" || said.has(e.answer)) continue;
    if (e.answer.length < 8 || e.answer.length > 120 || /[_/[\]]/.test(e.answer + e.source)) continue;
    const fixing = FIX_TASK.test(e.prompt);
    if (!fixing && !PLAIN_TRANSLATE.test(e.prompt)) continue;
    const prompt = fixing
      ? english ? `Say the corrected sentence out loud: "${e.source}"` : `Di la frase corregida en voz alta: «${e.source}»`
      : english ? `Say it in Spanish: "${e.source}"` : `Dilo en español: "${e.source}"`;
    said.add(e.answer);
    added.push({ type: "speak", text: e.answer, prompt, ...(e.altAnswers?.length ? { altAnswers: e.altAnswers } : {}), explanation: `${english ? "One way to say it" : "Una forma de decirlo"}: "${e.answer}". ${e.explanation ?? ""}`.trim() });
    need--;
  }
  return added.length ? { ...l, exercises: [...l.exercises, ...added] } : l;
}

/** The last touches every redesigned lesson or part gets: no vosotros to
 * produce at Beginner, the answer without its subject pronoun accepted,
 * and one question in five spoken (speaking.ts). */
function finish(l: Lesson): Lesson {
  const keep = (e: Exercise) => !(l.level === "A1" && asksVosotros(e));
  const tidy = (list: Exercise[]) => list.filter(keep).map(withDroppedSubject);
  const cleaned: Lesson = { ...l, sections: l.sections.map((s) => (s.checkpoint ? { ...s, checkpoint: tidy(s.checkpoint) } : s)), exercises: tidy(l.exercises) };
  // Spoken questions are made from the lesson's own sentences (speaking.ts). At Beginner a vosotros example
  // may be shown, never asked for, so those examples sit out while the spoken questions are made.
  const shown = l.level === "A1" ? { ...cleaned, sections: cleaned.sections.map((s) => (s.examples ? { ...s, examples: s.examples.filter((x) => !VOSOTROS.test(x.es)) } : s)) } : cleaned;
  // Twice: spoken questions add to the count, so a second pass tops the lesson up to one in five of what it now has.
  const spoken = sayMore(withSpeaking(withSpeaking([shown]))[0]);
  return shown === cleaned ? spoken : { ...spoken, sections: spoken.sections.map((s, i) => (cleaned.sections[i]?.examples ? { ...s, examples: cleaned.sections[i].examples } : s)) };
}

/** The redesigned lesson as learners get it: in parts when its Concept step
 * runs past 8 cards (split.ts), each part grown back to 5 cards if the cut
 * left it short and given the concept's table if the cut took it away. */
export function redesignParts(l: Lesson, patch: LessonPatch | undefined, concept?: string | null, place: LessonPlace = {}): Lesson[] {
  const parts = splitLesson(redesignLesson(l, patch, concept, place));
  if (parts.length < 2) return parts.map(finish);
  const table = concept ? (CONCEPT_TABLES[concept] ?? [])[0] : undefined;
  return parts.map((part) => {
    let grown = applyPatch(part, { insert: growPatch(part, concept, place) });
    if (place.role === "grammar" && table && !grown.sections.some((s) => s.tables?.length) && cardCount(grown) < 8)
      grown = applyPatch(grown, { insert: [{ section: { heading: "At a glance", body: ["Here is the whole pattern in one place, to keep next to this part."], tables: [table], reteach: table.note ?? "Look at the table again: it holds the whole pattern." } }] });
    return finish(grown);
  });
}
