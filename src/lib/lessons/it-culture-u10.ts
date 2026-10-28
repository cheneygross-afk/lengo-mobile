// Synced from cheneygross-afk/lengo:src/lib/lessons/it-culture-u10.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Culture & Everyday Life, Unit 10: Practical Italy. The codice
// fiscale, the tabaccheria, the post office, strikes, healthcare, public
// transport, housing and the condominio, and a newcomer's first week.
// Rules described are general; local details vary.
// Conventions: docs/italian-course/authoring.md.
export const IT_CULTURE_U10: Lesson[] = [
  {
    slug: "culture-codice-fiscale",
    level: "IT-Culture",
    number: 1,
    title: "The Codice Fiscale",
    summary: "Get to know the sixteen-character code you need for almost everything in Italy, how it is built and where to get it.",
    duration: "15 min",
    sections: [
      {
        heading: "Un codice per tutto",
        body: [
          "\"Il codice fiscale\" is Italy's personal tax code, and in practice it's your ID number for almost everything: renting an apartment, signing a phone contract, opening a bank account, seeing a doctor, even some online shopping. Anyone who lives or works in Italy needs one, foreigners included.",
          "It's printed on \"la tessera sanitaria\", the health card, and you'll be asked for it constantly: \"Mi dà il codice fiscale?\"",
        ],
        examples: [
          { es: "Mi dà il codice fiscale, per favore?", en: "Can you give me your tax code, please?" },
          { es: "Serve il codice fiscale per aprire un conto.", en: "You need the tax code to open an account." },
          { es: "Non ho ancora il codice fiscale.", en: "I don't have a tax code yet." },
          { es: "È scritto sulla tessera sanitaria.", en: "It's written on the health card." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't have a tax code yet.", answer: "Non ho ancora il codice fiscale.", altAnswers: ["Non ho ancora un codice fiscale."], explanation: "\"Non ... ancora\" = not yet." },
          { type: "multiple-choice", question: "What do you need the codice fiscale for?", options: ["almost everything: renting, banking, the doctor", "only for paying taxes", "only for driving", "only for voting"], correctIndex: 0, explanation: "It works as a personal ID number." },
        ],
      },
      {
        heading: "Come è fatto",
        body: [
          "The code has sixteen letters and numbers, and it's built from your personal data: three letters from your surname, three from your first name, the last two digits of your birth year, a letter for the month, the day of birth (plus forty for women), a four-character code for your place of birth and a final check letter.",
          "People born abroad get a code that starts with Z for their country. So an Italian can often guess your age and birthplace from your codice fiscale.",
        ],
        examples: [
          { es: "Il codice ha sedici caratteri.", en: "The code has sixteen characters." },
          { es: "Le prime lettere vengono dal cognome.", en: "The first letters come from the surname." },
          { es: "Dentro c'è la data di nascita.", en: "The date of birth is inside it." },
          { es: "Me lo può ripetere lettera per lettera?", en: "Can you repeat it letter by letter?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The code has sixteen characters.", answer: "Il codice ha sedici caratteri.", altAnswers: ["Il codice è di sedici caratteri."], explanation: "\"Il carattere\" = character." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The first letters come from the [surname].", sentence: "Le prime lettere vengono dal ___.", answer: "cognome", explanation: "\"Il nome\" = first name; \"il cognome\" = surname." },
        ],
      },
      {
        heading: "Dove si chiede",
        body: [
          "You get it free from \"l'Agenzia delle Entrate\", the tax office, by bringing your passport and filling out a form. If you're abroad, an Italian consulate can issue it. Non-EU citizens often receive it as part of their residence permit process.",
          "Keep a copy on your phone: when you dictate it, Italians spell letters with city names, as in \"A come Ancona, B come Bologna\".",
        ],
        examples: [
          { es: "Vado all'Agenzia delle Entrate.", en: "I'm going to the tax office." },
          { es: "Bisogna portare il passaporto.", en: "You have to bring your passport." },
          { es: "È gratuito.", en: "It's free." },
          { es: "B come Bologna, R come Roma.", en: "B as in Bologna, R as in Roma." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to bring your passport.", answer: "Bisogna portare il passaporto.", altAnswers: ["Devi portare il passaporto.", "Bisogna portare il proprio passaporto."], explanation: "\"Bisogna\" + infinitive = one must." },
          { type: "listen-choose", audio: "B come Bologna, R come Roma.", question: "What is the speaker doing?", options: ["Spelling letters with city names.", "Listing train stops.", "Naming soccer teams.", "Giving directions."], correctIndex: 0, explanation: "Italians spell with city names." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need the tax code to open an account.", answer: "Serve il codice fiscale per aprire un conto.", altAnswers: ["Ci vuole il codice fiscale per aprire un conto.", "Per aprire un conto serve il codice fiscale."], explanation: "\"Serve\" = is needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's written on the health card.", answer: "È scritto sulla tessera sanitaria.", altAnswers: ["C'è scritto sulla tessera sanitaria."], explanation: "\"Sulla\" = on the." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to the tax office.", answer: "Vado all'Agenzia delle Entrate.", altAnswers: ["Vado all'ufficio delle tasse."], explanation: "\"L'Agenzia delle Entrate\" = the tax agency." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you repeat it letter by letter?", answer: "Me lo può ripetere lettera per lettera?", altAnswers: ["Può ripeterlo lettera per lettera?", "Me lo puoi ripetere lettera per lettera?"], explanation: "\"Lettera per lettera\" = letter by letter." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's free.", answer: "È gratuito.", altAnswers: ["È gratis."], explanation: "\"Gratuito\" or \"gratis\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [date of birth] is inside it.", sentence: "Dentro c'è la ___.", answer: "data di nascita", explanation: "\"La nascita\" = birth." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Can you give me your [tax code], please?", sentence: "Mi dà il ___, per favore?", answer: "codice fiscale", explanation: "\"Fiscale\" = tax-related." },
      { type: "word-order", prompt: "Put the words in order to say: I need the tax code to rent an apartment.", words: ["Mi", "serve", "il", "codice", "fiscale", "per", "affittare", "casa."], translation: "I need the tax code to rent an apartment.", explanation: "\"Mi serve\" = I need." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il cognome", right: "the surname" },
          { left: "la data di nascita", right: "the date of birth" },
          { left: "il luogo di nascita", right: "the place of birth" },
          { left: "la tessera sanitaria", right: "the health card" },
          { left: "il conto", right: "the bank account" },
        ],
        explanation: "Paperwork vocabulary.",
      },
      { type: "dictation", audio: "Mi dà il codice fiscale, per favore?", explanation: "\"Codice\": c before i sounds like ch." },
      { type: "speak", text: "Buongiorno, sono americana e vorrei richiedere il codice fiscale.", prompt: "Say it in Italian (as a woman): Good morning, I'm American and I'd like to apply for a tax code.", tip: "Ri-chie-DE-re: \"chie\" sounds like \"kye\".", explanation: "\"Richiedere\" = to apply for." },
    ],
  },
  {
    slug: "culture-tabacchi",
    level: "IT-Culture",
    number: 2,
    title: "The Tabaccheria",
    summary: "Find the shop with the big T: bus tickets, stamps, the marca da bollo, phone top-ups, bills and scratch cards.",
    duration: "15 min",
    sections: [
      {
        heading: "La T",
        body: [
          "Look for a white \"T\" on a dark sign: that's \"la tabaccheria\", or simply \"il tabacchi\". Tobacco and salt were once state monopolies, which is why old signs still say \"Sali e Tabacchi\". Today the tabaccheria is a small service center, often attached to a bar.",
          "Besides cigarettes, it sells bus tickets, postcards and stamps, so you can often skip the post office for a simple letter.",
        ],
        examples: [
          { es: "C'è un tabacchi qui vicino?", en: "Is there a tobacco shop near here?" },
          { es: "Due biglietti dell'autobus, per favore.", en: "Two bus tickets, please." },
          { es: "Vorrei un francobollo per gli Stati Uniti.", en: "I'd like a stamp for the United States." },
          { es: "Il tabacchi è dentro il bar.", en: "The tobacco shop is inside the bar." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two bus tickets, please.", answer: "Due biglietti dell'autobus, per favore.", altAnswers: ["Due biglietti per l'autobus, per favore.", "Vorrei due biglietti dell'autobus, per favore."], explanation: "\"Il biglietto dell'autobus\" = bus ticket." },
          { type: "multiple-choice", question: "Why do old signs say \"Sali e Tabacchi\"?", options: ["salt and tobacco were state monopolies", "they sell salty snacks", "it's a family name", "they're near the sea"], correctIndex: 0, explanation: "\"Il sale\" = salt; \"i sali\" = salts." },
        ],
      },
      {
        heading: "La marca da bollo",
        body: [
          "Many official documents and applications need \"una marca da bollo\", a revenue stamp: a sticker you buy at the tabaccheria and attach to the form. The most common one costs 16 euro.",
          "If an office says \"ci vuole la marca da bollo\", don't go to the post office: go to the tabacchi, buy it, and keep the receipt.",
        ],
        examples: [
          { es: "Ci vuole una marca da bollo da sedici euro.", en: "You need a sixteen-euro revenue stamp." },
          { es: "Dove si compra la marca da bollo?", en: "Where do you buy the revenue stamp?" },
          { es: "La attacchi sul modulo.", en: "Stick it on the form." },
          { es: "Mi serve anche la ricevuta.", en: "I also need the receipt." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where do you buy the revenue stamp?", answer: "Dove si compra la marca da bollo?", altAnswers: ["Dove compro la marca da bollo?"], explanation: "\"Si compra\" = one buys." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Stick it on the [form].", sentence: "La attacchi sul ___.", answer: "modulo", explanation: "\"Il modulo\" = form." },
        ],
      },
      {
        heading: "Ricariche e bollette",
        body: [
          "At the tabaccheria you can also top up your phone credit (\"fare una ricarica\"), pay many utility bills (\"pagare le bollette\") and fines, and buy parking cards and lottery tickets, including \"il Gratta e Vinci\", the scratch card.",
          "Bring cash for small amounts: many tabaccherie take cards, but some still prefer \"contanti\" for very small payments.",
        ],
        examples: [
          { es: "Vorrei fare una ricarica da venti euro.", en: "I'd like a twenty-euro top-up." },
          { es: "Posso pagare la bolletta qui?", en: "Can I pay the bill here?" },
          { es: "Si può pagare con la carta?", en: "Can I pay by card?" },
          { es: "Ho vinto dieci euro al Gratta e Vinci!", en: "I won ten euros on a scratch card!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I pay the bill here?", answer: "Posso pagare la bolletta qui?", altAnswers: ["Si può pagare la bolletta qui?", "Posso pagare qui la bolletta?"], explanation: "\"La bolletta\" = utility bill." },
          { type: "listen-choose", audio: "Vorrei fare una ricarica da venti euro.", question: "What does the customer want?", options: ["A twenty-euro phone top-up.", "Twenty euros in coins.", "A twenty-euro bus pass.", "Twenty stamps."], correctIndex: 0, explanation: "\"La ricarica\" = top-up." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there a tobacco shop near here?", answer: "C'è un tabacchi qui vicino?", altAnswers: ["C'è una tabaccheria qui vicino?", "C'è un tabaccaio qui vicino?"], explanation: "\"Qui vicino\" = near here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a stamp for the United States.", answer: "Vorrei un francobollo per gli Stati Uniti.", explanation: "\"Il francobollo\" = postage stamp." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need a sixteen-euro revenue stamp.", answer: "Ci vuole una marca da bollo da sedici euro.", altAnswers: ["Serve una marca da bollo da sedici euro.", "Ci vuole una marca da bollo da 16 euro."], explanation: "\"Da\" + price = worth." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I pay by card?", answer: "Si può pagare con la carta?", altAnswers: ["Posso pagare con la carta?", "Posso pagare con carta?"], explanation: "\"Con la carta\" = by card." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I also need the receipt.", answer: "Mi serve anche la ricevuta.", altAnswers: ["Ho bisogno anche della ricevuta."], explanation: "\"La ricevuta\" = receipt." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like a twenty-euro [top-up].", sentence: "Vorrei fare una ___ da venti euro.", answer: "ricarica", explanation: "\"Ricaricare\" = to recharge." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you have [cash]?", sentence: "Ha ___?", answer: "contanti", altAnswers: ["i contanti", "dei contanti"], explanation: "\"I contanti\" = cash." },
      { type: "word-order", prompt: "Put the words in order to say: You can buy bus tickets at the tobacco shop.", words: ["I", "biglietti", "dell'autobus", "si", "comprano", "dal", "tabaccaio."], translation: "You can buy bus tickets at the tobacco shop.", explanation: "\"Dal tabaccaio\" = at the tobacconist's." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il francobollo", right: "the postage stamp" },
          { left: "la marca da bollo", right: "the revenue stamp" },
          { left: "la ricarica", right: "the phone top-up" },
          { left: "la bolletta", right: "the utility bill" },
          { left: "il Gratta e Vinci", right: "the scratch card" },
        ],
        explanation: "Tabaccheria vocabulary.",
      },
      { type: "dictation", audio: "Posso pagare la bolletta qui?", explanation: "\"Bolletta\": double l, double t." },
      { type: "speak", text: "Buongiorno, mi dà due biglietti dell'autobus e una marca da bollo da sedici euro?", prompt: "Say it in Italian: Good morning, can I have two bus tickets and a sixteen-euro revenue stamp?", tip: "Mar-ca da BOL-lo: hold the double l.", explanation: "\"Mi dà\" = can you give me (formal)." },
    ],
  },
  {
    slug: "culture-poste",
    level: "IT-Culture",
    number: 3,
    title: "The Poste",
    summary: "Handle the Italian post office: take a number, send a registered letter, collect a parcel and pay with a bollettino.",
    duration: "15 min",
    sections: [
      {
        heading: "Più di un ufficio postale",
        body: [
          "\"Le Poste\" (Poste Italiane) don't just deliver mail. They're also a bank and a payment office: many Italians have a BancoPosta account or a prepaid Postepay card, collect their pension there and pay bills with \"il bollettino postale\", a payment slip.",
          "That's why there's always a line: everyone, from students to grandparents, comes to the post office for something.",
        ],
        examples: [
          { es: "Le Poste sono anche una banca.", en: "The post office is also a bank." },
          { es: "Devo pagare un bollettino.", en: "I have to pay a payment slip." },
          { es: "Mia nonna ritira la pensione in posta.", en: "My grandmother collects her pension at the post office." },
          { es: "C'è sempre la fila.", en: "There's always a line." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's always a line.", answer: "C'è sempre la fila.", altAnswers: ["C'è sempre fila.", "C'è sempre una fila."], explanation: "\"Fare la fila\" = to wait in line." },
          { type: "multiple-choice", question: "What is \"il bollettino postale\"?", options: ["a payment slip", "a stamp", "a newsletter", "a parcel"], correctIndex: 0, explanation: "You use it to pay bills and fees." },
        ],
      },
      {
        heading: "Prendere il numero",
        body: [
          "When you enter, take a number from the machine (\"prendere il numero\") and choose the right service: letters and parcels, or payments and banking. Then wait until your number appears on the screen. Many offices also let you book a time in the app and skip the wait.",
          "Don't jump the line: Italians may look relaxed about lines, but at the post office, numbers are sacred.",
        ],
        examples: [
          { es: "Prima prendi il numero.", en: "First take a number." },
          { es: "Che numero hai?", en: "What number do you have?" },
          { es: "Tocca a me.", en: "It's my turn." },
          { es: "Ho prenotato con l'app.", en: "I booked with the app." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What number do you have?", answer: "Che numero hai?", altAnswers: ["Che numero ha?", "Quale numero hai?"], explanation: "\"Che numero\" = what number." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It's my turn].", sentence: "___.", answer: "Tocca a me", explanation: "\"Toccare a\" = to be someone's turn." },
        ],
      },
      {
        heading: "Raccomandate e pacchi",
        body: [
          "Official mail often comes as \"una raccomandata\", a registered letter you must sign for. If you're not home, the mail carrier leaves \"un avviso di giacenza\", a notice telling you which office holds it and until when.",
          "Bring the notice and an ID to collect it. To send something: \"spedire una lettera\" or \"un pacco\", paying a little more for faster delivery if it's urgent.",
        ],
        examples: [
          { es: "Ho trovato un avviso nella cassetta.", en: "I found a notice in the mailbox." },
          { es: "Devo ritirare una raccomandata.", en: "I have to pick up a registered letter." },
          { es: "Vorrei spedire questo pacco.", en: "I'd like to send this parcel." },
          { es: "Quanto ci mette ad arrivare?", en: "How long does it take to arrive?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to send this parcel.", answer: "Vorrei spedire questo pacco.", altAnswers: ["Vorrei mandare questo pacco."], explanation: "\"Spedire\" = to send, ship." },
          { type: "listen-choose", audio: "Devo ritirare una raccomandata.", question: "What does the speaker need to do?", options: ["Pick up a registered letter.", "Buy a stamp.", "Pay a bill.", "Open an account."], correctIndex: 0, explanation: "\"Ritirare\" = to collect." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The post office is also a bank.", answer: "Le Poste sono anche una banca.", altAnswers: ["La posta è anche una banca.", "L'ufficio postale è anche una banca."], explanation: "\"Le Poste\" is plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First take a number.", answer: "Prima prendi il numero.", altAnswers: ["Prima prenda il numero.", "Prendi prima il numero."], explanation: "Imperative \"prendi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I booked with the app.", answer: "Ho prenotato con l'app.", altAnswers: ["Ho prenotato tramite l'app."], explanation: "\"L'app\" is feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I found a notice in the mailbox.", answer: "Ho trovato un avviso nella cassetta.", altAnswers: ["Ho trovato un avviso nella cassetta delle lettere.", "Ho trovato un avviso nella buca delle lettere."], explanation: "\"La cassetta delle lettere\" = mailbox." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take to arrive?", answer: "Quanto ci mette ad arrivare?", altAnswers: ["Quanto tempo ci mette ad arrivare?", "In quanto tempo arriva?"], explanation: "\"Metterci\" = to take (time)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have to [pick up] a registered letter.", sentence: "Devo ___ una raccomandata.", answer: "ritirare", explanation: "\"Ritirare\" = to collect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandmother collects her [pension] at the post office.", sentence: "Mia nonna ritira la ___ in posta.", answer: "pensione", explanation: "\"La pensione\" = pension." },
      { type: "word-order", prompt: "Put the words in order to say: You have to sign to collect the registered letter.", words: ["Bisogna", "firmare", "per", "ritirare", "la", "raccomandata."], translation: "You have to sign to collect the registered letter.", explanation: "\"Firmare\" = to sign." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "la raccomandata", right: "the registered letter" },
          { left: "l'avviso di giacenza", right: "the notice of an item held" },
          { left: "il pacco", right: "the parcel" },
          { left: "il bollettino", right: "the payment slip" },
          { left: "la fila", right: "the line" },
        ],
        explanation: "Post office vocabulary.",
      },
      { type: "dictation", audio: "Vorrei spedire questo pacco.", explanation: "\"Pacco\": double c." },
      { type: "speak", text: "Buongiorno, devo ritirare una raccomandata: ecco l'avviso e il documento.", prompt: "Say it in Italian: Good morning, I have to pick up a registered letter: here are the notice and my ID.", tip: "Rac-co-man-DA-ta: stress on -da-.", explanation: "\"Ecco\" = here is, here are." },
    ],
  },
  {
    slug: "culture-strikes",
    level: "IT-Culture",
    number: 4,
    title: "Strikes",
    summary: "Learn how Italian strikes work, why they're announced in advance, which services are guaranteed, and how to plan around them.",
    duration: "15 min",
    sections: [
      {
        heading: "Lo sciopero",
        body: [
          "\"Lo sciopero\" (strike) is a common part of Italian life, especially in transport: trains, buses, metro, flights and taxis. The right to strike is in the Constitution, and many strikes last only a few hours or a single day.",
          "The good news: in public services strikes must be announced in advance, usually at least ten days before. The Ministry of Infrastructure and Transport publishes a calendar online, and the news and transport apps warn about them.",
        ],
        examples: [
          { es: "Venerdì c'è sciopero dei treni.", en: "There's a train strike on Friday." },
          { es: "Lo sciopero dura ventiquattro ore.", en: "The strike lasts twenty-four hours." },
          { es: "Hanno annunciato uno sciopero.", en: "They've announced a strike." },
          { es: "I sindacati protestano per i salari.", en: "The unions are protesting about wages." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a train strike on Friday.", answer: "Venerdì c'è sciopero dei treni.", altAnswers: ["Venerdì c'è uno sciopero dei treni.", "C'è sciopero dei treni venerdì."], explanation: "\"C'è sciopero\": often no article." },
          { type: "multiple-choice", question: "How far ahead must a public service strike usually be announced?", options: ["at least ten days", "one hour", "the same morning", "it isn't announced"], correctIndex: 0, explanation: "So you can plan." },
        ],
      },
      {
        heading: "Le fasce garantite",
        body: [
          "During transport strikes, some services are guaranteed. Local buses and metros often run normally in \"le fasce di garanzia\" (guaranteed time bands), commonly around 6 to 9 in the morning and 18 to 21 in the evening, though times change from city to city.",
          "For trains, the railway publishes a list of \"treni garantiti\" that will run anyway, including many long-distance trains. Everything else may be canceled.",
        ],
        examples: [
          { es: "L'autobus passa nelle fasce garantite.", en: "The bus runs in the guaranteed time bands." },
          { es: "Il mio treno è garantito.", en: "My train is guaranteed." },
          { es: "Il treno è stato cancellato.", en: "The train has been canceled." },
          { es: "Controlla gli orari sul sito.", en: "Check the times on the website." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train has been canceled.", answer: "Il treno è stato cancellato.", altAnswers: ["Il treno è stato soppresso.", "Hanno cancellato il treno."], explanation: "Trains are also \"soppressi\" in announcements." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Check the [times] on the website.", sentence: "Controlla gli ___ sul sito.", answer: "orari", explanation: "\"L'orario\" = timetable." },
        ],
      },
      {
        heading: "Come organizzarsi",
        body: [
          "Before traveling, check whether a strike is planned. If it is, travel inside the guaranteed bands, choose a guaranteed train, or move your trip. Many strikes fall on a Friday or a Monday, which is why Italians joke about \"il venerdì nero\".",
          "Italians take strikes with patience: \"C'è sciopero, pazienza\". Leave early, have a plan B, and if all else fails, have a coffee and wait.",
        ],
        examples: [
          { es: "Domani parto prima per lo sciopero.", en: "Tomorrow I'm leaving earlier because of the strike." },
          { es: "Prendo un treno garantito.", en: "I'll take a guaranteed train." },
          { es: "Ho spostato il viaggio a sabato.", en: "I moved the trip to Saturday." },
          { es: "C'è sciopero, pazienza.", en: "There's a strike; oh well." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I moved the trip to Saturday.", answer: "Ho spostato il viaggio a sabato.", altAnswers: ["Ho rimandato il viaggio a sabato."], explanation: "\"Spostare\" = to move." },
          { type: "listen-choose", audio: "Domani parto prima per lo sciopero.", question: "Why is the speaker leaving earlier?", options: ["Because of the strike.", "Because of the weather.", "Because of a meeting.", "Because of a holiday."], correctIndex: 0, explanation: "\"Per lo sciopero\" = because of the strike." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The strike lasts twenty-four hours.", answer: "Lo sciopero dura ventiquattro ore.", altAnswers: ["Lo sciopero dura 24 ore."], explanation: "\"Lo sciopero\": \"lo\" before sc." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They've announced a strike.", answer: "Hanno annunciato uno sciopero.", altAnswers: ["Hanno proclamato uno sciopero."], explanation: "\"Uno\" before s + consonant." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My train is guaranteed.", answer: "Il mio treno è garantito.", explanation: "\"Garantito\" = guaranteed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll take a guaranteed train.", answer: "Prendo un treno garantito.", altAnswers: ["Prenderò un treno garantito."], explanation: "Present for near plans." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The unions are protesting about wages.", answer: "I sindacati protestano per i salari.", altAnswers: ["I sindacati protestano per gli stipendi."], explanation: "\"Il sindacato\" = union." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bus runs in the [guaranteed time bands].", sentence: "L'autobus passa nelle ___.", answer: "fasce garantite", altAnswers: ["fasce di garanzia"], explanation: "\"La fascia\" = band." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tomorrow I'm leaving [earlier] because of the strike.", sentence: "Domani parto ___ per lo sciopero.", answer: "prima", altAnswers: ["più presto"], explanation: "\"Prima\" = earlier." },
      { type: "word-order", prompt: "Put the words in order to say: Is there a strike tomorrow?", words: ["Domani", "c'è", "sciopero?"], translation: "Is there a strike tomorrow?", explanation: "Questions keep statement order." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "lo sciopero", right: "the strike" },
          { left: "il sindacato", right: "the union" },
          { left: "la fascia di garanzia", right: "the guaranteed time band" },
          { left: "cancellato", right: "canceled" },
          { left: "pazienza", right: "oh well" },
        ],
        explanation: "Strike vocabulary.",
      },
      { type: "dictation", audio: "Venerdì c'è sciopero dei treni.", explanation: "\"Sciopero\": sc + i = sh." },
      { type: "speak", text: "Scusi, sa se domani c'è sciopero degli autobus?", prompt: "Say it in Italian: Excuse me, do you know if there's a bus strike tomorrow?", tip: "SCIO-pe-ro: stress on the first syllable.", explanation: "\"Sa se\" = do you know if (formal)." },
    ],
  },
  {
    slug: "culture-healthcare",
    level: "IT-Culture",
    number: 5,
    title: "Healthcare",
    summary: "Understand the national health service: choosing a medico di base, prescriptions and the ticket, and the pharmacy with the green cross.",
    duration: "15 min",
    sections: [
      {
        heading: "Il medico di base",
        body: [
          "Italy has a national health service, \"il Servizio Sanitario Nazionale\" (SSN), created in 1978 and paid for mainly by taxes. When you register with your local health authority (often called \"l'ASL\", though the name varies by region), you choose \"un medico di base\" (or \"medico di famiglia\"), a family doctor, free of charge.",
          "The medico di base is your first stop for everything: visits, sick notes for work, prescriptions and referrals to specialists. Office hours are often short, so check them, and many doctors see patients without appointments at set times.",
        ],
        examples: [
          { es: "Devo scegliere il medico di base.", en: "I have to choose a family doctor." },
          { es: "Che orari fa il dottore?", en: "What are the doctor's hours?" },
          { es: "Mi serve un certificato per il lavoro.", en: "I need a sick note for work." },
          { es: "Il medico mi ha mandato da uno specialista.", en: "The doctor referred me to a specialist." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to choose a family doctor.", answer: "Devo scegliere il medico di base.", altAnswers: ["Devo scegliere il medico di famiglia.", "Devo scegliere un medico di base."], explanation: "\"Scegliere\" = to choose." },
          { type: "multiple-choice", question: "Who is your first stop for health problems?", options: ["il medico di base", "the hospital emergency room", "the pharmacist only", "a private clinic"], correctIndex: 0, explanation: "The family doctor." },
        ],
      },
      {
        heading: "La ricetta e il ticket",
        body: [
          "A prescription is \"la ricetta\", today usually electronic: the doctor gives you a code, and the pharmacy reads it with your health card. Specialist visits and tests often need a co-payment, which Italians call \"il ticket\" (an English word with an Italian meaning).",
          "To book a specialist visit or a test through the public system, you call or go online to \"il CUP\", the booking center. Waiting times can be long, so many people also use private doctors.",
        ],
        examples: [
          { es: "Il medico mi ha fatto la ricetta.", en: "The doctor wrote me a prescription." },
          { es: "Quanto costa il ticket?", en: "How much is the co-payment?" },
          { es: "Ho prenotato la visita al CUP.", en: "I booked the appointment through the CUP." },
          { es: "C'è da aspettare due mesi.", en: "There's a two-month wait." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is the co-payment?", answer: "Quanto costa il ticket?", altAnswers: ["Quant'è il ticket?", "Quanto si paga di ticket?"], explanation: "\"Il ticket\" = health co-payment." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The doctor wrote me a [prescription].", sentence: "Il medico mi ha fatto la ___.", answer: "ricetta", explanation: "\"La ricetta\" = prescription, and recipe." },
        ],
      },
      {
        heading: "La farmacia",
        body: [
          "The green cross means \"la farmacia\". Italian pharmacists give a lot of advice: for a cold or a stomach ache, Italians often ask the pharmacist before the doctor. Medicines are sold in pharmacies; over-the-counter ones are also sold in \"parafarmacie\" and in some supermarkets' pharmacy corners, always by a pharmacist, never on ordinary shelves.",
          "At night and on holidays, \"la farmacia di turno\" stays open on a rotating schedule: every pharmacy displays a list of who's on duty. For emergencies, call 112 (118 also still works for an ambulance) or go to \"il pronto soccorso\".",
        ],
        examples: [
          { es: "Ho mal di gola. Cosa mi consiglia?", en: "I have a sore throat. What do you recommend?" },
          { es: "Qual è la farmacia di turno stasera?", en: "Which pharmacy is on duty tonight?" },
          { es: "Serve la ricetta per questo farmaco?", en: "Do I need a prescription for this medicine?" },
          { es: "Siamo andati al pronto soccorso.", en: "We went to the emergency room." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which pharmacy is on duty tonight?", answer: "Qual è la farmacia di turno stasera?", altAnswers: ["Quale farmacia è di turno stasera?", "Stasera qual è la farmacia di turno?"], explanation: "\"Di turno\" = on duty." },
          { type: "listen-choose", audio: "Ho mal di gola. Cosa mi consiglia?", question: "What's the customer's problem?", options: ["A sore throat.", "A headache.", "A broken arm.", "A fever."], correctIndex: 0, explanation: "\"La gola\" = throat." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are the doctor's hours?", answer: "Che orari fa il dottore?", altAnswers: ["Che orario fa il medico?", "Quali sono gli orari del medico?", "Che orari fa il medico?"], explanation: "\"Fare orario\" = to keep hours." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need a sick note for work.", answer: "Mi serve un certificato per il lavoro.", altAnswers: ["Ho bisogno di un certificato per il lavoro.", "Mi serve il certificato di malattia."], explanation: "\"Il certificato\" = medical certificate." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I need a prescription for this medicine?", answer: "Serve la ricetta per questo farmaco?", altAnswers: ["Ci vuole la ricetta per questo farmaco?", "Serve la ricetta per questa medicina?"], explanation: "\"Il farmaco\" = medicine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We went to the emergency room.", answer: "Siamo andati al pronto soccorso.", altAnswers: ["Siamo andate al pronto soccorso."], explanation: "\"Il pronto soccorso\" = ER." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a two-month wait.", answer: "C'è da aspettare due mesi.", altAnswers: ["Bisogna aspettare due mesi.", "Ci sono due mesi di attesa."], explanation: "\"C'è da\" + infinitive = one has to." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The doctor [referred me] to a specialist.", sentence: "Il medico ___ da uno specialista.", answer: "mi ha mandato", explanation: "\"Mandare da\" = to send to (a person)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have a [sore throat].", sentence: "Ho ___.", answer: "mal di gola", explanation: "\"Mal di\" + body part." },
      { type: "word-order", prompt: "Put the words in order to say: The pharmacy on duty is open all night.", words: ["La", "farmacia", "di", "turno", "è", "aperta", "tutta", "la", "notte."], translation: "The pharmacy on duty is open all night.", explanation: "\"Tutta la notte\" = all night." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il medico di base", right: "the family doctor" },
          { left: "la ricetta", right: "the prescription" },
          { left: "il ticket", right: "the co-payment" },
          { left: "il pronto soccorso", right: "the emergency room" },
          { left: "la farmacia di turno", right: "the pharmacy on duty" },
        ],
        explanation: "Healthcare vocabulary.",
      },
      { type: "dictation", audio: "Qual è la farmacia di turno stasera?", explanation: "\"Qual è\": no apostrophe." },
      { type: "speak", text: "Buonasera, ho la febbre e mal di testa. Cosa mi consiglia?", prompt: "Say it in Italian: Good evening, I have a fever and a headache. What do you recommend?", tip: "FEB-bre: double b.", explanation: "\"Avere la febbre\" = to have a fever." },
    ],
  },
  {
    slug: "culture-public-transport",
    level: "IT-Culture",
    number: 6,
    title: "Public Transport",
    summary: "Ride Italian trains and buses: high-speed and regional trains, where to buy tickets, and why you must always validate them.",
    duration: "15 min",
    sections: [
      {
        heading: "I treni",
        body: [
          "Italy has two kinds of train worlds. High-speed trains, like Trenitalia's \"Frecciarossa\" and the private company Italo, link the big cities fast: Milan to Rome takes about three hours. Seats are reserved, and prices go up as the date approaches.",
          "\"I treni regionali\" (regional trains) are slower and cheaper, stop everywhere and have a fixed price. Departures and delays appear on the big board: \"in ritardo\" means late, \"binario\" means platform.",
        ],
        examples: [
          { es: "Il treno per Roma parte dal binario sei.", en: "The train to Rome leaves from platform six." },
          { es: "Il regionale è in ritardo di dieci minuti.", en: "The regional train is ten minutes late." },
          { es: "Ho prenotato il posto sul Frecciarossa.", en: "I reserved a seat on the Frecciarossa." },
          { es: "Andata e ritorno, per favore.", en: "Round trip, please." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train to Rome leaves from platform six.", answer: "Il treno per Roma parte dal binario sei.", altAnswers: ["Il treno per Roma parte dal binario 6."], explanation: "\"Il binario\" = platform, track." },
          { type: "multiple-choice", question: "What does \"in ritardo\" mean on the board?", options: ["late", "canceled", "on time", "full"], correctIndex: 0, explanation: "\"In orario\" = on time." },
        ],
      },
      {
        heading: "Convalidare il biglietto",
        body: [
          "The golden rule: \"convalidare\" (validate) your ticket. Paper tickets for regional trains without a fixed time must be stamped in the small machines on the platform before you board. Some digital regional tickets need a check-in in the app before you board: rules vary, so read the instructions on your ticket. On buses and trams, stamp your ticket in the machine on board as soon as you get on.",
          "If \"il controllore\" (the inspector) finds you with an unvalidated ticket, you can get \"una multa\", a fine, even if you bought it. Saying you didn't know rarely works.",
        ],
        examples: [
          { es: "Hai timbrato il biglietto?", en: "Did you stamp your ticket?" },
          { es: "La macchinetta è sul binario.", en: "The machine is on the platform." },
          { es: "Biglietti, prego!", en: "Tickets, please!" },
          { es: "Ho preso una multa di cinquanta euro.", en: "I got a fifty-euro fine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you stamp your ticket?", answer: "Hai timbrato il biglietto?", altAnswers: ["Hai convalidato il biglietto?", "Hai obliterato il biglietto?"], explanation: "\"Timbrare\" is the everyday verb." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I got a fifty-euro [fine].", sentence: "Ho preso una ___ di cinquanta euro.", answer: "multa", explanation: "\"Prendere una multa\" = to get a fine." },
        ],
      },
      {
        heading: "Autobus e metro",
        body: [
          "City bus and metro tickets are usually sold at the tabaccheria, newsstands, machines and apps, rarely by the driver. A single ticket is valid for a set time, often 90 or 100 minutes, depending on the city. In many cities you can now just tap a contactless bank card.",
          "If you stay a while, buy \"un abbonamento\", a weekly, monthly or yearly pass. Big cities like Rome, Milan, Naples and Turin have a metro; most others rely on buses, and some on trams.",
        ],
        examples: [
          { es: "Il biglietto vale novanta minuti.", en: "The ticket is valid for ninety minutes." },
          { es: "Faccio l'abbonamento mensile.", en: "I'm getting a monthly pass." },
          { es: "Dove scendo per il Duomo?", en: "Where do I get off for the cathedral?" },
          { es: "Questo autobus va in centro?", en: "Does this bus go downtown?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Does this bus go downtown?", answer: "Questo autobus va in centro?", altAnswers: ["Quest'autobus va in centro?", "Questo bus va in centro?"], explanation: "\"In centro\" = downtown." },
          { type: "listen-choose", audio: "Il biglietto vale novanta minuti.", question: "How long is the ticket valid?", options: ["ninety minutes", "nineteen minutes", "one day", "one week"], correctIndex: 0, explanation: "\"Novanta\" = ninety." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Round trip, please.", answer: "Andata e ritorno, per favore.", altAnswers: ["Un biglietto di andata e ritorno, per favore."], explanation: "\"Solo andata\" = one way." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The regional train is ten minutes late.", answer: "Il regionale è in ritardo di dieci minuti.", altAnswers: ["Il treno regionale è in ritardo di dieci minuti.", "Il regionale ha dieci minuti di ritardo."], explanation: "\"In ritardo di\" + time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where do I get off for the cathedral?", answer: "Dove scendo per il Duomo?", altAnswers: ["Dove devo scendere per il Duomo?"], explanation: "\"Scendere\" = to get off." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm getting a monthly pass.", answer: "Faccio l'abbonamento mensile.", altAnswers: ["Faccio un abbonamento mensile.", "Prendo l'abbonamento mensile."], explanation: "\"Fare l'abbonamento\" = to get a pass." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The machine is on the platform.", answer: "La macchinetta è sul binario.", altAnswers: ["La macchinetta si trova sul binario."], explanation: "\"La macchinetta\" = small machine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You have to [validate] the ticket.", sentence: "Devi ___ il biglietto.", answer: "convalidare", altAnswers: ["timbrare", "obliterare"], explanation: "Three verbs, one meaning." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train is [on time].", sentence: "Il treno è ___.", answer: "in orario", explanation: "\"In orario\" = on time." },
      { type: "word-order", prompt: "Put the words in order to say: The inspector checks the tickets.", words: ["Il", "controllore", "controlla", "i", "biglietti."], translation: "The inspector checks the tickets.", explanation: "\"Il controllore\" = ticket inspector." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il binario", right: "the platform" },
          { left: "in ritardo", right: "late" },
          { left: "convalidare", right: "to validate" },
          { left: "la multa", right: "the fine" },
          { left: "l'abbonamento", right: "the travel pass" },
        ],
        explanation: "Transport vocabulary.",
      },
      { type: "dictation", audio: "Hai timbrato il biglietto?", explanation: "\"Biglietto\": gli + double t." },
      { type: "speak", text: "Scusi, da quale binario parte il regionale per Firenze?", prompt: "Say it in Italian: Excuse me, which platform does the regional train to Florence leave from?", tip: "Bi-NA-rio: stress on -na-.", explanation: "\"Da quale binario\" = from which platform." },
    ],
  },
  {
    slug: "culture-housing",
    level: "IT-Culture",
    number: 7,
    title: "Housing",
    summary: "Rent a flat in Italy: reading ads, the 4+4 contract and the deposit, and living by the rules of the condominio.",
    duration: "15 min",
    sections: [
      {
        heading: "Cercare casa",
        body: [
          "Rental ads count rooms, not bedrooms: \"un monolocale\" is a studio, \"un bilocale\" has two rooms (usually a living room and a bedroom), \"un trilocale\" three, plus kitchen and bathroom. \"Arredato\" means furnished. Many rentals come through \"un'agenzia immobiliare\", which charges a fee.",
          "Ask about \"le spese\": on top of the rent there are often building costs, and heating may be \"centralizzato\" (shared and run by the building) or \"autonomo\" (your own boiler).",
        ],
        examples: [
          { es: "Cerco un bilocale in centro.", en: "I'm looking for a one-bedroom apartment downtown." },
          { es: "L'appartamento è arredato?", en: "Is the apartment furnished?" },
          { es: "Le spese sono comprese?", en: "Are the building costs included?" },
          { es: "Il riscaldamento è autonomo.", en: "The apartment has its own heating." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the apartment furnished?", answer: "L'appartamento è arredato?", altAnswers: ["La casa è arredata?"], explanation: "\"Arredato\" = furnished." },
          { type: "multiple-choice", question: "What is \"un bilocale\"?", options: ["an apartment with two main rooms", "a two-story house", "a shared room", "an apartment for two families"], correctIndex: 0, explanation: "Living room + bedroom, plus kitchen and bath." },
        ],
      },
      {
        heading: "Il contratto",
        body: [
          "The most common contract is \"il 4+4\": four years, automatically renewed for another four unless the landlord has a legal reason to end it. Shorter contracts exist for students and temporary stays. You'll pay \"il deposito cauzionale\", the security deposit, which by law can't be more than three months' rent.",
          "Make sure the contract is registered with the tax office: by law an unregistered contract isn't valid, which causes problems for both sides.",
        ],
        examples: [
          { es: "L'affitto è di ottocento euro al mese.", en: "The rent is eight hundred euros a month." },
          { es: "Il contratto è quattro più quattro.", en: "The contract is four plus four." },
          { es: "Il deposito è di due mensilità.", en: "The deposit is two months' rent." },
          { es: "Il contratto è registrato?", en: "Is the contract registered?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the contract registered?", answer: "Il contratto è registrato?", explanation: "\"Registrare\" = to register." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [rent] is eight hundred euros a month.", sentence: "L'___ è di ottocento euro al mese.", answer: "affitto", explanation: "\"Affittare\" = to rent." },
        ],
      },
      {
        heading: "Il condominio",
        body: [
          "Most Italians live in apartment buildings, \"i condomini\". A building is run by \"l'amministratore\" (the building manager), and owners meet in \"l'assemblea di condominio\", famous for its endless arguments. Each building has its own rules (\"il regolamento\"), which often include quiet hours, typically in the early afternoon and at night; times vary.",
          "Learn \"la raccolta differenziata\": waste is sorted into paper, plastic, glass, organic and general waste, and the categories and collection days vary from town to town. Neighbors notice when you get it wrong.",
        ],
        examples: [
          { es: "C'è la riunione di condominio stasera.", en: "There's a building meeting tonight." },
          { es: "Dopo le dieci bisogna fare silenzio.", en: "After ten you have to be quiet." },
          { es: "Il vetro si butta il martedì.", en: "Glass goes out on Tuesdays." },
          { es: "Chiamo l'amministratore.", en: "I'll call the building manager." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll call the building manager.", answer: "Chiamo l'amministratore.", altAnswers: ["Chiamo l'amministratore di condominio.", "Chiamerò l'amministratore."], explanation: "Present for immediate plans." },
          { type: "listen-choose", audio: "Il vetro si butta il martedì.", question: "When does glass go out?", options: ["on Tuesdays", "on Mondays", "every day", "on weekends"], correctIndex: 0, explanation: "\"Il martedì\" = on Tuesdays." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm looking for a one-bedroom apartment downtown.", answer: "Cerco un bilocale in centro.", altAnswers: ["Sto cercando un bilocale in centro."], explanation: "\"Cercare\" without \"per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are the building costs included?", answer: "Le spese sono comprese?", altAnswers: ["Le spese condominiali sono comprese?", "Sono comprese le spese?"], explanation: "\"Compreso\" = included." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The rent is eight hundred euros a month.", answer: "L'affitto è di ottocento euro al mese.", altAnswers: ["L'affitto è ottocento euro al mese.", "L'affitto costa ottocento euro al mese."], explanation: "\"Al mese\" = per month." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a building meeting tonight.", answer: "C'è la riunione di condominio stasera.", altAnswers: ["Stasera c'è la riunione di condominio.", "Stasera c'è l'assemblea di condominio."], explanation: "\"La riunione\" = meeting." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After ten you have to be quiet.", answer: "Dopo le dieci bisogna fare silenzio.", altAnswers: ["Dopo le dieci bisogna stare zitti.", "Dopo le ventidue bisogna fare silenzio."], explanation: "\"Fare silenzio\" = to keep quiet." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [deposit] is two months' rent.", sentence: "Il ___ è di due mensilità.", answer: "deposito", altAnswers: ["deposito cauzionale"], explanation: "\"La mensilità\" = one month's payment." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We sort [the waste].", sentence: "Facciamo ___.", answer: "la raccolta differenziata", altAnswers: ["la differenziata"], explanation: "\"Differenziare\" = to separate." },
      { type: "word-order", prompt: "Put the words in order to say: The contract lasts four years.", words: ["Il", "contratto", "dura", "quattro", "anni."], translation: "The contract lasts four years.", explanation: "\"Durare\" = to last." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "il monolocale", right: "the studio apartment" },
          { left: "arredato", right: "furnished" },
          { left: "l'affitto", right: "the rent" },
          { left: "il deposito cauzionale", right: "the security deposit" },
          { left: "l'amministratore", right: "the building manager" },
        ],
        explanation: "Housing vocabulary.",
      },
      { type: "dictation", audio: "L'appartamento è arredato?", explanation: "\"Appartamento\": double p." },
      { type: "speak", text: "Buongiorno, chiamo per l'annuncio del bilocale: è ancora disponibile?", prompt: "Say it in Italian: Good morning, I'm calling about the ad for the one-bedroom apartment: is it still available?", tip: "Di-spo-NI-bi-le: stress on -ni-.", explanation: "\"Chiamare per\" = to call about." },
    ],
  },
  {
    slug: "culture-dialogue-first-week",
    level: "IT-Culture",
    number: 8,
    title: "Dialogue: Your First Week",
    summary: "Follow Anna, just arrived in Bologna for work, as her colleague Davide helps her with paperwork, a phone, the bus and the neighbors.",
    duration: "15 min",
    sections: [
      {
        heading: "Le pratiche",
        body: [
          "Davide: \"Allora, come va la prima settimana?\" Anna: \"Bene, ma ho una lista infinita di cose da fare!\" Davide: \"Normale. Prima di tutto il codice fiscale, poi il permesso di soggiorno.\" Anna: \"Il permesso si chiede in posta, vero?\" Davide: \"Sì, con il kit. Hai otto giorni dall'arrivo.\"",
          "Non-EU citizens who stay more than three months must request \"il permesso di soggiorno\" (residence permit) within eight working days of arriving, usually starting with a kit from the post office. The rules and steps change, so check the current ones with the Questura or your employer. Paperwork is \"le pratiche\", and Italians call the maze of offices \"la burocrazia\".",
        ],
        examples: [
          { es: "Ho una lista infinita di cose da fare.", en: "I have an endless list of things to do." },
          { es: "Prima di tutto il codice fiscale.", en: "First of all, the tax code." },
          { es: "Hai otto giorni dall'arrivo.", en: "You have eight days from your arrival." },
          { es: "La burocrazia è lenta.", en: "The bureaucracy is slow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bureaucracy is slow.", answer: "La burocrazia è lenta.", altAnswers: ["La burocrazia è lentissima."], explanation: "\"La burocrazia\": stress on -zi-." },
          { type: "multiple-choice", question: "Where does the residence permit process start?", options: ["at the post office, with a kit", "at the tabaccheria", "at the train station", "at the pharmacy"], correctIndex: 0, explanation: "The kit comes from the post office." },
        ],
      },
      {
        heading: "Telefono e banca",
        body: [
          "Anna: \"Mi serve anche un numero italiano.\" Davide: \"Vai in un negozio di telefonia con il passaporto e il codice fiscale. Ti fanno il contratto in dieci minuti.\" Anna: \"E il conto in banca?\" Davide: \"Anche per quello serve il codice fiscale. Vedi? Lo usi per tutto.\"",
          "A phone plan is \"un'offerta\" or \"un piano\", usually prepaid with monthly renewals; you top it up with \"una ricarica\".",
        ],
        examples: [
          { es: "Mi serve un numero italiano.", en: "I need an Italian phone number." },
          { es: "Porta il passaporto.", en: "Bring your passport." },
          { es: "Vorrei aprire un conto.", en: "I'd like to open an account." },
          { es: "Lo usi per tutto.", en: "You use it for everything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to open an account.", answer: "Vorrei aprire un conto.", altAnswers: ["Vorrei aprire un conto in banca.", "Vorrei aprire un conto corrente."], explanation: "\"Il conto corrente\" = checking account." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I need an Italian [phone number].", sentence: "Mi serve un ___ italiano.", answer: "numero", altAnswers: ["numero di telefono"], explanation: "\"Il numero\" = phone number." },
        ],
      },
      {
        heading: "I vicini",
        body: [
          "Anna: \"Ieri la vicina mi ha lasciato un biglietto sulla porta: ho messo la plastica nel bidone sbagliato!\" Davide: \"Benvenuta in Italia! Vai a presentarti, magari con dei biscotti. Le vicine sanno tutto.\" Anna: \"E l'autobus?\" Davide: \"Compra l'abbonamento e ricordati di timbrare.\"",
          "Introducing yourself to the neighbors helps a lot: they'll explain the building's rules, take in a parcel for you, and tell you which bar makes the best cappuccino.",
        ],
        examples: [
          { es: "Ho messo la plastica nel bidone sbagliato.", en: "I put the plastic in the wrong bin." },
          { es: "Benvenuta in Italia!", en: "Welcome to Italy!" },
          { es: "Vai a presentarti ai vicini.", en: "Go and introduce yourself to the neighbors." },
          { es: "Ricordati di timbrare.", en: "Remember to stamp your ticket." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I put the plastic in the wrong bin.", answer: "Ho messo la plastica nel bidone sbagliato.", altAnswers: ["Ho buttato la plastica nel bidone sbagliato."], explanation: "\"Il bidone\" = bin." },
          { type: "listen-choose", audio: "Vai a presentarti, magari con dei biscotti.", question: "What does Davide suggest?", options: ["Introducing herself to the neighbors with cookies.", "Calling the police.", "Moving to another building.", "Ignoring the note."], correctIndex: 0, explanation: "\"Presentarsi\" = to introduce oneself." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have an endless list of things to do.", answer: "Ho una lista infinita di cose da fare.", altAnswers: ["Ho un elenco infinito di cose da fare."], explanation: "\"Cose da fare\" = things to do." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have eight days from your arrival.", answer: "Hai otto giorni dall'arrivo.", altAnswers: ["Hai otto giorni dal tuo arrivo.", "Ha otto giorni dall'arrivo."], explanation: "\"Da\" + \"l'arrivo\" → \"dall'arrivo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bring your passport.", answer: "Porta il passaporto.", altAnswers: ["Porti il passaporto.", "Porta il tuo passaporto."], explanation: "Italian often uses the article, not \"tuo\", with personal things." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Welcome to Italy!", answer: "Benvenuta in Italia!", altAnswers: ["Benvenuto in Italia!", "Benvenuti in Italia!"], explanation: "\"Benvenuta\" to a woman." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You use it for everything.", answer: "Lo usi per tutto.", altAnswers: ["Si usa per tutto."], explanation: "\"Lo\" = it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[First of all], the tax code.", sentence: "___ il codice fiscale.", answer: "Prima di tutto", altAnswers: ["Innanzitutto", "Per prima cosa"], explanation: "\"Prima di tutto\" = first of all." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Remember] to stamp your ticket.", sentence: "___ di timbrare.", answer: "Ricordati", explanation: "\"Ricordarsi di\" = to remember to." },
      { type: "word-order", prompt: "Put the words in order to say: The neighbor left me a note on the door.", words: ["La", "vicina", "mi", "ha", "lasciato", "un", "biglietto", "sulla", "porta."], translation: "The neighbor left me a note on the door.", explanation: "\"Il biglietto\" = note, also ticket." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "le pratiche", right: "the paperwork" },
          { left: "il permesso di soggiorno", right: "the residence permit" },
          { left: "il conto corrente", right: "the checking account" },
          { left: "il bidone", right: "the bin" },
          { left: "i vicini", right: "the neighbors" },
        ],
        explanation: "First-week vocabulary.",
      },
      { type: "dictation", audio: "Vorrei aprire un conto.", explanation: "\"Aprire\": one p." },
      { type: "speak", text: "Piacere, sono Anna, la nuova vicina del terzo piano.", prompt: "Say it in Italian: Nice to meet you, I'm Anna, the new neighbor on the third floor.", tip: "Pia-CE-re: \"ce\" sounds like \"che\" in chess.", explanation: "\"Del terzo piano\" = from the third floor." },
    ],
  },
];

export const IT_CULTURE_U10_WRITING: WriteExercise = {
  type: "write",
  prompt: "You've just moved to an Italian city. Write an email to an Italian friend about your first week: what paperwork you did, a problem you had (with transport, the post office, the neighbors or the building) and what you still have to do.",
  minWords: 60,
  maxWords: 150,
  rubric: [
    "Describes at least two practical tasks with the passato prossimo",
    "Tells a small problem and how it went",
    "Says what's still to do (\"devo ancora\", \"mi serve\")",
    "Uses at least three words from the unit (for example \"codice fiscale\", \"timbrare\", \"bolletta\", \"condominio\")",
  ],
  modelAnswer: "Ciao Giulia,\nla prima settimana a Torino è stata intensa! Lunedì sono andato all'Agenzia delle Entrate e ho chiesto il codice fiscale: è stato facile. Poi ho aperto un conto in banca e ho preso un numero di telefono italiano.\nMercoledì ho preso una multa sull'autobus perché non avevo timbrato il biglietto. Che rabbia! Adesso ho l'abbonamento mensile.\nI vicini sono simpatici, ma ieri la signora del secondo piano mi ha spiegato la raccolta differenziata per mezz'ora.\nDevo ancora scegliere il medico di base e andare in posta per il permesso di soggiorno. Mi aiuti?\nUn abbraccio,\nTom",
  explanation: "Use the passato prossimo for tasks done (\"ho chiesto\", \"ho aperto\") and the trapassato for what had happened before (\"non avevo timbrato\"). \"Devo ancora\" + infinitive = I still have to.",
};
