// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u29-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 29 Extra Practice: Feelings and Relationships. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U29_EXTRA: Lesson[] = [
  {
    slug: "b1-feelings-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Reciprocal Verbs",
    summary: "Fresh sentences about couples, friends and neighbors with reciprocal verbs in the present and the past.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Friends, neighbors, couples",
        body: [
          "Reciprocal verbs use \"ci / vi / si\" + a plural verb: \"ci aiutiamo\", \"vi capite\", \"si salutano\". In the past they take \"essere\" and the participle agrees: \"si sono aiutati\", \"ci siamo capite\" (two women).",
        ],
        examples: [
          { es: "I vicini si salutano sempre sulle scale.", en: "The neighbors always say hello on the stairs." },
          { es: "Io e mia sorella ci aiutiamo molto.", en: "My sister and I help each other a lot." },
          { es: "Si sono rivisti dopo vent'anni.", en: "They saw each other again after twenty years." },
          { es: "Vi siete capiti subito?", en: "Did you understand each other right away?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister and I help each other a lot.", answer: "Io e mia sorella ci aiutiamo molto.", altAnswers: ["Mia sorella e io ci aiutiamo molto.", "Io e mia sorella ci aiutiamo tanto."], explanation: "\"Io e\" + someone takes the \"noi\" form." },
          { type: "listen-choose", audio: "Si sono rivisti dopo vent'anni.", question: "What happened?", options: ["They met again after twenty years.", "They met twenty years ago for the first time.", "They haven't seen each other for twenty years.", "They separated after twenty years."], correctIndex: 0, explanation: "\"Rivedersi\" = to see each other again." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbors always say hello.", answer: "I vicini si salutano sempre.", altAnswers: ["I vicini di casa si salutano sempre."], explanation: "\"Salutarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They saw each other again after twenty years.", answer: "Si sono rivisti dopo vent'anni.", altAnswers: ["Si sono rivisti dopo venti anni."], explanation: "\"Ri-\" = again." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We understand each other without speaking.", answer: "Ci capiamo senza parlare.", altAnswers: ["Noi ci capiamo senza parlare."], explanation: "\"Senza\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you two still write to each other?", answer: "Vi scrivete ancora?", altAnswers: ["Voi vi scrivete ancora?"], explanation: "\"Voi\" present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They kissed in the rain.", answer: "Si sono baciati sotto la pioggia.", altAnswers: ["Si sono baciate sotto la pioggia."], explanation: "Reciprocal \"baciarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca and Martina got engaged.", answer: "Luca e Martina si sono fidanzati.", altAnswers: ["Luca e Martina si sono fidanzati ufficialmente."], explanation: "\"Fidanzarsi\" = to get engaged." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We haven't seen each other for ages.", answer: "Non ci vediamo da secoli.", altAnswers: ["Non ci vediamo da tanto tempo.", "Non ci vediamo da una vita."], explanation: "\"Da\" + present; \"da secoli\" = for ages." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The two brothers don't get along.", answer: "I due fratelli non vanno d'accordo.", altAnswers: ["I due fratelli non si sopportano."], explanation: "\"Andare d'accordo\" = to get along." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anna and Sofia met on vacation.", answer: "Anna e Sofia si sono conosciute in vacanza.", altAnswers: ["Anna e Sofia si sono conosciute durante le vacanze."], explanation: "Two women: \"conosciute\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [phoned each other] yesterday.", sentence: "___ ieri.", answer: "Ci siamo telefonati", altAnswers: ["Ci siamo telefonate", "Ci siamo sentiti", "Ci siamo sentite"], explanation: "Past reciprocal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [respect each other] a lot.", sentence: "___ molto.", answer: "Si rispettano", explanation: "\"Rispettarsi\"." },
      { type: "word-order", prompt: "Put the words in order to say: We said goodbye at the station.", words: ["Ci", "siamo", "salutati", "alla", "stazione."], translation: "We said goodbye at the station.", explanation: "\"Salutarsi\" = to greet or say goodbye." },
      { type: "multiple-choice", question: "A married couple split up. Which sentence is correct?", options: ["Si sono separati.", "Hanno separato.", "Si hanno separati.", "Sono separato."], correctIndex: 0, explanation: "Reciprocal with \"essere\"." },
      { type: "dictation", audio: "Non ci vediamo da secoli, ma ci sentiamo spesso.", explanation: "Two reciprocal verbs." },
      { type: "speak", text: "Io e la mia vicina ci aiutiamo sempre: ci siamo conosciute il giorno del trasloco.", prompt: "Say it (you're a woman): My neighbor and I always help each other: we met on moving day.", tip: "\"Conosciute\": two women.", explanation: "Present and past reciprocals." },
    ],
  },
  {
    slug: "b1-feelings-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Emotions",
    summary: "Fresh sentences naming emotions: arrabbiato, deluso, geloso, imbarazzato, orgoglioso, commosso, sollevato.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "How did you feel?",
        body: [
          "Use \"essere\" or \"sentirsi\" + adjective, and make it agree: \"mi sono sentita sollevata\". Many emotions also have a verb: \"arrabbiarsi\" (to get angry), \"commuoversi\" (to be moved), \"vergognarsi\" (to be ashamed), \"offendersi\" (to take offense).",
        ],
        examples: [
          { es: "Mi sono commossa al matrimonio.", en: "I got emotional at the wedding." },
          { es: "Si è arrabbiato con il capo.", en: "He got angry with his boss." },
          { es: "Mi vergogno un po'.", en: "I'm a bit ashamed." },
          { es: "Ci siamo sentiti sollevati.", en: "We felt relieved." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He got angry with his boss.", answer: "Si è arrabbiato con il capo.", altAnswers: ["Si è arrabbiato col capo.", "Si è arrabbiato con il suo capo."], explanation: "\"Arrabbiarsi con\"." },
          { type: "listen-choose", audio: "Mi sono commossa al matrimonio.", question: "How did the speaker feel at the wedding?", options: ["moved", "bored", "embarrassed", "angry"], correctIndex: 0, explanation: "\"Commuoversi\" = to be moved." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got emotional at the wedding. (a woman)", answer: "Mi sono commossa al matrimonio.", altAnswers: ["Mi sono emozionata al matrimonio.", "Ero commossa al matrimonio."], explanation: "\"Commuoversi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm a bit ashamed.", answer: "Mi vergogno un po'.", altAnswers: ["Mi vergogno un pochino."], explanation: "\"Vergognarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She took offense.", answer: "Si è offesa.", altAnswers: ["Lei si è offesa.", "Se l'è presa."], explanation: "\"Offendersi\" → \"offesa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents are proud of me.", answer: "I miei genitori sono orgogliosi di me.", altAnswers: ["I miei genitori sono fieri di me."], explanation: "\"Orgoglioso di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were very disappointed.", answer: "Eravamo molto delusi.", altAnswers: ["Eravamo molto deluse.", "Siamo rimasti molto delusi."], explanation: "\"Deluso\" = disappointed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's jealous of her friends.", answer: "È geloso dei suoi amici.", altAnswers: ["Lui è geloso dei suoi amici.", "È geloso delle sue amiche."], explanation: "\"Geloso di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I felt embarrassed.", answer: "Mi sono sentito in imbarazzo.", altAnswers: ["Mi sono sentita in imbarazzo.", "Ero imbarazzato.", "Ero imbarazzata."], explanation: "\"Sentirsi in imbarazzo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's nervous about the exam.", answer: "È agitata per l'esame.", altAnswers: ["È nervosa per l'esame.", "È in ansia per l'esame."], explanation: "\"Agitato\" = nervous, on edge." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't get angry!", answer: "Non arrabbiarti!", altAnswers: ["Non ti arrabbiare!"], explanation: "Negative \"tu\" imperative: \"non\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [felt relieved] when they arrived.", sentence: "___ quando sono arrivati.", answer: "Ci siamo sentiti sollevati", altAnswers: ["Ci siamo sentite sollevate", "Eravamo sollevati"], explanation: "\"Sentirsi\" + adjective, agreeing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandmother is [lonely].", sentence: "Mia nonna si sente ___.", answer: "sola", explanation: "\"Sentirsi solo / sola\" = to feel lonely." },
      { type: "word-order", prompt: "Put the words in order to say: I was very proud of my daughter.", words: ["Ero", "molto", "orgoglioso", "di", "mia", "figlia."], translation: "I was very proud of my daughter.", explanation: "\"Orgoglioso di\"." },
      { type: "multiple-choice", question: "Your friend got the job after weeks of worry. She's ...", options: ["sollevata", "gelosa", "imbarazzata", "offesa"], correctIndex: 0, explanation: "\"Sollevata\" = relieved." },
      { type: "dictation", audio: "Si è offesa perché non l'abbiamo invitata.", explanation: "\"Invitata\" agrees with \"l'\" (her)." },
      { type: "speak", text: "Ero agitata prima dell'esame, ma adesso sono sollevata e un po' orgogliosa.", prompt: "Say it (you're a woman): I was nervous before the exam, but now I'm relieved and a bit proud.", tip: "Feminine endings: \"agitata\", \"sollevata\", \"orgogliosa\".", explanation: "Three emotions, one story." },
    ],
  },
  {
    slug: "b1-feelings-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Feelings + Subjunctive",
    summary: "Fresh sentences with mi fa piacere che, mi dà fastidio che, mi preoccupa che and other feelings + subjunctive.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Feeling + che",
        body: [
          "A feeling + \"che\" + a different subject → subjunctive: \"Mi fa piacere che tu venga\", \"Mi dispiace che abbiate perso\". Same subject → \"di\" + infinitive: \"Mi dispiace di aver perso\". For a past feeling, use \"quando\" + imperfetto: \"Mi preoccupavo quando non mangiava\".",
        ],
        examples: [
          { es: "Mi fa piacere che tu venga alla festa.", en: "I'm glad you're coming to the party." },
          { es: "Mi dispiace che abbiate perso la partita.", en: "I'm sorry you lost the game." },
          { es: "Mi preoccupavo quando non mangiava.", en: "I used to worry when he didn't eat." },
          { es: "Mi dispiace di aver perso il tuo numero.", en: "I'm sorry I lost your number." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you're coming to the party. (to a friend)", answer: "Mi fa piacere che tu venga alla festa.", altAnswers: ["Sono contento che tu venga alla festa.", "Sono contenta che tu venga alla festa."], explanation: "\"Venga\": subjunctive of \"venire\"." },
          { type: "listen-choose", audio: "Mi preoccupavo quando non mangiava.", question: "What worried the speaker?", options: ["He wasn't eating.", "He was eating too much.", "He wasn't sleeping.", "He wasn't calling."], correctIndex: 0, explanation: "\"Quando\" + imperfetto for a past habit." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you lost the game. (to a team)", answer: "Mi dispiace che abbiate perso la partita.", altAnswers: ["Mi dispiace che abbiate perso."], explanation: "Past subjunctive, \"voi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry I lost your number. (to a friend)", answer: "Mi dispiace di aver perso il tuo numero.", altAnswers: ["Mi dispiace di avere perso il tuo numero.", "Scusa, ho perso il tuo numero."], explanation: "Same subject: past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It bothers me that they make noise at night.", answer: "Mi dà fastidio che facciano rumore di notte.", altAnswers: ["Mi dà fastidio che facciano rumore la notte."], explanation: "\"Facciano\": subjunctive of \"fare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It worries me that she works so much.", answer: "Mi preoccupa che lavori così tanto.", altAnswers: ["Mi preoccupa che lei lavori così tanto.", "Mi preoccupa che lavori tanto."], explanation: "\"Lavori\": subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're happy you've found a job. (to a friend)", answer: "Siamo felici che tu abbia trovato lavoro.", altAnswers: ["Siamo contenti che tu abbia trovato lavoro.", "Ci fa piacere che tu abbia trovato lavoro.", "Siamo felici che tu abbia trovato un lavoro."], explanation: "Past subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It annoys me that he never listens.", answer: "Mi dà fastidio che non ascolti mai.", altAnswers: ["Mi dà fastidio che lui non ascolti mai."], explanation: "\"Ascolti\": present subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm surprised she didn't come.", answer: "Mi stupisce che non sia venuta.", altAnswers: ["Mi sorprende che non sia venuta.", "Mi meraviglia che non sia venuta."], explanation: "Surprise + \"che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid it's too late.", answer: "Ho paura che sia troppo tardi.", altAnswers: ["Temo che sia troppo tardi."], explanation: "\"Avere paura che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad to be home.", answer: "Sono contento di essere a casa.", altAnswers: ["Sono contenta di essere a casa.", "Mi fa piacere essere a casa.", "Sono felice di essere a casa."], explanation: "Same subject: infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a shame you [can't] stay. (to a friend)", sentence: "È un peccato che tu non ___ restare.", answer: "possa", explanation: "\"È un peccato che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm glad they [came].", sentence: "Sono contento che ___.", answer: "siano venuti", altAnswers: ["siano venute"], explanation: "Past subjunctive for a past event." },
      { type: "word-order", prompt: "Put the words in order to say: It bothers me that you don't answer.", words: ["Mi", "dà", "fastidio", "che", "tu", "non", "risponda."], translation: "It bothers me that you don't answer.", explanation: "Subjunctive \"risponda\"." },
      { type: "multiple-choice", question: "\"Mi dispiace ___ in ritardo.\" (I'm the one who's late)", options: ["di essere", "che io sia", "che sono", "essere di"], correctIndex: 0, explanation: "Same subject: \"di\" + infinitive." },
      { type: "dictation", audio: "Mi fa piacere che vi siate divertiti.", explanation: "Past subjunctive of \"divertirsi\"." },
      { type: "speak", text: "Mi fa piacere che tu sia tornato, ma mi preoccupa che tu lavori così tanto.", prompt: "Say it to a friend (a man): I'm glad you're back, but it worries me that you work so much.", tip: "Keep \"tu\": \"sia\" and \"lavori\" don't show the person.", explanation: "Two feelings + subjunctive." },
    ],
  },
];
