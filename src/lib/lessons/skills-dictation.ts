// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-dictation.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DictationExercise, Exercise, Lesson, LessonSection, WordOrderExercise } from "./types";

// The "Dictado" lessons (A2's dictation drill, B1's b1d-dictado-* and
// b1d-rep-*-dictado, B2's b2d-dictado-* and b2d-rep-*-dictado) were
// word-order puzzles with no audio (linguist review E1). Here their
// word-order questions become real dictations: the sentence is played
// and the learner types it. Slugs stay the same, so progress is kept.
// One word-order puzzle stays as a warm-up when the lesson has no
// word-order checkpoint of its own and at least four in its review.

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
type Conversion = { summary: string; title?: string };

const DICTADOS: Partial<Record<Level, Record<string, Conversion>>> = {
  A2: {
    "a2d-dictation-past-tense": {
      title: "Dictation Drill: Write the Story Down",
      summary: "Listen to one past-tense story sentence by sentence and write each sentence down.",
    },
  },
  B1: {
    "b1d-dictado-reacciones": { summary: "Escucha y escribe frases con verbo de emoción o duda + que + subjuntivo y pronombres." },
    "b1d-rep-formacion-dictado": { summary: "Repaso espaciado: escucha y escribe frases con formas regulares e irregulares del subjuntivo." },
    "b1d-rep-perfecto-noticias-dia": { summary: "Repaso espaciado: escucha titulares en pretérito perfecto y escríbelos." },
    "b1d-rep-ojala-deseos": { summary: "Repaso espaciado: escucha deseos con ojalá y escríbelos." },
    "b1d-dictado-relativos": { summary: "Escucha y escribe frases con relativo + preposición y pronombres." },
    "b1d-rep-pluscuamperfecto-dictado": { summary: "Repaso espaciado: escucha y escribe primeras experiencias con el pluscuamperfecto." },
    "b1d-rep-mezcla-dictado": { summary: "Repaso espaciado: escucha y escribe frases que mezclan todos los temas de B1." },
    "b1d-rep-combinados-dictado": { summary: "Repaso espaciado: escucha y escribe frases con dos pronombres." },
    "b1d-dictado-deseos-familia": { summary: "Escucha y escribe frases largas con verbo de deseo + que + subjuntivo y pronombres." },
    "b1d-dictado-ojala-impersonal": { summary: "Escucha y escribe frases con expresiones impersonales, ojalá y pronombres." },
    "b1d-dictado-mandatos": { summary: "Escucha y escribe instrucciones con pronombres pegados o antepuestos." },
    "b1d-dictado-condiciones": { summary: "Escucha y escribe frases con si, pronombres y futuro o imperativo." },
    "b1d-dictado-pasados-compuestos": { summary: "Escucha y escribe frases con he/había + participio y ya, todavía, nunca." },
    "b1d-dictado-se-ciudad": { summary: "Escucha y escribe frases con se sobre las costumbres de una ciudad." },
  },
  B2: {
    "b2d-dictado-imperfecto-subjuntivo": { summary: "Escucha y escribe frases reales con quería que, me pidió que, era mejor que." },
    "b2d-rep-relativas-dictado": { summary: "Repaso espaciado: escucha y escribe relativas abiertas." },
    "b2d-dictado-irreal-pasado": { summary: "Escucha y escribe frases de arrepentimiento y reproche." },
    "b2d-rep-si-dictado": { summary: "Repaso espaciado: escucha y escribe condiciones reales, irreales de presente y de pasado." },
    "b2d-rep-condicional-perfecto-arrepentimientos": { summary: "Repaso espaciado: escucha y escribe si hubiera…, habría…; ojalá hubiera…" },
    "b2d-rep-estilo-indirecto-dictado": { summary: "Repaso espaciado: escucha y escribe frases en estilo indirecto." },
    "b2d-rep-imperfecto-dictado": { summary: "Repaso espaciado: escucha y escribe frases con secuencia en pasado y condicional." },
    "b2d-rep-conectores-dictado": { summary: "Repaso espaciado: escucha y escribe frases con no obstante, por consiguiente, asimismo." },
    "b2d-rep-ser-estar-dictado-final": { summary: "Repaso espaciado: escucha y escribe frases con los usos más difíciles de ser, estar y haber." },
    "b2d-dictado-relativas-subjuntivo": { summary: "Escucha y escribe frases con antecedentes desconocidos o inexistentes." },
    "b2d-dictado-conjunciones": { summary: "Escucha y escribe frases con cuando, en cuanto, para que, aunque y antes de que." },
    "b2d-dictado-secuencia-mixta": { summary: "Escucha y escribe frases que mezclan presente y pasado." },
    "b2d-dictado-si-hipotesis": { summary: "Escucha y escribe frases hipotéticas, algunas con el orden invertido." },
    "b2d-dictado-estilo-indirecto": { summary: "Escucha y escribe frases con verbos introductores y cambios de tiempo." },
    "b2d-dictado-ser-estar": { summary: "Escucha y escribe frases con los usos más difíciles de ser, estar y haber." },
    "b2d-dictado-conectores": { summary: "Escucha y escribe frases formales con conectores." },
    "b2d-dictado-cuyo-el-cual": { summary: "Escucha y escribe frases con cuyo y el cual." },
    "b2d-rep-mezcla-dictado-b2": { summary: "Repaso espaciado: escucha y escribe frases largas con estructuras de B2." },
  },
};

