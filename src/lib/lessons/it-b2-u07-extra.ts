// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u07-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 7 Extra Practice: Subjunctive in Relative Clauses.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U07_EXTRA: Lesson[] = [
  {
    slug: "b2-relative-subjunctive-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Searching",
    summary: "Fresh sentences about people and things you're looking for, with che + subjunctive.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Wanted: one that ...",
        body: [
          "After \"cerco\", \"vorrei\", \"mi serve\" or \"ho bisogno di\" + an indefinite person or thing, the relative clause takes the subjunctive. Past search → imperfect subjunctive.",
        ],
        examples: [
          { es: "Cerco un parrucchiere che non costi un occhio della testa.", en: "I'm looking for a hairdresser who doesn't cost an arm and a leg." },
          { es: "Ci serve un tavolo che entri in cucina.", en: "We need a table that fits in the kitchen." },
          { es: "Volevo un cane che non perdesse il pelo.", en: "I wanted a dog that didn't shed." },
          { es: "Vorrei un medico che mi ascolti davvero.", en: "I'd like a doctor who really listens to me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We need a table that fits in the kitchen.", answer: "Ci serve un tavolo che entri in cucina.", altAnswers: ["Abbiamo bisogno di un tavolo che entri in cucina.", "Ci serve un tavolo che stia in cucina."], explanation: "\"Entrare\" = to fit → \"entri\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a doctor who really listens to me.", answer: "Vorrei un medico che mi ascolti davvero.", altAnswers: ["Vorrei un dottore che mi ascolti davvero.", "Vorrei un medico che mi ascolti veramente."], explanation: "\"Ascoltare\" → \"ascolti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for a hairdresser who doesn't cost an arm and a leg.", answer: "Cerco un parrucchiere che non costi un occhio della testa.", altAnswers: ["Cerco un parrucchiere che non costi troppo.", "Sto cercando un parrucchiere che non costi un occhio della testa."], explanation: "\"Costare un occhio della testa\" = to cost a fortune." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wanted a dog that didn't shed.", answer: "Volevo un cane che non perdesse il pelo.", explanation: "Past → \"perdesse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're looking for a campsite that's near the sea.", answer: "Cerchiamo un campeggio che sia vicino al mare.", altAnswers: ["Stiamo cercando un campeggio che sia vicino al mare."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She needs a lawyer who knows employment law.", answer: "Ha bisogno di un avvocato che conosca il diritto del lavoro.", altAnswers: ["Le serve un avvocato che conosca il diritto del lavoro.", "Ha bisogno di un'avvocata che conosca il diritto del lavoro."], explanation: "\"Conosca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were looking for a school that taught in English.", answer: "Cercavano una scuola che insegnasse in inglese.", altAnswers: ["Cercavano una scuola in cui si insegnasse in inglese.", "Cercavano una scuola dove si insegnasse in inglese."], explanation: "Past → \"insegnasse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a sofa that turns into a bed.", answer: "Vorrei un divano che diventi un letto.", altAnswers: ["Vorrei un divano che si trasformi in un letto.", "Vorrei un divano letto."], explanation: "\"Diventare\" → \"diventi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you know a mechanic who works on Saturdays? (to a friend)", answer: "Conosci un meccanico che lavori il sabato?", altAnswers: ["Conosci un meccanico che lavora il sabato?", "Conosci un meccanico aperto il sabato?"], explanation: "Hopeful question → \"lavori\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We needed someone who could look after the cat.", answer: "Avevamo bisogno di qualcuno che potesse badare al gatto.", altAnswers: ["Ci serviva qualcuno che potesse badare al gatto.", "Avevamo bisogno di qualcuno che si occupasse del gatto."], explanation: "Past → \"potesse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm looking for a suitcase that [is] light but strong.", sentence: "Cerco una valigia che ___ leggera ma resistente.", answer: "sia", explanation: "Sought → \"sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We wanted a guide who [spoke] Italian slowly.", sentence: "Volevamo una guida che ___ italiano lentamente.", answer: "parlasse", explanation: "Past → \"parlasse\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'm looking for a film that makes me cry.", words: ["Cerco", "un", "film", "che", "mi", "faccia", "piangere."], translation: "I'm looking for a film that makes me cry.", explanation: "\"Fare\" + infinitive → \"mi faccia piangere\"." },
      { type: "multiple-choice", question: "Which completes \"Avevo bisogno di una stanza che ___ tranquilla\"?", options: ["fosse", "sia", "è", "sarebbe"], correctIndex: 0, explanation: "Past → \"fosse\"." },
      { type: "listen-choose", audio: "Cerco un parrucchiere che non costi un occhio della testa.", question: "What matters most to the speaker?", options: ["Price.", "Location.", "Opening hours.", "Experience."], correctIndex: 0, explanation: "\"Un occhio della testa\" = a fortune." },
      { type: "dictation", audio: "Volevamo un albergo che fosse in centro e che avesse il parcheggio.", explanation: "Two imperfect subjunctives." },
      { type: "speak", text: "Ci serve un tavolo che entri in cucina e che non costi troppo.", prompt: "Say it in Italian: We need a table that fits in the kitchen and doesn't cost too much.", tip: "\"Entri\": EN-tri.", explanation: "Two requirements." },
    ],
  },
  {
    slug: "b2-relative-subjunctive-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Nobody Who",
    summary: "Fresh sentences with non c'è nessuno che, niente che, nessun + noun and pochi che.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Denying it exists",
        body: [
          "\"Non c'è nessuno / niente che\", \"non conosco nessuno che\", \"non esiste un ... che\" + subjunctive. Earlier event → past or pluperfect subjunctive.",
        ],
        examples: [
          { es: "Non c'è niente che lo renda felice.", en: "There's nothing that makes him happy." },
          { es: "Non conosco nessuno che abbia letto quel libro.", en: "I don't know anyone who has read that book." },
          { es: "Non c'era un solo posto che fosse libero.", en: "There wasn't a single seat that was free." },
          { es: "Non esiste una soluzione che vada bene a tutti.", en: "There's no solution that suits everyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's nothing that makes him happy.", answer: "Non c'è niente che lo renda felice.", altAnswers: ["Non c'è nulla che lo renda felice.", "Non c'è niente che lo faccia felice."], explanation: "\"Rendere\" → \"renda\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know anyone who has read that book.", answer: "Non conosco nessuno che abbia letto quel libro.", explanation: "Past subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There wasn't a single seat that was free.", answer: "Non c'era un solo posto che fosse libero.", altAnswers: ["Non c'era neanche un posto che fosse libero.", "Non c'era un solo posto libero."], explanation: "Past → \"fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no solution that suits everyone.", answer: "Non esiste una soluzione che vada bene a tutti.", altAnswers: ["Non c'è una soluzione che vada bene a tutti.", "Non esiste nessuna soluzione che vada bene a tutti."], explanation: "\"Andare bene\" → \"vada bene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody in my family knows how to swim.", answer: "Non c'è nessuno nella mia famiglia che sappia nuotare.", altAnswers: ["Nella mia famiglia non c'è nessuno che sappia nuotare.", "Nessuno nella mia famiglia sa nuotare."], explanation: "\"Non c'è nessuno che\" + \"sappia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was nothing on TV that I wanted to watch.", answer: "Non c'era niente in televisione che volessi vedere.", altAnswers: ["Non c'era niente in tv che volessi vedere.", "In televisione non c'era niente che volessi vedere.", "Non c'era niente in televisione che volessi guardare."], explanation: "Past → \"volessi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never met anyone who cooks like my grandmother.", answer: "Non ho mai conosciuto nessuno che cucini come mia nonna.", altAnswers: ["Non ho mai incontrato nessuno che cucini come mia nonna."], explanation: "Denial → \"cucini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's nobody who has understood the instructions.", answer: "Non c'è nessuno che abbia capito le istruzioni.", explanation: "Earlier event → \"abbia capito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Few people know this village.", answer: "Sono poche le persone che conoscano questo paese.", altAnswers: ["Poche persone conoscono questo paese.", "Sono poche le persone che conoscono questo paese.", "Ci sono poche persone che conoscano questo paese."], explanation: "\"Poche ... che\": subjunctive in careful style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was nobody who had seen the accident.", answer: "Non c'era nessuno che avesse visto l'incidente.", explanation: "Past, earlier → pluperfect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's no shop here that [sells] stamps.", sentence: "Qui non c'è un negozio che ___ i francobolli.", answer: "venda", explanation: "\"Venda\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There was nothing that [could] stop her.", sentence: "Non c'era niente che ___ fermarla.", answer: "potesse", explanation: "Past → \"potesse\"." },
      { type: "matching", instructions: "Match each beginning to its ending.", pairs: [{ left: "Non c'è nessuno che", right: "sappia la verità." }, { left: "Non c'era niente che", right: "mi piacesse." }, { left: "Non conosco nessuno che", right: "sia stato in Perù." }, { left: "Non conoscevo nessuno che", right: "fosse stato in Perù." }], explanation: "Present → present / past subjunctive; past → imperfect / pluperfect." },
      { type: "multiple-choice", question: "Which completes \"Non ho trovato nessuno che mi ___ il libro\"?", options: ["prestasse", "presta", "presterebbe", "presti"], correctIndex: 0, explanation: "Past main verb → \"prestasse\"." },
      { type: "listen-choose", audio: "Non c'era un solo posto che fosse libero, così siamo rimasti in piedi.", question: "What happened?", options: ["They stood because there were no free seats.", "They found two seats.", "They left early.", "They booked seats."], correctIndex: 0, explanation: "\"Siamo rimasti in piedi\"." },
      { type: "dictation", audio: "Non esiste una soluzione che vada bene a tutti.", explanation: "\"Vada\"." },
      { type: "speak", text: "Non ho mai conosciuto nessuno che cucini come mia nonna.", prompt: "Say it in Italian: I've never met anyone who cooks like my grandmother.", tip: "\"Cucini\": cu-CI-ni.", explanation: "Denial → subjunctive." },
    ],
  },
  {
    slug: "b2-relative-subjunctive-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Mixed",
    summary: "Real or sought? Indicative or subjunctive, with che, cui and superlatives.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Real or wished for",
        body: [
          "Real and known → indicative (\"ho un vicino che suona il violino\"). Sought, wished for or denied → subjunctive (\"cerco un vicino che non suoni il violino\"). Superlatives and \"l'unico\" → subjunctive in careful style.",
        ],
        examples: [
          { es: "Ho un vicino che suona il violino.", en: "I have a neighbour who plays the violin." },
          { es: "Vorrei un vicino che non suonasse il violino alle sei di mattina.", en: "I'd like a neighbour who didn't play the violin at six in the morning." },
          { es: "È la spiaggia più bella in cui sia mai stata.", en: "It's the most beautiful beach I've ever been to." },
          { es: "Ti presento la collega con cui lavoro.", en: "Let me introduce the colleague I work with." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a neighbour who plays the violin.", answer: "Ho un vicino che suona il violino.", altAnswers: ["Ho una vicina che suona il violino."], explanation: "Real → indicative." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the most beautiful beach I've ever been to. (a woman speaking)", answer: "È la spiaggia più bella in cui sia mai stata.", altAnswers: ["È la spiaggia più bella in cui io sia mai stata.", "È la spiaggia più bella dove sia mai stata.", "È la più bella spiaggia in cui sia mai stata."], explanation: "Superlative + \"in cui\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me introduce the colleague I work with.", answer: "Ti presento la collega con cui lavoro.", altAnswers: ["Ti presento il collega con cui lavoro.", "Le presento la collega con cui lavoro.", "Ti presento la collega con la quale lavoro."], explanation: "Real → \"lavoro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for a colleague I can share an office with.", answer: "Cerco un collega con cui possa dividere l'ufficio.", altAnswers: ["Cerco una collega con cui possa dividere l'ufficio.", "Cerco un collega con cui condividere l'ufficio.", "Cerco un collega con cui possa condividere l'ufficio."], explanation: "Sought → \"possa\", or an infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bus that goes to the station leaves from here.", answer: "L'autobus che va alla stazione parte da qui.", altAnswers: ["Il pullman che va alla stazione parte da qui.", "L'autobus che va in stazione parte da qui."], explanation: "Real → indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there a bus that goes to the station?", answer: "C'è un autobus che vada alla stazione?", altAnswers: ["C'è un autobus che va alla stazione?", "C'è un autobus per la stazione?"], explanation: "Question: both moods are possible." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's the only one who never complains.", answer: "È l'unico che non si lamenti mai.", altAnswers: ["È l'unico che non si lamenta mai.", "È il solo che non si lamenti mai."], explanation: "\"L'unico che\" + subjunctive in careful style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We bought a car that uses very little petrol.", answer: "Abbiamo comprato una macchina che consuma pochissimo.", altAnswers: ["Abbiamo comprato un'auto che consuma pochissimo.", "Abbiamo comprato una macchina che consuma poca benzina."], explanation: "Bought → real → indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's nobody I trust more than you. (to a friend)", answer: "Non c'è nessuno di cui mi fidi più di te.", altAnswers: ["Non c'è nessuno di cui io mi fidi più di te.", "Non c'è nessuno di cui mi fido più di te."], explanation: "\"Fidarsi di\" → \"di cui mi fidi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was the worst hotel we had ever stayed in.", answer: "Era l'albergo peggiore in cui fossimo mai stati.", altAnswers: ["Era il peggior albergo in cui fossimo mai stati.", "È stato l'albergo peggiore in cui fossimo mai stati.", "Era l'albergo peggiore in cui fossimo mai state."], explanation: "Past superlative → pluperfect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My brother has a friend who [repairs] bikes.", sentence: "Mio fratello ha un amico che ___ biciclette.", answer: "ripara", altAnswers: ["aggiusta"], explanation: "Real → indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I need someone who [repairs] bikes.", sentence: "Mi serve qualcuno che ___ biciclette.", answer: "ripari", altAnswers: ["aggiusti"], explanation: "Sought → subjunctive." },
      { type: "multi-select", question: "Which sentences are correct?", options: ["Cerco una borsa che sia impermeabile.", "Ho una borsa che sia impermeabile.", "Non trovo una borsa che sia impermeabile.", "Ho comprato una borsa che è impermeabile."], correctIndexes: [0, 2, 3], explanation: "A bag you own takes the indicative." },
      { type: "multiple-choice", question: "\"Cerco la ragazza che lavora qui\" means ...", options: ["I'm looking for a particular girl who works here.", "I want to hire a girl.", "No girl works here.", "I used to work here."], correctIndex: 0, explanation: "Definite article + indicative → a real, known person." },
      { type: "listen-choose", audio: "Vorrei un vicino che non suonasse il violino alle sei di mattina.", question: "What is the speaker's problem?", options: ["A neighbour plays the violin early in the morning.", "They want to learn the violin.", "They have no neighbours.", "They wake up at six."], correctIndex: 0, explanation: "A wish, with a real annoyance behind it." },
      { type: "dictation", audio: "Ho un amico che fa il meccanico, ma cerco qualcuno che ripari biciclette.", explanation: "Real → \"fa\"; sought → \"ripari\"." },
      { type: "speak", text: "Ho una coinquilina che cucina benissimo, ma cerco qualcuno che lavi i piatti!", prompt: "Say it in Italian: I have a flatmate who cooks brilliantly, but I'm looking for someone who'll wash the dishes!", tip: "\"Cucina\" (real) vs \"lavi\" (sought).", explanation: "Both moods side by side." },
    ],
  },
];
