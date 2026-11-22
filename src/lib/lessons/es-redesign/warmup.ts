// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/warmup.ts by scripts/sync-content.mjs -- edit it there, not here.
// The warm-up that opens a redesigned lesson (Ricardo's review, SP-09:
// spaced, mixed retrieval). Four quick questions from the lessons 1, 3 and
// 6 back in the new course order, one of them a "say it in Spanish"
// question. Nothing is written for it: the questions are copies of ones
// the learner has already met, credited to the lesson they came from
// (meta.from), so a miss counts against the right idea.
import type { Exercise, Lesson, LessonSection } from "../types";

export const WARM_UP_HEADING = "Warm-up: do you still have it?";
const HAS_OWN = /^warm-up: what do you remember/i;
/** How far back the warm-up reaches, in lessons. */
export const WARM_UP_BACK = [1, 3, 6];

// A question that only makes sense inside its own lesson (it points at a
// dialogue, a text or a picture) can't travel.
const NEEDS_ITS_LESSON = /dialogue|exchange|passage|the text|the story|the scene|above|the notes|the message|the email|el texto|el di[aá]logo|la lectura|la escena|el mensaje|el aviso|el correo|arriba|this lesson/i;
const textOf = (e: Exercise) => ("prompt" in e && e.prompt ? e.prompt : "") + " " + ("question" in e && e.question ? e.question : "");
const travels = (e: Exercise) => !NEEDS_ITS_LESSON.test(textOf(e));
const quick = (e: Exercise) => (e.type === "multiple-choice" || e.type === "fill-blank" || e.type === "word-order" || (e.type === "translate" && e.direction === "es-en")) && travels(e);
const produces = (e: Exercise) => e.type === "translate" && e.direction === "en-es" && /translate|traduce/i.test(e.prompt) && travels(e);

// A lesson's questions: its practice first (so "#n" is the practice
// question's own number), then the checks between its cards.
const pool = (l: Lesson): Exercise[] => [...l.exercises, ...l.sections.flatMap((s) => s.checkpoint ?? [])];
const copy = (e: Exercise, l: Lesson, i: number): Exercise => ({ ...e, meta: { ...e.meta, from: e.meta?.from ?? `${l.slug}#${i}`, section: undefined } });

/** The warm-up questions for a lesson, given the lessons before it in
 * course order (nearest last). Empty for the first lesson of the course. */
export function warmUpFor(before: Lesson[]): Exercise[] {
  const out: Exercise[] = [];
  const used = new Set<string>();
  const take = (l: Lesson | undefined, ok: (e: Exercise) => boolean, nth = 0) => {
    if (!l) return;
    // Deterministic, but not always the lesson's first question.
    const all = pool(l);
    // A dialogue or mission lesson asks about its own scene: its multiple-choice questions stay home.
    const scene = /dialogue|mission|story|reading|listening|lectura/.test(l.slug);
    const hits = all.map((e, i) => i).filter((i) => ok(all[i]) && !(scene && all[i].type === "multiple-choice") && !used.has(`${l.slug}#${i}`));
    if (!hits.length) return;
    const i = hits[Math.min(hits.length - 1, nth)];
    used.add(`${l.slug}#${i}`);
    out.push(copy(all[i], l, i));
  };
  const at = (back: number) => before[before.length - back];
  WARM_UP_BACK.forEach((back, k) => take(at(back), quick, k + 1));
  // One to produce, from the lesson just before (else the nearest that has
  // one): a plain "translate to Spanish" first, else any sentence to write in Spanish.
  const writes = (e: Exercise) => e.type === "translate" && e.direction === "en-es" && travels(e);
  for (const ok of [produces, writes]) {
    const n = out.length;
    for (const back of [1, 2, 3, 4, 5, 6]) {
      take(at(back), ok, 1);
      if (out.length > n) break;
    }
    if (out.length > n) break;
  }
  // Early in the course there are few lessons to reach back to: the nearest ones give a second question.
  for (const back of [1, 2, 3]) if (out.length < 3) take(at(back), quick, 2);
  return out;
}

/** The lesson with its warm-up as an opening card. Section numbers on the
 * lesson's own questions move up by one to match. */
export function withWarmUp(l: Lesson, before: Lesson[]): Lesson {
  // A lesson that already opens by asking what the learner remembers from earlier lessons keeps its own.
  if (l.sections.some((s) => HAS_OWN.test(s.heading))) return l;
  const questions = warmUpFor(before);
  if (questions.length < 2) return l;
  const section: LessonSection = {
    heading: WARM_UP_HEADING,
    body: [`${questions.length} quick questions from earlier lessons, before anything new. No looking back.`],
    checkpoint: questions,
  };
  return {
    ...l,
    sections: [section, ...l.sections],
    exercises: l.exercises.map((e) => (typeof e.meta?.section === "number" ? { ...e, meta: { ...e.meta, section: e.meta.section + 1 } } : e)),
  };
}
