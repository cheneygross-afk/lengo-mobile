// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u03-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 3 Extra Practice: Essere or Avere? Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U03_EXTRA: Lesson[] = [
  {
    slug: "a2-auxiliary-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Essere or Avere?",
    summary: "Forty mixed verbs in context: choose the auxiliary and agree.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Mixed verbs",
        body: [
          "Avere with an object or an activity; essere for movement, change, staying, reflexives and piacere. Agree only with essere.",
        ],
        examples: [
          { es: "Ho lavato i piatti e sono andata a letto.", en: "I washed the dishes and went to bed." },
          { es: "Il bambino è cresciuto e ha cominciato la scuola.", en: "The little boy has grown and started school." },
          { es: "Abbiamo litigato e poi abbiamo fatto pace.", en: "We argued and then made up." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I washed the dishes and went to bed. (a woman speaking)", answer: "Ho lavato i piatti e sono andata a letto.", explanation: "Avere, then essere + \"-a\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We argued and then made up.", answer: "Abbiamo litigato e poi abbiamo fatto pace.", altAnswers: ["Noi abbiamo litigato e poi abbiamo fatto pace."], explanation: "\"Litigare\": \"avere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The little boy has grown and started school.", answer: "Il bambino è cresciuto e ha cominciato la scuola.", altAnswers: ["Il bambino è cresciuto e ha iniziato la scuola."], explanation: "\"Crescere\": essere; \"cominciare la scuola\": avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sofia moved house and found a job.", answer: "Sofia ha cambiato casa e ha trovato un lavoro.", explanation: "Two objects: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bus arrived late.", answer: "L'autobus è arrivato in ritardo.", altAnswers: ["L'autobus è arrivato tardi."], explanation: "\"Arrivare\": essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I waited twenty minutes.", answer: "Ho aspettato venti minuti.", altAnswers: ["Io ho aspettato venti minuti."], explanation: "\"Aspettare\": avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother died last year.", answer: "Mia nonna è morta l'anno scorso.", altAnswers: ["L'anno scorso è morta mia nonna."], explanation: "\"Morire\" → \"morta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We stopped at a petrol station.", answer: "Ci siamo fermati a un distributore.", altAnswers: ["Ci siamo fermate a un distributore.", "Ci siamo fermati a una stazione di servizio.", "Ci siamo fermati a un benzinaio."], explanation: "Reflexive: essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chiara has visited Sicily twice.", answer: "Chiara ha visitato la Sicilia due volte.", altAnswers: ["Chiara è stata in Sicilia due volte."], explanation: "\"Visitare\" + object: avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dinner cost eighty euros.", answer: "La cena è costata ottanta euro.", altAnswers: ["La cena è costata 80 euro."], explanation: "\"Costare\": essere, agreeing with \"cena\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [played] and then [fell asleep].", sentence: "I bambini hanno giocato e poi ___.", answer: "si sono addormentati", explanation: "Reflexive: essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco [came back] and [cooked].", sentence: "Marco ___ e ha cucinato.", answer: "è tornato", explanation: "\"Tornare\": essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Grandad [became] a grandfather again.", sentence: "Il nonno ___ di nuovo nonno.", answer: "è diventato", altAnswers: ["è ridiventato"], explanation: "\"Diventare\": essere." },
      { type: "multiple-choice", question: "Sara cried. Which is right?", options: ["Sara ha pianto.", "Sara è pianta.", "Sara è piangiuta.", "Sara ha piangiuto."], correctIndex: 0, explanation: "\"Piangere\" → \"pianto\", with avere." },
      { type: "listen-choose", audio: "Siamo usciti e abbiamo preso un gelato.", question: "What did they do?", options: ["went out and had an ice cream", "stayed in and had an ice cream", "went out and bought a cake", "came home and had dinner"], correctIndex: 0, explanation: "\"Usciti\", \"preso un gelato\"." },
      { type: "dictation", audio: "Sono caduto e mi sono fatto male.", explanation: "\"Farsi male\" = to hurt oneself." },
      { type: "speak", text: "Sono tornata a casa, ho fatto la doccia e mi sono riposata.", prompt: "Say it as a woman: I came home, had a shower and rested.", tip: "Essere, avere, essere.", explanation: "Mixed auxiliaries." },
    ],
  },
  {
    slug: "a2-auxiliary-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Verbs with Both",
    summary: "More pairs in context: finire, cominciare, cambiare, passare, salire, scendere, correre, aumentare.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Object or no object",
        body: [
          "With an object: \"avere\". Without one, when the thing changes, starts or ends by itself, or when you move somewhere: \"essere\".",
        ],
        examples: [
          { es: "Hanno aumentato l'affitto.", en: "They've put up the rent." },
          { es: "L'affitto è aumentato.", en: "The rent has gone up." },
          { es: "Ho sceso le scale di corsa.", en: "I ran down the stairs." },
          { es: "Sono scesa in cantina.", en: "I went down to the cellar." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They've put up the rent.", answer: "Hanno aumentato l'affitto.", altAnswers: ["Loro hanno aumentato l'affitto."], explanation: "Object: avere." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rent has gone up.", answer: "L'affitto è aumentato.", altAnswers: ["L'affitto è salito."], explanation: "No object: essere." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I went down to the cellar. (a woman speaking)", answer: "Sono scesa in cantina.", altAnswers: ["Io sono scesa in cantina."], explanation: "Moving somewhere: essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Summer has ended.", answer: "L'estate è finita.", explanation: "\"Estate\" is feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've finished my coffee.", answer: "Ho finito il caffè.", altAnswers: ["Ho finito il mio caffè."], explanation: "Object: avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The show started late.", answer: "Lo spettacolo è cominciato tardi.", altAnswers: ["Lo spettacolo è iniziato tardi.", "Lo spettacolo è cominciato in ritardo."], explanation: "No object: essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We spent the summer in Liguria.", answer: "Abbiamo passato l'estate in Liguria.", altAnswers: ["Abbiamo trascorso l'estate in Liguria."], explanation: "Time as object: avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca dropped by my place.", answer: "Luca è passato da me.", altAnswers: ["Luca è passato a casa mia."], explanation: "\"Passare da\" + person: essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia has changed her hairstyle.", answer: "Giulia ha cambiato pettinatura.", altAnswers: ["Giulia ha cambiato taglio di capelli."], explanation: "Object: avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia has changed.", answer: "Giulia è cambiata.", explanation: "No object: essere + \"-a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The boys [ran] to the beach.", sentence: "I ragazzi ___ in spiaggia.", answer: "sono corsi", explanation: "Running to a place: essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I ran] ten kilometres.", sentence: "___ dieci chilometri.", answer: "Ho corso", altAnswers: ["Io ho corso"], explanation: "Distance as object: avere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [got off] at the last stop.", sentence: "___ all'ultima fermata.", answer: "Siamo scesi", altAnswers: ["Siamo scese"], explanation: "Essere + \"-i\"." },
      { type: "multiple-choice", question: "The temperature went down. Which is right?", options: ["La temperatura è scesa.", "La temperatura ha sceso.", "La temperatura è sceso.", "La temperatura ha scesa."], correctIndex: 0, explanation: "No object: essere + \"-a\"." },
      { type: "listen-choose", audio: "La lezione è finita presto.", question: "What does it mean?", options: ["The lesson ended early.", "I finished the lesson early.", "The lesson started early.", "The lesson hasn't ended yet."], correctIndex: 0, explanation: "\"È finita\": the lesson ended by itself." },
      { type: "dictation", audio: "Sono passato in farmacia e ho passato un'ora in coda.", explanation: "\"Passare\" both ways." },
      { type: "speak", text: "L'affitto è aumentato, così abbiamo cambiato casa.", prompt: "Say it in Italian: The rent went up, so we moved house.", tip: "\"Così\" = so.", explanation: "Essere without object, avere with one." },
    ],
  },
  {
    slug: "a2-auxiliary-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Già and Ancora",
    summary: "Fresh questions and answers with già, non ... ancora, appena and mai.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Questions and short answers",
        body: [
          "\"Hai già ...?\" → \"Sì, già fatto\" / \"Non ancora\". \"Sei mai stato ...?\" → \"Sì, una volta\" / \"No, mai\". The adverb sits after the auxiliary.",
        ],
        examples: [
          { es: "Hai già fatto il check-in? Sì, già fatto.", en: "Have you checked in yet? Yes, done." },
          { es: "Sei mai stata a Matera? Sì, una volta.", en: "Have you ever been to Matera? Yes, once." },
          { es: "Sono già arrivati gli ospiti? Non ancora.", en: "Have the guests arrived yet? Not yet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you checked in yet? (to a friend)", answer: "Hai già fatto il check-in?", altAnswers: ["Hai fatto il check-in?"], explanation: "\"Già\" = yet in questions." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have the guests arrived yet?", answer: "Sono già arrivati gli ospiti?", altAnswers: ["Gli ospiti sono già arrivati?"], explanation: "\"Già\" after \"sono\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever been to Matera? (to a woman you call tu)", answer: "Sei mai stata a Matera?", altAnswers: ["Tu sei mai stata a Matera?"], explanation: "\"Mai\" after \"sei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, once.", answer: "Sì, una volta.", explanation: "\"Una volta\" = once." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, never.", answer: "No, mai.", explanation: "Short answer: \"mai\" alone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've just bought the tickets.", answer: "Ho appena comprato i biglietti.", altAnswers: ["Io ho appena comprato i biglietti.", "Ho appena preso i biglietti."], explanation: "\"Appena\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Has the plane already landed?", answer: "L'aereo è già atterrato?", altAnswers: ["È già atterrato l'aereo?", "L'aereo ha già atterrato?"], explanation: "\"Atterrare\" (to land) usually takes essere; avere is also heard." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We haven't decided yet.", answer: "Non abbiamo ancora deciso.", altAnswers: ["Noi non abbiamo ancora deciso."], explanation: "\"Deciso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever tried pistachio ice cream? (plural)", answer: "Avete mai provato il gelato al pistacchio?", altAnswers: ["Avete mai assaggiato il gelato al pistacchio?"], explanation: "\"Provare\" = to try." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents have always lived in Bari.", answer: "I miei genitori hanno sempre vissuto a Bari.", altAnswers: ["I miei genitori hanno sempre abitato a Bari."], explanation: "\"Sempre\" after \"hanno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shops [haven't opened yet].", sentence: "I negozi ___.", answer: "non hanno ancora aperto", explanation: "\"Aprire\" (a shop opening): avere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Matteo [has just got up].", sentence: "Matteo ___.", answer: "si è appena alzato", explanation: "\"Si è appena alzato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [have never driven] in Rome.", sentence: "___ a Roma.", answer: "Non ho mai guidato", explanation: "\"Non ho mai\"." },
      { type: "word-order", prompt: "Put the words in order to say: Have you already eaten? (plural)", words: ["Avete", "già", "mangiato?"], translation: "Have you already eaten?", explanation: "\"Già\" in the middle." },
      { type: "listen-choose", audio: "Non sono mai stato a Matera.", question: "What does the speaker say?", options: ["He's never been to Matera.", "He's just been to Matera.", "He's already been to Matera.", "He hasn't been to Matera yet."], correctIndex: 0, explanation: "\"Non ... mai\" = never." },
      { type: "dictation", audio: "Sei già stato a Matera? Non ancora.", explanation: "\"Già\", \"non ancora\"." },
      { type: "speak", text: "Ho già fatto il check-in, ma non ho ancora preparato la valigia.", prompt: "Say it in Italian: I've already checked in, but I haven't packed my suitcase yet.", tip: "\"Preparare la valigia\" = to pack.", explanation: "\"Già\" and \"non ... ancora\"." },
    ],
  },
];
