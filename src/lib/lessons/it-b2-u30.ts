// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u30.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 30: Upper Intermediate Review.
// Spiral reviews of the subjunctive, if sentences, connectors and implicit
// clauses, pronouns and particles, plus final drills, labs and an essay.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U30: Lesson[] = [
  {
    slug: "b2-spiral-subjunctive",
    level: "IT-B2",
    number: 1,
    title: "Spiral Review: The Subjunctive",
    summary: "Fresh sentences mixing all four subjunctive tenses: triggers, sequence of tenses, relative clauses and come se.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Present and past subjunctive",
        body: [
          "Reminder: a present trigger (\"penso che\", \"è strano che\", \"benché\") takes the present subjunctive for the same time or later, and the past subjunctive for an earlier event: \"penso che sia partito ieri\".",
        ],
        examples: [
          { es: "È strano che Marco non risponda al telefono.", en: "It's strange that Marco isn't answering the phone." },
          { es: "Penso che sia già partito per le vacanze.", en: "I think he's already left on vacation." },
          { es: "Benché abbia studiato poco, ha superato l'esame.", en: "Although he studied little, he passed the exam." },
          { es: "Cerco una casa che abbia un giardino.", en: "I'm looking for a house that has a garden." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange that Marco isn't answering the phone.", answer: "È strano che Marco non risponda al telefono.", explanation: "\"È strano che\" + present subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think he's already left.", answer: "Penso che sia già partito.", altAnswers: ["Credo che sia già partito.", "Penso che se ne sia già andato."], explanation: "Past subjunctive for an earlier event." },
          { type: "listen-choose", audio: "Cerco una casa che abbia un giardino.", question: "What is the speaker looking for?", options: ["a house with a garden", "a garden to rent", "a house near a park", "a gardener"], correctIndex: 0, explanation: "Subjunctive: the house may not exist yet." },
        ],
      },
      {
        heading: "Imperfect and pluperfect subjunctive",
        body: [
          "Reminder: a past or conditional trigger (\"pensavo che\", \"vorrei che\", \"era necessario che\") takes the imperfect subjunctive for the same time and the pluperfect for an earlier event: \"pensavo che fosse partito\".",
        ],
        examples: [
          { es: "Pensavo che fossi ancora a Roma.", en: "I thought you were still in Rome." },
          { es: "Vorrei che tu mi dicessi la verità.", en: "I wish you'd tell me the truth." },
          { es: "Non sapevo che si fossero già sposati.", en: "I didn't know they had already gotten married." },
          { es: "Magari avessi più tempo!", en: "If only I had more time!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't know they had already gotten married.", answer: "Non sapevo che si fossero già sposati.", explanation: "Past trigger + earlier event: pluperfect subjunctive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I wish you'd [tell] me the truth.", sentence: "Vorrei che tu mi ___ la verità.", answer: "dicessi", explanation: "\"Vorrei che\" + imperfect subjunctive." },
        ],
      },
      {
        heading: "Come se, chiunque, the only one",
        body: [
          "Reminder: \"come se\" takes the imperfect or pluperfect subjunctive; \"chiunque\", \"qualunque\", \"dovunque\" and \"l'unico che\" / \"il primo che\" take the subjunctive.",
        ],
        examples: [
          { es: "Parla come se fosse il padrone.", en: "He talks as if he were the boss." },
          { es: "Mi ha guardato come se non mi avesse mai visto.", en: "She looked at me as if she had never seen me." },
          { es: "Chiunque chiami, di' che non ci sono.", en: "Whoever calls, say I'm not in." },
          { es: "È l'unica persona che mi capisca davvero.", en: "She's the only person who really understands me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She looked at me as if she had never seen me.", answer: "Mi ha guardato come se non mi avesse mai visto.", altAnswers: ["Mi ha guardata come se non mi avesse mai vista.", "Mi ha guardato come se non mi avesse mai vista.", "Mi guardò come se non mi avesse mai visto."], explanation: "\"Come se\" + pluperfect subjunctive." },
          { type: "speak", text: "Chiunque chiami, di' che non ci sono.", prompt: "Tell a roommate: Whoever calls, say I'm not in.", tip: "di': the apostrophe marks the short imperative of dire.", explanation: "\"Chiunque\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although he studied little, he passed the exam.", answer: "Benché abbia studiato poco, ha superato l'esame.", altAnswers: ["Sebbene abbia studiato poco, ha superato l'esame.", "Nonostante abbia studiato poco, ha superato l'esame.", "Benché avesse studiato poco, ha superato l'esame."], explanation: "\"Benché\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought you were still in Rome. (to a friend)", answer: "Pensavo che fossi ancora a Roma.", altAnswers: ["Credevo che fossi ancora a Roma."], explanation: "Past trigger: imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only I had more time!", answer: "Magari avessi più tempo!", explanation: "\"Magari\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He talks as if he were the boss.", answer: "Parla come se fosse il padrone.", altAnswers: ["Parla come se fosse il capo."], explanation: "\"Come se\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's the only person who really understands me.", answer: "È l'unica persona che mi capisca davvero.", altAnswers: ["È l'unica persona che mi capisce davvero."], explanation: "\"L'unico che\" + subjunctive in careful style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was necessary for everyone to sign.", answer: "Era necessario che tutti firmassero.", altAnswers: ["Bisognava che tutti firmassero."], explanation: "Past impersonal trigger: imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid they've missed the train.", answer: "Temo che abbiano perso il treno.", altAnswers: ["Ho paura che abbiano perso il treno."], explanation: "\"Temere che\" + past subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm looking for an apartment that [has] a balcony.", sentence: "Cerco un appartamento che ___ il balcone.", answer: "abbia", explanation: "Relative clause with an unknown thing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I thought he [had left] already.", sentence: "Pensavo che ___ già.", answer: "fosse partito", altAnswers: ["se ne fosse andato"], explanation: "Pluperfect subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: I didn't know they had already gotten married.", words: ["Non sapevo", "che si fossero", "già", "sposati."], translation: "I didn't know they had already gotten married.", explanation: "Pluperfect subjunctive of a reflexive verb." },
      { type: "dictation", audio: "Mi ha guardato come se non mi avesse mai visto.", explanation: "\"Come se\" + pluperfect subjunctive." },
      { type: "speak", text: "Vorrei che tu mi dicessi la verità, anche se è difficile.", prompt: "Ask a friend: I wish you'd tell me the truth, even if it's difficult.", tip: "di-CES-si: double s.", explanation: "\"Vorrei che\" + imperfect subjunctive; \"anche se\" + indicative." },
    ],
  },
  {
    slug: "b2-spiral-if-sentences",
    level: "IT-B2",
    number: 2,
    title: "Spiral Review: If Sentences",
    summary: "Fresh sentences mixing real, possible, impossible and mixed if sentences, plus nel caso, qualora and purché.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Possible and impossible",
        body: [
          "Reminder: possible = \"se\" + imperfect subjunctive, conditional (\"se potessi, verrei\"). Impossible past = \"se\" + pluperfect subjunctive, past conditional (\"se avessi potuto, sarei venuto\"). Never the conditional after \"se\".",
        ],
        examples: [
          { es: "Se avessi una macchina, ti accompagnerei.", en: "If I had a car, I'd give you a ride." },
          { es: "Se fossi in te, accetterei l'offerta.", en: "If I were you, I'd accept the offer." },
          { es: "Se me l'avessi detto prima, ti avrei aiutato.", en: "If you'd told me earlier, I'd have helped you." },
          { es: "Se fossimo partiti in orario, non avremmo perso la coincidenza.", en: "If we'd left on time, we wouldn't have missed the connection." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were you, I'd accept the offer.", answer: "Se fossi in te, accetterei l'offerta.", explanation: "\"Se fossi in te\" + conditional." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you'd told me earlier, I'd have helped you.", answer: "Se me l'avessi detto prima, ti avrei aiutato.", altAnswers: ["Se me lo avessi detto prima, ti avrei aiutato.", "Se me l'avessi detto prima, ti avrei aiutata."], explanation: "Impossible past." },
          { type: "listen-choose", audio: "Se fossimo partiti in orario, non avremmo perso la coincidenza.", question: "What happened?", options: ["They left late and missed the connection.", "They left on time.", "They caught the connection.", "They didn't travel."], correctIndex: 0, explanation: "Impossible past: the opposite happened." },
        ],
      },
      {
        heading: "Mixed and real",
        body: [
          "Reminder: mixed = past condition, present result (\"se avessi studiato, adesso avrei un lavoro migliore\") or present condition, past result (\"se fossi più attento, non avresti perso le chiavi\"). Real = \"se\" + indicative.",
        ],
        examples: [
          { es: "Se avessi studiato medicina, adesso farei il medico.", en: "If I'd studied medicine, I'd be a doctor now." },
          { es: "Se fossi più organizzato, non avresti dimenticato l'appuntamento.", en: "If you were more organized, you wouldn't have forgotten the appointment." },
          { es: "Se piove, restiamo a casa.", en: "If it rains, we'll stay at home." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I'd studied medicine, I'd be a doctor now.", answer: "Se avessi studiato medicina, adesso farei il medico.", altAnswers: ["Se avessi studiato medicina, ora farei il medico.", "Se avessi studiato medicina, adesso sarei medico.", "Se avessi studiato medicina, ora sarei un medico."], explanation: "Mixed: past condition, present result." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If it rains, [we'll stay] at home.", sentence: "Se piove, ___ a casa.", answer: "restiamo", altAnswers: ["resteremo", "rimaniamo", "rimarremo"], explanation: "Real condition: indicative." },
        ],
      },
      {
        heading: "Other ways to say if",
        body: [
          "Reminder: \"nel caso (in cui)\" and \"qualora\" + subjunctive (formal), \"purché\" / \"a patto che\" + subjunctive (provided that), \"a meno che (non)\" + subjunctive (unless).",
        ],
        examples: [
          { es: "Nel caso in cui ci fosse un ritardo, vi avviseremo.", en: "In case there's a delay, we'll let you know." },
          { es: "Ti presto la macchina, purché tu me la riporti stasera.", en: "I'll lend you the car, provided you bring it back tonight." },
          { es: "Verrò, a meno che non succeda qualcosa.", en: "I'll come, unless something happens." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll lend you the car, provided you bring it back tonight.", answer: "Ti presto la macchina, purché tu me la riporti stasera.", altAnswers: ["Ti presto la macchina, a patto che tu me la riporti stasera.", "Ti presto la macchina purché me la riporti stasera."], explanation: "\"Purché\" + subjunctive; \"me la\"." },
          { type: "speak", text: "Verrò, a meno che non succeda qualcosa all'ultimo momento.", prompt: "Promise: I'll come, unless something happens at the last minute.", tip: "suc-CE-da: double c.", explanation: "\"A meno che non\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I had a car, I'd give you a ride.", answer: "Se avessi una macchina, ti accompagnerei.", altAnswers: ["Se avessi la macchina, ti accompagnerei.", "Se avessi una macchina, ti darei un passaggio."], explanation: "Possible: imperfect subjunctive + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we'd left on time, we wouldn't have missed the connection.", answer: "Se fossimo partiti in orario, non avremmo perso la coincidenza.", altAnswers: ["Se fossimo partiti in tempo, non avremmo perso la coincidenza.", "Se fossimo partite in orario, non avremmo perso la coincidenza."], explanation: "Impossible past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you were more organized, you wouldn't have forgotten. (to a friend)", answer: "Se fossi più organizzato, non te ne saresti dimenticato.", altAnswers: ["Se fossi più organizzata, non te ne saresti dimenticata.", "Se fossi più organizzato, non l'avresti dimenticato.", "Se fossi più organizzata, non l'avresti dimenticato."], explanation: "Mixed: present condition, past result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian, formally.", source: "In case there's a delay, we'll let you know.", answer: "Nel caso in cui ci fosse un ritardo, vi avviseremo.", altAnswers: ["Nel caso in cui ci sia un ritardo, vi avviseremo.", "Qualora ci fosse un ritardo, vi avviseremo.", "Qualora ci sia un ritardo, vi avviseremo.", "Nel caso in cui ci fosse un ritardo, La avviseremo."], explanation: "\"Nel caso in cui\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll come, unless something happens.", answer: "Verrò, a meno che non succeda qualcosa.", altAnswers: ["Vengo, a meno che non succeda qualcosa.", "Verrò, a meno che succeda qualcosa."], explanation: "\"A meno che (non)\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I'd known, I wouldn't have come.", answer: "Se l'avessi saputo, non sarei venuto.", altAnswers: ["Se l'avessi saputo, non sarei venuta.", "Se lo avessi saputo, non sarei venuto."], explanation: "\"Venire\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What would you do if you won the lottery? (to a friend)", answer: "Che cosa faresti se vincessi alla lotteria?", altAnswers: ["Cosa faresti se vincessi alla lotteria?", "Che faresti se vincessi alla lotteria?"], explanation: "Possible: \"vincessi\" + \"faresti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I [had known], I would have come.", sentence: "Se l'___, sarei venuto.", answer: "avessi saputo", explanation: "Never \"*avrei saputo\" after \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I were you, I [would accept].", sentence: "Se fossi in te, ___.", answer: "accetterei", explanation: "Conditional in the result." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se avessi tempo, venissi.", "Se avrei tempo, venissi."], correctIndex: 0, explanation: "Never the conditional after \"se\"." },
      { type: "dictation", audio: "Se avessi studiato medicina, adesso farei il medico.", explanation: "Mixed if sentence." },
      { type: "speak", text: "Se me l'avessi detto prima, ti avrei aiutato volentieri.", prompt: "Tell a friend: If you'd told me earlier, I'd have gladly helped you.", tip: "a-VES-si: double s.", explanation: "Impossible past." },
    ],
  },
  {
    slug: "b2-spiral-connectors",
    level: "IT-B2",
    number: 3,
    title: "Spiral Review: Connectors and Implicit Clauses",
    summary: "Fresh sentences mixing concession, cause, consequence and purpose connectors with past infinitives, gerunds and absolute participles.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Concession, cause, consequence",
        body: [
          "Reminder: \"nonostante\" / \"benché\" + subjunctive, \"anche se\" + indicative, \"pur\" + gerund; \"siccome\" at the start, \"dato che\", \"visto che\"; \"così ... che\", \"talmente ... che\" for result; \"affinché\" / \"in modo che\" + subjunctive for purpose.",
        ],
        examples: [
          { es: "Pur essendo stanco, è uscito con gli amici.", en: "Despite being tired, he went out with his friends." },
          { es: "Siccome pioveva, abbiamo preso un taxi.", en: "Since it was raining, we took a taxi." },
          { es: "Era talmente emozionata che non riusciva a parlare.", en: "She was so moved she couldn't speak." },
          { es: "Ti lascio le chiavi affinché tu possa entrare.", en: "I'm leaving you the keys so that you can get in." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite being tired, he went out with his friends.", answer: "Pur essendo stanco, è uscito con gli amici.", altAnswers: ["Pur essendo stanco, è uscito con i suoi amici.", "Benché fosse stanco, è uscito con gli amici.", "Nonostante fosse stanco, è uscito con gli amici."], explanation: "\"Pur\" + gerund." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Since it was raining, we took a taxi.", answer: "Siccome pioveva, abbiamo preso un taxi.", altAnswers: ["Dato che pioveva, abbiamo preso un taxi.", "Visto che pioveva, abbiamo preso un taxi."], explanation: "\"Siccome\" at the start." },
          { type: "listen-choose", audio: "Era talmente emozionata che non riusciva a parlare.", question: "Why couldn't she speak?", options: ["She was too moved.", "She was ill.", "She was angry.", "She didn't know the language."], correctIndex: 0, explanation: "\"Talmente ... che\" = so ... that." },
        ],
      },
      {
        heading: "Implicit clauses",
        body: [
          "Reminder: \"dopo\" + past infinitive (\"dopo aver mangiato\", \"dopo essere arrivati\"), the past gerund (\"avendo finito\", \"essendo partiti\"), the absolute participle (\"finita la cena\", \"arrivati a casa\"). Same subject in both clauses; pronouns attach (\"dopo averlo visto\").",
        ],
        examples: [
          { es: "Dopo aver finito il lavoro, siamo andati al cinema.", en: "After finishing work, we went to the movies." },
          { es: "Essendo arrivati tardi, abbiamo perso l'inizio del film.", en: "Having arrived late, we missed the beginning of the film." },
          { es: "Finita la cena, gli ospiti se ne sono andati.", en: "Once dinner was over, the guests left." },
          { es: "Dopo averla letta, ho strappato la lettera.", en: "After reading it, I tore up the letter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once dinner was over, the guests left.", answer: "Finita la cena, gli ospiti se ne sono andati.", altAnswers: ["Finita la cena, gli ospiti sono andati via.", "Dopo la cena, gli ospiti se ne sono andati."], explanation: "Absolute participle." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[After reading it], I tore up the letter.", sentence: "___, ho strappato la lettera.", answer: "Dopo averla letta", explanation: "Past infinitive + attached pronoun + agreement." },
        ],
      },
      {
        heading: "Mixing them",
        body: [
          "Reminder: combine them for formal, compact sentences: \"pur avendo studiato, non ha superato l'esame\" (concession + past gerund), \"una volta presa la decisione, non si torna indietro\" (once the decision is made, there's no going back).",
        ],
        examples: [
          { es: "Pur avendo studiato molto, non ha superato l'esame.", en: "Despite having studied a lot, she didn't pass the exam." },
          { es: "Una volta presa la decisione, non si torna indietro.", en: "Once the decision is made, there's no going back." },
          { es: "Visto il ritardo, abbiamo deciso di cenare fuori.", en: "Given the delay, we decided to eat out." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite having studied a lot, she didn't pass the exam.", answer: "Pur avendo studiato molto, non ha superato l'esame.", altAnswers: ["Pur avendo studiato tanto, non ha superato l'esame.", "Benché avesse studiato molto, non ha superato l'esame."], explanation: "\"Pur\" + past gerund." },
          { type: "speak", text: "Una volta presa la decisione, non si torna indietro.", prompt: "Say it firmly: Once the decision is made, there's no going back.", tip: "in-DIE-tro: stress on die.", explanation: "Absolute participle with \"una volta\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm leaving you the keys so that you can get in. (to a friend)", answer: "Ti lascio le chiavi affinché tu possa entrare.", altAnswers: ["Ti lascio le chiavi perché tu possa entrare.", "Ti lascio le chiavi così puoi entrare.", "Ti lascio le chiavi in modo che tu possa entrare."], explanation: "Purpose: subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After finishing work, we went to the movies.", answer: "Dopo aver finito il lavoro, siamo andati al cinema.", altAnswers: ["Dopo avere finito il lavoro, siamo andati al cinema.", "Finito il lavoro, siamo andati al cinema.", "Dopo aver finito di lavorare, siamo andati al cinema."], explanation: "Past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Having arrived late, we missed the beginning.", answer: "Essendo arrivati tardi, abbiamo perso l'inizio.", altAnswers: ["Essendo arrivate tardi, abbiamo perso l'inizio.", "Siccome siamo arrivati tardi, abbiamo perso l'inizio."], explanation: "Past gerund with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Given the delay, we decided to eat out.", answer: "Visto il ritardo, abbiamo deciso di cenare fuori.", altAnswers: ["Visto il ritardo, abbiamo deciso di mangiare fuori.", "Dato il ritardo, abbiamo deciso di cenare fuori."], explanation: "\"Visto\" + noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Even if it's expensive, I'll buy it.", answer: "Anche se è caro, lo compro.", altAnswers: ["Anche se è caro, lo comprerò.", "Anche se costa tanto, lo compro."], explanation: "\"Anche se\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once they arrived home, they went to bed.", answer: "Arrivati a casa, sono andati a letto.", altAnswers: ["Una volta arrivati a casa, sono andati a letto.", "Arrivate a casa, sono andate a letto."], explanation: "Absolute participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although it was late, the store was still open.", answer: "Nonostante fosse tardi, il negozio era ancora aperto.", altAnswers: ["Benché fosse tardi, il negozio era ancora aperto.", "Sebbene fosse tardi, il negozio era ancora aperto.", "Anche se era tardi, il negozio era ancora aperto."], explanation: "\"Nonostante\" + imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She was [so] tired that she fell asleep.", sentence: "Era ___ stanca che si è addormentata.", answer: "così", altAnswers: ["talmente", "tanto"], explanation: "\"Così ... che\" for result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Having finished] the report, she sent it.", sentence: "___ la relazione, l'ha inviata.", answer: "Avendo finito", altAnswers: ["Finita", "Dopo aver finito"], explanation: "Past gerund." },
      { type: "word-order", prompt: "Put the words in order to say: Once the decision is made, there's no going back.", words: ["Una volta", "presa", "la decisione,", "non si torna", "indietro."], translation: "Once the decision is made, there's no going back.", explanation: "\"Presa\" agrees with \"decisione\"." },
      { type: "dictation", audio: "Pur avendo studiato molto, non ha superato l'esame.", explanation: "\"Pur\" + past gerund." },
      { type: "speak", text: "Siccome pioveva, abbiamo preso un taxi e, arrivati a casa, siamo andati subito a letto.", prompt: "Tell the story: Since it was raining, we took a taxi and, once home, went straight to bed.", tip: "ar-ri-VA-ti: double r.", explanation: "Cause + absolute participle." },
    ],
  },
  {
    slug: "b2-spiral-pronouns-particles",
    level: "IT-B2",
    number: 4,
    title: "Spiral Review: Pronouns and Particles",
    summary: "Fresh sentences mixing combined pronouns, ci and ne, lo for a whole idea, and pronominal verbs like andarsene, farcela and metterci.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Combined pronouns",
        body: [
          "Reminder: indirect + direct: \"me lo\", \"te la\", \"glielo\" (to him / her / you formal), \"ce ne\", \"ve li\". In compound tenses the participle agrees with the direct pronoun: \"gliel'ho data\" (the key).",
        ],
        examples: [
          { es: "La chiave? Gliel'ho data stamattina.", en: "The key? I gave it to him this morning." },
          { es: "Te lo dico solo perché sei mio amico.", en: "I'm only telling you because you're my friend." },
          { es: "Ce ne sono ancora tre in frigo.", en: "There are still three of them in the fridge." },
          { es: "Me ne ha parlato ieri.", en: "She told me about it yesterday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The key? I gave it to him this morning.", answer: "La chiave? Gliel'ho data stamattina.", altAnswers: ["La chiave? Gliel'ho data stamani."], explanation: "\"Glie\" + \"la\" + agreement \"data\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are still three of them in the fridge.", answer: "Ce ne sono ancora tre in frigo.", altAnswers: ["Ce ne sono ancora tre nel frigo.", "Ce ne sono ancora tre in frigorifero."], explanation: "\"Ce ne sono\" + number." },
          { type: "listen-choose", audio: "Me ne ha parlato ieri.", question: "What happened yesterday?", options: ["She told the speaker about it.", "She gave the speaker something.", "She left.", "She phoned."], correctIndex: 0, explanation: "\"Parlarne a qualcuno\": \"me ne\"." },
        ],
      },
      {
        heading: "Lo, ci and ne for ideas",
        body: [
          "Reminder: \"lo\" replaces a whole clause (\"lo so\", \"non lo credo\"); \"ci\" replaces \"a\" + idea (\"ci penso io\", \"non ci credo\"); \"ne\" replaces \"di\" + idea (\"ne sono sicuro\", \"che ne pensi?\").",
        ],
        examples: [
          { es: "È arrivato di nuovo in ritardo? Lo sapevo.", en: "He arrived late again? I knew it." },
          { es: "Non ci credo: ha vinto davvero!", en: "I can't believe it: he really won!" },
          { es: "Sei sicura? Sì, ne sono sicurissima.", en: "Are you sure? Yes, I'm absolutely sure." },
          { es: "Che ne pensi del nuovo direttore?", en: "What do you think of the new director?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What do you think of the new director? (to a friend)", answer: "Che ne pensi del nuovo direttore?", altAnswers: ["Cosa ne pensi del nuovo direttore?", "Che cosa ne pensi del nuovo direttore?"], explanation: "\"Pensarne\": \"ne\" anticipates \"del nuovo direttore\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I can't [believe it]!", sentence: "Non ___!", answer: "ci credo", explanation: "\"Credere a\" → \"crederci\"." },
        ],
      },
      {
        heading: "Pronominal verbs",
        body: [
          "Reminder: \"andarsene\" (to leave), \"farcela\" (to manage), \"cavarsela\" (to get by), \"metterci\" (to take time, personal subject), \"volerci\" (to take, impersonal), \"tenerci\" (to care about), \"entrarci\" (to have to do with).",
        ],
        examples: [
          { es: "Me ne vado, è tardi.", en: "I'm off, it's late." },
          { es: "Ce l'abbiamo fatta per un pelo!", en: "We made it by a hair!" },
          { es: "Ci ho messo due ore per arrivare.", en: "It took me two hours to get here." },
          { es: "Che c'entra questo con il problema?", en: "What does this have to do with the problem?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It took me two hours to get here.", answer: "Ci ho messo due ore per arrivare.", altAnswers: ["Ci ho messo due ore ad arrivare.", "Ci sono volute due ore per arrivare."], explanation: "\"Metterci\" with a personal subject." },
          { type: "speak", text: "Ce l'abbiamo fatta per un pelo!", prompt: "Celebrate: We made it by a hair!", tip: "PE-lo: one l.", explanation: "\"Farcela\" in the passato prossimo." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm only telling you because you're my friend.", answer: "Te lo dico solo perché sei mio amico.", altAnswers: ["Te lo dico solo perché sei mia amica.", "Te lo dico soltanto perché sei mio amico."], explanation: "\"Te lo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She told me about it yesterday.", answer: "Me ne ha parlato ieri.", altAnswers: ["Ieri me ne ha parlato."], explanation: "\"Me ne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I knew it.", answer: "Lo sapevo.", explanation: "\"Lo\" for the whole idea." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Yes, I'm absolutely sure.", answer: "Sì, ne sono sicurissimo.", altAnswers: ["Sì, ne sono sicurissima.", "Sì, ne sono assolutamente sicuro.", "Sì, ne sono assolutamente sicura."], explanation: "\"Esserne sicuro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm off, it's late.", answer: "Me ne vado, è tardi.", explanation: "\"Andarsene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What does this have to do with the problem?", answer: "Che c'entra questo con il problema?", altAnswers: ["Cosa c'entra questo con il problema?", "Che c'entra questo col problema?"], explanation: "\"Entrarci\" = to have to do with." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes a lot of patience.", answer: "Ci vuole molta pazienza.", altAnswers: ["Ci vuole tanta pazienza."], explanation: "\"Volerci\" agrees with what is needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I really care about it.", answer: "Ci tengo molto.", altAnswers: ["Ci tengo davvero.", "Ci tengo tanto."], explanation: "\"Tenerci\" = to care about." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The books? I gave [them to her] yesterday.", sentence: "I libri? ___ ho dati ieri.", answer: "Glieli", explanation: "\"Glie\" + \"li\"; participle \"dati\" agrees." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Don't worry, [I'll get by].", sentence: "Non preoccuparti, ___.", answer: "me la cavo", explanation: "\"Cavarsela\"." },
      { type: "word-order", prompt: "Put the words in order to say: We made it by a hair!", words: ["Ce", "l'abbiamo", "fatta", "per un pelo!"], translation: "We made it by a hair!", explanation: "\"Farcela\": \"fatta\" agrees with \"la\"." },
      { type: "dictation", audio: "La chiave? Gliel'ho data stamattina.", explanation: "\"Gliel'ho data\": agreement with \"la\"." },
      { type: "speak", text: "Me ne vado, ma ci tengo a ringraziarvi tutti.", prompt: "Leave the party: I'm off, but I really want to thank you all.", tip: "rin-gra-ZIAR-vi: stress on ziar.", explanation: "\"Andarsene\" and \"tenerci a\"." },
    ],
  },
  {
    slug: "b2-drill-b2-final-1",
    level: "IT-B2",
    number: 5,
    title: "Drill: Upper Intermediate Final, Part 1 of 2",
    summary: "High-repetition translation of mixed Upper Intermediate structures: the subjunctive, if sentences and the passive.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Subjunctive and if sentences",
        body: [
          "Pattern: opinion or wish + \"che\" + subjunctive (\"credo che sia\", \"volevo che venissi\"); \"se\" + imperfect subjunctive + conditional for the hypothetical; \"se\" + pluperfect subjunctive + past conditional for the impossible past.",
        ],
        examples: [
          { es: "Credo che il treno sia in ritardo.", en: "I think the train is late." },
          { es: "Volevo che venissi anche tu.", en: "I wanted you to come too." },
          { es: "Se avessi una macchina, ti accompagnerei io.", en: "If I had a car, I'd take you myself." },
          { es: "Se fossimo partiti prima, non avremmo perso la coincidenza.", en: "If we had left earlier, we wouldn't have missed the connection." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wanted you to come too. (to a friend)", answer: "Volevo che venissi anche tu.", explanation: "Past wish: imperfect subjunctive." },
          { type: "listen-choose", audio: "Se fossimo partiti prima, non avremmo perso la coincidenza.", question: "What went wrong?", options: ["they missed the connection", "they left too early", "the train was canceled", "they lost their tickets"], correctIndex: 0, explanation: "\"Perdere la coincidenza\" = to miss the connection." },
        ],
      },
      {
        heading: "Passive and impersonal",
        body: [
          "Pattern: \"essere\" + past participle for the passive, \"venire\" for a process, \"andare\" for obligation (\"va firmato\": it must be signed), and the passive \"si\" (\"si vendono case\").",
        ],
        examples: [
          { es: "Il museo è stato restaurato l'anno scorso.", en: "The museum was restored last year." },
          { es: "Le lettere vengono spedite ogni mattina.", en: "The letters are sent every morning." },
          { es: "Il modulo va firmato in due copie.", en: "The form must be signed in two copies." },
          { es: "In questa zona si costruiscono troppe case.", en: "Too many houses are being built in this area." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with andare.", source: "The form must be signed in two copies.", answer: "Il modulo va firmato in due copie.", altAnswers: ["Il modulo va firmato in duplice copia."], explanation: "\"Andare\" + participle = must be." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum was restored last year.", answer: "Il museo è stato restaurato l'anno scorso.", altAnswers: ["Il museo è stato restaurato lo scorso anno.", "Il museo fu restaurato l'anno scorso."], explanation: "Passive with \"essere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the train is late.", answer: "Credo che il treno sia in ritardo.", altAnswers: ["Penso che il treno sia in ritardo."], explanation: "\"Credo che\" + present subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I had a car, I'd take you myself. (to a friend)", answer: "Se avessi una macchina, ti accompagnerei io.", altAnswers: ["Se avessi la macchina, ti accompagnerei io.", "Se avessi un'auto, ti accompagnerei io."], explanation: "Hypothetical: imperfect subjunctive + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we had left earlier, we wouldn't have missed the connection.", answer: "Se fossimo partiti prima, non avremmo perso la coincidenza.", altAnswers: ["Se fossimo partite prima, non avremmo perso la coincidenza."], explanation: "Impossible past: pluperfect subjunctive + past conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that everyone knows the rules.", answer: "È importante che tutti conoscano le regole.", altAnswers: ["È importante che tutti sappiano le regole."], explanation: "Impersonal expression + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd be happy if you came to the party. (to a friend)", answer: "Sarei contento se venissi alla festa.", altAnswers: ["Sarei contenta se venissi alla festa.", "Mi farebbe piacere se venissi alla festa."], explanation: "Conditional + \"se\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The letters are sent every morning.", answer: "Le lettere vengono spedite ogni mattina.", altAnswers: ["Le lettere sono spedite ogni mattina.", "Le lettere si spediscono ogni mattina."], explanation: "\"Venire\" passive for a routine process." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Too many houses are being built in this area.", answer: "In questa zona si costruiscono troppe case.", altAnswers: ["Si costruiscono troppe case in questa zona.", "In questa zona vengono costruite troppe case."], explanation: "Passive \"si\": the verb agrees with \"case\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it rains tomorrow, we'll stay at home.", answer: "Se domani piove, restiamo a casa.", altAnswers: ["Se domani pioverà, resteremo a casa.", "Se domani piove, stiamo a casa.", "Se domani pioverà, staremo a casa."], explanation: "Real condition: indicative in both clauses." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although it was late, nobody wanted to go home.", answer: "Benché fosse tardi, nessuno voleva tornare a casa.", altAnswers: ["Sebbene fosse tardi, nessuno voleva tornare a casa.", "Nonostante fosse tardi, nessuno voleva andare a casa.", "Benché fosse tardi, nessuno voleva andare a casa."], explanation: "\"Benché\" + imperfect subjunctive in the past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bills [must be paid] by Friday.", sentence: "Le bollette ___ entro venerdì.", answer: "vanno pagate", explanation: "\"Andare\" + participle, agreeing with \"bollette\"." },
      { type: "word-order", prompt: "Put the words in order to say: I didn't think you'd already finished.", words: ["Non", "pensavo", "che", "avessi", "già", "finito."], translation: "I didn't think you'd already finished.", explanation: "Past trigger + earlier event: pluperfect subjunctive." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Se lo sapevo, te lo dicevo.", "Se lo saprei, te lo direi.", "Se lo sapessi, te lo dicessi.", "Se lo sapessi, te lo direi."], correctIndex: 3, explanation: "Standard hypothetical: \"se sapessi\" + \"direi\". The first is informal and refers to the past." },
      { type: "dictation", audio: "Credo che il treno sia in ritardo di mezz'ora.", explanation: "\"In ritardo di\" + amount." },
      { type: "speak", text: "Se avessi saputo dello sciopero, avrei preso la macchina.", prompt: "Say: If I'd known about the strike, I'd have taken the car.", tip: "sciopero: SCIÒ-pe-ro, stress on the first syllable.", explanation: "Impossible past." },
    ],
  },
  {
    slug: "b2-drill-b2-final-2",
    level: "IT-B2",
    number: 6,
    title: "Drill: Upper Intermediate Final, Part 2 of 2",
    summary: "High-repetition translation of mixed Upper Intermediate structures: reported speech, pronouns, particles and implicit clauses.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Reported speech",
        body: [
          "Pattern: after a past verb of saying, the present becomes the imperfect, the future becomes the past conditional (\"ha detto che sarebbe venuto\"), \"qui\" becomes \"lì\" and \"domani\" becomes \"il giorno dopo\".",
        ],
        examples: [
          { es: "Ha detto che sarebbe arrivato il giorno dopo.", en: "He said he would arrive the next day." },
          { es: "Mi ha chiesto se avessi già cenato.", en: "She asked me if I'd already had dinner." },
          { es: "Ci hanno detto di aspettare lì.", en: "They told us to wait there." },
          { es: "Ha ammesso di essersi sbagliato.", en: "He admitted he had made a mistake." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He said he would arrive the next day.", answer: "Ha detto che sarebbe arrivato il giorno dopo.", altAnswers: ["Ha detto che sarebbe arrivato il giorno seguente.", "Disse che sarebbe arrivato il giorno dopo."], explanation: "Future in the past: past conditional." },
          { type: "listen-choose", audio: "Ci hanno detto di aspettare lì.", question: "What were they told?", options: ["to wait there", "to leave at once", "to come back later", "to ask someone else"], correctIndex: 0, explanation: "\"Di\" + infinitive for a reported order." },
        ],
      },
      {
        heading: "Pronouns, particles, implicit clauses",
        body: [
          "Pattern: combined pronouns (\"glielo\", \"me ne\"), \"ci\" and \"ne\" in idioms (\"ce la faccio\", \"me ne vado\", \"non ne posso più\"), and implicit clauses: \"dopo aver\" + participle, gerund for cause or means, \"pur\" + gerund for concession.",
        ],
        examples: [
          { es: "Gliel'ho spiegato tre volte.", en: "I've explained it to him three times." },
          { es: "Non ne posso più di questo rumore.", en: "I can't stand this noise anymore." },
          { es: "Dopo aver mangiato, siamo usciti.", en: "After eating, we went out." },
          { es: "Pur essendo stanca, ha finito il lavoro.", en: "Despite being tired, she finished the job." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've explained it to him three times.", answer: "Gliel'ho spiegato tre volte.", altAnswers: ["Glielo ho spiegato tre volte."], explanation: "\"Gli\" + \"lo\" = \"glielo\", elided before \"ho\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian with pur.", source: "Despite being tired, she finished the job.", answer: "Pur essendo stanca, ha finito il lavoro.", altAnswers: ["Pur essendo stanca, ha terminato il lavoro."], explanation: "\"Pur\" + gerund = although." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She asked me if I'd already had dinner.", answer: "Mi ha chiesto se avessi già cenato.", altAnswers: ["Mi ha chiesto se avevo già cenato.", "Mi chiese se avessi già cenato."], explanation: "Reported question: \"se\" + pluperfect subjunctive (indicative in speech)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He admitted he had made a mistake.", answer: "Ha ammesso di essersi sbagliato.", altAnswers: ["Ha ammesso di aver sbagliato.", "Ha ammesso che si era sbagliato."], explanation: "Same subject: \"di\" + past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't stand this noise anymore.", answer: "Non ne posso più di questo rumore.", altAnswers: ["Non sopporto più questo rumore."], explanation: "\"Non poterne più\" = to be fed up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After eating, we went out.", answer: "Dopo aver mangiato, siamo usciti.", altAnswers: ["Dopo avere mangiato, siamo usciti.", "Dopo aver mangiato, siamo uscite.", "Dopo mangiato, siamo usciti."], explanation: "\"Dopo\" + past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm leaving, it's late.", answer: "Me ne vado, è tardi.", altAnswers: ["Io me ne vado, è tardi.", "Vado via, è tardi."], explanation: "\"Andarsene\" = to leave." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you do it on your own? Yes, I can manage. (to a friend)", answer: "Ce la fai da solo? Sì, ce la faccio.", altAnswers: ["Ce la fai da sola? Sì, ce la faccio."], explanation: "\"Farcela\" = to manage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She said she was tired and wanted to go home.", answer: "Ha detto che era stanca e voleva tornare a casa.", altAnswers: ["Ha detto che era stanca e che voleva tornare a casa.", "Ha detto che era stanca e voleva andare a casa.", "Disse che era stanca e voleva tornare a casa."], explanation: "Present becomes imperfect after a past verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By studying every day, you'll pass the exam. (to a friend)", answer: "Studiando ogni giorno, supererai l'esame.", altAnswers: ["Studiando tutti i giorni, supererai l'esame.", "Studiando ogni giorno, passerai l'esame."], explanation: "Gerund for means." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got the keys? Yes, I've got them.", answer: "Hai le chiavi? Sì, ce le ho.", altAnswers: ["Ce l'hai le chiavi? Sì, ce le ho.", "Hai tu le chiavi? Sì, ce le ho."], explanation: "\"Ce\" + \"le\" with \"avere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Did you give the book to Anna? Yes, [I gave it to her] yesterday.", sentence: "Hai dato il libro ad Anna? Sì, ___ ieri.", answer: "gliel'ho dato", explanation: "\"Glielo\" + \"ho\", participle agreeing with \"lo\"." },
      { type: "word-order", prompt: "Put the words in order to say: They told us they would call the next day.", words: ["Ci hanno detto", "che", "avrebbero", "chiamato", "il giorno dopo."], translation: "They told us they would call the next day.", explanation: "Future in the past: past conditional." },
      { type: "multiple-choice", question: "Reported speech: \"Arrivo domani\", disse Luca. Luca disse che...", options: ["sarebbe arrivato il giorno dopo.", "arriva domani.", "arriverebbe domani.", "sarebbe arrivato domani dopo."], correctIndex: 0, explanation: "Past conditional, and \"domani\" becomes \"il giorno dopo\"." },
      { type: "dictation", audio: "Pur avendo poco tempo, ce l'abbiamo fatta.", explanation: "\"Pur\" + gerund; \"farcela\" in the present perfect." },
      { type: "speak", text: "Mi hanno detto che il negozio avrebbe riaperto la settimana dopo.", prompt: "Say: They told me the store would reopen the following week.", tip: "ria-PER-to: stress on per.", explanation: "Reported future." },
    ],
  },
  {
    slug: "b2-dialogue-lab-dinner-debate",
    level: "IT-B2",
    number: 7,
    title: "Dialogue Lab: A Dinner Debate",
    summary: "Follow and join a long dinner conversation among friends arguing about leaving the city for a village, using the full range of Upper Intermediate language.",
    duration: "18 min",
    sections: [
      {
        heading: "The news",
        body: [
          "Four friends are having dinner at Giulia's apartment in Milan. Paolo and his partner Sara announce that they are thinking of moving to a village in the Apennines, now that they can both work from home. Davide is skeptical, and the debate begins.",
          "Notice how the speakers react: \"Ma dai!\" (no way!), \"Sul serio?\" (seriously?), \"Non ci posso credere\". Surprise and doubt trigger the subjunctive: \"Non credo che sia una buona idea\".",
          "At a dinner table Italians interrupt, overlap and tease each other far more than in a formal debate. Strong disagreement is softened with humor and with forms like \"secondo me\", \"guarda\", \"scusa, eh, ma...\". Nobody takes offense: arguing passionately over pasta is part of the pleasure.",
        ],
        examples: [
          { es: "Paolo: Abbiamo una notizia: io e Sara pensiamo di trasferirci in un paese sull'Appennino.", en: "Paolo: We've got some news: Sara and I are thinking of moving to a village in the Apennines." },
          { es: "Giulia: Ma dai! Sul serio? Non me l'aspettavo proprio.", en: "Giulia: No way! Seriously? I really didn't expect that." },
          { es: "Davide: Scusate, eh, ma non credo che sia una buona idea.", en: "Davide: Sorry, but I don't think it's a good idea." },
          { es: "Sara: Lavoriamo tutti e due da casa, quindi non c'è motivo di pagare un affitto così alto.", en: "Sara: We both work from home, so there's no reason to pay such a high rent." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sara and I are thinking of moving to a village.", answer: "Io e Sara pensiamo di trasferirci in un paese.", altAnswers: ["Sara e io pensiamo di trasferirci in un paese.", "Io e Sara stiamo pensando di trasferirci in un paese."], explanation: "\"Pensare di\" + infinitive; \"trasferirsi\" = to move." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sorry, but I don't think it's a good idea.", answer: "Scusate, ma non credo che sia una buona idea.", altAnswers: ["Scusa, ma non credo che sia una buona idea.", "Scusate, ma non penso che sia una buona idea."], explanation: "\"Non credo che\" + subjunctive." },
          { type: "listen-choose", audio: "Lavoriamo tutti e due da casa, quindi non c'è motivo di pagare un affitto così alto.", question: "Why does Sara want to move?", options: ["they both work from home and rent is high", "they've lost their jobs", "their landlord sold the apartment", "they want a bigger garden"], correctIndex: 0, explanation: "\"Tutti e due da casa\" and \"un affitto così alto\"." },
        ],
      },
      {
        heading: "The arguments",
        body: [
          "Each side argues with hypotheticals. Davide paints the worst case: \"Se nevicasse per una settimana, come fareste?\" Sara replies with her own condition: \"Se ci fosse un problema, avremmo comunque i vicini\". Notice \"comunque\" (anyway), \"a parte il fatto che\" (apart from the fact that) and \"il punto è che\" (the point is that).",
          "Concessions keep the debate friendly: \"Hai ragione, però...\", \"Sarà anche vero, ma...\" (that may be true, but). The future \"sarà\" here expresses a guess or a concession, not time.",
        ],
        examples: [
          { es: "Davide: E se nevicasse per una settimana, come fareste senza un supermercato?", en: "Davide: And if it snowed for a week, how would you manage without a supermarket?" },
          { es: "Sara: Se ci fosse un problema, avremmo comunque i vicini. In paese ci si aiuta.", en: "Sara: If there were a problem, we'd have the neighbors anyway. In a village people help each other." },
          { es: "Giulia: Sarà anche vero, ma il punto è che la connessione lassù è lentissima.", en: "Giulia: That may be true, but the point is that the connection up there is really slow." },
          { es: "Paolo: A parte il fatto che hanno appena portato la fibra, ci siamo informati.", en: "Paolo: Apart from the fact that they've just brought in fiber, we've looked into it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it snowed for a week, how would you manage? (to two people)", answer: "Se nevicasse per una settimana, come fareste?", altAnswers: ["Se nevicasse per una settimana, come vi arrangereste?"], explanation: "Hypothetical: imperfect subjunctive + conditional." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[That may be true], but the connection is slow.", sentence: "___ anche vero, ma la connessione è lenta.", answer: "Sarà", explanation: "Concessive future: \"sarà anche vero\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In a village people help each other.", answer: "In paese ci si aiuta.", altAnswers: ["In un paese ci si aiuta.", "In paese la gente si aiuta."], explanation: "Impersonal of a reflexive verb: \"ci si\"." },
        ],
      },
      {
        heading: "Coming to an end",
        body: [
          "The debate ends without a winner, as dinner debates do. Davide admits he might be wrong; Giulia proposes a toast. Notice \"magari\" (maybe, or if only), \"in fondo\" (after all) and the invitation \"Venite a trovarci!\" (Come and see us!).",
        ],
        examples: [
          { es: "Davide: In fondo vi invidio un po'. Magari ci venissi anch'io!", en: "Davide: Deep down I envy you a bit. If only I could go too!" },
          { es: "Paolo: Allora venite a trovarci appena ci siamo sistemati.", en: "Paolo: Then come and see us as soon as we've settled in." },
          { es: "Giulia: Facciamo un brindisi: alla vostra nuova vita!", en: "Giulia: Let's have a toast: to your new life!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come and see us as soon as we've settled in. (to friends)", answer: "Venite a trovarci appena ci siamo sistemati.", altAnswers: ["Venite a trovarci appena ci saremo sistemati.", "Venite a trovarci non appena ci siamo sistemati."], explanation: "\"Venire a trovare\" = to visit someone." },
          { type: "speak", text: "Facciamo un brindisi: alla vostra nuova vita!", prompt: "Propose a toast: To your new life!", tip: "brin-DI-si: stress on di.", explanation: "\"Fare un brindisi\" = to make a toast." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "No way! Seriously? I really didn't expect that.", answer: "Ma dai! Sul serio? Non me l'aspettavo proprio.", altAnswers: ["Ma dai! Davvero? Non me l'aspettavo proprio.", "Ma dai! Sul serio? Proprio non me l'aspettavo."], explanation: "\"Aspettarsi\" with \"lo\": \"me l'aspettavo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there were a problem, we'd have the neighbors anyway.", answer: "Se ci fosse un problema, avremmo comunque i vicini.", altAnswers: ["Se ci fosse un problema, avremmo i vicini comunque."], explanation: "\"Se ci fosse\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The point is that the connection up there is very slow.", answer: "Il punto è che la connessione lassù è lentissima.", altAnswers: ["Il punto è che lassù la connessione è lentissima.", "Il punto è che la connessione lassù è molto lenta."], explanation: "\"Il punto è che\"; \"lassù\" = up there." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've looked into it.", answer: "Ci siamo informati.", altAnswers: ["Ci siamo informate.", "Ci siamo già informati."], explanation: "\"Informarsi\" = to find out, look into." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Deep down I envy you a bit. (to two friends)", answer: "In fondo vi invidio un po'.", altAnswers: ["In fondo un po' vi invidio."], explanation: "\"In fondo\" = deep down, after all." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You're right, but there's no hospital nearby. (to a friend)", answer: "Hai ragione, però non c'è un ospedale vicino.", altAnswers: ["Hai ragione, ma non c'è un ospedale vicino.", "Hai ragione, però non c'è nessun ospedale vicino."], explanation: "Concession, then the objection." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If only I [could go] too!", sentence: "Magari ci ___ anch'io!", answer: "venissi", explanation: "\"Magari\" + imperfect subjunctive = if only." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Apart from the fact that] they've just brought in fiber...", sentence: "___ hanno appena portato la fibra...", answer: "A parte il fatto che", explanation: "Introduces an extra argument." },
      { type: "word-order", prompt: "Put the words in order to say: I'd never have thought you'd leave Milan.", words: ["Non avrei mai", "pensato", "che", "lasciaste", "Milano."], translation: "I'd never have thought you'd leave Milan.", explanation: "Conditional trigger + imperfect subjunctive." },
      { type: "multiple-choice", question: "In \"Sarà anche vero, ma...\", what does \"sarà\" express?", options: ["a concession", "a future event", "an order", "a condition"], correctIndex: 0, explanation: "The future is used to concede a point." },
      { type: "listen-choose", audio: "In fondo vi invidio un po'. Magari ci venissi anch'io!", question: "How does Davide feel in the end?", options: ["a little envious", "angry", "relieved", "bored"], correctIndex: 0, explanation: "\"Vi invidio un po'\"." },
      { type: "dictation", audio: "Non credo che sia una buona idea lasciare il lavoro in città.", explanation: "\"Non credo che\" + subjunctive." },
      { type: "speak", text: "Sarà anche vero, ma il punto è che in città ci sono più servizi.", prompt: "Object politely: That may be true, but the point is that there are more services in the city.", tip: "ser-VI-zi: stress on vi.", explanation: "Concession + objection." },
    ],
  },
  {
    slug: "b2-reading-lab-b2-final",
    level: "IT-B2",
    number: 8,
    title: "Reading Lab: Upper Intermediate Final Reading",
    summary: "Read a long magazine feature on why young Italians leave their parents' home late, and work through its arguments, data and language.",
    duration: "18 min",
    sections: [
      {
        heading: "The problem",
        body: [
          "The article, \"Perché restiamo a casa con mamma e papà\", opens with a fact and a stereotype. Read it slowly, then answer the questions.",
          "Key words: \"i bamboccioni\" (big babies, a mocking word for adults living with their parents), \"l'età media\" (average age), \"precario\" (insecure, temporary), \"il mercato del lavoro\".",
          "The figures in the article are approximate and come from European statistics, which change slightly from year to year. What matters for the reader is the comparison: in northern Europe young people tend to leave home in their early twenties, in Italy closer to thirty.",
          "Feature articles often start with a scene or a provocation and only later give data. When a writer quotes a stereotype, look for the turn: \"eppure\", \"in realtà\", \"tuttavia\". That is where the author's own view begins.",
        ],
        examples: [
          { es: "In Italia i giovani lasciano la casa dei genitori, in media, intorno ai trent'anni.", en: "In Italy young people leave their parents' home, on average, at around thirty." },
          { es: "È un dato tra i più alti d'Europa, che ha fatto nascere lo stereotipo dei bamboccioni.", en: "It is one of the highest figures in Europe, and it has given rise to the stereotype of the big babies." },
          { es: "In realtà, la maggior parte di loro se ne andrebbe volentieri, se potesse.", en: "In reality, most of them would gladly leave, if they could." },
          { es: "Il problema non è la pigrizia, ma un mercato del lavoro precario.", en: "The problem isn't laziness but an insecure job market." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "According to the article, what is the real problem?", options: ["an insecure job market", "laziness", "overprotective parents", "a lack of universities"], correctIndex: 0, explanation: "\"Il problema non è la pigrizia, ma...\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Most of them would gladly leave, if they could.", answer: "La maggior parte di loro se ne andrebbe volentieri, se potesse.", altAnswers: ["La maggior parte di loro andrebbe via volentieri, se potesse."], explanation: "\"Andarsene\" in the conditional; \"la maggior parte\" takes a singular verb." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The problem isn't laziness but the job market.", answer: "Il problema non è la pigrizia, ma il mercato del lavoro.", altAnswers: ["Il problema non è la pigrizia ma il mercato del lavoro."], explanation: "\"Non ... ma\" = not ... but." },
        ],
      },
      {
        heading: "The causes",
        body: [
          "The middle of the article lists causes with connectors: \"innanzitutto\", \"inoltre\", \"per di più\" (what's more), \"di conseguenza\". Note \"il contratto a tempo determinato\" (fixed-term contract), \"gli affitti\" (rents) and \"lo stipendio d'ingresso\" (starting salary).",
        ],
        examples: [
          { es: "Innanzitutto, molti giovani hanno contratti a tempo determinato.", en: "First of all, many young people have fixed-term contracts." },
          { es: "Inoltre, gli affitti nelle grandi città sono cresciuti più degli stipendi.", en: "In addition, rents in the big cities have risen more than salaries." },
          { es: "Per di più, senza un contratto stabile è difficile ottenere un mutuo.", en: "What's more, without a permanent contract it's hard to get a mortgage." },
          { es: "Di conseguenza, molti preferiscono risparmiare restando in famiglia.", en: "As a result, many prefer to save money by staying with their family." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Rents have risen more than salaries.", answer: "Gli affitti sono cresciuti più degli stipendi.", altAnswers: ["Gli affitti sono aumentati più degli stipendi."], explanation: "\"Crescere\" takes \"essere\"; \"più di\" + article." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Many prefer to save money [by staying] with their family.", sentence: "Molti preferiscono risparmiare ___ in famiglia.", answer: "restando", explanation: "Gerund for means." },
          { type: "listen-choose", audio: "Per di più, senza un contratto stabile è difficile ottenere un mutuo.", question: "What is hard to get without a permanent contract?", options: ["a mortgage", "a degree", "a car", "a passport"], correctIndex: 0, explanation: "\"Un mutuo\" = a mortgage." },
        ],
      },
      {
        heading: "The conclusion",
        body: [
          "The article closes with a proposal and a hedge: the writer does not claim to have the solution. Notice \"sarebbe ora che\" + imperfect subjunctive (it's about time that) and \"non basta che\" + subjunctive.",
        ],
        examples: [
          { es: "Non basta che i giovani siano disposti a trasferirsi.", en: "It isn't enough for young people to be willing to move." },
          { es: "Sarebbe ora che le città offrissero più case a prezzi accessibili.", en: "It's about time cities offered more affordable housing." },
          { es: "Forse allora smetteremmo di chiamarli bamboccioni.", en: "Perhaps then we would stop calling them big babies." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's about time cities offered more affordable housing.", answer: "Sarebbe ora che le città offrissero più case a prezzi accessibili.", altAnswers: ["Sarebbe ora che le città offrissero più alloggi a prezzi accessibili.", "È ora che le città offrano più case a prezzi accessibili."], explanation: "\"Sarebbe ora che\" + imperfect subjunctive." },
          { type: "speak", text: "Non basta che i giovani siano disposti a trasferirsi.", prompt: "Say: It isn't enough for young people to be willing to move.", tip: "di-SPO-sti: stress on spo.", explanation: "\"Non basta che\" + subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Young people leave home, on average, at around thirty.", answer: "I giovani lasciano la casa dei genitori, in media, intorno ai trent'anni.", altAnswers: ["I giovani lasciano casa, in media, intorno ai trent'anni.", "In media i giovani escono di casa intorno ai trent'anni.", "I giovani lasciano la casa dei genitori, in media, verso i trent'anni."], explanation: "\"Intorno ai\" + age = at around." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many young people have fixed-term contracts.", answer: "Molti giovani hanno contratti a tempo determinato.", altAnswers: ["Molti giovani hanno un contratto a tempo determinato."], explanation: "\"A tempo determinato\" = fixed-term." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Without a permanent contract it's hard to get a mortgage.", answer: "Senza un contratto stabile è difficile ottenere un mutuo.", altAnswers: ["Senza un contratto a tempo indeterminato è difficile ottenere un mutuo.", "Senza un contratto fisso è difficile ottenere un mutuo."], explanation: "\"Ottenere un mutuo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It isn't enough for young people to be willing to move.", answer: "Non basta che i giovani siano disposti a trasferirsi.", altAnswers: ["Non basta che i giovani siano pronti a trasferirsi."], explanation: "\"Non basta che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Perhaps then we would stop calling them big babies.", answer: "Forse allora smetteremmo di chiamarli bamboccioni.", altAnswers: ["Forse allora la smetteremmo di chiamarli bamboccioni."], explanation: "\"Smettere di\" + infinitive; pronoun attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As a result, many stay with their family.", answer: "Di conseguenza, molti restano in famiglia.", altAnswers: ["Di conseguenza molti rimangono in famiglia.", "Di conseguenza, molti rimangono in famiglia."], explanation: "\"Di conseguenza\" = as a result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What's more], salaries are low.", sentence: "___, gli stipendi sono bassi.", answer: "Per di più", explanation: "Adds a stronger argument." },
      { type: "word-order", prompt: "Put the words in order to say: In reality, the problem is the job market.", words: ["In realtà,", "il problema", "è", "il mercato", "del lavoro."], translation: "In reality, the problem is the job market.", explanation: "\"In realtà\" signals the writer's view." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "il mutuo", right: "mortgage" }, { left: "lo stipendio", right: "salary" }, { left: "l'affitto", right: "rent" }, { left: "precario", right: "insecure" }], explanation: "Key vocabulary from the article." },
      { type: "multiple-choice", question: "Which word signals that the author is about to contradict a stereotype?", options: ["in realtà", "innanzitutto", "inoltre", "per di più"], correctIndex: 0, explanation: "\"In realtà\" introduces the true picture." },
      { type: "listen-choose", audio: "È un dato tra i più alti d'Europa, che ha fatto nascere lo stereotipo dei bamboccioni.", question: "What has this figure given rise to?", options: ["a stereotype", "a new law", "a protest", "a television series"], correctIndex: 0, explanation: "\"Fare nascere lo stereotipo\"." },
      { type: "dictation", audio: "Sarebbe ora che le città offrissero più case a prezzi accessibili.", explanation: "\"Sarebbe ora che\" + imperfect subjunctive." },
      { type: "speak", text: "Secondo me, il problema non è la pigrizia, ma la mancanza di lavoro stabile.", prompt: "Give your view: In my opinion, the problem isn't laziness but the lack of stable work.", tip: "pi-GRI-zia: stress on gri.", explanation: "\"Non ... ma\" for a contrast." },
    ],
  },
  {
    slug: "b2-listening-lab-b2-final",
    level: "IT-B2",
    number: 9,
    title: "Listening Lab: Upper Intermediate Final Listening",
    summary: "Follow a long radio feature on the return of night trains: the reporter on board, a passenger, a railway worker and the studio debate.",
    duration: "18 min",
    sections: [
      {
        heading: "On board",
        body: [
          "The feature, from a radio program called \"Binario 9\", follows a night train from the north to Sicily. The reporter speaks from the corridor, so expect background noise and a fast, informal delivery. Listen for the gist first: who is speaking, where, and why.",
          "Key words: \"la cuccetta\" (couchette, a bunk in a shared compartment), \"il vagone letto\" (sleeping car), \"lo scompartimento\" (compartment), \"il traghetto\" (ferry).",
          "Radio reporters describe what listeners can't see, so the present tense and \"ecco\" are everywhere: \"ecco il capotreno\", \"il treno sta rallentando\". Don't worry if you miss a word in the noise: keep listening and use the context to fill the gap.",
        ],
        examples: [
          { es: "Sono le dieci di sera e il treno sta partendo dalla stazione centrale.", en: "It's ten in the evening and the train is leaving the central station." },
          { es: "Ecco il capotreno, che controlla i biglietti scompartimento per scompartimento.", en: "Here's the conductor, checking tickets compartment by compartment." },
          { es: "Domattina il treno salirà sul traghetto per attraversare lo Stretto.", en: "Tomorrow morning the train will board the ferry to cross the Strait." },
          { es: "Nelle cuccette si dorme in quattro o in sei per scompartimento.", en: "In the couchettes there are four or six people sleeping per compartment." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Domattina il treno salirà sul traghetto per attraversare lo Stretto.", question: "What will happen tomorrow morning?", options: ["the train will go onto a ferry", "the train will be canceled", "passengers will change trains", "the train will stop in Rome"], correctIndex: 0, explanation: "\"Salire sul traghetto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train is leaving the central station.", answer: "Il treno sta partendo dalla stazione centrale.", altAnswers: ["Il treno parte dalla stazione centrale."], explanation: "\"Stare\" + gerund for an action in progress." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here's the conductor, checking the tickets.", answer: "Ecco il capotreno, che controlla i biglietti.", altAnswers: ["Ecco il capotreno che controlla i biglietti."], explanation: "\"Ecco\" + relative clause." },
        ],
      },
      {
        heading: "The voices",
        body: [
          "The reporter interviews a passenger, Elena, and a railway worker, Salvatore. Elena explains her choice with a hypothetical and a contrast: \"Se prendessi l'aereo, arriverei prima, ma così risparmio una notte d'albergo\". Salvatore remembers the past with the imperfect: \"Una volta i treni notte erano pieni di emigranti\".",
          "Note \"ormai\" (by now), \"una volta\" (once, in the past) and \"pare che\" + subjunctive (it seems that).",
        ],
        examples: [
          { es: "Se prendessi l'aereo, arriverei prima, ma così risparmio una notte d'albergo.", en: "If I took the plane, I'd arrive earlier, but this way I save a night in a hotel." },
          { es: "E poi inquino molto meno: per me conta.", en: "And I pollute much less: that matters to me." },
          { es: "Una volta i treni notte erano pieni di emigranti che tornavano a casa per le feste.", en: "Once the night trains were full of emigrants going home for the holidays." },
          { es: "Pare che ormai li prendano soprattutto i giovani.", en: "It seems that these days it's mainly young people who take them." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Se prendessi l'aereo, arriverei prima, ma così risparmio una notte d'albergo.", question: "Why does Elena take the night train?", options: ["to save the cost of a hotel", "because she's afraid of flying", "because flights are full", "to meet other passengers"], correctIndex: 0, explanation: "\"Risparmio una notte d'albergo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems that these days it's mainly young people who take them.", answer: "Pare che ormai li prendano soprattutto i giovani.", altAnswers: ["Sembra che ormai li prendano soprattutto i giovani.", "Pare che ormai siano soprattutto i giovani a prenderli."], explanation: "\"Pare che\" + subjunctive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Once the night trains [were] full of emigrants.", sentence: "Una volta i treni notte ___ pieni di emigranti.", answer: "erano", explanation: "Imperfect for a past state." },
        ],
      },
      {
        heading: "The studio debate",
        body: [
          "Back in the studio, two guests disagree: one says night trains are a nostalgic luxury, the other that they are the future of sustainable travel. Listen for reported speech when the host sums up: \"Il nostro ospite sostiene che i treni notte siano il futuro\".",
        ],
        examples: [
          { es: "Il nostro ospite sostiene che i treni notte siano il futuro del viaggio sostenibile.", en: "Our guest maintains that night trains are the future of sustainable travel." },
          { es: "Secondo altri, invece, si tratta solo di nostalgia.", en: "According to others, though, it's just nostalgia." },
          { es: "Lasciamo a voi ascoltatori l'ultima parola.", en: "We leave the last word to you, our listeners." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "According to others, though, it's just nostalgia.", answer: "Secondo altri, invece, si tratta solo di nostalgia.", altAnswers: ["Secondo altri, invece, è solo nostalgia.", "Secondo altri invece si tratta solo di nostalgia."], explanation: "\"Si tratta di\" = it's a matter of." },
          { type: "speak", text: "Lasciamo a voi ascoltatori l'ultima parola.", prompt: "Close the show: We leave the last word to you, our listeners.", tip: "a-scol-ta-TO-ri: stress on to.", explanation: "Radio sign-off." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow morning the train will board the ferry.", answer: "Domattina il treno salirà sul traghetto.", altAnswers: ["Domani mattina il treno salirà sul traghetto."], explanation: "\"Domattina\" = tomorrow morning." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I took the plane, I'd arrive earlier.", answer: "Se prendessi l'aereo, arriverei prima.", altAnswers: ["Se prendessi l'aereo arriverei prima."], explanation: "Hypothetical: imperfect subjunctive + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This way I save a night in a hotel.", answer: "Così risparmio una notte d'albergo.", altAnswers: ["Così risparmio una notte in albergo.", "In questo modo risparmio una notte d'albergo."], explanation: "\"Risparmiare\" = to save." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I pollute much less, and that matters to me.", answer: "Inquino molto meno, e per me conta.", altAnswers: ["Inquino molto meno, e questo per me conta.", "Inquino molto meno e per me è importante."], explanation: "\"Contare\" = to matter." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Our guest maintains that night trains are the future.", answer: "Il nostro ospite sostiene che i treni notte siano il futuro.", altAnswers: ["Il nostro ospite sostiene che i treni notte sono il futuro."], explanation: "\"Sostenere che\": subjunctive in formal reporting." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the couchettes four people sleep per compartment.", answer: "Nelle cuccette si dorme in quattro per scompartimento.", altAnswers: ["Nelle cuccette dormono quattro persone per scompartimento."], explanation: "\"In quattro\" = four of us, four people." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Emigrants [who were going home] for the holidays.", sentence: "Emigranti ___ a casa per le feste.", answer: "che tornavano", explanation: "Relative + imperfect for a habitual past." },
      { type: "word-order", prompt: "Put the words in order to say: The train is slowing down near the station.", words: ["Il treno", "sta", "rallentando", "vicino", "alla stazione."], translation: "The train is slowing down near the station.", explanation: "\"Stare\" + gerund." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la cuccetta", right: "couchette" }, { left: "il vagone letto", right: "sleeping car" }, { left: "il traghetto", right: "ferry" }, { left: "il capotreno", right: "conductor" }], explanation: "Train vocabulary from the feature." },
      { type: "multiple-choice", question: "What does Salvatore describe?", options: ["how night trains used to be", "how to book a couchette", "the price of tickets", "a delay"], correctIndex: 0, explanation: "\"Una volta\" + imperfect." },
      { type: "listen-choose", audio: "Ecco il capotreno, che controlla i biglietti scompartimento per scompartimento.", question: "What is the conductor doing?", options: ["checking tickets", "selling food", "making the beds", "announcing a delay"], correctIndex: 0, explanation: "\"Controlla i biglietti\"." },
      { type: "dictation", audio: "Pare che ormai i treni notte li prendano soprattutto i giovani.", explanation: "\"Pare che\" + subjunctive, with a fronted object repeated by \"li\"." },
      { type: "speak", text: "Se prendessi l'aereo, arriverei prima, ma preferisco il treno.", prompt: "Explain your choice: If I took the plane, I'd arrive earlier, but I prefer the train.", tip: "pre-fe-RI-sco: stress on ri.", explanation: "Hypothetical + contrast." },
    ],
  },
  {
    slug: "b2-mission-b2-essay",
    level: "IT-B2",
    number: 10,
    title: "Real-World Mission: An Upper Intermediate Essay",
    summary: "Plan and write a 250-word argumentative essay on a topic of your choice, bringing together everything from the Upper Intermediate level.",
    duration: "18 min",
    kind: "review",
    sections: [
      {
        heading: "Choose and frame the topic",
        body: [
          "Your mission: a 250-word essay, \"un tema argomentativo\", on a topic you care about: for example remote work, tourism in historic cities, or social media for teenagers. Begin with an introduction that presents the issue and your thesis: \"Negli ultimi anni si discute molto di...\", \"Si tratta di una questione complessa\", \"A mio avviso...\".",
          "A good introduction is short: two or three sentences. Don't give your arguments yet; just make the reader want to know why you think what you think.",
        ],
        examples: [
          { es: "Negli ultimi anni si discute molto del lavoro da casa.", en: "In recent years there has been a lot of discussion about working from home." },
          { es: "Si tratta di una questione complessa, che riguarda tutti.", en: "It's a complex issue that concerns everyone." },
          { es: "A mio avviso, i vantaggi superano gli svantaggi.", en: "In my view, the advantages outweigh the disadvantages." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In recent years there has been a lot of discussion about tourism.", answer: "Negli ultimi anni si discute molto del turismo.", altAnswers: ["Negli ultimi anni si è discusso molto del turismo.", "Negli ultimi anni si parla molto di turismo."], explanation: "Impersonal \"si\" + \"discutere di\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In my view, the advantages outweigh the disadvantages.", answer: "A mio avviso, i vantaggi superano gli svantaggi.", altAnswers: ["Secondo me, i vantaggi superano gli svantaggi.", "A mio parere, i vantaggi superano gli svantaggi."], explanation: "\"A mio avviso\" = in my view, formal." },
        ],
      },
      {
        heading: "Build the arguments",
        body: [
          "The body has two or three paragraphs. Each one opens with a connector and a clear idea: \"In primo luogo\", \"In secondo luogo\", \"Inoltre\". Support each idea with an example or a hypothetical: \"Se più persone lavorassero da casa, ci sarebbe meno traffico\".",
          "Then deal with the other side: \"È vero che... tuttavia\", \"Qualcuno potrebbe obiettare che...\" + conditional. Answering an objection shows the examiner that you can handle complex structures, and it makes your thesis stronger.",
        ],
        examples: [
          { es: "In primo luogo, lavorare da casa fa risparmiare tempo e denaro.", en: "First, working from home saves time and money." },
          { es: "Se più persone lavorassero da casa, ci sarebbe meno traffico.", en: "If more people worked from home, there would be less traffic." },
          { es: "Qualcuno potrebbe obiettare che si rischia l'isolamento.", en: "Someone might object that there's a risk of isolation." },
          { es: "È vero che manca il contatto con i colleghi; tuttavia, basta organizzarsi.", en: "It's true that you miss contact with colleagues; however, it's just a matter of getting organized." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If more people worked from home, there would be less traffic.", answer: "Se più persone lavorassero da casa, ci sarebbe meno traffico.", altAnswers: ["Se più gente lavorasse da casa, ci sarebbe meno traffico."], explanation: "Hypothetical: imperfect subjunctive + conditional." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Someone [might object] that there's a risk of isolation.", sentence: "Qualcuno ___ che si rischia l'isolamento.", answer: "potrebbe obiettare", explanation: "Conditional to introduce an objection." },
          { type: "listen-choose", audio: "È vero che manca il contatto con i colleghi; tuttavia, basta organizzarsi.", question: "What disadvantage does the writer admit?", options: ["less contact with colleagues", "lower pay", "longer hours", "more traffic"], correctIndex: 0, explanation: "\"Manca il contatto con i colleghi\"." },
        ],
      },
      {
        heading: "Conclude and check",
        body: [
          "Conclude by restating the thesis in new words and, if you like, a proposal: \"In conclusione\", \"Tutto sommato\" (all things considered), \"Sarebbe auspicabile che\" + subjunctive (it would be desirable that). Then check: subjunctive after opinion verbs, agreement of participles, articles and prepositions, and the word count.",
        ],
        examples: [
          { es: "Tutto sommato, credo che il lavoro da casa sia una conquista.", en: "All things considered, I believe working from home is an achievement." },
          { es: "Sarebbe auspicabile che le aziende lo rendessero possibile a tutti.", en: "It would be desirable for companies to make it possible for everyone." },
          { es: "In conclusione, il lavoro da casa non è un privilegio, ma un'opportunità.", en: "In conclusion, working from home isn't a privilege but an opportunity." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "All things considered, I believe it's an achievement.", answer: "Tutto sommato, credo che sia una conquista.", altAnswers: ["Tutto sommato credo che sia una conquista.", "Tutto sommato, penso che sia una conquista."], explanation: "\"Tutto sommato\" + opinion with subjunctive." },
          { type: "speak", text: "In conclusione, sarebbe auspicabile che le aziende lo rendessero possibile a tutti.", prompt: "Read your conclusion: In conclusion, it would be desirable for companies to make it possible for everyone.", tip: "au-spi-CA-bi-le: stress on ca.", explanation: "\"Sarebbe auspicabile che\" + imperfect subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a complex issue that concerns everyone.", answer: "Si tratta di una questione complessa, che riguarda tutti.", altAnswers: ["È una questione complessa che riguarda tutti.", "Si tratta di una questione complessa che riguarda tutti."], explanation: "\"Si tratta di\" = it's a matter of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First, working from home saves time and money.", answer: "In primo luogo, lavorare da casa fa risparmiare tempo e denaro.", altAnswers: ["In primo luogo, lavorare da casa fa risparmiare tempo e soldi.", "Innanzitutto, lavorare da casa fa risparmiare tempo e denaro."], explanation: "\"Fare\" + infinitive = to make something happen." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone might object that there's a risk of isolation.", answer: "Qualcuno potrebbe obiettare che si rischia l'isolamento.", altAnswers: ["Qualcuno potrebbe obiettare che c'è il rischio dell'isolamento.", "Qualcuno potrebbe obiettare che c'è il rischio di isolamento."], explanation: "Conditional + impersonal \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's true that tourism brings money; however, it changes the cities.", answer: "È vero che il turismo porta soldi; tuttavia, cambia le città.", altAnswers: ["È vero che il turismo porta denaro; tuttavia, cambia le città.", "È vero che il turismo porta soldi, tuttavia cambia le città."], explanation: "\"È vero che ... tuttavia\" concedes and then objects." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be desirable for the schools to teach it.", answer: "Sarebbe auspicabile che le scuole lo insegnassero.", altAnswers: ["Sarebbe auspicabile che lo insegnassero le scuole."], explanation: "\"Sarebbe auspicabile che\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Secondly, social media can be useful for studying.", answer: "In secondo luogo, i social possono essere utili per studiare.", altAnswers: ["In secondo luogo, i social network possono essere utili per studiare.", "In secondo luogo, i social media possono essere utili per studiare."], explanation: "\"In secondo luogo\" = secondly." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[All things considered], I'm in favor.", sentence: "___, sono favorevole.", answer: "Tutto sommato", explanation: "Concluding connector." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think working from home [is] an achievement.", sentence: "Credo che il lavoro da casa ___ una conquista.", answer: "sia", explanation: "\"Credo che\" + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: In conclusion, the advantages outweigh the disadvantages.", words: ["In conclusione,", "i vantaggi", "superano", "gli svantaggi."], translation: "In conclusion, the advantages outweigh the disadvantages.", explanation: "Restating the thesis." },
      { type: "multiple-choice", question: "Which phrase best introduces an objection in an essay?", options: ["Qualcuno potrebbe obiettare che...", "Ciao a tutti...", "Comunque boh...", "Te l'avevo detto..."], correctIndex: 0, explanation: "Formal and impersonal." },
      { type: "listen-choose", audio: "Negli ultimi anni si discute molto del lavoro da casa.", question: "What is the essay about?", options: ["working from home", "housing prices", "school vacations", "public transportation"], correctIndex: 0, explanation: "\"Il lavoro da casa\"." },
      { type: "dictation", audio: "A mio avviso, i vantaggi superano di gran lunga gli svantaggi.", explanation: "\"Di gran lunga\" = by far." },
      { type: "speak", text: "Negli ultimi anni si discute molto del turismo nelle città d'arte.", prompt: "Open your essay: In recent years there has been a lot of discussion about tourism in historic art cities.", tip: "tu-RI-smo: stress on ri.", explanation: "Essay introduction." },
    ],
  },
];

export const IT_B2_U30_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write an argumentative essay (\"tema argomentativo\") of about 250 words on a topic of your choice, for example remote work, mass tourism in historic cities, or social media and teenagers. Include an introduction with your thesis, at least two arguments, an objection and your reply, and a conclusion.",
  minWords: 230,
  maxWords: 300,
  rubric: [
    "Has a clear structure: introduction with a thesis, two or more argument paragraphs, an objection with a reply, and a conclusion",
    "Uses the subjunctive after opinion and impersonal expressions (credo che, è importante che, sarebbe auspicabile che) and at least one hypothetical with se + imperfect subjunctive",
    "Links paragraphs with formal connectors (in primo luogo, inoltre, è vero che ... tuttavia, tutto sommato, in conclusione)",
    "Keeps a formal, impersonal register (si discute, si tratta di, a mio avviso) with accurate agreement, articles and prepositions",
  ],
  modelAnswer: "Negli ultimi anni si discute molto del turismo nelle città d'arte. Si tratta di una questione complessa: a mio avviso, il turismo è una risorsa, ma solo se viene gestito con regole chiare.\n\nIn primo luogo, non si può negare che il turismo porti lavoro e ricchezza. Senza i visitatori, molti musei, ristoranti e negozi chiuderebbero, e numerosi giovani perderebbero un'occupazione. Inoltre, il turismo permette di finanziare il restauro di monumenti che altrimenti andrebbero in rovina.\n\nIn secondo luogo, però, è evidente che in certe città la situazione è diventata insostenibile. Nei centri storici gli affitti brevi hanno fatto salire i prezzi, e molti residenti sono stati costretti ad andarsene. Se questa tendenza continuasse, le città si trasformerebbero in musei a cielo aperto, belli ma senza vita.\n\nQualcuno potrebbe obiettare che limitare il turismo significa danneggiare l'economia. È vero che le entrate diminuirebbero nel breve periodo; tuttavia, un turismo più lento e distribuito durante tutto l'anno sarebbe più redditizio nel lungo periodo, perché i visitatori resterebbero più a lungo e spenderebbero di più nei negozi locali.\n\nTutto sommato, credo che la soluzione non sia chiudere le porte ai turisti, ma accoglierli meglio. Sarebbe auspicabile che i comuni limitassero gli affitti brevi, promuovessero le località meno conosciute e investissero nei trasporti pubblici. Solo così le nostre città potranno restare luoghi da visitare e, allo stesso tempo, da vivere.",
  explanation: "The essay states its thesis in the introduction (\"a mio avviso, il turismo è una risorsa, ma solo se...\"), develops two arguments with \"in primo luogo\" and \"in secondo luogo\", answers an objection with \"è vero che ... tuttavia\", and concludes with \"tutto sommato\" and a proposal. It uses the subjunctive after opinion and impersonal expressions (\"non si può negare che porti\", \"credo che non sia\", \"sarebbe auspicabile che limitassero\"), a hypothetical (\"se continuasse ... si trasformerebbero\") and the passive (\"viene gestito\", \"sono stati costretti\").",
};
