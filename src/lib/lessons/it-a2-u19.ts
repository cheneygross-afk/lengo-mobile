// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u19.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 19: Relative Pronouns. Che as subject and object, cui
// after prepositions, dove for places, chi = whoever, and a preview of
// quello che.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U19: Lesson[] = [
  {
    slug: "a2-relative-che",
    level: "IT-A2",
    number: 1,
    title: "Who, Which, That: Che",
    summary: "Join two sentences with che, for people and things, as subject or object, and never leave it out.",
    duration: "15 min",
    sections: [
      {
        heading: "Che as the subject",
        body: [
          "\"Che\" joins two sentences and means who, which or that. It never changes: same word for people and things, masculine and feminine, singular and plural.",
          "\"Ho un'amica. L'amica abita a Pisa.\" → \"Ho un'amica che abita a Pisa\". Here \"che\" is the subject of \"abita\".",
        ],
        examples: [
          { es: "Il ragazzo che abita qui è inglese.", en: "The boy who lives here is English." },
          { es: "Ho un'amica che lavora in ospedale.", en: "I have a friend who works in a hospital." },
          { es: "È un treno che non si ferma mai.", en: "It's a train that never stops." },
          { es: "Le persone che arrivano tardi non entrano.", en: "People who arrive late don't get in." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a friend who works in a hospital. (a female friend)", answer: "Ho un'amica che lavora in ospedale.", altAnswers: ["Ho un'amica che lavora in un ospedale."], explanation: "\"Che\" for people, as subject." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The boy [who lives] here is English.", sentence: "Il ragazzo ___ qui è inglese.", answer: "che abita", altAnswers: ["che vive"], explanation: "\"Che\" + verb." },
        ],
      },
      {
        heading: "Che as the object",
        body: [
          "\"Che\" can also be the object: \"Ho visto un film. Il film era bellissimo.\" → \"Il film che ho visto era bellissimo\" (the film I saw was great).",
          "This is the big trap: English often drops that or which (the film I saw). Italian never drops \"che\". \"*Il libro ho letto\" is wrong: say \"il libro che ho letto\".",
        ],
        examples: [
          { es: "Il film che abbiamo visto era lunghissimo.", en: "The film we saw was really long." },
          { es: "Il libro che leggo è un giallo.", en: "The book I'm reading is a crime novel." },
          { es: "La torta che hai fatto è buonissima.", en: "The cake you made is delicious." },
          { es: "Le scarpe che ho comprato sono strette.", en: "The shoes I bought are tight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cake you made is delicious. (to a friend)", answer: "La torta che hai fatto è buonissima.", altAnswers: ["Il dolce che hai fatto è buonissimo.", "La torta che hai fatto è deliziosa."], explanation: "English drops that; Italian needs \"che\"." },
          { type: "multiple-choice", question: "How do you say the shoes I bought are tight?", options: ["Le scarpe che ho comprato sono strette.", "Le scarpe ho comprato sono strette.", "Le scarpe cui ho comprato sono strette.", "Le scarpe chi ho comprato sono strette."], correctIndex: 0, explanation: "Object → \"che\", never left out." },
        ],
      },
      {
        heading: "Who or what? Read the verb",
        body: [
          "\"Il ragazzo che chiama Anna\" can mean the boy who calls Anna or the boy Anna calls. Context usually decides; to be clear, put the subject before the verb: \"il ragazzo che Anna chiama\".",
          "After \"che\" the verb agrees with its own subject: \"le ragazze che vengono\" (plural), \"il treno che prendo\" (I take it).",
        ],
        examples: [
          { es: "Il collega che Anna chiama sempre è Paolo.", en: "The colleague Anna always calls is Paolo." },
          { es: "Le ragazze che vengono stasera sono simpatiche.", en: "The girls who are coming tonight are nice." },
          { es: "Il treno che prendo parte alle otto.", en: "The train I take leaves at eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train I take leaves at eight.", answer: "Il treno che prendo parte alle otto.", altAnswers: ["Il treno che prendo io parte alle otto."], explanation: "\"Che\" is the object; \"prendo\" agrees with \"io\"." },
          { type: "listen-choose", audio: "Le ragazze che vengono stasera sono simpatiche.", question: "Who is nice?", options: ["the girls who are coming tonight", "the girls who came last night", "the girls he's calling tonight", "the girls who live here"], correctIndex: 0, explanation: "\"Che vengono stasera\": coming tonight." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film we saw was really long.", answer: "Il film che abbiamo visto era lunghissimo.", altAnswers: ["Il film che abbiamo visto era molto lungo."], explanation: "Object \"che\", never dropped." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a train that never stops.", answer: "È un treno che non si ferma mai.", explanation: "Subject \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The book I'm reading is a crime novel.", answer: "Il libro che leggo è un giallo.", altAnswers: ["Il libro che sto leggendo è un giallo."], explanation: "\"Un giallo\" = a crime novel." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People who arrive late don't get in.", answer: "Le persone che arrivano tardi non entrano.", altAnswers: ["La gente che arriva tardi non entra.", "Chi arriva tardi non entra."], explanation: "\"Che\" + plural verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pizza we ordered is cold.", answer: "La pizza che abbiamo ordinato è fredda.", altAnswers: ["La pizza che abbiamo preso è fredda."], explanation: "No agreement needed on \"ordinato\" after \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you know the woman who is speaking?", answer: "Conosci la donna che sta parlando?", altAnswers: ["Conosci la signora che sta parlando?", "Conosci la donna che parla?", "Conosci la signora che parla?"], explanation: "Subject \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shoes [I bought] are tight.", sentence: "Le scarpe ___ sono strette.", answer: "che ho comprato", explanation: "Never \"le scarpe ho comprato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The girls [who are coming] tonight are nice.", sentence: "Le ragazze ___ stasera sono simpatiche.", answer: "che vengono", explanation: "Plural verb after \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The wine [you brought] is excellent.", sentence: "Il vino ___ è ottimo.", answer: "che hai portato", explanation: "Object \"che\"." },
      { type: "word-order", prompt: "Put the words in order to say: The cake you made is delicious.", words: ["La", "torta", "che", "hai", "fatto", "è", "buonissima."], translation: "The cake you made is delicious.", explanation: "\"Che\" right after the noun." },
      { type: "dictation", audio: "Il ragazzo che abita qui lavora in un bar.", explanation: "Subject \"che\"." },
      { type: "speak", text: "Il film che ho visto ieri era bellissimo.", prompt: "Say it in Italian: The film I saw yesterday was beautiful.", tip: "Don't skip \"che\", even if English does.", explanation: "Object \"che\", never left out." },
    ],
  },
  {
    slug: "a2-relative-cui",
    level: "IT-A2",
    number: 2,
    title: "Cui After Prepositions",
    summary: "Use cui after a preposition: la persona con cui lavoro, la casa in cui abito, il motivo per cui, l'amica a cui ho scritto.",
    duration: "15 min",
    sections: [
      {
        heading: "Preposition + cui",
        body: [
          "When the joining word needs a preposition, use \"cui\" after it: \"Lavoro con una persona. La persona è simpatica.\" → \"La persona con cui lavoro è simpatica\".",
          "English can leave the preposition at the end (the person I work with). Italian can't: the preposition goes before \"cui\", always. Like \"che\", \"cui\" never changes.",
        ],
        examples: [
          { es: "La persona con cui lavoro è simpatica.", en: "The person I work with is nice." },
          { es: "La casa in cui abito è vecchia.", en: "The house I live in is old." },
          { es: "Il paese da cui vengo è piccolissimo.", en: "The village I come from is tiny." },
          { es: "Gli amici con cui sono partito sono tornati.", en: "The friends I left with have come back." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The person I work with is nice.", answer: "La persona con cui lavoro è simpatica.", altAnswers: ["La persona con cui lavoro è gentile."], explanation: "\"Con\" moves before \"cui\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The village [I come from] is tiny.", sentence: "Il paese ___ è piccolissimo.", answer: "da cui vengo", explanation: "\"Venire da\" → \"da cui\"." },
        ],
      },
      {
        heading: "A cui, di cui",
        body: [
          "Verbs with \"a\" (scrivere a, telefonare a, dare a) use \"a cui\": \"l'amica a cui ho scritto\" (the friend I wrote to). Verbs with \"di\" (parlare di, avere bisogno di) use \"di cui\": \"il libro di cui ti ho parlato\" (the book I told you about).",
        ],
        examples: [
          { es: "L'amica a cui ho scritto non ha risposto.", en: "The friend I wrote to hasn't answered." },
          { es: "Il libro di cui ti ho parlato è questo.", en: "This is the book I told you about." },
          { es: "È proprio la cosa di cui ho bisogno.", en: "It's exactly the thing I need." },
          { es: "Il collega a cui ho telefonato era in ferie.", en: "The colleague I phoned was on holiday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The friend I wrote to hasn't answered. (a female friend)", answer: "L'amica a cui ho scritto non ha risposto.", explanation: "\"Scrivere a\" → \"a cui\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's exactly the thing I need.", answer: "È proprio la cosa di cui ho bisogno.", altAnswers: ["È esattamente la cosa di cui ho bisogno."], explanation: "\"Avere bisogno di\" → \"di cui\"." },
        ],
      },
      {
        heading: "Il motivo per cui",
        body: [
          "\"Il motivo per cui\" (the reason why) is everywhere: \"Il motivo per cui studio italiano è mia nonna\". \"Il giorno in cui\" is the day when: \"il giorno in cui ci siamo conosciuti\".",
        ],
        examples: [
          { es: "Il motivo per cui studio italiano è mia nonna.", en: "The reason I'm studying Italian is my grandmother." },
          { es: "Non capisco il motivo per cui è arrabbiato.", en: "I don't understand why he's angry." },
          { es: "Ricordo il giorno in cui ci siamo conosciuti.", en: "I remember the day we met." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The reason I'm studying Italian is my grandmother.", answer: "Il motivo per cui studio italiano è mia nonna.", altAnswers: ["Il motivo per cui studio l'italiano è mia nonna."], explanation: "\"Per cui\" = for which, why." },
          { type: "listen-choose", audio: "Ricordo il giorno in cui ci siamo conosciuti.", question: "What does she remember?", options: ["the day they met", "the day they got married", "the place where they met", "the reason they met"], correctIndex: 0, explanation: "\"Il giorno in cui\" = the day when." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The house I live in is old.", answer: "La casa in cui abito è vecchia.", altAnswers: ["La casa in cui vivo è vecchia.", "La casa dove abito è vecchia."], explanation: "\"Abitare in\" → \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This is the book I told you about.", answer: "Il libro di cui ti ho parlato è questo.", altAnswers: ["Questo è il libro di cui ti ho parlato."], explanation: "\"Parlare di\" → \"di cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colleague I phoned was on holiday.", answer: "Il collega a cui ho telefonato era in ferie.", altAnswers: ["La collega a cui ho telefonato era in ferie.", "Il collega a cui ho telefonato era in vacanza."], explanation: "\"Telefonare a\" → \"a cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't understand why he's angry.", answer: "Non capisco il motivo per cui è arrabbiato.", altAnswers: ["Non capisco perché è arrabbiato."], explanation: "\"Il motivo per cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The friends I left with have come back.", answer: "Gli amici con cui sono partito sono tornati.", altAnswers: ["Gli amici con cui sono partita sono tornati."], explanation: "\"Partire con\" → \"con cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I remember the day we met.", answer: "Ricordo il giorno in cui ci siamo conosciuti.", altAnswers: ["Mi ricordo il giorno in cui ci siamo conosciuti."], explanation: "\"Il giorno in cui\" = the day when." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The chair [I'm sitting on] is wobbly.", sentence: "La sedia ___ balla.", answer: "su cui sono seduto", altAnswers: ["su cui sono seduta"], explanation: "\"Seduto su\" → \"su cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The town [where I grew up] is by the sea.", sentence: "La città ___ è al mare.", answer: "in cui sono cresciuto", altAnswers: ["in cui sono cresciuta", "dove sono cresciuto", "dove sono cresciuta"], explanation: "\"In cui\" for a place." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "These are the problems [I'm thinking about].", sentence: "Questi sono i problemi ___.", answer: "a cui penso", explanation: "\"Pensare a\" → \"a cui\"." },
      { type: "word-order", prompt: "Put the words in order to say: The person I work with is nice.", words: ["La", "persona", "con", "cui", "lavoro", "è", "simpatica."], translation: "The person I work with is nice.", explanation: "Preposition + \"cui\" right after the noun." },
      { type: "multiple-choice", question: "How do you say the girl I wrote to?", options: ["la ragazza a cui ho scritto", "la ragazza che ho scritto a", "la ragazza cui ho scritto a", "la ragazza ho scritto"], correctIndex: 0, explanation: "The preposition goes before \"cui\"." },
      { type: "dictation", audio: "La città in cui vivo è piccola ma bella.", explanation: "\"In cui\" for a place." },
      { type: "speak", text: "Il motivo per cui sono qui è semplice: amo l'Italia.", prompt: "Say it in Italian: The reason I'm here is simple: I love Italy.", tip: "\"Cui\": one syllable, KWEE.", explanation: "\"Il motivo per cui\"." },
    ],
  },
  {
    slug: "a2-relative-dove-chi",
    level: "IT-A2",
    number: 3,
    title: "Dove and Chi",
    summary: "Use dove for places (la città dove sono nato) and chi for whoever (chi cerca trova).",
    duration: "15 min",
    sections: [
      {
        heading: "Dove = in cui",
        body: [
          "For places, \"dove\" can replace \"in cui\" and is more common in speech: \"la città dove sono nato\" = \"la città in cui sono nato\". \"Il ristorante dove abbiamo mangiato\", \"il bar dove ci vediamo\".",
          "Only for places: for times, use \"in cui\" (\"il giorno in cui\").",
        ],
        examples: [
          { es: "Questa è la città dove sono nata.", en: "This is the city where I was born." },
          { es: "Il ristorante dove abbiamo cenato era caro.", en: "The restaurant where we had dinner was expensive." },
          { es: "Conosci un posto dove si mangia bene?", en: "Do you know a place where the food is good?" },
          { es: "È il bar dove ci vediamo ogni mattina.", en: "It's the bar where we meet every morning." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This is the city where I was born. (a woman speaking)", answer: "Questa è la città dove sono nata.", altAnswers: ["Questa è la città in cui sono nata."], explanation: "\"Dove\" = \"in cui\" for places." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you know a place [where the food is good]?", sentence: "Conosci un posto ___?", answer: "dove si mangia bene", altAnswers: ["in cui si mangia bene"], explanation: "\"Dove\" + \"si mangia bene\"." },
        ],
      },
      {
        heading: "Chi = whoever, people who",
        body: [
          "\"Chi\" as a relative means whoever, anyone who, people who. It takes a singular verb and needs no noun before it: \"Chi parla troppo sbaglia spesso\" (people who talk too much often get it wrong).",
          "Proverbs love it: \"Chi cerca trova\" (seek and you shall find), \"Chi rompe paga\" (you break it, you pay for it).",
        ],
        examples: [
          { es: "Chi parla troppo sbaglia spesso.", en: "People who talk too much often make mistakes." },
          { es: "Chi arriva per primo sceglie il posto.", en: "Whoever arrives first chooses the seat." },
          { es: "Chi vuole il caffè alzi la mano!", en: "Anyone who wants coffee, raise your hand!" },
          { es: "Chi cerca trova.", en: "If you look, you'll find it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever arrives first chooses the seat.", answer: "Chi arriva per primo sceglie il posto.", altAnswers: ["Chi arriva prima sceglie il posto.", "Chi arriva primo sceglie il posto."], explanation: "\"Chi\" + singular verb." },
          { type: "multiple-choice", question: "Which is right for people who study, pass?", options: ["Chi studia passa.", "Chi studiano passano.", "Che studia passa.", "Cui studia passa."], correctIndex: 0, explanation: "\"Chi\" takes a singular verb." },
        ],
      },
      {
        heading: "Quello che, and chi as a question",
        body: [
          "\"Quello che\" (or \"ciò che\") means what, the thing that: \"Fa' quello che vuoi\" (do what you want), \"Quello che dici è vero\". Don't use \"che\" alone for what here.",
          "Keep question \"chi\" apart: \"Non so chi è\" (I don't know who he is). You'll also hear \"non so chi sia\", with a form you'll learn later.",
        ],
        examples: [
          { es: "Fa' quello che vuoi.", en: "Do what you want." },
          { es: "Quello che dici è vero.", en: "What you're saying is true." },
          { es: "Non capisco quello che dice.", en: "I don't understand what he's saying." },
          { es: "Non so chi è quella ragazza.", en: "I don't know who that girl is." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What you're saying is true. (to a friend)", answer: "Quello che dici è vero.", altAnswers: ["Ciò che dici è vero."], explanation: "\"Quello che\" = what, the thing that." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do what you want. (to a friend)", answer: "Fa' quello che vuoi.", altAnswers: ["Fai quello che vuoi.", "Fa' ciò che vuoi.", "Fai ciò che vuoi."], explanation: "Never \"*fa' che vuoi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant where we had dinner was expensive.", answer: "Il ristorante dove abbiamo cenato era caro.", altAnswers: ["Il ristorante in cui abbiamo cenato era caro.", "Il ristorante dove abbiamo mangiato era caro."], explanation: "\"Dove\" for a place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the bar where we meet every morning.", answer: "È il bar dove ci vediamo ogni mattina.", altAnswers: ["È il bar in cui ci vediamo ogni mattina."], explanation: "\"Dove\" = \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People who talk too much often make mistakes.", answer: "Chi parla troppo sbaglia spesso.", altAnswers: ["Chi parla troppo spesso sbaglia."], explanation: "\"Chi\" + singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't understand what he's saying.", answer: "Non capisco quello che dice.", altAnswers: ["Non capisco ciò che dice.", "Non capisco cosa dice.", "Non capisco che cosa dice."], explanation: "\"Quello che\" = what." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know who that girl is.", answer: "Non so chi è quella ragazza.", altAnswers: ["Non so chi sia quella ragazza."], explanation: "Question \"chi\" = who." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever finishes first wins.", answer: "Chi finisce per primo vince.", altAnswers: ["Chi finisce prima vince.", "Chi finisce primo vince."], explanation: "\"Chi\" = whoever." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Anyone who wants] coffee, raise your hand!", sentence: "___ il caffè alzi la mano!", answer: "Chi vuole", explanation: "\"Chi\" + singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The beach [where] we went is beautiful.", sentence: "La spiaggia ___ siamo andati è bellissima.", answer: "dove", altAnswers: ["in cui"], explanation: "\"Dove\" for a place." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What] I want is a holiday.", sentence: "___ voglio è una vacanza.", answer: "Quello che", altAnswers: ["Ciò che"], explanation: "\"Quello che\" = the thing that." },
      { type: "word-order", prompt: "Put the words in order to say: If you look, you'll find it.", words: ["Chi", "cerca", "trova."], translation: "If you look, you'll find it.", explanation: "A proverb with \"chi\"." },
      { type: "listen-choose", audio: "Chi rompe paga.", question: "What does the proverb mean?", options: ["You break it, you pay for it.", "Whoever pays can break things.", "Broken things are expensive.", "Pay before you break it."], correctIndex: 0, explanation: "\"Chi rompe\" = whoever breaks." },
      { type: "speak", text: "Questa è la piazza dove ci siamo conosciuti.", prompt: "Say it in Italian: This is the square where we met.", tip: "PIAZ-za: hold the double z.", explanation: "\"Dove\" for a place." },
    ],
  },
  {
    slug: "a2-drill-relatives",
    level: "IT-A2",
    number: 4,
    title: "Drill: Che or Cui?",
    summary: "High-repetition practice joining two sentences with che, cui, dove and chi.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Join them",
        body: [
          "No preposition → \"che\". Preposition → preposition + \"cui\". Place → \"dove\" works too.",
        ],
        examples: [
          { es: "Ho un vicino che suona la chitarra.", en: "I have a neighbour who plays the guitar." },
          { es: "Il vicino di cui ti ho parlato suona la chitarra.", en: "The neighbour I told you about plays the guitar." },
          { es: "La valigia che ho comprato è grande.", en: "The suitcase I bought is big." },
          { es: "La valigia in cui ho messo i regali è sparita.", en: "The suitcase I put the presents in has disappeared." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a neighbour who plays the guitar.", answer: "Ho un vicino che suona la chitarra.", altAnswers: ["Ho una vicina che suona la chitarra."], explanation: "Subject → \"che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbour I told you about plays the guitar.", answer: "Il vicino di cui ti ho parlato suona la chitarra.", altAnswers: ["La vicina di cui ti ho parlato suona la chitarra."], explanation: "\"Parlare di\" → \"di cui\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The suitcase I bought is big.", answer: "La valigia che ho comprato è grande.", explanation: "Object → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The suitcase I put the presents in has disappeared.", answer: "La valigia in cui ho messo i regali è sparita.", explanation: "\"Mettere in\" → \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher who speaks English is ill.", answer: "La professoressa che parla inglese è malata.", altAnswers: ["Il professore che parla inglese è malato.", "L'insegnante che parla inglese è malata.", "L'insegnante che parla inglese è malato."], explanation: "Subject → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The friend I'm going on holiday with is Greek.", answer: "L'amico con cui vado in vacanza è greco.", altAnswers: ["L'amica con cui vado in vacanza è greca."], explanation: "\"Con cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bus I take is always late.", answer: "L'autobus che prendo è sempre in ritardo.", explanation: "Object → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hotel where we stayed was near the sea.", answer: "L'albergo dove siamo stati era vicino al mare.", altAnswers: ["L'hotel dove siamo stati era vicino al mare.", "L'albergo in cui siamo stati era vicino al mare.", "L'hotel in cui siamo stati era vicino al mare."], explanation: "\"Dove\" or \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The people I gave the keys to are leaving tomorrow.", answer: "Le persone a cui ho dato le chiavi partono domani.", explanation: "\"Dare a\" → \"a cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dress you're wearing is lovely. (to a friend)", answer: "Il vestito che porti è bellissimo.", altAnswers: ["Il vestito che indossi è bellissimo.", "Il vestito che hai è bellissimo."], explanation: "Object → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's the reason I left.", answer: "È il motivo per cui sono partito.", altAnswers: ["È il motivo per cui sono partita.", "Questo è il motivo per cui sono partito.", "Questo è il motivo per cui sono partita."], explanation: "\"Il motivo per cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The dog [that barks] all night is theirs.", sentence: "Il cane ___ tutta la notte è il loro.", answer: "che abbaia", explanation: "Subject → \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The colleague [I share the office with] is very quiet.", sentence: "La collega ___ l'ufficio è molto tranquilla.", answer: "con cui divido", altAnswers: ["con cui condivido"], explanation: "\"Con cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The thing [I need] is time.", sentence: "La cosa ___ è il tempo.", answer: "di cui ho bisogno", explanation: "\"Avere bisogno di\" → \"di cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The photos [you sent me] are beautiful.", sentence: "Le foto ___ sono bellissime.", answer: "che mi hai mandato", explanation: "Object → \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The town [I come from] has two thousand inhabitants.", sentence: "Il paese ___ ha duemila abitanti.", answer: "da cui vengo", explanation: "\"Venire da\" → \"da cui\"." },
      { type: "word-order", prompt: "Put the words in order to say: The bus I take is always late.", words: ["L'autobus", "che", "prendo", "è", "sempre", "in", "ritardo."], translation: "The bus I take is always late.", explanation: "\"Che\" after the noun." },
      { type: "word-order", prompt: "Put the words in order to say: The people I gave the keys to are leaving tomorrow.", words: ["Le", "persone", "a", "cui", "ho", "dato", "le", "chiavi", "partono", "domani."], translation: "The people I gave the keys to are leaving tomorrow.", explanation: "\"A cui\" after the noun." },
      { type: "multiple-choice", question: "La ragazza ___ sono uscito ieri è francese.", options: ["con cui", "che", "cui", "con che"], correctIndex: 0, explanation: "\"Uscire con\" → \"con cui\"." },
      { type: "dictation", audio: "Il paese da cui vengo è in montagna.", explanation: "\"Da cui\"." },
      { type: "speak", text: "La persona con cui vivo è la stessa persona che amo.", prompt: "Say it in Italian: The person I live with is the same person I love.", tip: "\"Cui\" and \"che\" in one sentence: keep them apart.", explanation: "\"Con cui\" vs object \"che\"." },
    ],
  },
  {
    slug: "a2-contrast-che-cui",
    level: "IT-A2",
    number: 5,
    title: "Contrast Clinic: Che or Cui?",
    summary: "Minimal pairs: la ragazza che ho conosciuto / la ragazza con cui sono uscito; il libro che leggo / il libro di cui parlo.",
    duration: "15 min",
    sections: [
      {
        heading: "Same noun, different verb",
        body: [
          "The noun doesn't choose: the verb after it does. \"Conoscere qualcuno\" takes no preposition → \"la ragazza che ho conosciuto\". \"Uscire con qualcuno\" takes \"con\" → \"la ragazza con cui sono uscito\".",
        ],
        examples: [
          { es: "La ragazza che ho conosciuto è di Lecce.", en: "The girl I met is from Lecce." },
          { es: "La ragazza con cui sono uscito è di Lecce.", en: "The girl I went out with is from Lecce." },
          { es: "Il libro che leggo è noioso.", en: "The book I'm reading is boring." },
          { es: "Il libro di cui parlo è noioso.", en: "The book I'm talking about is boring." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girl I went out with is from Lecce. (a man speaking)", answer: "La ragazza con cui sono uscito è di Lecce.", explanation: "\"Uscire con\" → \"con cui\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girl I met is from Lecce.", answer: "La ragazza che ho conosciuto è di Lecce.", explanation: "\"Conoscere\" + direct object → \"che\"." },
        ],
      },
      {
        heading: "Check the verb's preposition",
        body: [
          "Ask yourself what the verb needs on its own: \"chiamare qualcuno\" (che), \"telefonare a qualcuno\" (a cui); \"aspettare qualcuno\" (che), \"pensare a qualcuno\" (a cui); \"ricordare qualcosa\" (che), \"ricordarsi di qualcosa\" (di cui).",
        ],
        examples: [
          { es: "Il collega che ho chiamato non risponde.", en: "The colleague I called isn't answering." },
          { es: "Il collega a cui ho telefonato non risponde.", en: "The colleague I phoned isn't answering." },
          { es: "L'autobus che aspetto non arriva.", en: "The bus I'm waiting for isn't coming." },
          { es: "È una cosa a cui penso spesso.", en: "It's something I often think about." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bus I'm waiting for isn't coming.", answer: "L'autobus che aspetto non arriva.", altAnswers: ["L'autobus che sto aspettando non arriva."], explanation: "\"Aspettare\" has no preposition: \"che\", even though English says for." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's something I often think about.", answer: "È una cosa a cui penso spesso.", altAnswers: ["È una cosa a cui penso molto spesso."], explanation: "\"Pensare a\" → \"a cui\"." },
        ],
      },
      {
        heading: "When English has a preposition but Italian doesn't",
        body: [
          "Watch the verbs where the two languages differ. \"Aspettare\" (wait for), \"cercare\" (look for), \"ascoltare\" (listen to), \"guardare\" (look at), \"pagare\" (pay for) take no preposition in Italian, so they use \"che\".",
        ],
        examples: [
          { es: "La chiave che cerco è sparita.", en: "The key I'm looking for has disappeared." },
          { es: "La musica che ascolti è troppo alta.", en: "The music you're listening to is too loud." },
          { es: "Il quadro che guardi è un falso.", en: "The painting you're looking at is a fake." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The music you're listening to is too loud. (to a friend)", answer: "La musica che ascolti è troppo alta.", altAnswers: ["La musica che stai ascoltando è troppo alta."], explanation: "\"Ascoltare\" + direct object → \"che\"." },
          { type: "multiple-choice", question: "How do you say the key I'm looking for?", options: ["la chiave che cerco", "la chiave per cui cerco", "la chiave cui cerco", "la chiave di cui cerco"], correctIndex: 0, explanation: "\"Cercare\" takes no preposition." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The book I'm talking about is boring.", answer: "Il libro di cui parlo è noioso.", altAnswers: ["Il libro di cui sto parlando è noioso."], explanation: "\"Parlare di\" → \"di cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The book I'm reading is boring.", answer: "Il libro che leggo è noioso.", altAnswers: ["Il libro che sto leggendo è noioso."], explanation: "\"Leggere\" + direct object → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colleague I phoned isn't answering.", answer: "Il collega a cui ho telefonato non risponde.", altAnswers: ["La collega a cui ho telefonato non risponde."], explanation: "\"Telefonare a\" → \"a cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colleague I called isn't answering.", answer: "Il collega che ho chiamato non risponde.", altAnswers: ["La collega che ho chiamato non risponde."], explanation: "\"Chiamare\" + direct object → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The painting you're looking at is a fake. (to a friend)", answer: "Il quadro che guardi è un falso.", altAnswers: ["Il quadro che stai guardando è un falso."], explanation: "\"Guardare\" takes no preposition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The key I'm looking for has disappeared.", answer: "La chiave che cerco è sparita.", altAnswers: ["La chiave che sto cercando è sparita."], explanation: "\"Cercare\" + direct object → \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The man [I'm waiting for] is late.", sentence: "L'uomo ___ è in ritardo.", answer: "che aspetto", altAnswers: ["che sto aspettando"], explanation: "\"Aspettare\" → \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The friend [I think about] every day lives in Australia.", sentence: "L'amico ___ ogni giorno vive in Australia.", answer: "a cui penso", explanation: "\"Pensare a\" → \"a cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The trip [I'm paying for] is expensive.", sentence: "Il viaggio ___ è caro.", answer: "che pago", altAnswers: ["che sto pagando"], explanation: "\"Pagare\" + direct object → \"che\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's something I often think about.", words: ["È", "una", "cosa", "a", "cui", "penso", "spesso."], translation: "It's something I often think about.", explanation: "\"A cui\" + verb." },
      { type: "multiple-choice", question: "Il ragazzo ___ ho scritto non mi ha risposto.", options: ["a cui", "che", "di cui", "con che"], correctIndex: 0, explanation: "\"Scrivere a qualcuno\" → \"a cui\"." },
      { type: "listen-choose", audio: "La ragazza con cui sono uscito ieri è la sorella di Marco.", question: "Who is Marco's sister?", options: ["the girl he went out with yesterday", "the girl he met yesterday", "the girl he called yesterday", "the girl who went out yesterday"], correctIndex: 0, explanation: "\"Con cui sono uscito\" = I went out with." },
      { type: "dictation", audio: "Il libro che leggo è quello di cui ti ho parlato.", explanation: "\"Che\" then \"di cui\"." },
      { type: "speak", text: "La musica che ascolto è quella di cui parlano tutti.", prompt: "Say it in Italian: The music I listen to is the one everyone's talking about.", tip: "\"Che\" for \"ascoltare\", \"di cui\" for \"parlare di\".", explanation: "The verb chooses the relative." },
    ],
  },
  {
    slug: "a2-error-hunt-relatives",
    level: "IT-A2",
    number: 6,
    title: "Error Hunt: Relatives",
    summary: "Find and fix the typical mistakes: la persona che parlo con, il libro ho comprato, la città che vivo, il ragazzo cui ho visto.",
    duration: "15 min",
    sections: [
      {
        heading: "The missing che",
        body: [
          "\"*Il libro ho comprato\" copies English (the book I bought). Italian always needs the joining word: \"il libro che ho comprato\".",
        ],
        examples: [
          { es: "Il libro che ho comprato è in inglese.", en: "The book I bought is in English." },
          { es: "La ragazza che hai visto è mia cugina.", en: "The girl you saw is my cousin." },
          { es: "Il vino che beviamo è siciliano.", en: "The wine we're drinking is Sicilian." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Il libro ho comprato è in inglese\". Translate into Italian: The book I bought is in English.", source: "The book I bought is in English.", answer: "Il libro che ho comprato è in inglese.", explanation: "\"Che\" can't be left out." },
          { type: "fill-blank", prompt: "Fix \"*La ragazza hai visto è mia cugina\". Write the Italian for the bold words.", en: "The girl [you saw] is my cousin.", sentence: "La ragazza ___ è mia cugina.", answer: "che hai visto", explanation: "Object \"che\"." },
        ],
      },
      {
        heading: "The preposition at the end",
        body: [
          "\"*La persona che parlo con\" copies the person I talk to. Italian moves the preposition to the front and uses \"cui\": \"la persona con cui parlo\".",
          "And \"cui\" never stands alone for a direct object: \"*il ragazzo cui ho visto\" → \"il ragazzo che ho visto\".",
        ],
        examples: [
          { es: "La persona con cui parlo è il mio capo.", en: "The person I'm talking to is my boss." },
          { es: "Il ragazzo che ho visto era alto.", en: "The boy I saw was tall." },
          { es: "L'amico a cui ho prestato la bici non me l'ha ridata.", en: "The friend I lent my bike to hasn't given it back." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*La persona che parlo con è il mio capo\". Translate into Italian: The person I'm talking to is my boss.", source: "The person I'm talking to is my boss.", answer: "La persona con cui parlo è il mio capo.", altAnswers: ["La persona con cui sto parlando è il mio capo."], explanation: "Preposition + \"cui\", at the front." },
          { type: "translate", direction: "en-es", prompt: "Fix \"*Il ragazzo cui ho visto era alto\". Translate into Italian: The boy I saw was tall.", source: "The boy I saw was tall.", answer: "Il ragazzo che ho visto era alto.", explanation: "Direct object → \"che\", not \"cui\"." },
        ],
      },
      {
        heading: "Places and what",
        body: [
          "\"*La città che vivo\" forgets that \"vivere\" needs \"in\": \"la città in cui vivo\" or \"la città dove vivo\". And \"*Fa' che vuoi\" needs \"quello\": \"Fa' quello che vuoi\".",
        ],
        examples: [
          { es: "La città in cui vivo è tranquilla.", en: "The town I live in is quiet." },
          { es: "Il quartiere dove abitiamo è vivace.", en: "The neighbourhood where we live is lively." },
          { es: "Ho capito quello che hai detto.", en: "I understood what you said." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*La città che vivo è tranquilla\". Translate into Italian: The town I live in is quiet.", source: "The town I live in is quiet.", answer: "La città in cui vivo è tranquilla.", altAnswers: ["La città dove vivo è tranquilla.", "La città in cui abito è tranquilla.", "La città dove abito è tranquilla."], explanation: "\"Vivere in\" → \"in cui\" or \"dove\"." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ho capito quello che hai detto.", "Ho capito che hai detto.", "Ho capito cui hai detto.", "Ho capito chi hai detto."], correctIndex: 0, explanation: "What = \"quello che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"*Il vino beviamo è siciliano\". Translate into Italian: The wine we're drinking is Sicilian.", source: "The wine we're drinking is Sicilian.", answer: "Il vino che beviamo è siciliano.", altAnswers: ["Il vino che stiamo bevendo è siciliano."], explanation: "\"Che\" can't be dropped." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Il quartiere che abitiamo è vivace\". Translate into Italian: The neighbourhood where we live is lively.", source: "The neighbourhood where we live is lively.", answer: "Il quartiere dove abitiamo è vivace.", altAnswers: ["Il quartiere in cui abitiamo è vivace.", "Il quartiere dove viviamo è vivace.", "Il quartiere in cui viviamo è vivace."], explanation: "Place → \"dove\" or \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*L'amico che ho prestato la bici a\". Translate into Italian: The friend I lent my bike to.", source: "The friend I lent my bike to.", answer: "L'amico a cui ho prestato la bici.", altAnswers: ["L'amica a cui ho prestato la bici.", "L'amico a cui ho prestato la bicicletta.", "L'amica a cui ho prestato la bicicletta."], explanation: "\"Prestare a\" → \"a cui\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Il film cui abbiamo visto\". Translate into Italian: The film we saw.", source: "The film we saw.", answer: "Il film che abbiamo visto.", explanation: "Direct object → \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Chi studiano passano l'esame\". Translate into Italian: People who study pass the exam.", source: "People who study pass the exam.", answer: "Chi studia passa l'esame.", altAnswers: ["Le persone che studiano passano l'esame."], explanation: "\"Chi\" takes a singular verb." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Il motivo perché sono qui\". Translate into Italian: The reason I'm here.", source: "The reason I'm here.", answer: "Il motivo per cui sono qui.", explanation: "\"Il motivo per cui\"." },
      { type: "fill-blank", prompt: "Fix \"*La collega che esco con\". Write the Italian for the bold words.", en: "The colleague [I go out with].", sentence: "La collega ___.", answer: "con cui esco", explanation: "\"Con cui\" + verb." },
      { type: "fill-blank", prompt: "Fix \"*Il giorno che ci siamo conosciuti\". Write the Italian for the bold words.", en: "The day [when] we met.", sentence: "Il giorno ___ ci siamo conosciuti.", answer: "in cui", explanation: "Careful style: \"il giorno in cui\". In speech you'll also hear \"il giorno che\"." },
      { type: "fill-blank", prompt: "Fix \"*La cosa che ho bisogno\". Write the Italian for the bold words.", en: "The thing [I need].", sentence: "La cosa ___.", answer: "di cui ho bisogno", explanation: "\"Avere bisogno di\" → \"di cui\"." },
      { type: "word-order", prompt: "Fix \"*La persona che parlo con\". Put the words in order to say: The person I'm talking to is my boss.", words: ["La", "persona", "con", "cui", "parlo", "è", "il", "mio", "capo."], translation: "The person I'm talking to is my boss.", explanation: "\"Con cui\" right after the noun." },
      { type: "multiple-choice", question: "Which sentence has a mistake?", options: ["La casa che abito è grande.", "La casa in cui abito è grande.", "La casa dove abito è grande.", "La casa che ho comprato è grande."], correctIndex: 0, explanation: "\"Abitare in\" → \"in cui\" or \"dove\"." },
      { type: "listen-choose", audio: "Il ragazzo con cui esce mia sorella fa il cuoco.", question: "Who is a cook?", options: ["the boy her sister goes out with", "her sister", "the boy who lives with her sister", "the boy her sister works with"], correctIndex: 0, explanation: "\"Con cui esce\" = she goes out with." },
      { type: "dictation", audio: "La città in cui vivo è piccola.", explanation: "\"In cui\" for a place." },
      { type: "speak", text: "Non \"la persona che parlo con\", ma \"la persona con cui parlo\"!", prompt: "Correct the mistake out loud in Italian: Not \"la persona che parlo con\", but \"la persona con cui parlo\"!", tip: "\"Con cui\": two short words, con-KWEE.", explanation: "The preposition moves before \"cui\"." },
    ],
  },
  {
    slug: "a2-dialogue-lab-whos-who",
    level: "IT-A2",
    number: 7,
    title: "Dialogue Lab: Who's Who at the Party?",
    summary: "Point people out at a party: quello che parla con Giulia è il ragazzo di cui ti ho parlato.",
    duration: "15 min",
    sections: [
      {
        heading: "Pointing people out",
        body: [
          "At a party, \"quello\" / \"quella\" + \"che\" pick people out: \"quello che parla con Giulia\" (the one talking to Giulia), \"quella con il vestito rosso\" (the one in the red dress), \"quelli che ballano\" (the ones dancing).",
        ],
        examples: [
          { es: "Chi è quello che parla con Giulia?", en: "Who's the one talking to Giulia?" },
          { es: "È il ragazzo di cui ti ho parlato!", en: "He's the guy I told you about!" },
          { es: "E quella con il vestito rosso?", en: "And the one in the red dress?" },
          { es: "È la collega con cui lavoro a Milano.", en: "She's the colleague I work with in Milan." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's the one talking to Giulia?", answer: "Chi è quello che parla con Giulia?", altAnswers: ["Chi è quello che sta parlando con Giulia?"], explanation: "\"Quello che\" = the one who." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's the guy [I told you about]!", sentence: "È il ragazzo ___!", answer: "di cui ti ho parlato", explanation: "\"Parlare di\" → \"di cui\"." },
        ],
      },
      {
        heading: "Who knows whom",
        body: [
          "Explain the links: \"il fratello di Anna, quello che vive a Londra\", \"l'amica da cui abbiamo dormito a Roma\" (the friend we stayed with). \"Da\" + person = at someone's place, so \"da cui\".",
        ],
        examples: [
          { es: "Quelli che ballano sono i cugini di Marta.", en: "The ones dancing are Marta's cousins." },
          { es: "Lui è il fratello di Anna, quello che vive a Londra.", en: "He's Anna's brother, the one who lives in London." },
          { es: "Lei è l'amica da cui abbiamo dormito a Roma.", en: "She's the friend we stayed with in Rome." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ones dancing are Marta's cousins.", answer: "Quelli che ballano sono i cugini di Marta.", altAnswers: ["Quelli che stanno ballando sono i cugini di Marta."], explanation: "\"Quelli che\" = the ones who." },
          { type: "listen-choose", audio: "Lei è l'amica da cui abbiamo dormito a Roma.", question: "Who is she?", options: ["the friend they stayed with in Rome", "the friend they met in Rome", "a friend who lives near Rome", "the friend who slept at their place"], correctIndex: 0, explanation: "\"Da cui\" = at whose place." },
        ],
      },
      {
        heading: "Gossip",
        body: [
          "The best party talk mixes everything: \"Vedi quella ragazza che ride? È quella con cui è uscito Paolo!\". \"Quello che\" also means what: \"Non ci credo, quello che dici è incredibile!\".",
        ],
        examples: [
          { es: "Vedi quella ragazza che ride?", en: "Do you see that girl who's laughing?" },
          { es: "È quella con cui è uscito Paolo!", en: "She's the one Paolo went out with!" },
          { es: "Quello che mi hai detto è incredibile!", en: "What you told me is incredible!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's the one Paolo went out with!", answer: "È quella con cui è uscito Paolo!", altAnswers: ["È quella con cui Paolo è uscito!"], explanation: "\"Quella con cui\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What you told me is incredible! (to a friend)", answer: "Quello che mi hai detto è incredibile!", altAnswers: ["Ciò che mi hai detto è incredibile!"], explanation: "\"Quello che\" = what." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And the one in the red dress?", answer: "E quella con il vestito rosso?", altAnswers: ["E quella col vestito rosso?"], explanation: "\"Quella con\" = the one with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's the colleague I work with in Milan.", answer: "È la collega con cui lavoro a Milano.", explanation: "\"Con cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's Anna's brother, the one who lives in London.", answer: "È il fratello di Anna, quello che vive a Londra.", altAnswers: ["Lui è il fratello di Anna, quello che vive a Londra.", "È il fratello di Anna, quello che abita a Londra."], explanation: "\"Quello che\" = the one who." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you see that girl who's laughing? (to a friend)", answer: "Vedi quella ragazza che ride?", altAnswers: ["Vedi quella ragazza che sta ridendo?"], explanation: "Subject \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's the man you were talking to? (to a friend)", answer: "Chi è l'uomo con cui parlavi?", altAnswers: ["Chi è l'uomo con cui stavi parlando?", "Chi è il signore con cui parlavi?"], explanation: "\"Con cui\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ones in the kitchen are my flatmates.", answer: "Quelli in cucina sono i miei coinquilini.", altAnswers: ["Quelli che sono in cucina sono i miei coinquilini."], explanation: "\"Quelli\" = the ones." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's the friend [we stayed with] in Rome.", sentence: "È l'amica ___ a Roma.", answer: "da cui abbiamo dormito", explanation: "\"Da\" + person → \"da cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The one who] made the tiramisù is Luca.", sentence: "___ ha fatto il tiramisù è Luca.", answer: "Quello che", explanation: "\"Quello che\" = the one who." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Is that the girl [you went on holiday with]?", sentence: "È quella la ragazza ___?", answer: "con cui sei andato in vacanza", altAnswers: ["con cui sei andata in vacanza"], explanation: "\"Con cui\"." },
      { type: "word-order", prompt: "Put the words in order to say: He's the guy I told you about!", words: ["È", "il", "ragazzo", "di", "cui", "ti", "ho", "parlato!"], translation: "He's the guy I told you about!", explanation: "\"Di cui\" + verb." },
      { type: "multiple-choice", question: "Your friend asks \"Chi è quella con gli occhiali?\". Which reply fits?", options: ["È la ragazza con cui studio.", "È la ragazza cui studio.", "È la ragazza che studio con.", "È la ragazza studio con."], correctIndex: 0, explanation: "\"Studiare con\" → \"con cui\"." },
      { type: "dictation", audio: "Quello che parla con Giulia è mio fratello.", explanation: "\"Quello che\" = the one who." },
      { type: "speak", text: "Vedi quel ragazzo che ride? È quello di cui ti ho parlato!", prompt: "Say it in Italian at a party: See that guy who's laughing? He's the one I told you about!", tip: "\"Quel ragazzo\", but \"quello di cui\": no noun after it.", explanation: "Subject \"che\", then \"di cui\"." },
    ],
  },
  {
    slug: "a2-reading-lab-proverbs",
    level: "IT-A2",
    number: 8,
    title: "Reading Lab: Italian Proverbs with Chi",
    summary: "Read and use well-known Italian proverbs built on chi: chi dorme non piglia pesci, chi va piano va sano e va lontano.",
    duration: "15 min",
    sections: [
      {
        heading: "Chi + verb, verb",
        body: [
          "Many Italian proverbs follow one pattern: \"chi\" + verb (whoever does this), then the result. \"Chi dorme non piglia pesci\": whoever sleeps catches no fish, the early bird catches the worm. \"Piglia\" is an old, informal \"prende\".",
          "Italians drop proverbs into conversation, often only the first half: \"Eh, chi dorme...\".",
        ],
        examples: [
          { es: "Chi dorme non piglia pesci.", en: "The early bird catches the worm." },
          { es: "Chi va piano va sano e va lontano.", en: "Slow and steady wins the race." },
          { es: "Chi trova un amico trova un tesoro.", en: "A good friend is a treasure." },
          { es: "Chi fa da sé fa per tre.", en: "If you want something done well, do it yourself." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (the proverb with \"piano\"): Slow and steady wins the race.", source: "Slow and steady wins the race.", answer: "Chi va piano va sano e va lontano.", explanation: "Literally: whoever goes slowly goes safely and far." },
          { type: "listen-choose", audio: "Chi trova un amico trova un tesoro.", question: "What does the proverb say?", options: ["A good friend is a treasure.", "Money can't buy friends.", "Friends always find treasure.", "Look for friends, not treasure."], correctIndex: 0, explanation: "\"Chi trova\" = whoever finds." },
        ],
      },
      {
        heading: "More proverbs",
        body: [
          "\"Chi tace acconsente\" (silence means yes). \"Chi ben comincia è a metà dell'opera\" (well begun is half done). \"Chi si accontenta gode\" (be happy with what you have). \"Chi cerca trova\" and \"chi rompe paga\" you already know.",
        ],
        examples: [
          { es: "Chi tace acconsente.", en: "Silence means yes." },
          { es: "Chi ben comincia è a metà dell'opera.", en: "Well begun is half done." },
          { es: "Chi si accontenta gode.", en: "Whoever is content is happy." },
          { es: "Non hai detto niente? Chi tace acconsente!", en: "You didn't say anything? Silence means yes!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (the proverb with \"comincia\"): Well begun is half done.", source: "Well begun is half done.", answer: "Chi ben comincia è a metà dell'opera.", explanation: "\"Ben\" is a short \"bene\", placed before the verb." },
          { type: "multiple-choice", question: "Your friend is moaning about a small flat that's cheap and central. Which proverb fits?", options: ["Chi si accontenta gode.", "Chi rompe paga.", "Chi dorme non piglia pesci.", "Chi tace acconsente."], correctIndex: 0, explanation: "Be happy with what you have." },
        ],
      },
      {
        heading: "Using them",
        body: [
          "Use a proverb to comment, not to explain: \"Ti sei alzato alle sette? Bravo, chi dorme non piglia pesci!\". You can also make your own sentences with the pattern: \"Chi studia ogni giorno impara\".",
        ],
        examples: [
          { es: "Ti sei alzato alle sei? Bravo, chi dorme non piglia pesci!", en: "You got up at six? Well done, the early bird catches the worm!" },
          { es: "Hai rotto il bicchiere? Chi rompe paga!", en: "You broke the glass? You break it, you pay for it!" },
          { es: "Chi studia ogni giorno impara.", en: "People who study every day learn." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People who study every day learn.", answer: "Chi studia ogni giorno impara.", altAnswers: ["Chi studia tutti i giorni impara."], explanation: "\"Chi\" + singular verb." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You broke the glass? [You break it, you pay for it]!", sentence: "Hai rotto il bicchiere? ___!", answer: "Chi rompe paga", explanation: "\"Chi rompe\" = whoever breaks." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (the proverb with \"pesci\"): The early bird catches the worm.", source: "The early bird catches the worm.", answer: "Chi dorme non piglia pesci.", explanation: "Literally: whoever sleeps catches no fish." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (the proverb with \"tesoro\"): A good friend is a treasure.", source: "A good friend is a treasure.", answer: "Chi trova un amico trova un tesoro.", explanation: "\"Chi trova\" = whoever finds." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (the proverb with \"tace\"): Silence means yes.", source: "Silence means yes.", answer: "Chi tace acconsente.", explanation: "\"Tacere\" = to be silent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (the proverb with \"da sé\"): If you want something done well, do it yourself.", source: "If you want something done well, do it yourself.", answer: "Chi fa da sé fa per tre.", explanation: "Literally: whoever does it alone does the work of three." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever arrives late washes the dishes!", answer: "Chi arriva tardi lava i piatti!", altAnswers: ["Chi arriva in ritardo lava i piatti!", "Chi arriva tardi lava i piatti."], explanation: "The proverb pattern for a house rule." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever cooks doesn't wash up.", answer: "Chi cucina non lava i piatti.", altAnswers: ["Chi cucina non lava."], explanation: "\"Chi\" + singular verb, twice." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You got up at six? Well done, [the early bird catches the worm]!", sentence: "Ti sei alzato alle sei? Bravo, ___!", answer: "chi dorme non piglia pesci", explanation: "Used to praise an early start." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Whoever is content] is happy.", sentence: "___ gode.", answer: "Chi si accontenta", explanation: "\"Accontentarsi\" = to be content." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Well begun [is half done].", sentence: "Chi ben comincia ___.", answer: "è a metà dell'opera", explanation: "\"A metà\" = halfway." },
      { type: "word-order", prompt: "Put the words in order to say: Slow and steady wins the race.", words: ["Chi", "va", "piano", "va", "sano", "e", "va", "lontano."], translation: "Slow and steady wins the race.", explanation: "Three \"va\", one rhythm." },
      { type: "matching", instructions: "Match the proverb to its meaning.", pairs: [{ left: "Chi cerca trova.", right: "If you look, you'll find it." }, { left: "Chi rompe paga.", right: "You break it, you pay for it." }, { left: "Chi tace acconsente.", right: "Silence means yes." }, { left: "Chi si accontenta gode.", right: "Be happy with what you have." }], explanation: "All four use \"chi\" + singular verb." },
      { type: "dictation", audio: "Chi va piano va sano e va lontano.", explanation: "\"Sano\" = healthy, safe." },
      { type: "speak", text: "Ti sei alzata alle sei? Brava, chi dorme non piglia pesci!", prompt: "Say it in Italian to a friend (a woman): You got up at six? Well done, the early bird catches the worm!", tip: "PI-glia: the soft \"gli\", as in \"figli\".", explanation: "A proverb as a comment." },
    ],
  },
  {
    slug: "a2-mission-describe-your-city",
    level: "IT-A2",
    number: 9,
    title: "Real-World Mission: The Places I Love",
    summary: "Write about the places in your city and the people you meet there, joining sentences with che, cui and dove.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "My places",
        body: [
          "A short post for an Italian blog about your city. Join short sentences: \"C'è un bar. Ci vado ogni mattina.\" → \"C'è un bar dove vado ogni mattina\". Mix \"che\", \"cui\", \"dove\" and \"quello che\".",
        ],
        examples: [
          { es: "Vicino a casa mia c'è un bar dove vado ogni mattina.", en: "Near my house there's a café where I go every morning." },
          { es: "Il barista, che si chiama Gino, sa già cosa prendo.", en: "The barman, who's called Gino, already knows what I'll have." },
          { es: "Il parco in cui corro la domenica è enorme.", en: "The park I run in on Sundays is huge." },
          { es: "La libreria di cui ti parlo è piccola ma piena di libri.", en: "The bookshop I'm telling you about is small but full of books." },
          { es: "Quello che amo della mia città sono le persone.", en: "What I love about my city is the people." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Near my house there's a café where I go every morning.", answer: "Vicino a casa mia c'è un bar dove vado ogni mattina.", altAnswers: ["Vicino a casa mia c'è un bar in cui vado ogni mattina.", "Vicino a casa c'è un bar dove vado ogni mattina."], explanation: "\"Dove\" for a place." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The park I run in on Sundays is huge.", answer: "Il parco in cui corro la domenica è enorme.", altAnswers: ["Il parco dove corro la domenica è enorme."], explanation: "\"In cui\" or \"dove\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The barman, who's called Gino, already knows what I'll have.", answer: "Il barista, che si chiama Gino, sa già cosa prendo.", altAnswers: ["Il barista, che si chiama Gino, sa già quello che prendo.", "Il barista, che si chiama Gino, sa già che cosa prendo."], explanation: "\"Che\" between commas adds information." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What I love about my city is the people.", answer: "Quello che amo della mia città sono le persone.", altAnswers: ["Ciò che amo della mia città sono le persone.", "Quello che amo della mia città è la gente."], explanation: "\"Quello che\" = what." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The market where I do my shopping is open on Saturdays.", answer: "Il mercato dove faccio la spesa è aperto il sabato.", altAnswers: ["Il mercato in cui faccio la spesa è aperto il sabato."], explanation: "\"Dove\" for a place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a restaurant I go to with my friends.", answer: "C'è un ristorante in cui vado con i miei amici.", altAnswers: ["C'è un ristorante dove vado con i miei amici.", "C'è un ristorante dove vado con gli amici.", "C'è un ristorante in cui vado con gli amici."], explanation: "\"Andare in\" a place → \"in cui\" or \"dove\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbour I chat with every day is ninety.", answer: "La vicina con cui chiacchiero ogni giorno ha novant'anni.", altAnswers: ["Il vicino con cui chiacchiero ogni giorno ha novant'anni.", "La vicina con cui parlo ogni giorno ha novant'anni.", "Il vicino con cui parlo ogni giorno ha novant'anni."], explanation: "\"Chiacchierare con\" → \"con cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a city that never sleeps.", answer: "È una città che non dorme mai.", explanation: "Subject \"che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bookshop [I'm telling you about] is small.", sentence: "La libreria ___ è piccola.", answer: "di cui ti parlo", explanation: "\"Parlare di\" → \"di cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The square [where] people meet in the evening is beautiful.", sentence: "La piazza ___ la gente si incontra la sera è bellissima.", answer: "dove", altAnswers: ["in cui"], explanation: "\"Dove\" for a place." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The reason [I love] this neighbourhood is the market.", sentence: "Il motivo ___ questo quartiere è il mercato.", answer: "per cui amo", explanation: "\"Il motivo per cui\"." },
      { type: "word-order", prompt: "Put the words in order to say: The park I run in is huge.", words: ["Il", "parco", "in", "cui", "corro", "è", "enorme."], translation: "The park I run in is huge.", explanation: "\"In cui\" right after the noun." },
      { type: "multiple-choice", question: "Which sentence joins \"C'è una pizzeria. Ci vado il venerdì.\" correctly?", options: ["C'è una pizzeria dove vado il venerdì.", "C'è una pizzeria che vado il venerdì.", "C'è una pizzeria cui vado il venerdì.", "C'è una pizzeria chi vado il venerdì."], correctIndex: 0, explanation: "\"Ci vado\" = I go there → \"dove\"." },
      { type: "listen-choose", audio: "La gelateria dove andiamo d'estate è sul lungomare.", question: "Where is the ice-cream shop?", options: ["on the seafront", "in the main square", "next to the station", "in the old town"], correctIndex: 0, explanation: "\"Il lungomare\" = the seafront." },
      { type: "dictation", audio: "Il barista che lavora sotto casa mia si chiama Gino.", explanation: "Subject \"che\"." },
      { type: "speak", text: "Il posto che amo di più è un piccolo bar dove vado ogni mattina.", prompt: "Say it in Italian: The place I love most is a little café where I go every morning.", tip: "\"Di più\" = most: stress on PIÙ.", explanation: "\"Che\" then \"dove\"." },
    ],
  },
  {
    slug: "a2-sound-relatives-at-speed",
    level: "IT-A2",
    number: 10,
    title: "Listening Lab: Long Sentences",
    summary: "Follow longer spoken sentences with che and cui and answer questions about who did what.",
    duration: "15 min",
    sections: [
      {
        heading: "Find the main verb",
        body: [
          "In a long sentence, the relative part sits inside: \"La signora [che abita al terzo piano] è la madre di Luca\". Listen for the main verb (\"è\") to find what the sentence is really saying.",
        ],
        examples: [
          { es: "La signora che abita al terzo piano è la madre di Luca.", en: "The lady who lives on the third floor is Luca's mother." },
          { es: "Il ragazzo con cui sei uscita ieri ha chiamato.", en: "The guy you went out with yesterday called." },
          { es: "Il pacco che aspettavi è arrivato stamattina.", en: "The parcel you were waiting for arrived this morning." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "La signora che abita al terzo piano è la madre di Luca.", question: "Who is Luca's mother?", options: ["the lady on the third floor", "the lady on the ground floor", "Luca's neighbour's mother", "a lady who visits the third floor"], correctIndex: 0, explanation: "Main verb \"è\": the lady is Luca's mother." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The parcel you were waiting for arrived this morning.", answer: "Il pacco che aspettavi è arrivato stamattina.", altAnswers: ["Il pacco che aspettavi è arrivato questa mattina."], explanation: "\"Aspettare\" → \"che\"." },
        ],
      },
      {
        heading: "Who did what?",
        body: [
          "Two people, two verbs: \"Il collega a cui ho prestato la macchina me l'ha restituita rotta\" (the colleague I lent my car to gave it back broken). Keep track: I lent, he gave back.",
        ],
        examples: [
          { es: "Il collega a cui ho prestato la macchina me l'ha restituita rotta.", en: "The colleague I lent my car to gave it back broken." },
          { es: "L'amica da cui sono stata a Napoli mi ha mandato una foto.", en: "The friend I stayed with in Naples sent me a photo." },
          { es: "Il dottore di cui mi hai parlato non accetta nuovi pazienti.", en: "The doctor you told me about isn't taking new patients." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il collega a cui ho prestato la macchina me l'ha restituita rotta.", question: "What happened to the car?", options: ["The colleague gave it back broken.", "The speaker broke the colleague's car.", "The colleague sold it.", "The speaker lent it to a friend who crashed it."], correctIndex: 0, explanation: "\"Me l'ha restituita rotta\" = he gave it back to me broken." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor you told me about isn't taking new patients.", answer: "Il dottore di cui mi hai parlato non accetta nuovi pazienti.", altAnswers: ["Il medico di cui mi hai parlato non accetta nuovi pazienti.", "Il dottore di cui mi hai parlato non prende nuovi pazienti."], explanation: "\"Parlare di\" → \"di cui\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "L'amica da cui sono stata a Napoli mi ha mandato una foto.", question: "Who sent a photo?", options: ["the friend she stayed with in Naples", "a friend she met in Naples", "her friend from Rome", "the friend who visited her"], correctIndex: 0, explanation: "\"Da cui sono stata\" = I stayed at her place." },
      { type: "listen-choose", audio: "Il ristorante in cui abbiamo festeggiato il mio compleanno ha chiuso.", question: "What has closed?", options: ["the restaurant where they celebrated her birthday", "the restaurant they want to try", "the bar near her house", "a restaurant she's never been to"], correctIndex: 0, explanation: "Main verb: \"ha chiuso\"." },
      { type: "dictation", audio: "Il ragazzo con cui sei uscita ieri ha chiamato.", explanation: "\"Con cui\" + main verb \"ha chiamato\"." },
      { type: "dictation", audio: "Quello che mi hai detto è vero.", explanation: "\"Quello che\" = what." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lady who lives on the third floor is Luca's mother.", answer: "La signora che abita al terzo piano è la madre di Luca.", altAnswers: ["La signora che vive al terzo piano è la madre di Luca.", "La signora che abita al terzo piano è la mamma di Luca."], explanation: "Subject \"che\" inside the sentence." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guy you went out with yesterday called. (to a woman)", answer: "Il ragazzo con cui sei uscita ieri ha chiamato.", altAnswers: ["Ha chiamato il ragazzo con cui sei uscita ieri."], explanation: "\"Con cui\"; main verb \"ha chiamato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The friend I stayed with in Naples sent me a photo. (a woman speaking)", answer: "L'amica da cui sono stata a Napoli mi ha mandato una foto.", altAnswers: ["L'amico da cui sono stata a Napoli mi ha mandato una foto."], explanation: "\"Da cui\" = at whose place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colleague I lent my car to gave it back broken.", answer: "Il collega a cui ho prestato la macchina me l'ha restituita rotta.", altAnswers: ["La collega a cui ho prestato la macchina me l'ha restituita rotta.", "Il collega a cui ho prestato la macchina me l'ha ridata rotta."], explanation: "\"A cui\"; \"restituita\" agrees with \"la macchina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant where we celebrated my birthday has closed.", answer: "Il ristorante in cui abbiamo festeggiato il mio compleanno ha chiuso.", altAnswers: ["Il ristorante dove abbiamo festeggiato il mio compleanno ha chiuso.", "Ha chiuso il ristorante in cui abbiamo festeggiato il mio compleanno."], explanation: "\"In cui\" or \"dove\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film [we talked about] is on tonight.", sentence: "Il film ___ è in tv stasera.", answer: "di cui abbiamo parlato", explanation: "\"Parlare di\" → \"di cui\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The keys [you were looking for] were in the car.", sentence: "Le chiavi ___ erano in macchina.", answer: "che cercavi", altAnswers: ["che stavi cercando"], explanation: "\"Cercare\" → \"che\"." },
      { type: "word-order", prompt: "Put the words in order to say: The parcel you were waiting for has arrived.", words: ["Il", "pacco", "che", "aspettavi", "è", "arrivato."], translation: "The parcel you were waiting for has arrived.", explanation: "Relative part inside, then the main verb." },
      { type: "speak", text: "La signora che abita al terzo piano è la madre del ragazzo con cui lavoro.", prompt: "Say it in Italian: The lady who lives on the third floor is the mother of the guy I work with.", tip: "Pause slightly after \"piano\", before the main verb \"è\".", explanation: "\"Che\" and \"con cui\" in one sentence." },
    ],
  },
];

export const IT_A2_U19_WRITING: WriteExercise = {
  type: "write",
  prompt: "An Italian friend is coming to visit your town. Write them a message about three places you love and the people you meet there. Join your sentences with che, cui (in cui, con cui, di cui) and dove, and use quello che at least once.",
  minWords: 50,
  maxWords: 100,
  rubric: [
    "Uses che for subjects and direct objects, never leaving it out",
    "Uses preposition + cui (in cui, con cui, di cui, a cui) where the verb needs a preposition",
    "Uses dove for places",
    "Uses quello che for what, at least once",
  ],
  modelAnswer: "Ciao Marco! Quando vieni, ti porto nei posti che amo di più. Prima andiamo al bar dove faccio colazione ogni mattina: la barista, che si chiama Rosa, fa il cappuccino più buono della città. Poi ti faccio vedere il parco in cui corro la domenica con Tom, il collega con cui lavoro. La sera andiamo nella pizzeria di cui ti ho parlato al telefono. Quello che mi piace di questa città è la gente: è molto simpatica. A presto!",
  explanation: "\"I posti che amo\" uses \"che\" as an object; \"il bar dove faccio colazione\" uses \"dove\" for a place. \"Il parco in cui corro\", \"il collega con cui lavoro\" and \"la pizzeria di cui ti ho parlato\" put the preposition before \"cui\". \"Quello che mi piace\" means what I like.",
};
