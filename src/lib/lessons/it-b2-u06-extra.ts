// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u06-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 6 Extra Practice: Come Se, Qualora, Chiunque. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U06_EXTRA: Lesson[] = [
  {
    slug: "b2-subjunctive-expressions-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Come Se",
    summary: "Fresh sentences with come se + imperfect or pluperfect subjunctive.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "As if, as though",
        body: [
          "\"Come se\" always takes the subjunctive, whatever the tense of the main verb. Use the imperfect subjunctive for something happening at the same time (\"come se fosse\") and the pluperfect for something before (\"come se non fosse successo niente\").",
        ],
        examples: [
          { es: "Parla come se sapesse tutto.", en: "He talks as if he knew everything." },
          { es: "Mi ha salutato come se non ci fossimo mai conosciuti.", en: "She greeted me as if we'd never met." },
          { es: "Spende come se fosse ricco.", en: "He spends as if he were rich." },
          { es: "Faceva freddo come se fosse gennaio.", en: "It was as cold as if it were January." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He talks as if he knew everything.", answer: "Parla come se sapesse tutto.", altAnswers: ["Lui parla come se sapesse tutto."], explanation: "\"Come se\" + imperfect subjunctive \"sapesse\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She greeted me as if we'd never met.", answer: "Mi ha salutato come se non ci fossimo mai conosciuti.", altAnswers: ["Mi ha salutata come se non ci fossimo mai conosciuti.", "Mi ha salutato come se non ci fossimo mai conosciute.", "Mi ha salutata come se non ci fossimo mai conosciute."], explanation: "Something before → pluperfect \"ci fossimo conosciuti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He spends as if he were rich.", answer: "Spende come se fosse ricco.", explanation: "\"Come se fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You (a friend) are eating as if you hadn't eaten for a week.", answer: "Mangi come se non mangiassi da una settimana.", altAnswers: ["Mangi come se non avessi mangiato per una settimana.", "Stai mangiando come se non mangiassi da una settimana."], explanation: "\"Da una settimana\" with the imperfect subjunctive: an ongoing state." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They looked at us as if we were mad.", answer: "Ci guardavano come se fossimo matti.", altAnswers: ["Ci hanno guardato come se fossimo matti.", "Ci guardavano come se fossimo pazzi.", "Ci hanno guardati come se fossimo matti."], explanation: "\"Come se fossimo\": same time as the looking." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He behaved as if nothing had happened.", answer: "Si è comportato come se non fosse successo niente.", altAnswers: ["Si è comportato come se non fosse successo nulla.", "Si comportava come se non fosse successo niente."], explanation: "Before the behaving → \"fosse successo\". Note \"non ... niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's as if time had stopped.", answer: "È come se il tempo si fosse fermato.", explanation: "\"È come se\" + pluperfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's running as if she had a train to catch.", answer: "Corre come se dovesse prendere un treno.", altAnswers: ["Sta correndo come se dovesse prendere un treno.", "Corre come se avesse un treno da prendere."], explanation: "\"Dovesse\": imperfect subjunctive of \"dovere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't treat me as if I were a child. (to a friend)", answer: "Non trattarmi come se fossi un bambino.", altAnswers: ["Non trattarmi come se fossi una bambina.", "Non mi trattare come se fossi un bambino.", "Non mi trattare come se fossi una bambina."], explanation: "Negative informal imperative + \"come se fossi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The house was silent, as if everyone had gone out.", answer: "La casa era silenziosa, come se fossero usciti tutti.", altAnswers: ["La casa era silenziosa, come se tutti fossero usciti.", "La casa era in silenzio, come se fossero usciti tutti."], explanation: "\"Fossero usciti\": essere + agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He answered as if he [hadn't heard] the question.", sentence: "Ha risposto come se non ___ la domanda.", answer: "avesse sentito", altAnswers: ["avesse capito"], explanation: "Pluperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We get on as if we [were] sisters.", sentence: "Andiamo d'accordo come se ___ sorelle.", answer: "fossimo", explanation: "\"Noi\" → \"fossimo\"." },
      { type: "word-order", prompt: "Put the words in order to say: You talk as if you lived here.", words: ["Parli", "come", "se", "abitassi", "qui."], translation: "You talk as if you lived here.", explanation: "\"Come se\" + \"abitassi\"." },
      { type: "multiple-choice", question: "Which completes \"Mi guarda come se ___ qualcosa di strano\"?", options: ["avessi detto", "ho detto", "dico", "avrei detto"], correctIndex: 0, explanation: "\"Come se\" never takes the indicative or conditional." },
      { type: "listen-choose", audio: "Si comporta come se fosse il padrone di casa.", question: "What is the speaker complaining about?", options: ["Someone acts like he owns the place.", "Someone is the landlord.", "Someone wants to buy a house.", "Someone never comes home."], correctIndex: 0, explanation: "\"Come se fosse il padrone\": but he isn't." },
      { type: "dictation", audio: "Ha piovuto tutta la notte, come se non dovesse smettere mai.", explanation: "\"Come se\" + \"dovesse\"." },
      { type: "speak", text: "Parla come se fosse il capo, ma è arrivato solo un mese fa.", prompt: "Say it in Italian: He talks as if he were the boss, but he only arrived a month ago.", tip: "Stress \"FOS-se\" with a clear double s.", explanation: "Imperfect subjunctive after \"come se\"." },
    ],
  },
  {
    slug: "b2-subjunctive-expressions-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Qualora, Chiunque",
    summary: "Fresh sentences with qualora, nel caso in cui, chiunque, qualunque and dovunque.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Formal conditions and open choices",
        body: [
          "\"Qualora\" and \"nel caso in cui\" (or just \"nel caso\") mean in the event that and take the subjunctive. \"Chiunque\", \"qualunque\" (or \"qualsiasi\") and \"dovunque\" also take the subjunctive: \"chiunque venga\", \"qualunque cosa succeda\", \"dovunque tu vada\".",
        ],
        examples: [
          { es: "Qualora il volo fosse cancellato, Le rimborseremo il biglietto.", en: "Should the flight be cancelled, we will refund your ticket." },
          { es: "Nel caso in cui tu abbia bisogno, chiamami.", en: "In case you need anything, call me." },
          { es: "Chiunque abbia trovato le chiavi è pregato di riportarle.", en: "Whoever found the keys is asked to bring them back." },
          { es: "Dovunque tu vada, ti seguirò.", en: "Wherever you go, I'll follow you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In case you need anything, call me.", answer: "Nel caso in cui tu abbia bisogno, chiamami.", altAnswers: ["Nel caso tu abbia bisogno, chiamami.", "Nel caso in cui tu abbia bisogno di qualcosa, chiamami.", "Nel caso tu abbia bisogno di qualcosa, chiamami."], explanation: "\"Nel caso (in cui)\" + present subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wherever you go, I'll follow you.", answer: "Dovunque tu vada, ti seguirò.", altAnswers: ["Ovunque tu vada, ti seguirò.", "Dovunque vada, ti seguirò."], explanation: "\"Dovunque\" + \"vada\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Should the payment be late, a fee will be applied.", answer: "Qualora il pagamento fosse in ritardo, sarà applicata una penale.", altAnswers: ["Qualora il pagamento sia in ritardo, sarà applicata una penale.", "Qualora il pagamento fosse in ritardo, verrà applicata una penale.", "Qualora il pagamento sia in ritardo, verrà applicata una penale."], explanation: "\"Qualora\" + present or imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In case it rains, the concert will be held indoors.", answer: "Nel caso in cui piova, il concerto si terrà al chiuso.", altAnswers: ["Nel caso piova, il concerto si terrà al chiuso.", "Qualora piova, il concerto si terrà al chiuso.", "Nel caso in cui piova, il concerto si terrà al coperto."], explanation: "\"Tenersi\" = to be held." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever it is, tell them I'm not in.", answer: "Chiunque sia, digli che non ci sono.", altAnswers: ["Chiunque sia, di' che non ci sono.", "Chiunque sia, dì che non ci sono."], explanation: "\"Chiunque sia\": fixed phrase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whatever happens, I'll be with you. (to a friend)", answer: "Qualunque cosa succeda, sarò con te.", altAnswers: ["Qualsiasi cosa succeda, sarò con te.", "Qualunque cosa accada, sarò con te.", "Qualsiasi cosa accada, sarò con te."], explanation: "\"Qualunque cosa\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whatever you decide, we'll support you.", answer: "Qualunque cosa tu decida, ti sosterremo.", altAnswers: ["Qualsiasi cosa tu decida, ti sosterremo.", "Qualunque cosa tu decida, ti appoggeremo."], explanation: "\"Tu decida\": keep \"tu\" for clarity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever wants to come is welcome.", answer: "Chiunque voglia venire è il benvenuto.", altAnswers: ["Chi vuole venire è il benvenuto.", "Chiunque voglia venire è benvenuto."], explanation: "\"Chiunque voglia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Should you have any questions, please contact us. (formal)", answer: "Qualora avesse domande, La preghiamo di contattarci.", altAnswers: ["Qualora abbia domande, La preghiamo di contattarci.", "Qualora avesse delle domande, La preghiamo di contattarci.", "Qualora avesse domande, la preghiamo di contattarci."], explanation: "Formal \"Lei\": \"avesse\", \"La preghiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wherever I look, I see tourists.", answer: "Dovunque guardi, vedo turisti.", altAnswers: ["Ovunque guardi, vedo turisti.", "Dovunque io guardi, vedo turisti.", "Ovunque io guardi, vedo turisti.", "Dovunque guardi, vedo dei turisti."], explanation: "\"Dovunque\" + \"guardi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Should the item [arrive] damaged, we will replace it.", sentence: "Qualora l'articolo ___ danneggiato, lo sostituiremo.", answer: "arrivasse", altAnswers: ["arrivi"], explanation: "\"Qualora\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Whoever [has seen] the accident should call the police.", sentence: "Chiunque ___ l'incidente dovrebbe chiamare la polizia.", answer: "abbia visto", explanation: "Past subjunctive: the seeing came first." },
      { type: "matching", instructions: "Match the halves.", pairs: [{ left: "Chiunque", right: "tu sia" }, { left: "Qualunque cosa", right: "tu dica" }, { left: "Dovunque", right: "tu vada" }, { left: "Qualora", right: "tu non possa venire" }], explanation: "All four take the subjunctive." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Qualora ci fossero problemi, ci avvisi.", "Qualora ci sono problemi, ci avvisi.", "Qualora ci saranno problemi, ci avvisi.", "Qualora ci sarebbero problemi, ci avvisi."], correctIndex: 0, explanation: "\"Qualora\" + subjunctive, never indicative or conditional." },
      { type: "listen-choose", audio: "Nel caso in cui il treno sia in ritardo, prendete un taxi.", question: "What should they do if the train is late?", options: ["Take a taxi.", "Wait at the station.", "Call home.", "Take the bus."], correctIndex: 0, explanation: "\"Prendete un taxi\"." },
      { type: "dictation", audio: "Qualunque cosa tu scelga, sarà la scelta giusta.", explanation: "\"Qualunque cosa\" + \"scelga\"." },
      { type: "speak", text: "Qualora non potesse partecipare, La preghiamo di avvisarci entro venerdì.", prompt: "Say it in Italian (formal): Should you be unable to attend, please let us know by Friday.", tip: "Formal register: \"La preghiamo di\" + infinitive.", explanation: "\"Qualora\" + imperfect subjunctive." },
    ],
  },
  {
    slug: "b2-subjunctive-expressions-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Mixed",
    summary: "Come se, qualora, chiunque, purché and the only one who, all together.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Every expression in one place",
        body: [
          "All of these take the subjunctive: \"come se\", \"qualora\", \"nel caso (in cui)\", \"purché\", \"a patto che\", \"ammesso che\", \"chiunque\", \"qualunque\", \"dovunque\", and \"l'unico / il primo / il più ... che\". With the last group the indicative is common in speech, but the subjunctive is expected in writing.",
        ],
        examples: [
          { es: "È il libro più bello che abbia mai letto.", en: "It's the best book I've ever read." },
          { es: "Ti presto la macchina, purché tu me la riporti stasera.", en: "I'll lend you the car, as long as you bring it back tonight." },
          { es: "Ammesso che arrivi in tempo, ceneremo alle otto.", en: "Assuming he arrives on time, we'll have dinner at eight." },
          { es: "Sei l'unica persona che mi capisca davvero.", en: "You're the only person who really understands me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the best book I've ever read.", answer: "È il libro più bello che abbia mai letto.", altAnswers: ["È il più bel libro che abbia mai letto.", "È il libro più bello che io abbia mai letto.", "È il più bel libro che io abbia mai letto."], explanation: "Superlative + \"che\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll lend you the car, as long as you bring it back tonight.", answer: "Ti presto la macchina, purché tu me la riporti stasera.", altAnswers: ["Ti presto la macchina purché me la riporti stasera.", "Ti presto la macchina, a patto che tu me la riporti stasera.", "Ti presto la macchina, a patto che me la riporti stasera."], explanation: "\"Purché\" + \"riporti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Assuming he arrives on time, we'll have dinner at eight.", answer: "Ammesso che arrivi in tempo, ceneremo alle otto.", altAnswers: ["Ammesso che arrivi in orario, ceneremo alle otto.", "Ammesso che lui arrivi in tempo, ceneremo alle otto."], explanation: "\"Ammesso che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're the only person who really understands me.", answer: "Sei l'unica persona che mi capisca davvero.", altAnswers: ["Sei l'unica persona che mi capisce davvero.", "Tu sei l'unica persona che mi capisca davvero."], explanation: "\"L'unica ... che\" + subjunctive in careful style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She was the first woman who won the prize.", answer: "È stata la prima donna che abbia vinto il premio.", altAnswers: ["È stata la prima donna a vincere il premio.", "Fu la prima donna a vincere il premio.", "È stata la prima donna che ha vinto il premio."], explanation: "\"La prima a\" + infinitive is the most natural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He acts as if he owned the company.", answer: "Si comporta come se l'azienda fosse sua.", altAnswers: ["Si comporta come se fosse il padrone dell'azienda.", "Si comporta come se possedesse l'azienda."], explanation: "\"Come se\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Should you change your mind, let me know. (to a friend)", answer: "Qualora cambiassi idea, fammelo sapere.", altAnswers: ["Nel caso cambiassi idea, fammelo sapere.", "Nel caso in cui cambiassi idea, fammelo sapere.", "Se dovessi cambiare idea, fammelo sapere.", "Qualora cambiassi idea, fammi sapere."], explanation: "\"Fammelo sapere\": imperative + pronouns." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever called, I'm not answering.", answer: "Chiunque abbia chiamato, non rispondo.", explanation: "Past subjunctive \"abbia chiamato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can go out, as long as it doesn't rain.", answer: "Possiamo uscire, purché non piova.", altAnswers: ["Possiamo uscire purché non piova.", "Possiamo uscire, a patto che non piova."], explanation: "\"Purché non piova\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the worst film I've ever seen.", answer: "È il film peggiore che abbia mai visto.", altAnswers: ["È il peggior film che abbia mai visto.", "È il film peggiore che io abbia mai visto.", "È il peggior film che io abbia mai visto."], explanation: "\"Peggiore\" + \"che abbia mai visto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He was shouting as if the house [were on] fire.", sentence: "Gridava come se la casa ___ a fuoco.", answer: "andasse", altAnswers: ["fosse"], explanation: "\"Andare a fuoco\" → \"andasse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's the last thing I [would expect].", sentence: "È l'ultima cosa che mi ___.", answer: "aspetti", altAnswers: ["aspetterei"], explanation: "\"L'ultima cosa che\" + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: Whatever happens, call me.", words: ["Qualunque", "cosa", "succeda,", "chiamami."], translation: "Whatever happens, call me.", explanation: "\"Qualunque cosa\" + subjunctive." },
      { type: "multi-select", question: "Which sentences are correct in careful written Italian?", options: ["Chiunque venga, apri la porta.", "Parla come se è stanco.", "Qualora fosse necessario, La contatteremo.", "Chiunque viene è il benvenuto."], correctIndexes: [0, 2], explanation: "\"Come se è\" needs \"fosse\"; \"chiunque viene\" needs \"venga\"." },
      { type: "listen-choose", audio: "Ti aspetto, purché tu non faccia tardi come al solito.", question: "What is the speaker's condition?", options: ["Don't be late as usual.", "Bring something to eat.", "Call before coming.", "Come alone."], correctIndex: 0, explanation: "\"Purché tu non faccia tardi\"." },
      { type: "dictation", audio: "Dovunque andassimo, trovavamo qualcuno che parlasse inglese.", explanation: "Imperfect subjunctive after past main verbs." },
      { type: "speak", text: "È la città più bella che abbia mai visitato, ma ci tornerei solo in primavera.", prompt: "Say it in Italian: It's the most beautiful city I've ever visited, but I'd only go back in spring.", tip: "\"Abbia mai visitato\": subjunctive after a superlative.", explanation: "Superlative + subjunctive, then a conditional." },
    ],
  },
];
