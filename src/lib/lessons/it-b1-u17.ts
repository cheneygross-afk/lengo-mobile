// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u17.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 17: The Gerund. Manner, means, time, cause and condition,
// the same-subject rule, pronouns attached, stare / andare + gerund, and
// English -ing that is not an Italian gerund. Ends with a Spiral Review of
// Units 12-17. Conventions: docs/italian-course/authoring.md.
export const IT_B1_U17: Lesson[] = [
  {
    slug: "b1-gerund-manner-means",
    level: "IT-B1",
    number: 1,
    title: "By Doing: Manner and Means",
    summary: "Use the gerund to say how something is done and by what means: ho imparato l'italiano guardando film; è entrato cantando.",
    duration: "17 min",
    sections: [
      {
        heading: "Forms: -ando, -endo",
        body: [
          "You met the gerund with \"stare\": \"sto mangiando\". The forms are simple: -are verbs take \"-ando\" (\"parlando\", \"guardando\"), -ere and -ire verbs take \"-endo\" (\"leggendo\", \"partendo\", \"finendo\"). It never changes for person, gender or number.",
          "A few verbs build it on an old, longer stem: \"fare\" → \"facendo\", \"dire\" → \"dicendo\", \"bere\" → \"bevendo\", \"porre\" → \"ponendo\", \"tradurre\" → \"traducendo\". Stress always falls on the \"-an-\" or \"-en-\": par-LAN-do, fa-CEN-do.",
          "Reflexive and object pronouns attach to the end, and the stress doesn't move: \"alzandosi\" (getting up), \"guardandolo\" (looking at him). This is the same rule you learned for infinitives and \"tu\" commands.",
        ],
        examples: [
          { es: "Sto leggendo un giallo.", en: "I'm reading a detective novel." },
          { es: "Che stai facendo?", en: "What are you doing?" },
          { es: "Stavano bevendo un caffè al bar.", en: "They were having a coffee at the bar." },
          { es: "Sta traducendo un contratto.", en: "She's translating a contract." },
          { es: "Si stava alzando quando ha suonato il telefono.", en: "He was getting up when the phone rang." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's translating a contract.", answer: "Sta traducendo un contratto.", altAnswers: ["Lei sta traducendo un contratto.", "Traduce un contratto."], explanation: "\"Tradurre\" → \"traducendo\", from the old stem \"traduc-\"." },
          { type: "multiple-choice", question: "Which is the gerund of \"dire\"?", options: ["dicendo", "dirando", "diendo", "detto"], correctIndex: 0, explanation: "\"Dire\" builds on \"dic-\": \"dicendo\"." },
        ],
      },
      {
        heading: "How: è entrato cantando",
        body: [
          "On its own, without \"stare\", the gerund often tells you how something was done: \"È entrato cantando\" (he came in singing), \"Se n'è andata sbattendo la porta\" (she left slamming the door). English uses -ing in the same way, so this one feels familiar.",
          "The gerund always describes the subject of the main verb: in \"È entrato cantando\", the person who came in is the one singing.",
        ],
        examples: [
          { es: "È entrato cantando.", en: "He came in singing." },
          { es: "Se n'è andata sbattendo la porta.", en: "She left, slamming the door." },
          { es: "I bambini sono arrivati correndo.", en: "The children came running." },
          { es: "Mi ha risposto sorridendo.", en: "He answered me with a smile." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children came running.", answer: "I bambini sono arrivati correndo.", altAnswers: ["I bambini sono venuti correndo.", "Le bambine sono arrivate correndo."], explanation: "The gerund describes the manner: \"correndo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He answered me [with a smile].", sentence: "Mi ha risposto ___.", answer: "sorridendo", explanation: "English often has with a smile; Italian says smiling: \"sorridendo\"." },
        ],
      },
      {
        heading: "By doing: means",
        body: [
          "This is where English and Italian part ways. English by + -ing (by watching films, by reading) is just the gerund in Italian, with no preposition: \"Ho imparato l'italiano guardando film\" (I learned Italian by watching films). Never \"per guardando\" or \"da guardando\".",
          "It's also the natural answer to \"Come hai fatto?\" (how did you do it?): \"Risparmiando\" (by saving), \"Chiedendo a un amico\" (by asking a friend).",
        ],
        examples: [
          { es: "Ho imparato l'italiano guardando film.", en: "I learned Italian by watching films." },
          { es: "Si impara sbagliando.", en: "You learn by making mistakes." },
          { es: "Ha perso cinque chili andando al lavoro in bici.", en: "She lost five kilos by cycling to work." },
          { es: "Come hai trovato casa? Chiedendo a un amico.", en: "How did you find a flat? By asking a friend." },
          { es: "Risparmiamo tanto cucinando a casa.", en: "We save a lot by cooking at home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I learned Italian by watching films.", answer: "Ho imparato l'italiano guardando film.", altAnswers: ["Ho imparato l'italiano guardando i film.", "Ho imparato italiano guardando film.", "Ho imparato l'italiano guardando dei film."], explanation: "By + -ing = gerund, no preposition." },
          { type: "multiple-choice", question: "How do you say: you learn by making mistakes?", options: ["Si impara sbagliando.", "Si impara per sbagliando.", "Si impara da sbagliare.", "Si impara a sbagliando."], correctIndex: 0, explanation: "No preposition before the gerund." },
          { type: "listen-choose", audio: "Risparmiamo tanto cucinando a casa.", question: "How do they save money?", options: ["By cooking at home", "By eating out less often", "By shopping at the market", "By working from home"], correctIndex: 0, explanation: "\"Cucinando a casa\" = by cooking at home." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He came in singing.", answer: "È entrato cantando.", altAnswers: ["Lui è entrato cantando.", "È entrato canticchiando."], explanation: "Manner: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She lost five kilos by cycling to work.", answer: "Ha perso cinque chili andando al lavoro in bici.", altAnswers: ["Ha perso cinque chili andando al lavoro in bicicletta.", "Ha perso cinque chili andando a lavorare in bici."], explanation: "By cycling = \"andando in bici\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We save a lot by cooking at home.", answer: "Risparmiamo tanto cucinando a casa.", altAnswers: ["Risparmiamo molto cucinando a casa.", "Cucinando a casa risparmiamo tanto."], explanation: "Means: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How did you find a flat? By asking a friend.", answer: "Come hai trovato casa? Chiedendo a un amico.", altAnswers: ["Come hai trovato casa? Chiedendo a un'amica.", "Come hai trovato l'appartamento? Chiedendo a un amico."], explanation: "The gerund answers \"come?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you doing? (to a friend)", answer: "Che stai facendo?", altAnswers: ["Cosa stai facendo?", "Che cosa stai facendo?", "Che fai?", "Cosa fai?"], explanation: "\"Fare\" → \"facendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She left, [slamming] the door.", sentence: "Se n'è andata ___ la porta.", answer: "sbattendo", explanation: "Manner: \"sbattendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I improved my English [by reading] the newspaper.", sentence: "Ho migliorato il mio inglese ___ il giornale.", answer: "leggendo", explanation: "By + -ing = gerund." },
      { type: "word-order", prompt: "Put the words in order to say: You learn by making mistakes.", words: ["Si", "impara", "sbagliando."], translation: "You learn by making mistakes.", explanation: "A common Italian saying." },
      { type: "matching", instructions: "Match the infinitive to its gerund.", pairs: [{ left: "fare", right: "facendo" }, { left: "dire", right: "dicendo" }, { left: "bere", right: "bevendo" }, { left: "finire", right: "finendo" }, { left: "porre", right: "ponendo" }], explanation: "-are → -ando; -ere / -ire → -endo; some use an old stem." },
      { type: "dictation", audio: "Ho imparato a cucinare guardando mia nonna.", explanation: "\"Guardando\": by watching." },
      { type: "speak", text: "Ho imparato l'italiano ascoltando la radio e parlando con i vicini.", prompt: "Say it in Italian: I learned Italian by listening to the radio and talking to the neighbours.", tip: "Two gerunds: a-scol-TAN-do, par-LAN-do.", explanation: "Two gerunds of means." },
    ],
  },
  {
    slug: "b1-gerund-time-cause",
    level: "IT-B1",
    number: 2,
    title: "While, Since: Time and Cause",
    summary: "Use the gerund for while (tornando a casa, ho visto un incidente) and since / because (essendo malato, non sono venuto), with the same-subject rule.",
    duration: "17 min",
    sections: [
      {
        heading: "Time: while doing",
        body: [
          "A gerund at the start of a sentence often means while: \"Tornando a casa, ho visto un incidente\" (while I was going home, I saw an accident). It's a compact alternative to \"mentre\" + imperfetto: \"Mentre tornavo a casa, ho visto un incidente\".",
          "The rule that matters: the gerund's subject is the same as the main verb's. In \"Tornando a casa, ho visto Marco\", it's I who was going home. If Marco was the one going home, you need \"mentre\": \"Ho visto Marco mentre tornava a casa\".",
        ],
        examples: [
          { es: "Tornando a casa, ho visto un incidente.", en: "On my way home, I saw an accident." },
          { es: "Mentre tornavo a casa, ho visto un incidente.", en: "While I was going home, I saw an accident." },
          { es: "Facendo la spesa, ho incontrato la professoressa.", en: "While I was doing the shopping, I ran into my teacher." },
          { es: "Ho visto Marco mentre usciva dalla banca.", en: "I saw Marco as he was coming out of the bank." },
          { es: "Leggendo il giornale, si è addormentato.", en: "He fell asleep reading the paper." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On my way home, I saw an accident.", answer: "Tornando a casa, ho visto un incidente.", altAnswers: ["Mentre tornavo a casa, ho visto un incidente.", "Tornando a casa ho visto un incidente."], explanation: "Same subject (I): the gerund works." },
          { type: "multiple-choice", question: "You saw Marco; Marco was coming out of the bank. Which sentence says that?", options: ["Ho visto Marco mentre usciva dalla banca.", "Uscendo dalla banca, ho visto Marco.", "Ho visto Marco uscendo dalla banca.", "Uscendo Marco dalla banca, l'ho visto."], correctIndex: 0, explanation: "Different subjects: use \"mentre\". The gerund would mean you were coming out." },
        ],
      },
      {
        heading: "Cause: since, because",
        body: [
          "A gerund can also give the reason: \"Essendo malato, non sono venuto\" (since I was ill, I didn't come), \"Avendo poco tempo, prendo un taxi\" (as I have little time, I'm taking a taxi). It sounds a little more formal than \"siccome\" or \"poiché\" + indicative, and is very common in writing.",
          "With \"essere\" or \"avere\" as the main idea, English often keeps being or having: being ill, having little time. Italian does the same: \"essendo\", \"avendo\".",
        ],
        examples: [
          { es: "Essendo malato, non sono venuto.", en: "Being ill, I didn't come." },
          { es: "Avendo poco tempo, prendo un taxi.", en: "As I have little time, I'll take a taxi." },
          { es: "Non conoscendo la città, si è perso.", en: "Not knowing the city, he got lost." },
          { es: "Siccome non conosceva la città, si è perso.", en: "Since he didn't know the city, he got lost." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not knowing the city, he got lost.", answer: "Non conoscendo la città, si è perso.", altAnswers: ["Siccome non conosceva la città, si è perso.", "Non conoscendo la città si è perso."], explanation: "\"Non\" goes before the gerund." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Being ill], I didn't come.", sentence: "___, non sono venuto.", answer: "Essendo malato", altAnswers: ["Siccome ero malato", "Poiché ero malato"], explanation: "Cause: \"essendo\"." },
        ],
      },
      {
        heading: "Having done: the past gerund",
        body: [
          "When the cause or the earlier event is finished, use the past gerund: \"avendo\" or \"essendo\" + participle. \"Avendo finito i compiti, è uscita\" (having finished her homework, she went out), \"Essendo arrivati tardi, abbiamo perso l'inizio\" (having arrived late, we missed the beginning). With \"essendo\" the participle agrees.",
          "Pronouns attach to the gerund: \"Vedendola, l'ho riconosciuta\" (seeing her, I recognised her), \"Avendoglielo detto\" (having told him).",
        ],
        examples: [
          { es: "Avendo finito i compiti, è uscita.", en: "Having finished her homework, she went out." },
          { es: "Essendo arrivati tardi, abbiamo perso l'inizio.", en: "Having arrived late, we missed the beginning." },
          { es: "Vedendola, l'ho riconosciuta subito.", en: "When I saw her, I recognised her straight away." },
          { es: "Non avendo capito, ha chiesto di nuovo.", en: "Not having understood, he asked again." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having finished her homework, she went out.", answer: "Avendo finito i compiti, è uscita.", altAnswers: ["Dopo aver finito i compiti, è uscita.", "Avendo finito i compiti è uscita."], explanation: "Past gerund: \"avendo finito\"." },
          { type: "listen-choose", audio: "Vedendola, l'ho riconosciuta subito.", question: "What does it mean?", options: ["When I saw her, I recognised her straight away.", "She saw me and recognised me.", "I'll recognise her when I see her.", "I didn't recognise her when I saw her."], correctIndex: 0, explanation: "\"Vedendola\": gerund + \"la\" attached." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While I was doing the shopping, I ran into my teacher.", answer: "Facendo la spesa, ho incontrato la professoressa.", altAnswers: ["Mentre facevo la spesa, ho incontrato la professoressa.", "Facendo la spesa, ho incontrato il professore.", "Mentre facevo la spesa, ho incontrato il professore."], explanation: "Same subject: gerund or \"mentre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He fell asleep reading the paper.", answer: "Si è addormentato leggendo il giornale.", altAnswers: ["Leggendo il giornale, si è addormentato."], explanation: "Time: \"leggendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As I have little time, I'll take a taxi.", answer: "Avendo poco tempo, prendo un taxi.", altAnswers: ["Siccome ho poco tempo, prendo un taxi.", "Avendo poco tempo, prenderò un taxi."], explanation: "Cause: \"avendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having arrived late, we missed the beginning.", answer: "Essendo arrivati tardi, abbiamo perso l'inizio.", altAnswers: ["Essendo arrivate tardi, abbiamo perso l'inizio.", "Siccome siamo arrivati tardi, abbiamo perso l'inizio."], explanation: "Past gerund with \"essere\": agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I saw Giulia as she was getting off the bus.", answer: "Ho visto Giulia mentre scendeva dall'autobus.", altAnswers: ["Ho visto Giulia che scendeva dall'autobus."], explanation: "Different subjects: \"mentre\", not a gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Not having understood], he asked again.", sentence: "___, ha chiesto di nuovo.", answer: "Non avendo capito", explanation: "Past gerund with \"non\" in front." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[When I saw him], I recognised him.", sentence: "___, l'ho riconosciuto.", answer: "Vedendolo", altAnswers: ["Quando l'ho visto"], explanation: "Pronoun attached to the gerund." },
      { type: "word-order", prompt: "Put the words in order to say: Being tired, she went to bed early.", words: ["Essendo", "stanca,", "è", "andata", "a", "letto", "presto."], translation: "Being tired, she went to bed early.", explanation: "Cause: \"essendo\"; \"stanca\" agrees." },
      { type: "multiple-choice", question: "\"Uscendo dall'ufficio, ho visto Paolo.\" Who was leaving the office?", options: ["the speaker", "Paolo", "both of them", "nobody"], correctIndex: 0, explanation: "The gerund's subject is the subject of the main verb: I." },
      { type: "dictation", audio: "Non avendo la macchina, vado al lavoro in treno.", explanation: "Cause: \"non avendo\"." },
      { type: "speak", text: "Tornando a casa, ho incontrato Chiara e, avendo un po' di tempo, abbiamo preso un caffè.", prompt: "Say it in Italian: On my way home, I ran into Chiara and, having a bit of time, we had a coffee.", tip: "Pause after each gerund phrase.", explanation: "Gerund of time, then of cause." },
    ],
  },
  {
    slug: "b1-gerund-condition",
    level: "IT-B1",
    number: 3,
    title: "If You Do: The Gerund of Condition",
    summary: "Use the gerund as a compact if: studiando ogni giorno, migliorerai; volendo, possiamo andare in treno.",
    duration: "17 min",
    sections: [
      {
        heading: "Studiando, passerai",
        body: [
          "A gerund can replace a real \"se\" clause: \"Studiando ogni giorno, migliorerai\" = \"Se studi ogni giorno, migliorerai\" (if you study every day, you'll improve). It sounds natural in advice and instructions.",
          "The same-subject rule still applies: the person studying is the person who will improve. For a different subject, go back to \"se\": \"Se il professore spiega bene, capirai\".",
          "The gerund of condition is only for real, likely conditions, like \"se\" + present or future. Put it first, followed by a comma, and the main clause in the present, future or imperative: \"Volendo bene a qualcuno, lo rispetti\" (if you love someone, you respect them).",
        ],
        examples: [
          { es: "Studiando ogni giorno, migliorerai.", en: "If you study every day, you'll improve." },
          { es: "Prendendo il treno delle sette, arrivi in tempo.", en: "If you take the seven o'clock train, you'll arrive in time." },
          { es: "Mangiando meno dolci, ti sentirai meglio.", en: "If you eat fewer sweets, you'll feel better." },
          { es: "Partendo adesso, saremo lì per pranzo.", en: "If we leave now, we'll be there for lunch." },
          { es: "Facendo così, non risolvi niente.", en: "Doing it that way, you won't solve anything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, using a gerund.", source: "If you study every day, you'll improve.", answer: "Studiando ogni giorno, migliorerai.", altAnswers: ["Studiando tutti i giorni, migliorerai.", "Se studi ogni giorno, migliorerai.", "Se studierai ogni giorno, migliorerai."], explanation: "Gerund = a compact real \"se\" clause." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If we leave] now, we'll be there for lunch.", sentence: "___ adesso, saremo lì per pranzo.", answer: "Partendo", altAnswers: ["Se partiamo", "Se partiremo"], explanation: "\"Partendo\" = if we leave." },
        ],
      },
      {
        heading: "Volendo: if you like",
        body: [
          "Some gerunds have become fixed phrases. \"Volendo\" means if you want, if need be: \"Volendo, possiamo andare in treno\" (we could go by train, if you like). \"Pensandoci bene\" means on second thoughts; \"parlando di\" means speaking of; \"tutto sommato\", though not a gerund, does the same job as all things considered.",
          "\"Strada facendo\" (on the way) and \"cammin facendo\" (along the way) are worth recognising too.",
        ],
        examples: [
          { es: "Volendo, possiamo andare in treno.", en: "We could go by train, if you like." },
          { es: "Pensandoci bene, preferisco restare.", en: "On second thoughts, I'd rather stay." },
          { es: "Parlando di vacanze, dove andate quest'estate?", en: "Speaking of holidays, where are you going this summer?" },
          { es: "Compriamo il pane strada facendo.", en: "Let's buy the bread on the way." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On second thoughts, I'd rather stay.", answer: "Pensandoci bene, preferisco restare.", altAnswers: ["Pensandoci bene, preferisco rimanere.", "Pensandoci bene, preferirei restare."], explanation: "\"Pensandoci\": gerund + \"ci\" attached." },
          { type: "listen-choose", audio: "Volendo, possiamo andare in treno.", question: "What does it mean?", options: ["We could go by train, if you like.", "We want to go by train.", "We have to go by train.", "We went by train because we wanted to."], correctIndex: 0, explanation: "\"Volendo\" = if you like." },
        ],
      },
      {
        heading: "Stare and andare + gerund",
        body: [
          "\"Stare\" + gerund is the ongoing action you know: \"Sto lavorando\". Use it only for something happening right now; for habits use the plain present.",
          "\"Andare\" + gerund describes gradual change, mostly in writing and the news: \"La situazione va migliorando\" (the situation is gradually improving), \"I prezzi vanno aumentando\" (prices keep rising). Recognise it; in conversation people say \"sta migliorando\".",
        ],
        examples: [
          { es: "Sto lavorando, ti richiamo dopo.", en: "I'm working, I'll call you back later." },
          { es: "La situazione va migliorando.", en: "The situation is gradually improving." },
          { es: "I prezzi vanno aumentando.", en: "Prices keep rising." },
          { es: "Il traffico sta peggiorando.", en: "The traffic is getting worse." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm working, I'll call you back later. (to a friend)", answer: "Sto lavorando, ti richiamo dopo.", altAnswers: ["Sto lavorando, ti richiamo più tardi.", "Sto lavorando, ti richiamerò dopo."], explanation: "Right now: \"stare\" + gerund." },
          { type: "multiple-choice", question: "\"I prezzi vanno aumentando\" means ...", options: ["Prices keep rising.", "Prices are going to rise.", "Prices rose.", "Prices will stop rising."], correctIndex: 0, explanation: "\"Andare\" + gerund = gradual, continuing change." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using a gerund.", source: "If you take the seven o'clock train, you'll arrive in time.", answer: "Prendendo il treno delle sette, arrivi in tempo.", altAnswers: ["Prendendo il treno delle sette, arriverai in tempo.", "Prendendo il treno delle 7, arrivi in tempo."], explanation: "Gerund of condition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using a gerund.", source: "If you eat fewer sweets, you'll feel better.", answer: "Mangiando meno dolci, ti sentirai meglio.", altAnswers: ["Mangiando meno dolci, starai meglio."], explanation: "\"Mangiando\" = if you eat." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Speaking of holidays, where are you going this summer? (plural)", answer: "Parlando di vacanze, dove andate quest'estate?", altAnswers: ["A proposito di vacanze, dove andate quest'estate?"], explanation: "\"Parlando di\" = speaking of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The traffic is getting worse.", answer: "Il traffico sta peggiorando.", altAnswers: ["Il traffico va peggiorando."], explanation: "\"Peggiorare\" = to get worse." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's buy the bread on the way.", answer: "Compriamo il pane strada facendo.", altAnswers: ["Prendiamo il pane strada facendo.", "Compriamo il pane lungo la strada."], explanation: "\"Strada facendo\" = on the way." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We could go by bike, [if you like].", sentence: "___, possiamo andare in bici.", answer: "Volendo", altAnswers: ["Se vuoi", "Se volete"], explanation: "\"Volendo\" = if you like." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The situation [is gradually improving].", sentence: "La situazione ___.", answer: "va migliorando", altAnswers: ["sta migliorando"], explanation: "\"Andare\" + gerund for gradual change." },
      { type: "word-order", prompt: "Put the words in order to say: If you save a little every month, you'll buy the car.", words: ["Risparmiando", "un", "po'", "ogni", "mese,", "comprerai", "la", "macchina."], translation: "If you save a little every month, you'll buy the car.", explanation: "Gerund of condition + future." },
      { type: "multiple-choice", question: "Which sentence breaks the same-subject rule?", options: ["Spiegando bene il professore, capirai.", "Studiando bene, capirai.", "Ascoltando bene, capirai.", "Leggendo bene, capirai."], correctIndex: 0, explanation: "The professor explains, you understand: different subjects need \"se\": \"Se il professore spiega bene, capirai\"." },
      { type: "dictation", audio: "Pensandoci bene, è meglio partire domani.", explanation: "\"Pensandoci\": \"ci\" attached." },
      { type: "speak", text: "Volendo, possiamo prendere il treno: partendo alle otto, arriviamo per pranzo.", prompt: "Say it in Italian: We could take the train, if you like: if we leave at eight, we'll arrive for lunch.", tip: "\"Volendo\": vo-LEN-do.", explanation: "A fixed gerund and a gerund of condition." },
    ],
  },
  {
    slug: "b1-not-a-gerund",
    level: "IT-B1",
    number: 4,
    title: "English -ing That Isn't a Gerund",
    summary: "Translate English -ing correctly when Italian needs an infinitive or a noun: mi piace nuotare, prima di partire, dopo aver mangiato, smettere di fumare, il nuoto.",
    duration: "17 min",
    sections: [
      {
        heading: "-ing as a subject or object: the infinitive",
        body: [
          "English uses -ing as a noun: swimming is good for you, I love cooking. Italian uses the infinitive: \"Nuotare fa bene\", \"Mi piace cucinare\". The Italian gerund can never be the subject or object of a verb, so \"mi piace nuotando\" is wrong.",
          "The infinitive can even take an article, especially in writing: \"Il viaggiare apre la mente\" (travelling broadens the mind). And many activities have their own noun: \"il nuoto\" (swimming), \"il fumo\" (smoking), \"la corsa\" (running), \"la lettura\" (reading).",
        ],
        examples: [
          { es: "Nuotare fa bene alla schiena.", en: "Swimming is good for your back." },
          { es: "Mi piace cucinare per gli amici.", en: "I love cooking for my friends." },
          { es: "Il fumo fa male.", en: "Smoking is bad for you." },
          { es: "Odio aspettare.", en: "I hate waiting." },
          { es: "Il nuoto è il mio sport preferito.", en: "Swimming is my favourite sport." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I love cooking for my friends.", answer: "Mi piace cucinare per gli amici.", altAnswers: ["Adoro cucinare per gli amici.", "Mi piace cucinare per i miei amici.", "Amo cucinare per gli amici."], explanation: "-ing as object = infinitive: \"cucinare\"." },
          { type: "multiple-choice", question: "How do you say: swimming is good for your back?", options: ["Nuotare fa bene alla schiena.", "Nuotando fa bene alla schiena.", "Il nuotando fa bene alla schiena.", "Nuota fa bene alla schiena."], correctIndex: 0, explanation: "-ing as subject = infinitive." },
        ],
      },
      {
        heading: "After a preposition: the infinitive",
        body: [
          "Every preposition takes the infinitive in Italian, never the gerund: before leaving = \"prima di partire\", without saying = \"senza dire\", instead of complaining = \"invece di lamentarti\", thanks for coming = \"grazie per essere venuto\".",
          "After doing uses the past infinitive: \"dopo aver mangiato\" (after eating), \"dopo essere arrivati\" (after arriving). \"Aver\" usually drops its final e.",
        ],
        examples: [
          { es: "Lavati le mani prima di mangiare.", en: "Wash your hands before eating." },
          { es: "È uscito senza dire niente.", en: "He went out without saying anything." },
          { es: "Invece di lamentarti, aiutami!", en: "Instead of complaining, help me!" },
          { es: "Dopo aver mangiato, abbiamo fatto una passeggiata.", en: "After eating, we went for a walk." },
          { es: "Grazie per essere venuti.", en: "Thanks for coming. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He went out without saying anything.", answer: "È uscito senza dire niente.", altAnswers: ["È uscito senza dire nulla.", "Lui è uscito senza dire niente."], explanation: "\"Senza\" + infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[After eating], we went for a walk.", sentence: "___, abbiamo fatto una passeggiata.", answer: "Dopo aver mangiato", altAnswers: ["Dopo avere mangiato"], explanation: "\"Dopo\" + past infinitive." },
          { type: "listen-choose", audio: "Invece di lamentarti, aiutami!", question: "What does the speaker want?", options: ["Help instead of complaints", "Someone to complain for them", "To complain together", "Some time alone"], correctIndex: 0, explanation: "\"Invece di\" + infinitive = instead of -ing." },
        ],
      },
      {
        heading: "After verbs and as adjectives",
        body: [
          "Verbs that take -ing in English take the infinitive in Italian, usually with \"di\" or \"a\": stop smoking = \"smettere di fumare\", I'm thinking of moving = \"penso di trasferirmi\", keep going = \"continuare a\", I'm used to getting up early = \"sono abituato ad alzarmi presto\".",
          "When -ing works as an adjective, Italian often has a form in \"-ante\" or \"-ente\": \"acqua corrente\" (running water), \"un film divertente\" (an entertaining film), or a relative clause: the man sitting there = \"l'uomo seduto lì\" or \"l'uomo che è seduto lì\".",
        ],
        examples: [
          { es: "Ho smesso di fumare tre anni fa.", en: "I stopped smoking three years ago." },
          { es: "Penso di trasferirmi a Bologna.", en: "I'm thinking of moving to Bologna." },
          { es: "Sono abituata ad alzarmi presto.", en: "I'm used to getting up early." },
          { es: "C'è l'acqua corrente nella casetta?", en: "Is there running water in the cottage?" },
          { es: "Chi è l'uomo seduto vicino alla finestra?", en: "Who's the man sitting by the window?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I stopped smoking three years ago.", answer: "Ho smesso di fumare tre anni fa.", altAnswers: ["Io ho smesso di fumare tre anni fa."], explanation: "\"Smettere di\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's the man sitting by the window?", answer: "Chi è l'uomo seduto vicino alla finestra?", altAnswers: ["Chi è l'uomo che è seduto vicino alla finestra?", "Chi è l'uomo seduto accanto alla finestra?"], explanation: "A position is a state: \"seduto\", the participle." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Smoking is bad for you.", answer: "Il fumo fa male.", altAnswers: ["Fumare fa male."], explanation: "A noun (\"il fumo\") or the infinitive (\"fumare\")." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hate waiting.", answer: "Odio aspettare.", altAnswers: ["Io odio aspettare.", "Detesto aspettare."], explanation: "Infinitive as object." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wash your hands before eating. (to a child)", answer: "Lavati le mani prima di mangiare.", explanation: "\"Prima di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thanks for coming. (plural)", answer: "Grazie per essere venuti.", altAnswers: ["Grazie di essere venuti.", "Grazie per essere venute.", "Grazie di essere venute."], explanation: "Past infinitive after \"grazie per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm thinking of moving to Bologna.", answer: "Penso di trasferirmi a Bologna.", altAnswers: ["Sto pensando di trasferirmi a Bologna."], explanation: "\"Pensare di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm used to getting up early.", answer: "Sono abituato ad alzarmi presto.", altAnswers: ["Sono abituata ad alzarmi presto.", "Sono abituato a alzarmi presto.", "Sono abituata a alzarmi presto."], explanation: "\"Essere abituato a\" + infinitive; \"a\" often becomes \"ad\" before a vowel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Instead of complaining], help me! (to a friend)", sentence: "___, aiutami!", answer: "Invece di lamentarti", explanation: "\"Invece di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Reading] is my favourite hobby.", sentence: "___ è il mio hobby preferito.", answer: "Leggere", altAnswers: ["La lettura"], explanation: "As a subject, -ing becomes an infinitive or a noun, never a gerund." },
      { type: "word-order", prompt: "Put the words in order to say: Swimming is my favourite sport.", words: ["Il", "nuoto", "è", "il", "mio", "sport", "preferito."], translation: "Swimming is my favourite sport.", explanation: "The sport has its own noun: \"il nuoto\"." },
      { type: "multi-select", question: "Which sentences are correct? Choose all that apply.", options: ["Mi piace ballare.", "Mi piace ballando.", "Prima di uscire, chiudi la finestra.", "Prima di uscendo, chiudi la finestra.", "Ho imparato ballando."], correctIndexes: [0, 2, 4], explanation: "Infinitive after \"piacere\" and prepositions; the gerund for means." },
      { type: "dictation", audio: "Dopo aver mangiato, abbiamo fatto una passeggiata.", explanation: "\"Dopo aver\" + participle." },
      { type: "speak", text: "Mi piace nuotare, ma odio alzarmi presto. Prima di andare in piscina, bevo un caffè.", prompt: "Say it in Italian: I love swimming, but I hate getting up early. Before going to the pool, I drink a coffee.", tip: "\"Piscina\": sc before i is sh, pi-SCI-na.", explanation: "Three English -ing forms, all infinitives in Italian." },
    ],
  },
  {
    slug: "b1-drill-gerund-forms",
    level: "IT-B1",
    number: 5,
    title: "Drill: Gerund Forms and Uses",
    summary: "High-repetition production of gerunds for manner, means, time, cause and condition, with pronouns attached.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "-ando, -endo, + pronouns",
        body: [
          "\"-ando\" for -are verbs, \"-endo\" for the rest; \"facendo\", \"dicendo\", \"bevendo\", \"traducendo\". Pronouns attach: \"vedendolo\", \"parlandogli\", \"pensandoci\". Past gerund: \"avendo\" / \"essendo\" + participle. Same subject as the main verb.",
        ],
        examples: [
          { es: "Parlandogli, ho capito il problema.", en: "Talking to him, I understood the problem." },
          { es: "Bevendo tanta acqua, starai meglio.", en: "If you drink lots of water, you'll feel better." },
          { es: "Essendo partiti presto, siamo arrivati per primi.", en: "Having left early, we arrived first." },
          { es: "Ha fatto i compiti ascoltando la musica.", en: "She did her homework while listening to music." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Talking to him, I understood the problem.", answer: "Parlandogli, ho capito il problema.", altAnswers: ["Parlando con lui, ho capito il problema."], explanation: "\"Gli\" attaches to the gerund." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having left early, we arrived first.", answer: "Essendo partiti presto, siamo arrivati per primi.", altAnswers: ["Essendo partite presto, siamo arrivate per prime.", "Siccome siamo partiti presto, siamo arrivati per primi."], explanation: "Past gerund with \"essere\": agreement." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using a gerund.", source: "If you drink lots of water, you'll feel better.", answer: "Bevendo tanta acqua, starai meglio.", altAnswers: ["Bevendo molta acqua, starai meglio.", "Bevendo tanta acqua, ti sentirai meglio."], explanation: "\"Bere\" → \"bevendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She did her homework while listening to music.", answer: "Ha fatto i compiti ascoltando la musica.", altAnswers: ["Ha fatto i compiti mentre ascoltava la musica."], explanation: "Same subject: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He paid the bill by card.", answer: "Ha pagato il conto con la carta.", altAnswers: ["Ha pagato il conto con la carta di credito."], explanation: "Not every by is a gerund: by card = \"con la carta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He made money by selling old books.", answer: "Ha guadagnato vendendo libri vecchi.", altAnswers: ["Ha fatto soldi vendendo libri vecchi.", "Ha guadagnato soldi vendendo libri vecchi.", "Ha guadagnato vendendo vecchi libri."], explanation: "By + -ing = gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Crossing the road, she slipped.", answer: "Attraversando la strada, è scivolata.", altAnswers: ["Mentre attraversava la strada, è scivolata."], explanation: "Time: gerund, same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not having the keys, we waited outside.", answer: "Non avendo le chiavi, abbiamo aspettato fuori.", altAnswers: ["Siccome non avevamo le chiavi, abbiamo aspettato fuori."], explanation: "Cause: \"non avendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having read the book, I don't want to see the film.", answer: "Avendo letto il libro, non voglio vedere il film.", altAnswers: ["Siccome ho letto il libro, non voglio vedere il film.", "Avendo già letto il libro, non voglio vedere il film."], explanation: "Past gerund: \"avendo letto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thinking about it, you're right. (to a friend)", answer: "Pensandoci, hai ragione.", altAnswers: ["Pensandoci bene, hai ragione.", "A pensarci, hai ragione."], explanation: "\"Pensandoci\": \"ci\" attached." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Doing] sport every day, you'll sleep better.", sentence: "___ sport ogni giorno, dormirai meglio.", answer: "Facendo", explanation: "\"Fare\" → \"facendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Telling] the truth, he lost his job.", sentence: "___ la verità, ha perso il lavoro.", answer: "Dicendo", explanation: "\"Dire\" → \"dicendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[When I saw her], I smiled.", sentence: "___, ho sorriso.", answer: "Vedendola", altAnswers: ["Quando l'ho vista"], explanation: "\"La\" attached: \"vedendola\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Translating] the text, I found a mistake.", sentence: "___ il testo, ho trovato un errore.", answer: "Traducendo", explanation: "\"Tradurre\" → \"traducendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Being] a doctor, she knows these things.", sentence: "___ medico, sa queste cose.", answer: "Essendo", explanation: "Cause: \"essendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having lost] the train, they took a taxi.", sentence: "___ il treno, hanno preso un taxi.", answer: "Avendo perso", explanation: "Past gerund with \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[By giving him] some advice, you'll help him.", sentence: "___ qualche consiglio, lo aiuterai.", answer: "Dandogli", explanation: "\"Dare\" → \"dando\" + \"gli\"." },
      { type: "word-order", prompt: "Put the words in order to say: Going out of the cinema, we met Luca.", words: ["Uscendo", "dal", "cinema,", "abbiamo", "incontrato", "Luca."], translation: "Going out of the cinema, we met Luca.", explanation: "Same subject (we)." },
      { type: "listen-choose", audio: "Avendo poco tempo, ho preso un panino al volo.", question: "Why did the speaker grab a quick sandwich?", options: ["They had little time.", "They weren't hungry.", "The bar was closed.", "They love sandwiches."], correctIndex: 0, explanation: "\"Avendo poco tempo\" = as I had little time." },
      { type: "dictation", audio: "Ha imparato a nuotare guardando gli altri.", explanation: "\"Imparare a\" + infinitive, then a gerund of means." },
      { type: "dictation", audio: "Essendo stanchi, siamo rimasti a casa.", explanation: "Cause with \"essendo\" + plural adjective." },
      { type: "speak", text: "Vedendolo così triste, gli ho offerto un caffè e, parlandogli, ho capito tutto.", prompt: "Say it in Italian: Seeing him so sad, I offered him a coffee and, talking to him, I understood everything.", tip: "Gerunds with pronouns keep the stress on -EN- / -AN-: ve-DEN-do-lo, par-LAN-do-gli.", explanation: "Two gerunds with attached pronouns." },
    ],
  },
  {
    slug: "b1-drill-ing-to-italian",
    level: "IT-B1",
    number: 6,
    title: "Drill: Translating -ing",
    summary: "High-repetition translation: decide whether each English -ing becomes a gerund, an infinitive, a noun or another tense.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Four ways to say -ing",
        body: [
          "Ask what the -ing does. How, by what means, while, because, if: gerund. Subject, object, after a preposition or a verb like \"smettere di\": infinitive. An activity name: often a noun. Happening now or then: present, imperfetto or \"stare\" + gerund.",
        ],
        examples: [
          { es: "Camminando si scoprono cose nuove.", en: "By walking you discover new things." },
          { es: "Camminare fa bene.", en: "Walking is good for you." },
          { es: "Dopo aver camminato tanto, ci siamo riposati.", en: "After walking so much, we had a rest." },
          { es: "Domani parto per Napoli.", en: "I'm leaving for Naples tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Walking is good for you.", answer: "Camminare fa bene.", altAnswers: ["Camminare fa bene alla salute.", "Il camminare fa bene."], explanation: "Subject: infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm leaving for Naples tomorrow.", answer: "Domani parto per Napoli.", altAnswers: ["Parto per Napoli domani.", "Domani partirò per Napoli."], explanation: "A future plan: present tense, not \"sto partendo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I like running in the park.", answer: "Mi piace correre nel parco.", altAnswers: ["Mi piace correre al parco."], explanation: "After \"piacere\": infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Running in the park, I met an old friend.", answer: "Correndo nel parco, ho incontrato un vecchio amico.", altAnswers: ["Mentre correvo nel parco, ho incontrato un vecchio amico.", "Correndo al parco, ho incontrato un vecchio amico."], explanation: "While: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Before going to bed, I read a little.", answer: "Prima di andare a letto, leggo un po'.", altAnswers: ["Prima di andare a dormire, leggo un po'."], explanation: "\"Prima di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She keeps calling me.", answer: "Continua a chiamarmi.", altAnswers: ["Continua a telefonarmi.", "Lei continua a chiamarmi."], explanation: "\"Continuare a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were having dinner when you called.", answer: "Stavamo cenando quando hai chiamato.", altAnswers: ["Cenavamo quando hai chiamato.", "Stavamo cenando quando hai telefonato."], explanation: "Ongoing in the past: \"stavamo\" + gerund or imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Skiing is expensive.", answer: "Lo sci è caro.", altAnswers: ["Sciare costa caro.", "Sciare è caro.", "Lo sci costa caro."], explanation: "Noun \"lo sci\" or infinitive \"sciare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He left without paying.", answer: "Se n'è andato senza pagare.", altAnswers: ["È andato via senza pagare.", "È uscito senza pagare."], explanation: "\"Senza\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By leaving now, we'll avoid the traffic.", answer: "Partendo adesso, eviteremo il traffico.", altAnswers: ["Partendo ora, eviteremo il traffico.", "Se partiamo adesso, evitiamo il traffico."], explanation: "By / if: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm tired of waiting.", answer: "Sono stanco di aspettare.", altAnswers: ["Sono stanca di aspettare."], explanation: "\"Stanco di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you doing tonight? (to a friend)", answer: "Che fai stasera?", altAnswers: ["Cosa fai stasera?", "Che cosa fai stasera?"], explanation: "A plan: simple present, not \"stai facendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's thinking of [changing] jobs.", sentence: "Pensa di ___ lavoro.", answer: "cambiare", explanation: "\"Pensare di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Being] Sicilian, he loves the sea.", sentence: "___ siciliano, ama il mare.", answer: "Essendo", explanation: "Cause: gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm used to [working] at night.", sentence: "Sono abituato a ___ di notte.", answer: "lavorare", explanation: "\"Abituato a\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's an [interesting] book.", sentence: "È un libro ___.", answer: "interessante", explanation: "-ing adjective: \"-ante\" / \"-ente\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[After finishing] work, I go to the gym.", sentence: "___ di lavorare, vado in palestra.", answer: "Dopo aver finito", altAnswers: ["Dopo avere finito", "Finito"], explanation: "\"Dopo\" + past infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The girl [sleeping] on the sofa is my sister.", sentence: "La ragazza ___ sul divano è mia sorella.", answer: "che dorme", explanation: "A relative clause for -ing describing a noun." },
      { type: "multiple-choice", question: "How do you say: thank you for helping me?", options: ["Grazie per avermi aiutato.", "Grazie per aiutandomi.", "Grazie aiutandomi.", "Grazie per aiutato."], correctIndex: 0, explanation: "\"Grazie per\" + past infinitive." },
      { type: "listen-choose", audio: "Il nuoto è lo sport più completo.", question: "What does it mean?", options: ["Swimming is the most complete sport.", "Swimming makes you complete.", "He's swimming the whole course.", "The pool is complete."], correctIndex: 0, explanation: "\"Il nuoto\" = swimming." },
      { type: "dictation", audio: "Prima di uscire, spegni la luce.", explanation: "\"Prima di\" + infinitive." },
      { type: "speak", text: "Mi piace camminare: camminando penso meglio, e dopo aver camminato dormo come un sasso.", prompt: "Say it in Italian: I like walking: by walking I think better, and after walking I sleep like a log.", tip: "\"Come un sasso\": like a stone, the Italian sleep like a log.", explanation: "Infinitive, gerund and past infinitive in one sentence." },
    ],
  },
  {
    slug: "b1-error-hunt-gerund",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: The Gerund",
    summary: "Fix mi piace nuotando, prima di uscendo, è difficile imparando, and the ambiguous ho visto Marco tornando a casa.",
    duration: "17 min",
    sections: [
      {
        heading: "Gerund where Italian wants an infinitive",
        body: [
          "Each sentence below was written by a learner and has one mistake. Most come from copying English -ing. \"Mi piace nuotando\": after \"piacere\" the activity is an infinitive, \"Mi piace nuotare\". \"Prima di uscendo\": prepositions take the infinitive, \"prima di uscire\".",
          "\"È difficile imparando l'italiano\" follows English it's hard learning Italian; Italian says \"È difficile imparare l'italiano\".",
        ],
        examples: [
          { es: "Mi piace nuotare.", en: "I like swimming." },
          { es: "Prima di uscire, chiudi il gas.", en: "Before going out, turn off the gas." },
          { es: "È difficile imparare l'italiano?", en: "Is it hard to learn Italian?" },
          { es: "Ho voglia di ballare.", en: "I feel like dancing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mi piace nuotando\". Write it correctly: I like swimming.", source: "I like swimming.", answer: "Mi piace nuotare.", altAnswers: ["Mi piace il nuoto."], explanation: "After \"piacere\": infinitive or noun." },
          { type: "fill-blank", prompt: "A learner wrote \"Prima di uscendo, chiudi il gas\". Write the Italian for the bold words.", en: "[Before going out], turn off the gas.", sentence: "___, chiudi il gas.", answer: "Prima di uscire", explanation: "\"Prima di\" + infinitive." },
        ],
      },
      {
        heading: "Whose gerund?",
        body: [
          "\"Ho visto Marco tornando a casa\" is grammatical, but it means I saw Marco while I was going home. If the learner meant Marco was going home, the gerund is wrong: \"Ho visto Marco mentre tornava a casa\" or \"Ho visto Marco che tornava a casa\".",
          "Always check: the subject of the gerund is the subject of the main verb.",
        ],
        examples: [
          { es: "Ho visto Marco mentre tornava a casa.", en: "I saw Marco as he was going home." },
          { es: "Ho visto Marco che tornava a casa.", en: "I saw Marco going home." },
          { es: "Tornando a casa, ho visto Marco.", en: "On my way home, I saw Marco." },
          { es: "L'ho sentita cantare.", en: "I heard her singing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho visto Marco tornando a casa\" meaning Marco was going home. Write it correctly: I saw Marco as he was going home.", source: "I saw Marco as he was going home.", answer: "Ho visto Marco mentre tornava a casa.", altAnswers: ["Ho visto Marco che tornava a casa."], explanation: "Different subjects: \"mentre\" + imperfetto, or \"che\"." },
          { type: "multiple-choice", question: "Which sentence means I heard her singing?", options: ["L'ho sentita cantare.", "L'ho sentita cantando.", "Cantando, l'ho sentita.", "L'ho sentita a cantando."], correctIndex: 0, explanation: "After verbs of perception (\"sentire\", \"vedere\"): infinitive." },
        ],
      },
      {
        heading: "Small slips",
        body: [
          "Two more: \"per imparando\" (by learning) adds a preposition the gerund doesn't take: just \"imparando\". And \"facciando\" or \"diendo\" invent forms: the old stems give \"facendo\", \"dicendo\".",
        ],
        examples: [
          { es: "Ho trovato lavoro facendo un tirocinio.", en: "I found a job by doing an internship." },
          { es: "Dicendo così, l'hai offeso.", en: "By saying that, you offended him." },
          { es: "Ho migliorato la pronuncia imitando gli attori.", en: "I improved my pronunciation by imitating actors." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho trovato lavoro per facciando un tirocinio\". Write it correctly: I found a job by doing an internship.", source: "I found a job by doing an internship.", answer: "Ho trovato lavoro facendo un tirocinio.", altAnswers: ["Ho trovato un lavoro facendo un tirocinio.", "Ho trovato lavoro facendo uno stage."], explanation: "No preposition, and \"facendo\" from the old stem." },
          { type: "listen-choose", audio: "Dicendo così, l'hai offeso.", question: "What did you hear?", options: ["Dicendo così, l'hai offeso.", "Diendo così, l'hai offeso.", "Per dicendo così, l'hai offeso.", "Dire così, l'hai offeso."], correctIndex: 0, explanation: "\"Dicendo\": from \"dic-\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"È difficile imparando l'italiano\". Write it correctly: It's hard to learn Italian.", source: "It's hard to learn Italian.", answer: "È difficile imparare l'italiano.", altAnswers: ["Imparare l'italiano è difficile."], explanation: "Impersonal \"è difficile\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho smesso di fumando\". Write it correctly: I've stopped smoking.", source: "I've stopped smoking.", answer: "Ho smesso di fumare.", explanation: "\"Smettere di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Grazie per aiutandomi\". Write it correctly: Thanks for helping me.", source: "Thanks for helping me.", answer: "Grazie per avermi aiutato.", altAnswers: ["Grazie di avermi aiutato.", "Grazie per avermi aiutata.", "Grazie di avermi aiutata.", "Grazie per l'aiuto."], explanation: "\"Grazie per\" + past infinitive." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho visto Anna uscendo dal negozio\" meaning Anna was coming out. Write it correctly: I saw Anna coming out of the shop.", source: "I saw Anna coming out of the shop.", answer: "Ho visto Anna che usciva dal negozio.", altAnswers: ["Ho visto Anna mentre usciva dal negozio.", "Ho visto Anna uscire dal negozio."], explanation: "Different subjects: \"che usciva\", \"mentre usciva\" or the infinitive after \"vedere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Senza dicendo niente, è uscito\". Write it correctly: Without saying anything, he went out.", source: "Without saying anything, he went out.", answer: "Senza dire niente, è uscito.", altAnswers: ["Senza dire nulla, è uscito.", "È uscito senza dire niente."], explanation: "\"Senza\" + infinitive." },
      { type: "fill-blank", prompt: "A learner wrote \"Ho voglia di ballando\". Write the Italian for the bold words.", en: "I feel like [dancing].", sentence: "Ho voglia di ___.", answer: "ballare", explanation: "\"Avere voglia di\" + infinitive." },
      { type: "fill-blank", prompt: "A learner wrote \"Ho migliorato la pronuncia per imitando gli attori\". Write the Italian for the bold words.", en: "I improved my pronunciation [by imitating] actors.", sentence: "Ho migliorato la pronuncia ___ gli attori.", answer: "imitando", explanation: "By + -ing: gerund alone." },
      { type: "word-order", prompt: "Put the words in order to say: Reading helps you think.", words: ["Leggere", "aiuta", "a", "pensare."], translation: "Reading helps you think.", explanation: "Subject: infinitive." },
      { type: "multiple-choice", question: "Which sentence has no mistake?", options: ["Facendo attenzione, non sbaglierai.", "Facciando attenzione, non sbaglierai.", "Per facendo attenzione, non sbaglierai.", "Fare attenzione, non sbaglierai."], correctIndex: 0, explanation: "\"Facendo\", no preposition, used for condition." },
      { type: "dictation", audio: "Ho visto Marco mentre tornava a casa.", explanation: "\"Mentre\" for a different subject." },
      { type: "speak", text: "Mi piace imparare le lingue, ma è difficile ricordare tutto senza ripassare.", prompt: "Say it in Italian: I like learning languages, but it's hard to remember everything without revising.", tip: "\"Ripassare\" = to revise: double s, ri-pas-SA-re.", explanation: "Three infinitives where English has -ing or to." },
    ],
  },
  {
    slug: "b1-dialogue-lab-language-tips",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: How Did You Learn?",
    summary: "At a language exchange in Turin, learners swap tips with the gerund: ho imparato parlando con i vicini, leggendo fumetti, sbagliando.",
    duration: "17 min",
    sections: [
      {
        heading: "Swapping tips",
        body: [
          "A language-exchange evening at a café in Turin. Hannah, from Manchester, speaks excellent Italian. Tom, who has just arrived in Turin, asks her how she did it. Her answers are full of gerunds of means.",
        ],
        examples: [
          { es: "Ma come hai fatto a imparare così bene?", en: "But how did you manage to learn so well?" },
          { es: "Parlando con i vicini, soprattutto.", en: "By talking to my neighbours, mainly." },
          { es: "E leggendo fumetti: Topolino, Dylan Dog...", en: "And by reading comics: Topolino, Dylan Dog..." },
          { es: "All'inizio sbagliavo tutto, ma si impara sbagliando.", en: "At first I got everything wrong, but you learn by making mistakes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By talking to my neighbours, mainly.", answer: "Parlando con i vicini, soprattutto.", altAnswers: ["Soprattutto parlando con i vicini.", "Parlando con i miei vicini, soprattutto."], explanation: "The answer to \"come?\": a gerund." },
          { type: "listen-choose", audio: "E leggendo fumetti.", question: "What else helped Hannah?", options: ["Reading comics", "Watching TV", "Taking classes", "Writing letters"], correctIndex: 0, explanation: "\"I fumetti\" = comics." },
        ],
      },
      {
        heading: "Tom's problem",
        body: [
          "Tom has the opposite problem: \"Studio tanto, ma quando parlo mi blocco\" (I study a lot, but when I speak I freeze). Hannah's advice uses gerunds of condition: \"Parlando ogni giorno, anche solo cinque minuti, ti sbloccherai\".",
        ],
        examples: [
          { es: "Studio tanto, ma quando parlo mi blocco.", en: "I study a lot, but when I speak I freeze." },
          { es: "Parlando ogni giorno, ti sbloccherai.", en: "If you speak every day, you'll loosen up." },
          { es: "Anche solo cinque minuti, ordinando al bar.", en: "Even just five minutes, ordering at the bar." },
          { es: "E non aver paura di sbagliare.", en: "And don't be afraid of making mistakes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you speak every day, you'll loosen up. (to a friend)", answer: "Parlando ogni giorno, ti sbloccherai.", altAnswers: ["Se parli ogni giorno, ti sbloccherai.", "Parlando tutti i giorni, ti sbloccherai."], explanation: "Gerund of condition." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "And don't be afraid of [making mistakes].", sentence: "E non aver paura di ___.", answer: "sbagliare", explanation: "\"Avere paura di\" + infinitive." },
        ],
      },
      {
        heading: "One more tip",
        body: [
          "Kenji joins in: he improved his pronunciation \"cantando le canzoni di Sanremo sotto la doccia\" (singing Sanremo songs in the shower). Everyone laughs. Tom decides: \"Allora, da domani: parlando, leggendo e cantando!\"",
        ],
        examples: [
          { es: "Io ho migliorato la pronuncia cantando sotto la doccia.", en: "I improved my pronunciation by singing in the shower." },
          { es: "I miei vicini non sono molto contenti!", en: "My neighbours aren't very happy!" },
          { es: "Allora, da domani: parlando, leggendo e cantando!", en: "Right, from tomorrow: talking, reading and singing!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I improved my pronunciation by singing in the shower.", answer: "Ho migliorato la pronuncia cantando sotto la doccia.", altAnswers: ["Ho migliorato la mia pronuncia cantando sotto la doccia.", "Io ho migliorato la pronuncia cantando sotto la doccia."], explanation: "By singing = \"cantando\"." },
          { type: "multiple-choice", question: "Why aren't Kenji's neighbours happy?", options: ["He sings in the shower.", "He talks too loudly.", "He reads comics at night.", "He never says hello."], correctIndex: 0, explanation: "A joke about \"cantando sotto la doccia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How did you manage to learn so well? (to a friend)", answer: "Come hai fatto a imparare così bene?", altAnswers: ["Come hai fatto a imparare così bene l'italiano?"], explanation: "\"Come hai fatto a\" + infinitive = how did you manage to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You learn by making mistakes.", answer: "Si impara sbagliando.", explanation: "A saying with the gerund of means." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I study a lot, but when I speak I freeze.", answer: "Studio tanto, ma quando parlo mi blocco.", altAnswers: ["Studio molto, ma quando parlo mi blocco."], explanation: "\"Bloccarsi\" = to freeze, get stuck." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I learned a lot of words by reading comics.", answer: "Ho imparato tante parole leggendo fumetti.", altAnswers: ["Ho imparato molte parole leggendo fumetti.", "Ho imparato tante parole leggendo i fumetti."], explanation: "Means: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't be afraid of making mistakes. (to a friend)", answer: "Non aver paura di sbagliare.", altAnswers: ["Non avere paura di sbagliare."], explanation: "Negative \"tu\" command + \"di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Even just five minutes, [ordering] at the bar.", sentence: "Anche solo cinque minuti, ___ al bar.", answer: "ordinando", explanation: "\"Ordinare\" → \"ordinando\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I learned the past tenses [by writing] a diary.", sentence: "Ho imparato i tempi passati ___ un diario.", answer: "scrivendo", explanation: "Means: gerund." },
      { type: "word-order", prompt: "Put the words in order to say: From tomorrow: talking, reading and singing!", words: ["Da", "domani:", "parlando,", "leggendo", "e", "cantando!"], translation: "From tomorrow: talking, reading and singing!", explanation: "Three gerunds of means." },
      { type: "multiple-choice", question: "Tom asks \"Come hai imparato?\". Which answer fits?", options: ["Guardando serie TV in italiano.", "Guardare serie TV in italiano.", "Per guardando serie TV.", "Ho guardato di serie TV."], correctIndex: 0, explanation: "The gerund answers how." },
      { type: "dictation", audio: "Parlando ogni giorno, ti sbloccherai.", explanation: "Gerund of condition + future." },
      { type: "speak", text: "Ho imparato l'italiano parlando con i vicini e leggendo fumetti. Si impara sbagliando!", prompt: "Tell Tom: I learned Italian by talking to my neighbours and reading comics. You learn by making mistakes!", tip: "\"Fumetti\": double t, fu-MET-ti.", explanation: "Gerunds of means." },
    ],
  },
  {
    slug: "b1-reading-lab-habits",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: Habits of Successful People",
    summary: "Read a light magazine article about good daily habits and spot every gerund: manner, means, time and condition.",
    duration: "18 min",
    sections: [
      {
        heading: "The morning",
        body: [
          "This is an original article in the style of an Italian lifestyle magazine. Read each line and notice how the writer uses gerunds to pack advice into short sentences.",
        ],
        examples: [
          { es: "Le persone di successo cominciano la giornata con calma, alzandosi un po' prima degli altri.", en: "Successful people start the day calmly, getting up a little earlier than everyone else." },
          { es: "Molti dicono di risparmiare tempo preparando i vestiti la sera prima.", en: "Many say they save time by getting their clothes ready the night before." },
          { es: "Bevendo un bicchiere d'acqua appena svegli, si sentono subito più attivi.", en: "By drinking a glass of water as soon as they wake up, they immediately feel more alert." },
          { es: "Invece di guardare il telefono, leggono qualche pagina di un libro.", en: "Instead of looking at their phone, they read a few pages of a book." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They save time by getting their clothes ready the night before.", answer: "Risparmiano tempo preparando i vestiti la sera prima.", altAnswers: ["Risparmiano tempo preparando i vestiti la sera precedente."], explanation: "Means: \"preparando\"." },
          { type: "multiple-choice", question: "Why is \"invece di guardare\" not a gerund?", options: ["After a preposition Italian uses the infinitive.", "Because it's a habit.", "Because the subject changes.", "Because \"guardare\" has no gerund."], correctIndex: 0, explanation: "\"Invece di\" + infinitive." },
        ],
      },
      {
        heading: "At work",
        body: [
          "The second part moves to the office. Look for the gerunds of time and of condition.",
        ],
        examples: [
          { es: "Lavorando su una cosa alla volta, si concentrano meglio.", en: "By working on one thing at a time, they concentrate better." },
          { es: "Facendo brevi pause ogni ora, evitano la stanchezza.", en: "By taking short breaks every hour, they avoid getting tired." },
          { es: "Rispondendo alle email solo due volte al giorno, guadagnano ore preziose.", en: "By answering emails only twice a day, they gain precious hours." },
          { es: "Tornando a casa, molti camminano invece di prendere l'autobus.", en: "On the way home, many walk instead of taking the bus." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By taking short breaks every hour, they avoid getting tired.", answer: "Facendo brevi pause ogni ora, evitano la stanchezza.", altAnswers: ["Facendo pause brevi ogni ora, evitano la stanchezza.", "Facendo brevi pause ogni ora, evitano di stancarsi."], explanation: "\"Fare una pausa\" = to take a break; \"facendo\"." },
          { type: "listen-choose", audio: "Rispondendo alle email solo due volte al giorno, guadagnano ore preziose.", question: "How often do they answer emails?", options: ["Twice a day", "Every hour", "Once a week", "Only in the morning"], correctIndex: 0, explanation: "\"Due volte al giorno\" = twice a day." },
        ],
      },
      {
        heading: "The evening",
        body: [
          "The article ends with a gentle warning, and one last gerund in a fixed phrase: \"tutto sommato\" is not a gerund, but \"volendo\" is.",
        ],
        examples: [
          { es: "La sera spengono gli schermi un'ora prima di dormire.", en: "In the evening they switch off screens an hour before going to sleep." },
          { es: "Scrivendo tre cose positive della giornata, dormono più sereni.", en: "By writing down three good things about the day, they sleep more peacefully." },
          { es: "Volendo, chiunque può farlo: basta cominciare.", en: "Anyone can do it, if they want to: you just have to start." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anyone can do it, if they want to: you just have to start.", answer: "Volendo, chiunque può farlo: basta cominciare.", altAnswers: ["Volendo, chiunque può farlo: basta iniziare.", "Chiunque può farlo, volendo: basta cominciare."], explanation: "\"Volendo\" = if you want; \"basta\" + infinitive = you just have to." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They switch off screens an hour [before going to sleep].", sentence: "Spengono gli schermi un'ora ___.", answer: "prima di dormire", altAnswers: ["prima di andare a dormire", "prima di andare a letto"], explanation: "\"Prima di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They start the day by getting up a little earlier.", answer: "Cominciano la giornata alzandosi un po' prima.", altAnswers: ["Iniziano la giornata alzandosi un po' prima.", "Cominciano la giornata alzandosi un po' più presto."], explanation: "Reflexive gerund: \"alzandosi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By working on one thing at a time, they concentrate better.", answer: "Lavorando su una cosa alla volta, si concentrano meglio.", altAnswers: ["Lavorando a una cosa alla volta, si concentrano meglio.", "Lavorando su una cosa per volta, si concentrano meglio."], explanation: "Means: \"lavorando\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Instead of looking at their phone, they read.", answer: "Invece di guardare il telefono, leggono.", altAnswers: ["Invece di guardare il cellulare, leggono."], explanation: "\"Invece di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the way home, many people walk.", answer: "Tornando a casa, molti camminano.", altAnswers: ["Tornando a casa, molte persone camminano.", "Tornando a casa, molti vanno a piedi."], explanation: "Time: gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[By writing down] three good things, they sleep more peacefully.", sentence: "___ tre cose positive, dormono più sereni.", answer: "Scrivendo", explanation: "Means: gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[By drinking] a glass of water, they feel more alert.", sentence: "___ un bicchiere d'acqua, si sentono più attivi.", answer: "Bevendo", explanation: "\"Bere\" → \"bevendo\"." },
      { type: "word-order", prompt: "Put the words in order to say: You just have to start.", words: ["Basta", "cominciare."], translation: "You just have to start.", explanation: "\"Basta\" + infinitive." },
      { type: "multiple-choice", question: "According to the article, what helps people concentrate?", options: ["Working on one thing at a time", "Drinking coffee", "Answering emails at once", "Working late"], correctIndex: 0, explanation: "\"Lavorando su una cosa alla volta\"." },
      { type: "multi-select", question: "Which words from the article are gerunds? Choose all that apply.", options: ["alzandosi", "guardare", "facendo", "volendo", "dormire"], correctIndexes: [0, 2, 3], explanation: "\"Guardare\" and \"dormire\" are infinitives after prepositions." },
      { type: "dictation", audio: "Facendo brevi pause, evitano la stanchezza.", explanation: "\"Facendo\": the gerund of \"fare\"." },
      { type: "speak", text: "Alzandomi presto e camminando invece di prendere l'autobus, mi sento molto meglio.", prompt: "Say it in Italian: By getting up early and walking instead of taking the bus, I feel much better.", tip: "\"Alzandomi\": stress on DAN, al-ZAN-do-mi.", explanation: "Two gerunds of means and one infinitive after \"invece di\"." },
    ],
  },
  {
    slug: "b1-mission-advice-post",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Forum Post",
    summary: "Write advice on an Italian learners' forum about how to learn a language, using gerunds for means and condition.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The question",
        body: [
          "Your mission: on an Italian forum, a user called Marta_88 asks for advice: \"Voglio imparare l'inglese, ma non ho tempo. Come avete fatto voi?\" (I want to learn English but have no time. How did you do it?). Answer with your own experience, using gerunds of means: \"Io ho imparato ascoltando podcast in macchina\".",
          "Forum style is friendly: \"tu\", \"ciao\", short paragraphs.",
        ],
        examples: [
          { es: "Ciao Marta! Io ho imparato ascoltando podcast in macchina.", en: "Hi Marta! I learned by listening to podcasts in the car." },
          { es: "Ho guadagnato tempo studiando in metro.", en: "I gained time by studying on the underground." },
          { es: "Ho imparato tanto cambiando la lingua del telefono.", en: "I learned a lot by changing my phone's language." },
          { es: "Leggendo un articolo al giorno, ho allargato il vocabolario.", en: "By reading one article a day, I broadened my vocabulary." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I learned by listening to podcasts in the car.", answer: "Ho imparato ascoltando podcast in macchina.", altAnswers: ["Ho imparato ascoltando dei podcast in macchina.", "Io ho imparato ascoltando podcast in macchina.", "Ho imparato ascoltando i podcast in macchina."], explanation: "Means: gerund." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I learned a lot [by changing] my phone's language.", sentence: "Ho imparato tanto ___ la lingua del telefono.", answer: "cambiando", explanation: "\"Cambiare\" → \"cambiando\"." },
        ],
      },
      {
        heading: "Your advice",
        body: [
          "Now give advice with gerunds of condition and infinitives: \"Studiando dieci minuti al giorno, vedrai dei progressi\", \"Prova a pensare in inglese mentre cucini\". Remember the infinitive after prepositions and verbs like \"provare a\", \"smettere di\".",
        ],
        examples: [
          { es: "Studiando dieci minuti al giorno, vedrai dei progressi.", en: "If you study ten minutes a day, you'll see progress." },
          { es: "Prova a pensare in inglese mentre cucini.", en: "Try thinking in English while you cook." },
          { es: "Smetti di tradurre tutto parola per parola.", en: "Stop translating everything word for word." },
          { es: "Prima di dormire, ripassa cinque parole nuove.", en: "Before going to sleep, revise five new words." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Stop translating everything word for word. (to a friend)", answer: "Smetti di tradurre tutto parola per parola.", explanation: "\"Smettere di\" + infinitive." },
          { type: "listen-choose", audio: "Prova a pensare in inglese mentre cucini.", question: "What's the advice?", options: ["Think in English while cooking.", "Cook English food.", "Stop cooking and study.", "Watch cooking shows in English."], correctIndex: 0, explanation: "\"Provare a\" + infinitive; \"mentre cucini\" = while you cook." },
        ],
      },
      {
        heading: "Signing off",
        body: [
          "Close with encouragement: \"Sbagliando s'impara!\" (you learn from your mistakes) and \"In bocca al lupo!\" (good luck; the answer is \"Crepi!\").",
        ],
        examples: [
          { es: "Sbagliando s'impara, quindi non ti scoraggiare!", en: "You learn from your mistakes, so don't get discouraged!" },
          { es: "In bocca al lupo!", en: "Good luck!" },
          { es: "Fammi sapere come va.", en: "Let me know how it goes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me know how it goes. (to a friend)", answer: "Fammi sapere come va.", altAnswers: ["Fammi sapere come andrà."], explanation: "\"Fammi sapere\" = let me know." },
          { type: "multiple-choice", question: "Someone writes \"In bocca al lupo!\". What do you answer?", options: ["Crepi!", "Grazie lupo!", "Anche a te bocca!", "Sbagliando!"], correctIndex: 0, explanation: "The traditional answer is \"Crepi!\" (or \"Crepi il lupo!\")." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I gained time by studying on the underground.", answer: "Ho guadagnato tempo studiando in metro.", altAnswers: ["Ho guadagnato tempo studiando in metropolitana.", "Ho guadagnato tempo studiando sulla metro."], explanation: "Means: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you study ten minutes a day, you'll see progress. (to a friend)", answer: "Studiando dieci minuti al giorno, vedrai dei progressi.", altAnswers: ["Se studi dieci minuti al giorno, vedrai dei progressi.", "Studiando dieci minuti al giorno, farai progressi."], explanation: "Condition: gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Before going to sleep, revise five new words. (to a friend)", answer: "Prima di dormire, ripassa cinque parole nuove.", altAnswers: ["Prima di andare a dormire, ripassa cinque parole nuove."], explanation: "\"Prima di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't get discouraged! (to a friend)", answer: "Non ti scoraggiare!", altAnswers: ["Non scoraggiarti!"], explanation: "Negative \"tu\" command of \"scoraggiarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By reading one article a day, I broadened my vocabulary.", answer: "Leggendo un articolo al giorno, ho allargato il vocabolario.", altAnswers: ["Leggendo un articolo al giorno, ho arricchito il vocabolario.", "Leggendo un articolo al giorno, ho allargato il mio vocabolario."], explanation: "Means: gerund." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Try [thinking] in English. (to a friend)", sentence: "Prova a ___ in inglese.", answer: "pensare", explanation: "\"Provare a\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I improved [by watching] series with subtitles.", sentence: "Sono migliorato ___ serie con i sottotitoli.", answer: "guardando", explanation: "Means: gerund." },
      { type: "word-order", prompt: "Put the words in order to say: You learn from your mistakes.", words: ["Sbagliando", "s'impara."], translation: "You learn from your mistakes.", explanation: "A proverb with the gerund." },
      { type: "multiple-choice", question: "Which sentence fits a friendly forum reply?", options: ["Ciao! Io ho imparato parlando con colleghi stranieri.", "Gentile utente, Le comunico quanto segue.", "Distinti saluti, la direzione.", "In allegato trova il modulo."], correctIndex: 0, explanation: "Forums use \"tu\" and a friendly tone." },
      { type: "dictation", audio: "Sbagliando s'impara, quindi non ti scoraggiare!", explanation: "\"S'impara\" = si impara." },
      { type: "speak", text: "Ciao Marta! Io ho imparato ascoltando podcast in macchina. Studiando dieci minuti al giorno, vedrai dei progressi. In bocca al lupo!", prompt: "Record your forum reply: Hi Marta! I learned by listening to podcasts in the car. If you study ten minutes a day, you'll see progress. Good luck!", tip: "\"In bocca al lupo\": link the words, in-BOC-ca-al-LU-po.", explanation: "Gerunds of means and condition." },
    ],
  },
  {
    slug: "b1-spiral-units-12-17",
    level: "IT-B1",
    number: 11,
    title: "Spiral Review: Units 12-17",
    summary: "Mixed practice of the past subjunctive, past conditional, future perfect, real if sentences, the passato remoto and the gerund.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "What happened, what would have happened",
        body: [
          "Fresh sentences mixing six units. A colleague, Davide, didn't come to the office party. Comment with the past subjunctive (\"Penso che sia rimasto a casa\"), guess with the future perfect (\"Avrà avuto da fare\"), and regret with the past conditional (\"Sarebbe stato bello vederlo\").",
        ],
        examples: [
          { es: "Penso che Davide sia rimasto a casa.", en: "I think Davide stayed at home." },
          { es: "Avrà avuto da fare.", en: "He must have been busy." },
          { es: "Mi aveva detto che sarebbe venuto.", en: "He'd told me he would come." },
          { es: "Sarebbe stato bello vederlo.", en: "It would have been nice to see him." },
          { es: "Mi dispiace che non sia venuto.", en: "I'm sorry he didn't come." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He'd told me he would come.", answer: "Mi aveva detto che sarebbe venuto.", altAnswers: ["Mi ha detto che sarebbe venuto."], explanation: "Future in the past: past conditional (Unit 13)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry he didn't come.", answer: "Mi dispiace che non sia venuto.", altAnswers: ["Mi dispiace che lui non sia venuto."], explanation: "Feeling + past subjunctive (Unit 12)." },
          { type: "multiple-choice", question: "Which sentence is a guess about the past?", options: ["Avrà avuto da fare.", "Avrebbe avuto da fare.", "Abbia avuto da fare.", "Avrà da fare."], correctIndex: 0, explanation: "Future perfect of probability (Unit 14)." },
        ],
      },
      {
        heading: "Plans, stories and how",
        body: [
          "Now plans and stories: real if sentences (\"Se vieni, ti presento Davide\"), sequences (\"Quando avrò finito, ti chiamerò\"), a remote past from a book (\"Il re partì\") and gerunds (\"Ho imparato leggendo\").",
        ],
        examples: [
          { es: "Se domani piove, restiamo a casa.", en: "If it rains tomorrow, we'll stay at home." },
          { es: "Quando avrò finito, ti chiamerò.", en: "When I've finished, I'll call you." },
          { es: "Il principe partì e non tornò più.", en: "The prince left and never came back." },
          { es: "Ho imparato a cucinare guardando mia madre.", en: "I learned to cook by watching my mother." },
          { es: "Essendo stanca, è andata a letto presto.", en: "Being tired, she went to bed early." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I've finished, I'll call you. (to a friend)", answer: "Quando avrò finito, ti chiamerò.", altAnswers: ["Quando ho finito, ti chiamo.", "Ti chiamerò quando avrò finito."], explanation: "Future perfect + future (Unit 14)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The prince left and never came back.", answer: "Il principe partì e non tornò più.", altAnswers: ["Il principe è partito e non è più tornato.", "Il principe partì e non tornò mai più."], explanation: "Remote past (Unit 16)." },
          { type: "listen-choose", audio: "Ho imparato a cucinare guardando mia madre.", question: "How did the speaker learn to cook?", options: ["By watching their mother", "At a cooking school", "From a book", "By watching TV"], correctIndex: 0, explanation: "Gerund of means (Unit 17)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Davide stayed at home.", answer: "Penso che Davide sia rimasto a casa.", altAnswers: ["Credo che Davide sia rimasto a casa.", "Penso che Davide sia restato a casa."], explanation: "Opinion + past subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should have told me. (to a friend)", answer: "Avresti dovuto dirmelo.", altAnswers: ["Me l'avresti dovuto dire.", "Me lo avresti dovuto dire.", "Dovevi dirmelo."], explanation: "Past conditional of \"dovere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By Friday we'll have finished.", answer: "Entro venerdì avremo finito.", altAnswers: ["Per venerdì avremo finito.", "Avremo finito entro venerdì."], explanation: "Future perfect, single m." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you need anything, call me. (to a friend)", answer: "Se hai bisogno, chiamami.", altAnswers: ["Se hai bisogno di qualcosa, chiamami.", "Chiamami se hai bisogno."], explanation: "Real condition + command." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I learned Italian by watching films.", answer: "Ho imparato l'italiano guardando film.", altAnswers: ["Ho imparato l'italiano guardando i film.", "Ho imparato italiano guardando film."], explanation: "Gerund of means." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a history book would. (The everyday past is accepted too.)", en: "Dante [was born] in Florence in 1265.", sentence: "Dante ___ a Firenze nel 1265.", answer: "nacque", altAnswers: ["è nato"], explanation: "Remote past of \"nascere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I would have come, but [I was] ill. (a man speaking)", sentence: "Sarei venuto, ma ___ malato.", answer: "ero", explanation: "Background reason: imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's possible that [they missed] the train.", sentence: "È possibile che ___ il treno.", answer: "abbiano perso", explanation: "Impersonal phrase + past subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: If it rains, we'll go to the museum.", words: ["Se", "pioverà,", "andremo", "al", "museo."], translation: "If it rains, we'll go to the museum.", explanation: "Future in both clauses." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Mi piace leggere prima di dormire.", "Mi piace leggendo prima di dormire.", "Mi piace leggere prima di dormendo.", "Mi piace leggendo prima di dormendo."], correctIndex: 0, explanation: "Infinitive after \"piacere\" and after \"prima di\"." },
      { type: "dictation", audio: "Pensavo che avresti capito.", explanation: "Future in the past: \"avresti capito\"." },
      { type: "speak", text: "Davide non è venuto: avrà avuto da fare. Mi aveva detto che sarebbe venuto, e sarebbe stato bello vederlo.", prompt: "Say it in Italian: Davide didn't come: he must have been busy. He'd told me he'd come, and it would have been nice to see him.", tip: "Three tenses ending in -ebbe / -à: keep each one clear.", explanation: "Future perfect, future in the past and past conditional." },
    ],
  },
];

export const IT_B1_U17_WRITING: WriteExercise = {
  type: "write",
  prompt: "An Italian magazine asks readers: \"Come avete imparato una cosa difficile?\" Write a short piece about something you learned (a language, an instrument, a sport, cooking): say how you learned it, what helped you while doing it, and give advice to someone who wants to start.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses the gerund for means (ho imparato guardando ...) and for time or cause (essendo / avendo ...)",
    "Gives advice with a gerund of condition (studiando ogni giorno, ...) with the same subject in both clauses",
    "Uses the infinitive, not the gerund, after piacere, prepositions and verbs like smettere di / provare a",
    "Forms gerunds correctly, including facendo, dicendo, bevendo",
  ],
  modelAnswer: "Tre anni fa ho deciso di imparare a suonare la chitarra. Non avendo soldi per un insegnante, ho imparato guardando video su internet e suonando con un amico ogni sabato. All'inizio mi facevano male le dita e volevo smettere di suonare, ma, essendo testardo, ho continuato. Mi piace soprattutto suonare canzoni italiane degli anni Sessanta. Il mio consiglio? Suonando venti minuti al giorno, farete più progressi che suonando tre ore la domenica. Prima di cominciare, scegliete una canzone che amate: imparandola, imparerete anche gli accordi più importanti. E non abbiate paura di sbagliare: sbagliando s'impara!",
  explanation: "\"Guardando\", \"suonando\" and \"imparandola\" are gerunds of means; \"non avendo soldi\" and \"essendo testardo\" give reasons. \"Suonando venti minuti al giorno, farete\" is a gerund of condition with the same subject. After \"decidere di\", \"smettere di\", \"piacere\", \"prima di\" and \"paura di\" the verb is an infinitive.",
};
