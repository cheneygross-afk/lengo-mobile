// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u02-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 2 Extra Practice: Glielo. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md).
export const IT_B1_U02_EXTRA: Lesson[] = [
  {
    slug: "b1-glielo-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Glielo",
    summary: "Fresh sentences with glielo, gliela, glieli, gliele and gliene for him, her and them.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Him, her, them: glie-",
        body: [
          "\"Gli\", \"le\" and to them all become \"glie-\" before \"lo, la, li, le, ne\", in one word. In the past: \"gliel'ho\", but \"glieli ho\", \"gliele ho\". New words: \"il caricabatterie\" (charger), \"la ricetta\" (recipe), \"gli auguri\" (best wishes), \"le istruzioni\" (instructions).",
        ],
        examples: [
          { es: "Il caricabatterie? Glielo presto io.", en: "The charger? I'll lend it to him." },
          { es: "La ricetta? Gliela chiedo domani.", en: "The recipe? I'll ask her for it tomorrow." },
          { es: "Gli auguri? Glieli abbiamo fatti ieri.", en: "Birthday wishes? We sent them to her yesterday." },
          { es: "Le istruzioni? Gliele ho lasciate sul tavolo.", en: "The instructions? I left them for them on the table." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The charger? I'll lend it to him.", answer: "Il caricabatterie? Glielo presto io.", altAnswers: ["Il caricabatterie? Glielo presto."], explanation: "\"Glielo\": one word." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The recipe? I'll ask her for it tomorrow.", answer: "La ricetta? Gliela chiedo domani.", altAnswers: ["La ricetta? Domani gliela chiedo."], explanation: "\"Chiedere qualcosa a qualcuno\": \"gliela chiedo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The instructions? I left them for them on the table.", answer: "Le istruzioni? Gliele ho lasciate sul tavolo.", explanation: "\"Gliele\" doesn't elide; \"lasciate\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The joke? I'll tell it to him later.", answer: "La barzelletta? Gliela racconto dopo.", altAnswers: ["La barzelletta? Gliela racconto più tardi."], explanation: "\"Gliela\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The present? We gave it to her yesterday.", answer: "Il regalo? Gliel'abbiamo dato ieri.", altAnswers: ["Il regalo? Gliel'abbiamo fatto ieri."], explanation: "\"Gliel'abbiamo\" + \"dato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children want candy. Will you give them some?", answer: "I bambini vogliono le caramelle. Gliene dai un po'?", altAnswers: ["I bambini vogliono delle caramelle. Gliene dai un po'?", "I bambini vogliono le caramelle. Gliene dai qualcuna?"], explanation: "\"Gliene\" = some to them." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The résumé? I've already sent it to them.", answer: "Il curriculum? Gliel'ho già mandato.", altAnswers: ["Il CV? Gliel'ho già mandato.", "Il curriculum? Gliel'ho già inviato."], explanation: "\"Già\" before the participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Does Marco know? No, I haven't told him.", answer: "Marco lo sa? No, non gliel'ho detto.", altAnswers: ["Lo sa Marco? No, non gliel'ho detto."], explanation: "\"Non\" + \"gliel'ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The plates? She washed them for him.", answer: "I piatti? Glieli ha lavati lei.", altAnswers: ["I piatti? Glieli ha lavati."], explanation: "\"Glieli\" + \"lavati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Euros? We lent them a hundred.", answer: "Euro? Gliene abbiamo prestati cento.", altAnswers: ["Gli euro? Gliene abbiamo prestati cento."], explanation: "\"Prestati\" agrees with the euros." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The news? [I'll tell her] tonight.", sentence: "La notizia? ___ stasera.", answer: "Gliela do", altAnswers: ["Gliela dico"], explanation: "\"Dare una notizia\": \"gliela do\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The flowers? [Her husband bought them for her].", sentence: "I fiori? ___ suo marito.", answer: "Glieli ha comprati", altAnswers: ["Glieli ha regalati"], explanation: "\"Comprati\" agrees with the flowers." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The trip? [I talked to them about it] on Sunday.", sentence: "Il viaggio? ___ domenica.", answer: "Gliene ho parlato", explanation: "\"Parlare di\" → \"ne\"." },
      { type: "word-order", prompt: "Put the words in order to say: The keys? I left them for her with the neighbor.", words: ["Le", "chiavi?", "Gliele", "ho", "lasciate", "dalla", "vicina."], translation: "The keys? I left them for her with the neighbor.", explanation: "\"Dalla vicina\" = at the neighbor's." },
      { type: "listen-choose", audio: "Glieli ha lavati lei.", question: "What did you hear?", options: ["Glieli ha lavati lei.", "Gliel'ha lavato lei.", "Gliele ha lavate lei.", "Te li ha lavati lei."], correctIndex: 0, explanation: "\"Glieli\" + \"lavati\": masculine plural." },
      { type: "dictation", audio: "Gliel'abbiamo detto, ma non ci crede.", explanation: "\"Gliel'abbiamo\": one word." },
      { type: "speak", text: "Il curriculum? Gliel'ho già mandato, glielo rimando domani.", prompt: "Say it in Italian: The résumé? I've already sent it to them, I'll send it to them again tomorrow.", tip: "\"Rimandare\" here = to send again.", explanation: "Past \"gliel'ho\", present \"glielo\"." },
    ],
  },
  {
    slug: "b1-glielo-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Formal Glielo",
    summary: "Customer service sentences with glielo, gliela and gliene for Lei.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At your service",
        body: [
          "To a customer, \"Le\" + thing = \"glie-\": \"Glielo porto\", \"Gliela cambio\", \"Gliene do due\". New words: \"la taglia\" (size), \"lo sconto\" (discount), \"il rimborso\" (refund), \"il modulo\" (form).",
        ],
        examples: [
          { es: "La taglia non va bene? Gliela cambio subito.", en: "The size isn't right? I'll change it for you right away." },
          { es: "Lo sconto? Glielo faccio volentieri.", en: "A discount? I'm happy to give you one." },
          { es: "Il rimborso? Glielo facciamo entro una settimana.", en: "The refund? We'll process it for you within a week." },
          { es: "Il modulo? Gliel'ho già mandato per email.", en: "The form? I've already emailed it to you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The size isn't right? I'll change it for you right away. (polite)", answer: "La taglia non va bene? Gliela cambio subito.", explanation: "\"La taglia\" → \"gliela\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The form? I've already emailed it to you. (polite)", answer: "Il modulo? Gliel'ho già mandato per email.", altAnswers: ["Il modulo? Gliel'ho già inviato per email.", "Il modulo? Gliel'ho già mandato via email."], explanation: "\"Gliel'ho\" + \"mandato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A discount? I'm happy to give you one. (polite)", answer: "Lo sconto? Glielo faccio volentieri.", explanation: "\"Fare uno sconto a qualcuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The refund? We'll process it for you within a week.", answer: "Il rimborso? Glielo facciamo entro una settimana.", explanation: "\"Glielo\" to Lei." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your coat? I'll bring it to you right away, madam.", answer: "Il cappotto? Glielo porto subito, signora.", explanation: "\"Glielo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall I put it in a bag for you? (the bottle, polite)", answer: "Gliela metto in una busta?", altAnswers: ["Gliela metto in un sacchetto?"], explanation: "\"La bottiglia\" → \"gliela\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomatoes? Shall I give you a kilo? (polite)", answer: "Pomodori? Gliene do un chilo?", altAnswers: ["I pomodori? Gliene do un chilo?"], explanation: "\"Gliene\" + quantity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The documents? We sent them to you yesterday. (polite)", answer: "I documenti? Glieli abbiamo spediti ieri.", altAnswers: ["I documenti? Glieli abbiamo mandati ieri.", "I documenti? Glieli abbiamo inviati ieri."], explanation: "\"Glieli\" + \"spediti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The answer? I'll let you know tomorrow. (polite)", answer: "La risposta? Gliela do domani.", altAnswers: ["La risposta? Gliela faccio sapere domani."], explanation: "\"La risposta\" → \"gliela\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your shoes? We've repaired them for you.", answer: "Le scarpe? Gliele abbiamo riparate.", explanation: "\"Gliele\" + \"riparate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The table by the window? [I'll get it ready for you] at once.", sentence: "Il tavolo vicino alla finestra? ___ subito.", answer: "Glielo preparo", explanation: "\"Glielo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These earrings? [I can gift-wrap them for you].", sentence: "Questi orecchini? ___ incartare.", answer: "Glieli posso", explanation: "Cluster before the modal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The receipt? [I've already given it to you], sir.", sentence: "Lo scontrino? ___, signore.", answer: "Gliel'ho già dato", explanation: "\"Lo scontrino\" is masculine." },
      { type: "word-order", prompt: "Put the words in order to say: The refund? We'll process it for you within a week.", words: ["Il", "rimborso?", "Glielo", "facciamo", "entro", "una", "settimana."], translation: "The refund? We'll process it for you within a week.", explanation: "\"Entro\" = within." },
      { type: "listen-choose", audio: "La taglia non va bene? Gliela cambio subito.", question: "What will the assistant do?", options: ["change the size", "give a refund", "wrap the item", "order a new one"], correctIndex: 0, explanation: "\"Cambiare\" = to change, exchange." },
      { type: "dictation", audio: "Glielo faccio sapere entro venerdì.", explanation: "\"Glielo faccio sapere\" = I'll let you know." },
      { type: "speak", text: "Signora, le scarpe gliele abbiamo riparate. Gliele incarto?", prompt: "Say it in Italian: Madam, we've repaired your shoes. Shall I wrap them for you?", tip: "GLIE-le: a soft gli, then a clear e.", explanation: "\"Gliele\" past and present." },
    ],
  },
  {
    slug: "b1-glielo-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Mixed Clusters",
    summary: "All the combined pronouns together: me lo, te la, glielo, ce li, ve ne, se la.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Every cluster",
        body: [
          "Two words: \"me lo, te la, ce li, ve le, se ne\". One word: \"glielo, gliela, glieli, gliele, gliene\". Decide who receives, then what, then (in the past) elide and agree.",
        ],
        examples: [
          { es: "Me lo spieghi o glielo chiedo?", en: "Will you explain it to me, or shall I ask him?" },
          { es: "La torta? Ce l'ha portata lei, ve ne lascio un pezzo.", en: "The cake? She brought it for us, I'll leave you a piece." },
          { es: "La giacca? Se l'è dimenticata.", en: "The jacket? He forgot it." },
          { es: "Le foto? Te le mando, poi gliele mandi tu.", en: "The photos? I'll send them to you, then you send them to her." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you explain it to me, or shall I ask him?", answer: "Me lo spieghi o glielo chiedo?", altAnswers: ["Me lo spieghi tu o glielo chiedo?"], explanation: "\"Me lo\" (two words), \"glielo\" (one)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The photos? I'll send them to you, then you send them to her.", answer: "Le foto? Te le mando, poi gliele mandi tu.", explanation: "\"Te le\", then \"gliele\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The jacket? He forgot it.", answer: "La giacca? Se l'è dimenticata.", altAnswers: ["La giacca? L'ha dimenticata."], explanation: "\"Se l'è\" + \"dimenticata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The wine? Who gave it to you? (to a group)", answer: "Il vino? Chi ve l'ha regalato?", altAnswers: ["Il vino? Chi ve l'ha dato?"], explanation: "\"Ve l'ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The wine? Who gave it to them?", answer: "Il vino? Chi gliel'ha regalato?", altAnswers: ["Il vino? Chi gliel'ha dato?"], explanation: "\"Gliel'ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cherries? I'll give you some, and some to her too.", answer: "Ciliegie? Te ne do un po', e gliene do un po' anche a lei.", altAnswers: ["Ciliegie? Te ne do un po' e gliene do un po' anche a lei."], explanation: "\"Te ne\", \"gliene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tickets? They gave them to us.", answer: "I biglietti? Ce li hanno dati.", altAnswers: ["I biglietti? Ce li hanno regalati."], explanation: "\"Ce li\" + \"dati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tickets? They gave them to him.", answer: "I biglietti? Glieli hanno dati.", altAnswers: ["I biglietti? Glieli hanno regalati."], explanation: "\"Glieli\" + \"dati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your hands? Did you wash them? (to a child)", answer: "Le mani? Te le sei lavate?", explanation: "Reflexive cluster with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you tell me or did you tell her?", answer: "L'hai detto a me o a lei?", altAnswers: ["Lo hai detto a me o a lei?"], explanation: "Stressed pronouns for contrast." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cake? [She brought it for us].", sentence: "La torta? ___ lei.", answer: "Ce l'ha portata", explanation: "\"Ce l'ha\" + \"portata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cake? [I'll leave you all] a piece.", sentence: "La torta? ___ un pezzo.", answer: "Ve ne lascio", explanation: "\"Ve ne\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The truth? [I told her] yesterday.", sentence: "La verità? ___ ieri.", answer: "Gliel'ho detta", explanation: "\"Detta\" agrees with \"la verità\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'll lend it to you, but I'm not lending it to him.", words: ["Te", "lo", "presto,", "ma", "a", "lui", "non", "lo", "presto."], translation: "I'll lend it to you, but I'm not lending it to him.", explanation: "Stressed \"a lui\" at the front for contrast, then a single \"lo\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "ce lo dai", right: "you give it to us" }, { left: "glielo dai", right: "you give it to him" }, { left: "se lo mette", right: "he puts it on" }, { left: "ve ne do", right: "I give you all some" }, { left: "me la presti", right: "you lend it to me" }], explanation: "Person first, then thing." },
      { type: "dictation", audio: "Me l'ha data lei, gliel'ho restituita ieri.", explanation: "\"Data\", \"restituita\": the thing is feminine." },
      { type: "speak", text: "Il libro? Me l'ha prestato Sara. Te lo do, ma poi glielo restituisci tu.", prompt: "Say it in Italian: The book? Sara lent it to me. I'll give it to you, but then you give it back to her.", tip: "Three clusters: me l'ha, te lo, glielo.", explanation: "Each cluster names a different receiver." },
    ],
  },
];
