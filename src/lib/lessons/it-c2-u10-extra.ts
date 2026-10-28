// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u10-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 10 Extra Practice: Legal and Administrative Italian.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
// All contracts and rulings are invented for the course.
export const IT_C2_U10_EXTRA: Lesson[] = [
  {
    slug: "c2-legal-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Contracts",
    summary: "Read fresh clauses from a service contract and a sale, and render them in Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A service contract",
        body: [
          "Invented clauses from a web design contract. \"Art. 1. Il prestatore si impegna a realizzare il sito internet del committente entro novanta giorni dalla sottoscrizione. Art. 2. Il corrispettivo è fissato in euro 3.000, oltre IVA, da versarsi per il 50% alla firma e per il restante 50% alla consegna. Art. 4. In caso di ritardo imputabile al prestatore, si applica una penale pari all'1% del corrispettivo per ogni settimana di ritardo.\"",
        ],
        examples: [
          { es: "Il prestatore si impegna a realizzare il sito.", en: "The provider undertakes to build the website." },
          { es: "Entro novanta giorni dalla sottoscrizione.", en: "Within ninety days of signing." },
          { es: "Il corrispettivo è fissato in 3.000 euro, oltre IVA.", en: "The fee is set at 3,000 euros plus VAT." },
          { es: "In caso di ritardo imputabile al prestatore.", en: "In the event of delay attributable to the provider." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The fee is set at 3,000 euros plus VAT.", answer: "Il corrispettivo è fissato in 3.000 euro, oltre IVA.", altAnswers: ["Il corrispettivo è fissato in 3.000 euro più IVA.", "Il compenso è fissato in 3.000 euro, oltre IVA."], explanation: "\"Oltre IVA\" = plus VAT." },
          { type: "listen-choose", audio: "Il corrispettivo va versato per il cinquanta percento alla firma e per il restante cinquanta percento alla consegna.", question: "How is the fee paid?", options: ["half on signing, half on delivery", "all on signing", "all on delivery", "in monthly installments"], correctIndex: 0, explanation: "Split payment." },
        ],
      },
      {
        heading: "A sale",
        body: [
          "Invented clauses from the sale of a used car between private individuals. \"Il venditore dichiara che il veicolo è di sua esclusiva proprietà e libero da vincoli. L'acquirente dichiara di aver visionato il veicolo e di accettarlo nello stato di fatto in cui si trova. Il prezzo, pari a euro 6.500, viene corrisposto contestualmente alla firma del presente atto.\"",
        ],
        examples: [
          { es: "Il veicolo è libero da vincoli.", en: "The vehicle is free of encumbrances." },
          { es: "L'acquirente dichiara di aver visionato il veicolo.", en: "The buyer declares that he has inspected the vehicle." },
          { es: "Nello stato di fatto in cui si trova.", en: "As it stands, in its current condition." },
          { es: "Il prezzo viene corrisposto contestualmente alla firma.", en: "The price is paid upon signing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The buyer declares that he has inspected the vehicle.", answer: "L'acquirente dichiara di aver visionato il veicolo.", altAnswers: ["L'acquirente dichiara di avere visionato il veicolo.", "Il compratore dichiara di aver visionato il veicolo."], explanation: "\"Visionare\" = to inspect (formal)." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The price is paid [upon signing].", sentence: "Il prezzo viene corrisposto ___.", answer: "contestualmente alla firma", altAnswers: ["al momento della firma"], explanation: "\"Contestualmente\" = at the same time." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The provider undertakes to build the website.", answer: "Il prestatore si impegna a realizzare il sito.", altAnswers: ["Il prestatore si impegna a realizzare il sito internet.", "Il prestatore si obbliga a realizzare il sito."], explanation: "\"Impegnarsi a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Within ninety days of signing.", answer: "Entro novanta giorni dalla sottoscrizione.", altAnswers: ["Entro novanta giorni dalla firma."], explanation: "\"Sottoscrizione\" = signing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The vehicle is free of encumbrances.", answer: "Il veicolo è libero da vincoli.", altAnswers: ["Il veicolo è libero da pesi e vincoli."], explanation: "\"Vincoli\" = legal restrictions, liens." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The buyer accepts the car in its current condition.", answer: "L'acquirente accetta l'auto nello stato di fatto in cui si trova.", altAnswers: ["L'acquirente accetta il veicolo nello stato di fatto in cui si trova.", "Il compratore accetta l'auto nello stato in cui si trova."], explanation: "\"Visto e piaciuto\" is the colloquial version." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A penalty of 1% applies for each week of delay.", answer: "Si applica una penale dell'1% per ogni settimana di ritardo.", altAnswers: ["Si applica una penale pari all'1% per ogni settimana di ritardo."], explanation: "\"Dell'1%\": read \"dell'uno percento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The vehicle is his exclusive property.", answer: "Il veicolo è di sua esclusiva proprietà.", altAnswers: ["Il veicolo è di sua proprietà esclusiva."], explanation: "\"Di proprietà di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the event of delay [attributable to] the provider.", sentence: "In caso di ritardo ___ prestatore.", answer: "imputabile al", explanation: "\"Imputabile a\" = attributable to." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The remaining 50%] on delivery.", sentence: "___ alla consegna.", answer: "Il restante 50%", altAnswers: ["Il rimanente 50%"], explanation: "\"Restante\" = remaining." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The client] approves the design.", sentence: "___ approva il progetto grafico.", answer: "Il committente", altAnswers: ["La committente"], explanation: "\"Committente\" = client." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The price [is equal to] 6,500 euros.", sentence: "Il prezzo ___ euro 6.500.", answer: "è pari a", explanation: "\"Pari a\" = equal to." },
      { type: "word-order", prompt: "Put the words in order to say: The seller declares that the car is his.", words: ["Il", "venditore", "dichiara", "che", "l'auto", "è", "sua."], translation: "The seller declares that the car is his.", explanation: "\"Dichiarare che\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il prestatore", right: "service provider" }, { left: "il corrispettivo", right: "fee, consideration" }, { left: "oltre IVA", right: "plus VAT" }, { left: "contestualmente", right: "at the same time" }], explanation: "Contract vocabulary." },
      { type: "multiple-choice", question: "What does \"nello stato di fatto in cui si trova\" protect the seller from?", options: ["later complaints about the car's visible condition", "paying tax", "registration costs", "theft"], correctIndex: 0, explanation: "The buyer accepts it as it is." },
      { type: "dictation", audio: "Il corrispettivo è fissato in tremila euro, oltre IVA.", explanation: "\"Oltre IVA\"." },
      { type: "speak", text: "L'acquirente dichiara di aver visionato il veicolo e di accettarlo nello stato in cui si trova.", prompt: "Read the clause aloud.", tip: "Formal, even pace.", explanation: "Standard sale clause." },
    ],
  },
  {
    slug: "c2-legal-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Court Language",
    summary: "Read fresh extracts from an invented criminal judgment and an administrative ruling.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A criminal case",
        body: [
          "An invented case. \"L'imputato era chiamato a rispondere del reato di furto aggravato. All'esito dell'istruttoria dibattimentale, non è emersa la prova che fosse presente sul luogo del fatto. P.Q.M. il Tribunale assolve l'imputato per non aver commesso il fatto.\" Note \"per non aver commesso il fatto\" (because he did not commit the act), a different formula from \"perché il fatto non sussiste\".",
        ],
        examples: [
          { es: "L'imputato era accusato di furto aggravato.", en: "The defendant was charged with aggravated theft." },
          { es: "Non è emersa la prova della sua presenza.", en: "No evidence of his presence emerged." },
          { es: "Il Tribunale assolve l'imputato per non aver commesso il fatto.", en: "The Court acquits the defendant because he did not commit the act." },
          { es: "La difesa ha chiesto l'assoluzione.", en: "The defense asked for an acquittal." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The defendant was charged with aggravated theft.", answer: "L'imputato era accusato di furto aggravato.", altAnswers: ["L'imputato era chiamato a rispondere di furto aggravato.", "L'imputato è stato accusato di furto aggravato."], explanation: "\"Furto aggravato\"." },
          { type: "listen-choose", audio: "Il Tribunale assolve l'imputato per non aver commesso il fatto.", question: "Why was he acquitted?", options: ["He did not commit the act.", "The act did not occur.", "The case was time-barred.", "He confessed."], correctIndex: 0, explanation: "Two different acquittal formulas." },
        ],
      },
      {
        heading: "An administrative ruling",
        body: [
          "An invented TAR ruling. \"Il ricorrente impugna il provvedimento con cui il Comune ha negato il permesso di costruire. Il ricorso è fondato. L'amministrazione non ha motivato il diniego, in violazione dell'art. 3 della legge n. 241 del 1990. Il TAR accoglie il ricorso e, per l'effetto, annulla il provvedimento impugnato.\" Law 241/1990 does require public authorities to give reasons for their decisions.",
        ],
        examples: [
          { es: "Il ricorrente impugna il provvedimento del Comune.", en: "The applicant challenges the council's decision." },
          { es: "L'amministrazione non ha motivato il diniego.", en: "The authority gave no reasons for the refusal." },
          { es: "Il TAR accoglie il ricorso.", en: "The regional administrative court upholds the appeal." },
          { es: "Annulla il provvedimento impugnato.", en: "It annuls the contested decision." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The authority gave no reasons for the refusal.", answer: "L'amministrazione non ha motivato il diniego.", altAnswers: ["L'amministrazione non ha motivato il rifiuto."], explanation: "\"Motivare\" = to give reasons; \"diniego\" = refusal." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The court [upholds the appeal].", sentence: "Il TAR ___.", answer: "accoglie il ricorso", explanation: "Opposite: \"respinge il ricorso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No evidence of his presence emerged.", answer: "Non è emersa la prova della sua presenza.", altAnswers: ["Non è emersa alcuna prova della sua presenza."], explanation: "\"Emergere\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The defense asked for an acquittal.", answer: "La difesa ha chiesto l'assoluzione.", altAnswers: ["La difesa chiese l'assoluzione."], explanation: "\"Assoluzione\" = acquittal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The applicant challenges the council's decision.", answer: "Il ricorrente impugna il provvedimento del Comune.", altAnswers: ["La ricorrente impugna il provvedimento del Comune.", "Il ricorrente impugna la decisione del Comune."], explanation: "\"Provvedimento\" = administrative act." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It annuls the contested decision.", answer: "Annulla il provvedimento impugnato.", altAnswers: ["Annulla la decisione impugnata."], explanation: "\"Impugnato\" = contested." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The council refused the building permit.", answer: "Il Comune ha negato il permesso di costruire.", altAnswers: ["Il comune ha negato il permesso di costruire.", "Il Comune ha rifiutato il permesso di costruire."], explanation: "\"Permesso di costruire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The appeal is well founded.", answer: "Il ricorso è fondato.", explanation: "\"Fondato\" vs \"infondato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[At the end of] the trial, no evidence emerged.", sentence: "___ dibattimento, non è emersa alcuna prova.", answer: "All'esito del", altAnswers: ["Al termine del", "Alla fine del"], explanation: "\"All'esito di\" = at the end of." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In breach of] Article 3.", sentence: "___ dell'art. 3.", answer: "In violazione", explanation: "\"In violazione di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The court [rejects] the appeal.", sentence: "Il TAR ___ il ricorso.", answer: "respinge", altAnswers: ["rigetta"], explanation: "\"Respingere\" / \"rigettare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He was acquitted [because the act did not occur].", sentence: "È stato assolto ___.", answer: "perché il fatto non sussiste", explanation: "Acquittal formula." },
      { type: "word-order", prompt: "Put the words in order to say: The appeal is upheld.", words: ["Il", "ricorso", "è", "accolto."], translation: "The appeal is upheld.", explanation: "\"Accogliere\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il ricorrente", right: "applicant" }, { left: "il diniego", right: "refusal" }, { left: "il provvedimento", right: "administrative decision" }, { left: "l'istruttoria", right: "evidence-taking phase" }], explanation: "Court vocabulary." },
      { type: "multiple-choice", question: "\"Per non aver commesso il fatto\" means the act:", options: ["happened, but the defendant didn't do it", "never happened", "was legal", "was time-barred"], correctIndex: 0, explanation: "Different from \"il fatto non sussiste\"." },
      { type: "dictation", audio: "Il TAR accoglie il ricorso e annulla il provvedimento impugnato.", explanation: "Operative part." },
      { type: "speak", text: "L'amministrazione non ha motivato il diniego.", prompt: "State the ground of appeal aloud.", tip: "\"Diniego\": di-NIE-go.", explanation: "Duty to give reasons." },
    ],
  },
];
