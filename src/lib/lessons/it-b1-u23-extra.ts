// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u23-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 23 Extra Practice: Connectors. Optional lessons folded away
// under the unit (docs/italian-course/authoring.md).
export const IT_B1_U23_EXTRA: Lesson[] = [
  {
    slug: "b1-connectors-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Result and Contrast",
    summary: "Fresh sentences with quindi, perciò, allora, però, invece, tuttavia, eppure and mentre.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "So, but, and yet",
        body: [
          "Result: \"quindi\", \"perciò\", \"per questo\", \"allora\". Contrast: \"ma\", \"però\", \"invece\", \"mentre\", \"tuttavia\". Surprise: \"eppure\".",
        ],
        examples: [
          { es: "Avevo sonno, perciò ho bevuto un caffè.", en: "I was sleepy, so I drank a coffee." },
          { es: "Lei lavora di giorno, mentre lui lavora di notte.", en: "She works by day, whereas he works at night." },
          { es: "È ricco, eppure non è felice.", en: "He's rich, and yet he isn't happy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's rich, and yet he isn't happy.", answer: "È ricco, eppure non è felice.", explanation: "\"Eppure\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She works by day, whereas he works at night.", answer: "Lei lavora di giorno, mentre lui lavora di notte.", altAnswers: ["Lei lavora di giorno, lui invece lavora di notte.", "Lei lavora di giorno, mentre lui di notte."], explanation: "\"Mentre\" = whereas." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was sleepy, so I drank a coffee.", answer: "Avevo sonno, perciò ho bevuto un caffè.", altAnswers: ["Avevo sonno, quindi ho bevuto un caffè.", "Avevo sonno, allora ho bevuto un caffè."], explanation: "Result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bus didn't come, so I walked.", answer: "L'autobus non è arrivato, quindi sono andato a piedi.", altAnswers: ["L'autobus non è arrivato, quindi sono andata a piedi.", "L'autobus non è passato, quindi sono andato a piedi.", "L'autobus non è passato, quindi sono andata a piedi."], explanation: "\"Quindi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I like tea, whereas my husband prefers coffee.", answer: "A me piace il tè, mentre mio marito preferisce il caffè.", altAnswers: ["Mi piace il tè, mentre mio marito preferisce il caffè.", "A me piace il tè, mio marito invece preferisce il caffè."], explanation: "\"Mentre\" / \"invece\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The car is old; however, it works well.", answer: "La macchina è vecchia; tuttavia, funziona bene.", altAnswers: ["La macchina è vecchia, però funziona bene.", "La macchina è vecchia, tuttavia funziona bene."], explanation: "\"Tuttavia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He trained a lot, and yet he lost.", answer: "Si è allenato molto, eppure ha perso.", altAnswers: ["Si è allenato tanto, eppure ha perso."], explanation: "\"Eppure\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you ready? Then let's go. (to a friend)", answer: "Sei pronto? Allora andiamo.", altAnswers: ["Sei pronta? Allora andiamo."], explanation: "\"Allora\" = then." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's late; [that's why] I'm going home.", sentence: "È tardi, ___ vado a casa.", answer: "per questo", altAnswers: ["perciò", "quindi"], explanation: "\"Per questo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Instead of] watching TV, read a book.", sentence: "___ guardare la TV, leggi un libro.", answer: "Invece di", explanation: "\"Invece di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't know; I'll ask him [anyway].", sentence: "Non lo so; glielo chiedo ___.", answer: "comunque", explanation: "\"Comunque\" = anyway." },
      { type: "word-order", prompt: "Put the words in order to say: It's small, but it's comfortable.", words: ["È", "piccolo,", "però", "è", "comodo."], translation: "It's small, but it's comfortable.", explanation: "\"Però\"." },
      { type: "multiple-choice", question: "\"Ha mangiato tantissimo, ___ ha ancora fame.\"", options: ["eppure", "quindi", "infatti", "perciò"], correctIndex: 0, explanation: "Surprising contrast: \"eppure\"." },
      { type: "listen-choose", audio: "Non c'era posto al ristorante, quindi abbiamo mangiato una pizza a casa.", question: "Why did they eat at home?", options: ["The restaurant was full.", "The restaurant was closed.", "It was raining.", "They preferred pizza."], correctIndex: 0, explanation: "\"Non c'era posto\"." },
      { type: "dictation", audio: "Volevo venire, però avevo la febbre.", explanation: "\"Però\"." },
      { type: "speak", text: "Pioveva, quindi siamo rimasti a casa; eppure ci siamo divertiti un sacco.", prompt: "Say it in Italian: It was raining, so we stayed at home; and yet we had a great time.", tip: "\"Eppure\": ep-PU-re, a long double p.", explanation: "Result, then surprise." },
    ],
  },
  {
    slug: "b1-connectors-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Adding and Correcting",
    summary: "Fresh sentences with inoltre, non solo ... ma anche, sia ... sia, infatti, anzi and cioè.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "More, indeed, rather",
        body: [
          "Adding: \"inoltre\", \"e poi\", \"non solo ... ma anche\", \"sia ... sia\". Confirming: \"infatti\". Going further or correcting: \"anzi\". Explaining: \"cioè\".",
        ],
        examples: [
          { es: "Sia i bambini sia gli adulti si sono divertiti.", en: "Both the children and the adults had fun." },
          { es: "Ci vediamo alle otto, anzi, alle otto e mezza.", en: "See you at eight, or rather, half past eight." },
          { es: "Vengo con mia cugina, cioè la figlia di mia zia.", en: "I'm coming with my cousin, that is, my aunt's daughter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you at eight, or rather, half past eight.", answer: "Ci vediamo alle otto, anzi, alle otto e mezza.", altAnswers: ["Ci vediamo alle otto, anzi alle otto e mezza.", "Ci vediamo alle 8, anzi, alle 8 e mezza."], explanation: "\"Anzi\" corrects." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Both the children and the adults had fun.", answer: "Sia i bambini sia gli adulti si sono divertiti.", altAnswers: ["Sia i bambini che gli adulti si sono divertiti."], explanation: "\"Sia ... sia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm coming with my cousin, that is, my aunt's daughter.", answer: "Vengo con mia cugina, cioè la figlia di mia zia.", altAnswers: ["Vengo con mia cugina, cioè con la figlia di mia zia."], explanation: "\"Cioè\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The room is clean; moreover, it has a balcony.", answer: "La camera è pulita; inoltre, ha un balcone.", altAnswers: ["La camera è pulita, inoltre ha un balcone.", "La stanza è pulita; inoltre, ha un balcone."], explanation: "\"Inoltre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not only is she clever, she's also kind.", answer: "Non solo è intelligente, ma è anche gentile.", altAnswers: ["Non solo è intelligente, è anche gentile.", "È non solo intelligente, ma anche gentile."], explanation: "\"Non solo ... ma anche\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You said it would be crowded, and indeed it is.", answer: "Hai detto che ci sarebbe stata tanta gente, e infatti c'è.", altAnswers: ["Avevi detto che ci sarebbe stata tanta gente, e infatti c'è.", "Hai detto che sarebbe stato affollato, e infatti lo è."], explanation: "\"Infatti\" confirms." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not a problem; on the contrary, it's an opportunity.", answer: "Non è un problema, anzi, è un'opportunità.", altAnswers: ["Non è un problema, anzi è un'opportunità.", "Non è un problema; anzi, è un'occasione."], explanation: "\"Anzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can go either by bike or on foot.", answer: "Possiamo andare in bici oppure a piedi.", altAnswers: ["Possiamo andare o in bici o a piedi.", "Possiamo andare in bicicletta oppure a piedi."], explanation: "\"Oppure\" / \"o ... o\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She plays both the piano [and] the guitar.", sentence: "Suona sia il pianoforte ___ la chitarra.", answer: "sia", altAnswers: ["che"], explanation: "\"Sia ... sia\" / \"sia ... che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm tired. [Yes indeed], it shows!", sentence: "Sono stanco. ___, si vede!", answer: "Infatti", explanation: "Agreeing reply." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's good, [in fact] excellent.", sentence: "È bravo, ___ bravissimo.", answer: "anzi", explanation: "Upgrade: \"anzi\"." },
      { type: "word-order", prompt: "Put the words in order to say: I like many sports, for example tennis.", words: ["Mi", "piacciono", "molti", "sport,", "ad", "esempio", "il", "tennis."], translation: "I like many sports, for example tennis.", explanation: "\"Ad esempio\"." },
      { type: "multiple-choice", question: "\"Non ho fretta, ___, ho tutto il tempo del mondo.\"", options: ["anzi", "infatti", "quindi", "però"], correctIndex: 0, explanation: "After a negative, going further: \"anzi\"." },
      { type: "listen-choose", audio: "Arrivo lunedì, cioè fra tre giorni.", question: "When is the speaker arriving?", options: ["In three days", "Today", "In a week", "Next month"], correctIndex: 0, explanation: "\"Cioè fra tre giorni\"." },
      { type: "dictation", audio: "Non solo è bello, ma è anche economico.", explanation: "\"Non solo ... ma anche\"." },
      { type: "speak", text: "Sia mio padre sia mia madre parlano inglese; anzi, mia madre parla anche tedesco.", prompt: "Say it in Italian: Both my father and my mother speak English; in fact, my mother also speaks German.", tip: "\"Sia ... sia\": both short, SEE-a.", explanation: "\"Sia ... sia\" and \"anzi\"." },
    ],
  },
  {
    slug: "b1-connectors-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Paragraphs",
    summary: "Fresh paragraphs to put in order and complete with innanzitutto, poi, inoltre, d'altra parte, alla fine and insomma.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A paragraph's shape",
        body: [
          "Open (\"Innanzitutto\", \"Prima di tutto\"), add (\"Poi\", \"Inoltre\"), contrast (\"D'altra parte\", \"Però\"), close (\"Alla fine\", \"Insomma\", \"In conclusione\").",
        ],
        examples: [
          { es: "Innanzitutto, il viaggio è stato lungo.", en: "First of all, the journey was long." },
          { es: "Poi abbiamo perso la coincidenza.", en: "Then we missed the connection." },
          { es: "Alla fine siamo arrivati a mezzanotte.", en: "In the end we arrived at midnight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Then we missed the connection.", answer: "Poi abbiamo perso la coincidenza.", explanation: "\"Poi\" = then." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the end we arrived at midnight.", answer: "Alla fine siamo arrivati a mezzanotte.", altAnswers: ["Alla fine, siamo arrivati a mezzanotte.", "Alla fine siamo arrivate a mezzanotte."], explanation: "\"Alla fine\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, the journey was long.", answer: "Innanzitutto, il viaggio è stato lungo.", altAnswers: ["Prima di tutto, il viaggio è stato lungo.", "Innanzitutto il viaggio è stato lungo."], explanation: "Opening." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hotel was lovely. Moreover, the staff were very kind.", answer: "L'albergo era bellissimo. Inoltre, il personale era gentilissimo.", altAnswers: ["L'hotel era bellissimo. Inoltre, il personale era molto gentile.", "L'albergo era bellissimo. Inoltre il personale era molto gentile."], explanation: "\"Inoltre\"; \"il personale\" is singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the other hand, the food wasn't great.", answer: "D'altra parte, il cibo non era granché.", altAnswers: ["D'altra parte, il cibo non era un granché.", "Però il cibo non era granché."], explanation: "\"D'altra parte\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "All in all, it was a good vacation.", answer: "Insomma, è stata una bella vacanza.", altAnswers: ["Tutto sommato, è stata una bella vacanza.", "In conclusione, è stata una bella vacanza."], explanation: "\"Insomma\" / \"tutto sommato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First we went to Florence, then to Siena.", answer: "Prima siamo andati a Firenze, poi a Siena.", altAnswers: ["Prima siamo andate a Firenze, poi a Siena.", "Prima siamo stati a Firenze, poi a Siena."], explanation: "\"Prima ... poi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the end], we found the keys.", sentence: "___ abbiamo trovato le chiavi.", answer: "Alla fine", explanation: "\"Alla fine\" = eventually." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[First of all], let me introduce myself.", sentence: "___, mi presento.", answer: "Innanzitutto", altAnswers: ["Prima di tutto", "Innanzi tutto"], explanation: "Opening." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The apartment is cheap. [On the other hand], it's far from downtown.", sentence: "L'appartamento è economico. ___, è lontano dal centro.", answer: "D'altra parte", altAnswers: ["Però", "Tuttavia"], explanation: "Contrast." },
      { type: "word-order", prompt: "Put the words in order to say: In conclusion, I'd go back tomorrow.", words: ["In", "conclusione,", "ci", "tornerei", "domani."], translation: "In conclusion, I'd go back tomorrow.", explanation: "Closing." },
      { type: "multiple-choice", question: "Which sentence opens a paragraph?", options: ["Prima di tutto, vorrei ringraziarvi.", "Insomma, grazie a tutti.", "Alla fine, ce l'abbiamo fatta.", "Quindi, è tutto."], correctIndex: 0, explanation: "\"Prima di tutto\" opens." },
      { type: "matching", instructions: "Match the connector to its English.", pairs: [{ left: "tutto sommato", right: "all in all" }, { left: "d'altra parte", right: "on the other hand" }, { left: "alla fine", right: "in the end" }, { left: "innanzitutto", right: "first of all" }, { left: "poi", right: "then" }], explanation: "Paragraph connectors." },
      { type: "listen-choose", audio: "Innanzitutto il viaggio è stato lungo; poi abbiamo perso la coincidenza; alla fine siamo arrivati a mezzanotte.", question: "When did they arrive?", options: ["At midnight", "On time", "In the morning", "They didn't arrive"], correctIndex: 0, explanation: "\"Alla fine ... a mezzanotte\"." },
      { type: "dictation", audio: "Tutto sommato, è stata una bella esperienza.", explanation: "\"Tutto sommato\" = all in all." },
      { type: "speak", text: "Prima di tutto, grazie. Poi, scusate il ritardo. Insomma, cominciamo!", prompt: "Say it in Italian: First of all, thank you. Then, sorry I'm late. Anyway, let's begin!", tip: "Pause after each connector, like a speaker on stage.", explanation: "Opening, adding, closing." },
    ],
  },
];
