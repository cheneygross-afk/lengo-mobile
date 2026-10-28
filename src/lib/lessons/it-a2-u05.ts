// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u05.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 5: Describing the Past, the Imperfetto. Forms, essere,
// fare, dire, bere, habits, descriptions, ongoing actions with mentre,
// stress in the imperfetto.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U05: Lesson[] = [
  {
    slug: "a2-imperfetto-forms",
    level: "IT-A2",
    number: 1,
    title: "The Imperfetto: Forms",
    summary: "Build the imperfetto of every regular verb with -vo, -vi, -va, -vamo, -vate, -vano, and learn essere, fare, dire and bere.",
    duration: "15 min",
    sections: [
      {
        heading: "One set of endings",
        body: [
          "The imperfetto is the second past tense: it describes how things were and what used to happen. It's one word, with no auxiliary. Take the infinitive, drop \"-re\" and add \"-vo, -vi, -va, -vamo, -vate, -vano\": \"parla-re\" → \"parlavo\", \"prende-re\" → \"prendevo\", \"dormi-re\" → \"dormivo\".",
          "So the vowel of the infinitive stays: -are verbs have \"-avo\", -ere verbs \"-evo\", -ire verbs \"-ivo\". The -isc- verbs are regular here: \"capivo\", \"finivo\", with no \"-isc-\".",
        ],
        examples: [
          { es: "parlavo, parlavi, parlava", en: "I, you, he / she used to speak / was speaking" },
          { es: "parlavamo, parlavate, parlavano", en: "we, you (plural), they used to speak / were speaking" },
          { es: "Da piccolo prendevo l'autobus per andare a scuola.", en: "As a child I used to take the bus to school." },
          { es: "Dormivamo sempre fino a tardi.", en: "We always used to sleep late." },
          { es: "Non capivo niente.", en: "I didn't understand anything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We always used to sleep late.", answer: "Dormivamo sempre fino a tardi.", altAnswers: ["Noi dormivamo sempre fino a tardi."], explanation: "\"Dormi-\" + \"-vamo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I didn't understand] anything.", sentence: "___ niente.", answer: "Non capivo", altAnswers: ["Io non capivo"], explanation: "\"Capire\" → \"capivo\": no -isc-." },
        ],
      },
      {
        heading: "Essere: ero, eri, era",
        body: [
          "\"Essere\" is the one truly irregular verb: \"ero, eri, era, eravamo, eravate, erano\". It's also one of the most used: \"Ero stanco\" (I was tired), \"Era tardi\" (it was late).",
          "\"Avere\" is regular: \"avevo, avevi, aveva...\". Watch out: \"eravo\" doesn't exist.",
        ],
        examples: [
          { es: "Ero stanca morta.", en: "I was dead tired. (a woman)" },
          { es: "Eravate a casa?", en: "Were you at home? (plural)" },
          { es: "Erano le dieci di sera.", en: "It was ten in the evening." },
          { es: "Avevo un cane che si chiamava Briciola.", en: "I had a dog called Briciola." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Were you at home? (plural)", answer: "Eravate a casa?", altAnswers: ["Voi eravate a casa?"], explanation: "\"Essere\": \"eravate\"." },
          { type: "listen-choose", audio: "Erano le dieci di sera.", question: "What does it mean?", options: ["It was ten in the evening.", "They were ten in the evening.", "It's ten in the evening.", "It was ten in the morning."], correctIndex: 0, explanation: "Clock time in the past: \"erano le dieci\"." },
        ],
      },
      {
        heading: "Fare, dire, bere",
        body: [
          "Three verbs use their old, longer stem: \"fare\" → \"facevo\" (from \"fac-\", as in \"facciamo\"), \"dire\" → \"dicevo\" (as in \"dico\"), \"bere\" → \"bevevo\" (as in \"bevo\"). The endings are regular.",
        ],
        examples: [
          { es: "Cosa facevi a Milano?", en: "What were you doing in Milan?" },
          { es: "Mia nonna diceva sempre così.", en: "My grandmother always used to say that." },
          { es: "Bevevamo il caffè al bar sotto casa.", en: "We used to have coffee at the bar downstairs." },
          { es: "Faceva freddo.", en: "It was cold." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What were you doing in Milan? (to a friend)", answer: "Cosa facevi a Milano?", altAnswers: ["Che cosa facevi a Milano?", "Che facevi a Milano?"], explanation: "\"Fare\" → \"facevi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother always used to say that.", answer: "Mia nonna diceva sempre così.", altAnswers: ["Mia nonna lo diceva sempre."], explanation: "\"Dire\" → \"diceva\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was dead tired. (a woman speaking)", answer: "Ero stanca morta.", altAnswers: ["Io ero stanca morta.", "Ero stanchissima."], explanation: "\"Ero\" + adjective agreeing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I had a dog called Briciola.", answer: "Avevo un cane che si chiamava Briciola.", explanation: "\"Avevo\", \"si chiamava\": both imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was cold.", answer: "Faceva freddo.", explanation: "\"Fare\" → \"faceva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They used to live in Bari.", answer: "Abitavano a Bari.", altAnswers: ["Vivevano a Bari.", "Loro abitavano a Bari."], explanation: "\"-avano\": la-VA-no stress." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We used to have coffee at the bar downstairs.", answer: "Bevevamo il caffè al bar sotto casa.", altAnswers: ["Prendevamo il caffè al bar sotto casa."], explanation: "\"Bere\" → \"bevevamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a child I used to take the bus to school.", answer: "Da piccolo prendevo l'autobus per andare a scuola.", altAnswers: ["Da piccola prendevo l'autobus per andare a scuola.", "Da bambino prendevo l'autobus per andare a scuola.", "Da bambina prendevo l'autobus per andare a scuola."], explanation: "\"Da piccolo / piccola\" = as a child." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You [were] right. (to a friend)", sentence: "___ ragione.", answer: "Avevi", altAnswers: ["Tu avevi"], explanation: "\"Avere ragione\" → \"avevi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [were finishing] their homework.", sentence: "I bambini ___ i compiti.", answer: "finivano", explanation: "\"Finire\" → \"finivano\"." },
      { type: "word-order", prompt: "Put the words in order to say: We were at the seaside with our friends.", words: ["Eravamo", "al", "mare", "con", "gli", "amici."], translation: "We were at the seaside with our friends.", explanation: "\"Eravamo\": essere." },
      { type: "matching", instructions: "Match the infinitive to the imperfetto (io).", pairs: [{ left: "essere", right: "ero" }, { left: "fare", right: "facevo" }, { left: "dire", right: "dicevo" }, { left: "bere", right: "bevevo" }, { left: "avere", right: "avevo" }], explanation: "One irregular, three old stems, one regular." },
      { type: "dictation", audio: "Era tardi e facevamo la cena.", explanation: "\"Era\", \"facevamo\"." },
      { type: "speak", text: "Quando ero piccola, abitavo a Napoli e avevo un gatto.", prompt: "Say it as a woman: When I was little, I lived in Naples and had a cat.", tip: "a-bi-TA-vo, a-VE-vo: stress on the syllable before -vo.", explanation: "Three imperfetto forms." },
    ],
  },
  {
    slug: "a2-imperfetto-habits",
    level: "IT-A2",
    number: 2,
    title: "What You Used to Do",
    summary: "Talk about past habits with the imperfetto: da bambino andavo al mare ogni estate, la domenica mangiavamo dalla nonna.",
    duration: "15 min",
    sections: [
      {
        heading: "Used to and would",
        body: [
          "English has two ways to talk about past habits: I used to go and I would go. Italian has one: the imperfetto. \"Da bambino andavo al mare ogni estate\" (as a child I used to go / I would go to the seaside every summer).",
          "Never translate used to word by word: \"usavo\" is not Italian for this. The ending of the verb carries the whole idea.",
        ],
        examples: [
          { es: "Da bambino andavo al mare ogni estate.", en: "As a child I used to go to the seaside every summer." },
          { es: "La domenica mangiavamo dalla nonna.", en: "On Sundays we would eat at Grandma's." },
          { es: "Mio padre lavorava in fabbrica.", en: "My father used to work in a factory." },
          { es: "Giocavi a calcio da ragazzo?", en: "Did you use to play football as a boy?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays we would eat at Grandma's.", answer: "La domenica mangiavamo dalla nonna.", altAnswers: ["La domenica pranzavamo dalla nonna.", "Mangiavamo dalla nonna la domenica."], explanation: "A habit: imperfetto; \"la domenica\" = on Sundays." },
          { type: "multiple-choice", question: "My father used to work in a factory. Which is right?", options: ["Mio padre lavorava in fabbrica.", "Mio padre usava lavorare in fabbrica.", "Mio padre ha lavorato sempre in fabbrica ogni giorno.", "Mio padre lavorovo in fabbrica."], correctIndex: 0, explanation: "Used to = imperfetto, not \"usare\"." },
        ],
      },
      {
        heading: "Signal words",
        body: [
          "Habits come with frequency words: \"sempre\", \"di solito\" (usually), \"spesso\", \"ogni giorno\", \"ogni anno\", \"tutti i giorni\", \"il sabato\", \"d'estate\" (in summer). When you see them in a past story, think imperfetto.",
          "\"Da bambino / bambina\", \"da piccolo / piccola\", \"da ragazzo / ragazza\" (as a young man / woman) set the period: they agree with the speaker.",
        ],
        examples: [
          { es: "Di solito andavamo a scuola a piedi.", en: "We usually walked to school." },
          { es: "D'estate dormivamo con le finestre aperte.", en: "In summer we slept with the windows open." },
          { es: "Da ragazza leggevo tantissimo.", en: "As a young woman I read a lot." },
          { es: "Ogni anno facevamo una festa in cortile.", en: "Every year we had a party in the courtyard." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We usually walked to school.", answer: "Di solito andavamo a scuola a piedi.", altAnswers: ["Andavamo di solito a scuola a piedi.", "Di solito andavamo a piedi a scuola."], explanation: "\"Di solito\" signals a habit." },
          { type: "listen-choose", audio: "D'estate dormivamo con le finestre aperte.", question: "When did they sleep with the windows open?", options: ["in summer", "in winter", "every night of the year", "last summer only"], correctIndex: 0, explanation: "\"D'estate\" = in summer, as a habit." },
        ],
      },
      {
        heading: "Then and now",
        body: [
          "To contrast a past habit with now, use \"una volta\" (once, in the old days) or \"prima\" (before) with the imperfetto, and \"adesso\" or \"ora\" with the present: \"Prima fumavo, adesso non fumo più\" (I used to smoke, now I don't any more).",
        ],
        examples: [
          { es: "Prima fumavo, adesso non fumo più.", en: "I used to smoke, now I don't any more." },
          { es: "Una volta qui c'era un cinema.", en: "There used to be a cinema here." },
          { es: "Prima abitavo in centro, ora abito in periferia.", en: "I used to live in the centre, now I live on the outskirts." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There used to be a cinema here.", answer: "Una volta qui c'era un cinema.", altAnswers: ["Qui una volta c'era un cinema.", "Prima qui c'era un cinema.", "Qui c'era un cinema."], explanation: "\"C'è\" → \"c'era\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I used to smoke], now I don't any more.", sentence: "___, adesso non fumo più.", answer: "Prima fumavo", altAnswers: ["Una volta fumavo", "Fumavo"], explanation: "Past habit vs present." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a child I used to go to the seaside every summer. (a man speaking)", answer: "Da bambino andavo al mare ogni estate.", altAnswers: ["Da piccolo andavo al mare ogni estate.", "Da bambino andavo al mare tutte le estati."], explanation: "Habit: \"andavo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you use to play football as a boy?", answer: "Giocavi a calcio da ragazzo?", altAnswers: ["Da ragazzo giocavi a calcio?", "Tu giocavi a calcio da ragazzo?"], explanation: "\"Giocavi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a young woman I read a lot.", answer: "Da ragazza leggevo tantissimo.", altAnswers: ["Da ragazza leggevo molto.", "Da ragazza leggevo tanto."], explanation: "\"Leggevo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every year we had a party in the courtyard.", answer: "Ogni anno facevamo una festa in cortile.", altAnswers: ["Ogni anno facevamo una festa nel cortile.", "Tutti gli anni facevamo una festa in cortile."], explanation: "\"Facevamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I used to live in the centre, now I live on the outskirts.", answer: "Prima abitavo in centro, ora abito in periferia.", altAnswers: ["Prima abitavo in centro, adesso abito in periferia.", "Una volta abitavo in centro, ora abito in periferia."], explanation: "Imperfetto, then present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandparents always went to bed early.", answer: "I miei nonni andavano sempre a letto presto.", explanation: "\"Andavano\": an-DA-va-no, stressed like \"andavo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Saturdays [we would watch] a film together.", sentence: "Il sabato ___ un film insieme.", answer: "guardavamo", altAnswers: ["vedevamo"], explanation: "Habit: imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My mother [used to make] bread at home.", sentence: "Mia madre ___ il pane in casa.", answer: "faceva", explanation: "\"Fare\" → \"faceva\"." },
      { type: "word-order", prompt: "Put the words in order to say: In summer we often went to the mountains.", words: ["D'estate", "andavamo", "spesso", "in", "montagna."], translation: "In summer we often went to the mountains.", explanation: "Habit + \"spesso\"." },
      { type: "multiple-choice", question: "\"La domenica andavamo in chiesa.\" What does it mean?", options: ["On Sundays we used to go to church.", "On Sunday we went to church.", "On Sundays we go to church.", "We will go to church on Sunday."], correctIndex: 0, explanation: "\"La domenica\" + imperfetto = a repeated past habit." },
      { type: "dictation", audio: "Da piccola andavo a scuola a piedi con mio fratello.", explanation: "\"Andavo\", habit." },
      { type: "speak", text: "Da bambino abitavo in campagna. Ogni mattina andavo a scuola in bici e il pomeriggio giocavo con i miei amici.", prompt: "Tell your childhood, as a man: As a child I lived in the countryside. Every morning I'd cycle to school and in the afternoon I'd play with my friends.", tip: "Habits: every verb in the imperfetto.", explanation: "Four habits in the imperfetto." },
    ],
  },
  {
    slug: "a2-imperfetto-descriptions",
    level: "IT-A2",
    number: 3,
    title: "Describing the Past",
    summary: "Describe people, places, weather, age, time and feelings in the past: era alto, faceva caldo, avevo dieci anni, erano le sette.",
    duration: "15 min",
    sections: [
      {
        heading: "People and places",
        body: [
          "Descriptions of the past use the imperfetto: what someone looked like, what a place was like. \"Mio nonno era alto e aveva i baffi\" (my grandfather was tall and had a moustache). \"La casa era piccola, ma aveva un giardino\".",
          "Think of the imperfetto as the paint of the background: it tells you how things were, not what happened next.",
        ],
        examples: [
          { es: "Mio nonno era alto e aveva i baffi.", en: "My grandfather was tall and had a moustache." },
          { es: "Era una casa piccola, ma aveva un giardino.", en: "It was a small house, but it had a garden." },
          { es: "La maestra era molto severa.", en: "The teacher was very strict." },
          { es: "Il paese aveva solo una piazza e una chiesa.", en: "The village only had a square and a church." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandfather was tall and had a moustache.", answer: "Mio nonno era alto e aveva i baffi.", explanation: "Description: \"era\", \"aveva\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher was very strict.", answer: "La maestra era molto severa.", altAnswers: ["Il maestro era molto severo.", "La professoressa era molto severa.", "Il professore era molto severo."], explanation: "\"Era\" + adjective." },
        ],
      },
      {
        heading: "Weather, age, time",
        body: [
          "Weather: \"faceva caldo / freddo\", \"pioveva\", \"c'era il sole\", \"c'era nebbia\" (it was foggy). Age uses \"avere\": \"Avevo dieci anni\" (I was ten). Never \"ero dieci anni\".",
          "Clock time uses \"essere\": \"Era l'una\", \"Erano le sette\". These are always imperfetto when you set a scene.",
        ],
        examples: [
          { es: "Faceva caldo e c'era il sole.", en: "It was hot and sunny." },
          { es: "Pioveva da tre giorni.", en: "It had been raining for three days." },
          { es: "Avevo dieci anni.", en: "I was ten." },
          { es: "Erano le sette di mattina.", en: "It was seven in the morning." },
          { es: "C'era nebbia in Pianura Padana.", en: "It was foggy in the Po Valley." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was ten.", answer: "Avevo dieci anni.", altAnswers: ["Io avevo dieci anni.", "Avevo 10 anni."], explanation: "Age uses \"avere\": \"avevo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was hot and sunny.", answer: "Faceva caldo e c'era il sole.", explanation: "\"Faceva\", \"c'era\"." },
          { type: "listen-choose", audio: "Erano le sette di mattina.", question: "What time was it?", options: ["seven in the morning", "seven in the evening", "eleven in the morning", "seven at night"], correctIndex: 0, explanation: "\"Di mattina\" = in the morning." },
        ],
      },
      {
        heading: "Feelings and states",
        body: [
          "Feelings, moods and physical states also go in the imperfetto: \"Ero stanco\", \"Avevo fame\", \"Ero contenta\", \"Non stavo bene\". So do wants and knowledge as states: \"Volevo un gelato\", \"Sapevo la risposta\".",
        ],
        examples: [
          { es: "Ero stanco e avevo fame.", en: "I was tired and hungry." },
          { es: "Giulia non stava bene.", en: "Giulia wasn't well." },
          { es: "Volevamo solo dormire.", en: "We only wanted to sleep." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was tired and hungry. (a man speaking)", answer: "Ero stanco e avevo fame.", altAnswers: ["Io ero stanco e avevo fame."], explanation: "\"Avere fame\" → \"avevo fame\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Giulia [wasn't well].", sentence: "Giulia ___.", answer: "non stava bene", explanation: "\"Stare bene\" → \"stava\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a small house, but it had a garden.", answer: "Era una casa piccola, ma aveva un giardino.", altAnswers: ["Era una piccola casa, ma aveva un giardino."], explanation: "\"Era\", \"aveva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was raining.", answer: "Pioveva.", explanation: "\"Piovere\" → \"pioveva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was one o'clock.", answer: "Era l'una.", explanation: "\"L'una\" is singular: \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We only wanted to sleep.", answer: "Volevamo solo dormire.", altAnswers: ["Volevamo soltanto dormire.", "Noi volevamo solo dormire."], explanation: "A wish as a state: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister had long hair.", answer: "Mia sorella aveva i capelli lunghi.", explanation: "\"I capelli\" is plural in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The streets were empty.", answer: "Le strade erano vuote.", altAnswers: ["Le vie erano vuote."], explanation: "\"Erano\" + \"vuote\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It was foggy] in the Po Valley.", sentence: "___ in Pianura Padana.", answer: "C'era nebbia", altAnswers: ["C'era la nebbia"], explanation: "\"C'era\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My parents [were happy].", sentence: "I miei genitori ___.", answer: "erano contenti", altAnswers: ["erano felici"], explanation: "\"Erano\" + plural adjective." },
      { type: "word-order", prompt: "Put the words in order to say: It was late and the children were sleeping.", words: ["Era", "tardi", "e", "i", "bambini", "dormivano."], translation: "It was late and the children were sleeping.", explanation: "Two background descriptions." },
      { type: "multiple-choice", question: "I was twenty. Which is right?", options: ["Avevo vent'anni.", "Ero vent'anni.", "Ho avuto vent'anni.", "Ero di vent'anni anni."], correctIndex: 0, explanation: "Age with \"avere\"." },
      { type: "dictation", audio: "Faceva freddo, c'era la neve ed eravamo felici.", explanation: "\"Ed\" before \"eravamo\"." },
      { type: "speak", text: "Mia nonna era piccola e aveva gli occhi azzurri. Era sempre allegra.", prompt: "Describe your grandmother: She was small and had blue eyes. She was always cheerful.", tip: "\"Azzurri\": double z.", explanation: "Three descriptions in the imperfetto." },
    ],
  },
  {
    slug: "a2-imperfetto-ongoing",
    level: "IT-A2",
    number: 4,
    title: "What Was Going On: Mentre",
    summary: "Describe actions in progress in the past with mentre and the imperfetto, and preview stavo leggendo.",
    duration: "15 min",
    sections: [
      {
        heading: "Was doing",
        body: [
          "English I was cooking is an action in progress at a moment in the past. Italian uses the imperfetto: \"Cucinavo\". \"Alle otto cucinavo\" = at eight I was cooking.",
          "\"Mentre\" (while) links two actions going on at the same time, both in the imperfetto: \"Mentre cucinavo, ascoltavo la radio\" (while I was cooking, I was listening to the radio).",
        ],
        examples: [
          { es: "Alle otto cucinavo.", en: "At eight I was cooking." },
          { es: "Mentre cucinavo, ascoltavo la radio.", en: "While I was cooking, I was listening to the radio." },
          { es: "Mentre Marco leggeva, i bambini giocavano.", en: "While Marco was reading, the children were playing." },
          { es: "Cosa facevi ieri alle nove?", en: "What were you doing at nine yesterday?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While I was cooking, I was listening to the radio.", answer: "Mentre cucinavo, ascoltavo la radio.", altAnswers: ["Ascoltavo la radio mentre cucinavo."], explanation: "Two simultaneous actions: both imperfetto." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What were you doing at nine yesterday? (to a friend)", answer: "Cosa facevi ieri alle nove?", altAnswers: ["Che cosa facevi ieri alle nove?", "Ieri alle nove cosa facevi?"], explanation: "In progress at a moment: \"facevi\"." },
        ],
      },
      {
        heading: "Stavo leggendo",
        body: [
          "To stress that something was in progress right then, Italian also has \"stare\" in the imperfetto + gerund: \"stavo leggendo\" (I was reading), \"stavamo mangiando\". The gerund: -are → \"-ando\", -ere and -ire → \"-endo\".",
          "This is a preview: the plain imperfetto (\"leggevo\") is always correct too. Use \"stavo\" + gerund for a single moment, not for habits.",
        ],
        examples: [
          { es: "Stavo leggendo quando hai chiamato.", en: "I was reading when you called." },
          { es: "Stavamo mangiando.", en: "We were eating." },
          { es: "Cosa stavi facendo?", en: "What were you doing?" },
          { es: "Stavano dormendo tutti.", en: "Everyone was sleeping." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were eating.", answer: "Stavamo mangiando.", altAnswers: ["Mangiavamo.", "Noi stavamo mangiando."], explanation: "\"Stavamo\" + gerund, or simply \"mangiavamo\"." },
          { type: "listen-choose", audio: "Stavano dormendo tutti.", question: "What does it mean?", options: ["Everyone was sleeping.", "Everyone used to sleep.", "Everyone is sleeping.", "Everyone slept well."], correctIndex: 0, explanation: "\"Stavano dormendo\": in progress in the past." },
        ],
      },
      {
        heading: "Background for a story",
        body: [
          "Ongoing actions set the scene: \"Era sabato. Pioveva. Io leggevo sul divano e mia sorella guardava la TV.\" Nothing has happened yet: the imperfetto is waiting for an event, which comes in Unit 6.",
        ],
        examples: [
          { es: "Era sabato e pioveva.", en: "It was Saturday and it was raining." },
          { es: "Io leggevo sul divano.", en: "I was reading on the sofa." },
          { es: "Mia sorella guardava la TV.", en: "My sister was watching TV." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was Saturday and it was raining.", answer: "Era sabato e pioveva.", explanation: "Two background facts." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My sister [was watching] TV.", sentence: "Mia sorella ___ la TV.", answer: "guardava", altAnswers: ["stava guardando"], explanation: "In progress: imperfetto." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At eight I was cooking.", answer: "Alle otto cucinavo.", altAnswers: ["Alle otto stavo cucinando."], explanation: "In progress at a moment." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While Marco was reading, the children were playing.", answer: "Mentre Marco leggeva, i bambini giocavano.", altAnswers: ["I bambini giocavano mentre Marco leggeva."], explanation: "\"Mentre\" + two imperfetto verbs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What were you doing? (plural)", answer: "Cosa stavate facendo?", altAnswers: ["Cosa facevate?", "Che cosa stavate facendo?", "Che cosa facevate?"], explanation: "\"Stavate\" + gerund or \"facevate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was reading on the sofa.", answer: "Leggevo sul divano.", altAnswers: ["Stavo leggendo sul divano.", "Io leggevo sul divano."], explanation: "\"Leggevo\" or \"stavo leggendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While we were walking, we were talking about work.", answer: "Mentre camminavamo, parlavamo di lavoro.", altAnswers: ["Parlavamo di lavoro mentre camminavamo.", "Mentre camminavamo, parlavamo del lavoro."], explanation: "\"Mentre\" + imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everyone [was sleeping].", sentence: "Tutti ___.", answer: "dormivano", altAnswers: ["stavano dormendo"], explanation: "\"Dormivano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[While] I was studying, my flatmate was singing.", sentence: "___ studiavo, la mia coinquilina cantava.", answer: "Mentre", explanation: "\"Mentre\" = while." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [were writing] an email.", sentence: "___ un'email.", answer: "Stavamo scrivendo", altAnswers: ["Scrivevamo"], explanation: "\"Scrivere\" → \"scrivendo\"." },
      { type: "word-order", prompt: "Put the words in order to say: While she was working, he was cooking.", words: ["Mentre", "lei", "lavorava,", "lui", "cucinava."], translation: "While she was working, he was cooking.", explanation: "Pronouns for contrast." },
      { type: "multiple-choice", question: "\"Mentre leggevo, mio figlio dormiva.\" What does it mean?", options: ["While I was reading, my son was sleeping.", "While I read, my son slept and woke up.", "I read while my son went to sleep.", "When I read, my son sleeps."], correctIndex: 0, explanation: "Two ongoing actions at the same time." },
      { type: "dictation", audio: "Mentre aspettavo l'autobus, leggevo il giornale.", explanation: "\"Mentre\" + two imperfetto verbs." },
      { type: "speak", text: "Ieri alle otto stavo cucinando e mio marito apparecchiava la tavola.", prompt: "Say it in Italian: Yesterday at eight I was cooking and my husband was laying the table.", tip: "sta-vo cu-ci-NAN-do: stress the gerund ending.", explanation: "Two actions in progress." },
    ],
  },
  {
    slug: "a2-drill-imperfetto-forms",
    level: "IT-A2",
    number: 5,
    title: "Drill: Imperfetto Forms",
    summary: "Produce forty verbs in the imperfetto, in every person, including essere, fare, dire and bere.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "-avo, -evo, -ivo",
        body: [
          "Infinitive minus \"-re\" + \"-vo, -vi, -va, -vamo, -vate, -vano\". \"Essere\": \"ero, eri, era, eravamo, eravate, erano\". Old stems: \"facevo, dicevo, bevevo\". Also: \"tradurre\" → \"traducevo\".",
        ],
        examples: [
          { es: "Scrivevi molte lettere?", en: "Did you use to write a lot of letters?" },
          { es: "Uscivamo ogni venerdì.", en: "We used to go out every Friday." },
          { es: "Sapevate la verità?", en: "Did you know the truth?" },
          { es: "Venivano spesso a trovarci.", en: "They often came to visit us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We used to go out every Friday.", answer: "Uscivamo ogni venerdì.", altAnswers: ["Uscivamo tutti i venerdì.", "Il venerdì uscivamo sempre.", "Noi uscivamo ogni venerdì."], explanation: "\"Uscire\" → \"uscivamo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you know the truth? (plural)", answer: "Sapevate la verità?", altAnswers: ["Voi sapevate la verità?"], explanation: "\"Sapere\" → \"sapevate\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I used to work in a bank.", answer: "Lavoravo in banca.", altAnswers: ["Lavoravo in una banca.", "Io lavoravo in banca."], explanation: "\"Lavoravo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You were always late. (to a friend)", answer: "Eri sempre in ritardo.", altAnswers: ["Tu eri sempre in ritardo.", "Arrivavi sempre in ritardo."], explanation: "\"Essere\" → \"eri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She used to drink a lot of tea.", answer: "Beveva molto tè.", altAnswers: ["Lei beveva molto tè.", "Beveva tanto tè."], explanation: "\"Bere\" → \"beveva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We used to go dancing every Saturday.", answer: "Andavamo a ballare ogni sabato.", altAnswers: ["Andavamo a ballare tutti i sabati.", "Il sabato andavamo a ballare.", "Noi andavamo a ballare ogni sabato."], explanation: "\"Andavamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What were you saying? (plural)", answer: "Cosa dicevate?", altAnswers: ["Che cosa dicevate?", "Che dicevate?"], explanation: "\"Dire\" → \"dicevate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They often came to visit us.", answer: "Venivano spesso a trovarci.", altAnswers: ["Spesso venivano a trovarci."], explanation: "\"Venire\" → \"venivano\": ve-NI-va-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't know.", answer: "Non sapevo.", altAnswers: ["Io non sapevo.", "Non lo sapevo."], explanation: "\"Sapevo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you use to write a lot of letters? (to a friend)", answer: "Scrivevi molte lettere?", altAnswers: ["Tu scrivevi molte lettere?", "Scrivevi tante lettere?"], explanation: "\"Scrivevi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shops closed at seven.", answer: "I negozi chiudevano alle sette.", explanation: "A regular past schedule: \"chiudevano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were very young.", answer: "Eravamo molto giovani.", altAnswers: ["Noi eravamo molto giovani."], explanation: "\"Eravamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My brother used to play the guitar.", answer: "Mio fratello suonava la chitarra.", explanation: "\"Suonare\" = to play an instrument." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You were doing the right thing. (plural)", answer: "Facevate la cosa giusta.", altAnswers: ["Voi facevate la cosa giusta."], explanation: "\"Fare\" → \"facevate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I preferred] the sea.", sentence: "___ il mare.", answer: "Preferivo", altAnswers: ["Io preferivo"], explanation: "No -isc- in the imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you] see the sea from the window? (to a friend)", sentence: "___ vedere il mare dalla finestra?", answer: "Potevi", altAnswers: ["Tu potevi"], explanation: "\"Potere\" → \"potevi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [had to] tidy their room.", sentence: "I bambini ___ mettere in ordine la camera.", answer: "dovevano", explanation: "\"Dovere\" → \"dovevano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The film [was] long.", sentence: "Il film ___ lungo.", answer: "era", explanation: "\"Era\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They were] in Rome for work.", sentence: "___ a Roma per lavoro.", answer: "Erano", altAnswers: ["Loro erano"], explanation: "\"Erano\": not \"eravano\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "dicevamo", right: "we were saying" }, { left: "bevevi", right: "you used to drink" }, { left: "eravate", right: "you (plural) were" }, { left: "facevano", right: "they were doing" }, { left: "ero", right: "I was" }], explanation: "Irregular stems, regular endings." },
      { type: "dictation", audio: "Eravamo giovani e uscivamo tutte le sere.", explanation: "\"Eravamo\", \"uscivamo\"." },
      { type: "dictation", audio: "Cosa facevi? Leggevo e bevevo un tè.", explanation: "\"Facevi\", \"leggevo\", \"bevevo\"." },
      { type: "speak", text: "Ero, eri, era, eravamo, eravate, erano.", prompt: "Say the imperfetto of essere.", tip: "e-RA-va-mo, e-RA-va-te, E-ra-no.", explanation: "The one fully irregular verb." },
    ],
  },
  {
    slug: "a2-sound-imperfetto-stress",
    level: "IT-A2",
    number: 6,
    title: "Sounds: Stress in the Imperfetto",
    summary: "Stress the imperfetto correctly: parLAvo vs PARlo, parlaVAmo, parLAvano, and write what you hear.",
    duration: "15 min",
    sections: [
      {
        heading: "The stress sits on the -va-",
        body: [
          "In the present, \"parlo\" is stressed on the stem: PAR-lo. In the imperfetto the stress moves to the vowel before \"-v\": par-LA-vo, par-LA-vi, par-LA-va. That shift is how you hear the difference between present and past.",
          "In \"noi\" and \"voi\" the stress moves one step right: par-la-VA-mo, par-la-VA-te. In \"loro\" it goes back: par-LA-va-no, never par-la-VA-no.",
        ],
        examples: [
          { es: "Parlo. / Parlavo.", en: "I speak. / I used to speak." },
          { es: "Parlavamo sempre in italiano.", en: "We always used to speak Italian." },
          { es: "Parlavano troppo.", en: "They used to talk too much." },
          { es: "Prendevate il treno?", en: "Did you use to take the train?" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Parlavo.", question: "What did you hear?", options: ["Parlavo.", "Parlo.", "Parlava.", "Parlavano."], correctIndex: 0, explanation: "par-LA-vo: imperfetto, I." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We always used to speak Italian.", answer: "Parlavamo sempre in italiano.", altAnswers: ["Parlavamo sempre italiano.", "Noi parlavamo sempre in italiano."], explanation: "par-la-VA-mo." },
        ],
      },
      {
        heading: "-evano, -ivano",
        body: [
          "The same pattern holds for every verb: pren-DE-vo, pren-de-VA-mo, pren-DE-va-no; dor-MI-vo, dor-mi-VA-te, dor-MI-va-no; E-ro, e-RA-va-mo, E-ra-no. Stress the syllable before \"-vano\" in loro.",
        ],
        examples: [
          { es: "Dormivano in tenda.", en: "They used to sleep in a tent." },
          { es: "Prendevano sempre il caffè al bar.", en: "They always had coffee at the bar." },
          { es: "Erano amici.", en: "They were friends." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Dormivano in tenda.", question: "Who used to sleep in a tent?", options: ["they", "we", "you (plural)", "he"], correctIndex: 0, explanation: "dor-MI-va-no: loro." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They were friends.", answer: "Erano amici.", altAnswers: ["Loro erano amici.", "Erano amiche."], explanation: "E-ra-no." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They used to talk too much.", answer: "Parlavano troppo.", altAnswers: ["Loro parlavano troppo."], explanation: "par-LA-va-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you use to take the train? (plural)", answer: "Prendevate il treno?", altAnswers: ["Voi prendevate il treno?"], explanation: "pren-de-VA-te." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They always had coffee at the bar.", answer: "Prendevano sempre il caffè al bar.", altAnswers: ["Bevevano sempre il caffè al bar."], explanation: "pren-DE-va-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We used to live in Turin.", answer: "Abitavamo a Torino.", altAnswers: ["Vivevamo a Torino.", "Noi abitavamo a Torino."], explanation: "a-bi-ta-VA-mo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandparents [used to sing] together.", sentence: "I miei nonni ___ insieme.", answer: "cantavano", explanation: "can-TA-va-no." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You used to finish] at five. (plural)", sentence: "___ alle cinque.", answer: "Finivate", altAnswers: ["Voi finivate"], explanation: "fi-ni-VA-te." },
      { type: "listen-choose", audio: "Lavoriamo.", question: "What did you hear?", options: ["Lavoriamo.", "Lavoravamo.", "Lavoravano.", "Lavorano."], correctIndex: 0, explanation: "Present, la-vo-RIA-mo: no -va-." },
      { type: "listen-choose", audio: "Lavoravamo.", question: "Is it present or past?", options: ["past (we used to work)", "present (we work)", "past (they used to work)", "present (they work)"], correctIndex: 0, explanation: "la-vo-ra-VA-mo: imperfetto, noi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They used to dance every Saturday.", answer: "Ballavano ogni sabato.", altAnswers: ["Ballavano tutti i sabati.", "Il sabato ballavano.", "Loro ballavano ogni sabato."], explanation: "bal-LA-va-no: stress before -vano." },
      { type: "dictation", audio: "Parlavamo e ridevamo tutta la sera.", explanation: "Two noi forms." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boys were playing and the girls were singing.", answer: "I ragazzi giocavano e le ragazze cantavano.", explanation: "gio-CA-va-no, can-TA-va-no." },
      { type: "speak", text: "Parlavo, parlavi, parlava, parlavamo, parlavate, parlavano.", prompt: "Say the imperfetto of parlare with the right stress.", tip: "par-LA-vo ... par-la-VA-mo, par-la-VA-te, par-LA-va-no.", explanation: "The stress moves only in noi and voi." },
    ],
  },
  {
    slug: "a2-dialogue-lab-childhood",
    level: "IT-A2",
    number: 7,
    title: "Dialogue Lab: When We Were Kids",
    summary: "A grandmother in Napoli tells her granddaughter about the old days: com'era la città?, cosa facevate la sera?, non c'era la televisione.",
    duration: "15 min",
    sections: [
      {
        heading: "Com'era la città?",
        body: [
          "Sofia, 16, interviews her nonna Rosa for a school project on Napoli in the 1960s. Her questions use the imperfetto because she's asking how things were: \"Com'era la città quando eri piccola?\".",
          "Nonna Rosa describes: \"Era più tranquilla. C'erano meno macchine e tutti si conoscevano\" (everyone knew each other).",
        ],
        examples: [
          { es: "Nonna, com'era Napoli quando eri piccola?", en: "Grandma, what was Naples like when you were little?" },
          { es: "Era più tranquilla. C'erano meno macchine.", en: "It was quieter. There were fewer cars." },
          { es: "Tutti si conoscevano nel quartiere.", en: "Everyone knew each other in the neighbourhood." },
          { es: "Abitavamo in un vicolo vicino al porto.", en: "We lived in an alley near the port." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma, what was Naples like when you were little?", answer: "Nonna, com'era Napoli quando eri piccola?", altAnswers: ["Nonna, come era Napoli quando eri piccola?"], explanation: "\"Com'era?\" = what was it like?" },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was quieter. [There were] fewer cars.", sentence: "Era più tranquilla. ___ meno macchine.", answer: "C'erano", explanation: "\"Ci sono\" → \"c'erano\"." },
        ],
      },
      {
        heading: "Cosa facevate la sera?",
        body: [
          "\"E cosa facevate la sera?\" Nonna Rosa: \"Non c'era la televisione in casa. Andavamo dai vicini a guardarla, oppure giocavamo a carte\". Habits: all imperfetto.",
        ],
        examples: [
          { es: "Cosa facevate la sera?", en: "What did you use to do in the evenings?" },
          { es: "Non c'era la televisione in casa.", en: "There was no television at home." },
          { es: "Andavamo dai vicini a guardarla.", en: "We'd go to the neighbours' to watch it." },
          { es: "Oppure giocavamo a carte in cortile.", en: "Or we'd play cards in the courtyard." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did you use to do in the evenings? (plural)", answer: "Cosa facevate la sera?", altAnswers: ["Che cosa facevate la sera?", "Che facevate la sera?"], explanation: "Habit: \"facevate\"." },
          { type: "listen-choose", audio: "Non c'era la televisione in casa.", question: "What did they not have at home?", options: ["a television", "a radio", "a telephone", "a car"], correctIndex: 0, explanation: "\"Non c'era la televisione\"." },
        ],
      },
      {
        heading: "School and food",
        body: [
          "Sofia asks about school: \"Ti piaceva la scuola?\" (did you like school?). With the imperfetto, \"piacere\" describes a lasting liking: \"Mi piaceva molto, ma la maestra era severa\". \"Mangiavate la pizza?\" \"Sì, ma solo la domenica!\".",
        ],
        examples: [
          { es: "Ti piaceva la scuola?", en: "Did you like school?" },
          { es: "Mi piaceva, ma la maestra era severa.", en: "I liked it, but the teacher was strict." },
          { es: "La pizza la mangiavamo solo la domenica.", en: "We only ate pizza on Sundays." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you like school? (to your grandmother)", answer: "Ti piaceva la scuola?", altAnswers: ["La scuola ti piaceva?"], explanation: "A lasting liking: \"piaceva\"." },
          { type: "multiple-choice", question: "Nonna Rosa liked the summers. What does she say?", options: ["Mi piacevano le estati.", "Mi piaceva le estati.", "Mi piacevo le estati.", "Mi sono piaciuta le estati."], correctIndex: 0, explanation: "Plural subject: \"piacevano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone knew each other in the neighbourhood.", answer: "Tutti si conoscevano nel quartiere.", altAnswers: ["Nel quartiere tutti si conoscevano."], explanation: "\"Si conoscevano\" = knew each other." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We lived in an alley near the port.", answer: "Abitavamo in un vicolo vicino al porto.", altAnswers: ["Vivevamo in un vicolo vicino al porto."], explanation: "\"Abitavamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was no television at home.", answer: "Non c'era la televisione in casa.", altAnswers: ["In casa non c'era la televisione.", "Non avevamo la televisione."], explanation: "\"C'era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I liked it, but the teacher was strict.", answer: "Mi piaceva, ma la maestra era severa.", altAnswers: ["Mi piaceva, però la maestra era severa."], explanation: "\"Piaceva\", \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We only ate pizza on Sundays.", answer: "Mangiavamo la pizza solo la domenica.", altAnswers: ["La pizza la mangiavamo solo la domenica."], explanation: "Habit: \"mangiavamo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Or [we'd play] cards in the courtyard.", sentence: "Oppure ___ a carte in cortile.", answer: "giocavamo", explanation: "\"Giocavamo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What was] your house [like]?", sentence: "___ la tua casa?", answer: "Com'era", altAnswers: ["Come era"], explanation: "\"Com'era\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My father [used to work] at the port.", sentence: "Mio padre ___ al porto.", answer: "lavorava", explanation: "\"Lavorava\"." },
      { type: "word-order", prompt: "Put the words in order to say: When I was little, there were fewer cars.", words: ["Quando", "ero", "piccola,", "c'erano", "meno", "macchine."], translation: "When I was little, there were fewer cars.", explanation: "\"Ero\", \"c'erano\"." },
      { type: "multiple-choice", question: "Sofia wants to know what the neighbourhood was like. What does she ask?", options: ["Com'era il quartiere?", "Com'è stato il quartiere?", "Come eri il quartiere?", "Cosa faceva il quartiere?"], correctIndex: 0, explanation: "\"Com'era?\" asks for a description." },
      { type: "dictation", audio: "Non c'era la televisione e giocavamo a carte.", explanation: "\"C'era\", \"giocavamo\"." },
      { type: "speak", text: "Quando ero piccolo, la città era più tranquilla e la sera giocavamo in strada.", prompt: "Tell your grandchild, as a man: When I was little, the city was quieter and in the evening we played in the street.", tip: "Every verb describes or repeats: imperfetto.", explanation: "Description and habit." },
    ],
  },
  {
    slug: "a2-error-hunt-imperfetto",
    level: "IT-A2",
    number: 8,
    title: "Error Hunt: The Imperfetto",
    summary: "Fix ero dieci anni, faceva il bel tempo e ho fatto caldo, a habit in the passato prossimo, and eravo.",
    duration: "15 min",
    sections: [
      {
        heading: "Age and forms",
        body: [
          "\"Ero dieci anni\" copies English I was ten: Italian uses \"avere\", \"Avevo dieci anni\". \"Eravo\" mixes two forms: it's \"ero\". \"Facevo\" not \"favo\", \"dicevo\" not \"divo\".",
        ],
        examples: [
          { es: "Avevo dieci anni.", en: "I was ten." },
          { es: "Ero a casa.", en: "I was at home." },
          { es: "Dicevi sempre la verità.", en: "You always told the truth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ero dieci anni.\" Write it correctly: I was ten.", source: "I was ten.", answer: "Avevo dieci anni.", altAnswers: ["Io avevo dieci anni.", "Avevo 10 anni."], explanation: "Age with \"avere\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Eravo a casa.\" Write it correctly: I was at home.", source: "I was at home.", answer: "Ero a casa.", altAnswers: ["Io ero a casa."], explanation: "\"Essere\": \"ero\"." },
        ],
      },
      {
        heading: "Weather and habits",
        body: [
          "\"Faceva il bel tempo e ho fatto caldo\" has two slips: the weather is \"faceva bel tempo\" (no article in this phrase) and it's the weather that was hot, not you: \"faceva caldo\". Background weather is imperfetto.",
          "\"Quando ero piccolo, sono andato al mare ogni estate\" uses the event tense for a habit. With \"ogni estate\", it's \"andavo\".",
        ],
        examples: [
          { es: "Faceva bel tempo e faceva caldo.", en: "The weather was nice and it was hot." },
          { es: "Quando ero piccolo, andavo al mare ogni estate.", en: "When I was little, I went to the seaside every summer." },
          { es: "Il sabato pulivamo la casa.", en: "On Saturdays we cleaned the house." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Faceva il bel tempo e ho fatto caldo.\" Write it correctly: The weather was nice and it was hot.", source: "The weather was nice and it was hot.", answer: "Faceva bel tempo e faceva caldo.", altAnswers: ["C'era bel tempo e faceva caldo."], explanation: "\"Fare bel tempo\", \"fare caldo\": imperfetto for background." },
          { type: "listen-choose", audio: "Quando ero piccolo, andavo al mare ogni estate.", question: "What does it mean?", options: ["When I was little, I went to the seaside every summer.", "When I was little, I went to the seaside one summer.", "When I'm older, I'll go to the seaside every summer.", "I was little when I went to the seaside."], correctIndex: 0, explanation: "\"Andavo\" + \"ogni estate\": a habit." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner (a man) wrote \"Quando ero piccolo, sono andato al mare ogni estate.\" Write it correctly: When I was little, I went to the seaside every summer.", source: "When I was little, I went to the seaside every summer.", answer: "Quando ero piccolo, andavo al mare ogni estate.", altAnswers: ["Quando ero piccolo, andavo al mare tutte le estati.", "Da piccolo andavo al mare ogni estate."], explanation: "Habit: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mia sorella era quindici anni.\" Write it correctly: My sister was fifteen.", source: "My sister was fifteen.", answer: "Mia sorella aveva quindici anni.", altAnswers: ["Mia sorella aveva 15 anni."], explanation: "Age with \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Cosa favi?\" Write it correctly: What were you doing? (to a friend)", source: "What were you doing?", answer: "Cosa facevi?", altAnswers: ["Che cosa facevi?", "Che facevi?", "Cosa stavi facendo?"], explanation: "\"Fare\" → \"facevi\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Eravamo stanchi e eravamo fame.\" Write it correctly: We were tired and hungry.", source: "We were tired and hungry.", answer: "Eravamo stanchi e avevamo fame.", altAnswers: ["Eravamo stanche e avevamo fame."], explanation: "\"Avere fame\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mio nonno usava fumare la pipa.\" Write it correctly: My grandfather used to smoke a pipe.", source: "My grandfather used to smoke a pipe.", answer: "Mio nonno fumava la pipa.", explanation: "Used to = imperfetto, not \"usare\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Era le otto.\" Write it correctly: It was eight o'clock.", source: "It was eight o'clock.", answer: "Erano le otto.", explanation: "Plural hours: \"erano\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Ieri ha piovuto tutto il giorno e era freddo.\" Write the Italian for the bold words.", en: "Yesterday it rained all day and [it was cold].", sentence: "Ieri ha piovuto tutto il giorno e ___.", answer: "faceva freddo", explanation: "Weather: \"fare freddo\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Loro eravano amici.\" Write the Italian for the bold words.", en: "They [were] friends.", sentence: "Loro ___ amici.", answer: "erano", explanation: "\"Erano\"." },
      { type: "word-order", prompt: "Put the words in order to say: When I was twenty, I lived in Bologna.", words: ["Quando", "avevo", "vent'anni,", "abitavo", "a", "Bologna."], translation: "When I was twenty, I lived in Bologna.", explanation: "\"Avevo\" for age." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Da bambina dormivo con la luce accesa.", "Da bambina ho dormito sempre con la luce accesa ogni notte.", "Da bambina eravo con la luce accesa.", "Da bambina dormevo con la luce accesa."], correctIndex: 0, explanation: "Habit: \"dormivo\" (-ire → -ivo)." },
      { type: "dictation", audio: "Avevo dieci anni e faceva molto caldo.", explanation: "\"Avevo\", \"faceva\"." },
      { type: "speak", text: "Quando avevo otto anni, abitavo a Bari e andavo al mare ogni domenica.", prompt: "Say it correctly: When I was eight, I lived in Bari and went to the seaside every Sunday.", tip: "Age with avere; habits in the imperfetto.", explanation: "Three corrected forms." },
    ],
  },
  {
    slug: "a2-transform-now-and-then",
    level: "IT-A2",
    number: 9,
    title: "Transformations: Now and Then",
    summary: "Turn present descriptions and routines into the past: oggi la città è grande becomes allora era piccola.",
    duration: "15 min",
    sections: [
      {
        heading: "Present → imperfetto",
        body: [
          "Descriptions and habits in the present move straight into the imperfetto, in the same person: \"è\" → \"era\", \"ha\" → \"aveva\", \"lavoro\" → \"lavoravo\", \"facciamo\" → \"facevamo\". Time words change too: \"oggi\" / \"adesso\" → \"allora\" (back then), \"una volta\", \"da bambino\".",
          "This is different from Unit 1, where a single event (\"oggi lavoro\" → \"ieri ho lavorato\") became the passato prossimo. Here the sentence stays a description or a habit.",
        ],
        examples: [
          { es: "Oggi la città è grande. → Allora era piccola.", en: "Today the city is big. → Back then it was small." },
          { es: "Adesso lavoro in ufficio. → Prima lavoravo in negozio.", en: "Now I work in an office. → Before, I worked in a shop." },
          { es: "Oggi abbiamo una macchina. → Allora avevamo solo le bici.", en: "Today we have a car. → Back then we only had bikes." },
          { es: "Adesso c'è un supermercato. → Una volta c'era un mercato.", en: "Now there's a supermarket. → There used to be a market." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Oggi abbiamo una macchina\" to back then and write: Back then we only had bikes.", source: "Back then we only had bikes.", answer: "Allora avevamo solo le bici.", altAnswers: ["Allora avevamo solo le biciclette.", "Allora avevamo solo bici."], explanation: "\"Abbiamo\" → \"avevamo\"." },
          { type: "translate", direction: "en-es", prompt: "Change \"Adesso c'è un supermercato\" to the past and write: There used to be a market.", source: "There used to be a market.", answer: "Una volta c'era un mercato.", altAnswers: ["C'era un mercato.", "Prima c'era un mercato."], explanation: "\"C'è\" → \"c'era\"." },
        ],
      },
      {
        heading: "Routines → habits",
        body: [
          "A routine in the present becomes a past habit: \"Ogni mattina prendo il treno\" → \"Da studente ogni mattina prendevo il treno\". Reflexives keep their pronoun: \"mi alzo\" → \"mi alzavo\", \"ci vediamo\" → \"ci vedevamo\".",
        ],
        examples: [
          { es: "Mi alzo alle sette. → Mi alzavo alle sei.", en: "I get up at seven. → I used to get up at six." },
          { es: "Ci vediamo il venerdì. → Ci vedevamo il sabato.", en: "We meet on Fridays. → We used to meet on Saturdays." },
          { es: "Giulia va in palestra. → Giulia andava in piscina.", en: "Giulia goes to the gym. → Giulia used to go to the pool." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Mi alzo alle sette\" to the past and write: I used to get up at six.", source: "I used to get up at six.", answer: "Mi alzavo alle sei.", altAnswers: ["Io mi alzavo alle sei."], explanation: "Reflexive: \"mi alzavo\"." },
          { type: "listen-choose", audio: "Ci vedevamo il sabato.", question: "What does it mean?", options: ["We used to meet on Saturdays.", "We met on Saturday.", "We meet on Saturdays.", "We'll meet on Saturday."], correctIndex: 0, explanation: "\"Vedevamo\" + \"il sabato\": a past habit." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Change \"Oggi la città è grande\" to back then and write: Back then the city was small.", source: "Back then the city was small.", answer: "Allora la città era piccola.", altAnswers: ["Allora la città era più piccola."], explanation: "\"È\" → \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Adesso lavoro in ufficio\" to the past and write: Before, I worked in a shop.", source: "Before, I worked in a shop.", answer: "Prima lavoravo in negozio.", altAnswers: ["Prima lavoravo in un negozio.", "Una volta lavoravo in un negozio."], explanation: "\"Lavoro\" → \"lavoravo\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Giulia va in palestra\" to the past and write: Giulia used to go to the pool.", source: "Giulia used to go to the pool.", answer: "Giulia andava in piscina.", explanation: "\"Va\" → \"andava\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"I miei figli sono grandi\" to the past and write: My children were little.", source: "My children were little.", answer: "I miei figli erano piccoli.", explanation: "\"Sono\" → \"erano\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Facciamo la spesa online\" to the past and write: We used to do the shopping at the market.", source: "We used to do the shopping at the market.", answer: "Facevamo la spesa al mercato.", altAnswers: ["Noi facevamo la spesa al mercato."], explanation: "\"Facciamo\" → \"facevamo\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Il treno costa tanto\" to the past and write: The train used to cost little.", source: "The train used to cost little.", answer: "Il treno costava poco.", explanation: "\"Costa\" → \"costava\"." },
      { type: "fill-blank", prompt: "Change \"Dico sempre di sì\" to the past. Write the Italian for the bold words.", en: "[I always used to say] yes.", sentence: "___ di sì.", answer: "Dicevo sempre", altAnswers: ["Io dicevo sempre"], explanation: "\"Dico\" → \"dicevo\"." },
      { type: "fill-blank", prompt: "Change \"Bevete il caffè?\" to the past. Write the Italian for the bold words.", en: "[Did you use to drink] coffee? (plural)", sentence: "___ il caffè?", answer: "Bevevate", altAnswers: ["Voi bevevate"], explanation: "\"Bevete\" → \"bevevate\"." },
      { type: "word-order", prompt: "Put the words in order to say: Back then there were no mobile phones.", words: ["Allora", "non", "c'erano", "i", "cellulari."], translation: "Back then there were no mobile phones.", explanation: "\"Ci sono\" → \"c'erano\"." },
      { type: "multiple-choice", question: "\"Adesso abito a Milano.\" Back then, in Sicily:", options: ["Allora abitavo in Sicilia.", "Allora ho abitato in Sicilia.", "Allora abito in Sicilia.", "Allora abitavamo in Sicilia ieri."], correctIndex: 0, explanation: "Same person, imperfetto." },
      { type: "dictation", audio: "Una volta qui c'era un mercato e la gente si conosceva.", explanation: "\"C'era\", \"si conosceva\"." },
      { type: "speak", text: "Adesso abito in città, ma da bambina abitavo in campagna e andavo a scuola a piedi.", prompt: "Say it as a woman: Now I live in the city, but as a child I lived in the countryside and walked to school.", tip: "Present for now, imperfetto for then.", explanation: "Now vs then." },
    ],
  },
  {
    slug: "a2-mission-describe-a-photo",
    level: "IT-A2",
    number: 10,
    title: "Real-World Mission: An Old Photograph",
    summary: "Describe an old family photo: who was there, what they were like, where they were and what they were doing.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "Who and where",
        body: [
          "You've found a photo from 1985 in a drawer and want to send it to your Italian cousin with a description. Start with when and where: \"In questa foto eravamo a Rimini, nell'estate del 1985\". Then who: \"C'erano i nonni, mia madre e mia zia\".",
          "Use \"a sinistra\" (on the left), \"a destra\", \"al centro\", \"dietro\" (behind) to place people.",
        ],
        examples: [
          { es: "In questa foto eravamo a Rimini, nell'estate del 1985.", en: "In this photo we were in Rimini, in the summer of 1985." },
          { es: "C'erano i nonni, mia madre e mia zia.", en: "Grandma and Grandad, my mother and my aunt were there." },
          { es: "A sinistra c'era mio padre.", en: "On the left was my father." },
          { es: "Io ero al centro, in braccio alla nonna.", en: "I was in the middle, in Grandma's arms." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In this photo we were in Rimini.", answer: "In questa foto eravamo a Rimini.", altAnswers: ["In questa foto noi eravamo a Rimini."], explanation: "\"Eravamo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[On the left was] my father.", sentence: "___ mio padre.", answer: "A sinistra c'era", explanation: "\"C'era\" + singular." },
        ],
      },
      {
        heading: "What they were like and doing",
        body: [
          "Describe looks and clothes: \"Mio padre aveva i capelli lunghi e portava gli occhiali\" (\"portare\" = to wear). Then what was going on: \"La nonna rideva\", \"Mia zia mangiava un gelato\". Everything is background, so everything is imperfetto.",
        ],
        examples: [
          { es: "Mio padre aveva i capelli lunghi e portava gli occhiali.", en: "My father had long hair and wore glasses." },
          { es: "Mia madre portava un vestito a fiori.", en: "My mother was wearing a flowery dress." },
          { es: "La nonna rideva e mia zia mangiava un gelato.", en: "Grandma was laughing and my aunt was eating an ice cream." },
          { es: "Faceva molto caldo: si vede!", en: "It was very hot: you can tell!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My father had long hair and wore glasses.", answer: "Mio padre aveva i capelli lunghi e portava gli occhiali.", altAnswers: ["Mio padre aveva i capelli lunghi e aveva gli occhiali."], explanation: "\"Portare\" = to wear." },
          { type: "listen-choose", audio: "Mia madre portava un vestito a fiori.", question: "What was the mother wearing?", options: ["a flowery dress", "a flower in her hair", "a red dress", "a summer hat"], correctIndex: 0, explanation: "\"Un vestito a fiori\" = a flowery dress." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma and Grandad, my mother and my aunt were there.", answer: "C'erano i nonni, mia madre e mia zia.", explanation: "\"C'erano\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma was laughing and my aunt was eating an ice cream.", answer: "La nonna rideva e mia zia mangiava un gelato.", altAnswers: ["La nonna stava ridendo e mia zia stava mangiando un gelato."], explanation: "Ongoing actions: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was very hot.", answer: "Faceva molto caldo.", altAnswers: ["Faceva caldissimo."], explanation: "\"Faceva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was three and I had blond hair.", answer: "Avevo tre anni e avevo i capelli biondi.", explanation: "Age and looks: \"avevo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Behind us there was the sea.", answer: "Dietro di noi c'era il mare.", explanation: "\"Dietro di\" + pronoun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My uncle [was wearing] a white hat.", sentence: "Mio zio ___ un cappello bianco.", answer: "portava", altAnswers: ["aveva"], explanation: "\"Portare\" = to wear." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We were] all very happy.", sentence: "___ tutti molto felici.", answer: "Eravamo", explanation: "\"Eravamo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [were playing] in the sand.", sentence: "I bambini ___ nella sabbia.", answer: "giocavano", altAnswers: ["stavano giocando"], explanation: "Ongoing: \"giocavano\"." },
      { type: "word-order", prompt: "Put the words in order to say: I was in the middle, in Grandma's arms.", words: ["Io", "ero", "al", "centro,", "in", "braccio", "alla", "nonna."], translation: "I was in the middle, in Grandma's arms.", explanation: "\"In braccio a\" = in someone's arms." },
      { type: "multiple-choice", question: "Your father was wearing a striped shirt. Which is right?", options: ["Mio padre portava una camicia a righe.", "Mio padre ha portato una camicia a righe.", "Mio padre era una camicia a righe.", "Mio padre portavo una camicia a righe."], correctIndex: 0, explanation: "Description in a photo: \"portava\"." },
      { type: "dictation", audio: "In questa foto eravamo al mare e faceva caldo.", explanation: "\"Eravamo\", \"faceva\"." },
      { type: "speak", text: "In questa foto eravamo a Rimini. Io avevo tre anni, mio padre portava gli occhiali e la nonna rideva.", prompt: "Describe the photo: In this photo we were in Rimini. I was three, my father was wearing glasses and Grandma was laughing.", tip: "All imperfetto: it's a still picture.", explanation: "Place, age, clothes, action." },
    ],
  },
  {
    slug: "a2-reading-lab-memories",
    level: "IT-A2",
    number: 11,
    title: "Reading Lab: A Childhood Memory",
    summary: "Read a short memoir from a village in Abruzzo and answer questions on it.",
    duration: "15 min",
    sections: [
      {
        heading: "Il paese",
        body: [
          "Read Anna's memory of her village in Abruzzo. Notice how almost every verb is in the imperfetto: she's describing a world and its routines, not telling events. New words: \"il paese\" (village; also country), \"la piazza\", \"il forno\" (bakery oven), \"le pecore\" (sheep).",
        ],
        examples: [
          { es: "Da bambina vivevo in un piccolo paese in Abruzzo.", en: "As a child I lived in a small village in Abruzzo." },
          { es: "Il paese era sulla collina e d'inverno c'era sempre la neve.", en: "The village was on the hill and in winter there was always snow." },
          { es: "Le case erano di pietra e le strade erano strette.", en: "The houses were made of stone and the streets were narrow." },
          { es: "In piazza c'erano la chiesa, il bar e il forno.", en: "In the square there were the church, the bar and the bakery." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Where was Anna's village?", options: ["on a hill in Abruzzo", "by the sea in Abruzzo", "in the mountains in Piedmont", "near Rome"], correctIndex: 0, explanation: "\"Era sulla collina\", \"in Abruzzo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The houses were made of stone.", answer: "Le case erano di pietra.", explanation: "\"Di\" + material." },
        ],
      },
      {
        heading: "Le giornate",
        body: [
          "Anna continues with her days: what her family did, every day and every season.",
        ],
        examples: [
          { es: "Mio padre si alzava alle cinque e andava in campagna.", en: "My father got up at five and went to the fields." },
          { es: "Mia madre faceva il pane due volte alla settimana.", en: "My mother made bread twice a week." },
          { es: "Io e mio fratello andavamo a scuola a piedi, anche con la neve.", en: "My brother and I walked to school, even in the snow." },
          { es: "D'estate aiutavamo il nonno con le pecore.", en: "In summer we helped Grandad with the sheep." },
          { es: "La sera tutti si sedevano in piazza a parlare.", en: "In the evening everyone sat in the square and talked." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "How often did Anna's mother make bread?", options: ["twice a week", "every day", "once a month", "only on Sundays"], correctIndex: 0, explanation: "\"Due volte alla settimana\"." },
          { type: "listen-choose", audio: "D'estate aiutavamo il nonno con le pecore.", question: "What did the children do in summer?", options: ["helped their grandfather with the sheep", "went to the seaside", "helped their mother bake", "went to school"], correctIndex: 0, explanation: "\"Aiutavamo il nonno con le pecore\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a child I lived in a small village.", answer: "Da bambina vivevo in un piccolo paese.", altAnswers: ["Da bambino vivevo in un piccolo paese.", "Da bambina abitavo in un piccolo paese.", "Da bambino abitavo in un piccolo paese."], explanation: "\"Paese\" = village here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In winter there was always snow.", answer: "D'inverno c'era sempre la neve.", altAnswers: ["In inverno c'era sempre la neve.", "D'inverno c'era sempre neve."], explanation: "\"C'era\" + \"sempre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The streets were narrow.", answer: "Le strade erano strette.", altAnswers: ["Le vie erano strette."], explanation: "\"Strette\" = narrow." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My father got up at five.", answer: "Mio padre si alzava alle cinque.", explanation: "Habit: \"si alzava\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My mother made bread twice a week.", answer: "Mia madre faceva il pane due volte alla settimana.", altAnswers: ["Mia madre faceva il pane due volte a settimana."], explanation: "\"Due volte alla settimana\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the evening everyone [sat] in the square.", sentence: "La sera tutti ___ in piazza.", answer: "si sedevano", explanation: "Reflexive habit: \"si sedevano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the square there were] the church and the bar.", sentence: "___ la chiesa e il bar.", answer: "In piazza c'erano", explanation: "\"C'erano\" + plural." },
      { type: "multiple-choice", question: "Which is true, according to the text?", options: ["The children walked to school even in the snow.", "The father worked in the bakery.", "The village was by the sea.", "Anna lived in a big city."], correctIndex: 0, explanation: "\"Andavamo a scuola a piedi, anche con la neve\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In summer we helped Grandad with the sheep.", answer: "D'estate aiutavamo il nonno con le pecore.", altAnswers: ["In estate aiutavamo il nonno con le pecore."], explanation: "A summer habit: \"aiutavamo\"." },
      { type: "dictation", audio: "Le case erano di pietra e le strade erano strette.", explanation: "\"Erano\" twice." },
      { type: "dictation", audio: "La sera tutti si sedevano in piazza a parlare.", explanation: "\"Si sedevano\"." },
      { type: "speak", text: "Da bambina vivevo in un piccolo paese. D'inverno c'era la neve e andavamo a scuola a piedi.", prompt: "Retell Anna's memory: As a child I lived in a small village. In winter there was snow and we walked to school.", tip: "vi-VE-vo, an-da-VA-mo.", explanation: "Description and habit." },
    ],
  },
];

export const IT_A2_U05_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a short memory of your childhood for an Italian friend: where you lived and what the place was like, what a person in your family was like, what you used to do on weekends or in summer, and what you were usually doing at a certain time of day (alle otto di sera di solito ...).",
  minWords: 40,
  maxWords: 100,
  rubric: [
    "Uses the imperfetto for descriptions of people, places, weather and age (era, aveva, faceva caldo, avevo dieci anni)",
    "Uses the imperfetto for habits, with words like ogni estate, di solito, il sabato, sempre",
    "Forms the imperfetto correctly, including essere (ero, erano) and fare, dire, bere (facevo, dicevo, bevevo)",
    "Uses mentre or an ongoing action in the past (mentre mia madre cucinava, io giocavo)",
  ],
  modelAnswer: "Da bambino abitavo a Bari, in un appartamento vicino al mare. La città era rumorosa, ma a me piaceva tantissimo. Mio nonno era alto e magro e aveva sempre una battuta pronta. Ogni estate andavamo in campagna dagli zii e il sabato facevamo lunghe passeggiate. Alle otto di sera di solito mangiavamo tutti insieme: mentre mia madre cucinava, io e mia sorella apparecchiavamo la tavola. Avevo dieci anni ed ero felice.",
  explanation: "Descriptions (\"la città era rumorosa\", \"mio nonno era alto\", \"avevo dieci anni\") and habits (\"ogni estate andavamo\", \"il sabato facevamo\", \"di solito mangiavamo\") are all in the imperfetto. \"Mentre mia madre cucinava, io e mia sorella apparecchiavamo\" shows two actions in progress at the same time. \"Facevamo\" uses the old stem of \"fare\".",
};
