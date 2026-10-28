// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u16.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 16: The Remote Past for Reading. Passato remoto forms for
// recognition (regular, essere / avere, common irregulars, the 1-3-3
// pattern), where it is used, and its passato prossimo equivalent.
// Translation items accept both the remote past and the passato prossimo.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U16: Lesson[] = [
  {
    slug: "b1-passato-remoto-regular",
    level: "IT-B1",
    number: 1,
    title: "The Remote Past: Regular Forms",
    summary: "Recognise the regular passato remoto (parlò, credette, partì, parlarono) and match each form to the passato prossimo you already use.",
    duration: "17 min",
    sections: [
      {
        heading: "A past for books",
        body: [
          "Italian has a second simple past, the \"passato remoto\" (remote past). In novels, fairy tales and history books it does the job the passato prossimo does in conversation: \"Il re parlò\" (the king spoke) = \"Il re ha parlato\". Your aim at this level is to recognise it when you read, and to produce the most common third-person forms.",
          "It's a one-word tense, like English spoke or left, so there's no auxiliary and no participle agreement: \"La regina partì\" (the queen left), not \"è partita\".",
          "The forms you'll meet most are he / she (\"parlò\") and they (\"parlarono\"), because stories are told about other people.",
        ],
        examples: [
          { es: "Il re parlò al suo popolo.", en: "The king spoke to his people." },
          { es: "La regina partì all'alba.", en: "The queen left at dawn." },
          { es: "I soldati arrivarono a Roma.", en: "The soldiers arrived in Rome." },
          { es: "Nessuno credette alla sua storia.", en: "Nobody believed his story." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"La regina partì all'alba\" means ...", options: ["The queen left at dawn.", "The queen leaves at dawn.", "The queen will leave at dawn.", "The queen used to leave at dawn."], correctIndex: 0, explanation: "\"Partì\": remote past of \"partire\" = \"è partita\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The king spoke to his people.", answer: "Il re parlò al suo popolo.", altAnswers: ["Il re ha parlato al suo popolo."], explanation: "\"Parlò\" = \"ha parlato\"; one word, no auxiliary." },
        ],
      },
      {
        heading: "The three regular patterns",
        body: [
          "-are verbs: \"parlai, parlasti, parlò, parlammo, parlaste, parlarono\". -ire verbs: \"partii, partisti, partì, partimmo, partiste, partirono\". The he / she form ends in a stressed vowel with an accent: \"parlò\", \"partì\".",
          "-ere verbs have two sets of endings, both correct: \"credei / credetti, credesti, credé / credette, credemmo, credeste, crederono / credettero\". \"Credette\" and \"crederono\" are the ones you'll see most.",
          "The tip for spotting it: \"-ò\", \"-ì\", \"-é\" or \"-ette\" for one person; \"-arono\", \"-irono\", \"-erono\" or \"-ettero\" for several. Don't confuse \"-arono\" with the present \"-ano\": \"parlarono\" (they spoke), \"parlano\" (they speak).",
        ],
        examples: [
          { es: "Gli ospiti ballarono tutta la notte.", en: "The guests danced all night." },
          { es: "Il mercante vendette la sua nave.", en: "The merchant sold his ship." },
          { es: "I ragazzi dormirono nel bosco.", en: "The boys slept in the woods." },
          { es: "Quando la vide, il principe sorrise.", en: "When he saw her, the prince smiled." },
          { es: "La principessa aprì la finestra.", en: "The princess opened the window." },
          { es: "Ricevettero una lettera dal re.", en: "They received a letter from the king." },
        ],
        checkpoint: [
          { type: "matching", instructions: "Match each remote past to its passato prossimo.", pairs: [{ left: "parlò", right: "ha parlato" }, { left: "partirono", right: "sono partiti" }, { left: "vendette", right: "ha venduto" }, { left: "ballarono", right: "hanno ballato" }, { left: "aprì", right: "ha aperto" }], explanation: "Same meaning; the remote past is one word." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The boys slept in the woods.", answer: "I ragazzi dormirono nel bosco.", altAnswers: ["I ragazzi hanno dormito nel bosco."], explanation: "-ire verbs: \"dormirono\" for they." },
          { type: "listen-choose", audio: "Parlarono a lungo.", question: "What does it mean?", options: ["They spoke for a long time.", "They speak for a long time.", "He spoke for a long time.", "They will speak for a long time."], correctIndex: 0, explanation: "\"-arono\" = they, remote past." },
        ],
      },
      {
        heading: "The other persons",
        body: [
          "First and second persons appear in first-person novels and memoirs: \"Arrivai a Napoli nel 1950\" (I arrived in Naples in 1950), \"Quando arrivasti?\" (when did you arrive?). In everyday northern and central Italian you'd say \"sono arrivato\".",
          "Note the double m in \"parlammo\", \"partimmo\" (we spoke, we left): they look like the conditional but have no \"-re-\" in them.",
        ],
        examples: [
          { es: "Arrivai a Napoli nel 1950.", en: "I arrived in Naples in 1950." },
          { es: "Partimmo il giorno dopo.", en: "We left the next day." },
          { es: "Perché non mi aspettaste?", en: "Why didn't you wait for me? (plural)" },
          { es: "Quell'estate lavorai in un albergo a Rimini.", en: "That summer I worked in a hotel in Rimini." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a memoir would. (The everyday past is accepted too.)", source: "We left the next day.", answer: "Partimmo il giorno dopo.", altAnswers: ["Siamo partiti il giorno dopo.", "Siamo partite il giorno dopo.", "Partimmo il giorno seguente."], explanation: "\"Partimmo\" = \"siamo partiti\"." },
          { type: "multiple-choice", question: "\"Quell'estate lavorai in un albergo\". Who worked?", options: ["I", "he", "we", "they"], correctIndex: 0, explanation: "\"-ai\" = io, remote past." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The queen left at dawn.", answer: "La regina partì all'alba.", altAnswers: ["La regina è partita all'alba."], explanation: "\"Partì\": no auxiliary, no agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The guests danced all night.", answer: "Gli ospiti ballarono tutta la notte.", altAnswers: ["Gli ospiti hanno ballato tutta la notte."], explanation: "\"Ballarono\" = \"hanno ballato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The merchant sold his ship.", answer: "Il mercante vendette la sua nave.", altAnswers: ["Il mercante vendé la sua nave.", "Il mercante ha venduto la sua nave."], explanation: "\"Vendette\" or \"vendé\" = \"ha venduto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The princess opened the window.", answer: "La principessa aprì la finestra.", altAnswers: ["La principessa ha aperto la finestra."], explanation: "\"Aprì\": regular in the remote past, though its participle is irregular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "They received a letter from the king.", answer: "Ricevettero una lettera dal re.", altAnswers: ["Riceverono una lettera dal re.", "Hanno ricevuto una lettera dal re."], explanation: "\"Ricevettero\" or \"riceverono\" = \"hanno ricevuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "Nobody [believed] his story.", sentence: "Nessuno ___ alla sua storia.", answer: "credette", altAnswers: ["credé", "ha creduto"], explanation: "Two remote past forms for -ere verbs: \"credette\" and \"credé\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The soldiers [arrived] in Rome.", sentence: "I soldati ___ a Roma.", answer: "arrivarono", altAnswers: ["sono arrivati"], explanation: "\"-arono\" = they, remote past." },
      { type: "word-order", prompt: "Put the words in order to say: When he saw her, the prince smiled.", words: ["Quando", "la", "vide,", "il", "principe", "sorrise."], translation: "When he saw her, the prince smiled.", explanation: "\"Vide\" (saw) and \"sorrise\" (smiled) are irregular remote pasts you'll meet in the next lessons." },
      { type: "multiple-choice", question: "Which form means they speak, not they spoke?", options: ["parlano", "parlarono", "parlò", "parlammo"], correctIndex: 0, explanation: "\"Parlano\" is the present; \"parlarono\" is the remote past." },
      { type: "dictation", audio: "Il principe tornò al castello.", explanation: "\"Tornò\": stress and accent on the last syllable." },
      { type: "speak", text: "Il re parlò, la regina partì e i soldati arrivarono a Roma.", prompt: "Read aloud, as a storyteller: The king spoke, the queen left and the soldiers arrived in Rome.", tip: "Hit the final stress hard: par-LÒ, par-TÌ; but ar-ri-VA-ro-no.", explanation: "Three regular remote pasts." },
    ],
  },
  {
    slug: "b1-passato-remoto-essere-avere",
    level: "IT-B1",
    number: 2,
    title: "Fu and Ebbe",
    summary: "Recognise the remote past of essere (fu, furono) and avere (ebbe, ebbero), and the classic fairy-tale opening c'era una volta ... e un giorno arrivò ...",
    duration: "17 min",
    sections: [
      {
        heading: "Fu, furono",
        body: [
          "\"Essere\" in the remote past: \"fui, fosti, fu, fummo, foste, furono\". The forms you'll read most are \"fu\" (he / she / it was) and \"furono\" (they were): \"Fu un inverno terribile\" (it was a terrible winter), \"Furono anni difficili\" (they were difficult years).",
          "\"Fu\" often marks a single completed event or a whole period seen from outside, where a story would otherwise use \"è stato\": \"Fu un grande successo\" (it was a great success). For background descriptions stories still use the imperfetto \"era\".",
        ],
        examples: [
          { es: "Fu un inverno terribile.", en: "It was a terrible winter." },
          { es: "Furono anni difficili.", en: "They were difficult years." },
          { es: "Lo spettacolo fu un grande successo.", en: "The show was a great success." },
          { es: "Fummo gli ultimi a partire.", en: "We were the last to leave." },
          { es: "Dante fu esiliato da Firenze nel 1302.", en: "Dante was exiled from Florence in 1302." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "The show was a great success.", answer: "Lo spettacolo fu un grande successo.", altAnswers: ["Lo spettacolo è stato un grande successo."], explanation: "\"Fu\" = \"è stato\"." },
          { type: "multiple-choice", question: "\"Furono anni difficili\" means ...", options: ["They were difficult years.", "They will be difficult years.", "It was a difficult year.", "They are difficult years."], correctIndex: 0, explanation: "\"Furono\" = they were, remote past of \"essere\"." },
        ],
      },
      {
        heading: "Ebbe, ebbero",
        body: [
          "\"Avere\": \"ebbi, avesti, ebbe, avemmo, aveste, ebbero\". Only three forms are irregular: I (\"ebbi\"), he / she (\"ebbe\") and they (\"ebbero\"). The others are built on \"av-\". This 1-3-3 pattern (first singular, third singular, third plural) repeats in almost every irregular verb you'll meet next.",
          "\"Ebbe\" often means got or had in the sense of an event: \"Ebbe un'idea\" (he had an idea), \"Ebbero tre figli\" (they had three children), \"Ebbe paura\" (she got scared).",
        ],
        examples: [
          { es: "Il ragazzo ebbe un'idea.", en: "The boy had an idea." },
          { es: "Ebbero tre figli.", en: "They had three children." },
          { es: "Quando sentì il rumore, ebbe paura.", en: "When she heard the noise, she got scared." },
          { es: "Ebbi la fortuna di conoscerlo.", en: "I had the good fortune to know him." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The boy had an idea.", answer: "Il ragazzo ebbe un'idea.", altAnswers: ["Il ragazzo ha avuto un'idea."], explanation: "\"Ebbe\" = \"ha avuto\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "They [had] three children.", sentence: "___ tre figli.", answer: "Ebbero", altAnswers: ["Hanno avuto"], explanation: "\"Ebbero\": the they form of the 1-3-3 pattern." },
          { type: "listen-choose", audio: "Quando sentì il rumore, ebbe paura.", question: "What happened?", options: ["She heard a noise and got scared.", "She will be scared if she hears a noise.", "She was always scared of noises.", "She made a noise and scared someone."], correctIndex: 0, explanation: "\"Sentì\" (heard), \"ebbe paura\" (got scared)." },
        ],
      },
      {
        heading: "C'era una volta ...",
        body: [
          "Every Italian fairy tale opens with the imperfetto, \"C'era una volta un re\" (once upon a time there was a king), and then switches to the remote past when something happens: \"Un giorno arrivò un cavaliere\" (one day a knight arrived).",
          "That's the same split you know from the passato prossimo and imperfetto: background in the imperfetto, events in the remote past. A reader's mental rule: \"era\", \"aveva\", \"c'era\" set the scene; \"fu\", \"ebbe\", \"arrivò\" move it on.",
        ],
        examples: [
          { es: "C'era una volta un re che aveva tre figlie.", en: "Once upon a time there was a king who had three daughters." },
          { es: "Un giorno arrivò un cavaliere.", en: "One day a knight arrived." },
          { es: "La più giovane era bellissima.", en: "The youngest was very beautiful." },
          { es: "Il re ebbe un'idea e chiamò i suoi consiglieri.", en: "The king had an idea and called his advisers." },
          { es: "Fu così che la principessa si sposò.", en: "And that's how the princess got married." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "One day a knight arrived.", answer: "Un giorno arrivò un cavaliere.", altAnswers: ["Un giorno è arrivato un cavaliere."], explanation: "An event: remote past \"arrivò\"." },
          { type: "multiple-choice", question: "In \"C'era una volta un re che aveva tre figlie\", why the imperfetto?", options: ["It sets the scene: background, not an event.", "Because the king is still alive.", "Because fairy tales never use the remote past.", "Because it's a polite form."], correctIndex: 0, explanation: "Background in the imperfetto; events in the remote past." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "It was a terrible winter.", answer: "Fu un inverno terribile.", altAnswers: ["È stato un inverno terribile."], explanation: "\"Fu\" for a whole period seen as finished." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a memoir would. (The everyday past is accepted too.)", source: "We were the last to leave.", answer: "Fummo gli ultimi a partire.", altAnswers: ["Siamo stati gli ultimi a partire.", "Fummo le ultime a partire.", "Siamo state le ultime a partire."], explanation: "\"Fummo\" = \"siamo stati\"; double m." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "When she heard the noise, she got scared.", answer: "Quando sentì il rumore, ebbe paura.", altAnswers: ["Quando ha sentito il rumore, ha avuto paura."], explanation: "Two events: \"sentì\", \"ebbe paura\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would.", source: "Once upon a time there was a king who had three daughters.", answer: "C'era una volta un re che aveva tre figlie.", explanation: "Background: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a memoir would. (The everyday past is accepted too.)", source: "I had the good fortune to know him.", answer: "Ebbi la fortuna di conoscerlo.", altAnswers: ["Ho avuto la fortuna di conoscerlo."], explanation: "\"Ebbi\": the I form of the 1-3-3 pattern." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "And that's how [the princess got married].", sentence: "Fu così che ___.", answer: "la principessa si sposò", altAnswers: ["la principessa si è sposata"], explanation: "\"Si sposò\": reflexive in the remote past, still one verb form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a history book would. (The everyday past is accepted too.)", en: "They [were] difficult years.", sentence: "___ anni difficili.", answer: "Furono", altAnswers: ["Sono stati"], explanation: "\"Furono\" = they were." },
      { type: "word-order", prompt: "Put the words in order to say: The king had an idea and called his advisers.", words: ["Il", "re", "ebbe", "un'idea", "e", "chiamò", "i", "suoi", "consiglieri."], translation: "The king had an idea and called his advisers.", explanation: "Two events in the remote past." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "fu", right: "he / she / it was" }, { left: "furono", right: "they were" }, { left: "ebbe", right: "he / she had" }, { left: "ebbero", right: "they had" }, { left: "ebbi", right: "I had" }], explanation: "The core forms of \"essere\" and \"avere\"." },
      { type: "dictation", audio: "C'era una volta una principessa che non rideva mai.", explanation: "Background in the imperfetto: \"c'era\", \"rideva\"." },
      { type: "speak", text: "C'era una volta un re che aveva tre figlie. Un giorno arrivò un cavaliere ed ebbe un'idea.", prompt: "Read aloud, as a storyteller: Once upon a time there was a king who had three daughters. One day a knight arrived and had an idea.", tip: "\"Ed ebbe\": \"e\" becomes \"ed\" before a vowel, and the double b in \"ebbe\" is long.", explanation: "Imperfetto for the scene, remote past for the events." },
    ],
  },
  {
    slug: "b1-passato-remoto-irregular",
    level: "IT-B1",
    number: 3,
    title: "The Irregular Remote Past",
    summary: "Recognise the irregular remote pasts you'll meet most (fece, disse, venne, vide, prese, nacque, visse, scrisse, mise, chiese, rispose, volle, seppe) and the 1-3-3 pattern.",
    duration: "17 min",
    sections: [
      {
        heading: "The 1-3-3 pattern",
        body: [
          "Most irregular verbs are irregular only in three forms: I, he / she, and they. \"Prendere\": \"presi, prendesti, prese, prendemmo, prendeste, presero\". The irregular forms share one stem (\"pres-\") and the endings \"-i, -e, -ero\"; the other three are regular.",
          "So for reading, learn the he / she form and you've got the other two: \"prese\" → \"presi\", \"presero\". Many look like the participle you know: \"prese\" / \"preso\", \"mise\" / \"messo\", \"scrisse\" / \"scritto\", \"chiese\" / \"chiesto\", \"rispose\" / \"risposto\", \"decise\" / \"deciso\".",
        ],
        examples: [
          { es: "Prese la spada e uscì.", en: "He took the sword and went out." },
          { es: "Mise la lettera sul tavolo.", en: "She put the letter on the table." },
          { es: "Scrisse a sua madre ogni settimana.", en: "He wrote to his mother every week." },
          { es: "Chiese aiuto, ma nessuno rispose.", en: "She asked for help, but nobody answered." },
          { es: "Alla fine decisero di restare.", en: "In the end they decided to stay." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "She asked for help, but nobody answered.", answer: "Chiese aiuto, ma nessuno rispose.", altAnswers: ["Ha chiesto aiuto, ma nessuno ha risposto."], explanation: "\"Chiese\" (\"chiedere\"), \"rispose\" (\"rispondere\")." },
          { type: "matching", instructions: "Match the remote past to its infinitive.", pairs: [{ left: "prese", right: "prendere" }, { left: "mise", right: "mettere" }, { left: "scrisse", right: "scrivere" }, { left: "decise", right: "decidere" }, { left: "rispose", right: "rispondere" }], explanation: "The remote past often looks like the participle." },
        ],
      },
      {
        heading: "The big ones: fece, disse, venne, vide",
        body: [
          "Four verbs appear on almost every page of a story. \"Fare\": \"fece\", \"fecero\" (did, made). \"Dire\": \"disse\", \"dissero\" (said). \"Venire\": \"venne\", \"vennero\" (came). \"Vedere\": \"vide\", \"videro\" (saw).",
          "\"Disse\" is the storyteller's said: \"«Vieni con me», disse la strega\" (\"Come with me,\" said the witch). In dialogue, Italian books use «» or dashes for speech.",
        ],
        examples: [
          { es: "«Vieni con me», disse la strega.", en: "\"Come with me,\" said the witch." },
          { es: "Fece un passo indietro.", en: "He took a step back." },
          { es: "Vennero da lontano per vederlo.", en: "They came from far away to see him." },
          { es: "Vide una luce nel bosco.", en: "She saw a light in the woods." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "She saw a light in the woods.", answer: "Vide una luce nel bosco.", altAnswers: ["Ha visto una luce nel bosco."], explanation: "\"Vide\" = \"ha visto\"." },
          { type: "listen-choose", audio: "Vennero da lontano per vederlo.", question: "What does it mean?", options: ["They came from far away to see him.", "They saw him from far away.", "He came from far away to see them.", "They will come from far away."], correctIndex: 0, explanation: "\"Vennero\" = they came (\"venire\")." },
        ],
      },
      {
        heading: "Life events: nacque, visse, morì",
        body: [
          "Biographies are built on three verbs. \"Nascere\": \"nacque\", \"nacquero\" (was born, were born); notice the \"cq\". \"Vivere\": \"visse\", \"vissero\" (lived). \"Morire\" is regular: \"morì\", \"morirono\" (died).",
          "Other frequent ones: \"volle\" (wanted, from \"volere\"), \"seppe\" (found out, from \"sapere\"), \"conobbe\" (met, from \"conoscere\"), \"rimase\" (stayed), \"lesse\" (read), \"ruppe\" (broke), \"bevve\" (drank), \"diede\" or \"dette\" (gave), \"stette\" (stayed, was).",
        ],
        examples: [
          { es: "Garibaldi nacque a Nizza nel 1807.", en: "Garibaldi was born in Nice in 1807." },
          { es: "Visse a lungo a Caprera.", en: "He lived on Caprera for a long time." },
          { es: "Morì nel 1882.", en: "He died in 1882." },
          { es: "Conobbe sua moglie in Brasile.", en: "He met his wife in Brazil." },
          { es: "Quando seppe la notizia, rimase senza parole.", en: "When he found out the news, he was left speechless." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "Garibaldi was born in Nice in 1807.", answer: "Garibaldi nacque a Nizza nel 1807.", altAnswers: ["Garibaldi è nato a Nizza nel 1807."], explanation: "\"Nacque\" = \"è nato\"; spelled with \"cq\"." },
          { type: "multiple-choice", question: "\"Conobbe sua moglie in Brasile\" means ...", options: ["He met his wife in Brazil.", "He knew his wife in Brazil.", "He knows his wife from Brazil.", "His wife was born in Brazil."], correctIndex: 0, explanation: "\"Conoscere\" in a past event = to meet for the first time." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "He took the sword and went out.", answer: "Prese la spada e uscì.", altAnswers: ["Ha preso la spada ed è uscito.", "Ha preso la spada e è uscito."], explanation: "\"Prese\" (irregular), \"uscì\" (regular -ire)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "In the end they decided to stay.", answer: "Alla fine decisero di restare.", altAnswers: ["Alla fine hanno deciso di restare.", "Alla fine decisero di rimanere."], explanation: "\"Decisero\": the they form of the 1-3-3 pattern." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "He died in 1882.", answer: "Morì nel 1882.", altAnswers: ["È morto nel 1882."], explanation: "\"Morì\" is regular in the remote past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "He took a step back.", answer: "Fece un passo indietro.", altAnswers: ["Ha fatto un passo indietro."], explanation: "\"Fece\" = \"ha fatto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "She put the letter on the table.", answer: "Mise la lettera sul tavolo.", altAnswers: ["Ha messo la lettera sul tavolo."], explanation: "\"Mise\" = \"ha messo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "\"Come with me,\" [said] the witch.", sentence: "«Vieni con me», ___ la strega.", answer: "disse", altAnswers: ["ha detto"], explanation: "\"Disse\" = said." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "When he [found out] the news, he was left speechless.", sentence: "Quando ___ la notizia, rimase senza parole.", answer: "seppe", altAnswers: ["ha saputo"], explanation: "\"Seppe\" (from \"sapere\") = found out." },
      { type: "word-order", prompt: "Put the words in order to say: He lived on Caprera for a long time.", words: ["Visse", "a", "lungo", "a", "Caprera."], translation: "He lived on Caprera for a long time.", explanation: "\"Visse\" from \"vivere\"." },
      { type: "multiple-choice", question: "Which verb is \"ruppe\" from?", options: ["rompere", "ruppare", "riprendere", "rispondere"], correctIndex: 0, explanation: "\"Rompere\" (to break): \"ruppi, ruppe, ruppero\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "volle", right: "he wanted" }, { left: "bevve", right: "she drank" }, { left: "lesse", right: "he read" }, { left: "rimasero", right: "they stayed" }, { left: "diede", right: "she gave" }], explanation: "More irregulars from the 1-3-3 family." },
      { type: "dictation", audio: "Nacque a Firenze e visse a Roma.", explanation: "\"Nacque\" with \"cq\"; \"visse\" with a double s." },
      { type: "speak", text: "Vide la luce, prese la lanterna e disse: «Andiamo!»", prompt: "Read aloud, as a storyteller: He saw the light, took the lantern and said: 'Let's go!'", tip: "Three irregulars ending in -e: VI-de, PRE-se, DIS-se, all stressed on the first syllable.", explanation: "\"Vide\", \"prese\", \"disse\"." },
    ],
  },
  {
    slug: "b1-where-passato-remoto",
    level: "IT-B1",
    number: 4,
    title: "Where You Meet It",
    summary: "Learn where the passato remoto lives (novels, fairy tales, history books, biographies, and everyday speech in parts of the South) and when Italians use the passato prossimo instead.",
    duration: "17 min",
    sections: [
      {
        heading: "Books, history, fairy tales",
        body: [
          "The remote past is the standard tense of written narrative: novels, short stories, fairy tales, history books, biographies, encyclopedia entries. \"Garibaldi nacque a Nizza nel 1807\" is how a history book or a museum panel puts it; a friend telling you the same fact would say \"è nato\".",
          "Its name is misleading. It isn't about how long ago something happened but about distance in another sense: the event is closed, told as a story, cut off from the present. A novel set last week uses it; a chat about your grandfather in 1940 can use the passato prossimo.",
        ],
        examples: [
          { es: "Michelangelo dipinse la volta della Cappella Sistina.", en: "Michelangelo painted the ceiling of the Sistine Chapel." },
          { es: "La guerra finì nel 1945.", en: "The war ended in 1945." },
          { es: "Colombo partì da Palos nell'agosto del 1492.", en: "Columbus set sail from Palos in August 1492." },
          { es: "Mio nonno è nato nel 1935.", en: "My grandfather was born in 1935. (spoken)" },
          { es: "Quella sera Anna uscì senza dire niente.", en: "That evening Anna went out without saying anything. (novel)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "The war ended in 1945.", answer: "La guerra finì nel 1945.", altAnswers: ["La guerra è finita nel 1945."], explanation: "\"Finì\" = \"è finita\": a closed historical event." },
          { type: "multiple-choice", question: "Where would you most expect \"Quella sera Anna uscì senza dire niente\"?", options: ["In a novel", "In a text message to a friend", "In a job interview", "In a phone call to your mother"], correctIndex: 0, explanation: "Written narrative is the remote past's home." },
        ],
      },
      {
        heading: "North, centre and South",
        body: [
          "In everyday speech, northern and most central Italians almost never use the remote past: \"Ieri sono andato al cinema\", never \"ieri andai\". In Tuscany it survives for distant events.",
          "In parts of the South, especially Sicily, Calabria and Puglia, many speakers still use it in conversation, even for recent events: \"Ieri andai al mare\" (yesterday I went to the seaside) is natural in Palermo. So you'll hear it, and it isn't a mistake; but in your own speech, stick to the passato prossimo.",
        ],
        examples: [
          { es: "Ieri sono andato al mare.", en: "Yesterday I went to the seaside. (most of Italy)" },
          { es: "Ieri andai al mare.", en: "Yesterday I went to the seaside. (heard in the South)" },
          { es: "Che facesti stamattina?", en: "What did you do this morning? (Sicilian speech)" },
          { es: "Che hai fatto stamattina?", en: "What did you do this morning? (standard speech)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as most Italians would say it.", source: "Yesterday I went to the seaside.", answer: "Ieri sono andato al mare.", altAnswers: ["Ieri sono andata al mare.", "Ieri andai al mare."], explanation: "In conversation, the passato prossimo is the safe choice." },
          { type: "listen-choose", audio: "Che facesti stamattina?", question: "A friend from Palermo asks this. What does it mean?", options: ["What did you do this morning?", "What are you doing this morning?", "What will you do this morning?", "What would you do this morning?"], correctIndex: 0, explanation: "\"Facesti\": remote past of \"fare\", for \"tu\"; common in Sicilian speech." },
        ],
      },
      {
        heading: "Reading strategy",
        body: [
          "When a remote past slows you down, convert it in your head to the passato prossimo: \"scrisse\" → \"ha scritto\", \"vennero\" → \"sono venuti\", \"si sedette\" → \"si è seduto\". The meaning is identical.",
          "And remember the division of labour in stories: the imperfetto describes (\"era notte\", \"pioveva\"), the remote past narrates (\"bussò\", \"entrò\"). Writers sometimes switch to the trapassato (\"era partito\") for events before the main story.",
        ],
        examples: [
          { es: "Era notte e pioveva.", en: "It was night and it was raining." },
          { es: "Qualcuno bussò alla porta.", en: "Someone knocked at the door." },
          { es: "Il vecchio entrò e si sedette vicino al fuoco.", en: "The old man came in and sat down by the fire." },
          { es: "Suo figlio era partito anni prima.", en: "His son had left years before." },
          { es: "Scrisse una lunga lettera.", en: "He wrote a long letter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "The old man came in and sat down by the fire.", answer: "Il vecchio entrò e si sedette vicino al fuoco.", altAnswers: ["Il vecchio è entrato e si è seduto vicino al fuoco.", "Il vecchio entrò e si sedé vicino al fuoco."], explanation: "\"Entrò\", \"si sedette\": events in the remote past." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words, as a novel would. (The everyday past is accepted too.)", en: "Someone [knocked] at the door.", sentence: "Qualcuno ___ alla porta.", answer: "bussò", altAnswers: ["ha bussato"], explanation: "\"Bussare\" → \"bussò\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as an art book would. (The everyday past is accepted too.)", source: "Michelangelo painted the ceiling of the Sistine Chapel.", answer: "Michelangelo dipinse la volta della Cappella Sistina.", altAnswers: ["Michelangelo ha dipinto la volta della Cappella Sistina.", "Michelangelo dipinse il soffitto della Cappella Sistina."], explanation: "\"Dipingere\" → \"dipinse\" (1-3-3 pattern)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "Columbus set sail from Palos in August 1492.", answer: "Colombo partì da Palos nell'agosto del 1492.", altAnswers: ["Colombo è partito da Palos nell'agosto del 1492.", "Colombo partì da Palos nell'agosto 1492."], explanation: "\"Partì\" = \"è partito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as you'd say it to a friend.", source: "My grandfather was born in 1935.", answer: "Mio nonno è nato nel 1935.", altAnswers: ["Mio nonno nacque nel 1935."], explanation: "In conversation: passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would.", source: "It was night and it was raining.", answer: "Era notte e pioveva.", explanation: "Description: imperfetto, in novels too." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "He wrote a long letter.", answer: "Scrisse una lunga lettera.", altAnswers: ["Ha scritto una lunga lettera."], explanation: "\"Scrisse\" = \"ha scritto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a novel would.", en: "His son [had left] years before.", sentence: "Suo figlio ___ anni prima.", answer: "era partito", explanation: "Trapassato for an event before the main story." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as most Italians would say it.", en: "What [did you do] this morning? (to a friend)", sentence: "Che ___ stamattina?", answer: "hai fatto", altAnswers: ["facesti"], explanation: "Standard speech: \"hai fatto\"; \"facesti\" is heard in the South." },
      { type: "word-order", prompt: "Put the words in order to say: That evening Anna went out without saying anything.", words: ["Quella", "sera", "Anna", "uscì", "senza", "dire", "niente."], translation: "That evening Anna went out without saying anything.", explanation: "\"Uscì\": remote past of \"uscire\"." },
      { type: "multi-select", question: "Where is the passato remoto normal? Choose all that apply.", options: ["A history textbook", "A fairy tale", "A chat about last weekend in Milan", "A novel", "Everyday speech in parts of Sicily"], correctIndexes: [0, 1, 3, 4], explanation: "Written narrative everywhere; speech mainly in the South." },
      { type: "dictation", audio: "Qualcuno bussò alla porta.", explanation: "\"Bussò\": double s, final stress." },
      { type: "speak", text: "Era notte e pioveva. Qualcuno bussò alla porta, e il vecchio si alzò.", prompt: "Read aloud, as a novelist: It was night and it was raining. Someone knocked at the door, and the old man got up.", tip: "Slow down for the imperfetto, speed up on the events: bus-SÒ, si al-ZÒ.", explanation: "Imperfetto for the scene, remote past for the action." },
    ],
  },
  {
    slug: "b1-drill-passato-remoto-recognition",
    level: "IT-B1",
    number: 5,
    title: "Drill: Recognising the Remote Past",
    summary: "High-repetition recognition: translate remote past forms and match each one to the passato prossimo.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "See it, say it in everyday Italian",
        body: [
          "For each sentence, recognise the remote past and give its meaning. When you translate into Italian, either the remote past or the passato prossimo is accepted. Watch the 1-3-3 pattern: \"-i, -e, -ero\" on one irregular stem.",
        ],
        examples: [
          { es: "Lesse la lettera due volte.", en: "She read the letter twice." },
          { es: "Ruppero il vaso.", en: "They broke the vase." },
          { es: "Rimasi a casa tutto il giorno.", en: "I stayed at home all day." },
          { es: "Ci diede una mano.", en: "He gave us a hand." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "She read the letter twice.", answer: "Lesse la lettera due volte.", altAnswers: ["Ha letto la lettera due volte."], explanation: "\"Lesse\" = \"ha letto\"." },
          { type: "multiple-choice", question: "\"Ruppero il vaso\" means ...", options: ["They broke the vase.", "He broke the vase.", "They break the vase.", "They will break the vase."], correctIndex: 0, explanation: "\"-ero\" = they; \"ruppero\" from \"rompere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a memoir would. (The everyday past is accepted too.)", source: "I stayed at home all day.", answer: "Rimasi a casa tutto il giorno.", altAnswers: ["Sono rimasto a casa tutto il giorno.", "Sono rimasta a casa tutto il giorno."], explanation: "\"Rimasi\": the I form of the 1-3-3 pattern." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "He gave us a hand.", answer: "Ci diede una mano.", altAnswers: ["Ci dette una mano.", "Ci ha dato una mano."], explanation: "\"Diede\" or \"dette\" = \"ha dato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The wolf drank from the river.", answer: "Il lupo bevve dal fiume.", altAnswers: ["Il lupo ha bevuto dal fiume."], explanation: "\"Bere\" → \"bevve\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "They wanted to see the sea.", answer: "Vollero vedere il mare.", altAnswers: ["Hanno voluto vedere il mare."], explanation: "\"Volere\" → \"vollero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a history book would. (The everyday past is accepted too.)", source: "Verdi wrote Aida.", answer: "Verdi scrisse l'Aida.", altAnswers: ["Verdi ha scritto l'Aida.", "Verdi scrisse Aida.", "Verdi ha scritto Aida.", "Verdi compose l'Aida."], explanation: "\"Scrisse\" = \"ha scritto\"; Italians often say \"l'Aida\" with the article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The children came back late.", answer: "I bambini tornarono tardi.", altAnswers: ["I bambini sono tornati tardi."], explanation: "Regular -are: \"tornarono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "She stayed silent.", answer: "Stette zitta.", altAnswers: ["Rimase zitta.", "È stata zitta.", "È rimasta zitta."], explanation: "\"Stare\" → \"stette\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a novel would. (The everyday past is accepted too.)", source: "We met in Venice.", answer: "Ci conoscemmo a Venezia.", altAnswers: ["Ci siamo conosciuti a Venezia.", "Ci siamo conosciute a Venezia."], explanation: "\"Conoscemmo\": the regular noi form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The prince [put] the ring on her finger.", sentence: "Il principe le ___ l'anello al dito.", answer: "mise", altAnswers: ["ha messo"], explanation: "\"Mettere\" → \"mise\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The farmers [answered] together.", sentence: "I contadini ___ insieme.", answer: "risposero", altAnswers: ["hanno risposto"], explanation: "\"Rispondere\" → \"risposero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a history book would. (The everyday past is accepted too.)", en: "Galileo [built] a telescope in 1609.", sentence: "Galileo ___ un telescopio nel 1609.", answer: "costruì", altAnswers: ["ha costruito"], explanation: "Regular -ire: \"costruì\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The old woman [asked] the boy his name.", sentence: "La vecchia ___ al ragazzo come si chiamava.", answer: "chiese", altAnswers: ["ha chiesto"], explanation: "\"Chiedere\" → \"chiese\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a storybook would. (The everyday past is accepted too.)", en: "The two brothers [lived] happily.", sentence: "I due fratelli ___ felici.", answer: "vissero", altAnswers: ["hanno vissuto", "sono vissuti"], explanation: "\"Vivere\" → \"vissero\"." },
      { type: "matching", instructions: "Match each remote past to its passato prossimo.", pairs: [{ left: "venne", right: "è venuto" }, { left: "fecero", right: "hanno fatto" }, { left: "vidi", right: "ho visto" }, { left: "dissero", right: "hanno detto" }, { left: "nacque", right: "è nato" }], explanation: "One word in the remote past, two in the passato prossimo." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "seppe", right: "she found out" }, { left: "conobbe", right: "he met" }, { left: "presero", right: "they took" }, { left: "decisi", right: "I decided" }, { left: "fummo", right: "we were" }], explanation: "Irregulars of the 1-3-3 family, plus \"fummo\"." },
      { type: "listen-choose", audio: "Vennero tutti alla festa.", question: "What does it mean?", options: ["Everyone came to the party.", "Everyone comes to the party.", "Everyone will come to the party.", "Everyone saw the party."], correctIndex: 0, explanation: "\"Vennero\" = they came." },
      { type: "listen-choose", audio: "Vide il lupo e scappò.", question: "What happened?", options: ["She saw the wolf and ran away.", "The wolf saw her and ran away.", "She sees the wolf and runs away.", "She wanted to see the wolf."], correctIndex: 0, explanation: "\"Vide\" (saw), \"scappò\" (ran away)." },
      { type: "dictation", audio: "Fece freddo tutto l'inverno.", explanation: "\"Fece\" = it was (weather with \"fare\")." },
      { type: "dictation", audio: "Ebbero paura e tornarono a casa.", explanation: "\"Ebbero\", \"tornarono\": they forms." },
      { type: "speak", text: "Nacque a Pisa, studiò a Firenze e scrisse molti libri.", prompt: "Read aloud: He was born in Pisa, studied in Florence and wrote many books.", tip: "\"Nacque\": the cq is a long k, NAK-kwe.", explanation: "One irregular, one regular, one irregular." },
    ],
  },
  {
    slug: "b1-reading-lab-fairy-tale",
    level: "IT-B1",
    number: 6,
    title: "Reading Lab: A Fairy Tale",
    summary: "Read an original retelling of the folk tale Giovannino senza paura, told in the passato remoto.",
    duration: "18 min",
    sections: [
      {
        heading: "The boy who was never afraid",
        body: [
          "This is our own short retelling of a traditional Italian folk tale, \"Giovannino senza paura\" (fearless little Giovanni). Read each line: the imperfetto sets the scene, the remote past tells what happened.",
        ],
        examples: [
          { es: "C'era una volta un ragazzo che non aveva paura di niente.", en: "Once upon a time there was a boy who wasn't afraid of anything." },
          { es: "Tutti lo chiamavano Giovannino senza paura.", en: "Everyone called him fearless Giovannino." },
          { es: "Un giorno arrivò in un paese e chiese da dormire.", en: "One day he came to a village and asked for a bed for the night." },
          { es: "«C'è solo il palazzo vecchio», gli dissero, «ma chi ci entra non esce vivo».", en: "\"There's only the old palace,\" they told him, \"but whoever goes in never comes out alive.\"" },
          { es: "Giovannino rise, prese una candela e andò al palazzo.", en: "Giovannino laughed, took a candle and went to the palace." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the story does. (The everyday past is accepted too.)", source: "One day he came to a village and asked for a bed for the night.", answer: "Un giorno arrivò in un paese e chiese da dormire.", altAnswers: ["Un giorno è arrivato in un paese e ha chiesto da dormire."], explanation: "\"Arrivò\" (regular), \"chiese\" (irregular)." },
          { type: "multiple-choice", question: "Why does nobody want to go into the old palace?", options: ["Whoever goes in never comes out alive.", "It's locked.", "It belongs to the king.", "It's too far away."], correctIndex: 0, explanation: "\"Chi ci entra non esce vivo\"." },
        ],
      },
      {
        heading: "Midnight",
        body: [
          "At midnight a voice comes down the chimney. Notice how the dialogue uses the present (\"butto?\", shall I throw?) while the narration stays in the remote past.",
        ],
        examples: [
          { es: "A mezzanotte sentì una voce dal camino: «Butto?»", en: "At midnight he heard a voice from the chimney: \"Shall I throw?\"" },
          { es: "«Butta pure!» rispose Giovannino.", en: "\"Go ahead and throw!\" Giovannino answered." },
          { es: "Cadde una gamba, poi un braccio, poi una testa.", en: "Down fell a leg, then an arm, then a head." },
          { es: "I pezzi si unirono e diventarono un uomo enorme.", en: "The pieces joined together and became a huge man." },
          { es: "Giovannino lo guardò e disse: «Buonasera!»", en: "Giovannino looked at him and said: \"Good evening!\"" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the story does. (The everyday past is accepted too.)", source: "The pieces joined together and became a huge man.", answer: "I pezzi si unirono e diventarono un uomo enorme.", altAnswers: ["I pezzi si sono uniti e sono diventati un uomo enorme."], explanation: "\"Si unirono\", \"diventarono\": they forms." },
          { type: "listen-choose", audio: "Cadde una gamba, poi un braccio, poi una testa.", question: "What fell down the chimney first?", options: ["a leg", "an arm", "a head", "a candle"], correctIndex: 0, explanation: "\"Cadde\" (fell), from \"cadere\": \"una gamba\" first." },
        ],
      },
      {
        heading: "The treasure",
        body: [
          "The giant is impressed. He leads Giovannino to the cellar and shows him three pots of gold. Read the ending, and notice the final twist.",
        ],
        examples: [
          { es: "«Sei il primo che non scappa», disse l'uomo.", en: "\"You're the first one who doesn't run away,\" said the man." },
          { es: "Lo portò in cantina e gli mostrò tre pentole d'oro.", en: "He took him to the cellar and showed him three pots of gold." },
          { es: "Poi sparì, e il palazzo fu di Giovannino.", en: "Then he vanished, and the palace was Giovannino's." },
          { es: "Visse lì felice per molti anni.", en: "He lived there happily for many years." },
          { es: "Ma una sera vide la sua ombra sul muro, ed ebbe paura per la prima volta.", en: "But one evening he saw his shadow on the wall, and was afraid for the first time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the story does. (The everyday past is accepted too.)", source: "He lived there happily for many years.", answer: "Visse lì felice per molti anni.", altAnswers: ["Ha vissuto lì felice per molti anni.", "Visse lì felice per tanti anni."], explanation: "\"Visse\" from \"vivere\"." },
          { type: "multiple-choice", question: "What finally frightens Giovannino?", options: ["His own shadow", "The giant", "The voice in the chimney", "The pots of gold"], correctIndex: 0, explanation: "\"Vide la sua ombra ... ed ebbe paura\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the story does.", source: "Once upon a time there was a boy who wasn't afraid of anything.", answer: "C'era una volta un ragazzo che non aveva paura di niente.", altAnswers: ["C'era una volta un ragazzo che non aveva paura di nulla."], explanation: "Scene-setting: imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the story does. (The everyday past is accepted too.)", source: "Giovannino laughed, took a candle and went to the palace.", answer: "Giovannino rise, prese una candela e andò al palazzo.", altAnswers: ["Giovannino ha riso, ha preso una candela ed è andato al palazzo."], explanation: "\"Rise\" (\"ridere\"), \"prese\", \"andò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the story does. (The everyday past is accepted too.)", source: "At midnight he heard a voice from the chimney.", answer: "A mezzanotte sentì una voce dal camino.", altAnswers: ["A mezzanotte ha sentito una voce dal camino."], explanation: "\"Sentì\": regular -ire." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the story does. (The everyday past is accepted too.)", source: "He showed him three pots of gold.", answer: "Gli mostrò tre pentole d'oro.", altAnswers: ["Gli ha mostrato tre pentole d'oro.", "Gli fece vedere tre pentole d'oro."], explanation: "\"Mostrò\": regular -are." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as the story does. (The everyday past is accepted too.)", en: "Then he [vanished], and the palace was Giovannino's.", sentence: "Poi ___, e il palazzo fu di Giovannino.", answer: "sparì", altAnswers: ["è sparito"], explanation: "\"Sparire\" → \"sparì\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as the story does. (The everyday past is accepted too.)", en: "One evening he saw his shadow, and [was afraid] for the first time.", sentence: "Una sera vide la sua ombra, ed ___ per la prima volta.", answer: "ebbe paura", altAnswers: ["ha avuto paura"], explanation: "\"Ebbe paura\" = got scared." },
      { type: "word-order", prompt: "Put the words in order to say: Giovannino looked at him and said good evening.", words: ["Giovannino", "lo", "guardò", "e", "disse", "buonasera."], translation: "Giovannino looked at him and said good evening.", explanation: "\"Guardò\" (regular), \"disse\" (irregular)." },
      { type: "multiple-choice", question: "\"«Butta pure!» rispose Giovannino.\" What tense is \"rispose\"?", options: ["the remote past of rispondere", "the present of rispondere", "the imperfetto of rispondere", "the future of rispondere"], correctIndex: 0, explanation: "\"Rispose\" = \"ha risposto\"." },
      { type: "matching", instructions: "Match the Italian from the story to the English.", pairs: [{ left: "cadde", right: "fell" }, { left: "rise", right: "laughed" }, { left: "sparì", right: "vanished" }, { left: "diventarono", right: "became" }, { left: "portò", right: "took" }], explanation: "Remote past forms from the tale." },
      { type: "dictation", audio: "Giovannino prese una candela e andò al palazzo.", explanation: "\"Prese\", \"andò\"." },
      { type: "speak", text: "A mezzanotte sentì una voce: «Butto?» «Butta pure!» rispose Giovannino.", prompt: "Read this part of the story aloud, with feeling.", tip: "Make the voice from the chimney low and slow: BUT-to?", explanation: "Narration in the remote past, dialogue in the present." },
    ],
  },
  {
    slug: "b1-reading-lab-biography",
    level: "IT-B1",
    number: 7,
    title: "Reading Lab: A Short Biography",
    summary: "Read a short biography of Maria Montessori in the passato remoto, the way an encyclopedia or a museum panel tells a life.",
    duration: "18 min",
    sections: [
      {
        heading: "Early years",
        body: [
          "Biographies in Italian are almost always in the remote past. Read the first part of the life of Maria Montessori (1870-1952), doctor and educator, whose method is used in schools all over the world.",
        ],
        examples: [
          { es: "Maria Montessori nacque a Chiaravalle, nelle Marche, nel 1870.", en: "Maria Montessori was born in Chiaravalle, in the Marche, in 1870." },
          { es: "Da bambina si trasferì a Roma con la famiglia.", en: "As a child she moved to Rome with her family." },
          { es: "Volle studiare medicina, una scelta rara per una donna dell'epoca.", en: "She chose to study medicine, a rare choice for a woman at the time." },
          { es: "Si laureò nel 1896 e fu tra le prime donne medico in Italia.", en: "She graduated in 1896 and was among the first women doctors in Italy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a biography would. (The everyday past is accepted too.)", source: "As a child she moved to Rome with her family.", answer: "Da bambina si trasferì a Roma con la famiglia.", altAnswers: ["Da bambina si è trasferita a Roma con la famiglia.", "Da bambina si trasferì a Roma con la sua famiglia."], explanation: "\"Si trasferì\" = \"si è trasferita\"." },
          { type: "multiple-choice", question: "Why was her choice of study unusual?", options: ["Few women studied medicine at the time.", "Medicine wasn't taught in Rome.", "Her family were all doctors.", "She was too young."], correctIndex: 0, explanation: "\"Una scelta rara per una donna dell'epoca\"." },
        ],
      },
      {
        heading: "The Casa dei Bambini",
        body: [
          "Next, her great idea. Notice \"lavorò\", \"capì\" and \"aprì\": all regular. The imperfetto (\"potevano\") describes what she understood about children.",
        ],
        examples: [
          { es: "Lavorò con bambini in difficoltà e capì che potevano imparare molto di più.", en: "She worked with children with difficulties and understood that they could learn much more." },
          { es: "Nel 1907 aprì la prima Casa dei Bambini nel quartiere di San Lorenzo, a Roma.", en: "In 1907 she opened the first Children's House in the San Lorenzo district of Rome." },
          { es: "I bambini sceglievano liberamente le attività e imparavano da soli.", en: "The children chose activities freely and learned by themselves." },
          { es: "Il suo metodo ebbe subito un grande successo.", en: "Her method was an immediate success." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a biography would. (The everyday past is accepted too.)", source: "Her method was an immediate success.", answer: "Il suo metodo ebbe subito un grande successo.", altAnswers: ["Il suo metodo ha avuto subito un grande successo.", "Il suo metodo ebbe subito successo."], explanation: "\"Ebbe successo\" = was a success." },
          { type: "listen-choose", audio: "Nel 1907 aprì la prima Casa dei Bambini.", question: "What happened in 1907?", options: ["She opened the first Children's House.", "She graduated in medicine.", "She was born.", "She left Italy."], correctIndex: 0, explanation: "\"Aprì\" = opened." },
        ],
      },
      {
        heading: "Later life",
        body: [
          "In the 1930s she came into conflict with the Fascist regime and left Italy. Read the end of her story.",
        ],
        examples: [
          { es: "Negli anni Trenta lasciò l'Italia per contrasti con il regime fascista.", en: "In the 1930s she left Italy because of conflicts with the Fascist regime." },
          { es: "Visse in Spagna, nei Paesi Bassi e in India, dove tenne molti corsi.", en: "She lived in Spain, the Netherlands and India, where she gave many courses." },
          { es: "Morì in Olanda nel 1952.", en: "She died in Holland in 1952." },
          { es: "Per anni il suo volto fu sulla banconota da mille lire.", en: "For years her face was on the thousand-lire note." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a biography would. (The everyday past is accepted too.)", source: "She died in Holland in 1952.", answer: "Morì in Olanda nel 1952.", altAnswers: ["È morta in Olanda nel 1952.", "Morì nei Paesi Bassi nel 1952."], explanation: "\"Morì\" = \"è morta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words, as a biography would. (The everyday past is accepted too.)", en: "She lived in Spain, the Netherlands and India, where [she gave] many courses.", sentence: "Visse in Spagna, nei Paesi Bassi e in India, dove ___ molti corsi.", answer: "tenne", altAnswers: ["ha tenuto"], explanation: "\"Tenere\" → \"tenne\" (1-3-3: tenni, tenne, tennero); \"tenere un corso\" = to give a course." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a biography would. (The everyday past is accepted too.)", source: "Maria Montessori was born in 1870.", answer: "Maria Montessori nacque nel 1870.", altAnswers: ["Maria Montessori è nata nel 1870."], explanation: "\"Nacque\" = \"è nata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a biography would. (The everyday past is accepted too.)", source: "She graduated in 1896.", answer: "Si laureò nel 1896.", altAnswers: ["Si è laureata nel 1896."], explanation: "\"Laurearsi\" = to graduate from university." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a biography would. (The everyday past is accepted too.)", source: "In 1907 she opened the first Children's House.", answer: "Nel 1907 aprì la prima Casa dei Bambini.", altAnswers: ["Nel 1907 ha aperto la prima Casa dei Bambini."], explanation: "\"Aprì\": regular -ire." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a biography would. (The everyday past is accepted too.)", source: "In the 1930s she left Italy.", answer: "Negli anni Trenta lasciò l'Italia.", altAnswers: ["Negli anni Trenta ha lasciato l'Italia.", "Negli anni '30 lasciò l'Italia."], explanation: "\"Lasciare\" (to leave a place behind) → \"lasciò\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a biography would. (The everyday past is accepted too.)", en: "She [chose] to study medicine.", sentence: "___ studiare medicina.", answer: "Volle", altAnswers: ["Ha voluto", "Scelse", "Decise di"], explanation: "\"Volle\" (from \"volere\"): wanted and did." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as a biography would. (The everyday past is accepted too.)", en: "She [understood] that the children could learn much more.", sentence: "___ che i bambini potevano imparare molto di più.", answer: "Capì", altAnswers: ["Ha capito"], explanation: "\"Capire\" → \"capì\"." },
      { type: "word-order", prompt: "Put the words in order to say: For years her face was on the thousand-lire note.", words: ["Per", "anni", "il", "suo", "volto", "fu", "sulla", "banconota", "da mille lire."], translation: "For years her face was on the thousand-lire note.", explanation: "\"Fu\" = was." },
      { type: "multiple-choice", question: "Where did Maria Montessori die?", options: ["In Holland", "In Rome", "In India", "In Chiaravalle"], correctIndex: 0, explanation: "\"Morì in Olanda nel 1952\"." },
      { type: "multi-select", question: "Which verbs in the biography are remote pasts? Choose all that apply.", options: ["nacque", "sceglievano", "si laureò", "potevano", "tenne"], correctIndexes: [0, 2, 4], explanation: "\"Sceglievano\" and \"potevano\" are imperfetto: background." },
      { type: "dictation", audio: "Si laureò in medicina nel 1896.", explanation: "\"Si laureò\": final stress." },
      { type: "speak", text: "Maria Montessori nacque nel 1870, si laureò in medicina e aprì la prima Casa dei Bambini nel 1907.", prompt: "Summarise her life aloud: Maria Montessori was born in 1870, graduated in medicine and opened the first Children's House in 1907.", tip: "Read years as words: milleottocentosettanta, millenovecentosette.", explanation: "Three life events in the remote past." },
    ],
  },
  {
    slug: "b1-drill-remote-to-recent",
    level: "IT-B1",
    number: 8,
    title: "Drill: Remote Past to Passato Prossimo",
    summary: "High-repetition rewriting of short written passages into the spoken past: partì → è partito, si sedette → si è seduto.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "From the page to conversation",
        body: [
          "Retell written sentences the way you'd say them to a friend. Each remote past becomes a passato prossimo, and now you need the auxiliary and agreement: \"partì\" → \"è partito\" / \"è partita\"; \"si sedettero\" → \"si sono seduti\". Imperfetto stays as it is.",
        ],
        examples: [
          { es: "Partì all'alba. → È partito all'alba.", en: "He left at dawn." },
          { es: "Le ragazze si sedettero. → Le ragazze si sono sedute.", en: "The girls sat down." },
          { es: "Fece caldo tutta l'estate. → Ha fatto caldo tutta l'estate.", en: "It was hot all summer." },
          { es: "Mentre dormiva, entrò un ladro. → Mentre dormiva, è entrato un ladro.", en: "While he was sleeping, a burglar came in." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "The book says \"Le ragazze si sedettero\". Write the Italian for the bold words in everyday Italian.", en: "The girls [sat down].", sentence: "Le ragazze ___.", answer: "si sono sedute", explanation: "Reflexive: \"essere\" + feminine plural agreement." },
          { type: "translate", direction: "en-es", prompt: "The book says \"Mentre dormiva, entrò un ladro\". Say it in everyday Italian.", source: "While he was sleeping, a burglar came in.", answer: "Mentre dormiva, è entrato un ladro.", altAnswers: ["Mentre dormiva, un ladro è entrato."], explanation: "The imperfetto stays; \"entrò\" → \"è entrato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "The book says \"Partì all'alba\" about a woman. Say it in everyday Italian.", source: "She left at dawn.", answer: "È partita all'alba.", explanation: "\"Partire\" takes \"essere\": \"partita\"." },
      { type: "translate", direction: "en-es", prompt: "The book says \"Fece caldo tutta l'estate\". Say it in everyday Italian.", source: "It was hot all summer.", answer: "Ha fatto caldo tutta l'estate.", altAnswers: ["Ha fatto caldo per tutta l'estate."], explanation: "\"Fece\" → \"ha fatto\"." },
      { type: "translate", direction: "en-es", prompt: "The book says \"Disse che aveva fame\". Say it in everyday Italian.", source: "He said he was hungry.", answer: "Ha detto che aveva fame.", explanation: "\"Disse\" → \"ha detto\"; \"aveva\" stays." },
      { type: "translate", direction: "en-es", prompt: "The book says \"I turisti vennero in autobus\". Say it in everyday Italian.", source: "The tourists came by coach.", answer: "I turisti sono venuti in autobus.", altAnswers: ["I turisti sono venuti in pullman."], explanation: "\"Vennero\" → \"sono venuti\"." },
      { type: "translate", direction: "en-es", prompt: "The book says \"Non seppi mai la verità\". Say it in everyday Italian.", source: "I never found out the truth.", answer: "Non ho mai saputo la verità.", explanation: "\"Seppi\" → \"ho saputo\"; \"mai\" goes between auxiliary and participle." },
      { type: "translate", direction: "en-es", prompt: "The book says \"Vedemmo il mare per la prima volta\". Say it in everyday Italian.", source: "We saw the sea for the first time.", answer: "Abbiamo visto il mare per la prima volta.", altAnswers: ["Abbiamo veduto il mare per la prima volta."], explanation: "\"Vedemmo\" → \"abbiamo visto\"." },
      { type: "translate", direction: "en-es", prompt: "The book says \"Mia nonna nacque in Calabria\". Say it in everyday Italian.", source: "My grandmother was born in Calabria.", answer: "Mia nonna è nata in Calabria.", explanation: "\"Nacque\" → \"è nata\"." },
      { type: "translate", direction: "en-es", prompt: "The book says \"Si alzarono e se ne andarono\". Say it in everyday Italian.", source: "They got up and left.", answer: "Si sono alzati e se ne sono andati.", altAnswers: ["Si sono alzate e se ne sono andate.", "Si sono alzati e sono andati via."], explanation: "Reflexive and pronominal verbs take \"essere\"." },
      { type: "fill-blank", prompt: "The book says \"Mise il cappotto e uscì\". Write the Italian for the bold words in everyday Italian.", en: "[He put on] his coat and went out.", sentence: "___ il cappotto ed è uscito.", answer: "Si è messo", altAnswers: ["Ha messo"], explanation: "\"Mise\" → \"si è messo\" (put on)." },
      { type: "fill-blank", prompt: "The book says \"Rimasero in silenzio\". Write the Italian for the bold words in everyday Italian.", en: "They [stayed] silent.", sentence: "___ in silenzio.", answer: "Sono rimasti", altAnswers: ["Sono rimaste", "Sono stati", "Sono state"], explanation: "\"Rimasero\" → \"sono rimasti\"." },
      { type: "fill-blank", prompt: "The book says \"Chiesi un bicchiere d'acqua\". Write the Italian for the bold words in everyday Italian.", en: "[I asked for] a glass of water.", sentence: "___ un bicchiere d'acqua.", answer: "Ho chiesto", explanation: "\"Chiesi\" → \"ho chiesto\"." },
      { type: "fill-blank", prompt: "The book says \"La nave affondò\". Write the Italian for the bold words in everyday Italian.", en: "The ship [sank].", sentence: "La nave ___.", answer: "è affondata", explanation: "\"Affondare\" (to sink, intransitive) takes \"essere\"." },
      { type: "fill-blank", prompt: "The book says \"Lessero tutto il libro in una notte\". Write the Italian for the bold words in everyday Italian.", en: "They [read] the whole book in one night.", sentence: "___ tutto il libro in una notte.", answer: "Hanno letto", explanation: "\"Lessero\" → \"hanno letto\"." },
      { type: "fill-blank", prompt: "The book says \"Quando arrivammo, era già buio\". Write the Italian for the bold words in everyday Italian.", en: "When [we arrived], it was already dark.", sentence: "Quando ___, era già buio.", answer: "siamo arrivati", altAnswers: ["siamo arrivate"], explanation: "\"Arrivammo\" → \"siamo arrivati\"; \"era\" stays." },
      { type: "word-order", prompt: "Put the words in order to say (everyday Italian): They met at a party.", words: ["Si", "sono", "conosciuti", "a", "una", "festa."], translation: "They met at a party.", explanation: "\"Si conobbero\" → \"si sono conosciuti\"." },
      { type: "multiple-choice", question: "The book says \"Giulia ruppe il bicchiere\". Which is the everyday version?", options: ["Giulia ha rotto il bicchiere.", "Giulia è rotta il bicchiere.", "Giulia rompeva il bicchiere.", "Giulia ha romputo il bicchiere."], correctIndex: 0, explanation: "\"Rompere\" → \"ha rotto\"." },
      { type: "listen-choose", audio: "Andarono in Francia e non tornarono più.", question: "What does it mean?", options: ["They went to France and never came back.", "They go to France and never come back.", "He went to France and never came back.", "They would go to France and come back."], correctIndex: 0, explanation: "\"Andarono\", \"tornarono\": they forms." },
      { type: "dictation", audio: "È partito all'alba e non è più tornato.", explanation: "The spoken version of \"Partì all'alba e non tornò più\"." },
      { type: "dictation", audio: "Si sono conosciuti a Bologna nel 1990.", explanation: "Spoken version of \"Si conobbero a Bologna\"." },
      { type: "speak", text: "Mio nonno è nato in Calabria, ha lavorato in Germania ed è tornato in Italia nel 1975.", prompt: "Tell a friend, in everyday Italian: My grandfather was born in Calabria, worked in Germany and came back to Italy in 1975.", tip: "\"Ed è\": the d links the two vowels smoothly.", explanation: "A family biography in the passato prossimo." },
    ],
  },
  {
    slug: "b1-sound-final-stress",
    level: "IT-B1",
    number: 9,
    title: "Sounds: Parlò or Parlo?",
    summary: "Hear and write the final stress that separates the remote past from the present: parlò / parlo, partì / parti, arrivò / arrivo.",
    duration: "17 min",
    sections: [
      {
        heading: "One accent, two tenses",
        body: [
          "Two forms can differ only in where the stress falls. \"Parlo\" (I speak) is stressed on the first syllable: PAR-lo. \"Parlò\" (he spoke) is stressed on the last: par-LÒ, and the written accent shows it. The same contrast gives \"arrivo\" / \"arrivò\", \"torno\" / \"tornò\", \"mangio\" / \"mangiò\".",
          "When you speak, make the final stressed vowel clearly louder and a little longer. In writing, never leave the accent off: \"parlo\" and \"parlò\" are different words.",
        ],
        examples: [
          { es: "Parlo con il direttore.", en: "I'm speaking to the manager." },
          { es: "Parlò con il direttore.", en: "He spoke to the manager." },
          { es: "Arrivo domani.", en: "I'm arriving tomorrow." },
          { es: "Arrivò il giorno dopo.", en: "She arrived the next day." },
          { es: "Torno subito.", en: "I'll be right back." },
          { es: "Tornò subito.", en: "He came back immediately." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Parlò con il direttore.", question: "What did you hear?", options: ["Parlò con il direttore.", "Parlo con il direttore."], correctIndex: 0, explanation: "Final stress: par-LÒ, he spoke." },
          { type: "listen-choose", audio: "Arrivo domani.", question: "What did you hear?", options: ["Arrivo domani.", "Arrivò domani."], correctIndex: 0, explanation: "Stress on RI: ar-RI-vo, I arrive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "She arrived the next day.", answer: "Arrivò il giorno dopo.", altAnswers: ["È arrivata il giorno dopo."], explanation: "Don't forget the accent: \"arrivò\"." },
        ],
      },
      {
        heading: "-ire verbs: parti or partì?",
        body: [
          "-ire verbs give pairs with \"-i\" and \"-ì\": \"parti\" (you leave, PAR-ti) / \"partì\" (he left, par-TÌ); \"senti\" (you hear) / \"sentì\" (she heard); \"dormi\" / \"dormì\". Some pairs are even different words: \"capi\" (bosses) / \"capì\" (he understood).",
          "Similar pairs outside verbs show the same idea: \"papa\" (pope) / \"papà\" (dad), \"subito\" (immediately, SU-bi-to) / \"subìto\" (suffered).",
        ],
        examples: [
          { es: "Quando parti?", en: "When are you leaving?" },
          { es: "Partì senza salutare.", en: "He left without saying goodbye." },
          { es: "Senti questa musica!", en: "Listen to this music!" },
          { es: "Sentì un rumore.", en: "She heard a noise." },
          { es: "Finalmente capì tutto.", en: "Finally he understood everything." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Partì senza salutare.", question: "What did you hear?", options: ["Partì senza salutare.", "Parti senza salutare."], correctIndex: 0, explanation: "par-TÌ: he left." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When are you leaving? (to a friend)", answer: "Quando parti?", altAnswers: ["Tu quando parti?", "Quando partirai?"], explanation: "PAR-ti, no accent: the present." },
        ],
      },
      {
        heading: "Rhythm in narration",
        body: [
          "Read aloud, a story in the remote past has a typical rhythm: many words end on a strong beat. \"Entrò, guardò, sorrise e se ne andò\". Practise reading it with energy on each final syllable; it's what makes Italian storytelling sound like storytelling.",
        ],
        examples: [
          { es: "Entrò, guardò, sorrise e se ne andò.", en: "He came in, looked, smiled and left." },
          { es: "Bussò tre volte, ma nessuno aprì.", en: "She knocked three times, but nobody opened." },
          { es: "Il gatto saltò sul tavolo e mangiò il pesce.", en: "The cat jumped onto the table and ate the fish." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "She knocked three times, but nobody opened.", answer: "Bussò tre volte, ma nessuno aprì.", altAnswers: ["Ha bussato tre volte, ma nessuno ha aperto."], explanation: "Two final stresses: bus-SÒ, a-PRÌ." },
          { type: "dictation", audio: "Il gatto saltò sul tavolo e mangiò il pesce.", explanation: "Write the accents: \"saltò\", \"mangiò\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "He spoke to the manager.", answer: "Parlò con il direttore.", altAnswers: ["Parlò col direttore.", "Ha parlato con il direttore.", "Parlò al direttore."], explanation: "\"Parlò\" with the accent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "Finally he understood everything.", answer: "Finalmente capì tutto.", altAnswers: ["Finalmente ha capito tutto."], explanation: "\"Capì\": not \"capi\" (bosses)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "He came in, looked, smiled and left.", answer: "Entrò, guardò, sorrise e se ne andò.", altAnswers: ["È entrato, ha guardato, ha sorriso e se n'è andato."], explanation: "Final-stress rhythm: en-TRÒ, guar-DÒ, an-DÒ." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word, as a storybook would. (The everyday past is accepted too.)", en: "She [heard] a noise.", sentence: "___ un rumore.", answer: "Sentì", altAnswers: ["Ha sentito"], explanation: "\"Sentì\" with the accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "[I'll be] right back.", sentence: "___ subito.", answer: "Torno", explanation: "Present: TOR-no, no accent." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as a storybook would. (The everyday past is accepted too.)", source: "The cat jumped onto the table and ate the fish.", answer: "Il gatto saltò sul tavolo e mangiò il pesce.", altAnswers: ["Il gatto è saltato sul tavolo e ha mangiato il pesce."], explanation: "\"Saltò\", \"mangiò\": write both accents." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I eat fish on Fridays.", answer: "Il venerdì mangio il pesce.", altAnswers: ["Mangio il pesce il venerdì.", "Il venerdì mangio pesce.", "Mangio pesce il venerdì."], explanation: "\"Mangio\": present, MAN-gio, no accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word, as a storybook would. (The everyday past is accepted too.)", en: "He [left] without saying goodbye.", sentence: "___ senza salutare.", answer: "Partì", altAnswers: ["È partito", "Se ne andò"], explanation: "\"Partì\" with the accent; \"parti\" would be you leave." },
      { type: "word-order", prompt: "Put the words in order to say: The prince woke up and understood everything.", words: ["Il", "principe", "si", "svegliò", "e", "capì", "tutto."], translation: "The prince woke up and understood everything.", explanation: "Two final stresses: sve-GLIÒ, ca-PÌ." },
      { type: "listen-choose", audio: "Dormì fino a mezzogiorno.", question: "What did you hear?", options: ["Dormì fino a mezzogiorno.", "Dormi fino a mezzogiorno."], correctIndex: 0, explanation: "dor-MÌ: she slept." },
      { type: "dictation", audio: "Bussò tre volte, ma nessuno aprì.", explanation: "Two accents: \"bussò\", \"aprì\"." },
      { type: "speak", text: "Entrò, guardò, sorrise e se ne andò.", prompt: "Read aloud, with storyteller rhythm: He came in, looked, smiled and left.", tip: "Land on every final ò: en-TRÒ, guar-DÒ, an-DÒ.", explanation: "Final stress gives narration its beat." },
    ],
  },
  {
    slug: "b1-listening-lab-storyteller",
    level: "IT-B1",
    number: 10,
    title: "Listening Lab: A Storyteller",
    summary: "Listen to a storyteller tell the Sicilian legend of Colapesce, the boy who became a fish, and follow it through the passato remoto.",
    duration: "18 min",
    sections: [
      {
        heading: "A boy who loved the sea",
        body: [
          "Sicilians tell this legend in many versions; this is our own retelling. Listen to each line before you read it. Cola, a fisherman's son from Messina, spent all his time in the water.",
        ],
        examples: [
          { es: "Tanto tempo fa, a Messina, viveva un ragazzo di nome Cola.", en: "Long ago, in Messina, there lived a boy called Cola." },
          { es: "Passava le giornate in mare e nuotava come un pesce.", en: "He spent his days in the sea and swam like a fish." },
          { es: "Un giorno sua madre, arrabbiata, gli gridò: «Che tu possa diventare un pesce!»", en: "One day his mother, angry, shouted at him: \"May you turn into a fish!\"" },
          { es: "E da quel giorno tutti lo chiamarono Colapesce.", en: "And from that day everyone called him Colapesce." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Passava le giornate in mare e nuotava come un pesce.", question: "How did Cola spend his days?", options: ["Swimming in the sea", "Fishing with his father", "Working in Messina", "Sleeping on the beach"], correctIndex: 0, explanation: "\"Nuotava come un pesce\" = he swam like a fish." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the storyteller does. (The everyday past is accepted too.)", source: "From that day everyone called him Colapesce.", answer: "Da quel giorno tutti lo chiamarono Colapesce.", altAnswers: ["Da quel giorno tutti l'hanno chiamato Colapesce.", "Da quel giorno tutti lo hanno chiamato Colapesce."], explanation: "\"Chiamarono\" = \"hanno chiamato\"." },
        ],
      },
      {
        heading: "The king's tests",
        body: [
          "The king, Federico II, heard about him and wanted to test him. Listen for the irregular forms: \"volle\", \"gettò\", \"riportò\".",
        ],
        examples: [
          { es: "Il re Federico sentì parlare di lui e volle metterlo alla prova.", en: "King Frederick heard about him and wanted to put him to the test." },
          { es: "Gettò una coppa d'oro in mare, e Cola la riportò.", en: "He threw a gold cup into the sea, and Cola brought it back." },
          { es: "Poi gettò la sua corona, ancora più lontano.", en: "Then he threw his crown, even further out." },
          { es: "Cola si tuffò e tornò con la corona in mano.", en: "Cola dived in and came back with the crown in his hand." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Gettò una coppa d'oro in mare, e Cola la riportò.", question: "What did the king throw first?", options: ["a gold cup", "his crown", "a ring", "a sword"], correctIndex: 0, explanation: "\"Una coppa d'oro\" = a gold cup." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the storyteller does. (The everyday past is accepted too.)", source: "Cola dived in and came back with the crown in his hand.", answer: "Cola si tuffò e tornò con la corona in mano.", altAnswers: ["Cola si è tuffato ed è tornato con la corona in mano."], explanation: "\"Si tuffò\", \"tornò\": regular -are." },
        ],
      },
      {
        heading: "The three columns",
        body: [
          "The last test went deeper than any other. Listen to how the legend explains why Sicily still stands.",
        ],
        examples: [
          { es: "Questa volta Cola rimase sott'acqua a lungo.", en: "This time Cola stayed underwater for a long time." },
          { es: "Quando tornò su, disse che la Sicilia poggiava su tre colonne.", en: "When he came back up, he said that Sicily rested on three columns." },
          { es: "Una colonna era rotta, e l'isola rischiava di affondare.", en: "One column was broken, and the island was in danger of sinking." },
          { es: "Cola si immerse di nuovo e non tornò mai più.", en: "Cola dived down again and never came back." },
          { es: "Dicono che sia ancora lì, a reggere la colonna.", en: "They say he's still there, holding up the column." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Una colonna era rotta, e l'isola rischiava di affondare.", question: "What was the danger?", options: ["The island could sink.", "The king could drown.", "Cola could get lost.", "The sea could dry up."], correctIndex: 0, explanation: "\"L'isola rischiava di affondare\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the storyteller does. (The everyday past is accepted too.)", source: "Cola dived down again and never came back.", answer: "Cola si immerse di nuovo e non tornò mai più.", altAnswers: ["Cola si è immerso di nuovo e non è mai più tornato.", "Cola si immerse di nuovo e non tornò più."], explanation: "\"Si immerse\" (from \"immergersi\"), \"non tornò mai più\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the storyteller does. (The everyday past is accepted too.)", source: "The king wanted to put him to the test.", answer: "Il re volle metterlo alla prova.", altAnswers: ["Il re ha voluto metterlo alla prova.", "Il re lo volle mettere alla prova."], explanation: "\"Volle\" from \"volere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the storyteller does. (The everyday past is accepted too.)", source: "He threw his crown into the sea.", answer: "Gettò la sua corona in mare.", altAnswers: ["Ha gettato la sua corona in mare.", "Buttò la sua corona in mare."], explanation: "\"Gettare\" → \"gettò\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the storyteller does. (The everyday past is accepted too.)", source: "This time Cola stayed underwater for a long time.", answer: "Questa volta Cola rimase sott'acqua a lungo.", altAnswers: ["Questa volta Cola è rimasto sott'acqua a lungo."], explanation: "\"Rimase\" from \"rimanere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, as the storyteller does.", source: "He spent his days in the sea.", answer: "Passava le giornate in mare.", explanation: "A habit in the past: imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as the storyteller does. (The everyday past is accepted too.)", en: "When he came back up, [he said] that Sicily rested on three columns.", sentence: "Quando tornò su, ___ che la Sicilia poggiava su tre colonne.", answer: "disse", altAnswers: ["ha detto"], explanation: "\"Disse\" = said." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, as the storyteller does. (The everyday past is accepted too.)", en: "His mother [shouted] at him.", sentence: "Sua madre gli ___.", answer: "gridò", altAnswers: ["ha gridato", "urlò"], explanation: "\"Gridare\" → \"gridò\"." },
      { type: "word-order", prompt: "Put the words in order to say: They say he's still there.", words: ["Dicono", "che", "sia", "ancora", "lì."], translation: "They say he's still there.", explanation: "\"Dicono che\" + subjunctive." },
      { type: "multiple-choice", question: "Why didn't Cola come back in the end?", options: ["He stayed to hold up the broken column.", "The king punished him.", "He turned into a fish and swam away.", "He found more treasure."], correctIndex: 0, explanation: "\"A reggere la colonna\" = holding up the column." },
      { type: "listen-choose", audio: "Il re Federico sentì parlare di lui.", question: "What does it mean?", options: ["King Frederick heard about him.", "King Frederick spoke to him.", "King Frederick wanted to hear him speak.", "King Frederick talks about him."], correctIndex: 0, explanation: "\"Sentir parlare di\" = to hear about." },
      { type: "dictation", audio: "Cola si tuffò e tornò con la corona.", explanation: "Two final stresses: \"tuffò\", \"tornò\"." },
      { type: "speak", text: "Il re gettò la corona in mare, e Cola si tuffò e la riportò.", prompt: "Retell the second test aloud: The king threw the crown into the sea, and Cola dived in and brought it back.", tip: "\"Tuffò\": double f, tuf-FÒ.", explanation: "Three remote pasts with final stress." },
    ],
  },
];

export const IT_B1_U16_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a short story for a children's book club in Italy: retell a fairy tale or legend you know from your own country (or invent one). Start with c'era una volta, describe the setting in the imperfetto, and tell the events in the passato remoto, at least for the he / she and they forms.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Opens with c'era una volta and sets the scene in the imperfetto (era, aveva, viveva)",
    "Tells the main events in the passato remoto (arrivò, partì, disse, fece, vide, ebbe)",
    "Spells the final-stress forms with an accent (parlò, partì, tornò)",
    "Ends the story with a clear closing event (e vissero felici e contenti, or a twist)",
  ],
  modelAnswer: "C'era una volta, in un villaggio vicino al mare, una ragazza che si chiamava Elsa. Era povera, ma cantava meglio di chiunque altro. Ogni sera andava sulla spiaggia e cantava alle onde. Una notte dal mare uscì un vecchio pescatore con una barba lunghissima. «La tua voce ha calmato la tempesta», disse. «Che cosa desideri?» Elsa ci pensò un momento e rispose: «Che nessuno nel villaggio abbia più fame.» Il vecchio sorrise e sparì. La mattina dopo i pescatori trovarono le reti piene di pesci, e così fu per molti anni. Elsa non rivide mai più il vecchio, ma continuò a cantare ogni sera.",
  explanation: "\"C'era una volta\", \"era\", \"cantava\" and \"andava\" set the scene in the imperfetto. The events are in the passato remoto: \"uscì\", \"disse\", \"rispose\", \"sorrise\", \"sparì\", \"trovarono\", \"fu\", \"rivide\", \"continuò\". The final-stress forms carry their accents.",
};
