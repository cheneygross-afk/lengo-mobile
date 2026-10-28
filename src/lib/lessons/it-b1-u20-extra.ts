// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u20-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 20 Extra Practice: The Passive. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U20_EXTRA: Lesson[] = [
  {
    slug: "b1-passive-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Essere and Venire",
    summary: "Fresh sentences with the passive with essere and venire, in history, news and everyday routines.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Done, or being done",
        body: [
          "\"Essere\" + participle in any tense; \"venire\" + participle in simple tenses only. Agreement with the subject, \"da\" for the doer.",
        ],
        examples: [
          { es: "Il Colosseo è stato costruito nel primo secolo dopo Cristo.", en: "The Colosseum was built in the first century AD." },
          { es: "I rifiuti vengono raccolti di notte.", en: "The rubbish is collected at night." },
          { es: "La notizia è stata data dalla radio.", en: "The news was given by the radio." },
          { es: "Le lezioni verranno registrate.", en: "The lessons will be recorded." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rubbish is collected at night.", answer: "I rifiuti vengono raccolti di notte.", altAnswers: ["I rifiuti sono raccolti di notte.", "La spazzatura viene raccolta di notte.", "L'immondizia viene raccolta di notte."], explanation: "Routine: \"venire\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lessons will be recorded.", answer: "Le lezioni verranno registrate.", altAnswers: ["Le lezioni saranno registrate."], explanation: "Future: \"verranno\" or \"saranno\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Colosseum was built in the first century AD.", answer: "Il Colosseo è stato costruito nel primo secolo dopo Cristo.", altAnswers: ["Il Colosseo fu costruito nel primo secolo dopo Cristo.", "Il Colosseo è stato costruito nel I secolo d.C."], explanation: "\"Stato costruito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Mona Lisa was painted by Leonardo.", answer: "La Gioconda è stata dipinta da Leonardo.", altAnswers: ["La Gioconda fu dipinta da Leonardo.", "La Monna Lisa è stata dipinta da Leonardo."], explanation: "\"Dipinta\" from \"dipingere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The match was won by the home team.", answer: "La partita è stata vinta dalla squadra di casa.", explanation: "\"Vinta\" from \"vincere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Coffee is served after the meal.", answer: "Il caffè viene servito dopo il pasto.", altAnswers: ["Il caffè è servito dopo il pasto.", "Il caffè si serve dopo il pasto."], explanation: "\"Viene servito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum will be reopened in spring.", answer: "Il museo sarà riaperto in primavera.", altAnswers: ["Il museo verrà riaperto in primavera."], explanation: "\"Riaperto\" from \"riaprire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The village had been abandoned.", answer: "Il paese era stato abbandonato.", altAnswers: ["Il villaggio era stato abbandonato."], explanation: "Pluperfect passive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The phone [was invented] in the nineteenth century.", sentence: "Il telefono ___ nell'Ottocento.", answer: "è stato inventato", altAnswers: ["fu inventato"], explanation: "\"Stato inventato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The prices [are updated] every week.", sentence: "I prezzi ___ ogni settimana.", answer: "vengono aggiornati", altAnswers: ["sono aggiornati"], explanation: "Routine: \"vengono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The flowers [were sent] by a mysterious admirer.", sentence: "I fiori ___ da un ammiratore misterioso.", answer: "sono stati mandati", altAnswers: ["sono stati spediti", "sono stati inviati"], explanation: "Masculine plural." },
      { type: "word-order", prompt: "Put the words in order to say: The concert was cancelled because of the rain.", words: ["Il", "concerto", "è", "stato", "annullato", "per", "la", "pioggia."], translation: "The concert was cancelled because of the rain.", explanation: "\"Stato annullato\"." },
      { type: "multiple-choice", question: "Which is NOT correct?", options: ["La casa è venuta venduta.", "La casa viene venduta.", "La casa è stata venduta.", "La casa verrà venduta."], correctIndex: 0, explanation: "No \"venire\" in compound tenses." },
      { type: "listen-choose", audio: "I rifiuti vengono raccolti di notte.", question: "When is the rubbish collected?", options: ["At night", "In the morning", "Once a week", "On Sundays"], correctIndex: 0, explanation: "\"Di notte\"." },
      { type: "dictation", audio: "La Gioconda è stata dipinta da Leonardo.", explanation: "\"Dipinta\", feminine." },
      { type: "speak", text: "Il Colosseo è stato costruito duemila anni fa e viene visitato da milioni di persone ogni anno.", prompt: "Say it in Italian: The Colosseum was built two thousand years ago and is visited by millions of people every year.", tip: "\"Colosseo\": co-los-SE-o, a long double s.", explanation: "\"Essere\" then \"venire\"." },
    ],
  },
  {
    slug: "b1-passive-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Va + Participle",
    summary: "Fresh sentences with andare + participle for rules and instructions: va spento, vanno ritirati, non va lasciato.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Must be, should be",
        body: [
          "\"Va\" / \"vanno\" + participle = must be. The participle agrees; \"non va\" = must not be. Typical in rules, labels and manuals.",
        ],
        examples: [
          { es: "Il telefono va spento durante il volo.", en: "Phones must be switched off during the flight." },
          { es: "I bagagli vanno ritirati al nastro 4.", en: "Baggage is to be collected at belt 4." },
          { es: "Il latte va conservato in frigo.", en: "The milk must be kept in the fridge." },
          { es: "Il cane non va lasciato in macchina.", en: "The dog mustn't be left in the car." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The milk must be kept in the fridge.", answer: "Il latte va conservato in frigo.", altAnswers: ["Il latte va conservato in frigorifero.", "Il latte va tenuto in frigo."], explanation: "\"Va conservato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dog mustn't be left in the car.", answer: "Il cane non va lasciato in macchina.", altAnswers: ["Il cane non deve essere lasciato in macchina."], explanation: "\"Non va\" = must not be." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Phones must be switched off during the flight.", answer: "Il telefono va spento durante il volo.", altAnswers: ["I telefoni vanno spenti durante il volo.", "I cellulari vanno spenti durante il volo."], explanation: "\"Spento\" from \"spegnere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Baggage is to be collected at belt 4.", answer: "I bagagli vanno ritirati al nastro 4.", altAnswers: ["I bagagli vanno ritirati al nastro quattro.", "I bagagli si ritirano al nastro 4."], explanation: "\"Vanno ritirati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The salad should be eaten fresh.", answer: "L'insalata va mangiata fresca.", explanation: "Feminine agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These shirts must be washed by hand.", answer: "Queste camicie vanno lavate a mano.", explanation: "\"Vanno lavate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bill must be paid by the 15th.", answer: "La bolletta va pagata entro il 15.", altAnswers: ["La bolletta va pagata entro il quindici."], explanation: "\"Va pagata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rules must be respected.", answer: "Le regole vanno rispettate.", explanation: "\"Vanno rispettate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The meat [should be cooked] well.", sentence: "La carne ___ bene.", answer: "va cotta", explanation: "\"Cotta\" agrees." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Medicines [mustn't be left] within reach of children.", sentence: "I medicinali non ___ alla portata dei bambini.", answer: "vanno lasciati", explanation: "\"Non vanno lasciati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "That [should have been said] before.", sentence: "Questo ___ prima.", answer: "andava detto", altAnswers: ["doveva essere detto"], explanation: "Imperfect \"andava\"." },
      { type: "word-order", prompt: "Put the words in order to say: The glass must be thrown away separately.", words: ["Il", "vetro", "va", "buttato", "separatamente."], translation: "The glass must be thrown away separately.", explanation: "\"Va buttato\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Le scarpe vanno tolte all'ingresso.", "Le scarpe va tolte all'ingresso.", "Le scarpe vanno tolto all'ingresso.", "Le scarpe vanno togliere all'ingresso."], correctIndex: 0, explanation: "\"Vanno tolte\"." },
      { type: "listen-choose", audio: "La bolletta va pagata entro il quindici.", question: "What's the deadline about?", options: ["Paying a bill", "Sending a letter", "Booking a ticket", "Returning a book"], correctIndex: 0, explanation: "\"La bolletta\" = the bill." },
      { type: "dictation", audio: "Il modulo va consegnato in segreteria entro venerdì.", explanation: "\"Va consegnato\"." },
      { type: "speak", text: "Le scarpe vanno tolte all'ingresso e il telefono va spento in sala.", prompt: "Say it in Italian: Shoes must be taken off at the entrance and phones must be switched off in the hall.", tip: "\"Tolte\" and \"spento\": two different irregular participles.", explanation: "\"Vanno tolte\", \"va spento\"." },
    ],
  },
  {
    slug: "b1-passive-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Si Passivante",
    summary: "Fresh sentences with the si passivante: si parla, si parlano, si sono vendute, si possono prenotare.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Agree with the thing",
        body: [
          "\"Si\" + third-person verb, singular or plural to match the thing. Past with \"essere\" and agreement. Modals agree too.",
        ],
        examples: [
          { es: "In Svizzera si parlano quattro lingue.", en: "Four languages are spoken in Switzerland." },
          { es: "Le visite si possono prenotare online.", en: "Tours can be booked online." },
          { es: "Si sono vendute tutte le magliette.", en: "All the T-shirts have been sold." },
          { es: "Da qui si vede il mare.", en: "You can see the sea from here." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Four languages are spoken in Switzerland.", answer: "In Svizzera si parlano quattro lingue.", altAnswers: ["Si parlano quattro lingue in Svizzera."], explanation: "Plural: \"si parlano\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tours can be booked online.", answer: "Le visite si possono prenotare online.", altAnswers: ["Si possono prenotare le visite online.", "Le visite guidate si possono prenotare online."], explanation: "\"Si possono\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can see the sea from here.", answer: "Da qui si vede il mare.", altAnswers: ["Si vede il mare da qui."], explanation: "Singular: \"si vede\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "All the T-shirts have been sold.", answer: "Si sono vendute tutte le magliette.", altAnswers: ["Sono state vendute tutte le magliette."], explanation: "\"Vendute\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here pizza is cooked in a wood-fired oven.", answer: "Qui la pizza si cuoce nel forno a legna.", altAnswers: ["Qui si cuoce la pizza nel forno a legna."], explanation: "Singular: \"si cuoce\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Second-hand clothes are collected here.", answer: "Qui si raccolgono vestiti usati.", altAnswers: ["Si raccolgono vestiti usati qui.", "Qui si raccolgono abiti usati."], explanation: "Plural: \"si raccolgono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lots of photos were taken.", answer: "Si sono fatte tante foto.", altAnswers: ["Si sono fatte molte foto.", "Sono state fatte tante foto."], explanation: "\"Fatte\" agrees with \"foto\" (feminine)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fireworks are set off at New Year.", answer: "A Capodanno si sparano i fuochi d'artificio.", altAnswers: ["Si sparano i fuochi d'artificio a Capodanno."], explanation: "Plural: \"si sparano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In this shop [only local products are sold].", sentence: "In questo negozio ___.", answer: "si vendono solo prodotti locali", altAnswers: ["si vendono soltanto prodotti locali"], explanation: "Plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The tickets can be printed] at home.", sentence: "___ a casa.", answer: "I biglietti si possono stampare", altAnswers: ["Si possono stampare i biglietti"], explanation: "\"Si possono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Last night [a strange noise was heard].", sentence: "Stanotte ___.", answer: "si è sentito un rumore strano", altAnswers: ["si è sentito uno strano rumore"], explanation: "Compound: \"si è sentito\"." },
      { type: "word-order", prompt: "Put the words in order to say: Lessons can be paid by card.", words: ["Le", "lezioni", "si", "possono", "pagare", "con", "la", "carta."], translation: "Lessons can be paid by card.", explanation: "\"Si possono pagare\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Si sono costruiti due ponti.", "Si è costruito due ponti.", "Si sono costruito due ponti.", "Si hanno costruiti due ponti."], correctIndex: 0, explanation: "Plural, \"essere\", agreement." },
      { type: "listen-choose", audio: "Da questa terrazza si vede tutta la città.", question: "What can you see from the terrace?", options: ["The whole city", "The sea", "The mountains", "Nothing"], correctIndex: 0, explanation: "\"Tutta la città\"." },
      { type: "dictation", audio: "In questa zona si coltivano limoni e arance.", explanation: "Plural: \"si coltivano\"." },
      { type: "speak", text: "In questo ristorante si mangia il pesce più fresco e si bevono ottimi vini.", prompt: "Say it in Italian: In this restaurant the freshest fish is eaten and excellent wines are drunk.", tip: "\"Si bevono\": BE-vo-no.", explanation: "Singular, then plural." },
    ],
  },
];
