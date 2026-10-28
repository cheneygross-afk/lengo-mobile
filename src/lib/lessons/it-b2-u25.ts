// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u25.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 25: Food Culture in Depth. Quality
// labels, regional cooking, recipe language and food debates; review in
// context of the imperative and infinitive in recipes, si passivante,
// andare + participle, comparisons and superlatives.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U25: Lesson[] = [
  {
    slug: "b2-dop-igp",
    level: "IT-B2",
    number: 1,
    title: "DOP, IGP and Quality",
    summary: "Understand what DOP, IGP and STG labels guarantee, and talk about Parmigiano Reggiano, Prosciutto di Parma and San Marzano tomatoes.",
    duration: "17 min",
    sections: [
      {
        heading: "What the labels mean",
        body: [
          "Italy has more protected food names than any other EU country, over three hundred. \"DOP\" (Denominazione di Origine Protetta) means every stage, from raw material to finished product, happens in the defined area. \"IGP\" (Indicazione Geografica Protetta) requires at least one stage there. \"STG\" (Specialità Tradizionale Garantita) protects a traditional recipe, not a place: \"la pizza napoletana STG\" can be made anywhere, as long as the rules are followed.",
          "Each product has \"un disciplinare\" (a set of production rules) and \"un consorzio di tutela\" (a protection consortium) that checks them. A product \"viene prodotto\", \"stagionato\" (aged, matured) and \"certificato\": the passive is everywhere in this language.",
          "Labels for wine work in the same way: \"DOC\" (Denominazione di Origine Controllata) and the stricter \"DOCG\", where the G stands for \"Garantita\". On a menu or a store sign you will also see \"tipico\", \"artigianale\" (made by hand, small-scale) and \"nostrano\" (local, from round here): these words sound good but are not protected, so anyone can use them.",
        ],
        examples: [
          { es: "L'Italia ha più di trecento prodotti DOP e IGP.", en: "Italy has more than three hundred DOP and IGP products." },
          { es: "Un prodotto DOP viene fatto interamente nella zona d'origine.", en: "A DOP product is made entirely in its area of origin." },
          { es: "Per l'IGP basta che una fase avvenga nella zona.", en: "For IGP it's enough for one stage to take place in the area." },
          { es: "La pizza napoletana STG si può fare anche fuori da Napoli.", en: "STG Neapolitan pizza can be made outside Naples too." },
          { es: "Il disciplinare stabilisce gli ingredienti e i tempi di stagionatura.", en: "The production rules set the ingredients and the aging times." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A DOP product is made entirely in its area of origin.", answer: "Un prodotto DOP viene fatto interamente nella zona d'origine.", altAnswers: ["Un prodotto DOP è fatto interamente nella zona d'origine.", "Un prodotto DOP viene prodotto interamente nella zona di origine.", "Un prodotto DOP viene fatto interamente nella zona di origine."], explanation: "Passive with \"venire\" for a process." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "For IGP it's enough for one stage [to take place] in the area.", sentence: "Per l'IGP basta che una fase ___ nella zona.", answer: "avvenga", explanation: "\"Basta che\" + subjunctive: \"avvenga\" from \"avvenire\"." },
          { type: "multiple-choice", question: "Which label protects a traditional recipe rather than a place?", options: ["STG", "DOP", "IGP", "DOC"], correctIndex: 0, explanation: "\"Specialità Tradizionale Garantita\": the recipe, not the area." },
        ],
      },
      {
        heading: "Three famous names",
        body: [
          "\"Il Parmigiano Reggiano DOP\" is made only in the provinces of Parma, Reggio Emilia, Modena and parts of Bologna and Mantova, from raw milk, salt and rennet (\"il caglio\"), and aged at least twelve months; many wheels are sold at 24 or 36. \"Il Prosciutto di Parma DOP\" contains only pork and sea salt. \"Il pomodoro San Marzano DOP\" grows in the volcanic soil between Naples and Salerno.",
          "Aging language: \"stagionato 24 mesi\" (aged for 24 months), \"la stagionatura\". Note the gender: \"il Parmigiano\", \"il prosciutto\", \"il pomodoro\", but \"la mozzarella\" and \"la ricotta\".",
        ],
        examples: [
          { es: "Il Parmigiano Reggiano viene stagionato almeno dodici mesi.", en: "Parmigiano Reggiano is aged for at least twelve months." },
          { es: "Questo è un Parmigiano stagionato trenta mesi.", en: "This is a Parmigiano aged for thirty months." },
          { es: "Nel Prosciutto di Parma ci sono solo carne di maiale e sale.", en: "Prosciutto di Parma contains only pork and salt." },
          { es: "I San Marzano crescono sul terreno vulcanico vicino al Vesuvio.", en: "San Marzano tomatoes grow in the volcanic soil near Vesuvius." },
          { es: "Mi dà un etto di prosciutto di Parma tagliato sottile?", en: "Could I have a hundred grams of Parma ham, thinly sliced?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Parmigiano Reggiano is aged for at least twelve months.", answer: "Il Parmigiano Reggiano viene stagionato almeno dodici mesi.", altAnswers: ["Il Parmigiano Reggiano è stagionato almeno dodici mesi.", "Il Parmigiano Reggiano viene stagionato per almeno dodici mesi.", "Il Parmigiano Reggiano stagiona almeno dodici mesi."], explanation: "\"Stagionare\" = to age, mature." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, to the person at the deli counter.", source: "Could I have a hundred grams of Parma ham, thinly sliced?", answer: "Mi dà un etto di prosciutto di Parma tagliato sottile?", altAnswers: ["Mi dà un etto di prosciutto di Parma tagliato fine?", "Vorrei un etto di prosciutto di Parma tagliato sottile.", "Mi può dare un etto di prosciutto di Parma tagliato sottile?"], explanation: "\"Un etto\" = 100 g; \"tagliato sottile\" = thinly sliced." },
          { type: "listen-choose", audio: "Questo è un Parmigiano stagionato trenta mesi.", question: "How old is the cheese?", options: ["thirty months", "thirteen months", "three months", "three years"], correctIndex: 0, explanation: "\"Trenta mesi\"." },
        ],
      },
      {
        heading: "Fakes and \"Italian sounding\"",
        body: [
          "Abroad, shelves are full of \"prodotti italian sounding\": products with Italian-looking names, flags and colors made elsewhere, like \"Parmesan\". The consortia fight \"la contraffazione\" (counterfeiting) and \"l'imitazione\". \"Il marchio\" is the brand or seal; \"la denominazione\" the protected name.",
          "Express quality claims with comparatives and superlatives: \"è il formaggio più imitato del mondo\" (the most imitated cheese in the world, \"del\" for in), \"non è buono quanto l'originale\" (not as good as the original).",
          "Note \"più ... di\" for comparing two things (\"più saporito del Parmesan\") and \"più ... che\" when you compare two adjectives, verbs or phrases (\"più costoso che buono\": more expensive than good). \"Migliore\" and \"peggiore\" are the irregular forms of \"più buono\" and \"più cattivo\"; both forms are used, but \"migliore\" sounds more formal.",
        ],
        examples: [
          { es: "Il Parmigiano è il formaggio più imitato del mondo.", en: "Parmigiano is the most imitated cheese in the world." },
          { es: "Il Parmesan non è buono quanto l'originale.", en: "Parmesan isn't as good as the original." },
          { es: "Controlla sempre il marchio sulla crosta.", en: "Always check the seal on the rind." },
          { es: "La contraffazione costa miliardi alle aziende italiane.", en: "Counterfeiting costs Italian companies billions." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the most imitated cheese in the world.", answer: "È il formaggio più imitato del mondo.", altAnswers: ["È il formaggio più imitato al mondo."], explanation: "Superlative + \"del mondo\" (in = \"di\")." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It isn't as good as the original.", answer: "Non è buono quanto l'originale.", altAnswers: ["Non è buono come l'originale.", "Non è così buono come l'originale."], explanation: "\"(Tanto) ... quanto\" or \"(così) ... come\" for equality." },
          { type: "speak", text: "Il Parmigiano Reggiano è il formaggio più imitato del mondo.", prompt: "Say it in Italian: Parmigiano Reggiano is the most imitated cheese in the world.", tip: "par-mi-GIA-no: the gi is soft, j as in jam.", explanation: "Superlative with \"del mondo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italy has more than three hundred protected products.", answer: "L'Italia ha più di trecento prodotti protetti.", altAnswers: ["L'Italia ha oltre trecento prodotti protetti.", "L'Italia ha più di 300 prodotti protetti."], explanation: "\"Più di\" before a number." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Prosciutto di Parma contains only pork and salt.", answer: "Il Prosciutto di Parma contiene solo carne di maiale e sale.", altAnswers: ["Nel Prosciutto di Parma ci sono solo carne di maiale e sale.", "Il prosciutto di Parma contiene solo carne di maiale e sale."], explanation: "\"Carne di maiale\" = pork." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The production rules set the ingredients.", answer: "Il disciplinare stabilisce gli ingredienti.", altAnswers: ["Il disciplinare fissa gli ingredienti."], explanation: "\"Il disciplinare\" = production rules." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Always check the seal. (to a friend)", answer: "Controlla sempre il marchio.", explanation: "\"Il marchio\" = seal, brand." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These tomatoes grow near Vesuvius.", answer: "Questi pomodori crescono vicino al Vesuvio.", explanation: "\"Crescere\" + \"vicino a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This cheese is [aged for 24 months].", sentence: "Questo formaggio è ___.", answer: "stagionato 24 mesi", altAnswers: ["stagionato ventiquattro mesi", "stagionato per 24 mesi"], explanation: "\"Stagionato\" + time, usually without \"per\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Counterfeiting] costs billions.", sentence: "___ costa miliardi.", answer: "La contraffazione", explanation: "\"La contraffazione\" = counterfeiting." },
      { type: "word-order", prompt: "Put the words in order to say: STG pizza can be made outside Naples too.", words: ["La pizza", "STG", "si può fare", "anche fuori", "da Napoli."], translation: "STG pizza can be made outside Naples too.", explanation: "Impersonal \"si può fare\"." },
      { type: "matching", instructions: "Match each label or word to its meaning.", pairs: [{ left: "DOP", right: "every stage in the area" }, { left: "IGP", right: "at least one stage in the area" }, { left: "STG", right: "a protected traditional recipe" }, { left: "il disciplinare", right: "the production rules" }, { left: "la stagionatura", right: "aging" }], explanation: "The labels guarantee different things." },
      { type: "dictation", audio: "Il Parmigiano Reggiano viene stagionato almeno dodici mesi.", explanation: "\"Viene stagionato\": passive." },
      { type: "speak", text: "Vorrei un pezzo di Parmigiano stagionato ventiquattro mesi, per favore.", prompt: "At the cheese counter: I'd like a piece of Parmigiano aged for twenty-four months, please.", tip: "sta-gio-NA-to: soft g.", explanation: "\"Un pezzo di\" + cheese; \"stagionato\" + months." },
    ],
  },
  {
    slug: "b2-regional-cooking",
    level: "IT-B2",
    number: 2,
    title: "Cooking by Region",
    summary: "Talk about pesto, ragù, carbonara, arancini, orecchiette and risotto alla milanese, and the rules Italians argue about.",
    duration: "17 min",
    sections: [
      {
        heading: "North: pesto and risotto",
        body: [
          "\"Il pesto alla genovese\" from Liguria is basil, pine nuts (\"i pinoli\"), garlic, Parmigiano and Pecorino, olive oil and salt, traditionally pounded \"nel mortaio\" (in a mortar) rather than blended. In Liguria it goes with \"trofie\" or \"trenette\", often with potatoes and green beans.",
          "\"Il risotto alla milanese\" is colored yellow by saffron (\"lo zafferano\") and is the classic partner of \"l'ossobuco\". Rice in the North, pasta in the South, is a rough but useful map: the Po valley has \"le risaie\" (rice fields) and butter, the South has durum wheat and olive oil.",
          "Regional names often end in \"alla\" + an adjective of place: \"alla genovese\", \"alla milanese\", \"alla romana\", \"alla siciliana\". The article and \"maniera\" are understood: \"alla (maniera) milanese\" means in the Milanese style. Ingredients use \"al\", \"alla\", \"ai\", \"alle\": \"al ragù\", \"alle vongole\", \"ai funghi\".",
        ],
        examples: [
          { es: "Il vero pesto si fa nel mortaio, non nel frullatore.", en: "Real pesto is made in a mortar, not a blender." },
          { es: "In Liguria il pesto si mangia con le trofie, le patate e i fagiolini.", en: "In Liguria pesto is eaten with trofie, potatoes and green beans." },
          { es: "Lo zafferano dà al risotto il suo colore giallo.", en: "Saffron gives the risotto its yellow color." },
          { es: "A Milano il risotto si serve spesso con l'ossobuco.", en: "In Milan risotto is often served with ossobuco." },
          { es: "Al Nord si cucina di più con il burro, al Sud con l'olio.", en: "In the North people cook more with butter, in the South with oil." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Real pesto is made in a mortar.", answer: "Il vero pesto si fa nel mortaio.", altAnswers: ["Il pesto vero si fa nel mortaio.", "Il vero pesto viene fatto nel mortaio."], explanation: "Si passivante: \"si fa\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Saffron gives the risotto its yellow color.", answer: "Lo zafferano dà al risotto il suo colore giallo.", altAnswers: ["Lo zafferano dà il colore giallo al risotto."], explanation: "\"Lo zafferano\": z takes \"lo\"; \"dà\" with an accent." },
          { type: "multiple-choice", question: "Which ingredient is NOT in classic pesto alla genovese?", options: ["cream", "pine nuts", "basil", "Pecorino"], correctIndex: 0, explanation: "No cream: basil, pine nuts, garlic, cheese, oil and salt." },
        ],
      },
      {
        heading: "Center: ragù and carbonara",
        body: [
          "In Bologna \"il ragù\" simmers for hours and goes with \"le tagliatelle\" (or in \"le lasagne\"), never with spaghetti. Naples has its own Sunday \"ragù napoletano\", made with whole pieces of meat. In Rome, \"la carbonara\" is \"guanciale\" (cured pork cheek), egg yolks, Pecorino Romano and black pepper: no cream, no garlic, and for purists no \"pancetta\".",
          "Italians defend these rules passionately. Use \"si deve\", \"non si deve\", \"guai a chi\" (woe betide anyone who) + indicative, and \"è un sacrilegio\" for the worst offenses.",
          "To report a rule as something everyone believes, use the impersonal \"si dice che\" + subjunctive, or \"secondo i romani\" + indicative. \"Guai a chi\" is followed by the indicative: \"guai a chi rompe gli spaghetti!\" (woe betide anyone who breaks the spaghetti!). Breaking long pasta before cooking it is another classic taboo.",
        ],
        examples: [
          { es: "A Bologna il ragù si mangia con le tagliatelle, non con gli spaghetti.", en: "In Bologna ragù is eaten with tagliatelle, not spaghetti." },
          { es: "Il ragù deve cuocere almeno tre ore.", en: "Ragù has to cook for at least three hours." },
          { es: "Nella carbonara non si mette la panna.", en: "You don't put cream in carbonara." },
          { es: "Guai a chi usa la pancetta al posto del guanciale!", en: "Woe betide anyone who uses pancetta instead of guanciale!" },
          { es: "Per un romano, la carbonara con l'aglio è un sacrilegio.", en: "For a Roman, carbonara with garlic is sacrilege." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You don't put cream in carbonara.", answer: "Nella carbonara non si mette la panna.", altAnswers: ["Non si mette la panna nella carbonara.", "Nella carbonara la panna non si mette."], explanation: "Si passivante for rules: \"non si mette\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Ragù [has to cook] for at least three hours.", sentence: "Il ragù ___ almeno tre ore.", answer: "deve cuocere", explanation: "\"Cuocere\" = to cook (intransitive here)." },
          { type: "listen-choose", audio: "Guai a chi usa la pancetta al posto del guanciale!", question: "What is the speaker warning against?", options: ["using pancetta instead of guanciale", "using guanciale instead of pancetta", "adding too much pepper", "cooking the eggs"], correctIndex: 0, explanation: "\"Al posto di\" = instead of." },
        ],
      },
      {
        heading: "South: orecchiette and arancini",
        body: [
          "In Puglia \"le orecchiette\" (little ears) are made by hand and served \"con le cime di rapa\" (with turnip tops). In Sicily, rice balls filled with ragù or ham and cheese spark the most famous food argument: in Palermo and much of western Sicily they're \"le arancine\" (feminine), in Catania and much of the east \"gli arancini\" (masculine), and each side is sure it's right; outside Sicily \"arancini\" is the usual word.",
          "Comparatives help in friendly arguments: \"le arancine di Palermo sono più buone di quelle di Catania\" (\"più buono\" is common in speech; \"migliore\" is better style).",
        ],
        examples: [
          { es: "A Bari le nonne fanno le orecchiette a mano.", en: "In Bari grandmothers make orecchiette by hand." },
          { es: "Le orecchiette con le cime di rapa sono il piatto simbolo della Puglia.", en: "Orecchiette with turnip tops are Puglia's signature dish." },
          { es: "A Palermo si dice arancina, a Catania arancino.", en: "In Palermo they say arancina, in Catania arancino." },
          { es: "Secondo me quelle di Palermo sono migliori.", en: "In my opinion the Palermo ones are better." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Palermo they say arancina, in Catania arancino.", answer: "A Palermo si dice arancina, a Catania arancino.", altAnswers: ["A Palermo dicono arancina, a Catania arancino.", "A Palermo si dice arancina, mentre a Catania arancino."], explanation: "Impersonal \"si dice\"." },
          { type: "speak", text: "Le orecchiette con le cime di rapa sono il piatto simbolo della Puglia.", prompt: "Say it in Italian: Orecchiette with turnip tops are Puglia's signature dish.", tip: "o-rec-CHIET-te: double c, hard k sound.", explanation: "\"Il piatto simbolo\" = signature dish." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Bologna ragù is eaten with tagliatelle.", answer: "A Bologna il ragù si mangia con le tagliatelle.", altAnswers: ["A Bologna il ragù si mangia con le tagliatelle, non con gli spaghetti.", "A Bologna si mangia il ragù con le tagliatelle."], explanation: "Si passivante." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Milan risotto is often served with ossobuco.", answer: "A Milano il risotto si serve spesso con l'ossobuco.", altAnswers: ["A Milano il risotto viene servito spesso con l'ossobuco.", "A Milano il risotto è spesso servito con l'ossobuco."], explanation: "\"Si serve\" or \"viene servito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For a Roman, carbonara with cream is sacrilege.", answer: "Per un romano, la carbonara con la panna è un sacrilegio.", altAnswers: ["Per un romano la carbonara con la panna è un sacrilegio."], explanation: "\"Un sacrilegio\" for the gravest food crime." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the South people cook more with oil.", answer: "Al Sud si cucina di più con l'olio.", altAnswers: ["Al Sud si cucina più con l'olio.", "Nel Sud si cucina di più con l'olio."], explanation: "Impersonal \"si cucina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandmothers make orecchiette by hand.", answer: "Le nonne fanno le orecchiette a mano.", explanation: "\"A mano\" = by hand." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Woe betide anyone who [breaks] the spaghetti!", sentence: "Guai a chi ___ gli spaghetti!", answer: "spezza", explanation: "\"Guai a chi\" + indicative; \"spezzare\" = to break." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He used pancetta [instead of] guanciale.", sentence: "Ha usato la pancetta ___ guanciale.", answer: "al posto del", altAnswers: ["invece del"], explanation: "\"Al posto di\" + \"il\" = \"al posto del\"." },
      { type: "word-order", prompt: "Put the words in order to say: Real pesto is made in a mortar, not a blender.", words: ["Il vero", "pesto", "si fa", "nel mortaio,", "non nel", "frullatore."], translation: "Real pesto is made in a mortar, not a blender.", explanation: "Si passivante." },
      { type: "multiple-choice", question: "Which pasta goes with ragù in Bologna?", options: ["tagliatelle", "spaghetti", "orecchiette", "trofie"], correctIndex: 0, explanation: "\"Tagliatelle al ragù\", never spaghetti." },
      { type: "dictation", audio: "Nella carbonara non si mette la panna e non si mette l'aglio.", explanation: "Si passivante twice." },
      { type: "speak", text: "La vera carbonara si fa con il guanciale, il pecorino, le uova e il pepe.", prompt: "Explain to a friend: Real carbonara is made with guanciale, pecorino, eggs and pepper.", tip: "guan-CIA-le: ci as in cheese.", explanation: "\"Si fa con\" + ingredients with articles." },
    ],
  },
  {
    slug: "b2-recipe-language",
    level: "IT-B2",
    number: 3,
    title: "Recipe Language",
    summary: "Read and write Italian recipes: soffriggere, rosolare, sfumare, mantecare, q.b., a fuoco lento, scolare al dente.",
    duration: "17 min",
    sections: [
      {
        heading: "Three ways to give instructions",
        body: [
          "Italian recipes use one of three forms, consistently: the infinitive (\"tritare la cipolla\", the most common in cookbooks), the imperative (\"trita la cipolla\" for \"tu\", \"tritate\" for \"voi\"), or the si passivante (\"si trita la cipolla\"). With pronouns, the infinitive and imperative attach them: \"tagliarla\", \"tagliala\".",
          "For something that must be done, \"andare\" + participle: \"la pasta va scolata al dente\" (the pasta must be drained al dente). \"Q.b.\" (quanto basta, as much as needed) replaces a quantity for salt, pepper and oil.",
          "Recipes written for friends or on food blogs often prefer the \"tu\" imperative, which sounds warmer: \"prendi una padella\", \"accendi il forno\". Older cookbooks and newspaper columns sometimes use the si passivante throughout: \"si prende una padella\", \"si accende il forno\". Whatever you choose, never mix the forms in the same recipe.",
        ],
        examples: [
          { es: "Tritare finemente la cipolla.", en: "Finely chop the onion." },
          { es: "Trita la cipolla e mettila in padella.", en: "Chop the onion and put it in the pan." },
          { es: "Si trita la cipolla e si mette in padella.", en: "You chop the onion and put it in the pan." },
          { es: "La pasta va scolata al dente.", en: "The pasta must be drained al dente." },
          { es: "Sale e pepe q.b.", en: "Salt and pepper to taste." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style with the infinitive.", source: "Finely chop the onion.", answer: "Tritare finemente la cipolla.", altAnswers: ["Tritare la cipolla finemente.", "Tritare fine la cipolla."], explanation: "Cookbook style: the infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The pasta must be drained al dente.", answer: "La pasta va scolata al dente.", explanation: "\"Va scolata\" agrees with \"la pasta\"." },
          { type: "multiple-choice", question: "What does \"q.b.\" mean in a recipe?", options: ["as much as needed", "a quarter of a bowl", "quickly boiled", "good quality"], correctIndex: 0, explanation: "\"Quanto basta\" = as much as needed, to taste." },
        ],
      },
      {
        heading: "The key verbs",
        body: [
          "\"Soffriggere\" is to fry gently, to soften onion, carrot and celery (together \"il soffritto\") in oil or butter. \"Rosolare\" is to brown meat over a higher heat. \"Sfumare\" (\"con il vino\") is to add wine and let it evaporate. \"Mantecare\" is to stir in butter and cheese off the heat to make a risotto creamy. And \"scolare\" is to drain.",
          "Cutting: \"tritare\" (chop finely), \"affettare\" (slice), \"tagliare a dadini\" (dice), \"a rondelle\" (in rounds). Mixing: \"mescolare\" (stir), \"amalgamare\" (blend), \"impastare\" (knead).",
          "Note the irregular participles you will meet in recipes: \"soffriggere\" → \"soffritto\", \"cuocere\" → \"cotto\", \"friggere\" → \"fritto\", \"mettere\" → \"messo\", \"togliere\" → \"tolto\". They agree with the noun after \"andare\": \"le zucchine vanno fritte\", \"il sugo va cotto a lungo\". \"Bollire\" is to boil and \"lessare\" to cook in boiling water: \"le patate lesse\" are boiled potatoes.",
        ],
        examples: [
          { es: "Soffriggere la cipolla nel burro per qualche minuto.", en: "Gently fry the onion in butter for a few minutes." },
          { es: "Rosolare la carne a fuoco vivace.", en: "Brown the meat over high heat." },
          { es: "Sfumare con mezzo bicchiere di vino bianco.", en: "Deglaze with half a glass of white wine." },
          { es: "Togliere dal fuoco e mantecare con burro e parmigiano.", en: "Take off the heat and stir in butter and Parmesan." },
          { es: "Tagliare le carote a dadini.", en: "Dice the carrots." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Brown the meat over high heat.", answer: "Rosolare la carne a fuoco vivace.", altAnswers: ["Rosolare la carne a fuoco alto.", "Rosolare la carne a fiamma alta."], explanation: "\"Rosolare\" = to brown; \"a fuoco vivace\" = over high heat." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words, in recipe style.", en: "[Deglaze] with half a glass of white wine.", sentence: "___ con mezzo bicchiere di vino bianco.", answer: "Sfumare", explanation: "\"Sfumare\" = add wine and let it evaporate." },
          { type: "listen-choose", audio: "Togliere dal fuoco e mantecare con burro e parmigiano.", question: "What do you do at the end?", options: ["Take it off the heat and stir in butter and cheese.", "Turn up the heat and add cheese.", "Add butter and leave it on the heat.", "Drain it and add cheese."], correctIndex: 0, explanation: "\"Mantecare\" happens off the heat." },
        ],
      },
      {
        heading: "Heat, time and quantities",
        body: [
          "Heat: \"a fuoco lento\" or \"basso\" (low), \"medio\", \"vivace\" or \"alto\" (high). Time: \"per dieci minuti\", \"finché non\" + verb (until): \"cuocere finché la cipolla non diventa trasparente\" (the \"non\" here doesn't make it negative). Small amounts: \"un pizzico di sale\" (a pinch), \"un filo d'olio\" (a drizzle), \"uno spicchio d'aglio\" (a clove), \"una noce di burro\" (a pat).",
          "Oven instructions: \"preriscaldare il forno a 180 gradi\" (preheat the oven to 180 degrees), \"infornare\" (put in the oven), \"sfornare\" (take out of the oven), \"in forno ventilato\" (in a convection oven). Waiting: \"lasciare riposare\" (leave to rest), \"lasciare raffreddare\" (leave to cool), \"lasciare lievitare\" (leave to rise, for dough).",
        ],
        examples: [
          { es: "Cuocere a fuoco lento per due ore.", en: "Cook over low heat for two hours." },
          { es: "Cuocere finché la cipolla non diventa trasparente.", en: "Cook until the onion turns translucent." },
          { es: "Aggiungere un pizzico di sale e un filo d'olio.", en: "Add a pinch of salt and a drizzle of oil." },
          { es: "Schiacciare uno spicchio d'aglio.", en: "Crush a clove of garlic." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Cook over low heat for two hours.", answer: "Cuocere a fuoco lento per due ore.", altAnswers: ["Cuocere a fuoco basso per due ore.", "Far cuocere a fuoco lento per due ore."], explanation: "\"A fuoco lento\" = over low heat." },
          { type: "speak", text: "Aggiungere un pizzico di sale e un filo d'olio.", prompt: "Read the step aloud: Add a pinch of salt and a drizzle of oil.", tip: "PIZ-zi-co: voiceless zz, like ts.", explanation: "Small-quantity expressions." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Gently fry the onion in butter.", answer: "Soffriggere la cipolla nel burro.", altAnswers: ["Far soffriggere la cipolla nel burro.", "Soffriggere la cipolla con il burro."], explanation: "\"Soffriggere\" = to fry gently." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Dice the carrots.", answer: "Tagliare le carote a dadini.", explanation: "\"A dadini\" = in small cubes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Add a clove of garlic.", answer: "Aggiungere uno spicchio d'aglio.", altAnswers: ["Aggiungere uno spicchio di aglio."], explanation: "\"Uno spicchio\": s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using tu.", source: "Chop the onion and put it in the pan.", answer: "Trita la cipolla e mettila in padella.", altAnswers: ["Trita la cipolla e mettila nella padella."], explanation: "\"Tu\" imperative with the pronoun attached: \"mettila\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Cook until the onion turns translucent.", answer: "Cuocere finché la cipolla non diventa trasparente.", altAnswers: ["Cuocere finché la cipolla diventa trasparente.", "Cuocere fino a quando la cipolla non diventa trasparente."], explanation: "\"Finché non\" = until; the \"non\" isn't negative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Salt and pepper to taste.", answer: "Sale e pepe q.b.", altAnswers: ["Sale e pepe quanto basta."], explanation: "\"Q.b.\" = quanto basta." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, with andare + participle.", en: "The risotto [must be stirred] often.", sentence: "Il risotto ___ spesso.", answer: "va mescolato", explanation: "\"Va mescolato\" = must be stirred." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in recipe style.", en: "[Drain] the pasta al dente.", sentence: "___ la pasta al dente.", answer: "Scolare", explanation: "\"Scolare\" = to drain." },
      { type: "word-order", prompt: "Put the words in order to say: Take off the heat and stir in butter and cheese.", words: ["Togliere", "dal fuoco", "e mantecare", "con burro", "e formaggio."], translation: "Take off the heat and stir in butter and cheese.", explanation: "\"Mantecare\" off the heat." },
      { type: "matching", instructions: "Match the Italian verb to the English.", pairs: [{ left: "soffriggere", right: "to fry gently" }, { left: "rosolare", right: "to brown" }, { left: "sfumare", right: "to deglaze with wine" }, { left: "mantecare", right: "to stir in butter and cheese" }, { left: "scolare", right: "to drain" }], explanation: "The core recipe verbs." },
      { type: "dictation", audio: "Soffriggere la cipolla e sfumare con il vino bianco.", explanation: "Two infinitives: recipe style." },
      { type: "speak", text: "Rosolare la carne a fuoco vivace, poi sfumare con il vino e cuocere a fuoco lento.", prompt: "Read the recipe step: Brown the meat over high heat, then deglaze with wine and cook over low heat.", tip: "ro-so-LA-re: single s, sounds like z.", explanation: "A sequence of recipe infinitives." },
    ],
  },
  {
    slug: "b2-food-debates",
    level: "IT-B2",
    number: 4,
    title: "Food Debates",
    summary: "Argue about pineapple on pizza, cream in carbonara and the cappuccino after lunch, with strong opinions, the subjunctive and concessions.",
    duration: "17 min",
    sections: [
      {
        heading: "Strong opinions",
        body: [
          "Food is the safest topic for a heated argument in Italy. Express strong dislike with \"non sopporto che\" + subjunctive (\"non sopporto che si metta la panna nella carbonara\"), \"mi dà fastidio che\" + subjunctive, or the very colloquial \"mi fa orrore\" (it horrifies me). \"È un sacrilegio\" and \"è un delitto\" are the classic exaggerations.",
          "To defend a choice: \"secondo me\" + indicative, \"non vedo che male ci sia\" (I don't see what's wrong with it), \"ognuno mangia come vuole\" (everyone eats as they like), \"de gustibus\" (there's no accounting for taste: Latin, used in conversation).",
          "Remember the triggers for the subjunctive here: verbs of feeling and judgment such as \"non sopporto che\", \"mi dà fastidio che\", \"trovo assurdo che\" and \"è strano che\". When the subject is the same in both parts, use \"di\" + infinitive instead: \"non sopporto di mangiare in fretta\" (I can't stand eating in a hurry).",
        ],
        examples: [
          { es: "Non sopporto che si metta la panna nella carbonara.", en: "I can't stand people putting cream in carbonara." },
          { es: "Mi dà fastidio che lo chiamino \"spaghetti bolognese\".", en: "It annoys me that they call it spaghetti bolognese." },
          { es: "L'ananas sulla pizza? Per me è un sacrilegio.", en: "Pineapple on pizza? For me it's sacrilege." },
          { es: "Non vedo che male ci sia: ognuno mangia come vuole.", en: "I don't see what's wrong with it: everyone eats as they like." },
          { es: "De gustibus: a me la pizza con l'ananas piace.", en: "There's no accounting for taste: I like pineapple pizza." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't stand people putting cream in carbonara.", answer: "Non sopporto che si metta la panna nella carbonara.", altAnswers: ["Non sopporto che mettano la panna nella carbonara.", "Non sopporto che la gente metta la panna nella carbonara."], explanation: "\"Non sopporto che\" + subjunctive \"si metta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't see what's wrong [with it].", sentence: "Non vedo che male ___.", answer: "ci sia", explanation: "Indirect question after a negative: subjunctive \"ci sia\"." },
          { type: "multiple-choice", question: "Which reply defends someone's food choice?", options: ["Ognuno mangia come vuole.", "È un sacrilegio.", "Mi fa orrore.", "Non sopporto che lo faccia."], correctIndex: 0, explanation: "\"Ognuno mangia come vuole\" defends the choice; the others attack it." },
        ],
      },
      {
        heading: "The three great debates",
        body: [
          "Pineapple: most Italians consider \"la pizza hawaiana\" a foreign invention. Carbonara: cream (\"la panna\") is the great taboo; the creaminess should come from egg and Pecorino with a little pasta water (\"l'acqua di cottura\"). Cappuccino: Italians drink it at breakfast, and many find it odd after a meal, because milk is seen as heavy (\"pesante\") on a full stomach. After lunch you have \"un caffè\", an espresso.",
          "Use comparisons to argue: \"è più buona senza\", \"la panna copre il sapore\" (cream masks the flavor), \"il latte appesantisce\" (milk weighs you down).",
          "In a real argument you will hear softeners too: \"dai, non esagerare\" (come on, don't exaggerate), \"non è la fine del mondo\" (it's not the end of the world), \"sì, però\" (yes, but). And when people get really heated: \"ma stai scherzando?\" (are you joking?) and \"non se ne parla nemmeno\" (it's out of the question).",
        ],
        examples: [
          { es: "La cremosità deve venire dall'uovo e dal pecorino, non dalla panna.", en: "The creaminess must come from the egg and the pecorino, not from cream." },
          { es: "Un goccio d'acqua di cottura rende la carbonara cremosa.", en: "A drop of pasta water makes the carbonara creamy." },
          { es: "Dopo pranzo gli italiani prendono un caffè, non un cappuccino.", en: "After lunch Italians have an espresso, not a cappuccino." },
          { es: "Dicono che il latte dopo i pasti sia pesante.", en: "They say milk after meals is heavy." },
          { es: "La panna copre il sapore del guanciale.", en: "Cream masks the flavor of the guanciale." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After lunch Italians have an espresso, not a cappuccino.", answer: "Dopo pranzo gli italiani prendono un caffè, non un cappuccino.", altAnswers: ["Dopo pranzo gli italiani bevono un caffè, non un cappuccino.", "Dopo il pranzo gli italiani prendono un caffè, non un cappuccino."], explanation: "An espresso is simply \"un caffè\"; you \"prendi\" a coffee." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cream masks the flavor.", answer: "La panna copre il sapore.", altAnswers: ["La panna nasconde il sapore."], explanation: "\"Coprire il sapore\" = to mask the flavor." },
          { type: "listen-choose", audio: "Un goccio d'acqua di cottura rende la carbonara cremosa.", question: "What makes the carbonara creamy, according to the speaker?", options: ["a little pasta water", "a drop of cream", "extra butter", "milk"], correctIndex: 0, explanation: "\"L'acqua di cottura\" = the pasta cooking water." },
        ],
      },
      {
        heading: "Conceding and holding your ground",
        body: [
          "Concede first, then disagree: \"ammetto che\" + subjunctive or indicative, \"sarà anche vero, ma\" (that may well be true, but), \"anche se\" + indicative, \"per quanto\" + subjunctive (however much). Closing the argument: \"comunque la si pensi\" (whatever you think about it), \"su questo non transigo\" (I won't compromise on this).",
          "The future \"sarà\" here doesn't refer to the future: it expresses a concession or a guess, like \"sarà anche buona, ma\" (it may well be good, but). The same use appears in \"avrà anche ragione, ma\" (he may be right, but). \"Per quanto\" also works with adjectives: \"per quanto buona, non è carbonara\" (however good it is, it isn't carbonara).",
        ],
        examples: [
          { es: "Sarà anche vero, ma la carbonara con la panna non è carbonara.", en: "That may well be true, but carbonara with cream isn't carbonara." },
          { es: "Per quanto mi sforzi, l'ananas sulla pizza non mi piace.", en: "However hard I try, I don't like pineapple on pizza." },
          { es: "Ammetto che sia buona, ma non chiamarla carbonara.", en: "I admit it's good, but don't call it carbonara." },
          { es: "Sul cappuccino dopo cena non transigo.", en: "I won't compromise on cappuccino after dinner." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "However hard I try, I don't like it.", answer: "Per quanto mi sforzi, non mi piace.", altAnswers: ["Per quanto mi sforzi, non mi piace proprio."], explanation: "\"Per quanto\" + subjunctive \"mi sforzi\"." },
          { type: "speak", text: "Sarà anche vero, ma la carbonara con la panna non è carbonara.", prompt: "Concede, then disagree: That may well be true, but carbonara with cream isn't carbonara.", tip: "sa-RÀ: the stress falls on the last syllable.", explanation: "Concessive \"sarà anche vero, ma\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pineapple on pizza? For me it's sacrilege.", answer: "L'ananas sulla pizza? Per me è un sacrilegio.", altAnswers: ["L'ananas sulla pizza? Secondo me è un sacrilegio."], explanation: "\"L'ananas\" is masculine; \"un sacrilegio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It annoys me that they call it spaghetti bolognese.", answer: "Mi dà fastidio che lo chiamino spaghetti bolognese.", altAnswers: ["Mi dà fastidio che lo chiamino \"spaghetti bolognese\"."], explanation: "\"Mi dà fastidio che\" + subjunctive \"chiamino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone eats as they like.", answer: "Ognuno mangia come vuole.", altAnswers: ["Ognuno mangia come gli pare.", "Ciascuno mangia come vuole."], explanation: "\"Ognuno\" takes a singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They say milk after meals is heavy.", answer: "Dicono che il latte dopo i pasti sia pesante.", altAnswers: ["Si dice che il latte dopo i pasti sia pesante.", "Dicono che il latte dopo i pasti è pesante."], explanation: "Reported belief: subjunctive is more formal, indicative is common in speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I admit it's good, but don't call it carbonara. (to a friend)", answer: "Ammetto che sia buona, ma non chiamarla carbonara.", altAnswers: ["Ammetto che è buona, ma non chiamarla carbonara."], explanation: "Negative \"tu\" imperative: \"non\" + infinitive, pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I won't compromise on this.", answer: "Su questo non transigo.", explanation: "\"Transigere\" = to compromise." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The creaminess must come from [the egg] and the pecorino.", sentence: "La cremosità deve venire ___ e dal pecorino.", answer: "dall'uovo", explanation: "\"Da\" + \"l'uovo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[That may well be true], but I don't agree.", sentence: "___, ma non sono d'accordo.", answer: "Sarà anche vero", altAnswers: ["Sarà vero"], explanation: "Future of concession: \"sarà anche vero\"." },
      { type: "word-order", prompt: "Put the words in order to say: I can't stand people putting cream in carbonara.", words: ["Non sopporto", "che si metta", "la panna", "nella", "carbonara."], translation: "I can't stand people putting cream in carbonara.", explanation: "Subjunctive after \"non sopporto che\"." },
      { type: "multiple-choice", question: "Which is the correct form? \"Mi dà fastidio che tu ___ il cappuccino a cena.\"", options: ["prenda", "prendi", "prenderai", "prendere"], correctIndex: 0, explanation: "\"Mi dà fastidio che\" + subjunctive." },
      { type: "dictation", audio: "Per quanto mi sforzi, l'ananas sulla pizza non mi piace.", explanation: "\"Per quanto\" + subjunctive." },
      { type: "speak", text: "Non sopporto che si metta la panna nella carbonara: copre il sapore del guanciale.", prompt: "Give your opinion: I can't stand cream in carbonara: it masks the flavor of the guanciale.", tip: "guan-CIA-le: the i is silent, it just softens the c.", explanation: "Subjunctive after a verb of feeling." },
    ],
  },
  {
    slug: "b2-drill-recipe-verbs",
    level: "IT-B2",
    number: 5,
    title: "Drill: Recipe Verbs",
    summary: "High-repetition production of recipe instructions with the infinitive, the imperative, the si passivante and andare + participle.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "One step, three forms",
        body: [
          "Pattern: infinitive (\"tagliare\"), \"tu\" imperative (\"taglia\"), si passivante (\"si taglia\" / \"si tagliano\"). Pronouns attach to the infinitive and to the \"tu\" imperative: \"tagliarle\", \"tagliale\". Stay with one form in a recipe.",
        ],
        examples: [
          { es: "Pelare le patate e tagliarle a dadini.", en: "Peel the potatoes and dice them." },
          { es: "Pela le patate e tagliale a dadini.", en: "Peel the potatoes and dice them." },
          { es: "Si pelano le patate e si tagliano a dadini.", en: "You peel the potatoes and dice them." },
          { es: "Lavare il basilico e asciugarlo bene.", en: "Wash the basil and dry it well." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style with the infinitive.", source: "Peel the potatoes and dice them.", answer: "Pelare le patate e tagliarle a dadini.", explanation: "\"Tagliarle\": pronoun attached to the infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with the si passivante.", source: "You peel the potatoes and dice them.", answer: "Si pelano le patate e si tagliano a dadini.", explanation: "Plural verb: \"si pelano le patate\"." },
        ],
      },
      {
        heading: "Must be: andare + participle",
        body: [
          "Pattern: \"va\" / \"vanno\" + participle agreeing with the noun. \"La pasta va scolata\", \"le uova vanno sbattute\" (the eggs must be beaten), \"il sugo va lasciato cuocere\".",
        ],
        examples: [
          { es: "Le uova vanno sbattute con il pecorino.", en: "The eggs must be beaten with the pecorino." },
          { es: "Il sugo va lasciato cuocere a fuoco lento.", en: "The sauce must be left to cook over low heat." },
          { es: "Le melanzane vanno salate e lasciate riposare.", en: "The eggplants must be salted and left to rest." },
          { es: "La carne va rosolata da tutti i lati.", en: "The meat must be browned on all sides." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The eggs must be beaten with the pecorino.", answer: "Le uova vanno sbattute con il pecorino.", altAnswers: ["Le uova vanno sbattute col pecorino."], explanation: "\"Le uova\" is feminine plural: \"sbattute\"." },
          { type: "listen-choose", audio: "Le melanzane vanno salate e lasciate riposare.", question: "What must be done with the eggplants?", options: ["salt them and leave them to rest", "fry them right away", "peel them and slice them", "wash them and dry them"], correctIndex: 0, explanation: "\"Salate e lasciate riposare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style with the infinitive.", source: "Wash the basil and dry it well.", answer: "Lavare il basilico e asciugarlo bene.", explanation: "\"Asciugarlo\": pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style with the infinitive.", source: "Bring the water to a boil and add salt.", answer: "Portare a ebollizione l'acqua e salare.", altAnswers: ["Portare l'acqua a ebollizione e salare.", "Portare l'acqua a bollore e salare.", "Portare a bollore l'acqua e salare.", "Portare l'acqua a ebollizione e aggiungere il sale."], explanation: "\"Portare a ebollizione\" = bring to a boil; \"salare\" = to add salt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using tu.", source: "Grate the cheese and add it to the eggs.", answer: "Grattugia il formaggio e aggiungilo alle uova.", explanation: "\"Aggiungilo\": \"tu\" imperative + pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with the si passivante.", source: "You slice the zucchini thinly.", answer: "Si affettano sottilmente le zucchine.", altAnswers: ["Si affettano le zucchine sottili.", "Si tagliano le zucchine a fette sottili.", "Si affettano le zucchine sottilmente."], explanation: "Plural verb with plural noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The meat must be browned on all sides.", answer: "La carne va rosolata da tutti i lati.", altAnswers: ["La carne va rosolata su tutti i lati."], explanation: "\"Va rosolata\" agrees with \"la carne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The sauce must be left to cook over low heat.", answer: "Il sugo va lasciato cuocere a fuoco lento.", altAnswers: ["Il sugo va lasciato cuocere a fuoco basso."], explanation: "\"Lasciare\" + infinitive: leave to cook." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style with the infinitive.", source: "Drain the pasta and keep a little cooking water.", answer: "Scolare la pasta e tenere da parte un po' d'acqua di cottura.", altAnswers: ["Scolare la pasta e conservare un po' d'acqua di cottura.", "Scolare la pasta e tenere da parte un po' di acqua di cottura.", "Scolare la pasta tenendo da parte un po' d'acqua di cottura."], explanation: "\"Tenere da parte\" = to set aside." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using tu.", source: "Don't let the garlic burn.", answer: "Non far bruciare l'aglio.", altAnswers: ["Non fare bruciare l'aglio.", "Non lasciare bruciare l'aglio."], explanation: "Negative \"tu\" imperative: \"non\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in recipe style.", en: "[Knead] the dough for ten minutes.", sentence: "___ l'impasto per dieci minuti.", answer: "Impastare", altAnswers: ["Lavorare"], explanation: "\"Impastare\" = to knead." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, with andare + participle.", en: "The tomatoes [must be peeled].", sentence: "I pomodori ___.", answer: "vanno pelati", explanation: "Plural masculine: \"vanno pelati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, using tu.", en: "Take the onion and [chop it finely].", sentence: "Prendi la cipolla e ___.", answer: "tritala finemente", altAnswers: ["tritala fine"], explanation: "\"Tu\" imperative + \"la\"." },
      { type: "word-order", prompt: "Put the words in order to say: Cover and cook over low heat for an hour.", words: ["Coprire", "e cuocere", "a fuoco lento", "per un'ora."], translation: "Cover and cook over low heat for an hour.", explanation: "Two infinitives in sequence." },
      { type: "dictation", audio: "Le uova vanno sbattute con il pecorino e un pizzico di pepe.", explanation: "\"Vanno sbattute\": feminine plural." },
      { type: "speak", text: "Pela le patate, tagliale a dadini e mettile in forno per quaranta minuti.", prompt: "Tell a friend: Peel the potatoes, dice them and put them in the oven for forty minutes.", tip: "TA-glia-le: stress stays on the verb, the pronoun adds a syllable.", explanation: "\"Tu\" imperatives with attached pronouns." },
    ],
  },
  {
    slug: "b2-drill-food-descriptions",
    level: "IT-B2",
    number: 6,
    title: "Drill: Describing Food",
    summary: "High-repetition production of words for taste and texture: croccante, cremoso, saporito, insipido, scotto, and degree words.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Taste and texture",
        body: [
          "Texture: \"croccante\" (crunchy, crisp), \"cremoso\" (creamy), \"morbido\" (soft), \"gommoso\" (rubbery), \"scotto\" (overcooked, of pasta and rice), \"al dente\". Taste: \"saporito\" (tasty, well-seasoned), \"insipido\" (bland), \"salato\" (salty), \"dolce\", \"amaro\" (bitter), \"piccante\" (spicy hot), \"pesante\" / \"leggero\" (heavy / light).",
        ],
        examples: [
          { es: "La crosta della pizza è croccante.", en: "The pizza crust is crisp." },
          { es: "Questa pasta è scotta.", en: "This pasta is overcooked." },
          { es: "Il sugo è un po' insipido: manca il sale.", en: "The sauce is a bit bland: it needs salt." },
          { es: "Il risotto è venuto cremoso al punto giusto.", en: "The risotto came out just creamy enough." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This pasta is overcooked.", answer: "Questa pasta è scotta.", explanation: "\"Scotto\" = overcooked, for pasta and rice." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sauce is a bit [bland].", sentence: "Il sugo è un po' ___.", answer: "insipido", explanation: "\"Insipido\" = lacking flavor." },
        ],
      },
      {
        heading: "Degrees and comparisons",
        body: [
          "Grade the adjective: \"un po'\", \"troppo\", \"leggermente\", \"al punto giusto\" (just right), \"-issimo\". Compare: \"più saporito di\", \"meno pesante di\", \"buono quanto\". Remember \"migliore\" / \"peggiore\" and the absolute \"ottimo\" / \"pessimo\".",
        ],
        examples: [
          { es: "Questa salsa è leggermente piccante.", en: "This sauce is slightly spicy." },
          { es: "Il pane di ieri era più croccante di questo.", en: "Yesterday's bread was crisper than this." },
          { es: "La cucina del Nord è più pesante di quella del Sud?", en: "Is northern cooking heavier than southern?" },
          { es: "Il tiramisù di mia nonna è ottimo.", en: "My grandmother's tiramisù is excellent." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yesterday's bread was crisper than this.", answer: "Il pane di ieri era più croccante di questo.", explanation: "\"Più ... di\" + demonstrative." },
          { type: "listen-choose", audio: "Questa salsa è leggermente piccante.", question: "How is the sauce?", options: ["slightly spicy", "very salty", "too sweet", "not spicy at all"], correctIndex: 0, explanation: "\"Leggermente piccante\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pizza crust is crisp.", answer: "La crosta della pizza è croccante.", altAnswers: ["Il cornicione della pizza è croccante.", "Il bordo della pizza è croccante."], explanation: "\"Croccante\" = crisp, crunchy." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The squid is rubbery.", answer: "I calamari sono gommosi.", altAnswers: ["Il calamaro è gommoso."], explanation: "Italian usually uses the plural \"i calamari\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This soup is too salty.", answer: "Questa zuppa è troppo salata.", altAnswers: ["Questa minestra è troppo salata."], explanation: "\"Salato\" = salty." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The meat is very tender.", answer: "La carne è tenerissima.", altAnswers: ["La carne è molto tenera.", "La carne è morbidissima."], explanation: "\"-issimo\" for intensity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The risotto came out just creamy enough.", answer: "Il risotto è venuto cremoso al punto giusto.", altAnswers: ["Il risotto è riuscito cremoso al punto giusto."], explanation: "\"Venire\" = to turn out, with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fried food is heavier than grilled food.", answer: "Il fritto è più pesante della grigliata.", altAnswers: ["I fritti sono più pesanti della carne alla griglia.", "Il cibo fritto è più pesante del cibo alla griglia.", "Il fritto è più pesante del cibo alla griglia."], explanation: "\"Più ... di\" with articulated preposition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother's tiramisù is excellent.", answer: "Il tiramisù di mia nonna è ottimo.", altAnswers: ["Il tiramisù della nonna è ottimo."], explanation: "\"Ottimo\" = excellent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a bit bland: it needs salt.", answer: "È un po' insipido: manca il sale.", altAnswers: ["È un po' insipida: manca il sale.", "È un po' insipido: ci vuole il sale."], explanation: "\"Manca il sale\" = it needs salt." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This wine is [slightly bitter].", sentence: "Questo vino è ___.", answer: "leggermente amaro", altAnswers: ["un po' amaro"], explanation: "\"Amaro\" = bitter." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pasta is [overcooked]!", sentence: "La pasta è ___!", answer: "scotta", explanation: "Feminine \"scotta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These cookies are [the worst] I've ever eaten.", sentence: "Questi biscotti sono ___ che abbia mai mangiato.", answer: "i peggiori", explanation: "Relative superlative + subjunctive \"abbia\"." },
      { type: "word-order", prompt: "Put the words in order to say: The sauce is tastier than yesterday.", words: ["Il sugo", "è", "più saporito", "di ieri."], translation: "The sauce is tastier than yesterday.", explanation: "\"Saporito\" = tasty." },
      { type: "dictation", audio: "Il pane era croccante fuori e morbido dentro.", explanation: "\"Fuori\" / \"dentro\" for outside and inside." },
      { type: "speak", text: "Il risotto è cremoso al punto giusto, ma è un po' insipido.", prompt: "Give feedback: The risotto is just creamy enough, but it's a bit bland.", tip: "in-SI-pi-do: stress on the second syllable.", explanation: "\"Al punto giusto\" and \"un po'\" grade the adjectives." },
    ],
  },
  {
    slug: "b2-reading-lab-recipe",
    level: "IT-B2",
    number: 7,
    title: "Reading Lab: A Traditional Recipe",
    summary: "Read a full recipe for risotto alla milanese and follow the ingredients, the method and the cook's advice.",
    duration: "17 min",
    sections: [
      {
        heading: "The ingredients",
        body: [
          "Below is a recipe for \"risotto alla milanese\" written as in an Italian cookbook: a list of ingredients \"per 4 persone\", then the method in the infinitive. Quantities use \"g\" (grammi), \"l\" (litri) and words like \"una bustina\" (a sachet) or \"mezzo bicchiere\".",
          "\"Carnaroli\" and \"Arborio\" are rice varieties for risotto. \"Il brodo\" is stock, here \"di carne\" (meat stock), and must be kept hot: \"tenuto in caldo\". Traditional recipes add \"il midollo di bue\" (beef marrow), often left out today.",
        ],
        examples: [
          { es: "Ingredienti per 4 persone: 320 g di riso Carnaroli, 1 l di brodo di carne, mezza cipolla.", en: "Ingredients for 4 people: 320 g of Carnaroli rice, 1 l of meat stock, half an onion." },
          { es: "80 g di burro, 60 g di Parmigiano Reggiano grattugiato, una bustina di zafferano.", en: "80 g of butter, 60 g of grated Parmigiano Reggiano, a sachet of saffron." },
          { es: "Mezzo bicchiere di vino bianco secco, sale q.b.", en: "Half a glass of dry white wine, salt to taste." },
          { es: "Il brodo va tenuto in caldo durante tutta la cottura.", en: "The stock must be kept hot throughout the cooking." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "How much rice does the recipe use, and for how many people?", options: ["320 g for 4 people", "320 g for 2 people", "1 kg for 4 people", "80 g for 4 people"], correctIndex: 0, explanation: "\"320 g di riso Carnaroli\", \"per 4 persone\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The stock must be kept hot.", answer: "Il brodo va tenuto in caldo.", altAnswers: ["Il brodo va tenuto caldo.", "Il brodo deve essere tenuto in caldo."], explanation: "\"Tenere in caldo\" = to keep hot." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "half a glass of dry white wine", answer: "mezzo bicchiere di vino bianco secco", explanation: "\"Mezzo\" before the noun doesn't agree: \"mezzo bicchiere\", but \"mezza cipolla\" agrees." },
        ],
      },
      {
        heading: "The method",
        body: [
          "The method follows the classic steps. Read the time markers: \"per due o tre minuti\", \"a mano a mano che\" (as, gradually as), \"a metà cottura\" (halfway through cooking), \"circa 18 minuti\".",
        ],
        examples: [
          { es: "Tritare finemente la cipolla e farla appassire in una casseruola con metà del burro.", en: "Finely chop the onion and soften it in a saucepan with half the butter." },
          { es: "Aggiungere il riso e tostarlo per due o tre minuti, mescolando.", en: "Add the rice and toast it for two or three minutes, stirring." },
          { es: "Sfumare con il vino e lasciarlo evaporare.", en: "Deglaze with the wine and let it evaporate." },
          { es: "Aggiungere il brodo un mestolo alla volta, a mano a mano che viene assorbito.", en: "Add the stock one ladle at a time, as it is absorbed." },
          { es: "A metà cottura unire lo zafferano sciolto in un po' di brodo.", en: "Halfway through cooking, add the saffron dissolved in a little stock." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "When does the saffron go in?", options: ["halfway through cooking", "at the very start", "after the risotto rests", "with the onion"], correctIndex: 0, explanation: "\"A metà cottura\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Add the stock one ladle at a time.", answer: "Aggiungere il brodo un mestolo alla volta.", altAnswers: ["Aggiungere il brodo un mestolo per volta.", "Unire il brodo un mestolo alla volta."], explanation: "\"Un mestolo alla volta\" = one ladle at a time." },
          { type: "listen-choose", audio: "Aggiungere il riso e tostarlo per due o tre minuti, mescolando.", question: "What do you do to the rice first?", options: ["toast it for two or three minutes", "wash it twice", "boil it for three minutes", "soak it in stock"], correctIndex: 0, explanation: "\"Tostare il riso\" = to toast the rice in the fat." },
        ],
      },
      {
        heading: "Finishing and the cook's advice",
        body: [
          "The last step is \"la mantecatura\". The note at the end, \"il consiglio\", gives the cook's tips with \"è importante che\" + subjunctive and \"non\" + infinitive for warnings. \"All'onda\" (like a wave) describes a risotto loose enough to ripple when you shake the plate.",
        ],
        examples: [
          { es: "Dopo circa 18 minuti togliere dal fuoco e mantecare con il burro rimasto e il Parmigiano.", en: "After about 18 minutes, take off the heat and stir in the remaining butter and the Parmigiano." },
          { es: "Lasciare riposare due minuti con il coperchio e servire.", en: "Leave to rest for two minutes with the lid on and serve." },
          { es: "Il consiglio: è importante che il risotto resti all'onda.", en: "Tip: it's important that the risotto stays loose and wavy." },
          { es: "Non lavare mai il riso: perderebbe l'amido.", en: "Never wash the rice: it would lose its starch." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Why shouldn't you wash the rice?", options: ["It would lose its starch.", "It would become too salty.", "It would cook too fast.", "It would lose its color."], correctIndex: 0, explanation: "\"Perderebbe l'amido\": conditional for the consequence." },
          { type: "speak", text: "È importante che il risotto resti all'onda.", prompt: "Give the tip: It's important that the risotto stays loose and wavy.", tip: "all'ON-da: link the words, no break after all'.", explanation: "\"È importante che\" + subjunctive \"resti\"." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "How long does the rice cook in the stock?", options: ["about 18 minutes", "two or three minutes", "about an hour", "about 8 minutes"], correctIndex: 0, explanation: "\"Dopo circa 18 minuti\"." },
      { type: "multiple-choice", question: "What happens to the butter?", options: ["Half softens the onion, the rest goes in at the end.", "It all goes in at the start.", "It's all added at the end.", "It's replaced by oil."], correctIndex: 0, explanation: "\"Metà del burro\" first, \"il burro rimasto\" for the mantecatura." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Soften the onion with half the butter.", answer: "Far appassire la cipolla con metà del burro.", altAnswers: ["Fare appassire la cipolla con metà del burro.", "Soffriggere la cipolla con metà del burro."], explanation: "\"Far appassire\" = to soften, wilt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Deglaze with the wine and let it evaporate.", answer: "Sfumare con il vino e lasciarlo evaporare.", altAnswers: ["Sfumare con il vino e farlo evaporare.", "Sfumare col vino e lasciarlo evaporare."], explanation: "\"Lasciarlo\": pronoun attached to the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Leave to rest for two minutes and serve.", answer: "Lasciare riposare due minuti e servire.", altAnswers: ["Lasciare riposare per due minuti e servire.", "Far riposare due minuti e servire."], explanation: "\"Lasciare riposare\" = leave to rest." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Never wash the rice: it would lose its starch.", answer: "Non lavare mai il riso: perderebbe l'amido.", explanation: "Conditional for the consequence." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "a sachet of saffron", answer: "una bustina di zafferano", explanation: "\"La bustina\" = sachet." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Add the saffron [halfway through cooking].", sentence: "Unire lo zafferano ___.", answer: "a metà cottura", explanation: "\"A metà cottura\" = halfway through cooking." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's important that the risotto [stays] loose.", sentence: "È importante che il risotto ___ all'onda.", answer: "resti", altAnswers: ["rimanga"], explanation: "\"È importante che\" + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: Add the stock as it is absorbed.", words: ["Aggiungere", "il brodo", "a mano a mano", "che viene", "assorbito."], translation: "Add the stock as it is absorbed.", explanation: "\"A mano a mano che\" = gradually as." },
      { type: "dictation", audio: "Togliere dal fuoco e mantecare con il burro rimasto e il Parmigiano.", explanation: "\"Il burro rimasto\" = the remaining butter." },
      { type: "speak", text: "Prima si tosta il riso, poi si sfuma con il vino e si aggiunge il brodo un mestolo alla volta.", prompt: "Summarize the method: First you toast the rice, then deglaze with the wine and add the stock one ladle at a time.", tip: "ME-sto-lo: stress on the first syllable.", explanation: "Si passivante for a spoken summary." },
    ],
  },
  {
    slug: "b2-listening-lab-cooking-show",
    level: "IT-B2",
    number: 8,
    title: "Listening Lab: A Cooking Show",
    summary: "Follow a TV cook making pasta alla Norma: natural speech, imperatives to the audience and running commentary.",
    duration: "18 min",
    sections: [
      {
        heading: "The presentation",
        body: [
          "TV cooks speak fast and talk to the viewers with \"voi\" (\"guardate\", \"mi raccomando\") or with an inclusive \"noi\" (\"adesso prendiamo\"). Listen for fillers: \"allora\", \"ecco\", \"dunque\", \"vedete\".",
          "Today's dish, \"la pasta alla Norma\", comes from Catania in Sicily and is named after the opera \"Norma\" by Vincenzo Bellini, who was born there. It's pasta with fried eggplant, tomato sauce, basil and \"ricotta salata\", a firm salted ricotta for grating.",
        ],
        examples: [
          { es: "Allora, oggi prepariamo un classico della cucina siciliana: la pasta alla Norma.", en: "Right, today we're making a classic of Sicilian cooking: pasta alla Norma." },
          { es: "Si chiama così in onore dell'opera di Bellini, che era di Catania.", en: "It's called that in honor of Bellini's opera; he was from Catania." },
          { es: "Ci servono melanzane, pomodori, basilico e ricotta salata.", en: "We need eggplants, tomatoes, basil and ricotta salata." },
          { es: "Mi raccomando, la ricotta deve essere salata, non fresca.", en: "Make sure the ricotta is the salted kind, not fresh." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Si chiama così in onore dell'opera di Bellini, che era di Catania.", question: "Why is the dish called alla Norma?", options: ["after an opera by a composer from Catania", "after the cook's grandmother", "after a village in Sicily", "because it's the normal way"], correctIndex: 0, explanation: "\"In onore dell'opera di Bellini\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We need eggplants, tomatoes and basil.", answer: "Ci servono melanzane, pomodori e basilico.", altAnswers: ["Ci servono delle melanzane, dei pomodori e del basilico.", "Abbiamo bisogno di melanzane, pomodori e basilico."], explanation: "\"Ci servono\": plural verb for plural things needed." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "Make sure the ricotta is the salted kind, not fresh.", answer: "Mi raccomando, la ricotta deve essere salata, non fresca.", altAnswers: ["Mi raccomando, la ricotta dev'essere salata, non fresca.", "Mi raccomando: la ricotta deve essere salata, non fresca."], explanation: "\"Mi raccomando\" stresses an instruction." },
        ],
      },
      {
        heading: "The eggplants",
        body: [
          "Listen for the steps with \"prima\", \"poi\", \"intanto\" (meanwhile) and \"una volta che\" (once). The cook uses \"le\" and \"ne\" a lot: \"le friggiamo\", \"ne mettiamo un po'\".",
        ],
        examples: [
          { es: "Tagliamo le melanzane a cubetti, non troppo piccoli.", en: "We cut the eggplants into cubes, not too small." },
          { es: "Le friggiamo in abbondante olio finché non diventano dorate.", en: "We fry them in plenty of oil until they turn golden." },
          { es: "Una volta fritte, le mettiamo sulla carta assorbente.", en: "Once fried, we put them on paper towels." },
          { es: "Intanto, in un'altra padella, prepariamo il sugo.", en: "Meanwhile, in another pan, we make the sauce." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Le friggiamo in abbondante olio finché non diventano dorate.", question: "How long are the eggplants fried?", options: ["until they turn golden", "for exactly five minutes", "until they're soft and pale", "until the oil smokes"], correctIndex: 0, explanation: "\"Finché non diventano dorate\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "Once fried, we put them on paper towels.", answer: "Una volta fritte, le mettiamo sulla carta assorbente.", altAnswers: ["Una volta fritte, le mettiamo su carta assorbente."], explanation: "\"Fritte\" agrees with \"le melanzane\"." },
        ],
      },
      {
        heading: "Putting it together",
        body: [
          "The finish: \"saltare\" (to toss) the pasta in the sauce, add the eggplants, \"una spolverata\" (a dusting) of ricotta salata and \"qualche foglia di basilico\". To present the finished dish, Italian cooks say \"ecco fatto\" (done) or \"ed ecco qua\" (and here it is).",
        ],
        examples: [
          { es: "Scoliamo la pasta e la saltiamo in padella con il sugo.", en: "We drain the pasta and toss it in the pan with the sauce." },
          { es: "Aggiungiamo le melanzane e una bella spolverata di ricotta salata.", en: "We add the eggplants and a good dusting of ricotta salata." },
          { es: "Qualche foglia di basilico, ed ecco qua la nostra Norma.", en: "A few basil leaves, and here's our Norma." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Aggiungiamo le melanzane e una bella spolverata di ricotta salata.", question: "What goes on top?", options: ["grated ricotta salata", "fresh ricotta in spoonfuls", "grated Parmigiano", "breadcrumbs"], correctIndex: 0, explanation: "\"Una spolverata di ricotta salata\"." },
          { type: "speak", text: "Scoliamo la pasta e la saltiamo in padella con il sugo.", prompt: "Say it like a TV cook: We drain the pasta and toss it in the pan with the sauce.", tip: "SAL-tia-mo: the stress is on sal.", explanation: "Inclusive \"noi\" and the pronoun \"la\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Mi raccomando, la ricotta deve essere salata, non fresca.", question: "What does the cook insist on?", options: ["using salted ricotta, not fresh", "using fresh ricotta", "adding salt to the ricotta", "leaving out the ricotta"], correctIndex: 0, explanation: "\"Salata, non fresca\"." },
      { type: "listen-choose", audio: "Tagliamo le melanzane a cubetti, non troppo piccoli, altrimenti assorbono troppo olio.", question: "Why shouldn't the cubes be too small?", options: ["They would absorb too much oil.", "They would burn.", "They would fall apart in the sauce.", "They would take too long."], correctIndex: 0, explanation: "\"Altrimenti assorbono troppo olio\"." },
      { type: "listen-choose", audio: "Intanto, in un'altra padella, facciamo soffriggere uno spicchio d'aglio e aggiungiamo i pomodori.", question: "What happens in the second pan?", options: ["Garlic is fried gently, then tomatoes go in.", "The pasta is cooked.", "The eggplants are fried.", "Onion is browned with the basil."], correctIndex: 0, explanation: "\"Soffriggere uno spicchio d'aglio\", then \"i pomodori\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "We cut the eggplants into cubes.", answer: "Tagliamo le melanzane a cubetti.", altAnswers: ["Tagliamo le melanzane a dadini.", "Tagliamo le melanzane a cubi."], explanation: "Inclusive \"noi\" form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "Meanwhile, we make the sauce.", answer: "Intanto prepariamo il sugo.", altAnswers: ["Intanto facciamo il sugo.", "Nel frattempo prepariamo il sugo.", "Intanto, prepariamo il sugo."], explanation: "\"Intanto\" = meanwhile." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "We fry them until they turn golden.", answer: "Le friggiamo finché non diventano dorate.", altAnswers: ["Le friggiamo finché diventano dorate.", "Le friggiamo fino a quando non diventano dorate."], explanation: "\"Le\" = the eggplants." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a classic of Sicilian cooking.", answer: "È un classico della cucina siciliana.", explanation: "\"Un classico\" used as a noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "A few basil leaves, and here it is.", answer: "Qualche foglia di basilico, ed ecco qua.", altAnswers: ["Qualche foglia di basilico ed ecco fatto.", "Qualche foglia di basilico, ed ecco fatto.", "Qualche foglia di basilico ed ecco qua."], explanation: "\"Qualche\" + singular noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "Not too small, otherwise they absorb too much oil.", answer: "Non troppo piccoli, altrimenti assorbono troppo olio.", explanation: "\"Altrimenti\" = otherwise." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "We add the eggplants and a dusting of ricotta salata.", answer: "Aggiungiamo le melanzane e una spolverata di ricotta salata.", altAnswers: ["Aggiungiamo le melanzane e una bella spolverata di ricotta salata."], explanation: "\"Una spolverata\" = a dusting." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the cook.", source: "Meanwhile we fry a clove of garlic gently.", answer: "Intanto facciamo soffriggere uno spicchio d'aglio.", altAnswers: ["Intanto soffriggiamo uno spicchio d'aglio.", "Nel frattempo facciamo soffriggere uno spicchio d'aglio.", "Intanto facciamo soffriggere uno spicchio di aglio."], explanation: "\"Fare soffriggere\" is common in speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's called that in honor of an opera.", answer: "Si chiama così in onore di un'opera.", altAnswers: ["Si chiama così in onore di un'opera lirica."], explanation: "\"In onore di\" = in honor of." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We toss the pasta [in the pan] with the sauce.", sentence: "Saltiamo la pasta ___ con il sugo.", answer: "in padella", altAnswers: ["nella padella"], explanation: "\"Saltare in padella\" = to toss in the pan." },
      { type: "word-order", prompt: "Put the words in order to say: We drain the pasta and toss it in the pan.", words: ["Scoliamo", "la pasta", "e la", "saltiamo", "in padella."], translation: "We drain the pasta and toss it in the pan.", explanation: "Pronoun \"la\" before the verb." },
      { type: "dictation", audio: "Una volta fritte, le mettiamo sulla carta assorbente.", explanation: "\"Fritte\" agrees with \"melanzane\"." },
      { type: "speak", text: "Allora, oggi prepariamo un classico della cucina siciliana: la pasta alla Norma.", prompt: "Open your own cooking show: Right, today we're making a classic of Sicilian cooking: pasta alla Norma.", tip: "si-CI-lia-na: the i after c is silent.", explanation: "TV-style opening with \"allora\"." },
    ],
  },
  {
    slug: "b2-error-hunt-food",
    level: "IT-B2",
    number: 9,
    title: "Error Hunt: Food",
    summary: "Fix the food words English speakers get wrong in Italy: pepperoni, latte, spaghetti bolognese, panini and espresso.",
    duration: "17 min",
    sections: [
      {
        heading: "Pizza and sandwiches",
        body: [
          "\"*Una pizza pepperoni\" doesn't exist: \"i peperoni\" (one p in the middle) are bell peppers. The spicy salami topping is \"il salame piccante\", and the pizza is \"la pizza al salame piccante\" or, in many pizzerias, \"la diavola\".",
          "\"Panini\" is the plural. One sandwich is \"un panino\": \"*un panini\" is like saying \"a sandwiches\". The same goes for \"*un biscotti\" (\"un biscotto\") and \"*una zucchini\" (\"una zucchina\" or \"uno zucchino\").",
        ],
        examples: [
          { es: "Vorrei una pizza al salame piccante, per favore.", en: "I'd like a pepperoni pizza, please." },
          { es: "I peperoni ripieni sono un piatto tipico dell'estate.", en: "Stuffed peppers are a typical summer dish." },
          { es: "Prendo un panino con prosciutto e mozzarella.", en: "I'll have a sandwich with ham and mozzarella." },
          { es: "Abbiamo comprato quattro panini per il viaggio.", en: "We bought four sandwiches for the journey." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in a pizzeria.", source: "I'd like a pepperoni pizza, please.", answer: "Vorrei una pizza al salame piccante, per favore.", altAnswers: ["Vorrei una diavola, per favore.", "Vorrei una pizza alla diavola, per favore.", "Per me una pizza al salame piccante, per favore."], explanation: "Not \"*pepperoni\": \"i peperoni\" are peppers." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll have [a sandwich] with ham.", sentence: "Prendo ___ con il prosciutto.", answer: "un panino", explanation: "Singular \"panino\"; \"panini\" is plural." },
          { type: "multiple-choice", question: "You order \"una pizza ai peperoni\". What arrives?", options: ["a pizza with bell peppers", "a pizza with spicy salami", "a pizza with chili oil", "a pizza with pepperoni sausage"], correctIndex: 0, explanation: "\"I peperoni\" = bell peppers." },
        ],
      },
      {
        heading: "At the bar",
        body: [
          "Ask for \"*un latte\" in an Italian bar and you'll get a glass of milk. Coffee with milk is \"un caffellatte\" (served in a cup or glass) or \"un latte macchiato\" (hot milk \"stained\" with coffee, in a tall glass). \"Un caffè macchiato\" is an espresso with a drop of milk.",
          "\"Espresso\" is correct, never \"*expresso\", but at the bar Italians simply say \"un caffè\". \"Un caffè lungo\" has more water, \"un caffè ristretto\" less.",
        ],
        examples: [
          { es: "Un latte macchiato e un cornetto, per favore.", en: "A latte and a croissant, please." },
          { es: "Per me un caffellatte tiepido.", en: "A lukewarm milky coffee for me." },
          { es: "Un caffè macchiato, grazie.", en: "An espresso with a dash of milk, thanks." },
          { es: "Al bar basta dire \"un caffè\".", en: "At the bar it's enough to say un caffè." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, at the bar.", source: "A latte and a croissant, please.", answer: "Un latte macchiato e un cornetto, per favore.", altAnswers: ["Un caffellatte e un cornetto, per favore."], explanation: "Not \"*un latte\": that's a glass of milk." },
          { type: "listen-choose", audio: "Un caffè ristretto e un bicchiere d'acqua, grazie.", question: "What kind of coffee does the customer want?", options: ["a short, strong espresso", "a long espresso", "a milky coffee", "a decaf"], correctIndex: 0, explanation: "\"Ristretto\" = with less water." },
        ],
      },
      {
        heading: "Pasta names",
        body: [
          "\"*Spaghetti bolognese\" is unknown in Bologna. There the dish is \"le tagliatelle al ragù\", and the sauce is \"il ragù\", not \"la bolognese\". Mind the article: \"gli spaghetti\" (s + consonant), never \"*i spaghetti\".",
        ],
        examples: [
          { es: "A Bologna si mangiano le tagliatelle al ragù.", en: "In Bologna people eat tagliatelle with ragù." },
          { es: "Gli spaghetti con le vongole sono il mio piatto preferito.", en: "Spaghetti with clams is my favorite dish." },
          { es: "Il ragù non va mai con gli spaghetti, dicono a Bologna.", en: "Ragù never goes with spaghetti, they say in Bologna." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Spaghetti with clams is my favorite dish.", answer: "Gli spaghetti con le vongole sono il mio piatto preferito.", altAnswers: ["Gli spaghetti alle vongole sono il mio piatto preferito."], explanation: "\"Gli spaghetti\" + plural verb \"sono\"." },
          { type: "speak", text: "A Bologna non dicono spaghetti alla bolognese: dicono tagliatelle al ragù.", prompt: "Correct a friend: In Bologna they don't say spaghetti bolognese: they say tagliatelle al ragù.", tip: "ta-glia-TEL-le: gli as in million.", explanation: "The local name for the dish." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Stuffed peppers are a typical summer dish.", answer: "I peperoni ripieni sono un piatto tipico dell'estate.", altAnswers: ["I peperoni ripieni sono un piatto tipico estivo."], explanation: "\"I peperoni\" = bell peppers." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We bought four sandwiches for the journey.", answer: "Abbiamo comprato quattro panini per il viaggio.", explanation: "Plural \"panini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, at the bar.", source: "An espresso with a dash of milk, thanks.", answer: "Un caffè macchiato, grazie.", altAnswers: ["Un macchiato, grazie."], explanation: "\"Macchiato\" = stained." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Bologna people eat tagliatelle with ragù.", answer: "A Bologna si mangiano le tagliatelle al ragù.", altAnswers: ["A Bologna mangiano le tagliatelle al ragù.", "A Bologna si mangiano tagliatelle al ragù."], explanation: "Si passivante with a plural noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have a zucchini and a cookie.", answer: "Prendo una zucchina e un biscotto.", altAnswers: ["Prendo uno zucchino e un biscotto."], explanation: "Singular forms: \"zucchina\", \"biscotto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, at the bar.", source: "A lukewarm milky coffee for me.", answer: "Per me un caffellatte tiepido.", altAnswers: ["Un caffellatte tiepido per me.", "Per me un caffelatte tiepido."], explanation: "\"Tiepido\" = lukewarm." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like a pizza with [spicy salami].", sentence: "Vorrei una pizza al ___.", answer: "salame piccante", explanation: "The topping English speakers call pepperoni." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The spaghetti] is ready.", sentence: "___ sono pronti.", answer: "Gli spaghetti", explanation: "\"Gli\" before s + consonant." },
      { type: "multiple-choice", question: "Which order gets you coffee with lots of milk in a tall glass?", options: ["un latte macchiato", "un latte", "un caffè macchiato", "un caffè lungo"], correctIndex: 0, explanation: "\"Un latte\" is just milk." },
      { type: "multi-select", question: "Which of these are correct Italian?", options: ["un panino", "un panini", "gli spaghetti", "i spaghetti", "un espresso"], correctIndexes: [0, 2, 4], explanation: "\"Un panino\", \"gli spaghetti\", \"un espresso\"." },
      { type: "dictation", audio: "Un latte macchiato e un panino con prosciutto e mozzarella.", explanation: "Two corrected orders in one." },
      { type: "speak", text: "Vorrei una pizza al salame piccante e un panino da portare via.", prompt: "Order: I'd like a pepperoni pizza and a sandwich to go.", tip: "pic-CAN-te: double c, hold it.", explanation: "\"Da portare via\" = to go." },
    ],
  },
  {
    slug: "b2-mission-write-a-recipe",
    level: "IT-B2",
    number: 10,
    title: "Real-World Mission: Your Family Recipe",
    summary: "Write a family recipe in proper Italian recipe style: a short story, the ingredients, the method in the infinitive and a tip.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "The story behind the dish",
        body: [
          "Italian food blogs and family cookbooks open with a few lines of memory. Use the imperfect for habits (\"mia nonna la preparava ogni domenica\"), the passato prossimo or remoto for single events, and \"è da quando ero piccolo che\" (ever since I was little).",
        ],
        examples: [
          { es: "Mia nonna preparava le polpette al sugo ogni domenica.", en: "My grandmother made meatballs in tomato sauce every Sunday." },
          { es: "È da quando ero piccola che le mangio.", en: "I've been eating them ever since I was little." },
          { es: "La ricetta è passata da una generazione all'altra.", en: "The recipe has been handed down from one generation to the next." },
          { es: "Nessuno le fa buone come le faceva lei.", en: "Nobody makes them as good as she did." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother made them every Sunday.", answer: "Mia nonna le preparava ogni domenica.", altAnswers: ["Mia nonna le faceva ogni domenica.", "La nonna le preparava ogni domenica.", "Mia nonna li preparava ogni domenica.", "Mia nonna lo preparava ogni domenica.", "Mia nonna la preparava ogni domenica."], explanation: "Imperfect for a habit." },
          { type: "listen-choose", audio: "La ricetta è passata da una generazione all'altra.", question: "What does the speaker say about the recipe?", options: ["It's been handed down through the family.", "It was bought from a restaurant.", "It changes every year.", "It was invented recently."], correctIndex: 0, explanation: "\"Da una generazione all'altra\"." },
        ],
      },
      {
        heading: "Ingredients and method",
        body: [
          "Layout: the title, \"Ingredienti per 4 persone\", a list with quantities, then \"Preparazione\" with numbered steps in the infinitive. Keep one form throughout. Use \"q.b.\" for salt, pepper and oil, and \"andare\" + participle for what really matters.",
        ],
        examples: [
          { es: "Ingredienti: 500 g di carne macinata, 2 uova, 50 g di pane raffermo, prezzemolo, sale q.b.", en: "Ingredients: 500 g of ground meat, 2 eggs, 50 g of stale bread, parsley, salt to taste." },
          { es: "Ammollare il pane nel latte e strizzarlo bene.", en: "Soak the bread in milk and squeeze it out well." },
          { es: "Impastare tutto e formare delle polpette grandi come una noce.", en: "Mix everything by hand and shape walnut-sized meatballs." },
          { es: "Le polpette vanno cotte nel sugo per almeno mezz'ora.", en: "The meatballs must be cooked in the sauce for at least half an hour." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Soak the bread in milk and squeeze it out well.", answer: "Ammollare il pane nel latte e strizzarlo bene.", altAnswers: ["Bagnare il pane nel latte e strizzarlo bene.", "Mettere il pane a bagno nel latte e strizzarlo bene."], explanation: "\"Strizzarlo\": pronoun attached." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The meatballs must be cooked in the sauce.", answer: "Le polpette vanno cotte nel sugo.", explanation: "\"Vanno cotte\": feminine plural." },
        ],
      },
      {
        heading: "The tip and the serving",
        body: [
          "End with \"il consiglio\" or \"il segreto della nonna\": \"il segreto è\" + infinitive, \"è meglio che\" + subjunctive, and suggestions for serving: \"servire ben caldo\", \"si accompagna con\", \"il giorno dopo è ancora più buono\".",
        ],
        examples: [
          { es: "Il segreto è usare pane raffermo, non pangrattato.", en: "The secret is to use stale bread, not breadcrumbs." },
          { es: "È meglio che la carne sia mista, manzo e maiale.", en: "It's better if the meat is mixed, beef and pork." },
          { es: "Il giorno dopo sono ancora più buone.", en: "The next day they're even better." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's better if the meat is mixed.", answer: "È meglio che la carne sia mista.", explanation: "\"È meglio che\" + subjunctive." },
          { type: "speak", text: "Il segreto è usare pane raffermo, e il giorno dopo sono ancora più buone.", prompt: "Share the secret: The secret is to use stale bread, and the next day they're even better.", tip: "raf-FER-mo: double f.", explanation: "\"Il segreto è\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been eating them ever since I was little.", answer: "È da quando ero piccolo che le mangio.", altAnswers: ["È da quando ero piccola che le mangio.", "Le mangio da quando ero piccolo.", "Le mangio da quando ero piccola."], explanation: "Present for an ongoing habit from the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody makes them as good as she did.", answer: "Nessuno le fa buone come le faceva lei.", altAnswers: ["Nessuno le fa buone quanto le faceva lei.", "Nessuno le fa così buone come le faceva lei."], explanation: "Comparison of equality with \"come\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Shape walnut-sized meatballs.", answer: "Formare delle polpette grandi come una noce.", altAnswers: ["Formare polpette grandi come una noce.", "Fare delle polpette grandi come una noce."], explanation: "\"Grandi come una noce\" = walnut-sized." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Serve hot with a little grated cheese.", answer: "Servire ben caldo con un po' di formaggio grattugiato.", altAnswers: ["Servire caldo con un po' di formaggio grattugiato.", "Servire ben calde con un po' di formaggio grattugiato.", "Servire calde con un po' di formaggio grattugiato."], explanation: "\"Ben caldo\" = nice and hot." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The secret is to use stale bread.", answer: "Il segreto è usare pane raffermo.", altAnswers: ["Il segreto è usare il pane raffermo.", "Il segreto è utilizzare pane raffermo."], explanation: "\"Il segreto è\" + infinitive, no preposition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The recipe has been handed down from one generation to the next.", answer: "La ricetta è passata da una generazione all'altra.", altAnswers: ["La ricetta è stata tramandata da una generazione all'altra.", "La ricetta si è tramandata da una generazione all'altra."], explanation: "\"Tramandare\" = to hand down." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The next day they're [even better].", sentence: "Il giorno dopo sono ___.", answer: "ancora più buone", altAnswers: ["ancora migliori"], explanation: "\"Ancora più\" = even more." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in recipe style.", en: "[Mix everything by hand] and leave to rest.", sentence: "___ e lasciare riposare.", answer: "Impastare tutto", altAnswers: ["Impastare tutto con le mani", "Amalgamare tutto con le mani"], explanation: "\"Impastare\" = to work by hand." },
      { type: "word-order", prompt: "Put the words in order to say: The meatballs must be cooked for at least half an hour.", words: ["Le polpette", "vanno cotte", "per almeno", "mezz'ora."], translation: "The meatballs must be cooked for at least half an hour.", explanation: "Andare + participle." },
      { type: "multiple-choice", question: "Which step is in consistent recipe style?", options: ["Ammollare il pane e strizzarlo.", "Ammollare il pane e lo strizzi.", "Ammolla il pane e strizzarlo.", "Si ammolla il pane e strizzalo."], correctIndex: 0, explanation: "Keep one form: here, two infinitives." },
      { type: "dictation", audio: "Mia nonna preparava le polpette al sugo ogni domenica.", explanation: "Imperfect for the habit." },
      { type: "speak", text: "Questa è la ricetta delle polpette di mia nonna: la preparava ogni domenica.", prompt: "Introduce your family recipe: This is my grandmother's meatball recipe: she made it every Sunday.", tip: "pol-PET-te: double t.", explanation: "\"La\" refers back to \"la ricetta\"." },
    ],
  },
];

export const IT_B2_U25_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a family recipe for an Italian food blog. Start with a few lines about who made the dish and when, then give the ingredients for four people, the method in numbered steps in the infinitive, and finish with a tip or a serving suggestion.",
  minWords: 120,
  maxWords: 200,
  rubric: [
    "Opens with a short memory using the imperfect for habits (preparava, la mangiavamo) and at least one comparison or time expression",
    "Gives an ingredients list with quantities (g, un pizzico, uno spicchio, q.b.) laid out like an Italian cookbook",
    "Writes every step in the same form, preferably the infinitive, with pronouns attached (strizzarlo, tagliarle) and precise recipe verbs (soffriggere, rosolare, sfumare, scolare)",
    "Uses andare + participle or è importante che + subjunctive for at least one key instruction, and ends with a tip",
  ],
  modelAnswer: "Le polpette al sugo di nonna Rosa\n\nMia nonna Rosa le preparava ogni domenica, e io la guardavo seduta al tavolo della cucina. È da quando ero piccola che le mangio, ma nessuno le fa buone come le faceva lei.\n\nIngredienti per 4 persone: 500 g di carne macinata mista, 2 uova, 50 g di pane raffermo, mezzo bicchiere di latte, 50 g di Parmigiano grattugiato, un ciuffo di prezzemolo, uno spicchio d'aglio, 700 g di passata di pomodoro, olio extravergine e sale q.b.\n\nPreparazione\n1. Ammollare il pane nel latte e strizzarlo bene.\n2. Impastare la carne con le uova, il pane, il formaggio e il prezzemolo tritato; salare.\n3. Formare delle polpette grandi come una noce.\n4. Soffriggere l'aglio in un filo d'olio, aggiungere la passata e cuocere per dieci minuti.\n5. Unire le polpette: vanno cotte nel sugo a fuoco lento per almeno mezz'ora, senza mescolarle troppo.\n\nIl consiglio: è importante che il pane sia raffermo, non fresco. E il giorno dopo sono ancora più buone!",
  explanation: "The model opens with a memory in the imperfect (\"le preparava\", \"la guardavo\"), lays out the ingredients with Italian quantities and \"q.b.\", and keeps every step in the infinitive with attached pronouns (\"strizzarlo\", \"mescolarle\"). \"Vanno cotte\" marks the key instruction and \"è importante che\" + subjunctive introduces the tip.",
};
