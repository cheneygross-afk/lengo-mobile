// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u25-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 25 Extra Practice: Food Culture in
// Depth. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U25_EXTRA: Lesson[] = [
  {
    slug: "b2-food-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Regional Dishes",
    summary: "Fresh texts on regional dishes: cacio e pepe, focaccia, cassoeula, pizza napoletana and cannoli.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "From north to south",
        body: [
          "Rome has \"la cacio e pepe\" (Pecorino and black pepper), Liguria \"la focaccia\", Lombardy \"la cassoeula\" (a winter stew of pork and cabbage), Naples \"la pizza\", Sicily \"i cannoli\" filled with sweet ricotta. Describe them with \"tipico di\", \"originario di\", \"si mangia soprattutto in inverno\".",
        ],
        examples: [
          { es: "La cacio e pepe è un piatto tipico romano.", en: "Cacio e pepe is a typical Roman dish." },
          { es: "La cassoeula si mangia soprattutto in inverno.", en: "Cassoeula is eaten mainly in winter." },
          { es: "I cannoli sono ripieni di ricotta di pecora zuccherata.", en: "Cannoli are filled with sweetened sheep's ricotta." },
          { es: "A Genova la focaccia si mangia anche a colazione.", en: "In Genoa focaccia is eaten at breakfast too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cassoeula is eaten mainly in winter.", answer: "La cassoeula si mangia soprattutto in inverno.", altAnswers: ["La cassoeula si mangia soprattutto d'inverno.", "La cassoeula viene mangiata soprattutto in inverno."], explanation: "Si passivante: \"si mangia\"." },
          { type: "listen-choose", audio: "A Genova la focaccia si mangia anche a colazione.", question: "What's special about focaccia in Genoa?", options: ["It's eaten at breakfast too.", "It's only eaten at Christmas.", "It's always sweet.", "It's eaten with a spoon."], correctIndex: 0, explanation: "\"Anche a colazione\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cacio e pepe is a typical Roman dish.", answer: "La cacio e pepe è un piatto tipico romano.", altAnswers: ["La cacio e pepe è un tipico piatto romano.", "La cacio e pepe è un piatto tipico di Roma."], explanation: "\"Tipico romano\" = typically Roman." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cannoli are filled with sweetened ricotta.", answer: "I cannoli sono ripieni di ricotta zuccherata.", altAnswers: ["I cannoli sono farciti di ricotta zuccherata.", "I cannoli sono ripieni di ricotta dolce."], explanation: "\"Ripieno di\" = filled with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Neapolitan pizza has a high, soft crust.", answer: "La pizza napoletana ha il cornicione alto e morbido.", altAnswers: ["La pizza napoletana ha un cornicione alto e morbido.", "La pizza napoletana ha il bordo alto e morbido."], explanation: "\"Il cornicione\" = the raised edge of a Neapolitan pizza." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Genoa focaccia is eaten at breakfast too.", answer: "A Genova la focaccia si mangia anche a colazione.", explanation: "\"Anche\" before the phrase it modifies." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every region has its own pasta shapes.", answer: "Ogni regione ha i suoi formati di pasta.", altAnswers: ["Ogni regione ha i propri formati di pasta.", "Ogni regione ha le sue forme di pasta."], explanation: "\"Il formato\" = the pasta shape." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the most famous dish in the region.", answer: "È il piatto più famoso della regione.", explanation: "Superlative + \"della\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Romans argue about whether it needs butter.", answer: "I romani discutono se ci voglia il burro.", altAnswers: ["I romani discutono se ci vuole il burro.", "A Roma si discute se ci voglia il burro."], explanation: "\"Ci vuole\" = it takes, it needs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Sicily they also use pistachios a lot.", answer: "In Sicilia si usano molto anche i pistacchi.", altAnswers: ["In Sicilia usano molto anche i pistacchi.", "In Sicilia si usano tanto anche i pistacchi."], explanation: "\"I pistacchi\": hard ch sound." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Cannoli are a dessert [originally from] Sicily.", sentence: "I cannoli sono un dolce ___ Sicilia.", answer: "originario della", explanation: "\"Originario di\" + article with the region." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This is eaten [mainly] in winter.", sentence: "Questo si mangia ___ in inverno.", answer: "soprattutto", altAnswers: ["principalmente"], explanation: "\"Soprattutto\" = mainly." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Pizza is [the most imitated dish] in the world.", sentence: "La pizza è ___ al mondo.", answer: "il piatto più imitato", explanation: "Relative superlative." },
      { type: "word-order", prompt: "Put the words in order to say: Every region has its own pasta shapes.", words: ["Ogni", "regione", "ha", "i suoi", "formati", "di pasta."], translation: "Every region has its own pasta shapes.", explanation: "\"Ogni\" + singular noun." },
      { type: "matching", instructions: "Match the dish to its region.", pairs: [{ left: "la cacio e pepe", right: "Lazio" }, { left: "la focaccia genovese", right: "Liguria" }, { left: "la cassoeula", right: "Lombardia" }, { left: "i cannoli", right: "Sicilia" }], explanation: "Four regional classics." },
      { type: "dictation", audio: "La cacio e pepe si fa con il pecorino, il pepe e l'acqua di cottura.", explanation: "Three ingredients only." },
      { type: "speak", text: "La cassoeula è un piatto lombardo che si mangia soprattutto in inverno.", prompt: "Describe it: Cassoeula is a Lombard dish eaten mainly in winter.", tip: "cas-so-EU-la: eu as two vowels, e-u.", explanation: "Relative \"che\" + si passivante." },
    ],
  },
  {
    slug: "b2-food-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Recipes",
    summary: "Fresh recipe steps for pasta e fagioli, frittata and panna cotta, in the infinitive and with andare + participle.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "More recipe steps",
        body: [
          "New verbs: \"ammollare\" (soak), \"sbattere\" (beat), \"versare\" (pour), \"frullare\" (blend), \"far rassodare\" (let set), \"capovolgere\" (turn out, flip). Recipes keep using the infinitive and \"va\" / \"vanno\" + participle.",
        ],
        examples: [
          { es: "Lasciare i fagioli in ammollo per una notte.", en: "Leave the beans to soak overnight." },
          { es: "Sbattere le uova con un pizzico di sale.", en: "Beat the eggs with a pinch of salt." },
          { es: "Versare la panna cotta negli stampini e lasciarla rassodare in frigo.", en: "Pour the panna cotta into the moulds and leave it to set in the fridge." },
          { es: "La frittata va girata con un piatto.", en: "The frittata must be turned with a plate." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Beat the eggs with a pinch of salt.", answer: "Sbattere le uova con un pizzico di sale.", explanation: "\"Sbattere\" = to beat." },
          { type: "listen-choose", audio: "Lasciare i fagioli in ammollo per una notte.", question: "How long do the beans soak?", options: ["overnight", "an hour", "two days", "ten minutes"], correctIndex: 0, explanation: "\"Per una notte\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Leave the beans to soak overnight.", answer: "Lasciare i fagioli in ammollo per una notte.", altAnswers: ["Lasciare i fagioli in ammollo tutta la notte.", "Mettere i fagioli in ammollo per una notte."], explanation: "\"In ammollo\" = soaking." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Blend half the beans.", answer: "Frullare metà dei fagioli.", altAnswers: ["Frullare la metà dei fagioli."], explanation: "\"Metà dei\" = half of the." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Pour the mixture into the moulds.", answer: "Versare il composto negli stampini.", altAnswers: ["Versare il composto negli stampi."], explanation: "\"Il composto\" = the mixture." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Leave it to set in the fridge for four hours.", answer: "Lasciarla rassodare in frigo per quattro ore.", altAnswers: ["Lasciarlo rassodare in frigo per quattro ore.", "Lasciare rassodare in frigorifero per quattro ore.", "Lasciare rassodare in frigo per quattro ore.", "Lasciarla rassodare in frigorifero per quattro ore."], explanation: "\"Rassodare\" = to set." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with andare + participle.", source: "The frittata must be turned with a plate.", answer: "La frittata va girata con un piatto.", altAnswers: ["La frittata va girata aiutandosi con un piatto.", "La frittata va capovolta con un piatto."], explanation: "\"Va girata\" agrees with \"la frittata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in recipe style.", source: "Turn out the panna cotta onto a plate.", answer: "Capovolgere la panna cotta su un piatto.", altAnswers: ["Capovolgere la panna cotta sul piatto."], explanation: "\"Capovolgere\" = to turn upside down." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with the si passivante.", source: "You add the pasta directly to the soup.", answer: "Si aggiunge la pasta direttamente nella minestra.", altAnswers: ["Si butta la pasta direttamente nella minestra.", "Si aggiunge la pasta direttamente alla minestra."], explanation: "Pasta e fagioli: the pasta cooks in the soup." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using tu.", source: "Don't open the oven during cooking.", answer: "Non aprire il forno durante la cottura.", explanation: "Negative \"tu\" imperative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, with andare + participle.", en: "The beans [must be soaked] the day before.", sentence: "I fagioli ___ in ammollo il giorno prima.", answer: "vanno messi", explanation: "\"Mettere in ammollo\" → \"vanno messi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in recipe style.", en: "[Beat] the eggs with the cheese.", sentence: "___ le uova con il formaggio.", answer: "Sbattere", explanation: "\"Sbattere\" = to beat." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in recipe style.", en: "Cook until the frittata [is golden].", sentence: "Cuocere finché la frittata non ___.", answer: "è dorata", altAnswers: ["diventa dorata"], explanation: "\"Finché non\" + indicative." },
      { type: "word-order", prompt: "Put the words in order to say: Pour the mixture into the moulds.", words: ["Versare", "il composto", "negli", "stampini."], translation: "Pour the mixture into the moulds.", explanation: "\"Negli\" before s + consonant." },
      { type: "multiple-choice", question: "\"Lasciare rassodare\" in a dessert recipe means ...", options: ["leave to set", "leave to rise", "leave to cool slightly", "leave to boil"], correctIndex: 0, explanation: "\"Rassodare\" = to become firm." },
      { type: "dictation", audio: "Versare il composto negli stampini e lasciarlo rassodare in frigo.", explanation: "\"Lasciarlo\": pronoun attached." },
      { type: "speak", text: "Sbattere le uova con il formaggio, versarle in padella e cuocere a fuoco basso.", prompt: "Read the frittata steps: Beat the eggs with the cheese, pour them into the pan and cook over a low heat.", tip: "SBAT-te-re: double t.", explanation: "Three infinitives." },
    ],
  },
  {
    slug: "b2-food-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Food Vocabulary",
    summary: "Fresh sentences on the market, the kitchen and the table: etto, mazzo, pentola, padella, mestolo, tagliere.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Market and kitchen",
        body: [
          "At the market: \"un etto\" (100 g), \"mezzo chilo\", \"un mazzo di\" (a bunch of), \"una cassetta\" (a crate), \"di stagione\" (in season), \"a chilometro zero\" (locally grown). In the kitchen: \"la pentola\" (pot), \"la padella\" (frying pan), \"il mestolo\" (ladle), \"il tagliere\" (chopping board), \"lo scolapasta\" (colander), \"la grattugia\" (grater).",
        ],
        examples: [
          { es: "Mi dà un mazzo di basilico e mezzo chilo di pomodori?", en: "Could I have a bunch of basil and half a kilo of tomatoes?" },
          { es: "Compro solo frutta di stagione.", en: "I only buy fruit that's in season." },
          { es: "Passami lo scolapasta, per favore.", en: "Pass me the colander, please." },
          { es: "Taglia le verdure sul tagliere, non sul tavolo.", en: "Cut the vegetables on the chopping board, not on the table." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, at the market.", source: "Could I have a bunch of basil?", answer: "Mi dà un mazzo di basilico?", altAnswers: ["Mi può dare un mazzo di basilico?", "Vorrei un mazzo di basilico."], explanation: "\"Un mazzo di\" = a bunch of." },
          { type: "listen-choose", audio: "Passami lo scolapasta, per favore.", question: "What does the speaker want?", options: ["the colander", "the ladle", "the grater", "the frying pan"], correctIndex: 0, explanation: "\"Lo scolapasta\" = colander, from \"scolare\" + \"pasta\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I only buy fruit that's in season.", answer: "Compro solo frutta di stagione.", altAnswers: ["Compro soltanto frutta di stagione.", "Compro solo la frutta di stagione."], explanation: "\"Di stagione\" = in season." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "Pass me the grater, please.", answer: "Passami la grattugia, per favore.", explanation: "\"Passami\": imperative + \"mi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Put a large pot of water on the heat.", answer: "Metti sul fuoco una pentola grande d'acqua.", altAnswers: ["Metti sul fuoco una pentola d'acqua grande.", "Metti una pentola grande d'acqua sul fuoco.", "Metti sul fuoco una grande pentola d'acqua."], explanation: "\"Mettere sul fuoco\" = to put on the heat." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These vegetables are locally grown.", answer: "Queste verdure sono a chilometro zero.", altAnswers: ["Queste verdure sono a km zero.", "Queste verdure sono a km 0."], explanation: "\"A chilometro zero\" = locally sourced." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, at the deli counter.", source: "Two hundred grams of mortadella, please.", answer: "Due etti di mortadella, per favore.", altAnswers: ["Duecento grammi di mortadella, per favore."], explanation: "\"Due etti\" = 200 g." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The frying pan is too small.", answer: "La padella è troppo piccola.", explanation: "\"La padella\" = frying pan; \"la pentola\" = pot." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cut the vegetables on the chopping board. (to a friend)", answer: "Taglia le verdure sul tagliere.", explanation: "\"Il tagliere\" = chopping board." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could I have a crate of oranges?", answer: "Mi dà una cassetta di arance?", altAnswers: ["Vorrei una cassetta di arance.", "Mi può dare una cassetta di arance?"], explanation: "\"Una cassetta\" = a crate." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Stir the sauce with [the ladle].", sentence: "Mescola il sugo con ___.", answer: "il mestolo", explanation: "\"Il mestolo\" = ladle; a wooden spoon is \"il cucchiaio di legno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like [half a kilo] of tomatoes.", sentence: "Vorrei ___ di pomodori.", answer: "mezzo chilo", explanation: "\"Mezzo\" before a noun stays masculine: \"mezzo chilo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Drain the pasta in [the colander].", sentence: "Scola la pasta nello ___.", answer: "scolapasta", explanation: "Compound noun: \"lo scolapasta\"." },
      { type: "word-order", prompt: "Put the words in order to say: Could I have a bunch of basil and half a kilo of tomatoes?", words: ["Mi dà", "un mazzo", "di basilico", "e mezzo chilo", "di pomodori?"], translation: "Could I have a bunch of basil and half a kilo of tomatoes?", explanation: "Polite \"Mi dà\"." },
      { type: "matching", instructions: "Match the kitchen tool to the English.", pairs: [{ left: "la pentola", right: "pot" }, { left: "la padella", right: "frying pan" }, { left: "il mestolo", right: "ladle" }, { left: "il tagliere", right: "chopping board" }, { left: "la grattugia", right: "grater" }], explanation: "Kitchen tools." },
      { type: "dictation", audio: "Mi dà un mazzo di basilico e mezzo chilo di pomodori?", explanation: "Market phrases." },
      { type: "speak", text: "Vorrei due etti di prosciutto, un mazzo di basilico e mezzo chilo di pomodori di stagione.", prompt: "Shop at the market: I'd like 200 g of ham, a bunch of basil and half a kilo of seasonal tomatoes.", tip: "ET-ti: double t.", explanation: "Quantities: \"etti\", \"mazzo\", \"mezzo chilo\"." },
    ],
  },
];
