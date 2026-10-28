// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u08-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 8 Extra Practice: Indirect Object Pronouns. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U08_EXTRA: Lesson[] = [
  {
    slug: "a2-indirect-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Indirect Pronouns",
    summary: "Fresh sentences replacing a + person with mi, ti, gli, le, Le, ci, vi.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "To whom?",
        body: [
          "Find the \"a\" + person and replace it: \"a Paolo\" → \"gli\", \"a Lucia\" → \"le\", \"ai colleghi\" → \"gli\". New verbs with \"a\": \"augurare\" (to wish), \"consigliare\" (to advise, recommend), \"restituire\" (to give back), \"insegnare\" (to teach), \"mostrare\" (to show).",
        ],
        examples: [
          { es: "Gli auguro buona fortuna.", en: "I wish him good luck." },
          { es: "Le consiglio questo ristorante.", en: "I recommend this restaurant to her." },
          { es: "Ti restituisco il libro domani.", en: "I'll give you the book back tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wish him good luck.", answer: "Gli auguro buona fortuna.", explanation: "\"Augurare a\" → \"gli\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll give you the book back tomorrow. (to a friend)", answer: "Ti restituisco il libro domani.", altAnswers: ["Domani ti restituisco il libro.", "Ti ridò il libro domani."], explanation: "\"Restituire\": -isc- verb." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I recommend this restaurant to her.", answer: "Le consiglio questo ristorante.", explanation: "\"Consigliare a\" → \"le\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Madam, I recommend the fish. (a waiter speaking)", answer: "Signora, Le consiglio il pesce.", altAnswers: ["Signora, le consiglio il pesce."], explanation: "Formal \"Le\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandfather taught me to swim.", answer: "Mio nonno mi ha insegnato a nuotare.", explanation: "\"Insegnare a qualcuno a fare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you show us the way? (to a passer-by, formal)", answer: "Ci può mostrare la strada?", altAnswers: ["Può mostrarci la strada?", "Ci può indicare la strada?", "Può indicarci la strada?"], explanation: "\"Ci\" = to us." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My colleagues? I wished them a happy Christmas.", answer: "I miei colleghi? Gli ho augurato buon Natale.", altAnswers: ["I colleghi? Gli ho augurato buon Natale.", "I miei colleghi? Ho augurato loro buon Natale."], explanation: "\"Gli\" = to them." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lucia? I gave her back the umbrella.", answer: "Lucia? Le ho restituito l'ombrello.", altAnswers: ["Lucia? Le ho ridato l'ombrello."], explanation: "No agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did the doctor advise you? (to a friend)", answer: "Cosa ti ha consigliato il medico?", altAnswers: ["Che cosa ti ha consigliato il medico?", "Cosa ti ha consigliato il dottore?"], explanation: "\"Ti ha consigliato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your parents? I'll write them a postcard.", answer: "I tuoi genitori? Gli scrivo una cartolina.", altAnswers: ["I tuoi? Gli scrivo una cartolina.", "I tuoi genitori? Scrivo loro una cartolina."], explanation: "\"Gli\" = to them." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Paolo? [I showed him] the photos.", sentence: "Paolo? ___ le foto.", answer: "Gli ho mostrato", altAnswers: ["Gli ho fatto vedere"], explanation: "\"Mostrare a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who [taught you] Italian? (to a friend)", sentence: "Chi ___ l'italiano?", answer: "ti ha insegnato", explanation: "\"Insegnare a\" → \"ti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My aunt? [I'm making her] a cake.", sentence: "Mia zia? ___ una torta.", answer: "Le faccio", altAnswers: ["Le preparo"], explanation: "\"Fare qualcosa a / per qualcuno\"." },
      { type: "word-order", prompt: "Put the words in order to say: We wish you a good journey. (to friends)", words: ["Vi", "auguriamo", "buon", "viaggio."], translation: "We wish you a good journey.", explanation: "\"Vi\" = to you all." },
      { type: "multiple-choice", question: "\"Ho restituito il libro a Marco e a Luca.\" → ?", options: ["Gli ho restituito il libro.", "Li ho restituito il libro.", "Le ho restituito il libro.", "Gli ho restituiti il libro."], correctIndex: 0, explanation: "\"Gli\" = to them; no agreement." },
      { type: "dictation", audio: "Le consiglio questo ristorante, è ottimo.", explanation: "\"Le consiglio\"." },
      { type: "speak", text: "Gli ho augurato buon compleanno e gli ho regalato un libro.", prompt: "Say it in Italian: I wished him a happy birthday and gave him a book.", tip: "Gli twice, no agreement.", explanation: "\"Augurare a\", \"regalare a\"." },
    ],
  },
  {
    slug: "a2-indirect-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Mancare, Servire, Sembrare",
    summary: "Fresh sentences with verbs like piacere: mancare, servire, sembrare, interessare, bastare, dispiacere.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The thing does the verb",
        body: [
          "The thing (or person) missed, needed, enough or interesting is the subject; the person who feels it is the indirect pronoun. Singular subject → \"manca, serve, sembra, basta\"; plural → \"mancano, servono, sembrano, bastano\". In the past, essere + agreement: \"mi è servita\", \"ci sono mancati\".",
        ],
        examples: [
          { es: "Ai bambini manca il mare.", en: "The children miss the sea." },
          { es: "Ti sembrano care queste scarpe?", en: "Do these shoes seem expensive to you?" },
          { es: "Ci è servita la tua mappa.", en: "Your map was useful to us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children miss the sea.", answer: "Ai bambini manca il mare.", altAnswers: ["Ai bambini manca tanto il mare.", "Il mare manca ai bambini."], explanation: "\"Il mare\" is the subject." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Your map [was useful to us].", sentence: "La tua mappa ___.", answer: "ci è servita", explanation: "Essere + agreement with \"mappa\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do these shoes seem expensive to you? (to a friend)", answer: "Ti sembrano care queste scarpe?", altAnswers: ["Queste scarpe ti sembrano care?"], explanation: "Plural subject: \"sembrano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you need anything? (to a friend)", answer: "Ti serve qualcosa?", altAnswers: ["Ti serve niente?", "Hai bisogno di qualcosa?"], explanation: "\"Servire\" like \"piacere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She misses her parents.", answer: "Le mancano i suoi genitori.", altAnswers: ["Le mancano i genitori."], explanation: "\"Le mancano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two hours are enough for us.", answer: "Ci bastano due ore.", altAnswers: ["Due ore ci bastano."], explanation: "Plural: \"bastano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry, I can't come.", answer: "Mi dispiace, non posso venire.", explanation: "\"Mi dispiace\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He isn't interested in fashion.", answer: "Non gli interessa la moda.", altAnswers: ["La moda non gli interessa."], explanation: "\"Gli interessa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We missed you! (to a friend)", answer: "Ci sei mancato!", altAnswers: ["Ci sei mancata!", "Ci sei mancato tanto!", "Ci sei mancata tanto!"], explanation: "\"Tu\" is the subject: \"sei mancato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film seemed long to me.", answer: "Il film mi è sembrato lungo.", altAnswers: ["Mi è sembrato lungo il film."], explanation: "Essere + agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We need] some eggs for the cake.", sentence: "___ delle uova per la torta.", answer: "Ci servono", explanation: "Plural subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you mind] if I sit here? (formal)", sentence: "___ se mi siedo qui?", answer: "Le dispiace", explanation: "Formal \"Le\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [missed] the Italian coffee a lot.", sentence: "Mi è ___ molto il caffè italiano.", answer: "mancato", explanation: "Agreement with \"il caffè\"." },
      { type: "word-order", prompt: "Put the words in order to say: Does this price seem right to you? (to a friend)", words: ["Ti", "sembra", "giusto", "questo", "prezzo?"], translation: "Does this price seem right to you?", explanation: "\"Sembrare\" + \"ti\"." },
      { type: "multiple-choice", question: "I needed the dictionary. Which is right?", options: ["Mi è servito il dizionario.", "Mi ha servito il dizionario.", "Ho servito il dizionario.", "Mi sono servito il dizionario."], correctIndex: 0, explanation: "Essere + agreement." },
      { type: "listen-choose", audio: "Ci mancano tanto i nostri nonni.", question: "Who do they miss?", options: ["their grandparents", "their parents", "their friends", "their children"], correctIndex: 0, explanation: "\"I nostri nonni\"." },
      { type: "speak", text: "Mi manca l'Italia, ma mi servono ancora due mesi qui.", prompt: "Say it in Italian: I miss Italy, but I still need two more months here.", tip: "Manca (singular), servono (plural).", explanation: "Two piacere-type verbs." },
    ],
  },
  {
    slug: "a2-indirect-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Lo or Gli?",
    summary: "Mixed practice choosing between direct and indirect pronouns.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Direct or indirect?",
        body: [
          "No \"a\" in the Italian verb → \"lo, la, li, le\" (agreement in the past). \"A\" + person → \"gli, le\" (no agreement). Traps: \"aiutare\", \"ringraziare\", \"salutare\", \"ascoltare\", \"aspettare\" are direct; \"telefonare\", \"rispondere\", \"credere\", \"insegnare\" take \"a\".",
        ],
        examples: [
          { es: "Lo saluto e gli stringo la mano.", en: "I greet him and shake his hand." },
          { es: "La ascolto, ma non le credo.", en: "I listen to her, but I don't believe her." },
          { es: "Li ho aspettati e gli ho telefonato.", en: "I waited for them and phoned them." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I listen to her, but I don't believe her.", answer: "La ascolto, ma non le credo.", altAnswers: ["L'ascolto, ma non le credo."], explanation: "\"Ascoltare\": direct; \"credere a\": indirect." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I waited for them and [phoned them].", sentence: "Li ho aspettati e ___.", answer: "gli ho telefonato", explanation: "Indirect, no agreement." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I greet him and shake his hand.", answer: "Lo saluto e gli stringo la mano.", explanation: "\"Salutare\": direct; \"stringere la mano a\": indirect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My teacher? I thanked her and gave her some flowers.", answer: "La mia insegnante? L'ho ringraziata e le ho dato dei fiori.", altAnswers: ["La mia professoressa? L'ho ringraziata e le ho dato dei fiori.", "La mia maestra? L'ho ringraziata e le ho dato dei fiori.", "La mia insegnante? L'ho ringraziata e le ho regalato dei fiori."], explanation: "Direct + agreement; indirect, none." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paolo? I'm helping him with the move.", answer: "Paolo? Lo aiuto con il trasloco.", altAnswers: ["Paolo? L'aiuto con il trasloco.", "Paolo? Lo aiuto col trasloco."], explanation: "\"Aiutare\": direct." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paolo? I lent him my car for the move.", answer: "Paolo? Gli ho prestato la macchina per il trasloco.", altAnswers: ["Paolo? Gli ho prestato la mia macchina per il trasloco.", "Paolo? Gli ho prestato l'auto per il trasloco."], explanation: "\"Prestare a\": indirect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The students? I teach them Italian.", answer: "Gli studenti? Gli insegno l'italiano.", altAnswers: ["Gli studenti? Insegno loro l'italiano.", "Gli studenti? Gli insegno italiano."], explanation: "\"Insegnare a\" → \"gli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The students? I met them on Monday.", answer: "Gli studenti? Li ho conosciuti lunedì.", altAnswers: ["Gli studenti? Li ho incontrati lunedì."], explanation: "Direct \"li\" + agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you answer Laura? No, but I'll call her tonight.", answer: "Hai risposto a Laura? No, ma la chiamo stasera.", altAnswers: ["Hai risposto a Laura? No, però la chiamo stasera."], explanation: "\"Rispondere a\", then direct \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girls? I'm waiting for them at the bar.", answer: "Le ragazze? Le aspetto al bar.", explanation: "\"Aspettare\": direct." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My mother? [I called her] and wished her a happy birthday.", sentence: "Mia madre? ___ e le ho fatto gli auguri.", answer: "L'ho chiamata", altAnswers: ["L'ho sentita"], explanation: "Direct + agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco? [I believe him].", sentence: "Marco? ___.", answer: "Gli credo", explanation: "\"Credere a\" → \"gli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My neighbours? [I said hello to them] this morning.", sentence: "I miei vicini? ___ stamattina.", answer: "Li ho salutati", explanation: "\"Salutare\": direct." },
      { type: "word-order", prompt: "Put the words in order to say: I invited her and she said yes to me.", words: ["L'ho", "invitata", "e", "mi", "ha", "detto", "di", "sì."], translation: "I invited her and she said yes to me.", explanation: "Direct \"l'\", indirect \"mi\"." },
      { type: "multiple-choice", question: "\"Ho ascoltato i miei genitori.\" → ?", options: ["Li ho ascoltati.", "Gli ho ascoltato.", "Gli ho ascoltati.", "Li ho ascoltato."], correctIndex: 0, explanation: "\"Ascoltare\" is direct." },
      { type: "dictation", audio: "La ascolto, ma non le credo.", explanation: "\"La\" direct, \"le\" indirect." },
      { type: "speak", text: "L'ho aiutato con i bagagli e lui mi ha offerto un caffè.", prompt: "Say it in Italian: I helped him with the luggage and he bought me a coffee.", tip: "Aiutare: direct. Offrire a: indirect.", explanation: "\"L'ho aiutato\", \"mi ha offerto\"." },
    ],
  },
];
