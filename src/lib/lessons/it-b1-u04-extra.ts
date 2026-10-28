// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u04-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 4 Extra Practice: Pronominal Verbs. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U04_EXTRA: Lesson[] = [
  {
    slug: "b1-pronominal-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Andarsene and Farcela",
    summary: "Fresh sentences with me ne vado, se n'è andata, ce la faccio and ce l'abbiamo fatta.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Leaving and managing",
        body: [
          "\"Andarsene\": \"me ne vado\", past with \"essere\" and agreement with the subject (\"se n'è andata\"). \"Farcela\": \"ce la faccio\", past with \"avere\" and always \"fatta\" (\"ce l'abbiamo fatta\").",
        ],
        examples: [
          { es: "Il mio coinquilino se ne va a fine mese.", en: "My roommate is leaving at the end of the month." },
          { es: "Ce la fai a finire entro stasera?", en: "Can you manage to finish by tonight?" },
          { es: "Sono stanca, me ne vado a letto.", en: "I'm tired, I'm off to bed." },
          { es: "Ce l'hanno fatta a trovare casa a Milano!", en: "They managed to find an apartment in Milan!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My roommate is leaving at the end of the month.", answer: "Il mio coinquilino se ne va a fine mese.", altAnswers: ["La mia coinquilina se ne va a fine mese.", "Il mio coinquilino se ne va alla fine del mese."], explanation: "\"Se ne va\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They managed to find an apartment in Milan!", answer: "Ce l'hanno fatta a trovare casa a Milano!", altAnswers: ["Ce l'hanno fatta a trovare un appartamento a Milano!"], explanation: "\"Farcela a\" + infinitive; always \"fatta\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm tired, I'm off to bed.", answer: "Sono stanca, me ne vado a letto.", altAnswers: ["Sono stanco, me ne vado a letto.", "Sono stanco, vado a letto.", "Sono stanca, vado a letto."], explanation: "\"Me ne vado\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you manage to finish by tonight? (to a friend)", answer: "Ce la fai a finire entro stasera?", altAnswers: ["Ce la fai a finire per stasera?"], explanation: "\"Farcela a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Chiara left without saying anything.", answer: "Chiara se n'è andata senza dire niente.", altAnswers: ["Chiara se ne è andata senza dire niente.", "Chiara se n'è andata senza dire nulla."], explanation: "\"Andata\" agrees with Chiara." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can't manage without you.", answer: "Non ce la facciamo senza di te.", altAnswers: ["Senza di te non ce la facciamo."], explanation: "\"Senza di\" + stressed pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When are you leaving? (to a couple)", answer: "Quando ve ne andate?", altAnswers: ["Quando partite?"], explanation: "\"Ve ne andate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you make it to the airport? (to a friend)", answer: "Ce l'hai fatta ad arrivare all'aeroporto?", altAnswers: ["Ce l'hai fatta a arrivare all'aeroporto?", "Sei riuscito ad arrivare all'aeroporto?", "Sei riuscita ad arrivare all'aeroporto?"], explanation: "\"Ad\" before a vowel is common: \"ad arrivare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't leave without me! (to a friend)", answer: "Non andartene senza di me!", altAnswers: ["Non te ne andare senza di me!", "Non andare via senza di me!"], explanation: "Negative tu with \"andarsene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you help me, I'll make it.", answer: "Se mi aiuti, ce la faccio.", altAnswers: ["Se mi aiuti, ce la farò."], explanation: "\"Ce la faccio\" / \"ce la farò\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The neighbors [moved away] in June.", sentence: "I vicini ___ a giugno.", answer: "se ne sono andati", altAnswers: ["sono andati via"], explanation: "Plural masculine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Get out], all of you!", sentence: "___, tutti!", answer: "Andatevene", explanation: "Voi command + \"ve ne\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[She made it]: she got the job!", sentence: "___: ha avuto il lavoro!", answer: "Ce l'ha fatta", explanation: "Always \"fatta\"." },
      { type: "word-order", prompt: "Put the words in order to say: Let's leave before dinner.", words: ["Andiamocene", "prima", "di", "cena."], translation: "Let's leave before dinner.", explanation: "Noi command: \"andiamo\" + \"ce ne\"." },
      { type: "listen-choose", audio: "Ce l'hanno fatta a trovare casa!", question: "What happened?", options: ["They managed to find a home.", "They left home.", "They built a house.", "They couldn't find a home."], correctIndex: 0, explanation: "\"Farcela a\" = to manage to." },
      { type: "dictation", audio: "Me ne vado a letto, non ce la faccio più.", explanation: "Two pronominal verbs." },
      { type: "speak", text: "Ce l'abbiamo fatta! Adesso ce ne andiamo a festeggiare.", prompt: "Say it in Italian: We did it! Now we're off to celebrate.", tip: "fe-steg-GIA-re: double g.", explanation: "\"Farcela\" past, \"andarsene\" present." },
    ],
  },
  {
    slug: "b1-pronominal-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Prendersela and Avercela",
    summary: "Fresh sentences about getting upset and being angry with someone.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Upset and angry",
        body: [
          "\"Prendersela\" (to get upset, take it badly): \"me la prendo\", past \"se l'è presa\" with \"essere\" and always \"presa\". \"Avercela con\" (to be angry with): \"ce l'ho con te\", past usually \"ce l'avevo con lui\".",
        ],
        examples: [
          { es: "Se la prende sempre per niente.", en: "She always gets upset over nothing." },
          { es: "Ce l'hanno con il governo.", en: "They're angry with the government." },
          { es: "Non te la sei presa, vero?", en: "You weren't offended, were you?" },
          { es: "Ce l'avevo con te, ma adesso mi è passata.", en: "I was angry with you, but I've gotten over it now." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She always gets upset over nothing.", answer: "Se la prende sempre per niente.", altAnswers: ["Se la prende sempre per nulla."], explanation: "\"Se la prende\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You weren't offended, were you? (to a friend)", answer: "Non te la sei presa, vero?", explanation: "\"Te la sei presa\": always \"presa\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They're angry with the government.", answer: "Ce l'hanno con il governo.", altAnswers: ["Ce l'hanno col governo."], explanation: "\"Avercela con\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was angry with you, but I've gotten over it now.", answer: "Ce l'avevo con te, ma adesso mi è passata.", altAnswers: ["Ce l'avevo con te, ma ora mi è passata."], explanation: "Imperfetto for the state." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why are you taking it out on the waiter?", answer: "Perché te la prendi con il cameriere?", altAnswers: ["Perché te la prendi col cameriere?"], explanation: "\"Prendersela con\" = take it out on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents got upset because I didn't call.", answer: "I miei se la sono presa perché non ho chiamato.", altAnswers: ["I miei genitori se la sono presa perché non ho chiamato.", "I miei se la sono presa perché non li ho chiamati."], explanation: "Plural subject, still \"presa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is he still angry with you? (to a friend)", answer: "Ce l'ha ancora con te?", explanation: "\"Ancora\" = still." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't take it badly, sir.", answer: "Non se la prenda, signore.", explanation: "Lei command." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're not angry with anyone.", answer: "Non ce l'abbiamo con nessuno.", explanation: "\"Non ... nessuno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I get upset easily.", answer: "Me la prendo facilmente.", altAnswers: ["Me la prendo subito."], explanation: "\"Me la prendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Who are you angry with]? (plural)", sentence: "___?", answer: "Con chi ce l'avete", explanation: "\"Con chi\" first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [got upset] about the joke.", sentence: "Luca ___ per lo scherzo.", answer: "se l'è presa", explanation: "\"Presa\" even for Luca." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Don't take it badly], it's not about you. (to a friend)", sentence: "___, non è per te.", answer: "Non prendertela", altAnswers: ["Non te la prendere"], explanation: "Negative tu." },
      { type: "word-order", prompt: "Put the words in order to say: The neighbor has it in for our dog.", words: ["Il", "vicino", "ce", "l'ha", "con", "il", "nostro", "cane."], translation: "The neighbor has it in for our dog.", explanation: "\"Avercela con\"." },
      { type: "listen-choose", audio: "Non te la sei presa, vero?", question: "What is the speaker checking?", options: ["that you weren't offended", "that you took the keys", "that you didn't leave", "that you managed it"], correctIndex: 0, explanation: "\"Prendersela\" = to take offense." },
      { type: "dictation", audio: "Ce l'ha con tutti, ma non se la prende mai.", explanation: "\"Ce l'ha\", \"se la prende\"." },
      { type: "speak", text: "Ce l'hai ancora con me? Mi dispiace, non volevo offenderti.", prompt: "Say it in Italian: Are you still angry with me? I'm sorry, I didn't mean to offend you.", tip: "of-FEN-der-ti: double f.", explanation: "\"Avercela\" in a question." },
    ],
  },
  {
    slug: "b1-pronominal-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Mixed Pronominal Verbs",
    summary: "All the pronominal verbs of the unit in fresh everyday situations.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Pick the right expression",
        body: [
          "Leaving: \"andarsene\". Managing: \"farcela\". Getting by: \"cavarsela\". Getting upset: \"prendersela\". Being angry with: \"avercela con\". Stopping: \"smetterla\". Feeling up to: \"sentirsela\".",
        ],
        examples: [
          { es: "Me la cavo con la cucina, ma non ce la faccio con i dolci.", en: "I get by in the kitchen, but I can't manage desserts." },
          { es: "Smettila di prendertela con tuo fratello!", en: "Stop taking it out on your brother!" },
          { es: "Non me la sento di andarmene adesso.", en: "I don't feel up to leaving now." },
          { es: "Ce l'abbiamo fatta, e nessuno se l'è presa.", en: "We made it, and nobody got upset." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Stop taking it out on your brother!", answer: "Smettila di prendertela con tuo fratello!", explanation: "\"Smettila di\" + \"prendertela\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't feel up to leaving now.", answer: "Non me la sento di andarmene adesso.", altAnswers: ["Non me la sento di andarmene ora.", "Adesso non me la sento di andarmene."], explanation: "\"Andarmene\": the infinitive takes \"me ne\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I get by in the kitchen, but I can't manage desserts.", answer: "Me la cavo in cucina, ma non ce la faccio con i dolci.", altAnswers: ["In cucina me la cavo, ma con i dolci non ce la faccio."], explanation: "\"Cavarsela\" vs \"farcela\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We made it, and nobody got upset.", answer: "Ce l'abbiamo fatta, e nessuno se l'è presa.", altAnswers: ["Ce l'abbiamo fatta e nessuno se l'è presa."], explanation: "\"Fatta\", \"presa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Stop it and go away!", answer: "Smettila e vattene!", explanation: "Two tu commands." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you feel up to driving? (to a friend)", answer: "Te la senti di guidare?", explanation: "\"Sentirsela di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He got by with a little Italian.", answer: "Se l'è cavata con un po' di italiano.", altAnswers: ["Se l'è cavata con un po' d'italiano."], explanation: "\"Se l'è cavata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They left because they were angry with us.", answer: "Se ne sono andati perché ce l'avevano con noi.", altAnswers: ["Se ne sono andate perché ce l'avevano con noi."], explanation: "\"Andarsene\" + \"avercela\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'll make it, don't worry.", answer: "Ce la farai, non preoccuparti.", altAnswers: ["Ce la farai, non ti preoccupare."], explanation: "\"Ce la farai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "OK, I'll stop, but you stop too!", answer: "Va bene, la smetto, ma smettila anche tu!", altAnswers: ["Ok, la smetto, ma smettila anche tu!"], explanation: "\"La smetto\", \"smettila\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I can't manage] to sleep with this heat.", sentence: "___ a dormire con questo caldo.", answer: "Non ce la faccio", altAnswers: ["Non riesco"], explanation: "\"Farcela a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cat [ran off] when it saw the dog.", sentence: "Il gatto ___ quando ha visto il cane.", answer: "se n'è andato", altAnswers: ["è scappato", "se ne è andato"], explanation: "\"Andarsene\" for animals too." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We don't feel up to it] tonight.", sentence: "Stasera ___.", answer: "non ce la sentiamo", explanation: "\"Sentirsela\" with noi." },
      { type: "word-order", prompt: "Put the words in order to say: Don't be upset: you did fine.", words: ["Non", "prendertela:", "te", "la", "sei", "cavata", "bene."], translation: "Don't be upset: you did fine.", explanation: "Two pronominal verbs." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "me ne vado", right: "I'm leaving" }, { left: "ce la faccio", right: "I can manage" }, { left: "me la cavo", right: "I get by" }, { left: "me la prendo", right: "I get upset" }, { left: "ce l'ho con te", right: "I'm angry with you" }], explanation: "Each verb is a fixed expression." },
      { type: "dictation", audio: "Smettila di prendertela: ce la farai!", explanation: "\"Smettila\", \"prendertela\", \"ce la farai\"." },
      { type: "speak", text: "Non me la sento di uscire, ma non prendertela: ve la cavate anche senza di me.", prompt: "Say it in Italian: I don't feel up to going out, but don't take it badly: you'll get by without me.", tip: "Three clusters: me la, prendertela, ve la.", explanation: "Mixed pronominal verbs." },
    ],
  },
];
