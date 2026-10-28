// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u14.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 14: The Future Perfect and Probability. Futuro anteriore
// forms, future sequences after quando / appena / dopo che, guesses about
// the past (sarà già partito) and about now (sarà a casa).
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U14: Lesson[] = [
  {
    slug: "b1-future-perfect-forms",
    level: "IT-B1",
    number: 1,
    title: "The Future Perfect: Forms",
    summary: "Form the futuro anteriore with avrò or sarò plus the past participle, and say what will have happened by a deadline.",
    duration: "17 min",
    sections: [
      {
        heading: "Avrò finito: will have done",
        body: [
          "The future perfect (\"futuro anteriore\") is built like the passato prossimo with the auxiliary in the future: \"avrò finito\" (I will have finished), \"sarò arrivato\" (I will have arrived). The forms of the auxiliary are the futures you know: \"avrò, avrai, avrà, avremo, avrete, avranno\" and \"sarò, sarai, sarà, saremo, sarete, saranno\".",
          "Its plainest use matches English: something will be complete by a point in the future. \"Entro venerdì avremo finito\" (by Friday we will have finished). \"Entro\" is the word for by with deadlines; \"per\" is also heard (\"per lunedì\").",
          "Only one m here: \"avremo\", \"saremo\". With two m's you get the conditional, \"avremmo\" (we would have), from the last unit. Say the single m short and light.",
        ],
        examples: [
          { es: "Entro venerdì avremo finito.", en: "By Friday we will have finished." },
          { es: "Alle otto avrò già cenato.", en: "By eight I'll already have had dinner." },
          { es: "Entro giugno avrai dato tutti gli esami.", en: "By June you'll have taken all your exams." },
          { es: "Tra un'ora avranno chiuso il negozio.", en: "In an hour they'll have closed the shop." },
          { es: "Per Natale avrete risparmiato abbastanza.", en: "By Christmas you'll have saved enough. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By Friday we will have finished.", answer: "Entro venerdì avremo finito.", altAnswers: ["Avremo finito entro venerdì.", "Per venerdì avremo finito.", "Entro venerdì noi avremo finito."], explanation: "\"Avremo\" (future of \"avere\") + \"finito\"; \"entro\" = by." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By eight [I'll already have had dinner].", sentence: "Alle otto ___.", answer: "avrò già cenato", altAnswers: ["io avrò già cenato", "avrò già mangiato"], explanation: "\"Già\" sits between the auxiliary and the participle." },
          { type: "listen-choose", audio: "Avremo finito.", question: "What did you hear?", options: ["Avremo finito.", "Avremmo finito.", "Abbiamo finito.", "Avevamo finito."], correctIndex: 0, explanation: "A short single m: \"avremo\", the future perfect. Two m's would mean we would have finished." },
        ],
      },
      {
        heading: "Sarò partito: verbs with essere",
        body: [
          "Verbs that take \"essere\" keep it: \"sarò partito\", \"sarai arrivata\", \"saranno tornati\". The participle agrees with the subject: \"Giulia sarà già partita\", \"i ragazzi saranno arrivati\". Reflexive verbs put their pronoun first: \"mi sarò già alzato\".",
          "The irregular participles are the ones you know: \"fatto\", \"detto\", \"visto\", \"preso\", \"scritto\", \"messo\", \"letto\", \"rimasto\", \"venuto\".",
        ],
        examples: [
          { es: "Quando arrivi, sarò già partito.", en: "When you arrive, I'll already have left." },
          { es: "Tra un mese Giulia sarà tornata dall'Australia.", en: "In a month Giulia will have come back from Australia." },
          { es: "A mezzanotte i ragazzi saranno già andati a letto.", en: "By midnight the boys will already have gone to bed." },
          { es: "Alle sette mi sarò già alzata.", en: "By seven I'll already have got up. (a woman)" },
          { es: "Entro domani avrò scritto la relazione.", en: "By tomorrow I'll have written the report." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you arrive, I'll already have left. (a man speaking, to a friend)", answer: "Quando arrivi, sarò già partito.", altAnswers: ["Quando arriverai, sarò già partito.", "Quando arrivi, io sarò già partito."], explanation: "\"Partire\" takes \"essere\": \"sarò partito\"." },
          { type: "multiple-choice", question: "Which means: by midnight the girls will have gone home?", options: ["A mezzanotte le ragazze saranno tornate a casa.", "A mezzanotte le ragazze avranno tornato a casa.", "A mezzanotte le ragazze sarebbero tornate a casa.", "A mezzanotte le ragazze saranno tornati a casa."], correctIndex: 0, explanation: "\"Tornare\" takes \"essere\", with feminine plural agreement." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By tomorrow I'll have written the report.", answer: "Entro domani avrò scritto la relazione.", altAnswers: ["Per domani avrò scritto la relazione.", "Avrò scritto la relazione entro domani.", "Entro domani avrò scritto il rapporto."], explanation: "\"Scrivere\" → \"scritto\"." },
        ],
      },
      {
        heading: "Less common than in English",
        body: [
          "Italians use the future perfect less than English speakers might expect for will have. In speech, a plain future or even a present often does the job: \"Domani a quest'ora sono già a Parigi\" (this time tomorrow I'll already be in Paris).",
          "Keep the future perfect for a clear deadline or a clear before-and-after. The next two lessons show where it really shines: future sequences and guesses about the past.",
        ],
        examples: [
          { es: "Domani a quest'ora sono già a Parigi.", en: "This time tomorrow I'll already be in Paris." },
          { es: "Fra dieci anni avremo cambiato casa almeno una volta.", en: "In ten years we'll have moved house at least once." },
          { es: "Prima di sera avrete visto tutto il museo.", en: "Before evening you'll have seen the whole museum. (plural)" },
          { es: "Fra un'ora sarà tutto finito.", en: "In an hour it'll all be over." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Before evening you'll have seen the whole museum. (plural)", answer: "Prima di sera avrete visto tutto il museo.", altAnswers: ["Prima di stasera avrete visto tutto il museo.", "Avrete visto tutto il museo prima di sera."], explanation: "\"Avrete\" for \"voi\"; \"tutto il museo\" = the whole museum." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In ten years [we'll have moved house] at least once.", sentence: "Fra dieci anni ___ almeno una volta.", answer: "avremo cambiato casa", altAnswers: ["noi avremo cambiato casa", "ci saremo trasferiti"], explanation: "\"Cambiare casa\" = to move house; one m in \"avremo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In an hour they'll have closed the shop.", answer: "Tra un'ora avranno chiuso il negozio.", altAnswers: ["Fra un'ora avranno chiuso il negozio.", "Tra un'ora loro avranno chiuso il negozio."], explanation: "\"Chiudere\" → \"chiuso\"; \"tra\" or \"fra\" = in (from now)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By June you'll have taken all your exams. (to a friend)", answer: "Entro giugno avrai dato tutti gli esami.", altAnswers: ["Per giugno avrai dato tutti gli esami.", "Entro giugno avrai fatto tutti gli esami."], explanation: "Italian students \"danno\" or \"fanno\" exams." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By seven I'll already have got up. (a man speaking)", answer: "Alle sette mi sarò già alzato.", altAnswers: ["Entro le sette mi sarò già alzato.", "Per le sette mi sarò già alzato."], explanation: "Reflexive: \"mi sarò alzato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In a month Giulia will have come back.", answer: "Tra un mese Giulia sarà tornata.", altAnswers: ["Fra un mese Giulia sarà tornata.", "Tra un mese Giulia sarà rientrata."], explanation: "\"Tornare\" with \"essere\"; \"tornata\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By Christmas we'll have saved enough.", answer: "Per Natale avremo risparmiato abbastanza.", altAnswers: ["Entro Natale avremo risparmiato abbastanza.", "A Natale avremo risparmiato abbastanza."], explanation: "One m: \"avremo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By midnight the boys [will have gone] to bed.", sentence: "A mezzanotte i ragazzi ___ a letto.", answer: "saranno andati", explanation: "\"Andare\": essere + masculine plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Tomorrow evening [you'll have read] the whole book. (to a friend)", sentence: "Domani sera ___ tutto il libro.", answer: "avrai letto", altAnswers: ["tu avrai letto"], explanation: "\"Leggere\" → \"letto\"." },
      { type: "word-order", prompt: "Put the words in order to say: By Monday they will have sent the documents.", words: ["Entro", "lunedì", "avranno", "mandato", "i", "documenti."], translation: "By Monday they will have sent the documents.", altOrders: [["Avranno", "mandato", "i", "documenti", "entro", "lunedì."]], explanation: "\"Avranno mandato\": future of \"avere\" + participle." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "avremo finito", right: "we will have finished" }, { left: "avremmo finito", right: "we would have finished" }, { left: "sarò partito", right: "I will have left" }, { left: "sarei partito", right: "I would have left" }, { left: "saranno arrivate", right: "they (women) will have arrived" }], explanation: "\"-ò, -emo, -anno\" for the future; \"-ei, -emmo\" for the conditional." },
      { type: "dictation", audio: "Entro sabato avremo dipinto tutta la casa.", explanation: "\"Dipingere\" → \"dipinto\"; single m in \"avremo\"." },
      { type: "speak", text: "Entro la fine del mese avrò finito il corso e sarò tornata a casa.", prompt: "Say it in Italian: By the end of the month I'll have finished the course and gone back home. (a woman speaking)", tip: "Stress the final syllable of the auxiliaries: a-VRÒ, sa-RÒ.", explanation: "One verb with \"avere\", one with \"essere\" and agreement." },
    ],
  },
  {
    slug: "b1-future-perfect-sequence",
    level: "IT-B1",
    number: 2,
    title: "When I've Finished",
    summary: "Put future events in order with quando, appena and dopo che + futuro anteriore: quando avrò finito, ti chiamerò.",
    duration: "17 min",
    sections: [
      {
        heading: "Quando avrò finito, ti chiamerò",
        body: [
          "English says when I've finished, I'll call you, with a present perfect for a future event. Italian is more logical: the finishing is in the future too, and it comes first, so it goes in the future perfect: \"Quando avrò finito, ti chiamerò\".",
          "The words that introduce the earlier event are \"quando\" (when), \"appena\" or \"non appena\" (as soon as), \"dopo che\" (after) and \"una volta che\" (once). The main clause is in the future or, when it's an instruction, the imperative: \"Appena sarai arrivato, chiamami\" (as soon as you've arrived, call me).",
          "This is a classic trap for English speakers, who write \"quando ho finito\" for a future event. In careful Italian, two future events in sequence means future perfect, then future.",
        ],
        examples: [
          { es: "Quando avrò finito, ti chiamerò.", en: "When I've finished, I'll call you." },
          { es: "Appena sarà arrivato, partiremo.", en: "As soon as he's arrived, we'll leave." },
          { es: "Dopo che avrete mangiato, andremo al parco.", en: "After you've eaten, we'll go to the park. (plural)" },
          { es: "Una volta che avrai trovato casa, sarà tutto più facile.", en: "Once you've found a place, everything will be easier." },
          { es: "Appena sarai arrivata, chiamami.", en: "As soon as you've arrived, call me. (to a woman)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I've finished, I'll call you. (to a friend)", answer: "Quando avrò finito, ti chiamerò.", altAnswers: ["Quando avrò finito ti chiamerò.", "Quando avrò finito, ti chiamo.", "Ti chiamerò quando avrò finito."], explanation: "The earlier future event goes in the future perfect: \"avrò finito\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as [he's arrived], we'll leave.", sentence: "Appena ___, partiremo.", answer: "sarà arrivato", altAnswers: ["lui sarà arrivato"], explanation: "\"Arrivare\" takes \"essere\": \"sarà arrivato\"." },
          { type: "multiple-choice", question: "Which is the careful written Italian for: after you've eaten, we'll go out?", options: ["Dopo che avrai mangiato, usciremo.", "Dopo che hai mangiato, usciremmo.", "Dopo che mangerai, siamo usciti.", "Dopo che avresti mangiato, usciremo."], correctIndex: 0, explanation: "Future perfect for the earlier event, future for the later one." },
        ],
      },
      {
        heading: "What you hear in speech",
        body: [
          "In everyday conversation many Italians simplify: present + present, or passato prossimo + present. \"Quando ho finito, ti chiamo\", \"Appena arriva, partiamo\". This is normal, relaxed speech, and you should recognise it.",
          "In writing, in emails and whenever you want to sound precise, use the future perfect. A useful rule: if the main verb is in the future, the earlier event should be in the future perfect.",
        ],
        examples: [
          { es: "Quando ho finito, ti chiamo.", en: "When I've finished, I'll call you. (casual)" },
          { es: "Appena arriva, partiamo.", en: "As soon as he arrives, we'll leave. (casual)" },
          { es: "Ti scrivo appena ho finito.", en: "I'll text you as soon as I've finished. (casual)" },
          { es: "Le invierò il contratto appena l'avrò firmato.", en: "I'll send you the contract as soon as I've signed it. (formal)" },
          { es: "Dopo che avremo ricevuto il pagamento, spediremo la merce.", en: "Once we have received payment, we will ship the goods." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll send you the contract as soon as I've signed it. (formal)", answer: "Le invierò il contratto appena l'avrò firmato.", altAnswers: ["Le manderò il contratto appena l'avrò firmato.", "Le invierò il contratto non appena l'avrò firmato.", "Le manderò il contratto non appena l'avrò firmato."], explanation: "Formal email: future + future perfect; \"lo\" elides before \"avrò\"." },
          { type: "listen-choose", audio: "Appena arriva, partiamo.", question: "What kind of Italian is this?", options: ["Relaxed speech for a future sequence", "A past event", "A wish", "A formal written instruction"], correctIndex: 0, explanation: "Present + present for a future sequence is normal in conversation." },
        ],
      },
      {
        heading: "Will have by the time",
        body: [
          "The future perfect can also be the main verb, with the later event in the plain future or present: \"Quando arriverai, avremo già mangiato\" (when you arrive, we'll already have eaten). Here the eating comes first, so it takes the future perfect even though it's in the main clause.",
          "Always ask which event is first: that one gets the future perfect.",
        ],
        examples: [
          { es: "Quando arriverai, avremo già mangiato.", en: "When you arrive, we'll already have eaten." },
          { es: "Quando ti sveglierai, sarò già uscito.", en: "When you wake up, I'll already have gone out." },
          { es: "Prima che tu torni, avrò pulito tutto.", en: "Before you get back, I'll have cleaned everything." },
          { es: "Quando tornerete, avrò già preparato la cena.", en: "When you get back, I'll already have made dinner. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you arrive, we'll already have eaten. (to a friend)", answer: "Quando arriverai, avremo già mangiato.", altAnswers: ["Quando arrivi, avremo già mangiato.", "Quando arriverai avremo già mangiato.", "Quando arriverai, avremo già cenato."], explanation: "The eating comes first: future perfect in the main clause." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When you wake up, [I'll already have gone out]. (a woman speaking)", sentence: "Quando ti sveglierai, ___.", answer: "sarò già uscita", altAnswers: ["io sarò già uscita"], explanation: "\"Uscire\" takes \"essere\"; feminine speaker." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as you've arrived, call me. (to a male friend)", answer: "Appena sarai arrivato, chiamami.", altAnswers: ["Non appena sarai arrivato, chiamami.", "Appena arrivi, chiamami.", "Quando sarai arrivato, chiamami."], explanation: "Future perfect + imperative; \"arrivi\" is the casual version." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once you've found a place, everything will be easier. (to a friend)", answer: "Una volta che avrai trovato casa, sarà tutto più facile.", altAnswers: ["Quando avrai trovato casa, sarà tutto più facile.", "Una volta che avrai trovato casa, tutto sarà più facile."], explanation: "\"Trovare casa\" = to find somewhere to live." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After you've eaten, we'll go to the park. (plural)", answer: "Dopo che avrete mangiato, andremo al parco.", altAnswers: ["Dopo che avrete mangiato andremo al parco.", "Quando avrete mangiato, andremo al parco."], explanation: "\"Avrete mangiato\" comes first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once we have received payment, we will ship the goods.", answer: "Dopo che avremo ricevuto il pagamento, spediremo la merce.", altAnswers: ["Una volta che avremo ricevuto il pagamento, spediremo la merce.", "Appena avremo ricevuto il pagamento, spediremo la merce."], explanation: "Business Italian: future perfect + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Before you get back, I'll have cleaned everything. (to a friend)", answer: "Prima che tu torni, avrò pulito tutto.", altAnswers: ["Prima che tu ritorni, avrò pulito tutto.", "Prima che torni, avrò pulito tutto."], explanation: "\"Prima che\" + subjunctive; the cleaning is first, so future perfect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [you've read] the letter, you'll understand. (to a friend)", sentence: "Quando ___ la lettera, capirai.", answer: "avrai letto", altAnswers: ["tu avrai letto"], explanation: "\"Avrai letto\" happens before \"capirai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as the guests [have left], we'll tidy up.", sentence: "Appena gli ospiti ___, metteremo in ordine.", answer: "saranno andati via", altAnswers: ["se ne saranno andati", "saranno partiti", "saranno usciti"], explanation: "\"Andare via\" with \"essere\": \"saranno andati via\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'll call you when I've finished.", words: ["Ti", "chiamerò", "quando", "avrò", "finito."], translation: "I'll call you when I've finished.", altOrders: [["Quando", "avrò", "finito,", "ti", "chiamerò."]], explanation: "The \"quando\" clause can come first or second." },
      { type: "multiple-choice", question: "Your friend says \"Quando ho finito, ti chiamo\". What should you think?", options: ["It's normal relaxed speech for a future sequence.", "It's a mistake: she's talking about the past.", "It's a conditional: she would call.", "It means she has already called."], correctIndex: 0, explanation: "Present tenses for a future sequence are common in conversation." },
      { type: "dictation", audio: "Appena avrò ricevuto la risposta, te la manderò.", explanation: "\"Avrò ricevuto\" first, then \"te la manderò\"." },
      { type: "speak", text: "Quando avrò finito di lavorare, passerò a prenderti.", prompt: "Say it in Italian: When I've finished work, I'll come by and pick you up.", tip: "Run \"passerò a prenderti\" together: pas-se-RÒ-a-PREN-der-ti.", explanation: "Future perfect for the earlier event, future for the later one." },
    ],
  },
  {
    slug: "b1-future-perfect-probability",
    level: "IT-B1",
    number: 3,
    title: "Guessing About the Past",
    summary: "Use the futuro anteriore to guess what has probably happened: non risponde, sarà già uscito; avrà dimenticato l'appuntamento.",
    duration: "17 min",
    sections: [
      {
        heading: "Sarà già uscito: must have",
        body: [
          "Italian uses the future perfect for a guess about the past, where English says must have, probably or I suppose. \"Non risponde: sarà già uscito\" (he's not answering: he must have gone out already). \"Avrà dimenticato l'appuntamento\" (she's probably forgotten the appointment).",
          "Nothing is in the future here. The tense simply marks the sentence as a supposition. It's extremely common in conversation, often with \"forse\" (maybe) or \"chissà\" (who knows) close by.",
          "The same tense works for questions you ask yourself out loud: \"Dove avrò messo le chiavi?\" (where can I have put my keys?), \"Chi l'avrà detto?\" (who could have said it?).",
        ],
        examples: [
          { es: "Non risponde: sarà già uscito.", en: "He's not answering: he must have gone out already." },
          { es: "Avrà dimenticato l'appuntamento.", en: "She's probably forgotten the appointment." },
          { es: "Dove avrò messo le chiavi?", en: "Where can I have put my keys?" },
          { es: "Chi l'avrà detto a Marco?", en: "Who could have told Marco?" },
          { es: "Il treno sarà partito in ritardo.", en: "The train must have left late." },
          { es: "Avranno avuto un contrattempo.", en: "They must have had a hitch." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's not answering: he must have gone out already.", answer: "Non risponde: sarà già uscito.", altAnswers: ["Non risponde, sarà già uscito.", "Non risponde: forse è già uscito."], explanation: "The future perfect is the Italian must have: \"sarà già uscito\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Where [can I have put] my keys?", sentence: "Dove ___ le chiavi?", answer: "avrò messo", explanation: "A question to yourself: \"avrò messo\" = can I have put." },
          { type: "listen-choose", audio: "Avranno avuto un contrattempo.", question: "What does it mean?", options: ["They must have had a hitch.", "They will have a hitch.", "They would have had a hitch.", "They had a hitch, I'm sure they told me."], correctIndex: 0, explanation: "Future perfect for a guess about the past." },
        ],
      },
      {
        heading: "Answering a guess",
        body: [
          "When someone asks something nobody really knows, the natural Italian answer is a guess in the future perfect: \"Perché Luca non è venuto?\" \"Mah, avrà avuto da fare\" (oh, he must have been busy). \"Mah\" or \"boh\" at the start signal I don't really know.",
          "For a confident statement, drop the guess and use the passato prossimo: \"È uscito alle otto, l'ho visto\" (he went out at eight, I saw him).",
        ],
        examples: [
          { es: "Perché Luca non è venuto? Mah, avrà avuto da fare.", en: "Why didn't Luca come? Oh, he must have been busy." },
          { es: "Quanto avrà speso per quella macchina?", en: "How much must he have spent on that car?" },
          { es: "Avrà speso almeno trentamila euro.", en: "He must have spent at least thirty thousand euros." },
          { es: "È uscito alle otto, l'ho visto.", en: "He went out at eight, I saw him." },
          { es: "Boh, si sarà perso.", en: "No idea, he must have got lost." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have spent at least thirty thousand euros.", answer: "Avrà speso almeno trentamila euro.", altAnswers: ["Avrà speso almeno 30.000 euro.", "Lui avrà speso almeno trentamila euro."], explanation: "A guess about a past action: \"avrà speso\"." },
          { type: "multiple-choice", question: "\"Perché Sofia non è venuta?\" You don't know. What do you say?", options: ["Mah, sarà stata stanca.", "Sì, è stata stanca.", "Mah, sarebbe stata stanca.", "Mah, sarà stanco."], correctIndex: 0, explanation: "A guess about the past: \"sarà stata\", agreeing with Sofia." },
        ],
      },
      {
        heading: "Guessing now: the plain future",
        body: [
          "For a guess about the present, Italian uses the simple future, which you met at Elementary level: \"Sarà a casa\" (he's probably at home), \"Che ore saranno?\" \"Saranno le nove\" (what time can it be? it must be about nine). \"Avrà quarant'anni\" (she must be about forty).",
          "So the two tenses split the work: plain future for guesses about now, future perfect for guesses about what has already happened. The contrast clinic later in this unit drills the difference.",
        ],
        examples: [
          { es: "Sarà a casa.", en: "He's probably at home." },
          { es: "Che ore saranno? Saranno le nove.", en: "What time can it be? It must be about nine." },
          { es: "Avrà quarant'anni.", en: "She must be about forty." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She must be about forty.", answer: "Avrà quarant'anni.", altAnswers: ["Avrà circa quarant'anni.", "Lei avrà quarant'anni.", "Avrà una quarantina d'anni."], explanation: "A guess about now: simple future \"avrà\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She must have forgotten.", answer: "Avrà dimenticato.", altAnswers: ["Se ne sarà dimenticata.", "Lei avrà dimenticato.", "Si sarà dimenticata."], explanation: "A guess about the past: future perfect." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's probably forgotten the appointment.", answer: "Avrà dimenticato l'appuntamento.", altAnswers: ["Si sarà dimenticata dell'appuntamento.", "Lei avrà dimenticato l'appuntamento.", "Forse ha dimenticato l'appuntamento."], explanation: "Future perfect = probably has." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train must have left late.", answer: "Il treno sarà partito in ritardo.", explanation: "\"Partire\" with \"essere\": \"sarà partito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who could have told Marco?", answer: "Chi l'avrà detto a Marco?", altAnswers: ["Chi lo avrà detto a Marco?", "Chi glielo avrà detto?"], explanation: "A question to yourself: \"avrà detto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No idea, he must have got lost.", answer: "Boh, si sarà perso.", altAnswers: ["Non lo so, si sarà perso.", "Boh, si sarà perduto.", "Non so, si sarà perso."], explanation: "\"Perdersi\" is reflexive: \"si sarà perso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They must have had a hitch.", answer: "Avranno avuto un contrattempo.", altAnswers: ["Avranno avuto un imprevisto.", "Avranno avuto un problema."], explanation: "\"Avranno avuto\": a guess about what happened." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's probably at home.", answer: "Sarà a casa.", altAnswers: ["Probabilmente è a casa.", "Sarà a casa sua."], explanation: "Guess about now: simple future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children are quiet: [they must have fallen asleep].", sentence: "I bambini sono tranquilli: ___.", answer: "si saranno addormentati", explanation: "Reflexive in the future perfect: \"si saranno addormentati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Oh, [he must have been] busy.", sentence: "Mah, ___ da fare.", answer: "avrà avuto", explanation: "\"Avere da fare\" = to be busy; guessed with the future perfect." },
      { type: "word-order", prompt: "Put the words in order to say: How much must he have spent on that car?", words: ["Quanto", "avrà", "speso", "per", "quella", "macchina?"], translation: "How much must he have spent on that car?", explanation: "Future perfect in a question you can't answer for sure." },
      { type: "multiple-choice", question: "\"Sarà già arrivata\" means ...", options: ["She must have arrived already.", "She will arrive soon.", "She would have arrived already.", "She is arriving now."], correctIndex: 0, explanation: "Future perfect of probability: a guess about the past." },
      { type: "dictation", audio: "Non trovo il telefono: l'avrò lasciato in macchina.", explanation: "\"L'avrò lasciato\": a guess about where you left it." },
      { type: "speak", text: "Giulia è in ritardo: avrà perso l'autobus o sarà rimasta bloccata nel traffico.", prompt: "Say it in Italian: Giulia is late: she must have missed the bus or got stuck in traffic.", tip: "\"Bloccata\": hold the double c, bloc-CA-ta.", explanation: "Two guesses, one with \"avere\" and one with \"essere\"." },
    ],
  },
  {
    slug: "b1-drill-future-perfect",
    level: "IT-B1",
    number: 4,
    title: "Drill: Future Perfect",
    summary: "High-repetition production of the futuro anteriore in deadlines and future sequences.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Avrò or sarò + participle",
        body: [
          "\"Avrò, avrai, avrà, avremo, avrete, avranno\" or \"sarò, sarai, sarà, saremo, sarete, saranno\" + participle, agreeing with \"essere\". Use it for will have done by a deadline, and for the earlier of two future events after \"quando\", \"appena\" and \"dopo che\".",
        ],
        examples: [
          { es: "Entro le cinque avrò risposto a tutte le email.", en: "By five I'll have answered all the emails." },
          { es: "Appena avrai deciso, fammi sapere.", en: "As soon as you've decided, let me know." },
          { es: "Quando saremo arrivati, vi manderemo una foto.", en: "When we've arrived, we'll send you a photo." },
          { es: "Per domenica avranno traslocato.", en: "By Sunday they'll have moved." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By five I'll have answered all the emails.", answer: "Entro le cinque avrò risposto a tutte le email.", altAnswers: ["Per le cinque avrò risposto a tutte le email.", "Entro le cinque avrò risposto a tutte le mail.", "Entro le 17 avrò risposto a tutte le email."], explanation: "\"Rispondere a\" + \"risposto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When we've arrived, we'll send you a photo. (plural you)", answer: "Quando saremo arrivati, vi manderemo una foto.", altAnswers: ["Quando saremo arrivate, vi manderemo una foto.", "Appena saremo arrivati, vi manderemo una foto.", "Quando saremo arrivati, vi invieremo una foto."], explanation: "Arrival first: \"saremo arrivati\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as you've decided, let me know. (to a friend)", answer: "Appena avrai deciso, fammi sapere.", altAnswers: ["Non appena avrai deciso, fammi sapere.", "Quando avrai deciso, fammi sapere.", "Appena hai deciso, fammi sapere."], explanation: "\"Decidere\" → \"deciso\"; imperative in the main clause." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By Sunday they'll have moved.", answer: "Per domenica avranno traslocato.", altAnswers: ["Entro domenica avranno traslocato.", "Per domenica si saranno trasferiti.", "Entro domenica si saranno trasferiti."], explanation: "\"Traslocare\" = to move house." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By tonight she'll have finished the book.", answer: "Entro stasera avrà finito il libro.", altAnswers: ["Per stasera avrà finito il libro.", "Stasera avrà finito il libro."], explanation: "\"Avrà finito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you've paid, you can go in. (polite)", answer: "Quando avrà pagato, potrà entrare.", altAnswers: ["Dopo che avrà pagato, potrà entrare.", "Appena avrà pagato, potrà entrare."], explanation: "\"Lei\" form: \"avrà pagato\", \"potrà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After they've signed, we'll start the work.", answer: "Dopo che avranno firmato, cominceremo i lavori.", altAnswers: ["Dopo che avranno firmato, inizieremo i lavori.", "Quando avranno firmato, cominceremo i lavori."], explanation: "\"I lavori\" = building or repair work." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By the end of the year I'll have visited ten countries.", answer: "Entro la fine dell'anno avrò visitato dieci paesi.", altAnswers: ["Per la fine dell'anno avrò visitato dieci paesi.", "Alla fine dell'anno avrò visitato dieci paesi."], explanation: "\"Avrò visitato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When the film has finished, we'll go to bed.", answer: "Quando sarà finito il film, andremo a letto.", altAnswers: ["Quando il film sarà finito, andremo a letto.", "Quando il film sarà finito andremo a letto.", "Quando finisce il film, andiamo a letto."], explanation: "\"Finire\" meaning to end takes \"essere\": \"sarà finito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as the guests have arrived, we'll eat.", answer: "Appena saranno arrivati gli ospiti, mangeremo.", altAnswers: ["Appena gli ospiti saranno arrivati, mangeremo.", "Non appena gli ospiti saranno arrivati, mangeremo.", "Quando gli ospiti saranno arrivati, mangeremo."], explanation: "\"Saranno arrivati\": essere + plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By ten [you'll have got up]? (to a friend)", sentence: "Per le dieci ___?", answer: "ti sarai alzato", altAnswers: ["ti sarai alzata"], explanation: "Reflexive: \"ti sarai alzato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [you've seen] the photos, you'll understand. (plural)", sentence: "Quando ___ le foto, capirete.", answer: "avrete visto", altAnswers: ["voi avrete visto"], explanation: "\"Vedere\" → \"visto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By March [we will have paid off] the loan.", sentence: "Entro marzo ___ il prestito.", answer: "avremo restituito", altAnswers: ["avremo ripagato", "avremo estinto"], explanation: "Single m: \"avremo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Once [I've put] the children to bed, I'll call you.", sentence: "Una volta che ___ a letto i bambini, ti chiamerò.", answer: "avrò messo", explanation: "\"Mettere\" → \"messo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By the time you read this, [I will have left]. (a woman speaking)", sentence: "Quando leggerai questa lettera, ___.", answer: "sarò già partita", altAnswers: ["sarò partita", "io sarò già partita"], explanation: "\"Partire\" with \"essere\"; feminine speaker." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After [she has taken] the medicine, she'll feel better.", sentence: "Dopo che ___ la medicina, starà meglio.", answer: "avrà preso", explanation: "\"Prendere\" → \"preso\"." },
      { type: "word-order", prompt: "Put the words in order to say: When I've found a job, I'll buy a car.", words: ["Quando", "avrò", "trovato", "lavoro,", "comprerò", "una", "macchina."], translation: "When I've found a job, I'll buy a car.", explanation: "Future perfect, then future." },
      { type: "listen-choose", audio: "Quando avremo finito, usciremo.", question: "What does it mean?", options: ["When we've finished, we'll go out.", "If we finished, we would go out.", "When we finished, we went out.", "We would have finished, then gone out."], correctIndex: 0, explanation: "\"Avremo finito\" (single m) + \"usciremo\": a future sequence." },
      { type: "dictation", audio: "Appena sarà arrivata, la porteremo a cena.", explanation: "\"Sarà arrivata\": feminine agreement." },
      { type: "dictation", audio: "Entro domani avranno riparato la lavatrice.", explanation: "\"Avranno riparato\": by tomorrow." },
      { type: "speak", text: "Appena avrò finito l'università, mi trasferirò a Milano e avrò trovato casa entro settembre.", prompt: "Say it in Italian: As soon as I've finished university, I'll move to Milan, and I'll have found a flat by September.", tip: "Keep the stress on the last syllable of every future: a-VRÒ, tra-sfe-ri-RÒ.", explanation: "Future perfect for the earlier event and for the deadline." },
    ],
  },
  {
    slug: "b1-contrast-sara-sara-stato",
    level: "IT-B1",
    number: 5,
    title: "Contrast Clinic: Sarà or Sarà Stato?",
    summary: "Tell apart guesses about now (sarà stanco, avrà fame) from guesses about the past (sarà stato stanco, avrà avuto fame).",
    duration: "17 min",
    sections: [
      {
        heading: "Now: sarà, avrà",
        body: [
          "A guess about the present uses the simple future: \"Sarà stanco\" (he's probably tired), \"Avrà fame\" (she must be hungry), \"Saranno in vacanza\" (they're probably on holiday). Look at the evidence in front of you: it's happening now.",
          "English often needs must, probably, I suppose, or I bet. Italian packs the guess into the verb.",
        ],
        examples: [
          { es: "Ha gli occhi rossi: sarà stanco.", en: "His eyes are red: he must be tired." },
          { es: "Il bambino piange: avrà fame.", en: "The baby's crying: he must be hungry." },
          { es: "Il negozio è chiuso: saranno in vacanza.", en: "The shop's closed: they're probably on holiday." },
          { es: "Quanto costerà quella borsa?", en: "How much can that bag cost?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The baby's crying: he must be hungry.", answer: "Il bambino piange: avrà fame.", altAnswers: ["Il bambino piange, avrà fame.", "Il bimbo piange: avrà fame."], explanation: "Guess about now: simple future \"avrà\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shop's closed: [they're probably] on holiday.", sentence: "Il negozio è chiuso: ___ in vacanza.", answer: "saranno", explanation: "Simple future for a present guess." },
        ],
      },
      {
        heading: "Then: sarà stato, avrà avuto",
        body: [
          "A guess about the past uses the future perfect: \"Sarà stato stanco\" (he must have been tired), \"Avrà avuto fame\" (she must have been hungry). The evidence points to something already over: he went to bed early, she ate everything.",
          "The trick is to translate the English back into a plain statement. He must have been tired = he was tired (probably) → \"era stanco\" → \"sarà stato stanco\". She must be hungry = she is hungry (probably) → \"ha fame\" → \"avrà fame\".",
        ],
        examples: [
          { es: "È andato a letto alle nove: sarà stato stanco.", en: "He went to bed at nine: he must have been tired." },
          { es: "Ha mangiato tutto: avrà avuto fame.", en: "She ate everything: she must have been hungry." },
          { es: "Il negozio era chiuso: saranno stati in vacanza.", en: "The shop was closed: they must have been on holiday." },
          { es: "Quanto sarà costata quella borsa?", en: "How much can that bag have cost?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She ate everything: she must have been hungry.", answer: "Ha mangiato tutto: avrà avuto fame.", altAnswers: ["Ha mangiato tutto, avrà avuto fame.", "Lei ha mangiato tutto: avrà avuto fame."], explanation: "Over and done: future perfect \"avrà avuto\"." },
          { type: "multiple-choice", question: "Marco went to bed at nine yesterday. You guess why. Which sentence fits?", options: ["Sarà stato stanco.", "Sarà stanco.", "Sarebbe stanco.", "È stanco."], correctIndex: 0, explanation: "Yesterday is over: future perfect." },
        ],
      },
      {
        heading: "Same verb, two moments",
        body: [
          "Many verbs give tidy pairs: \"sarà a casa\" (he's probably at home) / \"sarà stato a casa\" (he was probably at home); \"lo saprà\" (she probably knows) / \"l'avrà saputo\" (she must have found out). Time words help: \"adesso\", \"ora\" point to the simple future; \"ieri\", \"prima\", \"già\" usually to the future perfect.",
        ],
        examples: [
          { es: "Adesso sarà a casa.", en: "He's probably at home now." },
          { es: "Ieri sera sarà stato a casa.", en: "He was probably at home last night." },
          { es: "Lo saprà già.", en: "She probably knows already." },
          { es: "L'avrà saputo da sua sorella.", en: "She must have found out from her sister." },
          { es: "Quel ristorante sarà caro.", en: "That restaurant is probably expensive." },
          { es: "La cena sarà costata parecchio.", en: "The dinner must have cost quite a lot." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was probably at home last night.", answer: "Ieri sera sarà stato a casa.", altAnswers: ["Sarà stato a casa ieri sera.", "Ieri sera probabilmente era a casa."], explanation: "Past guess: \"sarà stato\"." },
          { type: "listen-choose", audio: "L'avrà saputo da sua sorella.", question: "What does it mean?", options: ["She must have found out from her sister.", "She probably knows her sister.", "She will find out from her sister.", "She would have known from her sister."], correctIndex: 0, explanation: "\"Sapere\" in the passato prossimo means found out; here as a guess." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His eyes are red: he must be tired.", answer: "Ha gli occhi rossi: sarà stanco.", altAnswers: ["Ha gli occhi rossi, sarà stanco."], explanation: "Present evidence, present guess: \"sarà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He went to bed at nine: he must have been tired.", answer: "È andato a letto alle nove: sarà stato stanco.", altAnswers: ["È andato a letto alle nove, sarà stato stanco.", "È andato a dormire alle nove: sarà stato stanco."], explanation: "Past evidence, past guess: \"sarà stato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She probably knows already.", answer: "Lo saprà già.", altAnswers: ["Lo saprà di sicuro.", "Probabilmente lo sa già."], explanation: "Guess about now: \"saprà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How much can that bag have cost?", answer: "Quanto sarà costata quella borsa?", explanation: "\"Costare\" takes \"essere\": \"sarà costata\" agrees with \"la borsa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time can it be? It must be about midnight.", answer: "Che ore saranno? Sarà mezzanotte.", altAnswers: ["Che ora sarà? Sarà mezzanotte.", "Che ore saranno? Sarà circa mezzanotte."], explanation: "\"Mezzanotte\" is singular: \"sarà\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The streets are wet: [it must have rained].", sentence: "Le strade sono bagnate: ___.", answer: "avrà piovuto", altAnswers: ["sarà piovuto"], explanation: "The rain is over: future perfect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's cloudy: [it'll probably rain] later.", sentence: "È nuvoloso: ___ più tardi.", answer: "pioverà", explanation: "A future event, and a guess: simple future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's not at her desk: [she's probably] at lunch.", sentence: "Non è alla scrivania: ___ a pranzo.", answer: "sarà", explanation: "Present guess." },
      { type: "multiple-choice", question: "Which sentence is a guess about the past?", options: ["Avranno avuto ragione.", "Avranno ragione.", "Hanno ragione.", "Avrebbero ragione."], correctIndex: 0, explanation: "\"Avranno avuto\" = they must have been right." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "Sarà malato.", right: "He must be ill." }, { left: "Sarà stato malato.", right: "He must have been ill." }, { left: "Avrà sonno.", right: "She must be sleepy." }, { left: "Avrà dormito poco.", right: "She must have slept badly." }], explanation: "Simple future for now, future perfect for the past." },
      { type: "dictation", audio: "Non è venuto: sarà stato occupato.", explanation: "\"Sarà stato\": a guess about the past." },
      { type: "speak", text: "Adesso sarà in ufficio, ma ieri sarà stato a casa malato.", prompt: "Say it in Italian: Now he's probably at the office, but yesterday he must have been at home ill.", tip: "Make the contrast audible: stress \"adesso\" and \"ieri\".", explanation: "Present guess, then past guess." },
    ],
  },
  {
    slug: "b1-drill-probability-mixed",
    level: "IT-B1",
    number: 6,
    title: "Drill: Guessing Now and Then",
    summary: "High-repetition production of guesses about the present and the past with the future and the future perfect.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Now or then?",
        body: [
          "Turn each English must, probably or I suppose into Italian. Present situation: simple future (\"sarà\", \"avrà\", \"ci saranno\"). Something already over: future perfect (\"sarà stato\", \"avrà fatto\").",
        ],
        examples: [
          { es: "Ci saranno almeno cento persone.", en: "There must be at least a hundred people." },
          { es: "Ci saranno state almeno cento persone.", en: "There must have been at least a hundred people." },
          { es: "Saprà la strada.", en: "He probably knows the way." },
          { es: "Avrà sbagliato strada.", en: "He must have taken the wrong road." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There must have been at least a hundred people.", answer: "Ci saranno state almeno cento persone.", explanation: "\"Esserci\" in the future perfect: \"ci saranno state\", agreeing with \"persone\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have taken the wrong road.", answer: "Avrà sbagliato strada.", altAnswers: ["Lui avrà sbagliato strada.", "Avrà preso la strada sbagliata."], explanation: "\"Sbagliare strada\" = to take the wrong road." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There must be at least a hundred people.", answer: "Ci saranno almeno cento persone.", explanation: "Present guess: \"ci saranno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He probably knows the way.", answer: "Saprà la strada.", altAnswers: ["Lui saprà la strada.", "Conoscerà la strada."], explanation: "\"Saprà\": simple future for now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They must be asleep.", answer: "Staranno dormendo.", altAnswers: ["Dormiranno.", "Saranno addormentati."], explanation: "A guess about something going on now: \"staranno dormendo\" or \"dormiranno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They must have gone to bed.", answer: "Saranno andati a letto.", altAnswers: ["Saranno andate a letto.", "Saranno andati a dormire."], explanation: "Over and done: future perfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You must be tired. (to a friend)", answer: "Sarai stanco.", altAnswers: ["Sarai stanca.", "Sarai stanco morto.", "Sarai stanca morta."], explanation: "Present guess: \"sarai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You must have been tired. (to a friend)", answer: "Sarai stato stanco.", altAnswers: ["Sarai stata stanca."], explanation: "Past guess: \"sarai stato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The parcel must have arrived.", answer: "Il pacco sarà arrivato.", altAnswers: ["Il pacco sarà già arrivato."], explanation: "\"Arrivare\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She must be about thirty.", answer: "Avrà trent'anni.", altAnswers: ["Avrà circa trent'anni.", "Avrà una trentina d'anni."], explanation: "Age with \"avere\", guessed with the future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have read my message.", answer: "Avrà letto il mio messaggio.", altAnswers: ["Lui avrà letto il mio messaggio."], explanation: "\"Avrà letto\": past guess." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who [can that be] at this hour?", sentence: "Chi ___ a quest'ora?", answer: "sarà", explanation: "Present guess in a question: \"chi sarà?\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who [can have called] at this hour?", sentence: "Chi ___ a quest'ora?", answer: "avrà chiamato", altAnswers: ["avrà telefonato"], explanation: "Past guess: \"avrà chiamato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Paolo isn't here: [he must have left] already.", sentence: "Paolo non c'è: ___ già.", answer: "sarà partito", altAnswers: ["sarà andato via", "sarà uscito", "se ne sarà andato"], explanation: "Past guess with \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The phone is off: [the battery must be] flat.", sentence: "Il telefono è spento: ___ scarica.", answer: "la batteria sarà", explanation: "Present state: \"sarà scarica\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The girls [must have had] a great time.", sentence: "Le ragazze ___ un sacco.", answer: "si saranno divertite", explanation: "Reflexive past guess: \"si saranno divertite\"." },
      { type: "multiple-choice", question: "There are muddy footprints on the floor. What do you say?", options: ["Qualcuno sarà entrato con le scarpe sporche.", "Qualcuno entrerà con le scarpe sporche.", "Qualcuno sarebbe entrato con le scarpe sporche.", "Qualcuno sarà entrare con le scarpe sporche."], correctIndex: 0, explanation: "A guess about something already done: \"sarà entrato\"." },
      { type: "listen-choose", audio: "Saranno state le undici.", question: "What does it mean?", options: ["It must have been about eleven.", "It must be about eleven.", "It will be eleven.", "It would have been eleven."], correctIndex: 0, explanation: "\"Saranno state\": a guess about a past time." },
      { type: "dictation", audio: "Avrà dimenticato il portafoglio a casa.", explanation: "Future perfect of probability." },
      { type: "dictation", audio: "Quanti anni avrà adesso?", explanation: "Simple future for a present guess." },
      { type: "speak", text: "Saranno le otto. Marco sarà ancora in ufficio, o sarà già tornato?", prompt: "Say it in Italian: It must be about eight. Is Marco probably still at the office, or has he already come back?", tip: "Let the voice rise on \"tornato?\".", explanation: "Two present guesses and one past guess." },
    ],
  },
  {
    slug: "b1-error-hunt-future-perfect",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Future Perfect",
    summary: "Fix quando ho finito domani, avrò andato and avremmo for avremo, and learn why sarà già uscito ieri is not a mistake.",
    duration: "17 min",
    sections: [
      {
        heading: "Future sequences",
        body: [
          "Each sentence below was written by a learner and has one mistake, or looks wrong and isn't. First: \"Quando ho finito domani, ti chiamerò\". In relaxed speech \"quando ho finito\" is fine, but with \"domani\" and a future main verb it jars. Careful Italian: \"Quando avrò finito domani, ti chiamerò\".",
          "Second: \"Avremmo finito entro venerdì\" means we would have finished. The deadline needs a single m: \"Avremo finito entro venerdì\".",
        ],
        examples: [
          { es: "Quando avrò finito domani, ti chiamerò.", en: "When I've finished tomorrow, I'll call you." },
          { es: "Avremo finito entro venerdì.", en: "We'll have finished by Friday." },
          { es: "Appena avrete deciso, prenoteremo.", en: "As soon as you've decided, we'll book. (plural)" },
          { es: "Dopo che avrà parlato con il medico, ci dirà qualcosa.", en: "After she's spoken to the doctor, she'll tell us something." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Avremmo finito entro venerdì\" about a deadline. Write it correctly: We'll have finished by Friday.", source: "We'll have finished by Friday.", answer: "Avremo finito entro venerdì.", altAnswers: ["Entro venerdì avremo finito.", "Avremo finito per venerdì."], explanation: "Single m for the future: \"avremo\"." },
          { type: "fill-blank", prompt: "A learner wrote \"Quando ho finito domani, ti chiamerò\". Write the Italian for the bold words.", en: "When [I've finished] tomorrow, I'll call you.", sentence: "Quando ___ domani, ti chiamerò.", answer: "avrò finito", explanation: "A future event before another future event: future perfect." },
        ],
      },
      {
        heading: "The auxiliary",
        body: [
          "\"Avrò andato\" borrows English have. \"Andare\" takes \"essere\" in every compound tense: \"sarò andato\". Likewise \"sarà successo\", \"sarà costato\", \"si sarà svegliato\".",
          "With \"essere\" the participle agrees: \"Chiara sarà arrivato\" needs fixing to \"Chiara sarà arrivata\".",
        ],
        examples: [
          { es: "Entro le sei sarò andato via.", en: "By six I'll have left." },
          { es: "Cosa sarà successo?", en: "What can have happened?" },
          { es: "Chiara sarà arrivata a casa.", en: "Chiara must have got home." },
          { es: "Si sarà svegliato tardi.", en: "He must have woken up late." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Cosa avrà successo?\". Write it correctly: What can have happened?", source: "What can have happened?", answer: "Cosa sarà successo?", altAnswers: ["Che cosa sarà successo?", "Che sarà successo?", "Cosa sarà accaduto?"], explanation: "\"Succedere\" takes \"essere\"; \"avere successo\" means to be successful." },
          { type: "fill-blank", prompt: "A learner wrote \"Chiara sarà arrivato\". Write the Italian for the bold words.", en: "Chiara [must have got] home.", sentence: "Chiara ___ a casa.", answer: "sarà arrivata", explanation: "Agreement with \"essere\": \"arrivata\"." },
        ],
      },
      {
        heading: "Not a mistake",
        body: [
          "\"Sarà già uscito ieri\" looks wrong to English eyes: a future with yesterday? But it's correct. The future perfect here is a guess, not a future: he must have already gone out yesterday. Leave it as it is.",
          "Equally fine: \"Sarà stato lui\" (it must have been him), said about something done in the past.",
        ],
        examples: [
          { es: "Sarà già uscito ieri.", en: "He must have already gone out yesterday." },
          { es: "Sarà stato lui.", en: "It must have been him." },
          { es: "L'avranno venduta l'anno scorso.", en: "They must have sold it last year." },
          { es: "Avrà parlato con il direttore la settimana scorsa.", en: "He must have spoken to the manager last week." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "A learner wrote \"Sarà già uscito ieri\" as a guess. What's the verdict?", options: ["Correct: the future perfect expresses a guess about the past.", "Wrong: it should be \"uscirà\".", "Wrong: \"ieri\" can't go with a future.", "Wrong: it should be \"sarebbe uscito\"."], correctIndex: 0, explanation: "With the future perfect of probability, past time words like \"ieri\" are normal." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It must have been him.", answer: "Sarà stato lui.", explanation: "A guess about the past: \"sarà stato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Avrò tornato entro le dieci\". Write it correctly: I'll have come back by ten. (a man speaking)", source: "I'll have come back by ten.", answer: "Sarò tornato entro le dieci.", altAnswers: ["Entro le dieci sarò tornato.", "Sarò rientrato entro le dieci."], explanation: "\"Tornare\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Appena sei arrivato, partiremo\". Write it correctly: As soon as you've arrived, we'll leave.", source: "As soon as you've arrived, we'll leave. (to a friend)", answer: "Appena sarai arrivato, partiremo.", altAnswers: ["Appena sarai arrivata, partiremo.", "Non appena sarai arrivato, partiremo.", "Non appena sarai arrivata, partiremo.", "Appena arrivi, partiamo."], explanation: "The arrival comes first: future perfect for it, future for the leaving." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Sarà stanco ieri\". Write it correctly: He must have been tired yesterday.", source: "He must have been tired yesterday.", answer: "Ieri sarà stato stanco.", altAnswers: ["Sarà stato stanco ieri."], explanation: "A past guess needs the future perfect: \"sarà stato\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Dopo che avremmo mangiato, usciremo\". Write it correctly: After we've eaten, we'll go out.", source: "After we've eaten, we'll go out.", answer: "Dopo che avremo mangiato, usciremo.", altAnswers: ["Dopo che avremo mangiato usciremo.", "Quando avremo mangiato, usciremo."], explanation: "Single m: \"avremo\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Le ragazze si avranno divertite\". Write it correctly: The girls must have had fun.", source: "The girls must have had fun.", answer: "Le ragazze si saranno divertite.", explanation: "Reflexive verbs take \"essere\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Quanto avrà costato?\". Write the Italian for the bold words.", en: "How much [can it have cost]? (the car)", sentence: "La macchina, quanto ___?", answer: "sarà costata", explanation: "\"Costare\" takes \"essere\"; \"costata\" agrees with \"la macchina\"." },
      { type: "fill-blank", prompt: "A learner wrote \"Quando avrai finito, mi chiameresti\". Write the Italian for the bold words.", en: "When you've finished, [will you call me]?", sentence: "Quando avrai finito, ___?", answer: "mi chiamerai", explanation: "Future, not conditional, after a future perfect." },
      { type: "word-order", prompt: "Put the words in order to say: By tomorrow they'll have repaired the car.", words: ["Entro", "domani", "avranno", "riparato", "la", "macchina."], translation: "By tomorrow they'll have repaired the car.", explanation: "\"Avranno riparato\"." },
      { type: "multiple-choice", question: "Which sentence has no mistake?", options: ["Si sarà dimenticato.", "Si avrà dimenticato.", "Sarà dimenticatosi.", "Si sarà dimenticare."], correctIndex: 0, explanation: "Reflexive pronoun first, \"essere\" as the auxiliary." },
      { type: "dictation", audio: "Cosa sarà successo? Non risponde nessuno.", explanation: "\"Sarà successo\": \"succedere\" takes \"essere\"." },
      { type: "speak", text: "Non ti preoccupare: sarà già uscito ieri, o avrà spento il telefono.", prompt: "Say it in Italian: Don't worry: he must have already gone out yesterday, or he must have switched off his phone.", tip: "\"Preoccupare\": double c, pre-oc-cu-PA-re.", explanation: "Two guesses about the past, one with a past time word." },
    ],
  },
  {
    slug: "b1-dialogue-lab-where-is-everyone",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: Where Is Everyone?",
    summary: "At a 9:00 meeting in a Turin office, colleagues guess why the others are late: avrà perso il treno, sarà rimasto bloccato nel traffico.",
    duration: "17 min",
    sections: [
      {
        heading: "Nine o'clock, empty room",
        body: [
          "Monday, 9:05, in a design studio in Turin. Elena and Paolo are the only two people at the weekly meeting. Elena looks at the empty chairs: \"Ma dove sono tutti?\" (where is everyone?).",
          "Paolo starts guessing. Listen for the two kinds of guess: about now (\"sarà in ascensore\", he's probably in the lift) and about what has already happened (\"avrà perso il treno\", she must have missed the train).",
        ],
        examples: [
          { es: "Ma dove sono tutti?", en: "Where is everyone?" },
          { es: "Boh, Marta avrà perso il treno da Chieri.", en: "No idea, Marta must have missed the train from Chieri." },
          { es: "E Stefano? Sarà in ascensore.", en: "And Stefano? He's probably in the lift." },
          { es: "Figurati, sarà rimasto bloccato nel traffico.", en: "As if! He must have got stuck in traffic." },
          { es: "Con questa pioggia, ci sarà una coda infinita.", en: "With this rain, there'll be an endless queue." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marta must have missed the train.", answer: "Marta avrà perso il treno.", altAnswers: ["Probabilmente Marta ha perso il treno."], explanation: "A guess about the past: future perfect \"avrà perso\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [must have got stuck] in traffic.", sentence: "___ bloccato nel traffico.", answer: "Sarà rimasto", altAnswers: ["Sarà restato"], explanation: "\"Rimanere\" takes \"essere\": \"sarà rimasto\"." },
          { type: "listen-choose", audio: "Sarà in ascensore.", question: "What does Paolo think about Stefano?", options: ["He's probably in the lift.", "He will take the lift.", "He was in the lift.", "He would be in the lift."], correctIndex: 0, explanation: "Simple future: a guess about now." },
        ],
      },
      {
        heading: "Messages arrive",
        body: [
          "Elena's phone buzzes. Marta writes: \"Scusate, ho perso il treno, arrivo alle 9:40\". Paolo is pleased with himself: \"Visto? Te l'avevo detto\" (see? I told you).",
          "Then a message from the boss, Dottor Ferrero: \"Riunione spostata alle 10, non avete letto la mail?\". They hadn't. \"L'avrà mandata stamattina presto\" (he must have sent it early this morning), says Paolo, and the others probably read it on the way: \"Per questo non c'è nessuno!\".",
        ],
        examples: [
          { es: "Scusate, ho perso il treno, arrivo alle 9:40.", en: "Sorry, everyone, I missed the train, I'll be there at 9:40." },
          { es: "Visto? Te l'avevo detto.", en: "See? I told you." },
          { es: "Riunione spostata alle 10, non avete letto la mail?", en: "Meeting moved to 10, didn't you read the email?" },
          { es: "L'avrà mandata stamattina presto.", en: "He must have sent it early this morning." },
          { es: "Gli altri l'avranno letta in tram.", en: "The others must have read it on the tram." },
          { es: "Per questo non c'è nessuno!", en: "That's why there's nobody here!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have sent it early this morning. (the email)", answer: "L'avrà mandata stamattina presto.", altAnswers: ["L'avrà inviata stamattina presto.", "La avrà mandata stamattina presto.", "L'avrà mandata questa mattina presto."], explanation: "\"La mail\" is feminine: \"l'avrà mandata\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The others must have read it on the tram.", answer: "Gli altri l'avranno letta in tram.", altAnswers: ["Gli altri l'avranno letta sul tram.", "Gli altri la avranno letta in tram."], explanation: "\"Avranno letta\": agreement with \"la\" (the email)." },
        ],
      },
      {
        heading: "Planning the hour",
        body: [
          "Now they have an hour. Elena plans it with the future perfect: \"Quando arriveranno, avremo già preparato le slide\" (when they arrive, we'll already have prepared the slides). Paolo: \"E appena avremo finito, andiamo a prendere un caffè\".",
          "Notice the relaxed mix: future perfect + present in Paolo's sentence. In speech that's natural.",
        ],
        examples: [
          { es: "Quando arriveranno, avremo già preparato le slide.", en: "When they arrive, we'll already have prepared the slides." },
          { es: "Appena avremo finito, andiamo a prendere un caffè.", en: "As soon as we've finished, let's go for a coffee." },
          { es: "Dai, mettiamoci al lavoro.", en: "Come on, let's get to work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When they arrive, we'll already have prepared the slides.", answer: "Quando arriveranno, avremo già preparato le slide.", altAnswers: ["Quando arrivano, avremo già preparato le slide.", "Quando arriveranno avremo già preparato le slide."], explanation: "Preparing comes first: \"avremo preparato\"." },
          { type: "multiple-choice", question: "Paolo says \"Appena avremo finito, andiamo a prendere un caffè\". What is he doing?", options: ["Suggesting a coffee once they've finished", "Saying they've already had coffee", "Guessing that the others went for coffee", "Regretting they didn't have coffee"], correctIndex: 0, explanation: "Future perfect + \"andiamo\" (let's go): a suggestion." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where is everyone?", answer: "Dove sono tutti?", altAnswers: ["Ma dove sono tutti?"], explanation: "\"Tutti\" (everyone) is plural in Italian: \"sono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "With this rain, there'll be an endless queue.", answer: "Con questa pioggia, ci sarà una coda infinita.", altAnswers: ["Con questa pioggia ci sarà una coda infinita.", "Con questa pioggia, ci sarà una fila infinita."], explanation: "\"Ci sarà\": a guess about now or the near future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See? I told you.", answer: "Visto? Te l'avevo detto.", altAnswers: ["Hai visto? Te l'avevo detto.", "Visto? Te lo avevo detto."], explanation: "\"Te l'avevo detto\": trapassato, I had told you." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's why there's nobody here!", answer: "Per questo non c'è nessuno!", altAnswers: ["Ecco perché non c'è nessuno!"], explanation: "\"Non ... nessuno\": double negative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Stefano must have overslept.", answer: "Stefano si sarà svegliato tardi.", altAnswers: ["Stefano non si sarà svegliato.", "Stefano avrà dormito troppo."], explanation: "Reflexive past guess: \"si sarà svegliato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The boss [must have changed] the time.", sentence: "Il capo ___ l'orario.", answer: "avrà cambiato", explanation: "A guess about the past: \"avrà cambiato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They must have read] the email.", sentence: "___ la mail.", answer: "Avranno letto", explanation: "Future perfect of probability." },
      { type: "word-order", prompt: "Put the words in order to say: As soon as we've finished, let's go for a coffee.", words: ["Appena", "avremo", "finito,", "andiamo", "a", "prendere", "un", "caffè."], translation: "As soon as we've finished, let's go for a coffee.", explanation: "Future perfect + \"andiamo\" in relaxed speech." },
      { type: "multiple-choice", question: "Marta isn't answering her phone at 9:10. What's the natural guess?", options: ["Sarà in metropolitana.", "Era in metropolitana.", "Sarebbe in metropolitana.", "È stata in metropolitana."], correctIndex: 0, explanation: "A guess about now: simple future." },
      { type: "dictation", audio: "Avrà perso il treno, come sempre.", explanation: "\"Avrà perso\": a confident guess." },
      { type: "speak", text: "Non c'è nessuno: Marta avrà perso il treno e Stefano sarà rimasto bloccato nel traffico.", prompt: "Say it in Italian: There's nobody here: Marta must have missed the train and Stefano must have got stuck in traffic.", tip: "\"Traffico\": stress on the first syllable, TRAF-fi-co.", explanation: "Two guesses about the past." },
    ],
  },
  {
    slug: "b1-reading-lab-detective",
    level: "IT-B1",
    number: 9,
    title: "Reading Lab: A Small Mystery",
    summary: "Read a short detective scene set in a Bologna bookshop and pick out the guesses in the future and future perfect.",
    duration: "18 min",
    sections: [
      {
        heading: "The missing book",
        body: [
          "Read this original short scene. Commissario Rinaldi is called to a small antiquarian bookshop in Bologna: a rare first edition has disappeared from a locked case. The owner, the signora Gatti, is upset.",
          "Italian detective stories are full of future perfects: the detective thinks aloud, and every guess about what happened takes that tense. Read each line, then check the English.",
        ],
        examples: [
          { es: "La vetrina era chiusa a chiave, ma il libro non c'era più.", en: "The case was locked, but the book was gone." },
          { es: "\"Chi avrà avuto la chiave?\" chiese il commissario.", en: "\"Who can have had the key?\" asked the inspector." },
          { es: "\"Solo io e il mio assistente\", rispose la signora Gatti.", en: "\"Only me and my assistant,\" Mrs Gatti answered." },
          { es: "\"E dov'è adesso il suo assistente?\" \"Sarà a pranzo.\"", en: "\"And where's your assistant now?\" \"He's probably at lunch.\"" },
          { es: "Rinaldi guardò il pavimento: c'era un po' di polvere bianca.", en: "Rinaldi looked at the floor: there was a little white dust." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who can have had the key?", answer: "Chi avrà avuto la chiave?", explanation: "A question about the past you can't answer for sure: future perfect." },
          { type: "multiple-choice", question: "\"Sarà a pranzo\" tells us that ...", options: ["the owner guesses the assistant is at lunch now", "the assistant will go to lunch later", "the assistant was at lunch yesterday", "the owner knows the assistant is at lunch"], correctIndex: 0, explanation: "Simple future = a guess about now." },
        ],
      },
      {
        heading: "The inspector thinks aloud",
        body: [
          "The dust is the clue. Rinaldi notices it near the wall, under a small window. Read his reasoning and spot the guesses.",
          "\"Chiese\" (asked), \"rispose\" (answered) and \"guardò\" (looked) are in the passato remoto, the past of written stories, which you'll meet properly in a later unit.",
        ],
        examples: [
          { es: "\"Il ladro sarà entrato dalla finestra\", disse Rinaldi.", en: "\"The thief must have come in through the window,\" said Rinaldi." },
          { es: "\"Avrà tolto il vetro e avrà aperto la vetrina dall'interno.\"", en: "\"He must have removed the glass and opened the case from the inside.\"" },
          { es: "\"Ma la finestra è piccolissima!\" \"Appunto: sarà stato un ragazzo, o qualcuno molto magro.\"", en: "\"But the window is tiny!\" \"Exactly: it must have been a boy, or someone very thin.\"" },
          { es: "\"E la polvere?\" \"Sarà gesso. Avrà toccato il muro.\"", en: "\"And the dust?\" \"It's probably plaster. He must have touched the wall.\"" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The thief must have come in through the window.", answer: "Il ladro sarà entrato dalla finestra.", altAnswers: ["Il ladro sarà entrato attraverso la finestra.", "Il ladro sarà passato dalla finestra."], explanation: "\"Entrare\" takes \"essere\": \"sarà entrato\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Exactly: [it must have been] a boy.", sentence: "Appunto: ___ un ragazzo.", answer: "sarà stato", explanation: "A guess about the past with \"essere\": \"sarà stato\"." },
        ],
      },
      {
        heading: "The solution",
        body: [
          "At that moment the assistant, Luca, comes back with a parcel under his arm. He's young and very thin, and there's white plaster on his sleeve. Rinaldi smiles: \"Lei avrà fatto una passeggiata interessante\" (you must have had an interesting walk).",
          "Luca goes pale. The book is in the parcel: he wanted to sell it to a collector in Milan.",
        ],
        examples: [
          { es: "In quel momento tornò Luca, con un pacco sotto il braccio.", en: "At that moment Luca came back, with a parcel under his arm." },
          { es: "Aveva una manica sporca di gesso.", en: "One of his sleeves was covered in plaster." },
          { es: "\"Lei avrà fatto una passeggiata interessante\", sorrise Rinaldi.", en: "\"You must have had an interesting walk,\" Rinaldi smiled." },
          { es: "Il libro era nel pacco.", en: "The book was in the parcel." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You must have had an interesting walk. (polite)", answer: "Lei avrà fatto una passeggiata interessante.", altAnswers: ["Avrà fatto una passeggiata interessante."], explanation: "\"Fare una passeggiata\"; a guess with the future perfect, polite \"Lei\"." },
          { type: "listen-choose", audio: "Aveva una manica sporca di gesso.", question: "What gives Luca away?", options: ["Plaster on his sleeve", "A key in his pocket", "A torn parcel", "Dust on his shoes"], correctIndex: 0, explanation: "\"Una manica sporca di gesso\" = a sleeve dirty with plaster." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have removed the glass.", answer: "Avrà tolto il vetro.", altAnswers: ["Lui avrà tolto il vetro.", "Avrà rimosso il vetro."], explanation: "\"Togliere\" → \"tolto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's probably plaster.", answer: "Sarà gesso.", altAnswers: ["Probabilmente è gesso."], explanation: "Guess about now: simple future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have touched the wall.", answer: "Avrà toccato il muro.", altAnswers: ["Lui avrà toccato il muro.", "Avrà toccato la parete."], explanation: "\"Avrà toccato\": past guess." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The case was locked, but the book was gone.", answer: "La vetrina era chiusa a chiave, ma il libro non c'era più.", explanation: "\"Non c'era più\" = it wasn't there any more." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The thief [must have opened] the case from the inside.", sentence: "Il ladro ___ la vetrina dall'interno.", answer: "avrà aperto", explanation: "\"Aprire\" → \"aperto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The assistant [must have sold] the book to a collector.", sentence: "L'assistente ___ il libro a un collezionista.", answer: "avrà venduto", explanation: "A guess about a past action." },
      { type: "word-order", prompt: "Put the words in order to say: It must have been someone very thin.", words: ["Sarà", "stato", "qualcuno", "molto", "magro."], translation: "It must have been someone very thin.", explanation: "\"Sarà stato\" + subject." },
      { type: "multiple-choice", question: "Why does Rinaldi think the thief was thin?", options: ["The window is very small.", "The case was locked.", "The dust was white.", "The book was light."], correctIndex: 0, explanation: "\"La finestra è piccolissima\"." },
      { type: "multi-select", question: "Which sentences from the story are guesses? Choose all that apply.", options: ["Il ladro sarà entrato dalla finestra.", "Il libro era nel pacco.", "Sarà a pranzo.", "Avrà toccato il muro.", "Rinaldi guardò il pavimento."], correctIndexes: [0, 2, 3], explanation: "The future and future perfect mark the guesses; the other two are narrated facts." },
      { type: "dictation", audio: "Chi avrà avuto la chiave?", explanation: "Future perfect in a question." },
      { type: "speak", text: "Il ladro sarà entrato dalla finestra e avrà aperto la vetrina dall'interno.", prompt: "Retell Rinaldi's theory: The thief must have come in through the window and opened the case from the inside.", tip: "\"Vetrina\": stress on TRI, ve-TRI-na.", explanation: "Two past guesses: \"sarà entrato\", \"avrà aperto\"." },
    ],
  },
  {
    slug: "b1-mission-project-plan",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: Project Timeline",
    summary: "Write a project plan for your team with deadlines in the future perfect: entro venerdì avremo finito la prima parte.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "The deadlines",
        body: [
          "Your mission: your team in Milan is organising a three-day food festival, and you must send a timeline to the client. Each step has a deadline: \"Entro venerdì avremo finito la prima parte\" (by Friday we'll have finished the first part).",
          "Use \"entro\" + date for by, and the future perfect for what will be complete: \"Entro il 15 marzo avremo prenotato la location\", \"Entro fine mese avremo contattato tutti i fornitori\" (suppliers).",
        ],
        examples: [
          { es: "Entro venerdì avremo finito la prima parte.", en: "By Friday we'll have finished the first part." },
          { es: "Entro il 15 marzo avremo prenotato la location.", en: "By 15 March we'll have booked the venue." },
          { es: "Entro fine mese avremo contattato tutti i fornitori.", en: "By the end of the month we'll have contacted all the suppliers." },
          { es: "Per aprile il grafico avrà preparato i manifesti.", en: "By April the designer will have prepared the posters." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By 15 March we'll have booked the venue.", answer: "Entro il 15 marzo avremo prenotato la location.", altAnswers: ["Entro il 15 marzo avremo prenotato il locale.", "Per il 15 marzo avremo prenotato la location."], explanation: "Dates: \"il 15 marzo\", lower-case month; \"avremo prenotato\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By the end of the month [we'll have contacted] all the suppliers.", sentence: "Entro fine mese ___ tutti i fornitori.", answer: "avremo contattato", altAnswers: ["noi avremo contattato"], explanation: "Single m: \"avremo\"." },
        ],
      },
      {
        heading: "The sequence",
        body: [
          "Next, link steps that depend on each other: \"Appena avremo ricevuto il preventivo, firmeremo il contratto\" (as soon as we've received the quote, we'll sign the contract). \"Solo dopo che il Comune avrà dato il permesso, potremo montare gli stand\" (only after the council has given permission can we set up the stalls).",
          "In a written plan, keep the careful form: future perfect + future.",
        ],
        examples: [
          { es: "Appena avremo ricevuto il preventivo, firmeremo il contratto.", en: "As soon as we've received the quote, we'll sign the contract." },
          { es: "Solo dopo che il Comune avrà dato il permesso, potremo montare gli stand.", en: "Only after the council has given permission can we set up the stalls." },
          { es: "Quando i fornitori avranno confermato, vi manderemo il menù.", en: "When the suppliers have confirmed, we'll send you the menu." },
          { es: "Una volta che avremo venduto cento biglietti, apriremo la seconda giornata.", en: "Once we've sold a hundred tickets, we'll open the second day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as we've received the quote, we'll sign the contract.", answer: "Appena avremo ricevuto il preventivo, firmeremo il contratto.", altAnswers: ["Non appena avremo ricevuto il preventivo, firmeremo il contratto.", "Quando avremo ricevuto il preventivo, firmeremo il contratto."], explanation: "Future perfect + future in a written plan." },
          { type: "listen-choose", audio: "Quando i fornitori avranno confermato, vi manderemo il menù.", question: "When will the client get the menu?", options: ["After the suppliers have confirmed", "Before the suppliers confirm", "Today", "After the festival"], correctIndex: 0, explanation: "\"Quando ... avranno confermato\": after confirmation." },
        ],
      },
      {
        heading: "Risks and guesses",
        body: [
          "End with a realistic note. Explain a delay with a guess: \"Il fornitore non ha ancora risposto: sarà in ferie\" (the supplier hasn't answered yet: he's probably on holiday), \"avrà ricevuto troppe richieste\" (he must have had too many requests).",
          "Close formally: \"Restiamo a disposizione per qualsiasi domanda\" (we remain available for any questions).",
        ],
        examples: [
          { es: "Il fornitore non ha ancora risposto: sarà in ferie.", en: "The supplier hasn't answered yet: he's probably on holiday." },
          { es: "Avrà ricevuto troppe richieste.", en: "He must have had too many requests." },
          { es: "Entro il 20 avrà sicuramente risposto.", en: "He'll surely have answered by the 20th." },
          { es: "Restiamo a disposizione per qualsiasi domanda.", en: "We remain available for any questions." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The supplier hasn't answered yet: he's probably on holiday.", answer: "Il fornitore non ha ancora risposto: sarà in ferie.", altAnswers: ["Il fornitore non ha ancora risposto, sarà in ferie.", "Il fornitore non ha ancora risposto: sarà in vacanza."], explanation: "Present guess: \"sarà in ferie\"." },
          { type: "multiple-choice", question: "Which closing fits a timeline sent to a client?", options: ["Restiamo a disposizione per qualsiasi domanda.", "Ci vediamo, ciao!", "Un abbraccio forte.", "Boh, vedremo."], correctIndex: 0, explanation: "A standard formal closing." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By Friday we'll have finished the first part.", answer: "Entro venerdì avremo finito la prima parte.", altAnswers: ["Per venerdì avremo finito la prima parte.", "Avremo finito la prima parte entro venerdì."], explanation: "\"Entro\" + future perfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By April the designer will have prepared the posters.", answer: "Per aprile il grafico avrà preparato i manifesti.", altAnswers: ["Entro aprile il grafico avrà preparato i manifesti.", "Entro aprile la grafica avrà preparato i manifesti."], explanation: "\"Il grafico\" = graphic designer." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When the suppliers have confirmed, we'll send you the menu. (plural you)", answer: "Quando i fornitori avranno confermato, vi manderemo il menù.", altAnswers: ["Quando i fornitori avranno confermato, vi invieremo il menù.", "Appena i fornitori avranno confermato, vi manderemo il menù."], explanation: "\"Avranno confermato\" comes first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have had too many requests.", answer: "Avrà ricevuto troppe richieste.", altAnswers: ["Avrà avuto troppe richieste."], explanation: "Past guess: future perfect." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By 30 June the festival will have ended.", answer: "Entro il 30 giugno il festival sarà finito.", altAnswers: ["Per il 30 giugno il festival sarà finito.", "Entro il 30 giugno il festival sarà terminato."], explanation: "\"Finire\" meaning to end takes \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Only after the council [has given] permission can we set up the stalls.", sentence: "Solo dopo che il Comune ___ il permesso, potremo montare gli stand.", answer: "avrà dato", explanation: "\"Dare\" → \"dato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Once [we've sold] a hundred tickets, we'll open the second day.", sentence: "Una volta che ___ cento biglietti, apriremo la seconda giornata.", answer: "avremo venduto", explanation: "Single m: \"avremo\"." },
      { type: "word-order", prompt: "Put the words in order to say: We remain available for any questions.", words: ["Restiamo", "a", "disposizione", "per", "qualsiasi", "domanda."], translation: "We remain available for any questions.", explanation: "\"Qualsiasi\" takes a singular noun." },
      { type: "multiple-choice", question: "Which sentence fits a written timeline?", options: ["Entro il 10 maggio avremo scelto il menù.", "Entro il 10 maggio avremmo scelto il menù.", "Entro il 10 maggio abbiamo scelto il menù.", "Entro il 10 maggio sceglieremmo il menù."], correctIndex: 0, explanation: "A deadline: future perfect, single m." },
      { type: "dictation", audio: "Entro la fine di aprile avremo montato gli stand.", explanation: "\"Avremo montato\": complete by the deadline." },
      { type: "speak", text: "Entro venerdì avremo finito la prima parte e, appena avremo ricevuto il preventivo, firmeremo il contratto.", prompt: "Present the plan: By Friday we'll have finished the first part and, as soon as we've received the quote, we'll sign the contract.", tip: "\"Preventivo\": pre-ven-TI-vo, stress on TI.", explanation: "A deadline and a sequence." },
    ],
  },
];

export const IT_B1_U14_WRITING: WriteExercise = {
  type: "write",
  prompt: "You're organising a surprise party for your friend Giorgio's fortieth birthday with three other friends. Write a message to the group: say what will have been done by certain dates, what will happen when each step is finished, and guess why one friend, Silvia, hasn't answered yet.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Gives at least two deadlines with entro / per + the futuro anteriore (entro sabato avremo prenotato ...)",
    "Links two future steps with quando / appena / dopo che + futuro anteriore and a future or imperative in the main clause",
    "Makes at least one guess about the past with the futuro anteriore (avrà perso il telefono) and one about now with the simple future (sarà in viaggio)",
    "Chooses essere or avere correctly, with agreement, and spells avremo with a single m",
  ],
  modelAnswer: "Ciao a tutti! Ecco il piano per la festa di Giorgio. Entro sabato avremo prenotato la sala del circolo e Luca avrà ordinato la torta. Per mercoledì prossimo io avrò mandato gli inviti a tutti i colleghi. Appena avremo ricevuto le risposte, sapremo quante persone vengono e potremo comprare da bere. Quando la sala sarà pronta, l'addobberemo insieme venerdì sera. Silvia invece non ha ancora risposto: avrà perso il telefono un'altra volta, oppure sarà in viaggio per lavoro. Le scrivo stasera. Mi raccomando: acqua in bocca con Giorgio! Un abbraccio, Anna",
  explanation: "\"Avremo prenotato\", \"avrà ordinato\" and \"avrò mandato\" are deadlines in the future perfect. \"Appena avremo ricevuto\" and \"Quando la sala sarà pronta\" put two future steps in order. \"Avrà perso il telefono\" guesses about the past, \"sarà in viaggio\" about now. \"Acqua in bocca\" means keep it secret.",
};
