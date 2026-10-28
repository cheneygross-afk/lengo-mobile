// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u06-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 6 Extra Practice: Journalism. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U06_EXTRA: Lesson[] = [
  {
    slug: "c1-journalism-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Headlines",
    summary: "Fresh news to compress into Italian headlines: participles first, topic and comma, quotations with a colon.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Compress the news",
        body: [
          "Each item gives an event; write the headline. Patterns: participle first and agreeing (\"Ritrovato il cane\"), present tense verb first (\"Chiude lo storico cinema\"), topic + comma (\"Scuola, cambia il calendario\"), speaker + colon + «quotation».",
        ],
        examples: [
          { es: "Ritrovato il cane scomparso.", en: "Missing dog found." },
          { es: "Chiude lo storico cinema Astra.", en: "Historic Astra cinema closes." },
          { es: "Scuola, cambia il calendario.", en: "Schools: the calendar changes." },
          { es: "La preside: «Più ore di musica».", en: "Headteacher calls for more music lessons." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Missing dog found.", answer: "Ritrovato il cane scomparso.", altAnswers: ["Ritrovato il cane smarrito."], explanation: "Participle first, masculine singular." },
          { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Historic Astra cinema closes.", answer: "Chiude lo storico cinema Astra.", explanation: "Verb first; \"lo storico\" before s + consonant." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "New bike lane opened.", answer: "Inaugurata la nuova pista ciclabile.", altAnswers: ["Aperta la nuova pista ciclabile.", "Inaugurata una nuova pista ciclabile."], explanation: "Feminine to agree with \"la pista\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Two tourists rescued at sea.", answer: "Salvati due turisti in mare.", altAnswers: ["Soccorsi due turisti in mare."], explanation: "Masculine plural." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Concert cancelled because of rain.", answer: "Annullato il concerto per la pioggia.", altAnswers: ["Annullato il concerto per pioggia.", "Cancellato il concerto per la pioggia."], explanation: "\"Annullato\" agrees with \"il concerto\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Medieval frescoes discovered in a church.", answer: "Scoperti affreschi medievali in una chiesa.", altAnswers: ["Scoperti degli affreschi medievali in una chiesa."], explanation: "\"Scoperti\": masculine plural for \"affreschi\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline with topic + comma.", source: "Rents: prices up 10%.", answer: "Affitti, prezzi su del 10%.", altAnswers: ["Affitti, prezzi in aumento del 10%.", "Affitti: prezzi su del 10%.", "Affitti, aumentano i prezzi del 10%."], explanation: "\"Su del 10%\": headline shorthand for \"aumentati del 10%\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline with topic + comma.", source: "Football: Valbruna wins the derby.", answer: "Calcio, il Valbruna vince il derby.", altAnswers: ["Calcio: il Valbruna vince il derby.", "Calcio, il Valbruna si aggiudica il derby."], explanation: "Teams take the masculine article: \"il Valbruna\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline with a quotation.", source: "Headteacher calls for more music lessons.", answer: "La preside: «Più ore di musica».", altAnswers: ["La preside: \"Più ore di musica\".", "Il preside: «Più ore di musica»."], explanation: "Colon + quotation replaces the verb." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Bakery robbed, thief flees on a scooter.", answer: "Rapinata una panetteria, il ladro fugge in scooter.", altAnswers: ["Rapina in una panetteria, il ladro fugge in scooter.", "Rapinato un panificio, il ladro fugge in motorino."], explanation: "Participle + present tense verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "School trips [suspended].", sentence: "___ le gite scolastiche.", answer: "Sospese", explanation: "Feminine plural for \"le gite\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Town hall: mayor [resigns].", sentence: "Comune, si ___ il sindaco.", answer: "dimette", explanation: "\"Dimettersi\": present tense in headlines." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Health service: [three hundred doctors short].", sentence: "Sanità, ___.", answer: "mancano trecento medici", explanation: "\"Mancare\" agrees with the plural." },
      { type: "multiple-choice", question: "Which headline is correct?", options: ["Chiuse due scuole per neve.", "Chiuso due scuole per neve.", "Chiusi due scuole per neve.", "Chiusa due scuole per neve."], correctIndex: 0, explanation: "\"Le scuole\" is feminine plural: \"chiuse\"." },
      { type: "multiple-choice", question: "A headline over a slow-moving queue at the post office reads \"Chi va piano... aspetta\". Which saying does it bend?", options: ["Chi va piano va sano e va lontano.", "Chi cerca trova.", "Chi tace acconsente.", "Chi dorme non piglia pesci."], correctIndex: 0, explanation: "'Slow and steady', twisted for a queue." },
      { type: "listen-choose", audio: "Calcio, il Valbruna vince il derby all'ultimo minuto.", question: "What happened?", options: ["Valbruna won the derby in the last minute.", "Valbruna lost the derby.", "The derby was postponed.", "The derby ended in a draw."], correctIndex: 0, explanation: "\"All'ultimo minuto\" = in the last minute." },
      { type: "dictation", audio: "Inaugurata la nuova pista ciclabile lungo il fiume.", explanation: "Participle first, agreeing with \"la pista\"." },
      { type: "speak", text: "Scoperti affreschi medievali in una chiesa di Valbruna. La soprintendenza: «Una scoperta eccezionale».", prompt: "Read the headline and its quotation: Medieval frescoes discovered in a Valbruna church. The heritage office: 'An exceptional discovery.'", tip: "\"Affreschi\": double f; \"soprintendenza\" in five syllables.", explanation: "Participle headline + quotation." },
    ],
  },
  {
    slug: "c1-journalism-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Articles",
    summary: "Fresh news sentences for articles: unconfirmed facts in the conditional, precise attribution and reported futures.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Writing the body",
        body: [
          "These sentences come from invented articles about a theft at a museum, a factory closure and a festival. Confirmed facts go in the indicative, claims in the conditional, statements with a precise verb of saying, and futures reported from the past in the past conditional.",
        ],
        examples: [
          { es: "La polizia ha arrestato un custode del museo.", en: "The police have arrested a museum attendant." },
          { es: "L'uomo avrebbe disattivato l'allarme.", en: "The man allegedly switched off the alarm." },
          { es: "La direttrice ha precisato che nessuna opera era stata danneggiata.", en: "The director clarified that no work had been damaged." },
          { es: "Il sindaco ha annunciato che il festival sarebbe tornato in estate.", en: "The mayor announced that the festival would return in the summer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The man allegedly switched off the alarm.", answer: "L'uomo avrebbe disattivato l'allarme.", altAnswers: ["L'uomo avrebbe spento l'allarme."], explanation: "Past conditional with \"avere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The mayor announced that the festival would return in the summer.", answer: "Il sindaco ha annunciato che il festival sarebbe tornato in estate.", altAnswers: ["Il sindaco ha annunciato che il festival sarebbe tornato d'estate."], explanation: "Future in the past." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The police have arrested a museum attendant.", answer: "La polizia ha arrestato un custode del museo.", explanation: "Confirmed fact: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "Two paintings were reportedly hidden in a van.", answer: "Due quadri sarebbero stati nascosti in un furgone.", explanation: "Passive past conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The attendant allegedly had an accomplice.", answer: "Il custode avrebbe avuto un complice.", explanation: "\"Avrebbe avuto\": past conditional of \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The director clarified that no work had been damaged.", answer: "La direttrice ha precisato che nessuna opera era stata danneggiata.", altAnswers: ["La direttrice ha precisato che nessuna opera è stata danneggiata.", "Il direttore ha precisato che nessuna opera era stata danneggiata."], explanation: "Trapassato after a past verb of saying; the passato prossimo is also heard when the fact is still true." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The factory is reportedly about to lay off two hundred workers.", answer: "La fabbrica starebbe per licenziare duecento operai.", altAnswers: ["La fabbrica sarebbe sul punto di licenziare duecento operai.", "L'azienda starebbe per licenziare duecento operai."], explanation: "\"Stare per\" in the conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The unions announced that they would strike on Friday.", answer: "I sindacati hanno annunciato che avrebbero scioperato venerdì.", altAnswers: ["I sindacati hanno annunciato che sciopereranno venerdì."], explanation: "Future in the past; the future stays if Friday is still ahead." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The company denied the rumours.", answer: "L'azienda ha smentito le voci.", altAnswers: ["La società ha smentito le voci.", "L'azienda ha smentito le indiscrezioni."], explanation: "\"Smentire\" + the report." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "'We will fight for every job,' the union leader stressed.", answer: "«Lotteremo per ogni posto di lavoro», ha sottolineato il sindacalista.", altAnswers: ["\"Lotteremo per ogni posto di lavoro\", ha sottolineato il sindacalista.", "«Ci batteremo per ogni posto di lavoro», ha sottolineato il sindacalista."], explanation: "Quotation, then verb + subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[According to the investigators], the theft was planned for months.", sentence: "___, il furto sarebbe stato pianificato per mesi.", answer: "Secondo gli inquirenti", altAnswers: ["Per gli inquirenti", "A detta degli inquirenti"], explanation: "Source + conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The thieves [reportedly escaped] through the garden.", sentence: "I ladri ___ dal giardino.", answer: "sarebbero fuggiti", altAnswers: ["sarebbero scappati"], explanation: "\"Essere\" + plural participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The festival [will reportedly cost] two million.", sentence: "Il festival ___ due milioni.", answer: "costerebbe", explanation: "Present conditional: an unconfirmed figure." },
      {
        type: "word-order",
        prompt: "Put the words in order to say: An inquiry into the theft has been opened.",
        words: ["È", "stata", "aperta", "un'inchiesta", "sul", "furto."],
        translation: "An inquiry into the theft has been opened.",
        explanation: "Passive with the agent omitted.",
      },
      { type: "multiple-choice", question: "Which sentence states an unconfirmed claim correctly?", options: ["Il custode avrebbe avuto un complice.", "Il custode ha avuto sicuramente un complice.", "Il custode avrà avuto un complice, ha confermato la polizia.", "Il custode aveva un complice, è certo."], correctIndex: 0, explanation: "The journalistic conditional marks the claim as unconfirmed." },
      { type: "listen-choose", audio: "Secondo gli inquirenti, il furto sarebbe stato pianificato per mesi.", question: "What do investigators think?", options: ["The theft was planned for months.", "The theft was improvised.", "The thieves were caught after months.", "The museum was closed for months."], correctIndex: 0, explanation: "\"Pianificato per mesi\" = planned for months." },
      { type: "dictation", audio: "L'azienda ha smentito le voci di chiusura.", explanation: "\"Smentire\" = to deny." },
      { type: "speak", text: "Secondo gli inquirenti, il custode avrebbe disattivato l'allarme. La direttrice ha precisato che nessuna opera è stata danneggiata.", prompt: "Read the article's key lines: According to investigators, the attendant allegedly switched off the alarm. The director clarified that no work has been damaged.", tip: "Distinguish the doubtful \"avrebbe\" from the factual \"è stata\".", explanation: "Claim and fact side by side." },
    ],
  },
];
