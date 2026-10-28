// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u19-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 19 Extra Practice: Italian in the World.
// Original texts; people are invented.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U19_EXTRA: Lesson[] = [
  {
    slug: "c2-world-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Switzerland",
    summary: "A fresh text on everyday life in Ticino: commuting, Swiss words, institutions and multilingual identity.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh text",
        body: [
          "Read this original text: \"Ogni mattina Paolo prende il treno a Chiasso e scende a Lugano. Al lavoro parla italiano, al telefono con i colleghi di Berna tedesco, la sera francese con la moglie, che è di Losanna. Dice che in Svizzera le lingue non si scelgono: si collezionano.\"",
          "Notice the parallel structure without repeating the verb (\"al telefono... tedesco, la sera francese\"), the Italian names of Swiss cities (\"Berna\", \"Losanna\", \"Zurigo\", \"Ginevra\", \"Basilea\") and the witty final contrast \"non si scelgono: si collezionano\".",
        ],
        examples: [
          { es: "Ogni mattina prende il treno a Chiasso e scende a Lugano.", en: "Every morning he takes the train at Chiasso and gets off at Lugano." },
          { es: "Al telefono con i colleghi di Berna parla tedesco.", en: "On the phone with colleagues in Bern he speaks German." },
          { es: "Sua moglie è di Losanna.", en: "His wife is from Lausanne." },
          { es: "In Svizzera le lingue non si scelgono: si collezionano.", en: "In Switzerland you don't choose languages: you collect them." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His wife is from Lausanne.", answer: "Sua moglie è di Losanna.", altAnswers: ["La moglie è di Losanna.", "Sua moglie viene da Losanna."], explanation: "Italian name for the city." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Switzerland you don't choose languages: you collect them.", answer: "In Svizzera le lingue non si scelgono: si collezionano.", altAnswers: ["In Svizzera le lingue non si scelgono, si collezionano."], explanation: "Passive \"si\" in a witty contrast." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every morning he takes the train at Chiasso and gets off at Lugano.", answer: "Ogni mattina prende il treno a Chiasso e scende a Lugano.", altAnswers: ["Tutte le mattine prende il treno a Chiasso e scende a Lugano."], explanation: "\"Scendere\" = to get off." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The conference will be held in Geneva.", answer: "Il convegno si terrà a Ginevra.", altAnswers: ["La conferenza si terrà a Ginevra.", "Il convegno avrà luogo a Ginevra."], explanation: "\"Ginevra\" = Geneva." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She studied in Zurich and now works in Basel.", answer: "Ha studiato a Zurigo e ora lavora a Basilea.", altAnswers: ["Ha studiato a Zurigo e adesso lavora a Basilea.", "Ha studiato a Zurigo e oggi lavora a Basilea."], explanation: "Italian city names." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (as in Ticino).", source: "Coffee is on special offer this week.", answer: "Il caffè è in azione questa settimana.", altAnswers: ["Questa settimana il caffè è in azione.", "Questa settimana il caffè è in offerta."], explanation: "Swiss \"in azione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cantonal government has presented the budget.", answer: "Il Consiglio di Stato ha presentato il preventivo.", altAnswers: ["Il governo cantonale ha presentato il preventivo.", "Il Consiglio di Stato ha presentato il bilancio preventivo.", "Il governo cantonale ha presentato il bilancio."], explanation: "Swiss institution; \"preventivo\" is the Swiss term for a budget." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many young people from Ticino study north of the Alps.", answer: "Molti giovani ticinesi studiano oltre Gottardo.", altAnswers: ["Molti giovani ticinesi studiano nella Svizzera tedesca.", "Molti giovani ticinesi studiano al di là del Gottardo."], explanation: "\"Oltre Gottardo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My cell phone battery is dead.", answer: "Il natel è scarico.", altAnswers: ["Il cellulare è scarico.", "Ho il natel scarico.", "Ho il cellulare scarico."], explanation: "\"Scarico\" = dead, run down (of a battery)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On the phone with colleagues [in Bern] he speaks German.", sentence: "Al telefono con i colleghi ___ parla tedesco.", answer: "di Berna", explanation: "\"Di\" for origin." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words (as in Ticino).", en: "You need [a driver's license] to rent a car.", sentence: "Per noleggiare un'auto serve ___.", answer: "la licenza di condurre", altAnswers: ["la patente"], explanation: "Swiss term." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The apartment costs [2,400 francs] a month.", sentence: "L'appartamento costa ___ al mese.", answer: "2'400 franchi", altAnswers: ["2400 franchi", "2.400 franchi", "duemilaquattrocento franchi"], explanation: "Swiss apostrophe for thousands." },
      { type: "word-order", prompt: "Put the words in order to say: In Switzerland you collect languages.", words: ["In", "Svizzera", "le", "lingue", "si", "collezionano."], translation: "In Switzerland you collect languages.", explanation: "Passive \"si\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'll take the post bus to the valley.", words: ["Prendo", "l'autopostale", "per", "la", "valle."], translation: "I'll take the post bus to the valley.", explanation: "Swiss public transportation." },
      {
        type: "matching",
        instructions: "Match the Swiss city to its Italian name.",
        pairs: [
          { left: "Ginevra", right: "Geneva" },
          { left: "Losanna", right: "Lausanne" },
          { left: "Basilea", right: "Basel" },
          { left: "Zurigo", right: "Zurich" },
        ],
        explanation: "Use the Italian names when speaking Italian.",
      },
      { type: "listen-choose", audio: "Al lavoro parlo italiano, con i colleghi di Berna tedesco e a casa francese, perché mia moglie è di Losanna.", question: "Why does the speaker speak French at home?", options: ["His wife is from Lausanne.", "He works in Geneva.", "His children study in France.", "He prefers French."], correctIndex: 0, explanation: "\"Mia moglie è di Losanna\"." },
      { type: "speak", text: "In Svizzera le lingue non si scelgono: si collezionano.", prompt: "Say aloud with a smile: In Switzerland you don't choose languages: you collect them.", tip: "Pause at the colon; stress \"collezionano\".", explanation: "A witty contrast." },
    ],
  },
  {
    slug: "c2-world-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Diaspora",
    summary: "A fresh text about a family restaurant founded by Italian emigrants abroad, with the language of memory, work and identity.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh text",
        body: [
          "Read this original text: \"Il ristorante l'aveva aperto il bisnonno nel 1921, con i risparmi di dieci anni di lavoro al porto. Oggi lo gestisce la pronipote, che parla l'italiano imparato all'università e il siciliano imparato in cucina. Sul muro c'è ancora la prima licenza, ingiallita, accanto alla foto di un paese che nessuno della famiglia ha mai visto.\"",
          "Notice the dislocation \"Il ristorante l'aveva aperto il bisnonno\", the pluperfect for the earlier past, the parallel \"imparato all'università... imparato in cucina\" and the moving final relative clause.",
        ],
        examples: [
          { es: "Il ristorante l'aveva aperto il bisnonno nel 1921.", en: "It was her great-grandfather who had opened the restaurant in 1921." },
          { es: "Oggi lo gestisce la pronipote.", en: "Today his great-granddaughter runs it." },
          { es: "Parla il siciliano imparato in cucina.", en: "She speaks the Sicilian she learned in the kitchen." },
          { es: "È la foto di un paese che nessuno della famiglia ha mai visto.", en: "It's a photo of a village no one in the family has ever seen." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today his great-granddaughter runs it.", answer: "Oggi lo gestisce la pronipote.", altAnswers: ["Oggi la pronipote lo gestisce.", "Oggi a gestirlo è la pronipote."], explanation: "Object pronoun + verb + subject." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a photo of a village no one in the family has ever seen.", answer: "È la foto di un paese che nessuno della famiglia ha mai visto.", altAnswers: ["È una foto di un paese che nessuno della famiglia ha mai visto.", "È la foto di un paese che nessuno in famiglia ha mai visto."], explanation: "\"Nessuno\" + \"mai\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He opened the restaurant with ten years of savings.", answer: "Aprì il ristorante con i risparmi di dieci anni.", altAnswers: ["Ha aperto il ristorante con i risparmi di dieci anni.", "Aprì il ristorante con dieci anni di risparmi."], explanation: "\"Risparmi\" = savings." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He had worked at the port for ten years.", answer: "Aveva lavorato al porto per dieci anni.", altAnswers: ["Aveva lavorato dieci anni al porto.", "Per dieci anni aveva lavorato al porto."], explanation: "Pluperfect for the earlier past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The first license, now yellowed, is still on the wall.", answer: "La prima licenza, ormai ingiallita, è ancora sul muro.", altAnswers: ["Sul muro c'è ancora la prima licenza, ingiallita.", "La prima licenza, ingiallita, è ancora appesa al muro."], explanation: "\"Ingiallito\" = yellowed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The recipes have been handed down for four generations.", answer: "Le ricette vengono tramandate da quattro generazioni.", altAnswers: ["Le ricette si tramandano da quattro generazioni.", "Le ricette sono state tramandate per quattro generazioni."], explanation: "\"Tramandare\" = to hand down." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The customers are no longer only Italians.", answer: "I clienti non sono più solo italiani.", altAnswers: ["I clienti ormai non sono più soltanto italiani.", "La clientela non è più solo italiana."], explanation: "\"Non... più\" + \"solo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She speaks the Sicilian she learned in the kitchen.", answer: "Parla il siciliano imparato in cucina.", altAnswers: ["Parla il siciliano che ha imparato in cucina.", "Parla il siciliano che ha imparato in cucina da piccola."], explanation: "Participle as a compact relative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If her great-grandfather had stayed in Sicily, the restaurant wouldn't exist.", answer: "Se il bisnonno fosse rimasto in Sicilia, il ristorante non esisterebbe.", altAnswers: ["Se il bisnonno fosse restato in Sicilia, il ristorante non esisterebbe.", "Se il suo bisnonno fosse rimasto in Sicilia, il ristorante non esisterebbe."], explanation: "Mixed hypothesis." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It was her great-grandfather who had opened] the restaurant.", sentence: "Il ristorante ___ il bisnonno.", answer: "l'aveva aperto", explanation: "Dislocation with a resumptive pronoun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Today [his great-granddaughter] runs it.", sentence: "Oggi lo gestisce ___.", answer: "la pronipote", explanation: "\"Pronipote\" = great-grandchild." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "No one [has ever seen] that village.", sentence: "Nessuno ___ quel paese.", answer: "ha mai visto", explanation: "\"Nessuno\" before the verb: no \"non\"." },
      { type: "word-order", prompt: "Put the words in order to say: Today his great-granddaughter runs it.", words: ["Oggi", "lo", "gestisce", "la", "pronipote."], translation: "Today his great-granddaughter runs it.", explanation: "Pronoun before the verb." },
      { type: "word-order", prompt: "Put the words in order to say: The recipes are handed down.", words: ["Le", "ricette", "vengono", "tramandate."], translation: "The recipes are handed down.", explanation: "\"Venire\" passive." },
      { type: "multiple-choice", question: "\"Il ristorante l'aveva aperto il bisnonno\" stresses ...", options: ["who opened the restaurant", "when the restaurant opened", "where the restaurant is", "why it closed"], correctIndex: 0, explanation: "The subject at the end gets the focus." },
      { type: "dictation", audio: "Il ristorante l'aveva aperto il bisnonno nel 1921.", explanation: "Dislocation + pluperfect." },
      { type: "speak", text: "Se il bisnonno fosse rimasto in Sicilia, questo ristorante non esisterebbe.", prompt: "Say aloud: If her great-grandfather had stayed in Sicily, this restaurant wouldn't exist.", tip: "e-si-ste-REB-be.", explanation: "Mixed hypothesis." },
    ],
  },
];
