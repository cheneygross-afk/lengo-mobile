// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u15-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 15 Extra Practice: Ci. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md).
export const IT_A2_U15_EXTRA: Lesson[] = [
  {
    slug: "a2-ci-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Ci for Places",
    summary: "Fresh sentences with ci for places, in the present, the past and with infinitives.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "There, again",
        body: [
          "\"Ci\" replaces \"a / in / da\" + place: before the verb (\"ci vado\"), before the auxiliary (\"ci sono andato\"), attached to an infinitive or tu command (\"andarci\", \"vacci\").",
        ],
        examples: [
          { es: "In biblioteca? Ci studio ogni pomeriggio.", en: "The library? I study there every afternoon." },
          { es: "Dal parrucchiere ci vado sabato.", en: "I'm going to the hairdresser's on Saturday." },
          { es: "Ci siete mai stati?", en: "Have you ever been there? (plural)" },
          { es: "Non ci posso venire.", en: "I can't come." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The library? I study there every afternoon.", answer: "In biblioteca? Ci studio ogni pomeriggio.", altAnswers: ["La biblioteca? Ci studio ogni pomeriggio.", "In biblioteca? Ci studio tutti i pomeriggi."], explanation: "\"Ci\" = there." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't come.", answer: "Non ci posso venire.", altAnswers: ["Non posso venirci.", "Non posso venire."], explanation: "\"Ci\" before the modal or attached." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever been there? (to friends)", answer: "Ci siete mai stati?", altAnswers: ["Ci siete mai state?"], explanation: "\"Ci\" before \"siete\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the hairdresser's on Saturday. (I go there on Saturday)", answer: "Dal parrucchiere ci vado sabato.", altAnswers: ["Ci vado sabato dal parrucchiere.", "Vado dal parrucchiere sabato."], explanation: "Topic first, then \"ci vado\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Milan? I lived there for two years.", answer: "Milano? Ci ho vissuto per due anni.", altAnswers: ["Milano? Ci ho abitato per due anni.", "Milano? Ci ho vissuto due anni."], explanation: "\"Ci\" before \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We go there by bus.", answer: "Ci andiamo in autobus.", explanation: "\"Ci andiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She stayed there for a week.", answer: "Ci è rimasta una settimana.", altAnswers: ["C'è rimasta una settimana.", "Ci è stata una settimana.", "C'è stata una settimana.", "Ci è rimasta per una settimana."], explanation: "\"Ci\" + \"è\": \"ci è\" or \"c'è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to go there in spring.", answer: "Vorrei andarci in primavera.", altAnswers: ["Ci vorrei andare in primavera.", "Mi piacerebbe andarci in primavera."], explanation: "\"Ci\" with \"vorrei\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming to the gym? No, I'm not going today.", answer: "Vieni in palestra? No, oggi non ci vado.", altAnswers: ["Vieni in palestra? No, non ci vado oggi."], explanation: "\"Non ci vado\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sardinia is beautiful: [go there] in June! (to a friend)", sentence: "La Sardegna è bellissima: ___ a giugno!", answer: "vacci", explanation: "\"Va'\" + \"ci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The concert? [We went there] together.", sentence: "Il concerto? ___ insieme.", answer: "Ci siamo andati", altAnswers: ["Ci siamo andate"], explanation: "\"Ci siamo andati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The post office? [I have to go there] tomorrow.", sentence: "La posta? ___ domani.", answer: "Ci devo andare", altAnswers: ["Devo andarci"], explanation: "Two positions." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Go there] by taxi, madam.", sentence: "___ in taxi, signora.", answer: "Ci vada", explanation: "Lei command: \"ci\" before." },
      { type: "multiple-choice", question: "\"Sei mai stato a Matera?\" Which answer is right?", options: ["Sì, ci sono stato l'anno scorso.", "Sì, sono ci stato l'anno scorso.", "Sì, ci ho stato l'anno scorso.", "Sì, ne sono stato l'anno scorso."], correctIndex: 0, explanation: "\"Ci\" + \"essere\"." },
      { type: "listen-choose", audio: "Non ci posso venire, mi dispiace.", question: "What does the speaker say?", options: ["I can't come, sorry.", "I can't go back, sorry.", "I don't want to come.", "I can come, no problem."], correctIndex: 0, explanation: "\"Non ci posso venire\"." },
      { type: "dictation", audio: "Ci siamo andati in treno e ci torniamo a luglio.", explanation: "Past and present with \"ci\"." },
      { type: "speak", text: "Firenze? Ci sono stato tre volte e ci voglio tornare!", prompt: "Say it in Italian: Florence? I've been there three times and I want to go back!", tip: "\"Ci voglio tornare\": ci before the modal.", explanation: "\"Ci\" in the past and with a modal." },
    ],
  },
  {
    slug: "a2-ci-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Ci Vuole and Metterci",
    summary: "Fresh sentences about time and needs with ci vuole, ci vogliono and metterci.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "General or personal?",
        body: [
          "General need or time: \"ci vuole\" + singular, \"ci vogliono\" + plural; past with \"essere\" (\"c'è voluto\", \"ci sono volute\"). A person's time: \"metterci\", conjugated; past with \"avere\" (\"ci ho messo\").",
        ],
        examples: [
          { es: "Per il tiramisù ci vuole il mascarpone.", en: "You need mascarpone to make tiramisù." },
          { es: "Ci vogliono due ore di volo.", en: "It's a two-hour flight." },
          { es: "Quanto ci avete messo?", en: "How long did it take you? (plural)" },
          { es: "Ci è voluto molto tempo.", en: "It took a long time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need mascarpone for tiramisù.", answer: "Per il tiramisù ci vuole il mascarpone.", altAnswers: ["Ci vuole il mascarpone per il tiramisù."], explanation: "Singular → \"ci vuole\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long did it take you? (to friends)", answer: "Quanto ci avete messo?", altAnswers: ["Quanto tempo ci avete messo?"], explanation: "\"Metterci\" + \"avere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a two-hour flight.", answer: "Ci vogliono due ore di volo.", explanation: "Plural → \"vogliono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It took a long time.", answer: "Ci è voluto molto tempo.", altAnswers: ["C'è voluto molto tempo.", "Ci è voluto tanto tempo.", "C'è voluto tanto tempo."], explanation: "\"Essere\" + \"voluto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes me five minutes to get dressed.", answer: "Ci metto cinque minuti a vestirmi.", altAnswers: ["Ci metto cinque minuti per vestirmi."], explanation: "\"Metterci\" + \"a\" / \"per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need two passport photos.", answer: "Ci vogliono due fototessere.", altAnswers: ["Ci vogliono due foto tessera.", "Servono due fototessere."], explanation: "Plural → \"vogliono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It took us three days.", answer: "Ci abbiamo messo tre giorni.", explanation: "\"Ci abbiamo messo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes a bit of luck.", answer: "Ci vuole un po' di fortuna.", explanation: "Singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The post takes a week.", answer: "La posta ci mette una settimana.", explanation: "The post as a subject: \"ci mette\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It took] two weeks.", sentence: "___ due settimane.", answer: "Ci sono volute", explanation: "Plural feminine: \"volute\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It takes you] ten minutes, no more. (to a friend)", sentence: "___ dieci minuti, non di più.", answer: "Ci metti", explanation: "Personal \"tu\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You need] a lot of practice.", sentence: "___ tanta pratica.", answer: "Ci vuole", explanation: "Singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Why [does it take them] so long?", sentence: "Perché ___ così tanto?", answer: "ci mettono", explanation: "Personal \"loro\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It took] half an hour.", sentence: "___ mezz'ora.", answer: "C'è voluta", altAnswers: ["Ci è voluta"], explanation: "Feminine singular: \"voluta\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ci vogliono sei uova.", "Ci vuole sei uova.", "Ci metto sei uova.", "Ci vogliamo sei uova."], correctIndex: 0, explanation: "Plural thing → \"vogliono\"." },
      { type: "listen-choose", audio: "Quanto ci avete messo da Roma?", question: "What is being asked?", options: ["How long did it take you from Rome? (plural)", "How long does it take from Rome?", "When did you leave Rome?", "How much did you pay in Rome?"], correctIndex: 0, explanation: "\"Ci avete messo\" = it took you." },
      { type: "dictation", audio: "Ci sono volute due ore, ma ce l'abbiamo fatta.", explanation: "\"Volute\" agrees; \"farcela\" in the past." },
      { type: "speak", text: "Per fare il pane ci vogliono tre ore, ma io ci metto di più!", prompt: "Say it in Italian: It takes three hours to make bread, but it takes me longer!", tip: "Stress the contrast with \"io\".", explanation: "General vs personal." },
    ],
  },
  {
    slug: "a2-ci-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Ce L'Ho",
    summary: "Fresh questions and answers with ce l'ho, ce li ho, ce le ho and ce la faccio.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Have you got it?",
        body: [
          "\"Ce l'ho, ce l'hai, ce l'ha, ce l'abbiamo, ce l'avete, ce l'hanno\" for singular things; \"ce li ho\" / \"ce le ho\" for plurals. \"Farcela\": \"ce la faccio\", \"ce l'ho fatta\".",
        ],
        examples: [
          { es: "Hai il resto? Sì, ce l'ho.", en: "Have you got change? Yes, I have." },
          { es: "Avete i biglietti? Sì, ce li abbiamo.", en: "Have you got the tickets? Yes, we have." },
          { es: "La patente? Non ce l'ha.", en: "A driving licence? He hasn't got one." },
          { es: "Ce l'ho fatta!", en: "I made it!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got the tickets? Yes, we have. (to friends)", answer: "Avete i biglietti? Sì, ce li abbiamo.", explanation: "Plural: \"ce li abbiamo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I made it!", answer: "Ce l'ho fatta!", explanation: "\"Farcela\" in the past." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got change? Yes, I have. (to a friend)", answer: "Hai il resto? Sì, ce l'ho.", altAnswers: ["Hai da cambiare? Sì, ce l'ho.", "Ce l'hai il resto? Sì, ce l'ho."], explanation: "\"Ce l'ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A driving licence? He hasn't got one.", answer: "La patente? Non ce l'ha.", explanation: "\"Non ce l'ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got the photos? (to a friend)", answer: "Ce le hai le foto?", altAnswers: ["Hai le foto?"], explanation: "Plural \"le foto\" → \"ce le hai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shoes? I've got them in my bag.", answer: "Le scarpe? Ce le ho nella borsa.", altAnswers: ["Le scarpe? Ce le ho in borsa."], explanation: "Feminine plural: \"ce le ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We haven't got it.", answer: "Non ce l'abbiamo.", explanation: "\"Non ce l'abbiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you make it? (to a friend)", answer: "Ce la fai?", explanation: "\"Farcela\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They haven't got the documents.", answer: "Non ce li hanno i documenti.", altAnswers: ["I documenti non ce li hanno.", "Non hanno i documenti."], explanation: "\"Ce li hanno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The receipt? [Have you got it]? (to a friend)", sentence: "Lo scontrino? ___?", answer: "Ce l'hai", explanation: "\"Ce l'hai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The car keys? [Marco has them].", sentence: "Le chiavi della macchina? ___.", answer: "Ce le ha Marco", explanation: "\"Ce le ha\" + subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I can't manage] alone.", sentence: "___ da solo.", answer: "Non ce la faccio", altAnswers: ["Non ci riesco"], explanation: "\"Non ce la faccio\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The umbrella? [We've got it], don't worry.", sentence: "L'ombrello? ___, non preoccuparti.", answer: "Ce l'abbiamo", explanation: "\"Ce l'abbiamo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you make it]? (to friends)", sentence: "___?", answer: "Ce l'avete fatta", explanation: "\"Farcela\" + voi." },
      { type: "multiple-choice", question: "\"Hai i biglietti del concerto?\" Which is the natural no?", options: ["No, non ce li ho.", "No, non li ho ci.", "No, non ce l'ho li.", "No, non ne ce ho."], correctIndex: 0, explanation: "\"Non ce li ho\"." },
      { type: "listen-choose", audio: "Non ce l'ho, ce l'ha la mamma.", question: "Who has it?", options: ["Mum", "the speaker", "nobody", "Dad"], correctIndex: 0, explanation: "\"Ce l'ha la mamma\"." },
      { type: "dictation", audio: "Ce l'hai fatta? Sì, ce l'ho fatta!", explanation: "\"Farcela\" in the past." },
      { type: "speak", text: "Il passaporto ce l'ho, i biglietti ce li ha Giulia. Ce la facciamo!", prompt: "Say it in Italian: I've got the passport, Giulia's got the tickets. We can make it!", tip: "Run \"ce l'ho\" together.", explanation: "\"Ce l'ho\", \"ce li ha\", \"ce la facciamo\"." },
    ],
  },
];
