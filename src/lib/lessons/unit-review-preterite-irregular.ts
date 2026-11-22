// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-preterite-irregular.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A2 "Irregular preterites" unit review, written by hand (A2 Unit 2
// audit, 11.01-11.02): the listening options differ only in who acted and
// whether it was now or in the past, every spoken item uses this unit's
// irregular forms, and the quiz checks each topic once in new sentences,
// with the typical mistakes as options (the typed checker passes an added
// accent with a note and forgives dijieron or vineron as typos). The
// generated review supplies the slug, title, number and writing task.

const listening: Exercise[] = [
  lc("Mis padres vinieron a la fiesta.", "Who came to the party?", ["The speaker's parents, in the past", "The speaker, in the past", "The speaker's parents, every year"], 0, "Vinieron: vin- + -ieron, ellos, in the past. Vienen would be \"they come\"."),
  lc("Anoche no pude dormir.", "What does the speaker say?", ["I couldn't sleep last night.", "I can't sleep at night.", "He couldn't sleep last night."], 0, "Pude: pud- + -e, yo. Pudo would be \"he could\", and puedo the present."),
  lc("¿Adónde fuiste el sábado? —Fui a la playa y fue genial.", "What does the second person say?", ["I went to the beach and it was great.", "You went to the beach and it was great.", "I go to the beach and it's great."], 0, "Fui a la playa: ir (a + place). Fue genial: ser (a description). A tú question gets a yo answer."),
  dict("Mis amigos trajeron comida y dijeron que sí.", "Trajeron and dijeron: -eron after j, with no i and no accent."),
  dict("Ayer tuve un examen y no hice nada más.", "Tuve and hice: new stems, no written accent."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"On Saturday I had a party and my friends brought drinks.\"", text: "El sábado tuve una fiesta y mis amigos trajeron bebidas.", altAnswers: ["El sábado yo tuve una fiesta y mis amigos trajeron bebidas."], explanation: "Tuve (tuv- + -e) and trajeron (-eron after j)." },
  { type: "speak", prompt: "Say it in Spanish: \"My sister came late and didn't say anything.\"", text: "Mi hermana vino tarde y no dijo nada.", altAnswers: ["Mi hermana llegó tarde y no dijo nada."], explanation: "Vino and dijo: new stems, no accents." },
  { type: "speak", prompt: "Answer aloud: «¿Qué hicieron ustedes ayer?» Say: \"We went to the movies and it was a lot of fun.\"", text: "Fuimos al cine y fue muy divertido.", altAnswers: ["Nosotros fuimos al cine y fue muy divertido.", "Ayer fuimos al cine y fue muy divertido."], explanation: "An ustedes question gets a nosotros answer: fuimos (ir, a + place). Fue divertido is ser." },
  { type: "speak", prompt: "Say it in Spanish: \"Yesterday I had to work and I couldn't go out.\"", text: "Ayer tuve que trabajar y no pude salir.", altAnswers: ["Ayer yo tuve que trabajar y no pude salir."], explanation: "Tuve que + infinitive, and no pude: two u-stems, no accents." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"We were at the hotel all afternoon.\"", ["Estuvimos en el hotel toda la tarde.", "Estuvemos en el hotel toda la tarde.", "Estamos en el hotel toda la tarde.", "Estuvieron en el hotel toda la tarde."], "Estar → estuv- + -imos. (The u-stems.)"),
  mc("\"She put the keys on the table.\"", ["Puso las llaves en la mesa.", "Pusó las llaves en la mesa.", "Ponió las llaves en la mesa.", "Pone las llaves en la mesa."], "Pus- + -o, with no accent: the stress is on the stem. (No accents.)"),
  mc("\"My father made dinner.\"", ["Mi padre hizo la cena.", "Mi padre hico la cena.", "Mi padre hizó la cena.", "Mi padre hació la cena."], "Hic- + -o is written hizo, so it keeps the soft sound. (The i-stems.)"),
  mc("\"My friends said no.\"", ["Mis amigos dijeron que no.", "Mis amigos dijieron que no.", "Mis amigos decieron que no.", "Mis amigos dijo que no."], "After j the ellos ending is -eron: dijeron. (The j-stems.)"),
  mc("\"My cousins came by plane.\"", ["Mis primos vinieron en avión.", "Mis primos vineron en avión.", "Mis primos venieron en avión.", "Mis primos vienen en avión."], "Every stem but the j-stems keeps -ieron: vin- + -ieron. (Ellos endings.)"),
  mc("«Fuimos compañeros de clase.» What does fuimos mean here?", ["we were (ser)", "we went (ir)", "we had (tener)", "we did (hacer)"], "A noun after it and no destination: ser. (Ser or ir.)"),
  mc("«¿Qué trajiste a la fiesta?» Which answer fits?", ["Traje una ensalada.", "Trajiste una ensalada.", "Traí una ensalada.", "Trajé una ensalada."], "A tú question gets a yo answer: traje, with no accent. (Questions and answers.)"),
  mc("Which pair is right for yo? (vender, venir)", ["vendí / vine", "vendí / viní", "vende / viné", "vendije / vine"], "Vender is regular: -í with an accent. Venir is irregular: vin- + -e, no accent. (Regular or irregular.)"),
  mc("\"Currently I live in Lima.\"", ["Actualmente vivo en Lima.", "En realidad vivo en Lima.", "Finalmente vivo en Lima.", "De repente vivo en Lima."], "Actualmente = currently. \"Actually\" is en realidad. (Time words.)"),
  mc("\"I refused to eat.\"", ["No quise comer.", "No quisé comer.", "No querí comer.", "No quiero comer."], "No quise = I refused: quis- + -e, no accent. (Querer in the preterite.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function preteriteIrregularUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's grammar. Play each one as often as you like (🐢 plays it slowly). Listen for who acted, and whether it's now or in the past."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's grammar: the u, i and j stems, endings with no accent, -eron after j, fue for ser and ir, regular or irregular, and the time words, then a short quiz.",
    goal: "hear, say and write what happened with irregular preterite verbs, getting at least 8 of 10 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
