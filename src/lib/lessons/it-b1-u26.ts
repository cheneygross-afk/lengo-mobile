// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u26.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 26: Health and the SSN. The medico di base, symptoms over
// time (da + present), prescriptions and the CUP, medicine leaflets, the
// pronto soccorso; Lei commands, si and the passive in context.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U26: Lesson[] = [
  {
    slug: "b1-the-ssn",
    level: "IT-B1",
    number: 1,
    title: "How the SSN Works",
    summary: "Understand the Italian national health service: registering with a medico di base, the tessera sanitaria, the ticket, public and private care.",
    duration: "17 min",
    sections: [
      {
        heading: "Il medico di base",
        body: [
          "\"Il Servizio Sanitario Nazionale\" (SSN) is run region by region through the local health authority, \"l'ASL\" (or \"ASP\", \"ATS\", depending on the region). Residents register with the ASL and choose \"un medico di base\" (also \"medico di famiglia\"), the GP who is the gateway to everything else. Children up to 14 have \"un pediatra\" instead.",
          "Your GP's office is \"l'ambulatorio\" or \"lo studio\". Many doctors see patients without appointments at set hours (\"riceve dalle 9 alle 12\"), so you wait your turn in the waiting room: ask \"Chi è l'ultimo?\" to find your place. Others work \"su appuntamento\".",
          "The visit to your GP is free. You go to the GP for prescriptions, sick notes and referrals to specialists.",
        ],
        examples: [
          { es: "Mi sono iscritto al Servizio Sanitario Nazionale e ho scelto il medico di base.", en: "I registered with the National Health Service and chose a GP." },
          { es: "Il mio medico riceve il lunedì e il mercoledì dalle 9 alle 12.", en: "My doctor sees patients on Mondays and Wednesdays from 9 to 12." },
          { es: "Buongiorno, chi è l'ultimo?", en: "Good morning, who's last in line?" },
          { es: "Il dottor Monti riceve solo su appuntamento.", en: "Dr. Monti sees patients by appointment only." },
          { es: "Per i bambini c'è il pediatra di libera scelta.", en: "For children there's a family pediatrician you choose." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've chosen a GP near home.", answer: "Ho scelto un medico di base vicino a casa.", altAnswers: ["Ho scelto il medico di base vicino a casa.", "Ho scelto un medico di famiglia vicino a casa.", "Ho scelto il medico di famiglia vicino a casa."], explanation: "\"Scegliere\" → \"scelto\"; \"vicino a casa\" with no article." },
          { type: "multiple-choice", question: "You walk into a crowded waiting room with no numbers. What do you say?", options: ["Buongiorno, chi è l'ultimo?", "Buongiorno, chi è il primo?", "Buongiorno, dov'è la fila?", "Buongiorno, chi è finale?"], correctIndex: 0, explanation: "\"Chi è l'ultimo?\": you'll go after that person." },
        ],
      },
      {
        heading: "La tessera sanitaria",
        body: [
          "\"La tessera sanitaria\" is the blue health card. It also shows your \"codice fiscale\" (tax code) and works as the European health card abroad. You show it at the pharmacy, at the hospital and when you book tests.",
          "To get one as a foreign resident you need \"il permesso di soggiorno\" (or EU registration) and \"la residenza\"; until then some regions let you register temporarily. If you lose it you ask for \"un duplicato\" online or at the ASL.",
        ],
        examples: [
          { es: "Ha la tessera sanitaria con sé?", en: "Do you have your health card with you?" },
          { es: "La tessera sanitaria vale anche come tessera europea.", en: "The health card also works as the European card." },
          { es: "Ho perso la tessera e ho chiesto un duplicato.", en: "I lost my card and asked for a duplicate." },
          { es: "Per iscriversi all'ASL serve la residenza.", en: "To register with the ASL you need residency." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have your health card with you? (formal)", answer: "Ha la tessera sanitaria con sé?", altAnswers: ["Ha con sé la tessera sanitaria?", "Lei ha la tessera sanitaria con sé?"], explanation: "\"Con sé\" = with you (formal), with an accent on \"sé\"." },
          { type: "listen-choose", audio: "Ho perso la tessera e ho chiesto un duplicato.", question: "What did the speaker do?", options: ["asked for a replacement card", "found the card", "paid for a new doctor", "registered with the ASL"], correctIndex: 0, explanation: "\"Un duplicato\" = a duplicate, a replacement." },
        ],
      },
      {
        heading: "Il ticket, public and private",
        body: [
          "Specialist visits, tests and some medicines need \"il ticket\": a fixed co-payment, not the full price. Some people are \"esenti\" (exempt) because of income, age or a chronic illness. Waiting lists (\"le liste d'attesa\") can be long, so many people also go \"privatamente\" (privately) or \"in intramoenia\": a hospital doctor seeing you privately, inside the hospital, for a higher fee.",
          "\"Pagare il ticket\" is everyday Italian; \"il biglietto\" is a ticket for transport or a show, never a health charge.",
          "The SSN is regional, so co-payments, exemptions and registration rules differ from region to region and change from year to year: check your region's website or ask at the ASL rather than trusting a figure you read online. And watch \"il dottore\": in Italy it's the title of any graduate, so the precise word for the doctor is \"il medico\".",
        ],
        examples: [
          { es: "Per la visita dal cardiologo ho pagato un ticket di 36 euro.", en: "For the cardiologist's visit I paid a co-payment of 36 euros." },
          { es: "Sono esente dal ticket per reddito.", en: "I'm exempt from the co-payment because of my income." },
          { es: "Con il pubblico c'erano quattro mesi di attesa, quindi sono andata privatamente.", en: "The public waiting list was four months, so I went private." },
          { es: "Una visita privata costa di più, ma si fa subito.", en: "A private visit costs more, but you get it straight away." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I paid a co-payment of 20 euros.", answer: "Ho pagato un ticket di 20 euro.", altAnswers: ["Ho pagato un ticket di venti euro.", "Ho pagato 20 euro di ticket."], explanation: "\"Il ticket\" is the health co-payment." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The waiting list was long, so [I went private].", sentence: "La lista d'attesa era lunga, quindi ___.", answer: "sono andato privatamente", altAnswers: ["sono andata privatamente", "sono andato dal privato", "sono andata dal privato"], explanation: "\"Andare\" takes \"essere\": the participle agrees." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My GP sees patients in the morning.", answer: "Il mio medico di base riceve la mattina.", altAnswers: ["Il mio medico riceve la mattina.", "Il mio medico di famiglia riceve la mattina.", "Il mio medico di base riceve di mattina."], explanation: "\"Ricevere\" = to see patients." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need residency to register.", answer: "Per iscriversi serve la residenza.", altAnswers: ["Per iscriversi ci vuole la residenza.", "Serve la residenza per iscriversi.", "Per iscriverti serve la residenza."], explanation: "\"Serve\" = is needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm exempt from the co-payment.", answer: "Sono esente dal ticket.", altAnswers: ["Io sono esente dal ticket.", "Ho l'esenzione dal ticket."], explanation: "\"Esente da\" = exempt from." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor sees patients by appointment only.", answer: "Il medico riceve solo su appuntamento.", altAnswers: ["La dottoressa riceve solo su appuntamento.", "Il dottore riceve solo su appuntamento."], explanation: "\"Su appuntamento\" = by appointment." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I lost my health card.", answer: "Ho perso la tessera sanitaria.", altAnswers: ["Ho perso la mia tessera sanitaria.", "Io ho perso la tessera sanitaria."], explanation: "\"Perdere\" → \"perso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Private visits cost more.", answer: "Le visite private costano di più.", altAnswers: ["Le visite private sono più care."], explanation: "\"Di più\" after a verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Who's last] in line?", sentence: "___?", answer: "Chi è l'ultimo", altAnswers: ["Chi è l'ultima"], explanation: "The way to join a line without numbers." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The waiting lists] are very long.", sentence: "___ sono molto lunghe.", answer: "Le liste d'attesa", altAnswers: ["Le liste di attesa"], explanation: "\"Lista\" is feminine: \"lunghe\" with h." },
      { type: "word-order", prompt: "Put the words in order to say: For children there is the pediatrician.", words: ["Per", "i", "bambini", "c'è", "il", "pediatra."], translation: "For children there is the pediatrician.", explanation: "\"Il pediatra\": masculine despite -a." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il medico di base", right: "GP" }, { left: "la tessera sanitaria", right: "health card" }, { left: "il ticket", right: "co-payment" }, { left: "esente", right: "exempt" }, { left: "l'ambulatorio", right: "doctor's office" }], explanation: "The SSN basics." },
      { type: "dictation", audio: "Il mio medico riceve dalle nove alle dodici.", explanation: "\"Dalle ... alle\" for opening hours." },
      { type: "speak", text: "Buongiorno, vorrei iscrivermi al Servizio Sanitario e scegliere il medico di base.", prompt: "Say it at the ASL desk: Good morning, I'd like to register with the Health Service and choose a GP.", tip: "\"Sanitario\": sa-ni-TA-rio.", explanation: "\"Vorrei\" + two infinitives." },
    ],
  },
  {
    slug: "b1-describing-symptoms",
    level: "IT-B1",
    number: 2,
    title: "Describing Symptoms in Detail",
    summary: "Tell a doctor what's wrong, since when, how it feels and what you've already taken.",
    duration: "17 min",
    sections: [
      {
        heading: "Ho la febbre da tre giorni",
        body: [
          "The doctor's first question is usually \"Che cosa si sente?\" or \"Qual è il problema?\". The key is time: for something still going on, Italian uses the present + \"da\": \"Ho la febbre da tre giorni\" (I've had a temperature for three days), \"Da ieri ho mal di gola\". English pushes you towards \"ho avuto\", but that would mean it's over.",
          "\"Avere mal di\" + body part, with no article: \"mal di testa\", \"mal di pancia\", \"mal di schiena\", \"mal di denti\". With other parts use \"mi fa male\" (singular) or \"mi fanno male\" (plural): \"Mi fa male il ginocchio\", \"Mi fanno male le gambe\".",
          "Temperature in Italy is in Celsius: \"ho 38 di febbre\" (I've got a temperature of 38), \"ho qualche linea di febbre\" (a slight temperature).",
          "Two pairs learners mix up. \"Sto male\" means I'm ill, while \"Mi sento male\" often means I'm feeling unwell right now, even about to faint. \"Ho freddo\" is I'm cold, not I have a cold (\"ho il raffreddore\"). And Italians use \"la pancia\" (tummy) for most stomach trouble: \"ho mal di pancia\" is more everyday than \"mal di stomaco\".",
        ],
        examples: [
          { es: "Ho la febbre da tre giorni.", en: "I've had a temperature for three days." },
          { es: "Da ieri ho mal di gola e il raffreddore.", en: "Since yesterday I've had a sore throat and a cold." },
          { es: "Mi fa male il ginocchio quando salgo le scale.", en: "My knee hurts when I go up stairs." },
          { es: "Mi fanno male le orecchie.", en: "My ears hurt." },
          { es: "Stanotte avevo 38 e mezzo di febbre.", en: "Last night I had a temperature of 38.5." },
          { es: "Ho qualche linea di febbre.", en: "I've got a slight temperature." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a headache for two days.", answer: "Ho mal di testa da due giorni.", altAnswers: ["Da due giorni ho mal di testa.", "Ho il mal di testa da due giorni.", "Sono due giorni che ho mal di testa."], explanation: "Still going on: present + \"da\"." },
          { type: "multiple-choice", question: "Your back hurts. Which is right?", options: ["Mi fa male la schiena.", "Mi fanno male la schiena.", "Ho male la schiena.", "Mi fa male di schiena."], correctIndex: 0, explanation: "\"Mi fa male\" + singular; or \"ho mal di schiena\"." },
        ],
      },
      {
        heading: "How it feels and when",
        body: [
          "Describe the symptom precisely: \"Mi gira la testa\" (I feel dizzy), \"Ho la nausea\", \"Ho la tosse\" (a cough), \"Mi sento debole\" (I feel weak), \"Ho i brividi\" (shivers), \"Mi prude\" (it itches). Then say when it happens with \"quando\": \"Mi gira la testa quando mi alzo\".",
          "A doctor will ask \"Il dolore è forte?\", \"È un dolore continuo o va e viene?\", \"Dove le fa male, esattamente?\". \"Fitta\" is a sharp stab of pain, \"bruciore\" a burning feeling.",
        ],
        examples: [
          { es: "Mi gira la testa quando mi alzo dal letto.", en: "I feel dizzy when I get out of bed." },
          { es: "Ho la tosse, soprattutto di notte.", en: "I have a cough, especially at night." },
          { es: "Il dolore va e viene.", en: "The pain comes and goes." },
          { es: "Sento una fitta qui, sul lato destro.", en: "I feel a stabbing pain here, on the right side." },
          { es: "Ho un bruciore allo stomaco dopo mangiato.", en: "I get a burning in my stomach after eating." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel dizzy when I stand up.", answer: "Mi gira la testa quando mi alzo.", altAnswers: ["Mi gira la testa quando mi metto in piedi."], explanation: "\"Mi gira la testa\": literally my head turns." },
          { type: "listen-choose", audio: "Il dolore va e viene, ma di notte è più forte.", question: "What is the pain like?", options: ["It comes and goes and is worse at night.", "It's constant and worse in the morning.", "It's gone now.", "It's only at night."], correctIndex: 0, explanation: "\"Va e viene\" = comes and goes." },
        ],
      },
      {
        heading: "What you've taken",
        body: [
          "Say what you've already done with the passato prossimo: \"Ho preso un antidolorifico\" (a painkiller), \"Ho preso una tachipirina\" (Italians use the brand name for paracetamol), \"Ho misurato la febbre\". Mention allergies: \"Sono allergico alla penicillina\".",
          "The doctor may answer with Lei commands: \"Si sdrai\" (lie down), \"Respiri profondamente\", \"Apra la bocca\", \"Mi faccia vedere\".",
        ],
        examples: [
          { es: "Ho preso un antidolorifico, ma non è passato.", en: "I took a painkiller, but it didn't go away." },
          { es: "Sono allergica alla penicillina.", en: "I'm allergic to penicillin." },
          { es: "Si sdrai sul lettino, per favore.", en: "Lie down on the exam table, please." },
          { es: "Respiri profondamente. Ora tossisca.", en: "Breathe deeply. Now cough." },
          { es: "Apra la bocca e dica \"a\".", en: "Open your mouth and say 'ah'." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I took a painkiller, but the pain hasn't gone.", answer: "Ho preso un antidolorifico, ma il dolore non è passato.", altAnswers: ["Ho preso un antidolorifico, però il dolore non è passato.", "Ho preso un antidolorifico ma il dolore non è passato."], explanation: "\"Passare\" (go away) takes \"essere\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Breathe deeply], please. (formal)", sentence: "___, per favore.", answer: "Respiri profondamente", altAnswers: ["Faccia un respiro profondo"], explanation: "Lei imperative of \"respirare\": \"respiri\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a cough for a week.", answer: "Ho la tosse da una settimana.", altAnswers: ["Da una settimana ho la tosse.", "È una settimana che ho la tosse."], explanation: "Present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My legs hurt.", answer: "Mi fanno male le gambe.", altAnswers: ["Ho male alle gambe.", "Le gambe mi fanno male."], explanation: "Plural subject: \"fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel weak and I've got shivers.", answer: "Mi sento debole e ho i brividi.", altAnswers: ["Mi sento debole e ho brividi."], explanation: "\"Sentirsi\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm allergic to penicillin.", answer: "Sono allergico alla penicillina.", altAnswers: ["Sono allergica alla penicillina.", "Io sono allergico alla penicillina.", "Io sono allergica alla penicillina."], explanation: "\"Allergico a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Since this morning I've had a stomach ache.", answer: "Da stamattina ho mal di pancia.", altAnswers: ["Da stamattina ho mal di stomaco.", "Ho mal di pancia da stamattina.", "Ho mal di stomaco da stamattina."], explanation: "\"Mal di\" + part, no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Open your mouth, please. (formal)", answer: "Apra la bocca, per favore.", altAnswers: ["Apra la bocca, prego."], explanation: "-ire verb: Lei imperative ends in -a." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[My ear hurts].", sentence: "___ l'orecchio.", answer: "Mi fa male", explanation: "Singular: \"fa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [took my temperature]: 38.", sentence: "___: 38.", answer: "Ho misurato la febbre", altAnswers: ["Mi sono misurato la febbre", "Mi sono misurata la febbre"], explanation: "\"Misurare la febbre\" = take your temperature." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Lie down] on the exam table. (formal)", sentence: "___ sul lettino.", answer: "Si sdrai", altAnswers: ["Si stenda"], explanation: "Reflexive Lei imperative: \"si\" before the verb." },
      { type: "word-order", prompt: "Put the words in order to say: I get a burning feeling after eating.", words: ["Ho", "un", "bruciore", "dopo", "mangiato."], translation: "I get a burning feeling after eating.", explanation: "\"Dopo mangiato\": a common shortening of \"dopo aver mangiato\"." },
      { type: "dictation", audio: "Mi gira la testa quando mi alzo dal letto.", explanation: "\"Mi gira la testa\" = I feel dizzy." },
      { type: "speak", text: "Ho la febbre da tre giorni, mi fa male la gola e ho preso una tachipirina, ma non è passata.", prompt: "Tell the doctor: I've had a temperature for three days, my throat hurts and I took a paracetamol, but it didn't go away.", tip: "Keep \"da tre giorni\" together: that's the key fact.", explanation: "Present + \"da\", \"mi fa male\", passato prossimo." },
    ],
  },
  {
    slug: "b1-prescriptions-and-tests",
    level: "IT-B1",
    number: 3,
    title: "Prescriptions and Tests",
    summary: "Get a prescription and a referral, book a specialist visit or blood tests through the CUP, and pick up your results.",
    duration: "17 min",
    sections: [
      {
        heading: "La ricetta",
        body: [
          "\"La ricetta\" is a prescription (and a recipe: context decides). Today it's mostly electronic: the doctor gives you or texts you a code, \"il numero di ricetta elettronica\" (NRE), and you show it with your tessera at any pharmacy. \"La ricetta bianca\" is a private prescription: you pay the full price.",
          "The GP also writes \"l'impegnativa\": the referral you need for a specialist visit or tests on the SSN. \"Prescrivere\" is to prescribe: \"Il medico mi ha prescritto un antibiotico\" (irregular participle \"prescritto\").",
          "Medical false friends: \"la visita\" is an appointment with a doctor, not a social visit (\"una visita di controllo\" = a check-up); \"l'esame\" is a medical test as well as a school exam; \"il referto\" is the written result. You book \"un appuntamento\" with your GP but \"una visita\" with a specialist.",
        ],
        examples: [
          { es: "Il medico mi ha prescritto un antibiotico per sei giorni.", en: "The doctor prescribed me an antibiotic for six days." },
          { es: "Mi ha mandato il codice della ricetta per SMS.", en: "He sent me the prescription code by text." },
          { es: "Questo farmaco si vende solo con la ricetta.", en: "This medicine is sold only on prescription." },
          { es: "Mi serve l'impegnativa per la visita dall'ortopedico.", en: "I need a referral for the orthopedic visit." },
          { es: "Con la ricetta bianca si paga il prezzo pieno.", en: "With a private prescription you pay the full price." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor prescribed me an antibiotic.", answer: "Il medico mi ha prescritto un antibiotico.", altAnswers: ["La dottoressa mi ha prescritto un antibiotico.", "Il dottore mi ha prescritto un antibiotico."], explanation: "\"Prescrivere\" → \"prescritto\", like \"scrivere\" → \"scritto\"." },
          { type: "multiple-choice", question: "You need to see a dermatologist on the SSN. What do you ask your GP for?", options: ["l'impegnativa", "lo scontrino", "il bugiardino", "la tessera"], correctIndex: 0, explanation: "\"L'impegnativa\" is the referral." },
        ],
      },
      {
        heading: "Prenotare al CUP",
        body: [
          "With the referral you book through \"il CUP\" (Centro Unico di Prenotazione), by phone, online, at a CUP desk or in many pharmacies. They offer \"la prima data disponibile\" (the first available date), often in another hospital. Each referral has a priority letter: U (urgent, within 72 hours), B (within 10 days), D (within 30 or 60 days), P (planned).",
          "Useful lines: \"Vorrei prenotare una visita dermatologica\", \"Non c'è niente prima?\", \"Va bene anche un altro ospedale\". If you can't go, cancel (\"disdire\") so you don't pay the ticket anyway.",
        ],
        examples: [
          { es: "Vorrei prenotare una visita cardiologica.", en: "I'd like to book a cardiology appointment." },
          { es: "La prima data disponibile è il 14 marzo all'ospedale Maggiore.", en: "The first available date is March 14 at the Maggiore hospital." },
          { es: "Non c'è niente prima? Va bene anche fuori città.", en: "Is there nothing sooner? Out of town is fine too." },
          { es: "L'impegnativa ha la priorità B, quindi entro dieci giorni.", en: "The referral has priority B, so within ten days." },
          { es: "Se non può venire, deve disdire almeno tre giorni prima.", en: "If you can't come, you must cancel at least three days before." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to book a specialist visit.", answer: "Vorrei prenotare una visita specialistica.", altAnswers: ["Vorrei prenotare una visita da uno specialista.", "Vorrei prenotare una visita dallo specialista."], explanation: "\"Prenotare\" = to book." },
          { type: "listen-choose", audio: "La prima data disponibile è il quattordici marzo all'ospedale Maggiore.", question: "What is offered?", options: ["March 14 at the Maggiore hospital", "March 4 at the Maggiore hospital", "today at the main hospital", "May 14 at the Maggiore hospital"], correctIndex: 0, explanation: "\"Quattordici marzo\" = March 14." },
        ],
      },
      {
        heading: "Le analisi",
        body: [
          "Blood tests are \"le analisi del sangue\" or \"gli esami del sangue\": \"fare le analisi\", \"fare un prelievo\" (have blood taken). You usually go \"a digiuno\" (on an empty stomach) early in the morning to \"il centro prelievi\". Results (\"i risultati\" or \"il referto\") are collected at the desk or downloaded from \"il fascicolo sanitario elettronico\".",
        ],
        examples: [
          { es: "Domattina devo fare le analisi del sangue.", en: "Tomorrow morning I have to have blood tests." },
          { es: "Bisogna presentarsi a digiuno dalle 7 alle 9.", en: "You must come on an empty stomach between 7 and 9." },
          { es: "Il referto sarà pronto tra una settimana.", en: "The report will be ready in a week." },
          { es: "Ho scaricato i risultati dal fascicolo sanitario.", en: "I downloaded the results from my online health record." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to have blood tests on an empty stomach.", answer: "Devo fare le analisi del sangue a digiuno.", altAnswers: ["Devo fare gli esami del sangue a digiuno.", "Devo fare le analisi a digiuno."], explanation: "\"A digiuno\" = without eating." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The report [will be ready] in a week.", sentence: "Il referto ___ tra una settimana.", answer: "sarà pronto", explanation: "Future of \"essere\"; \"tra\" = in (from now)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This medicine is sold only on prescription.", answer: "Questo farmaco si vende solo con la ricetta.", altAnswers: ["Questo farmaco viene venduto solo con la ricetta.", "Questa medicina si vende solo con la ricetta.", "Questo farmaco si vende solo con ricetta."], explanation: "Si passivante." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need a referral for the eye doctor.", answer: "Mi serve l'impegnativa per l'oculista.", altAnswers: ["Ho bisogno dell'impegnativa per l'oculista.", "Mi serve un'impegnativa per l'oculista.", "Ho bisogno di un'impegnativa per l'oculista."], explanation: "\"Servire a qualcuno\" = to be needed by." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there nothing sooner?", answer: "Non c'è niente prima?", altAnswers: ["Non c'è nulla prima?", "Non c'è niente prima di quella data?"], explanation: "\"Prima\" = earlier, sooner." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to cancel the appointment.", answer: "Devo disdire l'appuntamento.", altAnswers: ["Devo disdire la visita.", "Devo annullare l'appuntamento.", "Devo cancellare l'appuntamento."], explanation: "\"Disdire\" = to cancel a booking." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The results will be ready on Friday.", answer: "I risultati saranno pronti venerdì.", altAnswers: ["I risultati saranno pronti per venerdì.", "Il referto sarà pronto venerdì."], explanation: "\"Pronti\" agrees with \"risultati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can book at the pharmacy too.", answer: "Si può prenotare anche in farmacia.", altAnswers: ["Puoi prenotare anche in farmacia.", "Può prenotare anche in farmacia."], explanation: "Impersonal \"si può\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tomorrow I have to [have blood taken].", sentence: "Domani devo ___.", answer: "fare un prelievo", altAnswers: ["fare il prelievo", "fare le analisi del sangue", "fare gli esami del sangue"], explanation: "\"Il prelievo\" = blood sample." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The first available date] is in May.", sentence: "___ è a maggio.", answer: "La prima data disponibile", explanation: "The CUP's key phrase." },
      { type: "word-order", prompt: "Put the words in order to say: The doctor sent me the code by text.", words: ["Il", "medico", "mi", "ha", "mandato", "il", "codice", "per", "SMS."], translation: "The doctor sent me the code by text.", explanation: "\"Mi\" = to me, before the auxiliary." },
      { type: "multiple-choice", question: "\"Ricetta\" can mean ...", options: ["a prescription or a recipe", "a receipt", "a referral", "a receptionist"], correctIndex: 0, explanation: "A receipt is \"la ricevuta\" or \"lo scontrino\"." },
      { type: "dictation", audio: "Bisogna presentarsi a digiuno dalle sette alle nove.", explanation: "\"A digiuno\": gi soft." },
      { type: "speak", text: "Buongiorno, vorrei prenotare una visita cardiologica. Ho l'impegnativa del medico.", prompt: "Call the CUP: Good morning, I'd like to book a cardiology visit. I have the doctor's referral.", tip: "\"Impegnativa\": im-pe-gna-TI-va.", explanation: "Booking line + referral." },
    ],
  },
  {
    slug: "b1-pharmacy-instructions",
    level: "IT-B1",
    number: 4,
    title: "Reading the Bugiardino",
    summary: "Read a medicine leaflet: what it's for, the dose, when not to take it, side effects and how to store it.",
    duration: "17 min",
    sections: [
      {
        heading: "Indicazioni e controindicazioni",
        body: [
          "The leaflet in the box is officially \"il foglio illustrativo\", but everyone calls it \"il bugiardino\" (the little liar: people don't trust it). It starts with \"Indicazioni terapeutiche\" (what it treats) and \"Controindicazioni\" (when you must not take it).",
          "The language is impersonal and passive: \"È indicato per il trattamento di ...\", \"Non deve essere usato in caso di ...\", \"Non somministrare ai bambini sotto i 12 anni\" (do not give to children under 12). \"In caso di\" (in case of, if you have) introduces conditions, and \"ipersensibilità al principio attivo\" is an allergy to the active ingredient.",
        ],
        examples: [
          { es: "È indicato per il trattamento della febbre e del dolore lieve.", en: "It's indicated for fever and mild pain." },
          { es: "Non deve essere usato in caso di ipersensibilità al principio attivo.", en: "It must not be used if you're allergic to the active ingredient." },
          { es: "Non somministrare ai bambini sotto i 12 anni.", en: "Do not give to children under 12." },
          { es: "In gravidanza consultare il medico.", en: "If pregnant, consult your doctor." },
          { es: "Il bugiardino dice che non si può prendere con l'alcol.", en: "The leaflet says you can't take it with alcohol." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do not give to children.", answer: "Non somministrare ai bambini.", altAnswers: ["Non dare ai bambini."], explanation: "Leaflets use \"non\" + infinitive as a general instruction." },
          { type: "multiple-choice", question: "\"Controindicazioni\" tells you ...", options: ["when you must not take the medicine", "what the medicine treats", "how much to take", "where to keep it"], correctIndex: 0, explanation: "\"Contro\" + \"indicazioni\": reasons against." },
        ],
      },
      {
        heading: "Posologia: how much and when",
        body: [
          "\"Posologia\" is the dose: \"una compressa\" (a tablet), \"una bustina\" (a packet), \"10 gocce\" (drops), \"un cucchiaino di sciroppo\". Frequency: \"due volte al giorno\", \"ogni 8 ore\", \"non superare le 3 compresse al giorno\" (don't exceed).",
          "Timing uses \"andare\" + participle or \"si\": \"Va assunto dopo i pasti\" (to be taken after meals), \"Va preso a stomaco vuoto\" (on an empty stomach), \"La compressa si scioglie in un bicchiere d'acqua\" (dissolves). \"Assumere\" here is to take a medicine, not to assume.",
          "The leaflet uses the infinitive (\"Agitare prima dell'uso\"), but the pharmacist speaks to you in the Lei imperative: \"Lo agiti prima dell'uso\", \"Ne prenda una la sera\". \"Ne\" stands for the tablets: \"Ne prenda due\" (take two of them). \"La pillola\" alone usually means the contraceptive pill; for other tablets say \"la compressa\" or \"la pastiglia\".",
        ],
        examples: [
          { es: "Una compressa due volte al giorno, dopo i pasti.", en: "One tablet twice a day, after meals." },
          { es: "Il farmaco va assunto a stomaco vuoto.", en: "The medicine must be taken on an empty stomach." },
          { es: "Non superare le tre compresse al giorno.", en: "Do not exceed three tablets a day." },
          { es: "Sciogliere la bustina in mezzo bicchiere d'acqua.", en: "Dissolve the packet in half a glass of water." },
          { es: "Le gocce vanno prese la sera prima di dormire.", en: "The drops should be taken in the evening before sleeping." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It must be taken after meals.", answer: "Va assunto dopo i pasti.", altAnswers: ["Va preso dopo i pasti.", "Deve essere assunto dopo i pasti.", "Deve essere preso dopo i pasti.", "Va assunta dopo i pasti.", "Va presa dopo i pasti."], explanation: "\"Va\" + participle; \"assumere\" → \"assunto\"." },
          { type: "listen-choose", audio: "Non superare le tre compresse al giorno.", question: "What is the rule?", options: ["No more than three tablets a day.", "Three tablets at once.", "At least three tablets a day.", "One tablet every three days."], correctIndex: 0, explanation: "\"Non superare\" = do not exceed." },
        ],
      },
      {
        heading: "Effetti indesiderati and storage",
        body: [
          "\"Effetti indesiderati\" (side effects) lists what can happen and how often: \"raramente\", \"molto raramente\", \"frequenza non nota\". \"Può causare sonnolenza\" (drowsiness) is the one to notice before you drive.",
          "Storage: \"Conservare a temperatura inferiore a 25 °C\", \"Tenere fuori dalla portata dei bambini\" (keep out of children's reach), \"Non usare dopo la data di scadenza\".",
        ],
        examples: [
          { es: "Può causare sonnolenza: non guidare dopo l'assunzione.", en: "May cause drowsiness: do not drive after taking it." },
          { es: "Raramente si possono verificare mal di testa e nausea.", en: "Headache and nausea may rarely occur." },
          { es: "Tenere fuori dalla portata dei bambini.", en: "Keep out of the reach of children." },
          { es: "Conservare a temperatura inferiore a 25 gradi.", en: "Store below 25 degrees." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Keep out of the reach of children.", answer: "Tenere fuori dalla portata dei bambini.", altAnswers: ["Tenere lontano dalla portata dei bambini."], explanation: "The fixed leaflet formula, with the infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It may cause [drowsiness].", sentence: "Può causare ___.", answer: "sonnolenza", explanation: "\"Sonnolenza\": from \"sonno\" (sleep)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "One tablet every eight hours.", answer: "Una compressa ogni otto ore.", altAnswers: ["Una compressa ogni 8 ore."], explanation: "\"Ogni\" + plural number + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This medicine must be taken on an empty stomach.", answer: "Questo farmaco va assunto a stomaco vuoto.", altAnswers: ["Questo farmaco va preso a stomaco vuoto.", "Questa medicina va presa a stomaco vuoto.", "Questo farmaco deve essere preso a stomaco vuoto."], explanation: "\"Va\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do not drive after taking it.", answer: "Non guidare dopo l'assunzione.", altAnswers: ["Non guidare dopo averlo preso.", "Non guidare dopo averlo assunto.", "Non guidare dopo averla presa."], explanation: "\"L'assunzione\" = the taking (of a medicine)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Store below 25 degrees.", answer: "Conservare a temperatura inferiore a 25 gradi.", altAnswers: ["Conservare sotto i 25 gradi.", "Conservare a meno di 25 gradi."], explanation: "\"Inferiore a\" = below." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dissolve the packet in water.", answer: "Sciogliere la bustina in acqua.", altAnswers: ["Sciogliere la bustina nell'acqua.", "Sciogliere la bustina in un bicchiere d'acqua."], explanation: "\"Sciogliere\" = to dissolve." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The leaflet says it can cause nausea.", answer: "Il bugiardino dice che può causare nausea.", altAnswers: ["Il bugiardino dice che può dare nausea.", "Il foglietto illustrativo dice che può causare nausea.", "Il bugiardino dice che può causare la nausea."], explanation: "\"Il bugiardino\": everyday name for the leaflet." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do not exceed] the recommended dose.", sentence: "___ la dose consigliata.", answer: "Non superare", explanation: "Infinitive instruction." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The drops [must be taken] in the evening.", sentence: "Le gocce ___ la sera.", answer: "vanno prese", altAnswers: ["vanno assunte", "devono essere prese"], explanation: "Plural feminine: \"vanno prese\"." },
      { type: "word-order", prompt: "Put the words in order to say: Do not use after the expiration date.", words: ["Non", "usare", "dopo", "la", "data", "di", "scadenza."], translation: "Do not use after the expiration date.", explanation: "\"La scadenza\" = expiration date." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la posologia", right: "dosage" }, { left: "la compressa", right: "tablet" }, { left: "la bustina", right: "packet" }, { left: "gli effetti indesiderati", right: "side effects" }, { left: "a stomaco vuoto", right: "on an empty stomach" }], explanation: "Leaflet vocabulary." },
      { type: "dictation", audio: "Una compressa due volte al giorno, dopo i pasti.", explanation: "\"Compressa\": double s." },
      { type: "speak", text: "Scusi, questo farmaco va preso prima o dopo i pasti?", prompt: "Ask the pharmacist: Excuse me, should this medicine be taken before or after meals?", tip: "\"Farmaco\": FAR-ma-co, stress on the first syllable.", explanation: "\"Va preso\" in a question." },
    ],
  },
  {
    slug: "b1-drill-health-phrases",
    level: "IT-B1",
    number: 5,
    title: "Drill: Health Phrases",
    summary: "Produce the everyday health phrases of the doctor's, the pharmacy and the phone until they're automatic.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "The phrases",
        body: [
          "\"Ho mal di\" + part, \"mi fa / fanno male\", \"ho la febbre / la tosse / il raffreddore\", \"mi sento\" + adjective. At the pharmacy: \"Avrei bisogno di qualcosa per ...\", \"Ci vuole la ricetta?\". Doctor's commands in Lei: \"si sieda\", \"si spogli\" (undress), \"prenda\".",
        ],
        examples: [
          { es: "Avrei bisogno di qualcosa per il mal di gola.", en: "I need something for a sore throat." },
          { es: "Ci vuole la ricetta?", en: "Do you need a prescription?" },
          { es: "Si spogli fino alla vita, per favore.", en: "Undress to the waist, please." },
          { es: "Prenda queste gocce tre volte al giorno.", en: "Take these drops three times a day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need something for a cold.", answer: "Avrei bisogno di qualcosa per il raffreddore.", altAnswers: ["Ho bisogno di qualcosa per il raffreddore.", "Vorrei qualcosa per il raffreddore."], explanation: "\"Avrei bisogno\": conditional, softer than \"ho bisogno\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you need a prescription?", answer: "Ci vuole la ricetta?", altAnswers: ["Serve la ricetta?", "C'è bisogno della ricetta?", "Ci vuole la ricetta medica?"], explanation: "\"Ci vuole\" = is needed." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a sore throat.", answer: "Ho mal di gola.", altAnswers: ["Mi fa male la gola.", "Io ho mal di gola."], explanation: "\"Mal di gola\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a cold.", answer: "Ho il raffreddore.", altAnswers: ["Sono raffreddato.", "Sono raffreddata.", "Ho preso il raffreddore."], explanation: "\"Il raffreddore\": double f, double r." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My teeth hurt.", answer: "Mi fanno male i denti.", altAnswers: ["Ho mal di denti.", "I denti mi fanno male."], explanation: "Plural: \"fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel tired and I have no appetite.", answer: "Mi sento stanco e non ho appetito.", altAnswers: ["Mi sento stanca e non ho appetito.", "Mi sento stanco e non ho fame.", "Mi sento stanca e non ho fame."], explanation: "\"Sentirsi\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sit down, please. (formal)", answer: "Si sieda, per favore.", altAnswers: ["Si accomodi, per favore.", "Prego, si sieda."], explanation: "Lei imperative of \"sedersi\": \"si sieda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take this syrup twice a day. (formal)", answer: "Prenda questo sciroppo due volte al giorno.", altAnswers: ["Prenda lo sciroppo due volte al giorno."], explanation: "Lei imperative of \"prendere\": \"prenda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I twisted my ankle.", answer: "Ho preso una storta alla caviglia.", altAnswers: ["Mi sono storto la caviglia.", "Mi sono storta la caviglia.", "Ho preso una storta.", "Mi sono slogato la caviglia.", "Mi sono slogata la caviglia."], explanation: "\"Prendere una storta\" = to twist (a joint)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it serious, doctor?", answer: "È grave, dottore?", altAnswers: ["È una cosa grave, dottore?", "È grave, dottoressa?"], explanation: "\"Grave\" = serious (medical)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a blocked nose.", answer: "Ho il naso chiuso.", altAnswers: ["Ho il naso tappato.", "Io ho il naso chiuso."], explanation: "\"Naso chiuso\" = blocked nose." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Undress], please. (formal)", sentence: "___, per favore.", answer: "Si spogli", explanation: "Reflexive Lei imperative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Get well soon]! (to a friend)", sentence: "___!", answer: "Guarisci presto", altAnswers: ["Rimettiti presto"], explanation: "\"Guarire\" (-isc-) = to get better." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [feel sick].", sentence: "___.", answer: "Ho la nausea", altAnswers: ["Mi viene da vomitare", "Ho nausea"], explanation: "\"Avere la nausea\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm itchy] all over.", sentence: "___ dappertutto.", answer: "Mi prude", altAnswers: ["Ho prurito"], explanation: "\"Prudere\": it itches me." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you have] anything for a cough? (formal)", sentence: "___ qualcosa per la tosse?", answer: "Ha", altAnswers: ["Avrebbe", "Lei ha"], explanation: "Lei: \"ha\"." },
      { type: "word-order", prompt: "Put the words in order to say: I need something for a headache.", words: ["Avrei", "bisogno", "di", "qualcosa", "per", "il", "mal", "di", "testa."], translation: "I need something for a headache.", explanation: "\"Il mal di testa\" takes the article after \"per\"." },
      { type: "multiple-choice", question: "Which phrase do you use at the pharmacy counter?", options: ["Avrei bisogno di qualcosa per la tosse.", "Ho mal la tosse.", "Mi fa male la tosse di.", "Ho tossisco."], correctIndex: 0, explanation: "\"Avrei bisogno di qualcosa per\" + problem." },
      { type: "dictation", audio: "Ho il naso chiuso e mi fa male la gola.", explanation: "\"Fa\": one sore throat, singular." },
      { type: "dictation", audio: "Si sieda e mi dica che cosa si sente.", explanation: "Two Lei imperatives." },
      { type: "speak", text: "Buongiorno, avrei bisogno di qualcosa per la tosse. Ci vuole la ricetta?", prompt: "At the pharmacy: Good morning, I need something for a cough. Do I need a prescription?", tip: "\"Tosse\": double s, short o.", explanation: "Conditional request + \"ci vuole\"." },
    ],
  },
  {
    slug: "b1-drill-health-past-and-duration",
    level: "IT-B1",
    number: 6,
    title: "Drill: How Long and Since When?",
    summary: "Produce da, per and fa with symptoms and treatments until the choice is automatic.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Da, per, fa",
        body: [
          "\"Da\" + present: still going on (\"Ho la tosse da una settimana\"). \"Per\" + past: a finished period (\"Ho avuto la febbre per tre giorni\"). \"Fa\" after the time: ago (\"Mi sono ammalato tre giorni fa\"). Questions: \"Da quanto tempo?\", \"Per quanto tempo?\", \"Quando?\".",
        ],
        examples: [
          { es: "Ho la tosse da una settimana.", en: "I've had a cough for a week." },
          { es: "Ho avuto la febbre per tre giorni.", en: "I had a temperature for three days." },
          { es: "Mi sono ammalata tre giorni fa.", en: "I fell ill three days ago." },
          { es: "Per quanto tempo devo prendere l'antibiotico?", en: "How long do I have to take the antibiotic for?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fell ill two days ago.", answer: "Mi sono ammalato due giorni fa.", altAnswers: ["Mi sono ammalata due giorni fa.", "Due giorni fa mi sono ammalato.", "Due giorni fa mi sono ammalata."], explanation: "\"Fa\" comes after the time." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long have you had a temperature? (formal)", answer: "Da quanto tempo ha la febbre?", altAnswers: ["Da quanto ha la febbre?", "Da quando ha la febbre?"], explanation: "Still going on: \"da quanto tempo\" + present." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a backache for a month.", answer: "Ho mal di schiena da un mese.", altAnswers: ["Da un mese ho mal di schiena.", "È un mese che ho mal di schiena."], explanation: "\"Da\" + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had a cough for two weeks.", answer: "Ho avuto la tosse per due settimane.", altAnswers: ["Ho avuto la tosse due settimane.", "Per due settimane ho avuto la tosse."], explanation: "Finished: passato prossimo + \"per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I went to the doctor a week ago.", answer: "Sono andato dal medico una settimana fa.", altAnswers: ["Sono andata dal medico una settimana fa.", "Una settimana fa sono andato dal medico.", "Una settimana fa sono andata dal medico."], explanation: "\"Dal\" + person = to someone's place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been taking this medicine since Monday.", answer: "Prendo questo farmaco da lunedì.", altAnswers: ["Prendo questa medicina da lunedì.", "Da lunedì prendo questo farmaco.", "Sto prendendo questo farmaco da lunedì."], explanation: "Since + still going: present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long must I take it for? (the antibiotic)", answer: "Per quanto tempo devo prenderlo?", altAnswers: ["Per quanto tempo lo devo prendere?", "Per quanti giorni devo prenderlo?", "Per quanti giorni lo devo prendere?"], explanation: "Future duration: \"per quanto tempo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's been ill since Saturday.", answer: "È malata da sabato.", altAnswers: ["Sta male da sabato.", "Lei è malata da sabato.", "Da sabato è malata."], explanation: "Still ill: present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I broke my arm five years ago.", answer: "Mi sono rotto il braccio cinque anni fa.", altAnswers: ["Mi sono rotta il braccio cinque anni fa.", "Cinque anni fa mi sono rotto il braccio.", "Cinque anni fa mi sono rotta il braccio."], explanation: "Reflexive + body part: \"mi sono rotto il braccio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was in the hospital for a week.", answer: "Sono stato in ospedale per una settimana.", altAnswers: ["Sono stata in ospedale per una settimana.", "Sono stato ricoverato per una settimana.", "Sono stata ricoverata per una settimana."], explanation: "\"Essere ricoverato\" = to be admitted." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've had this rash [for] three days.", sentence: "Ho questo sfogo ___ tre giorni.", answer: "da", explanation: "Still there: \"da\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I took antibiotics [for] a week.", sentence: "Ho preso gli antibiotici ___ una settimana.", answer: "per", explanation: "Finished: \"per\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pain started two hours [ago].", sentence: "Il dolore è cominciato due ore ___.", answer: "fa", explanation: "\"Fa\" after the time." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[How long] have you had this pain? (formal)", sentence: "___ ha questo dolore?", answer: "Da quanto tempo", altAnswers: ["Da quanto", "Da quando"], explanation: "Ongoing: \"da quanto tempo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[When] did you fall? (formal)", sentence: "___ è caduto?", answer: "Quando", explanation: "A point in time: \"quando\"." },
      { type: "word-order", prompt: "Put the words in order to say: I haven't slept well for a week.", words: ["Non", "dormo", "bene", "da", "una", "settimana."], translation: "I haven't slept well for a week.", explanation: "Present + \"da\", even in the negative." },
      { type: "multiple-choice", question: "You're still coughing. Which sentence is right?", options: ["Ho la tosse da cinque giorni.", "Ho avuto la tosse da cinque giorni.", "Ho la tosse per cinque giorni.", "Ho la tosse cinque giorni fa."], correctIndex: 0, explanation: "Ongoing: present + \"da\"." },
      { type: "dictation", audio: "Ho la febbre da ieri sera.", explanation: "\"Da ieri sera\" = since last night." },
      { type: "dictation", audio: "Mi sono fatto male al ginocchio due settimane fa.", explanation: "\"Farsi male a\" = to hurt (a part)." },
      { type: "speak", text: "Ho la tosse da dieci giorni. Ho preso uno sciroppo per una settimana, ma non è passata.", prompt: "Tell the doctor: I've had a cough for ten days. I took a syrup for a week, but it hasn't gone.", tip: "Contrast \"da\" and \"per\" clearly.", explanation: "\"Da\" for now, \"per\" for the finished treatment." },
    ],
  },
  {
    slug: "b1-dialogue-lab-pronto-soccorso",
    level: "IT-B1",
    number: 7,
    title: "Dialogue Lab: At the Pronto Soccorso",
    summary: "Follow a visit to the emergency room in Bari: triage, questions from the nurse and doctor, waiting and discharge.",
    duration: "17 min",
    sections: [
      {
        heading: "Triage",
        body: [
          "Ben fell off his bike in Bari and his wrist is swollen. At \"il pronto soccorso\" (the ER) a triage nurse decides the order of patients with a color code: \"rosso\" (life-threatening), \"arancione\" (urgent), \"azzurro\", \"verde\" (minor) and \"bianco\" (not urgent; you may pay a ticket). Some regions use numbers from 1 to 5 instead.",
          "The nurse asks quick questions in \"Lei\": \"Che cosa è successo?\", \"Ha battuto la testa?\", \"Prende dei farmaci?\". Ben answers with the passato prossimo for the accident.",
        ],
        examples: [
          { es: "Buonasera, che cosa è successo?", en: "Good evening, what happened?" },
          { es: "Sono caduto dalla bici e mi fa molto male il polso.", en: "I fell off my bike and my wrist hurts a lot." },
          { es: "Ha battuto la testa?", en: "Did you hit your head?" },
          { es: "No, sono caduto sul braccio.", en: "No, I fell on my arm." },
          { es: "Le do un codice verde. Si accomodi in sala d'attesa.", en: "I'm giving you a green code. Please wait in the waiting room." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fell off my bike.", answer: "Sono caduto dalla bici.", altAnswers: ["Sono caduta dalla bici.", "Sono caduto dalla bicicletta.", "Sono caduta dalla bicicletta."], explanation: "\"Cadere\" takes \"essere\"; \"da\" = off, from." },
          { type: "listen-choose", audio: "Le do un codice verde. Si accomodi in sala d'attesa.", question: "What does the green code mean for Ben?", options: ["It's minor: he'll wait.", "He'll be seen at once.", "He can go home.", "He must pay now."], correctIndex: 0, explanation: "\"Verde\" = minor; he waits in \"la sala d'attesa\"." },
        ],
      },
      {
        heading: "The doctor",
        body: [
          "After two hours a doctor calls him. \"Mi faccia vedere. Riesce a muovere le dita?\" He orders an X-ray: \"Facciamo una radiografia\". The result: \"Non è rotto, è una distorsione\" (a sprain). Note \"rotto\" (broken), \"slogato\" (dislocated) and \"incrinato\" (cracked).",
          "Ben asks what he must do. The doctor uses Lei commands and \"dovrà\" (future of \"dovere\") for instructions: \"Tenga il tutore per dieci giorni\" (keep the splint on), \"Dovrà mettere il ghiaccio tre volte al giorno\".",
        ],
        examples: [
          { es: "Mi faccia vedere. Riesce a muovere le dita?", en: "Let me see. Can you move your fingers?" },
          { es: "Facciamo una radiografia per sicurezza.", en: "Let's do an X-ray to be safe." },
          { es: "Per fortuna non è rotto, è una distorsione.", en: "Luckily it's not broken, it's a sprain." },
          { es: "Tenga il tutore per dieci giorni.", en: "Keep the splint on for ten days." },
          { es: "Dovrà mettere il ghiaccio tre volte al giorno.", en: "You'll need to put ice on it three times a day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you move your fingers? (formal)", answer: "Riesce a muovere le dita?", altAnswers: ["Può muovere le dita?", "Lei riesce a muovere le dita?"], explanation: "\"Riuscire a\" = to manage to; \"il dito\" → \"le dita\" (irregular plural)." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luckily [it's not broken].", sentence: "Per fortuna ___.", answer: "non è rotto", explanation: "\"Rompere\" → \"rotto\"." },
        ],
      },
      {
        heading: "Discharge",
        body: [
          "At the end Ben gets \"il verbale di pronto soccorso\" (the discharge report) to show his GP. The doctor adds: \"Se il dolore aumenta, torni subito\". For a night-time problem that isn't an emergency, Italians call \"la guardia medica\", the out-of-hours doctor (officially \"continuità assistenziale\"; many regions now use the number 116117). 112 is the general emergency number, and 118 still reaches an ambulance.",
        ],
        examples: [
          { es: "Questo è il verbale: lo porti al Suo medico di base.", en: "This is the report: take it to your GP." },
          { es: "Se il dolore aumenta, torni subito.", en: "If the pain gets worse, come back at once." },
          { es: "Di notte, se non è un'emergenza, chiami la guardia medica.", en: "At night, if it's not an emergency, call the out-of-hours doctor." },
          { es: "In caso di emergenza si chiama il 112.", en: "In an emergency you call 112." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the pain gets worse, come back. (formal)", answer: "Se il dolore aumenta, torni.", altAnswers: ["Se il dolore aumenta, torni subito.", "Se il dolore peggiora, torni.", "Se il dolore peggiora, torni subito."], explanation: "Lei imperative \"torni\"; real condition with the present." },
          { type: "multiple-choice", question: "It's 2 a.m., you have a bad earache but it's not an emergency. Who do you call?", options: ["la guardia medica", "il medico di base", "il CUP", "la farmacia comunale"], correctIndex: 0, explanation: "\"La guardia medica\" covers nights, weekends and holidays." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What happened? (formal)", answer: "Che cosa è successo?", altAnswers: ["Cosa è successo?", "Cos'è successo?", "Che è successo?", "Che cos'è successo?"], explanation: "\"Succedere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My wrist hurts a lot.", answer: "Mi fa molto male il polso.", altAnswers: ["Il polso mi fa molto male.", "Ho molto male al polso."], explanation: "\"Mi fa male\" + singular part." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't hit my head.", answer: "Non ho battuto la testa.", altAnswers: ["Io non ho battuto la testa."], explanation: "\"Battere la testa\" = to hit your head." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's do an X-ray.", answer: "Facciamo una radiografia.", altAnswers: ["Facciamo una lastra."], explanation: "\"Lastra\" is the everyday word for an X-ray." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'll need to keep the splint for a week. (formal)", answer: "Dovrà tenere il tutore per una settimana.", altAnswers: ["Deve tenere il tutore per una settimana.", "Dovrà portare il tutore per una settimana."], explanation: "Future \"dovrà\" for instructions." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take the report to your GP. (formal)", answer: "Porti il verbale al Suo medico di base.", altAnswers: ["Porti il verbale al suo medico di base.", "Porti il verbale al medico di base."], explanation: "Lei imperative \"porti\"; \"al Suo medico\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I fell [on my arm].", sentence: "Sono caduto ___.", answer: "sul braccio", explanation: "\"Su\" + \"il\" = \"sul\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Please wait] in the waiting room. (formal)", sentence: "___ in sala d'attesa.", answer: "Si accomodi", altAnswers: ["Attenda", "Aspetti"], explanation: "Lei imperative." },
      { type: "word-order", prompt: "Put the words in order to say: It's not broken, it's a sprain.", words: ["Non", "è", "rotto,", "è", "una", "distorsione."], translation: "It's not broken, it's a sprain.", explanation: "\"La distorsione\" = sprain." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il pronto soccorso", right: "ER, emergency room" }, { left: "la radiografia", right: "X-ray" }, { left: "il tutore", right: "splint, brace" }, { left: "la guardia medica", right: "out-of-hours doctor" }, { left: "il codice verde", right: "minor-case code" }], explanation: "Emergency-room vocabulary." },
      { type: "dictation", audio: "Sono caduto dalla bici e mi fa male il polso.", explanation: "\"Caduto\": essere + participle." },
      { type: "speak", text: "Sono caduta dalle scale e mi fa molto male la caviglia. Non riesco a camminare.", prompt: "Tell the triage nurse: I fell down the stairs and my ankle hurts a lot. I can't walk.", tip: "\"Caviglia\": ca-VI-glia, gli as in million.", explanation: "Passato prossimo for the accident, present for now." },
    ],
  },
  {
    slug: "b1-listening-lab-doctor",
    level: "IT-B1",
    number: 8,
    title: "Listening Lab: The Doctor's Instructions",
    summary: "Understand a GP's instructions at natural speed: dosage, diet, rest, follow-up and warning signs.",
    duration: "18 min",
    sections: [
      {
        heading: "The diagnosis",
        body: [
          "Doctors speak fast and mix \"Lei\" commands with impersonal forms. Listen for the diagnosis first: \"È un'influenza\" (flu), \"È una faringite\" (a throat infection), \"È un virus intestinale\", \"Niente di grave\" (nothing serious).",
          "Then the reason: \"Non serve l'antibiotico, perché è un virus\". Many Italian patients expect antibiotics, and doctors often explain why not.",
        ],
        examples: [
          { es: "Niente di grave, è un'influenza.", en: "Nothing serious, it's the flu." },
          { es: "Non serve l'antibiotico, perché è un virus.", en: "You don't need antibiotics, because it's a virus." },
          { es: "Ha la gola molto arrossata: è una faringite.", en: "Your throat is very red: it's pharyngitis." },
          { es: "Con un po' di riposo passa in una settimana.", en: "With a bit of rest it goes in a week." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Niente di grave, è un'influenza. Non serve l'antibiotico.", question: "What does the doctor say?", options: ["It's the flu and antibiotics aren't needed.", "It's serious and needs antibiotics.", "It's the flu and he prescribes antibiotics.", "He doesn't know what it is."], correctIndex: 0, explanation: "\"Non serve\" = it isn't needed." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nothing serious.", answer: "Niente di grave.", altAnswers: ["Nulla di grave.", "Non è niente di grave."], explanation: "\"Niente di\" + adjective." },
        ],
      },
      {
        heading: "What to do",
        body: [
          "Instructions come as Lei imperatives and \"deve\" / \"dovrà\": \"Stia a riposo per qualche giorno\", \"Beva molta acqua\", \"Prenda la tachipirina solo se la febbre supera i 38\". \"Stare a riposo\" = to rest; \"stare a letto\" = to stay in bed.",
          "Food advice is \"in bianco\": \"Mangi in bianco\" means plain food, rice or pasta with oil and a little parmesan, no sauces.",
        ],
        examples: [
          { es: "Stia a riposo per tre o quattro giorni.", en: "Rest for three or four days." },
          { es: "Beva molta acqua e mangi in bianco.", en: "Drink lots of water and eat plain food." },
          { es: "Prenda la tachipirina solo se la febbre supera i 38.", en: "Take paracetamol only if your temperature goes over 38." },
          { es: "Eviti il latte e i formaggi per qualche giorno.", en: "Avoid milk and cheese for a few days." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Beva molta acqua e mangi in bianco.", question: "What should the patient eat?", options: ["plain food with no sauces", "white meat only", "nothing", "dairy products"], correctIndex: 0, explanation: "\"Mangiare in bianco\" = a plain, bland diet." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Drink lots of water. (formal)", answer: "Beva molta acqua.", altAnswers: ["Beva tanta acqua.", "Beva molta acqua, mi raccomando."], explanation: "Lei imperative of \"bere\": \"beva\"." },
        ],
      },
      {
        heading: "Follow-up and warning signs",
        body: [
          "The visit ends with what happens next: \"Se tra tre giorni non va meglio, mi richiami\", \"Torni per un controllo tra due settimane\", and warning signs: \"Se ha difficoltà a respirare, vada al pronto soccorso\". \"Il controllo\" is a check-up.",
        ],
        examples: [
          { es: "Se tra tre giorni non va meglio, mi richiami.", en: "If it's no better in three days, call me again." },
          { es: "Torni per un controllo tra due settimane.", en: "Come back for a check-up in two weeks." },
          { es: "Se ha difficoltà a respirare, vada subito al pronto soccorso.", en: "If you have trouble breathing, go straight to the ER." },
          { es: "Le faccio il certificato per il lavoro.", en: "I'll write you a sick note for work." },
        ],
        checkpoint: [
          { type: "dictation", audio: "Torni per un controllo tra due settimane.", explanation: "\"Torni\": Lei imperative of \"tornare\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it's no better, call me again. (formal)", answer: "Se non va meglio, mi richiami.", altAnswers: ["Se non migliora, mi richiami.", "Se non sta meglio, mi richiami."], explanation: "\"Mi richiami\": Lei imperative, pronoun before." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Prenda la tachipirina solo se la febbre supera i trentotto.", question: "When should the patient take paracetamol?", options: ["only above 38 degrees", "every 38 hours", "three times a day", "before meals"], correctIndex: 0, explanation: "\"Supera\" = goes over." },
      { type: "listen-choose", audio: "Stia a riposo ed eviti il latte per qualche giorno.", question: "What two things are advised?", options: ["rest and no milk", "exercise and milk", "rest and lots of milk", "go to work and avoid coffee"], correctIndex: 0, explanation: "\"Eviti\" = avoid." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rest for a few days. (formal)", answer: "Stia a riposo per qualche giorno.", altAnswers: ["Stia a riposo qualche giorno.", "Si riposi per qualche giorno.", "Riposi per qualche giorno."], explanation: "Lei imperative of \"stare\": \"stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Avoid alcohol. (formal)", answer: "Eviti l'alcol.", altAnswers: ["Eviti gli alcolici.", "Non beva alcol.", "Non beva alcolici."], explanation: "\"Evitare\" → \"eviti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come back for a check-up next month. (formal)", answer: "Torni per un controllo il mese prossimo.", altAnswers: ["Torni per un controllo il prossimo mese.", "Ritorni per un controllo il mese prossimo."], explanation: "\"Il controllo\" = check-up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll write you a sick note. (formal)", answer: "Le faccio il certificato.", altAnswers: ["Le faccio il certificato medico.", "Le faccio il certificato di malattia.", "Le scrivo il certificato."], explanation: "\"Fare il certificato a qualcuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You don't need antibiotics.", answer: "Non serve l'antibiotico.", altAnswers: ["Non servono antibiotici.", "Non servono gli antibiotici.", "Non c'è bisogno dell'antibiotico."], explanation: "\"Servire\" agrees with what is needed." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Eat plain food] for two days. (formal)", sentence: "___ per due giorni.", answer: "Mangi in bianco", explanation: "\"In bianco\": no sauces, light food." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you have trouble breathing, [go] to the ER. (formal)", sentence: "Se ha difficoltà a respirare, ___ al pronto soccorso.", answer: "vada", explanation: "Lei imperative of \"andare\": \"vada\"." },
      { type: "word-order", prompt: "Put the words in order to say: With a bit of rest it goes away in a week.", words: ["Con", "un", "po'", "di", "riposo", "passa", "in", "una", "settimana."], translation: "With a bit of rest it goes away in a week.", explanation: "\"Passare\" = to go away (an illness)." },
      { type: "dictation", audio: "Se tra tre giorni non va meglio, mi richiami.", explanation: "\"Tra\" + time = in (the future)." },
      { type: "speak", text: "Allora, devo stare a riposo, bere molta acqua e prendere la tachipirina solo se ho più di trentotto. Giusto?", prompt: "Repeat back the instructions: So, I have to rest, drink a lot of water and take paracetamol only if I'm over 38. Right?", tip: "Read it back calmly: it shows the doctor you've understood.", explanation: "Checking instructions: \"devo\" + three infinitives." },
    ],
  },
  {
    slug: "b1-error-hunt-health",
    level: "IT-B1",
    number: 9,
    title: "Error Hunt: Health",
    summary: "Fix the classic health mistakes: duration with da, the false friend droga, mal di and the tessera sanitaria.",
    duration: "17 min",
    sections: [
      {
        heading: "Still ill: da + present",
        body: [
          "Each sentence below has one mistake. \"Sono stato malato per tre giorni\" means it's over: you were ill and now you're fine. If you're still ill, Italian uses the present: \"Sono malato da tre giorni\". English says I've been, but the Italian verb stays in the present because the state hasn't ended.",
          "The same goes for \"Prendo l'antibiotico da lunedì\" (I've been taking it since Monday) and \"Non dormo bene da una settimana\".",
        ],
        examples: [
          { es: "Sono malato da tre giorni.", en: "I've been ill for three days (and still am)." },
          { es: "Sono stato malato per tre giorni.", en: "I was ill for three days (now I'm better)." },
          { es: "Prendo l'antibiotico da lunedì.", en: "I've been taking the antibiotic since Monday." },
          { es: "Non dormo bene da una settimana.", en: "I haven't slept well for a week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"sono stata malata per una settimana\" and is still ill. Write it correctly: I've been ill for a week.", source: "I've been ill for a week.", answer: "Sono malata da una settimana.", altAnswers: ["Sono malato da una settimana.", "Sto male da una settimana.", "Da una settimana sono malata.", "Da una settimana sono malato."], explanation: "Still ill: present + \"da\"." },
          { type: "multiple-choice", question: "You're better now. Which sentence fits?", options: ["Sono stato malato per tre giorni.", "Sono malato da tre giorni.", "Sono malato per tre giorni.", "Ero malato da tre giorni fa."], correctIndex: 0, explanation: "Finished: passato prossimo + \"per\"." },
        ],
      },
      {
        heading: "Droga, medicina, farmaco",
        body: [
          "\"La droga\" means illegal drugs only. \"Ho comprato una droga in farmacia\" is alarming. Medicine is \"il farmaco\" or \"la medicina\"; a pharmacy is \"la farmacia\". \"Il medicinale\" is the formal word on packaging.",
          "\"Ho male la testa\" is missing \"di\": \"ho mal di testa\" (\"male\" shortens to \"mal\"). And the health card is \"la tessera sanitaria\", never \"la tessera di salute\": \"sanitario\" is the adjective for health services.",
        ],
        examples: [
          { es: "Ho comprato un farmaco per l'allergia.", en: "I bought a medicine for my allergy." },
          { es: "Devo prendere la medicina dopo cena.", en: "I have to take the medicine after dinner." },
          { es: "Ho mal di testa da stamattina.", en: "I've had a headache since this morning." },
          { es: "Ecco la mia tessera sanitaria.", en: "Here's my health card." },
          { es: "Il personale sanitario è stato gentilissimo.", en: "The healthcare staff were very kind." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"una droga per la tosse\". Write it correctly: I need a medicine for my cough.", source: "I need a medicine for my cough.", answer: "Ho bisogno di un farmaco per la tosse.", altAnswers: ["Ho bisogno di una medicina per la tosse.", "Mi serve un farmaco per la tosse.", "Mi serve una medicina per la tosse."], explanation: "\"Droga\" = illegal drugs." },
          { type: "fill-blank", prompt: "A learner wrote \"ho male la testa\". Write the Italian for the bold words.", en: "[I have a headache].", sentence: "___.", answer: "Ho mal di testa", altAnswers: ["Mi fa male la testa", "Ho il mal di testa"], explanation: "\"Mal di\" + part." },
        ],
      },
      {
        heading: "Other slips",
        body: [
          "\"Mi fa male le gambe\" forgets the plural: \"mi fanno male le gambe\". \"Sono andato al dottore\" is heard, but for people Italian uses \"da\": \"sono andato dal medico\". \"Ho preso freddo\" (I caught a chill) is right; \"ho preso un freddo\" is not.",
        ],
        examples: [
          { es: "Mi fanno male le gambe.", en: "My legs hurt." },
          { es: "Sono andata dal medico.", en: "I went to the doctor's." },
          { es: "Ieri ho preso freddo.", en: "Yesterday I caught a chill." },
          { es: "Devo andare dal dentista.", en: "I have to go to the dentist's." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "A learner wrote \"mi fa male i piedi\". Write the Italian for the bold words.", en: "[My feet hurt].", sentence: "___ i piedi.", answer: "Mi fanno male", explanation: "Plural subject \"i piedi\": \"fanno\"." },
          { type: "listen-choose", audio: "Sono andata dal medico stamattina.", question: "Where did she go?", options: ["to the doctor's", "to the hospital", "to the pharmacy", "to the doctor's house for dinner"], correctIndex: 0, explanation: "\"Dal\" + person = to their place (here, the doctor's office)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"ho avuto la febbre per due giorni\" and still has it. Write it correctly: I've had a temperature for two days.", source: "I've had a temperature for two days.", answer: "Ho la febbre da due giorni.", altAnswers: ["Da due giorni ho la febbre.", "Sono due giorni che ho la febbre."], explanation: "Ongoing: present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"la droga\" for medicine. Write it correctly: The pharmacist gave me a medicine.", source: "The pharmacist gave me a medicine.", answer: "Il farmacista mi ha dato un farmaco.", altAnswers: ["La farmacista mi ha dato un farmaco.", "Il farmacista mi ha dato una medicina.", "La farmacista mi ha dato una medicina."], explanation: "\"Il farmaco\", \"la medicina\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"la tessera di salute\". Write it correctly: I forgot my health card.", source: "I forgot my health card.", answer: "Ho dimenticato la tessera sanitaria.", altAnswers: ["Ho dimenticato la mia tessera sanitaria.", "Mi sono dimenticato la tessera sanitaria.", "Mi sono dimenticata la tessera sanitaria."], explanation: "\"Sanitaria\" = of the health service." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"ho male il stomaco\". Write it correctly: I have a stomach ache.", source: "I have a stomach ache.", answer: "Ho mal di stomaco.", altAnswers: ["Ho mal di pancia.", "Mi fa male lo stomaco.", "Mi fa male la pancia."], explanation: "\"Mal di\" + part; with the article it's \"lo stomaco\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"sono andato al medico\". Write it correctly: I went to the doctor's yesterday.", source: "I went to the doctor's yesterday.", answer: "Ieri sono andato dal medico.", altAnswers: ["Ieri sono andata dal medico.", "Sono andato dal medico ieri.", "Sono andata dal medico ieri."], explanation: "\"Da\" + person." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"mi fa male gli occhi\". Write it correctly: My eyes hurt.", source: "My eyes hurt.", answer: "Mi fanno male gli occhi.", altAnswers: ["Gli occhi mi fanno male.", "Ho male agli occhi."], explanation: "Plural: \"fanno\"." },
      { type: "fill-blank", prompt: "A learner wrote \"prendo l'antibiotico per lunedì\". Write the Italian for the bold words.", en: "I've been taking the antibiotic [since] Monday.", sentence: "Prendo l'antibiotico ___ lunedì.", answer: "da", explanation: "\"Da\" = since." },
      { type: "fill-blank", prompt: "A learner wrote \"ho preso un freddo\". Write the Italian for the bold words.", en: "I think [I caught a chill].", sentence: "Credo di ___.", answer: "aver preso freddo", altAnswers: ["avere preso freddo"], explanation: "\"Prendere freddo\", no article; past infinitive after \"credo di\"." },
      { type: "word-order", prompt: "Put the words in order to say: I haven't been sleeping well for a week.", words: ["Non", "dormo", "bene", "da", "una", "settimana."], translation: "I haven't been sleeping well for a week.", explanation: "Present + \"da\", negative." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ho bisogno di una medicina per la febbre.", "Ho bisogno di una droga per la febbre.", "Ho bisogno di una medicazione per la febbre.", "Ho bisogno di un medico per la febbre in farmacia."], correctIndex: 0, explanation: "\"Medicazione\" is a dressing on a wound; \"droga\" is illegal drugs." },
      { type: "dictation", audio: "Sono malato da tre giorni e ho mal di testa.", explanation: "\"Da\" for still ill; \"mal di testa\"." },
      { type: "speak", text: "Sono malata da tre giorni, ho mal di gola e mi fanno male le gambe.", prompt: "Fix it and say it: a learner said \"Sono stata malata per tre giorni, ho male la gola e mi fa male le gambe\" (she's still ill).", tip: "\"Fanno\": double n.", explanation: "Three fixes: \"da\", \"mal di\", \"fanno\"." },
    ],
  },
  {
    slug: "b1-mission-book-an-appointment",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: Book a Visit",
    summary: "Book a specialist visit by phone with the CUP and fill out the online booking form.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The phone call",
        body: [
          "Your mission: your GP has given you a referral (priority D) for a dermatology visit. You call the CUP. The operator will ask for \"il codice fiscale\", \"il numero dell'impegnativa\" and \"la priorità\". Spell your name with the Italian city alphabet: \"Ancona, Bologna, Como\" (A, B, C).",
          "Be ready to accept or refuse: \"Va bene\", \"Non c'è niente prima?\", \"Purtroppo quel giorno non posso, c'è un'altra data?\".",
        ],
        examples: [
          { es: "Buongiorno, vorrei prenotare una visita dermatologica.", en: "Good morning, I'd like to book a dermatology visit." },
          { es: "Mi dice il codice fiscale, per favore?", en: "Can you give me your tax code, please?" },
          { es: "Il cognome è Clark: Como, Livorno, Ancona, Roma, Kappa.", en: "The last name is Clark: C, L, A, R, K." },
          { es: "Purtroppo quel giorno non posso, c'è un'altra data?", en: "Unfortunately I can't that day, is there another date?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unfortunately I can't that day.", answer: "Purtroppo quel giorno non posso.", altAnswers: ["Purtroppo non posso quel giorno.", "Quel giorno purtroppo non posso."], explanation: "\"Quel giorno\" = that day." },
          { type: "listen-choose", audio: "Mi dice il codice fiscale e il numero dell'impegnativa, per favore?", question: "What does the operator ask for?", options: ["tax code and referral number", "name and address", "health card and phone number", "date of birth and GP's name"], correctIndex: 0, explanation: "The two codes every booking needs." },
        ],
      },
      {
        heading: "Confirming the details",
        body: [
          "The operator confirms: \"Allora, visita dermatologica il 12 novembre alle 9:40, all'ospedale San Paolo, ambulatorio 3, primo piano. Il ticket è di 23 euro, da pagare prima della visita\". Repeat the key details back to check, and ask about anything missing: \"Devo portare qualcosa?\", \"Dove si paga il ticket?\".",
        ],
        examples: [
          { es: "La visita è il 12 novembre alle 9:40.", en: "The visit is on November 12 at 9:40." },
          { es: "Il ticket va pagato prima della visita.", en: "The co-payment must be paid before the visit." },
          { es: "Devo portare qualcosa?", en: "Do I need to bring anything?" },
          { es: "Porti l'impegnativa e la tessera sanitaria.", en: "Bring the referral and your health card." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I need to bring anything?", answer: "Devo portare qualcosa?", altAnswers: ["Devo portare qualche documento?", "Serve portare qualcosa?"], explanation: "\"Portare\" = to bring." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The co-payment [must be paid] before the visit.", sentence: "Il ticket ___ prima della visita.", answer: "va pagato", altAnswers: ["deve essere pagato"], explanation: "\"Va\" + participle." },
        ],
      },
      {
        heading: "The online form",
        body: [
          "Online booking forms ask: \"Cognome\", \"Nome\", \"Codice fiscale\", \"Data di nascita\" (gg/mm/aaaa), \"Comune di residenza\", \"Recapito telefonico\", \"Numero ricetta (NRE)\", \"Classe di priorità\". At the end tick \"Dichiaro di aver letto l'informativa sulla privacy\" and press \"Conferma la prenotazione\".",
        ],
        examples: [
          { es: "Data di nascita: 07/03/1990", en: "Date of birth: March 7, 1990" },
          { es: "Comune di residenza: Milano", en: "Town of residence: Milan" },
          { es: "Recapito telefonico: 333 1234567", en: "Contact phone number: 333 1234567" },
          { es: "Dichiaro di aver letto l'informativa sulla privacy.", en: "I declare that I have read the privacy notice." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Confirm the booking.", answer: "Conferma la prenotazione.", altAnswers: ["Confermare la prenotazione."], explanation: "Buttons use the tu imperative or the infinitive." },
          { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il cognome", right: "last name" }, { left: "la data di nascita", right: "date of birth" }, { left: "il recapito telefonico", right: "contact number" }, { left: "il comune di residenza", right: "town of residence" }], explanation: "Form fields." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to book an eye test.", answer: "Vorrei prenotare una visita oculistica.", altAnswers: ["Vorrei prenotare una visita dall'oculista.", "Vorrei prenotare una visita oculistica, per favore."], explanation: "\"Visita\" + adjective of the specialism." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a referral from my GP.", answer: "Ho l'impegnativa del medico di base.", altAnswers: ["Ho un'impegnativa del mio medico di base.", "Ho l'impegnativa del mio medico.", "Ho l'impegnativa del medico di famiglia."], explanation: "\"L'impegnativa\" = referral." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there another date?", answer: "C'è un'altra data?", altAnswers: ["Ci sono altre date?", "Avete un'altra data?"], explanation: "\"Un'altra\": feminine, with apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where do you pay the co-payment?", answer: "Dove si paga il ticket?", altAnswers: ["Dove pago il ticket?", "Dove devo pagare il ticket?"], explanation: "Impersonal \"si paga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bring the referral and the health card. (formal)", answer: "Porti l'impegnativa e la tessera sanitaria.", altAnswers: ["Porti l'impegnativa e la tessera."], explanation: "Lei imperative \"porti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The visit is on the first floor, clinic 3.", answer: "La visita è al primo piano, ambulatorio 3.", altAnswers: ["La visita è al primo piano, ambulatorio tre.", "La visita si fa al primo piano, ambulatorio 3."], explanation: "\"Ambulatorio\" = clinic room." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can you give me] your tax code? (formal)", sentence: "___ il codice fiscale?", answer: "Mi dice", altAnswers: ["Mi può dire", "Mi potrebbe dire", "Mi dà"], explanation: "\"Mi dice ...?\": a polite present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I declare that [I have read] the privacy notice.", sentence: "Dichiaro di ___ l'informativa sulla privacy.", answer: "aver letto", altAnswers: ["avere letto"], explanation: "Past infinitive after \"dichiarare di\"." },
      { type: "word-order", prompt: "Put the words in order to say: Unfortunately I can't on Monday.", words: ["Purtroppo", "lunedì", "non", "posso."], translation: "Unfortunately I can't on Monday.", altOrders: [["Purtroppo", "non", "posso", "lunedì."]], explanation: "\"Non\" before the verb." },
      { type: "multiple-choice", question: "The form asks for \"Recapito telefonico\". What do you write?", options: ["your phone number", "your address", "your doctor's name", "your tax code"], correctIndex: 0, explanation: "\"Recapito\" = contact (details)." },
      { type: "dictation", audio: "La visita è il dodici novembre alle nove e quaranta.", explanation: "Times are said as hours + minutes." },
      { type: "speak", text: "Buongiorno, vorrei prenotare una visita dermatologica. Ho l'impegnativa con priorità D.", prompt: "Call the CUP: Good morning, I'd like to book a dermatology visit. I have a referral with priority D.", tip: "Say the letter D as \"di\".", explanation: "Booking line + referral details." },
    ],
  },
];

export const IT_B1_U26_WRITING: WriteExercise = {
  type: "write",
  prompt: "You've been ill and couldn't go to your Italian course this week. Write an email to your teacher: explain what's wrong and since when, what the doctor said and prescribed, what you have to do, and when you think you'll be back. Use Lei.",
  minWords: 80,
  maxWords: 140,
  rubric: [
    "Describes symptoms with da + present for what's still going on (ho la tosse da ...)",
    "Uses the passato prossimo for what happened (sono andato dal medico, mi ha prescritto ...)",
    "Reports instructions with devo / dovrò, va preso or Lei forms",
    "Uses health vocabulary correctly (mal di, mi fa male, il farmaco, la ricetta, il certificato)",
    "Writes to the teacher in Lei with a suitable greeting and closing",
  ],
  modelAnswer: "Gentile professoressa Russo, Le scrivo per scusarmi della mia assenza. Da lunedì ho la febbre e mi fa molto male la gola. Ieri sono andato dal medico di base, che mi ha visitato e ha detto che è una faringite. Mi ha prescritto un antibiotico per sei giorni: va preso dopo i pasti, due volte al giorno. Devo stare a riposo e bere molta acqua. Il medico mi ha fatto anche un certificato. Se tutto va bene, penso di tornare a lezione martedì prossimo. Potrebbe mandarmi i compiti per email? La ringrazio e Le porgo cordiali saluti. James Wright",
  explanation: "\"Da lunedì ho la febbre\" uses the present for an illness still going on; the visit and prescription are in the passato prossimo. \"Va preso dopo i pasti\" gives the instruction with \"andare\" + participle, and the email stays in \"Lei\" (\"Le scrivo\", \"Potrebbe\", \"La ringrazio\").",
};
