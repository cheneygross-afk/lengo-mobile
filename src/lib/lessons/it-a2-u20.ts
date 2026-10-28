// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u20.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 20: Indefinites and Negatives. Qualcuno, qualcosa,
// qualche, nessuno, niente, ogni, tutti / tutto, alcuni, double negatives,
// né ... né and neanche / nemmeno / neppure.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U20: Lesson[] = [
  {
    slug: "a2-someone-something",
    level: "IT-A2",
    number: 1,
    title: "Someone, Something",
    summary: "Use qualcuno, qualcosa, qualcosa di nuovo, qualcosa da bere, and qualche + singular.",
    duration: "15 min",
    sections: [
      {
        heading: "Qualcuno, qualcosa",
        body: [
          "\"Qualcuno\" = someone, anyone (in questions). \"Qualcosa\" = something, anything (in questions). Both take a singular verb: \"Qualcuno ha chiamato\" (someone called), \"Qualcosa non va\" (something's wrong).",
          "\"C'è qualcuno?\" (is anyone there?) and \"Vuoi qualcosa?\" (do you want anything?) are everyday questions.",
        ],
        examples: [
          { es: "C'è qualcuno?", en: "Is anyone there?" },
          { es: "Qualcuno ha lasciato la porta aperta.", en: "Someone left the door open." },
          { es: "Vuoi qualcosa?", en: "Do you want anything?" },
          { es: "Qualcosa non va con la macchina.", en: "Something's wrong with the car." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone left the door open.", answer: "Qualcuno ha lasciato la porta aperta.", explanation: "\"Qualcuno\" + singular verb." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you want [anything]?", sentence: "Vuoi ___?", answer: "qualcosa", explanation: "In questions \"qualcosa\" = anything." },
        ],
      },
      {
        heading: "Qualcosa di, qualcosa da",
        body: [
          "Add an adjective with \"di\": \"qualcosa di nuovo\" (something new), \"qualcosa di buono\", \"qualcosa di strano\". The adjective stays masculine. Add a verb with \"da\": \"qualcosa da bere\" (something to drink), \"qualcosa da fare\".",
          "The same goes for \"niente\": \"niente di grave\", \"niente da fare\".",
        ],
        examples: [
          { es: "Ho cucinato qualcosa di buono.", en: "I've cooked something good." },
          { es: "Vuoi qualcosa da bere?", en: "Do you want something to drink?" },
          { es: "C'è qualcosa di strano in questa storia.", en: "There's something strange about this story." },
          { es: "Raccontami qualcosa di nuovo!", en: "Tell me something new!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want something to drink? (to a friend)", answer: "Vuoi qualcosa da bere?", explanation: "\"Qualcosa da\" + infinitive." },
          { type: "multiple-choice", question: "How do you say I've cooked something good?", options: ["Ho cucinato qualcosa di buono.", "Ho cucinato qualcosa buono.", "Ho cucinato qualcosa di buona.", "Ho cucinato qualcosa da buono."], correctIndex: 0, explanation: "\"Qualcosa di\" + masculine adjective." },
        ],
      },
      {
        heading: "Qualche + singular",
        body: [
          "\"Qualche\" means some, a few, but it always takes a singular noun and verb: \"qualche giorno\" (a few days), \"qualche volta\" (sometimes), \"qualche amico è venuto\" (a few friends came).",
          "It never changes and is only used with things you can count.",
        ],
        examples: [
          { es: "Resto a Roma qualche giorno.", en: "I'm staying in Rome for a few days." },
          { es: "Qualche volta vado in ufficio in bici.", en: "Sometimes I go to the office by bike." },
          { es: "Qualche amico è arrivato in ritardo.", en: "A few friends arrived late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm staying in Rome for a few days.", answer: "Resto a Roma qualche giorno.", altAnswers: ["Rimango a Roma qualche giorno.", "Resto a Roma per qualche giorno.", "Rimango a Roma per qualche giorno."], explanation: "\"Qualche\" + singular \"giorno\"." },
          { type: "listen-choose", audio: "Qualche volta vado in ufficio in bici.", question: "How often does he cycle to work?", options: ["sometimes", "every day", "never", "once"], correctIndex: 0, explanation: "\"Qualche volta\" = sometimes." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is anyone there?", answer: "C'è qualcuno?", explanation: "\"Qualcuno\" in a question = anyone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Something's wrong with the car.", answer: "Qualcosa non va con la macchina.", altAnswers: ["C'è qualcosa che non va con la macchina."], explanation: "\"Qualcosa\" + singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tell me something new! (to a friend)", answer: "Raccontami qualcosa di nuovo!", altAnswers: ["Dimmi qualcosa di nuovo!"], explanation: "\"Qualcosa di\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A few friends arrived late.", answer: "Qualche amico è arrivato in ritardo.", altAnswers: ["Alcuni amici sono arrivati in ritardo."], explanation: "\"Qualche\" + singular noun and verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's something strange about this story.", answer: "C'è qualcosa di strano in questa storia.", explanation: "\"Qualcosa di strano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Has anyone seen my keys?", answer: "Qualcuno ha visto le mie chiavi?", altAnswers: ["Qualcuno ha visto le chiavi?"], explanation: "\"Qualcuno\" + singular verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [something to do] this afternoon.", sentence: "Ho ___ oggi pomeriggio.", answer: "qualcosa da fare", explanation: "\"Qualcosa da\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Sometimes] we eat out.", sentence: "___ mangiamo fuori.", answer: "Qualche volta", altAnswers: ["A volte"], explanation: "\"Qualche volta\" = sometimes." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [a few] questions.", sentence: "Ho ___ domanda.", answer: "qualche", explanation: "\"Qualche\" + singular \"domanda\"." },
      { type: "word-order", prompt: "Put the words in order to say: Do you want something to drink?", words: ["Vuoi", "qualcosa", "da", "bere?"], translation: "Do you want something to drink?", explanation: "\"Qualcosa da\" + infinitive." },
      { type: "dictation", audio: "Qualcuno ha chiamato? Ho sentito qualcosa.", explanation: "\"Qualcuno\", \"qualcosa\": singular." },
      { type: "speak", text: "Ho fame: c'è qualcosa di buono da mangiare?", prompt: "Say it in Italian: I'm hungry: is there anything good to eat?", tip: "\"Qualcosa di buono da mangiare\": \"di\" for the adjective, \"da\" for the verb.", explanation: "\"Di\" + adjective, \"da\" + infinitive." },
    ],
  },
  {
    slug: "a2-nobody-nothing",
    level: "IT-A2",
    number: 2,
    title: "Nobody, Nothing: Double Negatives",
    summary: "Say non c'è nessuno, non ho fatto niente, non vado mai, non abito più qui, and nessuno è venuto.",
    duration: "15 min",
    sections: [
      {
        heading: "Non ... nessuno, non ... niente",
        body: [
          "Italian negatives come in pairs: \"non\" before the verb, and the negative word after it. \"Non c'è nessuno\" (there's nobody there), \"Non ho fatto niente\" (I didn't do anything). In English that's a double negative; in Italian it's required.",
          "\"Nulla\" = \"niente\", a little more formal.",
        ],
        examples: [
          { es: "Non c'è nessuno a casa.", en: "There's nobody at home." },
          { es: "Non ho fatto niente!", en: "I didn't do anything!" },
          { es: "Non conosco nessuno qui.", en: "I don't know anyone here." },
          { es: "Non è successo nulla.", en: "Nothing happened." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know anyone here.", answer: "Non conosco nessuno qui.", altAnswers: ["Qui non conosco nessuno."], explanation: "\"Non\" + verb + \"nessuno\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [didn't do anything]!", sentence: "___!", answer: "Non ho fatto niente", altAnswers: ["Non ho fatto nulla"], explanation: "\"Non\" + verb + \"niente\"." },
        ],
      },
      {
        heading: "Non ... mai, non ... più",
        body: [
          "\"Non ... mai\" = never: \"non vado mai al cinema\". \"Non ... più\" = no longer, not any more: \"non abito più qui\", \"non c'è più pane\". In the passato prossimo, \"mai\" and \"più\" usually go between the auxiliary and the participle: \"non sono mai stato a Venezia\".",
        ],
        examples: [
          { es: "Non vado mai al cinema.", en: "I never go to the cinema." },
          { es: "Non sono mai stata a Venezia.", en: "I've never been to Venice." },
          { es: "Non abito più qui.", en: "I don't live here any more." },
          { es: "Non c'è più latte.", en: "There's no milk left." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never been to Venice. (a woman speaking)", answer: "Non sono mai stata a Venezia.", explanation: "\"Mai\" between \"sono\" and \"stata\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't live here any more.", answer: "Non abito più qui.", altAnswers: ["Non vivo più qui.", "Non abito più qua."], explanation: "\"Non ... più\" = not any more." },
        ],
      },
      {
        heading: "Negative word first",
        body: [
          "If the negative word comes before the verb, drop \"non\": \"Nessuno è venuto\" (nobody came), \"Niente è cambiato\" (nothing has changed), \"Mai!\". Both orders are fine: \"Non è venuto nessuno\" = \"Nessuno è venuto\".",
          "\"Nessuno\" before a noun works like \"un\" and stays singular: \"nessun problema\", \"nessuna idea\".",
        ],
        examples: [
          { es: "Nessuno è venuto alla festa.", en: "Nobody came to the party." },
          { es: "Niente è cambiato.", en: "Nothing has changed." },
          { es: "Nessun problema!", en: "No problem!" },
          { es: "Non ho nessuna idea.", en: "I have no idea." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody came to the party.", answer: "Nessuno è venuto alla festa.", altAnswers: ["Non è venuto nessuno alla festa.", "Alla festa non è venuto nessuno."], explanation: "\"Nessuno\" first → no \"non\"." },
          { type: "multiple-choice", question: "How do you say nothing has changed?", options: ["Niente è cambiato.", "Niente non è cambiato.", "Non niente è cambiato.", "Nessuno è cambiato."], correctIndex: 0, explanation: "Negative word first → no \"non\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's nobody at home.", answer: "Non c'è nessuno a casa.", altAnswers: ["A casa non c'è nessuno."], explanation: "\"Non c'è nessuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I never go to the cinema.", answer: "Non vado mai al cinema.", explanation: "\"Non ... mai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no milk left.", answer: "Non c'è più latte.", altAnswers: ["Non c'è più il latte."], explanation: "\"Non ... più\" = no more." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nothing happened.", answer: "Non è successo niente.", altAnswers: ["Non è successo nulla.", "Niente è successo."], explanation: "\"Non\" + verb + \"niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No problem!", answer: "Nessun problema!", altAnswers: ["Nessun problema."], explanation: "\"Nessun\" before a masculine noun, like \"un\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody called me.", answer: "Nessuno mi ha chiamato.", altAnswers: ["Non mi ha chiamato nessuno.", "Nessuno mi ha chiamata.", "Non mi ha chiamata nessuno."], explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have [no idea].", sentence: "Non ho ___.", answer: "nessuna idea", altAnswers: ["idea"], explanation: "\"Nessuna\" + feminine singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [have never eaten] sushi.", sentence: "Non ___ il sushi.", answer: "abbiamo mai mangiato", explanation: "\"Mai\" between auxiliary and participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Nothing has changed].", sentence: "___.", answer: "Niente è cambiato", altAnswers: ["Non è cambiato niente", "Nulla è cambiato", "Non è cambiato nulla"], explanation: "Negative first → no \"non\"." },
      { type: "word-order", prompt: "Put the words in order to say: I don't know anyone here.", words: ["Non", "conosco", "nessuno", "qui."], translation: "I don't know anyone here.", explanation: "\"Non\" + verb + \"nessuno\"." },
      { type: "listen-choose", audio: "Non sono mai stato in Sicilia.", question: "What does he say?", options: ["He's never been to Sicily.", "He's no longer in Sicily.", "He's always been to Sicily.", "He's going to Sicily."], correctIndex: 0, explanation: "\"Non ... mai\" = never." },
      { type: "speak", text: "Non c'è nessuno e non c'è più niente da mangiare!", prompt: "Say it in Italian: There's nobody here and there's nothing left to eat!", tip: "Stress \"più\" and \"niente\".", explanation: "Several negatives with one \"non\" each clause." },
    ],
  },
  {
    slug: "a2-every-all-some",
    level: "IT-A2",
    number: 3,
    title: "Every, All, Some",
    summary: "Use ogni + singular, tutti i giorni, tutto il giorno, ognuno, and alcuni / alcune.",
    duration: "15 min",
    sections: [
      {
        heading: "Ogni + singular",
        body: [
          "\"Ogni\" (every) never changes and takes a singular noun: \"ogni giorno\", \"ogni settimana\", \"ogni volta che\" (every time). \"Tutti i giorni\" means the same as \"ogni giorno\", but is plural.",
          "\"Ognuno\" (each one, everyone) is a pronoun with a singular verb: \"Ognuno porta qualcosa\" (everyone brings something).",
        ],
        examples: [
          { es: "Vado in palestra ogni giorno.", en: "I go to the gym every day." },
          { es: "Ogni volta che piove, il treno è in ritardo.", en: "Every time it rains, the train is late." },
          { es: "Ognuno porta qualcosa da mangiare.", en: "Everyone brings something to eat." },
          { es: "Ci sentiamo tutti i giorni.", en: "We talk every day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every time it rains, the train is late.", answer: "Ogni volta che piove, il treno è in ritardo.", altAnswers: ["Ogni volta che piove il treno è in ritardo.", "Ogni volta che piove, il treno arriva in ritardo."], explanation: "\"Ogni\" + singular." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Everyone brings] something to eat.", sentence: "___ qualcosa da mangiare.", answer: "Ognuno porta", explanation: "\"Ognuno\" + singular verb." },
        ],
      },
      {
        heading: "Tutto, tutti",
        body: [
          "\"Tutto\" + article + noun = the whole: \"tutto il giorno\" (all day), \"tutta la notte\". \"Tutti\" + article + plural = all, every: \"tutti i giorni\", \"tutte le sere\".",
          "Alone: \"tutto\" = everything (singular verb: \"tutto va bene\"), \"tutti\" = everyone (plural verb: \"tutti sono stanchi\").",
        ],
        examples: [
          { es: "Ho dormito tutto il giorno.", en: "I slept all day." },
          { es: "Esce tutte le sere.", en: "She goes out every evening." },
          { es: "Tutto va bene.", en: "Everything's fine." },
          { es: "Tutti sono stanchi dopo la gita.", en: "Everyone's tired after the trip." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I slept all day.", answer: "Ho dormito tutto il giorno.", altAnswers: ["Ho dormito tutta la giornata."], explanation: "\"Tutto il giorno\" = all day." },
          { type: "multiple-choice", question: "How do you say everyone's tired?", options: ["Tutti sono stanchi.", "Tutto è stanco.", "Ogni sono stanchi.", "Tutti è stanco."], correctIndex: 0, explanation: "\"Tutti\" = everyone, plural verb." },
        ],
      },
      {
        heading: "Alcuni, alcune",
        body: [
          "\"Alcuni\" / \"alcune\" (some, a few) agree and take a plural noun: \"alcuni amici\", \"alcune volte\". They mean the same as \"qualche\" + singular: \"alcuni libri\" = \"qualche libro\".",
        ],
        examples: [
          { es: "Ho invitato alcuni amici.", en: "I've invited a few friends." },
          { es: "Alcune volte non risponde.", en: "Sometimes he doesn't answer." },
          { es: "Alcuni studenti sono già partiti.", en: "Some students have already left." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've invited a few friends.", answer: "Ho invitato alcuni amici.", altAnswers: ["Ho invitato qualche amico."], explanation: "\"Alcuni\" + plural, or \"qualche\" + singular." },
          { type: "listen-choose", audio: "Alcuni studenti sono già partiti.", question: "Who has left?", options: ["some students", "all the students", "no students", "one student"], correctIndex: 0, explanation: "\"Alcuni\" = some." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I go to the gym every day.", answer: "Vado in palestra ogni giorno.", altAnswers: ["Vado in palestra tutti i giorni."], explanation: "\"Ogni\" + singular, or \"tutti i\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She goes out every evening.", answer: "Esce tutte le sere.", altAnswers: ["Esce ogni sera.", "Lei esce tutte le sere.", "Lei esce ogni sera."], explanation: "\"Tutte le sere\" = \"ogni sera\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everything's fine.", answer: "Tutto va bene.", altAnswers: ["Va tutto bene.", "Tutto bene."], explanation: "\"Tutto\" + singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some students have already left.", answer: "Alcuni studenti sono già partiti.", altAnswers: ["Qualche studente è già partito."], explanation: "\"Alcuni\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It rained all night.", answer: "Ha piovuto tutta la notte.", altAnswers: ["È piovuto tutta la notte."], explanation: "\"Tutta la notte\" = all night." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone has their own opinion.", answer: "Ognuno ha la sua opinione.", altAnswers: ["Ognuno ha la propria opinione."], explanation: "\"Ognuno\" + singular verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We talk [every day].", sentence: "Ci sentiamo ___.", answer: "tutti i giorni", altAnswers: ["ogni giorno"], explanation: "Plural with \"tutti\", singular with \"ogni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Sometimes] he doesn't answer.", sentence: "___ non risponde.", answer: "Alcune volte", altAnswers: ["Qualche volta", "A volte"], explanation: "\"Alcune volte\" = \"qualche volta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've read [all the] books in the series.", sentence: "Ho letto ___ libri della serie.", answer: "tutti i", explanation: "\"Tutti\" + article + plural." },
      { type: "word-order", prompt: "Put the words in order to say: Everyone's tired after the trip.", words: ["Tutti", "sono", "stanchi", "dopo", "la", "gita."], translation: "Everyone's tired after the trip.", explanation: "\"Tutti\" + plural verb." },
      { type: "dictation", audio: "Ogni mattina bevo un caffè e leggo il giornale.", explanation: "\"Ogni\" + singular." },
      { type: "speak", text: "Lavoro tutto il giorno, ma ogni sera esco con alcuni amici.", prompt: "Say it in Italian: I work all day, but every evening I go out with some friends.", tip: "\"Tutto il giorno\" (all day) vs \"ogni sera\" (every evening).", explanation: "\"Tutto il\", \"ogni\", \"alcuni\"." },
    ],
  },
  {
    slug: "a2-neither-nor",
    level: "IT-A2",
    number: 4,
    title: "Neither, Nor, Not Even",
    summary: "Use né ... né (non mi piace né il tè né il caffè), neanche io and nemmeno lui.",
    duration: "15 min",
    sections: [
      {
        heading: "Né ... né",
        body: [
          "\"Né ... né\" = neither ... nor. After the verb, keep \"non\": \"Non mi piace né il tè né il caffè\". At the start of the sentence, no \"non\", and the verb is usually plural: \"Né Marco né Luca sono venuti\".",
          "Note the accent: \"né\" (nor) is not \"ne\" (of it).",
        ],
        examples: [
          { es: "Non mi piace né il tè né il caffè.", en: "I like neither tea nor coffee." },
          { es: "Non ho né tempo né soldi.", en: "I have neither time nor money." },
          { es: "Né Marco né Luca sono venuti.", en: "Neither Marco nor Luca came." },
          { es: "Non parla né inglese né tedesco.", en: "He speaks neither English nor German." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have neither time nor money.", answer: "Non ho né tempo né soldi.", explanation: "\"Non\" + verb + \"né ... né\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Neither Marco nor Luca] came.", sentence: "___ sono venuti.", answer: "Né Marco né Luca", explanation: "At the start: no \"non\", plural verb." },
        ],
      },
      {
        heading: "Neanche io, nemmeno lui",
        body: [
          "\"Neanche\", \"nemmeno\" and \"neppure\" all mean not either, neither or not even. To agree with a negative: \"Non mi piace.\" – \"Neanche a me.\" \"Non vado.\" – \"Nemmeno io.\" (\"Anche io\" agrees with a positive.)",
          "Before \"io\", \"neanche\" often shortens: \"neanch'io\".",
        ],
        examples: [
          { es: "Non ho fame. – Neanch'io.", en: "I'm not hungry. – Me neither." },
          { es: "Non mi piace il jazz. – Neanche a me.", en: "I don't like jazz. – Me neither." },
          { es: "Lui non viene, e nemmeno lei.", en: "He isn't coming, and neither is she." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not hungry. – Me neither.", answer: "Non ho fame. – Neanch'io.", altAnswers: ["Non ho fame. – Neanche io.", "Non ho fame. – Nemmeno io.", "Non ho fame. – Neppure io."], explanation: "\"Neanch'io\" agrees with a negative." },
          { type: "multiple-choice", question: "Someone says \"Non mi piace il pesce\". You don't like it either. What do you say?", options: ["Neanche a me.", "Neanch'io.", "Anche a me.", "Neanche mi."], correctIndex: 0, explanation: "\"Mi piace\" → \"a me\": \"neanche a me\"." },
        ],
      },
      {
        heading: "Not even",
        body: [
          "With a verb, \"neanche\" or \"nemmeno\" means not even, and \"non\" stays: \"Non mi ha neanche salutato\" (he didn't even say hello). \"Neanche per sogno!\" means no way, not in your dreams.",
        ],
        examples: [
          { es: "Non mi ha neanche salutato.", en: "He didn't even say hello to me." },
          { es: "Non ho nemmeno un euro.", en: "I haven't even got one euro." },
          { es: "Prestarti la macchina? Neanche per sogno!", en: "Lend you my car? No way!" },
          { es: "Non ci ho neppure pensato.", en: "I didn't even think about it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He didn't even say hello to me.", answer: "Non mi ha neanche salutato.", altAnswers: ["Non mi ha nemmeno salutato.", "Non mi ha neppure salutato.", "Non mi ha neanche salutata.", "Non mi ha nemmeno salutata."], explanation: "\"Non\" + \"neanche\" between auxiliary and participle." },
          { type: "listen-choose", audio: "Prestarti la macchina? Neanche per sogno!", question: "What does he mean?", options: ["No way!", "Maybe tomorrow.", "Yes, of course.", "I don't have a car."], correctIndex: 0, explanation: "\"Neanche per sogno\" = no way." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I like neither tea nor coffee.", answer: "Non mi piace né il tè né il caffè.", altAnswers: ["Non mi piacciono né il tè né il caffè."], explanation: "\"Non\" + verb + \"né ... né\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He speaks neither English nor German.", answer: "Non parla né inglese né tedesco.", altAnswers: ["Lui non parla né inglese né tedesco.", "Non parla né l'inglese né il tedesco."], explanation: "\"Né ... né\" after the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't like jazz. – Me neither.", answer: "Non mi piace il jazz. – Neanche a me.", altAnswers: ["Non mi piace il jazz. – Nemmeno a me.", "Non mi piace il jazz. – Neppure a me."], explanation: "\"A me\" because of \"mi piace\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He isn't coming, and neither is she.", answer: "Lui non viene, e nemmeno lei.", altAnswers: ["Lui non viene, e neanche lei.", "Lui non viene e nemmeno lei.", "Lui non viene e neanche lei."], explanation: "\"Nemmeno\" = neither." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't even got one euro.", answer: "Non ho nemmeno un euro.", altAnswers: ["Non ho neanche un euro.", "Non ho neppure un euro."], explanation: "\"Non\" + verb + \"nemmeno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Neither my brother nor my sister lives in Italy.", answer: "Né mio fratello né mia sorella vivono in Italia.", altAnswers: ["Né mio fratello né mia sorella abitano in Italia.", "Né mio fratello né mia sorella vive in Italia."], explanation: "\"Né ... né\" first: no \"non\", usually a plural verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm not going. – [Me neither].", sentence: "Non ci vado. – ___.", answer: "Neanch'io", altAnswers: ["Neanche io", "Nemmeno io", "Neppure io"], explanation: "Agreeing with a negative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [didn't even] think about it.", sentence: "Non ci ho ___ pensato.", answer: "neanche", altAnswers: ["nemmeno", "neppure"], explanation: "Between auxiliary and participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Lend you my car? [No way]!", sentence: "Prestarti la macchina? ___!", answer: "Neanche per sogno", explanation: "\"Neanche per sogno\" = no way." },
      { type: "word-order", prompt: "Put the words in order to say: I have neither time nor money.", words: ["Non", "ho", "né", "tempo", "né", "soldi."], translation: "I have neither time nor money.", explanation: "\"Né ... né\" after the verb." },
      { type: "dictation", audio: "Non ho né fame né sete. Neanche tu?", explanation: "\"Né ... né\", then \"neanche\"." },
      { type: "speak", text: "Non mi piace né il calcio né il tennis. E a te? Neanche a me!", prompt: "Say it in Italian: I like neither football nor tennis. And you? Me neither!", tip: "\"Né\" has a closed é: nay, short.", explanation: "\"Né ... né\" and \"neanche a me\"." },
    ],
  },
  {
    slug: "a2-drill-negatives",
    level: "IT-A2",
    number: 5,
    title: "Drill: Double Negatives",
    summary: "High-repetition practice of negative answers: non ... nessuno, niente, mai, più, né ... né.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Answer no",
        body: [
          "\"Non\" before the verb, negative word after. Negative word first → no \"non\".",
        ],
        examples: [
          { es: "Hai visto qualcuno? No, non ho visto nessuno.", en: "Did you see anyone? No, I didn't see anyone." },
          { es: "Hai mangiato qualcosa? No, non ho mangiato niente.", en: "Did you eat anything? No, I didn't eat anything." },
          { es: "Vai spesso a teatro? No, non ci vado mai.", en: "Do you often go to the theatre? No, I never go." },
          { es: "Fumi ancora? No, non fumo più.", en: "Do you still smoke? No, I don't smoke any more." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, I didn't see anyone.", answer: "No, non ho visto nessuno.", explanation: "\"Non\" + verb + \"nessuno\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, I don't smoke any more.", answer: "No, non fumo più.", explanation: "\"Non ... più\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, I didn't eat anything.", answer: "No, non ho mangiato niente.", altAnswers: ["No, non ho mangiato nulla."], explanation: "\"Non\" + verb + \"niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, I never go there.", answer: "No, non ci vado mai.", explanation: "\"Ci\" before the verb; \"mai\" after." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody knows.", answer: "Nessuno lo sa.", altAnswers: ["Non lo sa nessuno."], explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't bought anything.", answer: "Non ho comprato niente.", altAnswers: ["Non ho comprato nulla."], explanation: "\"Non ... niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've never been to Japan.", answer: "Non siamo mai stati in Giappone.", altAnswers: ["Non siamo mai state in Giappone."], explanation: "\"Mai\" between \"siamo\" and \"stati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's nothing in the fridge.", answer: "Non c'è niente nel frigo.", altAnswers: ["Nel frigo non c'è niente.", "Non c'è niente in frigo.", "Non c'è nulla nel frigo."], explanation: "\"Non c'è niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She doesn't work here any more.", answer: "Non lavora più qui.", altAnswers: ["Lei non lavora più qui.", "Non lavora più qua."], explanation: "\"Non ... più\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody answered.", answer: "Nessuno ha risposto.", altAnswers: ["Non ha risposto nessuno."], explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't want either the meat or the fish.", answer: "Non voglio né la carne né il pesce.", explanation: "\"Non ... né ... né\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [don't understand anything]!", sentence: "___!", answer: "Non capisco niente", altAnswers: ["Non capisco nulla"], explanation: "\"Non ... niente\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There's no] bread [left].", sentence: "___ pane.", answer: "Non c'è più", explanation: "\"Non c'è più\" = there's no more." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [never] says thank you.", sentence: "Non dice ___ grazie.", answer: "mai", explanation: "\"Non ... mai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [haven't told anyone].", sentence: "Non l'ho ___.", answer: "detto a nessuno", explanation: "\"Dire a nessuno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Nothing] is free.", sentence: "___ è gratis.", answer: "Niente", altAnswers: ["Nulla"], explanation: "Negative first → no \"non\"." },
      { type: "word-order", prompt: "Put the words in order to say: We've never been to Japan.", words: ["Non", "siamo", "mai", "stati", "in", "Giappone."], translation: "We've never been to Japan.", explanation: "\"Mai\" between auxiliary and participle." },
      { type: "word-order", prompt: "Put the words in order to say: Nobody answered.", words: ["Nessuno", "ha", "risposto."], translation: "Nobody answered.", explanation: "\"Nessuno\" first, no \"non\". At the end it needs \"non\": \"Non ha risposto nessuno\"." },
      { type: "multiple-choice", question: "\"Hai sentito qualcosa?\" Which is the right answer?", options: ["No, non ho sentito niente.", "No, ho sentito niente.", "No, non ho sentito qualcosa.", "No, niente non ho sentito."], correctIndex: 0, explanation: "\"Non\" + verb + \"niente\"." },
      { type: "dictation", audio: "Non ho visto nessuno e non ho sentito niente.", explanation: "Two double negatives." },
      { type: "speak", text: "No, non ho mai fumato e non bevo più alcol.", prompt: "Say it in Italian: No, I've never smoked and I don't drink alcohol any more.", tip: "\"Mai\" and \"più\" both follow the verb.", explanation: "\"Non ... mai\", \"non ... più\"." },
    ],
  },
  {
    slug: "a2-contrast-ogni-tutti",
    level: "IT-A2",
    number: 6,
    title: "Contrast Clinic: Ogni or Tutti? Qualche or Alcuni?",
    summary: "Pairs that mean the same with different grammar: ogni giorno / tutti i giorni, qualche libro / alcuni libri.",
    duration: "15 min",
    sections: [
      {
        heading: "Ogni giorno, tutti i giorni",
        body: [
          "Same meaning, different shape. \"Ogni\" + singular, no article: \"ogni giorno\", \"ogni studente\". \"Tutti\" / \"tutte\" + article + plural: \"tutti i giorni\", \"tutti gli studenti\", \"tutte le settimane\".",
          "The verb follows: \"ogni studente ha un libro\", \"tutti gli studenti hanno un libro\".",
        ],
        examples: [
          { es: "Ogni studente ha un tablet.", en: "Every student has a tablet." },
          { es: "Tutti gli studenti hanno un tablet.", en: "All the students have a tablet." },
          { es: "Ogni settimana chiamo mia madre.", en: "I call my mother every week." },
          { es: "Tutte le settimane chiamo mia madre.", en: "I call my mother every week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"tutti\".", source: "All the students have a tablet.", answer: "Tutti gli studenti hanno un tablet.", explanation: "\"Tutti gli\" + plural + plural verb." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"ogni\".", source: "Every student has a tablet.", answer: "Ogni studente ha un tablet.", explanation: "\"Ogni\" + singular + singular verb." },
        ],
      },
      {
        heading: "Qualche libro, alcuni libri",
        body: [
          "Again, same meaning: \"qualche\" + singular (\"qualche libro\"), \"alcuni\" / \"alcune\" + plural (\"alcuni libri\", \"alcune ragazze\"). Choose one and follow it through: \"qualche ragazza è venuta\" / \"alcune ragazze sono venute\".",
        ],
        examples: [
          { es: "Ho comprato qualche libro.", en: "I bought a few books." },
          { es: "Ho comprato alcuni libri.", en: "I bought a few books." },
          { es: "Qualche ragazza è venuta in bici.", en: "A few girls came by bike." },
          { es: "Alcune ragazze sono venute in bici.", en: "A few girls came by bike." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"alcune\".", source: "A few girls came by bike.", answer: "Alcune ragazze sono venute in bici.", altAnswers: ["Alcune ragazze sono venute in bicicletta."], explanation: "\"Alcune\" + feminine plural, plural verb." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"qualche\".", source: "I bought a few books.", answer: "Ho comprato qualche libro.", explanation: "\"Qualche\" + singular." },
        ],
      },
      {
        heading: "Tutto il giorno vs ogni giorno",
        body: [
          "These do differ. \"Tutto il giorno\" = the whole day, all day long. \"Ogni giorno\" = every day. \"Lavoro tutto il giorno\" (I work all day) vs \"Lavoro ogni giorno\" (I work every day).",
        ],
        examples: [
          { es: "Lavoro tutto il giorno.", en: "I work all day." },
          { es: "Lavoro ogni giorno.", en: "I work every day." },
          { es: "Ha piovuto tutta la settimana.", en: "It rained all week." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "How do you say it rained all week?", options: ["Ha piovuto tutta la settimana.", "Ha piovuto ogni settimana.", "Ha piovuto tutte le settimane.", "Ha piovuto qualche settimana."], correctIndex: 0, explanation: "\"Tutta la\" + singular = the whole." },
          { type: "listen-choose", audio: "Lavoro tutto il giorno.", question: "What does he say?", options: ["I work all day.", "I work every day.", "I work some days.", "I don't work during the day."], correctIndex: 0, explanation: "\"Tutto il giorno\" = all day." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"ogni\".", source: "I call my mother every week.", answer: "Ogni settimana chiamo mia madre.", altAnswers: ["Chiamo mia madre ogni settimana.", "Ogni settimana chiamo mia mamma.", "Chiamo mia mamma ogni settimana."], explanation: "\"Ogni\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"tutte\".", source: "I call my mother every week.", answer: "Tutte le settimane chiamo mia madre.", altAnswers: ["Chiamo mia madre tutte le settimane.", "Tutte le settimane chiamo mia mamma.", "Chiamo mia mamma tutte le settimane."], explanation: "\"Tutte le\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work all day.", answer: "Lavoro tutto il giorno.", altAnswers: ["Lavoro tutta la giornata."], explanation: "\"Tutto il giorno\" = the whole day." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work every day.", answer: "Lavoro ogni giorno.", altAnswers: ["Lavoro tutti i giorni."], explanation: "\"Ogni giorno\" = every day." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"qualche\".", source: "A few girls came by bike.", answer: "Qualche ragazza è venuta in bici.", altAnswers: ["Qualche ragazza è venuta in bicicletta."], explanation: "\"Qualche\" + singular noun and verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian with \"alcuni\".", source: "I bought a few books.", answer: "Ho comprato alcuni libri.", explanation: "\"Alcuni\" + plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Every child] gets a present.", sentence: "___ riceve un regalo.", answer: "Ogni bambino", explanation: "\"Ogni\" + singular, singular verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[All the children] get a present.", sentence: "___ ricevono un regalo.", answer: "Tutti i bambini", explanation: "\"Tutti i\" + plural, plural verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've seen [a few] films this month.", sentence: "Ho visto ___ film questo mese.", answer: "alcuni", explanation: "\"Film\" doesn't change in the plural: \"alcuni film\"." },
      { type: "word-order", prompt: "Put the words in order to say: All the students have a tablet.", words: ["Tutti", "gli", "studenti", "hanno", "un", "tablet."], translation: "All the students have a tablet.", explanation: "\"Tutti\" + article + plural." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Qualche amico è venuto.", "Qualche amici sono venuti.", "Alcuni amico è venuto.", "Qualche amici è venuto."], correctIndex: 0, explanation: "\"Qualche\" + singular everything." },
      { type: "dictation", audio: "Tutti i giorni prendo l'autobus, ma ogni tanto vado a piedi.", explanation: "\"Ogni tanto\" = every now and then." },
      { type: "speak", text: "Ogni giorno lavoro tutto il giorno!", prompt: "Say it in Italian: Every day I work all day!", tip: "Two different ideas: \"ogni giorno\", \"tutto il giorno\".", explanation: "Every day vs the whole day." },
    ],
  },
  {
    slug: "a2-error-hunt-indefinites",
    level: "IT-A2",
    number: 7,
    title: "Error Hunt: Indefinites",
    summary: "Find and fix the typical mistakes: non ho visto qualcuno, ho visto nessuno, ogni giorni, qualche libri, qualcosa buono.",
    duration: "15 min",
    sections: [
      {
        heading: "The negative pairs",
        body: [
          "\"*Ho visto nessuno\" is missing \"non\": \"Non ho visto nessuno\". And for I didn't see anyone, \"non ho visto qualcuno\" is the wrong idea: it means there's someone I didn't see. After \"non\", use \"nessuno\" and \"niente\".",
        ],
        examples: [
          { es: "Non ho visto nessuno.", en: "I didn't see anyone." },
          { es: "Non ho comprato niente.", en: "I didn't buy anything." },
          { es: "Non è venuto nessuno.", en: "Nobody came." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Ho visto nessuno\". Translate into Italian: I didn't see anyone.", source: "I didn't see anyone.", answer: "Non ho visto nessuno.", explanation: "\"Nessuno\" after the verb needs \"non\"." },
          { type: "translate", direction: "en-es", prompt: "Fix \"*Non ho comprato qualcosa\". Translate into Italian: I didn't buy anything.", source: "I didn't buy anything.", answer: "Non ho comprato niente.", altAnswers: ["Non ho comprato nulla."], explanation: "After \"non\": \"niente\", not \"qualcosa\"." },
        ],
      },
      {
        heading: "Singular or plural?",
        body: [
          "\"*Ogni giorni\" and \"*qualche libri\" are wrong: \"ogni\" and \"qualche\" always take a singular. \"Ogni giorno\", \"qualche libro\". If you want a plural, switch word: \"tutti i giorni\", \"alcuni libri\".",
        ],
        examples: [
          { es: "Vado a correre ogni giorno.", en: "I go running every day." },
          { es: "Ho letto qualche libro in italiano.", en: "I've read a few books in Italian." },
          { es: "Tutti sono d'accordo.", en: "Everyone agrees." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Ho letto qualche libri in italiano\". Translate into Italian: I've read a few books in Italian.", source: "I've read a few books in Italian.", answer: "Ho letto qualche libro in italiano.", altAnswers: ["Ho letto alcuni libri in italiano."], explanation: "\"Qualche\" + singular." },
          { type: "fill-blank", prompt: "Fix \"*Vado a correre ogni giorni\". Write the Italian for the bold words.", en: "I go running [every day].", sentence: "Vado a correre ___.", answer: "ogni giorno", altAnswers: ["tutti i giorni"], explanation: "\"Ogni\" + singular." },
        ],
      },
      {
        heading: "Qualcosa di, non ... più",
        body: [
          "\"*Qualcosa buono\" needs \"di\": \"qualcosa di buono\". \"*Niente nuovo\" → \"niente di nuovo\". And \"*no c'è più\": the negative before a verb is \"non\", never \"no\".",
        ],
        examples: [
          { es: "Hai qualcosa di buono da bere?", en: "Have you got anything good to drink?" },
          { es: "Niente di nuovo, tutto come sempre.", en: "Nothing new, everything as usual." },
          { es: "Non c'è più posto.", en: "There's no room left." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Hai qualcosa buono da bere?\". Translate into Italian: Have you got anything good to drink?", source: "Have you got anything good to drink?", answer: "Hai qualcosa di buono da bere?", explanation: "\"Qualcosa di\" + adjective." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Non c'è più posto.", "No c'è più posto.", "Non c'è nessuno posto.", "C'è più niente posto."], correctIndex: 0, explanation: "\"Non\" before the verb." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"*Niente nuovo, tutto come sempre\". Translate into Italian: Nothing new, everything as usual.", source: "Nothing new, everything as usual.", answer: "Niente di nuovo, tutto come sempre.", altAnswers: ["Niente di nuovo, tutto come al solito.", "Nulla di nuovo, tutto come sempre."], explanation: "\"Niente di\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Nessuno non è venuto\". Translate into Italian: Nobody came.", source: "Nobody came.", answer: "Nessuno è venuto.", altAnswers: ["Non è venuto nessuno."], explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Tutti è d'accordo\". Translate into Italian: Everyone agrees.", source: "Everyone agrees.", answer: "Tutti sono d'accordo.", altAnswers: ["Sono tutti d'accordo."], explanation: "\"Tutti\" + plural verb." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ognuno hanno il suo posto\". Translate into Italian: Everyone has their own seat.", source: "Everyone has their own seat.", answer: "Ognuno ha il suo posto.", altAnswers: ["Ognuno ha il proprio posto."], explanation: "\"Ognuno\" + singular verb." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ho mai stato a Napoli\". Translate into Italian: I've never been to Naples. (a man speaking)", source: "I've never been to Naples.", answer: "Non sono mai stato a Napoli.", explanation: "\"Non ... mai\", and \"essere\" as auxiliary." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Non ho nessuni problemi\". Translate into Italian: I haven't got any problems.", source: "I haven't got any problems.", answer: "Non ho nessun problema.", altAnswers: ["Non ho problemi."], explanation: "\"Nessun\" + singular." },
      { type: "fill-blank", prompt: "Fix \"*Hai qualche domande?\". Write the Italian for the bold words.", en: "Have you got [any questions]?", sentence: "Hai ___?", answer: "qualche domanda", altAnswers: ["domande"], explanation: "\"Qualche\" + singular." },
      { type: "fill-blank", prompt: "Fix \"*Non ho visto qualcosa\". Write the Italian for the bold words.", en: "I [didn't see anything].", sentence: "___.", answer: "Non ho visto niente", altAnswers: ["Non ho visto nulla"], explanation: "After \"non\": \"niente\"." },
      { type: "fill-blank", prompt: "Fix \"*Non mi piace né il tè e il caffè\". Write the Italian for the bold words.", en: "I like [neither tea nor coffee].", sentence: "Non mi piace ___.", answer: "né il tè né il caffè", explanation: "\"Né ... né\", not \"né ... e\"." },
      { type: "word-order", prompt: "Fix \"*Ho visto nessuno\". Put the words in order to say: I didn't see anyone.", words: ["Non", "ho", "visto", "nessuno."], translation: "I didn't see anyone.", explanation: "\"Non\" + verb + \"nessuno\"." },
      { type: "multiple-choice", question: "Which sentence has a mistake?", options: ["Ogni settimane vado al mercato.", "Ogni settimana vado al mercato.", "Tutte le settimane vado al mercato.", "Qualche volta vado al mercato."], correctIndex: 0, explanation: "\"Ogni\" takes a singular: \"ogni settimana\"." },
      { type: "listen-choose", audio: "Non è successo niente di grave.", question: "What does she say?", options: ["Nothing serious happened.", "Something serious happened.", "Nobody was hurt.", "It's never serious."], correctIndex: 0, explanation: "\"Niente di grave\"." },
      { type: "dictation", audio: "Non ho visto nessuno e non ho sentito niente.", explanation: "Double negatives." },
      { type: "speak", text: "Non \"ho visto nessuno\", ma \"non ho visto nessuno\"!", prompt: "Correct the mistake out loud in Italian: Not \"ho visto nessuno\", but \"non ho visto nessuno\"!", tip: "Stress the \"non\" the second time.", explanation: "\"Nessuno\" after the verb needs \"non\"." },
    ],
  },
  {
    slug: "a2-dialogue-lab-empty-fridge",
    level: "IT-A2",
    number: 8,
    title: "Dialogue Lab: Is There Anything to Eat?",
    summary: "Flatmates find the fridge empty: non c'è niente, c'è qualcosa di dolce?, nessuno ha fatto la spesa.",
    duration: "15 min",
    sections: [
      {
        heading: "The empty fridge",
        body: [
          "Giorgio comes home hungry and opens the fridge. Everything in this scene is negative: \"non c'è niente\", \"non c'è più\", \"nessuno ha fatto la spesa\".",
        ],
        examples: [
          { es: "Ma non c'è niente in frigo!", en: "But there's nothing in the fridge!" },
          { es: "Non c'è più neanche il latte.", en: "There isn't even any milk left." },
          { es: "Chi ha finito il formaggio?", en: "Who finished the cheese?" },
          { es: "Io no! Non ho mangiato niente.", en: "Not me! I haven't eaten anything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There isn't even any milk left.", answer: "Non c'è più neanche il latte.", altAnswers: ["Non c'è neanche più il latte.", "Non c'è più nemmeno il latte."], explanation: "\"Non c'è più\" + \"neanche\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Not me! I [haven't eaten anything].", sentence: "Io no! ___.", answer: "Non ho mangiato niente", altAnswers: ["Non ho mangiato nulla"], explanation: "\"Non\" + verb + \"niente\"." },
        ],
      },
      {
        heading: "Who did the shopping?",
        body: [
          "The blame game. \"Nessuno ha fatto la spesa\" (nobody did the shopping): \"nessuno\" first, no \"non\". \"Toccava a te\" (it was your turn) and \"Ognuno fa quello che vuole\" (everyone does what they like).",
        ],
        examples: [
          { es: "Nessuno ha fatto la spesa questa settimana.", en: "Nobody did the shopping this week." },
          { es: "Toccava a te, non a me!", en: "It was your turn, not mine!" },
          { es: "Qui ognuno fa quello che vuole.", en: "Here everyone does what they like." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody did the shopping this week.", answer: "Nessuno ha fatto la spesa questa settimana.", altAnswers: ["Questa settimana nessuno ha fatto la spesa.", "Non ha fatto la spesa nessuno questa settimana."], explanation: "\"Nessuno\" first → no \"non\"." },
          { type: "listen-choose", audio: "Toccava a te, non a me!", question: "What does she say?", options: ["It was your turn, not mine!", "It's for you, not for me!", "You touched it, not me!", "It's my turn, not yours!"], correctIndex: 0, explanation: "\"Toccare a\" = to be someone's turn." },
        ],
      },
      {
        heading: "Something sweet?",
        body: [
          "A solution: \"C'è qualcosa di dolce?\" \"Qualche biscotto, forse.\" \"Ordiniamo qualcosa?\" Indefinites make the plan.",
        ],
        examples: [
          { es: "C'è almeno qualcosa di dolce?", en: "Is there at least something sweet?" },
          { es: "Forse c'è qualche biscotto nell'armadietto.", en: "Maybe there are a few biscuits in the cupboard." },
          { es: "Dai, ordiniamo qualcosa: tutti hanno fame.", en: "Come on, let's order something: everyone's hungry." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there at least something sweet?", answer: "C'è almeno qualcosa di dolce?", explanation: "\"Qualcosa di\" + adjective." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come on, let's order something: everyone's hungry.", answer: "Dai, ordiniamo qualcosa: tutti hanno fame.", altAnswers: ["Dai, ordiniamo qualcosa, tutti hanno fame.", "Dai, ordiniamo qualcosa: abbiamo tutti fame."], explanation: "Noi command; \"tutti\" + plural verb." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "But there's nothing in the fridge!", answer: "Ma non c'è niente in frigo!", altAnswers: ["Ma non c'è niente nel frigo!", "Ma non c'è nulla in frigo!", "Ma in frigo non c'è niente!"], explanation: "\"Non c'è niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who finished the cheese?", answer: "Chi ha finito il formaggio?", explanation: "Question \"chi\" + singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was your turn, not mine!", answer: "Toccava a te, non a me!", explanation: "\"Toccare a\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe there are a few biscuits in the cupboard.", answer: "Forse c'è qualche biscotto nell'armadietto.", altAnswers: ["Forse ci sono alcuni biscotti nell'armadietto.", "Forse c'è qualche biscotto nella credenza.", "Forse ci sono dei biscotti nell'armadietto."], explanation: "\"Qualche\" + singular, so \"c'è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here everyone does what they like.", answer: "Qui ognuno fa quello che vuole.", altAnswers: ["Qui ognuno fa quello che gli pare.", "Qui ognuno fa ciò che vuole."], explanation: "\"Ognuno\" + singular verb; \"quello che\" = what." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no bread or pasta.", answer: "Non c'è né pane né pasta.", altAnswers: ["Non ci sono né pane né pasta.", "Non c'è né il pane né la pasta."], explanation: "\"Non ... né ... né\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Nobody did] the shopping.", sentence: "___ la spesa.", answer: "Nessuno ha fatto", explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Is there [anything to drink]?", sentence: "C'è ___?", answer: "qualcosa da bere", explanation: "\"Qualcosa da\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm hungry. – [Me too]!", sentence: "Ho fame. – ___!", answer: "Anch'io", altAnswers: ["Anche io"], explanation: "Positive → \"anch'io\"; negative → \"neanch'io\"." },
      { type: "word-order", prompt: "Put the words in order to say: Is there at least something sweet?", words: ["C'è", "almeno", "qualcosa", "di", "dolce?"], translation: "Is there at least something sweet?", explanation: "\"Qualcosa di dolce\"." },
      { type: "multiple-choice", question: "Your flatmate says \"Non ho fatto la spesa\". You didn't either. What do you say?", options: ["Neanch'io.", "Anch'io.", "Neanche a me.", "Nessuno io."], correctIndex: 0, explanation: "Agreeing with a negative: \"neanch'io\"." },
      { type: "dictation", audio: "Non c'è più niente da mangiare. Ordiniamo una pizza?", explanation: "\"Non c'è più niente\"." },
      { type: "speak", text: "Non c'è niente in frigo e nessuno ha fatto la spesa!", prompt: "Say it in Italian: There's nothing in the fridge and nobody did the shopping!", tip: "FRI-go, short for \"frigorifero\".", explanation: "\"Non ... niente\"; \"nessuno\" first." },
    ],
  },
  {
    slug: "a2-mission-lost-and-found",
    level: "IT-A2",
    number: 9,
    title: "Real-World Mission: Lost and Found",
    summary: "Report a lost bag at a lost-property office: nessuno l'ha vista?, dentro c'era qualcosa di importante.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "At the ufficio oggetti smarriti",
        body: [
          "You've left your bag on a train. At \"l'ufficio oggetti smarriti\" (the lost-property office), say what you lost, where and when, describe it, and say what was inside. The clerk uses \"Lei\". Use the imperfetto for description: \"era nera\", \"dentro c'era\".",
        ],
        examples: [
          { es: "Buongiorno, ho perso la borsa sul treno da Firenze.", en: "Good morning, I lost my bag on the train from Florence." },
          { es: "È una borsa nera, di pelle, non molto grande.", en: "It's a black leather bag, not very big." },
          { es: "Dentro c'era qualcosa di importante: il passaporto.", en: "There was something important inside: my passport." },
          { es: "Per caso qualcuno l'ha portata qui?", en: "Has anyone brought it here, by any chance?" },
          { es: "Mi dispiace, oggi nessuno ha portato borse nere.", en: "I'm sorry, nobody has brought in any black bags today." },
          { es: "Se la trovate, mi potreste chiamare?", en: "If you find it, could you call me?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There was something important inside: my passport.", answer: "Dentro c'era qualcosa di importante: il passaporto.", altAnswers: ["Dentro c'era qualcosa di importante: il mio passaporto."], explanation: "\"Qualcosa di\" + adjective; imperfetto for description." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Has anyone brought it here, by any chance? (the bag)", answer: "Per caso qualcuno l'ha portata qui?", altAnswers: ["Qualcuno l'ha portata qui per caso?", "Per caso qualcuno l'ha portata qua?"], explanation: "\"L'ha portata\": agrees with \"la borsa\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Good morning, I lost my bag on the train from Florence.", answer: "Buongiorno, ho perso la borsa sul treno da Firenze.", altAnswers: ["Buongiorno, ho perso la mia borsa sul treno da Firenze."], explanation: "\"Perdere\" → \"ho perso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry, nobody has brought in any black bags today.", answer: "Mi dispiace, oggi nessuno ha portato borse nere.", altAnswers: ["Mi dispiace, nessuno ha portato borse nere oggi."], explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you find it, could you call me? (the bag, to the office staff)", answer: "Se la trovate, mi potreste chiamare?", altAnswers: ["Se la trovate, potreste chiamarmi?"], explanation: "Conditional \"potreste\" for a polite request." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Has nobody seen it? (the bag)", answer: "Nessuno l'ha vista?", altAnswers: ["Non l'ha vista nessuno?"], explanation: "\"L'ha vista\": agrees with \"la borsa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There wasn't any money inside.", answer: "Dentro non c'erano soldi.", altAnswers: ["Non c'erano soldi dentro.", "Dentro non c'era denaro."], explanation: "Imperfetto for description." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There were some keys and a few books.", answer: "C'erano alcune chiavi e qualche libro.", altAnswers: ["C'erano delle chiavi e qualche libro.", "C'erano alcune chiavi e alcuni libri."], explanation: "\"Alcune\" + plural; \"qualche\" + singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've looked [everywhere].", sentence: "Ho cercato ___.", answer: "dappertutto", altAnswers: ["ovunque"], explanation: "\"Dappertutto\" = everywhere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a black bag, [nothing special].", sentence: "È una borsa nera, ___.", answer: "niente di speciale", altAnswers: ["niente di particolare"], explanation: "\"Niente di\" + adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Every day] lots of people lose something.", sentence: "___ tante persone perdono qualcosa.", answer: "Ogni giorno", altAnswers: ["Tutti i giorni"], explanation: "\"Ogni\" + singular." },
      { type: "word-order", prompt: "Put the words in order to say: Has nobody seen it?", words: ["Nessuno", "l'ha", "vista?"], translation: "Has nobody seen it?", explanation: "\"Nessuno\" first; \"vista\" agrees with \"la borsa\"." },
      { type: "multiple-choice", question: "The clerk asks \"C'era qualcosa di valore dentro?\". What is she asking?", options: ["Was there anything valuable inside?", "Was there someone with you?", "Was the bag expensive?", "Did you see anyone take it?"], correctIndex: 0, explanation: "\"Qualcosa di valore\" = something valuable." },
      { type: "listen-choose", audio: "Mi dispiace, non abbiamo trovato niente. Torni domani.", question: "What does the clerk say?", options: ["They haven't found anything; come back tomorrow.", "They found the bag; come tomorrow.", "Nobody works there tomorrow.", "Call tomorrow to report it."], correctIndex: 0, explanation: "\"Non abbiamo trovato niente\"; \"torni\" = Lei command." },
      { type: "dictation", audio: "Dentro c'era qualcosa di importante.", explanation: "\"Qualcosa di\" + adjective." },
      { type: "speak", text: "Ho perso lo zaino in metro. Dentro c'era il computer e nient'altro.", prompt: "Report it in Italian: I lost my rucksack on the underground. My computer was inside, and nothing else.", tip: "\"Nient'altro\" = nothing else: nien-TAL-tro.", explanation: "Passato prossimo for the loss, imperfetto for the contents." },
    ],
  },
  {
    slug: "a2-drill-indefinites-mixed",
    level: "IT-A2",
    number: 10,
    title: "Drill: Indefinites Mixed",
    summary: "High-repetition practice mixing positives and negatives: qualcuno / nessuno, qualcosa / niente, sempre / mai.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Positive and negative",
        body: [
          "\"Qualcuno\" ↔ \"nessuno\", \"qualcosa\" ↔ \"niente\", \"sempre\" ↔ \"mai\", \"ancora\" ↔ \"non ... più\", \"anche\" ↔ \"neanche\".",
        ],
        examples: [
          { es: "C'è qualcuno? No, non c'è nessuno.", en: "Is anyone there? No, there's nobody." },
          { es: "Vai sempre in bici? No, non ci vado mai.", en: "Do you always cycle? No, I never do." },
          { es: "Abiti ancora a Roma? No, non ci abito più.", en: "Do you still live in Rome? No, I don't live there any more." },
          { es: "Io vengo. – Anch'io. / Io non vengo. – Neanch'io.", en: "I'm coming. – Me too. / I'm not coming. – Me neither." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, I don't live there any more.", answer: "No, non ci abito più.", altAnswers: ["No, non ci vivo più."], explanation: "\"Ci\" for the place; \"non ... più\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No, there's nobody.", answer: "No, non c'è nessuno.", explanation: "\"Non c'è nessuno\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone is knocking at the door.", answer: "Qualcuno bussa alla porta.", altAnswers: ["Qualcuno sta bussando alla porta."], explanation: "\"Qualcuno\" + singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody is knocking at the door.", answer: "Nessuno bussa alla porta.", altAnswers: ["Nessuno sta bussando alla porta.", "Non bussa nessuno alla porta."], explanation: "\"Nessuno\" first → no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I always eat breakfast.", answer: "Faccio sempre colazione.", altAnswers: ["Io faccio sempre colazione."], explanation: "\"Sempre\" after the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I never eat breakfast.", answer: "Non faccio mai colazione.", altAnswers: ["Io non faccio mai colazione."], explanation: "\"Non ... mai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got something for you.", answer: "Ho qualcosa per te.", explanation: "\"Qualcosa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't got anything for you.", answer: "Non ho niente per te.", altAnswers: ["Non ho nulla per te."], explanation: "\"Non ... niente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there still some coffee?", answer: "C'è ancora un po' di caffè?", altAnswers: ["C'è ancora del caffè?", "C'è ancora caffè?"], explanation: "\"Ancora\" = still." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's no coffee left.", answer: "Non c'è più caffè.", altAnswers: ["Non c'è più il caffè."], explanation: "\"Non ... più\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone has finished.", answer: "Tutti hanno finito.", altAnswers: ["Hanno finito tutti."], explanation: "\"Tutti\" + plural verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Nobody has finished].", sentence: "___.", answer: "Nessuno ha finito", altAnswers: ["Non ha finito nessuno"], explanation: "Opposite of \"tutti hanno finito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I like it. – [Me too].", sentence: "Mi piace. – ___.", answer: "Anche a me", explanation: "\"Mi piace\" → \"anche a me\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't like it. – [Me neither].", sentence: "Non mi piace. – ___.", answer: "Neanche a me", altAnswers: ["Nemmeno a me", "Neppure a me"], explanation: "Negative → \"neanche a me\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [something new] to tell you.", sentence: "Ho ___ da raccontarti.", answer: "qualcosa di nuovo", explanation: "\"Qualcosa di\" + adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Some] people never say thank you.", sentence: "___ persone non dicono mai grazie.", answer: "Alcune", explanation: "\"Alcune\" + feminine plural." },
      { type: "word-order", prompt: "Put the words in order to say: I haven't got anything for you.", words: ["Non", "ho", "niente", "per", "te."], translation: "I haven't got anything for you.", explanation: "\"Non ... niente\"." },
      { type: "word-order", prompt: "Put the words in order to say: I never eat breakfast.", words: ["Non", "faccio", "mai", "colazione."], translation: "I never eat breakfast.", explanation: "\"Non ... mai\"." },
      { type: "multiple-choice", question: "\"Hai ancora la macchina?\" – \"No, ...\". Which ending is right?", options: ["non ce l'ho più.", "non ce l'ho mai.", "non ho niente macchina.", "ho più la macchina."], correctIndex: 0, explanation: "\"Non ... più\" = not any more." },
      { type: "dictation", audio: "Qualcuno ha chiamato? No, nessuno.", explanation: "\"Qualcuno\" ↔ \"nessuno\"." },
      { type: "speak", text: "Prima uscivo sempre, adesso non esco quasi mai.", prompt: "Say it in Italian: I used to go out all the time, now I hardly ever go out.", tip: "\"Quasi mai\" = hardly ever.", explanation: "\"Sempre\" ↔ \"non ... mai\"." },
    ],
  },
];

export const IT_A2_U20_WRITING: WriteExercise = {
  type: "write",
  prompt: "You went to a party last weekend and it was a disaster. Write a message to a friend: say who came and who didn't, what there was (or wasn't) to eat and drink, and what everyone did. Use at least three double negatives and some of qualcuno, qualcosa, qualche, ogni, tutti, né ... né.",
  minWords: 50,
  maxWords: 100,
  rubric: [
    "Uses double negatives with non correctly (non c'era niente, non è venuto nessuno, non ... mai, non ... più)",
    "Drops non when the negative word comes first (nessuno è venuto)",
    "Uses qualche with a singular and tutti / alcuni with a plural",
    "Uses qualcosa di / niente di + adjective",
  ],
  modelAnswer: "Ciao Sara! La festa di Luca? Un disastro! Prima di tutto, quasi nessuno è venuto: c'erano solo Luca, sua sorella e qualche collega. Non c'era niente da mangiare, solo patatine, e non c'erano né vino né birra. Qualcuno ha messo la musica, ma nessuno ha ballato. Alle dieci non c'era più niente da bere e tutti volevano andare a casa. Io non ho parlato con nessuno di interessante. Non vado mai più a una festa di Luca! E tu, hai fatto qualcosa di bello?",
  explanation: "\"Non c'era niente\" and \"non ho parlato con nessuno\" are double negatives; \"nessuno è venuto\" and \"nessuno ha ballato\" put the negative first, so no \"non\". \"Qualche collega\" is singular, \"tutti volevano\" is plural, and \"qualcosa di bello\" adds an adjective with \"di\".",
};
