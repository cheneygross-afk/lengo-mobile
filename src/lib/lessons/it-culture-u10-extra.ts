// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u10-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 10 Extra Practice: Practical Italy. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_CULTURE_U10_EXTRA: Lesson[] = [
  {
    slug: "culture-practical-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Offices",
    summary: "Fresh sentences for Italian offices: counters, forms, documents, opening hours and polite requests.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At the counter",
        body: [
          "In offices, use \"Lei\" and the polite forms: \"Scusi\", \"Vorrei\", \"Potrebbe...?\" A counter is \"lo sportello\", a form is \"il modulo\", and \"compilare\" means to fill in. \"Gli orari di apertura\" are the opening hours, and many public offices close early in the afternoon.",
        ],
        examples: [
          { es: "Scusi, è questo lo sportello giusto?", en: "Excuse me, is this the right counter?" },
          { es: "Deve compilare questo modulo.", en: "You have to fill in this form." },
          { es: "L'ufficio chiude alle tredici.", en: "The office closes at 1 p.m." },
          { es: "Potrebbe ripetere, per favore?", en: "Could you repeat that, please?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you repeat that, please?", answer: "Potrebbe ripetere, per favore?", altAnswers: ["Può ripetere, per favore?", "Me lo potrebbe ripetere, per favore?"], explanation: "Conditional for politeness." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You have to [fill in] this form.", sentence: "Deve ___ questo modulo.", answer: "compilare", explanation: "\"Compilare\" = to fill in." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, is this the right counter?", answer: "Scusi, è questo lo sportello giusto?", altAnswers: ["Scusi, questo è lo sportello giusto?"], explanation: "\"Giusto\" = right, correct." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What documents do I need?", answer: "Che documenti mi servono?", altAnswers: ["Quali documenti mi servono?", "Quali documenti servono?"], explanation: "\"Servire\" agrees with the plural thing needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The office closes at 1 p.m.", answer: "L'ufficio chiude alle tredici.", altAnswers: ["L'ufficio chiude all'una.", "L'ufficio chiude alle 13."], explanation: "Offices use the 24-hour clock." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need an appointment.", answer: "Mi serve un appuntamento.", altAnswers: ["Ho bisogno di un appuntamento."], explanation: "\"L'appuntamento\" = appointment." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where do I have to sign?", answer: "Dove devo firmare?", explanation: "\"Firmare\" = to sign." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've brought a copy of the passport.", answer: "Ho portato una copia del passaporto.", altAnswers: ["Ho portato la fotocopia del passaporto.", "Ho portato una fotocopia del passaporto."], explanation: "\"La fotocopia\" = photocopy." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When will it be ready?", answer: "Quando sarà pronto?", altAnswers: ["Quando è pronto?", "Quando sarà pronta?"], explanation: "Future for predictions." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The office is [closed] on Saturdays.", sentence: "L'ufficio è ___ il sabato.", answer: "chiuso", explanation: "\"Chiudere\" → \"chiuso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You have to come back [tomorrow morning].", sentence: "Deve tornare ___.", answer: "domani mattina", altAnswers: ["domattina"], explanation: "\"Domattina\" is a short form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm missing [a document].", sentence: "Mi manca ___.", answer: "un documento", explanation: "\"Mancare\" works like \"piacere\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'd like some information, please.", words: ["Vorrei", "un'informazione,", "per", "favore."], translation: "I'd like some information, please.", explanation: "\"Un'informazione\" is countable in Italian." },
      { type: "word-order", prompt: "Put the words in order to say: What are the opening hours?", words: ["Quali", "sono", "gli", "orari", "di", "apertura?"], translation: "What are the opening hours?", explanation: "\"L'apertura\" = opening." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "lo sportello", right: "the counter" },
          { left: "il modulo", right: "the form" },
          { left: "compilare", right: "to fill in" },
          { left: "firmare", right: "to sign" },
          { left: "la fotocopia", right: "the photocopy" },
        ],
        explanation: "Office vocabulary.",
      },
      { type: "multiple-choice", question: "Which is the most polite way to ask someone to repeat?", options: ["Potrebbe ripetere, per favore?", "Ripeti!", "Cosa?", "Ancora!"], correctIndex: 0, explanation: "\"Potrebbe\" is the conditional of \"potere\" with \"Lei\"." },
      { type: "listen-choose", audio: "Mi manca un documento.", question: "What's the problem?", options: ["A document is missing.", "The office is closed.", "The form is wrong.", "The line is too long."], correctIndex: 0, explanation: "\"Mancare\" = to be missing." },
      { type: "dictation", audio: "Deve compilare questo modulo.", explanation: "\"Modulo\": stress on the first syllable." },
      { type: "speak", text: "Buongiorno, vorrei un'informazione: che documenti servono per la residenza?", prompt: "Say it in Italian: Good morning, I'd like some information: what documents do I need for residency?", tip: "Re-si-DEN-za: the s sounds like z.", explanation: "\"La residenza\" = official residence." },
    ],
  },
  {
    slug: "culture-practical-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Getting Around",
    summary: "Fresh sentences for trains, buses, taxis and asking the way, with tickets, delays and strikes.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "On the move",
        body: [
          "Travel verbs: \"prendere\" (to take: \"prendo il treno\"), \"salire\" (to get on), \"scendere\" (to get off), \"cambiare\" (to change trains) and \"perdere\" (to miss: \"ho perso l'autobus\"). Use \"in\" with vehicles: \"in treno\", \"in autobus\", \"in macchina\", but \"a piedi\" (on foot).",
        ],
        examples: [
          { es: "Ho perso l'autobus.", en: "I missed the bus." },
          { es: "Devo cambiare a Bologna.", en: "I have to change at Bologna." },
          { es: "Saliamo sul treno.", en: "Let's get on the train." },
          { es: "Vado a piedi.", en: "I'm walking." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I missed the bus.", answer: "Ho perso l'autobus.", altAnswers: ["Ho perso il bus."], explanation: "\"Perdere\" = to miss (a vehicle)." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have to [change] at Bologna.", sentence: "Devo ___ a Bologna.", answer: "cambiare", explanation: "\"Cambiare\" = to change trains." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's get on the train.", answer: "Saliamo sul treno.", altAnswers: ["Saliamo in treno."], explanation: "\"Salire su\" = to get on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A one-way ticket to Naples, please.", answer: "Un biglietto di sola andata per Napoli, per favore.", altAnswers: ["Un biglietto solo andata per Napoli, per favore.", "Una sola andata per Napoli, per favore."], explanation: "\"Sola andata\" = one way." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train has been canceled because of the strike.", answer: "Il treno è stato cancellato per lo sciopero.", altAnswers: ["Il treno è stato soppresso per lo sciopero.", "Il treno è stato cancellato a causa dello sciopero."], explanation: "\"Per\" = because of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take by bus?", answer: "Quanto ci vuole in autobus?", altAnswers: ["Quanto tempo ci vuole in autobus?", "Quanto ci si mette in autobus?"], explanation: "\"Volerci\" = to take (time)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you call me a taxi?", answer: "Mi può chiamare un taxi?", altAnswers: ["Può chiamarmi un taxi?", "Mi chiami un taxi?"], explanation: "\"Mi\" = for me." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the station far?", answer: "La stazione è lontana?", altAnswers: ["È lontana la stazione?"], explanation: "\"Lontano\" = far." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm walking.", answer: "Vado a piedi.", explanation: "\"A piedi\" = on foot." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At which stop do I [get off]?", sentence: "A quale fermata ___?", answer: "scendo", altAnswers: ["devo scendere"], explanation: "\"La fermata\" = stop." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train [is twenty minutes late].", sentence: "Il treno ___.", answer: "è in ritardo di venti minuti", altAnswers: ["ha venti minuti di ritardo"], explanation: "\"Essere in ritardo di\" + time." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Go straight and then [turn left].", sentence: "Vada dritto e poi ___.", answer: "giri a sinistra", explanation: "\"Girare a sinistra\" = to turn left." },
      { type: "word-order", prompt: "Put the words in order to say: The bus stop is in front of the bar.", words: ["La", "fermata", "dell'autobus", "è", "davanti", "al", "bar."], translation: "The bus stop is in front of the bar.", explanation: "\"Davanti a\" = in front of." },
      { type: "word-order", prompt: "Put the words in order to say: I always take the train to work.", words: ["Prendo", "sempre", "il", "treno", "per", "andare", "al", "lavoro."], translation: "I always take the train to work.", explanation: "\"Sempre\" after the verb." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la fermata", right: "the stop" },
          { left: "salire", right: "to get on" },
          { left: "scendere", right: "to get off" },
          { left: "perdere il treno", right: "to miss the train" },
          { left: "sola andata", right: "one way" },
        ],
        explanation: "Travel vocabulary.",
      },
      { type: "multiple-choice", question: "How do you say you're going on foot?", options: ["Vado a piedi.", "Vado in piedi.", "Vado con piedi.", "Vado per piedi."], correctIndex: 0, explanation: "\"In piedi\" means standing." },
      { type: "listen-choose", audio: "Il treno è stato cancellato per lo sciopero.", question: "Why was the train canceled?", options: ["Because of the strike.", "Because of snow.", "Because of a fault.", "Because it was full."], correctIndex: 0, explanation: "\"Lo sciopero\" = strike." },
      { type: "dictation", audio: "A quale fermata scendo?", explanation: "\"Scendo\": sc + e = sh." },
      { type: "speak", text: "Scusi, quanto ci vuole per arrivare alla stazione a piedi?", prompt: "Say it in Italian: Excuse me, how long does it take to get to the station on foot?", tip: "Sta-ZIO-ne: z sounds like ts.", explanation: "\"Ci vuole\" = it takes." },
    ],
  },
];
