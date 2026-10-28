// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u21-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 21 Extra Practice: Travel and Bureaucracy. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U21_EXTRA: Lesson[] = [
  {
    slug: "a2-travel-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Trains and Planes",
    summary: "More short travel exchanges at stations and airports.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Stations and airports",
        body: [
          "\"Il binario\", \"la coincidenza\", \"in ritardo\", \"cancellato\"; \"il volo\", \"l'imbarco\", \"la carta d'imbarco\", \"il bagaglio a mano\" (hand luggage).",
        ],
        examples: [
          { es: "A che ora parte il prossimo treno per Lecce?", en: "What time does the next train to Lecce leave?" },
          { es: "Posso portare questa borsa come bagaglio a mano?", en: "Can I take this bag as hand luggage?" },
          { es: "Il volo è in ritardo di un'ora.", en: "The flight is an hour late." },
          { es: "Devo cambiare a Bologna?", en: "Do I have to change in Bologna?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time does the next train to Lecce leave?", answer: "A che ora parte il prossimo treno per Lecce?", explanation: "\"A che ora\" + present." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I have to change in Bologna?", answer: "Devo cambiare a Bologna?", altAnswers: ["Bisogna cambiare a Bologna?"], explanation: "\"Cambiare\" = to change trains." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I take this bag as hand luggage?", answer: "Posso portare questa borsa come bagaglio a mano?", explanation: "\"Il bagaglio a mano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The flight is an hour late.", answer: "Il volo è in ritardo di un'ora.", altAnswers: ["Il volo ha un'ora di ritardo."], explanation: "\"In ritardo di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is this seat free?", answer: "È libero questo posto?", altAnswers: ["Questo posto è libero?"], explanation: "\"Libero\" = free, not taken." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, this is my seat. (formal)", answer: "Scusi, questo è il mio posto.", altAnswers: ["Mi scusi, questo è il mio posto.", "Scusi, questo posto è mio."], explanation: "\"Scusi\" + \"il mio posto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is a one-way ticket to Lecce?", answer: "Quanto costa un biglietto di sola andata per Lecce?", altAnswers: ["Quanto costa una sola andata per Lecce?", "Quant'è un biglietto di sola andata per Lecce?"], explanation: "\"Sola andata\" = one way." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The flight to Palermo has been cancelled because of the strike.", answer: "Il volo per Palermo è stato cancellato per lo sciopero.", altAnswers: ["Il volo per Palermo è stato cancellato a causa dello sciopero."], explanation: "\"Per\" or \"a causa di\" = because of." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Where is [the check-in] for the Madrid flight?", sentence: "Dov'è ___ per il volo per Madrid?", answer: "il check-in", altAnswers: ["l'accettazione"], explanation: "Italians mostly say \"il check-in\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [a window seat].", sentence: "Ho ___.", answer: "un posto al finestrino", altAnswers: ["il posto al finestrino"], explanation: "\"Al finestrino\" = by the window." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train [is arriving] at platform 6.", sentence: "Il treno ___ al binario 6.", answer: "è in arrivo", explanation: "\"In arrivo\" = arriving." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you have to] validate the ticket?", sentence: "___ convalidare il biglietto?", answer: "Bisogna", altAnswers: ["Si deve"], explanation: "\"Bisogna\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: Do I have to change in Bologna?", words: ["Devo", "cambiare", "a", "Bologna?"], translation: "Do I have to change in Bologna?", explanation: "\"A\" + city." },
      { type: "multiple-choice", question: "You hear \"Il treno è in partenza\". What should you do?", options: ["Get on now: it's leaving.", "Wait: it's arriving.", "Go home: it's cancelled.", "Change platform."], correctIndex: 0, explanation: "\"In partenza\" = departing." },
      { type: "listen-choose", audio: "Il treno per Lecce viaggia con venticinque minuti di ritardo.", question: "How late is the Lecce train?", options: ["25 minutes", "35 minutes", "15 minutes", "it's on time"], correctIndex: 0, explanation: "\"Venticinque\" = 25." },
      { type: "dictation", audio: "Il volo per Palermo è stato cancellato.", explanation: "\"È stato cancellato\"." },
      { type: "speak", text: "Scusi, devo cambiare a Bologna o il treno va diretto a Lecce?", prompt: "Ask in Italian: Excuse me, do I have to change in Bologna or does the train go straight to Lecce?", tip: "\"Diretto\": di-RET-to, double t.", explanation: "\"Devo\" + infinitive." },
    ],
  },
  {
    slug: "a2-travel-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Offices",
    summary: "More short exchanges at the bank, the post office and the comune.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Bank, post office, comune",
        body: [
          "Polite openers: \"Buongiorno, vorrei ...\", \"avrei bisogno di ...\". Clerks answer with Lei commands and \"bisogna\": \"Compili il modulo\", \"Bisogna prendere il numero\".",
        ],
        examples: [
          { es: "Buongiorno, avrei bisogno di un certificato di residenza.", en: "Good morning, I'd need a certificate of residence." },
          { es: "Compili questo modulo e torni allo sportello.", en: "Fill in this form and come back to the counter." },
          { es: "Quanto costa spedire una lettera in Australia?", en: "How much does it cost to send a letter to Australia?" },
          { es: "Ho perso il bancomat, devo bloccarlo.", en: "I've lost my debit card, I need to block it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fill in this form and come back to the counter. (formal)", answer: "Compili questo modulo e torni allo sportello.", explanation: "Lei commands \"compili\", \"torni\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've lost my debit card, I need to block it.", answer: "Ho perso il bancomat, devo bloccarlo.", altAnswers: ["Ho perso il bancomat, lo devo bloccare.", "Ho perso la carta, devo bloccarla."], explanation: "\"Lo\" attached to the infinitive or before \"devo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Good morning, I'd need a certificate of residence.", answer: "Buongiorno, avrei bisogno di un certificato di residenza.", altAnswers: ["Buongiorno, mi servirebbe un certificato di residenza."], explanation: "\"Avrei bisogno di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much does it cost to send a letter to Australia?", answer: "Quanto costa spedire una lettera in Australia?", altAnswers: ["Quanto costa mandare una lettera in Australia?"], explanation: "\"Spedire\" + \"in\" + country." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time does the office open?", answer: "A che ora apre l'ufficio?", explanation: "\"Aprire\" = to open." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you need an appointment?", answer: "Bisogna prendere un appuntamento?", altAnswers: ["Serve un appuntamento?", "Ci vuole un appuntamento?", "Si deve prendere un appuntamento?"], explanation: "\"Bisogna\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to withdraw two hundred euros.", answer: "Vorrei prelevare duecento euro.", altAnswers: ["Vorrei ritirare duecento euro."], explanation: "\"Prelevare\" = to withdraw." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My tax code is on the health card.", answer: "Il mio codice fiscale è sulla tessera sanitaria.", explanation: "The tax code is printed on the health card." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Go to [counter] number 4. (formal)", sentence: "Vada allo ___ numero 4.", answer: "sportello", explanation: "\"Lo sportello\" = counter, window." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd need] a stamp for Canada.", sentence: "___ un francobollo per il Canada.", answer: "Mi servirebbe", altAnswers: ["Avrei bisogno di"], explanation: "Conditional request." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Sign] here, please. (formal)", sentence: "___ qui, per favore.", answer: "Firmi", explanation: "Lei command of \"firmare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The office is closed [on Saturdays].", sentence: "L'ufficio è chiuso ___.", answer: "il sabato", explanation: "\"Il sabato\" = on Saturdays." },
      { type: "word-order", prompt: "Put the words in order to say: What time does the office open?", words: ["A", "che", "ora", "apre", "l'ufficio?"], translation: "What time does the office open?", explanation: "\"A che ora\" + verb + subject." },
      { type: "multiple-choice", question: "The clerk says \"Torni con la marca da bollo\". What do you need?", options: ["a revenue stamp", "a postage stamp only", "a bank card", "a photo"], correctIndex: 0, explanation: "\"La marca da bollo\" is a tax stamp for official documents." },
      { type: "listen-choose", audio: "Mi dispiace, l'ufficio chiude alle dodici e trenta.", question: "When does the office close?", options: ["12:30", "2:30", "12:13", "1:30"], correctIndex: 0, explanation: "\"Le dodici e trenta\" = 12:30." },
      { type: "dictation", audio: "Compili il modulo e firmi qui, per favore.", explanation: "Lei commands." },
      { type: "speak", text: "Buongiorno, ho perso il bancomat. Potrebbe bloccarlo, per favore?", prompt: "Say it in Italian at the bank: Good morning, I've lost my debit card. Could you block it, please?", tip: "\"Bancomat\": stress on the first syllable, BAN-co-mat.", explanation: "Passato prossimo + \"potrebbe\"." },
    ],
  },
  {
    slug: "a2-travel-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Complaints",
    summary: "Polite complaints in twelve situations: hotel, restaurant, train, shop and office.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Complain politely",
        body: [
          "Say what's wrong (\"non funziona\", \"è sporco\", \"manca\", \"ho ordinato ... ma\"), then ask with the conditional: \"potrebbe\", \"sarebbe possibile\", \"vorrei\". Start with \"Mi scusi\".",
        ],
        examples: [
          { es: "Mi scusi, ho ordinato un'acqua frizzante, non naturale.", en: "Excuse me, I ordered sparkling water, not still." },
          { es: "Il lenzuolo è sporco. Potrebbe cambiarlo?", en: "The sheet is dirty. Could you change it?" },
          { es: "Questa maglietta ha un buco. Vorrei cambiarla.", en: "This T-shirt has a hole. I'd like to exchange it." },
          { es: "Aspettiamo da quaranta minuti.", en: "We've been waiting for forty minutes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, I ordered sparkling water, not still.", answer: "Mi scusi, ho ordinato un'acqua frizzante, non naturale.", altAnswers: ["Scusi, ho ordinato un'acqua frizzante, non naturale.", "Mi scusi, ho ordinato acqua frizzante, non naturale."], explanation: "\"Frizzante\" vs \"naturale\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've been waiting for forty minutes.", answer: "Aspettiamo da quaranta minuti.", altAnswers: ["Stiamo aspettando da quaranta minuti."], explanation: "Present + \"da\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sheet is dirty. Could you change it? (formal)", answer: "Il lenzuolo è sporco. Potrebbe cambiarlo?", altAnswers: ["Il lenzuolo è sporco. Lo potrebbe cambiare?"], explanation: "\"Lo\" = the sheet." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This T-shirt has a hole. I'd like to exchange it.", answer: "Questa maglietta ha un buco. Vorrei cambiarla.", altAnswers: ["Questa maglietta ha un buco. La vorrei cambiare."], explanation: "\"La\" = the T-shirt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pasta is cold.", answer: "La pasta è fredda.", explanation: "\"Fredda\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, there's a mistake in the bill. (formal)", answer: "Mi scusi, c'è un errore nel conto.", altAnswers: ["Scusi, c'è un errore nel conto.", "Mi scusi, nel conto c'è un errore."], explanation: "\"C'è\" + singular; \"il conto\" = the bill." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The taxi hasn't arrived yet.", answer: "Il taxi non è ancora arrivato.", explanation: "\"Non ... ancora\" = not yet." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would it be possible to speak to the manager?", answer: "Sarebbe possibile parlare con il direttore?", altAnswers: ["Sarebbe possibile parlare col direttore?", "Potrei parlare con il direttore?", "Sarebbe possibile parlare con il responsabile?"], explanation: "\"Sarebbe possibile\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shower [doesn't work].", sentence: "La doccia ___.", answer: "non funziona", explanation: "\"Non funziona\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There's no] toilet paper.", sentence: "___ la carta igienica.", answer: "Manca", explanation: "Singular → \"manca\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I paid but [I didn't get] the receipt.", sentence: "Ho pagato ma ___ lo scontrino.", answer: "non ho ricevuto", altAnswers: ["non mi hanno dato"], explanation: "Passato prossimo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you turn down] the music? (formal)", sentence: "___ la musica?", answer: "Potrebbe abbassare", altAnswers: ["Può abbassare"], explanation: "\"Potrebbe\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: The taxi hasn't arrived yet.", words: ["Il", "taxi", "non", "è", "ancora", "arrivato."], translation: "The taxi hasn't arrived yet.", explanation: "\"Ancora\" between auxiliary and participle." },
      { type: "multiple-choice", question: "Your food is cold. What's the politest thing to say?", options: ["Mi scusi, il piatto è freddo. Potrebbe scaldarlo?", "Il piatto è freddo!", "Scaldalo!", "Voglio un altro piatto."], correctIndex: 0, explanation: "\"Mi scusi\" + conditional request." },
      { type: "listen-choose", audio: "Mi scusi, aspettiamo il conto da mezz'ora.", question: "What's the problem?", options: ["They've been waiting for the bill for half an hour.", "The bill is wrong.", "They want to order.", "The food is late."], correctIndex: 0, explanation: "\"Il conto\" = the bill." },
      { type: "dictation", audio: "Mi scusi, il riscaldamento non funziona.", explanation: "\"Non funziona\"." },
      { type: "speak", text: "Mi scusi, la camera è sporca e manca l'acqua calda. Sarebbe possibile cambiarla?", prompt: "Complain politely in Italian: Excuse me, the room is dirty and there's no hot water. Would it be possible to change it?", tip: "\"Sporca\": SPOR-ca, hard c.", explanation: "Problem + \"sarebbe possibile\"." },
    ],
  },
];
