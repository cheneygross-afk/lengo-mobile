// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u32.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 32: Reported Speech, Part 1. Reporting verbs, tense
// backshift, time and place changes, reported questions and commands.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U32: Lesson[] = [
  {
    slug: "b1-reported-statements-present",
    level: "IT-B1",
    number: 1,
    title: "He Says That",
    summary: "Report what someone says or writes now: dice che arriva, scrive che sta bene. No tense change after a present reporting verb.",
    duration: "17 min",
    sections: [
      {
        heading: "Dice che ...",
        body: [
          "To pass on what someone says, use a reporting verb + \"che\": \"Marco dice che arriva alle otto\" (Marco says he's arriving at eight). When the reporting verb is in the present, the tenses don't change: present stays present, past stays past, future stays future.",
          "Common reporting verbs: \"dire\", \"scrivere\", \"rispondere\", \"spiegare\" (to explain), \"raccontare\" (to tell a story), \"aggiungere\" (to add).",
        ],
        examples: [
          { es: "Marco dice che arriva alle otto.", en: "Marco says he's arriving at eight." },
          { es: "Giulia scrive che sta bene.", en: "Giulia writes that she's well." },
          { es: "Il tecnico dice che è stato un guasto.", en: "The technician says it was a fault." },
          { es: "Mamma dice che verrà domenica.", en: "Mum says she'll come on Sunday." },
          { es: "Spiega che il negozio è chiuso per ferie.", en: "She explains that the shop is closed for the holidays." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco says he's arriving at eight.", answer: "Marco dice che arriva alle otto.", altAnswers: ["Marco dice che arriverà alle otto."], explanation: "Present reporting verb: no tense change." },
          { type: "listen-choose", audio: "Giulia scrive che sta bene e che torna a giugno.", question: "What does Giulia write?", options: ["She's well and coming back in June.", "She's ill.", "She's not coming back.", "She came back in June."], correctIndex: 0, explanation: "\"Sta bene\", \"torna a giugno\"." },
        ],
      },
      {
        heading: "Changing the person",
        body: [
          "Even with no tense change, pronouns and possessives change to match the new speaker. Luca says: \"Sono stanco e la mia macchina è rotta.\" You report: \"Luca dice che è stanco e che la sua macchina è rotta.\" Anna says to you: \"Ti chiamo stasera.\" You report: \"Anna dice che mi chiama stasera.\"",
          "Repeat \"che\" before each new clause.",
        ],
        examples: [
          { es: "Luca dice che è stanco e che la sua macchina è rotta.", en: "Luca says he's tired and his car is broken." },
          { es: "Anna dice che mi chiama stasera.", en: "Anna says she'll call me tonight." },
          { es: "I vicini dicono che il loro cane non abbaia mai.", en: "The neighbours say their dog never barks." },
          { es: "Dice che ci aspetta al bar.", en: "She says she's waiting for us at the bar." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca says [his] car is broken.", sentence: "Luca dice che ___ macchina è rotta.", answer: "la sua", explanation: "\"La mia\" becomes \"la sua\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anna says she'll call me tonight.", answer: "Anna dice che mi chiama stasera.", altAnswers: ["Anna dice che mi chiamerà stasera."], explanation: "\"Ti chiamo\" → \"mi chiama\"." },
        ],
      },
      {
        heading: "Passing on messages",
        body: [
          "In daily life you pass on messages all the time: \"Ha scritto Paolo: dice che è in ritardo\". \"Dice che\" is also used for hearsay: \"Dicono che domani piove\" (they say it'll rain tomorrow). \"Secondo lui\" (according to him) is a quick alternative.",
        ],
        examples: [
          { es: "Ha scritto Paolo: dice che è in ritardo.", en: "Paolo has texted: he says he's late." },
          { es: "Dicono che domani piove.", en: "They say it'll rain tomorrow." },
          { es: "Secondo lui, il film è noioso.", en: "According to him, the film is boring." },
          { es: "Il capo dice che la riunione è rimandata.", en: "The boss says the meeting is postponed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They say it'll rain tomorrow.", answer: "Dicono che domani piove.", altAnswers: ["Dicono che domani pioverà.", "Dicono che pioverà domani."], explanation: "Hearsay: \"dicono che\"." },
          { type: "multiple-choice", question: "Paolo texts: \"Sono in ritardo.\" You tell your friends:", options: ["Paolo dice che è in ritardo.", "Paolo dice che sono in ritardo.", "Paolo dice che era in ritardo.", "Paolo dice che sei in ritardo."], correctIndex: 0, explanation: "Change the person: \"sono\" → \"è\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia writes that she's well.", answer: "Giulia scrive che sta bene.", altAnswers: [], explanation: "Present: no change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The technician says it was a fault.", answer: "Il tecnico dice che è stato un guasto.", altAnswers: ["Il tecnico dice che si è trattato di un guasto."], explanation: "Past stays past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Mum says she'll come on Sunday.", answer: "Mamma dice che verrà domenica.", altAnswers: ["La mamma dice che verrà domenica.", "Mamma dice che viene domenica."], explanation: "Future stays future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boss says the meeting is postponed.", answer: "Il capo dice che la riunione è rimandata.", altAnswers: ["Il capo dice che la riunione è stata rimandata.", "Il capo dice che la riunione è spostata."], explanation: "\"Rimandare\" = to postpone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She says she's waiting for us at the bar.", answer: "Dice che ci aspetta al bar.", altAnswers: ["Lei dice che ci aspetta al bar."], explanation: "\"Vi aspetto\" → \"ci aspetta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbours say their dog never barks.", answer: "I vicini dicono che il loro cane non abbaia mai.", altAnswers: [], explanation: "\"Il nostro\" → \"il loro\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He explains [that] the shop is closed.", sentence: "Spiega ___ il negozio è chiuso.", answer: "che", explanation: "Reporting verb + \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sara says she [has] a new job.", sentence: "Sara dice che ___ un nuovo lavoro.", answer: "ha", explanation: "\"Ho\" → \"ha\": third person." },
      { type: "word-order", prompt: "Put the words in order to say: According to him, the film is boring.", words: ["Secondo", "lui,", "il", "film", "è", "noioso."], translation: "According to him, the film is boring.", explanation: "\"Secondo lui\" + indicative." },
      { type: "multiple-choice", question: "Anna tells you: \"Ti aspetto qui.\" You report:", options: ["Anna dice che mi aspetta lì.", "Anna dice che ti aspetta qui.", "Anna dice che mi aspettava qui.", "Anna dice che ti aspetto lì."], correctIndex: 0, explanation: "\"Ti\" → \"mi\", \"aspetto\" → \"aspetta\"; you're elsewhere, so \"qui\" → \"lì\"." },
      { type: "dictation", audio: "Paolo dice che è in ritardo e che arriva tra dieci minuti.", explanation: "Two clauses, two \"che\"." },
      { type: "speak", text: "Ha scritto Giulia: dice che sta bene e che torna a giugno.", prompt: "Pass on the message: Giulia has written: she says she's well and she's coming back in June.", tip: "Repeat \"che\" before each clause.", explanation: "Present reporting verb, no tense change." },
    ],
  },
  {
    slug: "b1-reported-statements-past",
    level: "IT-B1",
    number: 2,
    title: "He Said That",
    summary: "Report what someone said: ha detto che era stanco, che aveva perso il treno, che sarebbe venuto. The tenses shift back.",
    duration: "17 min",
    sections: [
      {
        heading: "Present → imperfetto",
        body: [
          "When the reporting verb is in the past (\"ha detto\", \"disse\", \"diceva\"), the tenses shift back. The present becomes the imperfetto: \"Sono stanco\" → \"Ha detto che era stanco\". \"Abito a Pisa\" → \"Ha detto che abitava a Pisa\".",
          "The imperfetto stays the same: \"Ero malato\" → \"Ha detto che era malato\".",
        ],
        examples: [
          { es: "Ha detto che era stanco.", en: "He said he was tired." },
          { es: "Mi ha detto che abitava a Pisa.", en: "She told me she lived in Pisa." },
          { es: "Hanno detto che non avevano tempo.", en: "They said they didn't have time." },
          { es: "Ha spiegato che il treno era in ritardo.", en: "He explained that the train was late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he was tired.", answer: "Ha detto che era stanco.", altAnswers: ["Lui ha detto che era stanco.", "Ha detto di essere stanco."], explanation: "\"Sono\" → \"era\"." },
          { type: "listen-choose", audio: "Mi ha detto che abitava a Pisa.", question: "What did she say?", options: ["She lived in Pisa.", "She was going to Pisa.", "She had lived in Pisa.", "She would live in Pisa."], correctIndex: 0, explanation: "\"Abitava\": reported present." },
        ],
      },
      {
        heading: "Past → trapassato",
        body: [
          "The passato prossimo becomes the trapassato prossimo: \"Ho perso il treno\" → \"Ha detto che aveva perso il treno\". \"Sono arrivata ieri\" → \"Ha detto che era arrivata il giorno prima\". The auxiliary goes into the imperfetto: \"ho\" → \"aveva\", \"sono\" → \"era\".",
        ],
        examples: [
          { es: "Ha detto che aveva perso il treno.", en: "He said he'd missed the train." },
          { es: "Mi ha raccontato che era andata in Sicilia.", en: "She told me she'd been to Sicily." },
          { es: "Hanno risposto che avevano già pagato.", en: "They replied that they'd already paid." },
          { es: "Ha detto che non aveva mai visto Napoli.", en: "He said he'd never seen Naples." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said he [had missed] the train.", sentence: "Ha detto che ___ il treno.", answer: "aveva perso", explanation: "\"Ho perso\" → \"aveva perso\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They replied that they'd already paid.", answer: "Hanno risposto che avevano già pagato.", altAnswers: ["Hanno risposto di aver già pagato."], explanation: "Trapassato prossimo." },
        ],
      },
      {
        heading: "Future → conditional past",
        body: [
          "A future becomes the conditional past (the future in the past): \"Verrò\" → \"Ha detto che sarebbe venuto\" (he said he would come). \"Ti chiamerò\" → \"Ha detto che mi avrebbe chiamato\". A present conditional also becomes past: \"Vorrei venire\" → \"Ha detto che sarebbe voluto venire\".",
          "English uses would + verb; Italian uses the conditional past, never the present conditional: not \"ha detto che verrebbe\".",
          "In relaxed speech, if the fact is still true now, people often keep the present: \"Ha detto che è stanco\". In writing, shift the tense.",
        ],
        examples: [
          { es: "Ha detto che sarebbe venuto.", en: "He said he would come." },
          { es: "Mi ha promesso che mi avrebbe chiamato.", en: "She promised she would call me." },
          { es: "Hanno detto che avrebbero pagato loro.", en: "They said they would pay." },
          { es: "Ha detto che sarebbe arrivata tardi.", en: "She said she'd be late arriving." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She promised she would call me.", answer: "Mi ha promesso che mi avrebbe chiamato.", altAnswers: ["Mi ha promesso che mi avrebbe chiamata.", "Ha promesso che mi avrebbe chiamato.", "Ha promesso che mi avrebbe chiamata."], explanation: "Future in the past = conditional past." },
          { type: "multiple-choice", question: "Last month Luca said: \"Verrò.\" In writing, report it: Luca ha detto ...", options: ["che sarebbe venuto", "che verrebbe", "che venga", "che è venuto"], correctIndex: 0, explanation: "Conditional past, not present conditional." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me she lived in Pisa.", answer: "Mi ha detto che abitava a Pisa.", altAnswers: ["Mi ha detto che viveva a Pisa."], explanation: "Present → imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They said they didn't have time.", answer: "Hanno detto che non avevano tempo.", altAnswers: [], explanation: "\"Non abbiamo\" → \"non avevano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he'd missed the train.", answer: "Ha detto che aveva perso il treno.", altAnswers: ["Ha detto di aver perso il treno."], explanation: "Passato prossimo → trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she'd been to Sicily.", answer: "Ha detto che era stata in Sicilia.", altAnswers: ["Ha detto che era andata in Sicilia."], explanation: "\"Sono stata\" → \"era stata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he would come.", answer: "Ha detto che sarebbe venuto.", altAnswers: ["Lui ha detto che sarebbe venuto."], explanation: "Future → conditional past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They said they would pay.", answer: "Hanno detto che avrebbero pagato loro.", altAnswers: ["Hanno detto che avrebbero pagato."], explanation: "\"Pagheremo\" → \"avrebbero pagato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He explained that the train [was] late.", sentence: "Ha spiegato che il treno ___ in ritardo.", answer: "era", explanation: "\"È\" → \"era\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She said she [would arrive] late.", sentence: "Ha detto che ___ tardi.", answer: "sarebbe arrivata", altAnswers: ["sarebbe arrivato"], explanation: "Conditional past with \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: He said he had never seen Naples.", words: ["Ha", "detto", "che", "non", "aveva", "mai", "visto", "Napoli."], translation: "He said he had never seen Naples.", explanation: "Trapassato prossimo." },
      { type: "multiple-choice", question: "Sara said: \"Sono arrivata.\" Report it:", options: ["Sara ha detto che era arrivata.", "Sara ha detto che arriverebbe.", "Sara ha detto che arrivasse.", "Sara ha detto che sarebbe arrivata."], correctIndex: 0, explanation: "Passato prossimo → trapassato." },
      { type: "dictation", audio: "Mi ha promesso che mi avrebbe chiamato, ma non l'ha fatto.", explanation: "Future in the past." },
      { type: "speak", text: "Marco ha detto che era stanco, che aveva perso il treno e che sarebbe venuto domani.", prompt: "Report what Marco said: he said he was tired, he'd missed the train and he would come tomorrow.", tip: "Three shifts: \"era\", \"aveva perso\", \"sarebbe venuto\".", explanation: "Imperfetto, trapassato, conditional past." },
    ],
  },
  {
    slug: "b1-reported-time-place",
    level: "IT-B1",
    number: 3,
    title: "Changing Time and Place",
    summary: "Shift time and place words when you report: domani → il giorno dopo, ieri → il giorno prima, qui → lì, questo → quello.",
    duration: "17 min",
    sections: [
      {
        heading: "Time words",
        body: [
          "If you report later, time words shift too: \"oggi\" → \"quel giorno\", \"domani\" → \"il giorno dopo\" (or \"l'indomani\"), \"ieri\" → \"il giorno prima\", \"la settimana prossima\" → \"la settimana dopo\", \"un anno fa\" → \"un anno prima\", \"adesso\" → \"in quel momento\" or \"allora\".",
          "If you report on the same day, keep them: at 10 a.m. Anna says \"Parto domani\"; at noon you say \"Anna ha detto che parte domani\".",
        ],
        examples: [
          { es: "Ha detto che sarebbe partito il giorno dopo.", en: "He said he'd leave the next day." },
          { es: "Mi ha detto che era arrivata il giorno prima.", en: "She told me she'd arrived the day before." },
          { es: "Ha detto che in quel momento era occupato.", en: "He said he was busy at that moment." },
          { es: "Hanno detto che si erano sposati un anno prima.", en: "They said they'd got married a year earlier." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he'd leave the next day.", answer: "Ha detto che sarebbe partito il giorno dopo.", altAnswers: ["Ha detto che sarebbe partito l'indomani.", "Ha detto che sarebbe partito il giorno seguente."], explanation: "\"Domani\" → \"il giorno dopo\"." },
          { type: "listen-choose", audio: "Hanno detto che si erano sposati un anno prima.", question: "When did they get married?", options: ["a year before they said it", "a year from now", "last week", "they haven't married yet"], correctIndex: 0, explanation: "\"Un anno fa\" → \"un anno prima\"." },
        ],
      },
      {
        heading: "Place and demonstratives",
        body: [
          "\"Qui\" / \"qua\" → \"lì\" / \"là\"; \"questo\" → \"quello\"; \"venire\" often → \"andare\" when the speaker is no longer where they were. Valeria said in Rome: \"Questa città mi piace, resto qui.\" Later in Milan you report: \"Valeria ha detto che quella città le piaceva e che sarebbe rimasta lì.\"",
        ],
        examples: [
          { es: "Ha detto che quella città le piaceva.", en: "She said she liked that city." },
          { es: "Ha detto che sarebbe rimasta lì.", en: "She said she'd stay there." },
          { es: "Mi ha detto che quel libro era suo.", en: "He told me that book was his." },
          { es: "Ha detto che sarebbe andato alla festa.", en: "He said he'd go to the party." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He told me [that] book was his.", sentence: "Mi ha detto che ___ libro era suo.", answer: "quel", explanation: "\"Questo\" → \"quello\"; \"quel\" before a consonant." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she'd stay there.", answer: "Ha detto che sarebbe rimasta lì.", altAnswers: ["Ha detto che sarebbe restata lì.", "Ha detto che sarebbe rimasta là."], explanation: "\"Qui\" → \"lì\"." },
        ],
      },
      {
        heading: "Putting it together",
        body: [
          "Check four things when you report: the person (\"io\" → \"lui / lei\"), the tense, the time, the place. Monday, Carla: \"Domani porto qui la mia torta.\" Friday, you: \"Carla ha detto che il giorno dopo avrebbe portato lì la sua torta.\"",
        ],
        examples: [
          { es: "Carla ha detto che il giorno dopo avrebbe portato la sua torta.", en: "Carla said she'd bring her cake the next day." },
          { es: "Ha detto che quella sera non poteva uscire.", en: "He said he couldn't go out that evening." },
          { es: "Mi ha detto che la settimana dopo avrebbe cambiato casa.", en: "She told me she'd move house the following week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he couldn't go out that evening.", answer: "Ha detto che quella sera non poteva uscire.", altAnswers: ["Ha detto che non poteva uscire quella sera."], explanation: "\"Stasera\" → \"quella sera\"." },
          { type: "multiple-choice", question: "A week ago Luigi said: \"Torno domani.\" Today you say:", options: ["Luigi ha detto che sarebbe tornato il giorno dopo.", "Luigi ha detto che torna domani.", "Luigi ha detto che tornerebbe domani.", "Luigi ha detto che sarebbe tornato domani."], correctIndex: 0, explanation: "Conditional past + \"il giorno dopo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me she'd arrived the day before.", answer: "Mi ha detto che era arrivata il giorno prima.", altAnswers: ["Mi ha detto che era arrivata il giorno precedente."], explanation: "\"Ieri\" → \"il giorno prima\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he was busy at that moment.", answer: "Ha detto che in quel momento era occupato.", altAnswers: ["Ha detto che era occupato in quel momento."], explanation: "\"Adesso\" → \"in quel momento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They said they'd got married a year earlier.", answer: "Hanno detto che si erano sposati un anno prima.", altAnswers: [], explanation: "\"Fa\" → \"prima\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she liked that city.", answer: "Ha detto che quella città le piaceva.", altAnswers: ["Ha detto che le piaceva quella città."], explanation: "\"Questa\" → \"quella\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me she'd move house the following week.", answer: "Mi ha detto che la settimana dopo avrebbe cambiato casa.", altAnswers: ["Mi ha detto che avrebbe cambiato casa la settimana dopo.", "Mi ha detto che si sarebbe trasferita la settimana dopo."], explanation: "\"La settimana prossima\" → \"la settimana dopo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said that day was his birthday.", answer: "Ha detto che quel giorno era il suo compleanno.", altAnswers: [], explanation: "\"Oggi\" → \"quel giorno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said he'd call [the next day].", sentence: "Ha detto che avrebbe chiamato ___.", answer: "il giorno dopo", altAnswers: ["l'indomani", "il giorno seguente"], explanation: "\"Domani\" → \"il giorno dopo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She said she'd wait [there].", sentence: "Ha detto che avrebbe aspettato ___.", answer: "lì", altAnswers: ["là"], explanation: "\"Qui\" → \"lì\"." },
      { type: "word-order", prompt: "Put the words in order to say: He said he would go to the party.", words: ["Ha", "detto", "che", "sarebbe", "andato", "alla", "festa."], translation: "He said he would go to the party.", explanation: "\"Verrò\" → \"sarebbe andato\"." },
      { type: "multiple-choice", question: "\"Ieri\" in reported speech (reported much later) becomes ...", options: ["il giorno prima", "il giorno dopo", "quel giorno", "domani"], correctIndex: 0, explanation: "Yesterday → the day before." },
      { type: "dictation", audio: "Ha detto che quella sera non poteva uscire.", explanation: "\"Quella sera\" for \"stasera\"." },
      { type: "speak", text: "Carla ha detto che il giorno dopo avrebbe portato la sua torta.", prompt: "Report it on Friday. On Monday Carla said: \"Domani porto la mia torta.\"", tip: "Change four things: person, tense, time, possessive.", explanation: "\"Domani\" → \"il giorno dopo\", future → conditional past." },
    ],
  },
  {
    slug: "b1-reported-questions",
    level: "IT-B1",
    number: 4,
    title: "He Asked If",
    summary: "Report questions: mi ha chiesto se venivo, dove abitavo, perché ero in ritardo.",
    duration: "17 min",
    sections: [
      {
        heading: "Yes / no questions: se",
        body: [
          "A yes / no question is reported with \"chiedere se\" (to ask if): \"Vieni?\" → \"Mi ha chiesto se venivo\". \"Hai fame?\" → \"Mi ha chiesto se avevo fame\". The same tense shifts apply after a past reporting verb. Use \"domandare\" as an alternative to \"chiedere\".",
          "In formal writing, the imperfect subjunctive is also used after \"se\": \"Mi ha chiesto se venissi\". In speech, the indicative is normal.",
        ],
        examples: [
          { es: "Mi ha chiesto se venivo alla festa.", en: "He asked me if I was coming to the party." },
          { es: "Ci hanno chiesto se avevamo fame.", en: "They asked us if we were hungry." },
          { es: "Le ho chiesto se aveva finito.", en: "I asked her if she'd finished." },
          { es: "Mi chiede se posso aiutarlo.", en: "He's asking if I can help him." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me if I was coming to the party.", answer: "Mi ha chiesto se venivo alla festa.", altAnswers: ["Mi ha chiesto se andavo alla festa.", "Mi ha domandato se venivo alla festa.", "Mi ha chiesto se venissi alla festa."], explanation: "\"Chiedere se\" + imperfetto." },
          { type: "listen-choose", audio: "Ci hanno chiesto se avevamo fame.", question: "What did they ask?", options: ["if we were hungry", "if we were tired", "if we had eaten", "where we were"], correctIndex: 0, explanation: "\"Avere fame\"." },
        ],
      },
      {
        heading: "Question words",
        body: [
          "With a question word, keep the word: \"Dove abiti?\" → \"Mi ha chiesto dove abitavo\". \"Perché sei in ritardo?\" → \"Mi ha chiesto perché ero in ritardo\". \"Quando parti?\" → \"Mi ha chiesto quando partivo\". \"Che cosa\" can become \"che cosa\" or \"cosa\": \"Mi ha chiesto cosa volevo\".",
          "No \"che\" before the question word, and no question mark at the end.",
        ],
        examples: [
          { es: "Mi ha chiesto dove abitavo.", en: "She asked me where I lived." },
          { es: "Il prof mi ha chiesto perché ero in ritardo.", en: "The teacher asked me why I was late." },
          { es: "Mi ha chiesto cosa volevo per cena.", en: "He asked me what I wanted for dinner." },
          { es: "Gli ho chiesto quanto costava.", en: "I asked him how much it cost." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She asked me [where I lived].", sentence: "Mi ha chiesto ___.", answer: "dove abitavo", altAnswers: ["dove vivevo"], explanation: "Question word + imperfetto, no \"che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked him how much it cost.", answer: "Gli ho chiesto quanto costava.", altAnswers: ["Gli ho domandato quanto costava."], explanation: "\"Gli\" = to him." },
        ],
      },
      {
        heading: "Chiedere a qualcuno",
        body: [
          "\"Chiedere\" takes \"a\" for the person: \"chiedere a Marco\", so the pronouns are indirect: \"mi\", \"ti\", \"gli\", \"le\", \"ci\", \"vi\", \"gli\". \"Le ho chiesto\" = I asked her; \"Gli ho chiesto\" = I asked him (or them). Not \"l'ho chiesto\" for a person.",
        ],
        examples: [
          { es: "Ho chiesto a Marco se veniva.", en: "I asked Marco if he was coming." },
          { es: "Le ho chiesto come stava.", en: "I asked her how she was." },
          { es: "Gli abbiamo chiesto quando tornavano.", en: "We asked them when they were coming back." },
          { es: "Vi hanno chiesto il nome?", en: "Did they ask you your name?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked her how she was.", answer: "Le ho chiesto come stava.", altAnswers: ["Le ho domandato come stava."], explanation: "\"Le\" = to her." },
          { type: "multiple-choice", question: "\"I asked him\" is ...", options: ["Gli ho chiesto", "L'ho chiesto", "Lo ho chiesto", "Ho chiesto lui"], correctIndex: 0, explanation: "\"Chiedere a\" → indirect pronoun \"gli\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They asked us if we were hungry.", answer: "Ci hanno chiesto se avevamo fame.", altAnswers: ["Ci hanno domandato se avevamo fame."], explanation: "\"Se\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher asked me why I was late.", answer: "Il prof mi ha chiesto perché ero in ritardo.", altAnswers: ["Il professore mi ha chiesto perché ero in ritardo.", "La prof mi ha chiesto perché ero in ritardo.", "L'insegnante mi ha chiesto perché ero in ritardo."], explanation: "\"Perché sei\" → \"perché ero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me what I wanted for dinner.", answer: "Mi ha chiesto cosa volevo per cena.", altAnswers: ["Mi ha chiesto che cosa volevo per cena.", "Mi ha chiesto cosa volevo a cena."], explanation: "\"Cosa vuoi\" → \"cosa volevo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked Marco if he was coming.", answer: "Ho chiesto a Marco se veniva.", altAnswers: ["Ho domandato a Marco se veniva."], explanation: "\"Chiedere a\" + \"se\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked me if I'd finished.", answer: "Mi ha chiesto se avevo finito.", altAnswers: ["Mi ha domandato se avevo finito."], explanation: "\"Hai finito?\" → \"se avevo finito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We asked them when they were coming back.", answer: "Gli abbiamo chiesto quando tornavano.", altAnswers: ["Abbiamo chiesto loro quando tornavano.", "Gli abbiamo chiesto quando sarebbero tornati."], explanation: "\"Gli\" = to them (spoken)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He asked me [if] I had a car.", sentence: "Mi ha chiesto ___ avevo la macchina.", answer: "se", explanation: "Yes / no question → \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She asked me [how old I was].", sentence: "Mi ha chiesto ___.", answer: "quanti anni avevo", explanation: "\"Quanti anni hai?\" → \"quanti anni avevo\"." },
      { type: "word-order", prompt: "Put the words in order to say: He asked me where I worked.", words: ["Mi", "ha", "chiesto", "dove", "lavoravo."], translation: "He asked me where I worked.", explanation: "No \"che\" before \"dove\"." },
      { type: "multiple-choice", question: "\"Vieni anche tu?\" reported:", options: ["Mi ha chiesto se venivo anch'io.", "Mi ha chiesto che venivo anch'io.", "Mi ha chiesto se vieni anche tu?", "Mi ha detto se venivo anch'io."], correctIndex: 0, explanation: "\"Chiedere se\"; \"tu\" → \"io\"." },
      { type: "dictation", audio: "Mi ha chiesto dove abitavo e perché ero venuto in Italia.", explanation: "Two reported questions." },
      { type: "speak", text: "Mi ha chiesto come mi chiamavo, dove abitavo e se avevo la patente.", prompt: "Report the interview: She asked me what my name was, where I lived and if I had a driving licence.", tip: "No question intonation: it's a statement.", explanation: "Question words and \"se\" + imperfetto." },
    ],
  },
  {
    slug: "b1-reported-commands",
    level: "IT-B1",
    number: 5,
    title: "He Told Me To",
    summary: "Report orders and requests with di + infinitive: mi ha detto di aspettare, ci hanno chiesto di non fare rumore.",
    duration: "17 min",
    sections: [
      {
        heading: "Dire di + infinitive",
        body: [
          "An imperative is reported with \"dire / chiedere a qualcuno di\" + infinitive: \"Aspetta!\" → \"Mi ha detto di aspettare\". \"Non fate rumore!\" → \"Ci hanno chiesto di non fare rumore\". The infinitive doesn't change with the tense, so this is the easiest reported form.",
          "\"Chiedere di\" is a polite request; \"dire di\" is neutral; \"ordinare di\" is an order.",
        ],
        examples: [
          { es: "Mi ha detto di aspettare.", en: "He told me to wait." },
          { es: "Ci hanno chiesto di non fare rumore.", en: "They asked us not to make noise." },
          { es: "Il medico mi ha detto di riposare.", en: "The doctor told me to rest." },
          { es: "Dice di chiamarlo dopo le sei.", en: "He says to call him after six." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor told me to rest.", answer: "Il medico mi ha detto di riposare.", altAnswers: ["Il dottore mi ha detto di riposare.", "Il medico mi ha detto di riposarmi."], explanation: "\"Dire di\" + infinitive." },
          { type: "listen-choose", audio: "Ci hanno chiesto di non fare rumore dopo le undici.", question: "What were they asked?", options: ["not to make noise after eleven", "to leave at eleven", "to come back at eleven", "to turn the music up"], correctIndex: 0, explanation: "\"Di non fare rumore\"." },
        ],
      },
      {
        heading: "Pronouns on the infinitive",
        body: [
          "Object pronouns attach to the end of the infinitive: \"Chiamami!\" → \"Mi ha detto di chiamarla\" (she told me to call her). \"Non toccarlo!\" → \"Mi ha detto di non toccarlo\". Reflexive verbs too: \"Sbrigati!\" → \"Mi ha detto di sbrigarmi\" (to hurry up).",
        ],
        examples: [
          { es: "Mi ha detto di chiamarla.", en: "She told me to call her." },
          { es: "Mi ha detto di non toccarlo.", en: "He told me not to touch it." },
          { es: "La mamma ci ha detto di sbrigarci.", en: "Mum told us to hurry up." },
          { es: "Gli ho chiesto di aiutarmi.", en: "I asked him to help me." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She told me to [call her].", sentence: "Mi ha detto di ___.", answer: "chiamarla", explanation: "Pronoun attached to the infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked him to help me.", answer: "Gli ho chiesto di aiutarmi.", altAnswers: ["Gli ho chiesto se poteva aiutarmi."], explanation: "\"Chiedere a qualcuno di\" + infinitive." },
        ],
      },
      {
        heading: "Polite requests and advice",
        body: [
          "A polite question can be reported as a command: \"Puoi chiudere la porta?\" → \"Mi ha chiesto di chiudere la porta\". Advice works the same way: \"Dovresti studiare di più\" → \"Mi ha consigliato di studiare di più\". Other verbs: \"pregare di\" (to beg), \"ricordare di\" (to remind), \"proibire di\" (to forbid).",
        ],
        examples: [
          { es: "Mi ha chiesto di chiudere la porta.", en: "She asked me to close the door." },
          { es: "Mi ha consigliato di studiare di più.", en: "He advised me to study more." },
          { es: "Ricordami di comprare il pane.", en: "Remind me to buy bread." },
          { es: "Ci hanno proibito di entrare.", en: "They forbade us to go in." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He advised me to study more.", answer: "Mi ha consigliato di studiare di più.", altAnswers: [], explanation: "\"Consigliare a qualcuno di\"." },
          { type: "multiple-choice", question: "\"Puoi chiudere la finestra?\" reported:", options: ["Mi ha chiesto di chiudere la finestra.", "Mi ha chiesto che chiudo la finestra.", "Mi ha detto che chiudere la finestra.", "Mi ha chiesto chiudere la finestra."], correctIndex: 0, explanation: "\"Chiedere di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told me to wait.", answer: "Mi ha detto di aspettare.", altAnswers: [], explanation: "\"Aspetta!\" → \"di aspettare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They asked us not to make noise.", answer: "Ci hanno chiesto di non fare rumore.", altAnswers: ["Ci hanno detto di non fare rumore."], explanation: "\"Di non\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told me not to touch it.", answer: "Mi ha detto di non toccarlo.", altAnswers: ["Mi ha detto di non toccarla."], explanation: "Pronoun on the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Mum told us to hurry up.", answer: "La mamma ci ha detto di sbrigarci.", altAnswers: ["Mamma ci ha detto di sbrigarci.", "La mamma ci ha detto di muoverci."], explanation: "Reflexive: \"sbrigarci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked me to close the door.", answer: "Mi ha chiesto di chiudere la porta.", altAnswers: [], explanation: "Polite request → \"chiedere di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They forbade us to go in.", answer: "Ci hanno proibito di entrare.", altAnswers: ["Ci hanno vietato di entrare."], explanation: "\"Proibire di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He says [to call him] after six.", sentence: "Dice ___ dopo le sei.", answer: "di chiamarlo", explanation: "\"Dire di\" + infinitive + pronoun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Remind me [to buy] bread. (to a friend)", sentence: "Ricordami ___ il pane.", answer: "di comprare", explanation: "\"Ricordare di\"." },
      { type: "word-order", prompt: "Put the words in order to say: The teacher told us to turn off our phones.", words: ["La", "prof", "ci", "ha", "detto", "di", "spegnere", "i", "telefoni."], translation: "The teacher told us to turn off our phones.", explanation: "\"Dire di\" + infinitive." },
      { type: "multiple-choice", question: "\"Non uscire!\" reported:", options: ["Mi ha detto di non uscire.", "Mi ha detto che non esco.", "Mi ha detto non uscire.", "Mi ha detto di non esci."], correctIndex: 0, explanation: "\"Di non\" + infinitive." },
      { type: "dictation", audio: "Il medico mi ha detto di riposare e di bere molta acqua.", explanation: "Two commands, two \"di\"." },
      { type: "speak", text: "La vicina ci ha chiesto di non fare rumore e di chiudere il portone.", prompt: "Report it: The neighbour asked us not to make noise and to close the main door.", tip: "Repeat \"di\" before each infinitive.", explanation: "\"Chiedere di\" + infinitive." },
    ],
  },
  {
    slug: "b1-drill-reported-statements",
    level: "IT-B1",
    number: 6,
    title: "Drill: Reporting Statements",
    summary: "Report statements fast with the right tense shift: present → imperfetto, past → trapassato, future → conditional past.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "The shifts",
        body: [
          "After \"ha detto che\": \"è\" → \"era\", \"ha fatto\" → \"aveva fatto\", \"farà\" → \"avrebbe fatto\", \"era\" stays \"era\". Change the person too: \"io\" → \"lui / lei\", \"mio\" → \"suo\". After \"dice che\": no tense change.",
        ],
        examples: [
          { es: "Ha detto che era a casa.", en: "He said he was at home." },
          { es: "Ha detto che aveva fatto la spesa.", en: "She said she'd done the shopping." },
          { es: "Ha detto che avrebbe fatto tardi.", en: "He said he'd be late." },
          { es: "Dice che è a casa.", en: "He says he's at home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she'd done the shopping.", answer: "Ha detto che aveva fatto la spesa.", altAnswers: ["Ha detto di aver fatto la spesa."], explanation: "\"Ho fatto\" → \"aveva fatto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he'd be late.", answer: "Ha detto che avrebbe fatto tardi.", altAnswers: ["Ha detto che sarebbe arrivato tardi.", "Ha detto che sarebbe arrivato in ritardo."], explanation: "\"Farò tardi\" → \"avrebbe fatto tardi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he was at home.", answer: "Ha detto che era a casa.", altAnswers: ["Ha detto di essere a casa."], explanation: "\"Sono\" → \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she didn't like fish.", answer: "Ha detto che non le piaceva il pesce.", altAnswers: [], explanation: "\"Non mi piace\" → \"non le piaceva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They said they'd already eaten.", answer: "Hanno detto che avevano già mangiato.", altAnswers: ["Hanno detto di aver già mangiato."], explanation: "Trapassato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told me he'd lost his keys.", answer: "Mi ha detto che aveva perso le chiavi.", altAnswers: ["Mi ha detto che aveva perso le sue chiavi."], explanation: "\"Ho perso\" → \"aveva perso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she would write to me.", answer: "Ha detto che mi avrebbe scritto.", altAnswers: [], explanation: "Future → conditional past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They said they would leave on Monday.", answer: "Hanno detto che sarebbero partiti lunedì.", altAnswers: ["Hanno detto che sarebbero partite lunedì."], explanation: "\"Partiremo\" → \"sarebbero partiti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He says he's ill.", answer: "Dice che è malato.", altAnswers: ["Dice che sta male."], explanation: "Present reporting verb: no change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said her brother was a doctor.", answer: "Ha detto che suo fratello era medico.", altAnswers: ["Ha detto che suo fratello faceva il medico."], explanation: "\"Mio\" → \"suo\"; \"è\" → \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He explained that he had never driven.", answer: "Ha spiegato che non aveva mai guidato.", altAnswers: [], explanation: "\"Non ho mai guidato\" → \"non aveva mai guidato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They replied that they would think about it.", answer: "Hanno risposto che ci avrebbero pensato.", altAnswers: [], explanation: "\"Ci penseremo\" → \"ci avrebbero pensato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said he [lived] in Turin.", sentence: "Ha detto che ___ a Torino.", answer: "viveva", altAnswers: ["abitava"], explanation: "Present → imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She said she [had found] a flat.", sentence: "Ha detto che ___ un appartamento.", answer: "aveva trovato", explanation: "Trapassato." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They said they [would come back] later.", sentence: "Hanno detto che ___ più tardi.", answer: "sarebbero tornati", altAnswers: ["sarebbero tornate", "sarebbero ritornati"], explanation: "Conditional past with \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said he [was going out] with friends.", sentence: "Ha detto che ___ con gli amici.", answer: "usciva", explanation: "\"Esco\" → \"usciva\"." },
      { type: "word-order", prompt: "Put the words in order to say: She told me she had already paid.", words: ["Mi", "ha", "detto", "che", "aveva", "già", "pagato."], translation: "She told me she had already paid.", explanation: "\"Già\" between auxiliary and participle." },
      { type: "multiple-choice", question: "\"Partirò domani\" reported a week later:", options: ["Ha detto che sarebbe partito il giorno dopo.", "Ha detto che partirebbe domani.", "Ha detto che partirà domani.", "Ha detto che partiva domani."], correctIndex: 0, explanation: "Conditional past + \"il giorno dopo\"." },
      { type: "dictation", audio: "Ha detto che era stanca e che sarebbe andata a letto presto.", explanation: "Imperfetto + conditional past." },
      { type: "dictation", audio: "Mi hanno detto che avevano già prenotato.", explanation: "Trapassato prossimo." },
      { type: "speak", text: "Laura ha detto che aveva trovato lavoro a Bologna e che si sarebbe trasferita a settembre.", prompt: "Report it: Laura said she'd found a job in Bologna and she would move in September.", tip: "\"Si sarebbe trasferita\": reflexive pronoun first.", explanation: "Trapassato + conditional past." },
    ],
  },
  {
    slug: "b1-drill-reported-questions-commands",
    level: "IT-B1",
    number: 7,
    title: "Drill: Reporting Questions and Commands",
    summary: "Report questions with se and question words, and commands with di + infinitive, fast.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Se, dove, di",
        body: [
          "Yes / no question → \"chiedere se\": \"Mi ha chiesto se ero libero\". Question word → keep it: \"Mi ha chiesto dove andavo\". Command or request → \"dire / chiedere di\" + infinitive: \"Mi ha detto di stare zitto\".",
        ],
        examples: [
          { es: "Mi ha chiesto se ero libero sabato.", en: "He asked me if I was free on Saturday." },
          { es: "Mi ha chiesto dove andavo.", en: "She asked me where I was going." },
          { es: "Ci ha detto di stare zitti.", en: "He told us to be quiet." },
          { es: "Le ho chiesto di richiamarmi.", en: "I asked her to call me back." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me if I was free on Saturday.", answer: "Mi ha chiesto se ero libero sabato.", altAnswers: ["Mi ha chiesto se ero libera sabato.", "Mi ha chiesto se fossi libero sabato.", "Mi ha chiesto se fossi libera sabato."], explanation: "\"Se\" + imperfetto." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told us to be quiet.", answer: "Ci ha detto di stare zitti.", altAnswers: ["Ci ha detto di fare silenzio.", "Ci ha detto di stare zitte."], explanation: "\"Dire di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked me where I was going.", answer: "Mi ha chiesto dove andavo.", altAnswers: ["Mi ha domandato dove andavo."], explanation: "\"Dove vai?\" → \"dove andavo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked her to call me back.", answer: "Le ho chiesto di richiamarmi.", altAnswers: [], explanation: "\"Le\" + \"chiedere di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me if I spoke Italian.", answer: "Mi ha chiesto se parlavo italiano.", altAnswers: ["Mi ha chiesto se parlavo l'italiano.", "Mi ha chiesto se parlassi italiano."], explanation: "\"Se\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They asked us what we were doing.", answer: "Ci hanno chiesto cosa facevamo.", altAnswers: ["Ci hanno chiesto che cosa facevamo.", "Ci hanno chiesto cosa stavamo facendo."], explanation: "\"Cosa fate?\" → \"cosa facevamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The policeman told me to stop.", answer: "Il vigile mi ha detto di fermarmi.", altAnswers: ["Il poliziotto mi ha detto di fermarmi.", "L'agente mi ha detto di fermarmi."], explanation: "Reflexive infinitive: \"fermarmi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked me when the film started.", answer: "Mi ha chiesto quando cominciava il film.", altAnswers: ["Mi ha chiesto quando iniziava il film.", "Mi ha chiesto a che ora cominciava il film."], explanation: "\"Quando comincia?\" → \"quando cominciava\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My boss told me not to worry.", answer: "Il mio capo mi ha detto di non preoccuparmi.", altAnswers: ["Il capo mi ha detto di non preoccuparmi."], explanation: "\"Non ti preoccupare\" → \"di non preoccuparmi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me why I was laughing.", answer: "Mi ha chiesto perché ridevo.", altAnswers: ["Mi ha domandato perché ridevo."], explanation: "\"Perché ridi?\" → \"perché ridevo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The waiter asked us if we had booked.", answer: "Il cameriere ci ha chiesto se avevamo prenotato.", altAnswers: [], explanation: "\"Avete prenotato?\" → \"se avevamo prenotato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They told us to take the second street on the left.", answer: "Ci hanno detto di prendere la seconda strada a sinistra.", altAnswers: ["Ci hanno detto di prendere la seconda a sinistra."], explanation: "Directions → \"dire di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He asked me [if] I wanted a coffee.", sentence: "Mi ha chiesto ___ volevo un caffè.", answer: "se", explanation: "Yes / no → \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She told me [to sit down].", sentence: "Mi ha detto ___.", answer: "di sedermi", explanation: "\"Siediti\" → \"di sedermi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I asked him [how much] it cost.", sentence: "Gli ho chiesto ___ costava.", answer: "quanto", explanation: "Keep the question word." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They asked us [not to park] there.", sentence: "Ci hanno chiesto ___ lì.", answer: "di non parcheggiare", explanation: "\"Di non\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: She asked me who I was.", words: ["Mi", "ha", "chiesto", "chi", "ero."], translation: "She asked me who I was.", explanation: "\"Chi sei?\" → \"chi ero\"." },
      { type: "multiple-choice", question: "\"Mettiti il cappotto!\" reported:", options: ["Mi ha detto di mettermi il cappotto.", "Mi ha detto che mi metto il cappotto.", "Mi ha detto di mettiti il cappotto.", "Mi ha detto se mettermi il cappotto."], correctIndex: 0, explanation: "\"Di\" + reflexive infinitive." },
      { type: "dictation", audio: "Mi ha chiesto se avevo tempo e mi ha detto di aspettarla.", explanation: "Question + command." },
      { type: "dictation", audio: "Ci hanno chiesto dove abitavamo.", explanation: "\"Dove abitate?\" → \"dove abitavamo\"." },
      { type: "speak", text: "Il cameriere ci ha chiesto se avevamo prenotato e ci ha detto di aspettare al bar.", prompt: "Report it: The waiter asked us if we'd booked and told us to wait at the bar.", tip: "\"Se\" for the question, \"di\" for the command.", explanation: "Reported question and command." },
    ],
  },
  {
    slug: "b1-error-hunt-reported",
    level: "IT-B1",
    number: 8,
    title: "Error Hunt: Reported Speech",
    summary: "Fix the classic slips: ha detto che verrà domani reported days later, mi ha chiesto che venivo, mi ha detto che aspetto.",
    duration: "17 min",
    sections: [
      {
        heading: "Future in the past",
        body: [
          "Each sentence below has one mistake. Last week Marco said: \"Verrò domani.\" Today a learner writes \"Marco ha detto che verrà domani.\" But that tomorrow is already past: write \"Marco ha detto che sarebbe venuto il giorno dopo\". The future becomes the conditional past, and the time word shifts.",
          "\"Verrà\" is only possible when the event is still in the future: this morning Marco said he'd come tomorrow → \"Marco ha detto che verrà domani\" is fine in speech.",
        ],
        examples: [
          { es: "Marco ha detto che sarebbe venuto il giorno dopo.", en: "Marco said he would come the next day." },
          { es: "Mi ha promesso che avrebbe pagato lui.", en: "He promised he would pay." },
          { es: "Pensavo che sarebbe stato facile.", en: "I thought it would be easy." },
          { es: "Stamattina ha detto che verrà domani.", en: "This morning he said he'll come tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"ha detto che verrà domani\" about last month. Write it correctly: He said he would come the next day.", source: "He said he would come the next day.", answer: "Ha detto che sarebbe venuto il giorno dopo.", altAnswers: ["Ha detto che sarebbe venuto l'indomani.", "Ha detto che sarebbe venuto il giorno seguente."], explanation: "Conditional past + \"il giorno dopo\"." },
          { type: "multiple-choice", question: "\"Pensavo che ___ facile.\" (I thought it would be easy)", options: ["sarebbe stato", "sarebbe", "sarà", "è stato"], correctIndex: 0, explanation: "Future in the past = conditional past." },
        ],
      },
      {
        heading: "Se, not che",
        body: [
          "\"Mi ha chiesto che venivo\" is wrong: a yes / no question is reported with \"se\", not \"che\". \"Mi ha chiesto se venivo\". Also, don't add \"che\" before a question word: not \"mi ha chiesto che dove abitavo\" but \"mi ha chiesto dove abitavo\".",
        ],
        examples: [
          { es: "Mi ha chiesto se venivo.", en: "She asked me if I was coming." },
          { es: "Mi ha chiesto dove abitavo.", en: "She asked me where I lived." },
          { es: "Gli ho chiesto se gli piaceva.", en: "I asked him if he liked it." },
          { es: "Non so se viene.", en: "I don't know if he's coming." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "A learner wrote \"che\". Write the Italian for the bold words.", en: "She asked me [if] I was coming.", sentence: "Mi ha chiesto ___ venivo.", answer: "se", explanation: "Yes / no question → \"se\"." },
          { type: "listen-choose", audio: "Gli ho chiesto se gli piaceva.", question: "What did the speaker ask?", options: ["if he liked it", "what he liked", "where it was", "when he'd come"], correctIndex: 0, explanation: "\"Se\" = if." },
        ],
      },
      {
        heading: "Di + infinitive for commands",
        body: [
          "\"Mi ha detto che aspetto\" mixes up a statement and a command. The order \"Aspetta!\" is reported with \"di\" + infinitive: \"Mi ha detto di aspettare\". \"Mi ha detto che aspettavo\" means he told me that I was waiting, a statement, not an order.",
        ],
        examples: [
          { es: "Mi ha detto di aspettare.", en: "He told me to wait." },
          { es: "Mi ha detto che aspettavo da un'ora.", en: "He told me I'd been waiting for an hour." },
          { es: "Ci ha detto di non preoccuparci.", en: "She told us not to worry." },
          { es: "Le ho detto di venire alle otto.", en: "I told her to come at eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"mi ha detto che aspetto\". Write it correctly: He told me to wait.", source: "He told me to wait.", answer: "Mi ha detto di aspettare.", altAnswers: [], explanation: "Command → \"di\" + infinitive." },
          { type: "multiple-choice", question: "Which sentence reports an order?", options: ["Le ho detto di venire alle otto.", "Le ho detto che veniva alle otto.", "Le ho detto che vengo alle otto.", "Le ho detto se veniva alle otto."], correctIndex: 0, explanation: "\"Dire di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"ha detto che mi chiamerà\" about last year. Write it correctly: She said she would call me.", source: "She said she would call me.", answer: "Ha detto che mi avrebbe chiamato.", altAnswers: ["Ha detto che mi avrebbe chiamata."], explanation: "Conditional past." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"mi ha chiesto che avevo fame\". Write it correctly: He asked me if I was hungry.", source: "He asked me if I was hungry.", answer: "Mi ha chiesto se avevo fame.", altAnswers: ["Mi ha domandato se avevo fame.", "Mi ha chiesto se avessi fame."], explanation: "\"Se\", not \"che\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"mi ha detto che chiudo la porta\". Write it correctly: She told me to close the door.", source: "She told me to close the door.", answer: "Mi ha detto di chiudere la porta.", altAnswers: [], explanation: "Command → \"di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"ha detto che verrebbe\". Write it correctly: He said he would come.", source: "He said he would come.", answer: "Ha detto che sarebbe venuto.", altAnswers: [], explanation: "Conditional past, not present conditional." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"mi ha chiesto che dove lavoravo\". Write it correctly: He asked me where I worked.", source: "He asked me where I worked.", answer: "Mi ha chiesto dove lavoravo.", altAnswers: ["Mi ha domandato dove lavoravo."], explanation: "No \"che\" before \"dove\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"ci hanno detto che non facciamo rumore\". Write it correctly: They told us not to make noise.", source: "They told us not to make noise.", answer: "Ci hanno detto di non fare rumore.", altAnswers: ["Ci hanno chiesto di non fare rumore."], explanation: "\"Di non\" + infinitive." },
      { type: "fill-blank", prompt: "A learner wrote \"domani\". Write the Italian for the bold words.", en: "Last week she said she'd leave [the next day].", sentence: "La settimana scorsa ha detto che sarebbe partita ___.", answer: "il giorno dopo", altAnswers: ["l'indomani", "il giorno seguente"], explanation: "Time word shifts." },
      { type: "fill-blank", prompt: "A learner wrote \"aveva\". Write the Italian for the bold words.", en: "He says he [has] a cold.", sentence: "Dice che ___ il raffreddore.", answer: "ha", explanation: "Present reporting verb: no shift." },
      { type: "word-order", prompt: "Put the words in order to say: She told us not to worry.", words: ["Ci", "ha", "detto", "di", "non", "preoccuparci."], translation: "She told us not to worry.", explanation: "Pronoun on the infinitive." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Mi ha chiesto se volevo venire e mi ha detto di portare il vino.", "Mi ha chiesto che volevo venire e mi ha detto di portare il vino.", "Mi ha chiesto se volevo venire e mi ha detto che porto il vino.", "Mi ha chiesto che volevo venire e mi ha detto che porto il vino."], correctIndex: 0, explanation: "\"Se\" for the question, \"di\" for the request." },
      { type: "dictation", audio: "Mi ha promesso che sarebbe venuto, ma non si è visto.", explanation: "\"Sarebbe venuto\": future in the past." },
      { type: "speak", text: "Mi ha chiesto se venivo e mi ha detto di aspettarlo: ha detto che sarebbe arrivato il giorno dopo.", prompt: "Fix it and say it: a learner said \"Mi ha chiesto che venivo e mi ha detto che lo aspetto: ha detto che arriverà domani.\" (reported a week later)", tip: "Three fixes: \"se\", \"di aspettarlo\", \"sarebbe arrivato il giorno dopo\".", explanation: "Question, command and future in the past." },
    ],
  },
  {
    slug: "b1-dialogue-lab-passing-on-messages",
    level: "IT-B1",
    number: 9,
    title: "Dialogue Lab: Passing On Messages",
    summary: "A receptionist takes phone calls and passes on the messages to a manager: listen, then report who said what.",
    duration: "17 min",
    sections: [
      {
        heading: "Call 1: a client",
        body: [
          "Silvia works at reception in a small company in Verona. The phone rings. Signor Bianchi: \"Buongiorno, sono Bianchi della ditta Edilnord. Cercavo la dottoressa Conti.\" Silvia: \"Mi dispiace, è in riunione. Vuole lasciare un messaggio?\" Bianchi: \"Sì, grazie. Le dica che il preventivo è pronto e che glielo mando entro stasera. E mi richiami domani, se può.\"",
          "Note the formal imperative with \"Lei\": \"Le dica\" (tell her), \"mi richiami\" (call me back). \"Il preventivo\" is a quote (an estimate).",
        ],
        examples: [
          { es: "Cercavo la dottoressa Conti.", en: "I was looking for Dr Conti." },
          { es: "Vuole lasciare un messaggio?", en: "Would you like to leave a message?" },
          { es: "Le dica che il preventivo è pronto.", en: "Tell her the quote is ready." },
          { es: "Mi richiami domani, se può.", en: "Call me back tomorrow, if you can." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Le dica che il preventivo è pronto e che glielo mando entro stasera.", question: "What's the message?", options: ["The quote is ready and will be sent by this evening.", "The quote is late.", "The meeting is cancelled.", "He'll come in person."], correctIndex: 0, explanation: "\"Il preventivo è pronto\", \"entro stasera\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you like to leave a message? (formal)", answer: "Vuole lasciare un messaggio?", altAnswers: ["Desidera lasciare un messaggio?", "Vuole lasciarle un messaggio?"], explanation: "Formal \"vuole\"." },
        ],
      },
      {
        heading: "Call 2: a colleague",
        body: [
          "Later, Paolo from accounts: \"Silvia, sono Paolo. Puoi dire alla Conti che la fattura di marzo non è ancora arrivata? E chiedile se ha firmato il contratto, per favore.\" Silvia: \"Certo, glielo dico appena esce.\"",
          "\"Glielo dico\" = I'll tell her (it). \"Chiedile\" = ask her.",
        ],
        examples: [
          { es: "La fattura di marzo non è ancora arrivata.", en: "The March invoice hasn't arrived yet." },
          { es: "Chiedile se ha firmato il contratto.", en: "Ask her if she's signed the contract." },
          { es: "Glielo dico appena esce.", en: "I'll tell her as soon as she comes out." },
          { es: "Sono Paolo dell'amministrazione.", en: "It's Paolo from accounts." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What does Paolo want to know?", options: ["if Dr Conti has signed the contract", "when the meeting ends", "where the invoice is", "who Bianchi is"], correctIndex: 0, explanation: "\"Chiedile se ha firmato il contratto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll tell her as soon as she comes out.", answer: "Glielo dico appena esce.", altAnswers: ["Glielo dico non appena esce.", "Glielo dirò appena esce."], explanation: "\"Glielo\" = it to her." },
        ],
      },
      {
        heading: "Passing it all on",
        body: [
          "The meeting ends. Silvia: \"Dottoressa, ha chiamato il signor Bianchi della Edilnord: ha detto che il preventivo era pronto e che glielo avrebbe mandato entro stasera. Le ha chiesto di richiamarlo domani. Poi ha chiamato Paolo: ha detto che la fattura di marzo non era ancora arrivata e mi ha chiesto se Lei aveva firmato il contratto.\"",
          "Silvia shifts the tenses (\"era\", \"avrebbe mandato\"), keeps \"stasera\" and \"domani\" (same day), and turns commands into \"chiedere di\".",
        ],
        examples: [
          { es: "Ha chiamato il signor Bianchi.", en: "Mr Bianchi called." },
          { es: "Ha detto che il preventivo era pronto.", en: "He said the quote was ready." },
          { es: "Le ha chiesto di richiamarlo domani.", en: "He asked you to call him back tomorrow." },
          { es: "Mi ha chiesto se Lei aveva firmato il contratto.", en: "He asked me if you had signed the contract." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said he [would send] it to you by this evening.", sentence: "Ha detto che glielo ___ entro stasera.", answer: "avrebbe mandato", altAnswers: ["avrebbe inviato"], explanation: "Future → conditional past." },
          { type: "listen-choose", audio: "Le ha chiesto di richiamarlo domani.", question: "What should the manager do?", options: ["call Mr Bianchi back tomorrow", "call Paolo now", "sign the contract", "send the quote"], correctIndex: 0, explanation: "\"Richiamarlo\" = call him back." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry, she's in a meeting.", answer: "Mi dispiace, è in riunione.", altAnswers: ["Mi spiace, è in riunione."], explanation: "\"In riunione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tell her the quote is ready. (formal)", answer: "Le dica che il preventivo è pronto.", altAnswers: [], explanation: "Formal imperative \"dica\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Mr Bianchi called.", answer: "Ha chiamato il signor Bianchi.", altAnswers: ["Il signor Bianchi ha chiamato.", "Ha telefonato il signor Bianchi."], explanation: "Subject after the verb: natural for news." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said the quote was ready.", answer: "Ha detto che il preventivo era pronto.", altAnswers: [], explanation: "\"È\" → \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked you to call him back. (formal)", answer: "Le ha chiesto di richiamarlo.", altAnswers: ["Ha chiesto di richiamarlo."], explanation: "\"Le\" = to you (formal)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paolo said the invoice hadn't arrived yet.", answer: "Paolo ha detto che la fattura non era ancora arrivata.", altAnswers: [], explanation: "\"Non è arrivata\" → \"non era arrivata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He asked me [if] you had signed the contract. (formal)", sentence: "Mi ha chiesto ___ Lei aveva firmato il contratto.", answer: "se", explanation: "Reported yes / no question." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll [tell her] right away.", sentence: "___ dico subito.", answer: "Glielo", explanation: "\"Gli\" + \"lo\" = \"glielo\"." },
      { type: "word-order", prompt: "Put the words in order to say: Would you like to leave a message?", words: ["Vuole", "lasciare", "un", "messaggio?"], translation: "Would you like to leave a message?", explanation: "Formal \"vuole\"." },
      { type: "multiple-choice", question: "Why does Silvia keep \"domani\" and \"stasera\"?", options: ["She reports on the same day.", "They never change.", "It's more formal.", "She forgot to change them."], correctIndex: 0, explanation: "Same-day reporting: time words stay." },
      { type: "dictation", audio: "Ha chiamato il signor Bianchi: Le ha chiesto di richiamarlo domani.", explanation: "Reported request." },
      { type: "speak", text: "Dottoressa, ha chiamato Paolo: ha detto che la fattura non era ancora arrivata e mi ha chiesto se Lei aveva firmato il contratto.", prompt: "Pass on Paolo's message to Dr Conti: Paolo called: he said the invoice hadn't arrived yet and he asked me if you'd signed the contract.", tip: "Formal \"Lei\" for the manager.", explanation: "Statement + question, past reporting verb." },
    ],
  },
  {
    slug: "b1-mission-meeting-notes",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: Meeting Notes",
    summary: "Write notes of a meeting, reporting what everyone said, asked and proposed.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The meeting",
        body: [
          "Your mission: you're the secretary of your building's residents' meeting (\"la riunione di condominio\"). Here's what people said: Signora Esposito: \"L'ascensore è rotto da due settimane.\" Signor Ricci: \"Chiamerò io il tecnico domani.\" Giorgio: \"Quanto costerà la riparazione?\" L'amministratrice: \"Non lo so ancora. Mandatemi le vostre proposte entro venerdì.\"",
          "Notes are written later, so use the past reporting verb with the tense, person and time changes.",
        ],
        examples: [
          { es: "La signora Esposito ha detto che l'ascensore era rotto da due settimane.", en: "Mrs Esposito said the lift had been broken for two weeks." },
          { es: "Il signor Ricci ha detto che avrebbe chiamato il tecnico il giorno dopo.", en: "Mr Ricci said he'd call the technician the next day." },
          { es: "Giorgio ha chiesto quanto sarebbe costata la riparazione.", en: "Giorgio asked how much the repair would cost." },
          { es: "L'amministratrice ci ha chiesto di mandarle le proposte entro venerdì.", en: "The administrator asked us to send her our proposals by Friday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giorgio asked how much the repair would cost.", answer: "Giorgio ha chiesto quanto sarebbe costata la riparazione.", altAnswers: ["Giorgio ha chiesto quanto costava la riparazione."], explanation: "Future question → conditional past." },
          { type: "listen-choose", audio: "Il signor Ricci ha detto che avrebbe chiamato il tecnico il giorno dopo.", question: "What will Mr Ricci do?", options: ["call the technician", "repair the lift himself", "pay for the repair", "send the proposals"], correctIndex: 0, explanation: "\"Avrebbe chiamato il tecnico\"." },
        ],
      },
      {
        heading: "Note-taking phrases",
        body: [
          "Useful verbs for minutes: \"ha detto che\", \"ha spiegato che\", \"ha proposto di\" (proposed + infinitive), \"ha ricordato che\" (reminded everyone that), \"ha chiesto se\", \"si è deciso di\" (it was decided to). Start with the date and who was there: \"Erano presenti ...\".",
        ],
        examples: [
          { es: "Erano presenti dodici condòmini.", en: "Twelve residents were present." },
          { es: "Il signor Ricci ha proposto di cambiare ditta.", en: "Mr Ricci proposed changing company." },
          { es: "L'amministratrice ha ricordato che la rata scade a maggio.", en: "The administrator reminded us that the instalment is due in May." },
          { es: "Si è deciso di chiedere tre preventivi.", en: "It was decided to ask for three quotes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was decided to ask for three quotes.", answer: "Si è deciso di chiedere tre preventivi.", altAnswers: ["Abbiamo deciso di chiedere tre preventivi."], explanation: "Impersonal \"si è deciso di\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Mr Ricci [proposed changing] company.", sentence: "Il signor Ricci ___ ditta.", answer: "ha proposto di cambiare", explanation: "\"Proporre di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Mrs Esposito said the lift was broken.", answer: "La signora Esposito ha detto che l'ascensore era rotto.", altAnswers: [], explanation: "\"È\" → \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Mr Ricci said he would call the technician.", answer: "Il signor Ricci ha detto che avrebbe chiamato il tecnico.", altAnswers: [], explanation: "\"Chiamerò\" → \"avrebbe chiamato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The administrator asked us to send her the proposals.", answer: "L'amministratrice ci ha chiesto di mandarle le proposte.", altAnswers: ["L'amministratrice ci ha chiesto di inviarle le proposte."], explanation: "\"Mandatemi\" → \"di mandarle\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Twelve residents were present.", answer: "Erano presenti dodici condòmini.", altAnswers: ["Erano presenti dodici condomini.", "C'erano dodici condòmini."], explanation: "\"Condòmino\" = resident owner; the accent only shows the stress." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giorgio asked if the repair was urgent.", answer: "Giorgio ha chiesto se la riparazione era urgente.", altAnswers: [], explanation: "\"Se\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She reminded us that the meeting was on Monday.", answer: "Ci ha ricordato che la riunione era lunedì.", altAnswers: ["Ha ricordato che la riunione era lunedì."], explanation: "\"Ricordare che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was decided to wait.", answer: "Si è deciso di aspettare.", altAnswers: ["Abbiamo deciso di aspettare."], explanation: "\"Si è deciso di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said the lift [had been] broken for two weeks.", sentence: "Ha detto che l'ascensore ___ rotto da due settimane.", answer: "era", explanation: "\"Da\" + imperfetto for a state still going on then." },
      { type: "word-order", prompt: "Put the words in order to say: She asked us to reply by Friday.", words: ["Ci", "ha", "chiesto", "di", "rispondere", "entro", "venerdì."], translation: "She asked us to reply by Friday.", explanation: "\"Chiedere di\" + infinitive." },
      { type: "multiple-choice", question: "\"Quanto costerà?\" in the minutes becomes:", options: ["Ha chiesto quanto sarebbe costato.", "Ha chiesto quanto costerebbe.", "Ha chiesto che quanto costava.", "Ha detto di quanto costava."], correctIndex: 0, explanation: "Question word + conditional past." },
      { type: "dictation", audio: "Si è deciso di chiedere tre preventivi entro la fine del mese.", explanation: "Decision in the minutes." },
      { type: "speak", text: "La signora Esposito ha detto che l'ascensore era rotto, e il signor Ricci ha detto che avrebbe chiamato il tecnico il giorno dopo.", prompt: "Read your notes aloud: Mrs Esposito said the lift was broken, and Mr Ricci said he would call the technician the next day.", tip: "Pause at the comma between the two reports.", explanation: "Two reported statements with shifts." },
    ],
  },
];

export const IT_B1_U32_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write the notes of a meeting you attended last week (at work, school, or your building), 100-140 words. Say when it was and who was there, then report at least two statements, one question and one request or proposal, and the decision taken.",
  minWords: 90,
  maxWords: 150,
  rubric: [
    "Uses a past reporting verb with correct tense shifts (era, aveva fatto, avrebbe fatto)",
    "Reports at least one question with se or a question word (ha chiesto se ..., ha chiesto quando ...)",
    "Reports a request or command with di + infinitive (ci ha chiesto di ..., ha proposto di ...)",
    "Shifts time and place words where needed (il giorno dopo, la settimana dopo, lì)",
    "Uses a range of reporting verbs (dire, spiegare, chiedere, proporre, ricordare) and an opening and decision (erano presenti, si è deciso di)",
  ],
  modelAnswer: "Riunione del 14 marzo, ore 18. Erano presenti otto colleghi e la direttrice. La direttrice ha aperto la riunione e ha spiegato che le vendite erano aumentate del 10%. Poi ha detto che il mese dopo sarebbe arrivato un nuovo collega dal Brasile. Marta ha chiesto se il nuovo collega avrebbe lavorato nel suo ufficio, e la direttrice ha risposto che non era ancora deciso. Luca ha chiesto quando avremmo ricevuto i nuovi computer: secondo l'informatico, sarebbero arrivati entro aprile. Giulia ha proposto di organizzare una cena per dare il benvenuto al nuovo collega. Alla fine la direttrice ci ha chiesto di mandarle le ferie estive entro la settimana successiva. Si è deciso di fare la prossima riunione il 15 aprile.",
  explanation: "The notes use past reporting verbs with backshift (\"erano aumentate\", \"sarebbe arrivato\", \"non era ancora deciso\"), reported questions with \"se\" and \"quando\", requests and proposals with \"di\" + infinitive (\"ha proposto di organizzare\", \"ci ha chiesto di mandarle\") and shifted time words (\"il mese dopo\", \"la settimana successiva\").",
};
