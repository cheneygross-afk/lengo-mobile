// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u05-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 5 Extra Practice: The Imperfetto. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U05_EXTRA: Lesson[] = [
  {
    slug: "a2-imperfetto-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Imperfetto Forms",
    summary: "Fresh verbs in every person of the imperfetto.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "New verbs, same endings",
        body: [
          "\"-vo, -vi, -va, -vamo, -vate, -vano\" after the infinitive vowel. New verbs: \"nuotare\" (to swim), \"correre\", \"costruire\" (to build), \"raccontare\" (to tell a story), \"tenere\" (to keep, hold), \"piangere\" (to cry).",
        ],
        examples: [
          { es: "Il nonno raccontava sempre delle storie.", en: "Grandad always used to tell stories." },
          { es: "Costruivamo castelli di sabbia.", en: "We used to build sandcastles." },
          { es: "Il bambino piangeva.", en: "The baby was crying." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandad always used to tell stories.", answer: "Il nonno raccontava sempre delle storie.", altAnswers: ["Il nonno raccontava sempre storie.", "Il nonno ci raccontava sempre delle storie."], explanation: "\"Raccontava\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We used to build sandcastles.", answer: "Costruivamo castelli di sabbia.", altAnswers: ["Costruivamo dei castelli di sabbia.", "Noi costruivamo castelli di sabbia."], explanation: "\"Costruire\" → \"costruivamo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The baby was crying.", answer: "Il bambino piangeva.", altAnswers: ["Il bambino stava piangendo.", "La bambina piangeva."], explanation: "\"Piangeva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I used to swim every morning.", answer: "Nuotavo ogni mattina.", altAnswers: ["Nuotavo tutte le mattine.", "Io nuotavo ogni mattina."], explanation: "\"Nuotavo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You used to run fast. (to a friend)", answer: "Correvi veloce.", altAnswers: ["Tu correvi veloce.", "Correvi velocemente."], explanation: "\"Correvi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She used to keep the keys in her bag.", answer: "Teneva le chiavi nella borsa.", altAnswers: ["Lei teneva le chiavi nella borsa.", "Teneva le chiavi in borsa."], explanation: "\"Tenere\" → \"teneva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were travelling by train.", answer: "Viaggiavamo in treno.", altAnswers: ["Stavamo viaggiando in treno.", "Noi viaggiavamo in treno."], explanation: "\"Viaggiavamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you use to sing in a choir? (plural)", answer: "Cantavate in un coro?", altAnswers: ["Voi cantavate in un coro?"], explanation: "\"Cantavate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They used to open the shop at eight.", answer: "Aprivano il negozio alle otto.", altAnswers: ["Loro aprivano il negozio alle otto."], explanation: "\"Aprire\" → \"aprivano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was translating a letter.", answer: "Traducevo una lettera.", altAnswers: ["Stavo traducendo una lettera."], explanation: "\"Tradurre\" → \"traducevo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandmother [used to cook] for everyone.", sentence: "Mia nonna ___ per tutti.", answer: "cucinava", explanation: "\"Cucinava\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We used to have] a big dog.", sentence: "___ un cane grande.", answer: "Avevamo", altAnswers: ["Noi avevamo"], explanation: "\"Avevamo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Were you] at the party? (plural)", sentence: "___ alla festa?", answer: "Eravate", altAnswers: ["Voi eravate"], explanation: "\"Eravate\"." },
      { type: "multiple-choice", question: "They used to say. Which is right?", options: ["dicevano", "diravano", "divano", "dicevamo"], correctIndex: 0, explanation: "\"Dire\" → \"dicevano\"." },
      { type: "listen-choose", audio: "Costruivano una casa in campagna.", question: "What were they doing?", options: ["building a house in the countryside", "buying a house in the countryside", "living in the countryside", "selling a house"], correctIndex: 0, explanation: "\"Costruivano\" = they were building." },
      { type: "dictation", audio: "Il nonno raccontava storie e noi ridevamo.", explanation: "\"Raccontava\", \"ridevamo\"." },
      { type: "speak", text: "Nuotavamo, correvamo e costruivamo castelli di sabbia.", prompt: "Say it in Italian: We used to swim, run and build sandcastles.", tip: "-VA-mo every time.", explanation: "Three noi forms." },
    ],
  },
  {
    slug: "a2-imperfetto-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Habits and Descriptions",
    summary: "Childhood stories with habits and descriptions in the imperfetto.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "How it was, what we did",
        body: [
          "Descriptions (\"era\", \"aveva\", \"faceva\", \"c'era\") and habits (\"ogni\", \"sempre\", \"di solito\", \"il sabato\") both take the imperfetto.",
        ],
        examples: [
          { es: "La nostra scuola era vecchia e fredda.", en: "Our school was old and cold." },
          { es: "Ogni pomeriggio facevamo i compiti in cucina.", en: "Every afternoon we did our homework in the kitchen." },
          { es: "Il mio migliore amico si chiamava Davide.", en: "My best friend was called Davide." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Our school was old and cold.", answer: "La nostra scuola era vecchia e fredda.", explanation: "Description: \"era\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My best friend was called Davide.", answer: "Il mio migliore amico si chiamava Davide.", altAnswers: ["Il mio amico del cuore si chiamava Davide."], explanation: "\"Si chiamava\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every afternoon we did our homework in the kitchen.", answer: "Ogni pomeriggio facevamo i compiti in cucina.", altAnswers: ["Tutti i pomeriggi facevamo i compiti in cucina."], explanation: "Habit: \"facevamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My mother was a nurse.", answer: "Mia madre era infermiera.", altAnswers: ["Mia madre faceva l'infermiera."], explanation: "\"Era\" + profession, no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays we would visit our cousins.", answer: "La domenica andavamo a trovare i cugini.", altAnswers: ["La domenica andavamo dai cugini.", "La domenica visitavamo i cugini."], explanation: "\"Andare a trovare\" = to visit people." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher had a loud voice.", answer: "La maestra aveva una voce forte.", altAnswers: ["Il maestro aveva una voce forte."], explanation: "\"Aveva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't have much money.", answer: "Non avevamo molti soldi.", altAnswers: ["Non avevamo tanti soldi."], explanation: "\"Avevamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In winter it got dark early.", answer: "D'inverno faceva buio presto.", altAnswers: ["In inverno faceva buio presto."], explanation: "\"Fare buio\" = to get dark." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I always wanted a dog.", answer: "Volevo sempre un cane.", altAnswers: ["Ho sempre voluto un cane."], explanation: "A lasting wish: \"volevo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My brother [was] very shy.", sentence: "Mio fratello ___ molto timido.", answer: "era", explanation: "\"Era\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [usually went] to bed at nine.", sentence: "___ a letto alle nove.", answer: "Di solito andavamo", explanation: "\"Di solito\" + imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There was] a big tree in the garden.", sentence: "___ un grande albero in giardino.", answer: "C'era", explanation: "\"C'era\"." },
      { type: "word-order", prompt: "Put the words in order to say: My father always read the paper at breakfast.", words: ["Mio", "padre", "leggeva", "sempre", "il", "giornale", "a", "colazione."], translation: "My father always read the paper at breakfast.", explanation: "Habit: \"leggeva\"." },
      { type: "multiple-choice", question: "\"Da piccola avevo paura del buio.\" What does it mean?", options: ["As a child I was afraid of the dark.", "As a child I got lost in the dark.", "I was small and it was dark.", "When I'm little I'm afraid of the dark."], correctIndex: 0, explanation: "\"Avere paura di\" = to be afraid of." },
      { type: "listen-choose", audio: "Ogni estate andavamo in montagna dai nonni.", question: "Where did they go every summer?", options: ["to the mountains, to the grandparents'", "to the seaside, to the grandparents'", "to the mountains, on a school trip", "to the city, to the cousins'"], correctIndex: 0, explanation: "\"In montagna dai nonni\"." },
      { type: "dictation", audio: "La casa era piccola, ma eravamo felici.", explanation: "\"Era\", \"eravamo\"." },
      { type: "speak", text: "Da bambino ero timido, avevo pochi amici e leggevo tantissimo.", prompt: "Say it as a man: As a child I was shy, I had few friends and I read a lot.", tip: "\"Pochi amici\": plural, few.", explanation: "Description and habit." },
    ],
  },
  {
    slug: "a2-imperfetto-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Mentre",
    summary: "Background actions in progress with mentre and stavo + gerund.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two things at once",
        body: [
          "\"Mentre\" + imperfetto, then another imperfetto for something going on at the same time. \"Stavo\" + gerund stresses the moment.",
        ],
        examples: [
          { es: "Mentre io lavavo i piatti, lui asciugava.", en: "While I was washing the dishes, he was drying." },
          { es: "Mentre aspettavamo, chiacchieravamo.", en: "While we were waiting, we were chatting." },
          { es: "Alle dieci stavo ancora lavorando.", en: "At ten I was still working." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While we were waiting, we were chatting.", answer: "Mentre aspettavamo, chiacchieravamo.", altAnswers: ["Chiacchieravamo mentre aspettavamo."], explanation: "Two imperfetto verbs." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At ten I was still working.", answer: "Alle dieci stavo ancora lavorando.", altAnswers: ["Alle dieci lavoravo ancora."], explanation: "\"Ancora\" = still." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While I was washing the dishes, he was drying.", answer: "Mentre io lavavo i piatti, lui asciugava.", altAnswers: ["Mentre lavavo i piatti, lui asciugava."], explanation: "\"Lavavo\", \"asciugava\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While the children were sleeping, we were watching a film.", answer: "Mentre i bambini dormivano, guardavamo un film.", altAnswers: ["Guardavamo un film mentre i bambini dormivano."], explanation: "\"Mentre\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What were you doing at midnight? (to a friend)", answer: "Cosa facevi a mezzanotte?", altAnswers: ["Che cosa facevi a mezzanotte?", "Cosa stavi facendo a mezzanotte?"], explanation: "\"Facevi\" or \"stavi facendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was driving and listening to music.", answer: "Guidavo e ascoltavo la musica.", altAnswers: ["Stavo guidando e ascoltavo la musica.", "Guidavo e ascoltavo musica."], explanation: "Two ongoing actions." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "While Chiara was talking, Marco was looking at his phone.", answer: "Mentre Chiara parlava, Marco guardava il telefono.", altAnswers: ["Mentre Chiara parlava, Marco guardava il cellulare."], explanation: "\"Parlava\", \"guardava\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were having dinner.", answer: "Stavamo cenando.", altAnswers: ["Cenavamo.", "Stavamo mangiando."], explanation: "\"Cenare\" → \"cenando\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was snowing and the children were playing outside.", answer: "Nevicava e i bambini giocavano fuori.", altAnswers: ["Stava nevicando e i bambini giocavano fuori."], explanation: "\"Nevicava\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[While] she was studying, I was cooking.", sentence: "___ lei studiava, io cucinavo.", answer: "Mentre", explanation: "\"Mentre\" = while." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The students [were writing] in silence.", sentence: "Gli studenti ___ in silenzio.", answer: "scrivevano", altAnswers: ["stavano scrivendo"], explanation: "\"Scrivevano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I was looking for] my keys.", sentence: "___ le chiavi.", answer: "Cercavo", altAnswers: ["Stavo cercando", "Io cercavo"], explanation: "\"Cercare\" → \"cercando\" (no h)." },
      { type: "multiple-choice", question: "We were getting ready. Which is right?", options: ["Ci stavamo preparando.", "Stavamo ci preparando.", "Ci stavamo preparato.", "Stavamo preparandoci noi."], correctIndex: 0, explanation: "Pronoun before \"stavamo\"." },
      { type: "listen-choose", audio: "Mentre camminavo, pensavo a te.", question: "What does it mean?", options: ["While I was walking, I was thinking of you.", "When I walk, I think of you.", "I walked and then thought of you.", "While you were walking, I was thinking."], correctIndex: 0, explanation: "\"Camminavo\", \"pensavo\": I." },
      { type: "dictation", audio: "Mentre cucinavo, ascoltavo la radio.", explanation: "\"Mentre\" + imperfetto." },
      { type: "speak", text: "Mentre io studiavo, mio fratello suonava la chitarra e mia madre telefonava.", prompt: "Say it in Italian: While I was studying, my brother was playing the guitar and my mother was on the phone.", tip: "Three ongoing actions: three imperfetto verbs.", explanation: "\"Mentre\" + imperfetto." },
    ],
  },
];
