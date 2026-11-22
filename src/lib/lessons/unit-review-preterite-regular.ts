// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-preterite-regular.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A2 "The preterite: regular verbs" unit review, written by hand (A2
// Unit 1 audit, 11.01-11.02): the listening options differ only in who
// acted and whether it was now or in the past, every spoken item uses a
// preterite form of this unit, and the quiz checks each topic once in new
// sentences, with the typical mistakes as options (the typed checker passes
// a missing accent with a note). The generated review supplies the slug,
// title, number and writing task.

const listening: Exercise[] = [
  lc("Mi hermano habló con el profesor.", "Who talked to the teacher?", ["The speaker's brother, in the past", "The speaker, right now", "The speaker's brother, every day"], 0, "Habló, stressed on the end: he talked. Hablo would be \"I talk\", and habla \"he talks\"."),
  lc("Ayer comimos en casa de mis abuelos.", "What happened?", ["We ate at the grandparents' house yesterday.", "We eat at the grandparents' house every day.", "They ate at our house yesterday."], 0, "Comimos: -er verbs change in nosotros (comemos → comimos), and ayer makes it past."),
  lc("¿Llegaste tarde? —No, llegué a las ocho.", "What does the second person say?", ["I arrived at eight.", "You arrived at eight.", "I arrive at eight."], 0, "A tú question (llegaste) gets a yo answer: llegué, with gu and the accent."),
  dict("El sábado busqué mis llaves por toda la casa.", "Busqué: c → qu before é. Sábado keeps its accent and its small s."),
  dict("Laura, ¿sabes dónde está mi teléfono?", "The ¿ opens after the name; dónde keeps its accent in an indirect question."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"Yesterday I worked a lot and my sister cooked.\"", text: "Ayer trabajé mucho y mi hermana cocinó.", altAnswers: ["Ayer yo trabajé mucho y mi hermana cocinó."], explanation: "Trabajé (yo, -é) and cocinó (ella, -ó): the stress falls on the ending." },
  { type: "speak", prompt: "Say it in Spanish: \"Last night we went out and ate at a Mexican restaurant.\"", text: "Anoche salimos y comimos en un restaurante mexicano.", altAnswers: ["Anoche nosotros salimos y comimos en un restaurante mexicano."], explanation: "Salimos (the same as the present) and comimos (-er verbs change: comemos → comimos)." },
  { type: "speak", prompt: "Say it in Spanish: \"I arrived at the airport and paid for the taxi.\"", text: "Llegué al aeropuerto y pagué el taxi.", altAnswers: ["Llegué al aeropuerto y pagué el taxi"], explanation: "Two -gar verbs in yo: llegué, pagué." },
  { type: "speak", prompt: "Answer aloud: «¿Ustedes visitaron el museo?» Say: \"Yes, we visited it on Sunday.\"", text: "Sí, lo visitamos el domingo.", altAnswers: ["Sí, visitamos el museo el domingo.", "Sí, el domingo lo visitamos."], explanation: "An ustedes question gets a nosotros answer: visitamos." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"She opened the windows.\"", ["Ella abrió las ventanas.", "Ella abrio las ventanas.", "Ella abre las ventanas.", "Ella abrí las ventanas."], "-ir verbs: -ió for ella, with the accent. (Preterite endings.)"),
  mc("\"You (tú) danced all night.\"", ["Bailaste toda la noche.", "Bailastes toda la noche.", "Bailó toda la noche.", "Bailas toda la noche."], "Tú: -aste, never -astes. (Preterite endings.)"),
  mc("\"I took out my passport.\" (sacar)", ["Saqué mi pasaporte.", "Sacé mi pasaporte.", "Saque mi pasaporte.", "Sacó mi pasaporte."], "C → qu before é, plus the accent. (-car, -gar, -zar.)"),
  mc("\"My brother started university in March.\" (empezar)", ["Mi hermano empezó la universidad en marzo.", "Mi hermano empecé la universidad en marzo.", "Mi hermano empezó la universidad en Marzo.", "Mi hermano empezo la universidad en marzo."], "Only yo changes z → c; él keeps empezó, with the accent. Months are lower case. (Spelling.)"),
  mc("«Ayer ___ con mi madre por teléfono.» (I talked)", ["hablé", "hablo", "habló", "hable"], "Ayer + yo: hablé. Hablo is the present, habló is él. (Present or preterite.)"),
  mc("«¿Qué comieron ustedes?» Which answer fits?", ["Comimos pescado.", "Comieron pescado.", "Comemos pescado.", "Comí pescado, nosotros."], "An ustedes question gets a nosotros answer: comimos. (Questions and answers.)"),
  mc("\"On Saturday I visited my grandmother.\"", ["El sábado visité a mi abuela.", "El sábado visité mi abuela.", "En sábado visité a mi abuela.", "El sábado visitó a mi abuela."], "Days take el, a person as the object takes a, and yo takes -é. (Building sentences.)"),
  mc("Which sentence is written correctly?", ["Oye, ¿llegaste en tren o en autobús?", "¿Oye, llegaste en tren o en autobús?", "Oye, llegaste en tren o en autobús?", "Oye ¿llegaste en tren o en autobus?"], "The ¿ opens where the question starts, after Oye; autobús keeps its accent. (¿ and ¡.)"),
  mc("Which word needs a written accent? (Stress in capitals.)", ["facil (FA-cil)", "ciudad (ciu-DAD)", "examen (e-XA-men)", "hablan (HA-blan)"], "It ends in -l and is stressed second-to-last, against the pattern: fácil. (Stress rules.)"),
  mc("\"I don't know if he arrived.\"", ["No sé si llegó.", "No se si llegó.", "No sé sí llegó.", "No se sí llegó."], "Sé = I know, with an accent; si = if, without one. (Accent pairs.)"),
];

/** The review with the hand-written items in place of the generated ones. */
export function preteriteRegularUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's grammar. Play each one as often as you like (🐢 plays it slowly). Listen for who acted, and whether it's now or in the past."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's grammar: regular preterite endings with their accents, -car, -gar, -zar in yo, present or past, ¿ and capitals, the stress rules and the accent pairs, then a short quiz.",
    goal: "hear, say and write what happened with regular preterite verbs and their accents, getting at least 8 of 10 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
