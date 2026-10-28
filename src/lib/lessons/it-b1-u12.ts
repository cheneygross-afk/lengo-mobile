// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u12.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 12: The Past Subjunctive. Congiuntivo passato (abbia fatto,
// sia partito), use after present-tense triggers for past events, agreement
// with essere, and the past infinitive with the same subject (credo di aver
// capito). Conventions: docs/italian-course/authoring.md.
export const IT_B1_U12: Lesson[] = [
  {
    slug: "b1-past-subjunctive-forms",
    level: "IT-B1",
    number: 1,
    title: "The Past Subjunctive: Forms",
    summary: "Abbia mangiato, sia andata, abbiamo fatto, siano arrivati.",
    duration: "17 min",
    sections: [
      {
        heading: "Like the passato prossimo",
        body: [
          "The \"congiuntivo passato\" is built exactly like the passato prossimo, but the auxiliary is in the present subjunctive: \"ho mangiato\" → \"abbia mangiato\", \"è andata\" → \"sia andata\".",
          "With \"avere\": \"abbia, abbia, abbia, abbiamo, abbiate, abbiano\" + participle. With \"essere\": \"sia, sia, sia, siamo, siate, siano\" + participle. The same verbs take the same auxiliary as in the passato prossimo.",
          "The usual auxiliary traps come with it. \"Essere\" and \"stare\" both take \"essere\", so \"sia stato\", never \"abbia stato\". \"Piacere\" takes \"essere\" and agrees with the thing liked: \"Spero che ti sia piaciuta la torta\". With a modal, the auxiliary can follow the infinitive: \"Mi dispiace che sia dovuto partire\" and \"che abbia dovuto partire\" are both correct.",
        ],
        examples: [
          { es: "Penso che Luca abbia mangiato.", en: "I think Luca has eaten." },
          { es: "Spero che tu abbia dormito bene.", en: "I hope you slept well." },
          { es: "Credo che abbiano già deciso.", en: "I think they've already decided." },
          { es: "È possibile che abbiate sbagliato strada.", en: "You may have taken the wrong road. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you slept well. (to a friend)", answer: "Spero che tu abbia dormito bene.", altAnswers: ["Spero che abbia dormito bene."], explanation: "\"Abbia\" + \"dormito\"." },
          { type: "multiple-choice", question: "\"Credo che ___ già deciso.\" (they)", options: ["abbiano", "hanno", "siano", "abbiamo"], correctIndex: 0, explanation: "\"Decidere\" takes avere: \"abbiano deciso\"." },
        ],
      },
      {
        heading: "Essere: agreement",
        body: [
          "With \"essere\", the participle agrees with the subject, as in the passato prossimo: \"Penso che Marta sia andata via\", \"Spero che siano arrivati bene\", \"Mi sembra che le ragazze siano uscite\".",
          "Reflexive verbs also take \"essere\": \"Spero che ti sia divertita\" (said to a woman), \"Credo che si siano sposati\".",
        ],
        examples: [
          { es: "Penso che Marta sia andata via.", en: "I think Marta has left." },
          { es: "Spero che siano arrivati bene.", en: "I hope they got there safely." },
          { es: "Spero che ti sia divertita.", en: "I hope you had fun. (to a woman)" },
          { es: "Credo che si siano sposati a maggio.", en: "I think they got married in May." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they got there safely.", answer: "Spero che siano arrivati bene.", altAnswers: ["Spero che siano arrivate bene.", "Spero che siano arrivati sani e salvi."], explanation: "\"Siano arrivati\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think Marta [has left].", sentence: "Penso che Marta ___ via.", answer: "sia andata", explanation: "Essere + agreement." },
        ],
      },
      {
        heading: "With object pronouns",
        body: [
          "Pronouns go before the auxiliary, and with \"lo / la / li / le\" the participle agrees, as you saw in Unit 1: \"Dubito che l'abbia letta\" (the letter), \"Penso che li abbiano venduti\".",
        ],
        examples: [
          { es: "La lettera? Dubito che l'abbia letta.", en: "The letter? I doubt he's read it." },
          { es: "I biglietti? Penso che li abbiano venduti tutti.", en: "The tickets? I think they've sold them all." },
          { es: "Spero che te l'abbiano detto.", en: "I hope they've told you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The letter? I doubt he's read it.", answer: "La lettera? Dubito che l'abbia letta.", altAnswers: ["La lettera? Dubito che lui l'abbia letta."], explanation: "\"L'abbia letta\": agreement with \"la\"." },
          { type: "listen-choose", audio: "Spero che te l'abbiano detto.", question: "What does the speaker hope?", options: ["That someone has told you.", "That you told them.", "That they'll tell you.", "That you've said it."], correctIndex: 0, explanation: "\"Te l'abbiano detto\" = they've told you." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think Luca has eaten.", answer: "Penso che Luca abbia mangiato.", altAnswers: ["Credo che Luca abbia mangiato.", "Penso che Luca abbia già mangiato."], explanation: "\"Abbia mangiato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they've already decided.", answer: "Credo che abbiano già deciso.", altAnswers: ["Penso che abbiano già deciso."], explanation: "\"Abbiano deciso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You may have taken the wrong road. (plural)", answer: "È possibile che abbiate sbagliato strada.", altAnswers: ["Può darsi che abbiate sbagliato strada."], explanation: "\"Abbiate sbagliato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you had fun. (to a woman)", answer: "Spero che ti sia divertita.", altAnswers: ["Spero che tu ti sia divertita."], explanation: "Reflexive: essere + agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they got married in May.", answer: "Credo che si siano sposati a maggio.", altAnswers: ["Penso che si siano sposati a maggio.", "Credo che si siano sposati in maggio."], explanation: "\"Si siano sposati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The tickets? I think they've sold them all.", answer: "I biglietti? Penso che li abbiano venduti tutti.", altAnswers: ["I biglietti? Credo che li abbiano venduti tutti."], explanation: "\"Li abbiano venduti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope they've told you. (to a friend)", answer: "Spero che te l'abbiano detto.", altAnswers: ["Spero che ti abbiano avvisato.", "Spero che te lo abbiano detto."], explanation: "Cluster before the auxiliary." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the girls [have gone out].", sentence: "Sembra che le ragazze ___.", answer: "siano uscite", explanation: "Essere + feminine plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm glad you [came]. (plural)", sentence: "Sono contento che ___.", answer: "siate venuti", altAnswers: ["siate venute"], explanation: "\"Siate venuti\"." },
      { type: "matching", instructions: "Match each passato prossimo to its past subjunctive.", pairs: [{ left: "ho fatto", right: "abbia fatto" }, { left: "è partita", right: "sia partita" }, { left: "abbiamo visto", right: "abbiamo visto (same)" }, { left: "sono arrivati", right: "siano arrivati" }], explanation: "Change only the auxiliary." },
      { type: "dictation", audio: "Spero che siano arrivati bene e che abbiano trovato l'albergo.", explanation: "\"Siano arrivati\", \"abbiano trovato\"." },
      { type: "speak", text: "Spero che tu abbia dormito bene e che ti sia piaciuta la camera.", prompt: "Say it in Italian: I hope you slept well and liked the room.", tip: "pia-CIU-ta: agrees with \"la camera\".", explanation: "\"Piacere\" takes essere: \"sia piaciuta\"." },
    ],
  },
  {
    slug: "b1-past-subjunctive-use",
    level: "IT-B1",
    number: 2,
    title: "Thinking About the Past",
    summary: "Penso che abbia ragione / penso che abbia avuto ragione; mi sembra che sia uscito; spero che tu ti sia divertito.",
    duration: "17 min",
    sections: [
      {
        heading: "Now I think, then it happened",
        body: [
          "Use the past subjunctive when the trigger is in the present (I think, I hope, I'm sorry now) but the action is in the past: \"Penso che sia già partito\" (I think he's already left), \"Mi dispiace che tu non sia venuto\" (I'm sorry you didn't come).",
          "Compare: \"Penso che abbia ragione\" (I think he's right, now) / \"Penso che abbia avuto ragione\" (I think he was right, then).",
          "One Italian form covers two English ones: \"Penso che abbia chiamato\" can mean he called or he has called, so don't look for a separate tense for each. Place \"già\" and \"ancora\" between the auxiliary and the participle, as in the passato prossimo: \"Credo che non sia ancora arrivato\", \"Spero che abbiate già mangiato\".",
        ],
        examples: [
          { es: "Penso che sia già partito.", en: "I think he's already left." },
          { es: "Mi dispiace che tu non sia venuto.", en: "I'm sorry you didn't come." },
          { es: "Penso che abbia avuto ragione.", en: "I think he was right." },
          { es: "Mi sembra che sia uscito un'ora fa.", en: "I think he went out an hour ago." },
          { es: "Spero che tu ti sia divertito.", en: "I hope you enjoyed yourself." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you didn't come. (to a man)", answer: "Mi dispiace che tu non sia venuto.", altAnswers: ["Mi dispiace che non sia venuto."], explanation: "Present feeling, past action." },
          { type: "multiple-choice", question: "\"Penso che ieri Marco ___ a Roma.\"", options: ["sia andato", "vada", "è andato", "andare"], correctIndex: 0, explanation: "\"Ieri\": past action." },
        ],
      },
      {
        heading: "With all the triggers",
        body: [
          "Every trigger from Units 8 to 11 works: \"È possibile che abbia perso il treno\", \"Sono contenta che vi siate trovati bene\", \"Dubito che l'abbiano fatto apposta\", \"Benché abbia studiato, non ha passato l'esame\".",
        ],
        examples: [
          { es: "È possibile che abbia perso il treno.", en: "He may have missed the train." },
          { es: "Sono contenta che vi siate trovati bene.", en: "I'm glad you got on well." },
          { es: "Dubito che l'abbiano fatto apposta.", en: "I doubt they did it on purpose." },
          { es: "Benché abbia studiato, non ha passato l'esame.", en: "Although she studied, she didn't pass the exam." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He may have missed the train.", answer: "È possibile che abbia perso il treno.", altAnswers: ["Può darsi che abbia perso il treno."], explanation: "\"Abbia perso\"." },
          { type: "listen-choose", audio: "Dubito che l'abbiano fatto apposta.", question: "What does the speaker think?", options: ["It probably wasn't on purpose.", "It was definitely on purpose.", "They'll do it on purpose.", "Nobody did anything."], correctIndex: 0, explanation: "\"Dubito che\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he's already left.", answer: "Penso che sia già partito.", altAnswers: ["Credo che sia già partito.", "Penso che sia già andato via."], explanation: "\"Sia partito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he was right.", answer: "Penso che abbia avuto ragione.", altAnswers: ["Credo che abbia avuto ragione."], explanation: "Past: \"abbia avuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you enjoyed yourself. (to a man)", answer: "Spero che tu ti sia divertito.", altAnswers: ["Spero che ti sia divertito."], explanation: "\"Ti sia divertito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you got on well. (plural)", answer: "Sono contenta che vi siate trovati bene.", altAnswers: ["Sono contento che vi siate trovati bene.", "Sono felice che vi siate trovati bene."], explanation: "\"Vi siate trovati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although she studied, she didn't pass the exam.", answer: "Benché abbia studiato, non ha passato l'esame.", altAnswers: ["Nonostante abbia studiato, non ha passato l'esame.", "Sebbene abbia studiato, non ha passato l'esame.", "Anche se ha studiato, non ha passato l'esame."], explanation: "\"Abbia studiato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he went out an hour ago.", answer: "Mi sembra che sia uscito un'ora fa.", altAnswers: ["Penso che sia uscito un'ora fa.", "Credo che sia uscito un'ora fa."], explanation: "\"Sia uscito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange that she hasn't called.", answer: "È strano che non abbia chiamato.", altAnswers: ["È strano che lei non abbia chiamato.", "È strano che non abbia telefonato."], explanation: "\"Abbia chiamato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt they [understood].", sentence: "Dubito che ___.", answer: "abbiano capito", explanation: "\"Abbiano capito\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the thieves [got in] through the window.", sentence: "Sembra che i ladri ___ dalla finestra.", answer: "siano entrati", explanation: "\"Entrare\": essere." },
      { type: "multiple-choice", question: "Which means: I think it's true (now)?", options: ["Penso che sia vero.", "Penso che sia stato vero.", "Penso che è stato vero.", "Penso che era vero."], correctIndex: 0, explanation: "Present: \"sia\"." },
      { type: "dictation", audio: "Mi dispiace che tu non sia venuto, ma spero che ti sia riposato.", explanation: "\"Sia venuto\", \"ti sia riposato\"." },
      { type: "speak", text: "È possibile che abbia perso il treno, ma è strano che non abbia chiamato.", prompt: "Say it in Italian: He may have missed the train, but it's strange he hasn't called.", tip: "AB-bia PER-so.", explanation: "Two past subjunctives." },
    ],
  },
  {
    slug: "b1-past-infinitive-same-subject",
    level: "IT-B1",
    number: 3,
    title: "Credo di Aver Capito",
    summary: "Same subject: credo di aver sbagliato, sono contento di essere venuto.",
    duration: "17 min",
    sections: [
      {
        heading: "The past infinitive",
        body: [
          "With the same subject, the present uses \"di\" + infinitive (Unit 8). For a past action, use the past infinitive: \"avere / essere\" + participle. \"Credo di aver capito\" (I think I've understood), \"Sono contento di essere venuto\" (I'm glad I came).",
          "\"Avere\" often drops its final \"-e\": \"aver capito\", \"aver fatto\". With \"essere\", the participle agrees with the subject: \"Sono contenta di essere venuta\".",
          "Pronouns attach to \"aver\" or \"essere\", not to the participle: \"Mi dispiace di averti fatto aspettare\", \"Credo di averla vista ieri\" (with agreement after \"la\"), \"Sono contento di esserci andato\". A frequent slip is the bare infinitive for a past action: \"Mi dispiace di non chiamarti\" means I'm sorry I'm not calling you; for I'm sorry I didn't call you, say \"di non averti chiamato\".",
        ],
        examples: [
          { es: "Credo di aver capito.", en: "I think I've understood." },
          { es: "Penso di aver sbagliato.", en: "I think I've made a mistake." },
          { es: "Sono contento di essere venuto.", en: "I'm glad I came." },
          { es: "Sono contenta di essere venuta.", en: "I'm glad I came. (woman)" },
          { es: "Mi dispiace di non averti chiamato.", en: "I'm sorry I didn't call you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I've made a mistake.", answer: "Penso di aver sbagliato.", altAnswers: ["Credo di aver sbagliato.", "Penso di avere sbagliato.", "Credo di avere sbagliato."], explanation: "Same subject, past." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry I didn't call you. (to a friend)", answer: "Mi dispiace di non averti chiamato.", altAnswers: ["Mi dispiace di non averti chiamata.", "Mi dispiace non averti chiamato.", "Mi dispiace di non averti telefonato."], explanation: "Pronoun on \"aver\": \"averti\"." },
        ],
      },
      {
        heading: "Not che io abbia",
        body: [
          "\"Credo che io abbia sbagliato\" is wrong: same subject, so \"Credo di aver sbagliato\". Use \"che\" + past subjunctive only for someone else: \"Credo che tu abbia sbagliato\".",
          "The past infinitive also works after \"dopo\": \"Dopo aver mangiato, siamo usciti\" (After eating, we went out), \"Dopo essere arrivati, abbiamo chiamato\".",
        ],
        examples: [
          { es: "Credo che tu abbia sbagliato.", en: "I think you've made a mistake." },
          { es: "Dopo aver mangiato, siamo usciti.", en: "After eating, we went out." },
          { es: "Dopo essere arrivati, abbiamo chiamato i nonni.", en: "After arriving, we called our grandparents." },
          { es: "Ho paura di aver dimenticato il gas acceso.", en: "I'm afraid I've left the gas on." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After eating, we went out.", answer: "Dopo aver mangiato, siamo usciti.", altAnswers: ["Dopo avere mangiato, siamo usciti.", "Dopo aver mangiato, siamo uscite."], explanation: "\"Dopo\" + past infinitive." },
          { type: "listen-choose", audio: "Ho paura di aver dimenticato il gas acceso.", question: "What's the worry?", options: ["Leaving the gas on.", "Forgetting the keys.", "The gas being off.", "Missing a gas bill."], correctIndex: 0, explanation: "\"Il gas acceso\" = the gas on." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I've understood.", answer: "Credo di aver capito.", altAnswers: ["Penso di aver capito.", "Credo di avere capito."], explanation: "Past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad I came. (man)", answer: "Sono contento di essere venuto.", altAnswers: ["Sono felice di essere venuto."], explanation: "\"Essere venuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think you've made a mistake. (to a friend)", answer: "Credo che tu abbia sbagliato.", altAnswers: ["Penso che tu abbia sbagliato.", "Credo che tu abbia fatto un errore."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After arriving, we called our grandparents.", answer: "Dopo essere arrivati, abbiamo chiamato i nonni.", altAnswers: ["Dopo essere arrivate, abbiamo chiamato i nonni.", "Dopo essere arrivati, abbiamo telefonato ai nonni."], explanation: "\"Essere arrivati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid I've left the gas on.", answer: "Ho paura di aver dimenticato il gas acceso.", altAnswers: ["Ho paura di aver lasciato il gas acceso.", "Temo di aver lasciato il gas acceso."], explanation: "Same subject, past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She thinks she's lost her phone.", answer: "Crede di aver perso il telefono.", altAnswers: ["Pensa di aver perso il telefono.", "Crede di avere perso il telefono."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're sorry we arrived late.", answer: "Ci dispiace di essere arrivati tardi.", altAnswers: ["Ci dispiace di essere arrivati in ritardo.", "Ci dispiace essere arrivati tardi.", "Ci dispiace di essere arrivate tardi."], explanation: "\"Essere arrivati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm glad [I met] you. (woman speaking)", sentence: "Sono contenta di ___.", answer: "averti conosciuto", altAnswers: ["averti conosciuta", "averLa conosciuta", "averLa conosciuto"], explanation: "Pronoun attached to \"aver\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[After finishing] work, I went to the gym.", sentence: "___ il lavoro, sono andato in palestra.", answer: "Dopo aver finito", altAnswers: ["Dopo avere finito"], explanation: "\"Dopo\" + past infinitive." },
      { type: "multiple-choice", question: "Which is right for: I think I've forgotten something?", options: ["Credo di aver dimenticato qualcosa.", "Credo che io abbia dimenticato qualcosa.", "Credo che ho dimenticato qualcosa.", "Credo dimenticare qualcosa."], correctIndex: 0, explanation: "Same subject: past infinitive." },
      { type: "dictation", audio: "Credo di aver capito, ma ho paura di aver sbagliato l'esercizio.", explanation: "Two past infinitives." },
      { type: "speak", text: "Sono contenta di essere venuta, e mi dispiace di non averti chiamato prima.", prompt: "Say it in Italian (as a woman): I'm glad I came, and I'm sorry I didn't call you earlier.", tip: "a-VER-ti.", explanation: "\"Essere venuta\", \"averti chiamato\"." },
    ],
  },
  {
    slug: "b1-drill-past-subjunctive",
    level: "IT-B1",
    number: 4,
    title: "Drill: Past Subjunctive",
    summary: "Produce the past subjunctive at speed: abbia fatto, sia partita, si siano visti.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Auxiliary + participle",
        body: [
          "\"Abbia / abbiamo / abbiate / abbiano\" + participle, or \"sia / siamo / siate / siano\" + participle with agreement. Irregular participles as always: \"fatto, detto, visto, preso, messo, scritto, letto, venuto, rimasto\".",
        ],
        examples: [
          { es: "Penso che abbia detto la verità.", en: "I think he told the truth." },
          { es: "Spero che siate rimasti contenti.", en: "I hope you were happy with it." },
          { es: "È strano che non abbiano scritto.", en: "It's strange they haven't written." },
          { es: "Credo che si siano visti ieri.", en: "I think they saw each other yesterday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he told the truth.", answer: "Penso che abbia detto la verità.", altAnswers: ["Credo che abbia detto la verità."], explanation: "\"Abbia detto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange they haven't written.", answer: "È strano che non abbiano scritto.", explanation: "\"Abbiano scritto\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they saw each other yesterday.", answer: "Credo che si siano visti ieri.", altAnswers: ["Penso che si siano visti ieri.", "Credo che si siano viste ieri."], explanation: "Reciprocal: essere." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you've read the instructions. (plural)", answer: "Spero che abbiate letto le istruzioni.", explanation: "\"Abbiate letto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you lost your job. (to a friend)", answer: "Mi dispiace che tu abbia perso il lavoro.", explanation: "\"Abbia perso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems they've stayed in Rome.", answer: "Sembra che siano rimasti a Roma.", altAnswers: ["Pare che siano rimasti a Roma.", "Sembra che siano rimaste a Roma."], explanation: "\"Siano rimasti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt she's finished.", answer: "Dubito che abbia finito.", altAnswers: ["Dubito che lei abbia finito."], explanation: "\"Abbia finito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy you've found an apartment. (to a friend)", answer: "Sono contento che tu abbia trovato casa.", altAnswers: ["Sono contenta che tu abbia trovato casa.", "Sono contento che tu abbia trovato un appartamento.", "Sono contenta che tu abbia trovato un appartamento."], explanation: "\"Abbia trovato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible she's already gone to bed.", answer: "È possibile che sia già andata a letto.", altAnswers: ["Può darsi che sia già andata a letto."], explanation: "\"Sia andata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think we've taken the wrong bus.", answer: "Penso che abbiamo preso l'autobus sbagliato.", altAnswers: ["Credo che abbiamo preso l'autobus sbagliato.", "Penso che abbiamo sbagliato autobus."], explanation: "\"Abbiamo preso\": noi = same as the indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [put] the milk in the fridge.", sentence: "Spero che ___ il latte in frigo.", answer: "tu abbia messo", altAnswers: ["abbia messo"], explanation: "\"Mettere\" → \"messo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sorry your parents [didn't come].", sentence: "Mi dispiace che i tuoi genitori non ___.", answer: "siano venuti", explanation: "\"Siano venuti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems Elena [got engaged].", sentence: "Sembra che Elena ___.", answer: "si sia fidanzata", explanation: "Reflexive: \"si sia fidanzata\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although they [have apologized], I'm still angry.", sentence: "Benché ___, sono ancora arrabbiato.", answer: "si siano scusati", altAnswers: ["abbiano chiesto scusa"], explanation: "\"Scusarsi\": essere." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think she [has chosen] the red one.", sentence: "Penso che ___ quello rosso.", answer: "abbia scelto", explanation: "\"Scegliere\" → \"scelto\"." },
      { type: "multiple-choice", question: "\"Credo che le ragazze ___ già ___.\" (partire)", options: ["siano ... partite", "abbiano ... partito", "siano ... partiti", "sono ... partite"], correctIndex: 0, explanation: "Essere + feminine plural." },
      { type: "dictation", audio: "Sembra che si siano lasciati, ma non credo che l'abbiano detto a nessuno.", explanation: "\"Si siano lasciati\", \"l'abbiano detto\"." },
      { type: "dictation", audio: "Spero che abbiate mangiato bene e che vi sia piaciuto il vino.", explanation: "\"Abbiate mangiato\", \"sia piaciuto\"." },
      { type: "speak", text: "Mi dispiace che tu abbia perso il lavoro, ma sono contento che tu abbia già trovato qualcosa.", prompt: "Say it in Italian: I'm sorry you lost your job, but I'm glad you've already found something.", tip: "AB-bia: hold the double b.", explanation: "Two past subjunctives with avere." },
    ],
  },
  {
    slug: "b1-contrast-present-past-subjunctive",
    level: "IT-B1",
    number: 5,
    title: "Contrast Clinic: Sia or Sia Stato?",
    summary: "Pairs: penso che sia a casa / penso che sia stato a casa.",
    duration: "17 min",
    sections: [
      {
        heading: "When does the action happen?",
        body: [
          "The trigger is in the present; the question is when the other action happens. Same time or later: present subjunctive (\"Penso che sia a casa\" = I think he's at home now). Earlier: past subjunctive (\"Penso che sia stato a casa\" = I think he was / has been at home).",
          "Time words help: \"ieri\", \"la settimana scorsa\", \"già\", \"fa\" point to the past subjunctive; \"adesso\", \"domani\", \"stasera\" point to the present.",
        ],
        examples: [
          { es: "Penso che sia a casa.", en: "I think he's at home." },
          { es: "Penso che sia stato a casa tutto il giorno.", en: "I think he was at home all day." },
          { es: "Spero che arrivi domani.", en: "I hope she arrives tomorrow." },
          { es: "Spero che sia arrivata ieri.", en: "I hope she arrived yesterday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he was at home all day.", answer: "Penso che sia stato a casa tutto il giorno.", altAnswers: ["Credo che sia stato a casa tutto il giorno."], explanation: "Earlier: \"sia stato\"." },
          { type: "multiple-choice", question: "\"Spero che Anna ___ domani.\" (arrivare)", options: ["arrivi", "sia arrivata", "è arrivata", "arriva"], correctIndex: 0, explanation: "\"Domani\": present subjunctive." },
        ],
      },
      {
        heading: "Same verb, two times",
        body: [
          "Practice pairs with the same verb: \"Mi dispiace che tu stia male\" (you're sick now) / \"Mi dispiace che tu sia stato male\" (you were sick). \"È possibile che piova\" (it may rain) / \"È possibile che abbia piovuto\" (it may have rained).",
          "Weather verbs accept both auxiliaries: \"abbia piovuto\" and \"sia piovuto\" are equally correct. And watch \"sapere\": in the past it often means to find out, so \"Dubito che l'abbia saputo\" is I doubt he found out, while \"Dubito che lo sappia\" is I doubt he knows.",
        ],
        examples: [
          { es: "Mi dispiace che tu stia male.", en: "I'm sorry you're sick." },
          { es: "Mi dispiace che tu sia stato male.", en: "I'm sorry you were sick." },
          { es: "È possibile che piova.", en: "It may rain." },
          { es: "È possibile che abbia piovuto.", en: "It may have rained." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It may have rained.", answer: "È possibile che abbia piovuto.", altAnswers: ["È possibile che sia piovuto.", "Può darsi che abbia piovuto.", "Può darsi che sia piovuto."], explanation: "Weather verbs: avere or essere." },
          { type: "listen-choose", audio: "Mi dispiace che tu sia stato male.", question: "When was the person sick?", options: ["In the past.", "Now.", "Tomorrow.", "Never."], correctIndex: 0, explanation: "\"Sia stato\": past." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he's at home.", answer: "Penso che sia a casa.", altAnswers: ["Credo che sia a casa."], explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope she arrived yesterday.", answer: "Spero che sia arrivata ieri.", explanation: "Past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you're sick. (to a friend)", answer: "Mi dispiace che tu stia male.", explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you were sick. (to a man)", answer: "Mi dispiace che tu sia stato male.", explanation: "Past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt he knows.", answer: "Dubito che lo sappia.", explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt he found out.", answer: "Dubito che lo abbia saputo.", altAnswers: ["Dubito che l'abbia saputo."], explanation: "Past: \"abbia saputo\" = found out." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange she isn't answering.", answer: "È strano che non risponda.", explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange she didn't answer.", answer: "È strano che non abbia risposto.", explanation: "Past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [have] a good trip tomorrow. (plural)", sentence: "Spero che domani ___ buon viaggio.", answer: "facciate", explanation: "Future: present subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [had] a good trip. (plural)", sentence: "Spero che ___ buon viaggio.", answer: "abbiate fatto", explanation: "Past." },
      { type: "multiple-choice", question: "\"Credo che la settimana scorsa ___ a Milano.\"", options: ["sia andato", "vada", "andava", "va"], correctIndex: 0, explanation: "\"La settimana scorsa\": past." },
      { type: "speak", text: "Mi dispiace che tu sia stato male, e spero che adesso tu stia meglio.", prompt: "Say it in Italian: I'm sorry you were sick, and I hope you're feeling better now.", tip: "Past, then now: sia STA-to, then STI-a.", explanation: "Past subjunctive, then present." },
    ],
  },
  {
    slug: "b1-drill-subjunctive-tense-choice",
    level: "IT-B1",
    number: 6,
    title: "Drill: Present or Past Subjunctive?",
    summary: "Choose present or past subjunctive at speed, guided by time references.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Now / later or before?",
        body: [
          "Now or later: present subjunctive (\"sia, abbia, vada\"). Before now: past subjunctive (\"sia stato, abbia avuto, sia andato\"). Look for time words.",
        ],
        examples: [
          { es: "Penso che stasera vada al cinema.", en: "I think he's going to the movies tonight." },
          { es: "Penso che ieri sera sia andato al cinema.", en: "I think he went to the movies last night." },
          { es: "Spero che vi piaccia.", en: "I hope you like it." },
          { es: "Spero che vi sia piaciuto.", en: "I hope you liked it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he went to the movies last night.", answer: "Penso che ieri sera sia andato al cinema.", altAnswers: ["Credo che ieri sera sia andato al cinema.", "Penso che sia andato al cinema ieri sera."], explanation: "Past." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you liked it. (plural)", answer: "Spero che vi sia piaciuto.", altAnswers: ["Spero che vi sia piaciuta."], explanation: "\"Piacere\": essere." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he's going to the movies tonight.", answer: "Penso che stasera vada al cinema.", altAnswers: ["Credo che stasera vada al cinema.", "Penso che vada al cinema stasera."], explanation: "Later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you like it. (plural)", answer: "Spero che vi piaccia.", explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible he's already eaten.", answer: "È possibile che abbia già mangiato.", altAnswers: ["Può darsi che abbia già mangiato."], explanation: "\"Già\": past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible he'll eat with us.", answer: "È possibile che mangi con noi.", altAnswers: ["Può darsi che mangi con noi."], explanation: "Later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you're here. (to a friend)", answer: "Sono contento che tu sia qui.", altAnswers: ["Sono contenta che tu sia qui."], explanation: "Now." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you came. (to a man)", answer: "Sono contento che tu sia venuto.", altAnswers: ["Sono contenta che tu sia venuto."], explanation: "Past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think they've understood.", answer: "Non credo che abbiano capito.", altAnswers: ["Non penso che abbiano capito."], explanation: "Past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think they understand.", answer: "Non credo che capiscano.", altAnswers: ["Non penso che capiscano."], explanation: "Now." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the museum [closed] last year.", sentence: "Sembra che il museo ___ l'anno scorso.", answer: "abbia chiuso", altAnswers: ["sia stato chiuso"], explanation: "Past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the museum [closes] at five.", sentence: "Sembra che il museo ___ alle cinque.", answer: "chiuda", explanation: "Now / general." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although she [left] early, she arrived late.", sentence: "Benché ___ presto, è arrivata tardi.", answer: "sia partita", explanation: "Past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope it [didn't rain] at the wedding.", sentence: "Spero che al matrimonio non ___.", answer: "abbia piovuto", altAnswers: ["sia piovuto"], explanation: "Past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope it [doesn't rain] at the wedding.", sentence: "Spero che al matrimonio non ___.", answer: "piova", explanation: "Later." },
      { type: "multiple-choice", question: "\"Mi dispiace che ieri non ___ venire.\" (tu, potere)", options: ["tu abbia potuto", "tu possa", "puoi", "hai potuto"], correctIndex: 0, explanation: "\"Ieri\": past subjunctive. (With \"venire\", \"tu sia potuto\" is also correct.)" },
      { type: "dictation", audio: "Spero che tu abbia dormito bene e che oggi tu sia meno stanco.", explanation: "Past, then now." },
      { type: "dictation", audio: "Penso che sia partito ieri e che torni domenica.", explanation: "Past, then later." },
      { type: "speak", text: "Spero che il viaggio vi sia piaciuto e che torniate presto a trovarci.", prompt: "Say it in Italian: I hope you enjoyed the trip and that you come back to see us soon. (plural)", tip: "pia-CIU-to, tor-NIA-te.", explanation: "Past, then later." },
    ],
  },
  {
    slug: "b1-error-hunt-past-subjunctive",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Past Subjunctive",
    summary: "Fix past subjunctive mistakes: penso che è partito ieri (writing), spero che hai dormito bene, credo che io abbia sbagliato.",
    duration: "17 min",
    sections: [
      {
        heading: "Oliver's thank-you email",
        body: [
          "Oliver stayed with an Italian family and writes to thank them. \"Spero che avete ricevuto il mio regalo\": after \"spero che\" use the subjunctive: \"abbiate ricevuto\". \"Penso che Giorgio è partito ieri per Londra\": in writing, \"sia partito\".",
          "\"Credo che io abbia dimenticato un maglione\": same subject, so \"Credo di aver dimenticato un maglione\".",
        ],
        examples: [
          { es: "Spero che abbiate ricevuto il mio regalo.", en: "I hope you've received my present. (not: avete ricevuto)" },
          { es: "Penso che Giorgio sia partito ieri per Londra.", en: "I think Giorgio left for London yesterday. (in writing, not: è partito)" },
          { es: "Credo di aver dimenticato un maglione.", en: "I think I've left a sweater behind. (not: credo che io abbia)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Spero che avete ricevuto il mio regalo\". Write it correctly: I hope you've received my present.", source: "I hope you've received my present. (plural)", answer: "Spero che abbiate ricevuto il mio regalo.", explanation: "\"Abbiate ricevuto\"." },
          { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Credo che io abbia dimenticato un maglione\". Write it correctly: I think I've left a sweater behind.", source: "I think I've left a sweater behind.", answer: "Credo di aver dimenticato un maglione.", altAnswers: ["Credo di avere dimenticato un maglione.", "Penso di aver dimenticato un maglione."], explanation: "Same subject." },
        ],
      },
      {
        heading: "Auxiliary and agreement",
        body: [
          "\"Spero che la nonna abbia stata bene\": \"stare\" takes \"essere\": \"sia stata\". \"Sono contento che vi siete divertiti\": subjunctive \"vi siate divertiti\". And \"Mi dispiace che Sara sia partito presto\": agreement, \"sia partita\".",
        ],
        examples: [
          { es: "Spero che la nonna sia stata bene.", en: "I hope Grandma has been well. (not: abbia stata)" },
          { es: "Sono contento che vi siate divertiti.", en: "I'm glad you had fun. (not: vi siete)" },
          { es: "Mi dispiace che Sara sia partita presto.", en: "I'm sorry Sara left early. (not: partito)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Sono contento che vi siete divertiti\". Write it correctly: I'm glad you had fun.", source: "I'm glad you had fun. (plural)", answer: "Sono contento che vi siate divertiti.", altAnswers: ["Sono felice che vi siate divertiti."], explanation: "\"Vi siate\"." },
          { type: "multiple-choice", question: "Which is correct?", options: ["Spero che la nonna sia stata bene.", "Spero che la nonna abbia stata bene.", "Spero che la nonna sia stato bene.", "Spero che la nonna è stata bene."], correctIndex: 0, explanation: "Essere + agreement + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Penso che Giorgio è partito ieri\". Write it correctly for an email: I think Giorgio left yesterday.", source: "I think Giorgio left yesterday.", answer: "Penso che Giorgio sia partito ieri.", altAnswers: ["Credo che Giorgio sia partito ieri."], explanation: "\"Sia partito\"." },
      { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Spero che hai dormito bene\" in a note to the son. Write it correctly: I hope you slept well.", source: "I hope you slept well. (to a friend)", answer: "Spero che tu abbia dormito bene.", altAnswers: ["Spero che abbia dormito bene."], explanation: "\"Abbia dormito\"." },
      { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Mi dispiace che Sara sia partito presto\". Write it correctly: I'm sorry Sara left early.", source: "I'm sorry Sara left early.", answer: "Mi dispiace che Sara sia partita presto.", explanation: "Agreement." },
      { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Sono contento che io sia venuto\". Write it correctly: I'm glad I came.", source: "I'm glad I came.", answer: "Sono contento di essere venuto.", altAnswers: ["Sono felice di essere venuto."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Oliver wrote \"È possibile che ho lasciato le chiavi\". Write it correctly: I may have left the keys.", source: "I may have left the keys.", answer: "È possibile che io abbia lasciato le chiavi.", altAnswers: ["Può darsi che io abbia lasciato le chiavi.", "Forse ho lasciato le chiavi."], explanation: "\"Io abbia lasciato\" (impersonal trigger, so \"che io\" is fine)." },
      { type: "translate", direction: "en-es", prompt: "Oliver wrote \"Spero che la nonna abbia stata bene\". Write it correctly: I hope Grandma has been well.", source: "I hope Grandma has been well.", answer: "Spero che la nonna sia stata bene.", altAnswers: ["Spero che la nonna sia stata un po' meglio."], explanation: "\"Sia stata\"." },
      { type: "fill-blank", prompt: "Oliver wrote \"che è piaciuto\". Write the Italian for the bold words.", en: "I hope you [liked] the tea.", sentence: "Spero che il tè vi ___.", answer: "sia piaciuto", explanation: "\"Piacere\": essere + subjunctive." },
      { type: "fill-blank", prompt: "Oliver wrote \"che hanno fatto\". Write the Italian for the bold words.", en: "I doubt the kids [did] their homework.", sentence: "Dubito che i ragazzi ___ i compiti.", answer: "abbiano fatto", explanation: "\"Abbiano fatto\"." },
      { type: "word-order", prompt: "Put the words in order to say: I think I've left a sweater behind.", words: ["Credo", "di", "aver", "dimenticato", "un", "maglione."], translation: "I think I've left a sweater behind.", explanation: "Past infinitive." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["Spero che abbiate ricevuto.", "Spero che avete ricevuto.", "Credo di aver sbagliato.", "Credo che io abbia sbagliato.", "Mi dispiace che sia partita.", "Spero che abbia stata bene."], correctIndexes: [0, 2, 4], explanation: "Subjunctive, past infinitive, essere + agreement." },
      { type: "dictation", audio: "Spero che abbiate ricevuto il regalo e che vi sia piaciuto.", explanation: "\"Abbiate ricevuto\", \"sia piaciuto\"." },
      { type: "speak", text: "Sono contento di essere venuto e spero che vi siate divertiti anche voi.", prompt: "Say Oliver's corrected sentence: I'm glad I came, and I hope you had fun too.", tip: "di-ver-TI-ti.", explanation: "Past infinitive, then past subjunctive." },
    ],
  },
  {
    slug: "b1-dialogue-lab-gossip",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: Office Gossip",
    summary: "Pare che Marco abbia trovato un altro lavoro; dubito che l'abbia detto al capo.",
    duration: "17 min",
    sections: [
      {
        heading: "At the coffee machine",
        body: [
          "Two colleagues, Federica and Paolo, at the coffee machine. Federica: \"Hai sentito? Pare che Marco abbia trovato un altro lavoro.\" Paolo: \"Davvero? Dubito che l'abbia già detto al capo.\" Federica: \"Infatti. Ma mi sembra che ieri abbia passato un'ora in ufficio da lui, a porta chiusa...\"",
          "Paolo: \"Allora è possibile che gliel'abbia detto. Peccato, mi dispiace che se ne vada.\"",
        ],
        examples: [
          { es: "Pare che Marco abbia trovato un altro lavoro.", en: "Apparently Marco has found another job." },
          { es: "Dubito che l'abbia già detto al capo.", en: "I doubt he's told the boss yet." },
          { es: "Mi sembra che ieri abbia passato un'ora da lui.", en: "I think he spent an hour with him yesterday." },
          { es: "È possibile che gliel'abbia detto.", en: "He may have told him." },
          { es: "Mi dispiace che se ne vada.", en: "I'm sorry he's leaving." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently Marco has found another job.", answer: "Pare che Marco abbia trovato un altro lavoro.", altAnswers: ["Sembra che Marco abbia trovato un altro lavoro."], explanation: "\"Pare che\" + past subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt he's told the boss yet.", answer: "Dubito che l'abbia già detto al capo.", altAnswers: ["Dubito che lo abbia già detto al capo.", "Dubito che l'abbia detto al capo."], explanation: "\"L'abbia detto\"." },
        ],
      },
      {
        heading: "The truth",
        body: [
          "Marco arrives. Paolo: \"Marco! È vero che te ne vai?\" Marco: \"Ma no! Mi hanno solo proposto un progetto nuovo qui. Sono contento di essere rimasto, anzi. Ma vedo che le voci girano veloci!\" Federica: \"Scusa... credo di aver capito male.\"",
        ],
        examples: [
          { es: "È vero che te ne vai?", en: "Is it true you're leaving?" },
          { es: "Sono contento di essere rimasto.", en: "I'm glad I stayed." },
          { es: "Le voci girano veloci!", en: "Rumors travel fast!" },
          { es: "Credo di aver capito male.", en: "I think I misunderstood." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think I misunderstood.", answer: "Credo di aver capito male.", altAnswers: ["Penso di aver capito male.", "Credo di avere capito male."], explanation: "Same subject: past infinitive." },
          { type: "listen-choose", audio: "Sono contento di essere rimasto.", question: "What does Marco say?", options: ["He's glad he stayed.", "He's leaving.", "He's sorry he stayed.", "He hasn't decided."], correctIndex: 0, explanation: "\"Essere rimasto\" = having stayed." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he spent an hour with him yesterday.", answer: "Mi sembra che ieri abbia passato un'ora da lui.", altAnswers: ["Penso che ieri abbia passato un'ora da lui.", "Mi sembra che ieri abbia passato un'ora con lui."], explanation: "\"Abbia passato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He may have told him.", answer: "È possibile che gliel'abbia detto.", altAnswers: ["Può darsi che gliel'abbia detto.", "È possibile che glielo abbia detto."], explanation: "\"Gliel'abbia detto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry he's leaving.", answer: "Mi dispiace che se ne vada.", altAnswers: ["Mi dispiace che vada via."], explanation: "Present: \"se ne vada\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it true you're leaving? (to a friend)", answer: "È vero che te ne vai?", altAnswers: ["È vero che vai via?"], explanation: "\"È vero che\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad I stayed. (man)", answer: "Sono contento di essere rimasto.", altAnswers: ["Sono contento di essere restato.", "Sono felice di essere rimasto."], explanation: "Past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rumors travel fast!", answer: "Le voci girano veloci!", altAnswers: ["Le voci girano in fretta!", "Le voci corrono veloci!"], explanation: "\"Voci\" = rumors. \"Le voci corrono\" is also common." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the boss [has offered] him a new project.", sentence: "Sembra che il capo gli ___ un progetto nuovo.", answer: "abbia proposto", altAnswers: ["abbia offerto"], explanation: "\"Proporre\" → \"proposto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't think Federica [understood] correctly.", sentence: "Non credo che Federica ___ bene.", answer: "abbia capito", explanation: "\"Abbia capito\"." },
      { type: "word-order", prompt: "Put the words in order to say: Apparently he's found another job.", words: ["Pare", "che", "abbia", "trovato", "un", "altro", "lavoro."], translation: "Apparently he's found another job.", explanation: "\"Pare che\"." },
      { type: "matching", instructions: "Match each phrase to its function in gossip.", pairs: [{ left: "Hai sentito?", right: "opening the gossip" }, { left: "Pare che...", right: "reporting a rumor" }, { left: "Dubito che...", right: "expressing doubt" }, { left: "Credo di aver capito male.", right: "admitting a mistake" }], explanation: "The language of gossip." },
      { type: "dictation", audio: "Pare che Marco abbia trovato un altro lavoro.", explanation: "\"Abbia trovato\"." },
      { type: "speak", text: "Hai sentito? Pare che Marco abbia trovato un altro lavoro, ma dubito che l'abbia detto al capo.", prompt: "Spread the rumor in Italian: Have you heard? Apparently Marco has found another job, but I doubt he's told the boss.", tip: "PA-re: stress on the first syllable.", explanation: "Two past subjunctives." },
    ],
  },
  {
    slug: "b1-listening-lab-past-guesses",
    level: "IT-B1",
    number: 9,
    title: "Listening Lab: What Do You Think Happened?",
    summary: "Speculating about events: a missing neighbor and a mysterious package.",
    duration: "18 min",
    sections: [
      {
        heading: "Where's Signor Bruni?",
        body: [
          "Two neighbors in a building in Genoa haven't seen Signor Bruni for a week. \"Secondo me è andato dalla figlia a Torino.\" \"Può darsi, ma è strano che non abbia detto niente. Di solito saluta tutti.\" \"Forse è stato male... speriamo di no.\" \"Mah, il portiere dice che ha visto un taxi lunedì mattina. Credo che sia partito per le vacanze.\"",
          "Notice: \"secondo me è andato\" and \"forse è stato male\" use the indicative; \"è strano che non abbia detto\" and \"credo che sia partito\" use the past subjunctive.",
        ],
        examples: [
          { es: "Secondo me è andato dalla figlia a Torino.", en: "My guess is he's gone to his daughter's in Turin." },
          { es: "È strano che non abbia detto niente.", en: "It's strange he didn't say anything." },
          { es: "Forse è stato male.", en: "Maybe he was sick." },
          { es: "Credo che sia partito per le vacanze.", en: "I think he's gone on vacation." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "È strano che non abbia detto niente.", question: "Why is it strange?", options: ["He didn't say anything.", "He said too much.", "He's still at home.", "He took a taxi."], correctIndex: 0, explanation: "\"Non abbia detto niente\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange he didn't say anything.", answer: "È strano che non abbia detto niente.", altAnswers: ["È strano che non abbia detto nulla."], explanation: "\"Abbia detto\"." },
        ],
      },
      {
        heading: "The package",
        body: [
          "A week later Signor Bruni is back, and a huge package arrives. \"Pare che abbia comprato una barca!\" \"Ma figurati! Dubito che una barca entri in un pacco. Penso che abbia ordinato una televisione nuova.\" Bruni opens the door: \"È un regalo di mia figlia: una poltrona massaggiante!\"",
        ],
        examples: [
          { es: "Pare che abbia comprato una barca!", en: "Apparently he's bought a boat!" },
          { es: "Dubito che una barca entri in un pacco.", en: "I doubt a boat fits in a package." },
          { es: "Penso che abbia ordinato una televisione nuova.", en: "I think he's ordered a new TV." },
          { es: "È un regalo di mia figlia.", en: "It's a present from my daughter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he's ordered a new TV.", answer: "Penso che abbia ordinato una televisione nuova.", altAnswers: ["Credo che abbia ordinato una televisione nuova.", "Penso che abbia ordinato una tv nuova.", "Penso che abbia ordinato un televisore nuovo."], explanation: "\"Abbia ordinato\"." },
          { type: "dictation", audio: "Pare che abbia comprato una barca!", explanation: "\"Abbia comprato\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Credo che sia partito per le vacanze.", question: "What does the neighbor think?", options: ["He's gone on vacation.", "He's moved.", "He's sick.", "He's at work."], correctIndex: 0, explanation: "\"Sia partito per le vacanze\"." },
      { type: "listen-choose", audio: "Dubito che una barca entri in un pacco.", question: "Why is the neighbor skeptical?", options: ["A boat wouldn't fit in a package.", "Bruni hates boats.", "Boats are too expensive.", "The package is too small for a TV."], correctIndex: 0, explanation: "\"Entrare\" here = to fit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My guess is he's gone to his daughter's in Turin.", answer: "Secondo me è andato dalla figlia a Torino.", altAnswers: ["Secondo me è andato da sua figlia a Torino.", "Per me è andato dalla figlia a Torino."], explanation: "\"Secondo me\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe he was sick.", answer: "Forse è stato male.", altAnswers: ["Può darsi che sia stato male."], explanation: "\"Forse\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he's gone on vacation.", answer: "Credo che sia partito per le vacanze.", altAnswers: ["Penso che sia partito per le vacanze.", "Credo che sia andato in vacanza."], explanation: "\"Sia partito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently he's bought a boat!", answer: "Pare che abbia comprato una barca!", altAnswers: ["Sembra che abbia comprato una barca!"], explanation: "\"Abbia comprato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a present from my daughter.", answer: "È un regalo di mia figlia.", altAnswers: ["È un regalo da parte di mia figlia."], explanation: "\"Di mia figlia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doorman says he saw a taxi on Monday morning.", answer: "Il portiere dice che ha visto un taxi lunedì mattina.", altAnswers: ["Il portinaio dice che ha visto un taxi lunedì mattina."], explanation: "\"Dire che\" + indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's possible his daughter [sent] it.", sentence: "È possibile che l'___ sua figlia.", answer: "abbia mandato", altAnswers: ["abbia spedito"], explanation: "\"Abbia mandato\"." },
      { type: "matching", instructions: "Match each guess to its grammar.", pairs: [{ left: "Secondo me è andato...", right: "indicative after secondo me" }, { left: "Forse è stato male.", right: "indicative after forse" }, { left: "Credo che sia partito.", right: "past subjunctive after credo che" }, { left: "Dubito che entri.", right: "present subjunctive after dubito che" }], explanation: "Four ways to guess." },
      { type: "dictation", audio: "Penso che abbia ordinato una televisione nuova.", explanation: "\"Abbia ordinato\"." },
      { type: "speak", text: "Secondo me è andato dalla figlia, ma è strano che non abbia salutato nessuno.", prompt: "Give your guess in Italian: My guess is he's gone to his daughter's, but it's strange he didn't say goodbye to anyone.", tip: "sa-lu-TA-to.", explanation: "Indicative, then past subjunctive." },
    ],
  },
  {
    slug: "b1-mission-apology",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: An Apology",
    summary: "Write an apology: mi dispiace che tu abbia dovuto aspettare.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "What went wrong",
        body: [
          "Your mission: you organized a dinner for your Italian friend Laura's birthday, but the restaurant lost the reservation and everyone waited forty minutes outside. Write her a message to apologize. Use \"mi dispiace che\" + past subjunctive for what happened to her, and \"mi dispiace di\" + past infinitive for your own mistakes.",
        ],
        examples: [
          { es: "Mi dispiace che tu abbia dovuto aspettare.", en: "I'm sorry you had to wait." },
          { es: "Mi dispiace di non aver controllato la prenotazione.", en: "I'm sorry I didn't check the reservation." },
          { es: "Mi dispiace che la serata sia cominciata così male.", en: "I'm sorry the evening started so badly." },
          { es: "Spero che alla fine ti sia divertita.", en: "I hope you enjoyed yourself in the end." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you had to wait. (to a friend)", answer: "Mi dispiace che tu abbia dovuto aspettare.", explanation: "\"Abbia dovuto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry I didn't check the reservation.", answer: "Mi dispiace di non aver controllato la prenotazione.", altAnswers: ["Mi dispiace non aver controllato la prenotazione.", "Mi dispiace di non avere controllato la prenotazione."], explanation: "Same subject: past infinitive." },
        ],
      },
      {
        heading: "Making it up",
        body: [
          "End with a positive note and an offer: \"Sono contento che gli altri siano rimasti\" (I'm glad the others stayed), \"La prossima volta offro io\" (next time it's on me), \"Spero che tu non sia arrabbiata con me\".",
        ],
        examples: [
          { es: "Sono contento che gli altri siano rimasti.", en: "I'm glad the others stayed." },
          { es: "Spero che tu non sia arrabbiata con me.", en: "I hope you're not angry with me." },
          { es: "La prossima volta offro io!", en: "Next time it's on me!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Next time it's on me!", answer: "La prossima volta offro io!", explanation: "\"Offrire\" = to pay for others." },
          { type: "listen-choose", audio: "Spero che tu non sia arrabbiata con me.", question: "What does the writer hope?", options: ["That Laura isn't angry.", "That Laura was angry.", "That Laura will be happy tomorrow.", "That Laura enjoyed the food."], correctIndex: 0, explanation: "Present: \"non sia arrabbiata\" now." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry the evening started so badly.", answer: "Mi dispiace che la serata sia cominciata così male.", altAnswers: ["Mi dispiace che la serata sia iniziata così male."], explanation: "\"Sia cominciata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you enjoyed yourself in the end. (to a woman)", answer: "Spero che alla fine ti sia divertita.", altAnswers: ["Spero che alla fine tu ti sia divertita."], explanation: "\"Ti sia divertita\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad the others stayed.", answer: "Sono contento che gli altri siano rimasti.", altAnswers: ["Sono contenta che gli altri siano rimasti.", "Sono contento che gli altri siano restati."], explanation: "\"Siano rimasti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you're not angry with me. (to a woman)", answer: "Spero che tu non sia arrabbiata con me.", explanation: "Now: present subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the restaurant lost the reservation.", answer: "Credo che il ristorante abbia perso la prenotazione.", altAnswers: ["Penso che il ristorante abbia perso la prenotazione."], explanation: "\"Abbia perso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry I chose that restaurant.", answer: "Mi dispiace di aver scelto quel ristorante.", altAnswers: ["Mi dispiace aver scelto quel ristorante.", "Mi dispiace di avere scelto quel ristorante."], explanation: "Past infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sorry your friends [got cold] outside.", sentence: "Mi dispiace che i tuoi amici ___ freddo fuori.", answer: "abbiano preso", altAnswers: ["abbiano avuto", "abbiano patito"], explanation: "\"Prendere freddo\" = to get cold." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's strange that they [didn't call] us.", sentence: "È strano che non ci ___.", answer: "abbiano chiamato", altAnswers: ["abbiano chiamati", "abbiano telefonato"], explanation: "\"Abbiano chiamato\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'm sorry you had to wait.", words: ["Mi", "dispiace", "che", "tu", "abbia", "dovuto", "aspettare."], translation: "I'm sorry you had to wait.", explanation: "\"Abbia dovuto\"." },
      { type: "multiple-choice", question: "Which is about YOUR mistake?", options: ["Mi dispiace di non aver controllato.", "Mi dispiace che tu abbia aspettato.", "Mi dispiace che sia cominciata male.", "Mi dispiace che abbiano perso la prenotazione."], correctIndex: 0, explanation: "Same subject: \"di\" + past infinitive." },
      { type: "dictation", audio: "Mi dispiace che tu abbia dovuto aspettare quaranta minuti.", explanation: "\"Abbia dovuto\"." },
      { type: "speak", text: "Cara Laura, mi dispiace tantissimo che tu abbia dovuto aspettare, e mi dispiace di non aver controllato la prenotazione. La prossima volta offro io!", prompt: "Read your apology aloud.", tip: "tan-TIS-si-mo.", explanation: "\"Che tu abbia dovuto\" vs \"di non aver controllato\"." },
    ],
  },
];

export const IT_B1_U12_WRITING: WriteExercise = {
  type: "write",
  prompt: "A friend has just come back from a trip that didn't go as planned (a lost suitcase, rain, a canceled flight). Write them a message: react to what happened (mi dispiace che..., è incredibile che...), guess what went wrong (penso che..., è possibile che...), and say something about yourself in the past (sono contento di..., credo di...).",
  minWords: 60,
  maxWords: 130,
  rubric: [
    "Forms the past subjunctive correctly (abbia + participle, sia + participle with agreement)",
    "Uses the past subjunctive after present-tense triggers for past events, and the present subjunctive for now",
    "Uses di + past infinitive when the subject is the same (sono contento di essere rimasto, credo di aver capito)",
    "Writes a natural, sympathetic informal message",
  ],
  modelAnswer: "Ciao Giulia! Ho appena letto il tuo messaggio: mi dispiace tantissimo che la vacanza sia andata così male. È incredibile che la compagnia aerea abbia perso la tua valigia proprio il primo giorno! Penso che l'abbiano mandata a un altro aeroporto: è possibile che te la riportino a casa in questi giorni. E mi dispiace che abbia piovuto tutta la settimana. Io invece sono contenta di essere rimasta a casa, anche se credo di aver lavorato troppo! Spero che adesso tu stia meglio. Ci vediamo sabato per un aperitivo? Un abbraccio, Elena",
  explanation: "Past events after present triggers take the past subjunctive: \"sia andata\", \"abbia perso\", \"l'abbiano mandata\" (agreement with \"la valigia\"), \"abbia piovuto\". Present or future events take the present subjunctive: \"te la riportino\", \"tu stia meglio\". When the writer is the subject of both verbs, she uses the past infinitive: \"di essere rimasta\", \"di aver lavorato\".",
};
