// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u21-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 21 Extra Practice: Science and
// Technology. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U21_EXTRA: Lesson[] = [
  {
    slug: "b2-science-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Science",
    summary: "Fresh science news items to read and translate, with passives, impersonals and careful claims.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Science in brief",
        body: [
          "Short news items from a science page. Look for \"è stato\" + participle, \"si è scoperto che\", the conditional of reported claims (\"avrebbe\", \"sarebbe\") and \"sembra che\" + subjunctive. New words: \"il ghiacciaio\" (glacier), \"il fondale\" (sea bed), \"il reperto\" (find, artefact), \"lo scavo\" (excavation), \"la sonda\" (space probe).",
        ],
        examples: [
          { es: "Sui fondali della Sardegna è stata scoperta una nuova specie di spugna.", en: "A new species of sponge has been discovered on the sea bed off Sardinia." },
          { es: "Il ghiacciaio ha perso quaranta metri in dieci anni.", en: "The glacier has lost forty metres in ten years." },
          { es: "Durante gli scavi sono stati trovati reperti di epoca romana.", en: "Roman-era finds were discovered during the excavation." },
          { es: "La sonda avrebbe individuato tracce d'acqua sotto la superficie.", en: "The probe has reportedly detected traces of water beneath the surface." },
          { es: "Sembra che il fenomeno sia legato all'aumento delle temperature.", en: "The phenomenon seems to be linked to rising temperatures." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The glacier has lost forty metres in ten years.", answer: "Il ghiacciaio ha perso quaranta metri in dieci anni.", altAnswers: ["Il ghiacciaio ha perso 40 metri in dieci anni.", "Il ghiacciaio ha perso quaranta metri in 10 anni.", "Il ghiacciaio si è ritirato di quaranta metri in dieci anni."], explanation: "\"Perdere\" → \"perso\"; \"in\" for the time span." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Roman-era finds were discovered during the excavation.", answer: "Durante gli scavi sono stati trovati reperti di epoca romana.", altAnswers: ["Durante lo scavo sono stati trovati reperti di epoca romana.", "Durante gli scavi sono stati scoperti reperti di epoca romana.", "Durante gli scavi sono stati trovati reperti romani."], explanation: "Passive; \"trovati\" agrees with \"reperti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A new species has been discovered.", answer: "È stata scoperta una nuova specie.", altAnswers: ["Una nuova specie è stata scoperta.", "Si è scoperta una nuova specie."], explanation: "\"Specie\" is feminine and invariable: \"scoperta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, reporting the claim without vouching for it.", source: "The probe has detected traces of water.", answer: "La sonda avrebbe individuato tracce d'acqua.", altAnswers: ["La sonda avrebbe rilevato tracce d'acqua.", "La sonda avrebbe trovato tracce d'acqua.", "La sonda avrebbe individuato tracce di acqua."], explanation: "Past conditional = reported, unconfirmed past event." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems the phenomenon is linked to rising temperatures.", answer: "Sembra che il fenomeno sia legato all'aumento delle temperature.", altAnswers: ["Sembra che il fenomeno sia collegato all'aumento delle temperature.", "Pare che il fenomeno sia legato all'aumento delle temperature."], explanation: "\"Sembra che\" + subjunctive; rising temperatures = \"l'aumento delle temperature\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The results will be presented at a conference in Turin.", answer: "I risultati saranno presentati a un convegno a Torino.", altAnswers: ["I risultati verranno presentati a un convegno a Torino.", "I risultati saranno presentati a una conferenza a Torino.", "I risultati verranno presentati a una conferenza a Torino."], explanation: "Future passive; an academic conference is usually \"un convegno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The researchers analysed two hundred samples.", answer: "I ricercatori hanno analizzato duecento campioni.", altAnswers: ["Le ricercatrici hanno analizzato duecento campioni.", "I ricercatori hanno analizzato 200 campioni."], explanation: "\"Duecento\": one word." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It isn't yet clear what caused the collapse.", answer: "Non è ancora chiaro che cosa abbia causato il crollo.", altAnswers: ["Non è ancora chiaro cosa abbia causato il crollo.", "Non è ancora chiaro che cosa abbia provocato il crollo.", "Non è ancora chiaro cosa abbia provocato il crollo."], explanation: "An indirect question after \"non è chiaro\" takes the subjunctive in careful writing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The study involved thousands of volunteers.", answer: "Lo studio ha coinvolto migliaia di volontari.", explanation: "\"Migliaia di\" = thousands of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hypothesis was disproved.", answer: "L'ipotesi è stata smentita.", altAnswers: ["L'ipotesi è stata confutata."], explanation: "\"Smentita\" agrees with \"l'ipotesi\" (feminine)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It emerged from the study that] the sea is warmer.", sentence: "___ il mare è più caldo.", answer: "Dallo studio è emerso che", explanation: "\"Emergere da\" = to emerge from." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sample [was made up of] five hundred people.", sentence: "Il campione ___ cinquecento persone.", answer: "era composto da", altAnswers: ["era costituito da", "era formato da"], explanation: "\"Essere composto da\" = to be made up of." },
      { type: "word-order", prompt: "Put the words in order to say: The finds will be displayed in the museum.", words: ["I reperti", "saranno", "esposti", "nel", "museo."], translation: "The finds will be displayed in the museum.", explanation: "\"Esporre\" → \"esposti\"." },
      { type: "multiple-choice", question: "What does \"La sonda avrebbe individuato tracce d'acqua\" tell you?", options: ["Reports say the probe detected water, but it isn't confirmed.", "The probe would detect water if it landed.", "The probe has definitely found water.", "The probe will look for water."], correctIndex: 0, explanation: "Past conditional of hearsay." },
      { type: "listen-choose", audio: "Il ghiacciaio ha perso quaranta metri in dieci anni.", question: "How much has the glacier lost?", options: ["forty metres in ten years", "fourteen metres in ten years", "forty metres in two years", "four metres a year"], correctIndex: 0, explanation: "\"Quaranta metri in dieci anni\"." },
      { type: "dictation", audio: "Sui fondali è stata scoperta una nuova specie.", explanation: "\"Scoperta\" agrees with \"specie\"." },
      { type: "speak", text: "Durante gli scavi sono stati trovati reperti di epoca romana.", prompt: "Read the news aloud: Roman-era finds were discovered during the excavation.", tip: "re-PER-ti: stress on per.", explanation: "Passive with \"essere\"." },
    ],
  },
  {
    slug: "b2-science-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Technology",
    summary: "Fresh tech texts: help-desk messages, privacy notices and opinions about technology.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Messages from the help desk",
        body: [
          "Tech support writes in a polite impersonal style: \"si consiglia di\", \"si prega di\", \"è necessario\" + infinitive. Customers write back with \"non riesco a\" (I can't manage to). New words: \"il dispositivo\" (device), \"riavviare\" (to restart), \"la connessione\", \"il backup\", \"la rete wi-fi\".",
        ],
        examples: [
          { es: "Si prega di riavviare il dispositivo.", en: "Please restart the device." },
          { es: "Non riesco a collegarmi alla rete wi-fi.", en: "I can't connect to the wi-fi network." },
          { es: "È necessario aggiornare l'app all'ultima versione.", en: "You need to update the app to the latest version." },
          { es: "Si consiglia di fare un backup prima dell'aggiornamento.", en: "We recommend backing up before the update." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in help-desk style.", source: "Please restart the device.", answer: "Si prega di riavviare il dispositivo.", altAnswers: ["Riavviare il dispositivo, per favore.", "La preghiamo di riavviare il dispositivo."], explanation: "\"Si prega di\" + infinitive: polite impersonal request." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't connect to the wi-fi.", answer: "Non riesco a collegarmi al wi-fi.", altAnswers: ["Non riesco a connettermi al wi-fi.", "Non riesco a collegarmi alla rete wi-fi.", "Non riesco a connettermi alla rete wi-fi."], explanation: "\"Riuscire a\" + infinitive; the reflexive pronoun attaches: \"collegarmi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to update the app to the latest version.", answer: "È necessario aggiornare l'app all'ultima versione.", altAnswers: ["Bisogna aggiornare l'app all'ultima versione.", "Devi aggiornare l'app all'ultima versione.", "Deve aggiornare l'app all'ultima versione."], explanation: "\"È necessario\" + infinitive, impersonal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in help-desk style.", source: "We recommend backing up before the update.", answer: "Si consiglia di fare un backup prima dell'aggiornamento.", altAnswers: ["Consigliamo di fare un backup prima dell'aggiornamento.", "Si consiglia di fare il backup prima dell'aggiornamento."], explanation: "\"Prima di\" + noun: \"prima dell'aggiornamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My phone has been very slow since the update.", answer: "Il mio telefono è lentissimo dall'aggiornamento.", altAnswers: ["Dall'aggiornamento il mio telefono è lentissimo.", "Il mio telefono è molto lento dall'aggiornamento.", "Da quando l'ho aggiornato il mio telefono è lentissimo.", "Il mio cellulare è lentissimo dall'aggiornamento."], explanation: "Present + \"da\" for something that started in the past and continues." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your data will not be shared with third parties.", answer: "I Suoi dati non saranno condivisi con terzi.", altAnswers: ["I tuoi dati non saranno condivisi con terzi.", "I Suoi dati non verranno condivisi con terzi.", "I tuoi dati non verranno condivisi con terzi.", "I suoi dati non saranno condivisi con terzi."], explanation: "Future passive; \"terzi\" = third parties." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think we should give our data to everyone.", answer: "Non credo che dovremmo dare i nostri dati a tutti.", altAnswers: ["Non penso che dovremmo dare i nostri dati a tutti.", "Non credo che dobbiamo dare i nostri dati a tutti."], explanation: "The conditional \"dovremmo\" can follow \"credo che\" for advice." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turn off notifications at night. (to a friend)", answer: "Disattiva le notifiche di notte.", altAnswers: ["Spegni le notifiche di notte.", "Disattiva le notifiche la notte."], explanation: "\"Disattivare\" = to turn off a setting." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The device is no longer supported.", answer: "Il dispositivo non è più supportato.", explanation: "\"Supportato\" is the accepted tech term." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that the password be long.", answer: "È importante che la password sia lunga.", explanation: "\"È importante che\" + subjunctive; \"la password\" is feminine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I can't] open the file.", sentence: "___ ad aprire il file.", answer: "Non riesco", explanation: "\"Non riesco a\" = I can't (manage to)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [connection] is very slow today.", sentence: "La ___ è lentissima oggi.", answer: "connessione", explanation: "\"La connessione\", double n and double s." },
      { type: "word-order", prompt: "Put the words in order to say: Restart the device and try again.", words: ["Riavvia", "il dispositivo", "e", "riprova."], translation: "Restart the device and try again.", explanation: "\"Tu\" imperatives: \"riavvia\", \"riprova\"." },
      { type: "multiple-choice", question: "A help-desk email says \"Si prega di non rispondere a questo messaggio.\" What should you do?", options: ["Not reply to the message.", "Reply as soon as possible.", "Pray before replying.", "Forward the message."], correctIndex: 0, explanation: "\"Si prega di\" = please (formal, impersonal)." },
      { type: "listen-choose", audio: "Non riesco a collegarmi alla rete wi-fi.", question: "What's the problem?", options: ["The person can't connect to the wi-fi.", "The wi-fi is too slow.", "The person forgot the wi-fi password.", "The wi-fi is switched off."], correctIndex: 0, explanation: "\"Non riesco a collegarmi\" = I can't connect." },
      { type: "dictation", audio: "Si consiglia di fare un backup prima dell'aggiornamento.", explanation: "\"Prima dell'aggiornamento\": \"di\" + \"l'\"." },
      { type: "speak", text: "Buongiorno, non riesco ad accedere al mio account dall'ultimo aggiornamento.", prompt: "Call the help desk: Good morning, I haven't been able to log in to my account since the last update.", tip: "ac-CE-de-re: double c, soft ch sound.", explanation: "Present + \"da\" for a problem that continues." },
    ],
  },
  {
    slug: "b2-science-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Calques",
    summary: "Fresh sentences to fix English calques: candidarsi, rendersi conto, sostenere, in realtà, alla fine.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Say it the Italian way",
        body: [
          "Each English verb below has an Italian look-alike that means something else. Apply for = \"candidarsi\", \"fare domanda\"; realise = \"rendersi conto\", \"accorgersi\"; support a person = \"sostenere\"; actually = \"in realtà\"; eventually = \"alla fine\"; process data = \"elaborare\". New pair: \"assumere\" = to hire, not to assume (\"supporre\", \"dare per scontato\").",
        ],
        examples: [
          { es: "L'azienda ha assunto tre ingegneri.", en: "The company has hired three engineers." },
          { es: "Ho dato per scontato che venissi anche tu.", en: "I assumed you were coming too." },
          { es: "Si è candidato a sindaco.", en: "He's running for mayor." },
          { es: "Alla fine ha accettato l'offerta.", en: "In the end she accepted the offer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The company has hired three engineers.", answer: "L'azienda ha assunto tre ingegneri.", altAnswers: ["La ditta ha assunto tre ingegneri.", "La società ha assunto tre ingegneri."], explanation: "\"Assumere\" = to hire; \"assunto\" is its participle." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I assumed you were coming too. (to a friend)", answer: "Ho dato per scontato che venissi anche tu.", altAnswers: ["Davo per scontato che venissi anche tu.", "Pensavo che venissi anche tu."], explanation: "\"Dare per scontato\" = to assume; past main verb → imperfect subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She applied for the job.", answer: "Si è candidata per il posto.", altAnswers: ["Ha fatto domanda per il posto.", "Si è candidata per il lavoro.", "Ha fatto domanda per il lavoro.", "Si è candidata al posto."], explanation: "\"Candidarsi per\", never \"applicare per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't realise you were here.", answer: "Non mi ero reso conto che fossi qui.", altAnswers: ["Non mi ero resa conto che fossi qui.", "Non mi ero accorto che fossi qui.", "Non mi ero accorta che fossi qui.", "Non mi sono reso conto che eri qui.", "Non mi sono resa conto che eri qui.", "Non mi ero reso conto che eri qui.", "Non mi ero resa conto che eri qui."], explanation: "\"Rendersi conto\"; after a negative, the subjunctive is common in writing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents have always supported me.", answer: "I miei genitori mi hanno sempre sostenuto.", altAnswers: ["I miei genitori mi hanno sempre sostenuta.", "I miei mi hanno sempre sostenuto.", "I miei mi hanno sempre sostenuta."], explanation: "People are \"sostenuti\"; \"supportare\" is for devices." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Actually, I prefer tea.", answer: "In realtà preferisco il tè.", altAnswers: ["In realtà, preferisco il tè.", "A dire il vero preferisco il tè."], explanation: "Actually = \"in realtà\"; \"attualmente\" = currently." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Eventually they got married.", answer: "Alla fine si sono sposati.", altAnswers: ["Alla fine si sono sposati!"], explanation: "Eventually = \"alla fine\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The system processes the orders overnight.", answer: "Il sistema elabora gli ordini durante la notte.", altAnswers: ["Il sistema gestisce gli ordini durante la notte.", "Il sistema elabora gli ordini di notte.", "Il sistema gestisce gli ordini di notte."], explanation: "\"Elaborare\" or \"gestire\"; \"processare\" means to put on trial." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We carried out the project in six months.", answer: "Abbiamo realizzato il progetto in sei mesi.", explanation: "Here \"realizzare\" is right: to carry out." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If need be, I'll call you tomorrow. (to a friend)", answer: "Eventualmente ti chiamo domani.", altAnswers: ["Se serve, ti chiamo domani.", "Se necessario, ti chiamo domani.", "Eventualmente ti chiamo io domani."], explanation: "Here \"eventualmente\" is right: if need be." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [noticed] that the door was open.", sentence: "___ che la porta era aperta.", answer: "Mi sono accorto", altAnswers: ["Mi sono accorta", "Mi sono reso conto", "Mi sono resa conto"], explanation: "\"Accorgersi\" = to notice." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's [running] for mayor.", sentence: "___ a sindaco.", answer: "Si è candidato", altAnswers: ["Si candida"], explanation: "\"Candidarsi a\" + office." },
      { type: "word-order", prompt: "Put the words in order to say: In the end she accepted the offer.", words: ["Alla fine", "ha", "accettato", "l'offerta."], translation: "In the end she accepted the offer.", explanation: "\"Alla fine\" = in the end, eventually." },
      { type: "multi-select", question: "Which sentences use the verb correctly? Choose all that apply.", options: ["Hanno assunto una nuova segretaria.", "Ho applicato per il posto.", "Il formato non è supportato.", "Ti supporto sempre, amico mio.", "Abbiamo realizzato un sogno."], correctIndexes: [0, 2, 4], explanation: "\"Assumere\" = to hire, \"supportare\" only for tech, \"realizzare\" = to make real." },
      { type: "listen-choose", audio: "Ho dato per scontato che venissi anche tu.", question: "What does it mean?", options: ["I assumed you were coming too.", "I gave you a discount to come too.", "I hoped you would come too.", "I knew you weren't coming."], correctIndex: 0, explanation: "\"Dare per scontato\" = to take for granted, assume." },
      { type: "dictation", audio: "In realtà non mi ero reso conto dell'errore.", explanation: "\"In realtà\" = actually; \"rendersi conto di\"." },
      { type: "speak", text: "Alla fine mi sono candidato e mi hanno assunto.", prompt: "Say it in Italian: In the end I applied and they hired me.", tip: "as-SUN-to: double s.", explanation: "Three false friends avoided: eventually, apply, hire." },
    ],
  },
];
