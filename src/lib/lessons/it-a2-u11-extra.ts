// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u11-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 11 Extra Practice: Shopping and Clothes. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U11_EXTRA: Lesson[] = [
  {
    slug: "a2-shopping-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Quello",
    summary: "Fresh sentences with quel, quello, quell', quella, quei, quegli, quelle.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "That and those",
        body: [
          "Say the article in your head, then swap it: \"il\" → \"quel\", \"lo\" → \"quello\", \"l'\" → \"quell'\", \"la\" → \"quella\", \"i\" → \"quei\", \"gli\" → \"quegli\", \"le\" → \"quelle\". New words: \"il costume\" (swimsuit), \"lo scialle\" (shawl), \"l'impermeabile\" (raincoat), \"gli zoccoli\" (clogs), \"le infradito\" (flip-flops).",
        ],
        examples: [
          { es: "Quel costume è troppo piccolo.", en: "That swimsuit is too small." },
          { es: "Quell'impermeabile è perfetto per Londra.", en: "That raincoat is perfect for London." },
          { es: "Quegli zoccoli sono scomodissimi.", en: "Those clogs are really uncomfortable." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That raincoat is perfect for London.", answer: "Quell'impermeabile è perfetto per Londra.", explanation: "\"L'impermeabile\" → \"quell'\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Those] clogs are really uncomfortable.", sentence: "___ zoccoli sono scomodissimi.", answer: "Quegli", explanation: "\"Gli zoccoli\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That swimsuit is too small.", answer: "Quel costume è troppo piccolo.", explanation: "\"Il costume\" → \"quel\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is that shawl?", answer: "Quanto costa quello scialle?", altAnswers: ["Quanto viene quello scialle?"], explanation: "\"Lo scialle\" → \"quello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Those flip-flops are mine.", answer: "Quelle infradito sono mie.", altAnswers: ["Quelle infradito sono le mie."], explanation: "\"Le infradito\" → \"quelle\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who is that woman?", answer: "Chi è quella donna?", altAnswers: ["Chi è quella signora?"], explanation: "\"Quella\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Those gloves are made of leather.", answer: "Quei guanti sono di pelle.", altAnswers: ["Quei guanti sono in pelle."], explanation: "\"I guanti\" → \"quei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That uncle of mine lives in Canada.", answer: "Quello zio vive in Canada.", altAnswers: ["Quello zio abita in Canada.", "Quel mio zio vive in Canada.", "Quel mio zio abita in Canada."], explanation: "\"Lo zio\" → \"quello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't like these, I prefer those.", answer: "Non mi piacciono questi, preferisco quelli.", altAnswers: ["Questi non mi piacciono, preferisco quelli.", "Non mi piacciono queste, preferisco quelle."], explanation: "Without a noun: \"quelli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That hotel is near the station.", answer: "Quell'albergo è vicino alla stazione.", altAnswers: ["Quell'hotel è vicino alla stazione."], explanation: "\"L'albergo\" → \"quell'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Those] socks are on sale.", sentence: "___ calzini sono in saldo.", answer: "Quei", explanation: "\"I calzini\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Can I see [that] belt?", sentence: "Posso vedere ___ cintura?", answer: "quella", explanation: "\"La cintura\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[That] student is Spanish.", sentence: "___ studente è spagnolo.", answer: "Quello", explanation: "\"Lo studente\"." },
      { type: "word-order", prompt: "Put the words in order to say: Those earrings are made of silver.", words: ["Quegli", "orecchini", "sono", "d'argento."], translation: "Those earrings are made of silver.", explanation: "\"Gli orecchini\" → \"quegli\"." },
      { type: "multiple-choice", question: "\"___ sciarpe sono di lana.\"", options: ["Quelle", "Quegli", "Quei", "Quella"], correctIndex: 0, explanation: "\"Le sciarpe\"." },
      { type: "dictation", audio: "Quel costume e quegli zoccoli sono in saldo.", explanation: "\"Quel\", \"quegli\"." },
      { type: "speak", text: "Posso provare quel costume e quelle infradito?", prompt: "Say it in Italian: Can I try that swimsuit and those flip-flops?", tip: "Quel (il), quelle (le).", explanation: "Two forms." },
    ],
  },
  {
    slug: "a2-shopping-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Bello",
    summary: "Fresh sentences with bel, bello, bell', bella, bei, begli, belle.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Bello before and after",
        body: [
          "Before the noun, like the article: \"un bel paio di scarpe\", \"un bello stadio\", \"una bell'amica\" (or \"bella amica\"), \"bei tempi\", \"begli anni\". After the noun or after \"essere\": regular \"bello, bella, belli, belle\".",
        ],
        examples: [
          { es: "Ho comprato un bel paio di scarpe.", en: "I bought a nice pair of shoes." },
          { es: "Erano bei tempi!", en: "Those were the days!" },
          { es: "Abbiamo passato dei begli anni a Roma.", en: "We spent some lovely years in Rome." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought a nice pair of shoes.", answer: "Ho comprato un bel paio di scarpe.", explanation: "\"Il paio\" → \"bel\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We spent some [lovely] years in Rome.", sentence: "Abbiamo passato dei ___ anni a Roma.", answer: "begli", explanation: "\"Gli anni\" → \"begli\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Those were the days!", answer: "Erano bei tempi!", altAnswers: ["Quelli sì che erano bei tempi!"], explanation: "\"I tempi\" → \"bei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a lovely stadium.", answer: "È un bello stadio.", altAnswers: ["È uno stadio bellissimo.", "È uno stadio bello."], explanation: "\"Lo stadio\" → \"bello\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a lovely surprise!", answer: "Che bella sorpresa!", explanation: "\"Bella\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They have lovely children.", answer: "Hanno dei bei bambini.", altAnswers: ["Hanno bei bambini.", "Hanno dei bambini bellissimi.", "Hanno dei bei figli."], explanation: "\"I bambini\" → \"bei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a lovely evening.", answer: "È stata una bella serata.", altAnswers: ["Era una bella serata.", "È stata una serata bellissima."], explanation: "\"Bella serata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These earrings are beautiful.", answer: "Questi orecchini sono belli.", altAnswers: ["Questi orecchini sono bellissimi."], explanation: "After \"essere\": \"belli\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's a handsome boy.", answer: "È un bel ragazzo.", explanation: "\"Il ragazzo\" → \"bel\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She has lovely hands.", answer: "Ha delle belle mani.", altAnswers: ["Ha belle mani.", "Ha delle mani bellissime."], explanation: "\"Le mani\" → \"belle\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "What a [lovely] mirror!", sentence: "Che ___ specchio!", answer: "bello", explanation: "\"Lo specchio\" → \"bello\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a [nice] office.", sentence: "È un ___ ufficio.", answer: "bell'", explanation: "\"L'ufficio\" → \"bell'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We took some [nice] photos.", sentence: "Abbiamo fatto delle ___ foto.", answer: "belle", explanation: "\"Le foto\" → \"belle\"." },
      { type: "word-order", prompt: "Put the words in order to say: We had a lovely day at the beach.", words: ["Abbiamo", "passato", "una", "bella", "giornata", "al", "mare."], translation: "We had a lovely day at the beach.", explanation: "\"Bella giornata\"." },
      { type: "multiple-choice", question: "\"Che ___ stivali!\"", options: ["begli", "bei", "belli", "bel"], correctIndex: 0, explanation: "\"Gli stivali\" → \"begli\"." },
      { type: "listen-choose", audio: "Erano bei tempi!", question: "What does the speaker mean?", options: ["Those were good times.", "The weather was nice.", "It's a beautiful time.", "Time goes fast."], correctIndex: 0, explanation: "A nostalgic phrase." },
      { type: "speak", text: "Che bel vestito! E quegli orecchini sono bellissimi.", prompt: "Say it in Italian: What a lovely dress! And those earrings are beautiful.", tip: "Bel before the noun; bellissimi after essere.", explanation: "\"Bello\" before and after." },
    ],
  },
  {
    slug: "a2-shopping-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Shop Dialogues",
    summary: "More shop and market exchanges: sizes, colours, prices, discounts and paying.",
    duration: "14 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Useful exchanges",
        body: [
          "Assistant: \"Posso aiutarLa?\", \"Che taglia porta?\", \"Che numero?\", \"Come va?\", \"Altro?\" Customer: \"Sto solo dando un'occhiata\" (I'm just looking), \"Avete una taglia più piccola?\", \"Lo / la prendo\", \"Quant'è?\", \"Posso pagare in contanti?\" (in cash).",
        ],
        examples: [
          { es: "Sto solo dando un'occhiata, grazie.", en: "I'm just looking, thanks." },
          { es: "Avete una taglia più piccola?", en: "Do you have a smaller size?" },
          { es: "Posso pagare in contanti?", en: "Can I pay in cash?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm just looking, thanks.", answer: "Sto solo dando un'occhiata, grazie.", altAnswers: ["Do solo un'occhiata, grazie.", "Guardo solo, grazie."], explanation: "\"Dare un'occhiata\" = to have a look." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I pay in cash?", answer: "Posso pagare in contanti?", altAnswers: ["Si può pagare in contanti?"], explanation: "\"In contanti\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have a smaller size?", answer: "Avete una taglia più piccola?", altAnswers: ["Ha una taglia più piccola?"], explanation: "Comparative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much is it altogether?", answer: "Quant'è in tutto?", altAnswers: ["Quanto è in tutto?", "Quanto viene in tutto?", "Quanto fa in tutto?"], explanation: "\"In tutto\" = altogether." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These shoes hurt me.", answer: "Queste scarpe mi fanno male.", explanation: "\"Fare male a\" + indirect pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you have this T-shirt in a medium?", answer: "Avete questa maglietta in taglia media?", altAnswers: ["Avete questa maglietta nella taglia M?", "Ha questa maglietta in taglia media?", "Avete questa maglietta in M?"], explanation: "\"Taglia media\" / \"M\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a present: can you wrap it? (the scarf)", answer: "È un regalo: può incartarla?", altAnswers: ["È un regalo: me la può incartare?", "È per un regalo: può incartarla?", "È un regalo: può farmi un pacchetto regalo?"], explanation: "\"La sciarpa\" → \"incartarla\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The red one is nicer than the black one.", answer: "Quella rossa è più bella di quella nera.", altAnswers: ["Quello rosso è più bello di quello nero."], explanation: "\"Quella\" without a noun + comparison." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll come back tomorrow with my husband.", answer: "Torno domani con mio marito.", altAnswers: ["Tornerò domani con mio marito.", "Ripasso domani con mio marito."], explanation: "Near plan: present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are these trousers made of cotton?", answer: "Questi pantaloni sono di cotone?", altAnswers: ["Sono di cotone questi pantaloni?", "Questi pantaloni sono in cotone?"], explanation: "\"Di cotone\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's [too big] for me.", sentence: "Mi sta ___.", answer: "troppo grande", altAnswers: ["troppo largo", "troppo larga"], explanation: "\"Troppo\" + adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Anything else]? (a shop assistant speaking)", sentence: "___?", answer: "Qualcos'altro", altAnswers: ["Altro", "Qualcosa d'altro"], explanation: "\"Qualcos'altro?\" or just \"Altro?\"" },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'll take them]. (the shoes)", sentence: "___.", answer: "Le prendo", explanation: "\"Le scarpe\" → \"le\"." },
      { type: "word-order", prompt: "Put the words in order to say: Is there a discount on these jackets?", words: ["C'è", "uno", "sconto", "su", "queste", "giacche?"], translation: "Is there a discount on these jackets?", explanation: "\"Uno sconto su\"." },
      { type: "multiple-choice", question: "The assistant says \"Come va?\" You're happy with the fit. What do you say?", options: ["Va benissimo, la prendo.", "Va bene, grazie, e tu?", "Sto benissimo.", "Vado a casa."], correctIndex: 0, explanation: "\"Va benissimo\" = it fits perfectly." },
      { type: "dictation", audio: "Avete una taglia più piccola? Questa mi sta larga.", explanation: "\"Più piccola\", \"mi sta larga\"." },
      { type: "speak", text: "Sto solo dando un'occhiata. Anzi, posso provare quel maglione blu? Porto la M.", prompt: "Say it in Italian: I'm just looking. Actually, can I try that blue jumper? I'm a medium.", tip: "Anzi = actually.", explanation: "A natural shop exchange." },
    ],
  },
];
