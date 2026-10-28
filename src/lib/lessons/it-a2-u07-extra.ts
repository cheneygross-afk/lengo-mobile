// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u07-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 7 Extra Practice: Direct Object Pronouns. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U07_EXTRA: Lesson[] = [
  {
    slug: "a2-direct-pronouns-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Present Tense",
    summary: "Fresh sentences replacing nouns with mi, ti, lo, la, ci, vi, li, le in the present.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Before the verb",
        body: [
          "Pronoun before the conjugated verb, \"non\" before the pronoun. New words: \"il quadro\" (painting), \"le piante\" (plants), \"innaffiare\" (to water), \"accompagnare\" (to take someone somewhere), \"salutare\" (to greet, say hello to).",
        ],
        examples: [
          { es: "Le piante? Le innaffio ogni sera.", en: "The plants? I water them every evening." },
          { es: "Ti accompagno alla stazione.", en: "I'll take you to the station." },
          { es: "Il quadro? Lo appendo in salotto.", en: "The painting? I'm hanging it in the living room." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The plants? I water them every evening.", answer: "Le piante? Le innaffio ogni sera.", altAnswers: ["Le piante? Le annaffio ogni sera.", "Le piante? Le innaffio tutte le sere."], explanation: "\"Le piante\" → \"le\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll take you to the station. (to a friend)", answer: "Ti accompagno alla stazione.", altAnswers: ["Ti accompagno in stazione.", "Ti porto alla stazione.", "Ti porto in stazione."], explanation: "\"Ti\" = you." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The painting? I'm hanging it in the living room.", answer: "Il quadro? Lo appendo in salotto.", altAnswers: ["Il quadro? Lo metto in salotto.", "Il quadro lo appendo in salotto."], explanation: "\"Il quadro\" → \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Our grandparents? We visit them every Sunday.", answer: "I nostri nonni? Li andiamo a trovare ogni domenica.", altAnswers: ["I nonni? Li andiamo a trovare ogni domenica.", "I nostri nonni? Andiamo a trovarli ogni domenica.", "I nostri nonni? Li visitiamo ogni domenica."], explanation: "\"Andare a trovare\" = to visit people." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you remember Chiara? I see her every day.", answer: "Ti ricordi di Chiara? La vedo ogni giorno.", altAnswers: ["Ti ricordi Chiara? La vedo ogni giorno.", "Ti ricordi di Chiara? La vedo tutti i giorni."], explanation: "\"La\" = her." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher? Everybody greets him.", answer: "Il professore? Lo salutano tutti.", altAnswers: ["Il professore? Tutti lo salutano.", "Il maestro? Lo salutano tutti."], explanation: "\"Lo\" before the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you waiting for us? (to friends)", answer: "Ci aspettate?", altAnswers: ["Voi ci aspettate?"], explanation: "\"Ci\" = us; \"aspettare\" needs no preposition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call you all tomorrow.", answer: "Vi chiamo domani.", altAnswers: ["Domani vi chiamo.", "Vi telefono domani."], explanation: "\"Vi\" = you all." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The olives? I don't eat them.", answer: "Le olive? Non le mangio.", explanation: "\"Non le mangio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The car? My father washes it on Saturdays.", answer: "La macchina? La lava mio padre il sabato.", altAnswers: ["La macchina? Mio padre la lava il sabato.", "La macchina la lava mio padre il sabato."], explanation: "\"La\" for \"la macchina\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children? [I take them] to school.", sentence: "I bambini? ___ a scuola.", answer: "Li porto", altAnswers: ["Li accompagno"], explanation: "\"Li\" = them (masculine)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Mrs Bianchi, [I'll accompany you] to the door.", sentence: "Signora Bianchi, ___ alla porta.", answer: "La accompagno", altAnswers: ["L'accompagno", "la accompagno"], explanation: "Formal \"La\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who [is helping you]? (to a friend)", sentence: "Chi ___?", answer: "ti aiuta", explanation: "\"Ti\" before the verb." },
      { type: "word-order", prompt: "Put the words in order to say: The flowers? I'm giving them to my mother.", words: ["I", "fiori?", "Li", "porto", "a", "mia", "madre."], translation: "The flowers? I'm giving them to my mother.", explanation: "\"Li\" for \"i fiori\"." },
      { type: "multiple-choice", question: "\"La pasta? ___ cucino io stasera.\"", options: ["La", "Lo", "Le", "Li"], correctIndex: 0, explanation: "\"La pasta\" is feminine singular." },
      { type: "dictation", audio: "Le piante le innaffio ogni sera.", explanation: "\"Le\" for \"le piante\"." },
      { type: "speak", text: "Ti aspetto alle otto e ti accompagno a casa.", prompt: "Say it in Italian: I'll wait for you at eight and take you home. (to a friend)", tip: "Ti before each verb.", explanation: "\"Ti aspetto\", \"ti accompagno\"." },
    ],
  },
  {
    slug: "a2-direct-pronouns-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Past Tense Agreement",
    summary: "Fresh sentences with l'ho preso, l'ho presa, li ho presi, le ho prese.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Watch the last vowel",
        body: [
          "\"Lo\" / \"la\" → \"l'\" before the auxiliary; the participle shows gender and number: \"-o, -a, -i, -e\". New words: \"il regalo\" (present), \"incartare\" (to wrap), \"la bolletta\" (bill, for gas or electricity), \"il pacco\" (parcel), \"ritirare\" (to collect).",
        ],
        examples: [
          { es: "Il regalo? L'ho incartato ieri sera.", en: "The present? I wrapped it last night." },
          { es: "La bolletta? L'ho pagata online.", en: "The bill? I paid it online." },
          { es: "I pacchi? Li ho ritirati in posta.", en: "The parcels? I collected them at the post office." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bill? I paid it online.", answer: "La bolletta? L'ho pagata online.", altAnswers: ["La bolletta? L'ho pagata su internet."], explanation: "\"Pagata\" for \"la bolletta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The present? [I wrapped it] last night.", sentence: "Il regalo? ___ ieri sera.", answer: "L'ho incartato", explanation: "\"Il regalo\" → \"-o\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The parcels? I collected them at the post office.", answer: "I pacchi? Li ho ritirati in posta.", altAnswers: ["I pacchi? Li ho ritirati alla posta.", "I pacchi? Li ho ritirati all'ufficio postale."], explanation: "\"Ritirati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The soup? My mother made it.", answer: "La zuppa? L'ha fatta mia madre.", altAnswers: ["La minestra? L'ha fatta mia madre.", "La zuppa? L'ha preparata mia madre.", "La zuppa? L'ha fatta mia mamma."], explanation: "\"Fatta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The windows? We cleaned them yesterday.", answer: "Le finestre? Le abbiamo pulite ieri.", explanation: "\"Pulite\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys? I gave them to Paolo.", answer: "Le chiavi? Le ho date a Paolo.", explanation: "\"Dato\" → \"date\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The match? We watched it at the bar.", answer: "La partita? L'abbiamo vista al bar.", altAnswers: ["La partita? L'abbiamo guardata al bar."], explanation: "\"La partita\" → \"vista\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your cousins? I met them at the wedding. (male cousins)", answer: "I tuoi cugini? Li ho conosciuti al matrimonio.", explanation: "\"Conosciuti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did your boss call you? (to a friend, a woman)", answer: "Ti ha chiamata il capo?", altAnswers: ["Ti ha chiamato il capo?", "Il capo ti ha chiamata?", "Il capo ti ha chiamato?"], explanation: "Optional agreement with \"ti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sandwich? I've already eaten it.", answer: "Il panino? L'ho già mangiato.", explanation: "\"Mangiato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The songs? [He wrote them] in Naples.", sentence: "Le canzoni? ___ a Napoli.", answer: "Le ha scritte", explanation: "\"Scritte\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The chair? [We moved it] into the kitchen.", sentence: "La sedia? ___ in cucina.", answer: "L'abbiamo portata", altAnswers: ["L'abbiamo spostata", "L'abbiamo messa"], explanation: "\"La sedia\" → \"-a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The exams? [I passed them] all.", sentence: "Gli esami? ___ tutti.", answer: "Li ho passati", altAnswers: ["Li ho superati"], explanation: "\"Li\" + \"-i\"." },
      { type: "word-order", prompt: "Put the words in order to say: The flowers? I bought them for you.", words: ["I", "fiori?", "Li", "ho", "comprati", "per", "te."], translation: "The flowers? I bought them for you.", explanation: "\"Per te\": stressed form after a preposition." },
      { type: "multiple-choice", question: "\"La bici? L'ho ___ in garage.\"", options: ["lasciata", "lasciato", "lasciati", "lasciate"], correctIndex: 0, explanation: "\"La bici\" is feminine." },
      { type: "listen-choose", audio: "Le ho prese al mercato.", question: "What did the speaker buy?", options: ["le pesche", "il melone", "i limoni", "la frutta"], correctIndex: 0, explanation: "\"Le\" + \"prese\": feminine plural." },
      { type: "speak", text: "La bolletta l'ho pagata, e i pacchi li ho ritirati.", prompt: "Say it in Italian: I've paid the bill, and I've collected the parcels.", tip: "pagata / ritirati.", explanation: "Two agreements." },
    ],
  },
  {
    slug: "a2-direct-pronouns-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Infinitives and Ecco",
    summary: "Fresh sentences with pronouns before modals or attached to infinitives, and eccolo, eccola, eccomi.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two positions and ecco",
        body: [
          "\"La devo chiamare\" = \"Devo chiamarla\". The infinitive drops its \"-e\" and the pronoun joins it. With \"ecco\" the pronoun always attaches: \"eccolo\", \"eccola\", \"eccoli\", \"eccole\", \"eccomi\", \"eccoti\", \"eccoci\".",
        ],
        examples: [
          { es: "Possiamo vederli domani.", en: "We can see them tomorrow." },
          { es: "Lo vuoi assaggiare?", en: "Do you want to taste it?" },
          { es: "Eccoti, finalmente!", en: "There you are, at last!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want to taste it? (the wine, to a friend)", answer: "Lo vuoi assaggiare?", altAnswers: ["Vuoi assaggiarlo?"], explanation: "Either position." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There you are, at last! (to a friend)", answer: "Eccoti, finalmente!", altAnswers: ["Finalmente, eccoti!"], explanation: "\"Ecco\" + \"ti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can see them tomorrow.", answer: "Possiamo vederli domani.", altAnswers: ["Li possiamo vedere domani.", "Domani possiamo vederli.", "Possiamo vederle domani.", "Le possiamo vedere domani."], explanation: "\"Vedere\" + \"li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I must finish it today. (the project)", answer: "Devo finirlo oggi.", altAnswers: ["Lo devo finire oggi.", "Oggi devo finirlo."], explanation: "\"Il progetto\" → \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you call me later? (to a friend)", answer: "Puoi chiamarmi più tardi?", altAnswers: ["Mi puoi chiamare più tardi?", "Puoi chiamarmi dopo?", "Mi puoi chiamare dopo?"], explanation: "\"Chiamarmi\" or \"mi puoi chiamare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't want to see her.", answer: "Non voglio vederla.", altAnswers: ["Non la voglio vedere."], explanation: "\"Non\" first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bags? Here they are!", answer: "Le borse? Eccole!", explanation: "\"Eccole\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children? Here they are!", answer: "I bambini? Eccoli!", explanation: "\"Eccoli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to wake them up.", answer: "Vado a svegliarli.", altAnswers: ["Li vado a svegliare.", "Vado a svegliarle.", "Le vado a svegliare."], explanation: "\"Svegliare\" + \"li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where's Giulia? Here she is!", answer: "Dov'è Giulia? Eccola!", altAnswers: ["Dove è Giulia? Eccola!"], explanation: "\"Eccola\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film? I want [to see it] again.", sentence: "Il film? Voglio ___ di nuovo.", answer: "vederlo", altAnswers: ["rivederlo"], explanation: "Attached to the infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The keys? I have to find [them].", sentence: "Le chiavi? ___ devo trovare.", answer: "Le", explanation: "Pronoun before the modal: \"le devo trovare\" (or \"devo trovarle\")." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Mum, [here I am]!", sentence: "Mamma, ___!", answer: "eccomi", explanation: "\"Ecco\" + \"mi\"." },
      { type: "word-order", prompt: "Put the words in order to say: The dog? I have to take it out.", words: ["Il", "cane?", "Devo", "portarlo", "fuori."], translation: "The dog? I have to take it out.", explanation: "\"Portare fuori\" + \"lo\"." },
      { type: "multiple-choice", question: "Which is NOT correct?", options: ["Posso lo aiutare.", "Posso aiutarlo.", "Lo posso aiutare.", "Non posso aiutarlo."], correctIndex: 0, explanation: "Never between the modal and the infinitive." },
      { type: "dictation", audio: "Lo vuoi assaggiare? Eccolo!", explanation: "\"Lo vuoi\", \"eccolo\"." },
      { type: "speak", text: "La torta? Voglio assaggiarla! Eccola!", prompt: "Say it in Italian: The cake? I want to taste it! Here it is!", tip: "La attaches to assaggiare and to ecco.", explanation: "\"Assaggiarla\", \"eccola\"." },
    ],
  },
];
