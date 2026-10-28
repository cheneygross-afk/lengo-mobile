// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u23.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 23: Connectors. Result, contrast, adding and correcting,
// spoken connectors and their intonation, infatti vs invece vs anzi.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U23: Lesson[] = [
  {
    slug: "b1-connectors-result",
    level: "IT-B1",
    number: 1,
    title: "So: Quindi, Allora, Dunque",
    summary: "Link a cause to its result with quindi, allora, dunque, perciò and per questo: pioveva, quindi siamo rimasti a casa; allora, cosa facciamo?",
    duration: "17 min",
    sections: [
      {
        heading: "Quindi, perciò, per questo",
        body: [
          "To say so, therefore, Italian has several options. \"Quindi\" is the everyday one, in speech and writing: \"Pioveva, quindi siamo rimasti a casa\". \"Perciò\" and \"per questo\" (that's why) are just as common: \"Ero stanco, perciò sono andato a letto\", \"Non ha studiato: per questo è stato bocciato\".",
          "\"Dunque\" is a little more formal or reflective: \"Penso, dunque sono\" (I think, therefore I am).",
          "Keep cause and result the right way round: \"perché\" introduces the cause (\"Siamo rimasti a casa perché pioveva\"), \"quindi\" the result (\"Pioveva, quindi siamo rimasti a casa\"). In speech \"così\" also works for so (\"Pioveva, così siamo rimasti a casa\"). In writing, \"quindi\" can also sit inside the clause: \"Siamo quindi rimasti a casa\".",
        ],
        examples: [
          { es: "Pioveva, quindi siamo rimasti a casa.", en: "It was raining, so we stayed at home." },
          { es: "Ero stanco, perciò sono andato a letto presto.", en: "I was tired, so I went to bed early." },
          { es: "Non ha studiato: per questo è stato bocciato.", en: "He didn't study: that's why he failed." },
          { es: "Penso, dunque sono.", en: "I think, therefore I am." },
          { es: "Il treno è in ritardo, quindi arriveremo tardi.", en: "The train's late, so we'll arrive late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was raining, so we stayed at home.", answer: "Pioveva, quindi siamo rimasti a casa.", altAnswers: ["Pioveva, quindi siamo restati a casa.", "Pioveva, perciò siamo rimasti a casa.", "Pioveva, quindi siamo rimaste a casa."], explanation: "\"Quindi\" = so." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He didn't study: [that's why] he failed.", sentence: "Non ha studiato: ___ è stato bocciato.", answer: "per questo", altAnswers: ["perciò", "quindi"], explanation: "\"Per questo\" = that's why." },
        ],
      },
      {
        heading: "Allora: so, then, well",
        body: [
          "\"Allora\" is the spoken so: \"Allora, cosa facciamo?\" (so, what shall we do?), \"Non c'è il pane? Allora vado io\" (no bread? Then I'll go). At the start of a sentence it often means well, right, to begin.",
          "It can also mean at that time: \"Allora vivevo a Milano\" (back then I lived in Milan).",
        ],
        examples: [
          { es: "Allora, cosa facciamo stasera?", en: "So, what shall we do tonight?" },
          { es: "Non c'è il pane? Allora vado io.", en: "No bread? Then I'll go." },
          { es: "Allora vivevo a Milano.", en: "Back then I lived in Milan." },
          { es: "Hai finito? Allora possiamo andare.", en: "Have you finished? Then we can go." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No bread? Then I'll go.", answer: "Non c'è il pane? Allora vado io.", altAnswers: ["Non c'è pane? Allora vado io.", "Manca il pane? Allora vado io."], explanation: "\"Allora\" = then, in that case." },
          { type: "listen-choose", audio: "Allora vivevo a Milano.", question: "What does it mean?", options: ["Back then I lived in Milan.", "So I'll live in Milan.", "Then I'll move to Milan.", "Well, I live in Milan."], correctIndex: 0, explanation: "With the imperfect, \"allora\" = at that time." },
        ],
      },
      {
        heading: "Siccome ... quindi",
        body: [
          "You can also put the cause first with \"siccome\" (since, as): \"Siccome era tardi, abbiamo preso un taxi\". Don't add \"quindi\" after a \"siccome\" clause; one connector is enough.",
        ],
        examples: [
          { es: "Siccome era tardi, abbiamo preso un taxi.", en: "As it was late, we took a taxi." },
          { es: "Era tardi, quindi abbiamo preso un taxi.", en: "It was late, so we took a taxi." },
          { es: "Siccome non rispondeva, sono passato da lui.", en: "Since he wasn't answering, I went over to his place." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, starting with siccome.", source: "As it was late, we took a taxi.", answer: "Siccome era tardi, abbiamo preso un taxi.", explanation: "\"Siccome\" + cause, then the result." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was tired, so I went to bed early.", answer: "Ero stanco, perciò sono andato a letto presto.", altAnswers: ["Ero stanco, quindi sono andato a letto presto.", "Ero stanca, quindi sono andata a letto presto.", "Ero stanca, perciò sono andata a letto presto."], explanation: "\"Perciò\" / \"quindi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train's late, so we'll arrive late.", answer: "Il treno è in ritardo, quindi arriveremo tardi.", altAnswers: ["Il treno è in ritardo, quindi arriveremo in ritardo.", "Il treno è in ritardo, perciò arriveremo tardi."], explanation: "\"Quindi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So, what shall we do tonight?", answer: "Allora, cosa facciamo stasera?", altAnswers: ["Allora, che facciamo stasera?", "Allora, che cosa facciamo stasera?"], explanation: "Spoken \"allora\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you finished? Then we can go. (to a friend)", answer: "Hai finito? Allora possiamo andare.", explanation: "\"Allora\" = then." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think, therefore I am.", answer: "Penso, dunque sono.", explanation: "\"Dunque\" = therefore." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop was closed, so I came back home.", answer: "Il negozio era chiuso, quindi sono tornato a casa.", altAnswers: ["Il negozio era chiuso, quindi sono tornata a casa.", "Il negozio era chiuso, perciò sono tornato a casa.", "Il negozio era chiuso, perciò sono tornata a casa."], explanation: "\"Quindi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[As] he wasn't answering, I went over to his place.", sentence: "___ non rispondeva, sono passato da lui.", answer: "Siccome", altAnswers: ["Visto che", "Dato che"], explanation: "\"Siccome\" + cause." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's expensive, [so] I won't buy it.", sentence: "È caro, ___ non lo compro.", answer: "quindi", altAnswers: ["perciò", "allora", "per questo"], explanation: "Result." },
      { type: "word-order", prompt: "Put the words in order to say: I've lost my keys, so I can't get in.", words: ["Ho", "perso", "le", "chiavi,", "quindi", "non", "posso", "entrare."], translation: "I've lost my keys, so I can't get in.", explanation: "\"Quindi\" between cause and result." },
      { type: "multiple-choice", question: "Which sentence is NOT natural?", options: ["Siccome pioveva, quindi siamo rimasti a casa.", "Siccome pioveva, siamo rimasti a casa.", "Pioveva, quindi siamo rimasti a casa.", "Pioveva, perciò siamo rimasti a casa."], correctIndex: 0, explanation: "One connector is enough after \"siccome\"." },
      { type: "dictation", audio: "Non avevo fame, quindi ho saltato la cena.", explanation: "\"Quindi\"." },
      { type: "speak", text: "Allora, siccome piove, restiamo a casa e guardiamo un film. Quindi chi fa i popcorn?", prompt: "Say it in Italian: Right, as it's raining, let's stay home and watch a film. So who's making the popcorn?", tip: "Pause slightly after \"Allora\" and lift your voice on it.", explanation: "\"Allora\", \"siccome\", \"quindi\"." },
    ],
  },
  {
    slug: "b1-connectors-contrast",
    level: "IT-B1",
    number: 2,
    title: "But, However, Instead",
    summary: "Contrast ideas with però, ma, invece, comunque, tuttavia, eppure and mentre: è caro, però è buono; io invece resto; eppure te l'avevo detto.",
    duration: "17 min",
    sections: [
      {
        heading: "Ma, però, tuttavia",
        body: [
          "\"Ma\" (but) joins two parts: \"È caro, ma è buono\". \"Però\" means the same and is very common in speech; unlike \"ma\", it can also go after the subject or at the end: \"Io però non vengo\", \"È caro, è buono però\".",
          "\"Tuttavia\" (however, nevertheless) is formal and written: \"Il progetto è interessante; tuttavia, costa troppo\".",
          "For even though, use \"anche se\" + indicative: \"Esco, anche se piove\" (I'm going out even though it's raining). Don't stack two buts: \"ma però\" is very common in speech but marked as sloppy in writing, so pick one. And remember the accent: \"però\", stressed on the last syllable.",
        ],
        examples: [
          { es: "È caro, ma è buono.", en: "It's expensive, but it's good." },
          { es: "Io però non vengo.", en: "I'm not coming, though." },
          { es: "È un bel film, lungo però.", en: "It's a good film, long though." },
          { es: "Il progetto è interessante; tuttavia, costa troppo.", en: "The project is interesting; however, it costs too much." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not coming, though.", answer: "Io però non vengo.", altAnswers: ["Però io non vengo.", "Io non vengo, però."], explanation: "\"Però\" can move around; \"ma\" can't." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The project is interesting; however, it costs too much.", answer: "Il progetto è interessante; tuttavia, costa troppo.", altAnswers: ["Il progetto è interessante, tuttavia costa troppo.", "Il progetto è interessante; tuttavia costa troppo."], explanation: "Formal \"tuttavia\"." },
        ],
      },
      {
        heading: "Invece, mentre",
        body: [
          "\"Invece\" (instead, on the other hand) contrasts two people or things: \"Lui ama il mare, io invece preferisco la montagna\". \"Invece di\" + noun or infinitive = instead of: \"invece di Marco\", \"invece di lavorare\".",
          "\"Mentre\" can mean whereas as well as while: \"Mia sorella è bionda, mentre io sono mora\".",
        ],
        examples: [
          { es: "Lui ama il mare, io invece preferisco la montagna.", en: "He loves the sea; I, on the other hand, prefer the mountains." },
          { es: "Invece di lavorare, guarda il telefono.", en: "Instead of working, he looks at his phone." },
          { es: "Mia sorella è bionda, mentre io sono mora.", en: "My sister is blonde, whereas I'm dark-haired." },
          { es: "Pensavo che sarebbe stato facile, invece è difficilissimo.", en: "I thought it was easy, but actually it's really hard." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Instead of working, he looks at his phone.", answer: "Invece di lavorare, guarda il telefono.", altAnswers: ["Invece di lavorare guarda il telefono.", "Invece di lavorare, guarda il cellulare."], explanation: "\"Invece di\" + infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My sister is blonde, [whereas] I'm dark-haired.", sentence: "Mia sorella è bionda, ___ io sono mora.", answer: "mentre", altAnswers: ["invece"], explanation: "\"Mentre\" = whereas." },
          { type: "listen-choose", audio: "Pensavo che sarebbe stato facile, invece è difficilissimo.", question: "What did the speaker discover?", options: ["It's very hard, not easy.", "It's easy, as expected.", "It's quite easy after all.", "It's impossible to try."], correctIndex: 0, explanation: "\"Invece\" = contrary to expectations." },
        ],
      },
      {
        heading: "Comunque, eppure",
        body: [
          "\"Comunque\" means anyway, in any case: \"Non so se vengo; comunque ti chiamo\". \"Eppure\" (and yet) expresses surprise at a contrast: \"Ha studiato tanto, eppure non ha passato l'esame\". \"Eppure te l'avevo detto!\" (and yet I told you!).",
        ],
        examples: [
          { es: "Non so se vengo; comunque ti chiamo.", en: "I don't know if I'm coming; I'll call you anyway." },
          { es: "Ha studiato tanto, eppure non ha passato l'esame.", en: "She studied so much, and yet she didn't pass the exam." },
          { es: "Eppure te l'avevo detto!", en: "And yet I told you!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She studied so much, and yet she didn't pass the exam.", answer: "Ha studiato tanto, eppure non ha passato l'esame.", altAnswers: ["Ha studiato tanto, eppure non ha superato l'esame.", "Ha studiato molto, eppure non ha passato l'esame."], explanation: "\"Eppure\" = and yet." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's expensive, but it's good.", answer: "È caro, ma è buono.", altAnswers: ["È caro, però è buono.", "È caro ma buono."], explanation: "\"Ma\" / \"però\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He loves the sea; I, on the other hand, prefer the mountains.", answer: "Lui ama il mare, io invece preferisco la montagna.", altAnswers: ["Lui ama il mare, mentre io preferisco la montagna.", "A lui piace il mare, io invece preferisco la montagna."], explanation: "\"Invece\" after the second subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know if I'm coming; I'll call you anyway.", answer: "Non so se vengo; comunque ti chiamo.", altAnswers: ["Non so se vengo, comunque ti chiamo.", "Non so se vengo; ti chiamo comunque."], explanation: "\"Comunque\" = anyway." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And yet I told you! (to a friend)", answer: "Eppure te l'avevo detto!", altAnswers: ["Eppure te lo avevo detto!"], explanation: "\"Eppure\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought it was easy, but actually it's really hard.", answer: "Pensavo che sarebbe stato facile, invece è difficilissimo.", altAnswers: ["Pensavo che sarebbe stato facile, invece è molto difficile.", "Credevo che sarebbe stato facile, invece è difficilissimo.", "Pensavo che fosse facile, invece è difficilissimo."], explanation: "\"Invece\" = contrary to expectation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Instead of the car, let's take the train.", answer: "Invece della macchina, prendiamo il treno.", altAnswers: ["Invece della macchina prendiamo il treno.", "Invece di prendere la macchina, prendiamo il treno."], explanation: "\"Invece di\" + \"la\" = \"invece della\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The hotel was nice; [however], breakfast was poor.", sentence: "L'albergo era bello; ___, la colazione era scarsa.", answer: "tuttavia", altAnswers: ["però", "comunque"], explanation: "Formal contrast." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a good film, long [though].", sentence: "È un bel film, lungo ___.", answer: "però", explanation: "Only \"però\" can go at the end." },
      { type: "word-order", prompt: "Put the words in order to say: I like it, but it costs too much.", words: ["Mi", "piace,", "però", "costa", "troppo."], translation: "I like it, but it costs too much.", explanation: "\"Però\" = but." },
      { type: "multiple-choice", question: "Which can go at the END of a sentence?", options: ["però", "ma", "invece di", "mentre"], correctIndex: 0, explanation: "\"È buono, però\" is fine; \"ma\" can't close a sentence." },
      { type: "dictation", audio: "Io resto a casa, tu invece esci con gli amici.", explanation: "\"Invece\" after \"tu\"." },
      { type: "speak", text: "È un ristorante caro, però si mangia benissimo. Eppure è sempre vuoto!", prompt: "Say it in Italian: It's an expensive restaurant, but the food is excellent. And yet it's always empty!", tip: "\"Però\": stress on the final ò, pe-RÒ.", explanation: "\"Però\" and \"eppure\"." },
    ],
  },
  {
    slug: "b1-connectors-adding",
    level: "IT-B1",
    number: 3,
    title: "Also, In Fact, Rather",
    summary: "Add and clarify with inoltre, infatti, anzi, cioè, non solo ... ma anche, sia ... sia, oppure and ad esempio.",
    duration: "17 min",
    sections: [
      {
        heading: "Inoltre, non solo ... ma anche",
        body: [
          "To add a point: \"inoltre\" (moreover, also) in writing, \"poi\" or \"e poi\" in speech: \"L'appartamento è grande; inoltre, è vicino alla stazione\".",
          "\"Non solo ... ma anche\" = not only ... but also: \"Parla non solo inglese, ma anche cinese\". \"Sia ... sia\" or \"sia ... che\" = both ... and: \"Sia Marco sia Laura sono venuti\".",
        ],
        examples: [
          { es: "L'appartamento è grande; inoltre, è vicino alla stazione.", en: "The apartment is big; moreover, it's near the station." },
          { es: "Parla non solo inglese, ma anche cinese.", en: "She speaks not only English but also Chinese." },
          { es: "Sia Marco sia Laura sono venuti.", en: "Both Marco and Laura came." },
          { es: "Puoi pagare sia in contanti che con la carta.", en: "You can pay both in cash and by card." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She speaks not only English but also Chinese.", answer: "Parla non solo inglese, ma anche cinese.", altAnswers: ["Non parla solo inglese, ma anche cinese.", "Parla non solo l'inglese, ma anche il cinese."], explanation: "\"Non solo ... ma anche\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Both Marco [and] Laura came.", sentence: "Sia Marco ___ Laura sono venuti.", answer: "sia", altAnswers: ["che"], explanation: "\"Sia ... sia\" / \"sia ... che\"." },
        ],
      },
      {
        heading: "Infatti, cioè",
        body: [
          "\"Infatti\" confirms what was just said: indeed, and in fact, as expected. \"Pensavo che avrebbe piovuto, e infatti piove\". It's also a common reply: \"Fa freddo!\" \"Infatti!\" (exactly!).",
          "\"Cioè\" means that is, I mean: it explains or corrects: \"Arrivo dopodomani, cioè giovedì\".",
          "\"Infatti\" is a false friend: it never corrects or contradicts. When English in fact or actually means but really, Italian says \"in realtà\" or \"veramente\": \"Sembra facile, in realtà è difficile\". If you can replace it with as expected or that's right, it's \"infatti\".",
        ],
        examples: [
          { es: "Pensavo che avrebbe piovuto, e infatti piove.", en: "I thought it would rain, and sure enough it's raining." },
          { es: "Fa freddo! Infatti!", en: "It's cold! It sure is!" },
          { es: "Arrivo dopodomani, cioè giovedì.", en: "I'm arriving the day after tomorrow, that is Thursday." },
          { es: "Ha detto di no, cioè, ha detto forse.", en: "He said no, I mean, he said maybe." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm arriving the day after tomorrow, that is Thursday.", answer: "Arrivo dopodomani, cioè giovedì.", explanation: "\"Cioè\" = that is." },
          { type: "listen-choose", audio: "Pensavo che avrebbe piovuto, e infatti piove.", question: "Is the speaker surprised by the rain?", options: ["No, they expected it.", "Yes, very.", "They thought it would snow.", "They hoped it would rain."], correctIndex: 0, explanation: "\"Infatti\" confirms an expectation." },
        ],
      },
      {
        heading: "Anzi, oppure, ad esempio",
        body: [
          "\"Anzi\" corrects upward: on the contrary, or rather, even: \"Non è brutto, anzi, è bellissimo\" (it's not ugly; on the contrary, it's beautiful), \"Ci vediamo domani, anzi, stasera\".",
          "\"Oppure\" = or, or else: \"Prendiamo il treno oppure l'autobus?\". \"Ad esempio\" or \"per esempio\" = for example.",
        ],
        examples: [
          { es: "Non è brutto, anzi, è bellissimo.", en: "It's not ugly; on the contrary, it's beautiful." },
          { es: "Ci vediamo domani, anzi, stasera.", en: "See you tomorrow, or rather, tonight." },
          { es: "Prendiamo il treno oppure l'autobus?", en: "Shall we take the train or the bus?" },
          { es: "Mi piacciono gli sport di squadra, ad esempio il calcio.", en: "I like team sports, for example soccer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not ugly; on the contrary, it's beautiful.", answer: "Non è brutto, anzi, è bellissimo.", altAnswers: ["Non è brutto, anzi è bellissimo.", "Non è brutta, anzi, è bellissima."], explanation: "\"Anzi\" = on the contrary." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "See you tomorrow, [or rather], tonight.", sentence: "Ci vediamo domani, ___, stasera.", answer: "anzi", explanation: "\"Anzi\" corrects." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The apartment is big; moreover, it's near the station.", answer: "L'appartamento è grande; inoltre, è vicino alla stazione.", altAnswers: ["L'appartamento è grande, inoltre è vicino alla stazione.", "L'appartamento è grande; inoltre è vicino alla stazione."], explanation: "\"Inoltre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Both Marco and Laura came.", answer: "Sia Marco sia Laura sono venuti.", altAnswers: ["Sia Marco che Laura sono venuti."], explanation: "\"Sia ... sia\" / \"sia ... che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we take the train or the bus?", answer: "Prendiamo il treno oppure l'autobus?", altAnswers: ["Prendiamo il treno o l'autobus?"], explanation: "\"Oppure\" = or." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I like team sports, for example soccer.", answer: "Mi piacciono gli sport di squadra, ad esempio il calcio.", altAnswers: ["Mi piacciono gli sport di squadra, per esempio il calcio."], explanation: "\"Ad esempio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can pay both in cash and by card.", answer: "Puoi pagare sia in contanti che con la carta.", altAnswers: ["Puoi pagare sia in contanti sia con la carta.", "Si può pagare sia in contanti che con la carta."], explanation: "\"Sia ... che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said no, I mean, he said maybe.", answer: "Ha detto di no, cioè, ha detto forse.", altAnswers: ["Ha detto di no, cioè ha detto forse."], explanation: "\"Cioè\" corrects or explains." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's cold! [It sure is]!", sentence: "Fa freddo! ___!", answer: "Infatti", explanation: "\"Infatti\" agrees." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm not tired; [on the contrary], I'm full of energy.", sentence: "Non sono stanco; ___, sono pieno di energia.", answer: "anzi", explanation: "\"Anzi\"." },
      { type: "word-order", prompt: "Put the words in order to say: Not only is it cheap, but it's also good.", words: ["Non", "solo", "è", "economico,", "ma", "è", "anche", "buono."], translation: "Not only is it cheap, but it's also good.", explanation: "\"Non solo ... ma anche\"." },
      { type: "multiple-choice", question: "\"Ho detto che sarebbe piovuto, e ___ piove.\"", options: ["infatti", "anzi", "invece", "oppure"], correctIndex: 0, explanation: "Confirmation: \"infatti\"." },
      { type: "dictation", audio: "Non mi dispiace, anzi, mi fa piacere.", explanation: "\"Anzi\" = on the contrary." },
      { type: "speak", text: "Non solo è bravo, ma è anche simpatico. Anzi, è il mio collega preferito!", prompt: "Say it in Italian: Not only is he good at his job, he's also nice. In fact, he's my favorite colleague!", tip: "\"Anzi\": AN-zi, with a little lift.", explanation: "\"Non solo ... ma anche\" and \"anzi\"." },
    ],
  },
  {
    slug: "b1-connectors-speech",
    level: "IT-B1",
    number: 4,
    title: "Spoken Connectors",
    summary: "Use and hear allora, insomma, comunque, cioè, dai and ecco in conversation, with the intonation Italians give them.",
    duration: "17 min",
    sections: [
      {
        heading: "Allora..., cioè..., insomma...",
        body: [
          "In conversation, connectors buy time and organize what you say. \"Allora...\" with a long final a opens a story or a decision. \"Cioè...\" with a rising voice means I mean, sort of, while you look for the right word. \"Insomma\" sums up: in short, basically, so all in all.",
          "\"Insomma\" alone, with a flat or falling tone, means so-so: \"Com'è andato l'esame?\" \"Insomma...\" (not great).",
          "A few more fillers you'll hear constantly: \"Ma dai!\" (really? no way!), \"Boh\" (no idea, with a shrug), \"Mah\" (doubt: who knows), and among young people \"tipo\" (like: \"C'erano, tipo, cento persone\"). Use them sparingly: they make you sound natural in chat, but they don't belong in an email or an exam essay.",
        ],
        examples: [
          { es: "Allora... ieri sono andato al mare.", en: "So... yesterday I went to the seaside." },
          { es: "Era, cioè, non proprio arrabbiato, ma quasi.", en: "He was, I mean, not exactly angry, but nearly." },
          { es: "Insomma, è andato tutto bene.", en: "In short, it all went well." },
          { es: "Com'è andato l'esame? Insomma...", en: "How did the exam go? So-so..." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In short, it all went well.", answer: "Insomma, è andato tutto bene.", altAnswers: ["Insomma, tutto è andato bene."], explanation: "\"Insomma\" sums up." },
          { type: "listen-choose", audio: "Com'è andato l'esame? Insomma...", question: "How did the exam go?", options: ["Not very well", "Brilliantly", "It was canceled", "It hasn't happened yet"], correctIndex: 0, explanation: "\"Insomma...\" on its own = so-so." },
        ],
      },
      {
        heading: "Comunque, ecco",
        body: [
          "\"Comunque\" in speech changes or closes a topic: \"Comunque, parliamo d'altro\" (anyway, let's talk about something else). \"Ecco\" points to what you mean: \"Ecco, è proprio questo il problema\" (right, that's exactly the problem).",
        ],
        examples: [
          { es: "Comunque, parliamo d'altro.", en: "Anyway, let's talk about something else." },
          { es: "Ecco, è proprio questo il problema.", en: "Right, that's exactly the problem." },
          { es: "Ecco, volevo dirti una cosa.", en: "Well, I wanted to tell you something." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anyway, let's talk about something else.", answer: "Comunque, parliamo d'altro.", altAnswers: ["Comunque, parliamo di altro.", "Comunque, cambiamo argomento."], explanation: "\"Comunque\" changes topic." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Right], that's exactly the problem.", sentence: "___, è proprio questo il problema.", answer: "Ecco", explanation: "\"Ecco\" points to the key idea." },
        ],
      },
      {
        heading: "Dai!",
        body: [
          "\"Dai!\" (literally give!) is everywhere: come on! (\"Dai, vieni anche tu!\"), no way! (\"Dai, non ci credo!\"), and as an encouraging go on! (\"Dai, ce la fai!\"). The tone tells you which: rising and warm to encourage, falling to protest.",
        ],
        examples: [
          { es: "Dai, vieni anche tu!", en: "Come on, you come too!" },
          { es: "Dai, non ci credo!", en: "No way, I don't believe it!" },
          { es: "Dai, ce la fai!", en: "Go on, you can do it!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come on, you come too! (to a friend)", answer: "Dai, vieni anche tu!", explanation: "\"Dai\" = come on." },
          { type: "multiple-choice", question: "\"Dai, ce la fai!\" What is the speaker doing?", options: ["Encouraging someone", "Refusing something", "Giving someone a present", "Saying goodbye"], correctIndex: 0, explanation: "\"Ce la fai\" = you can do it." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So... yesterday I went to the seaside. (a man speaking)", answer: "Allora... ieri sono andato al mare.", altAnswers: ["Allora, ieri sono andato al mare."], explanation: "\"Allora\" opens a story." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Go on, you can do it! (to a friend)", answer: "Dai, ce la fai!", altAnswers: ["Dai che ce la fai!", "Forza, ce la fai!"], explanation: "Encouraging \"dai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No way, I don't believe it!", answer: "Dai, non ci credo!", altAnswers: ["Ma dai, non ci credo!"], explanation: "Protesting \"dai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Well, I wanted to tell you something. (to a friend)", answer: "Ecco, volevo dirti una cosa.", altAnswers: ["Allora, volevo dirti una cosa."], explanation: "\"Ecco\" introduces." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In short, we had a great time.", answer: "Insomma, ci siamo divertiti un sacco.", altAnswers: ["Insomma, ci siamo divertiti tantissimo.", "Insomma, ci siamo divertiti molto.", "Insomma, ci siamo divertite un sacco."], explanation: "\"Insomma\" sums up." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He was, [I mean], not exactly angry.", sentence: "Era, ___, non proprio arrabbiato.", answer: "cioè", explanation: "Hesitating \"cioè\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Anyway], I'll see you tomorrow.", sentence: "___, ci vediamo domani.", answer: "Comunque", altAnswers: ["Allora", "Insomma"], explanation: "\"Comunque\" closes a topic." },
      { type: "word-order", prompt: "Put the words in order to say: So, are we going or not?", words: ["Allora,", "andiamo", "o", "no?"], translation: "So, are we going or not?", explanation: "Decision \"allora\"." },
      { type: "multiple-choice", question: "\"Ti è piaciuto il film?\" \"Insomma...\" What does the answer mean?", options: ["Not really", "Very much", "I haven't seen it", "In short, yes"], correctIndex: 0, explanation: "\"Insomma\" alone = so-so." },
      { type: "listen-choose", audio: "Dai, non ci credo!", question: "How does the speaker feel?", options: ["Surprised", "Bored", "Encouraging", "Angry with the listener"], correctIndex: 0, explanation: "Falling \"dai\" + \"non ci credo\" = disbelief." },
      { type: "dictation", audio: "Insomma, è stata una bella giornata.", explanation: "\"Insomma\"." },
      { type: "speak", text: "Allora... cioè, non so come dirtelo. Insomma, ho perso le chiavi di casa tua!", prompt: "Say it in Italian, hesitating: So... I mean, I don't know how to tell you. Basically, I've lost your house keys!", tip: "Stretch \"Allora...\", rise on \"cioè\", fall on \"Insomma\".", explanation: "Three spoken connectors with their intonation." },
    ],
  },
  {
    slug: "b1-drill-connectors",
    level: "IT-B1",
    number: 5,
    title: "Drill: Connectors",
    summary: "High-repetition production joining sentences with quindi, però, invece, comunque, inoltre, infatti, anzi, cioè and sia ... sia.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Pick the link",
        body: [
          "Result: \"quindi\", \"perciò\", \"allora\". Contrast: \"ma\", \"però\", \"invece\", \"tuttavia\", \"eppure\". Adding: \"inoltre\", \"non solo ... ma anche\", \"sia ... sia\". Confirming: \"infatti\". Correcting upward: \"anzi\". Explaining: \"cioè\".",
        ],
        examples: [
          { es: "Ho fame, quindi mangio qualcosa.", en: "I'm hungry, so I'll eat something." },
          { es: "Ho fame, però è tardi.", en: "I'm hungry, but it's late." },
          { es: "Ho fame, anzi, ho una fame da lupo!", en: "I'm hungry; in fact, I'm starving!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm hungry, but it's late.", answer: "Ho fame, però è tardi.", altAnswers: ["Ho fame, ma è tardi."], explanation: "Contrast." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm hungry, so I'll eat something.", answer: "Ho fame, quindi mangio qualcosa.", altAnswers: ["Ho fame, quindi mangerò qualcosa.", "Ho fame, perciò mangio qualcosa."], explanation: "Result." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum was closed, so we went to the park.", answer: "Il museo era chiuso, quindi siamo andati al parco.", altAnswers: ["Il museo era chiuso, perciò siamo andati al parco.", "Il museo era chiuso, allora siamo andati al parco.", "Il museo era chiuso, quindi siamo andate al parco."], explanation: "Result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My brother eats meat, whereas I'm vegetarian.", answer: "Mio fratello mangia carne, mentre io sono vegetariano.", altAnswers: ["Mio fratello mangia la carne, io invece sono vegetariano.", "Mio fratello mangia carne, io invece sono vegetariana.", "Mio fratello mangia carne, mentre io sono vegetariana."], explanation: "\"Mentre\" / \"invece\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not angry; on the contrary, I'm happy.", answer: "Non sono arrabbiato, anzi, sono contento.", altAnswers: ["Non sono arrabbiata, anzi, sono contenta.", "Non sono arrabbiato; anzi, sono contento."], explanation: "\"Anzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hotel is cheap; moreover, it's central.", answer: "L'albergo è economico; inoltre, è in centro.", altAnswers: ["L'albergo è economico, inoltre è in centro.", "L'hotel è economico; inoltre, è centrale."], explanation: "\"Inoltre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Both my mother and my father are teachers.", answer: "Sia mia madre sia mio padre sono insegnanti.", altAnswers: ["Sia mia madre che mio padre sono insegnanti.", "Sia mia mamma che mio papà sono insegnanti."], explanation: "\"Sia ... sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told me he'd be late, and sure enough he still hasn't arrived.", answer: "Mi ha detto che avrebbe fatto tardi, e infatti non è ancora arrivato.", altAnswers: ["Mi ha detto che sarebbe arrivato in ritardo, e infatti non è ancora arrivato."], explanation: "\"Infatti\" confirms." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't like it, but I'll eat it anyway.", answer: "Non mi piace, ma lo mangio comunque.", altAnswers: ["Non mi piace, però lo mangio comunque.", "Non mi piace, ma lo mangerò comunque."], explanation: "\"Comunque\" = anyway." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She trained every day, and yet she lost.", answer: "Si è allenata ogni giorno, eppure ha perso.", altAnswers: ["Si è allenata tutti i giorni, eppure ha perso."], explanation: "\"Eppure\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll call you tomorrow, [that is] Friday.", sentence: "Ti chiamo domani, ___ venerdì.", answer: "cioè", explanation: "\"Cioè\" explains." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Shall we go to the cinema [or] stay at home?", sentence: "Andiamo al cinema ___ restiamo a casa?", answer: "oppure", altAnswers: ["o"], explanation: "\"Oppure\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Instead of] complaining, help me!", sentence: "___ lamentarti, aiutami!", answer: "Invece di", explanation: "\"Invece di\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He speaks [not only] French but also German.", sentence: "Parla ___ francese, ma anche tedesco.", answer: "non solo", explanation: "\"Non solo ... ma anche\"." },
      { type: "word-order", prompt: "Put the words in order to say: It was late, so we took a taxi.", words: ["Era", "tardi,", "quindi", "abbiamo", "preso", "un", "taxi."], translation: "It was late, so we took a taxi.", explanation: "\"Quindi\"." },
      { type: "word-order", prompt: "Put the words in order to say: I studied a lot, however I'm worried.", words: ["Ho", "studiato", "molto,", "tuttavia", "sono", "preoccupato."], translation: "I studied a lot, however I'm worried.", explanation: "\"Tuttavia\"." },
      { type: "multiple-choice", question: "\"Mi piace il mare, mia moglie ___ preferisce la montagna.\"", options: ["invece", "infatti", "quindi", "anzi"], correctIndex: 0, explanation: "Contrast between two people: \"invece\"." },
      { type: "multiple-choice", question: "\"Non è caro, ___, è economicissimo!\"", options: ["anzi", "invece", "quindi", "però"], correctIndex: 0, explanation: "Correcting upward: \"anzi\"." },
      { type: "listen-choose", audio: "Non solo è in ritardo, ma ha anche dimenticato il regalo.", question: "What's wrong?", options: ["He's late and forgot the present.", "He's late but brought a present.", "He's early but forgot the present.", "He didn't come."], correctIndex: 0, explanation: "\"Non solo ... ma anche\"." },
      { type: "dictation", audio: "Volevo uscire, però pioveva, quindi sono rimasto a casa.", explanation: "Contrast, then result." },
      { type: "speak", text: "Il corso è caro, però è ottimo; inoltre, gli insegnanti sono simpatici. Insomma, te lo consiglio!", prompt: "Say it in Italian: The course is expensive, but it's excellent; moreover, the teachers are nice. In short, I recommend it!", tip: "Pause briefly after each connector.", explanation: "\"Però\", \"inoltre\", \"insomma\"." },
    ],
  },
  {
    slug: "b1-contrast-infatti-invece",
    level: "IT-B1",
    number: 6,
    title: "Contrast Clinic: Infatti, Invece, Anzi",
    summary: "Tell apart three easily confused connectors: infatti (indeed, as expected), invece (instead, contrary to expectation) and anzi (on the contrary, in fact even more).",
    duration: "17 min",
    sections: [
      {
        heading: "Infatti confirms, invece contradicts",
        body: [
          "\"Infatti\" says what follows matches what came before: \"Sembrava chiuso, e infatti era chiuso\" (and indeed it was). \"Invece\" says it doesn't: \"Sembrava chiuso, invece era aperto\" (but in fact it was open).",
          "That's the trap: English in fact can mean both. When in fact means as I said, use \"infatti\"; when it means but actually, use \"invece\".",
        ],
        examples: [
          { es: "Ha detto che sarebbe piovuto, e infatti piove.", en: "He said it would rain, and indeed it's raining." },
          { es: "Ha detto che sarebbe piovuto, invece c'è il sole.", en: "He said it would rain, but in fact it's sunny." },
          { es: "Sembrava facile, invece era difficile.", en: "It looked easy, but in fact it was hard." },
          { es: "Era stanco, infatti è andato a letto alle nove.", en: "He was tired; in fact, he went to bed at nine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It looked easy, but in fact it was hard.", answer: "Sembrava facile, invece era difficile.", altAnswers: ["Sembrava facile, invece era difficilissimo.", "Sembrava facile, ma invece era difficile."], explanation: "Contrary to expectation: \"invece\"." },
          { type: "multiple-choice", question: "\"Era stanco, ___ è andato a letto alle nove.\"", options: ["infatti", "invece", "anzi", "eppure"], correctIndex: 0, explanation: "The second part confirms: \"infatti\"." },
        ],
      },
      {
        heading: "Anzi goes further",
        body: [
          "\"Anzi\" corrects the previous statement by going further, often after a negative: \"Non è antipatico, anzi, è simpaticissimo\" (he's not unpleasant; on the contrary, he's very nice). Or it upgrades: \"È bravo, anzi, bravissimo\" (he's good, in fact very good).",
          "\"Infatti\" never means on the contrary. If you can say on the contrary or or rather, it's \"anzi\".",
        ],
        examples: [
          { es: "Non è antipatico, anzi, è simpaticissimo.", en: "He's not unpleasant; on the contrary, he's very nice." },
          { es: "È brava, anzi, bravissima.", en: "She's good, in fact very good." },
          { es: "Non mi disturbi, anzi!", en: "You're not bothering me, quite the opposite!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's good, in fact very good.", answer: "È brava, anzi, bravissima.", altAnswers: ["È brava, anzi bravissima."], explanation: "Upgrade: \"anzi\"." },
          { type: "listen-choose", audio: "Non mi disturbi, anzi!", question: "What does the speaker mean?", options: ["You're welcome to stay.", "Please leave me alone.", "You're bothering me a bit.", "I'm busy right now."], correctIndex: 0, explanation: "\"Anzi!\" = quite the opposite." },
        ],
      },
      {
        heading: "One test",
        body: [
          "Ask: does the second part agree with the first (\"infatti\"), go against it (\"invece\"), or go beyond it (\"anzi\")? \"Sembrava lontano, e infatti ...\" (it was far), \"... invece ...\" (it was near), \"Non è lontano, anzi ...\" (it's very close).",
        ],
        examples: [
          { es: "Sembrava lontano, e infatti ci abbiamo messo due ore.", en: "It looked far, and indeed it took us two hours." },
          { es: "Sembrava lontano, invece era a due passi.", en: "It looked far, but in fact it was just around the corner." },
          { es: "Non è lontano, anzi, è vicinissimo.", en: "It's not far; on the contrary, it's very close." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It looked far, [but in fact] it was just around the corner.", sentence: "Sembrava lontano, ___ era a due passi.", answer: "invece", explanation: "Against expectation: \"invece\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said it would rain, and indeed it's raining.", answer: "Ha detto che sarebbe piovuto, e infatti piove.", altAnswers: ["Ha detto che avrebbe piovuto, e infatti piove.", "Ha detto che sarebbe piovuto, infatti piove."], explanation: "Confirmation: \"infatti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said it would rain, but in fact it's sunny.", answer: "Ha detto che sarebbe piovuto, invece c'è il sole.", altAnswers: ["Ha detto che avrebbe piovuto, invece c'è il sole.", "Ha detto che sarebbe piovuto, e invece c'è il sole."], explanation: "Contradiction: \"invece\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's not unpleasant; on the contrary, he's very nice.", answer: "Non è antipatico, anzi, è simpaticissimo.", altAnswers: ["Non è antipatico, anzi è simpaticissimo.", "Non è antipatico, anzi, è molto simpatico."], explanation: "\"Anzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not far; on the contrary, it's very close.", answer: "Non è lontano, anzi, è vicinissimo.", altAnswers: ["Non è lontano, anzi è vicinissimo.", "Non è lontano, anzi, è molto vicino."], explanation: "\"Anzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was tired; in fact, he went to bed at nine.", answer: "Era stanco, infatti è andato a letto alle nove.", altAnswers: ["Era stanco; infatti, è andato a letto alle nove.", "Era stanco, infatti è andato a letto alle 9."], explanation: "\"Infatti\" = and as you'd expect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I expected a small room, but in fact it's huge.", answer: "Mi aspettavo una camera piccola, invece è enorme.", altAnswers: ["Mi aspettavo una stanza piccola, invece è enorme.", "Mi aspettavo una camera piccola, e invece è enorme."], explanation: "\"Invece\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't mind; [quite the opposite], I'm pleased.", sentence: "Non mi dispiace, ___, mi fa piacere.", answer: "anzi", explanation: "\"Anzi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The restaurant was full, [as] I'd said.", sentence: "Il ristorante era pieno, ___ te l'avevo detto.", answer: "infatti", altAnswers: ["come"], explanation: "Confirmation." },
      { type: "word-order", prompt: "Put the words in order to say: She seemed Spanish, but she's actually Argentinian.", words: ["Sembrava", "spagnola,", "invece", "è", "argentina."], translation: "She seemed Spanish, but she's actually Argentinian.", explanation: "\"Invece\"." },
      { type: "multiple-choice", question: "\"Il film è bello, ___, è un capolavoro!\"", options: ["anzi", "infatti", "invece", "quindi"], correctIndex: 0, explanation: "Going further: \"anzi\"." },
      { type: "multiple-choice", question: "\"Doveva arrivare alle otto, ___ è arrivato a mezzanotte.\"", options: ["invece", "infatti", "anzi", "quindi"], correctIndex: 0, explanation: "Contrary to plan: \"invece\"." },
      { type: "multiple-choice", question: "\"Hai fame?\" \"Sì, ___ non ho pranzato.\"", options: ["infatti", "invece", "anzi", "eppure"], correctIndex: 0, explanation: "Confirming why: \"infatti\"." },
      { type: "dictation", audio: "Sembrava tardi, invece erano solo le sette.", explanation: "\"Invece\"." },
      { type: "speak", text: "Pensavo che sarebbe stato difficile, invece è facile. Anzi, è facilissimo!", prompt: "Say it in Italian: I thought it would be hard, but in fact it's easy. In fact, it's really easy!", tip: "Lift your voice on \"invece\" and \"anzi\".", explanation: "\"Invece\", then \"anzi\"." },
    ],
  },
  {
    slug: "b1-drill-connectors-paragraphs",
    level: "IT-B1",
    number: 7,
    title: "Drill: Building Paragraphs",
    summary: "High-repetition paragraph building: put ideas in order and link them with prima di tutto, poi, inoltre, però, quindi and insomma.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "First, then, finally",
        body: [
          "A paragraph needs a start, links and an end. Start: \"Prima di tutto\", \"Innanzitutto\". Add: \"Poi\", \"Inoltre\". Contrast: \"Però\", \"D'altra parte\" (on the other hand). Close: \"Quindi\", \"Insomma\", \"Alla fine\", \"In conclusione\".",
        ],
        examples: [
          { es: "Prima di tutto, la città è bellissima.", en: "First of all, the city is beautiful." },
          { es: "D'altra parte, la vita è cara.", en: "On the other hand, life is expensive." },
          { es: "In conclusione, ci tornerei volentieri.", en: "In conclusion, I'd happily go back." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the other hand, life is expensive.", answer: "D'altra parte, la vita è cara.", altAnswers: ["D'altra parte la vita è cara.", "D'altro canto, la vita è cara."], explanation: "\"D'altra parte\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In conclusion, I'd happily go back.", answer: "In conclusione, ci tornerei volentieri.", altAnswers: ["Insomma, ci tornerei volentieri.", "In conclusione ci tornerei volentieri."], explanation: "\"In conclusione\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, the city is beautiful.", answer: "Prima di tutto, la città è bellissima.", altAnswers: ["Innanzitutto, la città è bellissima.", "Prima di tutto la città è bellissima."], explanation: "\"Prima di tutto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The job is interesting. However, the salary is low.", answer: "Il lavoro è interessante. Però lo stipendio è basso.", altAnswers: ["Il lavoro è interessante. Tuttavia, lo stipendio è basso.", "Il lavoro è interessante, però lo stipendio è basso."], explanation: "Contrast across sentences." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First we visited the museum, then we had lunch.", answer: "Prima abbiamo visitato il museo, poi abbiamo pranzato.", altAnswers: ["Prima abbiamo visitato il museo, poi abbiamo mangiato.", "Prima abbiamo visto il museo, poi abbiamo pranzato."], explanation: "\"Prima ... poi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the end, we decided to stay.", answer: "Alla fine abbiamo deciso di restare.", altAnswers: ["Alla fine, abbiamo deciso di restare.", "Alla fine abbiamo deciso di rimanere."], explanation: "\"Alla fine\" = in the end." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The apartment is small; on the other hand, it's very bright.", answer: "L'appartamento è piccolo; d'altra parte, è molto luminoso.", altAnswers: ["L'appartamento è piccolo, però è molto luminoso.", "L'appartamento è piccolo; d'altra parte è molto luminoso."], explanation: "\"D'altra parte\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In short, it was a wonderful trip.", answer: "Insomma, è stato un viaggio meraviglioso.", altAnswers: ["Insomma, è stato un viaggio bellissimo.", "In conclusione, è stato un viaggio meraviglioso."], explanation: "\"Insomma\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[First of all], I'd like to thank you.", sentence: "___, vorrei ringraziarvi.", answer: "Prima di tutto", altAnswers: ["Innanzitutto", "Innanzi tutto"], explanation: "Opening." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The hotel was central. [Moreover], it had a pool.", sentence: "L'hotel era centrale. ___, aveva la piscina.", answer: "Inoltre", altAnswers: ["E poi", "In più"], explanation: "Adding." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It rained all week. [So] we visited lots of museums.", sentence: "Ha piovuto tutta la settimana. ___ abbiamo visitato tanti musei.", answer: "Quindi", altAnswers: ["Perciò", "Per questo"], explanation: "Result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In conclusion], I recommend this book.", sentence: "___, consiglio questo libro.", answer: "In conclusione", altAnswers: ["Insomma", "Per concludere"], explanation: "Closing." },
      { type: "word-order", prompt: "Put the words in order to say: First we ate, then we went for a walk.", words: ["Prima", "abbiamo", "mangiato,", "poi", "abbiamo", "fatto", "una", "passeggiata."], translation: "First we ate, then we went for a walk.", explanation: "\"Prima ... poi\"." },
      { type: "word-order", prompt: "Put the words in order to say: In the end, everything went well.", words: ["Alla", "fine", "è", "andato", "tutto", "bene."], translation: "In the end, everything went well.", explanation: "\"Alla fine\"." },
      { type: "multiple-choice", question: "Which order makes the best paragraph?", options: ["Innanzitutto ... Inoltre ... Però ... Insomma", "Insomma ... Però ... Innanzitutto ... Inoltre", "Però ... Insomma ... Inoltre ... Innanzitutto", "Inoltre ... Innanzitutto ... Insomma ... Però"], correctIndex: 0, explanation: "Open, add, contrast, close." },
      { type: "multiple-choice", question: "Which connector closes a paragraph?", options: ["In conclusione", "Innanzitutto", "Inoltre", "Prima di tutto"], correctIndex: 0, explanation: "\"In conclusione\" sums up." },
      { type: "matching", instructions: "Match each connector to its job.", pairs: [{ left: "innanzitutto", right: "opening" }, { left: "inoltre", right: "adding" }, { left: "d'altra parte", right: "contrasting" }, { left: "quindi", right: "result" }, { left: "insomma", right: "summing up" }], explanation: "A paragraph's skeleton." },
      { type: "listen-choose", audio: "Prima di tutto la città è bellissima; d'altra parte, però, è molto cara.", question: "What are the two points?", options: ["Beautiful but expensive", "Cheap and beautiful", "Expensive and ugly", "Small but lively"], correctIndex: 0, explanation: "\"Bellissima\" vs \"cara\"." },
      { type: "dictation", audio: "Innanzitutto grazie a tutti. Inoltre, vorrei salutare i miei genitori.", explanation: "Opening and adding." },
      { type: "speak", text: "Prima di tutto, il corso è utile. Inoltre, è economico. D'altra parte, gli orari sono scomodi. Insomma, lo consiglio.", prompt: "Say it in Italian: First of all, the course is useful. Moreover, it's cheap. On the other hand, the times are inconvenient. All in all, I recommend it.", tip: "Short pause after every connector, as at a full stop.", explanation: "A four-step paragraph." },
    ],
  },
  {
    slug: "b1-error-hunt-connectors",
    level: "IT-B1",
    number: 8,
    title: "Error Hunt: Connectors",
    summary: "Fix infatti used for on the contrary, però ma, invece di che, and eventualmente used for eventually.",
    duration: "17 min",
    sections: [
      {
        heading: "Infatti or anzi?",
        body: [
          "Each sentence below was written by a learner and has one mistake. \"Non è stanco, infatti è pieno di energia\" copies English in fact. Here the second part goes against the negative, so Italian needs \"anzi\": \"Non è stanco, anzi, è pieno di energia\".",
          "\"Infatti\" only confirms: \"È stanco, infatti è andato a letto\".",
        ],
        examples: [
          { es: "Non è stanco, anzi, è pieno di energia.", en: "He's not tired; in fact, he's full of energy." },
          { es: "È stanco, infatti è andato a letto.", en: "He's tired; that's why he's gone to bed." },
          { es: "Non mi annoio, anzi, mi diverto molto.", en: "I'm not bored; on the contrary, I'm having lots of fun." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Non è stanco, infatti è pieno di energia\". Write it correctly: He's not tired; in fact, he's full of energy.", source: "He's not tired; in fact, he's full of energy.", answer: "Non è stanco, anzi, è pieno di energia.", altAnswers: ["Non è stanco, anzi è pieno di energia.", "Non è stanco, anzi, è pieno d'energia."], explanation: "Going against a negative: \"anzi\"." },
          { type: "multiple-choice", question: "Which has no mistake?", options: ["Non mi annoio, anzi, mi diverto molto.", "Non mi annoio, infatti mi diverto molto.", "Non mi annoio, quindi anzi mi diverto.", "Non mi annoio, invece di mi diverto."], correctIndex: 0, explanation: "\"Anzi\"." },
        ],
      },
      {
        heading: "Però ma, invece di che",
        body: [
          "\"Però ma\" doubles the but: choose one. \"È bello, però ma costa troppo\" → \"È bello, però costa troppo\" or \"È bello, ma costa troppo\". Also avoid \"ma però\" in writing; in speech it's common but considered sloppy.",
          "\"Invece di che\" mixes two structures. Use \"invece di\" + infinitive or noun (\"invece di uscire\"), or \"invece che\" + noun or adjective (\"invece che in treno, in macchina\").",
        ],
        examples: [
          { es: "È bello, però costa troppo.", en: "It's nice, but it costs too much." },
          { es: "Invece di uscire, siamo rimasti a casa.", en: "Instead of going out, we stayed at home." },
          { es: "Siamo andati in macchina invece che in treno.", en: "We went by car instead of by train." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Invece di che uscire, siamo rimasti a casa\". Write it correctly: Instead of going out, we stayed at home.", source: "Instead of going out, we stayed at home.", answer: "Invece di uscire, siamo rimasti a casa.", altAnswers: ["Invece di uscire siamo rimasti a casa.", "Invece di uscire, siamo restati a casa.", "Invece di uscire, siamo rimaste a casa."], explanation: "\"Invece di\" + infinitive." },
          { type: "fill-blank", prompt: "A learner wrote \"È bello, però ma costa troppo\". Write the Italian for the bold words.", en: "It's nice, [but] it costs too much.", sentence: "È bello, ___ costa troppo.", answer: "però", altAnswers: ["ma"], explanation: "One connector only." },
          { type: "listen-choose", audio: "Siamo andati in macchina invece che in treno.", question: "How did they travel?", options: ["By car", "By train", "By car and train", "On foot"], correctIndex: 0, explanation: "\"Invece che in treno\" = instead of by train." },
        ],
      },
      {
        heading: "Eventualmente is not eventually",
        body: [
          "\"Eventualmente\" means possibly, if necessary: \"Eventualmente ti chiamo\" (I'll call you if need be). English eventually (in the end) is \"alla fine\" or \"prima o poi\" (sooner or later): \"Alla fine ha accettato\".",
          "Another false friend: \"attualmente\" means currently, not actually (\"in realtà\").",
        ],
        examples: [
          { es: "Alla fine ha accettato.", en: "Eventually, she accepted." },
          { es: "Eventualmente ti chiamo.", en: "I'll call you if need be." },
          { es: "Attualmente vivo a Torino.", en: "I currently live in Turin." },
          { es: "In realtà non mi piace.", en: "Actually, I don't like it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Eventualmente ha accettato\". Write it correctly: Eventually, she accepted.", source: "Eventually, she accepted.", answer: "Alla fine ha accettato.", altAnswers: ["Alla fine, ha accettato.", "Alla fine lei ha accettato."], explanation: "Eventually = \"alla fine\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Non è caro, infatti è economico\". Write it correctly: It's not expensive; on the contrary, it's cheap.", source: "It's not expensive; on the contrary, it's cheap.", answer: "Non è caro, anzi, è economico.", altAnswers: ["Non è caro, anzi è economico."], explanation: "\"Anzi\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Eventualmente troverai lavoro\". Write it correctly: Eventually you'll find a job.", source: "Eventually you'll find a job. (to a friend)", answer: "Alla fine troverai lavoro.", altAnswers: ["Prima o poi troverai lavoro.", "Alla fine troverai un lavoro.", "Prima o poi troverai un lavoro."], explanation: "\"Alla fine\" / \"prima o poi\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Attualmente non mi piace\" meaning actually. Write it correctly: Actually, I don't like it.", source: "Actually, I don't like it.", answer: "In realtà non mi piace.", altAnswers: ["In realtà, non mi piace.", "A dire la verità, non mi piace."], explanation: "Actually = \"in realtà\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"È simpatico, però ma è pigro\". Write it correctly: He's nice, but he's lazy.", source: "He's nice, but he's lazy.", answer: "È simpatico, però è pigro.", altAnswers: ["È simpatico, ma è pigro.", "È simpatico ma pigro."], explanation: "One connector." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Invece di che il tè, prendo un caffè\". Write it correctly: Instead of tea, I'll have a coffee.", source: "Instead of tea, I'll have a coffee.", answer: "Invece del tè, prendo un caffè.", altAnswers: ["Invece del tè prendo un caffè.", "Invece che il tè, prendo un caffè."], explanation: "\"Invece di\" + \"il\" = \"invece del\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Siccome era tardi, quindi sono andato via\". Write it correctly: As it was late, I left.", source: "As it was late, I left.", answer: "Siccome era tardi, sono andato via.", altAnswers: ["Siccome era tardi, sono andata via.", "Siccome era tardi, me ne sono andato.", "Siccome era tardi, me ne sono andata."], explanation: "No \"quindi\" after \"siccome\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Eventualmente, ci siamo sposati\". Write the Italian for the bold words.", en: "[Eventually], we got married.", sentence: "___, ci siamo sposati.", answer: "Alla fine", explanation: "Eventually = \"alla fine\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Mi aspettavo pioggia, infatti c'era il sole\". Write the Italian for the bold words.", en: "I expected rain, [but in fact] it was sunny.", sentence: "Mi aspettavo pioggia, ___ c'era il sole.", answer: "invece", explanation: "Against expectation: \"invece\"." },
      { type: "word-order", prompt: "Put the words in order to say: If need be, we'll take a taxi.", words: ["Eventualmente", "prendiamo", "un", "taxi."], translation: "If need be, we'll take a taxi.", explanation: "\"Eventualmente\" = if need be." },
      { type: "multiple-choice", question: "Which has no mistake?", options: ["Attualmente lavoro in una banca.", "Attualmente non è vero: è falso.", "Eventualmente ci siamo sposati.", "Però ma è bello."], correctIndex: 0, explanation: "\"Attualmente\" = currently." },
      { type: "multiple-choice", question: "Which has no mistake?", options: ["Ha piovuto, eppure siamo usciti.", "Ha piovuto, eppure ma siamo usciti.", "Ha piovuto, infatti siamo usciti lo stesso.", "Ha piovuto, invece di che siamo usciti."], correctIndex: 0, explanation: "\"Eppure\" = and yet." },
      { type: "dictation", audio: "Prima o poi troverai la persona giusta.", explanation: "\"Prima o poi\" = sooner or later." },
      { type: "speak", text: "Non sono deluso, anzi! Alla fine è andato tutto bene.", prompt: "Say it in Italian: I'm not disappointed, quite the opposite! Eventually, everything went well.", tip: "\"Anzi!\" on its own: short and lively.", explanation: "\"Anzi\", \"alla fine\"." },
    ],
  },
  {
    slug: "b1-reading-lab-argument",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: Pros and Cons",
    summary: "Read a short argumentative text about working from home and identify the connectors: innanzitutto, inoltre, d'altra parte, tuttavia, quindi, insomma.",
    duration: "18 min",
    sections: [
      {
        heading: "The pros",
        body: [
          "Read the first paragraph of a newspaper opinion piece, \"Lavorare da casa: un sogno?\": \"Innanzitutto, chi lavora da casa risparmia tempo: niente traffico, niente treni in ritardo. Inoltre, si spende meno per i trasporti e per il pranzo. Non solo: molte persone dicono di concentrarsi meglio, anzi, di lavorare di più\".",
        ],
        examples: [
          { es: "Innanzitutto, chi lavora da casa risparmia tempo.", en: "First of all, people who work from home save time." },
          { es: "Inoltre, si spende meno per i trasporti.", en: "Moreover, you spend less on transport." },
          { es: "Molte persone dicono di concentrarsi meglio, anzi, di lavorare di più.", en: "Many people say they concentrate better; in fact, they work more." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, people who work from home save time.", answer: "Innanzitutto, chi lavora da casa risparmia tempo.", altAnswers: ["Prima di tutto, chi lavora da casa risparmia tempo.", "Innanzitutto chi lavora da casa risparmia tempo."], explanation: "\"Innanzitutto\" + \"chi\" (Unit 22)." },
          { type: "multiple-choice", question: "Which is NOT one of the advantages?", options: ["Meeting colleagues", "Saving time", "Spending less on transport", "Concentrating better"], correctIndex: 0, explanation: "Colleagues come up in the cons." },
        ],
      },
      {
        heading: "The cons",
        body: [
          "The second paragraph: \"D'altra parte, il lavoro da casa ha anche dei limiti. Prima di tutto, ci si sente soli: mancano i colleghi, il caffè insieme, le chiacchiere. Tuttavia, il problema più grande è un altro: è difficile staccare, cioè smettere di lavorare la sera. Infatti, molti rispondono alle email anche alle dieci\".",
        ],
        examples: [
          { es: "D'altra parte, il lavoro da casa ha anche dei limiti.", en: "On the other hand, working from home also has its limits." },
          { es: "Ci si sente soli: mancano i colleghi.", en: "You feel lonely: you miss your colleagues." },
          { es: "È difficile staccare, cioè smettere di lavorare la sera.", en: "It's hard to switch off, that is, to stop working in the evening." },
          { es: "Infatti, molti rispondono alle email anche alle dieci.", en: "Indeed, many answer emails even at ten." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's hard to switch off, that is, to stop working in the evening.", answer: "È difficile staccare, cioè smettere di lavorare la sera.", altAnswers: ["È difficile staccare, cioè smettere di lavorare di sera."], explanation: "\"Cioè\" explains \"staccare\"." },
          { type: "listen-choose", audio: "Infatti, molti rispondono alle email anche alle dieci.", question: "What does this example show?", options: ["People find it hard to stop working.", "People start work at ten.", "People don't answer emails.", "People prefer the office."], correctIndex: 0, explanation: "\"Infatti\" confirms the point about switching off." },
        ],
      },
      {
        heading: "The conclusion",
        body: [
          "The last paragraph: \"Insomma, lavorare da casa non è né un sogno né un incubo. La soluzione migliore? Forse un po' e un po': due giorni a casa e tre in ufficio. Quindi, più che scegliere, bisogna trovare un equilibrio\".",
          "\"Né ... né\" = neither ... nor. \"Un po' e un po'\" = a bit of both.",
        ],
        examples: [
          { es: "Non è né un sogno né un incubo.", en: "It's neither a dream nor a nightmare." },
          { es: "Forse un po' e un po'.", en: "Maybe a bit of both." },
          { es: "Quindi, più che scegliere, bisogna trovare un equilibrio.", en: "So, rather than choosing, you need to find a balance." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's neither a dream nor a nightmare.", answer: "Non è né un sogno né un incubo.", explanation: "\"Né ... né\" with \"non\"." },
          { type: "multiple-choice", question: "What does the writer suggest?", options: ["A mix of home and office", "Always working from home", "Always working in the office", "Changing jobs"], correctIndex: 0, explanation: "\"Due giorni a casa e tre in ufficio\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Moreover, you spend less on transport.", answer: "Inoltre, si spende meno per i trasporti.", altAnswers: ["Inoltre si spende meno per i trasporti.", "Inoltre, si spende meno per il trasporto."], explanation: "\"Inoltre\" + impersonal \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the other hand, working from home also has its limits.", answer: "D'altra parte, il lavoro da casa ha anche dei limiti.", altAnswers: ["D'altra parte, lavorare da casa ha anche dei limiti.", "D'altra parte il lavoro da casa ha anche dei limiti."], explanation: "\"D'altra parte\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You feel lonely: you miss your colleagues.", answer: "Ci si sente soli: mancano i colleghi.", altAnswers: ["Ci si sente soli: mancano i colleghi di lavoro."], explanation: "\"Ci si sente\" + plural adjective (Unit 21)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "So, rather than choosing, you need to find a balance.", answer: "Quindi, più che scegliere, bisogna trovare un equilibrio.", altAnswers: ["Quindi, invece di scegliere, bisogna trovare un equilibrio."], explanation: "\"Quindi\" concludes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe a bit of both.", answer: "Forse un po' e un po'.", altAnswers: ["Forse un po' tutte e due.", "Forse un po' dell'uno e un po' dell'altro."], explanation: "Fixed phrase." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[However], the biggest problem is another one.", sentence: "___, il problema più grande è un altro.", answer: "Tuttavia", altAnswers: ["Però", "Comunque"], explanation: "Formal contrast." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They concentrate better; [in fact], they work more.", sentence: "Si concentrano meglio, ___, lavorano di più.", answer: "anzi", explanation: "Going further: \"anzi\"." },
      { type: "word-order", prompt: "Put the words in order to say: In short, it's neither a dream nor a nightmare.", words: ["Insomma,", "non", "è", "né", "un", "sogno", "né", "un", "incubo."], translation: "In short, it's neither a dream nor a nightmare.", explanation: "\"Insomma\" + \"né ... né\"." },
      { type: "matching", instructions: "Match each connector from the text to its job.", pairs: [{ left: "innanzitutto", right: "opens the first point" }, { left: "d'altra parte", right: "introduces the other side" }, { left: "cioè", right: "explains a word" }, { left: "infatti", right: "gives evidence" }, { left: "insomma", right: "sums up" }], explanation: "The skeleton of an argument." },
      { type: "multiple-choice", question: "According to the writer, what's the biggest problem?", options: ["Switching off in the evening", "Loneliness", "The cost of transport", "Slow internet"], correctIndex: 0, explanation: "\"Tuttavia, il problema più grande è ... staccare\"." },
      { type: "listen-choose", audio: "Insomma, lavorare da casa non è né un sogno né un incubo.", question: "What's the writer's overall view?", options: ["Balanced", "Very positive", "Very negative", "Undecided"], correctIndex: 0, explanation: "Neither a dream nor a nightmare." },
      { type: "dictation", audio: "D'altra parte, ci si sente soli e mancano i colleghi.", explanation: "\"D'altra parte\", \"ci si sente\"." },
      { type: "speak", text: "Innanzitutto si risparmia tempo; d'altra parte, però, ci si sente soli. Insomma, ci vuole un equilibrio.", prompt: "Say it in Italian: First of all, you save time; on the other hand, though, you feel lonely. In short, you need a balance.", tip: "Slow down on each connector: they carry the argument.", explanation: "Opening, contrast, conclusion." },
    ],
  },
  {
    slug: "b1-mission-short-essay",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Short Opinion Piece",
    summary: "Write about 150 words on city life versus country life, organized with connectors: innanzitutto, inoltre, d'altra parte, eppure, insomma.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Plan your piece",
        body: [
          "Your mission: an Italian student magazine asks: \"Meglio la città o la campagna?\" Write about 150 words. Plan four short paragraphs: open with your view (\"Secondo me ...\", \"Innanzitutto ...\"), give reasons (\"inoltre\", \"non solo ... ma anche\"), show the other side (\"d'altra parte\", \"tuttavia\"), and close (\"insomma\", \"quindi\").",
        ],
        examples: [
          { es: "Secondo me, è meglio vivere in città.", en: "In my opinion, it's better to live in the city." },
          { es: "Innanzitutto, ci sono più opportunità di lavoro.", en: "First of all, there are more job opportunities." },
          { es: "Inoltre, non serve la macchina.", en: "Moreover, you don't need a car." },
          { es: "D'altra parte, in campagna l'aria è più pulita.", en: "On the other hand, in the country the air is cleaner." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First of all, there are more job opportunities.", answer: "Innanzitutto, ci sono più opportunità di lavoro.", altAnswers: ["Prima di tutto, ci sono più opportunità di lavoro.", "Innanzitutto ci sono più opportunità di lavoro."], explanation: "\"Innanzitutto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the other hand, in the country the air is cleaner.", answer: "D'altra parte, in campagna l'aria è più pulita.", altAnswers: ["D'altra parte, l'aria in campagna è più pulita."], explanation: "\"D'altra parte\"." },
        ],
      },
      {
        heading: "Make it flow",
        body: [
          "Add a surprise with \"eppure\" and a correction with \"anzi\": \"In città c'è tutto, eppure molti si sentono soli\", \"Non odio la campagna, anzi, ci vado ogni weekend\". Then close: \"Insomma, la città per lavorare, la campagna per riposare\".",
        ],
        examples: [
          { es: "In città c'è tutto, eppure molti si sentono soli.", en: "The city has everything, and yet many people feel lonely." },
          { es: "Non odio la campagna, anzi, ci vado ogni weekend.", en: "I don't hate the country; on the contrary, I go every weekend." },
          { es: "Insomma, la città per lavorare, la campagna per riposare.", en: "In short: the city for work, the country for rest." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city has everything, and yet many people feel lonely.", answer: "In città c'è tutto, eppure molti si sentono soli.", altAnswers: ["In città c'è tutto, eppure tante persone si sentono sole.", "In città c'è tutto, eppure molte persone si sentono sole."], explanation: "\"Eppure\"." },
          { type: "listen-choose", audio: "Non odio la campagna, anzi, ci vado ogni weekend.", question: "How does the writer feel about the country?", options: ["They like it.", "They hate it.", "They've never been.", "They're moving there."], correctIndex: 0, explanation: "\"Anzi\" = on the contrary." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion, it's better to live in the city.", answer: "Secondo me, è meglio vivere in città.", altAnswers: ["Secondo me è meglio vivere in città.", "Per me, è meglio vivere in città."], explanation: "Opening view." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Moreover, you don't need a car.", answer: "Inoltre, non serve la macchina.", altAnswers: ["Inoltre, non c'è bisogno della macchina.", "Inoltre non serve la macchina."], explanation: "\"Inoltre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In short: the city for work, the country for rest.", answer: "Insomma, la città per lavorare, la campagna per riposare.", altAnswers: ["Insomma: la città per lavorare, la campagna per riposare."], explanation: "\"Insomma\" + \"per\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Life in the country is not only quieter but also cheaper.", answer: "La vita in campagna non solo è più tranquilla, ma anche più economica.", altAnswers: ["La vita in campagna è non solo più tranquilla, ma anche più economica.", "In campagna la vita non solo è più tranquilla, ma anche più economica."], explanation: "\"Non solo ... ma anche\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't hate the country; [on the contrary], I go every weekend.", sentence: "Non odio la campagna, ___, ci vado ogni weekend.", answer: "anzi", explanation: "\"Anzi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's lots to do. [However], it's noisy.", sentence: "C'è tanto da fare. ___, è rumorosa.", answer: "Tuttavia", altAnswers: ["Però", "D'altra parte"], explanation: "Contrast." },
      { type: "word-order", prompt: "Put the words in order to say: So I prefer the city.", words: ["Quindi", "preferisco", "la", "città."], translation: "So I prefer the city.", explanation: "\"Quindi\" closes the argument." },
      { type: "multiple-choice", question: "Which is the best closing sentence?", options: ["Insomma, ognuno deve scegliere ciò che è giusto per sé.", "Innanzitutto, la città è grande.", "Inoltre, c'è il traffico.", "D'altra parte, ci sono i negozi."], correctIndex: 0, explanation: "\"Insomma\" sums up." },
      { type: "dictation", audio: "Secondo me la città è più comoda, eppure sogno la campagna.", explanation: "\"Eppure\"." },
      { type: "speak", text: "Innanzitutto, in città ci sono più servizi; d'altra parte, in campagna si vive meglio. Insomma, dipende!", prompt: "Say it in Italian: First of all, there are more services in the city; on the other hand, life is better in the country. In short, it depends!", tip: "End on \"dipende!\" with a falling, smiling tone.", explanation: "Opening, contrast, conclusion." },
    ],
  },
];

export const IT_B1_U23_WRITING: WriteExercise = {
  type: "write",
  prompt: "An Italian student magazine asks its readers: \"Meglio la città o la campagna?\" Write a short opinion piece of about 150 words: give your view, at least two reasons, the other side of the argument, and a conclusion.",
  minWords: 120,
  maxWords: 180,
  rubric: [
    "Organizes the text with opening and closing connectors (innanzitutto, prima di tutto, insomma, in conclusione, quindi)",
    "Adds and contrasts ideas (inoltre, non solo ... ma anche, d'altra parte, tuttavia, però, eppure)",
    "Uses infatti, invece and anzi correctly (confirming, contradicting, going further)",
    "Avoids double connectors (però ma, siccome ... quindi) and false friends (eventualmente, attualmente)",
  ],
  modelAnswer: "Meglio la città o la campagna? Secondo me, per un giovane è meglio la città. Innanzitutto, ci sono più opportunità: non solo lavoro, ma anche corsi, concerti e musei. Inoltre, in città non serve la macchina, quindi si risparmia e si inquina meno. So bene quanto sia difficile muoversi senza auto: infatti sono cresciuto in un piccolo paese. D'altra parte, la città ha anche i suoi problemi. Gli affitti sono altissimi e c'è sempre traffico. Eppure, nonostante tutta quella gente, molti si sentono soli. In campagna, invece, ci si conosce tutti e la vita è più tranquilla. Non odio la campagna, anzi, ci torno volentieri ogni volta che posso. Insomma, la città è perfetta per studiare e lavorare, mentre la campagna è ideale per riposare. Forse un giorno, alla fine, tornerò a vivere nel mio paese.",
  explanation: "\"Innanzitutto\", \"inoltre\" and \"non solo ... ma anche\" build the reasons; \"quindi\" gives a result; \"infatti\" confirms with personal experience. \"D'altra parte\", \"eppure\", \"invece\" and \"mentre\" bring in the other side; \"anzi\" goes further after a negative. \"Insomma\" closes, and \"alla fine\" (not \"eventualmente\") means eventually.",
};
