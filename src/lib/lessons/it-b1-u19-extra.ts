// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u19-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 19 Extra Practice: Fare and Lasciare + Infinitive. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U19_EXTRA: Lesson[] = [
  {
    slug: "b1-fare-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Fare + Infinitive",
    summary: "Fresh sentences with fare + infinitive for having things done and making people do things.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Have it done, make them do it",
        body: [
          "\"Fare\" + infinitive: someone else does the action. With one object the person is direct (\"lo faccio aspettare\"); with two, indirect (\"gli faccio firmare il contratto\"). \"Da\" names who does a job: \"dal falegname\".",
        ],
        examples: [
          { es: "Ho fatto costruire una libreria dal falegname.", en: "I had a bookcase built by the carpenter." },
          { es: "Gli faccio firmare il contratto domani.", en: "I'll get him to sign the contract tomorrow." },
          { es: "Quella canzone mi fa venire in mente l'estate.", en: "That song reminds me of summer." },
          { es: "Facciamo entrare un po' d'aria.", en: "Let's let some air in." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had a bookcase built by the carpenter.", answer: "Ho fatto costruire una libreria dal falegname.", altAnswers: ["Ho fatto fare una libreria dal falegname."], explanation: "\"Da\" + the person who does it." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll get him to sign the contract tomorrow.", answer: "Gli faccio firmare il contratto domani.", altAnswers: ["Domani gli faccio firmare il contratto.", "Gli farò firmare il contratto domani."], explanation: "Two objects: \"gli\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That song reminds me of summer.", answer: "Quella canzone mi fa venire in mente l'estate.", altAnswers: ["Quella canzone mi ricorda l'estate."], explanation: "\"Far venire in mente\" = to bring to mind." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's let some air in.", answer: "Facciamo entrare un po' d'aria.", altAnswers: ["Facciamo entrare un po' di aria."], explanation: "\"Far entrare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had the house painted.", answer: "Abbiamo fatto dipingere la casa.", altAnswers: ["Abbiamo fatto imbiancare la casa.", "Abbiamo fatto tinteggiare la casa."], explanation: "\"Fare\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The onions make me cry.", answer: "Le cipolle mi fanno piangere.", explanation: "\"Mi\" before \"fare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have the bill sent to the company.", answer: "Faccio mandare la fattura all'azienda.", altAnswers: ["Farò mandare la fattura all'azienda.", "Faccio inviare la fattura all'azienda.", "Faccio mandare il conto all'azienda."], explanation: "\"Far mandare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Show me your new phone! (to a friend)", answer: "Fammi vedere il tuo telefono nuovo!", altAnswers: ["Fammi vedere il tuo nuovo telefono!", "Fammi vedere il tuo cellulare nuovo!"], explanation: "\"Fammi vedere\" = show me." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The guide [had us visit] the cellar.", sentence: "La guida ci ha ___ la cantina.", answer: "fatto visitare", altAnswers: ["fatto vedere"], explanation: "\"Far visitare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [got the children to wash] their hands.", sentence: "___ le mani ai bambini.", answer: "Ho fatto lavare", explanation: "Two objects: \"ai bambini\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We need to [have the tires changed].", sentence: "Dobbiamo ___.", answer: "far cambiare le gomme", altAnswers: ["fare cambiare le gomme", "far cambiare gli pneumatici", "far cambiare le ruote"], explanation: "\"Far\" after a modal." },
      { type: "word-order", prompt: "Put the words in order to say: Don't make me laugh!", words: ["Non", "farmi", "ridere!"], translation: "Don't make me laugh!", explanation: "Negative imperative + \"farmi\"." },
      { type: "multiple-choice", question: "\"Ho fatto lavare la macchina.\" Who washed it?", options: ["Someone else", "The speaker", "Nobody", "The speaker's car wash at home"], correctIndex: 0, explanation: "\"Fare\" + infinitive." },
      { type: "listen-choose", audio: "Gli ho fatto firmare il contratto ieri.", question: "What happened yesterday?", options: ["He signed the contract.", "I signed the contract.", "We wrote the contract.", "He refused to sign."], correctIndex: 0, explanation: "\"Gli\": he did the signing." },
      { type: "dictation", audio: "Abbiamo fatto costruire una piscina in giardino.", explanation: "\"Fatto costruire\"." },
      { type: "speak", text: "Ho fatto dipingere la cucina di giallo e mi fa venire il buonumore.", prompt: "Say it in Italian: I had the kitchen painted yellow and it puts me in a good mood.", tip: "\"Buonumore\": one word, buo-nu-MO-re.", explanation: "Two uses of \"fare\" + infinitive." },
    ],
  },
  {
    slug: "b1-fare-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Farsi and Lasciare",
    summary: "Fresh sentences with farsi + infinitive (mi faccio aiutare, si è fatto accompagnare) and lasciare + infinitive (lasciami stare, lascia correre).",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "For yourself, or letting it happen",
        body: [
          "\"Farsi\" + infinitive: done to or for you, with \"essere\" in the past. \"Lasciare\" + infinitive: let it happen. Set phrases: \"lasciami stare\" (leave me alone), \"lascia correre\" (let it go), \"farsi sentire\" (keep in touch).",
        ],
        examples: [
          { es: "Si è fatto accompagnare dalla moglie.", en: "He got his wife to go with him." },
          { es: "Lasciami stare!", en: "Leave me alone!" },
          { es: "Lascia correre, non è importante.", en: "Let it go, it's not important." },
          { es: "Mi sono fatta consigliare dal farmacista.", en: "I asked the pharmacist for advice." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leave me alone! (to a friend)", answer: "Lasciami stare!", altAnswers: ["Lasciami in pace!"], explanation: "\"Lasciare stare\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He got his wife to go with him.", answer: "Si è fatto accompagnare dalla moglie.", altAnswers: ["Si è fatto accompagnare da sua moglie."], explanation: "\"Farsi accompagnare da\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let it go, it's not important. (to a friend)", answer: "Lascia correre, non è importante.", altAnswers: ["Lascia perdere, non è importante.", "Lascia stare, non è importante."], explanation: "\"Lascia correre\" = let it go." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked the pharmacist for advice. (a woman speaking)", answer: "Mi sono fatta consigliare dal farmacista.", altAnswers: ["Mi sono fatta consigliare dalla farmacista.", "Ho chiesto consiglio al farmacista."], explanation: "\"Farsi consigliare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why don't you get someone to explain it? (to a friend)", answer: "Perché non te lo fai spiegare?", altAnswers: ["Perché non te la fai spiegare?", "Perché non ti fai spiegare?"], explanation: "\"Farsi spiegare\" with \"te lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They don't let dogs in.", answer: "Non lasciano entrare i cani.", altAnswers: ["Non fanno entrare i cani."], explanation: "\"Lasciare entrare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She let her hair grow.", answer: "Si è lasciata crescere i capelli.", altAnswers: ["Ha lasciato crescere i capelli.", "Si è fatta crescere i capelli."], explanation: "\"Lasciarsi crescere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've grown a beard. (a man speaking)", answer: "Mi sono fatto crescere la barba.", altAnswers: ["Mi sono lasciato crescere la barba."], explanation: "\"Farsi crescere la barba\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Keep in touch] when you get there! (to a friend)", sentence: "___ quando arrivi!", answer: "Fatti sentire", explanation: "\"Farsi sentire\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He didn't [let himself be] intimidated.", sentence: "Non si è ___ intimidire.", answer: "lasciato", altAnswers: ["fatto"], explanation: "\"Lasciarsi\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [got a friend to lend us] the tent.", sentence: "___ la tenda da un amico.", answer: "Ci siamo fatti prestare", altAnswers: ["Ci siamo fatte prestare"], explanation: "\"Farsi prestare\"." },
      { type: "word-order", prompt: "Put the words in order to say: Come on, let me help you!", words: ["Dai,", "lasciati", "aiutare!"], translation: "Come on, let me help you!", explanation: "\"Lasciati aiutare\" = let yourself be helped." },
      { type: "multiple-choice", question: "What does \"Non si fa vedere da settimane\" mean?", options: ["He hasn't shown up for weeks.", "He hasn't been able to see for weeks.", "He hasn't seen anyone for weeks.", "Nobody has seen him in his car."], correctIndex: 0, explanation: "\"Farsi vedere\" = to show up." },
      { type: "listen-choose", audio: "Lascia correre, non vale la pena litigare.", question: "What is the speaker's advice?", options: ["Let it go, it's not worth arguing.", "Run, you'll be late.", "Argue, it's worth it.", "Leave now."], correctIndex: 0, explanation: "\"Lascia correre\"." },
      { type: "dictation", audio: "Mi sono fatto prestare la macchina da un amico.", explanation: "\"Farsi prestare\"." },
      { type: "speak", text: "Lasciati aiutare! Mi faccio prestare il furgone da mio cugino.", prompt: "Say it in Italian: Let me help you! I'll borrow the van from my cousin.", tip: "\"Furgone\": fur-GO-ne.", explanation: "\"Lasciarsi\" and \"farsi prestare\"." },
    ],
  },
  {
    slug: "b1-fare-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: With Pronouns",
    summary: "Fresh sentences with pronouns and fare: lo faccio riparare, gliel'ho fatto sapere, fammelo vedere, le ho fatte stampare.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Pronouns before fare, agreement after",
        body: [
          "Pronouns before conjugated \"fare\", attached to \"far(e)\" or to a \"tu\" imperative. \"Fatto\" agrees with \"lo\", \"la\", \"li\", \"le\": \"Le foto? Le ho fatte stampare\".",
        ],
        examples: [
          { es: "Le foto? Le ho fatte stampare.", en: "The photos? I had them printed." },
          { es: "Gliel'ho fatto sapere ieri.", en: "I let him know yesterday." },
          { es: "Il menù? Ve lo faccio portare subito.", en: "The menu? I'll have it brought to you right away." },
          { es: "Fammelo assaggiare!", en: "Let me taste it!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The photos? I had them printed.", answer: "Le foto? Le ho fatte stampare.", explanation: "\"Fatte\" agrees with \"le\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me taste it! (to a friend)", answer: "Fammelo assaggiare!", altAnswers: ["Fammela assaggiare!"], explanation: "\"Fa'\" + \"me\" + \"lo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I let him know yesterday.", answer: "Gliel'ho fatto sapere ieri.", altAnswers: ["Gli ho fatto sapere ieri.", "Ieri gliel'ho fatto sapere."], explanation: "\"Glielo\" elided before \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The menu? I'll have it brought to you right away. (to a group)", answer: "Il menù? Ve lo faccio portare subito.", altAnswers: ["Il menù? Ve lo faccio portare immediatamente."], explanation: "\"Vi\" + \"lo\" = \"ve lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The watch? I'm having it repaired.", answer: "L'orologio? Lo faccio riparare.", altAnswers: ["L'orologio? Lo sto facendo riparare.", "L'orologio? Lo faccio aggiustare."], explanation: "\"Lo\" before \"faccio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys? I had them copied.", answer: "Le chiavi? Le ho fatte copiare.", altAnswers: ["Le chiavi? Le ho fatte duplicare.", "Le chiavi? Ne ho fatto fare una copia."], explanation: "\"Fatte\" agrees with \"le\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children? I let them watch TV.", answer: "I bambini? Li ho lasciati guardare la TV.", altAnswers: ["I bambini? Li lascio guardare la TV.", "I bambini? Li ho lasciati guardare la televisione.", "I bambini? Gli ho lasciato guardare la TV."], explanation: "\"Lasciare\" + pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have it sent to you. (formal, the catalog)", answer: "Glielo faccio mandare.", altAnswers: ["Glielo faccio spedire.", "Glielo farò mandare."], explanation: "\"Le\" (formal) + \"lo\" = \"glielo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sofa? [We had it delivered] yesterday.", sentence: "Il divano? ___ ieri.", answer: "L'abbiamo fatto consegnare", altAnswers: ["L'abbiamo fatto portare", "Lo abbiamo fatto consegnare"], explanation: "\"Fatto\" agrees with \"lo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cake? [Let me see it]! (to a friend)", sentence: "La torta? ___!", answer: "Fammela vedere", explanation: "\"Fa'\" + \"me\" + \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The car? [I need to have it washed].", sentence: "La macchina? ___.", answer: "Devo farla lavare", altAnswers: ["La devo far lavare", "La devo fare lavare", "Devo farla pulire"], explanation: "Pronoun on \"far\" or before the modal." },
      { type: "word-order", prompt: "Put the words in order to say: The documents? I had them signed.", words: ["I", "documenti?", "Li", "ho", "fatti", "firmare."], translation: "The documents? I had them signed.", explanation: "\"Fatti\" agrees with \"li\"." },
      { type: "multiple-choice", question: "Le camicie? Which is correct?", options: ["Le ho fatte stirare.", "Le ho fatto stirare.", "Ho fatto stirarle.", "Ho fattole stirare."], correctIndex: 0, explanation: "\"Fatte\" agrees with \"le\"." },
      { type: "listen-choose", audio: "Il regalo? Me lo sono fatto incartare in negozio.", question: "What happened to the present?", options: ["The shop wrapped it.", "The speaker wrapped it.", "The shop delivered it.", "The speaker returned it."], correctIndex: 0, explanation: "\"Farsi incartare\" = have it gift-wrapped." },
      { type: "dictation", audio: "Le foto del matrimonio? Le ho fatte stampare ieri.", explanation: "\"Fatte\" agrees with \"le\"." },
      { type: "speak", text: "Il vestito? Me lo sono fatto fare su misura. Te lo faccio vedere domani.", prompt: "Say it in Italian: The suit? I had it made to measure. I'll show it to you tomorrow. (a man speaking)", tip: "\"Su misura\": su-mi-SU-ra.", explanation: "\"Me lo sono fatto\" and \"te lo faccio\"." },
    ],
  },
];
