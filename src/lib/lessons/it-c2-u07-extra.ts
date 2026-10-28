// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u07-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 7 Extra Practice: Wordplay, Irony and Humour.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
// All texts are original to this course.
export const IT_C2_U07_EXTRA: Lesson[] = [
  {
    slug: "c2-humour-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Irony",
    summary: "Read fresh ironic exchanges and a short ironic review, and render their key lines.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Ironic exchanges",
        body: [
          "Four short exchanges written for this practice. \"Ho trovato parcheggio in centro al primo colpo.\" \"Sì, e io ho vinto la lotteria.\" — \"Il capo ha detto che quest'anno ci aumenta lo stipendio.\" \"Ah, beh, allora siamo a posto.\" — \"Ti piace il mio nuovo taglio?\" \"Coraggioso.\" — \"Il wifi dell'albergo era gratuito.\" \"E funzionava?\" \"Non esageriamo.\"",
        ],
        examples: [
          { es: "Sì, e io ho vinto la lotteria.", en: "Yeah, and I've won the lottery." },
          { es: "Ah, beh, allora siamo a posto.", en: "Oh well, we're all set then." },
          { es: "Coraggioso.", en: "Brave. (i.e. not flattering)" },
          { es: "Non esageriamo.", en: "Let's not get carried away." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's not get carried away.", answer: "Non esageriamo.", altAnswers: ["Adesso non esageriamo.", "Non esagerare."], explanation: "Ironic limit." },
          { type: "multiple-choice", question: "Your friend shows you a new haircut and you answer \"Coraggioso\". What are you implying?", options: ["You don't really like it.", "You love it.", "It was expensive.", "It's very short."], correctIndex: 0, explanation: "Understatement as criticism." },
        ],
      },
      {
        heading: "An ironic review",
        body: [
          "An invented online review of a restaurant: \"Esperienza indimenticabile. Il cameriere ci ha ignorato con grande professionalità per quaranta minuti. La pasta era al dente, nel senso che ci voleva un dentista. Il conto, invece, era cotto alla perfezione. Torneremo? Magari in un'altra vita.\" Note the ironic praise (\"indimenticabile\", \"con grande professionalità\"), the pun on \"al dente\", and the final rhetorical question.",
        ],
        examples: [
          { es: "Esperienza indimenticabile.", en: "An unforgettable experience." },
          { es: "Il cameriere ci ha ignorato con grande professionalità.", en: "The waiter ignored us with great professionalism." },
          { es: "Il conto era cotto alla perfezione.", en: "The bill was cooked to perfection." },
          { es: "Torneremo? Magari in un'altra vita.", en: "Will we be back? Maybe in another life." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe in another life.", answer: "Magari in un'altra vita.", altAnswers: ["Forse in un'altra vita."], explanation: "\"Magari\" = maybe." },
          { type: "listen-choose", audio: "Il cameriere ci ha ignorato con grande professionalità.", question: "What is the real complaint?", options: ["The waiter ignored them.", "The waiter was very professional.", "The food was cold.", "The bill was wrong."], correctIndex: 0, explanation: "Ironic praise of a failure." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yeah, and I've won the lottery.", answer: "Sì, e io ho vinto la lotteria.", altAnswers: ["Sì, come no, e io ho vinto la lotteria."], explanation: "Absurd comparison = disbelief." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Oh well, we're all set then.", answer: "Ah, beh, allora siamo a posto.", altAnswers: ["Allora siamo a posto.", "Beh, allora siamo a posto."], explanation: "\"Essere a posto\" = to be all set." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I found parking downtown on the first attempt.", answer: "Ho trovato parcheggio in centro al primo colpo.", altAnswers: ["Ho trovato parcheggio in centro al primo tentativo."], explanation: "\"Al primo colpo\" = first time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "An unforgettable experience.", answer: "Un'esperienza indimenticabile.", altAnswers: ["Esperienza indimenticabile."], explanation: "Ironic praise opens the review." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Was the hotel wifi free?", answer: "Il wifi dell'albergo era gratuito?", altAnswers: ["Il wifi dell'hotel era gratuito?", "Il wifi dell'albergo era gratis?"], explanation: "\"Gratuito\" (adjective) or \"gratis\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bill was cooked to perfection.", answer: "Il conto era cotto alla perfezione.", altAnswers: ["Il conto era cucinato alla perfezione."], explanation: "Kitchen language applied to the bill." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The boss said he'll [raise our salary] this year.", sentence: "Il capo ha detto che quest'anno ci ___.", answer: "aumenta lo stipendio", altAnswers: ["aumenterà lo stipendio"], explanation: "\"Aumentare lo stipendio a qualcuno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pasta was al dente, [in the sense that] you needed a dentist.", sentence: "La pasta era al dente, ___ ci voleva un dentista.", answer: "nel senso che", explanation: "\"Nel senso che\" introduces the pun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Will we be back]? Maybe in another life.", sentence: "___? Magari in un'altra vita.", answer: "Torneremo", altAnswers: ["Ci torneremo"], explanation: "Rhetorical question in the future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you like] my new haircut?", sentence: "___ il mio nuovo taglio?", answer: "Ti piace", altAnswers: ["Le piace", "Vi piace"], explanation: "\"Piacere\" with an indirect pronoun." },
      { type: "word-order", prompt: "Put the words in order to say: Did it work? Let's not get carried away.", words: ["E", "funzionava?", "Non", "esageriamo."], translation: "Did it work? Let's not get carried away.", explanation: "Ironic limit." },
      { type: "matching", instructions: "Match the ironic line to its real meaning.", pairs: [{ left: "Coraggioso.", right: "I don't like it." }, { left: "Non esageriamo.", right: "No, it didn't work." }, { left: "Esperienza indimenticabile.", right: "A terrible experience." }, { left: "Magari in un'altra vita.", right: "Never." }], explanation: "Reading irony." },
      { type: "multiple-choice", question: "\"Ah, beh, allora siamo a posto\" after news of a pay rise from a stingy boss means:", options: ["The speaker doesn't believe it.", "The speaker is relieved.", "The speaker is leaving.", "The speaker is angry with a colleague."], correctIndex: 0, explanation: "Flat tone = disbelief." },
      { type: "dictation", audio: "Il cameriere ci ha ignorato con grande professionalità per quaranta minuti.", explanation: "Ironic review style." },
      { type: "speak", text: "Esperienza indimenticabile. Torneremo? Magari in un'altra vita.", prompt: "Read the ironic review's frame aloud.", tip: "Serious voice, slight pause before \"Magari\".", explanation: "Irony by tone." },
    ],
  },
  {
    slug: "c2-humour-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Wordplay",
    summary: "Work through fresh riddles, punning slogans and idioms taken literally.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "More 'colmi'",
        body: [
          "Fresh riddles in the classic form: \"Il colmo per un pescatore? Abboccare.\" (\"abboccare\" = to bite, of fish, and to fall for a trick). \"Il colmo per un dentista? Avere il dente avvelenato\" (to bear a grudge). \"Il colmo per un muratore? Avere un mattone sullo stomaco\" (to feel heavy, after a meal or a worry). \"Il colmo per un orologiaio? Perdere tempo.\" One more idiom for the exercises: \"una buona forchetta\" (a hearty eater).",
        ],
        examples: [
          { es: "Il colmo per un pescatore? Abboccare.", en: "For a fisherman? Taking the bait (falling for it)." },
          { es: "Il colmo per un dentista? Avere il dente avvelenato.", en: "For a dentist? Bearing a grudge (a poisoned tooth)." },
          { es: "Il colmo per un orologiaio? Perdere tempo.", en: "For a watchmaker? Wasting (losing) time." },
          { es: "Ho un mattone sullo stomaco.", en: "I feel weighed down (a brick on my stomach)." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He bears a grudge against me.", answer: "Ha il dente avvelenato con me.", altAnswers: ["Ce l'ha con me.", "Ha il dente avvelenato nei miei confronti."], explanation: "\"Avere il dente avvelenato con qualcuno\"." },
          { type: "multiple-choice", question: "Why is \"abboccare\" funny for a fisherman?", options: ["It means both 'to bite the hook' and 'to fall for a trick'.", "Fishermen never eat fish.", "It means 'to sail'.", "It's a regional word for boat."], correctIndex: 0, explanation: "The fisherman becomes the fish." },
        ],
      },
      {
        heading: "Slogans",
        body: [
          "Invented slogans built on idioms: a glasses shop, \"Vedere per credere\" (seeing is believing); a gym, \"Perdi peso, non perdere tempo\"; a bakery, \"Buono come il pane, anzi di più\" (\"buono come il pane\" = good-hearted); a moving company, \"Ti cambiamo la vita, un pacco alla volta\".",
        ],
        examples: [
          { es: "Vedere per credere.", en: "Seeing is believing." },
          { es: "Perdi peso, non perdere tempo.", en: "Lose weight, not time." },
          { es: "È buono come il pane.", en: "He's as good as gold." },
          { es: "Un pacco alla volta.", en: "One box at a time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's as good as gold.", answer: "È buono come il pane.", altAnswers: ["Lui è buono come il pane."], explanation: "Italian uses bread, not gold." },
          { type: "listen-choose", audio: "Perdi peso, non perdere tempo.", question: "What kind of business uses this slogan?", options: ["a gym", "a watch shop", "a bank", "a bakery"], correctIndex: 0, explanation: "\"Perdere peso\" and \"perdere tempo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Seeing is believing.", answer: "Vedere per credere.", explanation: "Fixed phrase, used in ads." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't waste time.", answer: "Non perdere tempo.", altAnswers: ["Non perdete tempo.", "Non perda tempo."], explanation: "\"Perdere tempo\" = to waste time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He fell for it straight away.", answer: "Ha abboccato subito.", altAnswers: ["Ci è cascato subito.", "Abboccò subito."], explanation: "\"Abboccare\" = to take the bait." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After lunch I feel weighed down.", answer: "Dopo pranzo ho un mattone sullo stomaco.", altAnswers: ["Dopo il pranzo ho un mattone sullo stomaco.", "Dopo pranzo mi sento appesantito."], explanation: "\"Un mattone sullo stomaco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "One box at a time.", answer: "Un pacco alla volta.", altAnswers: ["Una scatola alla volta.", "Un pacco per volta."], explanation: "\"Alla volta\" = at a time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her son is a big eater.", answer: "Suo figlio è una buona forchetta.", altAnswers: ["Il figlio è una buona forchetta.", "Suo figlio mangia tantissimo."], explanation: "\"Una buona forchetta\" = a hearty eater." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "For a watchmaker? [Wasting time].", sentence: "Il colmo per un orologiaio? ___.", answer: "Perdere tempo", explanation: "\"Perdere\" = to lose and to waste." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Good as bread, [indeed better].", sentence: "Buono come il pane, ___.", answer: "anzi di più", altAnswers: ["anzi meglio"], explanation: "\"Anzi\" = or rather." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We'll change your life], one box at a time.", sentence: "___, un pacco alla volta.", answer: "Ti cambiamo la vita", altAnswers: ["Vi cambiamo la vita", "Ti cambieremo la vita"], explanation: "Literal and figurative 'move'." },
      { type: "word-order", prompt: "Put the words in order to say: Lose weight, not time.", words: ["Perdi", "peso,", "non", "perdere", "tempo."], translation: "Lose weight, not time.", explanation: "Negative imperative \"non perdere\"." },
      { type: "matching", instructions: "Match the idiom to its meaning.", pairs: [{ left: "abboccare", right: "to fall for it" }, { left: "avere il dente avvelenato", right: "to bear a grudge" }, { left: "una buona forchetta", right: "a hearty eater" }, { left: "buono come il pane", right: "good-hearted" }], explanation: "Idioms behind the puns." },
      { type: "multiple-choice", question: "Which business would use \"Vedere per credere\"?", options: ["an optician", "a bakery", "a gym", "a bank"], correctIndex: 0, explanation: "Seeing is literally the product." },
      { type: "multiple-choice", question: "What does \"Il colmo per un dentista? Avere il dente avvelenato\" play on?", options: ["the idiom for bearing a grudge", "a real disease", "dentists' prices", "a proverb about candy"], correctIndex: 0, explanation: "\"Avere il dente avvelenato\"." },
      { type: "dictation", audio: "Il colmo per un pescatore? Abboccare.", explanation: "\"Abboccare\": double \"b\" and double \"c\"." },
      { type: "speak", text: "Il colmo per un orologiaio? Perdere tempo!", prompt: "Tell the riddle with good timing.", tip: "Pause after the question.", explanation: "A classic \"colmo\"." },
    ],
  },
];
