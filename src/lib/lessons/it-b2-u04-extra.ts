// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u04-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 4 Extra Practice: Hypothetical If Sentences. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U04_EXTRA: Lesson[] = [
  {
    slug: "b2-hypothetical-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Se + Imperfect Subjunctive",
    summary: "Fresh hypothetical sentences with se + imperfect subjunctive and the conditional.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Condition and result",
        body: [
          "\"Se\" + \"-ssi\" for the condition, conditional for the result, in either order. Never the conditional after \"se\" meaning if.",
        ],
        examples: [
          { es: "Se il caffè fosse meno amaro, lo berrei.", en: "If the coffee were less bitter, I'd drink it." },
          { es: "Se avessimo un giorno in più, visiteremmo Siena.", en: "If we had an extra day, we'd visit Siena." },
          { es: "Prenderei il treno, se non costasse così tanto.", en: "I'd take the train if it didn't cost so much." },
          { es: "Se conoscessi qualcuno lì, sarebbe più facile.", en: "If I knew someone there, it would be easier." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the coffee were less bitter, I'd drink it.", answer: "Se il caffè fosse meno amaro, lo berrei.", altAnswers: ["Lo berrei se il caffè fosse meno amaro."], explanation: "\"Fosse\" + \"berrei\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we had an extra day, we'd visit Siena.", answer: "Se avessimo un giorno in più, visiteremmo Siena.", altAnswers: ["Visiteremmo Siena se avessimo un giorno in più."], explanation: "\"Avessimo\" + \"visiteremmo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd take the train if it didn't cost so much.", answer: "Prenderei il treno, se non costasse così tanto.", altAnswers: ["Prenderei il treno se non costasse così tanto.", "Se non costasse così tanto, prenderei il treno."], explanation: "\"Costasse\" + \"prenderei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I knew someone there, it would be easier.", answer: "Se conoscessi qualcuno lì, sarebbe più facile.", altAnswers: ["Sarebbe più facile se conoscessi qualcuno lì."], explanation: "\"Conoscessi\" + \"sarebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you slept more, you'd be in a better mood. (to a friend)", answer: "Se dormissi di più, saresti di buon umore.", altAnswers: ["Se dormissi di più, saresti di umore migliore.", "Saresti di buon umore se dormissi di più."], explanation: "\"Dormissi\" + \"saresti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they had children, they'd need a bigger house.", answer: "Se avessero figli, avrebbero bisogno di una casa più grande.", altAnswers: ["Se avessero dei figli, avrebbero bisogno di una casa più grande.", "Se avessero figli, servirebbe loro una casa più grande."], explanation: "\"Avessero\" + \"avrebbero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it weren't so hot, we'd go for a run.", answer: "Se non facesse così caldo, andremmo a correre.", altAnswers: ["Andremmo a correre se non facesse così caldo."], explanation: "Weather \"fare\" → \"facesse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were in your place, I'd talk to him. (to a friend)", answer: "Se fossi al posto tuo, gli parlerei.", altAnswers: ["Se fossi in te, gli parlerei.", "Al posto tuo, gli parlerei.", "Io, al posto tuo, gli parlerei."], explanation: "\"Al posto tuo\" = in your place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the shops opened on Sundays, I'd do my shopping then.", answer: "Se i negozi aprissero la domenica, farei la spesa allora.", altAnswers: ["Se i negozi fossero aperti la domenica, farei la spesa allora.", "Se i negozi aprissero la domenica, farei la spesa quel giorno."], explanation: "\"Aprissero\" + \"farei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you (plural) wanted, you could stay with us.", answer: "Se voleste, potreste stare da noi.", altAnswers: ["Se voleste, potreste restare da noi.", "Potreste stare da noi, se voleste."], explanation: "\"Voleste\" + \"potreste\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the flat [had] a lift, my grandmother could visit us.", sentence: "Se l'appartamento ___ l'ascensore, la nonna potrebbe venire a trovarci.", answer: "avesse", explanation: "\"Avesse\" after \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I spoke Japanese, I [would work] in Tokyo.", sentence: "Se parlassi giapponese, ___ a Tokyo.", answer: "lavorerei", explanation: "Conditional result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If she [put] more salt in it, the sauce would be perfect.", sentence: "Se ci ___ più sale, il sugo sarebbe perfetto.", answer: "mettesse", explanation: "\"Mettere\" → \"mettesse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If we left now, we [would arrive] by midnight.", sentence: "Se partissimo adesso, ___ entro mezzanotte.", answer: "arriveremmo", explanation: "\"Arriveremmo\": double m." },
      { type: "listen-choose", audio: "Se non facesse così caldo, andremmo a correre.", question: "Why aren't they running?", options: ["It's too hot.", "It's raining.", "They're tired.", "It's too late."], correctIndex: 0, explanation: "\"Se non facesse così caldo\"." },
      { type: "dictation", audio: "Se avessimo un giorno in più, visiteremmo Siena.", explanation: "\"Avessimo\" + \"visiteremmo\"." },
      { type: "speak", text: "Prenderei il treno, se non costasse così tanto.", prompt: "Say it in Italian: I'd take the train if it didn't cost so much.", tip: "pren-de-REI: stress the conditional ending.", explanation: "Result first, condition second." },
    ],
  },
  {
    slug: "b2-hypothetical-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: What Would You Do?",
    summary: "Fresh hypothetical questions and answers with tu, Lei and voi.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Questions in the conditional",
        body: [
          "The question word goes with the conditional: \"Cosa faresti / farebbe / fareste se...?\". Answer in the conditional, often without repeating \"se\".",
        ],
        examples: [
          { es: "Cosa faresti se perdessi il portafoglio?", en: "What would you do if you lost your wallet?" },
          { es: "Dove andrebbe se avesse un mese di ferie?", en: "Where would you go if you had a month off? (polite)" },
          { es: "Chi chiamereste se foste nei guai?", en: "Who would you (plural) call if you were in trouble?" },
          { es: "Andrei subito dai carabinieri.", en: "I'd go straight to the police." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What would you do if you lost your wallet? (to a friend)", answer: "Cosa faresti se perdessi il portafoglio?", altAnswers: ["Che cosa faresti se perdessi il portafoglio?", "Se perdessi il portafoglio, cosa faresti?"], explanation: "\"Faresti\" + \"perdessi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where would you go if you had a month off? (polite)", answer: "Dove andrebbe se avesse un mese di ferie?", altAnswers: ["Se avesse un mese di ferie, dove andrebbe?"], explanation: "Lei: \"andrebbe\" + \"avesse\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who would you (plural) call if you were in trouble?", answer: "Chi chiamereste se foste nei guai?", altAnswers: ["Se foste nei guai, chi chiamereste?"], explanation: "voi: \"chiamereste\" + \"foste\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd go straight to the police.", answer: "Andrei subito dai carabinieri.", altAnswers: ["Andrei subito alla polizia.", "Andrei subito dalla polizia."], explanation: "\"Andrei\": conditional of \"andare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What would you say if you met your favourite writer? (to a friend)", answer: "Cosa diresti se incontrassi il tuo scrittore preferito?", altAnswers: ["Cosa diresti se incontrassi la tua scrittrice preferita?", "Che cosa diresti se incontrassi il tuo scrittore preferito?"], explanation: "\"Diresti\" + \"incontrassi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which language would you learn if you had time? (polite)", answer: "Che lingua imparerebbe se avesse tempo?", altAnswers: ["Quale lingua imparerebbe se avesse tempo?", "Se avesse tempo, che lingua imparerebbe?"], explanation: "Lei: \"imparerebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd learn Arabic, because I'd like to travel in the Middle East.", answer: "Imparerei l'arabo, perché mi piacerebbe viaggiare in Medio Oriente.", altAnswers: ["Imparerei l'arabo perché vorrei viaggiare in Medio Oriente."], explanation: "Answer + reason, both conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What would you (plural) cook if your parents came to dinner?", answer: "Cosa cucinereste se i vostri genitori venissero a cena?", altAnswers: ["Che cosa cucinereste se i vostri genitori venissero a cena?"], explanation: "\"Cucinereste\" + \"venissero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you could meet anyone from history, who would it be? (to a friend)", answer: "Se potessi incontrare chiunque della storia, chi sarebbe?", altAnswers: ["Se potessi incontrare un personaggio storico, chi sarebbe?"], explanation: "\"Potessi\" + \"sarebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wouldn't know what to say.", answer: "Non saprei cosa dire.", altAnswers: ["Non saprei che cosa dire.", "Non saprei che dire."], explanation: "\"Sapere\" → \"saprei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "What [would you do] if you were in my place? (polite)", sentence: "Cosa ___ se fosse al mio posto?", answer: "farebbe", explanation: "Lei: \"farebbe\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Where would you live if you [could] live anywhere? (to a friend)", sentence: "Dove vivresti se ___ vivere ovunque?", answer: "potessi", explanation: "\"Potessi\" after \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I found a wallet in the street, I [would take] it to the police.", sentence: "Se trovassi un portafoglio per strada, lo ___ alla polizia.", answer: "porterei", explanation: "\"Porterei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Would you go out with us if we [invited] you? (to a friend)", sentence: "Usciresti con noi se ti ___?", answer: "invitassimo", explanation: "\"Invitassimo\" after \"se\"." },
      { type: "multiple-choice", question: "\"Cosa faresti se ti offrissero un lavoro a Londra?\" Which answer fits?", options: ["Ci penserei bene, ma forse accetterei.", "Ci penso bene e accetto ieri.", "Ci pensassi bene.", "Ci avrei pensato."], correctIndex: 0, explanation: "Answer in the conditional." },
      { type: "dictation", audio: "Cosa faresti se perdessi il portafoglio?", explanation: "\"Faresti\" + \"perdessi\"." },
      { type: "speak", text: "Se mi offrissero un lavoro a Londra, ci penserei bene, ma forse accetterei.", prompt: "Answer: If they offered me a job in London, I'd think it over, but I might accept.", tip: "of-FRIS-se-ro: stress before the double s.", explanation: "Condition + two conditionals." },
    ],
  },
  {
    slug: "b2-hypothetical-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Real or Hypothetical?",
    summary: "Mixed real and hypothetical conditions in fresh sentences.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Choose the family",
        body: [
          "Likely or a real plan: \"se\" + indicative. Unlikely or contrary to fact: \"se\" + imperfect subjunctive + conditional.",
        ],
        examples: [
          { es: "Se passi dal centro, comprami il giornale.", en: "If you go through the centre, buy me the paper." },
          { es: "Se passassi dal centro, mi compreresti il giornale?", en: "If you went through the centre, would you buy me the paper?" },
          { es: "Se c'è sciopero, lavoro da casa.", en: "If there's a strike, I work from home." },
          { es: "Se ci fosse sciopero, lavorerei da casa.", en: "If there were a strike, I'd work from home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's a strike, I work from home.", answer: "Se c'è sciopero, lavoro da casa.", altAnswers: ["Se c'è lo sciopero, lavoro da casa.", "Se c'è uno sciopero, lavoro da casa."], explanation: "Real: indicative." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there were a strike, I'd work from home.", answer: "Se ci fosse sciopero, lavorerei da casa.", altAnswers: ["Se ci fosse uno sciopero, lavorerei da casa.", "Se ci fosse lo sciopero, lavorerei da casa."], explanation: "Hypothetical." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you go through the centre, buy me the paper. (to a friend)", answer: "Se passi dal centro, comprami il giornale.", altAnswers: ["Se passi per il centro, comprami il giornale."], explanation: "Real + imperative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I had wings, I'd fly home.", answer: "Se avessi le ali, volerei a casa.", explanation: "Contrary to fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're hungry, there's some lasagne in the fridge. (to a friend)", answer: "Se hai fame, c'è della lasagna in frigo.", altAnswers: ["Se hai fame, ci sono le lasagne in frigo.", "Se hai fame, c'è la lasagna in frigo.", "Se hai fame, in frigo ci sono le lasagne."], explanation: "Real condition, indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the museum were free, more people would go.", answer: "Se il museo fosse gratuito, ci andrebbe più gente.", altAnswers: ["Se il museo fosse gratis, ci andrebbe più gente.", "Se il museo fosse gratuito, ci andrebbero più persone."], explanation: "Hypothetical; \"la gente\" takes a singular verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you finish early, we'll have a drink. (to a friend)", answer: "Se finisci presto, beviamo qualcosa.", altAnswers: ["Se finisci presto, berremo qualcosa.", "Se finisci presto, prendiamo qualcosa da bere."], explanation: "Real." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you finished early, we could have a drink. (to a friend)", answer: "Se finissi presto, potremmo bere qualcosa.", altAnswers: ["Se finissi presto, potremmo prendere qualcosa da bere."], explanation: "Hypothetical, more tentative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were taller, I'd reach the top shelf.", answer: "Se fossi più alto, arriverei allo scaffale in alto.", altAnswers: ["Se fossi più alta, arriverei allo scaffale in alto.", "Se fossi più alto, arriverei all'ultimo ripiano.", "Se fossi più alta, arriverei all'ultimo ripiano."], explanation: "Contrary to fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they call, tell them I'm out.", answer: "Se chiamano, di' che sono uscito.", altAnswers: ["Se chiamano, di' che sono uscita.", "Se chiamano, digli che sono uscito.", "Se chiamano, digli che sono uscita.", "Se telefonano, di' che sono fuori."], explanation: "Real + imperative \"di'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the weather [is] nice on Sunday, let's go to the lake.", sentence: "Se domenica ___ bello, andiamo al lago.", answer: "fa", explanation: "Real → \"fa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the weather [were] nice, we'd go to the lake.", sentence: "Se ___ bello, andremmo al lago.", answer: "facesse", explanation: "Hypothetical → \"facesse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you need the car, [take] it. (to a friend)", sentence: "Se ti serve la macchina, ___.", answer: "prendila", explanation: "Real + imperative with pronoun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you needed the car, [I'd lend it to you]. (to a friend)", sentence: "Se ti servisse la macchina, ___.", answer: "te la presterei", explanation: "Hypothetical → conditional." },
      { type: "multiple-choice", question: "Which sentence is mixed up?", options: ["Se c'è sciopero, lavorerei da casa.", "Se c'è sciopero, lavoro da casa.", "Se ci fosse sciopero, lavorerei da casa.", "Se ci sarà sciopero, lavorerò da casa."], correctIndex: 0, explanation: "\"C'è\" needs an indicative result." },
      { type: "dictation", audio: "Se il museo fosse gratuito, ci andrebbe più gente.", explanation: "Hypothetical pair." },
      { type: "speak", text: "Se finisci presto, beviamo qualcosa. Se finissi presto, potremmo cenare insieme.", prompt: "Say both to a friend: If you finish early, we'll have a drink. If you finished early, we could have dinner together.", tip: "fi-NI-sci / fi-NIS-si: listen to the change.", explanation: "Real, then hypothetical." },
    ],
  },
];
