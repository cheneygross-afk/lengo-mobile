// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u11-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 11 Extra Practice: Regional Italian, Part 2. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U11_EXTRA: Lesson[] = [
  {
    slug: "c1-regional-2-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: North",
    summary: "More northern voices, from Torino, Venezia, Bergamo and Bologna, rewritten in Standard Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Torino, Veneto, Bergamo, Bologna",
        body: [
          "Turin closes statements with \"neh?\" (right?) and calls chewing gum \"le cicles\"; a \"piola\" is a simple local trattoria. In the Veneto a glass of wine is \"un'ombra\", bar snacks are \"cicchetti\", money is \"i schei\", a boyfriend or girlfriend is \"il moroso\" or \"la morosa\" (common across the North), and \"sono dietro a fare\" means I'm busy doing.",
          "Around Bergamo and Brescia \"pota\" punctuates every sentence like well or you know. In Bologna a child is \"un cinno\". All of these sit on top of the shared northern grammar: the article with first names and the passato prossimo for every past event.",
        ],
        examples: [
          { es: "Bella giornata, neh?", en: "Lovely day, isn't it? (Turin)" },
          { es: "Andiamo a bere un'ombra e due cicchetti?", en: "Shall we go for a glass of wine and a couple of snacks? (Veneto)" },
          { es: "Sono dietro a preparare la cena.", en: "I'm busy making dinner. (Veneto)" },
          { es: "Sto preparando la cena.", en: "I'm making dinner. (standard)" },
          { es: "La mia morosa studia a Padova.", en: "My girlfriend studies in Padua. (northern)" },
          { es: "Pota, cosa vuoi che ti dica?", en: "Well, what do you want me to say? (Bergamo)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "I'm making dinner.", answer: "Sto preparando la cena.", altAnswers: ["Sto facendo la cena.", "Preparo la cena.", "Sto cucinando la cena."], explanation: "\"Stare\" + gerund; \"sono dietro a\" is Venetian." },
          { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "My girlfriend studies in Padua.", answer: "La mia ragazza studia a Padova.", altAnswers: ["La mia fidanzata studia a Padova."], explanation: "\"La ragazza\" or \"la fidanzata\"; \"la morosa\" is northern." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Lovely day, isn't it?", answer: "Bella giornata, vero?", altAnswers: ["Bella giornata, no?", "Che bella giornata, vero?", "È una bella giornata, vero?"], explanation: "\"Vero?\" or \"no?\" for the Turin \"neh?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Shall we go for a glass of wine?", answer: "Andiamo a bere un bicchiere di vino?", altAnswers: ["Andiamo a bere un bicchiere?", "Beviamo un bicchiere di vino?", "Andiamo a prendere un bicchiere di vino?"], explanation: "\"Un'ombra\" is Venetian for a glass of wine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "I have no money left.", answer: "Non ho più soldi.", altAnswers: ["Sono senza soldi.", "Non mi sono rimasti soldi.", "Sono rimasto senza soldi.", "Sono rimasta senza soldi."], explanation: "\"I schei\" is Venetian for \"i soldi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "The child is playing in the garden.", answer: "Il bambino gioca in giardino.", altAnswers: ["Il bambino sta giocando in giardino.", "Il bimbo gioca in giardino."], explanation: "\"Il cinno\" is Bolognese for \"il bambino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Yesterday Paolo and Anna went to Verona.", answer: "Ieri Paolo e Anna sono andati a Verona.", altAnswers: ["Paolo e Anna sono andati a Verona ieri.", "Ieri Paolo e Anna sono andati a Verona."], explanation: "No northern articles before the names." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Have you got any chewing gum?", answer: "Hai una gomma da masticare?", altAnswers: ["Hai delle gomme da masticare?", "Hai una gomma?", "Ce l'hai una gomma da masticare?"], explanation: "\"Le cicles\" is Turinese; \"la gomma da masticare\" is national." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "We ate at a little trattoria near the river.", answer: "Abbiamo mangiato in una piccola trattoria vicino al fiume.", altAnswers: ["Abbiamo mangiato in una trattoria vicino al fiume.", "Abbiamo cenato in una piccola trattoria vicino al fiume.", "Abbiamo pranzato in una piccola trattoria vicino al fiume."], explanation: "\"Una piola\" in Turin." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm busy writing] an email.", sentence: "___ una email.", answer: "Sto scrivendo", altAnswers: ["Scrivo"], explanation: "Standard progressive, not \"sono dietro a scrivere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Well], what do you want me to say?", sentence: "___, cosa vuoi che ti dica?", answer: "Beh", altAnswers: ["Mah", "Insomma", "Be'", "Boh"], explanation: "Standard fillers for the Bergamo \"pota\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We had [some snacks] at the bar.", sentence: "Al bar abbiamo preso ___.", answer: "degli stuzzichini", altAnswers: ["dei cicchetti", "qualche stuzzichino"], explanation: "\"Cicchetti\" is Venetian but widely known; \"stuzzichini\" is the general word." },
      { type: "word-order", prompt: "Put the words in order to say: My boyfriend works in Turin.", words: ["Il", "mio", "ragazzo", "lavora", "a", "Torino."], translation: "My boyfriend works in Turin.", explanation: "\"Ragazzo\" for the northern \"moroso\"." },
      {
        type: "matching",
        instructions: "Match the northern word to its meaning.",
        pairs: [
          { left: "un'ombra", right: "a glass of wine (Veneto)" },
          { left: "i schei", right: "money (Veneto)" },
          { left: "neh?", right: "right? (Turin)" },
          { left: "il cinno", right: "the child (Bologna)" },
          { left: "la piola", right: "the trattoria (Turin)" },
        ],
        explanation: "Local words: recognise them, don't write them in a formal text.",
      },
      { type: "listen-choose", audio: "Sono dietro a fare le valigie, ti richiamo dopo.", question: "What is the speaker doing?", options: ["Packing, and will call back later", "Following someone with the suitcases", "Looking for the suitcases", "Waiting behind the suitcases"], correctIndex: 0, explanation: "Venetian \"sono dietro a fare\" = \"sto facendo\"." },
      { type: "dictation", audio: "Sto facendo le valigie, ti richiamo dopo.", explanation: "The standard version." },
      { type: "speak", text: "Andiamo a bere un bicchiere di vino? Conosco una trattoria vicino al fiume.", prompt: "Say it in Standard Italian: Shall we go for a glass of wine? I know a trattoria near the river.", tip: "\"Bicchiere\": double c, then -ie- with the stress on IE.", explanation: "Standard words for \"un'ombra\" and \"una piola\"." },
    ],
  },
  {
    slug: "c1-regional-2-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: South",
    summary: "More southern and island voices, from Bari to Cagliari, rewritten in Standard Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Scendi il cane: southern verbs",
        body: [
          "Across the South, verbs of movement become transitive: \"scendi il cane\" (take the dog down), \"esci la macchina\" (get the car out), \"sali la spesa\" (bring the shopping up). Standard Italian needs another verb: \"porta giù il cane\", \"tira fuori la macchina\", \"porta su la spesa\".",
          "\"Imparare\" is used for teaching (\"mi ha imparato a nuotare\"), where the standard says \"mi ha insegnato a nuotare\". Add the features you know, \"tenere\" for \"avere\", \"stare\" for \"essere\", \"a\" before people, \"mo'\", and in Sardinia the verb at the end (\"Mangiato hai?\") and \"ajò!\" (come on, let's go).",
        ],
        examples: [
          { es: "Scendi il cane, per favore.", en: "Take the dog down, please. (southern)" },
          { es: "Porta giù il cane, per favore.", en: "Take the dog down, please. (standard)" },
          { es: "Mio nonno mi ha imparato a pescare.", en: "My grandfather taught me to fish. (southern, popular)" },
          { es: "Mio nonno mi ha insegnato a pescare.", en: "My grandfather taught me to fish. (standard)" },
          { es: "Ajò, che il traghetto parte!", en: "Come on, the ferry's leaving! (Sardinia)" },
          { es: "Mangiato hai?", en: "Have you eaten? (Sardinia)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "My grandfather taught me to fish.", answer: "Mio nonno mi ha insegnato a pescare.", altAnswers: ["Il nonno mi ha insegnato a pescare."], explanation: "\"Insegnare\" = to teach; \"imparare\" = to learn." },
          { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Take the dog down, please. (to a friend)", answer: "Porta giù il cane, per favore.", altAnswers: ["Porta fuori il cane, per favore.", "Per favore, porta giù il cane.", "Porta il cane giù, per favore."], explanation: "\"Scendere\" isn't transitive in the standard: \"portare giù\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Get the car out of the garage. (to a friend)", answer: "Tira fuori la macchina dal garage.", altAnswers: ["Porta fuori la macchina dal garage.", "Tira fuori dal garage la macchina.", "Togli la macchina dal garage."], explanation: "Not \"esci la macchina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Can you bring the shopping up? (to a friend)", answer: "Puoi portare su la spesa?", altAnswers: ["Porti su la spesa?", "Mi porti su la spesa?", "Puoi portare di sopra la spesa?", "Puoi portarmi su la spesa?"], explanation: "Not \"sali la spesa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Have you eaten?", answer: "Hai mangiato?", altAnswers: ["Hai già mangiato?", "Ha mangiato?"], explanation: "Verb first: not the Sardinian \"Mangiato hai?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Come on, the ferry's leaving!", answer: "Dai, il traghetto parte!", altAnswers: ["Forza, il traghetto parte!", "Andiamo, il traghetto parte!", "Dai, che il traghetto parte!", "Sbrigati, il traghetto parte!"], explanation: "\"Ajò\" is Sardinian for \"dai\" or \"andiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Have you got a light?", answer: "Hai da accendere?", altAnswers: ["Hai un accendino?", "Ha da accendere?"], explanation: "\"Avere\", not \"tenere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Is your sister married?", answer: "Tua sorella è sposata?", altAnswers: ["È sposata tua sorella?"], explanation: "\"Essere sposato\", not \"stare sposato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "I'm waiting for my brother.", answer: "Aspetto mio fratello.", altAnswers: ["Sto aspettando mio fratello."], explanation: "No \"a\" before the person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Standard Italian.", source: "Who taught you Italian? (to a friend)", answer: "Chi ti ha insegnato l'italiano?", altAnswers: ["Chi ti ha insegnato italiano?"], explanation: "\"Insegnare qualcosa a qualcuno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Bring] the chairs [down], please.", sentence: "___ le sedie, per favore.", answer: "Porta giù", altAnswers: ["Porta di sotto"], explanation: "Not \"scendi le sedie\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll call you [now].", sentence: "Ti chiamo ___.", answer: "adesso", altAnswers: ["ora", "subito"], explanation: "\"Mo'\" is central-southern." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm] at the beach with friends.", sentence: "___ al mare con gli amici.", answer: "Sono", altAnswers: ["Io sono"], explanation: "\"Essere\" for location." },
      { type: "word-order", prompt: "Put the words in order to say: My mother taught me to cook.", words: ["Mia", "madre", "mi", "ha", "insegnato", "a", "cucinare."], translation: "My mother taught me to cook.", explanation: "\"Insegnare a\" + infinitive." },
      { type: "multiple-choice", question: "Which sentence is Standard Italian?", options: ["Porta giù la spazzatura.", "Scendi la spazzatura.", "Scendi a la spazzatura.", "Tieni giù la spazzatura."], correctIndex: 0, explanation: "\"Portare giù\" for take down." },
      { type: "listen-choose", audio: "Uè, esci la macchina che andiamo al mare!", question: "What does the speaker want?", options: ["Get the car out, they're going to the beach", "Leave the car, they're walking to the beach", "Get out of the car at the beach", "Park the car by the beach"], correctIndex: 0, explanation: "Southern transitive \"uscire\" = \"tirare fuori\"." },
      { type: "dictation", audio: "Tira fuori la macchina, andiamo al mare.", explanation: "The standard version." },
      { type: "speak", text: "Mio nonno mi ha insegnato a pescare e adesso porto giù la barca ogni domenica.", prompt: "Say it in Standard Italian: My grandfather taught me to fish and now I take the boat down every Sunday.", tip: "\"Insegnato\": the gn is one soft sound.", explanation: "\"Insegnare\" and \"portare giù\": two standard fixes." },
    ],
  },
];
