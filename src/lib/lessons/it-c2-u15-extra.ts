// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u15-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 15 Extra Practice: Editing and Correcting Texts.
// Wrong forms are shown unquoted with an asterisk.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U15_EXTRA: Lesson[] = [
  {
    slug: "c2-editing-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Spelling",
    summary: "Fresh sentences that test apostrophes, accents, double consonants and the -cie- spellings natives get wrong.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Five quick checks",
        body: [
          "Before you type: is it elision or truncation (\"un'amica\" vs \"un amico\", \"qual è\")? Does the monosyllable have a twin (\"dà\" / \"da\")? Is it a compound of \"che\" (acute: \"perché\")? Double consonant? \"-cie-\" or \"-ce-\"?",
        ],
        examples: [
          { es: "Un'amica mi ha prestato un ombrello.", en: "A friend lent me an umbrella." },
          { es: "Non so né dove né quando.", en: "I know neither where nor when." },
          { es: "La superficie del tavolo è graffiata.", en: "The surface of the table is scratched." },
          { es: "Accelera, siamo in ritardo!", en: "Speed up, we're late!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A friend (female) lent me an umbrella.", answer: "Un'amica mi ha prestato un ombrello.", altAnswers: ["Un'amica mi ha prestato l'ombrello."], explanation: "\"Un'amica\" with an apostrophe, \"un ombrello\" without." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know neither where nor when.", answer: "Non so né dove né quando.", altAnswers: ["Io non so né dove né quando."], explanation: "\"Né\" with an acute accent." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The surface of the table is scratched.", answer: "La superficie del tavolo è graffiata.", altAnswers: ["La superficie del tavolo è rigata."], explanation: "\"Superficie\" keeps the i after c." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Speed up, we're late! (to a friend)", answer: "Accelera, siamo in ritardo!", altAnswers: ["Accelera che siamo in ritardo!", "Vai più veloce, siamo in ritardo!"], explanation: "\"Accelerare\": double c, single l." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's an exception, not the rule.", answer: "È un'eccezione, non la regola.", altAnswers: ["Si tratta di un'eccezione, non della regola."], explanation: "\"Eccezione\": double c, single z." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're not satisfied with the result.", answer: "Non siamo soddisfatti del risultato.", altAnswers: ["Non siamo soddisfatte del risultato.", "Non siamo contenti del risultato."], explanation: "\"Soddisfatti\": double d, single f." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is there anyone else?", answer: "C'è qualcun altro?", altAnswers: ["C'è nessun altro?", "C'è qualcun'altra?"], explanation: "\"Qualcun altro\" (masculine generic): no apostrophe." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Why] don't you come with us?", sentence: "___ non vieni con noi?", answer: "Perché", explanation: "Acute accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The provinces of the South [and] the islands.", sentence: "Le province del Sud ___ le isole.", answer: "e", explanation: "\"E\" (and) has no accent; \"province\" drops the i (consonant before -cia)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Can I have [a bit] of water?", sentence: "Posso avere ___ d'acqua?", answer: "un po'", explanation: "Apostrophe, never accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The train [comes from] Milan.", sentence: "Il treno ___ Milano.", answer: "viene da", altAnswers: ["arriva da"], explanation: "\"Da\" (from) without an accent." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There's] no milk left.", sentence: "Non ___ più latte.", answer: "c'è", explanation: "\"C'è\" = \"ci\" + \"è\"." },
      { type: "word-order", prompt: "Put the words in order to say: It's another story.", words: ["È", "un'altra", "storia."], translation: "It's another story.", explanation: "Feminine: \"un'altra\"." },
      { type: "multiple-choice", question: "Which word is spelled correctly?", options: ["efficiente", "efficente", "eficiente", "efficcente"], correctIndex: 0, explanation: "\"Efficiente\": double f, -cie-." },
      { type: "multiple-choice", question: "Which needs an accent?", options: ["Lui ___ una mano a tutti. (gives)", "Vengo ___ Roma. (from)", "Abito ___ un anno qui. (for)", "Passo ___ te. (by)"], correctIndex: 0, explanation: "\"Dà\" (gives); the others are the preposition \"da\"." },
      {
        type: "matching",
        instructions: "Match the correct spelling to its meaning.",
        pairs: [
          { left: "purtroppo", right: "unfortunately" },
          { left: "proprio", right: "exactly, really" },
          { left: "d'accordo", right: "agreed" },
          { left: "qual è", right: "what is, which is" },
          { left: "ventitré", right: "twenty-three" },
        ],
        explanation: "Five spellings natives get wrong.",
      },
      { type: "dictation", audio: "Non so né dove né quando, ma ci sarò.", explanation: "\"Né\" twice, \"sarò\" with a grave accent." },
      { type: "speak", text: "È un'eccezione, non la regola: purtroppo non c'è altro modo.", prompt: "Say it in Italian: It's an exception, not the rule: unfortunately there's no other way.", tip: "ec-ce-ZIO-ne: double c, single z.", explanation: "Several spelling traps, all invisible in speech." },
    ],
  },
  {
    slug: "c2-editing-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Grammar",
    summary: "Fresh correction practice: hypotheses, pronouns, relatives, mood after connectors and popular verb forms.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "What to look for",
        body: [
          "*Se + conditional, *gli for to her, *che for di cui / in cui, *vadi / *dasse, subjunctive after \"sapere che\" or \"dopo che\", indicative after \"benché\" or \"prima che\".",
        ],
        examples: [
          { es: "Se potessi, ti aiuterei.", en: "If I could, I'd help you." },
          { es: "Le ho prestato la macchina.", en: "I lent her the car." },
          { es: "È un argomento di cui si parla poco.", en: "It's a topic people rarely talk about." },
          { es: "Benché sia stanca, continua a lavorare.", en: "Although she's tired, she keeps working." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I could, I'd help you.", answer: "Se potessi, ti aiuterei.", altAnswers: ["Se potessi ti aiuterei.", "Se potessi, la aiuterei.", "Se potessi, vi aiuterei."], explanation: "\"Se\" + imperfect subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I lent her the car.", answer: "Le ho prestato la macchina.", altAnswers: ["Le ho prestato l'auto.", "Le ho prestato la mia macchina."], explanation: "\"Le\" for to her." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a topic people rarely talk about.", answer: "È un argomento di cui si parla poco.", altAnswers: ["È un argomento di cui si parla raramente.", "È un tema di cui si parla poco."], explanation: "\"Parlare di\" → \"di cui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although she's tired, she keeps working.", answer: "Benché sia stanca, continua a lavorare.", altAnswers: ["Sebbene sia stanca, continua a lavorare.", "Anche se è stanca, continua a lavorare.", "Nonostante sia stanca, continua a lavorare."], explanation: "\"Benché\" + subjunctive; \"anche se\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they had left earlier, they would have arrived on time.", answer: "Se fossero partiti prima, sarebbero arrivati in tempo.", altAnswers: ["Se fossero partiti prima, sarebbero arrivati in orario.", "Se fossero partite prima, sarebbero arrivate in tempo."], explanation: "Pluperfect subjunctive + past conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's the city where I studied.", answer: "È la città in cui ho studiato.", altAnswers: ["È la città dove ho studiato.", "È la città nella quale ho studiato."], explanation: "\"In cui\" / \"dove\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know they're coming tomorrow.", answer: "So che vengono domani.", altAnswers: ["So che verranno domani.", "Lo so che vengono domani."], explanation: "\"Sapere che\" + indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want you [to do] it today.", sentence: "Voglio che tu lo ___ oggi.", answer: "faccia", explanation: "\"Faccia\", present subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you [were] in my place, what would you do?", sentence: "Se tu ___ al mio posto, che cosa faresti?", answer: "fossi", explanation: "Imperfect subjunctive of \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd like him [to stay] a bit longer.", sentence: "Vorrei che ___ ancora un po'.", answer: "restasse", altAnswers: ["stesse", "rimanesse"], explanation: "\"Vorrei che\" + imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After [he left], we tidied up.", sentence: "Dopo che ___, abbiamo messo in ordine.", answer: "è partito", altAnswers: ["se n'è andato", "è uscito"], explanation: "\"Dopo che\" + indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "This route is [worse] than the other.", sentence: "Questo percorso è ___ dell'altro.", answer: "peggiore", altAnswers: ["peggio"], explanation: "No \"più\" before \"peggiore\"." },
      { type: "word-order", prompt: "Put the words in order to say: I lent her the car.", words: ["Le", "ho", "prestato", "la", "macchina."], translation: "I lent her the car.", explanation: "\"Le\" before the auxiliary." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Bisogna che tu vada.", "Bisogna che tu vadi.", "Bisogna che tu vai.", "Bisogna che tu andassi adesso."], correctIndex: 0, explanation: "Present subjunctive, tu: \"vada\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Se mi dessi una mano, finiremmo prima.", "Se mi daresti una mano, finiremmo prima.", "Se mi dassi una mano, finiremmo prima.", "Se mi davi una mano, finiremmo prima."], correctIndex: 0, explanation: "\"Dessi\": imperfect subjunctive of \"dare\"." },
      {
        type: "matching",
        instructions: "Match the connector to its mood.",
        pairs: [
          { left: "benché", right: "subjunctive (concession)" },
          { left: "anche se", right: "indicative (real fact)" },
          { left: "qualora", right: "subjunctive (hypothesis)" },
          { left: "visto che", right: "indicative (cause)" },
        ],
        explanation: "Mood choice after connectors.",
      },
      { type: "listen-choose", audio: "Se tu fossi al mio posto, che cosa faresti?", question: "What is the speaker asking?", options: ["What would you do in my place?", "Where is my place?", "What did you do yesterday?", "Will you take my place?"], correctIndex: 0, explanation: "Hypothetical: \"fossi\" + \"faresti\"." },
      { type: "dictation", audio: "Benché sia stanca, continua a lavorare.", explanation: "\"Benché\" + \"sia\"." },
      { type: "speak", text: "Se tu fossi al mio posto, le parleresti?", prompt: "Say it in Italian: If you were in my place, would you talk to her?", tip: "\"Le\" (to her) is short: don't swallow it.", explanation: "Hypothesis and the right pronoun." },
    ],
  },
];
