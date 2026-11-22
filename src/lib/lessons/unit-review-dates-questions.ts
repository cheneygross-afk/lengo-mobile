// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-dates-questions.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Dates & questions" unit review, written by hand (Unit 7 audit,
// 11.01-11.02): the listening options differ only in the date, the day or
// the question word, every spoken item uses this unit's grammar, and the
// quiz checks each topic once in new sentences, with the typical mistakes
// as options (the typed checker ignores capitals and the opening ¿). The
// generated review supplies the slug, title, number and writing task.

const listening: Exercise[] = [
  lc("La boda es el veintiuno de octubre.", "When is the wedding?", ["October 21", "October 31", "December 21"], 0, "Veintiuno is 21 (treinta y uno would be 31), and octubre is October."),
  lc("Los martes tengo clase de inglés.", "When is the English class?", ["Every Tuesday", "This Tuesday only", "Every Thursday"], 0, "Los martes: every Tuesday. El martes would be one Tuesday, and jueves is Thursday."),
  lc("¿De dónde es tu profesora?", "What does the speaker ask?", ["Where the teacher is from", "Where the teacher is now", "Who the teacher is"], 0, "De dónde + ser asks for origin. ¿Dónde está? would ask where she is now."),
  dict("¿Cuántas hermanas tienes?", "Cuántas agrees with hermanas, and the question opens with ¿."),
  dict("Mi prima casi siempre llega temprano.", "Prima ends in -a for a woman; casi sits right before siempre."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"My birthday is October fifth.\"", text: "Mi cumpleaños es el cinco de octubre.", explanation: "El + a plain number + de + month: el cinco de octubre." },
  { type: "speak", prompt: "Say it in Spanish: \"Where are your cousins from?\" (to a friend)", text: "¿De dónde son tus primos?", altAnswers: ["¿De dónde son tus primas?"], explanation: "De goes to the front with dónde; primos covers boys or a mixed group." },
  { type: "speak", prompt: "Say it in Spanish: \"On Saturdays I eat with my grandparents.\"", text: "Los sábados como con mis abuelos.", altAnswers: ["Como con mis abuelos los sábados."], explanation: "Every week: los sábados, with no word for \"on\"." },
  { type: "speak", prompt: "Say it in Spanish: \"Do you want another juice? — Of course!\"", text: "¿Quieres otro jugo? —¡Por supuesto!", altAnswers: ["¿Quieres otro jugo? ¡Por supuesto!", "¿Quieres otro jugo? —¡Claro!", "¿Quieres otro jugo? ¡Claro!"], explanation: "Otro already means \"another\", so no un in front." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"I have English class on Thursdays.\" (every week)", ["Tengo clase de inglés los jueves.", "Tengo clase de inglés en los jueves.", "Tengo clase de inglés los Jueves.", "Tengo clase de inglés en jueves."], "Every week: los + day, lowercase, and no en. (Days.)"),
  mc("\"Her birthday is August first.\"", ["Su cumpleaños es el primero de agosto.", "Su cumpleaños es el primer de agosto.", "Su cumpleaños es en el uno de agosto.", "Su cumpleaños es agosto primero."], "The first is el primero (or el uno), with no en, and day before month. (Dates.)"),
  mc("My sister's son is my…", ["sobrino", "sobrina", "nieto", "primo"], "Your sister's son is your nephew: sobrino, with -o for a boy. (Family.)"),
  mc("\"How many cars do you have?\"", ["¿Cuántos carros tienes?", "¿Cuántas carros tienes?", "¿Cuánto carros tienes?", "¿Cuantos carros tienes?"], "Cuántos agrees with carros (masculine plural) and keeps its accent. (Cuánto.)"),
  mc("\"Who does your brother live with?\"", ["¿Con quién vive tu hermano?", "¿Quién vive tu hermano con?", "¿Con quien vive tu hermano?", "¿Quién vive con tu hermano?"], "Con moves to the front with quién. ¿Quién vive con tu hermano? asks who lives with him. (Prepositions up front.)"),
  mc("Answer: \"Somos de Ecuador.\" What was the question?", ["¿De dónde son ustedes?", "¿Dónde están ustedes?", "¿Adónde viajan ustedes?", "¿Quiénes son ustedes?"], "De Ecuador is origin: ¿De dónde son? (Answer first.)"),
  mc("Which question is written correctly?", ["¿Cuál es tu dirección?", "Cuál es tu dirección?", "¿Cual es tu dirección?", "¿Qué es tu dirección?"], "Opening ¿, the accent on cuál, and cuál, not qué, to ask for one item such as an address. (Writing questions.)"),
  mc("\"The keys are in the teacher's car.\"", ["Las llaves están en el carro del profesor.", "Las llaves están en el carro de el profesor.", "Las llaves son en el carro del profesor.", "Las llaves están en el carro al profesor."], "De + el = del, and location takes estar. (Al and del.)"),
  mc("\"Although it's late, I'm still at work.\"", ["Aunque es tarde, todavía estoy en el trabajo.", "Además es tarde, todavía estoy en el trabajo.", "Aunque es tarde, todavía soy en el trabajo.", "Aunque es tarde, casi estoy en el trabajo."], "Aunque for an obstacle, todavía for still, and estar for where you are. (Linking words.)"),
  mc("\"There isn't any market nearby.\"", ["No hay ningún mercado cerca.", "No hay ninguno mercado cerca.", "Hay ningún mercado cerca.", "No hay ninguna mercado cerca."], "Ninguno shortens to ningún before a masculine noun, and no stays before hay. (Ninguno.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function datesQuestionsUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's grammar. Play each one as often as you like (🐢 plays it slowly). Listen for the date, the day and the question word."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's dates and questions: el and los with days, dates, family words, question words with accents and ¿, al and del, and the linking words, then a short quiz.",
    goal: "hear, say and write dates and questions, getting at least 8 of 10 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
