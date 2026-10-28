// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u03-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 3 Extra Practice: Pronouns with Infinitives, Modals and
// Commands. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B1_U03_EXTRA: Lesson[] = [
  {
    slug: "b1-pronoun-position-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Modals and Infinitives",
    summary: "Fresh sentences with pronouns on infinitives and with volere, potere, dovere and sapere.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Attach or put in front",
        body: [
          "Infinitive after a preposition or expression: attached (\"per vederti\", \"è bello rivederla\"). With a modal: in front or attached (\"ti posso aiutare / posso aiutarti\"), never in the middle.",
        ],
        examples: [
          { es: "È bello rivederti!", en: "It's lovely to see you again!" },
          { es: "Ti posso aiutare? / Posso aiutarti?", en: "Can I help you?" },
          { es: "Sono passato per salutarvi.", en: "I dropped by to say hello to you all." },
          { es: "Non lo so spiegare. / Non so spiegarlo.", en: "I don't know how to explain it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's lovely to see you again! (to a friend)", answer: "È bello rivederti!", explanation: "\"Rivedere\" + \"ti\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I help you? (to a friend)", answer: "Posso aiutarti?", altAnswers: ["Ti posso aiutare?"], explanation: "Either position." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I dropped by to say hello to you all.", answer: "Sono passato per salutarvi.", altAnswers: ["Sono passata per salutarvi.", "Sono passato a salutarvi.", "Sono passata a salutarvi."], explanation: "\"Salutare\" + \"vi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know how to explain it.", answer: "Non so spiegarlo.", altAnswers: ["Non lo so spiegare."], explanation: "\"Sapere\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have to tell them today.", answer: "Dobbiamo dirglielo oggi.", altAnswers: ["Glielo dobbiamo dire oggi."], explanation: "\"Glielo\" before \"dobbiamo\" or attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you send it to me? (the link, to a friend)", answer: "Puoi mandarmelo?", altAnswers: ["Me lo puoi mandare?", "Me lo mandi?"], explanation: "\"Il link\" → \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She left without saying goodbye to us.", answer: "È partita senza salutarci.", altAnswers: ["Se n'è andata senza salutarci.", "È andata via senza salutarci."], explanation: "\"Senza\" + infinitive + \"ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to buy them. (the shoes)", answer: "Vorrei comprarle.", altAnswers: ["Le vorrei comprare."], explanation: "\"Vorrei\" is a modal too." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not easy to find it. (the street: la via)", answer: "Non è facile trovarla.", explanation: "\"Trovare\" + \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You don't have to give it back to me.", answer: "Non devi restituirmelo.", altAnswers: ["Non me lo devi restituire.", "Non devi ridarmelo.", "Non me lo devi ridare."], explanation: "\"Non\" first; the block in front or attached." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm happy [to help you]. (polite)", sentence: "Sono felice di ___.", answer: "aiutarLa", altAnswers: ["aiutarla"], explanation: "Formal \"La\" attached to the infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We can't go there] on Sunday.", sentence: "___ domenica.", answer: "Non possiamo andarci", altAnswers: ["Non ci possiamo andare"], explanation: "\"Ci\" with a modal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I called her [to thank her].", sentence: "L'ho chiamata per ___.", answer: "ringraziarla", explanation: "\"Ringraziare\" + \"la\"." },
      { type: "word-order", prompt: "Put the words in order to say: I want to talk to you about it tomorrow.", words: ["Voglio", "parlartene", "domani."], translation: "I want to talk to you about it tomorrow.", altOrders: [["Domani", "voglio", "parlartene."]], explanation: "\"Parlare\" + \"te\" + \"ne\" = \"parlartene\"." },
      { type: "listen-choose", audio: "Non lo so spiegare.", question: "What does it mean?", options: ["I don't know how to explain it.", "I can't explain it to him.", "He doesn't know how to explain it.", "I don't want to explain it."], correctIndex: 0, explanation: "\"So\" = I know (how to)." },
      { type: "dictation", audio: "Puoi mandarmelo stasera? Devo leggerlo domani.", explanation: "\"Mandarmelo\", \"leggerlo\": attached." },
      { type: "speak", text: "È bello rivederti! Posso offrirti un caffè?", prompt: "Say it in Italian: It's lovely to see you again! Can I buy you a coffee?", tip: "ri-ve-DER-ti, of-FRIR-ti.", explanation: "Two infinitives with \"ti\"." },
    ],
  },
  {
    slug: "b1-pronoun-position-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Commands with Pronouns",
    summary: "Fresh tu, noi, voi and Lei commands with pronouns and clusters.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Attached, doubled, or in front",
        body: [
          "Tu, noi, voi: attached (\"aiutami\", \"aiutiamoli\", \"aiutatemi\"). Short forms double: \"dammi, dimmi, fammi, stammi, vacci\", except with \"gli\" (\"digli\"). Lei: in front (\"mi aiuti\"). Negative tu: \"non\" + infinitive, pronoun either side.",
        ],
        examples: [
          { es: "Aiutami a portare le valigie.", en: "Help me carry the suitcases." },
          { es: "Aiutiamoli, sono in difficoltà.", en: "Let's help them, they're struggling." },
          { es: "Mi aiuti, per cortesia.", en: "Help me, please. (polite)" },
          { es: "Vacci tu, io sono stanca.", en: "You go, I'm tired." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Help me carry the suitcases. (to a friend)", answer: "Aiutami a portare le valigie.", explanation: "Tu command + \"mi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Help me, please. (polite)", answer: "Mi aiuti, per favore.", altAnswers: ["Mi aiuti, per cortesia.", "Per favore, mi aiuti."], explanation: "Lei: \"mi\" in front." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's help them, they're struggling.", answer: "Aiutiamoli, sono in difficoltà.", explanation: "Noi + \"li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You go, I'm tired. (there)", answer: "Vacci tu, io sono stanca.", altAnswers: ["Vacci tu, io sono stanco."], explanation: "\"Va'\" + \"ci\" = \"vacci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take care! (to a friend)", answer: "Stammi bene!", explanation: "\"Sta'\" + \"mi\": a warm goodbye." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Give it to her! (the pen, to a friend)", answer: "Dagliela!", altAnswers: ["Dalle la penna!"], explanation: "\"Da'\" + \"gliela\": no doubling with \"gli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Send it to us by tomorrow. (the file, to colleagues)", answer: "Mandatecelo entro domani.", altAnswers: ["Inviatecelo entro domani."], explanation: "Voi + \"ce lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't worry! (to a friend)", answer: "Non preoccuparti!", altAnswers: ["Non ti preoccupare!"], explanation: "Negative tu with a reflexive: either side." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't worry, madam.", answer: "Non si preoccupi, signora.", explanation: "Lei: \"si\" in front." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's tell her tonight.", answer: "Diciamoglielo stasera.", altAnswers: ["Diciamolo a lei stasera."], explanation: "Noi + \"glielo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The window? [Close it], please! (to a friend)", sentence: "La finestra? ___, per favore!", answer: "Chiudila", explanation: "Tu + \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The window? [Close it], please. (polite)", sentence: "La finestra? ___, per favore.", answer: "La chiuda", explanation: "Lei: in front." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do me] a favor! (to a friend)", sentence: "___ un favore!", answer: "Fammi", explanation: "\"Fa'\" + \"mi\"." },
      { type: "word-order", prompt: "Put the words in order to say: Sit down and tell me everything. (to a friend)", words: ["Siediti", "e", "raccontami", "tutto."], translation: "Sit down and tell me everything.", explanation: "Two tu commands with attached pronouns." },
      { type: "listen-choose", audio: "Si accomodi e mi dica tutto.", question: "Who is the speaker talking to?", options: ["one person, formally", "a friend", "a group", "a child"], correctIndex: 0, explanation: "\"Si accomodi\", \"mi dica\": Lei commands." },
      { type: "dictation", audio: "Dammi le chiavi e dimmi dove vai.", explanation: "\"Dammi\", \"dimmi\": double m." },
      { type: "speak", text: "Non preoccuparti, chiamami quando arrivi e dimmi com'è andata.", prompt: "Say it in Italian: Don't worry, call me when you arrive and tell me how it went.", tip: "CHIA-ma-mi, DIM-mi.", explanation: "Three tu forms with pronouns." },
    ],
  },
  {
    slug: "b1-pronoun-position-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: All Positions",
    summary: "Mixed practice: before, attached, or either, across verbs, infinitives, gerunds and commands.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Decide in one second",
        body: [
          "Conjugated verb or Lei command: before. Infinitive, gerund, tu / noi / voi command: attached. Modal, \"stare\" + gerund, negative tu: your choice.",
        ],
        examples: [
          { es: "La vedo spesso.", en: "I see her often." },
          { es: "Vedendola, l'ho riconosciuta subito.", en: "When I saw her, I recognized her immediately." },
          { es: "La sto aspettando.", en: "I'm waiting for her." },
          { es: "Aspettala!", en: "Wait for her!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm waiting for her.", answer: "La sto aspettando.", altAnswers: ["Sto aspettandola.", "La aspetto.", "L'aspetto."], explanation: "Before \"sto\" or attached." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wait for her! (to a friend)", answer: "Aspettala!", explanation: "Tu command: attached." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I saw her, I recognized her immediately.", answer: "Vedendola, l'ho riconosciuta subito.", altAnswers: ["Quando l'ho vista, l'ho riconosciuta subito."], explanation: "Gerund + \"la\"; agreement in \"riconosciuta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to invite you to dinner. (polite)", answer: "Vorrei invitarLa a cena.", altAnswers: ["Vorrei invitarla a cena.", "La vorrei invitare a cena."], explanation: "Formal \"La\" with a modal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your cousins? Invite them! (to a friend)", answer: "I tuoi cugini? Invitali!", explanation: "Tu + \"li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm thinking about it, I'll let you know.", answer: "Ci sto pensando, ti faccio sapere.", altAnswers: ["Ci penso, ti faccio sapere.", "Ci sto pensando, te lo faccio sapere."], explanation: "\"Ci\" before \"sto\"; \"ti faccio sapere\" = I'll let you know." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't forget it! (the passport, to a friend)", answer: "Non dimenticarlo!", altAnswers: ["Non lo dimenticare!", "Non dimenticartelo!", "Non te lo dimenticare!"], explanation: "Negative tu: either side." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought them for you. (the tickets)", answer: "Te li ho comprati.", altAnswers: ["Te li ho comprati io."], explanation: "Before the auxiliary, with agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you for inviting us.", answer: "Grazie per averci invitato.", altAnswers: ["Grazie di averci invitato.", "Grazie per averci invitati.", "Grazie per averci invitate."], explanation: "Past infinitive: \"aver\" + \"ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Explain it to me again, please. (polite)", answer: "Me lo spieghi di nuovo, per favore.", altAnswers: ["Me lo spieghi ancora, per favore.", "Per favore, me lo spieghi di nuovo."], explanation: "Lei: in front." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cake? [Let's eat it] now!", sentence: "La torta? ___ adesso!", answer: "Mangiamola", explanation: "Noi + \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The message? [I'm writing it to him] now.", sentence: "Il messaggio? ___ adesso.", answer: "Glielo sto scrivendo", altAnswers: ["Sto scrivendoglielo"], explanation: "Block before \"sto\" or attached." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The keys? [I had to look for them] for an hour.", sentence: "Le chiavi? ___ per un'ora.", answer: "Ho dovuto cercarle", altAnswers: ["Le ho dovute cercare"], explanation: "Attached: no agreement; in front: \"dovute\"." },
      { type: "word-order", prompt: "Put the words in order to say: Can you lend it to me? (polite)", words: ["Me", "lo", "può", "prestare?"], translation: "Can you lend it to me?", explanation: "Block before the modal; \"Può prestarmelo?\" is just as correct." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["Fammelo sapere.", "Me lo fa sapere?", "Fa me lo sapere.", "Lo sto facendo.", "Sto lo facendo.", "Per vederti."], correctIndexes: [0, 1, 3, 5], explanation: "Never between the verb and the infinitive or gerund." },
      { type: "dictation", audio: "Vedendolo, ho capito che dovevo dirglielo.", explanation: "\"Vedendolo\", \"dirglielo\": attached." },
      { type: "speak", text: "Il passaporto? Non dimenticarlo! Mettilo in borsa adesso.", prompt: "Say it in Italian: Your passport? Don't forget it! Put it in your bag now.", tip: "MET-ti-lo: stress on the verb.", explanation: "Negative tu and a tu command." },
    ],
  },
];
