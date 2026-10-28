// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u02-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 2 Extra Practice: The Pluperfect Subjunctive. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U02_EXTRA: Lesson[] = [
  {
    slug: "b2-pluperfect-subjunctive-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Forms",
    summary: "Fresh sentences with avessi and fossi + participle, agreement and pronouns.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Auxiliary, participle, agreement",
        body: [
          "\"Avessi\" or \"fossi\" + participle; essere verbs agree with the subject, and \"lo, la, li, le\" make the participle agree with the object.",
        ],
        examples: [
          { es: "Pensavo che avessi già prenotato.", en: "I thought you had already booked." },
          { es: "Credevo che le ragazze fossero tornate.", en: "I thought the girls had come back." },
          { es: "Non sapevo che l'avessero già venduta.", en: "I didn't know they had already sold it (the car)." },
          { es: "Sembrava che si fosse offeso.", en: "He seemed to have taken offense." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought you had already booked. (to a friend)", answer: "Pensavo che avessi già prenotato.", altAnswers: ["Credevo che avessi già prenotato.", "Pensavo che tu avessi già prenotato."], explanation: "\"Avessi prenotato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He seemed to have taken offense.", answer: "Sembrava che si fosse offeso.", explanation: "\"Offendersi\" → \"si fosse offeso\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought the girls had come back.", answer: "Credevo che le ragazze fossero tornate.", altAnswers: ["Pensavo che le ragazze fossero tornate."], explanation: "Feminine plural: \"tornate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't know they had already sold the car.", answer: "Non sapevo che avessero già venduto la macchina.", altAnswers: ["Non sapevo che avessero già venduto l'auto."], explanation: "\"Avessero venduto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't know they had already sold it. (the car)", answer: "Non sapevo che l'avessero già venduta.", explanation: "\"La\" → \"venduta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seemed that someone had opened the window.", answer: "Sembrava che qualcuno avesse aperto la finestra.", explanation: "\"Avesse aperto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We thought you (plural) had gotten up early.", answer: "Pensavamo che vi foste alzati presto.", altAnswers: ["Credevamo che vi foste alzati presto.", "Pensavamo che vi foste alzate presto."], explanation: "\"Alzarsi\" → \"vi foste alzati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was afraid she had fallen.", answer: "Avevo paura che fosse caduta.", altAnswers: ["Temevo che fosse caduta."], explanation: "\"Cadere\" → \"fosse caduta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a shame they hadn't met.", answer: "Era un peccato che non si fossero conosciuti.", altAnswers: ["Era un peccato che non si fossero incontrati."], explanation: "Reciprocal → \"si fossero conosciuti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought you had brought them (the keys). (to a friend)", answer: "Pensavo che le avessi portate.", altAnswers: ["Credevo che le avessi portate.", "Pensavo che tu le avessi portate."], explanation: "\"Le\" → \"portate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I didn't know you [had been born] in Bari. (to a woman)", sentence: "Non sapevo che ___ a Bari.", answer: "fossi nata", altAnswers: ["tu fossi nata"], explanation: "\"Nascere\" → \"fossi nata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seemed the guests [had enjoyed themselves].", sentence: "Sembrava che gli ospiti ___.", answer: "si fossero divertiti", explanation: "\"Divertirsi\" → \"si fossero divertiti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hoped you [had slept] well. (plural)", sentence: "Speravo che ___ bene.", answer: "aveste dormito", altAnswers: ["voi aveste dormito"], explanation: "voi: \"aveste dormito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They thought the prices [had gone down].", sentence: "Pensavano che i prezzi ___.", answer: "fossero scesi", altAnswers: ["fossero calati", "fossero diminuiti"], explanation: "\"Scendere\" → \"fossero scesi\"." },
      { type: "listen-choose", audio: "Non sapevo che l'avessero già venduta.", question: "What did they sell?", options: ["something feminine, like la macchina", "something masculine, like il divano", "several things", "nothing yet"], correctIndex: 0, explanation: "\"Venduta\" agrees with \"la\"." },
      { type: "dictation", audio: "Pensavamo che vi foste alzati presto.", explanation: "\"Vi foste alzati\"." },
      { type: "speak", text: "Credevo che le ragazze fossero già tornate e che avessero cenato.", prompt: "Say it in Italian: I thought the girls had already come back and had had dinner.", tip: "tor-NA-te: feminine plural ending.", explanation: "\"Fossero tornate\" (essere), \"avessero cenato\" (avere)." },
    ],
  },
  {
    slug: "b2-pluperfect-subjunctive-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Wishes",
    summary: "Fresh past regrets with magari, vorrei che and avrei preferito che.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Regrets about the past",
        body: [
          "\"Magari\" or \"vorrei che\" + pluperfect subjunctive for a past that can't be changed; + imperfect subjunctive for now.",
        ],
        examples: [
          { es: "Magari avessi preso l'ombrello!", en: "If only I'd taken the umbrella!" },
          { es: "Vorrei che non avessimo litigato.", en: "I wish we hadn't argued." },
          { es: "Avrei preferito che mi avessi chiesto il permesso.", en: "I'd rather you had asked my permission." },
          { es: "Magari fosse già venerdì!", en: "If only it were Friday already!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only I'd taken the umbrella!", answer: "Magari avessi preso l'ombrello!", explanation: "\"Avessi preso\": past regret." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wish we hadn't argued.", answer: "Vorrei che non avessimo litigato.", altAnswers: ["Magari non avessimo litigato!"], explanation: "\"Non avessimo litigato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather you had asked my permission. (to a friend)", answer: "Avrei preferito che mi avessi chiesto il permesso.", altAnswers: ["Avrei preferito che mi chiedessi il permesso.", "Vorrei che mi avessi chiesto il permesso."], explanation: "A finished action → \"avessi chiesto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only we had bought that house!", answer: "Magari avessimo comprato quella casa!", explanation: "\"Avessimo comprato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only the train hadn't been late!", answer: "Magari il treno non fosse stato in ritardo!", explanation: "\"Fosse stato\": past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wish they had invited us.", answer: "Vorrei che ci avessero invitato.", altAnswers: ["Vorrei che ci avessero invitati.", "Magari ci avessero invitato!", "Magari ci avessero invitati!"], explanation: "\"Ci avessero invitato\": agreement with \"ci\" is optional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only it were Friday already!", answer: "Magari fosse già venerdì!", explanation: "A wish about now → \"fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wish I had learned Italian as a child.", answer: "Magari avessi imparato l'italiano da piccolo!", altAnswers: ["Magari avessi imparato l'italiano da piccola!", "Vorrei aver imparato l'italiano da piccolo.", "Vorrei aver imparato l'italiano da piccola."], explanation: "\"Magari\" + \"avessi imparato\"; with \"vorrei\" and the same subject, a past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd have liked you to stay longer. (plural)", answer: "Avremmo voluto che restaste più a lungo.", altAnswers: ["Avremmo voluto che rimaneste più a lungo.", "Avremmo voluto che foste rimasti più a lungo.", "Avremmo voluto che foste restati più a lungo."], explanation: "Both subjunctives are heard after \"avremmo voluto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only you hadn't said that! (to a friend)", answer: "Magari non l'avessi detto!", altAnswers: ["Magari tu non l'avessi detto!"], explanation: "\"Non l'avessi detto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If only I [had gotten up] earlier! (a woman speaking)", sentence: "Magari mi ___ prima!", answer: "fossi alzata", explanation: "\"Alzarsi\" → \"mi fossi alzata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I wish you [had come] with us. (plural)", sentence: "Vorrei che ___ con noi.", answer: "foste venuti", altAnswers: ["foste venute"], explanation: "\"Foste venuti\": essere + agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If only I [knew] the answer!", sentence: "Magari ___ la risposta!", answer: "sapessi", explanation: "Now → \"sapessi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd rather they [hadn't sold] the shop.", sentence: "Avrei preferito che non ___ il negozio.", answer: "avessero venduto", explanation: "\"Avessero venduto\"." },
      { type: "multiple-choice", question: "Your team lost the final yesterday. Which fits?", options: ["Magari avessimo vinto!", "Magari vincessimo!", "Magari vinciamo!", "Magari abbiamo vinto!"], correctIndex: 0, explanation: "Past regret → \"avessimo vinto\"." },
      { type: "dictation", audio: "Magari il treno non fosse stato in ritardo!", explanation: "\"Fosse stato\": past regret." },
      { type: "speak", text: "Magari avessi preso l'ombrello! Vorrei che me l'avessi ricordato.", prompt: "Say it to a friend in the rain: If only I'd taken the umbrella! I wish you'd reminded me.", tip: "\"Ombrello\": a strong double l.", explanation: "Two past regrets." },
    ],
  },
  {
    slug: "b2-pluperfect-subjunctive-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Four Tenses",
    summary: "Mixed practice choosing sia, sia stato, fosse and fosse stato.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Trigger and time",
        body: [
          "Present trigger: \"sia\" (now / later) or \"sia stato\" (earlier). Past or conditional trigger: \"fosse\" (same time / later) or \"fosse stato\" (earlier).",
        ],
        examples: [
          { es: "Credo che abbia ragione.", en: "I think she's right." },
          { es: "Credo che abbia avuto ragione.", en: "I think she was right." },
          { es: "Credevo che avesse ragione.", en: "I thought she was right." },
          { es: "Credevo che avesse avuto ragione.", en: "I thought she had been right." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think she was right.", answer: "Credo che abbia avuto ragione.", altAnswers: ["Penso che abbia avuto ragione."], explanation: "Present trigger + earlier → \"abbia avuto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought she was right.", answer: "Credevo che avesse ragione.", altAnswers: ["Pensavo che avesse ragione."], explanation: "Past trigger + same time → \"avesse\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange that he hasn't called.", answer: "È strano che non abbia chiamato.", altAnswers: ["È strano che non abbia telefonato."], explanation: "Present + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was strange that he hadn't called.", answer: "Era strano che non avesse chiamato.", altAnswers: ["Era strano che non avesse telefonato."], explanation: "Past + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid it's too late.", answer: "Temo che sia troppo tardi.", altAnswers: ["Ho paura che sia troppo tardi."], explanation: "Present + same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was afraid it was too late.", answer: "Temevo che fosse troppo tardi.", altAnswers: ["Avevo paura che fosse troppo tardi."], explanation: "Past + same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems they've left.", answer: "Sembra che siano partiti.", altAnswers: ["Pare che siano partiti.", "Sembra che se ne siano andati."], explanation: "Present + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seemed they had left.", answer: "Sembrava che fossero partiti.", altAnswers: ["Pareva che fossero partiti.", "Sembrava che se ne fossero andati."], explanation: "Past + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like you to be honest. (to a friend)", answer: "Vorrei che fossi sincero.", altAnswers: ["Vorrei che fossi sincera.", "Vorrei che tu fossi sincero.", "Vorrei che tu fossi sincera.", "Vorrei che fossi onesto.", "Vorrei che fossi onesta."], explanation: "Conditional + now → \"fossi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you liked the film. (to a friend)", answer: "Sono contento che ti sia piaciuto il film.", altAnswers: ["Sono contenta che ti sia piaciuto il film.", "Mi fa piacere che ti sia piaciuto il film."], explanation: "\"Piacere\" takes \"essere\": \"sia piaciuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I was glad you [had liked] the film. (to a friend)", sentence: "Ero contento che ti ___ il film.", answer: "fosse piaciuto", explanation: "Past + earlier → \"fosse piaciuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt they [know] the truth.", sentence: "Dubito che ___ la verità.", answer: "sappiano", explanation: "Present + same → \"sappiano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubted they [had known] the truth.", sentence: "Dubitavo che ___ la verità.", answer: "avessero saputo", altAnswers: ["avessero conosciuto"], explanation: "Past + earlier → \"avessero saputo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's possible that the shop [is] closed.", sentence: "È possibile che il negozio ___ chiuso.", answer: "sia", explanation: "Present + same." },
      { type: "multiple-choice", question: "Which fits? \"Mi sembrava che Luca ___ un po' triste quel giorno.\"", options: ["fosse", "sia", "sia stato", "è"], correctIndex: 0, explanation: "Past trigger + same time → \"fosse\"." },
      { type: "dictation", audio: "Era strano che nessuno avesse chiamato.", explanation: "Past + earlier: \"avesse chiamato\"." },
      { type: "speak", text: "Temo che sia troppo tardi. Temevo che fosse troppo tardi.", prompt: "Say both: I'm afraid it's too late. I was afraid it was too late.", tip: "SIA vs FOS-se: one syllable against two.", explanation: "Present and past trigger, same time." },
    ],
  },
];
