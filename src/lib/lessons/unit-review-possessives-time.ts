// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-possessives-time.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Possessives, numbers & time" unit review, written by hand (Unit 6
// audit, 13.01-13.02): the listening options differ only in the owner or
// the minutes, every spoken item uses this unit's grammar, and the quiz
// checks each topic once in new sentences, with the typical mistakes as
// options (the typed checker would forgive ventisiete or sietenta as
// typos). The generated review supplies the slug, title, number and
// writing task.

const listening: Exercise[] = [
  lc("Son las dos y cuarto.", "What time is it?", ["2:15", "2:45", "1:45"], 0, "Y cuarto: a quarter past. 1:45 would be las dos menos cuarto."),
  lc("Nuestros abuelos viven en el campo.", "Who lives in the countryside?", ["Our grandparents", "My grandparents", "Their grandparents"], 0, "Nuestros: our. Mis would be my, sus their."),
  lc("El tren sale a las ocho menos veinte.", "When does the train leave?", ["7:40", "8:20", "8:40"], 0, "Menos counts down from the next hour: eight minus twenty is 7:40."),
  dict("Mi hermana tiene veintiún años.", "Veintiún: one word, shortened before años, with an accent."),
  dict("Me levanto a las siete y media.", "Me levanto: the me is part of the phrase. Y media: half past."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"My brother is sixteen and our house is near the park.\"", text: "Mi hermano tiene dieciséis años y nuestra casa está cerca del parque.", altAnswers: ["Mi hermano tiene dieciséis años, y nuestra casa está cerca del parque."], explanation: "Tener for age, nuestra for casa, and de + el = del." },
  { type: "speak", prompt: "Say it in Spanish: \"It's a quarter to eight and the class is at eight.\"", text: "Son las ocho menos cuarto y la clase es a las ocho.", altAnswers: ["Son las siete y cuarenta y cinco y la clase es a las ocho."], explanation: "Son las for the time now, a las for when the class is." },
  { type: "speak", prompt: "Say it in Spanish: \"I get up at seven and I have breakfast at half past seven.\"", text: "Me levanto a las siete y desayuno a las siete y media.", altAnswers: ["Me levanto a las siete y luego desayuno a las siete y media."], explanation: "Me levanto takes me; desayuno doesn't. A las says when." },
  { type: "speak", prompt: "Say it in Spanish: \"The shirt costs two hundred pesos.\"", text: "La camisa cuesta doscientos pesos.", explanation: "Doscientos agrees with pesos (masculine)." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"Our keys are here.\"", ["Nuestras llaves están aquí.", "Nuestros llaves están aquí.", "Nuestra llaves están aquí.", "Mis llaves están aquí."], "Nuestro agrees with the thing owned: llaves is feminine plural, so nuestras. (Possessives.)"),
  mc("\"Their car is behind the house.\" (one car)", ["Su carro está detrás de la casa.", "Sus carro está detrás de la casa.", "Su carro está detrás la casa.", "Su carro es detrás de la casa."], "One car: su, even with several owners. Detrás needs de, and location takes estar. (Su and place words.)"),
  mc("How do you write 27?", ["veintisiete", "ventisiete", "veinte y siete", "veintesiete"], "21-29 are one word, veinti- + the unit: veintisiete. (Numbers 16-29.)"),
  mc("\"My grandfather is 71.\"", ["Mi abuelo tiene setenta y un años.", "Mi abuelo tiene sietenta y un años.", "Mi abuelo tiene setenta y uno años.", "Mi abuelo es setenta y un años."], "Setenta (not sietenta), un before años, and tener for age. (Tens and un.)"),
  mc("\"The bike costs 150 pesos.\"", ["La bicicleta cuesta ciento cincuenta pesos.", "La bicicleta cuesta cien cincuenta pesos.", "La bicicleta cuesta ciento y cincuenta pesos.", "La bicicleta cuesta cientos cincuenta pesos."], "Something follows the hundred, so ciento, with no y. (Cien and ciento.)"),
  mc("How do you say 1:30?", ["Es la una y media.", "Son las una y media.", "Es la una y medio.", "Son la una y media."], "One o'clock is singular: es la una, and media agrees with the hidden hora. (Telling time.)"),
  mc("\"The class is at a quarter to nine.\"", ["La clase es a las nueve menos cuarto.", "La clase es a las ocho menos cuarto.", "La clase son las nueve menos cuarto.", "La clase es a la nueve menos cuarto."], "A las says when, and menos counts down from the next hour. (At what time.)"),
  mc("\"I wake up at six.\"", ["Me despierto a las seis.", "Me desperto a las seis.", "Despierto a las seis.", "Me despierta a las seis."], "Me + the yo form, and despertar takes ie: me despierto. (Daily routine.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function possessivesTimeUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's words. Play each one as often as you like (🐢 plays it slowly). Listen for the owner, the number and the minutes."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's grammar: possessives and place words, numbers, ages and prices, the time, and your daily routine, then a short quiz.",
    goal: "hear, say and choose the right possessive, number and time, getting at least 6 of 8 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
