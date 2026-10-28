// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u33.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 33: Reading and Listening Lab, CILS UNO Tasks. Exam-format
// practice for CILS UNO (B1) with strategies; review of B1 grammar.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U33: Lesson[] = [
  {
    slug: "b1-cils-uno-listening-1",
    level: "IT-B1",
    number: 1,
    title: "CILS UNO: Listening, Part 1 of 2",
    summary: "Practice CILS UNO-style listening with short dialogues and announcements: read the options first, listen for the key detail, choose.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "The exam and the strategy",
        body: [
          "CILS UNO is the Intermediate (B1) certificate of the Università per Stranieri di Siena. It has five parts, each marked separately: listening, reading, grammar and vocabulary (\"analisi delle strutture di comunicazione\"), writing and speaking. Check the current format and timings on the official CILS site before you book.",
          "In the listening part you hear short real-life recordings: announcements, phone messages, short dialogues. Strategy: read the question and options before the audio, decide what kind of detail you need (a time, a place, a reason), and don't panic at unknown words: listen for the answer, not for every word.",
        ],
        examples: [
          { es: "Il treno regionale per Verona partirà dal binario 6.", en: "The regional train to Verona will leave from platform 6." },
          { es: "Il negozio resterà chiuso per inventario.", en: "The shop will be closed for inventory." },
          { es: "Ti richiamo appena esco dalla riunione.", en: "I'll call you back as soon as I'm out of the meeting." },
          { es: "Domani sono previste piogge al Nord.", en: "Rain is forecast in the North tomorrow." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il treno regionale per Verona, previsto alle 10 e 15, partirà dal binario 6 anziché dal binario 2.", question: "What has changed?", options: ["the platform", "the time", "the destination", "the type of train"], correctIndex: 0, explanation: "\"Anziché\" = instead of: platform 6, not 2." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop will be closed for inventory.", answer: "Il negozio resterà chiuso per inventario.", altAnswers: ["Il negozio rimarrà chiuso per inventario.", "Il negozio sarà chiuso per inventario."], explanation: "\"Restare chiuso\" is the usual notice phrase." },
        ],
      },
      {
        heading: "Task: announcements",
        body: [
          "Announcements have fixed phrases: \"Si avvisano i signori passeggeri che ...\" (passengers are advised that ...), \"è in arrivo al binario\" (is arriving at platform), \"con un ritardo previsto di\" (with an expected delay of), \"si prega di\" (please). In shops and museums: \"Si informa la gentile clientela che ...\" (customers are informed that ...).",
        ],
        examples: [
          { es: "Si avvisano i signori passeggeri che il treno è in ritardo.", en: "Passengers are advised that the train is late." },
          { es: "Il Frecciarossa è in arrivo al binario 3.", en: "The Frecciarossa is arriving at platform 3." },
          { es: "Si prega di non lasciare i bagagli incustoditi.", en: "Please do not leave luggage unattended." },
          { es: "Si informa la gentile clientela che il negozio chiude tra dieci minuti.", en: "Customers are informed that the shop closes in ten minutes." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Si informa la gentile clientela che il negozio chiude tra dieci minuti. Si prega di recarsi alle casse.", question: "What should customers do?", options: ["go to the registers", "leave the store at once", "come back tomorrow", "wait at the entrance"], correctIndex: 0, explanation: "\"Recarsi alle casse\" = go to the checkouts." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Please do not leave luggage unattended.", answer: "Si prega di non lasciare i bagagli incustoditi.", altAnswers: ["Si prega di non lasciare bagagli incustoditi."], explanation: "\"Si prega di\" + infinitive." },
        ],
      },
      {
        heading: "Task: short dialogues",
        body: [
          "In short dialogues, the answer is often in the second line, after a correction or a \"però\": \"Ci vediamo alle otto?\" \"Alle otto non ce la faccio, facciamo alle nove.\" The answer is nine, not eight. Watch for \"anzi\" (actually, rather), \"invece\" and \"non ... ma\".",
        ],
        examples: [
          { es: "Alle otto non ce la faccio, facciamo alle nove.", en: "I can't make eight, let's say nine." },
          { es: "Prendo il rosso, anzi no, il blu.", en: "I'll take the red one, actually no, the blue one." },
          { es: "Non è al primo piano, ma al secondo.", en: "It's not on the first floor but on the second." },
          { es: "Doveva venire Paolo, invece è venuta sua sorella.", en: "Paolo was supposed to come, but his sister came instead." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ci vediamo alle otto? Alle otto non ce la faccio, facciamo alle nove.", question: "What time will they meet?", options: ["at nine", "at eight", "at half past eight", "they won't meet"], correctIndex: 0, explanation: "\"Non ce la faccio\": the first time is rejected." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't make eight, let's say nine.", answer: "Alle otto non ce la faccio, facciamo alle nove.", altAnswers: ["Alle otto non riesco, facciamo alle nove.", "Non ce la faccio alle otto, facciamo alle nove."], explanation: "\"Farcela\" = to manage; \"facciamo\" = let's say." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Si avvisano i signori passeggeri che il treno per Bari viaggia con un ritardo previsto di venti minuti.", question: "What's the problem?", options: ["The train is 20 minutes late.", "The train is canceled.", "The train leaves 20 minutes early.", "The platform has changed."], correctIndex: 0, explanation: "\"Ritardo previsto di venti minuti\"." },
      { type: "listen-choose", audio: "Ciao Marta, sono Luca. Stasera non posso venire al cinema perché devo finire un lavoro. Ci sentiamo domani.", question: "Why can't Luca go to the movies?", options: ["He has to finish some work.", "He's ill.", "He has no money.", "He's already seen the film."], correctIndex: 0, explanation: "\"Devo finire un lavoro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow it will be sunny in the South.", answer: "Domani al Sud ci sarà il sole.", altAnswers: ["Domani al Sud ci sarà sole.", "Domani al Sud sarà soleggiato.", "Domani al Sud farà bel tempo."], explanation: "Future of \"esserci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train is arriving at platform 3.", answer: "Il treno è in arrivo al binario 3.", altAnswers: ["Il treno è in arrivo al binario tre.", "Il treno arriva al binario 3."], explanation: "\"In arrivo\" = arriving." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Passengers are advised that the train is late.", answer: "Si avvisano i signori passeggeri che il treno è in ritardo.", altAnswers: ["Si avvisano i passeggeri che il treno è in ritardo."], explanation: "\"Si avvisano\": plural with \"passeggeri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call you back as soon as I'm out of the meeting.", answer: "Ti richiamo appena esco dalla riunione.", altAnswers: ["Ti richiamo non appena esco dalla riunione.", "Ti richiamerò appena uscirò dalla riunione."], explanation: "\"Appena\" + present for a near future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rain is forecast in the North tomorrow.", answer: "Domani sono previste piogge al Nord.", altAnswers: ["Domani è prevista pioggia al Nord.", "Al Nord domani sono previste piogge."], explanation: "\"Previsto\" agrees with \"piogge\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paolo was supposed to come, but his sister came instead.", answer: "Doveva venire Paolo, invece è venuta sua sorella.", altAnswers: ["Doveva venire Paolo, ma invece è venuta sua sorella."], explanation: "\"Doveva\" = was supposed to." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train will leave from platform 6 [instead of] platform 2.", sentence: "Il treno partirà dal binario 6 ___ dal binario 2.", answer: "anziché", altAnswers: ["invece che"], explanation: "\"Anziché\" = instead of." },
      { type: "word-order", prompt: "Put the words in order to say: Customers are informed that the shop is closing.", words: ["Si", "informa", "la", "gentile", "clientela", "che", "il", "negozio", "chiude."], translation: "Customers are informed that the shop is closing.", explanation: "Fixed announcement phrase." },
      { type: "dictation", audio: "Si prega di non lasciare i bagagli incustoditi.", explanation: "Typical station announcement." },
      { type: "speak", text: "Alle otto non ce la faccio, facciamo alle nove davanti al cinema.", prompt: "Reply to a friend: I can't make eight, let's say nine in front of the movie theater.", tip: "\"Ce la faccio\": one breath, ce-la-FAC-cio.", explanation: "Change a plan with \"facciamo\"." },
    ],
  },
  {
    slug: "b1-cils-uno-listening-2",
    level: "IT-B1",
    number: 2,
    title: "CILS UNO: Listening, Part 2 of 2",
    summary: "Practice CILS UNO-style listening with a longer interview: true / false and multiple-choice questions.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Strategy for longer texts",
        body: [
          "Longer recordings (an interview, a radio feature) come with true / false or multiple-choice questions in the order of the text. Read all the statements first and underline the key words. True / false statements often change one detail: a number, a time, \"sempre\" vs \"a volte\", \"tutti\" vs \"alcuni\". If one word in the statement is wrong, the answer is false.",
        ],
        examples: [
          { es: "Ha aperto il ristorante tre anni fa.", en: "She opened the restaurant three years ago." },
          { es: "A volte lavora anche la domenica.", en: "Sometimes she works on Sundays too." },
          { es: "Alcuni clienti vengono da fuori città.", en: "Some customers come from out of town." },
          { es: "All'inizio non è stato facile.", en: "At first it wasn't easy." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The audio says \"a volte lavora la domenica\". True or false: she always works on Sundays.", options: ["false", "true", "not mentioned", "partly true, so true"], correctIndex: 0, explanation: "\"A volte\" (sometimes) ≠ always." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At first it wasn't easy.", answer: "All'inizio non è stato facile.", altAnswers: ["All'inizio non era facile.", "Inizialmente non è stato facile."], explanation: "\"All'inizio\" = at first." },
        ],
      },
      {
        heading: "The interview, part 1",
        body: [
          "A radio presenter interviews Giovanna, a chef from Puglia who has opened a restaurant in Torino.",
          "\"Giovanna, come è nata l'idea?\" \"Mi sono trasferita a Torino otto anni fa per studiare. Mi mancavano i sapori di casa, così ho cominciato a cucinare per gli amici. Tre anni fa ho deciso di aprire un piccolo locale: solo dodici tavoli, cucina pugliese, prodotti che arrivano ogni settimana dalla mia regione.\"",
        ],
        examples: [
          { es: "Mi sono trasferita a Torino otto anni fa.", en: "I moved to Turin eight years ago." },
          { es: "Mi mancavano i sapori di casa.", en: "I missed the flavors of home." },
          { es: "Ho deciso di aprire un piccolo locale.", en: "I decided to open a small restaurant." },
          { es: "I prodotti arrivano ogni settimana dalla Puglia.", en: "The produce arrives every week from Puglia." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Mi sono trasferita a Torino otto anni fa per studiare.", question: "Why did Giovanna move to Turin?", options: ["to study", "to open a restaurant", "for her husband's job", "to work as a chef"], correctIndex: 0, explanation: "\"Per studiare\"." },
          { type: "multiple-choice", question: "True or false: Giovanna opened the restaurant eight years ago.", options: ["false", "true"], correctIndex: 0, explanation: "She moved eight years ago; she opened it three years ago." },
        ],
      },
      {
        heading: "The interview, part 2",
        body: [
          "\"E i torinesi come hanno reagito?\" \"All'inizio erano un po' diffidenti: qui la cucina è molto diversa. Però dopo qualche mese il locale si è riempito, anche grazie al passaparola. Adesso alcuni clienti vengono da fuori città. Il segreto? Pochi piatti, fatti bene. E il lunedì siamo chiusi: anche i cuochi hanno bisogno di riposare!\"",
          "\"Diffidente\" = wary; \"il passaparola\" = word of mouth.",
        ],
        examples: [
          { es: "All'inizio erano un po' diffidenti.", en: "At first they were a bit wary." },
          { es: "Il locale si è riempito grazie al passaparola.", en: "The restaurant filled up thanks to word of mouth." },
          { es: "Pochi piatti, fatti bene.", en: "A few dishes, done well." },
          { es: "Il lunedì siamo chiusi.", en: "We're closed on Mondays." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "True or false: Turin people loved the restaurant from day one.", options: ["false", "true"], correctIndex: 0, explanation: "\"All'inizio erano un po' diffidenti\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant filled up thanks to word of mouth.", answer: "Il locale si è riempito grazie al passaparola.", altAnswers: ["Il ristorante si è riempito grazie al passaparola."], explanation: "\"Riempirsi\" = to fill up." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She cooks food from Puglia.", answer: "Fa cucina pugliese.", altAnswers: ["Cucina piatti pugliesi.", "Fa la cucina pugliese.", "Lei fa cucina pugliese."], explanation: "\"Pugliese\" = from Puglia." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant has only twelve tables.", answer: "Il locale ha solo dodici tavoli.", altAnswers: ["Il ristorante ha solo dodici tavoli.", "Il locale ha soltanto dodici tavoli."], explanation: "\"Solo\" = only." },
      { type: "listen-choose", audio: "Il segreto? Pochi piatti, fatti bene. E il lunedì siamo chiusi.", question: "What is the secret of her success?", options: ["a few dishes, done well", "low prices", "a big menu", "opening every day"], correctIndex: 0, explanation: "\"Pochi piatti, fatti bene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I missed the flavors of home.", answer: "Mi mancavano i sapori di casa.", altAnswers: [], explanation: "\"Mancare\": the flavors are the subject, plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I decided to open a small restaurant.", answer: "Ho deciso di aprire un piccolo locale.", altAnswers: ["Ho deciso di aprire un piccolo ristorante."], explanation: "\"Decidere di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some customers come from out of town.", answer: "Alcuni clienti vengono da fuori città.", altAnswers: ["Alcuni clienti arrivano da fuori città."], explanation: "\"Alcuni\" = some." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cooks need to rest too.", answer: "Anche i cuochi hanno bisogno di riposare.", altAnswers: ["Anche i cuochi hanno bisogno di riposarsi."], explanation: "\"Avere bisogno di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At first they were a bit wary.", answer: "All'inizio erano un po' diffidenti.", altAnswers: ["All'inizio erano un po' sospettosi."], explanation: "Imperfetto for a state." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I moved] to Turin to study. (a woman)", sentence: "___ a Torino per studiare.", answer: "Mi sono trasferita", explanation: "Reflexive with \"essere\": feminine agreement." },
      { type: "word-order", prompt: "Put the words in order to say: The produce arrives every week.", words: ["I", "prodotti", "arrivano", "ogni", "settimana."], translation: "The produce arrives every week.", explanation: "\"Ogni\" + singular noun." },
      { type: "dictation", audio: "Dopo qualche mese il locale si è riempito.", explanation: "\"Qualche\" + singular." },
      { type: "speak", text: "Giovanna si è trasferita a Torino per studiare e tre anni fa ha aperto un ristorante pugliese.", prompt: "Summarize the interview: Giovanna moved to Turin to study and three years ago she opened a restaurant from Puglia.", tip: "\"Pugliese\": the \"gl\" is soft, pu-GLIE-se.", explanation: "A two-fact summary in the passato prossimo." },
    ],
  },
  {
    slug: "b1-cils-uno-reading-1",
    level: "IT-B1",
    number: 3,
    title: "CILS UNO: Reading, Part 1 of 2",
    summary: "Practice a CILS UNO-style reading task: a magazine article with multiple-choice questions.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Strategy",
        body: [
          "Read the title and the questions first, then the whole text once for the general idea. For each question, find the paragraph, then compare the options with the text. Wrong options often repeat words from the text but change the meaning; the right one often says the same thing in different words (\"è aumentato\" in the text, \"ci sono più\" in the option).",
        ],
        examples: [
          { es: "Il numero dei lettori è aumentato.", en: "The number of readers has gone up." },
          { es: "Ci sono più lettori di prima.", en: "There are more readers than before." },
          { es: "Secondo l'articolo, i giovani leggono di più.", en: "According to the article, young people read more." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Text: \"Il numero degli iscritti è raddoppiato.\" Which option means the same?", options: ["Gli iscritti sono il doppio di prima.", "Gli iscritti sono diminuiti.", "Gli iscritti sono due.", "Gli iscritti non sono cambiati."], correctIndex: 0, explanation: "\"Raddoppiare\" = to double." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The number of readers has gone up.", answer: "Il numero dei lettori è aumentato.", altAnswers: ["Il numero di lettori è aumentato.", "Il numero dei lettori è cresciuto."], explanation: "\"Aumentare\" with \"essere\" when intransitive." },
        ],
      },
      {
        heading: "The text",
        body: [
          "\"LA BIBLIOTECA CHE NON DORME MAI. A Bologna, in un quartiere di periferia, una biblioteca comunale ha deciso di restare aperta fino a mezzanotte, sette giorni su sette. L'idea è nata da un gruppo di studenti universitari che non trovavano posti per studiare la sera. Il Comune ha accettato la proposta a una condizione: l'apertura serale doveva essere gestita da volontari.",
          "Il risultato ha sorpreso tutti. In un anno il numero degli iscritti è raddoppiato e la sera la biblioteca non è frequentata solo da studenti: ci sono pensionati che leggono il giornale, genitori che portano i bambini a un laboratorio di lettura, stranieri che seguono corsi gratuiti di italiano. «Non è più solo una biblioteca», dice la direttrice, «è diventata la piazza del quartiere».\"",
        ],
        examples: [
          { es: "La biblioteca resta aperta fino a mezzanotte.", en: "The library stays open until midnight." },
          { es: "L'idea è nata da un gruppo di studenti.", en: "The idea came from a group of students." },
          { es: "I volontari gestiscono l'apertura serale.", en: "Volunteers run the evening opening." },
          { es: "È diventata la piazza del quartiere.", en: "It's become the neighborhood's meeting place." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Who had the idea?", options: ["university students", "the city", "the director", "retirees"], correctIndex: 0, explanation: "\"Un gruppo di studenti universitari\"." },
          { type: "multiple-choice", question: "What condition did the city set?", options: ["Volunteers had to run the evening opening.", "Students had to pay.", "It could open only on weekends.", "Only students could use it."], correctIndex: 0, explanation: "\"Doveva essere gestita da volontari\": a passive with \"dovere\"." },
        ],
      },
      {
        heading: "Questions on the details",
        body: [
          "The second paragraph lists who uses the library in the evening. Check each option against the list: students, retirees reading the paper, parents with children at a reading workshop, foreigners on free Italian courses. \"La piazza del quartiere\" is a metaphor: the place where the neighborhood meets.",
        ],
        examples: [
          { es: "Ci sono pensionati che leggono il giornale.", en: "There are retirees reading the paper." },
          { es: "I genitori portano i bambini a un laboratorio di lettura.", en: "Parents take the children to a reading workshop." },
          { es: "Gli stranieri seguono corsi gratuiti di italiano.", en: "Foreigners take free Italian courses." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which group is NOT mentioned?", options: ["teachers", "retirees", "parents", "foreigners"], correctIndex: 0, explanation: "Teachers are not in the list." },
          { type: "listen-choose", audio: "Non è più solo una biblioteca, è diventata la piazza del quartiere.", question: "What does the director mean?", options: ["It's now a meeting place for the area.", "It has moved to the square.", "It's going to close.", "It's only for students."], correctIndex: 0, explanation: "\"La piazza\" as a meeting place." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In a year the number of members doubled.", answer: "In un anno il numero degli iscritti è raddoppiato.", altAnswers: ["In un anno gli iscritti sono raddoppiati.", "In un anno il numero di iscritti è raddoppiato."], explanation: "\"Raddoppiare\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The library is in a suburb of Bologna.", answer: "La biblioteca è in un quartiere di periferia di Bologna.", altAnswers: ["La biblioteca si trova in un quartiere di periferia di Bologna.", "La biblioteca è nella periferia di Bologna."], explanation: "\"Periferia\" = outskirts." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The library stays open until midnight.", answer: "La biblioteca resta aperta fino a mezzanotte.", altAnswers: ["La biblioteca rimane aperta fino a mezzanotte."], explanation: "\"Restare aperto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The students couldn't find places to study in the evening.", answer: "Gli studenti non trovavano posti per studiare la sera.", altAnswers: ["Gli studenti non trovavano posto per studiare la sera.", "Gli studenti non riuscivano a trovare posti per studiare la sera."], explanation: "Imperfetto for an ongoing situation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city accepted the proposal.", answer: "Il Comune ha accettato la proposta.", altAnswers: ["Il comune ha accettato la proposta."], explanation: "\"Proposta\" = proposal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The result surprised everyone.", answer: "Il risultato ha sorpreso tutti.", altAnswers: [], explanation: "\"Sorprendere\" → \"sorpreso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Foreigners take free Italian courses.", answer: "Gli stranieri seguono corsi gratuiti di italiano.", altAnswers: ["Gli stranieri frequentano corsi gratuiti di italiano.", "Gli stranieri seguono corsi di italiano gratuiti."], explanation: "\"Seguire un corso\" = to take a course." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's open seven days a week.", answer: "È aperta sette giorni su sette.", altAnswers: ["È aperta tutti i giorni.", "È aperto sette giorni su sette."], explanation: "\"Sette giorni su sette\" = every day." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The idea [came from] a group of students.", sentence: "L'idea ___ un gruppo di studenti.", answer: "è nata da", explanation: "\"Nascere da\" = to come from." },
      { type: "word-order", prompt: "Put the words in order to say: Volunteers run the evening opening.", words: ["I", "volontari", "gestiscono", "l'apertura", "serale."], translation: "Volunteers run the evening opening.", explanation: "\"Gestire\" = to run, manage." },
      { type: "dictation", audio: "In un anno il numero degli iscritti è raddoppiato.", explanation: "\"Raddoppiare\" = to double." },
      { type: "speak", text: "A Bologna una biblioteca di periferia resta aperta fino a mezzanotte grazie ai volontari, e ora è la piazza del quartiere.", prompt: "Summarize the article: In Bologna a suburban library stays open until midnight thanks to volunteers, and now it's the neighborhood's meeting place.", tip: "Summaries use the present.", explanation: "One-sentence summary." },
    ],
  },
  {
    slug: "b1-cils-uno-reading-2",
    level: "IT-B1",
    number: 4,
    title: "CILS UNO: Reading, Part 2 of 2",
    summary: "Practice CILS UNO-style tasks: put the parts of a text in order, and match people to the right information.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Reordering a text",
        body: [
          "In a reordering task, the text is cut into pieces. Look for clues: connectors (\"prima\", \"poi\", \"infine\", \"però\", \"quindi\"), pronouns that refer back (\"lo\", \"questa\", \"quel giorno\") and time words. A paragraph that starts with \"Infatti\" or \"Per questo\" can't come first.",
        ],
        examples: [
          { es: "Per questo ho deciso di cambiare lavoro.", en: "That's why I decided to change jobs." },
          { es: "Infine, ricordatevi di portare un documento.", en: "Finally, remember to bring ID." },
          { es: "Quel giorno pioveva a dirotto.", en: "That day it was pouring with rain." },
          { es: "Prima di tutto, scaricate l'app.", en: "First of all, download the app." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence is most likely to open a text?", options: ["Prima di tutto, scaricate l'app.", "Per questo ho deciso di cambiare lavoro.", "Infine, ricordatevi di portare un documento.", "Quel giorno pioveva a dirotto."], correctIndex: 0, explanation: "\"Prima di tutto\" opens; the others refer back." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's why I decided to change jobs.", answer: "Per questo ho deciso di cambiare lavoro.", altAnswers: ["Per questo motivo ho deciso di cambiare lavoro.", "Quindi ho deciso di cambiare lavoro."], explanation: "\"Per questo\" = that's why." },
        ],
      },
      {
        heading: "Task: put the instructions in order",
        body: [
          "Instructions for a bike-sharing service, in the wrong order: (A) \"Quando hai finito, riporta la bici in una stazione e chiudi il lucchetto.\" (B) \"Per prima cosa, scarica l'app e registrati con la carta di credito.\" (C) \"Poi cerca sulla mappa la stazione più vicina e scansiona il codice sulla bici.\" (D) \"Il costo verrà addebitato automaticamente.\"",
          "The right order is B, C, A, D: \"per prima cosa\", \"poi\", \"quando hai finito\", and finally the payment.",
        ],
        examples: [
          { es: "Per prima cosa, scarica l'app.", en: "First, download the app." },
          { es: "Poi scansiona il codice sulla bici.", en: "Then scan the code on the bike." },
          { es: "Quando hai finito, riporta la bici in una stazione.", en: "When you've finished, return the bike to a station." },
          { es: "Il costo verrà addebitato automaticamente.", en: "The cost will be charged automatically." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which part comes right after B?", options: ["C", "A", "D", "B is last"], correctIndex: 0, explanation: "\"Poi\" follows \"per prima cosa\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you've finished, return the bike.", answer: "Quando hai finito, riporta la bici.", altAnswers: ["Quando hai finito, riporta la bicicletta.", "Quando avrai finito, riporta la bici."], explanation: "\"Riportare\" = to bring back." },
        ],
      },
      {
        heading: "Task: matching people and offers",
        body: [
          "Matching tasks give short descriptions of people and short ads. Underline what each person needs (a day, a price, a level) and find the ad that matches all of it, not just one word. Example: Sara works weekdays and wants a beginner yoga class. The match must be weekend + beginners.",
        ],
        examples: [
          { es: "Sara lavora dal lunedì al venerdì.", en: "Sara works Monday to Friday." },
          { es: "Corso di yoga per principianti il sabato mattina.", en: "Beginners' yoga class on Saturday mornings." },
          { es: "Luca cerca un corso serale di fotografia.", en: "Luca is looking for an evening photography course." },
          { es: "Corso avanzato, martedì e giovedì alle 19.", en: "Advanced course, Tuesday and Thursday at 7 p.m." },
        ],
        checkpoint: [
          { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "principianti", right: "beginners" }, { left: "avanzato", right: "advanced" }, { left: "serale", right: "evening" }, { left: "gratuito", right: "free of charge" }], explanation: "Key words in course ads." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca is looking for an evening course.", answer: "Luca cerca un corso serale.", altAnswers: ["Luca sta cercando un corso serale."], explanation: "\"Serale\" = evening (adjective)." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Sara works weekdays and is a beginner. Which ad suits her?", options: ["Yoga per principianti, sabato ore 10.", "Yoga avanzato, lunedì ore 18.", "Yoga per principianti, mercoledì ore 11.", "Pilates avanzato, domenica ore 9."], correctIndex: 0, explanation: "Weekend + beginners." },
      { type: "multiple-choice", question: "Which word shows a paragraph can't come first?", options: ["Infatti", "Prima di tutto", "Innanzitutto", "Per cominciare"], correctIndex: 0, explanation: "\"Infatti\" (in fact) refers back." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, download the app. (to a friend)", answer: "Prima di tutto, scarica l'app.", altAnswers: ["Per prima cosa, scarica l'app.", "Innanzitutto, scarica l'app."], explanation: "\"Prima di tutto\" opens a sequence." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Then scan the code on the bike.", answer: "Poi scansiona il codice sulla bici.", altAnswers: ["Poi scansiona il codice sulla bicicletta."], explanation: "\"Poi\" = then." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The cost will be charged automatically.", answer: "Il costo verrà addebitato automaticamente.", altAnswers: ["Il costo sarà addebitato automaticamente."], explanation: "Future passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sara works Monday to Friday.", answer: "Sara lavora dal lunedì al venerdì.", altAnswers: [], explanation: "\"Dal ... al\" with days." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Finally, remember to bring ID. (to a group)", answer: "Infine, ricordatevi di portare un documento.", altAnswers: ["Infine, ricordatevi di portare un documento d'identità."], explanation: "\"Ricordarsi di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That day it was pouring with rain.", answer: "Quel giorno pioveva a dirotto.", altAnswers: ["Quel giorno pioveva tantissimo."], explanation: "\"Piovere a dirotto\" = to pour." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[First], register with your credit card.", sentence: "___, registrati con la carta di credito.", answer: "Per prima cosa", altAnswers: ["Prima di tutto", "Innanzitutto"], explanation: "Opening connector." },
      { type: "word-order", prompt: "Put the words in order to say: Return the bike to a station.", words: ["Riporta", "la", "bici", "in", "una", "stazione."], translation: "Return the bike to a station.", explanation: "Imperative \"riporta\"." },
      { type: "dictation", audio: "Quando hai finito, riporta la bici e chiudi il lucchetto.", explanation: "\"Lucchetto\" = lock." },
      { type: "speak", text: "Per prima cosa scarica l'app, poi scansiona il codice sulla bici, e quando hai finito riportala in una stazione.", prompt: "Explain bike sharing to a friend: First download the app, then scan the code on the bike, and when you've finished take it back to a station.", tip: "\"Riportala\": pronoun on the imperative.", explanation: "Three steps with connectors." },
    ],
  },
  {
    slug: "b1-cils-uno-grammar-1",
    level: "IT-B1",
    number: 5,
    title: "CILS UNO: Grammar, Part 1 of 2",
    summary: "Practice CILS UNO-style cloze tasks with articles, prepositions and pronouns.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Strategy",
        body: [
          "In a cloze (\"testo con spazi\"), read the whole text first. For each gap, ask: what kind of word is missing? An article? Look at the gender and the first letter of the noun (\"lo studente\", \"l'amica\"). A preposition? Look at the verb before it (\"pensare a\", \"smettere di\"). A pronoun? Find what it refers to and check if it's direct or indirect.",
        ],
        examples: [
          { es: "Ho conosciuto lo zio di Marta.", en: "I met Marta's uncle." },
          { es: "Penso spesso a te.", en: "I often think about you." },
          { es: "Ho smesso di fumare.", en: "I've stopped smoking." },
          { es: "Le ho regalato un libro.", en: "I gave her a book." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I met [Marta's] uncle.", sentence: "Ho conosciuto ___ zio di Marta.", answer: "lo", explanation: "\"Lo\" before \"z\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I gave [her] a book.", sentence: "___ ho regalato un libro.", answer: "Le", explanation: "\"Regalare a\": indirect pronoun." },
        ],
      },
      {
        heading: "Cloze 1: a message",
        body: [
          "\"Cara Anna, ti scrivo ___ (1) Lecce, dove sono arrivata ___ (2) settimana scorsa. Ho trovato una stanza ___ (3) centro, vicino ___ (4) università. La padrona di casa è gentilissima: ___ (5) ha già invitata a cena due volte! ___ (6) aspetto presto, così ti faccio vedere la città.\"",
          "Answers: (1) da, (2) la, (3) in, (4) all', (5) mi, (6) Ti. Notice \"scrivere da\" + city, \"in centro\" with no article, \"vicino a\" + article, and \"mi ha invitata\" (with \"mi\" the participle may agree: \"invitata\" or \"invitato\" are both correct).",
        ],
        examples: [
          { es: "Ti scrivo da Lecce.", en: "I'm writing to you from Lecce." },
          { es: "Sono arrivata la settimana scorsa.", en: "I arrived last week." },
          { es: "Ho trovato una stanza in centro, vicino all'università.", en: "I found a room in the center, near the university." },
          { es: "Mi ha già invitata a cena due volte.", en: "She's already invited me to dinner twice." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A room near [the] university.", sentence: "Una stanza vicino ___ università.", answer: "all'", explanation: "\"Vicino a\" + \"l'\" = \"all'\"." },
          { type: "listen-choose", audio: "Ho trovato una stanza in centro, vicino all'università.", question: "Where's the room?", options: ["in the center, near the university", "near the station", "outside the city", "in the university"], correctIndex: 0, explanation: "\"In centro, vicino all'università\"." },
        ],
      },
      {
        heading: "Cloze 2: pronouns and ne",
        body: [
          "\"Hai comprato il pane?\" \"Sì, ___ (1) ho comprato due chili.\" \"E a Paolo hai detto della festa?\" \"Sì, ___ (2) ho detto ieri.\" \"E le chiavi?\" \"___ (3) ho lasciate sul tavolo.\"",
          "Answers: (1) ne (a quantity; \"ne ho comprati\" agrees with \"chili\", and \"ne ho comprato\" is also correct), (2) gliel' (\"gli\" + \"lo\" = \"glielo\", elided), (3) Le (direct, feminine plural; participle \"lasciate\" agrees).",
        ],
        examples: [
          { es: "Ne ho comprati due chili.", en: "I bought two kilos of it." },
          { es: "Gliel'ho detto ieri.", en: "I told him yesterday." },
          { es: "Le ho lasciate sul tavolo.", en: "I left them on the table." },
          { es: "Me lo presti?", en: "Will you lend it to me?" },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I told [him about it] yesterday.", sentence: "___ ho detto ieri.", answer: "Gliel'", altAnswers: ["Glielo"], explanation: "\"Gli\" + \"lo\" = \"glielo\", elided before \"ho\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I left them on the table. (the keys)", answer: "Le ho lasciate sul tavolo.", altAnswers: [], explanation: "\"Le\" + agreement \"lasciate\"." },
        ],
      },
    ],
    exercises: [
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm writing to you [from] Lecce.", sentence: "Ti scrivo ___ Lecce.", answer: "da", explanation: "\"Da\" = from a place." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I live [in the] center.", sentence: "Abito ___ centro.", answer: "in", explanation: "\"In centro\": no article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've stopped [smoking].", sentence: "Ho smesso ___ fumare.", answer: "di", explanation: "\"Smettere di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm going [to the] dentist's.", sentence: "Vado ___ dentista.", answer: "dal", explanation: "\"Da\" + person = to someone's place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought two kilos of it.", answer: "Ne ho comprati due chili.", altAnswers: ["Ne ho comprato due chili."], explanation: "\"Ne\" for quantity; agreement optional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you lend it to me? (the book, to a friend)", answer: "Me lo presti?", altAnswers: [], explanation: "\"Mi\" + \"lo\" = \"me lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's already invited me to dinner twice.", answer: "Mi ha già invitata a cena due volte.", altAnswers: ["Mi ha già invitato a cena due volte."], explanation: "Agreement with \"mi\" optional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I often think about you. (to a friend)", answer: "Penso spesso a te.", altAnswers: ["Ti penso spesso."], explanation: "\"Pensare a\" + stressed pronoun." },
      { type: "word-order", prompt: "Put the words in order to say: I told him yesterday.", words: ["Gliel'ho", "detto", "ieri."], translation: "I told him yesterday.", explanation: "Combined pronoun." },
      { type: "multiple-choice", question: "\"Ho visto ___ amici di Luca.\"", options: ["gli", "i", "le", "lo"], correctIndex: 0, explanation: "\"Gli\" before a vowel (masculine plural)." },
      { type: "dictation", audio: "Ho trovato una stanza in centro, vicino all'università.", explanation: "Prepositions: \"in\", \"vicino a\"." },
      { type: "speak", text: "Ti scrivo da Lecce, dove sono arrivata la settimana scorsa. Ho trovato una stanza in centro.", prompt: "Read the start of the message aloud: I'm writing to you from Lecce, where I arrived last week. I found a room in the center.", tip: "\"Lecce\": LET-che.", explanation: "Prepositions and articles in context." },
    ],
  },
  {
    slug: "b1-cils-uno-grammar-2",
    level: "IT-B1",
    number: 6,
    title: "CILS UNO: Grammar, Part 2 of 2",
    summary: "Practice CILS UNO-style cloze tasks with verbs: choose the right tense and mood.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Strategy for verb gaps",
        body: [
          "For each verb gap, ask three questions. Who is the subject? When does it happen (time words like \"ieri\", \"da tre anni\", \"quando ero piccolo\", \"domani\")? Is there a trigger for the subjunctive (\"penso che\", \"è importante che\", \"benché\") or the conditional (\"vorrei\", a polite request, a future in the past)?",
        ],
        examples: [
          { es: "Quando ero piccolo, andavo al mare ogni estate.", en: "When I was little, I went to the beach every summer." },
          { es: "Ieri sono andata al mare.", en: "Yesterday I went to the beach." },
          { es: "Penso che sia una buona idea.", en: "I think it's a good idea." },
          { es: "Ha detto che sarebbe arrivato tardi.", en: "He said he'd arrive late." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When I was little, I [used to go] to the beach.", sentence: "Quando ero piccolo, ___ al mare.", answer: "andavo", explanation: "Habit in the past: imperfetto." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think it [is] a good idea.", sentence: "Penso che ___ una buona idea.", answer: "sia", explanation: "\"Penso che\" + subjunctive." },
        ],
      },
      {
        heading: "Cloze 1: a story",
        body: [
          "\"L'anno scorso ___ (1, decidere) di fare il Cammino di Santiago. Il primo giorno ___ (2, piovere) e io non ___ (3, avere) una giacca impermeabile. Per fortuna un signore che ___ (4, camminare) con me mi ha prestato la sua. Quando sono arrivato a destinazione, ___ (5, già perdere) tre chili!\"",
          "Answers: (1) ho deciso, (2) pioveva, (3) avevo, (4) camminava, (5) avevo già perso. Completed actions: passato prossimo; background: imperfetto; before another past event: trapassato.",
        ],
        examples: [
          { es: "L'anno scorso ho deciso di fare il Cammino.", en: "Last year I decided to do the Camino." },
          { es: "Il primo giorno pioveva.", en: "On the first day it was raining." },
          { es: "Un signore mi ha prestato la sua giacca.", en: "A man lent me his jacket." },
          { es: "Avevo già perso tre chili.", en: "I'd already lost three kilos." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When I arrived, I [had already lost] three kilos.", sentence: "Quando sono arrivato, ___ tre chili.", answer: "avevo già perso", explanation: "Trapassato: before arriving." },
          { type: "listen-choose", audio: "Il primo giorno pioveva e io non avevo una giacca impermeabile.", question: "What was the problem?", options: ["It was raining and he had no waterproof jacket.", "He got lost.", "He was ill.", "He lost his bag."], correctIndex: 0, explanation: "\"Non avevo una giacca impermeabile\"." },
        ],
      },
      {
        heading: "Cloze 2: an email",
        body: [
          "\"Gentile signora Neri, ___ (1, volere) chiederLe un'informazione. È possibile che il corso ___ (2, cominciare) a ottobre invece che a settembre? Se ___ (3, esserci) ancora posti, ___ (4, iscriversi) volentieri. Spero che il mio messaggio non Le ___ (5, arrivare) troppo tardi.\"",
          "Answers: (1) vorrei (polite conditional), (2) cominci (\"è possibile che\" + subjunctive), (3) ci sono (real condition: \"se\" + present), (4) mi iscrivo or mi iscriverò, (5) arrivi.",
        ],
        examples: [
          { es: "Vorrei chiederLe un'informazione.", en: "I'd like to ask you for some information." },
          { es: "È possibile che il corso cominci a ottobre?", en: "Is it possible that the course starts in October?" },
          { es: "Se ci sono ancora posti, mi iscrivo volentieri.", en: "If there are still places, I'll gladly sign up." },
          { es: "Spero che il messaggio non Le arrivi tardi.", en: "I hope the message doesn't reach you too late." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Is it possible that the course [starts] in October?", sentence: "È possibile che il corso ___ a ottobre?", answer: "cominci", altAnswers: ["inizi"], explanation: "\"È possibile che\" + subjunctive." },
          { type: "multiple-choice", question: "\"Se ___ ancora posti, mi iscrivo.\"", options: ["ci sono", "ci siano", "ci sarebbero", "ci erano"], correctIndex: 0, explanation: "Real condition: \"se\" + present indicative." },
        ],
      },
    ],
    exercises: [
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Last year I [decided] to do the Camino.", sentence: "L'anno scorso ___ di fare il Cammino.", answer: "ho deciso", explanation: "Completed action: passato prossimo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A man who [was walking] with me lent me his jacket.", sentence: "Un signore che ___ con me mi ha prestato la sua giacca.", answer: "camminava", explanation: "Background: imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like] to ask you for some information. (formal)", sentence: "___ chiederLe un'informazione.", answer: "Vorrei", explanation: "Polite conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope the message [reaches] you in time.", sentence: "Spero che il messaggio Le ___ in tempo.", answer: "arrivi", explanation: "\"Sperare che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the first day it was raining.", answer: "Il primo giorno pioveva.", altAnswers: [], explanation: "Weather as background: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there are still places, I'll gladly sign up.", answer: "Se ci sono ancora posti, mi iscrivo volentieri.", altAnswers: ["Se ci sono ancora posti, mi iscriverò volentieri."], explanation: "Real condition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he would arrive late.", answer: "Ha detto che sarebbe arrivato tardi.", altAnswers: ["Ha detto che sarebbe arrivato in ritardo."], explanation: "Future in the past: conditional past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although it was raining, we went out.", answer: "Anche se pioveva, siamo usciti.", altAnswers: ["Anche se pioveva, siamo uscite.", "Benché piovesse, siamo usciti."], explanation: "\"Anche se\" + indicative." },
      { type: "word-order", prompt: "Put the words in order to say: When I arrived, the train had already left.", words: ["Quando", "sono", "arrivato,", "il", "treno", "era", "già", "partito."], translation: "When I arrived, the train had already left.", explanation: "Passato prossimo + trapassato." },
      { type: "multiple-choice", question: "\"Da tre anni ___ a Milano.\" (I've been living in Milan for three years)", options: ["abito", "ho abitato", "abitavo", "abiterò"], correctIndex: 0, explanation: "\"Da\" + present for something still going on." },
      { type: "dictation", audio: "Quando sono arrivato, avevo già perso tre chili.", explanation: "Trapassato." },
      { type: "speak", text: "L'anno scorso ho fatto il Cammino di Santiago: il primo giorno pioveva, ma un signore mi ha prestato la sua giacca.", prompt: "Tell the story: Last year I did the Camino de Santiago: on the first day it was raining, but a man lent me his jacket.", tip: "Imperfetto for the scene, passato prossimo for the events.", explanation: "The two past tenses together." },
    ],
  },
  {
    slug: "b1-cils-uno-writing",
    level: "IT-B1",
    number: 7,
    title: "CILS UNO: Writing",
    summary: "Plan and write the two CILS UNO-style texts: a 100-120 word text and a 50-80 word message, with model answers.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Two texts, two registers",
        body: [
          "The writing part asks for two texts: a longer one (about 100-120 words: describe an experience, give your opinion, tell a story) and a short message (about 50-80 words: an email or note to invite, apologize, ask, thank). Count your words: too short loses marks, and so does going far over.",
          "Plan for one minute: who am I writing to (\"tu\" or \"Lei\")? What are the three points? Which connectors and tenses will I use? Then write, and leave two minutes to check agreement, articles and accents.",
        ],
        examples: [
          { es: "Ciao Marco, ti scrivo per invitarti alla mia festa.", en: "Hi Marco, I'm writing to invite you to my party." },
          { es: "Gentile signora Rossi, Le scrivo per chiederLe un'informazione.", en: "Dear Mrs. Rossi, I'm writing to ask you for some information." },
          { es: "Prima di tutto, poi, alla fine.", en: "First of all, then, in the end." },
          { es: "Un abbraccio / Cordiali saluti.", en: "A hug / Kind regards." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dear Mrs. Rossi, I'm writing to ask you for some information.", answer: "Gentile signora Rossi, Le scrivo per chiederLe un'informazione.", altAnswers: ["Gentile signora Rossi, Le scrivo per chiederle un'informazione.", "Gentile signora Rossi, Le scrivo per chiedere un'informazione."], explanation: "Formal register: \"Gentile\", \"Le\"." },
          { type: "multiple-choice", question: "A note to a roommate: which closing fits?", options: ["Un abbraccio!", "Distinti saluti.", "In attesa di un Suo riscontro.", "Con osservanza."], correctIndex: 0, explanation: "Informal closing." },
        ],
      },
      {
        heading: "Model: the longer text",
        body: [
          "Task: \"Racconta un viaggio che ti è piaciuto molto.\" Model (110 words): \"Due anni fa sono andata in Sicilia con la mia migliore amica. Avevamo poco tempo, quindi abbiamo scelto la parte orientale: Catania, Siracusa e Taormina. A Catania abbiamo mangiato gli arancini più buoni della mia vita, mentre a Siracusa abbiamo fatto il bagno in un mare incredibile. Il momento più bello, però, è stato la salita sull'Etna: faceva freddo, c'era vento, ma il panorama era spettacolare. Mi è piaciuta molto anche la gente: tutti erano gentili e pronti ad aiutarci. Se potrò, ci tornerò l'anno prossimo, perché vorrei vedere anche Palermo. Secondo me la Sicilia è un posto che bisogna visitare almeno una volta.\"",
        ],
        examples: [
          { es: "Due anni fa sono andata in Sicilia.", en: "Two years ago I went to Sicily." },
          { es: "Il momento più bello è stato la salita sull'Etna.", en: "The best moment was the climb up Etna." },
          { es: "Faceva freddo, ma il panorama era spettacolare.", en: "It was cold, but the view was spectacular." },
          { es: "Se potrò, ci tornerò l'anno prossimo.", en: "If I can, I'll go back next year." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Why does the model use \"faceva\" and \"era\" for the Etna climb?", options: ["They describe the scene: imperfetto.", "They are completed actions.", "They are future.", "It's a mistake."], correctIndex: 0, explanation: "Description and background: imperfetto." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I can, I'll go back next year.", answer: "Se potrò, ci tornerò l'anno prossimo.", altAnswers: ["Se posso, ci torno l'anno prossimo.", "Se potrò, tornerò l'anno prossimo."], explanation: "\"Se\" + future, future." },
        ],
      },
      {
        heading: "Model: the short message",
        body: [
          "Task: \"Scrivi un messaggio a un collega per dire che domani non puoi andare alla riunione.\" Model (60 words): \"Ciao Stefano, purtroppo domani non potrò venire alla riunione delle dieci perché ho una visita medica che non posso spostare. Mi dispiace molto! Potresti prendere appunti e mandarmeli? Se serve, posso chiamarti nel pomeriggio per parlare dei punti più importanti. Grazie mille e scusa ancora per il disturbo. A presto, Laura\"",
          "Three moves: the news + reason, a request, an offer. Then thanks and a closing.",
        ],
        examples: [
          { es: "Purtroppo domani non potrò venire alla riunione.", en: "Unfortunately I won't be able to come to the meeting tomorrow." },
          { es: "Potresti prendere appunti e mandarmeli?", en: "Could you take notes and send them to me?" },
          { es: "Se serve, posso chiamarti nel pomeriggio.", en: "If needed, I can call you in the afternoon." },
          { es: "Scusa ancora per il disturbo.", en: "Sorry again for the trouble." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you take notes and send them to me? (to a colleague you know)", answer: "Potresti prendere appunti e mandarmeli?", altAnswers: ["Potresti prendere gli appunti e mandarmeli?", "Puoi prendere appunti e mandarmeli?"], explanation: "\"Mandarmeli\" = send them to me." },
          { type: "listen-choose", audio: "Purtroppo domani non potrò venire alla riunione perché ho una visita medica.", question: "Why can't Laura come?", options: ["She has a medical appointment.", "She's on vacation.", "She has another meeting.", "She's ill."], correctIndex: 0, explanation: "\"Una visita medica\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Hi Marco, I'm writing to invite you to my party.", answer: "Ciao Marco, ti scrivo per invitarti alla mia festa.", altAnswers: [], explanation: "\"Per\" + infinitive + pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unfortunately I won't be able to come tomorrow.", answer: "Purtroppo domani non potrò venire.", altAnswers: ["Purtroppo non potrò venire domani.", "Purtroppo domani non posso venire."], explanation: "Future of \"potere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two years ago I went to Sicily with my best friend.", answer: "Due anni fa sono andato in Sicilia con il mio migliore amico.", altAnswers: ["Due anni fa sono andata in Sicilia con la mia migliore amica.", "Due anni fa sono andato in Sicilia col mio migliore amico."], explanation: "\"Fa\" = ago." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The best moment was the climb up Etna.", answer: "Il momento più bello è stato la salita sull'Etna.", altAnswers: [], explanation: "Superlative: \"il più bello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry again for the trouble.", answer: "Scusa ancora per il disturbo.", altAnswers: ["Scusami ancora per il disturbo."], explanation: "Informal \"scusa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion it's a place you have to visit at least once.", answer: "Secondo me è un posto che bisogna visitare almeno una volta.", altAnswers: ["Secondo me è un posto da visitare almeno una volta."], explanation: "\"Secondo me\" + indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everyone was kind and ready [to help us].", sentence: "Tutti erano gentili e pronti ___.", answer: "ad aiutarci", altAnswers: ["a aiutarci"], explanation: "\"Pronto a\" + infinitive; \"ad\" before a vowel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If needed], I can call you.", sentence: "___, posso chiamarti.", answer: "Se serve", altAnswers: ["Se necessario", "Se vuoi"], explanation: "\"Se serve\" = if needed." },
      { type: "word-order", prompt: "Put the words in order to say: It was cold, but the view was spectacular.", words: ["Faceva", "freddo,", "ma", "il", "panorama", "era", "spettacolare."], translation: "It was cold, but the view was spectacular.", explanation: "Imperfetto for description." },
      { type: "multiple-choice", question: "The short message should have about ...", options: ["50-80 words", "10-20 words", "200 words", "no limit"], correctIndex: 0, explanation: "Check the word count in the task." },
      { type: "dictation", audio: "Mi è piaciuta molto anche la gente.", explanation: "\"Piaciuta\" agrees with \"la gente\"." },
      { type: "speak", text: "Ciao Stefano, purtroppo domani non potrò venire alla riunione. Potresti prendere appunti e mandarmeli? Grazie mille!", prompt: "Leave a voice message for a colleague: Hi Stefano, unfortunately I won't be able to come to the meeting tomorrow. Could you take notes and send them to me? Thanks a lot!", tip: "\"Mandarmeli\": stress on DAR, man-DAR-me-li.", explanation: "News, request, thanks." },
    ],
  },
  {
    slug: "b1-drill-b1-grammar-1",
    level: "IT-B1",
    number: 8,
    title: "Drill: B1 Grammar, Part 1 of 2",
    summary: "High-repetition translation across Intermediate Units 1-17: combined pronouns, pronominal verbs, trapassato, subjunctive, past conditional, future perfect, if-clauses, gerund.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Mixed review",
        body: [
          "Quick checklist: combined pronouns (\"me lo\", \"glielo\"), pronominal verbs (\"me ne vado\", \"ce la faccio\"), trapassato (\"era già partito\"), subjunctive after opinions, wishes, impersonal phrases and conjunctions, past conditional (\"avrei voluto\"), future perfect (\"quando avrò finito\"), \"se\" + present, the gerund.",
        ],
        examples: [
          { es: "Te lo presto volentieri.", en: "I'll gladly lend it to you." },
          { es: "Quando sono arrivato, era già partita.", en: "When I arrived, she'd already left." },
          { es: "Avrei voluto chiamarti.", en: "I would have liked to call you." },
          { es: "Sbagliando si impara.", en: "You learn by making mistakes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll gladly lend it to you. (the book, to a friend)", answer: "Te lo presto volentieri.", altAnswers: [], explanation: "\"Ti\" + \"lo\" = \"te lo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I would have liked to call you. (to a friend)", answer: "Avrei voluto chiamarti.", altAnswers: ["Avrei voluto telefonarti.", "Ti avrei voluto chiamare."], explanation: "Past conditional." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I gave it to her yesterday. (the present)", answer: "Gliel'ho dato ieri.", altAnswers: ["Glielo ho dato ieri."], explanation: "\"Le\" + \"lo\" = \"glielo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm leaving, it's late.", answer: "Me ne vado, è tardi.", altAnswers: ["Io me ne vado, è tardi."], explanation: "\"Andarsene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We made it!", answer: "Ce l'abbiamo fatta!", altAnswers: [], explanation: "\"Farcela\" in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I arrived, the film had already started.", answer: "Quando sono arrivato, il film era già cominciato.", altAnswers: ["Quando sono arrivata, il film era già cominciato.", "Quando sono arrivato, il film era già iniziato.", "Quando sono arrivata, il film era già iniziato."], explanation: "Trapassato with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think he knows.", answer: "Non credo che lo sappia.", altAnswers: ["Non penso che lo sappia.", "Non credo che sappia."], explanation: "Subjunctive of \"sapere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you're well. (to a friend)", answer: "Spero che tu stia bene.", altAnswers: [], explanation: "\"Sperare che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that you rest. (to a friend)", answer: "È importante che tu ti riposi.", altAnswers: ["È importante che tu riposi."], explanation: "\"È importante che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call you before you leave. (to a friend)", answer: "Ti chiamo prima che tu parta.", altAnswers: ["Ti chiamerò prima che tu parta."], explanation: "\"Prima che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he's already left.", answer: "Penso che sia già partito.", altAnswers: ["Credo che sia già partito."], explanation: "Past subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should have told me! (to a friend)", answer: "Avresti dovuto dirmelo!", altAnswers: ["Me lo avresti dovuto dire!", "Dovevi dirmelo!"], explanation: "Past conditional of \"dovere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I've finished, I'll call you. (to a friend)", answer: "Quando avrò finito, ti chiamerò.", altAnswers: ["Quando avrò finito ti chiamo.", "Appena avrò finito, ti chiamerò."], explanation: "Future perfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He'll have missed the train.", answer: "Avrà perso il treno.", altAnswers: [], explanation: "Future perfect for probability." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you have time, call me. (to a friend)", answer: "Se hai tempo, chiamami.", altAnswers: ["Se hai tempo chiamami."], explanation: "\"Se\" + present, imperative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I learn [by reading].", sentence: "Imparo ___.", answer: "leggendo", explanation: "Gerund for means." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Although] it's late, I'll stay.", sentence: "___ sia tardi, resto.", answer: "Benché", altAnswers: ["Sebbene"], explanation: "\"Benché\" + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: Can you lend it to me tomorrow? (to a friend)", words: ["Me", "lo", "puoi", "prestare", "domani?"], translation: "Can you lend it to me tomorrow?", explanation: "Combined pronoun before the modal." },
      { type: "multiple-choice", question: "\"La Divina Commedia ___ scritta da Dante.\" (passato remoto, for reading)", options: ["fu", "fece", "ebbe", "disse"], correctIndex: 0, explanation: "\"Fu\" = \"è stata\"." },
      { type: "dictation", audio: "Quando sono arrivato, il treno era già partito.", explanation: "Trapassato." },
      { type: "speak", text: "Avrei voluto venire, ma non ce l'ho fatta. Te lo prometto: la prossima volta ci sarò.", prompt: "Apologize to a friend: I would have liked to come, but I didn't make it. I promise you: next time I'll be there.", tip: "\"Ce l'ho fatta\": four short words, one rhythm.", explanation: "Past conditional, \"farcela\", combined pronoun." },
    ],
  },
  {
    slug: "b1-drill-b1-grammar-2",
    level: "IT-B1",
    number: 9,
    title: "Drill: B1 Grammar, Part 2 of 2",
    summary: "High-repetition translation across Intermediate Units 18-32: infinitives with prepositions, fare + infinitive, passive, si, relatives, connectors, reciprocal verbs, reported speech.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Mixed review",
        body: [
          "Quick checklist: verb + \"di / a\" + infinitive, \"fare\" + infinitive, the passive (\"è stato costruito\", \"va pagato\"), \"si\" (\"si mangia bene\", \"ci si diverte\"), relatives (\"il cui\", \"quello che\"), connectors (\"infatti\", \"comunque\", \"anzi\"), reciprocal verbs, proposals in the conditional, reported speech.",
        ],
        examples: [
          { es: "Ho deciso di partire.", en: "I've decided to leave." },
          { es: "Mi sono fatto tagliare i capelli.", en: "I've had my hair cut." },
          { es: "Il ponte è stato costruito nel 1950.", en: "The bridge was built in 1950." },
          { es: "Ha detto che sarebbe venuto.", en: "He said he would come." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had my hair cut.", answer: "Mi sono fatto tagliare i capelli.", altAnswers: ["Mi sono fatta tagliare i capelli."], explanation: "\"Farsi\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bridge was built in 1950.", answer: "Il ponte è stato costruito nel 1950.", altAnswers: ["Il ponte fu costruito nel 1950.", "Il ponte venne costruito nel 1950."], explanation: "Passive with \"essere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've started to study Chinese.", answer: "Ho cominciato a studiare il cinese.", altAnswers: ["Ho iniziato a studiare il cinese.", "Ho cominciato a studiare cinese."], explanation: "\"Cominciare a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm trying to understand.", answer: "Cerco di capire.", altAnswers: ["Sto cercando di capire."], explanation: "\"Cercare di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm having the car repaired.", answer: "Faccio riparare la macchina.", altAnswers: ["Sto facendo riparare la macchina.", "Faccio aggiustare la macchina."], explanation: "\"Fare\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me speak! (to a friend)", answer: "Lasciami parlare!", altAnswers: ["Fammi parlare!"], explanation: "\"Lasciare\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The ticket must be validated.", answer: "Il biglietto va convalidato.", altAnswers: ["Il biglietto deve essere convalidato."], explanation: "\"Andare\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here you eat well.", answer: "Qui si mangia bene.", altAnswers: [], explanation: "Impersonal \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On vacation you have fun.", answer: "In vacanza ci si diverte.", altAnswers: [], explanation: "\"Ci si\" with reflexive verbs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The writer whose book I read is coming tomorrow.", answer: "Lo scrittore il cui libro ho letto viene domani.", altAnswers: ["Lo scrittore di cui ho letto il libro viene domani."], explanation: "\"Il cui\" = whose." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What you say is true.", answer: "Quello che dici è vero.", altAnswers: ["Ciò che dici è vero."], explanation: "\"Quello che\" = what." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It wasn't easy, in fact it was very hard.", answer: "Non è stato facile, anzi è stato difficilissimo.", altAnswers: ["Non è stato facile, anzi è stato molto difficile."], explanation: "\"Anzi\" = on the contrary, actually." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We met in Rome.", answer: "Ci siamo conosciuti a Roma.", altAnswers: ["Ci siamo conosciute a Roma."], explanation: "Reciprocal past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "More trees ought to be planted.", answer: "Bisognerebbe piantare più alberi.", altAnswers: ["Si dovrebbero piantare più alberi."], explanation: "Conditional proposal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked me if I was hungry.", answer: "Mi ha chiesto se avevo fame.", altAnswers: [], explanation: "Reported question." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He told me [to wait].", sentence: "Mi ha detto ___.", answer: "di aspettare", explanation: "Reported command." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Something [to drink]?", sentence: "Qualcosa ___?", answer: "da bere", explanation: "\"Da\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: Houses are sold here.", words: ["Qui", "si", "vendono", "case."], translation: "Houses are sold here.", explanation: "Passive \"si\" + plural." },
      { type: "multiple-choice", question: "\"Non è la prima volta: ___, è la terza.\"", options: ["anzi", "quindi", "infatti", "dunque"], correctIndex: 0, explanation: "\"Anzi\" corrects and goes further." },
      { type: "dictation", audio: "Il biglietto va convalidato prima di salire.", explanation: "\"Va\" + participle." },
      { type: "speak", text: "Mi ha detto che sarebbe venuto, ma non si è visto. Quello che mi dà fastidio è che non mi ha chiamato.", prompt: "Complain to a friend: He said he would come, but he didn't show up. What bothers me is that he didn't call me.", tip: "\"Non si è visto\" = he didn't show up.", explanation: "Reported speech + \"quello che\"." },
    ],
  },
  {
    slug: "b1-cils-uno-speaking",
    level: "IT-B1",
    number: 10,
    title: "CILS UNO: Speaking",
    summary: "Prepare the CILS UNO-style speaking tasks: a short monologue on a topic and a role play, with phrases to plan, fill pauses and keep going.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Monologue: talk for two minutes",
        body: [
          "In the speaking part you talk with an examiner: a short conversation to start, then you describe or talk about a topic, and you play a role in a situation. For the monologue, use a simple plan: introduce the topic, give two examples from your life, say what you think, conclude.",
          "Phrases that buy time: \"Allora ...\", \"Dunque ...\", \"Vediamo ...\", \"Come posso dire ...\". Phrases that structure: \"Prima di tutto\", \"Per esempio\", \"Secondo me\", \"Insomma\".",
        ],
        examples: [
          { es: "Allora, vorrei parlare del mio quartiere.", en: "So, I'd like to talk about my neighborhood." },
          { es: "Per esempio, quando ero piccola, giocavo sempre in piazza.", en: "For example, when I was little, I always played in the square." },
          { es: "Secondo me è importante che ci siano più spazi verdi.", en: "In my opinion it's important that there are more green spaces." },
          { es: "Insomma, è un posto dove si vive bene.", en: "All in all, it's a place where people live well." },
        ],
        checkpoint: [
          { type: "speak", text: "Allora, vorrei parlare del mio quartiere. Prima di tutto, è un posto tranquillo, con un bel parco.", prompt: "Start a monologue: So, I'd like to talk about my neighborhood. First of all, it's a quiet place, with a nice park.", tip: "Pause after \"Allora\": it sounds natural.", explanation: "Introduce, then the first point." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "All in all, it's a place where people live well.", answer: "Insomma, è un posto dove si vive bene.", altAnswers: ["Insomma, è un posto in cui si vive bene."], explanation: "\"Insomma\" concludes; impersonal \"si\"." },
        ],
      },
      {
        heading: "Role play: a situation",
        body: [
          "Typical role plays: you return a faulty item, book a table, complain to a neighbor, ask for information at a station. Use \"Lei\" with the examiner if the role is formal. Structure: greet, explain the problem, ask for a solution, accept or negotiate, thank.",
          "Example: you bought a jacket and the zipper broke. \"Buongiorno, ho comprato questa giacca la settimana scorsa, ma la cerniera si è rotta subito. Vorrei sapere se è possibile cambiarla o avere un rimborso.\"",
        ],
        examples: [
          { es: "Ho comprato questa giacca la settimana scorsa.", en: "I bought this jacket last week." },
          { es: "La cerniera si è rotta subito.", en: "The zipper broke right away." },
          { es: "Vorrei sapere se è possibile cambiarla.", en: "I'd like to know if it's possible to exchange it." },
          { es: "Va bene, allora prendo un buono.", en: "OK, then I'll take a voucher." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to know if it's possible to exchange it. (the jacket)", answer: "Vorrei sapere se è possibile cambiarla.", altAnswers: ["Vorrei sapere se posso cambiarla.", "Vorrei sapere se si può cambiare."], explanation: "\"Cambiarla\": pronoun on the infinitive." },
          { type: "listen-choose", audio: "Mi dispiace, non facciamo rimborsi, ma possiamo darLe un buono.", question: "What does the shop offer?", options: ["a voucher", "a refund", "a new jacket", "nothing"], correctIndex: 0, explanation: "\"Un buono\" = a voucher." },
        ],
      },
      {
        heading: "Keeping it going",
        body: [
          "If you don't understand: \"Scusi, può ripetere?\", \"Cosa intende con ...?\" (what do you mean by ...?). If you can't find a word, describe it: \"È una cosa che si usa per ...\" (it's a thing you use for ...). Examiners reward communication: keep talking, correct yourself if you notice a mistake (\"anzi, volevo dire ...\").",
        ],
        examples: [
          { es: "Scusi, può ripetere la domanda?", en: "Sorry, could you repeat the question?" },
          { es: "Cosa intende con \"servizi\"?", en: "What do you mean by \"services\"?" },
          { es: "È una cosa che si usa per aprire le bottiglie.", en: "It's a thing you use to open bottles." },
          { es: "Sono andato, anzi, volevo dire, sono andata a Roma.", en: "I went (m.), sorry, I mean, I went (f.) to Rome." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry, could you repeat the question? (formal)", answer: "Scusi, può ripetere la domanda?", altAnswers: ["Scusi, potrebbe ripetere la domanda?", "Mi scusi, può ripetere la domanda?"], explanation: "Formal \"può\" / \"potrebbe\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a thing you use to open bottles.", answer: "È una cosa che si usa per aprire le bottiglie.", altAnswers: ["È un oggetto che si usa per aprire le bottiglie."], explanation: "Describe when you lack the word." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So, I'd like to talk about my job.", answer: "Allora, vorrei parlare del mio lavoro.", altAnswers: ["Dunque, vorrei parlare del mio lavoro."], explanation: "\"Parlare di\" + article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For example, when I was little, I lived in the country.", answer: "Per esempio, quando ero piccolo, abitavo in campagna.", altAnswers: ["Per esempio, quando ero piccola, abitavo in campagna.", "Ad esempio, quando ero piccolo, vivevo in campagna."], explanation: "Imperfetto for the past background." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The zipper broke right away.", answer: "La cerniera si è rotta subito.", altAnswers: ["La zip si è rotta subito."], explanation: "\"Rompersi\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you mean by that? (formal)", answer: "Cosa intende con questo?", altAnswers: ["Che cosa intende con questo?", "Cosa intende dire?"], explanation: "\"Intendere\" = to mean." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "OK, then I'll take a voucher.", answer: "Va bene, allora prendo un buono.", altAnswers: ["D'accordo, allora prendo un buono."], explanation: "Accept a solution." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion it's important that there are more green spaces.", answer: "Secondo me è importante che ci siano più spazi verdi.", altAnswers: ["Penso che sia importante che ci siano più spazi verdi."], explanation: "\"È importante che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let's see]... I'd say yes.", sentence: "___... direi di sì.", answer: "Vediamo", explanation: "A filler that buys time." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[All in all], I'm happy here.", sentence: "___, qui sto bene.", answer: "Insomma", altAnswers: ["In conclusione"], explanation: "\"Insomma\" sums up." },
      { type: "word-order", prompt: "Put the words in order to say: Could you repeat, please?", words: ["Può", "ripetere,", "per", "favore?"], translation: "Could you repeat, please?", explanation: "Formal \"può\"." },
      { type: "multiple-choice", question: "You can't remember the word \"cavatappi\" (corkscrew). What do you say?", options: ["È una cosa che si usa per aprire le bottiglie di vino.", "Non lo so, basta.", "Corkscrew.", "Niente."], correctIndex: 0, explanation: "Describe it and keep going." },
      { type: "dictation", audio: "Scusi, può ripetere la domanda?", explanation: "A phrase every candidate needs." },
      { type: "speak", text: "Buongiorno, ho comprato questa giacca la settimana scorsa, ma la cerniera si è rotta subito. Vorrei sapere se è possibile cambiarla.", prompt: "Role play in a shop (formal): Good morning, I bought this jacket last week, but the zipper broke right away. I'd like to know if it's possible to exchange it.", tip: "Calm, polite tone: problem first, then the request.", explanation: "Greet, explain, ask." },
    ],
  },
];

export const IT_B1_U33_WRITING: WriteExercise = {
  type: "write",
  prompt: "CILS UNO-style task: \"Racconta un'esperienza importante della tua vita (un viaggio, un trasloco, un nuovo lavoro). Che cosa è successo? Come ti sei sentito / sentita? Che cosa hai imparato?\" Write 100-120 words.",
  minWords: 95,
  maxWords: 130,
  rubric: [
    "Answers all three questions in the task (what happened, how you felt, what you learned)",
    "Uses the passato prossimo for events and the imperfetto for background and feelings",
    "Uses at least one trapassato or a sequence connector (prima, poi, dopo che, alla fine)",
    "Uses at least one subjunctive after an opinion or feeling (penso che, mi fa piacere che) or a conditional",
    "Stays within 100-120 words, with correct agreement, articles and accents",
  ],
  modelAnswer: "Tre anni fa ho lasciato il mio paese e mi sono trasferito a Bologna per lavoro. All'inizio è stato difficile: non conoscevo nessuno, parlavo poco italiano e mi sentivo spesso solo. Prima di partire avevo studiato un po' la lingua, ma la gente parlava velocissimo! Dopo qualche mese, però, le cose sono cambiate. Mi sono iscritto a un corso serale, ho conosciuto dei colleghi simpatici e ho cominciato a giocare a calcetto il giovedì. Oggi Bologna è casa mia. Da questa esperienza ho imparato che bisogna avere pazienza e che è importante chiedere aiuto. Penso che sia stata la scelta migliore della mia vita, e non tornerei indietro.",
  explanation: "The text answers the three questions, mixes the passato prossimo (\"mi sono trasferito\", \"ho conosciuto\") with the imperfetto (\"non conoscevo\", \"mi sentivo\"), uses a trapassato (\"avevo studiato\") and connectors (\"all'inizio\", \"dopo qualche mese\", \"oggi\"), and ends with a past subjunctive (\"penso che sia stata\") and a conditional (\"non tornerei\").",
};
