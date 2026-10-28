// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u03.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 3: Food by Region. Dishes of the
// North, Centre and South, the food rules Italians argue about, wine labels
// (DOC, DOCG), markets and seasonal produce, Slow Food and km 0, and a
// grandmother's recipe. Intermediate grammar; recipe imperatives with tu.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U03: Lesson[] = [
  {
    slug: "culture-food-north",
    level: "IT-Culture",
    number: 1,
    title: "Food of the North",
    summary: "Taste the North: saffron risotto in Milan, polenta, Bologna's tortellini and Genoa's pesto.",
    duration: "15 min",
    sections: [
      {
        heading: "Rice, corn and butter",
        body: [
          "There's no single Italian cuisine: every region has its own, shaped by climate and history. The North is the land of rice, corn and butter. In the Po Valley rice fields, \"le risaie\", feed the risotto tradition: \"il risotto alla milanese\" is golden with saffron and often served with \"l'ossobuco\", braised veal shank.",
          "\"La polenta\" is cornmeal cooked slowly into a thick porridge, poured onto a wooden board and eaten with stews, cheese or mushrooms. For centuries it was the food of poor families in Veneto, Lombardy and Friuli; today it's comfort food on a cold evening.",
        ],
        examples: [
          { es: "Il risotto alla milanese è giallo per lo zafferano.", en: "Risotto alla milanese is yellow from the saffron." },
          { es: "Il risotto va mescolato di continuo.", en: "Risotto has to be stirred constantly." },
          { es: "D'inverno mangiamo la polenta con i funghi.", en: "In winter we eat polenta with mushrooms." },
          { es: "Al Nord si cucina di più con il burro.", en: "In the North people cook more with butter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In winter we eat polenta with mushrooms.", answer: "D'inverno mangiamo la polenta con i funghi.", altAnswers: ["In inverno mangiamo la polenta con i funghi.", "D'inverno mangiamo polenta con i funghi."], explanation: "\"Il fungo\" → \"i funghi\": the h keeps the hard g." },
          { type: "multiple-choice", question: "What makes risotto alla milanese yellow?", options: ["saffron", "egg yolk", "turmeric", "corn"], correctIndex: 0, explanation: "\"Lo zafferano\" = saffron." },
        ],
      },
      {
        heading: "Tortellini",
        body: [
          "Emilia is the kingdom of fresh egg pasta, \"la pasta all'uovo\", rolled by hand into a thin sheet, \"la sfoglia\". Bologna and Modena both claim \"i tortellini\", tiny rings filled with pork, ham, mortadella and Parmigiano. A legend says their shape copies the navel of Venus.",
          "The traditional way to eat them is \"in brodo\", in a rich meat broth, especially at Christmas. \"I tortelloni\", bigger and filled with ricotta and herbs, are served with butter and sage.",
        ],
        examples: [
          { es: "A Natale mangiamo i tortellini in brodo.", en: "At Christmas we eat tortellini in broth." },
          { es: "La nonna tira la sfoglia a mano.", en: "Grandma rolls out the pasta by hand." },
          { es: "I tortelloni sono più grandi dei tortellini.", en: "Tortelloni are bigger than tortellini." },
          { es: "Ci vuole molta pazienza per chiuderli.", en: "It takes a lot of patience to close them." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At Christmas we eat tortellini in broth.", answer: "A Natale mangiamo i tortellini in brodo.", altAnswers: ["Per Natale mangiamo i tortellini in brodo."], explanation: "\"A Natale\" = at Christmas." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It [takes] a lot of patience.", sentence: "___ molta pazienza.", answer: "Ci vuole", explanation: "\"Ci vuole\" + singular noun = it takes, you need." },
          { type: "listen-choose", audio: "La nonna tira la sfoglia a mano.", question: "What does it mean?", options: ["Grandma rolls out the pasta by hand.", "Grandma throws the pasta away.", "Grandma buys fresh pasta.", "Grandma cooks with her hands."], correctIndex: 0, explanation: "\"Tirare la sfoglia\" = to roll out the pasta sheet." },
        ],
      },
      {
        heading: "Il pesto genovese",
        body: [
          "Liguria has little flat land, so its cooks used herbs, olive oil and what grew on the terraces. \"Il pesto alla genovese\" is basil, pine nuts, garlic, Parmigiano and pecorino, and extra-virgin olive oil, traditionally crushed in a marble \"mortaio\" (mortar). The name comes from \"pestare\", to pound.",
          "Genoese serve it with \"trofie\" or \"trenette\", often with boiled potatoes and green beans in the same pot. Pesto is never cooked: it's stirred into the hot pasta off the heat.",
        ],
        examples: [
          { es: "Il pesto si fa con il basilico fresco.", en: "Pesto is made with fresh basil." },
          { es: "Non cuocere il pesto!", en: "Don't cook the pesto!" },
          { es: "Le trofie al pesto sono un piatto ligure.", en: "Trofie with pesto is a Ligurian dish." },
          { es: "Il nome viene da pestare.", en: "The name comes from pestare, to pound." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pesto is made with fresh basil.", answer: "Il pesto si fa con il basilico fresco.", altAnswers: ["Il pesto si fa col basilico fresco.", "Il pesto è fatto con il basilico fresco.", "Il pesto si prepara con il basilico fresco."], explanation: "\"Si fa\" = is made." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't cook the pesto!", answer: "Non cuocere il pesto!", altAnswers: ["Non cucinare il pesto!", "Non cuocete il pesto!", "Non cuocia il pesto!"], explanation: "Negative \"tu\" imperative: \"non\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Risotto has to be stirred constantly.", answer: "Il risotto va mescolato di continuo.", altAnswers: ["Il risotto va mescolato continuamente.", "Il risotto deve essere mescolato di continuo.", "Il risotto si deve mescolare di continuo."], explanation: "\"Andare\" + past participle = has to be." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the North people cook more with butter.", answer: "Al Nord si cucina di più con il burro.", altAnswers: ["Al Nord si cucina più con il burro.", "Nel Nord si cucina di più con il burro.", "Al Nord si cucina di più col burro."], explanation: "\"Si cucina\" = people cook." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tortelloni are bigger than tortellini.", answer: "I tortelloni sono più grandi dei tortellini.", explanation: "\"Più... di\" + article: \"dei tortellini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Trofie with pesto is a Ligurian dish.", answer: "Le trofie al pesto sono un piatto ligure.", explanation: "\"Le trofie\" is plural, so the verb is too." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma rolls out the pasta by hand.", answer: "La nonna tira la sfoglia a mano.", altAnswers: ["La nonna stende la sfoglia a mano.", "La nonna tira la pasta a mano."], explanation: "\"A mano\" = by hand." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Risotto alla milanese is yellow [from the saffron].", sentence: "Il risotto alla milanese è giallo ___.", answer: "per lo zafferano", altAnswers: ["grazie allo zafferano"], explanation: "\"Lo zafferano\": \"lo\" before z." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tortelloni are served [with butter and sage].", sentence: "I tortelloni si servono ___.", answer: "con burro e salvia", altAnswers: ["burro e salvia", "con il burro e la salvia"], explanation: "\"Burro e salvia\" is a classic dressing." },
      { type: "word-order", prompt: "Put the words in order to say: Polenta is made with cornmeal.", words: ["La", "polenta", "si", "fa", "con", "la", "farina", "di", "mais."], translation: "Polenta is made with cornmeal.", explanation: "\"Farina di mais\" = cornmeal." },
      {
        type: "matching",
        instructions: "Match the dish to its home.",
        pairs: [
          { left: "il risotto alla milanese", right: "Milan" },
          { left: "il pesto alla genovese", right: "Genoa" },
          { left: "i tortellini in brodo", right: "Bologna and Modena" },
          { left: "la polenta", right: "Veneto, Lombardy and Friuli" },
        ],
        explanation: "\"Alla\" + city adjective = in the style of that city.",
      },
      { type: "dictation", audio: "Il pesto si fa con il basilico fresco.", explanation: "\"Basilico\": stress on -SI-." },
      { type: "speak", text: "Il mio piatto preferito del Nord è il risotto alla milanese con l'ossobuco.", prompt: "Say it in Italian: My favorite dish from the North is risotto alla milanese with ossobuco.", tip: "Ri-SOT-to: hold the double t.", explanation: "\"Preferito\" agrees with \"piatto\"." },
    ],
  },
  {
    slug: "culture-food-centre",
    level: "IT-Culture",
    number: 2,
    title: "Food of the Center",
    summary: "Learn Rome's great pasta dishes, carbonara and amatriciana, and Tuscany's bistecca alla fiorentina and bread soups.",
    duration: "15 min",
    sections: [
      {
        heading: "Carbonara",
        body: [
          "Rome has four famous pasta dishes built from a few ingredients: \"la gricia\" (guanciale and pecorino), \"la carbonara\", \"l'amatriciana\" and \"la cacio e pepe\". \"Il guanciale\" is cured pork cheek, fattier and more flavorful than \"la pancetta\" (belly). \"Il pecorino romano\" is a salty sheep's cheese.",
          "A real carbonara has guanciale, eggs (often just yolks), pecorino and black pepper. No cream, no garlic, no onion: the creaminess comes from egg and cheese mixed with a little pasta water, off the heat so the egg doesn't scramble. Its origin is recent and disputed; many say it was born just after the Second World War.",
        ],
        examples: [
          { es: "Nella carbonara non va la panna.", en: "Cream doesn't go in carbonara." },
          { es: "Il guanciale è più saporito della pancetta.", en: "Guanciale is tastier than pancetta." },
          { es: "Aggiungi un po' di acqua di cottura.", en: "Add a little of the pasta water." },
          { es: "Se le uova cuociono troppo, diventa una frittata.", en: "If the eggs cook too much, it turns into an omelette." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cream doesn't go in carbonara.", answer: "Nella carbonara non va la panna.", altAnswers: ["Nella carbonara non si mette la panna.", "La panna non va nella carbonara.", "Nella carbonara non ci va la panna."], explanation: "\"Andare\" = to belong in a recipe: \"non va la panna\"." },
          { type: "multiple-choice", question: "What is guanciale?", options: ["cured pork cheek", "smoked bacon", "a sheep's cheese", "a kind of sausage"], correctIndex: 0, explanation: "From \"guancia\", cheek." },
        ],
      },
      {
        heading: "Amatriciana",
        body: [
          "\"L'amatriciana\" comes from \"Amatrice\", a mountain town in Lazio: guanciale, tomato and pecorino, usually with \"bucatini\" or spaghetti. In Rome it's often called \"la matriciana\". After the 2016 earthquake destroyed much of Amatrice, restaurants across Italy sold amatriciana to raise money for the town.",
          "Romans also love \"il quinto quarto\", the fifth quarter, meaning offal: tripe, oxtail (\"la coda alla vaccinara\"). In spring come artichokes, \"i carciofi\", fried whole \"alla giudia\" in the Jewish style, or braised \"alla romana\".",
        ],
        examples: [
          { es: "L'amatriciana viene da Amatrice.", en: "Amatriciana comes from Amatrice." },
          { es: "A Roma la chiamano matriciana.", en: "In Rome they call it matriciana." },
          { es: "Prendiamo i carciofi alla giudia?", en: "Shall we have the Jewish-style artichokes?" },
          { es: "Il giovedì a Roma si mangiano gli gnocchi.", en: "On Thursdays in Rome people eat gnocchi." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Amatriciana comes from Amatrice.", answer: "L'amatriciana viene da Amatrice.", altAnswers: ["L'amatriciana è di Amatrice."], explanation: "\"Venire da\" + town." },
          { type: "listen-choose", audio: "A Roma la chiamano matriciana.", question: "What does it mean?", options: ["In Rome they call it matriciana.", "In Rome they don't like it.", "In Rome it's made without tomato.", "In Rome it's only eaten on Sundays."], correctIndex: 0, explanation: "\"La chiamano\" = they call it." },
        ],
      },
      {
        heading: "La fiorentina",
        body: [
          "Tuscany's pride is \"la bistecca alla fiorentina\": a thick T-bone steak, traditionally from Chianina cattle, grilled over embers and served very rare, \"al sangue\". It's sold by weight, often over a kilo, so the menu price is per kilo or per \"etto\" (100 grams). Asking for it well done will upset the cook.",
          "Tuscan bread is made without salt, \"pane sciocco\", and stale bread is never wasted: it becomes \"la ribollita\", a thick bean and cabbage soup, \"la pappa al pomodoro\", or \"la panzanella\", a summer salad.",
        ],
        examples: [
          { es: "La fiorentina si mangia al sangue.", en: "A fiorentina is eaten rare." },
          { es: "Il prezzo è all'etto.", en: "The price is per hundred grams." },
          { es: "Il pane toscano è senza sale.", en: "Tuscan bread has no salt." },
          { es: "Con il pane vecchio facciamo la ribollita.", en: "We make ribollita with stale bread." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tuscan bread has no salt.", answer: "Il pane toscano è senza sale.", altAnswers: ["Il pane toscano non ha sale.", "Il pane toscano non è salato."], explanation: "\"Senza\" + noun, no article." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A fiorentina is eaten [rare].", sentence: "La fiorentina si mangia ___.", answer: "al sangue", explanation: "\"Al sangue\" = rare, literally bloody." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Guanciale is tastier than pancetta.", answer: "Il guanciale è più saporito della pancetta.", explanation: "\"Più... di\" + \"la\" = \"della\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Add a little of the pasta water.", answer: "Aggiungi un po' di acqua di cottura.", altAnswers: ["Aggiungi un po' d'acqua di cottura.", "Aggiungi un po' dell'acqua di cottura.", "Aggiunga un po' di acqua di cottura."], explanation: "\"L'acqua di cottura\" = the cooking water." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Thursdays in Rome people eat gnocchi.", answer: "Il giovedì a Roma si mangiano gli gnocchi.", altAnswers: ["A Roma il giovedì si mangiano gli gnocchi."], explanation: "\"Gli gnocchi\": \"gli\" before gn; plural verb \"si mangiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We make ribollita with stale bread.", answer: "Con il pane vecchio facciamo la ribollita.", altAnswers: ["Facciamo la ribollita con il pane vecchio.", "Con il pane raffermo facciamo la ribollita.", "Facciamo la ribollita con il pane raffermo."], explanation: "\"Pane raffermo\" or \"vecchio\" = stale bread." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The price is per hundred grams.", answer: "Il prezzo è all'etto.", altAnswers: ["Il prezzo è per un etto.", "Il prezzo è per etto."], explanation: "\"Un etto\" = 100 grams." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the eggs cook too much, it [turns into] an omelette.", sentence: "Se le uova cuociono troppo, ___ una frittata.", answer: "diventa", explanation: "\"Diventare\" = to become." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Shall we have [the Jewish-style artichokes]?", sentence: "Prendiamo ___?", answer: "i carciofi alla giudia", explanation: "\"Alla giudia\" = in the Jewish style, from Rome's ghetto." },
      { type: "word-order", prompt: "Put the words in order to say: Carbonara has guanciale, eggs and pecorino.", words: ["Nella", "carbonara", "ci", "sono", "guanciale,", "uova", "e", "pecorino."], translation: "Carbonara has guanciale, eggs and pecorino.", explanation: "\"Uovo\" → \"le uova\": an irregular feminine plural." },
      { type: "multiple-choice", question: "A friend wants carbonara \"con la panna e la cipolla\". What would a Roman say?", options: ["Ma no! Nella carbonara non vanno.", "Ottima idea, è la ricetta vera.", "Sì, e aggiungi il pollo.", "Così si fa a Roma."], correctIndex: 0, explanation: "Cream and onion are not in the Roman recipe." },
      { type: "dictation", audio: "Il pane toscano è senza sale.", explanation: "\"Senza sale\" = without salt." },
      { type: "speak", text: "Vorrei una carbonara e poi, per secondo, la bistecca al sangue.", prompt: "Say it in Italian: I'd like a carbonara and then, as a main, the steak rare.", tip: "\"Al sangue\": SAN-gue, the u is pronounced.", explanation: "Ordering a Roman primo and a Tuscan secondo." },
    ],
  },
  {
    slug: "culture-food-south",
    level: "IT-Culture",
    number: 3,
    title: "Food of the South",
    summary: "Discover Neapolitan pizza, Apulian orecchiette, Sicilian arancini and cannoli, and the olive-oil cooking of the South.",
    duration: "15 min",
    sections: [
      {
        heading: "La pizza napoletana",
        body: [
          "Pizza as we know it was born in Naples. The Neapolitan kind has a soft, puffy rim, \"il cornicione\", and a thin center, and bakes in a wood oven in about a minute. The classic is \"la margherita\": tomato, mozzarella or fior di latte, basil and olive oil. Legend says it was named for Queen Margherita in 1889; its colors match the flag.",
          "In 2017 UNESCO added the art of the Neapolitan pizzaiolo to its list of intangible heritage. In Naples a pizza is a personal meal, not cut and shared; on the street you can eat it folded in four, \"a portafoglio\", like a wallet.",
        ],
        examples: [
          { es: "La margherita ha i colori della bandiera.", en: "The margherita has the colors of the flag." },
          { es: "Ognuno ordina la sua pizza.", en: "Everyone orders their own pizza." },
          { es: "Il forno a legna cuoce la pizza in un minuto.", en: "The wood oven cooks the pizza in a minute." },
          { es: "Mi piace il cornicione morbido.", en: "I like a soft rim." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone orders their own pizza.", answer: "Ognuno ordina la sua pizza.", altAnswers: ["Ognuno prende la sua pizza.", "Ciascuno ordina la sua pizza.", "Ognuno ordina la propria pizza."], explanation: "\"Ognuno\" is singular: \"ordina\", \"la sua\"." },
          { type: "multiple-choice", question: "What are the toppings of a margherita?", options: ["tomato, mozzarella, basil", "tomato, garlic, oregano", "mozzarella, ham, mushrooms", "tomato, anchovies, capers"], correctIndex: 0, explanation: "Red, white and green, like the flag. Tomato, garlic and oregano is \"la marinara\"." },
        ],
      },
      {
        heading: "Orecchiette e olio",
        body: [
          "The southern kitchen is built on olive oil, durum wheat and vegetables. In Puglia \"le orecchiette\", little ears, are shaped by hand with a knife and a thumb; in the old town of Bari women still make them at tables in the street. The classic sauce is \"cime di rapa\", turnip greens, with garlic, chili and anchovies.",
          "Dried pasta made from durum wheat was the industry of the South, around Naples and in Gragnano. Tomatoes, eggplants and peppers dominate, as in \"la parmigiana di melanzane\", baked layers of fried eggplant, tomato and cheese, claimed by Campania and Sicily alike.",
        ],
        examples: [
          { es: "Le orecchiette si fanno con il pollice.", en: "Orecchiette are shaped with your thumb." },
          { es: "A Bari vecchia le signore fanno la pasta per strada.", en: "In Bari's old town women make pasta in the street." },
          { es: "La parmigiana è a strati.", en: "Parmigiana is made in layers." },
          { es: "Al Sud si cucina con l'olio d'oliva.", en: "In the South people cook with olive oil." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the South people cook with olive oil.", answer: "Al Sud si cucina con l'olio d'oliva.", altAnswers: ["Al Sud si cucina con l'olio di oliva.", "Nel Sud si cucina con l'olio d'oliva.", "Al Sud si cucina con l'olio."], explanation: "\"L'olio d'oliva\" = olive oil." },
          { type: "listen-choose", audio: "Le orecchiette si fanno con il pollice.", question: "What does it mean?", options: ["Orecchiette are shaped with your thumb.", "Orecchiette are made with eggs.", "Orecchiette are eaten with a spoon.", "Orecchiette are made by machine."], correctIndex: 0, explanation: "\"Il pollice\" = the thumb." },
        ],
      },
      {
        heading: "Sicilia: arancine e cannoli",
        body: [
          "Sicily mixes Greek, Arab and Spanish influences: almonds, citrus, pistachios, raisins and sugar. \"L'arancina\" (in Palermo) or \"l'arancino\" (in Catania) is a fried ball or cone of rice filled with ragù and peas or ham and cheese, named after the orange, \"l'arancia\".",
          "\"Il cannolo\" is a crisp fried pastry tube filled with sweet sheep's-milk ricotta, sometimes with candied fruit or chocolate chips. Good pastry shops fill it only when you order, so the shell stays crunchy. \"La cassata\", a cake of ricotta, sponge and marzipan, is the other great Sicilian dessert.",
        ],
        examples: [
          { es: "Un'arancina al ragù, per favore.", en: "A rice ball with ragù, please." },
          { es: "Il nome viene da arancia.", en: "The name comes from arancia, orange." },
          { es: "Il cannolo si riempie al momento.", en: "The cannolo is filled on the spot." },
          { es: "La ricotta dei cannoli è di pecora.", en: "The ricotta in cannoli is sheep's milk." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cannolo is filled on the spot.", answer: "Il cannolo si riempie al momento.", altAnswers: ["Il cannolo viene riempito al momento.", "Il cannolo si farcisce al momento."], explanation: "\"Al momento\" = on the spot, freshly." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A rice ball] with ragù, please.", sentence: "___ al ragù, per favore.", answer: "Un'arancina", altAnswers: ["Un arancino"], explanation: "Feminine \"un'arancina\" takes an apostrophe; masculine \"un arancino\" doesn't." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pizza was born in Naples.", answer: "La pizza è nata a Napoli.", explanation: "\"Nata\" agrees with \"la pizza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Parmigiana is made in layers.", answer: "La parmigiana è a strati.", altAnswers: ["La parmigiana si fa a strati.", "La parmigiana è fatta a strati."], explanation: "\"A strati\" = in layers." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The wood oven cooks the pizza in a minute.", answer: "Il forno a legna cuoce la pizza in un minuto.", altAnswers: ["Il forno a legna cuoce la pizza in un minuto solo."], explanation: "\"Il forno a legna\" = the wood-fired oven." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like orecchiette with turnip greens.", answer: "Vorrei le orecchiette con le cime di rapa.", altAnswers: ["Vorrei le orecchiette alle cime di rapa.", "Vorrei orecchiette con le cime di rapa."], explanation: "\"Le cime di rapa\" = turnip greens." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Palermo they say arancina.", answer: "A Palermo si dice arancina.", altAnswers: ["A Palermo dicono arancina."], explanation: "\"Si dice\" = they say." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I like [a soft rim].", sentence: "Mi piace ___.", answer: "il cornicione morbido", explanation: "\"Il cornicione\" = the pizza's puffy edge." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The margherita has [the colors of the flag].", sentence: "La margherita ha ___.", answer: "i colori della bandiera", explanation: "\"Della bandiera\": \"di\" + \"la\"." },
      { type: "word-order", prompt: "Put the words in order to say: In Naples everyone eats a whole pizza.", words: ["A", "Napoli", "ognuno", "mangia", "una", "pizza", "intera."], translation: "In Naples everyone eats a whole pizza.", explanation: "\"Intera\" = whole, after the noun." },
      {
        type: "matching",
        instructions: "Match the dish to its region.",
        pairs: [
          { left: "la pizza margherita", right: "Campania" },
          { left: "le orecchiette", right: "Puglia" },
          { left: "i cannoli", right: "Sicily" },
          { left: "la cassata", right: "Sicily, too" },
        ],
        explanation: "Southern classics.",
      },
      { type: "dictation", audio: "La pizza è nata a Napoli.", explanation: "\"Nata\": feminine." },
      { type: "speak", text: "Per me una margherita, e per dolce un cannolo siciliano.", prompt: "Say it in Italian: A margherita for me, and a Sicilian cannolo for dessert.", tip: "Can-NO-lo: hold the double n.", explanation: "\"Per dolce\" = for dessert." },
    ],
  },
  {
    slug: "culture-food-rules",
    level: "IT-Culture",
    number: 4,
    title: "The Food Rules",
    summary: "Learn the food rules that make Italians wince, from pineapple on pizza to broken spaghetti, and the arguments Italians have among themselves.",
    duration: "15 min",
    sections: [
      {
        heading: "What makes Italians wince",
        body: [
          "Some foreign habits shock Italians: pineapple on pizza, ketchup on pasta, chicken in pasta, cream in carbonara, breaking spaghetti to fit the pot, or pasta as a side next to meat. \"Spaghetti alla bolognese\" and garlic bread are foreign inventions; in Bologna ragù goes with tagliatelle.",
          "Pasta is cooked \"al dente\", firm to the bite, in plenty of salted water: you add the salt when the water boils. No oil in the water, and the pasta goes into the sauce, not the sauce on top of a pile of pasta.",
        ],
        examples: [
          { es: "Non spezzare gli spaghetti!", en: "Don't break the spaghetti!" },
          { es: "L'ananas sulla pizza? Per carità!", en: "Pineapple on pizza? Heaven forbid!" },
          { es: "Si butta la pasta quando l'acqua bolle.", en: "You put the pasta in when the water boils." },
          { es: "La pasta deve essere al dente.", en: "Pasta has to be al dente." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't break the spaghetti!", answer: "Non spezzare gli spaghetti!", altAnswers: ["Non rompere gli spaghetti!", "Non spezzate gli spaghetti!", "Non spezzi gli spaghetti!"], explanation: "\"Non\" + infinitive for a \"tu\" negative command." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You put the pasta in [when the water boils].", sentence: "Si butta la pasta ___.", answer: "quando l'acqua bolle", explanation: "\"Bollire\" → \"bolle\"; \"buttare la pasta\" = to put the pasta in." },
        ],
      },
      {
        heading: "Cheese and fish",
        body: [
          "Most Italians never put grated Parmigiano on seafood pasta: the cheese covers the delicate taste of the fish. There are local exceptions, but asking for cheese on \"spaghetti alle vongole\" (with clams) can earn you a look. Bread dipped in oil and balsamic vinegar before the meal is a restaurant habit abroad, not an Italian one.",
          "The rules are about respect for ingredients, not snobbery. If you break them at home, nobody cares; in a trattoria, ask: \"Si può mettere il formaggio?\".",
        ],
        examples: [
          { es: "Sugli spaghetti alle vongole niente formaggio.", en: "No cheese on spaghetti with clams." },
          { es: "Il formaggio copre il sapore del pesce.", en: "Cheese covers the taste of the fish." },
          { es: "Si può mettere il parmigiano?", en: "Can I put Parmesan on it?" },
          { es: "Ognuno a casa sua fa come vuole.", en: "At home everyone does as they like." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cheese covers the taste of the fish.", answer: "Il formaggio copre il sapore del pesce.", altAnswers: ["Il formaggio copre il gusto del pesce."], explanation: "\"Coprire\" = to cover." },
          { type: "listen-choose", audio: "Sugli spaghetti alle vongole niente formaggio.", question: "What does it mean?", options: ["No cheese on spaghetti with clams.", "Lots of cheese on spaghetti with clams.", "No clams on the spaghetti.", "Spaghetti with clams and cheese, please."], correctIndex: 0, explanation: "\"Niente\" + noun = no..." },
        ],
      },
      {
        heading: "Italians argue too",
        body: [
          "Italians fight among themselves even more. Onion in amatriciana? Garlic in carbonara? Pancetta or guanciale? Cream in the ragù? Every family has the true recipe, usually the grandmother's, and newspapers and TV cooks stir up the debate.",
          "Learn the phrases and join in: \"La ricetta originale è...\", \"Da noi si fa così\", \"Questa è un'eresia!\" (that's heresy!). It's one of the national pastimes, right after soccer.",
        ],
        examples: [
          { es: "La ricetta originale non ha la cipolla.", en: "The original recipe has no onion." },
          { es: "Da noi si fa così.", en: "This is how we make it where I'm from." },
          { es: "L'aglio nella carbonara? È un'eresia!", en: "Garlic in carbonara? That's heresy!" },
          { es: "Mia nonna la faceva con la pancetta.", en: "My grandmother used to make it with pancetta." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The original recipe has no onion.", answer: "La ricetta originale non ha la cipolla.", altAnswers: ["Nella ricetta originale non c'è la cipolla.", "La ricetta originale è senza cipolla."], explanation: "\"Originale\" ends in -e: one form for both genders." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother used to make it with pancetta.", answer: "Mia nonna la faceva con la pancetta.", altAnswers: ["Mia nonna lo faceva con la pancetta."], explanation: "The imperfetto \"faceva\" for a past habit." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pasta has to be al dente.", answer: "La pasta deve essere al dente.", altAnswers: ["La pasta va cotta al dente.", "La pasta dev'essere al dente."], explanation: "\"Al dente\" = firm to the bite." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I put Parmesan on it?", answer: "Si può mettere il parmigiano?", altAnswers: ["Posso mettere il parmigiano?", "Si può mettere il formaggio?", "Posso mettere il formaggio?"], explanation: "\"Si può\" = is it OK to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This is how we make it where I'm from.", answer: "Da noi si fa così.", altAnswers: ["Da noi la facciamo così.", "Da noi lo facciamo così."], explanation: "\"Da noi\" = where I'm from." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pineapple on pizza? Heaven forbid!", answer: "L'ananas sulla pizza? Per carità!", altAnswers: ["L'ananas sulla pizza? Ma per carità!", "Ananas sulla pizza? Per carità!"], explanation: "\"Per carità!\" = heaven forbid." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No oil in the water.", answer: "Niente olio nell'acqua.", altAnswers: ["Non si mette l'olio nell'acqua.", "Nell'acqua niente olio."], explanation: "\"Niente\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Garlic in carbonara? [That's heresy]!", sentence: "L'aglio nella carbonara? ___!", answer: "È un'eresia", explanation: "\"Eresia\" is feminine: \"un'eresia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At home everyone does [as they like].", sentence: "Ognuno a casa sua fa ___.", answer: "come vuole", explanation: "\"Ognuno\" takes the singular: \"vuole\"." },
      { type: "word-order", prompt: "Put the words in order to say: Pasta isn't a side dish.", words: ["La", "pasta", "non", "è", "un", "contorno."], translation: "Pasta isn't a side dish.", explanation: "Pasta is a \"primo\"." },
      { type: "multi-select", question: "Which habits would most Italians find wrong? Choose all that apply.", options: ["ketchup on pasta", "breaking spaghetti", "salting the pasta water", "cheese on clam pasta", "pasta al dente"], correctIndexes: [0, 1, 3], explanation: "Salting the water and cooking al dente are the rules." },
      { type: "dictation", audio: "Non spezzare gli spaghetti!", explanation: "\"Spezzare\": double z." },
      { type: "speak", text: "Secondo me, la carbonara vera si fa senza panna.", prompt: "Say it in Italian: In my opinion, real carbonara is made without cream.", tip: "\"Panna\" (cream) vs \"pane\" (bread): hold the double n.", explanation: "\"Secondo me\" = in my opinion." },
    ],
  },
  {
    slug: "culture-wine",
    level: "IT-Culture",
    number: 5,
    title: "Wine",
    summary: "Read an Italian wine label, from DOCG to IGT, meet the great wine regions, and order wine in a restaurant.",
    duration: "15 min",
    sections: [
      {
        heading: "DOCG, DOC, IGT",
        body: [
          "Italy and France compete every year to be the world's biggest wine producer, and every Italian region makes wine. Labels follow a pyramid. At the top is \"DOCG\" (\"denominazione di origine controllata e garantita\"), with the strictest rules on area, grapes and aging; below it \"DOC\", then \"IGT\" (typical geographic indication), and at the bottom plain \"vino\". European labels may say DOP and IGP instead.",
          "DOC rules arrived in the 1960s and the first DOCG wines in 1980. Other useful label words: \"annata\" (vintage), \"riserva\" (aged longer), \"classico\" (from the historic heart of the area), \"imbottigliato all'origine\" (bottled by the producer).",
        ],
        examples: [
          { es: "Questo vino è una DOCG.", en: "This wine is a DOCG." },
          { es: "Che annata è?", en: "What vintage is it?" },
          { es: "La riserva invecchia più a lungo.", en: "The riserva ages longer." },
          { es: "Il Chianti Classico ha il gallo nero sull'etichetta.", en: "Chianti Classico has a black rooster on the label." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What vintage is it?", answer: "Che annata è?", altAnswers: ["Di che annata è?", "Qual è l'annata?"], explanation: "\"L'annata\" = the vintage year." },
          { type: "multiple-choice", question: "Which label has the strictest rules?", options: ["DOCG", "DOC", "IGT", "vino"], correctIndex: 0, explanation: "The G stands for \"garantita\", guaranteed." },
        ],
      },
      {
        heading: "Where the great wines come from",
        body: [
          "In Piedmont the Nebbiolo grape makes \"il Barolo\" and \"il Barbaresco\". Tuscany's Sangiovese gives \"il Chianti\" and \"il Brunello di Montalcino\". The Veneto has \"il Prosecco\", sparkling, and \"l'Amarone\", rich and strong, made from dried grapes. Lombardy's \"Franciacorta\" is a sparkling wine made like Champagne.",
          "Further south: \"il Primitivo\" in Puglia, \"il Nero d'Avola\" in Sicily, \"il Cannonau\" in Sardinia. In Emilia \"il Lambrusco\" is red, lightly sparkling, and perfect with cold cuts. Wine names are masculine because \"vino\" is understood.",
        ],
        examples: [
          { es: "Il Barolo si fa con il Nebbiolo.", en: "Barolo is made from Nebbiolo." },
          { es: "Con i salumi ci vuole un Lambrusco.", en: "With cold cuts you need a Lambrusco." },
          { es: "Il Prosecco viene dal Veneto.", en: "Prosecco comes from the Veneto." },
          { es: "Preferisco i rossi del Sud.", en: "I prefer the reds of the South." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Prosecco comes from the Veneto.", answer: "Il Prosecco viene dal Veneto.", altAnswers: ["Il prosecco viene dal Veneto."], explanation: "\"Da\" + \"il Veneto\" = \"dal Veneto\"." },
          { type: "listen-choose", audio: "Con i salumi ci vuole un Lambrusco.", question: "What does it mean?", options: ["With cold cuts you need a Lambrusco.", "Lambrusco doesn't go with cold cuts.", "The cold cuts are made with Lambrusco.", "Lambrusco is a kind of salami."], correctIndex: 0, explanation: "\"Ci vuole\" = you need, it calls for." },
        ],
      },
      {
        heading: "Ordering wine",
        body: [
          "In a trattoria the cheapest choice is \"il vino della casa\", house wine, sold by the carafe: \"un quarto\" (a quarter liter), \"mezzo litro\", \"un litro\". In a wine bar, \"un'enoteca\", you order \"un calice\" (a glass) from a list. Wine is \"rosso\", \"bianco\" or \"rosato\"; \"fermo\" (still), \"frizzante\" (lightly sparkling) or \"spumante\" (sparkling); \"secco\" (dry) or \"dolce\" (sweet).",
          "Italians drink wine with food and rarely to get drunk. Water comes too: \"naturale\" (still) or \"frizzante\" (sparkling).",
        ],
        examples: [
          { es: "Un quarto di rosso della casa, per favore.", en: "A quarter liter of the house red, please." },
          { es: "Un calice di bianco secco.", en: "A glass of dry white." },
          { es: "Che cosa ci consiglia?", en: "What do you recommend?" },
          { es: "Acqua naturale o frizzante?", en: "Still or sparkling water?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you recommend? (to a waiter)", answer: "Che cosa ci consiglia?", altAnswers: ["Cosa ci consiglia?", "Che cosa mi consiglia?", "Cosa mi consiglia?", "Che ci consiglia?"], explanation: "\"Consigliare\" = to recommend; \"Lei\" form for the waiter." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A quarter liter] of the house red, please.", sentence: "___ di rosso della casa, per favore.", answer: "Un quarto", explanation: "House wine comes by the quarter, half or full liter." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A glass of dry white.", answer: "Un calice di bianco secco.", altAnswers: ["Un bicchiere di bianco secco.", "Un calice di vino bianco secco.", "Un bicchiere di vino bianco secco."], explanation: "\"Un calice\" = a wine glass." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Still or sparkling water?", answer: "Acqua naturale o frizzante?", altAnswers: ["Naturale o frizzante?", "Acqua liscia o gassata?", "Acqua naturale o gassata?"], explanation: "\"Naturale\" or \"liscia\" = still; \"frizzante\" or \"gassata\" = sparkling." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Barolo is made from Nebbiolo.", answer: "Il Barolo si fa con il Nebbiolo.", altAnswers: ["Il Barolo si fa con l'uva Nebbiolo.", "Il Barolo è fatto con il Nebbiolo."], explanation: "\"Si fa con\" = is made with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I prefer the reds of the South.", answer: "Preferisco i rossi del Sud.", altAnswers: ["Preferisco i vini rossi del Sud.", "Io preferisco i rossi del Sud."], explanation: "\"Preferire\" adds -isc-: \"preferisco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Half a liter of house wine.", answer: "Mezzo litro di vino della casa.", altAnswers: ["Mezzo litro del vino della casa."], explanation: "\"Mezzo\" before the noun, no article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The riserva [ages] longer.", sentence: "La riserva ___ più a lungo.", answer: "invecchia", explanation: "\"Invecchiare\" = to age." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chianti Classico has [a black rooster] on the label.", sentence: "Il Chianti Classico ha ___ sull'etichetta.", answer: "il gallo nero", altAnswers: ["un gallo nero"], explanation: "\"Il gallo nero\" is its famous symbol." },
      { type: "word-order", prompt: "Put the words in order to say: Every region makes wine.", words: ["Ogni", "regione", "produce", "vino."], translation: "Every region makes wine.", explanation: "\"Produrre\" = to produce." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "fermo", right: "still" },
          { left: "frizzante", right: "lightly sparkling" },
          { left: "spumante", right: "sparkling" },
          { left: "secco", right: "dry" },
          { left: "l'annata", right: "the vintage" },
        ],
        explanation: "Label and menu words.",
      },
      { type: "dictation", audio: "Un quarto di rosso della casa, per favore.", explanation: "\"Quarto\" = a quarter liter here." },
      { type: "speak", text: "Che cosa ci consiglia con la bistecca? Un rosso toscano?", prompt: "Say it in Italian: What do you recommend with the steak? A Tuscan red?", tip: "Con-SI-glia: gl like the lli in million.", explanation: "Asking the waiter for advice." },
    ],
  },
  {
    slug: "culture-markets",
    level: "IT-Culture",
    number: 6,
    title: "Markets",
    summary: "Shop at an Italian market: the mercato rionale, famous markets, buying by the etto, and eating with the seasons.",
    duration: "15 min",
    sections: [
      {
        heading: "Il mercato rionale",
        body: [
          "Every neighborhood, \"rione\" or \"quartiere\", has its market: \"il mercato rionale\", open in the morning, often every day but Sunday. Small towns have \"il mercato settimanale\", a weekly market that also sells clothes, pans and shoes. Some city markets are famous: Porta Palazzo in Turin, among the largest open-air markets in Europe, the Rialto in Venice, Campo de' Fiori in Rome, Ballarò and the Vucciria in Palermo.",
          "Regulars have their trusted stall and seller, and the chat is part of the shopping: \"Che cosa c'è di buono oggi?\".",
        ],
        examples: [
          { es: "Il mercato c'è tutte le mattine tranne la domenica.", en: "The market is on every morning except Sunday." },
          { es: "Il giovedì c'è il mercato in piazza.", en: "On Thursdays there's a market in the square." },
          { es: "Che cosa c'è di buono oggi?", en: "What's good today?" },
          { es: "Compro sempre dallo stesso fruttivendolo.", en: "I always buy from the same greengrocer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's good today?", answer: "Che cosa c'è di buono oggi?", altAnswers: ["Cosa c'è di buono oggi?", "Che c'è di buono oggi?", "Oggi cosa c'è di buono?"], explanation: "\"Qualcosa di\" pattern: \"c'è di buono\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I always buy [from the same] greengrocer.", sentence: "Compro sempre ___ fruttivendolo.", answer: "dallo stesso", explanation: "Buying from a person uses \"da\": \"dallo\" before s + consonant." },
        ],
      },
      {
        heading: "Un etto, mezzo chilo",
        body: [
          "At a market stall, don't touch the produce: the seller chooses for you. Ask by weight. \"Un etto\" is 100 grams, the standard unit for cheese and cold cuts; \"mezzo chilo\" and \"un chilo\" for fruit and vegetables; herbs come in \"un mazzo\" (a bunch). In many supermarkets you weigh your own fruit, wearing the plastic glove.",
          "The seller will ask \"Altro?\" (anything else?) until you say \"Basta così, grazie\". Prices are per kilo: \"a due euro al chilo\".",
        ],
        examples: [
          { es: "Mi dà mezzo chilo di pomodori?", en: "Can I have half a kilo of tomatoes?" },
          { es: "Due etti di prosciutto crudo, per favore.", en: "Two hundred grams of prosciutto, please." },
          { es: "Un mazzo di basilico.", en: "A bunch of basil." },
          { es: "Altro? No, basta così, grazie.", en: "Anything else? No, that's all, thanks." },
          { es: "Le pesche sono a tre euro al chilo.", en: "The peaches are three euros a kilo." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I have half a kilo of tomatoes?", answer: "Mi dà mezzo chilo di pomodori?", altAnswers: ["Mi può dare mezzo chilo di pomodori?", "Vorrei mezzo chilo di pomodori.", "Mezzo chilo di pomodori, per favore."], explanation: "\"Mi dà...?\" is the standard request at a stall." },
          { type: "listen-choose", audio: "Due etti di prosciutto crudo, per favore.", question: "How much ham do they want?", options: ["200 grams", "2 kilos", "2 slices", "20 grams"], correctIndex: 0, explanation: "\"Un etto\" = 100 grams, so \"due etti\" = 200." },
        ],
      },
      {
        heading: "Frutta di stagione",
        body: [
          "Italians shop with the seasons, and many refuse strawberries in December. Spring brings \"i carciofi\", \"le fave\" and \"le fragole\"; summer \"i pomodori\", \"le pesche\", \"l'anguria\" (watermelon) and \"i fichi\"; autumn \"i funghi\", \"le castagne\" and \"l'uva\"; winter \"le arance\" from Sicily and \"i broccoli\".",
          "A sign saying \"nostrano\" means locally grown. Prices drop with the season, and so does the fuss: when tomatoes are at their best, everyone makes sauce for the winter.",
        ],
        examples: [
          { es: "Le fragole a dicembre? No, grazie.", en: "Strawberries in December? No, thanks." },
          { es: "In autunno arrivano le castagne.", en: "In autumn chestnuts arrive." },
          { es: "Queste arance vengono dalla Sicilia.", en: "These oranges come from Sicily." },
          { es: "I pomodori sono nostrani.", en: "The tomatoes are locally grown." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These oranges come from Sicily.", answer: "Queste arance vengono dalla Sicilia.", altAnswers: ["Queste arance sono siciliane.", "Queste arance arrivano dalla Sicilia."], explanation: "\"Vengono\" agrees with \"arance\"; \"dalla Sicilia\"." },
          { type: "multiple-choice", question: "Which is a summer fruit?", options: ["l'anguria", "le castagne", "le arance", "i carciofi"], correctIndex: 0, explanation: "\"L'anguria\" (also \"il cocomero\") = watermelon." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A bunch of basil, please.", answer: "Un mazzo di basilico, per favore.", altAnswers: ["Un mazzetto di basilico, per favore."], explanation: "\"Un mazzo\" = a bunch." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The peaches are three euros a kilo.", answer: "Le pesche sono a tre euro al chilo.", altAnswers: ["Le pesche costano tre euro al chilo."], explanation: "\"Al chilo\" = per kilo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, that's all, thanks.", answer: "No, basta così, grazie.", altAnswers: ["Basta così, grazie.", "No, è tutto, grazie."], explanation: "\"Basta così\" ends the order." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Thursdays there's a market in the square.", answer: "Il giovedì c'è il mercato in piazza.", altAnswers: ["Il giovedì c'è un mercato in piazza.", "C'è il mercato in piazza il giovedì."], explanation: "\"Il giovedì\" = every Thursday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In autumn chestnuts arrive.", answer: "In autunno arrivano le castagne.", altAnswers: ["D'autunno arrivano le castagne.", "Le castagne arrivano in autunno."], explanation: "The subject often follows \"arrivare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[A hundred grams] of Parmesan, please.", sentence: "___ di parmigiano, per favore.", answer: "Un etto", explanation: "\"Un etto\" = 100 grams." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The market is on every morning [except] Sunday.", sentence: "Il mercato c'è tutte le mattine ___ la domenica.", answer: "tranne", altAnswers: ["eccetto", "salvo"], explanation: "\"Tranne\" = except." },
      { type: "word-order", prompt: "Put the words in order to say: Don't touch the fruit!", words: ["Non", "toccare", "la", "frutta!"], translation: "Don't touch the fruit!", explanation: "\"La frutta\" is singular and collective." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "le fragole", right: "strawberries" },
          { left: "le castagne", right: "chestnuts" },
          { left: "i fichi", right: "figs" },
          { left: "le fave", right: "fava beans" },
          { left: "l'anguria", right: "watermelon" },
        ],
        explanation: "Seasonal produce.",
      },
      { type: "dictation", audio: "Mi dà mezzo chilo di pomodori?", explanation: "\"Mezzo\": double z." },
      { type: "speak", text: "Buongiorno! Mi dà un chilo di pesche e un mazzo di basilico?", prompt: "Say it in Italian: Good morning! Can I have a kilo of peaches and a bunch of basil?", tip: "Pe-sche: sc before h is a hard sk sound.", explanation: "A complete market order." },
    ],
  },
  {
    slug: "culture-slow-food",
    level: "IT-Culture",
    number: 7,
    title: "Slow Food and Km 0",
    summary: "Learn the story of the Slow Food movement, born in Piedmont, and what km 0 and local food mean in Italy today.",
    duration: "15 min",
    sections: [
      {
        heading: "Born in Bra",
        body: [
          "In 1986 a fast-food restaurant opened near the Spanish Steps in Rome, and protests followed. That year in \"Bra\", a small town in Piedmont, the journalist Carlo Petrini and friends founded the association that became \"Slow Food\"; the international movement was launched in Paris in 1989. Its symbol is a snail, \"la chiocciola\".",
          "Its motto is \"buono, pulito e giusto\": food should be good, produced without harming the environment, and fair to those who make it. Slow Food protects endangered traditional products through its \"Presìdi\", and organizes a big biennial fair in Turin, Terra Madre Salone del Gusto.",
        ],
        examples: [
          { es: "Slow Food è nato a Bra nel 1986.", en: "Slow Food was born in Bra in 1986." },
          { es: "Il simbolo è una chiocciola.", en: "The symbol is a snail." },
          { es: "Il cibo deve essere buono, pulito e giusto.", en: "Food should be good, clean and fair." },
          { es: "Questo formaggio è un presidio Slow Food.", en: "This cheese is protected by Slow Food." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The symbol is a snail.", answer: "Il simbolo è una chiocciola.", altAnswers: ["Il simbolo è una lumaca."], explanation: "\"La chiocciola\" is a snail with a shell; it's also the @ sign." },
          { type: "multiple-choice", question: "Where was Slow Food founded?", options: ["in Bra, in Piedmont", "in Rome", "in Paris", "in Bologna"], correctIndex: 0, explanation: "Bra, a town in Piedmont; the international movement began in Paris in 1989." },
        ],
      },
      {
        heading: "A chilometro zero",
        body: [
          "\"A chilometro zero\", or \"km 0\", describes food grown close to where it's sold and eaten: fewer transport miles, fresher produce, money that stays local. Restaurants advertise \"menù a km 0\", and farmers sell at \"mercati contadini\", farmers' markets. \"La filiera corta\", the short supply chain, means few steps between producer and buyer.",
          "Some families join a \"GAS\", \"gruppo di acquisto solidale\": a group that buys directly from local farmers. Critics point out that local isn't always greener, but the idea is now part of everyday Italian.",
        ],
        examples: [
          { es: "Compriamo verdure a chilometro zero.", en: "We buy local vegetables." },
          { es: "Il sabato vado al mercato contadino.", en: "On Saturdays I go to the farmers' market." },
          { es: "Questo ristorante usa solo prodotti locali.", en: "This restaurant only uses local products." },
          { es: "Il latte arriva direttamente dalla fattoria.", en: "The milk comes straight from the farm." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Saturdays I go to the farmers' market.", answer: "Il sabato vado al mercato contadino.", altAnswers: ["Il sabato vado al mercato dei contadini.", "Vado al mercato contadino il sabato."], explanation: "\"Il sabato\" = every Saturday." },
          { type: "listen-choose", audio: "Compriamo verdure a chilometro zero.", question: "What does it mean?", options: ["We buy local vegetables.", "We buy vegetables cheaply.", "We don't buy vegetables.", "We grow vegetables at home."], correctIndex: 0, explanation: "\"A chilometro zero\" = produced nearby." },
        ],
      },
      {
        heading: "Slow living",
        body: [
          "The \"slow\" idea spread beyond food. \"Cittaslow\", another Italian movement, links small towns that protect their quality of life. In 2025 UNESCO went further and recognized Italian cooking itself, the habits of cooking and eating together, as intangible cultural heritage.",
          "Day to day, \"slow\" in Italy means taking time to eat, buying from people you know, and treating a meal as a moment of community, \"la convivialità\".",
        ],
        examples: [
          { es: "Mangiare è un momento di convivialità.", en: "Eating is a moment of togetherness." },
          { es: "Prendiamoci il tempo per pranzare.", en: "Let's take the time to have lunch." },
          { es: "La cucina italiana è patrimonio dell'UNESCO.", en: "Italian cooking is UNESCO heritage." },
          { es: "Conosco il contadino che fa queste uova.", en: "I know the farmer who produces these eggs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's take the time to have lunch.", answer: "Prendiamoci il tempo per pranzare.", altAnswers: ["Prendiamoci tempo per pranzare.", "Prendiamoci il tempo di pranzare."], explanation: "\"Noi\" imperative with the pronoun attached: \"prendiamoci\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I know [the farmer who] produces these eggs.", sentence: "Conosco ___ fa queste uova.", answer: "il contadino che", explanation: "\"Che\" = who, that." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Slow Food was born in Bra.", answer: "Slow Food è nato a Bra.", explanation: "\"Nascere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Food should be good, clean and fair.", answer: "Il cibo deve essere buono, pulito e giusto.", altAnswers: ["Il cibo dovrebbe essere buono, pulito e giusto.", "Il cibo dev'essere buono, pulito e giusto."], explanation: "The movement's motto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This restaurant only uses local products.", answer: "Questo ristorante usa solo prodotti locali.", altAnswers: ["Questo ristorante usa soltanto prodotti locali.", "Questo ristorante usa solo prodotti del territorio."], explanation: "\"Locale\" → \"locali\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The milk comes straight from the farm.", answer: "Il latte arriva direttamente dalla fattoria.", altAnswers: ["Il latte viene direttamente dalla fattoria."], explanation: "\"Dalla fattoria\" = from the farm." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We buy local vegetables.", answer: "Compriamo verdure a chilometro zero.", altAnswers: ["Compriamo verdure locali.", "Compriamo verdura a chilometro zero.", "Compriamo verdure a km 0.", "Compriamo verdura locale."], explanation: "\"A chilometro zero\" = local." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Eating is a moment of [togetherness].", sentence: "Mangiare è un momento di ___.", answer: "convivialità", explanation: "\"La convivialità\" = sharing food and company." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This cheese is [protected] by Slow Food.", sentence: "Questo formaggio è ___ da Slow Food.", answer: "protetto", altAnswers: ["tutelato"], explanation: "\"Proteggere\" → \"protetto\"." },
      { type: "word-order", prompt: "Put the words in order to say: We buy directly from the farmers.", words: ["Compriamo", "direttamente", "dai", "contadini."], translation: "We buy directly from the farmers.", explanation: "\"Comprare da\" + person." },
      { type: "multiple-choice", question: "What does \"la filiera corta\" mean?", options: ["a short supply chain", "a short queue", "a fast-food chain", "a small farm"], correctIndex: 0, explanation: "Few steps between producer and buyer." },
      { type: "dictation", audio: "Il simbolo di Slow Food è una chiocciola.", explanation: "\"Chiocciola\": chi = k sound, double c." },
      { type: "speak", text: "Cerco di comprare prodotti locali e di stagione.", prompt: "Say it in Italian: I try to buy local, seasonal products.", tip: "Sta-GIO-ne: soft g.", explanation: "\"Cercare di\" + infinitive = to try to." },
    ],
  },
  {
    slug: "culture-dialogue-family-recipe",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: Nonna's Recipe",
    summary: "Make potato gnocchi with an Italian grandmother and learn the language of home recipes: quanto basta, a occhio, and kitchen commands.",
    duration: "15 min",
    sections: [
      {
        heading: "Le patate",
        body: [
          "Your friend Chiara's grandmother, nonna Pina, teaches you to make potato gnocchi. Grandmothers give orders with the \"tu\" imperative and never measure anything. Nonna: \"Allora, prima lessa le patate con la buccia.\" You: \"Quante patate?\" Nonna: \"Un chilo. E poi schiacciale quando sono ancora calde.\"",
          "Recipes in books use the infinitive: \"lessare le patate\". Spoken instructions use the imperative, often with the pronoun attached: \"schiacciale\" (mash them), \"mescolalo\" (stir it).",
        ],
        examples: [
          { es: "Prima lessa le patate con la buccia.", en: "First boil the potatoes in their skins." },
          { es: "Schiacciale quando sono ancora calde.", en: "Mash them while they're still hot." },
          { es: "Quante patate ci vogliono?", en: "How many potatoes do you need?" },
          { es: "Le patate devono essere farinose.", en: "The potatoes have to be floury." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How many potatoes do you need?", answer: "Quante patate ci vogliono?", altAnswers: ["Quante patate servono?"], explanation: "\"Ci vogliono\" + plural noun = you need." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Mash them] while they're still hot.", sentence: "___ quando sono ancora calde.", answer: "Schiacciale", explanation: "Imperative + \"le\" (them, feminine plural for \"patate\") written as one word." },
        ],
      },
      {
        heading: "Quanto basta",
        body: [
          "You: \"E quanta farina?\" Nonna: \"Quanto basta. A occhio!\" Written recipes abbreviate \"quanto basta\" as \"q.b.\": as much as needed. Other kitchen measures: \"un pizzico di sale\" (a pinch of salt), \"un filo d'olio\" (a drizzle of oil), \"una manciata\" (a handful).",
          "Nonna: \"Impasta piano, non troppo. Poi fai dei rotolini e tagliali a pezzetti.\" Overworking the dough makes gnocchi hard, and every nonna has her own trick: some add an egg, some never do.",
        ],
        examples: [
          { es: "Quanta farina? Quanto basta.", en: "How much flour? As much as needed." },
          { es: "Aggiungi un pizzico di sale.", en: "Add a pinch of salt." },
          { es: "Impasta piano, non troppo.", en: "Knead gently, not too much." },
          { es: "Fai dei rotolini e tagliali a pezzetti.", en: "Make little rolls and cut them into small pieces." },
          { es: "Io lo faccio a occhio.", en: "I do it by eye." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Add a pinch of salt.", answer: "Aggiungi un pizzico di sale.", altAnswers: ["Metti un pizzico di sale.", "Aggiunga un pizzico di sale."], explanation: "\"Un pizzico\" = a pinch; double z." },
          { type: "listen-choose", audio: "Impasta piano, non troppo.", question: "What does nonna say?", options: ["Knead gently, not too much.", "Knead quickly and a lot.", "Don't knead at all.", "Knead it on the floor."], correctIndex: 0, explanation: "\"Piano\" = gently, slowly; \"impastare\" = to knead." },
        ],
      },
      {
        heading: "A tavola!",
        body: [
          "Nonna: \"Buttali nell'acqua bollente. Quando vengono a galla, sono pronti.\" Gnocchi float when they're cooked. A Roman saying fixes them on Thursdays: \"Giovedì gnocchi\". She serves them with tomato sauce and basil, then calls everyone: \"A tavola!\".",
          "You: \"Sono buonissimi! Mi dai la ricetta?\" Nonna laughs: \"Te l'ho appena data!\" A recipe from a grandmother is a gift; writing it down and making it again is the best way to say thank you.",
        ],
        examples: [
          { es: "Quando vengono a galla, sono pronti.", en: "When they float to the top, they're ready." },
          { es: "A tavola! È pronto!", en: "Come to the table! It's ready!" },
          { es: "Mi dai la ricetta?", en: "Will you give me the recipe?" },
          { es: "Te l'ho appena data!", en: "I've just given it to you!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you give me the recipe?", answer: "Mi dai la ricetta?", altAnswers: ["Mi dà la ricetta?", "Mi puoi dare la ricetta?", "Mi può dare la ricetta?"], explanation: "\"Mi dai...?\" = will you give me...? \"Dai\" has no accent." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When they [float to the top], they're ready.", sentence: "Quando ___, sono pronti.", answer: "vengono a galla", altAnswers: ["salgono a galla"], explanation: "\"Venire a galla\" = to float to the surface." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First boil the potatoes.", answer: "Prima lessa le patate.", altAnswers: ["Prima fai bollire le patate.", "Prima cuoci le patate."], explanation: "\"Lessare\" = to boil (food)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Knead gently, not too much.", answer: "Impasta piano, non troppo.", altAnswers: ["Impasta delicatamente, non troppo.", "Impasta piano, ma non troppo."], explanation: "\"Impastare\" = to knead." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come to the table! It's ready!", answer: "A tavola! È pronto!", explanation: "The call every Italian child knows." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're delicious!", answer: "Sono buonissimi!", altAnswers: ["Sono squisiti!", "Che buoni!"], explanation: "\"Gli gnocchi\" are masculine plural: \"buonissimi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I do it by eye.", answer: "Io lo faccio a occhio.", altAnswers: ["Lo faccio a occhio.", "Faccio a occhio."], explanation: "\"A occhio\" = by eye, without measuring." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "How much flour? [As much as needed].", sentence: "Quanta farina? ___.", answer: "Quanto basta", explanation: "Abbreviated \"q.b.\" in recipes." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Add [a drizzle of oil].", sentence: "Aggiungi ___.", answer: "un filo d'olio", altAnswers: ["un filo di olio"], explanation: "\"Un filo\" = a thread: a drizzle." },
      { type: "word-order", prompt: "Put the words in order to say: Cut them into small pieces.", words: ["Tagliali", "a", "pezzetti."], translation: "Cut them into small pieces.", explanation: "\"Tagliali\": the pronoun attaches to the imperative." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "lessare", right: "to boil" },
          { left: "schiacciare", right: "to mash" },
          { left: "impastare", right: "to knead" },
          { left: "tagliare", right: "to cut" },
          { left: "un pizzico", right: "a pinch" },
        ],
        explanation: "Kitchen verbs and measures.",
      },
      { type: "dictation", audio: "Aggiungi un pizzico di sale.", explanation: "\"Aggiungi\": double g; \"pizzico\": double z." },
      { type: "speak", text: "Nonna, mi dai la ricetta? Sono buonissimi!", prompt: "Say it in Italian: Grandma, will you give me the recipe? They're delicious!", tip: "Buo-NIS-si-mi: stress on -nis-.", explanation: "Praise plus a request." },
    ],
  },
];

export const IT_CULTURE_U03_WRITING: WriteExercise = {
  type: "write",
  prompt: "An Italian food blog asks readers for a family recipe. Write a short post: introduce the dish and where it comes from (your family or an Italian region), list the ingredients with Italian measures (un etto, un pizzico, quanto basta), and give the steps as instructions with the tu imperative. End with one rule Italians would care about for this dish.",
  minWords: 70,
  maxWords: 150,
  rubric: [
    "Introduces the dish and its origin (è un piatto tipico di..., viene da...)",
    "Uses Italian measures correctly (un etto, mezzo chilo, un pizzico di sale, un filo d'olio, q.b.)",
    "Gives the steps with the tu imperative, including at least one negative (non cuocere) and one attached pronoun (tagliale, mescolalo)",
    "States one food rule accurately (al dente, no cream in carbonara, no cheese on seafood pasta)",
  ],
  modelAnswer: "Vi presento le orecchiette con le cime di rapa, un piatto tipico della Puglia. La ricetta me l'ha insegnata la mamma di una mia amica di Bari. Ingredienti per quattro persone: mezzo chilo di orecchiette, un chilo di cime di rapa, due spicchi d'aglio, tre acciughe, un peperoncino, olio d'oliva e sale quanto basta. Lava le cime di rapa e tagliale a pezzi. Cuocile nell'acqua bollente salata con le orecchiette. Intanto metti l'olio in padella con l'aglio, le acciughe e il peperoncino. Scola tutto e saltalo in padella per un minuto. Non mettere il formaggio: con le acciughe non va! Buon appetito!",
  explanation: "\"Un piatto tipico della Puglia\" gives the origin; \"mezzo chilo\", \"un chilo\", \"quanto basta\" are Italian measures; \"tagliale\", \"cuocile\" and \"saltalo\" attach pronouns to the imperative, and \"non mettere\" is the negative \"tu\" command; the cheese rule fits a dish with anchovies.",
};
