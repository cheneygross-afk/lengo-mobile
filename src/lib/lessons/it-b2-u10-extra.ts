// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u10-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 10 Extra Practice: Concession and Contrast. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U10_EXTRA: Lesson[] = [
  {
    slug: "b2-concession-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Subjunctive Connectors",
    summary: "Fresh sentences with benché, sebbene, nonostante, malgrado and per quanto + subjunctive.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Although + subjunctive",
        body: [
          "Present main verb → present or past subjunctive; past main verb → imperfect or pluperfect subjunctive. \"Anche se\" is the indicative alternative.",
        ],
        examples: [
          { es: "Benché sia domenica, il museo è aperto.", en: "Although it's Sunday, the museum is open." },
          { es: "Sebbene non l'avessi mai visto, l'ho riconosciuto subito.", en: "Although I'd never seen him, I recognized him at once." },
          { es: "Malgrado guadagnasse poco, risparmiava sempre qualcosa.", en: "Although he earned little, he always saved something." },
          { es: "Per quanto sia difficile, ce la faremo.", en: "However hard it is, we'll make it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although it's Sunday, the museum is open.", answer: "Benché sia domenica, il museo è aperto.", altAnswers: ["Sebbene sia domenica, il museo è aperto.", "Nonostante sia domenica, il museo è aperto.", "Anche se è domenica, il museo è aperto."], explanation: "\"Sia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "However hard it is, we'll make it.", answer: "Per quanto sia difficile, ce la faremo.", explanation: "\"Per quanto\" + \"sia\"; \"farcela\" = to make it." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although I'd never seen him, I recognized him at once.", answer: "Sebbene non l'avessi mai visto, l'ho riconosciuto subito.", altAnswers: ["Benché non l'avessi mai visto, l'ho riconosciuto subito.", "Nonostante non l'avessi mai visto, l'ho riconosciuto subito.", "Anche se non l'avevo mai visto, l'ho riconosciuto subito."], explanation: "Pluperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although he earned little, he always saved something.", answer: "Malgrado guadagnasse poco, risparmiava sempre qualcosa.", altAnswers: ["Benché guadagnasse poco, risparmiava sempre qualcosa.", "Nonostante guadagnasse poco, risparmiava sempre qualcosa.", "Anche se guadagnava poco, risparmiava sempre qualcosa."], explanation: "\"Guadagnasse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although the film is long, it's never boring.", answer: "Sebbene il film sia lungo, non è mai noioso.", altAnswers: ["Benché il film sia lungo, non è mai noioso.", "Nonostante il film sia lungo, non è mai noioso.", "Anche se il film è lungo, non è mai noioso."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although they had promised, they didn't come.", answer: "Benché l'avessero promesso, non sono venuti.", altAnswers: ["Sebbene l'avessero promesso, non sono venuti.", "Nonostante l'avessero promesso, non sono venuti.", "Anche se l'avevano promesso, non sono venuti.", "Benché lo avessero promesso, non sono venuti."], explanation: "\"L'avessero promesso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "However much he eats, he never puts on weight.", answer: "Per quanto mangi, non ingrassa mai.", altAnswers: ["Per quanto mangi tanto, non ingrassa mai."], explanation: "\"Per quanto\" + \"mangi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although she doesn't like flying, she goes to New York every year.", answer: "Nonostante non le piaccia volare, va a New York ogni anno.", altAnswers: ["Benché non le piaccia volare, va a New York ogni anno.", "Anche se non le piace volare, va a New York ogni anno.", "Sebbene non le piaccia volare, va a New York tutti gli anni."], explanation: "\"Piaccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although the shop was closed, the owner let us in.", answer: "Benché il negozio fosse chiuso, il proprietario ci ha fatto entrare.", altAnswers: ["Sebbene il negozio fosse chiuso, il proprietario ci ha fatto entrare.", "Anche se il negozio era chiuso, il proprietario ci ha fatto entrare.", "Benché il negozio fosse chiuso, il titolare ci ha fatto entrare."], explanation: "\"Fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although we'd been warned, we got lost.", answer: "Nonostante ci avessero avvisato, ci siamo persi.", altAnswers: ["Benché ci avessero avvisato, ci siamo persi.", "Sebbene ci avessero avvertito, ci siamo persi.", "Anche se ci avevano avvisato, ci siamo persi.", "Nonostante ci avessero avvisati, ci siamo persi."], explanation: "Pluperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although it [is] cheap, the restaurant is excellent.", sentence: "Sebbene ___ economico, il ristorante è ottimo.", answer: "sia", explanation: "\"Sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although they [had] little money, they were happy.", sentence: "Benché ___ pochi soldi, erano felici.", answer: "avessero", explanation: "\"Avessero\"." },
      { type: "word-order", prompt: "Put the words in order to say: Although it's late, the shop is open.", words: ["Benché", "sia", "tardi,", "il", "negozio", "è", "aperto."], translation: "Although it's late, the shop is open.", explanation: "\"Benché sia\"." },
      { type: "multiple-choice", question: "Which completes \"Per quanto ___, non riesco a ricordare il suo nome\"?", options: ["mi sforzi", "mi sforzo", "mi sforzerei", "mi sforzassi domani"], correctIndex: 0, explanation: "\"Per quanto\" + present subjunctive." },
      { type: "listen-choose", audio: "Nonostante non le piaccia volare, va a New York ogni anno.", question: "What does she do every year?", options: ["She flies to New York.", "She avoids flying.", "She goes by ship.", "She stays at home."], correctIndex: 0, explanation: "\"Va a New York ogni anno\"." },
      { type: "dictation", audio: "Sebbene non l'avessi mai visto, l'ho riconosciuto subito.", explanation: "\"L'avessi visto\"." },
      { type: "speak", text: "Per quanto sia difficile, ce la faremo, anche se ci vorrà tempo.", prompt: "Say it in Italian: However hard it is, we'll make it, even though it will take time.", tip: "Subjunctive after \"per quanto\", indicative after \"anche se\".", explanation: "Two concessions." },
    ],
  },
  {
    slug: "b2-concession-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Pur and Nonostante",
    summary: "Fresh sentences with pur + gerund and nonostante / malgrado + noun.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Pur essendo, nonostante il",
        body: [
          "\"Pur\" + present gerund (same time) or past gerund (earlier), same subject. \"Nonostante / malgrado\" + noun, no \"di\".",
        ],
        examples: [
          { es: "Pur abitando in centro, va al lavoro in macchina.", en: "Though she lives downtown, she drives to work." },
          { es: "Pur avendo vinto, non era soddisfatto.", en: "Despite having won, he wasn't satisfied." },
          { es: "Nonostante il caldo, abbiamo camminato tutto il giorno.", en: "Despite the heat, we walked all day." },
          { es: "Malgrado gli sforzi, non ci sono riusciti.", en: "Despite their efforts, they didn't manage it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite having won, he wasn't satisfied.", answer: "Pur avendo vinto, non era soddisfatto.", altAnswers: ["Pur avendo vinto, non era contento.", "Benché avesse vinto, non era soddisfatto."], explanation: "\"Pur avendo vinto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the heat, we walked all day.", answer: "Nonostante il caldo, abbiamo camminato tutto il giorno.", altAnswers: ["Malgrado il caldo, abbiamo camminato tutto il giorno."], explanation: "\"Nonostante\" + noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Though she lives downtown, she drives to work.", answer: "Pur abitando in centro, va al lavoro in macchina.", altAnswers: ["Pur vivendo in centro, va al lavoro in macchina.", "Pur abitando in centro, va a lavorare in macchina."], explanation: "\"Pur abitando\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite their efforts, they didn't manage it.", answer: "Malgrado gli sforzi, non ci sono riusciti.", altAnswers: ["Nonostante gli sforzi, non ci sono riusciti.", "Malgrado i loro sforzi, non ci sono riusciti."], explanation: "\"Malgrado\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Though I understand your reasons, I don't agree. (to a friend)", answer: "Pur capendo le tue ragioni, non sono d'accordo.", altAnswers: ["Pur comprendendo le tue ragioni, non sono d'accordo."], explanation: "\"Pur capendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the snow, the trains are running.", answer: "Nonostante la neve, i treni circolano.", altAnswers: ["Malgrado la neve, i treni circolano.", "Nonostante la neve, i treni funzionano.", "Nonostante la neve, i treni viaggiano."], explanation: "\"Circolare\" = to run (trains)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite having slept ten hours, I'm still tired.", answer: "Pur avendo dormito dieci ore, sono ancora stanco.", altAnswers: ["Pur avendo dormito dieci ore, sono ancora stanca.", "Nonostante abbia dormito dieci ore, sono ancora stanco."], explanation: "\"Pur\" + past gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the difficulties, the project was a success.", answer: "Nonostante le difficoltà, il progetto è stato un successo.", altAnswers: ["Malgrado le difficoltà, il progetto è stato un successo.", "Nonostante le difficoltà, il progetto ha avuto successo."], explanation: "\"Nonostante le difficoltà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Though they're twins, they're completely different.", answer: "Pur essendo gemelli, sono completamente diversi.", altAnswers: ["Pur essendo gemelle, sono completamente diverse.", "Benché siano gemelli, sono completamente diversi."], explanation: "\"Pur essendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite having apologized, she's still angry.", answer: "Pur essendosi scusata, è ancora arrabbiata.", altAnswers: ["Pur avendo chiesto scusa, è ancora arrabbiata."], explanation: "Reflexive: \"pur essendosi scusata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Despite the crowds], we enjoyed the concert.", sentence: "___, ci siamo goduti il concerto.", answer: "Nonostante la folla", altAnswers: ["Malgrado la folla"], explanation: "Noun concession." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Though he's] a vegetarian, he cooks meat for his family.", sentence: "___ vegetariano, cucina la carne per la sua famiglia.", answer: "Pur essendo", explanation: "\"Pur essendo\"." },
      { type: "matching", instructions: "Match each beginning to its ending.", pairs: [{ left: "Pur essendo ricco,", right: "vive in modo semplice." }, { left: "Nonostante la pioggia,", right: "siamo usciti." }, { left: "Pur avendo studiato,", right: "non ha passato l'esame." }, { left: "Malgrado l'età,", right: "corre ancora le maratone." }], explanation: "Each concession meets an unexpected result." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Pur non avendo fame, ho mangiato.", "Pur non ho fame, ho mangiato.", "Pur di non avere fame, ho mangiato.", "Nonostante di non avere fame, ho mangiato."], correctIndex: 0, explanation: "\"Pur non avendo\"." },
      { type: "listen-choose", audio: "Pur essendo gemelli, sono completamente diversi.", question: "What's said about the twins?", options: ["They're completely different.", "They're identical.", "They live apart.", "They don't get on."], correctIndex: 0, explanation: "\"Completamente diversi\"." },
      { type: "dictation", audio: "Nonostante le difficoltà, il progetto è stato un successo.", explanation: "\"Nonostante\" + noun." },
      { type: "speak", text: "Pur avendo dormito dieci ore e nonostante il caffè, sono ancora stanchissimo.", prompt: "Say it in Italian (a man speaking): Despite having slept ten hours and despite the coffee, I'm still exhausted.", tip: "\"Pur avendo\" + \"nonostante il\".", explanation: "Gerund and noun concessions." },
    ],
  },
  {
    slug: "b2-concession-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Contrast",
    summary: "Fresh sentences with mentre, invece, al contrario, tuttavia, eppure and comunque.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two sides",
        body: [
          "\"Mentre\" (whereas), \"invece\" (on the other hand), \"invece di\" (instead of), \"al contrario\" (on the contrary), \"tuttavia\" (however), \"eppure\" (and yet), \"comunque\" + subjunctive (however) or alone (anyway).",
        ],
        examples: [
          { es: "Lei si alza all'alba, mentre lui dorme fino a mezzogiorno.", en: "She gets up at dawn, whereas he sleeps until noon." },
          { es: "Pensavo che fosse difficile; invece è facilissimo.", en: "I thought it was difficult; instead it's very easy." },
          { es: "Sembrava tranquillo, eppure era nervosissimo.", en: "He seemed calm, and yet he was extremely nervous." },
          { es: "Comunque tu decida, avvisami.", en: "Whatever you decide, let me know." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She gets up at dawn, whereas he sleeps until noon.", answer: "Lei si alza all'alba, mentre lui dorme fino a mezzogiorno.", altAnswers: ["Si alza all'alba, mentre lui dorme fino a mezzogiorno.", "Lei si alza all'alba, lui invece dorme fino a mezzogiorno."], explanation: "\"Mentre\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought it was difficult; instead it's very easy.", answer: "Pensavo che fosse difficile; invece è facilissimo.", altAnswers: ["Pensavo che fosse difficile, invece è facilissimo.", "Pensavo che fosse difficile; invece è molto facile."], explanation: "\"Invece\" = instead, contrary to expectation." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He seemed calm, and yet he was extremely nervous.", answer: "Sembrava tranquillo, eppure era nervosissimo.", altAnswers: ["Sembrava calmo, eppure era nervosissimo.", "Sembrava tranquillo, eppure era molto nervoso."], explanation: "\"Eppure\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whatever you decide, let me know. (to a friend)", answer: "Comunque tu decida, avvisami.", altAnswers: ["Qualunque cosa tu decida, avvisami.", "Comunque tu decida, fammi sapere.", "Qualunque cosa tu decida, fammi sapere."], explanation: "\"Comunque\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Instead of shouting, let's talk calmly.", answer: "Invece di gridare, parliamo con calma.", altAnswers: ["Invece di urlare, parliamo con calma.", "Anziché gridare, parliamo con calma."], explanation: "\"Invece di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hotel was beautiful; the food, however, was terrible.", answer: "L'albergo era bellissimo; il cibo, tuttavia, era pessimo.", altAnswers: ["L'albergo era bellissimo; il cibo, invece, era pessimo.", "L'hotel era bellissimo; il cibo, tuttavia, era pessimo.", "L'albergo era bellissimo, ma il cibo era pessimo."], explanation: "\"Tuttavia\" can sit after the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She doesn't hate sports; on the contrary, she loves them.", answer: "Non odia lo sport; al contrario, lo adora.", altAnswers: ["Non odia lo sport, al contrario, lo adora.", "Non odia lo sport; anzi, lo adora.", "Non odia lo sport; al contrario, lo ama."], explanation: "\"Al contrario\" / \"anzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the city I take the bus, while in the country I need the car.", answer: "In città prendo l'autobus, mentre in campagna ho bisogno della macchina.", altAnswers: ["In città prendo l'autobus, mentre in campagna mi serve la macchina.", "In città prendo l'autobus, in campagna invece mi serve la macchina."], explanation: "\"Mentre\" = while (contrast)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know if it'll work. Anyway, let's try.", answer: "Non so se funzionerà. Comunque, proviamo.", altAnswers: ["Non so se funzionerà. Comunque proviamoci.", "Non so se funzionerà, comunque proviamo.", "Non so se funzionerà. In ogni caso, proviamo."], explanation: "Adverb \"comunque\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Prices went up; nevertheless, sales increased.", answer: "I prezzi sono aumentati; ciononostante, le vendite sono cresciute.", altAnswers: ["I prezzi sono aumentati, ciononostante le vendite sono cresciute.", "I prezzi sono saliti; ciononostante, le vendite sono aumentate.", "I prezzi sono aumentati; nonostante ciò, le vendite sono cresciute."], explanation: "\"Ciononostante\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I expected rain; [instead] it was sunny all day.", sentence: "Mi aspettavo la pioggia; ___ c'è stato il sole tutto il giorno.", answer: "invece", explanation: "\"Invece\" = instead." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's very rich, [and yet] he's never happy.", sentence: "È ricchissimo, ___ non è mai contento.", answer: "eppure", explanation: "\"Eppure\"." },
      { type: "multi-select", question: "Which can complete \"Mio fratello ama la città, ___ io preferisco la campagna\"?", options: ["mentre", "invece", "benché", "pur"], correctIndexes: [0, 1], explanation: "\"Mentre\" and, in everyday speech, \"invece\"; \"benché\" and \"pur\" express concession, not contrast." },
      { type: "multiple-choice", question: "Which means However you look at it, it's a mistake?", options: ["Comunque la si guardi, è un errore.", "Comunque, è un errore.", "Invece di guardarla, è un errore.", "Mentre la guardi, è un errore."], correctIndex: 0, explanation: "\"Comunque\" + subjunctive." },
      { type: "listen-choose", audio: "L'albergo era bellissimo; il cibo, tuttavia, era pessimo.", question: "What was wrong with the vacation?", options: ["The food.", "The hotel.", "The weather.", "The beach."], correctIndex: 0, explanation: "\"Il cibo era pessimo\"." },
      { type: "dictation", audio: "Sembrava tranquillo, eppure era nervosissimo.", explanation: "\"Eppure\"." },
      { type: "speak", text: "Io mi alzo all'alba, mentre mia sorella dorme fino a tardi; comunque vada, arriviamo sempre insieme.", prompt: "Say it in Italian: I get up at dawn, whereas my sister sleeps late; however things go, we always arrive together.", tip: "Contrast with \"mentre\", then \"comunque vada\".", explanation: "Contrast and \"comunque\"." },
    ],
  },
];
