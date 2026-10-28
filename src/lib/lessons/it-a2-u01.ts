// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u01.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 1: Past Tense with Avere. Passato prossimo with avere,
// regular and irregular participles, time expressions, negation, no
// agreement with avere, double consonants in participles.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U01: Lesson[] = [
  {
    slug: "a2-passato-prossimo-avere-1",
    level: "IT-A2",
    number: 1,
    title: "The Past with Avere, Part 1 of 2: Regular Verbs",
    summary: "Say what you did with the present of avere plus a regular past participle: ho parlato, hai mangiato, ha dormito.",
    duration: "15 min",
    sections: [
      {
        heading: "Two words: avere + participle",
        body: [
          "The everyday past tense in Italian is the \"passato prossimo\". It has two parts: the present of \"avere\" (\"ho, hai, ha, abbiamo, avete, hanno\") and a past participle: \"ho mangiato\", \"hai lavorato\", \"hanno parlato\".",
          "One Italian form covers three English ones: \"Ho mangiato una pizza\" is I ate a pizza, I've eaten a pizza and I did eat a pizza. Don't look for a separate tense for have done: Italian uses the passato prossimo for both.",
        ],
        examples: [
          { es: "Ho mangiato una pizza.", en: "I ate a pizza. / I've eaten a pizza." },
          { es: "Hai parlato con Marco?", en: "Did you talk to Marco? / Have you talked to Marco?" },
          { es: "Giulia ha lavorato fino alle otto.", en: "Giulia worked until eight." },
          { es: "Abbiamo comprato il pane.", en: "We bought bread." },
          { es: "Hanno cenato tardi.", en: "They had dinner late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I ate a pizza.", answer: "Ho mangiato una pizza.", altAnswers: ["Io ho mangiato una pizza."], explanation: "\"Ho\" + \"mangiato\": one form for I ate and I've eaten." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We bought bread.", answer: "Abbiamo comprato il pane.", altAnswers: ["Noi abbiamo comprato il pane.", "Abbiamo comprato del pane."], explanation: "\"Abbiamo\" (double b) + \"comprato\"." },
        ],
      },
      {
        heading: "Making the participle",
        body: [
          "Regular participles come straight from the infinitive: -are → \"-ato\" (\"parlare\" → \"parlato\"), -ere → \"-uto\" (\"vendere\" → \"venduto\"), -ire → \"-ito\" (\"dormire\" → \"dormito\"). The -isc- verbs are regular here too: \"capire\" → \"capito\", \"finire\" → \"finito\", \"pulire\" → \"pulito\".",
          "The participle is stressed on its ending: par-LA-to, ven-DU-to, dor-MI-to. \"Avere\" itself has a participle, \"avuto\": \"Ho avuto un'idea\" (I had an idea).",
        ],
        examples: [
          { es: "Avete capito la domanda?", en: "Did you understand the question? (plural)" },
          { es: "Ho dormito otto ore.", en: "I slept eight hours." },
          { es: "Luca ha venduto la macchina.", en: "Luca sold his car." },
          { es: "Abbiamo pulito la cucina.", en: "We cleaned the kitchen." },
          { es: "Ho avuto un'idea.", en: "I had an idea." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [sold] his car.", sentence: "Luca ___ la macchina.", answer: "ha venduto", explanation: "-ere → \"-uto\": \"venduto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you understand? (plural)", answer: "Avete capito?", altAnswers: ["Voi avete capito?"], explanation: "\"Capire\" → \"capito\": the -isc- disappears in the participle." },
          { type: "listen-choose", audio: "Ho dormito otto ore.", question: "What does it mean?", options: ["I slept eight hours.", "I sleep eight hours.", "I worked eight hours.", "I'll sleep eight hours."], correctIndex: 0, explanation: "\"Ho dormito\" is past: avere + participle." },
        ],
      },
      {
        heading: "Non and questions",
        body: [
          "\"Non\" goes before \"avere\", never between the two parts: \"Non ho mangiato\" (I didn't eat / I haven't eaten). A question is just the same sentence with a rising voice: \"Hai mangiato?\".",
          "With \"avere\" the participle never changes to match the object: \"Ho comprato la frutta\", \"Ho comprato le scarpe\". It stays \"-o\" whatever comes after it.",
        ],
        examples: [
          { es: "Non ho mangiato.", en: "I didn't eat. / I haven't eaten." },
          { es: "Hai finito?", en: "Have you finished?" },
          { es: "Chiara ha comprato le scarpe.", en: "Chiara bought some shoes." },
          { es: "Non abbiamo capito.", en: "We didn't understand." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't understand.", answer: "Non abbiamo capito.", altAnswers: ["Noi non abbiamo capito."], explanation: "\"Non\" goes before \"abbiamo\", not before the participle." },
          { type: "multiple-choice", question: "Chiara bought some shoes. Which is right?", options: ["Chiara ha comprato le scarpe.", "Chiara ha comprate le scarpe.", "Chiara ha non comprato le scarpe.", "Chiara compra le scarpe ieri."], correctIndex: 0, explanation: "With \"avere\" the participle stays \"comprato\", even with a feminine plural object." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you talk to Marco? (to a friend)", answer: "Hai parlato con Marco?", altAnswers: ["Tu hai parlato con Marco?"], explanation: "\"Parlare con\" + person; \"hai\" for \"tu\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They had dinner late.", answer: "Hanno cenato tardi.", altAnswers: ["Loro hanno cenato tardi."], explanation: "\"Cenare\" → \"cenato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia worked until eight.", answer: "Giulia ha lavorato fino alle otto.", explanation: "\"Fino alle otto\" = until eight." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I slept eight hours.", answer: "Ho dormito otto ore.", altAnswers: ["Io ho dormito otto ore."], explanation: "-ire → \"-ito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't eaten.", answer: "Non ho mangiato.", altAnswers: ["Io non ho mangiato."], explanation: "The same form says I didn't eat and I haven't eaten." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We cleaned the kitchen.", answer: "Abbiamo pulito la cucina.", altAnswers: ["Noi abbiamo pulito la cucina."], explanation: "\"Pulire\" → \"pulito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I had] an idea.", sentence: "___ un'idea.", answer: "Ho avuto", altAnswers: ["Io ho avuto"], explanation: "\"Avere\" + \"avuto\": the participle of \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Have you finished]? (to a friend)", sentence: "___?", answer: "Hai finito", altAnswers: ["Tu hai finito"], explanation: "\"Finire\" → \"finito\"." },
      { type: "word-order", prompt: "Put the words in order to say: Chiara didn't buy the shoes.", words: ["Chiara", "non", "ha", "comprato", "le", "scarpe."], translation: "Chiara didn't buy the shoes.", explanation: "\"Non\" before \"ha\"; \"comprato\" doesn't change." },
      { type: "matching", instructions: "Match the infinitive to its participle.", pairs: [{ left: "parlare", right: "parlato" }, { left: "vendere", right: "venduto" }, { left: "dormire", right: "dormito" }, { left: "capire", right: "capito" }, { left: "avere", right: "avuto" }], explanation: "-are → -ato, -ere → -uto, -ire → -ito." },
      { type: "dictation", audio: "Abbiamo mangiato e poi abbiamo dormito.", explanation: "\"Abbiamo\" with double b, twice." },
      { type: "speak", text: "Ieri ho lavorato, ho cenato con Giulia e ho dormito bene.", prompt: "Say it in Italian: Yesterday I worked, had dinner with Giulia and slept well.", tip: "Stress the participle ending: la-vo-RA-to, ce-NA-to, dor-MI-to.", explanation: "Three regular participles with \"ho\"." },
    ],
  },
  {
    slug: "a2-passato-prossimo-avere-2",
    level: "IT-A2",
    number: 2,
    title: "The Past with Avere, Part 2 of 2: Irregular Participles",
    summary: "Learn the common irregular participles: fatto, detto, scritto, letto, preso, messo, visto, aperto, chiuso, chiesto, risposto, bevuto, vissuto, perso.",
    duration: "15 min",
    sections: [
      {
        heading: "-tto: fatto, detto, scritto, letto",
        body: [
          "Many of the most frequent verbs have irregular participles, mostly -ere verbs. The first family ends in a double t: \"fare\" → \"fatto\", \"dire\" → \"detto\", \"scrivere\" → \"scritto\", \"leggere\" → \"letto\".",
          "Say the double t: \"fatto\" with a short stop on the t. \"Cosa hai fatto?\" (what did you do?) is the question you'll hear most in this unit.",
        ],
        examples: [
          { es: "Cosa hai fatto ieri?", en: "What did you do yesterday?" },
          { es: "Marco non ha detto niente.", en: "Marco didn't say anything." },
          { es: "Ho scritto un'email al professore.", en: "I wrote an email to the professor." },
          { es: "Avete letto il giornale?", en: "Have you read the paper?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did you do yesterday? (to a friend)", answer: "Cosa hai fatto ieri?", altAnswers: ["Che cosa hai fatto ieri?", "Che hai fatto ieri?", "Ieri cosa hai fatto?", "Ieri che cosa hai fatto?"], explanation: "\"Fare\" → \"fatto\", double t." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I wrote] an email to the professor.", sentence: "___ un'email al professore.", answer: "Ho scritto", altAnswers: ["Io ho scritto"], explanation: "\"Scrivere\" → \"scritto\"." },
        ],
      },
      {
        heading: "-so and -sto: preso, messo, chiuso, chiesto",
        body: [
          "A second family ends in \"-so\": \"prendere\" → \"preso\", \"mettere\" → \"messo\", \"chiudere\" → \"chiuso\", \"perdere\" → \"perso\" (\"perduto\" also exists, but \"perso\" is what people say). Next to them: \"chiedere\" → \"chiesto\", \"rispondere\" → \"risposto\".",
          "\"Prendere\" covers a lot of English: \"Ho preso il treno\" (I took the train), \"Ho preso un caffè\" (I had a coffee).",
        ],
        examples: [
          { es: "Ho preso il treno delle sette.", en: "I took the seven o'clock train." },
          { es: "Dove hai messo le chiavi?", en: "Where did you put the keys?" },
          { es: "Hanno chiuso il negozio presto.", en: "They closed the shop early." },
          { es: "Ho chiesto il conto.", en: "I asked for the bill." },
          { es: "Sara ha perso il portafoglio.", en: "Sara has lost her wallet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where did you put the keys? (to a friend)", answer: "Dove hai messo le chiavi?", altAnswers: ["Tu dove hai messo le chiavi?"], explanation: "\"Mettere\" → \"messo\", double s." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked for the bill.", answer: "Ho chiesto il conto.", altAnswers: ["Io ho chiesto il conto."], explanation: "\"Chiedere\" → \"chiesto\"; no word for for." },
        ],
      },
      {
        heading: "Visto, aperto, bevuto, vissuto",
        body: [
          "The rest just need learning: \"vedere\" → \"visto\", \"aprire\" → \"aperto\", \"bere\" → \"bevuto\" (from the old stem \"bev-\", as in \"bevo\"), \"vivere\" → \"vissuto\".",
          "Watch the ones that look regular but aren't: \"veduto\" is rare and literary, and \"prenduto\" or \"facciuto\" don't exist. When in doubt, the irregular form is the one you've heard.",
        ],
        examples: [
          { es: "Abbiamo visto un bel film.", en: "We saw a good film." },
          { es: "Chi ha aperto la finestra?", en: "Who opened the window?" },
          { es: "Hai bevuto troppo caffè.", en: "You've drunk too much coffee." },
          { es: "Ho vissuto due anni a Torino.", en: "I lived in Turin for two years." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who opened the window?", answer: "Chi ha aperto la finestra?", explanation: "\"Aprire\" → \"aperto\"; \"chi\" takes the \"ha\" form." },
          { type: "listen-choose", audio: "Abbiamo visto un bel film.", question: "What does it mean?", options: ["We saw a good film.", "We're watching a good film.", "We made a good film.", "We read a good book."], correctIndex: 0, explanation: "\"Visto\" is the participle of \"vedere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco didn't say anything.", answer: "Marco non ha detto niente.", altAnswers: ["Marco non ha detto nulla."], explanation: "\"Dire\" → \"detto\"; \"non ... niente\" = not anything." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I took the seven o'clock train.", answer: "Ho preso il treno delle sette.", altAnswers: ["Io ho preso il treno delle sette.", "Ho preso il treno delle 7."], explanation: "\"Prendere\" → \"preso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you read the paper? (plural)", answer: "Avete letto il giornale?", altAnswers: ["Voi avete letto il giornale?"], explanation: "\"Leggere\" → \"letto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sara has lost her wallet.", answer: "Sara ha perso il portafoglio.", altAnswers: ["Sara ha perduto il portafoglio.", "Sara ha perso il suo portafoglio."], explanation: "\"Perdere\" → \"perso\" (or \"perduto\"). Your own things usually take just the article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They closed the shop early.", answer: "Hanno chiuso il negozio presto.", altAnswers: ["Loro hanno chiuso il negozio presto."], explanation: "\"Chiudere\" → \"chiuso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you answered? (to a friend)", answer: "Hai risposto?", altAnswers: ["Tu hai risposto?"], explanation: "\"Rispondere\" → \"risposto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You've drunk] too much coffee. (to a friend)", sentence: "___ troppo caffè.", answer: "Hai bevuto", altAnswers: ["Tu hai bevuto"], explanation: "\"Bere\" → \"bevuto\", from the stem \"bev-\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I lived] in Turin for two years.", sentence: "___ due anni a Torino.", answer: "Ho vissuto", altAnswers: ["Io ho vissuto"], explanation: "\"Vivere\" → \"vissuto\"." },
      { type: "word-order", prompt: "Put the words in order to say: We saw a good film on Saturday.", words: ["Sabato", "abbiamo", "visto", "un", "bel", "film."], translation: "We saw a good film on Saturday.", altOrders: [["Abbiamo", "visto", "un", "bel", "film", "sabato."]], explanation: "\"Vedere\" → \"visto\"." },
      { type: "multiple-choice", question: "I did my homework. Which is right?", options: ["Ho fatto i compiti.", "Ho facciuto i compiti.", "Ho fato i compiti.", "Ho fatti i compiti."], correctIndex: 0, explanation: "\"Fatto\": irregular, double t, and no agreement with \"avere\"." },
      { type: "dictation", audio: "Ho letto il libro e ho scritto una recensione.", explanation: "\"Letto\" and \"scritto\": double t in both." },
      { type: "speak", text: "Ieri ho preso il treno, ho letto il giornale e ho bevuto un caffè.", prompt: "Say it in Italian: Yesterday I took the train, read the paper and had a coffee.", tip: "Hold the double consonants: LET-to, not leto.", explanation: "Three irregular participles: \"preso\", \"letto\", \"bevuto\"." },
    ],
  },
  {
    slug: "a2-drill-regular-participles",
    level: "IT-A2",
    number: 3,
    title: "Drill: Regular Participles",
    summary: "Produce forty regular verbs in the passato prossimo, in every person, with and without non.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "-ato, -uto, -ito",
        body: [
          "Present of \"avere\" + participle. -are → \"-ato\", -ere → \"-uto\", -ire → \"-ito\". \"Non\" before \"avere\". New verbs here: \"cucinare\" (to cook), \"prenotare\" (to book), \"ricevere\" (to receive), \"ripetere\" (to repeat), \"seguire\" (to follow), \"spedire\" (to send by post).",
        ],
        examples: [
          { es: "Ho prenotato un tavolo.", en: "I booked a table." },
          { es: "Hai ricevuto il pacco?", en: "Did you get the parcel?" },
          { es: "Abbiamo seguito la lezione.", en: "We followed the lesson." },
          { es: "Non hanno spedito la lettera.", en: "They haven't sent the letter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I booked a table.", answer: "Ho prenotato un tavolo.", altAnswers: ["Io ho prenotato un tavolo."], explanation: "\"Prenotare\" → \"prenotato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you get the parcel? (to a friend)", answer: "Hai ricevuto il pacco?", altAnswers: ["Tu hai ricevuto il pacco?"], explanation: "\"Ricevere\" → \"ricevuto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They haven't sent the letter.", answer: "Non hanno spedito la lettera.", altAnswers: ["Loro non hanno spedito la lettera."], explanation: "\"Spedire\" → \"spedito\"; \"non\" before \"hanno\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I cooked pasta.", answer: "Ho cucinato la pasta.", altAnswers: ["Io ho cucinato la pasta."], explanation: "\"Cucinato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You paid the bill. (to a friend)", answer: "Hai pagato il conto.", altAnswers: ["Tu hai pagato il conto."], explanation: "\"Pagato\": no h needed before -ato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco called his mother.", answer: "Marco ha telefonato a sua madre.", altAnswers: ["Marco ha chiamato sua madre."], explanation: "\"Telefonare a\" or \"chiamare\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We waited for the bus.", answer: "Abbiamo aspettato l'autobus.", altAnswers: ["Noi abbiamo aspettato l'autobus."], explanation: "\"Aspettare\" has no word for for." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you understand? (plural)", answer: "Avete capito?", altAnswers: ["Voi avete capito?"], explanation: "\"Capito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They sold the house.", answer: "Hanno venduto la casa.", altAnswers: ["Loro hanno venduto la casa."], explanation: "\"Venduto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't sleep.", answer: "Non ho dormito.", altAnswers: ["Io non ho dormito."], explanation: "\"Non\" before \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chiara repeated the question.", answer: "Chiara ha ripetuto la domanda.", explanation: "\"Ripetere\" → \"ripetuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't finish the work.", answer: "Non abbiamo finito il lavoro.", altAnswers: ["Noi non abbiamo finito il lavoro."], explanation: "\"Finito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you cleaned the bathroom? (to a friend)", answer: "Hai pulito il bagno?", altAnswers: ["Tu hai pulito il bagno?"], explanation: "\"Pulito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children played in the garden.", answer: "I bambini hanno giocato in giardino.", altAnswers: ["I bambini hanno giocato nel giardino."], explanation: "\"Giocato\": no h needed before -ato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I learnt a lot.", answer: "Ho imparato molto.", altAnswers: ["Io ho imparato molto.", "Ho imparato tanto."], explanation: "\"Imparato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you listen to] the radio? (plural)", sentence: "___ la radio?", answer: "Avete ascoltato", altAnswers: ["Voi avete ascoltato"], explanation: "\"Ascoltare\" takes a direct object." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [didn't believe] the story.", sentence: "Luca ___ alla storia.", answer: "non ha creduto", explanation: "\"Credere a\" → \"creduto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They travelled] a lot.", sentence: "___ molto.", answer: "Hanno viaggiato", altAnswers: ["Loro hanno viaggiato"], explanation: "\"Viaggiato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I met] Giulia at the bar.", sentence: "___ Giulia al bar.", answer: "Ho incontrato", altAnswers: ["Io ho incontrato"], explanation: "\"Incontrare\" → \"incontrato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We preferred] the red wine.", sentence: "___ il vino rosso.", answer: "Abbiamo preferito", altAnswers: ["Noi abbiamo preferito"], explanation: "\"Preferire\" → \"preferito\"." },
      { type: "word-order", prompt: "Put the words in order to say: Sofia didn't call me.", words: ["Sofia", "non", "mi", "ha", "telefonato."], translation: "Sofia didn't call me.", explanation: "\"Mi\" (to me), as in \"mi piace\", goes before \"ha\"." },
      { type: "dictation", audio: "Avete pagato? No, non abbiamo pagato.", explanation: "\"Avete\", \"abbiamo\" and the same participle." },
      { type: "dictation", audio: "Hanno venduto la casa e hanno comprato un appartamento.", explanation: "\"Venduto\", \"comprato\": -ere and -are." },
      { type: "speak", text: "Ho cucinato, ho pulito la cucina e non ho guardato la TV.", prompt: "Say it in Italian: I cooked, cleaned the kitchen and didn't watch TV.", tip: "Keep \"non ho\" together: non-HO.", explanation: "Three regular participles." },
    ],
  },
  {
    slug: "a2-drill-irregular-participles",
    level: "IT-A2",
    number: 4,
    title: "Drill: Irregular Participles",
    summary: "Produce the twenty most common irregular participles in everyday sentences.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "The irregular twenty",
        body: [
          "\"Fatto, detto, scritto, letto, preso, messo, visto, aperto, chiuso, chiesto, risposto, bevuto, vissuto, perso\". Six more: \"acceso\" (\"accendere\", to switch on), \"spento\" (\"spegnere\", to switch off), \"offerto\" (\"offrire\", to offer, to buy someone something), \"rotto\" (\"rompere\", to break), \"deciso\" (\"decidere\"), \"speso\" (\"spendere\", to spend).",
        ],
        examples: [
          { es: "Chi ha rotto il bicchiere?", en: "Who broke the glass?" },
          { es: "Ho spento la luce.", en: "I switched off the light." },
          { es: "Marco ha offerto un caffè a tutti.", en: "Marco bought everyone a coffee." },
          { es: "Abbiamo speso troppo.", en: "We spent too much." },
          { es: "Hai deciso?", en: "Have you decided?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who broke the glass?", answer: "Chi ha rotto il bicchiere?", explanation: "\"Rompere\" → \"rotto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We spent too much.", answer: "Abbiamo speso troppo.", altAnswers: ["Noi abbiamo speso troppo."], explanation: "\"Spendere\" → \"speso\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you decided? (to a friend)", answer: "Hai deciso?", altAnswers: ["Tu hai deciso?"], explanation: "\"Decidere\" → \"deciso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I made a cake.", answer: "Ho fatto una torta.", altAnswers: ["Io ho fatto una torta."], explanation: "\"Fatto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did he say?", answer: "Cosa ha detto?", altAnswers: ["Che cosa ha detto?", "Che ha detto?"], explanation: "\"Detto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We wrote a postcard to grandma.", answer: "Abbiamo scritto una cartolina alla nonna.", altAnswers: ["Noi abbiamo scritto una cartolina alla nonna."], explanation: "\"Scritto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you read this book? (to a friend)", answer: "Hai letto questo libro?", altAnswers: ["Tu hai letto questo libro?"], explanation: "\"Letto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They took a taxi.", answer: "Hanno preso un taxi.", altAnswers: ["Loro hanno preso un taxi."], explanation: "\"Preso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I put the milk in the fridge.", answer: "Ho messo il latte in frigo.", altAnswers: ["Ho messo il latte nel frigo.", "Ho messo il latte nel frigorifero.", "Ho messo il latte in frigorifero."], explanation: "\"Messo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you seen Giulia? (plural)", answer: "Avete visto Giulia?", altAnswers: ["Voi avete visto Giulia?"], explanation: "\"Visto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pharmacy hasn't opened.", answer: "La farmacia non ha aperto.", explanation: "\"Aprire\" → \"aperto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I closed the door.", answer: "Ho chiuso la porta.", altAnswers: ["Io ho chiuso la porta."], explanation: "\"Chiuso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca asked for information.", answer: "Luca ha chiesto informazioni.", altAnswers: ["Luca ha chiesto delle informazioni."], explanation: "\"Chiesto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody answered.", answer: "Nessuno ha risposto.", explanation: "\"Risposto\"; \"nessuno\" before the verb needs no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We drank a glass of wine.", answer: "Abbiamo bevuto un bicchiere di vino.", altAnswers: ["Noi abbiamo bevuto un bicchiere di vino."], explanation: "\"Bevuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandparents [lived] in Bari.", sentence: "I miei nonni ___ a Bari.", answer: "hanno vissuto", explanation: "\"Vissuto\", double s." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I lost] the umbrella.", sentence: "___ l'ombrello.", answer: "Ho perso", altAnswers: ["Io ho perso", "Ho perduto"], explanation: "\"Perso\" is the everyday form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you switch on] the oven? (to a friend)", sentence: "___ il forno?", answer: "Hai acceso", altAnswers: ["Tu hai acceso"], explanation: "\"Accendere\" → \"acceso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Matteo [bought] dinner for everyone.", sentence: "Matteo ___ la cena a tutti.", answer: "ha offerto", explanation: "\"Offrire\" → \"offerto\": to treat someone." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They switched off] their phones.", sentence: "___ i telefoni.", answer: "Hanno spento", altAnswers: ["Loro hanno spento"], explanation: "\"Spegnere\" → \"spento\"." },
      { type: "matching", instructions: "Match the infinitive to its participle.", pairs: [{ left: "rompere", right: "rotto" }, { left: "spendere", right: "speso" }, { left: "decidere", right: "deciso" }, { left: "offrire", right: "offerto" }, { left: "spegnere", right: "spento" }, { left: "accendere", right: "acceso" }], explanation: "Six more irregular participles." },
      { type: "dictation", audio: "Hai chiuso la finestra? Sì, e ho spento la luce.", explanation: "\"Chiuso\", \"spento\"." },
      { type: "dictation", audio: "Abbiamo visto il film e abbiamo letto il libro.", explanation: "\"Visto\", \"letto\" with double t." },
      { type: "speak", text: "Ho fatto la spesa, ho messo tutto in frigo e ho scritto a Marco.", prompt: "Say it in Italian: I did the shopping, put everything in the fridge and wrote to Marco.", tip: "FAT-to, MES-so, SCRIT-to: hold every double consonant.", explanation: "\"Fatto\", \"messo\", \"scritto\"." },
    ],
  },
  {
    slug: "a2-time-expressions-past",
    level: "IT-A2",
    number: 5,
    title: "When Did It Happen?",
    summary: "Place events in the past with ieri, l'altro ieri, la settimana scorsa, tre giorni fa, stamattina and poco fa.",
    duration: "15 min",
    sections: [
      {
        heading: "Ieri, l'altro ieri, stamattina",
        body: [
          "\"Ieri\" is yesterday; add a part of the day for more detail: \"ieri mattina\", \"ieri pomeriggio\", \"ieri sera\". The day before yesterday is \"l'altro ieri\" (also written \"altroieri\").",
          "\"Stamattina\" (this morning) and \"stasera\" (this evening) are short for \"questa mattina\", \"questa sera\". With a past tense, \"stamattina\" means earlier today: \"Stamattina ho bevuto due caffè\". \"Poco fa\" means a moment ago.",
        ],
        examples: [
          { es: "Ieri sera ho guardato la partita.", en: "Last night I watched the match." },
          { es: "L'altro ieri abbiamo cenato da Marco.", en: "The day before yesterday we had dinner at Marco's." },
          { es: "Stamattina ho bevuto due caffè.", en: "This morning I had two coffees." },
          { es: "Ho parlato con Chiara poco fa.", en: "I spoke to Chiara a moment ago." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last night I watched the match.", answer: "Ieri sera ho guardato la partita.", altAnswers: ["Ho guardato la partita ieri sera.", "Ieri sera ho visto la partita.", "Ho visto la partita ieri sera."], explanation: "Last night, meaning yesterday evening, is \"ieri sera\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[This morning] I had two coffees.", sentence: "___ ho bevuto due caffè.", answer: "Stamattina", altAnswers: ["Questa mattina", "Stamani"], explanation: "\"Stamattina\" = \"questa mattina\"." },
        ],
      },
      {
        heading: "Scorso and fa",
        body: [
          "\"Scorso\" (last) follows the noun and agrees with it: \"il mese scorso\", \"l'anno scorso\", \"la settimana scorsa\", \"sabato scorso\". Don't translate last as \"ultimo\" here: \"l'ultima settimana\" means the final week, or the past seven days.",
          "\"Fa\" means ago and, like English, comes after the amount: \"tre giorni fa\", \"due anni fa\", \"un'ora fa\", \"molto tempo fa\".",
        ],
        examples: [
          { es: "La settimana scorsa ho lavorato molto.", en: "Last week I worked a lot." },
          { es: "L'anno scorso abbiamo visitato Palermo.", en: "Last year we visited Palermo." },
          { es: "Ho comprato la macchina due anni fa.", en: "I bought the car two years ago." },
          { es: "Sabato scorso hanno fatto una festa.", en: "Last Saturday they had a party." },
          { es: "Luca ha chiamato un'ora fa.", en: "Luca called an hour ago." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last year we visited Palermo.", answer: "L'anno scorso abbiamo visitato Palermo.", altAnswers: ["Abbiamo visitato Palermo l'anno scorso."], explanation: "\"Scorso\" after the noun: \"l'anno scorso\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought the car two years ago.", answer: "Ho comprato la macchina due anni fa.", altAnswers: ["Due anni fa ho comprato la macchina.", "Ho comprato l'auto due anni fa."], explanation: "\"Fa\" after the amount: \"due anni fa\"." },
          { type: "multiple-choice", question: "Last week I worked a lot. Which is right?", options: ["La settimana scorsa ho lavorato molto.", "La settimana scorso ho lavorato molto.", "L'ultima settimana ho lavorato molto.", "Scorsa settimana ho lavorato molto."], correctIndex: 0, explanation: "\"Scorsa\" agrees with \"settimana\" and follows it." },
        ],
      },
      {
        heading: "Where they go: Quando?",
        body: [
          "Time expressions go at the start or the end of the sentence, as in English: \"Ieri ho lavorato\" or \"Ho lavorato ieri\". Don't put them between \"avere\" and the participle.",
          "To ask when, use \"quando\": \"Quando hai visto Marco?\" The answer can be just the time: \"Tre giorni fa.\"",
        ],
        examples: [
          { es: "Quando hai visto Marco? Tre giorni fa.", en: "When did you see Marco? Three days ago." },
          { es: "Ho finito il libro ieri.", en: "I finished the book yesterday." },
          { es: "Il mese scorso abbiamo cambiato casa.", en: "Last month we moved house." },
        ],
        checkpoint: [
          { type: "word-order", prompt: "Put the words in order to say: I finished the book yesterday.", words: ["Ho", "finito", "il", "libro", "ieri."], translation: "I finished the book yesterday.", altOrders: [["Ieri", "ho", "finito", "il", "libro."]], explanation: "The time word goes at the start or the end." },
          { type: "listen-choose", audio: "Il mese scorso abbiamo cambiato casa.", question: "When did they move house?", options: ["last month", "last week", "a month ago today", "next month"], correctIndex: 0, explanation: "\"Il mese scorso\" = last month." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When did you see Marco? (to a friend)", answer: "Quando hai visto Marco?", altAnswers: ["Tu quando hai visto Marco?"], explanation: "\"Quando\" + passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Three days ago.", answer: "Tre giorni fa.", explanation: "\"Fa\" after the amount." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The day before yesterday we had dinner at Marco's.", answer: "L'altro ieri abbiamo cenato da Marco.", altAnswers: ["Abbiamo cenato da Marco l'altro ieri.", "L'altroieri abbiamo cenato da Marco."], explanation: "\"Da\" + person = at someone's place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last Saturday they had a party.", answer: "Sabato scorso hanno fatto una festa.", altAnswers: ["Hanno fatto una festa sabato scorso."], explanation: "\"Fare una festa\" = to have a party." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca called an hour ago.", answer: "Luca ha chiamato un'ora fa.", altAnswers: ["Luca ha telefonato un'ora fa.", "Un'ora fa ha chiamato Luca."], explanation: "\"Un'ora\": apostrophe, \"ora\" is feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yesterday afternoon I studied.", answer: "Ieri pomeriggio ho studiato.", altAnswers: ["Ho studiato ieri pomeriggio.", "Ieri pomeriggio io ho studiato."], explanation: "\"Ieri\" + part of the day." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I spoke to Chiara [a moment ago].", sentence: "Ho parlato con Chiara ___.", answer: "poco fa", explanation: "\"Poco fa\" = a short time ago." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Last month] we moved house.", sentence: "___ abbiamo cambiato casa.", answer: "Il mese scorso", explanation: "\"Scorso\" follows \"mese\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They visited Venice [a long time ago].", sentence: "Hanno visitato Venezia ___.", answer: "molto tempo fa", altAnswers: ["tanto tempo fa"], explanation: "\"Molto tempo fa\" = a long time ago." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "ieri sera", right: "last night" }, { left: "l'altro ieri", right: "the day before yesterday" }, { left: "stamattina", right: "this morning" }, { left: "la settimana scorsa", right: "last week" }, { left: "due giorni fa", right: "two days ago" }], explanation: "Five ways to place an event in the past." },
      { type: "dictation", audio: "La settimana scorsa ho visto Giulia.", explanation: "\"Scorsa\" agrees with \"settimana\"." },
      { type: "speak", text: "Stamattina ho bevuto un caffè, ieri sera ho visto un film e l'anno scorso ho visitato Roma.", prompt: "Say it in Italian: This morning I had a coffee, last night I saw a film and last year I visited Rome.", tip: "\"Stamattina\": sta-mat-TI-na, double t.", explanation: "Three time expressions at the start of each clause." },
    ],
  },
  {
    slug: "a2-sound-participle-doubles",
    level: "IT-A2",
    number: 6,
    title: "Sounds: Fatto, Finito",
    summary: "Hear and write the double consonants in fatto, detto, scritto, letto and messo, and the single ones in finito, dormito, capito and preso.",
    duration: "15 min",
    sections: [
      {
        heading: "Double: fatto, detto, messo",
        body: [
          "A double consonant in Italian is held longer, with a tiny pause before it is released: \"fatto\" is FAT-to, not FA-to. The irregular participles \"fatto, detto, scritto, letto, rotto\" all have a double t, and \"messo\" has a double s.",
          "Getting it wrong can change the word: \"fatto\" (done) vs \"fato\" (fate). In these participles the stress falls on the vowel just before the double consonant, and that vowel is short.",
        ],
        examples: [
          { es: "Hai fatto colazione?", en: "Have you had breakfast?" },
          { es: "Non ho detto niente.", en: "I didn't say anything." },
          { es: "Ho scritto a mia sorella.", en: "I wrote to my sister." },
          { es: "Dove hai messo il telefono?", en: "Where did you put the phone?" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "fatto", question: "What did you hear?", options: ["fatto", "fato", "fatte", "faccio"], correctIndex: 0, explanation: "A held t: FAT-to." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you had breakfast? (to a friend)", answer: "Hai fatto colazione?", altAnswers: ["Tu hai fatto colazione?"], explanation: "\"Fare colazione\" = to have breakfast; \"fatto\" has a double t." },
        ],
      },
      {
        heading: "Single: finito, dormito, preso",
        body: [
          "Regular participles have a single consonant in the ending: \"finito, dormito, capito, mangiato, venduto\". Don't double the t because \"fatto\" has one.",
          "Some irregular ones are single too: \"preso, chiuso, deciso, speso, perso\". Compare \"messo\" (double s) and \"preso\" (single s, sounding like the z in zoo for many speakers). The auxiliaries \"abbiamo\" and \"hanno\" are double: hold the b and the n.",
        ],
        examples: [
          { es: "Abbiamo finito.", en: "We've finished." },
          { es: "Hai capito?", en: "Did you understand?" },
          { es: "Hanno preso l'autobus.", en: "They took the bus." },
          { es: "Ho messo il cappotto.", en: "I put on my coat." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ho messo il cappotto.", question: "What did you hear?", options: ["Ho messo il cappotto.", "Ho meso il cappotto.", "Ho preso il cappotto.", "Ho messo il capotto."], correctIndex: 0, explanation: "Double s in \"messo\", double p and double t in \"cappotto\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They took] the bus.", sentence: "___ l'autobus.", answer: "Hanno preso", altAnswers: ["Loro hanno preso"], explanation: "\"Hanno\": double n; \"preso\": single s." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've finished.", answer: "Abbiamo finito.", altAnswers: ["Noi abbiamo finito."], explanation: "Double b in \"abbiamo\", single t in \"finito\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't say anything.", answer: "Non ho detto niente.", altAnswers: ["Non ho detto nulla.", "Io non ho detto niente."], explanation: "\"Detto\": double t." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you understand? (to a friend)", answer: "Hai capito?", altAnswers: ["Tu hai capito?"], explanation: "\"Capito\": single t." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wrote to my sister.", answer: "Ho scritto a mia sorella.", altAnswers: ["Io ho scritto a mia sorella."], explanation: "\"Scritto\": double t." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They slept well.", answer: "Hanno dormito bene.", altAnswers: ["Loro hanno dormito bene."], explanation: "\"Hanno\" double, \"dormito\" single." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who broke the window?", answer: "Chi ha rotto la finestra?", explanation: "\"Rotto\": double t." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've read] the letter.", sentence: "___ la lettera.", answer: "Ho letto", altAnswers: ["Io ho letto"], explanation: "\"Letto\": double t, like \"lettera\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [decided] to stay.", sentence: "Abbiamo ___ di restare.", answer: "deciso", explanation: "\"Deciso\": single s." },
      { type: "listen-choose", audio: "Ho letto.", question: "What did you hear?", options: ["Ho letto.", "Ho leto.", "Ho detto.", "Ho fatto."], correctIndex: 0, explanation: "\"Letto\": held t." },
      { type: "listen-choose", audio: "Abbiamo capito.", question: "What did you hear?", options: ["Abbiamo capito.", "Abiamo capito.", "Abbiamo cappito.", "Avevamo capito."], correctIndex: 0, explanation: "Double b in \"abbiamo\", single p in \"capito\"." },
      { type: "dictation", audio: "Hanno fatto la spesa e hanno messo tutto in frigo.", explanation: "\"Hanno\", \"fatto\", \"messo\": three doubles." },
      { type: "dictation", audio: "Abbiamo finito e abbiamo dormito.", explanation: "\"Finito\", \"dormito\": single t." },
      { type: "speak", text: "Ho fatto, ho detto, ho scritto, ho letto, ho messo.", prompt: "Say the five participles with ho.", tip: "Stop briefly before each double consonant: fat-to, det-to, scrit-to, let-to, mes-so.", explanation: "Five double consonants in a row." },
    ],
  },
  {
    slug: "a2-dialogue-lab-weekend",
    level: "IT-A2",
    number: 7,
    title: "Dialogue Lab: What Did You Do This Weekend?",
    summary: "Monday morning in an office in Milano: colleagues ask what you did, describe an exhibition and a dinner out, and react.",
    duration: "15 min",
    sections: [
      {
        heading: "At the coffee machine",
        body: [
          "Monday, 9:15, a design studio in Milano. Francesca meets her colleague Alessandro at the coffee machine. Colleagues of the same age use \"tu\". The opening question is always the same: \"Cosa hai fatto questo weekend?\" or \"Cosa hai fatto di bello?\" (literally, what did you do that was nice?).",
          "Italians say \"il weekend\" or \"il fine settimana\". Notice \"questo weekend\" for the one just gone, used with the past tense.",
        ],
        examples: [
          { es: "Ciao Ale! Cosa hai fatto di bello questo weekend?", en: "Hi Ale! Did you do anything nice this weekend?" },
          { es: "Niente di speciale. Ho dormito tanto!", en: "Nothing special. I slept a lot!" },
          { es: "Sabato ho pulito casa e ho fatto la spesa.", en: "On Saturday I cleaned the flat and did the shopping." },
          { es: "E tu? Hai fatto qualcosa?", en: "And you? Did you do anything?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did you do this weekend? (to a colleague you call tu)", answer: "Cosa hai fatto questo weekend?", altAnswers: ["Che cosa hai fatto questo weekend?", "Cosa hai fatto questo fine settimana?", "Che cosa hai fatto questo fine settimana?", "Cosa hai fatto nel weekend?"], explanation: "\"Questo weekend\" with the past means the one just gone." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Nothing special. [I slept] a lot!", sentence: "Niente di speciale. ___ tanto!", answer: "Ho dormito", altAnswers: ["Io ho dormito"], explanation: "\"Dormire\" → \"dormito\"." },
        ],
      },
      {
        heading: "An exhibition and a dinner out",
        body: [
          "Francesca had a fuller weekend: \"Sabato ho visto una mostra a Palazzo Reale\" (on Saturday I saw an exhibition at the Palazzo Reale). \"Una mostra\" is an exhibition; \"un museo\" is a museum.",
          "\"Mangiare fuori\" means to eat out: \"Domenica abbiamo mangiato fuori con i miei genitori\". With \"abbiamo\" Francesca includes her partner without naming him.",
        ],
        examples: [
          { es: "Sabato ho visto una mostra a Palazzo Reale.", en: "On Saturday I saw an exhibition at the Palazzo Reale." },
          { es: "Ho comprato anche il catalogo.", en: "I bought the catalogue too." },
          { es: "Domenica abbiamo mangiato fuori con i miei genitori.", en: "On Sunday we ate out with my parents." },
          { es: "Abbiamo preso un risotto alla milanese.", en: "We had a risotto alla milanese." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sunday we ate out with my parents.", answer: "Domenica abbiamo mangiato fuori con i miei genitori.", altAnswers: ["Abbiamo mangiato fuori con i miei genitori domenica.", "Domenica abbiamo mangiato fuori con i miei."], explanation: "\"Mangiare fuori\" = to eat out; \"i miei genitori\" keeps the article." },
          { type: "listen-choose", audio: "Sabato ho visto una mostra a Palazzo Reale.", question: "What did Francesca do on Saturday?", options: ["She saw an exhibition.", "She saw a film.", "She visited a market.", "She went to a concert."], correctIndex: 0, explanation: "\"Una mostra\" = an exhibition." },
        ],
      },
      {
        heading: "Reacting",
        body: [
          "Good listeners react: \"Che bello!\" (how lovely!), \"Che fortuna!\" (lucky you!), \"Beata te!\" (lucky you, to a woman; \"beato te\" to a man), \"Che peccato!\" (what a shame!). To ask for more, keep it short: \"E il risotto?\" (and the risotto?), \"Dove avete mangiato?\" (where did you eat?).",
        ],
        examples: [
          { es: "Che bello! Beata te!", en: "How lovely! Lucky you!" },
          { es: "Che peccato, ho perso la mostra.", en: "What a shame, I missed the exhibition." },
          { es: "Io invece ho lavorato tutta la domenica.", en: "I, on the other hand, worked all Sunday." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Francesca says she saw an exhibition and ate out. Alessandro reacts. What does he say?", options: ["Che bello! Beata te!", "Che bello! Beato te!", "Che peccato! Beata te!", "Piacere, beata te!"], correctIndex: 0, explanation: "\"Beata\" agrees with Francesca, a woman." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I, on the other hand, worked all Sunday.", answer: "Io invece ho lavorato tutta la domenica.", altAnswers: ["Invece io ho lavorato tutta la domenica.", "Io invece ho lavorato tutta domenica."], explanation: "\"Invece\" marks a contrast; here \"io\" is needed for the contrast." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Saturday I cleaned the flat and did the shopping.", answer: "Sabato ho pulito casa e ho fatto la spesa.", altAnswers: ["Sabato ho pulito la casa e ho fatto la spesa.", "Sabato ho pulito l'appartamento e ho fatto la spesa."], explanation: "\"Pulire casa\" = to clean the house; \"fare la spesa\" = to do the shopping." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you do anything? (to a friend)", answer: "Hai fatto qualcosa?", altAnswers: ["Tu hai fatto qualcosa?"], explanation: "\"Qualcosa\" = something, anything in a question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought the catalogue too.", answer: "Ho comprato anche il catalogo.", altAnswers: ["Ho anche comprato il catalogo."], explanation: "\"Anche\" usually sits before the word it adds." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had a risotto alla milanese.", answer: "Abbiamo preso un risotto alla milanese.", altAnswers: ["Abbiamo mangiato un risotto alla milanese."], explanation: "\"Prendere\" for food you order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a shame, I missed the exhibition.", answer: "Che peccato, ho perso la mostra.", explanation: "\"Perdere\" also means to miss (an event, a train)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Nothing special]. I slept a lot!", sentence: "___. Ho dormito tanto!", answer: "Niente di speciale", explanation: "\"Niente di\" + adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sunday [we ate out].", sentence: "Domenica ___.", answer: "abbiamo mangiato fuori", explanation: "\"Mangiare fuori\" = eat out." },
      { type: "word-order", prompt: "Put the words in order to say: Did you do anything nice this weekend?", words: ["Cosa", "hai", "fatto", "di", "bello", "questo", "weekend?"], translation: "Did you do anything nice this weekend?", explanation: "\"Cosa hai fatto di bello?\": the standard Monday question." },
      { type: "multiple-choice", question: "Alessandro says he worked all weekend. What do you say?", options: ["Che peccato!", "Beato te!", "Che fortuna!", "Che bello!"], correctIndex: 0, explanation: "Working all weekend calls for sympathy: \"che peccato\"." },
      { type: "dictation", audio: "Domenica abbiamo mangiato fuori.", explanation: "\"Mangiare fuori\" = to eat out." },
      { type: "speak", text: "Sabato ho visto una mostra e domenica ho mangiato fuori con i miei amici. E tu, cosa hai fatto?", prompt: "Tell a colleague: On Saturday I saw an exhibition and on Sunday I ate out with my friends. And you, what did you do?", tip: "Hold the double t in \"fatto\".", explanation: "Two past events, then the question back." },
    ],
  },
  {
    slug: "a2-error-hunt-avere-past",
    level: "IT-A2",
    number: 8,
    title: "Error Hunt: The Past with Avere",
    summary: "Find and fix the typical mistakes: invented participles, agreement with avere, the present for the past, and an unnatural pronoun.",
    duration: "15 min",
    sections: [
      {
        heading: "Invented participles",
        body: [
          "Learners make regular participles out of irregular verbs: \"ho facciuto\" (from \"faccio\"), \"ho prenduto\", \"ho aprito\", \"ho bevato\". The right forms are \"ho fatto\", \"ho preso\", \"ho aperto\", \"ho bevuto\".",
        ],
        examples: [
          { es: "Ho fatto una passeggiata.", en: "I went for a walk." },
          { es: "Hai preso l'ombrello?", en: "Did you take the umbrella?" },
          { es: "Chi ha aperto la porta?", en: "Who opened the door?" },
          { es: "Abbiamo bevuto un caffè insieme.", en: "We had a coffee together." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho facciuto una passeggiata.\" Write it correctly: I went for a walk.", source: "I went for a walk.", answer: "Ho fatto una passeggiata.", altAnswers: ["Io ho fatto una passeggiata."], explanation: "\"Fare\" → \"fatto\", not a form built on \"faccio\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Hai prenduto l'ombrello?\" Write it correctly: Did you take the umbrella?", source: "Did you take the umbrella? (to a friend)", answer: "Hai preso l'ombrello?", altAnswers: ["Tu hai preso l'ombrello?"], explanation: "\"Prendere\" → \"preso\"." },
        ],
      },
      {
        heading: "Agreement and tense",
        body: [
          "\"Ho mangiata la pizza\" is wrong: with \"avere\" the participle doesn't agree with the object that follows. Write \"Ho mangiato la pizza\". (It does agree with a pronoun like \"la\" before the verb: that comes in Unit 7.)",
          "\"Ieri mangio la pizza\" uses the present for a finished event. Spoken Italian sometimes does this when telling a story, but for a plain statement about yesterday use the passato prossimo: \"Ieri ho mangiato la pizza\".",
        ],
        examples: [
          { es: "Ho mangiato la pizza.", en: "I ate the pizza." },
          { es: "Giulia ha comprato le scarpe nuove.", en: "Giulia bought the new shoes." },
          { es: "Ieri ho lavorato fino a tardi.", en: "Yesterday I worked late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Giulia ha comprate le scarpe nuove.\" Write it correctly: Giulia bought the new shoes.", source: "Giulia bought the new shoes.", answer: "Giulia ha comprato le scarpe nuove.", explanation: "With \"avere\", \"comprato\" stays -o." },
          { type: "fill-blank", prompt: "A learner wrote \"Ieri lavoro fino a tardi.\" Write the Italian for the bold words.", en: "Yesterday [I worked] late.", sentence: "Ieri ___ fino a tardi.", answer: "ho lavorato", explanation: "A finished event yesterday: passato prossimo." },
        ],
      },
      {
        heading: "Ho visto lui?",
        body: [
          "\"Ho visto lui ieri\" is grammatical but sounds like a contrast (him, not her). The natural sentence is \"L'ho visto ieri\" (I saw him yesterday): a short pronoun before the verb. Learn \"l'ho visto\" and \"l'ho vista\" (her) as phrases now; Unit 7 explains them.",
        ],
        examples: [
          { es: "Marco? L'ho visto ieri.", en: "Marco? I saw him yesterday." },
          { es: "Giulia? L'ho vista stamattina.", en: "Giulia? I saw her this morning." },
          { es: "Ho visto lui, non lei.", en: "I saw him, not her." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Your friend asks \"Hai visto Marco?\" What's the natural answer?", options: ["Sì, l'ho visto ieri.", "Sì, ho visto lui ieri.", "Sì, ho visto ieri lui.", "Sì, lo ho visto ieri."], correctIndex: 0, explanation: "\"L'ho visto\": the short pronoun before \"ho\", with an apostrophe." },
          { type: "dictation", audio: "Giulia? L'ho vista stamattina.", explanation: "\"L'ho vista\": I saw her." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Chi ha aprito la porta?\" Write it correctly: Who opened the door?", source: "Who opened the door?", answer: "Chi ha aperto la porta?", explanation: "\"Aprire\" → \"aperto\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Abbiamo bevato un caffè insieme.\" Write it correctly: We had a coffee together.", source: "We had a coffee together.", answer: "Abbiamo bevuto un caffè insieme.", altAnswers: ["Abbiamo preso un caffè insieme."], explanation: "\"Bere\" → \"bevuto\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho mangiata la pizza.\" Write it correctly: I ate the pizza.", source: "I ate the pizza.", answer: "Ho mangiato la pizza.", altAnswers: ["Io ho mangiato la pizza."], explanation: "No agreement with \"avere\" and a following object." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ieri Luca guarda un film.\" Write it correctly: Yesterday Luca watched a film.", source: "Yesterday Luca watched a film.", answer: "Ieri Luca ha guardato un film.", altAnswers: ["Ieri Luca ha visto un film.", "Luca ha guardato un film ieri.", "Luca ha visto un film ieri."], explanation: "Finished event: passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho scrivuto a mia madre.\" Write it correctly: I wrote to my mother.", source: "I wrote to my mother.", answer: "Ho scritto a mia madre.", altAnswers: ["Io ho scritto a mia madre."], explanation: "\"Scrivere\" → \"scritto\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho chiesuto il conto.\" Write it correctly: I asked for the bill.", source: "I asked for the bill.", answer: "Ho chiesto il conto.", altAnswers: ["Io ho chiesto il conto."], explanation: "\"Chiedere\" → \"chiesto\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Hanno messe le borse in macchina.\" Write the Italian for the bold words.", en: "They [put] the bags in the car.", sentence: "Hanno ___ le borse in macchina.", answer: "messo", explanation: "\"Messo\" doesn't agree with \"le borse\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Ho non capito.\" Write the Italian for the bold words.", en: "[I didn't understand].", sentence: "___.", answer: "Non ho capito", explanation: "\"Non\" before \"ho\"." },
      { type: "word-order", prompt: "Put the words in order to say: Marco? I saw him yesterday.", words: ["Marco?", "L'ho", "visto", "ieri."], translation: "Marco? I saw him yesterday.", explanation: "\"L'ho visto\": the natural way to say I saw him." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Abbiamo letto il giornale.", "Abbiamo leggiuto il giornale.", "Abbiamo letta il giornale.", "Abbiamo leggato il giornale."], correctIndex: 0, explanation: "\"Leggere\" → \"letto\"." },
      { type: "dictation", audio: "Ieri ho preso il treno e ho letto un libro.", explanation: "\"Preso\", \"letto\": irregular." },
      { type: "speak", text: "Ho fatto la spesa, ho preso il treno e ho bevuto un caffè.", prompt: "Say it correctly: I did the shopping, took the train and had a coffee.", tip: "No \"facciuto\", \"prenduto\" or \"bevato\": fatto, preso, bevuto.", explanation: "Three corrected participles." },
    ],
  },
  {
    slug: "a2-transform-today-yesterday",
    level: "IT-A2",
    number: 9,
    title: "Transformations: Today to Yesterday",
    summary: "Turn present-tense routines into yesterday's story: oggi lavoro becomes ieri ho lavorato.",
    duration: "15 min",
    sections: [
      {
        heading: "Oggi → ieri",
        body: [
          "To move a sentence into the past, change two things: the verb becomes \"avere\" + participle, and the time word moves back. \"Oggi\" → \"ieri\", \"stasera\" → \"ieri sera\", \"questa settimana\" → \"la settimana scorsa\", \"quest'anno\" → \"l'anno scorso\".",
          "The person stays the same, so the form of \"avere\" matches the old ending: \"lavoro\" → \"ho lavorato\", \"lavoriamo\" → \"abbiamo lavorato\", \"lavorano\" → \"hanno lavorato\".",
        ],
        examples: [
          { es: "Oggi lavoro da casa. → Ieri ho lavorato da casa.", en: "Today I'm working from home. → Yesterday I worked from home." },
          { es: "Stasera ceniamo tardi. → Ieri sera abbiamo cenato tardi.", en: "Tonight we're having dinner late. → Last night we had dinner late." },
          { es: "Questa settimana Luca studia molto. → La settimana scorsa Luca ha studiato molto.", en: "This week Luca is studying a lot. → Last week Luca studied a lot." },
          { es: "Quest'anno visitano la Sicilia. → L'anno scorso hanno visitato la Sicilia.", en: "This year they're visiting Sicily. → Last year they visited Sicily." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Oggi lavoro da casa\" to yesterday and write: Yesterday I worked from home.", source: "Yesterday I worked from home.", answer: "Ieri ho lavorato da casa.", altAnswers: ["Ho lavorato da casa ieri.", "Ieri io ho lavorato da casa."], explanation: "\"Lavoro\" → \"ho lavorato\"; \"oggi\" → \"ieri\"." },
          { type: "translate", direction: "en-es", prompt: "Change \"Stasera ceniamo tardi\" to the past and write: Last night we had dinner late.", source: "Last night we had dinner late.", answer: "Ieri sera abbiamo cenato tardi.", altAnswers: ["Abbiamo cenato tardi ieri sera."], explanation: "\"Ceniamo\" → \"abbiamo cenato\"." },
        ],
      },
      {
        heading: "Irregular ripples",
        body: [
          "Irregular verbs in the present don't predict the participle: \"faccio\" → \"ho fatto\", \"prendo\" → \"ho preso\", \"leggo\" → \"ho letto\", \"bevo\" → \"ho bevuto\", \"dico\" → \"ho detto\". \"Non\" stays before the verb, which is now \"avere\": \"Non bevo caffè\" → \"Non ho bevuto caffè\".",
          "Some present-tense habits change meaning a little: \"Il sabato faccio sport\" is a routine, but \"Sabato ho fatto sport\" is one Saturday.",
        ],
        examples: [
          { es: "Faccio colazione al bar. → Ho fatto colazione al bar.", en: "I have breakfast at the bar. → I had breakfast at the bar." },
          { es: "Prendi la metro? → Hai preso la metro?", en: "Are you taking the metro? → Did you take the metro?" },
          { es: "Non bevo caffè. → Non ho bevuto caffè.", en: "I don't drink coffee. → I didn't drink coffee." },
          { es: "Giulia legge il giornale. → Giulia ha letto il giornale.", en: "Giulia reads the paper. → Giulia read the paper." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Prendi la metro?\" to the past and write: Did you take the metro?", source: "Did you take the metro? (to a friend)", answer: "Hai preso la metro?", altAnswers: ["Tu hai preso la metro?", "Hai preso la metropolitana?"], explanation: "\"Prendi\" → \"hai preso\"." },
          { type: "fill-blank", prompt: "Change \"Non bevo caffè\" to the past. Write the Italian for the bold words.", en: "[I didn't drink] coffee.", sentence: "___ caffè.", answer: "Non ho bevuto", altAnswers: ["Io non ho bevuto"], explanation: "\"Non\" before \"ho\"; \"bere\" → \"bevuto\"." },
          { type: "listen-choose", audio: "Giulia ha letto il giornale.", question: "What did you hear?", options: ["Giulia read the paper.", "Giulia reads the paper.", "Giulia bought the paper.", "Giulia is reading the paper."], correctIndex: 0, explanation: "\"Ha letto\" is the past of \"legge\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Change \"Faccio colazione al bar\" to the past and write: I had breakfast at the bar.", source: "I had breakfast at the bar.", answer: "Ho fatto colazione al bar.", altAnswers: ["Io ho fatto colazione al bar."], explanation: "\"Faccio\" → \"ho fatto\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Quest'anno visitano la Sicilia\" to last year and write: Last year they visited Sicily.", source: "Last year they visited Sicily.", answer: "L'anno scorso hanno visitato la Sicilia.", altAnswers: ["Hanno visitato la Sicilia l'anno scorso."], explanation: "\"Visitano\" → \"hanno visitato\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Oggi scrivo a Marco\" to yesterday and write: Yesterday I wrote to Marco.", source: "Yesterday I wrote to Marco.", answer: "Ieri ho scritto a Marco.", altAnswers: ["Ho scritto a Marco ieri."], explanation: "\"Scrivo\" → \"ho scritto\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Stasera vedete un film?\" to the past and write: Did you see a film last night? (plural)", source: "Did you see a film last night? (plural)", answer: "Ieri sera avete visto un film?", altAnswers: ["Avete visto un film ieri sera?"], explanation: "\"Vedete\" → \"avete visto\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Questa settimana non lavoriamo\" to last week and write: Last week we didn't work.", source: "Last week we didn't work.", answer: "La settimana scorsa non abbiamo lavorato.", altAnswers: ["Non abbiamo lavorato la settimana scorsa."], explanation: "\"Non\" before \"abbiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Oggi Chiara dice la verità\" to yesterday and write: Yesterday Chiara told the truth.", source: "Yesterday Chiara told the truth.", answer: "Ieri Chiara ha detto la verità.", altAnswers: ["Chiara ha detto la verità ieri."], explanation: "\"Dice\" → \"ha detto\"." },
      { type: "fill-blank", prompt: "Change \"Oggi apro il negozio alle nove\" to yesterday. Write the Italian for the bold words.", en: "Yesterday [I opened] the shop at nine.", sentence: "Ieri ___ il negozio alle nove.", answer: "ho aperto", explanation: "\"Apro\" → \"ho aperto\"." },
      { type: "fill-blank", prompt: "Change \"Stasera i ragazzi bevono una birra\" to the past. Write the Italian for the bold words.", en: "Last night the boys [had] a beer.", sentence: "Ieri sera i ragazzi ___ una birra.", answer: "hanno bevuto", altAnswers: ["hanno preso"], explanation: "\"Bevono\" → \"hanno bevuto\"." },
      { type: "word-order", prompt: "Put the words in order to say: Yesterday Giulia read the paper at the bar.", words: ["Ieri", "Giulia", "ha", "letto", "il", "giornale", "al", "bar."], translation: "Yesterday Giulia read the paper at the bar.", explanation: "\"Legge\" → \"ha letto\"." },
      { type: "multiple-choice", question: "\"Oggi prendo il treno.\" In the past, yesterday:", options: ["Ieri ho preso il treno.", "Ieri prendo il treno.", "Ieri ho prenduto il treno.", "Oggi ho preso il treno ieri."], correctIndex: 0, explanation: "\"Prendo\" → \"ho preso\"; \"oggi\" → \"ieri\"." },
      { type: "dictation", audio: "Ieri ho fatto colazione al bar.", explanation: "\"Faccio\" → \"ho fatto\"." },
      { type: "speak", text: "Ieri ho lavorato da casa, ho letto il giornale e la sera ho cenato con Marco.", prompt: "Retell this in the past: Oggi lavoro da casa, leggo il giornale e la sera ceno con Marco. Start with: Ieri ...", tip: "Every verb now needs \"ho\".", explanation: "Three verbs moved into the passato prossimo." },
    ],
  },
  {
    slug: "a2-mission-diary",
    level: "IT-A2",
    number: 10,
    title: "Real-World Mission: A Diary Entry",
    summary: "Write a short diary entry about yesterday, in order, with the passato prossimo and time words.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "Caro diario",
        body: [
          "An Italian diary entry starts with the day and date, \"Martedì 14 marzo\", then \"Caro diario,\". Days and months have no capital letter, and the number comes before the month.",
          "Put the day in order with \"prima\" (first), \"poi\" (then), \"dopo\" (afterwards) and \"alla fine\" (in the end). Each one starts a sentence: \"Prima ho fatto colazione, poi ho preso l'autobus.\"",
        ],
        examples: [
          { es: "Lunedì 3 aprile. Caro diario, oggi ho avuto una giornata lunga.", en: "Monday 3 April. Dear diary, I had a long day today." },
          { es: "Prima ho fatto colazione, poi ho preso l'autobus.", en: "First I had breakfast, then I took the bus." },
          { es: "Dopo ho lavorato fino alle sei.", en: "Afterwards I worked until six." },
          { es: "Alla fine ho cenato con Sara.", en: "In the end I had dinner with Sara." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First I had breakfast, then I took the bus.", answer: "Prima ho fatto colazione, poi ho preso l'autobus.", altAnswers: ["Prima ho fatto colazione e poi ho preso l'autobus."], explanation: "\"Prima ... poi\" orders the events." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the end] I had dinner with Sara.", sentence: "___ ho cenato con Sara.", answer: "Alla fine", explanation: "\"Alla fine\" = in the end, finally." },
        ],
      },
      {
        heading: "Small details",
        body: [
          "A good diary entry adds a detail or two: what you ate, who called, what you bought, how much it cost. Use the passato prossimo for every event and the present for how you feel now: \"Adesso sono stanco\" (now I'm tired).",
        ],
        examples: [
          { es: "A pranzo ho mangiato un panino in ufficio.", en: "At lunch I ate a sandwich in the office." },
          { es: "Ho comprato un libro: ho speso quindici euro.", en: "I bought a book: I spent fifteen euros." },
          { es: "Mia madre ha telefonato alle nove.", en: "My mother called at nine." },
          { es: "Adesso sono stanca. Buonanotte!", en: "Now I'm tired. Good night!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At lunch I ate a sandwich in the office.", answer: "A pranzo ho mangiato un panino in ufficio.", altAnswers: ["Ho mangiato un panino in ufficio a pranzo."], explanation: "\"A pranzo\" = at lunch; \"in ufficio\" without an article." },
          { type: "listen-choose", audio: "Mia madre ha telefonato alle nove.", question: "What happened at nine?", options: ["My mother called.", "I called my mother.", "My mother arrived.", "My mother went to bed."], correctIndex: 0, explanation: "\"Ha telefonato\" = called; \"mia madre\" is the subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dear diary, I had a long day today.", answer: "Caro diario, oggi ho avuto una giornata lunga.", altAnswers: ["Caro diario, oggi ho avuto una lunga giornata."], explanation: "\"Avuto\": the participle of \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Afterwards I worked until six.", answer: "Dopo ho lavorato fino alle sei.", altAnswers: ["Poi ho lavorato fino alle sei."], explanation: "\"Fino alle\" + hour." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought a book: I spent fifteen euros.", answer: "Ho comprato un libro: ho speso quindici euro.", altAnswers: ["Ho comprato un libro e ho speso quindici euro.", "Ho comprato un libro: ho speso 15 euro."], explanation: "\"Euro\" doesn't change in the plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the afternoon I wrote three emails.", answer: "Il pomeriggio ho scritto tre email.", altAnswers: ["Nel pomeriggio ho scritto tre email.", "Il pomeriggio ho scritto tre mail."], explanation: "\"Email\" is invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Then I watched a series on TV.", answer: "Poi ho guardato una serie in TV.", altAnswers: ["Poi ho visto una serie in TV.", "Poi ho guardato una serie alla TV."], explanation: "\"In TV\" = on TV." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[My mother called] at nine.", sentence: "___ alle nove.", answer: "Mia madre ha telefonato", altAnswers: ["Mia madre ha chiamato"], explanation: "No article with \"mia madre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Now [I'm tired]. Good night!", sentence: "Adesso ___. Buonanotte!", answer: "sono stanco", altAnswers: ["sono stanca"], explanation: "How you feel now: present of \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: First I had breakfast, then I read the paper.", words: ["Prima", "ho", "fatto", "colazione,", "poi", "ho", "letto", "il", "giornale."], translation: "First I had breakfast, then I read the paper.", explanation: "\"Prima ... poi\"." },
      { type: "multiple-choice", question: "How does an Italian diary entry usually start?", options: ["Martedì 14 marzo. Caro diario,", "Martedì, Marzo 14. Caro diario,", "14 Marzo Martedì. Cara diario,", "Martedì 14 marzo. Caro diaria,"], correctIndex: 0, explanation: "Day, number, month in lower case; \"caro diario\"." },
      { type: "dictation", audio: "Prima ho fatto colazione, poi ho preso l'autobus.", explanation: "\"Fatto\", \"preso\"." },
      { type: "speak", text: "Caro diario, oggi ho lavorato molto. A pranzo ho mangiato un panino, poi ho scritto tre email. Alla fine ho cenato con Sara.", prompt: "Read your diary entry aloud: Dear diary, today I worked a lot. At lunch I ate a sandwich, then I wrote three emails. In the end I had dinner with Sara.", tip: "Pause after each time word: prima, poi, alla fine.", explanation: "A whole diary entry in the passato prossimo." },
    ],
  },
  {
    slug: "a2-spiral-a1-review",
    level: "IT-A2",
    number: 11,
    title: "Spiral Review: A1 in the Past",
    summary: "Retell Beginner situations in the past: the bar, prices, family and times, all with the passato prossimo.",
    duration: "16 min",
    kind: "review",
    sections: [
      {
        heading: "At the bar and the restaurant",
        body: [
          "Everything you did at the bar in Beginner can now be told as a story: \"Ho preso un cappuccino e un cornetto\", \"Ho pagato alla cassa\", \"Abbiamo ordinato due pizze\", \"Ho chiesto il conto\".",
        ],
        examples: [
          { es: "Ho preso un cappuccino e un cornetto.", en: "I had a cappuccino and a croissant." },
          { es: "Ho pagato due euro e ottanta.", en: "I paid two euros eighty." },
          { es: "Abbiamo ordinato due pizze e una birra.", en: "We ordered two pizzas and a beer." },
          { es: "Il cameriere ha portato il conto.", en: "The waiter brought the bill." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had a cappuccino and a croissant.", answer: "Ho preso un cappuccino e un cornetto.", altAnswers: ["Io ho preso un cappuccino e un cornetto.", "Ho preso un cappuccino e una brioche."], explanation: "\"Prendere\" for what you have at the bar." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We ordered two pizzas and a beer.", answer: "Abbiamo ordinato due pizze e una birra.", altAnswers: ["Noi abbiamo ordinato due pizze e una birra."], explanation: "\"Pizza\" → \"pizze\"." },
        ],
      },
      {
        heading: "Family and possessives",
        body: [
          "Possessives work as before: no article with one family member (\"mia sorella\", \"tuo padre\"), the article in the plural (\"i miei genitori\"). Only the verb changes: \"Mia sorella ha comprato una casa\".",
        ],
        examples: [
          { es: "Mia sorella ha comprato una casa a Bologna.", en: "My sister bought a house in Bologna." },
          { es: "I miei genitori hanno venduto la macchina.", en: "My parents sold their car." },
          { es: "Hai telefonato a tuo fratello?", en: "Did you call your brother?" },
          { es: "Nostro figlio ha finito la scuola.", en: "Our son has finished school." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister bought a house in Bologna.", answer: "Mia sorella ha comprato una casa a Bologna.", explanation: "\"Mia sorella\": no article with a single family member." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[My parents sold] their car.", sentence: "___ la macchina.", answer: "I miei genitori hanno venduto", explanation: "Plural family: \"i miei\"; \"hanno venduto\"." },
        ],
      },
      {
        heading: "Times and prices",
        body: [
          "Times and prices from Beginner fit straight into the past: \"Ho lavorato dalle nove alle sei\", \"Abbiamo aspettato venti minuti\", \"Ho speso cento euro\". To ask how much someone spent: \"Quanto hai speso?\".",
        ],
        examples: [
          { es: "Ho lavorato dalle nove alle sei.", en: "I worked from nine to six." },
          { es: "Abbiamo aspettato venti minuti.", en: "We waited twenty minutes." },
          { es: "Quanto hai speso? Cento euro.", en: "How much did you spend? A hundred euros." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much did you spend? (to a friend)", answer: "Quanto hai speso?", altAnswers: ["Tu quanto hai speso?"], explanation: "\"Spendere\" → \"speso\"." },
          { type: "dictation", audio: "Abbiamo aspettato venti minuti.", explanation: "\"Abbiamo\": double b." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I paid at the till.", answer: "Ho pagato alla cassa.", altAnswers: ["Io ho pagato alla cassa."], explanation: "\"Alla cassa\" = at the till." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The waiter brought the bill.", answer: "Il cameriere ha portato il conto.", explanation: "\"Portare\" → \"portato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you call your brother? (to a friend)", answer: "Hai telefonato a tuo fratello?", altAnswers: ["Hai chiamato tuo fratello?", "Tu hai telefonato a tuo fratello?"], explanation: "\"Tuo fratello\": no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I worked from nine to six.", answer: "Ho lavorato dalle nove alle sei.", altAnswers: ["Io ho lavorato dalle nove alle sei."], explanation: "\"Dalle ... alle\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Our son has finished school.", answer: "Nostro figlio ha finito la scuola.", explanation: "\"Nostro figlio\": no article with a single family member." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We bought two tickets at the tobacconist's.", answer: "Abbiamo comprato due biglietti in tabaccheria.", altAnswers: ["Abbiamo comprato due biglietti dal tabaccaio.", "Abbiamo comprato due biglietti alla tabaccheria."], explanation: "Bus tickets are sold \"in tabaccheria\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I paid] two euros eighty.", sentence: "___ due euro e ottanta.", answer: "Ho pagato", altAnswers: ["Io ho pagato"], explanation: "\"Pagato\": no h before -ato." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[My friends had] fish.", sentence: "___ il pesce.", answer: "I miei amici hanno preso", altAnswers: ["I miei amici hanno mangiato", "Le mie amiche hanno preso", "Le mie amiche hanno mangiato"], explanation: "\"I miei amici\" with the article; \"prendere\" for ordering." },
      { type: "word-order", prompt: "Put the words in order to say: Yesterday my brother didn't answer.", words: ["Ieri", "mio", "fratello", "non", "ha", "risposto."], translation: "Yesterday my brother didn't answer.", explanation: "\"Risposto\"; \"non\" before \"ha\"." },
      { type: "multiple-choice", question: "My parents bought a flat. Which is right?", options: ["I miei genitori hanno comprato un appartamento.", "Miei genitori hanno comprato un appartamento.", "I miei genitori ha comprato un appartamento.", "I miei genitori hanno comprati un appartamento."], correctIndex: 0, explanation: "Article with plural family; \"hanno comprato\"." },
      { type: "dictation", audio: "Ho preso un caffè e ho pagato un euro e venti.", explanation: "Prices with \"e\": \"un euro e venti\"." },
      { type: "speak", text: "Stamattina ho preso un cappuccino al bar e ho pagato due euro. Poi ho telefonato a mia sorella.", prompt: "Say it in Italian: This morning I had a cappuccino at the bar and paid two euros. Then I called my sister.", tip: "cap-puc-CI-no: two doubles.", explanation: "Bar, price and family in the past." },
    ],
  },
];

export const IT_A2_U01_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a diary entry about last weekend. Say what you did on Saturday and on Sunday, in order (prima, poi, alla fine), with at least five different verbs in the passato prossimo, including three irregular ones (fatto, preso, visto, letto, scritto...). Add one thing you didn't do and one detail such as a price or a time.",
  minWords: 40,
  maxWords: 100,
  rubric: [
    "Uses the passato prossimo with the right form of avere (ho, hai, ha, abbiamo, avete, hanno)",
    "Spells regular participles correctly (-ato, -uto, -ito) and uses at least three irregular ones (fatto, preso, visto, letto...)",
    "Keeps the participle in -o after avere, with no agreement with the object",
    "Orders events with time words (sabato, domenica, prima, poi, alla fine) and puts non before avere",
  ],
  modelAnswer: "Domenica 12 maggio. Caro diario, sabato mattina ho fatto la spesa al mercato e ho speso venti euro. Poi ho pulito casa e ho letto un po'. La sera ho visto un film con Luca. Domenica ho dormito fino alle dieci, poi ho preso il treno per Como e ho mangiato in un piccolo ristorante sul lago. Non ho guardato il telefono per tutto il giorno! Alla fine ho scritto a mia madre.",
  explanation: "Every event uses \"avere\" + participle: regular \"pulito\", \"dormito\", \"mangiato\", \"guardato\" and irregular \"fatto\", \"speso\", \"letto\", \"visto\", \"preso\", \"scritto\". The participles stay in -o (\"ho fatto la spesa\"), and \"non\" comes before \"ho\". \"Prima\", \"poi\" and \"alla fine\" put the day in order.",
};
