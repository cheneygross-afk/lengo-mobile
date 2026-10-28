// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u02.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 2: Past Tense with Essere. Essere verbs of movement and
// change, participle agreement with the subject, reflexives in the past,
// piacere in the past, hearing -o / -a / -i / -e endings.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U02: Lesson[] = [
  {
    slug: "a2-passato-prossimo-essere-1",
    level: "IT-A2",
    number: 1,
    title: "The Past with Essere, Part 1 of 2",
    summary: "Say where people went and when they arrived with essere + participle, and make the participle agree with the subject.",
    duration: "15 min",
    sections: [
      {
        heading: "Essere instead of avere",
        body: [
          "A group of verbs forms the passato prossimo with \"essere\", not \"avere\": mostly verbs of movement from one place to another, like \"andare\", \"venire\", \"arrivare\", \"partire\" (to leave), \"tornare\", \"entrare\", \"uscire\" (to go out). \"Sono andato a Roma\" is I went to Rome.",
          "English has nothing like this, so the trap is \"ho andato\". If the verb tells you that someone moved from A to B, think \"essere\". Irregular participles to know: \"venire\" → \"venuto\", \"uscire\" → \"uscito\".",
        ],
        examples: [
          { es: "Sono andato a Roma in treno.", en: "I went to Rome by train." },
          { es: "Sei venuto in macchina?", en: "Did you come by car?" },
          { es: "Il treno è arrivato in ritardo.", en: "The train arrived late." },
          { es: "Siamo partiti alle sei.", en: "We left at six." },
          { es: "Sono usciti ieri sera.", en: "They went out last night." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train arrived late.", answer: "Il treno è arrivato in ritardo.", explanation: "\"Arrivare\" takes \"essere\": \"è arrivato\"." },
          { type: "multiple-choice", question: "Marco went to the cinema. Which is right?", options: ["Marco è andato al cinema.", "Marco ha andato al cinema.", "Marco è andata al cinema.", "Marco ha andato a cinema."], correctIndex: 0, explanation: "Movement verb: \"essere\"; \"andato\" agrees with Marco." },
        ],
      },
      {
        heading: "The participle agrees with the subject",
        body: [
          "With \"essere\", the participle behaves like an adjective and agrees with the subject: \"-o\" for a man, \"-a\" for a woman, \"-i\" for a group of men or a mixed group, \"-e\" for a group of women. \"Marco è partito\", \"Giulia è partita\", \"Marco e Luca sono partiti\", \"Giulia e Sara sono partite\".",
          "For \"io\" and \"tu\", the ending depends on who is speaking or listening: a woman says \"Sono andata\", a man says \"Sono andato\". This is the opposite of avere verbs, where the participle never changes.",
        ],
        examples: [
          { es: "Giulia è tornata da Londra.", en: "Giulia came back from London." },
          { es: "Marco e Luca sono partiti per Bari.", en: "Marco and Luca left for Bari." },
          { es: "Le ragazze sono uscite presto.", en: "The girls went out early." },
          { es: "Sono arrivata ieri. (a woman speaking)", en: "I arrived yesterday." },
          { es: "Siete entrati dalla porta principale?", en: "Did you come in through the main door?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia came back from London.", answer: "Giulia è tornata da Londra.", explanation: "\"Tornata\" agrees with Giulia." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The girls [went out] early.", sentence: "Le ragazze ___ presto.", answer: "sono uscite", explanation: "Women only: \"-e\"." },
          { type: "listen-choose", audio: "Sono arrivata ieri.", question: "Who is speaking?", options: ["a woman", "a man", "a group of men", "a group of women"], correctIndex: 0, explanation: "\"Arrivata\" ends in -a: one woman." },
        ],
      },
      {
        heading: "Tu, Lei, voi",
        body: [
          "When you ask someone a question, match the participle to them: \"Sei andato?\" to a man, \"Sei andata?\" to a woman. With \"Lei\" the participle follows the real person: \"Signora, è arrivata bene?\".",
          "\"Voi\" and \"noi\" take \"-i\" unless everyone is female: \"Siete tornati?\", \"Siamo tornate\" (we women).",
        ],
        examples: [
          { es: "Sei andata al mercato?", en: "Did you go to the market? (to a woman)" },
          { es: "Signor Bianchi, è arrivato bene?", en: "Mr Bianchi, did you have a good journey?" },
          { es: "Siete tornati tardi?", en: "Did you get back late? (plural)" },
          { es: "Io e mia sorella siamo andate a Venezia.", en: "My sister and I went to Venice. (a woman speaking)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you go to the market? (to a woman you call tu)", answer: "Sei andata al mercato?", altAnswers: ["Tu sei andata al mercato?"], explanation: "\"Andata\": you're talking to a woman." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you have a good journey, Mr Bianchi?", answer: "È arrivato bene, signor Bianchi?", altAnswers: ["Signor Bianchi, è arrivato bene?", "Lei è arrivato bene, signor Bianchi?"], explanation: "\"Arrivato bene\" = had a good journey; \"Lei\" with a man: -o." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I went to Rome by train. (a man speaking)", answer: "Sono andato a Roma in treno.", altAnswers: ["Io sono andato a Roma in treno."], explanation: "\"Andare\" takes \"essere\"; -o for a man." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We left at six.", answer: "Siamo partiti alle sei.", altAnswers: ["Siamo partite alle sei.", "Noi siamo partiti alle sei.", "Noi siamo partite alle sei."], explanation: "\"-i\" for a mixed or male group, \"-e\" for women only." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco and Luca left for Bari.", answer: "Marco e Luca sono partiti per Bari.", explanation: "\"Partire per\" + destination." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you come by car? (to a man you call tu)", answer: "Sei venuto in macchina?", altAnswers: ["Tu sei venuto in macchina?"], explanation: "\"Venire\" → \"venuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chiara came home at midnight.", answer: "Chiara è tornata a casa a mezzanotte.", explanation: "\"Tornata\" agrees with Chiara." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you get back late? (plural)", answer: "Siete tornati tardi?", altAnswers: ["Siete tornate tardi?", "Voi siete tornati tardi?"], explanation: "\"Siete\" + \"-i\" (or \"-e\" to women)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My parents [came in] without a word.", sentence: "I miei genitori ___ senza una parola.", answer: "sono entrati", explanation: "\"Entrare\" takes \"essere\"; mixed couple: -i." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sofia [went out] with her friends.", sentence: "Sofia ___ con le sue amiche.", answer: "è uscita", explanation: "\"Uscire\" → \"uscito\"; -a for Sofia." },
      { type: "word-order", prompt: "Put the words in order to say: Giulia and Sara arrived in Naples yesterday.", words: ["Giulia", "e", "Sara", "sono", "arrivate", "a", "Napoli", "ieri."], translation: "Giulia and Sara arrived in Naples yesterday.", altOrders: [["Ieri", "Giulia", "e", "Sara", "sono", "arrivate", "a", "Napoli."]], explanation: "Two women: \"arrivate\"." },
      { type: "matching", instructions: "Match the subject to the right participle.", pairs: [{ left: "Marco è", right: "partito" }, { left: "Anna è", right: "partita" }, { left: "Marco e Anna sono", right: "partiti" }, { left: "Anna e Sara sono", right: "partite" }], explanation: "-o, -a, -i, -e, like an adjective." },
      { type: "dictation", audio: "Siamo partiti presto e siamo arrivati a Bologna alle dieci.", explanation: "Two essere verbs, both \"-i\"." },
      { type: "speak", text: "Sabato sono andata a Firenze, sono arrivata alle nove e sono tornata la sera.", prompt: "Say it as a woman: On Saturday I went to Florence, arrived at nine and came back in the evening.", tip: "End every participle in -a: andata, arrivata, tornata.", explanation: "Three essere verbs agreeing with a woman." },
    ],
  },
  {
    slug: "a2-passato-prossimo-essere-2",
    level: "IT-A2",
    number: 2,
    title: "The Past with Essere, Part 2 of 2",
    summary: "Add the verbs of change and staying: nascere, morire, diventare, restare, stare and essere itself (sono stato).",
    duration: "15 min",
    sections: [
      {
        heading: "Born, died, became",
        body: [
          "The second group of essere verbs is about a change of state: \"nascere\" (to be born) → \"sono nato\", \"morire\" → \"è morto\", \"diventare\" (to become) → \"è diventata\". Others: \"crescere\" (to grow up) → \"cresciuto\", \"cambiare\" when nothing is changed by someone: \"la città è cambiata\".",
          "English says I was born, as if it were passive; Italian says \"sono nato\" or \"sono nata\". Use it for your own birth: \"Sono nata a Cagliari nel 1990\".",
        ],
        examples: [
          { es: "Sono nato a Torino nel 1985.", en: "I was born in Turin in 1985." },
          { es: "Mia nonna è nata a Palermo.", en: "My grandmother was born in Palermo." },
          { es: "Leonardo è morto in Francia.", en: "Leonardo died in France." },
          { es: "Chiara è diventata medico.", en: "Chiara became a doctor." },
          { es: "I bambini sono cresciuti tanto!", en: "The children have grown up so much!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother was born in Palermo.", answer: "Mia nonna è nata a Palermo.", explanation: "\"Nascere\" → \"nata\"; no passive in Italian." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chiara became a doctor.", answer: "Chiara è diventata medico.", altAnswers: ["Chiara è diventata un medico.", "Chiara è diventata dottoressa."], explanation: "\"Diventare\" takes \"essere\"; no article before a profession." },
        ],
      },
      {
        heading: "Stayed and was: restare, stare, essere",
        body: [
          "Staying put also takes \"essere\": \"restare\" or \"rimanere\" (to stay, remain) → \"sono restato\", \"sono rimasto\". \"Stare\" and \"essere\" share one participle, \"stato\": \"Sono stato a Napoli\" means I've been to Naples or I was in Naples.",
          "So \"stato\" agrees too: \"Giulia è stata malata\" (Giulia was ill), \"Siete mai stati a Venezia?\". Never say \"ho stato\": \"essere\" uses itself as its auxiliary.",
        ],
        examples: [
          { es: "Sono stato a Napoli tre volte.", en: "I've been to Naples three times." },
          { es: "Giulia è stata malata.", en: "Giulia was ill." },
          { es: "Siamo rimasti a casa tutto il giorno.", en: "We stayed at home all day." },
          { es: "Sei stata bene in vacanza?", en: "Did you have a good time on holiday? (to a woman)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We stayed at home all day.", answer: "Siamo rimasti a casa tutto il giorno.", altAnswers: ["Siamo restati a casa tutto il giorno.", "Siamo rimaste a casa tutto il giorno.", "Siamo restate a casa tutto il giorno.", "Siamo stati a casa tutto il giorno.", "Siamo state a casa tutto il giorno."], explanation: "\"Rimanere\" → \"rimasto\"; essere + agreement." },
          { type: "listen-choose", audio: "Giulia è stata malata.", question: "What does it mean?", options: ["Giulia was ill.", "Giulia is ill.", "Giulia stayed at home.", "Giulia was in Milan."], correctIndex: 0, explanation: "\"È stata\": the past of \"essere\"." },
        ],
      },
      {
        heading: "Mixed groups take -i",
        body: [
          "When the subject is a mix of men and women, the participle takes \"-i\", even if there is only one man: \"Anna, Sara, Giulia e Marco sono partiti\". Only an all-female group takes \"-e\".",
          "The same rule covers adjectives, so you already know it: \"Sono stanchi\" for a mixed group.",
        ],
        examples: [
          { es: "Mio fratello e mia sorella sono nati a Bari.", en: "My brother and sister were born in Bari." },
          { es: "Le mie amiche sono rimaste a Roma.", en: "My friends (all women) stayed in Rome." },
          { es: "I miei genitori sono stati in Puglia.", en: "My parents have been to Puglia." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My brother and sister [were born] in Bari.", sentence: "Mio fratello e mia sorella ___ a Bari.", answer: "sono nati", explanation: "Mixed pair: \"-i\"." },
          { type: "multiple-choice", question: "Anna, Sara and Luca have stayed in Rome. Which is right?", options: ["Anna, Sara e Luca sono rimasti a Roma.", "Anna, Sara e Luca sono rimaste a Roma.", "Anna, Sara e Luca hanno rimasto a Roma.", "Anna, Sara e Luca sono rimasto a Roma."], correctIndex: 0, explanation: "One man in the group is enough for \"-i\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was born in Turin in 1985. (a man speaking)", answer: "Sono nato a Torino nel 1985.", altAnswers: ["Io sono nato a Torino nel 1985."], explanation: "\"Nel\" + year." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been to Naples three times.", answer: "Sono stato a Napoli tre volte.", altAnswers: ["Sono stata a Napoli tre volte.", "Io sono stato a Napoli tre volte.", "Io sono stata a Napoli tre volte."], explanation: "\"Essere\" → \"sono stato / stata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children have grown up so much!", answer: "I bambini sono cresciuti tanto!", altAnswers: ["I bambini sono cresciuti molto!", "I ragazzi sono cresciuti tanto!"], explanation: "\"Crescere\" → \"cresciuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents have been to Puglia.", answer: "I miei genitori sono stati in Puglia.", explanation: "\"In\" + region; mixed couple: \"stati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city has changed a lot.", answer: "La città è cambiata molto.", altAnswers: ["La città è cambiata tanto."], explanation: "Nobody changes it: \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you have a good time on holiday? (to a woman you call tu)", answer: "Sei stata bene in vacanza?", altAnswers: ["Tu sei stata bene in vacanza?", "Sei stata bene in ferie?"], explanation: "\"Stare bene\" in the past: \"sei stata bene\", agreeing with a woman." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Leonardo [died] in France.", sentence: "Leonardo ___ in Francia.", answer: "è morto", explanation: "\"Morire\" → \"morto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My friends (all women) [stayed] in Rome.", sentence: "Le mie amiche ___ a Roma.", answer: "sono rimaste", altAnswers: ["sono restate", "sono state"], explanation: "All women: \"-e\"." },
      { type: "word-order", prompt: "Put the words in order to say: Giulia was ill last week.", words: ["Giulia", "è", "stata", "malata", "la", "settimana", "scorsa."], translation: "Giulia was ill last week.", altOrders: [["La", "settimana", "scorsa", "Giulia", "è", "stata", "malata."]], explanation: "\"È stata\" + \"malata\": both agree." },
      { type: "multiple-choice", question: "I was in Milan yesterday (a man speaking). Which is right?", options: ["Ieri sono stato a Milano.", "Ieri ho stato a Milano.", "Ieri sono stata a Milano.", "Ieri ho essuto a Milano."], correctIndex: 0, explanation: "\"Essere\" takes \"essere\": \"sono stato\"." },
      { type: "dictation", audio: "Mia madre è nata a Cagliari ed è diventata insegnante.", explanation: "\"Ed\" before a vowel; \"nata\", \"diventata\"." },
      { type: "speak", text: "Sono nato a Bologna, sono cresciuto a Milano e sono stato due anni a Londra.", prompt: "Say it in Italian (as a man): I was born in Bologna, grew up in Milan and spent two years in London.", tip: "cre-SCIU-to: the sc before i is soft, like sh.", explanation: "\"Nato\", \"cresciuto\", \"stato\"." },
    ],
  },
  {
    slug: "a2-reflexives-in-the-past",
    level: "IT-A2",
    number: 3,
    title: "Reflexive Verbs in the Past",
    summary: "Put reflexive verbs into the passato prossimo with essere: mi sono alzato, ti sei divertita?, ci siamo conosciuti.",
    duration: "15 min",
    sections: [
      {
        heading: "Mi sono alzato",
        body: [
          "Reflexive verbs always take \"essere\" in the passato prossimo. The pronoun comes first, then \"essere\", then the participle: \"mi sono alzato\", \"ti sei svegliata\", \"si è vestito\", \"ci siamo riposati\", \"vi siete divertiti\", \"si sono addormentati\".",
          "The trap for English speakers is \"mi ho alzato\": the pronoun doesn't change the rule. Reflexive = essere, every time.",
        ],
        examples: [
          { es: "Stamattina mi sono alzato alle sei.", en: "This morning I got up at six." },
          { es: "Ti sei svegliata tardi?", en: "Did you wake up late? (to a woman)" },
          { es: "Luca si è vestito in fretta.", en: "Luca got dressed in a hurry." },
          { es: "Ci siamo riposati in giardino.", en: "We rested in the garden." },
          { es: "I bambini si sono addormentati subito.", en: "The children fell asleep straight away." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This morning I got up at six. (a man speaking)", answer: "Stamattina mi sono alzato alle sei.", altAnswers: ["Mi sono alzato alle sei stamattina.", "Questa mattina mi sono alzato alle sei."], explanation: "Pronoun + \"sono\" + \"alzato\"." },
          { type: "multiple-choice", question: "Luca got dressed in a hurry. Which is right?", options: ["Luca si è vestito in fretta.", "Luca si ha vestito in fretta.", "Luca è si vestito in fretta.", "Luca si è vestita in fretta."], correctIndex: 0, explanation: "\"Si\" + \"è\" + participle agreeing with Luca." },
        ],
      },
      {
        heading: "Agreement and life events",
        body: [
          "The participle agrees with the subject, as with every essere verb: \"Giulia si è sposata\", \"Marco e Giulia si sono sposati\". Several life events are reflexive: \"sposarsi\" (to get married), \"trasferirsi\" (to move to another city), \"laurearsi\" (to graduate), \"innamorarsi\" (to fall in love).",
          "\"Ci siamo conosciuti\" means we met (for the first time): the reflexive here means each other. \"Divertirsi\" (to have fun) is the usual way to ask about a party: \"Ti sei divertito?\".",
        ],
        examples: [
          { es: "Mia cugina si è sposata a giugno.", en: "My cousin got married in June." },
          { es: "Vi siete trasferiti a Bologna?", en: "Did you move to Bologna? (plural)" },
          { es: "Ci siamo conosciuti all'università.", en: "We met at university." },
          { es: "Ti sei divertito alla festa?", en: "Did you have fun at the party?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We met at university.", answer: "Ci siamo conosciuti all'università.", altAnswers: ["Ci siamo conosciute all'università.", "Noi ci siamo conosciuti all'università."], explanation: "\"Conoscersi\" = to meet each other." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you have fun at the party? (to a man you call tu)", answer: "Ti sei divertito alla festa?", altAnswers: ["Tu ti sei divertito alla festa?"], explanation: "\"Divertirsi\" → \"ti sei divertito\"." },
          { type: "listen-choose", audio: "Mia cugina si è sposata a giugno.", question: "What happened in June?", options: ["My cousin got married.", "My cousin moved house.", "My cousin graduated.", "My cousin was born."], correctIndex: 0, explanation: "\"Sposarsi\" = to get married." },
        ],
      },
      {
        heading: "Preview: si sono lavate le mani",
        body: [
          "With a body part, Italian uses the reflexive and the article, not a possessive: \"Mi sono lavato le mani\" (I washed my hands). You'll mostly hear the participle agree with the subject here; that is what we use.",
        ],
        examples: [
          { es: "Mi sono lavato le mani.", en: "I washed my hands." },
          { es: "Le bambine si sono lavate i denti.", en: "The girls brushed their teeth." },
          { es: "Ti sei messa la giacca?", en: "Did you put your jacket on? (to a woman)" },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The girls [brushed] their teeth.", sentence: "Le bambine ___ i denti.", answer: "si sono lavate", explanation: "\"Lavarsi i denti\": reflexive, article, no possessive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I washed my hands. (a woman speaking)", answer: "Mi sono lavata le mani.", altAnswers: ["Io mi sono lavata le mani."], explanation: "\"Le mani\", not \"le mie mani\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you wake up late? (to a woman you call tu)", answer: "Ti sei svegliata tardi?", altAnswers: ["Tu ti sei svegliata tardi?"], explanation: "-a for a woman." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We rested in the garden.", answer: "Ci siamo riposati in giardino.", altAnswers: ["Ci siamo riposate in giardino.", "Ci siamo riposati nel giardino."], explanation: "\"Riposarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children fell asleep straight away.", answer: "I bambini si sono addormentati subito.", explanation: "\"Addormentarsi\" = to fall asleep." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My cousin (a woman) got married in June.", answer: "Mia cugina si è sposata a giugno.", altAnswers: ["Mia cugina si è sposata in giugno."], explanation: "\"Sposarsi\"; months lower-case." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you move to Bologna? (plural)", answer: "Vi siete trasferiti a Bologna?", altAnswers: ["Vi siete trasferite a Bologna?", "Voi vi siete trasferiti a Bologna?"], explanation: "\"Trasferirsi\" = to move to another place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Matteo graduated last year.", answer: "Matteo si è laureato l'anno scorso.", altAnswers: ["L'anno scorso Matteo si è laureato."], explanation: "\"Laurearsi\" = to graduate from university." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We had fun] at the concert.", sentence: "___ al concerto.", answer: "Ci siamo divertiti", altAnswers: ["Ci siamo divertite"], explanation: "\"Divertirsi\": essere + agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco and Giulia [fell in love] in Venice.", sentence: "Marco e Giulia ___ a Venezia.", answer: "si sono innamorati", explanation: "Mixed couple: \"-i\"." },
      { type: "word-order", prompt: "Put the words in order to say: My sister got up at seven.", words: ["Mia", "sorella", "si", "è", "alzata", "alle", "sette."], translation: "My sister got up at seven.", explanation: "\"Si è alzata\": pronoun, auxiliary, participle." },
      { type: "multiple-choice", question: "I got dressed (a man speaking). Which is right?", options: ["Mi sono vestito.", "Mi ho vestito.", "Sono mi vestito.", "Mi sono vestita."], correctIndex: 0, explanation: "Reflexive = essere; -o for a man." },
      { type: "dictation", audio: "Ci siamo conosciuti a Bologna e ci siamo sposati a maggio.", explanation: "Two reciprocal verbs with \"ci siamo\"." },
      { type: "speak", text: "Ieri mi sono svegliata alle sette, mi sono vestita e mi sono divertita tutto il giorno.", prompt: "Say it as a woman: Yesterday I woke up at seven, got dressed and had fun all day.", tip: "mi SO-no: keep \"mi sono\" as one rhythm.", explanation: "Three reflexive verbs agreeing with a woman." },
    ],
  },
  {
    slug: "a2-piacere-in-the-past",
    level: "IT-A2",
    number: 4,
    title: "Did You Like It? Mi È Piaciuto",
    summary: "Say what you liked with mi è piaciuto, piaciuta, piaciuti and piaciute, agreeing with the thing you liked.",
    duration: "15 min",
    sections: [
      {
        heading: "Mi è piaciuto il film",
        body: [
          "\"Piacere\" takes \"essere\" in the past, and its subject is the thing you like, not you. So the participle agrees with that thing: \"Mi è piaciuto il film\", \"Mi è piaciuta la cena\".",
          "The pronoun is the same as in the present: \"mi, ti, gli, le, Le, ci, vi, gli\". \"Ti è piaciuto?\" means did you like it?",
        ],
        examples: [
          { es: "Mi è piaciuto il film.", en: "I liked the film." },
          { es: "Ti è piaciuta la cena?", en: "Did you like the dinner?" },
          { es: "A Marco è piaciuto il concerto.", en: "Marco liked the concert." },
          { es: "Ci è piaciuta molto la mostra.", en: "We really liked the exhibition." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you like the dinner? (to a friend)", answer: "Ti è piaciuta la cena?", altAnswers: ["La cena ti è piaciuta?"], explanation: "\"Cena\" is feminine: \"piaciuta\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I liked] the film.", sentence: "___ il film.", answer: "Mi è piaciuto", explanation: "\"Il film\" is masculine: \"piaciuto\"." },
        ],
      },
      {
        heading: "Plurals: piaciuti, piaciute",
        body: [
          "With a plural thing, \"essere\" becomes \"sono\" and the participle goes plural: \"Mi sono piaciuti i musei\", \"Mi sono piaciute le spiagge\". Ask yourself what was liked, and agree with it.",
          "Cities are usually feminine, so \"Ti è piaciuta Roma?\". With an infinitive it's always singular masculine: \"Mi è piaciuto camminare in centro\".",
        ],
        examples: [
          { es: "Mi sono piaciuti i musei di Firenze.", en: "I liked the museums in Florence." },
          { es: "Le sono piaciute le spiagge.", en: "She liked the beaches." },
          { es: "Ti è piaciuta Roma?", en: "Did you like Rome?" },
          { es: "Mi è piaciuto camminare in centro.", en: "I enjoyed walking around the centre." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I liked the museums in Florence.", answer: "Mi sono piaciuti i musei di Firenze.", altAnswers: ["I musei di Firenze mi sono piaciuti."], explanation: "Plural subject: \"sono piaciuti\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you like Rome? (to a friend)", answer: "Ti è piaciuta Roma?", altAnswers: ["Roma ti è piaciuta?"], explanation: "Cities are feminine: \"piaciuta\"." },
        ],
      },
      {
        heading: "Didn't like it",
        body: [
          "\"Non\" goes before the pronoun: \"Non mi è piaciuto\". To be strong: \"Non mi è piaciuto per niente\" (I didn't like it at all). A softer verdict: \"Così così\" or \"Non tanto\".",
        ],
        examples: [
          { es: "Non mi è piaciuto per niente.", en: "I didn't like it at all." },
          { es: "Non ci sono piaciute le camere.", en: "We didn't like the rooms." },
          { es: "Il libro? Così così.", en: "The book? So-so." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't like the rooms.", answer: "Non ci sono piaciute le camere.", altAnswers: ["Le camere non ci sono piaciute."], explanation: "\"Non\" before \"ci\"; \"camere\" feminine plural." },
          { type: "listen-choose", audio: "Non mi è piaciuto per niente.", question: "What does the speaker think?", options: ["They didn't like it at all.", "They liked it a lot.", "It was so-so.", "They haven't seen it."], correctIndex: 0, explanation: "\"Per niente\" = at all." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco liked the concert.", answer: "A Marco è piaciuto il concerto.", altAnswers: ["Il concerto è piaciuto a Marco."], explanation: "\"A Marco\" + \"è piaciuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We really liked the exhibition.", answer: "Ci è piaciuta molto la mostra.", altAnswers: ["La mostra ci è piaciuta molto.", "Ci è piaciuta tanto la mostra."], explanation: "\"Mostra\" is feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She liked the beaches.", answer: "Le sono piaciute le spiagge.", altAnswers: ["Le spiagge le sono piaciute."], explanation: "\"Le\" = to her; \"spiagge\" feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you like the pasta? (plural)", answer: "Vi è piaciuta la pasta?", altAnswers: ["La pasta vi è piaciuta?"], explanation: "\"Vi\" = to you (plural)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't like it at all.", answer: "Non mi è piaciuto per niente.", altAnswers: ["Non mi è piaciuta per niente."], explanation: "\"Per niente\" = at all." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I enjoyed walking around the centre.", answer: "Mi è piaciuto camminare in centro.", altAnswers: ["Mi è piaciuto passeggiare in centro."], explanation: "Infinitive: always \"piaciuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[My parents liked] the hotel.", sentence: "___ l'albergo.", answer: "Ai miei genitori è piaciuto", explanation: "\"Ai miei genitori\" + \"è piaciuto\" (\"albergo\" is singular)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you like] the cakes? (to a friend)", sentence: "___ i dolci?", answer: "Ti sono piaciuti", explanation: "\"Dolci\" masculine plural." },
      { type: "word-order", prompt: "Put the words in order to say: Giulia liked Naples a lot.", words: ["A", "Giulia", "è", "piaciuta", "molto", "Napoli."], translation: "Giulia liked Naples a lot.", altOrders: [["A", "Giulia", "Napoli", "è", "piaciuta", "molto."]], explanation: "\"Napoli\" is feminine: \"piaciuta\"." },
      { type: "multiple-choice", question: "I liked the lasagne (plural in Italian: le lasagne). Which is right?", options: ["Mi sono piaciute le lasagne.", "Mi è piaciuto le lasagne.", "Mi sono piaciuti le lasagne.", "Ho piaciuto le lasagne."], correctIndex: 0, explanation: "\"Le lasagne\" feminine plural: \"sono piaciute\"." },
      { type: "dictation", audio: "Ti è piaciuta Venezia? Sì, mi è piaciuta tantissimo.", explanation: "\"Venezia\" feminine: \"piaciuta\"." },
      { type: "speak", text: "Mi è piaciuta Roma, mi sono piaciuti i musei, ma non mi è piaciuto il traffico.", prompt: "Say it in Italian: I liked Rome, I liked the museums, but I didn't like the traffic.", tip: "pia-CIU-ta, pia-CIU-ti: the ending changes, the stress doesn't.", explanation: "Three agreements: Roma, musei, traffico." },
    ],
  },
  {
    slug: "a2-drill-essere-participles",
    level: "IT-A2",
    number: 5,
    title: "Drill: Essere and Agreement",
    summary: "Produce twenty essere verbs with every subject, male and female, until the agreement is automatic.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Twenty essere verbs",
        body: [
          "\"Andare, venire, arrivare, partire, tornare, entrare, uscire, salire, scendere, cadere, nascere, morire, diventare, crescere, restare, rimanere, stare, essere, succedere, costare\". Irregular participles: \"venuto, uscito, sceso, nato, morto, cresciuto, rimasto, stato, successo\". Then agree: -o, -a, -i, -e.",
        ],
        examples: [
          { es: "Sono sceso alla fermata sbagliata.", en: "I got off at the wrong stop." },
          { es: "Cos'è successo?", en: "What happened?" },
          { es: "Quanto è costata la borsa?", en: "How much did the bag cost?" },
          { es: "La nonna è caduta per le scale.", en: "Grandma fell down the stairs." },
          { es: "Siamo saliti sul treno.", en: "We got on the train." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What happened?", answer: "Cos'è successo?", altAnswers: ["Cosa è successo?", "Che cosa è successo?", "Che è successo?"], explanation: "\"Succedere\" → \"successo\", with \"essere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much did the bag cost?", answer: "Quanto è costata la borsa?", altAnswers: ["La borsa quanto è costata?"], explanation: "\"Costare\" takes \"essere\" and agrees with \"borsa\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma fell down the stairs.", answer: "La nonna è caduta per le scale.", altAnswers: ["La nonna è caduta dalle scale."], explanation: "\"Cadere\" → \"caduta\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We got on the train.", answer: "Siamo saliti sul treno.", altAnswers: ["Siamo salite sul treno.", "Noi siamo saliti sul treno."], explanation: "\"Salire\" = to get on, go up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got off at the wrong stop. (a woman speaking)", answer: "Sono scesa alla fermata sbagliata.", altAnswers: ["Io sono scesa alla fermata sbagliata."], explanation: "\"Scendere\" → \"sceso\" → \"scesa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca came to the party.", answer: "Luca è venuto alla festa.", explanation: "\"Venuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guests arrived at eight.", answer: "Gli ospiti sono arrivati alle otto.", explanation: "\"Ospiti\": -i." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sara stayed in Milan.", answer: "Sara è rimasta a Milano.", altAnswers: ["Sara è restata a Milano.", "Sara è stata a Milano."], explanation: "\"Rimanere\" → \"rimasto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you go out last night? (to a woman you call tu)", answer: "Sei uscita ieri sera?", altAnswers: ["Ieri sera sei uscita?", "Tu sei uscita ieri sera?"], explanation: "\"Uscita\" for a woman." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandparents were born in Sardinia.", answer: "I miei nonni sono nati in Sardegna.", explanation: "\"In\" + region." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tickets cost thirty euros.", answer: "I biglietti sono costati trenta euro.", altAnswers: ["I biglietti sono costati 30 euro."], explanation: "\"Costati\" agrees with \"biglietti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia and Chiara left on Monday.", answer: "Giulia e Chiara sono partite lunedì.", explanation: "Two women: \"-e\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever been to Venice? (plural)", answer: "Siete mai stati a Venezia?", altAnswers: ["Siete mai state a Venezia?", "Voi siete mai stati a Venezia?"], explanation: "\"Mai\" between \"siete\" and \"stati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The prices [have gone up].", sentence: "I prezzi ___.", answer: "sono saliti", altAnswers: ["sono aumentati"], explanation: "Nobody raises them here: \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My daughter [became] an engineer.", sentence: "Mia figlia ___ ingegnere.", answer: "è diventata", explanation: "\"Diventata\" agrees with \"figlia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We came back] from holiday on Sunday.", sentence: "___ dalle vacanze domenica.", answer: "Siamo tornati", altAnswers: ["Siamo tornate", "Noi siamo tornati"], explanation: "\"Tornati\" for a mixed group." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [came into] the classroom.", sentence: "I bambini ___ in classe.", answer: "sono entrati", explanation: "\"Entrare in\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Signora Rossi, [did you get here] by bus?", sentence: "Signora Rossi, ___ in autobus?", answer: "è venuta", altAnswers: ["è arrivata"], explanation: "\"Lei\" with a woman: \"venuta\"." },
      { type: "multiple-choice", question: "Anna and Marco went to the sea. Which is right?", options: ["Anna e Marco sono andati al mare.", "Anna e Marco sono andate al mare.", "Anna e Marco hanno andato al mare.", "Anna e Marco è andato al mare."], correctIndex: 0, explanation: "Mixed pair: \"-i\"." },
      { type: "dictation", audio: "Le ragazze sono uscite e sono tornate a mezzanotte.", explanation: "\"-e\" twice: a group of women." },
      { type: "dictation", audio: "Cos'è successo? Il nonno è caduto.", explanation: "\"Successo\", \"caduto\"." },
      { type: "speak", text: "Sono partita da Milano, sono scesa a Firenze e sono rimasta tre giorni.", prompt: "Say it as a woman: I left from Milan, got off in Florence and stayed three days.", tip: "-a on every participle: partita, scesa, rimasta.", explanation: "Three essere verbs agreeing with a woman." },
      { type: "speak", text: "Siamo arrivati tardi, ma siamo stati benissimo.", prompt: "Say it for a mixed group: We arrived late, but we had a great time.", tip: "\"Stati\": the past of both stare and essere.", explanation: "\"-i\" for a mixed group." },
    ],
  },
  {
    slug: "a2-drill-reflexives-past",
    level: "IT-A2",
    number: 6,
    title: "Drill: Reflexives in the Past",
    summary: "Produce fifteen reflexive verbs in the passato prossimo, every person, with agreement.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Pronoun + essere + participle",
        body: [
          "\"Mi sono, ti sei, si è, ci siamo, vi siete, si sono\" + participle agreeing with the subject. Fifteen verbs: \"alzarsi, svegliarsi, vestirsi, lavarsi, prepararsi, riposarsi, divertirsi, annoiarsi\" (to get bored), \"addormentarsi, fermarsi\" (to stop), \"sentirsi\" (to feel), \"ricordarsi, dimenticarsi\" (to remember, forget), \"perdersi\" (to get lost), \"sbagliarsi\" (to be wrong).",
        ],
        examples: [
          { es: "Ci siamo persi a Venezia.", en: "We got lost in Venice." },
          { es: "Ti sei ricordato del pane?", en: "Did you remember the bread?" },
          { es: "Mi sono sbagliata.", en: "I was wrong. (a woman speaking)" },
          { es: "Si sono fermati a Bologna.", en: "They stopped in Bologna." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We got lost in Venice.", answer: "Ci siamo persi a Venezia.", altAnswers: ["Ci siamo perse a Venezia.", "Noi ci siamo persi a Venezia."], explanation: "\"Perdersi\" → \"persi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you remember the bread? (to a man you call tu)", answer: "Ti sei ricordato del pane?", altAnswers: ["Ti sei ricordato il pane?", "Tu ti sei ricordato del pane?"], explanation: "\"Ricordarsi di\" + thing." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was wrong. (a man speaking)", answer: "Mi sono sbagliato.", altAnswers: ["Io mi sono sbagliato."], explanation: "\"Sbagliarsi\" = to be wrong." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They stopped in Bologna.", answer: "Si sono fermati a Bologna.", altAnswers: ["Si sono fermate a Bologna.", "Loro si sono fermati a Bologna."], explanation: "\"Fermarsi\" = to stop." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia got bored at the meeting.", answer: "Giulia si è annoiata alla riunione.", explanation: "\"Annoiarsi\" = to get bored." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you feel ill? (to a woman you call tu)", answer: "Ti sei sentita male?", altAnswers: ["Tu ti sei sentita male?"], explanation: "\"Sentirsi male\" = to feel ill." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We got ready in ten minutes.", answer: "Ci siamo preparati in dieci minuti.", altAnswers: ["Ci siamo preparate in dieci minuti."], explanation: "\"Prepararsi\" = to get ready." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco forgot the keys.", answer: "Marco si è dimenticato le chiavi.", altAnswers: ["Marco si è dimenticato delle chiavi.", "Marco ha dimenticato le chiavi."], explanation: "\"Dimenticarsi\" (reflexive) or \"dimenticare\" (with avere)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children woke up at six.", answer: "I bambini si sono svegliati alle sei.", explanation: "\"Svegliarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you rest? (plural)", answer: "Vi siete riposati?", altAnswers: ["Vi siete riposate?", "Voi vi siete riposati?"], explanation: "\"Vi siete\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My mother got dressed quickly.", answer: "Mia madre si è vestita in fretta.", altAnswers: ["Mia madre si è vestita velocemente."], explanation: "\"Vestita\" agrees with \"madre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fell asleep on the sofa. (a woman speaking)", answer: "Mi sono addormentata sul divano.", altAnswers: ["Io mi sono addormentata sul divano."], explanation: "\"Addormentarsi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [washed] his face.", sentence: "Luca ___ la faccia.", answer: "si è lavato", explanation: "Body part with the article: \"la faccia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The girls [had fun] at the beach.", sentence: "Le ragazze ___ in spiaggia.", answer: "si sono divertite", explanation: "Women only: \"-e\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you get up] early? (plural)", sentence: "___ presto?", answer: "Vi siete alzati", altAnswers: ["Vi siete alzate", "Voi vi siete alzati"], explanation: "\"Vi siete\" + \"-i\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My parents [got married] in 1990.", sentence: "I miei genitori ___ nel 1990.", answer: "si sono sposati", explanation: "Mixed couple: \"-i\"." },
      { type: "multiple-choice", question: "Chiara fell asleep. Which is right?", options: ["Chiara si è addormentata.", "Chiara si ha addormentata.", "Chiara è si addormentata.", "Chiara si è addormentato."], correctIndex: 0, explanation: "\"Si\" + \"è\" + \"-a\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "ci siamo persi", right: "we got lost" }, { left: "mi sono sbagliata", right: "I was wrong (a woman)" }, { left: "si è fermato", right: "he stopped" }, { left: "vi siete annoiati", right: "you got bored (plural)" }, { left: "ti sei ricordata", right: "you remembered (to a woman)" }], explanation: "Pronoun, essere, participle." },
      { type: "dictation", audio: "Ci siamo svegliati presto e ci siamo preparati in fretta.", explanation: "\"Ci siamo\" twice." },
      { type: "dictation", audio: "Ti sei divertita? Sì, ma mi sono stancata.", explanation: "\"Stancarsi\" = to get tired." },
      { type: "speak", text: "Stamattina mi sono svegliato tardi, mi sono vestito in fretta e mi sono dimenticato il telefono.", prompt: "Say it as a man: This morning I woke up late, got dressed in a hurry and forgot my phone.", tip: "Every verb starts with \"mi sono\".", explanation: "Three reflexive verbs with -o." },
    ],
  },
  {
    slug: "a2-dialogue-lab-trip-to-sicily",
    level: "IT-A2",
    number: 7,
    title: "Dialogue Lab: Back from Sicily",
    summary: "A friend tells you about her trip to Sicily: when she left, where she went and what she liked.",
    duration: "15 min",
    sections: [
      {
        heading: "The journey",
        body: [
          "Elena is back in Torino after a week in Sicily, and her friend Davide wants to hear everything. Listen to how every participle ends in \"-a\" when Elena talks about herself, and \"-i\" when she includes her partner Paolo.",
          "\"Sono partita venerdì\" (I left on Friday): a day without an article means that specific Friday.",
        ],
        examples: [
          { es: "Allora, com'è andata in Sicilia?", en: "So, how was Sicily?" },
          { es: "Benissimo! Sono partita venerdì mattina.", en: "Great! I left on Friday morning." },
          { es: "Paolo ed io siamo arrivati a Palermo in aereo.", en: "Paolo and I flew into Palermo." },
          { es: "Siamo rimasti tre giorni in città.", en: "We stayed in the city for three days." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I left on Friday morning. (a woman speaking)", answer: "Sono partita venerdì mattina.", altAnswers: ["Venerdì mattina sono partita.", "Io sono partita venerdì mattina."], explanation: "\"Partita\": Elena is a woman." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We stayed in the city for three days.", answer: "Siamo rimasti tre giorni in città.", altAnswers: ["Siamo rimasti in città tre giorni.", "Siamo restati tre giorni in città.", "Siamo stati tre giorni in città.", "Siamo rimasti in città per tre giorni."], explanation: "A man and a woman: \"-i\"." },
        ],
      },
      {
        heading: "Siracusa and the sea",
        body: [
          "\"Sono stata anche a Siracusa\" (I also went to Syracuse): \"essere stato a\" is the usual way to say you visited a place. \"Ci siamo fermati\" means we stopped.",
          "To say you loved something: \"Mi è piaciuta tantissimo\". \"Tantissimo\" is tanto + -issimo, very very much.",
        ],
        examples: [
          { es: "Sono stata anche a Siracusa.", en: "I also went to Syracuse." },
          { es: "Ci siamo fermati due notti a Ortigia.", en: "We stopped for two nights in Ortigia." },
          { es: "Mi è piaciuta tantissimo.", en: "I loved it." },
          { es: "Ci siamo divertiti un sacco.", en: "We had a great time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I also went to Syracuse. (a woman speaking)", answer: "Sono stata anche a Siracusa.", altAnswers: ["Sono andata anche a Siracusa.", "Sono stata a Siracusa anche."], explanation: "\"Essere stato a\" = to have been to, visited." },
          { type: "listen-choose", audio: "Ci siamo fermati due notti a Ortigia.", question: "How long did they stop in Ortigia?", options: ["two nights", "two days", "a week", "one night"], correctIndex: 0, explanation: "\"Due notti\" = two nights." },
        ],
      },
      {
        heading: "Questions and reactions",
        body: [
          "Davide asks the classic questions: \"Quando sei tornata?\", \"Ti è piaciuto il cibo?\", \"Cosa vi è piaciuto di più?\" (what did you like most?). He reacts with \"Che invidia!\" (I'm so jealous!).",
        ],
        examples: [
          { es: "Quando sei tornata?", en: "When did you get back?" },
          { es: "Cosa vi è piaciuto di più?", en: "What did you like most?" },
          { es: "Mi sono piaciuti i mercati e il mare.", en: "I loved the markets and the sea." },
          { es: "Che invidia!", en: "I'm so jealous!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When did you get back? (to a woman you call tu)", answer: "Quando sei tornata?", altAnswers: ["Tu quando sei tornata?"], explanation: "\"Tornata\" to a woman." },
          { type: "multiple-choice", question: "Davide asks \"Cosa vi è piaciuto di più?\" Which answer fits?", options: ["Ci sono piaciuti i mercati.", "Ci è piaciuti i mercati.", "Abbiamo piaciuto i mercati.", "Ci sono piaciute i mercati."], correctIndex: 0, explanation: "\"I mercati\" masculine plural: \"sono piaciuti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paolo and I flew into Palermo.", answer: "Paolo ed io siamo arrivati a Palermo in aereo.", altAnswers: ["Paolo e io siamo arrivati a Palermo in aereo.", "Io e Paolo siamo arrivati a Palermo in aereo."], explanation: "\"Arrivare in aereo\" = to fly in; mixed pair: \"-i\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I loved it. (talking about Sicily)", answer: "Mi è piaciuta tantissimo.", altAnswers: ["Mi è piaciuta moltissimo.", "Mi è piaciuta un sacco."], explanation: "\"La Sicilia\" is feminine: \"piaciuta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We had a great time.", answer: "Ci siamo divertiti un sacco.", altAnswers: ["Ci siamo divertiti tantissimo.", "Ci siamo divertite un sacco.", "Ci siamo divertiti molto."], explanation: "\"Un sacco\" = loads, colloquial." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What did you like most? (plural)", answer: "Cosa vi è piaciuto di più?", altAnswers: ["Che cosa vi è piaciuto di più?", "Che vi è piaciuto di più?"], explanation: "\"Di più\" = most." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you like the food? (to a friend)", answer: "Ti è piaciuto il cibo?", altAnswers: ["Il cibo ti è piaciuto?"], explanation: "\"Il cibo\": \"piaciuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I loved] the markets and the sea.", sentence: "___ i mercati e il mare.", answer: "Mi sono piaciuti", explanation: "Two things: plural, \"-i\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On the last day [we went] to the beach.", sentence: "L'ultimo giorno ___ al mare.", answer: "siamo andati", altAnswers: ["siamo andate"], explanation: "\"Andare al mare\" = to go to the seaside." },
      { type: "word-order", prompt: "Put the words in order to say: I came back on Sunday evening.", words: ["Sono", "tornata", "domenica", "sera."], translation: "I came back on Sunday evening.", altOrders: [["Domenica", "sera", "sono", "tornata."]], explanation: "Elena speaking: \"tornata\"." },
      { type: "multiple-choice", question: "Elena says she spent a week in Sicily. What does Davide say?", options: ["Che invidia!", "Che peccato!", "Mi dispiace!", "Buon viaggio!"], correctIndex: 0, explanation: "\"Che invidia\" = I'm so jealous, a friendly reaction." },
      { type: "dictation", audio: "Sono stata anche a Siracusa e mi è piaciuta tantissimo.", explanation: "\"Stata\", \"piaciuta\": Elena and Siracusa, both feminine." },
      { type: "speak", text: "Sono partito venerdì, sono stato a Palermo e a Siracusa e mi è piaciuto tutto!", prompt: "Tell a friend, as a man: I left on Friday, went to Palermo and Syracuse and loved everything!", tip: "\"Tutto\" is singular: \"mi è piaciuto tutto\".", explanation: "Three essere forms with -o." },
    ],
  },
  {
    slug: "a2-error-hunt-essere-past",
    level: "IT-A2",
    number: 8,
    title: "Error Hunt: The Past with Essere",
    summary: "Fix the typical mistakes: ho andato, Giulia è andato, mi ho alzato, the wrong ending for a mixed group, and mi è piaciuto le lasagne.",
    duration: "15 min",
    sections: [
      {
        heading: "Wrong auxiliary",
        body: [
          "\"Ho andato\" and \"mi ho alzato\" are the two most common slips. Movement, change and reflexive verbs need \"essere\": \"sono andato\", \"mi sono alzato\". Check the verb before you check the ending.",
        ],
        examples: [
          { es: "Sono andato in palestra.", en: "I went to the gym." },
          { es: "Mi sono alzata alle otto.", en: "I got up at eight." },
          { es: "Siamo usciti a mezzanotte.", en: "We went out at midnight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner (a man) wrote \"Ho andato in palestra.\" Write it correctly: I went to the gym.", source: "I went to the gym.", answer: "Sono andato in palestra.", altAnswers: ["Io sono andato in palestra."], explanation: "\"Andare\" takes \"essere\"." },
          { type: "translate", direction: "en-es", prompt: "A learner (a woman) wrote \"Mi ho alzata alle otto.\" Write it correctly: I got up at eight.", source: "I got up at eight.", answer: "Mi sono alzata alle otto.", altAnswers: ["Io mi sono alzata alle otto."], explanation: "Reflexive = \"essere\"." },
        ],
      },
      {
        heading: "Wrong ending",
        body: [
          "\"Giulia è andato\" forgets the agreement: \"Giulia è andata\". \"Marco e Sara sono partite\" uses the all-female ending for a mixed group: it must be \"sono partiti\".",
          "With \"piacere\", agree with the thing liked: \"Mi è piaciuto le lasagne\" is wrong twice, because \"le lasagne\" is plural and feminine: \"Mi sono piaciute le lasagne\".",
        ],
        examples: [
          { es: "Giulia è andata a Bari.", en: "Giulia went to Bari." },
          { es: "Marco e Sara sono partiti.", en: "Marco and Sara have left." },
          { es: "Mi sono piaciute le lasagne.", en: "I liked the lasagne." },
          { es: "Ti sono piaciuti i cannoli?", en: "Did you like the cannoli?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Giulia è andato a Bari.\" Write it correctly: Giulia went to Bari.", source: "Giulia went to Bari.", answer: "Giulia è andata a Bari.", explanation: "\"Andata\" agrees with Giulia." },
          { type: "fill-blank", prompt: "A learner wrote \"Mi è piaciuto le lasagne.\" Write the Italian for the bold words.", en: "[I liked] the lasagne.", sentence: "___ le lasagne.", answer: "Mi sono piaciute", explanation: "\"Le lasagne\": feminine plural." },
          { type: "listen-choose", audio: "Marco e Sara sono partiti.", question: "What did you hear?", options: ["Marco e Sara sono partiti.", "Marco e Sara sono partite.", "Marco e Sara hanno partito.", "Marco e Sara è partito."], correctIndex: 0, explanation: "Mixed pair: \"partiti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Abbiamo usciti a mezzanotte.\" Write it correctly: We went out at midnight.", source: "We went out at midnight.", answer: "Siamo usciti a mezzanotte.", altAnswers: ["Siamo uscite a mezzanotte.", "Noi siamo usciti a mezzanotte."], explanation: "\"Uscire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Marco e Sara sono partite.\" Write it correctly: Marco and Sara have left.", source: "Marco and Sara have left.", answer: "Marco e Sara sono partiti.", explanation: "Mixed pair: \"-i\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Mia sorella ha nata a Roma.\" Write it correctly: My sister was born in Rome.", source: "My sister was born in Rome.", answer: "Mia sorella è nata a Roma.", explanation: "\"Nascere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"I ragazzi si hanno divertiti.\" Write it correctly: The boys had fun.", source: "The boys had fun.", answer: "I ragazzi si sono divertiti.", explanation: "Reflexive = \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ti è piaciuto la pizza?\" Write it correctly: Did you like the pizza?", source: "Did you like the pizza? (to a friend)", answer: "Ti è piaciuta la pizza?", altAnswers: ["La pizza ti è piaciuta?"], explanation: "\"Pizza\" is feminine." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ho stato a Napoli.\" Write it correctly: I've been to Naples. (a man)", source: "I've been to Naples.", answer: "Sono stato a Napoli.", altAnswers: ["Io sono stato a Napoli."], explanation: "\"Essere\" → \"sono stato\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Le mie amiche sono venuti.\" Write the Italian for the bold words.", en: "My friends (all women) [came].", sentence: "Le mie amiche ___.", answer: "sono venute", explanation: "All women: \"-e\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Signora, è arrivato bene?\" to a woman. Write the Italian for the bold words.", en: "Madam, [did you have a good journey]?", sentence: "Signora, ___?", answer: "è arrivata bene", explanation: "\"Lei\" with a woman: \"-a\"." },
      { type: "word-order", prompt: "Put the words in order to say: Did you like the museums? (to a friend)", words: ["Ti", "sono", "piaciuti", "i", "musei?"], translation: "Did you like the museums?", explanation: "\"I musei\" masculine plural." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Luca e Anna si sono sposati.", "Luca e Anna si hanno sposati.", "Luca e Anna si sono sposate.", "Luca e Anna sono si sposati."], correctIndex: 0, explanation: "Reflexive, essere, mixed pair: \"si sono sposati\"." },
      { type: "dictation", audio: "Giulia è andata a Bari e si è divertita.", explanation: "\"-a\" twice for Giulia." },
      { type: "speak", text: "Sono andata a Roma, mi sono divertita e mi sono piaciute le lasagne.", prompt: "Say it correctly, as a woman: I went to Rome, had fun and liked the lasagne.", tip: "Check each ending: andata, divertita, piaciute.", explanation: "Three corrected forms." },
    ],
  },
  {
    slug: "a2-transform-change-the-traveller",
    level: "IT-A2",
    number: 9,
    title: "Transformations: Change the Traveller",
    summary: "Retell the same trip for a man, a woman, a couple and two women, and follow every ending that changes.",
    duration: "15 min",
    sections: [
      {
        heading: "One trip, four travellers",
        body: [
          "Change the subject and two things move: the form of \"essere\" and the participle ending. \"Marco è partito\" → \"Giulia è partita\" → \"Marco e Giulia sono partiti\" → \"Giulia e Sara sono partite\".",
          "Verbs with \"avere\" in the same story don't change their participle: \"Marco ha preso il treno\" → \"Marco e Giulia hanno preso il treno\". Only \"ha\" becomes \"hanno\".",
        ],
        examples: [
          { es: "Marco è partito da Milano.", en: "Marco left from Milan." },
          { es: "Giulia è partita da Milano.", en: "Giulia left from Milan." },
          { es: "Marco e Giulia sono partiti da Milano.", en: "Marco and Giulia left from Milan." },
          { es: "Giulia e Sara sono partite da Milano.", en: "Giulia and Sara left from Milan." },
          { es: "Giulia e Sara hanno preso il Frecciarossa.", en: "Giulia and Sara took the Frecciarossa." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Marco è partito da Milano\" to Giulia and Sara and write: Giulia and Sara left from Milan.", source: "Giulia and Sara left from Milan.", answer: "Giulia e Sara sono partite da Milano.", explanation: "\"È\" → \"sono\", \"-o\" → \"-e\"." },
          { type: "translate", direction: "en-es", prompt: "Change \"Marco ha preso il treno\" to Marco and Giulia and write: Marco and Giulia took the train.", source: "Marco and Giulia took the train.", answer: "Marco e Giulia hanno preso il treno.", explanation: "With \"avere\" only the auxiliary changes." },
        ],
      },
      {
        heading: "Reflexives and stato",
        body: [
          "Reflexive verbs change three things: pronoun, \"essere\" and ending. \"Mi sono divertito\" → \"Si è divertita\" → \"Ci siamo divertiti\". \"Stato\" follows the same pattern: \"Sono stato a Roma\" → \"Siamo state a Roma\".",
        ],
        examples: [
          { es: "Mi sono fermato a Firenze. → Ci siamo fermati a Firenze.", en: "I stopped in Florence. → We stopped in Florence." },
          { es: "Si è divertita. → Si sono divertite.", en: "She had fun. → They (women) had fun." },
          { es: "Sei stato a Roma? → Siete stati a Roma?", en: "Have you been to Rome? → (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Mi sono fermato a Firenze\" to we (a mixed group) and write: We stopped in Florence.", source: "We stopped in Florence.", answer: "Ci siamo fermati a Firenze.", altAnswers: ["Noi ci siamo fermati a Firenze."], explanation: "\"Mi sono\" → \"ci siamo\"; \"-o\" → \"-i\"." },
          { type: "listen-choose", audio: "Si sono divertite.", question: "Who had fun?", options: ["a group of women", "one woman", "a group of men", "a mixed group"], correctIndex: 0, explanation: "\"Divertite\": \"-e\", women only." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Change \"Marco è arrivato a Bari\" to Giulia and write: Giulia arrived in Bari.", source: "Giulia arrived in Bari.", answer: "Giulia è arrivata a Bari.", explanation: "\"-o\" → \"-a\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Sono tornata tardi\" to we (two women) and write: We came back late.", source: "We came back late. (two women)", answer: "Siamo tornate tardi.", altAnswers: ["Noi siamo tornate tardi."], explanation: "\"Sono\" → \"siamo\"; \"-a\" → \"-e\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Luca si è alzato presto\" to Luca and Anna and write: Luca and Anna got up early.", source: "Luca and Anna got up early.", answer: "Luca e Anna si sono alzati presto.", explanation: "Mixed pair: \"si sono\" + \"-i\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Sei stato a Roma?\" to you (plural, a mixed group) and write: Have you been to Rome?", source: "Have you been to Rome? (plural)", answer: "Siete stati a Roma?", altAnswers: ["Voi siete stati a Roma?"], explanation: "\"Sei\" → \"siete\"; \"-o\" → \"-i\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Mia sorella è venuta in macchina\" to my parents and write: My parents came by car.", source: "My parents came by car.", answer: "I miei genitori sono venuti in macchina.", explanation: "\"Venuti\" for a mixed couple." },
      { type: "translate", direction: "en-es", prompt: "Change \"Il signor Bianchi è uscito\" to la signora Bianchi and write: Mrs Bianchi has gone out.", source: "Mrs Bianchi has gone out.", answer: "La signora Bianchi è uscita.", explanation: "\"Uscito\" → \"uscita\"." },
      { type: "fill-blank", prompt: "Change \"Il bambino è nato a maggio\" to twins (a boy and a girl). Write the Italian for the bold words.", en: "The twins [were born] in May.", sentence: "I gemelli ___ a maggio.", answer: "sono nati", explanation: "Mixed: \"-i\"." },
      { type: "fill-blank", prompt: "Change \"Mi sono divertita\" to they (two women). Write the Italian for the bold words.", en: "[They had fun].", sentence: "___.", answer: "Si sono divertite", explanation: "\"Mi sono\" → \"si sono\"; \"-a\" → \"-e\"." },
      { type: "word-order", prompt: "Put the words in order to say: Chiara and Sofia stayed in Venice.", words: ["Chiara", "e", "Sofia", "sono", "rimaste", "a", "Venezia."], translation: "Chiara and Sofia stayed in Venice.", explanation: "Two women: \"rimaste\"." },
      { type: "multiple-choice", question: "\"Luca è partito e ha preso l'aereo.\" Change to Luca and Sara:", options: ["Luca e Sara sono partiti e hanno preso l'aereo.", "Luca e Sara sono partiti e hanno presi l'aereo.", "Luca e Sara sono partite e hanno preso l'aereo.", "Luca e Sara è partiti e ha preso l'aereo."], correctIndex: 0, explanation: "Essere verb agrees; avere verb keeps \"preso\"." },
      { type: "dictation", audio: "Le mie amiche sono partite e si sono fermate a Napoli.", explanation: "\"-e\" twice for a group of women." },
      { type: "speak", text: "Giulia e Sara sono partite venerdì, sono arrivate a Lecce e si sono divertite tantissimo.", prompt: "Retell for Giulia and Sara: They left on Friday, arrived in Lecce and had a great time.", tip: "Make every participle end in -e.", explanation: "Three essere verbs for two women." },
    ],
  },
  {
    slug: "a2-mission-life-story",
    level: "IT-A2",
    number: 10,
    title: "Real-World Mission: A Short Life Story",
    summary: "Write the key events of someone's life: born in, moved to, graduated, married, became.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "The key verbs",
        body: [
          "A short biography, for a family tree or a work profile, uses a handful of essere verbs: \"è nato / nata\", \"è cresciuto\", \"si è trasferito\", \"si è laureato\", \"si è sposato\", \"è diventato\", \"è morto\". Years take \"nel\": \"nel 1975\".",
          "Avere verbs fill in the rest: \"ha studiato\", \"ha lavorato\", \"ha vissuto\", \"ha aperto un negozio\".",
        ],
        examples: [
          { es: "Mio nonno è nato a Bari nel 1940.", en: "My grandfather was born in Bari in 1940." },
          { es: "È cresciuto in campagna.", en: "He grew up in the countryside." },
          { es: "Nel 1962 si è trasferito a Torino.", en: "In 1962 he moved to Turin." },
          { es: "Ha lavorato in fabbrica per trent'anni.", en: "He worked in a factory for thirty years." },
          { es: "Si è sposato con mia nonna nel 1965.", en: "He married my grandmother in 1965." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandfather was born in Bari in 1940.", answer: "Mio nonno è nato a Bari nel 1940.", altAnswers: ["Mio nonno è nato nel 1940 a Bari."], explanation: "\"Nel\" + year." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In 1962 he moved to Turin.", answer: "Nel 1962 si è trasferito a Torino.", altAnswers: ["Si è trasferito a Torino nel 1962."], explanation: "\"Trasferirsi\" = to move to another city." },
        ],
      },
      {
        heading: "A woman's story",
        body: [
          "For a woman every essere participle ends in \"-a\": \"è nata\", \"si è laureata\", \"è diventata\". \"Sposarsi con\" means to marry someone.",
        ],
        examples: [
          { es: "Mia zia è nata a Cagliari.", en: "My aunt was born in Cagliari." },
          { es: "Si è laureata in medicina a Pisa.", en: "She graduated in medicine in Pisa." },
          { es: "È diventata pediatra.", en: "She became a paediatrician." },
          { es: "Ha aperto uno studio a Firenze.", en: "She opened a practice in Florence." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She graduated in medicine in Pisa.", answer: "Si è laureata in medicina a Pisa.", altAnswers: ["Lei si è laureata in medicina a Pisa."], explanation: "\"Laurearsi in\" + subject." },
          { type: "listen-choose", audio: "È diventata pediatra.", question: "What does it mean?", options: ["She became a paediatrician.", "He became a paediatrician.", "She wanted to be a paediatrician.", "She went to a paediatrician."], correctIndex: 0, explanation: "\"Diventata\": a woman." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He grew up in the countryside.", answer: "È cresciuto in campagna.", altAnswers: ["Lui è cresciuto in campagna."], explanation: "\"Crescere\" → \"cresciuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He worked in a factory for thirty years.", answer: "Ha lavorato in fabbrica per trent'anni.", altAnswers: ["Ha lavorato in una fabbrica per trent'anni.", "Ha lavorato trent'anni in fabbrica."], explanation: "\"Fabbrica\" = factory (a false friend: fabric is \"stoffa\")." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He married my grandmother in 1965.", answer: "Si è sposato con mia nonna nel 1965.", altAnswers: ["Nel 1965 si è sposato con mia nonna.", "Ha sposato mia nonna nel 1965."], explanation: "\"Sposarsi con\" or \"sposare\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My aunt was born in Cagliari.", answer: "Mia zia è nata a Cagliari.", explanation: "\"Nata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She opened a practice in Florence.", answer: "Ha aperto uno studio a Firenze.", altAnswers: ["Lei ha aperto uno studio a Firenze."], explanation: "\"Aprire\" takes \"avere\": \"aperto\" doesn't agree." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He died in 2010.", answer: "È morto nel 2010.", altAnswers: ["Lui è morto nel 2010."], explanation: "\"Morire\" → \"morto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My mother [became] a teacher.", sentence: "Mia madre ___ insegnante.", answer: "è diventata", explanation: "\"Diventata\" agrees with \"madre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My parents [moved] to Milan in 1990.", sentence: "I miei genitori ___ a Milano nel 1990.", answer: "si sono trasferiti", explanation: "Mixed couple: \"si sono trasferiti\"." },
      { type: "word-order", prompt: "Put the words in order to say: She lived in Naples for twenty years.", words: ["Ha", "vissuto", "a", "Napoli", "per", "vent'anni."], translation: "She lived in Naples for twenty years.", explanation: "\"Ha vissuto\": avere, no agreement." },
      { type: "multiple-choice", question: "My grandmother was born in 1945. Which is right?", options: ["Mia nonna è nata nel 1945.", "Mia nonna è nato nel 1945.", "Mia nonna ha nata nel 1945.", "Mia nonna è nata in 1945."], correctIndex: 0, explanation: "\"Nata\" + \"nel\" + year." },
      { type: "dictation", audio: "È nato a Bari, si è trasferito a Torino e si è sposato.", explanation: "Three life events." },
      { type: "speak", text: "Mia nonna è nata a Cagliari nel 1950. Si è sposata nel 1972 e si è trasferita a Roma. Ha lavorato in una scuola per trent'anni.", prompt: "Tell your grandmother's story: She was born in Cagliari in 1950. She got married in 1972 and moved to Rome. She worked in a school for thirty years.", tip: "Years: millenovecentocinquanta, millenovecentosettantadue.", explanation: "Essere verbs agree; \"ha lavorato\" doesn't." },
    ],
  },
  {
    slug: "a2-sound-endings-in-past",
    level: "IT-A2",
    number: 11,
    title: "Sounds: Hearing the Ending",
    summary: "Listen for -o, -a, -i and -e on participles to know who did it, and write what you hear.",
    duration: "15 min",
    sections: [
      {
        heading: "One vowel, four meanings",
        body: [
          "\"Andato, andata, andati, andate\": only the last vowel changes, and it tells you who went. Italian final vowels are pure and clear, never swallowed as in English, so listen to the very end of the word.",
          "When the subject is dropped, the ending is your only clue: \"Sono partite ieri\" can only be a group of women.",
        ],
        examples: [
          { es: "È andato.", en: "He's gone." },
          { es: "È andata.", en: "She's gone." },
          { es: "Sono andati.", en: "They've gone. (men or mixed)" },
          { es: "Sono andate.", en: "They've gone. (women)" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "È andata.", question: "Who has gone?", options: ["she", "he", "they (men or mixed)", "they (women)"], correctIndex: 0, explanation: "\"-a\": one woman." },
          { type: "listen-choose", audio: "Sono partite ieri.", question: "Who left yesterday?", options: ["a group of women", "a group of men", "one woman", "I (a woman)"], correctIndex: 0, explanation: "\"-e\": women only." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's gone.", answer: "È andata.", altAnswers: ["Lei è andata.", "Se n'è andata."], explanation: "\"-a\" for one woman." },
        ],
      },
      {
        heading: "Sono: I or they?",
        body: [
          "\"Sono\" is both I am and they are, so \"Sono uscito\" (I, a man) and \"Sono usciti\" (they) differ by one vowel. Say final -o and -i clearly in your own speech: listeners rely on it.",
        ],
        examples: [
          { es: "Sono uscito.", en: "I went out. (a man)" },
          { es: "Sono usciti.", en: "They went out." },
          { es: "Sono arrivata.", en: "I've arrived. (a woman)" },
          { es: "Sono arrivate.", en: "They've arrived. (women)" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Sono usciti.", question: "Who went out?", options: ["they", "I (a man)", "I (a woman)", "he"], correctIndex: 0, explanation: "\"-i\": plural, so \"sono\" means they are." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've arrived. (a woman speaking)", answer: "Sono arrivata.", altAnswers: ["Io sono arrivata."], explanation: "\"-a\": one woman, so \"sono\" means I am." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They've arrived. (women)", answer: "Sono arrivate.", altAnswers: ["Loro sono arrivate."], explanation: "\"-e\" for women." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I went out. (a man speaking)", answer: "Sono uscito.", altAnswers: ["Io sono uscito."], explanation: "\"-o\": one man." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They went out.", answer: "Sono usciti.", altAnswers: ["Sono uscite.", "Loro sono usciti.", "Loro sono uscite."], explanation: "\"-i\" or \"-e\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's come back.", answer: "È tornato.", altAnswers: ["Lui è tornato."], explanation: "\"-o\": one man." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The girls [have left].", sentence: "Le ragazze ___.", answer: "sono partite", explanation: "\"-e\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Anna and Luca [stayed] at home.", sentence: "Anna e Luca ___ a casa.", answer: "sono rimasti", altAnswers: ["sono restati", "sono stati"], explanation: "Mixed: \"-i\"." },
      { type: "listen-choose", audio: "Sono tornati tardi.", question: "Who came back late?", options: ["they (men or mixed)", "I (a man)", "they (women)", "she"], correctIndex: 0, explanation: "\"-i\": plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She fell.", answer: "È caduta.", altAnswers: ["Lei è caduta."], explanation: "\"Cadere\" takes \"essere\"; \"-a\" for one woman." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Elena and Sofia [got married] in June.", sentence: "Elena e Sofia ___ a giugno.", answer: "si sono sposate", explanation: "Two women: \"-e\"." },
      { type: "dictation", audio: "Sono andate al mare e sono tornate stanche.", explanation: "\"-e\" on participles and adjective." },
      { type: "dictation", audio: "È arrivato Marco, ma Giulia è rimasta a casa.", explanation: "\"-o\" for Marco, \"-a\" for Giulia." },
      { type: "speak", text: "È andato, è andata, sono andati, sono andate.", prompt: "Say the four forms, making each final vowel clear.", tip: "Pure vowels: no glide at the end, an-DA-to, an-DA-ta.", explanation: "The four endings of \"andato\"." },
    ],
  },
];

export const IT_A2_U02_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a message to an Italian friend about a recent trip or a night out. Say when you left or went out, where you went, who came with you, one thing you did that was reflexive (ci siamo divertiti, mi sono perso / persa...) and what you liked or didn't like (mi è piaciuto / piaciuta / piaciuti / piaciute).",
  minWords: 40,
  maxWords: 100,
  rubric: [
    "Uses essere with movement and change verbs (sono partito / partita, siamo arrivati) and never ho andato",
    "Makes the participle agree with the subject (-o, -a, -i, -e), including mixed groups in -i",
    "Uses at least one reflexive verb in the past with essere (mi sono alzato, ci siamo divertiti)",
    "Uses piacere in the past agreeing with the thing liked (mi è piaciuta la città, mi sono piaciuti i musei)",
  ],
  modelAnswer: "Ciao Elena! Sabato sono partita per Bologna con Chiara e Matteo. Siamo arrivati alle dieci e siamo andati subito in centro. Ci siamo persi due volte, ma ci siamo divertiti tantissimo! La sera siamo usciti e abbiamo mangiato i tortellini. Mi è piaciuta molto la città e mi sono piaciuti i portici, ma non mi è piaciuto il traffico. Siamo tornati domenica sera. Un abbraccio!",
  explanation: "\"Sono partita\" agrees with the writer, a woman; \"siamo arrivati\", \"siamo andati\", \"siamo usciti\" and \"siamo tornati\" take \"-i\" because the group is mixed. \"Ci siamo persi\" and \"ci siamo divertiti\" are reflexives with essere. \"Mi è piaciuta la città\", \"mi sono piaciuti i portici\" and \"non mi è piaciuto il traffico\" agree with what was liked. \"Abbiamo mangiato\" keeps avere and no agreement.",
};
