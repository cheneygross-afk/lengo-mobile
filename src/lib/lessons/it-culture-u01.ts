// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u01.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 1: Regions and Cities. The twenty
// regions and their capoluoghi, the five special-status regions, North,
// Centre, South and islands, campanilismo, the borghi, and how Italians
// place each other by region and town. Written at Intermediate level
// (present, passato prossimo, si impersonale), B2 words glossed.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U01: Lesson[] = [
  {
    slug: "culture-twenty-regions",
    level: "IT-Culture",
    number: 1,
    title: "Twenty Regions",
    summary: "Learn how Italy is divided into twenty regions, which five have special status, and how to name each region's capoluogo.",
    duration: "15 min",
    sections: [
      {
        heading: "Venti regioni",
        body: [
          "Italy is divided into twenty \"regioni\". Each region is split into provinces and then into \"comuni\", the municipalities: there are almost 8,000 of them, from Rome to mountain villages of a few dozen people. Regions run healthcare, regional trains and tourism, so a hospital visit or a train ticket can work differently when you cross a regional border.",
          "Most region names take a plain \"in\": \"in Toscana\", \"in Sicilia\", \"in Lombardia\". A few carry their article with them: \"il Lazio\" gives \"nel Lazio\", and \"le Marche\", which is plural, gives \"nelle Marche\". With some masculine regions you hear both: \"in Piemonte\" and \"nel Piemonte\", \"in Veneto\" and \"nel Veneto\".",
        ],
        examples: [
          { es: "L'Italia ha venti regioni.", en: "Italy has twenty regions." },
          { es: "Abito in Toscana, vicino a Siena.", en: "I live in Tuscany, near Siena." },
          { es: "Mia sorella lavora nel Lazio.", en: "My sister works in Lazio." },
          { es: "Quest'estate andiamo in vacanza nelle Marche.", en: "This summer we're going on vacation to the Marche." },
          { es: "In Italia ci sono quasi ottomila comuni.", en: "There are almost eight thousand municipalities in Italy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I live in Tuscany.", answer: "Abito in Toscana.", altAnswers: ["Io abito in Toscana.", "Vivo in Toscana.", "Io vivo in Toscana."], explanation: "Most regions take a plain \"in\": \"in Toscana\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We're going on vacation [to the Marche].", sentence: "Andiamo in vacanza ___.", answer: "nelle Marche", explanation: "\"Le Marche\" is plural and keeps its article: \"in\" + \"le\" = \"nelle\"." },
          { type: "multiple-choice", question: "Your friend works in the region around Rome. Which is the most natural way to say it?", options: ["Lavora nel Lazio.", "Lavora nella Lazio.", "Lavora al Lazio.", "Lavora di Lazio."], correctIndex: 0, explanation: "\"Il Lazio\" is masculine and keeps its article: \"nel Lazio\". You will also hear \"in Lazio\"." },
        ],
      },
      {
        heading: "Five regions with special status",
        body: [
          "Five regions have a \"statuto speciale\", a special charter that gives them more autonomy and lets them keep more of the taxes raised there: \"Valle d'Aosta\", \"Trentino-Alto Adige\", \"Friuli-Venezia Giulia\", \"Sicilia\" and \"Sardegna\". The other fifteen have a \"statuto ordinario\", the ordinary charter.",
          "The reasons are history and language. The two big islands are far from Rome and had strong autonomy movements after the Second World War. The three northern border regions have language minorities: French in the Aosta Valley, German in Alto Adige (South Tyrol), Slovene and Friulian in Friuli-Venezia Giulia. Trentino-Alto Adige is split again into two autonomous provinces, \"Trento\" and \"Bolzano\", and street signs in Bolzano are in Italian and German.",
        ],
        examples: [
          { es: "La Sardegna è una regione a statuto speciale.", en: "Sardinia is a region with special status." },
          { es: "In Alto Adige molte persone parlano tedesco.", en: "In South Tyrol many people speak German." },
          { es: "In Valle d'Aosta si parla anche francese.", en: "French is spoken in the Aosta Valley too." },
          { es: "Le regioni a statuto speciale sono cinque.", en: "There are five regions with special status." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sicily is a region with special status.", answer: "La Sicilia è una regione a statuto speciale.", explanation: "Region names take the article as subjects: \"la Sicilia\". \"A statuto speciale\" = with special status." },
          { type: "listen-choose", audio: "In Alto Adige molte persone parlano tedesco.", question: "What does it mean?", options: ["In South Tyrol many people speak German.", "In South Tyrol nobody speaks German.", "In the Aosta Valley many people speak French.", "Many Germans go on vacation to South Tyrol."], correctIndex: 0, explanation: "\"Molte persone parlano tedesco\" = many people speak German." },
        ],
      },
      {
        heading: "Il capoluogo",
        body: [
          "Each region has a \"capoluogo\", its main city and seat of government; provinces have one too. Only Rome is a \"capitale\". Calling Florence the capital of Tuscany sounds odd in Italian: say \"Firenze è il capoluogo della Toscana\".",
          "The capoluogo isn't always the biggest city. In Calabria it is \"Catanzaro\", though \"Reggio Calabria\" is larger; in Abruzzo it is \"L'Aquila\", not the coastal city of \"Pescara\". Most of the others are famous: \"Torino\", \"Milano\", \"Venezia\", \"Bologna\", \"Napoli\", \"Bari\", \"Palermo\", \"Cagliari\".",
        ],
        examples: [
          { es: "Firenze è il capoluogo della Toscana.", en: "Florence is the regional capital of Tuscany." },
          { es: "Il capoluogo della Calabria è Catanzaro.", en: "The regional capital of Calabria is Catanzaro." },
          { es: "Roma è la capitale d'Italia.", en: "Rome is the capital of Italy." },
          { es: "Perugia è il capoluogo dell'Umbria.", en: "Perugia is the regional capital of Umbria." },
          { es: "Pescara è più grande dell'Aquila.", en: "Pescara is bigger than L'Aquila." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Florence is the regional capital of Tuscany.", answer: "Firenze è il capoluogo della Toscana.", altAnswers: ["Firenze è il capoluogo di regione della Toscana."], explanation: "A regional capital is a \"capoluogo\"; only Rome is a \"capitale\"." },
          { type: "multiple-choice", question: "Which city is the capoluogo of Calabria?", options: ["Catanzaro", "Reggio Calabria", "Cosenza", "Crotone"], correctIndex: 0, explanation: "\"Catanzaro\" is the capoluogo, although \"Reggio Calabria\" has more people." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rome is the capital of Italy.", answer: "Roma è la capitale d'Italia.", altAnswers: ["Roma è la capitale dell'Italia."], explanation: "Rome is the one \"capitale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Perugia is the regional capital of Umbria.", answer: "Perugia è il capoluogo dell'Umbria.", altAnswers: ["Perugia è il capoluogo di regione dell'Umbria."], explanation: "\"Di\" + \"l'Umbria\" = \"dell'Umbria\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents live in Lazio.", answer: "I miei genitori abitano nel Lazio.", altAnswers: ["I miei genitori vivono nel Lazio.", "I miei abitano nel Lazio.", "I miei vivono nel Lazio.", "I miei genitori abitano in Lazio.", "I miei genitori vivono in Lazio."], explanation: "\"Nel Lazio\" is the standard form; \"in Lazio\" is common too." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy has twenty regions.", answer: "L'Italia ha venti regioni.", altAnswers: ["In Italia ci sono venti regioni."], explanation: "\"Regione\" is feminine: \"le regioni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "French [is also spoken] in the Aosta Valley.", sentence: "In Valle d'Aosta ___ francese.", answer: "si parla anche", altAnswers: ["si parla pure", "parlano anche"], explanation: "\"Si parla\" = is spoken; \"anche\" usually comes after the verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There are five regions [with special status].", sentence: "Le regioni ___ sono cinque.", answer: "a statuto speciale", explanation: "The fixed phrase is \"a statuto speciale\"." },
      { type: "word-order", prompt: "Put the words in order to say: Trieste is the regional capital of Friuli-Venezia Giulia.", words: ["Trieste", "è", "il", "capoluogo", "del", "Friuli-Venezia", "Giulia."], translation: "Trieste is the regional capital of Friuli-Venezia Giulia.", explanation: "\"Il Friuli\" is masculine: \"del Friuli\"." },
      {
        type: "matching",
        instructions: "Match each region to its capoluogo.",
        pairs: [
          { left: "Piemonte", right: "Turin" },
          { left: "Liguria", right: "Genoa" },
          { left: "Puglia", right: "Bari" },
          { left: "Sardegna", right: "Cagliari" },
          { left: "Abruzzo", right: "L'Aquila" },
        ],
        explanation: "\"Torino\", \"Genova\", \"Bari\", \"Cagliari\" and \"L'Aquila\" are the capoluoghi.",
      },
      { type: "multiple-choice", question: "Which of these regions does NOT have special status?", options: ["Toscana", "Sardegna", "Valle d'Aosta", "Friuli-Venezia Giulia"], correctIndex: 0, explanation: "The five special regions are the two islands and the three northern border regions. \"La Toscana\" has an ordinary statute." },
      { type: "dictation", audio: "Quest'estate andiamo nelle Marche.", explanation: "\"Nelle Marche\": the region's name is plural." },
      { type: "speak", text: "Abito in Toscana, ma sono di Palermo, in Sicilia.", prompt: "Say it in Italian: I live in Tuscany, but I'm from Palermo, in Sicily.", tip: "Stress pa-LER-mo and si-CI-lia.", explanation: "\"Abito in\" + region, \"sono di\" + city." },
    ],
  },
  {
    slug: "culture-the-north",
    level: "IT-Culture",
    number: 2,
    title: "The North",
    summary: "Tour the eight regions of the North, from the Alps and the lakes to Venice, Bologna and the Po Valley.",
    duration: "15 min",
    sections: [
      {
        heading: "The Northwest",
        body: [
          "\"Piemonte\" means at the foot of the mountains. Its capoluogo, \"Torino\", was the first capital of united Italy, from 1861 to 1865, and the home of Fiat; the hills of the Langhe give Barolo wine and the white truffles of Alba. The tiny \"Valle d'Aosta\", the smallest region, sits under Mont Blanc, which Italians call \"il Monte Bianco\".",
          "\"Lombardia\" is the most populous region, with about ten million people. \"Milano\" is Italy's center of finance, fashion and design, and the big lakes, \"il lago di Como\", \"il lago Maggiore\" and \"il lago di Garda\", are an hour away. \"Liguria\" is a thin arc of coast around the port of \"Genova\": the Cinque Terre, Portofino, pesto and focaccia.",
        ],
        examples: [
          { es: "Torino è stata la prima capitale d'Italia.", en: "Turin was the first capital of Italy." },
          { es: "La Valle d'Aosta è la regione più piccola.", en: "The Aosta Valley is the smallest region." },
          { es: "Milano è il centro della moda e del design.", en: "Milan is the center of fashion and design." },
          { es: "Il weekend andiamo sul lago di Como.", en: "On the weekend we go to Lake Como." },
          { es: "In Liguria si mangia la focaccia a colazione.", en: "In Liguria people eat focaccia for breakfast." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turin was the first capital of Italy.", answer: "Torino è stata la prima capitale d'Italia.", altAnswers: ["Torino è stata la prima capitale dell'Italia.", "Torino fu la prima capitale d'Italia."], explanation: "\"Città\" names are feminine, so \"è stata\" agrees with \"Torino\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On the weekend we go [to Lake Como].", sentence: "Il weekend andiamo ___.", answer: "sul lago di Como", altAnswers: ["al lago di Como"], explanation: "Italians go \"sul lago\" (on the lake), as they go \"al mare\" and \"in montagna\"." },
          { type: "multiple-choice", question: "Which is the most populous Italian region?", options: ["Lombardia", "Piemonte", "Liguria", "Valle d'Aosta"], correctIndex: 0, explanation: "\"La Lombardia\" has about ten million people." },
        ],
      },
      {
        heading: "The Northeast",
        body: [
          "\"Veneto\" has \"Venezia\", built on more than a hundred islands, but also \"Verona\" with its Roman arena, the university city of \"Padova\", and the hills of Prosecco. North of it, \"Trentino-Alto Adige\" is the land of the Dolomites, apple orchards and bilingual \"Bolzano\", where a museum shows Ötzi, the 5,000-year-old iceman found in a glacier in 1991.",
          "\"Friuli-Venezia Giulia\" faces Slovenia and Austria. Its capoluogo, \"Trieste\", was the main port of the Habsburg Empire until 1918 and still has Vienna-style cafés and a serious coffee culture; inland, \"San Daniele\" gives its name to a famous ham.",
        ],
        examples: [
          { es: "Venezia è costruita su più di cento isole.", en: "Venice is built on more than a hundred islands." },
          { es: "D'estate c'è l'opera all'Arena di Verona.", en: "In summer there's opera at the Arena in Verona." },
          { es: "A Bolzano i cartelli sono in italiano e in tedesco.", en: "In Bolzano the signs are in Italian and German." },
          { es: "Trieste è stata austriaca fino al 1918.", en: "Trieste was Austrian until 1918." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Bolzano the signs are in Italian and German.", answer: "A Bolzano i cartelli sono in italiano e in tedesco.", altAnswers: ["A Bolzano i cartelli sono in italiano e tedesco."], explanation: "\"A\" + city; \"in italiano\" = in Italian. Languages are lowercase." },
          { type: "listen-choose", audio: "Trieste è stata austriaca fino al 1918.", question: "What does it mean?", options: ["Trieste was Austrian until 1918.", "Trieste has been Italian since 1818.", "Trieste is near Austria.", "Trieste was founded in 1918."], correctIndex: 0, explanation: "\"Fino al\" = until." },
        ],
      },
      {
        heading: "Emilia-Romagna and the Po",
        body: [
          "\"Emilia-Romagna\" is two historic areas joined by a hyphen. Emilia is food and engines: \"Parma\" for ham and Parmigiano, \"Modena\" for balsamic vinegar, and the \"Motor Valley\" around Maranello, home of Ferrari. Romagna, toward the Adriatic, includes the beach strip around \"Rimini\". Its capoluogo, \"Bologna\", has the oldest university in the Western world, founded in 1088.",
          "Most of the North shares one great plain, \"la Pianura Padana\", named after \"il Po\", Italy's longest river (652 km). It's flat, foggy in winter, crowded with industry and farms, and it produces a large share of the country's wealth.",
        ],
        examples: [
          { es: "Il Po è il fiume più lungo d'Italia.", en: "The Po is the longest river in Italy." },
          { es: "D'inverno in pianura c'è spesso la nebbia.", en: "In winter there's often fog on the plain." },
          { es: "L'università di Bologna è del 1088.", en: "The University of Bologna dates from 1088." },
          { es: "Andiamo al mare a Rimini.", en: "We're going to the beach in Rimini." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Po is the longest river in Italy.", answer: "Il Po è il fiume più lungo d'Italia.", altAnswers: ["Il Po è il fiume più lungo dell'Italia."], explanation: "The superlative uses \"il più\" + adjective + \"di\": \"il fiume più lungo d'Italia\", rather than \"in Italia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In winter there's often [fog].", sentence: "D'inverno c'è spesso la ___.", answer: "nebbia", explanation: "\"La nebbia\" (fog), with double b, is the trademark of the Po Valley." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Milan is the center of fashion.", answer: "Milano è il centro della moda.", altAnswers: ["Milano è la capitale della moda."], explanation: "\"Della moda\": \"di\" + \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Aosta Valley is the smallest region.", answer: "La Valle d'Aosta è la regione più piccola.", altAnswers: ["La Valle d'Aosta è la regione più piccola d'Italia."], explanation: "Superlative: \"la regione più piccola\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Venice is built on islands.", answer: "Venezia è costruita sulle isole.", altAnswers: ["Venezia è costruita su isole.", "Venezia è costruita su delle isole."], explanation: "\"Costruita\" agrees with \"Venezia\", feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're going to the beach in Rimini.", answer: "Andiamo al mare a Rimini.", altAnswers: ["Noi andiamo al mare a Rimini."], explanation: "To the beach / seaside = \"al mare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In winter there's often fog.", answer: "D'inverno c'è spesso la nebbia.", altAnswers: ["In inverno c'è spesso la nebbia.", "D'inverno c'è spesso nebbia.", "In inverno c'è spesso nebbia."], explanation: "\"D'inverno\" or \"in inverno\" = in winter." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Trieste [was] Austrian until 1918.", sentence: "Trieste ___ austriaca fino al 1918.", answer: "è stata", altAnswers: ["era", "fu"], explanation: "Cities are feminine: \"è stata\", with \"austriaca\" agreeing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In summer there's opera [at the Arena] in Verona.", sentence: "D'estate c'è l'opera ___ di Verona.", answer: "all'Arena", explanation: "\"A\" + \"l'Arena\" = \"all'Arena\"." },
      { type: "word-order", prompt: "Put the words in order to say: Ferrari's home is in Maranello.", words: ["La", "casa", "della", "Ferrari", "è", "a", "Maranello."], translation: "Ferrari's home is in Maranello.", explanation: "The company is feminine: \"la Ferrari\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il lago", right: "the lake" },
          { left: "il fiume", right: "the river" },
          { left: "la pianura", right: "the plain" },
          { left: "la nebbia", right: "the fog" },
          { left: "il ghiacciaio", right: "the glacier" },
        ],
        explanation: "Landscape words of the North.",
      },
      { type: "multiple-choice", question: "Which city is NOT in Veneto?", options: ["Trieste", "Verona", "Padova", "Venezia"], correctIndex: 0, explanation: "\"Trieste\" is the capoluogo of Friuli-Venezia Giulia." },
      { type: "dictation", audio: "Il Po è il fiume più lungo d'Italia.", explanation: "\"Più\" with a grave accent." },
      { type: "speak", text: "Vorrei visitare il lago di Garda e le Dolomiti.", prompt: "Say it in Italian: I'd like to visit Lake Garda and the Dolomites.", tip: "Dolomiti: do-LO-mi-ti, stress on the second syllable.", explanation: "\"Vorrei\" + infinitive for a wish." },
    ],
  },
  {
    slug: "culture-the-centre",
    level: "IT-Culture",
    number: 3,
    title: "The Center",
    summary: "Meet the four regions of central Italy: Tuscany, green Umbria, the Marche and Lazio with Rome.",
    duration: "15 min",
    sections: [
      {
        heading: "Toscana",
        body: [
          "\"Toscana\" is the Italy of postcards: cypress trees, hill towns, Chianti vineyards, and cities like \"Firenze\", \"Siena\", \"Pisa\" and \"Lucca\". Florence was the heart of the Renaissance under the Medici family, and Tuscan matters for the language too: standard Italian grew out of the Florentine of Dante, Petrarch and Boccaccio.",
          "That's why Tuscans are sometimes said to speak the best Italian. They also have a famous accent: in Florence a c between vowels sounds like an h, so \"la casa\" can sound like la hasa. You'll understand it fine; you don't need to copy it.",
        ],
        examples: [
          { es: "Firenze è la città del Rinascimento.", en: "Florence is the city of the Renaissance." },
          { es: "L'italiano standard viene dal fiorentino.", en: "Standard Italian comes from Florentine." },
          { es: "Abbiamo affittato una casa nel Chianti.", en: "We rented a house in the Chianti area." },
          { es: "I toscani hanno un accento molto riconoscibile.", en: "Tuscans have a very recognizable accent." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Florence is the city of the Renaissance.", answer: "Firenze è la città del Rinascimento.", explanation: "\"Il Rinascimento\" = the Renaissance; \"di\" + \"il\" = \"del\"." },
          { type: "multiple-choice", question: "Why do people say Tuscans speak the best Italian?", options: ["Standard Italian grew out of Florentine.", "Tuscany has the most universities.", "Tuscans never use dialect words.", "Rome's accent was banned in schools."], correctIndex: 0, explanation: "The written standard is based on the Florentine of Dante, Petrarch and Boccaccio." },
        ],
      },
      {
        heading: "Umbria e Marche",
        body: [
          "\"Umbria\" calls itself \"il cuore verde d'Italia\", the green heart of Italy; it's the only region of the peninsula with no coast. Here are \"Assisi\", the town of Saint Francis, hilltop \"Orvieto\", and \"Perugia\", whose Università per Stranieri has taught Italian to foreigners for about a hundred years.",
          "\"Le Marche\" is plural: \"le Marche sono belle\". The region runs from the Apennines down to the Adriatic. \"Urbino\", a Renaissance court town, is where Raphael was born; \"Recanati\" is the hometown of the poet Giacomo Leopardi; \"Pesaro\" gave the world Rossini. The people are \"marchigiani\".",
        ],
        examples: [
          { es: "L'Umbria non ha il mare.", en: "Umbria has no coast." },
          { es: "Assisi è la città di San Francesco.", en: "Assisi is Saint Francis's town." },
          { es: "Le Marche sono una regione tranquilla.", en: "The Marche is a quiet region." },
          { es: "Raffaello è nato a Urbino.", en: "Raphael was born in Urbino." },
          { es: "Ho studiato italiano a Perugia.", en: "I studied Italian in Perugia." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Umbria has no coast.", answer: "L'Umbria non ha il mare.", altAnswers: ["L'Umbria non ha la costa.", "L'Umbria non ha coste."], explanation: "Italians say a region \"non ha il mare\": it has no sea." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The Marche [are] beautiful.", sentence: "Le Marche ___ belle.", answer: "sono", explanation: "\"Le Marche\" is plural, so the verb and adjective are plural: \"sono belle\"." },
          { type: "listen-choose", audio: "Raffaello è nato a Urbino.", question: "What does it mean?", options: ["Raphael was born in Urbino.", "Raphael lived in Urbino.", "Raphael died in Urbino.", "Raphael painted Urbino."], correctIndex: 0, explanation: "\"È nato\" = was born." },
        ],
      },
      {
        heading: "Lazio e Roma",
        body: [
          "\"Il Lazio\" is dominated by \"Roma\", the capital, with almost three million people. Inside Rome lies a separate state, the Vatican City, the smallest in the world. People from Rome are \"romani\"; people from the rest of the region are \"laziali\", a word that also names fans of the soccer club Lazio.",
          "Outside Rome the region has the lakes of the Castelli Romani, the villas of \"Tivoli\", medieval \"Viterbo\" and long beaches where Romans spend their summer weekends. Romans have a recognizable accent and their own forms: \"Annamo!\" for \"Andiamo!\". Treat it as color; write the standard.",
        ],
        examples: [
          { es: "Il Vaticano è uno Stato dentro Roma.", en: "The Vatican is a state inside Rome." },
          { es: "Sono romano, ma i miei sono di Viterbo.", en: "I'm from Rome, but my parents are from Viterbo." },
          { es: "La domenica i romani vanno al mare a Ostia.", en: "On Sundays Romans go to the beach at Ostia." },
          { es: "Roma ha quasi tre milioni di abitanti.", en: "Rome has almost three million inhabitants." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Vatican is a state inside Rome.", answer: "Il Vaticano è uno Stato dentro Roma.", altAnswers: ["Il Vaticano è uno stato dentro Roma.", "Il Vaticano è uno Stato all'interno di Roma.", "Il Vaticano è uno stato all'interno di Roma."], explanation: "\"Uno\" before s + consonant: \"uno Stato\"." },
          { type: "multiple-choice", question: "What do you call someone from Rome?", options: ["romano", "laziale", "romanesco", "romeno"], correctIndex: 0, explanation: "\"Romano\" is a person from Rome. \"Romanesco\" is the city's dialect, and \"romeno\" means Romanian." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Raphael was born in Urbino.", answer: "Raffaello è nato a Urbino.", explanation: "\"Nascere\" takes \"essere\": \"è nato\". Double f in \"Raffaello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I studied Italian in Perugia.", answer: "Ho studiato italiano a Perugia.", altAnswers: ["Ho studiato l'italiano a Perugia.", "Io ho studiato italiano a Perugia."], explanation: "\"A\" + city." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Assisi is Saint Francis's town.", answer: "Assisi è la città di San Francesco.", altAnswers: ["Assisi è il paese di San Francesco."], explanation: "\"San\" before a consonant: \"San Francesco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Standard Italian comes from Florentine.", answer: "L'italiano standard viene dal fiorentino.", altAnswers: ["L'italiano standard deriva dal fiorentino."], explanation: "\"Venire da\" = to come from; \"da\" + \"il\" = \"dal\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays we go to the beach.", answer: "La domenica andiamo al mare.", altAnswers: ["Andiamo al mare la domenica.", "Noi la domenica andiamo al mare."], explanation: "\"La domenica\" = on Sundays, every Sunday." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We rented a house [in the Chianti area].", sentence: "Abbiamo affittato una casa ___.", answer: "nel Chianti", explanation: "Areas like \"il Chianti\" keep the article: \"nel Chianti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Umbria is [the green heart] of Italy.", sentence: "L'Umbria è ___ d'Italia.", answer: "il cuore verde", explanation: "The region's motto: \"il cuore verde d'Italia\"." },
      { type: "word-order", prompt: "Put the words in order to say: My parents are from Viterbo.", words: ["I", "miei", "genitori", "sono", "di", "Viterbo."], translation: "My parents are from Viterbo.", explanation: "\"Essere di\" + city = to be from." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "toscano", right: "Tuscan" },
          { left: "umbro", right: "Umbrian" },
          { left: "marchigiano", right: "from the Marche" },
          { left: "laziale", right: "from Lazio" },
          { left: "romano", right: "Roman" },
        ],
        explanation: "Regional adjectives are lowercase.",
      },
      { type: "dictation", audio: "Le Marche sono una regione tranquilla.", explanation: "Plural name, singular \"regione\"." },
      { type: "speak", text: "L'anno scorso sono stato in Umbria e nelle Marche.", prompt: "Say it in Italian: Last year I went to Umbria and the Marche.", tip: "Women say \"sono stata\".", explanation: "\"Essere stato in\" = to have been to." },
    ],
  },
  {
    slug: "culture-the-south",
    level: "IT-Culture",
    number: 4,
    title: "The South",
    summary: "Discover the six regions of the mainland South, from the mountains of Abruzzo to Naples, Puglia, Matera and Calabria.",
    duration: "15 min",
    sections: [
      {
        heading: "Il Mezzogiorno",
        body: [
          "Italians call the South \"il Sud\" or \"il Mezzogiorno\", the same word as midday, because that's where the sun is at noon. It includes \"Abruzzo\", \"Molise\", \"Campania\", \"Puglia\", \"Basilicata\" and \"Calabria\", plus the islands. For more than a century the South has been poorer than the North, and many southerners have moved north or abroad for work.",
          "\"Abruzzo\" is mountains and national parks: the Gran Sasso is the highest peak of the Apennines, and the park founded in 1923 still protects the Marsican brown bear. \"Molise\", next door, is the second-smallest region; Italians joke \"Il Molise non esiste\", Molise doesn't exist, and the Molisani laugh along.",
        ],
        examples: [
          { es: "Mio nonno è emigrato dal Sud al Nord.", en: "My grandfather emigrated from the South to the North." },
          { es: "In Abruzzo ci sono molti parchi nazionali.", en: "There are many national parks in Abruzzo." },
          { es: "Il Molise è una regione piccola.", en: "Molise is a small region." },
          { es: "D'estate torniamo giù al Sud.", en: "In summer we go back down South." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are many national parks in Abruzzo.", answer: "In Abruzzo ci sono molti parchi nazionali.", altAnswers: ["Ci sono molti parchi nazionali in Abruzzo."], explanation: "\"Ci sono\" + plural; \"molti\" agrees with \"parchi\"." },
          { type: "multiple-choice", question: "What does \"il Mezzogiorno\" mean when Italians talk about their country?", options: ["the South of Italy", "lunchtime", "the Adriatic coast", "the islands only"], correctIndex: 0, explanation: "It also means noon, but as a region it's the South." },
        ],
      },
      {
        heading: "Campania",
        body: [
          "\"Campania\" is the most populous region of the South, and \"Napoli\" is Italy's third city after Rome and Milan. Around the bay you find \"il Vesuvio\", the volcano that buried \"Pompei\" and \"Ercolano\" in 79 AD, the islands of \"Capri\" and \"Ischia\", and the cliffs of the Amalfi Coast, \"la Costiera Amalfitana\".",
          "Naples has its own language, \"il napoletano\", heard in songs, theater and every street. Inland are the royal palace of \"Caserta\" and the buffalo herds that give real \"mozzarella di bufala\".",
        ],
        examples: [
          { es: "Napoli è la terza città d'Italia.", en: "Naples is Italy's third-largest city." },
          { es: "Il Vesuvio ha distrutto Pompei nel 79 dopo Cristo.", en: "Vesuvius destroyed Pompeii in 79 AD." },
          { es: "Abbiamo fatto un giro in barca a Capri.", en: "We took a boat trip in Capri." },
          { es: "La mozzarella di bufala viene dalla Campania.", en: "Buffalo mozzarella comes from Campania." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Vesuvius destroyed Pompeii.", answer: "Il Vesuvio ha distrutto Pompei.", explanation: "Mountains and volcanoes take the article: \"il Vesuvio\"." },
          { type: "listen-choose", audio: "Napoli è la terza città d'Italia.", question: "What does it mean?", options: ["Naples is Italy's third-largest city.", "Naples is three hours from Rome.", "Naples is Italy's oldest city.", "Naples has three million people."], correctIndex: 0, explanation: "\"La terza città\" = the third city." },
        ],
      },
      {
        heading: "Puglia, Basilicata, Calabria",
        body: [
          "\"Puglia\" is the heel of the boot, with the longest coastline of any mainland region. It makes more olive oil than any other region, and it's known for the cone-roofed \"trulli\" of \"Alberobello\" and the baroque churches of \"Lecce\". \"Basilicata\", also called Lucania, is quiet and mountainous; its jewel is \"Matera\", whose cave houses, \"i Sassi\", went from a national shame in the 1950s to European Capital of Culture in 2019.",
          "\"Calabria\" is the toe, almost all mountains and coast. Its museum in \"Reggio Calabria\" holds the Riace Bronzes, two Greek warriors found in the sea in 1972. Calabrians are proud of their hot \"peperoncino\" and the spicy spreadable sausage \"'nduja\".",
        ],
        examples: [
          { es: "La Puglia è il tacco dello stivale.", en: "Puglia is the heel of the boot." },
          { es: "Ad Alberobello abbiamo dormito in un trullo.", en: "In Alberobello we slept in a trullo." },
          { es: "Matera è stata Capitale europea della cultura nel 2019.", en: "Matera was European Capital of Culture in 2019." },
          { es: "I Bronzi di Riace sono a Reggio Calabria.", en: "The Riace Bronzes are in Reggio Calabria." },
          { es: "In Calabria si mangia piccante.", en: "In Calabria people eat spicy food." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Puglia is the heel of the boot.", answer: "La Puglia è il tacco dello stivale.", explanation: "\"Lo stivale\" (the boot): \"di\" + \"lo\" = \"dello\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In Alberobello] we slept in a trullo.", sentence: "___ abbiamo dormito in un trullo.", answer: "Ad Alberobello", altAnswers: ["A Alberobello"], explanation: "\"A\" often becomes \"ad\" before a vowel, especially before a: \"ad Alberobello\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Naples is Italy's third-largest city.", answer: "Napoli è la terza città d'Italia.", altAnswers: ["Napoli è la terza città più grande d'Italia.", "Napoli è la terza città dell'Italia."], explanation: "\"La terza città\" is enough in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Buffalo mozzarella comes from Campania.", answer: "La mozzarella di bufala viene dalla Campania.", explanation: "\"Venire da\" + \"la Campania\" = \"dalla Campania\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Molise is a small region.", answer: "Il Molise è una regione piccola.", altAnswers: ["Il Molise è una piccola regione."], explanation: "\"Il Molise\" takes the article as a subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In summer we go back down South.", answer: "D'estate torniamo giù al Sud.", altAnswers: ["In estate torniamo giù al Sud.", "D'estate torniamo al Sud.", "In estate torniamo al Sud."], explanation: "Italians go \"giù\" (down) to the South and \"su\" (up) to the North." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Riace Bronzes are in Reggio Calabria.", answer: "I Bronzi di Riace sono a Reggio Calabria.", explanation: "\"A\" + city." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Matera [was] European Capital of Culture in 2019.", sentence: "Matera ___ Capitale europea della cultura nel 2019.", answer: "è stata", altAnswers: ["fu"], explanation: "Feminine city: \"è stata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In Calabria people eat] spicy food.", sentence: "___ piccante.", answer: "In Calabria si mangia", explanation: "\"Si mangia\" = people eat, one eats." },
      { type: "word-order", prompt: "Put the words in order to say: My grandfather emigrated to the North.", words: ["Mio", "nonno", "è", "emigrato", "al", "Nord."], translation: "My grandfather emigrated to the North.", explanation: "No article with \"mio\" + a singular family member; \"emigrare\" takes \"essere\"." },
      { type: "multiple-choice", question: "Which city is known for its cave houses, the Sassi?", options: ["Matera", "Lecce", "Bari", "Caserta"], correctIndex: 0, explanation: "\"I Sassi di Matera\", in Basilicata." },
      { type: "dictation", audio: "La Puglia è il tacco dello stivale.", explanation: "\"Dello\" before s + consonant." },
      { type: "speak", text: "Quest'estate vado in Puglia: voglio vedere Lecce e Alberobello.", prompt: "Say it in Italian: This summer I'm going to Puglia: I want to see Lecce and Alberobello.", tip: "Puglia: the gl is one soft sound, like the lli in million.", explanation: "\"In\" + region, then two cities." },
    ],
  },
  {
    slug: "culture-the-islands",
    level: "IT-Culture",
    number: 5,
    title: "The Islands",
    summary: "Get to know Sicily and Sardinia, their history, landscapes and languages, and the smaller islands around Italy.",
    duration: "15 min",
    sections: [
      {
        heading: "Sicilia",
        body: [
          "\"La Sicilia\" is the largest island in the Mediterranean and a museum of invaders: Greeks, Romans, Arabs, Normans and Spaniards all left their mark. You see Greek temples at \"Agrigento\" and \"Siracusa\", and Arab-Norman churches in \"Palermo\". Above \"Catania\" rises \"l'Etna\", the highest active volcano in Europe, which erupts often and mostly harmlessly.",
          "There's no bridge across the Strait of Messina (one has been planned and argued about for decades): trains and cars cross to the mainland by ferry. Sicilians, like Sardinians, often call the mainland \"il continente\", as if it were another land.",
        ],
        examples: [
          { es: "La Sicilia è l'isola più grande del Mediterraneo.", en: "Sicily is the largest island in the Mediterranean." },
          { es: "L'Etna è un vulcano attivo.", en: "Etna is an active volcano." },
          { es: "Abbiamo preso il traghetto per Messina.", en: "We took the ferry to Messina." },
          { es: "A Palermo ci sono chiese arabo-normanne.", en: "In Palermo there are Arab-Norman churches." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Etna is an active volcano.", answer: "L'Etna è un vulcano attivo.", explanation: "Mountains take the article: \"l'Etna\"; the adjective follows the noun." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We took [the ferry] to Messina.", sentence: "Abbiamo preso ___ per Messina.", answer: "il traghetto", explanation: "\"Il traghetto\" = the ferry; you \"prendere\" it like a train." },
        ],
      },
      {
        heading: "Sardegna",
        body: [
          "\"La Sardegna\" is the second-largest island, wilder and emptier than Sicily. Its landscape is dotted with \"nuraghi\", stone towers built in the Bronze Age by a people we know little about; the one at \"Barumini\" is a UNESCO site. The capoluogo is \"Cagliari\", in the south; the glamorous Costa Smeralda is in the northeast.",
          "Many Sardinians speak \"il sardo\", recognized by law as a language, not a dialect, and some villages in the mountains are famous for the number of people who live past a hundred. Sardinia also has far more sheep than people, which is why \"pecorino\" cheese is everywhere.",
        ],
        examples: [
          { es: "In Sardegna ci sono migliaia di nuraghi.", en: "There are thousands of nuraghi in Sardinia." },
          { es: "Il sardo è una lingua, non un dialetto.", en: "Sardinian is a language, not a dialect." },
          { es: "In questo paese molti anziani hanno più di cento anni.", en: "In this village many old people are over a hundred." },
          { es: "Il pecorino si fa con il latte di pecora.", en: "Pecorino is made with sheep's milk." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sardinian is a language, not a dialect.", answer: "Il sardo è una lingua, non un dialetto.", explanation: "Language names are masculine and lowercase: \"il sardo\"." },
          { type: "listen-choose", audio: "Il pecorino si fa con il latte di pecora.", question: "What does it mean?", options: ["Pecorino is made with sheep's milk.", "Pecorino is made with cow's milk.", "Sheep eat pecorino.", "Pecorino is sold by the shepherd."], correctIndex: 0, explanation: "\"La pecora\" = sheep, hence \"pecorino\"." },
        ],
      },
      {
        heading: "Le isole minori",
        body: [
          "Italy has hundreds of smaller islands, \"le isole minori\". Off Sicily are the volcanic \"isole Eolie\", with \"Stromboli\" still smoking, and \"Lampedusa\", the southernmost point of Italy, closer to Africa than to Sicily. Off Tuscany is \"l'isola d'Elba\", where Napoleon spent his first exile in 1814. In the Bay of Naples are \"Capri\" and \"Ischia\".",
          "Note the prepositions: you go \"in Sicilia\" and \"in Sardegna\", but \"a Capri\", \"a Ischia\", \"a Lampedusa\": small islands behave like towns. \"All'isola d'Elba\" and \"sull'isola\" are also common.",
        ],
        examples: [
          { es: "Ad agosto andiamo a Lampedusa.", en: "In August we're going to Lampedusa." },
          { es: "Napoleone è stato in esilio all'isola d'Elba.", en: "Napoleon was in exile on Elba." },
          { es: "Lo Stromboli fuma ancora.", en: "Stromboli is still smoking." },
          { es: "Siamo andati a Capri in giornata.", en: "We went to Capri for the day." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In August we're going [to Lampedusa].", sentence: "Ad agosto andiamo ___.", answer: "a Lampedusa", explanation: "Small islands take \"a\" like towns; big ones take \"in\"." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Vado in Sardegna e poi a Capri.", "Vado a Sardegna e poi in Capri.", "Vado in Sardegna e poi in Capri.", "Vado a Sardegna e poi a Capri."], correctIndex: 0, explanation: "\"In\" + large island, \"a\" + small island." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sicily is the largest island in the Mediterranean.", answer: "La Sicilia è l'isola più grande del Mediterraneo.", explanation: "Superlative + \"di\": \"del Mediterraneo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We took the ferry to Sardinia.", answer: "Abbiamo preso il traghetto per la Sardegna.", altAnswers: ["Abbiamo preso il traghetto per andare in Sardegna."], explanation: "\"Per\" + destination: \"per la Sardegna\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We went to Capri for the day.", answer: "Siamo andati a Capri in giornata.", altAnswers: ["Siamo andate a Capri in giornata.", "Siamo andati a Capri per un giorno.", "Siamo andate a Capri per un giorno."], explanation: "\"In giornata\" = there and back in one day." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are thousands of nuraghi in Sardinia.", answer: "In Sardegna ci sono migliaia di nuraghi.", altAnswers: ["Ci sono migliaia di nuraghi in Sardegna."], explanation: "\"Migliaia di\" = thousands of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lampedusa is closer to Africa.", answer: "Lampedusa è più vicina all'Africa.", explanation: "Islands are feminine: \"vicina\"; \"vicino a\" + \"l'Africa\" = \"all'Africa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sicilians call the mainland [the continent].", sentence: "I siciliani chiamano la penisola ___.", answer: "il continente", explanation: "Islanders' word for mainland Italy: \"il continente\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pecorino [is made] with sheep's milk.", sentence: "Il pecorino ___ con il latte di pecora.", answer: "si fa", altAnswers: ["è fatto", "viene fatto"], explanation: "\"Si fa\" = is made, the everyday passive." },
      { type: "word-order", prompt: "Put the words in order to say: Etna is the highest active volcano in Europe.", words: ["L'Etna", "è", "il", "vulcano", "attivo", "più", "alto", "d'Europa."], translation: "Etna is the highest active volcano in Europe.", explanation: "\"Il vulcano attivo più alto d'Europa\": the adjective follows the noun, then the superlative + \"di\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "l'isola", right: "the island" },
          { left: "il traghetto", right: "the ferry" },
          { left: "il vulcano", right: "the volcano" },
          { left: "lo stretto", right: "the strait" },
          { left: "la pecora", right: "the sheep" },
        ],
        explanation: "\"Lo stretto\": \"lo\" before s + consonant.",
      },
      { type: "dictation", audio: "Il sardo è una lingua, non un dialetto.", explanation: "\"Lingua\" and \"dialetto\": double t." },
      { type: "speak", text: "Preferisco la Sardegna: il mare è bellissimo e c'è meno gente.", prompt: "Say it in Italian: I prefer Sardinia: the sea is beautiful and there are fewer people.", tip: "Sar-DE-gna: gn is one sound, like the ny in canyon.", explanation: "\"Meno gente\" = fewer people; \"gente\" is singular in Italian." },
    ],
  },
  {
    slug: "culture-campanilismo",
    level: "IT-Culture",
    number: 6,
    title: "Campanilismo",
    summary: "Understand campanilismo, the fierce local pride that sets town against town, and talk about where you come from with it in mind.",
    duration: "15 min",
    sections: [
      {
        heading: "The bell tower",
        body: [
          "\"Il campanile\" is the bell tower of the town church, and \"campanilismo\" is loyalty to everything within the sound of its bells. Italy became one country only in 1861; for centuries before that, cities were independent states that fought each other, and that history still shapes how people feel.",
          "Ask an Italian where they're from and the answer is rarely \"Sono italiano\": it's \"Sono di Lucca\" or \"Sono bergamasco\". Your town is \"il mio paese\", and people from it are your \"compaesani\". The word \"paese\" means both country and hometown or village, and context decides.",
        ],
        examples: [
          { es: "Al mio paese facciamo così.", en: "In my hometown we do it like this." },
          { es: "Siamo compaesani: siamo tutti e due di Gubbio!", en: "We're from the same town: we're both from Gubbio!" },
          { es: "Prima di essere italiano, sono napoletano.", en: "Before being Italian, I'm Neapolitan." },
          { es: "Il campanile si vede da tutta la valle.", en: "The bell tower can be seen from the whole valley." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my hometown we do it like this.", answer: "Al mio paese facciamo così.", altAnswers: ["Nel mio paese facciamo così.", "Al mio paese si fa così.", "Nel mio paese si fa così."], explanation: "\"Il paese\" = hometown; \"al mio paese\" is the idiomatic form." },
          { type: "multiple-choice", question: "\"Torno al paese per Natale.\" What does \"paese\" mean here?", options: ["hometown", "country", "countryside", "neighbor"], correctIndex: 0, explanation: "\"Tornare al paese\" = to go back to your hometown." },
        ],
      },
      {
        heading: "Famous rivalries",
        body: [
          "Some rivalries are centuries old. \"Pisa\" and \"Livorno\", twenty kilometers apart on the Tuscan coast, still trade insults; a traditional Livorno saying goes \"Meglio un morto in casa che un pisano all'uscio\", better a death in the house than a Pisan at the door. \"Firenze\" and \"Siena\" fought real wars in the Middle Ages, and \"Bergamo\" and \"Brescia\" compete over everything.",
          "In Sicily, Palermo and Catania can't even agree on a word: the fried rice ball is \"l'arancina\" in Palermo and \"l'arancino\" in Catania. Most of this is played for laughs, but in soccer it can turn serious.",
        ],
        examples: [
          { es: "Tra Pisa e Livorno c'è una rivalità antica.", en: "There's an old rivalry between Pisa and Livorno." },
          { es: "A Palermo si dice arancina, a Catania arancino.", en: "In Palermo they say arancina, in Catania arancino." },
          { es: "I bergamaschi e i bresciani si prendono in giro.", en: "People from Bergamo and Brescia make fun of each other." },
          { es: "È solo uno scherzo, non te la prendere!", en: "It's only a joke, don't take offense!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's an old rivalry between Pisa and Livorno.", answer: "Tra Pisa e Livorno c'è una rivalità antica.", altAnswers: ["Fra Pisa e Livorno c'è una rivalità antica.", "C'è una rivalità antica tra Pisa e Livorno.", "C'è una vecchia rivalità tra Pisa e Livorno.", "Tra Pisa e Livorno c'è una vecchia rivalità."], explanation: "\"Tra\" or \"fra\" = between; \"rivalità\" ends in a stressed à." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [make fun of each other].", sentence: "Si ___ in giro.", answer: "prendono", explanation: "\"Prendersi in giro\" = to make fun of each other." },
          { type: "listen-choose", audio: "A Palermo si dice arancina.", question: "What does it mean?", options: ["In Palermo they say arancina.", "In Palermo they eat oranges.", "In Palermo nobody says arancina.", "In Palermo arancine are sweet."], correctIndex: 0, explanation: "\"Si dice\" = people say, it's called." },
        ],
      },
      {
        heading: "The good side",
        body: [
          "Campanilismo also keeps traditions alive. Every town has a patron saint's festival, local recipes, often its own dialect words, and a \"sagra\", a village food festival devoted to one product: chestnuts, porcini, frogs, polenta. Visitors are welcome, and praising the local dish is the quickest way into a conversation.",
          "A friendly rule for foreigners: admire everyone's town and never compare it to the rival next door. \"Paese che vai, usanza che trovi\": every place has its own customs.",
        ],
        examples: [
          { es: "Domenica c'è la sagra della castagna.", en: "On Sunday there's the chestnut festival." },
          { es: "Ogni paese ha il suo santo patrono.", en: "Every town has its patron saint." },
          { es: "Qual è il piatto tipico del tuo paese?", en: "What's the typical dish of your hometown?" },
          { es: "Paese che vai, usanza che trovi.", en: "Every place has its own customs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every town has its patron saint.", answer: "Ogni paese ha il suo santo patrono.", altAnswers: ["Ogni città ha il suo santo patrono.", "Ogni paese ha il proprio santo patrono."], explanation: "\"Ogni\" is followed by a singular noun." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the typical dish of your hometown?", answer: "Qual è il piatto tipico del tuo paese?", altAnswers: ["Qual è il piatto tipico della tua città?"], explanation: "\"Qual è\" has no apostrophe." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sunday there's the chestnut festival.", answer: "Domenica c'è la sagra della castagna.", altAnswers: ["Domenica c'è la sagra delle castagne."], explanation: "No article before \"domenica\" for this Sunday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're both from Gubbio.", answer: "Siamo tutti e due di Gubbio.", altAnswers: ["Siamo tutte e due di Gubbio.", "Siamo entrambi di Gubbio.", "Siamo entrambe di Gubbio.", "Tutti e due siamo di Gubbio."], explanation: "\"Tutti e due\" = both; \"essere di\" + town." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going back to my hometown for Christmas.", answer: "Torno al paese per Natale.", altAnswers: ["Torno al mio paese per Natale.", "Per Natale torno al paese.", "Per Natale torno al mio paese.", "Torno a casa per Natale."], explanation: "\"Tornare al paese\" = to go back to your hometown." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's only a joke.", answer: "È solo uno scherzo.", altAnswers: ["È soltanto uno scherzo."], explanation: "\"Uno\" before s + consonant: \"uno scherzo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Before being Italian, I'm Neapolitan.", answer: "Prima di essere italiano, sono napoletano.", altAnswers: ["Prima di essere italiana, sono napoletana."], explanation: "\"Prima di\" + infinitive; nationalities lowercase." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[People from Bergamo] make fun of people from Brescia.", sentence: "___ prendono in giro i bresciani.", answer: "I bergamaschi", explanation: "Town adjectives are lowercase: \"bergamasco\", plural \"bergamaschi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In Catania they say] arancino.", sentence: "___ arancino.", answer: "A Catania si dice", explanation: "\"Si dice\" = people say." },
      { type: "word-order", prompt: "Put the words in order to say: Every place has its own customs.", words: ["Paese", "che", "vai,", "usanza", "che", "trovi."], translation: "Every place has its own customs.", explanation: "A proverb: literally, the country you go to, the custom you find." },
      { type: "multiple-choice", question: "An Italian from Lucca proudly describes his town's olive oil. What's the friendliest reply?", options: ["Che bello! Si sente che sei orgoglioso del tuo paese.", "Quello di Pisa è migliore.", "L'olio è uguale dappertutto.", "Non mi interessa l'olio."], correctIndex: 0, explanation: "Admire, never compare with the rival town. \"Orgoglioso\" = proud." },
      { type: "dictation", audio: "Ogni paese ha il suo santo patrono.", explanation: "\"Ogni\" + singular." },
      { type: "speak", text: "Sono di un piccolo paese vicino a Bergamo, e ne sono molto orgoglioso.", prompt: "Say it in Italian: I'm from a small town near Bergamo, and I'm very proud of it.", tip: "\"Orgoglioso\": the gl is soft, or-goll-YO-so.", explanation: "\"Ne\" replaces \"del mio paese\": proud of it." },
    ],
  },
  {
    slug: "culture-small-towns",
    level: "IT-Culture",
    number: 7,
    title: "Borghi and Small Towns",
    summary: "Explore life in Italy's borghi: their beauty, the depopulation that empties them, and the ideas bringing them back to life.",
    duration: "15 min",
    sections: [
      {
        heading: "Il borgo",
        body: [
          "\"Un borgo\" (plural \"borghi\") is a small historic village, often medieval, built on a hilltop or around a castle, with stone houses, one main piazza and a church. Italy has thousands of them, and a national association, \"I Borghi più belli d'Italia\", lists the most beautiful.",
          "Life there is slow and social. There's one bar where everyone meets, an \"alimentari\" (a small grocery store) that sells a bit of everything, and old people sitting outside in the evening. Everyone knows everyone, which is warm and occasionally suffocating.",
        ],
        examples: [
          { es: "Il borgo è in cima a una collina.", en: "The village is on top of a hill." },
          { es: "Qui tutti conoscono tutti.", en: "Here everyone knows everyone." },
          { es: "In paese c'è un solo bar.", en: "There's only one bar in the village." },
          { es: "Compro il pane all'alimentari in piazza.", en: "I buy bread at the grocery store in the square." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here everyone knows everyone.", answer: "Qui tutti conoscono tutti.", altAnswers: ["Qui si conoscono tutti.", "Qui tutti si conoscono."], explanation: "\"Tutti\" takes a plural verb: \"conoscono\"." },
          { type: "multiple-choice", question: "What is \"un alimentari\"?", options: ["a small grocery store", "a restaurant", "a food festival", "a farm"], correctIndex: 0, explanation: "\"Alimentari\" = groceries; the shop is \"un negozio di alimentari\", shortened to \"un alimentari\"." },
        ],
      },
      {
        heading: "Lo spopolamento",
        body: [
          "Since the 1950s young people have left the borghi for the cities, the North or abroad, chasing jobs and universities. This is \"lo spopolamento\", depopulation: schools close, the bus runs twice a day, and houses stand empty. \"Civita di Bagnoregio\", in Lazio, is called \"la città che muore\", the dying town: its hill is crumbling and only a handful of people live there.",
          "Some towns have tried selling abandoned houses for one euro, \"case a un euro\", on condition that buyers restore them within a few years. The houses are cheap; the renovation is not.",
        ],
        examples: [
          { es: "I giovani se ne vanno in città.", en: "Young people leave for the city." },
          { es: "La scuola del paese ha chiuso.", en: "The village school has closed." },
          { es: "Il comune vende case a un euro.", en: "The town council is selling houses for one euro." },
          { es: "Ristrutturare una casa costa molto.", en: "Renovating a house costs a lot." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The village school has closed.", answer: "La scuola del paese ha chiuso.", altAnswers: ["La scuola del paese è chiusa.", "La scuola del borgo ha chiuso."], explanation: "\"Chiudere\" (to close down) takes \"avere\" in the passato prossimo: \"ha chiuso\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Young people [leave] for the city.", sentence: "I giovani ___ in città.", answer: "se ne vanno", altAnswers: ["vanno via"], explanation: "\"Andarsene\" = to leave, go away: \"se ne vanno\"." },
          { type: "listen-choose", audio: "Il comune vende case a un euro.", question: "What does it mean?", options: ["The town council is selling houses for one euro.", "The town council is buying houses for one euro.", "The town has one house for sale.", "Houses cost a million euros."], correctIndex: 0, explanation: "\"Il comune\" = the town council or municipality." },
        ],
      },
      {
        heading: "A new life",
        body: [
          "Remote work has brought some people back, and tourism helps: \"l'albergo diffuso\", a hotel spread across restored houses in a village, was invented in Italy and lets guests live like residents. Old crafts, local festivals and good food draw weekend visitors.",
          "Italians who move back speak of \"qualità della vita\": cleaner air, lower rents, time for people. The challenge is services: doctors, schools and fast internet. When you visit, staying a night, eating in the trattoria and buying local products really helps.",
        ],
        examples: [
          { es: "Abbiamo dormito in un albergo diffuso.", en: "We stayed in a hotel spread across the village." },
          { es: "Lavoro da remoto da un piccolo borgo.", en: "I work remotely from a small village." },
          { es: "Qui la qualità della vita è alta.", en: "The quality of life here is high." },
          { es: "Manca una connessione internet veloce.", en: "A fast internet connection is missing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work remotely from a small village.", answer: "Lavoro da remoto da un piccolo borgo.", altAnswers: ["Lavoro a distanza da un piccolo borgo.", "Lavoro da remoto da un piccolo paese.", "Lavoro in smart working da un piccolo borgo."], explanation: "\"Da remoto\" = remotely; Italians also say \"in smart working\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The quality of life here is high.", answer: "Qui la qualità della vita è alta.", altAnswers: ["La qualità della vita qui è alta."], explanation: "\"Qualità\" is feminine: \"alta\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The village is on top of a hill.", answer: "Il borgo è in cima a una collina.", altAnswers: ["Il paese è in cima a una collina."], explanation: "\"In cima a\" = on top of; double l in \"collina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's only one bar in the village.", answer: "In paese c'è un solo bar.", altAnswers: ["C'è un solo bar in paese.", "In paese c'è solo un bar.", "C'è solo un bar in paese."], explanation: "\"In paese\" = in the village, no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Renovating a house costs a lot.", answer: "Ristrutturare una casa costa molto.", altAnswers: ["Ristrutturare una casa costa tanto."], explanation: "An infinitive works as the subject: \"ristrutturare costa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bus runs twice a day.", answer: "L'autobus passa due volte al giorno.", altAnswers: ["Il pullman passa due volte al giorno.", "L'autobus c'è due volte al giorno."], explanation: "\"Due volte al giorno\" = twice a day." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We stayed [in a hotel spread across the village].", sentence: "Abbiamo dormito ___.", answer: "in un albergo diffuso", explanation: "\"L'albergo diffuso\" is an Italian invention." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A fast internet connection] is missing.", sentence: "Manca ___.", answer: "una connessione internet veloce", explanation: "\"Mancare\" agrees with what's missing, which usually follows the verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Civita di Bagnoregio is called [the dying town].", sentence: "Civita di Bagnoregio è chiamata ___.", answer: "la città che muore", explanation: "\"Che\" = that, a relative pronoun; \"muore\" from \"morire\"." },
      { type: "word-order", prompt: "Put the words in order to say: Many houses are empty.", words: ["Molte", "case", "sono", "vuote."], translation: "Many houses are empty.", explanation: "\"Molte\" and \"vuote\" agree with \"case\"." },
      { type: "multiple-choice", question: "What is \"lo spopolamento\"?", options: ["depopulation", "overcrowding", "a village festival", "a building permit"], correctIndex: 0, explanation: "\"S-\" + \"popolo\" (people): the loss of people." },
      { type: "dictation", audio: "Qui tutti conoscono tutti.", explanation: "\"Conoscono\": co-NO-sco-no." },
      { type: "speak", text: "Mi piacerebbe vivere in un borgo, ma ho bisogno di internet veloce.", prompt: "Say it in Italian: I'd like to live in a village, but I need fast internet.", tip: "Bor-go: roll the r lightly.", explanation: "\"Mi piacerebbe\" + infinitive = I'd like to." },
    ],
  },
  {
    slug: "culture-dialogue-where-are-you-from",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: Where Exactly Are You From?",
    summary: "Follow two people at a party in Milan as they place each other by region, province and town, and learn to do the same.",
    duration: "15 min",
    sections: [
      {
        heading: "Di dove sei?",
        body: [
          "At a party in Milan, Sara meets Davide. In Italy the first question after your name is \"Di dove sei?\", and a city is rarely enough: Italians want the region, the province, the town, sometimes the neighborhood. People from other places often live in the big cities: students who live away from home are \"fuorisede\".",
          "Sara: \"Di dove sei?\" Davide: \"Sono pugliese.\" Sara: \"Di dove, di preciso?\" Davide: \"Di un paesino vicino a Lecce. Sono salentino.\" The Salento is the southern tip of Puglia, and saying it shows pride.",
        ],
        examples: [
          { es: "Di dove sei, di preciso?", en: "Where exactly are you from?" },
          { es: "Sono di un paesino vicino a Lecce.", en: "I'm from a small town near Lecce." },
          { es: "Sono salentino, del Salento.", en: "I'm from the Salento." },
          { es: "Sono fuorisede: studio a Milano.", en: "I'm an out-of-town student: I study in Milan." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where exactly are you from?", answer: "Di dove sei, di preciso?", altAnswers: ["Di dove sei di preciso?", "Di preciso, di dove sei?", "Di dove sei esattamente?"], explanation: "\"Di preciso\" = exactly; \"essere di\" for origin." },
          { type: "multiple-choice", question: "Davide says \"Sono pugliese.\" What's the most natural follow-up?", options: ["Di dove, di preciso?", "Dove è Puglia?", "Sei di Puglia?", "Quale città sei?"], correctIndex: 0, explanation: "Italians narrow it down at once: \"Di dove, di preciso?\"." },
        ],
      },
      {
        heading: "Su e giù",
        body: [
          "Davide: \"Vivo a Milano da cinque anni, ma torno giù ogni estate.\" Sara: \"Io invece sono salita da Napoli due anni fa.\" Italians go \"giù\" (down) to the South and \"su\" (up) to the North, like on a map; \"scendere\" and \"salire\" work the same way.",
          "Then come the stereotypes, usually as jokes: northerners are seen as hard-working and cold, southerners as warm and relaxed. Some nicknames for northerners and southerners are insults; let Italians joke about it, and don't join in.",
        ],
        examples: [
          { es: "Vivo a Milano da cinque anni.", en: "I've been living in Milan for five years." },
          { es: "Ogni estate torno giù dai miei.", en: "Every summer I go back down to my parents'." },
          { es: "Sono salita a Milano per lavoro.", en: "I moved up to Milan for work." },
          { es: "A Natale scendiamo a Napoli.", en: "At Christmas we go down to Naples." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been living in Milan for five years.", answer: "Vivo a Milano da cinque anni.", altAnswers: ["Abito a Milano da cinque anni.", "Io vivo a Milano da cinque anni.", "Io abito a Milano da cinque anni."], explanation: "Present + \"da\" for something still going on: \"vivo da cinque anni\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At Christmas we [go down] to Naples.", sentence: "A Natale ___ a Napoli.", answer: "scendiamo", explanation: "\"Scendere\" = to go down: south, in Italian geography." },
          { type: "listen-choose", audio: "Ogni estate torno giù dai miei.", question: "What does it mean?", options: ["Every summer I go back down to my parents'.", "Every summer my parents come up to see me.", "Every summer I go to the beach.", "Every summer I stay at home."], correctIndex: 0, explanation: "\"Dai miei\" = to my parents' place." },
        ],
      },
      {
        heading: "Ah, allora conosci...",
        body: [
          "Once places are settled, Italians look for a link: \"Ah, di Lecce? Allora conosci il mare di Otranto!\" or \"Mia zia abita lì vicino!\". Finding one makes you almost family.",
          "If someone asks you, give more than your country: \"Sono americana, di Chicago, ma mia nonna era di un paese in Calabria\". Italian roots, however distant, always start a conversation.",
        ],
        examples: [
          { es: "Ah, di Lecce? Allora conosci Otranto!", en: "Oh, from Lecce? Then you know Otranto!" },
          { es: "Mia zia abita lì vicino.", en: "My aunt lives near there." },
          { es: "Mia nonna era di un paese in Calabria.", en: "My grandmother was from a village in Calabria." },
          { es: "Che piccolo il mondo!", en: "What a small world!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother was from a village in Calabria.", answer: "Mia nonna era di un paese in Calabria.", altAnswers: ["Mia nonna era di un paesino in Calabria.", "Mia nonna veniva da un paese in Calabria.", "Mia nonna era di un paese della Calabria."], explanation: "The imperfetto \"era\" describes a past background fact." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My aunt lives near there.", answer: "Mia zia abita lì vicino.", altAnswers: ["Mia zia vive lì vicino."], explanation: "No article with \"mia\" + singular relative." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm from a small town near Lecce.", answer: "Sono di un paesino vicino a Lecce.", altAnswers: ["Sono di un piccolo paese vicino a Lecce.", "Io sono di un paesino vicino a Lecce."], explanation: "\"Paesino\" = small town; \"vicino a\" + city." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I moved up to Milan two years ago.", answer: "Sono salito a Milano due anni fa.", altAnswers: ["Sono salita a Milano due anni fa.", "Due anni fa sono salito a Milano.", "Due anni fa sono salita a Milano."], explanation: "\"Salire\" takes \"essere\"; \"fa\" = ago, after the time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a small world!", answer: "Che piccolo il mondo!", altAnswers: ["Com'è piccolo il mondo!", "Il mondo è piccolo!"], explanation: "\"Che\" + adjective for an exclamation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you an out-of-town student?", answer: "Sei fuorisede?", altAnswers: ["Sei uno studente fuorisede?", "Sei una studentessa fuorisede?", "Tu sei fuorisede?"], explanation: "\"Fuorisede\" doesn't change for gender or number." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Then you know Otranto!", answer: "Allora conosci Otranto!", altAnswers: ["Allora conosce Otranto!", "Quindi conosci Otranto!"], explanation: "\"Conoscere\" for places and people you know." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Every summer I [go back down] to my parents'.", sentence: "Ogni estate ___ dai miei.", answer: "torno giù", explanation: "\"Giù\" = down, toward the South." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [from the Salento].", sentence: "Sono ___.", answer: "del Salento", altAnswers: ["salentino", "salentina"], explanation: "Areas keep the article: \"del Salento\"." },
      { type: "word-order", prompt: "Put the words in order to say: I've been living in Milan for five years.", words: ["Vivo", "a", "Milano", "da", "cinque", "anni."], translation: "I've been living in Milan for five years.", explanation: "Present + \"da\": still true now." },
      { type: "multiple-choice", question: "Someone says \"Sono salito a Torino nel 2015.\" Where did they probably come from?", options: ["the South", "the North", "abroad", "a mountain village"], correctIndex: 0, explanation: "\"Salire\" (to go up) points north, so they came from further south." },
      { type: "dictation", audio: "Di dove sei, di preciso?", explanation: "Two \"di\": origin and \"di preciso\"." },
      { type: "speak", text: "Sono americana, di Chicago, ma mia nonna era di un paese in Calabria.", prompt: "Say it in Italian: I'm American, from Chicago, but my grandmother was from a village in Calabria.", tip: "Men say \"americano\".", explanation: "Country, city, then your Italian link." },
    ],
  },
];

export const IT_CULTURE_U01_WRITING: WriteExercise = {
  type: "write",
  prompt: "An Italian pen pal asks about where you come from. Write a message: say where you're from as precisely as Italians do (country, region or state, town), describe your town and one thing it's proud of, then say which Italian region you'd most like to visit and why, using at least two facts from this unit.",
  minWords: 60,
  maxWords: 140,
  rubric: [
    "Gives origin precisely with essere di and regional or town adjectives (sono di..., sono texano)",
    "Uses in, nel or nelle correctly with regions (in Toscana, nel Lazio, nelle Marche) and a with towns and small islands",
    "Describes a town with c'è / ci sono and adjectives that agree",
    "Gives at least two accurate facts about an Italian region, with a reason (perché, vorrei, mi piacerebbe)",
  ],
  modelAnswer: "Ciao Matteo! Sono americana, di Portland, nell'Oregon, ma sono nata in un piccolo paese vicino al mare. Nel mio paese c'è un faro antico e tutti ne sono molto orgogliosi: ogni estate c'è una festa con musica e pesce fresco. Vivo a Portland da sei anni. La regione italiana che vorrei visitare di più è la Puglia, perché mi piacciono il mare e il cibo semplice. Vorrei dormire in un trullo ad Alberobello e vedere le chiese barocche di Lecce. E tu, di dove sei di preciso? A presto!",
  explanation: "\"Sono di Portland\" and \"nata in un piccolo paese\" place the writer precisely; \"c'è un faro\" and \"ne sono orgogliosi\" show local pride; \"vivo a Portland da sei anni\" uses present + \"da\"; \"la Puglia\", \"in un trullo ad Alberobello\" and \"le chiese barocche di Lecce\" give accurate facts with the right prepositions.",
};
