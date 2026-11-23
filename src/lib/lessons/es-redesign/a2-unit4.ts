// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a2-unit4.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A2 Unit 4 (right now: estar + -ing · the finished past, regular
// verbs · spelling changes in the finished past): content fixes from Claude's
// audit in Ricardo's format (Claude Feedback/Spanish (new course)/A2
// Elementary/Unit 04). Section and question numbers are the lessons' own as
// they are now. Only content changes here: what is taught, asked and
// accepted. The answer checker and the rubric are untouched.
//
// Lessons built on later grammar moved (es-redesign-units.json): the two
// double-pronoun lessons to B1 Unit 5 (they need commands), the irregular
// preterite drills and Today → Yesterday to A2 Unit 5, and the Common Words
// lessons on people and feelings (el mío, fue, pronouns, commands) to B1
// Unit 6. The regular preterite now comes straight after estar + -ing, before
// the lessons that practise it.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";
import { PRETERITE_REGULAR } from "./concept-tables";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "translate",
  prompt,
  direction: "en-es",
  source,
  answer,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const fill = (prompt: string, sentence: string, answer: string, en: string | undefined, explanation: string, altAnswers: string[] = []): Exercise => ({
  type: "fill-blank",
  prompt,
  sentence,
  answer,
  ...(en ? { en } : {}),
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const mc = (question: string, options: string[], correctIndex: number, explanation: string): Exercise => ({
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
});
const SAY = "Say it in Spanish:";
const BOLD = "How do you say the bold words in Spanish?";
const CORRECT = "Correct the sentence.";

export const A2_UNIT4_PATCHES: Record<string, LessonPatch> = {
  "preterite-regular-verbs-1": {
    sections: {
      1: {
        body: [
          "The preterite is the past tense for completed events: something happened and ended (yesterday, last night, in 2019, three times). It is the tense of \"what happened\".",
          "Spanish builds it the same way as the present: keep the stem (habl-, com-, viv-) and swap the ending. The new ending carries two pieces of information at once: who did it, and that it's over. That's why the subject pronoun is usually dropped: trabajé can only mean \"I worked\".",
          "Spanish also has a second past, the imperfect, for background and habits; it comes a unit later. Today, just the preterite's forms: the table shows them all.",
        ],
        tables: [PRETERITE_REGULAR],
      },
    },
    exercises: {
      replace: {
        3: mc("How do you say \"she arrived\" (from llegar)?", ["llegó", "llego", "llegué", "llega"], 0, "Ella in the preterite: -ó with an accent, llegó. Llego is \"I arrive\", llegué is \"I arrived\" and llega is \"she arrives\"."),
      },
    },
  },
  "preterite-regular-verbs-2": {
    reword: [[" (Lesson 1.)", ""], [" (Lesson 3.)", ""]],
    sections: {
      0: { body: ["A quick look back at the endings before a real conversation about a trip."] },
      1: {
        examples: [
          { es: "¿Adónde viajaste el fin de semana?", en: "Where did you travel this weekend?" },
          { es: "Viajé a la playa con mi familia.", en: "I traveled to the beach with my family. (tú question → yo answer: -é)" },
          { es: "¿Cómo llegaron?", en: "How did you (all) get there?" },
          { es: "Manejamos cuatro horas y llegamos por la tarde.", en: "We drove for four hours and arrived in the afternoon. (ustedes → nosotros: -amos)" },
          { es: "¡Qué bien! ¿Nadaron en el mar?", en: "How nice! Did you swim in the sea?" },
          { es: "Sí, y también caminamos por la playa y sacamos muchas fotos.", en: "Yes, and we also walked on the beach and took lots of photos." },
        ],
        check: [
          { type: "multi-select", question: "What did the family do on the trip? (Choose all that apply)", options: ["Manejaron cuatro horas", "Nadaron en el mar", "Caminaron por la playa", "Alquilaron un barco"], correctIndexes: [0, 1, 2], explanation: "The dialogue says they drove (manejaron), swam (nadaron) and walked on the beach (caminaron). It never mentions renting a boat (alquilaron un barco)." },
          mc("Your friend asks: «¿Visitaste el museo?» You answer:", ["Sí, visité el museo ayer.", "Sí, visitaste el museo ayer.", "Sí, visitó el museo ayer.", "Sí, visitamos el museo ayer, yo."], 0, "A tú question (visitaste) gets a yo answer: visité. \"Visitaste\" just repeats the tú form, \"visitó\" is él/ella, and \"visitamos... yo\" mixes nosotros with yo."),
        ],
      },
      2: { examples: [{"es": "hacer escala", "en": "to have a layover / stop over"}, {"es": "el viaje", "en": "the trip (from viajar)"}, {"es": "la maleta", "en": "the suitcase"}, {"es": "el boleto", "en": "the ticket (Latin America; in Spain: el billete)"}, {"es": "el aeropuerto", "en": "the airport"}, {"es": "el vuelo", "en": "the flight (from volar, to fly)"}, {"es": "despegar", "en": "to take off (a plane)"}, {"es": "salir", "en": "to leave / depart"}, {"es": "el hotel", "en": "the hotel"}, {"es": "la reserva", "en": "the reservation (from reservar)"}, {"es": "el pasaporte", "en": "the passport"}, {"es": "la aduana", "en": "customs"}, {"es": "el equipaje", "en": "the luggage"}, {"es": "la excursión", "en": "the excursion / tour"}, {"es": "el mapa", "en": "the map"}, {"es": "la guía", "en": "the guidebook / guide"}, {"es": "alquilar", "en": "to rent"}, {"es": "el carro", "en": "the car (also el auto; in Spain: el coche)"}, {"es": "la playa", "en": "the beach"}, {"es": "las montañas", "en": "the mountains"}, {"es": "el crucero", "en": "the cruise"}, {"es": "la aventura", "en": "the adventure"}, {"es": "explorar", "en": "to explore"}, {"es": "el/la turista", "en": "the tourist"}, {"es": "el recuerdo", "en": "the souvenir / memory (from recordar)"}, {"es": "la salida", "en": "the departure (from salir: -ida)"}, {"es": "el destino", "en": "the destination"}, {"es": "hacer las maletas", "en": "to pack"}, {"es": "el itinerario", "en": "the itinerary"}, {"es": "visitar", "en": "to visit"}] },
    },
    exercises: {
      replace: {
        10: tr(CORRECT, "Los turistas visitó la ciudad y el museo.", "Los turistas visitaron la ciudad y el museo.", [], "Los turistas = ellos, so the -ar preterite ending is -aron: visitaron."),
        17: tr("Translate to Spanish.", "We spent three days in the mountains.", "Pasamos tres días en las montañas.", ["Pasamos tres días en la montaña.", "Nosotros pasamos tres días en las montañas.", "Nosotras pasamos tres días en las montañas."], "Pasar (to spend time) is a regular -ar verb: pasamos, the same as the present, but the English past tells you it's the preterite."),
        22: speak(`${SAY} "I traveled to the beach with my family"`, "Viajé a la playa con mi familia.", ["Yo viajé a la playa con mi familia."], "One way to say it: \"Viajé a la playa con mi familia\". Yo in the -ar preterite: -é."),
      },
    },
  },
  "a2g-spelling-stress-rules": {
    goal: "put ¿ and ¡ where the question starts, write days, months and languages in lower case, and use the three stress rules to know when a word needs an accent.",
    reword: [[" (Lesson 6.)", ""], [" (Lesson 7.)", ""]],
    sections: { 0: { body: ["Today's lesson explains why habló and busqué carry their accents. A quick look back at the preterite first."] } },
    exercises: {
      replace: {
        0: speak(`${SAY} "Laura, where are you?"`, "Laura, ¿dónde estás?", [], "One way to say it: \"Laura, ¿dónde estás?\". Written down, the name stays outside: the ¿ goes where the question starts."),
        2: speak(`${SAY} "If it rains, what do we do?"`, "Si llueve, ¿qué hacemos?", [], "One way to say it: \"Si llueve, ¿qué hacemos?\". Written down, the ¿ goes after the comma, where the question starts."),
        3: mc("Which sentence is written correctly?", ["Hoy es martes, 3 de marzo.", "Hoy es Martes, 3 de Marzo.", "Hoy es martes, 3 de Marzo.", "Hoy es Martes, 3 de marzo."], 0, "Days and months take a small letter in Spanish: martes, marzo."),
        6: speak(`${SAY} "See you on Friday!"`, "¡Nos vemos el viernes!", ["¡Hasta el viernes!", "Nos vemos el viernes."], "One way to say it: \"¡Nos vemos el viernes!\". Written down, it takes ¡ at the start and viernes with a small letter."),
      },
    },
  },
  "a2d-speed-round-spelling-changes": {
    reword: [["¿Me perdonas?", "¡Perdón!"]],
  },
  "a2-vocabulary-practice-3": {
    summary: "Review sixty everyday words for shopping, phones and computers, and the patterns that build them (-dor, -ción, des-).",
    sections: {
      1: { body: ["Thirty shopping words, grouped for review."] },
      2: { body: ["Thirty words for phones and computers, grouped for review."] },
    },
    exercises: {
      replace: {
        8: tr(CORRECT, "¿Dónde está la probador?", "¿Dónde está el probador?", [], "Probador ends in -dor like cargador, and these -dor nouns are masculine: el probador."),
        15: speak(`${SAY} "We waited a long time at the checkout"`, "Esperamos mucho en la caja.", ["Esperamos mucho tiempo en la caja.", "Nosotros esperamos mucho en la caja."], "One way to say it: \"Esperamos mucho en la caja\". Esperar is a regular -ar verb: esperamos."),
        16: tr("Change to the past (preterite).", "Descargo la aplicación.", "Descargué la aplicación.", ["Yo descargué la aplicación."], "Descargar ends in -gar, so yo adds a u before -é: descargué."),
        18: tr("Translate to Spanish.", "I paid in cash.", "Pagué en efectivo.", ["Yo pagué en efectivo."], "Pagar → pagué (g → gu before é), and cash is en efectivo."),
      },
    },
  },
  "a2r-dialogue-weekend": {
    sections: {
      0: {
        examples: [
          { es: "—¿Qué tal el fin de semana? —Nada especial. El sábado limpié la casa.", en: "How was your weekend? — Nothing special. On Saturday I cleaned the house." },
          { es: "—¿Saliste el domingo? —Sí, salí con mis primos y comimos en un restaurante peruano.", en: "Did you go out on Sunday? — Yes, I went out with my cousins and we ate at a Peruvian restaurant. (saliste → salí)" },
        ],
        check: [
          fill(BOLD, "—¿Visitaste a tus abuelos? —Sí, ___ a mis abuelos el sábado.", "visité", "—Did you visit your grandparents? (tú) —Yes, I [visited] my grandparents on Saturday.", "Tú question (visitaste) → yo answer (visité). Don't forget the accent: visite without it is not a preterite."),
          mc("What did the second coworker do on Sunday?", ["Went out with cousins and ate at a Peruvian restaurant", "Cleaned the house", "Stayed home alone", "Cooked Peruvian food at home"], 0, "Salí con mis primos y comimos en un restaurante peruano: \"I went out with my cousins and we ate at a Peruvian restaurant\". Cleaning the house was Saturday."),
        ],
      },
      1: {
        examples: [
          { es: "—¿Y tu hermano? —Él trabajó todo el fin de semana.", en: "And your brother? — He worked all weekend. (-ó: él)" },
          { es: "—¿Tus padres viajaron? —No, descansaron en casa.", en: "Did your parents travel? — No, they rested at home. (-aron: ellos)" },
        ],
      },
    },
    exercises: {
      replace: {
        0: fill(BOLD, "—¿Ustedes miraron el partido? —Sí, ___ el partido en casa de Pedro.", "miramos", "—Did you watch the game? (ustedes) —Yes, we [watched] the game at Pedro's house.", "Ustedes question → nosotros answer. -Ar nosotros is the same in present and preterite; the past-tense question (¿miraron?) tells you it's past."),
        10: tr("Answer: you visited your grandparents and had dinner with them.", "¿Qué tal el domingo?", "Visitamos a mis abuelos y cenamos con ellos.", ["El domingo visitamos a mis abuelos y cenamos con ellos.", "Muy bien, visitamos a mis abuelos y cenamos con ellos.", "Bien, visitamos a mis abuelos y cenamos con ellos."], "Answering for your group: nosotros, visitamos, cenamos. Remember the personal a before people."),
        13: tr("Correct the answer.", "—¿Miraste el partido? —Sí, miró el partido en casa.", "—¿Miraste el partido? —Sí, miré el partido en casa.", ["¿Miraste el partido? Sí, miré el partido en casa.", "—¿Miraste el partido? —Sí, miré el partido en mi casa."], "A tú question gets a yo answer: miré, with the accent on the -é. Miró would be he or she."),
        20: speak("Answer aloud in Spanish: ¿Qué tal el fin de semana? (Say: \"On Saturday I cleaned the house and on Sunday I went out with my friends.\")", "El sábado limpié la casa y el domingo salí con mis amigos.", ["El sábado limpié la casa y el domingo salí con mis amigas."], "A question about your weekend gets yo forms: limpié (-ar, -é), salí (-ir, -í)."),
        21: { type: "listen-choose", audio: "—¿Qué tal el fin de semana? —Nada especial. El sábado limpié la casa.", question: "Listen. What did the person do on Saturday?", options: ["Cleaned the house", "Went out with cousins", "Worked all weekend", "Nothing at all"], correctIndex: 0, explanation: "El sábado limpié la casa: \"On Saturday I cleaned the house.\" Nada especial means \"nothing special\", not \"nothing at all\"; going out and working aren't mentioned." },
        25: speak("Answer out loud in Spanish: ¿Qué tal el fin de semana? (Say: \"Nothing special. On Saturday I cleaned the house\")", "Nada especial. El sábado limpié la casa.", [], "One way to say it: \"Nada especial. El sábado limpié la casa\". A question to you gets a yo answer: limpié."),
      },
    },
  },
  "a1r-mission-hotel-check-in": {
    goal: "handle a hotel check-in: ask where things are, what the hotel has and what time breakfast is, and report a problem with the room.",
  },
  "a2d-build-up-weekend": {
    goal: "build one preterite verb into a full sentence (object, place, time) without changing the verb, with the personal a and nosotros for \"X and I\".",
  },
  "a1r-word-web-jobs-unit-review": {
    goal: "listen to, say and choose ser or estar and the right gerund, getting at least 6 of 8 quiz questions right.",
  },
};
