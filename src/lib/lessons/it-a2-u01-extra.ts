// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u01-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 1 Extra Practice: Past Tense with Avere. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U01_EXTRA: Lesson[] = [
  {
    slug: "a2-past-avere-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Regular Participles",
    summary: "Fresh sentences with regular participles in every person.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Every person, regular verbs",
        body: [
          "\"Ho, hai, ha, abbiamo, avete, hanno\" + \"-ato, -uto, -ito\". New verbs: \"affittare\" (to rent), \"noleggiare\" (to hire a car or bike), \"sistemare\" (to tidy, sort out), \"riempire\" (to fill), \"sostituire\" (to replace).",
        ],
        examples: [
          { es: "Abbiamo affittato una casa al mare.", en: "We rented a house by the sea." },
          { es: "Hai noleggiato una bici?", en: "Did you hire a bike?" },
          { es: "Ho sistemato la camera.", en: "I tidied the bedroom." },
          { es: "Il tecnico ha sostituito la batteria.", en: "The technician replaced the battery." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We rented a house by the sea.", answer: "Abbiamo affittato una casa al mare.", altAnswers: ["Noi abbiamo affittato una casa al mare."], explanation: "\"Affittare\" → \"affittato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I tidied the bedroom.", answer: "Ho sistemato la camera.", altAnswers: ["Ho sistemato la camera da letto.", "Io ho sistemato la camera."], explanation: "\"Camera\" = room, bedroom: a false friend." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you hire a bike? (to a friend)", answer: "Hai noleggiato una bici?", altAnswers: ["Hai noleggiato una bicicletta?", "Tu hai noleggiato una bici?"], explanation: "\"Noleggiare\" → \"noleggiato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The technician replaced the battery.", answer: "Il tecnico ha sostituito la batteria.", explanation: "\"Sostituire\" → \"sostituito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I filled the bottle.", answer: "Ho riempito la bottiglia.", altAnswers: ["Io ho riempito la bottiglia."], explanation: "\"Riempire\" → \"riempito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They booked a room in Florence.", answer: "Hanno prenotato una camera a Firenze.", altAnswers: ["Loro hanno prenotato una camera a Firenze."], explanation: "\"Prenotato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You (plural) didn't sell anything?", answer: "Non avete venduto niente?", altAnswers: ["Non avete venduto nulla?", "Voi non avete venduto niente?"], explanation: "\"Non ... niente\" around \"avete venduto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Francesca received a parcel.", answer: "Francesca ha ricevuto un pacco.", explanation: "\"Ricevuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We cleaned the car.", answer: "Abbiamo pulito la macchina.", altAnswers: ["Noi abbiamo pulito la macchina.", "Abbiamo lavato la macchina."], explanation: "\"Pulito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't understand the question.", answer: "Non ho capito la domanda.", altAnswers: ["Io non ho capito la domanda."], explanation: "\"Non\" before \"ho\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you sleep] well? (to a friend)", sentence: "___ bene?", answer: "Hai dormito", altAnswers: ["Tu hai dormito"], explanation: "\"Dormito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My neighbours [danced] all night.", sentence: "I miei vicini ___ tutta la notte.", answer: "hanno ballato", explanation: "\"Ballato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We followed] the guide.", sentence: "___ la guida.", answer: "Abbiamo seguito", altAnswers: ["Noi abbiamo seguito"], explanation: "\"Seguire\" → \"seguito\"." },
      { type: "word-order", prompt: "Put the words in order to say: Did you finish the report? (plural)", words: ["Avete", "finito", "la", "relazione?"], translation: "Did you finish the report?", explanation: "\"Finito\"." },
      { type: "listen-choose", audio: "Hanno noleggiato una macchina.", question: "What did they do?", options: ["They hired a car.", "They sold a car.", "They cleaned a car.", "They're hiring a car."], correctIndex: 0, explanation: "\"Hanno noleggiato\" = they hired." },
      { type: "dictation", audio: "Abbiamo affittato una casa e abbiamo noleggiato due bici.", explanation: "Double f, double t, double g." },
      { type: "speak", text: "Abbiamo affittato una casa al mare e abbiamo noleggiato le bici.", prompt: "Say it in Italian: We rented a house by the sea and hired bikes.", tip: "af-fit-TA-to: two doubles.", explanation: "Two regular participles with \"abbiamo\"." },
    ],
  },
  {
    slug: "a2-past-avere-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Irregular Participles",
    summary: "Fresh sentences with the irregular twenty.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The irregular twenty again",
        body: [
          "\"Fatto, detto, scritto, letto, rotto; preso, messo, chiuso, perso, acceso, speso, deciso; chiesto, risposto, visto; aperto, offerto, spento; bevuto, vissuto\".",
        ],
        examples: [
          { es: "Ho perso le chiavi di casa.", en: "I've lost my house keys." },
          { es: "Chi ha acceso il riscaldamento?", en: "Who switched on the heating?" },
          { es: "Hanno deciso di vendere la casa.", en: "They've decided to sell the house." },
          { es: "Hai risposto a Giulia?", en: "Did you answer Giulia?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've lost my house keys.", answer: "Ho perso le chiavi di casa.", altAnswers: ["Ho perduto le chiavi di casa.", "Io ho perso le chiavi di casa."], explanation: "\"Perso\"; \"le chiavi di casa\" = the house keys." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who switched on the heating?", answer: "Chi ha acceso il riscaldamento?", explanation: "\"Accendere\" → \"acceso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They've decided to sell the house.", answer: "Hanno deciso di vendere la casa.", altAnswers: ["Loro hanno deciso di vendere la casa."], explanation: "\"Decidere di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you answer Giulia? (to a friend)", answer: "Hai risposto a Giulia?", altAnswers: ["Tu hai risposto a Giulia?"], explanation: "\"Rispondere a\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did you do on Sunday? (plural)", answer: "Cosa avete fatto domenica?", altAnswers: ["Che cosa avete fatto domenica?", "Che avete fatto domenica?", "Domenica cosa avete fatto?"], explanation: "\"Fatto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco broke his phone.", answer: "Marco ha rotto il telefono.", altAnswers: ["Marco ha rotto il suo telefono.", "Marco ha rotto il cellulare."], explanation: "\"Rotto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wrote the shopping list.", answer: "Ho scritto la lista della spesa.", altAnswers: ["Io ho scritto la lista della spesa."], explanation: "\"Scritto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We saw Giulia at the station.", answer: "Abbiamo visto Giulia alla stazione.", altAnswers: ["Noi abbiamo visto Giulia alla stazione.", "Abbiamo visto Giulia in stazione."], explanation: "\"Visto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who opened my letter?", answer: "Chi ha aperto la mia lettera?", explanation: "\"Aperto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They lived in Naples for ten years.", answer: "Hanno vissuto a Napoli per dieci anni.", altAnswers: ["Hanno vissuto dieci anni a Napoli.", "Loro hanno vissuto a Napoli per dieci anni."], explanation: "\"Vissuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The grandparents [bought] the ice creams.", sentence: "I nonni ___ i gelati.", answer: "hanno offerto", altAnswers: ["hanno pagato", "hanno comprato"], explanation: "\"Offrire\" = to treat someone." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you put] the wine on the table? (to a friend)", sentence: "___ il vino in tavola?", answer: "Hai messo", altAnswers: ["Tu hai messo"], explanation: "\"Messo\"; \"in tavola\" = on the table, ready for a meal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara [asked for] a glass of water.", sentence: "Chiara ___ un bicchiere d'acqua.", answer: "ha chiesto", explanation: "\"Chiesto\"." },
      { type: "multiple-choice", question: "We switched off the lights. Which is right?", options: ["Abbiamo spento le luci.", "Abbiamo spegnuto le luci.", "Abbiamo spente le luci.", "Abbiamo spento i luci."], correctIndex: 0, explanation: "\"Spegnere\" → \"spento\"; \"le luci\"." },
      { type: "listen-choose", audio: "Ho chiuso la porta e ho spento la luce.", question: "What did the speaker do?", options: ["closed the door and switched off the light", "opened the door and switched on the light", "closed the window and switched off the TV", "locked the door and lost the keys"], correctIndex: 0, explanation: "\"Chiuso\", \"spento\"." },
      { type: "dictation", audio: "Hai letto il messaggio? Sì, e ho risposto.", explanation: "\"Letto\", \"risposto\"." },
      { type: "speak", text: "Ho perso le chiavi, ho chiesto aiuto e alla fine ho aperto la porta.", prompt: "Say it in Italian: I lost the keys, asked for help and in the end opened the door.", tip: "\"Chiesto\": KIES-to, hard ch.", explanation: "\"Perso\", \"chiesto\", \"aperto\"." },
    ],
  },
  {
    slug: "a2-past-avere-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Time Expressions",
    summary: "Ask and answer when did it happen? with ieri, scorso, fa and stamattina.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Quando? Answers in the past",
        body: [
          "Ask with \"quando\" and answer with a time expression: \"ieri\", \"l'altro ieri\", \"stamattina\", \"poco fa\", \"lunedì scorso\", \"la settimana scorsa\", \"tre mesi fa\".",
        ],
        examples: [
          { es: "Quando hai comprato il telefono? Un mese fa.", en: "When did you buy the phone? A month ago." },
          { es: "Quando avete visto Luca? Lunedì scorso.", en: "When did you see Luca? Last Monday." },
          { es: "Quando ha chiamato il dottore? Poco fa.", en: "When did the doctor call? A moment ago." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When did you buy the phone? A month ago. (to a friend)", answer: "Quando hai comprato il telefono? Un mese fa.", altAnswers: ["Quando hai comprato il cellulare? Un mese fa."], explanation: "\"Fa\" after the amount." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last Monday.", answer: "Lunedì scorso.", explanation: "\"Scorso\" after the day; no article." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When did you see Luca? (plural)", answer: "Quando avete visto Luca?", altAnswers: ["Voi quando avete visto Luca?"], explanation: "\"Avete visto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor called a moment ago.", answer: "Il dottore ha chiamato poco fa.", altAnswers: ["Il medico ha chiamato poco fa.", "Il dottore ha telefonato poco fa.", "Poco fa ha chiamato il dottore."], explanation: "\"Poco fa\" = a moment ago." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We moved house three months ago.", answer: "Abbiamo cambiato casa tre mesi fa.", altAnswers: ["Tre mesi fa abbiamo cambiato casa."], explanation: "\"Cambiare casa\" = to move house." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last month Sofia found a new job.", answer: "Il mese scorso Sofia ha trovato un nuovo lavoro.", altAnswers: ["Sofia ha trovato un nuovo lavoro il mese scorso.", "Il mese scorso Sofia ha trovato un lavoro nuovo."], explanation: "\"Trovare\" → \"trovato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This morning I didn't have breakfast.", answer: "Stamattina non ho fatto colazione.", altAnswers: ["Non ho fatto colazione stamattina.", "Questa mattina non ho fatto colazione."], explanation: "\"Stamattina\" with the past = earlier today." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The day before yesterday they had a party.", answer: "L'altro ieri hanno fatto una festa.", altAnswers: ["Hanno fatto una festa l'altro ieri.", "L'altroieri hanno fatto una festa."], explanation: "\"L'altro ieri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last year I read twenty books.", answer: "L'anno scorso ho letto venti libri.", altAnswers: ["Ho letto venti libri l'anno scorso."], explanation: "\"L'anno scorso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I wrote to Matteo [two weeks ago].", sentence: "Ho scritto a Matteo ___.", answer: "due settimane fa", explanation: "Amount + \"fa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Last Friday] we ate out.", sentence: "___ abbiamo mangiato fuori.", answer: "Venerdì scorso", explanation: "Day + \"scorso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Last week] Chiara worked from home.", sentence: "___ Chiara ha lavorato da casa.", answer: "La settimana scorsa", explanation: "\"Scorsa\" agrees with \"settimana\"." },
      { type: "multiple-choice", question: "\"Quando hai visto Marco?\" Which answer fits?", options: ["Ieri sera.", "Domani sera.", "Stasera alle nove.", "Ogni giorno."], correctIndex: 0, explanation: "A past question needs a past time." },
      { type: "multiple-choice", question: "Which means two years ago?", options: ["due anni fa", "fa due anni", "due anni scorsi", "prima due anni"], correctIndex: 0, explanation: "Amount + \"fa\"." },
      { type: "listen-choose", audio: "Ho visto Giulia l'altro ieri.", question: "When did the speaker see Giulia?", options: ["the day before yesterday", "yesterday", "last week", "this morning"], correctIndex: 0, explanation: "\"L'altro ieri\" = the day before yesterday." },
      { type: "dictation", audio: "Il mese scorso abbiamo visitato Torino.", explanation: "\"Scorso\" after \"mese\"." },
      { type: "speak", text: "Ho visto Marco tre giorni fa e ho parlato con Giulia poco fa.", prompt: "Say it in Italian: I saw Marco three days ago and spoke to Giulia a moment ago.", tip: "\"Fa\" at the end of each time phrase.", explanation: "Two \"fa\" expressions." },
    ],
  },
];
