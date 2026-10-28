// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u29.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 29: Reading Lab. Editorials,
// long-form articles, a literary excerpt, official documents and CILS DUE
// reading, grammar and speaking tasks; review of Upper Intermediate grammar
// in reading.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U29: Lesson[] = [
  {
    slug: "b2-reading-editorial",
    level: "IT-B2",
    number: 1,
    title: "Reading: An Editorial",
    summary: "Read a newspaper editorial on remote working and the revival of small towns, and identify the thesis, the arguments and the author's stance.",
    duration: "18 min",
    sections: [
      {
        heading: "The thesis",
        body: [
          "An editorial, \"l'editoriale\" or \"il commento\", states a position. The thesis usually comes in the first paragraph, often after a fact or a question. Look for opinion markers: \"è evidente che\", \"credo che\" + subjunctive, \"non si può negare che\" + subjunctive, \"è ora di\" (it's time to).",
          "This editorial is about \"lo smart working\", as Italians call remote working, and \"i borghi\", the small historic towns that are losing their inhabitants.",
          "Italian newspapers often borrow English words with an Italian twist: \"lo smart working\" means working from home, not working smartly, and \"il lavoro agile\" is the official term. Editorials are signed by the editor or a columnist, \"l'editorialista\", and often use \"noi\" for the newspaper's view: \"secondo noi\", \"riteniamo che\" + subjunctive.",
        ],
        examples: [
          { es: "Da qualche anno migliaia di persone lavorano da casa almeno due giorni alla settimana.", en: "For a few years now thousands of people have been working from home at least two days a week." },
          { es: "Molti si chiedono: perché pagare un affitto altissimo in città, se si può lavorare da un borgo?", en: "Many wonder: why pay a sky-high rent in the city if you can work from a small town?" },
          { es: "Credo che questa sia un'occasione storica per l'Italia dei piccoli centri.", en: "I believe this is a historic opportunity for the Italy of small towns." },
          { es: "È ora che la politica se ne accorga.", en: "It's time politicians noticed." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is the author's thesis?", options: ["Remote working is a historic opportunity for small towns.", "Remote working should be banned.", "Cities are better places to live.", "Rents in small towns are too high."], correctIndex: 0, explanation: "\"Un'occasione storica per l'Italia dei piccoli centri\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believe this is a historic opportunity.", answer: "Credo che questa sia un'occasione storica.", altAnswers: ["Credo che sia un'occasione storica.", "Penso che questa sia un'occasione storica."], explanation: "\"Credo che\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's time politicians noticed.", answer: "È ora che la politica se ne accorga.", altAnswers: ["È ora che i politici se ne accorgano."], explanation: "\"È ora che\" + subjunctive; \"accorgersene\" = to notice it." },
        ],
      },
      {
        heading: "Arguments and counter-arguments",
        body: [
          "Good editorials anticipate objections: \"certo, qualcuno obietterà che\" (of course, someone will object that), \"è vero che ... ma\", \"tuttavia\". Then they answer them. Mark each paragraph: argument for, objection, reply.",
        ],
        examples: [
          { es: "I vantaggi sono evidenti: case meno care, meno traffico, più tempo libero.", en: "The advantages are clear: cheaper houses, less traffic, more free time." },
          { es: "Certo, qualcuno obietterà che nei borghi manca la banda larga.", en: "Of course, someone will object that small towns lack broadband." },
          { es: "È vero, ma proprio per questo servono investimenti pubblici.", en: "True, but that's exactly why public investment is needed." },
          { es: "Senza scuole e servizi sanitari, nessuna famiglia si trasferirà.", en: "Without schools and health services, no family will move." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What objection does the author anticipate?", options: ["Small towns lack broadband.", "Houses are too expensive.", "There's too much traffic.", "Nobody wants to work from home."], correctIndex: 0, explanation: "\"Manca la banda larga\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Of course, someone will object that broadband is missing.", answer: "Certo, qualcuno obietterà che manca la banda larga.", altAnswers: ["Certo, qualcuno obietterà che non c'è la banda larga."], explanation: "\"Obiettare\" = to object." },
          { type: "listen-choose", audio: "Senza scuole e servizi sanitari, nessuna famiglia si trasferirà.", question: "What is needed for families to move?", options: ["schools and health services", "cheaper cars", "more stores", "better weather"], correctIndex: 0, explanation: "\"Scuole e servizi sanitari\"." },
        ],
      },
      {
        heading: "The conclusion",
        body: [
          "The ending returns to the thesis and often calls for action, with \"occorre\" (it is necessary), \"bisogna che\" + subjunctive, or a rhetorical question. Tone words reveal the stance: \"finalmente\" (positive), \"purtroppo\" (negative), \"ancora una volta\" (critical: once again).",
          "To judge the author's stance, collect the evaluative words: adjectives (\"storica\", \"evidenti\"), adverbs (\"davvero\", \"finalmente\") and verbs (\"occorre\", \"bisogna\"). A balanced article uses \"da un lato ... dall'altro\" (on the one hand ... on the other); a committed editorial, like this one, takes a side and keeps it to the end.",
        ],
        examples: [
          { es: "Occorre un piano nazionale, non iniziative isolate.", en: "A national plan is needed, not isolated initiatives." },
          { es: "Bisogna che lo Stato investa nei piccoli centri.", en: "The state needs to invest in small towns." },
          { es: "Vogliamo davvero perdere ancora una volta questa occasione?", en: "Do we really want to miss this opportunity once again?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The state needs to invest in small towns.", answer: "Bisogna che lo Stato investa nei piccoli centri.", altAnswers: ["È necessario che lo Stato investa nei piccoli centri.", "Occorre che lo Stato investa nei piccoli centri."], explanation: "\"Bisogna che\" + subjunctive." },
          { type: "speak", text: "Vogliamo davvero perdere ancora una volta questa occasione?", prompt: "Read the closing question with emphasis: Do we really want to miss this opportunity once again?", tip: "oc-ca-SIO-ne: stress on sio.", explanation: "A rhetorical question closes the editorial." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "What is the author's attitude to politicians?", options: ["critical: they haven't acted yet", "very positive", "neutral", "the author doesn't mention them"], correctIndex: 0, explanation: "\"È ora che la politica se ne accorga\", \"ancora una volta\"." },
      { type: "multiple-choice", question: "What does the author ask for?", options: ["a national plan", "lower taxes in cities", "more offices", "a ban on remote work"], correctIndex: 0, explanation: "\"Occorre un piano nazionale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thousands of people work from home two days a week.", answer: "Migliaia di persone lavorano da casa due giorni alla settimana.", altAnswers: ["Migliaia di persone lavorano da casa due giorni a settimana."], explanation: "\"Migliaia di\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why pay a sky-high rent in the city?", answer: "Perché pagare un affitto altissimo in città?", explanation: "Infinitive in a rhetorical question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The advantages are clear: cheaper houses and less traffic.", answer: "I vantaggi sono evidenti: case meno care e meno traffico.", altAnswers: ["I vantaggi sono chiari: case meno care e meno traffico."], explanation: "\"Meno\" + adjective, \"meno\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "True, but that's exactly why investment is needed.", answer: "È vero, ma proprio per questo servono investimenti.", altAnswers: ["È vero, ma proprio per questo ci vogliono investimenti.", "Vero, ma proprio per questo servono investimenti."], explanation: "\"Proprio per questo\" = that's exactly why." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A national plan is needed.", answer: "Occorre un piano nazionale.", altAnswers: ["Serve un piano nazionale.", "Ci vuole un piano nazionale."], explanation: "\"Occorre\" = it is necessary." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No family will move without schools.", answer: "Nessuna famiglia si trasferirà senza scuole.", explanation: "\"Nessuna\" + singular, no extra \"non\" before the verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It cannot be denied] that the advantages are clear.", sentence: "___ che i vantaggi siano evidenti.", answer: "Non si può negare", explanation: "Followed by the subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Small towns [lack] broadband.", sentence: "Nei borghi ___ la banda larga.", answer: "manca", explanation: "\"Mancare\": the missing thing is the subject." },
      { type: "word-order", prompt: "Put the words in order to say: It's time politicians noticed.", words: ["È ora", "che la politica", "se ne", "accorga."], translation: "It's time politicians noticed.", explanation: "\"Se ne accorga\": reflexive + \"ne\"." },
      { type: "dictation", audio: "Certo, qualcuno obietterà che nei borghi manca la banda larga.", explanation: "Anticipating an objection." },
      { type: "speak", text: "Credo che lo smart working sia un'occasione storica per i piccoli centri.", prompt: "State the thesis: I believe remote working is a historic opportunity for small towns.", tip: "sto-ri-ca: stress on sto.", explanation: "\"Credo che\" + subjunctive." },
    ],
  },
  {
    slug: "b2-reading-long-form",
    level: "IT-B2",
    number: 2,
    title: "Reading: A Long-Form Article",
    summary: "Read a long magazine article about towns selling houses for one euro, and follow its structure from scene to data to voices to conclusion.",
    duration: "18 min",
    sections: [
      {
        heading: "The opening scene",
        body: [
          "Long-form articles, \"i reportage\", open with a scene, then widen to the facts. This one is about \"le case a un euro\": several Italian towns, many of them in the South, Sicily and Sardinia, have sold abandoned houses for a symbolic euro, on condition that buyers renovate them within a few years.",
          "The opening uses the present for vividness and description verbs: \"si affaccia\" (overlooks), \"si arrampica\" (climbs), \"si intravede\" (you can glimpse).",
          "For background, reportage switches to past tenses: \"il paese ha perso metà dei suoi abitanti\", \"negli anni Sessanta molti partivano per il Nord\". Notice how the time words change: \"oggi\", \"negli ultimi cinquant'anni\", \"un tempo\" (once, in the past). They help you follow the structure.",
        ],
        examples: [
          { es: "Il paese si arrampica su una collina, tra ulivi e case di pietra.", en: "The village climbs a hillside, among olive trees and stone houses." },
          { es: "Molte finestre sono chiuse da anni; dietro una porta si intravede un cortile pieno di erbacce.", en: "Many windows have been shut for years; behind a door you can glimpse a courtyard full of weeds." },
          { es: "Sulla piazza, due anziani giocano a carte davanti al bar.", en: "In the square, two old men are playing cards outside the bar." },
          { es: "Negli ultimi cinquant'anni il paese ha perso metà dei suoi abitanti.", en: "In the last fifty years the village has lost half its inhabitants." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What does the opening scene show?", options: ["a half-empty hill village", "a busy city center", "a new housing development", "a seaside resort"], correctIndex: 0, explanation: "Closed windows, weeds, a lost population." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the last fifty years the village has lost half its inhabitants.", answer: "Negli ultimi cinquant'anni il paese ha perso metà dei suoi abitanti.", altAnswers: ["Negli ultimi cinquant'anni il paese ha perso la metà dei suoi abitanti.", "Negli ultimi 50 anni il paese ha perso metà dei suoi abitanti."], explanation: "\"Metà dei\" = half of." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many windows have been shut for years.", answer: "Molte finestre sono chiuse da anni.", explanation: "Present + \"da\" for an ongoing state." },
        ],
      },
      {
        heading: "How it works",
        body: [
          "The middle section explains the scheme. Watch the conditions: \"a patto che\" + subjunctive, \"entro\" + time limit, \"pena\" (on pain of: \"pena la perdita della cauzione\", or else you lose the deposit).",
        ],
        examples: [
          { es: "La casa costa un euro, a patto che l'acquirente la ristrutturi entro tre anni.", en: "The house costs one euro, provided the buyer renovates it within three years." },
          { es: "Bisogna versare una cauzione di alcune migliaia di euro.", en: "You have to pay a deposit of a few thousand euros." },
          { es: "Se i lavori non vengono completati, la cauzione non viene restituita.", en: "If the work isn't completed, the deposit isn't returned." },
          { es: "Le spese di ristrutturazione, però, possono superare i cinquantamila euro.", en: "Renovation costs, however, can exceed fifty thousand euros." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What's the main condition for buying a house?", options: ["renovating it within a set time", "living there all year", "being Italian", "opening a store"], correctIndex: 0, explanation: "\"A patto che l'acquirente la ristrutturi entro tre anni\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The house costs one euro, provided the buyer renovates it.", answer: "La casa costa un euro, a patto che l'acquirente la ristrutturi.", altAnswers: ["La casa costa un euro, purché l'acquirente la ristrutturi."], explanation: "\"A patto che\" + subjunctive." },
          { type: "listen-choose", audio: "Le spese di ristrutturazione, però, possono superare i cinquantamila euro.", question: "What's the catch?", options: ["Renovation can cost over 50,000 euros.", "The house costs 50,000 euros.", "The deposit is 50 euros.", "There's a 50-year wait."], correctIndex: 0, explanation: "\"Superare i cinquantamila euro\"." },
        ],
      },
      {
        heading: "Voices and conclusion",
        body: [
          "Reportage mixes data with quoted voices. Note the reporting verbs and the closing balance: \"resta da vedere se\" (it remains to be seen whether), \"una cosa è certa\".",
          "Quoted speech in Italian journalism uses double quotation marks or « », followed by the speaker and a reporting verb that is often placed after the quote: \"ammette\", \"racconta\", \"spiega\", \"aggiunge\". The reporting verb tells you the speaker's attitude, so read it carefully: \"ammette\" suggests a confession, \"sostiene\" a disputed claim.",
        ],
        examples: [
          { es: "\"Abbiamo speso molto più del previsto\", ammette una coppia di olandesi.", en: "We spent much more than expected, admits a Dutch couple." },
          { es: "Il sindaco sostiene che il paese sia rinato.", en: "The mayor maintains that the village has been reborn." },
          { es: "Resta da vedere se i nuovi abitanti resteranno tutto l'anno.", en: "It remains to be seen whether the new residents will stay all year round." },
          { es: "Una cosa è certa: le case a un euro hanno riacceso l'attenzione sui borghi.", en: "One thing is certain: one-euro houses have revived interest in small towns." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It remains to be seen whether they will stay.", answer: "Resta da vedere se resteranno.", altAnswers: ["Rimane da vedere se resteranno.", "Resta da vedere se rimarranno."], explanation: "\"Resta da vedere se\" + indicative." },
          { type: "speak", text: "Una cosa è certa: le case a un euro hanno riacceso l'attenzione sui borghi.", prompt: "Read the conclusion: One thing is certain: one-euro houses have revived interest in small towns.", tip: "ri-ac-CE-so: stress on ce.", explanation: "\"Riaccendere\" → \"riacceso\"." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "What does the Dutch couple say?", options: ["They spent more than expected.", "The house was free.", "They want to sell.", "They are very disappointed."], correctIndex: 0, explanation: "\"Molto più del previsto\"." },
      { type: "multiple-choice", question: "What is the author's final position?", options: ["balanced: success so far, but the future is uncertain", "completely negative", "completely enthusiastic", "the author gives no view"], correctIndex: 0, explanation: "\"Resta da vedere\" + \"una cosa è certa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The village climbs a hillside.", answer: "Il paese si arrampica su una collina.", altAnswers: ["Il paese si arrampica sulla collina."], explanation: "\"Arrampicarsi\" = to climb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to pay a deposit.", answer: "Bisogna versare una cauzione.", altAnswers: ["Bisogna pagare una cauzione.", "Si deve versare una cauzione."], explanation: "\"Versare\" = to pay in." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the work isn't completed, the deposit isn't returned.", answer: "Se i lavori non vengono completati, la cauzione non viene restituita.", altAnswers: ["Se i lavori non sono completati, la cauzione non è restituita.", "Se i lavori non vengono completati, la cauzione non viene resa."], explanation: "\"Venire\" passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I spent much more than expected.", answer: "Ho speso molto più del previsto.", altAnswers: ["Ho speso molto di più del previsto."], explanation: "\"Del previsto\" = than expected." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The mayor maintains that the village has been reborn.", answer: "Il sindaco sostiene che il paese sia rinato.", altAnswers: ["Il sindaco sostiene che il paese è rinato.", "La sindaca sostiene che il paese sia rinato."], explanation: "\"Sostenere che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two old men are playing cards outside the bar.", answer: "Due anziani giocano a carte davanti al bar.", altAnswers: ["Due anziani stanno giocando a carte davanti al bar."], explanation: "\"Giocare a carte\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Behind a door [you can glimpse] a courtyard.", sentence: "Dietro una porta ___ un cortile.", answer: "si intravede", explanation: "\"Intravedere\" = to glimpse." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Costs can [exceed] fifty thousand euros.", sentence: "Le spese possono ___ i cinquantamila euro.", answer: "superare", explanation: "\"Superare\" = to exceed." },
      { type: "word-order", prompt: "Put the words in order to say: It remains to be seen whether the new residents will stay.", words: ["Resta", "da vedere", "se i nuovi abitanti", "resteranno."], translation: "It remains to be seen whether the new residents will stay.", explanation: "\"Resta da\" + infinitive." },
      { type: "dictation", audio: "La casa costa un euro, a patto che l'acquirente la ristrutturi entro tre anni.", explanation: "\"A patto che\" + subjunctive." },
      { type: "speak", text: "Il paese ha perso metà dei suoi abitanti, ma oggi qualcosa sta cambiando.", prompt: "Summarize: The village lost half its inhabitants, but today something is changing.", tip: "a-bi-TAN-ti: stress on tan.", explanation: "Contrast with \"ma\"." },
    ],
  },
  {
    slug: "b2-reading-literary-excerpt",
    level: "IT-B2",
    number: 3,
    title: "Reading: A Literary Excerpt",
    summary: "Read a short literary text written for this course in the style of twentieth-century Italian prose, with the passato remoto, the imperfect and free indirect thought.",
    duration: "18 min",
    sections: [
      {
        heading: "The setting",
        body: [
          "Literary Italian narrates with the passato remoto for events and the imperfect for background. This short text, written for this course, tells of Anna, who returns to her childhood village after many years. Read the first paragraph and notice the descriptive imperfects.",
          "In novels the passato remoto is normal in every region, even where people never use it in speech. Learn to recognize the irregular forms, especially the third person: \"fu\" (essere), \"ebbe\" (avere), \"disse\", \"fece\", \"vide\", \"venne\", \"prese\", \"mise\", \"scese\", \"rimase\". The imperfect sets the scene: weather, light, smells, feelings.",
        ],
        examples: [
          { es: "Il treno arrivò a Valdera poco prima del tramonto.", en: "The train reached Valdera shortly before sunset." },
          { es: "La stazione era piccola e deserta, come se da anni non ci scendesse più nessuno.", en: "The station was small and deserted, as if nobody had gotten off there for years." },
          { es: "Anna scese con la valigia e rimase un momento ferma sul binario.", en: "Anna got off with her suitcase and stood still on the platform for a moment." },
          { es: "L'aria sapeva di fieno e di legna bruciata.", en: "The air smelled of hay and burning wood." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which tense tells the main events?", options: ["the passato remoto: arrivò, scese, rimase", "the imperfect: era, sapeva", "the future", "the present"], correctIndex: 0, explanation: "Passato remoto for events, imperfect for description." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "Anna got off with her suitcase.", answer: "Anna scese con la valigia.", explanation: "\"Scendere\" → \"scese\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The air smelled of hay.", answer: "L'aria sapeva di fieno.", altAnswers: ["L'aria odorava di fieno."], explanation: "\"Sapere di\" = to smell or taste of." },
        ],
      },
      {
        heading: "Memory",
        body: [
          "The second paragraph moves into Anna's thoughts without quotation marks: \"il discorso indiretto libero\" (free indirect thought). The narrator uses the third person, but the words are hers: \"Era cambiato tutto? No, forse era cambiata lei\".",
          "Free indirect thought keeps the narrator's tenses (third person, imperfect and pluperfect) but uses the character's words, questions and exclamations: \"Com'era piccola, quella piazza!\". It lets the reader hear the character's voice without quotation marks, and it is common in modern Italian fiction.",
        ],
        examples: [
          { es: "Attraversò la piazza senza fretta.", en: "She crossed the square unhurriedly." },
          { es: "Il bar di Gino c'era ancora, ma l'insegna era sbiadita.", en: "Gino's bar was still there, but the sign had faded." },
          { es: "Era cambiato tutto? No, forse era cambiata lei.", en: "Had everything changed? No, perhaps she was the one who had changed." },
          { es: "Da bambina quella piazza le sembrava immensa.", en: "As a child that square had seemed huge to her." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Era cambiato tutto? No, forse era cambiata lei.\" Whose thoughts are these?", options: ["Anna's, in free indirect thought", "the narrator's opinion", "Gino's words", "a newspaper quote"], correctIndex: 0, explanation: "Third person, but her thoughts." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a child that square seemed huge to her.", answer: "Da bambina quella piazza le sembrava immensa.", altAnswers: ["Da piccola quella piazza le sembrava immensa.", "Da bambina quella piazza le pareva immensa."], explanation: "\"Da bambina\" = as a child; \"le sembrava\" = seemed to her." },
          { type: "listen-choose", audio: "Il bar di Gino c'era ancora, ma l'insegna era sbiadita.", question: "What had changed about the bar?", options: ["The sign had faded.", "It had closed.", "It had a new owner.", "It had moved."], correctIndex: 0, explanation: "\"Sbiadita\" = faded." },
        ],
      },
      {
        heading: "The encounter",
        body: [
          "The text ends with a meeting and a line of dialogue. Literary dialogue in Italian often uses the dash or « » instead of quotation marks. Notice the gesture verbs: \"sorrise\", \"si voltò\" (turned around), \"esitò\" (hesitated).",
        ],
        examples: [
          { es: "Qualcuno la chiamò per nome. Anna si voltò.", en: "Someone called her by name. Anna turned around." },
          { es: "Un uomo anziano la guardava dalla porta del bar.", en: "An old man was watching her from the door of the bar." },
          { es: "Esitò un attimo, poi sorrise: «Gino... sei tu?»", en: "She hesitated a moment, then smiled: Gino... is it you?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "Someone called her by name.", answer: "Qualcuno la chiamò per nome.", explanation: "\"Chiamare per nome\"." },
          { type: "speak", text: "Esitò un attimo, poi sorrise: «Gino... sei tu?»", prompt: "Read the last line with expression: She hesitated a moment, then smiled: Gino... is it you?", tip: "e-si-TÒ: stress on the final ò.", explanation: "Passato remoto of \"esitare\" and \"sorridere\"." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "How does Anna feel when she arrives?", options: ["thoughtful and a little uncertain", "angry", "bored", "in a hurry"], correctIndex: 0, explanation: "She stands still, crosses the square slowly, wonders what has changed." },
      { type: "multiple-choice", question: "\"Come se da anni non ci scendesse più nessuno\" suggests the station feels ...", options: ["abandoned", "crowded", "modern", "dangerous"], correctIndex: 0, explanation: "\"Come se\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "The train reached the village shortly before sunset.", answer: "Il treno arrivò al paese poco prima del tramonto.", altAnswers: ["Il treno giunse al paese poco prima del tramonto."], explanation: "\"Arrivare\" → \"arrivò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The station was small and deserted.", answer: "La stazione era piccola e deserta.", explanation: "Imperfect for description." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "She crossed the square unhurriedly.", answer: "Attraversò la piazza senza fretta.", explanation: "\"Senza fretta\" = without hurry." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Perhaps she was the one who had changed.", answer: "Forse era cambiata lei.", altAnswers: ["Forse era lei a essere cambiata.", "Forse era lei che era cambiata."], explanation: "Subject after the verb for emphasis." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "An old man was watching her.", answer: "Un uomo anziano la guardava.", altAnswers: ["Un vecchio la guardava.", "Un anziano la guardava."], explanation: "Imperfect for an ongoing action." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "Anna turned around.", answer: "Anna si voltò.", altAnswers: ["Anna si girò."], explanation: "\"Voltarsi\" = to turn around." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, in the passato remoto.", en: "She [stood] still on the platform.", sentence: "___ ferma sul binario.", answer: "Rimase", explanation: "\"Rimanere\" → \"rimase\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sign [had faded].", sentence: "L'insegna ___.", answer: "era sbiadita", explanation: "Pluperfect / adjective \"sbiadito\"." },
      { type: "word-order", prompt: "Put the words in order to say: She hesitated a moment, then smiled.", words: ["Esitò", "un attimo,", "poi", "sorrise."], translation: "She hesitated a moment, then smiled.", explanation: "Two passato remoto verbs." },
      { type: "dictation", audio: "Anna scese con la valigia e rimase un momento ferma sul binario.", explanation: "\"Scese\", \"rimase\": irregular passato remoto." },
      { type: "speak", text: "Era cambiato tutto? No, forse era cambiata lei.", prompt: "Read Anna's thought: Had everything changed? No, perhaps she was the one who had changed.", tip: "cam-BIA-ta: stress on bia.", explanation: "Free indirect thought." },
    ],
  },
  {
    slug: "b2-reading-official-document",
    level: "IT-B2",
    number: 4,
    title: "Reading: An Official Document",
    summary: "Read the regulations of a municipal swimming pool and work out what is required, allowed and forbidden.",
    duration: "18 min",
    sections: [
      {
        heading: "Access and requirements",
        body: [
          "Regulations, \"i regolamenti\", are written in impersonal, formal Italian: \"è obbligatorio\", \"è consentito\", \"è vietato\" + infinitive; \"gli utenti\" (users) as the subject; the present with the force of an order (\"l'utente esibisce\": the user must show). Here is the \"Regolamento della piscina comunale\".",
          "\"Esibire\" is to show a document, \"il certificato medico\" is a doctor's note, and \"l'abbonamento\" is a season ticket or membership.",
          "Regulations are divided into numbered articles (\"Art. 1\", \"Art. 2\") and often refer to each other: \"ai sensi dell'art. 3\" (under article 3). The present tense works as an order: \"l'utente esibisce\" means the user must show. \"Si prega di\" + infinitive is the polite version used on signs.",
        ],
        examples: [
          { es: "Art. 1. L'accesso all'impianto è consentito solo agli utenti muniti di abbonamento o biglietto.", en: "Art. 1. Access to the facility is permitted only to users holding a membership or a ticket." },
          { es: "Per i corsi è richiesto il certificato medico per attività sportiva non agonistica.", en: "For courses a medical certificate for non-competitive sports is required." },
          { es: "I minori di 14 anni devono essere accompagnati da un adulto.", en: "Children under 14 must be accompanied by an adult." },
          { es: "All'ingresso l'utente esibisce la tessera al personale.", en: "On entry, users must show their card to the staff." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Who needs to be with an adult?", options: ["children under 14", "everyone on courses", "people without a ticket", "nobody"], correctIndex: 0, explanation: "\"I minori di 14 anni\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "Children under 14 must be accompanied by an adult.", answer: "I minori di 14 anni devono essere accompagnati da un adulto.", altAnswers: ["I minori di quattordici anni devono essere accompagnati da un adulto.", "I minori di 14 anni vanno accompagnati da un adulto."], explanation: "Passive with \"devono essere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "A medical certificate is required.", answer: "È richiesto il certificato medico.", altAnswers: ["È richiesto un certificato medico.", "Si richiede il certificato medico."], explanation: "\"È richiesto\" = is required." },
        ],
      },
      {
        heading: "Rules in the pool",
        body: [
          "The core rules use \"è obbligatorio\" (required) and \"è vietato\" (forbidden). Note \"la cuffia\" (swimming cap), \"le ciabatte\" (pool sandals), \"la doccia\", \"la vasca\" (the pool itself) and \"il bordo vasca\" (poolside).",
        ],
        examples: [
          { es: "Art. 4. In vasca è obbligatorio l'uso della cuffia.", en: "Art. 4. Swimming caps must be worn in the pool." },
          { es: "È obbligatorio fare la doccia prima di entrare in acqua.", en: "Showering before entering the water is required." },
          { es: "È vietato tuffarsi dal bordo vasca.", en: "Diving from the poolside is forbidden." },
          { es: "Negli spogliatoi è vietato introdurre cibi e bevande in vetro.", en: "Bringing food or drinks in glass containers into the locker rooms is forbidden." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What must you wear in the pool?", options: ["a swimming cap", "goggles", "a T-shirt", "nothing special"], correctIndex: 0, explanation: "\"L'uso della cuffia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "Diving from the poolside is forbidden.", answer: "È vietato tuffarsi dal bordo vasca.", altAnswers: ["È vietato tuffarsi dal bordo della vasca.", "È proibito tuffarsi dal bordo vasca."], explanation: "\"È vietato\" + infinitive." },
          { type: "listen-choose", audio: "È obbligatorio fare la doccia prima di entrare in acqua.", question: "What must you do before swimming?", options: ["take a shower", "pay at the desk", "warm up", "remove jewelry"], correctIndex: 0, explanation: "\"Fare la doccia\"." },
        ],
      },
      {
        heading: "Responsibility and sanctions",
        body: [
          "The last articles cover liability and penalties: \"declina ogni responsabilità\" (accepts no liability), \"gli oggetti smarriti\" (lost items), \"il mancato rispetto\" (failure to comply), \"l'allontanamento\" (being asked to leave).",
          "A useful skill is to turn a regulation into plain Italian for a friend: \"è obbligatorio l'uso della cuffia\" becomes \"ti serve la cuffia\", \"è vietato tuffarsi\" becomes \"non ci si può tuffare\". Practice both directions: formal to everyday, and everyday to formal.",
        ],
        examples: [
          { es: "La direzione declina ogni responsabilità per gli oggetti lasciati negli spogliatoi.", en: "The management accepts no liability for items left in the locker rooms." },
          { es: "Il mancato rispetto del regolamento comporta l'allontanamento dall'impianto.", en: "Failure to comply with the regulations will result in removal from the facility." },
          { es: "Gli oggetti smarriti vanno consegnati alla reception.", en: "Lost items must be handed in at reception." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "Lost items must be handed in at reception.", answer: "Gli oggetti smarriti vanno consegnati alla reception.", altAnswers: ["Gli oggetti smarriti devono essere consegnati alla reception."], explanation: "\"Vanno consegnati\": obligation." },
          { type: "speak", text: "Il mancato rispetto del regolamento comporta l'allontanamento dall'impianto.", prompt: "Read the rule aloud: Failure to comply with the regulations will result in removal from the facility.", tip: "al-lon-ta-na-MEN-to: double l.", explanation: "Nominal style: \"il mancato rispetto\"." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Your phone is stolen from the locker room. What does the regulation say?", options: ["The management accepts no liability.", "The pool will pay for it.", "You must report it to the police first.", "Insurance covers it."], correctIndex: 0, explanation: "\"Declina ogni responsabilità\"." },
      { type: "multiple-choice", question: "Can you bring a glass bottle of water into the locker room?", options: ["No, glass is forbidden.", "Yes, freely.", "Only with a membership.", "Only for children."], correctIndex: 0, explanation: "\"È vietato introdurre ... bevande in vetro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "Access is permitted only to users with a ticket.", answer: "L'accesso è consentito solo agli utenti muniti di biglietto.", altAnswers: ["L'accesso è consentito solo agli utenti con il biglietto.", "L'accesso è consentito soltanto agli utenti muniti di biglietto."], explanation: "\"Munito di\" = holding, provided with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "Swimming caps must be worn in the pool.", answer: "In vasca è obbligatorio l'uso della cuffia.", altAnswers: ["In vasca è obbligatorio indossare la cuffia.", "In piscina è obbligatorio l'uso della cuffia."], explanation: "\"L'uso di\" makes it nominal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "The management accepts no liability.", answer: "La direzione declina ogni responsabilità.", explanation: "Fixed formula." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in regulation style.", source: "On entry, users must show their card.", answer: "All'ingresso l'utente esibisce la tessera.", altAnswers: ["All'ingresso gli utenti devono esibire la tessera.", "All'ingresso l'utente deve esibire la tessera."], explanation: "\"Esibire\" = to show a document." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Showering before entering the water is required.", answer: "È obbligatorio fare la doccia prima di entrare in acqua.", altAnswers: ["Prima di entrare in acqua è obbligatorio fare la doccia."], explanation: "\"Prima di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, to a friend.", source: "You need a swimming cap, otherwise they won't let you in.", answer: "Ti serve la cuffia, altrimenti non ti fanno entrare.", altAnswers: ["Ci vuole la cuffia, altrimenti non ti fanno entrare.", "Ti serve la cuffia, sennò non ti fanno entrare."], explanation: "The same rule in everyday Italian." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Failure to comply] with the rules.", sentence: "___ delle regole.", answer: "Il mancato rispetto", explanation: "\"Mancato\" = failed, missed." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Users [holding] a membership.", sentence: "Gli utenti ___ abbonamento.", answer: "muniti di", altAnswers: ["provvisti di", "in possesso di"], explanation: "\"Munito di\" = provided with." },
      { type: "word-order", prompt: "Put the words in order to say: Diving from the poolside is forbidden.", words: ["È vietato", "tuffarsi", "dal bordo", "vasca."], translation: "Diving from the poolside is forbidden.", explanation: "\"È vietato\" + infinitive." },
      { type: "dictation", audio: "La direzione declina ogni responsabilità per gli oggetti lasciati negli spogliatoi.", explanation: "\"Declinare ogni responsabilità\"." },
      { type: "speak", text: "In vasca è obbligatoria la cuffia ed è vietato tuffarsi dal bordo.", prompt: "Explain the rules: In the pool a cap is required and diving from the side is forbidden.", tip: "ob-bli-ga-TO-ria: stress on to.", explanation: "\"Obbligatoria\" agrees with \"la cuffia\"." },
    ],
  },
  {
    slug: "b2-drill-reading-vocabulary",
    level: "IT-B2",
    number: 5,
    title: "Drill: Reading Vocabulary",
    summary: "High-repetition production of the key words from this unit's readings: editorials, reportage, literature and regulations.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Press and reportage",
        body: [
          "Pattern: \"l'editoriale\", \"la tesi\", \"obiettare\", \"occorre\", \"il borgo\", \"lo spopolamento\" (depopulation), \"la cauzione\", \"l'acquirente\" (buyer), \"ristrutturare\", \"resta da vedere\".",
        ],
        examples: [
          { es: "Lo spopolamento dei borghi è un problema nazionale.", en: "The depopulation of small towns is a national problem." },
          { es: "L'acquirente deve ristrutturare la casa.", en: "The buyer must renovate the house." },
          { es: "La tesi dell'editoriale è chiara.", en: "The editorial's thesis is clear." },
          { es: "Occorre un intervento rapido.", en: "Swift action is needed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The depopulation of small towns is a national problem.", answer: "Lo spopolamento dei borghi è un problema nazionale.", altAnswers: ["Lo spopolamento dei piccoli centri è un problema nazionale."], explanation: "\"Lo spopolamento\"." },
          { type: "listen-choose", audio: "L'acquirente deve ristrutturare la casa.", question: "Who must renovate the house?", options: ["the buyer", "the seller", "the council", "the tenant"], correctIndex: 0, explanation: "\"L'acquirente\" = buyer." },
        ],
      },
      {
        heading: "Literature and rules",
        body: [
          "Pattern: literary verbs in the passato remoto (\"si voltò\", \"esitò\", \"sorrise\", \"rimase\"); regulation words (\"è consentito\", \"è vietato\", \"munito di\", \"esibire\", \"declinare ogni responsabilità\").",
        ],
        examples: [
          { es: "Si voltò e sorrise.", en: "She turned around and smiled." },
          { es: "Rimase in silenzio a lungo.", en: "He stayed silent for a long time." },
          { es: "È consentito l'ingresso agli animali.", en: "Animals are allowed in." },
          { es: "Si prega di esibire un documento.", en: "Please show an ID document." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "She turned around and smiled.", answer: "Si voltò e sorrise.", altAnswers: ["Si girò e sorrise."], explanation: "\"Voltarsi\", \"sorridere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a notice.", source: "Please show an ID document.", answer: "Si prega di esibire un documento.", altAnswers: ["Si prega di esibire un documento d'identità."], explanation: "\"Esibire\" = to show." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Swift action is needed.", answer: "Occorre un intervento rapido.", altAnswers: ["Serve un intervento rapido.", "Ci vuole un intervento rapido."], explanation: "\"Occorre\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The editorial's thesis is clear.", answer: "La tesi dell'editoriale è chiara.", explanation: "\"La tesi\" is invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The buyer must pay a deposit.", answer: "L'acquirente deve versare una cauzione.", altAnswers: ["L'acquirente deve pagare una cauzione."], explanation: "\"Versare una cauzione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It remains to be seen whether it will work.", answer: "Resta da vedere se funzionerà.", altAnswers: ["Rimane da vedere se funzionerà."], explanation: "\"Resta da vedere se\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "He stayed silent for a long time.", answer: "Rimase in silenzio a lungo.", altAnswers: ["Rimase a lungo in silenzio.", "Restò in silenzio a lungo."], explanation: "\"Rimanere\" → \"rimase\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, in the passato remoto.", source: "She hesitated, then answered.", answer: "Esitò, poi rispose.", altAnswers: ["Esitò e poi rispose."], explanation: "\"Rispondere\" → \"rispose\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a notice.", source: "Animals are allowed in.", answer: "È consentito l'ingresso agli animali.", altAnswers: ["Gli animali sono ammessi.", "L'ingresso agli animali è consentito."], explanation: "\"È consentito\" = is permitted." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone will object that it costs too much.", answer: "Qualcuno obietterà che costa troppo.", explanation: "\"Obiettare\" = to object." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The town is suffering from [depopulation].", sentence: "Il paese soffre di ___.", answer: "spopolamento", explanation: "\"S-\" + \"popolo\" + \"-mento\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The management [accepts no liability].", sentence: "La direzione ___.", answer: "declina ogni responsabilità", explanation: "Fixed formula." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They want to [renovate] the old house.", sentence: "Vogliono ___ la vecchia casa.", answer: "ristrutturare", explanation: "\"Ristrutturare\" = to renovate." },
      { type: "word-order", prompt: "Put the words in order to say: The buyer must renovate the house within three years.", words: ["L'acquirente", "deve ristrutturare", "la casa", "entro", "tre anni."], translation: "The buyer must renovate the house within three years.", explanation: "\"Entro\" = within." },
      { type: "dictation", audio: "Lo spopolamento dei borghi è un problema nazionale.", explanation: "\"Spopolamento\", \"borghi\"." },
      { type: "speak", text: "Occorre un intervento rapido contro lo spopolamento dei borghi.", prompt: "Make the point: Swift action is needed against the depopulation of small towns.", tip: "spo-po-la-MEN-to: stress on men.", explanation: "Editorial vocabulary." },
    ],
  },
  {
    slug: "b2-drill-reading-grammar",
    level: "IT-B2",
    number: 6,
    title: "Drill: Grammar in Texts",
    summary: "High-repetition cloze practice: subjunctive, connectors, prepositions and pronouns inside short texts.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Verbs in context",
        body: [
          "Pattern: in a cloze, read the whole sentence before filling the gap. Look left for the trigger (\"credo che\", \"benché\", \"se\") and right for clues to tense and person. A trigger in the past or conditional calls for the imperfect or pluperfect subjunctive.",
        ],
        examples: [
          { es: "Benché il paese sia piccolo, offre molti servizi.", en: "Although the town is small, it offers many services." },
          { es: "Pensavo che la biblioteca fosse chiusa.", en: "I thought the library was closed." },
          { es: "Se avessero investito prima, oggi il borgo sarebbe vivo.", en: "If they had invested earlier, the town would be alive today." },
          { es: "È il libro più bello che io abbia mai letto.", en: "It's the best book I've ever read." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although the town [is] small, it offers many services.", sentence: "Benché il paese ___ piccolo, offre molti servizi.", answer: "sia", explanation: "\"Benché\" + present subjunctive." },
          { type: "listen-choose", audio: "Se avessero investito prima, oggi il borgo sarebbe vivo.", question: "What does the speaker regret?", options: ["that nobody invested earlier", "that the town is too busy", "that houses are expensive", "that the stores closed"], correctIndex: 0, explanation: "Mixed hypothetical." },
        ],
      },
      {
        heading: "Connectors, prepositions, pronouns",
        body: [
          "Pattern: connectors show the logic (\"tuttavia\", \"quindi\", \"infatti\", \"invece\"); prepositions follow verbs (\"dipendere da\", \"pensare a\", \"riuscire a\", \"smettere di\"); pronouns refer back (\"ne\" for \"di\" + noun, \"ci\" for \"a\" + place or idea).",
        ],
        examples: [
          { es: "Il progetto era costoso; tuttavia, è stato approvato.", en: "The project was expensive; however, it was approved." },
          { es: "Molto dipende dai finanziamenti.", en: "A lot depends on the funding." },
          { es: "Il borgo? Ne parlano tutti i giornali.", en: "The town? All the papers are talking about it." },
          { es: "Ci penso io.", en: "I'll take care of it." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A lot depends [on the] funding.", sentence: "Molto dipende ___ finanziamenti.", answer: "dai", explanation: "\"Dipendere da\" + \"i\" = \"dai\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The project was expensive; however, it was approved.", answer: "Il progetto era costoso; tuttavia, è stato approvato.", altAnswers: ["Il progetto era costoso, tuttavia è stato approvato.", "Il progetto era costoso; tuttavia è stato approvato."], explanation: "\"Tuttavia\" = however." },
        ],
      },
    ],
    exercises: [
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I thought the library [was] closed.", sentence: "Pensavo che la biblioteca ___ chiusa.", answer: "fosse", explanation: "Past trigger: imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's the best book I [have] ever read.", sentence: "È il libro più bello che io ___ mai letto.", answer: "abbia", explanation: "Superlative + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If they had invested earlier, the town [would be] alive today.", sentence: "Se avessero investito prima, oggi il borgo ___ vivo.", answer: "sarebbe", explanation: "Mixed hypothetical: present conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They couldn't [manage to] sell the house.", sentence: "Non sono riusciti ___ vendere la casa.", answer: "a", explanation: "\"Riuscire a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He stopped [smoking].", sentence: "Ha smesso ___.", answer: "di fumare", explanation: "\"Smettere di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The houses are cheap; [in fact] some cost one euro.", sentence: "Le case costano poco; ___, alcune costano un euro.", answer: "infatti", explanation: "\"Infatti\" = in fact, indeed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although the town is small, it offers many services.", answer: "Benché il paese sia piccolo, offre molti servizi.", altAnswers: ["Sebbene il paese sia piccolo, offre molti servizi.", "Anche se il paese è piccolo, offre molti servizi."], explanation: "\"Benché\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll take care of it.", answer: "Ci penso io.", explanation: "\"Pensarci\" = to see to it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they had invested earlier, the town would be alive today.", answer: "Se avessero investito prima, oggi il borgo sarebbe vivo.", altAnswers: ["Se avessero investito prima, oggi il paese sarebbe vivo."], explanation: "Mixed hypothetical." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone is talking about it.", answer: "Ne parlano tutti.", altAnswers: ["Tutti ne parlano."], explanation: "\"Ne\" = about it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A lot depends on the funding.", answer: "Molto dipende dai finanziamenti.", altAnswers: ["Molto dipende dal finanziamento.", "Dipende molto dai finanziamenti."], explanation: "\"Dipendere da\"." },
      { type: "word-order", prompt: "Put the words in order to say: I thought the library was closed.", words: ["Pensavo", "che la biblioteca", "fosse", "chiusa."], translation: "I thought the library was closed.", explanation: "Imperfect subjunctive after a past opinion." },
      { type: "dictation", audio: "Benché il paese sia piccolo, offre molti servizi ai suoi abitanti.", explanation: "\"Benché\" + subjunctive." },
      { type: "speak", text: "Il progetto era costoso; tuttavia, è stato approvato.", prompt: "Read with a pause: The project was expensive; however, it was approved.", tip: "tut-ta-VI-a: stress on vi.", explanation: "\"Tuttavia\" marks contrast." },
    ],
  },
  {
    slug: "b2-cils-due-reading-1",
    level: "IT-B2",
    number: 7,
    title: "CILS DUE: Reading, Part 1 of 2",
    summary: "Practice a CILS DUE-style reading task: a magazine article on urban vegetable gardens with multiple-choice comprehension questions.",
    duration: "18 min",
    sections: [
      {
        heading: "The task and the text",
        body: [
          "The CILS DUE reading section usually includes multiple-choice questions on an article, a task where you find which information a text contains, and a task where you rebuild a text in the right order. This lesson practices the first. Read the questions first, then the text; the answers follow the order of the text.",
          "The article is about \"gli orti urbani\", community vegetable gardens on public land in Italian cities.",
        ],
        examples: [
          { es: "Negli ultimi dieci anni gli orti urbani si sono moltiplicati in tutte le grandi città italiane.", en: "In the last ten years urban vegetable gardens have multiplied in all the large Italian cities." },
          { es: "I Comuni assegnano piccoli appezzamenti di terreno ai cittadini che ne fanno richiesta.", en: "City governments assign small plots of land to citizens who apply for them." },
          { es: "All'inizio erano soprattutto pensionati, ma oggi coltivano anche giovani famiglie e studenti.", en: "At first they were mostly retirees, but today young families and students also grow food there." },
          { es: "Chi ottiene un orto si impegna a coltivarlo senza pesticidi chimici.", en: "Anyone who gets a plot undertakes to grow it without chemical pesticides." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Who could use the gardens at first?", options: ["They were used mainly by retirees.", "They were only for students.", "They were only for families.", "They were closed to the public."], correctIndex: 0, explanation: "\"All'inizio erano soprattutto pensionati\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today young families and students also grow food there.", answer: "Oggi coltivano anche giovani famiglie e studenti.", altAnswers: ["Oggi ci coltivano anche giovani famiglie e studenti.", "Oggi anche giovani famiglie e studenti coltivano."], explanation: "Subject after the verb, as in the text." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "City governments assign small plots to citizens who apply.", answer: "I Comuni assegnano piccoli appezzamenti ai cittadini che ne fanno richiesta.", altAnswers: ["I comuni assegnano piccoli appezzamenti ai cittadini che ne fanno richiesta.", "I Comuni assegnano piccoli appezzamenti ai cittadini che li richiedono."], explanation: "\"Farne richiesta\" = to apply for it." },
        ],
      },
      {
        heading: "Benefits",
        body: [
          "The middle of the article lists benefits. Multiple-choice distractors often take a true detail and change it slightly: \"social\" becomes \"economic\", \"some\" becomes \"all\". Read the options against the exact words.",
          "Watch especially for quantifiers: \"alcuni\" (some), \"molti\" (many), \"la maggior parte\" (most), \"tutti\" (all), \"nessuno\" (none). An option that says \"tutti\" when the text says \"molti\" is wrong, even if everything else matches. The same goes for frequency words: \"spesso\", \"a volte\", \"sempre\", \"mai\".",
        ],
        examples: [
          { es: "Secondo uno studio, chi frequenta un orto si sente meno solo.", en: "According to a study, people who use a garden feel less lonely." },
          { es: "Gli orti favoriscono la conoscenza tra vicini di culture diverse.", en: "The gardens encourage people from different cultures to get to know each other." },
          { es: "Il risparmio sulla spesa è modesto, ma non trascurabile.", en: "The saving on food shopping is modest, but not negligible." },
          { es: "Molte scuole portano gli alunni negli orti per lezioni all'aperto.", en: "Many schools bring students to the gardens for outdoor lessons." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What does the article say about saving money?", options: ["The saving is modest but not negligible.", "Families save half their food budget.", "There is no saving.", "The gardens cost more than they save."], correctIndex: 0, explanation: "\"Modesto, ma non trascurabile\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People who use a garden feel less lonely.", answer: "Chi frequenta un orto si sente meno solo.", altAnswers: ["Chi frequenta un orto si sente meno sola."], explanation: "\"Chi\" + singular verb." },
          { type: "listen-choose", audio: "Molte scuole portano gli alunni negli orti per lezioni all'aperto.", question: "Why do schools use the gardens?", options: ["for outdoor lessons", "for field day", "to sell vegetables", "for lunch breaks"], correctIndex: 0, explanation: "\"Lezioni all'aperto\"." },
        ],
      },
      {
        heading: "Problems",
        body: [
          "The final paragraph presents problems: waiting lists, theft and bureaucracy. Watch for the author's balance: \"non mancano però i problemi\" (there are, however, problems).",
        ],
        examples: [
          { es: "Non mancano però i problemi: le liste d'attesa sono lunghissime.", en: "There are, however, problems: the waiting lists are extremely long." },
          { es: "In alcuni quartieri si registrano furti di attrezzi e ortaggi.", en: "In some neighborhoods tools and vegetables are stolen." },
          { es: "Per ottenere un orto si può aspettare anche due anni.", en: "You can wait up to two years to get a plot." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The waiting lists are extremely long.", answer: "Le liste d'attesa sono lunghissime.", altAnswers: ["Le liste di attesa sono lunghissime.", "Le liste d'attesa sono molto lunghe."], explanation: "\"-issime\" for intensity." },
          { type: "speak", text: "Gli orti urbani sono utili, ma le liste d'attesa sono lunghissime.", prompt: "Summarize the article: Urban gardens are useful, but the waiting lists are extremely long.", tip: "lun-GHIS-si-me: stress on ghis.", explanation: "Balanced summary." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "How have urban gardens changed in the last ten years?", options: ["They have multiplied.", "They have disappeared.", "They have become private.", "They have moved outside cities."], correctIndex: 0, explanation: "\"Si sono moltiplicati\"." },
      { type: "multiple-choice", question: "Which is NOT a benefit mentioned?", options: ["higher property prices", "less loneliness", "contact between cultures", "outdoor lessons"], correctIndex: 0, explanation: "Property prices aren't mentioned." },
      { type: "multiple-choice", question: "How long can you wait for a plot?", options: ["up to two years", "two weeks", "two months", "there's no wait"], correctIndex: 0, explanation: "\"Anche due anni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Urban gardens have multiplied in all the large cities.", answer: "Gli orti urbani si sono moltiplicati in tutte le grandi città.", explanation: "Reflexive \"moltiplicarsi\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At first they were mostly retirees.", answer: "All'inizio erano soprattutto pensionati.", altAnswers: ["All'inizio erano per lo più pensionati.", "All'inizio erano principalmente pensionati."], explanation: "\"Soprattutto\" = mostly." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The gardens encourage contact between neighbors.", answer: "Gli orti favoriscono la conoscenza tra vicini.", altAnswers: ["Gli orti favoriscono il contatto tra vicini.", "Gli orti favoriscono i rapporti tra vicini."], explanation: "\"Favorire\" = to encourage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The saving is modest, but not negligible.", answer: "Il risparmio è modesto, ma non trascurabile.", explanation: "\"Trascurabile\" = negligible." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are, however, problems.", answer: "Non mancano però i problemi.", altAnswers: ["Però non mancano i problemi.", "Ci sono però dei problemi."], explanation: "\"Non mancano\" = there is no lack of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can wait up to two years.", answer: "Si può aspettare anche due anni.", altAnswers: ["Si possono aspettare anche due anni.", "Si può attendere anche due anni."], explanation: "\"Anche\" + number = up to, as much as." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In some neighborhoods tools are stolen.", answer: "In alcuni quartieri si registrano furti di attrezzi.", altAnswers: ["In alcuni quartieri vengono rubati gli attrezzi.", "In alcuni quartieri si rubano gli attrezzi.", "In alcuni quartieri vengono rubati attrezzi."], explanation: "\"Si registrano furti\" is news style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many schools bring students for outdoor lessons.", answer: "Molte scuole portano gli alunni per lezioni all'aperto.", altAnswers: ["Molte scuole portano gli studenti per lezioni all'aperto.", "Molte scuole portano gli alunni a fare lezione all'aperto."], explanation: "\"All'aperto\" = outdoors." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Anyone who gets a plot [undertakes] to grow it organically.", sentence: "Chi ottiene un orto ___ a coltivarlo in modo biologico.", answer: "si impegna", explanation: "\"Impegnarsi a\" = to undertake to." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Small [plots] of land.", sentence: "Piccoli ___ di terreno.", answer: "appezzamenti", explanation: "\"L'appezzamento\" = plot." },
      { type: "word-order", prompt: "Put the words in order to say: Many schools bring students to the gardens.", words: ["Molte scuole", "portano", "gli alunni", "negli orti."], translation: "Many schools bring students to the gardens.", explanation: "\"Negli\" = in + gli." },
      { type: "dictation", audio: "Chi ottiene un orto si impegna a coltivarlo senza pesticidi chimici.", explanation: "\"Impegnarsi a\" + infinitive." },
      { type: "speak", text: "Secondo uno studio, chi frequenta un orto si sente meno solo.", prompt: "Report the finding: According to a study, people who use a garden feel less lonely.", tip: "fre-QUEN-ta: stress on quen.", explanation: "\"Chi\" + singular." },
    ],
  },
  {
    slug: "b2-cils-due-reading-2",
    level: "IT-B2",
    number: 8,
    title: "CILS DUE: Reading, Part 2 of 2",
    summary: "Practice two more CILS DUE-style reading tasks: finding which information a text contains and rebuilding a text in the right order.",
    duration: "18 min",
    sections: [
      {
        heading: "Finding information",
        body: [
          "In this task you read a text and pick, from a longer list, only the statements the text actually contains. The text here is a museum's announcement of a new evening opening. Wrong options are plausible: they use the same words but change a number, a day or a condition.",
          "Work through the list one statement at a time and look for the exact place in the text that confirms it. If you can't find it, don't tick it, even if it sounds likely. Numbers, days, times and conditions (\"solo\", \"anche\", \"tranne\") are where the traps usually are.",
        ],
        examples: [
          { es: "Dal 1° giugno il museo resterà aperto il venerdì fino alle 23.", en: "From June 1 the museum will stay open on Fridays until 11 p.m." },
          { es: "Dopo le 19 il biglietto costerà la metà.", en: "After 7 p.m. tickets will cost half price." },
          { es: "Ogni venerdì sera è prevista una visita guidata gratuita alle 21.", en: "Every Friday evening there will be a free guided tour at 9 p.m." },
          { es: "Il bar del museo sarà aperto, ma il ristorante resterà chiuso.", en: "The museum café will be open, but the restaurant will stay closed." },
        ],
        checkpoint: [
          { type: "multi-select", question: "Which statements are in the text?", options: ["The museum stays open until 11 p.m. on Fridays.", "Tickets are half price after 7 p.m.", "The guided tour is free.", "The restaurant is open in the evening.", "The museum opens on Sundays until midnight."], correctIndexes: [0, 1, 2], explanation: "The restaurant stays closed; Sundays aren't mentioned." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After 7 p.m. tickets will cost half price.", answer: "Dopo le 19 il biglietto costerà la metà.", altAnswers: ["Dopo le 19 i biglietti costeranno la metà.", "Dopo le sette di sera il biglietto costerà la metà."], explanation: "\"Costare la metà\" = to cost half." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The restaurant will stay closed.", answer: "Il ristorante resterà chiuso.", altAnswers: ["Il ristorante rimarrà chiuso."], explanation: "Future of \"restare\"." },
        ],
      },
      {
        heading: "Rebuilding a text",
        body: [
          "In the reconstruction task, the paragraphs or sentences of a text are mixed up. Use the clues: connectors (\"inoltre\", \"tuttavia\", \"infine\"), pronouns that refer back (\"questa iniziativa\", \"lo\"), and time words (\"in un primo momento\", \"in seguito\").",
        ],
        examples: [
          { es: "In un primo momento l'iniziativa era prevista solo per l'estate.", en: "At first the initiative was planned only for the summer." },
          { es: "In seguito, visto il successo, è stata estesa a tutto l'anno.", en: "Later, given its success, it was extended to the whole year." },
          { es: "Questa decisione ha sorpreso molti.", en: "This decision surprised many people." },
          { es: "Infine, il museo ha annunciato nuove aperture serali anche il sabato.", en: "Finally, the museum announced new evening openings on Saturdays too." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence must come right after \"In seguito, visto il successo, è stata estesa a tutto l'anno\"?", options: ["Questa decisione ha sorpreso molti.", "In un primo momento l'iniziativa era prevista solo per l'estate.", "Dal 1° giugno il museo resterà aperto il venerdì.", "Il bar del museo sarà aperto."], correctIndex: 0, explanation: "\"Questa decisione\" refers back to the extension." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Later, given its success, it was extended to the whole year.", answer: "In seguito, visto il successo, è stata estesa a tutto l'anno.", altAnswers: ["In seguito, dato il successo, è stata estesa a tutto l'anno.", "In seguito, visto il successo, è stata estesa all'intero anno."], explanation: "\"Visto\" + noun = given." },
          { type: "listen-choose", audio: "Infine, il museo ha annunciato nuove aperture serali anche il sabato.", question: "What did the museum finally announce?", options: ["Saturday evening openings too", "closing on Saturdays", "free entry on Saturdays", "a new restaurant"], correctIndex: 0, explanation: "\"Anche il sabato\"." },
        ],
      },
      {
        heading: "Put it together",
        body: [
          "Now rebuild the short text in the right order: first the original plan, then the change, then the reaction, then the latest news. When you finish, read it through once to check that every pronoun and connector makes sense.",
        ],
        examples: [
          { es: "In un primo momento l'iniziativa era prevista solo per l'estate. In seguito, visto il successo, è stata estesa a tutto l'anno.", en: "At first the initiative was planned only for the summer. Later, given its success, it was extended to the whole year." },
          { es: "Questa decisione ha sorpreso molti. Infine, il museo ha annunciato nuove aperture serali anche il sabato.", en: "This decision surprised many people. Finally, the museum announced new evening openings on Saturdays too." },
          { es: "Le prime parole di ogni frase sono la chiave per l'ordine.", en: "The first words of each sentence are the key to the order." },
        ],
        checkpoint: [
          { type: "word-order", prompt: "Put the sentences in order to rebuild the text.", words: ["In un primo momento l'iniziativa era prevista solo per l'estate.", "In seguito, visto il successo, è stata estesa a tutto l'anno.", "Questa decisione ha sorpreso molti.", "Infine, il museo ha annunciato nuove aperture serali anche il sabato."], translation: "At first the initiative was planned only for the summer. Later, given its success, it was extended to the whole year. This decision surprised many people. Finally, the museum announced new evening openings on Saturdays too.", explanation: "Time words and \"questa decisione\" fix the order." },
          { type: "speak", text: "In un primo momento l'iniziativa era prevista solo per l'estate.", prompt: "Read the first sentence: At first the initiative was planned only for the summer.", tip: "i-ni-zia-TI-va: stress on ti.", explanation: "\"In un primo momento\" opens a sequence." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Until what time is the museum open on Fridays?", options: ["11 p.m.", "9 p.m.", "7 p.m.", "midnight"], correctIndex: 0, explanation: "\"Fino alle 23\"." },
      { type: "multiple-choice", question: "What time is the free guided tour?", options: ["9 p.m.", "7 p.m.", "11 p.m.", "There isn't one."], correctIndex: 0, explanation: "\"Alle 21\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "From June 1 the museum will stay open until 11 p.m.", answer: "Dal 1° giugno il museo resterà aperto fino alle 23.", altAnswers: ["Dal primo giugno il museo resterà aperto fino alle 23.", "Dal 1° giugno il museo rimarrà aperto fino alle 23.", "Dal primo giugno il museo rimarrà aperto fino alle ventitré."], explanation: "\"Il primo\" for the first of the month." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every Friday evening there will be a free guided tour.", answer: "Ogni venerdì sera è prevista una visita guidata gratuita.", altAnswers: ["Ogni venerdì sera ci sarà una visita guidata gratuita."], explanation: "\"È prevista\" = is planned." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum café will be open.", answer: "Il bar del museo sarà aperto.", altAnswers: ["La caffetteria del museo sarà aperta."], explanation: "\"Il bar\" = café in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At first the initiative was planned only for the summer.", answer: "In un primo momento l'iniziativa era prevista solo per l'estate.", altAnswers: ["All'inizio l'iniziativa era prevista solo per l'estate."], explanation: "\"In un primo momento\" = at first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This decision surprised many people.", answer: "Questa decisione ha sorpreso molti.", altAnswers: ["Questa decisione ha sorpreso molte persone.", "Questa decisione ha stupito molti."], explanation: "\"Questa\" refers back." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Finally, the museum announced evening openings on Saturdays too.", answer: "Infine, il museo ha annunciato aperture serali anche il sabato.", altAnswers: ["Infine il museo ha annunciato aperture serali anche il sabato."], explanation: "\"Infine\" closes a sequence." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Given] its success, it was extended.", sentence: "___ il successo, è stata estesa.", answer: "Visto", altAnswers: ["Dato"], explanation: "\"Visto\" + noun = given." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tickets will cost [half].", sentence: "Il biglietto costerà ___.", answer: "la metà", explanation: "\"La metà\" = half." },
      { type: "word-order", prompt: "Put the words in order to say: The museum café will be open, but the restaurant will stay closed.", words: ["Il bar del museo", "sarà aperto,", "ma il ristorante", "resterà chiuso."], translation: "The museum café will be open, but the restaurant will stay closed.", explanation: "Contrast with \"ma\"." },
      { type: "dictation", audio: "Dal primo giugno il museo resterà aperto il venerdì fino alle ventitré.", explanation: "Date and time." },
      { type: "speak", text: "Dopo le diciannove il biglietto costa la metà e alle ventuno c'è una visita guidata gratuita.", prompt: "Tell a friend: After 7 p.m. tickets are half price and at 9 there's a free guided tour.", tip: "di-cian-NO-ve: stress on no.", explanation: "24-hour times." },
    ],
  },
  {
    slug: "b2-cils-due-grammar",
    level: "IT-B2",
    number: 9,
    title: "CILS DUE: Grammar",
    summary: "Practice CILS DUE-style grammar tasks: cloze texts with verbs, prepositions, articles, pronouns and connectors.",
    duration: "18 min",
    sections: [
      {
        heading: "Verbs in a cloze",
        body: [
          "The CILS DUE grammar section (\"analisi delle strutture di comunicazione\") asks you to complete texts: sometimes choosing from options, sometimes writing the missing word. Verbs are the biggest category: check the trigger, the time frame and the subject before you write.",
          "The text below is an email from a student to her landlady.",
          "In a cloze, never fill a gap by looking only at the word before it. Read the whole sentence, and sometimes the next one: a subject that appears later, a past tense in the following clause or a formal \"Lei\" in the greeting can all change the answer. When you finish, read the complete text once to check agreement.",
        ],
        examples: [
          { es: "Gentile signora Rossi, Le scrivo perché vorrei che controllasse il riscaldamento.", en: "Dear Mrs. Rossi, I'm writing because I'd like you to check the heating." },
          { es: "Da quando sono arrivata, i termosifoni non hanno mai funzionato bene.", en: "Since I arrived, the radiators have never worked properly." },
          { es: "Se il tecnico potesse passare questa settimana, Le sarei grata.", en: "If the technician could come by this week, I would be grateful to you." },
          { es: "Resto in attesa di una Sua risposta.", en: "I look forward to your reply." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like you [to check] the heating.", sentence: "Vorrei che ___ il riscaldamento.", answer: "controllasse", explanation: "\"Vorrei che\" + imperfect subjunctive, \"Lei\" form." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the technician [could] come this week, I'd be grateful.", sentence: "Se il tecnico ___ passare questa settimana, Le sarei grata.", answer: "potesse", explanation: "Hypothetical: \"se\" + imperfect subjunctive." },
          { type: "multiple-choice", question: "Choose the right form: \"Da quando sono arrivata, i termosifoni non ___ mai funzionato bene.\"", options: ["hanno", "sono", "abbiano", "avevano"], correctIndex: 0, explanation: "\"Funzionare\" takes \"avere\"; present perfect for \"da quando\"." },
        ],
      },
      {
        heading: "Prepositions and articles",
        body: [
          "Prepositions are the second big category. Remember verb + preposition pairs (\"rivolgersi a\", \"occuparsi di\", \"dipendere da\", \"riuscire a\") and the articulated forms (\"nel\", \"dalla\", \"sugli\"). Articles: \"lo\" / \"gli\" before s + consonant, z, ps, gn; \"l'\" before a vowel.",
        ],
        examples: [
          { es: "Mi sono rivolta all'amministratore del condominio.", en: "I contacted the building manager." },
          { es: "Si occupa lui della manutenzione degli impianti.", en: "He's the one who looks after the maintenance of the systems." },
          { es: "Tutto dipende dalla disponibilità del tecnico.", en: "Everything depends on the technician's availability." },
          { es: "Gli studenti dell'appartamento accanto hanno lo stesso problema.", en: "The students in the apartment next door have the same problem." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Everything depends [on the] technician's availability.", sentence: "Tutto dipende ___ disponibilità del tecnico.", answer: "dalla", explanation: "\"Da\" + \"la\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I contacted the building manager.", answer: "Mi sono rivolta all'amministratore del condominio.", altAnswers: ["Mi sono rivolto all'amministratore del condominio.", "Ho contattato l'amministratore del condominio."], explanation: "\"Rivolgersi a\" = to contact, turn to." },
          { type: "listen-choose", audio: "Gli studenti dell'appartamento accanto hanno lo stesso problema.", question: "Who else has the problem?", options: ["the students next door", "the landlady", "the building manager", "nobody"], correctIndex: 0, explanation: "\"Dell'appartamento accanto\"." },
        ],
      },
      {
        heading: "Pronouns and connectors",
        body: [
          "Pronouns and connectors complete the picture. Combined pronouns: \"glielo\", \"me ne\", \"ce l'ho\". Connectors: \"tuttavia\" (however), \"perciò\" (therefore), \"affinché\" + subjunctive (so that), \"a meno che\" + subjunctive (unless).",
        ],
        examples: [
          { es: "Gliel'ho già detto due volte, tuttavia non è cambiato niente.", en: "I've already told him twice; however, nothing has changed." },
          { es: "Le scrivo affinché il problema venga risolto prima dell'inverno.", en: "I'm writing so that the problem is solved before the winter." },
          { es: "Non pagherò l'aumento, a meno che il riscaldamento non venga riparato.", en: "I won't pay the increase unless the heating is repaired." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm writing so that the problem [is solved].", sentence: "Le scrivo affinché il problema ___ risolto.", answer: "venga", altAnswers: ["sia"], explanation: "\"Affinché\" + subjunctive." },
          { type: "speak", text: "Le scrivo affinché il problema venga risolto prima dell'inverno.", prompt: "Read the line from the email: I'm writing so that the problem is solved before the winter.", tip: "af-fin-CHÉ: stress on the final é.", explanation: "\"Affinché\" + passive subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Choose the right form: \"Le sarei grata se il tecnico ___ passare.\"", options: ["potesse", "può", "potrà", "possa"], correctIndex: 0, explanation: "Hypothetical: imperfect subjunctive." },
      { type: "multiple-choice", question: "Choose the right article: \"___ studenti dell'appartamento accanto.\"", options: ["Gli", "I", "Le", "Lo"], correctIndex: 0, explanation: "\"Gli\" before s + consonant." },
      { type: "multiple-choice", question: "Choose the right connector: \"Gliel'ho detto due volte, ___ non è cambiato niente.\"", options: ["tuttavia", "perciò", "affinché", "siccome"], correctIndex: 0, explanation: "Contrast: \"tuttavia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "I'd like you to check the heating.", answer: "Vorrei che controllasse il riscaldamento.", explanation: "\"Vorrei che\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Since I arrived, the radiators have never worked properly.", answer: "Da quando sono arrivata, i termosifoni non hanno mai funzionato bene.", altAnswers: ["Da quando sono arrivato, i termosifoni non hanno mai funzionato bene."], explanation: "\"Da quando\" + passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He looks after the maintenance.", answer: "Si occupa lui della manutenzione.", altAnswers: ["Si occupa della manutenzione.", "Lui si occupa della manutenzione."], explanation: "\"Occuparsi di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already told him twice.", answer: "Gliel'ho già detto due volte.", explanation: "\"Glielo\" + \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I won't pay unless the heating is repaired.", answer: "Non pagherò a meno che il riscaldamento non venga riparato.", altAnswers: ["Non pagherò a meno che il riscaldamento venga riparato.", "Non pagherò a meno che il riscaldamento non sia riparato."], explanation: "\"A meno che (non)\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "I look forward to your reply.", answer: "Resto in attesa di una Sua risposta.", altAnswers: ["Resto in attesa di una sua risposta.", "Rimango in attesa di una Sua risposta."], explanation: "Formal closing formula." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [contacted] the building manager.", sentence: "Mi sono ___ all'amministratore.", answer: "rivolta", altAnswers: ["rivolto"], explanation: "\"Rivolgersi\" → \"rivolto\"; agreement with the subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The students [in the] apartment next door.", sentence: "Gli studenti ___ appartamento accanto.", answer: "dell'", explanation: "\"Di\" + \"l'\"." },
      { type: "word-order", prompt: "Put the words in order to say: Everything depends on the technician's availability.", words: ["Tutto", "dipende", "dalla disponibilità", "del tecnico."], translation: "Everything depends on the technician's availability.", explanation: "\"Dipendere da\"." },
      { type: "dictation", audio: "Se il tecnico potesse passare questa settimana, Le sarei grata.", explanation: "\"Potesse\" + \"sarei\": hypothetical." },
      { type: "speak", text: "Gentile signora Rossi, Le scrivo perché vorrei che controllasse il riscaldamento.", prompt: "Read the opening of the email: Dear Mrs. Rossi, I'm writing because I'd like you to check the heating.", tip: "con-trol-LAS-se: double l and double s.", explanation: "Formal \"Le\" and imperfect subjunctive." },
    ],
  },
  {
    slug: "b2-cils-due-speaking",
    level: "IT-B2",
    number: 10,
    title: "CILS DUE: Speaking",
    summary: "Prepare the CILS DUE speaking test: a conversation with the examiner, a role play and a short monologue on a topic or an image.",
    duration: "18 min",
    sections: [
      {
        heading: "The conversation",
        body: [
          "The CILS DUE speaking test (\"produzione orale\") usually has a dialogue with the examiner, which may include a role play, and a monologue where you speak for a few minutes on a topic or an image. The examiner uses \"Lei\": answer in full sentences, give reasons and examples, and don't be afraid of short pauses with \"dunque\" or \"vediamo\".",
          "Examiners assess fluency, accuracy, range of vocabulary and how well you interact. It's better to use a structure you control than to attempt a complex one and stop halfway. If you don't know a word, explain around it: \"è una cosa che si usa per\" + infinitive, \"non mi viene la parola, ma\" (the word escapes me, but).",
        ],
        examples: [
          { es: "Mi parli un po' di Lei: che cosa fa nella vita?", en: "Tell me a little about yourself: what do you do?" },
          { es: "Lavoro come ingegnera in un'azienda di energia rinnovabile.", en: "I work as an engineer in a renewable energy company." },
          { es: "Ho cominciato a studiare italiano perché il mio compagno è di Bari.", en: "I started learning Italian because my partner is from Bari." },
          { es: "Dunque, vediamo... direi che la cosa che mi piace di più è la cucina.", en: "Well, let's see... I'd say what I like most is the food." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I started learning Italian because my partner is from Bari.", answer: "Ho cominciato a studiare italiano perché il mio compagno è di Bari.", altAnswers: ["Ho iniziato a studiare italiano perché il mio compagno è di Bari.", "Ho cominciato a studiare l'italiano perché la mia compagna è di Bari.", "Ho cominciato a studiare italiano perché la mia compagna è di Bari."], explanation: "\"Cominciare a\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Well, let's see... I'd say what I like most is the food.", answer: "Dunque, vediamo... direi che la cosa che mi piace di più è la cucina.", altAnswers: ["Allora, vediamo... direi che la cosa che mi piace di più è la cucina."], explanation: "Fillers buy time: \"dunque\", \"vediamo\"." },
          { type: "listen-choose", audio: "Mi parli un po' di Lei: che cosa fa nella vita?", question: "What is the examiner asking?", options: ["what you do for a living", "where you live", "how old you are", "why you're late"], correctIndex: 0, explanation: "\"Che cosa fa nella vita?\" = what do you do?" },
        ],
      },
      {
        heading: "The role play",
        body: [
          "In a role play you get a situation card: for example, you bought a jacket that has a broken zipper and want a refund. Use polite requests (\"vorrei\", \"potrebbe\"), explain (\"il problema è che\"), insist politely (\"capisco, però\") and reach a solution (\"allora, se per Lei va bene\").",
          "Read the card carefully and make sure you cover every point it asks for: the examiner checks that you complete the task, not just that you speak correctly. Keep the register consistent: if you are a customer speaking to a salesclerk, use \"Lei\" from beginning to end.",
        ],
        examples: [
          { es: "Buongiorno, ho comprato questa giacca la settimana scorsa, ma la cerniera si è rotta.", en: "Good morning, I bought this jacket last week, but the zipper has broken." },
          { es: "Vorrei sapere se è possibile avere un rimborso.", en: "I'd like to know if it's possible to have a refund." },
          { es: "Capisco, però l'ho usata solo due volte.", en: "I understand, but I've only worn it twice." },
          { es: "Allora, se per Lei va bene, la cambio con un'altra taglia.", en: "Then, if that's all right with you, I'll exchange it for another size." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, to the salesclerk.", source: "I'd like to know if it's possible to have a refund.", answer: "Vorrei sapere se è possibile avere un rimborso.", altAnswers: ["Vorrei sapere se è possibile ottenere un rimborso.", "Vorrei sapere se sarebbe possibile avere un rimborso."], explanation: "Polite indirect question." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I understand, but I've only worn it twice.", answer: "Capisco, però l'ho usata solo due volte.", altAnswers: ["Capisco, però l'ho messa solo due volte.", "Capisco, ma l'ho usata solo due volte.", "Capisco, però l'ho indossata solo due volte."], explanation: "Agreement: \"l'ho usata\" (la giacca)." },
        ],
      },
      {
        heading: "The monologue",
        body: [
          "For the monologue, structure is everything: introduce the topic (\"vorrei parlare di\"), give two or three points with connectors (\"innanzitutto\", \"inoltre\", \"d'altra parte\"), add a personal example, and conclude (\"per concludere\"). With an image: \"nella foto si vede\", \"in primo piano\" (in the foreground), \"sullo sfondo\" (in the background), \"sembra che\" + subjunctive.",
        ],
        examples: [
          { es: "Nella foto si vede una famiglia a tavola.", en: "In the photo you can see a family at the table." },
          { es: "In primo piano c'è un bambino che ride; sullo sfondo, una finestra aperta.", en: "In the foreground there's a child laughing; in the background, an open window." },
          { es: "Sembra che stiano festeggiando qualcosa.", en: "It looks as if they're celebrating something." },
          { es: "Per concludere, credo che il pranzo della domenica sia ancora molto importante in Italia.", en: "To conclude, I think Sunday lunch is still very important in Italy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It looks as if they're celebrating something.", answer: "Sembra che stiano festeggiando qualcosa.", altAnswers: ["Sembra che festeggino qualcosa."], explanation: "\"Sembra che\" + subjunctive." },
          { type: "speak", text: "Nella foto si vede una famiglia a tavola: in primo piano c'è un bambino che ride.", prompt: "Describe the photo: In the photo you can see a family at the table: in the foreground there's a child laughing.", tip: "PRI-mo PIA-no: stress on pri and pia.", explanation: "Photo description formulas." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work as an engineer.", answer: "Lavoro come ingegnere.", altAnswers: ["Lavoro come ingegnera.", "Faccio l'ingegnere.", "Faccio l'ingegnera."], explanation: "\"Lavorare come\" + job." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The zipper has broken.", answer: "La cerniera si è rotta.", altAnswers: ["La zip si è rotta.", "Si è rotta la cerniera."], explanation: "\"Rompersi\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If that's all right with you, I'll exchange it.", answer: "Se per Lei va bene, la cambio.", altAnswers: ["Se per Lei va bene, lo cambio.", "Se Le va bene, la cambio.", "Se per lei va bene, la cambio."], explanation: "Formal \"Lei\" in a role play." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the background there's an open window.", answer: "Sullo sfondo c'è una finestra aperta.", explanation: "\"Sullo sfondo\" = in the background." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "To conclude, I think Sunday lunch is still important.", answer: "Per concludere, credo che il pranzo della domenica sia ancora importante.", altAnswers: ["Per concludere, penso che il pranzo della domenica sia ancora importante.", "In conclusione, credo che il pranzo della domenica sia ancora importante."], explanation: "\"Credo che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to talk about the role of the family.", answer: "Vorrei parlare del ruolo della famiglia.", explanation: "Monologue opening." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, families eat together less often.", answer: "Innanzitutto, le famiglie mangiano insieme meno spesso.", altAnswers: ["Innanzitutto le famiglie mangiano insieme meno spesso.", "Prima di tutto, le famiglie mangiano insieme meno spesso."], explanation: "\"Innanzitutto\" = first of all." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the foreground] there's a child.", sentence: "___ c'è un bambino.", answer: "In primo piano", explanation: "\"In primo piano\" = in the foreground." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I understand, [but] I've only worn it twice.", sentence: "Capisco, ___ l'ho usata solo due volte.", answer: "però", altAnswers: ["ma"], explanation: "Polite insistence." },
      { type: "word-order", prompt: "Put the words in order to say: In the photo you can see a family at the table.", words: ["Nella foto", "si vede", "una famiglia", "a tavola."], translation: "In the photo you can see a family at the table.", explanation: "\"Si vede\" = you can see." },
      { type: "multiple-choice", question: "Which phrase is best to buy time before answering?", options: ["Dunque, vediamo...", "Non lo so.", "Boh.", "Prossima domanda."], correctIndex: 0, explanation: "A polite filler keeps the conversation going." },
      { type: "dictation", audio: "Vorrei sapere se è possibile avere un rimborso.", explanation: "Polite indirect question." },
      { type: "speak", text: "Vorrei parlare del pranzo della domenica: innanzitutto, è un momento per stare insieme; inoltre, è legato alla tradizione.", prompt: "Start a monologue: I'd like to talk about Sunday lunch: first of all, it's a time to be together; also, it's linked to tradition.", tip: "in-nan-zi-TUT-to: stress on tut.", explanation: "Structured monologue with connectors." },
    ],
  },
];

export const IT_B2_U29_WRITING: WriteExercise = {
  type: "write",
  prompt: "A local Italian newspaper has published an editorial arguing that cars should be banned from the historic centers of all Italian cities. Write a letter to the editor (lettera al direttore) giving your opinion: state your position, give two arguments, answer one possible objection and conclude.",
  minWords: 150,
  maxWords: 220,
  rubric: [
    "Follows the structure of an argumentative text: thesis, arguments, objection and reply, conclusion",
    "Uses opinion verbs with the subjunctive (credo che, non si può negare che, è importante che) and at least one hypothetical with se + imperfect subjunctive",
    "Links ideas with formal connectors (innanzitutto, inoltre, certo, tuttavia, per concludere)",
    "Uses the formal register of a letter to the editor (Gentile Direttore, Cordiali saluti) and precise vocabulary (traffico, inquinamento, residenti, mezzi pubblici, zona a traffico limitato)",
  ],
  modelAnswer: "Gentile Direttore,\n\nho letto con interesse l'editoriale di domenica sulla chiusura dei centri storici alle auto e desidero esprimere il mio pieno accordo.\n\nInnanzitutto, credo che le nostre piazze siano un patrimonio troppo prezioso per trasformarle in parcheggi. Inoltre, non si può negare che il traffico sia la prima causa dell'inquinamento in città: se i centri fossero chiusi alle auto, l'aria sarebbe più pulita per tutti.\n\nCerto, qualcuno obietterà che i commercianti perderebbero clienti. Tuttavia, l'esperienza di molte città europee dimostra il contrario: dove le strade sono diventate pedonali, i negozi hanno aumentato le vendite, perché la gente passeggia e si ferma più volentieri.\n\nÈ importante, però, che i residenti, gli anziani e le persone con disabilità possano continuare a muoversi, e che i mezzi pubblici diventino più frequenti ed economici.\n\nPer concludere, la chiusura dei centri storici non è un sacrificio, ma un investimento sulla qualità della nostra vita.\n\nCordiali saluti,\nLaura Bianchi",
  explanation: "The letter states the thesis at once, gives two arguments with \"innanzitutto\" and \"inoltre\", answers an objection with \"certo ... tuttavia\", and closes with a clear conclusion. Opinion structures take the subjunctive (\"credo che siano\", \"non si può negare che sia\", \"è importante che possano\"), and \"se fossero chiusi ... sarebbe\" adds a hypothetical.",
};
