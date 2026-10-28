// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u14-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 14 Extra Practice: Italian History through Texts. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U14_EXTRA: Lesson[] = [
  {
    slug: "c1-history-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Events",
    summary: "Fresh short texts on four events of the Republic: the Treaties of Rome, the Florence flood, the divorce referendum and the Irpinia earthquake.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Four dates of the Republic",
        body: [
          "On March 25, 1957 Italy signed the Treaties of Rome with five other countries, founding the European Economic Community. On November 4, 1966 the Arno flooded Florence; thousands of young volunteers from Italy and abroad, \"gli angeli del fango\" (the mud angels), rescued books and paintings.",
          "In May 1974 Italians voted in a referendum on whether to abolish the new divorce law: almost 60 per cent voted to keep it. On November 23, 1980 an earthquake struck Irpinia and Basilicata, killing nearly three thousand people; the slow rescue caused national outrage.",
        ],
        examples: [
          { es: "Il 25 marzo 1957 l'Italia firmò i Trattati di Roma.", en: "On March 25, 1957 Italy signed the Treaties of Rome." },
          { es: "Il 4 novembre 1966 l'Arno allagò Firenze.", en: "On November 4, 1966 the Arno flooded Florence." },
          { es: "Migliaia di volontari salvarono libri e quadri dal fango.", en: "Thousands of volunteers saved books and paintings from the mud." },
          { es: "Nel 1974 quasi il 60 per cento votò per mantenere il divorzio.", en: "In 1974 almost 60 per cent voted to keep divorce." },
          { es: "Il terremoto dell'Irpinia causò quasi tremila vittime.", en: "The Irpinia earthquake caused nearly three thousand deaths." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (history book style).", source: "On November 4, 1966 the Arno flooded Florence.", answer: "Il 4 novembre 1966 l'Arno allagò Firenze.", altAnswers: ["Il 4 novembre 1966 l'Arno inondò Firenze.", "Il 4 novembre 1966 l'Arno ha allagato Firenze."], explanation: "\"Allagare\" or \"inondare\" = to flood." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (history book style).", source: "Italy signed the Treaties of Rome in 1957.", answer: "L'Italia firmò i Trattati di Roma nel 1957.", altAnswers: ["Nel 1957 l'Italia firmò i Trattati di Roma.", "L'Italia ha firmato i Trattati di Roma nel 1957."], explanation: "\"Nel\" + year." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (history book style).", source: "Thousands of volunteers saved books from the mud.", answer: "Migliaia di volontari salvarono libri dal fango.", altAnswers: ["Migliaia di volontari salvarono i libri dal fango.", "Migliaia di volontari hanno salvato libri dal fango."], explanation: "\"Migliaia di\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were called the mud angels.", answer: "Furono chiamati gli angeli del fango.", altAnswers: ["Vennero chiamati gli angeli del fango.", "Li chiamarono gli angeli del fango.", "Sono stati chiamati gli angeli del fango."], explanation: "Passive passato remoto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Almost 60 per cent voted to keep divorce.", answer: "Quasi il 60 per cento votò per mantenere il divorzio.", altAnswers: ["Quasi il 60% votò per mantenere il divorzio.", "Quasi il 60 per cento ha votato per mantenere il divorzio."], explanation: "Article before the percentage; singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The earthquake caused nearly three thousand deaths.", answer: "Il terremoto causò quasi tremila vittime.", altAnswers: ["Il terremoto provocò quasi tremila vittime.", "Il terremoto ha causato quasi tremila vittime.", "Il terremoto causò quasi tremila morti."], explanation: "\"Le vittime\" = the dead, victims." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The slow rescue caused national outrage.", answer: "La lentezza dei soccorsi suscitò l'indignazione nazionale.", altAnswers: ["I soccorsi lenti suscitarono l'indignazione nazionale.", "La lentezza dei soccorsi provocò l'indignazione di tutto il paese.", "La lentezza dei soccorsi suscitò un'indignazione nazionale."], explanation: "\"Suscitare\" = to arouse; Italian prefers the noun \"la lentezza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Six countries founded the European Economic Community.", answer: "Sei paesi fondarono la Comunità economica europea.", altAnswers: ["Sei Paesi fondarono la Comunità economica europea.", "Sei paesi hanno fondato la Comunità economica europea.", "Sei Stati fondarono la Comunità economica europea."], explanation: "\"Fondare\" → \"fondarono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The earthquake [struck] Irpinia.", sentence: "Il terremoto ___ l'Irpinia.", answer: "colpì", altAnswers: ["ha colpito"], explanation: "\"Colpire\" → \"colpì\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Italians [voted in a referendum] in 1974.", sentence: "Nel 1974 gli italiani ___.", answer: "votarono in un referendum", altAnswers: ["votarono a un referendum", "hanno votato in un referendum"], explanation: "\"Referendum\" is invariable." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The volunteers came [from Italy and abroad].", sentence: "I volontari arrivarono ___.", answer: "dall'Italia e dall'estero", explanation: "\"L'estero\" = abroad." },
      { type: "word-order", prompt: "Put the words in order to say: The Arno flooded Florence.", words: ["L'Arno", "allagò", "Firenze."], translation: "The Arno flooded Florence.", explanation: "Rivers are masculine: \"l'Arno\"." },
      { type: "multiple-choice", question: "Who were \"gli angeli del fango\"?", options: ["Volunteers who saved Florence's books and art in 1966", "Soldiers in the First World War", "Rescue workers in 1980", "Founders of the EEC"], correctIndex: 0, explanation: "The mud angels of Florence." },
      {
        type: "matching",
        instructions: "Match the date to the event.",
        pairs: [
          { left: "25 marzo 1957", right: "the Treaties of Rome" },
          { left: "4 novembre 1966", right: "the Florence flood" },
          { left: "maggio 1974", right: "the divorce referendum" },
          { left: "23 novembre 1980", right: "the Irpinia earthquake" },
        ],
        explanation: "Four dates of the Republic.",
      },
      { type: "listen-choose", audio: "Nel maggio del 1974 quasi il sessanta per cento votò per mantenere il divorzio.", question: "What was the result of the 1974 referendum?", options: ["Divorce was kept.", "Divorce was abolished.", "The vote was canceled.", "Turnout was 60 per cent."], correctIndex: 0, explanation: "\"Mantenere\" = to keep." },
      { type: "dictation", audio: "Il 4 novembre 1966 l'Arno allagò Firenze.", explanation: "Date, river, passato remoto." },
      { type: "speak", text: "Nel 1966 migliaia di giovani salvarono i libri di Firenze dal fango.", prompt: "Say it in Italian: In 1966 thousands of young people saved Florence's books from the mud.", tip: "Mi-GLIA-ia: the gli is one sound.", explanation: "The mud angels in one sentence." },
    ],
  },
  {
    slug: "c1-history-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: The Constitution",
    summary: "More articles of the Constitution: personal freedom, free speech, health, school, the vote and the republican form.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Six more articles",
        body: [
          "Article 13: \"La libertà personale è inviolabile.\" Article 21: \"Tutti hanno diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione.\" Article 32: the Republic protects health as a fundamental right of the individual and an interest of the community, and guarantees free care to the poor (\"gli indigenti\").",
          "Article 34: \"La scuola è aperta a tutti.\" Article 48: \"Il voto è personale ed eguale, libero e segreto. Il suo esercizio è dovere civico.\" Article 139, the last: \"La forma repubblicana non può essere oggetto di revisione costituzionale\": the Republic itself cannot be changed by constitutional amendment.",
        ],
        examples: [
          { es: "La libertà personale è inviolabile.", en: "Personal freedom is inviolable." },
          { es: "Tutti hanno diritto di manifestare liberamente il proprio pensiero.", en: "Everyone has the right to express their thoughts freely." },
          { es: "La scuola è aperta a tutti.", en: "School is open to all." },
          { es: "Il voto è personale ed eguale, libero e segreto.", en: "The vote is personal and equal, free and secret." },
          { es: "La forma repubblicana non può essere oggetto di revisione costituzionale.", en: "The republican form cannot be the subject of constitutional amendment." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "School is open to all.", answer: "La scuola è aperta a tutti.", explanation: "Article 34." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The vote is free and secret.", answer: "Il voto è libero e segreto.", explanation: "Article 48." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Personal freedom is inviolable.", answer: "La libertà personale è inviolabile.", explanation: "Article 13." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone has the right to express their thoughts freely.", answer: "Tutti hanno diritto di manifestare liberamente il proprio pensiero.", altAnswers: ["Tutti hanno il diritto di esprimere liberamente il proprio pensiero.", "Tutti hanno diritto di esprimere liberamente il proprio pensiero.", "Tutti hanno il diritto di manifestare liberamente il proprio pensiero."], explanation: "\"Il proprio\" = one's own, with an indefinite subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Voting is a civic duty.", answer: "Il voto è un dovere civico.", altAnswers: ["Votare è un dovere civico.", "Il voto è dovere civico."], explanation: "Article 48: \"il suo esercizio è dovere civico\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Republic protects health.", answer: "La Repubblica tutela la salute.", altAnswers: ["La Repubblica protegge la salute."], explanation: "\"Tutelare\": the legal verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Republic guarantees free care to the poor.", answer: "La Repubblica garantisce cure gratuite agli indigenti.", altAnswers: ["La Repubblica garantisce cure gratuite ai poveri."], explanation: "\"Gli indigenti\": the legal word for the poor." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The republican form cannot be changed.", answer: "La forma repubblicana non può essere cambiata.", altAnswers: ["La forma repubblicana non può essere modificata.", "La forma repubblicana non si può cambiare.", "La forma repubblicana non può essere oggetto di revisione costituzionale."], explanation: "Article 139." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everyone has the right to express their thoughts [in speech, in writing] and by any other means.", sentence: "Tutti hanno diritto di manifestare il proprio pensiero ___ e ogni altro mezzo di diffusione.", answer: "con la parola, lo scritto", explanation: "Article 21's three channels." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The vote is personal [and equal].", sentence: "Il voto è personale ___.", answer: "ed eguale", altAnswers: ["ed uguale", "e uguale"], explanation: "\"Ed\" before a vowel, especially e-: \"ed eguale\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Health is [a fundamental right] of the individual.", sentence: "La salute è ___ dell'individuo.", answer: "un fondamentale diritto", altAnswers: ["un diritto fondamentale"], explanation: "The Constitution puts the adjective first: \"fondamentale diritto\"." },
      { type: "word-order", prompt: "Put the words in order to say: School is open to all.", words: ["La", "scuola", "è", "aperta", "a", "tutti."], translation: "School is open to all.", explanation: "Article 34." },
      { type: "multiple-choice", question: "What does Article 139 say?", options: ["The republican form cannot be amended.", "The President is elected for seven years.", "The flag is a tricolour.", "Italy repudiates war."], correctIndex: 0, explanation: "The last article of the Constitution." },
      {
        type: "matching",
        instructions: "Match the article to its subject.",
        pairs: [
          { left: "Articolo 13", right: "personal freedom" },
          { left: "Articolo 21", right: "freedom of expression" },
          { left: "Articolo 32", right: "health" },
          { left: "Articolo 34", right: "school" },
          { left: "Articolo 48", right: "the vote" },
        ],
        explanation: "Five rights and duties.",
      },
      { type: "listen-choose", audio: "Il voto è personale ed eguale, libero e segreto.", question: "Which quality of the vote is NOT mentioned?", options: ["compulsory", "secret", "free", "equal"], correctIndex: 0, explanation: "It's a civic duty, but the article lists personal, equal, free and secret." },
      { type: "dictation", audio: "La libertà personale è inviolabile.", explanation: "Article 13." },
      { type: "speak", text: "Tutti hanno diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione.", prompt: "Read Article 21 aloud.", tip: "Ma-ni-fe-STA-re; dif-fu-SIO-ne.", explanation: "Freedom of expression." },
    ],
  },
];
