// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u10.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 10: The Subjunctive, Part 4: Impersonal Phrases. È
// importante / necessario / possibile / probabile / meglio / un peccato /
// strano che + subjunctive, bisogna / occorre che, sembra che, può darsi che;
// the infinitive with no specific subject; è vero / chiaro / evidente che +
// indicative. Conventions: docs/italian-course/authoring.md.
export const IT_B1_U10: Lesson[] = [
  {
    slug: "b1-impersonal-subjunctive",
    level: "IT-B1",
    number: 1,
    title: "It's Important That",
    summary: "È importante che tu dorma, è meglio che partiamo presto, è possibile che piova.",
    duration: "17 min",
    sections: [
      {
        heading: "È + adjective + che",
        body: [
          "Impersonal phrases with \"è\" + adjective judge an action: is it important, necessary, possible, better? When the action belongs to a specific person, add \"che\" + subjunctive: \"È importante che tu dorma\" (It's important that you sleep), \"È necessario che firmiate qui\".",
          "The most common: \"è importante che\", \"è necessario che\", \"è meglio che\", \"è possibile che\", \"è probabile che\", \"è un peccato che\" (it's a pity that), \"è strano che\" (it's strange that).",
          "English often says it's important for you to sleep. Don't copy the for: Italian puts the person after \"che\" (\"È importante che tu dorma\"). One false friend: \"è facile che\" doesn't mean it's easy that but it's likely that: \"È facile che piova\" (It'll probably rain). And remember that the \"noi\" subjunctive looks like the present: \"È meglio che andiamo\" is already correct.",
        ],
        examples: [
          { es: "È importante che tu dorma almeno otto ore.", en: "It's important that you sleep at least eight hours." },
          { es: "È meglio che partiamo presto.", en: "We'd better leave early." },
          { es: "È possibile che piova nel pomeriggio.", en: "It may rain in the afternoon." },
          { es: "È un peccato che tu non possa restare.", en: "It's a pity you can't stay." },
          { es: "È strano che Marco non risponda.", en: "It's strange that Marco isn't answering." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd better leave early.", answer: "È meglio che partiamo presto.", altAnswers: ["È meglio che andiamo via presto."], explanation: "\"È meglio che\" + subjunctive (noi = present form)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a pity you can't stay. (to a friend)", answer: "È un peccato che tu non possa restare.", altAnswers: ["È un peccato che tu non possa rimanere.", "Peccato che tu non possa restare."], explanation: "\"Possa\"." },
        ],
      },
      {
        heading: "Bisogna che, occorre che",
        body: [
          "\"Bisogna che\" and \"occorre che\" (it's necessary that) are verbs, not \"è\" + adjective, but they work the same way: \"Bisogna che tu parli con lui\" (You need to talk to him). \"Occorre\" is more formal and common in written instructions.",
          "\"È probabile che\" expresses likelihood: \"È probabile che arrivino tardi\" (They'll probably arrive late).",
        ],
        examples: [
          { es: "Bisogna che tu parli con lui.", en: "You need to talk to him." },
          { es: "Occorre che i documenti siano firmati.", en: "The documents must be signed." },
          { es: "È probabile che arrivino tardi.", en: "They'll probably arrive late." },
          { es: "È necessario che firmiate qui.", en: "You need to sign here. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to talk to him. (to a friend)", answer: "Bisogna che tu parli con lui.", altAnswers: ["È necessario che tu parli con lui.", "Bisogna che gli parli."], explanation: "\"Bisogna che\" + subjunctive." },
          { type: "listen-choose", audio: "È probabile che arrivino tardi.", question: "What does the speaker think?", options: ["They'll probably be late.", "They'll certainly be on time.", "They arrived late.", "They won't come."], correctIndex: 0, explanation: "\"È probabile che\"." },
        ],
      },
      {
        heading: "Short forms in speech",
        body: [
          "In conversation Italians often drop the \"è\": \"Peccato che piova!\", \"Meglio che tu vada\", \"Strano che non chiami\". The subjunctive stays.",
          "\"Peccato!\" alone means what a pity, and \"Meglio così\" means it's better that way.",
        ],
        examples: [
          { es: "Peccato che piova!", en: "Too bad it's raining!" },
          { es: "Meglio che tu vada adesso.", en: "You'd better go now." },
          { es: "Strano che non chiami.", en: "Strange that she isn't calling." },
          { es: "Non viene? Meglio così.", en: "He's not coming? All the better." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Too bad it's raining!", answer: "Peccato che piova!", altAnswers: ["È un peccato che piova!"], explanation: "Short form, same subjunctive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Strange that she [isn't calling].", sentence: "Strano che non ___.", answer: "chiami", explanation: "\"Chiami\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that you sleep at least eight hours. (to a friend)", answer: "È importante che tu dorma almeno otto ore.", explanation: "\"Dorma\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It may rain in the afternoon.", answer: "È possibile che piova nel pomeriggio.", altAnswers: ["È possibile che piova oggi pomeriggio.", "Può darsi che piova nel pomeriggio."], explanation: "\"Piova\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange that Marco isn't answering.", answer: "È strano che Marco non risponda.", explanation: "\"Risponda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They'll probably arrive late.", answer: "È probabile che arrivino tardi.", altAnswers: ["È probabile che arrivino in ritardo."], explanation: "\"Arrivino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to sign here. (plural)", answer: "È necessario che firmiate qui.", altAnswers: ["Bisogna che firmiate qui.", "Occorre che firmiate qui."], explanation: "\"Firmiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better that you tell her the truth. (to a friend)", answer: "È meglio che tu le dica la verità.", altAnswers: ["È meglio che le dica la verità."], explanation: "\"Dica\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a pity the museum is closed.", answer: "È un peccato che il museo sia chiuso.", altAnswers: ["Peccato che il museo sia chiuso."], explanation: "\"Sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The documents must [be] signed.", sentence: "Occorre che i documenti ___ firmati.", answer: "siano", explanation: "\"Siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's important that the children [eat] vegetables.", sentence: "È importante che i bambini ___ la verdura.", answer: "mangino", explanation: "\"Mangino\"." },
      { type: "multiple-choice", question: "\"È strano che non ___ nessuno.\" (there's nobody)", options: ["ci sia", "c'è", "esserci", "ci siano"], correctIndex: 0, explanation: "\"C'è\" → \"ci sia\"." },
      { type: "dictation", audio: "È meglio che partiamo presto, perché è probabile che ci sia traffico.", explanation: "\"Partiamo\", \"ci sia\"." },
      { type: "speak", text: "È un peccato che tu non possa restare, ma è importante che tu riposi.", prompt: "Say it in Italian: It's a pity you can't stay, but it's important that you rest.", tip: "pec-CA-to.", explanation: "\"Possa\", \"riposi\"." },
    ],
  },
  {
    slug: "b1-impersonal-infinitive",
    level: "IT-B1",
    number: 2,
    title: "Impersonal + Infinitive",
    summary: "È importante dormire, bisogna prenotare, è vietato fumare: no specific subject, no che.",
    duration: "17 min",
    sections: [
      {
        heading: "No specific person: no che",
        body: [
          "When the advice is general, for everyone, there's no subject and no \"che\": just the infinitive. \"È importante dormire\" (It's important to sleep), \"Bisogna prenotare\" (You need to book), \"È meglio partire presto\".",
          "Compare: \"È importante dormire\" (for anyone) / \"È importante che tu dorma\" (for you in particular). Note there's no \"di\": not \"è importante di dormire\".",
          "A middle way puts an indirect pronoun before the phrase and keeps the infinitive: \"Mi è difficile capire\" (It's hard for me to understand), \"Ti conviene prenotare\" (You'd better book), \"Ci è impossibile venire\". This is very natural with \"convenire\" and \"bastare\": \"Ti basta chiedere\" (All you have to do is ask).",
        ],
        examples: [
          { es: "È importante dormire bene.", en: "It's important to sleep well." },
          { es: "Bisogna prenotare con anticipo.", en: "You need to book in advance." },
          { es: "È meglio partire presto.", en: "It's better to leave early." },
          { es: "È possibile pagare con la carta?", en: "Is it possible to pay by card?" },
          { es: "È difficile trovare parcheggio in centro.", en: "It's hard to find parking in the center." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to book in advance.", answer: "Bisogna prenotare con anticipo.", altAnswers: ["Bisogna prenotare in anticipo.", "È necessario prenotare in anticipo.", "È necessario prenotare con anticipo."], explanation: "General: infinitive." },
          { type: "multiple-choice", question: "Which is general advice for everyone?", options: ["È importante bere acqua.", "È importante che tu beva acqua.", "È importante che bevano acqua.", "È importante che beviamo acqua."], correctIndex: 0, explanation: "No subject: infinitive." },
        ],
      },
      {
        heading: "Rules and signs: è vietato, è consentito",
        body: [
          "Signs and rules use the same structure: \"È vietato fumare\" (No smoking), \"È vietato l'ingresso ai cani\", \"È consentito portare un bagaglio a mano\", \"È obbligatorio indossare il casco\".",
          "Also common in instructions: \"Si prega di...\" (please...): \"Si prega di non toccare\".",
        ],
        examples: [
          { es: "È vietato fumare.", en: "No smoking." },
          { es: "È obbligatorio indossare il casco.", en: "Helmets must be worn." },
          { es: "È consentito portare un bagaglio a mano.", en: "You may bring one carry-on bag." },
          { es: "Si prega di non toccare le opere.", en: "Please do not touch the works of art." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Helmets must be worn.", answer: "È obbligatorio indossare il casco.", altAnswers: ["È obbligatorio portare il casco."], explanation: "Rule: infinitive." },
          { type: "listen-choose", audio: "È vietato fumare.", question: "What does the sign say?", options: ["No smoking.", "Smoking area.", "No parking.", "No entry."], correctIndex: 0, explanation: "\"Vietato\" = forbidden." },
        ],
      },
      {
        heading: "Basta, conviene, vale la pena",
        body: [
          "Three more impersonal verbs that take the infinitive: \"Basta chiedere\" (you only need to ask), \"Conviene prenotare\" (it's worth booking, it pays to book), \"Vale la pena visitare Matera\" (it's worth visiting Matera).",
          "With a specific person they take \"che\" + subjunctive too: \"Basta che tu me lo dica\" (just tell me).",
        ],
        examples: [
          { es: "Basta chiedere al bar.", en: "You only need to ask at the bar." },
          { es: "Conviene prenotare il treno in anticipo.", en: "It pays to book the train in advance." },
          { es: "Vale la pena visitare Matera.", en: "Matera is worth a visit." },
          { es: "Basta che tu me lo dica.", en: "Just tell me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Matera is worth a visit.", answer: "Vale la pena visitare Matera.", altAnswers: ["Matera vale la pena di visitarla.", "Vale la pena di visitare Matera."], explanation: "\"Vale la pena\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It pays to book the train in advance.", answer: "Conviene prenotare il treno in anticipo.", altAnswers: ["Conviene prenotare il treno con anticipo."], explanation: "\"Conviene\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important to sleep well.", answer: "È importante dormire bene.", explanation: "General." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better to leave early.", answer: "È meglio partire presto.", altAnswers: ["Meglio partire presto."], explanation: "No \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it possible to pay by card?", answer: "È possibile pagare con la carta?", altAnswers: ["Si può pagare con la carta?", "È possibile pagare con carta?"], explanation: "General question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's hard to find parking in the center.", answer: "È difficile trovare parcheggio in centro.", altAnswers: ["È difficile trovare un parcheggio in centro."], explanation: "\"È difficile\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You may bring one carry-on bag.", answer: "È consentito portare un bagaglio a mano.", explanation: "Rule." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that you sleep well. (to a friend)", answer: "È importante che tu dorma bene.", explanation: "Specific person: \"che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Please do not touch the works of art.", answer: "Si prega di non toccare le opere.", altAnswers: ["Si prega di non toccare le opere d'arte."], explanation: "\"Si prega di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[No entry] to dogs.", sentence: "___ l'ingresso ai cani.", answer: "È vietato", altAnswers: ["Vietato"], explanation: "\"Vietato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's useful [to learn] a few words of Italian.", sentence: "È utile ___ qualche parola di italiano.", answer: "imparare", explanation: "No subject." },
      { type: "matching", instructions: "Match each sign to its meaning.", pairs: [{ left: "È vietato fumare.", right: "No smoking." }, { left: "È obbligatorio il casco.", right: "Helmets compulsory." }, { left: "Si prega di non toccare.", right: "Please do not touch." }, { left: "Bisogna prenotare.", right: "Booking required." }], explanation: "Impersonal rules." },
      { type: "dictation", audio: "In estate bisogna prenotare con anticipo ed è meglio arrivare presto.", explanation: "Two infinitives." },
      { type: "speak", text: "È meglio partire presto, perché è difficile trovare parcheggio.", prompt: "Say it in Italian: It's better to leave early, because it's hard to find parking.", tip: "par-CHEG-gio.", explanation: "General advice: infinitives." },
    ],
  },
  {
    slug: "b1-impersonal-indicative",
    level: "IT-B1",
    number: 3,
    title: "It's True That: The Indicative",
    summary: "È vero che, è chiaro che, è evidente che + indicative; è vero che sia ... is not standard.",
    duration: "17 min",
    sections: [
      {
        heading: "Facts take the indicative",
        body: [
          "Some impersonal phrases state a fact, not a judgment: \"è vero che\", \"è chiaro che\", \"è evidente che\", \"è certo che\", \"è ovvio che\". They take the indicative: \"È vero che Luca è partito\", \"È chiaro che non vuole venire\".",
          "\"È vero che sia\" is not standard Italian. But turn the fact into doubt and the subjunctive returns: \"Non è vero che sia così facile\" (It's not true that it's that easy), \"Non è detto che venga\" (It's not certain he'll come).",
          "A question keeps the indicative: \"È vero che parti?\" (Is it true you're leaving?). Very common in speech is \"non è che\" + subjunctive, which softens a statement or a request: \"Non è che sia brutto, ma...\" (It's not that it's ugly, but...), \"Non è che mi presti la penna?\" (You couldn't lend me your pen, could you?), where the indicative is normal in the request.",
        ],
        examples: [
          { es: "È vero che Luca si è trasferito.", en: "It's true that Luca has moved." },
          { es: "È chiaro che non vuole venire.", en: "It's clear he doesn't want to come." },
          { es: "È evidente che il progetto costa troppo.", en: "It's obvious the project costs too much." },
          { es: "Non è vero che sia così facile.", en: "It's not true that it's that easy." },
          { es: "Non è detto che venga.", en: "It's not certain he'll come." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's clear he doesn't want to come.", answer: "È chiaro che non vuole venire.", altAnswers: ["È evidente che non vuole venire.", "È ovvio che non vuole venire."], explanation: "Fact: indicative." },
          { type: "multiple-choice", question: "Which is standard Italian?", options: ["È vero che è caro.", "È vero che sia caro.", "È vero di essere caro.", "È vero caro."], correctIndex: 0, explanation: "\"È vero che\" + indicative." },
        ],
      },
      {
        heading: "Judgement or fact?",
        body: [
          "Ask: is it an evaluation (important, possible, better, strange) or a statement of truth (true, clear, obvious)? Evaluation → subjunctive. Truth → indicative.",
          "\"È possibile che sia chiuso\" (maybe it's closed) vs \"È chiaro che è chiuso\" (it's obviously closed).",
        ],
        examples: [
          { es: "È possibile che il negozio sia chiuso.", en: "The shop may be closed." },
          { es: "È chiaro che il negozio è chiuso.", en: "The shop is obviously closed." },
          { es: "È strano che non ci sia nessuno.", en: "It's strange there's nobody here." },
          { es: "È ovvio che non c'è nessuno.", en: "Obviously there's nobody here." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop may be closed.", answer: "È possibile che il negozio sia chiuso.", altAnswers: ["Può darsi che il negozio sia chiuso.", "Forse il negozio è chiuso."], explanation: "Evaluation: subjunctive." },
          { type: "listen-choose", audio: "È ovvio che non c'è nessuno.", question: "What does the speaker say?", options: ["Obviously there's nobody here.", "Maybe nobody is here.", "Someone is coming.", "It's strange nobody's here."], correctIndex: 0, explanation: "\"È ovvio che\" + indicative." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true that Luca has moved.", answer: "È vero che Luca si è trasferito.", explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's obvious the project costs too much.", answer: "È evidente che il progetto costa troppo.", altAnswers: ["È ovvio che il progetto costa troppo.", "È chiaro che il progetto costa troppo."], explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not true that it's that easy.", answer: "Non è vero che sia così facile.", altAnswers: ["Non è vero che è così facile."], explanation: "Denied fact: subjunctive is usual." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not certain he'll come.", answer: "Non è detto che venga.", altAnswers: ["Non è sicuro che venga.", "Non è certo che venga."], explanation: "\"Non è detto che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop is obviously closed.", answer: "È chiaro che il negozio è chiuso.", altAnswers: ["È ovvio che il negozio è chiuso.", "È evidente che il negozio è chiuso."], explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange there's nobody here.", answer: "È strano che non ci sia nessuno.", altAnswers: ["È strano che qui non ci sia nessuno."], explanation: "Evaluation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true that Italians eat late.", answer: "È vero che gli italiani mangiano tardi.", altAnswers: ["È vero che gli italiani cenano tardi."], explanation: "Fact." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's clear that you [are] tired. (to a friend)", sentence: "È chiaro che ___ stanco.", answer: "sei", explanation: "Fact: indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's possible that you [are] tired. (to a friend)", sentence: "È possibile che ___ stanco.", answer: "tu sia", explanation: "Evaluation: subjunctive." },
      { type: "multi-select", question: "Which take the indicative? Choose all that apply.", options: ["è vero che", "è importante che", "è chiaro che", "è possibile che", "è evidente che", "è un peccato che"], correctIndexes: [0, 2, 4], explanation: "True, clear, evident: facts." },
      { type: "dictation", audio: "È vero che il treno è in ritardo, ma è strano che non ci sia un annuncio.", explanation: "\"È vero che è\", \"è strano che ci sia\"." },
      { type: "speak", text: "È chiaro che non vuole venire, ma non è detto che abbia ragione.", prompt: "Say it in Italian: It's clear he doesn't want to come, but that doesn't mean he's right.", tip: "non è DET-to.", explanation: "Fact + indicative, doubt + subjunctive." },
    ],
  },
  {
    slug: "b1-drill-impersonal",
    level: "IT-B1",
    number: 4,
    title: "Drill: Impersonal Phrases",
    summary: "Produce impersonal phrases at speed: che + subjunctive, the infinitive or the indicative.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Three structures",
        body: [
          "Evaluation + specific person: \"che\" + subjunctive (\"È meglio che tu vada\"). Evaluation, no person: infinitive (\"È meglio andare\"). Fact: \"che\" + indicative (\"È vero che va\").",
        ],
        examples: [
          { es: "È meglio che tu vada adesso.", en: "You'd better go now." },
          { es: "È meglio andare adesso.", en: "It's better to go now." },
          { es: "È vero che va a Parigi.", en: "It's true he's going to Paris." },
          { es: "È probabile che vada a Parigi.", en: "He'll probably go to Paris." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'd better go now. (to a friend)", answer: "È meglio che tu vada adesso.", altAnswers: ["È meglio che tu vada ora.", "È meglio che vada adesso."], explanation: "Specific person." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He'll probably go to Paris.", answer: "È probabile che vada a Parigi.", explanation: "Evaluation." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true he's going to Paris.", answer: "È vero che va a Parigi.", explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's necessary to have a visa.", answer: "È necessario avere il visto.", altAnswers: ["Bisogna avere il visto.", "È necessario avere un visto."], explanation: "General." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's necessary that you have a visa. (to a friend)", answer: "È necessario che tu abbia il visto.", altAnswers: ["Bisogna che tu abbia il visto."], explanation: "Specific person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a pity it's raining.", answer: "È un peccato che piova.", altAnswers: ["Peccato che piova."], explanation: "\"Piova\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's obvious they're in love.", answer: "È evidente che sono innamorati.", altAnswers: ["È ovvio che sono innamorati.", "È chiaro che sono innamorati."], explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange that the bus isn't coming.", answer: "È strano che l'autobus non arrivi.", altAnswers: ["È strano che l'autobus non passi."], explanation: "\"Arrivi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important to drink a lot in summer.", answer: "È importante bere molto d'estate.", altAnswers: ["È importante bere molto in estate."], explanation: "General." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible they don't know the address.", answer: "È possibile che non sappiano l'indirizzo.", altAnswers: ["Può darsi che non sappiano l'indirizzo."], explanation: "\"Sappiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to change trains in Bologna. (plural)", answer: "Bisogna che cambiate treno a Bologna.", altAnswers: ["Bisogna cambiare treno a Bologna.", "È necessario che cambiate treno a Bologna.", "Dovete cambiare treno a Bologna."], explanation: "With -iare verbs the voi subjunctive (cambi- + -iate) is spelled \"cambiate\", just like the present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's better that the kids [go] to bed early.", sentence: "È meglio che i bambini ___ a letto presto.", answer: "vadano", explanation: "\"Vadano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's clear that she [knows] everything.", sentence: "È chiaro che ___ tutto.", answer: "sa", explanation: "Fact: indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's likely that there [is] a strike.", sentence: "È probabile che ci ___ uno sciopero.", answer: "sia", explanation: "\"Ci sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's forbidden [to swim] here.", sentence: "È vietato ___ qui.", answer: "fare il bagno", altAnswers: ["nuotare"], explanation: "Rule: infinitive." },
      { type: "multiple-choice", question: "\"È importante che tutti ___ in orario.\"", options: ["arrivino", "arrivano", "arrivare", "di arrivare"], correctIndex: 0, explanation: "Specific subject: subjunctive." },
      { type: "dictation", audio: "È un peccato che piova, ma è meglio restare a casa.", explanation: "Subjunctive, then infinitive." },
      { type: "dictation", audio: "È vero che costa tanto, ma è importante che tu stia comodo.", explanation: "Indicative, then subjunctive." },
      { type: "speak", text: "È probabile che ci sia sciopero, quindi è meglio che prendiate un taxi.", prompt: "Say it in Italian: There'll probably be a strike, so you'd better take a taxi. (plural)", tip: "SCIO-pe-ro: stress on the first syllable.", explanation: "\"Ci sia\", \"prendiate\"." },
    ],
  },
  {
    slug: "b1-sembra-puo-darsi",
    level: "IT-B1",
    number: 5,
    title: "Sembra Che, Può Darsi Che",
    summary: "Sembra che abbia vinto (preview of past), può darsi che arrivi tardi.",
    duration: "17 min",
    sections: [
      {
        heading: "Sembra che: apparently",
        body: [
          "Without a pronoun, \"sembra che\" (or \"pare che\") means apparently or it seems: it reports what people say or what appears to be true. \"Sembra che il ristorante chiuda\" (Apparently the restaurant is closing). It takes the subjunctive.",
          "For something that already happened, you need the past subjunctive (Unit 12): \"Sembra che abbia vinto\" (It seems he won). Recognize it now; you'll practice it later.",
        ],
        examples: [
          { es: "Sembra che il ristorante chiuda a fine mese.", en: "Apparently the restaurant is closing at the end of the month." },
          { es: "Pare che domani faccia bel tempo.", en: "Apparently it'll be nice tomorrow." },
          { es: "Sembra che non ci siano più biglietti.", en: "It seems there are no tickets left." },
          { es: "Sembra che abbia vinto.", en: "It seems he won." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems there are no tickets left.", answer: "Sembra che non ci siano più biglietti.", altAnswers: ["Pare che non ci siano più biglietti."], explanation: "\"Ci siano\"." },
          { type: "listen-choose", audio: "Pare che domani faccia bel tempo.", question: "What have they heard?", options: ["It'll be nice tomorrow.", "It was nice yesterday.", "It'll rain tomorrow.", "It's nice today."], correctIndex: 0, explanation: "\"Pare che\" = apparently." },
        ],
      },
      {
        heading: "Può darsi che: maybe",
        body: [
          "\"Può darsi che\" means it may be that, maybe. It always takes the subjunctive: \"Può darsi che arrivi tardi\" (He may arrive late). On its own, \"Può darsi\" means maybe, could be.",
          "Compare the simpler \"forse\" + indicative: \"Forse arriva tardi\". Same meaning, no subjunctive, because \"forse\" isn't followed by \"che\".",
          "With an adjective or the same subject, \"sembrare\" needs no \"che\" at all: \"Sembra stanco\" (He looks tired), \"Il museo sembra chiuso\". Short answers work as with \"credo\": \"Pare di sì\", \"Sembra di no\". In casual speech you'll also hear \"può essere che\" for \"può darsi che\", again with the subjunctive.",
        ],
        examples: [
          { es: "Può darsi che arrivi tardi.", en: "He may arrive late." },
          { es: "Forse arriva tardi.", en: "Maybe he'll arrive late." },
          { es: "Può darsi che abbiano ragione.", en: "They may be right." },
          { es: "Vieni stasera? Può darsi.", en: "Are you coming tonight? Maybe." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They may be right.", answer: "Può darsi che abbiano ragione.", altAnswers: ["È possibile che abbiano ragione.", "Forse hanno ragione."], explanation: "\"Può darsi che\" + subjunctive." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Forse viene.", "Forse venga.", "Può darsi che viene.", "Può darsi venga che."], correctIndex: 0, explanation: "\"Forse\" + indicative; \"può darsi che\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently the restaurant is closing at the end of the month.", answer: "Sembra che il ristorante chiuda a fine mese.", altAnswers: ["Pare che il ristorante chiuda a fine mese.", "Sembra che il ristorante chiuda alla fine del mese."], explanation: "\"Chiuda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He may arrive late.", answer: "Può darsi che arrivi tardi.", altAnswers: ["Può darsi che arrivi in ritardo.", "Forse arriva tardi."], explanation: "\"Arrivi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe he'll arrive late.", answer: "Forse arriva tardi.", altAnswers: ["Forse arriverà tardi.", "Può darsi che arrivi tardi."], explanation: "\"Forse\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently it'll be nice tomorrow.", answer: "Pare che domani faccia bel tempo.", altAnswers: ["Sembra che domani faccia bel tempo."], explanation: "\"Faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems Sara is pregnant.", answer: "Sembra che Sara sia incinta.", altAnswers: ["Pare che Sara sia incinta."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop may be closed on Monday.", answer: "Può darsi che il negozio sia chiuso lunedì.", altAnswers: ["Può darsi che il negozio sia chiuso il lunedì.", "È possibile che il negozio sia chiuso lunedì."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming tonight? Maybe.", answer: "Vieni stasera? Può darsi.", altAnswers: ["Vieni stasera? Forse."], explanation: "\"Può darsi\" alone." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the prices [are going up] again.", sentence: "Sembra che i prezzi ___ di nuovo.", answer: "aumentino", altAnswers: ["salgano"], explanation: "\"Aumentino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Maybe they [don't have] time.", sentence: "Forse non ___ tempo.", answer: "hanno", explanation: "\"Forse\" + indicative." },
      { type: "word-order", prompt: "Put the words in order to say: It may snow tonight.", words: ["Può", "darsi", "che", "nevichi", "stanotte."], translation: "It may snow tonight.", explanation: "\"Nevichi\"." },
      { type: "dictation", audio: "Sembra che non ci siano più biglietti, ma può darsi che ne trovino due.", explanation: "\"Ci siano\", \"trovino\"." },
      { type: "speak", text: "Pare che domani faccia bel tempo, ma può darsi che piova la sera.", prompt: "Say it in Italian: Apparently it'll be nice tomorrow, but it may rain in the evening.", tip: "PIO-va.", explanation: "\"Faccia\", \"piova\"." },
    ],
  },
  {
    slug: "b1-drill-subjunctive-mixed-triggers",
    level: "IT-B1",
    number: 6,
    title: "Drill: All the Triggers So Far",
    summary: "Mixed production across Units 7-10: opinions, wishes, feelings, doubts and impersonal phrases.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Everything so far",
        body: [
          "Opinion (\"penso che\"), wish (\"voglio che\", \"spero che\"), feeling (\"sono contento che\", \"mi dispiace che\"), fear and doubt (\"ho paura che\", \"dubito che\"), impersonal (\"è importante che\", \"bisogna che\", \"sembra che\", \"può darsi che\"): all + subjunctive. Facts (\"so che\", \"è vero che\", \"secondo me\"): indicative.",
        ],
        examples: [
          { es: "Penso che sia giusto.", en: "I think it's fair." },
          { es: "Mi dispiace che tu debba lavorare.", en: "I'm sorry you have to work." },
          { es: "Bisogna che qualcuno lo dica.", en: "Somebody has to say it." },
          { es: "È vero che lui lavora troppo.", en: "It's true he works too much." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Somebody has to say it.", answer: "Bisogna che qualcuno lo dica.", altAnswers: ["È necessario che qualcuno lo dica.", "Qualcuno deve dirlo."], explanation: "\"Dica\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you have to work. (to a friend)", answer: "Mi dispiace che tu debba lavorare.", explanation: "\"Debba\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think it's fair.", answer: "Penso che sia giusto.", altAnswers: ["Credo che sia giusto."], explanation: "Opinion." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true he works too much.", answer: "È vero che lui lavora troppo.", altAnswers: ["È vero che lavora troppo."], explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you're feeling better. (plural)", answer: "Spero che stiate meglio.", explanation: "Wish." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt the train leaves on time.", answer: "Dubito che il treno parta in orario.", explanation: "Doubt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better that you don't tell anyone. (to a friend)", answer: "È meglio che tu non lo dica a nessuno.", altAnswers: ["È meglio che non lo dica a nessuno.", "È meglio che tu non dica niente a nessuno."], explanation: "Impersonal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to be ready at six. (plural)", answer: "Voglio che siate pronti alle sei.", altAnswers: ["Voglio che siate pronte alle sei."], explanation: "Wish." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know you're right. (to a friend)", answer: "So che hai ragione.", explanation: "Fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently the bridge is closed.", answer: "Sembra che il ponte sia chiuso.", altAnswers: ["Pare che il ponte sia chiuso."], explanation: "\"Sembra che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid there isn't enough time.", answer: "Ho paura che non ci sia abbastanza tempo.", altAnswers: ["Temo che non ci sia abbastanza tempo."], explanation: "Fear." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion the film is too long.", answer: "Secondo me il film è troppo lungo.", altAnswers: ["Per me il film è troppo lungo."], explanation: "\"Secondo me\" + indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm glad they [like] Italy.", sentence: "Sono contento che l'Italia gli ___.", answer: "piaccia", explanation: "Feeling." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's possible he [is] at home.", sentence: "È possibile che ___ a casa.", answer: "sia", explanation: "Impersonal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's clear the kids [are] tired.", sentence: "È chiaro che i bambini ___ stanchi.", answer: "sono", explanation: "Fact." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think she [wants] to come.", sentence: "Non credo che ___ venire.", answer: "voglia", explanation: "Opinion." },
      { type: "multi-select", question: "Which are followed by the subjunctive? Choose all that apply.", options: ["può darsi che", "so che", "ho paura che", "è vero che", "bisogna che", "mi dispiace che"], correctIndexes: [0, 2, 4, 5], explanation: "\"So che\" and \"è vero che\" state facts." },
      { type: "dictation", audio: "Spero che tu stia bene. So che hai tanto lavoro, ma è importante che ti riposi.", explanation: "Subjunctive, indicative, subjunctive." },
      { type: "speak", text: "So che è difficile, ma penso che tu debba parlargli, ed è meglio che lo faccia presto.", prompt: "Say it in Italian: I know it's difficult, but I think you should talk to him, and you'd better do it soon.", tip: "par-LAR-gli.", explanation: "Fact, opinion, impersonal." },
    ],
  },
  {
    slug: "b1-error-hunt-impersonal",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Impersonal Phrases",
    summary: "Fix impersonal mistakes: è importante che studiare, bisogna che parti (parta), è vero che sia, è meglio di partire.",
    duration: "17 min",
    sections: [
      {
        heading: "Sophie's travel tips",
        body: [
          "Sophie writes tips for an English-language travel blog in Italian. Her mistakes: \"È importante che studiare un po' di italiano\": \"che\" needs a subject and a conjugated verb. General advice: \"È importante studiare\". \"È meglio di partire presto\": no \"di\" after \"è meglio\": \"È meglio partire presto\".",
          "\"Bisogna che parti presto\" uses the indicative: \"Bisogna che tu parta\". And \"È vero che sia caro\": a fact takes the indicative: \"È vero che è caro\".",
        ],
        examples: [
          { es: "È importante studiare un po' di italiano.", en: "It's important to study a bit of Italian. (not: che studiare)" },
          { es: "È meglio partire presto.", en: "It's better to leave early. (not: meglio di partire)" },
          { es: "Bisogna che tu parta presto.", en: "You need to leave early. (not: bisogna che parti)" },
          { es: "È vero che Venezia è cara.", en: "It's true that Venice is expensive. (not: che sia cara)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Sophie wrote \"È importante che studiare un po' di italiano\". Write it correctly: It's important to study a bit of Italian.", source: "It's important to study a bit of Italian.", answer: "È importante studiare un po' di italiano.", explanation: "General: infinitive, no \"che\"." },
          { type: "translate", direction: "en-es", prompt: "Sophie wrote \"È vero che Venezia sia cara\". Write it correctly: It's true that Venice is expensive.", source: "It's true that Venice is expensive.", answer: "È vero che Venezia è cara.", explanation: "Fact: indicative." },
        ],
      },
      {
        heading: "More slips",
        body: [
          "Two more: \"È possibile che c'è sciopero\" should be \"che ci sia\"; and \"Sembra che il museo è chiuso\" should be \"sia chiuso\". With evaluation and appearance, keep the subjunctive.",
        ],
        examples: [
          { es: "È possibile che ci sia sciopero.", en: "There may be a strike. (not: che c'è)" },
          { es: "Sembra che il museo sia chiuso.", en: "It seems the museum is closed. (not: è chiuso)" },
          { es: "È meglio che prenotiate.", en: "You'd better book. (not: che prenotate)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Sophie wrote \"È possibile che c'è sciopero\". Write it correctly: There may be a strike.", source: "There may be a strike.", answer: "È possibile che ci sia sciopero.", altAnswers: ["È possibile che ci sia uno sciopero.", "Può darsi che ci sia sciopero.", "Può darsi che ci sia uno sciopero."], explanation: "\"Ci sia\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["È meglio partire presto.", "È meglio di partire presto.", "È meglio che partire presto.", "È meglio a partire presto."], correctIndex: 0, explanation: "No preposition, no \"che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Sophie wrote \"È meglio di partire presto\". Write it correctly: It's better to leave early.", source: "It's better to leave early.", answer: "È meglio partire presto.", explanation: "No \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Sophie wrote \"Bisogna che parti presto\". Write it correctly: You need to leave early. (to a friend)", source: "You need to leave early. (to a friend)", answer: "Bisogna che tu parta presto.", altAnswers: ["Bisogna che parta presto."], explanation: "\"Parta\"." },
      { type: "translate", direction: "en-es", prompt: "Sophie wrote \"Sembra che il museo è chiuso\". Write it correctly: It seems the museum is closed.", source: "It seems the museum is closed.", answer: "Sembra che il museo sia chiuso.", altAnswers: ["Pare che il museo sia chiuso."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Sophie wrote \"È meglio che prenotate\". Write it correctly: You'd better book. (plural)", source: "You'd better book. (plural)", answer: "È meglio che prenotiate.", explanation: "\"Prenotiate\"." },
      { type: "translate", direction: "en-es", prompt: "Sophie wrote \"È necessario di avere il passaporto\". Write it correctly: It's necessary to have a passport.", source: "It's necessary to have a passport.", answer: "È necessario avere il passaporto.", altAnswers: ["Bisogna avere il passaporto.", "È necessario avere un passaporto."], explanation: "No \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Sophie wrote \"È chiaro che i turisti siano troppi\". Write it correctly: It's clear there are too many tourists.", source: "It's clear there are too many tourists.", answer: "È chiaro che ci sono troppi turisti.", altAnswers: ["È chiaro che i turisti sono troppi.", "È evidente che ci sono troppi turisti."], explanation: "Fact: indicative." },
      { type: "fill-blank", prompt: "Sophie wrote \"che fa\". Write the Italian for the bold words.", en: "It's possible that it [is] cold in the evening.", sentence: "È possibile che la sera ___ freddo.", answer: "faccia", explanation: "\"Faccia\"." },
      { type: "fill-blank", prompt: "Sophie wrote \"che vanno\". Write the Italian for the bold words.", en: "It's better that tourists [go] in the morning.", sentence: "È meglio che i turisti ___ la mattina.", answer: "vadano", explanation: "\"Vadano\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's important to book.", words: ["È", "importante", "prenotare."], translation: "It's important to book.", explanation: "Infinitive." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["È importante studiare.", "È importante che studiare.", "Bisogna che tu parta.", "È vero che sia caro.", "È vero che è caro.", "È meglio di andare."], correctIndexes: [0, 2, 4], explanation: "Infinitive alone, subjunctive with a subject, indicative for facts." },
      { type: "dictation", audio: "È meglio partire presto, perché è possibile che ci sia sciopero.", explanation: "Infinitive, then \"ci sia\"." },
      { type: "speak", text: "È vero che Venezia è cara, ma è importante vederla almeno una volta.", prompt: "Say Sophie's corrected tip: It's true that Venice is expensive, but it's important to see it at least once.", tip: "ve-DER-la.", explanation: "Fact + indicative, general + infinitive." },
    ],
  },
  {
    slug: "b1-dialogue-lab-travel-advice",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: Advice for Your Trip",
    summary: "A friend gives advice about Sicily: è meglio che tu noleggi una macchina.",
    duration: "17 min",
    sections: [
      {
        heading: "Planning Sicily",
        body: [
          "Kate is planning ten days in Sicily. Her friend Salvo, from Catania, gives advice. Salvo: \"Allora, è meglio che tu noleggi una macchina: i treni sono lenti. E bisogna che tu veda Siracusa e l'Etna.\" Kate: \"È possibile salire sull'Etna da soli?\" Salvo: \"Fino a un certo punto sì, ma in cima è obbligatorio andare con una guida.\"",
          "Notice: \"è meglio che tu noleggi\" (advice for Kate), \"è possibile salire\" (general question), \"è obbligatorio andare\" (a rule).",
        ],
        examples: [
          { es: "È meglio che tu noleggi una macchina.", en: "You'd better rent a car." },
          { es: "Bisogna che tu veda Siracusa.", en: "You have to see Syracuse." },
          { es: "È possibile salire sull'Etna da soli?", en: "Is it possible to go up Etna on your own?" },
          { es: "In cima è obbligatorio andare con una guida.", en: "At the top you must go with a guide." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'd better rent a car. (to a friend)", answer: "È meglio che tu noleggi una macchina.", altAnswers: ["È meglio che noleggi una macchina.", "È meglio che tu prenda una macchina a noleggio."], explanation: "\"Noleggi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it possible to go up Etna on your own?", answer: "È possibile salire sull'Etna da soli?", altAnswers: ["Si può salire sull'Etna da soli?"], explanation: "General: infinitive." },
        ],
      },
      {
        heading: "Food and timing",
        body: [
          "Kate: \"E per mangiare?\" Salvo: \"È importante che tu provi gli arancini e la granita con la brioche. Ad agosto è probabile che faccia caldissimo, quindi è meglio visitare i siti archeologici la mattina presto.\" Kate: \"Peccato che non ci sia anche tu!\"",
          "\"Peccato che\" is the short form of \"è un peccato che\".",
        ],
        examples: [
          { es: "È importante che tu provi la granita con la brioche.", en: "You must try granita with brioche." },
          { es: "Ad agosto è probabile che faccia caldissimo.", en: "In August it'll probably be extremely hot." },
          { es: "È meglio visitare i siti archeologici la mattina presto.", en: "It's better to visit the archaeological sites early in the morning." },
          { es: "Peccato che non ci sia anche tu!", en: "Too bad you won't be there too!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In August it'll probably be extremely hot.", answer: "Ad agosto è probabile che faccia caldissimo.", altAnswers: ["In agosto è probabile che faccia caldissimo.", "Ad agosto è probabile che faccia molto caldo."], explanation: "\"Faccia\"." },
          { type: "listen-choose", audio: "Peccato che non ci sia anche tu!", question: "What does Kate mean?", options: ["It's a shame Salvo won't be there.", "Salvo is coming too.", "Kate can't go.", "There's no granita."], correctIndex: 0, explanation: "\"Peccato che\" + \"ci sia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to see Syracuse. (to a friend)", answer: "Bisogna che tu veda Siracusa.", altAnswers: ["Devi vedere Siracusa.", "È necessario che tu veda Siracusa."], explanation: "\"Veda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the top you must go with a guide.", answer: "In cima è obbligatorio andare con una guida.", altAnswers: ["In cima bisogna andare con una guida."], explanation: "Rule: infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You must try granita with brioche. (to a friend)", answer: "È importante che tu provi la granita con la brioche.", altAnswers: ["Devi provare la granita con la brioche.", "Bisogna che tu provi la granita con la brioche."], explanation: "\"Provi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better to visit the archaeological sites early in the morning.", answer: "È meglio visitare i siti archeologici la mattina presto.", altAnswers: ["È meglio visitare i siti archeologici di mattina presto."], explanation: "General: infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Too bad you won't be there too!", answer: "Peccato che non ci sia anche tu!", altAnswers: ["È un peccato che non ci sia anche tu!"], explanation: "\"Ci sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The trains are slow.", answer: "I treni sono lenti.", explanation: "A fact: indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's better that you [stay] two nights in Palermo. (to a friend)", sentence: "È meglio che tu ___ due notti a Palermo.", answer: "rimanga", altAnswers: ["resti", "stia"], explanation: "\"Rimanga\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's possible [to swim] in October.", sentence: "È possibile ___ a ottobre.", answer: "fare il bagno", altAnswers: ["nuotare"], explanation: "General." },
      { type: "word-order", prompt: "Put the words in order to say: You'd better rent a car.", words: ["È", "meglio", "che", "tu", "noleggi", "una", "macchina."], translation: "You'd better rent a car.", explanation: "\"Che tu noleggi\"." },
      { type: "matching", instructions: "Match Salvo's advice to its structure.", pairs: [{ left: "è meglio che tu noleggi", right: "advice for Kate: subjunctive" }, { left: "è possibile salire", right: "general: infinitive" }, { left: "è obbligatorio andare", right: "rule: infinitive" }, { left: "i treni sono lenti", right: "fact: indicative" }], explanation: "Three structures." },
      { type: "dictation", audio: "È meglio che tu noleggi una macchina, perché i treni sono lenti.", explanation: "Subjunctive, then indicative." },
      { type: "speak", text: "È importante che tu provi gli arancini, ed è meglio visitare i siti la mattina presto.", prompt: "Give Salvo's advice in Italian: You must try arancini, and it's better to visit the sites early in the morning.", tip: "a-ran-CI-ni.", explanation: "\"Che tu provi\", then the infinitive." },
    ],
  },
  {
    slug: "b1-reading-lab-rules",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: House Rules",
    summary: "Rules for a B&B in the Dolomites: impersonal language in a real-world text.",
    duration: "18 min",
    sections: [
      {
        heading: "Regolamento della casa",
        body: [
          "From a B&B near Cortina d'Ampezzo: \"Benvenuti! Per il benessere di tutti, vi chiediamo di rispettare alcune regole. È vietato fumare nelle camere e sui balconi. La colazione è servita dalle 7.30 alle 10. Il giorno della partenza è necessario che liberiate la camera entro le 10.\"",
          "\"Vi chiediamo di\" + infinitive is a polite way to give rules. \"È vietato fumare\" is a general rule (infinitive); \"è necessario che liberiate\" speaks to the guests directly (subjunctive).",
        ],
        examples: [
          { es: "È vietato fumare nelle camere e sui balconi.", en: "Smoking is forbidden in the rooms and on the balconies." },
          { es: "La colazione è servita dalle 7.30 alle 10.", en: "Breakfast is served from 7.30 to 10." },
          { es: "È necessario che liberiate la camera entro le 10.", en: "You must vacate the room by 10." },
          { es: "Vi chiediamo di rispettare alcune regole.", en: "We ask you to respect a few rules." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You must vacate the room by 10. (plural)", answer: "È necessario che liberiate la camera entro le 10.", altAnswers: ["Bisogna che liberiate la camera entro le 10.", "È necessario che lasciate la camera entro le 10."], explanation: "\"Liberiate\" (\"lasciare\" gives \"lasciate\", same as the present)." },
          { type: "multiple-choice", question: "What time must guests leave the room?", options: ["By 10.", "At 7.30.", "After 10.", "Whenever they like."], correctIndex: 0, explanation: "\"Entro le 10\" = by 10." },
        ],
      },
      {
        heading: "Dopo le 22",
        body: [
          "\"Dopo le 22 è importante non fare rumore: è probabile che altri ospiti dormano. È possibile lasciare gli sci e gli scarponi nel deposito al piano terra. Se partite presto, è meglio che ci avvisiate la sera prima. Grazie e buona vacanza!\"",
          "Note \"è importante non fare rumore\": a negative infinitive puts \"non\" before the verb.",
        ],
        examples: [
          { es: "Dopo le 22 è importante non fare rumore.", en: "After 10 p.m. it's important not to make noise." },
          { es: "È probabile che altri ospiti dormano.", en: "Other guests are probably asleep." },
          { es: "È possibile lasciare gli sci nel deposito.", en: "You can leave your skis in the storage room." },
          { es: "È meglio che ci avvisiate la sera prima.", en: "Please let us know the night before." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After 10 p.m. it's important not to make noise.", answer: "Dopo le 22 è importante non fare rumore.", altAnswers: ["Dopo le 22 è importante non fare confusione.", "Dopo le dieci di sera è importante non fare rumore."], explanation: "Negative infinitive: \"non fare\"." },
          { type: "dictation", audio: "È meglio che ci avvisiate la sera prima.", explanation: "\"Avvisiate\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Smoking is forbidden in the rooms and on the balconies.", answer: "È vietato fumare nelle camere e sui balconi.", explanation: "Rule: infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We ask you to respect a few rules.", answer: "Vi chiediamo di rispettare alcune regole.", altAnswers: ["Vi chiediamo di rispettare qualche regola."], explanation: "\"Chiedere di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Other guests are probably asleep.", answer: "È probabile che altri ospiti dormano.", altAnswers: ["È probabile che gli altri ospiti dormano."], explanation: "\"Dormano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can leave your skis in the storage room.", answer: "È possibile lasciare gli sci nel deposito.", altAnswers: ["Si possono lasciare gli sci nel deposito."], explanation: "General: infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Please let us know the night before. (plural)", answer: "È meglio che ci avvisiate la sera prima.", altAnswers: ["Vi chiediamo di avvisarci la sera prima."], explanation: "\"Avvisiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Breakfast is served from 7.30 to 10.", answer: "La colazione è servita dalle 7.30 alle 10.", altAnswers: ["La colazione viene servita dalle 7.30 alle 10."], explanation: "\"Dalle ... alle\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's important [not to leave] the windows open.", sentence: "È importante ___ le finestre aperte.", answer: "non lasciare", explanation: "Negative infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's necessary that guests [pay] on arrival.", sentence: "È necessario che gli ospiti ___ all'arrivo.", answer: "paghino", explanation: "\"Pagare\" → \"paghino\"." },
      { type: "multiple-choice", question: "Where can guests leave their ski boots?", options: ["In the storage room on the ground floor.", "In their rooms.", "On the balcony.", "At the reception desk."], correctIndex: 0, explanation: "\"Nel deposito al piano terra\"." },
      { type: "multi-select", question: "Which rules use the infinitive because they're general? Choose all that apply.", options: ["È vietato fumare.", "È necessario che liberiate la camera.", "È importante non fare rumore.", "È possibile lasciare gli sci.", "È meglio che ci avvisiate."], correctIndexes: [0, 2, 3], explanation: "The other two speak to \"voi\" directly." },
      { type: "dictation", audio: "È vietato fumare ed è importante non fare rumore dopo le dieci.", explanation: "Two general rules." },
      { type: "speak", text: "Buongiorno, partiamo domani alle sei. È possibile lasciare la chiave alla reception?", prompt: "Tell the B&B owner in Italian: Good morning, we're leaving tomorrow at six. Is it possible to leave the key at reception?", tip: "re-cep-tion: Italians say it the English way.", explanation: "General question: infinitive." },
    ],
  },
  {
    slug: "b1-mission-guide-for-newcomers",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Guide for Newcomers",
    summary: "Write tips for a new colleague: è importante che arrivi puntuale, bisogna timbrare, è meglio non parcheggiare qui.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Welcome to the office",
        body: [
          "Your mission: a new colleague, Riccardo, starts next week at your office in Padova. Your manager asks you to write a short welcome guide. Mix the three structures: general rules (\"Bisogna timbrare il cartellino\"), advice just for him (\"È importante che tu arrivi puntuale\"), and facts (\"È vero che la mensa è buona!\").",
          "In a friendly office, colleagues use \"tu\"; if you write for the whole team, use \"voi\" or the infinitive.",
        ],
        examples: [
          { es: "Bisogna timbrare il cartellino all'entrata.", en: "You need to clock in when you arrive." },
          { es: "È importante che tu arrivi puntuale il lunedì.", en: "It's important that you're on time on Mondays." },
          { es: "È meglio non parcheggiare davanti all'ingresso.", en: "It's better not to park in front of the entrance." },
          { es: "È vero che la mensa è buona!", en: "It's true that the cafeteria is good!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that you're on time on Mondays. (to a colleague, tu)", answer: "È importante che tu arrivi puntuale il lunedì.", altAnswers: ["È importante che tu sia puntuale il lunedì.", "È importante che tu arrivi in orario il lunedì."], explanation: "Advice for him: subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better not to park in front of the entrance.", answer: "È meglio non parcheggiare davanti all'ingresso.", explanation: "General: negative infinitive." },
        ],
      },
      {
        heading: "Unwritten rules",
        body: [
          "Every office has unwritten rules: \"È meglio che tu non prenda il caffè alle 9: la macchinetta è sempre occupata.\" \"Sembra che il capo preferisca le email brevi.\" \"Può darsi che ti invitino all'aperitivo del venerdì: è un peccato non andarci!\"",
        ],
        examples: [
          { es: "Sembra che il capo preferisca le email brevi.", en: "Apparently the boss prefers short emails." },
          { es: "Può darsi che ti invitino all'aperitivo del venerdì.", en: "They may invite you to Friday drinks." },
          { es: "È un peccato non andarci!", en: "It'd be a shame not to go!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently the boss prefers short emails.", answer: "Sembra che il capo preferisca le email brevi.", altAnswers: ["Pare che il capo preferisca le email brevi.", "Sembra che il capo preferisca le mail brevi."], explanation: "\"Preferisca\"." },
          { type: "listen-choose", audio: "Può darsi che ti invitino all'aperitivo del venerdì.", question: "What might happen?", options: ["He may be invited to Friday drinks.", "He must organize Friday drinks.", "Friday drinks are canceled.", "He has to work on Friday."], correctIndex: 0, explanation: "\"Può darsi che\" = maybe." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to clock in when you arrive.", answer: "Bisogna timbrare il cartellino all'entrata.", altAnswers: ["Bisogna timbrare il cartellino all'arrivo.", "Bisogna timbrare all'entrata."], explanation: "General rule." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true that the cafeteria is good!", answer: "È vero che la mensa è buona!", explanation: "Fact: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They may invite you to Friday drinks.", answer: "Può darsi che ti invitino all'aperitivo del venerdì.", explanation: "\"Invitino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It'd be a shame not to go!", answer: "È un peccato non andarci!", altAnswers: ["Sarebbe un peccato non andarci!", "Peccato non andarci!"], explanation: "Infinitive with \"ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'd better not get coffee at nine. (to a colleague, tu)", answer: "È meglio che tu non prenda il caffè alle nove.", altAnswers: ["È meglio non prendere il caffè alle nove."], explanation: "\"Prenda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's necessary to change your password every month.", answer: "Bisogna cambiare la password ogni mese.", altAnswers: ["È necessario cambiare la password ogni mese."], explanation: "General rule." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's important that you [know] the fire exits.", sentence: "È importante che tu ___ le uscite di emergenza.", answer: "conosca", explanation: "\"Conosca\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's clear that everyone [is] very busy in December.", sentence: "È chiaro che a dicembre tutti ___ molto occupati.", answer: "sono", explanation: "Fact." },
      { type: "word-order", prompt: "Put the words in order to say: It's better not to park here.", words: ["È", "meglio", "non", "parcheggiare", "qui."], translation: "It's better not to park here.", explanation: "Negative infinitive." },
      { type: "multiple-choice", question: "Which tip is advice for Riccardo personally?", options: ["È importante che tu arrivi puntuale.", "Bisogna timbrare il cartellino.", "È vietato fumare.", "È vero che la mensa è buona."], correctIndex: 0, explanation: "\"Che tu\" + subjunctive." },
      { type: "dictation", audio: "Sembra che il capo preferisca le email brevi.", explanation: "\"Preferisca\"." },
      { type: "speak", text: "Benvenuto Riccardo! È importante che tu arrivi puntuale, ma non preoccuparti: è vero che la mensa è buona!", prompt: "Welcome Riccardo in Italian: Welcome Riccardo! It's important that you're on time, but don't worry: it's true that the cafeteria is good!", tip: "pun-tu-A-le.", explanation: "Advice + subjunctive, fact + indicative." },
    ],
  },
];

export const IT_B1_U10_WRITING: WriteExercise = {
  type: "write",
  prompt: "A friend is coming to stay in your city (or a city you know) for a week. Write them an email with advice: what is important or better for them to do (è importante che tu... / è meglio che tu...), general rules and tips (bisogna..., è vietato..., è possibile...), and at least one fact (è vero che...).",
  minWords: 60,
  maxWords: 130,
  rubric: [
    "Uses impersonal phrases + che + subjunctive for advice to a specific person (è meglio che tu prenda...)",
    "Uses impersonal phrases + infinitive with no specific subject (bisogna prenotare, è vietato fumare)",
    "Uses the indicative after è vero / chiaro / evidente che",
    "Gives clear, practical, friendly advice in an informal email",
  ],
  modelAnswer: "Ciao Tom, che bello che vieni a Napoli! Ecco qualche consiglio. Dall'aeroporto è meglio che tu prenda l'Alibus: costa poco ed è veloce. In centro è difficile guidare, quindi è meglio non noleggiare la macchina. È vero che la pizza qui è la migliore del mondo, ma è importante che tu provi anche la sfogliatella! Per Pompei bisogna comprare i biglietti online, ed è possibile che ci sia tanta gente, quindi è meglio partire presto. Ah, è probabile che faccia caldo: porta la crema solare. Non vedo l'ora di vederti! Un abbraccio, Gennaro",
  explanation: "Advice for Tom uses \"che\" + subjunctive (\"che tu prenda\", \"che tu provi\"), and so do \"è possibile che ci sia\" and \"è probabile che faccia\". General tips use the infinitive (\"è difficile guidare\", \"bisogna comprare\", \"è meglio partire\"). \"È vero che la pizza è\" is a fact, so it takes the indicative. \"Che bello che vieni\" is a common spoken exclamation; in a formal text you'd write \"che tu venga\".",
};
