// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u14-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 14 Extra Practice: Style: Rhythm and Punctuation.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U14_EXTRA: Lesson[] = [
  {
    slug: "c2-style-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Punctuation",
    summary: "Fresh sentences to punctuate and translate: incisi, relative clauses, colons, semicolons and quotation marks.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Quick reminders",
        body: [
          "No comma between subject and verb; two commas around an inciso; commas for non-defining relatives only; lower case after a colon; « » with the comma after the closing sign.",
        ],
        examples: [
          { es: "Mia sorella, che vive a Cagliari, arriva domani.", en: "My sister, who lives in Cagliari, arrives tomorrow." },
          { es: "I treni che partono da Firenze sono in ritardo.", en: "The trains leaving from Florence are late." },
          { es: "Una cosa è certa: non torneremo indietro.", en: "One thing is certain: we won't go back." },
          { es: "«Ci vediamo domani», disse, e uscì.", en: "'See you tomorrow,' she said, and went out." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister, who lives in Cagliari, arrives tomorrow.", answer: "Mia sorella, che vive a Cagliari, arriva domani.", altAnswers: ["Mia sorella, che abita a Cagliari, arriva domani."], explanation: "Only one sister: non-defining relative between commas." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "One thing is certain: we won't go back.", answer: "Una cosa è certa: non torneremo indietro.", altAnswers: ["Una cosa è sicura: non torneremo indietro."], explanation: "Colon + lower case." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The trains leaving from Florence are late.", answer: "I treni che partono da Firenze sono in ritardo.", altAnswers: ["I treni in partenza da Firenze sono in ritardo."], explanation: "Defining relative: no commas." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "'See you tomorrow,' she said, and went out.", answer: "«Ci vediamo domani», disse, e uscì.", altAnswers: ["«Ci vediamo domani», disse e uscì.", "«A domani», disse, e uscì."], explanation: "Comma after the closing guillemet." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum, unfortunately, is closed on Mondays.", answer: "Il museo, purtroppo, è chiuso il lunedì.", altAnswers: ["Purtroppo il museo è chiuso il lunedì.", "Il museo purtroppo è chiuso il lunedì."], explanation: "\"Purtroppo\" as an inciso; \"il lunedì\" = on Mondays." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some voted yes; others abstained.", answer: "Alcuni hanno votato sì; altri si sono astenuti.", altAnswers: ["Alcuni votarono sì; altri si astennero.", "Alcuni hanno votato a favore; altri si sono astenuti."], explanation: "Semicolon between parallel clauses; \"sì\" with an accent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you, Doctor, for your patience. (to a woman)", answer: "Grazie, dottoressa, per la sua pazienza.", altAnswers: ["Grazie, dottoressa, per la Sua pazienza.", "Grazie dottoressa per la sua pazienza."], explanation: "The vocative is set off by commas." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What's] the time of the meeting?", sentence: "___ l'orario della riunione?", answer: "Qual è", explanation: "No apostrophe." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [gives] lessons on Thursdays.", sentence: "___ lezioni il giovedì.", answer: "Dà", explanation: "\"Dà\" (gives), accented." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Wait [a bit] longer.", sentence: "Aspetta ___ ancora.", answer: "un po'", explanation: "Apostrophe in \"po'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We need three things: [time, money and patience].", sentence: "Ci servono tre cose: ___.", answer: "tempo, soldi e pazienza", altAnswers: ["tempo, denaro e pazienza"], explanation: "Lower case after the colon, no comma before \"e\"." },
      { type: "word-order", prompt: "Put the words in order to say: The director, it seems, will resign.", words: ["Il", "direttore,", "a", "quanto", "pare,", "si", "dimetterà."], translation: "The director, it seems, will resign.", explanation: "Inciso between two commas." },
      { type: "multiple-choice", question: "Which sentence is correctly punctuated?", options: ["Chi ha finito può uscire.", "Chi ha finito, può uscire.", "Chi, ha finito può uscire.", "Chi ha finito può, uscire."], correctIndex: 0, explanation: "\"Chi ha finito\" is the subject: no comma." },
      { type: "multiple-choice", question: "\"I passeggeri, che avevano il biglietto, sono saliti.\" What does it mean?", options: ["All the passengers had tickets and boarded.", "Only those with tickets boarded.", "Nobody had a ticket.", "The passengers bought tickets on board."], correctIndex: 0, explanation: "Commas: non-defining, so it applies to all passengers." },
      {
        type: "matching",
        instructions: "Match the sign to its typical use.",
        pairs: [
          { left: "i due punti", right: "introduce an explanation or list" },
          { left: "il punto e virgola", right: "link two parallel clauses" },
          { left: "la lineetta", right: "enclose a strong inciso" },
          { left: "gli apici", right: "mark a word's meaning" },
          { left: "le virgolette basse", right: "direct speech in print" },
        ],
        explanation: "Italian punctuation at a glance.",
      },
      { type: "listen-choose", audio: "Mia sorella, che vive a Cagliari, arriva domani.", question: "What can you infer?", options: ["The speaker has one sister.", "The speaker has several sisters.", "The sister has moved to Cagliari tomorrow.", "The speaker lives in Cagliari."], correctIndex: 0, explanation: "A non-defining relative implies only one sister." },
      { type: "dictation", audio: "Il museo, purtroppo, è chiuso il lunedì.", explanation: "Inciso and lower-case day." },
      { type: "speak", text: "Una cosa è certa: non torneremo indietro.", prompt: "Say it in Italian with a clear pause at the colon: One thing is certain: we won't go back.", tip: "Pause, then drop the voice on \"indietro\".", explanation: "The colon is heard as an announcement." },
    ],
  },
  {
    slug: "c2-style-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Rewriting",
    summary: "Fresh rewriting practice: compress with participles, vary with pronouns and precise verbs, emphasize with word order.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three rewriting moves",
        body: [
          "Compress (absolute participle, gerund), vary (quest'ultimo, ellipsis, precise verbs), emphasize (end position, \"a\" + infinitive, inversion).",
        ],
        examples: [
          { es: "Pagato il conto, uscimmo.", en: "Having paid the bill, we left." },
          { es: "Io ho votato sì, mio marito no.", en: "I voted yes, my husband no." },
          { es: "A decidere sarà il consiglio.", en: "It's the board that will decide." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with an absolute participle.", source: "Having paid the bill, we left.", answer: "Pagato il conto, uscimmo.", altAnswers: ["Pagato il conto, siamo usciti.", "Dopo aver pagato il conto, uscimmo.", "Pagato il conto, ce ne andammo."], explanation: "\"Pagato\" agrees with \"il conto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I voted yes, my husband no.", answer: "Io ho votato sì, mio marito no.", altAnswers: ["Io ho votato sì e mio marito no."], explanation: "Ellipsis of \"ha votato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the board that will decide.", answer: "A decidere sarà il consiglio.", altAnswers: ["Sarà il consiglio a decidere.", "Deciderà il consiglio."], explanation: "\"A\" + infinitive moves the subject to the end." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian with an absolute participle.", source: "Once the luggage was loaded, the bus left.", answer: "Caricati i bagagli, l'autobus partì.", altAnswers: ["Caricati i bagagli, il pullman partì.", "Caricati i bagagli, l'autobus è partito.", "Caricati i bagagli, il pullman è partito."], explanation: "\"Caricati\" agrees with \"i bagagli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wrote to the lawyer and the notary; the latter replied at once.", answer: "Ho scritto all'avvocato e al notaio; quest'ultimo ha risposto subito.", altAnswers: ["Ho scritto all'avvocato e al notaio; quest'ultimo mi ha risposto subito.", "Ho scritto all'avvocato e al notaio: quest'ultimo ha risposto subito."], explanation: "\"Quest'ultimo\" = the notary." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Never had I seen so many people.", answer: "Mai avevo visto tanta gente.", altAnswers: ["Non avevo mai visto tanta gente.", "Mai avevo visto così tanta gente."], explanation: "\"Mai\" first, no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The company carried out an inspection.", answer: "L'azienda ha effettuato un'ispezione.", altAnswers: ["L'azienda ha svolto un'ispezione.", "L'azienda ha condotto un'ispezione.", "La società ha effettuato un'ispezione."], explanation: "A precise verb instead of \"fare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The spokeswoman [specified] that it was a test.", sentence: "La portavoce ha ___ che si trattava di una prova.", answer: "precisato", altAnswers: ["chiarito"], explanation: "\"Precisare\" = to specify." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Once the film was over], the lights came on.", sentence: "___, si accesero le luci.", answer: "Finito il film", altAnswers: ["Terminato il film"], explanation: "Absolute participle, masculine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Between the sea and the lake, I prefer [the former].", sentence: "Tra il mare e il lago, preferisco ___.", answer: "il primo", explanation: "\"Il primo\" = the former." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pizza, [I'll make it].", sentence: "La pizza, ___ io.", answer: "la faccio", explanation: "Dislocation with \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The plan [was implemented] in two years.", sentence: "Il piano ___ in due anni.", answer: "è stato attuato", altAnswers: ["fu attuato", "venne attuato"], explanation: "\"Attuare\" = to implement." },
      { type: "word-order", prompt: "Put the words in order to say: Having paid the bill, we left.", words: ["Pagato", "il", "conto,", "uscimmo."], translation: "Having paid the bill, we left.", explanation: "Participle first." },
      { type: "multiple-choice", question: "Which rewrite of \"Ho visto Marco. Marco era stanco. Marco voleva tornare a casa.\" is best?", options: ["Ho visto Marco: era stanco e voleva tornare a casa.", "Ho visto Marco, Marco era stanco, Marco voleva tornare a casa.", "Ho visto Marco e lo stesso era stanco e voleva tornare a casa.", "Ho visto Marco, esso era stanco."], correctIndex: 0, explanation: "Colon and an implied subject remove the repetition." },
      {
        type: "matching",
        instructions: "Match the technique to the example.",
        pairs: [
          { left: "participio assoluto", right: "Pagato il conto, uscimmo." },
          { left: "ellissi", right: "Io sì, lui no." },
          { left: "dislocazione", right: "La pizza, la faccio io." },
          { left: "inversione", right: "Mai avevo visto tanta gente." },
        ],
        explanation: "Four rewriting tools.",
      },
      { type: "listen-choose", audio: "Caricati i bagagli, il pullman partì verso Napoli.", question: "What happened first?", options: ["The luggage was loaded.", "The bus left.", "They arrived in Naples.", "The luggage was lost."], correctIndex: 0, explanation: "The absolute participle marks the earlier action." },
      { type: "dictation", audio: "Ho scritto all'avvocato e al notaio; quest'ultimo ha risposto subito.", explanation: "\"Quest'ultimo\" after the semicolon." },
      { type: "speak", text: "A decidere sarà il consiglio, non il direttore.", prompt: "Say it in Italian: It's the board that will decide, not the director.", tip: "Stress \"conSIglio\" and \"diretTOre\" for the contrast.", explanation: "End position carries the contrast." },
    ],
  },
];
