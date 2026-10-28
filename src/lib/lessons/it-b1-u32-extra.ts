// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u32-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 32 Extra Practice: Reported Speech, Part 1. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U32_EXTRA: Lesson[] = [
  {
    slug: "b1-reported-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Statements",
    summary: "Fresh statements to report with dice che and ha detto che, shifting tense, person and time.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Who said what",
        body: [
          "Present reporting verb: no shift (\"Dice che è contento\"). Past reporting verb: \"è\" → \"era\", \"ho visto\" → \"aveva visto\", \"vedrò\" → \"avrebbe visto\". Shift \"io\" → \"lui / lei\", \"mio\" → \"suo\", \"domani\" → \"il giorno dopo\" when reported later.",
        ],
        examples: [
          { es: "Il nonno dice che è contento.", en: "Grandpa says he's happy." },
          { es: "Ha detto che aveva visto un incidente.", en: "She said she'd seen an accident." },
          { es: "Ha detto che sua madre era spagnola.", en: "He said his mother was Spanish." },
          { es: "Ha detto che avrebbe smesso di fumare.", en: "He said he'd give up smoking." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she'd seen an accident.", answer: "Ha detto che aveva visto un incidente.", altAnswers: ["Ha detto di aver visto un incidente."], explanation: "Trapassato." },
          { type: "listen-choose", audio: "Ha detto che avrebbe smesso di fumare.", question: "What did he say?", options: ["He would give up smoking.", "He had given up smoking.", "He was smoking.", "He never smoked."], correctIndex: 0, explanation: "Conditional past = future in the past." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandpa says he's happy.", answer: "Il nonno dice che è contento.", altAnswers: ["Il nonno dice che è felice."], explanation: "No shift." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said his mother was Spanish.", answer: "Ha detto che sua madre era spagnola.", altAnswers: ["Ha detto che sua mamma era spagnola."], explanation: "\"Mia\" → \"sua\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said the shop was closed.", answer: "Ha detto che il negozio era chiuso.", altAnswers: [], explanation: "\"È\" → \"era\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They said they had sold the house.", answer: "Hanno detto che avevano venduto la casa.", altAnswers: ["Hanno detto di aver venduto la casa."], explanation: "Trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he'd give up smoking.", answer: "Ha detto che avrebbe smesso di fumare.", altAnswers: [], explanation: "Conditional past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The guide explained that the castle was very old.", answer: "La guida ha spiegato che il castello era molto antico.", altAnswers: ["La guida ha spiegato che il castello era antichissimo."], explanation: "\"Spiegare che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me she'd been ill the week before.", answer: "Mi ha detto che era stata male la settimana prima.", altAnswers: ["Mi ha detto che era stata malata la settimana prima."], explanation: "\"La settimana scorsa\" → \"la settimana prima\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My friends say they're coming tonight.", answer: "I miei amici dicono che vengono stasera.", altAnswers: ["I miei amici dicono che verranno stasera."], explanation: "Present reporting verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he would never forget that day.", answer: "Ha detto che non avrebbe mai dimenticato quel giorno.", altAnswers: [], explanation: "\"Questo\" → \"quel\"; future → conditional past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She said she [was] tired.", sentence: "Ha detto che ___ stanca.", answer: "era", explanation: "\"Sono\" → \"era\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said he [would arrive] the next day.", sentence: "Ha detto che ___ il giorno dopo.", answer: "sarebbe arrivato", explanation: "Conditional past." },
      { type: "word-order", prompt: "Put the words in order to say: She said she had never been to Rome.", words: ["Ha", "detto", "che", "non", "era", "mai", "stata", "a", "Roma."], translation: "She said she had never been to Rome.", explanation: "Trapassato with \"essere\"." },
      { type: "multiple-choice", question: "\"Ho finito\" reported with \"ha detto che\":", options: ["aveva finito", "finiva", "finirebbe", "finisse"], correctIndex: 0, explanation: "Trapassato." },
      { type: "dictation", audio: "Ha detto che sua madre era spagnola e suo padre greco.", explanation: "\"Sua\", \"suo\"." },
      { type: "speak", text: "Il nonno ha detto che da giovane lavorava in miniera e che non avrebbe mai dimenticato quegli anni.", prompt: "Report it: Grandpa said that as a young man he worked in a mine and that he would never forget those years.", tip: "\"Quegli anni\": \"questi\" → \"quegli\".", explanation: "Imperfetto stays; future → conditional past." },
    ],
  },
  {
    slug: "b1-reported-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Questions and Commands",
    summary: "Fresh questions and commands to report with se, question words and di + infinitive.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At the doctor, at school, at work",
        body: [
          "Questions: \"chiedere se\" or keep the question word. Commands and requests: \"dire / chiedere / consigliare di\" + infinitive, with pronouns attached: \"Mi ha detto di prenderle\" (to take them).",
        ],
        examples: [
          { es: "Il medico mi ha chiesto se dormivo bene.", en: "The doctor asked me if I was sleeping well." },
          { es: "Mi ha detto di prendere le pastiglie dopo i pasti.", en: "She told me to take the tablets after meals." },
          { es: "La maestra ha chiesto chi aveva finito.", en: "The teacher asked who had finished." },
          { es: "Il capo ci ha detto di non fare straordinari.", en: "The boss told us not to do overtime." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor asked me if I was sleeping well.", answer: "Il medico mi ha chiesto se dormivo bene.", altAnswers: ["Il dottore mi ha chiesto se dormivo bene.", "Il medico mi ha chiesto se dormissi bene."], explanation: "\"Se\" + imperfetto." },
          { type: "listen-choose", audio: "Il capo ci ha detto di non fare straordinari.", question: "What did the boss say?", options: ["not to do overtime", "to do overtime", "to leave early", "to come in on Saturday"], correctIndex: 0, explanation: "\"Di non fare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me to take the tablets after meals.", answer: "Mi ha detto di prendere le pastiglie dopo i pasti.", altAnswers: ["Mi ha detto di prendere le compresse dopo i pasti."], explanation: "\"Dire di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher asked who had finished.", answer: "La maestra ha chiesto chi aveva finito.", altAnswers: ["Il maestro ha chiesto chi aveva finito.", "L'insegnante ha chiesto chi aveva finito."], explanation: "Keep \"chi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The boss told us not to do overtime.", answer: "Il capo ci ha detto di non fare straordinari.", altAnswers: ["Il capo ci ha detto di non fare gli straordinari."], explanation: "\"Di non\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me how long I'd been in Italy.", answer: "Mi ha chiesto da quanto tempo ero in Italia.", altAnswers: ["Mi ha chiesto da quanto ero in Italia."], explanation: "\"Da quanto tempo sei\" → \"da quanto tempo ero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She advised me to drink more water.", answer: "Mi ha consigliato di bere più acqua.", altAnswers: [], explanation: "\"Consigliare di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They asked us if we needed help.", answer: "Ci hanno chiesto se avevamo bisogno di aiuto.", altAnswers: ["Ci hanno chiesto se ci serviva aiuto."], explanation: "\"Se\" + imperfetto." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told me to turn it off.", answer: "Mi ha detto di spegnerlo.", altAnswers: ["Mi ha detto di spegnerla."], explanation: "Pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked the shop assistant which size it was.", answer: "Ho chiesto alla commessa che taglia era.", altAnswers: ["Ho chiesto al commesso che taglia era.", "Ho chiesto alla commessa quale taglia era."], explanation: "\"Che\" here is the question word (which)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lifeguard told the children not to go far.", answer: "Il bagnino ha detto ai bambini di non allontanarsi.", altAnswers: ["Il bagnino ha detto ai bambini di non andare lontano."], explanation: "Reflexive infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She asked me [what time] it was.", sentence: "Mi ha chiesto ___ erano.", answer: "che ore", explanation: "\"Che ore sono?\" → \"che ore erano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He told us [to wait for him].", sentence: "Ci ha detto ___.", answer: "di aspettarlo", explanation: "Pronoun on the infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: The doctor asked me if I smoked.", words: ["Il", "medico", "mi", "ha", "chiesto", "se", "fumavo."], translation: "The doctor asked me if I smoked.", explanation: "\"Fuma?\" → \"se fumavo\"." },
      { type: "multiple-choice", question: "\"Non toccate niente!\" reported:", options: ["Ci ha detto di non toccare niente.", "Ci ha detto che non tocchiamo niente.", "Ci ha chiesto se non toccavamo niente.", "Ci ha detto non toccate niente."], correctIndex: 0, explanation: "\"Di non\" + infinitive." },
      { type: "dictation", audio: "Mi ha chiesto da quanto tempo ero in Italia.", explanation: "Reported question with \"da quanto tempo\"." },
      { type: "speak", text: "Il medico mi ha chiesto se dormivo bene e mi ha consigliato di bere più acqua.", prompt: "Tell a friend: The doctor asked me if I was sleeping well and advised me to drink more water.", tip: "\"Consigliato\": the \"gl\" sound, con-si-GLIA-to.", explanation: "Question + advice." },
    ],
  },
  {
    slug: "b1-reported-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Messages",
    summary: "Read two voice messages and a note, and pass them on in reported speech.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three messages",
        body: [
          "Voice message from Elena: \"Ciao, sono Elena! Domani non posso venire a pranzo perché ho una visita dal dentista. Possiamo fare venerdì? Fammi sapere!\"",
          "Voice message from the plumber: \"Buongiorno, sono l'idraulico. Passerò giovedì mattina verso le nove. Lasci le chiavi alla portinaia, per favore.\"",
          "Note from your flatmate: \"Ho finito il latte, scusa! Ne compro un litro stasera. Hai pagato la bolletta della luce?\"",
        ],
        examples: [
          { es: "Elena ha detto che il giorno dopo non poteva venire a pranzo.", en: "Elena said she couldn't come to lunch the next day." },
          { es: "Ha chiesto se potevamo fare venerdì.", en: "She asked if we could do Friday." },
          { es: "L'idraulico ha detto che sarebbe passato giovedì.", en: "The plumber said he'd come by on Thursday." },
          { es: "Mi ha chiesto di lasciare le chiavi alla portinaia.", en: "He asked me to leave the keys with the concierge." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Why can't Elena come?", options: ["She has a dentist's appointment.", "She's working.", "She's ill.", "She's travelling."], correctIndex: 0, explanation: "\"Una visita dal dentista\"." },
          { type: "listen-choose", audio: "Passerò giovedì mattina verso le nove.", question: "When is the plumber coming?", options: ["Thursday morning around nine", "Tuesday at nine", "Thursday evening", "Friday morning"], correctIndex: 0, explanation: "\"Giovedì mattina verso le nove\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Elena said she couldn't come to lunch the next day.", answer: "Elena ha detto che il giorno dopo non poteva venire a pranzo.", altAnswers: ["Elena ha detto che non poteva venire a pranzo il giorno dopo."], explanation: "\"Domani non posso\" → \"il giorno dopo non poteva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked if we could do Friday.", answer: "Ha chiesto se potevamo fare venerdì.", altAnswers: ["Ha chiesto se potevamo fare di venerdì.", "Ha chiesto se potevamo vederci venerdì."], explanation: "\"Possiamo?\" → \"se potevamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me to let her know.", answer: "Mi ha detto di farle sapere.", altAnswers: [], explanation: "\"Fammi sapere\" → \"di farle sapere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The plumber said he'd come by on Thursday.", answer: "L'idraulico ha detto che sarebbe passato giovedì.", altAnswers: [], explanation: "\"Passerò\" → \"sarebbe passato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He asked me to leave the keys with the concierge.", answer: "Mi ha chiesto di lasciare le chiavi alla portinaia.", altAnswers: ["Mi ha chiesto di lasciare le chiavi al portinaio."], explanation: "Formal imperative → \"chiedere di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My flatmate said she'd finished the milk.", answer: "La mia coinquilina ha detto che aveva finito il latte.", altAnswers: ["Il mio coinquilino ha detto che aveva finito il latte."], explanation: "Trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she'd buy a litre that evening.", answer: "Ha detto che ne avrebbe comprato un litro quella sera.", altAnswers: ["Ha detto che avrebbe comprato un litro quella sera."], explanation: "\"Stasera\" → \"quella sera\"; keep \"ne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked me if I'd paid the electricity bill.", answer: "Mi ha chiesto se avevo pagato la bolletta della luce.", altAnswers: [], explanation: "\"Hai pagato?\" → \"se avevo pagato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She said she [had] a dentist's appointment.", sentence: "Ha detto che ___ una visita dal dentista.", answer: "aveva", explanation: "\"Ho\" → \"aveva\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said he'd come [around] nine.", sentence: "Ha detto che sarebbe passato ___ le nove.", answer: "verso", explanation: "\"Verso\" = around (time)." },
      { type: "word-order", prompt: "Put the words in order to say: She asked if we could meet on Friday.", words: ["Ha", "chiesto", "se", "potevamo", "vederci", "venerdì."], translation: "She asked if we could meet on Friday.", explanation: "\"Se\" + imperfetto." },
      { type: "multiple-choice", question: "\"Fammi sapere!\" reported:", options: ["Mi ha detto di farle sapere.", "Mi ha detto che le faccio sapere.", "Mi ha chiesto se fammi sapere.", "Mi ha detto di fammi sapere."], correctIndex: 0, explanation: "\"Mi\" (her speaking) → \"le\"." },
      { type: "multiple-choice", question: "What does the flatmate ask about?", options: ["the electricity bill", "the milk", "the keys", "the plumber"], correctIndex: 0, explanation: "\"La bolletta della luce\"." },
      { type: "dictation", audio: "L'idraulico ha detto che sarebbe passato giovedì verso le nove.", explanation: "Future in the past." },
      { type: "speak", text: "Ha chiamato Elena: ha detto che domani non può venire a pranzo e ha chiesto se possiamo fare venerdì.", prompt: "Pass on Elena's message on the same day: Elena called: she said she can't come to lunch tomorrow and asked if we can do Friday.", tip: "Same day: you can keep \"domani\" and the present.", explanation: "Same-day reporting in relaxed speech." },
    ],
  },
];
