// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u04.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 4: Family, Saints' Days and
// Festivals. Christmas and Santo Stefano, the Befana, Carnival, Easter and
// Pasquetta, Ferragosto, name days and patron saints, the national holidays
// of 2026 (with San Francesco, 4 October, a holiday again from 2026), and
// Sunday lunch. Intermediate grammar. Dates checked for the 2026 calendar.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U04: Lesson[] = [
  {
    slug: "culture-natale",
    level: "IT-Culture",
    number: 1,
    title: "Christmas",
    summary: "Celebrate an Italian Christmas: the dinner on Christmas Eve, the presepe, panettone and pandoro, and Santo Stefano.",
    duration: "15 min",
    sections: [
      {
        heading: "La vigilia",
        body: [
          "The season starts on 8 December, the Immaculate Conception, \"l'Immacolata\", a public holiday when families put up the tree and the nativity scene. The big meal of Christmas Eve, \"la vigilia\", is \"il cenone\", and in much of the Centre and South it's meatless: fish, seafood, fried vegetables. In Naples eel, \"il capitone\", is a tradition. Many families go to midnight Mass.",
          "On 25 December comes the long lunch, \"il pranzo di Natale\": in the North often tortellini or cappelletti in broth, then roasts. A saying sums up the season: \"Natale con i tuoi, Pasqua con chi vuoi\", Christmas with your family, Easter with whoever you like.",
        ],
        examples: [
          { es: "La vigilia mangiamo pesce.", en: "On Christmas Eve we eat fish." },
          { es: "L'8 dicembre facciamo l'albero.", en: "On December 8 we put up the tree." },
          { es: "Dove passi il Natale?", en: "Where are you spending Christmas?" },
          { es: "Natale con i tuoi, Pasqua con chi vuoi.", en: "Christmas with your family, Easter with whoever you like." },
          { es: "Buon Natale e buone feste!", en: "Merry Christmas and happy holidays!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where are you spending Christmas?", answer: "Dove passi il Natale?", altAnswers: ["Dove passi Natale?", "Dove passate il Natale?", "Dove passa il Natale?", "Dove trascorri il Natale?"], explanation: "\"Passare\" = to spend time." },
          { type: "multiple-choice", question: "What does the saying \"Natale con i tuoi, Pasqua con chi vuoi\" mean?", options: ["Christmas is for family; Easter you can spend with anyone.", "Christmas and Easter are both family holidays.", "Easter is more important than Christmas.", "You should give gifts at Easter."], correctIndex: 0, explanation: "\"I tuoi\" = your family." },
        ],
      },
      {
        heading: "Il presepe",
        body: [
          "The nativity scene, \"il presepe\" (or \"presepio\"), is as important as the tree. Saint Francis staged the first living nativity at Greccio in 1223. In Naples, Via San Gregorio Armeno is a street of workshops making figurines all year, including shepherds, bakers and even famous people of the day.",
          "Families build their presepe with moss, little houses and lights, and the baby Jesus goes in only at midnight on the 24th. Towns stage \"presepi viventi\", living nativity scenes with real people and animals.",
        ],
        examples: [
          { es: "Il bambinello si mette a mezzanotte.", en: "The baby Jesus is put in at midnight." },
          { es: "Facciamo il presepe con il muschio.", en: "We make the nativity scene with moss." },
          { es: "A Napoli si vendono statuine tutto l'anno.", en: "In Naples figurines are sold all year round." },
          { es: "Andiamo a vedere il presepe vivente?", en: "Shall we go and see the living nativity?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Naples figurines are sold all year round.", answer: "A Napoli si vendono statuine tutto l'anno.", altAnswers: ["A Napoli si vendono le statuine tutto l'anno.", "A Napoli vendono statuine tutto l'anno."], explanation: "\"Si vendono\": the verb is plural to agree with \"statuine\"." },
          { type: "listen-choose", audio: "Il bambinello si mette a mezzanotte.", question: "What does it mean?", options: ["The baby Jesus is put in at midnight.", "The baby goes to bed at midnight.", "We open presents at midnight.", "The tree goes up at midnight."], correctIndex: 0, explanation: "\"Il bambinello\" = the baby Jesus figurine." },
        ],
      },
      {
        heading: "Panettone, pandoro e Santo Stefano",
        body: [
          "Two cakes fight for the table: \"il panettone\" from Milan, tall and full of raisins and candied fruit, and \"il pandoro\" from Verona, star-shaped, plain and dusted with sugar. Everyone has a side. In the South you also find \"struffoli\", little fried balls of dough in honey.",
          "26 December, \"Santo Stefano\", is a public holiday too: leftovers, visits, a walk. After lunch families play \"la tombola\", a bingo-like game with numbers drawn from a basket.",
        ],
        examples: [
          { es: "Tu sei più panettone o pandoro?", en: "Are you more of a panettone or a pandoro person?" },
          { es: "Il panettone è nato a Milano.", en: "Panettone was born in Milan." },
          { es: "A Santo Stefano mangiamo gli avanzi.", en: "On December 26 we eat the leftovers." },
          { es: "Dopo pranzo giochiamo a tombola.", en: "After lunch we play tombola." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After lunch we play tombola.", answer: "Dopo pranzo giochiamo a tombola.", altAnswers: ["Dopo il pranzo giochiamo a tombola.", "Dopo pranzo facciamo la tombola."], explanation: "\"Giocare a\" + game." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On December 26 we eat [the leftovers].", sentence: "A Santo Stefano mangiamo ___.", answer: "gli avanzi", explanation: "\"Gli avanzi\" = leftovers." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Christmas Eve we eat fish.", answer: "La vigilia mangiamo pesce.", altAnswers: ["La vigilia mangiamo il pesce.", "Alla vigilia mangiamo pesce.", "La vigilia di Natale mangiamo pesce.", "La vigilia di Natale mangiamo il pesce."], explanation: "\"La vigilia\" = Christmas Eve." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Merry Christmas and happy holidays!", answer: "Buon Natale e buone feste!", explanation: "\"Buone feste\" covers the whole season." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Panettone was born in Milan.", answer: "Il panettone è nato a Milano.", explanation: "\"Nascere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We make the nativity scene with moss.", answer: "Facciamo il presepe con il muschio.", altAnswers: ["Facciamo il presepio con il muschio.", "Facciamo il presepe col muschio."], explanation: "\"Il presepe\" or \"il presepio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On December 8 we put up the tree.", answer: "L'8 dicembre facciamo l'albero.", altAnswers: ["L'otto dicembre facciamo l'albero.", "L'8 dicembre addobbiamo l'albero."], explanation: "\"Fare l'albero\" = to put up the tree; \"l'8\" because otto starts with a vowel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Shall we go and see [the living nativity]?", sentence: "Andiamo a vedere ___?", answer: "il presepe vivente", altAnswers: ["il presepio vivente"], explanation: "\"Vivente\" = living." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Naples [eel] is a tradition.", sentence: "A Napoli ___ è una tradizione.", answer: "il capitone", explanation: "\"Il capitone\" is a large eel eaten on Christmas Eve." },
      { type: "word-order", prompt: "Put the words in order to say: Pandoro comes from Verona.", words: ["Il", "pandoro", "viene", "da", "Verona."], translation: "Pandoro comes from Verona.", explanation: "\"Venire da\" + city." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la vigilia", right: "Christmas Eve" },
          { left: "il cenone", right: "the big festive dinner" },
          { left: "il presepe", right: "the nativity scene" },
          { left: "Santo Stefano", right: "December 26" },
          { left: "l'Immacolata", right: "December 8" },
        ],
        explanation: "The words of the Christmas season.",
      },
      { type: "dictation", audio: "Buon Natale e buone feste!", explanation: "\"Natale\" takes a capital letter: it's a holiday's name." },
      { type: "speak", text: "Quest'anno passo il Natale con i miei e Capodanno con gli amici.", prompt: "Say it in Italian: This year I'm spending Christmas with my family and New Year's with friends.", tip: "Ca-po-DAN-no: hold the double n.", explanation: "\"I miei\" = my family." },
    ],
  },
  {
    slug: "culture-epifania",
    level: "IT-Culture",
    number: 2,
    title: "The Epiphany",
    summary: "Meet the Befana, the old woman who brings sweets on 6 January, and learn how the Epiphany ends the holiday season.",
    duration: "15 min",
    sections: [
      {
        heading: "La Befana",
        body: [
          "6 January, \"l'Epifania\", is a public holiday that celebrates the arrival of the Magi in Bethlehem. Its Italian star is \"la Befana\", an ugly, kind old woman who flies on a broom on the night of the 5th and comes down the chimney. Her name comes from the word \"Epifania\" itself.",
          "Children hang \"la calza\", a stocking, and find it full of sweets in the morning if they've been good; naughty children get \"il carbone\", coal, now usually black sugar candy. A traditional rhyme starts \"La Befana vien di notte con le scarpe tutte rotte\": she comes at night with worn-out shoes.",
        ],
        examples: [
          { es: "La Befana arriva sulla scopa.", en: "The Befana arrives on a broom." },
          { es: "I bambini appendono la calza.", en: "Children hang up the stocking." },
          { es: "Quest'anno ti porta il carbone!", en: "This year she's bringing you coal!" },
          { es: "La calza era piena di caramelle.", en: "The stocking was full of candy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Befana arrives on a broom.", answer: "La Befana arriva sulla scopa.", altAnswers: ["La Befana arriva su una scopa.", "La Befana arriva a cavallo di una scopa."], explanation: "\"Sulla scopa\" = on the broom." },
          { type: "listen-choose", audio: "La calza era piena di caramelle.", question: "What does it mean?", options: ["The stocking was full of candy.", "The stocking was empty.", "The candy was in the shoe.", "The stocking was full of coal."], correctIndex: 0, explanation: "\"Piena di caramelle\" = full of candy." },
        ],
      },
      {
        heading: "Tutte le feste porta via",
        body: [
          "The Epiphany closes the season. A proverb says \"L'Epifania tutte le feste porta via\": the Epiphany takes all the holidays away. Schools reopen, decorations come down, and the January sales, \"i saldi\", are already on.",
          "In Rome a Befana market fills Piazza Navona during the holidays. In parts of the Northeast, villages light big bonfires on the eve of the Epiphany, and the direction of the smoke is read as a forecast for the harvest.",
        ],
        examples: [
          { es: "L'Epifania tutte le feste porta via.", en: "The Epiphany takes all the holidays away." },
          { es: "Il 7 gennaio si torna a scuola.", en: "On January 7 everyone goes back to school." },
          { es: "Togliamo l'albero dopo la Befana.", en: "We take down the tree after the Epiphany." },
          { es: "Sono cominciati i saldi.", en: "The sales have started." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We take down the tree after the Epiphany.", answer: "Togliamo l'albero dopo la Befana.", altAnswers: ["Togliamo l'albero dopo l'Epifania.", "Smontiamo l'albero dopo la Befana.", "Smontiamo l'albero dopo l'Epifania."], explanation: "\"La Befana\" also names the day itself." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The sales] have started.", sentence: "Sono cominciati ___.", answer: "i saldi", explanation: "\"I saldi\" = the seasonal sales." },
        ],
      },
      {
        heading: "Befana, Babbo Natale e Santa Lucia",
        body: [
          "Today most children get presents from \"Babbo Natale\" at Christmas and a stocking from the Befana. In some northern cities, such as Bergamo, Brescia and Verona, gifts come from \"Santa Lucia\" on the night of 12 December, riding a donkey.",
          "A Befana costume is a classic joke: calling someone \"una befana\" means an ugly old woman, so use it only about the real one.",
        ],
        examples: [
          { es: "Che cosa ti ha portato Babbo Natale?", en: "What did Santa bring you?" },
          { es: "A Verona i regali li porta Santa Lucia.", en: "In Verona it's Santa Lucia who brings the presents." },
          { es: "Santa Lucia arriva il 13 dicembre.", en: "Santa Lucia arrives on December 13." },
          { es: "I bambini lasciano un po' di latte.", en: "The children leave a little milk." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did Santa bring you?", answer: "Che cosa ti ha portato Babbo Natale?", altAnswers: ["Cosa ti ha portato Babbo Natale?", "Che ti ha portato Babbo Natale?"], explanation: "\"Babbo Natale\" = Santa Claus; \"ti\" = to you." },
          { type: "multiple-choice", question: "In Bergamo and Verona, who traditionally brings presents in December?", options: ["Santa Lucia", "la Befana", "San Giuseppe", "i Re Magi"], correctIndex: 0, explanation: "Santa Lucia, on the night before 13 December." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Children hang up the stocking.", answer: "I bambini appendono la calza.", altAnswers: ["I bambini appendono le calze."], explanation: "\"Appendere\" = to hang up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This year she's bringing you coal!", answer: "Quest'anno ti porta il carbone!", altAnswers: ["Quest'anno ti porterà il carbone!"], explanation: "Present for a near future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On January 7 everyone goes back to school.", answer: "Il 7 gennaio si torna a scuola.", altAnswers: ["Il sette gennaio si torna a scuola.", "Il 7 gennaio tutti tornano a scuola.", "Il sette gennaio tutti tornano a scuola."], explanation: "Months are lowercase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Epiphany is on January 6.", answer: "L'Epifania è il 6 gennaio.", altAnswers: ["L'Epifania è il sei gennaio.", "L'Epifania cade il 6 gennaio."], explanation: "\"Il\" + day number + month." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The stocking was full of candy.", answer: "La calza era piena di caramelle.", altAnswers: ["La calza era piena di dolci.", "La calza era piena di dolcetti."], explanation: "Imperfetto for a description." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The Epiphany [takes] all the holidays [away].", sentence: "L'Epifania tutte le feste ___.", answer: "porta via", explanation: "\"Portare via\" = to take away." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She comes down [the chimney].", sentence: "Scende dal ___.", answer: "camino", explanation: "\"Il camino\" = the chimney or fireplace (one m); \"il cammino\" is the path." },
      { type: "word-order", prompt: "Put the words in order to say: Naughty children get coal.", words: ["I", "bambini", "cattivi", "ricevono", "il", "carbone."], translation: "Naughty children get coal.", explanation: "\"Cattivo\" = naughty, bad." },
      { type: "multiple-choice", question: "What do good children find in their stocking on 6 January?", options: ["sweets", "coal", "money from the Magi", "a broom"], correctIndex: 0, explanation: "Coal is for the naughty ones." },
      { type: "dictation", audio: "La Befana vien di notte.", explanation: "\"Vien\" is the old shortened form of \"viene\", kept in the rhyme." },
      { type: "speak", text: "Da piccolo trovavo sempre la calza piena di dolci.", prompt: "Say it in Italian: As a child I always found the stocking full of sweets.", tip: "Women say \"da piccola\".", explanation: "Imperfetto for a childhood habit." },
    ],
  },
  {
    slug: "culture-carnevale",
    level: "IT-Culture",
    number: 3,
    title: "Carnival",
    summary: "Go to Carnival in Venice and Viareggio, learn the masks and the fried sweets, and avoid the confetti trap.",
    duration: "15 min",
    sections: [
      {
        heading: "Venezia e Viareggio",
        body: [
          "\"Il Carnevale\" is the season of masks and jokes before Lent. It ends on \"martedì grasso\", Fat Tuesday, which in 2026 fell on 17 February. Venice has the most famous Carnival, with masks like \"la bauta\", a white mask that covers the whole face, and \"la Colombina\", which covers only the eyes, plus costumed crowds in Piazza San Marco.",
          "\"Viareggio\", on the Tuscan coast, is known for giant papier-mâché floats, \"i carri di cartapesta\", that parade along the seafront and mock politicians; its Carnival dates from 1873. In Ivrea, in Piedmont, teams fight a famous battle with oranges.",
        ],
        examples: [
          { es: "A Carnevale ogni scherzo vale.", en: "At Carnival anything goes." },
          { es: "I carri di Viareggio prendono in giro i politici.", en: "Viareggio's floats make fun of politicians." },
          { es: "Ho comprato una maschera a Venezia.", en: "I bought a mask in Venice." },
          { es: "Martedì grasso è l'ultimo giorno di Carnevale.", en: "Fat Tuesday is the last day of Carnival." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought a mask in Venice.", answer: "Ho comprato una maschera a Venezia.", altAnswers: ["A Venezia ho comprato una maschera."], explanation: "\"A\" + city." },
          { type: "multiple-choice", question: "What is Viareggio's Carnival famous for?", options: ["giant papier-mache floats", "a battle with oranges", "a boat race", "masked balls in palaces"], correctIndex: 0, explanation: "\"I carri di cartapesta\"; the oranges are in Ivrea." },
        ],
      },
      {
        heading: "Coriandoli, not confetti",
        body: [
          "Children dress up, \"si mascherano\", and throw \"coriandoli\", small paper circles, and \"stelle filanti\", streamers. Careful: Italian \"confetti\" are sugared almonds, given at weddings and christenings, not paper. Throwing \"confetti\" at someone would hurt.",
          "The saying \"A Carnevale ogni scherzo vale\" means any prank goes at Carnival. Children's favorite costumes are superheroes and princesses; adults may dress as one of the traditional masks, such as Arlecchino or Pulcinella.",
        ],
        examples: [
          { es: "I bambini tirano i coriandoli.", en: "Children throw confetti." },
          { es: "Ai matrimoni si regalano i confetti.", en: "At weddings people give sugared almonds." },
          { es: "Da che cosa ti mascheri?", en: "What are you dressing up as?" },
          { es: "Mi maschero da Arlecchino.", en: "I'm dressing up as Harlequin." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you dressing up as?", answer: "Da che cosa ti mascheri?", altAnswers: ["Da cosa ti mascheri?", "Da che ti mascheri?", "Da cosa ti travesti?"], explanation: "\"Mascherarsi da\" = to dress up as." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Children throw [confetti].", sentence: "I bambini tirano i ___.", answer: "coriandoli", explanation: "Paper confetti = \"coriandoli\"; \"confetti\" are sugared almonds." },
          { type: "listen-choose", audio: "Ai matrimoni si regalano i confetti.", question: "What does it mean?", options: ["At weddings people give sugared almonds.", "At weddings people throw paper confetti.", "At weddings people give flowers.", "Confetti are forbidden at weddings."], correctIndex: 0, explanation: "A false friend: \"i confetti\" are sweets." },
        ],
      },
      {
        heading: "Chiacchiere e castagnole",
        body: [
          "Carnival has its fried sweets. The most common are thin, crisp strips of fried dough dusted with sugar, which change name from place to place: \"chiacchiere\" in Milan and Naples, \"frappe\" in Rome, \"bugie\" in Turin and Genoa, \"cenci\" in Florence, \"crostoli\" and \"galani\" in the Northeast. \"Le castagnole\" are small fried balls; Venice has \"le frittelle\".",
          "Asking what they're called is a safe way to start a campanilismo debate.",
        ],
        examples: [
          { es: "A Roma le chiamano frappe.", en: "In Rome they call them frappe." },
          { es: "Le chiacchiere sono fritte e croccanti.", en: "Chiacchiere are fried and crunchy." },
          { es: "Come si chiamano da voi?", en: "What are they called where you're from?" },
          { es: "Ne mangio sempre troppe.", en: "I always eat too many of them." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are they called where you're from?", answer: "Come si chiamano da voi?", altAnswers: ["Come si chiamano da te?", "Da voi come si chiamano?", "Da te come si chiamano?"], explanation: "\"Da voi\" = where you (all) are from." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I always eat too many of them.", answer: "Ne mangio sempre troppe.", altAnswers: ["Ne mangio sempre troppi."], explanation: "\"Ne\" = of them; \"troppe\" agrees with \"chiacchiere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At Carnival anything goes.", answer: "A Carnevale ogni scherzo vale.", explanation: "The traditional saying." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm dressing up as Harlequin.", answer: "Mi maschero da Arlecchino.", altAnswers: ["Mi vesto da Arlecchino.", "Mi travesto da Arlecchino."], explanation: "\"Da\" + character." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Rome they call them frappe.", answer: "A Roma le chiamano frappe.", altAnswers: ["A Roma si chiamano frappe."], explanation: "\"Le\" = them (feminine)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fat Tuesday is the last day of Carnival.", answer: "Martedì grasso è l'ultimo giorno di Carnevale.", altAnswers: ["Il martedì grasso è l'ultimo giorno di Carnevale.", "Martedì grasso è l'ultimo giorno del Carnevale."], explanation: "\"Grasso\" = fat." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Viareggio's floats make fun of politicians.", answer: "I carri di Viareggio prendono in giro i politici.", explanation: "\"Prendere in giro\" = to make fun of." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They throw confetti and [streamers].", sentence: "Tirano coriandoli e ___.", answer: "stelle filanti", explanation: "\"Stelle filanti\" = streamers." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiacchiere are [fried and crunchy].", sentence: "Le chiacchiere sono ___.", answer: "fritte e croccanti", explanation: "Feminine plural adjectives." },
      { type: "word-order", prompt: "Put the words in order to say: In Ivrea there's a battle with oranges.", words: ["A", "Ivrea", "c'è", "una", "battaglia", "con", "le", "arance."], translation: "In Ivrea there's a battle with oranges.", explanation: "\"La battaglia delle arance\" is held in Ivrea." },
      { type: "multiple-choice", question: "You want to buy paper confetti for a children's party. What do you ask for?", options: ["coriandoli", "confetti", "caramelle", "chiacchiere"], correctIndex: 0, explanation: "\"I confetti\" are sugared almonds." },
      { type: "dictation", audio: "A Carnevale ogni scherzo vale.", explanation: "\"Carnevale\": capital C for the festival." },
      { type: "speak", text: "Quest'anno voglio andare al Carnevale di Venezia con una maschera vera.", prompt: "Say it in Italian: This year I want to go to the Venice Carnival with a real mask.", tip: "MA-sche-ra: sch = sk.", explanation: "\"Vera\" after the noun = real, authentic." },
    ],
  },
  {
    slug: "culture-pasqua",
    level: "IT-Culture",
    number: 4,
    title: "Easter",
    summary: "Celebrate Easter and Pasquetta: the 2026 dates, Holy Week processions, chocolate eggs, the colomba and the Monday picnic.",
    duration: "15 min",
    sections: [
      {
        heading: "La Settimana Santa",
        body: [
          "Easter, \"la Pasqua\", moves every year; in 2026 it fell on 5 April. Holy Week, \"la Settimana Santa\", brings processions, especially in the South: in Sicily and Puglia hooded brotherhoods carry heavy statues through the streets for hours, and Trapani's procession of the \"Misteri\" lasts about a day.",
          "In Florence on Easter Sunday a cart of fireworks explodes in front of the cathedral, \"lo Scoppio del Carro\"; a good blast promises a good harvest.",
        ],
        examples: [
          { es: "Nel 2026 Pasqua è stata il 5 aprile.", en: "In 2026 Easter was on April 5." },
          { es: "La processione dura tutta la notte.", en: "The procession lasts all night." },
          { es: "Le confraternite portano le statue.", en: "The brotherhoods carry the statues." },
          { es: "Buona Pasqua!", en: "Happy Easter!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The procession lasts all night.", answer: "La processione dura tutta la notte.", explanation: "\"Durare\" = to last; \"tutta la notte\" = all night." },
          { type: "multiple-choice", question: "What happens at \"lo Scoppio del Carro\" in Florence?", options: ["A cart of fireworks explodes outside the cathedral.", "A horse race in the main square.", "A procession with hooded brotherhoods.", "A giant egg is opened."], correctIndex: 0, explanation: "\"Scoppio\" = explosion, \"carro\" = cart." },
        ],
      },
      {
        heading: "Uova e colomba",
        body: [
          "Children get big hollow chocolate eggs, \"le uova di Pasqua\", wrapped in shiny paper with a surprise inside, \"la sorpresa\". The Easter cake is \"la colomba\", a dove-shaped cousin of panettone with almonds and sugar on top.",
          "Lunch often features lamb, \"l'agnello\", and regional specialties: \"la pastiera\" in Naples, a cake of ricotta and wheat berries, and \"il casatiello\", a savory bread with eggs baked into the top.",
        ],
        examples: [
          { es: "Che sorpresa c'era nell'uovo?", en: "What surprise was in the egg?" },
          { es: "La colomba ha la forma di una colomba.", en: "The colomba is shaped like a dove." },
          { es: "A Pasqua mangiamo l'agnello.", en: "At Easter we eat lamb." },
          { es: "Mia zia fa la pastiera ogni anno.", en: "My aunt makes pastiera every year." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What surprise was in the egg?", answer: "Che sorpresa c'era nell'uovo?", altAnswers: ["Quale sorpresa c'era nell'uovo?", "Cosa c'era nell'uovo?"], explanation: "\"Uovo\" is masculine singular: \"nell'uovo\"; plural \"le uova\"." },
          { type: "listen-choose", audio: "A Pasqua mangiamo l'agnello.", question: "What do they eat at Easter?", options: ["lamb", "fish", "chocolate only", "pasta"], correctIndex: 0, explanation: "\"L'agnello\" = lamb." },
        ],
      },
      {
        heading: "Pasquetta",
        body: [
          "Easter Monday, \"il Lunedì dell'Angelo\" but always called \"Pasquetta\", is a public holiday; in 2026 it was 6 April. Italians spend it outdoors with friends: a \"gita fuori porta\" (a trip out of town), a picnic, a barbecue in the countryside or at the beach, rain permitting.",
          "That's the meaning of \"Pasqua con chi vuoi\": Easter, and above all Pasquetta, is for friends. Traffic jams on the way back are part of the ritual.",
        ],
        examples: [
          { es: "A Pasquetta facciamo una grigliata in campagna.", en: "On Easter Monday we have a barbecue in the countryside." },
          { es: "Andiamo fuori porta?", en: "Shall we go out of town?" },
          { es: "Speriamo che non piova!", en: "Let's hope it doesn't rain!" },
          { es: "Al ritorno abbiamo trovato traffico.", en: "On the way back we hit traffic." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Easter Monday we have a barbecue in the countryside.", answer: "A Pasquetta facciamo una grigliata in campagna.", altAnswers: ["Il giorno di Pasquetta facciamo una grigliata in campagna.", "A Pasquetta facciamo un barbecue in campagna."], explanation: "\"Una grigliata\" = a barbecue." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Let's hope [it doesn't rain]!", sentence: "Speriamo che ___!", answer: "non piova", explanation: "\"Sperare che\" takes the subjunctive: \"piova\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Happy Easter!", answer: "Buona Pasqua!", explanation: "\"Pasqua\" is feminine: \"buona\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At Easter we eat lamb.", answer: "A Pasqua mangiamo l'agnello.", altAnswers: ["Per Pasqua mangiamo l'agnello."], explanation: "\"A Pasqua\" = at Easter." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go out of town?", answer: "Andiamo fuori porta?", altAnswers: ["Facciamo una gita fuori porta?", "Andiamo fuori città?"], explanation: "\"Fuori porta\" = outside the city gate." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My aunt makes pastiera every year.", answer: "Mia zia fa la pastiera ogni anno.", altAnswers: ["Mia zia fa la pastiera tutti gli anni."], explanation: "No article with \"mia zia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The brotherhoods carry the statues.", answer: "Le confraternite portano le statue.", explanation: "\"Statua\" → \"statue\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Children get [chocolate eggs].", sentence: "I bambini ricevono ___.", answer: "le uova di cioccolato", altAnswers: ["uova di cioccolato", "le uova di Pasqua"], explanation: "\"L'uovo\" → \"le uova\": masculine singular, feminine plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On the way back [we hit traffic].", sentence: "Al ritorno ___.", answer: "abbiamo trovato traffico", altAnswers: ["abbiamo trovato il traffico"], explanation: "\"Trovare traffico\" = to run into traffic." },
      { type: "word-order", prompt: "Put the words in order to say: The colomba is shaped like a dove.", words: ["La", "colomba", "ha", "la", "forma", "di", "una", "colomba."], translation: "The colomba is shaped like a dove.", explanation: "\"Avere la forma di\" = to be shaped like." },
      { type: "multiple-choice", question: "When was Pasquetta in 2026?", options: ["Monday 6 April", "Sunday 5 April", "Monday 13 April", "Friday 3 April"], correctIndex: 0, explanation: "The day after Easter Sunday, 5 April 2026." },
      { type: "dictation", audio: "A Pasquetta facciamo una gita fuori porta.", explanation: "\"Gita\" = trip." },
      { type: "speak", text: "Natale con i tuoi, Pasqua con chi vuoi: a Pasquetta vado al mare con gli amici.", prompt: "Say it in Italian: Christmas with your family, Easter with whoever you like: on Easter Monday I'm going to the beach with friends.", tip: "Pa-SQUET-ta: hold the double t.", explanation: "The proverb plus your plans." },
    ],
  },
  {
    slug: "culture-ferragosto",
    level: "IT-Culture",
    number: 5,
    title: "Ferragosto",
    summary: "Understand Ferragosto, 15 August, the emptied cities and the great summer exodus to the beaches and mountains.",
    duration: "15 min",
    sections: [
      {
        heading: "Il 15 agosto",
        body: [
          "\"Ferragosto\" is 15 August, a public holiday that falls on a Saturday in 2026. The name comes from \"Feriae Augusti\", the rest days the emperor Augustus introduced in 18 BC; the Church later placed the Assumption of Mary, \"l'Assunta\", on the same day.",
          "It's the heart of the Italian summer. Many Italians take their \"ferie\", their annual vacation, in August, and a lot of businesses close for two or three weeks around the 15th. Ferragosto itself is spent at the beach, in the mountains, or around a long table: a barbecue, a picnic, fireworks at night.",
        ],
        examples: [
          { es: "Ferragosto è il 15 agosto.", en: "Ferragosto is on August 15." },
          { es: "Ad agosto prendo tre settimane di ferie.", en: "In August I take three weeks of vacation." },
          { es: "A Ferragosto andiamo al mare.", en: "At Ferragosto we go to the beach." },
          { es: "La sera ci sono i fuochi d'artificio.", en: "In the evening there are fireworks." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In August I take three weeks of vacation.", answer: "Ad agosto prendo tre settimane di ferie.", altAnswers: ["In agosto prendo tre settimane di ferie.", "Ad agosto faccio tre settimane di ferie.", "In agosto faccio tre settimane di ferie."], explanation: "\"Le ferie\" = paid vacation from work; it's always plural." },
          { type: "multiple-choice", question: "Where does the name Ferragosto come from?", options: ["Feriae Augusti, Augustus's rest days", "the iron (ferro) of August", "a saint called Ferro", "a Roman battle"], correctIndex: 0, explanation: "The emperor Augustus gave the name to the holiday." },
        ],
      },
      {
        heading: "Città vuote",
        body: [
          "In mid-August big cities empty out. Shops and bakeries hang the sign \"chiuso per ferie\", and those who stay enjoy free parking and quiet streets, but have to hunt for an open pharmacy. Newspapers call the departures \"l'esodo\", the exodus, and the return at the end of the month \"il controesodo\".",
          "On the busiest days the motorways are marked \"bollino nero\", a black dot, on traffic forecasts: expect long queues. Italians leave at dawn or at night to avoid them.",
        ],
        examples: [
          { es: "Ad agosto Milano è vuota.", en: "In August Milan is empty." },
          { es: "Il panificio è chiuso per ferie.", en: "The bakery is closed for vacation." },
          { es: "Sabato è bollino nero in autostrada.", en: "Saturday is a black-dot day on the motorways." },
          { es: "Partiamo all'alba per evitare il traffico.", en: "We're leaving at dawn to avoid the traffic." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're leaving at dawn to avoid the traffic.", answer: "Partiamo all'alba per evitare il traffico.", altAnswers: ["Partiamo all'alba per non trovare traffico.", "Noi partiamo all'alba per evitare il traffico."], explanation: "\"Per\" + infinitive = in order to." },
          { type: "listen-choose", audio: "Ad agosto Milano è vuota.", question: "What does it mean?", options: ["In August Milan is empty.", "In August Milan is crowded.", "Milan is closed in August.", "Milan is hot in August."], correctIndex: 0, explanation: "\"Vuota\" = empty, feminine like every city." },
        ],
      },
      {
        heading: "Buon Ferragosto!",
        body: [
          "People wish each other \"Buon Ferragosto!\". By the sea there are bonfires and midnight swims; in the mountains, lunch at a \"rifugio\" (a mountain hut). Many towns hold a festival for \"l'Assunta\", with a procession and a fair.",
          "After Ferragosto the summer starts to end: Italians say \"dopo Ferragosto\" to mean late summer, when the first storms arrive and people return to work.",
        ],
        examples: [
          { es: "Buon Ferragosto a tutti!", en: "Happy Ferragosto, everyone!" },
          { es: "Abbiamo fatto il bagno a mezzanotte.", en: "We went for a swim at midnight." },
          { es: "Pranziamo in un rifugio in montagna.", en: "We're having lunch at a mountain hut." },
          { es: "Ne parliamo dopo Ferragosto.", en: "Let's talk about it after Ferragosto." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's talk about it after Ferragosto.", answer: "Ne parliamo dopo Ferragosto.", altAnswers: ["Ne parliamo dopo il Ferragosto."], explanation: "\"Ne\" = about it." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [went for a swim] at midnight.", sentence: "Abbiamo ___ a mezzanotte.", answer: "fatto il bagno", explanation: "\"Fare il bagno\" = to go for a swim (or take a bath)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At Ferragosto we go to the beach.", answer: "A Ferragosto andiamo al mare.", altAnswers: ["Per Ferragosto andiamo al mare."], explanation: "\"Al mare\" = to the beach / seaside." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bakery is closed for vacation.", answer: "Il panificio è chiuso per ferie.", altAnswers: ["Il forno è chiuso per ferie."], explanation: "\"Chiuso per ferie\" is the classic August sign." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In August Milan is empty.", answer: "Ad agosto Milano è vuota.", altAnswers: ["In agosto Milano è vuota."], explanation: "Cities are feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Happy Ferragosto, everyone!", answer: "Buon Ferragosto a tutti!", explanation: "\"Buon\" before a masculine noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the evening there are fireworks.", answer: "La sera ci sono i fuochi d'artificio.", altAnswers: ["Di sera ci sono i fuochi d'artificio.", "La sera ci sono i fuochi."], explanation: "\"I fuochi d'artificio\" = fireworks." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We're having lunch [at a mountain hut].", sentence: "Pranziamo ___ in montagna.", answer: "in un rifugio", explanation: "\"Il rifugio\" = mountain hut." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The return at the end of August is [the counter-exodus].", sentence: "Il ritorno a fine agosto è ___.", answer: "il controesodo", explanation: "\"L'esodo\" out, \"il controesodo\" back." },
      { type: "word-order", prompt: "Put the words in order to say: Many shops close in August.", words: ["Molti", "negozi", "chiudono", "ad", "agosto."], translation: "Many shops close in August.", explanation: "\"Ad\" before a vowel." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "le ferie", right: "vacation from work" },
          { left: "l'esodo", right: "the mass departure" },
          { left: "l'autostrada", right: "the motorway" },
          { left: "l'alba", right: "dawn" },
          { left: "l'Assunta", right: "the Assumption" },
        ],
        explanation: "Summer words.",
      },
      { type: "dictation", audio: "Ferragosto è il 15 agosto.", explanation: "Months lowercase, the holiday capitalized." },
      { type: "speak", text: "Quest'anno a Ferragosto restiamo in città: è tranquilla e si parcheggia facilmente.", prompt: "Say it in Italian: This year we're staying in the city for Ferragosto: it's quiet and parking is easy.", tip: "Fer-ra-GO-sto: roll the double r.", explanation: "\"Si parcheggia\" = one parks." },
    ],
  },
  {
    slug: "culture-onomastico-patron-saints",
    level: "IT-Culture",
    number: 6,
    title: "Name Days and Patron Saints",
    summary: "Wish someone a happy name day, learn the big patron saints' days, and know when a city takes its own holiday.",
    duration: "15 min",
    sections: [
      {
        heading: "L'onomastico",
        body: [
          "Most Italian first names belong to a saint, and the saint's day is your \"onomastico\", your name day. It's smaller than a birthday, \"il compleanno\", but family and friends send wishes: \"Auguri, oggi è il tuo onomastico!\". In some families, especially in the South, it used to matter as much as the birthday.",
          "Some name days everyone knows: Giuseppe on 19 March, which is also Father's Day in Italy; Antonio on 13 June; Giovanni on 24 June; Pietro and Paolo on 29 June; Francesco on 4 October; Lucia on 13 December.",
        ],
        examples: [
          { es: "Auguri, oggi è il tuo onomastico!", en: "Best wishes, it's your name day today!" },
          { es: "San Giuseppe è anche la festa del papà.", en: "Saint Joseph's day is also Father's Day." },
          { es: "Quando è il tuo onomastico?", en: "When is your name day?" },
          { es: "Il mio onomastico è il 24 giugno.", en: "My name day is June 24." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When is your name day?", answer: "Quando è il tuo onomastico?", altAnswers: ["Quand'è il tuo onomastico?", "Quando è il Suo onomastico?", "Quand'è il Suo onomastico?"], explanation: "\"Quand'è\" is the usual spoken form." },
          { type: "multiple-choice", question: "What else is celebrated in Italy on 19 March, Saint Joseph's day?", options: ["Father's Day", "Mother's Day", "Women's Day", "Children's Day"], correctIndex: 0, explanation: "\"La festa del papà\" is on San Giuseppe." },
        ],
      },
      {
        heading: "Il santo patrono",
        body: [
          "Every town has a patron saint, \"il santo patrono\", and the saint's day is a local holiday: offices and schools in that city close. Milan celebrates Sant'Ambrogio on 7 December, Venice San Marco on 25 April, Rome Saints Peter and Paul on 29 June, and Florence, Genoa and Turin San Giovanni on 24 June.",
          "Naples has San Gennaro on 19 September, when crowds wait in the cathedral for the saint's dried blood to liquefy, a sign of good luck for the city. Palermo's \"Festino\" for Santa Rosalia, in mid-July, fills the city with processions and fireworks.",
        ],
        examples: [
          { es: "Il 7 dicembre a Milano è festa.", en: "On December 7 it's a holiday in Milan." },
          { es: "Il patrono di Napoli è San Gennaro.", en: "The patron saint of Naples is San Gennaro." },
          { es: "Domani gli uffici sono chiusi per il patrono.", en: "Tomorrow the offices are closed for the patron saint." },
          { es: "Il sangue si è sciolto: buon segno!", en: "The blood has liquefied: a good sign!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The patron saint of Naples is San Gennaro.", answer: "Il patrono di Napoli è San Gennaro.", altAnswers: ["Il santo patrono di Napoli è San Gennaro."], explanation: "\"Il patrono\" for short." },
          { type: "listen-choose", audio: "Il 7 dicembre a Milano è festa.", question: "What does it mean?", options: ["On December 7 it's a holiday in Milan.", "On December 7 Milan has a market.", "On December 7 Milan is closed to traffic.", "On December 7 it snows in Milan."], correctIndex: 0, explanation: "\"È festa\" = it's a holiday." },
        ],
      },
      {
        heading: "La festa del paese",
        body: [
          "In small towns the patron saint's festival is the event of the year: a procession with the statue, a band, market stalls, lights strung across the streets, called \"le luminarie\" in Puglia, and fireworks. Emigrants come home for it, and it's often in summer.",
          "Even non-religious Italians go: it's about belonging. If you're invited, go: \"Vieni alla festa del paese?\" is a real welcome.",
        ],
        examples: [
          { es: "Vieni alla festa del paese?", en: "Are you coming to the town festival?" },
          { es: "Le luminarie sono bellissime.", en: "The festival lights are beautiful." },
          { es: "La banda suona in piazza.", en: "The band is playing in the square." },
          { es: "Tornano tutti per la festa.", en: "Everyone comes back for the festival." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming to the town festival?", answer: "Vieni alla festa del paese?", altAnswers: ["Viene alla festa del paese?", "Venite alla festa del paese?"], explanation: "\"La festa del paese\" = the town festival." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The band [is playing] in the square.", sentence: "La banda ___ in piazza.", answer: "suona", explanation: "\"Suonare\" = to play music." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Best wishes, it's your name day today!", answer: "Auguri, oggi è il tuo onomastico!", altAnswers: ["Tanti auguri, oggi è il tuo onomastico!", "Auguri, oggi è il Suo onomastico!"], explanation: "\"Auguri\" = best wishes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My name day is June 24.", answer: "Il mio onomastico è il 24 giugno.", altAnswers: ["Il mio onomastico è il ventiquattro giugno."], explanation: "\"Il\" + day + month." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow the offices are closed.", answer: "Domani gli uffici sono chiusi.", explanation: "\"Gli uffici\": \"gli\" before a vowel." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The festival lights are beautiful.", answer: "Le luminarie sono bellissime.", altAnswers: ["Le luminarie sono molto belle."], explanation: "\"Luminarie\" is feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone comes back for the festival.", answer: "Tornano tutti per la festa.", altAnswers: ["Tutti tornano per la festa."], explanation: "\"Tutti\" with a plural verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Saint Joseph's day is also [Father's Day].", sentence: "San Giuseppe è anche ___.", answer: "la festa del papà", explanation: "\"Papà\" ends in a stressed à." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The blood [has liquefied]: a good sign!", sentence: "Il sangue ___: buon segno!", answer: "si è sciolto", explanation: "\"Sciogliersi\" = to melt, liquefy; reflexive, so \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: Every town has its patron saint.", words: ["Ogni", "città", "ha", "il", "suo", "patrono."], translation: "Every town has its patron saint.", explanation: "\"Ogni\" + singular." },
      {
        type: "matching",
        instructions: "Match the city to its patron saint's day.",
        pairs: [
          { left: "Milano: Sant'Ambrogio", right: "December 7" },
          { left: "Venezia: San Marco", right: "April 25" },
          { left: "Roma: San Pietro e San Paolo", right: "June 29" },
          { left: "Napoli: San Gennaro", right: "September 19" },
          { left: "Firenze: San Giovanni", right: "June 24" },
        ],
        explanation: "Local holidays in the big cities.",
      },
      { type: "dictation", audio: "Quando è il tuo onomastico?", explanation: "\"Onomastico\": stress on -MA-." },
      { type: "speak", text: "Tanti auguri, Francesco! Buon onomastico!", prompt: "Say it in Italian: Best wishes, Francesco! Happy name day!", tip: "O-no-MA-sti-co: stress the third syllable.", explanation: "Name-day wishes on 4 October." },
    ],
  },
  {
    slug: "culture-national-holidays",
    level: "IT-Culture",
    number: 7,
    title: "National Holidays",
    summary: "Learn Italy's national holidays in the 2026 calendar, what 25 April, 1 May, 2 June and 4 November commemorate, and how to make a ponte.",
    duration: "15 min",
    sections: [
      {
        heading: "Le feste civili",
        body: [
          "Italy has four civic holidays. 25 April, \"la Festa della Liberazione\", marks the liberation from Nazi occupation and Fascism in 1945. 1 May is \"la Festa dei Lavoratori\", Labor Day, with a huge free concert in Rome. 2 June is \"la Festa della Repubblica\": on 2 and 3 June 1946 Italians voted in a referendum to replace the monarchy with a republic, so 2026 was the eightieth anniversary. Rome holds a military parade, and the air force team, \"le Frecce Tricolori\", draws the flag in the sky.",
          "4 November, the Day of National Unity and the Armed Forces, remembers the end of the First World War for Italy in 1918. It's a day of ceremonies, but since 1977 it's not a day off.",
        ],
        examples: [
          { es: "Il 25 aprile si festeggia la Liberazione.", en: "On April 25 Italy celebrates the Liberation." },
          { es: "Il 2 giugno è la Festa della Repubblica.", en: "June 2 is Republic Day." },
          { es: "Nel 1946 gli italiani hanno scelto la Repubblica.", en: "In 1946 Italians chose the Republic." },
          { es: "Il 4 novembre non è un giorno festivo.", en: "November 4 isn't a day off." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "June 2 is Republic Day.", answer: "Il 2 giugno è la Festa della Repubblica.", altAnswers: ["Il due giugno è la Festa della Repubblica.", "Il 2 giugno è la festa della Repubblica."], explanation: "Holiday names keep their capitals; months don't." },
          { type: "multiple-choice", question: "What happened in Italy in June 1946?", options: ["A referendum chose the republic over the monarchy.", "The Second World War ended.", "Rome became the capital.", "Women got the right to work."], correctIndex: 0, explanation: "On 2-3 June 1946 Italians voted for the Republic; women voted nationally for the first time too." },
        ],
      },
      {
        heading: "Il calendario 2026",
        body: [
          "The days off in 2026: \"Capodanno\" (1 January, Thursday), the Epiphany (6 January, Tuesday), Easter Monday (6 April), 25 April (Saturday), 1 May (Friday), 2 June (Tuesday), Ferragosto (15 August, Saturday), All Saints, \"Ognissanti\" (1 November, Sunday), the Immacolata (8 December, Tuesday), Christmas (Friday) and Santo Stefano (Saturday), plus your local patron saint.",
          "New in 2026: 4 October, the feast of Saint Francis of Assisi, patron saint of Italy, became a national holiday again after almost fifty years. In 2026 it fell on a Sunday. Holidays that fall on a weekend are simply lost; they don't move to Monday.",
        ],
        examples: [
          { es: "Quest'anno il 25 aprile cade di sabato.", en: "This year April 25 falls on a Saturday." },
          { es: "Il 4 ottobre è di nuovo festa nazionale.", en: "October 4 is a national holiday again." },
          { es: "Se cade di domenica, la festa si perde.", en: "If it falls on a Sunday, the holiday is lost." },
          { es: "Il primo maggio cade di venerdì: weekend lungo!", en: "May 1 falls on a Friday: long weekend!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This year April 25 falls on a Saturday.", answer: "Quest'anno il 25 aprile cade di sabato.", altAnswers: ["Quest'anno il venticinque aprile cade di sabato.", "Quest'anno il 25 aprile cade sabato."], explanation: "\"Cadere di\" + day = to fall on." },
          { type: "listen-choose", audio: "Il 4 ottobre è di nuovo festa nazionale.", question: "What does it mean?", options: ["October 4 is a national holiday again.", "October 4 is no longer a holiday.", "October 4 is a local holiday.", "October 4 is a new school day."], correctIndex: 0, explanation: "\"Di nuovo\" = again." },
        ],
      },
      {
        heading: "Fare il ponte",
        body: [
          "When a holiday falls on a Tuesday or Thursday, many Italians take the day in between off as well: \"fare il ponte\", to make a bridge. In 2026, with 2 June and 8 December on Tuesdays, plenty of people took Monday off for a four-day weekend.",
          "Schools often close for the ponte too, and trains and motorways fill up. Ask colleagues early: \"Fai il ponte?\".",
        ],
        examples: [
          { es: "Fai il ponte?", en: "Are you taking the bridge day off?" },
          { es: "Faccio il ponte e parto venerdì sera.", en: "I'm taking the bridge day and leaving Friday evening." },
          { es: "Con il ponte abbiamo quattro giorni liberi.", en: "With the bridge day we have four days off." },
          { es: "Le scuole restano chiuse anche lunedì.", en: "Schools stay closed on Monday too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With the bridge day we have four days off.", answer: "Con il ponte abbiamo quattro giorni liberi.", altAnswers: ["Col ponte abbiamo quattro giorni liberi.", "Con il ponte abbiamo quattro giorni di vacanza."], explanation: "\"Giorni liberi\" = days off." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Are you [taking the bridge day off]?", sentence: "___ il ponte?", answer: "Fai", altAnswers: ["Fa", "Fate"], explanation: "\"Fare il ponte\" = to take the bridge day off." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On April 25 Italy celebrates the Liberation.", answer: "Il 25 aprile si festeggia la Liberazione.", altAnswers: ["Il 25 aprile l'Italia festeggia la Liberazione.", "Il 25 aprile si celebra la Liberazione."], explanation: "\"Si festeggia\" = is celebrated." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "November 4 isn't a day off.", answer: "Il 4 novembre non è un giorno festivo.", altAnswers: ["Il quattro novembre non è un giorno festivo.", "Il 4 novembre non è festa."], explanation: "\"Giorno festivo\" = public holiday, day off." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "May 1 falls on a Friday.", answer: "Il primo maggio cade di venerdì.", altAnswers: ["Il primo maggio cade venerdì.", "Il 1 maggio cade di venerdì."], explanation: "The first of the month is \"il primo\", not \"l'uno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In 1946 Italians chose the Republic.", answer: "Nel 1946 gli italiani hanno scelto la Repubblica.", altAnswers: ["Nel 1946 gli Italiani hanno scelto la Repubblica."], explanation: "\"Nel\" + year; nationalities lowercase." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm taking the bridge day.", answer: "Faccio il ponte.", altAnswers: ["Io faccio il ponte."], explanation: "\"Fare il ponte\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If it falls on a Sunday, [the holiday is lost].", sentence: "Se cade di domenica, ___.", answer: "la festa si perde", explanation: "\"Si perde\" = is lost." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "November 1 is [All Saints' Day].", sentence: "Il primo novembre è ___.", answer: "Ognissanti", altAnswers: ["la festa di Ognissanti", "Tutti i Santi"], explanation: "\"Ognissanti\" = All Saints." },
      { type: "word-order", prompt: "Put the words in order to say: Saint Francis is the patron saint of Italy.", words: ["San", "Francesco", "è", "il", "patrono", "d'Italia."], translation: "Saint Francis is the patron saint of Italy.", explanation: "Since 2026 his day, 4 October, is a holiday again." },
      { type: "multiple-choice", question: "Which of these was NOT a day off in Italy in 2026?", options: ["4 novembre", "2 giugno", "25 aprile", "8 dicembre"], correctIndex: 0, explanation: "4 November is commemorated but hasn't been a day off since 1977." },
      { type: "dictation", audio: "Il 2 giugno è la Festa della Repubblica.", explanation: "\"Giugno\": gn like the ny in canyon." },
      { type: "speak", text: "Il 2 giugno cade di martedì, quindi faccio il ponte e vado al mare.", prompt: "Say it in Italian: June 2 falls on a Tuesday, so I'm taking the bridge day and going to the beach.", tip: "GIU-gno: soft g, then gn.", explanation: "\"Quindi\" = so." },
    ],
  },
  {
    slug: "culture-dialogue-family-sunday",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: Sunday Lunch with the Family",
    summary: "Join your partner's family for the pranzo della domenica: arriving, eating more than you planned, the questions, and leaving with leftovers.",
    duration: "15 min",
    sections: [
      {
        heading: "Si arriva all'una",
        body: [
          "Luca takes you to his parents' house in Bari for Sunday lunch, \"il pranzo della domenica\". His mother has been cooking the ragù since early morning. You bring pastries from the pasticceria. Mamma: \"Ciao, entra, entra! Non dovevi disturbarti!\" You: \"Si figuri, è un piacere.\"",
          "\"Non dovevi\", you shouldn't have, is the ritual answer to any gift. Use \"Lei\" with his parents until they tell you \"Dammi del tu!\", give me tu, which may happen in five minutes.",
        ],
        examples: [
          { es: "Entra, entra! Accomodati.", en: "Come in, come in! Make yourself comfortable." },
          { es: "Non dovevi disturbarti!", en: "You shouldn't have gone to the trouble!" },
          { es: "Si figuri, è un piacere.", en: "Not at all, it's a pleasure." },
          { es: "Dammi del tu!", en: "Call me tu!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not at all, it's a pleasure. (to his mother, formal)", answer: "Si figuri, è un piacere.", altAnswers: ["Si figuri, è un piacere!", "Ma si figuri, è un piacere."], explanation: "\"Si figuri\" is the \"Lei\" form; with \"tu\" it's \"Figurati\"." },
          { type: "multiple-choice", question: "Luca's mother says \"Dammi del tu!\". What does she want?", options: ["You to use tu with her", "You to give her the pastries", "You to sit down", "You to call her by her surname"], correctIndex: 0, explanation: "\"Dare del tu\" = to address someone with \"tu\"." },
        ],
      },
      {
        heading: "Mangia, mangia!",
        body: [
          "Antipasti, then orecchiette with ragù, then the meat from the ragù, then salad, fruit, dessert, coffee. Papà: \"Ne vuoi ancora?\" You: \"Grazie, era buonissimo, ma sono pieno.\" Mamma: \"Ma come, hai mangiato pochissimo!\"",
          "Refusing once is not enough; the second or third \"no\" is taken seriously. Praise the cook specifically: \"Il ragù è squisito, qual è il segreto?\".",
        ],
        examples: [
          { es: "Ne vuoi ancora?", en: "Would you like some more?" },
          { es: "Grazie, ma sono pieno.", en: "Thanks, but I'm full." },
          { es: "Ma come, hai mangiato pochissimo!", en: "What? You've hardly eaten anything!" },
          { es: "Il ragù è squisito, qual è il segreto?", en: "The ragù is delicious, what's the secret?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thanks, but I'm full.", answer: "Grazie, ma sono pieno.", altAnswers: ["Grazie, ma sono piena.", "Grazie, ma non ce la faccio più."], explanation: "\"Pieno\" / \"piena\" agree with the speaker." },
          { type: "listen-choose", audio: "Ma come, hai mangiato pochissimo!", question: "What does she say?", options: ["You've hardly eaten anything!", "You've eaten too much!", "How did you eat so fast?", "Have you eaten already?"], correctIndex: 0, explanation: "\"Pochissimo\" = very little." },
        ],
      },
      {
        heading: "Le domande",
        body: [
          "Over coffee, the questions start. Zia: \"E tu che lavoro fai?\" \"Da quanto tempo state insieme?\" \"E quando vi sposate?\" It's curiosity, not rudeness; answer with humor: \"Con calma!\". At three the men may drift to the TV for the football.",
          "Leaving takes half an hour, and you won't go empty-handed. Mamma: \"Portati un po' di ragù a casa!\" You: \"Grazie di tutto, è stato un pranzo fantastico.\"",
        ],
        examples: [
          { es: "Da quanto tempo state insieme?", en: "How long have you been together?" },
          { es: "E quando vi sposate?", en: "And when are you getting married?" },
          { es: "Con calma!", en: "No rush!" },
          { es: "Portati un po' di ragù a casa!", en: "Take some ragù home with you!" },
          { es: "Grazie di tutto, è stato un pranzo fantastico.", en: "Thanks for everything, it was a fantastic lunch." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long have you been together?", answer: "Da quanto tempo state insieme?", altAnswers: ["Da quanto state insieme?"], explanation: "Present + \"da quanto\" for something still going on." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thanks for everything, it was a fantastic lunch.", answer: "Grazie di tutto, è stato un pranzo fantastico.", altAnswers: ["Grazie per tutto, è stato un pranzo fantastico."], explanation: "\"Grazie di tutto\" = thanks for everything." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you like some more?", answer: "Ne vuoi ancora?", altAnswers: ["Ne vuole ancora?", "Ne vuoi ancora un po'?", "Ne vuole ancora un po'?"], explanation: "\"Ne\" = some of it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ragù is delicious!", answer: "Il ragù è squisito!", altAnswers: ["Il ragù è buonissimo!", "Il ragù è delizioso!"], explanation: "\"Ragù\" ends in a stressed ù." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And when are you getting married?", answer: "E quando vi sposate?", altAnswers: ["E quando vi sposerete?"], explanation: "\"Sposarsi\" = to get married." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come in, make yourself comfortable!", answer: "Entra, accomodati!", altAnswers: ["Entri, si accomodi!", "Entra pure, accomodati!"], explanation: "\"Accomodati\": the \"tu\" imperative with the pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's been cooking since this morning.", answer: "Cucina da stamattina.", altAnswers: ["Cucina da questa mattina.", "Sta cucinando da stamattina."], explanation: "Present + \"da\" for an action still going on." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You [shouldn't have] gone to the trouble!", sentence: "Non ___ disturbarti!", answer: "dovevi", explanation: "\"Non dovevi\" = you shouldn't have." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Take] some ragù home with you!", sentence: "___ un po' di ragù a casa!", answer: "Portati", altAnswers: ["Porta"], explanation: "\"Portarsi\": \"portati\" = take with you." },
      { type: "word-order", prompt: "Put the words in order to say: Sunday lunch lasts four hours.", words: ["Il", "pranzo", "della", "domenica", "dura", "quattro", "ore."], translation: "Sunday lunch lasts four hours.", explanation: "\"Il pranzo della domenica\" = Sunday lunch." },
      { type: "multiple-choice", question: "Luca's father offers you more pasta for the second time. You're really full. What do you say?", options: ["Grazie, davvero, era buonissima, ma non ce la faccio più.", "Sì, grazie!", "No.", "La pasta non mi piace."], correctIndex: 0, explanation: "A warm, firm refusal with praise." },
      { type: "dictation", audio: "Da quanto tempo state insieme?", explanation: "\"State\" from \"stare insieme\" = to be together." },
      { type: "speak", text: "Grazie di tutto, signora. Era tutto squisito!", prompt: "Say it in Italian: Thank you for everything, ma'am. Everything was delicious!", tip: "Squi-SI-to: the qu sounds like kw.", explanation: "\"Signora\" and the imperfetto \"era\"." },
    ],
  },
];

export const IT_CULTURE_U04_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your Italian friend Sofia asks how you spend the holidays and invites you to Italy for one of hers. Write her an email: describe how your family celebrates one holiday, compare it with an Italian holiday from this unit (Christmas, the Befana, Carnival, Easter and Pasquetta, Ferragosto, a name day or a patron saint's day), and say which Italian holiday you'd like to spend with her and why.",
  minWords: 70,
  maxWords: 150,
  rubric: [
    "Describes a holiday with dates written the Italian way (il 25 dicembre, il 6 gennaio) and lowercase months",
    "Gives accurate facts about an Italian holiday (la vigilia, il presepe, la Befana, la colomba, Pasquetta, il 15 agosto)",
    "Compares the two traditions (invece, anche, più... di, come)",
    "Uses holiday greetings and expressions correctly (Buon Natale, Buona Pasqua, auguri, fare il ponte, andare fuori porta)",
  ],
  modelAnswer: "Cara Sofia, da noi la festa più importante è il Ringraziamento, a fine novembre: tutta la famiglia mangia il tacchino e guarda il football. È un po' come il pranzo della domenica da voi, ma più lungo! Mi ha incuriosito molto la vostra Befana. Da noi i regali arrivano solo a Natale, invece in Italia i bambini ricevono anche la calza il 6 gennaio. Mi piacerebbe passare la Pasqua con te: vorrei vedere una processione, mangiare la colomba e poi, a Pasquetta, fare una gita fuori porta con i tuoi amici. Natale con i tuoi, Pasqua con chi vuoi, no? Un abbraccio e tanti auguri!",
  explanation: "\"Il 6 gennaio\" and \"a fine novembre\" write dates correctly; \"la calza\", \"la colomba\" and \"Pasquetta\" are accurate; \"come\" and \"invece\" compare traditions; the proverb and \"fare una gita fuori porta\" use the unit's expressions naturally.",
};
