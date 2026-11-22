// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-review-irregulars.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson, LessonSection } from "./types";
import { dict, lc } from "./skills-authoring";

// The A1 "Everyday irregulars" unit review, written by hand (Unit 4 audit):
// listening options differ only in who acts or in saber/conocer, speaking
// uses the unit's odd yo forms, and the quiz checks each verb group once in
// new sentences, with the typical mistakes as options (the typed checker
// would forgive conosco or tiengo as typos). The generated review supplies
// the slug, title, number and writing task.

const listening: Exercise[] = [
  lc("Salgo a las ocho.", "Who leaves at eight?", ["I do", "She does", "We do"], 0, "Salgo: the -go form is always yo."),
  lc("¿Conoces a mi hermana?", "What is the question?", ["Do you know my sister?", "Do you know where my sister is?", "Does my sister know you?"], 0, "Conocer a + a person: to know someone. A fact (where she is) would be saber."),
  lc("Tenemos que trabajar mañana.", "Who has to work tomorrow?", ["We do", "They do", "I do"], 0, "Tenemos: nosotros keeps the e. Tienen would be they, tengo I."),
  dict("Traigo café para todos.", "Traigo: traer has -igo in yo."),
  dict("No sé dónde vive.", "Sé, with an accent: I know (a fact). Dónde introduces information, so it's saber."),
];

const speaking: Exercise[] = [
  { type: "speak", prompt: "Say it in Spanish: \"I do my homework and then I go out.\"", text: "Hago la tarea y después salgo.", altAnswers: ["Hago la tarea y luego salgo.", "Yo hago la tarea y después salgo.", "Hago mi tarea y después salgo."], explanation: "Hago and salgo: two -go yo forms." },
  { type: "speak", prompt: "Say it in Spanish: \"I know Lima, but I don't know where the hotel is.\"", text: "Conozco Lima, pero no sé dónde está el hotel.", altAnswers: ["Yo conozco Lima, pero no sé dónde está el hotel."], explanation: "A place you've been: conocer. Where something is: saber." },
  { type: "speak", prompt: "Say it in Spanish: \"My friends are coming at nine and they say it's a party.\"", text: "Mis amigos vienen a las nueve y dicen que es una fiesta.", explanation: "Vienen and dicen: the boot forms of venir and decir." },
  { type: "speak", prompt: "Say it in Spanish: \"I can't hear you, I have to go out.\"", text: "No te oigo, tengo que salir.", altAnswers: ["No te oigo, tengo que irme.", "No te oigo. Tengo que salir."], explanation: "Oigo and tengo in yo; salir stays in the infinitive after tengo que." },
];

const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });

const quiz: Exercise[] = [
  mc("\"Yo ___ la mesa.\" (poner)", ["pongo", "pono", "pone", "ponemos"], "Poner → pongo: a -go yo form. (Yo-go verbs.)"),
  mc("\"Yo ___ un regalo.\" (traer)", ["traigo", "traego", "trao", "trae"], "Traer → traigo. (Yo-go verbs.)"),
  mc("\"¿Tú ___ hermanos?\" (tener)", ["tienes", "tenes", "tengo", "tiene"], "Tú is inside the boot: tienes. (Tener and venir.)"),
  mc("\"Ellos ___ que sí.\" (decir)", ["dicen", "decen", "digen", "dice"], "Decir changes e → i in the boot: dicen. (Decir.)"),
  mc("\"Yo no ___ a nadie aquí.\" (conocer)", ["conozco", "conosco", "conoco", "sé"], "Vowel + -cer → -zco, and a person is conocer: conozco. (Conocer.)"),
  mc("\"I know how to cook.\"", ["Sé cocinar.", "Conozco cocinar.", "Sé a cocinar.", "Sé cómo cocino."], "A skill is saber + infinitive: sé cocinar. (Saber vs. conocer.)"),
  mc("\"We have to leave now.\"", ["Tenemos que salir ahora.", "Tienemos que salir ahora.", "Tenemos salir ahora.", "Tenemos que salimos ahora."], "Tener que + infinitive; nosotros keeps the e. (Verb + infinitive.)"),
  { type: "fill-blank", prompt: "Complete with dar.", sentence: "Yo te ___ mi número.", answer: "doy", explanation: "Dar → doy, like soy and voy. (Dar, ver, saber.)" },
];

/** The review with the hand-written items in place of the generated ones. */
export function irregularsUnitReview(generated: Lesson): Lesson {
  const writing = generated.sections.find((s) => s.checkpoint?.some((e) => e.type === "write"));
  const sections: LessonSection[] = [
    { heading: "Listening", body: ["Five short clips with this unit's verbs. Play each one as often as you like (🐢 plays it slowly). Listen for who acts and for saber or conocer."], checkpoint: listening },
    { heading: "Speaking", body: ["Four English sentences: say each one in Spanish out loud, then check your answer. Your recordings aren't saved."], checkpoint: speaking },
    ...(writing ? [writing] : []),
  ];
  return {
    ...generated,
    summary: "Hear, say and write the unit's irregular verbs: the -go and -zco yo forms, tener, venir, decir and oír, saber or conocer, and verb + infinitive, then a short quiz.",
    goal: "hear, say and choose the right form of the unit's irregular verbs, getting at least 6 of 8 quiz questions right.",
    sections,
    exercises: quiz,
  };
}
