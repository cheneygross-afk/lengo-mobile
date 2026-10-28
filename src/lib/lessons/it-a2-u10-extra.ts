// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u10-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 10 Extra Practice: Comparisons. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md).
export const IT_A2_U10_EXTRA: Lesson[] = [
  {
    slug: "a2-comparisons-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Di and Che",
    summary: "Fresh comparisons choosing between di and che.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Di for two things, che for two aspects",
        body: [
          "\"Di\" compares two people or things: \"Il Po è più lungo del Tevere.\" \"Che\" compares two qualities, verbs, amounts or prepositional phrases: \"Il Po è più lungo che largo\", \"Viaggio più in treno che in aereo\".",
        ],
        examples: [
          { es: "Il Po è più lungo del Tevere.", en: "The Po is longer than the Tiber." },
          { es: "Viaggio più in treno che in aereo.", en: "I travel more by train than by plane." },
          { es: "Questo lavoro è più noioso che difficile.", en: "This job is more boring than difficult." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Po is longer than the Tiber.", answer: "Il Po è più lungo del Tevere.", explanation: "Two rivers: \"di\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I travel more by train than by plane.", answer: "Viaggio più in treno che in aereo.", explanation: "Two phrases with \"in\": \"che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This job is more boring than difficult.", answer: "Questo lavoro è più noioso che difficile.", explanation: "Two adjectives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandfather is older than my grandmother.", answer: "Mio nonno è più vecchio di mia nonna.", altAnswers: ["Mio nonno è più anziano di mia nonna."], explanation: "Two people." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have more questions than answers.", answer: "Ho più domande che risposte.", explanation: "Two amounts." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Coffee in Italy is cheaper than in London.", answer: "Il caffè in Italia costa meno che a Londra.", altAnswers: ["In Italia il caffè costa meno che a Londra.", "Il caffè in Italia è più economico che a Londra."], explanation: "Two places with prepositions: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your bike is lighter than mine. (to a friend)", answer: "La tua bici è più leggera della mia.", altAnswers: ["La tua bicicletta è più leggera della mia."], explanation: "\"Della mia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's nicer to cook than to wash the dishes.", answer: "È più bello cucinare che lavare i piatti.", altAnswers: ["Cucinare è più bello che lavare i piatti."], explanation: "Two verbs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children are more tired than hungry.", answer: "I bambini sono più stanchi che affamati.", altAnswers: ["I bambini hanno più sonno che fame."], explanation: "Two adjectives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today there are fewer people than yesterday.", answer: "Oggi c'è meno gente di ieri.", altAnswers: ["Oggi ci sono meno persone di ieri.", "Oggi c'è meno gente che ieri."], explanation: "Two days: \"di ieri\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I eat more at lunch [than] at dinner.", sentence: "Mangio più a pranzo ___ a cena.", answer: "che", explanation: "Two prepositional phrases." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Lake Garda is bigger [than] Lake Como.", sentence: "Il lago di Garda è più grande ___ lago di Como.", answer: "del", explanation: "Two lakes: \"di + il\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She has more shoes [than] bags.", sentence: "Ha più scarpe ___ borse.", answer: "che", explanation: "Two amounts." },
      { type: "word-order", prompt: "Put the words in order to say: My brother earns more than me.", words: ["Mio", "fratello", "guadagna", "più", "di", "me."], translation: "My brother earns more than me.", explanation: "\"Di me\"." },
      { type: "multiple-choice", question: "\"Leggo più la sera ___ la mattina.\"", options: ["che", "di", "della", "come"], correctIndex: 0, explanation: "Two times." },
      { type: "dictation", audio: "Il Po è più lungo del Tevere, ma è meno famoso.", explanation: "\"Del Tevere\"." },
      { type: "speak", text: "Viaggio più in treno che in aereo, perché il treno è più comodo dell'aereo.", prompt: "Say it in Italian: I travel more by train than by plane, because the train is more comfortable than the plane.", tip: "Che, then di.", explanation: "Both structures." },
    ],
  },
  {
    slug: "a2-comparisons-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Superlatives",
    summary: "Fresh relative superlatives (il più ... di) and absolute superlatives (-issimo).",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The most and very",
        body: [
          "Relative: article + noun + \"più\" / \"meno\" + adjective + \"di\": \"la montagna più alta d'Italia\". Absolute: adjective + \"-issimo\": \"altissima\". New words: \"la vetta\" (peak), \"antico\" (ancient), \"affollato\" (crowded), \"economico\" (cheap).",
        ],
        examples: [
          { es: "Il Monte Bianco è la montagna più alta dell'Europa occidentale.", en: "Mont Blanc is the highest mountain in Western Europe." },
          { es: "È il ristorante meno caro della zona.", en: "It's the cheapest restaurant in the area." },
          { es: "D'estate le spiagge sono affollatissime.", en: "In summer the beaches are extremely crowded." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the cheapest restaurant in the area.", answer: "È il ristorante meno caro della zona.", altAnswers: ["È il ristorante più economico della zona."], explanation: "\"Meno caro\" / \"più economico\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In summer the beaches are [extremely crowded].", sentence: "D'estate le spiagge sono ___.", answer: "affollatissime", altAnswers: ["molto affollate"], explanation: "\"-issime\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the oldest church in the city.", answer: "È la chiesa più antica della città.", altAnswers: ["È la chiesa più vecchia della città."], explanation: "\"Antico\" for buildings and history." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's the funniest person I know.", answer: "È la persona più divertente che conosco.", altAnswers: ["È la persona più simpatica che conosco.", "È la persona più divertente che io conosca.", "È la persona più divertente che conosca."], explanation: "\"Che\" + verb after a superlative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The water was very clear.", answer: "L'acqua era limpidissima.", altAnswers: ["L'acqua era molto limpida.", "L'acqua era chiarissima."], explanation: "\"-issima\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the busiest street in Milan.", answer: "È la strada più trafficata di Milano.", altAnswers: ["È la via più trafficata di Milano.", "È la strada più affollata di Milano."], explanation: "\"Di\" + city." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These are the cheapest tickets.", answer: "Questi sono i biglietti più economici.", altAnswers: ["Questi sono i biglietti meno cari."], explanation: "\"Economico\" → \"economici\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hotel was very quiet.", answer: "L'albergo era tranquillissimo.", altAnswers: ["L'hotel era tranquillissimo.", "L'albergo era molto tranquillo."], explanation: "\"-issimo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "August is the hottest month of the year.", answer: "Agosto è il mese più caldo dell'anno.", explanation: "\"Dell'anno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lesson was really short.", answer: "La lezione è stata brevissima.", altAnswers: ["La lezione era brevissima.", "La lezione è stata cortissima.", "La lezione era cortissima."], explanation: "\"Brevissima\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's [the least interesting] museum in the city.", sentence: "È il museo ___ della città.", answer: "meno interessante", explanation: "\"Meno\" + adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandparents are [very nice].", sentence: "I miei nonni sono ___.", answer: "simpaticissimi", altAnswers: ["gentilissimi", "molto simpatici"], explanation: "\"Simpatico\" → \"simpaticissimi\" (no h)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's the best [in the] class.", sentence: "È la migliore ___ classe.", answer: "della", explanation: "\"Di + la\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's the longest bridge in Italy.", words: ["È", "il", "ponte", "più", "lungo", "d'Italia."], translation: "It's the longest bridge in Italy.", explanation: "\"D'Italia\"." },
      { type: "multiple-choice", question: "Which means very rich?", options: ["ricchissimo", "il più ricco", "più ricco", "ricco come"], correctIndex: 0, explanation: "\"-issimo\" = very." },
      { type: "listen-choose", audio: "È la spiaggia più bella della Sardegna.", question: "What does the speaker say about the beach?", options: ["It's the most beautiful in Sardinia.", "It's very beautiful.", "It's more beautiful than Sicily's.", "It's as beautiful as Sardinia."], correctIndex: 0, explanation: "Relative superlative." },
      { type: "speak", text: "Agosto è il mese più caldo dell'anno: le città sono vuotissime e le spiagge affollatissime.", prompt: "Say it in Italian: August is the hottest month of the year: the cities are completely empty and the beaches extremely crowded.", tip: "One relative, two absolute superlatives.", explanation: "Both superlatives." },
    ],
  },
  {
    slug: "a2-comparisons-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Migliore and Meglio",
    summary: "Fresh sentences choosing between migliore / peggiore and meglio / peggio.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Noun or verb?",
        body: [
          "With a noun, or after \"essere\" describing a noun: \"migliore\" / \"peggiore\" (\"un'idea migliore\", \"Questo film è peggiore\"). With a verb: \"meglio\" / \"peggio\" (\"Dormo meglio\", \"Va peggio\"). \"È meglio\" + infinitive = it's better to.",
        ],
        examples: [
          { es: "Hai un'idea migliore?", en: "Have you got a better idea?" },
          { es: "Con il nuovo materasso dormo meglio.", en: "With the new mattress I sleep better." },
          { es: "La situazione va peggio.", en: "The situation is getting worse." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got a better idea? (to a friend)", answer: "Hai un'idea migliore?", explanation: "With a noun: \"migliore\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With the new mattress I sleep better.", answer: "Con il nuovo materasso dormo meglio.", altAnswers: ["Col nuovo materasso dormo meglio."], explanation: "With a verb: \"meglio\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The situation is getting worse.", answer: "La situazione va peggio.", altAnswers: ["La situazione sta peggiorando."], explanation: "With \"andare\": \"peggio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This is the best solution.", answer: "Questa è la soluzione migliore.", altAnswers: ["Questa è la migliore soluzione.", "Questa è la miglior soluzione."], explanation: "\"La migliore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better to book the hotel now.", answer: "È meglio prenotare l'albergo adesso.", altAnswers: ["Meglio prenotare l'albergo adesso.", "È meglio prenotare l'albergo ora.", "È meglio prenotare l'hotel adesso."], explanation: "\"È meglio\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My Italian is getting better.", answer: "Il mio italiano va meglio.", altAnswers: ["Il mio italiano sta migliorando.", "Il mio italiano va sempre meglio."], explanation: "With a verb: \"meglio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This year's results are worse than last year's.", answer: "I risultati di quest'anno sono peggiori di quelli dell'anno scorso.", altAnswers: ["I risultati di quest'anno sono peggiori dell'anno scorso."], explanation: "Plural adjective: \"peggiori\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She dances better than everyone.", answer: "Balla meglio di tutti.", altAnswers: ["Lei balla meglio di tutti."], explanation: "\"Meglio di tutti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had an excellent dinner.", answer: "Abbiamo fatto un'ottima cena.", altAnswers: ["Abbiamo mangiato un'ottima cena.", "Abbiamo cenato benissimo."], explanation: "\"Ottimo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the worst moment to leave.", answer: "È il momento peggiore per partire.", altAnswers: ["È il peggior momento per partire.", "È il peggiore momento per partire."], explanation: "\"Il peggiore\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I feel [worse] than yesterday.", sentence: "Sto ___ di ieri.", answer: "peggio", explanation: "With \"stare\": adverb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Your new phone is [better] than the old one.", sentence: "Il tuo nuovo telefono è ___ di quello vecchio.", answer: "migliore", explanation: "Describes a noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My [younger] sister is a nurse.", sentence: "Mia sorella ___ fa l'infermiera.", answer: "minore", altAnswers: ["più piccola"], explanation: "\"Minore\"." },
      { type: "word-order", prompt: "Put the words in order to say: Pietro is my best friend.", words: ["Pietro", "è", "il", "mio", "migliore", "amico."], translation: "Pietro is my best friend.", altOrders: [["Il", "mio", "migliore", "amico", "è", "Pietro."]], explanation: "\"Il mio migliore amico\"." },
      { type: "multiple-choice", question: "\"Oggi il tempo è ___ di ieri.\" (worse)", options: ["peggiore", "più peggio", "peggio di più", "più peggiore"], correctIndex: 0, explanation: "Describing \"il tempo\": \"peggiore\" (\"peggio\" is also heard)." },
      { type: "dictation", audio: "Dormo meglio e mangio meglio: sto benissimo!", explanation: "Adverbs: \"meglio\", \"benissimo\"." },
      { type: "speak", text: "È meglio prendere il treno: è più veloce e i posti sono migliori.", prompt: "Say it in Italian: It's better to take the train: it's faster and the seats are better.", tip: "Meglio with a verb, migliori with a noun.", explanation: "Both forms." },
    ],
  },
];
