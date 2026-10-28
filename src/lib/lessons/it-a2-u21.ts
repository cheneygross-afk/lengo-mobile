// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u21.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 21: Travel and Bureaucracy. Transactional Italian:
// trains, hotels, banks, the post office, the codice fiscale and the
// comune, recombining the polite conditional, Lei commands and past tenses,
// with new chunks: avrei bisogno di, mi servirebbe, è possibile +
// infinitive, bisogna, si deve / si può.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U21: Lesson[] = [
  {
    slug: "a2-trains-and-strikes",
    level: "IT-A2",
    number: 1,
    title: "Trains, Delays and Strikes",
    summary: "Talk about trains: il binario, la coincidenza, il ritardo, lo sciopero, il treno è stato cancellato.",
    duration: "15 min",
    sections: [
      {
        heading: "At the station",
        body: [
          "\"Il binario\" (platform), \"la biglietteria\" (ticket office), \"l'andata e ritorno\" (return ticket), \"la coincidenza\" (connection). On regional trains you may need to validate your ticket: \"convalidare il biglietto\".",
          "Ask: \"Da che binario parte il treno per Pisa?\" (which platform does the Pisa train leave from?).",
        ],
        examples: [
          { es: "Da che binario parte il treno per Pisa?", en: "Which platform does the train to Pisa leave from?" },
          { es: "Un biglietto di andata e ritorno per Verona, per favore.", en: "A return ticket to Verona, please." },
          { es: "A Firenze ho la coincidenza per Siena.", en: "In Florence I have a connection to Siena." },
          { es: "Ricordati di convalidare il biglietto!", en: "Remember to validate your ticket!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which platform does the train to Pisa leave from?", answer: "Da che binario parte il treno per Pisa?", altAnswers: ["Da quale binario parte il treno per Pisa?"], explanation: "\"Da che binario\": the preposition comes first." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A [return ticket] to Verona, please.", sentence: "Un biglietto di ___ per Verona, per favore.", answer: "andata e ritorno", explanation: "\"Andata e ritorno\" = return; \"solo andata\" = one way." },
        ],
      },
      {
        heading: "In ritardo",
        body: [
          "Late is \"in ritardo\", never \"tardi\" for a train: \"Il treno è in ritardo di venti minuti\". \"Tardi\" is for people and times of day: \"è tardi\" (it's late).",
          "Report what happened with the passato prossimo: \"Il treno è partito in ritardo\", \"ho perso la coincidenza\" (I missed my connection).",
        ],
        examples: [
          { es: "Il treno è in ritardo di venti minuti.", en: "The train is twenty minutes late." },
          { es: "Siamo partiti con mezz'ora di ritardo.", en: "We left half an hour late." },
          { es: "Ho perso la coincidenza per Siena.", en: "I missed my connection to Siena." },
          { es: "Il treno è in orario?", en: "Is the train on time?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train is twenty minutes late.", answer: "Il treno è in ritardo di venti minuti.", altAnswers: ["Il treno ha venti minuti di ritardo."], explanation: "\"In ritardo di\" + time." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I missed my connection to Siena.", answer: "Ho perso la coincidenza per Siena.", explanation: "\"Perdere la coincidenza\"." },
        ],
      },
      {
        heading: "Scioperi",
        body: [
          "Strikes (\"gli scioperi\") are announced in advance, usually with guaranteed services (\"le fasce di garanzia\"). \"C'è sciopero dei treni domani\". Trains may be \"cancellati\" or \"soppressi\" (both mean cancelled).",
        ],
        examples: [
          { es: "Domani c'è sciopero dei treni.", en: "There's a train strike tomorrow." },
          { es: "Il mio treno è stato cancellato.", en: "My train has been cancelled." },
          { es: "Bisogna prendere l'autobus sostitutivo.", en: "You have to take the replacement bus." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My train has been cancelled.", answer: "Il mio treno è stato cancellato.", altAnswers: ["Il mio treno è stato soppresso."], explanation: "\"È stato\" + participle, agreeing with \"il treno\"." },
          { type: "listen-choose", audio: "Domani c'è sciopero dei treni.", question: "What's happening tomorrow?", options: ["a train strike", "a train delay", "a new timetable", "free trains"], correctIndex: 0, explanation: "\"Lo sciopero\" = strike." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A return ticket to Verona, please.", answer: "Un biglietto di andata e ritorno per Verona, per favore.", altAnswers: ["Un'andata e ritorno per Verona, per favore.", "Un biglietto andata e ritorno per Verona, per favore."], explanation: "\"Andata e ritorno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the train on time?", answer: "Il treno è in orario?", explanation: "\"In orario\" = on time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We left half an hour late.", answer: "Siamo partiti con mezz'ora di ritardo.", altAnswers: ["Siamo partite con mezz'ora di ritardo.", "Siamo partiti in ritardo di mezz'ora."], explanation: "\"Con ... di ritardo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a train strike tomorrow.", answer: "Domani c'è sciopero dei treni.", altAnswers: ["Domani c'è lo sciopero dei treni.", "C'è sciopero dei treni domani.", "Domani c'è uno sciopero dei treni."], explanation: "\"Lo sciopero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Florence I have a connection to Siena.", answer: "A Firenze ho la coincidenza per Siena.", altAnswers: ["A Firenze ho una coincidenza per Siena."], explanation: "\"La coincidenza\" = connection." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Remember to validate your ticket! (to a friend)", answer: "Ricordati di convalidare il biglietto!", altAnswers: ["Ricordati di convalidare il biglietto."], explanation: "\"Ricordarsi di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train is [late].", sentence: "Il treno è ___.", answer: "in ritardo", explanation: "\"In ritardo\", not \"tardi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You have to take [the replacement bus].", sentence: "Bisogna prendere ___.", answer: "l'autobus sostitutivo", explanation: "\"Bisogna\" + infinitive = you have to." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train to Rome leaves [from platform four].", sentence: "Il treno per Roma parte ___.", answer: "dal binario quattro", altAnswers: ["dal binario 4"], explanation: "\"Partire dal binario\"." },
      { type: "word-order", prompt: "Put the words in order to say: My train has been cancelled.", words: ["Il", "mio", "treno", "è", "stato", "cancellato."], translation: "My train has been cancelled.", explanation: "\"È stato cancellato\"." },
      { type: "dictation", audio: "Il treno per Napoli è in ritardo di dieci minuti.", explanation: "\"In ritardo di\" + time." },
      { type: "speak", text: "Scusi, il treno per Bologna è in orario? Ho una coincidenza a Firenze.", prompt: "Ask at the station in Italian: Excuse me, is the train to Bologna on time? I have a connection in Florence.", tip: "co-in-ci-DEN-za: four syllables before the stress.", explanation: "\"In orario\"; \"la coincidenza\"." },
    ],
  },
  {
    slug: "a2-hotel-problems",
    level: "IT-A2",
    number: 2,
    title: "Problems at the Hotel",
    summary: "Complain politely at a hotel: l'aria condizionata non funziona, la camera è rumorosa, vorrei cambiare camera, potrebbe mandare qualcuno?",
    duration: "15 min",
    sections: [
      {
        heading: "What's wrong",
        body: [
          "\"Non funziona\" (doesn't work) is the key phrase: \"l'aria condizionata non funziona\", \"il riscaldamento\" (heating), \"la doccia\", \"il wifi\". For other problems: \"la camera è rumorosa\" (noisy), \"manca\" (is missing): \"mancano gli asciugamani\" (there are no towels).",
        ],
        examples: [
          { es: "L'aria condizionata non funziona.", en: "The air conditioning doesn't work." },
          { es: "La camera è molto rumorosa.", en: "The room is very noisy." },
          { es: "Mancano gli asciugamani.", en: "There are no towels." },
          { es: "Non c'è acqua calda.", en: "There's no hot water." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The air conditioning doesn't work.", answer: "L'aria condizionata non funziona.", explanation: "\"Non funziona\" = doesn't work." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There are no] towels.", sentence: "___ gli asciugamani.", answer: "Mancano", explanation: "\"Mancare\" agrees with what's missing: plural." },
        ],
      },
      {
        heading: "Asking politely",
        body: [
          "Use the conditional: \"vorrei cambiare camera\" (I'd like to change rooms), \"potrebbe mandare qualcuno?\" (could you send someone?), \"avrei bisogno di\" (I'd need), \"mi servirebbe\" (I could do with). \"Voglio cambiare camera!\" sounds rude to the receptionist.",
          "\"È possibile\" + infinitive asks if something can be done: \"È possibile fare il check-out più tardi?\".",
        ],
        examples: [
          { es: "Vorrei cambiare camera, per favore.", en: "I'd like to change rooms, please." },
          { es: "Potrebbe mandare qualcuno a controllare?", en: "Could you send someone to check?" },
          { es: "Mi servirebbe un altro cuscino.", en: "I could do with another pillow." },
          { es: "È possibile lasciare le valigie qui?", en: "Is it possible to leave our suitcases here?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you send someone to check? (formal)", answer: "Potrebbe mandare qualcuno a controllare?", altAnswers: ["Può mandare qualcuno a controllare?"], explanation: "Conditional \"potrebbe\" is the most polite." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it possible to leave our suitcases here?", answer: "È possibile lasciare le valigie qui?", altAnswers: ["È possibile lasciare qui le valigie?", "Possiamo lasciare le valigie qui?"], explanation: "\"È possibile\" + infinitive." },
        ],
      },
      {
        heading: "Reporting what happened",
        body: [
          "Past tenses tell the story: passato prossimo for events, imperfetto for the situation. \"Stanotte non ho dormito: c'era una festa nella camera accanto\".",
        ],
        examples: [
          { es: "Stanotte non ho dormito per niente.", en: "I didn't sleep at all last night." },
          { es: "C'era una festa nella camera accanto.", en: "There was a party in the room next door." },
          { es: "Ho chiamato la reception, ma nessuno ha risposto.", en: "I called reception, but nobody answered." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I called reception, but nobody answered.", answer: "Ho chiamato la reception, ma nessuno ha risposto.", altAnswers: ["Ho chiamato la reception, ma non ha risposto nessuno."], explanation: "Passato prossimo; \"nessuno\" first → no \"non\"." },
          { type: "listen-choose", audio: "C'era una festa nella camera accanto e non ho dormito.", question: "Why didn't he sleep?", options: ["There was a party next door.", "The bed was uncomfortable.", "It was too hot.", "The street was noisy."], correctIndex: 0, explanation: "\"La camera accanto\" = the room next door." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The room is very noisy.", answer: "La camera è molto rumorosa.", altAnswers: ["La stanza è molto rumorosa."], explanation: "\"Rumoroso\" = noisy." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to change rooms, please.", answer: "Vorrei cambiare camera, per favore.", altAnswers: ["Vorrei cambiare stanza, per favore."], explanation: "\"Vorrei\", not \"voglio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no hot water.", answer: "Non c'è acqua calda.", altAnswers: ["Non c'è l'acqua calda.", "Manca l'acqua calda."], explanation: "\"Non c'è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I could do with another pillow.", answer: "Mi servirebbe un altro cuscino.", altAnswers: ["Avrei bisogno di un altro cuscino."], explanation: "\"Mi servirebbe\" = conditional of \"servire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't sleep at all last night.", answer: "Stanotte non ho dormito per niente.", altAnswers: ["Stanotte non ho dormito affatto.", "Non ho dormito per niente stanotte."], explanation: "\"Per niente\" = at all." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it possible to check out later?", answer: "È possibile fare il check-out più tardi?", altAnswers: ["È possibile lasciare la camera più tardi?"], explanation: "\"È possibile\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The heating [doesn't work].", sentence: "Il riscaldamento ___.", answer: "non funziona", explanation: "\"Funzionare\" = to work (for machines)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd need] another towel.", sentence: "___ un altro asciugamano.", answer: "Avrei bisogno di", altAnswers: ["Mi servirebbe"], explanation: "Conditional of \"avere bisogno di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There was a party [in the room next door].", sentence: "C'era una festa ___.", answer: "nella camera accanto", altAnswers: ["nella stanza accanto"], explanation: "\"Accanto\" = next door." },
      { type: "word-order", prompt: "Put the words in order to say: Could you send someone to check?", words: ["Potrebbe", "mandare", "qualcuno", "a", "controllare?"], translation: "Could you send someone to check?", explanation: "\"Mandare qualcuno a\" + infinitive." },
      { type: "multiple-choice", question: "Which is the politest way to ask for a new room?", options: ["Vorrei cambiare camera, per favore.", "Voglio cambiare camera!", "Cambio camera.", "Mi dà un'altra camera."], correctIndex: 0, explanation: "Conditional \"vorrei\" + \"per favore\"." },
      { type: "dictation", audio: "Il wifi non funziona e mancano gli asciugamani.", explanation: "\"Non funziona\"; \"mancano\" agrees with the plural." },
      { type: "speak", text: "Buonasera, l'aria condizionata non funziona. Potrebbe mandare qualcuno?", prompt: "Call reception in Italian: Good evening, the air conditioning doesn't work. Could you send someone?", tip: "con-di-zio-NA-ta: the \"z\" sounds like ts.", explanation: "\"Non funziona\" + conditional request." },
    ],
  },
  {
    slug: "a2-bank-and-post-office",
    level: "IT-A2",
    number: 3,
    title: "The Bank and the Post Office",
    summary: "Open an account, use the bancomat, send a raccomandata or a parcel, and queue the Italian way: prendere il numero.",
    duration: "15 min",
    sections: [
      {
        heading: "At the bank",
        body: [
          "\"Aprire un conto\" (open an account), \"il bancomat\" (cash machine, and the debit card), \"prelevare\" or \"ritirare\" (to withdraw), \"fare un bonifico\" (make a bank transfer).",
          "To open an account you'll need \"un documento\" and \"il codice fiscale\".",
        ],
        examples: [
          { es: "Vorrei aprire un conto.", en: "I'd like to open an account." },
          { es: "Che documenti servono?", en: "What documents do I need?" },
          { es: "Il bancomat non mi dà i soldi.", en: "The cash machine won't give me any money." },
          { es: "Devo fare un bonifico al padrone di casa.", en: "I have to make a transfer to my landlord." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What documents do I need?", answer: "Che documenti servono?", altAnswers: ["Quali documenti servono?", "Che documenti mi servono?", "Quali documenti mi servono?"], explanation: "\"Servono\" agrees with \"documenti\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like [to open an account].", sentence: "Vorrei ___.", answer: "aprire un conto", explanation: "\"Aprire un conto\"." },
        ],
      },
      {
        heading: "At the post office",
        body: [
          "\"Spedire\" (to send) a parcel (\"un pacco\") or \"una raccomandata\" (a registered letter). \"Il francobollo\" is a stamp. Many offices give you a ticket: \"prendere il numero\", then wait for it on the screen.",
        ],
        examples: [
          { es: "Vorrei spedire questo pacco in Inghilterra.", en: "I'd like to send this parcel to England." },
          { es: "Devo spedire una raccomandata.", en: "I have to send a registered letter." },
          { es: "Prima bisogna prendere il numero.", en: "First you have to take a ticket." },
          { es: "Quanto ci mette ad arrivare?", en: "How long does it take to arrive?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to send this parcel to England.", answer: "Vorrei spedire questo pacco in Inghilterra.", altAnswers: ["Vorrei mandare questo pacco in Inghilterra."], explanation: "\"Spedire\" = to send by post." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take to arrive?", answer: "Quanto ci mette ad arrivare?", altAnswers: ["Quanto ci vuole per arrivare?", "Quanto tempo ci mette ad arrivare?"], explanation: "\"Metterci\" = to take (time)." },
        ],
      },
      {
        heading: "Queues",
        body: [
          "Queue is \"la fila\" or \"la coda\": \"fare la fila\", \"fare la coda\", \"essere in fila\". \"Chi è l'ultimo?\" (who's last?) finds the end of the queue where there are no tickets.",
        ],
        examples: [
          { es: "Ho fatto la fila per un'ora!", en: "I queued for an hour!" },
          { es: "Scusi, chi è l'ultimo?", en: "Excuse me, who's last in the queue?" },
          { es: "Che numero ha? Io ho il 45.", en: "What number have you got? I've got 45." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I queued for an hour!", answer: "Ho fatto la fila per un'ora!", altAnswers: ["Ho fatto la coda per un'ora!", "Ho fatto un'ora di fila!"], explanation: "\"Fare la fila\" or \"fare la coda\"." },
          { type: "listen-choose", audio: "Scusi, chi è l'ultimo?", question: "What is she asking?", options: ["who's last in the queue", "who's in charge", "what time it closes", "where the exit is"], correctIndex: 0, explanation: "\"L'ultimo\" = the last one." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to open an account.", answer: "Vorrei aprire un conto.", altAnswers: ["Vorrei aprire un conto corrente."], explanation: "Conditional \"vorrei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cash machine won't give me any money.", answer: "Il bancomat non mi dà i soldi.", altAnswers: ["Il bancomat non mi dà soldi."], explanation: "\"Il bancomat\" = cash machine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to send a registered letter.", answer: "Devo spedire una raccomandata.", altAnswers: ["Devo mandare una raccomandata."], explanation: "\"Una raccomandata\" = registered letter." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First you have to take a ticket.", answer: "Prima bisogna prendere il numero.", altAnswers: ["Prima si deve prendere il numero.", "Bisogna prima prendere il numero."], explanation: "\"Bisogna\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to make a transfer to my landlord.", answer: "Devo fare un bonifico al padrone di casa.", altAnswers: ["Devo fare un bonifico al proprietario di casa.", "Devo fare un bonifico alla padrona di casa."], explanation: "\"Fare un bonifico\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, who's last in the queue? (formal)", answer: "Scusi, chi è l'ultimo?", altAnswers: ["Scusi, chi è l'ultimo della fila?", "Scusi, chi è l'ultima?"], explanation: "\"Scusi\": formal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I need [to withdraw] some cash.", sentence: "Devo ___ dei contanti.", answer: "prelevare", altAnswers: ["ritirare"], explanation: "\"Prelevare\" = to withdraw." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Two [stamps] for the UK, please.", sentence: "Due ___ per il Regno Unito, per favore.", answer: "francobolli", explanation: "\"Il francobollo\" → \"i francobolli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can you pay] by card here?", sentence: "___ con la carta qui?", answer: "Si può pagare", explanation: "\"Si può\" + infinitive = can one, can you." },
      { type: "word-order", prompt: "Put the words in order to say: I'd like to send this parcel to England.", words: ["Vorrei", "spedire", "questo", "pacco", "in", "Inghilterra."], translation: "I'd like to send this parcel to England.", explanation: "\"In\" + country." },
      { type: "multiple-choice", question: "At the post office, you see a machine with numbered tickets. What should you do?", options: ["Prendere il numero.", "Fare il bonifico.", "Chiedere chi è l'ultimo.", "Convalidare il biglietto."], correctIndex: 0, explanation: "\"Prendere il numero\" = take a ticket." },
      { type: "dictation", audio: "Per aprire un conto serve il codice fiscale.", explanation: "\"Serve\" + singular." },
      { type: "speak", text: "Buongiorno, vorrei spedire un pacco in Irlanda. Quanto ci mette ad arrivare?", prompt: "Say it in Italian at the post office: Good morning, I'd like to send a parcel to Ireland. How long does it take to arrive?", tip: "\"Pacco\": PAC-co, hold the cc.", explanation: "\"Vorrei\" + \"metterci\"." },
    ],
  },
  {
    slug: "a2-codice-fiscale",
    level: "IT-A2",
    number: 4,
    title: "The Codice Fiscale and the Comune",
    summary: "Understand the codice fiscale, the documents you need, and bisogna / si deve + infinitive.",
    duration: "15 min",
    sections: [
      {
        heading: "Il codice fiscale",
        body: [
          "\"Il codice fiscale\" is a personal tax code of 16 letters and numbers. In Italy you need it for almost everything: a bank account, a phone contract, a rental contract, the doctor. It's free, and you get it from \"l'Agenzia delle Entrate\" (the tax office) or an Italian consulate abroad.",
        ],
        examples: [
          { es: "Per il contratto serve il codice fiscale.", en: "You need your tax code for the contract." },
          { es: "Dove posso fare il codice fiscale?", en: "Where can I get a tax code?" },
          { es: "Bisogna andare all'Agenzia delle Entrate.", en: "You have to go to the tax office." },
          { es: "È gratis e ci vogliono pochi minuti.", en: "It's free and it takes a few minutes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where can I get a tax code?", answer: "Dove posso fare il codice fiscale?", altAnswers: ["Dove posso avere il codice fiscale?", "Dove posso richiedere il codice fiscale?"], explanation: "\"Fare\" a document = get it done." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You have to go] to the tax office.", sentence: "___ all'Agenzia delle Entrate.", answer: "Bisogna andare", altAnswers: ["Si deve andare"], explanation: "\"Bisogna\" + infinitive: no person, no ending." },
        ],
      },
      {
        heading: "Documents",
        body: [
          "\"Il passaporto\", \"la carta d'identità\" (ID card), \"il permesso di soggiorno\" (residence permit, for non-EU citizens). Office staff ask \"Ha un documento?\" and say \"Mi serve una fotocopia\".",
          "\"Bisogna\" and \"si deve\" both mean you have to, in general; \"si può\" means you can. They're fixed chunks for now.",
        ],
        examples: [
          { es: "Ha un documento, per favore?", en: "Have you got some ID, please?" },
          { es: "Mi serve una fotocopia del passaporto.", en: "I need a photocopy of your passport." },
          { es: "Si deve prendere un appuntamento online.", en: "You have to book an appointment online." },
          { es: "Si può pagare solo con la carta.", en: "You can only pay by card." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to book an appointment online.", answer: "Si deve prendere un appuntamento online.", altAnswers: ["Bisogna prendere un appuntamento online.", "Bisogna prenotare un appuntamento online.", "Si deve prenotare un appuntamento online."], explanation: "\"Si deve\" / \"bisogna\" + infinitive." },
          { type: "listen-choose", audio: "Ha un documento, per favore?", question: "What does the clerk want?", options: ["some ID", "a form", "money", "a photo"], correctIndex: 0, explanation: "\"Un documento\" = an ID document." },
        ],
      },
      {
        heading: "Il comune",
        body: [
          "\"Il comune\" is the town hall. At \"l'anagrafe\" (registry office) you register your address (\"la residenza\") and can ask for \"la carta d'identità\". Offices often have limited hours: \"l'ufficio è aperto solo la mattina\".",
        ],
        examples: [
          { es: "Vorrei chiedere la residenza.", en: "I'd like to register my address." },
          { es: "L'ufficio è aperto solo la mattina.", en: "The office is only open in the morning." },
          { es: "Torni con il contratto d'affitto.", en: "Come back with your rental contract." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The office is only open in the morning.", answer: "L'ufficio è aperto solo la mattina.", altAnswers: ["L'ufficio è aperto soltanto la mattina.", "L'ufficio è aperto solo di mattina."], explanation: "\"La mattina\" = in the mornings." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come back with your rental contract. (formal)", answer: "Torni con il contratto d'affitto.", altAnswers: ["Torni con il contratto di affitto.", "Torni col contratto d'affitto."], explanation: "Lei command \"torni\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need your tax code for the contract.", answer: "Per il contratto serve il codice fiscale.", altAnswers: ["Serve il codice fiscale per il contratto.", "Per il contratto ci vuole il codice fiscale."], explanation: "\"Serve\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's free and it takes a few minutes.", answer: "È gratis e ci vogliono pochi minuti.", altAnswers: ["È gratuito e ci vogliono pochi minuti."], explanation: "\"Ci vogliono\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got some ID, please? (formal)", answer: "Ha un documento, per favore?", altAnswers: ["Ha un documento d'identità, per favore?"], explanation: "\"Un documento\" = ID." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can only pay by card.", answer: "Si può pagare solo con la carta.", altAnswers: ["Si può pagare solo con carta.", "Si può pagare soltanto con la carta."], explanation: "\"Si può\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need a photocopy of your passport. (formal)", answer: "Mi serve una fotocopia del passaporto.", altAnswers: ["Mi serve una fotocopia del Suo passaporto.", "Ho bisogno di una fotocopia del passaporto."], explanation: "\"Mi serve\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to register my address.", answer: "Vorrei chiedere la residenza.", altAnswers: ["Vorrei fare la residenza.", "Vorrei richiedere la residenza."], explanation: "\"La residenza\" = official address." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [a residence permit].", sentence: "Ho ___.", answer: "il permesso di soggiorno", explanation: "\"Il permesso di soggiorno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You have to] fill in this form.", sentence: "___ compilare questo modulo.", answer: "Bisogna", altAnswers: ["Si deve"], explanation: "\"Bisogna\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can you] park here?", sentence: "___ parcheggiare qui?", answer: "Si può", explanation: "\"Si può\" = can one." },
      { type: "word-order", prompt: "Put the words in order to say: Where can I get a tax code?", words: ["Dove", "posso", "fare", "il", "codice", "fiscale?"], translation: "Where can I get a tax code?", explanation: "\"Fare il codice fiscale\"." },
      { type: "multiple-choice", question: "Which document do non-EU citizens need to live in Italy?", options: ["il permesso di soggiorno", "il codice fiscale only", "la raccomandata", "il bancomat"], correctIndex: 0, explanation: "\"Il permesso di soggiorno\" = residence permit." },
      { type: "dictation", audio: "Per aprire un conto bisogna avere il codice fiscale.", explanation: "\"Bisogna\" + infinitive." },
      { type: "speak", text: "Buongiorno, avrei bisogno del codice fiscale. Che documenti servono?", prompt: "Say it in Italian at the tax office: Good morning, I'd need a tax code. What documents are needed?", tip: "fi-SCA-le: \"sc\" before \"a\" is hard, sk.", explanation: "\"Avrei bisogno di\" + \"servono\"." },
    ],
  },
  {
    slug: "a2-drill-transactional-phrases",
    level: "IT-A2",
    number: 5,
    title: "Drill: Transactional Italian",
    summary: "High-repetition practice of polite requests and complaints: vorrei, potrebbe, avrei bisogno di, mi servirebbe, è possibile, non funziona.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Ask and complain",
        body: [
          "Requests: \"vorrei\", \"potrebbe\", \"avrei bisogno di\", \"mi servirebbe\", \"è possibile\" + infinitive. Complaints: \"non funziona\", \"manca\", \"è in ritardo\", \"è stato cancellato\".",
        ],
        examples: [
          { es: "Potrebbe ripetere, per favore?", en: "Could you repeat that, please?" },
          { es: "Avrei bisogno di una ricevuta.", en: "I'd need a receipt." },
          { es: "È possibile pagare a rate?", en: "Is it possible to pay in instalments?" },
          { es: "Il riscaldamento non funziona da ieri.", en: "The heating hasn't worked since yesterday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you repeat that, please? (formal)", answer: "Potrebbe ripetere, per favore?", altAnswers: ["Può ripetere, per favore?"], explanation: "Conditional \"potrebbe\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The heating hasn't worked since yesterday.", answer: "Il riscaldamento non funziona da ieri.", explanation: "Present + \"da\": still not working." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd need a receipt.", answer: "Avrei bisogno di una ricevuta.", altAnswers: ["Mi servirebbe una ricevuta."], explanation: "\"Avrei bisogno di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it possible to pay in instalments?", answer: "È possibile pagare a rate?", explanation: "\"È possibile\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a one-way ticket to Bari.", answer: "Vorrei un biglietto di sola andata per Bari.", altAnswers: ["Vorrei un biglietto solo andata per Bari.", "Vorrei una sola andata per Bari."], explanation: "\"Sola andata\" = one way." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you write it down for me? (formal)", answer: "Me lo potrebbe scrivere?", altAnswers: ["Potrebbe scrivermelo?", "Me lo può scrivere?"], explanation: "\"Me lo\" before the conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I could do with a map of the city.", answer: "Mi servirebbe una cartina della città.", altAnswers: ["Mi servirebbe una mappa della città.", "Avrei bisogno di una cartina della città."], explanation: "\"Mi servirebbe\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lift doesn't work.", answer: "L'ascensore non funziona.", explanation: "\"Non funziona\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it possible to change the ticket?", answer: "È possibile cambiare il biglietto?", altAnswers: ["Si può cambiare il biglietto?", "Posso cambiare il biglietto?"], explanation: "\"È possibile\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no soap in the bathroom.", answer: "Manca il sapone in bagno.", altAnswers: ["Non c'è il sapone in bagno.", "Non c'è sapone in bagno.", "In bagno manca il sapone."], explanation: "\"Mancare\" = to be missing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you call me a taxi? (formal)", answer: "Mi potrebbe chiamare un taxi?", altAnswers: ["Potrebbe chiamarmi un taxi?", "Mi può chiamare un taxi?"], explanation: "Conditional request." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There are no] blankets.", sentence: "___ le coperte.", answer: "Mancano", explanation: "Plural → \"mancano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like] some information.", sentence: "___ delle informazioni.", answer: "Vorrei", explanation: "Conditional \"vorrei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you have to] book?", sentence: "___ prenotare?", answer: "Bisogna", altAnswers: ["Si deve"], explanation: "\"Bisogna\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you] help me? (formal)", sentence: "___ aiutarmi?", answer: "Potrebbe", altAnswers: ["Può"], explanation: "Conditional = more polite." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd need] two copies.", sentence: "___ due copie.", answer: "Mi servirebbero", altAnswers: ["Avrei bisogno di"], explanation: "\"Servire\" agrees with \"due copie\": plural." },
      { type: "word-order", prompt: "Put the words in order to say: Is it possible to pay in instalments?", words: ["È", "possibile", "pagare", "a", "rate?"], translation: "Is it possible to pay in instalments?", explanation: "\"È possibile\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: Could you repeat that, please?", words: ["Potrebbe", "ripetere,", "per", "favore?"], translation: "Could you repeat that, please?", explanation: "\"Potrebbe\" + infinitive." },
      { type: "multiple-choice", question: "Which request is the most polite?", options: ["Mi potrebbe aiutare, per favore?", "Mi aiuti!", "Aiutami.", "Voglio aiuto."], correctIndex: 0, explanation: "Conditional + \"per favore\"." },
      { type: "dictation", audio: "Scusi, è possibile cambiare camera? Questa è troppo rumorosa.", explanation: "\"È possibile\" + infinitive." },
      { type: "speak", text: "Mi scusi, avrei bisogno di un'informazione. Potrebbe aiutarmi?", prompt: "Say it in Italian: Excuse me, I'd need some information. Could you help me?", tip: "a-VREI: stress on the last syllable; \"bisogno\" has a soft \"gn\".", explanation: "\"Avrei bisogno di\" + \"potrebbe\"." },
    ],
  },
  {
    slug: "a2-dialogue-lab-missed-connection",
    level: "IT-A2",
    number: 6,
    title: "Dialogue Lab: A Missed Connection",
    summary: "At the ticket office in Bologna after a delay: ho perso la coincidenza, posso prendere il prossimo treno?",
    duration: "15 min",
    sections: [
      {
        heading: "The problem",
        body: [
          "Emma's train from Milan arrived in Bologna forty minutes late, and her connection to Rimini has gone. At the ticket office she explains with the passato prossimo and asks politely.",
        ],
        examples: [
          { es: "Buongiorno, il mio treno è arrivato con quaranta minuti di ritardo.", en: "Good morning, my train arrived forty minutes late." },
          { es: "Ho perso la coincidenza per Rimini.", en: "I've missed my connection to Rimini." },
          { es: "Mi fa vedere il biglietto?", en: "Can I see your ticket?" },
          { es: "Ecco a Lei.", en: "Here you are." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My train arrived forty minutes late.", answer: "Il mio treno è arrivato con quaranta minuti di ritardo.", altAnswers: ["Il mio treno è arrivato in ritardo di quaranta minuti.", "Il mio treno ha fatto quaranta minuti di ritardo."], explanation: "\"Con ... di ritardo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can I see] your ticket? (formal)", sentence: "___ il biglietto?", answer: "Mi fa vedere", altAnswers: ["Posso vedere"], explanation: "\"Mi fa vedere\" = will you let me see." },
        ],
      },
      {
        heading: "The solution",
        body: [
          "The clerk checks: \"Non si preoccupi\" (don't worry). With a delay you can usually take the next train: \"Può prendere il prossimo treno senza pagare niente\".",
        ],
        examples: [
          { es: "Posso prendere il prossimo treno?", en: "Can I take the next train?" },
          { es: "Non si preoccupi, il biglietto è valido.", en: "Don't worry, the ticket is valid." },
          { es: "Il prossimo parte alle 16:20 dal binario 3.", en: "The next one leaves at 16:20 from platform 3." },
          { es: "Devo pagare qualcosa?", en: "Do I have to pay anything?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I take the next train?", answer: "Posso prendere il prossimo treno?", altAnswers: ["È possibile prendere il prossimo treno?"], explanation: "\"Posso\" + infinitive." },
          { type: "listen-choose", audio: "Il prossimo parte alle sedici e venti dal binario tre.", question: "When and where does the next train leave?", options: ["16:20, platform 3", "16:30, platform 3", "16:20, platform 13", "6:20, platform 3"], correctIndex: 0, explanation: "\"Sedici e venti\", \"binario tre\"." },
        ],
      },
      {
        heading: "A refund?",
        body: [
          "For long delays you can ask for \"un rimborso\" (a refund), usually online: \"Bisogna compilare il modulo sul sito\". Thank the clerk: \"Grazie mille, è stato gentilissimo\".",
        ],
        examples: [
          { es: "Ho diritto a un rimborso?", en: "Am I entitled to a refund?" },
          { es: "Sì, bisogna compilare il modulo sul sito.", en: "Yes, you have to fill in the form on the website." },
          { es: "Grazie mille, è stato gentilissimo.", en: "Thanks so much, you've been very kind." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Am I entitled to a refund?", answer: "Ho diritto a un rimborso?", explanation: "\"Avere diritto a\" = to be entitled to." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thanks so much, you've been very kind. (to a man, formal)", answer: "Grazie mille, è stato gentilissimo.", altAnswers: ["Grazie mille, è stato molto gentile."], explanation: "\"È stato\": formal Lei, agreeing with a man." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've missed my connection to Rimini.", answer: "Ho perso la coincidenza per Rimini.", explanation: "\"Perdere la coincidenza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't worry, the ticket is valid. (formal)", answer: "Non si preoccupi, il biglietto è valido.", explanation: "Negative Lei command: \"non si preoccupi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I have to pay anything?", answer: "Devo pagare qualcosa?", explanation: "\"Qualcosa\" in a question = anything." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to fill in the form on the website.", answer: "Bisogna compilare il modulo sul sito.", altAnswers: ["Si deve compilare il modulo sul sito."], explanation: "\"Bisogna\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can take the next train without paying anything. (formal)", answer: "Può prendere il prossimo treno senza pagare niente.", altAnswers: ["Può prendere il prossimo treno senza pagare nulla."], explanation: "\"Senza\" + infinitive + \"niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here you are. (formal)", answer: "Ecco a Lei.", altAnswers: ["Ecco a lei.", "Ecco."], explanation: "Formal \"a Lei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The next one leaves [from platform 3].", sentence: "Il prossimo parte ___.", answer: "dal binario 3", altAnswers: ["dal binario tre"], explanation: "\"Dal binario\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Am I entitled to [a refund]?", sentence: "Ho diritto a ___?", answer: "un rimborso", explanation: "\"Il rimborso\" = refund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Don't worry]. (formal)", sentence: "___.", answer: "Non si preoccupi", explanation: "\"Non\" + Lei command." },
      { type: "word-order", prompt: "Put the words in order to say: Can I take the next train?", words: ["Posso", "prendere", "il", "prossimo", "treno?"], translation: "Can I take the next train?", explanation: "\"Posso\" + infinitive." },
      { type: "multiple-choice", question: "The clerk says \"Il biglietto è valido anche sul prossimo treno\". What does that mean?", options: ["Your ticket is valid on the next train too.", "You need a new ticket.", "The next train is full.", "Your ticket has expired."], correctIndex: 0, explanation: "\"Valido\" = valid." },
      { type: "dictation", audio: "Ho perso la coincidenza. Posso prendere il prossimo treno?", explanation: "Passato prossimo + \"posso\"." },
      { type: "speak", text: "Buongiorno, il mio treno era in ritardo e ho perso la coincidenza per Rimini. Cosa posso fare?", prompt: "Say it in Italian at the ticket office: Good morning, my train was late and I missed my connection to Rimini. What can I do?", tip: "ri-TAR-do and co-in-ci-DEN-za: find the stressed syllable first.", explanation: "Imperfetto for the situation, passato prossimo for the event." },
    ],
  },
  {
    slug: "a2-dialogue-lab-lost-luggage",
    level: "IT-A2",
    number: 7,
    title: "Dialogue Lab: Lost Luggage",
    summary: "At the airport in Rome: la mia valigia non è arrivata, com'era?, era grande e blu.",
    duration: "15 min",
    sections: [
      {
        heading: "The suitcase hasn't arrived",
        body: [
          "Tom has landed at Rome airport; everyone else has their bags. He goes to \"l'ufficio bagagli smarriti\" (the lost-luggage office) and explains with the passato prossimo.",
        ],
        examples: [
          { es: "Scusi, la mia valigia non è arrivata.", en: "Excuse me, my suitcase hasn't arrived." },
          { es: "Ho aspettato al nastro per un'ora.", en: "I waited at the carousel for an hour." },
          { es: "Da dove arriva?", en: "Where have you flown in from?" },
          { es: "Da Londra. Avevo uno scalo a Monaco.", en: "From London. I had a stopover in Munich." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, my suitcase hasn't arrived. (formal)", answer: "Scusi, la mia valigia non è arrivata.", explanation: "\"Arrivare\" takes \"essere\": \"arrivata\" agrees." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I waited [at the carousel] for an hour.", sentence: "Ho aspettato ___ per un'ora.", answer: "al nastro", altAnswers: ["al nastro bagagli"], explanation: "\"Il nastro\" = the baggage belt." },
        ],
      },
      {
        heading: "Com'era?",
        body: [
          "The clerk asks \"Com'era?\" (what was it like?). Describe with the imperfetto: \"Era grande e blu, con le ruote\" (it was big and blue, with wheels). \"Dentro c'erano\" lists the contents.",
        ],
        examples: [
          { es: "Com'era la valigia?", en: "What was the suitcase like?" },
          { es: "Era grande e blu, con le ruote.", en: "It was big and blue, with wheels." },
          { es: "C'era un nastro rosso sulla maniglia.", en: "There was a red ribbon on the handle." },
          { es: "Dentro c'erano tutti i miei vestiti.", en: "All my clothes were inside." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was big and blue, with wheels.", answer: "Era grande e blu, con le ruote.", altAnswers: ["Era grande e blu con le ruote."], explanation: "Imperfetto for description." },
          { type: "listen-choose", audio: "C'era un nastro rosso sulla maniglia.", question: "What was on the handle?", options: ["a red ribbon", "a red label", "a name tag", "a lock"], correctIndex: 0, explanation: "\"Un nastro\" here = a ribbon." },
        ],
      },
      {
        heading: "What happens now",
        body: [
          "The clerk fills in a report and says: \"Compili questo modulo\" (fill in this form) and \"Mi lasci il Suo numero\" (leave me your number). \"Gliela portiamo in albergo\" (we'll bring it to your hotel) is good news.",
        ],
        examples: [
          { es: "Compili questo modulo, per favore.", en: "Fill in this form, please." },
          { es: "Mi lasci il Suo numero di telefono.", en: "Leave me your phone number." },
          { es: "Quando la troviamo, gliela portiamo in albergo.", en: "When we find it, we'll bring it to your hotel." },
          { es: "Nel frattempo mi servirebbe uno spazzolino.", en: "In the meantime I could do with a toothbrush." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fill in this form, please. (formal)", answer: "Compili questo modulo, per favore.", explanation: "Lei command of \"compilare\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the meantime I could do with a toothbrush.", answer: "Nel frattempo mi servirebbe uno spazzolino.", altAnswers: ["Intanto mi servirebbe uno spazzolino.", "Nel frattempo avrei bisogno di uno spazzolino."], explanation: "\"Mi servirebbe\" + singular." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What was the suitcase like?", answer: "Com'era la valigia?", altAnswers: ["Come era la valigia?"], explanation: "Imperfetto for description." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "All my clothes were inside.", answer: "Dentro c'erano tutti i miei vestiti.", altAnswers: ["C'erano tutti i miei vestiti dentro."], explanation: "\"C'erano\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leave me your phone number. (formal)", answer: "Mi lasci il Suo numero di telefono.", altAnswers: ["Mi lasci il suo numero di telefono.", "Mi lasci il Suo numero."], explanation: "Lei command; formal \"Suo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had a stopover in Munich.", answer: "Avevo uno scalo a Monaco.", altAnswers: ["Ho fatto scalo a Monaco."], explanation: "\"Lo scalo\" = stopover; Munich = \"Monaco di Baviera\", usually just \"Monaco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was a red ribbon on the handle.", answer: "C'era un nastro rosso sulla maniglia.", explanation: "Imperfetto \"c'era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When will it arrive?", answer: "Quando arriva?", altAnswers: ["Quando arriverà?"], explanation: "Present for the near future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When we find it, [we'll bring it to you] at your hotel.", sentence: "Quando la troviamo, ___ in albergo.", answer: "gliela portiamo", explanation: "\"Le\" (to you, formal) + \"la\" (it) → \"gliela\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My suitcase [hasn't arrived].", sentence: "La mia valigia ___.", answer: "non è arrivata", explanation: "Agrees with \"valigia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was [black, with a green label].", sentence: "Era ___.", answer: "nera, con un'etichetta verde", altAnswers: ["nera con un'etichetta verde"], explanation: "Imperfetto description; \"nera\" agrees with \"valigia\"." },
      { type: "word-order", prompt: "Put the words in order to say: It was big and blue, with wheels.", words: ["Era", "grande", "e", "blu,", "con", "le", "ruote."], translation: "It was big and blue, with wheels.", explanation: "\"Blu\" never changes." },
      { type: "multiple-choice", question: "The clerk asks \"Ha lo scontrino del bagaglio?\". What does she want?", options: ["your baggage tag receipt", "your boarding pass", "your passport", "your hotel address"], correctIndex: 0, explanation: "The sticker you got at check-in." },
      { type: "dictation", audio: "La mia valigia non è arrivata. Era grande e nera.", explanation: "Passato prossimo + imperfetto." },
      { type: "speak", text: "Scusi, la mia valigia non è arrivata. È grande, blu, con un nastro rosso.", prompt: "Report it in Italian: Excuse me, my suitcase hasn't arrived. It's big, blue, with a red ribbon.", tip: "va-LI-gia: the \"gi\" is soft, like j.", explanation: "Passato prossimo + description." },
    ],
  },
  {
    slug: "a2-listening-lab-announcements",
    level: "IT-A2",
    number: 8,
    title: "Listening Lab: Announcements",
    summary: "Understand station and airport announcements at natural speed: in partenza, in arrivo, ritardo, binario, imbarco.",
    duration: "15 min",
    sections: [
      {
        heading: "At the station",
        body: [
          "Announcements follow a pattern: train type and number, destination, time, then the news. \"Il treno regionale 2134 per Ancona, delle ore 14:10, è in partenza dal binario 5\". \"In partenza\" = departing, \"in arrivo\" = arriving.",
          "Listen for three things: the destination, the platform, and the problem.",
        ],
        examples: [
          { es: "Il treno regionale per Ancona è in partenza dal binario 5.", en: "The regional train to Ancona is departing from platform 5." },
          { es: "Il treno proveniente da Roma è in arrivo al binario 2.", en: "The train from Rome is arriving at platform 2." },
          { es: "Il treno per Torino viaggia con 15 minuti di ritardo.", en: "The train to Turin is running 15 minutes late." },
          { es: "Attenzione: allontanarsi dalla linea gialla.", en: "Attention: stand back from the yellow line." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il treno regionale per Ancona è in partenza dal binario cinque.", question: "What's happening?", options: ["The Ancona train is leaving from platform 5.", "The Ancona train is arriving at platform 5.", "The Ancona train is cancelled.", "The Ancona train is late."], correctIndex: 0, explanation: "\"In partenza\" = departing." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train to Turin is running 15 minutes late.", answer: "Il treno per Torino viaggia con 15 minuti di ritardo.", altAnswers: ["Il treno per Torino viaggia con quindici minuti di ritardo.", "Il treno per Torino è in ritardo di 15 minuti."], explanation: "\"Viaggiare con ... di ritardo\"." },
        ],
      },
      {
        heading: "At the airport",
        body: [
          "\"Il volo\" (flight), \"l'imbarco\" (boarding), \"l'uscita\" or \"il gate\", \"la carta d'imbarco\" (boarding pass). \"Ultima chiamata\" = last call. Announcements are usually repeated in English, but the Italian comes first.",
        ],
        examples: [
          { es: "L'imbarco del volo per Parigi è all'uscita B12.", en: "Boarding for the Paris flight is at gate B12." },
          { es: "Ultima chiamata per i passeggeri del volo per Londra.", en: "Last call for passengers on the London flight." },
          { es: "Il volo per Atene è stato cancellato.", en: "The flight to Athens has been cancelled." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ultima chiamata per i passeggeri del volo per Londra.", question: "What does the announcement say?", options: ["last call for the London flight", "the London flight is delayed", "the London flight has landed", "the London flight is cancelled"], correctIndex: 0, explanation: "\"Ultima chiamata\" = last call." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The flight to Athens has been cancelled.", answer: "Il volo per Atene è stato cancellato.", explanation: "\"È stato cancellato\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Il treno proveniente da Roma è in arrivo al binario due.", question: "Where does the Rome train arrive?", options: ["platform 2", "platform 12", "platform 3", "platform 20"], correctIndex: 0, explanation: "\"Binario due\"." },
      { type: "listen-choose", audio: "Il treno per Napoli delle ore dieci e quindici è stato cancellato.", question: "What's the news?", options: ["The 10:15 to Naples is cancelled.", "The 10:50 to Naples is late.", "The 10:15 from Naples has arrived.", "The Naples train is on time."], correctIndex: 0, explanation: "\"Dieci e quindici\" = 10:15; \"cancellato\"." },
      { type: "listen-choose", audio: "L'imbarco del volo per Parigi è all'uscita B dodici.", question: "Where is boarding?", options: ["gate B12", "gate B2", "gate D12", "gate B20"], correctIndex: 0, explanation: "\"Uscita\" = gate." },
      { type: "dictation", audio: "Il treno per Milano è in partenza dal binario sette.", explanation: "\"In partenza dal binario\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The regional train to Ancona is departing from platform 5.", answer: "Il treno regionale per Ancona è in partenza dal binario 5.", altAnswers: ["Il treno regionale per Ancona è in partenza dal binario cinque.", "Il regionale per Ancona è in partenza dal binario 5."], explanation: "\"In partenza dal binario\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train from Rome is arriving at platform 2.", answer: "Il treno proveniente da Roma è in arrivo al binario 2.", altAnswers: ["Il treno da Roma è in arrivo al binario 2.", "Il treno proveniente da Roma è in arrivo al binario due."], explanation: "\"Proveniente da\" = coming from." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last call for passengers on the London flight.", answer: "Ultima chiamata per i passeggeri del volo per Londra.", explanation: "\"Ultima chiamata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Boarding for the Paris flight is at gate B12.", answer: "L'imbarco del volo per Parigi è all'uscita B12.", altAnswers: ["L'imbarco del volo per Parigi è al gate B12."], explanation: "\"L'imbarco\" = boarding." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where is gate twelve?", answer: "Dov'è l'uscita dodici?", altAnswers: ["Dov'è il gate dodici?", "Dov'è l'uscita 12?", "Dov'è il gate 12?"], explanation: "\"Dov'è\" + place." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Have your [boarding pass] ready.", sentence: "Tenete pronta la ___.", answer: "carta d'imbarco", explanation: "\"La carta d'imbarco\" = boarding pass." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train is [arriving] at platform 4.", sentence: "Il treno è ___ al binario 4.", answer: "in arrivo", explanation: "\"In arrivo\" = arriving." },
      { type: "word-order", prompt: "Put the words in order to say: Stand back from the yellow line.", words: ["Allontanarsi", "dalla", "linea", "gialla."], translation: "Stand back from the yellow line.", explanation: "Signs and announcements use the infinitive as a command." },
      { type: "speak", text: "Il treno per Torino viaggia con quindici minuti di ritardo.", prompt: "Read the announcement aloud in Italian: The train to Turin is running fifteen minutes late.", tip: "QUIN-di-ci: stress on the first syllable.", explanation: "\"Viaggiare con ... di ritardo\"." },
    ],
  },
  {
    slug: "a2-mission-booking-call",
    level: "IT-A2",
    number: 9,
    title: "Real-World Mission: Booking by Phone",
    summary: "Book a table and a hotel room by phone, with dates, times and special requests.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "On the phone",
        body: [
          "Start with \"Buongiorno, vorrei prenotare ...\" and give the details: how many people (\"per quattro persone\"), when (\"per sabato sera alle otto\", \"dal 12 al 15 luglio\"), and your name. Add requests with the conditional or \"è possibile\": \"Sarebbe possibile avere un tavolo fuori?\". Spell your name with Italian city names: \"T come Torino\".",
        ],
        examples: [
          { es: "Buongiorno, vorrei prenotare un tavolo per quattro persone.", en: "Good morning, I'd like to book a table for four." },
          { es: "Per sabato sera alle otto, se possibile.", en: "For Saturday evening at eight, if possible." },
          { es: "Sarebbe possibile avere un tavolo fuori?", en: "Would it be possible to have a table outside?" },
          { es: "Vorrei una camera doppia dal 12 al 15 luglio.", en: "I'd like a double room from 12 to 15 July." },
          { es: "La colazione è inclusa?", en: "Is breakfast included?" },
          { es: "A che nome? – Smith: S come Savona, M come Milano.", en: "What name is it under? – Smith: S for Savona, M for Milan." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a double room from 12 to 15 July.", answer: "Vorrei una camera doppia dal 12 al 15 luglio.", altAnswers: ["Vorrei prenotare una camera doppia dal 12 al 15 luglio."], explanation: "\"Dal ... al\" for dates." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would it be possible to have a table outside?", answer: "Sarebbe possibile avere un tavolo fuori?", altAnswers: ["Sarebbe possibile avere un tavolo all'aperto?", "È possibile avere un tavolo fuori?"], explanation: "\"Sarebbe possibile\" = conditional, extra polite." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Good morning, I'd like to book a table for four.", answer: "Buongiorno, vorrei prenotare un tavolo per quattro persone.", altAnswers: ["Buongiorno, vorrei prenotare un tavolo per quattro."], explanation: "\"Vorrei prenotare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For Saturday evening at eight, if possible.", answer: "Per sabato sera alle otto, se possibile.", altAnswers: ["Per sabato sera alle otto, se è possibile.", "Per sabato sera alle venti, se possibile."], explanation: "\"Alle otto\"; \"se possibile\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is breakfast included?", answer: "La colazione è inclusa?", altAnswers: ["È inclusa la colazione?", "È compresa la colazione?", "La colazione è compresa?"], explanation: "\"Inclusa\" agrees with \"colazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd need a cot for the baby.", answer: "Avremmo bisogno di un lettino per il bambino.", altAnswers: ["Ci servirebbe un lettino per il bambino.", "Avremmo bisogno di una culla per il bambino.", "Avremmo bisogno di un lettino per la bambina."], explanation: "\"Avremmo bisogno di\" = conditional, noi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "One of us is allergic to nuts.", answer: "Uno di noi è allergico alla frutta secca.", altAnswers: ["Una di noi è allergica alla frutta secca.", "Uno di noi è allergico alle noci."], explanation: "\"Allergico a\" + article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you pay by card at the restaurant?", answer: "Si può pagare con la carta al ristorante?", altAnswers: ["Si può pagare con carta al ristorante?", "Al ristorante si può pagare con la carta?"], explanation: "\"Si può\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What name is it under]?", sentence: "___?", answer: "A che nome", altAnswers: ["A nome di chi", "A quale nome"], explanation: "\"A che nome?\" = under what name?" },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll arrive [around ten in the evening].", sentence: "Arrivo ___.", answer: "verso le dieci di sera", altAnswers: ["verso le ventidue", "verso le 22"], explanation: "\"Verso le\" = around." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Smith: S [for] Savona.", sentence: "Smith: S ___ Savona.", answer: "come", explanation: "Italians spell with city names: \"S come Savona\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'd like to book a table for four.", words: ["Vorrei", "prenotare", "un", "tavolo", "per", "quattro."], translation: "I'd like to book a table for four.", explanation: "\"Vorrei\" + infinitive." },
      { type: "multiple-choice", question: "The receptionist says \"Mi dispiace, siamo al completo\". What does she mean?", options: ["Sorry, we're fully booked.", "Sorry, we're closed.", "Sorry, it's very expensive.", "Sorry, could you repeat?"], correctIndex: 0, explanation: "\"Al completo\" = full." },
      { type: "listen-choose", audio: "Perfetto, allora una doppia dal dodici al quindici luglio, a nome Smith.", question: "What has been booked?", options: ["a double room, 12 to 15 July", "a single room, 12 to 15 July", "a double room, 2 to 5 July", "a table for 12 people"], correctIndex: 0, explanation: "\"Una doppia\" = a double room." },
      { type: "dictation", audio: "Vorrei prenotare una camera per tre notti.", explanation: "\"Vorrei prenotare\"." },
      { type: "speak", text: "Buonasera, vorrei prenotare un tavolo per due per domani alle otto e mezza. Sarebbe possibile fuori?", prompt: "Call the restaurant in Italian: Good evening, I'd like to book a table for two for tomorrow at half past eight. Would it be possible outside?", tip: "pre-no-TA-re: stress on TA.", explanation: "\"Vorrei\" + \"sarebbe possibile\"." },
    ],
  },
  {
    slug: "a2-error-hunt-travel",
    level: "IT-A2",
    number: 10,
    title: "Error Hunt: Travel and Offices",
    summary: "Fix the typical mistakes in travel and office Italian: voglio cambiare camera, il treno è tardi, sto in linea.",
    duration: "15 min",
    sections: [
      {
        heading: "Too direct",
        body: [
          "\"Voglio cambiare camera!\" is grammatically fine, but at a reception desk it sounds like a demand. Use \"vorrei\" or \"potrei\". Same with \"Dammi la chiave\" to a receptionist: say \"Mi dà la chiave, per favore?\".",
        ],
        examples: [
          { es: "Vorrei cambiare camera, per favore.", en: "I'd like to change rooms, please." },
          { es: "Mi dà la chiave, per favore?", en: "Could I have the key, please?" },
          { es: "Potrei vedere un'altra camera?", en: "Could I see another room?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Make \"Voglio cambiare camera!\" polite. Translate into Italian: I'd like to change rooms, please.", source: "I'd like to change rooms, please.", answer: "Vorrei cambiare camera, per favore.", altAnswers: ["Vorrei cambiare stanza, per favore."], explanation: "Conditional \"vorrei\"." },
          { type: "translate", direction: "en-es", prompt: "Make \"Dammi la chiave\" polite. Translate into Italian: Could I have the key, please? (formal)", source: "Could I have the key, please?", answer: "Mi dà la chiave, per favore?", altAnswers: ["Mi darebbe la chiave, per favore?", "Potrei avere la chiave, per favore?"], explanation: "Formal question instead of a tu command." },
        ],
      },
      {
        heading: "Tardi or in ritardo?",
        body: [
          "\"*Il treno è tardi\" is wrong: trains, buses and people who are behind schedule are \"in ritardo\". \"Tardi\" means late in the day or later: \"è tardi\", \"arrivo tardi stasera\". \"Ho perduto la coincidenza\" is correct, just less common than \"ho perso\".",
        ],
        examples: [
          { es: "Il treno è in ritardo.", en: "The train is late." },
          { es: "Scusa, sono in ritardo!", en: "Sorry, I'm late!" },
          { es: "È tardi, andiamo a casa.", en: "It's late, let's go home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Il treno è tardi\". Translate into Italian: The train is late.", source: "The train is late.", answer: "Il treno è in ritardo.", explanation: "Behind schedule → \"in ritardo\"." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Scusa, sono in ritardo!", "Scusa, sono tardi!", "Scusa, ho ritardo!", "Scusa, sono ritardo!"], correctIndex: 0, explanation: "People are \"in ritardo\" too." },
        ],
      },
      {
        heading: "Queues and offices",
        body: [
          "\"*Sto in linea\" doesn't mean I'm in the queue: \"in linea\" is for phones (\"resti in linea\" = hold the line). Say \"faccio la fila\", \"faccio la coda\" or \"sono in fila\". And \"*bisogna di andare\" → \"bisogna andare\": no \"di\".",
        ],
        examples: [
          { es: "Sono in fila da mezz'ora.", en: "I've been in the queue for half an hour." },
          { es: "Resti in linea, per favore.", en: "Please hold the line." },
          { es: "Bisogna andare in Comune.", en: "You have to go to the town hall." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Sto in linea da mezz'ora\". Translate into Italian: I've been in the queue for half an hour.", source: "I've been in the queue for half an hour.", answer: "Sono in fila da mezz'ora.", altAnswers: ["Faccio la fila da mezz'ora.", "Faccio la coda da mezz'ora.", "Sono in coda da mezz'ora."], explanation: "\"In fila\" or \"in coda\"; present + \"da\"." },
          { type: "fill-blank", prompt: "Fix \"*Bisogna di andare in Comune\". Write the Italian for the bold words.", en: "[You have to go] to the town hall.", sentence: "___ in Comune.", answer: "Bisogna andare", altAnswers: ["Si deve andare"], explanation: "\"Bisogna\" + infinitive, no \"di\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"*Sono tardi, scusa!\". Translate into Italian: I'm late, sorry!", source: "I'm late, sorry!", answer: "Sono in ritardo, scusa!", altAnswers: ["Scusa, sono in ritardo!"], explanation: "\"In ritardo\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Il bancomat non lavora\". Translate into Italian: The cash machine doesn't work.", source: "The cash machine doesn't work.", answer: "Il bancomat non funziona.", explanation: "Machines \"funzionano\"; people \"lavorano\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Mi serve due fotocopie\". Translate into Italian: I need two photocopies.", source: "I need two photocopies.", answer: "Mi servono due fotocopie.", altAnswers: ["Ho bisogno di due fotocopie."], explanation: "\"Servire\" agrees: plural." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*È possibile di pagare con la carta?\". Translate into Italian: Is it possible to pay by card?", source: "Is it possible to pay by card?", answer: "È possibile pagare con la carta?", altAnswers: ["È possibile pagare con carta?", "Si può pagare con la carta?"], explanation: "\"È possibile\" + infinitive, no \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ho perso il mio coincidenza\". Translate into Italian: I missed my connection.", source: "I missed my connection.", answer: "Ho perso la coincidenza.", altAnswers: ["Ho perso la mia coincidenza.", "Ho perduto la coincidenza."], explanation: "\"La coincidenza\" is feminine." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Vorrei spedire questo pacco a Inghilterra\". Translate into Italian: I'd like to send this parcel to England.", source: "I'd like to send this parcel to England.", answer: "Vorrei spedire questo pacco in Inghilterra.", explanation: "Countries take \"in\"." },
      { type: "fill-blank", prompt: "Fix \"*Il treno parte dal binario tre a dieci e mezza\". Write the Italian for the bold words.", en: "The train leaves from platform three [at half past ten].", sentence: "Il treno parte dal binario tre ___.", answer: "alle dieci e mezza", altAnswers: ["alle dieci e mezzo", "alle 10:30"], explanation: "Times take \"alle\"." },
      { type: "fill-blank", prompt: "Fix \"*Mancano il sapone\". Write the Italian for the bold words.", en: "[There's no] soap.", sentence: "___ il sapone.", answer: "Manca", explanation: "Singular \"il sapone\" → \"manca\"." },
      { type: "fill-blank", prompt: "Fix \"*Potrebbe mi aiutare?\". Write the Italian for the bold words.", en: "[Could you help me]? (formal)", sentence: "___?", answer: "Potrebbe aiutarmi", altAnswers: ["Mi potrebbe aiutare"], explanation: "Pronoun before \"potrebbe\" or attached to the infinitive." },
      { type: "word-order", prompt: "Fix \"*Il treno è tardi di dieci minuti\". Put the words in order to say: The train is ten minutes late.", words: ["Il", "treno", "è", "in", "ritardo", "di", "dieci", "minuti."], translation: "The train is ten minutes late.", explanation: "\"In ritardo di\" + time." },
      { type: "multiple-choice", question: "Which sentence has a mistake?", options: ["Sto in linea alla posta da un'ora.", "Sono in fila alla posta da un'ora.", "Faccio la coda alla posta da un'ora.", "Faccio la fila alla posta da un'ora."], correctIndex: 0, explanation: "\"In linea\" is for the phone." },
      { type: "listen-choose", audio: "Resti in linea, un operatore Le risponderà al più presto.", question: "Where would you hear this?", options: ["on a phone helpline", "in a post-office queue", "on a train", "at a hotel desk"], correctIndex: 0, explanation: "\"Resti in linea\" = hold the line." },
      { type: "dictation", audio: "Vorrei cambiare camera, per favore. Questa è rumorosa.", explanation: "Polite \"vorrei\"." },
      { type: "speak", text: "Non \"il treno è tardi\", ma \"il treno è in ritardo\"!", prompt: "Correct the mistake out loud in Italian: Not \"il treno è tardi\", but \"il treno è in ritardo\"!", tip: "ri-TAR-do: a single r in the middle, rolled lightly.", explanation: "\"In ritardo\" for anything behind schedule." },
    ],
  },
];

export const IT_A2_U21_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your stay in an Italian hotel went badly: your train was late, you arrived after midnight, and the room had problems. Write a polite email to the hotel manager: say what happened, describe the problems, and ask for something (a discount, a different room next time, a refund).",
  minWords: 50,
  maxWords: 100,
  rubric: [
    "Reports events with the passato prossimo and describes the situation with the imperfetto",
    "Describes problems with non funziona, mancava / mancavano, era rumorosa",
    "Makes requests with the polite conditional (vorrei, potrebbe, sarebbe possibile)",
    "Keeps the formal register: Gentile ..., Lei, Cordiali saluti",
  ],
  modelAnswer: "Gentile direttore, Le scrivo per la mia prenotazione del 3 maggio. Il mio treno era in ritardo di due ore e sono arrivata in albergo dopo mezzanotte. La camera era molto rumorosa, l'aria condizionata non funzionava e mancavano gli asciugamani. Ho chiamato la reception, ma nessuno ha risposto. La mattina dopo ho chiesto di cambiare camera, ma non era possibile. Sarebbe possibile avere uno sconto? Vorrei anche sapere se potrebbe darmi una camera più tranquilla la prossima volta. Cordiali saluti, Laura Bennett",
  explanation: "\"Era in ritardo\", \"era rumorosa\" and \"non funzionava\" describe the situation in the imperfetto; \"sono arrivata\" and \"ho chiamato\" are events. \"Sarebbe possibile\" and \"vorrei\" keep the requests polite, and \"Le scrivo\" uses formal \"Le\".",
};
