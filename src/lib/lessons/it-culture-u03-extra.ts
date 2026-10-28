// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u03-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 3 Extra Practice: Food by Region. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_CULTURE_U03_EXTRA: Lesson[] = [
  {
    slug: "culture-food-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Dishes",
    summary: "Fresh sentences about regional dishes: what they're made of, where they come from and how to order them.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Describing a dish",
        body: [
          "Three patterns do most of the work: \"è un piatto tipico di...\" (it's a typical dish of...), \"si fa con...\" (it's made with...), and \"alla\" + city or style (\"alla romana\", \"alla genovese\").",
        ],
        examples: [
          { es: "La cotoletta alla milanese è un piatto tipico di Milano.", en: "Cotoletta alla milanese is a typical dish of Milan." },
          { es: "La pastiera si fa a Pasqua.", en: "Pastiera is made at Easter." },
          { es: "I canederli sono gnocchi di pane del Trentino.", en: "Canederli are bread dumplings from Trentino." },
          { es: "Le sarde a beccafico sono un piatto siciliano.", en: "Sarde a beccafico is a Sicilian dish." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pastiera is made at Easter.", answer: "La pastiera si fa a Pasqua.", altAnswers: ["La pastiera si prepara a Pasqua.", "La pastiera si fa per Pasqua."], explanation: "\"Si fa\" = is made; \"a Pasqua\" = at Easter." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's [a typical dish] of Milan.", sentence: "È ___ di Milano.", answer: "un piatto tipico", explanation: "\"Tipico\" follows the noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Canederli are bread dumplings from Trentino.", answer: "I canederli sono gnocchi di pane del Trentino.", altAnswers: ["I canederli sono gnocchi di pane trentini."], explanation: "\"Gnocchi di pane\" = bread dumplings." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Carbonara is made with guanciale.", answer: "La carbonara si fa con il guanciale.", altAnswers: ["La carbonara si fa col guanciale.", "La carbonara si prepara con il guanciale."], explanation: "\"Si fa con\" = is made with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pesto comes from Genoa.", answer: "Il pesto viene da Genova.", altAnswers: ["Il pesto è di Genova."], explanation: "\"Venire da\" + city." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like the Roman-style artichokes.", answer: "Vorrei i carciofi alla romana.", explanation: "\"Alla romana\" = Roman style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Polenta is made with cornmeal.", answer: "La polenta si fa con la farina di mais.", altAnswers: ["La polenta si fa con la farina di granturco.", "La polenta è fatta con la farina di mais."], explanation: "\"Farina di mais\" = cornmeal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A fiorentina for two, rare.", answer: "Una fiorentina per due, al sangue.", altAnswers: ["Una fiorentina per due persone, al sangue."], explanation: "\"Al sangue\" = rare." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cannoli are a Sicilian dessert.", answer: "I cannoli sono un dolce siciliano.", explanation: "\"Un dolce\" = a dessert." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tortellini are eaten [in broth].", sentence: "I tortellini si mangiano ___.", answer: "in brodo", explanation: "\"In brodo\" = in broth." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Orecchiette are made [by hand].", sentence: "Le orecchiette si fanno ___.", answer: "a mano", explanation: "\"A mano\" = by hand." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Spaghetti with clams], please.", sentence: "___, per favore.", answer: "Spaghetti alle vongole", altAnswers: ["Gli spaghetti alle vongole", "Degli spaghetti alle vongole"], explanation: "\"Alle vongole\" = with clams." },
      { type: "word-order", prompt: "Put the words in order to say: Amatriciana has tomato and guanciale.", words: ["Nell'amatriciana", "ci", "sono", "pomodoro", "e", "guanciale."], translation: "Amatriciana has tomato and guanciale.", explanation: "\"In\" + \"l'amatriciana\" = \"nell'amatriciana\"." },
      { type: "word-order", prompt: "Put the words in order to say: Arancine are fried rice balls.", words: ["Le", "arancine", "sono", "palle", "di", "riso", "fritte."], translation: "Arancine are fried rice balls.", explanation: "\"Fritte\" agrees with \"palle\"." },
      {
        type: "matching",
        instructions: "Match the dish to its main ingredient.",
        pairs: [
          { left: "il risotto alla milanese", right: "saffron" },
          { left: "il pesto alla genovese", right: "basil" },
          { left: "la parmigiana", right: "eggplant" },
          { left: "la cacio e pepe", right: "pecorino and pepper" },
          { left: "la ribollita", right: "bread and beans" },
        ],
        explanation: "One key ingredient per dish.",
      },
      { type: "multiple-choice", question: "Which dish is from Rome?", options: ["la cacio e pepe", "il pesto", "le orecchiette", "i canederli"], correctIndex: 0, explanation: "\"Cacio\" is the Roman word for cheese, here pecorino." },
      { type: "listen-choose", audio: "La pastiera si fa a Pasqua.", question: "When is pastiera made?", options: ["at Easter", "at Christmas", "in summer", "every Sunday"], correctIndex: 0, explanation: "\"Pasqua\" = Easter." },
      { type: "dictation", audio: "I cannoli sono un dolce siciliano.", explanation: "\"Cannoli\": double n." },
      { type: "speak", text: "Il mio piatto preferito è la parmigiana di melanzane.", prompt: "Say it in Italian: My favorite dish is eggplant parmigiana.", tip: "Me-lan-ZA-ne: z sounds like dz.", explanation: "\"Di melanzane\" = made of eggplant." },
    ],
  },
  {
    slug: "culture-food-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Recipes",
    summary: "Practise recipe language: kitchen verbs, measures and instructions in the imperative.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Kitchen commands",
        body: [
          "Spoken recipes use the \"tu\" imperative: \"taglia\", \"metti\", \"aggiungi\", \"mescola\", \"cuoci\". Pronouns attach to it: \"taglialo\", \"mettila\", \"aggiungili\". Negatives use \"non\" + infinitive: \"non salare\".",
        ],
        examples: [
          { es: "Taglia la cipolla e mettila in padella.", en: "Chop the onion and put it in the pan." },
          { es: "Mescola bene e assaggia.", en: "Stir well and taste." },
          { es: "Non salare troppo.", en: "Don't add too much salt." },
          { es: "Cuoci a fuoco basso per un'ora.", en: "Cook on low heat for an hour." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Stir well and taste.", answer: "Mescola bene e assaggia.", altAnswers: ["Gira bene e assaggia.", "Mescolate bene e assaggiate."], explanation: "Two \"tu\" imperatives." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chop the onion and [put it] in the pan.", sentence: "Taglia la cipolla e ___ in padella.", answer: "mettila", explanation: "\"Metti\" + \"la\" (the onion) = \"mettila\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't add too much salt.", answer: "Non salare troppo.", altAnswers: ["Non mettere troppo sale.", "Non salate troppo."], explanation: "Negative imperative: \"non\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cook on low heat for an hour.", answer: "Cuoci a fuoco basso per un'ora.", altAnswers: ["Cuoci a fuoco lento per un'ora.", "Fai cuocere a fuoco basso per un'ora.", "Fai cuocere a fuoco lento per un'ora."], explanation: "\"A fuoco basso / lento\" = on low heat." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Put the water on to boil.", answer: "Metti l'acqua a bollire.", altAnswers: ["Metti su l'acqua.", "Metti a bollire l'acqua."], explanation: "\"Mettere l'acqua a bollire\" = to put water on to boil." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Drain the pasta.", answer: "Scola la pasta.", altAnswers: ["Scolate la pasta."], explanation: "\"Scolare\" = to drain." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Add the cheese and stir.", answer: "Aggiungi il formaggio e mescola.", altAnswers: ["Aggiungi il formaggio e gira.", "Metti il formaggio e mescola."], explanation: "\"Aggiungere\" → \"aggiungi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Salt as needed.", answer: "Sale quanto basta.", altAnswers: ["Sale q.b."], explanation: "\"Quanto basta\" = as much as needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Heat the oil in a pan.", answer: "Scalda l'olio in padella.", altAnswers: ["Scalda l'olio in una padella.", "Riscalda l'olio in padella."], explanation: "\"In padella\" = in the pan." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Cut them] into small pieces. (the potatoes)", sentence: "___ a pezzetti.", answer: "Tagliale", explanation: "\"Le patate\" → \"le\"; it attaches to the imperative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Add [a handful] of parsley.", sentence: "Aggiungi ___ di prezzemolo.", answer: "una manciata", explanation: "\"Una manciata\" = a handful." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Two cloves] of garlic.", sentence: "___ d'aglio.", answer: "Due spicchi", explanation: "\"Lo spicchio\" → \"gli spicchi\"." },
      { type: "word-order", prompt: "Put the words in order to say: Wash the basil and dry it.", words: ["Lava", "il", "basilico", "e", "asciugalo."], translation: "Wash the basil and dry it.", explanation: "\"Asciuga\" + \"lo\" = \"asciugalo\"." },
      { type: "word-order", prompt: "Put the words in order to say: Serve the gnocchi hot.", words: ["Servi", "gli", "gnocchi", "caldi."], translation: "Serve the gnocchi hot.", explanation: "\"Caldi\" agrees with \"gnocchi\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "scolare", right: "to drain" },
          { left: "mescolare", right: "to stir" },
          { left: "assaggiare", right: "to taste" },
          { left: "scaldare", right: "to heat" },
          { left: "friggere", right: "to fry" },
        ],
        explanation: "Kitchen verbs.",
      },
      { type: "listen-choose", audio: "Cuoci a fuoco basso per un'ora.", question: "How should it be cooked?", options: ["on low heat for an hour", "on high heat for a minute", "in the oven for an hour", "without heat"], correctIndex: 0, explanation: "\"A fuoco basso\" = on low heat." },
      { type: "dictation", audio: "Taglia la cipolla e mettila in padella.", explanation: "\"Mettila\": double t." },
      { type: "speak", text: "Metti l'acqua a bollire, poi butta la pasta e scolala al dente.", prompt: "Say it in Italian: Put the water on to boil, then put the pasta in and drain it al dente.", tip: "SCO-la-la: three syllables, stress on the first.", explanation: "Three steps, three imperatives." },
    ],
  },
];
