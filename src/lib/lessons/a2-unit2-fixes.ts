// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-unit2-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, fbIs, mc, mcIs, spIs, trIs, warmUp, type LessonFix } from "./unit-fixes";

// A2 Unit 2 (Irregular preterites): content fixes from Claude's audit in
// Ricardo's format (ES-A2-U02_CL_2026-11-22). Content only. See
// unit-fixes.ts for why some items become choices: the checker passes an
// added accent with a note (tuvé, vinó, dijé, fué) and forgives dijieron,
// quiseron, vineron, podieron and hacimos as typos, while this unit teaches
// exactly the unaccented endings, -eron after j and -ieron elsewhere, and
// the new stems. Items whose point is one of those become choices with the
// slip as an option; typed items whose point is the stem stay typed.
// Lessons 9 and 10 are one lesson split in two, fixed under its base slug.

const carro = (s: string) => s.split("coche").join("carro");

const FIXES: Record<string, LessonFix> = {
  // L01
  "preterite-irregular-verbs-1": {
    goal: "say what happened with the most common irregular verbs: the new stem (tuv-, hic-, dij-), the shared endings with no accent, and fui for both ser and ir.",
    warmUp: warmUp("Warm-up: the regular preterite", "A quick look back at Unit 1. Regular verbs put the accent on yo and él. Today's verbs don't.", [
      mc("\"Yesterday I ate at home.\"", ["Ayer comí en casa.", "Ayer comi en casa.", "Ayer como en casa.", "Ayer comió en casa."], "Regular -er verbs, yo: -í, with an accent. (Unit 1.)"),
      mc("\"She talked to the teacher.\"", ["Habló con el profesor.", "Hablo con el profesor.", "Hablé con el profesor.", "Habla con el profesor."], "Regular él / ella: -ó, with an accent. Hablo would be \"I talk\". (Unit 1.)"),
      mc("\"They lived in Lima.\"", ["Vivieron en Lima.", "Viveron en Lima.", "Vivimos en Lima.", "Viven en Lima."], "-er and -ir verbs take -ieron for ellos. Keep it in mind: most of today's verbs take it too. (Unit 1.)"),
    ]),
    items: [
      choose("Ayer ___ una cita con el médico.", ["tuvé", "tení", "tuvo"]),
      choose("Mis primos no ___ ir al museo.", ["quiseron", "querieron", "quisimos"]),
      choose("Mis padres ___ que sí.", ["dijieron", "decieron", "dijimos"]),
      chooseSentence("Ella viene en autobús.", ["Ella vinó en autobús.", "Ella venió en autobús.", "Ella viene en autobús."]),
      chooseSentence("Yo dije la verdad.", ["Ellos dijieron la verdad.", "Ellos decieron la verdad.", "Ellos dijo la verdad."]),
      drop(fbIs("Nosotros ___ en la playa todo el día.")),
      drop(mcIs("Which verbs use the irregular stem with \"u\"?")),
      drop(trIs("Tienen un problema.")),
    ],
  },
  // L02
  "a2d-stem-groups-sort": {
    goal: "sort the irregular verbs into the u, i and j groups and use each one in every person, with -eron after j.",
    items: [
      choose("Mi hermana ___ a la fiesta con su novio.", ["vinó", "venió", "vine"]),
      choose("Mis padres me ___ la verdad.", ["dijieron", "decieron", "dijimos"]),
      choose("¿Qué ___ ustedes el fin de semana?", ["hiceron", "hacieron", "hicimos"]),
      chooseSentence("Ella pone la mesa.", ["Ella pusó la mesa.", "Ella ponió la mesa.", "Ella pone la mesa."]),
      chooseSentence("Mis primos vienen en avión.", ["Mis primos vineron en avión.", "Mis primos venieron en avión.", "Mis primos vinimos en avión."]),
      chooseSentence("Los niños no quisó comer la sopa.", ["Los niños no quiseron comer la sopa.", "Los niños no quiso comer la sopa.", "Los niños no quisó comer la sopa."]),
      edit(trIs("I put the suitcase in the car and I said goodbye."), (e) => ({ ...e, answer: "Puse la maleta en el carro y dije adiós.", altAnswers: ["Puse la maleta en el coche y dije adiós.", "Puse la maleta en el auto y dije adiós.", "Puse la maleta en el carro y me despedí.", "Puse la maleta en el coche y me despedí."] })),
    ],
  },
  // L03
  "a2d-ser-ir-context": {
    goal: "tell from the context whether fui, fue or fueron comes from ser (was) or ir (went), and use both.",
    items: [
      choose("La fiesta ___ increíble.", ["fué", "fui", "fueron"]),
      edit(mcIs("«Fueron a la playa en coche.»"), (e) => ({ ...e, question: carro(e.question) })),
      chooseSentence("Mis padres van a México.", ["Mis padres fuieron a México.", "Mis padres fue a México.", "Mis padres van a México."]),
    ],
  },
  // L04
  "preterite-irregular-verbs-2": {
    goal: "follow a short story told with irregular preterites and order its events with time words like primero, luego, de repente and anoche.",
    text: [
      ["Estuve trabajando hasta las once.", "Estuve en la oficina hasta las once."],
      ["I was working until eleven.", "I was at the office until eleven."],
    ],
    items: [
      choose("El mes pasado ella ___ que no.", ["dijó", "dició", "dije"]),
      choose("La semana pasada ___ al médico dos veces.", ["fuí", "fue", "fuiste"]),
      edit((e) => e.type === "write" && e.modelAnswer.includes("problema con el coche"), (e) => ({ ...e, modelAnswer: carro(e.modelAnswer) })),
    ],
  },
  // L05
  "a2r-transform-present-to-preterite": {
    goal: "move present-tense sentences into the past, swapping in the irregular stem and the unaccented ending.",
    items: [
      chooseSentence("Mis amigos traen comida.", ["Ayer mis amigos trajieron comida.", "Ayer mis amigos traeron comida.", "Ayer mis amigos traen comida."]),
      chooseSentence("Hoy no puedo salir.", ["Ayer no pudé salir.", "Ayer no podí salir.", "Ayer no pudo salir."]),
      chooseSentence("Hoy ella viene a comer.", ["Ayer ella vinó a comer.", "Ayer ella venió a comer.", "Ayer ella vine a comer."]),
      choose("Hoy tengo frío y ayer también ___ frío.", ["tuvé", "tení", "tuvo"]),
      chooseSentence("Hoy ellos dicen que sí.", ["Ayer ellos dijieron que sí.", "Ayer ellos decieron que sí.", "Ayer ellos dijo que sí."]),
      chooseSentence("Ayer ustedes no pudieran venir.", ["Ayer ustedes no puderon venir.", "Ayer ustedes no podieron venir.", "Ayer ustedes no pudimos venir."]),
    ],
  },
  // L06
  "a2r-contrast-fue-fue": {
    goal: "read fue as \"was\" or \"went\" from the words after it, and use both in one story.",
    items: [
      chooseSentence("Ayer fuimos al cine y las entradas fue caras.", ["Ayer fuimos al cine y las entradas fuieron caras.", "Ayer fuimos al cine y las entradas fuimos caras.", "Ayer fuimos al cine y las entradas fue caras."]),
      edit(mcIs("\"Ayer ___ mi cumpleaños.\""), (e) => ({ ...e, options: e.options.map((o: string) => (o === "iba" ? "fuiste" : o)), explanation: "A birthday is an event on a day, so ser in the preterite: fue. \"Fui\" is yo, \"fuiste\" is tú, and \"estuvo\" is estar." })),
    ],
  },
  // L07
  "a2d-fix-paragraph-irregulars": {
    goal: "find and fix regularized irregulars (tení, hací, podieron, trajieron) in a diary and in your own sentences.",
    text: [["Hací una tarta", "Hací un pastel"], ["Hice una tarta", "Hice un pastel"], ["la tarta estuvo rica", "el pastel estuvo rico"]],
    items: [
      edit(fbIs("___ una tarta de chocolate. (the diary says: Hací)"), (e) => ({ ...e, sentence: "___ un pastel de chocolate. (the diary says: Hací)" })),
      choose("Todos ___ que la tarta estuvo rica. (the diary says: decieron)", ["dijieron", "decieron", "dijimos"], { sentence: "Todos ___ que el pastel estuvo rico. (the diary says: decieron)" }),
      choose("Yo ___ la mesa en el jardín. (the diary says: poní)", ["pusé", "poní", "puso"]),
      choose("Mis primos no ___ venir. (the diary says: podieron)", ["podieron", "puderon", "pudimos"]),
      chooseSentence("Nosotros hacimos una cena para veinte personas.", ["Nosotros hicemos una cena para veinte personas.", "Nosotros hacimos una cena para veinte personas.", "Nosotros hicieron una cena para veinte personas."]),
      chooseSentence("Mi tío dijo que la fiesta fue divertida.", ["Mis tíos dijieron que la fiesta fue divertida.", "Mis tíos decieron que la fiesta fue divertida.", "Mis tíos dijo que la fiesta fue divertida."]),
      chooseSentence("My parents brought presents for everyone.", ["Mis padres trajieron regalos para todos.", "Mis padres traeron regalos para todos.", "Mis padres trajimos regalos para todos."]),
      edit(spIs("El sábado tuve una fiesta. Hice una tarta y mis amigos trajeron bebidas."), (e) => ({ ...e, text: "El sábado tuve una fiesta. Hice un pastel y mis amigos trajeron bebidas.", altAnswers: ["El sábado tuve una fiesta. Hice una tarta y mis amigos trajeron bebidas."] })),
    ],
  },
  // L08
  "a2d-question-answer-irregulars": {
    goal: "answer questions about the past in the right person (¿Qué hiciste? → Hice…), keeping the irregular stem.",
    text: [["Hice los deberes.", "Hice la tarea."], ["¿Vinieron en coche?", "¿Vinieron en carro?"]],
    items: [
      chooseSentence("—¿Vinieron tus primos? —Sí, venieron el sábado.", ["—¿Vinieron tus primos? —Sí, vineron el sábado.", "—¿Vinieron tus primos? —Sí, venieron el sábado.", "—¿Vinieron tus primos? —Sí, vinimos el sábado."]),
      chooseSentence("What did your parents say? — They said that we have to come back early.", ["¿Qué dijieron tus padres? —Dijieron que tenemos que volver temprano.", "¿Qué decieron tus padres? —Decieron que tenemos que volver temprano.", "¿Qué dijeron tus padres? —Dijimos que tenemos que volver temprano."]),
      edit(spIs("Hice los deberes."), (e) => ({ ...e, text: "Hice la tarea.", altAnswers: ["Hice los deberes.", "Hice mi tarea."] })),
    ],
  },
  // L09-L10
  "a2d-irregular-vs-regular-sort": {
    goal: "decide whether a verb is regular or irregular before you conjugate it, and use the accent as a check (comí, but hice).",
    items: [
      choose("Mis abuelos ___ a mi fiesta en taxi.", ["vineron", "venieron", "vinimos"]),
      chooseSentence("Ellos están en la oficina.", ["Ellos estuveron en la oficina.", "Ellos estuvo en la oficina.", "Ellos están en la oficina."]),
      chooseSentence("Vengo en tren.", ["Viné en tren.", "Vení en tren.", "Vino en tren."]),
      edit(trIs("She sold her car and came to Spain."), (e) => ({ type: "multiple-choice", question: `${e.prompt}\n"${e.source}"`, options: ["Vendió su carro y vino a España.", "Vendió su carro y vinó a España.", "Vendió su carro y venió a España.", "Vendo su carro y vino a España."], correctIndex: 0, explanation: e.explanation })),
      chooseSentence("I ate and I said thank you.", ["Comí y dijé gracias.", "Comi y dije gracias.", "Comí y decí gracias."]),
      chooseSentence("I lived in Lima and I had many friends.", ["Viví en Lima y tuvé muchos amigos.", "Viví en Lima y tení muchos amigos.", "Vivé en Lima y tuve muchos amigos."]),
      edit(fbIs("Mi padre ___ un coche nuevo."), (e) => ({ ...e, sentence: "Mi padre ___ un carro nuevo." })),
      edit(fbIs("Mi padre ___ un coche a casa."), (e) => ({ ...e, sentence: "Mi padre ___ un carro a casa." })),
      edit(spIs("Mi padre compró un coche nuevo."), (e) => ({ ...e, text: "Mi padre compró un carro nuevo.", altAnswers: ["Mi padre compró un coche nuevo.", "Mi padre compró un auto nuevo."] })),
      edit(spIs("Mi padre trajo un coche a casa."), (e) => ({ ...e, text: "Mi padre trajo un carro a casa.", altAnswers: ["Mi padre trajo un coche a casa.", "Mi padre trajo un auto a casa."] })),
    ],
  },
};

export function withA2Unit2Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withA2Unit2SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
