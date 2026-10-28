// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u27.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 27: Media and the News. Headline style, the structure of
// an article, the conditional of hearsay (recognised), numbers and
// percentages, the passive and si in news. Conventions:
// docs/italian-course/authoring.md.
export const IT_B1_U27: Lesson[] = [
  {
    slug: "b1-headlines",
    level: "IT-B1",
    number: 1,
    title: "Reading Headlines",
    summary: "Decode the nominal style of Italian headlines: no verbs, no articles, colons and commas doing the work.",
    duration: "17 min",
    sections: [
      {
        heading: "Nouns instead of verbs",
        body: [
          "Italian headlines (\"i titoli\") prefer nouns to verbs: \"Sciopero dei treni venerdì\" (train strike on Friday) instead of \"I treni scioperano venerdì\". The action becomes a noun: \"scioperare\" → \"lo sciopero\", \"aumentare\" → \"l'aumento\", \"chiudere\" → \"la chiusura\", \"arrestare\" → \"l'arresto\", \"approvare\" → \"il via libera\" (the go-ahead).",
          "To read a headline, turn the noun back into a verb in your head: \"Chiusura della A14 per lavori\" = la A14 chiude per lavori. Articles also disappear: \"Nuovo museo in centro\", \"Furto in farmacia\". Italian motorways are feminine because \"autostrada\" is: \"la A1\", \"sulla A14\".",
        ],
        examples: [
          { es: "Sciopero dei treni venerdì: a rischio i Frecciarossa.", en: "Train strike on Friday: Frecciarossa services at risk." },
          { es: "Chiusura della A14 tra Pescara e Ancona per lavori.", en: "A14 closed between Pescara and Ancona for roadworks." },
          { es: "Aumento delle bollette: più 8% da gennaio.", en: "Bills go up: 8% more from January." },
          { es: "Furto in farmacia, arrestato un trentenne.", en: "Pharmacy theft, a man in his thirties arrested." },
          { es: "Via libera al nuovo ponte sul Po.", en: "Go-ahead for the new bridge over the Po." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Chiusura della biblioteca comunale per due settimane\". What happens?", options: ["The town library closes for two weeks.", "The library opens in two weeks.", "The library is closing permanently.", "The library is open late for two weeks."], correctIndex: 0, explanation: "\"Chiusura\" is the noun of \"chiudere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The trains are on strike on Friday.", answer: "Venerdì i treni scioperano.", altAnswers: ["I treni scioperano venerdì.", "Venerdì c'è sciopero dei treni.", "Venerdì c'è lo sciopero dei treni."], explanation: "Headline \"Sciopero dei treni venerdì\" turned back into a sentence." },
        ],
      },
      {
        heading: "Colons, commas and the past participle",
        body: [
          "A colon often separates the topic from the news: \"Roma, nuovo museo in centro\" (place, then fact), \"Maltempo: scuole chiuse a Genova\" (cause: consequence). A past participle with no auxiliary is a short passive: \"Arrestato un trentenne\" = un trentenne è stato arrestato; \"Ritrovato il cane scomparso\" = the missing dog has been found.",
          "Ages become nouns: \"un trentenne\" (a man in his thirties, or aged thirty), \"una ventenne\", \"un sessantenne\". Numbers in figures: \"due feriti\" (two injured), \"tre morti\".",
        ],
        examples: [
          { es: "Maltempo: scuole chiuse a Genova e La Spezia.", en: "Bad weather: schools closed in Genoa and La Spezia." },
          { es: "Incidente sulla A1: due feriti.", en: "Accident on the A1: two injured." },
          { es: "Ritrovato il cane scomparso a Ferragosto.", en: "Dog that went missing in mid-August found." },
          { es: "Napoli, inaugurata la nuova stazione della metro.", en: "Naples: the new metro station opens." },
          { es: "Venezia, una ventenne salva un turista nel canale.", en: "Venice: a woman in her twenties saves a tourist in the canal." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The missing dog has been found.", answer: "Il cane scomparso è stato ritrovato.", altAnswers: ["Hanno ritrovato il cane scomparso.", "Il cane scomparso è stato trovato."], explanation: "Headline \"Ritrovato il cane scomparso\" in full: passive with \"essere\"." },
          { type: "listen-choose", audio: "Incidente sulla A1: due feriti.", question: "What happened?", options: ["An accident on the A1 with two people injured.", "Two accidents on the A1.", "Two people died on the A1.", "The A1 is closed for two days."], correctIndex: 0, explanation: "\"Feriti\" = injured; \"morti\" = dead." },
        ],
      },
      {
        heading: "Sections of the paper",
        body: [
          "Headlines live in sections: \"Politica\", \"Cronaca\" (local news, crime and accidents: a false friend for chronicle), \"Economia\", \"Esteri\" (foreign news), \"Sport\", \"Cultura\" and \"Meteo\". \"La cronaca nera\" is crime; \"la cronaca rosa\" is celebrity gossip.",
          "Politics headlines are full of short words: \"il governo\", \"il premier\", \"la Camera\", \"il Senato\", \"il decreto\", \"la manovra\" (the budget), \"il sindaco\" (mayor).",
        ],
        examples: [
          { es: "Cronaca: rapina in banca a Verona.", en: "Local news: bank robbery in Verona." },
          { es: "Esteri: elezioni in Francia, affluenza record.", en: "Foreign news: elections in France, record turnout." },
          { es: "Manovra, il governo trova l'accordo sulle pensioni.", en: "Budget: the government reaches agreement on pensions." },
          { es: "Meteo: settimana di sole al Sud, piogge al Nord.", en: "Weather: a sunny week in the South, rain in the North." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Where would you find a story about a burglary in your town?", options: ["Cronaca", "Esteri", "Economia", "Cultura"], correctIndex: 0, explanation: "\"Cronaca\" = local news, crime, accidents." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The mayor] has opened the new park.", sentence: "___ ha inaugurato il nuovo parco.", answer: "Il sindaco", altAnswers: ["La sindaca"], explanation: "\"Il sindaco\" = the mayor." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The A14 is closed for roadworks.", answer: "La A14 è chiusa per lavori.", altAnswers: ["L'A14 è chiusa per lavori.", "L'autostrada A14 è chiusa per lavori."], explanation: "Motorways are feminine: \"la A14\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bills are going up from January.", answer: "Le bollette aumentano da gennaio.", altAnswers: ["Da gennaio le bollette aumentano.", "Le bollette aumenteranno da gennaio.", "Da gennaio aumentano le bollette."], explanation: "\"Aumento delle bollette\" back into a verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A man in his thirties has been arrested.", answer: "Un trentenne è stato arrestato.", altAnswers: ["È stato arrestato un trentenne.", "Hanno arrestato un trentenne."], explanation: "\"Arrestato un trentenne\" in full." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The schools are closed because of bad weather.", answer: "Le scuole sono chiuse per il maltempo.", altAnswers: ["Le scuole sono chiuse a causa del maltempo.", "Per il maltempo le scuole sono chiuse."], explanation: "\"Per\" or \"a causa di\" = because of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a train strike on Friday.", answer: "Venerdì c'è uno sciopero dei treni.", altAnswers: ["Venerdì c'è lo sciopero dei treni.", "C'è uno sciopero dei treni venerdì.", "C'è lo sciopero dei treni venerdì."], explanation: "\"Uno sciopero\": \"uno\" before s + consonant." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The new station has been opened].", sentence: "___ la nuova stazione.", answer: "È stata inaugurata", explanation: "Passive, agreeing with \"stazione\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Accident on the A1: [two injured].", sentence: "Incidente sulla A1: ___.", answer: "due feriti", explanation: "\"Ferito\" = injured." },
      { type: "word-order", prompt: "Put the words in order to say: Go-ahead for the new bridge.", words: ["Via", "libera", "al", "nuovo", "ponte."], translation: "Go-ahead for the new bridge.", explanation: "\"Via libera a\" = green light for." },
      { type: "matching", instructions: "Match the verb to its headline noun.", pairs: [{ left: "scioperare", right: "lo sciopero" }, { left: "aumentare", right: "l'aumento" }, { left: "chiudere", right: "la chiusura" }, { left: "arrestare", right: "l'arresto" }, { left: "approvare", right: "l'approvazione" }], explanation: "Headlines turn verbs into nouns." },
      { type: "multiple-choice", question: "\"Esteri\" is the section for ...", options: ["foreign news", "summer news", "the economy", "local crime"], correctIndex: 0, explanation: "\"Estero\" = abroad." },
      { type: "dictation", audio: "Maltempo: scuole chiuse a Genova.", explanation: "Colon: cause, then consequence." },
      { type: "speak", text: "Hai letto? Domani c'è sciopero dei treni e la A1 è chiusa per lavori.", prompt: "Tell a friend the news: Have you read it? Tomorrow there's a train strike and the A1 is closed for roadworks.", tip: "Say \"la A1\" as \"la a uno\".", explanation: "Headlines turned into everyday speech." },
    ],
  },
  {
    slug: "b1-news-structure",
    level: "IT-B1",
    number: 2,
    title: "How a News Article Works",
    summary: "Find who, what, where and when in the first paragraph, and read how articles quote and report what people said.",
    duration: "17 min",
    sections: [
      {
        heading: "The first paragraph",
        body: [
          "Like English news, an Italian article puts the essentials first: \"chi, che cosa, dove, quando\" (and sometimes \"perché\"). The first paragraph (\"l'attacco\" or \"il lead\") often starts with the time and place: \"Ieri mattina, a Brescia, un incendio è scoppiato in un magazzino di via Milano\".",
          "Tenses: the passato prossimo for recent events, the imperfetto for background (\"Nel magazzino non c'era nessuno\"), the present for what is still true (\"Le indagini sono in corso\": the investigation is ongoing). Many articles also use the present for vividness: \"I vigili del fuoco arrivano in pochi minuti\".",
        ],
        examples: [
          { es: "Ieri mattina, a Brescia, è scoppiato un incendio in un magazzino.", en: "Yesterday morning in Brescia a fire broke out in a warehouse." },
          { es: "Nel magazzino, per fortuna, non c'era nessuno.", en: "Luckily, nobody was in the warehouse." },
          { es: "I vigili del fuoco sono arrivati in pochi minuti.", en: "The fire brigade arrived within minutes." },
          { es: "Le cause dell'incendio sono ancora da chiarire.", en: "The causes of the fire are yet to be established." },
          { es: "Le indagini sono in corso.", en: "The investigation is ongoing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luckily, nobody was in the building.", answer: "Per fortuna nell'edificio non c'era nessuno.", altAnswers: ["Per fortuna non c'era nessuno nell'edificio.", "Fortunatamente nell'edificio non c'era nessuno.", "Per fortuna nel palazzo non c'era nessuno."], explanation: "Background state: imperfetto \"c'era\"; \"non ... nessuno\"." },
          { type: "listen-choose", audio: "Ieri mattina, a Brescia, è scoppiato un incendio in un magazzino.", question: "What happened?", options: ["A fire broke out in a warehouse in Brescia.", "A warehouse was robbed in Brescia.", "A bomb exploded in Brescia.", "A shop closed in Brescia."], correctIndex: 0, explanation: "\"Scoppiare\" = to break out (a fire), to burst." },
        ],
      },
      {
        heading: "Quotes and reported words",
        body: [
          "Articles quote people with \"ha detto\", \"ha dichiarato\" (stated), \"ha spiegato\", \"ha raccontato\", and very often with the quote first: \"«Abbiamo sentito un'esplosione», racconta un vicino\". Italian uses « » (caporali) or \" \" for quotes.",
          "Reported speech is common too: \"Il sindaco ha detto che la scuola riaprirà lunedì\". After a past reporting verb the future often becomes the conditional perfect (\"ha detto che sarebbe riaperta\"); you'll study this in Unit 32. For now, recognise both.",
        ],
        examples: [
          { es: "«Abbiamo sentito un'esplosione», racconta un vicino.", en: "'We heard an explosion,' says a neighbour." },
          { es: "Il sindaco ha dichiarato che la situazione è sotto controllo.", en: "The mayor stated that the situation is under control." },
          { es: "La direttrice ha spiegato che la scuola riaprirà lunedì.", en: "The head teacher explained that the school will reopen on Monday." },
          { es: "«Non ci sono feriti», ha confermato la polizia.", en: "'There are no injuries,' the police confirmed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The mayor said that the school will reopen on Monday.", answer: "Il sindaco ha detto che la scuola riaprirà lunedì.", altAnswers: ["Il sindaco ha detto che la scuola riapre lunedì.", "La sindaca ha detto che la scuola riaprirà lunedì.", "Il sindaco ha detto che la scuola sarebbe riaperta lunedì."], explanation: "\"Ha detto che\" + the news; the future is fine when it's still to come." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "'There are no injuries,' [the police confirmed].", sentence: "«Non ci sono feriti», ___.", answer: "ha confermato la polizia", explanation: "After a quote, the verb comes before the subject." },
        ],
      },
      {
        heading: "Who's who in the news",
        body: [
          "Crime and accident stories have their own cast: \"i carabinieri\" and \"la polizia\" (two separate police forces), \"i vigili del fuoco\" (fire brigade), \"i vigili urbani\" or \"la polizia locale\" (municipal police), \"i soccorritori\" (rescuers), \"il testimone\" (witness), \"la vittima\" (always feminine, even for a man).",
        ],
        examples: [
          { es: "I carabinieri hanno fermato due giovani.", en: "The carabinieri stopped two young men." },
          { es: "Un testimone ha chiamato i soccorsi.", en: "A witness called the emergency services." },
          { es: "La vittima, un uomo di 50 anni, è stata portata in ospedale.", en: "The victim, a 50-year-old man, was taken to hospital." },
          { es: "La polizia locale ha chiuso la strada al traffico.", en: "The local police closed the road to traffic." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"La vittima, un uomo di 70 anni, è stata soccorsa\". Why \"stata\" and not \"stato\"?", options: ["It agrees with \"la vittima\", which is always feminine.", "It's a mistake.", "Because he's old.", "Because it's in the past."], correctIndex: 0, explanation: "Grammar follows the noun \"vittima\", not the person's gender." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A witness called the police.", answer: "Un testimone ha chiamato la polizia.", altAnswers: ["Una testimone ha chiamato la polizia.", "Un testimone ha chiamato i carabinieri."], explanation: "\"Il / la testimone\": same form for both." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The fire brigade arrived within minutes.", answer: "I vigili del fuoco sono arrivati in pochi minuti.", altAnswers: ["I pompieri sono arrivati in pochi minuti.", "I vigili del fuoco sono arrivati nel giro di pochi minuti."], explanation: "\"Arrivare\" takes \"essere\": \"arrivati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The investigation is ongoing.", answer: "Le indagini sono in corso.", altAnswers: ["Le indagini continuano.", "Sono in corso le indagini."], explanation: "\"Le indagini\" is usually plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The victim was taken to hospital.", answer: "La vittima è stata portata in ospedale.", altAnswers: ["La vittima è stata trasportata in ospedale.", "Hanno portato la vittima in ospedale."], explanation: "\"Vittima\" is feminine: \"stata portata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The causes are yet to be established.", answer: "Le cause sono ancora da chiarire.", altAnswers: ["Le cause sono ancora da accertare.", "Le cause devono ancora essere chiarite."], explanation: "\"Da\" + infinitive = still to be done." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The police closed the road.", answer: "La polizia ha chiuso la strada.", altAnswers: ["La polizia locale ha chiuso la strada.", "I vigili hanno chiuso la strada."], explanation: "\"La polizia\" takes a singular verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "'We heard a bang,' [says a neighbour].", sentence: "«Abbiamo sentito un botto», ___.", answer: "racconta un vicino", altAnswers: ["dice un vicino", "racconta una vicina", "dice una vicina"], explanation: "Verb before subject after a quote." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The minister [stated] that taxes won't go up.", sentence: "Il ministro ___ che le tasse non aumenteranno.", answer: "ha dichiarato", altAnswers: ["ha detto", "ha affermato"], explanation: "\"Dichiarare\" = to state, typical of news." },
      { type: "word-order", prompt: "Put the words in order to say: Yesterday evening a fire broke out in Brescia.", words: ["Ieri", "sera", "è", "scoppiato", "un", "incendio", "a", "Brescia."], translation: "Yesterday evening a fire broke out in Brescia.", explanation: "Time and place first, then the event." },
      { type: "multiple-choice", question: "Which question does the first paragraph of a news article NOT usually answer?", options: ["What does the journalist think?", "Who?", "Where?", "When?"], correctIndex: 0, explanation: "The lead gives facts, not opinions." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "i vigili del fuoco", right: "the fire brigade" }, { left: "il testimone", right: "the witness" }, { left: "le indagini", right: "the investigation" }, { left: "i soccorsi", right: "the emergency services" }, { left: "l'incendio", right: "the fire" }], explanation: "News vocabulary." },
      { type: "dictation", audio: "Le cause dell'incendio sono ancora da chiarire.", explanation: "\"Da chiarire\" = to be clarified." },
      { type: "speak", text: "Ieri sera a Brescia è scoppiato un incendio in un magazzino. Per fortuna non c'erano feriti.", prompt: "Summarise the news aloud: Yesterday evening in Brescia a fire broke out in a warehouse. Luckily there were no injuries.", tip: "Read it like a newsreader: steady pace, falling intonation.", explanation: "Lead structure: when, where, what, then background." },
    ],
  },
  {
    slug: "b1-conditional-of-hearsay",
    level: "IT-B1",
    number: 3,
    title: "According to Sources: The Journalistic Conditional",
    summary: "Recognise the conditional that marks unconfirmed news: il governo starebbe preparando, sarebbe stato visto.",
    duration: "17 min",
    sections: [
      {
        heading: "Sarebbe: it is said to be",
        body: [
          "Italian journalists use the conditional to say something is reported but not confirmed: \"Il ministro sarebbe pronto a dimettersi\" means the minister is said to be ready to resign. English needs extra words (reportedly, is said to, allegedly); Italian just changes the verb. You need to recognise it at B1, not produce it.",
          "It's often paired with a source: \"secondo indiscrezioni\" (according to leaks), \"secondo fonti vicine al governo\", \"stando a quanto riportato da ...\" (according to what was reported by). Don't read it as would: \"Il ladro sarebbe un ex dipendente\" is the thief is allegedly a former employee, not would be.",
        ],
        examples: [
          { es: "Il ministro sarebbe pronto a dimettersi.", en: "The minister is reportedly ready to resign." },
          { es: "Secondo indiscrezioni, la squadra avrebbe un nuovo allenatore.", en: "According to leaks, the team has a new coach." },
          { es: "Il ladro sarebbe un ex dipendente del negozio.", en: "The thief is allegedly a former employee of the shop." },
          { es: "Secondo fonti vicine al governo, l'accordo sarebbe vicino.", en: "According to sources close to the government, a deal is close." },
          { es: "Le vittime sarebbero almeno tre.", en: "There are reported to be at least three victims." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Il sindaco sarebbe pronto a cambiare la giunta\". What does it mean?", options: ["The mayor is reportedly ready to change his team.", "The mayor would be ready if he could.", "The mayor was ready to change his team.", "The mayor will be ready next week."], correctIndex: 0, explanation: "Conditional of hearsay: reported, not confirmed." },
          { type: "listen-choose", audio: "Secondo indiscrezioni, la squadra avrebbe un nuovo allenatore.", question: "How sure is the news?", options: ["It's an unconfirmed report.", "It's officially confirmed.", "It's a hypothesis about the future.", "It's the journalist's wish."], correctIndex: 0, explanation: "\"Secondo indiscrezioni\" + conditional = unconfirmed." },
        ],
      },
      {
        heading: "Starebbe preparando, sarebbe stato visto",
        body: [
          "The same trick works with other forms. \"Stare\" + gerund: \"Il governo starebbe preparando un nuovo decreto\" (is reportedly preparing). The past conditional reports a past event: \"Il ragazzo sarebbe uscito di casa alle dieci\" (reportedly left home at ten), \"L'uomo sarebbe stato visto alla stazione\" (was reportedly seen).",
          "Compare the confirmed version in the indicative: \"Il governo sta preparando\", \"È stato visto alla stazione\". Spotting the difference tells you how much the paper actually knows.",
        ],
        examples: [
          { es: "Il governo starebbe preparando un nuovo decreto sugli affitti.", en: "The government is reportedly preparing a new decree on rents." },
          { es: "Il ragazzo sarebbe uscito di casa verso le dieci.", en: "The boy reportedly left home at about ten." },
          { es: "L'uomo sarebbe stato visto alla stazione di Bologna.", en: "The man was reportedly seen at Bologna station." },
          { es: "I due si sarebbero conosciuti online.", en: "The two allegedly met online." },
          { es: "L'incendio sarebbe partito da un cortocircuito.", en: "The fire is thought to have started from a short circuit." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence presents the news as confirmed?", options: ["L'uomo è stato visto alla stazione.", "L'uomo sarebbe stato visto alla stazione.", "Secondo alcuni testimoni, l'uomo sarebbe alla stazione.", "L'uomo si troverebbe alla stazione."], correctIndex: 0, explanation: "Indicative = fact; conditional = reported." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The government is preparing a new law. (confirmed)", answer: "Il governo sta preparando una nuova legge.", altAnswers: ["Il governo prepara una nuova legge."], explanation: "A confirmed fact: indicative. The rumour would be \"starebbe preparando\"." },
        ],
      },
      {
        heading: "Translating it into English",
        body: [
          "When you meet this conditional, add an English hedge: reportedly, allegedly, is said to, is thought to. When you write the news yourself at B1, you can be just as careful with \"secondo\" + indicative: \"Secondo la polizia, il ladro è un ex dipendente\". That's always correct.",
        ],
        examples: [
          { es: "Secondo la polizia, il ladro è un ex dipendente.", en: "According to the police, the thief is a former employee." },
          { es: "Pare che il ministro voglia dimettersi.", en: "It seems the minister wants to resign." },
          { es: "Si dice che il nuovo stadio costerà troppo.", en: "It's said the new stadium will cost too much." },
          { es: "Sembra che l'accordo sia vicino.", en: "It seems a deal is close." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "According to the police, the driver is 25.", answer: "Secondo la polizia, l'autista ha 25 anni.", altAnswers: ["Secondo la polizia, il conducente ha 25 anni.", "Secondo la polizia l'autista ha 25 anni.", "Secondo la polizia, il guidatore ha 25 anni."], explanation: "\"Secondo\" + indicative: safe and correct." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems a deal [is] close.", sentence: "Sembra che l'accordo ___ vicino.", answer: "sia", explanation: "\"Sembra che\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "\"L'attore si sarebbe sposato in segreto\". What does it say?", options: ["The actor allegedly got married in secret.", "The actor would get married in secret.", "The actor got married in secret (confirmed).", "The actor will get married in secret."], correctIndex: 0, explanation: "Past conditional = reported past event." },
      { type: "multiple-choice", question: "Which phrase introduces an unconfirmed source?", options: ["secondo indiscrezioni", "come tutti sanno", "è certo che", "ufficialmente"], correctIndex: 0, explanation: "\"Indiscrezioni\" = leaks, rumours." },
      { type: "listen-choose", audio: "L'incendio sarebbe partito da un cortocircuito.", question: "What does the speaker say about the cause?", options: ["A short circuit is thought to be the cause.", "A short circuit was definitely the cause.", "A short circuit could start a fire.", "Nobody knows anything."], correctIndex: 0, explanation: "Conditional = probable, not confirmed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "According to the police, the thief is a former employee.", answer: "Secondo la polizia, il ladro è un ex dipendente.", altAnswers: ["Secondo la polizia il ladro è un ex dipendente.", "Secondo la polizia, il ladro sarebbe un ex dipendente."], explanation: "\"Secondo\" + indicative, or the journalistic conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's said that the new stadium will cost too much.", answer: "Si dice che il nuovo stadio costerà troppo.", altAnswers: ["Si dice che il nuovo stadio costi troppo.", "Dicono che il nuovo stadio costerà troppo."], explanation: "\"Si dice che\": impersonal \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems the minister wants to resign.", answer: "Sembra che il ministro voglia dimettersi.", altAnswers: ["Pare che il ministro voglia dimettersi.", "Sembra che il ministro si voglia dimettere."], explanation: "\"Sembra che\" + subjunctive \"voglia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The man was seen at the station. (confirmed)", answer: "L'uomo è stato visto alla stazione.", altAnswers: ["L'uomo è stato visto in stazione."], explanation: "Fact: indicative passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "According to sources, a deal is close.", answer: "Secondo alcune fonti, l'accordo è vicino.", altAnswers: ["Secondo fonti, l'accordo è vicino.", "Secondo alcune fonti, l'accordo sarebbe vicino.", "Secondo fonti, l'accordo sarebbe vicino."], explanation: "\"Secondo\" + indicative, or the conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the two [know each other].", sentence: "Sembra che i due ___.", answer: "si conoscano", explanation: "\"Sembra che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[According to] the newspaper, the shop will close.", sentence: "___ il giornale, il negozio chiuderà.", answer: "Secondo", altAnswers: ["Stando a"], explanation: "\"Secondo\" + source." },
      { type: "word-order", prompt: "Put the words in order to say: According to the police, the driver was drunk.", words: ["Secondo", "la", "polizia,", "l'autista", "era", "ubriaco."], translation: "According to the police, the driver was drunk.", explanation: "Background state: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "According to the newspaper, the shop will close in June.", answer: "Secondo il giornale, il negozio chiuderà a giugno.", altAnswers: ["Secondo il giornale il negozio chiuderà a giugno.", "Secondo il giornale, il negozio chiude a giugno."], explanation: "\"Secondo\" + indicative: the safe way to report." },
      { type: "dictation", audio: "Il governo starebbe preparando un nuovo decreto.", explanation: "\"Starebbe preparando\": reportedly preparing." },
      { type: "speak", text: "Secondo il giornale, il sindaco vuole chiudere il centro alle auto.", prompt: "Pass on the news: According to the paper, the mayor wants to close the centre to cars.", tip: "\"Secondo\": se-CON-do.", explanation: "\"Secondo\" + indicative: the safe way to report." },
    ],
  },
  {
    slug: "b1-numbers-in-the-news",
    level: "IT-B1",
    number: 4,
    title: "Numbers, Percentages and Statistics",
    summary: "Read and say percentages, increases, large numbers and approximate quantities the way Italian news does.",
    duration: "17 min",
    sections: [
      {
        heading: "Percentages",
        body: [
          "Percentages take the article: \"il 30 per cento\" (or \"il 30%\"), \"l'8%\" (\"l'otto per cento\"), \"l'11%\". Decimals use a comma: \"il 2,5%\" (\"il due virgola cinque per cento\"). A change is \"un aumento del 5%\", \"un calo del 3%\" (a fall), \"una crescita dell'1,2%\".",
          "Agreement: \"il 30% degli italiani\" is singular in formal writing (\"il 30% degli italiani legge un libro all'anno\"), though in speech you'll often hear the plural (\"leggono\"). In this course, write the singular.",
        ],
        examples: [
          { es: "Il 30 per cento degli italiani legge almeno un libro all'anno.", en: "30 per cent of Italians read at least one book a year." },
          { es: "Le vendite sono aumentate dell'8%.", en: "Sales have risen by 8%." },
          { es: "L'inflazione è scesa al 2,5%.", en: "Inflation has fallen to 2.5%." },
          { es: "Si registra un calo del 3% delle nascite.", en: "There's a 3% drop in births." },
          { es: "La disoccupazione giovanile supera il 20%.", en: "Youth unemployment is over 20%." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Prices have risen by 5%.", answer: "I prezzi sono aumentati del 5%.", altAnswers: ["I prezzi sono aumentati del 5 per cento.", "I prezzi sono saliti del 5%.", "I prezzi sono saliti del 5 per cento."], explanation: "\"Aumentare di\" + percentage: \"del 5%\"." },
          { type: "multiple-choice", question: "How do you write it in standard Italian?", options: ["Il 40% degli studenti lavora.", "40% degli studenti lavora.", "Il 40% dei studenti lavora.", "Il 40% di studenti lavorano."], correctIndex: 0, explanation: "Article before the percentage; \"degli studenti\"; singular verb in writing." },
        ],
      },
      {
        heading: "Big numbers",
        body: [
          "\"Mille\" (one thousand), plural \"mila\": \"duemila\", \"diecimila\". \"Un milione\" and \"un miliardo\" (a billion) are nouns, so they need \"di\" before another noun: \"un milione di persone\", \"due miliardi di euro\". But with another number after them, no \"di\": \"un milione duecentomila abitanti\". Thousands are separated with a dot: 1.500.000.",
          "\"Un milione e mezzo\" = 1.5 million; \"mezzo milione\" = half a million. Approximate numbers end in \"-ina\": \"una decina\" (about ten), \"una ventina\", \"un centinaio\" (about a hundred, plural \"centinaia\"), \"migliaia\" (thousands).",
        ],
        examples: [
          { es: "Alla manifestazione c'erano migliaia di persone.", en: "There were thousands of people at the demonstration." },
          { es: "Roma ha quasi tre milioni di abitanti.", en: "Rome has almost three million inhabitants." },
          { es: "Il progetto costerà un miliardo e mezzo di euro.", en: "The project will cost one and a half billion euros." },
          { es: "Una ventina di famiglie sono state evacuate.", en: "About twenty families have been evacuated." },
          { es: "Centinaia di turisti sono rimasti bloccati in aeroporto.", en: "Hundreds of tourists were stuck at the airport." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "a million people", answer: "un milione di persone", explanation: "\"Milione\" is a noun: \"di\" before \"persone\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[About ten] people were injured.", sentence: "___ di persone sono rimaste ferite.", answer: "Una decina", explanation: "\"Una decina di\" = about ten." },
        ],
      },
      {
        heading: "Saying it aloud",
        body: [
          "Years are read whole: \"nel 2024\" = \"nel duemilaventiquattro\". Money: \"3,50 euro\" = \"tre euro e cinquanta\"; \"1.200 euro\" = \"milleduecento euro\". \"Euro\" never changes in the plural. Fractions: \"un terzo\", \"un quarto\", \"la metà\" (half): \"la metà degli intervistati\" (half of those interviewed).",
        ],
        examples: [
          { es: "Nel 2024 i turisti sono stati 65 milioni.", en: "In 2024 there were 65 million tourists." },
          { es: "Un terzo dei giovani vive ancora con i genitori.", en: "A third of young people still live with their parents." },
          { es: "La metà degli intervistati usa i mezzi pubblici.", en: "Half of those interviewed use public transport." },
          { es: "Il biglietto costa due euro e venti.", en: "The ticket costs 2.20 euros." },
        ],
        checkpoint: [
          { type: "dictation", audio: "La metà degli intervistati usa i mezzi pubblici.", explanation: "\"La metà\" takes a singular verb in writing." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A third of young people live with their parents.", answer: "Un terzo dei giovani vive con i genitori.", altAnswers: ["Un terzo dei giovani vive coi genitori.", "Un terzo dei giovani vive con i propri genitori."], explanation: "Singular verb with \"un terzo\" in standard writing." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There were thousands of people in the square.", answer: "In piazza c'erano migliaia di persone.", altAnswers: ["C'erano migliaia di persone in piazza.", "Nella piazza c'erano migliaia di persone."], explanation: "\"Migliaia di\" = thousands of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unemployment has fallen to 7%.", answer: "La disoccupazione è scesa al 7%.", altAnswers: ["La disoccupazione è scesa al 7 per cento.", "La disoccupazione è calata al 7%.", "La disoccupazione è calata al 7 per cento."], explanation: "\"Scendere a\" = to fall to: \"al 7%\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city has two million inhabitants.", answer: "La città ha due milioni di abitanti.", explanation: "\"Milioni di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "About a hundred people were evacuated.", answer: "Un centinaio di persone sono state evacuate.", altAnswers: ["Circa cento persone sono state evacuate."], explanation: "\"Un centinaio di\" = about a hundred." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sales have fallen by 3%.", answer: "Le vendite sono calate del 3%.", altAnswers: ["Le vendite sono scese del 3%.", "Le vendite sono diminuite del 3%.", "Le vendite sono calate del 3 per cento."], explanation: "\"Calare di\" + percentage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Half of Italians have never been to Sardinia.", answer: "La metà degli italiani non è mai stata in Sardegna.", altAnswers: ["Metà degli italiani non è mai stata in Sardegna.", "La metà degli italiani non è mai andata in Sardegna."], explanation: "\"La metà\" is feminine singular: \"è stata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's been [an increase of 10%].", sentence: "C'è stato ___.", answer: "un aumento del 10%", altAnswers: ["un aumento del 10 per cento", "un aumento del dieci per cento"], explanation: "\"Aumento del\" + percentage." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The project will cost [one and a half million] euros.", sentence: "Il progetto costerà ___ di euro.", answer: "un milione e mezzo", explanation: "\"Un milione e mezzo di\"." },
      { type: "word-order", prompt: "Put the words in order to say: 25% of students work.", words: ["Il", "25%", "degli", "studenti", "lavora."], translation: "25% of students work.", explanation: "Article + percentage + \"di\"; singular verb in writing." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "una decina", right: "about ten" }, { left: "un centinaio", right: "about a hundred" }, { left: "migliaia", right: "thousands" }, { left: "un miliardo", right: "a billion" }, { left: "la metà", right: "half" }], explanation: "Approximate and large numbers." },
      { type: "listen-choose", audio: "L'inflazione è scesa al due virgola cinque per cento.", question: "What's the figure?", options: ["2.5%", "25%", "2.15%", "0.25%"], correctIndex: 0, explanation: "\"Virgola\" = decimal comma." },
      { type: "speak", text: "Secondo l'ISTAT, il trenta per cento degli italiani legge almeno un libro all'anno.", prompt: "Read the statistic aloud: According to ISTAT, 30 per cent of Italians read at least one book a year.", tip: "ISTAT, the statistics office, is said as a word: IS-tat.", explanation: "\"Il\" + percentage, singular verb." },
    ],
  },
  {
    slug: "b1-drill-headline-to-sentence",
    level: "IT-B1",
    number: 5,
    title: "Drill: Headlines to Sentences",
    summary: "Rewrite headlines as full sentences, turning nouns back into verbs and adding articles and auxiliaries.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Unpack the headline",
        body: [
          "Three steps: find the noun that hides a verb (\"chiusura\" → \"chiudere\"), put back the articles, and choose the tense (passato prossimo for news that has happened, future for what's announced). A bare participle becomes a passive: \"Arrestato un uomo\" → \"Un uomo è stato arrestato\".",
        ],
        examples: [
          { es: "Chiusura del ponte per lavori → Il ponte chiude per lavori.", en: "Bridge closed for works → The bridge is closing for works." },
          { es: "Arrestato un ladro a Pisa → A Pisa è stato arrestato un ladro.", en: "Thief arrested in Pisa → A thief has been arrested in Pisa." },
          { es: "Aumento del prezzo del gas → Il prezzo del gas è aumentato.", en: "Gas price rise → The price of gas has gone up." },
          { es: "Nuovo sciopero dei taxi lunedì → Lunedì i taxi faranno un nuovo sciopero.", en: "New taxi strike on Monday → On Monday taxis will strike again." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite the headline \"Arrestato un ladro a Pisa\" as a sentence: A thief has been arrested in Pisa.", source: "A thief has been arrested in Pisa.", answer: "A Pisa è stato arrestato un ladro.", altAnswers: ["Un ladro è stato arrestato a Pisa.", "È stato arrestato un ladro a Pisa."], explanation: "Bare participle → passive with \"essere\"." },
          { type: "translate", direction: "en-es", prompt: "Rewrite the headline \"Aumento del prezzo del gas\" as a sentence: The price of gas has gone up.", source: "The price of gas has gone up.", answer: "Il prezzo del gas è aumentato.", altAnswers: ["È aumentato il prezzo del gas."], explanation: "\"Aumentare\" (go up) takes \"essere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Chiusura della stazione per lavori\" as a sentence: The station is closed for works.", source: "The station is closed for works.", answer: "La stazione è chiusa per lavori.", altAnswers: ["La stazione chiude per lavori."], explanation: "\"Chiusura\" → \"chiusa\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Inaugurato il nuovo ospedale\" as a sentence: The new hospital has been opened.", source: "The new hospital has been opened.", answer: "Il nuovo ospedale è stato inaugurato.", altAnswers: ["È stato inaugurato il nuovo ospedale.", "Hanno inaugurato il nuovo ospedale."], explanation: "Bare participle → passive." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Calo delle nascite in Italia\" as a sentence: Births are falling in Italy.", source: "Births are falling in Italy.", answer: "In Italia le nascite calano.", altAnswers: ["Le nascite in Italia calano.", "In Italia le nascite diminuiscono.", "In Italia le nascite sono in calo."], explanation: "\"Calo\" → \"calare\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Rapina in banca, fuggiti i ladri\" as a sentence: The thieves escaped after the bank robbery.", source: "The thieves escaped after the bank robbery.", answer: "I ladri sono fuggiti dopo la rapina in banca.", altAnswers: ["Dopo la rapina in banca i ladri sono fuggiti.", "I ladri sono scappati dopo la rapina in banca."], explanation: "\"Fuggire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Sciopero dei medici giovedì\" as a sentence: Doctors will strike on Thursday.", source: "Doctors will strike on Thursday.", answer: "Giovedì i medici sciopereranno.", altAnswers: ["I medici sciopereranno giovedì.", "Giovedì i medici fanno sciopero.", "Giovedì i medici faranno sciopero."], explanation: "Announced event: future or present." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Ritrovata la bambina scomparsa\" as a sentence: The missing girl has been found.", source: "The missing girl has been found.", answer: "La bambina scomparsa è stata ritrovata.", altAnswers: ["Hanno ritrovato la bambina scomparsa.", "È stata ritrovata la bambina scomparsa."], explanation: "Agreement: \"stata ritrovata\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Approvata la legge sul clima\" as a sentence: The climate law has been approved.", source: "The climate law has been approved.", answer: "La legge sul clima è stata approvata.", altAnswers: ["È stata approvata la legge sul clima.", "Hanno approvato la legge sul clima."], explanation: "\"Approvata\" agrees with \"legge\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Neve al Nord, disagi sulle strade\" as a sentence: It has snowed in the North and there are problems on the roads.", source: "It has snowed in the North and there are problems on the roads.", answer: "Al Nord è nevicato e ci sono disagi sulle strade.", altAnswers: ["Al Nord ha nevicato e ci sono disagi sulle strade.", "È nevicato al Nord e ci sono disagi sulle strade.", "Ha nevicato al Nord e ci sono disagi sulle strade."], explanation: "Weather verbs take \"essere\" or \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Incendio in un bosco, evacuate cinquanta persone\" as a sentence: Fifty people have been evacuated because of a forest fire.", source: "Fifty people have been evacuated because of a forest fire.", answer: "Cinquanta persone sono state evacuate per un incendio in un bosco.", altAnswers: ["Per un incendio in un bosco sono state evacuate cinquanta persone.", "Cinquanta persone sono state evacuate a causa di un incendio in un bosco."], explanation: "Feminine plural agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Furto al museo\": [the museum has been robbed].", sentence: "\"Furto al museo\": ___.", answer: "il museo è stato derubato", altAnswers: ["hanno rubato al museo", "c'è stato un furto al museo"], explanation: "\"Derubare\" = to rob (a place or person)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Riapertura della scuola\": the school [reopens].", sentence: "\"Riapertura della scuola\": la scuola ___.", answer: "riapre", altAnswers: ["riaprirà", "è riaperta"], explanation: "\"Riapertura\" → \"riaprire\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Vittoria della Juve\": Juve [has won].", sentence: "\"Vittoria della Juve\": la Juve ___.", answer: "ha vinto", explanation: "\"Vittoria\" → \"vincere\" → \"ha vinto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Crollo di un palazzo\": a building [has collapsed].", sentence: "\"Crollo di un palazzo\": un palazzo ___.", answer: "è crollato", explanation: "\"Crollare\" takes \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: The bridge will close on Monday.", words: ["Il", "ponte", "chiuderà", "lunedì."], translation: "The bridge will close on Monday.", altOrders: [["Lunedì", "il", "ponte", "chiuderà."]], explanation: "\"Chiusura del ponte lunedì\" in full." },
      { type: "multiple-choice", question: "\"Partenza rinviata per il maltempo\" means ...", options: ["The departure has been postponed because of bad weather.", "The departure went ahead despite bad weather.", "Bad weather is leaving.", "The bad weather has been sent back."], correctIndex: 0, explanation: "\"Rinviare\" = to postpone." },
      { type: "dictation", audio: "Inaugurato a Bari il nuovo lungomare.", explanation: "Headline with a bare participle." },
      { type: "dictation", audio: "Il nuovo lungomare è stato inaugurato ieri.", explanation: "The same news as a full passive sentence." },
      { type: "speak", text: "Hai sentito? È stato arrestato il ladro che ha rubato al museo.", prompt: "Pass on the headline \"Arrestato il ladro del museo\": Did you hear? The thief who robbed the museum has been arrested.", tip: "\"Arrestato\": double r, double t.", explanation: "Headline → conversational sentence." },
    ],
  },
  {
    slug: "b1-drill-news-vocabulary",
    level: "IT-B1",
    number: 6,
    title: "Drill: News Vocabulary",
    summary: "Produce the core vocabulary of politics, crime, weather, sport and the economy in news sentences.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Five areas",
        body: [
          "Politics: \"il governo\", \"le elezioni\", \"il voto\", \"la legge\". Crime: \"il furto\" (theft), \"la rapina\" (robbery), \"la truffa\" (scam), \"arrestare\", \"denunciare\" (to report to police). Weather: \"il maltempo\", \"l'allerta meteo\", \"la grandine\" (hail). Sport: \"la partita\", \"vincere\", \"pareggiare\" (to draw). Economy: \"le tasse\", \"il PIL\" (GDP), \"la crisi\".",
        ],
        examples: [
          { es: "Domenica si vota per le elezioni comunali.", en: "On Sunday there's voting in the local elections." },
          { es: "Ha denunciato il furto ai carabinieri.", en: "She reported the theft to the carabinieri." },
          { es: "C'è allerta meteo arancione in Liguria.", en: "There's an orange weather alert in Liguria." },
          { es: "La partita è finita uno a uno.", en: "The match ended one all." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She reported the theft to the police.", answer: "Ha denunciato il furto alla polizia.", altAnswers: ["Lei ha denunciato il furto alla polizia.", "Ha denunciato il furto ai carabinieri."], explanation: "\"Denunciare\" = to report a crime." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The match ended two all.", answer: "La partita è finita due a due.", altAnswers: ["La partita è finita 2 a 2.", "La partita è finita in pareggio, due a due."], explanation: "Scores: \"due a due\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The government has approved a new law.", answer: "Il governo ha approvato una nuova legge.", altAnswers: ["Il governo ha approvato una legge nuova."], explanation: "\"Approvare\" = to pass, approve." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was a robbery at the post office.", answer: "C'è stata una rapina all'ufficio postale.", altAnswers: ["C'è stata una rapina alla posta.", "C'è stata una rapina in posta."], explanation: "\"Rapina\" = armed robbery; \"furto\" = theft." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many elderly people are victims of scams.", answer: "Molti anziani sono vittime di truffe.", altAnswers: ["Molti anziani sono vittime di truffa.", "Tanti anziani sono vittime di truffe."], explanation: "\"La truffa\" = scam." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Hail has damaged the vineyards.", answer: "La grandine ha danneggiato i vigneti.", altAnswers: ["La grandine ha rovinato i vigneti.", "La grandine ha danneggiato le vigne."], explanation: "\"La grandine\": feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Napoli drew with Milan.", answer: "Il Napoli ha pareggiato con il Milan.", altAnswers: ["Il Napoli ha pareggiato col Milan.", "Napoli e Milan hanno pareggiato."], explanation: "Football clubs are masculine: \"il Napoli\", \"il Milan\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Taxes will go up next year.", answer: "Le tasse aumenteranno l'anno prossimo.", altAnswers: ["L'anno prossimo le tasse aumenteranno.", "Le tasse saliranno l'anno prossimo."], explanation: "Future of \"aumentare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The turnout was very low.", answer: "L'affluenza è stata molto bassa.", altAnswers: ["L'affluenza alle urne è stata molto bassa.", "C'è stata un'affluenza molto bassa."], explanation: "\"L'affluenza\" = voter turnout." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The police arrested two people.", answer: "La polizia ha arrestato due persone.", altAnswers: ["I carabinieri hanno arrestato due persone.", "Sono state arrestate due persone."], explanation: "Direct object, no \"a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The economy is growing slowly.", answer: "L'economia cresce lentamente.", altAnswers: ["L'economia sta crescendo lentamente.", "L'economia cresce piano."], explanation: "\"Crescere\" = to grow." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's [a weather alert] in Sicily.", sentence: "C'è ___ in Sicilia.", answer: "un'allerta meteo", altAnswers: ["allerta meteo", "l'allerta meteo"], explanation: "\"Allerta\" is feminine: \"un'allerta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sunday [people vote] for the mayor.", sentence: "Domenica ___ per il sindaco.", answer: "si vota", explanation: "Impersonal \"si\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Italy [won] three to one.", sentence: "L'Italia ___ tre a uno.", answer: "ha vinto", explanation: "\"Vincere\" → \"vinto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The crisis] has hit small businesses.", sentence: "___ ha colpito le piccole imprese.", answer: "La crisi", explanation: "\"La crisi\": same form in the plural." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il furto", right: "theft" }, { left: "la rapina", right: "robbery" }, { left: "la truffa", right: "scam" }, { left: "denunciare", right: "to report to police" }, { left: "pareggiare", right: "to draw (a match)" }, { left: "l'affluenza", right: "turnout" }], explanation: "Crime, sport and politics." },
      { type: "word-order", prompt: "Put the words in order to say: The orange alert continues in Liguria.", words: ["Continua", "l'allerta", "arancione", "in", "Liguria."], translation: "The orange alert continues in Liguria.", explanation: "News word order: verb first." },
      { type: "multiple-choice", question: "\"Il PIL è cresciuto dello 0,5%\" is about ...", options: ["the economy (GDP)", "the weather", "a football match", "crime"], correctIndex: 0, explanation: "\"PIL\" = prodotto interno lordo (GDP)." },
      { type: "dictation", audio: "Domenica si vota per le elezioni comunali.", explanation: "\"Comunali\" = municipal." },
      { type: "dictation", audio: "Ha denunciato la truffa ai carabinieri.", explanation: "\"Denunciare\": to report." },
      { type: "speak", text: "Ieri il Napoli ha vinto due a zero e domenica si vota per il sindaco.", prompt: "Give a friend two pieces of news: Yesterday Napoli won two-nil and on Sunday people vote for the mayor.", tip: "\"Zero\": the z sounds like dz.", explanation: "Sport and politics vocabulary." },
    ],
  },
  {
    slug: "b1-reading-lab-local-news",
    level: "IT-B1",
    number: 7,
    title: "Reading Lab: Local News",
    summary: "Read two short local news articles from Emilia-Romagna and Puglia and answer questions on the facts and the language.",
    duration: "18 min",
    sections: [
      {
        heading: "Article 1: a stolen bike returns",
        body: [
          "\"Modena. Lieto fine per Giorgio, un pensionato di 72 anni, a cui martedì era stata rubata la bicicletta davanti al mercato coperto. Grazie a un post sui social, condiviso da centinaia di persone, la bici è stata riconosciuta da una studentessa in un parcheggio di via Emilia. La polizia locale l'ha recuperata e restituita al proprietario. «Non ci speravo più», ha commentato Giorgio.\"",
          "Note the trapassato \"era stata rubata\" (had been stolen) for what happened before the main events, the passives, and \"a cui\" (to whom).",
        ],
        examples: [
          { es: "A Giorgio era stata rubata la bicicletta.", en: "Giorgio's bike had been stolen." },
          { es: "Il post è stato condiviso da centinaia di persone.", en: "The post was shared by hundreds of people." },
          { es: "La bici è stata riconosciuta da una studentessa.", en: "The bike was recognised by a student." },
          { es: "«Non ci speravo più», ha commentato.", en: "'I'd given up hope,' he said." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Who recognised the bike?", options: ["a student", "a police officer", "Giorgio's neighbour", "a market trader"], correctIndex: 0, explanation: "\"Riconosciuta da una studentessa\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bike was returned to the owner.", answer: "La bici è stata restituita al proprietario.", altAnswers: ["La bicicletta è stata restituita al proprietario.", "Hanno restituito la bici al proprietario."], explanation: "Passive; \"restituire a\" = to give back to." },
        ],
      },
      {
        heading: "Article 2: a new cycle path",
        body: [
          "\"Lecce. Sarà inaugurata sabato la nuova pista ciclabile che collega il centro storico al mare di San Cataldo. Il percorso, lungo 12 chilometri, è costato circa due milioni di euro, finanziati in parte dalla Regione. Secondo l'assessore alla mobilità, la pista sarà utilizzata ogni giorno da almeno mille persone. Non mancano però le critiche: alcuni residenti lamentano la perdita di posti auto.\"",
          "\"Non mancano le critiche\" (there's no shortage of criticism) is a typical news phrase; \"lamentare\" here means to complain about.",
        ],
        examples: [
          { es: "Sarà inaugurata sabato la nuova pista ciclabile.", en: "The new cycle path will be opened on Saturday." },
          { es: "Il percorso è lungo 12 chilometri.", en: "The route is 12 kilometres long." },
          { es: "I lavori sono stati finanziati in parte dalla Regione.", en: "The work was partly funded by the Region." },
          { es: "Alcuni residenti lamentano la perdita di posti auto.", en: "Some residents complain about losing parking spaces." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What do some residents complain about?", options: ["losing parking spaces", "the cost of the path", "noise from bikes", "the path being too short"], correctIndex: 0, explanation: "\"La perdita di posti auto\"." },
          { type: "listen-choose", audio: "Il percorso, lungo dodici chilometri, è costato circa due milioni di euro.", question: "How much did it cost?", options: ["about two million euros", "twelve million euros", "about two thousand euros", "two billion euros"], correctIndex: 0, explanation: "\"Circa due milioni\" = about two million." },
        ],
      },
      {
        heading: "Reading strategies",
        body: [
          "For exam-style reading: read the questions first, then scan for names, numbers and dates. Turn passives round to find who did what (\"è stata riconosciuta da una studentessa\" → a student recognised it), and watch the tense: \"sarà inaugurata\" hasn't happened yet.",
        ],
        examples: [
          { es: "La bici è stata ritrovata martedì.", en: "The bike was found on Tuesday." },
          { es: "La pista sarà inaugurata sabato.", en: "The path will be opened on Saturday." },
          { es: "Non mancano le critiche.", en: "There's no shortage of criticism." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Sarà inaugurata sabato\". Has the cycle path opened yet?", options: ["No, it opens on Saturday.", "Yes, it opened on Saturday.", "Yes, it's been open for a while.", "It isn't clear."], correctIndex: 0, explanation: "Future passive: \"sarà inaugurata\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There's no shortage of] protests.", sentence: "___ le proteste.", answer: "Non mancano", explanation: "\"Mancare\" agrees with \"proteste\": \"mancano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His bike had been stolen in front of the market.", answer: "Gli era stata rubata la bici davanti al mercato.", altAnswers: ["Gli era stata rubata la bicicletta davanti al mercato.", "La sua bici era stata rubata davanti al mercato."], explanation: "Trapassato passive: \"era stata rubata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The post was shared by hundreds of people.", answer: "Il post è stato condiviso da centinaia di persone.", altAnswers: ["Centinaia di persone hanno condiviso il post."], explanation: "\"Condividere\" → \"condiviso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The new cycle path connects the centre to the sea.", answer: "La nuova pista ciclabile collega il centro al mare.", altAnswers: ["La nuova pista ciclabile collega il centro con il mare."], explanation: "\"Collegare a\" = to connect to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The work was funded by the Region.", answer: "I lavori sono stati finanziati dalla Regione.", altAnswers: ["Il lavoro è stato finanziato dalla Regione.", "La Regione ha finanziato i lavori."], explanation: "\"Da\" + \"la\" = \"dalla\" for the agent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some residents complain about the noise.", answer: "Alcuni residenti si lamentano del rumore.", altAnswers: ["Alcuni residenti lamentano il rumore.", "Alcuni abitanti si lamentano del rumore."], explanation: "\"Lamentarsi di\" or news-style \"lamentare\" + object." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The route is [12 kilometres long].", sentence: "Il percorso è ___.", answer: "lungo 12 chilometri", altAnswers: ["lungo dodici chilometri"], explanation: "\"Lungo\" + measurement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "'[I'd given up hope],' he said.", sentence: "«___», ha detto.", answer: "Non ci speravo più", explanation: "\"Sperarci\" = to hope for it; imperfetto." },
      { type: "word-order", prompt: "Put the words in order to say: The police returned the bike to the owner.", words: ["La", "polizia", "ha", "restituito", "la", "bici", "al", "proprietario."], translation: "The police returned the bike to the owner.", explanation: "Active version of the passive in the text." },
      { type: "multiple-choice", question: "In article 1, why does the writer use \"era stata rubata\"?", options: ["The theft happened before the other events.", "The theft is still happening.", "It's a future event.", "It's an unconfirmed report."], correctIndex: 0, explanation: "Trapassato prossimo = further back in the past." },
      { type: "multiple-choice", question: "\"Lieto fine\" means ...", options: ["happy ending", "the end of the line", "a quiet end", "late finish"], correctIndex: 0, explanation: "\"Lieto\" = happy (formal)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The new path will be opened on Saturday.", answer: "La nuova pista sarà inaugurata sabato.", altAnswers: ["Sabato sarà inaugurata la nuova pista.", "La nuova pista verrà inaugurata sabato."], explanation: "Future passive: \"sarà inaugurata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A student recognised the bike.", answer: "Una studentessa ha riconosciuto la bici.", altAnswers: ["Una studentessa ha riconosciuto la bicicletta.", "Uno studente ha riconosciuto la bici."], explanation: "The passive in the text turned round to active." },
      { type: "dictation", audio: "La pista sarà utilizzata ogni giorno da almeno mille persone.", explanation: "Future passive." },
      { type: "speak", text: "A Modena un signore ha ritrovato la sua bici rubata grazie a un post sui social.", prompt: "Summarise article 1: In Modena a man got his stolen bike back thanks to a post on social media.", tip: "\"Grazie a\" = thanks to.", explanation: "A one-sentence summary in the passato prossimo." },
    ],
  },
  {
    slug: "b1-listening-lab-tg",
    level: "IT-B1",
    number: 8,
    title: "Listening Lab: The TG",
    summary: "Follow a short scripted TV news bulletin at natural speed: headlines, a story, the weather and sport.",
    duration: "18 min",
    sections: [
      {
        heading: "The opening",
        body: [
          "\"Il TG\" (telegiornale) opens with a greeting and the headlines: \"Buonasera e benvenuti. Ecco le notizie di oggi\". Newsreaders speak fast and clearly, with the main stress at the end of each phrase. Listen for the topic words first, then the details.",
          "Typical links: \"Passiamo ora a ...\" (now we move on to), \"Restiamo in tema di ...\" (staying on the subject of), \"E ora lo sport\".",
        ],
        examples: [
          { es: "Buonasera e benvenuti. Ecco le notizie di oggi.", en: "Good evening and welcome. Here is today's news." },
          { es: "Passiamo ora all'economia.", en: "Now let's turn to the economy." },
          { es: "Restiamo in tema di trasporti.", en: "Staying with transport." },
          { es: "E ora la parola al nostro inviato a Firenze.", en: "And now over to our correspondent in Florence." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Passiamo ora all'economia: l'inflazione scende al due per cento.", question: "What is the news?", options: ["Inflation is falling to 2%.", "Inflation is rising by 2%.", "The economy is growing by 2%.", "Prices have doubled."], correctIndex: 0, explanation: "\"Scende al\" = falls to." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Now let's turn to sport.", answer: "Passiamo ora allo sport.", altAnswers: ["Ora passiamo allo sport.", "E ora lo sport."], explanation: "\"Passare a\" + \"lo\" = \"allo\"." },
        ],
      },
      {
        heading: "The main story",
        body: [
          "A typical report: \"Treni in ritardo fino a due ore questa mattina sulla linea Milano-Venezia per un guasto alla linea elettrica. Disagi per migliaia di pendolari. Il servizio è tornato regolare nel primo pomeriggio\". \"I pendolari\" are commuters; \"un guasto\" is a breakdown; \"disagi\" are disruptions.",
        ],
        examples: [
          { es: "Treni in ritardo fino a due ore sulla linea Milano-Venezia.", en: "Trains up to two hours late on the Milan-Venice line." },
          { es: "La causa è un guasto alla linea elettrica.", en: "The cause is a fault on the power line." },
          { es: "Disagi per migliaia di pendolari.", en: "Disruption for thousands of commuters." },
          { es: "Il servizio è tornato regolare nel primo pomeriggio.", en: "Service returned to normal in the early afternoon." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Treni in ritardo fino a due ore per un guasto alla linea elettrica.", question: "Why were the trains late?", options: ["a fault on the power line", "a strike", "snow", "an accident"], correctIndex: 0, explanation: "\"Un guasto\" = a breakdown, a fault." },
          { type: "dictation", audio: "Disagi per migliaia di pendolari.", explanation: "\"Pendolari\" = commuters." },
        ],
      },
      {
        heading: "Weather and sport",
        body: [
          "The forecast (\"le previsioni del tempo\") uses the future: \"Domani cielo sereno al Sud, nuvoloso al Nord con possibili piogge. Temperature in calo\". Sport results come in quick lists: \"L'Inter batte il Genoa due a uno, pareggio tra Roma e Lazio\". \"Battere\" = to beat.",
        ],
        examples: [
          { es: "Domani cielo sereno al Sud e nuvoloso al Nord.", en: "Tomorrow clear skies in the South and cloudy in the North." },
          { es: "Temperature in calo in tutta Italia.", en: "Temperatures falling across Italy." },
          { es: "L'Inter batte il Genoa due a uno.", en: "Inter beat Genoa two-one." },
          { es: "Pareggio tra Roma e Lazio.", en: "A draw between Roma and Lazio." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Domani cielo sereno al Sud, nuvoloso al Nord con possibili piogge.", question: "Where might it rain tomorrow?", options: ["in the North", "in the South", "everywhere", "nowhere"], correctIndex: 0, explanation: "\"Nuvoloso al Nord con possibili piogge\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Temperatures are falling.", answer: "Le temperature sono in calo.", altAnswers: ["Le temperature calano.", "Le temperature scendono.", "Temperature in calo."], explanation: "\"In calo\" = falling." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Il servizio è tornato regolare nel primo pomeriggio.", question: "When did service return to normal?", options: ["early afternoon", "late evening", "first thing in the morning", "the next day"], correctIndex: 0, explanation: "\"Nel primo pomeriggio\" = early afternoon." },
      { type: "listen-choose", audio: "L'Inter batte il Genoa due a uno.", question: "Who won?", options: ["Inter", "Genoa", "nobody, it was a draw", "the match was cancelled"], correctIndex: 0, explanation: "\"Battere\" = to beat." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here is today's news.", answer: "Ecco le notizie di oggi.", altAnswers: ["Ecco le notizie del giorno."], explanation: "\"Le notizie\": plural, the news." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Trains were up to two hours late.", answer: "I treni erano in ritardo fino a due ore.", altAnswers: ["I treni hanno avuto fino a due ore di ritardo.", "I treni hanno fatto fino a due ore di ritardo."], explanation: "\"In ritardo\" = late." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow it will be cloudy in the North.", answer: "Domani sarà nuvoloso al Nord.", altAnswers: ["Domani al Nord sarà nuvoloso.", "Domani ci saranno nuvole al Nord."], explanation: "Forecasts use the future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was disruption for thousands of commuters.", answer: "Ci sono stati disagi per migliaia di pendolari.", altAnswers: ["Ci sono stati disagi per migliaia di viaggiatori."], explanation: "\"Ci sono stati\": plural past of \"c'è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Roma and Lazio drew.", answer: "Roma e Lazio hanno pareggiato.", altAnswers: ["La Roma e la Lazio hanno pareggiato."], explanation: "\"Pareggiare\" = to draw." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Staying with] transport: the A4 is closed.", sentence: "___ trasporti: la A4 è chiusa.", answer: "Restiamo in tema di", explanation: "A TG link phrase." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cause is [a fault] on the line.", sentence: "La causa è ___ alla linea.", answer: "un guasto", explanation: "\"Guasto\" = breakdown." },
      { type: "word-order", prompt: "Put the words in order to say: And now over to our correspondent.", words: ["E", "ora", "la", "parola", "al", "nostro", "inviato."], translation: "And now over to our correspondent.", explanation: "\"L'inviato\" = the reporter sent on location." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Inter beat Genoa two-one.", answer: "L'Inter ha battuto il Genoa due a uno.", altAnswers: ["L'Inter batte il Genoa due a uno.", "L'Inter ha battuto il Genoa 2 a 1."], explanation: "\"Battere\" = to beat; clubs keep their article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow there will be clear skies in the South.", answer: "Domani ci sarà cielo sereno al Sud.", altAnswers: ["Domani il cielo sarà sereno al Sud.", "Domani al Sud il cielo sarà sereno."], explanation: "Forecasts use the future." },
      { type: "dictation", audio: "Domani cielo sereno al Sud e temperature in calo.", explanation: "\"Sereno\" = clear." },
      { type: "speak", text: "Buonasera e benvenuti. Treni in ritardo questa mattina sulla linea Milano-Venezia per un guasto. Disagi per migliaia di pendolari.", prompt: "Read the headline like a TG newsreader: Good evening and welcome. Trains late this morning on the Milan-Venice line because of a fault. Disruption for thousands of commuters.", tip: "Stress the last word of each phrase: VenEzia, guASto, pendoLAri.", explanation: "Nominal headline style, read aloud." },
    ],
  },
  {
    slug: "b1-error-hunt-news",
    level: "IT-B1",
    number: 9,
    title: "Error Hunt: News Language",
    summary: "Fix the classic slips in news Italian: attualmente, a before direct objects, agreement with percentages, milione di.",
    duration: "17 min",
    sections: [
      {
        heading: "Attualmente and a",
        body: [
          "Each sentence below has one mistake. \"Attualmente il sindaco ha detto la verità\" uses \"attualmente\" for actually; it means currently. Write \"In realtà il sindaco ha detto la verità\" or \"effettivamente\" (indeed, in fact).",
          "\"La polizia ha arrestato a tre persone\" puts a Spanish-style \"a\" before a direct object. Italian has no such \"a\": \"ha arrestato tre persone\", \"ha fermato due ragazzi\", \"ha visto il ladro\".",
        ],
        examples: [
          { es: "In realtà il sindaco ha detto la verità.", en: "Actually, the mayor told the truth." },
          { es: "Attualmente il sindaco è in vacanza.", en: "The mayor is currently on holiday." },
          { es: "La polizia ha arrestato tre persone.", en: "The police arrested three people." },
          { es: "I carabinieri hanno fermato due ragazzi.", en: "The carabinieri stopped two young men." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"ha arrestato a due uomini\". Write it correctly: The police arrested two men.", source: "The police arrested two men.", answer: "La polizia ha arrestato due uomini.", altAnswers: ["La polizia ha arrestato due persone."], explanation: "Direct object: no \"a\"." },
          { type: "multiple-choice", question: "You mean actually (in fact). Which word?", options: ["in realtà", "attualmente", "attuale", "ora"], correctIndex: 0, explanation: "\"Attualmente\" = currently." },
        ],
      },
      {
        heading: "Percentages and millions",
        body: [
          "\"Il 30 per cento delle persone hanno votato\" is common in speech, but news writing agrees with \"il 30 per cento\": \"ha votato\". Write the singular. \"Un milione persone\" forgets that \"milione\" is a noun: \"un milione di persone\", \"tre milioni di euro\".",
          "One more: \"30 per cento\" with no article is English style. Italian says \"il 30 per cento\", \"l'8 per cento\".",
        ],
        examples: [
          { es: "Il 30 per cento delle persone ha votato.", en: "30 per cent of people voted." },
          { es: "Un milione di persone ha visto la partita.", en: "A million people watched the match." },
          { es: "Il ponte è costato tre milioni di euro.", en: "The bridge cost three million euros." },
          { es: "L'8 per cento dei negozi è chiuso.", en: "8 per cent of shops are closed." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "A learner wrote \"un milione persone\". Write the Italian for the bold words.", en: "[A million people] took part.", sentence: "___ ha partecipato.", answer: "Un milione di persone", explanation: "\"Milione di\" + noun." },
          { type: "fill-blank", prompt: "A learner wrote \"hanno\". Write the Italian for the bold words.", en: "40% of the students [has] a job. (written news)", sentence: "Il 40% degli studenti ___ un lavoro.", answer: "ha", explanation: "Written standard: singular, agreeing with \"il 40%\"." },
        ],
      },
      {
        heading: "Other news slips",
        body: [
          "\"La notizia\" is one piece of news; \"le notizie\" is the news. \"Le news\" is used too, but \"la news\" for one item sounds odd. \"Il giornale\" is the newspaper and \"il giornalista\" the journalist; \"il diario\" is a diary, never a newspaper. And \"la vittima\" stays feminine even for a man.",
        ],
        examples: [
          { es: "Ho sentito una notizia incredibile.", en: "I heard an incredible piece of news." },
          { es: "Leggo il giornale ogni mattina.", en: "I read the newspaper every morning." },
          { es: "La vittima, un uomo di quarant'anni, è stata soccorsa.", en: "The victim, a forty-year-old man, was helped." },
          { es: "Le notizie di oggi non sono belle.", en: "Today's news isn't good." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"leggo il diario ogni mattina\". Write it correctly: I read the newspaper every morning.", source: "I read the newspaper every morning.", answer: "Leggo il giornale ogni mattina.", altAnswers: ["Ogni mattina leggo il giornale.", "Io leggo il giornale ogni mattina."], explanation: "\"Il diario\" = diary." },
          { type: "listen-choose", audio: "La vittima, un uomo di quarant'anni, è stata soccorsa.", question: "Who was the victim?", options: ["a forty-year-old man", "a forty-year-old woman", "a child", "a group of forty"], correctIndex: 0, explanation: "\"Vittima\" is grammatically feminine; the person is a man." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"attualmente\" for actually. Write it correctly: Actually, the museum is open on Mondays.", source: "Actually, the museum is open on Mondays.", answer: "In realtà il museo è aperto il lunedì.", altAnswers: ["In realtà il museo apre il lunedì.", "In effetti il museo è aperto il lunedì."], explanation: "\"In realtà\" = actually." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"hanno fermato a un uomo\". Write it correctly: They stopped a man at the border.", source: "They stopped a man at the border.", answer: "Hanno fermato un uomo al confine.", altAnswers: ["Hanno fermato un uomo alla frontiera.", "Un uomo è stato fermato al confine."], explanation: "No \"a\" before the direct object." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"tre milioni euro\". Write it correctly: The work cost three million euros.", source: "The work cost three million euros.", answer: "I lavori sono costati tre milioni di euro.", altAnswers: ["Il lavoro è costato tre milioni di euro.", "I lavori costano tre milioni di euro."], explanation: "\"Milioni di\" + noun." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"20 per cento degli italiani\". Write it correctly: 20 per cent of Italians live abroad. (written news)", source: "20 per cent of Italians live abroad.", answer: "Il 20 per cento degli italiani vive all'estero.", altAnswers: ["Il 20% degli italiani vive all'estero.", "Il venti per cento degli italiani vive all'estero."], explanation: "Article + percentage; singular verb in writing." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"una news\". Write it correctly: I read an interesting piece of news.", source: "I read an interesting piece of news.", answer: "Ho letto una notizia interessante.", altAnswers: ["Ho letto una notizia molto interessante."], explanation: "\"Una notizia\" = one piece of news." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"il vittima è stato\". Write it correctly: The victim was taken to hospital.", source: "The victim was taken to hospital.", answer: "La vittima è stata portata in ospedale.", altAnswers: ["La vittima è stata trasportata in ospedale."], explanation: "\"La vittima\": feminine agreement." },
      { type: "fill-blank", prompt: "A learner wrote \"ha visto al ladro\". Write the Italian for the bold words.", en: "A neighbour [saw the thief].", sentence: "Un vicino ___.", answer: "ha visto il ladro", explanation: "Direct object, no \"a\"." },
      { type: "fill-blank", prompt: "A learner wrote \"hanno\". Write the Italian for the bold words.", en: "Half of the shops [has] closed. (written news)", sentence: "La metà dei negozi ___ chiuso.", answer: "ha", explanation: "\"La metà\" takes the singular in writing." },
      { type: "word-order", prompt: "Put the words in order to say: A million people watched the final.", words: ["Un", "milione", "di", "persone", "ha", "visto", "la", "finale."], translation: "A million people watched the final.", explanation: "\"Un milione di\" + singular verb in writing." },
      { type: "multiple-choice", question: "Which sentence is correct written Italian?", options: ["Il 60% dei giovani usa i social ogni giorno.", "60% dei giovani usa i social ogni giorno.", "Il 60% di giovani usano i social ogni giorno.", "Il 60% dei giovani usano a i social ogni giorno."], correctIndex: 0, explanation: "Article, \"dei\", singular verb." },
      { type: "dictation", audio: "In realtà la polizia ha arrestato tre persone.", explanation: "\"In realtà\"; no \"a\" before \"tre persone\"." },
      { type: "speak", text: "In realtà il trenta per cento degli abitanti ha votato e la polizia ha fermato due persone.", prompt: "Fix it and say it: a learner said \"Attualmente trenta per cento degli abitanti hanno votato e la polizia ha fermato a due persone.\"", tip: "Three fixes: \"in realtà\", \"il trenta per cento ... ha\", no \"a\".", explanation: "Each slip corrected." },
    ],
  },
  {
    slug: "b1-mission-write-a-news-brief",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A News Brief",
    summary: "Write a 100-word news brief about an event in your town: headline, lead, details, a quote.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The headline and the lead",
        body: [
          "Your mission: write \"una breve\" (a short news item) for your town's website about a real-style local event: a festival, a road closure, a new shop, a rescue. Start with a nominal headline: \"Pavia, al via la Festa del Ticino\" (\"al via\" = starting). Then the lead with when, where, what: \"Si apre venerdì 6 giugno, sul lungofiume, la tradizionale Festa del Ticino\".",
          "Use the passive and \"si\" to keep it impersonal: \"Sono attesi migliaia di visitatori\", \"Si potranno visitare gli stand gastronomici\".",
        ],
        examples: [
          { es: "Pavia, al via la Festa del Ticino.", en: "Pavia: the Ticino Festival gets under way." },
          { es: "Si apre venerdì 6 giugno, sul lungofiume, la tradizionale festa.", en: "The traditional festival opens on Friday 6 June on the riverside." },
          { es: "Sono attesi migliaia di visitatori.", en: "Thousands of visitors are expected." },
          { es: "Si potranno assaggiare i piatti tipici della zona.", en: "Visitors will be able to taste local dishes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thousands of visitors are expected.", answer: "Sono attesi migliaia di visitatori.", altAnswers: ["Si attendono migliaia di visitatori.", "Si aspettano migliaia di visitatori."], explanation: "Passive \"sono attesi\" or si passivante." },
          { type: "multiple-choice", question: "Which is a good nominal headline?", options: ["Pavia, al via la Festa del Ticino", "Oggi io vi parlo della festa che c'è a Pavia", "La festa a Pavia è bella e io ci vado", "Ciao a tutti, festa!"], correctIndex: 0, explanation: "Place, comma, nominal news." },
        ],
      },
      {
        heading: "Details, numbers and a quote",
        body: [
          "Add a figure and a source: \"Secondo gli organizzatori, l'anno scorso i visitatori sono stati più di diecimila\". Then a short quote with the verb after: \"«Quest'anno abbiamo raddoppiato gli stand», spiega l'organizzatrice, Laura Ferri\". Close with practical information: \"L'ingresso è gratuito. Il centro sarà chiuso al traffico dalle 18 alle 24\".",
        ],
        examples: [
          { es: "L'anno scorso i visitatori sono stati più di diecimila.", en: "Last year there were more than ten thousand visitors." },
          { es: "«Quest'anno abbiamo raddoppiato gli stand», spiega l'organizzatrice.", en: "'This year we've doubled the stalls,' the organiser explains." },
          { es: "L'ingresso è gratuito.", en: "Entry is free." },
          { es: "Il centro sarà chiuso al traffico dalle 18 alle 24.", en: "The centre will be closed to traffic from 6 p.m. to midnight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Entry is free.", answer: "L'ingresso è gratuito.", altAnswers: ["L'ingresso è libero.", "L'entrata è gratuita.", "L'entrata è libera."], explanation: "\"Gratuito\" = free of charge." },
          { type: "listen-choose", audio: "Il centro sarà chiuso al traffico dalle diciotto alle ventiquattro.", question: "When is the centre closed to traffic?", options: ["6 p.m. to midnight", "6 a.m. to noon", "all day", "8 p.m. to 4 a.m."], correctIndex: 0, explanation: "24-hour clock: \"dalle 18 alle 24\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The festival opens on Friday on the riverside.", answer: "La festa si apre venerdì sul lungofiume.", altAnswers: ["La festa apre venerdì sul lungofiume.", "Venerdì si apre la festa sul lungofiume."], explanation: "\"Aprirsi\" or \"aprire\" for an event starting." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "According to the organisers, there were ten thousand visitors.", answer: "Secondo gli organizzatori, i visitatori sono stati diecimila.", altAnswers: ["Secondo gli organizzatori, ci sono stati diecimila visitatori.", "Secondo gli organizzatori i visitatori sono stati diecimila."], explanation: "\"Secondo\" + source." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The centre will be closed to traffic.", answer: "Il centro sarà chiuso al traffico.", altAnswers: ["Il centro verrà chiuso al traffico."], explanation: "Future passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "'We've doubled the stalls,' explains the organiser.", answer: "«Abbiamo raddoppiato gli stand», spiega l'organizzatrice.", altAnswers: ["«Abbiamo raddoppiato gli stand», spiega l'organizzatore.", "\"Abbiamo raddoppiato gli stand\", spiega l'organizzatrice."], explanation: "Quote first, then verb + subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'll be able to taste local dishes.", answer: "Si potranno assaggiare i piatti tipici.", altAnswers: ["Si potranno assaggiare piatti tipici.", "Sarà possibile assaggiare i piatti tipici."], explanation: "Si passivante + plural noun: \"si potranno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pavia: the festival [gets under way].", sentence: "Pavia, ___ la festa.", answer: "al via", explanation: "\"Al via\" = starting." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[More than] ten thousand people came.", sentence: "Sono venute ___ diecimila persone.", answer: "più di", altAnswers: ["oltre"], explanation: "\"Più di\" before a number." },
      { type: "word-order", prompt: "Put the words in order to say: Entry is free for children.", words: ["L'ingresso", "è", "gratuito", "per", "i", "bambini."], translation: "Entry is free for children.", explanation: "Practical info at the end." },
      { type: "multiple-choice", question: "What belongs in the first sentence of a news brief?", options: ["when, where and what", "your opinion of the event", "a joke", "the history of the town"], correctIndex: 0, explanation: "The lead gives the key facts." },
      { type: "dictation", audio: "Sono attesi migliaia di visitatori sul lungofiume.", explanation: "\"Attesi\" agrees with \"visitatori\"." },
      { type: "speak", text: "Pavia, al via la Festa del Ticino. Si apre venerdì sul lungofiume e sono attesi migliaia di visitatori. L'ingresso è gratuito.", prompt: "Read your brief aloud: Pavia: the Ticino Festival gets under way. It opens on Friday on the riverside and thousands of visitors are expected. Entry is free.", tip: "Newsreader rhythm: short phrases, falling at the end.", explanation: "Headline, lead, detail, practical info." },
    ],
  },
];

export const IT_B1_U27_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a short news item (about 100 words) for your town's website about a recent or upcoming event (a new shop or park, a festival, a road closure, a rescue). Give it a nominal headline, a first sentence with when, where and what, one number or percentage, a short quote, and practical information.",
  minWords: 80,
  maxWords: 130,
  rubric: [
    "Has a nominal headline (no full verb: Bologna, inaugurato il nuovo parco)",
    "The first sentence answers when, where and what",
    "Uses the passive or si (è stato inaugurato, sono attesi, si potrà)",
    "Includes a number or percentage written correctly (il 20%, migliaia di, un milione di)",
    "Includes a quote with the reporting verb after it («...», spiega ...)",
  ],
  modelAnswer: "Bologna, inaugurato il nuovo parco della Bolognina. È stato inaugurato sabato mattina, in via Fioravanti, il nuovo parco pubblico del quartiere Bolognina. L'area, di circa 20.000 metri quadri, è costata un milione e mezzo di euro ed è stata finanziata in parte dal Comune. Nel parco si trovano un'area giochi, un campo da basket e più di trecento alberi. «Era un'area abbandonata, adesso è un posto per tutti», spiega l'assessora al verde. Secondo un sondaggio, il 70% dei residenti è soddisfatto. Il parco è aperto tutti i giorni dalle 7 alle 22 e l'ingresso è gratuito.",
  explanation: "The headline uses a bare participle (\"inaugurato\"), the lead gives when, where and what, and passives (\"è stato inaugurato\", \"è stata finanziata\") keep it impersonal. Numbers follow Italian style (\"20.000\", \"un milione e mezzo di euro\", \"il 70% dei residenti è\"), and the quote comes before \"spiega\".",
};
