// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u20.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 20: The Passive. Essere + participle, venire in simple
// tenses, andare for obligation, the si passivante, the passive in news and
// signs. Conventions: docs/italian-course/authoring.md.
export const IT_B1_U20: Lesson[] = [
  {
    slug: "b1-passive-essere",
    level: "IT-B1",
    number: 1,
    title: "The Passive with Essere",
    summary: "Form the passive with essere + participle: la Divina Commedia è stata scritta da Dante; agreement, da for the agent, and the passive in every tense.",
    duration: "17 min",
    sections: [
      {
        heading: "È stata scritta da Dante",
        body: [
          "The passive puts the thing done in first place: \"Dante ha scritto la Divina Commedia\" (active) becomes \"La Divina Commedia è stata scritta da Dante\" (passive). The person or thing that does the action is introduced by \"da\", combined with the article: \"dal\", \"dalla\", \"dai\".",
          "The participle agrees with the subject, like any participle after \"essere\": \"Il ponte è stato costruito\", \"La chiesa è stata costruita\", \"I ponti sono stati costruiti\", \"Le case sono state costruite\".",
          "Only a direct object can become the subject. English I was given a book or she was told has no Italian passive copy: the person is an indirect object (\"a me\", \"a lei\"). Say \"Mi hanno regalato un libro\" or \"Mi è stato regalato un libro\" (the book is the subject), and \"Le hanno detto\", never \"sono stato dato\" or \"è stata detta\". In conversation Italians often avoid the passive altogether with a plain \"loro\" verb: \"Mi hanno rubato la bici\" (my bike was stolen).",
        ],
        examples: [
          { es: "La Divina Commedia è stata scritta da Dante.", en: "The Divine Comedy was written by Dante." },
          { es: "La cupola del Duomo di Firenze è stata progettata da Brunelleschi.", en: "The dome of Florence Cathedral was designed by Brunelleschi." },
          { es: "Il ladro è stato arrestato dalla polizia.", en: "The thief was arrested by the police." },
          { es: "Le lettere sono state spedite ieri.", en: "The letters were sent yesterday." },
          { es: "I biglietti sono stati venduti in un'ora.", en: "The tickets were sold in an hour." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The thief was arrested by the police.", answer: "Il ladro è stato arrestato dalla polizia.", explanation: "\"Essere\" + participle + \"dalla\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The letters [were sent] yesterday.", sentence: "Le lettere ___ ieri.", answer: "sono state spedite", altAnswers: ["sono state inviate", "sono state mandate"], explanation: "Feminine plural: \"state spedite\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["La chiesa è stata costruita nel Trecento.", "La chiesa è stato costruito nel Trecento.", "La chiesa ha stata costruita nel Trecento.", "La chiesa è stata costruito nel Trecento."], correctIndex: 0, explanation: "Both participles agree: \"stata costruita\"." },
        ],
      },
      {
        heading: "Every tense",
        body: [
          "Only \"essere\" changes tense; the main participle stays: \"è scritto\" (is written), \"è stato scritto\" (was written / has been written), \"era stato scritto\" (had been written), \"sarà scritto\" (will be written), \"sarebbe stato scritto\" (would have been written).",
          "In the passato prossimo there are two participles: \"stato\" and the main verb, both agreeing: \"La casa è stata venduta\".",
        ],
        examples: [
          { es: "Il pane è fatto a mano.", en: "The bread is made by hand." },
          { es: "Il nuovo stadio sarà inaugurato a maggio.", en: "The new stadium will be opened in May." },
          { es: "La casa era già stata venduta.", en: "The house had already been sold." },
          { es: "Il progetto sarebbe stato approvato, ma mancavano i soldi.", en: "The project would have been approved, but there was no money." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The new stadium will be opened in May.", answer: "Il nuovo stadio sarà inaugurato a maggio.", altAnswers: ["Il nuovo stadio sarà aperto a maggio.", "Il nuovo stadio verrà inaugurato a maggio."], explanation: "Future: \"sarà\" + participle." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The house had already been sold.", answer: "La casa era già stata venduta.", explanation: "Pluperfect: \"era stata\" + participle." },
        ],
      },
      {
        heading: "Il museo è aperto: state or action?",
        body: [
          "Some \"essere\" + participle sentences describe a state, not an action: \"Il museo è aperto\" (the museum is open), \"La porta è chiusa\", \"Il negozio è chiuso per ferie\". These are adjectives really, and they're very common on signs.",
          "Compare \"La porta è chiusa\" (it's closed: a state) with \"La porta è stata chiusa alle otto\" (someone closed it at eight: an action).",
        ],
        examples: [
          { es: "Il museo è aperto fino alle sette.", en: "The museum is open until seven." },
          { es: "Chiuso per ferie.", en: "Closed for vacation." },
          { es: "La porta è stata chiusa alle otto.", en: "The door was closed at eight." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il museo è aperto fino alle sette.", question: "What does the sign say?", options: ["The museum is open until seven.", "The museum was opened at seven.", "The museum will open at seven.", "The museum is closed at seven."], correctIndex: 0, explanation: "\"È aperto\": a state." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The door was closed at eight.", answer: "La porta è stata chiusa alle otto.", altAnswers: ["La porta è stata chiusa alle 8."], explanation: "An action at a time: \"è stata chiusa\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Divine Comedy was written by Dante.", answer: "La Divina Commedia è stata scritta da Dante.", altAnswers: ["La Divina Commedia fu scritta da Dante."], explanation: "\"Da\" for the author." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tickets were sold in an hour.", answer: "I biglietti sono stati venduti in un'ora.", explanation: "Masculine plural agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bread is made by hand.", answer: "Il pane è fatto a mano.", altAnswers: ["Il pane viene fatto a mano."], explanation: "Present passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum is open until seven.", answer: "Il museo è aperto fino alle sette.", altAnswers: ["Il museo è aperto fino alle 7.", "Il museo resta aperto fino alle sette."], explanation: "A state: \"è aperto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dome was designed by Brunelleschi.", answer: "La cupola è stata progettata da Brunelleschi.", altAnswers: ["La cupola fu progettata da Brunelleschi."], explanation: "Feminine agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The match will be shown on TV.", answer: "La partita sarà trasmessa in TV.", altAnswers: ["La partita sarà trasmessa in televisione.", "La partita verrà trasmessa in TV."], explanation: "Future passive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The project [would have been approved], but there was no money.", sentence: "Il progetto ___, ma mancavano i soldi.", answer: "sarebbe stato approvato", explanation: "Past conditional passive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The window [was broken] by a ball.", sentence: "La finestra ___ da un pallone.", answer: "è stata rotta", explanation: "\"Stata rotta\", feminine." },
      { type: "word-order", prompt: "Put the words in order to say: The photos were taken by my brother.", words: ["Le", "foto", "sono", "state", "fatte", "da", "mio", "fratello."], translation: "The photos were taken by my brother.", explanation: "\"Da\" + person; no article before \"mio fratello\"." },
      { type: "multiple-choice", question: "Make it passive: \"La polizia ha chiuso la strada.\"", options: ["La strada è stata chiusa dalla polizia.", "La strada ha stato chiuso dalla polizia.", "La strada è stato chiusa dalla polizia.", "La strada è chiusa di polizia."], correctIndex: 0, explanation: "Same tense of \"essere\" + agreement + \"dalla\"." },
      { type: "dictation", audio: "Il castello è stato costruito nel Duecento.", explanation: "\"Duecento\" = the thirteenth century." },
      { type: "speak", text: "Questa chiesa è stata costruita nel Trecento ed è stata restaurata l'anno scorso.", prompt: "Say it in Italian: This church was built in the fourteenth century and was restored last year.", tip: "\"Trecento\": the 1300s, tre-CEN-to.", explanation: "Two passives with agreement." },
    ],
  },
  {
    slug: "b1-passive-venire",
    level: "IT-B1",
    number: 2,
    title: "The Passive with Venire",
    summary: "Use venire + participle for a passive of process: la cena viene servita alle otto; venire only in simple tenses, never è venuto costruito.",
    duration: "17 min",
    sections: [
      {
        heading: "La cena viene servita alle otto",
        body: [
          "In simple tenses (present, imperfect, future, conditional), \"venire\" can replace \"essere\" in the passive: \"La cena viene servita alle otto\" (dinner is served at eight). The participle still agrees: \"I piatti vengono lavati a mano\".",
          "\"Venire\" stresses the action as it happens; \"essere\" can sound like a state. \"La porta viene chiusa alle dieci\" is unambiguous: someone closes it at ten.",
          "That's why \"venire\" is the favorite in descriptions of how things are done (procedures, recipes, guidebooks) and of habits in the past: \"Il pane veniva cotto nel forno a legna\" (bread used to be baked in the wood oven). After a modal, though, Italians normally keep \"essere\": \"Il modulo deve essere firmato\" sounds much more natural than \"deve venire firmato\".",
        ],
        examples: [
          { es: "La cena viene servita alle otto.", en: "Dinner is served at eight." },
          { es: "I piatti vengono lavati a mano.", en: "The dishes are washed by hand." },
          { es: "La porta viene chiusa alle dieci.", en: "The door is closed at ten." },
          { es: "Il vino veniva prodotto qui fino al 1950.", en: "Wine was produced here until 1950." },
          { es: "Il vincitore verrà annunciato domani.", en: "The winner will be announced tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dinner is served at eight.", answer: "La cena viene servita alle otto.", altAnswers: ["La cena è servita alle otto.", "La cena viene servita alle 8."], explanation: "\"Venire\" + participle, agreeing." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The winner [will be announced] tomorrow.", sentence: "Il vincitore ___ domani.", answer: "verrà annunciato", altAnswers: ["sarà annunciato"], explanation: "Future: \"verrà\"." },
        ],
      },
      {
        heading: "Only simple tenses",
        body: [
          "In compound tenses \"venire\" isn't used for the passive: not \"è venuto costruito\" but \"è stato costruito\". Rule of thumb: if you need \"stato\", use \"essere\".",
          "So: \"Il ponte viene costruito\" (is being built) but \"Il ponte è stato costruito\" (was built).",
        ],
        examples: [
          { es: "Il ponte viene costruito in questi mesi.", en: "The bridge is being built right now." },
          { es: "Il ponte è stato costruito nel 1990.", en: "The bridge was built in 1990." },
          { es: "Il pacco verrà consegnato lunedì.", en: "The parcel will be delivered on Monday." },
          { es: "Il pacco è stato consegnato lunedì.", en: "The parcel was delivered on Monday." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which is correct?", options: ["Il ponte è stato costruito nel 1990.", "Il ponte è venuto costruito nel 1990.", "Il ponte ha venuto costruito nel 1990.", "Il ponte è stato costruita nel 1990."], correctIndex: 0, explanation: "Compound tense: \"essere\" only." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The parcel will be delivered on Monday.", answer: "Il pacco verrà consegnato lunedì.", altAnswers: ["Il pacco sarà consegnato lunedì.", "Il pacco viene consegnato lunedì."], explanation: "Future passive: \"verrà\" or \"sarà\"." },
          { type: "listen-choose", audio: "Il ponte viene costruito in questi mesi.", question: "What's happening to the bridge?", options: ["It's being built now.", "It was built months ago.", "It will be built later.", "It's being demolished."], correctIndex: 0, explanation: "Present \"viene costruito\" = is being built." },
        ],
      },
      {
        heading: "Rules and routines",
        body: [
          "\"Venire\" is common in descriptions of rules and processes: \"Il biglietto viene controllato a bordo\" (tickets are checked on board), \"Il formaggio viene stagionato per due anni\" (the cheese is aged for two years).",
        ],
        examples: [
          { es: "Il biglietto viene controllato a bordo.", en: "Tickets are checked on board." },
          { es: "Il formaggio viene stagionato per due anni.", en: "The cheese is aged for two years." },
          { es: "Le olive vengono raccolte a novembre.", en: "The olives are picked in November." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The olives are picked in November.", answer: "Le olive vengono raccolte a novembre.", altAnswers: ["Le olive sono raccolte a novembre.", "Le olive vengono raccolte in novembre."], explanation: "\"Vengono raccolte\": feminine plural." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dishes are washed by hand.", answer: "I piatti vengono lavati a mano.", altAnswers: ["I piatti sono lavati a mano."], explanation: "\"Vengono\" + \"lavati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tickets are checked on board.", answer: "I biglietti vengono controllati a bordo.", altAnswers: ["Il biglietto viene controllato a bordo.", "I biglietti sono controllati a bordo."], explanation: "Process: \"venire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bridge was built in 1990.", answer: "Il ponte è stato costruito nel 1990.", altAnswers: ["Il ponte fu costruito nel 1990."], explanation: "Compound tense: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cheese is aged for two years.", answer: "Il formaggio viene stagionato per due anni.", altAnswers: ["Il formaggio è stagionato per due anni.", "Il formaggio viene stagionato due anni."], explanation: "\"Venire\" for a process." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wine was produced here until 1950.", answer: "Il vino veniva prodotto qui fino al 1950.", altAnswers: ["Qui il vino veniva prodotto fino al 1950.", "Il vino era prodotto qui fino al 1950."], explanation: "Imperfect: \"veniva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rooms are cleaned every morning.", answer: "Le camere vengono pulite ogni mattina.", altAnswers: ["Le camere sono pulite ogni mattina.", "Le camere vengono pulite tutte le mattine."], explanation: "\"Vengono pulite\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The results [will be published] on Friday.", sentence: "I risultati ___ venerdì.", answer: "verranno pubblicati", altAnswers: ["saranno pubblicati"], explanation: "\"Verranno\" + agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The road [has been closed].", sentence: "La strada ___.", answer: "è stata chiusa", explanation: "Compound tense: never \"è venuta chiusa\"." },
      { type: "word-order", prompt: "Put the words in order to say: Breakfast is served from seven to ten.", words: ["La", "colazione", "viene", "servita", "dalle", "sette", "alle", "dieci."], translation: "Breakfast is served from seven to ten.", explanation: "\"Viene servita\"." },
      { type: "multiple-choice", question: "Which sentence can use venire instead of essere?", options: ["La lettera è scritta a mano.", "La lettera è stata scritta a mano.", "La lettera era stata scritta a mano.", "La lettera sarà stata scritta a mano."], correctIndex: 0, explanation: "Only the simple tense: \"viene scritta\"." },
      { type: "dictation", audio: "Il formaggio viene stagionato in grotta per due anni.", explanation: "\"Viene stagionato\"." },
      { type: "speak", text: "La colazione viene servita dalle sette alle dieci, e le camere vengono pulite ogni mattina.", prompt: "Say it in Italian: Breakfast is served from seven to ten, and the rooms are cleaned every morning.", tip: "\"Vengono\": VEN-go-no, stress on the first syllable.", explanation: "\"Venire\" passive, agreeing." },
    ],
  },
  {
    slug: "b1-passive-andare",
    level: "IT-B1",
    number: 3,
    title: "Must Be Done: Andare + Participle",
    summary: "Use andare + participle for what must be done: il biglietto va convalidato, la pasta va cotta al dente, questi documenti vanno firmati.",
    duration: "17 min",
    sections: [
      {
        heading: "Il biglietto va convalidato",
        body: [
          "\"Andare\" + participle means must be, has to be: \"Il biglietto va convalidato\" (the ticket must be validated). It's the short, everyday version of \"deve essere convalidato\".",
          "The participle agrees with the subject: \"La pasta va cotta al dente\", \"Questi documenti vanno firmati\", \"Le piante vanno annaffiate ogni giorno\".",
        ],
        examples: [
          { es: "Il biglietto va convalidato prima di salire.", en: "The ticket must be validated before boarding." },
          { es: "La pasta va cotta al dente.", en: "Pasta should be cooked al dente." },
          { es: "Questi documenti vanno firmati.", en: "These documents need to be signed." },
          { es: "Le piante vanno annaffiate ogni giorno.", en: "The plants need watering every day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These documents need to be signed.", answer: "Questi documenti vanno firmati.", altAnswers: ["Questi documenti devono essere firmati."], explanation: "\"Vanno\" + participle, agreeing." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pasta [should be cooked] al dente.", sentence: "La pasta ___ al dente.", answer: "va cotta", explanation: "Feminine: \"cotta\"." },
        ],
      },
      {
        heading: "Rules, recipes, instructions",
        body: [
          "This pattern is everywhere in instructions and recipes: \"Il modulo va compilato in stampatello\" (the form must be filled out in block capitals), \"Le uova vanno sbattute\" (the eggs should be beaten), \"Il farmaco va preso a stomaco pieno\" (the medicine is to be taken on a full stomach).",
          "Negative: \"non va\" = must not be: \"Questo vino non va servito freddo\".",
        ],
        examples: [
          { es: "Il modulo va compilato in stampatello.", en: "The form must be filled out in block capitals." },
          { es: "Le uova vanno sbattute con lo zucchero.", en: "The eggs should be beaten with the sugar." },
          { es: "Il farmaco va preso a stomaco pieno.", en: "The medicine is to be taken on a full stomach." },
          { es: "Questo vino non va servito freddo.", en: "This wine shouldn't be served cold." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The form must be filled out in block capitals.", answer: "Il modulo va compilato in stampatello.", altAnswers: ["Il modulo deve essere compilato in stampatello."], explanation: "\"Va compilato\"." },
          { type: "listen-choose", audio: "Il farmaco va preso a stomaco pieno.", question: "When should you take the medicine?", options: ["After eating", "Before eating", "At bedtime", "Once a week"], correctIndex: 0, explanation: "\"A stomaco pieno\" = on a full stomach." },
        ],
      },
      {
        heading: "Only in simple tenses",
        body: [
          "Like \"venire\", obligation \"andare\" is used in simple tenses: \"va fatto\", \"andava fatto\" (should have been done), \"andrà fatto\". For a compound tense, use \"dovere\": \"Avrebbe dovuto essere fatto\".",
          "Careful: \"andare perso\" (to get lost) and \"andare distrutto\" (to get destroyed) are not about obligation: \"La valigia è andata persa\".",
          "Line up the three: \"Il biglietto è convalidato\" (it's validated: a state), \"viene convalidato\" (it gets validated: the process), \"va convalidato\" (it must be validated). The typical slip is an infinitive after \"andare\": \"va convalidare\" is wrong, and \"va a convalidare\" means he's going off to validate something.",
        ],
        examples: [
          { es: "Andava fatto prima.", en: "It should have been done before." },
          { es: "La valigia è andata persa.", en: "The suitcase got lost." },
          { es: "Il lavoro andrà finito entro giugno.", en: "The work will have to be finished by June." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The suitcase got lost.", answer: "La valigia è andata persa.", altAnswers: ["La valigia è stata persa."], explanation: "\"Andare perso\" = to get lost." },
          { type: "multiple-choice", question: "What does \"Andava fatto prima\" mean?", options: ["It should have been done before.", "It was going to be done before.", "He went before doing it.", "It was done before."], correctIndex: 0, explanation: "Imperfect \"andava\" + participle = should have been." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ticket must be validated before boarding.", answer: "Il biglietto va convalidato prima di salire.", altAnswers: ["Il biglietto deve essere convalidato prima di salire.", "Il biglietto va obliterato prima di salire."], explanation: "\"Va\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The plants need watering every day.", answer: "Le piante vanno annaffiate ogni giorno.", altAnswers: ["Le piante vanno innaffiate ogni giorno.", "Le piante vanno annaffiate tutti i giorni."], explanation: "\"Vanno annaffiate\", feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This wine shouldn't be served cold.", answer: "Questo vino non va servito freddo.", altAnswers: ["Questo vino non deve essere servito freddo."], explanation: "\"Non va\" = must not be." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The medicine is to be taken on a full stomach.", answer: "Il farmaco va preso a stomaco pieno.", altAnswers: ["Il farmaco va preso dopo i pasti.", "La medicina va presa a stomaco pieno.", "La medicina va presa dopo i pasti."], explanation: "\"Va preso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The trash must be taken out on Tuesday.", answer: "La spazzatura va portata fuori martedì.", altAnswers: ["L'immondizia va portata fuori martedì.", "La spazzatura va portata fuori il martedì."], explanation: "\"Va portata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It should have been done before.", answer: "Andava fatto prima.", altAnswers: ["Doveva essere fatto prima.", "Bisognava farlo prima."], explanation: "\"Andava\" + participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The eggs [should be beaten] with the sugar.", sentence: "Le uova ___ con lo zucchero.", answer: "vanno sbattute", explanation: "\"Le uova\" is feminine plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The work [will have to be finished] by June.", sentence: "Il lavoro ___ entro giugno.", answer: "andrà finito", altAnswers: ["dovrà essere finito"], explanation: "Future \"andrà\"." },
      { type: "word-order", prompt: "Put the words in order to say: The fruit must be washed well.", words: ["La", "frutta", "va", "lavata", "bene."], translation: "The fruit must be washed well.", explanation: "\"Va lavata\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Le finestre vanno chiuse.", "Le finestre va chiuse.", "Le finestre vanno chiuso.", "Le finestre vanno chiudere."], correctIndex: 0, explanation: "Plural verb, plural feminine participle." },
      { type: "dictation", audio: "Il modulo va compilato e firmato in fondo alla pagina.", explanation: "Two participles with one \"va\"." },
      { type: "speak", text: "Il biglietto va convalidato, e le valigie non vanno lasciate incustodite.", prompt: "Say it in Italian: The ticket must be validated, and suitcases mustn't be left unattended.", tip: "\"Incustodite\": in-cu-STO-di-te.", explanation: "\"Va\" and \"non vanno\" + participle." },
    ],
  },
  {
    slug: "b1-si-passivante",
    level: "IT-B1",
    number: 4,
    title: "Si Passivante",
    summary: "Use si + verb as a passive: si vende casa, si vendono case, si affittano camere, qui si parla inglese; the verb agrees with the object.",
    duration: "17 min",
    sections: [
      {
        heading: "Si vende, si vendono",
        body: [
          "Italian has a very common passive with \"si\": \"Si vende casa\" (house for sale, literally house is sold), \"Qui si parla inglese\" (English is spoken here). There's no agent: nobody in particular does it.",
          "The verb agrees with the thing: singular thing, singular verb; plural thing, plural verb. \"Si vende una casa\", \"Si vendono case\"; \"Si affitta camera\", \"Si affittano camere\".",
          "Hand-written signs sometimes say \"si vende case\", but that's a slip: always look at the noun first. The thing usually follows the verb, which is why learners miss it: \"Si cercano camerieri\" (waiters wanted), \"Si accettano prenotazioni\". And don't confuse this \"si\" with a reflexive: \"Si vende\" never means it sells itself.",
        ],
        examples: [
          { es: "Si vende casa con giardino.", en: "House with garden for sale." },
          { es: "Si vendono biciclette usate.", en: "Second-hand bikes for sale." },
          { es: "Qui si parla inglese.", en: "English is spoken here." },
          { es: "Si affittano camere per studenti.", en: "Rooms for rent to students." },
          { es: "In Italia si beve molto caffè.", en: "A lot of coffee is drunk in Italy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Second-hand bikes for sale.", answer: "Si vendono biciclette usate.", altAnswers: ["Si vendono bici usate.", "Vendesi biciclette usate."], explanation: "Plural thing: \"si vendono\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Si affittano camere.", "Si affitta camere.", "Si affittano camera.", "Si affittate camere."], correctIndex: 0, explanation: "\"Camere\" is plural: \"si affittano\"." },
        ],
      },
      {
        heading: "In Italia si mangia la pasta",
        body: [
          "The \"si\" passive is the natural way to describe what is generally done: \"In Italia si mangia la pasta tutti i giorni\", \"Il panettone si mangia a Natale\", \"Gli spaghetti non si tagliano con il coltello\".",
          "With modals, the modal agrees: \"Questi libri si possono prendere in prestito\" (these books can be borrowed), \"La password si deve cambiare ogni mese\".",
        ],
        examples: [
          { es: "Il panettone si mangia a Natale.", en: "Panettone is eaten at Christmas." },
          { es: "Gli spaghetti non si tagliano con il coltello.", en: "Spaghetti isn't cut with a knife." },
          { es: "Questi libri si possono prendere in prestito.", en: "These books can be borrowed." },
          { es: "Come si scrive il tuo cognome?", en: "How is your last name spelled?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Panettone is eaten at Christmas.", answer: "Il panettone si mangia a Natale.", altAnswers: ["A Natale si mangia il panettone."], explanation: "Singular: \"si mangia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These books [can be borrowed].", sentence: "Questi libri ___ in prestito.", answer: "si possono prendere", explanation: "The modal agrees: \"si possono\"." },
          { type: "listen-choose", audio: "Gli spaghetti non si tagliano con il coltello.", question: "What's the rule?", options: ["Don't cut spaghetti with a knife.", "Cut spaghetti with a knife.", "Spaghetti is eaten with a spoon.", "Spaghetti is cooked in salted water."], correctIndex: 0, explanation: "\"Non si tagliano\" = are not cut." },
        ],
      },
      {
        heading: "Past tense and signs",
        body: [
          "In compound tenses the \"si\" passive uses \"essere\" and the participle agrees: \"Si sono vendute mille copie\" (a thousand copies were sold), \"Si è costruita una nuova scuola\".",
          "On old-fashioned signs you'll also see \"si\" attached to the verb: \"Vendesi\" (for sale), \"Affittasi\" (for rent).",
        ],
        examples: [
          { es: "Si sono vendute mille copie in una settimana.", en: "A thousand copies were sold in a week." },
          { es: "Si è costruita una nuova scuola.", en: "A new school has been built." },
          { es: "Affittasi appartamento.", en: "Apartment for rent." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A thousand copies were sold in a week.", answer: "Si sono vendute mille copie in una settimana.", altAnswers: ["Sono state vendute mille copie in una settimana."], explanation: "\"Si sono vendute\": agreement with \"copie\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "House with garden for sale.", answer: "Si vende casa con giardino.", altAnswers: ["Vendesi casa con giardino.", "Si vende una casa con giardino."], explanation: "Singular: \"si vende\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "English is spoken here.", answer: "Qui si parla inglese.", altAnswers: ["Si parla inglese qui.", "Qui si parla l'inglese."], explanation: "\"Si parla\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rooms for rent to students.", answer: "Si affittano camere per studenti.", altAnswers: ["Affittasi camere per studenti."], explanation: "Plural: \"si affittano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How is your last name spelled? (to a friend)", answer: "Come si scrive il tuo cognome?", explanation: "\"Si scrive\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A lot of coffee is drunk in Italy.", answer: "In Italia si beve molto caffè.", altAnswers: ["In Italia si beve tanto caffè.", "Si beve molto caffè in Italia."], explanation: "\"Si beve\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A new school has been built.", answer: "Si è costruita una nuova scuola.", altAnswers: ["È stata costruita una nuova scuola.", "Hanno costruito una nuova scuola."], explanation: "Compound: \"si è costruita\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Here [fresh fish is sold].", sentence: "Qui ___.", answer: "si vende pesce fresco", altAnswers: ["si vende il pesce fresco"], explanation: "Singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Shoes are repaired] here.", sentence: "Qui ___.", answer: "si riparano scarpe", altAnswers: ["si riparano le scarpe"], explanation: "Plural: \"si riparano\"." },
      { type: "word-order", prompt: "Put the words in order to say: How do you pronounce this word?", words: ["Come", "si", "pronuncia", "questa", "parola?"], translation: "How do you pronounce this word?", explanation: "\"Si pronuncia\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["In estate si mangiano molti gelati.", "In estate si mangia molti gelati.", "In estate si mangiano molto gelati.", "In estate si mangiato molti gelati."], correctIndex: 0, explanation: "Plural object: \"si mangiano\"." },
      { type: "dictation", audio: "In questo negozio si vendono prodotti biologici.", explanation: "\"Si vendono\" + plural." },
      { type: "speak", text: "In Italia il cappuccino si beve solo a colazione, e gli spaghetti non si tagliano mai.", prompt: "Say it in Italian: In Italy cappuccino is only drunk at breakfast, and spaghetti is never cut.", tip: "\"Tagliano\": gli is one soft sound, TA-glia-no.", explanation: "Singular \"si beve\", plural \"si tagliano\"." },
    ],
  },
  {
    slug: "b1-drill-passive-forms",
    level: "IT-B1",
    number: 5,
    title: "Drill: Passive Forms",
    summary: "High-repetition production turning active sentences into the passive with essere, venire and da.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Active to passive",
        body: [
          "Object becomes subject; \"essere\" takes the tense of the active verb; the participle agrees; the doer gets \"da\". \"Il comune ha chiuso la piazza\" → \"La piazza è stata chiusa dal comune\". In simple tenses \"venire\" works too.",
        ],
        examples: [
          { es: "La piazza è stata chiusa dal comune.", en: "The square was closed by the council." },
          { es: "Le tasse vengono pagate a giugno.", en: "Taxes are paid in June." },
          { es: "Gli studenti saranno esaminati da tre professori.", en: "The students will be examined by three teachers." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The square was closed by the council.", answer: "La piazza è stata chiusa dal comune.", explanation: "\"Dal comune\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Taxes are paid in June.", answer: "Le tasse vengono pagate a giugno.", altAnswers: ["Le tasse si pagano a giugno.", "Le tasse sono pagate a giugno.", "Le tasse vengono pagate in giugno."], explanation: "\"Vengono pagate\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The students will be examined by three teachers.", answer: "Gli studenti saranno esaminati da tre professori.", altAnswers: ["Gli studenti verranno esaminati da tre professori.", "Gli studenti saranno esaminati da tre docenti."], explanation: "Future passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The car was stolen last night.", answer: "La macchina è stata rubata ieri notte.", altAnswers: ["La macchina è stata rubata stanotte.", "L'auto è stata rubata ieri notte."], explanation: "\"Stata rubata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The emails are read every morning.", answer: "Le email vengono lette ogni mattina.", altAnswers: ["Le email sono lette ogni mattina.", "Le mail vengono lette ogni mattina."], explanation: "\"Lette\" agrees with \"le email\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film was directed by Fellini.", answer: "Il film è stato diretto da Fellini.", altAnswers: ["Il film fu diretto da Fellini."], explanation: "\"Diretto\" from \"dirigere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The exhibition had been organized by students.", answer: "La mostra era stata organizzata dagli studenti.", altAnswers: ["La mostra era stata organizzata da studenti.", "La mostra era stata organizzata da alcuni studenti."], explanation: "Pluperfect passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guests were welcomed by the mayor.", answer: "Gli ospiti sono stati accolti dal sindaco.", altAnswers: ["Gli ospiti furono accolti dal sindaco.", "Gli invitati sono stati accolti dal sindaco."], explanation: "\"Accolti\" from \"accogliere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bills are paid online.", answer: "Le bollette vengono pagate online.", altAnswers: ["Le bollette sono pagate online.", "Le bollette si pagano online."], explanation: "\"Vengono pagate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The town was destroyed by an earthquake.", answer: "Il paese è stato distrutto da un terremoto.", altAnswers: ["La città è stata distrutta da un terremoto.", "Il paese fu distrutto da un terremoto."], explanation: "\"Da un\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The winners [will be chosen] by the public.", sentence: "I vincitori ___ dal pubblico.", answer: "saranno scelti", altAnswers: ["verranno scelti"], explanation: "Future passive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The windows [are cleaned] once a month.", sentence: "Le finestre ___ una volta al mese.", answer: "vengono pulite", altAnswers: ["sono pulite", "vengono lavate"], explanation: "\"Pulite\" agrees." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The meeting [has been canceled].", sentence: "La riunione ___.", answer: "è stata annullata", altAnswers: ["è stata cancellata"], explanation: "Compound tense: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The houses [were built] in the sixties.", sentence: "Le case ___ negli anni Sessanta.", answer: "sono state costruite", altAnswers: ["furono costruite"], explanation: "Feminine plural." },
      { type: "word-order", prompt: "Put the words in order to say: The song was written by my grandfather.", words: ["La", "canzone", "è", "stata", "scritta", "da", "mio", "nonno."], translation: "The song was written by my grandfather.", explanation: "\"Da\" + person." },
      { type: "word-order", prompt: "Put the words in order to say: The parcels are delivered in the afternoon.", words: ["I", "pacchi", "vengono", "consegnati", "il", "pomeriggio."], translation: "The parcels are delivered in the afternoon.", altOrders: [["Il", "pomeriggio", "i", "pacchi", "vengono", "consegnati."]], explanation: "\"Vengono consegnati\"." },
      { type: "multiple-choice", question: "Make it passive: \"I vigili hanno multato Luca.\"", options: ["Luca è stato multato dai vigili.", "Luca ha stato multato dai vigili.", "Luca è stato multato di vigili.", "Luca è venuto multato dai vigili."], correctIndex: 0, explanation: "\"Essere\" in compound tenses; \"dai\"." },
      { type: "multiple-choice", question: "Make it passive: \"Il cuoco prepara la torta.\"", options: ["La torta viene preparata dal cuoco.", "La torta viene preparato dal cuoco.", "La torta va preparata dal cuoco.", "La torta è stata preparare dal cuoco."], correctIndex: 0, explanation: "Present: \"viene\" or \"è\" + \"preparata\"." },
      { type: "listen-choose", audio: "La mostra è stata visitata da più di diecimila persone.", question: "How many people visited the exhibition?", options: ["Over ten thousand", "About a thousand", "Over a hundred thousand", "Ten"], correctIndex: 0, explanation: "\"Più di diecimila\"." },
      { type: "dictation", audio: "Il ladro è stato fermato dalla polizia vicino alla stazione.", explanation: "\"Stato fermato\", \"dalla polizia\"." },
      { type: "speak", text: "Il palazzo è stato costruito nel Seicento e viene ancora usato come scuola.", prompt: "Say it in Italian: The building was built in the seventeenth century and is still used as a school.", tip: "\"Seicento\": the 1600s, sei-CEN-to.", explanation: "\"Essere\" in the past, \"venire\" in the present." },
    ],
  },
  {
    slug: "b1-drill-si-passivante",
    level: "IT-B1",
    number: 6,
    title: "Drill: Si Vende or Si Vendono?",
    summary: "High-repetition production of the si passivante, agreeing the verb with the thing: si vende, si vendono, si è venduta, si sono venduti.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Look at the thing",
        body: [
          "Singular thing, singular verb: \"si vende la casa\". Plural thing, plural verb: \"si vendono le case\". Past: \"si è venduta la casa\", \"si sono vendute le case\". Modals agree too: \"si possono pagare\".",
        ],
        examples: [
          { es: "Si cerca cameriere.", en: "Waiter wanted." },
          { es: "Si cercano camerieri.", en: "Waiters wanted." },
          { es: "Le prenotazioni si fanno online.", en: "Bookings are made online." },
          { es: "Si accettano carte di credito.", en: "Credit cards accepted." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Waiters wanted.", answer: "Si cercano camerieri.", altAnswers: ["Cercasi camerieri."], explanation: "Plural: \"si cercano\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Credit cards accepted.", answer: "Si accettano carte di credito.", altAnswers: ["Si accettano le carte di credito."], explanation: "Plural: \"si accettano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bookings are made online.", answer: "Le prenotazioni si fanno online.", altAnswers: ["Le prenotazioni si fanno on line.", "Si prenota online."], explanation: "Plural: \"si fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Waiter wanted.", answer: "Si cerca cameriere.", altAnswers: ["Cercasi cameriere.", "Si cerca un cameriere."], explanation: "Singular: \"si cerca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tickets can be bought on the bus.", answer: "I biglietti si possono comprare sull'autobus.", altAnswers: ["Si possono comprare i biglietti sull'autobus.", "I biglietti si possono acquistare sull'autobus.", "Il biglietto si può comprare sull'autobus."], explanation: "Modal agrees: \"si possono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dogs are not allowed.", answer: "Non si accettano cani.", altAnswers: ["I cani non sono ammessi.", "Non si ammettono cani."], explanation: "Plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here a lot of tea is drunk.", answer: "Qui si beve molto tè.", altAnswers: ["Qui si beve tanto tè."], explanation: "Singular: \"si beve\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fifty houses were built.", answer: "Si sono costruite cinquanta case.", altAnswers: ["Sono state costruite cinquanta case.", "Si sono costruite 50 case."], explanation: "Compound: \"si sono costruite\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How is this word pronounced?", answer: "Come si pronuncia questa parola?", explanation: "\"Si pronuncia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bus tickets are sold at the tobacconist's.", answer: "I biglietti dell'autobus si vendono in tabaccheria.", altAnswers: ["I biglietti dell'autobus si vendono dal tabaccaio.", "I biglietti dell'autobus si comprano in tabaccheria.", "I biglietti del bus si vendono in tabaccheria."], explanation: "Plural: \"si vendono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Sicily [many oranges are grown].", sentence: "In Sicilia ___.", answer: "si coltivano molte arance", altAnswers: ["si coltivano tante arance"], explanation: "Plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The address is written] here.", sentence: "Qui ___.", answer: "si scrive l'indirizzo", explanation: "Singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Last year [a thousand bikes were sold].", sentence: "L'anno scorso ___.", answer: "si sono vendute mille biciclette", altAnswers: ["si sono vendute mille bici", "sono state vendute mille biciclette"], explanation: "\"Vendute\" agrees with \"biciclette\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These shoes [can't be washed].", sentence: "Queste scarpe non ___.", answer: "si possono lavare", explanation: "Modal agrees: \"si possono\"." },
      { type: "word-order", prompt: "Put the words in order to say: Second-hand books bought and sold.", words: ["Si", "comprano", "e", "si", "vendono", "libri", "usati."], translation: "Second-hand books bought and sold.", explanation: "Plural twice." },
      { type: "word-order", prompt: "Put the words in order to say: Here you eat well.", words: ["Qui", "si", "mangia", "bene."], translation: "Here you eat well.", explanation: "No object: singular." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Si cercano volontari.", "Si cerca volontari.", "Si cercano volontario.", "Si cercato volontari."], correctIndex: 0, explanation: "Plural: \"si cercano\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["In questo bar si fanno ottimi cornetti.", "In questo bar si fa ottimi cornetti.", "In questo bar si fanno ottimo cornetti.", "In questo bar si fatti ottimi cornetti."], correctIndex: 0, explanation: "Plural: \"si fanno\"." },
      { type: "listen-choose", audio: "Si affittano biciclette e scooter.", question: "What does the sign offer?", options: ["Bikes and scooters for rent", "Bikes and scooters for sale", "Bike repairs", "Free bike parking"], correctIndex: 0, explanation: "\"Si affittano\" = for rent." },
      { type: "dictation", audio: "In questa zona si producono ottimi vini rossi.", explanation: "Plural: \"si producono\"." },
      { type: "speak", text: "Si vendono mobili antichi e si fanno riparazioni.", prompt: "Say it in Italian: Antique furniture sold and repairs done.", tip: "\"Riparazioni\": ri-pa-ra-ZIO-ni.", explanation: "Plural twice." },
    ],
  },
  {
    slug: "b1-contrast-passive-types",
    level: "IT-B1",
    number: 7,
    title: "Contrast Clinic: È, Viene, Va?",
    summary: "Compare il ponte è stato costruito, viene costruito and va costruito, and choose between the passive with essere, venire, andare and si.",
    duration: "17 min",
    sections: [
      {
        heading: "Three passives, three meanings",
        body: [
          "\"Il ponte è stato costruito\" (it was built: done). \"Il ponte viene costruito\" (it is being built: in progress, or as a routine). \"Il ponte va costruito\" (it must be built: obligation).",
          "\"Essere\" works in every tense. \"Venire\" only in simple tenses. \"Andare\" adds must and also lives in simple tenses.",
        ],
        examples: [
          { es: "Il ponte è stato costruito nel 2010.", en: "The bridge was built in 2010." },
          { es: "Il ponte viene costruito in questi mesi.", en: "The bridge is being built right now." },
          { es: "Il ponte va costruito al più presto.", en: "The bridge must be built as soon as possible." },
          { es: "La lettera è firmata.", en: "The letter is signed." },
          { es: "La lettera va firmata.", en: "The letter must be signed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bridge must be built as soon as possible.", answer: "Il ponte va costruito al più presto.", altAnswers: ["Il ponte deve essere costruito al più presto.", "Il ponte va costruito il prima possibile."], explanation: "Obligation: \"va\"." },
          { type: "multiple-choice", question: "\"La lettera va firmata.\" What does it mean?", options: ["The letter must be signed.", "The letter is signed.", "The letter is going to be signed.", "The letter was signed."], correctIndex: 0, explanation: "\"Andare\" + participle = must be." },
          { type: "listen-choose", audio: "Il ponte viene costruito in questi mesi.", question: "What's the situation?", options: ["The bridge is under construction.", "The bridge is finished.", "The bridge must be built.", "The bridge was demolished."], correctIndex: 0, explanation: "\"Viene costruito\" = is being built." },
        ],
      },
      {
        heading: "Passive or si?",
        body: [
          "When there's no agent and the meaning is general, Italians usually prefer \"si\": \"In Italia si mangia molta pasta\" rather than \"molta pasta viene mangiata\". When you name the agent with \"da\", you need \"essere\" or \"venire\": the \"si\" passive never takes \"da\".",
        ],
        examples: [
          { es: "Qui si vendono giornali.", en: "Newspapers are sold here." },
          { es: "Il giornale viene venduto anche online.", en: "The newspaper is also sold online." },
          { es: "Il quadro è stato venduto da un collezionista.", en: "The painting was sold by a collector." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The painting was sold by a collector.", answer: "Il quadro è stato venduto da un collezionista.", altAnswers: ["Il dipinto è stato venduto da un collezionista."], explanation: "Agent with \"da\": \"essere\"." },
          { type: "multiple-choice", question: "Which is NOT correct?", options: ["Si vendono case dall'agenzia.", "Le case vengono vendute dall'agenzia.", "Le case sono vendute dall'agenzia.", "Qui si vendono case."], correctIndex: 0, explanation: "The \"si\" passive can't take \"da\"." },
        ],
      },
      {
        heading: "The ending gives it away",
        body: [
          "In every type the participle agrees with the subject: \"La porta è chiusa\", \"Le porte vengono chiuse\", \"La porta va chiusa\". Only the \"si\" passive in a simple tense has no participle at all: \"Si chiudono le porte\".",
        ],
        examples: [
          { es: "Le porte vengono chiuse alle dieci.", en: "The doors are closed at ten." },
          { es: "La porta va chiusa a chiave.", en: "The door must be locked." },
          { es: "Si chiudono le porte alle dieci.", en: "The doors are closed at ten." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The door must be locked.", answer: "La porta va chiusa a chiave.", altAnswers: ["La porta deve essere chiusa a chiave."], explanation: "\"Va chiusa\": feminine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bridge was built in 2010.", answer: "Il ponte è stato costruito nel 2010.", explanation: "Done: \"è stato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bridge is being built.", answer: "Il ponte viene costruito.", altAnswers: ["Stanno costruendo il ponte.", "Il ponte è in costruzione."], explanation: "In progress: \"viene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doors are closed at ten.", answer: "Le porte vengono chiuse alle dieci.", altAnswers: ["Le porte vengono chiuse alle 10.", "Le porte si chiudono alle dieci."], explanation: "Routine: \"vengono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The letter is signed.", answer: "La lettera è firmata.", explanation: "State: \"è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rice must be stirred often.", answer: "Il riso va mescolato spesso.", altAnswers: ["Il riso va girato spesso.", "Il riso deve essere mescolato spesso."], explanation: "Obligation: \"va\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Newspapers are sold here.", answer: "Qui si vendono giornali.", altAnswers: ["Qui si vendono i giornali.", "Si vendono giornali qui."], explanation: "General, no agent: \"si\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The exam [must be taken] by June.", sentence: "L'esame ___ entro giugno.", answer: "va fatto", altAnswers: ["va dato", "va sostenuto", "deve essere fatto"], explanation: "Obligation: \"va\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The exam [was taken] by forty students.", sentence: "L'esame ___ da quaranta studenti.", answer: "è stato fatto", altAnswers: ["è stato sostenuto", "è stato dato"], explanation: "Done, with an agent: \"è stato\"." },
      { type: "word-order", prompt: "Put the words in order to say: The bins are emptied every day.", words: ["I", "cestini", "vengono", "svuotati", "ogni", "giorno."], translation: "The bins are emptied every day.", explanation: "Routine: \"vengono\"." },
      { type: "multiple-choice", question: "Which sentence is wrong?", options: ["Il museo è venuto restaurato.", "Il museo è stato restaurato.", "Il museo viene restaurato.", "Il museo va restaurato."], correctIndex: 0, explanation: "No \"venire\" in compound tenses." },
      { type: "dictation", audio: "Il vino va servito fresco, ma non freddo.", explanation: "Obligation: \"va servito\"." },
      { type: "speak", text: "La chiesa è stata costruita nel Cinquecento, viene restaurata adesso, e va visitata assolutamente!", prompt: "Say it in Italian: The church was built in the sixteenth century, it's being restored now, and it absolutely must be visited!", tip: "Three different verbs before \"-ata\": è stata, viene, va.", explanation: "All three passives in one sentence." },
    ],
  },
  {
    slug: "b1-error-hunt-passive",
    level: "IT-B1",
    number: 8,
    title: "Error Hunt: The Passive",
    summary: "Fix si vende case, il libro è stato scritto di Calvino, è venuto costruito and la pasta va cotto.",
    duration: "17 min",
    sections: [
      {
        heading: "Agreement slips",
        body: [
          "Each sentence below was written by a learner and has one mistake. \"Si vende case\": in the \"si\" passive the verb agrees with the thing, so \"Si vendono case\". You'll hear the singular in very casual speech, but write the plural.",
          "\"La pasta va cotto\": the participle agrees with the subject, so \"La pasta va cotta\". Same with \"essere\": \"Le finestre sono state pulite\", not \"sono stato pulito\".",
        ],
        examples: [
          { es: "Si vendono case.", en: "Houses for sale." },
          { es: "La pasta va cotta in acqua salata.", en: "Pasta should be cooked in salted water." },
          { es: "Le finestre sono state pulite.", en: "The windows have been cleaned." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si vende case\". Write it correctly: Houses for sale.", source: "Houses for sale.", answer: "Si vendono case.", altAnswers: ["Vendesi case."], explanation: "Plural thing, plural verb." },
          { type: "fill-blank", prompt: "A learner wrote \"La pasta va cotto in acqua salata\". Write the Italian for the bold words.", en: "Pasta [should be cooked] in salted water.", sentence: "La pasta ___ in acqua salata.", answer: "va cotta", explanation: "\"Cotta\" agrees with \"la pasta\"." },
        ],
      },
      {
        heading: "Di or da?",
        body: [
          "\"Il libro è stato scritto di Calvino\" uses the possessive \"di\" (a book by Calvino = \"un libro di Calvino\"). In a passive sentence, the doer always takes \"da\": \"Il barone rampante è stato scritto da Calvino\".",
          "Remember the article: \"dal\", \"dalla\", \"dagli\": \"La legge è stata approvata dal Parlamento\".",
        ],
        examples: [
          { es: "Il barone rampante è stato scritto da Calvino.", en: "The Baron in the Trees was written by Calvino." },
          { es: "È un romanzo di Calvino.", en: "It's a novel by Calvino." },
          { es: "La legge è stata approvata dal Parlamento.", en: "The law was passed by Parliament." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il libro è stato scritto di Calvino\". Write it correctly: The book was written by Calvino.", source: "The book was written by Calvino.", answer: "Il libro è stato scritto da Calvino.", altAnswers: ["Il libro fu scritto da Calvino."], explanation: "Passive agent: \"da\"." },
          { type: "listen-choose", audio: "La legge è stata approvata dal Parlamento.", question: "Who passed the law?", options: ["Parliament", "The government", "The courts", "The voters"], correctIndex: 0, explanation: "\"Dal Parlamento\"." },
        ],
      },
      {
        heading: "Venire in compound tenses",
        body: [
          "\"Il castello è venuto costruito nel Medioevo\" uses \"venire\" in a compound tense, which Italian doesn't allow. Use \"essere\": \"è stato costruito\".",
          "And \"si\" never takes \"da\": \"Si vendono case dall'agenzia\" should be \"Le case vengono vendute dall'agenzia\".",
        ],
        examples: [
          { es: "Il castello è stato costruito nel Medioevo.", en: "The castle was built in the Middle Ages." },
          { es: "Le case vengono vendute dall'agenzia.", en: "The houses are sold by the agency." },
          { es: "Il castello veniva usato come prigione.", en: "The castle was used as a prison." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il castello è venuto costruito nel Medioevo\". Write it correctly: The castle was built in the Middle Ages.", source: "The castle was built in the Middle Ages.", answer: "Il castello è stato costruito nel Medioevo.", altAnswers: ["Il castello fu costruito nel Medioevo."], explanation: "Compound tense: \"essere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si affitta appartamenti\". Write it correctly: Apartments for rent.", source: "Apartments for rent.", answer: "Si affittano appartamenti.", altAnswers: ["Affittasi appartamenti."], explanation: "Plural: \"si affittano\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Le lettere sono state scritto\". Write it correctly: The letters were written.", source: "The letters were written.", answer: "Le lettere sono state scritte.", explanation: "Both participles agree." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il quadro è stato dipinto di Caravaggio\". Write it correctly: The painting was painted by Caravaggio.", source: "The painting was painted by Caravaggio.", answer: "Il quadro è stato dipinto da Caravaggio.", altAnswers: ["Il quadro fu dipinto da Caravaggio."], explanation: "\"Da\" for the agent." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"La strada è venuta chiusa\". Write it correctly: The road has been closed.", source: "The road has been closed.", answer: "La strada è stata chiusa.", explanation: "No \"venire\" in compound tenses." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Le patate vanno sbucciato\". Write it correctly: The potatoes must be peeled.", source: "The potatoes must be peeled.", answer: "Le patate vanno sbucciate.", altAnswers: ["Le patate devono essere sbucciate."], explanation: "\"Sbucciate\" agrees." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il ladro ha stato arrestato\". Write it correctly: The thief has been arrested.", source: "The thief has been arrested.", answer: "Il ladro è stato arrestato.", explanation: "The passive uses \"essere\"." },
      { type: "fill-blank", prompt: "A learner wrote \"In Italia si mangia molti dolci a Natale\". Write the Italian for the bold words.", en: "In Italy [lots of sweets are eaten] at Christmas.", sentence: "In Italia ___ a Natale.", answer: "si mangiano molti dolci", altAnswers: ["si mangiano tanti dolci"], explanation: "Plural." },
      { type: "fill-blank", prompt: "A learner wrote \"Il museo è stato inaugurato del sindaco\". Write the Italian for the bold words.", en: "The museum was opened [by the mayor].", sentence: "Il museo è stato inaugurato ___.", answer: "dal sindaco", explanation: "\"Da\" + \"il\" = \"dal\"." },
      { type: "word-order", prompt: "Put the words in order to say: The cake must be eaten today.", words: ["La", "torta", "va", "mangiata", "oggi."], translation: "The cake must be eaten today.", explanation: "\"Va mangiata\"." },
      { type: "multiple-choice", question: "Which sentence has no mistake?", options: ["Le case sono state vendute dall'agenzia.", "Si vendono le case dall'agenzia.", "Le case sono venute vendute dall'agenzia.", "Le case sono state venduto dall'agenzia."], correctIndex: 0, explanation: "\"Essere\", agreement, \"da\"." },
      { type: "dictation", audio: "Le patate vanno sbucciate e tagliate a pezzi.", explanation: "Feminine plural participles." },
      { type: "speak", text: "Il libro è stato scritto da Calvino ed è stato tradotto in molte lingue.", prompt: "Say it in Italian: The book was written by Calvino and has been translated into many languages.", tip: "\"Tradotto\": a long double t, tra-DOT-to.", explanation: "\"Da\" for the agent; \"essere\" in compound tenses." },
    ],
  },
  {
    slug: "b1-reading-lab-news-passive",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: News Reports",
    summary: "Read three short news items full of the passive: è stato ritrovato, verrà inaugurato, sono state chiuse, and headlines that drop essere.",
    duration: "18 min",
    sections: [
      {
        heading: "Item 1: a painting found",
        body: [
          "Read the first item, from a local paper in Siena: \"Ritrovato un dipinto rubato trent'anni fa. Il quadro, un paesaggio dell'Ottocento, era stato rubato da una villa nel 1996. È stato ritrovato ieri dai carabinieri in un garage di Arezzo. Il dipinto verrà restituito ai proprietari la prossima settimana\".",
          "Headlines often drop \"essere\": \"Ritrovato un dipinto\" = a painting (has been) found.",
        ],
        examples: [
          { es: "Ritrovato un dipinto rubato trent'anni fa.", en: "Painting stolen thirty years ago found." },
          { es: "Era stato rubato da una villa nel 1996.", en: "It had been stolen from a villa in 1996." },
          { es: "È stato ritrovato ieri dai carabinieri.", en: "It was found yesterday by the carabinieri." },
          { es: "Il dipinto verrà restituito ai proprietari.", en: "The painting will be returned to its owners." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Where was the painting found?", options: ["In a garage in Arezzo", "In a villa in Siena", "In a museum", "At the owners' house"], correctIndex: 0, explanation: "\"In un garage di Arezzo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It had been stolen from a villa.", answer: "Era stato rubato da una villa.", explanation: "Pluperfect passive; here \"da\" = from." },
        ],
      },
      {
        heading: "Item 2: a new tram line",
        body: [
          "From a Bologna news site: \"La nuova linea del tram sarà inaugurata a settembre. I lavori, che sono stati rallentati dalla pioggia, vengono completati in questi giorni. I biglietti potranno essere acquistati anche con il telefono, ma vanno convalidati a bordo\".",
        ],
        examples: [
          { es: "La nuova linea del tram sarà inaugurata a settembre.", en: "The new tram line will be opened in September." },
          { es: "I lavori sono stati rallentati dalla pioggia.", en: "The work was slowed down by the rain." },
          { es: "I biglietti potranno essere acquistati con il telefono.", en: "Tickets can be bought by phone." },
          { es: "Vanno convalidati a bordo.", en: "They must be validated on board." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The work was slowed down by the rain.", answer: "I lavori sono stati rallentati dalla pioggia.", explanation: "\"Dalla pioggia\": agent." },
          { type: "listen-choose", audio: "I biglietti vanno convalidati a bordo.", question: "What must passengers do?", options: ["Validate their tickets on board", "Buy tickets on board", "Show tickets at the station", "Print their tickets"], correctIndex: 0, explanation: "\"Vanno convalidati\" = must be validated." },
        ],
      },
      {
        heading: "Item 3: bad weather",
        body: [
          "A short report from Liguria: \"Maltempo: chiuse le scuole a Genova. Ieri sono stati registrati oltre duecento millimetri di pioggia. Alcune strade sono state chiuse e diverse famiglie sono state evacuate. Si consiglia di non mettersi in viaggio\".",
          "\"Si consiglia\" (people are advised) is a typical official \"si\".",
        ],
        examples: [
          { es: "Maltempo: chiuse le scuole a Genova.", en: "Bad weather: schools closed in Genoa." },
          { es: "Alcune strade sono state chiuse.", en: "Some roads have been closed." },
          { es: "Diverse famiglie sono state evacuate.", en: "Several families have been evacuated." },
          { es: "Si consiglia di non mettersi in viaggio.", en: "People are advised not to travel." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Several families have been evacuated.", answer: "Diverse famiglie sono state evacuate.", altAnswers: ["Alcune famiglie sono state evacuate.", "Varie famiglie sono state evacuate."], explanation: "Feminine plural agreement." },
          { type: "multiple-choice", question: "\"Chiuse le scuole\": what's missing from this headline?", options: ["sono state", "hanno", "si", "vanno"], correctIndex: 0, explanation: "Full sentence: \"Sono state chiuse le scuole\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was found yesterday by the carabinieri.", answer: "È stato ritrovato ieri dai carabinieri.", altAnswers: ["È stato trovato ieri dai carabinieri.", "Ieri è stato ritrovato dai carabinieri."], explanation: "\"Dai carabinieri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The painting will be returned to its owners.", answer: "Il dipinto verrà restituito ai proprietari.", altAnswers: ["Il dipinto sarà restituito ai proprietari.", "Il quadro verrà restituito ai proprietari."], explanation: "Future passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The new tram line will be opened in September.", answer: "La nuova linea del tram sarà inaugurata a settembre.", altAnswers: ["La nuova linea del tram verrà inaugurata a settembre.", "La nuova linea tranviaria sarà inaugurata a settembre."], explanation: "\"Inaugurata\", feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some roads have been closed.", answer: "Alcune strade sono state chiuse.", altAnswers: ["Alcune strade sono state chiuse al traffico."], explanation: "Passato prossimo passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bad weather: schools closed in Genoa.", answer: "Maltempo: chiuse le scuole a Genova.", altAnswers: ["Maltempo: scuole chiuse a Genova."], explanation: "Headline style: no \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tickets [can be bought] by phone.", sentence: "I biglietti ___ con il telefono.", answer: "potranno essere acquistati", altAnswers: ["possono essere acquistati", "potranno essere comprati", "possono essere comprati", "si possono comprare"], explanation: "Modal + \"essere\" + participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Yesterday [over two hundred millimeters] of rain were recorded.", sentence: "Ieri sono stati registrati ___ di pioggia.", answer: "oltre duecento millimetri", altAnswers: ["più di duecento millimetri"], explanation: "\"Oltre\" = more than, in news style." },
      { type: "word-order", prompt: "Put the words in order to say: People are advised not to travel.", words: ["Si", "consiglia", "di", "non", "mettersi", "in", "viaggio."], translation: "People are advised not to travel.", explanation: "Official \"si consiglia di\"." },
      { type: "multiple-choice", question: "Why was the tram line delayed?", options: ["Rain slowed the work.", "There was no money.", "The tickets weren't ready.", "There was a strike."], correctIndex: 0, explanation: "\"Rallentati dalla pioggia\"." },
      { type: "multiple-choice", question: "When was the painting stolen?", options: ["In 1996", "Yesterday", "Thirty days ago", "In the nineteenth century"], correctIndex: 0, explanation: "\"Era stato rubato nel 1996\"; it was painted in the 1800s." },
      { type: "listen-choose", audio: "Ritrovato un dipinto rubato trent'anni fa.", question: "What is the headline about?", options: ["A stolen painting has been found.", "A painting has been stolen.", "A painter has died.", "A museum has reopened."], correctIndex: 0, explanation: "\"Ritrovato\" = found again." },
      { type: "dictation", audio: "Alcune strade sono state chiuse e diverse famiglie sono state evacuate.", explanation: "Two feminine plural passives." },
      { type: "speak", text: "Ritrovato un dipinto rubato nel 1996: verrà restituito ai proprietari la prossima settimana.", prompt: "Read the news aloud: Painting stolen in 1996 found: it will be returned to its owners next week.", tip: "Read the year as \"millenovecentonovantasei\".", explanation: "Headline style, then future passive." },
    ],
  },
  {
    slug: "b1-mission-recipe-or-instructions",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Recipe",
    summary: "Write a family recipe with va + participle and the si passivante: la pasta va scolata, si aggiunge il sale.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Ingredients and steps",
        body: [
          "Your mission: a food blog asks readers for a family recipe. Write the steps the Italian way, with \"si\" + verb (\"si taglia la cipolla\", \"si aggiungono i pomodori\") and \"va\" + participle for the important rules (\"il sugo va cotto a fuoco basso\").",
          "Remember agreement: \"si aggiunge il sale\" but \"si aggiungono le patate\"; \"va scolata\" (la pasta) but \"vanno lavati\" (i pomodori).",
        ],
        examples: [
          { es: "Si taglia la cipolla a pezzetti.", en: "The onion is chopped finely." },
          { es: "Si aggiungono i pomodori e un po' di sale.", en: "Add the tomatoes and a little salt." },
          { es: "Il sugo va cotto a fuoco basso per venti minuti.", en: "The sauce should cook over low heat for twenty minutes." },
          { es: "La pasta va scolata al dente.", en: "The pasta should be drained al dente." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Add the tomatoes and a little salt.", answer: "Si aggiungono i pomodori e un po' di sale.", altAnswers: ["Si aggiungono i pomodori e un pizzico di sale.", "Aggiungete i pomodori e un po' di sale."], explanation: "Plural first object: \"si aggiungono\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pasta [should be drained] al dente.", sentence: "La pasta ___ al dente.", answer: "va scolata", explanation: "\"Va\" + feminine participle." },
        ],
      },
      {
        heading: "Family secrets",
        body: [
          "Finish with a tip and a little history using the passive: \"Questa ricetta è stata inventata da mia nonna negli anni Cinquanta\", \"Il basilico va aggiunto solo alla fine\", \"Il piatto si serve con il parmigiano\".",
        ],
        examples: [
          { es: "Questa ricetta è stata inventata da mia nonna.", en: "This recipe was invented by my grandmother." },
          { es: "Il basilico va aggiunto solo alla fine.", en: "The basil should only be added at the end." },
          { es: "Il piatto si serve con il parmigiano.", en: "The dish is served with Parmesan." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The basil should only be added at the end.", answer: "Il basilico va aggiunto solo alla fine.", altAnswers: ["Il basilico va messo solo alla fine.", "Il basilico va aggiunto soltanto alla fine."], explanation: "\"Va aggiunto\"." },
          { type: "listen-choose", audio: "Questa ricetta è stata inventata da mia nonna.", question: "Who invented the recipe?", options: ["The speaker's grandmother", "The speaker", "A famous chef", "The speaker's mother"], correctIndex: 0, explanation: "\"Da mia nonna\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The onion is chopped finely.", answer: "Si taglia la cipolla a pezzetti.", altAnswers: ["La cipolla si taglia a pezzetti.", "La cipolla va tagliata a pezzetti.", "Si trita la cipolla."], explanation: "\"Si taglia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sauce should cook over low heat for twenty minutes.", answer: "Il sugo va cotto a fuoco basso per venti minuti.", altAnswers: ["Il sugo va cotto a fuoco lento per venti minuti.", "Il sugo va cotto a fuoco basso per 20 minuti."], explanation: "\"Va cotto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dish is served with Parmesan.", answer: "Il piatto si serve con il parmigiano.", altAnswers: ["Il piatto si serve col parmigiano.", "Il piatto viene servito con il parmigiano."], explanation: "\"Si serve\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This recipe was invented by my grandmother.", answer: "Questa ricetta è stata inventata da mia nonna.", explanation: "\"Da mia nonna\": no article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The potatoes are peeled] and cut into cubes.", sentence: "___ e si tagliano a cubetti.", answer: "Si sbucciano le patate", explanation: "Plural: \"si sbucciano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The tomatoes [must be washed] carefully.", sentence: "I pomodori ___ con cura.", answer: "vanno lavati", explanation: "\"Vanno\" + masculine plural." },
      { type: "word-order", prompt: "Put the words in order to say: The water must be salted when it boils.", words: ["L'acqua", "va", "salata", "quando", "bolle."], translation: "The water must be salted when it boils.", explanation: "\"Va salata\"." },
      { type: "multiple-choice", question: "Which step is correct?", options: ["Si aggiungono le uova una alla volta.", "Si aggiunge le uova una alla volta.", "Si aggiungono le uova uno alla volta.", "Le uova va aggiunte una alla volta."], correctIndex: 0, explanation: "Plural \"le uova\": \"si aggiungono\", \"una alla volta\"." },
      { type: "dictation", audio: "La pasta va scolata al dente e si serve subito.", explanation: "\"Va scolata\", \"si serve\"." },
      { type: "speak", text: "Si soffrigge la cipolla, si aggiungono i pomodori, e il sugo va cotto a fuoco basso.", prompt: "Say it in Italian: Fry the onion gently, add the tomatoes, and the sauce should cook over low heat.", tip: "\"Soffrigge\": sof-FRIG-ge, two double consonants.", explanation: "Two \"si\" passives and one \"va\"." },
    ],
  },
];

export const IT_B1_U20_WRITING: WriteExercise = {
  type: "write",
  prompt: "A food blog asks readers for a family recipe. Write yours: say who it was invented or handed down by, list the steps, and give two important rules for getting it right.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses the si passivante with correct agreement (si aggiunge il sale, si aggiungono le patate)",
    "Uses va / vanno + participle for rules, with the participle agreeing (va scolata, vanno lavati)",
    "Uses essere + participle with da for the history of the dish (è stata inventata da ...)",
    "Uses venire only in simple tenses, if at all",
  ],
  modelAnswer: "Pasta e patate della nonna Rosa. Questa ricetta è stata inventata da mia nonna a Napoli negli anni Cinquanta, quando in casa c'era poco da mangiare. Ingredienti: pasta mista, patate, una cipolla, un pezzo di crosta di parmigiano. Prima si sbucciano le patate e si tagliano a cubetti. Si soffrigge la cipolla in un po' d'olio, poi si aggiungono le patate e l'acqua. Dopo venti minuti si butta la pasta direttamente nella pentola. Due regole importanti: la crosta di parmigiano va messa all'inizio, e la pasta va mescolata spesso, perché non deve attaccarsi. Il piatto viene servito ancora caldo, con un filo d'olio. Buon appetito!",
  explanation: "\"Si sbucciano\", \"si tagliano\", \"si aggiungono\" agree with plural nouns; \"si soffrigge la cipolla\" and \"si butta la pasta\" are singular. \"Va messa\" and \"va mescolata\" agree with feminine nouns. \"È stata inventata da mia nonna\" is the passive with \"essere\" and \"da\"; \"viene servito\" is \"venire\" in a simple tense.",
};
