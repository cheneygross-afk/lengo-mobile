// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u08-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 8 Extra Practice: Reported Speech, Part 2. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U08_EXTRA: Lesson[] = [
  {
    slug: "b2-reported-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Commands and Questions",
    summary: "Fresh sentences reporting orders, requests and questions after a past reporting verb.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Told to, asked if",
        body: [
          "Command → \"di\" + infinitive (or \"che\" + imperfect subjunctive). Question → \"se\" or a question word + subjunctive in writing (indicative in speech). Shift pronouns to your point of view.",
        ],
        examples: [
          { es: "Mi ha detto di spegnere la luce.", en: "She told me to turn off the light." },
          { es: "Ci hanno chiesto di non parcheggiare lì.", en: "They asked us not to park there." },
          { es: "Mi ha chiesto se sapessi guidare.", en: "He asked me if I could drive." },
          { es: "Le ho chiesto quanto costasse il biglietto.", en: "I asked her how much the ticket cost." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They asked us not to park there.", answer: "Ci hanno chiesto di non parcheggiare lì.", altAnswers: ["Ci hanno chiesto di non parcheggiare là."], explanation: "\"Di non\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (written style).", source: "He asked me if I could drive.", answer: "Mi ha chiesto se sapessi guidare.", altAnswers: ["Mi chiese se sapessi guidare.", "Mi ha chiesto se sapevo guidare."], explanation: "\"Saper guidare\" → \"sapessi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me to turn off the light.", answer: "Mi ha detto di spegnere la luce.", altAnswers: ["Mi ha detto che spegnessi la luce."], explanation: "\"Spegni\" → \"di spegnere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (written style).", source: "I asked her how much the ticket cost.", answer: "Le ho chiesto quanto costasse il biglietto.", altAnswers: ["Le chiesi quanto costasse il biglietto.", "Le ho chiesto quanto costava il biglietto."], explanation: "\"Quanto\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The nurse told him to lie down.", answer: "L'infermiera gli ha detto di sdraiarsi.", altAnswers: ["L'infermiere gli ha detto di sdraiarsi.", "L'infermiera gli ha detto di stendersi."], explanation: "Reflexive matches him: \"sdraiarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (written style).", source: "She asked me where I had bought my shoes.", answer: "Mi ha chiesto dove avessi comprato le scarpe.", altAnswers: ["Mi chiese dove avessi comprato le scarpe.", "Mi ha chiesto dove avevo comprato le scarpe."], explanation: "Earlier → pluperfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My boss asked me to send him the report.", answer: "Il mio capo mi ha chiesto di mandargli la relazione.", altAnswers: ["Il capo mi ha chiesto di mandargli la relazione.", "Il mio capo mi ha chiesto di inviargli la relazione.", "Il mio capo mi ha chiesto di mandargli il rapporto."], explanation: "\"Mandami\" → \"di mandargli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (written style).", source: "They asked us if we had ever been to Sicily.", answer: "Ci hanno chiesto se fossimo mai stati in Sicilia.", altAnswers: ["Ci chiesero se fossimo mai stati in Sicilia.", "Ci hanno chiesto se eravamo mai stati in Sicilia."], explanation: "\"Fossimo stati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandpa told us not to run on the stairs.", answer: "Il nonno ci ha detto di non correre sulle scale.", altAnswers: ["Nonno ci ha detto di non correre sulle scale.", "Il nonno ci ha detto di non correre per le scale."], explanation: "\"Di non\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (written style).", source: "I asked the waiter what time the kitchen closed.", answer: "Ho chiesto al cameriere a che ora chiudesse la cucina.", altAnswers: ["Chiesi al cameriere a che ora chiudesse la cucina.", "Ho chiesto al cameriere a che ora chiudeva la cucina."], explanation: "\"A che ora\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Aspettatemi!\" → She told us [to wait for her].", sentence: "Ci ha detto ___.", answer: "di aspettarla", explanation: "\"Mi\" → \"la\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He asked me who [had told] me.", sentence: "Mi ha chiesto chi me l'___.", answer: "avesse detto", explanation: "Pluperfect subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: She asked me if I wanted a coffee.", words: ["Mi", "ha", "chiesto", "se", "volessi", "un", "caffè."], translation: "She asked me if I wanted a coffee.", explanation: "\"Se volessi\"." },
      { type: "multiple-choice", question: "\"Mi presti la bici?\", Luca asked me. Which report is correct?", options: ["Luca mi ha chiesto di prestargli la bici.", "Luca mi ha chiesto di prestarmi la bici.", "Luca mi ha chiesto che gli presto la bici.", "Luca mi ha chiesto se mi prestasse la bici."], correctIndex: 0, explanation: "\"Mi\" (Luca) → \"gli\"." },
      { type: "listen-choose", audio: "Il nonno ci ha detto di non correre sulle scale.", question: "What were the children told?", options: ["Not to run on the stairs.", "To go upstairs.", "To be quiet.", "To help Grandpa."], correctIndex: 0, explanation: "\"Di non correre\"." },
      { type: "dictation", audio: "Le ho chiesto quanto costasse il biglietto per Napoli.", explanation: "\"Quanto costasse\"." },
      { type: "speak", text: "L'infermiera mi ha detto di sdraiarmi e mi ha chiesto se fossi allergico a qualcosa.", prompt: "Say it in Italian: The nurse told me to lie down and asked me if I was allergic to anything.", tip: "\"Sdraiarmi\": the reflexive matches me.", explanation: "Command and question." },
    ],
  },
  {
    slug: "b2-reported-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Reporting Verbs",
    summary: "Fresh sentences with sostenere, ammettere, negare, promettere, minacciare, suggerire and more.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Beyond dire",
        body: [
          "\"Sostenere che\" + subjunctive (a doubtful claim); \"ammettere / negare di\" + infinitive or \"che\"; \"promettere / minacciare di\" + infinitive; \"suggerire / proporre che\" + subjunctive.",
        ],
        examples: [
          { es: "Sostiene di essere stato a casa tutta la sera.", en: "He claims he was at home all evening." },
          { es: "Ha ammesso di aver perso le chiavi.", en: "She admitted she'd lost the keys." },
          { es: "Hanno minacciato di andarsene.", en: "They threatened to leave." },
          { es: "Ho proposto che ci vedessimo sabato.", en: "I suggested we meet on Saturday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They threatened to leave.", answer: "Hanno minacciato di andarsene.", altAnswers: ["Hanno minacciato di andare via.", "Minacciarono di andarsene."], explanation: "\"Minacciare di\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I suggested we meet on Saturday.", answer: "Ho proposto che ci vedessimo sabato.", altAnswers: ["Ho suggerito che ci vedessimo sabato.", "Ho proposto di vederci sabato."], explanation: "\"Proporre che\" + imperfect subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He claims he was at home all evening.", answer: "Sostiene di essere stato a casa tutta la sera.", altAnswers: ["Sostiene che è stato a casa tutta la sera.", "Sostiene che sia stato a casa tutta la sera."], explanation: "Same subject → \"di essere stato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She admitted she'd lost the keys.", answer: "Ha ammesso di aver perso le chiavi.", altAnswers: ["Ha ammesso di avere perso le chiavi.", "Ha ammesso che aveva perso le chiavi."], explanation: "\"Ammettere di\" + past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The company announced that it would close two factories.", answer: "L'azienda ha annunciato che avrebbe chiuso due stabilimenti.", altAnswers: ["L'azienda ha annunciato che chiuderà due stabilimenti.", "L'azienda ha annunciato che avrebbe chiuso due fabbriche."], explanation: "Future in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boy denied breaking the window.", answer: "Il ragazzo ha negato di aver rotto la finestra.", altAnswers: ["Il ragazzo ha negato di avere rotto la finestra.", "Il ragazzo ha negato di aver rotto il vetro."], explanation: "\"Negare di\" + past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She promised she wouldn't tell anyone.", answer: "Ha promesso che non l'avrebbe detto a nessuno.", altAnswers: ["Ha promesso di non dirlo a nessuno.", "Ha promesso che non lo avrebbe detto a nessuno."], explanation: "\"Promettere di non\" or past conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lawyer maintains that his client is innocent.", answer: "L'avvocato sostiene che il suo cliente sia innocente.", altAnswers: ["L'avvocato sostiene che il suo cliente è innocente.", "L'avvocata sostiene che il suo cliente sia innocente."], explanation: "\"Sostenere che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He replied that he had no time.", answer: "Ha risposto che non aveva tempo.", altAnswers: ["Rispose che non aveva tempo."], explanation: "\"Rispondere che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guide recommended that we bring water.", answer: "La guida ci ha raccomandato di portare dell'acqua.", altAnswers: ["La guida ci ha raccomandato di portare acqua.", "La guida ha raccomandato che portassimo dell'acqua.", "La guida ci ha consigliato di portare dell'acqua."], explanation: "\"Raccomandare di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [complained] that the room was too small.", sentence: "Si è ___ che la stanza era troppo piccola.", answer: "lamentato", explanation: "\"Lamentarsi che\" = to complain that." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The witness [confirmed] that he had seen the car.", sentence: "Il testimone ___ di aver visto la macchina.", answer: "ha confermato", altAnswers: ["confermò"], explanation: "\"Confermare di\" / \"che\"." },
      { type: "matching", instructions: "Match the verb to its pattern.", pairs: [{ left: "minacciare", right: "di + infinitive" }, { left: "proporre", right: "che + subjunctive" }, { left: "negare", right: "di + past infinitive" }, { left: "rispondere", right: "che + indicative" }], explanation: "Common patterns." },
      { type: "multiple-choice", question: "Which verb fits: \"Il ladro ___ di aver rubato il portafoglio\" (he finally said yes, he did it)?", options: ["ha ammesso", "ha negato", "ha minacciato", "ha proposto"], correctIndex: 0, explanation: "\"Ammettere\" = to admit." },
      { type: "listen-choose", audio: "Ha promesso che non l'avrebbe detto a nessuno, ma il giorno dopo lo sapevano tutti.", question: "What happened?", options: ["She broke her promise.", "She kept the secret.", "Nobody found out.", "She forgot the secret."], correctIndex: 0, explanation: "\"Lo sapevano tutti\" = everyone knew." },
      { type: "dictation", audio: "L'avvocato sostiene che il suo cliente sia innocente.", explanation: "\"Sostenere che\" + \"sia\"." },
      { type: "speak", text: "Il ragazzo ha negato di aver rotto la finestra, ma poi ha ammesso che stava giocando a pallone.", prompt: "Say it in Italian: The boy denied breaking the window, but then admitted he'd been playing soccer.", tip: "\"Negato di aver\", \"ammesso che\".", explanation: "Two reporting verbs." },
    ],
  },
  {
    slug: "b2-reported-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Whole Dialogues",
    summary: "Fresh short dialogues to turn into reported speech, line by line.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A dialogue at the hotel",
        body: [
          "Report each line in the past. Decide: statement, question or command? Then change tense, pronouns and time words.",
        ],
        examples: [
          { es: "\"Avete una camera per stanotte?\" → Ha chiesto se avessero una camera per quella notte.", en: "\"Do you have a room for tonight?\" → He asked if they had a room for that night." },
          { es: "\"Ne è rimasta solo una.\" → La receptionist ha detto che ne era rimasta solo una.", en: "\"There's only one left.\" → The receptionist said there was only one left." },
          { es: "\"Me la può tenere fino alle otto?\" → Le ha chiesto di tenergliela fino alle otto.", en: "\"Can you keep it for me until eight?\" → He asked her to keep it for him until eight." },
          { es: "\"Gliela tengo, ma arrivi puntuale.\" → Ha detto che gliel'avrebbe tenuta, ma che arrivasse puntuale.", en: "\"I'll keep it for you, but arrive on time.\" → She said she'd keep it for him, but that he should arrive on time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "The guest asked: \"Avete una camera per stanotte?\" Report it in Italian (written style).", source: "He asked if they had a room for that night.", answer: "Ha chiesto se avessero una camera per quella notte.", altAnswers: ["Chiese se avessero una camera per quella notte.", "Ha chiesto se avevano una camera per quella notte."], explanation: "\"Stanotte\" → \"quella notte\"." },
          { type: "translate", direction: "en-es", prompt: "The receptionist said: \"Ne è rimasta solo una.\" Report it in Italian.", source: "The receptionist said there was only one left.", answer: "La receptionist ha detto che ne era rimasta solo una.", altAnswers: ["Il receptionist ha detto che ne era rimasta solo una.", "La receptionist ha detto che ne era rimasta soltanto una."], explanation: "\"È rimasta\" → \"era rimasta\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "The guest asked: \"Me la può tenere fino alle otto?\" Report it in Italian.", source: "He asked her to keep it for him until eight.", answer: "Le ha chiesto di tenergliela fino alle otto.", altAnswers: ["Le ha chiesto se potesse tenergliela fino alle otto.", "Le ha chiesto se gliela potesse tenere fino alle otto."], explanation: "\"Me la\" → \"gliela\"." },
      { type: "translate", direction: "en-es", prompt: "The receptionist said: \"Gliela tengo, ma arrivi puntuale.\" Report it in Italian.", source: "She said she'd keep it for him, but that he should arrive on time.", answer: "Ha detto che gliel'avrebbe tenuta, ma che arrivasse puntuale.", altAnswers: ["Ha detto che gliela avrebbe tenuta, ma che arrivasse puntuale.", "Ha detto che gliel'avrebbe tenuta, ma di arrivare puntuale."], explanation: "Promise → past conditional; command → \"che arrivasse\"." },
      { type: "translate", direction: "en-es", prompt: "Carla said to her son: \"Hai fatto i compiti?\" Report it in Italian (written style).", source: "Carla asked her son if he had done his homework.", answer: "Carla ha chiesto a suo figlio se avesse fatto i compiti.", altAnswers: ["Carla ha chiesto al figlio se avesse fatto i compiti.", "Carla ha chiesto a suo figlio se aveva fatto i compiti."], explanation: "Earlier → pluperfect." },
      { type: "translate", direction: "en-es", prompt: "Her son replied: \"Li faccio dopo cena.\" Report it in Italian.", source: "Her son replied that he would do them after dinner.", answer: "Il figlio ha risposto che li avrebbe fatti dopo cena.", altAnswers: ["Suo figlio ha risposto che li avrebbe fatti dopo cena.", "Il figlio ha risposto che li avrebbe fatti dopo la cena."], explanation: "Present with future meaning → past conditional; \"li\" + agreement." },
      { type: "translate", direction: "en-es", prompt: "Carla said: \"No, falli adesso!\" Report it in Italian.", source: "Carla told him to do them right then.", answer: "Carla gli ha detto di farli subito.", altAnswers: ["Carla gli ha detto di farli in quel momento.", "Carla gli ha detto di farli allora.", "Carla gli ha detto che li facesse subito."], explanation: "\"Adesso\" → \"subito\" / \"in quel momento\"." },
      { type: "translate", direction: "en-es", prompt: "Davide said: \"Ieri ho visto Sara al mercato.\" Report it in Italian.", source: "Davide said he had seen Sara at the market the day before.", answer: "Davide ha detto che il giorno prima aveva visto Sara al mercato.", altAnswers: ["Davide ha detto che aveva visto Sara al mercato il giorno prima."], explanation: "\"Ieri\" → \"il giorno prima\"; trapassato." },
      { type: "translate", direction: "en-es", prompt: "Sara said: \"Se mi chiama, gli rispondo.\" Report it in Italian.", source: "Sara said that if he called her, she would answer him.", answer: "Sara ha detto che, se l'avesse chiamata, gli avrebbe risposto.", altAnswers: ["Sara ha detto che se l'avesse chiamata gli avrebbe risposto.", "Sara ha detto che gli avrebbe risposto se l'avesse chiamata."], explanation: "Reported if sentence." },
      { type: "translate", direction: "en-es", prompt: "The coach said to the team: \"Domani allenamento alle sette, non fate tardi!\" Report it in Italian.", source: "The coach told the team there was training at seven the next day and not to be late.", answer: "L'allenatore ha detto alla squadra che il giorno dopo c'era allenamento alle sette e di non fare tardi.", altAnswers: ["L'allenatore ha detto alla squadra che il giorno dopo ci sarebbe stato allenamento alle sette e di non fare tardi.", "L'allenatrice ha detto alla squadra che il giorno dopo c'era allenamento alle sette e di non fare tardi."], explanation: "Statement + command in one report." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Dove vai?\" → She asked me where I [was going].", sentence: "Mi ha chiesto dove ___.", answer: "andassi", altAnswers: ["stessi andando", "andavo"], explanation: "Imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Ti chiamo stasera.\" → He said [he would call me] that evening.", sentence: "Ha detto che ___ quella sera.", answer: "mi avrebbe chiamato", altAnswers: ["mi avrebbe chiamata"], explanation: "\"Ti\" → \"mi\"; future → past conditional." },
      { type: "multiple-choice", question: "\"Non posso venire perché sto male\", said Irene. Which report is correct?", options: ["Irene ha detto che non poteva venire perché stava male.", "Irene ha detto che non può venire perché sta male.", "Irene ha detto che non potesse venire perché stesse male.", "Irene ha detto di non poter venire perché starebbe male."], correctIndex: 0, explanation: "Present → imperfect; statements stay indicative." },
      { type: "listen-choose", audio: "Il figlio ha risposto che li avrebbe fatti dopo cena, ma la mamma gli ha detto di farli subito.", question: "When did the mother want the homework done?", options: ["Straight away.", "After dinner.", "The next morning.", "On the weekend."], correctIndex: 0, explanation: "\"Di farli subito\"." },
      { type: "dictation", audio: "Ha detto che gliel'avrebbe tenuta, ma che arrivasse puntuale.", explanation: "\"Gliel'avrebbe tenuta\"." },
      { type: "dictation", audio: "Sara ha detto che, se l'avesse chiamata, gli avrebbe risposto.", explanation: "Reported if sentence." },
      { type: "speak", text: "Carla ha chiesto a suo figlio se avesse fatto i compiti. Lui ha risposto che li avrebbe fatti dopo cena, ma lei gli ha detto di farli subito.", prompt: "Retell the dialogue: Carla asked her son if he'd done his homework; he said he'd do it after dinner, but she told him to do it straight away.", tip: "Question, statement, command: three structures.", explanation: "A whole dialogue reported." },
    ],
  },
];
