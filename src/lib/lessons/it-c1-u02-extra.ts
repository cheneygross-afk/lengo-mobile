// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u02-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 2 Extra Practice: The Trapassato Remoto and Literary
// Tenses. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_C1_U02_EXTRA: Lesson[] = [
  {
    slug: "c1-literary-tenses-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Trapassato Remoto",
    summary: "Fresh literary sentences with the trapassato remoto after dopo che, appena and quando, with both auxiliaries.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A day in the life of a nineteenth-century doctor",
        body: [
          "These sentences follow an invented country doctor in the Langhe around 1870. Remember the slot: time clause with \"dopo che\", \"appena\" or \"quando\" + trapassato remoto; main clause in the passato remoto. \"Essere\" verbs agree with the subject; \"avere\" verbs agree with a preceding \"lo / la / li / le\".",
        ],
        examples: [
          { es: "Appena ebbe sellato il cavallo, partì per la collina.", en: "As soon as he had saddled the horse, he set off for the hill." },
          { es: "Quando fu giunto alla cascina, trovò la porta aperta.", en: "When he had reached the farmhouse, he found the door open." },
          { es: "Dopo che l'ebbe visitata, rassicurò la famiglia.", en: "After he had examined her, he reassured the family." },
          { es: "Appena si fu lavato le mani, sedette a tavola.", en: "As soon as he had washed his hands, he sat down at the table." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "As soon as he had saddled the horse, he set off for the hill.", answer: "Appena ebbe sellato il cavallo, partì per la collina.", altAnswers: ["Non appena ebbe sellato il cavallo, partì per la collina."], explanation: "\"Ebbe sellato\" + \"partì\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "After he had examined her, he reassured the family.", answer: "Dopo che l'ebbe visitata, rassicurò la famiglia.", explanation: "Agreement with \"la\": \"visitata\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "When he had reached the farmhouse, he found the door open.", answer: "Quando fu giunto alla cascina, trovò la porta aperta.", altAnswers: ["Quando fu arrivato alla cascina, trovò la porta aperta."], explanation: "\"Giungere\" with \"essere\": \"fu giunto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "As soon as the child had fallen asleep, the mother cried.", answer: "Appena il bambino si fu addormentato, la madre pianse.", altAnswers: ["Non appena il bambino si fu addormentato, la madre pianse."], explanation: "\"Si fu addormentato\": reflexive with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "After they had paid him, he thanked them and left.", answer: "Dopo che l'ebbero pagato, li ringraziò e se ne andò.", altAnswers: ["Dopo che lo ebbero pagato, li ringraziò e se ne andò.", "Dopo che l'ebbero pagato, li ringraziò e partì."], explanation: "\"L'ebbero pagato\", then two passati remoti." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "When the rain had stopped, he set off again.", answer: "Quando la pioggia fu cessata, si rimise in cammino.", altAnswers: ["Quando la pioggia ebbe cessato, si rimise in cammino.", "Quando ebbe smesso di piovere, si rimise in cammino."], explanation: "\"Cessare\" can take \"essere\" or \"avere\" when intransitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "As soon as we had arrived, they offered us wine.", answer: "Appena fummo arrivati, ci offrirono del vino.", altAnswers: ["Appena fummo arrivate, ci offrirono del vino.", "Appena fummo arrivati, ci offrirono il vino."], explanation: "\"Fummo arrivati\", noi with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "After I had read the letter, I burned it.", answer: "Dopo che ebbi letto la lettera, la bruciai.", explanation: "Io forms: \"ebbi letto\", \"bruciai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (modern style, no trapassato remoto).", source: "After reading the letter, I burned it.", answer: "Dopo aver letto la lettera, l'ho bruciata.", altAnswers: ["Dopo avere letto la lettera, l'ho bruciata.", "Dopo aver letto la lettera, la bruciai."], explanation: "Modern: \"dopo aver letto\"; \"l'ho bruciata\" agrees with \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When the doctor [had left], the old man got up.", sentence: "Quando il medico ___, il vecchio si alzò.", answer: "fu uscito", altAnswers: ["fu partito", "se ne fu andato"], explanation: "\"Uscire\" with \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as she [had understood], she blushed.", sentence: "Appena ___, arrossì.", answer: "ebbe capito", altAnswers: ["ebbe compreso"], explanation: "\"Capire\" with \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After they [had said goodbye], the travellers left.", sentence: "Dopo che si ___ salutati, i viaggiatori partirono.", answer: "furono", explanation: "Reciprocal \"salutarsi\" with \"essere\": \"si furono salutati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When he had finished, he [closed] his bag.", sentence: "Quando ebbe finito, ___ la borsa.", answer: "chiuse", explanation: "Main clause: passato remoto \"chiuse\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Quando si fu vestita, scese in cucina.", "Quando si ebbe vestita, scese in cucina.", "Quando si fu vestita, è scesa in cucina.", "Quando si fu vestito, scese in cucina. (about a woman)"], correctIndex: 0, explanation: "Reflexive with \"essere\", agreement, passato remoto main verb." },
      { type: "multiple-choice", question: "\"Aveva già finito\" or \"ebbe finito\"? Quando entrammo, il medico ___ la visita.", options: ["aveva già finito", "ebbe già finito", "finì già", "ha già finito"], correctIndex: 0, explanation: "An earlier state found later: trapassato prossimo." },
      { type: "listen-choose", audio: "Appena fu giunto alla cascina, trovò la porta aperta.", question: "What did the doctor find?", options: ["An open door", "A locked door", "A sick child", "An empty house"], correctIndex: 0, explanation: "\"La porta aperta\" = the door open." },
      { type: "dictation", audio: "Dopo che l'ebbe visitata, rassicurò la famiglia.", explanation: "\"L'ebbe visitata\": agreement with \"la\"." },
      { type: "speak", text: "Appena ebbe sellato il cavallo, il medico partì per la collina.", prompt: "Say it in Italian (literary style): As soon as he had saddled the horse, the doctor set off for the hill.", tip: "\"Sellato\": double l.", explanation: "Trapassato remoto + passato remoto." },
    ],
  },
  {
    slug: "c1-literary-tenses-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Literary Reading",
    summary: "Read fresh passages written in classic narrative style and reproduce their tenses, pronouns and vocabulary.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three short passages",
        body: [
          "The passages in this practice were written for the course in a nineteenth-century style. Look for the descriptive imperfetto, the passato remoto of events, the trapassato remoto in time clauses, the future in the past and literary words such as \"scorgere\", \"giungere\", \"ciò\" and \"egli\".",
        ],
        examples: [
          { es: "Il mare era calmo e la luna illuminava la spiaggia.", en: "The sea was calm and the moon lit up the beach." },
          { es: "D'un tratto egli scorse una vela all'orizzonte.", en: "Suddenly he made out a sail on the horizon." },
          { es: "Appena la barca fu giunta a riva, ne discese una donna.", en: "As soon as the boat had reached the shore, a woman stepped out of it." },
          { es: "Ciò che disse quella notte, nessuno lo seppe mai.", en: "What she said that night, nobody ever found out." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style, with egli).", source: "Suddenly he made out a sail on the horizon.", answer: "D'un tratto egli scorse una vela all'orizzonte.", altAnswers: ["A un tratto egli scorse una vela all'orizzonte.", "D'un tratto scorse una vela all'orizzonte."], explanation: "\"Scorgere\" → \"scorse\"; \"egli\" as a literary subject." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "The sea was calm and the moon lit up the beach.", answer: "Il mare era calmo e la luna illuminava la spiaggia.", explanation: "Description: imperfetto." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "As soon as the boat had reached the shore, a woman stepped out of it.", answer: "Appena la barca fu giunta a riva, ne discese una donna.", altAnswers: ["Appena la barca fu giunta a riva, ne scese una donna.", "Non appena la barca fu giunta a riva, ne scese una donna."], explanation: "\"Fu giunta\" agrees with \"barca\"; \"ne\" = from it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "Nobody ever found out what she said that night.", answer: "Nessuno seppe mai ciò che disse quella notte.", altAnswers: ["Nessuno seppe mai quello che disse quella notte."], explanation: "\"Seppe\" = found out; \"ciò che\" = what." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "The village slept under the snow.", answer: "Il borgo dormiva sotto la neve.", altAnswers: ["Il paese dormiva sotto la neve."], explanation: "Descriptive imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "Towards midnight a horseman reached the inn.", answer: "Verso mezzanotte un cavaliere giunse alla locanda.", altAnswers: ["Verso la mezzanotte un cavaliere giunse alla locanda.", "Verso mezzanotte giunse alla locanda un cavaliere."], explanation: "\"Giungere\" → \"giunse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "He knew he would never return.", answer: "Sapeva che non sarebbe mai tornato.", altAnswers: ["Sapeva che non avrebbe mai fatto ritorno.", "Sapeva che non sarebbe tornato mai più."], explanation: "Future in the past: \"sarebbe tornato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "When he had dismounted, he knocked three times.", answer: "Quando fu sceso da cavallo, bussò tre volte.", altAnswers: ["Quando fu smontato da cavallo, bussò tre volte."], explanation: "\"Scendere da cavallo\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "The innkeeper opened, and fell silent.", answer: "L'oste aprì, e tacque.", altAnswers: ["L'oste aprì e tacque."], explanation: "\"Tacere\" → \"tacque\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What he saw] left him speechless.", sentence: "___ lo lasciò senza parole.", answer: "Ciò che vide", altAnswers: ["Quello che vide"], explanation: "\"Ciò che\" + passato remoto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the distance the bells [were ringing].", sentence: "In lontananza ___ le campane.", answer: "suonavano", explanation: "Background: imperfetto, verb before subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[She began] to tell her story.", sentence: "___ a raccontare la sua storia.", answer: "Prese", altAnswers: ["Si mise", "Cominciò"], explanation: "\"Prendere a\" = to begin, literary." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "That night [would remain] in everyone's memory.", sentence: "Quella notte ___ nella memoria di tutti.", answer: "sarebbe rimasta", explanation: "Future in the past, agreeing with \"notte\"." },
      { type: "word-order", prompt: "Put the words in order to say: Then the stranger said: \"I have come back\".", words: ["Disse", "allora", "lo", "straniero:", "\"Sono", "tornato\"."], translation: "Then the stranger said: \"I have come back\".", explanation: "Inversion: verb before subject; speech keeps the passato prossimo." },
      { type: "multiple-choice", question: "\"Ciò che ella disse\": what does \"ella\" mean?", options: ["she (literary subject)", "it (for a thing)", "her (object)", "they"], correctIndex: 0, explanation: "\"Ella\" is the literary subject she, rare today." },
      { type: "listen-choose", audio: "Il mare era calmo e la luna illuminava la spiaggia.", question: "What was the sea like?", options: ["Calm", "Rough", "Frozen", "Dark and stormy"], correctIndex: 0, explanation: "\"Calmo\" = calm." },
      { type: "dictation", audio: "Verso mezzanotte un cavaliere giunse alla locanda.", explanation: "\"Giunse\" from \"giungere\"." },
      { type: "speak", text: "Il borgo dormiva sotto la neve, quando d'un tratto un cavaliere giunse alla locanda.", prompt: "Read it aloud, literary style: The village was sleeping under the snow when suddenly a horseman reached the inn.", tip: "Slow on the first half, faster after \"d'un tratto\".", explanation: "Imperfetto background, passato remoto event." },
    ],
  },
];
