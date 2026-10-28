// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u26-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 26 Extra Practice: Word Formation,
// Part 2. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U26_EXTRA: Lesson[] = [
  {
    slug: "b2-word-formation-2-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Compounds",
    summary: "Fresh compound nouns: il paraurti, il tostapane, il francobollo, l'altoparlante, il pescespada, il cavolfiore.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "More compounds",
        body: [
          "Verb + noun: \"il paraurti\" (bumper), \"il tostapane\" (toaster), \"il salvagente\" (life ring). Adjective + noun: \"il francobollo\" (stamp) → \"i francobolli\", \"l'altoparlante\" (loudspeaker) → \"gli altoparlanti\". Noun + noun: \"il cavolfiore\" (cauliflower) → \"i cavolfiori\", \"il pescespada\" (swordfish) → \"i pescispada\".",
        ],
        examples: [
          { es: "Si è rotto il tostapane.", en: "The toaster has broken." },
          { es: "Mi servono tre francobolli per l'estero.", en: "I need three stamps for abroad." },
          { es: "L'annuncio è arrivato dagli altoparlanti.", en: "The announcement came over the loudspeakers." },
          { es: "Ho preso un colpo sul paraurti.", en: "My bumper got a knock." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need three stamps for abroad.", answer: "Mi servono tre francobolli per l'estero.", altAnswers: ["Ho bisogno di tre francobolli per l'estero."], explanation: "\"Francobollo\" → \"francobolli\"." },
          { type: "listen-choose", audio: "Si è rotto il tostapane.", question: "What has broken?", options: ["the toaster", "the kettle", "the oven", "the fridge"], correctIndex: 0, explanation: "\"Tosta\" (toast) + \"pane\" (bread)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The toaster has broken.", answer: "Si è rotto il tostapane.", altAnswers: ["Il tostapane si è rotto."], explanation: "\"Rompersi\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The announcement came over the loudspeakers.", answer: "L'annuncio è arrivato dagli altoparlanti.", altAnswers: ["L'annuncio è stato dato dagli altoparlanti."], explanation: "\"Altoparlante\" → \"altoparlanti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two swordfish were caught.", answer: "Sono stati pescati due pescispada.", altAnswers: ["Sono stati pescati due pesci spada.", "Hanno pescato due pescispada.", "Hanno pescato due pesci spada."], explanation: "\"Pesce\" takes the plural; \"spada\" stays." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought two cauliflowers.", answer: "Ho comprato due cavolfiori.", explanation: "\"Cavolfiore\" → \"cavolfiori\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lifeguard threw him a life ring.", answer: "Il bagnino gli ha lanciato un salvagente.", altAnswers: ["Il bagnino gli ha buttato un salvagente.", "Il bagnino gli lanciò un salvagente."], explanation: "\"Salva\" + \"gente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bumpers are damaged.", answer: "I paraurti sono danneggiati.", altAnswers: ["I paraurti sono rovinati."], explanation: "\"Paraurti\": invariable (\"urti\" is plural)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where are the keyrings?", answer: "Dove sono i portachiavi?", explanation: "Invariable: \"chiavi\" is plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rome has many masterpieces.", answer: "Roma ha molti capolavori.", altAnswers: ["A Roma ci sono molti capolavori."], explanation: "Thing: only the end changes." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There are two [toasters] in the kitchen.", sentence: "In cucina ci sono due ___.", answer: "tostapane", explanation: "An exception: \"tostapane\" doesn't change, though \"pane\" is masculine singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I collect [stamps].", sentence: "Colleziono ___.", answer: "francobolli", explanation: "Adjective + noun: the end changes." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [heads of department] met.", sentence: "Si sono riuniti i ___.", answer: "capireparto", explanation: "People: \"capi\" + \"reparto\"." },
      { type: "word-order", prompt: "Put the words in order to say: My bumper got a knock.", words: ["Ho preso", "un colpo", "sul", "paraurti."], translation: "My bumper got a knock.", explanation: "\"Prendere un colpo\" = to take a knock." },
      { type: "matching", instructions: "Match the compound to its meaning.", pairs: [{ left: "il paraurti", right: "bumper" }, { left: "il tostapane", right: "toaster" }, { left: "il francobollo", right: "stamp" }, { left: "l'altoparlante", right: "loudspeaker" }, { left: "il cavolfiore", right: "cauliflower" }], explanation: "Five compounds." },
      { type: "dictation", audio: "Mi servono tre francobolli e un portachiavi.", explanation: "One regular plural, one invariable." },
      { type: "speak", text: "Si è rotto il tostapane e il paraurti della macchina è danneggiato.", prompt: "Complain: The toaster has broken and the car bumper is damaged.", tip: "pa-ra-UR-ti: stress on ur.", explanation: "Two compounds." },
    ],
  },
  {
    slug: "b2-word-formation-2-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Nominalisation",
    summary: "Fresh sentences rewriting verbs and adjectives as nouns for formal writing.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Rewrite with a noun",
        body: [
          "More pairs: \"consegnare\" → \"la consegna\" (delivery), \"iscriversi\" → \"l'iscrizione\", \"prenotare\" → \"la prenotazione\", \"rimborsare\" → \"il rimborso\", \"cancellare\" → \"la cancellazione\", \"ritardare\" → \"il ritardo\", \"efficiente\" → \"l'efficienza\", \"puntuale\" → \"la puntualità\".",
        ],
        examples: [
          { es: "La consegna è prevista entro tre giorni.", en: "Delivery is expected within three days." },
          { es: "La prenotazione è obbligatoria.", en: "Booking is compulsory." },
          { es: "In caso di cancellazione, è previsto il rimborso.", en: "If cancelled, a refund is provided." },
          { es: "Ci scusiamo per il ritardo.", en: "We apologise for the delay." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Booking is compulsory.", answer: "La prenotazione è obbligatoria.", explanation: "\"Prenotare\" → \"la prenotazione\"." },
          { type: "listen-choose", audio: "La consegna è prevista entro tre giorni.", question: "When should the delivery arrive?", options: ["within three days", "in three weeks", "on Tuesday", "today"], correctIndex: 0, explanation: "\"Entro tre giorni\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Delivery is expected within three days.", answer: "La consegna è prevista entro tre giorni.", explanation: "\"Consegnare\" → \"la consegna\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "If cancelled, a refund is provided.", answer: "In caso di cancellazione, è previsto il rimborso.", altAnswers: ["In caso di cancellazione è previsto il rimborso.", "In caso di annullamento, è previsto il rimborso."], explanation: "\"In caso di\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We apologise for the delay.", answer: "Ci scusiamo per il ritardo.", explanation: "\"Ritardare\" → \"il ritardo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Enrolment closes on 30 September.", answer: "La chiusura delle iscrizioni è il 30 settembre.", altAnswers: ["Le iscrizioni chiudono il 30 settembre.", "Il termine per le iscrizioni è il 30 settembre."], explanation: "\"Iscriversi\" → \"l'iscrizione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Punctuality is essential.", answer: "La puntualità è fondamentale.", altAnswers: ["La puntualità è essenziale."], explanation: "\"Puntuale\" → \"la puntualità\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The efficiency of the service has improved.", answer: "L'efficienza del servizio è migliorata.", altAnswers: ["L'efficienza del servizio è aumentata."], explanation: "\"Efficiente\" → \"l'efficienza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "Following the strike, the trains are late.", answer: "In seguito allo sciopero, i treni sono in ritardo.", altAnswers: ["In seguito allo sciopero i treni sono in ritardo.", "A causa dello sciopero, i treni sono in ritardo."], explanation: "\"In seguito a\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in nominal style.", source: "The refund will be made within thirty days.", answer: "Il rimborso sarà effettuato entro trenta giorni.", altAnswers: ["Il rimborso verrà effettuato entro trenta giorni.", "Il rimborso sarà effettuato entro 30 giorni."], explanation: "\"Effettuare\" pairs with action nouns." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[Booking] is recommended.", sentence: "___ è consigliata.", answer: "La prenotazione", explanation: "Feminine: \"consigliata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in nominal style.", en: "[Upon delivery], check the parcel.", sentence: "___, controllate il pacco.", answer: "Al momento della consegna", altAnswers: ["Alla consegna"], explanation: "\"Al momento di\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I appreciated [the kindness] of the staff.", sentence: "Ho apprezzato ___ del personale.", answer: "la gentilezza", explanation: "\"Gentile\" → \"la gentilezza\"." },
      { type: "word-order", prompt: "Put the words in order to say: If cancelled, a refund is provided.", words: ["In caso", "di cancellazione,", "è previsto", "il rimborso."], translation: "If cancelled, a refund is provided.", explanation: "\"Previsto\" agrees with \"il rimborso\"." },
      { type: "multiple-choice", question: "Which is the noun from \"consegnare\"?", options: ["la consegna", "il consegnamento", "la consegnazione", "il consegno"], correctIndex: 0, explanation: "Short noun: stem + \"-a\"." },
      { type: "dictation", audio: "In caso di cancellazione, il rimborso sarà effettuato entro trenta giorni.", explanation: "Two action nouns." },
      { type: "speak", text: "Ci scusiamo per il ritardo: la consegna è prevista entro tre giorni.", prompt: "As customer service: We apologise for the delay: delivery is expected within three days.", tip: "con-SE-gna: gn as in onion.", explanation: "Formal nominal style." },
    ],
  },
  {
    slug: "b2-word-formation-2-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Word Families",
    summary: "Fresh word families: costruire, costruzione, costruttore, costruttivo; vedere, visione, visibile, visita.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Families",
        body: [
          "\"Costruire\" → \"la costruzione\" → \"il costruttore\" → \"costruttivo\" (constructive). \"Vedere\" → \"la vista\" (sight, view), \"la visione\", \"visibile\", \"invisibile\". \"Organizzare\" → \"l'organizzazione\" → \"l'organizzatore\" → \"organizzativo\". \"Comunicare\" → \"la comunicazione\" → \"comunicativo\".",
        ],
        examples: [
          { es: "È stata una critica costruttiva.", en: "It was constructive criticism." },
          { es: "Dalla terrazza c'è una vista splendida.", en: "There's a splendid view from the terrace." },
          { es: "Gli organizzatori hanno annullato l'evento.", en: "The organisers cancelled the event." },
          { es: "Ha ottime capacità comunicative.", en: "She has excellent communication skills." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was constructive criticism.", answer: "È stata una critica costruttiva.", explanation: "\"Costruire\" → \"costruttivo\"." },
          { type: "listen-choose", audio: "Gli organizzatori hanno annullato l'evento.", question: "Who cancelled the event?", options: ["the organisers", "the police", "the council", "the singers"], correctIndex: 0, explanation: "\"Organizzare\" → \"l'organizzatore\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a splendid view from the terrace.", answer: "Dalla terrazza c'è una vista splendida.", altAnswers: ["Dalla terrazza si gode una vista splendida.", "C'è una vista splendida dalla terrazza."], explanation: "\"Vedere\" → \"la vista\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She has excellent communication skills.", answer: "Ha ottime capacità comunicative.", altAnswers: ["Ha delle ottime capacità comunicative."], explanation: "\"Comunicare\" → \"comunicativo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The builder has finished the house.", answer: "Il costruttore ha finito la casa.", altAnswers: ["Il costruttore ha terminato la casa."], explanation: "\"Costruire\" → \"il costruttore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The organisation was perfect.", answer: "L'organizzazione è stata perfetta.", explanation: "\"Organizzare\" → \"l'organizzazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sign isn't visible at night.", answer: "Il cartello non è visibile di notte.", altAnswers: ["Il cartello di notte non è visibile.", "L'insegna non è visibile di notte."], explanation: "\"Vedere\" → \"visibile\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Construction of the stadium is behind schedule.", answer: "La costruzione dello stadio è in ritardo.", explanation: "\"Costruire\" → \"la costruzione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a very constructive meeting.", answer: "È stata una riunione molto costruttiva.", altAnswers: ["È stato un incontro molto costruttivo."], explanation: "Agreement with \"riunione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There were organisational problems.", answer: "Ci sono stati problemi organizzativi.", altAnswers: ["Ci sono stati dei problemi organizzativi."], explanation: "\"Organizzativo\" = organisational." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The stain is almost [invisible].", sentence: "La macchia è quasi ___.", answer: "invisibile", explanation: "\"In-\" + \"visibile\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The organisers] apologised.", sentence: "___ si sono scusati.", answer: "Gli organizzatori", explanation: "\"Gli\" before a vowel in the plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Communication] is everything.", sentence: "___ è tutto.", answer: "La comunicazione", explanation: "\"-zione\" noun." },
      { type: "word-order", prompt: "Put the words in order to say: The organisers cancelled the event.", words: ["Gli organizzatori", "hanno", "annullato", "l'evento."], translation: "The organisers cancelled the event.", explanation: "Person noun in \"-tore\"." },
      { type: "matching", instructions: "Match the word to its type.", pairs: [{ left: "costruire", right: "verb" }, { left: "la costruzione", right: "action noun" }, { left: "il costruttore", right: "person noun" }, { left: "costruttivo", right: "adjective" }], explanation: "One family, four words." },
      { type: "dictation", audio: "L'organizzazione è stata perfetta e la riunione molto costruttiva.", explanation: "Two families in one sentence." },
      { type: "speak", text: "Costruire, la costruzione, il costruttore, costruttivo: è tutta una famiglia.", prompt: "Say the family: To build, construction, builder, constructive: it's one family.", tip: "co-strut-TI-vo: double t.", explanation: "Word family from \"costruire\"." },
    ],
  },
];
