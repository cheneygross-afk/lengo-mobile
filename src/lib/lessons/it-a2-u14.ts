// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u14.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 14: The Conditional. Condizionale presente forms and
// irregular stems, polite requests, advice, wishes, and the -emmo / -emo
// contrast with the future. Conventions: docs/italian-course/authoring.md.
export const IT_A2_U14: Lesson[] = [
  {
    slug: "a2-conditional-forms",
    level: "IT-A2",
    number: 1,
    title: "The Conditional: Forms",
    summary: "Build the condizionale presente from the future stem: parlerei, prenderei, partirei.",
    duration: "15 min",
    sections: [
      {
        heading: "Future stem + new endings",
        body: [
          "The conditional is English would: I would speak, she would leave. Good news: it uses exactly the same stem as the future you learned in Unit 9. Take \"parler-\" (from \"parlerò\") and add \"-ei, -esti, -ebbe, -emmo, -este, -ebbero\": \"parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero\".",
          "As in the future, -are verbs change their a to e: \"parlare\" → \"parler-\", \"lavorare\" → \"lavorer-\". -ere and -ire verbs keep their vowel: \"prenderei\", \"partirei\". -isc- verbs lose the -isc-: \"finirei\", \"preferirei\".",
        ],
        examples: [
          { es: "Parlerei con il direttore.", en: "I would speak to the manager." },
          { es: "Prenderesti un caffè?", en: "Would you have a coffee?" },
          { es: "Luca partirebbe domani, ma non può.", en: "Luca would leave tomorrow, but he can't." },
          { es: "Preferiremmo un tavolo fuori.", en: "We'd prefer a table outside." },
          { es: "Lavorereste anche il sabato?", en: "Would you work on Saturdays too? (plural)" },
          { es: "Non capirebbero.", en: "They wouldn't understand." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd prefer a table outside.", answer: "Preferiremmo un tavolo fuori.", altAnswers: ["Noi preferiremmo un tavolo fuori.", "Preferiremmo un tavolo all'aperto."], explanation: "-isc- verbs lose -isc-: \"preferir-\" + \"-emmo\", double m." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you have] a coffee? (to a friend)", sentence: "___ un caffè?", answer: "Prenderesti", altAnswers: ["Tu prenderesti"], explanation: "\"Prender-\" + \"-esti\"." },
        ],
      },
      {
        heading: "Spelling verbs keep their sound",
        body: [
          "Verbs in -care and -gare add an h, exactly as in the future: \"cercherei\", \"pagherei\", \"giocherei\". Verbs in -ciare and -giare drop the i: \"mangerei\", \"comincerei\", \"viaggerei\". If you can write the future, you can write the conditional.",
          "The stress always falls on the ending's e: par-le-REI, man-ge-REB-be, pa-ghe-REM-mo. Say it with confidence and the word sounds Italian.",
        ],
        examples: [
          { es: "Cercherei un lavoro a Milano.", en: "I'd look for a job in Milan." },
          { es: "Pagheresti tu?", en: "Would you pay?" },
          { es: "Mangerebbe sempre la pizza.", en: "He'd always eat pizza." },
          { es: "Viaggeremmo di più con più soldi.", en: "We'd travel more with more money." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd look for a job in Milan.", answer: "Cercherei un lavoro a Milano.", altAnswers: ["Io cercherei un lavoro a Milano.", "Cercherei lavoro a Milano."], explanation: "h after hard c: \"cercherei\"." },
          { type: "multiple-choice", question: "Which spelling is right for we'd start?", options: ["cominceremmo", "comincieremmo", "comincheremmo", "cominceremo"], correctIndex: 0, explanation: "-ciare drops the i; the conditional has \"-emmo\". \"Cominceremo\" is the future." },
        ],
      },
      {
        heading: "What would means",
        body: [
          "Use the conditional for what would happen in other circumstances (\"Con più tempo leggerei di più\", with more time I'd read more), for polite requests (\"Vorrei un caffè\") and for advice (\"Dovresti riposare\"). Lessons 3 to 5 take each in turn.",
          "Careful with English would for past habits (when I was a child I would play outside): Italian uses the imperfetto there, \"da bambino giocavo fuori\", never the conditional.",
        ],
        examples: [
          { es: "Con più tempo leggerei di più.", en: "With more time I'd read more." },
          { es: "Da bambino giocavo sempre fuori.", en: "As a child I would always play outside." },
          { es: "Al tuo posto non comprerei quella macchina.", en: "If I were you I wouldn't buy that car." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With more time I'd read more.", answer: "Con più tempo leggerei di più.", altAnswers: ["Con più tempo io leggerei di più."], explanation: "\"Legger-\" + \"-ei\"." },
          { type: "multiple-choice", question: "How do you say As a child I would play outside every day?", options: ["Da bambino giocavo fuori ogni giorno.", "Da bambino giocherei fuori ogni giorno.", "Da bambino ho giocato fuori ogni giorno.", "Da bambino giocherò fuori ogni giorno."], correctIndex: 0, explanation: "Would for a past habit = imperfetto." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I would speak to the manager.", answer: "Parlerei con il direttore.", altAnswers: ["Io parlerei con il direttore.", "Parlerei col direttore."], explanation: "\"Parler-\" + \"-ei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They wouldn't understand.", answer: "Non capirebbero.", altAnswers: ["Loro non capirebbero."], explanation: "\"Capir-\" + \"-ebbero\"; no -isc-." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd travel more with more money.", answer: "Viaggeremmo di più con più soldi.", altAnswers: ["Con più soldi viaggeremmo di più."], explanation: "-giare drops the i: \"viagger-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you pay by card? (to a friend)", answer: "Pagheresti con la carta?", altAnswers: ["Tu pagheresti con la carta?"], explanation: "h after hard g: \"pagheresti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you work on Saturdays too? (to a group)", answer: "Lavorereste anche il sabato?", altAnswers: ["Voi lavorereste anche il sabato?"], explanation: "\"Lavorer-\" + \"-este\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She'd leave tomorrow.", answer: "Partirebbe domani.", altAnswers: ["Lei partirebbe domani.", "Domani partirebbe."], explanation: "\"Partir-\" + \"-ebbe\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Giulia [would eat] pizza every day.", sentence: "Giulia ___ la pizza ogni giorno.", answer: "mangerebbe", explanation: "\"Manger-\" + \"-ebbe\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I were you I [wouldn't buy] that car.", sentence: "Al tuo posto ___ quella macchina.", answer: "non comprerei", explanation: "\"Non\" + \"comprerei\"." },
      { type: "word-order", prompt: "Put the words in order to say: We'd prefer a table outside.", words: ["Preferiremmo", "un", "tavolo", "fuori."], translation: "We'd prefer a table outside.", explanation: "\"-emmo\" with double m." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "parlerei", right: "I'd speak" }, { left: "parleresti", right: "you'd speak" }, { left: "parlerebbe", right: "he / she would speak" }, { left: "parleremmo", right: "we'd speak" }, { left: "parlerebbero", right: "they'd speak" }], explanation: "One stem, six endings." },
      { type: "dictation", audio: "Con più tempo leggerei di più.", explanation: "\"Leggerei\": stem \"legger-\"." },
      { type: "speak", text: "Con più soldi viaggerei e cercherei una casa al mare.", prompt: "Say it in Italian: With more money I'd travel and look for a house by the sea.", tip: "viag-ge-REI, cer-che-REI: stress on the ending.", explanation: "Two conditionals with spelling changes." },
    ],
  },
  {
    slug: "a2-conditional-irregular",
    level: "IT-A2",
    number: 2,
    title: "The Conditional: Irregular Verbs",
    summary: "Use the irregular conditional stems: sarei, avrei, andrei, verrei, farei, starei, potrei, dovrei, vorrei, saprei, vedrei, berrei.",
    duration: "15 min",
    sections: [
      {
        heading: "Short stems",
        body: [
          "Every verb with an irregular future has the same irregular conditional. Many just lose a vowel: \"andare\" → \"andrei\", \"potere\" → \"potrei\", \"dovere\" → \"dovrei\", \"sapere\" → \"saprei\", \"vedere\" → \"vedrei\", \"vivere\" → \"vivrei\", \"avere\" → \"avrei\".",
          "These are among the most useful words in Italian: \"potrei\" (I could), \"dovrei\" (I should), \"saprei\" (I'd know). \"Non saprei\" is the polite way to say I'm not sure.",
        ],
        examples: [
          { es: "Andrei volentieri al mare.", en: "I'd happily go to the seaside." },
          { es: "Potresti aiutarmi?", en: "Could you help me?" },
          { es: "Dovrei studiare di più.", en: "I should study more." },
          { es: "Non saprei, forse sì.", en: "I'm not sure, maybe." },
          { es: "Avremmo bisogno di una mano.", en: "We'd need a hand." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I should study more.", answer: "Dovrei studiare di più.", altAnswers: ["Io dovrei studiare di più."], explanation: "\"Dovere\" → \"dovr-\" + \"-ei\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you] help me? (to a friend)", sentence: "___ aiutarmi?", answer: "Potresti", altAnswers: ["Mi potresti"], explanation: "\"Potere\" → \"potr-\" + \"-esti\"." },
        ],
      },
      {
        heading: "Double r",
        body: [
          "A second group doubles the r: \"volere\" → \"vorrei\", \"venire\" → \"verrei\", \"bere\" → \"berrei\", \"rimanere\" → \"rimarrei\", \"tenere\" → \"terrei\". You know \"vorrei\" from A1 as a chunk; now you can use it in every person: \"vorresti\", \"vorrebbe\", \"vorremmo\".",
          "Pronounce the double r with a real trill, held longer: vor-REI. A single r makes it sound like a typo.",
        ],
        examples: [
          { es: "Vorremmo prenotare un tavolo.", en: "We'd like to book a table." },
          { es: "Verresti con me alla festa?", en: "Would you come with me to the party?" },
          { es: "Berrei volentieri un bicchiere di vino.", en: "I'd gladly drink a glass of wine." },
          { es: "Rimarrebbe a cena, signora?", en: "Would you stay for dinner, madam?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd like to book a table.", answer: "Vorremmo prenotare un tavolo.", altAnswers: ["Noi vorremmo prenotare un tavolo."], explanation: "\"Vorr-\" + \"-emmo\": two double consonants." },
          { type: "listen-choose", audio: "Verresti con me alla festa?", question: "What did you hear?", options: ["Verresti con me alla festa?", "Vorresti con me alla festa?", "Verrai con me alla festa?", "Vieni con me alla festa?"], correctIndex: 0, explanation: "\"Verresti\" = would you come (from \"venire\")." },
        ],
      },
      {
        heading: "Sarei, farei, starei, darei",
        body: [
          "\"Essere\" has its own stem: \"sarei, saresti, sarebbe, saremmo, sareste, sarebbero\". \"Fare\", \"stare\" and \"dare\" keep their a: \"farei\", \"starei\", \"darei\" (not \"ferei\").",
          "\"Sarebbe\" is everywhere: \"Sarebbe perfetto\" (that would be perfect), \"Sarebbe meglio partire presto\" (it would be better to leave early).",
        ],
        examples: [
          { es: "Sarebbe perfetto!", en: "That would be perfect!" },
          { es: "Che cosa faresti al mio posto?", en: "What would you do in my place?" },
          { es: "Starei a casa stasera.", en: "I'd stay at home tonight." },
          { es: "Gli darei un'altra possibilità.", en: "I'd give him another chance." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What would you do in my place? (to a friend)", answer: "Che cosa faresti al mio posto?", altAnswers: ["Cosa faresti al mio posto?", "Che faresti al mio posto?", "Tu cosa faresti al mio posto?"], explanation: "\"Fare\" keeps the a: \"faresti\"." },
          { type: "multiple-choice", question: "How do you say that would be perfect?", options: ["Sarebbe perfetto!", "Sarà perfetto!", "Era perfetto!", "Essere perfetto!"], correctIndex: 0, explanation: "\"Sarebbe\" = would be; \"sarà\" = will be." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd happily go to the seaside.", answer: "Andrei volentieri al mare.", altAnswers: ["Io andrei volentieri al mare."], explanation: "\"Andare\" → \"andr-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not sure, maybe.", answer: "Non saprei, forse sì.", altAnswers: ["Non saprei, forse."], explanation: "\"Non saprei\" = I wouldn't know: a soft I'm not sure." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you come with me to the party? (to a friend)", answer: "Verresti con me alla festa?", altAnswers: ["Tu verresti con me alla festa?"], explanation: "\"Venire\" → \"verr-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That would be perfect!", answer: "Sarebbe perfetto!", explanation: "\"Essere\" → \"sar-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd stay at home tonight.", answer: "Starei a casa stasera.", altAnswers: ["Stasera starei a casa.", "Io starei a casa stasera.", "Resterei a casa stasera.", "Rimarrei a casa stasera."], explanation: "\"Stare\" keeps the a: \"starei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They'd need a hand.", answer: "Avrebbero bisogno di una mano.", altAnswers: ["Loro avrebbero bisogno di una mano."], explanation: "\"Avere\" → \"avr-\" + \"-ebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd gladly drink] a glass of wine.", sentence: "___ volentieri un bicchiere di vino.", answer: "Berrei", altAnswers: ["Io berrei"], explanation: "\"Bere\" → \"berr-\", double r." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you stay] for dinner, madam?", sentence: "___ a cena, signora?", answer: "Rimarrebbe", altAnswers: ["Resterebbe"], explanation: "\"Rimanere\" → \"rimarr-\"; Lei takes the third person." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We would see] the sea from here.", sentence: "Da qui ___ il mare.", answer: "vedremmo", explanation: "\"Vedere\" → \"vedr-\" + \"-emmo\"." },
      { type: "matching", instructions: "Match the conditional to its infinitive.", pairs: [{ left: "andrei", right: "andare" }, { left: "verrei", right: "venire" }, { left: "vorrei", right: "volere" }, { left: "sarei", right: "essere" }, { left: "farei", right: "fare" }, { left: "berrei", right: "bere" }], explanation: "Same stems as the future." },
      { type: "dictation", audio: "Vorremmo prenotare un tavolo per due.", explanation: "\"Vorremmo\": double r, double m." },
      { type: "speak", text: "Al tuo posto andrei a Napoli e starei lì una settimana. Sarebbe perfetto!", prompt: "Say it in Italian: In your place I'd go to Naples and stay there a week. It would be perfect!", tip: "Roll the r in \"sarebbe\" lightly; it's a single r.", explanation: "\"Andrei\", \"starei\", \"sarebbe\": irregular stems." },
    ],
  },
  {
    slug: "a2-conditional-polite",
    level: "IT-A2",
    number: 3,
    title: "Polite Requests",
    summary: "Ask politely with vorrei, potrei, potrebbe, Le dispiacerebbe and avrebbe un momento?",
    duration: "15 min",
    sections: [
      {
        heading: "Vorrei and potrei",
        body: [
          "The conditional softens a request, just as English would and could do. \"Voglio un caffè\" (I want a coffee) sounds demanding; \"Vorrei un caffè\" (I'd like a coffee) is the normal way to order. \"Posso pagare?\" is fine, \"Potrei pagare con la carta?\" (could I pay by card?) is a touch more polite.",
          "\"Vorrei\" + infinitive is perfect for any request in a shop or office: \"Vorrei prenotare\", \"Vorrei cambiare questa maglietta\", \"Vorrei parlare con il responsabile\" (I'd like to speak to the person in charge).",
        ],
        examples: [
          { es: "Vorrei un cornetto integrale, per favore.", en: "I'd like a wholemeal croissant, please." },
          { es: "Vorrei cambiare questa maglietta.", en: "I'd like to exchange this T-shirt." },
          { es: "Potrei pagare con la carta?", en: "Could I pay by card?" },
          { es: "Vorrei parlare con il responsabile.", en: "I'd like to speak to the person in charge." },
          { es: "Potremmo sederci qui?", en: "Could we sit here?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to exchange this T-shirt.", answer: "Vorrei cambiare questa maglietta.", altAnswers: ["Vorrei cambiare questa t-shirt."], explanation: "\"Vorrei\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could I pay by card?", answer: "Potrei pagare con la carta?", altAnswers: ["Posso pagare con la carta?", "Potrei pagare con carta?"], explanation: "\"Potrei\" is softer than \"posso\"." },
        ],
      },
      {
        heading: "Asking someone else: potrebbe, potresti",
        body: [
          "To ask someone to do something, use their person: \"Potresti chiudere la porta?\" (tu), \"Potrebbe ripetere?\" (Lei). Pronouns can go before \"potrebbe\" or attach to the infinitive: \"Mi potrebbe aiutare?\" or \"Potrebbe aiutarmi?\".",
          "\"Avrebbe un momento?\" (would you have a moment?) is the classic opener with a busy official or shop assistant. \"Mi darebbe ...?\" (would you give me) also works, but \"potrebbe darmi\" is more common.",
        ],
        examples: [
          { es: "Potresti chiudere la porta?", en: "Could you close the door?" },
          { es: "Mi potrebbe aiutare?", en: "Could you help me?" },
          { es: "Potrebbe parlare più piano?", en: "Could you speak more slowly?" },
          { es: "Scusi, avrebbe un momento?", en: "Excuse me, would you have a moment?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you help me? (to a stranger)", answer: "Mi potrebbe aiutare?", altAnswers: ["Potrebbe aiutarmi?"], explanation: "Lei: \"potrebbe\"; the pronoun before or attached." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Excuse me, [would you have] a moment?", sentence: "Scusi, ___ un momento?", answer: "avrebbe", explanation: "\"Avere\" → \"avrebbe\" for Lei." },
          { type: "multiple-choice", question: "You want your flatmate to close the door. Which is polite and right?", options: ["Potresti chiudere la porta?", "Potrebbe chiudere la porta?", "Potresti chiudi la porta?", "Potrai chiudere la porta?"], correctIndex: 0, explanation: "Flatmate → tu: \"potresti\" + infinitive." },
        ],
      },
      {
        heading: "Le dispiacerebbe ...?",
        body: [
          "The most courteous request of all: \"Le dispiacerebbe\" + infinitive (would you mind ...?) to someone you call Lei, \"Ti dispiacerebbe\" to a friend. It works like \"piacere\": the person is an indirect pronoun. \"Le dispiacerebbe chiudere il finestrino?\" (would you mind closing the window?).",
        ],
        examples: [
          { es: "Le dispiacerebbe chiudere il finestrino?", en: "Would you mind closing the window?" },
          { es: "Ti dispiacerebbe portare il vino?", en: "Would you mind bringing the wine?" },
          { es: "Le dispiacerebbe spostarsi un po'?", en: "Would you mind moving over a little?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you mind closing the window? (on a train, to a stranger)", answer: "Le dispiacerebbe chiudere il finestrino?", altAnswers: ["Le dispiace chiudere il finestrino?"], explanation: "\"Le\" (to you, Lei) + \"dispiacerebbe\"." },
          { type: "listen-choose", audio: "Ti dispiacerebbe portare il vino?", question: "What is the friend asking?", options: ["Would you mind bringing the wine?", "Did you mind bringing the wine?", "You don't like the wine?", "Would you like some wine?"], correctIndex: 0, explanation: "\"Ti dispiacerebbe\" + infinitive = would you mind ...ing." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a wholemeal croissant, please.", answer: "Vorrei un cornetto integrale, per favore.", altAnswers: ["Vorrei una brioche integrale, per favore."], explanation: "\"Vorrei\" is the normal way to order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you speak more slowly? (to a stranger)", answer: "Potrebbe parlare più piano?", altAnswers: ["Potrebbe parlare più lentamente?", "Può parlare più piano?"], explanation: "Lei: \"potrebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could we sit here?", answer: "Potremmo sederci qui?", altAnswers: ["Ci potremmo sedere qui?", "Potremmo sederci qua?"], explanation: "\"Potremmo\" + reflexive infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to speak to the person in charge.", answer: "Vorrei parlare con il responsabile.", altAnswers: ["Vorrei parlare col responsabile."], explanation: "\"Il responsabile\" = the person in charge." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you mind bringing the wine? (to a friend)", answer: "Ti dispiacerebbe portare il vino?", altAnswers: ["Ti dispiace portare il vino?"], explanation: "\"Ti\" for a friend." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you] pass me the salt? (to a friend)", sentence: "___ passarmi il sale?", answer: "Potresti", explanation: "\"Potresti\" + infinitive with \"mi\" attached." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you mind] moving over a little? (to a stranger)", sentence: "___ spostarsi un po'?", answer: "Le dispiacerebbe", altAnswers: ["Le dispiace"], explanation: "\"Le dispiacerebbe\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you give me] a receipt?", sentence: "___ una ricevuta?", answer: "Mi darebbe", altAnswers: ["Mi potrebbe dare", "Potrebbe darmi"], explanation: "\"Dare\" → \"darebbe\"." },
      { type: "word-order", prompt: "Put the words in order to say: Excuse me, would you have a moment?", words: ["Scusi,", "avrebbe", "un", "momento?"], translation: "Excuse me, would you have a moment?", explanation: "A polite opener." },
      { type: "multiple-choice", question: "At the bar, which order sounds most natural?", options: ["Vorrei un caffè, per favore.", "Voglio un caffè!", "Vorrò un caffè, per favore.", "Volevo che un caffè."], correctIndex: 0, explanation: "\"Vorrei\" is polite and normal." },
      { type: "dictation", audio: "Mi potrebbe aiutare, per favore?", explanation: "\"Potrebbe\" for Lei." },
      { type: "speak", text: "Buongiorno, vorrei cambiare questa maglietta. Potrei avere una taglia più grande?", prompt: "In a shop, say in Italian: Good morning, I'd like to exchange this T-shirt. Could I have a bigger size?", tip: "vor-REI, po-TREI: stress the ending.", explanation: "\"Vorrei\" and \"potrei\" for polite requests." },
    ],
  },
  {
    slug: "a2-conditional-advice",
    level: "IT-A2",
    number: 4,
    title: "Advice: Dovresti",
    summary: "Give advice with dovresti, al tuo posto + conditional, faresti meglio a and sarebbe meglio.",
    duration: "15 min",
    sections: [
      {
        heading: "Dovresti: you should",
        body: [
          "\"Dovere\" in the conditional is English should: \"Dovresti dormire di più\" (you should sleep more), \"Dovrebbe riposare, signora\" (you should rest, Lei). It's advice, softer than the present \"devi\" (you must).",
          "Compare: \"Devi prendere la medicina\" (you have to take the medicine, a rule) and \"Dovresti prendere la medicina\" (you ought to, a recommendation). In the negative: \"Non dovresti lavorare così tanto\" (you shouldn't work so much).",
        ],
        examples: [
          { es: "Dovresti dormire di più.", en: "You should sleep more." },
          { es: "Dovrebbe riposare qualche giorno, signora.", en: "You should rest for a few days, madam." },
          { es: "Non dovresti lavorare così tanto.", en: "You shouldn't work so much." },
          { es: "Dovremmo partire prima delle otto.", en: "We should leave before eight." },
          { es: "Devi prendere la medicina.", en: "You have to take the medicine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should sleep more. (to a friend)", answer: "Dovresti dormire di più.", altAnswers: ["Tu dovresti dormire di più."], explanation: "\"Dovresti\" = you should." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You [shouldn't work] so much.", sentence: "___ così tanto.", answer: "Non dovresti lavorare", explanation: "\"Non\" + \"dovresti\" + infinitive." },
        ],
      },
      {
        heading: "Al tuo posto ...",
        body: [
          "To put yourself in someone's shoes, say \"Al tuo posto\" (in your place, if I were you) + the conditional: \"Al tuo posto andrei dal medico\" (if I were you I'd go to the doctor). With Lei: \"Al Suo posto\". \"Io\" + conditional on its own does the same job: \"Io accetterei\" (I'd accept).",
          "This is how Italians avoid the if-clause, which needs a past subjunctive you'll learn at Intermediate level: say \"al tuo posto\", not \"se io ero te\".",
        ],
        examples: [
          { es: "Al tuo posto andrei dal medico.", en: "If I were you I'd go to the doctor." },
          { es: "Al Suo posto prenderei il treno.", en: "If I were you I'd take the train." },
          { es: "Io accetterei subito.", en: "I'd accept straight away." },
          { es: "Al posto tuo non direi niente.", en: "If I were you I wouldn't say anything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were you I'd go to the doctor. (to a friend)", answer: "Al tuo posto andrei dal medico.", altAnswers: ["Al posto tuo andrei dal medico.", "Io al tuo posto andrei dal medico."], explanation: "\"Al tuo posto\" + conditional." },
          { type: "multiple-choice", question: "Which is natural Italian for if I were you I'd accept?", options: ["Al tuo posto accetterei.", "Se io ero te accetterei.", "Se io sarei te accetterei.", "Al tuo posto accetto."], correctIndex: 0, explanation: "\"Al tuo posto\" avoids the subjunctive." },
        ],
      },
      {
        heading: "Faresti meglio a, sarebbe meglio",
        body: [
          "\"Faresti meglio a\" + infinitive (you'd better) is a firmer warning: \"Faresti meglio a partire subito\". \"Sarebbe meglio\" + infinitive (it would be better to) is impersonal and gentle: \"Sarebbe meglio prenotare\".",
        ],
        examples: [
          { es: "Faresti meglio a partire subito.", en: "You'd better leave right away." },
          { es: "Sarebbe meglio prenotare.", en: "It would be better to book." },
          { es: "Fareste meglio a portare l'ombrello.", en: "You'd better bring an umbrella. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be better to book.", answer: "Sarebbe meglio prenotare.", explanation: "\"Sarebbe meglio\" + infinitive." },
          { type: "listen-choose", audio: "Faresti meglio a partire subito.", question: "What does it mean?", options: ["You'd better leave right away.", "You did better to leave at once.", "You'll leave at once.", "It's better if I leave right away."], correctIndex: 0, explanation: "\"Faresti meglio a\" = you'd better." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should rest for a few days, madam.", answer: "Dovrebbe riposare qualche giorno, signora.", altAnswers: ["Signora, dovrebbe riposare qualche giorno.", "Dovrebbe riposarsi qualche giorno, signora."], explanation: "Lei: \"dovrebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We should leave before eight.", answer: "Dovremmo partire prima delle otto.", altAnswers: ["Noi dovremmo partire prima delle otto."], explanation: "\"Dovremmo\": double m." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were you I wouldn't say anything. (to a friend)", answer: "Al tuo posto non direi niente.", altAnswers: ["Al posto tuo non direi niente.", "Al tuo posto non direi nulla."], explanation: "\"Dire\" → \"direi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'd better leave right away. (to a friend)", answer: "Faresti meglio a partire subito.", altAnswers: ["Faresti meglio ad andare via subito."], explanation: "\"Faresti meglio a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were you I'd take the train. (to a client)", answer: "Al Suo posto prenderei il treno.", altAnswers: ["Al suo posto prenderei il treno."], explanation: "Lei: \"al Suo posto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You [have to] take the medicine: the doctor said so.", sentence: "___ prendere la medicina: l'ha detto il medico.", answer: "Devi", explanation: "A rule, not advice: \"devi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd accept] straight away.", sentence: "Io ___ subito.", answer: "accetterei", explanation: "\"Accettare\" → \"accetter-\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You'd better] bring an umbrella. (to friends)", sentence: "___ a portare l'ombrello.", answer: "Fareste meglio", explanation: "Voi: \"fareste\"." },
      { type: "word-order", prompt: "Put the words in order to say: If I were you I'd go to the doctor.", words: ["Al", "tuo", "posto", "andrei", "dal", "medico."], translation: "If I were you I'd go to the doctor.", explanation: "\"Dal medico\": \"da\" for going to a person." },
      { type: "multiple-choice", question: "Your friend has a cough. Which is friendly advice?", options: ["Dovresti smettere di fumare.", "Devresti smettere di fumare.", "Dovrai smettere di fumare?", "Dovresti smetti di fumare."], correctIndex: 0, explanation: "\"Dovresti\" + infinitive." },
      { type: "dictation", audio: "Dovresti dormire di più e bere molta acqua.", explanation: "\"Dovresti\" + two infinitives." },
      { type: "speak", text: "Al tuo posto andrei dal medico. Dovresti riposare e non dovresti lavorare così tanto.", prompt: "Advise a tired friend in Italian: If I were you I'd go to the doctor. You should rest and you shouldn't work so much.", tip: "do-VRE-sti: stress on the middle syllable.", explanation: "Three ways to give advice." },
    ],
  },
  {
    slug: "a2-conditional-wishes",
    level: "IT-A2",
    number: 5,
    title: "Wishes: Mi Piacerebbe",
    summary: "Talk about dreams and wishes with mi piacerebbe, vorrei, sarebbe bello and avrei voglia di.",
    duration: "15 min",
    sections: [
      {
        heading: "Mi piacerebbe",
        body: [
          "\"Piacere\" in the conditional gives the most natural way to talk about wishes: \"Mi piacerebbe vivere a Venezia\" (I'd like to live in Venice). As with \"mi piace\", the person is an indirect pronoun: \"ti piacerebbe\", \"gli piacerebbe\", \"le piacerebbe\", \"ci piacerebbe\".",
          "With a plural noun the verb is plural: \"Mi piacerebbero due figli\" (I'd like two children). With an infinitive it's always singular. Never say \"mi piacerei\": that would mean I'd like myself.",
        ],
        examples: [
          { es: "Mi piacerebbe vivere a Venezia.", en: "I'd like to live in Venice." },
          { es: "Ti piacerebbe venire con noi in Sicilia?", en: "Would you like to come with us to Sicily?" },
          { es: "A Marco piacerebbe fare il cuoco.", en: "Marco would like to be a chef." },
          { es: "Ci piacerebbe comprare una casa in campagna.", en: "We'd like to buy a house in the country." },
          { es: "Mi piacerebbero due gatti.", en: "I'd like two cats." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to live in Venice.", answer: "Mi piacerebbe vivere a Venezia.", altAnswers: ["Vorrei vivere a Venezia.", "A me piacerebbe vivere a Venezia."], explanation: "\"Mi piacerebbe\" + infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you like] to come with us to Sicily? (to a friend)", sentence: "___ venire con noi in Sicilia?", answer: "Ti piacerebbe", altAnswers: ["Vorresti"], explanation: "\"Ti\" for a friend." },
        ],
      },
      {
        heading: "Vorrei imparare, sarebbe bello",
        body: [
          "\"Vorrei\" + infinitive also states a wish: \"Vorrei imparare a suonare la chitarra\" (I'd like to learn to play the guitar). \"Imparare a\" + infinitive: don't forget the \"a\".",
          "\"Sarebbe bello\" + infinitive (it would be lovely to) dreams out loud: \"Sarebbe bello andare in vacanza tutti insieme\". \"Avrei voglia di\" + infinitive or noun means I feel like: \"Avrei voglia di un gelato\".",
        ],
        examples: [
          { es: "Vorrei imparare a suonare la chitarra.", en: "I'd like to learn to play the guitar." },
          { es: "Sarebbe bello andare in vacanza tutti insieme.", en: "It would be lovely to go on holiday all together." },
          { es: "Avrei voglia di un gelato.", en: "I feel like an ice cream." },
          { es: "Vorremmo fare il giro della Sardegna in bici.", en: "We'd like to cycle round Sardinia." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to learn to play the guitar.", answer: "Vorrei imparare a suonare la chitarra.", altAnswers: ["Mi piacerebbe imparare a suonare la chitarra."], explanation: "\"Imparare a\" + infinitive; \"suonare\" for instruments." },
          { type: "listen-choose", audio: "Avrei voglia di un gelato.", question: "What does it mean?", options: ["I feel like an ice cream.", "I had an ice cream.", "I'll have an ice cream.", "I don't want an ice cream."], correctIndex: 0, explanation: "\"Avere voglia di\" = to feel like." },
        ],
      },
      {
        heading: "Dreams in conversation",
        body: [
          "When someone shares a dream, Italians answer with the conditional too: \"Che bello! Anch'io vorrei ...\" or ask \"E dove andresti?\" (and where would you go?). \"Magari!\" (if only!) is the classic one-word reply to a wish you share.",
        ],
        examples: [
          { es: "Un anno sabbatico? Magari!", en: "A sabbatical year? If only!" },
          { es: "E dove andresti?", en: "And where would you go?" },
          { es: "Anch'io vorrei cambiare lavoro.", en: "I'd like to change jobs too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And where would you go? (to a friend)", answer: "E dove andresti?", altAnswers: ["E tu dove andresti?"], explanation: "\"Andare\" → \"andresti\"." },
          { type: "multiple-choice", question: "Your friend says \"Sarebbe bello vincere alla lotteria!\". What's a natural reply?", options: ["Magari!", "Prego!", "Piacere!", "Salute!"], correctIndex: 0, explanation: "\"Magari!\" = if only!" },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd like to buy a house in the country.", answer: "Ci piacerebbe comprare una casa in campagna.", altAnswers: ["Vorremmo comprare una casa in campagna."], explanation: "\"Ci piacerebbe\" or \"vorremmo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco would like to be a chef.", answer: "A Marco piacerebbe fare il cuoco.", altAnswers: ["Marco vorrebbe fare il cuoco.", "A Marco piacerebbe diventare cuoco.", "Marco vorrebbe diventare cuoco."], explanation: "\"Fare il cuoco\" = to work as a chef." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be lovely to go on holiday all together.", answer: "Sarebbe bello andare in vacanza tutti insieme.", explanation: "\"Sarebbe bello\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel like a pizza.", answer: "Avrei voglia di una pizza.", altAnswers: ["Ho voglia di una pizza.", "Ho voglia di pizza.", "Avrei voglia di pizza."], explanation: "\"Avere voglia di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like two cats.", answer: "Mi piacerebbero due gatti.", altAnswers: ["Vorrei due gatti."], explanation: "Plural noun → \"piacerebbero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to change jobs too.", answer: "Anch'io vorrei cambiare lavoro.", altAnswers: ["Anche io vorrei cambiare lavoro.", "Anche a me piacerebbe cambiare lavoro."], explanation: "\"Cambiare lavoro\" = to change jobs." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[She'd like] to live by the sea.", sentence: "___ vivere al mare.", answer: "Le piacerebbe", altAnswers: ["Vorrebbe"], explanation: "\"Le\" = to her." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A sabbatical year? [If only]!", sentence: "Un anno sabbatico? ___!", answer: "Magari", explanation: "\"Magari!\" = if only." },
      { type: "word-order", prompt: "Put the words in order to say: Would you like to come with us to Sicily?", words: ["Ti", "piacerebbe", "venire", "con", "noi", "in", "Sicilia?"], translation: "Would you like to come with us to Sicily?", explanation: "\"In\" with regions and islands like Sicilia." },
      { type: "multiple-choice", question: "Which is correct for I'd like to travel?", options: ["Mi piacerebbe viaggiare.", "Mi piacerei viaggiare.", "Io piacerebbe viaggiare.", "Mi piacerebbero viaggiare."], correctIndex: 0, explanation: "Infinitive → singular \"piacerebbe\", with \"mi\"." },
      { type: "dictation", audio: "Mi piacerebbe vivere a Venezia.", explanation: "\"Piacerebbe\": double b." },
      { type: "speak", text: "Mi piacerebbe vivere al mare e vorrei imparare a suonare il pianoforte. Sarebbe bello!", prompt: "Share your dreams in Italian: I'd like to live by the sea and I'd like to learn to play the piano. It would be lovely!", tip: "pia-ce-REB-be: hold the double b.", explanation: "Three ways to express a wish." },
    ],
  },
  {
    slug: "a2-drill-conditional-forms",
    level: "IT-A2",
    number: 6,
    title: "Drill: Conditional Forms",
    summary: "Produce forty verbs in the conditional, regular and irregular, in every person.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Stem + -ei, -esti, -ebbe, -emmo, -este, -ebbero",
        body: [
          "Regular: \"parler-\", \"prender-\", \"dormir-\", \"finir-\"; with h: \"cercher-\", \"pagher-\"; without i: \"manger-\", \"comincer-\". Irregular: \"sar-\", \"avr-\", \"andr-\", \"potr-\", \"dovr-\", \"sapr-\", \"vedr-\", \"vivr-\", \"verr-\", \"vorr-\", \"berr-\", \"rimarr-\", \"far-\", \"star-\", \"dar-\".",
        ],
        examples: [
          { es: "Dormirei fino a mezzogiorno.", en: "I'd sleep till midday." },
          { es: "Saresti libero domani?", en: "Would you be free tomorrow?" },
          { es: "Comincerebbero lunedì.", en: "They'd start on Monday." },
          { es: "Ci vedremmo più spesso.", en: "We'd see each other more often." },
          { es: "Vivreste in campagna?", en: "Would you live in the country? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you be free tomorrow? (to a friend)", answer: "Saresti libero domani?", altAnswers: ["Saresti libera domani?", "Domani saresti libero?", "Domani saresti libera?"], explanation: "\"Essere\" → \"saresti\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They'd start on Monday.", answer: "Comincerebbero lunedì.", altAnswers: ["Inizierebbero lunedì.", "Loro comincerebbero lunedì."], explanation: "-ciare drops the i: \"comincer-\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd sleep till midday.", answer: "Dormirei fino a mezzogiorno.", altAnswers: ["Io dormirei fino a mezzogiorno."], explanation: "\"Dormir-\" + \"-ei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd see each other more often.", answer: "Ci vedremmo più spesso.", explanation: "\"Vedr-\" + \"-emmo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you live in the country? (to a group)", answer: "Vivreste in campagna?", altAnswers: ["Voi vivreste in campagna?"], explanation: "\"Vivr-\" + \"-este\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She'd know what to do.", answer: "Saprebbe cosa fare.", altAnswers: ["Lei saprebbe cosa fare.", "Saprebbe che cosa fare."], explanation: "\"Sapr-\" + \"-ebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd pay the bill.", answer: "Pagherei il conto.", altAnswers: ["Io pagherei il conto."], explanation: "h after g." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you come to dinner on Friday? (to friends)", answer: "Verreste a cena venerdì?", altAnswers: ["Venerdì verreste a cena?"], explanation: "\"Verr-\" + \"-este\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They'd stay one more week.", answer: "Rimarrebbero un'altra settimana.", altAnswers: ["Resterebbero un'altra settimana.", "Starebbero un'altra settimana."], explanation: "\"Rimarr-\" + \"-ebbero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd eat out every evening.", answer: "Mangeremmo fuori ogni sera.", altAnswers: ["Mangeremmo fuori tutte le sere."], explanation: "\"Manger-\" + \"-emmo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you have time on Saturday? (to a friend)", answer: "Avresti tempo sabato?", altAnswers: ["Sabato avresti tempo?"], explanation: "\"Avr-\" + \"-esti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd look for] a smaller flat.", sentence: "___ un appartamento più piccolo.", answer: "Cercherei", explanation: "h after c." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [would drink] only water.", sentence: "___ solo acqua.", answer: "Berrebbe", explanation: "\"Berr-\" + \"-ebbe\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You'd finish] early. (to friends)", sentence: "___ presto.", answer: "Finireste", explanation: "No -isc- in the conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We would go] by train.", sentence: "___ in treno.", answer: "Andremmo", explanation: "\"Andr-\" + \"-emmo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What would you do]? (to friends)", sentence: "___?", answer: "Che cosa fareste", altAnswers: ["Cosa fareste", "Che fareste"], explanation: "\"Far-\" + \"-este\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They would give] you a discount.", sentence: "Ti ___ uno sconto.", answer: "darebbero", explanation: "\"Dar-\" + \"-ebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd travel] all year.", sentence: "___ tutto l'anno.", answer: "Viaggerei", explanation: "No i: \"viagger-\"." },
      { type: "dictation", audio: "Avresti tempo sabato? Verresti a cena?", explanation: "\"Avresti\", \"verresti\"." },
      { type: "dictation", audio: "Andremmo in treno e dormiremmo in albergo.", explanation: "\"-emmo\" twice, double m." },
      { type: "speak", text: "Al mio posto, cosa faresti? Io andrei in Sicilia e rimarrei un mese.", prompt: "Say it in Italian: In my place, what would you do? I'd go to Sicily and stay a month.", tip: "ri-mar-REI: double r.", explanation: "\"Faresti\", \"andrei\", \"rimarrei\"." },
    ],
  },
  {
    slug: "a2-sound-emmo-emo",
    level: "IT-A2",
    number: 7,
    title: "Sounds: Parleremmo or Parleremo?",
    summary: "Hear and spell the double m that tells the conditional (parleremmo) from the future (parleremo).",
    duration: "15 min",
    sections: [
      {
        heading: "One letter, two tenses",
        body: [
          "In the noi form the future and the conditional differ by a single consonant: \"parleremo\" (we will speak) and \"parleremmo\" (we would speak). The same goes for every verb: \"andremo\" / \"andremmo\", \"saremo\" / \"saremmo\", \"potremo\" / \"potremmo\", \"vorremo\" / \"vorremmo\".",
          "The difference is length: in \"-emmo\" you hold the m a fraction longer, and the e before it is shorter and sharper. Native speakers hear it instantly, so a short m in \"vorremmo un tavolo\" makes your polite request sound like a promise: we will want a table.",
        ],
        examples: [
          { es: "Domani parleremo con il capo.", en: "Tomorrow we'll speak to the boss." },
          { es: "Parleremmo con il capo, ma non c'è.", en: "We'd speak to the boss, but he's not here." },
          { es: "Andremo a Roma a maggio.", en: "We'll go to Rome in May." },
          { es: "Andremmo a Roma, ma costa troppo.", en: "We'd go to Rome, but it costs too much." },
          { es: "Vorremmo un tavolo per quattro.", en: "We'd like a table for four." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Andremmo a Roma, ma costa troppo.", question: "What did you hear?", options: ["andremmo (we would go)", "andremo (we will go)", "andiamo (we go)", "andavamo (we used to go)"], correctIndex: 0, explanation: "Long m: conditional." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd like a table for four.", answer: "Vorremmo un tavolo per quattro.", explanation: "Conditional: \"-emmo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll go to Rome in May.", answer: "Andremo a Roma a maggio.", altAnswers: ["A maggio andremo a Roma."], explanation: "Future: \"-emo\", single m." },
        ],
      },
      {
        heading: "Context helps too",
        body: [
          "When you can't hear the difference, the rest of the sentence usually tells you. A date or \"domani\" points to the future (\"Domani saremo a casa\"). \"Ma\", \"al nostro posto\", \"volentieri\" or a polite request point to the conditional (\"Saremmo felici di venire, ma ...\").",
          "When you write, check every \"-emo\" / \"-emmo\" ending. It's one of the most common spelling mistakes even among Italian students.",
        ],
        examples: [
          { es: "Domani saremo a casa tutto il giorno.", en: "Tomorrow we'll be at home all day." },
          { es: "Saremmo felici di venire, ma lavoriamo.", en: "We'd be happy to come, but we're working." },
          { es: "Potremo uscire dopo le sei.", en: "We'll be able to go out after six." },
          { es: "Potremmo uscire stasera?", en: "Could we go out tonight?" },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We'd be] happy to come, but we're working.", sentence: "___ felici di venire, ma lavoriamo.", answer: "Saremmo", explanation: "Would → \"-emmo\"." },
          { type: "listen-choose", audio: "Potremo uscire dopo le sei.", question: "What did you hear?", options: ["potremo (we'll be able to)", "potremmo (we could)", "possiamo (we can)", "potevamo (we could, past)"], correctIndex: 0, explanation: "Short m: future." },
          { type: "multiple-choice", question: "Which fits? \"___ volentieri, ma non abbiamo tempo.\" (We'd come gladly, but we haven't got time.)", options: ["Verremmo", "Verremo", "Veniamo", "Verranno"], correctIndex: 0, explanation: "\"Ma\" + would: conditional \"verremmo\"." },
        ],
      },
    ],
    exercises: [
      { type: "dictation", audio: "Vorremmo prenotare per sabato.", explanation: "\"Vorremmo\": double r, double m." },
      { type: "dictation", audio: "Domani andremo al mare.", explanation: "\"Andremo\": future, single m." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd be happy to help you. (to a friend)", answer: "Saremmo felici di aiutarti.", altAnswers: ["Saremmo contenti di aiutarti.", "Saremmo felici di darti una mano."], explanation: "Would be → \"saremmo\", double m." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow we'll be at home all day.", answer: "Domani saremo a casa tutto il giorno.", altAnswers: ["Saremo a casa tutto il giorno domani."], explanation: "Future: \"saremo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could we go out tonight?", answer: "Potremmo uscire stasera?", altAnswers: ["Stasera potremmo uscire?"], explanation: "Conditional: \"potremmo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll speak to the boss tomorrow.", answer: "Domani parleremo con il capo.", altAnswers: ["Parleremo con il capo domani.", "Domani parleremo col capo."], explanation: "Future: \"parleremo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd speak to the boss, but he's not here.", answer: "Parleremmo con il capo, ma non c'è.", altAnswers: ["Parleremmo col capo, ma non c'è."], explanation: "Conditional: \"parleremmo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Next year [we'll have] a bigger house.", sentence: "L'anno prossimo ___ una casa più grande.", answer: "avremo", explanation: "Future: \"avremo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "With a garden [we'd have] a dog.", sentence: "Con un giardino ___ un cane.", answer: "avremmo", explanation: "Conditional: \"avremmo\"." },
      { type: "listen-choose", audio: "Faremmo una festa, ma la casa è piccola.", question: "What did you hear?", options: ["faremmo (we'd do)", "faremo (we'll do)", "facciamo (we do)", "facevamo (we used to do)"], correctIndex: 0, explanation: "Long m + \"ma\": conditional." },
      { type: "speak", text: "Andremo a Roma a maggio. Andremmo anche a Napoli, ma non abbiamo tempo.", prompt: "Say it in Italian: We'll go to Rome in May. We'd go to Naples too, but we haven't got time.", tip: "an-DRE-mo, then an-DREM-mo: hold the second m.", explanation: "Future then conditional." },
    ],
  },
  {
    slug: "a2-drill-future-vs-conditional",
    level: "IT-A2",
    number: 8,
    title: "Drill: Future or Conditional?",
    summary: "Switch between will and would: the future and the conditional side by side.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Will or would?",
        body: [
          "Same stem, different endings. Future: \"-ò, -ai, -à, -emo, -ete, -anno\". Conditional: \"-ei, -esti, -ebbe, -emmo, -este, -ebbero\". Will → future; would, could, should → conditional.",
        ],
        examples: [
          { es: "Partirò domani. / Partirei domani.", en: "I'll leave tomorrow. / I'd leave tomorrow." },
          { es: "Verrà? / Verrebbe?", en: "Will he come? / Would he come?" },
          { es: "Potrai aiutarmi? / Potresti aiutarmi?", en: "Will you be able to help me? / Could you help me?" },
          { es: "Saranno a casa. / Sarebbero a casa.", en: "They'll be at home. / They'd be at home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will he come?", answer: "Verrà?", altAnswers: ["Lui verrà?"], explanation: "Future: \"verrà\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would he come?", answer: "Verrebbe?", altAnswers: ["Lui verrebbe?"], explanation: "Conditional: \"verrebbe\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call you tonight. (to a friend)", answer: "Ti chiamerò stasera.", altAnswers: ["Stasera ti chiamerò.", "Ti chiamo stasera."], explanation: "Will → future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd call you, but I haven't got your number.", answer: "Ti chiamerei, ma non ho il tuo numero.", explanation: "Would → conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you help me? (to a friend)", answer: "Potresti aiutarmi?", altAnswers: ["Mi potresti aiutare?"], explanation: "Could → \"potresti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you be able to help me tomorrow? (to a friend)", answer: "Potrai aiutarmi domani?", altAnswers: ["Mi potrai aiutare domani?", "Domani potrai aiutarmi?"], explanation: "Will be able → \"potrai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They'll be at home after nine.", answer: "Saranno a casa dopo le nove.", altAnswers: ["Dopo le nove saranno a casa."], explanation: "Future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be a good idea.", answer: "Sarebbe una buona idea.", explanation: "Conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll see.", answer: "Vedremo.", explanation: "Future: \"vedremo\", a very common reply." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should leave earlier. (to a friend)", answer: "Dovresti partire prima.", altAnswers: ["Dovresti uscire prima.", "Dovresti partire più presto."], explanation: "Should → \"dovresti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Next summer [I'll go] to Sardinia.", sentence: "La prossima estate ___ in Sardegna.", answer: "andrò", explanation: "Future: \"andrò\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd go] to Sardinia, but it's expensive.", sentence: "___ in Sardegna, ma è cara.", answer: "Andrei", explanation: "Conditional: \"andrei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Will you do] the shopping? (to a friend)", sentence: "___ tu la spesa?", answer: "Farai", explanation: "Future: \"farai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you do] the shopping? (to a friend)", sentence: "___ tu la spesa?", answer: "Faresti", explanation: "Conditional: \"faresti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [would like] to come.", sentence: "___ venire.", answer: "Vorrebbero", explanation: "Conditional: \"vorrebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [will want] to come.", sentence: "___ venire.", answer: "Vorranno", explanation: "Future: \"vorranno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We'd be] there in ten minutes, but there's traffic.", sentence: "___ lì in dieci minuti, ma c'è traffico.", answer: "Saremmo", explanation: "Conditional: \"saremmo\"." },
      { type: "multiple-choice", question: "\"Mi daresti una mano?\" means ...", options: ["Would you give me a hand?", "Will you give me a hand?", "Did you give me a hand?", "Give me a hand!"], correctIndex: 0, explanation: "\"-esti\" = conditional." },
      { type: "dictation", audio: "Ti chiamerei, ma è tardi. Ti chiamerò domani.", explanation: "Conditional, then future." },
      { type: "speak", text: "Verrei volentieri, ma stasera lavoro. Verrò sabato!", prompt: "Say it in Italian: I'd come gladly, but I'm working tonight. I'll come on Saturday!", tip: "ver-REI, ver-RÒ: both with double r.", explanation: "Would, then will." },
    ],
  },
  {
    slug: "a2-dialogue-lab-advice-column",
    level: "IT-A2",
    number: 9,
    title: "Dialogue Lab: Ask a Friend",
    summary: "A friend asks for advice about a job offer in Torino: hear and give advice with the conditional.",
    duration: "15 min",
    sections: [
      {
        heading: "The offer",
        body: [
          "Davide lives in Bari and calls his friend Elena: \"Mi hanno offerto un lavoro a Torino\" (they've offered me a job in Turin). The salary would be higher, but he'd have to move: \"Lo stipendio sarebbe più alto, ma dovrei trasferirmi\".",
          "Davide lists his doubts in the conditional: \"Sarei lontano dalla famiglia\" (I'd be far from my family), \"Non conoscerei nessuno\" (I wouldn't know anyone).",
        ],
        examples: [
          { es: "Mi hanno offerto un lavoro a Torino.", en: "They've offered me a job in Turin." },
          { es: "Lo stipendio sarebbe più alto.", en: "The salary would be higher." },
          { es: "Ma dovrei trasferirmi.", en: "But I'd have to move." },
          { es: "Sarei lontano dalla famiglia.", en: "I'd be far from my family." },
          { es: "E non conoscerei nessuno.", en: "And I wouldn't know anyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The salary would be higher.", answer: "Lo stipendio sarebbe più alto.", explanation: "\"Sarebbe\" = would be." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "But [I'd have to] move.", sentence: "Ma ___ trasferirmi.", answer: "dovrei", explanation: "\"Dovrei\" = I'd have to, I should." },
        ],
      },
      {
        heading: "Elena's advice",
        body: [
          "Elena answers with every kind of advice: \"Al tuo posto accetterei\" (if I were you I'd accept), \"Dovresti chiedere se puoi lavorare da casa qualche giorno\" (you should ask if you can work from home some days), \"Potresti provare per un anno\" (you could try for a year).",
          "Davide asks: \"Tu cosa faresti?\" (what would you do?). Elena: \"Io partirei subito! Torino è una città bellissima\".",
        ],
        examples: [
          { es: "Al tuo posto accetterei.", en: "If I were you I'd accept." },
          { es: "Dovresti chiedere di lavorare da casa qualche giorno.", en: "You should ask to work from home some days." },
          { es: "Potresti provare per un anno.", en: "You could try it for a year." },
          { es: "Tu cosa faresti?", en: "What would you do?" },
          { es: "Io partirei subito!", en: "I'd leave straight away!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You could try it for a year. (to a friend)", answer: "Potresti provare per un anno.", altAnswers: ["Potresti provarci per un anno."], explanation: "\"Potresti\" = you could." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What would you do? (to a friend)", answer: "Tu cosa faresti?", altAnswers: ["Cosa faresti?", "Che cosa faresti?", "Tu che cosa faresti?", "Che faresti?"], explanation: "\"Faresti\" from \"fare\"." },
          { type: "listen-choose", audio: "Al tuo posto accetterei.", question: "What does Elena think?", options: ["He should accept.", "He should refuse.", "She would refuse.", "She doesn't know."], correctIndex: 0, explanation: "\"Accetterei\" = I'd accept." },
        ],
      },
      {
        heading: "The decision",
        body: [
          "Davide decides: \"Hai ragione, sarebbe un'occasione importante\" (you're right, it would be an important opportunity). Elena: \"Mi mancheresti, però!\" (I'd miss you, though!). Remember \"mancare\" works like \"piacere\": literally you would be missing to me.",
        ],
        examples: [
          { es: "Sarebbe un'occasione importante.", en: "It would be an important opportunity." },
          { es: "Mi mancheresti, però!", en: "I'd miss you, though!" },
          { es: "Verresti a trovarmi?", en: "Would you come and visit me?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd miss you, though! (to a friend)", answer: "Mi mancheresti, però!", altAnswers: ["Però mi mancheresti!"], explanation: "\"Mancare\" like \"piacere\": you (subject) would be missing to me." },
          { type: "multiple-choice", question: "Davide asks \"Verresti a trovarmi?\". What's he asking?", options: ["Would you come and visit me?", "Would you come and find me a flat?", "Will you come with me?", "Did you come to see me?"], correctIndex: 0, explanation: "\"Venire a trovare\" = to come and visit." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They've offered me a job in Turin.", answer: "Mi hanno offerto un lavoro a Torino.", explanation: "\"Offrire\" → \"offerto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd be far from my family.", answer: "Sarei lontano dalla famiglia.", altAnswers: ["Sarei lontana dalla famiglia.", "Sarei lontano dalla mia famiglia.", "Sarei lontana dalla mia famiglia."], explanation: "\"Lontano da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were you I'd accept. (to a friend)", answer: "Al tuo posto accetterei.", altAnswers: ["Al posto tuo accetterei.", "Io al tuo posto accetterei."], explanation: "\"Al tuo posto\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be an important opportunity.", answer: "Sarebbe un'occasione importante.", altAnswers: ["Sarebbe un'opportunità importante."], explanation: "\"Un'occasione\": feminine, apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you come and visit me? (to a friend)", answer: "Verresti a trovarmi?", altAnswers: ["Mi verresti a trovare?"], explanation: "\"Verresti\" from \"venire\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "And [I wouldn't know] anyone.", sentence: "E ___ nessuno.", answer: "non conoscerei", explanation: "\"Non\" + \"conoscerei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You should ask] to work from home.", sentence: "___ di lavorare da casa.", answer: "Dovresti chiedere", explanation: "\"Dovresti\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [would leave] straight away!", sentence: "Io ___ subito!", answer: "partirei", explanation: "\"Partir-\" + \"-ei\"." },
      { type: "word-order", prompt: "Put the words in order to say: The salary would be higher, but I'd have to move.", words: ["Lo", "stipendio", "sarebbe", "più", "alto,", "ma", "dovrei", "trasferirmi."], translation: "The salary would be higher, but I'd have to move.", explanation: "\"Lo stipendio\": \"lo\" before s + consonant." },
      { type: "multiple-choice", question: "Elena wants to say I'd miss you. Which is right?", options: ["Mi mancheresti.", "Ti mancherei.", "Mi mancherei.", "Ti mancheresti."], correctIndex: 0, explanation: "You are missed by me: \"tu\" is the subject, \"mi\" the person who misses." },
      { type: "dictation", audio: "Io partirei subito, Torino è bellissima.", explanation: "\"Partirei\": conditional." },
      { type: "speak", text: "Al tuo posto accetterei. Potresti provare per un anno e poi decidere.", prompt: "Advise your friend in Italian: If I were you I'd accept. You could try it for a year and then decide.", tip: "ac-cet-te-REI: double c, double t.", explanation: "Advice with the conditional." },
    ],
  },
  {
    slug: "a2-error-hunt-conditional",
    level: "IT-A2",
    number: 10,
    title: "Error Hunt: The Conditional",
    summary: "Fix the conditional mistakes learners make: vorrei che vieni, potresti mi aiutare, dovrebbi, mi piacerei.",
    duration: "15 min",
    sections: [
      {
        heading: "Wrong forms",
        body: [
          "\"Dovrebbi\" mixes up the endings: the tu form is \"dovresti\", the lui / lei form \"dovrebbe\". Learn the endings as a chant: \"-ei, -esti, -ebbe, -emmo, -este, -ebbero\".",
          "\"Mi piacerei\" would mean I'd like myself. Like \"mi piace\", the verb agrees with the thing you like: \"Mi piacerebbe\" (+ singular or infinitive), \"Mi piacerebbero\" (+ plural).",
        ],
        examples: [
          { es: "Dovresti chiamarla.", en: "You should call her." },
          { es: "Dovrebbe arrivare alle sei.", en: "She should arrive at six." },
          { es: "Mi piacerebbe un caffè.", en: "I'd like a coffee." },
          { es: "Mi piacerebbero dei fiori.", en: "I'd like some flowers." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Dovrebbi chiamarla\". Write it correctly: You should call her. (to a friend)", source: "You should call her.", answer: "Dovresti chiamarla.", altAnswers: ["La dovresti chiamare."], explanation: "Tu: \"-esti\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mi piacerei un caffè\". Write it correctly: I'd like a coffee.", source: "I'd like a coffee.", answer: "Mi piacerebbe un caffè.", altAnswers: ["Vorrei un caffè."], explanation: "The coffee is the subject: \"piacerebbe\"." },
        ],
      },
      {
        heading: "Wrong order, wrong structure",
        body: [
          "\"Potresti mi aiutare?\" splits the pronoun from the infinitive. It goes before \"potresti\" or on the end of the infinitive: \"Mi potresti aiutare?\" or \"Potresti aiutarmi?\".",
          "\"Vorrei che vieni\" (I'd like you to come) needs a past subjunctive after \"vorrei che\", which you'll meet at Intermediate level. For now, say it another way: \"Vieni anche tu?\", \"Ti va di venire?\", or, if it's you who wants to come, \"Vorrei venire\".",
        ],
        examples: [
          { es: "Mi potresti aiutare?", en: "Could you help me?" },
          { es: "Potresti aiutarmi?", en: "Could you help me?" },
          { es: "Vieni anche tu alla festa?", en: "Are you coming to the party too?" },
          { es: "Ti va di venire?", en: "Do you fancy coming?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Potresti mi aiutare?\". Write it correctly: Could you help me?", source: "Could you help me?", answer: "Potresti aiutarmi?", altAnswers: ["Mi potresti aiutare?"], explanation: "Pronoun before \"potresti\" or attached to the infinitive." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Vorrei che vieni alla festa\". Say it the A2 way: Do you fancy coming to the party?", source: "Do you fancy coming to the party?", answer: "Ti va di venire alla festa?", altAnswers: ["Vieni anche tu alla festa?", "Vieni alla festa?", "Vuoi venire alla festa?", "Ti piacerebbe venire alla festa?"], explanation: "\"Vorrei che\" needs a subjunctive; a question is simpler and natural." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Mi potresti aiutare?", "Potresti mi aiutare?", "Potresti aiutare mi?", "Mi potresti aiutarmi?"], correctIndex: 0, explanation: "One pronoun, before or attached." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Dovrebbi riposare\". Write it correctly: You should rest. (to a friend)", source: "You should rest.", answer: "Dovresti riposare.", altAnswers: ["Dovresti riposarti."], explanation: "\"Dovresti\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mi piacerei vivere a Roma\". Write it correctly: I'd like to live in Rome.", source: "I'd like to live in Rome.", answer: "Mi piacerebbe vivere a Roma.", altAnswers: ["Vorrei vivere a Roma."], explanation: "\"Piacerebbe\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Potrebbe mi dare il menù?\". Write it correctly: Could you give me the menu? (to a waiter)", source: "Could you give me the menu?", answer: "Mi potrebbe dare il menù?", altAnswers: ["Potrebbe darmi il menù?", "Mi potrebbe portare il menù?", "Potrebbe portarmi il menù?"], explanation: "Pronoun before or attached." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Voglio un bicchiere d'acqua!\" to a waiter. Make it polite: I'd like a glass of water, please.", source: "I'd like a glass of water, please.", answer: "Vorrei un bicchiere d'acqua, per favore.", explanation: "\"Vorrei\" softens the request." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Se io ero te, andrei\". Write it the A2 way: If I were you, I'd go. (to a friend)", source: "If I were you, I'd go.", answer: "Al tuo posto andrei.", altAnswers: ["Al posto tuo andrei.", "Io al tuo posto andrei."], explanation: "\"Al tuo posto\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Vorremo un tavolo per due\" at a restaurant. Write it correctly: We'd like a table for two.", source: "We'd like a table for two.", answer: "Vorremmo un tavolo per due.", explanation: "Conditional: double m." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like] those shoes.", sentence: "___ quelle scarpe.", answer: "Mi piacerebbero", altAnswers: ["Vorrei"], explanation: "Plural noun → \"piacerebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As a child I [would play] in the street.", sentence: "Da bambino ___ in strada.", answer: "giocavo", explanation: "Past habit → imperfetto, not conditional." },
      { type: "word-order", prompt: "Put the words in order to say: Could you help me with the suitcase?", words: ["Potresti", "aiutarmi", "con", "la", "valigia?"], translation: "Could you help me with the suitcase?", explanation: "\"Aiutarmi\": pronoun attached." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Lei dovrebbe parlare con il medico.", "Lei dovresti parlare con il medico.", "Lei dovrebbi parlare con il medico.", "Lei dovrà parlare con il medico?"], correctIndex: 0, explanation: "Lei → \"dovrebbe\"." },
      { type: "dictation", audio: "Mi potresti aiutare? Vorrei spostare il divano.", explanation: "\"Potresti\", \"vorrei\"." },
      { type: "speak", text: "Scusi, mi potrebbe aiutare? Vorremmo un tavolo per due.", prompt: "In a restaurant, say in Italian: Excuse me, could you help me? We'd like a table for two.", tip: "vor-REM-mo: double r, double m.", explanation: "Corrected polite requests." },
    ],
  },
  {
    slug: "a2-mission-polite-email",
    level: "IT-A2",
    number: 11,
    title: "Real-World Mission: A Polite Request by Email",
    summary: "Write to a language school in Firenze asking for information about courses and accommodation.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "Opening and request",
        body: [
          "You'd like to study Italian for a month at a school in Firenze. A formal email opens with \"Gentili signori\" (Dear Sir or Madam) or \"Buongiorno\", then says why you're writing: \"Vi scrivo perché vorrei avere informazioni sui vostri corsi\" (I'm writing because I'd like some information about your courses).",
          "The school is a group, so use \"voi\" verbs: \"Potreste dirmi ...?\" (could you tell me ...?), \"Mi potreste mandare ...?\". The conditional keeps every question polite.",
        ],
        examples: [
          { es: "Gentili signori,", en: "Dear Sir or Madam," },
          { es: "Vi scrivo perché vorrei avere informazioni sui vostri corsi.", en: "I'm writing because I'd like some information about your courses." },
          { es: "Mi piacerebbe frequentare un corso di quattro settimane a luglio.", en: "I'd like to attend a four-week course in July." },
          { es: "Potreste dirmi quanto costa?", en: "Could you tell me how much it costs?" },
          { es: "Mi potreste mandare il programma?", en: "Could you send me the programme?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to attend a four-week course in July.", answer: "Mi piacerebbe frequentare un corso di quattro settimane a luglio.", altAnswers: ["Vorrei frequentare un corso di quattro settimane a luglio.", "A luglio vorrei frequentare un corso di quattro settimane."], explanation: "\"Frequentare un corso\" = to attend a course." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you tell me] how much it costs?", sentence: "___ quanto costa?", answer: "Potreste dirmi", altAnswers: ["Mi potreste dire"], explanation: "Voi: \"potreste\"." },
        ],
      },
      {
        heading: "Details and closing",
        body: [
          "Add your needs: \"Avrei bisogno di un alloggio\" (I'd need accommodation), \"Preferirei una camera in famiglia\" (I'd prefer a room with a family), \"Sarebbe possibile arrivare il giorno prima?\" (would it be possible to arrive the day before?).",
          "Close with thanks and a formal goodbye: \"Vi ringrazio in anticipo\" (thank you in advance), \"Cordiali saluti\".",
        ],
        examples: [
          { es: "Avrei bisogno di un alloggio.", en: "I'd need accommodation." },
          { es: "Preferirei una camera in famiglia.", en: "I'd prefer a room with a family." },
          { es: "Sarebbe possibile arrivare il giorno prima?", en: "Would it be possible to arrive the day before?" },
          { es: "Vi ringrazio in anticipo. Cordiali saluti.", en: "Thank you in advance. Kind regards." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would it be possible to arrive the day before?", answer: "Sarebbe possibile arrivare il giorno prima?", explanation: "\"Sarebbe possibile\" + infinitive." },
          { type: "listen-choose", audio: "Preferirei una camera in famiglia.", question: "What does the student prefer?", options: ["a room with a family", "a single room in a hotel", "a flat on her own", "a room near the school"], correctIndex: 0, explanation: "\"In famiglia\" = with a host family." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm writing because I'd like some information about your courses.", answer: "Vi scrivo perché vorrei avere informazioni sui vostri corsi.", altAnswers: ["Vi scrivo perché vorrei informazioni sui vostri corsi.", "Vi scrivo perché vorrei avere delle informazioni sui vostri corsi."], explanation: "\"Vorrei\" + \"sui\" (su + i)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you send me the programme?", answer: "Mi potreste mandare il programma?", altAnswers: ["Potreste mandarmi il programma?", "Mi potreste inviare il programma?", "Potreste inviarmi il programma?"], explanation: "Voi: \"potreste\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd need accommodation.", answer: "Avrei bisogno di un alloggio.", explanation: "\"Avere bisogno di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd prefer a room with a family.", answer: "Preferirei una camera in famiglia.", explanation: "\"Preferir-\" + \"-ei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you in advance.", answer: "Vi ringrazio in anticipo.", altAnswers: ["Grazie in anticipo."], explanation: "\"Vi\" for the school." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I would be] free from 1 July.", sentence: "___ libero dal primo luglio.", answer: "Sarei", explanation: "\"Sarei\" = I would be." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would there be] a discount for students?", sentence: "___ uno sconto per studenti?", answer: "Ci sarebbe", explanation: "\"C'è\" → \"ci sarebbe\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like to know] the start dates.", sentence: "___ le date di inizio.", answer: "Vorrei sapere", altAnswers: ["Mi piacerebbe sapere", "Vorrei conoscere"], explanation: "\"Vorrei sapere\" + noun or question." },
      { type: "word-order", prompt: "Put the words in order to say: Would it be possible to arrive the day before?", words: ["Sarebbe", "possibile", "arrivare", "il", "giorno", "prima?"], translation: "Would it be possible to arrive the day before?", explanation: "\"Il giorno prima\" = the day before." },
      { type: "multiple-choice", question: "Which opening fits an email to a school?", options: ["Gentili signori,", "Ciao ragazzi!", "Caro amico,", "Ehi!"], correctIndex: 0, explanation: "Formal: \"Gentili signori\"." },
      { type: "dictation", audio: "Potreste dirmi quanto costa il corso?", explanation: "\"Potreste\": voi." },
      { type: "speak", text: "Buongiorno, vorrei avere informazioni sui corsi di luglio. Avrei anche bisogno di un alloggio.", prompt: "On the phone to the school, say in Italian: Good morning, I'd like some information about the July courses. I'd also need accommodation.", tip: "av-REI: one v, one r.", explanation: "\"Vorrei\" and \"avrei\" for polite requests." },
    ],
  },
];

export const IT_A2_U14_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write an email to a language school in Italy. Say why you're writing, what course you'd like to take and when, ask two polite questions (price, dates, accommodation, discounts) and close formally.",
  minWords: 50,
  maxWords: 100,
  rubric: [
    "Uses the conditional for polite requests (vorrei, mi piacerebbe, avrei bisogno di, preferirei)",
    "Asks at least two questions with potreste / sarebbe possibile / ci sarebbe",
    "Spells the conditional endings correctly, including the double m in -emmo if used",
    "Opens and closes formally (Gentili signori, Vi ringrazio, Cordiali saluti)",
  ],
  modelAnswer: "Gentili signori, vi scrivo perché vorrei avere informazioni sui vostri corsi di italiano. Mi piacerebbe frequentare un corso di quattro settimane ad agosto. Potreste dirmi quanto costa e quando comincia? Avrei bisogno anche di un alloggio: preferirei una camera in famiglia. Sarebbe possibile arrivare il giorno prima? Ci sarebbe uno sconto per chi resta più di un mese? Vi ringrazio in anticipo. Cordiali saluti, Emma Clark",
  explanation: "\"Vorrei\", \"mi piacerebbe\", \"avrei bisogno\" and \"preferirei\" make the requests polite; \"potreste\" addresses the school as a group, and \"sarebbe possibile\" and \"ci sarebbe\" turn questions into courteous enquiries.",
};