const HOW_TO: Record<"en" | "es", LessonSection> = {
  en: {
    heading: "How the dictation works",
    body: [
      "Each sentence is read aloud and hidden. Listen once all the way through without typing, then play it again (the slow button helps) and write what you hear.",
      "Watch the spelling: written accents, b or v, h, ll or y. Punctuation and capital letters don't affect your score, but writing ¿ ? and ¡ ! is good practice.",
    ],
  },
  es: {
    heading: "Cómo funciona el dictado",
    body: [
      "Cada frase se lee en voz alta y no se ve. Escúchala entera una vez sin escribir; después vuelve a ponerla (el botón lento ayuda) y escribe lo que oyes.",
      "Cuidado con la ortografía: tildes, b o v, h, ll o y, g o j. Los signos de puntuación y las mayúsculas no cuentan para la nota, pero escribir ¿ ? y ¡ ! es buena práctica.",
    ],
  },
};

function toDictation(ex: WordOrderExercise, lang: "en" | "es"): DictationExercise {
  const sentence = ex.words.join(" ");
  const alts = (ex.altOrders ?? []).map((o) => o.join(" "));
  const gloss = ex.translation ? ` (${ex.translation})` : "";
  const lead = `${lang === "en" ? "It's written:" : "Se escribe:"} ${sentence}${gloss}`;
  return {
    type: "dictation",
    audio: sentence,
    ...(alts.length ? { altAnswers: alts } : {}),
    explanation: `${lead} ${ex.explanation}`,
  };
}

function convert(lesson: Lesson, conversion: Conversion, lang: "en" | "es"): Lesson {
  const orders = lesson.exercises.filter((e) => e.type === "word-order");
  if (orders.length === 0) throw new Error(`convertDictados: "${lesson.slug}" has no word-order questions`);
  const hasWarmUp = lesson.sections.some((s) => s.checkpoint?.some((e) => e.type === "word-order"));
  const keep = !hasWarmUp && orders.length >= 4 ? orders[0] : undefined;
  const exercises: Exercise[] = lesson.exercises.map((e) =>
    e.type === "word-order" && e !== keep ? toDictation(e, lang) : e
  );
  return {
    ...lesson,
    ...(conversion.title ? { title: conversion.title } : {}),
    summary: conversion.summary,
    sections: [HOW_TO[lang], ...lesson.sections],
    exercises,
  };
}

/** `lessons` with this level's Dictado lessons turned into real dictations. */
export function convertDictados(level: Level, lessons: Lesson[]): Lesson[] {
  const table = DICTADOS[level] ?? {};
  const known = new Set(lessons.map((l) => l.slug));
  for (const slug of Object.keys(table)) {
    if (!known.has(slug)) throw new Error(`convertDictados (${level}): unknown lesson "${slug}"`);
  }
  const lang = level === "A1" || level === "A2" ? "en" : "es";
  return lessons.map((l) => (table[l.slug] ? convert(l, table[l.slug], lang) : l));
}
