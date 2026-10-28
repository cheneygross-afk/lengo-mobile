// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u20-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 20 Extra Practice: Listening Mastery.
// Original audio texts; people are invented.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U20_EXTRA: Lesson[] = [
  {
    slug: "c2-listening-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Fast Speech",
    summary: "Fresh fast, informal audio: shortened forms, fillers and quick decisions between friends.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh conversation",
        body: [
          "Listen to this original exchange between two friends planning a Saturday: \"Allora, sabato che si fa? Boh, vabbè, io direi mare. Mare? Con 'sto vento? Ma dai, domani cala. Seh, come no. Facciamo così: se c'è sole si va, se no cinema. Ok, ci sto.\"",
          "Notice the shortened forms: \"vabbè\" for \"va bene\", \"'sto\" for \"questo\", \"seh\" as an ironic yes. The impersonal \"si fa\", \"si va\" is the normal way to say ‘we do’, ‘we go’ in relaxed speech, especially in Tuscany and central Italy, but it is understood everywhere.",
          "The decision comes in the last two lines: \"Facciamo così\" announces it, and \"ci sto\" accepts it. In fast speech, these short formulas are the anchors you hold on to while the rest flies past.",
        ],
        examples: [
          { es: "Allora, sabato che si fa?", en: "So, what are we doing on Saturday?" },
          { es: "Con 'sto vento non si va da nessuna parte.", en: "With this wind we're not going anywhere." },
          { es: "Facciamo così: se c'è sole si va al mare.", en: "Here's the plan: if it's sunny we go to the beach." },
          { es: "Ok, ci sto.", en: "OK, I'm in." },
          { es: "Seh, come no.", en: "Yeah, right." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "OK, I'm in.", answer: "Ok, ci sto.", altAnswers: ["Va bene, ci sto.", "Ci sto."], explanation: "\"Starci\" = to agree to a plan." },
          { type: "listen-choose", audio: "Facciamo così: se c'è sole si va al mare, se no cinema.", question: "What is the plan?", options: ["Beach if sunny, otherwise the movies.", "The movies whatever the weather.", "Beach on Sunday.", "Stay home if it rains."], correctIndex: 0, explanation: "\"Se no\" = otherwise." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Boh, guarda, non lo so, vabbè, facciamo che ci sentiamo stasera e decidiamo.", question: "What does the speaker propose?", options: ["To talk again tonight and decide then.", "To meet tonight.", "To cancel the plan.", "To decide right now."], correctIndex: 0, explanation: "\"Ci sentiamo\" = we'll talk (by phone)." },
      { type: "listen-choose", audio: "Ma figurati, nessun problema, anzi, mi fa piacere, passa pure quando vuoi.", question: "How does the speaker react?", options: ["Warmly: come whenever you like.", "Reluctantly agrees.", "Says it's a problem.", "Asks for a fixed time."], correctIndex: 0, explanation: "\"Figurati\" + \"anzi\" strengthen the welcome." },
      { type: "dictation", audio: "Vabbè, dai, facciamo alle otto davanti al bar.", explanation: "\"Vabbè\" is the spoken form of \"va bene\"." },
      { type: "dictation", audio: "Non lo so, magari ci vediamo domani.", explanation: "Fast speech can blur \"non lo so\"; write it in full." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So, what are we doing on Saturday?", answer: "Allora, sabato che si fa?", altAnswers: ["Allora, che facciamo sabato?", "Allora, sabato che facciamo?"], explanation: "Impersonal \"si fa\" = ‘we do’." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (informal).", source: "Yeah, right.", answer: "Seh, come no.", altAnswers: ["Sì, come no.", "Come no."], explanation: "Ironic \"come no\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here's the plan: if it's sunny we go to the beach.", answer: "Facciamo così: se c'è sole si va al mare.", altAnswers: ["Facciamo così: se c'è il sole andiamo al mare.", "Facciamo così: se c'è sole andiamo al mare."], explanation: "\"Facciamo così\" announces a decision." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The wind will drop tomorrow.", answer: "Domani il vento cala.", altAnswers: ["Il vento cala domani.", "Domani il vento calerà."], explanation: "Present for a near future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll talk tonight and decide.", answer: "Ci sentiamo stasera e decidiamo.", altAnswers: ["Ci sentiamo stasera e poi decidiamo."], explanation: "\"Sentirsi\" = to be in touch." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[With this] wind we're not going anywhere.", sentence: "___ vento non si va da nessuna parte.", answer: "Con 'sto", altAnswers: ["Con questo"], explanation: "\"'Sto\" is the spoken form of \"questo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Come by [whenever you like].", sentence: "Passa pure ___.", answer: "quando vuoi", explanation: "Literally ‘when you want’." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Otherwise] we'll go to the movies.", sentence: "___ andiamo al cinema.", answer: "Se no", altAnswers: ["Sennò", "Altrimenti"], explanation: "\"Sennò\" is common in speech." },
      { type: "word-order", prompt: "Put the words in order to say: If it's sunny we go, otherwise cinema.", words: ["Se", "c'è", "sole", "si", "va,", "se", "no", "cinema."], translation: "If it's sunny we go, otherwise cinema.", explanation: "Two short conditionals." },
      { type: "word-order", prompt: "Put the words in order to say: Not at all, in fact I'm pleased.", words: ["Ma", "figurati,", "anzi,", "mi", "fa", "piacere."], translation: "Not at all, in fact I'm pleased.", explanation: "\"Anzi\" strengthens." },
      { type: "speak", text: "Vabbè, dai, facciamo alle otto davanti al bar.", prompt: "Say it fast and relaxed: OK, come on, let's say eight in front of the bar.", tip: "Run \"vabbè, dai\" together; slow down on \"alle otto\".", explanation: "Keep the key information clear." },
      { type: "speak", text: "Facciamo così: se c'è sole si va, se no cinema.", prompt: "Say it: Here's the plan: if it's sunny we go, otherwise cinema.", tip: "Pause after \"così\".", explanation: "A quick decision formula." },
    ],
  },
  {
    slug: "c2-listening-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Accents",
    summary: "Fresh audio from speakers around Italy: regional words, typical features and what stays the same.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Voices from around Italy",
        body: [
          "Four invented speakers describe their morning. Giulia from Milan: \"Prendo un caffè al volo e poi via, in metro.\" Lorenzo from Florence: \"La mattina un caffè e una bella schiacciata, e via a lavorare.\" Teresa from Naples: \"Prima di tutto un caffè, poi si vede.\" Salvo from Palermo: \"Al bar mi prendo una granita con la brioche.\"",
          "The audio in this app uses a standard voice, so listen for the words that point to a region rather than the sounds: \"schiacciata\" (a Tuscan flatbread), \"granita con la brioche\" (a Sicilian breakfast), \"metro\" and \"al volo\" (busy city life). In real recordings, the Florentine speaker would breathe the \"c\" between vowels, the gorgia toscana, so that \"a casa\" sounds close to \"a hasa\", and the Neapolitan would weaken many final vowels to a neutral sound.",
          "What stays the same everywhere is the grammar and most of the vocabulary. A C2 listener uses these to follow any accent: hold on to verbs, numbers and names, and treat regional color as information about the speaker, not as noise.",
        ],
        examples: [
          { es: "Prendo un caffè al volo e poi via.", en: "I grab a quick coffee and then I'm off." },
          { es: "Al bar mi prendo una granita con la brioche.", en: "At the bar I have a granita with a brioche." },
          { es: "Prima di tutto un caffè, poi si vede.", en: "First of all a coffee, then we'll see." },
          { es: "A Firenze la schiacciata si mangia a ogni ora.", en: "In Florence people eat schiacciata at any time of day." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which speaker's breakfast points to Sicily?", options: ["Granita con la brioche", "Caffè al volo in metro", "Schiacciata", "Cappuccino e cornetto"], correctIndex: 0, explanation: "Granita and brioche is a classic Sicilian summer breakfast." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all a coffee, then we'll see.", answer: "Prima di tutto un caffè, poi si vede.", altAnswers: ["Prima di tutto un caffè, poi vediamo."], explanation: "Impersonal \"si vede\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Io la mattina prendo un caffè al volo e poi via, in metro fino in ufficio.", question: "Which detail suggests a big northern city like Milan?", options: ["A quick coffee and the metro to the office.", "A granita at the bar.", "Schiacciata for breakfast.", "A long breakfast at home."], correctIndex: 0, explanation: "\"Al volo\" and \"in metro\" suggest busy city life." },
      { type: "listen-choose", audio: "Al bar mi prendo una granita con la brioche, d'estate non c'è niente di meglio.", question: "When does the speaker have this breakfast?", options: ["In summer.", "Every winter morning.", "Only on Sundays.", "After work."], correctIndex: 0, explanation: "\"D'estate\" = in summer." },
      { type: "listen-choose", audio: "Mio nonno parlava solo dialetto, mio padre capisce ma non lo parla, e io lo sento solo alle feste.", question: "What does the speaker describe?", options: ["Dialect fading over three generations.", "A family that speaks only dialect.", "Learning dialect at school.", "A grandfather who spoke only Italian."], correctIndex: 0, explanation: "A common pattern in many Italian families." },
      { type: "dictation", audio: "Prima di tutto un caffè, poi si vede.", explanation: "Impersonal \"si\"." },
      { type: "dictation", audio: "Al bar mi prendo una granita con la brioche.", explanation: "Note \"brioche\", a French loanword used in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I grab a quick coffee and then I'm off.", answer: "Prendo un caffè al volo e poi via.", altAnswers: ["Prendo un caffè al volo e poi vado.", "Bevo un caffè al volo e poi via."], explanation: "\"Al volo\" = quickly, on the fly." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My father understands dialect but doesn't speak it.", answer: "Mio padre capisce il dialetto ma non lo parla.", altAnswers: ["Mio padre capisce il dialetto però non lo parla."], explanation: "Object pronoun \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can hear where he's from as soon as he opens his mouth.", answer: "Si sente da dove viene appena apre bocca.", altAnswers: ["Si capisce da dove viene appena apre bocca.", "Appena apre bocca si sente da dove viene."], explanation: "\"Aprire bocca\" without article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She has a slight Venetian accent.", answer: "Ha un leggero accento veneto.", altAnswers: ["Ha una leggera cadenza veneta.", "Ha un lieve accento veneto."], explanation: "\"Cadenza\" is also used for a regional lilt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I only hear dialect at family parties.", answer: "Sento il dialetto solo alle feste di famiglia.", altAnswers: ["Il dialetto lo sento solo alle feste di famiglia."], explanation: "Fronting with \"lo\" is natural in speech." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He speaks with [a strong Neapolitan accent].", sentence: "Parla con ___.", answer: "un forte accento napoletano", altAnswers: ["un accento napoletano forte", "una forte cadenza napoletana"], explanation: "Adjective \"forte\" before the noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Florence they eat [schiacciata] at any time of day.", sentence: "A Firenze la ___ si mangia a ogni ora.", answer: "schiacciata", explanation: "A Tuscan flatbread." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In summer] there's nothing better.", sentence: "___ non c'è niente di meglio.", answer: "D'estate", altAnswers: ["In estate"], explanation: "\"D'estate\" = in summer." },
      { type: "word-order", prompt: "Put the words in order to say: My grandfather spoke only dialect.", words: ["Mio", "nonno", "parlava", "solo", "dialetto."], translation: "My grandfather spoke only dialect.", explanation: "No article with \"mio nonno\"." },
      { type: "word-order", prompt: "Put the words in order to say: You can hear where she's from.", words: ["Si", "sente", "da", "dove", "viene."], translation: "You can hear where she's from.", explanation: "Impersonal \"si sente\"." },
      { type: "speak", text: "Mio padre capisce il dialetto ma non lo parla.", prompt: "Say it in standard Italian: My father understands dialect but doesn't speak it.", tip: "Stress \"capisce\" and \"parla\".", explanation: "Standard pronunciation is your model." },
      { type: "speak", text: "Ha un leggero accento veneto, ma si capisce benissimo.", prompt: "Say it: She has a slight Venetian accent, but you understand her perfectly.", tip: "Stress \"benissimo\".", explanation: "A polite comment on someone's accent." },
    ],
  },
];
