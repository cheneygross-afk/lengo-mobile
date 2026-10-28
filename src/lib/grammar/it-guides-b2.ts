// Synced from cheneygross-afk/lengo:src/lib/grammar/it-guides-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ItGrammarGuide } from "./it-types";

// Italian grammar guides, Upper Intermediate (see the notes at the top of ./it-types.ts).
export const IT_B2_GUIDES: ItGrammarGuide[] = [
  {
    slug: "imperfect-subjunctive",
    title: "The Imperfect Subjunctive: Vorrei Che Tu Venissi",
    description:
      "How to form the Italian congiuntivo imperfetto (parlassi, prendessi, dormissi), the irregulars fossi, dessi, stessi, facessi and dicessi, and its uses after past triggers, after vorrei che and with magari.",
    level: "B2",
    intro: [
      `The congiuntivo imperfetto is the subjunctive's past form. You need it as soon as the verb that triggers the subjunctive moves into the past or the conditional: "penso che sia vero" (I think it's true) becomes "pensavo che fosse vero" (I thought it was true), and "voglio che tu venga" becomes "vorrei che tu venissi" (I'd like you to come).`,
      `It is also the mood of imagined, unreal situations: "se avessi tempo" (if I had time), "come se fosse facile" (as if it were easy), "magari fosse vero!" (if only it were true!). English uses its simple past for these, which is why English speakers write "se avevo tempo" when Italian wants "se avessi tempo".`,
    ],
    sections: [
      {
        heading: `Forms: one pattern for all three groups`,
        body: [
          `Take the infinitive, drop "-re" and add "-ssi", "-ssi", "-sse", "-ssimo", "-ste", "-ssero". The vowel of the infinitive stays: "parla-re" gives "parlassi", "prende-re" gives "prendessi", "dormi-re" gives "dormissi". "-ire" verbs with "-isc-" in the present ("finire", "capire") have no "-isc-" here: "finissi", "capissi".`,
          `The first and second person singular are identical ("che io parlassi", "che tu parlassi"), so add the subject pronoun when the meaning is not clear from context. The double "s" is always written, and the stress falls on the vowel before it except in "-ssimo" and "-ssero": par-LAS-si, par-LAS-si-mo, par-LAS-se-ro.`,
        ],
        table: {
          headers: ["", "parlare", "prendere", "dormire"],
          rows: [
            ["io", "parlassi", "prendessi", "dormissi"],
            ["tu", "parlassi", "prendessi", "dormissi"],
            ["lui, lei, Lei", "parlasse", "prendesse", "dormisse"],
            ["noi", "parlassimo", "prendessimo", "dormissimo"],
            ["voi", "parlaste", "prendeste", "dormiste"],
            ["loro", "parlassero", "prendessero", "dormissero"],
          ],
        },
        examples: [
          { it: "Volevo che tu parlassi con il direttore.", en: "I wanted you to talk to the manager." },
          { it: "Pensavo che prendessero il treno delle otto.", en: "I thought they were taking the eight o'clock train." },
          { it: "Era strano che il bambino dormisse così tanto.", en: "It was strange that the child slept so much." },
          { it: "Speravo che capiste il problema.", en: "I hoped you (all) understood the problem." },
        ],
      },
      {
        heading: `The irregular verbs`,
        body: [
          `Only a handful of verbs are irregular, and most of them simply build the form on the old Latin stem that you already know from the imperfetto: "fare" (facevo) gives "facessi", "dire" (dicevo) gives "dicessi", "bere" (bevevo) gives "bevessi", "tradurre" (traducevo) gives "traducessi", "porre" (ponevo) gives "ponessi".`,
          `Three verbs are truly irregular: "essere" gives "fossi", "dare" gives "dessi" and "stare" gives "stessi". Learn them as a set, because they are everywhere: "se fossi in te", "magari stessi meglio", "vorrei che mi dessi una mano". "Avere" is regular: "avessi".`,
        ],
        table: {
          headers: ["Infinitive", "io / tu", "lui, lei", "noi", "loro"],
          rows: [
            ["essere", "fossi", "fosse", "fossimo", "fossero"],
            ["dare", "dessi", "desse", "dessimo", "dessero"],
            ["stare", "stessi", "stesse", "stessimo", "stessero"],
            ["fare", "facessi", "facesse", "facessimo", "facessero"],
            ["dire", "dicessi", "dicesse", "dicessimo", "dicessero"],
            ["bere", "bevessi", "bevesse", "bevessimo", "bevessero"],
            ["tradurre", "traducessi", "traducesse", "traducessimo", "traducessero"],
            ["avere", "avessi", "avesse", "avessimo", "avessero"],
          ],
        },
        examples: [
          { it: "Credevo che fossi già a casa.", en: "I thought you were already home." },
          { it: "Mia madre voleva che facessi il medico.", en: "My mother wanted me to be a doctor." },
          { it: "Non sapevo che stessero insieme.", en: "I didn't know they were together." },
          { it: "Il professore ci ha chiesto di tradurre il testo, ma non pensava che lo traducessimo in un'ora.", en: "The teacher asked us to translate the text, but he didn't think we'd translate it in an hour." },
          { it: "Vorrei che mi dicessi la verità.", en: "I'd like you to tell me the truth." },
        ],
      },
      {
        heading: `When to use it`,
        body: [
          `After every subjunctive trigger you learned at Intermediate level ("pensare che", "volere che", "è importante che", "benché", "prima che") when the main verb is in a past tense: "era importante che tutti capissero", "sono uscito prima che cominciasse a piovere". It describes something at the same time as the past main verb or after it.`,
          `After a main verb in the conditional, even when the meaning is present: "vorrei che tu restassi" (I'd like you to stay), "mi piacerebbe che mi chiamassi più spesso", "sarebbe meglio che partissimo subito". This is a very common source of mistakes: "vorrei che tu resti" sounds wrong to an Italian ear.`,
          `In wishes with "magari": "magari fosse vero!" (if only it were true!), "magari avessi più tempo!". On its own, "magari" means maybe and takes the indicative: "magari vengo domani" (maybe I'll come tomorrow).`,
        ],
        examples: [
          { it: "Era importante che tutti fossero d'accordo.", en: "It was important that everyone agreed." },
          { it: "Sono uscita prima che cominciasse a piovere.", en: "I went out before it started raining." },
          { it: "Mi piacerebbe che mi chiamassi più spesso.", en: "I'd like you to call me more often." },
          { it: "Sarebbe meglio che partissimo subito.", en: "It would be better if we left right away." },
          { it: "Magari avessi un giardino così!", en: "If only I had a garden like that!" },
          { it: "Lo trattavano come se fosse un bambino.", en: "They treated him as if he were a child." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Vorrei che tu vieni con me.",
        right: "Vorrei che tu venissi con me.",
        why: `A conditional main verb ("vorrei") takes the imperfect subjunctive, even when you mean now.`,
      },
      {
        wrong: "Pensavo che sia vero.",
        right: "Pensavo che fosse vero.",
        why: `A past main verb pairs with the imperfect subjunctive, not the present one.`,
      },
      {
        wrong: "Se avevo più soldi, viaggerei.",
        right: "Se avessi più soldi, viaggerei.",
        why: `An imagined condition takes "se" + imperfect subjunctive; English if I had misleads you into the imperfetto.`,
      },
      {
        wrong: "Magari stassi meglio!",
        right: "Magari stessi meglio!",
        why: `"Stare" has the irregular stem "stess-", like "dare" ("dessi"). "Stassi" does not exist.`,
      },
      {
        wrong: "Volevo che tu finisca presto.",
        right: "Volevo che tu finissi presto.",
        why: `Past trigger, imperfect subjunctive; and no "-isc-" in this tense.`,
      },
    ],
    faqs: [
      {
        q: `Do Italians really use it in speech?`,
        a: `Yes. "Se fossi in te", "magari!", "vorrei che", "come se" are daily spoken Italian. In relaxed speech some people replace it with the indicative after verbs of opinion ("pensavo che era vero"), but that sounds careless in writing and at an exam. Use the subjunctive.`,
      },
      {
        q: `How do I tell "che io parlassi" from "che tu parlassi"?`,
        a: `By context, or by adding the pronoun: "voleva che io parlassi", "voleva che tu parlassi". Italian keeps the pronoun precisely where the form is ambiguous.`,
      },
      {
        q: `Is "fossi" also a form of "andare"?`,
        a: `No. Unlike some other languages, Italian keeps "essere" and "andare" apart: "fossi" is only from "essere", and "andare" gives the regular "andassi".`,
      },
    ],
    related: ["pluperfect-subjunctive", "sequence-of-tenses", "hypothetical-if-sentences", "come-se-qualora-chiunque"],
    lessons: [
      "b2-imperfect-subjunctive-forms",
      "b2-imperfect-subjunctive-irregular",
      "b2-imperfect-subjunctive-past-triggers",
      "b2-vorrei-che",
      "b2-magari",
      "b2-drill-imperfect-subjunctive-forms",
      "b2-drill-imperfect-subjunctive-use",
      "b2-error-hunt-imperfect-subjunctive",
      "b2-dialogue-lab-if-only",
    ],
  },
  {
    slug: "pluperfect-subjunctive",
    title: "The Pluperfect Subjunctive: Pensavo Che Fosse Già Partito",
    description:
      "How to form the congiuntivo trapassato (avessi fatto, fosse partito), when it replaces the imperfect subjunctive, and how it expresses regret about the past: magari l'avessi saputo!",
    level: "B2",
    intro: [
      `The congiuntivo trapassato is the fourth and last subjunctive tense. It does for the past what the passato del congiuntivo does for the present: it places an action before the moment of the main verb. "Penso che sia partito" (I think he has left) becomes "pensavo che fosse già partito" (I thought he had already left).`,
      `It is also the tense of regret and of conditions that can no longer come true: "magari l'avessi saputo!" (if only I had known!), "se fossi venuto, ti saresti divertito" (if you had come, you'd have enjoyed yourself).`,
    ],
    sections: [
      {
        heading: `Forms: avessi or fossi + past participle`,
        body: [
          `Take the auxiliary you use in the passato prossimo, put it in the imperfect subjunctive and add the past participle: "ho fatto" gives "avessi fatto", "sono partito" gives "fossi partito". If you know which verbs take "essere", there is nothing new.`,
          `With "essere" the participle agrees with the subject: "pensavo che Giulia fosse partita", "credevo che i ragazzi fossero arrivati". With "avere" it agrees only with a preceding direct-object pronoun: "magari l'avessi vista!" (if only I had seen her!).`,
        ],
        table: {
          headers: ["", "fare (avere)", "partire (essere)"],
          rows: [
            ["io", "avessi fatto", "fossi partito / partita"],
            ["tu", "avessi fatto", "fossi partito / partita"],
            ["lui, lei, Lei", "avesse fatto", "fosse partito / partita"],
            ["noi", "avessimo fatto", "fossimo partiti / partite"],
            ["voi", "aveste fatto", "foste partiti / partite"],
            ["loro", "avessero fatto", "fossero partiti / partite"],
          ],
        },
        examples: [
          { it: "Pensavo che avessi già mangiato.", en: "I thought you had already eaten." },
          { it: "Non sapevo che Chiara fosse tornata da Londra.", en: "I didn't know Chiara had come back from London." },
          { it: "Credevamo che i biglietti fossero finiti.", en: "We thought the tickets had sold out." },
          { it: "Era possibile che qualcuno avesse lasciato la porta aperta.", en: "It was possible that someone had left the door open." },
        ],
      },
      {
        heading: `Before a past moment`,
        body: [
          `After a past or conditional trigger, choose by time. If the subordinate action happens at the same time or later, use the imperfect: "pensavo che fosse malato" (I thought he was ill). If it happened earlier, use the pluperfect: "pensavo che fosse stato malato" (I thought he had been ill).`,
          `"Già", "prima" and "ormai" are clues that you need the pluperfect: "speravo che il treno non fosse ancora partito", "temevo che avessero già chiuso". The same choice works after conjunctions: "benché avesse studiato molto, non passò l'esame".`,
        ],
        examples: [
          { it: "Pensavo che fosse malato. / Pensavo che fosse stato malato.", en: "I thought he was ill. / I thought he had been ill." },
          { it: "Speravo che il treno non fosse ancora partito.", en: "I was hoping the train hadn't left yet." },
          { it: "Temevo che avessero già chiuso la farmacia.", en: "I was afraid they had already closed the pharmacy." },
          { it: "Benché avesse studiato molto, non ha passato l'esame.", en: "Although she had studied a lot, she didn't pass the exam." },
          { it: "Mi sembrava strano che nessuno ti avesse avvisato.", en: "It seemed strange to me that nobody had warned you." },
        ],
      },
      {
        heading: `Regret: magari, vorrei che, se`,
        body: [
          `"Magari" + pluperfect subjunctive is the classic Italian way to regret the past: "magari l'avessi saputo prima!" (if only I'd known sooner!). "Vorrei che" and "avrei voluto che" work the same way: "vorrei che me l'avessi detto" (I wish you had told me).`,
          `The pluperfect subjunctive is also the "se" half of conditions about the past, which have their own guide: "se l'avessi saputo, sarei venuto".`,
        ],
        examples: [
          { it: "Magari l'avessi saputo prima!", en: "If only I'd known sooner!" },
          { it: "Vorrei che me l'avessi detto.", en: "I wish you had told me." },
          { it: "Avrei preferito che non fossero venuti.", en: "I'd have preferred them not to come." },
          { it: "Magari avessimo comprato casa dieci anni fa!", en: "If only we'd bought a house ten years ago!" },
          { it: "Se fossi partito prima, non avresti perso il treno.", en: "If you had left earlier, you wouldn't have missed the train." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Pensavo che sia già partito.",
        right: "Pensavo che fosse già partito.",
        why: `After a past trigger, an earlier action takes the pluperfect subjunctive, not the passato del congiuntivo.`,
      },
      {
        wrong: "Magari l'avrei saputo prima!",
        right: "Magari l'avessi saputo prima!",
        why: `"Magari" in a wish takes the subjunctive, never the conditional. Note the "lo" for the known fact: "l'avessi saputo", "me l'avessi detto".`,
      },
      {
        wrong: "Non sapevo che Marta avesse partita.",
        right: "Non sapevo che Marta fosse partita.",
        why: `"Partire" takes "essere", so the auxiliary is "fosse" and the participle agrees.`,
      },
      {
        wrong: "Vorrei che mi hai chiamato.",
        right: "Vorrei che mi avessi chiamato.",
        why: `A wish about a past that did not happen takes the pluperfect subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `"Fosse" or "fosse stato": which do I need?`,
        a: `Ask whether the subordinate action is earlier than the main verb. "Credevo che fosse a casa" (I thought she was at home, at that moment); "credevo che fosse stata a casa" (I thought she had been at home, before that moment).`,
      },
      {
        q: `Is "magari" + pluperfect only for regrets?`,
        a: `Mostly. With the imperfect subjunctive, "magari" wishes about now ("magari fosse qui!"); with the pluperfect it looks back at what didn't happen ("magari fosse venuto!").`,
      },
      {
        q: `Will I hear it in conversation?`,
        a: `Yes, especially in "se l'avessi saputo", "magari" and "come se". In fast casual speech some people use the imperfetto instead ("se lo sapevo, venivo"), but the pluperfect subjunctive is the standard and is never wrong.`,
      },
    ],
    related: ["imperfect-subjunctive", "sequence-of-tenses", "impossible-past-if-sentences"],
    lessons: [
      "b2-pluperfect-subjunctive-forms",
      "b2-pluperfect-subjunctive-use",
      "b2-unreal-past-wishes",
      "b2-drill-pluperfect-subjunctive",
      "b2-contrast-fosse-fosse-stato",
      "b2-drill-subjunctive-four-tenses",
      "b2-error-hunt-pluperfect-subjunctive",
      "b2-dialogue-lab-surprise",
    ],
  },
  {
    slug: "sequence-of-tenses",
    title: "Penso Che Sia, Pensavo Che Fosse: The Sequence of Tenses",
    description:
      "The Italian concordanza dei tempi: which of the four subjunctive tenses follows a present, past or conditional main verb, and how to express a later action with the future or the past conditional.",
    level: "B2",
    intro: [
      `With four subjunctive tenses you need a rule for choosing among them. Italian uses two questions. First: is the main verb in the present (or future), or in a past tense (or the conditional)? Second: does the subordinate action happen at the same time as the main verb, before it, or after it?`,
      `The answers give a small grid, the concordanza dei tempi, that covers almost every sentence you will write. Learn it once with one verb and you can apply it everywhere.`,
    ],
    sections: [
      {
        heading: `Present main verb`,
        body: [
          `With "penso", "credo", "spero", "è possibile" and other present triggers: same time, present subjunctive ("penso che sia a casa"); earlier, past subjunctive ("penso che sia uscito"); later, the present subjunctive or, more clearly, the future indicative ("penso che arrivi domani", "penso che arriverà domani").`,
          `The same applies after a future or an imperative main verb: "gli dirò che venga pure", "fa' in modo che tutti lo sappiano".`,
        ],
        examples: [
          { it: "Penso che Luca sia in ufficio.", en: "I think Luca is at the office." },
          { it: "Penso che Luca sia già uscito.", en: "I think Luca has already gone out." },
          { it: "Penso che Luca arriverà verso le nove.", en: "I think Luca will arrive around nine." },
          { it: "È possibile che abbiano cambiato idea.", en: "It's possible that they've changed their minds." },
        ],
      },
      {
        heading: `Past or conditional main verb`,
        body: [
          `With "pensavo", "ho pensato", "pensai", "avevo pensato", or with "vorrei", "preferirei", "sarebbe meglio": same time, imperfect subjunctive ("pensavo che fosse a casa"); earlier, pluperfect subjunctive ("pensavo che fosse già uscito").`,
          `For a later action, Italian uses the past conditional, not the subjunctive: "pensavo che sarebbe arrivato il giorno dopo" (I thought he would arrive the next day). English uses would + verb here, and the trap is to translate it with the present conditional: "pensavo che arriverebbe" is wrong.`,
        ],
        examples: [
          { it: "Pensavo che Luca fosse in ufficio.", en: "I thought Luca was at the office." },
          { it: "Pensavo che Luca fosse già uscito.", en: "I thought Luca had already gone out." },
          { it: "Pensavo che Luca sarebbe arrivato verso le nove.", en: "I thought Luca would arrive around nine." },
          { it: "Vorrei che tutti fossero puntuali.", en: "I'd like everyone to be on time." },
          { it: "Mi aveva promesso che mi avrebbe aiutato.", en: "He had promised me he would help me." },
        ],
      },
      {
        heading: `The whole grid`,
        body: [
          `Read the table across: the main verb on the left, the three time relations in the columns. The future column uses the indicative or conditional because Italian has no future subjunctive.`,
          `When the main verb is a passato prossimo with a present result, Italians sometimes keep the present subjunctive: "mi ha detto che è meglio che tu venga" sounds natural because the advice still holds. In careful writing, follow the grid.`,
        ],
        table: {
          headers: ["Main verb", "Same time", "Earlier", "Later"],
          rows: [
            ["Penso che", "sia a casa", "sia stato a casa", "sarà a casa"],
            ["Pensavo che / Ho pensato che", "fosse a casa", "fosse stato a casa", "sarebbe stato a casa"],
            ["Vorrei che / Preferirei che", "fosse a casa", "fosse stato a casa", "(fosse a casa)"],
          ],
        },
        examples: [
          { it: "Spero che tu stia bene.", en: "I hope you're well." },
          { it: "Speravo che tu stessi bene.", en: "I was hoping you were well." },
          { it: "Speravo che il pacco fosse arrivato.", en: "I was hoping the parcel had arrived." },
          { it: "Ero sicuro che avrebbero vinto.", en: "I was sure they would win." },
          { it: "Preferirei che me lo dicessi subito.", en: "I'd rather you told me straight away." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Pensavo che arriverebbe domani.",
        right: "Pensavo che sarebbe arrivato il giorno dopo.",
        why: `The future in the past is the past conditional. Note too that "domani" becomes "il giorno dopo" when you look from the past.`,
      },
      {
        wrong: "Volevo che tu venga.",
        right: "Volevo che tu venissi.",
        why: `Past main verb, imperfect subjunctive.`,
      },
      {
        wrong: "Vorrei che tu sia felice.",
        right: "Vorrei che tu fossi felice.",
        why: `A conditional main verb counts as past for the grid.`,
      },
      {
        wrong: "Penso che sarebbe venuto ieri.",
        right: "Penso che sia venuto ieri.",
        why: `A present main verb with an earlier action takes the past subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `Does the passato remoto count as a past main verb?`,
        a: `Yes. Every past tense does: imperfetto, passato prossimo, passato remoto, trapassato. "Temette che fosse troppo tardi" (he feared it was too late).`,
      },
      {
        q: `Can "penso che" be followed by the conditional?`,
        a: `Yes, when the subordinate clause is itself conditional: "penso che sarebbe meglio aspettare" (I think it would be better to wait). The conditional here belongs to the content, not to the sequence of tenses.`,
      },
      {
        q: `Is the grid the same for "non so se" and reported questions?`,
        a: `Broadly yes in formal writing ("non sapevo se fosse vero"). In everyday speech the indicative is normal after "se": "non sapevo se era vero".`,
      },
    ],
    related: ["imperfect-subjunctive", "pluperfect-subjunctive", "reported-speech-advanced", "hypothetical-if-sentences"],
    lessons: [
      "b2-sequence-present-main",
      "b2-sequence-past-main",
      "b2-sequence-conditional-main",
      "b2-sequence-grid",
      "b2-drill-sequence-1",
      "b2-drill-sequence-2",
      "b2-contrast-sequence",
      "b2-error-hunt-sequence",
      "b2-mission-reported-hopes",
    ],
  },
  {
    slug: "hypothetical-if-sentences",
    title: "Se Avessi Tempo: Hypothetical If Sentences",
    description:
      "The Italian periodo ipotetico della possibilità: se + imperfect subjunctive with the present conditional, se fossi in te, why the conditional never follows se, and nel caso in cui and qualora.",
    level: "B2",
    intro: [
      `Italian grades if sentences by how real they are. A real condition keeps the indicative: "se ho tempo, vengo" (if I have time, I'll come). An imagined one, unlikely or contrary to the present facts, takes the imperfect subjunctive after "se" and the conditional in the other half: "se avessi tempo, verrei" (if I had time, I'd come).`,
      `The rule that matters most for English speakers: the conditional never goes after "se". English would sometimes appears in if clauses (if you would wait), and many Italians in speech get it wrong too, but "se avrei" is a classic error.`,
    ],
    sections: [
      {
        heading: `Se + imperfect subjunctive, conditional`,
        body: [
          `The "se" clause takes the imperfect subjunctive; the main clause takes the present conditional. Either half can come first: "se fossi ricco, comprerei una casa al mare" or "comprerei una casa al mare se fossi ricco". Put a comma after the "se" clause when it comes first.`,
          `"Se fossi in te" (if I were you) is the fixed way to give advice: "se fossi in te, accetterei". Questions work the same way: "cosa faresti se vincessi alla lotteria?".`,
        ],
        examples: [
          { it: "Se avessi più tempo, imparerei il pianoforte.", en: "If I had more time, I'd learn the piano." },
          { it: "Se abitassimo in centro, non useremmo la macchina.", en: "If we lived in the centre, we wouldn't use the car." },
          { it: "Se fossi in te, non gli direi niente.", en: "If I were you, I wouldn't tell him anything." },
          { it: "Cosa faresti se vincessi alla lotteria?", en: "What would you do if you won the lottery?" },
          { it: "Mi trasferirei a Bologna se trovassi lavoro lì.", en: "I'd move to Bologna if I found work there." },
        ],
      },
      {
        heading: `Real or hypothetical?`,
        body: [
          `The choice of mood tells the listener how likely you think the condition is. "Se domani piove, resto a casa" treats rain as a real possibility; "se domani piovesse, resterei a casa" makes it sound less likely. Both are correct; they mean slightly different things.`,
          `For something contrary to the facts of the present, only the subjunctive works: "se fossi più alto" (I am not), "se avessi la macchina" (I don't have one).`,
        ],
        table: {
          headers: ["Type", "Se clause", "Main clause", "Example"],
          rows: [
            ["Real", "indicative", "indicative / imperative", "Se hai fame, mangia qualcosa."],
            ["Possible / imagined", "imperfect subjunctive", "present conditional", "Se avessi fame, mangerei."],
            ["Impossible (past)", "pluperfect subjunctive", "past conditional", "Se avessi avuto fame, avrei mangiato."],
          ],
        },
        examples: [
          { it: "Se hai bisogno, chiamami.", en: "If you need anything, call me." },
          { it: "Se avessi bisogno, ti chiamerei.", en: "If I needed anything, I'd call you." },
          { it: "Se domani c'è il sole, andiamo al mare.", en: "If it's sunny tomorrow, we'll go to the seaside." },
          { it: "Se domani ci fosse il sole, andremmo al mare.", en: "If it were sunny tomorrow, we'd go to the seaside." },
        ],
      },
      {
        heading: `Nel caso in cui and qualora`,
        body: [
          `"Nel caso in cui", "nel caso che" and the more formal "qualora" also introduce conditions, and they always take the subjunctive: "nel caso in cui il volo fosse cancellato, Le rimborseremo il biglietto". You meet them in contracts, emails and notices.`,
          `With these, the present subjunctive is also possible for a real possibility: "qualora il prodotto risulti difettoso, contatti l'assistenza".`,
        ],
        examples: [
          { it: "Nel caso in cui il volo fosse cancellato, avrebbe diritto a un rimborso.", en: "If the flight were cancelled, you would be entitled to a refund." },
          { it: "Qualora il prodotto risulti difettoso, contatti l'assistenza.", en: "Should the product prove faulty, contact customer service." },
          { it: "Nel caso che non ci sia posto, andiamo in un altro ristorante.", en: "If there's no room, we'll go to another restaurant." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se avrei tempo, verrei.",
        right: "Se avessi tempo, verrei.",
        why: `Never the conditional after "se": the "se" clause takes the imperfect subjunctive.`,
      },
      {
        wrong: "Se avevo soldi, comprerei una casa.",
        right: "Se avessi soldi, comprerei una casa.",
        why: `English if I had suggests the imperfetto, but an imagined condition takes the subjunctive.`,
      },
      {
        wrong: "Se fossi te, accetterei.",
        right: "Se fossi in te, accetterei.",
        why: `The fixed expression is "se fossi in te", with "in".`,
      },
      {
        wrong: "Qualora il treno è in ritardo, aspettateci.",
        right: "Qualora il treno sia in ritardo, aspettateci.",
        why: `"Qualora" always takes the subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `Can the conditional ever appear after "se"?`,
        a: `Only when "se" means whether, in an indirect question: "non so se verrebbe" (I don't know whether he would come). In a condition, never.`,
      },
      {
        q: `Does the order of the clauses matter?`,
        a: `No, the meaning is the same. Putting the "se" clause first is more common and needs a comma; putting it second sounds like an afterthought.`,
      },
      {
        q: `What about "se no" and "altrimenti"?`,
        a: `They introduce the consequence of not doing something: "sbrigati, altrimenti perdiamo il treno". "Sennò" (also written "se no") is the spoken equivalent.`,
      },
    ],
    related: ["impossible-past-if-sentences", "imperfect-subjunctive", "come-se-qualora-chiunque"],
    lessons: [
      "b2-hypothetical-if",
      "b2-hypothetical-questions",
      "b2-never-conditional-after-se",
      "b2-drill-hypothetical-if",
      "b2-contrast-real-hypothetical",
      "b2-drill-real-vs-hypothetical",
      "b2-error-hunt-hypothetical",
      "b2-dialogue-lab-lottery",
      "b2-mission-ideal-life",
    ],
  },
  {
    slug: "impossible-past-if-sentences",
    title: "Se L'Avessi Saputo, Sarei Venuto: The Impossible Past",
    description:
      "The Italian periodo ipotetico dell'impossibilità (se + pluperfect subjunctive, past conditional), mixed conditions that cross past and present, and the spoken double imperfetto se lo sapevo, venivo.",
    level: "B2",
    intro: [
      `The third kind of if sentence talks about a past that cannot be changed: "se l'avessi saputo, sarei venuto" (if I had known, I would have come). Both halves are compound: pluperfect subjunctive after "se", past conditional in the main clause.`,
      `Real life often mixes times: a past condition with a present result ("se avessi studiato, adesso avrei un lavoro migliore") or a permanent condition with a past result ("se fossi più organizzato, non avrei perso il treno"). Italian handles these by choosing each half's tense for its own time.`,
    ],
    sections: [
      {
        heading: `Se + pluperfect subjunctive, past conditional`,
        body: [
          `The "se" clause takes "avessi" or "fossi" + participle; the main clause takes "avrei" or "sarei" + participle. Each verb keeps its own auxiliary: "se fossi partito prima, avrei preso il treno" (partire takes essere, prendere takes avere).`,
          `Agreement follows the usual rules: "se Giulia fosse arrivata in tempo, l'avremmo vista".`,
        ],
        examples: [
          { it: "Se l'avessi saputo, sarei venuto.", en: "If I had known, I would have come." },
          { it: "Se fossimo partiti prima, avremmo evitato il traffico.", en: "If we had left earlier, we'd have avoided the traffic." },
          { it: "Se non avesse piovuto, la partita si sarebbe giocata.", en: "If it hadn't rained, the match would have been played." },
          { it: "Cosa avresti fatto se ti avessero offerto quel lavoro?", en: "What would you have done if they'd offered you that job?" },
          { it: "Se Giulia fosse arrivata in tempo, l'avremmo vista.", en: "If Giulia had arrived on time, we'd have seen her." },
        ],
      },
      {
        heading: `Mixed conditions`,
        body: [
          `Past condition, present consequence: pluperfect subjunctive + present conditional. "Se avessi studiato medicina, adesso farei il medico" (if I had studied medicine, I'd be a doctor now). Words like "adesso", "oggi", "ora" signal this pattern.`,
          `Present (permanent) condition, past consequence: imperfect subjunctive + past conditional. "Se fossi più organizzato, non avrei perso il treno" (if I were more organised, I wouldn't have missed the train): being disorganised is a lasting trait, missing the train was a single past event.`,
        ],
        table: {
          headers: ["Condition", "Consequence", "Example"],
          rows: [
            ["present (imperfect subj.)", "present (conditional)", "Se avessi la macchina, ti accompagnerei."],
            ["past (pluperfect subj.)", "past (past conditional)", "Se avessi avuto la macchina, ti avrei accompagnato."],
            ["past (pluperfect subj.)", "present (conditional)", "Se avessi comprato la macchina, adesso ti accompagnerei."],
            ["present (imperfect subj.)", "past (past conditional)", "Se avessi una macchina, ti avrei accompagnato ieri."],
          ],
        },
        examples: [
          { it: "Se avessi studiato di più, oggi avrei un lavoro migliore.", en: "If I had studied more, I'd have a better job today." },
          { it: "Se non fossi così testardo, l'avresti ascoltata.", en: "If you weren't so stubborn, you'd have listened to her." },
          { it: "Se fossimo rimasti a Milano, adesso vivremmo in un appartamento piccolissimo.", en: "If we had stayed in Milan, we'd be living in a tiny flat now." },
          { it: "Se parlassi tedesco, avrei capito tutto.", en: "If I spoke German, I'd have understood everything." },
        ],
      },
      {
        heading: `Se lo sapevo, venivo: the spoken imperfetto`,
        body: [
          `In relaxed speech, many Italians replace both halves of an impossible-past condition with the imperfetto: "se lo sapevo, venivo" for "se l'avessi saputo, sarei venuto". Sometimes only one half changes: "se me lo dicevi, ti aiutavo".`,
          `Recognise it: you will hear it in films, in families and among friends. Do not write it, and do not use it at an exam, where it counts as an error. The standard form is always correct, in speech too.`,
        ],
        examples: [
          { it: "Se lo sapevo, venivo. (spoken)", en: "If I'd known, I'd have come." },
          { it: "Se me lo dicevi prima, ti aiutavo. (spoken)", en: "If you'd told me before, I'd have helped you." },
          { it: "Se me l'avessi detto prima, ti avrei aiutato.", en: "If you'd told me before, I'd have helped you." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se l'avrei saputo, sarei venuto.",
        right: "Se l'avessi saputo, sarei venuto.",
        why: `Never the conditional after "se".`,
      },
      {
        wrong: "Se avessi saputo, verrei.",
        right: "Se l'avessi saputo, sarei venuto.",
        why: `A past consequence needs the past conditional; and Italian adds "lo" for the known fact.`,
      },
      {
        wrong: "Se fossi partito prima, sarei preso il treno.",
        right: "Se fossi partito prima, avrei preso il treno.",
        why: `Each verb keeps its own auxiliary: "prendere" takes "avere".`,
      },
      {
        wrong: "Se avessi studiato medicina, adesso avrei fatto il medico.",
        right: "Se avessi studiato medicina, adesso farei il medico.",
        why: `"Adesso" points to a present consequence: present conditional.`,
      },
    ],
    faqs: [
      {
        q: `Is the double imperfetto wrong?`,
        a: `It is informal, not a mistake in casual speech, and native speakers of every region use it. It is out of place in writing, at work and at an exam. Learn the standard form first.`,
      },
      {
        q: `How do I know if the condition is "present" or "past" in a mixed sentence?`,
        a: `Ask whether it is a lasting state (being tall, speaking a language, living somewhere) or a single past event (studying medicine years ago, missing a train). Lasting states take the imperfect subjunctive.`,
      },
      {
        q: `Can I drop "se" in Italian like English had I known?`,
        a: `Yes, in formal writing: "avessi saputo, sarei venuto" or with a gerund, "sapendolo, sarei venuto". The version with "se" is the everyday one.`,
      },
    ],
    related: ["hypothetical-if-sentences", "pluperfect-subjunctive", "sequence-of-tenses"],
    lessons: [
      "b2-impossible-past-if",
      "b2-mixed-conditionals",
      "b2-spoken-imperfetto-if",
      "b2-drill-impossible-past",
      "b2-drill-three-types",
      "b2-contrast-if-types",
      "b2-error-hunt-impossible-past",
      "b2-reading-lab-history-what-if",
      "b2-dialogue-lab-missed-chances",
      "b2-mission-sliding-doors",
      "b2-spiral-units-1-5",
    ],
  },
  {
    slug: "come-se-qualora-chiunque",
    title: "Come Se, Purché, Chiunque: More Subjunctive Triggers",
    description:
      "Italian expressions that always take the subjunctive: come se, qualora, nel caso in cui, purché, a patto che, ammesso che, chiunque, qualunque, dovunque, and il primo, l'unico, l'ultimo che.",
    level: "B2",
    intro: [
      `Some Italian expressions carry the subjunctive with them wherever they go. Learn each one with a short model sentence and you will never have to think about the mood: "come se fosse facile", "purché tu sia d'accordo", "chiunque venga", "qualunque cosa succeda".`,
      `They share a meaning: the clause is not presented as a fact. It is a comparison with something unreal, a condition, or an unspecified person, thing or place.`,
    ],
    sections: [
      {
        heading: `Come se: as if`,
        body: [
          `"Come se" takes the imperfect subjunctive for something at the same time as the main verb and the pluperfect for something earlier, whatever the tense of the main verb: "parla come se fosse il capo" (he talks as if he were the boss), "mi guardava come se avessi detto una stupidaggine".`,
          `This is one place where the present subjunctive never appears: "come se sia" is wrong.`,
        ],
        examples: [
          { it: "Parla come se fosse il capo.", en: "He talks as if he were the boss." },
          { it: "Mi ha guardato come se avessi detto una stupidaggine.", en: "He looked at me as if I'd said something stupid." },
          { it: "Fate come se foste a casa vostra.", en: "Make yourselves at home." },
          { it: "Si comporta come se non fosse successo niente.", en: "She's behaving as if nothing had happened." },
        ],
      },
      {
        heading: `Conditions: purché, a patto che, ammesso che, qualora`,
        body: [
          `"Purché" and "a patto che" (provided that), "a condizione che" (on condition that), "ammesso che" (assuming that) and "qualora" or "nel caso (in cui)" (if, in case) all take the subjunctive. Present or imperfect follows the sequence of tenses: "puoi uscire purché torni entro mezzanotte"; "potevi uscire purché tornassi entro mezzanotte".`,
          `"Casomai" (in case, if by chance) can take the subjunctive or, in speech, the indicative: "casomai cambiassi idea, chiamami" / "casomai cambi idea, chiamami".`,
        ],
        examples: [
          { it: "Ti presto la macchina, purché me la riporti stasera.", en: "I'll lend you the car, provided you bring it back tonight." },
          { it: "Accetto, a patto che il lavoro sia pagato.", en: "I'll accept, on condition that the work is paid." },
          { it: "Ammesso che sia vero, cosa cambia?", en: "Assuming it's true, what difference does it make?" },
          { it: "Qualora non fosse possibile partecipare, La preghiamo di avvisarci.", en: "Should you be unable to attend, please let us know." },
          { it: "Casomai cambiassi idea, chiamami.", en: "If you happen to change your mind, call me." },
        ],
      },
      {
        heading: `Chiunque, qualunque, dovunque, comunque`,
        body: [
          `The -unque words mean whoever, whatever, wherever and however, and the verb after them is in the subjunctive: "chiunque venga" (whoever comes), "qualunque cosa succeda" (whatever happens), "dovunque tu vada" (wherever you go), "comunque vada" (however it goes). "Qualsiasi" works like "qualunque".`,
          `"Comunque" without a verb after it means anyway: "comunque, ci vediamo domani". With a verb, it means however and takes the subjunctive.`,
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["chiunque", "whoever", "Chiunque chiami, di' che non ci sono."],
            ["qualunque / qualsiasi (cosa)", "whatever", "Qualunque cosa succeda, resta calmo."],
            ["dovunque / ovunque", "wherever", "Dovunque tu vada, ti seguirò."],
            ["comunque", "however, no matter how", "Comunque vada, sarà un'esperienza."],
          ],
        },
        examples: [
          { it: "Chiunque chiami, di' che non ci sono.", en: "Whoever calls, say I'm not in." },
          { it: "Qualunque cosa tu decida, io sono con te.", en: "Whatever you decide, I'm with you." },
          { it: "Dovunque andassimo, trovavamo gente gentile.", en: "Wherever we went, we found kind people." },
          { it: "Comunque vada, sarà un'esperienza.", en: "However it goes, it'll be an experience." },
        ],
      },
      {
        heading: `Il primo, l'unico, l'ultimo che`,
        body: [
          `After a superlative or "il primo", "l'unico", "l'ultimo", "il solo", the relative clause usually takes the subjunctive: "è il film più bello che abbia mai visto", "sei l'unica persona che mi capisca". The subjunctive adds a subjective tone; the indicative is also heard, especially for plain facts ("è il primo che è arrivato").`,
        ],
        examples: [
          { it: "È il libro più bello che abbia mai letto.", en: "It's the best book I've ever read." },
          { it: "Sei l'unica persona che mi capisca davvero.", en: "You're the only person who really understands me." },
          { it: "Era l'ultimo treno che potessimo prendere.", en: "It was the last train we could catch." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Parla come se sia il capo.",
        right: "Parla come se fosse il capo.",
        why: `"Come se" takes the imperfect or pluperfect subjunctive, never the present.`,
      },
      {
        wrong: "Chiunque viene, digli di aspettare.",
        right: "Chiunque venga, digli di aspettare.",
        why: `"Chiunque" + verb takes the subjunctive in standard Italian.`,
      },
      {
        wrong: "Ti aiuto purché mi dici la verità.",
        right: "Ti aiuto purché tu mi dica la verità.",
        why: `"Purché" always takes the subjunctive. It already contains "che", so never add another one.`,
      },
      {
        wrong: "È il film più bello che ho mai visto.",
        right: "È il film più bello che abbia mai visto.",
        why: `After a superlative, standard written Italian prefers the subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `Is "purché" the same as "perché"?`,
        a: `No. "Purché" means provided that; "perché" means because (indicative) or so that (subjunctive). The accent is the same, acute, on both.`,
      },
      {
        q: `Can "come se" take the indicative in speech?`,
        a: `Almost never. It is one of the most stable subjunctive triggers in the language, and even very casual speakers say "come se fosse".`,
      },
      {
        q: `What is the difference between "qualunque" and "qualsiasi"?`,
        a: `None in meaning. Both are invariable and go before a singular noun: "qualunque giorno", "qualsiasi cosa". "Qualsiasi" can also follow the noun: "un giorno qualsiasi" (any old day).`,
      },
    ],
    related: ["hypothetical-if-sentences", "subjunctive-in-relative-clauses", "concession-and-contrast", "imperfect-subjunctive"],
    lessons: [
      "b2-come-se",
      "b2-qualora-nel-caso",
      "b2-chiunque-qualunque",
      "b2-superlative-subjunctive",
      "b2-drill-subjunctive-expressions",
      "b2-drill-subjunctive-all-triggers",
      "b2-error-hunt-come-se",
      "b2-reading-lab-contract",
      "b2-dialogue-lab-behaviour",
      "b2-mission-formal-conditions",
    ],
  },
  {
    slug: "subjunctive-in-relative-clauses",
    title: "Cerco Una Casa Che Abbia il Balcone: Mood in Relative Clauses",
    description:
      "When an Italian relative clause takes the subjunctive: something sought but not yet found, non c'è nessuno che, questions about existence, and the indicative for real, known things.",
    level: "B2",
    intro: [
      `A relative clause usually takes the indicative: "ho un appartamento che ha il balcone" (I have a flat that has a balcony). But when the thing described is only wanted, imagined or denied, Italian switches to the subjunctive: "cerco un appartamento che abbia il balcone" (I'm looking for a flat that has a balcony, any flat, if one exists).`,
      `English makes no difference here, so this is a matter of meaning, not of a trigger word. Ask yourself: does this thing exist, as far as the speaker knows?`,
    ],
    sections: [
      {
        heading: `Looking for, wanting, needing`,
        body: [
          `After "cerco", "voglio", "ho bisogno di", "mi serve", "preferisco" followed by an indefinite noun ("un", "una", "qualcuno", "qualcosa"), the relative clause describes requirements, and takes the subjunctive: "cerco qualcuno che parli cinese", "mi serve una macchina che consumi poco".`,
          `The sequence of tenses applies: "cercavamo un ristorante che fosse aperto la domenica".`,
        ],
        examples: [
          { it: "Cerco qualcuno che sappia riparare la lavatrice.", en: "I'm looking for someone who can fix the washing machine." },
          { it: "Ci serve una casa che abbia almeno tre camere.", en: "We need a house with at least three bedrooms." },
          { it: "Vorrei un lavoro che mi permetta di viaggiare.", en: "I'd like a job that lets me travel." },
          { it: "Cercavamo un ristorante che fosse aperto la domenica sera.", en: "We were looking for a restaurant that was open on Sunday evening." },
        ],
      },
      {
        heading: `Nobody who, is there anyone who?`,
        body: [
          `After a negative ("non c'è nessuno che", "non conosco niente che", "non ho trovato un posto che") the clause describes something that does not exist, so it takes the subjunctive: "non c'è nessuno che mi capisca".`,
          `In questions about existence ("c'è qualcuno che...?", "conosci un medico che...?") the subjunctive shows doubt and the indicative shows you expect a yes. "C'è qualcuno che parli inglese?" is open and polite; "c'è qualcuno che parla inglese?" is the everyday, neutral version.`,
        ],
        examples: [
          { it: "Non c'è nessuno che mi capisca.", en: "There's nobody who understands me." },
          { it: "Non ho trovato un albergo che accettasse cani.", en: "I didn't find a hotel that accepted dogs." },
          { it: "C'è qualcuno che possa aiutarmi?", en: "Is there anyone who can help me?" },
          { it: "Conosci un dentista che lavori il sabato?", en: "Do you know a dentist who works on Saturdays?" },
        ],
      },
      {
        heading: `Real or hypothetical: parla or parli?`,
        body: [
          `The same sentence can take either mood with different meanings. "Cerco la segretaria che parla tedesco" means a specific secretary I know about; "cerco una segretaria che parli tedesco" means I'm hiring, any secretary with German will do. The definite article often goes with the indicative, the indefinite with the subjunctive.`,
        ],
        table: {
          headers: ["Known, real (indicative)", "Wanted, imagined (subjunctive)"],
          rows: [
            ["Ho un amico che parla cinese.", "Cerco un amico che parli cinese."],
            ["Abitiamo in una casa che ha il giardino.", "Vogliamo una casa che abbia il giardino."],
            ["C'è un bar che apre alle sei.", "Non c'è un bar che apra alle sei."],
            ["Ho trovato un volo che costava poco.", "Non ho trovato un volo che costasse poco."],
          ],
        },
        examples: [
          { it: "Cerco la ragazza che lavora in biblioteca.", en: "I'm looking for the girl who works in the library." },
          { it: "Cerco una ragazza che lavori in biblioteca il fine settimana.", en: "I'm looking for a girl (anyone) to work in the library at weekends." },
          { it: "Ho finalmente un capo che mi ascolta.", en: "At last I have a boss who listens to me." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Cerco un appartamento che ha due bagni.",
        right: "Cerco un appartamento che abbia due bagni.",
        why: `A thing sought, not yet found, takes the subjunctive.`,
      },
      {
        wrong: "Non c'è nessuno che mi capisce.",
        right: "Non c'è nessuno che mi capisca.",
        why: `After a negative of existence, the subjunctive.`,
      },
      {
        wrong: "Ho una collega che parli tre lingue.",
        right: "Ho una collega che parla tre lingue.",
        why: `A real, known person: the indicative.`,
      },
      {
        wrong: "Cercavo un hotel che sia vicino alla stazione.",
        right: "Cercavo un hotel che fosse vicino alla stazione.",
        why: `Past main verb: imperfect subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `Is the indicative wrong in these clauses?`,
        a: `In speech, "cerco qualcuno che parla inglese" is common and understood. In writing (ads, emails, essays) the subjunctive is expected and sounds more precise.`,
      },
      {
        q: `Does the subjunctive in "c'è qualcuno che possa aiutarmi?" make it more polite?`,
        a: `Slightly, because it doesn't assume the answer. It is the usual form in shops, offices and written requests.`,
      },
      {
        q: `What about "dove" and "in cui"?`,
        a: `The same rule applies to every relative: "cerco un posto dove si possa parcheggiare", "non c'è un giorno in cui io sia libero".`,
      },
    ],
    related: ["come-se-qualora-chiunque", "imperfect-subjunctive", "mood-and-meaning"],
    lessons: [
      "b2-relative-subjunctive-search",
      "b2-relative-subjunctive-negative",
      "b2-relative-indicative-real",
      "b2-drill-relative-subjunctive",
      "b2-contrast-relative-mood",
      "b2-drill-relative-mixed",
      "b2-error-hunt-relative-mood",
      "b2-reading-lab-ads",
      "b2-dialogue-lab-flat-hunting",
      "b2-mission-wanted-ad",
    ],
  },
  {
    slug: "reported-speech-advanced",
    title: "Mi Disse Che Sarebbe Venuto: Reported Speech in Full",
    description:
      "Italian discorso indiretto at Upper Intermediate level: reported commands with di + infinitive or che + subjunctive, formal reported questions, reporting if sentences, the reporting verbs and every change of tense, person, time and place.",
    level: "B2",
    intro: [
      `At Intermediate level you learned to report statements in the present: "dice che è stanco". After a past reporting verb Italian shifts the tenses back, like English: "Marco ha detto: «Sono stanco»" becomes "Marco ha detto che era stanco". This guide completes the picture: commands, questions, wishes and if sentences, and the verbs that report them precisely.`,
      `The key changes are always the same three: the verb tense moves back, the persons change (io becomes lui), and words of time and place shift (oggi becomes quel giorno, qui becomes lì).`,
    ],
    sections: [
      {
        heading: `The tense shifts`,
        body: [
          `After "ha detto", "disse", "aveva detto" and other past reporting verbs: the present becomes the imperfetto; the passato prossimo becomes the trapassato prossimo; the future and the present conditional both become the past conditional; the imperative becomes "di" + infinitive or "che" + imperfect subjunctive.`,
          `Imperfetto, trapassato, past conditional and the imperfect and pluperfect subjunctive do not change.`,
        ],
        table: {
          headers: ["Direct", "Reported (after ha detto che)"],
          rows: [
            ["«Sono stanco.»", "era stanco"],
            ["«Ho perso il treno.»", "aveva perso il treno"],
            ["«Verrò domani.»", "sarebbe venuto il giorno dopo"],
            ["«Vorrei un caffè.»", "avrebbe voluto un caffè"],
            ["«Aspettami!»", "di aspettarlo / che lo aspettassi"],
            ["«Penso che sia vero.»", "pensava che fosse vero"],
          ],
        },
        examples: [
          { it: "Marco ha detto che aveva perso il treno.", en: "Marco said he had missed the train." },
          { it: "Chiara ha detto che sarebbe venuta il giorno dopo.", en: "Chiara said she would come the next day." },
          { it: "Mi ha detto che avrebbe voluto parlarmi.", en: "He told me he would have liked to talk to me." },
          { it: "Ha detto che pensava che fosse una buona idea.", en: "She said she thought it was a good idea." },
        ],
      },
      {
        heading: `Commands and questions`,
        body: [
          `A reported command takes "di" + infinitive when the person addressed is clear: "mi ha detto di aspettare". The alternative "che" + subjunctive is more formal and lets you name a different subject: "ha detto che aspettassimo fuori".`,
          `Reported yes-or-no questions use "se", wh-questions keep their question word. In speech the indicative follows ("mi ha chiesto se volevo un caffè"); in formal writing the subjunctive is preferred ("mi chiese se volessi un caffè").`,
        ],
        examples: [
          { it: "Il medico mi ha detto di riposare.", en: "The doctor told me to rest." },
          { it: "La professoressa disse che tutti consegnassero il compito.", en: "The teacher said that everyone should hand in the assignment." },
          { it: "Mi ha chiesto se volevo un caffè.", en: "She asked me if I wanted a coffee." },
          { it: "Il funzionario mi chiese dove abitassi.", en: "The official asked me where I lived." },
          { it: "Gli ho domandato perché non fosse venuto.", en: "I asked him why he hadn't come." },
        ],
      },
      {
        heading: `If sentences and time words`,
        body: [
          `A reported hypothetical keeps its subjunctive and moves the conditional to the past: «Se potessi, verrei» becomes "ha detto che sarebbe venuto se avesse potuto". A real condition shifts like any statement: «Se piove, resto a casa» becomes "ha detto che se pioveva sarebbe rimasto a casa".`,
          `Time and place words move with the point of view: "oggi" becomes "quel giorno", "ieri" becomes "il giorno prima", "domani" becomes "il giorno dopo", "la settimana prossima" becomes "la settimana seguente", "fa" becomes "prima", "qui" becomes "lì", "questo" becomes "quello", "venire" often becomes "andare".`,
        ],
        examples: [
          { it: "Ha detto che sarebbe venuto se avesse potuto.", en: "He said he would have come if he could." },
          { it: "Mi disse che il giorno prima era stata male.", en: "She told me she had been ill the day before." },
          { it: "Ci hanno detto che sarebbero tornati la settimana seguente.", en: "They told us they would be back the following week." },
          { it: "Ha detto che quel ristorante era il migliore della città.", en: "He said that restaurant was the best in town." },
        ],
      },
      {
        heading: `Reporting verbs`,
        body: [
          `"Dire" is fine, but precise verbs make reported speech clearer and more formal: "affermare" (state), "sostenere" (maintain), "dichiarare" (declare), "ammettere" (admit), "negare" (deny), "promettere" (promise), "suggerire" and "consigliare" (suggest, advise), "ordinare" (order), "rispondere", "aggiungere", "spiegare".`,
          `Verbs of advice and command take "di" + infinitive: "mi ha consigliato di prendere il treno". "Negare" usually takes the subjunctive: "ha negato che fosse vero" or "di" + infinitive: "ha negato di averlo fatto".`,
        ],
        examples: [
          { it: "Il ministro ha affermato che la situazione era sotto controllo.", en: "The minister stated that the situation was under control." },
          { it: "L'imputato ha negato di aver rubato il portafoglio.", en: "The defendant denied stealing the wallet." },
          { it: "Mi ha promesso che mi avrebbe richiamato.", en: "He promised me he would call me back." },
          { it: "Ci hanno consigliato di prenotare con largo anticipo.", en: "They advised us to book well in advance." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ha detto che verrà il giorno dopo.",
        right: "Ha detto che sarebbe venuto il giorno dopo.",
        why: `The future in the past is the past conditional.`,
      },
      {
        wrong: "Mi ha detto che aspetti.",
        right: "Mi ha detto di aspettare.",
        why: `A reported command to a known person: "di" + infinitive. "Che" would need the imperfect subjunctive: "che aspettassi".`,
      },
      {
        wrong: "Ha detto che verrebbe se potrebbe.",
        right: "Ha detto che sarebbe venuto se avesse potuto.",
        why: `Past conditional in the main part, pluperfect subjunctive after "se".`,
      },
      {
        wrong: "Ieri mi ha chiesto se voglio un caffè.",
        right: "Ieri mi ha chiesto se volevo un caffè.",
        why: `After a past reporting verb the present moves back to the imperfetto.`,
      },
    ],
    faqs: [
      {
        q: `Do I always have to shift the tenses?`,
        a: `If the reporting verb is in the present ("dice", "scrive") nothing shifts. After a recent passato prossimo, speakers sometimes keep the present when it is still true ("ha detto che è stanco" a minute ago); in writing, shift.`,
      },
      {
        q: `Why does the future become the past conditional, not the present conditional?`,
        a: `Italian treats the future seen from the past as a completed hypothesis. "Ha detto che verrebbe" is a common learner and even native error; "ha detto che sarebbe venuto" is standard.`,
      },
      {
        q: `Do Italians use « » for direct speech?`,
        a: `Yes, in print the angle quotes « » are standard; dashes appear in some novels and "double quotes" in informal writing.`,
      },
    ],
    related: ["sequence-of-tenses", "journalistic-italian", "hypothetical-if-sentences"],
    lessons: [
      "b2-reported-commands-subjunctive",
      "b2-reported-questions-formal",
      "b2-reported-if-sentences",
      "b2-reporting-verbs",
      "b2-drill-reported-speech-full",
      "b2-drill-direct-to-indirect",
      "b2-error-hunt-reported-full",
      "b2-reading-lab-interview",
      "b2-mission-minutes",
    ],
  },
  {
    slug: "implicit-clauses",
    title: "Dopo Aver Mangiato, Finita la Cena: Implicit Clauses",
    description:
      "How Italian shortens subordinate clauses with the past infinitive (dopo aver fatto), the past gerund (avendo finito) and the absolute participle (finita la cena), the same-subject rule and where pronouns go.",
    level: "B2",
    intro: [
      `Italian grammar distinguishes explicit clauses, with a conjugated verb ("dopo che abbiamo mangiato, siamo usciti"), from implicit ones, with an infinitive, gerund or participle ("dopo aver mangiato, siamo usciti"). Implicit clauses are shorter, more elegant and very common in writing, in the news and in CVs.`,
      `Three structures do most of the work: "dopo" + past infinitive, the past gerund, and the absolute participle. All three express an action completed before the main one.`,
    ],
    sections: [
      {
        heading: `Dopo + past infinitive`,
        body: [
          `The past infinitive is "avere" or "essere" + participle; "avere" usually drops its final "-e": "dopo aver mangiato", "dopo essere arrivati". With "essere" the participle agrees with the subject: "dopo essere arrivata a Roma, Chiara ha chiamato sua madre".`,
          `The implicit form needs the same subject as the main clause. "Dopo aver cenato, siamo usciti" is fine (we ate, we went out); if the subjects differ, use "dopo che": "dopo che i bambini hanno cenato, siamo usciti".`,
        ],
        examples: [
          { it: "Dopo aver finito il lavoro, sono andato in palestra.", en: "After finishing work, I went to the gym." },
          { it: "Dopo essere arrivata a Roma, Chiara ha chiamato sua madre.", en: "After arriving in Rome, Chiara called her mother." },
          { it: "Dopo esserci salutati, siamo tornati a casa.", en: "After saying goodbye, we went home." },
          { it: "È stato multato per aver superato il limite di velocità.", en: "He was fined for exceeding the speed limit." },
        ],
      },
      {
        heading: `The past gerund: avendo fatto, essendo partiti`,
        body: [
          `"Avendo" or "essendo" + participle expresses a completed action that is also the cause of the main one: "avendo perso il treno, abbiamo preso un taxi" (having missed the train, we took a taxi). With "essendo" the participle agrees: "essendo partite presto, sono arrivate prima di noi".`,
          `It is formal and written. In speech, "siccome abbiamo perso il treno" or "visto che" is more natural. Like the infinitive, the gerund needs the same subject as the main clause.`,
        ],
        examples: [
          { it: "Avendo perso il treno, abbiamo preso un taxi.", en: "Having missed the train, we took a taxi." },
          { it: "Essendo partite presto, sono arrivate prima di noi.", en: "Having left early, they arrived before us." },
          { it: "Non avendo ricevuto risposta, Le scrivo di nuovo.", en: "Not having received a reply, I am writing to you again." },
          { it: "Avendo lavorato dieci anni all'estero, parla tre lingue.", en: "Having worked abroad for ten years, she speaks three languages." },
        ],
      },
      {
        heading: `The absolute participle: finita la cena`,
        body: [
          `A past participle alone at the start of a sentence, agreeing with its noun, means once this was done: "finita la cena, siamo usciti" (once dinner was over, we went out), "arrivati a Roma, abbiamo cercato l'albergo", "presa la decisione, non si torna indietro".`,
          `Here the subject can differ from the main clause, because the participle carries its own noun. With transitive verbs the noun is what was done ("presa la decisione"); with intransitive verbs it is who did it ("arrivati a Roma").`,
        ],
        examples: [
          { it: "Finita la cena, siamo usciti a fare due passi.", en: "Once dinner was over, we went out for a walk." },
          { it: "Arrivati a Firenze, abbiamo cercato l'albergo.", en: "Once we arrived in Florence, we looked for the hotel." },
          { it: "Presa la decisione, non si torna indietro.", en: "Once the decision is made, there's no going back." },
          { it: "Letta la lettera, la strappò.", en: "Having read the letter, she tore it up." },
        ],
      },
      {
        heading: `Where the pronouns go`,
        body: [
          `Pronouns attach to the end of the infinitive, the gerund or the participle, as one word: "dopo averlo visto", "dopo esserci incontrati", "avendoglielo detto", "salutatili, se ne andò". The participle agrees with an attached direct-object pronoun: "vistala" (having seen her).`,
        ],
        examples: [
          { it: "Dopo averlo visto, ho capito tutto.", en: "After seeing him, I understood everything." },
          { it: "Avendoglielo già detto, non ho insistito.", en: "Having already told him, I didn't insist." },
          { it: "Salutatili, se ne andò.", en: "Having said goodbye to them, he left." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Dopo mangiare, siamo usciti.",
        right: "Dopo aver mangiato, siamo usciti.",
        why: `After "dopo", Italian uses the past infinitive, not the simple one.`,
      },
      {
        wrong: "Dopo aver arrivato, ho chiamato.",
        right: "Dopo essere arrivato, ho chiamato.",
        why: `"Arrivare" takes "essere", in the past infinitive too.`,
      },
      {
        wrong: "Dopo aver mangiato, il cameriere ci ha portato il conto.",
        right: "Dopo che avevamo mangiato, il cameriere ci ha portato il conto.",
        why: `Different subjects (we ate, the waiter brought): use an explicit clause.`,
      },
      {
        wrong: "Dopo lo aver visto, ho capito.",
        right: "Dopo averlo visto, ho capito.",
        why: `Pronouns attach to the infinitive, after "avere" drops its "-e".`,
      },
    ],
    faqs: [
      {
        q: `"Aver" or "avere"?`,
        a: `Both are correct; "aver" is far more common before a participle: "dopo aver letto". "Essere" usually keeps its "-e".`,
      },
      {
        q: `Is the absolute participle only literary?`,
        a: `No. "Finita la scuola", "arrivati a casa", "detto fatto" are everyday Italian. Long chains of them belong to formal prose.`,
      },
      {
        q: `Can I use the gerund as English does, for any -ing?`,
        a: `No. The Italian gerund must share the main clause's subject and expresses means, cause or time. Many English -ing forms become an infinitive or a relative clause in Italian.`,
      },
    ],
    related: ["cause-and-consequence", "formal-syntax", "nominal-style"],
    lessons: [
      "b2-past-infinitive",
      "b2-past-gerund",
      "b2-absolute-participle",
      "b2-implicit-pronouns",
      "b2-drill-implicit-clauses",
      "b2-drill-implicit-mixed",
      "b2-error-hunt-implicit",
      "b2-reading-lab-formal-narrative",
      "b2-mission-cv-profile",
    ],
  },
  {
    slug: "concession-and-contrast",
    title: "Benché, Nonostante, Anche Se: Concession and Contrast",
    description:
      "How to say although and despite in Italian: benché, sebbene, nonostante and malgrado with the subjunctive, anche se with the indicative, nonostante + noun, pur + gerund, per quanto, comunque, and the contrast connectors tuttavia and invece.",
    level: "B2",
    intro: [
      `Italian has many ways to say although, and they split into two groups by mood. "Benché", "sebbene", "nonostante", "malgrado" and "per quanto" take the subjunctive: "benché sia tardi". "Anche se" takes the indicative: "anche se è tardi". Both mean the same; "anche se" is the everyday choice, the subjunctive group is more formal.`,
      `For contrast between two ideas, Italian uses "ma", "però", "invece", "mentre", "tuttavia", "eppure" and "ciononostante", each with its own register and position.`,
    ],
    sections: [
      {
        heading: `The subjunctive connectors`,
        body: [
          `"Benché", "sebbene", "nonostante (che)" and "malgrado (che)" all mean although and require the subjunctive. The tense follows the sequence of tenses: "benché sia stanco, esco"; "benché fosse stanco, uscì".`,
          `"Per quanto" means however much or although: "per quanto mi sforzi, non ci riesco" (however hard I try, I can't do it).`,
        ],
        examples: [
          { it: "Benché sia stanca, stasera esco con le amiche.", en: "Although I'm tired, I'm going out with my friends tonight." },
          { it: "Sebbene avesse studiato, non ha superato l'esame.", en: "Although he had studied, he didn't pass the exam." },
          { it: "Nonostante piovesse, siamo andati al mare.", en: "Although it was raining, we went to the seaside." },
          { it: "Per quanto mi sforzi, non riesco a ricordare il suo nome.", en: "However hard I try, I can't remember his name." },
        ],
      },
      {
        heading: `Anche se, nonostante + noun, pur + gerund`,
        body: [
          `"Anche se" (even if, although) takes the indicative for real facts: "anche se piove, esco". For an imagined case it takes the subjunctive like any "se": "anche se fosse vero, non cambierebbe niente".`,
          `"Nonostante" and "malgrado" can also be prepositions before a noun: "nonostante la pioggia", "malgrado il traffico". "Pur" + gerund is a compact written alternative with the same subject: "pur essendo stanco, è uscito" (though tired, he went out).`,
        ],
        examples: [
          { it: "Anche se è tardi, ti accompagno a casa.", en: "Even though it's late, I'll walk you home." },
          { it: "Anche se fosse vero, non cambierebbe niente.", en: "Even if it were true, it wouldn't change anything." },
          { it: "Nonostante la pioggia, la festa è stata un successo.", en: "Despite the rain, the party was a success." },
          { it: "Pur essendo stanco, ha finito il lavoro.", en: "Though tired, he finished the job." },
          { it: "Pur non conoscendolo bene, mi fido di lui.", en: "Although I don't know him well, I trust him." },
        ],
      },
      {
        heading: `Contrast connectors`,
        body: [
          `"Ma" and "però" are the everyday buts; "però" can also go after the verb: "è caro, però è buono" / "è caro, è buono però". "Invece" contrasts two things ("io prendo il treno, Marco invece va in macchina"); "mentre" means while or whereas.`,
          `"Tuttavia", "eppure", "ciononostante" and "al contrario" belong to written argument: "il progetto è interessante; tuttavia, i costi sono troppo alti".`,
        ],
        table: {
          headers: ["Connector", "Register", "Example"],
          rows: [
            ["ma, però", "neutral", "È bravo, però è sempre in ritardo."],
            ["invece", "neutral", "Io resto; tu invece vai pure."],
            ["mentre", "neutral", "Lui ama il mare, mentre lei preferisce la montagna."],
            ["eppure", "neutral, emphatic", "Ho studiato tanto, eppure non ricordo niente."],
            ["tuttavia", "formal", "Il piano è valido; tuttavia, mancano i fondi."],
            ["ciononostante", "formal", "Il tempo era pessimo; ciononostante, la gara si è svolta."],
          ],
        },
        examples: [
          { it: "Io prendo il treno, Marco invece va in macchina.", en: "I'm taking the train; Marco, on the other hand, is driving." },
          { it: "Ho studiato tanto, eppure non ricordo niente.", en: "I studied so much, and yet I don't remember anything." },
          { it: "Il progetto è interessante; tuttavia, i costi sono troppo alti.", en: "The project is interesting; however, the costs are too high." },
          { it: "Comunque vada, sarò fiero di te.", en: "However it goes, I'll be proud of you." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Benché è tardi, esco.",
        right: "Benché sia tardi, esco.",
        why: `"Benché" always takes the subjunctive.`,
      },
      {
        wrong: "Anche se sia tardi, esco.",
        right: "Anche se è tardi, esco.",
        why: `"Anche se" takes the indicative for a real fact.`,
      },
      {
        wrong: "Anche se la pioggia, siamo usciti.",
        right: "Nonostante la pioggia, siamo usciti.",
        why: `"Anche se" needs a verb after it. Before a noun, use "nonostante" or "malgrado", with no preposition.`,
      },
      {
        wrong: "Malgrado era stanco, ha lavorato.",
        right: "Malgrado fosse stanco, ha lavorato.",
        why: `"Malgrado" + verb takes the subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `Is there any difference between "benché" and "sebbene"?`,
        a: `No real difference in meaning. Both are slightly formal; "sebbene" is a little more literary. In conversation, "anche se" is the usual choice.`,
      },
      {
        q: `Does "tuttavia" need commas?`,
        a: `At the start of a clause it is usually followed by a comma, and after a semicolon or full stop: "...; tuttavia, ...". Inside the clause it goes between commas: "il piano, tuttavia, non convince".`,
      },
      {
        q: `What is the difference between "invece" and "invece di"?`,
        a: `"Invece" is an adverb (on the other hand); "invece di" + noun or infinitive means instead of: "invece di lamentarti, aiutami".`,
      },
    ],
    related: ["cause-and-consequence", "come-se-qualora-chiunque", "formal-writing"],
    lessons: [
      "b2-concession-subjunctive",
      "b2-concession-noun-gerund",
      "b2-contrast-connectors",
      "b2-comunque-vada",
      "b2-drill-concession",
      "b2-drill-concession-mixed",
      "b2-error-hunt-concession",
      "b2-reading-lab-essay",
      "b2-mission-balanced-paragraph",
    ],
  },
  {
    slug: "cause-and-consequence",
    title: "Siccome, Dato Che, Quindi: Cause and Consequence",
    description:
      "Italian connectors of cause (perché, poiché, siccome, dato che, visto che, a causa di, grazie a, per + past infinitive) and consequence (quindi, perciò, di conseguenza, così... che, tanto... che), and the difference between in modo che and così che.",
    level: "B2",
    intro: [
      `"Perché" is the all-purpose because, but Italian has a whole set of cause connectors, and each has its place in the sentence. "Siccome" comes first, "perché" comes second, and "dato che" or "visto che" go anywhere.`,
      `On the consequence side, "quindi" and "perciò" are the everyday sos; "così... che" and "tanto... che" give the English so... that. One trap: "in modo che" (so that, purpose) takes the subjunctive, while "così che" (so, result) usually takes the indicative.`,
    ],
    sections: [
      {
        heading: `Cause: because, since, given that`,
        body: [
          `"Perché" introduces the cause after the main clause: "resto a casa perché sono stanco". "Siccome" goes at the start: "siccome sono stanco, resto a casa". Starting a sentence with "perché" in this sense sounds wrong in Italian.`,
          `"Poiché" is the formal equivalent of both. "Dato che", "visto che" and "dal momento che" (since, given that) present a cause both people already know: "visto che sei qui, aiutami".`,
        ],
        examples: [
          { it: "Resto a casa perché ho la febbre.", en: "I'm staying at home because I have a temperature." },
          { it: "Siccome il treno era in ritardo, abbiamo preso un taxi.", en: "Since the train was late, we took a taxi." },
          { it: "Visto che sei qui, dammi una mano.", en: "Since you're here, give me a hand." },
          { it: "Poiché il numero di iscritti è insufficiente, il corso è annullato.", en: "Since there are not enough participants, the course is cancelled." },
          { it: "Dal momento che nessuno risponde, scriverò un'email.", en: "Since nobody is answering, I'll write an email." },
        ],
      },
      {
        heading: `A causa di, grazie a, per`,
        body: [
          `Before a noun, use "a causa di" for a negative cause and "grazie a" for a positive one: "a causa dello sciopero", "grazie al tuo aiuto". "Per" + noun is also common: "chiuso per ferie", "per colpa tua".`,
          `"Per" + past infinitive gives the reason for a reward or punishment: "è stato multato per aver superato il limite", "l'hanno premiata per aver salvato un bambino".`,
        ],
        examples: [
          { it: "Il volo è stato cancellato a causa della nebbia.", en: "The flight was cancelled because of the fog." },
          { it: "Grazie al tuo aiuto, abbiamo finito in tempo.", en: "Thanks to your help, we finished on time." },
          { it: "Il negozio è chiuso per ferie.", en: "The shop is closed for the holidays." },
          { it: "L'hanno premiata per aver salvato un bambino.", en: "They gave her an award for saving a child." },
        ],
      },
      {
        heading: `Consequence and result`,
        body: [
          `"Quindi", "perciò", "per questo" and "allora" are the neutral connectors; "di conseguenza", "pertanto" and "dunque" are more formal. "Così... che", "tanto... che" and "talmente... che" give so... that, with the indicative: "era così stanco che si è addormentato in treno".`,
          `"In modo che" and "affinché" express purpose (so that) and take the subjunctive: "parla piano in modo che tutti capiscano". "Così che" can express either, but usually a result, with the indicative: "ha piovuto tutto il giorno, così che siamo rimasti a casa".`,
        ],
        table: {
          headers: ["Connector", "Meaning", "Mood"],
          rows: [
            ["quindi, perciò, per questo", "so, therefore", "indicative"],
            ["di conseguenza, pertanto", "consequently (formal)", "indicative"],
            ["così / tanto / talmente ... che", "so ... that", "indicative"],
            ["in modo che, affinché, perché", "so that (purpose)", "subjunctive"],
          ],
        },
        examples: [
          { it: "Ho perso le chiavi, quindi ho chiamato un fabbro.", en: "I lost my keys, so I called a locksmith." },
          { it: "Era così stanco che si è addormentato in treno.", en: "He was so tired that he fell asleep on the train." },
          { it: "Ha mangiato talmente tanto che si è sentito male.", en: "He ate so much that he felt ill." },
          { it: "Parla più forte in modo che tutti ti sentano.", en: "Speak louder so that everyone can hear you." },
          { it: "I prezzi sono aumentati; di conseguenza, le vendite sono calate.", en: "Prices went up; as a result, sales fell." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Perché ero stanco, sono andato a letto.",
        right: "Siccome ero stanco, sono andato a letto.",
        why: `A cause placed first takes "siccome" (or "dato che", "visto che"), not "perché".`,
      },
      {
        wrong: "Grazie alla pioggia, la partita è stata rinviata.",
        right: "A causa della pioggia, la partita è stata rinviata.",
        why: `"Grazie a" is for a positive cause; a negative one takes "a causa di".`,
      },
      {
        wrong: "Ti scrivo in modo che sai tutto.",
        right: "Ti scrivo in modo che tu sappia tutto.",
        why: `"In modo che" expresses purpose and takes the subjunctive.`,
      },
      {
        wrong: "Era tanto stanco che si sia addormentato.",
        right: "Era tanto stanco che si è addormentato.",
        why: `A real result after "tanto... che" takes the indicative.`,
      },
    ],
    faqs: [
      {
        q: `Can "perché" mean so that?`,
        a: `Yes, with the subjunctive: "te lo dico perché tu lo sappia" (I'm telling you so that you know). With the indicative it means because. The mood tells you which.`,
      },
      {
        q: `Is "allora" a consequence connector?`,
        a: `In speech, yes: "non c'era nessuno, allora sono andato via". In writing prefer "quindi" or "perciò". "Allora" is also a filler (so, well) at the start of a turn.`,
      },
      {
        q: `What is the difference between "poiché" and "perché"?`,
        a: `Meaning is the same; "poiché" is formal and can start a sentence. In conversation, "perché" after the main clause or "siccome" before it.`,
      },
    ],
    related: ["concession-and-contrast", "implicit-clauses", "formal-writing"],
    lessons: [
      "b2-cause-connectors",
      "b2-a-causa-di-grazie-a",
      "b2-consequence-connectors",
      "b2-cosi-che-tanto-che",
      "b2-drill-cause-consequence",
      "b2-drill-cause-mixed",
      "b2-error-hunt-cause",
      "b2-reading-lab-report",
      "b2-mission-incident-explanation",
    ],
  },
  {
    slug: "advanced-ci-and-ne",
    title: "Ce Ne, Ce Lo, Lo So: Advanced Pronouns and Particles",
    description:
      "Advanced Italian particles: ce ne and ce lo, lo standing for a whole idea, ne for di + clause, agreement in compound tenses, and the verbs volerci, metterci, starci, entrarci, tenerci, farcela and cavarsela.",
    level: "B2",
    intro: [
      `"Ci" and "ne" are small words that cover a lot of ground. At this level they combine with each other and with other pronouns ("ce ne sono tre", "ce lo metto"), stand for whole ideas ("ne sono sicuro", "lo so") and form a family of idiomatic verbs ("ci vuole", "ci metto", "ce la faccio").`,
      `The mechanics are simple once you know two rules: "ci" becomes "ce" before "lo", "la", "li", "le" and "ne"; and the particles go before a conjugated verb but attach to an infinitive, gerund or tu-imperative.`,
    ],
    sections: [
      {
        heading: `Ce ne and ce lo`,
        body: [
          `"Ce ne" combines "ci" (there) and "ne" (of them): "quante bottiglie ci sono? Ce ne sono tre". It also appears in idioms: "ce ne vuole" (it takes a lot), "me ne vado", "te ne sei accorto?".`,
          `"Ce lo", "ce la", "ce li", "ce le" combine "ci" with a direct-object pronoun: "metti le chiavi nel cassetto? Sì, ce le metto". In compound tenses the participle agrees with the object: "ce le ho messe".`,
        ],
        examples: [
          { it: "Quanti studenti ci sono? Ce ne sono venti.", en: "How many students are there? There are twenty." },
          { it: "Ce ne vuole di pazienza con lui!", en: "You need a lot of patience with him!" },
          { it: "Le chiavi? Ce le ho messe io, nel cassetto.", en: "The keys? I put them there, in the drawer." },
          { it: "Il pane nel cestino? Sì, ce l'ho messo.", en: "The bread in the basket? Yes, I put it there." },
          { it: "Di pasta ce n'è ancora un chilo.", en: "There's still a kilo of pasta." },
        ],
      },
      {
        heading: `Lo and ne for whole ideas`,
        body: [
          `"Lo" can stand for a whole clause or idea: "lo so" (I know it), "non lo credo", "lo dicevo io!" (I told you so!), "te l'avevo detto". English often leaves this out (just I know), but Italian needs it after "sapere", "dire", "credere", "immaginare".`,
          `"Ne" replaces "di" + something, including a clause: "sei sicuro che venga? Sì, ne sono sicuro" (sure of it); "che ne pensi?" (what do you think of it?); "non ne ho idea".`,
        ],
        examples: [
          { it: "Sai che Paolo si sposa? Sì, lo so.", en: "Do you know Paolo is getting married? Yes, I know." },
          { it: "Te l'avevo detto che sarebbe piovuto!", en: "I told you it would rain!" },
          { it: "Ne sono convinta.", en: "I'm convinced of it." },
          { it: "Che ne pensi del nuovo direttore?", en: "What do you think of the new manager?" },
          { it: "Non ne ho la minima idea.", en: "I haven't the faintest idea." },
        ],
      },
      {
        heading: `Verbs with ci, ne and la`,
        body: [
          `Many common verbs have a particle built in that changes their meaning. Learn them as vocabulary: the particle never goes away. In compound tenses, "-sene" and "-cela" verbs take "essere" or "avere" as shown in the table.`,
        ],
        table: {
          headers: ["Verb", "Meaning", "Example"],
          rows: [
            ["volerci", "to take (time, effort)", "Ci vogliono due ore. Ci è voluto un anno."],
            ["metterci", "to take (someone takes)", "Ci metto dieci minuti. Ci ho messo un'ora."],
            ["entrarci", "to have to do with", "Io non c'entro! Che c'entra?"],
            ["tenerci", "to care about", "Ci teniamo molto. Ci teneva tanto."],
            ["starci", "to fit; to be up for it", "In macchina ci stiamo in cinque. Ci stai?"],
            ["farcela", "to manage", "Ce la faccio. Ce l'abbiamo fatta!"],
            ["cavarsela", "to get by", "Me la cavo. Se l'è cavata bene."],
            ["andarsene", "to leave, go away", "Me ne vado. Se ne sono andati."],
          ],
        },
        examples: [
          { it: "Per arrivare a Bari ci vogliono quattro ore.", en: "It takes four hours to get to Bari." },
          { it: "Quanto ci metti a prepararti?", en: "How long do you take to get ready?" },
          { it: "Questo non c'entra niente con il problema.", en: "This has nothing to do with the problem." },
          { it: "Ci teniamo davvero che tu venga alla festa.", en: "We really want you to come to the party." },
          { it: "Ce l'abbiamo fatta!", en: "We made it!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ci ne sono tre.",
        right: "Ce ne sono tre.",
        why: `"Ci" becomes "ce" before "ne".`,
      },
      {
        wrong: "Ci vuole due ore.",
        right: "Ci vogliono due ore.",
        why: `"Volerci" agrees with what is needed: plural "due ore", plural verb.`,
      },
      {
        wrong: "Ci vogliono dieci minuti per me per arrivare.",
        right: "Ci metto dieci minuti ad arrivare.",
        why: `When a person takes time, use "metterci" with that person as subject.`,
      },
      {
        wrong: "Sì, so.",
        right: "Sì, lo so.",
        why: `"Sapere" needs "lo" for the known fact.`,
      },
      {
        wrong: "Ce l'abbiamo fatto!",
        right: "Ce l'abbiamo fatta!",
        why: `The "la" of "farcela" is feminine, and the participle agrees with it.`,
      },
    ],
    faqs: [
      {
        q: `Why is it "c'è" but "ce n'è"?`,
        a: `"C'è" is "ci" elided before "è". With "ne" in between, "ci" first becomes "ce", then "ne" elides before "è": "ce n'è".`,
      },
      {
        q: `What does the "la" in "farcela" refer to?`,
        a: `Nothing specific: it is a fossilised feminine pronoun, like it in make it. It still triggers agreement: "ce l'ho fatta".`,
      },
      {
        q: `Is "a Marco gli ho detto" correct?`,
        a: `It doubles the indirect object, a common feature of spoken Italian. In writing, say "a Marco ho detto" or "gli ho detto".`,
      },
    ],
    related: ["spoken-italian", "hard-prepositions"],
    lessons: [
      "b2-ce-ne",
      "b2-lo-for-clauses",
      "b2-ne-for-clauses",
      "b2-ci-verbs",
      "b2-drill-ci-ne-advanced",
      "b2-drill-pronouns-all",
      "b2-error-hunt-particles",
      "b2-listening-lab-particles",
      "b2-dialogue-lab-it-matters",
    ],
  },
  {
    slug: "hard-prepositions",
    title: "Da, Di, Per, Su: The Hard Cases of Italian Prepositions",
    description:
      "The many meanings of da (origin, agent, at someone's place, since, purpose, characteristic, as a child, value, manner), the trickier uses of di, per, su and tra, and verbs whose preposition changes the meaning: pensare a / di, credere a / in.",
    level: "B2",
    intro: [
      `At this level you know the basic prepositions. What remains are the uses English cannot predict, and most of them belong to "da": "una macchina da corsa" (a racing car), "la ragazza dai capelli rossi" (the girl with red hair), "da bambino" (as a child), "un biglietto da dieci euro" (a ten-euro note).`,
      `The rest are a handful of patterns with "di", "per", "su" and "tra", and the verbs that change meaning with their preposition: "pensare a" (think about) and "pensare di" (intend to, have an opinion).`,
    ],
    sections: [
      {
        heading: `The many faces of "da"`,
        body: [
          `Beyond from ("vengo da Napoli") and at someone's place ("vado da Luca", "dal medico"), "da" marks the agent of a passive ("fatto da mia nonna", "progettato da un ingegnere"), and since or for with the present ("studio italiano da tre anni").`,
          `Before a noun or infinitive it gives purpose or function: "scarpe da ginnastica", "macchina da scrivere", "qualcosa da bere", "niente da fare". Before a physical feature it describes: "la ragazza dagli occhi verdi". Before a role or age it means as: "da bambino giocavo a calcio", "ti parlo da amico". It also gives value ("un francobollo da un euro") and manner ("da solo", "vivere da re").`,
        ],
        table: {
          headers: ["Use", "Example", "Meaning"],
          rows: [
            ["origin", "Vengo da Napoli.", "I come from Naples."],
            ["someone's place", "Stasera ceniamo da Marco.", "We're having dinner at Marco's tonight."],
            ["since / for", "Abito qui da cinque anni.", "I've lived here for five years."],
            ["purpose", "un costume da bagno", "a swimsuit"],
            ["to + infinitive", "Non c'è niente da mangiare.", "There's nothing to eat."],
            ["characteristic", "l'uomo dalla barba bianca", "the man with the white beard"],
            ["as (age, role)", "Da giovane viaggiavo molto.", "When I was young I travelled a lot."],
            ["value", "una banconota da cinquanta euro", "a fifty-euro note"],
            ["manner", "L'ho fatto da solo.", "I did it on my own."],
          ],
        },
        examples: [
          { it: "Da bambina passavo l'estate dai nonni.", en: "As a child I spent the summer at my grandparents'." },
          { it: "Mi serve un paio di scarpe da corsa.", en: "I need a pair of running shoes." },
          { it: "Ti parlo da amico, non da collega.", en: "I'm speaking to you as a friend, not as a colleague." },
          { it: "Hai qualcosa da leggere per il viaggio?", en: "Do you have something to read for the journey?" },
          { it: "Il ponte è stato progettato da un ingegnere giapponese.", en: "The bridge was designed by a Japanese engineer." },
        ],
      },
      {
        heading: `Di, per, su and tra`,
        body: [
          `"Di" gives material and content ("una maglia di lana", "un bicchiere di vino") and parts of the day or week used generally: "di notte", "di mattina", "di domenica" (on Sundays). Compare "un bicchiere da vino" (a wine glass) with "un bicchiere di vino" (a glass of wine).`,
          `"Per" gives duration in the past ("ho lavorato a Londra per due anni"), cause ("per colpa tua"), purpose and distribution ("due volte per settimana"). "Su" means about a topic ("un libro sulla guerra") and approximately with ages and amounts ("sui trent'anni", "sui cento euro"). "Tra" or "fra" means in, from now ("tra dieci minuti") and among or between.`,
        ],
        examples: [
          { it: "Mi passi un bicchiere da vino? Poi ti verso un bicchiere di vino.", en: "Can you pass me a wine glass? Then I'll pour you a glass of wine." },
          { it: "Di domenica i negozi sono chiusi.", en: "On Sundays the shops are closed." },
          { it: "Ho vissuto a Torino per tre anni; ora vivo a Bologna da due.", en: "I lived in Turin for three years; now I've been living in Bologna for two." },
          { it: "È un uomo sui cinquant'anni.", en: "He's a man of about fifty." },
          { it: "Il treno parte tra dieci minuti.", en: "The train leaves in ten minutes." },
        ],
      },
      {
        heading: `Verbs and their prepositions`,
        body: [
          `Some verbs change meaning with the preposition. "Pensare a" means think about ("penso a te"); "pensare di" means plan to ("penso di partire domani") or have an opinion ("che ne pensi?", "cosa pensi di questo film?"). "Credere a" means believe someone or a story ("non ti credo", "credo a quello che dici"); "credere in" means believe in ("credere in Dio", "credo in te").`,
          `Others simply have a different preposition from English: "dipendere da" (depend on), "innamorarsi di" (fall in love with), "sognare di" (dream of), "ringraziare di / per" (thank for), "interessarsi di" or "a" (be interested in).`,
        ],
        examples: [
          { it: "Penso spesso a mia nonna.", en: "I often think about my grandmother." },
          { it: "Pensiamo di trasferirci a Bari.", en: "We're thinking of moving to Bari." },
          { it: "Non credo a una parola di quello che dice.", en: "I don't believe a word he says." },
          { it: "Dipende dal tempo.", en: "It depends on the weather." },
          { it: "Si è innamorata di un ragazzo di Cagliari.", en: "She fell in love with a boy from Cagliari." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Studio italiano per tre anni.",
        right: "Studio italiano da tre anni.",
        why: `An action still going on: "da" + present tense. "Per" is for a finished period.`,
      },
      {
        wrong: "Vado al dottore.",
        right: "Vado dal dottore.",
        why: `To or at a person's place takes "da", not "a".`,
      },
      {
        wrong: "Mi servono scarpe di ginnastica.",
        right: "Mi servono scarpe da ginnastica.",
        why: `What something is for takes "da"; "di" gives material or content.`,
      },
      {
        wrong: "Dipende di te.",
        right: "Dipende da te.",
        why: `"Dipendere" takes "da".`,
      },
      {
        wrong: "Penso di te.",
        right: "Penso a te.",
        why: `Think about someone: "pensare a".`,
      },
    ],
    faqs: [
      {
        q: `"Tra" or "fra"?`,
        a: `They are interchangeable. Choose by sound: "fra tre giorni" avoids "tra tre", and "tra fratelli" avoids "fra fratelli".`,
      },
      {
        q: `Does "da" combine with the article?`,
        a: `Yes: "dal", "dallo", "dalla", "dai", "dagli", "dalle". "Vado dal medico", "dalla ragazza dagli occhi verdi".`,
      },
      {
        q: `Why "una tazza da tè" but "una tazza di tè"?`,
        a: `"Da" gives what the object is for (a teacup), "di" what it contains (a cup of tea). The same contrast works with "bicchiere", "bottiglia", "piatto".`,
      },
    ],
    related: ["verbs-with-prepositions", "articulated-prepositions", "simple-prepositions"],
    lessons: [
      "b2-da-meanings",
      "b2-di-per-su",
      "b2-verbs-with-prepositions",
      "b2-drill-da",
      "b2-drill-prepositions-hard",
      "b2-contrast-pensare-a-di",
      "b2-error-hunt-hard-prepositions",
      "b2-dialogue-lab-depends",
      "b2-mission-describe-a-character",
    ],
  },
  {
    slug: "spoken-italian",
    title: "Allora, Dai, Insomma: How Italians Really Talk",
    description:
      "The features of spoken Italian: discourse markers (allora, dai, insomma, cioè, tipo, boh, guarda, figurati), dislocation (il caffè lo prendo dopo), cleft sentences (è Marco che ha chiamato), exclamations, and which of them belong in writing.",
    level: "B2",
    intro: [
      `Conversation follows rules of its own. Italians open a turn with "allora" or "guarda", hold the floor with "cioè" and "insomma", move the topic to the front ("il caffè lo prendo dopo") and stress the new information with a cleft ("è Marco che ha chiamato, non Luca").`,
      `None of this is careless: it is the grammar of speech. Learn to recognise all of it and to use the common markers yourself; just leave most of it out of formal writing.`,
    ],
    sections: [
      {
        heading: `Discourse markers`,
        body: [
          `Markers organise talk rather than add content. Each has a typical job, and using the right one at the right moment makes your Italian sound natural far more than any rare word.`,
          `"Magari" deserves a note: as a marker it means maybe or I wish ("magari!" = I wish!). "Figurati" and "si figuri" (Lei form) are the standard replies to thanks and apologies: don't mention it.`,
        ],
        table: {
          headers: ["Marker", "Job", "Example"],
          rows: [
            ["allora", "start, move on", "Allora, cosa prendiamo?"],
            ["dai", "encourage, protest", "Dai, vieni con noi! / Ma dai!"],
            ["insomma", "sum up, impatience", "Insomma, non è andata benissimo."],
            ["cioè", "reformulate", "È lontano, cioè, a un'ora di treno."],
            ["tipo", "like, for example (informal)", "Ci vediamo tipo alle otto?"],
            ["boh", "I don't know", "Dov'è Marco? Boh."],
            ["beh, mah", "hesitate, doubt", "Beh, non saprei. Mah, vedremo."],
            ["guarda, senti", "get attention", "Senti, ti devo dire una cosa."],
            ["appunto", "exactly, that's the point", "Appunto, è quello che dicevo io."],
            ["figurati", "not at all, don't mention it", "Grazie! Figurati!"],
          ],
        },
        examples: [
          { it: "Allora, ragazzi, cominciamo?", en: "Right, everyone, shall we start?" },
          { it: "Dai, non te la prendere!", en: "Come on, don't get upset!" },
          { it: "Insomma, alla fine non è venuto nessuno.", en: "So basically, in the end nobody came." },
          { it: "Senti, mi presti la macchina domani?", en: "Listen, can you lend me the car tomorrow?" },
          { it: "Scusa il disturbo! Ma figurati!", en: "Sorry to bother you! Not at all!" },
        ],
      },
      {
        heading: `Dislocation: il caffè lo prendo dopo`,
        body: [
          `To make something the topic, Italians move it to the start (or the end) of the sentence and leave a pronoun in its place: "il caffè lo prendo dopo" (as for coffee, I'll have it later), "di soldi non ne ho", "a Roma ci vado domani", "lo sai che ore sono?". The pronoun is required: "il caffè prendo dopo" is wrong.`,
          `This is fully standard in speech and acceptable in relaxed writing. The doubled indirect object "a me mi piace" or "a Marco gli ho detto" is heard everywhere but still considered wrong in writing.`,
        ],
        examples: [
          { it: "Il caffè lo prendo dopo, grazie.", en: "I'll have the coffee later, thanks." },
          { it: "La pizza l'ho già ordinata.", en: "I've already ordered the pizza." },
          { it: "Di questo ne parliamo domani.", en: "We'll talk about this tomorrow." },
          { it: "Lo sai che Giulia si è trasferita?", en: "Did you know Giulia has moved?" },
        ],
      },
      {
        heading: `Clefts and exclamations`,
        body: [
          `A cleft sentence ("è... che") highlights one element, usually to correct someone: "è Marco che ha chiamato, non Luca", "è per questo che sono venuto". English does the same with it was... who.`,
          `Exclamations use "che" + adjective or noun ("che bello!", "che peccato!", "che fame!"), "quanto" ("quanto sei gentile!"), "come" ("come sei cresciuto!") and short words: "ma dai!" (no way!), "magari!" (if only!), "figurati!", "accidenti!".`,
        ],
        examples: [
          { it: "È Marco che ha chiamato, non Luca.", en: "It was Marco who called, not Luca." },
          { it: "È proprio per questo che te lo dico.", en: "That's exactly why I'm telling you." },
          { it: "Che peccato che tu non possa venire!", en: "What a shame you can't come!" },
          { it: "Ma dai! Non ci credo!", en: "No way! I don't believe it!" },
          { it: "Come sei cresciuto!", en: "How you've grown!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il caffè prendo dopo.",
        right: "Il caffè lo prendo dopo.",
        why: `A fronted direct object must be picked up by a pronoun.`,
      },
      {
        wrong: "Grazie, signora! Figurati!",
        right: "Grazie, signora! Si figuri!",
        why: `To someone you call "Lei", the reply is "si figuri"; "figurati" is the "tu" form.`,
      },
      {
        wrong: "È Marco chi ha chiamato.",
        right: "È Marco che ha chiamato.",
        why: `Cleft sentences use "che", never "chi".`,
      },
      {
        wrong: "A me mi piace il cinema. (in an essay)",
        right: "A me piace il cinema.",
        why: `The doubled pronoun is spoken style; in writing use one pronoun.`,
      },
    ],
    faqs: [
      {
        q: `Is "tipo" acceptable?`,
        a: `In casual speech, yes, especially among younger speakers ("tipo alle otto"). Avoid it in formal contexts, where "circa" or "per esempio" does the job.`,
      },
      {
        q: `What is the "che polivalente"?`,
        a: `A "che" used loosely for "in cui", "perché" or "dove" in speech: "il giorno che ci siamo conosciuti", "vieni che ti faccio vedere". Some uses are accepted ("il giorno che"), others are only spoken. Recognise them; in writing use the precise form.`,
      },
      {
        q: `Should I use "figurati" or "si figuri"?`,
        a: `"Figurati" to someone you call "tu", "si figuri" to someone you call "Lei", "figuratevi" to a group.`,
      },
    ],
    related: ["advanced-ci-and-ne", "register-shifting", "regional-italian"],
    lessons: [
      "b2-discourse-markers",
      "b2-dislocation",
      "b2-cleft-sentences",
      "b2-exclamations",
      "b2-drill-spoken-features",
      "b2-drill-dislocation",
      "b2-error-hunt-spoken",
      "b2-listening-lab-real-conversation",
      "b2-dialogue-lab-gossip-at-the-bar",
      "b2-mission-voice-message",
    ],
  },
  {
    slug: "passive-and-impersonal-in-writing",
    title: "Viene Fatto, Va Fatto, Si Fa: The Passive in Formal Italian",
    description:
      "The Italian passive at Upper Intermediate level: essere, venire and andare + participle, the si passivante in every tense with its agreement, the impersonal si, and how the news, reports and regulations use them to sound objective.",
    level: "B2",
    intro: [
      `You met the passive at Intermediate level. In real texts (news, reports, recipes, regulations) Italian uses it constantly, and chooses among four forms: "essere" ("la legge è stata approvata"), "venire" ("la legge viene discussa domani"), "andare" ("la domanda va presentata entro maggio", it must be submitted) and the "si passivante" ("si vendono case").`,
      `Choosing the right one is a matter of meaning and register, and the agreement rules in compound tenses catch out even advanced learners.`,
    ],
    sections: [
      {
        heading: `Essere, venire, andare`,
        body: [
          `"Essere" + participle is the general passive, in every tense: "il museo è stato restaurato". "Venire" + participle replaces "essere" in simple tenses only and stresses the action or a routine: "i rifiuti vengono raccolti il martedì". It cannot form compound tenses: "è venuto fatto" is wrong.`,
          `"Andare" + participle means must be done: "il modulo va firmato" (the form must be signed), "la pasta va scolata al dente". In the passato prossimo, "andare" means got lost: "i documenti sono andati persi".`,
        ],
        table: {
          headers: ["Form", "Meaning", "Example"],
          rows: [
            ["essere + participle", "is / was done", "Il ponte è stato chiuso."],
            ["venire + participle", "is (being) done (simple tenses)", "Il ponte viene chiuso ogni notte."],
            ["andare + participle", "must be done", "Il ponte va chiuso subito."],
            ["si + verb", "is done (people do it)", "Qui si chiude alle otto."],
          ],
        },
        examples: [
          { it: "Il nuovo ospedale è stato inaugurato ieri.", en: "The new hospital was opened yesterday." },
          { it: "In Italia la pasta viene servita come primo.", en: "In Italy pasta is served as a first course." },
          { it: "La domanda va presentata entro il 30 giugno.", en: "The application must be submitted by 30 June." },
          { it: "Per il risotto, il riso non va lavato.", en: "For risotto, the rice shouldn't be washed." },
          { it: "Purtroppo molti dati sono andati persi.", en: "Unfortunately a lot of data was lost." },
        ],
      },
      {
        heading: `The si passivante in every tense`,
        body: [
          `With a transitive verb and an object, "si" + verb is passive and the verb agrees with the object: "si vende la casa", "si vendono case", "si affittano camere". In compound tenses it takes "essere" and the participle agrees too: "si sono vendute molte case", "si è presa una decisione".`,
          `Without an object, or with an intransitive verb, "si" is impersonal and the verb stays singular: "si vive bene a Bologna", "si è parlato molto". With a reflexive verb, use "ci si": "ci si alza presto".`,
        ],
        examples: [
          { it: "In questo negozio si vendono prodotti biologici.", en: "This shop sells organic products." },
          { it: "Si sono raccolte più di diecimila firme.", en: "More than ten thousand signatures were collected." },
          { it: "Si è deciso di rinviare la riunione.", en: "It was decided to postpone the meeting." },
          { it: "A Bologna si mangia benissimo.", en: "You eat really well in Bologna." },
          { it: "La domenica ci si riposa.", en: "On Sundays people rest." },
        ],
      },
      {
        heading: `Sounding objective`,
        body: [
          `Reports, essays and the news hide the person who acts: "si ritiene che", "è stato osservato che", "vanno considerati due aspetti", "è stata registrata una crescita del 3%". Using the passive and the impersonal "si" is the quickest way to move from conversation to written register.`,
          `Name the agent with "da" only when it matters: "la legge è stata approvata dal Parlamento".`,
        ],
        examples: [
          { it: "Si ritiene che il fenomeno sia in aumento.", en: "The phenomenon is believed to be increasing." },
          { it: "Nel 2024 è stata registrata una crescita del 3%.", en: "In 2024 growth of 3% was recorded." },
          { it: "Vanno considerati almeno due aspetti.", en: "At least two aspects must be considered." },
          { it: "La proposta è stata respinta dalla maggioranza.", en: "The proposal was rejected by the majority." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si vende appartamenti.",
        right: "Si vendono appartamenti.",
        why: `With the si passivante the verb agrees with the plural object.`,
      },
      {
        wrong: "Il ponte è venuto chiuso.",
        right: "Il ponte è stato chiuso.",
        why: `"Venire" forms the passive only in simple tenses.`,
      },
      {
        wrong: "Si è presi molte decisioni.",
        right: "Si sono prese molte decisioni.",
        why: `Compound tense with "essere": verb and participle agree with "decisioni".`,
      },
      {
        wrong: "Si alza presto in campagna.",
        right: "Ci si alza presto in campagna.",
        why: `With a reflexive verb the impersonal form is "ci si".`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between "viene fatto" and "è fatto"?`,
        a: `"Viene fatto" always describes an action; "è fatto" can also describe a state ("la porta è chiusa": it is closed). Use "venire" when you want to be clear it is an action.`,
      },
      {
        q: `Does "andare" + participle always mean must?`,
        a: `In simple tenses, yes ("va fatto"). With verbs of losing and destroying ("andare perso", "andare distrutto") it means simply to be, often in the past.`,
      },
      {
        q: `Is "affittasi" a si passivante?`,
        a: `Yes, in a fossilised form with the pronoun attached: "affittasi" = "si affitta". You see it on signs: "vendesi", "cercasi".`,
      },
    ],
    related: ["passive", "impersonal-si", "nominal-style", "academic-italian"],
    lessons: [
      "b2-objective-language",
      "b2-drill-describing-trends",
      "b2-drill-reporting-politics",
      "b2-drill-legal-structures",
      "b2-recipe-language",
      "b2-drill-recipe-verbs",
    ],
  },
  {
    slug: "formal-writing",
    title: "Gentile Dottoressa, Distinti Saluti: Formal Letters and Essays",
    description:
      "How to write a formal Italian letter or email (Spett.le, Gentile, Egregio, Con la presente, In attesa di un cortese riscontro), Lei capitalised in letters, polite conditionals, and how to structure an argumentative essay with innanzitutto, inoltre and in conclusione.",
    level: "B2",
    intro: [
      `Formal Italian writing follows conventions that are stricter than in English. A letter to an office, a company or a professor has fixed openings and closings, uses "Lei" with capital letters, and prefers the conditional and the subjunctive to direct requests.`,
      `An argumentative essay, the other formal text of the CILS DUE exam, has an equally predictable structure: introduction, thesis, arguments, counterargument and conclusion, each signalled by its connector.`,
    ],
    sections: [
      {
        heading: `The formal letter`,
        body: [
          `Put place and date at the top ("Milano, 12 marzo 2026"), then the subject line: "Oggetto: richiesta di rimborso". Open with "Gentile" + title + surname ("Gentile dottor Bianchi", "Gentile signora Rossi"), "Egregio" (very formal, men) or "Spett.le" (Spettabile) for a company: "Spett.le Ditta Rossi".`,
          `Start the body with a formula: "Con la presente Le scrivo per...", "In riferimento alla Sua email del...", "Mi permetto di contattarLa per...". Close with "In attesa di un Suo cortese riscontro, porgo distinti saluti" or simply "Cordiali saluti". In letters the formal pronouns are often capitalised: "Lei", "La", "Le", "Suo".`,
        ],
        table: {
          headers: ["Part", "Formulas"],
          rows: [
            ["Opening", "Gentile signora Rossi, / Egregio direttore, / Spett.le Ufficio Tributi,"],
            ["Purpose", "Con la presente Le scrivo per... / In riferimento a..."],
            ["Request", "Le sarei grato se potesse... / Vorrei chiederLe di..."],
            ["Complaint", "Mi vedo costretto a segnalare... / Desidero esprimere il mio disappunto per..."],
            ["Closing", "In attesa di un Suo cortese riscontro, porgo distinti saluti."],
            ["Sign-off", "Cordiali saluti, / Distinti saluti, / Con osservanza,"],
          ],
        },
        examples: [
          { it: "Con la presente Le scrivo per richiedere un rimborso.", en: "I am writing to request a refund." },
          { it: "In riferimento alla Sua email del 5 maggio, Le comunico che...", en: "With reference to your email of 5 May, I would like to inform you that..." },
          { it: "Le sarei grata se potesse inviarmi il modulo.", en: "I would be grateful if you could send me the form." },
          { it: "Mi vedo costretto a segnalare un grave disservizio.", en: "I feel obliged to report a serious failure of service." },
          { it: "Ringraziando per l'attenzione, porgo distinti saluti.", en: "Thank you for your attention. Yours sincerely." },
        ],
      },
      {
        heading: `Polite requests`,
        body: [
          `The conditional softens every request: "vorrei", "potrebbe", "Le dispiacerebbe", "sarebbe possibile". The imperfect subjunctive follows them: "Le sarei grato se mi rispondesse entro venerdì". The imperative ("mi mandi il modulo") is fine in speech with "per favore" but too blunt in a letter.`,
          `Formal vocabulary replaces everyday words: "ricevere" becomes "pervenire" ("la Sua richiesta ci è pervenuta"), "dire" becomes "comunicare", "mandare" becomes "inviare", "chiedere" becomes "richiedere".`,
        ],
        examples: [
          { it: "Sarebbe possibile spostare l'appuntamento a giovedì?", en: "Would it be possible to move the appointment to Thursday?" },
          { it: "Le dispiacerebbe inviarmi una copia del contratto?", en: "Would you mind sending me a copy of the contract?" },
          { it: "La Sua richiesta ci è pervenuta in data odierna.", en: "We received your request today." },
          { it: "Le comunichiamo che l'ufficio resterà chiuso fino al 3 gennaio.", en: "Please note that the office will remain closed until 3 January." },
        ],
      },
      {
        heading: `The argumentative essay`,
        body: [
          `Introduce the topic and state your thesis ("ritengo che", "sono convinto che" + subjunctive), develop two or three arguments in order ("innanzitutto", "in primo luogo", "in secondo luogo", "inoltre", "infine"), acknowledge the other side ("è vero che... tuttavia", "si potrebbe obiettare che... ma") and conclude ("in conclusione", "per concludere", "alla luce di quanto detto").`,
          `Use precise argument verbs ("sostenere", "ritenere", "affermare") and keep the impersonal voice where you can: "si può osservare che", "è evidente che".`,
        ],
        examples: [
          { it: "Ritengo che il lavoro da casa offra più vantaggi che svantaggi.", en: "I believe working from home offers more advantages than disadvantages." },
          { it: "Innanzitutto, permette di risparmiare tempo e denaro.", en: "First of all, it saves time and money." },
          { it: "Si potrebbe obiettare che isola i lavoratori; tuttavia, esistono soluzioni.", en: "It could be objected that it isolates workers; however, there are solutions." },
          { it: "Alla luce di quanto detto, la mia posizione è chiara.", en: "In the light of the above, my position is clear." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ciao signor Rossi,",
        right: "Gentile signor Rossi,",
        why: `"Ciao" is informal. In a letter or email to someone you call "Lei", open with "Gentile" or "Buongiorno".`,
      },
      {
        wrong: "Le sarei grato se potrebbe rispondermi.",
        right: "Le sarei grato se potesse rispondermi.",
        why: `After "se", the imperfect subjunctive, never the conditional.`,
      },
      {
        wrong: "Spettabile signora Bianchi,",
        right: "Gentile signora Bianchi,",
        why: `"Spett.le" is for companies and offices, not for people.`,
      },
      {
        wrong: "Penso che il lavoro da casa è utile.",
        right: "Ritengo che il lavoro da casa sia utile.",
        why: `Verbs of opinion take the subjunctive, and "ritenere" sounds more formal than "pensare".`,
      },
      {
        wrong: "Distinti saluti, Marco. Ciao!",
        right: "Distinti saluti, Marco Neri",
        why: `Close a formal letter with one formula and your full name.`,
      },
    ],
    faqs: [
      {
        q: `Must I capitalise "Lei" and "Suo"?`,
        a: `In formal letters it is traditional and still common: "La ringrazio", "la Sua richiesta". In emails and modern usage, lowercase is also accepted. Be consistent.`,
      },
      {
        q: `"Gentile" or "Egregio"?`,
        a: `"Gentile" works for everyone and is the safe choice. "Egregio" is very formal and used mostly for men in high positions; "Gentilissimo" or "Gentilissima" adds warmth.`,
      },
      {
        q: `How do I address a professor or a doctor?`,
        a: `With the title: "Gentile professoressa Ferri", "Gentile dottor Conti". In Italy "dottore" is used for any graduate, so it is a safe courtesy in offices too.`,
      },
    ],
    related: ["register-shifting", "burocratese", "concession-and-contrast", "cause-and-consequence"],
    lessons: [
      "b2-formal-letter-structure",
      "b2-formal-requests",
      "b2-formal-complaints",
      "b2-formal-register-words",
      "b2-drill-formal-phrases",
      "b2-drill-informal-to-formal",
      "b2-error-hunt-formal-writing",
      "b2-mission-complaint-letter",
      "b2-cils-due-writing-formal",
      "b2-essay-structure",
      "b2-ordering-connectors",
      "b2-counterarguments",
      "b2-drill-argument-phrases",
      "b2-mission-argumentative-essay",
      "b2-cils-due-writing-argument",
    ],
  },
  {
    slug: "nominal-style",
    title: "L'Aumento dei Prezzi: Nominalisation and the Nominal Style",
    description:
      "How Italian turns verbs and adjectives into nouns (aumentare, l'aumento; libero, la libertà), compound nouns like portafoglio and apriscatole with their plurals, and the nominal style of news, reports and formal summaries.",
    level: "B2",
    intro: [
      `Formal Italian loves nouns. Where conversation says "i prezzi sono aumentati molto", a newspaper writes "forte aumento dei prezzi", and a report "si registra un aumento dei prezzi". This is the stile nominale, and at this level you need to read it easily and produce it when the register calls for it.`,
      `The raw material is word formation: the suffixes that turn verbs and adjectives into nouns, and the compound nouns Italian builds from a verb and a noun.`,
    ],
    sections: [
      {
        heading: `Verbs into nouns`,
        body: [
          `Each suffix has its own patterns, and many verbs have an irregular noun you simply learn. "-zione" and "-sione" are the most common ("decidere", "la decisione"; "produrre", "la produzione"), "-mento" is next ("aumentare", "l'aumento"; "cambiare", "il cambiamento"), and some nouns are just the stem ("lavorare", "il lavoro"; "spendere", "la spesa"; "crescere", "la crescita").`,
          `The infinitive itself can also act as a noun: "il mangiare", "il suo continuo lamentarsi". That is mainly a literary device.`,
        ],
        table: {
          headers: ["Verb", "Noun", "Pattern"],
          rows: [
            ["decidere", "la decisione", "-sione"],
            ["produrre", "la produzione", "-zione"],
            ["aumentare", "l'aumento", "-mento"],
            ["cambiare", "il cambiamento", "-mento"],
            ["crescere", "la crescita", "-ita"],
            ["spendere", "la spesa", "irregular"],
            ["chiudere", "la chiusura", "-ura"],
            ["arrivare", "l'arrivo", "stem"],
            ["vendere", "la vendita", "-ita"],
            ["scegliere", "la scelta", "irregular"],
          ],
        },
        examples: [
          { it: "La decisione è stata rinviata a lunedì.", en: "The decision has been postponed to Monday." },
          { it: "La chiusura della strada durerà tre giorni.", en: "The road will be closed for three days." },
          { it: "Si prevede una crescita dell'1%.", en: "Growth of 1% is forecast." },
          { it: "L'arrivo del treno è previsto alle 18:40.", en: "The train is due to arrive at 18:40." },
        ],
      },
      {
        heading: `Adjectives into nouns`,
        body: [
          `Adjectives form abstract nouns with "-ità" ("felice", "la felicità"; "libero", "la libertà"; "facile", "la facilità"), "-ezza" ("bello", "la bellezza"; "sicuro", "la sicurezza"), "-enza" or "-anza" ("presente", "la presenza"; "importante", "l'importanza") and "-ia" ("allegro", "l'allegria").`,
          `All "-ità" nouns are feminine and invariable in the plural: "la città", "le città"; "l'opportunità", "le opportunità".`,
        ],
        examples: [
          { it: "La sicurezza dei passeggeri è la nostra priorità.", en: "Passenger safety is our priority." },
          { it: "Non capisco l'importanza di questa regola.", en: "I don't understand the importance of this rule." },
          { it: "Questo lavoro offre molte opportunità di crescita.", en: "This job offers many opportunities for growth." },
          { it: "La bellezza del paesaggio ci ha lasciati senza parole.", en: "The beauty of the landscape left us speechless." },
        ],
      },
      {
        heading: `Compound nouns`,
        body: [
          `Verb + noun compounds name tools and roles: "portafoglio" (wallet), "cavatappi" (corkscrew), "apriscatole" (tin opener), "asciugacapelli" (hair dryer), "lavastoviglie" (dishwasher). They are mostly masculine; those ending in a plural noun do not change ("i cavatappi", "gli apriscatole"), while those ending in a singular masculine noun usually take a regular plural ("i portafogli", "i grattacieli").`,
          `Noun + noun compounds with "capo" vary: "il capostazione", "i capistazione" (several station masters); "il capolavoro", "i capolavori" (masterpieces).`,
        ],
        examples: [
          { it: "Ho perso il portafoglio sul tram.", en: "I lost my wallet on the tram." },
          { it: "Hai visto il cavatappi? Non lo trovo.", en: "Have you seen the corkscrew? I can't find it." },
          { it: "Il museo espone alcuni capolavori del Rinascimento.", en: "The museum exhibits some Renaissance masterpieces." },
          { it: "Abbiamo comprato una lavastoviglie nuova.", en: "We bought a new dishwasher." },
        ],
      },
      {
        heading: `The nominal style`,
        body: [
          `Headlines, notices and reports pack information into noun phrases: "chiusura temporanea della biblioteca per lavori", "forte calo delle vendite nel primo trimestre", "approvazione del bilancio". Turn the main verb into a noun, and its subject and object into "di" phrases.`,
          `Use it in summaries, notices and formal reports; in emails and conversation, too many nouns make Italian sound heavy and bureaucratic.`,
        ],
        examples: [
          { it: "Le vendite sono calate molto. → Forte calo delle vendite.", en: "Sales fell sharply. → Sharp fall in sales." },
          { it: "La biblioteca chiude per lavori. → Chiusura della biblioteca per lavori.", en: "The library is closing for works. → Library closure for works." },
          { it: "Hanno approvato il bilancio. → Approvazione del bilancio.", en: "They approved the budget. → Approval of the budget." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Una forte aumento dei prezzi.",
        right: "Un forte aumento dei prezzi.",
        why: `Nouns in "-mento" are masculine.`,
      },
      {
        wrong: "il decidimento",
        right: "la decisione",
        why: `Many verbs have an irregular noun; learn them in pairs.`,
      },
      {
        wrong: "Ho comprato due apriscatola.",
        right: "Ho comprato due apriscatole.",
        why: `The compound already ends in a plural noun ("scatole") and does not change.`,
      },
      {
        wrong: "La crescenza dell'economia è lenta.",
        right: "La crescita dell'economia è lenta.",
        why: `The noun from "crescere" is "crescita".`,
      },
    ],
    faqs: [
      {
        q: `Is the nominal style good style?`,
        a: `In its place. Headlines, notices, abstracts and reports need it; a letter full of nouns sounds bureaucratic. Plain-language guides for the Italian public administration recommend verbs over nouns.`,
      },
      {
        q: `How do I know the gender of a compound noun?`,
        a: `Verb + noun compounds are usually masculine, whatever the noun: "il portafoglio", "il cavatappi", "l'apriscatole". Names of machines are the main exception, because they stand for "la macchina": "la lavastoviglie".`,
      },
      {
        q: `Are all "-ità" nouns feminine?`,
        a: `Yes, and so are those in "-zione", "-sione", "-ezza" and "-enza". "-mento" nouns are masculine.`,
      },
    ],
    related: ["passive-and-impersonal-in-writing", "burocratese", "journalistic-italian"],
    lessons: [
      "b2-compound-nouns",
      "b2-nominalisation-verbs",
      "b2-nominalisation-adjectives",
      "b2-nominal-style",
      "b2-drill-word-formation-2",
      "b2-drill-nominal-rewriting",
      "b2-error-hunt-compounds",
      "b2-reading-lab-formal-text",
      "b2-mission-formal-summary",
      "b2-drill-nominalisation-science",
    ],
  },
];
