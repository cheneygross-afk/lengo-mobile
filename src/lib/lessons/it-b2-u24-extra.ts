// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u24-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 24 Extra Practice: Law and Rights.
// Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U24_EXTRA: Lesson[] = [
  {
    slug: "b2-law-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Contracts",
    summary: "Fresh contract texts: phone and gym contracts, cancellation, renewal and small print.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The small print",
        body: [
          "Everyday contracts: \"l'abbonamento\" (subscription, gym or phone plan), \"il vincolo\" (minimum term, lock-in), \"la penale\" (penalty), \"disdire\" (to cancel; past participle \"disdetto\"), \"le condizioni generali\", \"le clausole vessatorie\" (unfair terms, which must be signed separately).",
        ],
        examples: [
          { es: "L'abbonamento ha un vincolo di dodici mesi.", en: "The subscription has a twelve-month minimum term." },
          { es: "Se disdici prima, paghi una penale.", en: "If you cancel early, you pay a penalty." },
          { es: "Ho disdetto l'abbonamento alla palestra.", en: "I've canceled my gym membership." },
          { es: "Le clausole vessatorie vanno firmate a parte.", en: "Unfair terms must be signed separately." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've canceled my gym membership.", answer: "Ho disdetto l'abbonamento alla palestra.", altAnswers: ["Ho disdetto l'abbonamento in palestra.", "Ho cancellato l'abbonamento alla palestra."], explanation: "\"Disdire\" → \"disdetto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you cancel early, you pay a penalty. (to a friend)", answer: "Se disdici prima, paghi una penale.", altAnswers: ["Se disdici in anticipo, paghi una penale."], explanation: "\"Disdici\": like \"dici\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The subscription has a twelve-month minimum term.", answer: "L'abbonamento ha un vincolo di dodici mesi.", altAnswers: ["L'abbonamento ha un vincolo di 12 mesi."], explanation: "\"Il vincolo\" = lock-in." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unfair terms must be signed separately.", answer: "Le clausole vessatorie vanno firmate a parte.", altAnswers: ["Le clausole vessatorie devono essere firmate a parte.", "Le clausole vessatorie vanno firmate separatamente."], explanation: "\"Vanno firmate\": obligation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The contract can be canceled at any time.", answer: "Il contratto può essere disdetto in qualsiasi momento.", altAnswers: ["Il contratto si può disdire in qualsiasi momento.", "Il contratto può essere disdetto in qualunque momento."], explanation: "Passive with \"potere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't read the general conditions.", answer: "Non ho letto le condizioni generali.", explanation: "\"Le condizioni generali\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The price will increase by 2 euros a month.", answer: "Il prezzo aumenterà di 2 euro al mese.", altAnswers: ["Il prezzo aumenterà di due euro al mese.", "Il canone aumenterà di 2 euro al mese."], explanation: "\"Di\" for the amount of change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in formal style.", source: "Should the customer withdraw, no penalty is due.", answer: "Qualora il cliente receda, non è dovuta alcuna penale.", altAnswers: ["Qualora il cliente receda, non è dovuta nessuna penale.", "Nel caso in cui il cliente receda, non è dovuta alcuna penale."], explanation: "\"Qualora\" + \"receda\"; \"alcuna\" after a negative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The offer expires on June 30.", answer: "L'offerta scade il 30 giugno.", explanation: "\"Scadere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you read the clause about renewal? (to a friend)", answer: "Hai letto la clausola sul rinnovo?", altAnswers: ["Hai letto la clausola del rinnovo?", "Hai letto la clausola relativa al rinnovo?"], explanation: "\"Il rinnovo\" = renewal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You must [cancel] in writing.", sentence: "Bisogna ___ per iscritto.", answer: "disdire", explanation: "\"Disdire\" = to cancel a contract." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's [a penalty] of 50 euros.", sentence: "C'è ___ di 50 euro.", answer: "una penale", explanation: "\"La penale\" = penalty." },
      { type: "word-order", prompt: "Put the words in order to say: If you cancel early, you pay a penalty.", words: ["Se disdici", "prima,", "paghi", "una penale."], translation: "If you cancel early, you pay a penalty.", explanation: "Real condition: present + present." },
      { type: "multiple-choice", question: "What does \"il vincolo di 24 mesi\" mean in a phone contract?", options: ["You must stay with the company for 24 months.", "You get 24 months free.", "The phone is guaranteed for 24 months.", "The price is fixed for 24 months."], correctIndex: 0, explanation: "\"Vincolo\" = tie, minimum term." },
      { type: "listen-choose", audio: "Ho disdetto l'abbonamento alla palestra.", question: "What did the speaker do?", options: ["canceled a gym membership", "joined a gym", "renewed a gym membership", "paid a gym penalty"], correctIndex: 0, explanation: "\"Disdire\" = to cancel." },
      { type: "dictation", audio: "L'abbonamento ha un vincolo di dodici mesi.", explanation: "\"Il vincolo\" = minimum term." },
      { type: "speak", text: "Vorrei disdire l'abbonamento: quanto devo pagare di penale?", prompt: "Call the company: I'd like to cancel my subscription: how much is the penalty?", tip: "di-SDI-re: stress on sdi.", explanation: "\"Di penale\" = as a penalty." },
    ],
  },
  {
    slug: "b2-law-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Consumer Rights",
    summary: "Fresh texts on returns, refunds, guarantees and complaints to companies.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Customer service",
        body: [
          "Customer service language: \"il servizio clienti\", \"aprire una pratica\" (open a case), \"il numero della pratica\", \"il corriere\" (courier), \"il pacco\" (package), \"danneggiato\" (damaged), \"non conforme\" (not as described), \"l'etichetta di reso\" (return label).",
        ],
        examples: [
          { es: "Il pacco è arrivato danneggiato.", en: "The package arrived damaged." },
          { es: "Ho aperto una pratica con il servizio clienti.", en: "I've opened a case with customer service." },
          { es: "Il prodotto non è conforme alla descrizione.", en: "The product is not as described." },
          { es: "Stampi l'etichetta di reso e la attacchi al pacco.", en: "Print the return label and stick it on the package." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The package arrived damaged.", answer: "Il pacco è arrivato danneggiato.", explanation: "\"Danneggiato\" agrees with \"il pacco\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The product is not as described.", answer: "Il prodotto non è conforme alla descrizione.", altAnswers: ["Il prodotto non corrisponde alla descrizione."], explanation: "\"Conforme a\" = in line with." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've opened a case with customer service.", answer: "Ho aperto una pratica con il servizio clienti.", altAnswers: ["Ho aperto una pratica col servizio clienti."], explanation: "\"Aprire una pratica\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in a formal instruction.", source: "Print the return label and stick it on the package.", answer: "Stampi l'etichetta di reso e la attacchi al pacco.", altAnswers: ["Stampare l'etichetta di reso e attaccarla al pacco.", "Stampa l'etichetta di reso e attaccala al pacco."], explanation: "Formal imperative (\"Lei\"): \"stampi\", \"attacchi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The courier will collect the package tomorrow.", answer: "Il corriere ritirerà il pacco domani.", altAnswers: ["Domani il corriere ritirerà il pacco.", "Il corriere passa a ritirare il pacco domani."], explanation: "\"Ritirare\" = to collect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't received the refund yet.", answer: "Non ho ancora ricevuto il rimborso.", explanation: "\"Non ... ancora\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the case number?", answer: "Qual è il numero della pratica?", explanation: "\"Qual è\" with no apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a replacement, not a voucher.", answer: "Vorrei la sostituzione, non un buono.", altAnswers: ["Vorrei una sostituzione, non un buono."], explanation: "\"La sostituzione\" = replacement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they don't reply, I'll contact a consumer association.", answer: "Se non rispondono, mi rivolgerò a un'associazione di consumatori.", altAnswers: ["Se non rispondono, contatterò un'associazione di consumatori.", "Se non rispondono, mi rivolgo a un'associazione dei consumatori."], explanation: "\"Rivolgersi a\" = to turn to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guarantee lasts two years.", answer: "La garanzia dura due anni.", explanation: "Two-year legal guarantee." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The item was [damaged] during shipping.", sentence: "L'articolo è stato ___ durante la spedizione.", answer: "danneggiato", explanation: "Passive participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I bought it online, so I have [the right of withdrawal].", sentence: "L'ho comprato online, quindi ho ___.", answer: "il diritto di recesso", explanation: "14 days for online purchases." },
      { type: "word-order", prompt: "Put the words in order to say: The courier will collect the package tomorrow.", words: ["Il corriere", "ritirerà", "il pacco", "domani."], translation: "The courier will collect the package tomorrow.", explanation: "Future for a plan." },
      { type: "multiple-choice", question: "Your online order arrived in the wrong color. Which word describes it?", options: ["non conforme", "scaduto", "vessatorio", "notificato"], correctIndex: 0, explanation: "\"Non conforme\" = not as ordered." },
      { type: "listen-choose", audio: "Il pacco è arrivato danneggiato.", question: "What's the problem?", options: ["The package arrived damaged.", "The package didn't arrive.", "The package arrived late.", "The package was opened."], correctIndex: 0, explanation: "\"Danneggiato\" = damaged." },
      { type: "dictation", audio: "Ho aperto una pratica e aspetto il rimborso.", explanation: "\"Una pratica\" = a case." },
      { type: "speak", text: "Buongiorno, il pacco è arrivato danneggiato e vorrei la sostituzione.", prompt: "Call customer service: Good morning, the package arrived damaged and I'd like a replacement.", tip: "dan-neg-GIA-to: two double consonants.", explanation: "Problem + request." },
    ],
  },
  {
    slug: "b2-law-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Rights at Work",
    summary: "Fresh texts about leave, sick days, pay stubs, contracts and resignations.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At the HR office",
        body: [
          "Workplace vocabulary: \"l'ufficio del personale\" (HR), \"lo stipendio\" (salary), \"lordo\" / \"netto\" (gross / net), \"gli straordinari\" (overtime), \"lo smart working\" (remote work, an Italian coinage), \"il sindacato\" (labor union), \"lo sciopero\" (strike).",
        ],
        examples: [
          { es: "Lo stipendio netto è di 1.600 euro al mese.", en: "The net salary is 1,600 euros a month." },
          { es: "Gli straordinari vengono pagati a parte.", en: "Overtime is paid separately." },
          { es: "Lavoro in smart working due giorni a settimana.", en: "I work remotely two days a week." },
          { es: "Domani c'è lo sciopero dei trasporti.", en: "Tomorrow there's a transportation strike." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Overtime is paid separately.", answer: "Gli straordinari vengono pagati a parte.", altAnswers: ["Gli straordinari sono pagati a parte.", "Gli straordinari vengono pagati separatamente."], explanation: "\"Gli straordinari\" = overtime hours." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work remotely two days a week.", answer: "Lavoro in smart working due giorni a settimana.", altAnswers: ["Lavoro da casa due giorni a settimana.", "Lavoro in smart working due giorni alla settimana."], explanation: "\"In smart working\": Italian usage." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The net salary is 1,600 euros a month.", answer: "Lo stipendio netto è di 1.600 euro al mese.", altAnswers: ["Lo stipendio netto è 1.600 euro al mese."], explanation: "\"Lo stipendio\", \"netto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow there's a transportation strike.", answer: "Domani c'è lo sciopero dei trasporti.", altAnswers: ["Domani c'è uno sciopero dei trasporti."], explanation: "\"Lo sciopero\": s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked HR for my pay stub.", answer: "Ho chiesto la busta paga all'ufficio del personale.", altAnswers: ["Ho chiesto all'ufficio del personale la busta paga."], explanation: "\"Chiedere qualcosa a qualcuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm off sick until Friday.", answer: "Sono in malattia fino a venerdì.", explanation: "\"In malattia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She resigned because she found a better job.", answer: "Si è dimessa perché ha trovato un lavoro migliore.", altAnswers: ["Ha dato le dimissioni perché ha trovato un lavoro migliore."], explanation: "\"Dimettersi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to take two days' leave.", answer: "Vorrei prendere due giorni di ferie.", explanation: "\"Ferie\" for paid leave." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they don't pay overtime, I'll talk to the union.", answer: "Se non pagano gli straordinari, parlerò con il sindacato.", altAnswers: ["Se non pagano gli straordinari, mi rivolgerò al sindacato.", "Se non pagano gli straordinari, parlo con il sindacato."], explanation: "Real condition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The gross salary is much higher than the net one.", answer: "Lo stipendio lordo è molto più alto di quello netto.", altAnswers: ["Il lordo è molto più alto del netto."], explanation: "\"Quello\" replaces \"lo stipendio\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I did ten hours of [overtime].", sentence: "Ho fatto dieci ore di ___.", answer: "straordinario", altAnswers: ["straordinari"], explanation: "\"Fare straordinario\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The workers [are on strike].", sentence: "I lavoratori ___.", answer: "sono in sciopero", altAnswers: ["scioperano", "fanno sciopero"], explanation: "\"Essere in sciopero\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'd like to take two days' leave.", words: ["Vorrei", "prendere", "due giorni", "di ferie."], translation: "I'd like to take two days' leave.", explanation: "\"Giorni di ferie\"." },
      { type: "multiple-choice", question: "\"Lo stipendio lordo\" is ...", options: ["the gross salary", "the net salary", "the overtime pay", "the bonus"], correctIndex: 0, explanation: "\"Lordo\" = gross, \"netto\" = net." },
      { type: "listen-choose", audio: "Domani c'è lo sciopero dei trasporti.", question: "What's happening tomorrow?", options: ["a transportation strike", "a train schedule change", "a union meeting", "free public transport"], correctIndex: 0, explanation: "\"Lo sciopero\" = strike." },
      { type: "dictation", audio: "Gli straordinari vengono pagati a parte.", explanation: "\"Vengono pagati\": passive." },
      { type: "speak", text: "Vorrei prendere due giorni di ferie la settimana prossima, se possibile.", prompt: "Ask your manager: I'd like to take two days' leave next week, if possible.", tip: "FE-rie: two syllables.", explanation: "\"Vorrei\" for a polite request." },
    ],
  },
];
