// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u02.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 2: The Rhythm of the Day. Breakfast
// at the bar, lunch and the pausa pranzo, the afternoon break and shop
// hours, the aperitivo, dinner, the passeggiata, the rules of coffee, and a
// day in Bologna. Intermediate grammar; B2 words glossed in the feedback.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U02: Lesson[] = [
  {
    slug: "culture-colazione-al-bar",
    level: "IT-Culture",
    number: 1,
    title: "Breakfast at the Bar",
    summary: "Have breakfast the Italian way: a cappuccino and a cornetto at the counter, the scontrino, and the unwritten rules of the bar.",
    duration: "15 min",
    sections: [
      {
        heading: "Cappuccino e cornetto",
        body: [
          "The Italian \"bar\" is a café, not a pub: it opens early, serves coffee all day and alcohol too, and many Italians start the day there. Breakfast is small and sweet: \"un cappuccino e un cornetto\", a croissant-like pastry that is plain, filled with jam (\"alla marmellata\"), cream (\"alla crema\") or chocolate. In Milan and much of the North the same pastry is \"una brioche\".",
          "Breakfast is rarely salty: eggs and bacon are hotel food (Ligurian focaccia is a famous local exception). At home, breakfast is often just coffee from the moka with biscuits or bread and jam. The whole thing takes five minutes.",
        ],
        examples: [
          { es: "Un cappuccino e un cornetto, per favore.", en: "A cappuccino and a croissant, please." },
          { es: "Ce l'avete un cornetto alla crema?", en: "Do you have a cream croissant?" },
          { es: "A Milano lo chiamano brioche.", en: "In Milan they call it a brioche." },
          { es: "La mattina faccio colazione al bar.", en: "In the morning I have breakfast at the bar." },
          { es: "A casa prendo solo un caffè con due biscotti.", en: "At home I just have a coffee with two cookies." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the morning I have breakfast at the bar.", answer: "La mattina faccio colazione al bar.", altAnswers: ["Di mattina faccio colazione al bar.", "Faccio colazione al bar la mattina."], explanation: "\"Fare colazione\" = to have breakfast; \"la mattina\" = in the mornings." },
          { type: "multiple-choice", question: "You're in a bar in Rome at 8 a.m. What's the most typical order?", options: ["Un cappuccino e un cornetto.", "Uova e pancetta.", "Un panino al prosciutto e una birra.", "Un piatto di pasta."], correctIndex: 0, explanation: "Italian breakfast is sweet and quick." },
        ],
      },
      {
        heading: "Al banco o al tavolo?",
        body: [
          "Most Italians drink their coffee standing \"al banco\", at the counter. Sitting \"al tavolo\" with table service can cost twice as much, especially in tourist squares; the price list on the wall shows both. Nobody minds if you stand, and nobody rushes you if you sit.",
          "In many city bars you pay first \"alla cassa\", get \"lo scontrino\" (the receipt), and then put it on the counter as you order. In small neighborhood bars you often order first and pay on the way out. Tipping isn't expected; some people leave a few coins on the saucer.",
        ],
        examples: [
          { es: "Lo prendo al banco.", en: "I'll have it at the counter." },
          { es: "Al tavolo costa di più.", en: "It costs more at a table." },
          { es: "Prima si paga alla cassa.", en: "First you pay at the register." },
          { es: "Ecco lo scontrino.", en: "Here's the receipt." },
          { es: "Pago io, offro io!", en: "I'm paying, it's on me!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It costs more at a table.", answer: "Al tavolo costa di più.", altAnswers: ["Costa di più al tavolo."], explanation: "\"Di più\" = more, at the end of the sentence." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "First you pay [at the register].", sentence: "Prima si paga ___.", answer: "alla cassa", explanation: "\"La cassa\" = the register; \"a\" + \"la\" = \"alla\"." },
          { type: "listen-choose", audio: "Lo prendo al banco.", question: "What does it mean?", options: ["I'll have it at the counter.", "I'll take it to go.", "I'll have it at the table.", "I'll pay at the bank."], correctIndex: 0, explanation: "\"Il banco\" here is the bar counter; a bank is \"la banca\"." },
        ],
      },
      {
        heading: "Small words, good manners",
        body: [
          "Greet when you walk in, \"Buongiorno!\", and say what you want simply: \"Un caffè, per favore\" or \"Mi fa un cappuccino?\". Bar staff are called by no title; you just catch their eye. Among friends, someone usually pays for everyone: \"Offro io\".",
          "\"Un caffè\" always means an espresso. A glass of tap water, \"un bicchiere d'acqua\", is usually free if you ask, and in Naples and other parts of the South it often comes automatically with your coffee.",
        ],
        examples: [
          { es: "Buongiorno! Mi fa un cappuccino?", en: "Good morning! Could I have a cappuccino?" },
          { es: "Posso avere un bicchiere d'acqua?", en: "Can I have a glass of water?" },
          { es: "Quant'è?", en: "How much is it?" },
          { es: "Sono due euro e venti.", en: "That's two euros twenty." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I have a glass of water?", answer: "Posso avere un bicchiere d'acqua?", altAnswers: ["Mi dà un bicchiere d'acqua?", "Mi fa un bicchiere d'acqua?", "Un bicchiere d'acqua, per favore?"], explanation: "\"Un bicchiere d'acqua\": double c, double q-sound." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is it?", answer: "Quant'è?", altAnswers: ["Quanto costa?", "Quanto è?", "Quanto le devo?", "Quanto ti devo?"], explanation: "\"Quant'è?\" is what you say at the register." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A cappuccino and a croissant, please.", answer: "Un cappuccino e un cornetto, per favore.", altAnswers: ["Un cappuccino e una brioche, per favore.", "Un cappuccino e un cornetto, grazie."], explanation: "\"Cornetto\" in the Center and South, \"brioche\" in the North." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have a chocolate croissant?", answer: "Avete un cornetto al cioccolato?", altAnswers: ["Ce l'avete un cornetto al cioccolato?", "C'è un cornetto al cioccolato?", "Avete una brioche al cioccolato?"], explanation: "Filling with \"a\" + article: \"al cioccolato\", \"alla crema\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have it at the counter.", answer: "Lo prendo al banco.", altAnswers: ["Lo bevo al banco."], explanation: "\"Lo\" stands for the coffee." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's on me!", answer: "Offro io!", altAnswers: ["Pago io!"], explanation: "\"Offrire\" = to treat; \"io\" after the verb for emphasis." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here's the receipt.", answer: "Ecco lo scontrino.", explanation: "\"Lo\" before s + consonant." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could I have] a cappuccino?", sentence: "___ un cappuccino?", answer: "Mi fa", altAnswers: ["Mi dà", "Posso avere"], explanation: "\"Mi fa...?\" is the everyday way to order at the bar." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Milan they call it [a brioche].", sentence: "A Milano lo chiamano ___.", answer: "brioche", altAnswers: ["una brioche"], explanation: "Same pastry, northern name." },
      { type: "word-order", prompt: "Put the words in order to say: At home I just have a coffee.", words: ["A", "casa", "prendo", "solo", "un", "caffè."], translation: "At home I just have a coffee.", explanation: "\"Prendere\" = to have (food or drink)." },
      { type: "multiple-choice", question: "What does \"un caffè\" mean in an Italian bar?", options: ["an espresso", "a large filter coffee", "a cappuccino", "any hot drink"], correctIndex: 0, explanation: "Ask for \"un caffè\" and you get an espresso." },
      { type: "dictation", audio: "Prima si paga alla cassa.", explanation: "\"Cassa\": double s." },
      { type: "speak", text: "Buongiorno! Un caffè e un cornetto alla marmellata, per favore.", prompt: "Say it in Italian: Good morning! A coffee and a jam croissant, please.", tip: "Caf-FÈ: stress the last syllable and hold the double f.", explanation: "A complete bar order." },
    ],
  },
  {
    slug: "culture-pranzo",
    level: "IT-Culture",
    number: 2,
    title: "Lunch",
    summary: "Learn how an Italian meal is structured, from antipasto to caffè, and how lunch works on a working day.",
    duration: "15 min",
    sections: [
      {
        heading: "Primo, secondo e contorno",
        body: [
          "A full Italian meal comes in courses: \"l'antipasto\" (starter: cold cuts, bruschetta, vegetables), \"il primo\" (pasta, risotto or soup), \"il secondo\" (meat or fish) with \"il contorno\" (a vegetable side on its own plate), then \"il dolce\" or fruit, and \"il caffè\".",
          "Pasta is never a side dish, and nobody eats salad and pasta on the same plate. At a restaurant you don't have to order everything: a primo alone, or a secondo with a contorno, is normal. Bread is on the table, but not for butter: it's for the sauce. Wiping the plate with bread is \"fare la scarpetta\", fine among friends.",
        ],
        examples: [
          { es: "Per primo prendo le tagliatelle al ragù.", en: "For the first course I'll have tagliatelle with ragù." },
          { es: "Come secondo c'è l'arrosto.", en: "For the main course there's roast meat." },
          { es: "Di contorno vorrei le patate al forno.", en: "As a side I'd like roast potatoes." },
          { es: "Non ce la faccio a prendere il dolce.", en: "I can't manage dessert." },
          { es: "Posso fare la scarpetta?", en: "Can I mop up the sauce with my bread?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a side I'd like roast potatoes.", answer: "Di contorno vorrei le patate al forno.", altAnswers: ["Come contorno vorrei le patate al forno.", "Di contorno vorrei patate al forno.", "Come contorno vorrei patate al forno."], explanation: "\"Di contorno\" or \"come contorno\" = as a side." },
          { type: "multiple-choice", question: "Which is a \"primo\"?", options: ["risotto ai funghi", "pollo arrosto", "insalata verde", "tiramisù"], correctIndex: 0, explanation: "Pasta, risotto and soups are \"primi\"." },
        ],
      },
      {
        heading: "La pausa pranzo",
        body: [
          "On a working day lunch is shorter. The \"pausa pranzo\" is usually an hour, around 13:00. Office workers eat in the company \"mensa\" (canteen), at a bar that serves a quick \"primo\", or at a \"tavola calda\", a cheap counter with hot dishes. Many get \"buoni pasto\", meal vouchers, as part of their pay.",
          "In Milan people bring lunch from home in a box they call \"la schiscetta\". Children at school eat in the \"mensa\" too, and on Sundays the long family lunch still rules.",
        ],
        examples: [
          { es: "Faccio la pausa pranzo all'una.", en: "I take my lunch break at one." },
          { es: "Mangiamo in mensa.", en: "We eat in the canteen." },
          { es: "Pago con i buoni pasto.", en: "I pay with meal vouchers." },
          { es: "Oggi mi sono portato il pranzo da casa.", en: "Today I brought lunch from home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I take my lunch break at one.", answer: "Faccio la pausa pranzo all'una.", altAnswers: ["Faccio pausa pranzo all'una.", "Io faccio la pausa pranzo all'una."], explanation: "\"All'una\": one o'clock is singular." },
          { type: "listen-choose", audio: "Pago con i buoni pasto.", question: "What does it mean?", options: ["I pay with meal vouchers.", "I pay with cash.", "I pay for good meals.", "I pay at the canteen."], correctIndex: 0, explanation: "\"Buoni pasto\" = meal vouchers." },
        ],
      },
      {
        heading: "Il conto",
        body: [
          "At a restaurant the check doesn't come until you ask: \"Il conto, per favore\" or, more politely, \"Ci porta il conto?\". Lingering is normal, and bringing it early would be rude. Many bills include \"il coperto\", a small cover charge per person for bread and table (in some places, Rome among them, it appears instead as a charge for bread and service).",
          "Service is included or not expected; leaving a few euros for good service is kind, not obligatory. Friends often split the check equally, \"pagare alla romana\".",
        ],
        examples: [
          { es: "Ci porta il conto, per favore?", en: "Could you bring us the check, please?" },
          { es: "Il coperto è due euro a persona.", en: "The cover charge is two euros per person." },
          { es: "Facciamo alla romana?", en: "Shall we split it equally?" },
          { es: "Si può pagare con la carta?", en: "Can you pay by card?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you bring us the check, please?", answer: "Ci porta il conto, per favore?", altAnswers: ["Ci può portare il conto, per favore?", "Il conto, per favore.", "Ci porti il conto, per favore?"], explanation: "\"Ci porta\" with \"Lei\" for the waiter." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Shall we [split it equally]?", sentence: "Facciamo ___?", answer: "alla romana", explanation: "\"Pagare alla romana\" = split the check equally." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For the first course I'll have risotto.", answer: "Per primo prendo il risotto.", altAnswers: ["Come primo prendo il risotto.", "Di primo prendo il risotto.", "Per primo prendo un risotto."], explanation: "\"Per primo\" = for the first course." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We eat in the canteen.", answer: "Mangiamo in mensa.", altAnswers: ["Mangiamo alla mensa.", "Noi mangiamo in mensa."], explanation: "\"In mensa\", like \"in ufficio\", needs no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you pay by card?", answer: "Si può pagare con la carta?", altAnswers: ["Posso pagare con la carta?", "Si può pagare con carta?", "Posso pagare con carta?"], explanation: "\"Con la carta\" = by card." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't manage dessert.", answer: "Non ce la faccio a prendere il dolce.", altAnswers: ["Non ce la faccio a mangiare il dolce.", "Il dolce non ce la faccio."], explanation: "\"Farcela\" = to manage: \"non ce la faccio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cover charge is two euros.", answer: "Il coperto è due euro.", altAnswers: ["Il coperto costa due euro."], explanation: "\"Euro\" doesn't change in the plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[For the main course] there's fish.", sentence: "___ c'è il pesce.", answer: "Come secondo", altAnswers: ["Per secondo", "Di secondo"], explanation: "\"Il secondo\" = the main course of meat or fish." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Today I [brought] lunch from home.", sentence: "Oggi mi sono ___ il pranzo da casa.", answer: "portato", altAnswers: ["portata"], explanation: "\"Portarsi\" uses \"essere\": \"mi sono portato\" (a woman: \"portata\")." },
      { type: "word-order", prompt: "Put the words in order to say: Pasta is never a side dish.", words: ["La", "pasta", "non", "è", "mai", "un", "contorno."], translation: "Pasta is never a side dish.", explanation: "\"Non... mai\" = never." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "l'antipasto", right: "the starter" },
          { left: "il primo", right: "the first course" },
          { left: "il secondo", right: "the main course" },
          { left: "il contorno", right: "the side dish" },
          { left: "il coperto", right: "the cover charge" },
        ],
        explanation: "The parts of a meal and the bill.",
      },
      { type: "dictation", audio: "Ci porta il conto, per favore?", explanation: "\"Conto\" = bill; \"racconto\" would be a story." },
      { type: "speak", text: "Per primo prendo le tagliatelle e poi, come secondo, il pesce con le verdure.", prompt: "Say it in Italian: For the first course I'll have tagliatelle and then, as a main, fish with vegetables.", tip: "Ta-glia-TEL-le: gl like the lli in million.", explanation: "Order course by course." },
    ],
  },
  {
    slug: "culture-riposo",
    level: "IT-Culture",
    number: 3,
    title: "The Afternoon Break",
    summary: "Understand why shops close in the early afternoon, read opening hours, and plan around the riposo, especially in the South.",
    duration: "15 min",
    sections: [
      {
        heading: "Shops close after lunch",
        body: [
          "In much of Italy small shops open around 9:00, close around 13:00, and reopen at 15:30 or 16:00 until 19:30 or 20:00. The gap is for lunch at home and a rest. Supermarkets, chains and big-city shops often keep \"orario continuato\", open all day without a break.",
          "Read the sign on the door: \"aperto\", \"chiuso\", \"orario\", \"chiuso per ferie\" (closed for vacation). Many shops close one half-day a week, often Monday morning, and small businesses may close for two or three weeks in August.",
        ],
        examples: [
          { es: "Il negozio chiude all'una e riapre alle quattro.", en: "The shop closes at one and reopens at four." },
          { es: "Il supermercato fa orario continuato.", en: "The supermarket is open all day." },
          { es: "Il lunedì mattina è chiuso.", en: "It's closed on Monday mornings." },
          { es: "Chiuso per ferie fino al 25 agosto.", en: "Closed for vacation until August 25." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop closes at one and reopens at four.", answer: "Il negozio chiude all'una e riapre alle quattro.", altAnswers: ["Il negozio chiude alle 13 e riapre alle 16.", "Il negozio chiude alle tredici e riapre alle sedici."], explanation: "\"All'una\", \"alle quattro\": the article goes with the hour." },
          { type: "multiple-choice", question: "A sign says \"Orario continuato 9-20\". What does it mean?", options: ["Open from 9 to 20 with no lunch break.", "Open only in the morning.", "Closed for holidays.", "Open 24 hours."], correctIndex: 0, explanation: "\"Continuato\" = continuous, without the afternoon break." },
        ],
      },
      {
        heading: "The South and the hot hours",
        body: [
          "The further south and the hotter the season, the longer the break. In a Sicilian or Apulian town in July, the streets empty from about 13:30 to 17:00; shutters come down and shops reopen late, staying open until 20:30 or later. In the South these hot early-afternoon hours have a name: \"la controra\".",
          "Many people have a short nap, \"un pisolino\" or, in Rome, \"una pennichella\". It's less common in cities with long commutes, but the rhythm survives in summer and in small towns.",
        ],
        examples: [
          { es: "D'estate i negozi riaprono alle cinque.", en: "In summer the shops reopen at five." },
          { es: "Dopo pranzo faccio un pisolino.", en: "After lunch I take a nap." },
          { es: "A quest'ora in paese non c'è nessuno.", en: "At this time there's nobody in the village." },
          { es: "La sera i negozi restano aperti fino a tardi.", en: "In the evening the shops stay open until late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After lunch I take a nap.", answer: "Dopo pranzo faccio un pisolino.", altAnswers: ["Dopo pranzo faccio una pennichella.", "Dopo pranzo faccio un riposino.", "Dopo il pranzo faccio un pisolino."], explanation: "\"Fare un pisolino\" = to take a nap; \"dopo pranzo\" needs no article." },
          { type: "listen-choose", audio: "A quest'ora in paese non c'è nessuno.", question: "What does it mean?", options: ["At this time there's nobody in the village.", "At this time the village is full.", "The village has no clock.", "Nobody lives in the village."], correctIndex: 0, explanation: "\"Non c'è nessuno\" = there's nobody: Italian keeps both negatives." },
        ],
      },
      {
        heading: "Don't call at two",
        body: [
          "The break shapes manners too. Traditionally you don't phone someone's home between about 14:00 and 16:00, nor late in the evening: you might wake them. With friends who text all day the rule is fading, but older people still notice.",
          "Plan errands for the morning: banks, small post offices and many public offices work mainly in the morning, and some close by 13:30, so check the hours before you go.",
        ],
        examples: [
          { es: "Non chiamare tra le due e le quattro.", en: "Don't call between two and four." },
          { es: "Scusa se ti disturbo a quest'ora.", en: "Sorry to bother you at this time." },
          { es: "La banca è aperta solo la mattina.", en: "The bank is only open in the morning." },
          { es: "Ci vado domattina presto.", en: "I'll go there early tomorrow morning." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry to bother you at this time.", answer: "Scusa se ti disturbo a quest'ora.", altAnswers: ["Scusi se la disturbo a quest'ora.", "Scusa se ti disturbo a quest'ora!", "Mi scusi se la disturbo a quest'ora."], explanation: "\"Disturbare\" = to bother; \"a quest'ora\" = at this time." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bank is open [only in the morning].", sentence: "La banca è aperta ___.", answer: "solo la mattina", altAnswers: ["solo di mattina", "soltanto la mattina"], explanation: "\"La mattina\" = in the morning." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In summer the shops reopen at five.", answer: "D'estate i negozi riaprono alle cinque.", altAnswers: ["In estate i negozi riaprono alle cinque.", "D'estate i negozi riaprono alle 17."], explanation: "\"Riaprire\" = to reopen." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's closed on Monday mornings.", answer: "Il lunedì mattina è chiuso.", altAnswers: ["È chiuso il lunedì mattina."], explanation: "\"Il lunedì\" = every Monday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's nobody in the street.", answer: "Non c'è nessuno per strada.", altAnswers: ["Per strada non c'è nessuno.", "Non c'è nessuno in strada.", "In strada non c'è nessuno."], explanation: "Double negative: \"non c'è nessuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't call between two and four.", answer: "Non chiamare tra le due e le quattro.", altAnswers: ["Non chiamare fra le due e le quattro.", "Non telefonare tra le due e le quattro."], explanation: "Negative \"tu\" imperative = \"non\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The supermarket is open all day.", answer: "Il supermercato è aperto tutto il giorno.", altAnswers: ["Il supermercato fa orario continuato."], explanation: "\"Tutto il giorno\" = all day." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Closed for vacation] until August 25.", sentence: "___ fino al 25 agosto.", answer: "Chiuso per ferie", explanation: "\"Le ferie\" = vacation days." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shops [stay open] until late.", sentence: "I negozi ___ fino a tardi.", answer: "restano aperti", altAnswers: ["rimangono aperti", "stanno aperti"], explanation: "\"Aperti\" agrees with \"negozi\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'll go there early tomorrow morning.", words: ["Ci", "vado", "domattina", "presto."], translation: "I'll go there early tomorrow morning.", explanation: "\"Ci\" = there; \"domattina\" = tomorrow morning." },
      { type: "multiple-choice", question: "What is \"la controra\"?", options: ["the hot early-afternoon hours in the South", "a late-night snack", "a counter in a bar", "a work shift"], correctIndex: 0, explanation: "The hours when southern towns rest." },
      { type: "dictation", audio: "Il negozio riapre alle quattro.", explanation: "\"Riapre\": one p." },
      { type: "speak", text: "Scusi, a che ora riaprite oggi pomeriggio?", prompt: "Say it in Italian: Excuse me, what time do you reopen this afternoon?", tip: "\"Riaprite\": voi, because you're asking the shop.", explanation: "\"Scusi\" for a stranger, \"voi\" for the business." },
    ],
  },
  {
    slug: "culture-aperitivo",
    level: "IT-Culture",
    number: 4,
    title: "The Aperitivo",
    summary: "Join the early-evening aperitivo: what to drink, what you get to eat, and the Milanese version that can replace dinner.",
    duration: "15 min",
    sections: [
      {
        heading: "Un drink prima di cena",
        body: [
          "\"L'aperitivo\" is a drink before dinner, roughly between 18:30 and 20:30, meant to open the appetite (\"aprire\", to open). It's social more than alcoholic: friends meet after work, talk, nibble, and go home or on to dinner. Getting drunk at an aperitivo would be odd.",
          "The classic drinks are bitter. \"Lo spritz\", born in the Veneto, mixes prosecco, a bitter like Aperol or Campari, and soda water. \"Il Negroni\" (gin, vermouth, Campari) comes from Florence; \"l'Americano\" is its milder ancestor. There are good non-alcoholic bitters too: ask for \"un analcolico\".",
        ],
        examples: [
          { es: "Ci vediamo per un aperitivo alle sette?", en: "Shall we meet for an aperitivo at seven?" },
          { es: "Per me uno spritz, grazie.", en: "A spritz for me, thanks." },
          { es: "Io non bevo: prendo un analcolico.", en: "I don't drink: I'll have a non-alcoholic one." },
          { es: "Lo spritz è nato in Veneto.", en: "The spritz was born in the Veneto." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we meet for an aperitivo at seven?", answer: "Ci vediamo per un aperitivo alle sette?", altAnswers: ["Ci vediamo alle sette per un aperitivo?", "Ci vediamo per l'aperitivo alle sette?", "Ci vediamo alle sette per l'aperitivo?"], explanation: "\"Ci vediamo\" = shall we meet, see you." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A spritz for me], thanks.", sentence: "___, grazie.", answer: "Per me uno spritz", explanation: "\"Uno\" before s + consonant: \"uno spritz\"." },
        ],
      },
      {
        heading: "Stuzzichini",
        body: [
          "With your drink come \"stuzzichini\", small bites: olives, chips, \"salatini\" (salty crackers), \"taralli\" in the South, little squares of pizza or focaccia. They're usually included in the price of the drink.",
          "In Milan the aperitivo grew into a buffet: for one drink at a fixed price you can fill a plate with pasta salads, cold cuts, cheese and vegetables. Milanese call it \"l'apericena\", aperitivo plus \"cena\", and for students it often replaces dinner.",
        ],
        examples: [
          { es: "Con lo spritz portano patatine e olive.", en: "They bring chips and olives with the spritz." },
          { es: "Il buffet è compreso nel prezzo.", en: "The buffet is included in the price." },
          { es: "Stasera facciamo un apericena?", en: "Shall we do an apericena tonight?" },
          { es: "Ho mangiato così tanto che salto la cena.", en: "I ate so much that I'm skipping dinner." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The buffet is included in the price.", answer: "Il buffet è compreso nel prezzo.", altAnswers: ["Il buffet è incluso nel prezzo."], explanation: "\"Compreso\" or \"incluso\" = included." },
          { type: "listen-choose", audio: "Ho mangiato così tanto che salto la cena.", question: "What does it mean?", options: ["I ate so much that I'm skipping dinner.", "I didn't eat, so I'm hungry for dinner.", "I'm cooking a big dinner.", "I eat a lot at dinner."], correctIndex: 0, explanation: "\"Saltare la cena\" = to skip dinner." },
        ],
      },
      {
        heading: "Cin cin",
        body: [
          "To toast, say \"Cin cin!\" or \"Salute!\" and look people in the eye as glasses touch. Splitting the bill is less common than at dinner: one person pays a round, \"offro io\", and the next time it's someone else's turn.",
          "Weekend aperitivi can be long. When it moves on to dinner, Italians say \"ci spostiamo\" (we're moving on). Saying \"Andiamo a fare un aperitivo\" is a gentle way to invite a new colleague or a date.",
        ],
        examples: [
          { es: "Cin cin! Alla nostra!", en: "Cheers! To us!" },
          { es: "Questo giro lo offro io.", en: "This round is on me." },
          { es: "La prossima volta tocca a te.", en: "Next time it's your turn." },
          { es: "Ci spostiamo in pizzeria?", en: "Shall we move on to the pizzeria?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Next time it's your turn.", answer: "La prossima volta tocca a te.", altAnswers: ["La prossima volta tocca a Lei.", "Tocca a te la prossima volta."], explanation: "\"Toccare a\" + person = to be someone's turn." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This round is on me.", answer: "Questo giro lo offro io.", altAnswers: ["Offro io questo giro.", "Questo giro offro io."], explanation: "The object comes first and \"lo\" repeats it: \"questo giro lo offro io\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't drink: I'll have a non-alcoholic one.", answer: "Non bevo: prendo un analcolico.", altAnswers: ["Io non bevo: prendo un analcolico.", "Non bevo, prendo un analcolico."], explanation: "\"Un analcolico\" = a non-alcoholic aperitivo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The spritz was born in the Veneto.", answer: "Lo spritz è nato in Veneto.", altAnswers: ["Lo spritz è nato nel Veneto."], explanation: "\"Nascere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They bring olives with the spritz.", answer: "Con lo spritz portano le olive.", altAnswers: ["Portano le olive con lo spritz.", "Con lo spritz portano olive.", "Portano olive con lo spritz."], explanation: "\"Con lo spritz\": \"lo\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we move on to the pizzeria?", answer: "Ci spostiamo in pizzeria?", altAnswers: ["Andiamo in pizzeria?"], explanation: "\"Spostarsi\" = to move on; \"in pizzeria\", like \"in trattoria\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cheers! To us!", answer: "Cin cin! Alla nostra!", altAnswers: ["Salute! Alla nostra!"], explanation: "\"Alla nostra (salute)\" = to our health, to us." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Shall we do [an apericena] tonight?", sentence: "Stasera facciamo ___?", answer: "un apericena", altAnswers: ["un'apericena"], explanation: "Both genders are heard for this new word." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [skipping] dinner.", sentence: "___ la cena.", answer: "Salto", altAnswers: ["Io salto"], explanation: "\"Saltare\" = to jump, and to skip a meal." },
      { type: "word-order", prompt: "Put the words in order to say: The aperitivo opens the appetite.", words: ["L'aperitivo", "apre", "l'appetito."], translation: "The aperitivo opens the appetite.", explanation: "\"Aperitivo\" comes from \"aprire\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "gli stuzzichini", right: "small bites" },
          { left: "le patatine", right: "chips" },
          { left: "un analcolico", right: "a non-alcoholic drink" },
          { left: "il giro", right: "the round" },
          { left: "cin cin", right: "cheers" },
        ],
        explanation: "Aperitivo words.",
      },
      { type: "dictation", audio: "Ci vediamo per un aperitivo alle sette?", explanation: "\"Aperitivo\": one p, one r." },
      { type: "speak", text: "Per me un Negroni, e per lei un analcolico. Offro io!", prompt: "Say it in Italian: A Negroni for me, and a non-alcoholic one for her. It's on me!", tip: "Ne-GRO-ni: stress the middle syllable.", explanation: "\"Per me\", \"per lei\": ordering for two." },
    ],
  },
  {
    slug: "culture-cena",
    level: "IT-Culture",
    number: 5,
    title: "Dinner",
    summary: "Eat dinner at Italian times, understand the family meal, and be a good guest when you're invited to someone's home.",
    duration: "15 min",
    sections: [
      {
        heading: "What time is dinner?",
        body: [
          "Italians eat late by American standards. In the North dinner is around 19:30 or 20:00; in Rome and the South 20:30 or 21:00, and later still in summer. Restaurants rarely serve dinner before 19:00, and a table at 18:00 will be very lonely. Many pizzerias open only in the evening: pizza is mostly a dinner food.",
          "If lunch was big, dinner is lighter: a soup, vegetables, an omelette (\"una frittata\"), cheese and bread. In many homes the TV news at 20:00 is on during the meal.",
        ],
        examples: [
          { es: "Da noi si cena alle nove.", en: "At our place we have dinner at nine." },
          { es: "Il ristorante apre alle sette e mezza.", en: "The restaurant opens at seven-thirty." },
          { es: "Stasera mangio leggero: una minestra e basta.", en: "Tonight I'm eating light: just a soup." },
          { es: "Andiamo a mangiare una pizza?", en: "Shall we go out for a pizza?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At our place we have dinner at nine.", answer: "Da noi si cena alle nove.", altAnswers: ["Da noi ceniamo alle nove.", "A casa nostra si cena alle nove.", "A casa nostra ceniamo alle nove."], explanation: "\"Da noi\" = at our place, where we're from; \"cenare\" = to have dinner." },
          { type: "multiple-choice", question: "You want dinner in a Neapolitan trattoria. When should you book?", options: ["21:00", "17:30", "18:00", "16:00"], correctIndex: 0, explanation: "In the South dinner starts late; at 18:00 the kitchen may not even be open." },
        ],
      },
      {
        heading: "Invited to dinner",
        body: [
          "Being invited home is a sign of friendship. Bring something: a bottle of wine, flowers, or a tray of pastries from the \"pasticceria\". Arriving ten or fifteen minutes late is normal; arriving early is not. Don't offer to help in the kitchen too insistently: the host is in charge.",
          "Before eating, someone says \"Buon appetito!\" and the answer is \"Grazie, altrettanto!\". Expect more food than you can eat and to be offered seconds: \"Ne vuoi ancora?\". Praising the food is the best thanks.",
        ],
        examples: [
          { es: "Che cosa posso portare?", en: "What can I bring?" },
          { es: "Porto il dolce, va bene?", en: "I'll bring dessert, OK?" },
          { es: "Buon appetito! Grazie, altrettanto!", en: "Enjoy your meal! Thanks, you too!" },
          { es: "Ne vuoi ancora un po'?", en: "Would you like a bit more?" },
          { es: "Era tutto buonissimo, complimenti!", en: "Everything was delicious, my compliments!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What can I bring?", answer: "Che cosa posso portare?", altAnswers: ["Cosa posso portare?", "Che posso portare?", "Cosa porto?"], explanation: "\"Portare\" = to bring." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Would you like [a bit more]?", sentence: "Ne vuoi ___?", answer: "ancora un po'", explanation: "\"Un po'\" with an apostrophe, never an accent." },
          { type: "listen-choose", audio: "Era tutto buonissimo, complimenti!", question: "What does it mean?", options: ["Everything was delicious, my compliments!", "It was all too much, thank you!", "Everything is ready, sit down!", "Was everything good?"], correctIndex: 0, explanation: "\"Complimenti!\" praises the cook." },
        ],
      },
      {
        heading: "Al tavolo",
        body: [
          "Keep both hands on the table, not in your lap. Pasta is eaten with a fork alone; a spoon to twirl spaghetti looks childish to many Italians. Cappuccino with dinner is unthinkable, but water and wine are always on the table, and drinking wine without food is rare.",
          "Dinner ends slowly with fruit, dessert, coffee, perhaps \"un amaro\" (a bitter herbal liqueur) or \"un limoncello\". Leaving straight after eating seems rude: the talk at the table, \"stare a tavola\", is the point.",
        ],
        examples: [
          { es: "Gli spaghetti si mangiano con la forchetta.", en: "Spaghetti is eaten with a fork." },
          { es: "Prendi un amaro?", en: "Will you have an amaro?" },
          { es: "Siamo rimasti a tavola fino a mezzanotte.", en: "We stayed at the table until midnight." },
          { es: "Un goccio di vino?", en: "A drop of wine?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Spaghetti is eaten with a fork.", answer: "Gli spaghetti si mangiano con la forchetta.", explanation: "\"Spaghetti\" is plural in Italian, so \"si mangiano\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We stayed at the table until midnight.", answer: "Siamo rimasti a tavola fino a mezzanotte.", altAnswers: ["Siamo rimaste a tavola fino a mezzanotte.", "Siamo stati a tavola fino a mezzanotte.", "Siamo state a tavola fino a mezzanotte."], explanation: "\"Rimanere\" takes \"essere\"; \"a tavola\" has no article." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tonight I'm eating light.", answer: "Stasera mangio leggero.", altAnswers: ["Questa sera mangio leggero."], explanation: "In \"mangiare leggero\" the adjective works like an adverb, so it doesn't change: a woman also says \"mangio leggero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll bring dessert.", answer: "Porto il dolce.", altAnswers: ["Porto io il dolce.", "Il dolce lo porto io."], explanation: "Present for a near-future plan." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everything was delicious!", answer: "Era tutto buonissimo!", altAnswers: ["Era tutto squisito!", "Era tutto delizioso!", "Tutto buonissimo!"], explanation: "Imperfetto \"era\" to describe the meal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go out for a pizza?", answer: "Andiamo a mangiare una pizza?", altAnswers: ["Andiamo a prendere una pizza?", "Usciamo a mangiare una pizza?"], explanation: "\"Andare a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant opens at seven-thirty.", answer: "Il ristorante apre alle sette e mezza.", altAnswers: ["Il ristorante apre alle sette e mezzo.", "Il ristorante apre alle 19:30.", "Il ristorante apre alle diciannove e trenta."], explanation: "\"E mezza\" or \"e mezzo\" = half past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Enjoy your meal! Thanks, [you too]!", sentence: "Buon appetito! Grazie, ___!", answer: "altrettanto", altAnswers: ["anche a te", "anche a Lei"], explanation: "\"Altrettanto\" = the same to you." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Will you have [an amaro]?", sentence: "Prendi ___?", answer: "un amaro", explanation: "\"Un amaro\" = a bitter herbal liqueur, drunk after dinner." },
      { type: "word-order", prompt: "Put the words in order to say: In the South people have dinner late.", words: ["Al", "Sud", "si", "cena", "tardi."], translation: "In the South people have dinner late.", explanation: "\"Si cena\" = people have dinner." },
      { type: "multiple-choice", question: "Your host offers you more pasta and you're full. What's the most polite reply?", options: ["Grazie, era buonissima, ma non ce la faccio più!", "No.", "Non mi piace.", "Basta così, è troppa."], correctIndex: 0, explanation: "Praise first, then refuse gently." },
      { type: "dictation", audio: "Buon appetito! Grazie, altrettanto!", explanation: "\"Appetito\": double p, then single t." },
      { type: "speak", text: "Grazie per l'invito! Ho portato del vino e un po' di dolci.", prompt: "Say it in Italian: Thanks for the invitation! I brought some wine and a few pastries.", tip: "In-VI-to: stress the middle.", explanation: "\"Del vino\" = some wine; \"un po' di dolci\" = a few sweets." },
    ],
  },
  {
    slug: "culture-passeggiata",
    level: "IT-Culture",
    number: 6,
    title: "The Passeggiata",
    summary: "Take part in the evening passeggiata: where people walk, when, why they dress up, and the words for it around Italy.",
    duration: "15 min",
    sections: [
      {
        heading: "Fare due passi",
        body: [
          "\"La passeggiata\" is the slow evening walk along the main street, \"il corso\", or around the piazza. It happens before dinner on weekdays, after dinner in summer, and above all on Sunday. Nobody is going anywhere: the point is to see and be seen, greet neighbors, stop for a chat and a gelato.",
          "Italians say \"fare una passeggiata\", \"fare due passi\" (literally two steps) or \"fare un giro\". By the sea the stage is \"il lungomare\".",
        ],
        examples: [
          { es: "Facciamo due passi?", en: "Shall we go for a little walk?" },
          { es: "La domenica tutti passeggiano sul corso.", en: "On Sundays everyone strolls along the main street." },
          { es: "Dopo cena facciamo un giro sul lungomare.", en: "After dinner we take a stroll on the seafront." },
          { es: "Ci fermiamo a prendere un gelato.", en: "We stop to get an ice cream." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go for a little walk?", answer: "Facciamo due passi?", altAnswers: ["Facciamo una passeggiata?", "Facciamo un giro?", "Andiamo a fare due passi?"], explanation: "\"Fare due passi\" = to take a short walk." },
          { type: "multiple-choice", question: "What is \"il corso\" in an Italian town?", options: ["the main street", "the racetrack", "the course of a meal", "the river bank"], correctIndex: 0, explanation: "Many towns have a \"Corso\", the main street, often closed to traffic." },
        ],
      },
      {
        heading: "Vedere e farsi vedere",
        body: [
          "People dress for the passeggiata: clean shoes, a nice jacket, hair done. Older couples walk arm in arm, teenagers walk in groups, families push strollers, and grandparents sit on benches and comment on everyone. It's where gossip is born.",
          "Each place has its word. In Naples and the South it was \"lo struscio\", from \"strusciare\", to drag your feet; in Bologna and some other cities young people \"fanno le vasche\", walking up and down the street like swimming laps in a pool.",
        ],
        examples: [
          { es: "Si sono vestiti bene per la passeggiata.", en: "They dressed up for the walk." },
          { es: "I nonni commentano tutti quelli che passano.", en: "The grandparents comment on everyone who passes." },
          { es: "Abbiamo fatto le vasche in via Indipendenza.", en: "We walked up and down Via Indipendenza." },
          { es: "Camminano a braccetto.", en: "They're walking arm in arm." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're walking arm in arm.", answer: "Camminano a braccetto.", altAnswers: ["Passeggiano a braccetto.", "Loro camminano a braccetto."], explanation: "\"A braccetto\" = arm in arm." },
          { type: "listen-choose", audio: "Si sono vestiti bene per la passeggiata.", question: "What does it mean?", options: ["They dressed up for the walk.", "They got dressed quickly.", "They're wearing walking shoes.", "They bought clothes on the walk."], correctIndex: 0, explanation: "\"Vestirsi bene\" = to dress up." },
        ],
      },
      {
        heading: "Il gelato",
        body: [
          "The passeggiata often ends at the \"gelateria\". You choose \"coppetta\" (cup) or \"cono\" (cone), then the size, then two or three flavors: \"Un cono piccolo, cioccolato e nocciola\". Many places add whipped cream, \"la panna\", on top if you ask.",
          "Good gelaterie show their gelato flat in metal tubs, in natural colors: bright blue or towering mounds usually mean industrial products. Pistachio should be brownish green, not neon.",
        ],
        examples: [
          { es: "Un cono piccolo, cioccolato e nocciola.", en: "A small cone, chocolate and hazelnut." },
          { es: "Coppetta o cono?", en: "Cup or cone?" },
          { es: "Vuole la panna sopra?", en: "Would you like whipped cream on top?" },
          { es: "Il pistacchio vero non è verde fluo.", en: "Real pistachio isn't neon green." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A small cone, chocolate and hazelnut.", answer: "Un cono piccolo, cioccolato e nocciola.", altAnswers: ["Un cono piccolo con cioccolato e nocciola.", "Un cono piccolo, cioccolato e nocciola, per favore."], explanation: "Size after the noun: \"un cono piccolo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Would you like [whipped cream] on top?", sentence: "Vuole la ___ sopra?", answer: "panna", explanation: "\"La panna\" = cream; \"il pane\" is bread." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays everyone strolls along the main street.", answer: "La domenica tutti passeggiano sul corso.", altAnswers: ["La domenica tutti passeggiano lungo il corso.", "La domenica passeggiano tutti sul corso."], explanation: "\"Tutti\" takes a plural verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We stop to get an ice cream.", answer: "Ci fermiamo a prendere un gelato.", altAnswers: ["Ci fermiamo per prendere un gelato."], explanation: "\"Fermarsi a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cup or cone?", answer: "Coppetta o cono?", explanation: "The gelato seller's first question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After dinner we take a stroll on the seafront.", answer: "Dopo cena facciamo un giro sul lungomare.", altAnswers: ["Dopo cena facciamo una passeggiata sul lungomare.", "Dopo cena facciamo due passi sul lungomare."], explanation: "\"Sul lungomare\" = on the seafront." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They dressed up for the walk.", answer: "Si sono vestiti bene per la passeggiata.", altAnswers: ["Si sono vestite bene per la passeggiata."], explanation: "Reflexive verbs take \"essere\": \"si sono vestiti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [walked up and down] in the town center.", sentence: "Abbiamo ___ in centro.", answer: "fatto le vasche", explanation: "\"Fare le vasche\" = to walk up and down, like laps in a pool." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The grandparents comment on [everyone who passes].", sentence: "I nonni commentano ___.", answer: "tutti quelli che passano", explanation: "\"Quelli che\" = those who." },
      { type: "word-order", prompt: "Put the words in order to say: Real pistachio isn't neon green.", words: ["Il", "pistacchio", "vero", "non", "è", "verde", "fluo."], translation: "Real pistachio isn't neon green.", explanation: "\"Vero\" after the noun = real, genuine." },
      { type: "multiple-choice", question: "Why do Italians do the passeggiata?", options: ["To see people and be seen", "To get to work", "To exercise hard", "To go shopping"], correctIndex: 0, explanation: "It's a social ritual, not a workout." },
      { type: "dictation", audio: "Facciamo due passi sul corso?", explanation: "\"Passi\": double s." },
      { type: "speak", text: "Stasera facciamo due passi in centro e poi prendiamo un gelato?", prompt: "Say it in Italian: Tonight shall we take a little walk downtown and then get an ice cream?", tip: "Ge-LA-to: soft g, like the j in jelly.", explanation: "A typical invitation." },
    ],
  },
  {
    slug: "culture-coffee-rules",
    level: "IT-Culture",
    number: 7,
    title: "The Rules of Coffee",
    summary: "Order coffee like an Italian: when cappuccino stops, what to ask for after a meal, caffè corretto, and the Neapolitan caffè sospeso.",
    duration: "15 min",
    sections: [
      {
        heading: "No cappuccino after lunch",
        body: [
          "Milk drinks belong to the morning. After about 11:00, and certainly after a meal, Italians drink \"un caffè\", an espresso: they believe hot milk on a full stomach is heavy. Nobody will refuse to serve you a cappuccino at 15:00, but the barista will know you're a tourist.",
          "Coffee is drunk standing, in two or three sips, at almost any hour. After lunch or dinner it closes the meal; a cappuccino with pizza is the classic foreigner's mistake.",
        ],
        examples: [
          { es: "Il cappuccino si beve solo la mattina.", en: "Cappuccino is only drunk in the morning." },
          { es: "Dopo pranzo prendo un caffè.", en: "After lunch I have an espresso." },
          { es: "Due caffè, per favore.", en: "Two espressos, please." },
          { es: "Il caffè chiude il pasto.", en: "Coffee closes the meal." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cappuccino is only drunk in the morning.", answer: "Il cappuccino si beve solo la mattina.", altAnswers: ["Il cappuccino si beve solo di mattina.", "Il cappuccino si beve soltanto la mattina."], explanation: "\"Si beve\" = is drunk." },
          { type: "multiple-choice", question: "It's 14:30 and you've just had lunch. What do you order to fit in?", options: ["Un caffè.", "Un cappuccino.", "Un latte macchiato.", "Un caffellatte."], correctIndex: 0, explanation: "After a meal, an espresso." },
        ],
      },
      {
        heading: "Macchiato, lungo, corretto",
        body: [
          "The variations are precise. \"Un caffè macchiato\" is an espresso stained with a little milk foam; \"un latte macchiato\" is a glass of hot milk stained with coffee. Ask for \"un latte\" and you get a glass of milk. \"Ristretto\" is shorter and stronger, \"lungo\" longer and lighter, and \"un americano\" is an espresso topped up with hot water.",
          "\"Un caffè corretto\" is corrected with a shot of grappa, sambuca or brandy, a habit of cold mornings and old bars. \"Un deca\" is decaf, and \"un caffè d'orzo\" is made from barley, with no caffeine at all.",
        ],
        examples: [
          { es: "Un macchiato caldo, per favore.", en: "A macchiato with hot milk, please." },
          { es: "Lo vorrei ristretto.", en: "I'd like it short and strong." },
          { es: "Mi fa un caffè corretto alla grappa?", en: "Could I have an espresso with a shot of grappa?" },
          { es: "La sera prendo solo un deca.", en: "In the evening I only have decaf." },
          { es: "Ho chiesto un latte e mi hanno dato un bicchiere di latte.", en: "I asked for a latte and they gave me a glass of milk." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the evening I only have decaf.", answer: "La sera prendo solo un deca.", altAnswers: ["La sera prendo solo un decaffeinato.", "Di sera prendo solo un deca.", "Di sera prendo solo un decaffeinato.", "La sera bevo solo un decaffeinato."], explanation: "\"Un deca\" is short for \"un decaffeinato\"." },
          { type: "listen-choose", audio: "Un latte macchiato, per favore.", question: "What did they order?", options: ["hot milk with a little coffee", "an espresso with a little milk", "a glass of cold milk", "a coffee with grappa"], correctIndex: 0, explanation: "\"Latte macchiato\" is mostly milk; \"caffè macchiato\" is mostly coffee." },
        ],
      },
      {
        heading: "Il caffè sospeso",
        body: [
          "In Naples there's an old custom: you pay for two coffees, drink one, and leave the other \"sospeso\", suspended, for someone who can't afford it. The barista keeps count and gives it to whoever asks. The tradition faded and then spread again in the 2010s, even abroad.",
          "At home most families use \"la moka\", the octagonal stovetop pot invented in Italy in 1933. Coffee is also hospitality: \"Ti offro un caffè?\" is how an Italian says welcome, let's talk.",
        ],
        examples: [
          { es: "Ho lasciato un caffè sospeso.", en: "I left a suspended coffee." },
          { es: "C'è un sospeso?", en: "Is there a suspended coffee?" },
          { es: "Metto su la moka.", en: "I'll put the moka on." },
          { es: "Ti offro un caffè?", en: "Can I buy you a coffee?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I buy you a coffee?", answer: "Ti offro un caffè?", altAnswers: ["Le offro un caffè?", "Posso offrirti un caffè?", "Posso offrirLe un caffè?", "Ti posso offrire un caffè?"], explanation: "\"Offrire\" = to treat someone." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll [put the moka on].", sentence: "___ la moka.", answer: "Metto su", explanation: "\"Mettere su\" = to put on the stove." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After lunch I have an espresso.", answer: "Dopo pranzo prendo un caffè.", altAnswers: ["Dopo pranzo bevo un caffè.", "Dopo il pranzo prendo un caffè.", "Dopo pranzo prendo un espresso."], explanation: "In Italy \"un caffè\" is the espresso." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two espressos, please.", answer: "Due caffè, per favore.", altAnswers: ["Due caffè, grazie.", "Mi fa due caffè?"], explanation: "\"Caffè\" doesn't change in the plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like it short and strong.", answer: "Lo vorrei ristretto.", altAnswers: ["Lo voglio ristretto.", "Ristretto, per favore."], explanation: "\"Ristretto\" = less water, stronger taste." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there a suspended coffee?", answer: "C'è un sospeso?", altAnswers: ["C'è un caffè sospeso?"], explanation: "The Neapolitan question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked for a latte and they gave me milk.", answer: "Ho chiesto un latte e mi hanno dato del latte.", altAnswers: ["Ho chiesto un latte e mi hanno dato un bicchiere di latte.", "Ho ordinato un latte e mi hanno dato del latte."], explanation: "\"Latte\" means milk. Ask for \"un latte macchiato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Could I have an espresso [with a shot of grappa]?", sentence: "Mi fa un caffè ___?", answer: "corretto alla grappa", altAnswers: ["corretto grappa"], explanation: "\"Corretto\" = corrected with spirits." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A coffee [made from barley], please.", sentence: "Un caffè ___, per favore.", answer: "d'orzo", altAnswers: ["di orzo"], explanation: "\"L'orzo\" = barley; caffeine-free." },
      { type: "word-order", prompt: "Put the words in order to say: Coffee is drunk standing at the counter.", words: ["Il", "caffè", "si", "beve", "in", "piedi", "al", "banco."], translation: "Coffee is drunk standing at the counter.", explanation: "\"In piedi\" = standing." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "caffè macchiato", right: "espresso with a spot of milk" },
          { left: "latte macchiato", right: "hot milk with a little coffee" },
          { left: "caffè lungo", right: "a longer, lighter espresso" },
          { left: "caffè corretto", right: "espresso with a shot of liqueur" },
          { left: "caffè d'orzo", right: "barley coffee" },
        ],
        explanation: "The second word changes everything.",
      },
      { type: "dictation", audio: "Il cappuccino si beve la mattina.", explanation: "\"Cappuccino\": double p, double c." },
      { type: "speak", text: "Un caffè macchiato e un bicchiere d'acqua, per favore.", prompt: "Say it in Italian: An espresso with a spot of milk and a glass of water, please.", tip: "Mac-CHIA-to: hard k sound, held double.", explanation: "A perfectly Italian afternoon order." },
    ],
  },
  {
    slug: "culture-dialogue-a-day-in-bologna",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: A Day in Bologna",
    summary: "Spend a day in Bologna with your friend Marco, from breakfast at the bar to lunch, the arcades and an evening aperitivo.",
    duration: "15 min",
    sections: [
      {
        heading: "La mattina",
        body: [
          "You're visiting Marco, who studies in Bologna. The city is nicknamed \"la dotta, la grassa, la rossa\": learned for its university, fat for its food, red for its rooftops and its left-wing politics. You start at his usual bar.",
          "Marco: \"Due cappuccini e due brioche, per favore.\" You: \"Brioche? Non si dice cornetto?\" Marco: \"A Roma sì, qui di solito si dice brioche.\" Then a walk under \"i portici\", the covered arcades that line the streets for dozens of kilometers and became a UNESCO site in 2021.",
        ],
        examples: [
          { es: "Due cappuccini e due brioche, per favore.", en: "Two cappuccinos and two brioches, please." },
          { es: "Non si dice cornetto?", en: "Don't you say cornetto?" },
          { es: "Con i portici non serve l'ombrello.", en: "With the arcades you don't need an umbrella." },
          { es: "Bologna la chiamano la dotta, la grassa e la rossa.", en: "They call Bologna the learned, the fat and the red." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With the arcades you don't need an umbrella.", answer: "Con i portici non serve l'ombrello.", altAnswers: ["Con i portici non c'è bisogno dell'ombrello.", "Con i portici non serve un ombrello."], explanation: "\"Non serve\" = you don't need, it isn't necessary." },
          { type: "multiple-choice", question: "Why is Bologna called \"la dotta\"?", options: ["for its ancient university", "for its food", "for its red roofs", "for its politics"], correctIndex: 0, explanation: "\"Dotto\" = learned; the university dates from 1088." },
        ],
      },
      {
        heading: "Il pranzo",
        body: [
          "At lunch you make a mistake. You: \"Prendo gli spaghetti alla bolognese.\" Marco laughs: \"Qui non esistono! Prendi le tagliatelle al ragù.\" In Bologna ragù goes with fresh egg pasta, and \"tortellini\" are served \"in brodo\", in broth.",
          "After lunch Marco takes a coffee, not a cappuccino, and you walk to Piazza Maggiore and the two leaning towers, \"le Due Torri\".",
        ],
        examples: [
          { es: "Gli spaghetti alla bolognese qui non esistono.", en: "Spaghetti bolognese doesn't exist here." },
          { es: "Prendi le tagliatelle al ragù.", en: "Have the tagliatelle with ragù." },
          { es: "I tortellini si mangiano in brodo.", en: "Tortellini are eaten in broth." },
          { es: "Le Due Torri sono il simbolo della città.", en: "The Two Towers are the symbol of the city." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have the tagliatelle with ragù.", answer: "Prendi le tagliatelle al ragù.", altAnswers: ["Prenda le tagliatelle al ragù."], explanation: "Imperative \"tu\" of \"prendere\": \"prendi\"." },
          { type: "listen-choose", audio: "I tortellini si mangiano in brodo.", question: "What does it mean?", options: ["Tortellini are eaten in broth.", "Tortellini are eaten with ragù.", "Tortellini are made at home.", "Tortellini are eaten on Sundays."], correctIndex: 0, explanation: "\"In brodo\" = in broth." },
        ],
      },
      {
        heading: "La sera",
        body: [
          "At seven you meet Marco's friends for an aperitivo in a lively street. Marco: \"Cosa prendi?\" You: \"Uno spritz, e offro io questo giro.\" Friend: \"Grazie! Cin cin!\" Then everyone moves on to a trattoria for a late dinner.",
          "At the end of the day: \"Che giornata! Bologna mi è piaciuta tantissimo.\" Marco: \"Allora torna presto!\"",
        ],
        examples: [
          { es: "Cosa prendi?", en: "What are you having?" },
          { es: "Questo giro offro io.", en: "This round's on me." },
          { es: "Bologna mi è piaciuta tantissimo.", en: "I loved Bologna." },
          { es: "Allora torna presto!", en: "Then come back soon!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I loved Bologna.", answer: "Bologna mi è piaciuta tantissimo.", altAnswers: ["Bologna mi è piaciuta moltissimo.", "Mi è piaciuta tantissimo Bologna.", "Bologna mi è piaciuta molto."], explanation: "\"Piacere\" takes \"essere\" and agrees with the city: \"piaciuta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Then [come back] soon!", sentence: "Allora ___ presto!", answer: "torna", explanation: "Imperative \"tu\" of \"tornare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two cappuccinos, please.", answer: "Due cappuccini, per favore.", altAnswers: ["Due cappuccini, grazie."], explanation: "\"Cappuccino\" → \"cappuccini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Spaghetti bolognese doesn't exist here.", answer: "Gli spaghetti alla bolognese qui non esistono.", altAnswers: ["Qui gli spaghetti alla bolognese non esistono.", "Qui non esistono gli spaghetti alla bolognese."], explanation: "\"Spaghetti\" is plural: \"non esistono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you having?", answer: "Cosa prendi?", altAnswers: ["Che cosa prendi?", "Che prendi?", "Cosa prende?"], explanation: "\"Prendere\" for food and drink." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Two Towers are the symbol of the city.", answer: "Le Due Torri sono il simbolo della città.", altAnswers: ["Le due torri sono il simbolo della città."], explanation: "\"Torre\" is feminine: \"le torri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a day!", answer: "Che giornata!", explanation: "\"Giornata\" = the day as it's lived." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Don't you say] cornetto?", sentence: "Non ___ cornetto?", answer: "si dice", explanation: "\"Si dice\" = one says." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tortellini are eaten [in broth].", sentence: "I tortellini si mangiano ___.", answer: "in brodo", explanation: "\"Il brodo\" = broth." },
      { type: "word-order", prompt: "Put the words in order to say: This round's on me.", words: ["Questo", "giro", "offro", "io."], translation: "This round's on me.", explanation: "\"Offro io\": \"io\" at the end for emphasis." },
      { type: "multiple-choice", question: "In Bologna, what goes with ragù?", options: ["tagliatelle", "spaghetti", "rice", "bread only"], correctIndex: 0, explanation: "Ragù goes with fresh egg pasta like \"tagliatelle\"." },
      { type: "dictation", audio: "Con i portici non serve l'ombrello.", explanation: "\"Ombrello\": double l." },
      { type: "speak", text: "Che giornata! Bologna mi è piaciuta tantissimo. Grazie di tutto, Marco!", prompt: "Say it in Italian: What a day! I loved Bologna. Thanks for everything, Marco!", tip: "Bo-LO-gna, tan-TIS-si-mo.", explanation: "\"Grazie di tutto\" = thanks for everything." },
    ],
  },
];

export const IT_CULTURE_U02_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a short blog post called \"La mia giornata italiana\" about a day you spent (or would like to spend) in an Italian city. Describe breakfast at the bar, lunch, the afternoon, an aperitivo or passeggiata, and dinner, with times. Mention at least two Italian habits from this unit and compare one of them with your own country.",
  minWords: 70,
  maxWords: 150,
  rubric: [
    "Follows the Italian day in order with times (alle otto, all'una, alle nove di sera)",
    "Orders or describes food and drink accurately (un caffè, un cornetto, il primo, uno spritz)",
    "Mentions at least two habits correctly (no cappuccino after lunch, the riposo, late dinner, the passeggiata)",
    "Uses the passato prossimo for what happened, with essere and avere correctly, and one comparison (invece, più tardi di)",
  ],
  modelAnswer: "Alle otto ho fatto colazione al bar con un cappuccino e un cornetto, in piedi al banco, come gli italiani. Poi ho visitato il centro. All'una ho mangiato le tagliatelle al ragù in una trattoria e dopo pranzo ho preso un caffè, non un cappuccino! Il pomeriggio molti negozi erano chiusi, così mi sono riposata un po' in albergo. Alle sette ho incontrato degli amici per un aperitivo e abbiamo bevuto uno spritz. Poi abbiamo fatto due passi sul corso e abbiamo cenato alle nove e mezza. Nel mio paese si cena alle sei: gli italiani mangiano molto più tardi!",
  explanation: "The day is told in order with times; \"al banco\", \"il cornetto\", \"le tagliatelle al ragù\" and \"uno spritz\" are accurate; the coffee rule, the closed shops and late dinner are three Italian habits; \"mi sono riposata\" uses \"essere\" with a reflexive verb, and \"molto più tardi\" makes the comparison.",
};
