// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u09.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 9: The Subjunctive, Part 3: Wishes, Feelings and Doubts.
// Volere / preferire / sperare / desiderare che, essere contento che, mi
// dispiace che, non vedo l'ora che, avere paura / temere che, dubitare che,
// non sapere se; infinitive with the same subject.
// Conventions: docs/italian-course/authoring.md.
export const IT_B1_U09: Lesson[] = [
  {
    slug: "b1-subjunctive-wishes",
    level: "IT-B1",
    number: 1,
    title: "I Want You To: Voglio Che",
    summary: "Voglio che tu venga, preferisco che restiate, spero che stia bene; English want + object + to.",
    duration: "17 min",
    sections: [
      {
        heading: "Want someone to do something",
        body: [
          "English says I want you to come: verb + object + to. Italian can't do this. It says I want that you come: \"Voglio che tu venga\". The verb after \"che\" is in the subjunctive, because it's a wish, not a fact.",
          "The same pattern works with \"preferire\" (\"Preferisco che restiate qui\") and the more formal \"desiderare\" (\"Desidero che sappiate la verità\"). The softer \"vorrei che\" needs a different tense, which comes later in the course, so for now stick to \"voglio che\" and \"preferisco che\".",
        ],
        examples: [
          { es: "Voglio che tu venga con noi.", en: "I want you to come with us." },
          { es: "Preferisco che restiate a casa.", en: "I'd rather you stayed at home. (plural)" },
          { es: "Mio padre vuole che io faccia l'avvocato.", en: "My father wants me to be a lawyer." },
          { es: "Desideriamo che i clienti siano soddisfatti.", en: "We want our customers to be satisfied." },
          { es: "Non voglio che tu ti preoccupi.", en: "I don't want you to worry." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to come with us. (to a friend)", answer: "Voglio che tu venga con noi.", explanation: "Want + object + to = \"voglio che\" + subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't want you to worry. (to a friend)", answer: "Non voglio che tu ti preoccupi.", altAnswers: ["Non voglio che ti preoccupi."], explanation: "\"Preoccuparsi\" → \"ti preoccupi\"." },
        ],
      },
      {
        heading: "Spero che: hope",
        body: [
          "\"Sperare che\" (to hope that) also takes the subjunctive: \"Spero che stia bene\", \"Speriamo che non piova\". \"Speriamo!\" on its own means let's hope so.",
          "For a hope about the future, the future indicative is also correct and common: \"Spero che verrai\" = \"Spero che tu venga\".",
        ],
        examples: [
          { es: "Spero che tua nonna stia bene.", en: "I hope your grandmother is well." },
          { es: "Speriamo che non piova!", en: "Let's hope it doesn't rain!" },
          { es: "Spero che verrai alla festa.", en: "I hope you'll come to the party." },
          { es: "Speriamo che il volo non sia in ritardo.", en: "Let's hope the flight isn't delayed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's hope it doesn't rain!", answer: "Speriamo che non piova!", altAnswers: ["Speriamo che non pioverà!"], explanation: "\"Speriamo che\" + \"piova\"." },
          { type: "listen-choose", audio: "Spero che verrai alla festa.", question: "What does the speaker hope?", options: ["That you'll come to the party.", "That they'll go to the party.", "That the party is cancelled.", "That you came to the party."], correctIndex: 0, explanation: "\"Verrai\": future, you." },
        ],
      },
      {
        heading: "Same subject: the infinitive",
        body: [
          "If the person who wants is also the one who acts, use the infinitive: \"Voglio venire\" (I want to come), \"Preferisco restare\". With \"sperare\", add \"di\": \"Spero di venire\" (I hope to come), not \"spero che io venga\". This unit's contrast clinic practises this choice.",
        ],
        examples: [
          { es: "Voglio venire anch'io.", en: "I want to come too." },
          { es: "Spero di finire entro venerdì.", en: "I hope to finish by Friday." },
          { es: "Preferisco restare qui.", en: "I'd rather stay here." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope to finish by Friday.", answer: "Spero di finire entro venerdì.", explanation: "Same subject: \"spero di\" + infinitive." },
          { type: "multiple-choice", question: "Which means: I want to come?", options: ["Voglio venire.", "Voglio che venga.", "Voglio che io venga.", "Voglio di venire."], correctIndex: 0, explanation: "\"Volere\" + bare infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather you stayed at home. (plural)", answer: "Preferisco che restiate a casa.", altAnswers: ["Preferisco che rimaniate a casa."], explanation: "\"Preferisco che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My father wants me to be a lawyer.", answer: "Mio padre vuole che io faccia l'avvocato.", altAnswers: ["Mio padre vuole che io diventi avvocato.", "Mio papà vuole che io faccia l'avvocato."], explanation: "\"Che io faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope your grandmother is well. (to a friend)", answer: "Spero che tua nonna stia bene.", explanation: "\"Stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's hope the flight isn't delayed.", answer: "Speriamo che il volo non sia in ritardo.", altAnswers: ["Speriamo che il volo non abbia ritardo."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to come too.", answer: "Voglio venire anch'io.", altAnswers: ["Voglio venire anche io.", "Anch'io voglio venire."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher wants us to speak only Italian.", answer: "L'insegnante vuole che parliamo solo italiano.", altAnswers: ["La professoressa vuole che parliamo solo italiano.", "Il professore vuole che parliamo solo italiano.", "L'insegnante vuole che parliamo solo in italiano."], explanation: "\"Parliamo\": noi subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather stay here.", answer: "Preferisco restare qui.", altAnswers: ["Preferisco rimanere qui.", "Preferisco stare qui."], explanation: "Same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We want our customers [to be] satisfied.", sentence: "Desideriamo che i clienti ___ soddisfatti.", answer: "siano", explanation: "\"Siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you want me [to call] you tomorrow? (to a friend)", sentence: "Vuoi che ___ domani?", answer: "ti chiami", altAnswers: ["io ti chiami"], explanation: "\"Vuoi che ti chiami?\" = Shall I call you?" },
      { type: "word-order", prompt: "Put the words in order to say: I want you to tell me the truth.", words: ["Voglio", "che", "tu", "mi", "dica", "la", "verità."], translation: "I want you to tell me the truth.", explanation: "\"Che tu mi dica\"." },
      { type: "dictation", audio: "Voglio che tu sia felice e spero che tu venga presto a trovarci.", explanation: "\"Sia\", \"venga\"." },
      { type: "speak", text: "Non voglio che tu ti preoccupi: spero di tornare prima di mezzanotte.", prompt: "Say it in Italian: I don't want you to worry: I hope to be back before midnight.", tip: "pre-oc-CU-pi.", explanation: "\"Che tu ti preoccupi\" vs \"spero di tornare\"." },
    ],
  },
  {
    slug: "b1-subjunctive-feelings",
    level: "IT-B1",
    number: 2,
    title: "Feelings: Sono Contento Che",
    summary: "Sono contento che tu sia qui, mi dispiace che non possa venire, non vedo l'ora che arrivino.",
    duration: "17 min",
    sections: [
      {
        heading: "Happy, sorry, impatient",
        body: [
          "Feelings about someone else's actions take \"che\" + subjunctive: \"Sono contento che tu sia qui\" (I'm glad you're here), \"Sono felice che venga anche Marco\". For feelings about past events you'll need the past subjunctive (Unit 12).",
          "\"Mi dispiace che\" (I'm sorry that) works like \"piacere\": \"Mi dispiace che tu non possa venire\". \"Non vedo l'ora che\" (I can't wait for) is very common: \"Non vedo l'ora che arrivino le vacanze\".",
        ],
        examples: [
          { es: "Sono contento che tu sia qui.", en: "I'm glad you're here." },
          { es: "Sono felice che venga anche Marco.", en: "I'm happy Marco is coming too." },
          { es: "Mi dispiace che tu non possa venire.", en: "I'm sorry you can't come." },
          { es: "Non vedo l'ora che arrivino le vacanze.", en: "I can't wait for the holidays to come." },
          { es: "Ci dispiace che il ristorante sia chiuso.", en: "We're sorry the restaurant is closed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you can't come. (to a friend)", answer: "Mi dispiace che tu non possa venire.", altAnswers: ["Mi dispiace che non possa venire."], explanation: "\"Mi dispiace che\" + \"possa\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't wait for the holidays to come.", answer: "Non vedo l'ora che arrivino le vacanze.", altAnswers: ["Non vedo l'ora che comincino le vacanze."], explanation: "\"Non vedo l'ora che\" + subjunctive." },
        ],
      },
      {
        heading: "Same subject: di + infinitive",
        body: [
          "If you feel something about your own action, use \"di\" + infinitive: \"Sono contento di essere qui\" (I'm glad to be here), \"Mi dispiace di non poter venire\", \"Non vedo l'ora di vederti\".",
          "Compare: \"Sono contenta di partire\" (I'm leaving and I'm happy) / \"Sono contenta che tu parta\" (you're leaving and I'm happy).",
        ],
        examples: [
          { es: "Sono contento di essere qui.", en: "I'm glad to be here." },
          { es: "Mi dispiace di non poter venire.", en: "I'm sorry I can't come." },
          { es: "Non vedo l'ora di vederti!", en: "I can't wait to see you!" },
          { es: "Sono contenta che tu parta finalmente in vacanza.", en: "I'm glad you're finally going on holiday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't wait to see you! (to a friend)", answer: "Non vedo l'ora di vederti!", explanation: "Same subject: \"di vederti\"." },
          { type: "listen-choose", audio: "Mi dispiace di non poter venire.", question: "Who can't come?", options: ["The speaker.", "The listener.", "Someone else.", "Everyone."], correctIndex: 0, explanation: "\"Di non poter\": same subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you're here. (to a friend)", answer: "Sono contento che tu sia qui.", altAnswers: ["Sono contenta che tu sia qui.", "Sono felice che tu sia qui."], explanation: "\"Tu sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy Marco is coming too.", answer: "Sono felice che venga anche Marco.", altAnswers: ["Sono contento che venga anche Marco.", "Sono contenta che venga anche Marco.", "Sono felice che anche Marco venga."], explanation: "\"Venga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're sorry the restaurant is closed.", answer: "Ci dispiace che il ristorante sia chiuso.", explanation: "\"Ci dispiace che\" + \"sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad to be here.", answer: "Sono contento di essere qui.", altAnswers: ["Sono contenta di essere qui.", "Sono felice di essere qui."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry I can't come.", answer: "Mi dispiace di non poter venire.", altAnswers: ["Mi dispiace di non potere venire.", "Mi dispiace non poter venire."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The kids can't wait for Christmas to arrive.", answer: "I bambini non vedono l'ora che arrivi Natale.", explanation: "\"Arrivi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you feel bad. (to a friend)", answer: "Mi dispiace che tu stia male.", explanation: "\"Stia male\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm glad you [like] the city. (plural)", sentence: "Sono contento che la città vi ___.", answer: "piaccia", explanation: "\"Piacere\" → \"piaccia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I can't wait [to leave].", sentence: "Non vedo l'ora ___.", answer: "di partire", altAnswers: ["di andare via"], explanation: "Same subject." },
      { type: "multiple-choice", question: "\"Sono contenta che i miei genitori ___ la mia ragazza.\" (conoscere)", options: ["conoscano", "conoscono", "conoscere", "di conoscere"], correctIndex: 0, explanation: "Feeling + different subject: subjunctive." },
      { type: "dictation", audio: "Sono felice che siate qui e non vedo l'ora che arrivi anche Sara.", explanation: "\"Siate\", \"arrivi\"." },
      { type: "speak", text: "Mi dispiace che tu non possa venire, ma non vedo l'ora di vederti a Natale.", prompt: "Say it in Italian: I'm sorry you can't come, but I can't wait to see you at Christmas.", tip: "non VE-do L'O-ra: one flowing phrase.", explanation: "Different subject, then same subject." },
    ],
  },
  {
    slug: "b1-subjunctive-fear-doubt",
    level: "IT-B1",
    number: 3,
    title: "Fear and Doubt",
    summary: "Ho paura che piova, temo che sia tardi, dubito che lo sappia; non so se + indicative or subjunctive.",
    duration: "17 min",
    sections: [
      {
        heading: "Ho paura che, temo che",
        body: [
          "Fears about something that may happen take the subjunctive: \"Ho paura che piova\" (I'm afraid it'll rain), \"Temo che sia troppo tardi\" (I fear it's too late). \"Temere\" is a little more formal than \"avere paura\".",
          "Same subject: \"Ho paura di sbagliare\" (I'm afraid of making a mistake), \"Temo di non farcela\" (I'm afraid I won't make it).",
        ],
        examples: [
          { es: "Ho paura che piova domani.", en: "I'm afraid it'll rain tomorrow." },
          { es: "Temo che sia troppo tardi.", en: "I fear it's too late." },
          { es: "Ho paura che il cane morda.", en: "I'm afraid the dog will bite." },
          { es: "Ho paura di sbagliare.", en: "I'm afraid of making a mistake." },
          { es: "Temo di non farcela.", en: "I'm afraid I won't make it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid it'll rain tomorrow.", answer: "Ho paura che piova domani.", altAnswers: ["Ho paura che domani piova.", "Temo che piova domani.", "Temo che domani piova."], explanation: "\"Ho paura che\" + \"piova\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid of making a mistake.", answer: "Ho paura di sbagliare.", altAnswers: ["Temo di sbagliare."], explanation: "Same subject." },
        ],
      },
      {
        heading: "Dubito che",
        body: [
          "\"Dubitare che\" (to doubt that) always takes the subjunctive: \"Dubito che lo sappia\" (I doubt he knows). In everyday speech, \"non credo che\" is more frequent and means almost the same.",
        ],
        examples: [
          { es: "Dubito che lo sappia.", en: "I doubt he knows." },
          { es: "Dubito che arrivino in tempo.", en: "I doubt they'll arrive in time." },
          { es: "Dubitiamo che sia la verità.", en: "We doubt it's the truth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt they'll arrive in time.", answer: "Dubito che arrivino in tempo.", altAnswers: ["Dubito che arrivino in orario."], explanation: "\"Dubito che\" + subjunctive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt he [knows].", sentence: "Dubito che lo ___.", answer: "sappia", explanation: "\"Sappia\"." },
        ],
      },
      {
        heading: "Non so se",
        body: [
          "\"Non so se\" (I don't know if / whether) can take either mood. The indicative is normal in speech: \"Non so se viene\". The subjunctive sounds more careful and stresses the doubt: \"Non so se venga\". Both are correct.",
        ],
        examples: [
          { es: "Non so se viene.", en: "I don't know if he's coming. (everyday)" },
          { es: "Non so se venga.", en: "I don't know whether he's coming. (more careful)" },
          { es: "Non sappiamo se il museo è aperto.", en: "We don't know if the museum is open." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We don't know if the museum is open.", answer: "Non sappiamo se il museo è aperto.", altAnswers: ["Non sappiamo se il museo sia aperto."], explanation: "\"Non so se\": either mood." },
          { type: "listen-choose", audio: "Non so se venga.", question: "What does the speaker say?", options: ["I don't know whether he's coming.", "I know he's coming.", "I doubt he's coming.", "I hope he's coming."], correctIndex: 0, explanation: "\"Non so se\" + subjunctive: careful style." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fear it's too late.", answer: "Temo che sia troppo tardi.", altAnswers: ["Ho paura che sia troppo tardi."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid the dog will bite.", answer: "Ho paura che il cane morda.", altAnswers: ["Temo che il cane morda."], explanation: "\"Mordere\" → \"morda\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid I won't make it.", answer: "Temo di non farcela.", altAnswers: ["Ho paura di non farcela."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt he knows.", answer: "Dubito che lo sappia.", altAnswers: ["Dubito che lui lo sappia."], explanation: "\"Sappia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We doubt it's the truth.", answer: "Dubitiamo che sia la verità.", explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know if he's coming.", answer: "Non so se viene.", altAnswers: ["Non so se venga.", "Non so se verrà."], explanation: "Either mood." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents are afraid I'm working too much.", answer: "I miei genitori hanno paura che io lavori troppo.", altAnswers: ["I miei genitori temono che io lavori troppo."], explanation: "\"Che io lavori\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm afraid the shops [are] closed.", sentence: "Ho paura che i negozi ___ chiusi.", answer: "siano", explanation: "\"Siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm afraid [of getting lost].", sentence: "Ho paura ___.", answer: "di perdermi", explanation: "Same subject." },
      { type: "matching", instructions: "Match each beginning to what follows.", pairs: [{ left: "Ho paura che...", right: "piova." }, { left: "Ho paura di...", right: "sbagliare." }, { left: "Dubito che...", right: "lo sappia." }, { left: "Non so se...", right: "viene o no." }], explanation: "Subjunctive, infinitive, subjunctive, either." },
      { type: "dictation", audio: "Ho paura che il treno sia in ritardo e dubito che arriviamo in tempo.", explanation: "\"Sia\", \"arriviamo\" (noi subjunctive = present)." },
      { type: "speak", text: "Temo che sia troppo tardi, ma non so se il negozio è già chiuso.", prompt: "Say it in Italian: I fear it's too late, but I don't know if the shop is already closed.", tip: "TE-mo: stress on the first syllable.", explanation: "\"Temo che sia\", \"non so se è\"." },
    ],
  },
  {
    slug: "b1-drill-wishes-feelings",
    level: "IT-B1",
    number: 4,
    title: "Drill: Wishes and Feelings",
    summary: "Produce voglio che, spero che, sono contento che, mi dispiace che, ho paura che + subjunctive at speed.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "All the triggers",
        body: [
          "Wishes: \"voglio che\", \"preferisco che\", \"spero che\", \"desidero che\". Feelings: \"sono contento / felice che\", \"mi dispiace che\", \"non vedo l'ora che\". Fears and doubts: \"ho paura che\", \"temo che\", \"dubito che\". All + subjunctive with a different subject.",
        ],
        examples: [
          { es: "Preferisco che paghi tu.", en: "I'd rather you paid." },
          { es: "Sono contenta che vi piaccia.", en: "I'm glad you like it. (plural)" },
          { es: "Ho paura che si perdano.", en: "I'm afraid they'll get lost." },
          { es: "Dubito che finisca in tempo.", en: "I doubt she'll finish in time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather you paid. (to a friend)", answer: "Preferisco che paghi tu.", altAnswers: ["Preferisco che tu paghi."], explanation: "\"Paghi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid they'll get lost.", answer: "Ho paura che si perdano.", altAnswers: ["Temo che si perdano."], explanation: "\"Si perdano\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you like it. (plural)", answer: "Sono contenta che vi piaccia.", altAnswers: ["Sono contento che vi piaccia.", "Sono felice che vi piaccia."], explanation: "\"Piaccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt she'll finish in time.", answer: "Dubito che finisca in tempo.", altAnswers: ["Dubito che lei finisca in tempo."], explanation: "\"Finisca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want you to be honest. (plural)", answer: "Voglio che siate sinceri.", altAnswers: ["Voglio che siate onesti.", "Voglio che siate sincere."], explanation: "\"Siate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the weather is nice on Saturday.", answer: "Spero che sabato faccia bel tempo.", altAnswers: ["Spero che faccia bel tempo sabato."], explanation: "\"Faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry your brother is ill. (to a friend)", answer: "Mi dispiace che tuo fratello stia male.", altAnswers: ["Mi dispiace che tuo fratello sia malato."], explanation: "\"Stia male\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't wait for you to meet my family. (to a friend)", answer: "Non vedo l'ora che tu conosca la mia famiglia.", explanation: "\"Conosca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid the bill is too high.", answer: "Ho paura che il conto sia troppo alto.", altAnswers: ["Temo che il conto sia troppo alto.", "Ho paura che il conto sia troppo caro."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd rather you came by train. (plural)", answer: "Preferiamo che veniate in treno.", explanation: "\"Veniate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy the kids get on well.", answer: "Sono felice che i bambini vadano d'accordo.", altAnswers: ["Sono contento che i bambini vadano d'accordo.", "Sono contenta che i bambini vadano d'accordo."], explanation: "\"Vadano d'accordo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I want them [to leave] the door open.", sentence: "Voglio che ___ la porta aperta.", answer: "lascino", explanation: "\"Lascino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sorry you [have to] work on Sunday. (to a friend)", sentence: "Mi dispiace che ___ lavorare domenica.", answer: "tu debba", altAnswers: ["debba"], explanation: "\"Debba\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm afraid he [doesn't understand].", sentence: "Temo che non ___.", answer: "capisca", explanation: "\"Capisca\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hope you [have] a good journey. (plural)", sentence: "Spero che ___ buon viaggio.", answer: "facciate", explanation: "\"Fare buon viaggio\"." },
      { type: "multiple-choice", question: "\"Non vedo l'ora che ___ l'estate.\"", options: ["arrivi", "arriva", "arrivare", "di arrivare"], correctIndex: 0, explanation: "Different subject (summer): subjunctive." },
      { type: "dictation", audio: "Mia madre vuole che io torni presto, ma ha paura che io guidi di notte.", explanation: "\"Che io torni\", \"che io guidi\"." },
      { type: "dictation", audio: "Sono contento che tu stia meglio e spero che tu possa uscire presto.", explanation: "\"Stia\", \"possa\"." },
      { type: "speak", text: "Sono felice che tu venga, ma ho paura che non ci sia posto per tutti.", prompt: "Say it in Italian: I'm happy you're coming, but I'm afraid there isn't room for everyone.", tip: "ci SI-a: link the words.", explanation: "\"Venga\", \"ci sia\"." },
    ],
  },
  {
    slug: "b1-contrast-voglio-voglio-che",
    level: "IT-B1",
    number: 5,
    title: "Contrast Clinic: Voglio Venire or Voglio Che Tu Venga?",
    summary: "Same subject = infinitive, different subject = che + subjunctive.",
    duration: "17 min",
    sections: [
      {
        heading: "One person or two?",
        body: [
          "\"Voglio venire\": I want, I come (one person, infinitive). \"Voglio che tu venga\": I want, you come (two people, \"che\" + subjunctive). English hides the difference (I want to come / I want you to come), but Italian needs it.",
          "Never put an object pronoun before the infinitive to mean someone else: \"voglio te venire\" or \"ti voglio venire\" are not Italian. And never use \"che\" for the same person: \"voglio che io venga\" is wrong.",
        ],
        examples: [
          { es: "Voglio venire.", en: "I want to come." },
          { es: "Voglio che tu venga.", en: "I want you to come." },
          { es: "Preferisce guidare lei.", en: "She prefers to drive." },
          { es: "Preferisce che guidi tu.", en: "She'd rather you drove." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She'd rather you drove. (to a friend)", answer: "Preferisce che guidi tu.", altAnswers: ["Preferisce che tu guidi."], explanation: "Two people." },
          { type: "multiple-choice", question: "Which means: I want you to come?", options: ["Voglio che tu venga.", "Voglio te venire.", "Ti voglio venire.", "Voglio venire tu."], correctIndex: 0, explanation: "\"Che\" + subjunctive." },
        ],
      },
      {
        heading: "With di: spero di, ho paura di, sono contento di",
        body: [
          "Most other triggers need \"di\" before the infinitive: \"spero di\", \"ho paura di\", \"sono contento di\", \"mi dispiace di\", \"non vedo l'ora di\". \"Volere\", \"preferire\" and \"desiderare\" take the bare infinitive.",
          "So: \"Spero di vincere\" / \"Spero che tu vinca\"; \"Ho paura di cadere\" / \"Ho paura che tu cada\".",
        ],
        examples: [
          { es: "Spero di vincere.", en: "I hope to win." },
          { es: "Spero che tu vinca.", en: "I hope you win." },
          { es: "Ho paura di cadere.", en: "I'm afraid of falling." },
          { es: "Ho paura che tu cada.", en: "I'm afraid you'll fall." },
          { es: "Sono contento di partire.", en: "I'm happy to be leaving." },
          { es: "Sono contento che partiate.", en: "I'm happy you're leaving. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you win. (to a friend)", answer: "Spero che tu vinca.", altAnswers: ["Spero che vinca tu.", "Spero che vincerai."], explanation: "Two people." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid of falling.", answer: "Ho paura di cadere.", altAnswers: ["Temo di cadere."], explanation: "One person: \"di\"." },
          { type: "listen-choose", audio: "Sono contento che partiate.", question: "Who is leaving?", options: ["You (plural).", "The speaker.", "We.", "Nobody."], correctIndex: 0, explanation: "\"Partiate\": voi." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to come.", answer: "Voglio venire.", altAnswers: ["Voglio venire anch'io."], explanation: "One person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She prefers to drive.", answer: "Preferisce guidare lei.", altAnswers: ["Preferisce guidare."], explanation: "One person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope to win.", answer: "Spero di vincere.", explanation: "One person: \"di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid you'll fall. (to a friend)", answer: "Ho paura che tu cada.", altAnswers: ["Temo che tu cada."], explanation: "\"Cadere\" → \"cada\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We want to see the sea.", answer: "Vogliamo vedere il mare.", explanation: "One subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We want the children to see the sea.", answer: "Vogliamo che i bambini vedano il mare.", explanation: "Two subjects." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry to leave.", answer: "Mi dispiace partire.", altAnswers: ["Mi dispiace di partire.", "Mi dispiace andare via.", "Mi dispiace andarmene."], explanation: "One person: infinitive (\"di\" optional after \"mi dispiace\")." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sorry you're leaving. (to a friend)", answer: "Mi dispiace che tu parta.", altAnswers: ["Mi dispiace che tu te ne vada."], explanation: "Two people." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't want [you to cry]. (to a friend)", sentence: "Non voglio ___.", answer: "che tu pianga", explanation: "\"Piangere\" → \"pianga\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I don't want [to cry].", sentence: "Non voglio ___.", answer: "piangere", explanation: "One person." },
      { type: "word-order", prompt: "Put the words in order to say: I can't wait to see you.", words: ["Non", "vedo", "l'ora", "di", "vederti."], translation: "I can't wait to see you.", explanation: "\"Non vedo l'ora di\"." },
      { type: "speak", text: "Voglio venire anch'io, ma preferisco che guidi tu.", prompt: "Say it in Italian: I want to come too, but I'd rather you drove.", tip: "GUI-di: the u is a glide.", explanation: "Infinitive, then \"che\" + subjunctive." },
    ],
  },
  {
    slug: "b1-drill-same-different-subject",
    level: "IT-B1",
    number: 6,
    title: "Drill: Same or Different Subject?",
    summary: "Decide at speed: infinitive (with or without di) or che + subjunctive.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Decide fast",
        body: [
          "Same subject: \"voglio / preferisco\" + infinitive; \"spero / ho paura / sono contento / mi dispiace / non vedo l'ora\" + \"di\" + infinitive. Different subject: \"che\" + subjunctive, with \"io\" or \"tu\" when needed.",
        ],
        examples: [
          { es: "Spero di trovare lavoro.", en: "I hope to find work." },
          { es: "Spero che mio figlio trovi lavoro.", en: "I hope my son finds work." },
          { es: "Preferisco cucinare io.", en: "I'd rather do the cooking myself." },
          { es: "Preferisco che cucini lui.", en: "I'd rather he did the cooking." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope to find work.", answer: "Spero di trovare lavoro.", altAnswers: ["Spero di trovare un lavoro."], explanation: "Same subject." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope my son finds work.", answer: "Spero che mio figlio trovi lavoro.", altAnswers: ["Spero che mio figlio trovi un lavoro."], explanation: "Different subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather he did the cooking.", answer: "Preferisco che cucini lui.", altAnswers: ["Preferisco che lui cucini."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy to help you. (to a friend)", answer: "Sono contento di aiutarti.", altAnswers: ["Sono contenta di aiutarti.", "Sono felice di aiutarti."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy you're helping me. (to a friend)", answer: "Sono contento che tu mi aiuti.", altAnswers: ["Sono contenta che tu mi aiuti.", "Sono felice che tu mi aiuti."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They want to go to Sicily.", answer: "Vogliono andare in Sicilia.", explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They want me to go to Sicily with them.", answer: "Vogliono che io vada in Sicilia con loro.", explanation: "\"Che io vada\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid of missing the train.", answer: "Ho paura di perdere il treno.", altAnswers: ["Temo di perdere il treno."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid they'll miss the train.", answer: "Ho paura che perdano il treno.", altAnswers: ["Temo che perdano il treno."], explanation: "Different subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia can't wait to start.", answer: "Giulia non vede l'ora di cominciare.", altAnswers: ["Giulia non vede l'ora di iniziare."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia can't wait for the course to start.", answer: "Giulia non vede l'ora che cominci il corso.", altAnswers: ["Giulia non vede l'ora che inizi il corso.", "Giulia non vede l'ora che il corso cominci."], explanation: "Different subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sorry [I'm] late.", sentence: "Mi dispiace ___ in ritardo.", answer: "di essere", altAnswers: ["essere"], explanation: "Same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sorry [he's] late.", sentence: "Mi dispiace che ___ in ritardo.", answer: "sia", explanation: "Different subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We hope [to see] you soon. (plural)", sentence: "Speriamo ___ presto.", answer: "di vedervi", explanation: "Same subject (we)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We hope [you come] soon. (plural)", sentence: "Speriamo che ___ presto.", answer: "veniate", explanation: "Different subject." },
      { type: "multiple-choice", question: "Which is right for: My mother wants me to call her?", options: ["Mia madre vuole che io la chiami.", "Mia madre vuole chiamarla.", "Mia madre mi vuole chiamarla.", "Mia madre vuole che lei mi chiami."], correctIndex: 0, explanation: "Different subject: \"che io la chiami\"." },
      { type: "dictation", audio: "Spero di trovare casa presto, ma ho paura che gli affitti siano troppo alti.", explanation: "\"Di trovare\" vs \"che siano\"." },
      { type: "dictation", audio: "Voglio partire domani, ma mio marito preferisce che restiamo.", explanation: "\"Voglio partire\" vs \"che restiamo\"." },
      { type: "speak", text: "Sono contenta di essere qui, e sono felice che ci siate anche voi.", prompt: "Say it in Italian (as a woman): I'm glad to be here, and I'm happy you're here too. (plural)", tip: "ci SIA-te: two syllables in siate.", explanation: "\"Di essere\" vs \"che ci siate\"." },
    ],
  },
  {
    slug: "b1-error-hunt-wishes",
    level: "IT-B1",
    number: 7,
    title: "Error Hunt: Wishes",
    summary: "Fix wish errors: voglio te venire, voglio che io venga, spero che vieni (in writing), ho paura che piove.",
    duration: "17 min",
    sections: [
      {
        heading: "Liam's invitation",
        body: [
          "Liam is writing an email to invite his Italian friend Matteo to his graduation in Dublin. He translates directly from English: \"Voglio te venire alla mia laurea\" (want you to come). Italian needs \"Voglio che tu venga\".",
          "He also writes \"Voglio che io ti presenti la mia famiglia\". Same subject: \"Voglio presentarti la mia famiglia\".",
        ],
        examples: [
          { es: "Voglio che tu venga alla mia laurea.", en: "I want you to come to my graduation. (not: voglio te venire)" },
          { es: "Voglio presentarti la mia famiglia.", en: "I want to introduce you to my family. (not: voglio che io ti presenti)" },
          { es: "Mia madre vuole che tu dorma da noi.", en: "My mother wants you to sleep at our place. (not: vuole te dormire)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Liam wrote \"Voglio te venire alla mia laurea\". Write it correctly: I want you to come to my graduation.", source: "I want you to come to my graduation.", answer: "Voglio che tu venga alla mia laurea.", explanation: "\"Voglio che tu venga\"." },
          { type: "translate", direction: "en-es", prompt: "Liam wrote \"Voglio che io ti presenti la mia famiglia\". Write it correctly: I want to introduce you to my family.", source: "I want to introduce you to my family.", answer: "Voglio presentarti la mia famiglia.", altAnswers: ["Ti voglio presentare la mia famiglia."], explanation: "Same subject: infinitive." },
        ],
      },
      {
        heading: "Indicative after spero che and ho paura che",
        body: [
          "\"Spero che vieni\" is heard in casual speech, but in an email, write \"Spero che tu venga\" (or the future \"Spero che verrai\"). \"Ho paura che piove\" is a plain mistake: \"Ho paura che piova\".",
        ],
        examples: [
          { es: "Spero che tu venga.", en: "I hope you come. (in writing, not: spero che vieni)" },
          { es: "Ho paura che piova a giugno.", en: "I'm afraid it'll rain in June. (not: che piove)" },
          { es: "Sono contento che tu abbia tempo.", en: "I'm glad you have time. (not: che hai)" },
          { es: "Non vedo l'ora che tu conosca Dublino.", en: "I can't wait for you to get to know Dublin. (not: conosci)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Liam wrote \"Ho paura che piove a giugno\". Write it correctly: I'm afraid it'll rain in June.", source: "I'm afraid it'll rain in June.", answer: "Ho paura che piova a giugno.", altAnswers: ["Temo che piova a giugno."], explanation: "\"Piova\"." },
          { type: "multiple-choice", question: "Which is best in an email?", options: ["Spero che tu venga.", "Spero che vieni.", "Spero te venire.", "Spero che tu vieni."], correctIndex: 0, explanation: "Subjunctive in writing." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Liam wrote \"Mia madre vuole te dormire da noi\". Write it correctly: My mother wants you to sleep at our place.", source: "My mother wants you to sleep at our place.", answer: "Mia madre vuole che tu dorma da noi.", altAnswers: ["Mia mamma vuole che tu dorma da noi."], explanation: "\"Che tu dorma\"." },
      { type: "translate", direction: "en-es", prompt: "Liam wrote \"Spero che vieni\". Write it in a careful style: I hope you come.", source: "I hope you come.", answer: "Spero che tu venga.", altAnswers: ["Spero che verrai.", "Spero che venga."], explanation: "Subjunctive or future." },
      { type: "translate", direction: "en-es", prompt: "Liam wrote \"Sono contento che hai tempo\". Write it correctly: I'm glad you have time.", source: "I'm glad you have time.", answer: "Sono contento che tu abbia tempo.", altAnswers: ["Sono felice che tu abbia tempo."], explanation: "\"Abbia\"." },
      { type: "translate", direction: "en-es", prompt: "Liam wrote \"Spero che io finisco gli esami\". Write it correctly: I hope to finish my exams.", source: "I hope to finish my exams.", answer: "Spero di finire gli esami.", explanation: "Same subject: \"spero di\"." },
      { type: "translate", direction: "en-es", prompt: "Liam wrote \"Non vedo l'ora che conosci Dublino\". Write it correctly: I can't wait for you to get to know Dublin.", source: "I can't wait for you to get to know Dublin.", answer: "Non vedo l'ora che tu conosca Dublino.", explanation: "\"Conosca\"." },
      { type: "translate", direction: "en-es", prompt: "Liam wrote \"Ho paura che tu ti annoi\" correctly! Translate it: I'm afraid you'll get bored.", source: "I'm afraid you'll get bored.", answer: "Ho paura che tu ti annoi.", altAnswers: ["Temo che tu ti annoi."], explanation: "\"Annoiarsi\" → \"ti annoi\": already right." },
      { type: "fill-blank", prompt: "Liam wrote \"che fa\". Write the Italian for the bold words.", en: "I hope it [isn't] too cold.", sentence: "Spero che non ___ troppo freddo.", answer: "faccia", explanation: "\"Faccia freddo\"." },
      { type: "fill-blank", prompt: "Liam wrote \"voglio te portare\". Write the Italian for the bold words.", en: "I want [you to bring] a warm jumper.", sentence: "Voglio ___ un maglione caldo.", answer: "che tu porti", explanation: "\"Che tu porti\"." },
      { type: "word-order", prompt: "Put the words in order to say: My parents want you to stay a week.", words: ["I", "miei", "vogliono", "che", "tu", "rimanga", "una", "settimana."], translation: "My parents want you to stay a week.", explanation: "\"I miei\" = my parents." },
      { type: "multi-select", question: "Which are correct? Choose all that apply.", options: ["Voglio che tu venga.", "Voglio te venire.", "Voglio venire.", "Voglio che io venga.", "Spero di venire.", "Ho paura che piova."], correctIndexes: [0, 2, 4, 5], explanation: "No object + infinitive; no \"che io\" with the same subject." },
      { type: "dictation", audio: "Voglio che tu venga e spero che non piova.", explanation: "\"Venga\", \"piova\"." },
      { type: "speak", text: "Voglio che tu venga alla mia laurea, e mia madre vuole che tu dorma da noi.", prompt: "Say Liam's corrected sentence: I want you to come to my graduation, and my mother wants you to sleep at our place.", tip: "lau-RE-a: stress on the e.", explanation: "Two \"che tu\" + subjunctive." },
    ],
  },
  {
    slug: "b1-dialogue-lab-family-expectations",
    level: "IT-B1",
    number: 8,
    title: "Dialogue Lab: Family Expectations",
    summary: "A mother and her adult son: voglio che tu sia felice, spero che tu venga a Natale, ho paura che tu lavori troppo.",
    duration: "17 min",
    sections: [
      {
        heading: "Sunday phone call",
        body: [
          "Andrea, 32, lives in Amsterdam. His mother Lucia calls from Lecce. Lucia: \"Ciao amore! Allora, spero che tu venga a Natale. Tuo padre vuole che tu stia almeno una settimana.\" Andrea: \"Mamma, non so se posso. Ho tanto lavoro.\"",
          "Lucia: \"Appunto! Ho paura che tu lavori troppo. Voglio solo che tu sia felice.\" Andrea: \"Sono felice, mamma. Ma non voglio che vi preoccupiate sempre per me.\"",
        ],
        examples: [
          { es: "Spero che tu venga a Natale.", en: "I hope you come at Christmas." },
          { es: "Tuo padre vuole che tu stia almeno una settimana.", en: "Your father wants you to stay at least a week." },
          { es: "Ho paura che tu lavori troppo.", en: "I'm afraid you work too much." },
          { es: "Voglio solo che tu sia felice.", en: "I just want you to be happy." },
          { es: "Non voglio che vi preoccupiate sempre per me.", en: "I don't want you to always worry about me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I just want you to be happy. (to a friend or family member)", answer: "Voglio solo che tu sia felice.", altAnswers: ["Voglio soltanto che tu sia felice."], explanation: "\"Tu sia\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid you work too much. (to a friend or family member)", answer: "Ho paura che tu lavori troppo.", altAnswers: ["Temo che tu lavori troppo."], explanation: "\"Che tu lavori\"." },
        ],
      },
      {
        heading: "The deal",
        body: [
          "Andrea: \"Va bene, vengo per cinque giorni. Ma preferisco che non organizziate pranzi con tutti i parenti!\" Lucia: \"Solo uno, con la nonna. Lei non vede l'ora di vederti. E sono contenta che tu porti anche Sanne.\"",
          "Notice \"non vede l'ora di vederti\" (same subject: the grandmother sees) and \"sono contenta che tu porti\" (different subject).",
        ],
        examples: [
          { es: "Preferisco che non organizziate pranzi con tutti i parenti.", en: "I'd rather you didn't organise lunches with all the relatives." },
          { es: "La nonna non vede l'ora di vederti.", en: "Grandma can't wait to see you." },
          { es: "Sono contenta che tu porti anche Sanne.", en: "I'm glad you're bringing Sanne too." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma can't wait to see you.", answer: "La nonna non vede l'ora di vederti.", explanation: "Same subject: \"di vederti\"." },
          { type: "listen-choose", audio: "Preferisco che non organizziate pranzi con tutti i parenti.", question: "What does Andrea want to avoid?", options: ["Big lunches with all the relatives.", "Going to Lecce.", "Seeing his grandmother.", "Cooking for everyone."], correctIndex: 0, explanation: "\"Non organizziate pranzi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope you come at Christmas. (to a family member)", answer: "Spero che tu venga a Natale.", altAnswers: ["Spero che verrai a Natale."], explanation: "\"Venga\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Your father wants you to stay at least a week.", answer: "Tuo padre vuole che tu stia almeno una settimana.", altAnswers: ["Tuo padre vuole che tu rimanga almeno una settimana.", "Tuo papà vuole che tu stia almeno una settimana."], explanation: "\"Stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't want you to always worry about me. (plural)", answer: "Non voglio che vi preoccupiate sempre per me.", altAnswers: ["Non voglio che vi preoccupiate sempre di me."], explanation: "\"Vi preoccupiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you're bringing Sanne too.", answer: "Sono contenta che tu porti anche Sanne.", altAnswers: ["Sono contento che tu porti anche Sanne.", "Sono felice che tu porti anche Sanne."], explanation: "\"Porti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know if I can.", answer: "Non so se posso.", altAnswers: ["Non so se possa.", "Non so se riesco."], explanation: "\"Non so se\": everyday indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid you don't eat enough.", answer: "Ho paura che tu non mangi abbastanza.", altAnswers: ["Temo che tu non mangi abbastanza."], explanation: "\"Mangi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd rather you [didn't organise] lunches. (plural)", sentence: "Preferisco che non ___ pranzi.", answer: "organizziate", explanation: "\"Organizziate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Mum wants me [to call] every Sunday.", sentence: "La mamma vuole che io ___ ogni domenica.", answer: "chiami", altAnswers: ["telefoni"], explanation: "\"Che io chiami\"." },
      { type: "word-order", prompt: "Put the words in order to say: Grandma can't wait to see you.", words: ["La", "nonna", "non", "vede", "l'ora", "di", "vederti."], translation: "Grandma can't wait to see you.", explanation: "\"Non vede l'ora di\"." },
      { type: "matching", instructions: "Match each of Lucia's sentences to its feeling.", pairs: [{ left: "Spero che tu venga.", right: "hope" }, { left: "Ho paura che tu lavori troppo.", right: "worry" }, { left: "Sono contenta che tu porti Sanne.", right: "happiness" }, { left: "Tuo padre vuole che tu stia.", right: "wish" }], explanation: "Four triggers, one mood." },
      { type: "dictation", audio: "Voglio solo che tu sia felice, amore.", explanation: "\"Tu sia\"." },
      { type: "speak", text: "Mamma, sono felice, ma non voglio che vi preoccupiate sempre per me.", prompt: "Answer as Andrea: Mum, I'm happy, but I don't want you to always worry about me.", tip: "pre-oc-cu-PIA-te.", explanation: "\"Che vi preoccupiate\"." },
    ],
  },
  {
    slug: "b1-listening-lab-feelings",
    level: "IT-B1",
    number: 9,
    title: "Listening Lab: Wishes and Worries",
    summary: "Voicemails and short conversations: identify each speaker's wish, feeling or worry.",
    duration: "18 min",
    sections: [
      {
        heading: "Three voicemails",
        body: [
          "1. Elena: \"Ciao Marta! Sono contentissima che tu abbia trovato casa... cioè, che tu sia nella casa nuova! Spero che i vicini siano tranquilli.\" 2. Mr Ferri, a landlord: \"Buongiorno, sono Ferri. Preferisco che mi paghiate l'affitto entro il cinque, grazie.\" 3. Nonno Pino: \"Ciao piccola. Ho paura che tu non mangi abbastanza. Ti mando un pacco con le arance.\"",
          "Notice how Elena corrects herself: speakers do this all the time. You'll learn \"abbia trovato\" in Unit 12.",
        ],
        examples: [
          { es: "Spero che i vicini siano tranquilli.", en: "I hope the neighbours are quiet." },
          { es: "Preferisco che mi paghiate l'affitto entro il cinque.", en: "I'd rather you paid me the rent by the fifth." },
          { es: "Ho paura che tu non mangi abbastanza.", en: "I'm afraid you're not eating enough." },
          { es: "Ti mando un pacco con le arance.", en: "I'm sending you a parcel with oranges." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Preferisco che mi paghiate l'affitto entro il cinque.", question: "What does the landlord want?", options: ["The rent by the fifth.", "Five months' rent.", "The rent on the fifteenth.", "To raise the rent."], correctIndex: 0, explanation: "\"Entro il cinque\" = by the fifth." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the neighbours are quiet.", answer: "Spero che i vicini siano tranquilli.", altAnswers: ["Spero che i vicini di casa siano tranquilli."], explanation: "\"Siano\"." },
        ],
      },
      {
        heading: "At the bus stop",
        body: [
          "Two women talk at a bus stop. \"Mia figlia vuole che le compri un cane. Ma ho paura che poi debba portarlo fuori io!\" \"Eh, è sempre così. Dubito che lo faccia lei, alla sua età.\" \"Infatti. Speriamo che si stanchi dell'idea!\"",
        ],
        examples: [
          { es: "Mia figlia vuole che le compri un cane.", en: "My daughter wants me to buy her a dog." },
          { es: "Ho paura che poi debba portarlo fuori io.", en: "I'm afraid I'll end up having to walk it." },
          { es: "Dubito che lo faccia lei.", en: "I doubt she'll do it." },
          { es: "Speriamo che si stanchi dell'idea!", en: "Let's hope she gets tired of the idea!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My daughter wants me to buy her a dog.", answer: "Mia figlia vuole che le compri un cane.", altAnswers: ["Mia figlia vuole che io le compri un cane."], explanation: "\"Che io le compri\"." },
          { type: "dictation", audio: "Speriamo che si stanchi dell'idea!", explanation: "\"Stancarsi\" → \"si stanchi\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Ho paura che tu non mangi abbastanza.", question: "What is Grandpa worried about?", options: ["That she isn't eating enough.", "That she eats too much.", "That she's not sleeping.", "That the oranges will arrive late."], correctIndex: 0, explanation: "\"Non mangi abbastanza\"." },
      { type: "listen-choose", audio: "Dubito che lo faccia lei.", question: "What does the second woman think?", options: ["The daughter won't walk the dog.", "The daughter will walk the dog.", "The mother won't buy the dog.", "The dog will run away."], correctIndex: 0, explanation: "\"Dubito che\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather you paid me the rent by the fifth. (plural)", answer: "Preferisco che mi paghiate l'affitto entro il cinque.", explanation: "\"Paghiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid you're not eating enough.", answer: "Ho paura che tu non mangi abbastanza.", altAnswers: ["Temo che tu non mangi abbastanza."], explanation: "\"Mangi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid I'll end up having to walk it.", answer: "Ho paura che poi debba portarlo fuori io.", altAnswers: ["Ho paura di doverlo portare fuori io.", "Ho paura di doverlo portare fuori io poi."], explanation: "\"Debba\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubt she'll do it.", answer: "Dubito che lo faccia lei.", altAnswers: ["Dubito che lei lo faccia.", "Dubito che lo faccia."], explanation: "\"Faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm sending you a parcel with oranges.", answer: "Ti mando un pacco con le arance.", altAnswers: ["Ti spedisco un pacco con le arance."], explanation: "\"Mandare\" = to send." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm really glad you're in the new house.", answer: "Sono contentissima che tu sia nella casa nuova.", altAnswers: ["Sono contentissimo che tu sia nella casa nuova.", "Sono molto contenta che tu sia nella casa nuova.", "Sono molto contento che tu sia nella casa nuova."], explanation: "\"Sia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Let's hope she [gets tired] of the idea!", sentence: "Speriamo che si ___ dell'idea!", answer: "stanchi", explanation: "\"Stancarsi\" → \"si stanchi\"." },
      { type: "matching", instructions: "Match each speaker to their feeling.", pairs: [{ left: "Elena", right: "happy for her friend" }, { left: "Mr Ferri", right: "wants the rent on time" }, { left: "Nonno Pino", right: "worried about food" }, { left: "The mother at the bus stop", right: "afraid of extra work" }], explanation: "Who feels what." },
      { type: "dictation", audio: "Sono contentissima che tu sia nella casa nuova.", explanation: "\"Sia\"." },
      { type: "speak", text: "Ciao nonno, grazie delle arance! Non voglio che tu ti preoccupi: mangio benissimo.", prompt: "Call Grandpa back in Italian: Hi Grandpa, thanks for the oranges! I don't want you to worry: I eat really well.", tip: "a-RAN-ce.", explanation: "\"Che tu ti preoccupi\"." },
    ],
  },
  {
    slug: "b1-mission-wedding-card",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Wedding Card",
    summary: "Write wishes for a wedding and a new baby: vi auguro che, che siate felici, spero che il piccolo vi faccia dormire.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Wedding wishes",
        body: [
          "Your mission: your Italian friends Chiara and Tommaso are getting married. Write the card. Italians write \"Tanti auguri\" or \"Felicitazioni\" and wish happiness: \"Vi auguriamo che siate sempre felici\" (we wish you to be always happy). \"Augurare che\" takes the subjunctive, like \"sperare che\".",
          "You can also start a wish with just \"che\": \"Che possiate essere felici per sempre!\" (May you be happy forever!).",
        ],
        examples: [
          { es: "Tanti auguri agli sposi!", en: "Best wishes to the bride and groom!" },
          { es: "Vi auguriamo che siate sempre felici.", en: "We wish you lifelong happiness." },
          { es: "Che possiate essere felici per sempre!", en: "May you be happy forever!" },
          { es: "Speriamo che il viaggio di nozze sia indimenticabile.", en: "We hope your honeymoon is unforgettable." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We hope your honeymoon is unforgettable.", answer: "Speriamo che il viaggio di nozze sia indimenticabile.", altAnswers: ["Speriamo che la luna di miele sia indimenticabile."], explanation: "\"Sia\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We wish you [to be] always happy.", sentence: "Vi auguriamo che ___ sempre felici.", answer: "siate", explanation: "\"Augurare che\" + subjunctive." },
        ],
      },
      {
        heading: "A new baby",
        body: [
          "A year later, a baby arrives. On a \"fiocco\" (birth) card, write: \"Benvenuto, piccolo Leonardo!\" and wishes for the parents: \"Speriamo che vi faccia dormire!\", \"Siamo felicissimi che sia arrivato\" (a preview of Unit 12). Close with \"Un abbraccio a tutti e tre\".",
        ],
        examples: [
          { es: "Benvenuto, piccolo Leonardo!", en: "Welcome, little Leonardo!" },
          { es: "Speriamo che vi faccia dormire!", en: "Let's hope he lets you sleep!" },
          { es: "Non vediamo l'ora di conoscerlo.", en: "We can't wait to meet him." },
          { es: "Un abbraccio a tutti e tre.", en: "A hug to all three of you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We can't wait to meet him.", answer: "Non vediamo l'ora di conoscerlo.", explanation: "Same subject: \"di conoscerlo\"." },
          { type: "listen-choose", audio: "Speriamo che vi faccia dormire!", question: "What do the friends hope?", options: ["That the baby lets the parents sleep.", "That the baby sleeps at their house.", "That the parents rest at the weekend.", "That the baby is healthy."], correctIndex: 0, explanation: "\"Vi faccia dormire\" = lets you sleep." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We wish you lifelong happiness.", answer: "Vi auguriamo che siate sempre felici.", altAnswers: ["Vi auguriamo di essere sempre felici."], explanation: "\"Siate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "May you be happy forever!", answer: "Che possiate essere felici per sempre!", altAnswers: ["Che siate felici per sempre!"], explanation: "\"Che\" + subjunctive for a wish." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's hope he lets you sleep!", answer: "Speriamo che vi faccia dormire!", explanation: "\"Faccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm so happy you're getting married!", answer: "Sono felicissima che vi sposiate!", altAnswers: ["Sono felicissimo che vi sposiate!", "Sono così felice che vi sposiate!", "Sono contentissima che vi sposiate!", "Sono contentissimo che vi sposiate!"], explanation: "\"Vi sposiate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the weather is lovely on the big day.", answer: "Spero che il grande giorno faccia bel tempo.", altAnswers: ["Spero che faccia bel tempo il grande giorno."], explanation: "\"Faccia bel tempo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A hug to all three of you.", answer: "Un abbraccio a tutti e tre.", explanation: "\"Tutti e tre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We hope you [have] a wonderful life together.", sentence: "Speriamo che ___ una vita meravigliosa insieme.", answer: "abbiate", explanation: "\"Abbiate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We hope Leonardo [is] always healthy.", sentence: "Speriamo che Leonardo ___ sempre in salute.", answer: "sia", explanation: "\"Sia\"." },
      { type: "word-order", prompt: "Put the words in order to say: We can't wait to meet him.", words: ["Non", "vediamo", "l'ora", "di", "conoscerlo."], translation: "We can't wait to meet him.", explanation: "\"Non vedere l'ora di\"." },
      { type: "multiple-choice", question: "Which is the usual short wedding wish?", options: ["Tanti auguri agli sposi!", "In bocca al lupo!", "Buon appetito!", "Condoglianze!"], correctIndex: 0, explanation: "\"Tanti auguri\" / \"Felicitazioni\"." },
      { type: "dictation", audio: "Vi auguriamo che siate sempre felici come oggi.", explanation: "\"Siate\"." },
      { type: "speak", text: "Cari Chiara e Tommaso, tanti auguri! Vi auguriamo che siate sempre felici e speriamo che il viaggio di nozze sia indimenticabile.", prompt: "Read your wedding card aloud in Italian.", tip: "in-di-men-ti-CA-bi-le.", explanation: "\"Siate\", \"sia\"." },
    ],
  },
];

export const IT_B1_U09_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your younger brother or sister is moving abroad for a year. Write them an email: what you want them to do (voglio che...), what you hope (spero che... / spero di...), what you're happy or sorry about (sono contento che... / mi dispiace che...) and one worry (ho paura che...).",
  minWords: 60,
  maxWords: 130,
  rubric: [
    "Uses the present subjunctive after voglio che, spero che, sono contento che, mi dispiace che and ho paura che",
    "Uses the infinitive (with di after sperare, avere paura, essere contento) when the subject is the same",
    "Adds tu or io where the singular form would be unclear",
    "Writes a warm, informal email with a greeting and a sign-off",
  ],
  modelAnswer: "Cara Giulia, allora domani parti per Melbourne! Sono contenta che tu faccia questa esperienza, ma mi dispiace che tu stia via un anno intero. Voglio che tu mi chiami almeno una volta alla settimana, e che tu mi mandi tante foto. Spero che i coinquilini siano simpatici e che tu trovi subito un lavoretto. Ho un po' paura che tu ti senta sola i primi giorni, ma so che sei forte. Io spero di venire a trovarti a febbraio: non vedo l'ora di vedere i canguri! Buon viaggio e un abbraccio enorme, Marta",
  explanation: "Different subject → \"che\" + subjunctive: \"che tu faccia\", \"che tu stia\", \"che tu mi chiami\", \"che i coinquilini siano\", \"che tu ti senta\". Same subject → infinitive: \"spero di venire\", \"non vedo l'ora di vedere\". \"So che sei forte\" is a fact, so it's indicative.",
};
