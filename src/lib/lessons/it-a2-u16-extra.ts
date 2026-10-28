// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u16-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 16 Extra Practice: Ne. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md).
export const IT_A2_U16_EXTRA: Lesson[] = [
  {
    slug: "a2-ne-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Ne with Quantities",
    summary: "Fresh sentences with ne and numbers, amounts and none.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "How many, how much",
        body: [
          "\"Ne\" + verb + amount: \"ne ho due\", \"ne vorrei un etto\", \"non ne ho\", \"ce ne sono tanti\". In the past the participle agrees with the thing counted: \"ne ho presi tre\".",
        ],
        examples: [
          { es: "Quanti anni ha tuo nonno? Ne ha novanta.", en: "How old is your grandfather? He's ninety." },
          { es: "Prosciutto? Ne vorrei un etto.", en: "Ham? I'd like a hundred grams." },
          { es: "Quante lingue parli? Ne parlo tre.", en: "How many languages do you speak? Three." },
          { es: "Ce ne sono tanti in centro.", en: "There are lots of them in the centre." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How old is your grandfather? He's ninety. (to a friend)", answer: "Quanti anni ha tuo nonno? Ne ha novanta.", explanation: "Age with \"ne\": \"ne ha novanta\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How many languages do you speak? Three. (to a friend)", answer: "Quante lingue parli? Ne parlo tre.", explanation: "\"Ne parlo tre\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ham? I'd like a hundred grams.", answer: "Prosciutto? Ne vorrei un etto.", altAnswers: ["Prosciutto? Ne vorrei cento grammi."], explanation: "\"Un etto\" = 100 g." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are lots of them in the centre.", answer: "Ce ne sono tanti in centro.", altAnswers: ["Ce ne sono molti in centro.", "In centro ce ne sono tanti."], explanation: "\"Ce ne sono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cigarettes? I don't smoke any more.", answer: "Sigarette? Non ne fumo più.", explanation: "\"Non ne\" + verb + \"più\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have another one.", answer: "Ne prendo un altro.", altAnswers: ["Ne prendo un'altra.", "Ne prendo ancora uno.", "Ne prendo ancora una."], explanation: "\"Ne\" + \"un altro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've got too many.", answer: "Ne abbiamo troppi.", altAnswers: ["Ne abbiamo troppe."], explanation: "\"Troppi\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How many did you buy? (to a friend)", answer: "Quanti ne hai comprati?", altAnswers: ["Quante ne hai comprate?"], explanation: "Agreement with the thing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Coffee? I drink a lot of it.", answer: "Caffè? Ne bevo tanto.", altAnswers: ["Caffè? Ne bevo molto.", "Il caffè? Ne bevo tanto."], explanation: "\"Ne bevo tanto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Stamps? [I need] four.", sentence: "Francobolli? ___ quattro.", answer: "Ne servono", altAnswers: ["Me ne servono"], explanation: "\"Ne servono quattro\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Mistakes? [I made] lots!", sentence: "Errori? ___ tanti!", answer: "Ne ho fatti", explanation: "Agreement with \"errori\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Children? [They haven't got any].", sentence: "Figli? ___.", answer: "Non ne hanno", explanation: "\"Non ne hanno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Glasses of water? [I drink] eight a day.", sentence: "Bicchieri d'acqua? ___ otto al giorno.", answer: "Ne bevo", explanation: "\"Ne\" + number." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pens? [There's one] on the desk.", sentence: "Penne? ___ una sulla scrivania.", answer: "Ce n'è", explanation: "\"Ce n'è una\"." },
      { type: "multiple-choice", question: "\"Quanti fratelli hai?\" Which answer is right?", options: ["Ne ho due.", "Li ho due.", "Ho ne due.", "Ce li ho due."], correctIndex: 0, explanation: "\"Ne\" + number." },
      { type: "listen-choose", audio: "Quanti ne vuole? Ne prendo cinque.", question: "How many does the customer take?", options: ["five", "fifteen", "fifty", "none"], correctIndex: 0, explanation: "\"Cinque\"." },
      { type: "dictation", audio: "Ce ne sono tanti, ne prendo tre.", explanation: "\"Ce ne sono\", \"ne prendo\"." },
      { type: "speak", text: "Lingue? Ne parlo due. Ne vorrei imparare un'altra: l'italiano!", prompt: "Say it in Italian: Languages? I speak two. I'd like to learn another one: Italian!", tip: "\"Un'altra\": linked, u-NAL-tra.", explanation: "\"Ne\" with numbers and a modal." },
    ],
  },
  {
    slug: "a2-ne-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Ne or Lo?",
    summary: "Mixed sentences choosing between ne and lo, la, li, le.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Part or whole, again",
        body: [
          "Whole / definite / \"tutto\" → \"lo, la, li, le\". Number / amount / none / \"di\" + thing → \"ne\".",
        ],
        examples: [
          { es: "Le chiavi le ho io.", en: "I've got the keys." },
          { es: "Di chiavi ne ho tre.", en: "I've got three keys." },
          { es: "Il libro l'ho finito.", en: "I've finished the book." },
          { es: "Di libri ne ho finiti due.", en: "I've finished two books." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've finished the book.", answer: "Il libro l'ho finito.", altAnswers: ["Ho finito il libro.", "L'ho finito, il libro."], explanation: "Definite → \"lo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Books? I've finished two.", answer: "Libri? Ne ho finiti due.", explanation: "Number → \"ne\" + agreement." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The biscuits? I ate them all.", answer: "I biscotti? Li ho mangiati tutti.", explanation: "\"Tutti\" → \"li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Biscuits? I ate four.", answer: "Biscotti? Ne ho mangiati quattro.", explanation: "Number → \"ne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The soup? I'll heat it up.", answer: "La zuppa? La scaldo io.", altAnswers: ["La zuppa? La riscaldo io.", "La zuppa? La scaldo."], explanation: "Definite → \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Soup? I'd like a little.", answer: "Zuppa? Ne vorrei un po'.", explanation: "Amount → \"ne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The postcards? I wrote them yesterday.", answer: "Le cartoline? Le ho scritte ieri.", explanation: "Definite → \"le\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Postcards? I wrote three.", answer: "Cartoline? Ne ho scritte tre.", explanation: "Number → \"ne\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film? [I've seen it].", sentence: "Il film? ___.", answer: "L'ho visto", explanation: "Definite → \"lo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Films? [I've seen] lots.", sentence: "Film? ___ tanti.", answer: "Ne ho visti", explanation: "Amount → \"ne\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The flowers? [Take them] all! (to a friend)", sentence: "I fiori? ___ tutti!", answer: "Prendili", explanation: "\"Tutti\" → \"li\", attached." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Flowers? [Take] a few! (to a friend)", sentence: "Fiori? ___ qualcuno!", answer: "Prendine", explanation: "\"Ne\" attaches to a tu command too." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The news? [I don't know anything about it].", sentence: "La notizia? ___ niente.", answer: "Non ne so", explanation: "\"Sapere di\" → \"ne\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cheese? [Leave it] in the fridge.", sentence: "Il formaggio? ___ in frigo.", answer: "Lascialo", explanation: "Definite → \"lo\"." },
      { type: "multiple-choice", question: "\"Vuoi tutte queste mele?\" Which answer means no, only two?", options: ["No, ne voglio solo due.", "No, le voglio solo due.", "No, ne voglio solo tutte.", "No, voglio solo due ne."], correctIndex: 0, explanation: "Number → \"ne\"." },
      { type: "listen-choose", audio: "Le uova? Ne ho usate solo due.", question: "How many eggs did the speaker use?", options: ["only two", "all of them", "none", "twelve"], correctIndex: 0, explanation: "\"Ne ho usate solo due\"." },
      { type: "dictation", audio: "Li ho visti tutti, ne ho comprati due.", explanation: "Whole, then part." },
      { type: "speak", text: "I biscotti? Li ha mangiati tutti Luca! Io ne ho mangiato solo uno.", prompt: "Say it in Italian: The biscuits? Luca ate them all! I only ate one.", tip: "\"Tutti\": hold the double t.", explanation: "\"Li ... tutti\" vs \"ne ... uno\"." },
    ],
  },
  {
    slug: "a2-ne-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Che Ne Pensi?",
    summary: "Ask for and give opinions with che ne pensi?, che ne dici di ...?, ne parliamo and ne sono sicuro.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Opinions with ne",
        body: [
          "\"Che ne pensi?\" / \"Che ne pensa?\" ask for an opinion; \"che ne dici di\" + infinitive suggests. Answers: \"Mi piace\", \"Secondo me è ...\", \"Non ne sono sicuro\" (I'm not sure about it), \"Non ne so niente\".",
        ],
        examples: [
          { es: "Il nuovo ristorante? Che ne pensi?", en: "The new restaurant? What do you think?" },
          { es: "Secondo me è caro.", en: "In my opinion it's expensive." },
          { es: "Non ne sono sicura.", en: "I'm not sure about it." },
          { es: "Che ne dite di partire venerdì?", en: "How about leaving on Friday? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How about leaving on Friday? (to friends)", answer: "Che ne dite di partire venerdì?", explanation: "Voi: \"che ne dite di\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not sure about it.", answer: "Non ne sono sicuro.", altAnswers: ["Non ne sono sicura."], explanation: "\"Sicuro di\" → \"ne\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The new restaurant? What do you think? (to a friend)", answer: "Il nuovo ristorante? Che ne pensi?", altAnswers: ["Il nuovo ristorante? Cosa ne pensi?"], explanation: "\"Che ne pensi?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you think of my idea, professor?", answer: "Che ne pensa della mia idea, professore?", altAnswers: ["Cosa ne pensa della mia idea, professore?", "Professore, che ne pensa della mia idea?"], explanation: "Lei: \"che ne pensa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How about a coffee? (to a friend)", answer: "Che ne dici di un caffè?", altAnswers: ["Che ne pensi di un caffè?"], explanation: "\"Che ne dici di\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's talk about it tomorrow.", answer: "Ne parliamo domani.", altAnswers: ["Parliamone domani."], explanation: "\"Ne parliamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've heard a lot about it.", answer: "Ne ho sentito parlare molto.", altAnswers: ["Ne ho sentito parlare tanto.", "Ne ho sentito parlare spesso."], explanation: "No agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you think of it? (to friends)", answer: "Che ne pensate?", altAnswers: ["Cosa ne pensate?", "Che cosa ne pensate?"], explanation: "Voi: \"pensate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The match? [What did you think of it]? (to a friend)", sentence: "La partita? ___?", answer: "Che ne hai pensato", altAnswers: ["Cosa ne hai pensato", "Che te ne è sembrato"], explanation: "\"Ne\" in the past, no agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[How about] going to the cinema?", sentence: "___ di andare al cinema?", answer: "Che ne dici", altAnswers: ["Che ne pensi", "Cosa ne dici"], explanation: "\"Che ne dici di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Politics? [I never talk about it].", sentence: "La politica? ___ mai.", answer: "Non ne parlo", explanation: "\"Non ne parlo mai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm sure of it]: it's the right road.", sentence: "___ sicura: è la strada giusta.", answer: "Ne sono", explanation: "\"Ne sono sicura\"." },
      { type: "multiple-choice", question: "How do you ask a friend what she thinks of Naples?", options: ["Che ne pensi di Napoli?", "Che ci pensi di Napoli?", "Che pensi ne Napoli?", "Che la pensi di Napoli?"], correctIndex: 0, explanation: "Opinion: \"che ne pensi di\"; \"ci pensi\" means you think about it." },
      { type: "listen-choose", audio: "Che ne dici di partire venerdì?", question: "What is the speaker suggesting?", options: ["leaving on Friday", "staying until Friday", "talking on Friday", "arriving on Friday"], correctIndex: 0, explanation: "\"Partire\" = to leave." },
      { type: "dictation", audio: "Che ne pensi? Non ne sono sicuro.", explanation: "\"Ne\" for opinions and certainty." },
      { type: "speak", text: "Il nuovo museo? Ne ho sentito parlare bene. Che ne dici di andarci sabato?", prompt: "Say it in Italian: The new museum? I've heard good things about it. How about going on Saturday?", tip: "\"Andarci\": ci attached to the infinitive.", explanation: "\"Ne\" for about it, \"ci\" for the place." },
    ],
  },
];
