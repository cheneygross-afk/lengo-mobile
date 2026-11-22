// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit7-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { alts, applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, fbIs, mc, mcIs, spIs, trIs, warmUp, type Ex, type LessonFix } from "./unit-fixes";

// A1 Unit 7 (Dates & questions): content fixes from Claude's audit in
// Ricardo's format (ES-A1-U07_CL_2026-11-22). Content only. See
// unit-fixes.ts for why some items become choices: the checker ignores
// capital letters and the opening ¿, and forgives vivemos as a typo, while
// the lessons teach lowercase months, the ¿ and -imos.

const wordOrderStarts = (start: string) => (e: Ex) => e.type === "word-order" && e.words.join(" ").startsWith(start);
const coche = (s: string) => s.split("coche").join("carro");

const FIXES: Record<string, LessonFix> = {
  // L01
  "days-months-dates": {
    goal: "say what day it is, use el or los with days and en with months, and give any date as el + number + de + month.",
    warmUp: warmUp("Warm-up: numbers and times", "A quick look back at Unit 6. Dates use the same plain numbers.", [
      mc("How do you write 31?", ["treinta y uno", "treintaiuno", "trenta y uno", "treinta uno"], "From 31 on: tens + y + units. (Unit 6.)"),
      mc("How do you write 15?", ["quince", "diez y cinco", "quinze", "cinco diez"], "11-15 are words of their own: once, doce, trece, catorce, quince. (Unit 6.)"),
      mc("\"The class is at nine.\"", ["La clase es a las nueve.", "La clase es las nueve.", "La clase son a las nueve.", "La clase es a la nueve."], "A las + the hour says when. (Unit 6.)"),
    ]),
    items: [
      drop(trIs("Today is Wednesday.")),
      drop(fbIs("Mi hermano llega ___ marzo.")),
      chooseSentence("Mi cumpleaños es en el doce de Octubre.", ["Mi cumpleaños es el doce de Octubre.", "Mi cumpleaños es en el doce de octubre.", "Mi cumpleaños es en doce de octubre."]),
    ],
  },
  // L02
  "a1r-word-web-family-people": {
    goal: "name the people in your family and around you, switch -o and -a, and say who is who with de: la hija de mi tío es mi prima.",
  },
  // L03
  "question-words": {
    goal: "ask who, what, where, when, how, how many and why, with the question word first, its accent, and the opening ¿.",
    warmUp: warmUp("Warm-up: dates and family", "A quick look back at Lessons 1 and 2. Today you'll ask about them.", [
      mc("\"My birthday is June third.\"", ["Mi cumpleaños es el tres de junio.", "Mi cumpleaños es el tercero de junio.", "Mi cumpleaños es en el tres de junio.", "Mi cumpleaños es junio tres."], "El + a plain number + de + month, with no en. (Lesson 1.)"),
      mc("\"I study on Fridays.\" (every week)", ["Estudio los viernes.", "Estudio en los viernes.", "Estudio los Viernes.", "Estudio en viernes."], "Every week: los + day, lowercase, with no word for \"on\". (Lesson 1.)"),
      mc("My uncle's daughter is my…", ["prima", "primo", "tía", "sobrina"], "Your uncle's daughter is your cousin, a woman: prima. (Lesson 2.)"),
    ]),
    items: [
      edit(trIs("Ana vive en Sevilla."), (e) => ({ ...e, source: "Ana vive en Bogotá.", explanation: e.explanation.split("en Sevilla").join("en Bogotá") })),
      edit(trIs("Who is she?"), (e) => ({
        type: "multiple-choice",
        question: `${e.prompt}\n"${e.source}"`,
        options: ["¿Quién es ella?", "Quién es ella?", "¿Quien es ella?", "¿Quién ella es?"],
        correctIndex: 0,
        explanation: "A question opens with ¿, quién keeps its accent, and the subject ella comes after the verb.",
      })),
    ],
  },
  // L04
  "a1r-answer-first-build-question": {
    goal: "find the question behind an answer: the right question word, the verb flipped from yo to tú, and ¿adónde? or ¿de dónde? from the small word in the answer.",
    text: [
      ["Voy a Madrid. → ¿Adónde vas?", "Viajo a Lima. → ¿Adónde viajas?"],
      ["I'm going to Madrid. → Where are you going?", "I'm traveling to Lima. → Where are you traveling to?"],
    ],
  },
  // L05
  "review-possessives-prepositions-questions-1": {
    goal: "mix question words, possessives and place words in the same sentence, without notes.",
    items: [
      edit(trIs("El perro está detrás de el coche."), (e) => ({ ...e, source: "El perro está detrás de el carro.", answer: "El perro está detrás del carro.", altAnswers: ["El perro está detrás del coche.", "El perro está detrás del auto."], explanation: coche(e.explanation) })),
    ],
  },
  // L06
  "review-possessives-prepositions-questions-2": {
    goal: "mix question words, possessives, place words and ser or estar in the same sentence, without notes.",
    items: [
      choose("___ en una ciudad grande.", ["Vivemos", "Viven", "Vivamos"]),
      edit(wordOrderStarts("El regalo para mi madre"), (e) => ({ ...e, words: e.words.map((w: string) => (w === "coche" ? "carro" : w)) })),
    ],
  },
  // L07
  "a1r-error-hunt-questions-prepositions": {
    goal: "spot and fix a missing accent on a question word, qué where Spanish says cuál, and a missing al or del.",
    text: [
      ["(qué, quién, dónde, cuándo, cómo, cuánto, por qué).", "(qué, cuál, quién, dónde, cuándo, cómo, cuánto, por qué). Before es, ¿cuál? asks for one item from a set: ¿Cuál es tu número? ¿Qué es...? asks what something is."],
      ["coche", "carro"],
    ],
    items: [
      edit(mcIs("Which sentences have an error?"), (e) => ({ ...e, options: e.options.map(coche) })),
      edit(trIs("Es el coche de Ana."), (e) => ({ ...e, source: "Es el carro de Ana.", answer: "Es el carro del profesor.", altAnswers: ["Es el coche del profesor.", "Es el auto del profesor."] })),
      edit(trIs("Es el coche de el profesor."), (e) => ({ ...e, source: "Es el carro de el profesor.", answer: "Es el carro del profesor.", altAnswers: ["Es el coche del profesor.", "Es el auto del profesor."] })),
      edit(fbIs("El coche de ___ es rojo."), (e) => ({ ...e, sentence: "El carro de ___ es rojo." })),
    ],
  },
  // L08
  "vocabulary-practice-3": {
    goal: "recall the 40 family, place and time words and use them in short sentences: la gente es, detrás del, siempre or nunca.",
    text: [["detrás del coche", "detrás del carro"]],
  },
  // L09
  "a1-core-words-time-linking": {
    goal: "link ideas with todavía (no), casi, entonces, luego, además, aunque, quizás and the amount words.",
    warmUp: warmUp("Warm-up: time words and questions", "A quick look back at Lessons 3 and 8. Today's small words join them into longer sentences.", [
      mc("The opposite of siempre is…", ["nunca", "temprano", "ahora", "nada"], "Siempre ↔ nunca: learn time words in pairs. (Lesson 8.)"),
      mc("\"People here are nice.\"", ["La gente aquí es simpática.", "La gente aquí son simpáticos.", "Las gentes aquí es simpática.", "El gente aquí es simpático."], "Gente is feminine singular: la gente es simpática. (Lesson 8.)"),
      mc("\"When do you arrive?\"", ["¿Cuándo llegas?", "¿Cuando llegas?", "Cuándo llegas?", "¿Llegas cuándo?"], "¿ at the start, cuándo with its accent, and the question word first. (Lesson 3.)"),
    ]),
    text: [
      ["El piso es grande y, además, es barato.", "El apartamento es grande y, además, es barato."],
      ["The flat is big", "The apartment is big"],
    ],
    items: [
      edit(fbIs("___ no tengo coche."), (e) => ({ ...e, sentence: "___ no tengo carro." })),
      alts(spIs("El apartamento es grande y, además, es barato."), ["El piso es grande y, además, es barato.", "El apartamento es grande y además es barato."]),
    ],
  },
  // L10
  "a1-core-words-some-none-other": {
    goal: "pick out which one with otro, alguno, ninguno, cualquier, último, único, próximo and propio, each in the right form.",
    warmUp: warmUp("Warm-up: linking words", "A quick look back at Lesson 9 before the words that pick out which one.", [
      mc("\"My brother isn't home yet.\"", ["Mi hermano todavía no está en casa.", "Mi hermano todavía está en casa.", "Mi hermano casi está en casa.", "Mi hermano entonces no está en casa."], "Not yet = todavía no. (Lesson 9.)"),
      mc("\"Although I'm tired, I study.\"", ["Aunque estoy cansado, estudio.", "Además estoy cansado, estudio.", "Incluso estoy cansado, estudio.", "Aunque soy cansado, estudio."], "Aunque: an obstacle that doesn't stop you; estar for how you feel. (Lesson 9.)"),
      mc("\"There's too much food.\"", ["Hay demasiada comida.", "Hay demasiado comida.", "Hay demasiadas comida.", "Hay comida demasiado."], "Before a noun, demasiado agrees: comida is feminine singular. (Lesson 9.)"),
    ]),
    items: [drop(trIs("We need another table."))],
  },
};

export function withUnit7Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit7SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
