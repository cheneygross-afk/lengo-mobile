// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u27-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 27 Extra Practice: Media and the News. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U27_EXTRA: Lesson[] = [
  {
    slug: "b1-news-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Headlines",
    summary: "Fresh headlines to decode and rewrite as full sentences.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Ten new headlines",
        body: [
          "Same method: find the hidden verb, add articles and an auxiliary, pick the tense. Watch for \"stop a\" (a ban on), \"boom di\" (a surge in), \"caos\" (chaos) and \"giallo\" (a mystery: crime novels in Italy had yellow covers).",
        ],
        examples: [
          { es: "Stop alle auto in centro la domenica.", en: "Cars banned from the centre on Sundays." },
          { es: "Boom di turisti a Matera.", en: "Surge in tourists in Matera." },
          { es: "Caos treni per la neve.", en: "Train chaos because of snow." },
          { es: "Giallo a Como: scomparsa una barca.", en: "Mystery in Como: a boat has disappeared." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Rewrite \"Boom di turisti a Matera\" as a sentence: There are many more tourists in Matera.", source: "There are many more tourists in Matera.", answer: "A Matera ci sono molti più turisti.", altAnswers: ["Ci sono molti più turisti a Matera.", "A Matera i turisti sono aumentati molto."], explanation: "\"Molti più\" + plural noun." },
          { type: "listen-choose", audio: "Stop alle auto in centro la domenica.", question: "What's the news?", options: ["Cars are banned from the centre on Sundays.", "Cars stop in the centre on Sundays.", "There's a car show on Sunday.", "Parking is free on Sundays."], correctIndex: 0, explanation: "\"Stop a\" = a ban on." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Caos treni per la neve\" as a sentence: Trains are in chaos because of the snow.", source: "Trains are in chaos because of the snow.", answer: "C'è il caos sui treni per la neve.", altAnswers: ["Per la neve c'è il caos sui treni.", "C'è caos sui treni a causa della neve.", "I treni sono nel caos per la neve."], explanation: "\"Per\" = because of." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Scomparsa una barca sul lago\" as a sentence: A boat has disappeared on the lake.", source: "A boat has disappeared on the lake.", answer: "Una barca è scomparsa sul lago.", altAnswers: ["È scomparsa una barca sul lago.", "Sul lago è scomparsa una barca."], explanation: "\"Scomparire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Riaperto il Ponte Vecchio dopo i lavori\" as a sentence: The bridge has reopened after the works.", source: "The bridge has reopened after the works.", answer: "Il ponte è stato riaperto dopo i lavori.", altAnswers: ["Il ponte ha riaperto dopo i lavori.", "Hanno riaperto il ponte dopo i lavori.", "Il ponte è riaperto dopo i lavori."], explanation: "Passive or intransitive \"riaprire\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Multe record a Milano\" as a sentence: Milan has given a record number of fines.", source: "Milan has given a record number of fines.", answer: "Milano ha fatto un numero record di multe.", altAnswers: ["A Milano c'è stato un numero record di multe.", "A Milano sono state fatte multe record."], explanation: "\"La multa\" = fine." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Vince la lotteria e sparisce\" as a sentence: A man won the lottery and disappeared.", source: "A man won the lottery and disappeared.", answer: "Un uomo ha vinto la lotteria ed è sparito.", altAnswers: ["Un uomo ha vinto alla lotteria ed è sparito.", "Un uomo ha vinto la lotteria e poi è sparito."], explanation: "\"Ed\" before \"è\"; \"sparire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Sciopero dei bus, città bloccata\" as a sentence: Because of the bus strike the city is at a standstill.", source: "Because of the bus strike the city is at a standstill.", answer: "Per lo sciopero dei bus la città è bloccata.", altAnswers: ["A causa dello sciopero dei bus la città è bloccata.", "Per lo sciopero degli autobus la città è bloccata."], explanation: "\"Lo sciopero\": \"lo\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Rewrite \"Nuove regole per i monopattini\" as a sentence: There are new rules for e-scooters.", source: "There are new rules for e-scooters.", answer: "Ci sono nuove regole per i monopattini.", altAnswers: ["Ci sono regole nuove per i monopattini."], explanation: "\"Il monopattino\" = scooter (kick or electric)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Giallo a Como\": [there's a mystery] in Como.", sentence: "___ a Como.", answer: "C'è un mistero", altAnswers: ["C'è un giallo"], explanation: "\"Giallo\" in headlines = mystery." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Aumento dei biglietti\": tickets [will cost more].", sentence: "I biglietti ___.", answer: "costeranno di più", altAnswers: ["costeranno più cari", "aumenteranno"], explanation: "Future for an announced change." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "\"Ritrovato il portafoglio\": the wallet [has been found].", sentence: "Il portafoglio ___.", answer: "è stato ritrovato", explanation: "Bare participle → passive." },
      { type: "word-order", prompt: "Put the words in order to say: The museum will stay open until midnight.", words: ["Il", "museo", "resterà", "aperto", "fino", "a", "mezzanotte."], translation: "The museum will stay open until midnight.", explanation: "From \"Museo aperto fino a mezzanotte\"." },
      { type: "matching", instructions: "Match the headline word to its meaning.", pairs: [{ left: "stop a", right: "ban on" }, { left: "boom di", right: "surge in" }, { left: "giallo", right: "mystery" }, { left: "caos", right: "chaos" }, { left: "al via", right: "starting" }], explanation: "Headline shorthand." },
      { type: "multiple-choice", question: "\"Rinviata la partita per pioggia\" means ...", options: ["The match has been postponed because of rain.", "The match went ahead in the rain.", "The rain stopped the match halfway.", "The match was sent home."], correctIndex: 0, explanation: "\"Rinviare\" = to postpone." },
      { type: "dictation", audio: "Riaperto il ponte dopo sei mesi di lavori.", explanation: "Bare participle headline." },
      { type: "speak", text: "Hai visto? Dalla settimana prossima stop alle auto in centro la domenica.", prompt: "Tell a friend: Did you see? From next week cars are banned from the centre on Sundays.", tip: "Italians say \"stop\" as in English.", explanation: "A headline phrase used in conversation." },
    ],
  },
  {
    slug: "b1-news-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Short Articles",
    summary: "Read two fresh short articles and translate their key sentences.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two briefs",
        body: [
          "\"Trento. Un escursionista di 45 anni è stato soccorso ieri pomeriggio sul monte Bondone. L'uomo si era perso a causa della nebbia. È stato ritrovato dopo tre ore dai volontari del soccorso alpino.\" And: \"Catania. Apre oggi in via Etnea una libreria indipendente gestita da tre giovani. «Vogliamo creare un luogo d'incontro», spiegano.\"",
        ],
        examples: [
          { es: "Un escursionista è stato soccorso sul monte Bondone.", en: "A hiker was rescued on Monte Bondone." },
          { es: "L'uomo si era perso a causa della nebbia.", en: "The man had got lost because of the fog." },
          { es: "Apre oggi una libreria indipendente in via Etnea.", en: "An independent bookshop opens today in Via Etnea." },
          { es: "«Vogliamo creare un luogo d'incontro», spiegano.", en: "'We want to create a meeting place,' they explain." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Why did the hiker get lost?", options: ["because of the fog", "because of snow", "because he was injured", "because it was dark"], correctIndex: 0, explanation: "\"A causa della nebbia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The man had got lost in the fog.", answer: "L'uomo si era perso nella nebbia.", altAnswers: ["L'uomo si era perso a causa della nebbia."], explanation: "Trapassato: \"si era perso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A hiker was rescued yesterday afternoon.", answer: "Un escursionista è stato soccorso ieri pomeriggio.", altAnswers: ["Ieri pomeriggio è stato soccorso un escursionista."], explanation: "\"Soccorrere\" → \"soccorso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was found after three hours.", answer: "È stato ritrovato dopo tre ore.", altAnswers: ["È stato trovato dopo tre ore.", "Lo hanno ritrovato dopo tre ore."], explanation: "Passive with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A new bookshop opens today.", answer: "Apre oggi una nuova libreria.", altAnswers: ["Oggi apre una nuova libreria.", "Una nuova libreria apre oggi."], explanation: "News style: verb first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bookshop is run by three young people.", answer: "La libreria è gestita da tre giovani.", altAnswers: ["La libreria è gestita da tre ragazzi."], explanation: "\"Gestire\" → \"gestito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "'We want to create a meeting place,' they explain.", answer: "«Vogliamo creare un luogo d'incontro», spiegano.", altAnswers: ["\"Vogliamo creare un luogo d'incontro\", spiegano.", "«Vogliamo creare un luogo di incontro», spiegano."], explanation: "Quote first, then the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The volunteers found him in the fog.", answer: "I volontari l'hanno trovato nella nebbia.", altAnswers: ["I volontari lo hanno trovato nella nebbia.", "I volontari l'hanno ritrovato nella nebbia."], explanation: "\"L'hanno\" = lo hanno." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The man [had got lost].", sentence: "L'uomo ___.", answer: "si era perso", explanation: "Reflexive trapassato with \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Mountain rescue] arrived quickly.", sentence: "___ è arrivato in fretta.", answer: "Il soccorso alpino", explanation: "\"Soccorso alpino\" = mountain rescue." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shop is [in Via Etnea].", sentence: "Il negozio è ___.", answer: "in via Etnea", explanation: "\"In via\" + street name." },
      { type: "word-order", prompt: "Put the words in order to say: The hiker is fine.", words: ["L'escursionista", "sta", "bene."], translation: "The hiker is fine.", explanation: "\"Stare bene\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "l'escursionista", right: "hiker" }, { left: "soccorso", right: "rescued" }, { left: "la nebbia", right: "fog" }, { left: "gestita", right: "run, managed" }, { left: "un luogo d'incontro", right: "a meeting place" }], explanation: "Vocabulary from the two briefs." },
      { type: "multiple-choice", question: "Who opened the bookshop?", options: ["three young people", "a big chain", "the town council", "a hiker"], correctIndex: 0, explanation: "\"Gestita da tre giovani\"." },
      { type: "listen-choose", audio: "È stato ritrovato dopo tre ore dai volontari.", question: "Who found him?", options: ["volunteers", "police", "his family", "tourists"], correctIndex: 0, explanation: "\"Dai volontari\": agent with \"da\"." },
      { type: "dictation", audio: "Apre oggi in via Etnea una libreria indipendente.", explanation: "Verb first in news." },
      { type: "speak", text: "Ieri un escursionista si è perso nella nebbia, ma è stato ritrovato dopo tre ore.", prompt: "Summarise: Yesterday a hiker got lost in the fog, but was found after three hours.", tip: "\"Escursionista\": e-scur-sio-NI-sta.", explanation: "Passato prossimo + passive." },
    ],
  },
  {
    slug: "b1-news-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Numbers",
    summary: "Fresh statistics: percentages, rises and falls, millions and approximate numbers.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Rises and falls",
        body: [
          "Up: \"aumentare\", \"crescere\", \"salire\" (all with \"essere\" when the figure is the subject), \"un aumento\", \"una crescita\". Down: \"diminuire\", \"calare\", \"scendere\", \"un calo\", \"una diminuzione\". \"Di\" gives the size of the change (\"è salito del 4%\"), \"a\" the new level (\"è salito al 4%\").",
        ],
        examples: [
          { es: "Il prezzo del pane è salito del 4%.", en: "The price of bread has gone up by 4%." },
          { es: "La disoccupazione è scesa al 6%.", en: "Unemployment has fallen to 6%." },
          { es: "Si registra una crescita del turismo del 12%.", en: "Tourism has grown by 12%." },
          { es: "Gli incidenti sono diminuiti di un terzo.", en: "Accidents have fallen by a third." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Unemployment has fallen [to] 6%.", sentence: "La disoccupazione è scesa ___ 6%.", answer: "al", explanation: "New level: \"a\" + \"il\" = \"al\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Prices have risen [by] 4%.", sentence: "I prezzi sono saliti ___ 4%.", answer: "del", explanation: "Size of change: \"di\" + \"il\" = \"del\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Accidents have fallen by a third.", answer: "Gli incidenti sono diminuiti di un terzo.", altAnswers: ["Gli incidenti sono calati di un terzo."], explanation: "\"Diminuire\" takes \"essere\" here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tourism has grown by 12%.", answer: "Il turismo è cresciuto del 12%.", altAnswers: ["Il turismo è cresciuto del 12 per cento.", "Il turismo è aumentato del 12%."], explanation: "\"Crescere\" → \"cresciuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The population has reached 60 million.", answer: "La popolazione ha raggiunto i 60 milioni.", altAnswers: ["La popolazione ha raggiunto 60 milioni.", "La popolazione è arrivata a 60 milioni."], explanation: "\"Raggiungere\" takes \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "About twenty people protested.", answer: "Una ventina di persone ha protestato.", altAnswers: ["Una ventina di persone hanno protestato.", "Circa venti persone hanno protestato."], explanation: "\"Una ventina di\" = about twenty." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two out of three Italians drink coffee every day.", answer: "Due italiani su tre bevono il caffè ogni giorno.", altAnswers: ["Due italiani su tre bevono caffè ogni giorno.", "Due italiani su tre prendono il caffè ogni giorno."], explanation: "\"Su\" = out of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The price is 1,250 euros.", answer: "Il prezzo è di 1.250 euro.", altAnswers: ["Il prezzo è 1.250 euro.", "Il prezzo è di milleduecentocinquanta euro."], explanation: "A dot for thousands; \"euro\" doesn't change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's been a 2% fall in sales.", answer: "C'è stato un calo delle vendite del 2%.", altAnswers: ["C'è stato un calo del 2% delle vendite.", "Le vendite sono calate del 2%."], explanation: "\"Un calo del\" + percentage." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Hundreds of] people were waiting.", sentence: "___ persone aspettavano.", answer: "Centinaia di", explanation: "\"Centinaia\" (feminine plural) + \"di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Inflation is [one point eight] per cent.", sentence: "L'inflazione è all'___ per cento.", answer: "uno virgola otto", explanation: "Decimal comma: \"virgola\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Half a million] visitors came.", sentence: "Sono arrivati ___ di visitatori.", answer: "mezzo milione", explanation: "\"Mezzo milione di\"." },
      { type: "word-order", prompt: "Put the words in order to say: One Italian in four lives alone.", words: ["Un", "italiano", "su", "quattro", "vive", "da", "solo."], translation: "One Italian in four lives alone.", explanation: "\"Vivere da solo\" = to live alone." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "un calo", right: "a fall" }, { left: "una crescita", right: "growth" }, { left: "su tre", right: "out of three" }, { left: "virgola", right: "decimal point" }, { left: "centinaia", right: "hundreds" }], explanation: "Statistics vocabulary." },
      { type: "multiple-choice", question: "\"È salito al 5%\" or \"è salito del 5%\"? You mean it went up BY 5%.", options: ["del 5%", "al 5%", "nel 5%", "sul 5%"], correctIndex: 0, explanation: "\"Di\" = by (amount of change)." },
      { type: "listen-choose", audio: "Due italiani su tre bevono il caffè ogni giorno.", question: "What proportion drink coffee daily?", options: ["two out of three", "two or three", "twenty-three per cent", "two in ten"], correctIndex: 0, explanation: "\"Su\" = out of." },
      { type: "speak", text: "Il turismo è cresciuto del dodici per cento e la disoccupazione è scesa al sei per cento.", prompt: "Read the figures: Tourism has grown by twelve per cent and unemployment has fallen to six per cent.", tip: "\"Del\" for the change, \"al\" for the new level.", explanation: "\"Di\" vs \"a\" with percentages." },
    ],
  },
];
