// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u22.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 22: Relative Pronouns in Full. Il quale, il cui, quello
// che / ciò che, chi, quanto, dove vs in cui.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U22: Lesson[] = [
  {
    slug: "b1-il-quale",
    level: "IT-B1",
    number: 1,
    title: "Il Quale: The Formal Relative",
    summary: "Use il quale, la quale, i quali, le quali as formal alternatives to che and cui: la persona con la quale ho parlato, il motivo per il quale, il quale for clarity.",
    duration: "17 min",
    sections: [
      {
        heading: "Con la quale, per il quale",
        body: [
          "After a preposition you already know \"cui\": \"la persona con cui ho parlato\". In more formal Italian, \"cui\" can be replaced by \"il quale\", \"la quale\", \"i quali\", \"le quali\", agreeing with the noun before it: \"la persona con la quale ho parlato\", \"il motivo per il quale ti scrivo\".",
          "The article combines with the preposition as usual: \"del quale\", \"alla quale\", \"nei quali\", \"sulle quali\".",
          "Why bother, when \"cui\" works? \"Il quale\" is the voice of letters, reports, news and official notices, and its gender and number help the reader in long sentences. In conversation \"cui\" is far more common. The typical slip is dropping the article: \"con quale\" is the question word (\"Con quale treno arrivi?\"); the relative is always \"con la quale\".",
        ],
        examples: [
          { es: "La persona con la quale ho parlato era molto gentile.", en: "The person I spoke to was very kind." },
          { es: "Il motivo per il quale ti scrivo è semplice.", en: "The reason I'm writing to you is simple." },
          { es: "Gli amici ai quali ho chiesto aiuto non hanno risposto.", en: "The friends I asked for help didn't reply." },
          { es: "La città nella quale sono nato è piccola.", en: "The town I was born in is small." },
          { es: "È un argomento del quale si parla poco.", en: "It's a subject people rarely talk about." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "The reason I'm writing to you is simple.", answer: "Il motivo per il quale ti scrivo è semplice.", altAnswers: ["Il motivo per cui ti scrivo è semplice."], explanation: "\"Per il quale\" = \"per cui\"." },
          { type: "multiple-choice", question: "Complete: \"Gli amici ___ ho chiesto aiuto non hanno risposto.\"", options: ["ai quali", "al quale", "alle quali", "i quali"], correctIndex: 0, explanation: "\"Amici\" is masculine plural; \"chiedere a\": \"ai quali\"." },
        ],
      },
      {
        heading: "Il quale for clarity",
        body: [
          "\"Il quale\" can also replace \"che\" as a subject, but only after a comma, in writing, and mainly to avoid confusion. \"La sorella di Marco, che vive a Roma\" could mean Marco lives in Rome; \"La sorella di Marco, la quale vive a Roma\" can only mean the sister.",
          "Never use \"il quale\" as a direct object: not \"il libro il quale ho letto\" but \"il libro che ho letto\".",
        ],
        examples: [
          { es: "Ho parlato con la sorella di Marco, la quale vive a Roma.", en: "I spoke to Marco's sister, who lives in Rome." },
          { es: "Ho incontrato il padre di Anna, il quale mi ha invitato a cena.", en: "I met Anna's father, who invited me to dinner." },
          { es: "Il libro che ho letto era bellissimo.", en: "The book I read was wonderful." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I spoke to Marco's sister, who lives in Rome.", answer: "Ho parlato con la sorella di Marco, la quale vive a Roma.", altAnswers: ["Ho parlato con la sorella di Marco, che vive a Roma."], explanation: "\"La quale\" makes it clear it's the sister; \"che\" is grammatical too, just less clear." },
          { type: "listen-choose", audio: "Ho incontrato il padre di Anna, il quale mi ha invitato a cena.", question: "Who invited the speaker to dinner?", options: ["Anna's father", "Anna", "Anna's mother", "Nobody"], correctIndex: 0, explanation: "\"Il quale\" is masculine: the father." },
        ],
      },
      {
        heading: "Dove or in cui?",
        body: [
          "For places, \"dove\", \"in cui\" and \"nel quale\" all work: \"la casa dove abito\", \"la casa in cui abito\", \"la casa nella quale abito\". \"Dove\" is the most conversational.",
          "For time, use \"in cui\", not \"dove\": \"il giorno in cui ci siamo conosciuti\" (the day we met).",
        ],
        examples: [
          { es: "Questa è la casa dove sono cresciuto.", en: "This is the house where I grew up." },
          { es: "Questa è la casa in cui sono cresciuto.", en: "This is the house in which I grew up." },
          { es: "Ricordo il giorno in cui ci siamo conosciuti.", en: "I remember the day we met." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I remember the day we met.", answer: "Ricordo il giorno in cui ci siamo conosciuti.", altAnswers: ["Mi ricordo il giorno in cui ci siamo conosciuti.", "Ricordo il giorno nel quale ci siamo conosciuti."], explanation: "Time: \"in cui\", not \"dove\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "The person I spoke to was very kind.", answer: "La persona con la quale ho parlato era molto gentile.", altAnswers: ["La persona con cui ho parlato era molto gentile."], explanation: "\"Con la quale\": feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "The town I was born in is small.", answer: "La città nella quale sono nato è piccola.", altAnswers: ["La città nella quale sono nata è piccola.", "La città in cui sono nato è piccola.", "La città in cui sono nata è piccola.", "La città dove sono nato è piccola.", "La città dove sono nata è piccola."], explanation: "\"In\" + \"la quale\" = \"nella quale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I met Anna's father, who invited me to dinner.", answer: "Ho incontrato il padre di Anna, il quale mi ha invitato a cena.", altAnswers: ["Ho incontrato il padre di Anna, il quale mi ha invitata a cena."], explanation: "\"Il quale\" for clarity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This is the house where I grew up.", answer: "Questa è la casa dove sono cresciuto.", altAnswers: ["Questa è la casa dove sono cresciuta.", "Questa è la casa in cui sono cresciuto.", "Questa è la casa in cui sono cresciuta."], explanation: "\"Dove\" or \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, using il quale.", source: "These are the problems we talked about.", answer: "Questi sono i problemi dei quali abbiamo parlato.", altAnswers: ["Questi sono i problemi di cui abbiamo parlato."], explanation: "\"Di\" + \"i quali\" = \"dei quali\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, using il quale.", en: "The colleague [I work with] is from Turin.", sentence: "La collega ___ lavoro è di Torino.", answer: "con la quale", altAnswers: ["con cui"], explanation: "Feminine singular: \"la quale\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, using il quale.", en: "The shelves [on which] you put the books.", sentence: "Gli scaffali ___ hai messo i libri.", answer: "sui quali", altAnswers: ["su cui"], explanation: "\"Su\" + \"i quali\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's a subject people rarely talk about.", words: ["È", "un", "argomento", "del", "quale", "si", "parla", "poco."], translation: "It's a subject people rarely talk about.", explanation: "\"Parlare di\": \"del quale\"." },
      { type: "multiple-choice", question: "Which sentence is wrong?", options: ["Il film il quale ho visto era noioso.", "Il film che ho visto era noioso.", "Il film del quale ti ho parlato era noioso.", "Il film di cui ti ho parlato era noioso."], correctIndex: 0, explanation: "\"Il quale\" can't be a direct object." },
      { type: "multiple-choice", question: "Which means: the year I moved to Milan?", options: ["l'anno in cui mi sono trasferito a Milano", "l'anno dove mi sono trasferito a Milano", "l'anno che quale mi sono trasferito a Milano", "l'anno il quale mi sono trasferito a Milano"], correctIndex: 0, explanation: "Time: \"in cui\"." },
      { type: "dictation", audio: "Il motivo per il quale sono qui è molto semplice.", explanation: "\"Per il quale\"." },
      { type: "speak", text: "Vorrei ringraziare tutte le persone con le quali ho lavorato in questi anni.", prompt: "Say it in Italian: I'd like to thank all the people I've worked with over these years.", tip: "\"Le quali\": le QUA-li.", explanation: "Formal \"con le quali\"." },
    ],
  },
  {
    slug: "b1-il-cui",
    level: "IT-B1",
    number: 2,
    title: "Whose: Il Cui",
    summary: "Say whose with il cui, la cui, i cui, le cui: lo scrittore il cui romanzo ho letto, la ragazza la cui madre è medico; the article agrees with the thing owned.",
    duration: "17 min",
    sections: [
      {
        heading: "La ragazza la cui madre è medico",
        body: [
          "Whose is article + \"cui\" + noun: \"la ragazza la cui madre è medico\" (the girl whose mother is a doctor), \"lo scrittore il cui romanzo ho letto\" (the writer whose novel I read).",
          "The article agrees with the thing owned, not the owner: \"l'uomo la cui moglie\", \"la donna il cui marito\", \"il ristorante i cui piatti\", \"la città le cui strade\".",
          "A preposition goes in front of the whole group: \"l'amico al cui matrimonio sono andato\" (the friend whose wedding I went to), \"la collega sulla cui scrivania ho lasciato il pacco\". Never copy spoken English the girl that her mother: \"la ragazza che sua madre\" is a classic error, and so is \"di cui\" for whose (\"la ragazza di cui la madre\").",
        ],
        examples: [
          { es: "Ho conosciuto una ragazza la cui madre è medico.", en: "I met a girl whose mother is a doctor." },
          { es: "È uno scrittore il cui romanzo ho letto due volte.", en: "He's a writer whose novel I've read twice." },
          { es: "Ho un vicino la cui figlia suona il violino.", en: "I have a neighbor whose daughter plays the violin." },
          { es: "È una città le cui strade sono strettissime.", en: "It's a city whose streets are very narrow." },
          { es: "Conosco un ristorante i cui piatti sono tutti vegetariani.", en: "I know a restaurant whose dishes are all vegetarian." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I met a girl whose mother is a doctor.", answer: "Ho conosciuto una ragazza la cui madre è medico.", altAnswers: ["Ho conosciuto una ragazza la cui mamma è medico.", "Ho conosciuto una ragazza la cui madre è dottoressa."], explanation: "\"La cui\" agrees with \"madre\"." },
          { type: "multiple-choice", question: "Complete: \"Ho un vicino ___ figlia suona il violino.\"", options: ["la cui", "il cui", "i cui", "che sua"], correctIndex: 0, explanation: "Agrees with \"figlia\", not \"vicino\"." },
        ],
      },
      {
        heading: "Only one article",
        body: [
          "The article comes before \"cui\", never after: \"il cui libro\", not \"il cui il libro\" or \"cui il libro\".",
          "\"Il cui\" sounds formal; in conversation many people rephrase: \"una ragazza che ha la madre medico\". But in writing, \"il cui\" is the standard.",
        ],
        examples: [
          { es: "Il pittore il cui quadro abbiamo visto era fiammingo.", en: "The painter whose picture we saw was Flemish." },
          { es: "Una ragazza che ha la madre medico.", en: "A girl whose mother is a doctor. (spoken)" },
          { es: "L'azienda il cui fondatore è morto ieri.", en: "The company whose founder died yesterday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The painter whose picture we saw was Flemish.", answer: "Il pittore il cui quadro abbiamo visto era fiammingo.", altAnswers: ["Il pittore di cui abbiamo visto il quadro era fiammingo."], explanation: "One article: \"il cui quadro\"." },
          { type: "listen-choose", audio: "L'azienda il cui fondatore è morto ieri ha chiuso per lutto.", question: "Who died yesterday?", options: ["The company's founder", "A customer", "A worker", "The founder's son"], correctIndex: 0, explanation: "\"Il cui fondatore\" = whose founder." },
        ],
      },
      {
        heading: "Di cui or il cui?",
        body: [
          "\"Di cui\" means of which, about which: \"il libro di cui ti ho parlato\" (the book I told you about). \"Il cui\" means whose: \"il libro il cui autore è famoso\" (the book whose author is famous). Different jobs.",
        ],
        examples: [
          { es: "È il libro di cui ti ho parlato.", en: "It's the book I told you about." },
          { es: "È il libro il cui autore ha vinto il premio.", en: "It's the book whose author won the prize." },
          { es: "Ecco il collega di cui mi fido.", en: "Here's the colleague I trust." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's the book [whose author] won the prize.", sentence: "È il libro ___ ha vinto il premio.", answer: "il cui autore", explanation: "Whose: \"il cui\" + noun." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the book I told you about.", answer: "È il libro di cui ti ho parlato.", altAnswers: ["È il libro del quale ti ho parlato."], explanation: "\"Parlare di\": \"di cui\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's a writer whose novel I've read twice.", answer: "È uno scrittore il cui romanzo ho letto due volte.", explanation: "\"Il cui romanzo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a city whose streets are very narrow.", answer: "È una città le cui strade sono strettissime.", altAnswers: ["È una città le cui strade sono molto strette.", "È una città le cui vie sono strettissime."], explanation: "\"Le cui strade\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know a restaurant whose dishes are all vegetarian.", answer: "Conosco un ristorante i cui piatti sono tutti vegetariani.", explanation: "\"I cui piatti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a neighbor whose daughter plays the violin.", answer: "Ho un vicino la cui figlia suona il violino.", altAnswers: ["Ho una vicina la cui figlia suona il violino."], explanation: "\"La cui figlia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The man whose car was stolen called the police.", answer: "L'uomo la cui macchina è stata rubata ha chiamato la polizia.", altAnswers: ["L'uomo la cui auto è stata rubata ha chiamato la polizia."], explanation: "\"La cui macchina\" + passive (Unit 20)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The woman [whose husband] is a chef.", sentence: "La donna ___ fa lo chef.", answer: "il cui marito", explanation: "Agrees with \"marito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A singer [whose songs] everyone knows.", sentence: "Un cantante ___ tutti conoscono.", answer: "le cui canzoni", explanation: "Agrees with \"canzoni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The students [whose names] are on the list.", sentence: "Gli studenti ___ sono sulla lista.", answer: "i cui nomi", explanation: "Agrees with \"nomi\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's a village whose name I can't remember.", words: ["È", "un", "paese", "il", "cui", "nome", "non", "ricordo."], translation: "It's a village whose name I can't remember.", explanation: "\"Il cui nome\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["l'attrice il cui film ha vinto", "l'attrice la cui film ha vinto", "l'attrice il cui il film ha vinto", "l'attrice che il suo film ha vinto"], correctIndex: 0, explanation: "\"Il\" agrees with \"film\"." },
      { type: "dictation", audio: "È un artista le cui opere sono in tutto il mondo.", explanation: "\"Le cui opere\"." },
      { type: "speak", text: "Ho un'amica il cui fratello vive in Australia e la cui madre insegna italiano.", prompt: "Say it in Italian: I have a friend whose brother lives in Australia and whose mother teaches Italian.", tip: "\"Cui\": one syllable, KWEE.", explanation: "\"Il cui\" and \"la cui\", agreeing with the thing owned." },
    ],
  },
  {
    slug: "b1-quello-che-cio-che",
    level: "IT-B1",
    number: 3,
    title: "What: Quello Che, Ciò Che",
    summary: "Say what (the thing that) with quello che and ciò che: quello che dici è vero, non capisco ciò che vuoi, tutto quello che ho, tutto quanto.",
    duration: "17 min",
    sections: [
      {
        heading: "Quello che dici è vero",
        body: [
          "English what in the middle of a sentence (the thing that) is \"quello che\" or \"ciò che\": \"Quello che dici è vero\" (what you're saying is true), \"Non capisco ciò che vuoi\" (I don't understand what you want). \"Ciò che\" is a little more formal; \"quel che\" is a common short form.",
          "Don't use \"cosa\" or \"che cosa\" here: those are for questions, direct or indirect (\"Cosa vuoi?\", \"Dimmi cosa vuoi\").",
          "When the verb needs a preposition, it goes before \"cui\": \"quello di cui hai bisogno\" (what you need, from \"avere bisogno di\"), \"quello a cui pensavo\" (what I was thinking about). English speakers often write \"quello che hai bisogno\", dropping the \"di\".",
        ],
        examples: [
          { es: "Quello che dici è vero.", en: "What you're saying is true." },
          { es: "Non capisco ciò che vuoi.", en: "I don't understand what you want." },
          { es: "Fai quello che vuoi.", en: "Do what you like." },
          { es: "Ciò che conta è la salute.", en: "What matters is your health." },
          { es: "Ho fatto quel che potevo.", en: "I did what I could." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What you're saying is true. (to a friend)", answer: "Quello che dici è vero.", altAnswers: ["Ciò che dici è vero.", "Quel che dici è vero."], explanation: "\"Quello che\" = what (the thing that)." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Ciò che conta è la salute.", "Cosa conta è la salute.", "Che conta è la salute.", "Il quale conta è la salute."], correctIndex: 0, explanation: "Not a question: \"ciò che\" or \"quello che\"." },
        ],
      },
      {
        heading: "Tutto quello che",
        body: [
          "Everything that, all that = \"tutto quello che\" or \"tutto ciò che\": \"Ti dirò tutto quello che so\", \"Hai tutto ciò che ti serve?\". Never just \"tutto che\".",
          "\"Tutto quanto\" means absolutely everything: \"Ho mangiato tutto quanto\". And \"quanto\" alone can mean what, as much as: \"Per quanto ne so\" (as far as I know).",
        ],
        examples: [
          { es: "Ti dirò tutto quello che so.", en: "I'll tell you everything I know." },
          { es: "Hai tutto ciò che ti serve?", en: "Have you got everything you need?" },
          { es: "Ho mangiato tutto quanto.", en: "I ate absolutely everything." },
          { es: "Per quanto ne so, arriva domani.", en: "As far as I know, she's arriving tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll tell you everything I know. (to a friend)", answer: "Ti dirò tutto quello che so.", altAnswers: ["Ti dirò tutto ciò che so.", "Ti dico tutto quello che so."], explanation: "\"Tutto quello che\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[As far as I know], she's arriving tomorrow.", sentence: "___, arriva domani.", answer: "Per quanto ne so", explanation: "Fixed phrase." },
          { type: "listen-choose", audio: "Ho mangiato tutto quanto.", question: "How much did the speaker eat?", options: ["Everything", "Only a little", "Half", "Nothing"], correctIndex: 0, explanation: "\"Tutto quanto\" = absolutely everything." },
        ],
      },
      {
        heading: "Il che: which, for a whole idea",
        body: [
          "After a comma, \"il che\" or \"cosa che\" refers to the whole previous idea: \"Ha smesso di fumare, il che mi fa piacere\" (he's stopped smoking, which pleases me).",
        ],
        examples: [
          { es: "Ha smesso di fumare, il che mi fa molto piacere.", en: "He's stopped smoking, which makes me very happy." },
          { es: "Non ha chiamato, cosa che mi preoccupa.", en: "She hasn't called, which worries me." },
          { es: "Il treno era in ritardo, il che succede spesso.", en: "The train was late, which happens often." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She hasn't called, which worries me.", answer: "Non ha chiamato, cosa che mi preoccupa.", altAnswers: ["Non ha chiamato, il che mi preoccupa.", "Non ha telefonato, cosa che mi preoccupa.", "Non ha telefonato, il che mi preoccupa."], explanation: "\"Cosa che\" / \"il che\" = which (the whole idea)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't understand what you want. (to a friend)", answer: "Non capisco quello che vuoi.", altAnswers: ["Non capisco ciò che vuoi.", "Non capisco cosa vuoi.", "Non capisco che cosa vuoi."], explanation: "\"Quello che\"; an indirect question with \"cosa\" also works here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do what you like. (to a friend)", answer: "Fai quello che vuoi.", altAnswers: ["Fa' quello che vuoi.", "Fai ciò che vuoi.", "Fai come vuoi."], explanation: "\"Quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What matters is your health.", answer: "Ciò che conta è la salute.", altAnswers: ["Quello che conta è la salute."], explanation: "\"Ciò che\" as subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I did what I could.", answer: "Ho fatto quello che potevo.", altAnswers: ["Ho fatto quel che potevo.", "Ho fatto ciò che potevo.", "Ho fatto quello che ho potuto."], explanation: "\"Quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got everything you need? (to a friend)", answer: "Hai tutto quello che ti serve?", altAnswers: ["Hai tutto ciò che ti serve?", "Hai tutto quello di cui hai bisogno?"], explanation: "\"Tutto quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's stopped smoking, which makes me very happy.", answer: "Ha smesso di fumare, il che mi fa molto piacere.", altAnswers: ["Ha smesso di fumare, cosa che mi fa molto piacere."], explanation: "\"Il che\" = which (the whole idea)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What I want] is a vacation.", sentence: "___ è una vacanza.", answer: "Quello che voglio", altAnswers: ["Ciò che voglio", "Quel che voglio"], explanation: "\"Quello che\" as subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Thank you for [everything you've done].", sentence: "Grazie per ___.", answer: "tutto quello che hai fatto", altAnswers: ["tutto ciò che hai fatto"], explanation: "\"Tutto quello che\"." },
      { type: "word-order", prompt: "Put the words in order to say: I believe what you say.", words: ["Credo", "a", "quello", "che", "dici."], translation: "I believe what you say.", explanation: "\"Credere a\" + \"quello che\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Ti ho detto tutto quello che so.", "Ti ho detto tutto che so.", "Ti ho detto tutto cosa so.", "Ti ho detto tutto il quale so."], correctIndex: 0, explanation: "\"Tutto quello che\"." },
      { type: "dictation", audio: "Non è sempre facile dire quello che si pensa.", explanation: "\"Quello che\" + impersonal \"si\"." },
      { type: "speak", text: "Quello che mi piace di questa città è che c'è sempre qualcosa da fare.", prompt: "Say it in Italian: What I like about this city is that there's always something to do.", tip: "\"Quello che mi piace\": run it together, QUEL-lo-che.", explanation: "\"Quello che\" + \"da fare\" (Unit 18)." },
    ],
  },
  {
    slug: "b1-chi-in-full",
    level: "IT-B1",
    number: 4,
    title: "Chi: Whoever, The One Who",
    summary: "Use chi for whoever and the one who: chi vuole venire, venga; c'è chi dice che ...; chi dorme non piglia pesci; and chi in questions: da chi l'hai saputo?",
    duration: "17 min",
    sections: [
      {
        heading: "Chi vuole, può venire",
        body: [
          "\"Chi\" can mean whoever, anyone who, those who: \"Chi vuole, può venire\" (anyone who wants to can come), \"Chi ha finito può uscire\". It's always followed by a singular verb, even when it means many people.",
          "Don't confuse it with \"che\", which needs a noun before it: \"la gente che vuole venire\" but \"chi vuole venire\".",
          "\"Chi\" already contains its antecedent (it means the person who), so never add one: \"quello chi\" and \"la persona chi\" are wrong. Adjectives after it stay masculine singular: \"Chi è stanco può riposarsi\". For whoever at all, use \"chiunque\", often with the subjunctive: \"Chiunque sia, digli che non ci sono\" (whoever it is, tell them I'm not in).",
        ],
        examples: [
          { es: "Chi vuole, può venire.", en: "Anyone who wants to can come." },
          { es: "Chi ha finito può uscire.", en: "Those who have finished can leave." },
          { es: "Chi vuole venire, venga.", en: "Whoever wants to come is welcome." },
          { es: "Chi arriva tardi non trova posto.", en: "People who arrive late don't find a seat." },
          { es: "Ringrazio chi mi ha aiutato.", en: "I thank everyone who helped me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Those who have finished can leave.", answer: "Chi ha finito può uscire.", altAnswers: ["Chi ha finito può andare.", "Chi ha finito può andare via."], explanation: "\"Chi\" + singular verb." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Chi vuole, può venire.", "Che vuole, può venire.", "Chi vogliono, possono venire.", "Il quale vuole, può venire."], correctIndex: 0, explanation: "Whoever: \"chi\" + singular." },
        ],
      },
      {
        heading: "C'è chi ...",
        body: [
          "\"C'è chi\" means some people: \"C'è chi dice che domani piove\" (some people say it'll rain tomorrow). \"C'è chi ... e chi ...\" contrasts groups: \"C'è chi preferisce il mare e chi la montagna\".",
          "Proverbs love \"chi\": \"Chi dorme non piglia pesci\" (the early bird catches the worm, literally he who sleeps catches no fish), \"Chi cerca trova\" (seek and you shall find).",
        ],
        examples: [
          { es: "C'è chi dice che domani piove.", en: "Some people say it'll rain tomorrow." },
          { es: "C'è chi preferisce il mare e chi la montagna.", en: "Some prefer the seaside and some the mountains." },
          { es: "Chi dorme non piglia pesci.", en: "The early bird catches the worm." },
          { es: "Chi cerca trova.", en: "Seek and you shall find." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some prefer the seaside and some the mountains.", answer: "C'è chi preferisce il mare e chi la montagna.", altAnswers: ["C'è chi preferisce il mare e chi preferisce la montagna."], explanation: "\"C'è chi ... e chi ...\"." },
          { type: "listen-choose", audio: "Chi dorme non piglia pesci.", question: "What does the proverb mean?", options: ["You have to make an effort to get results.", "Fishermen sleep a lot.", "Don't eat fish before bed.", "Sleep is more important than food."], correctIndex: 0, explanation: "Sleepers catch no fish." },
        ],
      },
      {
        heading: "Chi in questions",
        body: [
          "In questions, \"chi\" means who, with prepositions in front: \"Da chi l'hai saputo?\" (who did you hear it from?), \"Con chi esci stasera?\", \"Di chi è questa borsa?\" (whose bag is this?).",
          "So whose? in a question is \"di chi\", but whose in a statement is \"il cui\".",
        ],
        examples: [
          { es: "Da chi l'hai saputo?", en: "Who did you hear it from?" },
          { es: "Di chi è questa borsa?", en: "Whose bag is this?" },
          { es: "Non so con chi esce stasera.", en: "I don't know who she's going out with tonight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whose bag is this?", answer: "Di chi è questa borsa?", explanation: "Question: \"di chi\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Who did you hear it from]? (to a friend)", sentence: "___?", answer: "Da chi l'hai saputo", explanation: "\"Sapere da\" + \"chi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anyone who wants to can come.", answer: "Chi vuole, può venire.", altAnswers: ["Chi vuole può venire."], explanation: "\"Chi\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thank everyone who helped me.", answer: "Ringrazio chi mi ha aiutato.", altAnswers: ["Ringrazio tutti quelli che mi hanno aiutato.", "Ringrazio tutti coloro che mi hanno aiutato."], explanation: "\"Chi\" = those who." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some people say it'll rain tomorrow.", answer: "C'è chi dice che domani piove.", altAnswers: ["C'è chi dice che domani pioverà."], explanation: "\"C'è chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People who arrive late don't find a seat.", answer: "Chi arriva tardi non trova posto.", altAnswers: ["Chi arriva in ritardo non trova posto."], explanation: "Singular verbs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know who she's going out with tonight.", answer: "Non so con chi esce stasera.", explanation: "Indirect question: \"con chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Seek and you shall find.", answer: "Chi cerca trova.", explanation: "Proverb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Whoever] breaks it pays for it.", sentence: "___ rompe paga.", answer: "Chi", explanation: "Shop sign: \"Chi rompe paga\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Those who don't want to come] can stay at home.", sentence: "___ può restare a casa.", answer: "Chi non vuole venire", explanation: "\"Chi\" + singular." },
      { type: "word-order", prompt: "Put the words in order to say: Some people work and some people watch.", words: ["C'è", "chi", "lavora", "e", "chi", "guarda."], translation: "Some people work and some people watch.", explanation: "\"C'è chi ... e chi ...\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Chi studia passa l'esame.", "Chi studiano passano l'esame.", "Che studia passa l'esame.", "Chi che studia passa l'esame."], correctIndex: 0, explanation: "\"Chi\" + singular verb." },
      { type: "dictation", audio: "Chi ha bisogno di aiuto può chiamare questo numero.", explanation: "\"Chi\" + singular." },
      { type: "speak", text: "Chi vuole venire alla festa è il benvenuto: c'è chi porta da bere e chi porta da mangiare.", prompt: "Say it in Italian: Anyone who wants to come to the party is welcome: some bring drinks and some bring food.", tip: "\"Benvenuto\": one word, ben-ve-NU-to.", explanation: "\"Chi\" and \"c'è chi ... e chi ...\"." },
    ],
  },
  {
    slug: "b1-drill-relatives-full",
    level: "IT-B1",
    number: 5,
    title: "Drill: All the Relatives",
    summary: "High-repetition production joining sentences with che, cui, il quale, il cui and dove.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Join the sentences",
        body: [
          "Subject or direct object: \"che\". After a preposition: \"cui\" or \"il quale\" (agreeing). Whose: article + \"cui\" + noun, the article agreeing with the noun. Place: \"dove\" or \"in cui\"; time: \"in cui\".",
        ],
        examples: [
          { es: "Ho un collega. Il collega parla cinese. → Ho un collega che parla cinese.", en: "I have a colleague who speaks Chinese." },
          { es: "È la ragazza. Esco con lei. → È la ragazza con cui esco.", en: "She's the girl I'm going out with." },
          { es: "È un museo. Le sue sale sono enormi. → È un museo le cui sale sono enormi.", en: "It's a museum whose rooms are huge." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's the girl I'm going out with.", answer: "È la ragazza con cui esco.", altAnswers: ["È la ragazza con la quale esco."], explanation: "\"Con cui\" / \"con la quale\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a museum whose rooms are huge.", answer: "È un museo le cui sale sono enormi.", explanation: "\"Le cui sale\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a colleague who speaks Chinese.", answer: "Ho un collega che parla cinese.", altAnswers: ["Ho una collega che parla cinese.", "Ho un collega che parla il cinese."], explanation: "Subject: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The film we saw was long.", answer: "Il film che abbiamo visto era lungo.", explanation: "Direct object: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The friend I'm traveling with is Spanish.", answer: "L'amico con cui viaggio è spagnolo.", altAnswers: ["L'amico con il quale viaggio è spagnolo.", "L'amica con cui viaggio è spagnola.", "L'amica con la quale viaggio è spagnola."], explanation: "After a preposition: \"cui\" or \"il quale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The company I work for is German.", answer: "L'azienda per cui lavoro è tedesca.", altAnswers: ["L'azienda per la quale lavoro è tedesca.", "La ditta per cui lavoro è tedesca."], explanation: "\"Per cui\" / \"per la quale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A teacher whose lessons are always interesting.", answer: "Un professore le cui lezioni sono sempre interessanti.", altAnswers: ["Una professoressa le cui lezioni sono sempre interessanti.", "Un insegnante le cui lezioni sono sempre interessanti."], explanation: "\"Le cui lezioni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The village where my grandparents live.", answer: "Il paese dove vivono i miei nonni.", altAnswers: ["Il paese in cui vivono i miei nonni.", "Il paese dove abitano i miei nonni.", "Il paese in cui abitano i miei nonni."], explanation: "Place: \"dove\" / \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The year my son was born.", answer: "L'anno in cui è nato mio figlio.", altAnswers: ["L'anno in cui mio figlio è nato.", "L'anno nel quale è nato mio figlio."], explanation: "Time: \"in cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The people I gave the tickets to.", answer: "Le persone a cui ho dato i biglietti.", altAnswers: ["Le persone alle quali ho dato i biglietti.", "Le persone cui ho dato i biglietti."], explanation: "\"A cui\" / \"alle quali\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, using il quale.", en: "The letter [in which] he explained everything.", sentence: "La lettera ___ spiegava tutto.", answer: "nella quale", altAnswers: ["in cui"], explanation: "\"In\" + \"la quale\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A friend [whose parents] are Brazilian.", sentence: "Un amico ___ sono brasiliani.", answer: "i cui genitori", explanation: "\"I cui genitori\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words, using il quale.", en: "The reasons [for which] I left.", sentence: "I motivi ___ sono partito.", answer: "per i quali", altAnswers: ["per cui"], explanation: "Masculine plural: \"i quali\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bridge [whose construction] lasted ten years.", sentence: "Il ponte ___ è durata dieci anni.", answer: "la cui costruzione", explanation: "\"La cui costruzione\"." },
      { type: "word-order", prompt: "Put the words in order to say: That's the shop where I bought the shoes.", words: ["Quello", "è", "il", "negozio", "dove", "ho", "comprato", "le", "scarpe."], translation: "That's the shop where I bought the shoes.", explanation: "Place: \"dove\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's a problem I've thought about a lot.", words: ["È", "un", "problema", "a", "cui", "ho", "pensato", "molto."], translation: "It's a problem I've thought about a lot.", explanation: "\"Pensare a\": \"a cui\"." },
      { type: "multiple-choice", question: "Complete: \"La signora ___ abbiamo affittato la casa è molto gentile.\"", options: ["dalla quale", "che", "la cui", "il quale"], correctIndex: 0, explanation: "\"Affittare da\": \"dalla quale\" (or \"da cui\")." },
      { type: "multiple-choice", question: "Complete: \"È un attore ___ film non ho mai visto.\"", options: ["i cui", "il cui", "che i suoi", "di cui i"], correctIndex: 0, explanation: "\"Film\" is plural here: \"i cui film\"." },
      { type: "listen-choose", audio: "È un paese le cui spiagge sono tra le più belle d'Italia.", question: "What's special about the village?", options: ["Its beaches", "Its churches", "Its people", "Its food"], correctIndex: 0, explanation: "\"Le cui spiagge\" = whose beaches." },
      { type: "dictation", audio: "Il ristorante in cui abbiamo cenato era molto caro.", explanation: "\"In cui\"." },
      { type: "speak", text: "Questa è la casa in cui sono cresciuto, e quello è il vicino la cui figlia era la mia migliore amica.", prompt: "Say it in Italian: This is the house where I grew up, and that's the neighbor whose daughter was my best friend. (a man speaking)", tip: "\"Cresciuto\": cre-SCIU-to, soft sc.", explanation: "\"In cui\" and \"la cui\"." },
    ],
  },
  {
    slug: "b1-drill-quello-che",
    level: "IT-B1",
    number: 6,
    title: "Drill: Quello Che and Chi",
    summary: "High-repetition production of what (quello che, ciò che, tutto quello che) and whoever (chi, c'è chi).",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "What and whoever",
        body: [
          "What (the thing that): \"quello che\", \"ciò che\". Everything that: \"tutto quello che\". Whoever, those who: \"chi\" + singular verb. Some people: \"c'è chi\". Questions keep \"cosa\" and \"chi\".",
        ],
        examples: [
          { es: "Non è quello che pensi.", en: "It's not what you think." },
          { es: "Chi trova un portafoglio deve portarlo alla polizia.", en: "Anyone who finds a wallet must take it to the police." },
          { es: "Prendi tutto quello che vuoi.", en: "Take whatever you want." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not what you think. (to a friend)", answer: "Non è quello che pensi.", altAnswers: ["Non è ciò che pensi.", "Non è come pensi."], explanation: "\"Quello che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take whatever you want. (to a friend)", answer: "Prendi tutto quello che vuoi.", altAnswers: ["Prendi quello che vuoi.", "Prendi tutto ciò che vuoi."], explanation: "\"Tutto quello che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Anyone who finds a wallet must take it to the police.", answer: "Chi trova un portafoglio deve portarlo alla polizia.", altAnswers: ["Chi trova un portafoglio lo deve portare alla polizia."], explanation: "\"Chi\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't remember what he said.", answer: "Non ricordo quello che ha detto.", altAnswers: ["Non mi ricordo quello che ha detto.", "Non ricordo cosa ha detto.", "Non ricordo ciò che ha detto.", "Non mi ricordo cosa ha detto."], explanation: "\"Quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What I need is a coffee.", answer: "Quello di cui ho bisogno è un caffè.", altAnswers: ["Ciò di cui ho bisogno è un caffè.", "Quello che mi serve è un caffè.", "Ciò che mi serve è un caffè."], explanation: "\"Avere bisogno di\": \"quello di cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever wins gets a prize.", answer: "Chi vince riceve un premio.", altAnswers: ["Chi vince avrà un premio."], explanation: "\"Chi\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some people never read.", answer: "C'è chi non legge mai.", explanation: "\"C'è chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll do everything I can.", answer: "Farò tutto quello che posso.", altAnswers: ["Farò tutto ciò che posso.", "Faccio tutto quello che posso.", "Farò tutto il possibile."], explanation: "\"Tutto quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who told you?", answer: "Chi te l'ha detto?", altAnswers: ["Chi te lo ha detto?", "Chi ti ha detto?"], explanation: "Question: \"chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What you're asking is impossible. (to a friend)", answer: "Quello che chiedi è impossibile.", altAnswers: ["Ciò che chiedi è impossibile.", "Quello che mi chiedi è impossibile."], explanation: "\"Quello che\" as subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Those who smoke] must go outside.", sentence: "___ deve uscire.", answer: "Chi fuma", explanation: "\"Chi\" + singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Thanks for [all you've done].", sentence: "Grazie di ___.", answer: "tutto quello che hai fatto", altAnswers: ["tutto ciò che hai fatto"], explanation: "\"Tutto quello che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What I like] about you is your honesty.", sentence: "___ di te è la tua sincerità.", answer: "Quello che mi piace", altAnswers: ["Ciò che mi piace"], explanation: "\"Quello che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Whose] is this umbrella?", sentence: "___ è questo ombrello?", answer: "Di chi", explanation: "Question: \"di chi\"." },
      { type: "word-order", prompt: "Put the words in order to say: He who laughs last laughs best.", words: ["Ride", "bene", "chi", "ride", "ultimo."], translation: "He who laughs last laughs best.", explanation: "Proverb with \"chi\"." },
      { type: "word-order", prompt: "Put the words in order to say: Tell me what happened.", words: ["Dimmi", "quello", "che", "è", "successo."], translation: "Tell me what happened.", explanation: "\"Quello che\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Chi ha fame può mangiare.", "Che ha fame può mangiare.", "Chi hanno fame possono mangiare.", "Quello che ha fame può mangiare."], correctIndex: 0, explanation: "Whoever: \"chi\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Non capisco quello che dici.", "Non capisco il quale dici.", "Non capisco chi dici.", "Non capisco tutto che dici."], correctIndex: 0, explanation: "\"Quello che\"." },
      { type: "listen-choose", audio: "C'è chi va al mare e chi resta in città.", question: "What does it say about people?", options: ["Some go to the seaside, some stay in town.", "Everyone goes to the seaside.", "Nobody stays in town.", "People who live in town go to the seaside."], correctIndex: 0, explanation: "\"C'è chi ... e chi ...\"." },
      { type: "dictation", audio: "Chi ha visto qualcosa deve dirlo alla polizia.", explanation: "\"Chi\" + singular." },
      { type: "speak", text: "Quello che conta non è vincere: chi partecipa ha già vinto.", prompt: "Say it in Italian: What matters isn't winning: whoever takes part has already won.", tip: "\"Partecipa\": par-TE-ci-pa, stress on the second syllable.", explanation: "\"Quello che\" and \"chi\"." },
    ],
  },
  {
    slug: "b1-error-hunt-relatives-full",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Relatives",
    summary: "Fix la ragazza che sua madre è medico, cosa dici è vero, il cui il libro and che vuole, può venire.",
    duration: "17 min",
    sections: [
      {
        heading: "Che sua madre",
        body: [
          "Each sentence below was written by a learner and has one mistake. \"La ragazza che sua madre è medico\" copies spoken English the girl that her mother ... Whose needs \"la cui\": \"La ragazza la cui madre è medico\".",
          "And \"il cui il libro\" has an extra article: just \"il cui libro\".",
        ],
        examples: [
          { es: "La ragazza la cui madre è medico.", en: "The girl whose mother is a doctor." },
          { es: "Lo scrittore il cui libro ho letto.", en: "The writer whose book I read." },
          { es: "Il cantante le cui canzoni conosco a memoria.", en: "The singer whose songs I know by heart." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"la ragazza che sua madre è medico\". Write it correctly: the girl whose mother is a doctor.", source: "the girl whose mother is a doctor", answer: "la ragazza la cui madre è medico", altAnswers: ["La ragazza la cui madre è medico."], explanation: "Whose: \"la cui\"." },
          { type: "fill-blank", prompt: "A learner wrote \"lo scrittore il cui il libro ho letto\". Write the Italian for the bold words.", en: "the writer [whose book] I read", sentence: "lo scrittore ___ ho letto", answer: "il cui libro", explanation: "One article only." },
        ],
      },
      {
        heading: "Cosa dici è vero",
        body: [
          "\"Cosa dici è vero\" uses a question word as a relative. It must be \"Quello che dici è vero\" or \"Ciò che dici è vero\". \"Tutto che\" is the same slip: \"tutto quello che\".",
        ],
        examples: [
          { es: "Quello che dici è vero.", en: "What you say is true." },
          { es: "Ho tutto quello che mi serve.", en: "I've got everything I need." },
          { es: "Cosa dici?", en: "What are you saying?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Cosa dici è vero\". Write it correctly: What you say is true.", source: "What you say is true. (to a friend)", answer: "Quello che dici è vero.", altAnswers: ["Ciò che dici è vero.", "Quel che dici è vero."], explanation: "Not a question: \"quello che\"." },
          { type: "listen-choose", audio: "Ho tutto quello che mi serve.", question: "What does the speaker say?", options: ["I've got everything I need.", "I need everything.", "I've got nothing I need.", "Everyone needs me."], correctIndex: 0, explanation: "\"Tutto quello che\"." },
        ],
      },
      {
        heading: "Che vuole, può venire",
        body: [
          "\"Che vuole, può venire\" has no noun for \"che\" to refer to. Without a noun, whoever is \"chi\": \"Chi vuole, può venire\". With a noun: \"Gli amici che vogliono, possono venire\".",
          "One more: \"il quale\" is never a direct object: \"il libro il quale ho comprato\" → \"il libro che ho comprato\".",
        ],
        examples: [
          { es: "Chi vuole, può venire.", en: "Anyone who wants to can come." },
          { es: "Gli amici che vogliono possono venire.", en: "The friends who want to can come." },
          { es: "Il libro che ho comprato è in inglese.", en: "The book I bought is in English." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Che vuole, può venire\". Write it correctly: Anyone who wants to can come.", source: "Anyone who wants to can come.", answer: "Chi vuole, può venire.", altAnswers: ["Chi vuole può venire."], explanation: "No noun: \"chi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"l'uomo che sua figlia è attrice\". Write it correctly: the man whose daughter is an actress.", source: "the man whose daughter is an actress", answer: "l'uomo la cui figlia è attrice", altAnswers: ["L'uomo la cui figlia è attrice.", "l'uomo la cui figlia fa l'attrice"], explanation: "\"La cui figlia\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ti ho detto tutto che so\". Write it correctly: I've told you everything I know.", source: "I've told you everything I know.", answer: "Ti ho detto tutto quello che so.", altAnswers: ["Ti ho detto tutto ciò che so."], explanation: "\"Tutto quello che\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Che ha finito può uscire\". Write it correctly: Whoever has finished can leave.", source: "Whoever has finished can leave.", answer: "Chi ha finito può uscire.", altAnswers: ["Chi ha finito può andare."], explanation: "\"Chi\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"il film il quale ho visto\". Write it correctly: the film I saw.", source: "the film I saw", answer: "il film che ho visto", altAnswers: ["Il film che ho visto."], explanation: "Direct object: \"che\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Non capisco cosa che vuoi\". Write it correctly: I don't understand what you want.", source: "I don't understand what you want. (to a friend)", answer: "Non capisco quello che vuoi.", altAnswers: ["Non capisco ciò che vuoi.", "Non capisco cosa vuoi."], explanation: "\"Quello che\", or \"cosa\" alone." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"il giorno dove ci siamo conosciuti\". Write it correctly: the day we met.", source: "the day we met", answer: "il giorno in cui ci siamo conosciuti", altAnswers: ["Il giorno in cui ci siamo conosciuti.", "il giorno che ci siamo conosciuti"], explanation: "Time: \"in cui\"." },
      { type: "fill-blank", prompt: "A learner wrote \"la città la cui le strade sono strette\". Write the Italian for the bold words.", en: "the city [whose streets] are narrow", sentence: "la città ___ sono strette", answer: "le cui strade", explanation: "Article agrees with \"strade\", only once." },
      { type: "fill-blank", prompt: "A learner wrote \"la collega con che lavoro\". Write the Italian for the bold words.", en: "the colleague [I work with]", sentence: "la collega ___ lavoro", answer: "con cui", altAnswers: ["con la quale"], explanation: "After a preposition: \"cui\"." },
      { type: "word-order", prompt: "Put the words in order to say: Some people say it's true.", words: ["C'è", "chi", "dice", "che", "è", "vero."], translation: "Some people say it's true.", explanation: "\"C'è chi\"." },
      { type: "multiple-choice", question: "Which has no mistake?", options: ["È un'artista le cui opere sono famose.", "È un'artista che le sue opere sono famose.", "È un'artista la cui opere sono famose.", "È un'artista le cui le opere sono famose."], correctIndex: 0, explanation: "\"Le cui opere\"." },
      { type: "multiple-choice", question: "Which has no mistake?", options: ["Ciò che mi preoccupa è il prezzo.", "Cosa mi preoccupa è il prezzo.", "Chi mi preoccupa è il prezzo.", "Il quale mi preoccupa è il prezzo."], correctIndex: 0, explanation: "\"Ciò che\"." },
      { type: "dictation", audio: "Ho conosciuto un ragazzo la cui sorella abita a Bari.", explanation: "\"La cui sorella\"." },
      { type: "speak", text: "Chi vuole può venire: ti dirò tutto quello che so sul ragazzo la cui madre è medico.", prompt: "Say it in Italian: Anyone who wants to can come: I'll tell you everything I know about the boy whose mother is a doctor.", tip: "\"Chi\" is KEE, \"che\" is KEH: keep them apart.", explanation: "\"Chi\", \"tutto quello che\", \"la cui\"." },
    ],
  },
  {
    slug: "b1-reading-lab-art",
    level: "IT-B1",
    number: 8,
    title: "Reading Lab: A Painting and Its Painter",
    summary: "Read a museum text about Caravaggio's Basket of Fruit, full of il quale, il cui, ciò che and in cui.",
    duration: "18 min",
    sections: [
      {
        heading: "The painter",
        body: [
          "Read the first panel of a museum text in Milan: \"Michelangelo Merisi, il cui soprannome viene dal paese di Caravaggio, vicino a Bergamo, è uno dei pittori più famosi della storia dell'arte. Ciò che colpisce nei suoi quadri è la luce, la quale esce dal buio e illumina solo ciò che conta\".",
          "\"Il cui soprannome\" = whose nickname. \"La quale\" refers clearly to \"la luce\".",
        ],
        examples: [
          { es: "Michelangelo Merisi, il cui soprannome viene dal paese di Caravaggio.", en: "Michelangelo Merisi, whose nickname comes from the town of Caravaggio." },
          { es: "Ciò che colpisce nei suoi quadri è la luce.", en: "What strikes you in his paintings is the light." },
          { es: "La luce, la quale esce dal buio, illumina solo ciò che conta.", en: "The light, which comes out of the darkness, lights up only what matters." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What strikes you in his paintings is the light.", answer: "Ciò che colpisce nei suoi quadri è la luce.", altAnswers: ["Quello che colpisce nei suoi quadri è la luce.", "Ciò che colpisce nei suoi dipinti è la luce."], explanation: "\"Ciò che\" as subject." },
          { type: "multiple-choice", question: "Where does the name Caravaggio come from?", options: ["A town near Bergamo", "His father's name", "A church in Milan", "A painting"], correctIndex: 0, explanation: "\"Il paese di Caravaggio, vicino a Bergamo\"." },
        ],
      },
      {
        heading: "The painting",
        body: [
          "The second panel: \"La Canestra di frutta, la quale è conservata qui all'Ambrosiana, è stata dipinta verso la fine del Cinquecento. È considerata una delle prime nature morte della pittura italiana. Il quadro apparteneva al cardinale Federico Borromeo, il quale fondò questa biblioteca e questa pinacoteca\".",
        ],
        examples: [
          { es: "La Canestra di frutta è conservata qui all'Ambrosiana.", en: "The Basket of Fruit is kept here at the Ambrosiana." },
          { es: "È considerata una delle prime nature morte italiane.", en: "It's considered one of the first Italian still lifes." },
          { es: "Il quadro apparteneva al cardinale Federico Borromeo, il quale fondò questa biblioteca.", en: "The painting belonged to Cardinal Federico Borromeo, who founded this library." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's considered one of the first Italian still lifes.", answer: "È considerata una delle prime nature morte italiane.", altAnswers: ["È considerata una delle prime nature morte della pittura italiana."], explanation: "\"Natura morta\" → plural \"nature morte\"." },
          { type: "listen-choose", audio: "Il quadro apparteneva al cardinale Federico Borromeo, il quale fondò questa biblioteca.", question: "Who founded the library?", options: ["Cardinal Borromeo", "Caravaggio", "The city of Milan", "A rich merchant"], correctIndex: 0, explanation: "\"Il quale\" refers to the cardinal." },
        ],
      },
      {
        heading: "Look closer",
        body: [
          "The last panel invites you to look: \"Guardate la mela in cui si vede un piccolo buco, e le foglie, alcune delle quali sono già secche. Chi osserva con attenzione capisce che questa frutta non è perfetta: è la vita, la cui bellezza non dura\".",
          "\"Alcune delle quali\" = some of which.",
        ],
        examples: [
          { es: "Guardate la mela in cui si vede un piccolo buco.", en: "Look at the apple in which you can see a small hole." },
          { es: "Le foglie, alcune delle quali sono già secche.", en: "The leaves, some of which are already dry." },
          { es: "Chi osserva con attenzione capisce.", en: "Whoever looks carefully understands." },
          { es: "È la vita, la cui bellezza non dura.", en: "It's life, whose beauty doesn't last." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The leaves, some of which are already dry.", answer: "Le foglie, alcune delle quali sono già secche.", explanation: "\"Alcune delle quali\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's life, [whose beauty] doesn't last.", sentence: "È la vita, ___ non dura.", answer: "la cui bellezza", explanation: "\"La cui\" agrees with \"bellezza\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Michelangelo Merisi, whose nickname comes from a town near Bergamo.", answer: "Michelangelo Merisi, il cui soprannome viene da un paese vicino a Bergamo.", explanation: "\"Il cui soprannome\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Basket of Fruit is kept here at the Ambrosiana.", answer: "La Canestra di frutta è conservata qui all'Ambrosiana.", altAnswers: ["La Canestra di frutta si trova qui all'Ambrosiana."], explanation: "Passive (Unit 20)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever looks carefully understands.", answer: "Chi osserva con attenzione capisce.", altAnswers: ["Chi guarda con attenzione capisce.", "Chi osserva attentamente capisce."], explanation: "\"Chi\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Look at the apple in which you can see a small hole. (to a group)", answer: "Guardate la mela in cui si vede un piccolo buco.", altAnswers: ["Guardate la mela nella quale si vede un piccolo buco.", "Guardate la mela in cui si vede un buchino."], explanation: "\"In cui\" / \"nella quale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The light lights up only what matters.", answer: "La luce illumina solo ciò che conta.", altAnswers: ["La luce illumina solo quello che conta.", "La luce illumina soltanto ciò che conta."], explanation: "\"Ciò che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cardinal, [who] founded this library, owned the painting.", sentence: "Il cardinale, ___ fondò questa biblioteca, possedeva il quadro.", answer: "il quale", altAnswers: ["che"], explanation: "Formal \"il quale\" after a comma." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A painter [whose paintings] are full of light.", sentence: "Un pittore ___ sono pieni di luce.", answer: "i cui quadri", altAnswers: ["i cui dipinti"], explanation: "\"I cui quadri\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's one of the first Italian still lifes.", words: ["È", "una", "delle", "prime", "nature", "morte", "italiane."], translation: "It's one of the first Italian still lifes.", explanation: "\"Nature morte\" is the plural of \"natura morta\"." },
      { type: "multiple-choice", question: "What's not perfect in the painting?", options: ["The fruit and the leaves", "The basket", "The light", "The frame"], correctIndex: 0, explanation: "A hole in the apple, dry leaves." },
      { type: "multiple-choice", question: "In \"la luce, la quale esce dal buio\", why \"la quale\"?", options: ["It refers clearly to la luce.", "It's a direct object.", "It means whose.", "It refers to the painter."], correctIndex: 0, explanation: "\"Il quale\" for clarity after a comma." },
      { type: "listen-choose", audio: "Ciò che colpisce nei suoi quadri è la luce.", question: "What is striking in his paintings?", options: ["The light", "The colors", "The size", "The faces"], correctIndex: 0, explanation: "\"La luce\"." },
      { type: "dictation", audio: "È un quadro la cui bellezza non si dimentica.", explanation: "\"La cui bellezza\"." },
      { type: "speak", text: "Ciò che colpisce in questo quadro è la luce, la quale illumina solo la frutta.", prompt: "Say it in Italian: What strikes you in this painting is the light, which lights up only the fruit.", tip: "\"Illumina\": il-LU-mi-na.", explanation: "\"Ciò che\" and \"la quale\"." },
    ],
  },
  {
    slug: "b1-dialogue-lab-describing-people",
    level: "IT-B1",
    number: 9,
    title: "Dialogue Lab: Who's That?",
    summary: "At a wedding in Puglia, two guests describe the people around them with relative clauses: quella signora il cui cappello ..., il ragazzo con cui balla, chi ha organizzato tutto.",
    duration: "17 min",
    sections: [
      {
        heading: "Who's who",
        body: [
          "A wedding near Lecce. Tom, a friend of the groom, doesn't know anyone. He asks Chiara, a cousin of the bride: \"Chi è quella signora con il cappello enorme?\" \"È la zia Rina, quella di cui ti ho parlato: la signora il cui cappello si vede da un chilometro!\"",
        ],
        examples: [
          { es: "Chi è quella signora con il cappello enorme?", en: "Who's that lady with the huge hat?" },
          { es: "È la zia Rina, quella di cui ti ho parlato.", en: "It's Aunt Rina, the one I told you about." },
          { es: "La signora il cui cappello si vede da un chilometro!", en: "The lady whose hat you can see a mile away!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's Aunt Rina, the one I told you about.", answer: "È la zia Rina, quella di cui ti ho parlato.", altAnswers: ["È zia Rina, quella di cui ti ho parlato.", "È la zia Rina, quella della quale ti ho parlato."], explanation: "\"Quella di cui\" = the one about whom." },
          { type: "listen-choose", audio: "La signora il cui cappello si vede da un chilometro!", question: "What's special about Aunt Rina?", options: ["Her hat", "Her dress", "Her voice", "Her dancing"], correctIndex: 0, explanation: "\"Il cui cappello\"." },
        ],
      },
      {
        heading: "On the dance floor",
        body: [
          "\"E il ragazzo con cui balla la sposa?\" \"È suo fratello, Davide, il quale ha organizzato tutta la festa\". Chiara adds: \"Chi conosce Davide sa che non si ferma mai\".",
          "\"Il quale\" here makes it clear that Davide, not the bride, organized the party.",
        ],
        examples: [
          { es: "E il ragazzo con cui balla la sposa?", en: "And the guy the bride's dancing with?" },
          { es: "È suo fratello, il quale ha organizzato tutta la festa.", en: "It's her brother, who organized the whole party." },
          { es: "Chi conosce Davide sa che non si ferma mai.", en: "Anyone who knows Davide knows he never stops." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "And the guy the bride's dancing with?", answer: "E il ragazzo con cui balla la sposa?", altAnswers: ["E il ragazzo con il quale balla la sposa?", "E il ragazzo con cui sta ballando la sposa?"], explanation: "\"Con cui\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Anyone who knows] Davide knows he never stops.", sentence: "___ Davide sa che non si ferma mai.", answer: "Chi conosce", explanation: "\"Chi\" + singular." },
        ],
      },
      {
        heading: "Tom's verdict",
        body: [
          "At the end, Tom sums up: \"Quello che mi piace di questo matrimonio è che c'è chi balla, chi canta, chi mangia... e nessuno sta fermo!\" Chiara laughs: \"Benvenuto in Puglia: qui tutto quello che si fa, si fa in grande\".",
        ],
        examples: [
          { es: "Quello che mi piace di questo matrimonio è l'allegria.", en: "What I like about this wedding is the cheerfulness." },
          { es: "C'è chi balla, chi canta, chi mangia.", en: "Some are dancing, some singing, some eating." },
          { es: "Qui tutto quello che si fa, si fa in grande.", en: "Here, everything people do, they do in a big way." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some are dancing, some singing, some eating.", answer: "C'è chi balla, chi canta, chi mangia.", altAnswers: ["C'è chi balla, chi canta e chi mangia."], explanation: "\"C'è chi ... chi ...\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's that lady with the huge hat?", answer: "Chi è quella signora con il cappello enorme?", altAnswers: ["Chi è quella signora col cappello enorme?"], explanation: "Question \"chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's her brother, who organized the whole party.", answer: "È suo fratello, il quale ha organizzato tutta la festa.", altAnswers: ["È suo fratello, che ha organizzato tutta la festa."], explanation: "\"Il quale\" for clarity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What I like about this wedding is the cheerfulness.", answer: "Quello che mi piace di questo matrimonio è l'allegria.", altAnswers: ["Ciò che mi piace di questo matrimonio è l'allegria."], explanation: "\"Quello che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The man whose wife is singing is the groom's uncle.", answer: "L'uomo la cui moglie canta è lo zio dello sposo.", altAnswers: ["L'uomo la cui moglie sta cantando è lo zio dello sposo.", "Il signore la cui moglie canta è lo zio dello sposo."], explanation: "\"La cui moglie\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The girl I was sitting next to is a doctor.", answer: "La ragazza accanto a cui ero seduto è medico.", altAnswers: ["La ragazza accanto alla quale ero seduto è medico.", "La ragazza vicino a cui ero seduto è medico.", "La ragazza vicino alla quale ero seduto è medico.", "La ragazza accanto a cui ero seduta è medico.", "La ragazza accanto alla quale ero seduta è medico.", "La ragazza vicino alla quale ero seduta è medico."], explanation: "\"Accanto a cui\" / \"accanto alla quale\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The friends [I came with] have already left.", sentence: "Gli amici ___ sono venuto sono già andati via.", answer: "con cui", altAnswers: ["con i quali"], explanation: "\"Con cui\" / \"con i quali\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The lady [whose hat] you can see a mile away.", sentence: "La signora ___ si vede da un chilometro.", answer: "il cui cappello", explanation: "\"Il cui\" agrees with \"cappello\"." },
      { type: "word-order", prompt: "Put the words in order to say: Here everything people do, they do in a big way.", words: ["Qui", "tutto", "quello", "che", "si", "fa,", "si", "fa", "in", "grande."], translation: "Here everything people do, they do in a big way.", explanation: "\"Tutto quello che\" + impersonal \"si\"." },
      { type: "multiple-choice", question: "Who is Davide?", options: ["The bride's brother", "The groom", "Chiara's boyfriend", "Aunt Rina's son"], correctIndex: 0, explanation: "\"È suo fratello\" (the bride's)." },
      { type: "multiple-choice", question: "Why does Tom ask Chiara about the guests?", options: ["He doesn't know anyone.", "He's the photographer.", "He's looking for Aunt Rina.", "He wants to dance."], correctIndex: 0, explanation: "Tom is a friend of the groom and doesn't know anyone." },
      { type: "dictation", audio: "Chi conosce Davide sa che non si ferma mai.", explanation: "\"Chi\" + singular." },
      { type: "speak", text: "Quella è la zia di cui ti ho parlato, e quello è il ragazzo con cui balla la sposa.", prompt: "Say it in Italian: That's the aunt I told you about, and that's the guy the bride is dancing with.", tip: "\"Di cui\", \"con cui\": cui is one syllable, KWEE.", explanation: "\"Di cui\" and \"con cui\"." },
    ],
  },
  {
    slug: "b1-mission-formal-description",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Formal Description",
    summary: "Write a description of a place for a tourist brochure, with il quale, il cui, ciò che and chi: un borgo le cui case ..., chi ama la natura ...",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "A place worth visiting",
        body: [
          "Your mission: the tourist office of a small town asks you to write a short brochure text. Brochure Italian is formal, so use \"il quale\" and \"il cui\": \"un borgo medievale le cui case sono costruite in pietra\", \"il castello, il quale domina la valle\".",
          "Address the reader with \"chi\": \"Chi ama la natura troverà sentieri bellissimi\".",
        ],
        examples: [
          { es: "È un borgo medievale le cui case sono costruite in pietra.", en: "It's a medieval village whose houses are built of stone." },
          { es: "Il castello, il quale domina la valle, è aperto al pubblico.", en: "The castle, which overlooks the valley, is open to the public." },
          { es: "Chi ama la natura troverà sentieri bellissimi.", en: "Nature lovers will find beautiful trails." },
          { es: "La piazza in cui si tiene il mercato è del Trecento.", en: "The square where the market is held dates from the fourteenth century." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a medieval village whose houses are built of stone.", answer: "È un borgo medievale le cui case sono costruite in pietra.", altAnswers: ["È un borgo medievale le cui case sono di pietra.", "È un paese medievale le cui case sono costruite in pietra."], explanation: "\"Le cui case\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nature lovers will find beautiful trails.", answer: "Chi ama la natura troverà sentieri bellissimi.", altAnswers: ["Chi ama la natura troverà dei sentieri bellissimi."], explanation: "\"Chi\" + singular." },
        ],
      },
      {
        heading: "What makes it special",
        body: [
          "End with what makes the place special: \"Ciò che rende unico il paese è la sua festa d'estate, durante la quale ...\". \"Durante la quale\" (during which) is a typical brochure phrase.",
        ],
        examples: [
          { es: "Ciò che rende unico il paese è la sua festa d'estate.", en: "What makes the village unique is its summer festival." },
          { es: "Durante la quale le strade si riempiono di musica.", en: "During which the streets fill with music." },
          { es: "Tutto ciò che serve si trova in piazza.", en: "Everything you need can be found in the square." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What makes the village unique is its summer festival.", answer: "Ciò che rende unico il paese è la sua festa d'estate.", altAnswers: ["Quello che rende unico il paese è la sua festa d'estate.", "Ciò che rende unico il paese è la sua festa estiva."], explanation: "\"Ciò che\"." },
          { type: "listen-choose", audio: "Durante la festa le strade si riempiono di musica.", question: "What happens during the festival?", options: ["The streets fill with music.", "The shops close.", "The castle opens.", "The market moves."], correctIndex: 0, explanation: "\"Si riempiono di musica\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The castle, which overlooks the valley, is open to the public.", answer: "Il castello, il quale domina la valle, è aperto al pubblico.", altAnswers: ["Il castello, che domina la valle, è aperto al pubblico."], explanation: "\"Il quale\" in formal writing." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The square where the market is held dates from the fourteenth century.", answer: "La piazza in cui si tiene il mercato è del Trecento.", altAnswers: ["La piazza dove si tiene il mercato è del Trecento.", "La piazza nella quale si tiene il mercato è del Trecento."], explanation: "\"In cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everything you need can be found in the square.", answer: "Tutto ciò che serve si trova in piazza.", altAnswers: ["Tutto quello che serve si trova in piazza.", "Tutto ciò di cui si ha bisogno si trova in piazza."], explanation: "\"Tutto ciò che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A church whose frescoes are famous.", answer: "Una chiesa i cui affreschi sono famosi.", explanation: "\"I cui affreschi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The summer festival, [during which] the streets fill with music.", sentence: "La festa d'estate, ___ le strade si riempiono di musica.", answer: "durante la quale", explanation: "\"Durante la quale\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Anyone who loves] good food will feel at home.", sentence: "___ la buona cucina si sentirà a casa.", answer: "Chi ama", explanation: "\"Chi\" + singular." },
      { type: "word-order", prompt: "Put the words in order to say: It's a lake whose waters are crystal clear.", words: ["È", "un", "lago", "le", "cui", "acque", "sono", "cristalline."], translation: "It's a lake whose waters are crystal clear.", explanation: "\"Le cui acque\"." },
      { type: "multiple-choice", question: "Which sentence suits a formal brochure best?", options: ["Il museo, il quale ospita opere del Seicento, è aperto tutti i giorni.", "Il museo che ci sono opere del Seicento è aperto sempre.", "Il museo, cosa ospita opere del Seicento, è aperto.", "Il museo il cui ospita opere del Seicento è aperto."], correctIndex: 0, explanation: "\"Il quale\" after a comma." },
      { type: "dictation", audio: "Chi visita il borgo non può perdere il castello, il quale domina la valle.", explanation: "\"Chi\" and \"il quale\"." },
      { type: "speak", text: "È un borgo le cui case sono in pietra, e chi ama la natura troverà sentieri bellissimi.", prompt: "Say it in Italian: It's a village whose houses are made of stone, and nature lovers will find beautiful trails.", tip: "\"Borgo\": BOR-go, a small historic village.", explanation: "\"Le cui\" and \"chi\"." },
    ],
  },
];

export const IT_B1_U22_WRITING: WriteExercise = {
  type: "write",
  prompt: "The tourist office of a small Italian town asks you to write a short text for its brochure. Describe the town (or a place you know well): its history, its main sights, what makes it special, and who should visit it.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses il quale / la quale with prepositions or after a comma for clarity (nel quale, durante la quale)",
    "Uses il cui / la cui / i cui / le cui with the article agreeing with the thing owned",
    "Uses ciò che / quello che for what, and tutto ciò che for everything that",
    "Uses chi + singular verb for whoever (chi ama la natura ...)",
  ],
  modelAnswer: "Valdoria è un piccolo borgo toscano le cui origini risalgono al Medioevo. Le sue case, i cui muri sono di pietra chiara, circondano una piazza nella quale si tiene ogni sabato un mercato di prodotti locali. Il castello, il quale domina tutta la valle, ospita oggi un museo dedicato alla ceramica. Ciò che rende unico il paese è la festa di settembre, durante la quale le strade si riempiono di musica, luci e profumi. Chi ama la natura troverà sentieri tra gli ulivi; chi preferisce la buona cucina troverà trattorie dove si mangia benissimo. Tutto ciò che serve per una vacanza tranquilla è qui. Vi aspettiamo!",
  explanation: "\"Le cui origini\" and \"i cui muri\" agree with the things owned. \"Nella quale\", \"il quale\" and \"durante la quale\" are the formal relatives. \"Ciò che rende unico\" and \"tutto ciò che serve\" mean what and everything that; \"chi ama\" and \"chi preferisce\" take singular verbs; \"dove si mangia\" mixes in the impersonal \"si\".",
};
