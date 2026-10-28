// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u09-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 9 Extra Practice: The Future. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md).
export const IT_A2_U09_EXTRA: Lesson[] = [
  {
    slug: "a2-future-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Regular and Irregular",
    summary: "Fresh sentences with regular and irregular future forms.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "New verbs, same patterns",
        body: [
          "Regular: \"traslocare\" → \"traslocherò\" (to move house), \"spedire\" → \"spedirò\" (to send by post), \"viaggiare\" → \"viaggerò\". Irregular stems you know: \"sar-, avr-, andr-, verr-, far-, star-, dar-, dovr-, potr-, sapr-, vedr-, vivr-, vorr-, berr-, rimarr-\".",
        ],
        examples: [
          { es: "Il mese prossimo traslocheremo a Torino.", en: "Next month we'll move to Turin." },
          { es: "Viaggerò da sola per la prima volta.", en: "I'll travel alone for the first time." },
          { es: "Spedirò il pacco lunedì.", en: "I'll send the parcel on Monday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Next month we'll move to Turin.", answer: "Il mese prossimo traslocheremo a Torino.", altAnswers: ["Il prossimo mese traslocheremo a Torino.", "Il mese prossimo ci trasferiremo a Torino."], explanation: "\"Traslocare\" → \"traslocheremo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'll travel] alone for the first time.", sentence: "___ da sola per la prima volta.", answer: "Viaggerò", explanation: "\"Viaggiare\" drops the \"i\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll send the parcel on Monday.", answer: "Spedirò il pacco lunedì.", altAnswers: ["Lunedì spedirò il pacco.", "Manderò il pacco lunedì."], explanation: "\"Spedire\" → \"spedirò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandparents will be happy.", answer: "I miei nonni saranno contenti.", altAnswers: ["I miei nonni saranno felici.", "I nonni saranno contenti."], explanation: "\"Saranno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you come to my wedding? (to two friends)", answer: "Verrete al mio matrimonio?", explanation: "\"Venire\" → \"verrete\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll give you an answer tomorrow. (formal)", answer: "Le darò una risposta domani.", altAnswers: ["Domani Le darò una risposta.", "le darò una risposta domani."], explanation: "\"Dare\" → \"darò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll have to get up early.", answer: "Dovremo alzarci presto.", altAnswers: ["Ci dovremo alzare presto."], explanation: "\"Dovere\" → \"dovremo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They'll want to see the photos.", answer: "Vorranno vedere le foto.", explanation: "\"Volere\" → \"vorranno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop will close at eight.", answer: "Il negozio chiuderà alle otto.", explanation: "\"Chiudere\" → \"chiuderà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you be able to help me? (to a friend)", answer: "Potrai aiutarmi?", altAnswers: ["Mi potrai aiutare?"], explanation: "\"Potere\" → \"potrai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tonight [we'll drink] a toast to Marco.", sentence: "Stasera ___ alla salute di Marco.", answer: "berremo", explanation: "\"Bere\" → \"berremo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Where [will you live] after university? (to a friend)", sentence: "Dove ___ dopo l'università?", answer: "vivrai", altAnswers: ["abiterai"], explanation: "\"Vivere\" → \"vivrai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [will start] school in September.", sentence: "I bambini ___ la scuola a settembre.", answer: "cominceranno", altAnswers: ["inizieranno"], explanation: "\"Cominciare\" → \"cominceranno\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'll know more tomorrow.", words: ["Domani", "ne", "saprò", "di", "più."], translation: "I'll know more tomorrow.", explanation: "\"Saperne di più\" = to know more about it." },
      { type: "multiple-choice", question: "Future of \"rimanere\", noi:", options: ["rimarremo", "rimaneremo", "rimanremo", "rimarremmo"], correctIndex: 0, explanation: "\"Rimarremo\" (\"rimarremmo\" is the conditional)." },
      { type: "dictation", audio: "Il mese prossimo traslocheremo a Torino.", explanation: "\"Traslocheremo\" with \"h\"." },
      { type: "speak", text: "Viaggerò in treno, starò da un'amica e tornerò domenica.", prompt: "Say it in Italian: I'll travel by train, stay with a friend and come back on Sunday.", tip: "Three futures with final or -RE- stress.", explanation: "\"Viaggerò\", \"starò\", \"tornerò\"." },
    ],
  },
  {
    slug: "a2-future-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Guessing",
    summary: "Use the future of probability in twelve everyday situations.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Probably, must be",
        body: [
          "Use the future to guess about now: \"Sarà\" (it must be, it's probably), \"Avrà\" (he must have), \"Costerà\" (it probably costs), \"Ci sarà\" (there must be). The future already means probably, so you don't need \"forse\".",
        ],
        examples: [
          { es: "C'è la fila: sarà un buon ristorante.", en: "There's a queue: it must be a good restaurant." },
          { es: "Ha una macchina nuova: guadagnerà bene.", en: "He's got a new car: he must earn well." },
          { es: "Non c'è nessuno: saranno al mare.", en: "There's nobody here: they must be at the beach." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a queue: it must be a good restaurant.", answer: "C'è la fila: sarà un buon ristorante.", altAnswers: ["C'è la coda: sarà un buon ristorante.", "C'è fila: sarà un buon ristorante."], explanation: "\"Sarà\" = it must be." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's nobody here: [they must be] at the beach.", sentence: "Non c'è nessuno: ___ al mare.", answer: "saranno", explanation: "Guess about now." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's got a new car: he must earn well.", answer: "Ha una macchina nuova: guadagnerà bene.", altAnswers: ["Ha la macchina nuova: guadagnerà bene."], explanation: "\"Guadagnerà\" = he probably earns." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whose is this umbrella? It must be Paolo's.", answer: "Di chi è questo ombrello? Sarà di Paolo.", altAnswers: ["Di chi è quest'ombrello? Sarà di Paolo."], explanation: "\"Sarà di Paolo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She speaks Italian very well: she must live in Italy.", answer: "Parla molto bene l'italiano: vivrà in Italia.", altAnswers: ["Parla italiano molto bene: vivrà in Italia.", "Parla benissimo l'italiano: vivrà in Italia.", "Parla molto bene l'italiano: abiterà in Italia."], explanation: "\"Vivrà\" = she probably lives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How many people are there? There must be about a hundred.", answer: "Quante persone ci sono? Saranno un centinaio.", altAnswers: ["Quante persone ci sono? Ce ne saranno un centinaio.", "Quante persone ci sono? Saranno cento."], explanation: "\"Un centinaio\" = about a hundred." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The baby is crying: he must be hungry.", answer: "Il bambino piange: avrà fame.", explanation: "\"Avrà fame\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca isn't answering: he'll be driving.", answer: "Luca non risponde: starà guidando.", altAnswers: ["Luca non risponde: guiderà."], explanation: "\"Starà guidando\" = he's probably driving." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's very far: it must take two hours.", answer: "È molto lontano: ci vorranno due ore.", altAnswers: ["È lontanissimo: ci vorranno due ore."], explanation: "\"Ci vuole / ci vogliono\" = it takes; future \"ci vorranno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That house must be very old.", answer: "Quella casa sarà molto vecchia.", altAnswers: ["Quella casa sarà molto antica.", "Quella casa sarà vecchissima."], explanation: "Guess about a quality." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The professor is late. [There must be] traffic.", sentence: "Il professore è in ritardo. ___ traffico.", answer: "Ci sarà", explanation: "\"Ci sarà\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Her son [must be] about ten.", sentence: "Suo figlio ___ dieci anni.", answer: "avrà", explanation: "Age: \"avrà\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "That jacket [must cost] a fortune.", sentence: "Quella giacca ___ una fortuna.", answer: "costerà", explanation: "Price guess." },
      { type: "word-order", prompt: "Put the words in order to say: It must be the wind.", words: ["Sarà", "il", "vento."], translation: "It must be the wind.", explanation: "A guess about a noise." },
      { type: "multiple-choice", question: "\"Saranno le dieci.\" What does it mean?", options: ["It must be about ten o'clock.", "It will be ten o'clock soon.", "It was ten o'clock.", "There will be ten of them."], correctIndex: 0, explanation: "Future of probability with the time." },
      { type: "listen-choose", audio: "Le luci sono accese: saranno a casa.", question: "What does the speaker think?", options: ["They're probably at home.", "They'll be home later.", "They were at home.", "They're never at home."], correctIndex: 0, explanation: "\"Saranno a casa\" = they must be home." },
      { type: "speak", text: "Non risponde: sarà in riunione o avrà il telefono spento.", prompt: "Say it in Italian: He's not answering: he must be in a meeting or have his phone switched off.", tip: "Two guesses: sarà, avrà.", explanation: "Future of probability with two verbs." },
    ],
  },
  {
    slug: "a2-future-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Quando and Se",
    summary: "Plans with conditions: quando, appena and se with the future in both parts.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Future + future",
        body: [
          "\"Quando\", \"appena\" (as soon as) and \"se\" + future, then the future in the main part: \"Appena avrò i soldi, comprerò una bici.\" \"Se troverò lavoro, resterò a Bologna.\" In relaxed speech, present + present is also fine.",
        ],
        examples: [
          { es: "Appena avrò i soldi, comprerò una bici.", en: "As soon as I have the money, I'll buy a bike." },
          { es: "Se troverò lavoro, resterò a Bologna.", en: "If I find a job, I'll stay in Bologna." },
          { es: "Quando sarai grande, capirai.", en: "When you're older, you'll understand." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I find a job, I'll stay in Bologna.", answer: "Se troverò lavoro, resterò a Bologna.", altAnswers: ["Se troverò lavoro, rimarrò a Bologna.", "Se trovo lavoro, resto a Bologna.", "Se troverò un lavoro, resterò a Bologna."], explanation: "\"Se\" + future." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're older, you'll understand. (to a child)", answer: "Quando sarai grande, capirai.", altAnswers: ["Quando sarai più grande, capirai."], explanation: "\"Quando\" + future." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as I have the money, I'll buy a bike.", answer: "Appena avrò i soldi, comprerò una bici.", altAnswers: ["Appena avrò i soldi, mi comprerò una bici.", "Appena avrò i soldi, comprerò una bicicletta."], explanation: "\"Appena\" + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When we arrive at the hotel, we'll have a shower.", answer: "Quando arriveremo in albergo, faremo la doccia.", altAnswers: ["Quando arriveremo all'albergo, faremo la doccia.", "Quando arriveremo in hotel, faremo la doccia.", "Quando arriveremo in albergo, ci faremo la doccia."], explanation: "Future + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're tired, we'll stay at home. (to a friend)", answer: "Se sarai stanco, resteremo a casa.", altAnswers: ["Se sarai stanca, resteremo a casa.", "Se sei stanco, restiamo a casa.", "Se sei stanca, restiamo a casa.", "Se sarai stanco, rimarremo a casa.", "Se sarai stanca, rimarremo a casa."], explanation: "\"Se\" + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When Marco calls, I'll tell him everything.", answer: "Quando chiamerà Marco, gli dirò tutto.", altAnswers: ["Quando Marco chiamerà, gli dirò tutto.", "Quando Marco telefonerà, gli dirò tutto."], explanation: "\"Gli dirò\" = I'll tell him." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it's sunny, we'll eat outside.", answer: "Se ci sarà il sole, mangeremo fuori.", altAnswers: ["Se farà bel tempo, mangeremo fuori.", "Se c'è il sole, mangiamo fuori.", "Se ci sarà il sole, mangeremo all'aperto."], explanation: "\"Ci sarà il sole\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as the film finishes, we'll go home.", answer: "Appena finirà il film, torneremo a casa.", altAnswers: ["Appena il film finirà, torneremo a casa.", "Appena finirà il film, andremo a casa."], explanation: "\"Finire\" → \"finirà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they don't come, we'll start without them.", answer: "Se non verranno, cominceremo senza di loro.", altAnswers: ["Se non vengono, cominciamo senza di loro.", "Se non verranno, inizieremo senza di loro."], explanation: "\"Senza di loro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I speak Italian well, I'll move to Rome.", answer: "Quando parlerò bene l'italiano, mi trasferirò a Roma.", altAnswers: ["Quando parlerò bene italiano, mi trasferirò a Roma.", "Quando parlerò bene l'italiano, andrò a vivere a Roma."], explanation: "\"Trasferirsi\" = to move (to a new place)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If [you need] a car, I'll lend you mine. (to a friend)", sentence: "Se ___ di una macchina, ti presterò la mia.", answer: "avrai bisogno", explanation: "\"Avere bisogno di\" in the future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [we're] in Venice, we'll take a gondola.", sentence: "Quando ___ a Venezia, prenderemo una gondola.", answer: "saremo", explanation: "Future after \"quando\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as I get home, [I'll send you] the photos. (to a friend)", sentence: "Appena arriverò a casa, ___ le foto.", answer: "ti manderò", altAnswers: ["ti invierò"], explanation: "Future in the main part." },
      { type: "word-order", prompt: "Put the words in order to say: If you study, you'll pass.", words: ["Se", "studierai,", "passerai", "l'esame."], translation: "If you study, you'll pass.", explanation: "Future + future." },
      { type: "multiple-choice", question: "Which is NOT good in writing?", options: ["Quando arriverò, ti chiamavo.", "Quando arriverò, ti chiamerò.", "Quando arrivo, ti chiamo.", "Appena arriverò, ti chiamerò."], correctIndex: 0, explanation: "The imperfetto doesn't fit a future plan." },
      { type: "dictation", audio: "Se troverò lavoro, resterò a Bologna.", explanation: "\"Troverò\", \"resterò\"." },
      { type: "speak", text: "Appena finirò l'università, viaggerò per un anno. Se avrò soldi, andrò in Giappone.", prompt: "Say it in Italian: As soon as I finish university, I'll travel for a year. If I have money, I'll go to Japan.", tip: "Future after appena and se.", explanation: "Four futures." },
    ],
  },
];
