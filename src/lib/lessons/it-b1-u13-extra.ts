// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u13-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 13 Extra Practice: The Past Conditional. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U13_EXTRA: Lesson[] = [
  {
    slug: "b1-past-conditional-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Regrets",
    summary: "Fresh sentences about missed chances and regrets with the past conditional.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Would have, but ...",
        body: [
          "Past conditional for what didn't happen, then \"ma\" and the reason in the imperfetto or passato prossimo. \"Avrei voluto\" and \"mi sarebbe piaciuto\" + infinitive are the classic regrets.",
        ],
        examples: [
          { es: "Avrei comprato quella casa, ma costava troppo.", en: "I would have bought that house, but it cost too much." },
          { es: "Saremmo andati in Puglia, ma c'era lo sciopero dei treni.", en: "We would have gone to Puglia, but there was a train strike." },
          { es: "Mi sarebbe piaciuto conoscere tuo nonno.", en: "I would have liked to meet your grandfather." },
          { es: "Avrei voluto dirle la verità.", en: "I would have liked to tell her the truth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I would have bought that house, but it cost too much.", answer: "Avrei comprato quella casa, ma costava troppo.", altAnswers: ["Io avrei comprato quella casa, ma costava troppo."], explanation: "\"Costava\": background reason in the imperfetto." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I would have liked to meet your grandfather. (to a friend)", answer: "Mi sarebbe piaciuto conoscere tuo nonno.", altAnswers: ["Avrei voluto conoscere tuo nonno."], explanation: "\"Conoscere\" = to meet for the first time; \"tuo nonno\" with no article." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We would have gone to Puglia, but there was a train strike.", answer: "Saremmo andati in Puglia, ma c'era lo sciopero dei treni.", altAnswers: ["Saremmo andate in Puglia, ma c'era lo sciopero dei treni.", "Saremmo andati in Puglia, ma c'era uno sciopero dei treni."], explanation: "\"Andare\" with \"essere\"; \"in\" + region." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I would have liked to tell her the truth.", answer: "Avrei voluto dirle la verità.", altAnswers: ["Le avrei voluto dire la verità.", "Mi sarebbe piaciuto dirle la verità."], explanation: "\"Le\" (to her) attaches to \"dire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He would have accepted the job, but the salary was low.", answer: "Avrebbe accettato il lavoro, ma lo stipendio era basso.", altAnswers: ["Avrebbe accettato il posto, ma lo stipendio era basso.", "Lui avrebbe accettato il lavoro, ma lo stipendio era basso."], explanation: "\"Lo stipendio\" = the salary." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They would have stayed until Sunday.", answer: "Sarebbero rimasti fino a domenica.", altAnswers: ["Sarebbero rimaste fino a domenica.", "Sarebbero restati fino a domenica.", "Loro sarebbero rimasti fino a domenica."], explanation: "\"Rimanere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd have preferred a quieter hotel.", answer: "Avrei preferito un albergo più tranquillo.", altAnswers: ["Avrei preferito un hotel più tranquillo."], explanation: "\"Avrei preferito\" + noun: a polite complaint." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She would have liked the concert.", answer: "Le sarebbe piaciuto il concerto.", altAnswers: ["A lei sarebbe piaciuto il concerto."], explanation: "\"Le\" = to her; \"piaciuto\" agrees with \"il concerto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We would have had dinner together, but you had already left. (plural)", answer: "Avremmo cenato insieme, ma eravate già partiti.", altAnswers: ["Avremmo cenato insieme, ma eravate già partite.", "Avremmo cenato insieme, ma voi eravate già partiti."], explanation: "Trapassato for the earlier event: \"eravate già partiti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I would have written] to you, but I'd lost your address. (to a friend)", sentence: "___, ma avevo perso il tuo indirizzo.", answer: "Ti avrei scritto", altAnswers: ["Io ti avrei scritto"], explanation: "\"Ti\" before the auxiliary; \"scritto\" is irregular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It would have been nice] to see the sea.", sentence: "___ vedere il mare.", answer: "Sarebbe stato bello", explanation: "\"Sarebbe stato bello\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [would have liked] the cakes.", sentence: "Ai bambini ___ i dolci.", answer: "sarebbero piaciuti", explanation: "Plural subject \"i dolci\": \"sarebbero piaciuti\"." },
      { type: "word-order", prompt: "Put the words in order to say: I would have liked to be there.", words: ["Mi", "sarebbe", "piaciuto", "esserci."], translation: "I would have liked to be there.", explanation: "\"Esserci\" = to be there." },
      { type: "multiple-choice", question: "Which sentence says clearly that you wanted to come and didn't?", options: ["Avrei voluto venire.", "Volevo venire.", "Vorrei venire.", "Verrò."], correctIndex: 0, explanation: "Only the past conditional shows the wish wasn't fulfilled; \"volevo\" just reports it." },
      { type: "listen-choose", audio: "Avremmo vinto, ma l'arbitro ha annullato il gol.", question: "What happened?", options: ["They would have won, but the referee disallowed the goal.", "They won after the referee allowed the goal.", "They will win if the referee allows the goal.", "They lost because they didn't score."], correctIndex: 0, explanation: "\"Avremmo vinto\" (would have won), \"ha annullato\" (disallowed)." },
      { type: "dictation", audio: "Sarebbe stato meglio restare a casa.", explanation: "\"Sarebbe stato meglio\" + infinitive." },
      { type: "speak", text: "Avrei voluto studiare all'estero, ma non avevo abbastanza soldi.", prompt: "Say it in Italian: I would have liked to study abroad, but I didn't have enough money.", tip: "\"Abbastanza\": double b, stress on STAN.", explanation: "Regret + reason in the imperfetto." },
    ],
  },
  {
    slug: "b1-past-conditional-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Should Have",
    summary: "Fresh sentences with avrei dovuto, avresti potuto and sarebbe dovuto.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Dovuto, potuto",
        body: [
          "Should have = past conditional of \"dovere\"; could have = past conditional of \"potere\"; no \"di\" before the infinitive. With verbs that take \"essere\" careful Italian says \"sarei dovuto partire\", and in speech \"dovevi\" and \"potevi\" are common.",
        ],
        examples: [
          { es: "Avrei dovuto portare l'ombrello.", en: "I should have brought my umbrella." },
          { es: "Avresti potuto avvisarmi.", en: "You could have warned me." },
          { es: "Sarebbero dovuti arrivare alle sei.", en: "They should have arrived at six." },
          { es: "Non avremmo dovuto mangiare così tanto.", en: "We shouldn't have eaten so much." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I should have brought my umbrella.", answer: "Avrei dovuto portare l'ombrello.", altAnswers: ["Avrei dovuto prendere l'ombrello.", "Dovevo portare l'ombrello."], explanation: "Italian uses the article for your own things: \"l'ombrello\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We shouldn't have eaten so much.", answer: "Non avremmo dovuto mangiare così tanto.", altAnswers: ["Non avremmo dovuto mangiare tanto.", "Non dovevamo mangiare così tanto."], explanation: "\"Non\" before the auxiliary." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You could have warned me. (to a friend)", answer: "Avresti potuto avvisarmi.", altAnswers: ["Mi avresti potuto avvisare.", "Potevi avvisarmi."], explanation: "\"Avresti potuto\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They should have arrived at six.", answer: "Sarebbero dovuti arrivare alle sei.", altAnswers: ["Avrebbero dovuto arrivare alle sei.", "Sarebbero dovute arrivare alle sei."], explanation: "\"Arrivare\" takes \"essere\": \"sarebbero dovuti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should have asked the doctor. (polite)", answer: "Avrebbe dovuto chiedere al medico.", altAnswers: ["Lei avrebbe dovuto chiedere al medico.", "Avrebbe dovuto chiedere al dottore."], explanation: "\"Lei\" takes the third person: \"avrebbe dovuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I could have done better.", answer: "Avrei potuto fare meglio.", altAnswers: ["Potevo fare meglio.", "Io avrei potuto fare meglio."], explanation: "\"Meglio\" = better (adverb)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You shouldn't have said that. (to a friend)", answer: "Non avresti dovuto dirlo.", altAnswers: ["Non l'avresti dovuto dire.", "Non lo avresti dovuto dire.", "Non dovevi dirlo.", "Non avresti dovuto dire quello."], explanation: "\"Lo\" attaches to \"dire\" or goes before \"avresti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She could have stayed with us.", answer: "Sarebbe potuta restare da noi.", altAnswers: ["Avrebbe potuto restare da noi.", "Sarebbe potuta rimanere da noi.", "Avrebbe potuto rimanere da noi", "Poteva restare da noi."], explanation: "\"Restare\" takes \"essere\": \"sarebbe potuta\"; \"da noi\" = at our place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We should have taken the motorway.", answer: "Avremmo dovuto prendere l'autostrada.", altAnswers: ["Dovevamo prendere l'autostrada."], explanation: "\"Avremmo dovuto\": double m." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You should have checked] the timetable. (plural)", sentence: "___ l'orario.", answer: "Avreste dovuto controllare", altAnswers: ["Voi avreste dovuto controllare", "Dovevate controllare"], explanation: "\"Avreste\" for \"voi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [should have got up] earlier.", sentence: "Luca ___ prima.", answer: "si sarebbe dovuto alzare", altAnswers: ["avrebbe dovuto alzarsi", "sarebbe dovuto alzarsi"], explanation: "With a reflexive verb: \"si sarebbe dovuto alzare\" or \"avrebbe dovuto alzarsi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I could have helped you], why didn't you call? (to a friend)", sentence: "___, perché non hai chiamato?", answer: "Avrei potuto aiutarti", altAnswers: ["Ti avrei potuto aiutare", "Potevo aiutarti"], explanation: "Could have = \"avrei potuto\"." },
      { type: "word-order", prompt: "Put the words in order to say: You should have told me before.", words: ["Me", "l'avresti", "dovuto", "dire", "prima."], translation: "You should have told me before.", explanation: "Pronouns before the auxiliary." },
      { type: "multiple-choice", question: "A friend arrives soaked. You say: you should have taken the umbrella! Which is right?", options: ["Avresti dovuto prendere l'ombrello!", "Dovresti prendere l'ombrello!", "Avresti dovuto di prendere l'ombrello!", "Avrai dovuto prendere l'ombrello!"], correctIndex: 0, explanation: "The chance is past: \"avresti dovuto\", no \"di\"." },
      { type: "listen-choose", audio: "Potevi dirmelo prima!", question: "What does it mean?", options: ["You could have told me before!", "Can you tell me before?", "You told me before.", "You'll be able to tell me before."], correctIndex: 0, explanation: "Spoken \"potevi\" = \"avresti potuto\"." },
      { type: "dictation", audio: "Avremmo dovuto prenotare il ristorante.", explanation: "Double m: \"avremmo\"." },
      { type: "speak", text: "Non avresti dovuto aspettarmi: avresti potuto cominciare a mangiare.", prompt: "Say it in Italian: You shouldn't have waited for me: you could have started eating.", tip: "\"Cominciare\": the c before i is soft, co-min-CIA-re.", explanation: "\"Avresti dovuto\" and \"avresti potuto\" side by side." },
    ],
  },
  {
    slug: "b1-past-conditional-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Reported Promises",
    summary: "Fresh sentences reporting promises, plans and predictions with the future in the past.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Said, thought, knew + would",
        body: [
          "After a past verb of saying, promising, thinking or knowing, the later event goes in the past conditional: \"Ha promesso che sarebbe tornato\", \"Pensavo che avresti chiamato\". Never the present conditional.",
        ],
        examples: [
          { es: "Il tecnico ha detto che sarebbe passato in mattinata.", en: "The technician said he would drop by in the morning." },
          { es: "Pensavo che avresti chiamato.", en: "I thought you would call." },
          { es: "Ci avevano assicurato che la camera sarebbe stata pronta.", en: "They had assured us that the room would be ready." },
          { es: "Nessuno immaginava che avrebbe vinto lei.", en: "Nobody imagined she would win." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought you would call. (to a friend)", answer: "Pensavo che avresti chiamato.", altAnswers: ["Credevo che avresti chiamato.", "Pensavo che avresti telefonato."], explanation: "Not \"chiameresti\": past conditional after a past trigger." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody imagined she would win.", answer: "Nessuno immaginava che avrebbe vinto lei.", altAnswers: ["Nessuno immaginava che lei avrebbe vinto."], explanation: "\"Lei\" at the end stresses she, of all people." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The technician said he would drop by in the morning.", answer: "Il tecnico ha detto che sarebbe passato in mattinata.", altAnswers: ["Il tecnico ha detto che sarebbe passato di mattina.", "Il tecnico ha detto che sarebbe passato la mattina."], explanation: "\"Passare\" (drop by) takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They had assured us that the room would be ready.", answer: "Ci avevano assicurato che la camera sarebbe stata pronta.", altAnswers: ["Ci avevano garantito che la camera sarebbe stata pronta."], explanation: "\"Sarebbe stata\": agrees with \"la camera\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My brother said he would lend me the car.", answer: "Mio fratello ha detto che mi avrebbe prestato la macchina.", altAnswers: ["Mio fratello ha detto che mi avrebbe prestato l'auto.", "Mio fratello mi ha detto che mi avrebbe prestato la macchina."], explanation: "\"Mio fratello\": no article with a singular relative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We knew it would be difficult.", answer: "Sapevamo che sarebbe stato difficile.", altAnswers: ["Lo sapevamo che sarebbe stato difficile."], explanation: "\"Sarebbe stato\" for it would be." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You promised you would do the shopping. (to a friend)", answer: "Hai promesso che avresti fatto la spesa.", altAnswers: ["Avevi promesso che avresti fatto la spesa.", "Mi hai promesso che avresti fatto la spesa."], explanation: "\"Fare la spesa\" = to do the food shopping." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was sure the shops would be closed.", answer: "Ero sicuro che i negozi sarebbero stati chiusi.", altAnswers: ["Ero sicura che i negozi sarebbero stati chiusi."], explanation: "\"Essere sicuro che\" takes the indicative, so the later event is in the past conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher said that the exam would be in June.", answer: "La professoressa ha detto che l'esame sarebbe stato a giugno.", altAnswers: ["Il professore ha detto che l'esame sarebbe stato a giugno.", "L'insegnante ha detto che l'esame sarebbe stato a giugno."], explanation: "Months are lower case: \"a giugno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Chiara said [she would get married] in May.", sentence: "Chiara ha detto che ___ a maggio.", answer: "si sarebbe sposata", explanation: "Reflexive \"sposarsi\": \"si sarebbe sposata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The forecast said [it would be] sunny.", sentence: "Le previsioni dicevano che ___ bel tempo.", answer: "avrebbe fatto", explanation: "Weather with \"fare\": \"avrebbe fatto bel tempo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I didn't think [you would like it]. (to a friend, about the book)", sentence: "Non pensavo che il libro ___.", answer: "ti sarebbe piaciuto", explanation: "\"Piacere\" with \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: They told me they would come back soon.", words: ["Mi", "hanno", "detto", "che", "sarebbero", "tornati", "presto."], translation: "They told me they would come back soon.", explanation: "Past conditional with \"essere\" and plural agreement." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Credevo che il treno sarebbe partito in orario.", "Credevo che il treno partirebbe in orario.", "Credevo che il treno sarà partito in orario.", "Credevo che il treno avrebbe partito in orario."], correctIndex: 0, explanation: "Future in the past: \"sarebbe partito\", with \"essere\"." },
      { type: "listen-choose", audio: "Mi aveva giurato che non sarebbe più successo.", question: "What does it mean?", options: ["He had sworn to me it wouldn't happen again.", "He swears it won't happen again.", "It would never have happened.", "He swore it had never happened."], correctIndex: 0, explanation: "Trapassato + past conditional: had sworn it wouldn't happen." },
      { type: "dictation", audio: "Ha scritto che sarebbe arrivata venerdì.", explanation: "\"Sarebbe arrivata\": feminine, future from the past." },
      { type: "speak", text: "Mi avevi promesso che saresti venuto a prendermi alla stazione!", prompt: "Say it in Italian, to a male friend: You had promised me you would come and pick me up at the station!", tip: "\"Prendermi\": keep the r rolled, PREN-der-mi.", explanation: "Trapassato for the promise, past conditional for the pick-up." },
    ],
  },
];
