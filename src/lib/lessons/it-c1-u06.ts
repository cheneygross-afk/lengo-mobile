// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u06.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian C1 Unit 6: Journalism. The journalistic conditional, headline
// syntax, quoting and attribution, the opinion column voice, irony and allusion.
// All newspapers, towns and people in the news items are invented.
// Conventions: docs/italian-course/authoring.md.
export const IT_C1_U06: Lesson[] = [
  {
    slug: "c1-news-conditional",
    level: "IT-C1",
    number: 1,
    title: "The Journalistic Conditional",
    summary: "Report unconfirmed news with the conditional: sarebbe in arrivo, avrebbe dichiarato, sarebbe fuggito, with the sources that go with it.",
    duration: "19 min",
    sections: [
      {
        heading: "Present news, not yet confirmed",
        body: [
          "Italian news uses the conditional for information the journalist has not verified. It isn't a hypothesis with \"se\": it means 'reportedly' or 'allegedly'. \"Il sindaco sarebbe pronto a dimettersi\" means the mayor is reportedly ready to resign; the newspaper passes on the claim without taking responsibility for it.",
          "For a present or future situation, use the present conditional: \"sarebbe in arrivo un nuovo decreto\" (a new decree is said to be on its way), \"i lavori costerebbero il doppio\" (the works would reportedly cost twice as much). English needs a word like 'reportedly', 'allegedly' or 'is said to'; Italian needs only the verb form.",
        ],
        examples: [
          { es: "Il sindaco sarebbe pronto a dimettersi.", en: "The mayor is reportedly ready to resign." },
          { es: "Sarebbe in arrivo un nuovo decreto sugli affitti.", en: "A new decree on rents is said to be on its way." },
          { es: "I lavori costerebbero il doppio del previsto.", en: "The works would reportedly cost twice as much as planned." },
          { es: "La società starebbe trattando con un acquirente straniero.", en: "The company is allegedly negotiating with a foreign buyer." },
          { es: "Le vittime sarebbero almeno tre.", en: "There are reported to be at least three victims." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The mayor is reportedly ready to resign.", answer: "Il sindaco sarebbe pronto a dimettersi.", altAnswers: ["Il sindaco sarebbe pronto a dare le dimissioni.", "Il sindaco sarebbe disposto a dimettersi."], explanation: "The conditional \"sarebbe\" carries 'reportedly'." },
          { type: "multiple-choice", question: "In a newspaper, \"Le vittime sarebbero tre\" means ...", options: ["there are reportedly three victims", "there would be three victims if...", "there will be three victims", "there were three victims, confirmed"], correctIndex: 0, explanation: "The journalistic conditional marks unverified information." },
        ],
      },
      {
        heading: "Past events: the past conditional",
        body: [
          "For an unconfirmed past event, use the past conditional: \"il ladro sarebbe entrato dalla finestra\" (the thief allegedly got in through the window), \"l'uomo avrebbe rubato due quadri\" (the man allegedly stole two paintings). The auxiliary is the same as in the passato prossimo: \"è fuggito\" → \"sarebbe fuggito\", \"ha dichiarato\" → \"avrebbe dichiarato\".",
          "This form is common in crime and political reporting, where it protects the newspaper: until a court decides, a suspect only \"avrebbe\" done something. The passive works the same way: \"il ponte sarebbe stato costruito senza autorizzazione\".",
        ],
        examples: [
          { es: "Il ladro sarebbe entrato dalla finestra del bagno.", en: "The thief allegedly got in through the bathroom window." },
          { es: "L'uomo avrebbe rubato due quadri.", en: "The man allegedly stole two paintings." },
          { es: "I due sarebbero fuggiti in moto.", en: "The two reportedly fled on a motorbike." },
          { es: "Il ponte sarebbe stato costruito senza autorizzazione.", en: "The bridge was allegedly built without permission." },
          { es: "L'assessore avrebbe ricevuto pressioni.", en: "The councillor was reportedly put under pressure." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The two reportedly fled on a motorbike.", answer: "I due sarebbero fuggiti in moto.", altAnswers: ["I due sarebbero scappati in moto.", "I due sarebbero fuggiti in motocicletta."], explanation: "\"Fuggire\" takes \"essere\": \"sarebbero fuggiti\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The man [allegedly stole] two paintings.", sentence: "L'uomo ___ due quadri.", answer: "avrebbe rubato", explanation: "Past conditional with \"avere\"." },
        ],
      },
      {
        heading: "Naming the source",
        body: [
          "The conditional usually comes with a vague source: \"secondo fonti vicine al governo\" (according to sources close to the government), \"secondo indiscrezioni\" (according to leaks), \"stando a quanto riferito\" (according to what has been reported), \"a quanto si apprende\" (from what we understand). With \"secondo\" the conditional is still normal: the two reinforce each other.",
          "When the fact is confirmed, the newspaper switches to the indicative: \"La polizia ha confermato che il ladro è entrato dalla finestra\". Mixing the two in one article is normal: confirmed facts in the indicative, claims in the conditional.",
        ],
        examples: [
          { es: "Secondo fonti vicine al governo, il decreto slitterebbe a settembre.", en: "According to sources close to the government, the decree may be postponed to September." },
          { es: "Stando a quanto riferito, l'incendio sarebbe partito da una cucina.", en: "According to reports, the fire started in a kitchen." },
          { es: "A quanto si apprende, i feriti non sarebbero gravi.", en: "From what we understand, the injured are not in a serious condition." },
          { es: "La polizia ha confermato l'arresto.", en: "The police have confirmed the arrest." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "According to reports, the fire started in a kitchen.", answer: "Stando a quanto riferito, l'incendio sarebbe partito da una cucina.", altAnswers: ["Secondo quanto riferito, l'incendio sarebbe partito da una cucina.", "Stando a quanto riferito, l'incendio sarebbe scoppiato in una cucina."], explanation: "Vague source + past conditional." },
          { type: "translate", direction: "en-es", prompt: "Translate as a news report (confirmed).", source: "The police have confirmed the arrest.", answer: "La polizia ha confermato l'arresto.", explanation: "Confirmed fact: indicative." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "A new decree on rents is said to be on its way.", answer: "Sarebbe in arrivo un nuovo decreto sugli affitti.", altAnswers: ["Un nuovo decreto sugli affitti sarebbe in arrivo."], explanation: "\"Essere in arrivo\" in the conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The company is allegedly negotiating with a foreign buyer.", answer: "La società starebbe trattando con un acquirente straniero.", altAnswers: ["L'azienda starebbe trattando con un acquirente straniero.", "La società tratterebbe con un acquirente straniero."], explanation: "\"Stare\" + gerund in the conditional: an ongoing, unconfirmed action." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The thief allegedly got in through the bathroom window.", answer: "Il ladro sarebbe entrato dalla finestra del bagno.", altAnswers: ["Il ladro sarebbe entrato attraverso la finestra del bagno."], explanation: "\"Entrare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The bridge was allegedly built without permission.", answer: "Il ponte sarebbe stato costruito senza autorizzazione.", altAnswers: ["Il ponte sarebbe stato costruito senza permesso."], explanation: "Passive past conditional: \"sarebbe stato\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "From what we understand, the injured are not in a serious condition.", answer: "A quanto si apprende, i feriti non sarebbero gravi.", altAnswers: ["A quanto si apprende, i feriti non sarebbero in gravi condizioni.", "Da quanto si apprende, i feriti non sarebbero gravi."], explanation: "\"A quanto si apprende\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The works would reportedly cost twice as much as planned.", answer: "I lavori costerebbero il doppio del previsto.", altAnswers: ["I lavori costerebbero il doppio di quanto previsto."], explanation: "\"Il doppio del previsto\" = twice what was planned." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The councillor was reportedly put under pressure.", answer: "L'assessore avrebbe ricevuto pressioni.", altAnswers: ["L'assessore avrebbe subito pressioni.", "L'assessore sarebbe stato sottoposto a pressioni."], explanation: "\"Ricevere pressioni\" = to be put under pressure." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[According to leaks], the coach will leave the team.", sentence: "___, l'allenatore lascerebbe la squadra.", answer: "Secondo indiscrezioni", altAnswers: ["Stando a indiscrezioni"], explanation: "\"Indiscrezioni\" = leaks, rumours." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The suspect [allegedly fled] abroad.", sentence: "Il sospettato ___ all'estero.", answer: "sarebbe fuggito", altAnswers: ["sarebbe scappato"], explanation: "\"Fuggire\" with \"essere\"." },
      { type: "multiple-choice", question: "Which sentence presents the information as confirmed?", options: ["La polizia ha arrestato il sospettato.", "Il sospettato sarebbe stato arrestato.", "Secondo indiscrezioni, il sospettato sarebbe in carcere.", "Il sospettato avrebbe confessato."], correctIndex: 0, explanation: "The indicative \"ha arrestato\" states a fact; the others are reported." },
      { type: "listen-choose", audio: "Secondo fonti vicine al governo, il decreto slitterebbe a settembre.", question: "What does the report say about the decree?", options: ["It may be postponed to September.", "It was approved in September.", "It has been cancelled.", "It will certainly start in September."], correctIndex: 0, explanation: "\"Slittare\" = to slip, be postponed; the conditional marks it as unconfirmed." },
      { type: "speak", text: "Secondo indiscrezioni, il sindaco sarebbe pronto a dimettersi.", prompt: "Read the news item: According to leaks, the mayor is reportedly ready to resign.", tip: "\"Indiscrezioni\": the \"sc\" before i is soft, as in 'sh'.", explanation: "Source + conditional." },
    ],
  },
  {
    slug: "c1-headline-syntax",
    level: "IT-C1",
    number: 2,
    title: "Headline Syntax",
    summary: "Read and write Italian headlines: nominal style, dropped verbs and articles, the comma or colon after the topic, and allusive wordplay.",
    duration: "19 min",
    sections: [
      {
        heading: "No verb, no article",
        body: [
          "Italian headlines save space by dropping words. The verb disappears and a noun takes its place: \"Incendio in un capannone, nessun ferito\" (fire in a warehouse, nobody hurt). Past participles stand alone, without the auxiliary: \"Arrestato il ladro del museo\" (the museum thief has been arrested), \"Chiuse le scuole per neve\" (schools closed because of snow).",
          "Notice the order: the participle comes first and agrees with the noun after it: \"arrestatO il ladro\", \"chiusE le scuole\", \"approvatA la legge\". When a verb is used, it is usually in the present even for past events: \"Crolla un ponte sull'Adige\" (a bridge collapses).",
        ],
        examples: [
          { es: "Arrestato il ladro del museo.", en: "Museum thief arrested." },
          { es: "Chiuse le scuole per neve.", en: "Schools closed because of snow." },
          { es: "Approvata la legge sul clima.", en: "Climate law passed." },
          { es: "Incendio in un capannone, nessun ferito.", en: "Warehouse fire, no one injured." },
          { es: "Crolla un ponte sull'Adige.", en: "Bridge over the Adige collapses." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Schools closed because of snow.", answer: "Chiuse le scuole per neve.", altAnswers: ["Chiuse le scuole per la neve.", "Scuole chiuse per neve."], explanation: "Participle first, agreeing with \"le scuole\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Climate law [passed].", sentence: "___ la legge sul clima.", answer: "Approvata", explanation: "Feminine singular to agree with \"la legge\"." },
        ],
      },
      {
        heading: "Topic, comma, news",
        body: [
          "A very Italian pattern puts a place or topic first, then a comma or colon, then the news: \"Milano, scoperta una villa romana\", \"Maltempo, allerta rossa in Liguria\", \"Scuola: arriva il voto in condotta\". The first word tells the reader where to look; the rest gives the event.",
          "Headlines also quote, with Italian quotation marks and no verb of saying: \"Il sindaco: «Nessun aumento delle tasse»\". The colon replaces 'says'. The subtitle (\"sommario\") then fills in the facts in full sentences.",
        ],
        examples: [
          { es: "Maltempo, allerta rossa in Liguria.", en: "Bad weather: red alert in Liguria." },
          { es: "Treni, sciopero di 24 ore venerdì.", en: "Trains: 24-hour strike on Friday." },
          { es: "Il sindaco: «Nessun aumento delle tasse».", en: "Mayor says 'No tax increases'." },
          { es: "Sanità, mancano mille infermieri.", en: "Health service: a thousand nurses short." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write the Italian headline with topic + comma.", source: "Trains: 24-hour strike on Friday.", answer: "Treni, sciopero di 24 ore venerdì.", altAnswers: ["Treni: sciopero di 24 ore venerdì.", "Treni, venerdì sciopero di 24 ore."], explanation: "Topic first, then the news without a verb." },
          { type: "multiple-choice", question: "In \"Il sindaco: «Nessun aumento delle tasse»\", the colon means ...", options: ["says", "because", "against", "after"], correctIndex: 0, explanation: "Colon + quotation replaces the verb of saying." },
        ],
      },
      {
        heading: "Allusion and wordplay",
        body: [
          "Features and sports pages love allusive headlines that bend a proverb, a famous line or an idiom. \"Chi va piano va sano e va lontano\" becomes \"Chi va piano... arriva in ritardo\" over a story on slow trains; Dante's \"Nel mezzo del cammin\" heads a piece on midlife; \"Tanto va la gatta al lardo\" over a thief finally caught.",
          "To understand them you need the original, and the article underneath. To write them, change one element of a well-known phrase so that it fits the story.",
        ],
        examples: [
          { es: "Chi va piano... arriva in ritardo.", en: "Slow and steady... arrives late." },
          { es: "Nel mezzo del cammin: viaggio nella crisi dei cinquant'anni.", en: "Midway through life's journey: inside the midlife crisis." },
          { es: "Tanto va la gatta al lardo: preso il ladro delle biciclette.", en: "The cat goes to the lard once too often: bicycle thief caught." },
          { es: "Rosso di sera, ma niente bel tempo.", en: "Red sky at night, but no fine weather." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which original saying does \"Chi va piano... arriva in ritardo\" bend?", options: ["Chi va piano va sano e va lontano.", "Chi dorme non piglia pesci.", "Chi trova un amico trova un tesoro.", "Chi la fa l'aspetti."], correctIndex: 0, explanation: "'Slow and steady wins the race', twisted for slow trains." },
          { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Bicycle thief caught.", answer: "Preso il ladro delle biciclette.", altAnswers: ["Arrestato il ladro delle biciclette.", "Catturato il ladro delle biciclette.", "Preso il ladro di biciclette."], explanation: "Participle first." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Museum thief arrested.", answer: "Arrestato il ladro del museo.", altAnswers: ["Preso il ladro del museo."], explanation: "\"Arrestato\" agrees with \"il ladro\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Climate law passed.", answer: "Approvata la legge sul clima.", explanation: "\"Approvata\": feminine to match \"la legge\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Warehouse fire, no one injured.", answer: "Incendio in un capannone, nessun ferito.", altAnswers: ["Incendio in un magazzino, nessun ferito.", "Fiamme in un capannone, nessun ferito."], explanation: "Two nominal phrases joined by a comma." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline with topic + comma.", source: "Bad weather: red alert in Liguria.", answer: "Maltempo, allerta rossa in Liguria.", altAnswers: ["Maltempo: allerta rossa in Liguria."], explanation: "\"Maltempo\" sets the topic." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline with a quotation.", source: "Mayor says 'No tax increases'.", answer: "Il sindaco: «Nessun aumento delle tasse».", altAnswers: ["Il sindaco: \"Nessun aumento delle tasse\".", "Sindaco: «Nessun aumento delle tasse»."], explanation: "Colon + quotation, no verb." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Bridge over the Adige collapses.", answer: "Crolla un ponte sull'Adige.", altAnswers: ["Crollato un ponte sull'Adige."], explanation: "Verb first in the present, even for a past event." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Two new hospitals opened.", answer: "Inaugurati due nuovi ospedali.", altAnswers: ["Aperti due nuovi ospedali."], explanation: "\"Inaugurati\": masculine plural for \"due nuovi ospedali\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Schools [closed] because of snow.", sentence: "___ le scuole per neve.", answer: "Chiuse", explanation: "Feminine plural, matching \"le scuole\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Health service: [a thousand nurses short].", sentence: "Sanità, ___.", answer: "mancano mille infermieri", explanation: "\"Mancare\" agrees with the plural subject." },
      {
        type: "word-order",
        prompt: "Put the words in order to make the headline: Milan, Roman villa discovered.",
        words: ["Milano,", "scoperta", "una", "villa", "romana."],
        translation: "Milan, Roman villa discovered.",
        explanation: "Place, comma, participle first.",
      },
      { type: "multiple-choice", question: "Which headline is correctly formed?", options: ["Approvata la riforma della scuola.", "Approvato la riforma della scuola.", "È stata approvata la riforma della scuola ieri dal Parlamento in seduta.", "La riforma, approvare."], correctIndex: 0, explanation: "Participle first, agreeing with \"la riforma\"; short and verbless." },
      { type: "dictation", audio: "Maltempo, chiuse le scuole in tre province.", explanation: "Topic, comma, participle agreeing with \"le scuole\"." },
      { type: "speak", text: "Arrestato il ladro del museo. Recuperati i due quadri.", prompt: "Read the two headlines aloud as a newsreader: Museum thief arrested. The two paintings recovered.", tip: "Pause after each headline; stress the participle.", explanation: "Two nominal headlines." },
    ],
  },
  {
    slug: "c1-quoting",
    level: "IT-C1",
    number: 3,
    title: "Quoting and Attribution",
    summary: "Attribute statements precisely with ha dichiarato, ha precisato, ha smentito, ha ribadito, and report them in indirect speech with the right tenses.",
    duration: "19 min",
    sections: [
      {
        heading: "Verbs of saying",
        body: [
          "Journalists avoid repeating \"ha detto\". Each verb of saying adds meaning: \"dichiarare\" (to state), \"affermare\" (to assert), \"precisare\" (to specify, clarify), \"aggiungere\" (to add), \"sottolineare\" (to stress), \"ribadire\" (to repeat firmly), \"ammettere\" (to admit), \"replicare\" (to reply, hit back), \"smentire\" (to deny a report).",
          "Direct quotations use Italian quotation marks, «...», and the verb often follows: «Non ci sono rischi», ha precisato il direttore. With \"smentire\" the object is the news, not a person: \"Il ministero ha smentito la notizia\"; with an infinitive, \"ha smentito di aver firmato\" (denied having signed).",
        ],
        examples: [
          { es: "«Non ci sono rischi per la salute», ha precisato il direttore.", en: "'There is no health risk,' the director clarified." },
          { es: "Il presidente ha ribadito la sua posizione.", en: "The president restated his position firmly." },
          { es: "Il ministero ha smentito la notizia.", en: "The ministry denied the report." },
          { es: "L'assessore ha smentito di aver firmato il contratto.", en: "The councillor denied having signed the contract." },
          { es: "«È stato un errore», ha ammesso l'allenatore.", en: "'It was a mistake,' the coach admitted." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The ministry denied the report.", answer: "Il ministero ha smentito la notizia.", altAnswers: ["Il ministero ha smentito la voce."], explanation: "\"Smentire\" = to deny a report." },
          { type: "multiple-choice", question: "Which verb means to repeat a position firmly?", options: ["ribadire", "smentire", "ammettere", "precisare"], correctIndex: 0, explanation: "\"Ribadire\" = to reaffirm." },
        ],
      },
      {
        heading: "Indirect speech in the past",
        body: [
          "When the verb of saying is in a past tense, the reported verb moves back. Present becomes imperfect: «Siamo pronti» → \"ha dichiarato che erano pronti\". Passato prossimo becomes trapassato: «Abbiamo sbagliato» → \"ha ammesso che avevano sbagliato\". Future becomes past conditional, the future in the past: «Il cantiere partirà a maggio» → \"ha detto che il cantiere sarebbe partito a maggio\".",
          "That last rule surprises learners, because English uses 'would start'. Italian needs \"sarebbe partito\", never \"*partirebbe\", for a future seen from the past.",
        ],
        examples: [
          { es: "Ha dichiarato che erano pronti a trattare.", en: "He stated that they were ready to negotiate." },
          { es: "Ha ammesso che avevano sbagliato.", en: "She admitted that they had made a mistake." },
          { es: "Il sindaco ha annunciato che il cantiere sarebbe partito a maggio.", en: "The mayor announced that the building work would start in May." },
          { es: "La direttrice ha precisato che nessuno sarebbe stato licenziato.", en: "The director clarified that nobody would be dismissed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The mayor announced that the building work would start in May.", answer: "Il sindaco ha annunciato che il cantiere sarebbe partito a maggio.", altAnswers: ["Il sindaco ha annunciato che i lavori sarebbero partiti a maggio.", "Il sindaco ha annunciato che i lavori sarebbero cominciati a maggio."], explanation: "Future in the past: past conditional." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She admitted that they [had made a mistake].", sentence: "Ha ammesso che ___.", answer: "avevano sbagliato", explanation: "Passato prossimo → trapassato." },
        ],
      },
      {
        heading: "Attribution without a verb",
        body: [
          "News also attributes with prepositions: \"secondo il prefetto\" (according to the prefect), \"per gli inquirenti\" (in the investigators' view), \"a detta di\" (by the account of). \"Fa sapere\" (lets it be known) is used for statements issued through a spokesperson: \"La società fa sapere che...\".",
          "A careful article never leaves a claim without an owner: either a named source with a verb, or the journalistic conditional.",
        ],
        examples: [
          { es: "Per gli inquirenti si tratta di un furto su commissione.", en: "Investigators believe it was a theft to order." },
          { es: "A detta dei testimoni, l'auto andava molto veloce.", en: "According to witnesses, the car was going very fast." },
          { es: "La società fa sapere che nessun dato è stato rubato.", en: "The company has let it be known that no data was stolen." },
          { es: "Secondo il prefetto, la situazione è sotto controllo.", en: "According to the prefect, the situation is under control." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "According to witnesses, the car was going very fast.", answer: "A detta dei testimoni, l'auto andava molto veloce.", altAnswers: ["Secondo i testimoni, l'auto andava molto veloce.", "A detta dei testimoni, la macchina andava molto veloce.", "A detta dei testimoni, l'auto andava molto forte."], explanation: "\"A detta di\" = by the account of." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The company [has let it be known] that no data was stolen.", sentence: "La società ___ che nessun dato è stato rubato.", answer: "fa sapere", explanation: "Statement through a spokesperson." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "'There is no health risk,' the director clarified.", answer: "«Non ci sono rischi per la salute», ha precisato il direttore.", altAnswers: ["\"Non ci sono rischi per la salute\", ha precisato il direttore.", "«Non c'è nessun rischio per la salute», ha precisato il direttore."], explanation: "Quotation first, then verb + subject." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The councillor denied having signed the contract.", answer: "L'assessore ha smentito di aver firmato il contratto.", altAnswers: ["L'assessore ha smentito di avere firmato il contratto.", "L'assessore ha negato di aver firmato il contratto."], explanation: "\"Smentire di\" + past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The president restated his position firmly.", answer: "Il presidente ha ribadito la sua posizione.", altAnswers: ["Il presidente ha ribadito con fermezza la sua posizione."], explanation: "\"Ribadire\" already contains 'firmly'." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The director clarified that nobody would be dismissed.", answer: "La direttrice ha precisato che nessuno sarebbe stato licenziato.", altAnswers: ["Il direttore ha precisato che nessuno sarebbe stato licenziato."], explanation: "Future passive in the past: \"sarebbe stato licenziato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "He stated that they were ready to negotiate.", answer: "Ha dichiarato che erano pronti a trattare.", altAnswers: ["Ha dichiarato che erano disposti a trattare."], explanation: "Present → imperfect after a past verb of saying." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "Investigators believe it was a theft to order.", answer: "Per gli inquirenti si tratta di un furto su commissione.", altAnswers: ["Secondo gli inquirenti si tratta di un furto su commissione.", "Per gli inquirenti si è trattato di un furto su commissione."], explanation: "\"Per\" + source = in their view." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "'It was a mistake,' the coach admitted.", answer: "«È stato un errore», ha ammesso l'allenatore.", altAnswers: ["\"È stato un errore\", ha ammesso l'allenatore.", "«È stato uno sbaglio», ha ammesso l'allenatore."], explanation: "\"Ammettere\" = to admit." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said the train [would arrive] late.", sentence: "Ha detto che il treno ___ in ritardo.", answer: "sarebbe arrivato", explanation: "Future in the past: past conditional, never \"arriverebbe\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "'We will not give up,' the union leader [added].", sentence: "«Non ci arrenderemo», ha ___ il sindacalista.", answer: "aggiunto", explanation: "\"Aggiungere\", participle \"aggiunto\"." },
      {
        type: "matching",
        instructions: "Match the verb of saying to its meaning.",
        pairs: [
          { left: "smentire", right: "to deny a report" },
          { left: "precisare", right: "to clarify" },
          { left: "ribadire", right: "to restate firmly" },
          { left: "replicare", right: "to reply, hit back" },
          { left: "ammettere", right: "to admit" },
        ],
        explanation: "Each verb tells the reader how the statement was made.",
      },
      { type: "multiple-choice", question: "«I lavori finiranno a giugno.» Reported: Il sindaco ha detto che i lavori ...", options: ["sarebbero finiti a giugno", "finirebbero a giugno", "finissero a giugno", "fossero finiti a giugno"], correctIndex: 0, explanation: "Future in the past = past conditional." },
      { type: "listen-choose", audio: "Il ministero ha smentito la notizia: nessun aumento dell'IVA è previsto.", question: "What did the ministry do?", options: ["Denied the report of a tax rise", "Confirmed a tax rise", "Announced a tax cut", "Refused to comment"], correctIndex: 0, explanation: "\"Smentire\" = to deny." },
      { type: "speak", text: "«Non ci sono rischi per la salute», ha precisato il direttore dell'ospedale.", prompt: "Read the quotation and attribution: 'There is no health risk,' the hospital director clarified.", tip: "Drop your voice slightly for the attribution after the quotation.", explanation: "Quote, then verb and subject." },
    ],
  },
  {
    slug: "c1-opinion-column",
    level: "IT-C1",
    number: 4,
    title: "The Opinion Column",
    summary: "Recognise and use the voice of the Italian opinion column: rhetorical questions, concession, irony and a closing punch.",
    duration: "19 min",
    sections: [
      {
        heading: "The columnist's voice",
        body: [
          "The \"editoriale\" or \"rubrica\" speaks in a personal voice that news never uses. Columnists address the reader, use the first person and ask rhetorical questions: \"Ma davvero pensiamo che basti una legge?\" (do we really think a law is enough?). Typical spoken markers appear in writing: \"diciamolo\" (let's say it), \"intendiamoci\" (let's be clear), \"il punto è un altro\" (that is not the point), \"sia chiaro\" (to be clear).",
          "The column has a recognisable shape: a hook (an anecdote or a fact), the thesis, a concession to the other side, the counter-argument, and a closing line that sticks in the memory.",
        ],
        examples: [
          { es: "Ma davvero pensiamo che basti una legge?", en: "But do we really think a law is enough?" },
          { es: "Diciamolo: il problema non è il traffico.", en: "Let's face it: the problem is not the traffic." },
          { es: "Intendiamoci, nessuno vuole chiudere i negozi.", en: "Let's be clear, nobody wants to close the shops." },
          { es: "Il punto è un altro.", en: "That's not the point." },
          { es: "Sia chiaro: non sono contro il turismo.", en: "To be clear, I am not against tourism." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "But do we really think a law is enough?", answer: "Ma davvero pensiamo che basti una legge?", altAnswers: ["Ma pensiamo davvero che basti una legge?", "Ma davvero crediamo che basti una legge?"], explanation: "\"Pensare che\" + subjunctive \"basti\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[That's not the point]: the real problem is the rents.", sentence: "___: il vero problema sono gli affitti.", answer: "Il punto è un altro", explanation: "A columnist's pivot." },
        ],
      },
      {
        heading: "Concession and counter-argument",
        body: [
          "A good column grants something before attacking: \"Certo, i parcheggi servono. Ma...\", \"È vero che... tuttavia...\", \"Nessuno nega che...; resta il fatto che...\". \"Nessuno nega che\" takes the subjunctive: \"Nessuno nega che il centro sia affollato\". \"Resta il fatto che\" (the fact remains that) takes the indicative because it introduces the writer's own point.",
          "The concession shows fairness; the \"ma\" or \"tuttavia\" carries the thesis. Readers learn to skip to the \"ma\".",
        ],
        examples: [
          { es: "Certo, i parcheggi servono. Ma non in piazza.", en: "Of course, car parks are needed. But not in the square." },
          { es: "Nessuno nega che il centro sia affollato.", en: "Nobody denies that the centre is crowded." },
          { es: "Resta il fatto che i residenti se ne vanno.", en: "The fact remains that residents are leaving." },
          { es: "È vero che il turismo porta lavoro; tuttavia, non a tutti.", en: "It is true that tourism brings jobs; however, not to everyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "Nobody denies that the centre is crowded.", answer: "Nessuno nega che il centro sia affollato.", altAnswers: ["Nessuno nega che il centro sia sovraffollato."], explanation: "\"Nessuno nega che\" + subjunctive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The fact remains that] residents are leaving.", sentence: "___ i residenti se ne vanno.", answer: "Resta il fatto che", explanation: "Introduces the writer's point; indicative follows." },
        ],
      },
      {
        heading: "Irony and allusion",
        body: [
          "Italian columnists use antiphrasis, saying the opposite of what they mean: \"Complimenti davvero alla giunta\" over a failure, \"Un'idea geniale\" for a bad one. The context and an exclamation mark or ellipsis signal the irony. Rhetorical understatement works too: \"Non proprio un successo\" (not exactly a success).",
          "Allusion borrows authority from shared texts: Dante's \"Lasciate ogni speranza\" for a hopeless office queue, Manzoni's \"Questo matrimonio non s'ha da fare\" for a blocked merger. The reader enjoys recognising the source.",
        ],
        examples: [
          { es: "Complimenti davvero: tre anni per riparare una fontana.", en: "Congratulations indeed: three years to repair a fountain." },
          { es: "Un'idea geniale: chiudere la biblioteca d'estate.", en: "A brilliant idea: closing the library in summer." },
          { es: "Non proprio un successo, diciamo.", en: "Not exactly a success, let's say." },
          { es: "All'ufficio anagrafe, lasciate ogni speranza.", en: "At the registry office, abandon all hope." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Un'idea geniale: chiudere la biblioteca d'estate\" in a column is ...", options: ["ironic criticism", "sincere praise", "a neutral fact", "a quotation from the council"], correctIndex: 0, explanation: "Antiphrasis: praise words for a bad idea." },
          { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "Not exactly a success, let's say.", answer: "Non proprio un successo, diciamo.", altAnswers: ["Non esattamente un successo, diciamo."], explanation: "Ironic understatement." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "Let's face it: the problem is not the traffic.", answer: "Diciamolo: il problema non è il traffico.", altAnswers: ["Diciamolo pure: il problema non è il traffico.", "Diciamocelo: il problema non è il traffico."], explanation: "\"Diciamolo\" with the pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "Let's be clear, nobody wants to close the shops.", answer: "Intendiamoci, nessuno vuole chiudere i negozi.", explanation: "\"Intendiamoci\" = let's be clear." },
      { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "To be clear, I am not against tourism.", answer: "Sia chiaro: non sono contro il turismo.", altAnswers: ["Sia chiaro, non sono contro il turismo.", "Sia chiaro: non sono contrario al turismo."], explanation: "\"Sia chiaro\": an independent subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "Of course, car parks are needed. But not in the square.", answer: "Certo, i parcheggi servono. Ma non in piazza.", altAnswers: ["Certo, i parcheggi sono necessari. Ma non in piazza."], explanation: "Concession, then \"ma\"." },
      { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "It is true that tourism brings jobs; however, not to everyone.", answer: "È vero che il turismo porta lavoro; tuttavia, non a tutti.", altAnswers: ["È vero che il turismo porta lavoro, tuttavia non a tutti.", "È vero che il turismo crea lavoro; tuttavia, non per tutti."], explanation: "\"È vero che\" + indicative: a granted fact." },
      { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice (ironic).", source: "Congratulations indeed: three years to repair a fountain.", answer: "Complimenti davvero: tre anni per riparare una fontana.", explanation: "Antiphrasis." },
      { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "Do we really want a city without residents?", answer: "Vogliamo davvero una città senza residenti?", altAnswers: ["Davvero vogliamo una città senza residenti?", "Vogliamo davvero una città senza abitanti?"], explanation: "Rhetorical question in the first person plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Nobody denies that the rents [are] high.", sentence: "Nessuno nega che gli affitti ___ alti.", answer: "siano", explanation: "\"Nessuno nega che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The fact remains that] the buses are always late.", sentence: "___ gli autobus sono sempre in ritardo.", answer: "Resta il fatto che", explanation: "Writer's own point: indicative \"sono\"." },
      { type: "multi-select", question: "Which expressions belong in a column but not in a news report? Select all that apply.", options: ["Diciamolo:", "Intendiamoci,", "Il punto è un altro.", "Secondo fonti della questura,", "Ha dichiarato il prefetto."], correctIndexes: [0, 1, 2], explanation: "The first three are the columnist's personal voice; the last two are news attribution." },
      { type: "multiple-choice", question: "A column on a hopeless queue at the registry office is titled \"Lasciate ogni speranza\". The allusion is to ...", options: ["Dante's Inferno", "a proverb about patience", "a law on public offices", "a football chant"], correctIndex: 0, explanation: "The inscription on the gate of Hell, Inferno III." },
      { type: "dictation", audio: "Intendiamoci, nessuno vuole chiudere i negozi.", explanation: "\"Intendiamoci\": imperative with \"ci\" attached." },
      { type: "speak", text: "Certo, il turismo porta lavoro. Ma davvero vogliamo una città senza residenti?", prompt: "Deliver the column's key lines: Of course, tourism brings jobs. But do we really want a city without residents?", tip: "Rising intonation on the rhetorical question.", explanation: "Concession and rhetorical question." },
    ],
  },
  {
    slug: "c1-drill-journalism",
    level: "IT-C1",
    number: 5,
    title: "Drill: News Language",
    summary: "High-repetition production of headlines, the journalistic conditional, verbs of saying and the future in the past.",
    duration: "25 min",
    kind: "drill",
    sections: [
      {
        heading: "Four news reflexes",
        body: [
          "Work fast. Four reflexes: a headline puts the participle first and makes it agree (\"Chiusa la strada\"); an unconfirmed fact goes in the conditional (\"sarebbe fuggito\"); a statement gets a precise verb (\"ha precisato\", \"ha smentito\"); a future reported in the past becomes a past conditional (\"sarebbe arrivato\").",
        ],
        examples: [
          { es: "Chiusa la strada per una frana.", en: "Road closed because of a landslide." },
          { es: "Il rapinatore sarebbe fuggito a piedi.", en: "The robber reportedly fled on foot." },
          { es: "Il sindaco ha smentito le voci.", en: "The mayor denied the rumours." },
          { es: "Ha detto che sarebbe arrivato in ritardo.", en: "He said he would arrive late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Road closed because of a landslide.", answer: "Chiusa la strada per una frana.", altAnswers: ["Strada chiusa per una frana.", "Chiusa la strada per frana."], explanation: "\"Chiusa\" agrees with \"la strada\"." },
          { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The robber reportedly fled on foot.", answer: "Il rapinatore sarebbe fuggito a piedi.", altAnswers: ["Il rapinatore sarebbe scappato a piedi."], explanation: "Past conditional with \"essere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Murderer arrested after ten years.", answer: "Arrestato l'assassino dopo dieci anni.", altAnswers: ["Preso l'assassino dopo dieci anni.", "Dopo dieci anni arrestato l'assassino."], explanation: "Participle first." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Budget approved.", answer: "Approvato il bilancio.", altAnswers: ["Bilancio approvato."], explanation: "\"Approvato\": masculine for \"il bilancio\"." },
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Two climbers rescued on Monte Rosa.", answer: "Salvati due alpinisti sul Monte Rosa.", altAnswers: ["Soccorsi due alpinisti sul Monte Rosa.", "Due alpinisti salvati sul Monte Rosa."], explanation: "Masculine plural participle." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The company is reportedly about to close.", answer: "L'azienda sarebbe sul punto di chiudere.", altAnswers: ["La società sarebbe sul punto di chiudere.", "L'azienda starebbe per chiudere."], explanation: "\"Essere sul punto di\" in the conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The driver allegedly did not stop at the red light.", answer: "Il conducente non si sarebbe fermato al rosso.", altAnswers: ["L'automobilista non si sarebbe fermato al semaforo rosso.", "Il conducente non si sarebbe fermato al semaforo rosso."], explanation: "Reflexive verb: \"si sarebbe fermato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The paintings were reportedly sold abroad.", answer: "I quadri sarebbero stati venduti all'estero.", explanation: "Passive past conditional, plural." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The mayor denied the rumours.", answer: "Il sindaco ha smentito le voci.", altAnswers: ["Il sindaco ha smentito le indiscrezioni."], explanation: "\"Smentire\" + the report." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The minister stressed that the plan is temporary.", answer: "Il ministro ha sottolineato che il piano è temporaneo.", altAnswers: ["La ministra ha sottolineato che il piano è temporaneo.", "Il ministro ha sottolineato che il piano è provvisorio."], explanation: "A still-valid fact can stay in the present after a past verb of saying." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "He said he would arrive late.", answer: "Ha detto che sarebbe arrivato in ritardo.", explanation: "Future in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The club announced that the stadium would be renovated.", answer: "La società ha annunciato che lo stadio sarebbe stato ristrutturato.", altAnswers: ["Il club ha annunciato che lo stadio sarebbe stato ristrutturato.", "La società ha annunciato che lo stadio sarebbe stato rinnovato."], explanation: "Passive future in the past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Exhibition [cancelled].", sentence: "___ la mostra.", answer: "Annullata", altAnswers: ["Cancellata"], explanation: "Feminine to agree with \"la mostra\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The fire [allegedly started] in the cellar.", sentence: "L'incendio ___ dalla cantina.", answer: "sarebbe partito", altAnswers: ["sarebbe divampato", "si sarebbe sviluppato"], explanation: "Past conditional, \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The trial [would reportedly begin] in March.", sentence: "Il processo ___ a marzo.", answer: "comincerebbe", altAnswers: ["inizierebbe", "partirebbe"], explanation: "Present conditional: an unconfirmed future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She said the results [would be published] on Monday.", sentence: "Ha detto che i risultati ___ lunedì.", answer: "sarebbero stati pubblicati", explanation: "Passive future in the past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[According to the investigators], the gang came from abroad.", sentence: "___, la banda sarebbe arrivata dall'estero.", answer: "Secondo gli inquirenti", altAnswers: ["Per gli inquirenti", "A detta degli inquirenti"], explanation: "Source + conditional." },
      { type: "dictation", audio: "Secondo indiscrezioni, l'azienda sarebbe sul punto di chiudere.", explanation: "Leak + conditional." },
      { type: "dictation", audio: "Il sindaco ha precisato che il cantiere sarebbe partito a maggio.", explanation: "Verb of saying + future in the past." },
      { type: "speak", text: "Approvato il bilancio. Il sindaco ha precisato che non ci saranno nuove tasse.", prompt: "Read the headline and lead: Budget approved. The mayor clarified that there will be no new taxes.", tip: "\"Saranno\" stays future here: it is still in the future at the time of writing.", explanation: "Headline + attributed statement." },
    ],
  },
  {
    slug: "c1-reading-lab-front-page",
    level: "IT-C1",
    number: 6,
    title: "Reading Lab: A Front Page",
    summary: "Read the front page of an invented local daily: a lead story, a crime brief, a political item and a short column.",
    duration: "19 min",
    sections: [
      {
        heading: "The lead story",
        body: [
          "The front page in this lab belongs to an invented local daily, \"La Voce di Valbruna\", serving an invented town in the Alps. The lead story (\"l'apertura\") is about a flood. Read the headline, the \"occhiello\" above it (a short line that sets the topic) and the \"sommario\" below it (a summary in full sentences).",
          "Occhiello: \"Maltempo\". Headline: \"Esonda il torrente, evacuate cento famiglie\". Sommario: \"Nella notte il Rio Nero è uscito dagli argini. Nessun ferito, ma danni ingenti alle case della zona bassa. Il sindaco: «Chiederemo lo stato di calamità»\". Glosses: \"esondare\" (to overflow), \"gli argini\" (the banks), \"ingente\" (huge, of damage or sums).",
        ],
        examples: [
          { es: "Esonda il torrente, evacuate cento famiglie.", en: "Stream overflows, a hundred families evacuated." },
          { es: "Nella notte il Rio Nero è uscito dagli argini.", en: "During the night the Rio Nero burst its banks." },
          { es: "Nessun ferito, ma danni ingenti alle case.", en: "Nobody injured, but extensive damage to houses." },
          { es: "Il sindaco: «Chiederemo lo stato di calamità».", en: "The mayor: 'We will ask for a state of emergency.'" },
          { es: "I vigili del fuoco hanno lavorato tutta la notte.", en: "Firefighters worked all night." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What happened in Valbruna?", options: ["A stream flooded and families were evacuated.", "A fire destroyed a hundred homes.", "An earthquake damaged the town hall.", "A landslide closed the motorway."], correctIndex: 0, explanation: "\"Esonda\" = overflows; \"evacuate\" = evacuated." },
          { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "Nobody injured, but extensive damage to houses.", answer: "Nessun ferito, ma danni ingenti alle case.", altAnswers: ["Nessun ferito, ma ingenti danni alle case.", "Nessun ferito, ma gravi danni alle case."], explanation: "\"Ingente\" goes before or after the noun." },
        ],
      },
      {
        heading: "Crime brief and politics",
        body: [
          "Down the page, a crime brief (\"breve\") in the journalistic conditional: \"Furto in farmacia. Due uomini sarebbero entrati dal retro poco dopo la chiusura e avrebbero portato via l'incasso. Le telecamere li avrebbero ripresi mentre fuggivano su un'auto scura\". Everything is unconfirmed: the paper protects itself.",
          "Next to it, a political item with attribution verbs: \"Ospedale, il consiglio approva il piano. L'opposizione: «Mancano i fondi». L'assessore alla sanità ha replicato che i fondi regionali sarebbero arrivati entro l'anno\". Notice \"ha replicato\" (hit back) and the future in the past.",
        ],
        examples: [
          { es: "Due uomini sarebbero entrati dal retro.", en: "Two men reportedly got in through the back." },
          { es: "Avrebbero portato via l'incasso.", en: "They allegedly took the day's takings." },
          { es: "Le telecamere li avrebbero ripresi mentre fuggivano.", en: "The cameras reportedly filmed them as they fled." },
          { es: "L'opposizione: «Mancano i fondi».", en: "The opposition: 'There's no money.'" },
          { es: "L'assessore ha replicato che i fondi sarebbero arrivati entro l'anno.", en: "The councillor retorted that the funds would arrive by the end of the year." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "They allegedly took the day's takings.", answer: "Avrebbero portato via l'incasso.", altAnswers: ["Avrebbero rubato l'incasso."], explanation: "\"Portare via\" = to take away." },
          { type: "multiple-choice", question: "Why is the crime brief in the conditional?", options: ["The facts are not yet confirmed.", "It describes a hypothetical crime.", "It is a polite request.", "The crime will happen in the future."], correctIndex: 0, explanation: "The journalistic conditional." },
        ],
      },
      {
        heading: "The front-page column",
        body: [
          "In the corner, a short column (\"il corsivo\", traditionally printed in italics) by the paper's editor: \"Ogni autunno lo stesso copione: piove, il Rio Nero esce dagli argini, e tutti si dicono sorpresi. Sorpresi, davvero? Gli argini aspettano lavori dal 2009. Intendiamoci, nessuno controlla il meteo. Ma la manutenzione, quella sì, si può programmare\".",
          "Spot the moves: the hook (\"lo stesso copione\", the same script), the ironic echo (\"Sorpresi, davvero?\"), the concession (\"Intendiamoci\") and the closing punch.",
        ],
        examples: [
          { es: "Ogni autunno lo stesso copione.", en: "Every autumn, the same script." },
          { es: "Sorpresi, davvero?", en: "Surprised, really?" },
          { es: "Gli argini aspettano lavori dal 2009.", en: "The banks have been waiting for repairs since 2009." },
          { es: "Ma la manutenzione, quella sì, si può programmare.", en: "But maintenance, that at least, can be planned." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is the columnist's main point?", options: ["The flooding was foreseeable because maintenance was neglected.", "Nobody could have predicted the rain.", "The mayor handled the emergency well.", "The stream should be moved."], correctIndex: 0, explanation: "Banks waiting for repairs since 2009: the point is neglect." },
          { type: "translate", direction: "en-es", prompt: "Translate in a columnist's voice.", source: "The banks have been waiting for repairs since 2009.", answer: "Gli argini aspettano lavori dal 2009.", altAnswers: ["Gli argini attendono lavori dal 2009."], explanation: "Present + \"da\" for an action still going on." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Write the Italian headline.", source: "Stream overflows, a hundred families evacuated.", answer: "Esonda il torrente, evacuate cento famiglie.", altAnswers: ["Esonda il torrente: evacuate cento famiglie."], explanation: "Verb first, then participle agreeing with \"famiglie\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "During the night the Rio Nero burst its banks.", answer: "Nella notte il Rio Nero è uscito dagli argini.", altAnswers: ["Durante la notte il Rio Nero è uscito dagli argini.", "Nella notte il Rio Nero è esondato."], explanation: "\"Uscire dagli argini\" = to burst its banks." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "Firefighters worked all night.", answer: "I vigili del fuoco hanno lavorato tutta la notte.", altAnswers: ["I pompieri hanno lavorato tutta la notte."], explanation: "\"Vigili del fuoco\" is the official name." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "Two men reportedly got in through the back.", answer: "Due uomini sarebbero entrati dal retro.", explanation: "\"Entrare dal retro\" = through the back." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report (unconfirmed).", source: "The cameras reportedly filmed them as they fled.", answer: "Le telecamere li avrebbero ripresi mentre fuggivano.", altAnswers: ["Le telecamere li avrebbero ripresi mentre scappavano."], explanation: "\"Ripresi\" agrees with \"li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a news report.", source: "The councillor retorted that the funds would arrive by the end of the year.", answer: "L'assessore ha replicato che i fondi sarebbero arrivati entro l'anno.", altAnswers: ["L'assessore ha replicato che i fondi sarebbero arrivati entro la fine dell'anno."], explanation: "\"Replicare\" + future in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate the mayor's statement.", source: "We will ask for a state of emergency.", answer: "Chiederemo lo stato di calamità.", altAnswers: ["Chiederemo lo stato di emergenza."], explanation: "\"Stato di calamità\" for natural disasters." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "[Extensive] damage to houses in the lower part of town.", sentence: "Danni ___ alle case della zona bassa.", answer: "ingenti", altAnswers: ["gravi"], explanation: "\"Ingente\", plural \"ingenti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Every autumn, [the same script].", sentence: "Ogni autunno ___.", answer: "lo stesso copione", explanation: "\"Copione\" = script, a pattern that repeats." },
      {
        type: "matching",
        instructions: "Match the parts of the front page to their description.",
        pairs: [
          { left: "l'occhiello", right: "line above the headline" },
          { left: "il sommario", right: "summary below the headline" },
          { left: "l'apertura", right: "the lead story" },
          { left: "il corsivo", right: "short editorial comment" },
          { left: "la breve", right: "short news item" },
        ],
        explanation: "Italian front-page vocabulary.",
      },
      { type: "listen-choose", audio: "Le telecamere li avrebbero ripresi mentre fuggivano su un'auto scura.", question: "What does the brief say about the cameras?", options: ["They reportedly filmed the thieves escaping.", "They were stolen.", "They were not working.", "They filmed the police arriving."], correctIndex: 0, explanation: "\"Ripresi\" = filmed." },
      { type: "speak", text: "Ogni autunno lo stesso copione. Sorpresi, davvero? Gli argini aspettano lavori dal 2009.", prompt: "Read the column's opening with its irony: Every autumn, the same script. Surprised, really? The banks have been waiting for repairs since 2009.", tip: "Let \"davvero\" rise in disbelief.", explanation: "Hook and ironic echo." },
    ],
  },
  {
    slug: "c1-error-hunt-journalism",
    level: "IT-C1",
    number: 7,
    title: "Error Hunt: News Writing",
    summary: "Fix a learner's news brief: unconfirmed facts stated as certain, wrong auxiliaries in the conditional, headline agreement and the future in the past.",
    duration: "19 min",
    sections: [
      {
        heading: "Facts and claims",
        body: [
          "Each sentence comes from a news brief an advanced learner wrote about an invented robbery. The first problem is certainty. \"*Il ladro è entrato dalla finestra\", when the police haven't confirmed it, exposes the paper; the brief needs \"sarebbe entrato\". The opposite slip also happens: \"*La polizia avrebbe confermato l'arresto\" makes a confirmed fact sound doubtful.",
          "The second problem is the auxiliary. The past conditional keeps the passato prossimo auxiliary: \"è fuggito\" → \"sarebbe fuggito\", never \"*avrebbe fuggito\"; \"è stato visto\" → \"sarebbe stato visto\".",
        ],
        examples: [
          { es: "Il ladro sarebbe entrato dalla finestra.", en: "The thief allegedly got in through the window." },
          { es: "La polizia ha confermato l'arresto.", en: "The police confirmed the arrest." },
          { es: "L'uomo sarebbe fuggito verso la stazione.", en: "The man reportedly fled towards the station." },
          { es: "Il sospettato sarebbe stato visto in centro.", en: "The suspect was reportedly seen in the centre." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"L'uomo avrebbe fuggito verso la stazione\". Write it correctly: The man reportedly fled towards the station.", source: "The man reportedly fled towards the station.", answer: "L'uomo sarebbe fuggito verso la stazione.", altAnswers: ["L'uomo sarebbe scappato verso la stazione."], explanation: "\"Fuggire\" takes \"essere\"." },
          { type: "multiple-choice", question: "Which sentence is right for an arrest the police have announced?", options: ["La polizia ha confermato l'arresto.", "La polizia avrebbe confermato l'arresto.", "La polizia confermerebbe l'arresto.", "La polizia avrebbe confermata l'arresto."], correctIndex: 0, explanation: "A confirmed fact takes the indicative." },
        ],
      },
      {
        heading: "Headlines and reported futures",
        body: [
          "Headline agreement trips learners up: \"*Arrestato due uomini\" must be \"Arrestati due uomini\"; \"*Chiuso la piscina\" must be \"Chiusa la piscina\". The participle agrees with the noun that follows, which is its subject. Learners also keep articles and auxiliaries a headline would drop: \"*È stata chiusa la piscina comunale per lavori\" is a sentence, not a headline.",
          "The other classic is the future in the past: \"*Ha detto che il processo comincerebbe a marzo\" must be \"sarebbe cominciato\". And don't repeat \"ha detto\" four times in a brief: vary with \"ha precisato\", \"ha aggiunto\", \"ha spiegato\".",
        ],
        examples: [
          { es: "Arrestati due uomini.", en: "Two men arrested." },
          { es: "Chiusa la piscina per lavori.", en: "Swimming pool closed for works." },
          { es: "Ha detto che il processo sarebbe cominciato a marzo.", en: "He said the trial would begin in March." },
          { es: "Il questore ha aggiunto che le indagini continuano.", en: "The police chief added that the investigation is continuing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Arrestato due uomini\". Write the headline correctly: Two men arrested.", source: "Two men arrested.", answer: "Arrestati due uomini.", explanation: "Masculine plural to agree with \"due uomini\"." },
          { type: "fill-blank", prompt: "A learner wrote \"comincerebbe\". Write the Italian for the bold words.", en: "He said the trial [would begin] in March.", sentence: "Ha detto che il processo ___ a marzo.", answer: "sarebbe cominciato", altAnswers: ["sarebbe iniziato"], explanation: "Future in the past = past conditional." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il ladro è entrato dalla finestra\" for an unconfirmed fact. Fix it: The thief allegedly got in through the window.", source: "The thief allegedly got in through the window.", answer: "Il ladro sarebbe entrato dalla finestra.", explanation: "Unconfirmed: conditional." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il sospettato avrebbe stato visto in centro\". Fix it: The suspect was reportedly seen in the centre.", source: "The suspect was reportedly seen in the centre.", answer: "Il sospettato sarebbe stato visto in centro.", explanation: "Passive: \"sarebbe stato\" + participle." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Chiuso la piscina per lavori\". Fix the headline: Swimming pool closed for works.", source: "Swimming pool closed for works.", answer: "Chiusa la piscina per lavori.", altAnswers: ["Piscina chiusa per lavori."], explanation: "Feminine to agree with \"la piscina\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ha detto che i lavori finirebbero a giugno\". Fix it: He said the works would finish in June.", source: "He said the works would finish in June.", answer: "Ha detto che i lavori sarebbero finiti a giugno.", altAnswers: ["Ha detto che i lavori sarebbero terminati a giugno."], explanation: "Future in the past." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"La società avrebbe confermato ufficialmente il fallimento\". Fix it: The company has officially confirmed the bankruptcy.", source: "The company has officially confirmed the bankruptcy.", answer: "La società ha confermato ufficialmente il fallimento.", altAnswers: ["L'azienda ha confermato ufficialmente il fallimento."], explanation: "\"Ufficialmente\" means it's confirmed: indicative." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"I due avrebbero scappati in moto\". Fix it: The two reportedly escaped on a motorbike.", source: "The two reportedly escaped on a motorbike.", answer: "I due sarebbero scappati in moto.", altAnswers: ["I due sarebbero fuggiti in moto."], explanation: "\"Scappare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il ministero ha smentito alla notizia\". Fix it: The ministry denied the report.", source: "The ministry denied the report.", answer: "Il ministero ha smentito la notizia.", explanation: "\"Smentire\" takes a direct object." },
      { type: "fill-blank", prompt: "A learner wrote \"Arrestato\". Write the Italian for the bold word.", en: "Three drug dealers [arrested].", sentence: "___ tre spacciatori.", answer: "Arrestati", explanation: "Masculine plural." },
      { type: "fill-blank", prompt: "A learner wrote \"ha detto\" for the fourth time. Write the Italian for the bold words.", en: "The police chief [added] that the investigation is continuing.", sentence: "Il questore ___ che le indagini continuano.", answer: "ha aggiunto", altAnswers: ["ha precisato", "ha spiegato"], explanation: "Vary the verb of saying." },
      { type: "multiple-choice", question: "Which headline is correct?", options: ["Rubati tre quadri dal museo.", "Rubato tre quadri dal museo.", "Sono stati rubati ieri sera tre quadri dal museo civico.", "Rubate tre quadri dal museo."], correctIndex: 0, explanation: "\"Rubati\" agrees with \"tre quadri\" (masculine plural); the third is a sentence, not a headline." },
      { type: "multiple-choice", question: "\"Il sindaco ha detto che avrebbe parlato con i residenti.\" What does it mean?", options: ["He said he would talk to the residents.", "He reportedly talked to the residents.", "He would have talked to them, but didn't.", "He talks to residents every day."], correctIndex: 0, explanation: "After a past verb of saying, the past conditional is a future in the past." },
      { type: "dictation", audio: "Il sospettato sarebbe stato visto in centro.", explanation: "Passive past conditional." },
      { type: "speak", text: "Arrestati due uomini. Secondo la polizia, sarebbero entrati dal retro.", prompt: "Read the corrected brief aloud: Two men arrested. According to the police, they reportedly got in through the back.", tip: "\"Arrestati\": double r, stress on \"-sta-\".", explanation: "Headline + attributed conditional." },
    ],
  },
  {
    slug: "c1-listening-lab-radio-journal",
    level: "IT-C1",
    number: 8,
    title: "Listening Lab: A Radio Journal",
    summary: "Follow an invented morning radio news bulletin: the opening, the headlines, a political item, a crime item, traffic and weather.",
    duration: "19 min",
    sections: [
      {
        heading: "The opening and the headlines",
        body: [
          "Italian radio bulletins (\"il giornale radio\", often \"il GR\") follow a fixed pattern. The newsreader gives the time and their name, then reads the headlines (\"i titoli\") in nominal style, then the stories in full. The bulletin in this lab comes from an invented regional station, Radio Valbruna.",
          "Listen for the opening formulas: \"Buongiorno, sono le otto\" (it is eight o'clock), \"in studio\" (in the studio), \"questi i titoli\" (here are the headlines). Headlines on the radio sound like printed ones: \"Sciopero dei trasporti, treni a rischio\", \"Maltempo, scuole chiuse in tre comuni\".",
        ],
        examples: [
          { es: "Buongiorno, sono le otto. In studio, Carla Fontana.", en: "Good morning, it's eight o'clock. In the studio, Carla Fontana." },
          { es: "Questi i titoli.", en: "Here are the headlines." },
          { es: "Sciopero dei trasporti, treni a rischio.", en: "Transport strike: trains at risk." },
          { es: "Maltempo, scuole chiuse in tre comuni.", en: "Bad weather: schools closed in three towns." },
          { es: "E ora le notizie nel dettaglio.", en: "And now the news in detail." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Sciopero dei trasporti, treni a rischio.", question: "What is the headline about?", options: ["A transport strike", "A train accident", "New train timetables", "Cheaper tickets"], correctIndex: 0, explanation: "\"A rischio\" = at risk of cancellation." },
          { type: "translate", direction: "en-es", prompt: "Translate as a radio headline.", source: "Bad weather: schools closed in three towns.", answer: "Maltempo, scuole chiuse in tre comuni.", altAnswers: ["Maltempo: scuole chiuse in tre comuni.", "Maltempo, chiuse le scuole in tre comuni."], explanation: "Topic, comma, nominal news." },
        ],
      },
      {
        heading: "Politics and crime",
        body: [
          "The political item: \"Il consiglio regionale ha approvato ieri sera il nuovo piano dei trasporti. Il presidente della regione ha dichiarato che le prime linee sarebbero partite a gennaio. Critica l'opposizione, che parla di promesse già sentite\". Note the inversion \"Critica l'opposizione\" (the opposition is critical): adjective first, typical of spoken news.",
          "The crime item: \"Rapina nella notte in una gioielleria del centro. I banditi, secondo una prima ricostruzione, sarebbero stati tre e avrebbero agito in pochi minuti. Indagano i carabinieri\". Again an inversion: \"Indagano i carabinieri\" (the carabinieri are investigating).",
        ],
        examples: [
          { es: "Il consiglio regionale ha approvato ieri sera il nuovo piano dei trasporti.", en: "The regional council approved the new transport plan last night." },
          { es: "Le prime linee sarebbero partite a gennaio.", en: "The first lines would start in January." },
          { es: "Critica l'opposizione.", en: "The opposition is critical." },
          { es: "I banditi sarebbero stati tre.", en: "There were reportedly three robbers." },
          { es: "Indagano i carabinieri.", en: "The carabinieri are investigating." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "I banditi, secondo una prima ricostruzione, sarebbero stati tre e avrebbero agito in pochi minuti.", question: "What does the first reconstruction suggest?", options: ["Three robbers acted within minutes.", "One robber spent hours inside.", "The robbers were arrested.", "Nothing was stolen."], correctIndex: 0, explanation: "\"Sarebbero stati tre\" = there were reportedly three." },
          { type: "translate", direction: "en-es", prompt: "Translate as a radio news item.", source: "The carabinieri are investigating.", answer: "Indagano i carabinieri.", altAnswers: ["I carabinieri indagano.", "Stanno indagando i carabinieri."], explanation: "Verb first in news style." },
        ],
      },
      {
        heading: "Traffic and weather",
        body: [
          "The bulletin ends with traffic (\"la viabilità\") and weather (\"il meteo\"). Typical phrases: \"code a tratti\" (queues in places), \"rallentamenti\" (slowdowns), \"incidente all'altezza di\" (accident near), \"cielo coperto\" (overcast), \"precipitazioni in attenuazione\" (rain easing), \"temperature in calo\" (temperatures falling).",
          "The closing formula: \"Il prossimo appuntamento con il giornale radio è alle nove\" (the next bulletin is at nine).",
        ],
        examples: [
          { es: "Sull'autostrada code a tratti per un incidente.", en: "Queues in places on the motorway because of an accident." },
          { es: "Rallentamenti all'altezza dell'uscita di Valbruna.", en: "Slowdowns near the Valbruna exit." },
          { es: "Cielo coperto al mattino, precipitazioni in attenuazione.", en: "Overcast in the morning, rain easing." },
          { es: "Temperature in calo nel fine settimana.", en: "Temperatures falling at the weekend." },
          { es: "Il prossimo appuntamento con il giornale radio è alle nove.", en: "The next news bulletin is at nine." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Cielo coperto al mattino, precipitazioni in attenuazione nel pomeriggio.", question: "What will the weather do in the afternoon?", options: ["The rain will ease.", "It will snow.", "The sky will clear completely.", "It will get much hotter."], correctIndex: 0, explanation: "\"In attenuazione\" = easing." },
          { type: "translate", direction: "en-es", prompt: "Translate as a radio weather item.", source: "Temperatures falling at the weekend.", answer: "Temperature in calo nel fine settimana.", altAnswers: ["Temperature in calo nel weekend.", "Temperature in diminuzione nel fine settimana."], explanation: "\"In calo\" = falling." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Il presidente della regione ha dichiarato che le prime linee sarebbero partite a gennaio.", question: "What did the regional president say?", options: ["The first lines would start in January.", "The lines started last January.", "The plan was rejected.", "The lines will never start."], correctIndex: 0, explanation: "Future in the past." },
      { type: "listen-choose", audio: "Sull'autostrada code a tratti per un incidente all'altezza dell'uscita di Valbruna.", question: "Where is the accident?", options: ["Near the Valbruna exit", "In the town centre", "At the railway station", "On a mountain road"], correctIndex: 0, explanation: "\"All'altezza di\" = near, level with." },
      { type: "translate", direction: "en-es", prompt: "Translate as a radio bulletin.", source: "Good morning, it's eight o'clock.", answer: "Buongiorno, sono le otto.", explanation: "The opening formula." },
      { type: "translate", direction: "en-es", prompt: "Translate as a radio bulletin.", source: "Here are the headlines.", answer: "Questi i titoli.", altAnswers: ["Ecco i titoli."], explanation: "Verbless formula." },
      { type: "translate", direction: "en-es", prompt: "Translate as a radio news item.", source: "The regional council approved the new transport plan last night.", answer: "Il consiglio regionale ha approvato ieri sera il nuovo piano dei trasporti.", altAnswers: ["Ieri sera il consiglio regionale ha approvato il nuovo piano dei trasporti."], explanation: "\"Ieri sera\" = last night (evening)." },
      { type: "translate", direction: "en-es", prompt: "Translate as a radio news item.", source: "The opposition is critical.", answer: "Critica l'opposizione.", altAnswers: ["L'opposizione è critica."], explanation: "Spoken news puts the adjective first." },
      { type: "translate", direction: "en-es", prompt: "Translate as a radio news item (unconfirmed).", source: "There were reportedly three robbers.", answer: "I banditi sarebbero stati tre.", altAnswers: ["I rapinatori sarebbero stati tre."], explanation: "\"Sarebbero stati\": past conditional of \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a radio bulletin.", source: "The next news bulletin is at nine.", answer: "Il prossimo appuntamento con il giornale radio è alle nove.", altAnswers: ["Il prossimo giornale radio è alle nove."], explanation: "Closing formula." },
      { type: "translate", direction: "en-es", prompt: "Translate as a radio news item.", source: "Night-time robbery at a jeweller's in the town centre.", answer: "Rapina nella notte in una gioielleria del centro.", altAnswers: ["Rapina notturna in una gioielleria del centro."], explanation: "Nominal radio headline." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On the motorway, [queues in places].", sentence: "Sull'autostrada, ___.", answer: "code a tratti", explanation: "\"A tratti\" = here and there." },
      { type: "multiple-choice", question: "In a bulletin, the section on \"la viabilità\" covers ...", options: ["traffic and road conditions", "the weather", "local politics", "sports results"], correctIndex: 0, explanation: "\"Viabilità\" = road traffic conditions." },
      { type: "dictation", audio: "Rallentamenti all'altezza dell'uscita di Valbruna.", explanation: "Traffic news: \"all'altezza di\"." },
      { type: "speak", text: "Buongiorno, sono le otto. Questi i titoli: sciopero dei trasporti, treni a rischio.", prompt: "Open the bulletin as the newsreader: Good morning, it's eight o'clock. Here are the headlines: transport strike, trains at risk.", tip: "Steady pace, short pause after \"titoli\".", explanation: "Radio opening + headline." },
    ],
  },
  {
    slug: "c1-mission-opinion-column",
    level: "IT-C1",
    number: 9,
    title: "Real-World Mission: Write a Column",
    summary: "Plan and write a 250-word opinion column for a local paper: hook, thesis, concession, counter-argument and a closing punch.",
    duration: "19 min",
    kind: "review",
    sections: [
      {
        heading: "Hook and thesis",
        body: [
          "Your mission: \"La Voce di Valbruna\" has invited readers to write a column on a local question: the council wants to ban cars from the main square on weekends. You are in favour. Your column must persuade a sceptical reader in about 250 words.",
          "Start with a hook: a small scene or a striking fact. \"Sabato mattina, piazza Garibaldi: dodici auto in doppia fila, un bambino in bicicletta che cerca un varco\". Then the thesis, short and clear: \"Chiudere la piazza alle auto nel fine settimana non è un capriccio: è una scelta di buon senso\".",
        ],
        examples: [
          { es: "Sabato mattina, piazza Garibaldi: dodici auto in doppia fila.", en: "Saturday morning, piazza Garibaldi: twelve cars double-parked." },
          { es: "Un bambino in bicicletta cerca un varco.", en: "A child on a bicycle looks for a gap." },
          { es: "Chiudere la piazza alle auto non è un capriccio.", en: "Closing the square to cars is not a whim." },
          { es: "È una scelta di buon senso.", en: "It is a common-sense choice." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate the column's thesis.", source: "Closing the square to cars is not a whim: it is a common-sense choice.", answer: "Chiudere la piazza alle auto non è un capriccio: è una scelta di buon senso.", altAnswers: ["Chiudere la piazza al traffico non è un capriccio: è una scelta di buon senso."], explanation: "Infinitive as subject; \"non è... è...\" frames the thesis." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Twelve cars [double-parked].", sentence: "Dodici auto ___.", answer: "in doppia fila", explanation: "\"Parcheggiare in doppia fila\" = to double-park." },
        ],
      },
      {
        heading: "Concession, counter-argument, punch",
        body: [
          "Grant the strongest objection: \"Certo, i commercianti temono di perdere clienti. È una preoccupazione legittima\". Then answer it: \"Ma i dati di altre città raccontano un'altra storia: dove le piazze sono pedonali, i negozi lavorano di più\". Use a rhetorical question to involve the reader: \"Chi di noi si ferma a guardare una vetrina tra i clacson?\"",
          "End with a punch: a short sentence that echoes the hook or twists a familiar phrase. \"Proviamo per un anno. Al massimo, avremo perso un parcheggio. E forse ritrovato una piazza\". Sign off with your name, as in a real paper.",
        ],
        examples: [
          { es: "Certo, i commercianti temono di perdere clienti.", en: "Of course, shopkeepers fear losing customers." },
          { es: "È una preoccupazione legittima.", en: "It is a legitimate concern." },
          { es: "Dove le piazze sono pedonali, i negozi lavorano di più.", en: "Where squares are pedestrianised, shops do more business." },
          { es: "Chi di noi si ferma a guardare una vetrina tra i clacson?", en: "Which of us stops to look at a shop window amid the car horns?" },
          { es: "Al massimo, avremo perso un parcheggio. E forse ritrovato una piazza.", en: "At worst, we'll have lost a car park. And perhaps found a square again." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate the concession.", source: "Of course, shopkeepers fear losing customers.", answer: "Certo, i commercianti temono di perdere clienti.", altAnswers: ["Certo, i negozianti temono di perdere clienti.", "Certo, i commercianti hanno paura di perdere clienti."], explanation: "\"Temere di\" + infinitive." },
          { type: "multiple-choice", question: "Which sentence works best as the closing punch?", options: ["Al massimo, avremo perso un parcheggio. E forse ritrovato una piazza.", "In conclusione, si ritiene opportuno procedere alla chiusura.", "Secondo fonti comunali, la piazza sarebbe chiusa.", "Ci sono pro e contro, vedremo."], correctIndex: 0, explanation: "Short, memorable, echoing the topic; the others are bureaucratic, journalistic or flat." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate the hook.", source: "Saturday morning, piazza Garibaldi: twelve cars double-parked.", answer: "Sabato mattina, piazza Garibaldi: dodici auto in doppia fila.", explanation: "A verbless scene as a hook." },
      { type: "translate", direction: "en-es", prompt: "Translate for the column.", source: "It is a legitimate concern.", answer: "È una preoccupazione legittima.", altAnswers: ["È un timore legittimo."], explanation: "Concession before the \"ma\"." },
      { type: "translate", direction: "en-es", prompt: "Translate for the column.", source: "But the data from other cities tell another story.", answer: "Ma i dati di altre città raccontano un'altra storia.", altAnswers: ["Ma i dati delle altre città raccontano un'altra storia.", "Però i dati di altre città raccontano un'altra storia."], explanation: "\"Ma\" carries the counter-argument." },
      { type: "translate", direction: "en-es", prompt: "Translate for the column.", source: "Where squares are pedestrianised, shops do more business.", answer: "Dove le piazze sono pedonali, i negozi lavorano di più.", altAnswers: ["Dove le piazze sono pedonalizzate, i negozi lavorano di più.", "Dove le piazze sono pedonali, i negozi vendono di più."], explanation: "\"Lavorare di più\" for shops = do more business." },
      { type: "translate", direction: "en-es", prompt: "Translate the rhetorical question.", source: "Which of us stops to look at a shop window amid the car horns?", answer: "Chi di noi si ferma a guardare una vetrina tra i clacson?", altAnswers: ["Chi di noi si ferma a guardare una vetrina in mezzo ai clacson?"], explanation: "\"Clacson\" is invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate the closing punch.", source: "Let's try it for a year.", answer: "Proviamo per un anno.", altAnswers: ["Proviamoci per un anno.", "Facciamo una prova per un anno."], explanation: "First person plural imperative involves the reader." },
      { type: "translate", direction: "en-es", prompt: "Translate the closing punch.", source: "At worst, we'll have lost a car park.", answer: "Al massimo, avremo perso un parcheggio.", altAnswers: ["Nel peggiore dei casi, avremo perso un parcheggio."], explanation: "Future perfect looking back from the future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let's be clear], nobody wants to harm the shops.", sentence: "___, nessuno vuole danneggiare i negozi.", answer: "Intendiamoci", altAnswers: ["Sia chiaro"], explanation: "Columnist's marker." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Nobody denies that parking [is] a problem.", sentence: "Nessuno nega che il parcheggio ___ un problema.", answer: "sia", explanation: "Subjunctive after \"nessuno nega che\"." },
      {
        type: "word-order",
        prompt: "Put the words in order to say: And perhaps found a square again.",
        words: ["E", "forse", "ritrovato", "una", "piazza."],
        translation: "And perhaps found a square again.",
        explanation: "\"Avremo\" is understood from the previous sentence.",
      },
      { type: "multiple-choice", question: "What is the right order for the column?", options: ["Hook, thesis, concession, counter-argument, punch", "Punch, concession, hook, thesis", "Thesis, sources, conditional, signature", "Concession, thesis, hook"], correctIndex: 0, explanation: "The classic column shape." },
      { type: "listen-choose", audio: "Chiudere la piazza alle auto nel fine settimana non è un capriccio: è una scelta di buon senso.", question: "What is the writer's position?", options: ["In favour of closing the square to cars at weekends", "Against closing the square", "Undecided", "In favour of more car parks"], correctIndex: 0, explanation: "\"Scelta di buon senso\" = common-sense choice." },
      { type: "speak", text: "Proviamo per un anno. Al massimo, avremo perso un parcheggio. E forse ritrovato una piazza.", prompt: "Read your closing lines with conviction: Let's try it for a year. At worst, we'll have lost a car park. And perhaps found a square again.", tip: "Slow down and pause before the last sentence.", explanation: "The punch." },
    ],
  },
  {
    slug: "c1-transform-fact-to-news",
    level: "IT-C1",
    number: 10,
    title: "Transformations: Facts to Article",
    summary: "Turn a reporter's notes into a headline, a lead and an article: nominalise, passivise, attribute and choose indicative or conditional.",
    duration: "19 min",
    sections: [
      {
        heading: "From notes to lead",
        body: [
          "A reporter's notebook is full of fragments: \"ieri sera, ore 22, via Roma, auto contro moto, motociclista 30 anni ferito, ospedale, non grave\". The lead (\"l'attacco\") turns them into one or two sentences that answer the five questions: \"chi, che cosa, dove, quando, perché\".",
          "\"Ieri sera, verso le 22, un motociclista di 30 anni è rimasto ferito in uno scontro con un'auto in via Roma. Trasportato in ospedale, non sarebbe in gravi condizioni\". Note \"rimanere ferito\" (to be injured), the participle clause \"Trasportato in ospedale\" and the conditional for the unconfirmed medical news.",
        ],
        examples: [
          { es: "Un motociclista di 30 anni è rimasto ferito in uno scontro.", en: "A 30-year-old motorcyclist was injured in a collision." },
          { es: "Trasportato in ospedale, non sarebbe in gravi condizioni.", en: "Taken to hospital, he is reportedly not in a serious condition." },
          { es: "L'incidente è avvenuto ieri sera in via Roma.", en: "The accident happened last night in via Roma." },
          { es: "Sul posto sono intervenuti i vigili urbani.", en: "The local police came to the scene." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn the notes into a news sentence.", source: "A 30-year-old motorcyclist was injured in a collision.", answer: "Un motociclista di 30 anni è rimasto ferito in uno scontro.", altAnswers: ["Un motociclista di trent'anni è rimasto ferito in uno scontro.", "Un motociclista di 30 anni è stato ferito in uno scontro."], explanation: "\"Rimanere ferito\": the news verb for being injured." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Taken to hospital], he is reportedly not in a serious condition.", sentence: "___, non sarebbe in gravi condizioni.", answer: "Trasportato in ospedale", altAnswers: ["Portato in ospedale"], explanation: "Participle clause instead of a full sentence." },
        ],
      },
      {
        heading: "Nominalise for headlines, passivise for news",
        body: [
          "The same facts become a headline by turning verbs into nouns or bare participles: \"un'auto ha urtato una moto\" → \"Scontro auto-moto in via Roma, ferito un trentenne\". For the body of the article, Italian news prefers the passive or \"si\" when the agent is unknown or unimportant: \"È stata aperta un'inchiesta\" (an inquiry has been opened), \"Si cercano testimoni\" (witnesses are being sought).",
          "Finally, separate facts from claims. What the police confirm goes in the indicative; what witnesses say goes in the conditional or is attributed: \"Secondo alcuni testimoni, l'auto non avrebbe rispettato lo stop\".",
        ],
        examples: [
          { es: "Scontro auto-moto in via Roma, ferito un trentenne.", en: "Car-motorbike collision in via Roma, man in his thirties injured." },
          { es: "È stata aperta un'inchiesta.", en: "An inquiry has been opened." },
          { es: "Si cercano testimoni.", en: "Witnesses are being sought." },
          { es: "Secondo alcuni testimoni, l'auto non avrebbe rispettato lo stop.", en: "According to some witnesses, the car didn't stop at the stop sign." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Write the news sentence.", source: "Witnesses are being sought.", answer: "Si cercano testimoni.", altAnswers: ["Si cercano dei testimoni.", "Sono ricercati testimoni."], explanation: "\"Si\" + plural verb with a plural noun." },
          { type: "translate", direction: "en-es", prompt: "Write the news sentence.", source: "An inquiry has been opened.", answer: "È stata aperta un'inchiesta.", altAnswers: ["È stata avviata un'inchiesta."], explanation: "Passive, agent omitted." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Notes: \"ieri, ore 15, scuola Dante, incendio cucina, nessun ferito\". Write the lead: A fire broke out yesterday afternoon in the kitchen of the Dante school; nobody was injured.", source: "A fire broke out yesterday afternoon in the kitchen of the Dante school; nobody was injured.", answer: "Ieri pomeriggio è scoppiato un incendio nella cucina della scuola Dante; nessuno è rimasto ferito.", altAnswers: ["Ieri pomeriggio un incendio è scoppiato nella cucina della scuola Dante; nessuno è rimasto ferito.", "Ieri pomeriggio è divampato un incendio nella cucina della scuola Dante; non ci sono feriti."], explanation: "\"Scoppiare\" = to break out." },
      { type: "translate", direction: "en-es", prompt: "Write the headline from the same notes.", source: "Fire at the Dante school, nobody injured.", answer: "Incendio alla scuola Dante, nessun ferito.", altAnswers: ["Fiamme alla scuola Dante, nessun ferito.", "Incendio nella scuola Dante, nessun ferito."], explanation: "Nominal headline." },
      { type: "translate", direction: "en-es", prompt: "Write the news sentence.", source: "The pupils were evacuated in a few minutes.", answer: "Gli alunni sono stati evacuati in pochi minuti.", altAnswers: ["Gli studenti sono stati evacuati in pochi minuti."], explanation: "Passive with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Write the news sentence (unconfirmed).", source: "The fire reportedly started from an oven.", answer: "Le fiamme sarebbero partite da un forno.", altAnswers: ["L'incendio sarebbe partito da un forno.", "L'incendio sarebbe scoppiato in un forno."], explanation: "Cause not yet confirmed: conditional." },
      { type: "translate", direction: "en-es", prompt: "Write the news sentence.", source: "The local police came to the scene.", answer: "Sul posto sono intervenuti i vigili urbani.", altAnswers: ["Sul posto è intervenuta la polizia locale.", "Sono intervenuti sul posto i vigili urbani."], explanation: "Verb before subject: news style." },
      { type: "translate", direction: "en-es", prompt: "Write the news sentence.", source: "The school will remain closed until Monday.", answer: "La scuola resterà chiusa fino a lunedì.", altAnswers: ["La scuola rimarrà chiusa fino a lunedì."], explanation: "\"Restare chiuso\" = to remain closed." },
      { type: "translate", direction: "en-es", prompt: "Notes: \"preside: 'tutto sotto controllo, ragazzi bravissimi'\". Write the attributed quotation: 'Everything is under control,' the headteacher said.", source: "'Everything is under control,' the headteacher said.", answer: "«È tutto sotto controllo», ha dichiarato la preside.", altAnswers: ["«Tutto è sotto controllo», ha dichiarato la preside.", "«È tutto sotto controllo», ha detto la preside.", "«È tutto sotto controllo», ha dichiarato il preside."], explanation: "Quotation, then a verb of saying." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The accident [happened] last night.", sentence: "L'incidente ___ ieri sera.", answer: "è avvenuto", altAnswers: ["è successo", "è accaduto"], explanation: "\"Avvenire\" = to happen, formal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[An inquiry has been opened] into the causes.", sentence: "___ sulle cause.", answer: "È stata aperta un'inchiesta", altAnswers: ["È stata avviata un'inchiesta"], explanation: "Passive, agent omitted." },
      { type: "multiple-choice", question: "Notes say: \"testimone: auto passata col rosso (non confermato)\". Which sentence fits the article?", options: ["Secondo un testimone, l'auto sarebbe passata col rosso.", "L'auto è passata col rosso.", "L'auto passava col rosso, ha confermato la polizia.", "L'auto passerà col rosso."], correctIndex: 0, explanation: "Unconfirmed witness claim: attribution + conditional." },
      { type: "dictation", audio: "Trasportato in ospedale, non sarebbe in gravi condizioni.", explanation: "Participle clause + journalistic conditional." },
      { type: "speak", text: "Ieri sera, in via Roma, un motociclista è rimasto ferito in uno scontro con un'auto. Si cercano testimoni.", prompt: "Read your lead as a news item: Last night, in via Roma, a motorcyclist was injured in a collision with a car. Witnesses are being sought.", tip: "\"Scontro\": the s is voiceless before c.", explanation: "Lead + impersonal appeal." },
    ],
  },
];

export const IT_C1_U06_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your local paper invites readers to write an opinion column. The council wants to ban mobile phones in all the town's secondary schools, including at break time. Write a column for or against the ban: open with a hook, state your thesis, concede the strongest point on the other side, answer it, and end with a memorable line.",
  minWords: 220,
  maxWords: 280,
  rubric: [
    "Has a column structure: hook, clear thesis, concession, counter-argument and closing punch",
    "Uses the columnist's voice: first person, rhetorical questions, markers like diciamolo, intendiamoci, il punto è un altro",
    "Handles mood correctly in concession (nessuno nega che + subjunctive; resta il fatto che + indicative)",
    "Attributes facts or reports properly (secondo, a detta di, the journalistic conditional) instead of inventing certainties",
  ],
  modelAnswer: "Ore 10.30, intervallo in un liceo qualunque. Trenta ragazzi nel cortile, trenta teste chine su trenta schermi. Nessuno parla, nessuno gioca, qualcuno ride da solo. Diciamolo: è una scena che conosciamo tutti, e che non ci piace. Per questo la proposta della giunta di vietare i cellulari a scuola, anche durante l'intervallo, mi sembra giusta. Intendiamoci, nessuno nega che il telefono sia uno strumento utile. Serve per avvisare i genitori, per cercare un'informazione, perfino per studiare. E certo, qualcuno dirà che vietare è sempre la soluzione più facile, e che i ragazzi andrebbero educati, non controllati. È un'obiezione seria. Ma il punto è un altro. A scuola i ragazzi passano cinque ore al giorno: è forse troppo chiedere che, almeno lì, imparino a stare insieme senza uno schermo in mezzo? Secondo diversi studi europei, nelle scuole dove il telefono resta nell'armadietto i risultati migliorerebbero e gli episodi di bullismo online diminuirebbero. Non sono miracoli, ma sono segnali. E pensiamo agli insegnanti, che oggi passano metà della lezione a chiedere di mettere via il telefono: un tempo prezioso, sottratto alla matematica, alla storia, alla letteratura. Qualcuno davvero lo rimpiangerà? Resta il fatto che l'educazione digitale si fa anche insegnando a spegnere. E chi teme per le emergenze può stare tranquillo: le scuole hanno ancora un telefono, e funziona benissimo. Proviamo per un anno. Al massimo, avremo perso qualche messaggio. E forse ritrovato qualche conversazione.",
  explanation: "The column opens with a verbless scene (\"Trenta ragazzi nel cortile, trenta teste chine\") and states the thesis early. The concession uses \"nessuno nega che\" with the subjunctive \"sia\" and grants an objection (\"È un'obiezione seria\") before the pivot \"Ma il punto è un altro\". The studies are attributed with \"secondo\" and the journalistic conditional (\"migliorerebbero\", \"diminuirebbero\"), since the writer hasn't verified them. \"Resta il fatto che\" introduces the writer's own point in the indicative, and the closing echoes the hook with a twist.",
};
