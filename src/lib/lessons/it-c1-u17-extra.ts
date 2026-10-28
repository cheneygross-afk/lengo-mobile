// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u17-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 17 Extra Practice: Rhetoric and Persuasion. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
// All texts, brands and speakers are invented.
export const IT_C1_U17_EXTRA: Lesson[] = [
  {
    slug: "c1-rhetoric-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Devices",
    summary: "Spot and reproduce rhetorical devices in fresh texts: a school head's farewell, a market trader's patter and a sports captain's team talk.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three short texts",
        body: [
          "A head teacher's farewell: \"Siete arrivati bambini, ve ne andate ragazzi, tornerete adulti. Non vi chiedo di ricordare le formule: vi chiedo di ricordare le domande.\" A climax of ages, then an antithesis (\"le formule... le domande\").",
          "A market trader: \"Signora, guardi qua! Pesche così non le trova da nessuna parte: dolci, succose, profumate. E il prezzo? Il prezzo non è un problema!\" An enumeration of three adjectives, a question asked and answered (\"E il prezzo?\") and a litote-like reassurance.",
          "A captain before a match: \"Non siamo i più forti. Non siamo i più ricchi. Ma chi corre più di noi? Chi ci crede più di noi? Nessuno.\" Anaphora with \"Non siamo\", then two rhetorical questions with an answer of one word.",
        ],
        examples: [
          { es: "Siete arrivati bambini, ve ne andate ragazzi, tornerete adulti.", en: "You arrived as children, you leave as teenagers, you'll come back as adults." },
          { es: "Non vi chiedo di ricordare le formule: vi chiedo di ricordare le domande.", en: "I'm not asking you to remember the formulas: I'm asking you to remember the questions." },
          { es: "Pesche così non le trova da nessuna parte.", en: "You won't find peaches like these anywhere." },
          { es: "Dolci, succose, profumate.", en: "Sweet, juicy, fragrant." },
          { es: "Non siamo i più forti. Non siamo i più ricchi.", en: "We're not the strongest. We're not the richest." },
          { es: "Chi ci crede più di noi? Nessuno.", en: "Who believes in it more than we do? Nobody." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (climax).", source: "You arrived as children, you leave as teenagers, you'll come back as adults.", answer: "Siete arrivati bambini, ve ne andate ragazzi, tornerete adulti.", altAnswers: ["Siete arrivati da bambini, ve ne andate da ragazzi, tornerete da adulti."], explanation: "Noun as predicate without \"come\"." },
          { type: "multiple-choice", question: "\"Non siamo i più forti. Non siamo i più ricchi.\" uses ...", options: ["anaphora", "chiasmus", "paralipsis", "polysyndeton"], correctIndex: 0, explanation: "Repeated \"Non siamo\"." },
          { type: "listen-choose", audio: "Chi ci crede più di noi? Nessuno.", question: "What does the captain mean?", options: ["Nobody believes in it more than we do.", "Nobody believes in us.", "We don't believe in it.", "Nobody came to the match."], correctIndex: 0, explanation: "Rhetorical question + one-word answer." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (antithesis).", source: "I'm not asking you to remember the formulas: I'm asking you to remember the questions.", answer: "Non vi chiedo di ricordare le formule: vi chiedo di ricordare le domande.", altAnswers: ["Non vi chiedo di ricordare le formule, vi chiedo di ricordare le domande.", "Non vi chiedo di ricordare le formule, ma le domande."], explanation: "\"Chiedere di\" + infinitive, twice." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (Lei).", source: "You won't find peaches like these anywhere.", answer: "Pesche così non le trova da nessuna parte.", altAnswers: ["Pesche così non le trova da nessun'altra parte.", "Pesche come queste non le trova da nessuna parte.", "Non trova pesche così da nessuna parte."], explanation: "Fronted object + resumptive \"le\": typical of speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sweet, juicy, fragrant.", answer: "Dolci, succose, profumate.", explanation: "Agreement with \"pesche\" (feminine plural)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (anaphora).", source: "We're not the strongest. We're not the richest.", answer: "Non siamo i più forti. Non siamo i più ricchi.", altAnswers: ["Non siamo i più forti, non siamo i più ricchi."], explanation: "Relative superlative: \"i più\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who runs more than we do?", answer: "Chi corre più di noi?", explanation: "\"Più di noi\" = more than we do." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who believes in it more than we do? Nobody.", answer: "Chi ci crede più di noi? Nessuno.", explanation: "\"Crederci\" = to believe in it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And the price? The price is not a problem!", answer: "E il prezzo? Il prezzo non è un problema!", altAnswers: ["E il prezzo? Il prezzo non è un problema."], explanation: "Question asked and answered: \"l'ipofora\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (litotes).", source: "It's not a small achievement.", answer: "Non è un risultato da poco.", altAnswers: ["Non è un piccolo risultato.", "Non è un traguardo da poco."], explanation: "\"Da poco\" = minor." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You leave] as teenagers.", sentence: "___ ragazzi.", answer: "Ve ne andate", explanation: "\"Andarsene\": \"ve ne andate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You won't find them [anywhere].", sentence: "Non le trova ___.", answer: "da nessuna parte", altAnswers: ["in nessun posto"], explanation: "Double negative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who [believes in it] more than we do?", sentence: "Chi ___ più di noi?", answer: "ci crede", explanation: "\"Ci\" replaces \"in questo\"." },
      { type: "word-order", prompt: "Put the words in order to say: Signora, look here!", words: ["Signora,", "guardi", "qua!"], translation: "Signora, look here!", explanation: "\"Lei\" imperative \"guardi\"." },
      { type: "multiple-choice", question: "\"E il prezzo? Il prezzo non è un problema!\" The trader ...", options: ["asks a question and answers it himself", "asks the customer to name a price", "refuses to say the price", "complains about prices"], correctIndex: 0, explanation: "A question answered by the speaker." },
      { type: "dictation", audio: "Non siamo i più forti. Non siamo i più ricchi.", explanation: "Anaphora." },
      { type: "speak", text: "Non siamo i più forti. Non siamo i più ricchi. Ma chi corre più di noi? Nessuno.", prompt: "Give the team talk: We're not the strongest. We're not the richest. But who runs more than we do? Nobody.", tip: "Build volume; drop it on \"Nessuno\".", explanation: "Anaphora + rhetorical question." },
    ],
  },
  {
    slug: "c1-rhetoric-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Persuasive Texts",
    summary: "Work through a letter to the editor and a fundraising appeal: thesis, connectors, objection, subjunctive and call to action.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A letter and an appeal",
        body: [
          "A letter to a local paper: \"Gentile direttore, ritengo che la chiusura della piscina comunale sia un errore. Innanzitutto, è l'unico impianto della zona accessibile ai disabili. Inoltre, ogni estate ospita centinaia di bambini. Si dirà che i costi di gestione sono troppo alti. Ammesso che sia così, perché non cercare un partner privato prima di chiudere?\"",
          "A fundraising appeal from an invented charity: \"Con dieci euro compri un libro. Con cinquanta, un corso di lettura. Con cento, cambi l'estate di un bambino. Per quanto piccolo ti sembri il tuo contributo, per qualcuno è tutto. Dona ora.\" A climax of amounts, \"per quanto\" + subjunctive, and a final imperative.",
        ],
        examples: [
          { es: "Ritengo che la chiusura della piscina sia un errore.", en: "I believe closing the swimming pool is a mistake." },
          { es: "Inoltre, ogni estate ospita centinaia di bambini.", en: "Moreover, every summer it hosts hundreds of children." },
          { es: "Si dirà che i costi di gestione sono troppo alti.", en: "It will be said that running costs are too high." },
          { es: "Ammesso che sia così, perché non cercare un partner privato?", en: "Even granting that, why not look for a private partner?" },
          { es: "Con cento euro cambi l'estate di un bambino.", en: "With a hundred euros you change a child's summer." },
          { es: "Per quanto piccolo ti sembri il tuo contributo, per qualcuno è tutto.", en: "However small your contribution may seem, for someone it's everything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believe closing the swimming pool is a mistake.", answer: "Ritengo che la chiusura della piscina sia un errore.", altAnswers: ["Ritengo che chiudere la piscina sia un errore.", "Credo che la chiusura della piscina sia un errore."], explanation: "\"Ritenere che\" + subjunctive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Even granting that], why not look for a partner?", sentence: "___, perché non cercare un partner?", answer: "Ammesso che sia così", altAnswers: ["Anche ammesso che sia così"], explanation: "\"Ammesso che\" + subjunctive." },
          { type: "listen-choose", audio: "Per quanto piccolo ti sembri il tuo contributo, per qualcuno è tutto.", question: "What is the appeal's message?", options: ["Even a small donation matters a lot.", "Only large donations help.", "The charity doesn't need money.", "Donations are tax-free."], correctIndex: 0, explanation: "\"Per quanto\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, it's the only facility in the area accessible to disabled people.", answer: "Innanzitutto, è l'unico impianto della zona accessibile ai disabili.", altAnswers: ["Innanzitutto è l'unico impianto della zona accessibile ai disabili.", "Innanzitutto, è l'unico impianto della zona accessibile alle persone con disabilità."], explanation: "\"Impianto\" = (sports) facility." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Moreover, every summer it hosts hundreds of children.", answer: "Inoltre, ogni estate ospita centinaia di bambini.", altAnswers: ["Inoltre ogni estate ospita centinaia di bambini.", "Per di più, ogni estate ospita centinaia di bambini."], explanation: "\"Centinaia di\" = hundreds of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It will be said that running costs are too high.", answer: "Si dirà che i costi di gestione sono troppo alti.", altAnswers: ["Si dirà che i costi di gestione siano troppo alti.", "Qualcuno dirà che i costi di gestione sono troppo alti."], explanation: "Impersonal future to introduce an objection." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why not look for a private partner before closing?", answer: "Perché non cercare un partner privato prima di chiudere?", altAnswers: ["Perché non cercare un socio privato prima di chiudere?"], explanation: "\"Perché non\" + infinitive = why not." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With ten euros you buy a book.", answer: "Con dieci euro compri un libro.", altAnswers: ["Con 10 euro compri un libro.", "Con dieci euro si compra un libro."], explanation: "\"Tu\" in appeals." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With a hundred euros you change a child's summer.", answer: "Con cento euro cambi l'estate di un bambino.", altAnswers: ["Con 100 euro cambi l'estate di un bambino."], explanation: "The top of the climax." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Donate now.", answer: "Dona ora.", altAnswers: ["Dona adesso.", "Dona subito."], explanation: "\"Tu\" imperative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal letter opening).", source: "Dear Editor,", answer: "Gentile direttore,", altAnswers: ["Egregio direttore,", "Caro direttore,", "Gentile Direttore,"], explanation: "Letters to Italian papers address \"il direttore\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[However small] your contribution may seem, for someone it's everything.", sentence: "___ ti sembri il tuo contributo, per qualcuno è tutto.", answer: "Per quanto piccolo", explanation: "\"Per quanto\" + adjective + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I believe closing the pool [is] a mistake.", sentence: "Ritengo che la chiusura della piscina ___ un errore.", answer: "sia", explanation: "Subjunctive after \"ritenere che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "With fifty euros, [a reading course].", sentence: "Con cinquanta, ___.", answer: "un corso di lettura", explanation: "Ellipsis of the verb." },
      { type: "word-order", prompt: "Put the words in order to say: Every summer it hosts hundreds of children.", words: ["Ogni", "estate", "ospita", "centinaia", "di", "bambini."], translation: "Every summer it hosts hundreds of children.", explanation: "\"Ospitare\" = to host." },
      { type: "multiple-choice", question: "\"Ammesso che sia così\" introduces ...", options: ["a concession before a counter-argument", "a conclusion", "a new example", "a request for money"], correctIndex: 0, explanation: "\"Ammesso che\" = granted that." },
      { type: "dictation", audio: "Ritengo che la chiusura della piscina sia un errore.", explanation: "Subjunctive after \"ritengo che\"." },
      { type: "speak", text: "Con dieci euro compri un libro. Con cinquanta, un corso di lettura. Con cento, cambi l'estate di un bambino.", prompt: "Read the appeal: With ten euros you buy a book. With fifty, a reading course. With a hundred, you change a child's summer.", tip: "Slow down on the last sentence.", explanation: "Climax of amounts." },
    ],
  },
];
