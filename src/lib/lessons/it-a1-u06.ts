// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a1-u06.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A1 Unit 6: Present Tense, -ere and -ire Verbs. -ere, -ire and
// -isc- verbs, avere and its idioms, sc and silent h.
// Conventions: docs/italian-course/authoring.md.
export const IT_A1_U06: Lesson[] = [
  {
    slug: "a1-ere-verbs",
    level: "IT-A1",
    number: 1,
    title: "Regular -ere Verbs",
    summary: "Conjugate prendere, leggere, scrivere and other regular -ere verbs, and stress the loro form correctly.",
    duration: "14 min",
    sections: [
      {
        heading: "Prendere: the -ere endings",
        body: [
          "The second group of verbs ends in -ere. Take off -ere and add \"-o, -i, -e, -iamo, -ete, -ono\": \"prendo, prendi, prende, prendiamo, prendete, prendono\". Compared with -are verbs, only three endings change: lui / lei ends in \"-e\" (not -a), voi in \"-ete\" and loro in \"-ono\".",
          "\"Prendere\" means to take, and it's also the everyday verb for having food or drink: \"Prendo un caffè\" (I'll have a coffee). English says have; Italian says take.",
        ],
        examples: [
          { es: "prendo, prendi, prende", en: "I take, you take, he / she takes" },
          { es: "prendiamo, prendete, prendono", en: "we take, you (plural) take, they take" },
          { es: "Prendo un caffè.", en: "I'll have a coffee." },
          { es: "Marco prende il treno alle otto.", en: "Marco takes the train at eight." },
          { es: "Che cosa prendete?", en: "What are you having? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have a coffee.", answer: "Prendo un caffè.", altAnswers: ["Io prendo un caffè."], explanation: "\"Prendere\" is the verb for ordering food and drink." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We take] the bus.", sentence: "___ l'autobus.", answer: "Prendiamo", altAnswers: ["Noi prendiamo"], explanation: "\"-iamo\" is the we ending in every verb group." },
        ],
      },
      {
        heading: "Everyday -ere verbs",
        body: [
          "These all follow \"prendere\": \"leggere\" (to read), \"scrivere\" (to write), \"vedere\" (to see), \"vivere\" (to live), \"chiedere\" (to ask), \"credere\" (to believe), \"mettere\" (to put), \"rispondere\" (to answer).",
          "\"Vivere\" and \"abitare\" both mean to live in a place: \"Vivo a Palermo\" = \"Abito a Palermo\". \"Chiedere\" and \"rispondere\" take \"a\" before a person: \"Chiedo a Luca\", \"Rispondo a Giulia\".",
        ],
        examples: [
          { es: "Leggo il giornale.", en: "I'm reading the newspaper." },
          { es: "Scrivi una mail?", en: "Are you writing an email?" },
          { es: "Vivono a Palermo.", en: "They live in Palermo." },
          { es: "Rispondo a Giulia.", en: "I'm answering Giulia." },
          { es: "Chiedo il conto.", en: "I'll ask for the bill." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They live in Palermo.", answer: "Vivono a Palermo.", altAnswers: ["Loro vivono a Palermo.", "Abitano a Palermo.", "Loro abitano a Palermo."], explanation: "\"-ono\" for they; \"a\" + city." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you writing an email? (to a friend)", answer: "Scrivi una mail?", altAnswers: ["Tu scrivi una mail?", "Scrivi un'email?", "Scrivi una email?"], explanation: "\"Scrivi\" for \"tu\": the same -i ending as \"parli\"." },
        ],
      },
      {
        heading: "Stress and sound",
        body: [
          "As with -are verbs, the loro form keeps the stress of io: LEG-go, LEG-go-no; PREN-do, PREN-do-no; SCRI-vo, SCRI-vo-no; ri-SPON-do-no. Don't stress the ending.",
          "There's no extra h in -ere verbs, so the sound can change while the spelling stays regular: \"leggo\" has a hard g (like get), \"leggi\" and \"legge\" a soft one (like gem).",
        ],
        examples: [
          { es: "leggono", en: "they read (LEG-go-no)" },
          { es: "prendono", en: "they take (PREN-do-no)" },
          { es: "rispondono", en: "they answer (ri-SPON-do-no)" },
          { es: "leggo, leggi, legge", en: "I read, you read, he / she reads" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Leggono molto.", question: "Who reads a lot?", options: ["they", "we", "you (plural)", "he"], correctIndex: 0, explanation: "LEG-go-no: \"-ono\" = they." },
          { type: "multiple-choice", question: "How is \"prendono\" stressed?", options: ["PREN-do-no", "pren-DO-no", "pren-do-NO", "all syllables equally"], correctIndex: 0, explanation: "Loro keeps the stress of \"prendo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm reading the newspaper.", answer: "Leggo il giornale.", altAnswers: ["Io leggo il giornale."], explanation: "One present for I read and I'm reading." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We live in Naples.", answer: "Viviamo a Napoli.", altAnswers: ["Noi viviamo a Napoli.", "Abitiamo a Napoli.", "Noi abitiamo a Napoli."], explanation: "\"Viviamo\" or \"abitiamo\" + a + city." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you having? (plural)", answer: "Che cosa prendete?", altAnswers: ["Cosa prendete?", "Che prendete?", "Voi cosa prendete?", "Voi che cosa prendete?"], explanation: "\"-ete\" is the voi ending of -ere verbs." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you write in Italian? (to a friend)", answer: "Scrivi in italiano?", altAnswers: ["Tu scrivi in italiano?"], explanation: "\"Scrivi\" for \"tu\"; \"in italiano\" = in Italian." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia answers the phone.", answer: "Giulia risponde al telefono.", explanation: "\"Rispondere a\": \"al telefono\" = a + il." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They see the sea.", answer: "Vedono il mare.", altAnswers: ["Loro vedono il mare."], explanation: "VE-do-no: stress as in \"vedo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Marco [asks for] the bill.", sentence: "Marco ___ il conto.", answer: "chiede", explanation: "\"Chiedere\" → \"chiede\" for he; no word for for." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you put] sugar in your coffee? (to a friend)", sentence: "___ lo zucchero nel caffè?", answer: "Metti", altAnswers: ["Tu metti"], explanation: "\"Mettere\" → \"metti\"; keep the double t." },
      { type: "word-order", prompt: "Put the words in order to say: We take the train at eight.", words: ["Prendiamo", "il", "treno", "alle", "otto."], translation: "We take the train at eight.", explanation: "\"Prendiamo\" + the train + time." },
      {
        type: "matching",
        instructions: "Match each form to its person.",
        pairs: [
          { left: "prendo", right: "I" },
          { left: "prende", right: "he / she" },
          { left: "prendiamo", right: "we" },
          { left: "prendete", right: "you (plural)" },
          { left: "prendono", right: "they" },
        ],
        explanation: "-ere endings: -o, -i, -e, -iamo, -ete, -ono.",
      },
      { type: "dictation", audio: "Leggi il giornale? No, scrivo una mail.", explanation: "\"Leggi\" with a soft gg; \"scrivo\" for I." },
      {
        type: "speak",
        text: "Prendo un cappuccino e leggo il giornale.",
        prompt: "Say it in Italian: I'll have a cappuccino and read the newspaper.",
        tip: "LEG-go: hold the double g a moment.",
        explanation: "Two -ere verbs in the I form.",
      },
    ],
  },
  {
    slug: "a1-ire-verbs",
    level: "IT-A1",
    number: 2,
    title: "Regular -ire Verbs",
    summary: "Conjugate dormire, partire, aprire, sentire, offrire and seguire, and tell -ire from -ere forms.",
    duration: "14 min",
    sections: [
      {
        heading: "Dormire: the -ire endings",
        body: [
          "The third group ends in -ire. The endings are \"-o, -i, -e, -iamo, -ite, -ono\": \"dormo, dormi, dorme, dormiamo, dormite, dormono\". They are the -ere endings with one change: voi ends in \"-ite\" (\"dormite\"), not -ete.",
          "So in five persons you can't hear whether a verb is -ere or -ire: \"prende\" and \"dorme\", \"prendono\" and \"dormono\". Learn the infinitive and you'll always know the voi form.",
        ],
        examples: [
          { es: "dormo, dormi, dorme", en: "I sleep, you sleep, he / she sleeps" },
          { es: "dormiamo, dormite, dormono", en: "we sleep, you (plural) sleep, they sleep" },
          { es: "Dormo otto ore.", en: "I sleep eight hours." },
          { es: "Dormite bene?", en: "Do you sleep well? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I sleep eight hours.", answer: "Dormo otto ore.", altAnswers: ["Io dormo otto ore."], explanation: "\"Dormo\": stem + o." },
          { type: "multiple-choice", question: "You ask two friends: Do you sleep well?", options: ["Dormite bene?", "Dormete bene?", "Dormiate bene?", "Dormono bene?"], correctIndex: 0, explanation: "-ire verbs: voi ends in \"-ite\"." },
        ],
      },
      {
        heading: "Six useful -ire verbs",
        body: [
          "\"Partire\" means to leave or set off, not to part: \"Parto domani\" (I'm leaving tomorrow). \"Aprire\" is to open, \"sentire\" to hear or to feel, \"seguire\" to follow or take (a course), \"offrire\" to offer.",
          "\"Offro io!\" is how you say it's on me at the bar. In \"seguire\" the u is pronounced: \"seguo\", SE-guo-no.",
        ],
        examples: [
          { es: "Parto domani.", en: "I'm leaving tomorrow." },
          { es: "Il bar apre alle sette.", en: "The bar opens at seven." },
          { es: "Senti la musica?", en: "Can you hear the music?" },
          { es: "Seguo un corso di italiano.", en: "I'm taking an Italian course." },
          { es: "Offro io!", en: "It's on me!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bar opens at seven.", answer: "Il bar apre alle sette.", explanation: "\"Aprire\" → \"apre\" for it." },
          { type: "listen-choose", audio: "Partono domani.", question: "What did you hear?", options: ["They're leaving tomorrow.", "We're leaving tomorrow.", "She's leaving tomorrow.", "They're arriving tomorrow."], correctIndex: 0, explanation: "PAR-to-no: \"-ono\" = they; \"partire\" = to leave." },
        ],
      },
      {
        heading: "Stress in the loro form",
        body: [
          "Same rule as before: loro is stressed like io. DOR-mo, DOR-mo-no; A-pro, A-pro-no; OF-fro, OF-fro-no. Noi and voi stress the ending: dor-MIA-mo, dor-MI-te.",
        ],
        examples: [
          { es: "aprono", en: "they open (A-pro-no)" },
          { es: "sentono", en: "they hear (SEN-to-no)" },
          { es: "partiamo", en: "we leave (par-TIA-mo)" },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shops [open] at nine.", sentence: "I negozi ___ alle nove.", answer: "aprono", explanation: "A-pro-no: loro keeps the stress of \"apro\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm leaving tomorrow.", answer: "Parto domani.", altAnswers: ["Io parto domani."], explanation: "One present for the near future too." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you hear the music? (to a friend)", answer: "Senti la musica?", altAnswers: ["Tu senti la musica?"], explanation: "Italian uses no word for can with \"sentire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's on me!", answer: "Offro io!", explanation: "\"Offro io\": the pronoun after the verb stresses who pays." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're taking an Italian course.", answer: "Seguiamo un corso di italiano.", altAnswers: ["Noi seguiamo un corso di italiano.", "Seguiamo un corso d'italiano."], explanation: "\"Seguire un corso\" = to take a course." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you sleep well? (plural)", answer: "Dormite bene?", altAnswers: ["Voi dormite bene?"], explanation: "\"-ite\" for voi." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm opening the window.", answer: "Apro la finestra.", altAnswers: ["Io apro la finestra."], explanation: "\"Aprire\" → \"apro\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train [leaves] at 18:40.", sentence: "Il treno ___ alle 18:40.", answer: "parte", explanation: "\"Parte\" for it; \"partire\" = to leave." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca and Anna [sleep] a lot.", sentence: "Luca e Anna ___ molto.", answer: "dormono", explanation: "DOR-mo-no." },
      { type: "word-order", prompt: "Put the words in order to say: The pharmacy opens at half past eight.", words: ["La", "farmacia", "apre", "alle", "otto", "e", "mezza."], translation: "The pharmacy opens at half past eight.", explanation: "\"Apre\" for it; \"alle otto e mezza\"." },
      { type: "multiple-choice", question: "Which form is the voi form of \"partire\"?", options: ["partite", "partete", "partate", "partono"], correctIndex: 0, explanation: "-ire → \"-ite\"." },
      { type: "dictation", audio: "Partiamo domani, ma Luca parte oggi.", explanation: "\"Partiamo\" (we), \"parte\" (he)." },
      {
        type: "speak",
        text: "Il bar apre alle sette. Offro io!",
        prompt: "Say it in Italian: The bar opens at seven. It's on me!",
        tip: "A-pre, OF-fro: hold the double f.",
        explanation: "\"Apre\" and \"offro\": two -ire verbs.",
      },
    ],
  },
  {
    slug: "a1-isc-verbs",
    level: "IT-A1",
    number: 3,
    title: "-ire Verbs with -isc-",
    summary: "Conjugate capire, finire, preferire, pulire and spedire, which add -isc- in four of the six forms.",
    duration: "14 min",
    sections: [
      {
        heading: "Capire: where -isc- goes",
        body: [
          "Many -ire verbs add \"-isc-\" between the stem and the ending: \"capisco, capisci, capisce, capiscono\". Noi and voi don't: \"capiamo, capite\". The -isc- appears exactly in the four forms stressed on the stem, so it sits under the stress: ca-PI-sco, ca-PI-sco-no.",
          "Listen to the sc: before o it's [sk] (\"capisco\"), before i and e it's [sh] (\"capisci\", \"capisce\").",
        ],
        examples: [
          { es: "capisco, capisci, capisce", en: "I understand, you understand, he / she understands" },
          { es: "capiamo, capite, capiscono", en: "we understand, you (plural) understand, they understand" },
          { es: "Non capisco.", en: "I don't understand." },
          { es: "Capite l'italiano?", en: "Do you understand Italian? (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't understand.", answer: "Non capisco.", altAnswers: ["Io non capisco."], explanation: "\"Capisco\": -isc- in the io form." },
          { type: "multiple-choice", question: "Which is the noi form of \"capire\"?", options: ["capiamo", "capisciamo", "capiscono", "capisco"], correctIndex: 0, explanation: "Noi and voi have no -isc-." },
        ],
      },
      {
        heading: "Finire, preferire, pulire, spedire",
        body: [
          "The same pattern: \"finire\" (to finish), \"preferire\" (to prefer), \"pulire\" (to clean), \"spedire\" (to send by post). \"Preferisco il tè\", \"Finiamo alle sei\", \"Pulisci la cucina?\".",
          "\"Preferire\" is how you choose: \"Preferisci il tè o il caffè?\" (do you prefer tea or coffee?).",
        ],
        examples: [
          { es: "Finisco alle sei.", en: "I finish at six." },
          { es: "Preferisci il tè o il caffè?", en: "Do you prefer tea or coffee?" },
          { es: "Puliamo la casa il sabato.", en: "We clean the house on Saturdays." },
          { es: "Spedisco un pacco a mia madre.", en: "I'm sending a parcel to my mother." },
          { es: "I ragazzi finiscono la lezione.", en: "The boys are finishing the lesson." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you prefer tea or coffee? (to a friend)", answer: "Preferisci il tè o il caffè?", altAnswers: ["Tu preferisci il tè o il caffè?", "Preferisci tè o caffè?"], explanation: "\"Preferisci\": -isc- with a soft sc." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We clean] the house on Saturdays.", sentence: "___ la casa il sabato.", answer: "Puliamo", altAnswers: ["Noi puliamo"], explanation: "No -isc- in the noi form." },
        ],
      },
      {
        heading: "Which verbs take it?",
        body: [
          "Nothing in the infinitive tells you: \"dormire\" doesn't take -isc-, \"finire\" does. Learn each -ire verb with its io form: \"dormire, dormo\"; \"finire, finisco\". Good dictionaries mark them \"(-isc-)\".",
          "Of the verbs you know, \"dormire, partire, aprire, sentire, offrire, seguire\" are plain; \"capire, finire, preferire, pulire, spedire\" take -isc-.",
        ],
        examples: [
          { es: "Dormo, ma non capisco.", en: "I sleep, but I don't understand." },
          { es: "Parto quando finisco.", en: "I leave when I finish." },
          { es: "Apri tu o pulisci tu?", en: "Are you opening or are you cleaning?" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Finiscono alle cinque.", question: "What did you hear?", options: ["Finiscono alle cinque.", "Finono alle cinque.", "Finiamo alle cinque.", "Finisce alle cinque."], correctIndex: 0, explanation: "fi-NI-sco-no: they finish." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I finish at six.", answer: "Finisco alle sei.", altAnswers: ["Io finisco alle sei."], explanation: "\"Finisco\": -isc- + o, a hard sc." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you understand? (polite)", answer: "Capisce?", altAnswers: ["Lei capisce?"], explanation: "\"Lei\" takes the lui / lei form: \"capisce\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They prefer wine.", answer: "Preferiscono il vino.", altAnswers: ["Loro preferiscono il vino."], explanation: "pre-fe-RI-sco-no; the article with a general noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you understand Italian? (plural)", answer: "Capite l'italiano?", altAnswers: ["Capite italiano?", "Voi capite l'italiano?"], explanation: "Voi: no -isc-." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sending a parcel to my mother.", answer: "Spedisco un pacco a mia madre.", altAnswers: ["Io spedisco un pacco a mia madre."], explanation: "\"Spedire\" takes -isc-." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We finish the lesson at eleven.", answer: "Finiamo la lezione alle undici.", altAnswers: ["Noi finiamo la lezione alle undici."], explanation: "\"Finiamo\": no -isc- for noi." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sofia [cleans] the kitchen.", sentence: "Sofia ___ la cucina.", answer: "pulisce", explanation: "\"Pulisce\": -isc- + e, a soft sc." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you prefer] pasta or rice? (to a friend)", sentence: "___ la pasta o il riso?", answer: "Preferisci", altAnswers: ["Tu preferisci"], explanation: "\"Preferisci\" for tu." },
      { type: "word-order", prompt: "Put the words in order to say: I leave when I finish.", words: ["Parto", "quando", "finisco."], translation: "I leave when I finish.", explanation: "\"Partire\" is plain, \"finire\" takes -isc-." },
      { type: "multi-select", question: "Which verbs take -isc-? Choose all that apply.", options: ["capire", "dormire", "finire", "partire", "pulire", "aprire"], correctIndexes: [0, 2, 4], explanation: "\"Capisco, finisco, pulisco\", but \"dormo, parto, apro\"." },
      { type: "dictation", audio: "Capisci? Sì, capisco.", explanation: "\"Capisci\" [sh], \"capisco\" [sk]." },
      {
        type: "speak",
        text: "Scusi, non capisco. Preferisco parlare inglese.",
        prompt: "Say it in Italian: Excuse me, I don't understand. I prefer to speak English.",
        tip: "ca-PI-sco with [sk]; pre-fe-RI-sco too.",
        explanation: "Two -isc- verbs in the io form.",
      },
    ],
  },
  {
    slug: "a1-drill-ere-ire",
    level: "IT-A1",
    number: 4,
    title: "Drill: -ere, -ire and -isc-",
    summary: "Produce thirty -ere, -ire and -isc- verbs in every person, mixed with the -are verbs you know.",
    duration: "20 min",
    kind: "drill",
    sections: [
      {
        heading: "Three sets of endings",
        body: [
          "-are: \"-o, -i, -a, -iamo, -ate, -ano\". -ere: \"-o, -i, -e, -iamo, -ete, -ono\". -ire: \"-o, -i, -e, -iamo, -ite, -ono\", with -isc- in io, tu, lui / lei and loro for verbs like \"capire\".",
          "New verbs: \"chiudere\" (to close), \"correre\" (to run), \"perdere\" (to lose, to miss), \"vendere\" (to sell), \"ricevere\" (to receive), \"servire\" (to serve), \"costruire\" (to build, -isc-).",
        ],
        examples: [
          { es: "Chiudiamo alle otto.", en: "We close at eight." },
          { es: "Perdi sempre le chiavi!", en: "You're always losing your keys!" },
          { es: "Vendono frutta e verdura.", en: "They sell fruit and vegetables." },
          { es: "Costruiscono una casa.", en: "They're building a house." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We close at eight.", answer: "Chiudiamo alle otto.", altAnswers: ["Noi chiudiamo alle otto."], explanation: "\"Chiudere\" → \"chiudiamo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They sell fruit and vegetables.", answer: "Vendono frutta e verdura.", altAnswers: ["Loro vendono frutta e verdura."], explanation: "VEN-do-no." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I run every morning.", answer: "Corro ogni mattina.", altAnswers: ["Io corro ogni mattina.", "Corro tutte le mattine."], explanation: "\"Correre\" → \"corro\"; double r." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're always losing your keys! (to a friend)", answer: "Perdi sempre le chiavi!", altAnswers: ["Tu perdi sempre le chiavi!"], explanation: "\"Perdi\" for tu; Italian uses the article, not your." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop closes at seven.", answer: "Il negozio chiude alle sette.", explanation: "\"Chiude\" for it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you sleep in the afternoon? (to a friend)", answer: "Dormi il pomeriggio?", altAnswers: ["Tu dormi il pomeriggio?", "Dormi di pomeriggio?"], explanation: "\"Dormi\": plain -ire." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're receiving a parcel today.", answer: "Oggi riceviamo un pacco.", altAnswers: ["Riceviamo un pacco oggi.", "Noi riceviamo un pacco oggi.", "Oggi noi riceviamo un pacco."], explanation: "\"Ricevere\" → \"riceviamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They understand everything.", answer: "Capiscono tutto.", altAnswers: ["Loro capiscono tutto."], explanation: "-isc- in the loro form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you cleaning the bathroom? (plural)", answer: "Pulite il bagno?", altAnswers: ["Voi pulite il bagno?"], explanation: "Voi: no -isc-." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The waiter serves the pizzas.", answer: "Il cameriere serve le pizze.", explanation: "\"Servire\" is plain: \"serve\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm buying bread and reading the paper.", answer: "Compro il pane e leggo il giornale.", altAnswers: ["Io compro il pane e leggo il giornale."], explanation: "An -are verb and an -ere verb, both in the io form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you understand], boys?", sentence: "___, ragazzi?", answer: "Capite", altAnswers: ["Voi capite"], explanation: "\"Capite\": no -isc- for voi." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Matteo [is sending] a postcard.", sentence: "Matteo ___ una cartolina.", answer: "spedisce", explanation: "\"Spedisce\": -isc- + e." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We're leaving] at nine.", sentence: "___ alle nove.", answer: "Partiamo", altAnswers: ["Noi partiamo"], explanation: "\"Partiamo\": par-TIA-mo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You write] well! (plural)", sentence: "___ bene!", answer: "Scrivete", altAnswers: ["Voi scrivete"], explanation: "-ere: \"-ete\" for voi." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "chiudete", right: "you (plural) close" },
          { left: "pulisco", right: "I clean" },
          { left: "aprono", right: "they open" },
          { left: "corri", right: "you run" },
          { left: "costruisce", right: "he / she builds" },
        ],
        explanation: "The ending, and the -isc-, tell you the person.",
      },
      { type: "dictation", audio: "Finisco alle sei e poi corro al parco.", explanation: "\"Finisco\" with -isc-, \"corro\" with a double r." },
      { type: "dictation", audio: "Chiudono il negozio e partono.", explanation: "Two loro forms: CHIU-do-no, PAR-to-no." },
      {
        type: "speak",
        text: "Leggo, scrivo, dormo, capisco.",
        prompt: "Say the io form of leggere, scrivere, dormire and capire.",
        tip: "Only \"capisco\" adds -isc-.",
        explanation: "Two -ere verbs, one plain -ire, one -isc-.",
      },
    ],
  },
  {
    slug: "a1-avere",
    level: "IT-A1",
    number: 5,
    title: "The Verb Avere",
    summary: "Conjugate avere, the irregular verb for to have, and see why ho, hai, ha and hanno are written with a silent h.",
    duration: "14 min",
    sections: [
      {
        heading: "Ho, hai, ha, abbiamo, avete, hanno",
        body: [
          "\"Avere\" (to have) is irregular: \"ho, hai, ha, abbiamo, avete, hanno\". You've used it for age since Unit 4: \"Ho trent'anni\".",
          "The h is never pronounced. It's there only to tell words apart in writing: \"ho\" (I have) vs \"o\" (or), \"ha\" (he / she has) vs \"a\" (to, at), \"hanno\" (they have) vs \"anno\" (year). Say \"ho\" exactly like \"o\".",
        ],
        examples: [
          { es: "ho, hai, ha", en: "I have, you have, he / she has" },
          { es: "abbiamo, avete, hanno", en: "we have, you (plural) have, they have" },
          { es: "Ho una sorella.", en: "I have a sister." },
          { es: "Hanno un anno.", en: "They're one year old." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a sister.", answer: "Ho una sorella.", altAnswers: ["Io ho una sorella."], explanation: "\"Ho\" with a silent h." },
          { type: "multiple-choice", question: "Which word means they have?", options: ["hanno", "anno", "hano", "ano"], correctIndex: 0, explanation: "\"Hanno\" = they have; \"anno\" = year." },
        ],
      },
      {
        heading: "Having things",
        body: [
          "Use \"avere\" for what people own, their family and their pets: \"Abbiamo un cane\", \"Avete figli?\" (do you have children?), \"Hai una penna?\".",
          "In negatives and questions about whether something exists at all, Italian often drops the article: \"Non ho tempo\" (I don't have time), \"Avete figli?\". With \"Lei\": \"Ha un documento?\" (do you have ID?).",
        ],
        examples: [
          { es: "Hai una penna?", en: "Have you got a pen?" },
          { es: "Abbiamo un cane.", en: "We have a dog." },
          { es: "Avete figli?", en: "Do you have children? (plural)" },
          { es: "Non ho tempo.", en: "I don't have time." },
          { es: "Ha un documento, signora?", en: "Do you have ID, madam?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got a pen? (to a friend)", answer: "Hai una penna?", altAnswers: ["Tu hai una penna?"], explanation: "\"Hai\" for tu." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't have time.", answer: "Non ho tempo.", altAnswers: ["Io non ho tempo."], explanation: "No article: \"non ho tempo\"." },
        ],
      },
      {
        heading: "Hearing the forms",
        body: [
          "Because the h is silent, you hear \"ho\" and \"o\", \"ha\" and \"a\" the same way: context decides. \"Abbiamo\" has a double b and stress on -bia-: ab-BIA-mo. \"Hanno\" has a double n: HAN-no.",
        ],
        examples: [
          { es: "Ho un fratello o una sorella?", en: "Do I have a brother or a sister?" },
          { es: "Marco ha un amico a Roma.", en: "Marco has a friend in Rome." },
          { es: "Hanno una casa a Bari.", en: "They have a house in Bari." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Hanno una casa a Bari.", question: "What does it mean?", options: ["They have a house in Bari.", "A year in a house in Bari.", "He has a house in Bari.", "We have a house in Bari."], correctIndex: 0, explanation: "\"Hanno\" (they have) sounds like \"anno\": context tells you." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We have a dog.", answer: "Abbiamo un cane.", altAnswers: ["Noi abbiamo un cane."], explanation: "\"Abbiamo\": double b." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have children? (plural)", answer: "Avete figli?", altAnswers: ["Voi avete figli?", "Avete dei figli?"], explanation: "No article in a yes / no question like this." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco has a friend in Rome.", answer: "Marco ha un amico a Roma.", explanation: "\"Ha\" (has) with h; \"a Roma\" (in Rome) without." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have ID? (polite)", answer: "Ha un documento?", altAnswers: ["Lei ha un documento?"], explanation: "Lei takes \"ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They have a house in Bari.", answer: "Hanno una casa a Bari.", altAnswers: ["Loro hanno una casa a Bari."], explanation: "\"Hanno\": h and double n." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't have a car.", answer: "Non ho la macchina.", altAnswers: ["Non ho una macchina.", "Io non ho la macchina.", "Non ho l'auto."], explanation: "Italians usually say \"non ho la macchina\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Have you got] a pen? (plural)", sentence: "___ una penna?", answer: "Avete", altAnswers: ["Voi avete"], explanation: "\"Avete\" for voi: no h." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Giulia [has] two brothers.", sentence: "Giulia ___ due fratelli.", answer: "ha", explanation: "\"Ha\" = has; \"a\" without h = to, at." },
      { type: "word-order", prompt: "Put the words in order to say: We don't have time today.", words: ["Oggi", "non", "abbiamo", "tempo."], translation: "We don't have time today.", altOrders: [["Non", "abbiamo", "tempo", "oggi."]], explanation: "\"Non\" before \"abbiamo\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "ho", right: "I have" },
          { left: "o", right: "or" },
          { left: "ha", right: "he / she has" },
          { left: "a", right: "to, at" },
          { left: "hanno", right: "they have" },
          { left: "anno", right: "year" },
        ],
        explanation: "The h is silent: it only tells the words apart in writing.",
      },
      { type: "dictation", audio: "Hai un fratello o una sorella?", explanation: "\"Hai\" with h; \"o\" (or) without." },
      {
        type: "speak",
        text: "Ho una sorella e un fratello. Non abbiamo un cane.",
        prompt: "Say it in Italian: I have a sister and a brother. We don't have a dog.",
        tip: "Don't pronounce the h: \"ho\" sounds like \"o\".",
        explanation: "\"Ho\" and \"abbiamo\" for family and pets.",
      },
    ],
  },
  {
    slug: "a1-avere-idioms",
    level: "IT-A1",
    number: 6,
    title: "Avere Expressions",
    summary: "Say you're hungry, thirsty, cold, in a hurry or right with avere, where English uses to be.",
    duration: "14 min",
    sections: [
      {
        heading: "I have hunger: body feelings",
        body: [
          "Where English says I'm hungry, Italian says I have hunger: \"Ho fame\". The same goes for \"ho sete\" (I'm thirsty), \"ho sonno\" (I'm sleepy), \"ho freddo\" (I'm cold) and \"ho caldo\" (I'm hot).",
          "The classic mistake is a word-for-word copy of English: \"sono fame\" is wrong. \"Fame\", \"sete\" and \"sonno\" are nouns, and you have them.",
        ],
        examples: [
          { es: "Ho fame.", en: "I'm hungry." },
          { es: "Hai sete?", en: "Are you thirsty?" },
          { es: "I bambini hanno sonno.", en: "The children are sleepy." },
          { es: "Abbiamo freddo.", en: "We're cold." },
          { es: "Ha caldo, signora?", en: "Are you hot, madam?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm hungry.", answer: "Ho fame.", altAnswers: ["Io ho fame."], explanation: "\"Avere fame\": never \"sono fame\"." },
          { type: "multiple-choice", question: "You're cold. What do you say?", options: ["Ho freddo.", "Sono freddo.", "È freddo.", "Ho fredda."], correctIndex: 0, explanation: "A person \"ha freddo\"." },
        ],
      },
      {
        heading: "Hurry, fear, right and wrong",
        body: [
          "Four more: \"ho fretta\" (I'm in a hurry), \"ho paura\" (I'm scared), \"ho ragione\" (I'm right), \"ho torto\" (I'm wrong). \"Hai ragione!\" (you're right!) is one of the most useful replies in Italian.",
          "\"Avere bisogno di\" means to need: \"Ho bisogno di un caffè\", \"Ho bisogno di dormire\". It takes \"di\" + a noun or an infinitive.",
        ],
        examples: [
          { es: "Scusa, ho fretta!", en: "Sorry, I'm in a hurry!" },
          { es: "Hai ragione.", en: "You're right." },
          { es: "Luca ha paura dei cani.", en: "Luca is scared of dogs." },
          { es: "Ho bisogno di un caffè.", en: "I need a coffee." },
          { es: "Abbiamo bisogno di dormire.", en: "We need to sleep." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right. (to a friend)", answer: "Hai ragione.", altAnswers: ["Tu hai ragione."], explanation: "\"Avere ragione\" = to be right." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I need] a coffee.", sentence: "___ un caffè.", answer: "Ho bisogno di", altAnswers: ["Io ho bisogno di"], explanation: "\"Avere bisogno di\" + noun." },
        ],
      },
      {
        heading: "Very hungry: molta fame",
        body: [
          "Because these are nouns, very is \"molto\" used as an adjective, agreeing with the noun: \"fame\", \"sete\", \"paura\" and \"fretta\" are feminine, so \"ho molta fame\"; \"freddo\", \"caldo\" and \"sonno\" are masculine, so \"ho molto freddo\". It goes before the noun, never at the end.",
        ],
        examples: [
          { es: "Ho molta fame.", en: "I'm very hungry." },
          { es: "Ho molta sete.", en: "I'm very thirsty." },
          { es: "Ho molto sonno.", en: "I'm very sleepy." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ho molta fretta.", question: "What does it mean?", options: ["I'm in a big hurry.", "I'm very scared.", "I'm very hungry.", "I'm not in a hurry."], correctIndex: 0, explanation: "\"Fretta\" = hurry; \"molta\" agrees with it." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you thirsty? (to a friend)", answer: "Hai sete?", altAnswers: ["Tu hai sete?"], explanation: "\"Avere sete\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children are sleepy.", answer: "I bambini hanno sonno.", explanation: "\"Hanno sonno\": they have sleep." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry, I'm in a hurry! (to a friend)", answer: "Scusa, ho fretta!", altAnswers: ["Scusa, ho molta fretta!"], explanation: "\"Avere fretta\"; \"scusa\" for tu." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm very hungry.", answer: "Ho molta fame.", altAnswers: ["Io ho molta fame.", "Ho tanta fame."], explanation: "\"Fame\" is feminine: \"molta fame\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you hot, madam?", answer: "Ha caldo, signora?", altAnswers: ["Signora, ha caldo?", "Lei ha caldo, signora?"], explanation: "Lei + \"ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We need to sleep.", answer: "Abbiamo bisogno di dormire.", altAnswers: ["Noi abbiamo bisogno di dormire."], explanation: "\"Bisogno di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're wrong, Marco.", answer: "Hai torto, Marco.", altAnswers: ["Marco, hai torto.", "Tu hai torto, Marco."], explanation: "\"Avere torto\" = to be wrong." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [is scared] of dogs.", sentence: "Luca ___ dei cani.", answer: "ha paura", explanation: "\"Avere paura di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We're very cold].", sentence: "___.", answer: "Abbiamo molto freddo", altAnswers: ["Noi abbiamo molto freddo"], explanation: "\"Freddo\" is masculine: \"molto freddo\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sleepy and I need a coffee.", words: ["Ho", "sonno", "e", "ho", "bisogno", "di", "un", "caffè."], translation: "I'm sleepy and I need a coffee.", explanation: "Two avere expressions." },
      { type: "multiple-choice", question: "Your friend says the bar is closed on Sundays, and she's right. What do you say?", options: ["Hai ragione.", "Sei ragione.", "Hai torto.", "Hai fretta."], correctIndex: 0, explanation: "\"Avere ragione\": never \"sei ragione\"." },
      { type: "dictation", audio: "Ho fame e ho sonno.", explanation: "Two avere expressions; the h is silent." },
      {
        type: "speak",
        text: "Ho molta fame, ma ho fretta. Ho bisogno di un panino!",
        prompt: "Say it in Italian: I'm very hungry, but I'm in a hurry. I need a sandwich!",
        tip: "\"Fretta\": hold the double t.",
        explanation: "\"Molta fame\", \"ho fretta\", \"ho bisogno di\".",
      },
    ],
  },
  {
    slug: "a1-sound-sc",
    level: "IT-A1",
    number: 7,
    title: "Sounds: Sc",
    summary: "Read sc as [sk] or [sh] depending on the next letter, and hear the switch in capisco / capisci.",
    duration: "14 min",
    sections: [
      {
        heading: "Sc = [sk] before a, o, u and h",
        body: [
          "The letters sc follow the same rule as c alone. Before a, o, u, and in sch, they're hard: [sk], as in English school. \"Scuola\" (school), \"scarpe\" (shoes), \"scusa\" (sorry), \"schiena\" (back), \"pesche\" (peaches).",
          "The h in \"sch\" does the same job as in \"che\" and \"chi\": it keeps the sound hard before e and i.",
        ],
        examples: [
          { es: "la scuola", en: "the school" },
          { es: "le scarpe", en: "the shoes" },
          { es: "Scusa!", en: "Sorry! (to a friend)" },
          { es: "le pesche", en: "the peaches" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "le scarpe", question: "What did you hear?", options: ["le scarpe", "le sciarpe", "le scale", "le carpe"], correctIndex: 0, explanation: "\"Sca\" = [ska]." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The school is near here.", answer: "La scuola è qui vicino.", altAnswers: ["La scuola è vicino.", "La scuola è vicina."], explanation: "\"Scuola\": hard [sk]." },
        ],
      },
      {
        heading: "Sc = [sh] before e and i",
        body: [
          "Before e and i, sc sounds like English sh: \"pesce\" (fish), \"uscire\" (to go out), \"sci\" (skiing), \"piscina\" (swimming pool). Before a, o, u, an i keeps it soft and is silent: \"sciarpa\" (scarf), \"prosciutto\" (ham), \"lascio\" (I leave).",
          "So \"pesce\" (fish) and \"pesche\" (peaches) differ only by the h: PE-she and PES-ke.",
        ],
        examples: [
          { es: "il pesce", en: "the fish" },
          { es: "la piscina", en: "the swimming pool" },
          { es: "un panino al prosciutto", en: "a ham sandwich" },
          { es: "una sciarpa rossa", en: "a red scarf" },
          { es: "Usciamo stasera?", en: "Shall we go out tonight?" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "il pesce", question: "What did you hear?", options: ["il pesce", "le pesche", "il pesche", "le pesce"], correctIndex: 0, explanation: "[sh]: \"pesce\", the fish." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll have a ham sandwich.", answer: "Prendo un panino al prosciutto.", altAnswers: ["Io prendo un panino al prosciutto."], explanation: "\"Prosciutto\": the i is silent, sc = [sh]." },
        ],
      },
      {
        heading: "Verbs that switch",
        body: [
          "In -isc- verbs the sound changes inside one verb: \"capisco\" [sk] but \"capisci\", \"capisce\" [sh], then \"capiscono\" [sk] again. \"Conosco\" and \"conosci\" (I know, you know) do the same. Follow the vowel after sc and you'll always read it right.",
        ],
        examples: [
          { es: "capisco, capisci", en: "I understand, you understand" },
          { es: "finisco, finisce", en: "I finish, he / she finishes" },
          { es: "conosco, conosci", en: "I know, you know" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Capisci?", question: "What did you hear?", options: ["Capisci?", "Capisco?", "Capisce?", "Capite?"], correctIndex: 0, explanation: "\"Capisci\" ends in [shi]." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[She finishes] at five.", sentence: "___ alle cinque.", answer: "Finisce", altAnswers: ["Lei finisce"], explanation: "\"Finisce\": sc before e = [sh]." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't eat fish.", answer: "Non mangio il pesce.", altAnswers: ["Non mangio pesce.", "Io non mangio il pesce."], explanation: "\"Pesce\": [sh]." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Two peaches, please.", answer: "Due pesche, per favore.", explanation: "\"Pesche\": sch = [sk]." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry, I don't understand. (to a friend)", answer: "Scusa, non capisco.", explanation: "Both [sk]: \"scusa\", \"capisco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The swimming pool opens at nine.", answer: "La piscina apre alle nove.", explanation: "\"Piscina\": pi-SHI-na." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you understand? (to a friend)", answer: "Capisci?", altAnswers: ["Tu capisci?"], explanation: "sc + i = [sh]." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The shoes] are new.", sentence: "___ sono nuove.", answer: "Le scarpe", explanation: "\"Scarpe\": [sk]; feminine plural, so \"nuove\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I have [a red scarf].", sentence: "Ho ___.", answer: "una sciarpa rossa", explanation: "\"Sciarpa\": the i is silent, [sh]." },
      { type: "word-order", prompt: "Put the words in order to say: The children finish school at four.", words: ["I", "bambini", "finiscono", "la", "scuola", "alle", "quattro."], translation: "The children finish school at four.", explanation: "\"Finiscono\" and \"scuola\": both [sk]." },
      { type: "multiple-choice", question: "Which word has the [sh] sound?", options: ["pesce", "pesche", "scuola", "schiena"], correctIndex: 0, explanation: "sc + e = [sh]; the others are [sk]." },
      { type: "listen-choose", audio: "le pesche", question: "What did you hear?", options: ["le pesche", "il pesce", "le pesce", "le pese"], correctIndex: 0, explanation: "PES-ke: peaches." },
      { type: "dictation", audio: "Esci? No, finisco la lezione.", explanation: "\"Esci\" [sh], \"finisco\" [sk], \"lezione\" with z." },
      {
        type: "speak",
        text: "Il pesce e le pesche. Capisco, capisci.",
        prompt: "Read aloud: the fish and the peaches; I understand, you understand.",
        tip: "PE-she / PES-ke; ca-PI-sco / ca-PI-shi.",
        explanation: "The vowel after sc decides the sound.",
      },
    ],
  },
  {
    slug: "a1-contrast-essere-avere",
    level: "IT-A1",
    number: 8,
    title: "Contrast Clinic: Essere or Avere?",
    summary: "Choose between essere and avere where English always says to be: tired or sleepy, age, cold people and cold food.",
    duration: "14 min",
    sections: [
      {
        heading: "Adjective with essere, noun with avere",
        body: [
          "English uses be for both, but Italian splits them: an adjective goes with \"essere\", a noun with \"avere\". \"Sono stanco\" (I'm tired: stanco is an adjective), but \"Ho sonno\" (I'm sleepy: sonno is a noun).",
          "So the adjective agrees (\"sono stanca\", \"siamo stanchi\") and the noun never changes (\"ho sonno\", \"abbiamo sonno\").",
        ],
        examples: [
          { es: "Sono stanco.", en: "I'm tired." },
          { es: "Ho sonno.", en: "I'm sleepy." },
          { es: "Giulia è stanca e ha fame.", en: "Giulia is tired and hungry." },
          { es: "Siamo contenti.", en: "We're happy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia is tired and hungry.", answer: "Giulia è stanca e ha fame.", explanation: "\"Stanca\" (adjective) with essere; \"fame\" (noun) with avere." },
          { type: "multiple-choice", question: "Which is correct for We're sleepy?", options: ["Abbiamo sonno.", "Siamo sonno.", "Abbiamo sonni.", "Siamo assonnato."], correctIndex: 0, explanation: "\"Sonno\" is a noun: avere." },
        ],
      },
      {
        heading: "Who you are, what you have",
        body: [
          "\"Essere\" says what someone is: \"Sono italiano\". \"Avere\" says what someone has: \"Ho un amico italiano\". Age is something you have: \"Ho vent'anni\", never \"sono vent'anni\".",
        ],
        examples: [
          { es: "Sono italiano.", en: "I'm Italian." },
          { es: "Ho un amico italiano.", en: "I have an Italian friend." },
          { es: "Mia sorella ha vent'anni.", en: "My sister is twenty." },
          { es: "È medico e ha due figli.", en: "He's a doctor and has two children." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My sister is twenty.", answer: "Mia sorella ha vent'anni.", altAnswers: ["Mia sorella ha venti anni.", "Mia sorella ha 20 anni."], explanation: "Age takes avere." },
          { type: "listen-choose", audio: "È medico e ha due figli.", question: "What does it mean?", options: ["He's a doctor and has two children.", "He has a doctor and two children.", "He's a doctor and is two.", "They're doctors with two children."], correctIndex: 0, explanation: "\"È medico\" (is), \"ha due figli\" (has)." },
        ],
      },
      {
        heading: "Cold people, cold coffee",
        body: [
          "A person feels cold with avere: \"Ho freddo\". A thing is cold with essere and an adjective that agrees: \"Il caffè è freddo\", \"La pizza è fredda\". \"Sono freddo\" would describe your personality: I'm a cold person.",
          "For the weather Italians say \"fa freddo\" and \"fa caldo\"; you'll learn \"fare\" in Unit 9.",
        ],
        examples: [
          { es: "Ho freddo.", en: "I'm cold." },
          { es: "Il caffè è freddo.", en: "The coffee is cold." },
          { es: "La pizza è fredda.", en: "The pizza is cold." },
          { es: "Hai caldo? Apro la finestra.", en: "Are you hot? I'll open the window." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The pizza is cold.", answer: "La pizza è fredda.", explanation: "A thing: essere + agreeing adjective." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you hot? (to a friend)", answer: "Hai caldo?", altAnswers: ["Tu hai caldo?"], explanation: "A person: avere caldo." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm tired.", answer: "Sono stanco.", altAnswers: ["Sono stanca.", "Io sono stanco.", "Io sono stanca."], explanation: "Adjective: essere; it agrees with the speaker." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sleepy.", answer: "Ho sonno.", altAnswers: ["Io ho sonno."], explanation: "Noun: avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have an Italian friend.", answer: "Ho un amico italiano.", altAnswers: ["Ho un'amica italiana.", "Io ho un amico italiano."], explanation: "Possession: avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The coffee is cold.", answer: "Il caffè è freddo.", explanation: "A thing: essere + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're cold.", answer: "Abbiamo freddo.", altAnswers: ["Noi abbiamo freddo."], explanation: "People feel cold: avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How old are you? (to a friend)", answer: "Quanti anni hai?", altAnswers: ["Tu quanti anni hai?"], explanation: "Age: avere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [are hungry].", sentence: "I bambini ___ fame.", answer: "hanno", explanation: "\"Avere fame\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara and Sofia [are] Italian.", sentence: "Chiara e Sofia ___ italiane.", answer: "sono", explanation: "Nationality adjective: essere." },
      { type: "word-order", prompt: "Put the words in order to say: I'm thirty and I'm a teacher.", words: ["Ho", "trent'anni", "e", "sono", "insegnante."], translation: "I'm thirty and I'm a teacher.", explanation: "Age with avere, profession with essere." },
      { type: "multi-select", question: "Which sentences are correct? Choose all that apply.", options: ["Ho fame.", "Sono fame.", "Sono stanca.", "Ho stanca.", "La zuppa è fredda.", "Sono 25 anni."], correctIndexes: [0, 2, 4], explanation: "Nouns with avere, adjectives with essere; age with avere." },
      { type: "dictation", audio: "Sono stanca e ho sonno.", explanation: "Essere + adjective, avere + noun." },
      {
        type: "speak",
        text: "Ho freddo e il tè è freddo!",
        prompt: "Say it in Italian: I'm cold and the tea is cold!",
        tip: "Two kinds of cold: a person \"ha\", a thing \"è\".",
        explanation: "\"Ho freddo\" vs \"è freddo\".",
      },
    ],
  },
  {
    slug: "a1-error-hunt-present",
    level: "IT-A1",
    number: 9,
    title: "Error Hunt: Present Tense",
    summary: "Fix the present-tense mistakes learners make with -isc- verbs, avere expressions and agreement.",
    duration: "14 min",
    sections: [
      {
        heading: "Fix the verb forms",
        body: [
          "Each sentence was written by a learner and has one mistake. \"Non capo\" for I don't understand forgets the -isc-: \"non capisco\". (\"Capo\" is a real word: head or boss.)",
          "\"Lui capiscono\" uses the loro ending with a singular subject: \"lui capisce\". \"Dormiscono\" adds -isc- to a verb that never takes it: \"dormono\".",
        ],
        examples: [
          { es: "Non capisco.", en: "I don't understand." },
          { es: "Lui capisce tutto.", en: "He understands everything." },
          { es: "I bambini dormono.", en: "The children are sleeping." },
          { es: "Il capo arriva alle nove.", en: "The boss arrives at nine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"non capo\". Write it correctly: I don't understand.", source: "I don't understand.", answer: "Non capisco.", altAnswers: ["Io non capisco."], explanation: "\"Capire\" takes -isc-: \"capisco\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"i bambini dormiscono\". Write it correctly: The children are sleeping.", source: "The children are sleeping.", answer: "I bambini dormono.", explanation: "\"Dormire\" has no -isc-: \"dormono\"." },
        ],
      },
      {
        heading: "Fix the avere expressions",
        body: [
          "\"Io ho fame molto\" copies English word order. \"Fame\" is a noun, so very is \"molta\", before it: \"ho molta fame\".",
          "\"Ho 25 anni vecchio\" translates years old word for word. Italian stops at \"anni\": \"ho 25 anni\".",
        ],
        examples: [
          { es: "Ho molta fame.", en: "I'm very hungry." },
          { es: "Ho venticinque anni.", en: "I'm twenty-five." },
          { es: "Hai molta sete?", en: "Are you very thirsty?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"io ho fame molto\". Write it correctly: I'm very hungry.", source: "I'm very hungry.", answer: "Ho molta fame.", altAnswers: ["Io ho molta fame.", "Ho tanta fame."], explanation: "\"Molta\" agrees with \"fame\" and goes first." },
          { type: "multiple-choice", question: "Which is correct for I'm 25?", options: ["Ho 25 anni.", "Ho 25 anni vecchio.", "Sono 25 anni.", "Sono 25 anni vecchio."], correctIndex: 0, explanation: "Avere + number + \"anni\", nothing more." },
        ],
      },
      {
        heading: "Fix the time word",
        body: [
          "A learner suggested a coffee with \"Prendiamo il caffè ieri?\". \"Ieri\" means yesterday and needs a past tense, which comes in the next level. To suggest a plan, use the present with \"domani\" or \"stasera\": \"Prendiamo un caffè domani?\".",
        ],
        examples: [
          { es: "Prendiamo un caffè domani?", en: "Shall we have a coffee tomorrow?" },
          { es: "Usciamo stasera?", en: "Shall we go out tonight?" },
          { es: "Parto domani.", en: "I'm leaving tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"Prendiamo il caffè ieri?\" and write: Shall we have a coffee tomorrow?", source: "Shall we have a coffee tomorrow?", answer: "Prendiamo un caffè domani?", altAnswers: ["Domani prendiamo un caffè?"], explanation: "The present + \"domani\" makes a suggestion." },
          { type: "listen-choose", audio: "Prendiamo un caffè domani?", question: "What is the speaker suggesting?", options: ["a coffee tomorrow", "a coffee yesterday", "a coffee now", "a cake tomorrow"], correctIndex: 0, explanation: "\"Domani\" = tomorrow." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"lui capiscono\" and write: He understands.", source: "He understands.", answer: "Lui capisce.", altAnswers: ["Capisce."], explanation: "Singular subject, singular verb." },
      { type: "translate", direction: "en-es", prompt: "Fix \"sono fame\" and write: I'm hungry.", source: "I'm hungry.", answer: "Ho fame.", altAnswers: ["Io ho fame."], explanation: "\"Avere fame\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"finiamo\" for they and write: They finish at six.", source: "They finish at six.", answer: "Finiscono alle sei.", altAnswers: ["Loro finiscono alle sei."], explanation: "Loro: \"finiscono\", with -isc-." },
      { type: "translate", direction: "en-es", prompt: "Fix \"voi capiscite\" and write: Do you understand? (plural)", source: "Do you understand? (plural)", answer: "Capite?", altAnswers: ["Voi capite?"], explanation: "No -isc- for voi." },
      { type: "translate", direction: "en-es", prompt: "Fix \"prendono\" for we and write: We're having a pizza.", source: "We're having a pizza.", answer: "Prendiamo una pizza.", altAnswers: ["Noi prendiamo una pizza."], explanation: "We: \"prendiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"apriamo\" for they and write: They open the shop at nine.", source: "They open the shop at nine.", answer: "Aprono il negozio alle nove.", altAnswers: ["Loro aprono il negozio alle nove."], explanation: "Loro: \"aprono\", A-pro-no." },
      { type: "fill-blank", prompt: "A learner wrote \"Marco ha 30 anni vecchio\". Write the Italian for the bold words.", en: "Marco [is thirty].", sentence: "Marco ___.", answer: "ha trent'anni", altAnswers: ["ha 30 anni", "ha trenta anni"], explanation: "Avere + age + \"anni\"." },
      { type: "fill-blank", prompt: "A learner wrote \"ho sete molto\". Write the Italian for the bold words.", en: "[I'm very thirsty].", sentence: "___.", answer: "Ho molta sete", altAnswers: ["Io ho molta sete"], explanation: "\"Sete\" is feminine: \"molta sete\"." },
      { type: "word-order", prompt: "Put the words in order to say: The children sleep and we clean the kitchen.", words: ["I", "bambini", "dormono", "e", "noi", "puliamo", "la", "cucina."], translation: "The children sleep and we clean the kitchen.", explanation: "\"Dormono\" (no -isc-), \"puliamo\" (no -isc- for noi)." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Preferisco il tè.", "Prefero il tè.", "Preferiamo il tè io.", "Preferisce il tè io."], correctIndex: 0, explanation: "\"Preferire\" takes -isc- in the io form." },
      { type: "dictation", audio: "Non capisco: i bambini dormono?", explanation: "\"Capisco\" with -isc-, \"dormono\" without." },
      {
        type: "speak",
        text: "Ho molta fame, ma non capisco il menù.",
        prompt: "Fix it and say it: a learner said \"Io ho fame molto, ma non capo il menù.\"",
        tip: "\"Molta\" before \"fame\"; ca-PI-sco.",
        explanation: "Two fixes: \"molta fame\" and \"capisco\".",
      },
    ],
  },
  {
    slug: "a1-dialogue-lab-whats-for-dinner",
    level: "IT-A1",
    number: 10,
    title: "Dialogue Lab: What's for Dinner?",
    summary: "Plan dinner with a flatmate in Torino: ask if they're hungry, choose pasta or rice, open the wine and split the jobs.",
    duration: "14 min",
    sections: [
      {
        heading: "Hai fame?",
        body: [
          "Chiara and Matteo share a flat in Torino. It's 7 pm and Matteo is still at his desk. Listen for avere expressions and -ire verbs: \"Hai fame?\", \"Finisco il lavoro alle sette\", \"Preferisci la pasta o il riso?\".",
        ],
        examples: [
          { es: "Matteo, hai fame?", en: "Matteo, are you hungry?" },
          { es: "Sì, ho molta fame! Finisco il lavoro alle sette.", en: "Yes, I'm really hungry! I finish work at seven." },
          { es: "Preferisci la pasta o il riso?", en: "Do you prefer pasta or rice?" },
          { es: "La pasta, grazie. Il riso non mi piace.", en: "Pasta, thanks. I don't like rice." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you prefer pasta or rice? (to a friend)", answer: "Preferisci la pasta o il riso?", altAnswers: ["Tu preferisci la pasta o il riso?", "Preferisci pasta o riso?"], explanation: "\"Preferisci\": -isc- for tu." },
          { type: "listen-choose", audio: "Finisco il lavoro alle sette.", question: "When does Matteo finish work?", options: ["at seven", "at six", "at eleven", "at seventeen"], correctIndex: 0, explanation: "\"Alle sette\" = at seven." },
        ],
      },
      {
        heading: "Who does what",
        body: [
          "They split the jobs. Chiara: \"Io cucino, tu apri il vino?\" Matteo: \"Certo! E dopo pulisco io la cucina.\" Putting \"io\" after the verb (\"pulisco io\") means I'll be the one who does it.",
          "Then Matteo spots a problem: \"Non abbiamo il parmigiano!\" Chiara: \"Hai ragione, ma c'è la mozzarella.\"",
        ],
        examples: [
          { es: "Io cucino, tu apri il vino?", en: "I'll cook, will you open the wine?" },
          { es: "Certo! E dopo pulisco io la cucina.", en: "Sure! And afterwards I'll clean the kitchen." },
          { es: "Non abbiamo il parmigiano!", en: "We don't have any parmesan!" },
          { es: "Hai ragione, ma c'è la mozzarella.", en: "You're right, but there's mozzarella." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll cook, will you open the wine? (to a friend)", answer: "Io cucino, tu apri il vino?", altAnswers: ["Cucino io, tu apri il vino?", "Io cucino, apri tu il vino?"], explanation: "Pronouns for the contrast; the present for a plan." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "And afterwards [I'll clean] the kitchen.", sentence: "E dopo ___ la cucina.", answer: "pulisco io", altAnswers: ["pulisco", "io pulisco"], explanation: "\"Pulisco io\": I'm the one who cleans." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you hungry? (to a friend)", answer: "Hai fame?", altAnswers: ["Tu hai fame?"], explanation: "\"Avere fame\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, I'm really hungry!", answer: "Sì, ho molta fame!", altAnswers: ["Sì, ho tanta fame!"], explanation: "\"Molta fame\": feminine noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I finish work at seven.", answer: "Finisco il lavoro alle sette.", altAnswers: ["Finisco di lavorare alle sette.", "Io finisco il lavoro alle sette."], explanation: "\"Finisco\": -isc-." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We don't have any parmesan!", answer: "Non abbiamo il parmigiano!", altAnswers: ["Non abbiamo parmigiano!", "Noi non abbiamo il parmigiano!"], explanation: "\"Non abbiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you opening the wine? (to a friend)", answer: "Apri il vino?", altAnswers: ["Tu apri il vino?", "Apri tu il vino?"], explanation: "\"Aprire\" → \"apri\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You're right], but there's mozzarella. (to a friend)", sentence: "___, ma c'è la mozzarella.", answer: "Hai ragione", altAnswers: ["Tu hai ragione"], explanation: "\"Avere ragione\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We eat] at eight?", sentence: "___ alle otto?", answer: "Mangiamo", altAnswers: ["Noi mangiamo"], explanation: "A suggestion with the noi form." },
      { type: "word-order", prompt: "Put the words in order to say: I'll cook and you'll clean the kitchen.", words: ["Io", "cucino", "e", "tu", "pulisci", "la", "cucina."], translation: "I'll cook and you'll clean the kitchen.", explanation: "\"Pulisci\": -isc- for tu." },
      { type: "multiple-choice", question: "Chiara asks \"Preferisci la pasta o il riso?\". Which reply fits?", options: ["La pasta, grazie.", "Sì, ho sete.", "Alle sette.", "Pulisco io."], correctIndex: 0, explanation: "An either-or question gets one of the two." },
      { type: "multiple-choice", question: "What does \"Pulisco io\" stress?", options: ["that I'm the one who cleans", "that I clean every day", "that I don't clean", "that you clean"], correctIndex: 0, explanation: "A pronoun after the verb puts the weight on who." },
      { type: "dictation", audio: "Hai fame? Io cucino, tu apri il vino.", explanation: "\"Hai\" with a silent h; \"apri\" for tu." },
      {
        type: "speak",
        text: "Ho molta fame! Preferisci la pasta o il riso?",
        prompt: "You're hungry. Tell your flatmate and ask: Do you prefer pasta or rice?",
        tip: "pre-fe-RI-shi: soft sc before i.",
        explanation: "An avere expression and an -isc- verb.",
      },
    ],
  },
  {
    slug: "a1-spiral-units-1-6",
    level: "IT-A1",
    number: 11,
    title: "Spiral Review: The First Half of A1",
    summary: "Follow a day in the life of Sofia, a nurse in Bari, using everything from Units 1-6.",
    duration: "16 min",
    kind: "review",
    sections: [
      {
        heading: "Morning in Bari",
        body: [
          "Sofia is a nurse. She's thirty-two, from Lecce, and lives in Bari with her flatmate Elena. Her day uses everything so far: essere, articles, numbers and times, -are, -ere and -ire verbs, and avere.",
        ],
        examples: [
          { es: "Sofia è infermiera. Ha trentadue anni.", en: "Sofia is a nurse. She's thirty-two." },
          { es: "È di Lecce, ma abita a Bari.", en: "She's from Lecce, but she lives in Bari." },
          { es: "La mattina prende un caffè al bar.", en: "In the morning she has a coffee at the bar." },
          { es: "Il caffè costa un euro e venti.", en: "The coffee costs one euro twenty." },
          { es: "Comincia a lavorare alle otto.", en: "She starts work at eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's from Lecce, but she lives in Bari.", answer: "È di Lecce, ma abita a Bari.", altAnswers: ["È di Lecce, ma vive a Bari.", "Lei è di Lecce, ma abita a Bari."], explanation: "\"Di\" + city of origin; \"a\" + city where you live." },
          { type: "listen-choose", audio: "Il caffè costa un euro e venti.", question: "How much is the coffee?", options: ["€1.20", "€1.02", "€2.20", "€12"], correctIndex: 0, explanation: "\"Un euro e venti\" = 1,20 €." },
        ],
      },
      {
        heading: "Afternoon and evening",
        body: [
          "Sofia finishes at four, then she's tired and hungry. In the evening she and Elena cook, read and watch a film. Notice who does what: the ending tells you.",
        ],
        examples: [
          { es: "Finisce alle quattro ed è stanca.", en: "She finishes at four and she's tired." },
          { es: "Ha fame e compra il pane.", en: "She's hungry and buys bread." },
          { es: "La sera Sofia ed Elena cucinano insieme.", en: "In the evening Sofia and Elena cook together." },
          { es: "Elena legge, Sofia scrive ai genitori.", en: "Elena reads, Sofia writes to her parents." },
          { es: "Alle undici dormono.", en: "At eleven they're asleep." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She finishes at four and she's tired.", answer: "Finisce alle quattro ed è stanca.", altAnswers: ["Finisce alle quattro e è stanca.", "Lei finisce alle quattro ed è stanca."], explanation: "\"Finisce\" (-isc-), \"è stanca\" (essere + feminine adjective); \"ed\" before a vowel is common." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the evening Sofia and Elena [cook] together.", sentence: "La sera Sofia ed Elena ___ insieme.", answer: "cucinano", explanation: "Two people: loro form, cu-CI-na-no." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sofia is a nurse.", answer: "Sofia è infermiera.", altAnswers: ["Sofia fa l'infermiera."], explanation: "No article after \"è\" with a profession." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's thirty-two.", answer: "Ha trentadue anni.", altAnswers: ["Lei ha trentadue anni.", "Ha 32 anni."], explanation: "Age with avere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the morning she has a coffee at the bar.", answer: "La mattina prende un caffè al bar.", altAnswers: ["La mattina prende il caffè al bar.", "Prende un caffè al bar la mattina."], explanation: "\"Prendere\" for food and drink." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Elena reads, Sofia writes.", answer: "Elena legge, Sofia scrive.", explanation: "-ere verbs: \"-e\" for he / she." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The flat is small but beautiful.", answer: "L'appartamento è piccolo ma bello.", altAnswers: ["L'appartamento è piccolo però bello."], explanation: "\"L'\" before a vowel; adjectives agree." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there a pharmacy near here?", answer: "C'è una farmacia qui vicino?", altAnswers: ["C'è una farmacia vicino?"], explanation: "\"C'è\" = there is." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[She starts] work at eight.", sentence: "___ a lavorare alle otto.", answer: "Comincia", altAnswers: ["Lei comincia"], explanation: "\"Comincia\": one i." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At eleven [they're asleep].", sentence: "Alle undici ___.", answer: "dormono", explanation: "\"Dormono\": no -isc-." },
      { type: "word-order", prompt: "Put the words in order to say: Elena and Sofia have a cat and two plants.", words: ["Elena", "e", "Sofia", "hanno", "un", "gatto", "e", "due", "piante."], translation: "Elena and Sofia have a cat and two plants.", explanation: "\"Hanno\": avere for loro." },
      { type: "multiple-choice", question: "Sofia meets her new head nurse, an older woman. How does she ask where she's from?", options: ["Di dov'è, signora?", "Di dove sei, signora?", "Da dove è, signora?", "Di dove siete?"], correctIndex: 0, explanation: "Lei + \"è\", and \"di\" for origin." },
      { type: "dictation", audio: "Sofia ha fame e compra il pane.", explanation: "\"Ha\" with h; \"compra\": -are verb." },
      {
        type: "speak",
        text: "Sono Sofia, ho trentadue anni e lavoro a Bari. La sera leggo e poi dormo.",
        prompt: "Be Sofia: I'm Sofia, I'm thirty-two and I work in Bari. In the evening I read and then I sleep.",
        tip: "tren-ta-DU-e: the stress falls on du.",
        explanation: "Essere, avere, an -are, an -ere and an -ire verb.",
      },
    ],
  },
];

export const IT_A1_U06_WRITING: WriteExercise = {
  type: "write",
  prompt: "You've just moved into a shared flat in Torino. Write a note to your new flatmate: say how you are tonight (hungry, tired...), what time you finish work or class, what you prefer to eat, and propose who does what for dinner (cooking, opening the wine, cleaning). Ask one question.",
  minWords: 30,
  maxWords: 80,
  rubric: [
    "Uses avere expressions correctly (ho fame, ho sonno, ho bisogno di), not essere",
    "Conjugates -ere and -ire verbs correctly (prendo, leggo, apro, dormo)",
    "Uses -isc- in io, tu, lui / lei and loro and not in noi or voi (finisco, preferisco, pulisci, puliamo)",
    "Asks a question by intonation or with a question word, using the tu form",
  ],
  modelAnswer: "Ciao Marta! Stasera ho molta fame, ma sono stanca. Finisco il lavoro alle sette e torno a casa alle otto. Preferisco la pasta, e tu? Io cucino, tu apri il vino? Dopo puliamo la cucina insieme. Hai bisogno di qualcosa dal supermercato? A dopo!",
  explanation: "\"Ho molta fame\" uses avere and \"molta\" agrees with \"fame\"; \"sono stanca\" uses essere because \"stanca\" is an adjective. \"Finisco\" and \"preferisco\" take -isc-, \"puliamo\" doesn't. \"Apri\" is a plain -ire verb. \"Qualcosa\" means something, and \"a dopo\" means see you later.",
};
