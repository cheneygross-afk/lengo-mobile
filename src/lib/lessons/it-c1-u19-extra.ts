// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u19-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 19 Extra Practice: CILS TRE Lab. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md). All texts are
// invented.
export const IT_C1_U19_EXTRA: Lesson[] = [
  {
    slug: "c1-cils-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: More Listening and Reading",
    summary: "One more exam-format listening (a voicemail and an announcement) and one more reading (a short opinion piece), with comprehension and translation.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Listening: two short recordings",
        body: [
          "Recording 1, a voicemail: \"Buongiorno, sono Chiara Lodi dello studio Ferraresi. La chiamo perché l'appuntamento di giovedì va spostato: il dottore sarà fuori sede. Le proponiamo venerdì alle 9.30 oppure lunedì pomeriggio. Mi richiami quando può, grazie.\"",
          "Recording 2, a station announcement: \"Si avvisano i signori viaggiatori che il treno regionale delle 18.12 per Bergamo partirà con un ritardo di circa venti minuti a causa di un guasto alla linea. Ci scusiamo per il disagio.\" Note \"si avvisano i signori viaggiatori\" (passengers are advised) and \"ci scusiamo per il disagio\".",
        ],
        examples: [
          { es: "L'appuntamento di giovedì va spostato.", en: "Thursday's appointment has to be moved." },
          { es: "Il dottore sarà fuori sede.", en: "The doctor will be away from the office." },
          { es: "Mi richiami quando può.", en: "Call me back when you can." },
          { es: "Il treno partirà con un ritardo di circa venti minuti.", en: "The train will leave about twenty minutes late." },
          { es: "Ci scusiamo per il disagio.", en: "We apologize for the inconvenience." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Le proponiamo venerdì alle nove e mezza oppure lunedì pomeriggio.", question: "What new times are offered?", options: ["Friday at 9:30 or Monday afternoon", "Thursday at 9:30 or Friday afternoon", "Monday morning only", "Friday afternoon or Monday at 9:30"], correctIndex: 0, explanation: "Two alternatives with \"oppure\"." },
          { type: "listen-choose", audio: "Il treno per Bergamo partirà con un ritardo di circa venti minuti a causa di un guasto alla linea.", question: "Why is the train late?", options: ["A fault on the line", "A strike", "Bad weather", "Too many passengers"], correctIndex: 0, explanation: "\"Un guasto alla linea\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We apologize for the inconvenience.", answer: "Ci scusiamo per il disagio.", altAnswers: ["Ci scusiamo per l'inconveniente."], explanation: "Fixed announcement formula." },
        ],
      },
      {
        heading: "Reading: an opinion piece",
        body: [
          "\"Ogni estate si riapre il dibattito sui compiti delle vacanze. C'è chi li considera indispensabili per non perdere il ritmo, e chi li vede come un'invasione del tempo libero. A ben vedere, il problema non è la quantità, ma la natura dei compiti: tre mesi di esercizi ripetitivi spengono la curiosità; un libro scelto liberamente e un diario di viaggio, invece, la nutrono.\"",
          "\"A ben vedere\" means 'on closer inspection'; it introduces the writer's own view. The final antithesis (\"spengono... nutrono\") carries the thesis.",
        ],
        examples: [
          { es: "Ogni estate si riapre il dibattito sui compiti delle vacanze.", en: "Every summer the debate on vacation homework reopens." },
          { es: "C'è chi li considera indispensabili.", en: "Some consider them essential." },
          { es: "A ben vedere, il problema non è la quantità.", en: "On closer inspection, the problem isn't the amount." },
          { es: "Gli esercizi ripetitivi spengono la curiosità.", en: "Repetitive exercises kill curiosity." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is the writer's view?", options: ["The type of homework matters more than the amount.", "Vacation homework should be abolished.", "More homework is always better.", "Only reading should be banned."], correctIndex: 0, explanation: "\"Il problema non è la quantità, ma la natura\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On closer inspection, the problem isn't the amount.", answer: "A ben vedere, il problema non è la quantità.", altAnswers: ["A ben vedere il problema non è la quantità.", "A guardar bene, il problema non è la quantità."], explanation: "\"A ben vedere\" introduces the writer's view." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Why must the appointment be moved?", options: ["The doctor will be away.", "The patient is ill.", "The office is closing.", "There was a double booking."], correctIndex: 0, explanation: "\"Il dottore sarà fuori sede\"." },
      { type: "multiple-choice", question: "What does a book chosen freely do, according to the writer?", options: ["It feeds curiosity.", "It wastes time.", "It replaces school.", "It tires children."], correctIndex: 0, explanation: "\"La nutrono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thursday's appointment has to be moved.", answer: "L'appuntamento di giovedì va spostato.", altAnswers: ["L'appuntamento di giovedì deve essere spostato."], explanation: "\"Andare\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (Lei).", source: "Call me back when you can.", answer: "Mi richiami quando può.", altAnswers: ["Mi richiami quando le è possibile.", "Mi richiami appena può."], explanation: "\"Lei\" imperative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train will leave about twenty minutes late.", answer: "Il treno partirà con un ritardo di circa venti minuti.", altAnswers: ["Il treno partirà con circa venti minuti di ritardo."], explanation: "\"Con un ritardo di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Passengers are advised that the train is late.", answer: "Si avvisano i signori viaggiatori che il treno è in ritardo.", altAnswers: ["Si avvisano i viaggiatori che il treno è in ritardo.", "Si informano i signori viaggiatori che il treno è in ritardo."], explanation: "Impersonal \"si\" + plural verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every summer the debate on vacation homework reopens.", answer: "Ogni estate si riapre il dibattito sui compiti delle vacanze.", altAnswers: ["Ogni estate si riapre il dibattito sui compiti per le vacanze."], explanation: "\"Riaprirsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Repetitive exercises kill curiosity.", answer: "Gli esercizi ripetitivi spengono la curiosità.", altAnswers: ["Gli esercizi ripetitivi uccidono la curiosità."], explanation: "\"Spegnere\" = to put out." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The doctor will be [away from the office].", sentence: "Il dottore sarà ___.", answer: "fuori sede", explanation: "\"Fuori sede\" = away, off-site." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Some] consider them essential.", sentence: "___ li considera indispensabili.", answer: "C'è chi", explanation: "\"C'è chi\" + singular verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A delay due to [a fault on the line].", sentence: "Un ritardo dovuto a ___.", answer: "un guasto alla linea", explanation: "\"Guasto\" = breakdown, fault." },
      { type: "word-order", prompt: "Put the words in order to say: We apologize for the inconvenience.", words: ["Ci", "scusiamo", "per", "il", "disagio."], translation: "We apologize for the inconvenience.", explanation: "Announcement formula." },
      { type: "multiple-choice", question: "\"A ben vedere\" introduces ...", options: ["the writer's own view after closer thought", "a quotation", "an example from abroad", "a question to the reader"], correctIndex: 0, explanation: "On closer inspection." },
      { type: "dictation", audio: "Ci scusiamo per il disagio.", explanation: "Fixed formula." },
      { type: "speak", text: "Buongiorno, la chiamo perché l'appuntamento di giovedì va spostato. Mi richiami quando può, grazie.", prompt: "Leave the voicemail: Good morning, I'm calling because Thursday's appointment has to be moved. Call me back when you can, thank you.", tip: "Clear, calm voicemail tone.", explanation: "Formal phone message." },
    ],
  },
  {
    slug: "c1-cils-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: More Writing",
    summary: "Two more exam-format writing tasks: a formal email of request and a short argumentative paragraph, with model sentences to reuse.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Task A: a formal request",
        body: [
          "Task: \"Scriva un'email all'ufficio relazioni internazionali della sua università per chiedere informazioni su un periodo di studio all'estero.\" Model lines: \"Gentili responsabili, sono iscritta al secondo anno del corso di laurea in Economia e vorrei ricevere alcune informazioni sul programma di scambio. In particolare, vorrei sapere quali siano i requisiti linguistici e se sia previsto un contributo per l'alloggio. Vi ringrazio anticipatamente per la disponibilità.\"",
          "Indirect questions in formal writing take the subjunctive: \"vorrei sapere quali siano\", \"se sia previsto\". \"Vi ringrazio anticipatamente\" (thank you in advance) closes a request politely.",
        ],
        examples: [
          { es: "Sono iscritta al secondo anno del corso di laurea in Economia.", en: "I'm a second-year economics student." },
          { es: "Vorrei sapere quali siano i requisiti linguistici.", en: "I'd like to know what the language requirements are." },
          { es: "Vorrei sapere se sia previsto un contributo per l'alloggio.", en: "I'd like to know whether there's a housing allowance." },
          { es: "Vi ringrazio anticipatamente per la disponibilità.", en: "Thank you in advance for your help." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal).", source: "I'd like to know what the language requirements are.", answer: "Vorrei sapere quali siano i requisiti linguistici.", altAnswers: ["Vorrei sapere quali sono i requisiti linguistici."], explanation: "Formal indirect question: subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you in advance for your help.", answer: "Vi ringrazio anticipatamente per la disponibilità.", altAnswers: ["La ringrazio anticipatamente per la disponibilità.", "Ringrazio anticipatamente per la disponibilità.", "Vi ringrazio in anticipo per la disponibilità."], explanation: "\"Disponibilità\" = willingness to help." },
          { type: "listen-choose", audio: "Vorrei sapere se sia previsto un contributo per l'alloggio.", question: "What is the student asking about?", options: ["Housing allowance", "Course fees", "Exam dates", "Language courses"], correctIndex: 0, explanation: "\"Contributo per l'alloggio\"." },
        ],
      },
      {
        heading: "Task B: an argumentative paragraph",
        body: [
          "Task: \"Il voto a sedici anni: è giusto abbassare l'età per votare?\" Model paragraph: \"Chi è contrario sostiene che a sedici anni manchi la maturità necessaria. Tuttavia, a quell'età molti ragazzi lavorano, pagano le tasse e seguono l'attualità più degli adulti. Se potessero votare, i partiti sarebbero costretti a occuparsi anche di scuola, lavoro giovanile e clima.\"",
          "Note \"sostiene che manchi\" (subjunctive after a reported opinion you don't share), the counter-argument with \"tuttavia\", and a second conditional (\"se potessero... sarebbero\") to show consequences.",
        ],
        examples: [
          { es: "Chi è contrario sostiene che a sedici anni manchi la maturità.", en: "Those against it argue that sixteen-year-olds lack maturity." },
          { es: "A quell'età molti ragazzi pagano le tasse.", en: "At that age many young people pay taxes." },
          { es: "Se potessero votare, i partiti sarebbero costretti a occuparsene.", en: "If they could vote, parties would be forced to deal with it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they could vote, parties would be forced to deal with it.", answer: "Se potessero votare, i partiti sarebbero costretti a occuparsene.", altAnswers: ["Se potessero votare i partiti sarebbero costretti a occuparsene."], explanation: "Second conditional; \"occuparsene\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Those against it argue that sixteen-year-olds [lack] maturity.", sentence: "Chi è contrario sostiene che a sedici anni ___ la maturità.", answer: "manchi", explanation: "Subjunctive after a reported opinion." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (a woman writing).", source: "I'm a second-year economics student.", answer: "Sono iscritta al secondo anno del corso di laurea in Economia.", altAnswers: ["Sono iscritta al secondo anno di Economia.", "Sono una studentessa del secondo anno di Economia."], explanation: "\"Essere iscritto a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (formal).", source: "I'd like to know whether there's a housing allowance.", answer: "Vorrei sapere se sia previsto un contributo per l'alloggio.", altAnswers: ["Vorrei sapere se è previsto un contributo per l'alloggio."], explanation: "\"Se\" + subjunctive in formal writing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At that age many young people pay taxes.", answer: "A quell'età molti ragazzi pagano le tasse.", altAnswers: ["A quell'età molti giovani pagano le tasse."], explanation: "\"Quell'età\": elision." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They follow current affairs more than adults.", answer: "Seguono l'attualità più degli adulti.", altAnswers: ["Seguono l'attualità più degli adulti stessi.", "Seguono l'attualità più di quanto facciano gli adulti."], explanation: "\"L'attualità\" = current affairs (false friend)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to receive some information about the exchange program.", answer: "Vorrei ricevere alcune informazioni sul programma di scambio.", altAnswers: ["Vorrei ricevere qualche informazione sul programma di scambio.", "Vorrei avere alcune informazioni sul programma di scambio."], explanation: "\"Informazioni\" is plural in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it right to lower the voting age?", answer: "È giusto abbassare l'età per votare?", altAnswers: ["È giusto abbassare l'età del voto?", "È giusto abbassare l'età per il voto?"], explanation: "Exam question format." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Those against it argue that they lack maturity.", answer: "Chi è contrario sostiene che manchi loro la maturità.", altAnswers: ["Chi è contrario sostiene che gli manchi la maturità.", "Chi è contrario sostiene che non abbiano la maturità."], explanation: "\"Mancare a qualcuno\"; subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In particular], I'd like to know the deadlines.", sentence: "___, vorrei conoscere le scadenze.", answer: "In particolare", explanation: "Focusing a request." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Parties [would be forced] to deal with school.", sentence: "I partiti ___ a occuparsi di scuola.", answer: "sarebbero costretti", explanation: "Conditional + \"costretto a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Dear Sir or Madam], (to an office)", sentence: "___ responsabili,", answer: "Gentili", altAnswers: ["Spettabili"], explanation: "Plural formal greeting." },
      { type: "word-order", prompt: "Put the words in order to say: Thank you in advance for your help.", words: ["Vi", "ringrazio", "anticipatamente", "per", "la", "disponibilità."], translation: "Thank you in advance for your help.", explanation: "Closing a request." },
      { type: "multiple-choice", question: "Which is the most formal way to ask in writing?", options: ["Vorrei sapere quali siano i requisiti.", "Ditemi i requisiti.", "Quali sono i requisiti, eh?", "Mi dite i requisiti?"], correctIndex: 0, explanation: "Conditional + subjunctive indirect question." },
      { type: "multiple-choice", question: "\"L'attualità\" means ...", options: ["current affairs", "reality", "actuality", "the present tense"], correctIndex: 0, explanation: "A false friend." },
      { type: "dictation", audio: "Vi ringrazio anticipatamente per la disponibilità.", explanation: "Formal closing." },
      { type: "speak", text: "Se potessero votare, i partiti sarebbero costretti a occuparsi anche di scuola e di lavoro giovanile.", prompt: "Make the argument: If they could vote, parties would be forced to deal with schools and youth employment too.", tip: "\"potessero\": double s.", explanation: "Second conditional in an argument." },
    ],
  },
];
