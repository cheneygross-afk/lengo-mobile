// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u03-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 3 Extra Practice: Literary and Formal Syntax. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U03_EXTRA: Lesson[] = [
  {
    slug: "c1-formal-syntax-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Inversion and Infinitives",
    summary: "Fresh sentences with the subject after the verb and with infinitives used as nouns.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "News and essays",
        body: [
          "Inversion: new subject last (\"È scoppiato un incendio\"), verb before subject after quotes and in news openings. Nominal infinitive: \"il\" / \"lo\" / \"l'\" + infinitive, with possessives, adjectives and attached pronouns (\"il suo continuo interrompersi\").",
        ],
        examples: [
          { es: "È scoppiato un incendio nel porto di Genova.", en: "A fire has broken out in the port of Genoa." },
          { es: "«Faremo il possibile», ha assicurato l'assessore.", en: "\"We'll do everything we can\", the councilor promised." },
          { es: "Il fumare nei locali pubblici è vietato da anni.", en: "Smoking in public places has been banned for years." },
          { es: "Il suo continuo interrompersi rendeva il discorso difficile da seguire.", en: "His constant breaking off made the speech hard to follow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style, subject last).", source: "A fire has broken out in the port of Genoa.", answer: "È scoppiato un incendio nel porto di Genova.", explanation: "New subject after the verb." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Smoking in public places has been banned for years.", answer: "Il fumare nei locali pubblici è vietato da anni.", altAnswers: ["Fumare nei locali pubblici è vietato da anni."], explanation: "Infinitive subject; \"da anni\" + present." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "\"We'll do everything we can\", the councilor promised.", answer: "«Faremo il possibile», ha assicurato l'assessore.", altAnswers: ["\"Faremo il possibile\", ha assicurato l'assessore.", "«Faremo tutto il possibile», ha assicurato l'assessore."], explanation: "After a quote: verb + subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style, verb first).", source: "The new bridge over the Arno will be opened on Monday.", answer: "Sarà inaugurato lunedì il nuovo ponte sull'Arno.", altAnswers: ["Verrà inaugurato lunedì il nuovo ponte sull'Arno."], explanation: "News inversion: verb, time, subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, with the subject last.", source: "Two hundred people took part.", answer: "Hanno partecipato duecento persone.", altAnswers: ["Hanno partecipato in duecento."], explanation: "New subject after the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary style).", source: "Then the mayor stood up.", answer: "Si alzò allora il sindaco.", altAnswers: ["Allora si alzò il sindaco.", "Allora il sindaco si alzò."], explanation: "Verb before subject for emphasis." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Learning a language takes patience.", answer: "Imparare una lingua richiede pazienza.", altAnswers: ["L'imparare una lingua richiede pazienza.", "Per imparare una lingua ci vuole pazienza."], explanation: "Infinitive subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having lied did not help him.", answer: "L'aver mentito non lo ha aiutato.", altAnswers: ["Aver mentito non lo ha aiutato.", "L'avere mentito non lo ha aiutato.", "L'aver mentito non l'ha aiutato."], explanation: "Past infinitive as a noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At dusk the swallows return.", answer: "Sul far della sera tornano le rondini.", altAnswers: ["Sul far della sera le rondini tornano.", "Al calar della sera tornano le rondini."], explanation: "Fixed nominal infinitive; subject last." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, without se.", source: "Had they asked me, I would have helped.", answer: "Me l'avessero chiesto, li avrei aiutati.", altAnswers: ["Me lo avessero chiesto, li avrei aiutati.", "Se me l'avessero chiesto, li avrei aiutati."], explanation: "Subjunctive first, no \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There remain] some doubts.", sentence: "___ alcuni dubbi.", answer: "Restano", altAnswers: ["Rimangono"], explanation: "Verb first, new subject last." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "His constant [breaking off] made the speech hard to follow.", sentence: "Il suo continuo ___ rendeva il discorso difficile da seguire.", answer: "interrompersi", explanation: "Reflexive infinitive used as a noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The knowledge] of the elders must not be lost.", sentence: "___ degli anziani non deve andare perduto.", answer: "Il sapere", explanation: "\"Il sapere\": infinitive turned noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[While crossing] the square, I met Luca.", sentence: "___ la piazza, ho incontrato Luca.", answer: "Nell'attraversare", altAnswers: ["Attraversando"], explanation: "\"Nel\" + infinitive = while doing." },
      { type: "multiple-choice", question: "Which sentence answers 'What happened?' most naturally?", options: ["È caduto un albero sulla strada.", "Un albero è caduto, sulla strada.", "Sulla strada un albero, è caduto.", "È un albero caduto sulla strada."], correctIndex: 0, explanation: "New information last: verb first." },
      { type: "listen-choose", audio: "Ha dichiarato il presidente: «Andremo avanti».", question: "Who said they would go on?", options: ["The president", "The journalist", "The prime minister's opponent", "Nobody"], correctIndex: 0, explanation: "Inversion: \"ha dichiarato il presidente\"." },
      { type: "dictation", audio: "Il viaggiare in treno è più lento ma più rilassante.", explanation: "\"Il viaggiare\": nominal infinitive." },
      { type: "speak", text: "Sono cambiate molte cose negli ultimi anni, e il vivere in città è diventato più caro.", prompt: "Say it in Italian: A lot has changed in recent years, and living in the city has become more expensive.", tip: "\"Sono cambiate\": agreement with \"cose\".", explanation: "Inversion and a nominal infinitive." },
    ],
  },
  {
    slug: "c1-formal-syntax-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Long Sentences",
    summary: "Fresh texts to combine and punctuate: absolute participles, subordinate clauses and relative links.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A town council report",
        body: [
          "The sentences here come from an invented report of a town council meeting in Ferrara. Combine and compress: absolute participles (\"Approvato il verbale\"), cause and concession with the right mood, \"il che\" for consequences, \"il quale\" for clarity, and commas only where they belong.",
        ],
        examples: [
          { es: "Approvato il verbale della seduta precedente, si è passati al primo punto.", en: "Once the minutes of the previous session had been approved, the first item was taken." },
          { es: "Benché la proposta fosse stata presentata in ritardo, è stata discussa.", en: "Although the proposal had been submitted late, it was discussed." },
          { es: "La consigliera Rossi, la quale presiede la commissione cultura, ha preso la parola.", en: "Councilor Rossi, who chairs the culture committee, took the floor." },
          { es: "La seduta si è prolungata fino a mezzanotte, il che ha suscitato qualche lamentela.", en: "The session went on until midnight, which prompted some complaints." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Although the proposal had been submitted late, it was discussed.", answer: "Benché la proposta fosse stata presentata in ritardo, è stata discussa.", altAnswers: ["Sebbene la proposta fosse stata presentata in ritardo, è stata discussa.", "Benché la proposta fosse stata presentata in ritardo, fu discussa."], explanation: "\"Benché\" + pluperfect subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "The session went on until midnight, which prompted some complaints.", answer: "La seduta si è prolungata fino a mezzanotte, il che ha suscitato qualche lamentela.", altAnswers: ["La seduta si è protratta fino a mezzanotte, il che ha suscitato qualche lamentela."], explanation: "\"Il che\" for the whole fact." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian, with an absolute participle.", source: "Once the minutes had been approved, the first item was taken.", answer: "Approvato il verbale, si è passati al primo punto.", altAnswers: ["Approvato il verbale, si passò al primo punto."], explanation: "\"Approvato\" agrees with \"verbale\"; impersonal \"si è passati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Councilor Rossi, who chairs the culture committee, took the floor.", answer: "La consigliera Rossi, la quale presiede la commissione cultura, ha preso la parola.", altAnswers: ["La consigliera Rossi, che presiede la commissione cultura, ha preso la parola."], explanation: "\"La quale\" in formal reports." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "Since the funds were insufficient, the project was postponed.", answer: "Poiché i fondi erano insufficienti, il progetto è stato rinviato.", altAnswers: ["Dato che i fondi erano insufficienti, il progetto è stato rinviato.", "Siccome i fondi erano insufficienti, il progetto è stato rinviato.", "Poiché i fondi erano insufficienti, il progetto fu rinviato."], explanation: "Cause + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian, with an absolute participle.", source: "Once the vote was over, the mayor closed the session.", answer: "Terminata la votazione, il sindaco ha chiuso la seduta.", altAnswers: ["Conclusa la votazione, il sindaco ha chiuso la seduta.", "Terminata la votazione, il sindaco chiuse la seduta."], explanation: "\"Terminata\" agrees with \"votazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "The council approved the plan, which was expected.", answer: "Il consiglio ha approvato il piano, il che era previsto.", altAnswers: ["Il consiglio ha approvato il piano, cosa che era prevista."], explanation: "\"Il che\": the approval, not the plan, was expected." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "The council members, who had read the report, asked many questions.", answer: "I consiglieri, che avevano letto la relazione, hanno fatto molte domande.", altAnswers: ["I consiglieri, i quali avevano letto la relazione, hanno fatto molte domande.", "I consiglieri, che avevano letto la relazione, hanno posto molte domande."], explanation: "Commas: all the council members had read it." },
      { type: "translate", direction: "en-es", prompt: "Translate into formal Italian.", source: "The council members who had read the report asked many questions.", answer: "I consiglieri che avevano letto la relazione hanno fatto molte domande.", altAnswers: ["I consiglieri che avevano letto la relazione hanno posto molte domande."], explanation: "No commas: only those who had read it." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Given] the late hour, the debate was postponed.", sentence: "___ l'ora tarda, il dibattito è stato rinviato.", answer: "Data", altAnswers: ["Vista", "Considerata"], explanation: "Agrees with \"l'ora\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The opposition voted against it, [although it shared] some points.", sentence: "L'opposizione ha votato contro, ___ alcuni punti.", answer: "pur condividendo", altAnswers: ["benché condividesse", "sebbene condividesse"], explanation: "\"Pur\" + gerund = although, same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The proposal [presented] by the mayor was rejected.", sentence: "La proposta ___ dal sindaco è stata respinta.", answer: "presentata", explanation: "Participle as a compressed relative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having heard] the experts, the council decided.", sentence: "___ gli esperti, il consiglio ha deciso.", answer: "Sentiti", altAnswers: ["Ascoltati", "Uditi"], explanation: "Absolute participle agreeing with \"esperti\"." },
      { type: "word-order", prompt: "Put the words in order to say: The decision taken by the council surprised everyone.", words: ["La", "decisione", "presa", "dal", "consiglio", "ha", "sorpreso", "tutti."], translation: "The decision taken by the council surprised everyone.", explanation: "No comma between the long subject and the verb." },
      { type: "multiple-choice", question: "Which sentence is punctuated correctly?", options: ["Il sindaco, dopo una lunga discussione, ha accettato la proposta.", "Il sindaco dopo una lunga discussione, ha accettato la proposta.", "Il sindaco, dopo una lunga discussione ha accettato la proposta.", "Il sindaco, dopo, una lunga discussione ha accettato la proposta."], correctIndex: 0, explanation: "The inciso has a comma on both sides." },
      { type: "listen-choose", audio: "La seduta si è prolungata fino a mezzanotte, il che ha suscitato qualche lamentela.", question: "What caused complaints?", options: ["The session lasting until midnight", "The mayor's speech", "The vote result", "The late start"], correctIndex: 0, explanation: "\"Il che\" refers to the long session." },
      { type: "dictation", audio: "Approvato il verbale, si è passati al primo punto.", explanation: "Absolute participle + impersonal \"si\"." },
      { type: "speak", text: "Terminata la votazione, il sindaco ha chiuso la seduta, il che ha suscitato qualche protesta.", prompt: "Say it in Italian: Once the vote was over, the mayor closed the session, which prompted some protest.", tip: "Two pauses: after \"votazione\" and after \"seduta\".", explanation: "Absolute participle and \"il che\"." },
    ],
  },
];
