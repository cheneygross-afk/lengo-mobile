// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u04-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Culture Unit 4 Extra Practice: Family, Saints' Days and
// Festivals. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_CULTURE_U04_EXTRA: Lesson[] = [
  {
    slug: "culture-festivals-extra-1",
    level: "IT-Culture",
    number: 1,
    title: "Extra Practice: Festivals",
    summary: "Fresh sentences about the Italian year of festivals: dates, food, greetings and customs.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Dates and greetings",
        body: [
          "Dates use \"il\" + number + month, lowercase: \"il 6 gennaio\", \"il 15 agosto\"; the first is \"il primo\". Greetings follow the gender of the holiday: \"Buon Natale\", \"Buon Ferragosto\", \"Buona Pasqua\", and \"Auguri!\" fits everything.",
        ],
        examples: [
          { es: "Santo Stefano è il 26 dicembre.", en: "Santo Stefano is on December 26." },
          { es: "Buona Pasqua a te e famiglia!", en: "Happy Easter to you and your family!" },
          { es: "Ognissanti è il primo novembre.", en: "All Saints' Day is November 1." },
          { es: "Auguri di buon anno!", en: "Happy New Year!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "All Saints' Day is November 1.", answer: "Ognissanti è il primo novembre.", altAnswers: ["Ognissanti è il 1 novembre.", "Ognissanti è l'1 novembre.", "La festa di Ognissanti è il primo novembre."], explanation: "\"Il primo\" for the first of the month." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Happy Easter] to you and your family!", sentence: "___ a te e famiglia!", answer: "Buona Pasqua", explanation: "\"Pasqua\" is feminine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Happy New Year!", answer: "Buon anno!", altAnswers: ["Auguri di buon anno!", "Buon anno nuovo!", "Felice anno nuovo!"], explanation: "\"Buon anno\" with no apostrophe: \"anno\" is masculine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Epiphany is a public holiday.", answer: "L'Epifania è un giorno festivo.", altAnswers: ["L'Epifania è festa.", "L'Epifania è una festa nazionale."], explanation: "\"Giorno festivo\" = day off." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We eat panettone at Christmas.", answer: "A Natale mangiamo il panettone.", altAnswers: ["Mangiamo il panettone a Natale.", "Per Natale mangiamo il panettone."], explanation: "\"A Natale\" = at Christmas." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Easter Monday we go on a picnic.", answer: "A Pasquetta facciamo un picnic.", altAnswers: ["A Pasquetta andiamo a fare un picnic.", "Il lunedì di Pasqua facciamo un picnic."], explanation: "\"Pasquetta\" = Easter Monday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Carnival ends on Fat Tuesday.", answer: "Il Carnevale finisce il martedì grasso.", altAnswers: ["Il Carnevale finisce martedì grasso.", "Il Carnevale termina il martedì grasso."], explanation: "\"Finire\" adds -isc-: \"finisce\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In August many shops are closed.", answer: "Ad agosto molti negozi sono chiusi.", altAnswers: ["In agosto molti negozi sono chiusi."], explanation: "\"Chiusi\" agrees with \"negozi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today is my name day.", answer: "Oggi è il mio onomastico.", explanation: "\"Il mio onomastico\" with the article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Christmas Eve we have [the big dinner].", sentence: "La vigilia facciamo ___.", answer: "il cenone", explanation: "\"Il cenone\" = the big festive dinner." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The Befana brings [the stocking].", sentence: "La Befana porta ___.", answer: "la calza", explanation: "\"La calza\" = stocking or sock." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On June 2 there's [the parade] in Rome.", sentence: "Il 2 giugno c'è ___ a Roma.", answer: "la parata", explanation: "\"La parata\" on Via dei Fori Imperiali." },
      { type: "word-order", prompt: "Put the words in order to say: The Epiphany takes all the holidays away.", words: ["L'Epifania", "tutte", "le", "feste", "porta", "via."], translation: "The Epiphany takes all the holidays away.", explanation: "The proverb's object comes first." },
      { type: "word-order", prompt: "Put the words in order to say: In Venice everyone wears a mask.", words: ["A", "Venezia", "tutti", "portano", "una", "maschera."], translation: "In Venice everyone wears a mask.", explanation: "\"Portare\" = to wear." },
      {
        type: "matching",
        instructions: "Match the festival to its food.",
        pairs: [
          { left: "Natale", right: "panettone" },
          { left: "Pasqua", right: "colomba" },
          { left: "Carnevale", right: "chiacchiere" },
          { left: "Epifania", right: "sweets in a stocking" },
          { left: "Ferragosto", right: "a barbecue" },
        ],
        explanation: "One food per festival.",
      },
      { type: "multiple-choice", question: "Which greeting fits 15 August?", options: ["Buon Ferragosto!", "Buona Ferragosto!", "Buon Natale!", "Buona Pasqua!"], correctIndex: 0, explanation: "\"Ferragosto\" is masculine: \"buon\"." },
      { type: "listen-choose", audio: "Santo Stefano è il 26 dicembre.", question: "When is Santo Stefano?", options: ["December 26", "December 25", "December 6", "January 26"], correctIndex: 0, explanation: "\"Ventisei\" = 26." },
      { type: "dictation", audio: "Auguri di buon anno a tutti!", explanation: "\"Anno\" (year) with double n." },
      { type: "speak", text: "Il mio periodo preferito è il Natale, perché tutta la famiglia sta insieme.", prompt: "Say it in Italian: My favorite time of year is Christmas, because the whole family is together.", tip: "Na-TA-le: stress the middle.", explanation: "\"Perché\" with an acute accent." },
    ],
  },
  {
    slug: "culture-festivals-extra-2",
    level: "IT-Culture",
    number: 2,
    title: "Extra Practice: Family Life",
    summary: "Fresh situations with an Italian family: visits, meals, invitations and the words for relatives.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "La famiglia allargata",
        body: [
          "Italian families stay close: many adult children live near their parents, grandparents help with the kids, and Sunday lunch gathers everyone. \"I parenti\" are relatives, not parents (\"i genitori\"); \"i suoceri\" are your in-laws.",
        ],
        examples: [
          { es: "I nonni vanno a prendere i bambini a scuola.", en: "The grandparents pick the children up from school." },
          { es: "Domenica pranziamo dai miei suoceri.", en: "On Sunday we're having lunch at my in-laws'." },
          { es: "A Natale vengono tutti i parenti.", en: "At Christmas all the relatives come." },
          { es: "Mio fratello abita a due passi dai miei.", en: "My brother lives a stone's throw from my parents." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At Christmas all the relatives come.", answer: "A Natale vengono tutti i parenti.", altAnswers: ["A Natale arrivano tutti i parenti.", "Tutti i parenti vengono a Natale."], explanation: "\"I parenti\" = relatives, a false friend." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sunday we're having lunch [at my in-laws'].", sentence: "Domenica pranziamo ___.", answer: "dai miei suoceri", explanation: "\"Da\" + person = at someone's place." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The grandparents pick the children up from school.", answer: "I nonni vanno a prendere i bambini a scuola.", altAnswers: ["I nonni prendono i bambini a scuola.", "I nonni vanno a prendere i bambini all'uscita di scuola."], explanation: "\"Andare a prendere\" = to pick up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents live in Bari.", answer: "I miei genitori abitano a Bari.", altAnswers: ["I miei genitori vivono a Bari.", "I miei abitano a Bari.", "I miei vivono a Bari."], explanation: "\"I genitori\" = parents." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're going to my grandmother's.", answer: "Andiamo da mia nonna.", altAnswers: ["Andiamo dalla nonna.", "Andiamo a casa di mia nonna."], explanation: "\"Da\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My mother-in-law cooks very well.", answer: "Mia suocera cucina benissimo.", altAnswers: ["Mia suocera cucina molto bene."], explanation: "No article with \"mia\" + singular relative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Call me tu!", answer: "Dammi del tu!", altAnswers: ["Dammi pure del tu!", "Mi dia del tu!", "Diamoci del tu!"], explanation: "\"Dare del tu\" = to use tu." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thanks for the invitation!", answer: "Grazie per l'invito!", altAnswers: ["Grazie dell'invito!"], explanation: "\"L'invito\" = the invitation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You shouldn't have!", answer: "Non dovevi!", altAnswers: ["Non doveva!", "Non dovevate!"], explanation: "The ritual answer to a gift." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My brother lives [a stone's throw] from my parents.", sentence: "Mio fratello abita ___ dai miei.", answer: "a due passi", explanation: "\"A due passi\" = very close." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Make yourself comfortable]! (to a friend)", sentence: "___!", answer: "Accomodati", explanation: "\"Accomodarsi\" → \"accomodati\" with \"tu\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Everything was] delicious!", sentence: "___ buonissimo!", answer: "Era tutto", altAnswers: ["Tutto era"], explanation: "Imperfetto for a description." },
      { type: "word-order", prompt: "Put the words in order to say: My cousins are coming for lunch.", words: ["I", "miei", "cugini", "vengono", "a", "pranzo."], translation: "My cousins are coming for lunch.", explanation: "Plural relatives keep the article: \"i miei cugini\"." },
      { type: "word-order", prompt: "Put the words in order to say: How long have you been together?", words: ["Da", "quanto", "tempo", "state", "insieme?"], translation: "How long have you been together?", explanation: "Present + \"da\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "i genitori", right: "parents" },
          { left: "i parenti", right: "relatives" },
          { left: "i suoceri", right: "in-laws" },
          { left: "i cugini", right: "cousins" },
          { left: "i nipoti", right: "grandchildren, nephews and nieces" },
        ],
        explanation: "\"Parenti\" is the classic false friend.",
      },
      { type: "multiple-choice", question: "Your partner's mother offers more lasagna for the third time. What do you say?", options: ["Grazie, signora, era squisita, ma sono davvero pieno.", "Basta!", "Non mi piace la lasagna.", "Mangia tu!"], correctIndex: 0, explanation: "Praise and a firm, polite no." },
      { type: "listen-choose", audio: "Domenica pranziamo dai miei suoceri.", question: "Where are they having lunch?", options: ["at the in-laws' house", "at a restaurant", "at their parents' house", "at home"], correctIndex: 0, explanation: "\"I suoceri\" = in-laws." },
      { type: "dictation", audio: "A Natale vengono tutti i parenti.", explanation: "\"Parenti\" = relatives." },
      { type: "speak", text: "La domenica pranziamo sempre dai nonni: è una tradizione.", prompt: "Say it in Italian: On Sundays we always have lunch at our grandparents': it's a tradition.", tip: "Tra-di-ZIO-ne: z = ts.", explanation: "\"Dai nonni\" = at the grandparents'." },
    ],
  },
];
