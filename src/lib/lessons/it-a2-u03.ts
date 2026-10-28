// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u03.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 3: Essere or Avere? The auxiliary rule, verbs with both
// auxiliaries, modal verbs in the past, già / ancora / appena / mai and
// their position.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U03: Lesson[] = [
  {
    slug: "a2-auxiliary-rule",
    level: "IT-A2",
    number: 1,
    title: "Essere or Avere: The Rule",
    summary: "Choose the auxiliary: avere for most verbs, especially with an object; essere for movement, change, reflexives, piacere and staying.",
    duration: "15 min",
    sections: [
      {
        heading: "Avere: the default",
        body: [
          "Most Italian verbs take \"avere\", and every verb that can take a direct object does: \"Ho mangiato una mela\", \"Abbiamo visto Marco\", \"Hai comprato il pane?\". Some verbs without an object take \"avere\" too: \"Ho dormito\", \"Ho lavorato\", \"Ho camminato\", \"Abbiamo riso\" (we laughed).",
          "A useful test: can you put \"qualcosa\" (something) or \"qualcuno\" (someone) after the verb? \"Mangiare qualcosa\", \"vedere qualcuno\": then it's \"avere\".",
        ],
        examples: [
          { es: "Ho mangiato una mela.", en: "I ate an apple." },
          { es: "Abbiamo visto Marco in centro.", en: "We saw Marco in the centre." },
          { es: "Ho camminato tutto il giorno.", en: "I walked all day." },
          { es: "Hanno riso tantissimo.", en: "They laughed a lot." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I walked all day.", answer: "Ho camminato tutto il giorno.", altAnswers: ["Io ho camminato tutto il giorno."], explanation: "\"Camminare\" takes \"avere\": walking is activity, not moving from A to B." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They laughed a lot.", answer: "Hanno riso tantissimo.", altAnswers: ["Hanno riso molto.", "Hanno riso tanto.", "Loro hanno riso tantissimo."], explanation: "\"Ridere\" → \"riso\", with \"avere\"." },
        ],
      },
      {
        heading: "Essere: five groups",
        body: [
          "\"Essere\" goes with: verbs of movement to or from a place (\"andare, venire, arrivare, partire, uscire\"); change of state (\"nascere, morire, diventare, crescere\"); staying (\"stare, restare, rimanere\") and \"essere\" itself; all reflexive verbs; and \"piacere\" with its family (\"è piaciuto\", \"è successo\", \"è costato\").",
          "Remember the difference between moving and doing an activity: \"Sono andato a Roma\" but \"Ho viaggiato molto\", \"Ho camminato\", \"Ho nuotato\" (I swam).",
        ],
        examples: [
          { es: "Sono andata in banca.", en: "I went to the bank." },
          { es: "Ho viaggiato molto quest'anno.", en: "I've travelled a lot this year." },
          { es: "Mio figlio è diventato papà.", en: "My son has become a dad." },
          { es: "Quanto è costato il biglietto?", en: "How much did the ticket cost?" },
          { es: "Abbiamo nuotato al lago.", en: "We swam in the lake." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "I've travelled a lot this year. Which is right?", options: ["Ho viaggiato molto quest'anno.", "Sono viaggiato molto quest'anno.", "Sono viaggiata molto quest'anno.", "Ho viaggiata molto quest'anno."], correctIndex: 0, explanation: "\"Viaggiare\" is an activity, not a move to a place: \"avere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much did the ticket cost?", answer: "Quanto è costato il biglietto?", altAnswers: ["Il biglietto quanto è costato?"], explanation: "\"Costare\" takes \"essere\"." },
        ],
      },
      {
        heading: "Weather verbs",
        body: [
          "Weather verbs accept both: \"È piovuto\" and \"Ha piovuto\" are both correct for it rained; \"È nevicato\" and \"Ha nevicato\" too. Use whichever you hear around you. With \"fare\" the weather stays with \"avere\": \"Ha fatto caldo\" (it was hot).",
        ],
        examples: [
          { es: "Ieri è piovuto tutto il giorno.", en: "Yesterday it rained all day." },
          { es: "Ha nevicato in montagna.", en: "It snowed in the mountains." },
          { es: "Ha fatto freddo a Torino.", en: "It was cold in Turin." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yesterday it rained all day.", answer: "Ieri è piovuto tutto il giorno.", altAnswers: ["Ieri ha piovuto tutto il giorno.", "È piovuto tutto il giorno ieri.", "Ha piovuto tutto il giorno ieri."], explanation: "Both \"è piovuto\" and \"ha piovuto\" are correct." },
          { type: "listen-choose", audio: "Ha fatto freddo a Torino.", question: "What does it mean?", options: ["It was cold in Turin.", "It's cold in Turin.", "It snowed in Turin.", "He was cold in Turin."], correctIndex: 0, explanation: "\"Ha fatto freddo\": the past of \"fa freddo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I went to the bank. (a woman speaking)", answer: "Sono andata in banca.", altAnswers: ["Io sono andata in banca."], explanation: "Movement to a place: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We swam in the lake.", answer: "Abbiamo nuotato nel lago.", altAnswers: ["Abbiamo nuotato al lago.", "Noi abbiamo nuotato nel lago."], explanation: "\"Nuotare\" is an activity: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My son has become a dad.", answer: "Mio figlio è diventato papà.", altAnswers: ["Mio figlio è diventato padre."], explanation: "Change of state: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It snowed in the mountains.", answer: "Ha nevicato in montagna.", altAnswers: ["È nevicato in montagna."], explanation: "Weather verbs: both auxiliaries." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We saw Marco in the centre.", answer: "Abbiamo visto Marco in centro.", altAnswers: ["Noi abbiamo visto Marco in centro."], explanation: "An object (Marco): \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you have fun? (plural)", answer: "Vi siete divertiti?", altAnswers: ["Vi siete divertite?", "Voi vi siete divertiti?"], explanation: "Reflexive: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [slept] badly.", sentence: "Luca ___ male.", answer: "ha dormito", explanation: "\"Dormire\": no object, but an activity: \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sofia [stayed] in bed.", sentence: "Sofia ___ a letto.", answer: "è rimasta", altAnswers: ["è restata", "è stata"], explanation: "Staying: \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: It was hot and we stayed at home.", words: ["Ha", "fatto", "caldo", "e", "siamo", "rimasti", "a", "casa."], translation: "It was hot and we stayed at home.", explanation: "\"Fare\" with \"avere\"; \"rimanere\" with \"essere\"." },
      { type: "multi-select", question: "Which of these verbs take essere in the past? Choose all that apply.", options: ["partire", "mangiare", "diventare", "dormire", "piacere", "camminare"], correctIndexes: [0, 2, 4], explanation: "Movement, change and piacere take \"essere\"." },
      { type: "dictation", audio: "Sono uscito presto e ho camminato fino al parco.", explanation: "\"Uscire\" with essere, \"camminare\" with avere." },
      { type: "speak", text: "Sabato sono andato al lago, ho nuotato e ho mangiato un panino. È piovuto la sera.", prompt: "Say it as a man: On Saturday I went to the lake, swam and ate a sandwich. It rained in the evening.", tip: "Choose the auxiliary first, then the participle.", explanation: "Essere for \"andare\", avere for the activities." },
    ],
  },
  {
    slug: "a2-verbs-with-both-auxiliaries",
    level: "IT-A2",
    number: 2,
    title: "Verbs That Take Both",
    summary: "Finire, cominciare, passare, salire, scendere, cambiare and correre: avere with an object, essere without one.",
    duration: "15 min",
    sections: [
      {
        heading: "With an object or without",
        body: [
          "Some verbs can be done by someone to something, or just happen. With an object they take \"avere\": \"Ho finito il lavoro\" (I finished the work). Without one, when the thing itself finishes or starts, they take \"essere\": \"Il film è finito\" (the film has ended).",
          "The same goes for \"cominciare\" and \"iniziare\": \"Ho cominciato un corso\" / \"La lezione è cominciata\"; and \"cambiare\": \"Ho cambiato casa\" / \"La città è cambiata\".",
        ],
        examples: [
          { es: "Ho finito il lavoro alle sei.", en: "I finished work at six." },
          { es: "Il film è finito tardi.", en: "The film ended late." },
          { es: "Abbiamo cominciato un corso di cucina.", en: "We've started a cookery course." },
          { es: "La lezione è cominciata alle nove.", en: "The lesson started at nine." },
          { es: "Ho cambiato casa. / La città è cambiata.", en: "I've moved house. / The city has changed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film ended late.", answer: "Il film è finito tardi.", explanation: "No object: the film finished by itself, so \"essere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've started a cookery course.", answer: "Abbiamo cominciato un corso di cucina.", altAnswers: ["Abbiamo iniziato un corso di cucina."], explanation: "An object (\"un corso\"): \"avere\"." },
        ],
      },
      {
        heading: "Passare, salire, scendere",
        body: [
          "\"Passare\" with an object is to spend time or to pass an exam: \"Ho passato una bella giornata\", \"Ha passato l'esame\". Without an object it means to drop in somewhere: \"Sono passato in farmacia\", \"Passo da te?\" → \"Sono passata da te\".",
          "\"Salire\" and \"scendere\" take \"avere\" with the stairs or the hill as object: \"Ho salito le scale\"; and \"essere\" when you go up or down somewhere: \"Sono salito sul treno\", \"Siamo scesi dall'autobus\".",
        ],
        examples: [
          { es: "Abbiamo passato una bella giornata.", en: "We had a lovely day." },
          { es: "Sono passato in farmacia.", en: "I dropped in at the pharmacy." },
          { es: "Ho salito tre piani a piedi.", en: "I walked up three floors." },
          { es: "Siamo scesi dall'autobus in piazza.", en: "We got off the bus in the square." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had a lovely day.", answer: "Abbiamo passato una bella giornata.", altAnswers: ["Abbiamo trascorso una bella giornata.", "Noi abbiamo passato una bella giornata."], explanation: "\"Passare\" + time as object: \"avere\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [dropped in] at the pharmacy. (a man speaking)", sentence: "___ in farmacia.", answer: "Sono passato", altAnswers: ["Io sono passato"], explanation: "No object, movement to a place: \"essere\"." },
          { type: "listen-choose", audio: "Siamo scesi dall'autobus in piazza.", question: "What did they do?", options: ["They got off the bus.", "They got on the bus.", "They missed the bus.", "They walked down the stairs."], correctIndex: 0, explanation: "\"Scendere da\" = to get off." },
        ],
      },
      {
        heading: "Correre",
        body: [
          "\"Correre\" (to run) takes \"avere\" as an activity: \"Ho corso per un'ora\". When you run to a place, it takes \"essere\": \"Sono corso a casa\", \"È corsa in stazione\". The participle is \"corso\" either way.",
        ],
        examples: [
          { es: "Ho corso per un'ora al parco.", en: "I ran for an hour in the park." },
          { es: "Giulia è corsa a prendere il treno.", en: "Giulia ran to catch the train." },
          { es: "Abbiamo corso la maratona di Roma.", en: "We ran the Rome marathon." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I ran for an hour in the park.", answer: "Ho corso per un'ora al parco.", altAnswers: ["Ho corso un'ora al parco.", "Ho corso per un'ora nel parco.", "Io ho corso per un'ora al parco."], explanation: "Running as an activity: \"avere\"." },
          { type: "multiple-choice", question: "Giulia ran home. Which is right?", options: ["Giulia è corsa a casa.", "Giulia ha corso a casa.", "Giulia è corso a casa.", "Giulia ha corsa a casa."], correctIndex: 0, explanation: "Running to a place: \"essere\", agreeing with Giulia." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I finished work at six.", answer: "Ho finito il lavoro alle sei.", altAnswers: ["Ho finito di lavorare alle sei.", "Io ho finito il lavoro alle sei."], explanation: "Object: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lesson started at nine.", answer: "La lezione è cominciata alle nove.", altAnswers: ["La lezione è iniziata alle nove."], explanation: "No object: \"essere\", agreeing with \"lezione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city has changed.", answer: "La città è cambiata.", explanation: "The city changes by itself: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've moved house.", answer: "Abbiamo cambiato casa.", altAnswers: ["Noi abbiamo cambiato casa."], explanation: "\"Cambiare casa\": object, \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chiara passed the exam.", answer: "Chiara ha passato l'esame.", altAnswers: ["Chiara ha superato l'esame."], explanation: "Object: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We got on the train in Milan.", answer: "Siamo saliti sul treno a Milano.", altAnswers: ["Siamo salite sul treno a Milano.", "A Milano siamo saliti sul treno."], explanation: "Going up into something: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I walked up] three floors.", sentence: "___ tre piani a piedi.", answer: "Ho salito", altAnswers: ["Io ho salito"], explanation: "\"Tre piani\" is the object: \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The holidays [have ended].", sentence: "Le vacanze ___.", answer: "sono finite", explanation: "No object: \"essere\" + \"-e\"." },
      { type: "word-order", prompt: "Put the words in order to say: Marco ran to the station.", words: ["Marco", "è", "corso", "in", "stazione."], translation: "Marco ran to the station.", explanation: "Running to a place: \"essere\"." },
      { type: "multiple-choice", question: "The concert started late. Which is right?", options: ["Il concerto è cominciato tardi.", "Il concerto ha cominciato tardi.", "Il concerto è cominciata tardi.", "Il concerto ha cominciati tardi."], correctIndex: 0, explanation: "No object: \"essere\" + \"-o\"." },
      { type: "dictation", audio: "Ho finito il libro, ma il film non è ancora finito.", explanation: "\"Ho finito\" with an object, \"è finito\" without." },
      { type: "speak", text: "Ho cominciato a lavorare alle otto e la riunione è cominciata alle nove.", prompt: "Say it in Italian: I started working at eight and the meeting started at nine.", tip: "Same verb, two auxiliaries: who starts what?", explanation: "\"Ho cominciato a\" + infinitive; \"è cominciata\" with no object." },
    ],
  },
  {
    slug: "a2-modals-in-the-past",
    level: "IT-A2",
    number: 3,
    title: "Modal Verbs in the Past",
    summary: "Say what you had to, could and wanted to do: ho dovuto lavorare, sono dovuto partire, non sono potuto venire.",
    duration: "15 min",
    sections: [
      {
        heading: "Ho dovuto lavorare",
        body: [
          "\"Dovere\", \"potere\" and \"volere\" have regular participles: \"dovuto\", \"potuto\", \"voluto\". In the past they borrow the auxiliary of the verb that follows them: \"lavorare\" takes \"avere\", so \"Ho dovuto lavorare\" (I had to work).",
          "\"Ho dovuto\" means you had to and you did it. \"Non ho potuto\" means you couldn't, and so you didn't.",
        ],
        examples: [
          { es: "Ho dovuto lavorare sabato.", en: "I had to work on Saturday." },
          { es: "Non ho potuto finire il libro.", en: "I couldn't finish the book." },
          { es: "Marco ha voluto pagare lui.", en: "Marco insisted on paying." },
          { es: "Abbiamo dovuto aspettare un'ora.", en: "We had to wait an hour." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had to work on Saturday.", answer: "Ho dovuto lavorare sabato.", altAnswers: ["Sabato ho dovuto lavorare.", "Io ho dovuto lavorare sabato."], explanation: "\"Lavorare\" takes \"avere\", so the modal does too." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had to wait an hour.", answer: "Abbiamo dovuto aspettare un'ora.", altAnswers: ["Noi abbiamo dovuto aspettare un'ora."], explanation: "\"Aspettare\" → \"avere\"." },
        ],
      },
      {
        heading: "Sono dovuto partire",
        body: [
          "When the infinitive takes \"essere\", the modal does too, and the participle agrees: \"Sono dovuto partire\" (I had to leave), \"Giulia è dovuta tornare a casa\", \"Siamo voluti restare\".",
          "In speech you'll also hear \"avere\" here: \"Non ho potuto venire\" and \"Non sono potuto venire\" are both used. This course teaches the infinitive's auxiliary, which is always right in writing.",
        ],
        examples: [
          { es: "Sono dovuto partire presto.", en: "I had to leave early." },
          { es: "Giulia è dovuta tornare a casa.", en: "Giulia had to go back home." },
          { es: "Non sono potuta venire alla festa.", en: "I couldn't come to the party. (a woman)" },
          { es: "Sono voluti restare fino alla fine.", en: "They wanted to stay until the end." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia had to go back home.", answer: "Giulia è dovuta tornare a casa.", altAnswers: ["Giulia ha dovuto tornare a casa."], explanation: "\"Tornare\" takes \"essere\": \"è dovuta\" (\"ha dovuto\" is also heard)." },
          { type: "listen-choose", audio: "Non sono potuta venire alla festa.", question: "What does it mean?", options: ["I couldn't come to the party.", "I didn't want to come to the party.", "I had to come to the party.", "I came to the party."], correctIndex: 0, explanation: "\"Potere\" = can; \"non sono potuta\" = I couldn't." },
        ],
      },
      {
        heading: "Volere: wanted to",
        body: [
          "\"Ho voluto\" means you wanted to and did it, often with insistence: \"Ha voluto pagare lui\" (he insisted on paying). For a wish that stayed a wish, you'll use another tense in Unit 6. For now: \"Non ho voluto\" = I refused.",
        ],
        examples: [
          { es: "Ho voluto vedere il Duomo.", en: "I wanted to see the cathedral (and I did)." },
          { es: "Luca non ha voluto mangiare.", en: "Luca refused to eat." },
          { es: "Sono voluta andare a piedi.", en: "I chose to walk. (a woman)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca refused to eat.", answer: "Luca non ha voluto mangiare.", explanation: "\"Non ha voluto\" = he didn't want to and didn't." },
          { type: "multiple-choice", question: "Marco insisted on paying. Which is right?", options: ["Marco ha voluto pagare lui.", "Marco è voluto pagare lui.", "Marco ha voluta pagare lui.", "Marco ha volere pagare lui."], correctIndex: 0, explanation: "\"Pagare\" takes \"avere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I couldn't finish the book.", answer: "Non ho potuto finire il libro.", altAnswers: ["Io non ho potuto finire il libro."], explanation: "\"Finire\" with an object takes \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had to leave early. (a man speaking)", answer: "Sono dovuto partire presto.", altAnswers: ["Ho dovuto partire presto.", "Io sono dovuto partire presto."], explanation: "\"Partire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They wanted to stay until the end.", answer: "Sono voluti restare fino alla fine.", altAnswers: ["Sono voluti rimanere fino alla fine.", "Hanno voluto restare fino alla fine.", "Hanno voluto rimanere fino alla fine.", "Sono volute restare fino alla fine."], explanation: "\"Restare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had to call the doctor.", answer: "Abbiamo dovuto chiamare il medico.", altAnswers: ["Abbiamo dovuto chiamare il dottore."], explanation: "\"Chiamare\" → \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chiara couldn't go out.", answer: "Chiara non è potuta uscire.", altAnswers: ["Chiara non ha potuto uscire."], explanation: "\"Uscire\" takes \"essere\": \"è potuta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you have to pay? (to a friend)", answer: "Hai dovuto pagare?", altAnswers: ["Tu hai dovuto pagare?"], explanation: "\"Pagare\" → \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [had to go] to bed early.", sentence: "I bambini ___ a letto presto.", answer: "sono dovuti andare", altAnswers: ["hanno dovuto andare"], explanation: "\"Andare\" → \"essere\"; \"-i\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [chose to walk]. (a woman speaking)", sentence: "___ a piedi.", answer: "Sono voluta andare", altAnswers: ["Ho voluto andare"], explanation: "\"Andare\" → \"essere\", agreeing with a woman." },
      { type: "word-order", prompt: "Put the words in order to say: I couldn't come yesterday. (a man speaking)", words: ["Ieri", "non", "sono", "potuto", "venire."], translation: "I couldn't come yesterday.", explanation: "\"Venire\" takes \"essere\"." },
      { type: "multiple-choice", question: "We had to work all day. Which is right?", options: ["Abbiamo dovuto lavorare tutto il giorno.", "Siamo dovuti lavorare tutto il giorno.", "Abbiamo dovuti lavorare tutto il giorno.", "Abbiamo dovere lavorare tutto il giorno."], correctIndex: 0, explanation: "\"Lavorare\" takes \"avere\"." },
      { type: "dictation", audio: "Non sono potuto venire perché ho dovuto lavorare.", explanation: "Two modals, two auxiliaries." },
      { type: "speak", text: "Scusa, non sono potuta venire: sono dovuta restare in ufficio.", prompt: "Apologise to a friend, as a woman: Sorry, I couldn't come: I had to stay at the office.", tip: "Both infinitives take essere: potuta, dovuta.", explanation: "Modals take the auxiliary of \"venire\" and \"restare\"." },
    ],
  },
  {
    slug: "a2-already-yet-just",
    level: "IT-A2",
    number: 4,
    title: "Already, Not Yet, Just, Ever",
    summary: "Use già, non ... ancora, appena, mai and sempre with the passato prossimo, and put them between the auxiliary and the participle.",
    duration: "15 min",
    sections: [
      {
        heading: "Già and non ... ancora",
        body: [
          "\"Già\" (already) and \"ancora\" (yet) sit between the auxiliary and the participle: \"Ho già mangiato\", \"Non ho ancora finito\". This is different from English, where yet comes at the end.",
          "A quick answer to \"Hai già finito?\" is \"Sì, già fatto!\" or \"Non ancora\" (not yet). In a question, \"già\" also works as English yet: \"Hai già mangiato?\" = Have you eaten yet?",
        ],
        examples: [
          { es: "Ho già mangiato, grazie.", en: "I've already eaten, thanks." },
          { es: "Non ho ancora finito.", en: "I haven't finished yet." },
          { es: "Hai già prenotato il ristorante?", en: "Have you booked the restaurant yet?" },
          { es: "Non ancora.", en: "Not yet." },
          { es: "Il treno è già partito.", en: "The train has already left." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't finished yet.", answer: "Non ho ancora finito.", altAnswers: ["Io non ho ancora finito."], explanation: "\"Ancora\" between \"ho\" and \"finito\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train has already left.", answer: "Il treno è già partito.", explanation: "\"Già\" between \"è\" and \"partito\"." },
        ],
      },
      {
        heading: "Appena: just",
        body: [
          "\"Appena\" with the passato prossimo means just, a moment ago: \"È appena arrivato\" (he's just arrived), \"Ho appena finito\". It also goes between the two parts.",
        ],
        examples: [
          { es: "Marco è appena arrivato.", en: "Marco has just arrived." },
          { es: "Ho appena parlato con Chiara.", en: "I've just spoken to Chiara." },
          { es: "La riunione è appena finita.", en: "The meeting has just ended." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco has just arrived.", answer: "Marco è appena arrivato.", explanation: "\"Appena\" between \"è\" and \"arrivato\"." },
          { type: "listen-choose", audio: "La riunione è appena finita.", question: "What does it mean?", options: ["The meeting has just ended.", "The meeting has already started.", "The meeting hasn't ended yet.", "The meeting ended late."], correctIndex: 0, explanation: "\"Appena\" = just." },
        ],
      },
      {
        heading: "Mai and sempre",
        body: [
          "\"Sei mai stato a Venezia?\" means have you ever been to Venice? The answer uses double negation: \"Non sono mai stato a Venezia\" (I've never been). \"Non\" and \"mai\" are both needed.",
          "\"Sempre\" (always) takes the same place: \"Ho sempre vissuto a Roma\" (I've always lived in Rome).",
        ],
        examples: [
          { es: "Sei mai stata a Venezia?", en: "Have you ever been to Venice? (to a woman)" },
          { es: "Non sono mai stato in Sicilia.", en: "I've never been to Sicily." },
          { es: "Non ho mai mangiato il polpo.", en: "I've never eaten octopus." },
          { es: "Ho sempre vissuto a Roma.", en: "I've always lived in Rome." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never eaten octopus.", answer: "Non ho mai mangiato il polpo.", altAnswers: ["Io non ho mai mangiato il polpo.", "Non ho mai mangiato polpo."], explanation: "\"Non ... mai\" around the auxiliary." },
          { type: "word-order", prompt: "Put the words in order to say: Have you ever been to Venice? (to a man)", words: ["Sei", "mai", "stato", "a", "Venezia?"], translation: "Have you ever been to Venice?", explanation: "\"Mai\" between \"sei\" and \"stato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already eaten, thanks.", answer: "Ho già mangiato, grazie.", altAnswers: ["Io ho già mangiato, grazie."], explanation: "\"Già\" between \"ho\" and \"mangiato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you booked the restaurant yet? (to a friend)", answer: "Hai già prenotato il ristorante?", altAnswers: ["Hai prenotato il ristorante?", "Tu hai già prenotato il ristorante?"], explanation: "In questions, \"già\" = yet." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not yet.", answer: "Non ancora.", explanation: "Short answer." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've just spoken to Chiara.", answer: "Ho appena parlato con Chiara.", altAnswers: ["Io ho appena parlato con Chiara."], explanation: "\"Appena\" = just." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never been to Sicily. (a man speaking)", answer: "Non sono mai stato in Sicilia.", altAnswers: ["Io non sono mai stato in Sicilia."], explanation: "\"Non ... mai\"; \"in\" + region." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've always lived in Rome.", answer: "Ho sempre vissuto a Roma.", altAnswers: ["Ho sempre abitato a Roma.", "Io ho sempre vissuto a Roma."], explanation: "\"Sempre\" between \"ho\" and \"vissuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The guests [haven't arrived yet].", sentence: "Gli ospiti ___.", answer: "non sono ancora arrivati", explanation: "\"Non\" + auxiliary + \"ancora\" + participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Have you ever eaten] truffles? (plural)", sentence: "___ il tartufo?", answer: "Avete mai mangiato", altAnswers: ["Voi avete mai mangiato"], explanation: "\"Mai\" between \"avete\" and \"mangiato\"." },
      { type: "word-order", prompt: "Put the words in order to say: We've already seen this film.", words: ["Abbiamo", "già", "visto", "questo", "film."], translation: "We've already seen this film.", explanation: "\"Già\" in the middle." },
      { type: "multiple-choice", question: "I haven't paid yet. Which is right?", options: ["Non ho ancora pagato.", "Non ho pagato già.", "Ho non ancora pagato.", "Ancora non pagato ho."], correctIndex: 0, explanation: "\"Non ho ancora\" + participle." },
      { type: "dictation", audio: "Hai già mangiato? No, non ho ancora mangiato.", explanation: "\"Già\" and \"ancora\" in the middle." },
      { type: "speak", text: "Non sono mai stato a Venezia, ma sono appena tornato da Firenze.", prompt: "Say it as a man: I've never been to Venice, but I've just come back from Florence.", tip: "\"Mai\" and \"appena\" both sit after \"sono\".", explanation: "Two adverbs between auxiliary and participle." },
    ],
  },
  {
    slug: "a2-drill-auxiliary-choice",
    level: "IT-A2",
    number: 5,
    title: "Drill: Essere or Avere?",
    summary: "Mix forty verbs: choose the auxiliary, then agree the participle when it's essere.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Two questions for every verb",
        body: [
          "First: is it movement to a place, a change, staying, reflexive or like \"piacere\"? Then \"essere\", and agree. Otherwise \"avere\", and leave the participle in \"-o\".",
        ],
        examples: [
          { es: "Ho preparato la cena e poi sono uscita.", en: "I made dinner and then went out. (a woman)" },
          { es: "Hanno venduto la casa e si sono trasferiti.", en: "They sold the house and moved away." },
          { es: "È ingrassato due chili.", en: "He's put on two kilos." },
          { es: "Ho perso il treno e sono arrivato tardi.", en: "I missed the train and arrived late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I made dinner and then went out. (a woman speaking)", answer: "Ho preparato la cena e poi sono uscita.", altAnswers: ["Ho fatto la cena e poi sono uscita."], explanation: "Object → \"avere\"; movement → \"essere\" + \"-a\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I missed the train and arrived late. (a man speaking)", answer: "Ho perso il treno e sono arrivato tardi.", altAnswers: ["Ho perso il treno e sono arrivato in ritardo."], explanation: "\"Perdere\" + object; \"arrivare\" with \"essere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They sold the house and moved away.", answer: "Hanno venduto la casa e si sono trasferiti.", altAnswers: ["Hanno venduto la casa e se ne sono andati."], explanation: "\"Avere\", then reflexive \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's put on two kilos.", answer: "È ingrassato due chili.", altAnswers: ["È ingrassato di due chili.", "Lui è ingrassato due chili."], explanation: "Change of state: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia has lost weight.", answer: "Giulia è dimagrita.", explanation: "\"Dimagrire\" = to lose weight: change, \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We cooked and then we danced.", answer: "Abbiamo cucinato e poi abbiamo ballato.", altAnswers: ["Noi abbiamo cucinato e poi abbiamo ballato."], explanation: "Two activities: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girls came in and sat down.", answer: "Le ragazze sono entrate e si sono sedute.", explanation: "Both \"essere\", \"-e\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca opened the door and went out.", answer: "Luca ha aperto la porta ed è uscito.", altAnswers: ["Luca ha aperto la porta e è uscito."], explanation: "\"Ed\" before \"è\" sounds smoother." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you sleep well? (plural)", answer: "Avete dormito bene?", altAnswers: ["Voi avete dormito bene?"], explanation: "\"Dormire\": \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandfather was born in 1938.", answer: "Mio nonno è nato nel 1938.", explanation: "\"Nascere\": \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I ran to the bus stop. (a man speaking)", answer: "Sono corso alla fermata.", altAnswers: ["Sono corso alla fermata dell'autobus."], explanation: "Running to a place: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What happened?", answer: "Cos'è successo?", altAnswers: ["Cosa è successo?", "Che cosa è successo?", "Che è successo?"], explanation: "\"Succedere\": \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sara phoned her mother.", answer: "Sara ha telefonato a sua madre.", altAnswers: ["Sara ha chiamato sua madre."], explanation: "\"Telefonare\": \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The prices went up.", answer: "I prezzi sono aumentati.", altAnswers: ["I prezzi sono saliti."], explanation: "No object: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shop [raised] the prices.", sentence: "Il negozio ___ i prezzi.", answer: "ha aumentato", explanation: "With an object: \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara [stayed] at home and [read].", sentence: "Chiara ___ a casa e ha letto.", answer: "è rimasta", altAnswers: ["è restata", "è stata"], explanation: "Staying: \"essere\"; reading: \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My parents [grew old] in that house.", sentence: "I miei genitori ___ in quella casa.", answer: "sono invecchiati", explanation: "\"Invecchiare\" = to grow old: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We spent] a week in Puglia.", sentence: "___ una settimana in Puglia.", answer: "Abbiamo passato", altAnswers: ["Abbiamo trascorso"], explanation: "Time as object: \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you like] the wine? (to a friend)", sentence: "___ il vino?", answer: "Ti è piaciuto", explanation: "\"Piacere\": \"essere\"." },
      { type: "multi-select", question: "Which sentences are correct? Choose all that apply.", options: ["Sono tornata a casa.", "Ho tornato a casa.", "Ho viaggiato in treno.", "Sono viaggiato in treno.", "Si è laureata.", "Ha diventato medico."], correctIndexes: [0, 2, 4], explanation: "\"Tornare\" and reflexives: essere; \"viaggiare\": avere; \"diventare\": essere." },
      { type: "dictation", audio: "Ho preso la metro e sono scesa in Duomo.", explanation: "\"Prendere\" with avere, \"scendere\" with essere." },
      { type: "dictation", audio: "Abbiamo mangiato bene e ci siamo divertiti.", explanation: "Avere, then reflexive essere." },
      { type: "speak", text: "Mi sono svegliato tardi, ho fatto colazione, sono uscito e ho perso l'autobus.", prompt: "Say it as a man: I woke up late, had breakfast, went out and missed the bus.", tip: "Essere, avere, essere, avere.", explanation: "Alternating auxiliaries." },
    ],
  },
  {
    slug: "a2-drill-already-yet",
    level: "IT-A2",
    number: 6,
    title: "Drill: Già, Ancora, Appena, Mai",
    summary: "Ask and answer with già, non ... ancora, appena, mai and sempre in the right place.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Auxiliary + adverb + participle",
        body: [
          "\"Ho già\", \"non ho ancora\", \"ho appena\", \"non ho mai\", \"ho sempre\" + participle. Short answers: \"Sì, già fatto\", \"Non ancora\", \"Mai\".",
        ],
        examples: [
          { es: "Hai già pagato? Sì, già fatto.", en: "Have you paid yet? Yes, done." },
          { es: "Sono già usciti? Non ancora.", en: "Have they gone out yet? Not yet." },
          { es: "Hai mai visto l'Etna? Mai.", en: "Have you ever seen Etna? Never." },
          { es: "Abbiamo appena cenato.", en: "We've just had dinner." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have they gone out yet? Not yet.", answer: "Sono già usciti? Non ancora.", altAnswers: ["Sono già uscite? Non ancora.", "Sono usciti? Non ancora."], explanation: "\"Già\" in the question, \"non ancora\" as the answer." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've just had dinner.", answer: "Abbiamo appena cenato.", altAnswers: ["Noi abbiamo appena cenato.", "Abbiamo appena mangiato."], explanation: "\"Appena\" between the parts." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you paid yet? (to a friend)", answer: "Hai già pagato?", altAnswers: ["Hai pagato?", "Tu hai già pagato?"], explanation: "\"Già\" = yet in a question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't read the email yet.", answer: "Non ho ancora letto l'email.", altAnswers: ["Non ho ancora letto la mail.", "Io non ho ancora letto l'email."], explanation: "\"Non ho ancora\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia has already left.", answer: "Giulia è già partita.", altAnswers: ["Giulia è già andata via.", "Giulia se n'è già andata."], explanation: "\"Già\" between \"è\" and \"partita\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop has just closed.", answer: "Il negozio ha appena chiuso.", altAnswers: ["Il negozio è appena stato chiuso."], explanation: "\"Chiudere\" (a shop closing) takes \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never seen Etna.", answer: "Non ho mai visto l'Etna.", altAnswers: ["Io non ho mai visto l'Etna."], explanation: "\"Non ho mai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever been to Naples? (plural)", answer: "Siete mai stati a Napoli?", altAnswers: ["Siete mai state a Napoli?", "Voi siete mai stati a Napoli?"], explanation: "\"Mai\" between \"siete\" and \"stati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've always eaten at home on Sundays.", answer: "La domenica abbiamo sempre mangiato a casa.", altAnswers: ["Abbiamo sempre mangiato a casa la domenica."], explanation: "\"Sempre\" in the middle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film has already started.", answer: "Il film è già cominciato.", altAnswers: ["Il film è già iniziato."], explanation: "No object: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco hasn't called yet.", answer: "Marco non ha ancora chiamato.", altAnswers: ["Marco non ha ancora telefonato."], explanation: "\"Non ha ancora\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've just woken up. (a woman speaking)", answer: "Mi sono appena svegliata.", altAnswers: ["Io mi sono appena svegliata."], explanation: "Reflexive: \"mi sono appena\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Have you done] your homework yet? (to a child)", sentence: "___ i compiti?", answer: "Hai già fatto", altAnswers: ["Hai fatto"], explanation: "\"Hai già fatto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The parcel [hasn't arrived yet].", sentence: "Il pacco ___.", answer: "non è ancora arrivato", explanation: "\"Non è ancora arrivato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara [has never driven].", sentence: "Chiara ___.", answer: "non ha mai guidato", explanation: "\"Non ha mai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They've just got married].", sentence: "___.", answer: "Si sono appena sposati", altAnswers: ["Si sono appena sposate"], explanation: "\"Appena\" after \"sono\"." },
      { type: "word-order", prompt: "Put the words in order to say: I haven't finished the report yet.", words: ["Non", "ho", "ancora", "finito", "la", "relazione."], translation: "I haven't finished the report yet.", explanation: "\"Non ho ancora finito\"." },
      { type: "multiple-choice", question: "Have you ever eaten arancini? Which is right?", options: ["Hai mai mangiato gli arancini?", "Hai mangiato mai gli arancini?", "Mai hai mangiato gli arancini?", "Hai mangiato gli arancini mai?"], correctIndex: 0, explanation: "\"Mai\" between \"hai\" and \"mangiato\"." },
      { type: "dictation", audio: "Sei già stato a Roma? No, non ci sono mai stato.", explanation: "\"Ci\" = there; \"non ... mai\"." },
      { type: "dictation", audio: "Ho appena finito e non ho ancora mangiato.", explanation: "\"Appena\", \"ancora\"." },
      { type: "speak", text: "Ho già fatto la spesa, ma non ho ancora cucinato.", prompt: "Say it in Italian: I've already done the shopping, but I haven't cooked yet.", tip: "\"Già\" and \"ancora\" both after \"ho\".", explanation: "Già + non ... ancora." },
    ],
  },
  {
    slug: "a2-contrast-auxiliary-pairs",
    level: "IT-A2",
    number: 7,
    title: "Contrast Clinic: Ho Finito / È Finito",
    summary: "Pairs that isolate the rule: the same verb with avere and an object, or with essere and no object.",
    duration: "15 min",
    sections: [
      {
        heading: "Who did it to what?",
        body: [
          "Look at the subject. If a person acts on something (\"Ho finito il libro\"), it's \"avere\". If the thing itself changes, starts or ends (\"Il libro è finito\"), it's \"essere\" and the participle agrees with that thing.",
          "Pairs to compare: \"ho finito / è finito\", \"ho cominciato / è cominciata\", \"ho cambiato / è cambiato\", \"ho aumentato / è aumentato\".",
        ],
        examples: [
          { es: "Ho finito il libro ieri.", en: "I finished the book yesterday." },
          { es: "La festa è finita a mezzanotte.", en: "The party ended at midnight." },
          { es: "Ho cominciato a lavorare a 18 anni.", en: "I started working at 18." },
          { es: "Il corso è cominciato a ottobre.", en: "The course started in October." },
          { es: "Marco è cambiato molto.", en: "Marco has changed a lot." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The party ended at midnight.", answer: "La festa è finita a mezzanotte.", explanation: "The party ends by itself: \"essere\" + \"-a\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco has changed a lot.", answer: "Marco è cambiato molto.", altAnswers: ["Marco è cambiato tanto."], explanation: "Marco himself changed: \"essere\"." },
        ],
      },
      {
        heading: "Passare, correre, salire",
        body: [
          "\"Ho passato una bella giornata\" (spent) vs \"Sono passata in farmacia\" (dropped in). \"Ho corso per un'ora\" (activity) vs \"Sono corso a casa\" (to a place). \"Ho salito le scale\" (the stairs as object) vs \"Sono salito in camera\" (went up to my room).",
        ],
        examples: [
          { es: "Ho passato una bella giornata.", en: "I had a lovely day." },
          { es: "Sono passata in farmacia.", en: "I dropped in at the pharmacy. (a woman)" },
          { es: "Ho corso per un'ora.", en: "I ran for an hour." },
          { es: "Sono corso a casa.", en: "I ran home. (a man)" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "I ran home (a man speaking). Which is right?", options: ["Sono corso a casa.", "Ho corso a casa.", "Sono corsa a casa.", "Ho corsa a casa."], correctIndex: 0, explanation: "Running to a place: \"essere\"; -o for a man." },
          { type: "listen-choose", audio: "Sono passata in farmacia.", question: "What does it mean?", options: ["I dropped in at the pharmacy.", "I spent the day at the pharmacy.", "I walked past the pharmacy.", "I passed my pharmacy exam."], correctIndex: 0, explanation: "\"Passare\" without an object, with \"essere\": to drop in." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I finished the book yesterday.", answer: "Ho finito il libro ieri.", altAnswers: ["Ieri ho finito il libro."], explanation: "Object: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The course started in October.", answer: "Il corso è cominciato a ottobre.", altAnswers: ["Il corso è iniziato a ottobre.", "Il corso è cominciato in ottobre.", "Il corso è iniziato in ottobre."], explanation: "No object: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I started working at 18.", answer: "Ho cominciato a lavorare a 18 anni.", altAnswers: ["Ho iniziato a lavorare a 18 anni.", "Ho cominciato a lavorare a diciotto anni.", "Ho iniziato a lavorare a diciotto anni."], explanation: "A person starting an activity: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had a lovely day.", answer: "Ho passato una bella giornata.", altAnswers: ["Ho trascorso una bella giornata."], explanation: "\"Passare\" + time: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I ran for an hour.", answer: "Ho corso per un'ora.", altAnswers: ["Ho corso un'ora."], explanation: "Activity: \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We changed our plans.", answer: "Abbiamo cambiato i nostri programmi.", altAnswers: ["Abbiamo cambiato programma.", "Abbiamo cambiato i programmi."], explanation: "Object: \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The weather [has changed].", sentence: "Il tempo ___.", answer: "è cambiato", explanation: "No object: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Prices [have gone up] again.", sentence: "I prezzi ___ di nuovo.", answer: "sono aumentati", altAnswers: ["sono saliti"], explanation: "No object: \"essere\" + \"-i\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [went up] to my room. (a woman speaking)", sentence: "___ in camera.", answer: "Sono salita", altAnswers: ["Io sono salita"], explanation: "Movement to a place: \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: The holidays are over.", words: ["Le", "vacanze", "sono", "finite."], translation: "The holidays are over.", explanation: "\"Finite\" agrees with \"vacanze\"." },
      { type: "multiple-choice", question: "Which pair is correct?", options: ["Ho finito il lavoro. / Il lavoro è finito.", "Sono finito il lavoro. / Il lavoro ha finito.", "Ho finito il lavoro. / Il lavoro ha finito.", "Sono finita il lavoro. / Il lavoro è finito."], correctIndex: 0, explanation: "Avere with an object, essere without." },
      { type: "dictation", audio: "Ho cambiato lavoro e la mia vita è cambiata.", explanation: "Same verb, two auxiliaries." },
      { type: "speak", text: "Il film è cominciato alle nove e io ho cominciato a dormire alle nove e un quarto.", prompt: "Say it in Italian: The film started at nine and I started sleeping at quarter past nine.", tip: "\"È cominciato\" vs \"ho cominciato a\".", explanation: "The film starts by itself; you start an activity." },
    ],
  },
  {
    slug: "a2-error-hunt-auxiliary",
    level: "IT-A2",
    number: 8,
    title: "Error Hunt: Auxiliaries",
    summary: "Fix ho stato, sono mangiato, il film ha finito, sono dovuto lavorare, Giulia è arrivato and non ho finito già.",
    duration: "15 min",
    sections: [
      {
        heading: "Wrong auxiliary",
        body: [
          "\"Ho stato\" doesn't exist: \"essere\" takes itself, \"sono stato\". \"Sono mangiato\" means I was eaten: eating takes \"avere\", \"ho mangiato\". \"Il film ha finito\" needs \"è finito\": nobody finished the film, it ended.",
          "\"Sono dovuto lavorare\" is wrong because \"lavorare\" takes \"avere\": \"Ho dovuto lavorare\".",
        ],
        examples: [
          { es: "Sono stato a Bari.", en: "I've been to Bari." },
          { es: "Ho mangiato troppo.", en: "I ate too much." },
          { es: "Il film è finito alle undici.", en: "The film ended at eleven." },
          { es: "Ho dovuto lavorare fino a tardi.", en: "I had to work late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Sono mangiato troppo.\" Write it correctly: I ate too much.", source: "I ate too much.", answer: "Ho mangiato troppo.", altAnswers: ["Io ho mangiato troppo."], explanation: "\"Mangiare\" takes \"avere\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il film ha finito alle undici.\" Write it correctly: The film ended at eleven.", source: "The film ended at eleven.", answer: "Il film è finito alle undici.", explanation: "No object: \"essere\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Sono dovuto lavorare fino a tardi.\" Write it correctly: I had to work late.", source: "I had to work late.", answer: "Ho dovuto lavorare fino a tardi.", altAnswers: ["Io ho dovuto lavorare fino a tardi."], explanation: "\"Lavorare\" takes \"avere\", so the modal does." },
        ],
      },
      {
        heading: "Wrong ending, wrong place",
        body: [
          "\"Giulia è arrivato\" forgets agreement: \"Giulia è arrivata\". \"Non ho finito già\" puts the adverb in the English place and means the wrong thing: \"Ho già finito\" (I've already finished) or \"Non ho ancora finito\" (I haven't finished yet).",
        ],
        examples: [
          { es: "Giulia è arrivata alle otto.", en: "Giulia arrived at eight." },
          { es: "Ho già finito.", en: "I've already finished." },
          { es: "Non ho ancora finito.", en: "I haven't finished yet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Giulia è arrivato alle otto.\" Write it correctly: Giulia arrived at eight.", source: "Giulia arrived at eight.", answer: "Giulia è arrivata alle otto.", explanation: "Agreement: \"arrivata\"." },
          { type: "listen-choose", audio: "Non ho ancora finito.", question: "What does it mean?", options: ["I haven't finished yet.", "I've already finished.", "I've never finished.", "I've just finished."], correctIndex: 0, explanation: "\"Non ... ancora\" = not yet." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner (a woman) wrote \"Ho stata a Bari.\" Write it correctly: I've been to Bari.", source: "I've been to Bari.", answer: "Sono stata a Bari.", altAnswers: ["Io sono stata a Bari."], explanation: "\"Essere\" → \"sono stata\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Non ho finito già.\" Write it correctly: I've already finished.", source: "I've already finished.", answer: "Ho già finito.", altAnswers: ["Io ho già finito."], explanation: "\"Già\" between the two parts; no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"La lezione ha cominciato alle dieci.\" Write it correctly: The lesson started at ten.", source: "The lesson started at ten.", answer: "La lezione è cominciata alle dieci.", altAnswers: ["La lezione è iniziata alle dieci."], explanation: "No object: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Siamo camminati molto.\" Write it correctly: We walked a lot.", source: "We walked a lot.", answer: "Abbiamo camminato molto.", altAnswers: ["Abbiamo camminato tanto."], explanation: "\"Camminare\": activity, \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho uscito con Marco.\" Write it correctly: I went out with Marco. (a woman)", source: "I went out with Marco.", answer: "Sono uscita con Marco.", altAnswers: ["Io sono uscita con Marco."], explanation: "\"Uscire\": \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mi ha piaciuto il concerto.\" Write it correctly: I liked the concert.", source: "I liked the concert.", answer: "Mi è piaciuto il concerto.", altAnswers: ["Il concerto mi è piaciuto."], explanation: "\"Piacere\": \"essere\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Luca è dovuto partito subito.\" Write the Italian for the bold words.", en: "Luca [had to leave] at once.", sentence: "Luca ___ subito.", answer: "è dovuto partire", altAnswers: ["ha dovuto partire"], explanation: "Only the modal becomes a participle; \"partire\" stays in the infinitive." },
      { type: "fill-blank", prompt: "A learner wrote \"Sono mai stato a Roma.\" Write the Italian for the bold words.", en: "[I've never been] to Rome. (a man)", sentence: "___ a Roma.", answer: "Non sono mai stato", explanation: "\"Mai\" needs \"non\" in a negative sentence." },
      { type: "word-order", prompt: "Put the words in order to say: The children haven't eaten yet.", words: ["I", "bambini", "non", "hanno", "ancora", "mangiato."], translation: "The children haven't eaten yet.", explanation: "\"Non hanno ancora mangiato\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Siamo dovuti tornare a casa.", "Siamo dovuto tornare a casa.", "Abbiamo dovuti tornare a casa.", "Siamo dovuti tornati a casa."], correctIndex: 0, explanation: "\"Tornare\" → \"essere\"; \"dovuti\" agrees; the infinitive stays." },
      { type: "dictation", audio: "Il concerto è finito tardi e siamo tornati a piedi.", explanation: "Two \"essere\" verbs." },
      { type: "speak", text: "Sono stata a Bari, ho mangiato troppo e sono dovuta tornare in treno.", prompt: "Say it correctly, as a woman: I've been to Bari, I ate too much and I had to come back by train.", tip: "Stata, mangiato, dovuta: two agree, one doesn't.", explanation: "Three corrected auxiliaries." },
    ],
  },
  {
    slug: "a2-dialogue-lab-busy-day",
    level: "IT-A2",
    number: 9,
    title: "Dialogue Lab: A Busy Day",
    summary: "Two colleagues in Bologna check what's done: hai già mandato l'email?, non ancora, la riunione è appena finita.",
    duration: "15 min",
    sections: [
      {
        heading: "Checking the list",
        body: [
          "Four o'clock in an agency in Bologna. Laura, the project manager, checks with her colleague Matteo before a client call. Her questions use \"già\": \"Hai già mandato l'email al cliente?\" (have you sent the email to the client yet?).",
          "Matteo answers with \"Sì, l'ho già mandata\" (a pronoun you'll study in Unit 7; here just recognise it) or \"Non ancora\".",
        ],
        examples: [
          { es: "Matteo, hai già mandato l'email al cliente?", en: "Matteo, have you sent the email to the client yet?" },
          { es: "Non ancora, scusa. La mando subito.", en: "Not yet, sorry. I'll send it right away." },
          { es: "E hai già preparato le slide?", en: "And have you prepared the slides yet?" },
          { es: "Sì, ho appena finito.", en: "Yes, I've just finished." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you sent the email to the client yet? (to a colleague you call tu)", answer: "Hai già mandato l'email al cliente?", altAnswers: ["Hai già mandato la mail al cliente?", "Hai mandato l'email al cliente?"], explanation: "\"Già\" between \"hai\" and \"mandato\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Yes, [I've just finished].", sentence: "Sì, ___.", answer: "ho appena finito", explanation: "\"Appena\" = just." },
        ],
      },
      {
        heading: "The meeting and the bank",
        body: [
          "Laura explains why she's late: \"La riunione è appena finita\" (the meeting has just ended) and \"Sono dovuta andare in banca\" (I had to go to the bank). Notice \"essere\" twice: the meeting ends by itself, and \"andare\" takes \"essere\", so the modal does too.",
        ],
        examples: [
          { es: "Scusa il ritardo, la riunione è appena finita.", en: "Sorry I'm late, the meeting has just ended." },
          { es: "Poi sono dovuta andare in banca.", en: "Then I had to go to the bank." },
          { es: "Il direttore ha già chiamato?", en: "Has the director called yet?" },
          { es: "Sì, ha chiamato due volte.", en: "Yes, he called twice." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry I'm late, the meeting has just ended.", answer: "Scusa il ritardo, la riunione è appena finita.", altAnswers: ["Scusa per il ritardo, la riunione è appena finita."], explanation: "\"È appena finita\": no object, \"essere\"." },
          { type: "listen-choose", audio: "Poi sono dovuta andare in banca.", question: "Why was Laura late?", options: ["She had to go to the bank.", "She wanted to go to the bank.", "The bank called her.", "She went to the bank yesterday."], correctIndex: 0, explanation: "\"Sono dovuta andare\" = I had to go." },
        ],
      },
      {
        heading: "What's left",
        body: [
          "To close: \"Cosa manca ancora?\" (what's still missing?). Matteo: \"Non abbiamo ancora stampato il contratto\" (we haven't printed the contract yet). Laura: \"Va bene, lo facciamo domani\" (fine, we'll do it tomorrow).",
        ],
        examples: [
          { es: "Cosa manca ancora?", en: "What's still left to do?" },
          { es: "Non abbiamo ancora stampato il contratto.", en: "We haven't printed the contract yet." },
          { es: "Va bene, lo facciamo domani.", en: "Fine, we'll do it tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We haven't printed the contract yet.", answer: "Non abbiamo ancora stampato il contratto.", altAnswers: ["Noi non abbiamo ancora stampato il contratto."], explanation: "\"Non abbiamo ancora\" + participle." },
          { type: "multiple-choice", question: "Laura asks \"Hai già chiamato il fornitore?\" Matteo hasn't. What does he say?", options: ["Non ancora.", "Già fatto.", "Non mai.", "Ancora sì."], correctIndex: 0, explanation: "\"Non ancora\" = not yet." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you prepared the slides yet? (to a colleague you call tu)", answer: "Hai già preparato le slide?", altAnswers: ["Hai preparato le slide?", "Hai già preparato le diapositive?"], explanation: "\"Slide\" is invariable in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Then I had to go to the bank. (a woman speaking)", answer: "Poi sono dovuta andare in banca.", altAnswers: ["Poi ho dovuto andare in banca."], explanation: "\"Andare\" → \"essere\", so \"sono dovuta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Has the director called yet?", answer: "Il direttore ha già chiamato?", altAnswers: ["Ha già chiamato il direttore?", "Il direttore ha già telefonato?"], explanation: "\"Già\" between \"ha\" and \"chiamato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, he called twice.", answer: "Sì, ha chiamato due volte.", altAnswers: ["Sì, ha telefonato due volte."], explanation: "\"Due volte\" = twice." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The client hasn't answered yet.", answer: "Il cliente non ha ancora risposto.", explanation: "\"Risposto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Not yet], sorry.", sentence: "___, scusa.", answer: "Non ancora", explanation: "Short answer." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The meeting [has just ended].", sentence: "La riunione ___.", answer: "è appena finita", explanation: "\"Essere\" + \"-a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We had to change] the date.", sentence: "___ la data.", answer: "Abbiamo dovuto cambiare", explanation: "\"Cambiare\" + object → \"avere\"." },
      { type: "word-order", prompt: "Put the words in order to say: I've already booked the meeting room.", words: ["Ho", "già", "prenotato", "la", "sala", "riunioni."], translation: "I've already booked the meeting room.", explanation: "\"Sala riunioni\" = meeting room." },
      { type: "multiple-choice", question: "Laura is late because she had to go to the post office. What does she say?", options: ["Sono dovuta andare in posta.", "Ho dovuta andare in posta.", "Sono dovuto andare in posta.", "Sono dovuta andata in posta."], correctIndex: 0, explanation: "\"Andare\" → \"essere\"; \"dovuta\" agrees with Laura." },
      { type: "dictation", audio: "Hai già mandato l'email? Non ancora.", explanation: "\"Già\" and \"non ancora\"." },
      { type: "speak", text: "Ho già scritto al cliente, ma non ho ancora preparato le slide. La riunione è appena finita.", prompt: "Report to your manager: I've already written to the client, but I haven't prepared the slides yet. The meeting has just ended.", tip: "Put già, ancora and appena right after the auxiliary.", explanation: "Three adverbs in their place." },
    ],
  },
  {
    slug: "a2-mission-to-do-list",
    level: "IT-A2",
    number: 10,
    title: "Real-World Mission: The To-Do List",
    summary: "Report on a list: what you've already done, what you haven't done yet and why.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "Done and not done",
        body: [
          "Your flatmate in Torino left you a list before going away: \"pagare la bolletta\" (pay the bill), \"comprare il detersivo\", \"chiamare l'idraulico\" (the plumber), \"portare il pacco in posta\". You report back by message.",
          "Done: \"Ho già pagato la bolletta.\" Not done: \"Non ho ancora chiamato l'idraulico.\" Give a reason with \"perché\" and a modal: \"perché ho dovuto lavorare\", \"perché la posta è già chiusa\".",
        ],
        examples: [
          { es: "Ho già pagato la bolletta della luce.", en: "I've already paid the electricity bill." },
          { es: "Ho comprato il detersivo e la carta igienica.", en: "I've bought the detergent and the toilet paper." },
          { es: "Non ho ancora chiamato l'idraulico.", en: "I haven't called the plumber yet." },
          { es: "Non sono potuto andare in posta perché ho dovuto lavorare.", en: "I couldn't go to the post office because I had to work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already paid the electricity bill.", answer: "Ho già pagato la bolletta della luce.", altAnswers: ["Io ho già pagato la bolletta della luce."], explanation: "\"La bolletta della luce\" = the electricity bill." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't called the plumber yet.", answer: "Non ho ancora chiamato l'idraulico.", altAnswers: ["Non ho ancora telefonato all'idraulico."], explanation: "\"Non ho ancora\" + participle." },
        ],
      },
      {
        heading: "Why not?",
        body: [
          "Reasons in the past often need the modals and the auxiliary rule: \"Non sono potuta uscire\" (\"uscire\" → \"essere\"), \"Ho dovuto aspettare il tecnico\" (\"aspettare\" → \"avere\"). Close kindly: \"Lo faccio domani!\" (I'll do it tomorrow).",
        ],
        examples: [
          { es: "Non sono potuta uscire perché è piovuto tutto il giorno.", en: "I couldn't go out because it rained all day." },
          { es: "Ho dovuto aspettare il tecnico.", en: "I had to wait for the technician." },
          { es: "Lo faccio domani!", en: "I'll do it tomorrow!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had to wait for the technician.", answer: "Ho dovuto aspettare il tecnico.", altAnswers: ["Io ho dovuto aspettare il tecnico."], explanation: "\"Aspettare\" → \"avere\"." },
          { type: "listen-choose", audio: "Non sono potuta uscire perché è piovuto tutto il giorno.", question: "Why didn't she go out?", options: ["It rained all day.", "She had to work.", "She was ill.", "The shops were closed."], correctIndex: 0, explanation: "\"È piovuto tutto il giorno\" = it rained all day." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've bought the detergent and the toilet paper.", answer: "Ho comprato il detersivo e la carta igienica.", altAnswers: ["Ho già comprato il detersivo e la carta igienica."], explanation: "\"Comprato\" stays -o." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I couldn't go to the post office because I had to work. (a man speaking)", answer: "Non sono potuto andare in posta perché ho dovuto lavorare.", altAnswers: ["Non ho potuto andare in posta perché ho dovuto lavorare.", "Non sono potuto andare alla posta perché ho dovuto lavorare."], explanation: "\"Andare\" → \"essere\"; \"lavorare\" → \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already taken the rubbish out.", answer: "Ho già portato fuori la spazzatura.", altAnswers: ["Ho già buttato la spazzatura.", "Ho già portato fuori l'immondizia."], explanation: "\"Portare fuori\" = to take out." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The post office has already closed.", answer: "La posta ha già chiuso.", altAnswers: ["La posta è già chiusa.", "L'ufficio postale ha già chiuso."], explanation: "A shop or office closing: \"ha chiuso\"; \"è chiusa\" = is closed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll do it tomorrow!", answer: "Lo faccio domani!", altAnswers: ["Lo farò domani!"], explanation: "The present for a near plan." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I haven't watered] the plants [yet].", sentence: "___ le piante.", answer: "Non ho ancora annaffiato", altAnswers: ["Non ho ancora innaffiato"], explanation: "\"Annaffiare\" = to water." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The plumber [has just left].", sentence: "L'idraulico ___.", answer: "è appena andato via", altAnswers: ["è appena uscito", "è appena partito", "se n'è appena andato"], explanation: "\"Andare via\" → \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I couldn't go out]. (a woman speaking)", sentence: "___.", answer: "Non sono potuta uscire", altAnswers: ["Non ho potuto uscire"], explanation: "\"Uscire\" → \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: I've already paid the rent.", words: ["Ho", "già", "pagato", "l'affitto."], translation: "I've already paid the rent.", explanation: "\"L'affitto\" = the rent." },
      { type: "multiple-choice", question: "Your flatmate asks \"Hai chiamato l'idraulico?\" You haven't. What do you write?", options: ["Non ancora, lo chiamo domani.", "Già, lo chiamo domani.", "Mai ancora, lo chiamo domani.", "Non già, lo chiamo domani."], correctIndex: 0, explanation: "\"Non ancora\" = not yet." },
      { type: "dictation", audio: "Ho già pagato la bolletta, ma non ho ancora chiamato l'idraulico.", explanation: "\"Già\" and \"non ... ancora\"." },
      { type: "speak", text: "Ho già pagato la bolletta e ho comprato il detersivo. Non ho ancora chiamato l'idraulico perché ho dovuto lavorare.", prompt: "Leave a voice message: I've already paid the bill and bought the detergent. I haven't called the plumber yet because I had to work.", tip: "\"Bolletta\": double l, double t.", explanation: "Done, not done, and a reason." },
    ],
  },
  {
    slug: "a2-spiral-past-tense",
    level: "IT-A2",
    number: 11,
    title: "Spiral Review: The Passato Prossimo",
    summary: "Mixed practice of Units 1-3: avere and essere, agreement, reflexives, piacere, modals and già / ancora.",
    duration: "16 min",
    kind: "review",
    sections: [
      {
        heading: "A weekend in Turin",
        body: [
          "Everything from the last three units in one story: \"Venerdì sono partito per Torino. Ho preso il Frecciarossa e sono arrivato alle nove. Ho visto il Museo Egizio, mi è piaciuto tantissimo.\"",
        ],
        examples: [
          { es: "Venerdì sono partito per Torino.", en: "On Friday I left for Turin." },
          { es: "Ho preso il Frecciarossa delle sette.", en: "I took the seven o'clock Frecciarossa." },
          { es: "Mi è piaciuto tantissimo il Museo Egizio.", en: "I loved the Egyptian Museum." },
          { es: "Non sono ancora salito sulla Mole.", en: "I haven't been up the Mole yet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Friday I left for Turin. (a man speaking)", answer: "Venerdì sono partito per Torino.", altAnswers: ["Sono partito per Torino venerdì."], explanation: "\"Partire\": \"essere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I took the seven o'clock Frecciarossa.", answer: "Ho preso il Frecciarossa delle sette.", altAnswers: ["Ho preso il Frecciarossa delle 7."], explanation: "\"Prendere\": \"avere\", \"preso\"." },
        ],
      },
      {
        heading: "Friends and family",
        body: [
          "Agreement is where the mistakes hide. Check the subject of every essere verb: \"Mia sorella si è trasferita\", \"I miei amici sono venuti\", \"Le ragazze si sono divertite\".",
        ],
        examples: [
          { es: "Mia sorella si è trasferita a Londra.", en: "My sister has moved to London." },
          { es: "I miei amici sono venuti a trovarmi.", en: "My friends came to see me." },
          { es: "Le ragazze si sono divertite al concerto.", en: "The girls had fun at the concert." },
          { es: "Non abbiamo ancora visto il loro bambino.", en: "We haven't seen their baby yet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister has moved to London.", answer: "Mia sorella si è trasferita a Londra.", explanation: "Reflexive, agreeing with \"sorella\"." },
          { type: "dictation", audio: "Le ragazze si sono divertite al concerto.", explanation: "\"-e\" for a group of women." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I loved the Egyptian Museum.", answer: "Mi è piaciuto tantissimo il Museo Egizio.", altAnswers: ["Il Museo Egizio mi è piaciuto tantissimo.", "Mi è piaciuto moltissimo il Museo Egizio."], explanation: "\"Piaciuto\" agrees with \"museo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My friends came to see me.", answer: "I miei amici sono venuti a trovarmi.", explanation: "\"Venire a trovare\" = to come and visit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We haven't seen their baby yet.", answer: "Non abbiamo ancora visto il loro bambino.", altAnswers: ["Non abbiamo ancora visto la loro bambina."], explanation: "\"Il loro\": \"loro\" always takes the article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia got up early and went for a run.", answer: "Giulia si è alzata presto ed è andata a correre.", altAnswers: ["Giulia si è alzata presto e è andata a correre."], explanation: "Reflexive, then movement: both \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever drunk Barolo? (to a friend)", answer: "Hai mai bevuto il Barolo?", altAnswers: ["Hai mai bevuto Barolo?", "Tu hai mai bevuto il Barolo?"], explanation: "\"Bere\" → \"bevuto\"; \"mai\" in the middle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum closed at six.", answer: "Il museo ha chiuso alle sei.", altAnswers: ["Il museo ha chiuso alle 18."], explanation: "A place closing: \"ha chiuso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [had to take] a taxi.", sentence: "___ un taxi.", answer: "Abbiamo dovuto prendere", explanation: "\"Prendere\" → \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The match [has just started].", sentence: "La partita ___.", answer: "è appena cominciata", altAnswers: ["è appena iniziata"], explanation: "No object: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I liked] the chocolates.", sentence: "___ i cioccolatini.", answer: "Mi sono piaciuti", explanation: "Plural masculine: \"sono piaciuti\"." },
      { type: "word-order", prompt: "Put the words in order to say: On Sunday we stayed at home and slept.", words: ["Domenica", "siamo", "rimasti", "a", "casa", "e", "abbiamo", "dormito."], translation: "On Sunday we stayed at home and slept.", explanation: "\"Rimanere\" with essere, \"dormire\" with avere." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Sono arrivata tardi e ho perso il treno.", "Ho arrivata tardi e ho perso il treno.", "Sono arrivata tardi e sono perso il treno.", "Sono arrivato tardi e ho persa il treno."], correctIndex: 0, explanation: "\"Arrivare\" with essere, \"perdere\" with avere." },
      { type: "speak", text: "Sabato sono andato a Torino, ho visto il Museo Egizio e mi è piaciuto molto. Non sono ancora stato alla Mole.", prompt: "Say it as a man: On Saturday I went to Turin, saw the Egyptian Museum and liked it a lot. I haven't been to the Mole yet.", tip: "Four past forms, two auxiliaries.", explanation: "Essere, avere, piacere and \"non ... ancora\"." },
    ],
  },
];

export const IT_A2_U03_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your Italian colleague asks how your week went. Write a message: what you've already done at work or at home, what you haven't done yet and why, one thing you had to do (ho dovuto / sono dovuto andare), and one place you've never been but want to visit.",
  minWords: 40,
  maxWords: 100,
  rubric: [
    "Chooses essere or avere correctly for each verb, including verbs with both (ho finito il lavoro / la riunione è finita)",
    "Puts già, ancora, appena and mai between the auxiliary and the participle (ho già finito, non ho ancora chiamato)",
    "Uses a modal in the past with the infinitive's auxiliary (ho dovuto lavorare, sono dovuta andare)",
    "Makes essere participles agree with the subject",
  ],
  modelAnswer: "Ciao Davide! Questa settimana ho lavorato tanto. Ho già finito il progetto per il cliente e la riunione di venerdì è andata bene. Non ho ancora scritto la relazione perché martedì sono dovuta andare dal medico e ho perso un giorno. La palestra? Non ci sono andata! Non sono mai stata a Lecce: ci vado a giugno, finalmente. E tu, sei appena tornato dalle ferie?",
  explanation: "\"Ho finito il progetto\" takes avere with an object, while \"la riunione è andata bene\" takes essere. \"Già\", \"ancora\", \"mai\" and \"appena\" sit between the auxiliary and the participle. \"Sono dovuta andare\" uses essere because \"andare\" does, and the writer is a woman, so \"dovuta\", \"andata\" and \"stata\" all end in -a.",
};
