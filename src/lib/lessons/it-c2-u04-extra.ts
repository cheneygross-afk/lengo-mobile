// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u04-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 4 Extra Practice: The Questione della Lingua.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U04_EXTRA: Lesson[] = [
  {
    slug: "c2-questione-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: History",
    summary: "Read fresh short texts on the history of Italian, from the Sicilian poets to Unification, and render their key sentences.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Before Florence, and after",
        body: [
          "A short history in five sentences, written for this practice. \"La prima poesia d'arte in volgare nacque in Sicilia, alla corte di Federico II. I poeti toscani ne copiarono i testi, adattandoli alla propria pronuncia. Nel Trecento le Tre Corone diedero al fiorentino un prestigio senza rivali. Nel Cinquecento Bembo ne fece una norma scritta. Solo nel Novecento, con la scuola di massa e la televisione, quella norma diventò lingua parlata.\"",
          "Notice \"ne copiarono\" (copied their texts), \"ne fece\" (made it into): \"ne\" carries the thread from one sentence to the next.",
        ],
        examples: [
          { es: "La prima poesia d'arte in volgare nacque in Sicilia.", en: "The first art poetry in the vernacular was born in Sicily." },
          { es: "I poeti toscani ne copiarono i testi.", en: "The Tuscan poets copied their texts." },
          { es: "Bembo ne fece una norma scritta.", en: "Bembo made it into a written norm." },
          { es: "Quella norma diventò lingua parlata solo nel Novecento.", en: "That norm became a spoken language only in the twentieth century." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The first art poetry in the vernacular was born in Sicily.", answer: "La prima poesia d'arte in volgare nacque in Sicilia.", altAnswers: ["La prima poesia d'arte in volgare è nata in Sicilia.", "La prima poesia colta in volgare nacque in Sicilia."], explanation: "\"In Sicilia\": \"in\" for large islands." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Bembo [made it into] a written norm.", sentence: "Bembo ___ una norma scritta.", answer: "ne fece", explanation: "\"Fare di qualcosa una norma\" → \"farne una norma\"." },
        ],
      },
      {
        heading: "Voices of the debate",
        body: [
          "Paraphrased positions, as a history handbook might summarize them. Machiavelli: \"Chi scrive in italiano scrive in fiorentino, che lo voglia o no.\" Manzoni: \"Serve una lingua viva, e la lingua viva è quella di Firenze.\" Ascoli: \"Prima la cultura, poi la lingua: nessun decreto crea parlanti.\" De Mauro: \"La lingua comune è nata dalle esperienze comuni: la scuola, la caserma, la fabbrica, la televisione.\"",
        ],
        examples: [
          { es: "Chi scrive in italiano scrive in fiorentino, che lo voglia o no.", en: "Whoever writes in Italian writes in Florentine, like it or not." },
          { es: "Prima la cultura, poi la lingua.", en: "Culture first, then language." },
          { es: "Nessun decreto crea parlanti.", en: "No decree creates speakers." },
          { es: "La lingua comune è nata dalle esperienze comuni.", en: "The common language was born from common experiences." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No decree creates speakers.", answer: "Nessun decreto crea parlanti.", altAnswers: ["Nessun decreto crea dei parlanti.", "Nessuna legge crea parlanti."], explanation: "\"Nessun\" before a masculine consonant; no \"non\" when it comes first." },
          { type: "listen-choose", audio: "Chi scrive in italiano scrive in fiorentino, che lo voglia o no.", question: "Whose position is this?", options: ["Machiavelli", "Bembo", "Ascoli", "De Mauro"], correctIndex: 0, explanation: "Machiavelli defended living Florentine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Tuscan poets adapted the texts to their own pronunciation.", answer: "I poeti toscani adattarono i testi alla propria pronuncia.", altAnswers: ["I poeti toscani adattarono i testi alla loro pronuncia.", "I poeti toscani hanno adattato i testi alla propria pronuncia."], explanation: "\"Proprio\" refers back to the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Culture first, then language.", answer: "Prima la cultura, poi la lingua.", explanation: "Ascoli's position in four words." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whoever writes in Italian writes in Florentine, like it or not.", answer: "Chi scrive in italiano scrive in fiorentino, che lo voglia o no.", altAnswers: ["Chi scrive in italiano scrive in fiorentino, volente o nolente.", "Chi scrive in italiano scrive in fiorentino, che lo voglia o meno."], explanation: "\"Che lo voglia o no\" = whether one likes it or not." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The factory mixed workers from every region.", answer: "La fabbrica mescolava operai di ogni regione.", altAnswers: ["La fabbrica mescolò operai di ogni regione.", "La fabbrica mescolava operai da ogni regione.", "In fabbrica si mescolavano operai di ogni regione."], explanation: "\"Operaio\" = factory worker." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The Three Crowns gave Florentine unrivalled prestige.", answer: "Le Tre Corone diedero al fiorentino un prestigio senza rivali.", altAnswers: ["Le Tre Corone diedero al fiorentino un prestigio ineguagliato.", "Le Tre Corone hanno dato al fiorentino un prestigio senza rivali."], explanation: "\"Diedero\" (or \"dettero\"): \"passato remoto\" of \"dare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The Tuscan poets [copied their texts].", sentence: "I poeti toscani ___.", answer: "ne copiarono i testi", altAnswers: ["copiarono i loro testi"], explanation: "\"Ne\" = of them (the Sicilian poets)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The common language [was born from] common experiences.", sentence: "La lingua comune ___ esperienze comuni.", answer: "è nata dalle", altAnswers: ["nacque dalle"], explanation: "\"Nascere da\" + article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Only in the twentieth century] did it become a spoken language.", sentence: "___ diventò lingua parlata.", answer: "Solo nel Novecento", altAnswers: ["Soltanto nel Novecento", "Solo nel ventesimo secolo"], explanation: "\"Il Novecento\" = the 1900s." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We need] a living language.", sentence: "___ una lingua viva.", answer: "Serve", altAnswers: ["Ci vuole", "Occorre"], explanation: "\"Servire\" = to be needed, with the thing as subject." },
      { type: "word-order", prompt: "Put the words in order to say: No decree creates speakers.", words: ["Nessun", "decreto", "crea", "parlanti."], translation: "No decree creates speakers.", explanation: "Negative subject first, no \"non\"." },
      { type: "word-order", prompt: "Put the words in order to say: That norm became a spoken language.", words: ["Quella", "norma", "diventò", "lingua", "parlata."], translation: "That norm became a spoken language.", explanation: "No article after \"diventare\" here: a role, not a thing." },
      { type: "matching", instructions: "Match the period to the event.", pairs: [{ left: "il Duecento", right: "Sicilian poets at Frederick II's court" }, { left: "il Trecento", right: "the Three Crowns" }, { left: "il Cinquecento", right: "Bembo's norm" }, { left: "l'Ottocento", right: "Manzoni and Unification" }, { left: "il Novecento", right: "mass schooling and television" }], explanation: "Italian names for centuries." },
      { type: "multiple-choice", question: "What did Ascoli believe?", options: ["Culture must spread before a common language can.", "Florentine teachers should be sent everywhere.", "Dialects should be banned.", "Latin should return."], correctIndex: 0, explanation: "\"Prima la cultura, poi la lingua.\"" },
      { type: "dictation", audio: "Prima la cultura, poi la lingua: nessun decreto crea parlanti.", explanation: "\"Nessun\" without apostrophe before a masculine noun." },
      { type: "speak", text: "La lingua comune è nata dalle esperienze comuni: la scuola, la caserma, la fabbrica e la televisione.", prompt: "Say it in Italian: The common language was born from common experiences: school, the barracks, the factory and television.", tip: "List rhythm: a small pause after each item.", explanation: "De Mauro's thesis paraphrased." },
    ],
  },
  {
    slug: "c2-questione-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Language Today",
    summary: "Practice the language of today's debates on Italian: Anglicisms, neologisms, inclusive language and the neo-standard.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "New words",
        body: [
          "Every year dictionaries add new words. Some are Italian formations: \"apericena\" (aperitif plus dinner), \"femminicidio\" (the killing of a woman because she is a woman), \"svapare\" (to vape), \"bufala\" (a hoax, literally a buffalo). Some are adapted loans: \"googlare\", \"postare\", \"twittare\", conjugated like any -are verb: \"ho postato\", \"googlo\". Italian absorbs loans most easily as -are verbs.",
        ],
        examples: [
          { es: "Ci vediamo per un apericena?", en: "Shall we meet for an aperitif dinner?" },
          { es: "Quella notizia è una bufala.", en: "That news story is a hoax." },
          { es: "Ho postato le foto ieri sera.", en: "I posted the photos last night." },
          { es: "Ogni anno i dizionari accolgono nuove parole.", en: "Every year dictionaries take in new words." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That news story is a hoax.", answer: "Quella notizia è una bufala.", altAnswers: ["Quella notizia è una bufala!", "È una bufala, quella notizia."], explanation: "\"Bufala\" = hoax, fake news." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I posted] the photos last night.", sentence: "___ le foto ieri sera.", answer: "Ho postato", altAnswers: ["Ho pubblicato"], explanation: "\"Postare\": a loan conjugated as an -are verb." },
        ],
      },
      {
        heading: "Debates of today",
        body: [
          "Current debates include inclusive language: feminine job titles (\"la ministra\", \"l'avvocata\"), now widely accepted, and graphic experiments such as the asterisk or the schwa (\"tutt*\", \"tuttə\") to avoid the masculine plural, which most linguists and the Crusca advise against in official texts. Another debate is about simplicity: campaigns for \"linguaggio chiaro\" in public administration, replacing \"si comunica che\" with \"vi informiamo che\".",
        ],
        examples: [
          { es: "La ministra ha presentato la riforma.", en: "The minister presented the reform." },
          { es: "Lo schwa è sconsigliato nei testi ufficiali.", en: "The schwa is not recommended in official texts." },
          { es: "La pubblica amministrazione dovrebbe scrivere in modo chiaro.", en: "Public administration should write clearly." },
          { es: "Vi informiamo che l'ufficio resterà chiuso.", en: "We inform you that the office will remain closed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Public administration should write clearly.", answer: "La pubblica amministrazione dovrebbe scrivere in modo chiaro.", altAnswers: ["La pubblica amministrazione dovrebbe scrivere chiaramente.", "La pubblica amministrazione dovrebbe scrivere con chiarezza."], explanation: "Conditional \"dovrebbe\" for a recommendation." },
          { type: "dictation", audio: "La ministra ha presentato la riforma ieri mattina.", explanation: "Feminine job title: \"la ministra\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every year dictionaries take in new words.", answer: "Ogni anno i dizionari accolgono nuove parole.", altAnswers: ["Ogni anno i vocabolari accolgono nuove parole.", "Ogni anno i dizionari accolgono parole nuove."], explanation: "\"Accogliere\" = to welcome, take in." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we meet for an aperitif dinner?", answer: "Ci vediamo per un apericena?", altAnswers: ["Ci vediamo per un'apericena?", "Facciamo un apericena?"], explanation: "\"Apericena\" is used as masculine or feminine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The minister presented the reform. (a woman)", answer: "La ministra ha presentato la riforma.", altAnswers: ["La ministra presentò la riforma."], explanation: "Feminine job title, now standard in journalism." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We inform you that the office will remain closed.", answer: "Vi informiamo che l'ufficio resterà chiuso.", altAnswers: ["La informiamo che l'ufficio resterà chiuso.", "Vi informiamo che l'ufficio rimarrà chiuso."], explanation: "Plain-language alternative to \"si comunica che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I googled the word.", answer: "Ho googlato la parola.", altAnswers: ["Ho cercato la parola su Google."], explanation: "\"Googlare\": conjugated like \"parlare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The schwa [is not recommended] in official texts.", sentence: "Lo schwa ___ nei testi ufficiali.", answer: "è sconsigliato", altAnswers: ["non è consigliato", "viene sconsigliato"], explanation: "\"Sconsigliare\" = to advise against." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Italian absorbs loans most easily [as -are verbs].", sentence: "L'italiano assorbe i prestiti più facilmente ___.", answer: "come verbi in -are", explanation: "\"Postare\", \"twittare\", \"chattare\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Plain language] helps citizens.", sentence: "___ aiuta i cittadini.", answer: "Il linguaggio chiaro", altAnswers: ["Una lingua chiara", "Un linguaggio chiaro"], explanation: "\"Linguaggio chiaro\": the name of the campaigns." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "That photo [is fake].", sentence: "Quella foto ___.", answer: "è falsa", altAnswers: ["è una bufala", "è un falso"], explanation: "\"Falso\" agrees: \"foto\" is feminine." },
      { type: "word-order", prompt: "Put the words in order to say: That news story is a hoax.", words: ["Quella", "notizia", "è", "una", "bufala."], translation: "That news story is a hoax.", explanation: "\"Bufala\" = hoax." },
      { type: "word-order", prompt: "Put the words in order to say: I posted the photos last night.", words: ["Ho", "postato", "le foto", "ieri", "sera."], translation: "I posted the photos last night.", explanation: "\"Foto\" is invariable: \"le foto\"." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la bufala", right: "a hoax" }, { left: "l'apericena", right: "an aperitif that replaces dinner" }, { left: "svapare", right: "to vape" }, { left: "postare", right: "to post online" }, { left: "lo schwa", right: "the ə symbol" }], explanation: "Recent words and debates." },
      { type: "multiple-choice", question: "Which formula is the plain-language version?", options: ["Vi informiamo che l'ufficio resterà chiuso.", "Si comunica che l'ufficio resterà chiuso.", "Si rende noto che l'ufficio resterà chiuso.", "Con la presente si fa presente la chiusura."], correctIndex: 0, explanation: "Direct address replaces the impersonal bureaucratic formulas." },
      { type: "listen-choose", audio: "Quella notizia è una bufala.", question: "What does it mean?", options: ["That news story is a hoax.", "That news story is about a buffalo.", "That news is good.", "That news is old."], correctIndex: 0, explanation: "\"Bufala\" = hoax in everyday Italian." },
      { type: "speak", text: "Secondo me, la pubblica amministrazione dovrebbe scrivere in modo chiaro e usare meno anglicismi.", prompt: "Give your view in Italian: In my opinion, public administration should write clearly and use fewer Anglicisms.", tip: "\"Anglicismi\": an-gli-CI-smi, with a hard g + li as in \"glicine\", not the soft gli of \"famiglia\".", explanation: "\"Dovrebbe\" for a recommendation." },
    ],
  },
];
