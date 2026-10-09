// Synced from cheneygross-afk/lengo:src/lib/stories/storyUi.ts by scripts/sync-content.mjs -- edit it there, not here.
import { isEnglishStoryPath, isFrenchStoryPath } from "./storyPaths";

// The fixed words on story pages: English for the Spanish course's free
// readings, Spanish for the English for Spanish speakers course (whose
// readers are native Spanish speakers). Picked by the story's levelPath.

const EN = {
  back: (level: string) => `← ${level} readings`,
  comprehension: "Comprehension check",
  answered: (n: number, total: number, correct: number) =>
    `${n}/${total} answered${n > 0 ? ` · ${correct} correct` : ""}`,
  niceWork: "Nice work!",
  gotRight: (correct: number, total: number) => `You got ${correct} of ${total} right.`,
  next: "Next",
  backTo: (level: string) => `Back to ${level} readings`,
  moreAria: (level: string) => `More ${level} stories`,
  moreHeading: (level: string) => `More free ${level} stories`,
  allLink: (level: string) => `All ${level} readings →`,
  correct: "Correct!",
  notQuite: "Not quite.",
  keyWords: "Key words in this story",
  listen: "▶ Listen to the story",
  stop: "■ Stop",
  showTranslation: "Show English",
  hideTranslation: "Hide English",
  tapA: "Tap a",
  dottedWord: "dotted word",
  forItsMeaning: "for its meaning.",
  wordsToKnow: (n: number) => `Words to know (${n})`,
  selectHint: "Select any text to highlight it, or a word to translate it or save it to your flashcards.",
  selectedText: "Selected text",
  translate: "Translate",
  save: "+ Save",
  saved: "Saved ✓",
  saving: "Saving…",
  translating: "Translating…",
  loginHighlight: "Log in to highlight",
  highlight: "Highlight",
  removeHighlight: "Remove highlight",
  fromHere: "▶ From here",
  fromHereAria: (n: number) => `Listen from paragraph ${n}`,
  loginTranslate: "Log in to translate this word",
  loginSave: "Log in to save words",
  noTranslation: "No translation found",
  translationUnavailable: "Translation is unavailable right now",
  shortStories: "Short stories",
  shortStoriesIntro: (n: number) =>
    `${n} original stor${n === 1 ? "y" : "ies"} written for this level, each with a comprehension check.`,
  nonfiction: "Nonfiction",
  nonfictionIntro: (n: number) =>
    `${n} original article${n === 1 ? "" : "s"}: explainers, news-style pieces, columns and workplace texts, each with a comprehension check.`,
  read: "Read →",
};

export type StoryUi = typeof EN;

const ES: StoryUi = {
  back: (level) => `← Historias de ${level}`,
  comprehension: "Comprensión lectora",
  answered: (n, total, correct) =>
    `${n}/${total} respondidas${n > 0 ? ` · ${correct} correcta${correct === 1 ? "" : "s"}` : ""}`,
  niceWork: "¡Muy bien!",
  gotRight: (correct, total) => `Has acertado ${correct} de ${total}.`,
  next: "Siguiente",
  backTo: (level) => `Volver a las historias de ${level}`,
  moreAria: (level) => `Más historias de ${level}`,
  moreHeading: (level) => `Más historias de ${level}`,
  allLink: (level) => `Todas las historias de ${level} →`,
  correct: "¡Correcto!",
  notQuite: "No del todo.",
  keyWords: "Palabras clave de esta historia",
  listen: "▶ Escuchar la historia",
  stop: "■ Parar",
  showTranslation: "Mostrar traducción",
  hideTranslation: "Ocultar traducción",
  tapA: "Toca una",
  dottedWord: "palabra subrayada",
  forItsMeaning: "para ver su significado.",
  wordsToKnow: (n) => `Palabras útiles (${n})`,
  selectHint: "Selecciona un texto para resaltarlo, o una palabra para traducirla o guardarla en tus tarjetas.",
  selectedText: "Texto seleccionado",
  translate: "Traducir",
  save: "+ Guardar",
  saved: "Guardada ✓",
  saving: "Guardando…",
  translating: "Traduciendo…",
  loginHighlight: "Inicia sesión para resaltar",
  highlight: "Resaltar",
  removeHighlight: "Quitar resaltado",
  fromHere: "▶ Desde aquí",
  fromHereAria: (n) => `Escuchar desde el párrafo ${n}`,
  loginTranslate: "Inicia sesión para traducir esta palabra",
  loginSave: "Inicia sesión para guardar palabras",
  noTranslation: "No se encontró traducción",
  translationUnavailable: "La traducción no está disponible ahora",
  shortStories: "Historias",
  shortStoriesIntro: (n) =>
    `${n} historia${n === 1 ? "" : "s"} original${n === 1 ? "" : "es"} escrita${n === 1 ? "" : "s"} para este nivel, cada una con preguntas de comprensión.`,
  nonfiction: "No ficción",
  nonfictionIntro: (n) =>
    `${n} texto${n === 1 ? "" : "s"} original${n === 1 ? "" : "es"} (artículos, noticias, columnas...), cada uno con preguntas de comprensión.`,
  read: "Leer →",
};

// The French course (English-speaking readers): English labels, a
// neutral "translation" toggle, and links within its own stories pages.
const FR: StoryUi = {
  ...EN,
  back: (level) => `← ${level} stories`,
  backTo: (level) => `Back to ${level} stories`,
  moreHeading: (level) => `More ${level} stories`,
  allLink: (level) => `All ${level} stories →`,
  showTranslation: "Show translation",
  hideTranslation: "Hide translation",
};

export function storyUi(levelPath: string): StoryUi {
  if (isFrenchStoryPath(levelPath)) return FR;
  return isEnglishStoryPath(levelPath) ? ES : EN;
}

/** The same, picked by the story text's speech tag ("en-US" in the
 * English course, "fr-FR" in the French course). */
export function storyUiForLang(lang: string): StoryUi {
  if (lang.startsWith("fr")) return FR;
  return lang.startsWith("en") ? ES : EN;
}
