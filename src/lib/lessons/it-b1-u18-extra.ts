// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u18-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 18 Extra Practice: Infinitives with Prepositions. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U18_EXTRA: Lesson[] = [
  {
    slug: "b1-infinitive-prep-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Di or A?",
    summary: "Fresh verbs with di or a before the infinitive: accettare di, rifiutare di, tentare di, fingere di, esitare a, rinunciare a, tornare a.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "More verbs to learn as chunks",
        body: [
          "With \"di\": \"tentare di\" (attempt to), \"fingere di\" (pretend to), \"minacciare di\" (threaten to), \"meritare di\", \"sognare di\". With \"a\": \"rinunciare a\" (give up), \"esitare a\" (hesitate to), \"tornare a\" (do again), \"obbligare qualcuno a\" (force someone to).",
        ],
        examples: [
          { es: "Ha finto di non vedermi.", en: "He pretended not to see me." },
          { es: "Sogno di vivere al mare.", en: "I dream of living by the sea." },
          { es: "Non esitare a chiamarmi.", en: "Don't hesitate to call me." },
          { es: "È tornato a piovere.", en: "It's started raining again." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He pretended not to see me.", answer: "Ha finto di non vedermi.", explanation: "\"Fingere di\"; \"non\" before the infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't hesitate to call me. (to a friend)", answer: "Non esitare a chiamarmi.", altAnswers: ["Non esitare a telefonarmi."], explanation: "\"Esitare a\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I dream of living by the sea.", answer: "Sogno di vivere al mare.", altAnswers: ["Sogno di abitare al mare."], explanation: "\"Sognare di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's started raining again.", answer: "È tornato a piovere.", altAnswers: ["Ha ricominciato a piovere.", "È ricominciato a piovere."], explanation: "\"Tornare a\" = to do again." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They threatened to leave.", answer: "Hanno minacciato di andarsene.", altAnswers: ["Hanno minacciato di andare via.", "Hanno minacciato di partire."], explanation: "\"Minacciare di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She gave up trying.", answer: "Ha rinunciato a provarci.", altAnswers: ["Ha smesso di provarci."], explanation: "\"Rinunciare a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You deserve to win. (to a friend)", answer: "Meriti di vincere.", altAnswers: ["Tu meriti di vincere.", "Ti meriti di vincere."], explanation: "\"Meritare di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I agreed to work on Saturday.", answer: "Ho accettato di lavorare sabato.", altAnswers: ["Ho accettato di lavorare di sabato."], explanation: "\"Accettare di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The thief [attempted to escape].", sentence: "Il ladro ha ___.", answer: "tentato di scappare", altAnswers: ["tentato di fuggire", "cercato di scappare"], explanation: "\"Tentare di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [forced us to wait] outside.", sentence: "Ci hanno ___ fuori.", answer: "obbligato ad aspettare", altAnswers: ["obbligati ad aspettare", "obbligato a aspettare", "costretto ad aspettare", "costretti ad aspettare"], explanation: "\"Obbligare qualcuno a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [refuse to answer].", sentence: "Mi ___.", answer: "rifiuto di rispondere", explanation: "\"Rifiutarsi di\"." },
      { type: "word-order", prompt: "Put the words in order to say: We're thinking of moving to Bari.", words: ["Pensiamo", "di", "trasferirci", "a", "Bari."], translation: "We're thinking of moving to Bari.", explanation: "\"Pensare di\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ha rinunciato a partire.", "Ha rinunciato di partire.", "Ha rinunciato partire.", "Ha rinunciato per partire."], correctIndex: 0, explanation: "\"Rinunciare a\"." },
      { type: "listen-choose", audio: "Ha finto di dormire.", question: "What did he do?", options: ["He pretended to be asleep.", "He finished sleeping.", "He tried to sleep.", "He refused to sleep."], correctIndex: 0, explanation: "\"Fingere di\" = to pretend." },
      { type: "dictation", audio: "Non esitate a contattarci per qualsiasi domanda.", explanation: "\"Esitare a\"; formal plural." },
      { type: "speak", text: "Sogno di vivere al mare, ma non riesco a lasciare la città.", prompt: "Say it in Italian: I dream of living by the sea, but I can't bring myself to leave the city.", tip: "\"Lasciare\": sc before i is soft, la-SHA-re.", explanation: "\"Sognare di\", \"riuscire a\"." },
    ],
  },
  {
    slug: "b1-infinitive-prep-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Da and Per",
    summary: "Fresh sentences with da + infinitive for things to be done and per + infinitive for purpose.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "To be done, or in order to?",
        body: [
          "\"Da\" after a noun or a quantity: \"una lettera da spedire\", \"tanto da fare\", \"niente da dichiarare\". \"Per\" for purpose: \"Sono qui per aiutarti\". After movement verbs, \"a\": \"Vado a dormire\".",
        ],
        examples: [
          { es: "Ho una lettera da spedire.", en: "I've got a letter to post." },
          { es: "Niente da dichiarare.", en: "Nothing to declare." },
          { es: "Sono qui per aiutarti.", en: "I'm here to help you." },
          { es: "Ci sono ancora i piatti da lavare.", en: "There are still the dishes to wash." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a letter to post.", answer: "Ho una lettera da spedire.", explanation: "\"Da\" + infinitive after a noun." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm here to help you. (to a friend)", answer: "Sono qui per aiutarti.", altAnswers: ["Sono qua per aiutarti."], explanation: "Purpose: \"per\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are still the dishes to wash.", answer: "Ci sono ancora i piatti da lavare.", explanation: "\"Da lavare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nothing to declare.", answer: "Niente da dichiarare.", altAnswers: ["Nulla da dichiarare."], explanation: "\"Da dichiarare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm learning Italian to work in Milan.", answer: "Imparo l'italiano per lavorare a Milano.", altAnswers: ["Sto imparando l'italiano per lavorare a Milano.", "Studio l'italiano per lavorare a Milano."], explanation: "Purpose: \"per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got a book to lend me? (to a friend)", answer: "Hai un libro da prestarmi?", altAnswers: ["Mi puoi prestare un libro?"], explanation: "\"Da\" + infinitive + pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He got up early to catch the train.", answer: "Si è alzato presto per prendere il treno.", altAnswers: ["Si è alzato presto per non perdere il treno."], explanation: "Purpose: \"per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a story to tell your grandchildren.", answer: "È una storia da raccontare ai nipoti.", altAnswers: ["È una storia da raccontare ai tuoi nipoti."], explanation: "\"Da raccontare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm too tired [to go out].", sentence: "Sono troppo stanco ___.", answer: "per uscire", explanation: "\"Troppo\" ... \"per\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's [a lot to do] in the garden.", sentence: "C'è ___ in giardino.", answer: "molto da fare", altAnswers: ["tanto da fare", "parecchio da fare"], explanation: "\"Da fare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We went out [to buy] a present.", sentence: "Siamo usciti ___ un regalo.", answer: "a comprare", altAnswers: ["per comprare", "a prendere"], explanation: "Movement + \"a\"." },
      { type: "word-order", prompt: "Put the words in order to say: Is there anything to sign?", words: ["C'è", "qualcosa", "da", "firmare?"], translation: "Is there anything to sign?", explanation: "\"Da firmare\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ho ancora tre esami da dare.", "Ho ancora tre esami per dare.", "Ho ancora tre esami a dare.", "Ho ancora tre esami di dare."], correctIndex: 0, explanation: "Exams to be taken: \"da dare\"." },
      { type: "listen-choose", audio: "Ho messo da parte un po' di soldi per comprare una bici.", question: "Why did the speaker save money?", options: ["To buy a bike", "To fix a bike", "To rent a car", "To go on holiday"], correctIndex: 0, explanation: "Purpose: \"per comprare\"." },
      { type: "dictation", audio: "Ho tante cose da fare prima di partire.", explanation: "\"Da fare\", \"prima di\"." },
      { type: "speak", text: "Sono venuto qui per lavorare, ma c'è così tanto da vedere!", prompt: "Say it in Italian: I came here to work, but there's so much to see!", tip: "\"Così tanto\": stress on the final ò of così.", explanation: "\"Per\" for purpose, \"da\" for things to be done." },
    ],
  },
  {
    slug: "b1-infinitive-prep-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Adjectives",
    summary: "Fresh sentences with adjectives + infinitive: facile da trovare, contento di sapere, pronto ad aiutare, abituato a lavorare.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Da, di or a?",
        body: [
          "Thing to be acted on: \"da\" (\"facile da trovare\", \"buono da mangiare\"). Feeling, certainty, ability: \"di\" (\"contento di\", \"sicuro di\", \"capace di\"). Readiness and habit: \"a\" (\"pronto a\", \"abituato a\", \"disposto a\").",
        ],
        examples: [
          { es: "La casa è facile da trovare.", en: "The house is easy to find." },
          { es: "Sono contenta di saperlo.", en: "I'm glad to know that." },
          { es: "È sempre pronto ad aiutare.", en: "He's always ready to help." },
          { es: "Non sono abituato a lavorare di notte.", en: "I'm not used to working at night." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The house is easy to find.", answer: "La casa è facile da trovare.", altAnswers: ["È facile trovare la casa."], explanation: "\"Facile da\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not used to working at night. (a man speaking)", answer: "Non sono abituato a lavorare di notte.", altAnswers: ["Non sono abituato a lavorare la notte."], explanation: "\"Abituato a\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad to know that. (a woman speaking)", answer: "Sono contenta di saperlo.", altAnswers: ["Sono felice di saperlo."], explanation: "\"Contento di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's always ready to help.", answer: "È sempre pronto ad aiutare.", altAnswers: ["È sempre pronto a aiutare.", "Lui è sempre pronto ad aiutare."], explanation: "\"Pronto a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These mushrooms aren't good to eat.", answer: "Questi funghi non sono buoni da mangiare.", explanation: "\"Buono da\"; the adjective agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's capable of doing anything.", answer: "È capace di fare qualsiasi cosa.", altAnswers: ["È capace di fare tutto.", "Lei è capace di fare qualsiasi cosa."], explanation: "\"Capace di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're free to leave. (to a friend)", answer: "Sei libero di andare.", altAnswers: ["Sei libera di andare.", "Sei libero di andartene.", "Sei libera di andartene."], explanation: "\"Libero di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was the first to arrive.", answer: "È stato il primo ad arrivare.", altAnswers: ["È stato il primo a arrivare."], explanation: "\"Il primo a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [sure I saw] him.", sentence: "Sono ___ visto.", answer: "sicuro di averlo", altAnswers: ["sicura di averlo"], explanation: "\"Sicuro di\" + past infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This bag is [too heavy to carry].", sentence: "Questa borsa è ___.", answer: "troppo pesante da portare", altAnswers: ["troppo pesante per portarla"], explanation: "\"Da\": the bag is to be carried." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We're [proud to be] here.", sentence: "Siamo ___ qui.", answer: "orgogliosi di essere", altAnswers: ["orgogliose di essere", "fieri di essere", "fiere di essere"], explanation: "\"Orgoglioso di\"." },
      { type: "word-order", prompt: "Put the words in order to say: This book is hard to understand.", words: ["Questo", "libro", "è", "difficile", "da", "capire."], translation: "This book is hard to understand.", explanation: "\"Difficile da\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "disposto a", right: "willing to" }, { left: "abituato a", right: "used to" }, { left: "capace di", right: "capable of" }, { left: "libero di", right: "free to" }, { left: "bello da vedere", right: "lovely to look at" }], explanation: "Learn each adjective with its link word." },
      { type: "listen-choose", audio: "Sei disposto a lavorare il fine settimana?", question: "What is being asked?", options: ["Are you willing to work at weekends?", "Are you used to working at weekends?", "Are you free this weekend?", "Did you work last weekend?"], correctIndex: 0, explanation: "\"Disposto a\" = willing to." },
      { type: "dictation", audio: "Sono felice di essere tornata a casa.", explanation: "\"Felice di\" + past infinitive." },
      { type: "speak", text: "Questa ricetta è facile da preparare e sono sicura di riuscirci.", prompt: "Say it in Italian: This recipe is easy to make and I'm sure I'll manage it.", tip: "\"Riuscirci\": ri-u-SHIR-ci.", explanation: "\"Facile da\", \"sicuro di\"." },
    ],
  },
];
