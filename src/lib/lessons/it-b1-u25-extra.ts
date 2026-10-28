// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u25-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 25 Extra Practice: Housing. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md).
export const IT_B1_U25_EXTRA: Lesson[] = [
  {
    slug: "b1-housing-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Ads and Viewings",
    summary: "Fresh ads and viewing dialogues: rooms, costs, rules and first impressions.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A viewing in Napoli",
        body: [
          "Ad: \"Vomero, bilocale semiarredato, 50 mq, secondo piano con ascensore, 650 euro più spese, classe D\". At the viewing Jess asks the agent: \"Le spese quanto sono?\", \"Il riscaldamento è autonomo?\", \"Quando sarebbe libero?\".",
        ],
        examples: [
          { es: "Le spese quanto sono, più o meno?", en: "Roughly how much are the charges?" },
          { es: "Il riscaldamento è autonomo o centralizzato?", en: "Is the heating independent or shared?" },
          { es: "Quando sarebbe libero l'appartamento?", en: "When would the flat be available?" },
          { es: "La cucina è piccola, però il balcone è bellissimo.", en: "The kitchen is small, but the balcony is lovely." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When would the flat be available?", answer: "Quando sarebbe libero l'appartamento?", altAnswers: ["Quando sarebbe disponibile l'appartamento?", "L'appartamento quando sarebbe libero?"], explanation: "Conditional for a careful question." },
          { type: "listen-choose", audio: "Il riscaldamento è centralizzato ed è compreso nelle spese.", question: "What about the heating?", options: ["It's shared and included in the charges.", "It's independent and extra.", "There's no heating.", "It's paid separately every month."], correctIndex: 0, explanation: "\"Centralizzato\" + \"compreso nelle spese\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "650 euros plus charges.", answer: "650 euro più spese.", altAnswers: ["650 euro più le spese.", "Seicentocinquanta euro più spese."], explanation: "\"Più spese\" = plus charges." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the heating independent?", answer: "Il riscaldamento è autonomo?", altAnswers: ["L'appartamento è termoautonomo?", "Il riscaldamento è indipendente?"], explanation: "\"Autonomo\" = own boiler." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The kitchen is small, but the balcony is lovely.", answer: "La cucina è piccola, però il balcone è bellissimo.", altAnswers: ["La cucina è piccola, ma il balcone è bellissimo.", "La cucina è piccola, ma il balcone è molto bello.", "La cucina è piccola, però il balcone è molto bello."], explanation: "\"Però\" or \"ma\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there a washing machine?", answer: "C'è la lavatrice?", altAnswers: ["C'è una lavatrice?"], explanation: "\"La lavatrice\" = washing machine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to see it again with my partner.", answer: "Vorrei rivederlo con il mio compagno.", altAnswers: ["Vorrei rivederlo con la mia compagna.", "Vorrei vederlo di nuovo con il mio compagno.", "Vorrei vederlo di nuovo con la mia compagna.", "Vorrei rivederlo col mio compagno."], explanation: "\"Ri-\" = again; \"compagno / compagna\" = partner." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The flat faces the courtyard, so it's quiet.", answer: "L'appartamento dà sul cortile, quindi è tranquillo.", altAnswers: ["L'appartamento si affaccia sul cortile, quindi è tranquillo.", "L'appartamento dà sul cortile, perciò è tranquillo."], explanation: "\"Dare su\" = to face onto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are there many students in the building?", answer: "Ci sono molti studenti nel palazzo?", altAnswers: ["Nel palazzo ci sono molti studenti?", "Ci sono tanti studenti nel palazzo?"], explanation: "\"Il palazzo\" = the block of flats." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Roughly] how much are the bills?", sentence: "___ quanto sono le bollette?", answer: "Più o meno", altAnswers: ["Circa", "All'incirca"], explanation: "\"Più o meno\" = roughly." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The flat is [on the fifth floor without a lift].", sentence: "L'appartamento è ___.", answer: "al quinto piano senza ascensore", explanation: "\"Al\" + ordinal + \"piano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can you] put up shelves?", sentence: "___ montare delle mensole?", answer: "Si possono", altAnswers: ["Posso", "Si può"], explanation: "Si passivante with plural \"mensole\": \"si possono\"." },
      { type: "word-order", prompt: "Put the words in order to say: The flat is available from March.", words: ["L'appartamento", "è", "libero", "da", "marzo."], translation: "The flat is available from March.", explanation: "\"Da\" + month = from." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "semiarredato", right: "part-furnished" }, { left: "più spese", right: "plus charges" }, { left: "la lavatrice", right: "washing machine" }, { left: "dà sul cortile", right: "faces the courtyard" }, { left: "libero da subito", right: "available now" }], explanation: "Ad and viewing vocabulary." },
      { type: "multiple-choice", question: "The agent says \"È un affare\". What does he mean?", options: ["It's a bargain.", "It's an affair.", "It's business.", "It's done."], correctIndex: 0, explanation: "\"Un affare\" = a good deal." },
      { type: "dictation", audio: "Vomero, bilocale semiarredato al secondo piano.", explanation: "\"Semiarredato\": part-furnished." },
      { type: "speak", text: "L'appartamento mi piace, ma vorrei sapere quanto sono le spese.", prompt: "Say it in Italian: I like the flat, but I'd like to know how much the charges are.", tip: "\"Vorrei sapere\": a soft way into a question.", explanation: "Indirect question after \"vorrei sapere\"." },
    ],
  },
  {
    slug: "b1-housing-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Contracts",
    summary: "Fresh contract clauses and conversations about deposits, notice, registration and utilities.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Clauses",
        body: [
          "Contract clauses use \"il conduttore\" (the tenant) and \"il locatore\" (the landlord), the future for obligations (\"Il conduttore verserà ...\") and \"è fatto divieto di\" (it is forbidden to). In conversation you'll still say \"l'inquilino\" and \"il proprietario\".",
        ],
        examples: [
          { es: "Il conduttore verserà il canone entro il giorno 5 di ogni mese.", en: "The tenant shall pay the rent by the 5th of each month." },
          { es: "È fatto divieto di subaffittare l'immobile.", en: "Subletting the property is forbidden." },
          { es: "Il locatore restituirà il deposito alla riconsegna delle chiavi.", en: "The landlord shall return the deposit when the keys are handed back." },
          { es: "Le spese di registrazione sono divise a metà.", en: "The registration costs are split in half." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Subletting is forbidden.", answer: "È vietato subaffittare.", altAnswers: ["È fatto divieto di subaffittare.", "Non si può subaffittare.", "Il subaffitto è vietato."], explanation: "\"Subaffittare\" = to sublet." },
          { type: "listen-choose", audio: "Le spese di registrazione sono divise a metà.", question: "Who pays the registration costs?", options: ["landlord and tenant, half each", "the tenant only", "the landlord only", "the agency"], correctIndex: 0, explanation: "\"A metà\" = in half." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tenant shall pay the rent by the 5th.", answer: "Il conduttore verserà il canone entro il 5.", altAnswers: ["L'inquilino pagherà l'affitto entro il 5.", "Il conduttore pagherà il canone entro il 5.", "L'inquilino verserà il canone entro il 5."], explanation: "Future for contractual obligations." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The deposit will be returned with the keys.", answer: "La caparra verrà restituita alla riconsegna delle chiavi.", altAnswers: ["La caparra sarà restituita alla riconsegna delle chiavi.", "Il deposito verrà restituito alla riconsegna delle chiavi.", "La caparra verrà restituita con le chiavi."], explanation: "Future passive: \"verrà restituita\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who pays for the registration?", answer: "Chi paga la registrazione?", altAnswers: ["Chi paga le spese di registrazione?", "Chi paga per la registrazione?"], explanation: "\"Pagare\" + direct object." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to leave the flat in June.", answer: "Voglio lasciare l'appartamento a giugno.", altAnswers: ["Vorrei lasciare l'appartamento a giugno.", "Voglio lasciare l'appartamento in giugno."], explanation: "\"Lasciare\" = to leave (a place)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When must I send the notice?", answer: "Quando devo mandare la disdetta?", altAnswers: ["Quando devo inviare la disdetta?", "Entro quando devo mandare la disdetta?", "Entro quando devo inviare la disdetta?"], explanation: "\"La disdetta\" = notice of termination." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rent can't go up during the contract.", answer: "L'affitto non può aumentare durante il contratto.", altAnswers: ["Il canone non può aumentare durante il contratto.", "L'affitto non può salire durante il contratto."], explanation: "\"Aumentare\" = to go up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had the electricity transferred into my name.", answer: "Ho fatto la voltura della luce.", altAnswers: ["Ho intestato a me la luce.", "Ho fatto intestare a me la luce.", "Ho fatto la voltura dell'elettricità."], explanation: "\"Fare la voltura\" = to transfer a utility account." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The landlord] lives in Milan.", sentence: "___ abita a Milano.", answer: "Il proprietario", altAnswers: ["La proprietaria", "Il locatore", "Il padrone di casa"], explanation: "\"Il proprietario\" in speech, \"il locatore\" in contracts." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The contract [lasts] four years.", sentence: "Il contratto ___ quattro anni.", answer: "dura", explanation: "\"Durare\" = to last." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The landlord wants me [to pay] in cash.", sentence: "Il proprietario vuole che io ___ in contanti.", answer: "paghi", explanation: "\"Volere che\" + subjunctive. (Always ask for a receipt.)" },
      { type: "word-order", prompt: "Put the words in order to say: The contract must be signed by both.", words: ["Il", "contratto", "va", "firmato", "da", "entrambi."], translation: "The contract must be signed by both.", explanation: "\"Da\" introduces the agent." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il conduttore", right: "the tenant (legal)" }, { left: "il locatore", right: "the landlord (legal)" }, { left: "il canone", right: "the rent (formal)" }, { left: "subaffittare", right: "to sublet" }, { left: "la riconsegna", right: "the handing back" }], explanation: "Legal contract vocabulary." },
      { type: "multiple-choice", question: "The clause says \"È fatto divieto di tenere animali\". Can you keep a cat?", options: ["No.", "Yes.", "Only with a lead.", "Only in the courtyard."], correctIndex: 0, explanation: "\"È fatto divieto di\" = it is forbidden to." },
      { type: "dictation", audio: "Il conduttore verserà il canone entro il giorno cinque.", explanation: "\"Verserà\": future of \"versare\"." },
      { type: "speak", text: "Vorrei sapere entro quando devo mandare la disdetta e quando mi verrà restituita la caparra.", prompt: "Ask the landlord: I'd like to know by when I must send the notice and when the deposit will be returned to me.", tip: "\"Restituita\": re-sti-TU-i-ta.", explanation: "Two indirect questions after \"vorrei sapere\"." },
    ],
  },
  {
    slug: "b1-housing-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Complaints",
    summary: "Fresh situations: leaks, smells, parking, broken lifts and the right tone for each complaint.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Fact, effect, request",
        body: [
          "The same three steps work for any complaint: what is happening (present + \"da\"), what it causes (\"il che\" = which, \"per cui\" = so), what you want (\"Le chiedo di\", \"La prego di\" + infinitive). Neighbours you know get \"tu\" and a softer tone.",
        ],
        examples: [
          { es: "Da ieri c'è una macchia d'acqua sul soffitto, il che mi preoccupa.", en: "Since yesterday there's a water stain on the ceiling, which worries me." },
          { es: "La tua macchina blocca il mio posto auto, per cui non riesco a uscire.", en: "Your car is blocking my parking space, so I can't get out." },
          { es: "Le chiedo di mandare qualcuno a controllare.", en: "I'm asking you to send someone to check." },
          { es: "Scusa, potresti spostare la macchina?", en: "Sorry, could you move your car?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry, could you move your car? (to a neighbour you know)", answer: "Scusa, potresti spostare la macchina?", altAnswers: ["Scusa, potresti spostare la tua macchina?", "Scusa, puoi spostare la macchina?", "Scusa, mi sposti la macchina?"], explanation: "\"Tu\" form of the conditional: \"potresti\"." },
          { type: "listen-choose", audio: "Da ieri c'è una macchia d'acqua sul soffitto, il che mi preoccupa.", question: "What's the problem?", options: ["a water stain on the ceiling", "a leak from the tap", "a broken window", "a stain on the floor"], correctIndex: 0, explanation: "\"Soffitto\" = ceiling." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Since yesterday there's a strange smell on the stairs.", answer: "Da ieri c'è uno strano odore sulle scale.", altAnswers: ["Da ieri c'è un odore strano sulle scale.", "Da ieri sulle scale c'è uno strano odore.", "Da ieri sulle scale c'è un odore strano."], explanation: "\"Uno strano\": \"uno\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your car is blocking my space. (to a neighbour you know)", answer: "La tua macchina blocca il mio posto.", altAnswers: ["La tua macchina mi blocca il posto.", "La tua auto blocca il mio posto.", "La tua macchina sta bloccando il mio posto."], explanation: "Present for what's happening now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm asking you to send someone to check. (formal)", answer: "Le chiedo di mandare qualcuno a controllare.", altAnswers: ["Le chiedo di mandare qualcuno per controllare.", "La prego di mandare qualcuno a controllare."], explanation: "\"Chiedere a qualcuno di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lift has been out of order for a week.", answer: "L'ascensore è fuori servizio da una settimana.", altAnswers: ["L'ascensore è guasto da una settimana.", "L'ascensore non funziona da una settimana.", "Da una settimana l'ascensore è fuori servizio."], explanation: "\"Fuori servizio\" = out of order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother can't climb the stairs.", answer: "Mia nonna non riesce a fare le scale.", altAnswers: ["Mia nonna non può fare le scale.", "Mia nonna non riesce a salire le scale."], explanation: "No article before \"nonna\" with \"mia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Water is coming in from the ceiling.", answer: "Entra acqua dal soffitto.", altAnswers: ["Sta entrando acqua dal soffitto.", "Entra dell'acqua dal soffitto.", "Viene giù acqua dal soffitto."], explanation: "Subject after the verb: \"entra acqua\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry, I didn't know it bothered you. (to a neighbour you know)", answer: "Scusa, non sapevo di darti fastidio.", altAnswers: ["Mi dispiace, non sapevo di darti fastidio.", "Scusami, non sapevo di darti fastidio."], explanation: "Same subject: \"sapere di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The dog barks all night, [so] I can't sleep.", sentence: "Il cane abbaia tutta la notte, ___ non riesco a dormire.", answer: "per cui", altAnswers: ["quindi", "perciò", "così"], explanation: "\"Per cui\" = so, which is why." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Please] keep the main door closed. (formal)", sentence: "___ di tenere il portone chiuso.", answer: "La prego", altAnswers: ["Le chiedo"], explanation: "\"La prego di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's the third time [this has happened].", sentence: "È la terza volta che ___.", answer: "succede", altAnswers: ["capita"], explanation: "\"È la terza volta che\" + present." },
      { type: "word-order", prompt: "Put the words in order to say: Could you please be quieter in the evening?", words: ["Potreste", "fare", "meno", "rumore", "la", "sera?"], translation: "Could you please be quieter in the evening?", explanation: "\"Fare meno rumore\" = be quieter." },
      { type: "multiple-choice", question: "Which reply calms things down with a neighbour?", options: ["Hai ragione, scusa, non succederà più.", "Non è un problema mio.", "Fai come vuoi.", "Allora chiamo l'avvocato."], correctIndex: 0, explanation: "Acknowledge and promise: \"non succederà più\"." },
      { type: "multiple-choice", question: "\"Il che mi preoccupa\" means ...", options: ["which worries me", "who worries me", "that I worry about", "what worries him"], correctIndex: 0, explanation: "\"Il che\" refers back to the whole previous idea." },
      { type: "dictation", audio: "L'ascensore è fuori servizio da una settimana.", explanation: "\"Fuori servizio\" = out of order." },
      { type: "speak", text: "Scusa, la tua macchina blocca il mio posto auto. Potresti spostarla, per favore?", prompt: "Say it to a neighbour you know: Sorry, your car is blocking my parking space. Could you move it, please?", tip: "\"Spostarla\": the pronoun joins the infinitive.", explanation: "Fact, then a soft \"tu\" request." },
    ],
  },
];
