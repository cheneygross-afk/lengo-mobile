// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a1-u07.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A1 Unit 7: At the Bar and the Restaurant. Vorrei, prendo, per me,
// un po' di, the menu, restaurant phrases, double consonants in food words.
// Conventions: docs/italian-course/authoring.md.
export const IT_A1_U07: Lesson[] = [
  {
    slug: "a1-at-the-bar",
    level: "IT-A1",
    number: 1,
    title: "At the Bar",
    summary: "Order coffee, a cornetto and a juice at an Italian bar, and know when to pay and where to drink it.",
    duration: "14 min",
    sections: [
      {
        heading: "Un caffè, per favore",
        body: [
          "An Italian bar is a café: coffee and pastries in the morning, sandwiches at lunch. \"Un caffè\" is always an espresso; nobody says espresso at the counter. \"Un cappuccino\", \"un cornetto\" (a croissant), \"una spremuta\" (a fresh orange juice) and \"un bicchiere d'acqua\" (a glass of water) complete breakfast.",
          "To order, say what you want + \"per favore\", or start with \"vorrei\" (I'd like), the polite chunk you'll use everywhere. \"Prendo\" (I'll have) works too.",
        ],
        examples: [
          { es: "Un caffè, per favore.", en: "An espresso, please." },
          { es: "Vorrei un cappuccino e un cornetto.", en: "I'd like a cappuccino and a croissant." },
          { es: "Prendo una spremuta d'arancia.", en: "I'll have a fresh orange juice." },
          { es: "Un caffè macchiato, grazie.", en: "An espresso with a drop of milk, thanks." },
          { es: "Anche un bicchiere d'acqua, per favore.", en: "A glass of water too, please." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a cappuccino and a croissant.", answer: "Vorrei un cappuccino e un cornetto.", explanation: "\"Vorrei\" is the polite way to order." },
          { type: "multiple-choice", question: "You order \"un caffè\" in Italy. What do you get?", options: ["an espresso", "a large filter coffee", "a coffee with milk", "an iced coffee"], correctIndex: 0, explanation: "\"Caffè\" means espresso." },
        ],
      },
      {
        heading: "Al banco or al tavolo",
        body: [
          "In many city bars you pay first at the till (\"la cassa\"), get a receipt (\"lo scontrino\"), then hand it to the barista at the counter. Drinking standing \"al banco\" (at the counter) is cheaper; sitting \"al tavolo\" (at a table) with table service costs more.",
          "Ask the price with \"Quant'è?\" (how much is it?). The answer: \"Due euro e trenta\". Then: \"Ecco lo scontrino\".",
        ],
        examples: [
          { es: "Un caffè e un cornetto. Quant'è?", en: "An espresso and a croissant. How much is it?" },
          { es: "Sono due euro e trenta.", en: "That's two euros thirty." },
          { es: "Ecco lo scontrino.", en: "Here's the receipt." },
          { es: "Prendiamo il caffè al banco.", en: "We'll have our coffee at the counter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is it?", answer: "Quant'è?", altAnswers: ["Quanto è?", "Quanto costa?"], explanation: "\"Quant'è?\" asks for the total." },
          { type: "listen-choose", audio: "Sono due euro e trenta.", question: "How much do you pay?", options: ["€2.30", "€2.13", "€3.20", "€12.30"], correctIndex: 0, explanation: "\"Due euro e trenta\" = 2,30 €." },
        ],
      },
      {
        heading: "Coffee words",
        body: [
          "Plurals: \"un cappuccino, due cappuccini\", but \"un caffè, due caffè\" and \"un tè, due tè\": nouns ending in an accented vowel never change. \"Latte\" alone is just milk: for a milky coffee ask for \"un latte macchiato\" or \"un caffellatte\".",
        ],
        examples: [
          { es: "Due caffè e due cappuccini.", en: "Two espressos and two cappuccinos." },
          { es: "Un tè al limone.", en: "A lemon tea." },
          { es: "Un latte macchiato, per favore.", en: "A latte, please." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Two espressos], please.", sentence: "___, per favore.", answer: "Due caffè", explanation: "\"Caffè\" doesn't change in the plural." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "An espresso, please.", answer: "Un caffè, per favore.", altAnswers: ["Un caffè per favore.", "Vorrei un caffè, per favore."], explanation: "\"Caffè\" = espresso." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have a fresh orange juice.", answer: "Prendo una spremuta d'arancia.", altAnswers: ["Prendo una spremuta.", "Vorrei una spremuta d'arancia."], explanation: "\"Prendo\" to order; \"spremuta\" is freshly squeezed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two espressos and two cappuccinos.", answer: "Due caffè e due cappuccini.", explanation: "\"Caffè\" stays the same; \"cappuccino\" → \"cappuccini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A glass of water, please.", answer: "Un bicchiere d'acqua, per favore.", altAnswers: ["Un bicchiere di acqua, per favore."], explanation: "\"Di\" shortens before \"acqua\": \"d'acqua\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here's the receipt.", answer: "Ecco lo scontrino.", explanation: "\"Lo\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A latte, please.", answer: "Un latte macchiato, per favore.", altAnswers: ["Un caffellatte, per favore.", "Un caffè latte, per favore."], explanation: "\"Latte\" alone is milk." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like] a croissant.", sentence: "___ un cornetto.", answer: "Vorrei", explanation: "\"Vorrei\" = I'd like." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We'll have our coffee [at the counter].", sentence: "Prendiamo il caffè ___.", answer: "al banco", explanation: "\"Al banco\" = standing at the counter." },
      { type: "word-order", prompt: "Put the words in order to say: An espresso and a croissant. How much is it?", words: ["Un", "caffè", "e", "un", "cornetto.", "Quant'è?"], translation: "An espresso and a croissant. How much is it?", explanation: "Order, then ask the price." },
      { type: "multiple-choice", question: "Where is coffee usually cheaper?", options: ["al banco", "al tavolo", "it's always the same", "outside on the terrace"], correctIndex: 0, explanation: "Standing at the counter costs less than table service." },
      { type: "dictation", audio: "Un cappuccino e un cornetto, per favore.", explanation: "Double pp and cc in \"cappuccino\"." },
      {
        type: "speak",
        text: "Buongiorno! Vorrei un caffè e una spremuta, per favore. Quant'è?",
        prompt: "At the till: Good morning! I'd like an espresso and an orange juice, please. How much is it?",
        tip: "\"Quant'è\" is two syllables: quan-TÈ.",
        explanation: "Greeting, order with \"vorrei\", price question.",
      },
    ],
  },
  {
    slug: "a1-ordering-food",
    level: "IT-A1",
    number: 2,
    title: "Ordering Food",
    summary: "Order food and drinks with vorrei, prendo and per me, ask for some bread with un po' di, and choose your water.",
    duration: "14 min",
    sections: [
      {
        heading: "Vorrei, prendo, per me",
        body: [
          "Three ways to order. \"Vorrei un panino\" (I'd like a sandwich) is the most polite. \"Prendo una pizza\" (I'll have a pizza) is just as normal. \"Per me una pizza margherita\" (for me, a margherita) skips the verb: perfect when a waiter goes round the table.",
          "For the whole table use the noi form: \"Prendiamo due birre\" (we'll have two beers).",
        ],
        examples: [
          { es: "Vorrei un panino al prosciutto.", en: "I'd like a ham sandwich." },
          { es: "Per me una pizza margherita.", en: "A margherita for me." },
          { es: "Prendiamo due birre.", en: "We'll have two beers." },
          { es: "E per Lei, signora?", en: "And for you, madam?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A margherita for me.", answer: "Per me una pizza margherita.", altAnswers: ["Per me una margherita.", "Una margherita per me."], explanation: "\"Per me\" + what you want: no verb needed." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll have two beers.", answer: "Prendiamo due birre.", altAnswers: ["Noi prendiamo due birre.", "Vorremmo due birre."], explanation: "\"Prendiamo\" for the table; \"birra\" → \"birre\"." },
        ],
      },
      {
        heading: "Un po' di pane",
        body: [
          "For some or a bit of, use \"un po' di\": \"un po' di pane\" (some bread). \"Po'\" is short for \"poco\", so it takes an apostrophe, never an accent. Before a vowel, \"di\" often becomes \"d'\": \"un po' d'acqua\".",
          "\"Ancora\" in front means more: \"ancora un po' di vino\" (a bit more wine), \"ancora pane?\" (more bread?).",
        ],
        examples: [
          { es: "Un po' di pane, per favore.", en: "Some bread, please." },
          { es: "Ancora un po' d'acqua?", en: "A bit more water?" },
          { es: "Vorrei ancora un po' di vino.", en: "I'd like a bit more wine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some bread, please.", answer: "Un po' di pane, per favore.", altAnswers: ["Un po' di pane per favore."], explanation: "\"Un po' di\" + noun; apostrophe on \"po'\"." },
          { type: "multiple-choice", question: "Which spelling is correct?", options: ["un po' di vino", "un pò di vino", "un po di vino", "un pó di vino"], correctIndex: 0, explanation: "\"Po'\" with an apostrophe: it's \"poco\" shortened." },
        ],
      },
      {
        heading: "Naturale o frizzante?",
        body: [
          "Order water by the bottle: \"una bottiglia d'acqua\". The waiter will ask \"Naturale o frizzante?\" (still or sparkling?). Tap water is rarely served. Beer comes \"piccola\" or \"media\" (small or medium), wine by the glass: \"un bicchiere di vino rosso\".",
        ],
        examples: [
          { es: "Una bottiglia d'acqua frizzante.", en: "A bottle of sparkling water." },
          { es: "Naturale, grazie.", en: "Still, thanks." },
          { es: "Un bicchiere di vino bianco.", en: "A glass of white wine." },
          { es: "Una birra media, per favore.", en: "A medium beer, please." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Naturale o frizzante?", question: "What is the waiter asking?", options: ["still or sparkling water?", "red or white wine?", "small or medium?", "here or to take away?"], correctIndex: 0, explanation: "\"Naturale\" = still, \"frizzante\" = sparkling." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A bottle of sparkling water.", answer: "Una bottiglia d'acqua frizzante.", altAnswers: ["Una bottiglia di acqua frizzante.", "Una bottiglia di frizzante."], explanation: "\"Bottiglia\": double t." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a ham sandwich.", answer: "Vorrei un panino al prosciutto.", altAnswers: ["Vorrei un panino con il prosciutto."], explanation: "\"Al prosciutto\" = with ham." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A bit more water?", answer: "Ancora un po' d'acqua?", altAnswers: ["Ancora un po' di acqua?"], explanation: "\"Ancora\" = more." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A glass of white wine.", answer: "Un bicchiere di vino bianco.", explanation: "\"Bianco\" after the noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Still, thanks.", answer: "Naturale, grazie.", explanation: "Still water: \"naturale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A medium beer, please.", answer: "Una birra media, per favore.", explanation: "\"Media\" agrees with \"birra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For me, a pizza with mushrooms.", answer: "Per me una pizza ai funghi.", altAnswers: ["Per me, una pizza ai funghi.", "Per me una pizza con i funghi."], explanation: "\"Ai funghi\" = with mushrooms." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like [a bit more] wine.", sentence: "Vorrei ___ di vino.", answer: "ancora un po'", explanation: "\"Ancora un po' di\" = a bit more." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We'll have] two pizzas and a salad.", sentence: "___ due pizze e un'insalata.", answer: "Prendiamo", altAnswers: ["Noi prendiamo"], explanation: "\"Prendiamo\" for the table." },
      { type: "word-order", prompt: "Put the words in order to say: Some bread and a bottle of water, please.", words: ["Un", "po'", "di", "pane", "e", "una", "bottiglia", "d'acqua,", "per", "favore."], translation: "Some bread and a bottle of water, please.", explanation: "\"Un po' di\" + noun; \"bottiglia d'acqua\"." },
      { type: "multiple-choice", question: "The waiter goes round the table. It's your turn. What do you say?", options: ["Per me una birra.", "Per io una birra.", "A me una birra voglio.", "Prendono una birra."], correctIndex: 0, explanation: "\"Per me\" + order." },
      { type: "dictation", audio: "Per me una pizza margherita e una birra.", explanation: "\"Pizza\" with zz; \"birra\" with rr." },
      {
        type: "speak",
        text: "Per me un panino e un bicchiere di vino rosso. E un po' di pane, per favore.",
        prompt: "Order: For me a sandwich and a glass of red wine. And some bread, please.",
        tip: "Hold the double c in \"bicchiere\".",
        explanation: "\"Per me\" and \"un po' di\".",
      },
    ],
  },
  {
    slug: "a1-the-menu",
    level: "IT-A1",
    number: 3,
    title: "Reading the Menu",
    summary: "Read an Italian menu course by course, understand il coperto, and spot typical regional dishes.",
    duration: "14 min",
    sections: [
      {
        heading: "Course by course",
        body: [
          "An Italian menu runs in order: \"antipasti\" (starters), \"primi\" (first courses: pasta, risotto, soups), \"secondi\" (main courses: meat or fish), \"contorni\" (side dishes, ordered separately) and \"dolci\" (desserts).",
          "Trap: \"primo\" is not the main course; it's the pasta course before it. You don't have to order everything: a primo and a contorno, or a secondo alone, is normal. Order with \"per\": \"Per primo prendo le lasagne\".",
        ],
        examples: [
          { es: "Per antipasto, bruschetta.", en: "As a starter, bruschetta." },
          { es: "Per primo prendo le lasagne.", en: "As a first course I'll have the lasagne." },
          { es: "Per secondo vorrei il pesce.", en: "As a main course I'd like the fish." },
          { es: "Come contorno, un'insalata mista.", en: "As a side, a mixed salad." },
          { es: "Che dolci avete?", en: "What desserts do you have?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a first course I'll have the lasagne.", answer: "Per primo prendo le lasagne.", altAnswers: ["Per primo vorrei le lasagne.", "Come primo prendo le lasagne."], explanation: "\"Per primo\" = as a first course." },
          { type: "multiple-choice", question: "Where on the menu do you find spaghetti?", options: ["primi", "secondi", "contorni", "dolci"], correctIndex: 0, explanation: "Pasta is a \"primo\"." },
        ],
      },
      {
        heading: "Il coperto and the bill",
        body: [
          "Many restaurants charge \"il coperto\", a cover charge per person (often 2 or 3 euros) for bread and the table. It's on the menu and it's not a tip. \"Servizio incluso\" means service is included.",
          "Dishes \"alla\" + a place are cooked in that style: \"alla romana\", \"alla milanese\", \"alla napoletana\".",
        ],
        examples: [
          { es: "Coperto: 2,50 euro.", en: "Cover charge: €2.50." },
          { es: "Il servizio è incluso?", en: "Is service included?" },
          { es: "il risotto alla milanese", en: "Milan-style risotto, with saffron" },
          { es: "le orecchiette con le cime di rapa", en: "orecchiette pasta with turnip greens, from Puglia" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is service included?", answer: "Il servizio è incluso?", altAnswers: ["È incluso il servizio?"], explanation: "\"Incluso\" agrees with \"servizio\"." },
          { type: "listen-choose", audio: "Il coperto è due euro e cinquanta.", question: "What does it mean?", options: ["The cover charge is €2.50.", "The tip is €2.50.", "The bread costs €5.20.", "The table is free."], correctIndex: 0, explanation: "\"Il coperto\" = cover charge." },
        ],
      },
      {
        heading: "Typical dishes",
        body: [
          "Each region has its dishes: \"la carbonara\" and \"la cacio e pepe\" in Roma, \"i tortellini\" in Bologna, \"la pizza\" in Napoli, \"la pasta alla Norma\" in Sicilia. Ask \"Qual è il piatto tipico?\" (what's the local dish?). \"Qual è\" has no apostrophe.",
        ],
        examples: [
          { es: "Qual è il piatto tipico?", en: "What's the local speciality?" },
          { es: "A Bologna mangiamo i tortellini.", en: "In Bologna we eat tortellini." },
          { es: "La carbonara è un piatto romano.", en: "Carbonara is a Roman dish." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the local speciality?", answer: "Qual è il piatto tipico?", altAnswers: ["Qual è il piatto tipico della zona?"], explanation: "\"Qual è\": no apostrophe." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a main course I'd like the fish.", answer: "Per secondo vorrei il pesce.", altAnswers: ["Per secondo prendo il pesce.", "Come secondo vorrei il pesce."], explanation: "\"Secondo\" = main course." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a side, a mixed salad.", answer: "Come contorno, un'insalata mista.", altAnswers: ["Per contorno un'insalata mista.", "Come contorno un'insalata mista."], explanation: "\"Un'insalata\": feminine, apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What desserts do you have?", answer: "Che dolci avete?", altAnswers: ["Quali dolci avete?", "Che cosa avete di dolce?"], explanation: "\"Avete\" to the restaurant: voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Carbonara is a Roman dish.", answer: "La carbonara è un piatto romano.", explanation: "\"Romano\" lower case, after the noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Bologna we eat tortellini.", answer: "A Bologna mangiamo i tortellini.", altAnswers: ["A Bologna noi mangiamo i tortellini."], explanation: "\"A\" + city." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The cover charge] is three euros.", sentence: "___ è tre euro.", answer: "Il coperto", explanation: "\"Coperto\" = cover charge." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[As a starter], bruschetta.", sentence: "___, bruschetta.", answer: "Per antipasto", altAnswers: ["Come antipasto"], explanation: "\"Per\" + course." },
      { type: "word-order", prompt: "Put the words in order to say: I'll have a first course and a side dish.", words: ["Prendo", "un", "primo", "e", "un", "contorno."], translation: "I'll have a first course and a side dish.", explanation: "You don't need every course." },
      {
        type: "matching",
        instructions: "Match the course to what you find there.",
        pairs: [
          { left: "antipasti", right: "starters" },
          { left: "primi", right: "pasta, risotto, soup" },
          { left: "secondi", right: "meat or fish" },
          { left: "contorni", right: "side dishes" },
          { left: "dolci", right: "desserts" },
        ],
        explanation: "The menu runs in this order.",
      },
      { type: "multiple-choice", question: "\"Il coperto\" on the bill is ...", options: ["a cover charge for bread and the table", "a tip for the waiter", "the price of the wine", "a discount"], correctIndex: 0, explanation: "It's a fixed charge per person, not a tip." },
      { type: "dictation", audio: "Per primo le lasagne, per secondo il pesce.", explanation: "\"Lasagne\": gn as in \"bagno\"." },
      {
        type: "speak",
        text: "Per primo prendo le orecchiette e per secondo il pesce. Qual è il dolce tipico?",
        prompt: "Order: As a first course I'll have the orecchiette, and the fish as a main. What's the typical dessert?",
        tip: "o-rec-CHIET-te: double cc and double tt.",
        explanation: "\"Per primo\", \"per secondo\", \"qual è\".",
      },
    ],
  },
  {
    slug: "a1-restaurant-phrases",
    level: "IT-A1",
    number: 4,
    title: "At the Restaurant",
    summary: "Ask for a table, ask the waiter for advice, say what you can't eat, and pay the bill.",
    duration: "14 min",
    sections: [
      {
        heading: "A table for two",
        body: [
          "At the door: \"Buonasera, un tavolo per due, per favore\" or \"Avete un tavolo libero?\" (do you have a free table?). The waiter may ask \"Quanti siete?\" (how many are you?); the answer is \"Siamo in due\", \"Siamo in quattro\" (there are two / four of us).",
          "Use \"avete\" to the restaurant (you, the staff) and \"Lei\" to the waiter.",
        ],
        examples: [
          { es: "Un tavolo per due, per favore.", en: "A table for two, please." },
          { es: "Avete un tavolo libero?", en: "Do you have a free table?" },
          { es: "Quanti siete?", en: "How many are you?" },
          { es: "Siamo in quattro.", en: "There are four of us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have a free table?", answer: "Avete un tavolo libero?", explanation: "\"Avete\": you, the restaurant." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are four of us.", answer: "Siamo in quattro.", explanation: "\"Siamo in\" + number." },
        ],
      },
      {
        heading: "Advice and special needs",
        body: [
          "\"Che cosa mi consiglia?\" (what do you recommend?) is the Lei form to the waiter. To say what you don't eat: \"Sono vegetariano / vegetariana\", \"Sono allergico / allergica alle noci\" (I'm allergic to nuts), \"Non mangio carne\". The adjective agrees with you.",
        ],
        examples: [
          { es: "Che cosa mi consiglia?", en: "What do you recommend?" },
          { es: "Sono vegetariana.", en: "I'm vegetarian." },
          { es: "Sono allergico alle noci.", en: "I'm allergic to nuts." },
          { es: "C'è il glutine?", en: "Is there gluten in it?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you recommend? (to the waiter)", answer: "Che cosa mi consiglia?", altAnswers: ["Cosa mi consiglia?", "Che mi consiglia?"], explanation: "Lei form: \"consiglia\"." },
          { type: "multiple-choice", question: "A woman tells the waiter she doesn't eat meat. What does she say?", options: ["Sono vegetariana.", "Sono vegetariano.", "Ho vegetariana.", "Sono vegetariane."], correctIndex: 0, explanation: "A woman: \"vegetariana\"." },
        ],
      },
      {
        heading: "The bill",
        body: [
          "Waiters won't bring the bill until you ask: \"Il conto, per favore\". To check about cards: \"Posso pagare con la carta?\" (can I pay by card?). \"Posso\" + infinitive is a chunk for now; the verb comes in Unit 9.",
          "Splitting equally is \"pagare alla romana\".",
        ],
        examples: [
          { es: "Il conto, per favore.", en: "The bill, please." },
          { es: "Posso pagare con la carta?", en: "Can I pay by card?" },
          { es: "Paghiamo alla romana?", en: "Shall we split it equally?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I pay by card?", answer: "Posso pagare con la carta?", altAnswers: ["Posso pagare con carta?"], explanation: "\"Posso\" + infinitive." },
          { type: "listen-choose", audio: "Il conto, per favore.", question: "What does the customer want?", options: ["the bill", "the menu", "a table", "the wine list"], correctIndex: 0, explanation: "\"Il conto\" = the bill." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A table for two, please.", answer: "Un tavolo per due, per favore.", altAnswers: ["Un tavolo per due per favore.", "Vorrei un tavolo per due, per favore."], explanation: "\"Per\" + number of people." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm vegetarian. (a man speaking)", answer: "Sono vegetariano.", altAnswers: ["Io sono vegetariano."], explanation: "Agreement with the speaker." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm allergic to nuts. (a woman speaking)", answer: "Sono allergica alle noci.", altAnswers: ["Io sono allergica alle noci."], explanation: "\"Allergica\" agrees; \"alle\" = a + le." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bill, please.", answer: "Il conto, per favore.", altAnswers: ["Il conto per favore."], explanation: "The usual way to ask." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there gluten in it?", answer: "C'è il glutine?", altAnswers: ["C'è glutine?"], explanation: "\"C'è\" = is there." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't eat meat.", answer: "Non mangio carne.", altAnswers: ["Non mangio la carne.", "Io non mangio carne."], explanation: "\"Non\" + verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can I pay] by card?", sentence: "___ con la carta?", answer: "Posso pagare", explanation: "\"Posso\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There are three of us].", sentence: "___.", answer: "Siamo in tre", explanation: "\"Siamo in\" + number." },
      { type: "word-order", prompt: "Put the words in order to say: Good evening, do you have a table for four?", words: ["Buonasera,", "avete", "un", "tavolo", "per", "quattro?"], translation: "Good evening, do you have a table for four?", explanation: "\"Avete\" to the restaurant." },
      { type: "multiple-choice", question: "You want the waiter's suggestion. What do you ask?", options: ["Che cosa mi consiglia?", "Che cosa mi consigli?", "Che cosa consigliamo?", "Che cosa consigliano?"], correctIndex: 0, explanation: "Lei form to a waiter: \"consiglia\"." },
      { type: "dictation", audio: "Siamo in due. Avete un tavolo libero?", explanation: "\"Siamo in due\", \"avete\"." },
      {
        type: "speak",
        text: "Buonasera, siamo in tre. Avete un tavolo libero? Io sono vegetariana.",
        prompt: "At the door: Good evening, there are three of us. Do you have a free table? I'm vegetarian (you're a woman).",
        tip: "\"Tavolo\": TA-vo-lo, stress on the first syllable.",
        explanation: "\"Siamo in tre\", \"avete\", agreement.",
      },
    ],
  },
  {
    slug: "a1-sound-double-consonants-2",
    level: "IT-A1",
    number: 5,
    title: "Sounds: Double Consonants, Part 2",
    summary: "Hold the double consonants in food words and hear the difference in pairs like pane / panna and nona / nonna.",
    duration: "14 min",
    sections: [
      {
        heading: "Doubles in food words",
        body: [
          "A double consonant is held longer, with a tiny pause before it: cap-PUC-ci-no, LAT-te, moz-za-REL-la, spa-GHET-ti, PIZ-za, bot-TI-glia. The vowel before it is short and crisp.",
          "English spelling has double letters that don't sound double (coffee, butter). In Italian every double is heard, and you must hear it to order the right thing.",
        ],
        examples: [
          { es: "un cappuccino", en: "a cappuccino" },
          { es: "il latte", en: "the milk" },
          { es: "la mozzarella", en: "the mozzarella" },
          { es: "gli spaghetti", en: "the spaghetti" },
          { es: "una bottiglia", en: "a bottle" },
        ],
        checkpoint: [
          { type: "dictation", audio: "Una mozzarella e una bottiglia di latte.", explanation: "zz, ll, tt, tt: four doubles." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Spaghetti with mozzarella.", answer: "Spaghetti con la mozzarella.", altAnswers: ["Spaghetti con mozzarella.", "Gli spaghetti con la mozzarella."], explanation: "\"Spaghetti\" (tt), \"mozzarella\" (zz, ll)." },
        ],
      },
      {
        heading: "Pairs that change the meaning",
        body: [
          "\"Pane\" is bread, \"panna\" is cream. \"Nona\" is ninth, \"nonna\" is grandmother. \"Fato\" is fate, \"fatto\" is made or done. \"Sete\" is thirst, \"sette\" is seven. A single consonant can turn your dessert into a different word.",
          "\"Bello\" has a double l; there is no word \"belo\".",
        ],
        examples: [
          { es: "il pane e la panna", en: "the bread and the cream" },
          { es: "la nonna", en: "the grandmother" },
          { es: "fatto in casa", en: "homemade" },
          { es: "Ho sete.", en: "I'm thirsty." },
          { es: "sette caffè", en: "seven espressos" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "la panna", question: "What did you hear?", options: ["la panna", "il pane", "la pana", "le pane"], correctIndex: 0, explanation: "PAN-na: cream." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Homemade bread.", answer: "Pane fatto in casa.", altAnswers: ["Il pane fatto in casa."], explanation: "\"Pane\" (one n), \"fatto\" (tt)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A cappuccino and some milk, please.", answer: "Un cappuccino e un po' di latte, per favore.", altAnswers: ["Un cappuccino e un po' di latte per favore."], explanation: "pp, cc, tt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Strawberries with cream.", answer: "Fragole con la panna.", altAnswers: ["Fragole con panna.", "Le fragole con la panna."], explanation: "\"Panna\": double n." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma's bread is good.", answer: "Il pane della nonna è buono.", explanation: "\"Pane\" single n, \"nonna\" double." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Seven espressos, please.", answer: "Sette caffè, per favore.", altAnswers: ["Sette caffè per favore."], explanation: "\"Sette\" (tt), \"caffè\" (ff)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A pizza and a bottle of water.", answer: "Una pizza e una bottiglia d'acqua.", altAnswers: ["Una pizza e una bottiglia di acqua."], explanation: "zz, tt, cq." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The bread] is homemade.", sentence: "___ è fatto in casa.", answer: "Il pane", explanation: "Bread: \"pane\", one n." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [thirsty].", sentence: "Ho ___.", answer: "sete", explanation: "Thirst: \"sete\", one t." },
      { type: "word-order", prompt: "Put the words in order to say: Grandma makes the mozzarella.", words: ["La", "nonna", "prepara", "la", "mozzarella."], translation: "Grandma makes the mozzarella.", explanation: "nn, zz, ll." },
      { type: "listen-choose", audio: "il fatto", question: "What did you hear?", options: ["il fatto", "il fato", "il fate", "i fatti"], correctIndex: 0, explanation: "FAT-to: held t." },
      { type: "listen-choose", audio: "la nona", question: "What did you hear?", options: ["la nona", "la nonna", "la noia", "la nana"], correctIndex: 0, explanation: "Single n: \"nona\" = ninth." },
      { type: "dictation", audio: "Gli spaghetti della nonna.", explanation: "tt and nn." },
      {
        type: "speak",
        text: "Un cappuccino, una mozzarella e una bottiglia di latte.",
        prompt: "Order: a cappuccino, a mozzarella and a bottle of milk.",
        tip: "Pause slightly on each double: cap-puc-ci-no, moz-za-rel-la, bot-ti-glia, lat-te.",
        explanation: "Six doubles to hold.",
      },
    ],
  },
  {
    slug: "a1-drill-ordering",
    level: "IT-A1",
    number: 6,
    title: "Drill: Ordering",
    summary: "Order food and drink fast: vorrei or prendo + article + item, with numbers and plurals.",
    duration: "20 min",
    kind: "drill",
    sections: [
      {
        heading: "Order, number, plural",
        body: [
          "The pattern: \"vorrei\" / \"prendo\" / \"prendiamo\" / \"per me\" + \"un, uno, una, un'\" or a number + the item. Plurals: \"-o → -i\" (\"due panini\"), \"-a → -e\" (\"tre birre\"), accented endings don't change (\"due caffè\", \"due tè\").",
          "New words: \"un'aranciata\" (an orange soda), \"uno spritz\", \"un succo di frutta\" (a fruit juice), \"una brioche\" (northern word for cornetto), \"un tramezzino\" (a sandwich on soft white bread).",
        ],
        examples: [
          { es: "Vorrei un tramezzino e un'aranciata.", en: "I'd like a sandwich and an orange soda." },
          { es: "Prendiamo tre spritz.", en: "We'll have three spritzes." },
          { es: "Due cornetti e due cappuccini.", en: "Two croissants and two cappuccinos." },
          { es: "Per me uno spritz.", en: "A spritz for me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a sandwich and an orange soda.", answer: "Vorrei un tramezzino e un'aranciata.", altAnswers: ["Vorrei un panino e un'aranciata."], explanation: "\"Un'aranciata\": feminine, so apostrophe." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two croissants and two cappuccinos.", answer: "Due cornetti e due cappuccini.", altAnswers: ["Due brioche e due cappuccini."], explanation: "-o → -i in the plural." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Three espressos, please.", answer: "Tre caffè, per favore.", altAnswers: ["Tre caffè per favore."], explanation: "\"Caffè\" never changes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll have two beers.", answer: "Prendiamo due birre.", altAnswers: ["Noi prendiamo due birre."], explanation: "\"Birra\" → \"birre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a fruit juice.", answer: "Vorrei un succo di frutta.", explanation: "\"Un succo\": masculine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A spritz for me.", answer: "Per me uno spritz.", altAnswers: ["Uno spritz per me."], explanation: "s + consonant: \"uno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two teas with lemon.", answer: "Due tè al limone.", explanation: "\"Tè\" doesn't change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have a ham sandwich.", answer: "Prendo un panino al prosciutto.", altAnswers: ["Vorrei un panino al prosciutto."], explanation: "\"Prendo\" + item." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Four pizzas and a salad.", answer: "Quattro pizze e un'insalata.", explanation: "\"Pizza\" → \"pizze\"; \"un'insalata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll have three glasses of red wine.", answer: "Prendiamo tre bicchieri di vino rosso.", altAnswers: ["Noi prendiamo tre bicchieri di vino rosso."], explanation: "\"Bicchiere\" → \"bicchieri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two bottles of water.", answer: "Due bottiglie d'acqua.", altAnswers: ["Due bottiglie di acqua."], explanation: "\"Bottiglia\" → \"bottiglie\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like] two croissants.", sentence: "___ due cornetti.", answer: "Vorrei", explanation: "\"Vorrei\" + item." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Five [cappuccinos], please.", sentence: "Cinque ___, per favore.", answer: "cappuccini", explanation: "\"Cappuccino\" → \"cappuccini\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A] yoghurt and an orange juice.", sentence: "___ yogurt e una spremuta.", answer: "Uno", explanation: "y takes \"uno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We'll have] a bottle of white wine.", sentence: "___ una bottiglia di vino bianco.", answer: "Prendiamo", altAnswers: ["Noi prendiamo"], explanation: "Noi for the table." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "due caffè", right: "two espressos" },
          { left: "due cornetti", right: "two croissants" },
          { left: "due birre", right: "two beers" },
          { left: "due tè", right: "two teas" },
          { left: "due spremute", right: "two fresh orange juices" },
        ],
        explanation: "Accented nouns stay the same in the plural.",
      },
      { type: "dictation", audio: "Due caffè e tre cornetti, per favore.", explanation: "\"Caffè\" stays singular in form." },
      { type: "dictation", audio: "Per me un'aranciata e un tramezzino.", explanation: "\"Un'aranciata\" with an apostrophe." },
      {
        type: "speak",
        text: "Prendiamo due cappuccini, un caffè e tre cornetti.",
        prompt: "Order for your group: We'll have two cappuccinos, an espresso and three croissants.",
        tip: "cap-puc-CI-ni: the plural ending is clear.",
        explanation: "Numbers + plurals.",
      },
    ],
  },
  {
    slug: "a1-contrast-vorrei-voglio",
    level: "IT-A1",
    number: 7,
    title: "Contrast Clinic: Vorrei or Voglio?",
    summary: "Order politely with vorrei instead of voglio, and keep voglio for plans and wishes.",
    duration: "14 min",
    sections: [
      {
        heading: "Vorrei is the polite order",
        body: [
          "\"Vorrei\" means I'd like; \"voglio\" means I want. Saying \"Voglio un caffè\" to a barista sounds like a demand, the way a child says I want an ice cream! Italian children are corrected with \"Non si dice voglio, si dice vorrei\".",
          "So in shops, bars and offices: \"vorrei\", \"prendo\" or \"per me\". Both verbs come later: the full volere in Unit 9, the conditional in the next level.",
        ],
        examples: [
          { es: "Vorrei un gelato.", en: "I'd like an ice cream." },
          { es: "Voglio un gelato!", en: "I want an ice cream! (a child)" },
          { es: "Vorrei un etto di prosciutto.", en: "I'd like a hundred grams of ham." },
          { es: "Prendo un caffè.", en: "I'll have an espresso." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "You're at the bakery counter. Which is polite?", options: ["Vorrei due panini.", "Voglio due panini.", "Due panini, subito!", "Vuoi due panini."], correctIndex: 0, explanation: "\"Vorrei\" is the polite request." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like an ice cream.", answer: "Vorrei un gelato.", explanation: "\"Vorrei\" to order." },
        ],
      },
      {
        heading: "Where voglio is fine",
        body: [
          "\"Voglio\" is normal for your plans and wishes, especially with an infinitive: \"Voglio imparare l'italiano\" (I want to learn Italian), \"Voglio visitare Napoli\". Here nobody is serving you, so it isn't rude.",
          "With the polite \"vorrei\" you can also use an infinitive: \"Vorrei pagare\" (I'd like to pay), \"Vorrei prenotare un tavolo\".",
        ],
        examples: [
          { es: "Voglio imparare l'italiano.", en: "I want to learn Italian." },
          { es: "Voglio visitare Napoli.", en: "I want to visit Naples." },
          { es: "Vorrei pagare, per favore.", en: "I'd like to pay, please." },
          { es: "Vorrei prenotare un tavolo per stasera.", en: "I'd like to book a table for tonight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to pay, please.", answer: "Vorrei pagare, per favore.", altAnswers: ["Vorrei pagare per favore."], explanation: "\"Vorrei\" + infinitive." },
          { type: "listen-choose", audio: "Voglio imparare l'italiano.", question: "What does it mean?", options: ["I want to learn Italian.", "I'd like an Italian.", "I'm learning Italian.", "I can speak Italian."], correctIndex: 0, explanation: "\"Voglio\" + infinitive: a wish, not an order." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a hundred grams of ham.", answer: "Vorrei un etto di prosciutto.", altAnswers: ["Vorrei cento grammi di prosciutto."], explanation: "\"Un etto\" = 100 g." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to visit Naples.", answer: "Voglio visitare Napoli.", altAnswers: ["Io voglio visitare Napoli."], explanation: "A wish: \"voglio\" is fine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to book a table for tonight.", answer: "Vorrei prenotare un tavolo per stasera.", explanation: "\"Vorrei\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a coffee, please.", answer: "Vorrei un caffè, per favore.", altAnswers: ["Vorrei un caffè per favore."], explanation: "Polite order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to learn Italian.", answer: "Voglio imparare l'italiano.", altAnswers: ["Voglio imparare italiano.", "Io voglio imparare l'italiano."], explanation: "\"Voglio\" + infinitive for a plan." },
      { type: "fill-blank", prompt: "A customer said \"voglio due cornetti\". Write the Italian for the bold words.", en: "[I'd like] two croissants.", sentence: "___ due cornetti.", answer: "Vorrei", altAnswers: ["Prendo"], explanation: "\"Vorrei\" or \"prendo\" to order." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like to pay] by card.", sentence: "___ con la carta.", answer: "Vorrei pagare", explanation: "\"Vorrei\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: I'd like a glass of white wine, please.", words: ["Vorrei", "un", "bicchiere", "di", "vino", "bianco,", "per", "favore."], translation: "I'd like a glass of white wine, please.", explanation: "\"Vorrei\" first." },
      { type: "multiple-choice", question: "Which sentence would sound rude to a waiter?", options: ["Voglio il conto.", "Il conto, per favore.", "Vorrei il conto.", "Posso avere il conto?"], correctIndex: 0, explanation: "\"Voglio\" sounds like a demand." },
      { type: "multiple-choice", question: "Which sentence uses voglio naturally?", options: ["Voglio vivere in Italia.", "Voglio un cappuccino, signore.", "Voglio il menù, cameriere.", "Voglio uno scontrino."], correctIndex: 0, explanation: "A personal wish, not an order." },
      { type: "dictation", audio: "Vorrei un etto di prosciutto, per favore.", explanation: "\"Etto\" with a double t." },
      {
        type: "speak",
        text: "Buongiorno, vorrei due panini e un etto di mozzarella.",
        prompt: "At the deli: Good morning, I'd like two rolls and a hundred grams of mozzarella.",
        tip: "\"Vorrei\": roll the r's lightly, vor-REI.",
        explanation: "\"Vorrei\", never \"voglio\", at a counter.",
      },
    ],
  },
  {
    slug: "a1-error-hunt-ordering",
    level: "IT-A1",
    number: 8,
    title: "Error Hunt: At the Bar",
    summary: "Fix the ordering mistakes that get English speakers the wrong drink, the wrong pizza or a frown.",
    duration: "14 min",
    sections: [
      {
        heading: "Wrong drink, wrong form",
        body: [
          "Each order was made by a learner and has one mistake. \"Un latte\" gets you a glass of milk: for a milky coffee say \"un latte macchiato\". \"Voglio un caffè!\" sounds rude: \"Vorrei un caffè\".",
          "\"Due cappuccinos\" adds an English -s: Italian plurals change the vowel, \"due cappuccini\". \"Un'espresso\" puts an apostrophe on a masculine word: \"un espresso\", and in a bar just \"un caffè\".",
        ],
        examples: [
          { es: "Un latte macchiato, per favore.", en: "A latte, please." },
          { es: "Vorrei un caffè.", en: "I'd like an espresso." },
          { es: "Due cappuccini.", en: "Two cappuccinos." },
          { es: "Un caffè, grazie.", en: "An espresso, thanks." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"due cappuccinos\". Write it correctly: two cappuccinos.", source: "two cappuccinos", answer: "due cappuccini", explanation: "-o → -i: no English -s." },
          { type: "translate", direction: "en-es", prompt: "A learner ordered \"un latte\" and got milk. Write it correctly: A latte, please.", source: "A latte, please.", answer: "Un latte macchiato, per favore.", altAnswers: ["Un caffellatte, per favore.", "Un latte macchiato per favore."], explanation: "\"Latte\" alone = milk." },
        ],
      },
      {
        heading: "Wrong pizza, stiff bill",
        body: [
          "\"Una pepperoni pizza\" has two problems: the word order is English, and \"peperoni\" means peppers (the vegetable). Ask for \"una pizza al salame piccante\" or \"una diavola\".",
          "\"Posso avere il conto?\" is correct and polite; the shortest everyday phrase is simply \"Il conto, per favore\".",
        ],
        examples: [
          { es: "Una pizza al salame piccante.", en: "A pizza with spicy salami." },
          { es: "Una pizza ai peperoni.", en: "A pizza with peppers." },
          { es: "Il conto, per favore.", en: "The bill, please." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner asked for \"una pepperoni pizza\". Write it correctly: A pizza with spicy salami.", source: "A pizza with spicy salami.", answer: "Una pizza al salame piccante.", altAnswers: ["Una diavola.", "Una pizza diavola."], explanation: "\"Peperoni\" are peppers; the pizza name comes after." },
          { type: "listen-choose", audio: "Una pizza ai peperoni.", question: "What's on this pizza?", options: ["peppers", "spicy salami", "pepperoni sausage", "mushrooms"], correctIndex: 0, explanation: "\"Peperoni\" = bell peppers." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"voglio un caffè!\" and write: I'd like an espresso.", source: "I'd like an espresso.", answer: "Vorrei un caffè.", altAnswers: ["Vorrei un caffè, per favore.", "Prendo un caffè."], explanation: "\"Vorrei\": polite." },
      { type: "translate", direction: "en-es", prompt: "Fix \"un'espresso\" and write: an espresso.", source: "an espresso", answer: "un espresso", altAnswers: ["un caffè"], explanation: "Masculine: no apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Fix \"due cornettos\" and write: two croissants.", source: "two croissants", answer: "due cornetti", altAnswers: ["due brioche"], explanation: "-o → -i." },
      { type: "translate", direction: "en-es", prompt: "Fix \"tre caffès\" and write: three espressos.", source: "three espressos", answer: "tre caffè", explanation: "Accented nouns don't change." },
      { type: "translate", direction: "en-es", prompt: "\"Posso avere il conto?\" is fine; now write the shortest everyday phrase: The bill, please.", source: "The bill, please.", answer: "Il conto, per favore.", altAnswers: ["Il conto per favore."], explanation: "The everyday phrase." },
      { type: "translate", direction: "en-es", prompt: "Fix \"una birra grande, voglio\" and write: I'd like a large beer.", source: "I'd like a large beer.", answer: "Vorrei una birra grande.", altAnswers: ["Prendo una birra grande.", "Vorrei una birra grande, per favore."], explanation: "\"Vorrei\" first." },
      { type: "fill-blank", prompt: "A learner wrote \"un pò di pane\". Write the Italian for the bold words.", en: "[Some] bread, please.", sentence: "___ di pane, per favore.", answer: "Un po'", explanation: "Apostrophe, not accent: \"po'\"." },
      { type: "fill-blank", prompt: "A learner wrote \"una acqua\". Write the Italian for the bold words.", en: "[A glass of water], please.", sentence: "___, per favore.", answer: "Un bicchiere d'acqua", altAnswers: ["Un bicchiere di acqua"], explanation: "Order water by the glass or bottle." },
      { type: "word-order", prompt: "Put the words in order to say: Two cappuccinos and a pizza with peppers.", words: ["Due", "cappuccini", "e", "una", "pizza", "ai", "peperoni."], translation: "Two cappuccinos and a pizza with peppers.", explanation: "\"Peperoni\" = peppers." },
      { type: "multiple-choice", question: "Which order is correct?", options: ["Vorrei due cappuccini.", "Voglio due cappuccinos.", "Vorrei due cappuccinos.", "Vorrei un'cappuccino."], correctIndex: 0, explanation: "\"Vorrei\" + Italian plural." },
      { type: "dictation", audio: "Un latte macchiato e due cornetti.", explanation: "\"Macchiato\": double c; \"cornetti\": plural." },
      {
        type: "speak",
        text: "Vorrei un caffè e una pizza al salame piccante.",
        prompt: "Fix it and say it: a learner said \"Voglio un'espresso e una pepperoni pizza.\"",
        tip: "pic-CAN-te: double c.",
        explanation: "\"Vorrei\", \"un caffè\", and the Italian pizza name.",
      },
    ],
  },
  {
    slug: "a1-dialogue-lab-trattoria",
    level: "IT-A1",
    number: 9,
    title: "Dialogue Lab: At a Trattoria in Roma",
    summary: "Order a full meal from a waiter who uses Lei: first course, main course, drinks, dessert and the bill.",
    duration: "14 min",
    sections: [
      {
        heading: "Arriving and the first course",
        body: [
          "Laura and her friend Tom arrive at a trattoria in Trastevere. The waiter uses \"Lei\" and \"voi\": \"Buonasera, quanti siete?\" \"Siamo in due.\" \"Ecco il menù.\" Then: \"Allora, per primo?\" (so, as a first course?).",
        ],
        examples: [
          { es: "Buonasera, quanti siete?", en: "Good evening, how many are you?" },
          { es: "Siamo in due.", en: "There are two of us." },
          { es: "Allora, per primo?", en: "So, as a first course?" },
          { es: "Per me la cacio e pepe.", en: "Cacio e pepe for me." },
          { es: "Io prendo l'amatriciana.", en: "I'll have the amatriciana." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are two of us.", answer: "Siamo in due.", explanation: "\"Siamo in\" + number." },
          { type: "listen-choose", audio: "Allora, per primo?", question: "What is the waiter asking about?", options: ["the first course", "the main course", "drinks", "dessert"], correctIndex: 0, explanation: "\"Primo\" = first course." },
        ],
      },
      {
        heading: "Main course and drinks",
        body: [
          "\"E per secondo?\" Tom asks for advice: \"Che cosa mi consiglia?\" Waiter: \"I saltimbocca alla romana sono molto buoni.\" Saltimbocca doesn't change in the plural: \"i saltimbocca\" (a portion is several), \"il saltimbocca\" for one. Then: \"Da bere?\" (to drink?): \"Un quarto di vino rosso e una bottiglia d'acqua naturale.\" House wine comes by the quarter or half litre.",
        ],
        examples: [
          { es: "E per secondo?", en: "And as a main course?" },
          { es: "Che cosa mi consiglia?", en: "What do you recommend?" },
          { es: "I saltimbocca sono molto buoni.", en: "The saltimbocca is very good." },
          { es: "Da bere?", en: "Anything to drink?" },
          { es: "Un quarto di vino rosso.", en: "A quarter litre of red wine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A quarter litre of red wine and a bottle of still water.", answer: "Un quarto di vino rosso e una bottiglia d'acqua naturale.", altAnswers: ["Un quarto di rosso e una bottiglia d'acqua naturale.", "Un quarto di vino rosso e una bottiglia di acqua naturale."], explanation: "House wine by the quarter; water by the bottle." },
          { type: "multiple-choice", question: "The waiter asks \"Da bere?\". Which answer fits?", options: ["Un'acqua frizzante, grazie.", "La carbonara, grazie.", "Siamo in due.", "Il conto, per favore."], correctIndex: 0, explanation: "\"Da bere\" = to drink." },
        ],
      },
      {
        heading: "Dessert and the bill",
        body: [
          "\"Volete un dolce?\" (would you like a dessert?) \"Sì, un tiramisù e due caffè.\" At the end: \"Il conto, per favore.\" \"Posso pagare con la carta?\" \"Certo.\"",
        ],
        examples: [
          { es: "Volete un dolce?", en: "Would you like a dessert?" },
          { es: "Un tiramisù e due caffè.", en: "A tiramisu and two espressos." },
          { es: "Posso pagare con la carta? Certo.", en: "Can I pay by card? Of course." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A tiramisu and [two espressos].", sentence: "Un tiramisù e ___.", answer: "due caffè", explanation: "\"Caffè\" stays the same in the plural." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cacio e pepe for me.", answer: "Per me la cacio e pepe.", altAnswers: ["Per me cacio e pepe.", "La cacio e pepe per me."], explanation: "\"Per me\" + dish." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you recommend? (to the waiter)", answer: "Che cosa mi consiglia?", altAnswers: ["Cosa mi consiglia?", "Che mi consiglia?"], explanation: "Lei form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a main course I'll have the saltimbocca.", answer: "Per secondo prendo i saltimbocca.", altAnswers: ["Per secondo prendo il saltimbocca.", "Per secondo vorrei i saltimbocca.", "Per secondo vorrei il saltimbocca."], explanation: "\"Per secondo\" = as a main. \"I saltimbocca\": the plural doesn't change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A tiramisu and two espressos.", answer: "Un tiramisù e due caffè.", explanation: "Both accented nouns." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I pay by card?", answer: "Posso pagare con la carta?", altAnswers: ["Posso pagare con carta?"], explanation: "\"Posso\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Anything to drink]?", sentence: "___?", answer: "Da bere", explanation: "\"Da bere?\" = to drink?" },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'll have] the amatriciana.", sentence: "___ l'amatriciana.", answer: "Prendo", altAnswers: ["Io prendo"], explanation: "\"L'amatriciana\": l' before a vowel." },
      { type: "word-order", prompt: "Put the words in order to say: Good evening, there are three of us.", words: ["Buonasera,", "siamo", "in", "tre."], translation: "Good evening, there are three of us.", explanation: "\"Siamo in tre\"." },
      { type: "multiple-choice", question: "The waiter says \"Allora, per secondo?\". What is he asking?", options: ["what you want as a main course", "if you want a second glass", "if you need a second menu", "if you're ready to pay"], correctIndex: 0, explanation: "\"Secondo\" = main course." },
      { type: "multiple-choice", question: "Put the meal in order: which comes first?", options: ["antipasto", "secondo", "contorno", "dolce"], correctIndex: 0, explanation: "Antipasto, primo, secondo with contorno, dolce." },
      { type: "dictation", audio: "Per me la carbonara e un quarto di rosso.", explanation: "\"Quarto di rosso\": house red." },
      {
        type: "speak",
        text: "Per primo la cacio e pepe, per secondo i saltimbocca. E da bere un quarto di vino rosso.",
        prompt: "Order your meal: cacio e pepe as a first course, saltimbocca as a main, and a quarter litre of red wine to drink.",
        tip: "\"Cacio\": CA-cho, the i is silent.",
        explanation: "\"Per primo\", \"per secondo\", \"da bere\".",
      },
    ],
  },
  {
    slug: "a1-mission-order-for-friends",
    level: "IT-A1",
    number: 10,
    title: "Real-World Mission: Order for the Table",
    summary: "Order breakfast at a bar, then dinner for three friends with an allergy, a vegetarian and a wine lover.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "Breakfast at the bar",
        body: [
          "Your mission: you're the one who speaks Italian, so you order for everyone. Morning in Bologna: Sara wants a cappuccino and a croissant, Ben a latte, and you an espresso. Pay at the till first: \"Due cappuccini, un latte macchiato e un caffè. Quant'è?\".",
        ],
        examples: [
          { es: "Un cappuccino, un latte macchiato e un caffè.", en: "A cappuccino, a latte and an espresso." },
          { es: "E due cornetti, per favore.", en: "And two croissants, please." },
          { es: "Quant'è? Sette euro e quaranta.", en: "How much is it? Seven euros forty." },
          { es: "Prendiamo tutto al banco.", en: "We'll have everything at the counter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A cappuccino, a latte and an espresso.", answer: "Un cappuccino, un latte macchiato e un caffè.", altAnswers: ["Un cappuccino, un caffellatte e un caffè."], explanation: "\"Latte\" alone would be milk." },
          { type: "listen-choose", audio: "Sono sette euro e quaranta.", question: "How much do you pay?", options: ["€7.40", "€7.14", "€17.40", "€4.70"], correctIndex: 0, explanation: "\"Sette euro e quaranta\" = 7,40 €." },
        ],
      },
      {
        heading: "Dinner for three",
        body: [
          "Evening at a trattoria. Sara is vegetarian, Ben is allergic to nuts, and you want the local dish. Say it for them with the lui / lei form: \"La mia amica è vegetariana\", \"Il mio amico è allergico alle noci\". Then order: \"Per lei i tortellini... no, sono con la carne!\"",
        ],
        examples: [
          { es: "Siamo in tre.", en: "There are three of us." },
          { es: "La mia amica è vegetariana.", en: "My friend is vegetarian." },
          { es: "Il mio amico è allergico alle noci.", en: "My friend is allergic to nuts." },
          { es: "Per lei le tagliatelle ai funghi.", en: "For her, the tagliatelle with mushrooms." },
          { es: "Per noi due i tortellini in brodo.", en: "For the two of us, tortellini in broth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My friend is allergic to nuts. (a man)", answer: "Il mio amico è allergico alle noci.", explanation: "\"Il mio amico\"; \"allergico\" agrees with him." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[For her], the tagliatelle with mushrooms.", sentence: "___ le tagliatelle ai funghi.", answer: "Per lei", explanation: "\"Per lei\" = for her." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two croissants, please.", answer: "Due cornetti, per favore.", altAnswers: ["Due cornetti per favore.", "Due brioche, per favore."], explanation: "-o → -i." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My friend is vegetarian. (a woman)", answer: "La mia amica è vegetariana.", explanation: "Feminine all the way." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there meat in the tortellini?", answer: "C'è la carne nei tortellini?", altAnswers: ["Nei tortellini c'è la carne?", "C'è carne nei tortellini?"], explanation: "\"C'è\" = is there." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you recommend? (to the waiter)", answer: "Che cosa mi consiglia?", altAnswers: ["Cosa mi consiglia?", "Che mi consiglia?"], explanation: "Lei form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll have a bottle of red wine.", answer: "Prendiamo una bottiglia di vino rosso.", altAnswers: ["Vorremmo una bottiglia di vino rosso.", "Noi prendiamo una bottiglia di vino rosso."], explanation: "\"Prendiamo\" for the table." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bill, please. Can I pay by card?", answer: "Il conto, per favore. Posso pagare con la carta?", altAnswers: ["Il conto per favore. Posso pagare con la carta?", "Il conto, per favore. Posso pagare con carta?"], explanation: "The two phrases to close the meal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There are three of us].", sentence: "___.", answer: "Siamo in tre", explanation: "\"Siamo in\" + number." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[For the two of us], tortellini in broth.", sentence: "___ i tortellini in brodo.", answer: "Per noi due", explanation: "\"Per noi due\" = for us two." },
      { type: "word-order", prompt: "Put the words in order to say: For me a mixed salad and some bread.", words: ["Per", "me", "un'insalata", "mista", "e", "un", "po'", "di", "pane."], translation: "For me a mixed salad and some bread.", explanation: "\"Per me\" + order + \"un po' di\"." },
      { type: "multiple-choice", question: "Ben is allergic to nuts. How do you tell the waiter?", options: ["Il mio amico è allergico alle noci.", "Il mio amico ha allergico alle noci.", "La mia amica è allergico alle noci.", "Il mio amico sono allergico."], correctIndex: 0, explanation: "Essere + agreeing adjective." },
      { type: "dictation", audio: "Siamo in tre e la mia amica è vegetariana.", explanation: "\"Siamo in tre\"; feminine agreement." },
      {
        type: "speak",
        text: "Buonasera, siamo in tre. La mia amica è vegetariana e il mio amico è allergico alle noci. Che cosa ci consiglia?",
        prompt: "At the trattoria: Good evening, there are three of us. My friend (she) is vegetarian and my friend (he) is allergic to nuts. What do you recommend for us?",
        tip: "\"Ci consiglia\" = recommends to us.",
        explanation: "Numbers, agreement and the Lei form.",
      },
    ],
  },
];

export const IT_A1_U07_WRITING: WriteExercise = {
  type: "write",
  prompt: "You're booking dinner for three at a trattoria in Bologna by message. Write to the restaurant: say how many you are and for when, mention one friend's diet or allergy, ask what they recommend, and say what you'd like to order (a first course, a main course and drinks). Ask if you can pay by card.",
  minWords: 30,
  maxWords: 80,
  rubric: [
    "Uses vorrei, prendo or per me to order, never voglio",
    "Uses the right article and plural for food and drink (due birre, i tortellini, tre caffè)",
    "Makes adjectives agree for diets and allergies (vegetariana, allergico)",
    "Uses polite forms to the restaurant: avete, che cosa mi consiglia?, posso pagare con la carta?",
  ],
  modelAnswer: "Buongiorno! Vorrei prenotare un tavolo per stasera alle otto. Siamo in tre. La mia amica è vegetariana. Che cosa mi consiglia? Per primo vorremmo i tortellini e le tagliatelle ai funghi, per secondo una cotoletta. Da bere una bottiglia di vino rosso e un'acqua frizzante. Posso pagare con la carta? Grazie!",
  explanation: "\"Vorrei prenotare\" is the polite request; \"siamo in tre\" says how many you are. \"Vegetariana\" agrees with \"amica\". \"Vorremmo\" is the we form of vorrei (you'll meet it properly in the next level). \"Un'acqua\" takes the apostrophe because \"acqua\" is feminine.",
};
