// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u31.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 31: Word Formation. Diminutives, augmentatives and
// pejoratives, noun and adjective suffixes, prefixes, false diminutives,
// stress shift. Conventions: docs/italian-course/authoring.md.
export const IT_B1_U31: Lesson[] = [
  {
    slug: "b1-diminutives",
    level: "IT-B1",
    number: 1,
    title: "Small: Diminutives",
    summary: "Make things small or sweet with -ino, -etto and -ello: casetta, gattino, alberello, un attimino, un caffettino.",
    duration: "17 min",
    sections: [
      {
        heading: "-ino, -etto, -ello",
        body: [
          "Italian can make a noun smaller by changing its ending. Drop the final vowel and add a suffix: \"gatto\" → \"gattino\" (kitten), \"casa\" → \"casetta\" (little house), \"albero\" → \"alberello\" (little tree). The gender stays the same: \"la casa\" → \"la casetta\".",
          "The most common suffix is \"-ino / -ina\"; \"-etto / -etta\" is also very common; \"-ello / -ella\" is less frequent and often found in set words (\"paesello\", \"asinello\"). Which one a word takes is decided by use, so learn them as you meet them.",
          "Nouns in \"-e\" often add a \"c\" or \"ic\": \"bastone\" → \"bastoncino\", \"cuore\" → \"cuoricino\". Some words stack two suffixes: \"fiore\" → \"fiorellino\", \"cane\" → \"cagnolino\".",
        ],
        examples: [
          { es: "Abbiamo adottato un gattino.", en: "We've adopted a kitten." },
          { es: "Vivono in una casetta in campagna.", en: "They live in a little house in the country." },
          { es: "Sul balcone c'è un alberello di limoni.", en: "There's a little lemon tree on the balcony." },
          { es: "Mi ha mandato un messaggio con un cuoricino.", en: "She sent me a message with a little heart." },
          { es: "Ho comprato una borsetta rossa.", en: "I bought a little red handbag." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've adopted a kitten.", answer: "Abbiamo adottato un gattino.", altAnswers: ["Abbiamo preso un gattino."], explanation: "\"Gatto\" + \"-ino\"." },
          { type: "listen-choose", audio: "Vivono in una casetta in campagna.", question: "Where do they live?", options: ["in a little house in the country", "in a big house in town", "in an apartment in the country", "in a caravan"], correctIndex: 0, explanation: "\"Casetta\" = little house." },
        ],
      },
      {
        heading: "Affection, not just size",
        body: [
          "Diminutives often show affection or make a request softer rather than describe size. \"Un attimino\" (just a sec) and \"un momentino\" sound friendlier than \"un attimo\". \"Prendiamo un caffettino?\" is a warm invitation. \"Un pochino\" means just a little.",
          "With children and pets, Italians use diminutives a lot: \"le manine\" (little hands), \"i piedini\" (little feet), \"il nasino\". Adjectives and adverbs can take them too: \"carino\" (cute, nice), \"benino\" (fairly well), \"pianino\" (nice and slowly).",
        ],
        examples: [
          { es: "Aspetta un attimino, arrivo.", en: "Wait just a sec, I'm coming." },
          { es: "Prendiamo un caffettino?", en: "Shall we grab a quick coffee?" },
          { es: "Sono un pochino stanca.", en: "I'm a little bit tired." },
          { es: "Guarda che manine!", en: "Look at those little hands!" },
          { es: "L'esame è andato benino.", en: "The exam went fairly well." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wait just a sec. (to a friend)", answer: "Aspetta un attimino.", altAnswers: ["Aspetta un momentino.", "Aspetta un attimo."], explanation: "\"Attimino\": a friendly diminutive." },
          { type: "multiple-choice", question: "\"L'esame è andato benino\" means the exam went ...", options: ["fairly well", "very well", "badly", "quickly"], correctIndex: 0, explanation: "\"Benino\" = OK, not brilliant." },
        ],
      },
      {
        heading: "False diminutives",
        body: [
          "Some words look like diminutives but are separate words with their own meaning: \"il mulino\" (mill), \"il tacchino\" (turkey), \"la mattina\" (morning), \"il postino\" (mail carrier), \"il rubinetto\" (faucet), \"il panino\" (sandwich roll), \"il tavolino\" (coffee table, café table), \"il fumetto\" (comic).",
          "So \"un panino\" is not just a small loaf, and \"un tavolino\" at a café is simply the table you sit at.",
        ],
        examples: [
          { es: "Il postino passa alle dieci.", en: "The mail carrier comes at ten." },
          { es: "A Natale mangiamo il tacchino.", en: "At Christmas we eat turkey." },
          { es: "Il rubinetto perde.", en: "The faucet is dripping." },
          { es: "C'è un tavolino libero fuori?", en: "Is there a free table outside?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The faucet is dripping.", answer: "Il rubinetto perde.", altAnswers: ["Il rubinetto gocciola."], explanation: "\"Rubinetto\" is a word of its own." },
          { type: "multiple-choice", question: "\"Il mulino\" is ...", options: ["a mill", "a small mule", "a little wall", "a muffin"], correctIndex: 0, explanation: "A false diminutive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we grab a quick coffee?", answer: "Prendiamo un caffettino?", altAnswers: ["Ci prendiamo un caffettino?", "Prendiamo un caffè?"], explanation: "\"Caffettino\": friendly, not smaller." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm a little bit tired.", answer: "Sono un pochino stanco.", altAnswers: ["Sono un pochino stanca.", "Sono un po' stanco.", "Sono un po' stanca."], explanation: "\"Un pochino\" = a little bit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a little tree in the garden.", answer: "C'è un alberello in giardino.", altAnswers: ["C'è un alberello nel giardino."], explanation: "\"Albero\" + \"-ello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The mail carrier comes at ten.", answer: "Il postino passa alle dieci.", altAnswers: ["Il postino arriva alle dieci.", "Il postino viene alle dieci."], explanation: "\"Postino\": a false diminutive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She sent me a little heart.", answer: "Mi ha mandato un cuoricino.", altAnswers: ["Lei mi ha mandato un cuoricino.", "Mi ha inviato un cuoricino."], explanation: "\"Cuore\" → \"cuoricino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The exam went fairly well.", answer: "L'esame è andato benino.", altAnswers: ["L'esame è andato abbastanza bene."], explanation: "\"Benino\" = fairly well." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Look at the [little feet]!", sentence: "Guarda i ___!", answer: "piedini", explanation: "\"Piede\" → \"piedino\", plural \"piedini\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've bought a [little bag].", sentence: "Ho comprato una ___.", answer: "borsetta", altAnswers: ["borsina"], explanation: "\"Borsa\" + \"-etta\"." },
      { type: "word-order", prompt: "Put the words in order to say: Is there a free table outside?", words: ["C'è", "un", "tavolino", "libero", "fuori?"], translation: "Is there a free table outside?", explanation: "\"Tavolino\" = café table." },
      { type: "multiple-choice", question: "Which word is a real diminutive of \"casa\"?", options: ["casetta", "casino", "casella", "cassetta"], correctIndex: 0, explanation: "\"Casino\" = a mess; \"casella\" = box (on a form); \"cassetta\" = crate." },
      { type: "dictation", audio: "Aspetta un attimino, prendo la borsetta.", explanation: "Two diminutives." },
      { type: "speak", text: "Ciao! Prendiamo un caffettino? Ho un attimino di tempo prima del lavoro.", prompt: "Invite a friend: Hi! Shall we grab a quick coffee? I've got a moment before work.", tip: "Stress moves to the suffix: caf-fet-TI-no, at-ti-MI-no.", explanation: "Friendly diminutives." },
    ],
  },
  {
    slug: "b1-augmentatives-pejoratives",
    level: "IT-B1",
    number: 2,
    title: "Big and Bad: -One and -Accio",
    summary: "Make things big with -one (librone, nasone, portone) and bad with -accio (tempaccio, parolaccia, ragazzaccio).",
    duration: "17 min",
    sections: [
      {
        heading: "-one: big",
        body: [
          "\"-one\" makes things big: \"libro\" → \"librone\" (big book), \"naso\" → \"nasone\" (big nose), \"ragazzo\" → \"ragazzone\" (big guy). Feminine nouns can become masculine with \"-one\": \"la porta\" → \"il portone\" (the main door of a building), or keep the feminine with \"-ona\": \"una donnona\".",
          "Some are separate words: \"il portone\", \"il pallone\" (ball, often a soccer ball), \"il cartone\" (cardboard). Others are expressive: \"un febbrone\" (a very high fever), \"un affarone\" (a great bargain), \"un mangione\" (a big eater).",
        ],
        examples: [
          { es: "Ha un nasone simpatico.", en: "He's got a big, friendly nose." },
          { es: "Il portone è chiuso dopo le dieci.", en: "The main door is locked after ten." },
          { es: "Ho preso un febbrone.", en: "I've come down with a very high fever." },
          { es: "A trenta euro è un affarone!", en: "At thirty euros it's a real bargain!" },
          { es: "Mio fratello è un mangione.", en: "My brother is a big eater." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At thirty euros it's a real bargain!", answer: "A trenta euro è un affarone!", altAnswers: ["Per trenta euro è un affarone!", "A trenta euro è un affare!"], explanation: "\"Affare\" + \"-one\"." },
          { type: "listen-choose", audio: "Il portone è chiuso dopo le dieci.", question: "What's closed after ten?", options: ["the building's main door", "the big shop", "the port", "the park"], correctIndex: 0, explanation: "\"Portone\" = main door of a building." },
        ],
      },
      {
        heading: "-accio: bad",
        body: [
          "\"-accio / -accia\" adds a bad or ugly meaning: \"tempo\" → \"tempaccio\" (awful weather), \"giornata\" → \"giornataccia\" (a terrible day), \"ragazzo\" → \"ragazzaccio\" (a naughty boy), \"posto\" → \"postaccio\" (a sketchy place). \"Una parolaccia\" is a swear word, and \"fare una figuraccia\" means to make a fool of yourself.",
          "For colors, \"-astro\" means -ish, often unpleasant: \"giallastro\" (yellowish), \"verdastro\".",
          "Two more endings you'll hear: \"-otto\" means sturdy or chubby (\"un ragazzotto\", \"un bambinotto\"), and \"-uccio\" is tender (\"caruccio\", \"tesoruccio\"). Tone depends on who says it: \"un omone\" (a big man) can be admiring, and friends call each other \"ragazzaccio\" half-affectionately. With people you don't know well, keep pejoratives for weather, days and places.",
        ],
        examples: [
          { es: "Che tempaccio oggi!", en: "What awful weather today!" },
          { es: "Ho avuto una giornataccia.", en: "I've had a terrible day." },
          { es: "Non dire parolacce!", en: "Don't swear!" },
          { es: "Ho fatto una figuraccia davanti al capo.", en: "I made a fool of myself in front of the boss." },
          { es: "L'acqua aveva un colore giallastro.", en: "The water was a yellowish color." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a terrible day.", answer: "Ho avuto una giornataccia.", altAnswers: ["Ho passato una giornataccia.", "Che giornataccia!"], explanation: "\"Giornata\" + \"-accia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Don't [swear]! (to a child)", sentence: "Non dire ___!", answer: "parolacce", explanation: "\"Parolaccia\" = swear word; plural \"parolacce\"." },
        ],
      },
      {
        heading: "Choosing the right one",
        body: [
          "Not every word takes every suffix, and some combinations sound odd or funny. Use the common ones you hear: \"tempaccio\", \"giornataccia\", \"parolaccia\", \"figuraccia\", \"librone\", \"febbrone\", \"affarone\". When in doubt, use an adjective: \"un libro enorme\", \"una brutta giornata\".",
        ],
        examples: [
          { es: "È un libro enorme.", en: "It's a huge book." },
          { es: "È stata una brutta giornata.", en: "It was a bad day." },
          { es: "Quel ragazzaccio ha rotto il vetro.", en: "That naughty boy broke the window." },
          { es: "È un postaccio, non andarci di sera.", en: "It's a sketchy place, don't go there at night." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a sketchy place.", answer: "È un postaccio.", altAnswers: ["È un brutto posto."], explanation: "\"Posto\" + \"-accio\"." },
          { type: "multiple-choice", question: "\"Fare una figuraccia\" means ...", options: ["to make a fool of yourself", "to draw a picture", "to be very ugly", "to get a bad mark"], correctIndex: 0, explanation: "\"Figura\" + \"-accia\": a bad impression." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What awful weather!", answer: "Che tempaccio!", altAnswers: ["Che brutto tempo!"], explanation: "\"Tempo\" + \"-accio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I made a fool of myself.", answer: "Ho fatto una figuraccia.", altAnswers: ["Ho fatto una brutta figura."], explanation: "\"Fare una figuraccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a very high fever.", answer: "Ho un febbrone.", altAnswers: ["Ho la febbre altissima.", "Ho la febbre alta."], explanation: "\"Febbre\" + \"-one\": masculine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My brother is a big eater.", answer: "Mio fratello è un mangione.", altAnswers: ["Mio fratello è una buona forchetta."], explanation: "\"Mangiare\" → \"mangione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The main door is locked.", answer: "Il portone è chiuso.", altAnswers: ["Il portone è chiuso a chiave."], explanation: "\"Portone\": main door." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He always says swear words.", answer: "Dice sempre parolacce.", altAnswers: ["Lui dice sempre parolacce.", "Dice sempre le parolacce."], explanation: "\"Parolaccia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's carrying a [big book].", sentence: "Porta un ___.", answer: "librone", explanation: "\"Libro\" + \"-one\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "That [naughty boy] broke the window.", sentence: "Quel ___ ha rotto il vetro.", answer: "ragazzaccio", explanation: "\"Ragazzo\" + \"-accio\"." },
      { type: "word-order", prompt: "Put the words in order to say: At thirty euros it's a real bargain.", words: ["A", "trenta", "euro", "è", "un", "affarone."], translation: "At thirty euros it's a real bargain.", explanation: "\"Affarone\" = great deal." },
      { type: "multiple-choice", question: "Which word means a bad day?", options: ["giornataccia", "giornatona", "giornatina", "giornalino"], correctIndex: 0, explanation: "\"-accia\" = bad. (\"Giornalino\" = children's magazine.)" },
      { type: "dictation", audio: "Che tempaccio! Ho avuto proprio una giornataccia.", explanation: "Two pejoratives." },
      { type: "speak", text: "Che giornataccia! Ho preso un febbrone e ho fatto una figuraccia in ufficio.", prompt: "Complain to a friend: What a terrible day! I've got a very high fever and I made a fool of myself at the office.", tip: "Stress on the suffix: gior-na-TAC-cia, feb-BRO-ne.", explanation: "Pejoratives and augmentatives." },
    ],
  },
  {
    slug: "b1-noun-suffixes",
    level: "IT-B1",
    number: 3,
    title: "Noun Suffixes",
    summary: "Build nouns from verbs and adjectives: costruzione, pagamento, lavoratore / lavoratrice, pianista, bellezza, facilità.",
    duration: "17 min",
    sections: [
      {
        heading: "From verbs: -zione, -mento",
        body: [
          "Many verbs give an action noun in \"-zione\" (always feminine): \"costruire\" → \"la costruzione\", \"prenotare\" → \"la prenotazione\", \"informare\" → \"l'informazione\". Others take \"-mento\" (always masculine): \"pagare\" → \"il pagamento\", \"cambiare\" → \"il cambiamento\", \"trasferire\" → \"il trasferimento\".",
          "English often has the same word in -tion or -ment, so you can guess: \"organizzazione\", \"movimento\".",
        ],
        examples: [
          { es: "La costruzione del ponte è finita.", en: "The construction of the bridge has finished." },
          { es: "Ho fatto la prenotazione online.", en: "I made the reservation online." },
          { es: "Il pagamento si fa alla cassa.", en: "Payment is made at the register." },
          { es: "È stato un grande cambiamento.", en: "It was a big change." },
          { es: "Mi servono delle informazioni.", en: "I need some information." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I made the reservation online.", answer: "Ho fatto la prenotazione online.", altAnswers: ["Ho fatto la prenotazione su internet.", "Ho prenotato online."], explanation: "\"Prenotare\" → \"prenotazione\" (feminine)." },
          { type: "multiple-choice", question: "\"Cambiare\" → the noun is ...", options: ["il cambiamento", "la cambiazione", "il cambiatore", "la cambiezza"], correctIndex: 0, explanation: "\"-mento\", masculine." },
        ],
      },
      {
        heading: "People: -tore / -trice, -ista",
        body: [
          "\"-tore\" (masculine) and \"-trice\" (feminine) name the person who does something: \"lavorare\" → \"il lavoratore / la lavoratrice\", \"scrivere\" → \"lo scrittore / la scrittrice\", \"giocare\" → \"il giocatore / la giocatrice\", \"attore / attrice\".",
          "\"-ista\" names a profession or a follower and is the same for men and women; only the article changes: \"il pianista / la pianista\", \"il dentista / la dentista\", \"il / la barista\", \"il / la turista\". The plural is \"-isti\" (masculine) or \"-iste\" (feminine).",
        ],
        examples: [
          { es: "È una lavoratrice instancabile.", en: "She's a tireless worker." },
          { es: "Mia zia è una scrittrice famosa.", en: "My aunt is a famous writer." },
          { es: "La dentista è molto brava.", en: "The dentist is very good. (a woman)" },
          { es: "I turisti arrivano in primavera.", en: "The tourists arrive in spring." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My aunt is a famous writer.", answer: "Mia zia è una scrittrice famosa.", altAnswers: ["Mia zia è una famosa scrittrice."], explanation: "\"Scrittore\" → \"scrittrice\"." },
          { type: "listen-choose", audio: "La dentista è molto brava.", question: "What do you learn about the dentist?", options: ["She's a woman and she's very good.", "He's a man and he's very good.", "She's new.", "She's expensive."], correctIndex: 0, explanation: "\"La dentista\": the article shows the gender." },
        ],
      },
      {
        heading: "From adjectives: -ezza, -ità",
        body: [
          "Adjectives give abstract nouns in \"-ezza\" (feminine): \"bello\" → \"la bellezza\", \"triste\" → \"la tristezza\", \"sicuro\" → \"la sicurezza\", \"lento\" → \"la lentezza\". Or in \"-ità\" (feminine, invariable, stress on the last syllable): \"facile\" → \"la facilità\", \"possibile\" → \"la possibilità\", \"curioso\" → \"la curiosità\".",
          "Other patterns: \"-ura\" (\"chiudere\" → \"la chiusura\", \"aprire\" → \"l'apertura\", as in \"orario di apertura\") and \"-enza / -anza\" (\"presente\" → \"la presenza\", \"importante\" → \"l'importanza\", \"partire\" → \"la partenza\"). Many nouns simply drop the verb ending: \"invitare\" → \"l'invito\", \"ritornare\" → \"il ritorno\", \"costare\" → \"il costo\". Guessing from English has limits: \"la confezione\" is packaging, not a confession.",
        ],
        examples: [
          { es: "La bellezza di Matera mi ha colpito.", en: "Matera's beauty struck me." },
          { es: "La sicurezza è importante.", en: "Safety is important." },
          { es: "Non c'è possibilità di cambiare.", en: "There's no possibility of changing." },
          { es: "Le novità mi incuriosiscono.", en: "New things make me curious." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Safety] comes first.", sentence: "La ___ prima di tutto.", answer: "sicurezza", explanation: "\"Sicuro\" → \"sicurezza\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no possibility of changing.", answer: "Non c'è possibilità di cambiare.", altAnswers: ["Non c'è la possibilità di cambiare.", "Non c'è nessuna possibilità di cambiare."], explanation: "\"Possibile\" → \"possibilità\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Payment is made at the register.", answer: "Il pagamento si fa alla cassa.", altAnswers: ["Il pagamento si effettua alla cassa.", "Si paga alla cassa."], explanation: "\"Pagare\" → \"pagamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a big change.", answer: "È stato un grande cambiamento.", altAnswers: ["È stato un cambiamento grande."], explanation: "\"Cambiamento\" is masculine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's a tireless worker.", answer: "È una lavoratrice instancabile.", altAnswers: ["Lei è una lavoratrice instancabile."], explanation: "\"-trice\" for women." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pianists are Russian. (all men)", answer: "I pianisti sono russi.", altAnswers: [], explanation: "Masculine plural \"-isti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The beauty of the landscape struck me.", answer: "La bellezza del paesaggio mi ha colpito.", altAnswers: ["Mi ha colpito la bellezza del paesaggio.", "La bellezza del paesaggio mi ha colpita."], explanation: "\"Bello\" → \"bellezza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need some information.", answer: "Mi servono delle informazioni.", altAnswers: ["Ho bisogno di informazioni.", "Mi serve qualche informazione."], explanation: "\"Informazione\" is countable in Italian." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [construction] of the bridge has finished.", sentence: "La ___ del ponte è finita.", answer: "costruzione", explanation: "\"Costruire\" → \"costruzione\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's the best [player] on the team.", sentence: "È la migliore ___ della squadra.", answer: "giocatrice", explanation: "\"Giocare\" → \"giocatrice\" (feminine)." },
      { type: "word-order", prompt: "Put the words in order to say: Slowness is a quality.", words: ["La", "lentezza", "è", "una", "qualità."], translation: "Slowness is a quality.", explanation: "\"Lento\" → \"lentezza\"." },
      { type: "multiple-choice", question: "Which noun is masculine?", options: ["movimento", "stazione", "bellezza", "città"], correctIndex: 0, explanation: "\"-mento\" is masculine; \"-zione\", \"-ezza\", \"-ità\" are feminine." },
      { type: "dictation", audio: "La prenotazione è confermata, il pagamento è alla consegna.", explanation: "\"-zione\" and \"-mento\" nouns." },
      { type: "speak", text: "Il trasferimento a Milano è stato un grande cambiamento, ma la città mi offre molte possibilità.", prompt: "Say it: The move to Milan was a big change, but the city offers me lots of opportunities.", tip: "Stress on the last syllable: pos-si-bi-li-TÀ.", explanation: "Three derived nouns." },
    ],
  },
  {
    slug: "b1-adjective-suffixes",
    level: "IT-B1",
    number: 4,
    title: "Adjective Suffixes",
    summary: "Build adjectives with -oso, -ale, -bile and -ivo: pericoloso, nazionale, leggibile, creativo.",
    duration: "17 min",
    sections: [
      {
        heading: "-oso, -ale",
        body: [
          "\"-oso\" means full of: \"pericolo\" → \"pericoloso\" (dangerous), \"rumore\" → \"rumoroso\" (noisy), \"gusto\" → \"gustoso\" (tasty), \"fama\" → \"famoso\". \"-ale\" means related to: \"nazione\" → \"nazionale\", \"regione\" → \"regionale\", \"natura\" → \"naturale\", \"cultura\" → \"culturale\".",
          "\"-oso\" adjectives have four endings (\"-oso, -osa, -osi, -ose\"); \"-ale\" adjectives have two (\"-ale, -ali\").",
        ],
        examples: [
          { es: "Questa strada è pericolosa di notte.", en: "This road is dangerous at night." },
          { es: "I vicini sono un po' rumorosi.", en: "The neighbors are a bit noisy." },
          { es: "Il treno regionale ferma ovunque.", en: "The regional train stops everywhere." },
          { es: "È un prodotto naturale.", en: "It's a natural product." },
          { es: "Che piatto gustoso!", en: "What a tasty dish!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This road is dangerous at night.", answer: "Questa strada è pericolosa di notte.", altAnswers: ["Di notte questa strada è pericolosa."], explanation: "\"Pericolo\" + \"-oso\", feminine." },
          { type: "listen-choose", audio: "I vicini sono un po' rumorosi.", question: "What's the problem with the neighbors?", options: ["They're noisy.", "They're nosy.", "They're rude.", "They're never home."], correctIndex: 0, explanation: "\"Rumore\" → \"rumoroso\"." },
        ],
      },
      {
        heading: "-bile: can be done",
        body: [
          "\"-bile\" means can be ...-ed, like English -able / -ible: -are verbs take \"-abile\" (\"lavare\" → \"lavabile\", \"mangiare\" → \"mangiabile\"), -ere and -ire verbs take \"-ibile\" (\"leggere\" → \"leggibile\", \"credere\" → \"credibile\", \"bere\" → \"bevibile\"). The stress falls before the suffix: \"leggibile\" is stressed on the second syllable.",
        ],
        examples: [
          { es: "La tua scrittura non è leggibile.", en: "Your handwriting isn't legible." },
          { es: "Questo vino è appena bevibile.", en: "This wine is barely drinkable." },
          { es: "Il divano ha la fodera lavabile.", en: "The sofa has a washable cover." },
          { es: "La sua storia non è credibile.", en: "His story isn't believable." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cover is [washable].", sentence: "La fodera è ___.", answer: "lavabile", explanation: "\"Lavare\" → \"lavabile\"." },
          { type: "multiple-choice", question: "\"Leggere\" → can be read:", options: ["leggibile", "leggabile", "letturoso", "leggiale"], correctIndex: 0, explanation: "-ere verbs take \"-ibile\"." },
        ],
      },
      {
        heading: "-ivo, -ico",
        body: [
          "\"-ivo\" often matches English -ive: \"creare\" → \"creativo\", \"sport\" → \"sportivo\" (sporty), \"offendere\" → \"offensivo\". \"-ico\" matches -ic / -ical: \"storia\" → \"storico\", \"economia\" → \"economico\" (also cheap!), \"turismo\" → \"turistico\".",
          "More endings: \"-evole\" (\"piacere\" → \"piacevole\", pleasant), \"-ante / -ente\" (\"divertire\" → \"divertente\", fun; \"interessare\" → \"interessante\"), and \"-ese / -ano\" for origin (\"milanese\", \"siciliano\"). Watch the false friends: \"eventuale\" means possible, if any (not eventual), and \"sensibile\" means sensitive. A \"-bile\" adjective makes its opposite with \"in-\": \"incredibile\", \"illeggibile\", \"immangiabile\".",
        ],
        examples: [
          { es: "Mia sorella è molto creativa.", en: "My sister is very creative." },
          { es: "Il centro storico è bellissimo.", en: "The old town is beautiful." },
          { es: "Cerco un albergo economico.", en: "I'm looking for a cheap hotel." },
          { es: "È un ragazzo sportivo.", en: "He's a sporty guy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for a cheap hotel.", answer: "Cerco un albergo economico.", altAnswers: ["Cerco un hotel economico.", "Sto cercando un albergo economico."], explanation: "\"Economico\" = cheap or economic." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister is very creative.", answer: "Mia sorella è molto creativa.", altAnswers: [], explanation: "\"Creare\" → \"creativo\", feminine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbors are noisy.", answer: "I vicini sono rumorosi.", altAnswers: ["I vicini di casa sono rumorosi."], explanation: "\"-osi\" plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a natural product.", answer: "È un prodotto naturale.", altAnswers: [], explanation: "\"Natura\" → \"naturale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your handwriting isn't legible. (to a friend)", answer: "La tua scrittura non è leggibile.", altAnswers: ["La tua calligrafia non è leggibile.", "Non si legge la tua scrittura."], explanation: "\"Leggere\" → \"leggibile\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The old town is beautiful.", answer: "Il centro storico è bellissimo.", altAnswers: ["Il centro storico è molto bello."], explanation: "\"Storia\" → \"storico\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a tasty dish!", answer: "Che piatto gustoso!", altAnswers: ["Che piatto saporito!"], explanation: "\"Gusto\" → \"gustoso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His story isn't believable.", answer: "La sua storia non è credibile.", altAnswers: ["La sua storia non è credibile per niente."], explanation: "\"Credere\" → \"credibile\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's a [national] holiday on Monday.", sentence: "Lunedì c'è una festa ___.", answer: "nazionale", explanation: "\"Nazione\" → \"nazionale\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This mushroom is [edible].", sentence: "Questo fungo è ___.", answer: "mangiabile", altAnswers: ["commestibile"], explanation: "\"Mangiare\" → \"mangiabile\"; the technical word is \"commestibile\"." },
      { type: "word-order", prompt: "Put the words in order to say: The regional train stops everywhere.", words: ["Il", "treno", "regionale", "ferma", "ovunque."], translation: "The regional train stops everywhere.", explanation: "\"Regione\" → \"regionale\"." },
      { type: "multiple-choice", question: "\"Un albergo economico\" is ...", options: ["a cheap hotel", "an economics hotel", "a business hotel", "a luxury hotel"], correctIndex: 0, explanation: "\"Economico\" often means cheap." },
      { type: "dictation", audio: "È una zona turistica, ma non è pericolosa.", explanation: "\"-ica\" and \"-osa\" adjectives." },
      { type: "speak", text: "Il centro storico è bellissimo, ma la sera è un po' rumoroso.", prompt: "Say it: The old town is beautiful, but in the evening it's a bit noisy.", tip: "\"Rumoroso\": one \"r\" sound at the start, ru-mo-RO-so.", explanation: "Two derived adjectives." },
    ],
  },
  {
    slug: "b1-prefixes",
    level: "IT-B1",
    number: 5,
    title: "Prefixes",
    summary: "Change meaning with prefixes: rifare, scaricare, disattivare, impossibile, illegale, irregolare, prenotare.",
    duration: "17 min",
    sections: [
      {
        heading: "ri-: again",
        body: [
          "\"Ri-\" means again or back: \"fare\" → \"rifare\" (to redo), \"leggere\" → \"rileggere\", \"chiamare\" → \"richiamare\" (to call back), \"dare\" → \"ridare\" (to give back). It's also in many fixed words: \"ricordare\", \"riposare\", \"ritornare\".",
        ],
        examples: [
          { es: "Devo rifare l'esercizio.", en: "I have to redo the exercise." },
          { es: "La richiamo più tardi.", en: "I'll call you back later. (formal)" },
          { es: "Rileggi la mail prima di mandarla.", en: "Reread the email before you send it." },
          { es: "Mi ridai il libro domani?", en: "Will you give me the book back tomorrow?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call you back later. (formal)", answer: "La richiamo più tardi.", altAnswers: ["La richiamo dopo.", "La ricontatto più tardi."], explanation: "\"Ri-\" + \"chiamare\"." },
          { type: "listen-choose", audio: "Rileggi la mail prima di mandarla.", question: "What should you do before sending the email?", options: ["read it again", "delete it", "print it", "translate it"], correctIndex: 0, explanation: "\"Rileggere\" = to reread." },
        ],
      },
      {
        heading: "s-, dis-: undo, opposite",
        body: [
          "\"S-\" often reverses or removes: \"caricare\" → \"scaricare\" (to unload, download), \"congelare\" → \"scongelare\" (to defrost), \"fortuna\" → \"sfortuna\", \"contento\" → \"scontento\". \"Dis-\" does the same: \"attivare\" → \"disattivare\", \"onesto\" → \"disonesto\", \"ordine\" → \"disordine\", \"occupato\" → \"disoccupato\" (unemployed).",
        ],
        examples: [
          { es: "Ho scaricato l'app.", en: "I've downloaded the app." },
          { es: "Scongela il pollo la sera prima.", en: "Defrost the chicken the night before." },
          { es: "Che sfortuna!", en: "What bad luck!" },
          { es: "Ho disattivato le notifiche.", en: "I've turned off notifications." },
          { es: "Mio cugino è disoccupato.", en: "My cousin is unemployed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've turned off notifications.", answer: "Ho disattivato le notifiche.", altAnswers: ["Ho tolto le notifiche."], explanation: "\"Dis-\" + \"attivare\"." },
          { type: "multiple-choice", question: "\"Scaricare\" a file means ...", options: ["to download it", "to upload it", "to delete it", "to charge it"], correctIndex: 0, explanation: "\"Caricare\" = upload / charge; \"scaricare\" = download." },
        ],
      },
      {
        heading: "in-, im-, il-, ir-, pre-, ultra-",
        body: [
          "\"In-\" means not, and changes to match the next sound: \"im-\" before \"p\", \"b\", \"m\" (\"impossibile\", \"imbevibile\", \"immaturo\"); \"il-\" before \"l\" (\"illegale\"); \"ir-\" before \"r\" (\"irregolare\"); \"in-\" elsewhere (\"incapace\", \"inutile\").",
          "\"Pre-\" means before: \"prenotare\" (to book), \"prevedere\" (to foresee), \"il preavviso\" (notice). \"Ultra-\" means extremely: \"ultraleggero\", \"ultramoderno\".",
          "Don't strip prefixes blindly: in \"sbagliare\", \"scappare\", \"ricevere\" or \"riuscire\" (to manage) the \"s-\" or \"ri-\" is just part of the word. Other common prefixes: \"anti-\" (\"l'antifurto\", the anti-theft alarm), \"sotto-\" (\"il sottopassaggio\", underpass; \"sottovalutare\", to underestimate) and \"sovra-\" (\"il sovrapprezzo\", surcharge).",
        ],
        examples: [
          { es: "È impossibile trovare parcheggio.", en: "It's impossible to find parking." },
          { es: "Parcheggiare qui è illegale.", en: "Parking here is illegal." },
          { es: "Andare è un verbo irregolare.", en: "Andare is an irregular verb." },
          { es: "Bisogna dare un mese di preavviso.", en: "You need to give a month's notice." },
          { es: "Ho un portatile ultraleggero.", en: "I have an ultralight laptop." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Parking here is [illegal].", sentence: "Parcheggiare qui è ___.", answer: "illegale", explanation: "\"In-\" → \"il-\" before \"l\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to give a month's notice.", answer: "Bisogna dare un mese di preavviso.", altAnswers: ["Bisogna dare un preavviso di un mese.", "Si deve dare un mese di preavviso."], explanation: "\"Pre-\" + \"avviso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to redo the exercise.", answer: "Devo rifare l'esercizio.", altAnswers: ["Devo rifare questo esercizio."], explanation: "\"Ri-\" = again." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've downloaded the app.", answer: "Ho scaricato l'app.", altAnswers: ["Ho scaricato l'applicazione."], explanation: "\"Scaricare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's impossible to find parking.", answer: "È impossibile trovare parcheggio.", altAnswers: ["È impossibile trovare un parcheggio.", "Trovare parcheggio è impossibile."], explanation: "\"Im-\" before \"p\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My cousin is unemployed.", answer: "Mio cugino è disoccupato.", altAnswers: ["Mia cugina è disoccupata."], explanation: "\"Dis-\" + \"occupato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What bad luck!", answer: "Che sfortuna!", altAnswers: ["Che sfortuna."], explanation: "\"S-\" + \"fortuna\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's an irregular verb.", answer: "È un verbo irregolare.", altAnswers: [], explanation: "\"In-\" → \"ir-\" before \"r\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Defrost] the chicken. (to a friend)", sentence: "___ il pollo.", answer: "Scongela", explanation: "\"S-\" + \"congelare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's very [immature].", sentence: "È molto ___.", answer: "immaturo", explanation: "\"In-\" → \"im-\" before \"m\"." },
      { type: "word-order", prompt: "Put the words in order to say: I've booked a table for eight.", words: ["Ho", "prenotato", "un", "tavolo", "per", "le", "otto."], translation: "I've booked a table for eight o'clock.", explanation: "\"Pre-\" + \"notare\"." },
      { type: "multiple-choice", question: "Which word is spelled correctly?", options: ["illegale", "inlegale", "ilegale", "inllegale"], correctIndex: 0, explanation: "\"In-\" + \"l\" → \"ill-\"." },
      { type: "dictation", audio: "Ho disattivato le notifiche e ho riletto la mail.", explanation: "\"Dis-\" and \"ri-\"." },
      { type: "speak", text: "Scusi, è impossibile parcheggiare qui? Ho prenotato un tavolo e non trovo posto.", prompt: "Ask a waiter (formal): Excuse me, is it impossible to park here? I've booked a table and I can't find a space.", tip: "\"Impossibile\": the \"m\" joins the \"p\", im-pos-SI-bi-le.", explanation: "\"Im-\" and \"pre-\"." },
    ],
  },
  {
    slug: "b1-drill-word-families",
    level: "IT-B1",
    number: 6,
    title: "Drill: Word Families",
    summary: "Build words from a root, fast: verb → noun → person → adjective → opposite.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "One root, many words",
        body: [
          "A family: \"lavorare\" (to work) → \"il lavoro\" → \"il lavoratore / la lavoratrice\" → \"lavorativo\" (working, as in \"giorno lavorativo\"). Another: \"possibile\" → \"impossibile\" → \"la possibilità\". Learn words in families and you multiply your vocabulary.",
        ],
        examples: [
          { es: "Domani è un giorno lavorativo.", en: "Tomorrow is a workday." },
          { es: "Organizzare una festa richiede organizzazione.", en: "Organizing a party takes organization." },
          { es: "Il pagamento è impossibile senza carta.", en: "Payment is impossible without a card." },
          { es: "Il lettore attento rilegge.", en: "The careful reader rereads." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow is a workday.", answer: "Domani è un giorno lavorativo.", altAnswers: ["Domani è giorno lavorativo."], explanation: "\"Lavoro\" → \"lavorativo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Organizing a party takes organization.", answer: "Organizzare una festa richiede organizzazione.", altAnswers: ["Per organizzare una festa ci vuole organizzazione."], explanation: "\"Organizzare\" → \"organizzazione\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The writer reread the book.", answer: "Lo scrittore ha riletto il libro.", altAnswers: ["La scrittrice ha riletto il libro."], explanation: "\"Scrivere\" → \"scrittore\"; \"ri-\" + \"leggere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The reservation is confirmed.", answer: "La prenotazione è confermata.", altAnswers: ["La prenotazione è stata confermata."], explanation: "\"Prenotare\" → \"prenotazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The workers are on strike.", answer: "I lavoratori sono in sciopero.", altAnswers: ["I lavoratori scioperano.", "I lavoratori fanno sciopero."], explanation: "\"Lavorare\" → \"lavoratori\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This change is necessary.", answer: "Questo cambiamento è necessario.", altAnswers: [], explanation: "\"Cambiare\" → \"cambiamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Safety is our priority.", answer: "La sicurezza è la nostra priorità.", altAnswers: [], explanation: "\"Sicuro\" → \"sicurezza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a very dangerous road.", answer: "È una strada molto pericolosa.", altAnswers: ["È una strada pericolosissima."], explanation: "\"Pericolo\" → \"pericoloso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The text isn't legible.", answer: "Il testo non è leggibile.", altAnswers: [], explanation: "\"Leggere\" → \"leggibile\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's very dishonest.", answer: "È molto disonesto.", altAnswers: ["Lui è molto disonesto."], explanation: "\"Dis-\" + \"onesto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's a very creative player.", answer: "È una giocatrice molto creativa.", altAnswers: ["Lei è una giocatrice molto creativa."], explanation: "\"Giocare\" → \"giocatrice\"; \"creare\" → \"creativo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Payment is made at the end.", answer: "Il pagamento si fa alla fine.", altAnswers: ["Il pagamento è alla fine.", "Si paga alla fine."], explanation: "\"Pagare\" → \"pagamento\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [beauty] of the coast is famous.", sentence: "La ___ della costa è famosa.", answer: "bellezza", explanation: "\"Bello\" → \"bellezza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's an [unreal] situation.", sentence: "È una situazione ___.", answer: "irreale", explanation: "\"In-\" → \"ir-\" before \"r\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [information] is online.", sentence: "Le ___ sono online.", answer: "informazioni", explanation: "Plural in Italian." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My [curiosity] is endless.", sentence: "La mia ___ è infinita.", answer: "curiosità", explanation: "\"Curioso\" → \"curiosità\"." },
      { type: "word-order", prompt: "Put the words in order to say: The national team has a new player.", words: ["La", "nazionale", "ha", "un", "nuovo", "giocatore."], translation: "The national team has a new player.", explanation: "\"La nazionale\" = the national team." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la costruzione", right: "construction" }, { left: "il trasferimento", right: "move, transfer" }, { left: "la lentezza", right: "slowness" }, { left: "la pianista", right: "pianist (a woman)" }, { left: "rumoroso", right: "noisy" }], explanation: "Suffixes: \"-zione\", \"-mento\", \"-ezza\", \"-ista\", \"-oso\"." },
      { type: "dictation", audio: "La possibilità di un cambiamento mi rende felice.", explanation: "\"-ità\" and \"-mento\"." },
      { type: "dictation", audio: "È impossibile leggere: il testo è illeggibile.", explanation: "\"Il-\" + \"leggibile\"." },
      { type: "speak", text: "Il lavoratore ha fatto la prenotazione, ma il pagamento è impossibile senza carta.", prompt: "Say it: The worker made the reservation, but payment is impossible without a card.", tip: "Stress the suffix syllables: la-vo-ra-TO-re, pre-no-ta-ZIO-ne, pa-ga-MEN-to.", explanation: "Four derived words." },
    ],
  },
  {
    slug: "b1-drill-diminutives-suffixes",
    level: "IT-B1",
    number: 7,
    title: "Drill: Suffixes",
    summary: "Produce diminutives, augmentatives and pejoratives fast, and tell them from false diminutives.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Small, big, bad",
        body: [
          "Small: \"-ino\", \"-etto\", \"-ello\". Big: \"-one\". Bad: \"-accio\". The gender usually stays, except some feminine nouns with \"-one\" (\"la porta\" → \"il portone\"). Watch the false diminutives: \"mulino\", \"tacchino\", \"postino\", \"rubinetto\".",
        ],
        examples: [
          { es: "Che bel gattino!", en: "What a lovely kitten!" },
          { es: "Che tempaccio!", en: "What awful weather!" },
          { es: "Ho trovato un affarone.", en: "I've found a great bargain." },
          { es: "Il tacchino è nel forno.", en: "The turkey is in the oven." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a lovely kitten!", answer: "Che bel gattino!", altAnswers: ["Che gattino carino!", "Che bel micino!"], explanation: "\"Gatto\" + \"-ino\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've found a great bargain.", answer: "Ho trovato un affarone.", altAnswers: ["Ho fatto un affarone."], explanation: "\"Affare\" + \"-one\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They live in a little house by the sea.", answer: "Vivono in una casetta al mare.", altAnswers: ["Abitano in una casetta al mare.", "Vivono in una casetta sul mare."], explanation: "\"Casa\" + \"-etta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wait a moment, please. (to a friend)", answer: "Aspetta un momentino, per favore.", altAnswers: ["Aspetta un attimino, per favore.", "Aspetta un attimo, per favore."], explanation: "Softening diminutive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a terrible day.", answer: "Ho avuto una giornataccia.", altAnswers: ["Ho passato una giornataccia."], explanation: "\"-accia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't say swear words!", answer: "Non dire parolacce!", altAnswers: ["Non dire le parolacce!"], explanation: "\"Parolaccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The little girl has a little dog.", answer: "La bambina ha un cagnolino.", altAnswers: ["La bambina ha un cagnetto."], explanation: "\"Cane\" → \"cagnolino\": irregular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I made a fool of myself at the party.", answer: "Ho fatto una figuraccia alla festa.", altAnswers: ["Alla festa ho fatto una figuraccia."], explanation: "\"Figuraccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The turkey is in the oven.", answer: "Il tacchino è nel forno.", altAnswers: ["Il tacchino è in forno."], explanation: "False diminutive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The main door is open.", answer: "Il portone è aperto.", altAnswers: [], explanation: "\"La porta\" → \"il portone\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have a sandwich.", answer: "Prendo un panino.", altAnswers: ["Mangio un panino.", "Prendo un panino, grazie."], explanation: "\"Panino\": a word of its own." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's a big eater.", answer: "È un mangione.", altAnswers: ["Lui è un mangione."], explanation: "\"Mangiare\" → \"mangione\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Look at the baby's [little hands]!", sentence: "Guarda le ___ del bambino!", answer: "manine", explanation: "\"Mano\" (feminine) → \"manina\", plural \"manine\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's a [little tree] on the balcony.", sentence: "Sul balcone c'è un ___.", answer: "alberello", explanation: "\"Albero\" + \"-ello\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got a [very high fever].", sentence: "Ho un ___.", answer: "febbrone", explanation: "\"Febbre\" + \"-one\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a [sketchy place].", sentence: "È un ___.", answer: "postaccio", explanation: "\"Posto\" + \"-accio\"." },
      { type: "word-order", prompt: "Put the words in order to say: Shall we grab a quick coffee?", words: ["Prendiamo", "un", "caffettino?"], translation: "Shall we grab a quick coffee?", explanation: "Friendly diminutive." },
      { type: "multiple-choice", question: "Which is NOT a diminutive of another word?", options: ["mulino", "gattino", "casetta", "alberello"], correctIndex: 0, explanation: "\"Mulino\" = mill." },
      { type: "dictation", audio: "Che tempaccio! Prendiamo un caffettino al bar?", explanation: "Pejorative and diminutive." },
      { type: "dictation", audio: "Il postino ha lasciato un pacchetto davanti al portone.", explanation: "\"Postino\", \"pacchetto\", \"portone\"." },
      { type: "speak", text: "Che giornataccia! Però stasera mi aspetta un bel panino e il mio gattino.", prompt: "Say it: What a terrible day! But tonight a nice sandwich and my kitten are waiting for me.", tip: "Stress moves to the suffix: gat-TI-no.", explanation: "Pejorative, false diminutive, real diminutive." },
    ],
  },
  {
    slug: "b1-error-hunt-word-formation",
    level: "IT-B1",
    number: 8,
    title: "Error Hunt: Word Formation",
    summary: "Fix the classic slips: il casetta, inlegale, inregolare, un piccolo casino for a little house, and disfacile.",
    duration: "17 min",
    sections: [
      {
        heading: "Gender and prefix spelling",
        body: [
          "Each sentence below has one mistake. \"Il casetta\": a diminutive keeps the gender of the base word, so \"la casa\" → \"la casetta\", \"la borsa\" → \"la borsetta\".",
          "\"Inlegale\" and \"inregolare\" ignore the sound change: \"in-\" becomes \"il-\" before \"l\" and \"ir-\" before \"r\", with a double consonant: \"illegale\", \"irregolare\", \"irresponsabile\". Before \"p\", \"b\" and \"m\" it becomes \"im-\": \"impossibile\", not \"inpossibile\".",
        ],
        examples: [
          { es: "La casetta è sul lago.", en: "The little house is on the lake." },
          { es: "È illegale fumare qui.", en: "It's illegal to smoke here." },
          { es: "Ha un battito irregolare.", en: "He has an irregular heartbeat." },
          { es: "È un comportamento irresponsabile.", en: "It's irresponsible behavior." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"inlegale\". Write it correctly: It's illegal to smoke here.", source: "It's illegal to smoke here.", answer: "È illegale fumare qui.", altAnswers: ["Fumare qui è illegale.", "Qui è illegale fumare."], explanation: "\"In-\" → \"il-\" before \"l\"." },
          { type: "fill-blank", prompt: "A learner wrote \"il casetta\". Write the Italian for the bold words.", en: "[The little house] is on the lake.", sentence: "___ è sul lago.", answer: "La casetta", explanation: "Same gender as \"la casa\"." },
        ],
      },
      {
        heading: "Casino is not a little house",
        body: [
          "\"Un piccolo casino\" for a little house is a classic trap. \"Casino\" is a false diminutive: in everyday speech it means a mess or a racket (\"Che casino!\" = what a mess!); it's very common but informal, so avoid it in formal situations. The gambling house is \"il casinò\", with the stress on the last syllable. A little house is \"una casetta\" or \"una casina\".",
        ],
        examples: [
          { es: "Abbiamo affittato una casetta in montagna.", en: "We've rented a little house in the mountains." },
          { es: "Che casino in cucina!", en: "What a mess in the kitchen!" },
          { es: "A Sanremo c'è un casinò famoso.", en: "There's a famous casino in Sanremo." },
          { es: "Hanno una casina con l'orto.", en: "They've got a little house with a vegetable garden." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"un piccolo casino\". Write it correctly: We've rented a little house in the mountains.", source: "We've rented a little house in the mountains.", answer: "Abbiamo affittato una casetta in montagna.", altAnswers: ["Abbiamo affittato una casina in montagna.", "Abbiamo preso in affitto una casetta in montagna."], explanation: "\"Casetta\", not \"casino\"." },
          { type: "listen-choose", audio: "Che casino in cucina!", question: "What's the speaker talking about?", options: ["a mess in the kitchen", "a little house with a kitchen", "a casino", "a new kitchen"], correctIndex: 0, explanation: "\"Casino\" = mess (informal)." },
        ],
      },
      {
        heading: "Difficile, not disfacile",
        body: [
          "\"Disfacile\" doesn't exist: the opposite of \"facile\" is \"difficile\" (a separate word). Not every adjective takes a prefix for its opposite: \"buono\" → \"cattivo\", \"bello\" → \"brutto\", \"caro\" → \"economico\". \"Dis-\" works with a limited set: \"disonesto\", \"disordinato\", \"disoccupato\", \"disattento\".",
        ],
        examples: [
          { es: "L'esame era difficile.", en: "The exam was difficult." },
          { es: "Il mio coinquilino è disordinato.", en: "My roommate is messy." },
          { es: "Era distratto e disattento.", en: "He was distracted and careless." },
          { es: "Non è caro, anzi è economico.", en: "It's not expensive, in fact it's cheap." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"disfacile\". Write it correctly: The exam was difficult.", source: "The exam was difficult.", answer: "L'esame era difficile.", altAnswers: ["L'esame è stato difficile."], explanation: "\"Difficile\" is the opposite of \"facile\"." },
          { type: "multiple-choice", question: "Which word exists?", options: ["disordinato", "disfacile", "disbello", "discaro"], correctIndex: 0, explanation: "\"Dis-\" + \"ordinato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"inregolare\". Write it correctly: Andare is an irregular verb.", source: "Andare is an irregular verb.", answer: "Andare è un verbo irregolare.", altAnswers: ["Andare è irregolare."], explanation: "\"In-\" → \"ir-\" before \"r\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"il borsetta\". Write it correctly: The little bag is on the chair.", source: "The little bag is on the chair.", answer: "La borsetta è sulla sedia.", altAnswers: [], explanation: "\"La borsa\" → \"la borsetta\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"un piccolo casino\". Write it correctly: They live in a little house.", source: "They live in a little house.", answer: "Vivono in una casetta.", altAnswers: ["Abitano in una casetta.", "Vivono in una casina.", "Abitano in una casina."], explanation: "\"Casetta\" or \"casina\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"disfacile\". Write it correctly: It's very difficult.", source: "It's very difficult.", answer: "È molto difficile.", altAnswers: ["È difficilissimo.", "È difficilissima."], explanation: "\"Difficile\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"inpossibile\". Write it correctly: It's impossible.", source: "It's impossible.", answer: "È impossibile.", altAnswers: [], explanation: "\"Im-\" before \"p\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"inresponsabile\". Write it correctly: That's irresponsible.", source: "That's irresponsible.", answer: "È irresponsabile.", altAnswers: ["Questo è irresponsabile."], explanation: "\"Ir-\" before \"r\"." },
      { type: "fill-blank", prompt: "A learner wrote \"ilegale\". Write the Italian for the bold words.", en: "Parking here is [illegal].", sentence: "Parcheggiare qui è ___.", answer: "illegale", explanation: "Double \"l\"." },
      { type: "fill-blank", prompt: "A learner wrote \"il manina\". Write the Italian for the bold words.", en: "[The little hand] is cold.", sentence: "___ è fredda.", answer: "La manina", explanation: "\"La mano\" is feminine, so is \"la manina\"." },
      { type: "word-order", prompt: "Put the words in order to say: What a mess in the kitchen!", words: ["Che", "casino", "in", "cucina!"], translation: "What a mess in the kitchen!", explanation: "\"Casino\" = mess." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Il mio coinquilino è disordinato e irresponsabile.", "Il mio coinquilino è inordinato e inresponsabile.", "Il mio coinquilino è disordinato e inresponsabile.", "Il mio coinquilino è sordinato e irresponsabile."], correctIndex: 0, explanation: "\"Dis-\" + \"ordinato\"; \"ir-\" before \"r\"." },
      { type: "dictation", audio: "È illegale e irresponsabile guidare così.", explanation: "\"Ill-\" and \"irr-\"." },
      { type: "speak", text: "Abbiamo affittato una casetta in montagna: è impossibile trovare qualcosa di più bello!", prompt: "Fix it and say it: a learner said \"Abbiamo affittato un piccolo casino in montagna: è inpossibile trovare qualcosa di più bello!\"", tip: "\"Casetta\": double \"t\", ca-SET-ta.", explanation: "Two fixes: \"casetta\", \"impossibile\"." },
    ],
  },
  {
    slug: "b1-sound-stress-shift",
    level: "IT-B1",
    number: 9,
    title: "Sounds: Stress Shift",
    summary: "Hear the stress move onto the suffix: GAT-to → gat-TI-no, CA-sa → ca-SET-ta, LI-bro → li-BRO-ne, and write what you hear.",
    duration: "17 min",
    sections: [
      {
        heading: "The suffix takes the stress",
        body: [
          "When you add a suffix, the stress moves onto it. \"Gatto\" is stressed on the first syllable (GAT-to); \"gattino\" on the second (gat-TI-no). \"Casa\" (CA-sa) becomes \"casetta\" (ca-SET-ta); \"libro\" (LI-bro) becomes \"librone\" (li-BRO-ne); \"parola\" (pa-RO-la) becomes \"parolaccia\" (pa-ro-LAC-cia).",
          "This is regular for \"-ino\", \"-etto\", \"-ello\", \"-one\", \"-accio\", \"-oso\", \"-ale\" and \"-mento\": the stressed vowel is the first vowel of the suffix.",
        ],
        examples: [
          { es: "gatto, gattino", en: "cat, kitten" },
          { es: "casa, casetta", en: "house, little house" },
          { es: "libro, librone", en: "book, big book" },
          { es: "parola, parolaccia", en: "word, swear word" },
          { es: "rumore, rumoroso", en: "noise, noisy" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "gattino", question: "What did you hear?", options: ["gattino", "gatto", "gattone", "gattaccio"], correctIndex: 0, explanation: "Stress on TI: gat-TI-no." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The kitten is sleeping in the little house.", answer: "Il gattino dorme nella casetta.", altAnswers: ["Il gattino sta dormendo nella casetta."], explanation: "Two diminutives." },
        ],
      },
      {
        heading: "-ità and -zione",
        body: [
          "Some suffixes pull the stress right to the end. Nouns in \"-ità\" are stressed on the final vowel, which carries a written accent: fa-ci-li-TÀ, cu-rio-si-TÀ. Nouns in \"-zione\" are stressed on the \"-zio-\": in-for-ma-ZIO-ne, pre-no-ta-ZIO-ne.",
          "Adjectives in \"-bile\" are different: the stress falls on the syllable before \"-bile\": leg-GI-bi-le, la-VA-bi-le, pos-SI-bi-le.",
        ],
        examples: [
          { es: "facile, facilità", en: "easy, ease" },
          { es: "possibile, possibilità", en: "possible, possibility" },
          { es: "informare, informazione", en: "to inform, information" },
          { es: "leggere, leggibile", en: "to read, legible" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "possibilità", question: "What did you hear?", options: ["possibilità", "possibile", "possibilmente", "possibili"], correctIndex: 0, explanation: "Final stress: pos-si-bi-li-TÀ." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's no [possibility].", sentence: "Non c'è nessuna ___.", answer: "possibilità", explanation: "Write the accent on the final \"à\"." },
        ],
      },
      {
        heading: "Look-alikes",
        body: [
          "Listen carefully to similar pairs: \"casetta\" (little house) vs \"cassetta\" (crate, box), with a long \"s\". \"Casino\" (mess) is stressed ca-SI-no, \"casinò\" (gambling house) ca-si-NÒ. \"Pala\" (shovel) vs \"palla\" (ball) vs \"pallone\" (ball, often a soccer ball).",
        ],
        examples: [
          { es: "una cassetta di arance", en: "a crate of oranges" },
          { es: "una casetta al mare", en: "a little house by the sea" },
          { es: "Che casino!", en: "What a mess!" },
          { es: "il casinò di Venezia", en: "the Venice casino" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ho comprato una cassetta di arance.", question: "What did you hear?", options: ["cassetta", "casetta", "casina", "cartella"], correctIndex: 0, explanation: "Long \"ss\": cas-SET-ta = crate." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought a crate of oranges.", answer: "Ho comprato una cassetta di arance.", altAnswers: [], explanation: "\"Cassetta\", double \"s\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They have a little house by the sea.", answer: "Hanno una casetta al mare.", altAnswers: ["Hanno una casetta sul mare."], explanation: "\"Casetta\", single \"s\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Swear words are forbidden.", answer: "Le parolacce sono vietate.", altAnswers: ["Le parolacce sono proibite.", "È vietato dire parolacce."], explanation: "pa-ro-LAC-ce." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need some information.", answer: "Mi serve un'informazione.", altAnswers: ["Mi servono delle informazioni.", "Ho bisogno di un'informazione."], explanation: "in-for-ma-ZIO-ne." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Curiosity is a quality.", answer: "La curiosità è una qualità.", altAnswers: [], explanation: "Two \"-ità\" nouns, final stress." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The big book is on the table.", answer: "Il librone è sul tavolo.", altAnswers: [], explanation: "li-BRO-ne." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The writing is legible.", answer: "La scrittura è leggibile.", altAnswers: [], explanation: "leg-GI-bi-le." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The neighbors are [noisy].", sentence: "I vicini sono ___.", answer: "rumorosi", explanation: "ru-mo-RO-si." },
      { type: "word-order", prompt: "Put the words in order to say: The reservation is easy.", words: ["La", "prenotazione", "è", "facile."], translation: "The reservation is easy.", explanation: "pre-no-ta-ZIO-ne." },
      { type: "listen-choose", audio: "Che casino in camera tua!", question: "What did you hear?", options: ["casino", "casinò", "casina", "cassino"], correctIndex: 0, explanation: "Stress on SI: ca-SI-no = mess." },
      { type: "dictation", audio: "La casetta ha un alberello e un gattino.", explanation: "Three diminutives, stress on the suffix." },
      { type: "dictation", audio: "Che facilità! La prenotazione è stata velocissima.", explanation: "\"Facilità\" with the accent." },
      { type: "speak", text: "Il gattino dorme nella casetta, ma il gattone dorme sul librone.", prompt: "Say it aloud, stressing each suffix.", tip: "gat-TI-no, ca-SET-ta, gat-TO-ne, li-BRO-ne.", explanation: "Stress moves to the suffix." },
    ],
  },
  {
    slug: "b1-reading-lab-word-play",
    level: "IT-B1",
    number: 10,
    title: "Reading Lab: A Text Full of Suffixes",
    summary: "Read a playful short story full of diminutives, augmentatives and pejoratives, and work out what each word means.",
    duration: "18 min",
    sections: [
      {
        heading: "The story, part 1",
        body: [
          "\"C'era una volta, in un paesello di collina, una casetta con un giardinetto. Ci viveva la signora Pina con il suo gattino, Briciola. Ogni mattina la signora Pina prendeva un caffettino, apriva la finestrella e salutava il postino. Una mattina, però, sul davanzale c'era un gattone enorme, con un nasone rosa e un'aria da ragazzaccio.\"",
          "Guess from the base words: \"paese\" → \"paesello\", \"giardino\" → \"giardinetto\", \"finestra\" → \"finestrella\". \"Briciola\" (crumb) is a typical pet name. \"Postino\" is a false diminutive.",
        ],
        examples: [
          { es: "C'era una volta un paesello di collina.", en: "Once upon a time there was a little hill village." },
          { es: "La signora Pina apriva la finestrella.", en: "Signora Pina would open the little window." },
          { es: "Sul davanzale c'era un gattone enorme.", en: "On the windowsill there was a huge tomcat." },
          { es: "Aveva un'aria da ragazzaccio.", en: "He looked like a rascal." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What did Signora Pina find on the windowsill?", options: ["a huge cat", "a kitten", "a mail carrier", "a little bird"], correctIndex: 0, explanation: "\"Un gattone enorme\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every morning she had a little coffee.", answer: "Ogni mattina prendeva un caffettino.", altAnswers: ["Ogni mattina beveva un caffettino.", "Tutte le mattine prendeva un caffettino."], explanation: "Imperfetto for habits." },
        ],
      },
      {
        heading: "The story, part 2",
        body: [
          "\"Briciola, spaventatissima, si nascose sotto il tavolino. Il gattone, invece, saltò in cucina, mangiò mezzo panino e fece un pasticcio. «Che maleducato!» disse la signora Pina. Ma poi vide che il gattone aveva una zampina ferita. Lo curò, gli diede una ciotolina di latte e da quel giorno Briciola e il gattone diventarono amiconi.\"",
          "\"Amicone\" (big friend) is affectionate: best buddies. \"Zampina\" is a little paw; \"ciotolina\" a little bowl. Note the passato remoto, the tense of stories: \"si nascose\", \"saltò\", \"fece\", \"diede\".",
        ],
        examples: [
          { es: "Briciola si nascose sotto il tavolino.", en: "Briciola hid under the little table." },
          { es: "Il gattone fece un pasticcio.", en: "The big cat made a mess." },
          { es: "Aveva una zampina ferita.", en: "He had an injured paw." },
          { es: "Diventarono amiconi.", en: "They became best buddies." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Why did Signora Pina change her mind about the big cat?", options: ["He had an injured paw.", "He was very polite.", "He brought her a present.", "He belonged to the mail carrier."], correctIndex: 0, explanation: "\"Aveva una zampina ferita\"." },
          { type: "listen-choose", audio: "Da quel giorno Briciola e il gattone diventarono amiconi.", question: "What happened in the end?", options: ["The two cats became great friends.", "The big cat left.", "Briciola ran away.", "The cats fought every day."], correctIndex: 0, explanation: "\"Amiconi\" = great friends." },
        ],
      },
      {
        heading: "Guessing meanings",
        body: [
          "Strategy: strip the suffix, find the base, then decide what the suffix adds (small, sweet, big, bad). Then check the context: \"tavolino\" and \"postino\" are words of their own. Some suffixed words are tone, not size: \"amiconi\" isn't about big friends, it's about closeness.",
        ],
        examples: [
          { es: "finestrella: finestra + -ella", en: "little window" },
          { es: "giardinetto: giardino + -etto", en: "small garden" },
          { es: "nasone: naso + -one", en: "big nose" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "In the story, which word is NOT a real diminutive?", options: ["postino", "gattino", "finestrella", "zampina"], correctIndex: 0, explanation: "\"Postino\" = mail carrier." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cat had an injured paw.", answer: "Il gatto aveva una zampa ferita.", altAnswers: ["Il gatto aveva una zampina ferita.", "Il gattone aveva una zampina ferita."], explanation: "\"Zampa\" = paw." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once upon a time there was a little house.", answer: "C'era una volta una casetta.", altAnswers: ["C'era una volta una piccola casa."], explanation: "Fairy-tale opening." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The kitten hid under the table.", answer: "Il gattino si nascose sotto il tavolino.", altAnswers: ["Il gattino si è nascosto sotto il tavolino.", "Il gattino si nascose sotto il tavolo."], explanation: "\"Nascondersi\": \"si nascose\" (passato remoto)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The big cat made a mess.", answer: "Il gattone fece un pasticcio.", altAnswers: ["Il gattone ha fatto un pasticcio.", "Il gattone fece un disastro."], explanation: "\"Pasticcio\" = mess." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She gave him a little bowl of milk.", answer: "Gli diede una ciotolina di latte.", altAnswers: ["Gli ha dato una ciotolina di latte.", "Gli diede una ciotola di latte."], explanation: "\"Ciotola\" + \"-ina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They became best buddies.", answer: "Diventarono amiconi.", altAnswers: ["Sono diventati amiconi.", "Diventarono grandi amici."], explanation: "\"Amicone\": affectionate." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He had a big pink nose.", answer: "Aveva un nasone rosa.", altAnswers: [], explanation: "\"Rosa\" doesn't change." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She opened the [little window].", sentence: "Aprì la ___.", answer: "finestrella", explanation: "\"Finestra\" + \"-ella\"." },
      { type: "word-order", prompt: "Put the words in order to say: He looked like a rascal.", words: ["Aveva", "un'aria", "da", "ragazzaccio."], translation: "He looked like a rascal.", explanation: "\"Avere un'aria da\" = to look like." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "paesello", right: "little village" }, { left: "giardinetto", right: "small garden" }, { left: "zampina", right: "little paw" }, { left: "amiconi", right: "best buddies" }, { left: "ragazzaccio", right: "rascal" }], explanation: "Base word + suffix." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every morning she said hello to the mail carrier.", answer: "Ogni mattina salutava il postino.", altAnswers: ["Tutte le mattine salutava il postino.", "Ogni mattina lei salutava il postino."], explanation: "Imperfetto for a habit; \"postino\" is a word of its own." },
      { type: "dictation", audio: "C'era una volta una casetta con un giardinetto.", explanation: "Two diminutives." },
      { type: "speak", text: "Un gattone entra nella casetta, fa un pasticcio, ma alla fine diventa amicone del gattino.", prompt: "Summarize the story: A big cat comes into the little house, makes a mess, but in the end becomes the kitten's best buddy.", tip: "Stress the suffixes: gat-TO-ne, ca-SET-ta, a-mi-CO-ne.", explanation: "One-sentence summary in the present." },
    ],
  },
];

export const IT_B1_U31_WRITING: WriteExercise = {
  type: "write",
  prompt: "Describe the house or neighborhood where you grew up (100-140 words). Use at least six derived words: diminutives or augmentatives (casetta, giardinetto, portone), a pejorative (tempaccio, postaccio), adjectives with -oso / -ale / -bile, nouns with -zione / -mento / -ezza / -ità, or prefixed words (ri-, s-, dis-, in- / im-).",
  minWords: 90,
  maxWords: 150,
  rubric: [
    "Uses at least two diminutives or augmentatives with the right gender (la casetta, il portone)",
    "Uses at least one pejorative or affectionate suffix in a natural way (tempaccio, giornataccia, amicone)",
    "Uses at least two derived adjectives or nouns (rumoroso, tranquillità, bellezza, regionale)",
    "Uses at least one prefixed word with correct spelling (impossibile, illegale, irregolare, rifare, disordinato)",
    "Describes in the imperfetto (c'era, avevamo, giocavo)",
  ],
  modelAnswer: "Sono cresciuta in un paesello vicino a Lucca, in una casetta gialla con un giardinetto. Davanti c'era un vecchio portone di legno che faceva un rumore terribile. In giardino avevamo un alberello di limoni e un cagnolino, Pepe, che era il mio amicone. La mia camera era piccolina ma luminosa, sempre un po' disordinata. Il paese era tranquillo, quasi silenzioso: l'unico posto rumoroso era il bar della piazza, la domenica. D'inverno, quando c'era un tempaccio, era impossibile uscire, e io rileggevo i miei fumetti preferiti vicino al camino. Oggi abito in una città grande e moderna, ma mi manca la tranquillità di quella casetta e la bellezza delle colline.",
  explanation: "The text mixes diminutives (\"paesello\", \"casetta\", \"giardinetto\", \"alberello\", \"cagnolino\", \"piccolina\"), an augmentative (\"portone\", \"amicone\"), a pejorative (\"tempaccio\"), derived adjectives and nouns (\"rumoroso\", \"silenzioso\", \"tranquillità\", \"bellezza\") and prefixed words (\"disordinata\", \"impossibile\", \"rileggevo\"), all in the imperfetto.",
};
