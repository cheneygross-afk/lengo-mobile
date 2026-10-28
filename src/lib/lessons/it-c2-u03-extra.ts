// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u03-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 3 Extra Practice: Leopardi and the Language of Poetry.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U03_EXTRA: Lesson[] = [
  {
    slug: "c2-poetry-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: More Leopardi",
    summary: "Read passages from Il sabato del villaggio, La quiete dopo la tempesta and A se stesso, and render them in everyday Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Saturday in the village",
        body: [
          "\"Il sabato del villaggio\" opens on a village girl coming home at sunset: \"La donzelletta vien dalla campagna, / in sul calar del sole, / col suo fascio dell'erba; e reca in mano / un mazzolin di rose e di viole\". \"Donzelletta\" is a diminutive of \"donzella\" (young woman); \"reca\" is \"porta\". Saturday, full of expectation, is happier than Sunday itself: for Leopardi, pleasure lives in waiting.",
          "\"La quiete dopo la tempesta\" begins: \"Passata è la tempesta: / odo augelli far festa, e la gallina, / tornata in su la via, / che ripete il suo verso.\" Note the inversion \"Passata è\" and the poetic \"augelli\".",
        ],
        examples: [
          { es: "La donzelletta vien dalla campagna, / in sul calar del sole", en: "The young girl comes in from the fields as the sun goes down" },
          { es: "e reca in mano / un mazzolin di rose e di viole", en: "and carries in her hand a little bunch of roses and violets" },
          { es: "Passata è la tempesta: / odo augelli far festa", en: "The storm is over: I hear birds rejoicing" },
          { es: "Il sabato è più felice della domenica.", en: "Saturday is happier than Sunday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The storm is over.", answer: "La tempesta è passata.", altAnswers: ["La tempesta è finita.", "Passata è la tempesta."], explanation: "Leopardi inverts: \"Passata è la tempesta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [carries in her hand] a little bunch of roses.", sentence: "___ un mazzolino di rose.", answer: "Porta in mano", altAnswers: ["Tiene in mano", "Reca in mano"], explanation: "\"Recare\" (literary) = \"portare\"." },
        ],
      },
      {
        heading: "To himself",
        body: [
          "\"A se stesso\" (1833) is Leopardi's harshest poem, addressed to his own heart after a final disappointment in love: \"Or poserai per sempre, / stanco mio cor. Perì l'inganno estremo, / ch'eterno io mi credei. Perì.\" Now you will rest for ever, my tired heart. The last illusion, which I believed eternal, has died. Died. The short sentences and the repeated \"perì\" (passato remoto of \"perire\") break the music Leopardi had perfected.",
        ],
        examples: [
          { es: "Or poserai per sempre, / stanco mio cor.", en: "Now you will rest for ever, my weary heart." },
          { es: "Perì l'inganno estremo, / ch'eterno io mi credei. Perì.", en: "The last illusion, which I thought eternal, has perished. Perished." },
          { es: "Ora riposerai per sempre, mio cuore stanco.", en: "Now you will rest for ever, my tired heart. (paraphrase)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Now you will rest for ever, my tired heart.", answer: "Ora riposerai per sempre, mio cuore stanco.", altAnswers: ["Adesso riposerai per sempre, mio cuore stanco.", "Ora riposerai per sempre, cuore mio stanco.", "Ora ti riposerai per sempre, mio cuore stanco."], explanation: "\"Or poserai\" → \"ora riposerai\"; \"cor\" → \"cuore\"." },
          { type: "listen-choose", audio: "Perì l'inganno estremo, ch'eterno io mi credei. Perì.", question: "What has died?", options: ["the last illusion", "the poet's friend", "his mother", "the summer"], correctIndex: 0, explanation: "\"L'inganno estremo\" = the final illusion." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girl comes back from the fields at sunset.", answer: "La ragazza torna dai campi al tramonto.", altAnswers: ["La ragazza ritorna dai campi al tramonto.", "La ragazza torna dalla campagna al tramonto.", "Al tramonto la ragazza torna dai campi."], explanation: "\"In sul calar del sole\" → \"al tramonto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hear the birds rejoicing.", answer: "Sento gli uccelli fare festa.", altAnswers: ["Sento gli uccelli che fanno festa.", "Odo gli uccelli fare festa."], explanation: "\"Odo augelli\" → \"sento gli uccelli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pleasure lives in waiting.", answer: "Il piacere sta nell'attesa.", altAnswers: ["Il piacere vive nell'attesa.", "Il piacere è nell'attesa."], explanation: "\"L'attesa\" = waiting, expectation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hen goes back onto the road.", answer: "La gallina torna sulla strada.", altAnswers: ["La gallina ritorna sulla strada.", "La gallina torna in strada."], explanation: "\"In su la via\" → \"sulla strada\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I believed it was eternal.", answer: "Credevo che fosse eterno.", altAnswers: ["Lo credevo eterno.", "Pensavo che fosse eterno.", "Credetti che fosse eterno."], explanation: "\"Ch'eterno io mi credei\": \"credere che\" + imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The last illusion] has died.", sentence: "___ è morta.", answer: "L'ultima illusione", altAnswers: ["L'illusione estrema"], explanation: "\"Inganno\" here = illusion, self-deception." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A little bunch [of roses and violets].", sentence: "Un mazzolino ___.", answer: "di rose e di viole", altAnswers: ["di rose e viole"], explanation: "\"Mazzolin\" cut from \"mazzolino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Saturday] is happier than Sunday.", sentence: "___ è più felice della domenica.", answer: "Il sabato", explanation: "Days are lower-case." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The hen [repeats its call].", sentence: "La gallina ___.", answer: "ripete il suo verso", explanation: "\"Il verso\" is also an animal's call." },
      { type: "word-order", prompt: "Put the words in order to say: Now you will rest for ever, my tired heart.", words: ["Ora", "riposerai", "per sempre,", "mio", "cuore", "stanco."], translation: "Now you will rest for ever, my tired heart.", explanation: "Paraphrase of \"Or poserai per sempre, stanco mio cor\"." },
      { type: "word-order", prompt: "Put the words in order to say: The storm is over.", words: ["La", "tempesta", "è", "passata."], translation: "The storm is over.", explanation: "Normal order for \"Passata è la tempesta\"." },
      { type: "matching", instructions: "Match the poetic form to the everyday one.", pairs: [{ left: "donzelletta", right: "ragazza" }, { left: "reca", right: "porta" }, { left: "or", right: "ora" }, { left: "perì", right: "morì" }, { left: "augelli", right: "uccelli" }], explanation: "Leopardi's vocabulary." },
      { type: "multiple-choice", question: "Why is Saturday happier than Sunday for Leopardi?", options: ["Because pleasure lies in expectation, not in the event", "Because there is no work on Saturday", "Because of the market", "Because Sunday is a day of prayer"], correctIndex: 0, explanation: "The theory of pleasure: hope is sweeter than fulfilment." },
      { type: "dictation", audio: "La donzelletta vien dalla campagna, in sul calar del sole.", explanation: "\"Vien\" cut from \"viene\"." },
      { type: "speak", text: "Or poserai per sempre, stanco mio cor. Perì l'inganno estremo, ch'eterno io mi credei. Perì.", tip: "Short, hard stops: \"Perì.\" with stress on the final ì.", explanation: "The broken music of \"A se stesso\"." },
    ],
  },
  {
    slug: "c2-poetry-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Other Poets",
    summary: "Read short passages by Foscolo, Carducci, Pascoli and Gozzano and render them in everyday Italian.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Tombs and fog",
        body: [
          "Foscolo's \"Dei sepolcri\" (1807) asks whether tombs matter to the dead: \"All'ombra de' cipressi e dentro l'urne / confortate di pianto è forse il sonno / della morte men duro?\" Is the sleep of death any less hard in the shade of cypresses, in urns comforted by tears? \"De'\" is \"dei\", \"l'urne\" is \"le urne\", \"men\" is \"meno\".",
          "Carducci's \"San Martino\" paints a November coast: \"La nebbia a gl'irti colli / piovigginando sale, / e sotto il maestrale / urla e biancheggia il mar\". The fog rises drizzling to the bristling hills, and under the north-west wind the sea howls and whitens. \"Gl'irti\" is \"gli irti\" elided.",
        ],
        examples: [
          { es: "All'ombra de' cipressi e dentro l'urne / confortate di pianto", en: "In the shade of cypresses and inside urns comforted by tears" },
          { es: "è forse il sonno / della morte men duro?", en: "is the sleep of death perhaps less hard?" },
          { es: "La nebbia a gl'irti colli / piovigginando sale", en: "The fog climbs, drizzling, to the bristling hills" },
          { es: "e sotto il maestrale / urla e biancheggia il mar", en: "and under the mistral the sea howls and whitens" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is the sleep of death less hard?", answer: "Il sonno della morte è meno duro?", altAnswers: ["È meno duro il sonno della morte?"], explanation: "\"Men\" → \"meno\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The fog [rises] towards the hills.", sentence: "La nebbia ___ verso le colline.", answer: "sale", explanation: "Carducci puts \"sale\" at the end of the line." },
        ],
      },
      {
        heading: "Pascoli and Gozzano",
        body: [
          "Pascoli's \"Novembre\" turns from the false spring of the first stanza to silence: \"Silenzio, intorno: solo, alle ventate, / odi lontano, da giardini ed orti, / di foglie un cader fragile.\" Silence all round; only, in the gusts, you hear far off, from gardens and orchards, a fragile falling of leaves. Note \"un cader\", an infinitive as noun.",
          "Guido Gozzano (1883-1916) brought irony and everyday objects into poetry. \"La signorina Felicita\" opens with an address: \"Signorina Felicita, a quest'ora / scende la sera nel giardino antico / della tua casa.\" His tone is \"crepuscolare\": twilight, modest, a little melancholy and self-mocking.",
        ],
        examples: [
          { es: "Odi lontano, da giardini ed orti, / di foglie un cader fragile.", en: "You hear far off, from gardens and orchards, a fragile fall of leaves." },
          { es: "Signorina Felicita, a quest'ora / scende la sera nel giardino antico", en: "Miss Felicita, at this hour evening falls in the old garden" },
          { es: "Il tono crepuscolare è dimesso e ironico.", en: "The twilight tone is subdued and ironic." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At this hour evening falls in the garden.", answer: "A quest'ora scende la sera nel giardino.", altAnswers: ["A quest'ora la sera scende nel giardino.", "A quest'ora cala la sera nel giardino."], explanation: "\"Scende la sera\" = evening falls." },
          { type: "dictation", audio: "Signorina Felicita, a quest'ora scende la sera nel giardino antico.", explanation: "Gozzano's conversational address." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The sea howls and whitens.", answer: "Il mare urla e biancheggia.", altAnswers: ["Il mare ulula e biancheggia.", "Il mare urla e si imbianca."], explanation: "\"Biancheggiare\" = to show white." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You hear leaves falling in the distance.", answer: "Senti cadere le foglie in lontananza.", altAnswers: ["Senti le foglie cadere in lontananza.", "Si sentono cadere le foglie in lontananza.", "Senti cadere le foglie lontano."], explanation: "\"Sentire\" + infinitive; \"in lontananza\" = far off." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tombs are in the shade of the cypresses.", answer: "Le tombe sono all'ombra dei cipressi.", altAnswers: ["I sepolcri sono all'ombra dei cipressi."], explanation: "\"De' cipressi\" → \"dei cipressi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tone is subdued and ironic.", answer: "Il tono è dimesso e ironico.", altAnswers: ["Il tono è sommesso e ironico."], explanation: "\"Dimesso\" = modest, subdued." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It is drizzling on the hills.", answer: "Pioviggina sulle colline.", altAnswers: ["Sta piovigginando sulle colline.", "Sulle colline pioviggina."], explanation: "\"Piovigginare\" = to drizzle; Carducci's gerund \"piovigginando\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Urns [comforted by tears].", sentence: "Urne ___.", answer: "confortate dal pianto", altAnswers: ["confortate di pianto", "consolate dal pianto"], explanation: "Foscolo's \"confortate di pianto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Silence] all around.", sentence: "___ tutto intorno.", answer: "Silenzio", explanation: "A nominal sentence: no verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Under [the mistral] the sea howls.", sentence: "Sotto ___ il mare urla.", answer: "il maestrale", explanation: "The north-west wind." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A [fragile] falling of leaves.", sentence: "Un ___ cadere di foglie.", answer: "fragile", explanation: "Pascoli: \"di foglie un cader fragile\"." },
      { type: "word-order", prompt: "Put the words in order to say: The fog rises to the hills.", words: ["La", "nebbia", "sale", "verso", "le colline."], translation: "The fog rises to the hills.", explanation: "Normal order for Carducci's inverted line." },
      { type: "word-order", prompt: "Put the words in order to say: Evening falls in the old garden.", words: ["La", "sera", "scende", "nel", "giardino", "antico."], translation: "Evening falls in the old garden.", explanation: "\"Antico\" = old, of long ago." },
      { type: "matching", instructions: "Match the poet to the line.", pairs: [{ left: "Foscolo", right: "All'ombra de' cipressi" }, { left: "Carducci", right: "La nebbia a gl'irti colli" }, { left: "Pascoli", right: "di foglie un cader fragile" }, { left: "Gozzano", right: "Signorina Felicita, a quest'ora" }], explanation: "Four voices, four tones." },
      { type: "multiple-choice", question: "\"Crepuscolare\", said of Gozzano's poetry, means ...", options: ["twilight: subdued, ironic, melancholy", "violent and heroic", "religious", "dawn-like and optimistic"], correctIndex: 0, explanation: "From \"crepuscolo\", dusk." },
      { type: "listen-choose", audio: "La nebbia a gl'irti colli piovigginando sale.", question: "What is the weather like?", options: ["foggy and drizzling", "sunny and hot", "snowy", "stormy with thunder"], correctIndex: 0, explanation: "\"Nebbia\" and \"piovigginando\"." },
      { type: "speak", text: "La nebbia a gl'irti colli piovigginando sale, e sotto il maestrale urla e biancheggia il mar.", tip: "Settenari: short and regular; \"gl'irti\" in one breath.", explanation: "Carducci's November seascape." },
    ],
  },
];
