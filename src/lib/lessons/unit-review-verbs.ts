// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-verbs.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Present-tense verbs" unit review, written by hand (Unit 3 audit,
// 17.01-17.04): the listening options differ only in who acts, so the verb
// ending decides the answer; every spoken item uses this unit's verbs; and
// the quiz checks each verb family and stem change once, in new sentences,
// with the unit's typical mistakes as options. The generated review
// supplies the slug, title, number and writing task.

const listening: Exercise[] = [
  lc("Pedimos la cuenta.", "Who asks for the bill?", ["We do", "They do", "I do"], 0, "Pedimos: -imos is nosotros, and pedir keeps its e in nosotros."),
  lc("¿Quieres ir al cine?", "What does it mean?", ["Do you want to go to the movies?", "Do they want to go to the movies?", "I want to go to the movies."], 0, "Quieres: -es is tú, and querer takes ie inside the boot."),
  lc("Vivimos en el centro.", "Who lives in the center?", ["We do", "They do", "You (tú) do"], 0, "Vivimos: -imos is nosotros. Viven would be they, vives you."),
  dict("Mi hermano y yo compramos pan.", "Mi hermano y yo is \"we\", so the -ar verb takes -amos: compramos."),
  dict("Ella no entiende la pregunta.", "Entiende: e → ie inside the boot, and -e for ella."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"We eat at home and they work a lot.\"", text: "Comemos en casa y ellos trabajan mucho.", altAnswers: ["Nosotros comemos en casa y ellos trabajan mucho.", "Comemos en casa y ellas trabajan mucho."], explanation: "-Emos for nosotros with an -er verb, -an for ellos with an -ar verb." },
  { type: "speak", prompt: "Say it in Spanish: \"Do you (informal) write emails?\"", text: "¿Escribes correos?", altAnswers: ["¿Tú escribes correos?", "¿Escribes correos electrónicos?", "¿Escribes emails?"], explanation: "Escribir is -ir, but tú takes -es, the same as -er verbs." },
  { type: "speak", prompt: "Say it in Spanish: \"I can't sleep.\"", text: "No puedo dormir.", altAnswers: ["Yo no puedo dormir."], explanation: "Puedo is inside the boot (o → ue); dormir stays in the infinitive after it." },
  { type: "speak", prompt: "Say it in Spanish: \"We play soccer and then we order a pizza.\"", text: "Jugamos al fútbol y después pedimos una pizza.", altAnswers: ["Jugamos fútbol y después pedimos una pizza.", "Nosotros jugamos al fútbol y después pedimos una pizza.", "Jugamos al fútbol y luego pedimos una pizza."], explanation: "Nosotros is outside the boot: jugamos and pedimos keep the infinitive's vowel." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"Ustedes ___ la radio.\" (escuchar)", ["escuchan", "escucháis", "escuchas", "escuchamos"], "Ustedes takes the ellos ending: escuchan. (-Ar verbs.)"),
  mc("\"Mis amigos y yo ___ en el parque.\" (correr)", ["corremos", "corren", "corro", "corres"], "Mis amigos y yo is \"we\", so correr takes -emos: corremos. (-Er verbs.)"),
  mc("\"Nosotros ___ en una casa grande.\" (vivir)", ["vivimos", "vivemos", "viven", "vivís"], "Vivir is -ir, so nosotros takes -imos: vivimos. (-Er vs. -ir.)"),
  mc("\"Yo ___ que es difícil.\" (pensar)", ["pienso", "penso", "pensamos", "piensa"], "Yo is inside the boot: pensar → pienso. (E → ie.)"),
  mc("\"¿Ustedes ___ venir mañana?\" (poder)", ["pueden", "poden", "podemos", "puedemos"], "Ustedes is inside the boot: pueden. Only nosotros (podemos) keeps the o. (O → ue.)"),
  mc("\"Nosotros ___ la comida.\" (servir)", ["servimos", "sirvimos", "sirven", "servemos"], "Nosotros keeps the e of servir and takes -imos: servimos. (E → i.)"),
  mc("Which sentence is correct?", ["Mis hermanas son altas y leen mucho.", "Mis hermanas son altos y leen mucho.", "Mis hermanas son altas y lee mucho.", "Mis hermanas es altas y leen mucho."], "Altas matches hermanas (feminine plural), and leen matches the plural subject. (Agreement.)"),
  { type: "fill-blank", prompt: "Complete with trabajar.", sentence: "Mi madre ___ en un hospital.", answer: "trabaja", explanation: "Mi madre is \"she\": -ar verbs take -a. (-Ar verbs.)" },
];

/** The review with the hand-written items in place of the generated ones. */
export function verbsUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's verbs. Play each one as often as you like (🐢 plays it slowly). The ending tells you who acts."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's verbs: -ar, -er and -ir endings and the stem changers, then a short quiz on each verb family.",
    goal: "hear, say and choose the right present-tense form of regular and stem-changing verbs, getting at least 6 of 8 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
