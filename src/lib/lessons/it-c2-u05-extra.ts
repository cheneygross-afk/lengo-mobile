// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u05-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 5 Extra Practice: Dialects and Regional Languages.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U05_EXTRA: Lesson[] = [
  {
    slug: "c2-dialects-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: South",
    summary: "Practice recognizing Neapolitan, Sicilian and southern regional Italian, and restating them in standard Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Southern regional Italian",
        body: [
          "Many southern speakers who never use full dialect still carry its grammar into Italian. Five features to recognize: \"stare\" for \"essere\" (\"sto a casa\"), \"tenere\" for \"avere\" (\"tengo fretta\"), the preposition \"a\" before a personal object (\"ho chiamato a Luca\"), the past historic for recent events (\"stamattina mi alzai presto\") and \"mo'\" for \"ora\". In standard Italian: \"sono a casa\", \"ho fretta\", \"ho chiamato Luca\", \"stamattina mi sono alzato presto\", \"ora\".",
        ],
        examples: [
          { es: "Sto a casa. → Sono a casa.", en: "I'm at home." },
          { es: "Tengo fretta. → Ho fretta.", en: "I'm in a hurry." },
          { es: "Ho chiamato a Luca. → Ho chiamato Luca.", en: "I called Luca." },
          { es: "Stamattina mi alzai presto. → Stamattina mi sono alzato presto.", en: "This morning I got up early." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm in a hurry.", answer: "Ho fretta.", altAnswers: ["Io ho fretta."], explanation: "Southern regional \"tengo fretta\" → \"ho fretta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I called] Luca.", sentence: "___ Luca.", answer: "Ho chiamato", explanation: "No \"a\" before a direct object in the standard." },
        ],
      },
      {
        heading: "Neapolitan and Sicilian",
        body: [
          "A short exchange, written for this practice, between a Neapolitan and a Sicilian on a train. \"Addò jate?\" (Dove andate?) \"A Palermu, a casa. Vuatri unni scinniti?\" (A Palermo, a casa. Voi dove scendete?) \"A Salierno. Nun ce sta 'nu posto libero?\" (A Salerno. Non c'è un posto libero?) \"Talìa, ddà c'è.\" (Guarda, là c'è.) Note the Neapolitan \"ce sta\" for \"c'è\" and the Sicilian \"ddà\" for \"là\".",
        ],
        examples: [
          { es: "Addò jate? → Dove andate?", en: "Where are you going? (plural)" },
          { es: "Vuatri unni scinniti? → Voi dove scendete?", en: "Where are you getting off?" },
          { es: "Nun ce sta 'nu posto libero? → Non c'è un posto libero?", en: "Isn't there a free seat?" },
          { es: "Talìa, ddà c'è. → Guarda, là c'è.", en: "Look, there's one there." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where are you getting off?", answer: "Dove scendete?", altAnswers: ["Voi dove scendete?", "Dove scendi?", "Tu dove scendi?", "Dove scende?"], explanation: "Sicilian \"Vuatri unni scinniti?\"." },
          { type: "listen-choose", audio: "Guarda, là c'è un posto libero.", question: "What is being pointed out?", options: ["a free seat", "the exit", "the ticket inspector", "a station"], correctIndex: 0, explanation: "Sicilian \"Talìa, ddà c'è\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Isn't there a free seat?", answer: "Non c'è un posto libero?", altAnswers: ["Non c'è nessun posto libero?", "C'è un posto libero?"], explanation: "Neapolitan \"Nun ce sta 'nu posto libero?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This morning I got up early.", answer: "Stamattina mi sono alzato presto.", altAnswers: ["Stamattina mi sono alzata presto.", "Questa mattina mi sono alzato presto.", "Questa mattina mi sono alzata presto."], explanation: "Standard uses the \"passato prossimo\" for today's events." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where are you going? (to several people)", answer: "Dove andate?", altAnswers: ["Voi dove andate?", "Dove andate voi?"], explanation: "Neapolitan \"Addò jate?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going home to Palermo.", answer: "Vado a casa, a Palermo.", altAnswers: ["Torno a casa a Palermo.", "Vado a casa a Palermo.", "Torno a casa, a Palermo."], explanation: "Sicilian \"A Palermu, a casa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll come now.", answer: "Vengo ora.", altAnswers: ["Ora vengo.", "Adesso vengo.", "Vengo adesso.", "Arrivo subito."], explanation: "Southern \"Mo' vengo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody here is a fool.", answer: "Qui nessuno è stupido.", altAnswers: ["Qui nessuno è fesso.", "Nessuno qui è stupido.", "Qui nessuno è scemo."], explanation: "Neapolitan \"Ccà nisciuno è fesso\"; \"fesso\" is also colloquial Italian." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm] at home.", sentence: "___ a casa.", answer: "Sono", explanation: "Southern \"sto a casa\" → \"sono a casa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Look, [there's one there].", sentence: "Guarda, ___.", answer: "là c'è", altAnswers: ["ce n'è uno là", "c'è là", "lì c'è"], explanation: "Sicilian \"ddà\" = là." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [love you].", sentence: "Ti ___.", answer: "voglio bene", explanation: "Sicilian \"Ti vogghiu beni\"." },
      { type: "word-order", prompt: "Put the words in order to say: Where are you getting off?", words: ["Voi", "dove", "scendete?"], translation: "Where are you getting off?", altOrders: [["Dove", "scendete", "voi?"]], explanation: "Sicilian \"Vuatri unni scinniti?\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'm looking for work.", words: ["Cerco", "lavoro."], translation: "I'm looking for work.", explanation: "Sicilian \"Cercu travagghiu\"." },
      { type: "matching", instructions: "Match the southern form to standard Italian.", pairs: [{ left: "addò", right: "dove" }, { left: "ddà", right: "là" }, { left: "mo'", right: "ora" }, { left: "ce sta", right: "c'è" }], explanation: "Four high-frequency southern words." },
      { type: "multiple-choice", question: "Which sentence is standard Italian?", options: ["Ho chiamato Luca.", "Ho chiamato a Luca.", "Tengo chiamato Luca.", "Chiamai a Luca stamattina."], correctIndex: 0, explanation: "No \"a\" before a personal direct object; \"avere\", not \"tenere\"." },
      { type: "dictation", audio: "Stamattina mi sono alzato presto perché avevo fretta.", explanation: "Standard tenses and \"avere fretta\"." },
      { type: "speak", text: "Sono a casa, ho fretta e ho chiamato Luca.", prompt: "Say it in standard Italian: I'm at home, I'm in a hurry and I called Luca.", tip: "Three short clauses: keep an even rhythm.", explanation: "Standard for \"Sto a casa, tengo fretta e ho chiamato a Luca\"." },
    ],
  },
  {
    slug: "c2-dialects-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: North",
    summary: "Practice recognizing Venetian, Lombard and northern regional Italian, and restating them in standard Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Northern regional Italian",
        body: [
          "Northern Italians speaking Italian show their own regional features: the article before women's first names (\"la Giulia\", \"la Marta\"), almost no past historic (\"l'anno scorso sono andato\"), \"mica\" to strengthen a negative (\"non è mica vero\"), and regional words such as \"anguria\" (Center: \"cocomero\"), \"sciura\" (a lady, from Milanese) and \"ciapa\" (take it). In neutral standard: \"Giulia\", \"non è affatto vero\", \"signora\", \"prendi\".",
        ],
        examples: [
          { es: "Ho visto la Giulia al bar. → Ho visto Giulia al bar.", en: "I saw Giulia at the bar." },
          { es: "Non è mica vero. → Non è affatto vero.", en: "It isn't true at all." },
          { es: "Ciapa! → Prendi!", en: "Take it! (Milanese → standard)" },
          { es: "Fa' balà l'oeucc! → Sta' attento!", en: "Keep your eyes open! (Milanese → standard)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It isn't true at all.", answer: "Non è affatto vero.", altAnswers: ["Non è mica vero.", "Non è per niente vero.", "Non è assolutamente vero."], explanation: "\"Mica\" is colloquial and northern-flavoured; \"affatto\" is neutral." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Keep your eyes open]!", sentence: "___!", answer: "Sta' attento", altAnswers: ["Stai attento", "Sta' attenta", "Stai attenta", "Tieni gli occhi aperti", "Apri gli occhi"], explanation: "Milanese \"Fa' balà l'oeucc\": literally 'make your eyes dance'." },
        ],
      },
      {
        heading: "Venetian",
        body: [
          "A short scene, written for this practice, at a bar in Padua. \"Cossa ve porto?\" (Cosa vi porto?) \"Do spritz, grassie.\" (Due spritz, grazie.) \"Ghe xe anca qualcossa da magnar?\" (C'è anche qualcosa da mangiare?) \"Ghe xe i cicheti.\" (Ci sono gli stuzzichini.) \"Bon, alora ndemo coi cicheti.\" (Bene, allora prendiamo gli stuzzichini.) Note Venetian \"ghe xe\" for \"c'è\" and \"ci sono\", \"do\" for \"due\", \"grassie\" with a softened z, and \"magnar\" with the final vowel dropped.",
        ],
        examples: [
          { es: "Cossa ve porto? → Cosa vi porto?", en: "What can I bring you?" },
          { es: "Do spritz, grassie. → Due spritz, grazie.", en: "Two spritzes, thanks." },
          { es: "Ghe xe anca qualcossa da magnar? → C'è anche qualcosa da mangiare?", en: "Is there anything to eat as well?" },
          { es: "Bon, alora ndemo coi cicheti. → Bene, allora prendiamo gli stuzzichini.", en: "Right, then let's go for the snacks." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What can I bring you?", answer: "Cosa vi porto?", altAnswers: ["Che cosa vi porto?", "Che vi porto?", "Cosa le porto?", "Cosa ti porto?"], explanation: "Venetian \"Cossa ve porto?\"." },
          { type: "listen-choose", audio: "C'è anche qualcosa da mangiare?", question: "What does the customer ask?", options: ["whether there is anything to eat", "how much it costs", "where the toilet is", "what time it closes"], correctIndex: 0, explanation: "Venetian \"Ghe xe anca qualcossa da magnar?\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there anything to eat as well?", answer: "C'è anche qualcosa da mangiare?", altAnswers: ["Avete anche qualcosa da mangiare?"], explanation: "\"Qualcosa da\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two spritzes, thanks.", answer: "Due spritz, grazie.", explanation: "Foreign words stay invariable in the plural: \"due spritz\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last year I went to Venice.", answer: "L'anno scorso sono andato a Venezia.", altAnswers: ["L'anno scorso sono andata a Venezia.", "L'anno scorso andai a Venezia."], explanation: "Northern speakers use the \"passato prossimo\" even for distant events." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take it!", answer: "Prendi!", altAnswers: ["Prendilo!", "Prendila!", "Tieni!"], explanation: "Milanese \"Ciapa!\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lady on the third floor is very elegant.", answer: "La signora del terzo piano è molto elegante.", altAnswers: ["La signora al terzo piano è molto elegante.", "La signora del terzo piano è elegantissima."], explanation: "Milanese-flavoured \"la sciura\" → \"la signora\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't got any money.", answer: "Non ho soldi.", altAnswers: ["Non ho denaro.", "Io non ho soldi.", "Non ho un soldo."], explanation: "Venetian \"No go schei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There are] the snacks.", sentence: "___ gli stuzzichini.", answer: "Ci sono", explanation: "Venetian \"ghe xe\" serves for both \"c'è\" and \"ci sono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I saw [Giulia] at the bar.", sentence: "Ho visto ___ al bar.", answer: "Giulia", altAnswers: ["la Giulia"], explanation: "The article before a first name is northern regional usage; the neutral standard omits it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Right, [then let's have] the snacks.", sentence: "Bene, ___ gli stuzzichini.", answer: "allora prendiamo", altAnswers: ["allora ordiniamo"], explanation: "Venetian \"alora ndemo coi\": literally 'let's go with'." },
      { type: "word-order", prompt: "Put the words in order to say: What can I bring you?", words: ["Cosa", "vi", "porto?"], translation: "What can I bring you?", explanation: "Clitic \"vi\" before the verb." },
      { type: "word-order", prompt: "Put the words in order to say: Let's go and eat!", words: ["Andiamo", "a", "mangiare!"], translation: "Let's go and eat!", explanation: "Venetian \"Ndemo a magnar!\"." },
      { type: "matching", instructions: "Match the northern form to standard Italian.", pairs: [{ left: "ghe xe", right: "c'è" }, { left: "schei", right: "soldi" }, { left: "ciapa", right: "prendi" }, { left: "sciura", right: "signora" }], explanation: "Venetian and Milanese words." },
      { type: "multiple-choice", question: "In which area would you hear \"anguria\" rather than \"cocomero\"?", options: ["the North", "Tuscany and Lazio", "Sicily only", "nowhere: it is archaic"], correctIndex: 0, explanation: "\"Anguria\" North, \"cocomero\" Center, \"mellone\" in parts of the South." },
      { type: "dictation", audio: "Cosa vi porto? Due spritz e qualcosa da mangiare.", explanation: "Venetian \"Cossa ve porto?\" in standard Italian." },
      { type: "speak", text: "Due spritz, grazie. C'è anche qualcosa da mangiare?", prompt: "Order in standard Italian: Two spritzes, thanks. Is there anything to eat as well?", tip: "Rising tone on the question.", explanation: "Standard for \"Do spritz, grassie. Ghe xe anca qualcossa da magnar?\"." },
    ],
  },
];
