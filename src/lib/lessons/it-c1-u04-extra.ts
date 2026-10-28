// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u04-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 4 Extra Practice: Bureaucratic Italian. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U04_EXTRA: Lesson[] = [
  {
    slug: "c1-burocratese-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Formulas",
    summary: "Fresh official texts to read and write with the fixed formulas of letters, notices and declarations.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Letters from the university",
        body: [
          "The texts in this practice come from an invented university's administration. Formulas to produce: \"con la presente\", \"si comunica che\", \"si fa presente che\", \"ai sensi di\", \"entro e non oltre\", \"a decorrere dal\", \"previa\", \"in allegato\", \"il / la sottoscritto/a\".",
        ],
        examples: [
          { es: "Con la presente si comunica che la Sua domanda di borsa di studio è stata accolta.", en: "We hereby inform you that your scholarship application has been accepted." },
          { es: "Si fa presente che le lezioni inizieranno a decorrere dal 2 ottobre.", en: "Please note that lessons will begin from 2 October." },
          { es: "L'iscrizione sarà perfezionata previa verifica del pagamento.", en: "Enrolment will be completed once payment has been verified." },
          { es: "In allegato trova il calendario degli esami.", en: "Please find the exam timetable attached." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into official Italian.", source: "We hereby inform you that your scholarship application has been accepted.", answer: "Con la presente si comunica che la Sua domanda di borsa di studio è stata accolta.", altAnswers: ["Con la presente Le comunichiamo che la Sua domanda di borsa di studio è stata accolta."], explanation: "\"Accogliere una domanda\" = to accept an application." },
          { type: "translate", direction: "en-es", prompt: "Translate into official Italian.", source: "Please find the exam timetable attached.", answer: "In allegato trova il calendario degli esami.", altAnswers: ["In allegato il calendario degli esami.", "Si allega il calendario degli esami."], explanation: "\"In allegato trova\" with Lei." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into official Italian.", source: "Please note that lessons will begin from 2 October.", answer: "Si fa presente che le lezioni inizieranno a decorrere dal 2 ottobre.", altAnswers: ["Si fa presente che le lezioni inizieranno a partire dal 2 ottobre.", "Si fa presente che le lezioni inizieranno dal 2 ottobre."], explanation: "\"Si fa presente che\" + \"a decorrere dal\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into official Italian.", source: "Enrolment will be completed once payment has been verified.", answer: "L'iscrizione sarà perfezionata previa verifica del pagamento.", altAnswers: ["L'iscrizione sarà completata previa verifica del pagamento."], explanation: "\"Previa\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into official Italian.", source: "Fees must be paid by 31 October at the latest.", answer: "Le tasse vanno pagate entro e non oltre il 31 ottobre.", altAnswers: ["Le tasse devono essere pagate entro e non oltre il 31 ottobre.", "Le tasse dovranno essere versate entro e non oltre il 31 ottobre."], explanation: "\"Entro e non oltre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into official Italian.", source: "Under the university regulations, attendance is compulsory.", answer: "Ai sensi del regolamento di ateneo, la frequenza è obbligatoria.", altAnswers: ["Ai sensi del regolamento d'ateneo, la frequenza è obbligatoria.", "Ai sensi del regolamento universitario, la frequenza è obbligatoria."], explanation: "\"Ai sensi di\"; \"frequenza\" = attendance." },
      { type: "translate", direction: "en-es", prompt: "Translate into official Italian (a man writing).", source: "I, the undersigned, request the issuing of a certificate of enrolment.", answer: "Il sottoscritto chiede il rilascio di un certificato di iscrizione.", altAnswers: ["Io sottoscritto chiedo il rilascio di un certificato di iscrizione.", "Il sottoscritto chiede il rilascio del certificato di iscrizione."], explanation: "\"Il sottoscritto chiede\" or \"Io sottoscritto chiedo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into official Italian.", source: "With reference to your email of 5 May, we confirm the appointment.", answer: "In riferimento alla Sua email del 5 maggio, Le confermiamo l'appuntamento.", altAnswers: ["Con riferimento alla Sua email del 5 maggio, Le confermiamo l'appuntamento.", "In riferimento alla Sua e-mail del 5 maggio, Le confermiamo l'appuntamento."], explanation: "\"In riferimento a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In compliance with] the new rules, the library will close at 8 p.m.", sentence: "___ nuove norme, la biblioteca chiuderà alle 20.", answer: "In ottemperanza alle", altAnswers: ["In conformità con le"], explanation: "\"In ottemperanza a\" + article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Incomplete forms will not be accepted, [on pain of exclusion].", sentence: "I moduli incompleti non saranno accettati, ___.", answer: "pena l'esclusione", explanation: "\"Pena\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We would like to inform you that] the office is moving.", sentence: "___ l'ufficio si trasferisce.", answer: "Si comunica che", altAnswers: ["Si rende noto che", "Si informa che"], explanation: "Impersonal notice opening." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sign [at the bottom of the page].", sentence: "Firmare ___.", answer: "in calce", explanation: "\"In calce\" = at the bottom." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Yours faithfully], Paolo Neri.", sentence: "___, Paolo Neri.", answer: "In fede", altAnswers: ["Distinti saluti", "Cordiali saluti"], explanation: "\"In fede\" closes declarations." },
      { type: "multiple-choice", question: "Which formula introduces an important condition?", options: ["Si fa presente che", "Cordiali saluti", "In calce", "Il sottoscritto"], correctIndex: 0, explanation: "\"Si fa presente che\" = please note that." },
      {
        type: "matching",
        instructions: "Match the formula to its meaning.",
        pairs: [
          { left: "previa verifica", right: "subject to verification" },
          { left: "con la presente", right: "with this letter" },
          { left: "ai sensi di", right: "under, pursuant to" },
          { left: "a decorrere dal", right: "with effect from" },
          { left: "in fede", right: "yours faithfully" },
        ],
        explanation: "Formulas of official letters.",
      },
      { type: "listen-choose", audio: "L'iscrizione sarà perfezionata previa verifica del pagamento.", question: "When will enrolment be complete?", options: ["After payment is checked", "Before payment", "Immediately", "Never"], correctIndex: 0, explanation: "\"Previa verifica\" = after checking." },
      { type: "dictation", audio: "Si fa presente che la frequenza è obbligatoria.", explanation: "\"Si fa presente che\": please note." },
      { type: "speak", text: "Con la presente si comunica che le lezioni inizieranno a decorrere dal 2 ottobre.", prompt: "Read the notice aloud: We hereby inform you that lessons will begin from 2 October.", tip: "\"Decorrere\": double r.", explanation: "Two formulas in one sentence." },
    ],
  },
  {
    slug: "c1-burocratese-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Plain Rewrites",
    summary: "Fresh bureaucratic sentences to rewrite in clear, polite Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "From the condominio and the comune",
        body: [
          "Each item gives a bureaucratic original from an invented notice; write the plain version. Moves: verb for noun, visible actor, everyday word, short sentence, Lei or voi kept polite.",
        ],
        examples: [
          { es: "È fatto divieto di depositare oggetti nel vano scale. → Non lasciate oggetti sulle scale.", en: "Do not leave objects on the stairs." },
          { es: "Si procederà alla sospensione dell'erogazione idrica. → Chiuderemo l'acqua.", en: "We will turn off the water." },
          { es: "L'utenza è pregata di munirsi di documento. → Portate un documento.", en: "Please bring an ID document." },
          { es: "In data odierna è pervenuta la Sua istanza. → Oggi abbiamo ricevuto la Sua richiesta.", en: "We received your request today." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite \"È fatto divieto di depositare oggetti nel vano scale\" plainly (voi): Do not leave objects on the stairs.", source: "Do not leave objects on the stairs.", answer: "Non lasciate oggetti sulle scale.", altAnswers: ["Per favore, non lasciate oggetti sulle scale.", "Vi preghiamo di non lasciare oggetti sulle scale."], explanation: "Negative voi imperative." },
          { type: "translate", direction: "en-es", prompt: "Rewrite \"In data odierna è pervenuta la Sua istanza\" plainly: We received your request today.", source: "We received your request today.", answer: "Oggi abbiamo ricevuto la Sua richiesta.", altAnswers: ["Abbiamo ricevuto oggi la Sua richiesta.", "Oggi abbiamo ricevuto la sua richiesta."], explanation: "Visible actor, everyday words." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Si procederà alla sospensione dell'erogazione idrica dalle ore 9 alle ore 12\" plainly: We will turn off the water from 9 to 12.", source: "We will turn off the water from 9 to 12.", answer: "Chiuderemo l'acqua dalle 9 alle 12.", altAnswers: ["L'acqua sarà chiusa dalle 9 alle 12.", "Toglieremo l'acqua dalle 9 alle 12."], explanation: "\"Chiudere l'acqua\" for \"sospensione dell'erogazione idrica\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"L'utenza è pregata di munirsi di documento di riconoscimento\" plainly (voi): Please bring an ID document.", source: "Please bring an ID document.", answer: "Per favore, portate un documento di identità.", altAnswers: ["Portate un documento di identità.", "Vi preghiamo di portare un documento di identità.", "Per favore, portate un documento d'identità."], explanation: "\"Portare\" for \"munirsi di\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Il mancato rispetto delle disposizioni comporterà sanzioni\" plainly (voi): If you don't follow the rules, you will be fined.", source: "If you don't follow the rules, you will be fined.", answer: "Se non rispettate le regole, riceverete una multa.", altAnswers: ["Se non rispettate le regole, dovrete pagare una multa.", "Se non rispettate le regole, sarete multati."], explanation: "\"Se\" + verb." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Si rende noto che è stata disposta la chiusura del parco\" plainly: The park is closed.", source: "The park is closed.", answer: "Il parco è chiuso.", altAnswers: ["Abbiamo chiuso il parco."], explanation: "Four words do the job." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Si invita la cittadinanza a provvedere alla rimozione dei veicoli\" plainly (voi): Please move your cars.", source: "Please move your cars.", answer: "Per favore, spostate le auto.", altAnswers: ["Spostate le auto, per favore.", "Vi preghiamo di spostare le auto.", "Per favore, spostate le macchine."], explanation: "\"Spostare\" for \"provvedere alla rimozione\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Il pagamento dovrà essere effettuato presso gli sportelli abilitati\" plainly (Lei): You can pay at the authorised counters.", source: "You can pay at the authorised counters.", answer: "Può pagare agli sportelli autorizzati.", altAnswers: ["Può pagare presso gli sportelli autorizzati.", "Deve pagare agli sportelli autorizzati."], explanation: "Active verb, Lei." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Si comunica che l'ufficio è stato trasferito\" plainly: Our office has moved.", source: "Our office has moved.", answer: "Il nostro ufficio si è trasferito.", altAnswers: ["Abbiamo trasferito l'ufficio.", "Ci siamo trasferiti."], explanation: "\"Trasferirsi\" = to move." },
      { type: "fill-blank", prompt: "Rewrite in plain Italian. Write the Italian for the bold word.", en: "\"Recarsi\" = to [go]", sentence: "___", answer: "andare", explanation: "The everyday verb." },
      { type: "fill-blank", prompt: "Rewrite in plain Italian. Write the Italian for the bold word.", en: "\"Munirsi di\" = to [bring]", sentence: "___", answer: "portare", altAnswers: ["prendere"], explanation: "Everyday verb." },
      { type: "fill-blank", prompt: "Rewrite in plain Italian. Write the Italian for the bold word.", en: "\"Effettuare un acquisto\" = to [buy]", sentence: "___", answer: "comprare", altAnswers: ["acquistare"], explanation: "One verb." },
      { type: "fill-blank", prompt: "Rewrite in plain Italian. Write the Italian for the bold word.", en: "\"Dare inizio a\" = to [start]", sentence: "___", answer: "iniziare", altAnswers: ["cominciare"], explanation: "One verb." },
      { type: "fill-blank", prompt: "Rewrite in plain Italian. Write the Italian for the bold words.", en: "The water will be turned off [tomorrow morning].", sentence: "L'acqua sarà chiusa ___.", answer: "domani mattina", altAnswers: ["domattina"], explanation: "Not \"nella mattinata di domani\"." },
      { type: "multiple-choice", question: "Which is the best plain rewrite of \"Si prega di voler provvedere al ritiro della corrispondenza\"?", options: ["Per favore, ritirate la posta.", "Si prega di ritirare la corrispondenza in data odierna.", "Ritira la posta!", "La corrispondenza è da ritirare previa verifica."], correctIndex: 0, explanation: "Clear, polite, plain." },
      { type: "listen-choose", audio: "Chiuderemo l'acqua dalle 9 alle 12.", question: "What will happen?", options: ["The water will be off from 9 to 12.", "The office will close from 9 to 12.", "The water will be free from 9 to 12.", "The lift will stop."], correctIndex: 0, explanation: "\"Chiudere l'acqua\" = to turn off the water." },
      { type: "dictation", audio: "Per favore, spostate le auto entro le otto.", explanation: "Plain voi imperative." },
      { type: "speak", text: "Domani mattina chiuderemo l'acqua dalle 9 alle 12. Ci scusiamo per il disagio.", prompt: "Announce it plainly to the residents: Tomorrow morning we'll turn the water off from 9 to 12. We apologise for the inconvenience.", tip: "Two short sentences.", explanation: "Plain and polite." },
    ],
  },
];
