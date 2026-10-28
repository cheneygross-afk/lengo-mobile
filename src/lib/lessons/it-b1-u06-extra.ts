// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u06-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 6 Extra Practice: Telling a Story. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U06_EXTRA: Lesson[] = [
  {
    slug: "b1-storytelling-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Connectors",
    summary: "Fresh story sentences linked with prima, poi, a un certo punto, mentre and alla fine.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Holding the story together",
        body: [
          "A story moves on its connectors: \"prima\", \"poi\", \"dopo un po'\", \"a un certo punto\", \"all'improvviso\", \"nel frattempo\", \"alla fine\". \"Mentre\" sets up the background; \"quando\" brings in the event. \"Così\" and \"quindi\" give the result.",
        ],
        examples: [
          { es: "Prima abbiamo fatto la spesa, poi siamo andati al mare.", en: "First we did the shopping, then we went to the beach." },
          { es: "A un certo punto si è messo a grandinare.", en: "At a certain point it started to hail." },
          { es: "Nel frattempo Giulia aveva chiamato i vigili del fuoco.", en: "Meanwhile Giulia had called the fire brigade." },
          { es: "Alla fine è andato tutto bene.", en: "In the end everything went fine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First we did the shopping, then we went to the beach.", answer: "Prima abbiamo fatto la spesa, poi siamo andati al mare.", altAnswers: ["Prima abbiamo fatto la spesa e poi siamo andati al mare.", "Prima abbiamo fatto la spesa, poi siamo andate al mare."], explanation: "\"Prima ... poi\" for the sequence." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the end everything went fine.", answer: "Alla fine è andato tutto bene.", altAnswers: ["Alla fine tutto è andato bene."], explanation: "\"Andare bene\" takes essere." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At a certain point it started to hail.", answer: "A un certo punto si è messo a grandinare.", altAnswers: ["A un certo punto ha cominciato a grandinare.", "A un certo punto ha iniziato a grandinare.", "A un certo punto è cominciato a grandinare."], explanation: "\"Mettersi a\" = to start." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Meanwhile Giulia had called the fire brigade.", answer: "Nel frattempo Giulia aveva chiamato i vigili del fuoco.", altAnswers: ["Intanto Giulia aveva chiamato i vigili del fuoco.", "Nel frattempo Giulia aveva chiamato i pompieri."], explanation: "\"Nel frattempo\" = meanwhile." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After a while the bus arrived.", answer: "Dopo un po' è arrivato l'autobus.", altAnswers: ["Dopo un po' l'autobus è arrivato."], explanation: "\"Dopo un po'\" with an apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Suddenly the lights went out.", answer: "All'improvviso si sono spente le luci.", altAnswers: ["All'improvviso le luci si sono spente.", "Improvvisamente si sono spente le luci."], explanation: "\"Spegnersi\" takes essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While we were eating, the cat jumped onto the table.", answer: "Mentre mangiavamo, il gatto è saltato sul tavolo.", altAnswers: ["Mentre stavamo mangiando, il gatto è saltato sul tavolo."], explanation: "\"Mentre\" + imperfetto, then the event." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was late, so we took a taxi.", answer: "Era tardi, così abbiamo preso un taxi.", altAnswers: ["Era tardi, quindi abbiamo preso un taxi.", "Era tardi, perciò abbiamo preso un taxi."], explanation: "\"Così\" gives the result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the end we laughed about it.", answer: "Alla fine ci abbiamo riso sopra.", altAnswers: ["Alla fine ci abbiamo riso su.", "Alla fine ne abbiamo riso."], explanation: "\"Riderci sopra\" = to laugh about it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[At first] I didn't recognise him.", sentence: "___ non l'ho riconosciuto.", answer: "All'inizio", altAnswers: ["In un primo momento"], explanation: "\"All'inizio\" = at first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Then] he took off his hat.", sentence: "___ si è tolto il cappello.", answer: "Poi", altAnswers: ["Dopo", "Allora"], explanation: "\"Poi\" moves the story on." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I was reading [when] the phone rang.", sentence: "Leggevo ___ è squillato il telefono.", answer: "quando", explanation: "\"Quando\" brings in the event." },
      { type: "word-order", prompt: "Put the words in order to say: At first nobody answered.", words: ["All'inizio", "nessuno", "ha", "risposto."], translation: "At first nobody answered.", explanation: "\"Nessuno\" before the verb: no \"non\"." },
      { type: "matching", instructions: "Match each connector to its meaning.", pairs: [{ left: "nel frattempo", right: "meanwhile" }, { left: "a un certo punto", right: "at a certain point" }, { left: "alla fine", right: "in the end" }, { left: "dopo un po'", right: "after a while" }], explanation: "Core story connectors." },
      { type: "listen-choose", audio: "All'improvviso si sono spente le luci.", question: "What happened?", options: ["The lights suddenly went out.", "The lights came on.", "The lights were already off.", "Someone turned on the lights slowly."], correctIndex: 0, explanation: "\"Spegnersi\" = to go out." },
      { type: "dictation", audio: "A un certo punto si è messo a piovere, così siamo tornati a casa.", explanation: "Connector, event, result." },
      { type: "speak", text: "Prima siamo andati al mare, poi a un certo punto si è messo a piovere e alla fine siamo tornati a casa.", prompt: "Say it in Italian: First we went to the beach, then at a certain point it started raining and in the end we went back home.", tip: "Pause slightly after each connector.", explanation: "Prima, poi, a un certo punto, alla fine." },
    ],
  },
  {
    slug: "b1-storytelling-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Tense Choice",
    summary: "Fresh story sentences choosing between imperfetto, passato prossimo and trapassato.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Scene, event, flashback",
        body: [
          "Scene and states: imperfetto (\"c'era il sole\", \"ero contento\"). The next event: passato prossimo (\"è arrivato il treno\"). Something earlier still: trapassato (\"avevo comprato il biglietto\"). A stated duration closes the action: \"ho aspettato un'ora\".",
        ],
        examples: [
          { es: "C'era il sole e la piazza era piena di gente.", en: "The sun was out and the square was full of people." },
          { es: "Ho aspettato un'ora, ma lei non è venuta.", en: "I waited for an hour, but she didn't come." },
          { es: "Avevo comprato il biglietto il giorno prima.", en: "I had bought the ticket the day before." },
          { es: "Ero contento perché avevo superato l'esame.", en: "I was happy because I had passed the exam." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I waited for an hour, but she didn't come.", answer: "Ho aspettato un'ora, ma lei non è venuta.", altAnswers: ["Ho aspettato per un'ora, ma lei non è venuta.", "Ho aspettato un'ora, ma non è venuta."], explanation: "Duration closes the action: passato prossimo." },
          { type: "multiple-choice", question: "\"Ero contento perché ___ l'esame.\" (I had passed)", options: ["avevo superato", "superavo", "ho superato", "supero"], correctIndex: 0, explanation: "Earlier than the state: trapassato." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sun was out and the square was full of people.", answer: "C'era il sole e la piazza era piena di gente.", explanation: "Scene: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had bought the ticket the day before.", answer: "Avevo comprato il biglietto il giorno prima.", explanation: "\"Il giorno prima\" = the day before." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was happy because I had passed the exam.", answer: "Ero contento perché avevo superato l'esame.", altAnswers: ["Ero contenta perché avevo superato l'esame."], explanation: "State + earlier cause." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When we arrived, the film had already started.", answer: "Quando siamo arrivati, il film era già cominciato.", altAnswers: ["Quando siamo arrivati, il film era già iniziato.", "Quando siamo arrivate, il film era già cominciato.", "Quando siamo arrivati, il film aveva già cominciato."], explanation: "Earlier than our arrival: trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother always told stories.", answer: "Mia nonna raccontava sempre delle storie.", altAnswers: ["Mia nonna raccontava sempre storie."], explanation: "Habit: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That evening she told us a strange story.", answer: "Quella sera ci ha raccontato una storia strana.", explanation: "One event: passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We stayed in Naples for three days.", answer: "Siamo rimasti a Napoli tre giorni.", altAnswers: ["Siamo rimasti a Napoli per tre giorni.", "Siamo rimaste a Napoli per tre giorni.", "Siamo rimaste a Napoli tre giorni."], explanation: "Stated duration: passato prossimo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The door [was open], so I went in.", sentence: "La porta ___ aperta, così sono entrato.", answer: "era", explanation: "A state: imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Someone [had left] the window open.", sentence: "Qualcuno ___ la finestra aperta.", answer: "aveva lasciato", explanation: "Earlier: trapassato." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Then [I closed it].", sentence: "Poi ___.", answer: "l'ho chiusa", explanation: "Event; \"l'\" = la (the window), so \"chiusa\" agrees." },
      { type: "word-order", prompt: "Put the words in order to say: It was snowing when we left.", words: ["Nevicava", "quando", "siamo", "partiti."], translation: "It was snowing when we left.", explanation: "Scene, then event." },
      { type: "matching", instructions: "Match each verb to its role.", pairs: [{ left: "c'era", right: "scene" }, { left: "è arrivato", right: "event" }, { left: "avevo comprato", right: "flashback" }, { left: "raccontava sempre", right: "habit" }], explanation: "Three tenses, four jobs." },
      { type: "listen-choose", audio: "Quando siamo arrivati, il film era già cominciato.", question: "What happened first?", options: ["The film started.", "We arrived.", "We bought tickets.", "The film ended."], correctIndex: 0, explanation: "\"Era già cominciato\": before our arrival." },
      { type: "dictation", audio: "Pioveva e non avevo l'ombrello, così sono entrato in un bar.", explanation: "Scene, then event." },
      { type: "speak", text: "Ero stanchissima perché avevo lavorato tutto il giorno, così sono andata a letto presto.", prompt: "Say it in Italian (as a woman): I was exhausted because I had worked all day, so I went to bed early.", tip: "Stress stan-CHIS-si-ma.", explanation: "Imperfetto, trapassato, passato prossimo." },
    ],
  },
  {
    slug: "b1-storytelling-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Retell It",
    summary: "Three more short stories to retell: a lost dog, a wrong train and a surprise party.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three short stories",
        body: [
          "Each story below has a scene, a key moment and an ending. Read them, then retell them in the exercises. Keep the imperfetto for the scene, the passato prossimo for what happened, and the trapassato for anything that came before.",
        ],
        examples: [
          { es: "Era domenica mattina e Bruno, il cane dei vicini, era scappato di nuovo.", en: "It was Sunday morning and Bruno, the neighbours' dog, had run away again." },
          { es: "Ero sicura di essere sul treno per Verona, ma a un certo punto ho visto un cartello: Bologna.", en: "I was sure I was on the train to Verona, but at a certain point I saw a sign: Bologna." },
          { es: "Quando Elena ha acceso la luce, tutti hanno gridato: \"Sorpresa!\"", en: "When Elena switched on the light, everyone shouted \"Surprise!\"" },
          { es: "Alla fine abbiamo trovato Bruno in pasticceria: stava mangiando un cornetto.", en: "In the end we found Bruno in the pastry shop: he was eating a croissant." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbours' dog had run away again.", answer: "Il cane dei vicini era scappato di nuovo.", altAnswers: ["Il cane dei vicini era scappato ancora."], explanation: "\"Scappare\" takes essere." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone shouted \"Surprise!\"", answer: "Tutti hanno gridato: \"Sorpresa!\"", altAnswers: ["Tutti hanno urlato: \"Sorpresa!\"", "Tutti hanno gridato \"Sorpresa!\""], explanation: "One event: passato prossimo." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was Sunday morning.", answer: "Era domenica mattina.", explanation: "Time in a scene: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We found the dog in the pastry shop.", answer: "Abbiamo trovato il cane in pasticceria.", explanation: "Event: passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was eating a croissant.", answer: "Stava mangiando un cornetto.", altAnswers: ["Mangiava un cornetto.", "Stava mangiando una brioche."], explanation: "In progress: \"stava\" + gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was sure I was on the train to Verona.", answer: "Ero sicura di essere sul treno per Verona.", altAnswers: ["Ero sicuro di essere sul treno per Verona."], explanation: "\"Essere sicuro di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had taken the wrong train.", answer: "Avevo preso il treno sbagliato.", explanation: "Earlier mistake: trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So I got off in Bologna and ate tortellini.", answer: "Così sono scesa a Bologna e ho mangiato i tortellini.", altAnswers: ["Così sono sceso a Bologna e ho mangiato i tortellini.", "Così sono scesa a Bologna e ho mangiato dei tortellini.", "Così sono sceso a Bologna e ho mangiato dei tortellini."], explanation: "Two events: passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her friends had organised everything.", answer: "I suoi amici avevano organizzato tutto.", altAnswers: ["Le sue amiche avevano organizzato tutto."], explanation: "Earlier: trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Elena was speechless.", answer: "Elena è rimasta senza parole.", altAnswers: ["Elena era senza parole."], explanation: "\"Rimanere senza parole\" = to be left speechless." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When Elena [switched on] the light, everyone shouted.", sentence: "Quando Elena ___ la luce, tutti hanno gridato.", answer: "ha acceso", explanation: "\"Accendere\" → \"acceso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The house [was dark] and silent.", sentence: "La casa ___ e silenziosa.", answer: "era buia", explanation: "Scene: imperfetto." },
      { type: "word-order", prompt: "Put the words in order to say: At a certain point I saw a sign.", words: ["A", "un", "certo", "punto", "ho", "visto", "un", "cartello."], translation: "At a certain point I saw a sign.", explanation: "Connector + event." },
      { type: "multiple-choice", question: "In the train story, which happened FIRST?", options: ["She took the wrong train.", "She saw the sign.", "She got off in Bologna.", "She ate tortellini."], correctIndex: 0, explanation: "\"Avevo preso il treno sbagliato\": trapassato." },
      { type: "listen-choose", audio: "Il cane dei vicini era scappato di nuovo.", question: "What had happened?", options: ["The neighbours' dog had run away again.", "The neighbours had found a dog.", "The dog was sleeping again.", "The neighbours had gone away."], correctIndex: 0, explanation: "\"Scappare\" = to run away." },
      { type: "dictation", audio: "Quando Elena ha acceso la luce, tutti hanno gridato sorpresa.", explanation: "Two events." },
      { type: "speak", text: "Era domenica mattina e il cane dei vicini era scappato di nuovo. Alla fine l'abbiamo trovato in pasticceria.", prompt: "Retell it in Italian: It was Sunday morning and the neighbours' dog had run away again. In the end we found it in the pastry shop.", tip: "pa-stic-ce-RI-a: stress on the i.", explanation: "Scene, flashback, ending." },
    ],
  },
];
