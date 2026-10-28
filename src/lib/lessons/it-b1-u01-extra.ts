// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u01-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 1 Extra Practice: Combined Pronouns, Part 1. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U01_EXTRA: Lesson[] = [
  {
    slug: "b1-combined-1-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Me Lo, Te La",
    summary: "Fresh sentences with me lo, te la, ce li and ve ne in the present.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Person, then thing",
        body: [
          "\"Me, te, ce, ve\" + \"lo, la, li, le, ne\", all before the verb. New words for this practice: \"il cavatappi\" (corkscrew), \"la ricevuta\" (receipt), \"gli appunti\" (notes), \"le istruzioni\" (instructions).",
        ],
        examples: [
          { es: "Il cavatappi? Me lo passi?", en: "The corkscrew? Will you pass it to me?" },
          { es: "La ricevuta? Te la mando per email.", en: "The receipt? I'll email it to you." },
          { es: "Gli appunti? Ce li presta Sofia.", en: "The notes? Sofia is lending them to us." },
          { es: "Le istruzioni? Ve le spiego io.", en: "The instructions? I'll explain them to you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The corkscrew? Will you pass it to me?", answer: "Il cavatappi? Me lo passi?", explanation: "\"Il cavatappi\" is masculine: \"me lo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The receipt? I'll email it to you.", answer: "La ricevuta? Te la mando per email.", altAnswers: ["La ricevuta? Te la mando via email.", "La ricevuta? Te la mando per mail.", "La ricevuta? Ve la mando per email.", "La ricevuta? Gliela mando per email."], explanation: "\"La ricevuta\" → \"te la\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The notes? Sofia is lending them to us.", answer: "Gli appunti? Ce li presta Sofia.", altAnswers: ["Gli appunti? Sofia ce li presta."], explanation: "\"Ce li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The instructions? I'll explain them to you. (to a group)", answer: "Le istruzioni? Ve le spiego io.", altAnswers: ["Le istruzioni? Ve le spiego."], explanation: "\"Ve le\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The map? Will you show it to me?", answer: "La cartina? Me la fai vedere?", altAnswers: ["La mappa? Me la fai vedere?", "La cartina? Me la mostri?", "La mappa? Me la mostri?"], explanation: "\"Fare vedere\" = to show." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The truth? I'll tell you tomorrow.", answer: "La verità? Te la dico domani.", explanation: "\"La verità\" → \"te la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Olives? I'll bring you some.", answer: "Olive? Te ne porto un po'.", altAnswers: ["Le olive? Te ne porto un po'.", "Delle olive? Te ne porto un po'.", "Olive? Te ne porto alcune."], explanation: "\"Ne\" for some." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dishes? We'll wash them for you. (to your parents)", answer: "I piatti? Ve li laviamo noi.", altAnswers: ["I piatti? Ve li laviamo."], explanation: "\"Ve li\" for two people." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not lending it to you. (the car)", answer: "Non te la presto.", altAnswers: ["La macchina non te la presto."], explanation: "\"Non\" before the cluster." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pens? Will you give me two?", answer: "Penne? Me ne dai due?", altAnswers: ["Delle penne? Me ne dai due?", "Le penne? Me ne dai due?"], explanation: "\"Ne\" + number; \"penne\" with nn." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Your email address? [Will you send it to me]?", sentence: "Il tuo indirizzo email? ___?", answer: "Me lo mandi", explanation: "\"Me lo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The lemons? [The neighbor brings them to us] from her garden.", sentence: "I limoni? ___ la vicina dal suo giardino.", answer: "Ce li porta", explanation: "\"Ce li\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Cake? [I'll leave you] a slice.", sentence: "Torta? ___ una fetta.", answer: "Te ne lascio", explanation: "\"Te ne\" + quantity." },
      { type: "word-order", prompt: "Put the words in order to say: Why won't you lend it to me?", words: ["Perché", "non", "me", "la", "presti?"], translation: "Why won't you lend it to me?", explanation: "\"Non\" + cluster + verb." },
      { type: "listen-choose", audio: "Ve le spiego io.", question: "Who is the explanation for?", options: ["you (plural)", "us", "me", "them"], correctIndex: 0, explanation: "\"Ve\" = to you all." },
      { type: "dictation", audio: "Il cavatappi? Me lo passi, per favore?", explanation: "\"Cavatappi\": one v, two p." },
      { type: "speak", text: "La ricevuta? Te la mando stasera per email.", prompt: "Say it in Italian: The receipt? I'll email it to you this evening.", tip: "te-la-MAN-do: stress on the verb.", explanation: "\"Te la\" for \"la ricevuta\"." },
    ],
  },
  {
    slug: "b1-combined-1-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Combined Pronouns in the Past",
    summary: "Fresh sentences with me l'ha, te le ho, ce ne hanno and the participle agreement.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Elide lo and la, agree with the thing",
        body: [
          "\"Me l'ha detto\", \"te l'ho mandata\", but \"te li ho\", \"ce le hanno\". The participle follows the direct pronoun or the thing counted by \"ne\", never \"me, te, ce, ve\".",
        ],
        examples: [
          { es: "La cartolina? Me l'ha spedita da Bari.", en: "The postcard? She sent it to me from Bari." },
          { es: "I biglietti? Ce li ha regalati il capo.", en: "The tickets? The boss gave them to us." },
          { es: "Le ricette? Te le ho scritte tutte.", en: "The recipes? I wrote them all down for you." },
          { es: "Cioccolatini? Ve ne ho lasciati tre.", en: "Chocolates? I left you three." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The postcard? She sent it to me from Bari.", answer: "La cartolina? Me l'ha spedita da Bari.", altAnswers: ["La cartolina? Me l'ha mandata da Bari."], explanation: "\"L'\" = \"la cartolina\": \"spedita\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chocolates? I left you three. (to a group)", answer: "Cioccolatini? Ve ne ho lasciati tre.", altAnswers: ["I cioccolatini? Ve ne ho lasciati tre."], explanation: "\"Ne\" + count: \"lasciati\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tickets? The boss gave them to us.", answer: "I biglietti? Ce li ha regalati il capo.", altAnswers: ["I biglietti? Ce li ha dati il capo.", "I biglietti? Il capo ce li ha regalati."], explanation: "\"Li\" stays whole; \"regalati\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The recipes? I wrote them all down for you.", answer: "Le ricette? Te le ho scritte tutte.", explanation: "\"Scritte\" agrees with \"le ricette\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The story? My grandfather told it to me.", answer: "La storia? Me l'ha raccontata mio nonno.", altAnswers: ["La storia? Mio nonno me l'ha raccontata."], explanation: "\"Raccontata\" agrees with \"la storia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The wine? They brought it to us from Tuscany.", answer: "Il vino? Ce l'hanno portato dalla Toscana.", explanation: "\"Il vino\" → \"portato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you already sent them to me? (the files: i file)", answer: "Me li hai già mandati?", explanation: "\"I file\" is masculine plural: \"mandati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who told you? (to a group)", answer: "Chi ve l'ha detto?", explanation: "\"Ve l'ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bottles? They gave us four.", answer: "Bottiglie? Ce ne hanno date quattro.", altAnswers: ["Le bottiglie? Ce ne hanno date quattro."], explanation: "\"Date\" agrees with the bottles." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The house keys? I gave them back to you yesterday.", answer: "Le chiavi di casa? Te le ho restituite ieri.", altAnswers: ["Le chiavi di casa? Te le ho ridate ieri."], explanation: "\"Te le ho\" + \"restituite\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The apartment? [My aunt left it to me].", sentence: "L'appartamento? ___ mia zia.", answer: "Me l'ha lasciato", explanation: "\"L'appartamento\" is masculine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shirt? [I ironed it for you].", sentence: "La camicia? ___.", answer: "Te l'ho stirata", explanation: "\"Stirata\" agrees with \"la camicia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Peaches? [The farmer gave us two].", sentence: "Pesche? ___ due il contadino.", answer: "Ce ne ha date", explanation: "\"Pesche\" is feminine plural." },
      { type: "word-order", prompt: "Put the words in order to say: The photos? I've already sent them to you.", words: ["Le", "foto?", "Te", "le", "ho", "già", "mandate."], translation: "The photos? I've already sent them to you.", explanation: "\"Già\" before the participle." },
      { type: "multiple-choice", question: "\"La notizia? Chi te l'ha ___?\"", options: ["data", "dato", "dati", "date"], correctIndex: 0, explanation: "\"L'\" = \"la notizia\": \"data\"." },
      { type: "dictation", audio: "Me l'ha raccontata ieri, te l'ho già detto.", explanation: "\"Raccontata\" (the story) vs \"detto\" (the fact)." },
      { type: "speak", text: "Le foto del matrimonio? Me le hanno mandate ieri sera.", prompt: "Say it in Italian: The wedding photos? They sent them to me last night.", tip: "Keep \"me le hanno\" light and quick.", explanation: "\"Mandate\" agrees with \"le foto\"." },
    ],
  },
  {
    slug: "b1-combined-1-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Me Lo Metto",
    summary: "Reflexive verbs with an object, replaced by a cluster: me lo metto, se le lava, ce la siamo goduta.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Reflexive + direct",
        body: [
          "\"Mi metto\", \"ti togli\", \"si lava\" + a thing → \"me lo metto\", \"te la togli\", \"se le lava\". In the past: \"essere\", with the participle agreeing with the thing: \"me la sono tolta\". \"Godersi\" (to enjoy) and \"prepararsi\" (to make something for yourself) work the same way.",
        ],
        examples: [
          { es: "Gli stivali? Me li metto per uscire.", en: "My boots? I'm putting them on to go out." },
          { es: "La vacanza? Ce la siamo goduta.", en: "The vacation? We really enjoyed it." },
          { es: "Il panino? Se l'è preparato da solo.", en: "The sandwich? He made it himself." },
          { es: "La cravatta? Te la togli?", en: "Your tie? Are you taking it off?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My boots? I'm putting them on to go out.", answer: "Gli stivali? Me li metto per uscire.", explanation: "\"Mi metto gli stivali\" → \"me li metto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The vacation? We really enjoyed it.", answer: "La vacanza? Ce la siamo goduta.", altAnswers: ["La vacanza? Ce la siamo proprio goduta."], explanation: "\"Godersi\" + \"essere\" + agreement with \"la vacanza\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sandwich? He made it himself.", answer: "Il panino? Se l'è preparato da solo.", altAnswers: ["Il panino? Se l'è fatto da solo."], explanation: "\"Se l'è\" + \"preparato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your tie? Are you taking it off?", answer: "La cravatta? Te la togli?", explanation: "\"Ti togli la cravatta\" → \"te la togli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her hair? She washes it every day.", answer: "I capelli? Se li lava ogni giorno.", altAnswers: ["I capelli? Se li lava tutti i giorni."], explanation: "\"I capelli\" is plural in Italian: \"se li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shoes? I took them off at the door.", answer: "Le scarpe? Me le sono tolte alla porta.", altAnswers: ["Le scarpe? Me le sono tolte all'ingresso."], explanation: "\"Tolte\" agrees with \"le scarpe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The concert? Did you enjoy it? (to a friend)", answer: "Il concerto? Te lo sei goduto?", explanation: "\"Goduto\" agrees with \"il concerto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys? They forgot them at home.", answer: "Le chiavi? Se le sono dimenticate a casa.", altAnswers: ["Le chiavi? Se le sono scordate a casa."], explanation: "\"Se le sono dimenticate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Gloves? I always put them on in winter.", answer: "I guanti? Me li metto sempre d'inverno.", altAnswers: ["I guanti? D'inverno me li metto sempre.", "I guanti? Me li metto sempre in inverno."], explanation: "\"Me li metto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The coffee? We made it ourselves.", answer: "Il caffè? Ce lo siamo fatto da soli.", altAnswers: ["Il caffè? Ce lo siamo preparato da soli.", "Il caffè? Ce lo siamo fatto da sole.", "Il caffè? Ce lo siamo preparato da sole."], explanation: "With a direct pronoun before \"essere\", the participle agrees with it: \"fatto\" for \"il caffè\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My glasses? [I put them on] only to read.", sentence: "Gli occhiali? ___ solo per leggere.", answer: "Me li metto", explanation: "\"Gli occhiali\" is plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The jacket? [Have you taken it off]? (to a friend)", sentence: "La giacca? ___?", answer: "Te la sei tolta", explanation: "\"Tolta\" agrees with \"la giacca\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Their hands? [They washed them].", sentence: "Le mani? ___.", answer: "Se le sono lavate", explanation: "\"Le mani\" is feminine plural." },
      { type: "word-order", prompt: "Put the words in order to say: The weekend? We really enjoyed it.", words: ["Il", "fine", "settimana?", "Ce", "lo", "siamo", "goduto."], translation: "The weekend? We really enjoyed it.", explanation: "\"Il fine settimana\" is masculine." },
      { type: "multiple-choice", question: "Giulia: \"Il cappotto? ___.\" (I put it on)", options: ["Me lo sono messo", "Me la sono messa", "Mi lo sono messo", "Me lo ho messo"], correctIndex: 0, explanation: "Agreement with \"il cappotto\", not with Giulia." },
      { type: "dictation", audio: "Le scarpe? Me le sono tolte all'ingresso.", explanation: "\"Ingresso\" = entrance, with ss." },
      { type: "speak", text: "La vacanza in Sardegna? Ce la siamo proprio goduta!", prompt: "Say it in Italian: The vacation in Sardinia? We really enjoyed it!", tip: "GO-du-ta: stress on the first syllable.", explanation: "\"Godersi\" in the past." },
    ],
  },
];
