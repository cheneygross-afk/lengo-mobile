// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u21.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 21: The Impersonal Si. Si impersonale, si + essere + plural
// adjective, ci si with reflexive verbs, compound tenses, contrast with the
// si passivante, uno / la gente / tu. Conventions: docs/italian-course/authoring.md.
export const IT_B1_U21: Lesson[] = [
  {
    slug: "b1-impersonal-si",
    level: "IT-B1",
    number: 1,
    title: "One, People, You: Si",
    summary: "Talk about what people do in general with the impersonal si: in Italia si cena tardi, qui si sta bene, come si dice?, si dice che ...",
    duration: "17 min",
    sections: [
      {
        heading: "In Italia si cena tardi",
        body: [
          "To say what people in general do, Italian uses \"si\" + the third person singular: \"In Italia si cena tardi\" (in Italy people have dinner late), \"Qui si sta bene\" (it's nice here, literally one is well here), \"In questo ristorante si mangia benissimo\".",
          "English uses you, people, one or we for this. Italian \"si\" covers them all, and the verb is always singular when there's no object: \"si lavora\", \"si dorme\", \"si parte\".",
          "The classic slip is a plural verb because people feels plural: \"in Italia si cenano tardi\" is wrong. \"Non\" goes before \"si\": \"Qui non si fuma\". In Tuscany you'll also hear \"noi si va\", \"noi si mangia\" meaning we go, we eat: it's regional, so understand it but don't copy it.",
        ],
        examples: [
          { es: "In Italia si cena tardi.", en: "In Italy people have dinner late." },
          { es: "Qui si sta bene.", en: "It's nice here." },
          { es: "In questo ristorante si mangia benissimo.", en: "You eat really well in this restaurant." },
          { es: "D'estate si lavora meno.", en: "People work less in summer." },
          { es: "Da qui come si arriva alla stazione?", en: "How do you get to the station from here?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Italy people have dinner late.", answer: "In Italia si cena tardi.", altAnswers: ["In Italia si cena tardi la sera."], explanation: "\"Si\" + singular verb." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's nice here.", answer: "Qui si sta bene.", altAnswers: ["Si sta bene qui."], explanation: "\"Si sta bene\" = it's nice, you feel good." },
          { type: "listen-choose", audio: "D'estate si lavora meno.", question: "What does it mean?", options: ["People work less in summer.", "I'll work less this summer.", "He works less in summer.", "Summer jobs pay less."], correctIndex: 0, explanation: "\"Si lavora\" = people work." },
        ],
      },
      {
        heading: "Come si dice? Si dice che ...",
        body: [
          "Some \"si\" phrases are everyday tools: \"Come si dice 'spoon' in italiano?\" (how do you say ...?), \"Come si scrive?\" (how do you spell it?), \"Non si sa mai\" (you never know), \"Si vede che ...\" (you can tell that ...).",
          "\"Si dice che\" + indicative or subjunctive is they say that, it's said that: \"Si dice che il nuovo sindaco sia molto giovane\".",
        ],
        examples: [
          { es: "Come si dice 'spoon' in italiano?", en: "How do you say 'spoon' in Italian?" },
          { es: "Non si sa mai.", en: "You never know." },
          { es: "Si vede che sei stanco.", en: "You can tell you're tired." },
          { es: "Si dice che quel ristorante sia il migliore della città.", en: "They say that restaurant is the best in town." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You never know.", answer: "Non si sa mai.", explanation: "Fixed phrase." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You can tell] you're tired. (to a friend)", sentence: "___ che sei stanco.", answer: "Si vede", explanation: "\"Si vede che\" = you can tell that." },
        ],
      },
      {
        heading: "Uno, la gente, tu",
        body: [
          "Italians also use other ways to talk in general. \"Uno\" (one, someone) is common in speech: \"Uno non sa mai cosa dire\". \"La gente\" (people) takes a singular verb: \"La gente parla troppo\". And, as in English, \"tu\": \"Quando sei in Italia, mangi bene\".",
          "\"Si\" is the most neutral; \"tu\" is conversational; \"la gente\" is a bit judgmental.",
        ],
        examples: [
          { es: "Uno non sa mai cosa dire.", en: "You never know what to say." },
          { es: "La gente parla troppo.", en: "People talk too much." },
          { es: "Quando sei in Italia, mangi bene dappertutto.", en: "When you're in Italy, you eat well everywhere." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People talk too much.", answer: "La gente parla troppo.", altAnswers: ["Si parla troppo."], explanation: "\"La gente\" + singular verb." },
          { type: "multiple-choice", question: "Which is correct?", options: ["La gente dice che fa freddo.", "La gente dicono che fa freddo.", "La gente si dicono che fa freddo.", "Le genti dice che fa freddo."], correctIndex: 0, explanation: "\"La gente\" is singular." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You eat really well in this restaurant.", answer: "In questo ristorante si mangia benissimo.", altAnswers: ["In questo ristorante si mangia molto bene.", "Si mangia benissimo in questo ristorante."], explanation: "\"Si mangia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How do you get to the station from here?", answer: "Da qui come si arriva alla stazione?", altAnswers: ["Come si arriva alla stazione da qui?", "Come si va alla stazione da qui?"], explanation: "\"Si arriva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How do you say 'fork' in Italian?", answer: "Come si dice 'fork' in italiano?", altAnswers: ["Come si dice fork in italiano?"], explanation: "\"Come si dice?\"" },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People work less in summer.", answer: "D'estate si lavora meno.", altAnswers: ["In estate si lavora meno.", "Si lavora meno d'estate."], explanation: "\"Si lavora\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They say it'll rain tomorrow.", answer: "Si dice che domani pioverà.", altAnswers: ["Dicono che domani pioverà.", "Si dice che pioverà domani."], explanation: "\"Si dice che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can't smoke here.", answer: "Qui non si fuma.", altAnswers: ["Non si fuma qui.", "Qui non si può fumare."], explanation: "\"Non si fuma\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In this city [people live] well.", sentence: "In questa città ___ bene.", answer: "si vive", explanation: "\"Si vive\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[How do you spell] your name? (to a friend)", sentence: "___ il tuo nome?", answer: "Come si scrive", explanation: "\"Come si scrive?\"" },
      { type: "word-order", prompt: "Put the words in order to say: In Italy people talk a lot about food.", words: ["In", "Italia", "si", "parla", "molto", "di", "cibo."], translation: "In Italy people talk a lot about food.", explanation: "\"Si parla\" with no object." },
      { type: "multiple-choice", question: "Which means: you never know?", options: ["Non si sa mai.", "Non si sanno mai.", "Non sa mai.", "Non si conosce mai."], correctIndex: 0, explanation: "Fixed phrase: \"non si sa mai\"." },
      { type: "dictation", audio: "In montagna si dorme bene e si mangia ancora meglio.", explanation: "Two impersonal \"si\"." },
      { type: "speak", text: "Qui si sta benissimo: si mangia bene, si dorme bene e non si spende tanto.", prompt: "Say it in Italian: It's lovely here: you eat well, you sleep well and you don't spend much.", tip: "Four \"si\" in a row: keep each one light and unstressed.", explanation: "Impersonal \"si\" with singular verbs." },
    ],
  },
  {
    slug: "b1-si-plural-adjectives",
    level: "IT-B1",
    number: 2,
    title: "Si È Stanchi",
    summary: "Use si + essere with plural adjectives and nouns: quando si è giovani, si è felici; quando si è stanchi, si sbaglia.",
    duration: "17 min",
    sections: [
      {
        heading: "Quando si è giovani",
        body: [
          "When \"si\" is followed by \"essere\" (or \"diventare\", \"sembrare\", \"restare\") and an adjective, the verb stays singular but the adjective goes plural: \"Quando si è giovani, si è felici\" (when you're young, you're happy).",
          "It seems odd, but it makes sense: \"si\" refers to people in general, so the description is plural. The masculine plural is the default: \"Quando si è stanchi, si sbaglia\".",
          "Only adjectives and nouns change; adverbs never do. So \"Qui si sta bene\" (adverb, no change) but \"Qui si è contenti\" (adjective, plural). Learners tend to write \"si è stanco\" because the verb looks singular: check the word after the verb, not the verb itself.",
        ],
        examples: [
          { es: "Quando si è giovani, si è felici.", en: "When you're young, you're happy." },
          { es: "Quando si è stanchi, si sbaglia.", en: "When you're tired, you make mistakes." },
          { es: "Si è più tranquilli dopo una vacanza.", en: "You're calmer after a vacation." },
          { es: "Non si è mai abbastanza preparati.", en: "You're never prepared enough." },
          { es: "Quando si diventa vecchi, si dorme meno.", en: "When you get old, you sleep less." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're tired, you make mistakes.", answer: "Quando si è stanchi, si sbaglia.", altAnswers: ["Quando si è stanchi si sbaglia.", "Quando si è stanchi, si fanno errori."], explanation: "\"Si è\" + plural adjective." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Quando si è giovani, si è felici.", "Quando si è giovane, si è felice.", "Quando si sono giovani, si sono felici.", "Quando si è giovani, si sono felici."], correctIndex: 0, explanation: "Singular \"è\", plural adjectives." },
        ],
      },
      {
        heading: "Nouns too",
        body: [
          "Nouns after \"si è\" also go plural: \"Quando si è studenti, si hanno pochi soldi\" (when you're a student, you've got little money), \"Quando si è genitori, si cambia\".",
          "Notice \"si hanno pochi soldi\": with an object (\"pochi soldi\"), the verb agrees with it, as in the passive \"si\". More on that in this unit's Contrast Clinic.",
        ],
        examples: [
          { es: "Quando si è studenti, si hanno pochi soldi.", en: "When you're a student, you've got little money." },
          { es: "Quando si è genitori, si cambia.", en: "When you're a parent, you change." },
          { es: "Quando si è turisti, si spende troppo.", en: "When you're a tourist, you spend too much." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're a parent, you change.", answer: "Quando si è genitori, si cambia.", altAnswers: ["Quando si diventa genitori, si cambia."], explanation: "Plural noun: \"genitori\"." },
          { type: "listen-choose", audio: "Quando si è turisti, si spende troppo.", question: "What's the speaker's point?", options: ["Tourists spend too much.", "Tourists are too tired.", "Tourism is too expensive for locals.", "Tourists don't spend enough."], correctIndex: 0, explanation: "\"Si spende troppo\" = you spend too much." },
        ],
      },
      {
        heading: "Feminine plural",
        body: [
          "If the people in general are clearly all women, the adjective goes feminine plural: \"Quando si è incinte, ci si stanca facilmente\" (when you're pregnant, you get tired easily). Otherwise, use the masculine plural.",
        ],
        examples: [
          { es: "Quando si è incinte, ci si stanca facilmente.", en: "When you're pregnant, you get tired easily." },
          { es: "Si è sempre più felici in compagnia.", en: "You're always happier in company." },
          { es: "Quando si è stanche, si ha bisogno di riposo.", en: "When you're tired, you need rest. (said among women)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're always happier in company.", answer: "Si è sempre più felici in compagnia.", explanation: "\"Felici\": plural." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're young, you're happy.", answer: "Quando si è giovani, si è felici.", altAnswers: ["Quando si è giovani si è felici."], explanation: "Plural adjectives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're calmer after a vacation.", answer: "Si è più tranquilli dopo una vacanza.", altAnswers: ["Dopo una vacanza si è più tranquilli.", "Si è più rilassati dopo una vacanza."], explanation: "\"Tranquilli\": plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're never prepared enough.", answer: "Non si è mai abbastanza preparati.", altAnswers: ["Non si è mai preparati abbastanza."], explanation: "\"Preparati\": plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're a student, you've got little money.", answer: "Quando si è studenti, si hanno pochi soldi.", altAnswers: ["Quando si è studenti, si hanno pochi soldi in tasca."], explanation: "Plural noun; \"si hanno\" agrees with \"soldi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you get old, you sleep less.", answer: "Quando si diventa vecchi, si dorme meno.", altAnswers: ["Quando si invecchia, si dorme meno.", "Quando si diventa anziani, si dorme meno."], explanation: "\"Si diventa\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're happy, time flies.", answer: "Quando si è felici, il tempo vola.", explanation: "\"Felici\": plural (same form)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [you're sick], you need rest.", sentence: "Quando ___, serve riposo.", answer: "si è malati", explanation: "\"Malati\": plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You're more relaxed] at the seaside.", sentence: "Al mare ___.", answer: "si è più rilassati", altAnswers: ["si è più tranquilli"], explanation: "Plural adjective." },
      { type: "word-order", prompt: "Put the words in order to say: When you're in love, you're always happy.", words: ["Quando", "si", "è", "innamorati,", "si", "è", "sempre", "contenti."], translation: "When you're in love, you're always happy.", explanation: "Plural adjectives twice." },
      { type: "multiple-choice", question: "Choose the right form: \"Quando si è ___, si mangia di più.\"", options: ["nervosi", "nervoso", "nervosa", "nervose"], correctIndex: 0, explanation: "Masculine plural by default." },
      { type: "dictation", audio: "Quando si è stanchi, è meglio non guidare.", explanation: "\"Stanchi\": plural." },
      { type: "speak", text: "Quando si è giovani si è sempre ottimisti, ma quando si è vecchi si è più saggi.", prompt: "Say it in Italian: When you're young you're always optimistic, but when you're old you're wiser.", tip: "\"Saggi\": a long double g, SAG-gi.", explanation: "Plural adjectives after \"si è\"." },
    ],
  },
  {
    slug: "b1-ci-si",
    level: "IT-B1",
    number: 3,
    title: "Ci Si: Reflexive Verbs Made Impersonal",
    summary: "Make reflexive verbs impersonal with ci si: ci si alza presto, ci si diverte, non ci si annoia mai.",
    duration: "17 min",
    sections: [
      {
        heading: "Ci si alza presto",
        body: [
          "Reflexive verbs already have a \"si\" (\"alzarsi\", \"divertirsi\"). Italian can't say \"si si\", so the reflexive one becomes \"ci\": \"In campagna ci si alza presto\" (in the country people get up early), \"A quella festa ci si diverte sempre\".",
          "The order is always \"ci si\" + singular verb: \"ci si veste\", \"ci si sveglia\", \"ci si annoia\".",
          "Two more combinations come up often. With \"ne\", \"si\" becomes \"se\": \"Se ne parla molto\" (people talk about it a lot). With the \"ci\" that means there, Italian can't say \"ci ci si\", so one \"ci\" does the job: \"A Roma ci si va in treno\" (you get there by train). This \"ci\" never means us here: \"ci si alza\" is people get up, not we get ourselves up.",
        ],
        examples: [
          { es: "In campagna ci si alza presto.", en: "In the country people get up early." },
          { es: "A quella festa ci si diverte sempre.", en: "You always have fun at that party." },
          { es: "In questa città non ci si annoia mai.", en: "You never get bored in this city." },
          { es: "Per andare a teatro ci si veste eleganti.", en: "You dress up to go to the theater." },
          { es: "Ci si abitua a tutto.", en: "You get used to anything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the country people get up early.", answer: "In campagna ci si alza presto.", altAnswers: ["Ci si alza presto in campagna."], explanation: "\"Alzarsi\" → \"ci si alza\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Ci si diverte.", "Si si diverte.", "Si ci diverte.", "Ci si divertono."], correctIndex: 0, explanation: "\"Ci si\" + singular." },
        ],
      },
      {
        heading: "Ci si sente, ci si vede",
        body: [
          "Two friendly phrases use this pattern: \"Ci si vede!\" (see you around!) and \"Ci si sente\" (we'll be in touch). Here \"ci si\" is close to we: \"Allora ci si vede sabato\".",
          "With an adjective, as with \"si è\", it goes plural: \"Ci si sente soli in una città nuova\" (you feel lonely in a new city).",
        ],
        examples: [
          { es: "Allora ci si vede sabato!", en: "See you on Saturday, then!" },
          { es: "Ci si sente domani.", en: "Let's talk tomorrow." },
          { es: "Ci si sente soli in una città nuova.", en: "You feel lonely in a new city." },
          { es: "Dopo una passeggiata ci si sente meglio.", en: "You feel better after a walk." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You feel lonely in a new city.", answer: "Ci si sente soli in una città nuova.", altAnswers: ["In una città nuova ci si sente soli."], explanation: "\"Ci si sente\" + plural adjective." },
          { type: "listen-choose", audio: "Allora ci si vede sabato!", question: "What does the speaker mean?", options: ["See you on Saturday.", "We saw each other on Saturday.", "You can see it on Saturday.", "Come and see me on Saturday."], correctIndex: 0, explanation: "\"Ci si vede\" = see you." },
        ],
      },
      {
        heading: "Ci si può, ci si deve",
        body: [
          "With a modal, \"ci si\" goes before the modal: \"Ci si può fidare\" (you can trust him/her), \"Ci si deve iscrivere entro lunedì\" (you have to register by Monday).",
        ],
        examples: [
          { es: "Di lui ci si può fidare.", en: "You can trust him." },
          { es: "Ci si deve iscrivere entro lunedì.", en: "You have to register by Monday." },
          { es: "Non ci si può lamentare.", en: "Can't complain." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to register by Monday.", answer: "Ci si deve iscrivere entro lunedì.", altAnswers: ["Bisogna iscriversi entro lunedì."], explanation: "\"Ci si\" before the modal." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Can't complain]!", sentence: "___!", answer: "Non ci si può lamentare", explanation: "Fixed reply to \"come va?\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You always have fun at that party.", answer: "A quella festa ci si diverte sempre.", altAnswers: ["Ci si diverte sempre a quella festa."], explanation: "\"Divertirsi\" → \"ci si diverte\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You never get bored in this city.", answer: "In questa città non ci si annoia mai.", altAnswers: ["Non ci si annoia mai in questa città."], explanation: "\"Non ci si annoia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You get used to anything.", answer: "Ci si abitua a tutto.", explanation: "\"Abituarsi\" → \"ci si abitua\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You feel better after a walk.", answer: "Dopo una passeggiata ci si sente meglio.", altAnswers: ["Ci si sente meglio dopo una passeggiata."], explanation: "\"Ci si sente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can trust him.", answer: "Di lui ci si può fidare.", altAnswers: ["Ci si può fidare di lui."], explanation: "\"Ci si può\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you on Saturday, then!", answer: "Allora ci si vede sabato!", altAnswers: ["Ci vediamo sabato, allora!", "Allora ci vediamo sabato!"], explanation: "\"Ci si vede\" = see you." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In winter [people wake up] later.", sentence: "D'inverno ___ più tardi.", answer: "ci si sveglia", altAnswers: ["ci si alza"], explanation: "\"Svegliarsi\" → \"ci si sveglia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You [dress up] to go to the theater.", sentence: "Per andare a teatro ___ eleganti.", answer: "ci si veste", explanation: "\"Vestirsi\"; \"eleganti\" plural." },
      { type: "word-order", prompt: "Put the words in order to say: You get tired quickly in the heat.", words: ["Con", "il", "caldo", "ci", "si", "stanca", "subito."], translation: "You get tired quickly in the heat.", explanation: "\"Stancarsi\" → \"ci si stanca\"." },
      { type: "multiple-choice", question: "Make it impersonal: \"Mi riposo la domenica.\"", options: ["Ci si riposa la domenica.", "Si si riposa la domenica.", "Si riposa la domenica.", "Ci si riposano la domenica."], correctIndex: 0, explanation: "Reflexive verb: \"ci si\"." },
      { type: "dictation", audio: "In vacanza ci si sveglia tardi e ci si rilassa.", explanation: "Two \"ci si\"." },
      { type: "speak", text: "In questo paese ci si conosce tutti, ci si saluta per strada e non ci si annoia mai.", prompt: "Say it in Italian: In this village everybody knows each other, people say hello in the street and you never get bored.", tip: "\"Ci si\": chee-see, two quick syllables.", explanation: "\"Ci si\" with three reflexive verbs." },
    ],
  },
  {
    slug: "b1-impersonal-past",
    level: "IT-B1",
    number: 4,
    title: "Si È Mangiato Bene",
    summary: "Put the impersonal si in the past with essere: si è mangiato bene, si è dormito poco, si è partiti presto, ci si è divertiti.",
    duration: "17 min",
    sections: [
      {
        heading: "Si è mangiato bene",
        body: [
          "In compound tenses the impersonal \"si\" always takes \"essere\". If the verb normally takes \"avere\", the participle stays in the masculine singular: \"Si è mangiato bene\" (we ate well), \"Si è dormito poco\" (we hardly slept), \"Si è parlato di politica\".",
          "It's very common in conversation for a group experience: \"Ieri sera si è ballato fino alle due\".",
        ],
        examples: [
          { es: "Al matrimonio si è mangiato benissimo.", en: "We ate really well at the wedding." },
          { es: "In campeggio si è dormito poco.", en: "We hardly slept at the campsite." },
          { es: "Alla riunione si è parlato di soldi.", en: "At the meeting we talked about money." },
          { es: "Ieri sera si è ballato fino alle due.", en: "Last night we danced until two." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We ate really well at the wedding.", answer: "Al matrimonio si è mangiato benissimo.", altAnswers: ["Al matrimonio si è mangiato molto bene.", "Si è mangiato benissimo al matrimonio.", "Al matrimonio abbiamo mangiato benissimo."], explanation: "\"Avere\" verb: \"si è mangiato\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Si è dormito poco.", "Si ha dormito poco.", "Si è dormiti poco.", "Si sono dormito poco."], correctIndex: 0, explanation: "\"Essere\" + \"-o\" for \"avere\" verbs." },
        ],
      },
      {
        heading: "Si è partiti presto",
        body: [
          "If the verb normally takes \"essere\" (\"partire\", \"arrivare\", \"uscire\", \"stare\"), the participle goes plural: \"Si è partiti presto\" (we left early), \"Si è arrivati tardi\". Reflexive verbs work the same way: \"Ci si è divertiti\" (we had fun).",
          "So: \"avere\" verbs → \"-o\"; \"essere\" verbs and reflexives → \"-i\".",
          "If the group is clearly all women, the \"-i\" becomes \"-e\": \"Tra amiche ci si è divertite\". In speech this \"si\" past often just means we, a little more casual and collective than \"siamo partiti\", and both are correct. And if there's a thing as object, the participle agrees with it instead: \"Si sono mangiate tre pizze\" (the passive \"si\", in this unit's Contrast Clinic).",
        ],
        examples: [
          { es: "Si è partiti alle sei.", en: "We left at six." },
          { es: "Si è arrivati in ritardo.", en: "We arrived late." },
          { es: "Ci si è divertiti tantissimo.", en: "We had a great time." },
          { es: "Si è stati bene insieme.", en: "We had a nice time together." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had a great time.", answer: "Ci si è divertiti tantissimo.", altAnswers: ["Ci siamo divertiti tantissimo.", "Ci si è divertiti un sacco."], explanation: "Reflexive: \"-i\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We left] at six.", sentence: "___ alle sei.", answer: "Si è partiti", altAnswers: ["Siamo partiti"], explanation: "\"Essere\" verb: \"partiti\"." },
          { type: "listen-choose", audio: "Si è arrivati in ritardo, ma ci si è divertiti lo stesso.", question: "What happened?", options: ["They arrived late but had fun anyway.", "They arrived early and had fun.", "They arrived late and didn't enjoy it.", "They didn't go at all."], correctIndex: 0, explanation: "\"Lo stesso\" = anyway." },
        ],
      },
      {
        heading: "Imperfect and future",
        body: [
          "In simple tenses there's no participle problem: \"Una volta si viveva meglio\" (people used to live better), \"Domani si parte presto\" (tomorrow we're leaving early), \"Si vedrà\" (we'll see).",
        ],
        examples: [
          { es: "Una volta si viveva meglio.", en: "People used to live better." },
          { es: "Da bambini si giocava in strada.", en: "As children we used to play in the street." },
          { es: "Si vedrà.", en: "We'll see." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As children we used to play in the street.", answer: "Da bambini si giocava in strada.", altAnswers: ["Da bambini giocavamo in strada.", "Da piccoli si giocava in strada."], explanation: "Imperfect: \"si giocava\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We hardly slept at the campsite.", answer: "In campeggio si è dormito poco.", altAnswers: ["Si è dormito poco in campeggio.", "In campeggio abbiamo dormito poco."], explanation: "\"Si è dormito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the meeting we talked about money.", answer: "Alla riunione si è parlato di soldi.", altAnswers: ["Alla riunione abbiamo parlato di soldi.", "Si è parlato di soldi alla riunione."], explanation: "\"Si è parlato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We arrived late.", answer: "Si è arrivati in ritardo.", altAnswers: ["Si è arrivati tardi.", "Siamo arrivati in ritardo.", "Siamo arrivati tardi."], explanation: "\"Essere\" verb: \"arrivati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People used to live better.", answer: "Una volta si viveva meglio.", altAnswers: ["Prima si viveva meglio.", "Un tempo si viveva meglio."], explanation: "Imperfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had a nice time together.", answer: "Si è stati bene insieme.", altAnswers: ["Siamo stati bene insieme."], explanation: "\"Stare\" takes \"essere\": \"stati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last night we danced until two.", answer: "Ieri sera si è ballato fino alle due.", altAnswers: ["Ieri sera abbiamo ballato fino alle due.", "Ieri sera si è ballato fino alle 2."], explanation: "\"Si è ballato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At that party [we drank] too much.", sentence: "A quella festa ___ troppo.", answer: "si è bevuto", altAnswers: ["abbiamo bevuto"], explanation: "\"Avere\" verb: \"-o\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On the trip [we got up] every day at five.", sentence: "In gita ___ ogni giorno alle cinque.", answer: "ci si è alzati", altAnswers: ["ci siamo alzati"], explanation: "Reflexive: \"ci si è alzati\"." },
      { type: "word-order", prompt: "Put the words in order to say: Then we'll see.", words: ["Poi", "si", "vedrà."], translation: "Then we'll see.", explanation: "Future impersonal." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Si è usciti tardi.", "Si è uscito tardi.", "Si ha usciti tardi.", "Si sono usciti tardi."], correctIndex: 0, explanation: "\"Uscire\" takes \"essere\": \"usciti\"." },
      { type: "dictation", audio: "Al mare si è mangiato bene e ci si è riposati.", explanation: "\"-o\" then \"-i\"." },
      { type: "speak", text: "In vacanza si è mangiato benissimo, si è dormito tanto e ci si è divertiti un sacco.", prompt: "Say it in Italian: On vacation we ate really well, slept a lot and had a great time.", tip: "\"Divertiti\": di-ver-TI-ti, the plural ending matters.", explanation: "\"-o\" for \"avere\" verbs, \"-i\" for reflexives." },
    ],
  },
  {
    slug: "b1-drill-impersonal-si",
    level: "IT-B1",
    number: 5,
    title: "Drill: Impersonal Si",
    summary: "High-repetition production of the impersonal si: si vive bene, si è stanchi, ci si diverte, si è mangiato, si è partiti.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "The whole pattern",
        body: [
          "\"Si\" + singular verb. With \"essere\" + adjective: plural adjective. Reflexive verbs: \"ci si\". Past: \"si è\" + \"-o\" (\"avere\" verbs) or \"-i\" (\"essere\" verbs and reflexives).",
        ],
        examples: [
          { es: "Qui si vive bene.", en: "Life is good here." },
          { es: "Quando si è malati, si resta a letto.", en: "When you're sick, you stay in bed." },
          { es: "Ci si vede domani!", en: "See you tomorrow!" },
          { es: "Si è lavorato tanto, ma si è finito in tempo.", en: "We worked hard, but we finished in time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Life is good here.", answer: "Qui si vive bene.", altAnswers: ["Si vive bene qui."], explanation: "\"Si vive\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're sick, you stay in bed.", answer: "Quando si è malati, si resta a letto.", altAnswers: ["Quando si è malati, si sta a letto.", "Quando si è malati si resta a letto."], explanation: "Plural adjective." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Naples people talk with their hands.", answer: "A Napoli si parla con le mani.", altAnswers: ["A Napoli si gesticola molto."], explanation: "\"Si parla\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can't park here.", answer: "Qui non si parcheggia.", altAnswers: ["Qui non si può parcheggiare.", "Non si parcheggia qui."], explanation: "\"Non si\" + verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're on vacation, you're more relaxed.", answer: "Quando si è in vacanza, si è più rilassati.", altAnswers: ["In vacanza si è più rilassati.", "Quando si è in vacanza si è più rilassati."], explanation: "\"Rilassati\": plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You get bored if you stay at home all day.", answer: "Ci si annoia se si sta a casa tutto il giorno.", altAnswers: ["Ci si annoia a stare a casa tutto il giorno."], explanation: "\"Ci si annoia\", \"si sta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We talked a lot last night.", answer: "Ieri sera si è parlato tanto.", altAnswers: ["Ieri sera si è parlato molto.", "Ieri sera abbiamo parlato tanto."], explanation: "\"Si è parlato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We got home at midnight.", answer: "Si è tornati a casa a mezzanotte.", altAnswers: ["Siamo tornati a casa a mezzanotte.", "Si è rientrati a casa a mezzanotte."], explanation: "\"Tornare\" takes \"essere\": \"tornati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You learn by making mistakes.", answer: "Si impara sbagliando.", altAnswers: ["Sbagliando s'impara.", "Sbagliando si impara."], explanation: "\"Si impara\" + gerund (Unit 17)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can't trust anyone.", answer: "Non ci si può fidare di nessuno.", explanation: "\"Fidarsi\" → \"ci si può fidare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In August [people go] on vacation.", sentence: "Ad agosto ___ in vacanza.", answer: "si va", explanation: "\"Si va\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [you're tired], you don't think straight.", sentence: "Quando ___, non si ragiona.", answer: "si è stanchi", explanation: "Plural adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sunday [people get up] late.", sentence: "La domenica ___ tardi.", answer: "ci si alza", altAnswers: ["ci si sveglia"], explanation: "\"Ci si alza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At the party [we had fun].", sentence: "Alla festa ___.", answer: "ci si è divertiti", altAnswers: ["ci siamo divertiti"], explanation: "Reflexive past: \"-i\"." },
      { type: "word-order", prompt: "Put the words in order to say: You never know.", words: ["Non", "si", "sa", "mai."], translation: "You never know.", explanation: "Fixed phrase." },
      { type: "word-order", prompt: "Put the words in order to say: In winter you go to bed early.", words: ["D'inverno", "si", "va", "a", "letto", "presto."], translation: "In winter you go to bed early.", explanation: "\"Si va\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Si è viaggiato molto.", "Si è viaggiati molto.", "Si ha viaggiato molto.", "Ci si è viaggiato molto."], correctIndex: 0, explanation: "\"Viaggiare\" takes \"avere\": \"-o\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Quando si è soli, ci si sente tristi.", "Quando si è solo, si si sente triste.", "Quando si sono soli, ci si sentono tristi.", "Quando si è soli, si sente tristi."], correctIndex: 0, explanation: "Plural adjectives; \"ci si\" for \"sentirsi\"." },
      { type: "listen-choose", audio: "In quel ristorante si spende poco e si mangia bene.", question: "What's good about the restaurant?", options: ["It's cheap and the food is good.", "It's expensive but worth it.", "It's quiet.", "It's close to home."], correctIndex: 0, explanation: "\"Si spende poco\" = you spend little." },
      { type: "dictation", audio: "Ci si vede alle otto davanti al cinema.", explanation: "\"Ci si vede\"." },
      { type: "speak", text: "Quando si è in Italia, si mangia bene, ci si diverte e non ci si annoia mai.", prompt: "Say it in Italian: When you're in Italy, you eat well, you have fun and you never get bored.", tip: "\"Annoia\": an-NO-ia, a long double n.", explanation: "\"Si\" and \"ci si\"." },
    ],
  },
  {
    slug: "b1-contrast-si-passivante-impersonale",
    level: "IT-B1",
    number: 6,
    title: "Contrast Clinic: Si Mangiano or Si Mangia?",
    summary: "Tell the passive si from the impersonal si: si mangiano molti spaghetti (an object, plural verb) but si mangia bene (no object, singular).",
    duration: "17 min",
    sections: [
      {
        heading: "Is there a thing?",
        body: [
          "Both kinds of \"si\" look the same, but there's one test: is there a thing that is eaten, sold, done? If yes, the verb agrees with it (passive \"si\"): \"In Italia si mangiano molti spaghetti\". If no, the verb is singular (impersonal \"si\"): \"In Italia si mangia bene\".",
          "\"Bene\", \"tardi\", \"molto\" are not things: they're adverbs, so the verb stays singular.",
        ],
        examples: [
          { es: "In Italia si mangiano molti spaghetti.", en: "A lot of spaghetti is eaten in Italy." },
          { es: "In Italia si mangia bene.", en: "You eat well in Italy." },
          { es: "Qui si vendono giornali stranieri.", en: "Foreign newspapers are sold here." },
          { es: "Qui si vende molto.", en: "A lot gets sold here." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Choose: \"Al mercato si ___ frutta e verdura.\"", options: ["vendono", "vende", "venduto", "venda"], correctIndex: 0, explanation: "Two things (frutta e verdura): plural." },
          { type: "multiple-choice", question: "Choose: \"In questo bar si ___ bene.\"", options: ["mangia", "mangiano", "mangiato", "mangi"], correctIndex: 0, explanation: "No object: singular." },
        ],
      },
      {
        heading: "In the past",
        body: [
          "In compound tenses, the passive \"si\" agrees with the thing: \"Si sono mangiate tre pizze\" (three pizzas were eaten). The impersonal \"si\" with an \"avere\" verb stays \"-o\": \"Si è mangiato bene\".",
        ],
        examples: [
          { es: "Si sono mangiate tre pizze.", en: "Three pizzas were eaten." },
          { es: "Si è mangiato bene.", en: "We ate well." },
          { es: "Si sono spesi troppi soldi.", en: "Too much money was spent." },
          { es: "Si è speso troppo.", en: "We spent too much." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Too much money was spent.", answer: "Si sono spesi troppi soldi.", altAnswers: ["Sono stati spesi troppi soldi."], explanation: "Thing (soldi): plural, agreeing." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We spent too much.", answer: "Si è speso troppo.", altAnswers: ["Abbiamo speso troppo."], explanation: "No thing: \"-o\"." },
          { type: "listen-choose", audio: "Si sono mangiate tre pizze in dieci minuti!", question: "What happened?", options: ["Three pizzas were eaten in ten minutes.", "Three people ate in ten minutes.", "Pizza was ready in ten minutes.", "They waited ten minutes for pizza."], correctIndex: 0, explanation: "Passive \"si\" agreeing with \"pizze\"." },
        ],
      },
      {
        heading: "Infinitives as objects",
        body: [
          "When the thing is an infinitive or a clause, the verb is singular: \"Si deve pagare in contanti\", \"Si dice che ...\". But with a modal + plural noun, the modal agrees: \"Si devono pagare le tasse\".",
        ],
        examples: [
          { es: "Si deve pagare in contanti.", en: "You have to pay in cash." },
          { es: "Si devono pagare le tasse.", en: "Taxes have to be paid." },
          { es: "Si possono portare due valigie.", en: "You can bring two suitcases." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can bring two suitcases.", answer: "Si possono portare due valigie.", altAnswers: ["Si possono portare due bagagli."], explanation: "Modal agrees with \"valigie\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A lot of spaghetti is eaten in Italy.", answer: "In Italia si mangiano molti spaghetti.", altAnswers: ["In Italia si mangiano tanti spaghetti.", "Si mangiano molti spaghetti in Italia."], explanation: "\"Spaghetti\" is plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You eat well in Italy.", answer: "In Italia si mangia bene.", altAnswers: ["Si mangia bene in Italia."], explanation: "No object: singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Foreign newspapers are sold here.", answer: "Qui si vendono giornali stranieri.", altAnswers: ["Si vendono giornali stranieri qui.", "Qui si vendono i giornali stranieri."], explanation: "Plural object." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to pay in cash.", answer: "Si deve pagare in contanti.", altAnswers: ["Bisogna pagare in contanti.", "Si paga in contanti."], explanation: "No noun object: singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Taxes have to be paid.", answer: "Si devono pagare le tasse.", altAnswers: ["Le tasse si devono pagare.", "Le tasse vanno pagate."], explanation: "Modal agrees with \"tasse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Three pizzas were eaten.", answer: "Si sono mangiate tre pizze.", altAnswers: ["Sono state mangiate tre pizze."], explanation: "\"Mangiate\" agrees with \"pizze\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In this school [many languages are studied].", sentence: "In questa scuola ___.", answer: "si studiano molte lingue", altAnswers: ["si studiano tante lingue"], explanation: "Plural object." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In this school [people study] a lot.", sentence: "In questa scuola ___ molto.", answer: "si studia", explanation: "No object: singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Last year [a lot of films were made].", sentence: "L'anno scorso ___ molti film.", answer: "si sono fatti", altAnswers: ["si sono girati", "sono stati fatti", "sono stati girati"], explanation: "\"Film\" is plural here: \"fatti\"." },
      { type: "word-order", prompt: "Put the words in order to say: Here you can see the mountains.", words: ["Da", "qui", "si", "vedono", "le", "montagne."], translation: "Here you can see the mountains.", explanation: "Plural object: \"si vedono\"." },
      { type: "multiple-choice", question: "Which sentence is wrong?", options: ["Si vende le case.", "Si vendono le case.", "Si vende la casa.", "Si vende bene."], correctIndex: 0, explanation: "\"Le case\" needs \"si vendono\"." },
      { type: "multiple-choice", question: "Choose: \"Ieri si è ___ troppo.\"", options: ["bevuto", "bevuti", "bevute", "bevuta"], correctIndex: 0, explanation: "No object: \"-o\"." },
      { type: "dictation", audio: "In questa zona si coltivano ulivi e si vive di turismo.", explanation: "Plural, then singular." },
      { type: "speak", text: "In Sicilia si mangiano tanti dolci e si vive bene.", prompt: "Say it in Italian: In Sicily people eat lots of sweets and life is good.", tip: "\"Mangiano\": MAN-gia-no, stress on the first syllable.", explanation: "Passive \"si\", then impersonal \"si\"." },
    ],
  },
  {
    slug: "b1-drill-si-mixed",
    level: "IT-B1",
    number: 7,
    title: "Drill: All the Si's",
    summary: "High-repetition production mixing reflexive si (si alza), passive si (si vendono) and impersonal si (si vive bene, ci si diverte).",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Three si's",
        body: [
          "Reflexive: someone does it to himself or herself (\"Marco si alza\"). Passive: a thing is done, the verb agrees (\"si vendono case\"). Impersonal: people in general, singular verb (\"si vive bene\"); reflexive + impersonal = \"ci si\".",
        ],
        examples: [
          { es: "Marco si alza alle sei.", en: "Marco gets up at six." },
          { es: "Qui si lavano le macchine a mano.", en: "Cars are washed by hand here." },
          { es: "In campagna ci si alza presto.", en: "In the country people get up early." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco gets up at six.", answer: "Marco si alza alle sei.", altAnswers: ["Marco si alza alle 6."], explanation: "Reflexive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the country people get up early.", answer: "In campagna ci si alza presto.", explanation: "Impersonal reflexive: \"ci si\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister gets bored easily.", answer: "Mia sorella si annoia facilmente.", explanation: "Reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You never get bored here.", answer: "Qui non ci si annoia mai.", altAnswers: ["Non ci si annoia mai qui."], explanation: "Impersonal reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Second-hand cars are bought here.", answer: "Qui si comprano auto usate.", altAnswers: ["Qui si comprano macchine usate.", "Si comprano auto usate qui."], explanation: "Passive: plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People walk a lot in Venice.", answer: "A Venezia si cammina molto.", altAnswers: ["A Venezia si cammina tanto.", "Si cammina molto a Venezia."], explanation: "Impersonal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children are washing their hands.", answer: "I bambini si lavano le mani.", altAnswers: ["I bambini si stanno lavando le mani."], explanation: "Reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You wash your hands before eating.", answer: "Ci si lava le mani prima di mangiare.", explanation: "Impersonal reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bikes are repaired here.", answer: "Qui si riparano biciclette.", altAnswers: ["Qui si riparano bici.", "Qui si riparano le biciclette."], explanation: "Passive: plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're young, you're impatient.", answer: "Quando si è giovani, si è impazienti.", altAnswers: ["Quando si è giovani si è impazienti."], explanation: "Impersonal + plural adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Giulia [got married] in June.", sentence: "Giulia ___ a giugno.", answer: "si è sposata", explanation: "Reflexive past: agrees with Giulia." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In Italy [people get married] later than before.", sentence: "In Italia ___ più tardi di una volta.", answer: "ci si sposa", explanation: "Impersonal reflexive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At Easter [chocolate eggs are given].", sentence: "A Pasqua ___ uova di cioccolato.", answer: "si regalano", explanation: "Passive: plural (\"uova\")." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At the party [we had fun].", sentence: "Alla festa ___.", answer: "ci si è divertiti", altAnswers: ["ci siamo divertiti"], explanation: "Impersonal reflexive past." },
      { type: "word-order", prompt: "Put the words in order to say: In this office people dress formally.", words: ["In", "questo", "ufficio", "ci", "si", "veste", "in", "modo", "formale."], translation: "In this office people dress formally.", explanation: "\"Ci si veste\"." },
      { type: "word-order", prompt: "Put the words in order to say: Luca gets dressed in five minutes.", words: ["Luca", "si", "veste", "in", "cinque", "minuti."], translation: "Luca gets dressed in five minutes.", explanation: "Reflexive." },
      { type: "multiple-choice", question: "\"In Italia si bevono molti caffè.\" Which si is it?", options: ["Passive", "Reflexive", "Impersonal", "Ci si"], correctIndex: 0, explanation: "The verb agrees with \"caffè\" (plural)." },
      { type: "multiple-choice", question: "\"Anna si trucca allo specchio.\" Which si is it?", options: ["Reflexive", "Passive", "Impersonal", "Ci si"], correctIndex: 0, explanation: "Anna does it to herself." },
      { type: "listen-choose", audio: "In questa città ci si sposta in bici.", question: "What does it mean?", options: ["People get around by bike in this city.", "Bikes are sold in this city.", "He moves house by bike.", "You can rent bikes here."], correctIndex: 0, explanation: "\"Spostarsi\" → \"ci si sposta\"." },
      { type: "dictation", audio: "Si dice che in quel paese ci si diverte molto.", explanation: "Impersonal \"si\", then \"ci si\"." },
      { type: "speak", text: "Mio fratello si sveglia tardi, ma in famiglia ci si sveglia presto e si fa colazione insieme.", prompt: "Say it in Italian: My brother wakes up late, but in our family people wake up early and have breakfast together.", tip: "\"Si sveglia\": the gl is one soft sound, SVE-glia.", explanation: "Reflexive, \"ci si\", impersonal." },
    ],
  },
  {
    slug: "b1-error-hunt-si",
    level: "IT-B1",
    number: 8,
    title: "Error Hunt: Si",
    summary: "Fix si si alza presto, quando si è giovane, si è mangiati bene and si vende le case.",
    duration: "17 min",
    sections: [
      {
        heading: "Si si and ci si",
        body: [
          "Each sentence below was written by a learner and has one mistake. \"In campagna si si alza presto\" doubles the \"si\". With a reflexive verb the first one becomes \"ci\": \"In campagna ci si alza presto\".",
          "Watch the order too: \"si ci alza\" is wrong; it's always \"ci si\".",
        ],
        examples: [
          { es: "In campagna ci si alza presto.", en: "In the country people get up early." },
          { es: "D'estate ci si stanca di più.", en: "In summer you get more tired." },
          { es: "Ci si abitua a tutto.", en: "You get used to anything." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"In campagna si si alza presto\". Write it correctly: In the country people get up early.", source: "In the country people get up early.", answer: "In campagna ci si alza presto.", explanation: "Reflexive + impersonal: \"ci si\"." },
          { type: "multiple-choice", question: "Which has no mistake?", options: ["D'estate ci si stanca di più.", "D'estate si si stanca di più.", "D'estate si ci stanca di più.", "D'estate ci si stancano di più."], correctIndex: 0, explanation: "\"Ci si\" + singular." },
        ],
      },
      {
        heading: "Agreement after si è",
        body: [
          "\"Quando si è giovane\" uses a singular adjective, but after impersonal \"si è\" adjectives go plural: \"Quando si è giovani\".",
          "\"Si è mangiati bene\" goes too far the other way: \"mangiare\" takes \"avere\", so the participle stays \"-o\": \"Si è mangiato bene\". Only \"essere\" verbs and reflexives take \"-i\": \"si è arrivati\", \"ci si è divertiti\".",
        ],
        examples: [
          { es: "Quando si è giovani, si fanno tante cose.", en: "When you're young, you do lots of things." },
          { es: "Si è mangiato bene.", en: "We ate well." },
          { es: "Si è arrivati tardi.", en: "We arrived late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si è mangiati bene\". Write it correctly: We ate well.", source: "We ate well.", answer: "Si è mangiato bene.", altAnswers: ["Abbiamo mangiato bene."], explanation: "\"Avere\" verb: \"-o\"." },
          { type: "fill-blank", prompt: "A learner wrote \"Quando si è giovane, si fanno tante cose\". Write the Italian for the bold words.", en: "When [you're young], you do lots of things.", sentence: "Quando ___, si fanno tante cose.", answer: "si è giovani", explanation: "Plural adjective." },
          { type: "listen-choose", audio: "Si è arrivati tardi, ma si è mangiato bene.", question: "What does the speaker say?", options: ["They arrived late but ate well.", "They arrived early and ate well.", "They arrived late and didn't eat.", "They ate late at home."], correctIndex: 0, explanation: "\"Arrivati\" (essere verb), \"mangiato\" (avere verb)." },
        ],
      },
      {
        heading: "Si vende le case",
        body: [
          "\"Si vende le case\": with a plural thing, the passive \"si\" needs a plural verb: \"Si vendono le case\". It's the slip Italians themselves make in casual speech, but in writing it's always the plural.",
        ],
        examples: [
          { es: "Si vendono le case al mare.", en: "The houses by the sea are for sale." },
          { es: "Si cercano commesse.", en: "Sales clerks wanted." },
          { es: "Si affittano camere.", en: "Rooms for rent." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si cerca commesse\". Write it correctly: Sales clerks wanted.", source: "Sales clerks wanted.", answer: "Si cercano commesse.", altAnswers: ["Si cercano commessi.", "Cercasi commesse.", "Cercasi commessi."], explanation: "Plural: \"si cercano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si si diverte a Roma\". Write it correctly: You have fun in Rome.", source: "You have fun in Rome.", answer: "A Roma ci si diverte.", altAnswers: ["Ci si diverte a Roma."], explanation: "\"Ci si\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Quando si è stanco, si dorme\". Write it correctly: When you're tired, you sleep.", source: "When you're tired, you sleep.", answer: "Quando si è stanchi, si dorme.", altAnswers: ["Quando si è stanchi si dorme."], explanation: "Plural adjective." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si è dormiti poco\". Write it correctly: We hardly slept.", source: "We hardly slept.", answer: "Si è dormito poco.", altAnswers: ["Abbiamo dormito poco."], explanation: "\"Dormire\" takes \"avere\": \"-o\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si è partito presto\". Write it correctly: We left early.", source: "We left early.", answer: "Si è partiti presto.", altAnswers: ["Siamo partiti presto."], explanation: "\"Partire\" takes \"essere\": \"-i\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Si mangia molti dolci a Natale\". Write it correctly: People eat lots of sweets at Christmas.", source: "People eat lots of sweets at Christmas.", answer: "A Natale si mangiano molti dolci.", altAnswers: ["Si mangiano molti dolci a Natale.", "A Natale si mangiano tanti dolci."], explanation: "Plural object." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ci si è divertito\". Write it correctly: We had fun.", source: "We had fun.", answer: "Ci si è divertiti.", altAnswers: ["Ci siamo divertiti."], explanation: "Reflexive: \"-i\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Si ci veste bene per il matrimonio\". Write the Italian for the bold words.", en: "[You dress up] for the wedding.", sentence: "___ bene per il matrimonio.", answer: "Ci si veste", explanation: "Order: \"ci si\"." },
      { type: "fill-blank", prompt: "A learner wrote \"In Italia la gente mangiano tardi\". Write the Italian for the bold words.", en: "In Italy [people eat] late.", sentence: "In Italia ___ tardi.", answer: "la gente mangia", altAnswers: ["si mangia"], explanation: "\"La gente\" is singular." },
      { type: "word-order", prompt: "Put the words in order to say: When you're together, you're happier.", words: ["Quando", "si", "è", "insieme,", "si", "è", "più", "felici."], translation: "When you're together, you're happier.", explanation: "Plural adjective." },
      { type: "multiple-choice", question: "Which sentence has no mistake?", options: ["Si sono venduti tutti i biglietti.", "Si è venduto tutti i biglietti.", "Si sono venduto tutti i biglietti.", "Si ha venduto tutti i biglietti."], correctIndex: 0, explanation: "Plural object, \"essere\", agreement." },
      { type: "dictation", audio: "Quando si è stanchi, ci si arrabbia facilmente.", explanation: "Plural adjective, \"ci si\"." },
      { type: "speak", text: "Al matrimonio si è mangiato benissimo e ci si è divertiti fino a tardi.", prompt: "Say it in Italian: At the wedding we ate really well and had fun until late.", tip: "\"Mangiato\" with -o, \"divertiti\" with -i.", explanation: "Both past patterns." },
    ],
  },
  {
    slug: "b1-reading-lab-customs",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: Italian Customs",
    summary: "Read a magazine article about mealtimes, the bar and the passeggiata, full of the impersonal si: si pranza all'una, al bar si beve in piedi, ci si incontra in piazza.",
    duration: "18 min",
    sections: [
      {
        heading: "Meals",
        body: [
          "Read the first part of an article for foreign students: \"In Italia si fa colazione in fretta: un caffè, un cornetto, e si esce. Si pranza verso l'una e si cena tardi, soprattutto al Sud, dove d'estate si mangia anche alle dieci di sera. A tavola non si parla di lavoro, e il cappuccino dopo pranzo? Meglio di no\".",
        ],
        examples: [
          { es: "In Italia si fa colazione in fretta.", en: "In Italy people have breakfast in a hurry." },
          { es: "Si pranza verso l'una.", en: "Lunch is around one." },
          { es: "D'estate si mangia anche alle dieci di sera.", en: "In summer people even eat at ten in the evening." },
          { es: "A tavola non si parla di lavoro.", en: "You don't talk about work at the table." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You don't talk about work at the table.", answer: "A tavola non si parla di lavoro.", altAnswers: ["Non si parla di lavoro a tavola."], explanation: "Impersonal \"si\"." },
          { type: "multiple-choice", question: "Where do people eat latest in summer?", options: ["In the South", "In the North", "In Rome only", "In the mountains"], correctIndex: 0, explanation: "\"Soprattutto al Sud\"." },
        ],
      },
      {
        heading: "At the bar",
        body: [
          "\"Al bar si beve il caffè in piedi, al banco, e in pochi secondi. In molte città prima si paga alla cassa e poi si ordina. Se ci si siede al tavolino, si paga di più. E l'espresso non si chiama espresso: si chiede 'un caffè'\".",
        ],
        examples: [
          { es: "Al bar si beve il caffè in piedi.", en: "At the bar people drink their coffee standing up." },
          { es: "Prima si paga alla cassa e poi si ordina.", en: "First you pay at the register and then you order." },
          { es: "Se ci si siede al tavolino, si paga di più.", en: "If you sit down at a table, you pay more." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you sit down at a table, you pay more.", answer: "Se ci si siede al tavolino, si paga di più.", altAnswers: ["Se ci si siede al tavolo, si paga di più.", "Se ci si siede, si paga di più."], explanation: "\"Ci si siede\", \"si paga\"." },
          { type: "listen-choose", audio: "Prima si paga alla cassa e poi si ordina.", question: "What do you do first?", options: ["Pay at the register", "Order at the counter", "Sit down", "Ask for the menu"], correctIndex: 0, explanation: "\"Prima si paga\"." },
        ],
      },
      {
        heading: "The passeggiata",
        body: [
          "\"La sera, soprattutto la domenica, si esce a fare la passeggiata: si cammina lentamente lungo il corso, ci si incontra in piazza, ci si saluta, si chiacchiera. Non si va da nessuna parte: si sta insieme. Quando si è giovani, è anche il momento per farsi notare!\"",
        ],
        examples: [
          { es: "La domenica sera si esce a fare la passeggiata.", en: "On Sunday evenings people go out for a stroll." },
          { es: "Ci si incontra in piazza.", en: "People meet up in the square." },
          { es: "Non si va da nessuna parte: si sta insieme.", en: "You don't go anywhere: you spend time together." },
          { es: "Quando si è giovani, è il momento per farsi notare.", en: "When you're young, it's the time to get noticed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People meet up in the square.", answer: "Ci si incontra in piazza.", altAnswers: ["In piazza ci si incontra."], explanation: "\"Incontrarsi\" → \"ci si incontra\"." },
          { type: "multiple-choice", question: "What's the point of the passeggiata?", options: ["Being together", "Getting somewhere quickly", "Shopping", "Exercise"], correctIndex: 0, explanation: "\"Non si va da nessuna parte: si sta insieme\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Italy people have breakfast in a hurry.", answer: "In Italia si fa colazione in fretta.", altAnswers: ["In Italia si fa colazione di fretta.", "In Italia si fa colazione velocemente."], explanation: "\"Si fa colazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lunch is around one.", answer: "Si pranza verso l'una.", altAnswers: ["Si pranza all'una.", "Si pranza intorno all'una."], explanation: "\"Si pranza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the bar people drink their coffee standing up.", answer: "Al bar si beve il caffè in piedi.", altAnswers: ["Al bar il caffè si beve in piedi."], explanation: "\"Si beve il caffè\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sunday evenings people go out for a stroll.", answer: "La domenica sera si esce a fare la passeggiata.", altAnswers: ["La domenica sera si esce a fare una passeggiata.", "La domenica sera si va a fare la passeggiata."], explanation: "\"Si esce\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People say hello and chat.", answer: "Ci si saluta e si chiacchiera.", explanation: "\"Ci si saluta\" (reciprocal), \"si chiacchiera\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "First [you pay] at the register.", sentence: "Prima ___ alla cassa.", answer: "si paga", explanation: "\"Si paga\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You don't [go anywhere].", sentence: "Non ___ da nessuna parte.", answer: "si va", explanation: "\"Si va\"." },
      { type: "word-order", prompt: "Put the words in order to say: People walk slowly along the main street.", words: ["Si", "cammina", "lentamente", "lungo", "il", "corso."], translation: "People walk slowly along the main street.", explanation: "\"Si cammina\"." },
      { type: "multiple-choice", question: "What happens if you ask for 'un caffè' in an Italian bar?", options: ["You get an espresso.", "You get a cappuccino.", "You get filter coffee.", "You're asked what kind."], correctIndex: 0, explanation: "\"Un caffè\" is always an espresso." },
      { type: "multiple-choice", question: "Which tip does the article give about cappuccino?", options: ["Better not after lunch", "Only in the evening", "Always sitting down", "Only in the South"], correctIndex: 0, explanation: "\"Il cappuccino dopo pranzo? Meglio di no\"." },
      { type: "listen-choose", audio: "Se ci si siede al tavolino, si paga di più.", question: "Why might you pay more?", options: ["For sitting down", "For ordering twice", "For paying by card", "For drinking at the counter"], correctIndex: 0, explanation: "\"Ci si siede\" = you sit down." },
      { type: "dictation", audio: "La sera ci si incontra in piazza e si chiacchiera.", explanation: "\"Ci si incontra\", \"si chiacchiera\"." },
      { type: "speak", text: "Al bar si beve il caffè in piedi, e la sera ci si incontra in piazza per la passeggiata.", prompt: "Say it in Italian: At the bar people drink their coffee standing up, and in the evening they meet in the square for the passeggiata.", tip: "\"Passeggiata\": pas-seg-GIA-ta, two double consonants.", explanation: "\"Si beve\", \"ci si incontra\"." },
    ],
  },
  {
    slug: "b1-mission-customs-in-your-country",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: Customs Where You Live",
    summary: "Write about customs in your country for an Italian exchange student, with the impersonal si: da noi si cena alle sei, ci si toglie le scarpe.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Da noi si cena alle sei",
        body: [
          "Your mission: an Italian student is coming to stay with your family and asks: \"Come si vive da voi?\" Describe daily habits with \"si\": \"Da noi si cena alle sei\", \"Si va al lavoro in bici\", \"In casa ci si toglie le scarpe\".",
          "\"Da noi\" means where we live, in our country or family.",
        ],
        examples: [
          { es: "Da noi si cena alle sei.", en: "Where we live, dinner is at six." },
          { es: "Si va al lavoro in bici.", en: "People go to work by bike." },
          { es: "In casa ci si toglie le scarpe.", en: "You take your shoes off in the house." },
          { es: "Il sabato si fa la spesa per tutta la settimana.", en: "On Saturdays people do the shopping for the whole week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You take your shoes off in the house.", answer: "In casa ci si toglie le scarpe.", altAnswers: ["Ci si toglie le scarpe in casa."], explanation: "\"Togliersi\" → \"ci si toglie\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where we live, dinner is at six.", answer: "Da noi si cena alle sei.", altAnswers: ["Da noi si cena alle 6."], explanation: "\"Da noi\" + \"si cena\"." },
        ],
      },
      {
        heading: "Comparing",
        body: [
          "Add a comparison and a memory: \"In Italia si pranza tardi, da noi invece si mangia un panino a mezzogiorno\", \"Quando si è bambini, si va a letto alle otto\", \"L'anno scorso a Natale si è mangiato tantissimo!\".",
        ],
        examples: [
          { es: "Da noi invece si mangia un panino a mezzogiorno.", en: "Where we live, on the other hand, people eat a sandwich at noon." },
          { es: "Quando si è bambini, si va a letto alle otto.", en: "When you're a child, you go to bed at eight." },
          { es: "L'anno scorso a Natale si è mangiato tantissimo!", en: "Last Christmas we ate so much!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you're a child, you go to bed at eight.", answer: "Quando si è bambini, si va a letto alle otto.", altAnswers: ["Quando si è piccoli, si va a letto alle otto.", "Quando si è bambini si va a letto alle otto."], explanation: "Plural noun after \"si è\"." },
          { type: "listen-choose", audio: "L'anno scorso a Natale si è mangiato tantissimo!", question: "What happened last Christmas?", options: ["They ate a lot.", "They didn't eat much.", "They went away.", "They cooked for others."], correctIndex: 0, explanation: "\"Si è mangiato tantissimo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People go to work by bike.", answer: "Si va al lavoro in bici.", altAnswers: ["Si va a lavorare in bici.", "Si va al lavoro in bicicletta."], explanation: "\"Si va\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Saturdays people do the shopping for the whole week.", answer: "Il sabato si fa la spesa per tutta la settimana.", explanation: "\"Si fa la spesa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Last Christmas we ate so much!", answer: "L'anno scorso a Natale si è mangiato tantissimo!", altAnswers: ["Lo scorso Natale si è mangiato tantissimo!", "L'anno scorso a Natale abbiamo mangiato tantissimo!"], explanation: "\"Si è mangiato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where we live, people get up early.", answer: "Da noi ci si alza presto.", explanation: "\"Ci si alza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sundays [people meet up] with the family.", sentence: "La domenica ___ con la famiglia.", answer: "ci si riunisce", altAnswers: ["ci si ritrova", "ci si vede", "ci si incontra"], explanation: "\"Ci si\" + reflexive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In summer [many ice creams are eaten].", sentence: "D'estate ___.", answer: "si mangiano molti gelati", altAnswers: ["si mangiano tanti gelati"], explanation: "Plural object." },
      { type: "word-order", prompt: "Put the words in order to say: Where we live, people don't kiss on both cheeks.", words: ["Da", "noi", "non", "ci", "si", "bacia", "sulle", "guance."], translation: "Where we live, people don't kiss on both cheeks.", explanation: "Reciprocal \"baciarsi\" → \"ci si bacia\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Da noi quando si è stanchi si beve un tè.", "Da noi quando si è stanco si beve un tè.", "Da noi quando si sono stanchi si beve un tè.", "Da noi quando si è stanchi si bevono un tè."], correctIndex: 0, explanation: "Plural adjective, singular verb (\"un tè\")." },
      { type: "dictation", audio: "Da noi si cena presto e ci si toglie le scarpe in casa.", explanation: "\"Si cena\", \"ci si toglie\"." },
      { type: "speak", text: "Da noi si cena alle sei, ci si toglie le scarpe in casa e la domenica si va a fare una passeggiata.", prompt: "Say it in Italian: Where we live, dinner is at six, people take their shoes off in the house and on Sundays they go for a walk.", tip: "\"Toglie\": TO-glie, gl is one soft sound.", explanation: "\"Si\" and \"ci si\"." },
    ],
  },
];

export const IT_B1_U21_WRITING: WriteExercise = {
  type: "write",
  prompt: "An Italian student is coming to stay with you and asks: \"Come si vive da voi?\" Describe the daily customs where you live (meals, work, free time, greetings), compare one or two with Italy, and tell a short memory of a vacation or celebration.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses the impersonal si with a singular verb (si cena, si va, si lavora)",
    "Uses ci si with reflexive verbs (ci si alza, ci si saluta, ci si toglie le scarpe)",
    "Makes adjectives plural after si è (quando si è giovani / stanchi)",
    "Uses the passive si with agreement (si mangiano molti dolci) and the past with essere (si è mangiato, ci si è divertiti)",
  ],
  modelAnswer: "Ciao Matteo! Da noi la vita è molto diversa dall'Italia. Ci si alza presto, verso le sei e mezza, e si fa una colazione abbondante. Si pranza a mezzogiorno con un panino e si cena alle sei, quindi quando si è in Italia si ha sempre fame alle otto! In casa ci si toglie le scarpe, e quando ci si incontra non ci si bacia: ci si stringe la mano o ci si abbraccia. Nel fine settimana si va nei parchi o si fanno gite in montagna. A dicembre si mangiano tanti biscotti e si fanno feste in casa. L'anno scorso a Capodanno si è ballato fino alle tre e ci si è divertiti tantissimo. Ti aspettiamo!",
  explanation: "\"Si fa\", \"si pranza\", \"si cena\" and \"si va\" are impersonal with singular verbs; \"ci si alza\", \"ci si toglie\", \"ci si bacia\" and \"ci si abbraccia\" are reflexive verbs made impersonal. \"Quando si è in Italia\" is followed by \"si ha\". \"Si mangiano tanti biscotti\" and \"si fanno gite\" agree with plural objects; \"si è ballato\" and \"ci si è divertiti\" show the two past patterns.",
};
