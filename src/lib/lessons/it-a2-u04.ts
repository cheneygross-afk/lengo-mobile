// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u04.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 4: Articles and Prepositions in Full. Di, a, da, in, su
// + article, con and per, when a preposition takes the article, the
// partitive, a / in / da, contractions in fast speech.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U04: Lesson[] = [
  {
    slug: "a2-articulated-prepositions-1",
    level: "IT-A2",
    number: 1,
    title: "Articulated Prepositions, Part 1 of 2: Di and A",
    summary: "Join di and a with every definite article: del, dello, dell', della, dei, degli, delle; al, allo, all', alla, ai, agli, alle.",
    duration: "15 min",
    sections: [
      {
        heading: "Preposition + article = one word",
        body: [
          "When \"di\", \"a\", \"da\", \"in\" or \"su\" meet a definite article, they fuse into one word. You met some in Beginner as chunks: \"al bar\", \"alla stazione\", \"del treno\". Now the whole table.",
          "The article part follows exactly the rules you already know: \"il\" before most masculine nouns, \"lo\" before s + consonant, z, gn, ps, y, \"l'\" before a vowel. So the choice between \"del\", \"dello\" and \"dell'\" is the same choice as between \"il\", \"lo\" and \"l'\".",
        ],
        examples: [
          { es: "il libro → del libro, al libro", en: "the book → of the book, to the book" },
          { es: "lo studente → dello studente, allo studente", en: "the student → of the student, to the student" },
          { es: "l'amico → dell'amico, all'amico", en: "the friend → of the friend, to the friend" },
          { es: "la madre → della madre, alla madre", en: "the mother → of the mother, to the mother" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "the student's book", answer: "il libro dello studente", explanation: "\"Lo studente\" → \"dello studente\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm writing [to the] friend.", sentence: "Scrivo ___ amico.", answer: "all'", explanation: "\"L'amico\" → \"all'amico\"." },
        ],
      },
      {
        heading: "Di: del, dello, dell', della, dei, degli, delle",
        body: [
          "\"Di\" becomes \"de-\" before the article: \"del, dello, dell', della\" in the singular, \"dei, degli, delle\" in the plural. It shows possession and belonging: \"la macchina del vicino\" (the neighbour's car), \"il nome della via\" (the name of the street).",
          "English uses 's or of; Italian always uses \"di\" + article: never \"il vicino macchina\".",
        ],
        examples: [
          { es: "La macchina del vicino è nuova.", en: "The neighbour's car is new." },
          { es: "Qual è il nome della via?", en: "What's the name of the street?" },
          { es: "Le chiavi dell'ufficio sono qui.", en: "The office keys are here." },
          { es: "La festa degli studenti è sabato.", en: "The students' party is on Saturday." },
          { es: "Il colore delle pareti è bianco.", en: "The colour of the walls is white." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The neighbour's car is new.", answer: "La macchina del vicino è nuova.", altAnswers: ["L'auto del vicino è nuova."], explanation: "\"Di\" + \"il\" = \"del\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The party [of the] students is on Saturday.", sentence: "La festa ___ studenti è sabato.", answer: "degli", explanation: "\"Gli studenti\" → \"degli studenti\"." },
        ],
      },
      {
        heading: "A: al, allo, all', alla, ai, agli, alle",
        body: [
          "\"A\" + article: \"al, allo, all', alla, ai, agli, alle\". Use it for to and at with places that take an article (\"al cinema\", \"allo stadio\", \"all'aeroporto\"), for giving to someone (\"Do il libro alla professoressa\") and for clock times (\"alle otto\", \"all'una\").",
        ],
        examples: [
          { es: "Andiamo allo stadio domenica.", en: "We're going to the stadium on Sunday." },
          { es: "Ci vediamo all'aeroporto.", en: "See you at the airport." },
          { es: "Ho dato il regalo ai bambini.", en: "I gave the present to the children." },
          { es: "La lezione finisce all'una.", en: "The lesson finishes at one." },
          { es: "Ho scritto agli zii.", en: "I wrote to my aunt and uncle." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're going to the stadium on Sunday.", answer: "Andiamo allo stadio domenica.", altAnswers: ["Domenica andiamo allo stadio.", "Noi andiamo allo stadio domenica."], explanation: "\"Lo stadio\" → \"allo stadio\"." },
          { type: "listen-choose", audio: "Ci vediamo all'aeroporto.", question: "Where are they meeting?", options: ["at the airport", "at the station", "at the stadium", "at the hotel"], correctIndex: 0, explanation: "\"All'aeroporto\" = at the airport." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the name of the street?", answer: "Qual è il nome della via?", altAnswers: ["Come si chiama la via?", "Qual è il nome della strada?"], explanation: "\"Della\" = di + la; \"qual è\" with no apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The office keys are here.", answer: "Le chiavi dell'ufficio sono qui.", altAnswers: ["Le chiavi dell'ufficio sono qua."], explanation: "\"Dell'\" before a vowel." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I gave the present to the children.", answer: "Ho dato il regalo ai bambini.", altAnswers: ["Io ho dato il regalo ai bambini."], explanation: "\"I bambini\" → \"ai bambini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lesson finishes at one.", answer: "La lezione finisce all'una.", explanation: "\"L'una\" → \"all'una\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wrote to my aunt and uncle.", answer: "Ho scritto agli zii.", altAnswers: ["Ho scritto ai miei zii.", "Io ho scritto agli zii."], explanation: "\"Gli zii\" → \"agli zii\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The colour of the walls is white.", answer: "Il colore delle pareti è bianco.", explanation: "\"Le pareti\" → \"delle pareti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The price [of the] coffee has gone up.", sentence: "Il prezzo ___ caffè è aumentato.", answer: "del", explanation: "\"Il caffè\" → \"del caffè\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm going [to the] dentist's at four.", sentence: "Vado dal dentista ___ quattro.", answer: "alle", explanation: "Clock times: \"alle\" + hour." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The opening hours [of the] zoo", sentence: "L'orario ___ zoo", answer: "dello", explanation: "\"Lo zoo\" → \"dello zoo\"." },
      { type: "matching", instructions: "Match the article to its form with di.", pairs: [{ left: "il", right: "del" }, { left: "lo", right: "dello" }, { left: "l'", right: "dell'" }, { left: "i", right: "dei" }, { left: "gli", right: "degli" }, { left: "le", right: "delle" }], explanation: "\"De-\" + the article." },
      { type: "dictation", audio: "Le chiavi della macchina sono al bar.", explanation: "\"Della\", \"al\"." },
      { type: "speak", text: "Il fratello dell'amica di Giulia lavora all'aeroporto.", prompt: "Say it in Italian: The brother of Giulia's friend works at the airport.", tip: "\"Dell'amica\", \"all'aeroporto\": link the l to the vowel.", explanation: "\"Dell'\" and \"all'\" before vowels." },
    ],
  },
  {
    slug: "a2-articulated-prepositions-2",
    level: "IT-A2",
    number: 2,
    title: "Articulated Prepositions, Part 2 of 2: Da, In, Su",
    summary: "Join da, in and su with the article (dal, nel, sul and the rest), and keep con and per separate.",
    duration: "15 min",
    sections: [
      {
        heading: "Da: dal, dallo, dall', dalla, dai, dagli, dalle",
        body: [
          "\"Da\" + article follows the pattern of \"a\": \"dal, dallo, dall', dalla, dai, dagli, dalle\". It means from (\"Torno dall'ufficio\") and, with a person, to or at someone's place: \"Vado dal medico\", \"Sono dal parrucchiere\".",
          "Notice the double l in \"dallo\", \"dall'\", \"dalla\", \"dalle\": whenever the article starts with l (lo, l', la, le), the l doubles, with every preposition: \"della\", \"alla\", \"nella\", \"sulla\". \"Dal\", \"dai\" and \"dagli\" have a single l.",
        ],
        examples: [
          { es: "Torno dall'ufficio alle sei.", en: "I get back from the office at six." },
          { es: "Vado dal medico domani.", en: "I'm going to the doctor's tomorrow." },
          { es: "Il treno arriva dalla Svizzera.", en: "The train comes from Switzerland." },
          { es: "Sono stata dagli zii.", en: "I was at my aunt and uncle's." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the doctor's tomorrow.", answer: "Vado dal medico domani.", altAnswers: ["Domani vado dal medico.", "Vado dal dottore domani."], explanation: "\"Da\" + person = to their place." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I get back [from the] office at six.", sentence: "Torno ___ ufficio alle sei.", answer: "dall'", explanation: "\"L'ufficio\" → \"dall'ufficio\"." },
        ],
      },
      {
        heading: "In and su: nel, sul",
        body: [
          "\"In\" changes to \"ne-\": \"nel, nello, nell', nella, nei, negli, nelle\" (in the). \"Su\" changes to \"su-\": \"sul, sullo, sull', sulla, sui, sugli, sulle\" (on the).",
          "\"Le chiavi sono nel cassetto\" (in the drawer), \"Il gatto dorme sul divano\" (on the sofa). The trap is writing \"in il\" or \"su la\": the two words always merge.",
        ],
        examples: [
          { es: "Le chiavi sono nel cassetto.", en: "The keys are in the drawer." },
          { es: "Il latte è nello zaino.", en: "The milk is in the backpack." },
          { es: "Il gatto dorme sul divano.", en: "The cat sleeps on the sofa." },
          { es: "Ho lasciato gli occhiali sull'autobus.", en: "I left my glasses on the bus." },
          { es: "Nelle borse ci sono i regali.", en: "The presents are in the bags." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys are in the drawer.", answer: "Le chiavi sono nel cassetto.", explanation: "\"In\" + \"il\" = \"nel\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I left my glasses on the bus.", answer: "Ho lasciato gli occhiali sull'autobus.", altAnswers: ["Io ho lasciato gli occhiali sull'autobus."], explanation: "\"Su\" + \"l'\" = \"sull'\"." },
          { type: "listen-choose", audio: "Il gatto dorme sul divano.", question: "Where does the cat sleep?", options: ["on the sofa", "under the sofa", "in the bed", "on the chair"], correctIndex: 0, explanation: "\"Sul\" = on the." },
        ],
      },
      {
        heading: "Con and per stay apart",
        body: [
          "In modern Italian \"con\" and \"per\" are written separately: \"con il\", \"con gli\", \"per la\". You'll hear and read \"col\" and \"coi\" (\"col treno\", \"coi bambini\"), which are fine to recognise; \"per\" never merges.",
        ],
        examples: [
          { es: "Esco con gli amici.", en: "I'm going out with my friends." },
          { es: "Parlo con il direttore.", en: "I'm talking to the director." },
          { es: "Questo è per la mamma.", en: "This is for Mum." },
          { es: "Sono arrivati coi bambini.", en: "They arrived with the children." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going out with my friends.", answer: "Esco con gli amici.", altAnswers: ["Esco con i miei amici.", "Io esco con gli amici."], explanation: "\"Con\" + \"gli\": written as two words." },
          { type: "multiple-choice", question: "This present is for the teacher (a woman). Which is right?", options: ["Questo regalo è per la maestra.", "Questo regalo è perla maestra.", "Questo regalo è pella maestra.", "Questo regalo è alla per maestra."], correctIndex: 0, explanation: "\"Per\" never merges with the article." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train comes from Switzerland.", answer: "Il treno arriva dalla Svizzera.", altAnswers: ["Il treno viene dalla Svizzera."], explanation: "\"La Svizzera\" → \"dalla Svizzera\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cat sleeps on the sofa.", answer: "Il gatto dorme sul divano.", explanation: "\"Su\" + \"il\" = \"sul\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The presents are in the bags.", answer: "I regali sono nelle borse.", altAnswers: ["Nelle borse ci sono i regali."], explanation: "\"In\" + \"le\" = \"nelle\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was at my aunt and uncle's. (a woman speaking)", answer: "Sono stata dagli zii.", altAnswers: ["Sono stata dai miei zii.", "Io sono stata dagli zii."], explanation: "\"Da\" + \"gli\" = \"dagli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The books are on the shelves.", answer: "I libri sono sugli scaffali.", explanation: "\"Gli scaffali\" → \"sugli scaffali\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This is for Mum.", answer: "Questo è per la mamma.", altAnswers: ["Questo è per mamma."], explanation: "\"Per\" stays separate." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The milk is [in the] backpack.", sentence: "Il latte è ___ zaino.", answer: "nello", explanation: "\"Lo zaino\" → \"nello zaino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's a photo [on the] wall.", sentence: "C'è una foto ___ parete.", answer: "sulla", explanation: "\"La parete\" → \"sulla parete\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco has gone [to the] hairdresser's.", sentence: "Marco è andato ___ parrucchiere.", answer: "dal", explanation: "\"Da\" + person: \"dal parrucchiere\"." },
      { type: "multiple-choice", question: "In the drawer. Which is right?", options: ["nel cassetto", "in il cassetto", "nello cassetto", "nell cassetto"], correctIndex: 0, explanation: "\"Il cassetto\" → \"nel cassetto\"." },
      { type: "dictation", audio: "Le chiavi sono nella borsa, sul tavolo.", explanation: "\"Nella\", \"sul\"." },
      { type: "speak", text: "Torno dall'ufficio, passo dal panettiere e metto il pane sul tavolo.", prompt: "Say it in Italian: I come back from the office, drop in at the baker's and put the bread on the table.", tip: "dal-LUF-fi-cio: the l joins the vowel.", explanation: "\"Dall'\", \"dal\", \"sul\"." },
    ],
  },
  {
    slug: "a2-preposition-with-or-without-article",
    level: "IT-A2",
    number: 3,
    title: "In Centro or Nel Centro?",
    summary: "Leave out the article in fixed phrases (in centro, in ufficio, a casa, in Italia) and use it when the place is specific or described.",
    duration: "15 min",
    sections: [
      {
        heading: "Fixed phrases: no article",
        body: [
          "Many everyday places go without an article after \"in\" or \"a\": \"in centro\", \"in ufficio\", \"in banca\", \"in farmacia\", \"in macchina\", \"in treno\", \"a casa\", \"a scuola\", \"a letto\". Countries and regions too: \"in Italia\", \"in Toscana\".",
          "These are like English at home, at school, by car. Adding the article is not a small slip: \"nella banca\" sounds like a specific bank you've already mentioned.",
        ],
        examples: [
          { es: "Lavoro in centro.", en: "I work in the centre." },
          { es: "Sono in ufficio fino alle sei.", en: "I'm at the office until six." },
          { es: "Andiamo in macchina.", en: "Let's go by car." },
          { es: "I bambini sono a scuola.", en: "The children are at school." },
          { es: "Abitano in Toscana.", en: "They live in Tuscany." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm at the office until six.", answer: "Sono in ufficio fino alle sei.", altAnswers: ["Io sono in ufficio fino alle sei."], explanation: "\"In ufficio\": no article." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children are at school.", answer: "I bambini sono a scuola.", explanation: "\"A scuola\": no article." },
        ],
      },
      {
        heading: "Specific or described: article",
        body: [
          "Add the article when the place is a particular one or has a description: \"nel centro di Roma\", \"nella macchina di Marco\", \"nell'ufficio del direttore\", \"nella scuola di mia figlia\".",
          "Countries take the article when an adjective or phrase is added: \"in Italia\" but \"nell'Italia del Sud\", \"negli Stati Uniti\" (plural names always take it).",
        ],
        examples: [
          { es: "Abitiamo nel centro di Roma.", en: "We live in the centre of Rome." },
          { es: "Ho lasciato la borsa nella macchina di Marco.", en: "I left my bag in Marco's car." },
          { es: "La riunione è nell'ufficio del direttore.", en: "The meeting is in the director's office." },
          { es: "Mio cugino vive negli Stati Uniti.", en: "My cousin lives in the United States." },
          { es: "Nell'Italia del Sud fa caldo.", en: "It's hot in southern Italy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I left my bag in Marco's car.", answer: "Ho lasciato la borsa nella macchina di Marco.", altAnswers: ["Ho lasciato la borsa nell'auto di Marco."], explanation: "A specific car: \"nella macchina di Marco\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My cousin lives [in the] United States.", sentence: "Mio cugino vive ___ Stati Uniti.", answer: "negli", explanation: "Plural country names take the article." },
          { type: "listen-choose", audio: "La riunione è nell'ufficio del direttore.", question: "Where is the meeting?", options: ["in the director's office", "at the office", "in the centre", "in the director's car"], correctIndex: 0, explanation: "A described office takes the article: \"nell'ufficio del direttore\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work in the centre.", answer: "Lavoro in centro.", altAnswers: ["Io lavoro in centro."], explanation: "\"In centro\" with no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We live in the centre of Rome.", answer: "Abitiamo nel centro di Roma.", altAnswers: ["Viviamo nel centro di Roma.", "Abitiamo in centro a Roma."], explanation: "Described centre: \"nel centro di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's go by car.", answer: "Andiamo in macchina.", altAnswers: ["Andiamo in auto."], explanation: "\"In macchina\" = by car." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They live in Tuscany.", answer: "Abitano in Toscana.", altAnswers: ["Vivono in Toscana.", "Loro abitano in Toscana."], explanation: "Regions: \"in\" + no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's hot in southern Italy.", answer: "Nell'Italia del Sud fa caldo.", altAnswers: ["Fa caldo nell'Italia del Sud.", "Nel Sud Italia fa caldo.", "Al Sud fa caldo."], explanation: "A described country takes the article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to bed.", answer: "Vado a letto.", altAnswers: ["Io vado a letto."], explanation: "\"A letto\": no article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My daughter is [in the] school near the station.", sentence: "Mia figlia è ___ scuola vicino alla stazione.", answer: "nella", explanation: "A specific school: \"nella\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm going [to the] pharmacy.", sentence: "Vado ___ farmacia.", answer: "in", explanation: "\"In farmacia\": fixed phrase." },
      { type: "word-order", prompt: "Put the words in order to say: The meeting is in the director's office.", words: ["La", "riunione", "è", "nell'ufficio", "del", "direttore."], translation: "The meeting is in the director's office.", explanation: "Described: article." },
      { type: "multiple-choice", question: "We're travelling by train. Which is right?", options: ["Viaggiamo in treno.", "Viaggiamo nel treno.", "Viaggiamo al treno.", "Viaggiamo nello treno."], correctIndex: 0, explanation: "Transport: \"in\" + no article." },
      { type: "dictation", audio: "Lavoro in banca, ma abito nel centro di Bologna.", explanation: "Fixed phrase, then described place." },
      { type: "speak", text: "Di solito vado in ufficio in treno, ma oggi sono a casa.", prompt: "Say it in Italian: I usually go to the office by train, but today I'm at home.", tip: "No articles here: in ufficio, in treno, a casa.", explanation: "Three fixed phrases." },
    ],
  },
  {
    slug: "a2-drill-articulated-prepositions-1",
    level: "IT-A2",
    number: 4,
    title: "Drill: Del, Al, Dal, Nel, Sul",
    summary: "Fifty nouns with five prepositions: produce the merged form every time.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "The table",
        body: [
          "il → del, al, dal, nel, sul. lo → dello, allo, dallo, nello, sullo. l' → dell', all', dall', nell', sull'. la → della, alla, dalla, nella, sulla. i → dei, ai, dai, nei, sui. gli → degli, agli, dagli, negli, sugli. le → delle, alle, dalle, nelle, sulle.",
        ],
        examples: [
          { es: "sul tavolo, nello zaino, dall'aeroporto", en: "on the table, in the backpack, from the airport" },
          { es: "ai genitori, degli amici, sulle sedie", en: "to the parents, of the friends, on the chairs" },
          { es: "alla fermata, nei negozi, dagli zii", en: "at the stop, in the shops, at the aunt and uncle's" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "on the chairs", answer: "sulle sedie", explanation: "\"Le sedie\" → \"sulle\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "in the shops", answer: "nei negozi", explanation: "\"I negozi\" → \"nei\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bread is on the table.", answer: "Il pane è sul tavolo.", explanation: "\"Sul\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher's car", answer: "La macchina del professore", altAnswers: ["La macchina della professoressa", "L'auto del professore", "L'auto della professoressa"], explanation: "\"Del\" / \"della\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the cinema.", answer: "Vado al cinema.", altAnswers: ["Io vado al cinema."], explanation: "\"Al\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The plane arrives from the airport of Bari.", answer: "L'aereo arriva dall'aeroporto di Bari.", explanation: "\"Dall'\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a spider in the bathroom!", answer: "C'è un ragno nel bagno!", altAnswers: ["C'è un ragno in bagno!"], explanation: "\"Nel bagno\" or the fixed \"in bagno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children's toys", answer: "I giochi dei bambini", altAnswers: ["I giocattoli dei bambini"], explanation: "\"Dei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I gave the keys to the neighbours.", answer: "Ho dato le chiavi ai vicini.", altAnswers: ["Ho dato le chiavi ai vicini di casa."], explanation: "\"Ai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The book is in the backpack.", answer: "Il libro è nello zaino.", explanation: "\"Nello\" before z." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I put the glasses on the shelf.", answer: "Ho messo i bicchieri sullo scaffale.", altAnswers: ["Ho messo i bicchieri sulla mensola.", "Io ho messo i bicchieri sullo scaffale."], explanation: "\"Sullo\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm coming from the station.", answer: "Vengo dalla stazione.", altAnswers: ["Arrivo dalla stazione.", "Io vengo dalla stazione."], explanation: "\"Dalla\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The opinion [of the] experts", sentence: "L'opinione ___ esperti", answer: "degli", explanation: "\"Gli esperti\" → \"degli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We're going [to the] seaside.", sentence: "Andiamo ___ mare.", answer: "al", explanation: "\"Andare al mare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cups are [in the] cupboards.", sentence: "Le tazze sono ___ armadietti.", answer: "negli", explanation: "\"Gli armadietti\" → \"negli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's snow [on the] mountains.", sentence: "C'è la neve ___ montagne.", answer: "sulle", explanation: "\"Le montagne\" → \"sulle\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm writing [to the] students.", sentence: "Scrivo ___ studenti.", answer: "agli", explanation: "\"Gli studenti\" → \"agli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Let's meet [at the] entrance.", sentence: "Ci vediamo ___ ingresso.", answer: "all'", explanation: "\"L'ingresso\" → \"all'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A gift [from the] grandparents", sentence: "Un regalo ___ nonni", answer: "dai", explanation: "\"I nonni\" → \"dai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The dog is [on the] bed.", sentence: "Il cane è ___ letto.", answer: "sul", explanation: "\"Sul\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "dallo zio", right: "at the uncle's" }, { left: "nell'armadio", right: "in the wardrobe" }, { left: "sui libri", right: "on the books" }, { left: "alle nove", right: "at nine" }, { left: "delle ragazze", right: "of the girls" }], explanation: "Five merged forms." },
      { type: "dictation", audio: "Il libro dello studente è sul tavolo della cucina.", explanation: "\"Dello\", \"sul\", \"della\"." },
      { type: "dictation", audio: "Vado dal medico e poi al supermercato.", explanation: "\"Dal\" (person), \"al\"." },
      { type: "speak", text: "Le chiavi sono nella borsa, gli occhiali sul tavolo e il telefono nello zaino.", prompt: "Say it in Italian: The keys are in the bag, the glasses on the table and the phone in the backpack.", tip: "Double l in nella and nello.", explanation: "\"Nella\", \"sul\", \"nello\"." },
    ],
  },
  {
    slug: "a2-partitive",
    level: "IT-A2",
    number: 5,
    title: "Some: The Partitive",
    summary: "Say some with del, dello, dell', della, dei, degli, delle, or with un po' di, and drop it in negatives.",
    duration: "15 min",
    sections: [
      {
        heading: "Del pane, delle mele",
        body: [
          "To say some, Italian uses \"di\" + article, the same words as of the: \"del pane\" (some bread), \"dello zucchero\", \"dell'acqua\", \"della frutta\", \"dei biscotti\", \"degli spinaci\", \"delle mele\".",
          "The partitive is optional: \"Compro pane e latte\" is just as correct as \"Compro del pane e del latte\". Use it when you mean an unspecified amount, especially at the start of a list or after \"c'è\".",
        ],
        examples: [
          { es: "Compro del pane e dello zucchero.", en: "I'm buying some bread and some sugar." },
          { es: "Vuoi dell'acqua?", en: "Would you like some water?" },
          { es: "C'è della frutta in frigo.", en: "There's some fruit in the fridge." },
          { es: "Ho comprato dei biscotti per la colazione.", en: "I bought some biscuits for breakfast." },
          { es: "Prendiamo delle mele al mercato.", en: "Let's get some apples at the market." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you like some water? (to a friend)", answer: "Vuoi dell'acqua?", altAnswers: ["Vuoi un po' d'acqua?", "Vuoi un po' di acqua?", "Vuoi acqua?"], explanation: "\"Dell'\" before a vowel." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I bought [some] biscuits for breakfast.", sentence: "Ho comprato ___ biscotti per la colazione.", answer: "dei", explanation: "\"I biscotti\" → \"dei\"." },
        ],
      },
      {
        heading: "Un po' di",
        body: [
          "For uncountable things, \"un po' di\" (a bit of) is a friendly alternative, very common in speech and at the shop: \"un po' di pane\", \"un po' di formaggio\". Before a vowel: \"un po' d'acqua\".",
          "Spelling: \"po'\" has an apostrophe, never an accent.",
        ],
        examples: [
          { es: "Vorrei un po' di formaggio.", en: "I'd like a bit of cheese." },
          { es: "Metti un po' di sale.", en: "Add a bit of salt." },
          { es: "Bevo un po' d'acqua.", en: "I'll drink a bit of water." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a bit of cheese.", answer: "Vorrei un po' di formaggio.", altAnswers: ["Vorrei del formaggio."], explanation: "\"Un po' di\": apostrophe, not an accent." },
          { type: "listen-choose", audio: "Vorrei un po' di formaggio.", question: "What does the customer want?", options: ["a bit of cheese", "a lot of cheese", "some ham", "a cheese sandwich"], correctIndex: 0, explanation: "\"Un po' di\" = a bit of." },
        ],
      },
      {
        heading: "Not in negatives",
        body: [
          "After \"non\", drop the partitive: \"Non ho pane\" (I haven't got any bread), \"Non compriamo biscotti\". English any has no Italian word here. You can stress the lack with \"niente\": \"Non c'è niente da mangiare\".",
        ],
        examples: [
          { es: "Non ho pane.", en: "I haven't got any bread." },
          { es: "Non ci sono uova.", en: "There aren't any eggs." },
          { es: "Non compriamo biscotti questa settimana.", en: "We're not buying any biscuits this week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There aren't any eggs.", answer: "Non ci sono uova.", explanation: "No partitive after \"non\"." },
          { type: "multiple-choice", question: "I haven't got any milk. Which is right?", options: ["Non ho latte.", "Non ho del latte.", "Non ho qualche latte.", "Ho non latte."], correctIndex: 0, explanation: "Negatives drop the partitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm buying some bread and some sugar.", answer: "Compro del pane e dello zucchero.", altAnswers: ["Compro pane e zucchero.", "Compro un po' di pane e un po' di zucchero."], explanation: "\"Dello\" before z." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's some fruit in the fridge.", answer: "C'è della frutta in frigo.", altAnswers: ["C'è della frutta nel frigo.", "C'è un po' di frutta in frigo.", "C'è frutta in frigo."], explanation: "\"Della frutta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's get some apples at the market.", answer: "Prendiamo delle mele al mercato.", altAnswers: ["Compriamo delle mele al mercato.", "Prendiamo mele al mercato."], explanation: "\"Le mele\" → \"delle mele\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't got any bread.", answer: "Non ho pane.", altAnswers: ["Non ho il pane.", "Non ho più pane."], explanation: "No partitive in negatives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We bought some spinach.", answer: "Abbiamo comprato degli spinaci.", altAnswers: ["Abbiamo comprato spinaci.", "Abbiamo preso degli spinaci."], explanation: "\"Gli spinaci\" → \"degli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Add a bit of salt. (to a friend)", answer: "Metti un po' di sale.", altAnswers: ["Aggiungi un po' di sale."], explanation: "\"Un po' di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [some] friends in Milan.", sentence: "Ho ___ amici a Milano.", answer: "degli", altAnswers: ["alcuni"], explanation: "\"Gli amici\" → \"degli amici\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's [some] wine on the table.", sentence: "C'è ___ vino sul tavolo.", answer: "del", altAnswers: ["un po' di"], explanation: "\"Del vino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We're [not buying any] biscuits this week.", sentence: "___ biscotti questa settimana.", answer: "Non compriamo", explanation: "No \"dei\" after \"non\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'd like some tomatoes and a bit of basil.", words: ["Vorrei", "dei", "pomodori", "e", "un", "po'", "di", "basilico."], translation: "I'd like some tomatoes and a bit of basil.", explanation: "\"Dei\" for countables, \"un po' di\" for basil." },
      { type: "dictation", audio: "Compro dell'acqua, del pane e delle mele.", explanation: "Three partitives." },
      { type: "speak", text: "Ho del formaggio e delle uova, ma non ho latte.", prompt: "Say it in Italian: I've got some cheese and some eggs, but I haven't got any milk.", tip: "\"Uova\" is feminine plural: delle uova.", explanation: "Partitive in the positive, none in the negative." },
    ],
  },
  {
    slug: "a2-drill-articulated-prepositions-2",
    level: "IT-A2",
    number: 6,
    title: "Drill: The Full Table",
    summary: "The whole table in place, time and possession phrases: alle otto, dal medico, sul tavolo, nella borsa, il libro dello studente.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Place, time, possession",
        body: [
          "Place: \"nella borsa\", \"sul tavolo\", \"al supermercato\", \"dal medico\". Time: \"alle otto\", \"dalle nove alle cinque\", \"nel 2020\", \"negli anni Ottanta\". Possession: \"il libro dello studente\", \"la casa dei nonni\".",
        ],
        examples: [
          { es: "Lavoro dalle nove alle cinque.", en: "I work from nine to five." },
          { es: "Si sono sposati nel 2015.", en: "They got married in 2015." },
          { es: "Negli anni Ottanta la città è cambiata molto.", en: "In the eighties the city changed a lot." },
          { es: "La casa dei nonni è in campagna.", en: "My grandparents' house is in the countryside." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work from nine to five.", answer: "Lavoro dalle nove alle cinque.", altAnswers: ["Io lavoro dalle nove alle cinque."], explanation: "\"Dalle ... alle\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They got married in 2015.", answer: "Si sono sposati nel 2015.", explanation: "\"Nel\" + year." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandparents' house is in the countryside.", answer: "La casa dei nonni è in campagna.", altAnswers: ["La casa dei miei nonni è in campagna."], explanation: "\"Dei nonni\"; \"in campagna\" with no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop is open from eight to one.", answer: "Il negozio è aperto dalle otto all'una.", explanation: "\"Dalle\" ... \"all'una\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was born in 1992.", answer: "Sono nato nel 1992.", altAnswers: ["Sono nata nel 1992.", "Io sono nato nel 1992.", "Io sono nata nel 1992."], explanation: "\"Nel\" + year." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys are in my bag.", answer: "Le chiavi sono nella mia borsa.", explanation: "Possessive with article: \"nella mia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had dinner at the grandparents'.", answer: "Abbiamo cenato dai nonni.", altAnswers: ["Abbiamo cenato dai miei nonni."], explanation: "\"Da\" + people = at their place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum's opening hours are on the website.", answer: "L'orario del museo è sul sito.", altAnswers: ["Gli orari del museo sono sul sito.", "L'orario del museo è sul sito internet."], explanation: "\"Del museo\", \"sul sito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call you at half past seven.", answer: "Ti chiamo alle sette e mezza.", altAnswers: ["Ti chiamo alle sette e mezzo.", "Ti telefono alle sette e mezza."], explanation: "\"Alle\" + time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a coffee stain on the shirt.", answer: "C'è una macchia di caffè sulla camicia.", explanation: "\"Sulla camicia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children's room is upstairs.", answer: "La camera dei bambini è di sopra.", altAnswers: ["La camera dei bambini è al piano di sopra.", "La cameretta dei bambini è di sopra."], explanation: "\"Dei bambini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the baker's.", answer: "Vado dal panettiere.", altAnswers: ["Vado dal fornaio.", "Vado in panetteria."], explanation: "\"Da\" + person, or \"in\" + shop." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train leaves [at] 18:40.", sentence: "Il treno parte ___ 18:40.", answer: "alle", explanation: "\"Alle\" + 24-hour time." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the] seventies my parents moved to Turin.", sentence: "___ anni Settanta i miei genitori si sono trasferiti a Torino.", answer: "Negli", explanation: "\"Gli anni\" → \"negli anni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The car keys are [on the] fridge.", sentence: "Le chiavi della macchina sono ___ frigo.", answer: "sul", explanation: "\"Il frigo\" → \"sul frigo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I took the money [out of the] wallet.", sentence: "Ho preso i soldi ___ portafoglio.", answer: "dal", explanation: "\"Da\" = from." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cinema is open until [midnight].", sentence: "Il cinema è aperto fino ___.", answer: "a mezzanotte", altAnswers: ["alle 24"], explanation: "\"Mezzanotte\" and \"mezzogiorno\" take no article: \"a mezzanotte\"." },
      { type: "multiple-choice", question: "The students' exams. Which is right?", options: ["Gli esami degli studenti", "Gli esami dei studenti", "Gli esami delli studenti", "Gli esami di gli studenti"], correctIndex: 0, explanation: "\"Gli studenti\" → \"degli\"." },
      { type: "multiple-choice", question: "On the bus. Which is right?", options: ["sull'autobus", "sul autobus", "su l'autobus", "sullo autobus"], correctIndex: 0, explanation: "\"L'autobus\" → \"sull'autobus\"." },
      { type: "dictation", audio: "Il negozio dei miei zii è aperto dalle nove all'una.", explanation: "\"Dei\", \"dalle\", \"all'\"." },
      { type: "dictation", audio: "Ho messo la torta sul tavolo della cucina.", explanation: "\"Sul\", \"della\"." },
      { type: "speak", text: "Lavoro in ufficio dalle nove alle sei, poi vado in palestra e la sera ceno dai miei.", prompt: "Say it in Italian: I work at the office from nine to six, then I go to the gym and in the evening I have dinner at my parents'.", tip: "\"Dai miei\" = at my parents' (place), very common.", explanation: "Fixed phrases and merged forms together." },
    ],
  },
  {
    slug: "a2-contrast-a-in-da",
    level: "IT-A2",
    number: 7,
    title: "Contrast Clinic: A, In or Da?",
    summary: "Vado al supermercato, in farmacia, dal dottore: choose a, in or da for places and people.",
    duration: "15 min",
    sections: [
      {
        heading: "A or in for places",
        body: [
          "\"In\" goes with shops and buildings ending in \"-ia\" and with many fixed places: \"in farmacia\", \"in libreria\" (bookshop), \"in pizzeria\", \"in banca\", \"in ufficio\", \"in piscina\". \"A\" + article goes with others: \"al supermercato\", \"al cinema\", \"al bar\", \"allo stadio\", \"alla stazione\", \"al mare\".",
          "There's no perfect rule, so learn the place with its preposition. A safe hint: shops in \"-ia\" take \"in\".",
        ],
        examples: [
          { es: "Vado in farmacia e poi al supermercato.", en: "I'm going to the pharmacy and then to the supermarket." },
          { es: "Ci vediamo in pizzeria.", en: "See you at the pizzeria." },
          { es: "Sono al cinema con Luca.", en: "I'm at the cinema with Luca." },
          { es: "Hai comprato il libro in libreria?", en: "Did you buy the book at the bookshop?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the pharmacy and then to the supermarket.", answer: "Vado in farmacia e poi al supermercato.", altAnswers: ["Io vado in farmacia e poi al supermercato."], explanation: "\"In farmacia\", \"al supermercato\"." },
          { type: "multiple-choice", question: "See you at the bookshop. Which is right?", options: ["Ci vediamo in libreria.", "Ci vediamo alla libreria.", "Ci vediamo dalla libreria.", "Ci vediamo nel libreria."], correctIndex: 0, explanation: "Shops in \"-ia\": \"in\". (\"Libreria\" = bookshop, a false friend.)" },
        ],
      },
      {
        heading: "Da for people",
        body: [
          "When the place is a person, use \"da\": \"dal dottore\", \"dal parrucchiere\", \"da Marco\" (at or to Marco's), \"dalla nonna\", \"dai miei\". \"Vado a Marco\" is wrong: it would mean to Marco as a destination, like a city.",
          "\"Da\" also means from: \"Torno dall'ufficio\", \"Vengo da Napoli\" (I come from Naples).",
        ],
        examples: [
          { es: "Stasera ceniamo da Marco.", en: "Tonight we're having dinner at Marco's." },
          { es: "Domani vado dal parrucchiere.", en: "Tomorrow I'm going to the hairdresser's." },
          { es: "Siamo stati dalla nonna.", en: "We were at Grandma's." },
          { es: "Vengo da Napoli.", en: "I'm from Naples." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tonight we're having dinner at Marco's.", answer: "Stasera ceniamo da Marco.", altAnswers: ["Ceniamo da Marco stasera.", "Stasera mangiamo da Marco."], explanation: "\"Da\" + person." },
          { type: "listen-choose", audio: "Domani vado dal parrucchiere.", question: "Where is the speaker going tomorrow?", options: ["to the hairdresser's", "to the doctor's", "to the baker's", "to the pharmacy"], correctIndex: 0, explanation: "\"Dal parrucchiere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you at the pizzeria.", answer: "Ci vediamo in pizzeria.", explanation: "\"-ia\": \"in\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm at the cinema with Luca.", answer: "Sono al cinema con Luca.", altAnswers: ["Io sono al cinema con Luca."], explanation: "\"Al cinema\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were at Grandma's.", answer: "Siamo stati dalla nonna.", altAnswers: ["Siamo state dalla nonna.", "Siamo stati da nonna."], explanation: "\"Da\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the bank.", answer: "Vado in banca.", altAnswers: ["Io vado in banca."], explanation: "\"In banca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the station.", answer: "Vado alla stazione.", altAnswers: ["Vado in stazione."], explanation: "Both \"alla stazione\" and \"in stazione\" are used." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming to Giulia's? (to a friend)", answer: "Vieni da Giulia?", altAnswers: ["Tu vieni da Giulia?"], explanation: "\"Da\" + person." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got to go [to the] dentist's.", sentence: "Devo andare ___ dentista.", answer: "dal", explanation: "A person: \"dal\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sundays we go [to the] seaside.", sentence: "La domenica andiamo ___ mare.", answer: "al", explanation: "\"Al mare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara is [at the] swimming pool.", sentence: "Chiara è ___ piscina.", answer: "in", explanation: "\"In piscina\"." },
      { type: "word-order", prompt: "Put the words in order to say: First I'm going to the bank, then to Marco's.", words: ["Prima", "vado", "in", "banca,", "poi", "da", "Marco."], translation: "First I'm going to the bank, then to Marco's.", explanation: "\"In banca\", \"da Marco\"." },
      { type: "multiple-choice", question: "I'm going to my parents'. Which is right?", options: ["Vado dai miei genitori.", "Vado ai miei genitori.", "Vado nei miei genitori.", "Vado a miei genitori."], correctIndex: 0, explanation: "People: \"da\"." },
      { type: "dictation", audio: "Vado in farmacia, al bar e poi dalla nonna.", explanation: "In, a, da: three places." },
      { type: "speak", text: "Oggi vado in banca, poi dal medico e stasera ceno da Chiara.", prompt: "Say it in Italian: Today I'm going to the bank, then to the doctor's, and tonight I'm having dinner at Chiara's.", tip: "\"Da\" before people, \"in\" before the bank.", explanation: "In, da, da." },
    ],
  },
  {
    slug: "a2-error-hunt-prepositions",
    level: "IT-A2",
    number: 8,
    title: "Error Hunt: Prepositions",
    summary: "Fix in il cassetto, a il cinema, nel ufficio, de la stazione, vado a Marco and dei pane.",
    duration: "15 min",
    sections: [
      {
        heading: "Merge, and merge correctly",
        body: [
          "\"In il cassetto\" and \"a il cinema\" don't merge the words: write \"nel cassetto\", \"al cinema\". \"Nel ufficio\" picks the wrong article: \"l'ufficio\" gives \"nell'ufficio\". \"De la stazione\" is not Italian at all: \"della stazione\".",
        ],
        examples: [
          { es: "Le forbici sono nel cassetto.", en: "The scissors are in the drawer." },
          { es: "Stasera andiamo al cinema.", en: "Tonight we're going to the cinema." },
          { es: "La stampante è nell'ufficio di Sara.", en: "The printer is in Sara's office." },
          { es: "Il bar della stazione è chiuso.", en: "The station bar is closed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Le forbici sono in il cassetto.\" Write it correctly: The scissors are in the drawer.", source: "The scissors are in the drawer.", answer: "Le forbici sono nel cassetto.", explanation: "\"In\" + \"il\" = \"nel\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"La stampante è nel ufficio di Sara.\" Write it correctly: The printer is in Sara's office.", source: "The printer is in Sara's office.", answer: "La stampante è nell'ufficio di Sara.", explanation: "\"L'ufficio\" → \"nell'ufficio\"." },
        ],
      },
      {
        heading: "People and partitives",
        body: [
          "\"Vado a Marco\" should be \"Vado da Marco\": people take \"da\". \"Dei pane\" mixes a plural article with a singular noun: \"del pane\". Check the noun's article first, then merge.",
        ],
        examples: [
          { es: "Stasera vado da Marco.", en: "Tonight I'm going to Marco's." },
          { es: "Compro del pane fresco.", en: "I'm buying some fresh bread." },
          { es: "Prendo degli yogurt.", en: "I'll get some yogurts." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Stasera vado a Marco.\" Write it correctly: Tonight I'm going to Marco's.", source: "Tonight I'm going to Marco's.", answer: "Stasera vado da Marco.", altAnswers: ["Vado da Marco stasera."], explanation: "\"Da\" + person." },
          { type: "listen-choose", audio: "Compro del pane fresco.", question: "What did you hear?", options: ["Compro del pane fresco.", "Compro dei pane fresco.", "Compro dello pane fresco.", "Compro de il pane fresco."], correctIndex: 0, explanation: "\"Il pane\" → \"del pane\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Stasera andiamo a il cinema.\" Write it correctly: Tonight we're going to the cinema.", source: "Tonight we're going to the cinema.", answer: "Stasera andiamo al cinema.", altAnswers: ["Andiamo al cinema stasera."], explanation: "\"A\" + \"il\" = \"al\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il bar de la stazione è chiuso.\" Write it correctly: The station bar is closed.", source: "The station bar is closed.", answer: "Il bar della stazione è chiuso.", explanation: "\"Di\" + \"la\" = \"della\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Compro dei pane.\" Write it correctly: I'm buying some bread.", source: "I'm buying some bread.", answer: "Compro del pane.", altAnswers: ["Compro un po' di pane.", "Compro pane."], explanation: "\"Il pane\" → \"del\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Il gatto è su il letto.\" Write it correctly: The cat is on the bed.", source: "The cat is on the bed.", answer: "Il gatto è sul letto.", explanation: "\"Su\" + \"il\" = \"sul\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Abito nella Italia.\" Write it correctly: I live in Italy.", source: "I live in Italy.", answer: "Abito in Italia.", altAnswers: ["Vivo in Italia.", "Io abito in Italia."], explanation: "Countries: \"in\" with no article." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Non ho delle uova.\" Write it correctly: I haven't got any eggs.", source: "I haven't got any eggs.", answer: "Non ho uova.", altAnswers: ["Non ho le uova.", "Non ho più uova."], explanation: "No partitive in negatives." },
      { type: "fill-blank", prompt: "A learner wrote \"i libri dei studenti\". Write the Italian for the bold words.", en: "the books [of the] students", sentence: "i libri ___ studenti", answer: "degli", explanation: "\"Gli studenti\" → \"degli\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Torno a la casa.\" Write the Italian for the bold words.", en: "I'm going back [home].", sentence: "Torno ___.", answer: "a casa", explanation: "\"A casa\": no article." },
      { type: "word-order", prompt: "Put the words in order to say: The milk is in the fridge, on the left.", words: ["Il", "latte", "è", "nel", "frigo,", "a", "sinistra."], translation: "The milk is in the fridge, on the left.", explanation: "\"Nel frigo\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ho lasciato il cappotto nell'armadio.", "Ho lasciato il cappotto nel armadio.", "Ho lasciato il cappotto in l'armadio.", "Ho lasciato il cappotto nello armadio."], correctIndex: 0, explanation: "\"L'armadio\" → \"nell'armadio\"." },
      { type: "dictation", audio: "Vado da Marco e poi al cinema.", explanation: "\"Da\" + person, \"al\" + place." },
      { type: "speak", text: "Le forbici sono nel cassetto e il libro è sul tavolo dello studio.", prompt: "Say it correctly: The scissors are in the drawer and the book is on the study table.", tip: "Merge every preposition: nel, sul, dello.", explanation: "Three merged forms." },
    ],
  },
  {
    slug: "a2-dialogue-lab-supermarket",
    level: "IT-A2",
    number: 9,
    title: "Dialogue Lab: At the Supermarket",
    summary: "Shop from a list with a friend: prendo del prosciutto, dov'è il latte?, nel frigo in fondo, sullo scaffale.",
    duration: "15 min",
    sections: [
      {
        heading: "The list",
        body: [
          "Saturday morning in a supermarket in Napoli. Sara and her flatmate Giorgio have a list. Sara reads it out with partitives: \"Allora, ci servono del pane, delle uova e dello yogurt\" (so, we need bread, eggs and yogurt).",
          "\"Ci serve\" / \"ci servono\" (we need) works like \"piacere\": singular or plural with the thing needed. You'll study it in Unit 8; here just recognise it.",
        ],
        examples: [
          { es: "Allora, ci servono del pane, delle uova e dello yogurt.", en: "So, we need bread, eggs and yogurt." },
          { es: "Prendo anche del prosciutto?", en: "Shall I get some ham as well?" },
          { es: "Sì, e un po' di mozzarella.", en: "Yes, and a bit of mozzarella." },
          { es: "Il pane lo prendiamo dopo, al banco.", en: "We'll get the bread later, at the counter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall I get some ham as well?", answer: "Prendo anche del prosciutto?", altAnswers: ["Prendo anche un po' di prosciutto?", "Compro anche del prosciutto?"], explanation: "The present for an offer; \"del\" for some." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Yes, and [a bit of] mozzarella.", sentence: "Sì, e ___ mozzarella.", answer: "un po' di", explanation: "\"Un po' di\" with an apostrophe." },
        ],
      },
      {
        heading: "Where is it?",
        body: [
          "Giorgio can't find anything. A shop assistant helps: \"Il latte è nel frigo in fondo\" (at the back), \"Lo zucchero è sullo scaffale a destra\", \"Le uova sono accanto alla frutta\". Listen for \"nel\", \"sullo\", \"alla\".",
        ],
        examples: [
          { es: "Scusi, dov'è il latte?", en: "Excuse me, where's the milk?" },
          { es: "È nel frigo in fondo, a sinistra.", en: "It's in the fridge at the back, on the left." },
          { es: "Lo zucchero è sullo scaffale in alto.", en: "The sugar is on the top shelf." },
          { es: "Le uova sono accanto alla frutta.", en: "The eggs are next to the fruit." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Excuse me, where's the milk? (to a shop assistant)", answer: "Scusi, dov'è il latte?", altAnswers: ["Mi scusi, dov'è il latte?"], explanation: "\"Scusi\" with \"Lei\" for a stranger." },
          { type: "listen-choose", audio: "Lo zucchero è sullo scaffale in alto.", question: "Where's the sugar?", options: ["on the top shelf", "on the bottom shelf", "in the fridge", "next to the fruit"], correctIndex: 0, explanation: "\"Sullo scaffale in alto\"." },
        ],
      },
      {
        heading: "At the till",
        body: [
          "At the till: \"Vuole la busta?\" (do you want a bag?), \"Paga con la carta?\". Sara answers \"No grazie, ho la borsa\" and \"Sì, con il bancomat\" (the debit card). The cashier gives the receipt, \"lo scontrino\".",
        ],
        examples: [
          { es: "Vuole una busta?", en: "Would you like a bag?" },
          { es: "No, grazie, ho la borsa della spesa.", en: "No thanks, I've got my shopping bag." },
          { es: "Paga con il bancomat?", en: "Are you paying by debit card?" },
          { es: "Ecco lo scontrino.", en: "Here's the receipt." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No thanks, I've got my shopping bag.", answer: "No, grazie, ho la borsa della spesa.", altAnswers: ["No grazie, ho la borsa della spesa."], explanation: "\"Della spesa\": di + la." },
          { type: "multiple-choice", question: "The cashier asks \"Paga con la carta?\" You want to pay cash. What do you say?", options: ["No, in contanti.", "No, con contanti la.", "Sì, nella carta.", "No, sui contanti."], correctIndex: 0, explanation: "\"In contanti\" = in cash." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's in the fridge at the back, on the left.", answer: "È nel frigo in fondo, a sinistra.", altAnswers: ["È nel frigorifero in fondo, a sinistra."], explanation: "\"Nel frigo\"; \"in fondo\" = at the back." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The eggs are next to the fruit.", answer: "Le uova sono accanto alla frutta.", altAnswers: ["Le uova sono vicino alla frutta."], explanation: "\"Accanto a\" + \"la\" = \"accanto alla\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here's the receipt.", answer: "Ecco lo scontrino.", explanation: "\"Lo scontrino\": \"lo\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you paying by debit card? (to a customer)", answer: "Paga con il bancomat?", altAnswers: ["Paga col bancomat?", "Lei paga con il bancomat?", "Paga con la carta?"], explanation: "\"Con il\": written separately." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We need some tomatoes and some pasta.", answer: "Ci servono dei pomodori e della pasta.", altAnswers: ["Ci servono pomodori e pasta.", "Abbiamo bisogno di pomodori e pasta."], explanation: "Partitives for an unspecified amount." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sugar is [on the] top shelf.", sentence: "Lo zucchero è ___ scaffale in alto.", answer: "sullo", explanation: "\"Lo scaffale\" → \"sullo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you like] a bag? (to a customer)", sentence: "___ una busta?", answer: "Vuole", explanation: "\"Lei\" form of \"volere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cheese is [at the] counter.", sentence: "Il formaggio è ___ banco.", answer: "al", explanation: "\"Al banco\" = at the counter." },
      { type: "word-order", prompt: "Put the words in order to say: The yogurt is in the fridge, next to the milk.", words: ["Lo", "yogurt", "è", "nel", "frigo,", "accanto", "al", "latte."], translation: "The yogurt is in the fridge, next to the milk.", explanation: "\"Lo yogurt\": \"lo\" before y." },
      { type: "multiple-choice", question: "You can't find the biscuits. What do you ask an assistant?", options: ["Scusi, dove sono i biscotti?", "Scusa, dov'è i biscotti?", "Scusi, dove sono dei biscotti?", "Scusi, dove è biscotti?"], correctIndex: 0, explanation: "\"Scusi\" (Lei), \"dove sono\" + plural." },
      { type: "dictation", audio: "Il latte è nel frigo e il pane è sul banco.", explanation: "\"Nel\", \"sul\"." },
      { type: "speak", text: "Scusi, dov'è lo zucchero? E dove sono le uova?", prompt: "Ask a shop assistant: Excuse me, where's the sugar? And where are the eggs?", tip: "\"Dov'è\" for one thing, \"dove sono\" for several.", explanation: "Polite \"scusi\", singular and plural." },
    ],
  },
  {
    slug: "a2-mission-where-is-everything",
    level: "IT-A2",
    number: 10,
    title: "Real-World Mission: House-Sitting Notes",
    summary: "Write notes for a house-sitter: where the keys, the food and the important things are.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "The keys and the house",
        body: [
          "You're going away for a week and your friend Luca is looking after your flat in Firenze. Write him a note with \"è\" / \"sono\" + a place phrase: \"Le chiavi del portone sono sul mobile dell'ingresso\" (the front door keys are on the hall cabinet).",
          "Use the article with specific places (\"nel cassetto della cucina\") and fixed phrases without it (\"in cantina\", \"in garage\").",
        ],
        examples: [
          { es: "Le chiavi del portone sono sul mobile dell'ingresso.", en: "The front door keys are on the hall cabinet." },
          { es: "Il numero dell'idraulico è sul frigo.", en: "The plumber's number is on the fridge." },
          { es: "Le lenzuola pulite sono nell'armadio della camera.", en: "The clean sheets are in the bedroom wardrobe." },
          { es: "La bici è in cantina.", en: "The bike is in the cellar." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The plumber's number is on the fridge.", answer: "Il numero dell'idraulico è sul frigo.", altAnswers: ["Il numero dell'idraulico è sul frigorifero."], explanation: "\"Dell'\" before a vowel; \"sul frigo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The clean sheets are [in the] bedroom wardrobe.", sentence: "Le lenzuola pulite sono ___ armadio della camera.", answer: "nell'", explanation: "\"L'armadio\" → \"nell'armadio\"." },
        ],
      },
      {
        heading: "Food and the cat",
        body: [
          "Tell Luca what there is to eat with partitives and \"c'è / ci sono\": \"In frigo c'è del formaggio e ci sono delle uova\". Add the essentials: \"Il cibo del gatto è nel mobile sotto il lavandino\".",
        ],
        examples: [
          { es: "In frigo c'è del formaggio e ci sono delle uova.", en: "In the fridge there's some cheese and some eggs." },
          { es: "Nella dispensa ci sono dei biscotti.", en: "There are some biscuits in the larder." },
          { es: "Il cibo del gatto è sotto il lavandino.", en: "The cat's food is under the sink." },
          { es: "Non c'è pane: mi dispiace!", en: "There's no bread: sorry!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cat's food is under the sink.", answer: "Il cibo del gatto è sotto il lavandino.", altAnswers: ["Il cibo per il gatto è sotto il lavandino.", "Le crocchette del gatto sono sotto il lavandino."], explanation: "\"Sotto\" takes no \"a\": \"sotto il\"." },
          { type: "listen-choose", audio: "Nella dispensa ci sono dei biscotti.", question: "What's in the larder?", options: ["some biscuits", "some bread", "some eggs", "the cat food"], correctIndex: 0, explanation: "\"Dei biscotti\" = some biscuits." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The front door keys are on the hall cabinet.", answer: "Le chiavi del portone sono sul mobile dell'ingresso.", altAnswers: ["Le chiavi del portone sono sul mobile all'ingresso."], explanation: "\"Del portone\", \"sul mobile\", \"dell'ingresso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bike is in the cellar.", answer: "La bici è in cantina.", altAnswers: ["La bicicletta è in cantina."], explanation: "Fixed phrase: \"in cantina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the fridge there's some cheese and some eggs.", answer: "In frigo c'è del formaggio e ci sono delle uova.", altAnswers: ["Nel frigo c'è del formaggio e ci sono delle uova."], explanation: "\"C'è\" + singular, \"ci sono\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no bread: sorry!", answer: "Non c'è pane: mi dispiace!", altAnswers: ["Non c'è pane, mi dispiace!", "Non c'è il pane: mi dispiace!"], explanation: "No partitive after \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The towels are in the bathroom cupboard.", answer: "Gli asciugamani sono nell'armadietto del bagno.", altAnswers: ["Gli asciugamani sono nel mobile del bagno."], explanation: "\"Nell'armadietto del bagno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The wifi password is [on the] router.", sentence: "La password del wifi è ___ router.", answer: "sul", explanation: "\"Il router\" → \"sul\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There are [some] plants [on the] balcony.", sentence: "Ci sono delle piante ___ balcone.", answer: "sul", explanation: "\"Sul balcone\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The rubbish bags are [in the] drawer by the oven.", sentence: "I sacchetti della spazzatura sono ___ cassetto vicino al forno.", answer: "nel", explanation: "\"Nel cassetto\"." },
      { type: "word-order", prompt: "Put the words in order to say: The cat's food is in the kitchen cupboard.", words: ["Il", "cibo", "del", "gatto", "è", "nel", "mobile", "della", "cucina."], translation: "The cat's food is in the kitchen cupboard.", explanation: "\"Del\", \"nel\", \"della\"." },
      { type: "multiple-choice", question: "Which note is correct?", options: ["Le chiavi della macchina sono nel cassetto.", "Le chiavi de la macchina sono in il cassetto.", "Le chiavi della macchina sono nello cassetto.", "Le chiavi dela macchina sono nel cassetto."], correctIndex: 0, explanation: "\"Della\", \"nel\"." },
      { type: "dictation", audio: "Le chiavi sono sul mobile dell'ingresso.", explanation: "\"Sul\", \"dell'\"." },
      { type: "speak", text: "Ciao Luca! Le chiavi sono sul tavolo, il cibo del gatto è in cucina e in frigo c'è del formaggio.", prompt: "Leave Luca a voice note: Hi Luca! The keys are on the table, the cat's food is in the kitchen and there's some cheese in the fridge.", tip: "\"In cucina\", \"in frigo\": no article in these fixed phrases.", explanation: "Places and a partitive." },
    ],
  },
  {
    slug: "a2-sound-contractions",
    level: "IT-A2",
    number: 11,
    title: "Sounds: Contractions at Speed",
    summary: "Hear and write fast-speech contractions: dell'acqua, sull'autobus, negli Stati Uniti, all'una.",
    duration: "15 min",
    sections: [
      {
        heading: "The l glides into the vowel",
        body: [
          "Before a vowel, \"dell'\", \"all'\", \"sull'\", \"nell'\" and \"dall'\" join the next word with no pause: \"dell'acqua\" sounds like one word, del-LAC-qua. The double l is held, then flows into the vowel.",
          "When you write it, keep the apostrophe and no space after it: \"all'una\", \"sull'autobus\", \"nell'armadio\".",
        ],
        examples: [
          { es: "Vorrei dell'acqua, per favore.", en: "I'd like some water, please." },
          { es: "Ci vediamo all'una.", en: "See you at one." },
          { es: "L'ho lasciato sull'autobus.", en: "I left it on the bus." },
          { es: "È nell'armadio.", en: "It's in the wardrobe." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ci vediamo all'una.", question: "What did you hear?", options: ["Ci vediamo all'una.", "Ci vediamo alla una.", "Ci vediamo a l'una.", "Ci vediamo alle una."], correctIndex: 0, explanation: "\"All'una\": one word with an apostrophe." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's in the wardrobe.", answer: "È nell'armadio.", explanation: "\"Nell'\" before a vowel." },
        ],
      },
      {
        heading: "Gli and degli at speed",
        body: [
          "\"Negli\", \"degli\", \"agli\", \"sugli\" carry the \"gli\" sound, like the lli in million but softer. In fast speech \"negli Stati Uniti\" becomes NE-gli-STA-ti. Don't mishear it as \"nelle\".",
        ],
        examples: [
          { es: "Mio fratello vive negli Stati Uniti.", en: "My brother lives in the United States." },
          { es: "È il libro degli esercizi.", en: "It's the exercise book." },
          { es: "Ho scritto agli studenti.", en: "I've written to the students." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Mio fratello vive negli Stati Uniti.", question: "What did you hear?", options: ["negli Stati Uniti", "nelle Stati Uniti", "nei Stati Uniti", "nello Stati Uniti"], correctIndex: 0, explanation: "\"Gli Stati Uniti\" → \"negli\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've written to the students.", answer: "Ho scritto agli studenti.", altAnswers: ["Io ho scritto agli studenti."], explanation: "\"Agli\" + \"studenti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I left it on the bus.", answer: "L'ho lasciato sull'autobus.", altAnswers: ["L'ho lasciata sull'autobus."], explanation: "\"Sull'\" before a vowel." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My brother lives in the United States.", answer: "Mio fratello vive negli Stati Uniti.", altAnswers: ["Mio fratello abita negli Stati Uniti."], explanation: "\"Negli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the exercise book.", answer: "È il libro degli esercizi.", explanation: "\"Degli esercizi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're coming back from the airport.", answer: "Torniamo dall'aeroporto.", altAnswers: ["Stiamo tornando dall'aeroporto.", "Noi torniamo dall'aeroporto."], explanation: "\"Dall'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A bottle [of] water", sentence: "Una bottiglia ___", answer: "d'acqua", altAnswers: ["di acqua"], explanation: "\"Di\" + vowel often elides: \"d'acqua\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The lesson starts [at eleven].", sentence: "La lezione comincia ___.", answer: "alle undici", explanation: "\"Alle\" before \"undici\": plural, no elision." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cat is on the wardrobe.", answer: "Il gatto è sull'armadio.", explanation: "\"Sull'\" = on the, before a vowel." },
      { type: "listen-choose", audio: "Arrivo dall'ufficio.", question: "What did you hear?", options: ["dall'ufficio", "nell'ufficio", "all'ufficio", "dell'ufficio"], correctIndex: 0, explanation: "\"Dall'\" = from the." },
      { type: "dictation", audio: "Ci vediamo all'una all'ingresso dell'ospedale.", explanation: "Three elided forms." },
      { type: "dictation", audio: "Ho dimenticato l'ombrello sull'autobus.", explanation: "\"L'ombrello\", \"sull'autobus\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm at the hospital entrance.", answer: "Sono all'ingresso dell'ospedale.", altAnswers: ["Io sono all'ingresso dell'ospedale."], explanation: "\"All'\" and \"dell'\" before vowels." },
      { type: "speak", text: "Ci vediamo all'una all'ingresso dell'università.", prompt: "Say it in Italian: See you at one at the university entrance.", tip: "Run each article into the vowel: al-LU-na, al-lin-GRES-so.", explanation: "Three elisions in a row." },
    ],
  },
];

export const IT_A2_U04_WRITING: WriteExercise = {
  type: "write",
  prompt: "A friend is staying in your flat while you're away. Write a note: where the keys are, where to find three or four things (in the kitchen, the bathroom, the bedroom), what food there is (use the partitive) and what there isn't, and one place nearby where they can shop.",
  minWords: 40,
  maxWords: 100,
  rubric: [
    "Merges di, a, da, in, su with the article correctly (del, allo, dall', nella, sugli...)",
    "Leaves out the article in fixed phrases (in cucina, in frigo, a casa, in centro) and uses it with specific places (nel cassetto della cucina)",
    "Uses the partitive for some (del formaggio, delle uova) and drops it in negatives (non c'è pane)",
    "Keeps con and per separate and uses da with people (dal panettiere)",
  ],
  modelAnswer: "Ciao Chiara! Benvenuta! Le chiavi del portone sono sul mobile dell'ingresso. Gli asciugamani sono nell'armadio del bagno e le lenzuola sono sul letto. In frigo c'è del formaggio e ci sono delle uova, ma non c'è latte. Nella dispensa ci sono dei biscotti e della pasta. Per il pane buono, vai dal panettiere in fondo alla via, e c'è un supermercato vicino alla stazione. Per qualsiasi cosa, il mio numero è sul frigo. Un bacio, Anna",
  explanation: "\"Del portone\", \"sul mobile\", \"dell'ingresso\", \"nell'armadio\", \"nella dispensa\" and \"alla stazione\" merge the preposition with the article, while \"in frigo\" is a fixed phrase. \"Del formaggio\", \"delle uova\", \"dei biscotti\" and \"della pasta\" are partitives, dropped in \"non c'è latte\". \"Dal panettiere\" uses \"da\" with a person.",
};
