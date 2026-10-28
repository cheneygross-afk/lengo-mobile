// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u28.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 28: Opinions and Debate. Agreeing, disagreeing,
// conceding, interrupting; opinion verbs with the subjunctive or the
// indicative, softeners, intonation. Conventions:
// docs/italian-course/authoring.md.
export const IT_B1_U28: Lesson[] = [
  {
    slug: "b1-agreeing",
    level: "IT-B1",
    number: 1,
    title: "Agreeing",
    summary: "Agree in Italian, from a quick esatto to la penso esattamente come te, and say why.",
    duration: "17 min",
    sections: [
      {
        heading: "Sono d'accordo",
        body: [
          "The basic phrase is \"essere d'accordo\" (to agree), always with the apostrophe: \"Sono d'accordo con te\", \"Siamo tutti d'accordo\". With what you agree about, use \"su\": \"Sono d'accordo su questo punto\". English agree is a verb; in Italian it's \"essere\" + \"d'accordo\", so it changes with the person: \"sei d'accordo?\", \"non sono d'accordo\".",
          "\"Hai ragione\" (you're right) uses \"avere\", not \"essere\": \"Hai perfettamente ragione\", \"Ha ragione Lei\". The opposite is \"avere torto\" (to be wrong). \"Avere ragione\" is about people; for a statement that's true, say \"è vero\".",
        ],
        examples: [
          { es: "Sono d'accordo con te.", en: "I agree with you." },
          { es: "Su questo punto siamo tutti d'accordo.", en: "We all agree on this point." },
          { es: "Hai perfettamente ragione.", en: "You're absolutely right." },
          { es: "Ha ragione Lei, signora.", en: "You're right, madam." },
          { es: "È vero, non ci avevo pensato.", en: "That's true, I hadn't thought of that." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I agree with you. (to a friend)", answer: "Sono d'accordo con te.", altAnswers: ["Io sono d'accordo con te.", "Sono d'accordo con te!"], explanation: "\"Essere d'accordo con\" + person." },
          { type: "multiple-choice", question: "Your friend makes a good point. Which reply is right?", options: ["Hai ragione.", "Sei ragione.", "Hai d'accordo.", "Fai ragione."], correctIndex: 0, explanation: "\"Avere ragione\" uses \"avere\"." },
        ],
      },
      {
        heading: "Short and strong",
        body: [
          "In conversation Italians agree in one word: \"Esatto!\", \"Appunto!\" (exactly, that's just what I'm saying), \"Certo!\", \"Infatti!\" (indeed), \"Assolutamente sì\". \"Appunto\" is especially Italian: it means your point confirms mine.",
          "Longer phrases: \"La penso come te\" (I see it the way you do; \"la\" is a fixed pronoun here), \"Sono pienamente d'accordo\", \"Non potrei essere più d'accordo\" (I couldn't agree more), \"Hai centrato il punto\" (you've hit the nail on the head).",
        ],
        examples: [
          { es: "Esatto! È proprio quello che penso.", en: "Exactly! That's just what I think." },
          { es: "Appunto, è quello che dicevo anch'io.", en: "Precisely, that's what I was saying too." },
          { es: "La penso esattamente come te.", en: "I see it exactly the way you do." },
          { es: "Non potrei essere più d'accordo.", en: "I couldn't agree more." },
          { es: "Infatti, anche secondo me è troppo caro.", en: "Indeed, I think it's too expensive too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I see it the way you do. (to a friend)", answer: "La penso come te.", altAnswers: ["La penso come te anch'io.", "La penso esattamente come te.", "Anch'io la penso come te."], explanation: "\"Pensarla come qualcuno\": \"la\" is fixed." },
          { type: "listen-choose", audio: "Appunto, è quello che dicevo anch'io.", question: "What is the speaker doing?", options: ["agreeing strongly", "disagreeing politely", "changing the subject", "asking a question"], correctIndex: 0, explanation: "\"Appunto\" = precisely, my point exactly." },
        ],
      },
      {
        heading: "Agreeing and adding a reason",
        body: [
          "A bare \"sì\" sounds flat in a discussion; Italians add a reason or an example with \"perché\", \"anche perché\" (also because) or \"tra l'altro\" (what's more): \"Sono d'accordo, anche perché i prezzi sono aumentati\". Certainty takes the indicative: \"è vero che\", \"è chiaro che\" (\"È chiaro che bisogna cambiare\"). \"Sono convinto che\" accepts both moods; the subjunctive is more common in writing.",
          "Intonation: agreement falls at the end and is often stretched: \"Esaaatto\", \"Ceeerto\".",
        ],
        examples: [
          { es: "Sono d'accordo, anche perché i prezzi sono aumentati.", en: "I agree, also because prices have gone up." },
          { es: "È chiaro che bisogna cambiare qualcosa.", en: "It's clear something needs to change." },
          { es: "Sono convinta che sia la scelta giusta.", en: "I'm convinced it's the right choice." },
          { es: "Hai ragione, e tra l'altro costa anche meno.", en: "You're right, and what's more it costs less too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I agree, also because it's cheaper.", answer: "Sono d'accordo, anche perché costa meno.", altAnswers: ["Sono d'accordo, anche perché è più economico.", "Sono d'accordo, anche perché è meno caro."], explanation: "\"Anche perché\" adds a reason." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It's clear that] we need to change.", sentence: "___ dobbiamo cambiare.", answer: "È chiaro che", altAnswers: ["È evidente che"], explanation: "Certainty: indicative after \"è chiaro che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We all agree on this point.", answer: "Su questo punto siamo tutti d'accordo.", altAnswers: ["Siamo tutti d'accordo su questo punto."], explanation: "\"D'accordo su\" + topic." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're absolutely right. (to a friend)", answer: "Hai perfettamente ragione.", altAnswers: ["Hai assolutamente ragione.", "Hai proprio ragione.", "Hai completamente ragione."], explanation: "\"Avere ragione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I couldn't agree more.", answer: "Non potrei essere più d'accordo.", altAnswers: ["Non potrei essere più d'accordo di così."], explanation: "Conditional of \"potere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's true, I hadn't thought of that.", answer: "È vero, non ci avevo pensato.", altAnswers: ["Vero, non ci avevo pensato.", "È vero, non ci avevo pensato!"], explanation: "\"Pensarci\" = to think of it; trapassato." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you agree? (to a friend)", answer: "Sei d'accordo?", altAnswers: ["Tu sei d'accordo?", "Sei d'accordo con me?"], explanation: "\"Essere\" changes with the person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right, madam.", answer: "Ha ragione, signora.", altAnswers: ["Ha ragione Lei, signora.", "Lei ha ragione, signora."], explanation: "Lei form: \"ha ragione\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm convinced] it's the right choice.", sentence: "___ sia la scelta giusta.", answer: "Sono convinto che", altAnswers: ["Sono convinta che"], explanation: "Many speakers use the subjunctive after \"sono convinto che\"; the indicative is also correct." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You're right, and [what's more] it's quicker.", sentence: "Hai ragione, e ___ è più veloce.", answer: "tra l'altro", altAnswers: ["per di più", "in più", "inoltre"], explanation: "\"Tra l'altro\" adds a point." },
      { type: "word-order", prompt: "Put the words in order to say: That's exactly what I think.", words: ["È", "proprio", "quello", "che", "penso."], translation: "That's exactly what I think.", explanation: "\"Quello che\" = what." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "Esatto!", right: "Exactly!" }, { left: "Appunto!", right: "Precisely, my point!" }, { left: "Infatti!", right: "Indeed!" }, { left: "Hai torto.", right: "You're wrong." }, { left: "Hai ragione.", right: "You're right." }], explanation: "Short agreeing (and one disagreeing) words." },
      { type: "dictation", audio: "La penso esattamente come te.", explanation: "\"Pensarla come\": fixed \"la\"." },
      { type: "speak", text: "Esatto! Sono pienamente d'accordo, anche perché i prezzi sono aumentati.", prompt: "Agree warmly and give a reason: Exactly! I fully agree, also because prices have gone up.", tip: "Stretch the stressed vowel: \"esaaatto\", and let the voice fall.", explanation: "One-word agreement + full phrase + reason." },
    ],
  },
  {
    slug: "b1-disagreeing",
    level: "IT-B1",
    number: 2,
    title: "Disagreeing Politely",
    summary: "Disagree without offending: non sono d'accordo, non la vedo così, non credo che sia vero, sì, però.",
    duration: "17 min",
    sections: [
      {
        heading: "Non sono d'accordo",
        body: [
          "The direct form is \"Non sono d'accordo\" or \"Non sono d'accordo con te su questo\". Italians debate openly, but between people who don't know each other well a softer frame works better: \"Mah, non so\", \"Non la vedo così\" (I don't see it that way), \"Io la vedo diversamente\", \"Non direi\" (I wouldn't say so).",
          "\"Mah\" with a falling tone signals doubt before you even explain. \"Guarda\" / \"Senta\" (look) opens a counter-argument: \"Guarda, io non sono convinto\".",
        ],
        examples: [
          { es: "Non sono d'accordo con te su questo.", en: "I don't agree with you on this." },
          { es: "Mah, io non la vedo così.", en: "Well, I don't see it that way." },
          { es: "Io la vedo diversamente.", en: "I see it differently." },
          { es: "Non direi. Secondo me è il contrario.", en: "I wouldn't say so. I think it's the opposite." },
          { es: "Guarda, io non sono per niente convinto.", en: "Look, I'm not at all convinced." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't see it that way.", answer: "Non la vedo così.", altAnswers: ["Io non la vedo così.", "Non la vedo così, io."], explanation: "\"Vederla\": \"la\" is fixed, like \"pensarla\"." },
          { type: "listen-choose", audio: "Mah, io la vedo diversamente.", question: "What is the speaker's attitude?", options: ["polite disagreement", "enthusiastic agreement", "anger", "confusion about the question"], correctIndex: 0, explanation: "\"Mah\" + \"la vedo diversamente\"." },
        ],
      },
      {
        heading: "Non credo che sia vero",
        body: [
          "Opinion verbs that express doubt or a personal view take the subjunctive in written and careful Italian: \"Non credo che sia vero\", \"Dubito che funzioni\", \"Non penso che abbiano ragione\", \"Mi sembra che tu esageri\" (I think you're exaggerating). Spoken Italian often uses the indicative after \"penso che\"; write the subjunctive.",
          "But \"secondo me\" and \"per me\" take the indicative, because they aren't verbs of thinking: \"Secondo me è sbagliato\". Don't write \"secondo me sia\".",
        ],
        examples: [
          { es: "Non credo che sia vero.", en: "I don't think it's true." },
          { es: "Dubito che questa legge funzioni.", en: "I doubt this law will work." },
          { es: "Mi sembra che tu stia esagerando.", en: "I think you're exaggerating." },
          { es: "Secondo me è una pessima idea.", en: "In my opinion it's a terrible idea." },
          { es: "Non penso che i giovani leggano meno di prima.", en: "I don't think young people read less than before." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt it [works].", sentence: "Dubito che ___.", answer: "funzioni", explanation: "\"Dubitare che\" + subjunctive." },
          { type: "multiple-choice", question: "Which sentence is correct written Italian?", options: ["Secondo me è sbagliato.", "Secondo me sia sbagliato.", "Secondo me che sia sbagliato.", "Secondo me essere sbagliato."], correctIndex: 0, explanation: "\"Secondo me\" + indicative." },
        ],
      },
      {
        heading: "Sì, però ...",
        body: [
          "The most common Italian way to disagree is to agree first: \"Sì, però ...\", \"Sì, ma ...\", \"Capisco, però ...\", \"Hai ragione in parte, ma ...\". It sounds cooperative while you change direction. Use one connector, not two: \"ma\" or \"però\", never \"ma però\" in writing.",
          "Intonation: rise on \"sì\" and pause before \"però\". The pause tells the listener the real point is coming.",
        ],
        examples: [
          { es: "Sì, però non tutti possono permetterselo.", en: "Yes, but not everyone can afford it." },
          { es: "Capisco, però il problema è un altro.", en: "I understand, but the problem is something else." },
          { es: "Hai ragione in parte, ma non dimentichiamo i costi.", en: "You're partly right, but let's not forget the costs." },
          { es: "Sarà, ma io non ci credo.", en: "Maybe so, but I don't believe it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, but not everyone can afford it.", answer: "Sì, però non tutti possono permetterselo.", altAnswers: ["Sì, ma non tutti possono permetterselo.", "Sì, però non tutti se lo possono permettere.", "Sì, ma non tutti se lo possono permettere."], explanation: "\"Permettersi qualcosa\" = to afford something." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I understand, but the problem is something else.", answer: "Capisco, però il problema è un altro.", altAnswers: ["Capisco, ma il problema è un altro.", "Lo capisco, però il problema è un altro."], explanation: "\"Un altro\" = another one, something else." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't agree with you on this. (to a friend)", answer: "Non sono d'accordo con te su questo.", altAnswers: ["Su questo non sono d'accordo con te.", "Non sono d'accordo con te su questa cosa."], explanation: "\"Essere d'accordo con\" + person, \"su\" + topic." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think it's true.", answer: "Non credo che sia vero.", altAnswers: ["Non penso che sia vero."], explanation: "Doubt: subjunctive \"sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion it's a bad idea.", answer: "Secondo me è una cattiva idea.", altAnswers: ["Secondo me è una brutta idea.", "Per me è una cattiva idea.", "Per me è una brutta idea."], explanation: "\"Secondo me\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I see it differently.", answer: "Io la vedo diversamente.", altAnswers: ["La vedo diversamente.", "Io la vedo in modo diverso."], explanation: "\"Vederla\" with fixed \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt they're right.", answer: "Dubito che abbiano ragione.", altAnswers: ["Dubito che loro abbiano ragione."], explanation: "Subjunctive of \"avere\": \"abbiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you're exaggerating. (to a friend)", answer: "Mi sembra che tu stia esagerando.", altAnswers: ["Mi sembra che tu esageri.", "Secondo me stai esagerando.", "Secondo me esageri."], explanation: "\"Mi sembra che\" + subjunctive; keep \"tu\" for clarity." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I wouldn't say so]. It's the opposite.", sentence: "___. È il contrario.", answer: "Non direi", explanation: "Conditional softens the disagreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think young people [read] less.", sentence: "Non penso che i giovani ___ meno.", answer: "leggano", explanation: "Subjunctive of \"leggere\": \"leggano\"." },
      { type: "word-order", prompt: "Put the words in order to say: You're partly right, but let's not forget the costs.", words: ["Hai", "ragione", "in", "parte,", "ma", "non", "dimentichiamo", "i", "costi."], translation: "You're partly right, but let's not forget the costs.", explanation: "\"In parte\" = partly." },
      { type: "multiple-choice", question: "Which is the most diplomatic way to disagree with a colleague?", options: ["Capisco, però io la vedo diversamente.", "Hai torto.", "Che sciocchezza!", "Non è vero niente."], correctIndex: 0, explanation: "Acknowledge, then disagree." },
      { type: "dictation", audio: "Mah, non credo che sia una buona idea.", explanation: "\"Mah\" signals doubt." },
      { type: "speak", text: "Sì, però non tutti possono permetterselo.", prompt: "Disagree politely: Yes, but not everyone can afford it.", tip: "Rise on \"sì\", short pause, then fall on \"permetterselo\".", explanation: "Agree first, then turn with \"però\"." },
    ],
  },
  {
    slug: "b1-conceding",
    level: "IT-B1",
    number: 3,
    title: "Conceding a Point",
    summary: "Grant part of an argument and keep your position: è vero che ..., ma; hai ragione su questo, però; anche se; ammetto che.",
    duration: "17 min",
    sections: [
      {
        heading: "È vero che ..., ma ...",
        body: [
          "Conceding means admitting part of the other side's argument before you return to yours. The classic frame is \"È vero che ..., ma ...\": \"È vero che i treni sono cari, ma sono comodi\". After \"è vero che\" use the indicative: it's a fact you accept.",
          "Other frames: \"Hai ragione su questo, però ...\", \"D'accordo, ma ...\", \"Non dico di no, però ...\" (I'm not saying no, but), \"Questo è giusto, tuttavia ...\" (more formal).",
        ],
        examples: [
          { es: "È vero che i treni sono cari, ma sono comodi.", en: "It's true trains are expensive, but they're comfortable." },
          { es: "Hai ragione su questo, però c'è un altro aspetto.", en: "You're right about that, but there's another side." },
          { es: "Non dico di no, però bisogna pensarci bene.", en: "I'm not saying no, but we need to think it over." },
          { es: "D'accordo, ma chi paga?", en: "Fine, but who pays?" },
          { es: "Questo è giusto, tuttavia i dati dicono altro.", en: "That's fair, however the data say something else." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true that trains are expensive, but they're fast.", answer: "È vero che i treni sono cari, ma sono veloci.", altAnswers: ["È vero che i treni costano molto, ma sono veloci.", "È vero che i treni sono cari, però sono veloci."], explanation: "\"È vero che\" + indicative, then \"ma\"." },
          { type: "listen-choose", audio: "Non dico di no, però bisogna pensarci bene.", question: "What does the speaker mean?", options: ["Possibly, but it needs careful thought.", "Definitely not.", "Yes, let's do it now.", "I didn't say anything."], correctIndex: 0, explanation: "\"Non dico di no\" = I'm not against it, but..." },
        ],
      },
      {
        heading: "Anche se and benché",
        body: [
          "\"Anche se\" (even though, even if) takes the indicative: \"Anche se costa di più, preferisco il treno\". \"Benché\" and \"sebbene\" mean the same but take the subjunctive and sound more formal: \"Benché costi di più, preferisco il treno\". \"Nonostante\" works with the subjunctive or with a noun: \"nonostante il prezzo\".",
          "Notice how the concession can come first or second: \"Preferisco il treno, anche se costa di più\".",
        ],
        examples: [
          { es: "Anche se costa di più, preferisco il treno.", en: "Even though it costs more, I prefer the train." },
          { es: "Benché sia stanca, vengo alla riunione.", en: "Although I'm tired, I'm coming to the meeting." },
          { es: "Nonostante il prezzo, il biglietto è andato a ruba.", en: "Despite the price, the ticket sold out fast." },
          { es: "Ci vado, anche se non ne ho voglia.", en: "I'm going, even though I don't feel like it." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although it [is] expensive, it's worth it.", sentence: "Benché ___ caro, ne vale la pena.", answer: "sia", explanation: "\"Benché\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Even though it costs more, I prefer the train.", answer: "Anche se costa di più, preferisco il treno.", altAnswers: ["Preferisco il treno, anche se costa di più.", "Anche se costa più, preferisco il treno."], explanation: "\"Anche se\" + indicative." },
        ],
      },
      {
        heading: "Ammetto che",
        body: [
          "To concede gracefully: \"Ammetto che hai ragione\" (I admit you're right), \"Devo dire che non hai torto\", \"Su questo ti do ragione\" (on this I'll grant you're right). \"Dare ragione a qualcuno\" means to agree that someone is right.",
          "Concession builds credibility in a debate: the other side hears that you listen.",
        ],
        examples: [
          { es: "Ammetto che su questo hai ragione.", en: "I admit you're right about this." },
          { es: "Devo dire che non hai tutti i torti.", en: "I have to say you're not entirely wrong." },
          { es: "Su questo ti do ragione.", en: "On this I'll grant you're right." },
          { es: "Anche il professore mi ha dato ragione.", en: "Even the teacher agreed I was right." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I admit you're right. (to a friend)", answer: "Ammetto che hai ragione.", altAnswers: ["Ammetto che tu abbia ragione.", "Devo ammettere che hai ragione."], explanation: "\"Ammettere che\" + indicative (an accepted fact)." },
          { type: "multiple-choice", question: "\"Non hai tutti i torti\" means ...", options: ["You're not entirely wrong.", "You're completely wrong.", "You have no right.", "You're never wrong."], correctIndex: 0, explanation: "A soft concession." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right about that, but there's another problem. (to a friend)", answer: "Hai ragione su questo, però c'è un altro problema.", altAnswers: ["Su questo hai ragione, però c'è un altro problema.", "Hai ragione su questo, ma c'è un altro problema."], explanation: "Concede, then \"però\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although I'm tired, I'll come.", answer: "Benché sia stanco, vengo.", altAnswers: ["Benché sia stanca, vengo.", "Anche se sono stanco, vengo.", "Anche se sono stanca, vengo.", "Sebbene sia stanco, vengo.", "Sebbene sia stanca, vengo."], explanation: "\"Benché\" + subjunctive or \"anche se\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the rain, the concert went well.", answer: "Nonostante la pioggia, il concerto è andato bene.", altAnswers: ["Malgrado la pioggia, il concerto è andato bene."], explanation: "\"Nonostante\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Fine, but who pays?", answer: "D'accordo, ma chi paga?", altAnswers: ["Va bene, ma chi paga?", "D'accordo, però chi paga?"], explanation: "\"D'accordo\" alone = fine, OK." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On this I'll grant you're right. (to a friend)", answer: "Su questo ti do ragione.", altAnswers: ["Ti do ragione su questo."], explanation: "\"Dare ragione a\" = to agree someone is right." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going, even though I don't feel like it.", answer: "Ci vado, anche se non ne ho voglia.", altAnswers: ["Vado, anche se non ne ho voglia.", "Ci vado anche se non ne ho voglia."], explanation: "\"Averne voglia\" = to feel like it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It's true that] it's far, but it's beautiful.", sentence: "___ è lontano, ma è bellissimo.", answer: "È vero che", explanation: "Indicative after \"è vero che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although they [have] little money, they travel a lot.", sentence: "Sebbene ___ pochi soldi, viaggiano molto.", answer: "abbiano", explanation: "\"Sebbene\" + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: I'm not saying no, but let's think about it.", words: ["Non", "dico", "di", "no,", "però", "pensiamoci."], translation: "I'm not saying no, but let's think about it.", explanation: "\"Pensiamoci\" = let's think about it." },
      { type: "multiple-choice", question: "\"___ costa poco, non lo compro.\" Which fits with the indicative \"costa\"?", options: ["Anche se", "Benché", "Sebbene", "Nonostante che"], correctIndex: 0, explanation: "Only \"anche se\" takes the indicative." },
      { type: "dictation", audio: "È vero che è caro, ma ne vale la pena.", explanation: "\"Ne vale la pena\" = it's worth it." },
      { type: "speak", text: "Hai ragione su questo, però non dimentichiamo che i giovani non hanno molti soldi.", prompt: "Concede and continue: You're right about that, but let's not forget young people don't have much money.", tip: "Slow down on \"però\": it's the turn.", explanation: "Concession + counter-argument." },
    ],
  },
  {
    slug: "b1-holding-the-floor",
    level: "IT-B1",
    number: 4,
    title: "Interrupting and Holding the Floor",
    summary: "Break into a lively Italian discussion politely, keep your turn, and hand it back.",
    duration: "17 min",
    sections: [
      {
        heading: "Getting in",
        body: [
          "Italian discussions overlap: people start talking before the other has finished, and that's not rude in itself. To get in politely: \"Scusa se ti interrompo\" (sorry to interrupt), \"Posso dire una cosa?\", \"Un attimo, un attimo\", \"Se posso ...\" (if I may). Formal: \"Mi scusi se La interrompo\", \"Posso aggiungere una cosa?\".",
          "\"Interrompere\" takes a direct object: \"ti interrompo\", \"La interrompo\".",
        ],
        examples: [
          { es: "Scusa se ti interrompo, ma non è proprio così.", en: "Sorry to interrupt, but it's not quite like that." },
          { es: "Posso dire una cosa?", en: "Can I say something?" },
          { es: "Un attimo, un attimo: chi l'ha detto?", en: "Hang on, hang on: who said that?" },
          { es: "Mi scusi se La interrompo, posso aggiungere una cosa?", en: "Sorry to interrupt, may I add something?" },
          { es: "Se posso, vorrei fare un esempio.", en: "If I may, I'd like to give an example." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry to interrupt. (to a friend)", answer: "Scusa se ti interrompo.", altAnswers: ["Scusa se t'interrompo.", "Scusami se ti interrompo."], explanation: "\"Interrompere\" + direct pronoun \"ti\"." },
          { type: "multiple-choice", question: "In a meeting with a client, you need to interrupt. What do you say?", options: ["Mi scusi se La interrompo.", "Zitto un attimo!", "Scusa se ti interrompo, eh.", "Basta parlare."], correctIndex: 0, explanation: "Formal: \"Mi scusi\", \"La interrompo\"." },
        ],
      },
      {
        heading: "Holding your turn",
        body: [
          "If someone cuts in: \"Fammi finire\" (let me finish), \"Lasciami finire\", \"Aspetta, non ho finito\", formal \"Mi faccia finire\". These are \"fare\" / \"lasciare\" + infinitive (Unit 19). Fillers keep the floor while you think: \"cioè\", \"diciamo\", \"insomma\", \"come dire\" (how can I put it).",
          "Number your points so people wait: \"Primo ..., secondo ...\", \"Due cose: la prima è ...\".",
        ],
        examples: [
          { es: "Fammi finire, per favore.", en: "Let me finish, please." },
          { es: "Aspetta, non ho finito.", en: "Wait, I haven't finished." },
          { es: "Mi faccia finire, poi risponde Lei.", en: "Let me finish, then you can answer." },
          { es: "Due cose: la prima è il prezzo, la seconda è il tempo.", en: "Two things: the first is the price, the second is time." },
          { es: "Il problema è, come dire, un po' più complicato.", en: "The problem is, how can I put it, a bit more complicated." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me finish. (to a friend)", answer: "Fammi finire.", altAnswers: ["Lasciami finire.", "Fammi finire, per favore.", "Lasciami finire, per favore."], explanation: "\"Fa'\" + \"mi\" = \"fammi\": the m doubles." },
          { type: "listen-choose", audio: "Aspetta, non ho finito.", question: "What does the speaker want?", options: ["to keep talking", "to leave", "to hear the other person", "to change topic"], correctIndex: 0, explanation: "\"Non ho finito\" = I haven't finished." },
        ],
      },
      {
        heading: "Handing back and summing up",
        body: [
          "Give the turn back with a question: \"E tu che ne pensi?\", \"Lei che ne dice?\", \"Tu come la vedi?\". Sum up with \"insomma\" (in short) or \"quindi, in poche parole\": \"Insomma, per me i pro sono più dei contro\".",
        ],
        examples: [
          { es: "E tu che ne pensi?", en: "And what do you think about it?" },
          { es: "Lei che ne dice?", en: "What do you say? (formal)" },
          { es: "Insomma, per me i pro sono più dei contro.", en: "In short, for me the pros outweigh the cons." },
          { es: "In poche parole, bisogna decidere subito.", en: "In a nutshell, we need to decide now." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you think about it? (to a friend)", answer: "Che ne pensi?", altAnswers: ["Tu che ne pensi?", "E tu che ne pensi?", "Cosa ne pensi?"], explanation: "\"Ne\" = about it." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In short], the pros outweigh the cons.", sentence: "___, i pro sono più dei contro.", answer: "Insomma", altAnswers: ["In poche parole", "In breve"], explanation: "\"Insomma\" sums up." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can I say something?", answer: "Posso dire una cosa?", altAnswers: ["Posso dire qualcosa?"], explanation: "The everyday way to ask for the floor." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry to interrupt, may I add something? (formal)", answer: "Mi scusi se La interrompo, posso aggiungere una cosa?", altAnswers: ["Mi scusi se la interrompo, posso aggiungere una cosa?", "Scusi se La interrompo, posso aggiungere una cosa?"], explanation: "Formal \"La\" with \"interrompere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wait, I haven't finished. (to a friend)", answer: "Aspetta, non ho finito.", altAnswers: ["Aspetta, non ho ancora finito."], explanation: "Tu imperative \"aspetta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me finish, then you answer. (formal)", answer: "Mi faccia finire, poi risponde Lei.", altAnswers: ["Mi lasci finire, poi risponde Lei.", "Mi faccia finire, poi risponda Lei."], explanation: "Lei imperative \"faccia\" / \"lasci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I may, I'd like to give an example.", answer: "Se posso, vorrei fare un esempio.", altAnswers: ["Se permettete, vorrei fare un esempio.", "Se posso, vorrei fare un esempio concreto."], explanation: "\"Fare un esempio\" = to give an example." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you say? (formal)", answer: "Lei che ne dice?", altAnswers: ["Che ne dice?", "Lei cosa ne dice?", "Lei che ne pensa?"], explanation: "\"Dirne\" = to say about it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Hang on, hang on]: who said that?", sentence: "___: chi l'ha detto?", answer: "Un attimo, un attimo", altAnswers: ["Aspetta, aspetta", "Un momento, un momento"], explanation: "Repetition makes it urgent but friendly." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The problem is, [how can I put it], complicated.", sentence: "Il problema è, ___, complicato.", answer: "come dire", explanation: "A filler that holds the floor." },
      { type: "word-order", prompt: "Put the words in order to say: Two things: the first is the price.", words: ["Due", "cose:", "la", "prima", "è", "il", "prezzo."], translation: "Two things: the first is the price.", explanation: "Numbering your points." },
      { type: "multiple-choice", question: "\"Fammi finire\" is formed from ...", options: ["fa' + mi + finire", "fai + mi + finire", "fammi = fame + mi", "far + mi + finire"], correctIndex: 0, explanation: "Short imperative \"fa'\" doubles the pronoun's consonant." },
      { type: "dictation", audio: "Scusa se ti interrompo, ma non è così.", explanation: "\"Ti interrompo\": direct object." },
      { type: "speak", text: "Scusa se ti interrompo, posso dire una cosa? Fammi finire, poi rispondi tu.", prompt: "Interrupt and hold your turn: Sorry to interrupt, can I say something? Let me finish, then you answer.", tip: "\"Fammi\": hold the double m.", explanation: "Getting in and keeping the floor." },
    ],
  },
  {
    slug: "b1-drill-opinion-phrases",
    level: "IT-B1",
    number: 5,
    title: "Drill: Opinion Phrases",
    summary: "Produce opinion phrases with the right mood: subjunctive after penso che and non credo che, indicative after secondo me and è chiaro che.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Which mood?",
        body: [
          "Subjunctive: \"penso / credo / mi sembra / dubito / non sono sicuro che\". Indicative: \"secondo me\", \"per me\", \"è chiaro / è evidente / è vero che\", \"so che\", \"sono sicuro che\". When the subject is the same, use \"di\" + infinitive: \"Penso di avere ragione\", not \"penso che io abbia\".",
        ],
        examples: [
          { es: "Penso che sia una buona idea.", en: "I think it's a good idea." },
          { es: "Secondo me è una buona idea.", en: "In my view it's a good idea." },
          { es: "Sono sicura che verrà.", en: "I'm sure he'll come." },
          { es: "Credo di avere ragione.", en: "I think I'm right." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I'm right.", answer: "Credo di avere ragione.", altAnswers: ["Penso di avere ragione.", "Credo di aver ragione.", "Penso di aver ragione."], explanation: "Same subject: \"di\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sure she'll come.", answer: "Sono sicuro che verrà.", altAnswers: ["Sono sicura che verrà.", "Sono sicuro che viene.", "Sono sicura che viene."], explanation: "Certainty: indicative." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think it's too expensive.", answer: "Penso che sia troppo caro.", altAnswers: ["Credo che sia troppo caro.", "Secondo me è troppo caro.", "Penso che costi troppo."], explanation: "\"Penso che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion it's too expensive.", answer: "Secondo me è troppo caro.", altAnswers: ["Per me è troppo caro.", "Secondo me costa troppo."], explanation: "\"Secondo me\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think they know.", answer: "Non credo che lo sappiano.", altAnswers: ["Non penso che lo sappiano.", "Non credo che sappiano."], explanation: "Subjunctive of \"sapere\": \"sappiano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's clear that the city needs more buses.", answer: "È chiaro che la città ha bisogno di più autobus.", altAnswers: ["È evidente che la città ha bisogno di più autobus.", "È chiaro che in città servono più autobus."], explanation: "Certainty: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me that you're tired. (to a friend)", answer: "Mi sembra che tu sia stanco.", altAnswers: ["Mi sembra che tu sia stanca.", "Mi pare che tu sia stanco.", "Mi pare che tu sia stanca."], explanation: "Add \"tu\": \"sia\" is the same for io / tu / lui." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt it will rain.", answer: "Dubito che piova.", altAnswers: ["Dubito che pioverà."], explanation: "\"Dubitare che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I know you're busy. (to a friend)", answer: "So che sei impegnato.", altAnswers: ["So che sei impegnata.", "So che hai da fare."], explanation: "\"Sapere che\" + indicative: a fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think we should leave.", answer: "Penso che dovremmo partire.", altAnswers: ["Credo che dovremmo partire.", "Penso che dobbiamo partire.", "Penso che dovremmo andare.", "Credo che dovremmo andare."], explanation: "The conditional can follow \"penso che\" for advice." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not sure he understood.", answer: "Non sono sicuro che abbia capito.", altAnswers: ["Non sono sicura che abbia capito.", "Non sono sicuro che lui abbia capito.", "Non sono sicura che lui abbia capito."], explanation: "Past subjunctive: \"abbia capito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think the film [is] boring.", sentence: "Penso che il film ___ noioso.", answer: "sia", explanation: "Subjunctive after \"penso che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In my opinion the film [is] boring.", sentence: "Secondo me il film ___ noioso.", answer: "è", explanation: "Indicative after \"secondo me\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't believe they [have] the money.", sentence: "Non credo che ___ i soldi.", answer: "abbiano", explanation: "Subjunctive of \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's true that it [costs] a lot.", sentence: "È vero che ___ molto.", answer: "costa", explanation: "Indicative after \"è vero che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think [I've made] a mistake.", sentence: "Credo ___ un errore.", answer: "di aver fatto", altAnswers: ["di avere fatto"], explanation: "Same subject: past infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: I don't think it's a good idea.", words: ["Non", "penso", "che", "sia", "una", "buona", "idea."], translation: "I don't think it's a good idea.", explanation: "Subjunctive after \"non penso che\"." },
      { type: "multiple-choice", question: "Which sentence is correct written Italian?", options: ["Credo che abbiano ragione.", "Credo che hanno ragione.", "Secondo me abbiano ragione.", "Credo che io abbia ragione."], correctIndex: 0, explanation: "Subjunctive after \"credo che\"; same subject would be \"credo di avere\"." },
      { type: "dictation", audio: "Mi sembra che tu abbia ragione.", explanation: "\"Abbia\": subjunctive of \"avere\"." },
      { type: "dictation", audio: "Secondo me è chiaro che bisogna cambiare.", explanation: "Indicative after \"secondo me\" and \"è chiaro che\"." },
      { type: "speak", text: "Penso che sia una buona idea, ma secondo me costa troppo.", prompt: "Say it in Italian: I think it's a good idea, but in my opinion it costs too much.", tip: "Contrast the two moods: \"sia\" then \"costa\".", explanation: "Subjunctive after \"penso che\", indicative after \"secondo me\"." },
    ],
  },
  {
    slug: "b1-drill-concession",
    level: "IT-B1",
    number: 6,
    title: "Drill: Conceding",
    summary: "Produce concessions with è vero che, anche se, benché, nonostante and hai ragione, però.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Four connectors",
        body: [
          "\"Anche se\" + indicative; \"benché / sebbene\" + subjunctive; \"nonostante\" + subjunctive or + noun; \"è vero che ..., ma\" + indicative. The spoken shortcut is \"sì, però\".",
        ],
        examples: [
          { es: "Anche se piove, usciamo.", en: "Even though it's raining, we're going out." },
          { es: "Benché piova, usciamo.", en: "Although it's raining, we're going out." },
          { es: "Nonostante la pioggia, usciamo.", en: "Despite the rain, we're going out." },
          { es: "È vero che piove, ma usciamo lo stesso.", en: "It's true it's raining, but we're going out anyway." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Even though it's raining, we're going out.", answer: "Anche se piove, usciamo.", altAnswers: ["Usciamo anche se piove.", "Anche se piove usciamo."], explanation: "\"Anche se\" + indicative." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the traffic, we arrived on time.", answer: "Nonostante il traffico, siamo arrivati in tempo.", altAnswers: ["Nonostante il traffico, siamo arrivate in tempo.", "Malgrado il traffico, siamo arrivati in tempo."], explanation: "\"Nonostante\" + noun." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although he's rich, he lives simply.", answer: "Benché sia ricco, vive in modo semplice.", altAnswers: ["Sebbene sia ricco, vive in modo semplice.", "Anche se è ricco, vive in modo semplice.", "Benché sia ricco, vive semplicemente."], explanation: "\"Benché\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true it's far, but it's worth it.", answer: "È vero che è lontano, ma ne vale la pena.", altAnswers: ["È vero che è lontano, però ne vale la pena."], explanation: "\"È vero che\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right, but it's too late. (to a friend)", answer: "Hai ragione, però è troppo tardi.", altAnswers: ["Hai ragione, ma è troppo tardi."], explanation: "One connector: \"però\" or \"ma\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Even though I studied, I failed the exam.", answer: "Anche se ho studiato, non ho passato l'esame.", altAnswers: ["Anche se ho studiato, sono stato bocciato.", "Anche se ho studiato, sono stata bocciata.", "Anche se ho studiato, non ho superato l'esame."], explanation: "\"Anche se\" + passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although we don't agree, we respect each other.", answer: "Benché non siamo d'accordo, ci rispettiamo.", altAnswers: ["Sebbene non siamo d'accordo, ci rispettiamo.", "Anche se non siamo d'accordo, ci rispettiamo."], explanation: "\"Siamo\" is also the noi subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite everything, I'm optimistic.", answer: "Nonostante tutto, sono ottimista.", altAnswers: ["Malgrado tutto, sono ottimista."], explanation: "\"Ottimista\": same form for men and women." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not saying no, but I need time.", answer: "Non dico di no, però ho bisogno di tempo.", altAnswers: ["Non dico di no, ma ho bisogno di tempo.", "Non dico di no, però mi serve tempo."], explanation: "\"Non dico di no\": a soft yes." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I admit it's useful.", answer: "Ammetto che è utile.", altAnswers: ["Ammetto che sia utile.", "Devo ammettere che è utile."], explanation: "\"Ammettere che\" + indicative (subjunctive also heard)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although she [knows] the answer, she says nothing.", sentence: "Sebbene ___ la risposta, non dice niente.", answer: "sappia", explanation: "Subjunctive of \"sapere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Even though] I'm tired, I'll help you.", sentence: "___ sono stanco, ti aiuto.", answer: "Anche se", explanation: "Indicative \"sono\" → \"anche se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although they [live] far away, they come every Sunday.", sentence: "Benché ___ lontano, vengono ogni domenica.", answer: "abitino", altAnswers: ["vivano"], explanation: "Subjunctive of \"abitare\": \"abitino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Despite] the cold, the beach was full.", sentence: "___ il freddo, la spiaggia era piena.", answer: "Nonostante", altAnswers: ["Malgrado"], explanation: "\"Nonostante\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You're right [about that], but...", sentence: "Hai ragione ___, però...", answer: "su questo", altAnswers: ["su questo punto"], explanation: "\"Su\" + topic." },
      { type: "word-order", prompt: "Put the words in order to say: Even if it costs more, I'll buy it.", words: ["Anche", "se", "costa", "di", "più,", "lo", "compro."], translation: "Even if it costs more, I'll buy it.", explanation: "\"Anche se\" + indicative." },
      { type: "multiple-choice", question: "\"Benché ___ tardi, restiamo.\" Which form?", options: ["sia", "è", "era", "essere"], correctIndex: 0, explanation: "\"Benché\" + subjunctive." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Hai ragione, però è caro.", "Hai ragione, ma però è caro.", "Hai ragione, anche se però è caro.", "Hai ragione, benché è caro."], correctIndex: 0, explanation: "One connector; \"benché\" needs the subjunctive." },
      { type: "dictation", audio: "Benché sia tardi, restiamo ancora un po'.", explanation: "\"Un po'\" with an apostrophe." },
      { type: "speak", text: "È vero che il treno è caro, ma è comodo, e anche se ci metto di più, posso lavorare.", prompt: "Concede twice: It's true the train is expensive, but it's comfortable, and even though it takes longer, I can work.", tip: "\"Metterci\" = to take (time).", explanation: "\"È vero che ..., ma\" and \"anche se\"." },
    ],
  },
  {
    slug: "b1-dialogue-lab-debate-phones",
    level: "IT-B1",
    number: 7,
    title: "Dialogue Lab: Phones at School?",
    summary: "Follow a structured debate between three friends in Bologna about smartphones at school, and choose the best moves.",
    duration: "17 min",
    sections: [
      {
        heading: "Opening positions",
        body: [
          "Chiara (a teacher), Davide (a dad) and Sofia (a university student) argue over dinner about banning phones in Italian schools. Chiara opens with a clear position and a reason: \"Secondo me il cellulare in classe va vietato, perché i ragazzi non si concentrano\". Davide disagrees softly: \"Mah, non sono così sicuro\".",
          "Sofia takes a middle line: \"Dipende da come si usa\" (it depends on how it's used).",
        ],
        examples: [
          { es: "Secondo me il cellulare in classe va vietato.", en: "In my opinion phones should be banned in class." },
          { es: "I ragazzi non si concentrano più.", en: "Kids can't concentrate any more." },
          { es: "Mah, non sono così sicuro.", en: "Well, I'm not so sure." },
          { es: "Dipende da come si usa.", en: "It depends on how it's used." },
          { es: "Io lo userei per cercare informazioni.", en: "I'd use it to look things up." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It depends on how it's used.", answer: "Dipende da come si usa.", altAnswers: ["Dipende da come viene usato.", "Dipende da come lo si usa."], explanation: "Impersonal \"si\"." },
          { type: "listen-choose", audio: "Secondo me il cellulare in classe va vietato, perché i ragazzi non si concentrano.", question: "What's Chiara's position?", options: ["Phones should be banned in class.", "Phones help concentration.", "Phones should be used more.", "She hasn't decided."], correctIndex: 0, explanation: "\"Va vietato\" = must be banned." },
        ],
      },
      {
        heading: "Arguments and concessions",
        body: [
          "Davide argues with a concession: \"È vero che si distraggono, però il telefono serve anche per la sicurezza: voglio che mia figlia possa chiamarmi\". Chiara interrupts: \"Scusa se ti interrompo, ma può chiamarti all'uscita\". Davide: \"Fammi finire!\".",
          "Notice the subjunctive after \"voglio che\" (\"possa\") and the impersonal \"si distraggono\" (they get distracted, reflexive).",
        ],
        examples: [
          { es: "È vero che si distraggono, però il telefono serve per la sicurezza.", en: "It's true they get distracted, but the phone is needed for safety." },
          { es: "Voglio che mia figlia possa chiamarmi.", en: "I want my daughter to be able to call me." },
          { es: "Scusa se ti interrompo, ma può chiamarti all'uscita.", en: "Sorry to interrupt, but she can call you when she comes out." },
          { es: "Fammi finire!", en: "Let me finish!" },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want my daughter [to be able to] call me.", sentence: "Voglio che mia figlia ___ chiamarmi.", answer: "possa", explanation: "\"Volere che\" + subjunctive." },
          { type: "multiple-choice", question: "Chiara cuts in. What's Davide's best reply to keep his turn?", options: ["Fammi finire!", "Hai ragione, scusa.", "Ciao.", "Non lo so."], correctIndex: 0, explanation: "\"Fammi finire\" holds the floor." },
        ],
      },
      {
        heading: "Finding a compromise",
        body: [
          "Sofia proposes a compromise with the conditional: \"E se i telefoni si lasciassero in una scatola all'ingresso?\" Chiara concedes: \"Su questo ti do ragione, potrebbe funzionare\". Davide agrees: \"Va bene, la penso come Sofia\". Italians often end a heated discussion laughing: \"Insomma, siamo d'accordo almeno sul dolce?\"",
        ],
        examples: [
          { es: "E se i telefoni si lasciassero in una scatola all'ingresso?", en: "What if phones were left in a box at the entrance?" },
          { es: "Su questo ti do ragione, potrebbe funzionare.", en: "I'll grant you that, it could work." },
          { es: "Va bene, la penso come Sofia.", en: "OK, I agree with Sofia." },
          { es: "Insomma, siamo d'accordo almeno sul dolce?", en: "Well, do we at least agree on dessert?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It could work.", answer: "Potrebbe funzionare.", altAnswers: ["Può funzionare."], explanation: "Conditional for a cautious yes." },
          { type: "dictation", audio: "Su questo ti do ragione, potrebbe funzionare.", explanation: "\"Dare ragione\" = to concede someone is right." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my opinion phones should be banned.", answer: "Secondo me i cellulari vanno vietati.", altAnswers: ["Secondo me i telefoni vanno vietati.", "Secondo me il cellulare va vietato.", "Per me i cellulari vanno vietati."], explanation: "\"Andare\" + participle = should be." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Well, I'm not so sure.", answer: "Mah, non sono così sicuro.", altAnswers: ["Mah, non sono così sicura.", "Mah, non ne sono così sicuro.", "Mah, non ne sono così sicura."], explanation: "\"Mah\" signals doubt." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true they get distracted, but...", answer: "È vero che si distraggono, però...", altAnswers: ["È vero che si distraggono, ma..."], explanation: "\"Distrarsi\" → \"si distraggono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want my son to be able to call me.", answer: "Voglio che mio figlio possa chiamarmi.", altAnswers: ["Voglio che mio figlio mi possa chiamare."], explanation: "\"Volere che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "OK, I agree with Sofia.", answer: "Va bene, la penso come Sofia.", altAnswers: ["Va bene, sono d'accordo con Sofia.", "D'accordo, la penso come Sofia."], explanation: "\"Pensarla come\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do we at least agree on dessert?", answer: "Siamo d'accordo almeno sul dolce?", altAnswers: ["Almeno sul dolce siamo d'accordo?", "Siamo almeno d'accordo sul dolce?"], explanation: "\"D'accordo su\" + topic." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "What if phones [were left] at the entrance?", sentence: "E se i telefoni ___ all'ingresso?", answer: "si lasciassero", altAnswers: ["venissero lasciati"], explanation: "\"E se\" + imperfect subjunctive = what if." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'll grant you that], it could work.", sentence: "___, potrebbe funzionare.", answer: "Su questo ti do ragione", altAnswers: ["Ti do ragione"], explanation: "\"Dare ragione a\"." },
      { type: "word-order", prompt: "Put the words in order to say: Kids can't concentrate any more.", words: ["I", "ragazzi", "non", "si", "concentrano", "più."], translation: "Kids can't concentrate any more.", explanation: "\"Non ... più\" = not any more." },
      { type: "multiple-choice", question: "What role does Sofia play in the debate?", options: ["She proposes a compromise.", "She agrees with Chiara completely.", "She refuses to talk.", "She attacks Davide."], correctIndex: 0, explanation: "\"E se ...?\" introduces her compromise." },
      { type: "listen-choose", audio: "Scusa se ti interrompo, ma può chiamarti all'uscita.", question: "What is Chiara's counter-argument?", options: ["The girl can call when she leaves school.", "The girl doesn't need a phone.", "Davide should call the school.", "Phones are too expensive."], correctIndex: 0, explanation: "\"All'uscita\" = when coming out." },
      { type: "speak", text: "È vero che i ragazzi si distraggono, però il telefono serve anche per la sicurezza.", prompt: "Argue Davide's point: It's true kids get distracted, but the phone is also needed for safety.", tip: "Rise on \"distraggono\", pause, then fall on \"sicurezza\".", explanation: "Concession + counter-argument." },
    ],
  },
  {
    slug: "b1-listening-lab-talk-show",
    level: "IT-B1",
    number: 8,
    title: "Listening Lab: A Radio Debate",
    summary: "Follow a scripted radio debate about short-term holiday lets in historic centres, and identify each speaker's position and arguments.",
    duration: "18 min",
    sections: [
      {
        heading: "The host and the question",
        body: [
          "A radio host (\"il conduttore\") introduces the topic: \"Gli affitti brevi per turisti stanno svuotando i centri storici?\" (are short-term tourist lets emptying historic centres?). Guests: an owner who rents out a flat, a residents' association spokesperson, an economist.",
          "Listen for position markers: \"sono favorevole a\" (in favour of), \"sono contrario a\" (against), \"da un lato ... dall'altro\" (on the one hand ... on the other).",
        ],
        examples: [
          { es: "Buongiorno e benvenuti. Oggi parliamo di affitti brevi.", en: "Good morning and welcome. Today we're talking about short-term lets." },
          { es: "Sono favorevole agli affitti brevi, ma con regole chiare.", en: "I'm in favour of short-term lets, but with clear rules." },
          { es: "Sono assolutamente contraria.", en: "I'm completely against it." },
          { es: "Da un lato portano soldi, dall'altro alzano gli affitti.", en: "On the one hand they bring money, on the other they push rents up." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm in favour, but with clear rules.", answer: "Sono favorevole, ma con regole chiare.", altAnswers: ["Sono favorevole, però con regole chiare."], explanation: "\"Favorevole a\" = in favour of." },
          { type: "listen-choose", audio: "Da un lato portano soldi, dall'altro alzano gli affitti.", question: "What is the speaker doing?", options: ["weighing pros and cons", "strongly agreeing", "telling a story", "asking a question"], correctIndex: 0, explanation: "\"Da un lato ... dall'altro\"." },
        ],
      },
      {
        heading: "The arguments",
        body: [
          "The owner: \"Senza questo reddito non potrei mantenere la casa; e poi i turisti fanno lavorare bar e ristoranti\". The residents' spokesperson: \"Nel nostro quartiere i residenti sono diminuiti del 30% in dieci anni: non ci sono più negozi di alimentari, solo souvenir\". The economist: \"I dati dimostrano che dove si mettono limiti, gli affitti per i residenti calano\".",
        ],
        examples: [
          { es: "Senza questo reddito non potrei mantenere la casa.", en: "Without this income I couldn't keep up the house." },
          { es: "I turisti fanno lavorare bar e ristoranti.", en: "Tourists keep bars and restaurants in business." },
          { es: "I residenti sono diminuiti del 30% in dieci anni.", en: "Residents have fallen by 30% in ten years." },
          { es: "I dati dimostrano che dove si mettono limiti, gli affitti calano.", en: "The data show that where limits are set, rents fall." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Nel nostro quartiere i residenti sono diminuiti del trenta per cento in dieci anni.", question: "What has happened in the neighbourhood?", options: ["Residents have fallen by 30% in ten years.", "Rents have risen by 30%.", "Tourists have fallen by 30%.", "30 shops have closed."], correctIndex: 0, explanation: "\"Diminuiti del 30%\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The data [show] that rents fall.", sentence: "I dati ___ che gli affitti calano.", answer: "dimostrano", altAnswers: ["mostrano"], explanation: "A fact: indicative after \"dimostrare che\"." },
        ],
      },
      {
        heading: "Closing positions",
        body: [
          "The host sums up: \"Insomma, nessuno vuole vietare tutto, ma tutti chiedono regole\". He thanks the guests: \"Grazie ai nostri ospiti e a voi che ci avete ascoltato\". Summing up with \"insomma\" or \"in sintesi\" is how Italians close a discussion.",
        ],
        examples: [
          { es: "Insomma, nessuno vuole vietare tutto.", en: "In short, nobody wants to ban everything." },
          { es: "Tutti però chiedono regole più chiare.", en: "But everyone is asking for clearer rules." },
          { es: "In sintesi, servono limiti e controlli.", en: "To sum up, limits and checks are needed." },
          { es: "Grazie ai nostri ospiti e a voi che ci avete ascoltato.", en: "Thanks to our guests and to you for listening." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In short, nobody wants to ban everything.", answer: "Insomma, nessuno vuole vietare tutto.", altAnswers: ["In sintesi, nessuno vuole vietare tutto.", "Insomma nessuno vuole vietare tutto."], explanation: "\"Nessuno\" + singular verb." },
          { type: "multiple-choice", question: "What do all the guests agree on?", options: ["the need for rules", "banning all short lets", "removing all limits", "raising taxes on tourists"], correctIndex: 0, explanation: "\"Tutti chiedono regole\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Senza questo reddito non potrei mantenere la casa.", question: "Which guest is speaking?", options: ["the owner", "the residents' spokesperson", "the economist", "the host"], correctIndex: 0, explanation: "Only the owner earns from renting." },
      { type: "listen-choose", audio: "Non ci sono più negozi di alimentari, solo souvenir.", question: "What is the complaint?", options: ["Food shops have been replaced by souvenir shops.", "Souvenirs are too expensive.", "There are too many supermarkets.", "Shops close too early."], correctIndex: 0, explanation: "\"Non ... più\" = no longer." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm completely against it.", answer: "Sono assolutamente contrario.", altAnswers: ["Sono assolutamente contraria.", "Sono completamente contrario.", "Sono completamente contraria."], explanation: "\"Contrario a\" = against." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the one hand they bring money, on the other they push rents up.", answer: "Da un lato portano soldi, dall'altro alzano gli affitti.", altAnswers: ["Da una parte portano soldi, dall'altra alzano gli affitti.", "Da un lato portano soldi, dall'altro fanno aumentare gli affitti."], explanation: "\"Da un lato ... dall'altro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tourists keep restaurants in business.", answer: "I turisti fanno lavorare i ristoranti.", altAnswers: ["I turisti danno lavoro ai ristoranti."], explanation: "\"Fare lavorare\" = to keep in work." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone is asking for clearer rules.", answer: "Tutti chiedono regole più chiare.", altAnswers: ["Tutti chiedono delle regole più chiare."], explanation: "\"Tutti\" + plural verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today we're talking about short-term lets.", answer: "Oggi parliamo di affitti brevi.", altAnswers: ["Oggi parliamo degli affitti brevi."], explanation: "\"Parlare di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm in favour of] short-term lets.", sentence: "___ affitti brevi.", answer: "Sono favorevole agli", explanation: "\"Favorevole a\" + \"gli\" = \"agli\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[To sum up], we need limits.", sentence: "___, servono limiti.", answer: "In sintesi", altAnswers: ["Insomma", "In breve", "Riassumendo"], explanation: "Summing-up connectors." },
      { type: "word-order", prompt: "Put the words in order to say: Where limits are set, rents fall.", words: ["Dove", "si", "mettono", "limiti,", "gli", "affitti", "calano."], translation: "Where limits are set, rents fall.", explanation: "Si passivante: \"si mettono limiti\"." },
      { type: "dictation", audio: "Sono favorevole, ma con regole chiare.", explanation: "\"Favorevole\" = in favour." },
      { type: "speak", text: "Da un lato gli affitti brevi portano soldi, dall'altro i residenti se ne vanno. Secondo me servono regole.", prompt: "Give your position: On the one hand short-term lets bring money, on the other residents leave. In my opinion we need rules.", tip: "Balance the two halves with the same rhythm.", explanation: "Weighing both sides, then a position." },
    ],
  },
  {
    slug: "b1-error-hunt-debate",
    level: "IT-B1",
    number: 9,
    title: "Error Hunt: Debate",
    summary: "Fix the classic debate slips: sono d'accordo, the subjunctive after non sono d'accordo che, secondo me + indicative, ma però.",
    duration: "17 min",
    sections: [
      {
        heading: "D'accordo and ragione",
        body: [
          "Each sentence below has one mistake. \"Io sono accordo\" drops the \"d'\": the phrase is \"essere d'accordo\" (literally to be of agreement). \"Io accordo con te\" is wrong too: \"accordare\" means to tune an instrument or grant.",
          "\"Sei ragione\" and \"hai giusto\" are calques of you're right: Italian says \"hai ragione\". For a statement, \"è giusto\" (it's fair) or \"è vero\" (it's true).",
        ],
        examples: [
          { es: "Sono d'accordo con te.", en: "I agree with you." },
          { es: "Non siamo d'accordo su niente.", en: "We don't agree on anything." },
          { es: "Hai ragione tu.", en: "You're right." },
          { es: "È giusto che tutti paghino le tasse.", en: "It's fair that everyone pays taxes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"io sono accordo\". Write it correctly: I agree.", source: "I agree.", answer: "Sono d'accordo.", altAnswers: ["Io sono d'accordo.", "Sono d'accordo!"], explanation: "\"D'accordo\" with the apostrophe." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Hai ragione.", "Sei ragione.", "Hai giusto.", "Sei giusto."], correctIndex: 0, explanation: "\"Avere ragione\"." },
        ],
      },
      {
        heading: "Mood slips",
        body: [
          "\"Non sono d'accordo che è vero\" needs the subjunctive: \"Non sono d'accordo che sia vero\" (more naturally: \"Non credo che sia vero\"). The reverse slip is just as common: \"Secondo me sia vero\" puts a subjunctive where there's no verb of opinion. Write \"Secondo me è vero\".",
          "Rule of thumb: a verb or phrase of thinking, doubting or wanting + \"che\" → subjunctive; \"secondo me\", \"per me\", \"è chiaro che\" → indicative.",
        ],
        examples: [
          { es: "Non sono d'accordo che sia la soluzione migliore.", en: "I don't agree that it's the best solution." },
          { es: "Secondo me è vero.", en: "In my opinion it's true." },
          { es: "Non credo che abbiano capito.", en: "I don't think they've understood." },
          { es: "Per me ha ragione Giulia.", en: "I think Giulia's right." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "A learner wrote \"secondo me sia\". Write the Italian for the bold words.", en: "In my opinion [it's] a mistake.", sentence: "Secondo me ___ un errore.", answer: "è", explanation: "\"Secondo me\" + indicative." },
          { type: "fill-blank", prompt: "A learner wrote \"che è\". Write the Italian for the bold words.", en: "I don't agree that it [is] fair.", sentence: "Non sono d'accordo che ___ giusto.", answer: "sia", explanation: "Disagreement + \"che\" → subjunctive." },
        ],
      },
      {
        heading: "Ma però and other doubles",
        body: [
          "\"Hai ragione, ma però ...\" doubles the connector. It's heard in speech, but it's considered a mistake in writing: choose \"ma\" or \"però\". The same goes for \"anche se però\". And \"invece\" is not but: it means instead, on the other hand.",
        ],
        examples: [
          { es: "Hai ragione, però costa troppo.", en: "You're right, but it costs too much." },
          { es: "Hai ragione, ma costa troppo.", en: "You're right, but it costs too much." },
          { es: "Io preferisco il mare, lei invece la montagna.", en: "I prefer the sea, whereas she prefers the mountains." },
          { es: "Anche se è caro, lo compro.", en: "Even though it's expensive, I'll buy it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"ma però\". Write it correctly: You're right, but it's too late. (to a friend)", source: "You're right, but it's too late.", answer: "Hai ragione, però è troppo tardi.", altAnswers: ["Hai ragione, ma è troppo tardi."], explanation: "One connector only." },
          { type: "listen-choose", audio: "Io preferisco il mare, lei invece la montagna.", question: "What does \"invece\" show?", options: ["a contrast between two people", "a cause", "a consequence", "an addition"], correctIndex: 0, explanation: "\"Invece\" = whereas, on the other hand." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"non sono accordo\". Write it correctly: I don't agree with you. (to a friend)", source: "I don't agree with you.", answer: "Non sono d'accordo con te.", altAnswers: ["Io non sono d'accordo con te."], explanation: "\"D'accordo\" with the apostrophe." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"sei ragione\". Write it correctly: You're right about that. (to a friend)", source: "You're right about that.", answer: "Su questo hai ragione.", altAnswers: ["Hai ragione su questo.", "Hai ragione su questo punto."], explanation: "\"Avere ragione\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"secondo me sia troppo caro\". Write it correctly: In my opinion it's too expensive.", source: "In my opinion it's too expensive.", answer: "Secondo me è troppo caro.", altAnswers: ["Per me è troppo caro.", "Secondo me costa troppo."], explanation: "Indicative after \"secondo me\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"non credo che è vero\". Write it correctly: I don't think it's true.", source: "I don't think it's true.", answer: "Non credo che sia vero.", altAnswers: ["Non penso che sia vero."], explanation: "Subjunctive after \"non credo che\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"hai ragione, ma però\". Write it correctly: You're right, but we have no money. (to a friend)", source: "You're right, but we have no money.", answer: "Hai ragione, però non abbiamo soldi.", altAnswers: ["Hai ragione, ma non abbiamo soldi.", "Hai ragione, però non abbiamo i soldi.", "Hai ragione, ma non abbiamo i soldi."], explanation: "One connector." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"io accordo con Marco\". Write it correctly: I agree with Marco.", source: "I agree with Marco.", answer: "Sono d'accordo con Marco.", altAnswers: ["Io sono d'accordo con Marco.", "La penso come Marco."], explanation: "\"Accordare\" means to tune." },
      { type: "fill-blank", prompt: "A learner wrote \"penso che hai torto\". Write the Italian for the bold words.", en: "I think you [are wrong]. (to a friend)", sentence: "Penso che tu ___ torto.", answer: "abbia", explanation: "Subjunctive \"abbia\"; keep \"tu\" for clarity." },
      { type: "fill-blank", prompt: "A learner wrote \"è chiaro che sia\". Write the Italian for the bold words.", en: "It's clear that it [is] a problem.", sentence: "È chiaro che ___ un problema.", answer: "è", explanation: "Certainty: indicative." },
      { type: "word-order", prompt: "Put the words in order to say: I don't agree that it's the best solution.", words: ["Non", "sono", "d'accordo", "che", "sia", "la", "soluzione", "migliore."], translation: "I don't agree that it's the best solution.", explanation: "Subjunctive after the disagreement." },
      { type: "multiple-choice", question: "Which sentence is correct written Italian?", options: ["Secondo me hai ragione, però dobbiamo aspettare.", "Secondo me abbia ragione, ma però dobbiamo aspettare.", "Secondo me sei ragione, però dobbiamo aspettare.", "Secondo me hai ragione, ma però dobbiamo aspettare."], correctIndex: 0, explanation: "Indicative, \"avere ragione\", one connector." },
      { type: "dictation", audio: "Non sono d'accordo che sia la soluzione migliore.", explanation: "\"D'accordo\" + subjunctive \"sia\"." },
      { type: "speak", text: "Sono d'accordo con te, però non credo che sia il momento giusto.", prompt: "Fix it and say it: a learner said \"Sono accordo con te, ma però non credo che è il momento giusto.\"", tip: "\"D'accordo\": link the d to the vowel, dac-COR-do.", explanation: "Three fixes: \"d'accordo\", one connector, \"sia\"." },
    ],
  },
  {
    slug: "b1-mission-forum-reply",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Forum Reply",
    summary: "Reply to an opinion post on an Italian forum, agreeing in part and disagreeing in part.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The post",
        body: [
          "Your mission: on a forum for people living in Torino, a user called Marco_TO writes: \"Secondo me lo smart working andrebbe abolito: la gente lavora meno, i bar in centro chiudono e i giovani non imparano niente dai colleghi.\" Reply, agreeing with one point and disagreeing with another.",
          "Forums use \"tu\" with everyone. Open by addressing the user and acknowledging the post: \"Ciao Marco, capisco il tuo punto di vista\" or \"Interessante quello che dici\".",
        ],
        examples: [
          { es: "Ciao Marco, capisco il tuo punto di vista.", en: "Hi Marco, I understand your point of view." },
          { es: "Interessante quello che dici sui bar del centro.", en: "Interesting what you say about the bars in the centre." },
          { es: "Lo smart working andrebbe abolito.", en: "Remote working should be abolished." },
          { es: "I giovani non imparano niente dai colleghi.", en: "Young people learn nothing from their colleagues." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I understand your point of view. (to a friend)", answer: "Capisco il tuo punto di vista.", altAnswers: ["Capisco il tuo punto di vista, Marco."], explanation: "\"Punto di vista\" = point of view." },
          { type: "multiple-choice", question: "What does Marco_TO think?", options: ["Remote working should be abolished.", "Remote working should be extended.", "Bars should close earlier.", "Young people work too much."], correctIndex: 0, explanation: "\"Andrebbe abolito\" = should be abolished." },
        ],
      },
      {
        heading: "Agree in part, disagree in part",
        body: [
          "Concede first: \"Su una cosa hai ragione: per chi inizia, lavorare in ufficio è importante\". Then disagree with a reason and, if possible, a fact: \"Però non sono d'accordo che la gente lavori meno: molti studi dicono il contrario. E poi lo smart working fa risparmiare tempo e soldi\". Use the connectors you know: \"però\", \"inoltre\", \"e poi\", \"invece\".",
        ],
        examples: [
          { es: "Su una cosa hai ragione: per chi inizia, l'ufficio è importante.", en: "You're right about one thing: for beginners the office matters." },
          { es: "Però non sono d'accordo che la gente lavori meno.", en: "But I don't agree that people work less." },
          { es: "Molti studi dicono il contrario.", en: "Many studies say the opposite." },
          { es: "Inoltre, lo smart working fa risparmiare tempo e soldi.", en: "Moreover, remote working saves time and money." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't agree that people [work] less.", sentence: "Non sono d'accordo che la gente ___ meno.", answer: "lavori", explanation: "Subjunctive; \"la gente\" is singular." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many studies say the opposite.", answer: "Molti studi dicono il contrario.", altAnswers: ["Tanti studi dicono il contrario."], explanation: "\"Il contrario\" = the opposite." },
        ],
      },
      {
        heading: "A proposal and the sign-off",
        body: [
          "Close with a constructive idea and a friendly sign-off: \"Forse la soluzione migliore sarebbe un modello misto: due giorni a casa e tre in ufficio\", \"Che ne pensate?\", \"Un saluto\". \"Pensate\" addresses the whole forum.",
        ],
        examples: [
          { es: "Forse la soluzione migliore sarebbe un modello misto.", en: "Perhaps the best solution would be a hybrid model." },
          { es: "Due giorni a casa e tre in ufficio.", en: "Two days at home and three in the office." },
          { es: "Voi che ne pensate?", en: "What do you all think?" },
          { es: "Un saluto a tutti!", en: "Greetings to everyone!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Perhaps the best solution would be a hybrid model.", answer: "Forse la soluzione migliore sarebbe un modello misto.", altAnswers: ["Forse la soluzione migliore sarebbe un modello ibrido."], explanation: "Conditional for a proposal." },
          { type: "listen-choose", audio: "Forse la soluzione migliore sarebbe un modello misto. Voi che ne pensate?", question: "How does the writer end?", options: ["with a proposal and a question to everyone", "by insulting Marco", "by agreeing completely", "with a joke"], correctIndex: 0, explanation: "\"Voi\" = everyone on the forum." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right about one thing. (to a friend)", answer: "Su una cosa hai ragione.", altAnswers: ["Hai ragione su una cosa."], explanation: "Concession." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For people starting out, the office is important.", answer: "Per chi inizia, l'ufficio è importante.", altAnswers: ["Per chi comincia, l'ufficio è importante.", "Per chi inizia l'ufficio è importante."], explanation: "\"Chi\" = whoever, people who." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't agree that the bars are closing because of remote working.", answer: "Non sono d'accordo che i bar chiudano per lo smart working.", altAnswers: ["Non sono d'accordo che i bar chiudano a causa dello smart working.", "Non credo che i bar chiudano per lo smart working."], explanation: "Subjunctive \"chiudano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Remote working saves time and money.", answer: "Lo smart working fa risparmiare tempo e soldi.", altAnswers: ["Con lo smart working si risparmiano tempo e soldi.", "Lo smart working fa risparmiare tempo e denaro."], explanation: "\"Fare risparmiare\" = to let you save." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you all think?", answer: "Voi che ne pensate?", altAnswers: ["Che ne pensate?", "Voi cosa ne pensate?", "Cosa ne pensate?"], explanation: "\"Voi\" for the forum readers." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Moreover], you save on transport.", sentence: "___, si risparmia sui trasporti.", answer: "Inoltre", altAnswers: ["In più", "E poi"], explanation: "\"Inoltre\" adds an argument." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The best solution [would be] a mix.", sentence: "La soluzione migliore ___ un mix.", answer: "sarebbe", explanation: "Conditional for proposals." },
      { type: "word-order", prompt: "Put the words in order to say: Interesting what you say about young people.", words: ["Interessante", "quello", "che", "dici", "sui", "giovani."], translation: "Interesting what you say about young people.", explanation: "\"Quello che\" = what." },
      { type: "multiple-choice", question: "Which reply agrees in part and disagrees in part?", options: ["Hai ragione sui giovani, però non credo che la gente lavori meno.", "Hai ragione su tutto.", "Non hai capito niente.", "Sono d'accordo, ciao."], correctIndex: 0, explanation: "Concession + disagreement with a subjunctive." },
      { type: "dictation", audio: "Capisco il tuo punto di vista, però non sono d'accordo.", explanation: "Acknowledge, then disagree." },
      { type: "speak", text: "Ciao Marco, su una cosa hai ragione, però non credo che la gente lavori meno. Forse la soluzione sarebbe un modello misto.", prompt: "Say your reply aloud: Hi Marco, you're right about one thing, but I don't think people work less. Perhaps the solution would be a hybrid model.", tip: "Friendly tone: forums are informal.", explanation: "Concede, disagree, propose." },
    ],
  },
];

export const IT_B1_U28_WRITING: WriteExercise = {
  type: "write",
  prompt: "On an Italian forum someone writes: \"Secondo me i turisti stanno rovinando le città italiane: bisognerebbe limitarli.\" Write a reply (100-140 words). Greet the writer, say what you agree with and why, say what you disagree with and why, and end with a proposal and a question to the forum.",
  minWords: 90,
  maxWords: 150,
  rubric: [
    "Agrees with at least one point using an agreeing phrase (hai ragione su ..., sono d'accordo che ...)",
    "Disagrees politely with at least one point (non sono d'accordo che + subjunctive, non la vedo così, però ...)",
    "Uses opinion phrases with the right mood (penso che + subjunctive; secondo me + indicative)",
    "Concedes with è vero che ..., ma or anche se / benché",
    "Ends with a proposal in the conditional (bisognerebbe, sarebbe meglio, si potrebbe) and a question",
  ],
  modelAnswer: "Ciao Luca, capisco il tuo punto di vista. Su una cosa hai ragione: in alcuni centri storici, come Venezia o Firenze, i residenti sono sempre meno e i negozi per gli abitanti stanno sparendo. Però non sono d'accordo che i turisti siano il problema. Secondo me il problema sono le regole: è vero che il turismo porta caos, ma porta anche lavoro e soldi a molte famiglie. Anche se capisco chi vuole limitare gli arrivi, non penso che i divieti funzionino davvero. Forse bisognerebbe limitare gli affitti brevi e far pagare un contributo ai visitatori, come già si fa in alcune città. Così si potrebbero aiutare i residenti senza chiudere le porte a nessuno. Voi che ne pensate?",
  explanation: "The reply concedes (\"Su una cosa hai ragione\", \"è vero che ..., ma\"), disagrees with a subjunctive (\"non sono d'accordo che ... siano\", \"non penso che ... funzionino\") and keeps \"secondo me\" with the indicative. It closes with conditional proposals (\"bisognerebbe\", \"si potrebbero\") and a question to the forum.",
};
