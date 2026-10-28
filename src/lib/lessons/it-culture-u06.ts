// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u06.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 6: Art and Architecture. Ancient
// Rome, the Middle Ages and Giotto, the Renaissance, the Baroque, modern
// art, museums and how to visit them, UNESCO sites, and a guided visit to
// the Uffizi. Intermediate grammar; passato remoto only for recognition in
// dates and captions. Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U06: Lesson[] = [
  {
    slug: "culture-ancient-rome",
    level: "IT-Culture",
    number: 1,
    title: "Ancient Rome",
    summary: "Visit the Colosseum, the Pantheon and Pompeii, and learn to talk about ancient sites in Italian.",
    duration: "15 min",
    sections: [
      {
        heading: "Il Colosseo",
        body: [
          "Its real name is \"l'Anfiteatro Flavio\", after the Flavian emperors who built it; it opened in 80 AD and held around 50,000 spectators for gladiator fights and animal hunts. The nickname \"Colosseo\" probably comes from a colossal statue of Nero that stood nearby. Next to it lie the Roman Forum, \"il Foro Romano\", and the Palatine Hill.",
          "Talking about history, Italians often use the present: \"Nell'80 dopo Cristo l'imperatore Tito inaugura il Colosseo\". Dates use \"a.C.\" (avanti Cristo, BC) and \"d.C.\" (dopo Cristo, AD).",
        ],
        examples: [
          { es: "Il Colosseo poteva ospitare cinquantamila persone.", en: "The Colosseum could hold fifty thousand people." },
          { es: "Il vero nome è Anfiteatro Flavio.", en: "Its real name is the Flavian Amphitheater." },
          { es: "È stato inaugurato nell'80 d.C.", en: "It was inaugurated in 80 AD." },
          { es: "Il biglietto include anche il Foro.", en: "The ticket also includes the Forum." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ticket also includes the Forum.", answer: "Il biglietto include anche il Foro.", altAnswers: ["Il biglietto comprende anche il Foro.", "Il biglietto include anche il Foro Romano."], explanation: "\"Anche\" before the word it stresses." },
          { type: "multiple-choice", question: "What does \"d.C.\" mean after a date?", options: ["AD", "BC", "century", "about"], correctIndex: 0, explanation: "\"Dopo Cristo\" = after Christ; \"a.C.\" = \"avanti Cristo\"." },
        ],
      },
      {
        heading: "Il Pantheon",
        body: [
          "The Pantheon, rebuilt under the emperor Hadrian in the second century AD, has the largest unreinforced concrete dome in the world, and still nobody has built a bigger one. Light enters only through the round opening at the top, \"l'oculo\", about nine meters wide; when it rains, the rain falls inside and drains through holes in the floor.",
          "It became a church in the seventh century, which saved it. Raphael is buried there, and so are two kings of Italy. Since 2023 there's a small entrance fee.",
        ],
        examples: [
          { es: "Quando piove, l'acqua entra dall'oculo.", en: "When it rains, the water comes in through the oculus." },
          { es: "La cupola è ancora la più grande del suo tipo.", en: "The dome is still the largest of its kind." },
          { es: "Raffaello è sepolto nel Pantheon.", en: "Raphael is buried in the Pantheon." },
          { es: "È diventato una chiesa.", en: "It became a church." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Raphael is buried in the Pantheon.", answer: "Raffaello è sepolto nel Pantheon.", explanation: "\"Sepolto\" = buried, from \"seppellire\"." },
          { type: "listen-choose", audio: "Quando piove, l'acqua entra dall'oculo.", question: "What happens when it rains?", options: ["Water comes in through the opening.", "The Pantheon closes.", "The dome is covered.", "Nothing: there's a glass roof."], correctIndex: 0, explanation: "The oculus has no glass." },
        ],
      },
      {
        heading: "Pompei",
        body: [
          "In 79 AD Vesuvius erupted and buried \"Pompei\" and \"Ercolano\" (Herculaneum) under ash and volcanic debris. The towns stayed frozen in time: streets, bakeries, bars with counters, painted houses, even graffiti and election slogans on the walls. Plaster casts show the shapes of the victims.",
          "Pompeii is huge: plan a full day, bring water and good shoes, and buy tickets online in summer. Herculaneum is smaller and better preserved, a good half-day.",
        ],
        examples: [
          { es: "Pompei è stata sepolta dalla cenere.", en: "Pompeii was buried by ash." },
          { es: "Sui muri ci sono ancora le scritte.", en: "There's still writing on the walls." },
          { es: "Porta acqua e scarpe comode.", en: "Bring water and comfortable shoes." },
          { es: "Ci vuole almeno una giornata.", en: "You need at least a full day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bring water and comfortable shoes.", answer: "Porta acqua e scarpe comode.", altAnswers: ["Porta l'acqua e scarpe comode.", "Porti acqua e scarpe comode.", "Portate acqua e scarpe comode."], explanation: "\"Comode\" agrees with \"scarpe\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pompeii [was buried] by ash.", sentence: "Pompei ___ dalla cenere.", answer: "è stata sepolta", altAnswers: ["fu sepolta", "venne sepolta"], explanation: "Passive: \"essere\" + participle, feminine for the city." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Colosseum could hold fifty thousand people.", answer: "Il Colosseo poteva ospitare cinquantamila persone.", altAnswers: ["Il Colosseo poteva contenere cinquantamila persone.", "Il Colosseo poteva ospitare 50.000 persone."], explanation: "Imperfetto \"poteva\" for a past capacity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It became a church.", answer: "È diventato una chiesa.", altAnswers: ["È diventata una chiesa.", "Diventò una chiesa."], explanation: "\"Diventare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need at least a full day.", answer: "Ci vuole almeno una giornata.", altAnswers: ["Ci vuole almeno un giorno intero.", "Serve almeno una giornata."], explanation: "\"Ci vuole\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's still writing on the walls.", answer: "Sui muri ci sono ancora le scritte.", altAnswers: ["Ci sono ancora le scritte sui muri.", "Sui muri ci sono ancora scritte."], explanation: "\"I muri\" = walls of a building." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Vesuvius erupted in 79 AD.", answer: "Il Vesuvio ha eruttato nel 79 d.C.", altAnswers: ["Il Vesuvio eruttò nel 79 d.C.", "Il Vesuvio ha eruttato nel 79 dopo Cristo.", "Il Vesuvio è esploso nel 79 d.C."], explanation: "\"Nel\" + year." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The dome is still [the largest] of its kind.", sentence: "La cupola è ancora ___ del suo tipo.", answer: "la più grande", explanation: "Superlative: \"la più grande\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Its real name is [the Flavian Amphitheater].", sentence: "Il vero nome è ___.", answer: "Anfiteatro Flavio", altAnswers: ["l'Anfiteatro Flavio"], explanation: "Named after the Flavian emperors." },
      { type: "word-order", prompt: "Put the words in order to say: Herculaneum is smaller than Pompeii.", words: ["Ercolano", "è", "più", "piccola", "di", "Pompei."], translation: "Herculaneum is smaller than Pompeii.", explanation: "\"Più... di\" for comparison." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la cupola", right: "the dome" },
          { left: "l'anfiteatro", right: "the amphitheater" },
          { left: "la cenere", right: "the ash" },
          { left: "il foro", right: "the forum" },
          { left: "gli scavi", right: "the excavations" },
        ],
        explanation: "Archaeology words.",
      },
      { type: "dictation", audio: "Raffaello è sepolto nel Pantheon.", explanation: "\"Sepolto\" = buried." },
      { type: "speak", text: "Domani visitiamo il Colosseo e il Foro Romano.", prompt: "Say it in Italian: Tomorrow we're visiting the Colosseum and the Roman Forum.", tip: "Co-los-SE-o: stress on the E.", explanation: "Present for a plan." },
    ],
  },
  {
    slug: "culture-medieval",
    level: "IT-Culture",
    number: 2,
    title: "The Middle Ages",
    summary: "Tell Romanesque from Gothic, visit Pisa and Milan's cathedral, and see why Giotto changed painting.",
    duration: "15 min",
    sections: [
      {
        heading: "Romanico",
        body: [
          "Romanesque, \"il romanico\", flourished around the eleventh and twelfth centuries: thick walls, round arches, small windows, a solid and dark interior. Classic examples are the cathedral of Modena, Sant'Ambrogio in Milan and Pisa's \"Piazza dei Miracoli\", with its white marble cathedral, baptistery and the famous tower.",
          "The tower of Pisa started leaning during construction, begun in 1173, because of soft ground. Engineers stabilized it between 1990 and 2001; it still leans, by design now.",
        ],
        examples: [
          { es: "La torre ha cominciato a pendere subito.", en: "The tower started leaning right away." },
          { es: "Gli archi romanici sono a tutto sesto.", en: "Romanesque arches are round." },
          { es: "L'interno è buio e semplice.", en: "The interior is dark and simple." },
          { es: "Tutti fanno la foto mentre reggono la torre.", en: "Everyone takes the photo holding up the tower." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tower started leaning right away.", answer: "La torre ha cominciato a pendere subito.", altAnswers: ["La torre ha iniziato a pendere subito.", "La torre ha cominciato subito a pendere."], explanation: "\"Cominciare a\" + infinitive." },
          { type: "multiple-choice", question: "Which feature is Romanesque?", options: ["round arches and thick walls", "pointed arches and huge windows", "domes with oculi", "glass and steel"], correctIndex: 0, explanation: "Pointed arches are Gothic." },
        ],
      },
      {
        heading: "Gotico",
        body: [
          "Gothic, \"il gotico\", reached Italy later and stayed more moderate than in France: pointed arches, taller windows, more light. The great exception is \"il Duomo di Milano\", begun in 1386, a forest of marble spires that took centuries to finish; you can walk on its roof. Siena and Orvieto have striped Gothic cathedrals with glittering façades.",
          "Medieval cities also built town halls and towers: San Gimignano, in Tuscany, still has over a dozen, built by rival families to show their power.",
        ],
        examples: [
          { es: "Si può salire sul tetto del Duomo.", en: "You can go up onto the cathedral roof." },
          { es: "Ci sono voluti secoli per finirlo.", en: "It took centuries to finish it." },
          { es: "Il Duomo di Siena è a strisce bianche e nere.", en: "Siena cathedral has black and white stripes." },
          { es: "Le torri mostravano il potere delle famiglie.", en: "The towers showed the families' power." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can go up onto the cathedral roof.", answer: "Si può salire sul tetto del Duomo.", altAnswers: ["Puoi salire sul tetto del Duomo.", "Si può salire sul tetto del duomo."], explanation: "\"Si può\" = you can, one can." },
          { type: "listen-choose", audio: "Ci sono voluti secoli per finirlo.", question: "What does it mean?", options: ["It took centuries to finish it.", "It was finished in a year.", "It was never finished.", "It was destroyed centuries ago."], correctIndex: 0, explanation: "\"Ci sono voluti\" = it took (plural time)." },
        ],
      },
      {
        heading: "Giotto",
        body: [
          "Around 1300 the Florentine painter Giotto broke with the flat, golden Byzantine style. His figures have weight, they stand on real ground, and their faces show grief, tenderness, anger. His masterpiece is the cycle of frescoes in the Scrovegni Chapel in Padua, painted around 1305; visits last about a quarter of an hour, in small booked groups.",
          "Giotto also designed the bell tower next to Florence cathedral, \"il Campanile di Giotto\". Dante mentioned him in the \"Divina Commedia\" as the painter of the moment, the new star after his master Cimabue.",
        ],
        examples: [
          { es: "Giotto ha dipinto la Cappella degli Scrovegni.", en: "Giotto painted the Scrovegni Chapel." },
          { es: "Le figure sembrano vere.", en: "The figures look real." },
          { es: "Bisogna prenotare la visita.", en: "You have to book the visit." },
          { es: "Il campanile è accanto al Duomo.", en: "The bell tower is next to the cathedral." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to book the visit.", answer: "Bisogna prenotare la visita.", altAnswers: ["Si deve prenotare la visita.", "Devi prenotare la visita.", "È necessario prenotare la visita."], explanation: "\"Bisogna\" + infinitive = it's necessary to." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The figures [look] real.", sentence: "Le figure ___ vere.", answer: "sembrano", explanation: "\"Sembrare\" = to seem, look." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giotto painted the Scrovegni Chapel.", answer: "Giotto ha dipinto la Cappella degli Scrovegni.", altAnswers: ["Giotto dipinse la Cappella degli Scrovegni."], explanation: "\"Dipingere\" → \"dipinto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The interior is dark and simple.", answer: "L'interno è buio e semplice.", explanation: "\"Buio\" = dark (no light)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bell tower is next to the cathedral.", answer: "Il campanile è accanto al Duomo.", altAnswers: ["Il campanile è vicino al Duomo.", "Il campanile è accanto al duomo."], explanation: "\"Accanto a\" = next to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tower of Pisa still leans.", answer: "La torre di Pisa pende ancora.", altAnswers: ["La Torre di Pisa pende ancora.", "La torre di Pisa è ancora pendente."], explanation: "\"Pendere\" = to lean." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The towers showed the families' power.", answer: "Le torri mostravano il potere delle famiglie.", explanation: "Imperfetto for a lasting past situation." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Siena cathedral [has black and white stripes].", sentence: "Il Duomo di Siena è ___.", answer: "a strisce bianche e nere", explanation: "\"A strisce\" = striped." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everyone takes the photo [holding up] the tower.", sentence: "Tutti fanno la foto mentre ___ la torre.", answer: "reggono", explanation: "\"Reggere\" = to hold up." },
      { type: "word-order", prompt: "Put the words in order to say: Gothic arches are pointed.", words: ["Gli", "archi", "gotici", "sono", "a", "sesto", "acuto."], translation: "Gothic arches are pointed.", explanation: "\"A sesto acuto\" = pointed; \"a tutto sesto\" = round." },
      { type: "multiple-choice", question: "Why did Giotto matter?", options: ["His figures look solid and show real emotion.", "He invented oil painting.", "He built the Colosseum.", "He painted only in gold."], correctIndex: 0, explanation: "He moved painting toward weight and feeling." },
      { type: "dictation", audio: "Il campanile è accanto al Duomo.", explanation: "\"Accanto\": double c." },
      { type: "speak", text: "La Cappella degli Scrovegni è a Padova: bisogna prenotare.", prompt: "Say it in Italian: The Scrovegni Chapel is in Padua: you have to book.", tip: "PA-do-va: stress the first syllable.", explanation: "Place plus a practical tip." },
    ],
  },
  {
    slug: "culture-renaissance",
    level: "IT-Culture",
    number: 3,
    title: "The Renaissance",
    summary: "Meet Brunelleschi, Leonardo, Michelangelo and Raphael, and the Florence of the Medici where the Renaissance began.",
    duration: "15 min",
    sections: [
      {
        heading: "Firenze e i Medici",
        body: [
          "\"Il Rinascimento\", the rebirth, began in fifteenth-century Florence, funded by bankers like the Medici, who paid artists to glorify the city and themselves. Artists studied ancient Rome and nature, and painters mastered perspective.",
          "Filippo Brunelleschi built the dome of Florence cathedral between 1420 and 1436 without a wooden frame underneath, using two shells and a herringbone brick pattern. You can climb its 463 steps. Later in the century, in the 1480s, Botticelli painted \"La nascita di Venere\", now in the Uffizi.",
        ],
        examples: [
          { es: "I Medici pagavano gli artisti.", en: "The Medici paid the artists." },
          { es: "Brunelleschi ha costruito la cupola del Duomo.", en: "Brunelleschi built the cathedral dome." },
          { es: "Abbiamo salito tutti i gradini.", en: "We climbed all the steps." },
          { es: "Rinascimento vuol dire rinascita.", en: "Renaissance means rebirth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Medici paid the artists.", answer: "I Medici pagavano gli artisti.", altAnswers: ["I Medici hanno pagato gli artisti."], explanation: "Family names take a plural article: \"i Medici\"." },
          { type: "multiple-choice", question: "What did Brunelleschi build?", options: ["the dome of Florence cathedral", "the Colosseum", "St. Peter's colonnade", "the leaning tower"], correctIndex: 0, explanation: "\"La cupola\" of Santa Maria del Fiore." },
        ],
      },
      {
        heading: "Leonardo e Michelangelo",
        body: [
          "Leonardo da Vinci (1452-1519), from the Tuscan town of Vinci, was painter, engineer and scientist. His \"Ultima Cena\" (Last Supper) is on a refectory wall in Milan and needs a booking weeks ahead; the \"Gioconda\" (Mona Lisa) is in the Louvre.",
          "Michelangelo (1475-1564) saw himself as a sculptor first. He carved the \"David\" between 1501 and 1504 from a single block of marble; the original is in Florence's Galleria dell'Accademia, a copy in Piazza della Signoria. He painted the Sistine Chapel ceiling (1508-1512) and later the \"Giudizio Universale\".",
        ],
        examples: [
          { es: "Il David originale è all'Accademia.", en: "The original David is in the Accademia." },
          { es: "Per il Cenacolo bisogna prenotare settimane prima.", en: "For the Last Supper you have to book weeks ahead." },
          { es: "Michelangelo si considerava uno scultore.", en: "Michelangelo considered himself a sculptor." },
          { es: "La Gioconda è al Louvre.", en: "The Mona Lisa is in the Louvre." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The original David is in the Accademia.", answer: "Il David originale è all'Accademia.", altAnswers: ["Il David originale si trova all'Accademia.", "L'originale del David è all'Accademia."], explanation: "\"All'Accademia\" = in the Accademia gallery." },
          { type: "listen-choose", audio: "Per il Cenacolo bisogna prenotare settimane prima.", question: "What's the advice?", options: ["Book weeks in advance.", "Just turn up.", "Go early in the morning.", "It's closed for weeks."], correctIndex: 0, explanation: "\"Prenotare settimane prima\" = book weeks ahead." },
        ],
      },
      {
        heading: "Raffaello",
        body: [
          "Raphael (1483-1520), born in Urbino, was the youngest of the three and the most graceful. In the Vatican he painted rooms now called \"le Stanze di Raffaello\", including \"La Scuola di Atene\", where ancient philosophers have the faces of his contemporaries. He died at thirty-seven and is buried in the Pantheon.",
          "Much of what we know about these lives comes from Giorgio Vasari, a painter who wrote their biographies in 1550: a mix of fact and good stories.",
        ],
        examples: [
          { es: "Raffaello è morto a trentasette anni.", en: "Raphael died at thirty-seven." },
          { es: "Nella Scuola di Atene ci sono i filosofi antichi.", en: "The School of Athens shows the ancient philosophers." },
          { es: "Vasari ha scritto le vite degli artisti.", en: "Vasari wrote the lives of the artists." },
          { es: "Quale preferisci dei tre?", en: "Which of the three do you prefer?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Raphael died at thirty-seven.", answer: "Raffaello è morto a trentasette anni.", altAnswers: ["Raffaello morì a trentasette anni.", "Raffaello è morto a 37 anni."], explanation: "\"Morire\" takes \"essere\"; \"a\" + age." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Which of the three [do you prefer]?", sentence: "Quale ___ dei tre?", answer: "preferisci", altAnswers: ["preferisce", "preferite"], explanation: "\"Preferire\" adds -isc-." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Brunelleschi built the cathedral dome.", answer: "Brunelleschi ha costruito la cupola del Duomo.", altAnswers: ["Brunelleschi costruì la cupola del Duomo.", "Brunelleschi ha costruito la cupola del duomo."], explanation: "\"Costruire\" → \"costruito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Mona Lisa is in the Louvre.", answer: "La Gioconda è al Louvre.", altAnswers: ["La Gioconda si trova al Louvre.", "La Monna Lisa è al Louvre."], explanation: "Italians usually call it \"la Gioconda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We climbed all the steps.", answer: "Abbiamo salito tutti i gradini.", altAnswers: ["Abbiamo fatto tutti i gradini.", "Abbiamo salito tutti gli scalini."], explanation: "\"Salire\" with an object takes \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Michelangelo considered himself a sculptor.", answer: "Michelangelo si considerava uno scultore.", explanation: "\"Uno\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Renaissance means rebirth.", answer: "Rinascimento vuol dire rinascita.", altAnswers: ["Rinascimento significa rinascita.", "Il Rinascimento vuol dire rinascita."], explanation: "\"Rinascere\" = to be reborn." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Vasari wrote [the lives of the artists].", sentence: "Vasari ha scritto ___.", answer: "le vite degli artisti", explanation: "\"La vita\" → \"le vite\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Michelangelo painted [the ceiling] of the Sistine Chapel.", sentence: "Michelangelo ha dipinto ___ della Cappella Sistina.", answer: "la volta", altAnswers: ["il soffitto"], explanation: "\"La volta\" = vaulted ceiling." },
      { type: "word-order", prompt: "Put the words in order to say: The Renaissance began in Florence.", words: ["Il", "Rinascimento", "è", "nato", "a", "Firenze."], translation: "The Renaissance began in Florence.", explanation: "\"Nascere\" = to be born, begin." },
      {
        type: "matching",
        instructions: "Match the artist to the work.",
        pairs: [
          { left: "Leonardo", right: "The Last Supper" },
          { left: "Michelangelo", right: "David" },
          { left: "Raffaello", right: "The School of Athens" },
          { left: "Botticelli", right: "The Birth of Venus" },
          { left: "Brunelleschi", right: "Florence cathedral's dome" },
        ],
        explanation: "One masterpiece each.",
      },
      { type: "dictation", audio: "Il David originale è all'Accademia.", explanation: "\"All'Accademia\": double c." },
      { type: "speak", text: "Il mio artista preferito è Michelangelo: il David è incredibile.", prompt: "Say it in Italian: My favorite artist is Michelangelo: the David is incredible.", tip: "Mi-che-LAN-ge-lo: ch is a hard k.", explanation: "\"Il David\" with the article." },
    ],
  },
  {
    slug: "culture-baroque",
    level: "IT-Culture",
    number: 4,
    title: "The Baroque",
    summary: "Discover the drama of the Baroque: Bernini's sculpture and fountains, Borromini's churches, and Caravaggio's light and darkness.",
    duration: "15 min",
    sections: [
      {
        heading: "Bernini",
        body: [
          "The Baroque, \"il barocco\", turned Rome into a theater in the 1600s: movement, emotion, curves, light. Gian Lorenzo Bernini (1598-1680) shaped the city more than anyone. He designed the colonnade of St. Peter's Square, like two arms embracing the faithful, and the bronze canopy over the altar inside.",
          "His marble seems soft: in \"Apollo e Dafne\", at the Galleria Borghese, the nymph's fingers turn into leaves as you watch. In Piazza Navona his Fountain of the Four Rivers, finished in 1651, shows the Nile, Ganges, Danube and Río de la Plata.",
        ],
        examples: [
          { es: "Il colonnato sembra due braccia aperte.", en: "The colonnade looks like two open arms." },
          { es: "Il marmo sembra morbido.", en: "The marble looks soft." },
          { es: "La fontana è in Piazza Navona.", en: "The fountain is in Piazza Navona." },
          { es: "Alla Galleria Borghese si entra solo su prenotazione.", en: "You can only enter the Galleria Borghese with a booking." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The marble looks soft.", answer: "Il marmo sembra morbido.", explanation: "\"Sembrare\" + adjective." },
          { type: "multiple-choice", question: "What did Bernini design in St. Peter's Square?", options: ["the colonnade", "the dome", "the obelisk", "the Sistine Chapel"], correctIndex: 0, explanation: "The dome was Michelangelo's design." },
        ],
      },
      {
        heading: "Borromini",
        body: [
          "Francesco Borromini (1599-1667) was Bernini's great rival: introverted where Bernini was charming, and a daring architect of curved walls and twisting domes. His small church of San Carlo alle Quattro Fontane could fit inside one of the pillars of St. Peter's.",
          "A Roman legend says a river god on Bernini's fountain raises a hand in horror at Borromini's church opposite. It's false: the fountain was finished before the church was begun. Romans tell it anyway.",
        ],
        examples: [
          { es: "Erano rivali.", en: "They were rivals." },
          { es: "È una leggenda, ma non è vera.", en: "It's a legend, but it's not true." },
          { es: "La chiesa è piccola ma geniale.", en: "The church is small but brilliant." },
          { es: "I romani la raccontano lo stesso.", en: "Romans tell it anyway." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were rivals.", answer: "Erano rivali.", altAnswers: ["Loro erano rivali."], explanation: "Imperfetto \"erano\" for a lasting relationship." },
          { type: "listen-choose", audio: "È una leggenda, ma non è vera.", question: "What does it mean?", options: ["It's a legend, but it's not true.", "It's a true story.", "It's a famous painting.", "It's a new church."], correctIndex: 0, explanation: "\"Leggenda\" = legend." },
        ],
      },
      {
        heading: "Caravaggio",
        body: [
          "Michelangelo Merisi, called Caravaggio after his family's town (1571-1610), painted saints as ordinary people with dirty feet, lit by a hard beam of light out of darkness: \"il chiaroscuro\". In Rome you can see \"La vocazione di San Matteo\" for free in the church of San Luigi dei Francesi.",
          "His life was as dramatic as his paintings. In 1606 he killed a man in a brawl and fled Rome, working in Naples, Malta and Sicily before dying in 1610, at thirty-eight. Baroque also flourished in the South: Lecce, and Noto in Sicily, rebuilt after the 1693 earthquake.",
        ],
        examples: [
          { es: "La luce arriva dal buio.", en: "The light comes out of the darkness." },
          { es: "Caravaggio è dovuto fuggire da Roma.", en: "Caravaggio had to flee Rome." },
          { es: "Il quadro si vede gratis in chiesa.", en: "You can see the painting free in the church." },
          { es: "I santi sembrano gente comune.", en: "The saints look like ordinary people." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The saints look like ordinary people.", answer: "I santi sembrano gente comune.", altAnswers: ["I santi sembrano persone comuni.", "I santi sembrano persone normali."], explanation: "\"La gente\" is singular in Italian." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Caravaggio [had to flee] Rome.", sentence: "Caravaggio ___ da Roma.", answer: "è dovuto fuggire", altAnswers: ["dovette fuggire", "ha dovuto fuggire"], explanation: "Before an infinitive that takes \"essere\", like \"fuggire\", \"dovere\" can take \"essere\"; \"ha dovuto fuggire\" is also correct." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The fountain is in Piazza Navona.", answer: "La fontana è in Piazza Navona.", altAnswers: ["La fontana si trova in Piazza Navona."], explanation: "\"In piazza\" with no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The church is small but brilliant.", answer: "La chiesa è piccola ma geniale.", explanation: "\"Geniale\" = brilliant, ingenious." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Romans tell it anyway.", answer: "I romani la raccontano lo stesso.", altAnswers: ["I romani la raccontano comunque."], explanation: "\"Lo stesso\" = anyway." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The light comes out of the darkness.", answer: "La luce arriva dal buio.", altAnswers: ["La luce esce dal buio.", "La luce viene dal buio."], explanation: "\"Il buio\" = darkness." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can see the painting free in the church.", answer: "Il quadro si vede gratis in chiesa.", altAnswers: ["Si può vedere il quadro gratis in chiesa.", "Il quadro si può vedere gratis in chiesa."], explanation: "\"Gratis\" = free of charge." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The colonnade looks like [two open arms].", sentence: "Il colonnato sembra ___.", answer: "due braccia aperte", explanation: "\"Il braccio\" → \"le braccia\", feminine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You can only enter [with a booking].", sentence: "Si entra solo ___.", answer: "su prenotazione", altAnswers: ["con la prenotazione", "con prenotazione"], explanation: "\"Su prenotazione\" = by booking only." },
      { type: "word-order", prompt: "Put the words in order to say: Noto was rebuilt after the earthquake.", words: ["Noto", "è", "stata", "ricostruita", "dopo", "il", "terremoto."], translation: "Noto was rebuilt after the earthquake.", explanation: "Passive with \"essere\"; feminine for the town." },
      { type: "multiple-choice", question: "What is \"il chiaroscuro\"?", options: ["strong contrast of light and dark", "a type of marble", "a curved façade", "a fountain"], correctIndex: 0, explanation: "\"Chiaro\" (light) + \"scuro\" (dark)." },
      { type: "dictation", audio: "La luce arriva dal buio.", explanation: "\"Buio\" = dark." },
      { type: "speak", text: "Andiamo a San Luigi dei Francesi a vedere il Caravaggio?", prompt: "Say it in Italian: Shall we go to San Luigi dei Francesi to see the Caravaggio?", tip: "Ca-ra-VAG-gio: double g, soft.", explanation: "\"Il Caravaggio\" = a painting by him." },
    ],
  },
  {
    slug: "culture-modern-art",
    level: "IT-Culture",
    number: 5,
    title: "Modern Art",
    summary: "Explore Italian art of the twentieth century: Futurism's love of speed, Modigliani's portraits and De Chirico's silent squares.",
    duration: "15 min",
    sections: [
      {
        heading: "Il Futurismo",
        body: [
          "On 20 February 1909 the poet Filippo Tommaso Marinetti published the Futurist manifesto on the front page of a Paris newspaper. The Futurists wanted to destroy museums and the past, and to celebrate speed, machines, cities and noise; they also glorified war, and many later supported Fascism.",
          "Painters like Giacomo Balla and Umberto Boccioni tried to show movement on a still canvas. Boccioni's bronze figure striding forward, \"Forme uniche della continuità nello spazio\" (1913), is on the Italian twenty-cent coin.",
        ],
        examples: [
          { es: "I futuristi amavano la velocità.", en: "The Futurists loved speed." },
          { es: "Volevano distruggere i musei.", en: "They wanted to destroy museums." },
          { es: "La statua di Boccioni è sui venti centesimi.", en: "Boccioni's statue is on the twenty-cent coin." },
          { es: "Il manifesto è uscito nel 1909.", en: "The manifesto came out in 1909." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Futurists loved speed.", answer: "I futuristi amavano la velocità.", altAnswers: ["I Futuristi amavano la velocità."], explanation: "Imperfetto for a lasting attitude; \"velocità\" with final à." },
          { type: "multiple-choice", question: "What did the Futurists celebrate?", options: ["speed and machines", "the countryside", "ancient Rome", "religious art"], correctIndex: 0, explanation: "They rejected the past and loved modern technology." },
        ],
      },
      {
        heading: "Modigliani",
        body: [
          "Amedeo Modigliani (1884-1920), born in Livorno, moved to Paris at twenty-one and lived there poor and ill. His portraits are instantly recognizable: long necks, oval faces, almond eyes, often without pupils. He sold little in his lifetime and died at thirty-five; today his works sell for record prices.",
          "In 1984 Livorno searched its canals for sculptures Modigliani was said to have thrown there. Three stone heads were found and hailed by experts, until some students revealed they had carved one with a drill as a joke.",
        ],
        examples: [
          { es: "I suoi ritratti hanno il collo lungo.", en: "His portraits have long necks." },
          { es: "È morto giovane e povero.", en: "He died young and poor." },
          { es: "Oggi i suoi quadri valgono milioni.", en: "Today his paintings are worth millions." },
          { es: "Era solo uno scherzo di alcuni studenti.", en: "It was just a prank by some students." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He died young and poor.", answer: "È morto giovane e povero.", altAnswers: ["Morì giovane e povero."], explanation: "\"Morire\" takes \"essere\"." },
          { type: "listen-choose", audio: "Oggi i suoi quadri valgono milioni.", question: "What does it mean?", options: ["Today his paintings are worth millions.", "Today his paintings are lost.", "He painted millions of pictures.", "His paintings are cheap."], correctIndex: 0, explanation: "\"Valere\" = to be worth." },
        ],
      },
      {
        heading: "De Chirico e oltre",
        body: [
          "Giorgio de Chirico (1888-1978), born in Greece to Italian parents, invented \"la pittura metafisica\", metaphysical painting: empty Italian squares, arcades, long shadows, statues and mannequins, and a strange stillness, as if something were about to happen. The Surrealists admired him.",
          "Later came Giorgio Morandi, who painted the same few bottles in his Bologna studio for decades, and Lucio Fontana, who slashed his canvases. Milan's Museo del Novecento and Rome's national gallery of modern art show them all.",
        ],
        examples: [
          { es: "Nei quadri di De Chirico le piazze sono vuote.", en: "In De Chirico's paintings the squares are empty." },
          { es: "Le ombre sono lunghissime.", en: "The shadows are very long." },
          { es: "Morandi dipingeva sempre le stesse bottiglie.", en: "Morandi always painted the same bottles." },
          { es: "Fontana tagliava le tele.", en: "Fontana cut his canvases." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Morandi always painted the same bottles.", answer: "Morandi dipingeva sempre le stesse bottiglie.", explanation: "Imperfetto for a habit." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In De Chirico's paintings [the squares are empty].", sentence: "Nei quadri di De Chirico ___.", answer: "le piazze sono vuote", explanation: "\"Vuote\" agrees with \"piazze\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They wanted to destroy museums.", answer: "Volevano distruggere i musei.", altAnswers: ["Loro volevano distruggere i musei."], explanation: "\"Il museo\" → \"i musei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His portraits have long necks.", answer: "I suoi ritratti hanno il collo lungo.", altAnswers: ["Nei suoi ritratti i colli sono lunghi."], explanation: "Each has one neck: \"il collo lungo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was just a prank.", answer: "Era solo uno scherzo.", altAnswers: ["Era soltanto uno scherzo."], explanation: "\"Uno scherzo\": \"uno\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shadows are very long.", answer: "Le ombre sono lunghissime.", altAnswers: ["Le ombre sono molto lunghe."], explanation: "\"-issime\" = very." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The manifesto came out in 1909.", answer: "Il manifesto è uscito nel 1909.", altAnswers: ["Il manifesto uscì nel 1909.", "Il manifesto è stato pubblicato nel 1909."], explanation: "\"Uscire\" = to be published, come out." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Boccioni's statue is [on the twenty-cent coin].", sentence: "La statua di Boccioni è ___.", answer: "sui venti centesimi", altAnswers: ["sulla moneta da venti centesimi"], explanation: "\"Il centesimo\" = cent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Fontana [cut] his canvases.", sentence: "Fontana ___ le tele.", answer: "tagliava", explanation: "Imperfetto for a repeated action." },
      { type: "word-order", prompt: "Put the words in order to say: Modigliani was born in Livorno.", words: ["Modigliani", "è", "nato", "a", "Livorno."], translation: "Modigliani was born in Livorno.", explanation: "\"Nascere\" with \"essere\"." },
      {
        type: "matching",
        instructions: "Match the artist to the description.",
        pairs: [
          { left: "Boccioni", right: "Futurist sculpture in motion" },
          { left: "Modigliani", right: "long necks, almond eyes" },
          { left: "De Chirico", right: "empty, silent squares" },
          { left: "Morandi", right: "bottles and still lifes" },
          { left: "Fontana", right: "slashed canvases" },
        ],
        explanation: "Five modern Italians.",
      },
      { type: "dictation", audio: "I futuristi amavano la velocità.", explanation: "\"Velocità\": stressed final à." },
      { type: "speak", text: "Mi piacciono molto i quadri di De Chirico: sono misteriosi.", prompt: "Say it in Italian: I really like De Chirico's paintings: they're mysterious.", tip: "Mi PIAC-cio-no: plural because \"quadri\" is plural.", explanation: "\"Piacere\" agrees with what is liked." },
    ],
  },
  {
    slug: "culture-museums",
    level: "IT-Culture",
    number: 6,
    title: "Museums",
    summary: "Plan a visit to the Uffizi, the Vatican Museums and Brera: booking, tickets, free days, rules and the words you need at the entrance.",
    duration: "15 min",
    sections: [
      {
        heading: "Tre grandi musei",
        body: [
          "Florence's \"Galleria degli Uffizi\" was built from 1560 as offices, \"uffizi\" in old Italian, for the Medici; it holds Botticelli, Leonardo, Michelangelo and Caravaggio. The \"Musei Vaticani\" are technically in another state, the Vatican City, and end in the Sistine Chapel. Milan's \"Pinacoteca di Brera\" has Mantegna's foreshortened dead Christ, Raphael's \"Sposalizio della Vergine\" and Hayez's famous \"Il bacio\".",
          "The last Medici, Anna Maria Luisa, left the family's collections to Florence in 1737 on one condition: they must never leave the city.",
        ],
        examples: [
          { es: "Uffizi vuol dire uffici.", en: "Uffizi means offices." },
          { es: "I Musei Vaticani sono in un altro Stato.", en: "The Vatican Museums are in another state." },
          { es: "Il bacio di Hayez è a Brera.", en: "Hayez's The Kiss is in Brera." },
          { es: "Le opere non possono lasciare Firenze.", en: "The works can't leave Florence." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The works can't leave Florence.", answer: "Le opere non possono lasciare Firenze.", altAnswers: ["Le opere non possono uscire da Firenze."], explanation: "\"L'opera\" = work of art; plural \"le opere\"." },
          { type: "multiple-choice", question: "What did \"uffizi\" originally mean?", options: ["offices", "galleries", "palaces", "churches"], correctIndex: 0, explanation: "Old Italian for \"uffici\"." },
        ],
      },
      {
        heading: "Biglietti e prenotazioni",
        body: [
          "Book online for the big museums, especially in spring and summer, or wait in line for hours. Tickets are \"intero\" (full price) or \"ridotto\" (reduced); in Italian state museums under-18s enter free, and on the first Sunday of the month entry is free for everyone. The Vatican Museums usually close on Sundays except the last Sunday of the month, when they're free and very crowded. These rules change, so check the museum's website before you go.",
          "Many Italian museums close on Mondays: check before you go.",
        ],
        examples: [
          { es: "Ho prenotato i biglietti online.", en: "I booked the tickets online." },
          { es: "Un intero e due ridotti, per favore.", en: "One full-price and two reduced tickets, please." },
          { es: "La prima domenica del mese l'ingresso è gratuito.", en: "On the first Sunday of the month entry is free." },
          { es: "Il lunedì il museo è chiuso.", en: "The museum is closed on Mondays." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I booked the tickets online.", answer: "Ho prenotato i biglietti online.", altAnswers: ["Ho prenotato i biglietti su internet.", "Ho prenotato i biglietti in rete."], explanation: "\"Prenotare\" = to book." },
          { type: "listen-choose", audio: "Un intero e due ridotti, per favore.", question: "What tickets do they want?", options: ["one full-price, two reduced", "two full-price, one reduced", "three reduced", "one free, two full-price"], correctIndex: 0, explanation: "\"Intero\" = full price; \"ridotto\" = reduced." },
        ],
      },
      {
        heading: "Le regole",
        body: [
          "Large bags and umbrellas go to \"il guardaroba\" (the cloakroom). Photos are usually allowed without flash: \"vietato usare il flash\". In the Sistine Chapel photos are not allowed and guards ask for silence. Don't touch the works and keep behind the lines.",
          "An \"audioguida\" or a licensed guide makes a huge difference. And don't try to see everything: two hours of attention beats five of exhaustion.",
        ],
        examples: [
          { es: "Lo zaino va lasciato al guardaroba.", en: "The backpack must be left in the cloakroom." },
          { es: "È vietato usare il flash.", en: "Using flash is forbidden." },
          { es: "Vorrei un'audioguida in inglese.", en: "I'd like an audio guide in English." },
          { es: "Silenzio, per favore!", en: "Silence, please!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like an audio guide in English.", answer: "Vorrei un'audioguida in inglese.", explanation: "\"Audioguida\" is feminine: \"un'audioguida\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The backpack [must be left] in the cloakroom.", sentence: "Lo zaino ___ al guardaroba.", answer: "va lasciato", altAnswers: ["deve essere lasciato"], explanation: "\"Andare\" + participle = must be." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum is closed on Mondays.", answer: "Il lunedì il museo è chiuso.", altAnswers: ["Il museo è chiuso il lunedì.", "Il museo il lunedì è chiuso."], explanation: "\"Il lunedì\" = every Monday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Using flash is forbidden.", answer: "È vietato usare il flash.", altAnswers: ["Vietato usare il flash.", "È proibito usare il flash."], explanation: "\"Vietato\" = forbidden." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two full-price tickets, please.", answer: "Due interi, per favore.", altAnswers: ["Due biglietti interi, per favore.", "Due interi, grazie."], explanation: "\"Intero\" = full price." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where's the cloakroom?", answer: "Dov'è il guardaroba?", altAnswers: ["Dove si trova il guardaroba?", "Dove è il guardaroba?"], explanation: "\"Dov'è\" = where is." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the first Sunday of the month entry is free.", answer: "La prima domenica del mese l'ingresso è gratuito.", altAnswers: ["La prima domenica del mese l'ingresso è gratis.", "La prima domenica del mese si entra gratis."], explanation: "\"L'ingresso\" = entry." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Children under eighteen [enter free].", sentence: "I minori di diciotto anni ___.", answer: "entrano gratis", altAnswers: ["entrano gratuitamente"], explanation: "\"Gratis\" = for free." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Is it possible] to take photos?", sentence: "___ fare foto?", answer: "Si possono", altAnswers: ["Si può", "È possibile"], explanation: "\"Si possono fare foto?\": plural to agree with \"foto\"." },
      { type: "word-order", prompt: "Put the words in order to say: The Sistine Chapel is at the end of the tour.", words: ["La", "Cappella", "Sistina", "è", "alla", "fine", "del", "percorso."], translation: "The Sistine Chapel is at the end of the tour.", explanation: "\"Il percorso\" = the route through the museum." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il biglietto intero", right: "full-price ticket" },
          { left: "il biglietto ridotto", right: "reduced ticket" },
          { left: "il guardaroba", right: "cloakroom" },
          { left: "l'audioguida", right: "audio guide" },
          { left: "l'ingresso", right: "entrance, entry" },
        ],
        explanation: "Museum words.",
      },
      { type: "dictation", audio: "Ho prenotato i biglietti online.", explanation: "\"Prenotato\" = booked." },
      { type: "speak", text: "Buongiorno, ho una prenotazione per le dieci a nome Smith.", prompt: "Say it in Italian: Good morning, I have a booking for ten o'clock under the name Smith.", tip: "\"A nome\" = under the name.", explanation: "What you say at the ticket desk." },
    ],
  },
  {
    slug: "culture-unesco-sites",
    level: "IT-Culture",
    number: 7,
    title: "UNESCO Sites",
    summary: "Learn why Italy is at the top of the UNESCO World Heritage list, from historic centers to landscapes and traditions.",
    duration: "15 min",
    sections: [
      {
        heading: "Più di sessanta siti",
        body: [
          "Italy is at the top of the UNESCO World Heritage list, neck and neck with China: more than sixty sites. They include whole historic centers, such as Rome, Florence, Naples and Siena, Venice and its lagoon, and Pompeii; landscapes like the Dolomites, the Amalfi Coast, the Cinque Terre and Etna; and newer entries like Bologna's arcades (2021) and the Via Appia (2024).",
          "UNESCO also lists intangible heritage, \"il patrimonio immateriale\": Neapolitan pizza-making, violin-making in Cremona, Italian opera singing and, since 2025, Italian cooking itself.",
        ],
        examples: [
          { es: "L'Italia è in cima alla lista dei siti UNESCO.", en: "Italy is at the top of the list of UNESCO sites." },
          { es: "Il centro storico di Firenze è patrimonio dell'umanità.", en: "Florence's historic center is World Heritage." },
          { es: "Le Dolomiti sono patrimonio UNESCO dal 2009.", en: "The Dolomites have been UNESCO heritage since 2009." },
          { es: "Anche il canto lirico è nella lista.", en: "Opera singing is on the list too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy is at the top of the list of UNESCO sites.", answer: "L'Italia è in cima alla lista dei siti UNESCO.", altAnswers: ["L'Italia è in testa alla lista dei siti UNESCO.", "L'Italia è in cima all'elenco dei siti UNESCO."], explanation: "\"In cima a\" = at the top of; \"a\" + \"la\" = \"alla\"." },
          { type: "multiple-choice", question: "Which of these is intangible heritage?", options: ["Neapolitan pizza-making", "the Colosseum", "the Dolomites", "Bologna's arcades"], correctIndex: 0, explanation: "A practice, not a place." },
        ],
      },
      {
        heading: "Siti meno famosi",
        body: [
          "Some sites are less crowded and just as remarkable: the trulli of Alberobello, the Sassi of Matera, the Byzantine mosaics of Ravenna, the Valley of the Temples at Agrigento, the nuraghi of Barumini, the villas of the Medici, the vineyard hills of the Langhe and of Prosecco.",
          "Visiting a smaller site in low season, \"in bassa stagione\", is cheaper and kinder to the place. Italians themselves often know the big names but not the small ones: ask locals for their favorite.",
        ],
        examples: [
          { es: "I mosaici di Ravenna sono incredibili.", en: "Ravenna's mosaics are incredible." },
          { es: "Andiamo in bassa stagione.", en: "Let's go in the low season." },
          { es: "C'è molta meno gente.", en: "There are far fewer people." },
          { es: "Qual è il tuo sito preferito?", en: "Which is your favorite site?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's go in the low season.", answer: "Andiamo in bassa stagione.", altAnswers: ["Andiamoci in bassa stagione."], explanation: "\"Andiamo\" = let's go." },
          { type: "listen-choose", audio: "C'è molta meno gente.", question: "What does it mean?", options: ["There are far fewer people.", "There are a lot more people.", "Nobody is there.", "People are very kind."], correctIndex: 0, explanation: "\"Meno gente\": \"gente\" is singular." },
        ],
      },
      {
        heading: "Troppi turisti?",
        body: [
          "Fame has a price: \"l'overtourism\" (Italians use the English word) pushes residents out of historic centers as apartments become short-term rentals. Venice has been charging day-trippers an access fee on its busiest days, and other places limit numbers on paths and beaches; the rules change from year to year, so check before you go.",
          "Responsible visiting means staying longer and spending locally, respecting rules like no swimming in fountains, and dressing modestly in churches: covered shoulders and knees.",
        ],
        examples: [
          { es: "Venezia fa pagare un contributo d'accesso.", en: "Venice charges an access fee." },
          { es: "Nelle chiese bisogna coprire le spalle.", en: "In churches you have to cover your shoulders." },
          { es: "È vietato fare il bagno nelle fontane.", en: "Swimming in fountains is forbidden." },
          { es: "Molti residenti hanno lasciato il centro.", en: "Many residents have left the center." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In churches you have to cover your shoulders.", answer: "Nelle chiese bisogna coprire le spalle.", altAnswers: ["Nelle chiese si devono coprire le spalle.", "In chiesa bisogna coprire le spalle.", "Nelle chiese bisogna coprirsi le spalle."], explanation: "\"Bisogna\" + infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Venice [charges] an access fee.", sentence: "Venezia ___ un contributo d'accesso.", answer: "fa pagare", explanation: "\"Fare pagare\" = to charge." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ravenna's mosaics are incredible.", answer: "I mosaici di Ravenna sono incredibili.", altAnswers: ["I mosaici di Ravenna sono straordinari."], explanation: "\"Incredibile\" → \"incredibili\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which is your favorite site?", answer: "Qual è il tuo sito preferito?", altAnswers: ["Qual è il Suo sito preferito?", "Qual è il vostro sito preferito?"], explanation: "\"Qual è\": no apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Swimming in fountains is forbidden.", answer: "È vietato fare il bagno nelle fontane.", altAnswers: ["Vietato fare il bagno nelle fontane."], explanation: "\"Fare il bagno\" = to swim, bathe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many residents have left the center.", answer: "Molti residenti hanno lasciato il centro.", altAnswers: ["Molti abitanti hanno lasciato il centro."], explanation: "\"Lasciare\" + place takes \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italian cooking is UNESCO heritage.", answer: "La cucina italiana è patrimonio UNESCO.", altAnswers: ["La cucina italiana è patrimonio dell'UNESCO.", "La cucina italiana è patrimonio dell'umanità."], explanation: "Recognized in 2025." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Florence's historic center is [World Heritage].", sentence: "Il centro storico di Firenze è ___.", answer: "patrimonio dell'umanità", altAnswers: ["patrimonio UNESCO"], explanation: "\"Patrimonio dell'umanità\" = World Heritage." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The Dolomites have been UNESCO heritage [since] 2009.", sentence: "Le Dolomiti sono patrimonio UNESCO ___ 2009.", answer: "dal", explanation: "Present + \"dal\" + year for something still true." },
      { type: "word-order", prompt: "Put the words in order to say: There are more than sixty sites.", words: ["Ci", "sono", "più", "di", "sessanta", "siti."], translation: "There are more than sixty sites.", explanation: "\"Più di\" + number." },
      { type: "multiple-choice", question: "Which site was added in 2024?", options: ["the Via Appia", "Pompeii", "the historic center of Rome", "Venice and its lagoon"], correctIndex: 0, explanation: "The ancient Appian Way became a site in 2024." },
      { type: "dictation", audio: "Andiamo in bassa stagione.", explanation: "\"Stagione\" = season." },
      { type: "speak", text: "Vorrei vedere i siti meno famosi, come Ravenna e Matera.", prompt: "Say it in Italian: I'd like to see the less famous sites, like Ravenna and Matera.", tip: "Ma-TE-ra: stress the middle.", explanation: "\"Meno famosi\" = less famous." },
    ],
  },
  {
    slug: "culture-dialogue-at-the-uffizi",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: At the Uffizi",
    summary: "Take a guided visit of the Uffizi with Elena, a Florentine guide, from Botticelli to Caravaggio, and ask questions about the paintings.",
    duration: "15 min",
    sections: [
      {
        heading: "All'ingresso",
        body: [
          "You've booked a guided tour. Guida: \"Buongiorno a tutti, sono Elena, la vostra guida. Avete tutti le cuffie?\" Small groups get headsets, \"le cuffie\", so guides can speak quietly. Elena: \"Lasciate gli zaini al guardaroba e seguitemi.\"",
          "Guides address a group with \"voi\" and the imperative: \"seguitemi\" (follow me), \"guardate\" (look), \"venite qui\" (come here).",
        ],
        examples: [
          { es: "Avete tutti le cuffie?", en: "Do you all have headsets?" },
          { es: "Seguitemi, per favore.", en: "Follow me, please." },
          { es: "Lasciate gli zaini al guardaroba.", en: "Leave your backpacks in the cloakroom." },
          { es: "La visita dura due ore.", en: "The tour lasts two hours." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Follow me, please.", answer: "Seguitemi, per favore.", altAnswers: ["Mi segua, per favore.", "Seguimi, per favore."], explanation: "\"Voi\" imperative + \"mi\": \"seguitemi\"." },
          { type: "multiple-choice", question: "Why do tour groups at the Uffizi wear \"cuffie\"?", options: ["So the guide can speak quietly", "To block out noise from the street", "To listen to music", "To protect the paintings"], correctIndex: 0, explanation: "\"Le cuffie\" = headsets." },
        ],
      },
      {
        heading: "Botticelli",
        body: [
          "Elena: \"Ecco la Nascita di Venere di Botticelli. Che cosa vedete?\" You: \"Una donna su una conchiglia... e il vento che soffia.\" Elena: \"Esatto. È Venere che arriva dal mare. Notate come i capelli si muovono.\" Next to it hangs \"La Primavera\", full of flowers: botanists have identified about 500 plants in it.",
          "You: \"Posso fare una domanda? Chi ha pagato questi quadri?\" Elena: \"Probabilmente la famiglia Medici, o persone vicine ai Medici.\"",
        ],
        examples: [
          { es: "Che cosa vedete?", en: "What do you see?" },
          { es: "È Venere che arriva dal mare.", en: "It's Venus arriving from the sea." },
          { es: "Notate come i capelli si muovono.", en: "Notice how the hair moves." },
          { es: "Posso fare una domanda?", en: "May I ask a question?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "May I ask a question?", answer: "Posso fare una domanda?", altAnswers: ["Posso farle una domanda?", "Posso fare una domanda, per favore?"], explanation: "\"Fare una domanda\" = to ask a question." },
          { type: "listen-choose", audio: "Notate come i capelli si muovono.", question: "What does the guide ask?", options: ["Notice how the hair moves.", "Don't touch the painting.", "Look at the colors.", "Take a photo of the hair."], correctIndex: 0, explanation: "\"Notate\": voi imperative of \"notare\"." },
        ],
      },
      {
        heading: "Fino a Caravaggio",
        body: [
          "The tour continues past Leonardo's \"Annunciazione\", Michelangelo's round \"Tondo Doni\" and Titian's \"Venere di Urbino\", to a room with Caravaggio's \"Medusa\", painted on a shield. Elena: \"Guardate la bocca aperta: sembra che urli ancora.\"",
          "At the end: \"Avete domande? No? Allora grazie e buona giornata!\" You: \"Grazie a Lei, è stata una visita bellissima.\" Thank the guide with \"Lei\" if she used it with you; a tip is welcome but not required.",
        ],
        examples: [
          { es: "Sembra che urli ancora.", en: "It looks as if she's still screaming." },
          { es: "Avete domande?", en: "Do you have any questions?" },
          { es: "Grazie a Lei, è stata una visita bellissima.", en: "Thank you, it was a wonderful tour." },
          { es: "Il quadro è dipinto su uno scudo.", en: "The picture is painted on a shield." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have any questions? (to a group)", answer: "Avete domande?", altAnswers: ["Avete delle domande?", "Ci sono domande?"], explanation: "\"Voi\" for the group." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It looks as if she's [still screaming].", sentence: "Sembra che ___ ancora.", answer: "urli", explanation: "\"Sembra che\" + subjunctive: \"urli\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Leave your backpacks in the cloakroom.", answer: "Lasciate gli zaini al guardaroba.", altAnswers: ["Lasciate gli zaini nel guardaroba."], explanation: "\"Gli zaini\": \"gli\" before z." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tour lasts two hours.", answer: "La visita dura due ore.", altAnswers: ["Il tour dura due ore."], explanation: "\"Durare\" = to last." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you see? (to a group)", answer: "Che cosa vedete?", altAnswers: ["Cosa vedete?", "Che vedete?"], explanation: "\"Vedete\" for voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you, it was a wonderful tour.", answer: "Grazie a Lei, è stata una visita bellissima.", altAnswers: ["Grazie a te, è stata una visita bellissima.", "Grazie, è stata una visita bellissima.", "Grazie a Lei, è stata una visita stupenda."], explanation: "\"Grazie a Lei\" = thank you (in return)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who paid for these paintings?", answer: "Chi ha pagato questi quadri?", altAnswers: ["Chi ha commissionato questi quadri?"], explanation: "\"Pagare\" takes a direct object: no word for for." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A woman on [a shell].", sentence: "Una donna su ___.", answer: "una conchiglia", explanation: "\"La conchiglia\" = shell." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The picture is painted on [a shield].", sentence: "Il quadro è dipinto su ___.", answer: "uno scudo", explanation: "\"Uno\" before s + consonant." },
      { type: "word-order", prompt: "Put the words in order to say: Here's Botticelli's Birth of Venus.", words: ["Ecco", "la", "Nascita", "di", "Venere", "di", "Botticelli."], translation: "Here's Botticelli's Birth of Venus.", explanation: "\"Ecco\" = here is." },
      { type: "multiple-choice", question: "What is Caravaggio's Medusa painted on?", options: ["a shield", "a wall", "a ceiling", "a door"], correctIndex: 0, explanation: "\"Su uno scudo\"." },
      { type: "dictation", audio: "Seguitemi, per favore.", explanation: "\"Seguite\" + \"mi\"." },
      { type: "speak", text: "Scusi, posso fare una domanda? Quando è stato dipinto questo quadro?", prompt: "Say it in Italian: Excuse me, may I ask a question? When was this painting painted?", tip: "DI-pin-to: stress the first syllable.", explanation: "A polite question to the guide." },
    ],
  },
];

export const IT_CULTURE_U06_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a short review for an Italian travel website of a museum, church or site you visited in Italy (or would like to visit). Say where it is and what period it belongs to, describe one work or building and why it impressed you, and give practical advice: booking, tickets, best time to go, rules.",
  minWords: 70,
  maxWords: 150,
  rubric: [
    "Places the site and its period accurately (romanico, gotico, rinascimentale, barocco; nel 1500, nel Seicento)",
    "Describes a work or building with adjectives that agree and with sembrare (sembra vero, le figure sembrano vive)",
    "Gives practical advice with bisogna / si deve / conviene + infinitive and museum words (prenotare, biglietto ridotto, guardaroba)",
    "Uses passato prossimo for the visit and the present for description",
  ],
  modelAnswer: "Ho visitato la Galleria Borghese a Roma a maggio. È una villa del Seicento con una collezione straordinaria di arte barocca. L'opera che mi ha colpito di più è Apollo e Dafne di Bernini: il marmo sembra morbido e le dita di Dafne diventano foglie davanti ai tuoi occhi. Ci sono anche sei quadri di Caravaggio, con la sua luce che arriva dal buio. Consigli pratici: bisogna prenotare online, perché si entra solo su prenotazione e la visita dura due ore. Gli zaini vanno lasciati al guardaroba. Conviene andare la mattina presto. Voto: dieci e lode!",
  explanation: "\"Del Seicento\" and \"arte barocca\" place the site; \"il marmo sembra morbido\" describes the work; \"bisogna prenotare\", \"si entra solo su prenotazione\" and \"conviene andare\" give advice; \"ho visitato\" and \"mi ha colpito\" tell the visit. \"Dieci e lode\" is top marks, ten with honors.",
};
