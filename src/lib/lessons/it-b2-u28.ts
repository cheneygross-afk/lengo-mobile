// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u28.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 28: Listening Lab. Radio news,
// interviews, podcasts, lectures, phone calls, announcements, regional
// voices and CILS DUE listening tasks; review of Upper Intermediate grammar
// in listening.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U28: Lesson[] = [
  {
    slug: "b2-listening-radio-news",
    level: "IT-B2",
    number: 1,
    title: "Listening: Radio News",
    summary: "Follow a radio news bulletin at natural speed: headlines, the journalistic conditional, passives and numbers.",
    duration: "18 min",
    sections: [
      {
        heading: "The headlines",
        body: [
          "Italian radio bulletins, \"il giornale radio\" or \"il GR\", open with \"i titoli\" read fast and without verbs: \"Maltempo al Nord, chiuse le scuole in tre regioni\". Then each story is read in full. Listen first for the topic, then for who, where and how many.",
          "News language uses the passive (\"sono state chiuse\"), the impersonal (\"si prevede\") and the conditional for unconfirmed facts (\"il ladro sarebbe fuggito\": the thief reportedly fled).",
          "Numbers come fast: \"il tre per cento\", \"oltre duemila\", \"circa la metà\" (about half), \"un terzo\". Dates are said as cardinal numbers except the first of the month: \"il primo maggio\" but \"il due giugno\". Newsreaders also love \"nel corso di\" (during), \"in seguito a\" (following) and \"a causa di\" (because of).",
        ],
        examples: [
          { es: "Maltempo al Nord: chiuse le scuole in tre regioni.", en: "Bad weather in the North: schools closed in three regions." },
          { es: "Sciopero dei treni venerdì: a rischio i collegamenti regionali.", en: "Rail strike on Friday: regional services at risk." },
          { es: "Inflazione in calo per il terzo mese consecutivo.", en: "Inflation falling for the third month in a row." },
          { es: "Calcio: la nazionale vince e si qualifica per l'Europeo.", en: "Soccer: the national team wins and qualifies for the European Championship." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Sciopero dei treni venerdì: a rischio i collegamenti regionali.", question: "What is at risk on Friday?", options: ["regional train services", "flights", "school lessons", "highway traffic"], correctIndex: 0, explanation: "\"I collegamenti regionali\" = regional connections." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a headline.", source: "Inflation falling for the third month in a row.", answer: "Inflazione in calo per il terzo mese consecutivo.", altAnswers: ["L'inflazione è in calo per il terzo mese consecutivo.", "Inflazione in calo per il terzo mese di fila."], explanation: "\"In calo\" = falling." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a headline.", source: "Schools closed in three regions.", answer: "Chiuse le scuole in tre regioni.", altAnswers: ["Scuole chiuse in tre regioni."], explanation: "Headline: participle first, no auxiliary." },
        ],
      },
      {
        heading: "A full story",
        body: [
          "The first story in full. Notice the conditional of hearsay (\"sarebbero\", \"avrebbe\") for figures not yet confirmed, and \"secondo\" + source.",
          "Italian news often puts the subject after the verb to highlight it: \"sarebbero più di duecento le persone evacuate\" (literally: more than two hundred would be the people evacuated). When you hear a verb before its subject, wait for the noun at the end of the sentence.",
        ],
        examples: [
          { es: "Forti piogge hanno colpito nella notte la Liguria e il Piemonte.", en: "Heavy rain hit Liguria and Piedmont during the night." },
          { es: "Secondo la Protezione civile, sarebbero più di duecento le persone evacuate.", en: "According to Civil Protection, more than two hundred people have reportedly been evacuated." },
          { es: "Il fiume avrebbe superato il livello di guardia in tre punti.", en: "The river is reported to have exceeded the alert level at three points." },
          { es: "Le scuole resteranno chiuse anche domani.", en: "Schools will stay closed tomorrow as well." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Secondo la Protezione civile, sarebbero più di duecento le persone evacuate.", question: "How many people were evacuated?", options: ["more than two hundred, not yet confirmed", "exactly two hundred, confirmed", "about twenty", "nobody"], correctIndex: 0, explanation: "\"Sarebbero\": conditional of hearsay." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in news style.", source: "The river is reported to have exceeded the alert level.", answer: "Il fiume avrebbe superato il livello di guardia.", explanation: "Past conditional for an unconfirmed past fact." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Schools [will stay] closed tomorrow as well.", sentence: "Le scuole ___ chiuse anche domani.", answer: "resteranno", altAnswers: ["rimarranno"], explanation: "Future of \"restare\"." },
        ],
      },
      {
        heading: "Weather and sign-off",
        body: [
          "Bulletins end with \"il meteo\" and a sign-off: \"è tutto, il prossimo appuntamento con il giornale radio è alle 13\". Weather vocabulary: \"nuvoloso\", \"rovesci\" (showers), \"temporali\" (thunderstorms), \"in miglioramento\" (improving), \"temperature in aumento\".",
        ],
        examples: [
          { es: "Domani cielo nuvoloso al Nord con rovesci sparsi.", en: "Tomorrow cloudy skies in the North with scattered showers." },
          { es: "Al Sud tempo in miglioramento e temperature in aumento.", en: "In the South, improving weather and rising temperatures." },
          { es: "È tutto: il prossimo appuntamento è alle tredici.", en: "That's all: the next bulletin is at one o'clock." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Al Sud tempo in miglioramento e temperature in aumento.", question: "What's the weather forecast for the South?", options: ["improving, with rising temperatures", "getting worse, colder", "thunderstorms all day", "snow in the mountains"], correctIndex: 0, explanation: "\"In miglioramento\", \"in aumento\"." },
          { type: "speak", text: "Domani cielo nuvoloso al Nord con rovesci sparsi; al Sud tempo in miglioramento.", prompt: "Read the forecast like a newsreader: Tomorrow cloudy in the North with scattered showers; in the South improving weather.", tip: "ro-VE-sci: stress on ve.", explanation: "Weather report without verbs." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Forti piogge hanno colpito nella notte la Liguria e il Piemonte.", question: "When did the rain hit?", options: ["during the night", "yesterday morning", "last week", "it hasn't started yet"], correctIndex: 0, explanation: "\"Nella notte\"." },
      { type: "listen-choose", audio: "Calcio: la nazionale vince e si qualifica per l'Europeo.", question: "What happened to the national team?", options: ["It won and qualified.", "It lost but qualified.", "It drew.", "It was eliminated."], correctIndex: 0, explanation: "\"Vince e si qualifica\"." },
      { type: "listen-choose", audio: "È tutto: il prossimo appuntamento è alle tredici.", question: "When is the next bulletin?", options: ["at 1 p.m.", "at 3 p.m.", "at 10 a.m.", "tomorrow"], correctIndex: 0, explanation: "\"Alle tredici\" = 1 p.m." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Heavy rain hit Liguria during the night.", answer: "Forti piogge hanno colpito la Liguria nella notte.", altAnswers: ["Forti piogge hanno colpito nella notte la Liguria.", "Nella notte forti piogge hanno colpito la Liguria."], explanation: "\"Colpire\" = to hit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in news style.", source: "According to the police, the thief reportedly fled on foot.", answer: "Secondo la polizia, il ladro sarebbe fuggito a piedi.", altAnswers: ["Secondo la polizia il ladro sarebbe fuggito a piedi.", "Secondo la polizia, il ladro sarebbe scappato a piedi."], explanation: "Past conditional of hearsay." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a headline.", source: "Rail strike on Friday.", answer: "Sciopero dei treni venerdì.", altAnswers: ["Sciopero dei treni di venerdì.", "Venerdì sciopero dei treni."], explanation: "Headline without a verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two hundred people have been evacuated.", answer: "Duecento persone sono state evacuate.", altAnswers: ["Sono state evacuate duecento persone."], explanation: "Passive: \"sono state evacuate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow cloudy skies with scattered showers.", answer: "Domani cielo nuvoloso con rovesci sparsi.", altAnswers: ["Domani cielo nuvoloso con piogge sparse."], explanation: "\"Rovesci\" = showers." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in news style.", en: "There are [reportedly] three people injured.", sentence: "Ci ___ tre feriti.", answer: "sarebbero", explanation: "Conditional of hearsay." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Inflation is [falling].", sentence: "L'inflazione è ___.", answer: "in calo", altAnswers: ["in diminuzione"], explanation: "\"In calo\" = falling." },
      { type: "word-order", prompt: "Put the words in order to say: According to Civil Protection, more than two hundred people have been evacuated.", words: ["Secondo", "la Protezione civile,", "sarebbero", "più di duecento", "gli evacuati."], translation: "According to Civil Protection, more than two hundred people have been evacuated.", explanation: "Subject after the verb in news style." },
      { type: "dictation", audio: "Il fiume avrebbe superato il livello di guardia in tre punti.", explanation: "\"Avrebbe superato\": unconfirmed." },
      { type: "speak", text: "Secondo la Protezione civile, sarebbero più di duecento le persone evacuate.", prompt: "Read the news: According to Civil Protection, more than two hundred people have reportedly been evacuated.", tip: "e-va-cu-A-te: stress on a.", explanation: "Conditional of hearsay." },
    ],
  },
  {
    slug: "b2-listening-interviews",
    level: "IT-B2",
    number: 2,
    title: "Listening: Interviews",
    summary: "Follow a long radio interview with a young farmer who returned to her village, and pick out opinions, reasons and plans.",
    duration: "18 min",
    sections: [
      {
        heading: "Who and why",
        body: [
          "A radio program interviews Chiara, thirty-two, who left a job in Milan to take over her grandparents' farm in Basilicata. Interviewers use \"Lei\", open with \"Ci racconti\" (tell us) and \"Come mai\" (how come), and the guest answers with long, natural sentences full of connectors.",
          "In a long interview, don't panic if you miss a sentence. Interviewers often summarize the answer in the next question (\"quindi Lei è tornata per la terra di suo nonno?\"), and guests repeat their main point in different words. Note both forms of address: the interviewer uses \"Lei\", while Chiara's quoted friends and family use \"tu\".",
        ],
        examples: [
          { es: "Chiara, ci racconti: come mai ha lasciato Milano?", en: "Chiara, tell us: how come you left Milan?" },
          { es: "Lavoravo in un'agenzia di comunicazione, ma non ero felice.", en: "I worked in a communications agency, but I wasn't happy." },
          { es: "Quando è morto mio nonno, nessuno voleva occuparsi della terra.", en: "When my grandfather died, nobody wanted to look after the land." },
          { es: "Così ho deciso di tornare, nonostante tutti mi dicessero di non farlo.", en: "So I decided to go back, even though everyone told me not to." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Lavoravo in un'agenzia di comunicazione, ma non ero felice.", question: "What was Chiara's job in Milan?", options: ["She worked in a communications agency.", "She was a teacher.", "She worked in a bank.", "She was a farmer."], correctIndex: 0, explanation: "\"Un'agenzia di comunicazione\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the interviewer.", source: "Tell us: how come you left Milan?", answer: "Ci racconti: come mai ha lasciato Milano?", altAnswers: ["Ci racconti, come mai ha lasciato Milano?"], explanation: "\"Ci racconti\" (Lei imperative); \"come mai\" + indicative." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I decided to go back, even though everyone told me not to.", answer: "Ho deciso di tornare, nonostante tutti mi dicessero di non farlo.", altAnswers: ["Ho deciso di tornare, anche se tutti mi dicevano di non farlo.", "Ho deciso di tornare nonostante tutti mi dicessero di non farlo."], explanation: "\"Nonostante\" + imperfect subjunctive." },
        ],
      },
      {
        heading: "Difficulties",
        body: [
          "The interviewer asks about problems. Chiara uses \"all'inizio\" (at first), \"la cosa più difficile è stata\" + infinitive, and a hypothetical: \"se avessi saputo quanto era dura, forse non l'avrei fatto\".",
          "Listen for evaluation words that tell you how Chiara feels: \"durissimo\" (really hard), \"per fortuna\" (luckily), \"purtroppo\" (unfortunately), \"ne è valsa la pena\" (it was worth it). Questions in exams often ask for exactly this attitude, not just the facts.",
        ],
        examples: [
          { es: "All'inizio è stato durissimo: non sapevo niente di agricoltura.", en: "At first it was really hard: I knew nothing about farming." },
          { es: "La cosa più difficile è stata ottenere i permessi.", en: "The hardest thing was getting the permits." },
          { es: "Se avessi saputo quanto era dura, forse non l'avrei fatto.", en: "If I had known how hard it was, maybe I wouldn't have done it." },
          { es: "Per fortuna i vicini mi hanno aiutato molto.", en: "Luckily the neighbors helped me a lot." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "La cosa più difficile è stata ottenere i permessi.", question: "What was hardest for Chiara?", options: ["getting the permits", "learning to drive a tractor", "finding customers", "living alone"], correctIndex: 0, explanation: "\"Ottenere i permessi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I had known how hard it was, maybe I wouldn't have done it.", answer: "Se avessi saputo quanto era dura, forse non l'avrei fatto.", altAnswers: ["Se avessi saputo quanto fosse dura, forse non l'avrei fatto."], explanation: "Impossible past: pluperfect subjunctive + past conditional." },
        ],
      },
      {
        heading: "Plans",
        body: [
          "To finish, the plans: \"vorrei\" + infinitive, \"il mio sogno è che\" + subjunctive, \"stiamo pensando di\". Listen for the key fact: what she produces and what she wants to add.",
        ],
        examples: [
          { es: "Oggi produciamo olio e legumi biologici.", en: "Today we produce organic oil and legumes." },
          { es: "Stiamo pensando di aprire un piccolo agriturismo.", en: "We're thinking of opening a small farm stay." },
          { es: "Il mio sogno è che altri giovani tornino nel paese.", en: "My dream is that other young people come back to the village." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Stiamo pensando di aprire un piccolo agriturismo.", question: "What is Chiara planning?", options: ["to open a small farm stay", "to sell the farm", "to go back to Milan", "to open a store in town"], correctIndex: 0, explanation: "\"Aprire un agriturismo\"." },
          { type: "speak", text: "Il mio sogno è che altri giovani tornino nel paese.", prompt: "Say it as Chiara: My dream is that other young people come back to the village.", tip: "TOR-ni-no: stress on tor.", explanation: "\"Il mio sogno è che\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Quando è morto mio nonno, nessuno voleva occuparsi della terra.", question: "Why did the farm need someone?", options: ["Nobody wanted to look after the land after her grandfather died.", "Her grandfather wanted to retire.", "The land was for sale.", "Her parents asked her to sell it."], correctIndex: 0, explanation: "\"Nessuno voleva occuparsi della terra\"." },
      { type: "listen-choose", audio: "Oggi produciamo olio e legumi biologici.", question: "What does the farm produce?", options: ["organic oil and legumes", "wine and cheese", "fruit and vegetables", "honey"], correctIndex: 0, explanation: "\"Legumi\" = legumes: beans, lentils, chickpeas." },
      { type: "listen-choose", audio: "Per fortuna i vicini mi hanno aiutato molto.", question: "Who helped Chiara?", options: ["the neighbors", "the council", "her parents", "nobody"], correctIndex: 0, explanation: "\"I vicini\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At first it was really hard.", answer: "All'inizio è stato durissimo.", altAnswers: ["All'inizio è stato molto duro.", "All'inizio è stata durissima."], explanation: "\"All'inizio\" = at first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I knew nothing about farming.", answer: "Non sapevo niente di agricoltura.", altAnswers: ["Non sapevo nulla di agricoltura.", "Non ne sapevo niente di agricoltura."], explanation: "Double negative: \"non ... niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're thinking of opening a farm stay.", answer: "Stiamo pensando di aprire un agriturismo.", explanation: "\"Pensare di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luckily the neighbors helped me a lot.", answer: "Per fortuna i vicini mi hanno aiutato molto.", altAnswers: ["Per fortuna i vicini mi hanno aiutata molto.", "Fortunatamente i vicini mi hanno aiutato molto."], explanation: "\"Per fortuna\" = luckily." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hardest thing was getting the permits.", answer: "La cosa più difficile è stata ottenere i permessi.", explanation: "Infinitive as subject complement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My dream is that young people [come back].", sentence: "Il mio sogno è che i giovani ___.", answer: "tornino", explanation: "Subjunctive after \"il mio sogno è che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as the interviewer.", en: "[How come] you left?", sentence: "___ è andata via?", answer: "Come mai", explanation: "\"Come mai\" = how come." },
      { type: "word-order", prompt: "Put the words in order to say: When my grandfather died, nobody wanted to look after the land.", words: ["Quando è morto", "mio nonno,", "nessuno", "voleva occuparsi", "della terra."], translation: "When my grandfather died, nobody wanted to look after the land.", explanation: "\"Occuparsi di\" = to look after." },
      { type: "dictation", audio: "Così ho deciso di tornare, nonostante tutti mi dicessero di non farlo.", explanation: "\"Nonostante\" + subjunctive." },
      { type: "speak", text: "Ho lasciato Milano perché non ero felice, e oggi produco olio biologico.", prompt: "Summarize Chiara's story in first person: I left Milan because I wasn't happy, and today I produce organic oil.", tip: "bio-LO-gi-co: stress on lo.", explanation: "Past and present contrasted." },
    ],
  },
  {
    slug: "b2-listening-podcast",
    level: "IT-B2",
    number: 3,
    title: "Listening: A Podcast",
    summary: "Follow two hosts chatting on a podcast about slow travel, with interruptions, discourse markers and spoken shortcuts.",
    duration: "18 min",
    sections: [
      {
        heading: "Informal openings",
        body: [
          "Podcasts sound like conversation: the hosts interrupt each other, use \"tipo\" (like), \"cioè\" (I mean), \"insomma\" (in short, well), \"dai\" (come on) and dislocations like \"il treno lo preferisco\". Here Luca and Marta talk about \"il turismo lento\", slow travel.",
          "Spoken shortcuts to recognize: \"non è che\" + verb (it's not that), \"tipo\" before an example, \"eh\" at the end of a sentence to ask for agreement, and dislocation, where the object comes first and is repeated by a pronoun: \"il treno lo preferisco\". These don't change the meaning, so don't let them slow you down.",
        ],
        examples: [
          { es: "Ciao a tutti e bentornati! Oggi parliamo di viaggi lenti.", en: "Hi everyone and welcome back! Today we're talking about slow travel." },
          { es: "Cioè, non è che devi andare a piedi dappertutto, eh.", en: "I mean, it's not that you have to walk everywhere, you know." },
          { es: "Il treno, per esempio, io lo preferisco sempre all'aereo.", en: "Trains, for example, I always prefer them to planes." },
          { es: "Insomma, l'idea è goderti il viaggio, non solo la meta.", en: "Basically, the idea is to enjoy the journey, not just the destination." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il treno, per esempio, io lo preferisco sempre all'aereo.", question: "What does the host prefer?", options: ["the train to the plane", "the plane to the train", "the car", "walking"], correctIndex: 0, explanation: "\"Preferire A a B\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I always prefer the train to the plane.", answer: "Preferisco sempre il treno all'aereo.", altAnswers: ["Il treno lo preferisco sempre all'aereo.", "Io preferisco sempre il treno all'aereo."], explanation: "\"Preferire\" + \"a\" for the second item." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The idea is to enjoy the journey, not just the destination.", answer: "L'idea è goderti il viaggio, non solo la meta.", altAnswers: ["L'idea è godersi il viaggio, non solo la meta.", "L'idea è di goderti il viaggio, non solo la meta."], explanation: "\"Godersi\" = to enjoy." },
        ],
      },
      {
        heading: "Disagreeing nicely",
        body: [
          "Marta isn't convinced. Friendly disagreement: \"sì, però\" (yes, but), \"dipende\" (it depends), \"non so se sono d'accordo\", \"ma dai!\" (come on!), and the concession \"sarà, ma\" (maybe, but).",
          "\"Ci vuole\" and \"ci vogliono\" (it takes) agree with what is needed: \"ci vuole un'ora\", \"ci vogliono dodici ore\". The concessive future \"sarà\" (maybe so) is typical of a speaker who isn't fully convinced but doesn't want to argue.",
        ],
        examples: [
          { es: "Sì, però non tutti hanno due settimane di ferie.", en: "Yes, but not everyone has two weeks off." },
          { es: "Sarà, ma per andare in Sicilia in treno ci vogliono dodici ore!", en: "Maybe, but going to Sicily by train takes twelve hours!" },
          { es: "Dipende: se ti porti un bel libro, passano in fretta.", en: "It depends: if you bring a good book, they fly by." },
          { es: "Ma dai, nessuno legge per dodici ore!", en: "Oh come on, nobody reads for twelve hours!" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Sarà, ma per andare in Sicilia in treno ci vogliono dodici ore!", question: "What is Marta's objection?", options: ["The train to Sicily takes twelve hours.", "Trains are too expensive.", "There are no trains to Sicily.", "Planes are more comfortable."], correctIndex: 0, explanation: "\"Ci vogliono dodici ore\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, but not everyone has two weeks off.", answer: "Sì, però non tutti hanno due settimane di ferie.", altAnswers: ["Sì, ma non tutti hanno due settimane di ferie."], explanation: "\"Le ferie\" for time off work." },
        ],
      },
      {
        heading: "Wrapping up",
        body: [
          "Podcast endings: a summary (\"insomma, alla fine\"), a call to action (\"scriveteci\", \"lasciateci un commento\") and a goodbye (\"alla prossima puntata\": until the next episode).",
        ],
        examples: [
          { es: "Insomma, alla fine dipende da quanto tempo hai.", en: "So in the end it depends on how much time you have." },
          { es: "Scriveteci e raccontateci i vostri viaggi lenti.", en: "Write to us and tell us about your slow trips." },
          { es: "Grazie per averci ascoltato, alla prossima puntata!", en: "Thanks for listening, see you next episode!" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Scriveteci e raccontateci i vostri viaggi lenti.", question: "What do the hosts ask listeners to do?", options: ["write in about their slow trips", "buy a train ticket", "share the podcast", "come to a live show"], correctIndex: 0, explanation: "\"Scriveteci\" = write to us." },
          { type: "speak", text: "Grazie per averci ascoltato, alla prossima puntata!", prompt: "Close the podcast: Thanks for listening, see you next episode!", tip: "pun-TA-ta: stress on ta.", explanation: "\"Per\" + past infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Cioè, non è che devi andare a piedi dappertutto, eh.", question: "What does the host clarify?", options: ["Slow travel doesn't mean walking everywhere.", "You must walk everywhere.", "Walking is dangerous.", "Trains are slow."], correctIndex: 0, explanation: "\"Non è che\" = it's not that." },
      { type: "listen-choose", audio: "Dipende: se ti porti un bel libro, passano in fretta.", question: "What makes the hours pass quickly?", options: ["a good book", "good company", "sleeping", "a fast train"], correctIndex: 0, explanation: "\"Un bel libro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to listeners.", source: "Welcome back! Today we're talking about slow travel.", answer: "Bentornati! Oggi parliamo di viaggi lenti.", altAnswers: ["Bentornati! Oggi parliamo di turismo lento.", "Bentornati, oggi parliamo di viaggi lenti."], explanation: "\"Bentornati\" = welcome back (plural)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Going to Sicily by train takes twelve hours.", answer: "Per andare in Sicilia in treno ci vogliono dodici ore.", altAnswers: ["Per andare in Sicilia in treno servono dodici ore.", "Andare in Sicilia in treno richiede dodici ore."], explanation: "\"Ci vogliono\" + plural time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It depends on how much time you have.", answer: "Dipende da quanto tempo hai.", explanation: "\"Dipendere da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "Oh come on, nobody reads for twelve hours!", answer: "Ma dai, nessuno legge per dodici ore!", explanation: "\"Ma dai\" = oh come on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thanks for listening.", answer: "Grazie per averci ascoltato.", altAnswers: ["Grazie per averci ascoltati.", "Grazie di averci ascoltato."], explanation: "\"Per\" + past infinitive with \"ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I mean, it's not that you have to walk everywhere.", answer: "Cioè, non è che devi andare a piedi dappertutto.", altAnswers: ["Cioè, non è che devi andare dappertutto a piedi.", "Cioè, non è che tu debba andare a piedi dappertutto."], explanation: "\"Cioè\" = I mean." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Maybe], but it takes twelve hours.", sentence: "___, ma ci vogliono dodici ore.", answer: "Sarà", explanation: "Concessive future: \"sarà\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "See you [next episode]!", sentence: "Alla ___!", answer: "prossima puntata", explanation: "\"La puntata\" = episode." },
      { type: "word-order", prompt: "Put the words in order to say: Write to us and tell us about your trips.", words: ["Scriveteci", "e raccontateci", "i vostri", "viaggi."], translation: "Write to us and tell us about your trips.", explanation: "\"Voi\" imperatives with \"ci\" attached." },
      { type: "dictation", audio: "Insomma, l'idea è goderti il viaggio, non solo la meta.", explanation: "\"Insomma\" and \"godersi\"." },
      { type: "speak", text: "Sì, però non tutti hanno due settimane di ferie.", prompt: "Disagree nicely: Yes, but not everyone has two weeks off.", tip: "pe-RÒ: stress on the last syllable.", explanation: "\"Sì, però\" softens disagreement." },
    ],
  },
  {
    slug: "b2-listening-lecture",
    level: "IT-B2",
    number: 4,
    title: "Listening: A Short Lecture",
    summary: "Follow a university-style talk on how Italian became a national language, with signposting, dates and the passato remoto.",
    duration: "18 min",
    sections: [
      {
        heading: "The introduction",
        body: [
          "A lecturer introduces the history of the Italian language. Academic talks are signposted: \"oggi vorrei parlarvi di\", \"in primo luogo\", \"passiamo ora a\", \"per concludere\". Historical facts are often told in the passato remoto (\"Dante scrisse\") or the historical present (\"nel 1861 l'Italia diventa uno Stato unitario\").",
        ],
        examples: [
          { es: "Oggi vorrei parlarvi di come l'italiano è diventato la lingua di tutti.", en: "Today I'd like to talk to you about how Italian became everyone's language." },
          { es: "In primo luogo, bisogna ricordare che l'italiano nasce dal fiorentino.", en: "First of all, we must remember that Italian comes from Florentine." },
          { es: "Nel Trecento Dante, Petrarca e Boccaccio scrissero in volgare fiorentino.", en: "In the fourteenth century Dante, Petrarch and Boccaccio wrote in the Florentine vernacular." },
          { es: "Le loro opere divennero un modello per tutta la penisola.", en: "Their works became a model for the whole peninsula." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "In primo luogo, bisogna ricordare che l'italiano nasce dal fiorentino.", question: "Which dialect is Italian based on?", options: ["Florentine", "Roman", "Neapolitan", "Venetian"], correctIndex: 0, explanation: "\"Nasce dal fiorentino\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the lecturer.", source: "Today I'd like to talk to you about the Italian language.", answer: "Oggi vorrei parlarvi della lingua italiana.", altAnswers: ["Oggi vorrei parlarvi dell'italiano.", "Oggi vorrei parlare con voi della lingua italiana."], explanation: "\"Parlarvi di\" = to talk to you about." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "Their works became a model.", answer: "Le loro opere divennero un modello.", altAnswers: ["Le loro opere diventarono un modello."], explanation: "\"Divenire\" → \"divennero\"; \"diventare\" → \"diventarono\"." },
        ],
      },
      {
        heading: "Unification",
        body: [
          "The second part gives figures. Listen for numbers and percentages: when Italy was unified in 1861, only a small minority of the population spoke Italian; estimates usually range between about 2.5 and 10 percent. Most people spoke their local dialect.",
          "Lectures often use the historical present to make the past vivid: \"nel 1861 l'Italia diventa uno Stato unitario\", \"nel 1954 arriva la televisione\". Don't let it confuse you: the date tells you it's history. Note also \"a quell'epoca\" (at that time), \"nel corso dell'Ottocento\" (during the nineteenth century) and \"fino agli anni Cinquanta\" (until the 1950s).",
        ],
        examples: [
          { es: "Passiamo ora all'Unità d'Italia, nel 1861.", en: "Let's now move on to the Unification of Italy, in 1861." },
          { es: "A quell'epoca solo una piccola minoranza parlava italiano.", en: "At that time only a small minority spoke Italian." },
          { es: "La maggior parte della popolazione usava il dialetto locale.", en: "Most of the population used their local dialect." },
          { es: "Molti erano analfabeti e non andavano a scuola.", en: "Many were illiterate and didn't go to school." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "A quell'epoca solo una piccola minoranza parlava italiano.", question: "How many people spoke Italian at Unification?", options: ["only a small minority", "almost everyone", "about half", "nobody"], correctIndex: 0, explanation: "\"Una piccola minoranza\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Most of the population used the local dialect.", answer: "La maggior parte della popolazione usava il dialetto locale.", altAnswers: ["La maggior parte della popolazione parlava il dialetto locale.", "La maggioranza della popolazione usava il dialetto locale."], explanation: "\"La maggior parte di\" + singular verb." },
        ],
      },
      {
        heading: "The conclusion",
        body: [
          "The lecturer concludes with the factors that spread Italian: compulsory schooling, military service, migration within Italy, and above all television from the 1950s. Listen for \"grazie a\", \"soprattutto\" and \"per concludere\".",
          "Academic speakers often reformulate with \"in altre parole\" (in other words) and \"vale a dire\" (that is to say), and give examples with \"basti pensare a\" (just think of). These are signals that the key idea is about to be repeated: a second chance to catch it.",
        ],
        examples: [
          { es: "L'italiano si diffuse grazie alla scuola e al servizio militare.", en: "Italian spread thanks to schooling and military service." },
          { es: "Ma fu soprattutto la televisione a insegnare l'italiano agli italiani.", en: "But it was above all television that taught Italians Italian." },
          { es: "Per concludere, oggi quasi tutti parlano italiano, ma molti conoscono ancora il dialetto.", en: "To conclude, today almost everyone speaks Italian, but many still know their dialect." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ma fu soprattutto la televisione a insegnare l'italiano agli italiani.", question: "What spread Italian most, according to the lecturer?", options: ["television", "newspapers", "the Church", "the internet"], correctIndex: 0, explanation: "\"Fu soprattutto la televisione\"." },
          { type: "speak", text: "Per concludere, oggi quasi tutti parlano italiano, ma molti conoscono ancora il dialetto.", prompt: "Conclude the lecture: To conclude, today almost everyone speaks Italian, but many still know their dialect.", tip: "dia-LET-to: double t.", explanation: "\"Per concludere\" signposts the end." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Nel Trecento Dante, Petrarca e Boccaccio scrissero in volgare fiorentino.", question: "When did the three authors write?", options: ["in the 1300s", "in the 1500s", "in the 1800s", "in the 1200s"], correctIndex: 0, explanation: "\"Il Trecento\" = the 1300s." },
      { type: "listen-choose", audio: "Molti erano analfabeti e non andavano a scuola.", question: "What does the lecturer say about many people?", options: ["They couldn't read or write.", "They spoke several languages.", "They lived abroad.", "They worked in factories."], correctIndex: 0, explanation: "\"Analfabeti\" = illiterate." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italian comes from Florentine.", answer: "L'italiano nasce dal fiorentino.", altAnswers: ["L'italiano deriva dal fiorentino.", "L'italiano viene dal fiorentino."], explanation: "\"Nascere da\" = to originate from." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the lecturer.", source: "Let's now move on to the Unification of Italy.", answer: "Passiamo ora all'Unità d'Italia.", altAnswers: ["Ora passiamo all'Unità d'Italia."], explanation: "\"Passare a\" = to move on to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many were illiterate.", answer: "Molti erano analfabeti.", explanation: "\"Analfabeta\": plural \"analfabeti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "Italian spread thanks to schools.", answer: "L'italiano si diffuse grazie alla scuola.", altAnswers: ["L'italiano si diffuse grazie alle scuole."], explanation: "\"Diffondersi\" → \"si diffuse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was television that taught Italians Italian.", answer: "Fu la televisione a insegnare l'italiano agli italiani.", altAnswers: ["È stata la televisione a insegnare l'italiano agli italiani."], explanation: "Cleft: \"fu ... a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many still know their dialect.", answer: "Molti conoscono ancora il dialetto.", altAnswers: ["Molti conoscono ancora il proprio dialetto.", "Molti conoscono ancora il loro dialetto."], explanation: "\"Conoscere\" a language variety." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as the lecturer.", en: "[First of all], we must remember the history.", sentence: "___, bisogna ricordare la storia.", answer: "In primo luogo", altAnswers: ["Innanzitutto", "Prima di tutto"], explanation: "Signposting." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the [fourteenth century] they wrote in the vernacular.", sentence: "Nel ___ scrivevano in volgare.", answer: "Trecento", explanation: "\"Il Trecento\" = the 1300s." },
      { type: "word-order", prompt: "Put the words in order to say: Their works became a model for the whole peninsula.", words: ["Le loro opere", "divennero", "un modello", "per tutta", "la penisola."], translation: "Their works became a model for the whole peninsula.", explanation: "Passato remoto \"divennero\"." },
      { type: "dictation", audio: "L'italiano si diffuse grazie alla scuola, al servizio militare e alla televisione.", explanation: "Three factors after \"grazie a\"." },
      { type: "speak", text: "Oggi vorrei parlarvi di come l'italiano è diventato la lingua di tutti.", prompt: "Open the lecture: Today I'd like to talk to you about how Italian became everyone's language.", tip: "par-LAR-vi: the pronoun is attached.", explanation: "Academic opening." },
    ],
  },
  {
    slug: "b2-drill-dictation-b2",
    level: "IT-B2",
    number: 5,
    title: "Drill: Upper Intermediate Dictation",
    summary: "High-repetition dictation of Upper Intermediate sentences, focusing on double consonants, accents, apostrophes and subjunctive endings.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Spelling traps",
        body: [
          "Pattern: listen for double consonants (\"avessimo\", \"fosse\", \"sarebbe\"), accents on final vowels (\"perché\", \"città\", \"più\", \"è\"), apostrophes (\"l'ho\", \"un'amica\", \"po'\", \"qual è\" without one) and \"ha\" / \"a\", \"è\" / \"e\", \"c'è\" / \"ce\".",
        ],
        examples: [
          { es: "Se avessimo saputo che c'era lo sciopero, saremmo partiti prima.", en: "If we had known there was a strike, we would have left earlier." },
          { es: "Qual è la città più bella che tu abbia mai visto?", en: "What's the most beautiful city you've ever seen?" },
          { es: "L'ho incontrata un po' per caso.", en: "I met her somewhat by chance." },
          { es: "Benché fosse stanca, è venuta lo stesso.", en: "Although she was tired, she came anyway." },
        ],
        checkpoint: [
          { type: "dictation", audio: "Se avessimo saputo che c'era lo sciopero, saremmo partiti prima.", explanation: "Double s in \"avessimo\", double m in \"saremmo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the most beautiful city you've ever seen?", answer: "Qual è la città più bella che tu abbia mai visto?", altAnswers: ["Qual è la città più bella che hai mai visto?"], explanation: "\"Qual è\" has no apostrophe." },
        ],
      },
      {
        heading: "Long sentences",
        body: [
          "Pattern: Upper Intermediate sentences are long. Write in chunks: clause by clause, and check agreement at the end (\"le ho viste\", \"si è trovata\").",
        ],
        examples: [
          { es: "Dopo aver finito il lavoro, siamo andati a cena fuori.", en: "After finishing work, we went out to dinner." },
          { es: "Le chiavi? Le ho lasciate sul tavolo della cucina.", en: "The keys? I left them on the kitchen table." },
          { es: "Mi ha chiesto se potessi aiutarlo con il trasloco.", en: "He asked me if I could help him with the move." },
          { es: "Nonostante il traffico, siamo arrivati in tempo.", en: "Despite the traffic, we arrived on time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys? I left them on the table.", answer: "Le chiavi? Le ho lasciate sul tavolo.", explanation: "Agreement: \"le ... lasciate\"." },
          { type: "listen-choose", audio: "Mi ha chiesto se potessi aiutarlo con il trasloco.", question: "What did he ask?", options: ["if the speaker could help with the move", "if the speaker was moving", "where the speaker lived", "if the speaker needed help"], correctIndex: 0, explanation: "Reported question with \"se potessi\"." },
        ],
      },
    ],
    exercises: [
      { type: "dictation", audio: "Benché fosse stanca, è venuta lo stesso alla festa.", explanation: "\"Benché\" with an accent; \"fosse\" with double s." },
      { type: "dictation", audio: "L'ho incontrata un po' per caso davanti all'università.", explanation: "\"L'ho\", \"po'\", \"università\"." },
      { type: "dictation", audio: "Dopo aver finito il lavoro, siamo andati a cena fuori.", explanation: "\"Dopo aver\" + participle." },
      { type: "dictation", audio: "Nonostante il traffico, siamo arrivati in tempo per lo spettacolo.", explanation: "\"Nonostante\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we had known, we would have left earlier.", answer: "Se l'avessimo saputo, saremmo partiti prima.", altAnswers: ["Se avessimo saputo, saremmo partiti prima.", "Se lo avessimo saputo, saremmo partiti prima."], explanation: "Impossible past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although she was tired, she came anyway.", answer: "Benché fosse stanca, è venuta lo stesso.", altAnswers: ["Sebbene fosse stanca, è venuta lo stesso.", "Anche se era stanca, è venuta lo stesso.", "Nonostante fosse stanca, è venuta lo stesso."], explanation: "\"Benché\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me if I could help him.", answer: "Mi ha chiesto se potessi aiutarlo.", altAnswers: ["Mi ha chiesto se potevo aiutarlo."], explanation: "Reported question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I met her somewhat by chance.", answer: "L'ho incontrata un po' per caso.", explanation: "\"Po'\" with an apostrophe, never an accent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the traffic, we arrived on time.", answer: "Nonostante il traffico, siamo arrivati in tempo.", altAnswers: ["Malgrado il traffico, siamo arrivati in tempo.", "Nonostante il traffico siamo arrivati in tempo."], explanation: "\"Nonostante\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a friend of mine who would like to meet you.", answer: "C'è un'amica mia che vorrebbe conoscerti.", altAnswers: ["C'è una mia amica che vorrebbe conoscerti.", "C'è un mio amico che vorrebbe conoscerti.", "C'è un amico mio che vorrebbe conoscerti."], explanation: "\"Un'amica\" with an apostrophe; \"un amico\" without." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What is] your favorite film?", sentence: "___ il tuo film preferito?", answer: "Qual è", explanation: "No apostrophe in \"qual è\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I wish she [were] here.", sentence: "Vorrei che ___ qui.", answer: "fosse", explanation: "Double s." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [would have come] if he could.", sentence: "___ se avesse potuto.", answer: "Sarebbe venuto", explanation: "Double b in \"sarebbe\"." },
      { type: "speak", text: "Se avessimo saputo che c'era lo sciopero, saremmo partiti prima.", prompt: "Read it aloud, holding the double consonants: If we had known there was a strike, we would have left earlier.", tip: "a-VES-si-mo, sa-REM-mo: hold the doubles.", explanation: "Double consonants are longer." },
    ],
  },
  {
    slug: "b2-drill-listening-gist-detail",
    level: "IT-B2",
    number: 6,
    title: "Drill: Gist and Detail",
    summary: "High-repetition listening: first catch the general meaning, then the specific detail.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Gist first",
        body: [
          "Pattern: on the first listen, ask only two things: what is it about, and how does the speaker feel? Don't try to catch every word. Key words, tone and connectors (\"purtroppo\", \"per fortuna\", \"però\") give the gist.",
        ],
        examples: [
          { es: "Purtroppo il concerto è stato rinviato a data da destinarsi.", en: "Unfortunately the concert has been postponed to a date yet to be set." },
          { es: "Per fortuna alla fine abbiamo trovato una camera libera.", en: "Luckily, in the end, we found a free room." },
          { es: "Il film non era male, però me lo aspettavo più divertente.", en: "The film wasn't bad, but I expected it to be funnier." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il film non era male, però me lo aspettavo più divertente.", question: "How did the speaker find the film?", options: ["OK, but a bit disappointing", "excellent", "terrible", "frightening"], correctIndex: 0, explanation: "\"Non era male, però\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unfortunately the concert has been postponed.", answer: "Purtroppo il concerto è stato rinviato.", altAnswers: ["Purtroppo il concerto è stato rimandato."], explanation: "\"Rinviare\" = to postpone." },
        ],
      },
      {
        heading: "Then the detail",
        body: [
          "Pattern: on the second listen, focus on one detail: a number, a time, a place, a name. Write it down as you hear it. Numbers are the classic trap: \"sedici\" / \"sessanta\", \"tredici\" / \"trenta\", \"il 3\" / \"alle 3\".",
        ],
        examples: [
          { es: "Il treno delle sedici e quaranta parte dal binario tredici.", en: "The 4:40 p.m. train leaves from platform thirteen." },
          { es: "L'appuntamento è spostato a giovedì alle nove e un quarto.", en: "The appointment has been moved to Thursday at quarter past nine." },
          { es: "Costa sessantacinque euro a persona, colazione inclusa.", en: "It costs sixty-five euros per person, breakfast included." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il treno delle sedici e quaranta parte dal binario tredici.", question: "Which platform?", options: ["13", "30", "16", "40"], correctIndex: 0, explanation: "\"Binario tredici\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It costs sixty-five euros per person.", answer: "Costa sessantacinque euro a persona.", altAnswers: ["Costa 65 euro a persona.", "Costa sessantacinque euro per persona."], explanation: "\"Euro\" doesn't change in the plural." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Per fortuna alla fine abbiamo trovato una camera libera.", question: "How did things turn out?", options: ["well, in the end", "badly", "they're still looking", "they went home"], correctIndex: 0, explanation: "\"Per fortuna alla fine\"." },
      { type: "listen-choose", audio: "L'appuntamento è spostato a giovedì alle nove e un quarto.", question: "When is the new appointment?", options: ["Thursday at 9:15", "Tuesday at 9:15", "Thursday at 9:45", "Friday at 9:15"], correctIndex: 0, explanation: "\"Giovedì alle nove e un quarto\"." },
      { type: "listen-choose", audio: "Costa sessantacinque euro a persona, colazione inclusa.", question: "Is breakfast included?", options: ["yes", "no", "only on weekends", "for children only"], correctIndex: 0, explanation: "\"Colazione inclusa\"." },
      { type: "listen-choose", audio: "Purtroppo il concerto è stato rinviato a data da destinarsi.", question: "When will the concert take place?", options: ["The new date isn't set yet.", "Next week.", "Tomorrow.", "It's canceled for good."], correctIndex: 0, explanation: "\"A data da destinarsi\" = date to be set." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luckily, in the end, we found a free room.", answer: "Per fortuna alla fine abbiamo trovato una camera libera.", altAnswers: ["Per fortuna alla fine abbiamo trovato una stanza libera.", "Fortunatamente alla fine abbiamo trovato una camera libera."], explanation: "\"Per fortuna\" = luckily." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I expected it to be funnier.", answer: "Me lo aspettavo più divertente.", altAnswers: ["Mi aspettavo che fosse più divertente."], explanation: "\"Aspettarsi\" + \"lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train leaves from platform thirteen.", answer: "Il treno parte dal binario tredici.", altAnswers: ["Il treno parte dal binario 13."], explanation: "\"Il binario\" = platform." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The appointment has been moved to Thursday.", answer: "L'appuntamento è stato spostato a giovedì.", altAnswers: ["L'appuntamento è spostato a giovedì."], explanation: "\"Spostare\" = to move." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Breakfast included.", answer: "Colazione inclusa.", altAnswers: ["Colazione compresa.", "La colazione è inclusa."], explanation: "Agreement with \"colazione\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train at [4:40 p.m.].", sentence: "Il treno delle ___.", answer: "sedici e quaranta", altAnswers: ["16:40", "16.40"], explanation: "24-hour clock in announcements." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Postponed [to a date yet to be set].", sentence: "Rinviato ___.", answer: "a data da destinarsi", explanation: "Fixed formula." },
      { type: "word-order", prompt: "Put the words in order to say: The film wasn't bad, but I expected it to be funnier.", words: ["Il film", "non era male,", "però", "me lo aspettavo", "più divertente."], translation: "The film wasn't bad, but I expected it to be funnier.", explanation: "\"Però\" signals the real opinion." },
      { type: "dictation", audio: "Il treno delle sedici e quaranta parte dal binario tredici.", explanation: "Numbers: sedici, quaranta, tredici." },
      { type: "speak", text: "Il treno delle sedici e quaranta parte dal binario tredici.", prompt: "Read the announcement: The 4:40 p.m. train leaves from platform thirteen.", tip: "TRE-di-ci vs TREN-ta: listen to the end.", explanation: "Numbers that sound alike." },
    ],
  },
  {
    slug: "b2-listening-phone-and-announcements",
    level: "IT-B2",
    number: 7,
    title: "Listening: Phone Calls and Announcements",
    summary: "Understand station and airport announcements, automated phone menus and voicemail messages.",
    duration: "18 min",
    sections: [
      {
        heading: "Stations and airports",
        body: [
          "Announcements follow fixed formulas: \"è in arrivo al binario\" (is arriving at platform), \"è in partenza dal binario\", \"viaggia con un ritardo di\" (is running late by), \"ci scusiamo per il disagio\" (we apologize for the inconvenience). At airports: \"si avvisano i signori passeggeri\" (passengers are informed), \"l'imbarco\" (boarding), \"l'uscita\" (gate).",
          "Listen for changes: \"il treno ... anziché dal binario 5 partirà dal binario 8\" (instead of platform 5 it will leave from platform 8), \"è stato soppresso\" (has been canceled), \"si effettua\" (will run). Trains are identified by type and number: \"il regionale\", \"il regionale veloce\", \"l'Intercity\", \"il Frecciarossa\" or other high-speed trains.",
        ],
        examples: [
          { es: "Il treno regionale per Firenze è in partenza dal binario sette.", en: "The regional train to Florence is departing from platform seven." },
          { es: "Il treno proveniente da Roma viaggia con un ritardo di venti minuti.", en: "The train from Rome is running twenty minutes late." },
          { es: "Ci scusiamo per il disagio.", en: "We apologize for the inconvenience." },
          { es: "Si avvisano i signori passeggeri che l'imbarco avverrà all'uscita B12.", en: "Passengers are informed that boarding will take place at gate B12." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il treno proveniente da Roma viaggia con un ritardo di venti minuti.", question: "What's the problem with the train from Rome?", options: ["It's twenty minutes late.", "It's canceled.", "It's changed platform.", "It's arriving early."], correctIndex: 0, explanation: "\"Un ritardo di venti minuti\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as an announcement.", source: "We apologize for the inconvenience.", answer: "Ci scusiamo per il disagio.", altAnswers: ["Ci scusiamo per l'inconveniente."], explanation: "\"Il disagio\" = inconvenience." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as an announcement.", source: "The train to Florence is departing from platform seven.", answer: "Il treno per Firenze è in partenza dal binario sette.", altAnswers: ["Il treno per Firenze è in partenza dal binario 7."], explanation: "\"In partenza dal binario\"." },
        ],
      },
      {
        heading: "Phone menus",
        body: [
          "Automated menus use the formal imperative and \"premere\" or \"digitare\" (press, key in): \"per informazioni sugli orari, prema 1\", \"rimanga in linea\" (stay on the line), \"un operatore Le risponderà al più presto\".",
          "Common menu verbs: \"digiti\" (key in), \"pronunci\" (say), \"attenda\" (wait), \"resti in linea\" (stay on the line). Many menus also offer \"per riascoltare il menu, prema asterisco\" (to hear the menu again, press star) and \"cancelletto\" (the pound key, #).",
        ],
        examples: [
          { es: "Per informazioni sulle bollette, prema uno.", en: "For information about bills, press one." },
          { es: "Per parlare con un operatore, prema zero.", en: "To speak to an operator, press zero." },
          { es: "Rimanga in linea: un operatore Le risponderà al più presto.", en: "Please hold: an operator will answer you as soon as possible." },
          { es: "La chiamata potrebbe essere registrata.", en: "The call may be recorded." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Per parlare con un operatore, prema zero.", question: "What should you press to speak to a person?", options: ["zero", "one", "nine", "the star key"], correctIndex: 0, explanation: "\"Prema zero\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a phone menu.", source: "Please hold: an operator will answer you as soon as possible.", answer: "Rimanga in linea: un operatore Le risponderà al più presto.", altAnswers: ["Resti in linea: un operatore Le risponderà al più presto.", "Rimanga in linea: un operatore le risponderà al più presto."], explanation: "Formal imperative \"rimanga\"." },
        ],
      },
      {
        heading: "Voicemail",
        body: [
          "Voicemail messages are fast and informal. Listen for who, why and what to do: \"sono Paola\", \"ti chiamo per\", \"richiamami\" (call me back), \"quando puoi\", \"ti lascio il numero\".",
        ],
        examples: [
          { es: "Ciao, sono Paola, ti chiamo per la cena di sabato.", en: "Hi, it's Paola, I'm calling about Saturday's dinner." },
          { es: "Abbiamo spostato tutto alle otto e mezza.", en: "We've moved everything to half past eight." },
          { es: "Richiamami quando puoi, così ci mettiamo d'accordo.", en: "Call me back when you can, so we can sort it out." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Abbiamo spostato tutto alle otto e mezza.", question: "What time is the dinner now?", options: ["8:30", "8:00", "9:30", "half past seven"], correctIndex: 0, explanation: "\"Le otto e mezza\"." },
          { type: "speak", text: "Ciao, sono io, ti chiamo per la cena di sabato: richiamami quando puoi.", prompt: "Leave a voicemail: Hi, it's me, I'm calling about Saturday's dinner: call me back when you can.", tip: "ri-CHIA-ma-mi: stress on chia.", explanation: "\"Sono io\" = it's me." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Si avvisano i signori passeggeri che l'imbarco avverrà all'uscita B12.", question: "Where will boarding take place?", options: ["at gate B12", "at gate B2", "at check-in 12", "at platform 12"], correctIndex: 0, explanation: "\"All'uscita B12\"." },
      { type: "listen-choose", audio: "La chiamata potrebbe essere registrata.", question: "What does the message warn you about?", options: ["The call may be recorded.", "The call will be expensive.", "The line may drop.", "The office is closed."], correctIndex: 0, explanation: "\"Registrata\" = recorded." },
      { type: "listen-choose", audio: "Richiamami quando puoi, così ci mettiamo d'accordo.", question: "What does Paola want?", options: ["a call back to agree on plans", "a text message", "you to come at once", "you to cancel"], correctIndex: 0, explanation: "\"Richiamami\" = call me back." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as an announcement.", source: "The train from Rome is running twenty minutes late.", answer: "Il treno proveniente da Roma viaggia con un ritardo di venti minuti.", altAnswers: ["Il treno proveniente da Roma viaggia con venti minuti di ritardo.", "Il treno da Roma viaggia con un ritardo di venti minuti."], explanation: "\"Proveniente da\" = coming from." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as an announcement.", source: "Boarding will take place at gate B12.", answer: "L'imbarco avverrà all'uscita B12.", altAnswers: ["L'imbarco avverrà al gate B12."], explanation: "\"Avvenire\" = to take place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a phone menu.", source: "For information about bills, press one.", answer: "Per informazioni sulle bollette, prema uno.", altAnswers: ["Per informazioni sulle bollette, prema 1.", "Per informazioni sulle bollette, digiti uno."], explanation: "Formal imperative \"prema\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The call may be recorded.", answer: "La chiamata potrebbe essere registrata.", altAnswers: ["La telefonata potrebbe essere registrata."], explanation: "Conditional for possibility." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in a voicemail.", source: "Hi, it's Paola, I'm calling about Saturday's dinner.", answer: "Ciao, sono Paola, ti chiamo per la cena di sabato.", altAnswers: ["Ciao, sono Paola, ti chiamo per la cena di sabato sera."], explanation: "\"Sono\" + name on the phone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've moved everything to half past eight.", answer: "Abbiamo spostato tutto alle otto e mezza.", altAnswers: ["Abbiamo spostato tutto alle otto e mezzo.", "Abbiamo spostato tutto alle 20:30."], explanation: "\"Spostare\" = to move." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train [is arriving] at platform three.", sentence: "Il treno ___ al binario tre.", answer: "è in arrivo", explanation: "\"In arrivo\" = arriving." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, to a friend.", en: "[Call me back] when you can.", sentence: "___ quando puoi.", answer: "Richiamami", explanation: "\"Tu\" imperative + \"mi\"." },
      { type: "word-order", prompt: "Put the words in order to say: To speak to an operator, press zero.", words: ["Per parlare", "con un operatore,", "prema", "zero."], translation: "To speak to an operator, press zero.", explanation: "Formal imperative." },
      { type: "dictation", audio: "Il treno regionale per Firenze è in partenza dal binario sette.", explanation: "Standard station formula." },
      { type: "speak", text: "Rimanga in linea: un operatore Le risponderà al più presto.", prompt: "Record the hold message: Please hold: an operator will answer you as soon as possible.", tip: "ri-MAN-ga: stress on man.", explanation: "Formal \"Lei\" throughout." },
    ],
  },
  {
    slug: "b2-listening-regional-voices",
    level: "IT-B2",
    number: 8,
    title: "Listening: Regional Voices",
    summary: "Understand speakers from Milan, Rome, Florence and Naples through the regional words and expressions they use.",
    duration: "18 min",
    sections: [
      {
        heading: "North: Milan",
        body: [
          "Italians speak standard Italian with regional color. In Milan you'll hear \"uè\" as a greeting or exclamation, the article with first names (\"la Giulia\", \"il Marco\"), \"tipo\" (like) in every other sentence, and words like \"la michetta\" (a bread roll) and \"il bauscia\" (a show-off). The audio here uses a standard voice: read and listen for the words.",
          "Regional features are not mistakes: they are part of how Italians really speak, and educated speakers keep their accent. For the exam and for your own speech, aim at standard Italian, but expect to hear these words in films, on the radio and on the street.",
        ],
        examples: [
          { es: "Uè, ciao! Hai visto la Giulia stamattina?", en: "Hey, hi! Have you seen Giulia this morning?" },
          { es: "Mi prendi due michette dal fornaio?", en: "Can you get me two bread rolls from the baker's?" },
          { es: "Il Marco è proprio un bauscia.", en: "Marco is a real show-off." },
          { es: "In Lombardia si dice \"anguria\", non \"cocomero\".", en: "In Lombardy people say anguria, not cocomero." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Mi prendi due michette dal fornaio?", question: "What does the speaker want?", options: ["two bread rolls", "two pastries", "two coffees", "two newspapers"], correctIndex: 0, explanation: "\"La michetta\" = Milanese bread roll." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a Milanese speaker.", source: "Have you seen Giulia this morning?", answer: "Hai visto la Giulia stamattina?", altAnswers: ["Hai visto Giulia stamattina?", "Hai visto la Giulia stamani?"], explanation: "Northern Italians often put the article before first names." },
          { type: "multiple-choice", question: "What is the word for watermelon in much of northern Italy?", options: ["anguria", "cocomero", "melone", "popone"], correctIndex: 0, explanation: "\"Anguria\" in the North, \"cocomero\" in Tuscany and Rome." },
        ],
      },
      {
        heading: "Center: Rome and Florence",
        body: [
          "Romans say \"daje\" (come on, let's go), \"ammazza\" (wow), \"mo'\" (now) and often drop final syllables: \"anda'\" for \"andare\". In Florence, \"icché\" replaces \"che cosa\" and \"noi si va\" replaces \"noi andiamo\". Both cities say \"cocomero\".",
          "Words for a bread roll change from city to city: \"la michetta\" in Milan, \"la rosetta\" in Rome, \"il panino\" everywhere. The word for a small café-bar snack or a sandwich can change too, so when in doubt, point and say \"questo\".",
        ],
        examples: [
          { es: "Daje, che mo' arriva l'autobus!", en: "Come on, the bus is coming now!" },
          { es: "Ammazza quanta gente c'è stasera!", en: "Wow, there are so many people tonight!" },
          { es: "Icché tu fai stasera?", en: "What are you doing tonight?" },
          { es: "Domani noi si va al mare.", en: "Tomorrow we're going to the seaside." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ammazza quanta gente c'è stasera!", question: "What is the Roman speaker surprised by?", options: ["how many people there are", "how late it is", "the price", "the noise"], correctIndex: 0, explanation: "\"Ammazza\" = wow." },
          { type: "translate", direction: "en-es", prompt: "Translate into standard Italian.", source: "Tomorrow we're going to the seaside.", answer: "Domani andiamo al mare.", altAnswers: ["Domani noi andiamo al mare."], explanation: "Florentine \"noi si va\" = standard \"noi andiamo\"." },
        ],
      },
      {
        heading: "South: Naples",
        body: [
          "In Naples you'll hear \"uè\" too, \"jamme\" (let's go), \"guagliò\" (hey, kid), and \"stare\" where standard Italian uses \"essere\" (\"sto stanco\" for \"sono stanco\") and \"tenere\" for \"avere\" (\"tengo fame\" for \"ho fame\"). Understand these, but use the standard forms yourself.",
          "Some of these features travel well beyond Naples. \"Stare\" for \"essere\" and \"tenere\" for \"avere\" are heard across much of the South, and \"mo'\" is common from Rome southward. Others are local: \"jamme\" and \"guagliò\" (from \"guaglione\", boy) are Neapolitan dialect words that every Italian recognizes from films and songs, but a speaker from Bari or Palermo wouldn't normally use them.",
        ],
        examples: [
          { es: "Jamme, guagliò, che è tardi!", en: "Let's go, guys, it's late!" },
          { es: "Sto stanco morto, oggi.", en: "I'm dead tired today." },
          { es: "Tengo una fame che non ci vedo.", en: "I'm so hungry I can't see straight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into standard Italian.", source: "I'm dead tired today.", answer: "Sono stanco morto, oggi.", altAnswers: ["Oggi sono stanco morto.", "Sono stanca morta, oggi.", "Oggi sono stanca morta."], explanation: "Southern \"sto stanco\" = standard \"sono stanco\"." },
          { type: "speak", text: "Ho una fame che non ci vedo!", prompt: "Say it in standard Italian: I'm so hungry I can't see straight!", tip: "FA-me: stress on fa.", explanation: "Standard \"ho\" for Southern \"tengo\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Daje, che mo' arriva l'autobus!", question: "What does \"mo'\" mean here?", options: ["now", "more", "maybe", "very"], correctIndex: 0, explanation: "\"Mo'\" = now, in Rome and the South." },
      { type: "listen-choose", audio: "Icché tu fai stasera?", question: "What is the Florentine speaker asking?", options: ["what you're doing tonight", "where you live", "how you are", "who you're with"], correctIndex: 0, explanation: "\"Icché\" = che cosa." },
      { type: "listen-choose", audio: "Tengo una fame che non ci vedo.", question: "How does the speaker feel?", options: ["very hungry", "very tired", "very cold", "very angry"], correctIndex: 0, explanation: "Southern \"tengo\" = \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into standard Italian.", source: "What are you doing tonight?", answer: "Che cosa fai stasera?", altAnswers: ["Cosa fai stasera?", "Che fai stasera?"], explanation: "Standard for Florentine \"icché tu fai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into standard Italian.", source: "I'm so hungry!", answer: "Ho una gran fame!", altAnswers: ["Ho tanta fame!", "Ho una fame!", "Ho molta fame!"], explanation: "Standard \"avere fame\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wow, there are so many people tonight!", answer: "Ammazza quanta gente c'è stasera!", altAnswers: ["Accidenti quanta gente c'è stasera!", "Caspita quanta gente c'è stasera!"], explanation: "\"Quanta gente\": \"gente\" is singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you get me two bread rolls?", answer: "Mi prendi due panini?", altAnswers: ["Mi prendi due michette?", "Mi prendi due rosette?"], explanation: "\"Panino\" everywhere; \"michetta\" in Milan, \"rosetta\" in Rome." },
      { type: "translate", direction: "en-es", prompt: "Translate into standard Italian.", source: "Let's go, it's late!", answer: "Andiamo, è tardi!", altAnswers: ["Dai, andiamo, è tardi!", "Andiamo, che è tardi!"], explanation: "Standard for Neapolitan \"jamme\"." },
      { type: "fill-blank", prompt: "Write the standard Italian for the bold words.", en: "Tomorrow [we're going] to the seaside.", sentence: "Domani ___ al mare.", answer: "andiamo", explanation: "Standard for Florentine \"si va\"." },
      { type: "fill-blank", prompt: "Write the standard Italian for the bold words.", en: "[I'm] dead tired.", sentence: "___ stanco morto.", answer: "Sono", explanation: "Standard \"essere\", not Southern \"stare\"." },
      { type: "word-order", prompt: "Put the words in order to say: In Lombardy people say anguria, not cocomero.", words: ["In Lombardia", "si dice", "anguria,", "non", "cocomero."], translation: "In Lombardy people say anguria, not cocomero.", explanation: "Regional words for watermelon." },
      { type: "dictation", audio: "Ammazza quanta gente c'è stasera in piazza!", explanation: "Roman \"ammazza\" = wow." },
      { type: "speak", text: "A Milano si dice anguria, a Roma cocomero.", prompt: "Explain: In Milan they say anguria, in Rome cocomero.", tip: "an-GU-ria: stress on gu.", explanation: "Regional vocabulary." },
    ],
  },
  {
    slug: "b2-cils-due-listening-1",
    level: "IT-B2",
    number: 9,
    title: "CILS DUE: Listening, Part 1 of 2",
    summary: "Practice CILS DUE-style listening tasks on short recordings: adverts, announcements and short dialogues with multiple-choice questions.",
    duration: "18 min",
    sections: [
      {
        heading: "How the listening test works",
        body: [
          "CILS DUE is the Upper Intermediate exam of the Università per Stranieri di Siena. The listening section has several tasks on recordings of different lengths, usually heard twice. Typical formats: multiple choice on short texts, multiple choice on a longer text, and choosing which pieces of information a text contains. Check the latest format on the official CILS website before you take the exam.",
          "Strategy: read the questions before you listen, underline the key word in each, and on the first listen go for gist. Use the second listen to check details. Distractors often repeat words from the recording with a different meaning.",
        ],
        examples: [
          { es: "Ascolterete ogni testo due volte.", en: "You will hear each text twice." },
          { es: "Leggete le domande prima dell'ascolto.", en: "Read the questions before listening." },
          { es: "Scegliete la risposta corretta tra quelle proposte.", en: "Choose the correct answer from those given." },
          { es: "Avete trenta secondi per leggere le domande.", en: "You have thirty seconds to read the questions." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate the instruction into Italian.", source: "You have thirty seconds to read the questions.", answer: "Avete trenta secondi per leggere le domande.", altAnswers: ["Avete 30 secondi per leggere le domande."], explanation: "\"Per\" + infinitive for purpose." },
          { type: "translate", direction: "en-es", prompt: "Translate the instruction into Italian.", source: "You will hear each text twice.", answer: "Ascolterete ogni testo due volte.", altAnswers: ["Sentirete ogni testo due volte.", "Ascolterete ciascun testo due volte."], explanation: "Exam instructions use \"voi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate the instruction into Italian.", source: "Choose the correct answer.", answer: "Scegliete la risposta corretta.", altAnswers: ["Scegliete la risposta giusta."], explanation: "\"Voi\" imperative." },
        ],
      },
      {
        heading: "Text 1: a radio advert",
        body: [
          "Listen to the advert and answer: what is being advertised, for whom, and what is the special offer? Adverts speak fast and use the \"voi\" or \"tu\" imperative.",
        ],
        examples: [
          { es: "Vuoi imparare a cucinare come un vero chef?", en: "Do you want to learn to cook like a real chef?" },
          { es: "La scuola di cucina Sapori apre un nuovo corso serale per principianti.", en: "The Sapori cooking school is opening a new evening course for beginners." },
          { es: "Chi si iscrive entro il 15 marzo riceve uno sconto del venti per cento.", en: "Anyone who enrolls by March 15 gets a twenty percent discount." },
          { es: "Posti limitati: chiama subito!", en: "Space is limited: call now!" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "La scuola di cucina Sapori apre un nuovo corso serale per principianti.", question: "Who is the course for?", options: ["beginners", "professional chefs", "children", "restaurant owners"], correctIndex: 0, explanation: "\"Per principianti\"." },
          { type: "listen-choose", audio: "Chi si iscrive entro il 15 marzo riceve uno sconto del venti per cento.", question: "How do you get the discount?", options: ["by enrolling by March 15", "by bringing a friend", "by paying in cash", "by enrolling after March 15"], correctIndex: 0, explanation: "\"Entro il 15 marzo\" = by March 15." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anyone who enrolls by March 15 gets a discount.", answer: "Chi si iscrive entro il 15 marzo riceve uno sconto.", altAnswers: ["Chi si iscrive entro il 15 marzo ha uno sconto.", "Chi si iscrive entro il quindici marzo riceve uno sconto."], explanation: "\"Chi\" = anyone who, with a singular verb." },
        ],
      },
      {
        heading: "Text 2: a short dialogue",
        body: [
          "Two colleagues talk about a meeting. Questions often test the outcome: what was decided, who will do what. Listen for the final lines, where the decision usually comes.",
        ],
        examples: [
          { es: "Allora, la riunione di domani è confermata?", en: "So, is tomorrow's meeting confirmed?" },
          { es: "No, il direttore l'ha spostata a lunedì perché è fuori sede.", en: "No, the director has moved it to Monday because he's away." },
          { es: "Va bene, allora preparo io la presentazione.", en: "All right, then I'll prepare the presentation." },
          { es: "Perfetto, io mi occupo di avvisare gli altri.", en: "Great, I'll take care of letting the others know." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "No, il direttore l'ha spostata a lunedì perché è fuori sede.", question: "Why was the meeting moved?", options: ["The director is away.", "The room isn't free.", "A colleague is ill.", "The presentation isn't ready."], correctIndex: 0, explanation: "\"Fuori sede\" = away from the office." },
          { type: "speak", text: "Va bene, allora preparo io la presentazione e tu avvisi gli altri.", prompt: "Agree on the tasks: All right, then I'll prepare the presentation and you let the others know.", tip: "pre-sen-ta-ZIO-ne: stress on zio.", explanation: "Stressed \"io\" after the verb for contrast." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Vuoi imparare a cucinare come un vero chef? La scuola di cucina Sapori apre un nuovo corso serale.", question: "When does the course take place?", options: ["in the evening", "in the morning", "on weekends", "online only"], correctIndex: 0, explanation: "\"Corso serale\" = evening course." },
      { type: "listen-choose", audio: "Perfetto, io mi occupo di avvisare gli altri.", question: "What will the second colleague do?", options: ["tell the others", "prepare the slides", "book a room", "call the director"], correctIndex: 0, explanation: "\"Mi occupo di avvisare\"." },
      { type: "listen-choose", audio: "Posti limitati: chiama subito!", question: "Why should you call immediately?", options: ["Space is limited.", "The price goes up tomorrow.", "The school is closing.", "The course is free."], correctIndex: 0, explanation: "\"Posti limitati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The director has moved the meeting to Monday.", answer: "Il direttore ha spostato la riunione a lunedì.", altAnswers: ["La direttrice ha spostato la riunione a lunedì."], explanation: "\"Spostare a\" = to move to." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's away from the office.", answer: "È fuori sede.", altAnswers: ["È fuori ufficio.", "Non è in sede."], explanation: "\"Fuori sede\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll take care of letting the others know.", answer: "Mi occupo io di avvisare gli altri.", altAnswers: ["Io mi occupo di avvisare gli altri.", "Mi occupo di avvisare gli altri."], explanation: "\"Occuparsi di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want to learn to cook like a real chef?", answer: "Vuoi imparare a cucinare come un vero chef?", altAnswers: ["Vuoi imparare a cucinare come un vero cuoco?"], explanation: "\"Imparare a\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Space is limited: call now!", answer: "Posti limitati: chiama subito!", altAnswers: ["Posti limitati: chiamate subito!", "Posti limitati: chiama ora!"], explanation: "Advert style." },
      { type: "translate", direction: "en-es", prompt: "Translate the instruction into Italian.", source: "Read the questions before listening.", answer: "Leggete le domande prima dell'ascolto.", altAnswers: ["Leggete le domande prima di ascoltare."], explanation: "\"Prima di\" + noun or infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Sapori cooking school is opening a new course.", answer: "La scuola di cucina Sapori apre un nuovo corso.", altAnswers: ["La scuola di cucina Sapori inaugura un nuovo corso."], explanation: "Present for a near-future event." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So, is tomorrow's meeting confirmed?", answer: "Allora, la riunione di domani è confermata?", altAnswers: ["Allora, è confermata la riunione di domani?"], explanation: "\"Allora\" opens a question in speech." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A new [evening course] for beginners.", sentence: "Un nuovo ___ per principianti.", answer: "corso serale", explanation: "\"Serale\" = evening." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Is tomorrow's meeting [confirmed]?", sentence: "La riunione di domani è ___?", answer: "confermata", explanation: "Agrees with \"riunione\"." },
      { type: "word-order", prompt: "Put the words in order to say: All right, then I'll prepare the presentation.", words: ["Va bene,", "allora", "preparo io", "la presentazione."], translation: "All right, then I'll prepare the presentation.", explanation: "\"Io\" after the verb for emphasis." },
      { type: "dictation", audio: "Chi si iscrive entro il 15 marzo riceve uno sconto del venti per cento.", explanation: "Date and percentage." },
      { type: "speak", text: "Ascolterete ogni testo due volte: leggete le domande prima dell'ascolto.", prompt: "Read the exam instructions aloud: You will hear each text twice: read the questions before listening.", tip: "a-scol-te-RE-te: stress on re.", explanation: "Future and imperative with \"voi\"." },
    ],
  },
  {
    slug: "b2-cils-due-listening-2",
    level: "IT-B2",
    number: 10,
    title: "CILS DUE: Listening, Part 2 of 2",
    summary: "Practice CILS DUE-style tasks on a longer interview: multiple choice and picking out which information the text contains.",
    duration: "18 min",
    sections: [
      {
        heading: "The interview: the facts",
        body: [
          "A longer recording: a radio interview with the director of a city library that has started lending tools, games and musical instruments. In the information task you choose, from a list, the statements that are actually in the text. Wrong options are often plausible but never said.",
          "Information tasks reward careful listening: an option may mention a word from the text (\"chitarre\") but say something different about it (\"si possono comprare chitarre\"). Tick an option only if the recording says exactly that.",
        ],
        examples: [
          { es: "Da un anno la nostra biblioteca non presta solo libri.", en: "For a year our library hasn't just lent books." },
          { es: "Si possono prendere in prestito trapani, giochi da tavolo e perfino chitarre.", en: "You can borrow drills, board games and even guitars." },
          { es: "Il servizio è gratuito per tutti gli iscritti.", en: "The service is free for all members." },
          { es: "Il prestito dura due settimane e si può rinnovare una volta.", en: "Loans last two weeks and can be renewed once." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il prestito dura due settimane e si può rinnovare una volta.", question: "How long can you keep an item?", options: ["two weeks, renewable once", "one week", "a month", "as long as you like"], correctIndex: 0, explanation: "\"Due settimane\", \"rinnovare una volta\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can borrow drills and board games.", answer: "Si possono prendere in prestito trapani e giochi da tavolo.", altAnswers: ["Si possono prendere in prestito dei trapani e dei giochi da tavolo.", "È possibile prendere in prestito trapani e giochi da tavolo."], explanation: "\"Prendere in prestito\" = to borrow." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The service is free for all members.", answer: "Il servizio è gratuito per tutti gli iscritti.", altAnswers: ["Il servizio è gratis per tutti gli iscritti."], explanation: "\"Gli iscritti\" = members, registered users." },
        ],
      },
      {
        heading: "The interview: reasons",
        body: [
          "The second part explains why. Listen for cause and purpose: \"l'idea è nata perché\", \"in modo che\" + subjunctive, \"così\" + indicative, \"non ha senso che\" + subjunctive.",
          "Purpose and result sound similar: \"in modo che\" + subjunctive is purpose (so that people can), while \"così\" + indicative is result (that way people save). Exam questions that ask \"perché\" usually want the reason, not the result.",
        ],
        examples: [
          { es: "L'idea è nata perché molti oggetti si usano pochissimo.", en: "The idea came about because many objects are hardly ever used." },
          { es: "Non ha senso che ogni famiglia compri un trapano per usarlo due volte.", en: "It makes no sense for every family to buy a drill to use it twice." },
          { es: "Li prestiamo in modo che tutti possano usarli.", en: "We lend them so that everyone can use them." },
          { es: "Così si risparmia e si riducono i rifiuti.", en: "That way people save money and waste is reduced." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Non ha senso che ogni famiglia compri un trapano per usarlo due volte.", question: "What doesn't make sense, according to the director?", options: ["every family buying a drill they rarely use", "lending drills", "buying books", "charging for the service"], correctIndex: 0, explanation: "\"Non ha senso che\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We lend them so that everyone can use them.", answer: "Li prestiamo in modo che tutti possano usarli.", altAnswers: ["Li prestiamo perché tutti possano usarli.", "Li prestiamo affinché tutti possano usarli."], explanation: "\"In modo che\" + subjunctive." },
        ],
      },
      {
        heading: "The interview: results",
        body: [
          "The end gives results and plans. Information tasks often hide the answer in a number or a comparison: \"il doppio\" (double), \"un terzo\" (a third), \"rispetto all'anno scorso\" (compared with last year).",
        ],
        examples: [
          { es: "Gli iscritti sono raddoppiati rispetto all'anno scorso.", en: "Membership has doubled compared with last year." },
          { es: "Un terzo dei nuovi iscritti ha meno di trent'anni.", en: "A third of the new members are under thirty." },
          { es: "Il prossimo passo sarà aprire una piccola officina per le riparazioni.", en: "The next step will be to open a small repair workshop." },
        ],
        checkpoint: [
          { type: "multi-select", question: "Which of these did the director say?", options: ["Membership has doubled.", "A third of new members are under thirty.", "They plan a repair workshop.", "The service costs five euros.", "Loans last a month."], correctIndexes: [0, 1, 2], explanation: "The service is free and loans last two weeks." },
          { type: "speak", text: "Gli iscritti sono raddoppiati rispetto all'anno scorso.", prompt: "Report the result: Membership has doubled compared with last year.", tip: "rad-dop-PIA-ti: two double consonants.", explanation: "\"Raddoppiare\" with \"essere\" here." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "L'idea è nata perché molti oggetti si usano pochissimo.", question: "Why did the idea come about?", options: ["Many objects are rarely used.", "The library had too many books.", "People asked for music lessons.", "The council demanded it."], correctIndex: 0, explanation: "\"Si usano pochissimo\"." },
      { type: "listen-choose", audio: "Il prossimo passo sarà aprire una piccola officina per le riparazioni.", question: "What is the next plan?", options: ["a repair workshop", "a café", "a bigger library", "a music school"], correctIndex: 0, explanation: "\"Un'officina per le riparazioni\"." },
      { type: "multi-select", question: "Which items can you borrow, according to the interview?", options: ["drills", "board games", "guitars", "bicycles", "cars"], correctIndexes: [0, 1, 2], explanation: "\"Trapani, giochi da tavolo e perfino chitarre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The idea came about because many objects are hardly ever used.", answer: "L'idea è nata perché molti oggetti si usano pochissimo.", altAnswers: ["L'idea è nata perché molti oggetti vengono usati pochissimo.", "L'idea è nata perché molti oggetti si usano molto poco."], explanation: "\"Nascere\" for ideas." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It makes no sense for every family to buy a drill.", answer: "Non ha senso che ogni famiglia compri un trapano.", explanation: "\"Non ha senso che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That way people save money and waste is reduced.", answer: "Così si risparmia e si riducono i rifiuti.", altAnswers: ["Così si risparmiano soldi e si riducono i rifiuti."], explanation: "Impersonal and si passivante." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Membership has doubled compared with last year.", answer: "Gli iscritti sono raddoppiati rispetto all'anno scorso.", altAnswers: ["Gli iscritti sono raddoppiati rispetto allo scorso anno."], explanation: "\"Rispetto a\" = compared with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A third of the new members are under thirty.", answer: "Un terzo dei nuovi iscritti ha meno di trent'anni.", altAnswers: ["Un terzo dei nuovi iscritti ha meno di 30 anni."], explanation: "\"Un terzo\" takes a singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Loans can be renewed once.", answer: "Il prestito si può rinnovare una volta.", altAnswers: ["Il prestito può essere rinnovato una volta.", "I prestiti si possono rinnovare una volta."], explanation: "\"Rinnovare\" = to renew." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You can [borrow] guitars.", sentence: "Si possono ___ chitarre.", answer: "prendere in prestito", explanation: "\"Prestare\" = to lend; \"prendere in prestito\" = to borrow." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We lend them so that everyone [can] use them.", sentence: "Li prestiamo in modo che tutti ___ usarli.", answer: "possano", explanation: "Subjunctive after \"in modo che\"." },
      { type: "word-order", prompt: "Put the words in order to say: For a year our library hasn't just lent books.", words: ["Da un anno", "la nostra biblioteca", "non presta", "solo libri."], translation: "For a year our library hasn't just lent books.", explanation: "Present + \"da\" for an ongoing situation." },
      { type: "dictation", audio: "Si possono prendere in prestito trapani, giochi da tavolo e perfino chitarre.", explanation: "\"Perfino\" = even." },
      { type: "speak", text: "Non ha senso che ogni famiglia compri un trapano per usarlo due volte.", prompt: "Make the director's point: It makes no sense for every family to buy a drill to use it twice.", tip: "TRA-pa-no: stress on the first syllable.", explanation: "\"Non ha senso che\" + subjunctive." },
    ],
  },
];

export const IT_B2_U28_WRITING: WriteExercise = {
  type: "write",
  prompt: "You listened to a radio interview with a library director who started lending tools, games and musical instruments. Write an email to an Italian friend telling them about it: what the library does, how it works (cost, loan period), why the director started it, the results so far, and what you think of the idea.",
  minWords: 120,
  maxWords: 200,
  rubric: [
    "Reports what was said with precise reporting verbs (ha spiegato, ha raccontato, ha sottolineato) and the right tense shifts",
    "Includes the key facts heard: items, cost, loan period, reasons and results, with accurate numbers",
    "Expresses a personal opinion with the subjunctive (mi sembra che, trovo utile che, non ha senso che)",
    "Uses an informal email format with greeting, connected paragraphs and a friendly close",
  ],
  modelAnswer: "Ciao Elena,\n\nieri in macchina ho sentito alla radio un'intervista che ti sarebbe piaciuta. Parlavano con la direttrice di una biblioteca che da un anno non presta solo libri, ma anche trapani, giochi da tavolo e perfino chitarre.\n\nHa spiegato che il servizio è gratuito per gli iscritti e che il prestito dura due settimane, rinnovabile una volta. L'idea è nata perché, secondo lei, non ha senso che ogni famiglia compri un trapano per usarlo due volte all'anno. Ha sottolineato che così si risparmia e si riducono i rifiuti.\n\nA quanto pare funziona: gli iscritti sono raddoppiati e un terzo dei nuovi ha meno di trent'anni. Adesso vogliono aprire anche un'officina per le riparazioni.\n\nIo trovo che sia un'idea geniale e mi piacerebbe che la nostra biblioteca facesse lo stesso. Tu che ne pensi? Potremmo proporlo al Comune!\n\nUn abbraccio,\nSam",
  explanation: "The email reports the interview with \"ha spiegato che\" and \"ha sottolineato che\", keeps the facts accurate (free, two weeks, membership doubled, a third under thirty) and adds an opinion with \"trovo che sia\" and \"mi piacerebbe che ... facesse\", the imperfect subjunctive after a conditional.",
};
