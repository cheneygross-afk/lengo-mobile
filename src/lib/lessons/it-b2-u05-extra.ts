// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u05-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 5 Extra Practice: The Impossible Past. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U05_EXTRA: Lesson[] = [
  {
    slug: "b2-impossible-past-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Impossible Past",
    summary: "Fresh sentences with se + pluperfect subjunctive and the past conditional.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "What didn't happen",
        body: [
          "\"Se avessi / fossi\" + participle, then \"avrei / sarei\" + participle. Check each auxiliary against the passato prossimo.",
        ],
        examples: [
          { es: "Se avessimo controllato l'orario, non avremmo aspettato un'ora.", en: "If we'd checked the schedule, we wouldn't have waited an hour." },
          { es: "Se fosse rimasta, avrebbe visto i fuochi d'artificio.", en: "If she'd stayed, she'd have seen the fireworks." },
          { es: "Se mi avessero avvisato, avrei portato il cappotto.", en: "If they'd warned me, I'd have brought my coat." },
          { es: "Se non ci fossimo fermati, saremmo arrivati prima.", en: "If we hadn't stopped, we'd have arrived earlier." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If she'd stayed, she'd have seen the fireworks.", answer: "Se fosse rimasta, avrebbe visto i fuochi d'artificio.", altAnswers: ["Se fosse restata, avrebbe visto i fuochi d'artificio.", "Avrebbe visto i fuochi d'artificio se fosse rimasta."], explanation: "\"Fosse rimasta\" + \"avrebbe visto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they'd warned me, I'd have brought my coat.", answer: "Se mi avessero avvisato, avrei portato il cappotto.", altAnswers: ["Se mi avessero avvisata, avrei portato il cappotto.", "Avrei portato il cappotto se mi avessero avvisato."], explanation: "\"Avessero avvisato\" + \"avrei portato\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we'd checked the schedule, we wouldn't have waited an hour.", answer: "Se avessimo controllato l'orario, non avremmo aspettato un'ora.", explanation: "Impossible past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we hadn't stopped, we'd have arrived earlier.", answer: "Se non ci fossimo fermati, saremmo arrivati prima.", altAnswers: ["Se non ci fossimo fermate, saremmo arrivate prima."], explanation: "Reflexive + essere result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you'd asked, I'd have said yes. (to a friend)", answer: "Se me l'avessi chiesto, avrei detto di sì.", altAnswers: ["Se me lo avessi chiesto, avrei detto di sì.", "Se me l'avessi chiesto, avrei detto sì."], explanation: "\"Me l'avessi chiesto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they had won, they would have gone to the final.", answer: "Se avessero vinto, sarebbero andati in finale.", altAnswers: ["Sarebbero andati in finale se avessero vinto."], explanation: "\"Avessero vinto\" + \"sarebbero andati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I had locked the car, they wouldn't have stolen it.", answer: "Se avessi chiuso la macchina a chiave, non me l'avrebbero rubata.", altAnswers: ["Se avessi chiuso a chiave la macchina, non me l'avrebbero rubata.", "Se avessi chiuso la macchina, non l'avrebbero rubata."], explanation: "\"L'avrebbero rubata\": agreement with \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you (plural) had arrived on time, you'd have seen the start.", answer: "Se foste arrivati in orario, avreste visto l'inizio.", altAnswers: ["Se foste arrivate in orario, avreste visto l'inizio.", "Se foste arrivati in tempo, avreste visto l'inizio."], explanation: "voi: \"foste arrivati\" + \"avreste visto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it hadn't been so expensive, I'd have bought it.", answer: "Se non fosse stato così caro, l'avrei comprato.", altAnswers: ["Se non fosse costato così tanto, l'avrei comprato.", "L'avrei comprato se non fosse stato così caro."], explanation: "\"Fosse stato\" + \"l'avrei comprato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If he'd been careful, he wouldn't have fallen.", answer: "Se fosse stato attento, non sarebbe caduto.", altAnswers: ["Se avesse fatto attenzione, non sarebbe caduto.", "Non sarebbe caduto se fosse stato attento."], explanation: "\"Cadere\" → \"sarebbe caduto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I [had listened to] my mother, I'd have taken a sweater.", sentence: "Se ___ mia madre, avrei preso un maglione.", answer: "avessi ascoltato", explanation: "\"Avessi ascoltato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you had called, [I'd have come] to get you. (a woman speaking)", sentence: "Se avessi chiamato, ___ a prenderti.", answer: "sarei venuta", explanation: "Essere + agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the guests [had left] earlier, we'd have slept more.", sentence: "Se gli ospiti ___ prima, avremmo dormito di più.", answer: "fossero andati via", altAnswers: ["se ne fossero andati", "fossero partiti"], explanation: "\"Andare via\" → \"fossero andati via\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I'd known it was your birthday, [I'd have brought you] a present. (to a friend)", sentence: "Se avessi saputo che era il tuo compleanno, ___ un regalo.", answer: "ti avrei portato", explanation: "\"Ti avrei portato\"." },
      { type: "listen-choose", audio: "Se non fosse stato così caro, l'avrei comprato.", question: "Why didn't the speaker buy it?", options: ["It was too expensive.", "It was sold out.", "They didn't like it.", "The shop was closed."], correctIndex: 0, explanation: "\"Se non fosse stato così caro\"." },
      { type: "dictation", audio: "Se ci avessero avvisato, saremmo partiti prima.", explanation: "Impossible past." },
      { type: "speak", text: "Se avessi ascoltato mia madre, avrei preso il maglione e non avrei preso freddo.", prompt: "Say it in Italian: If I'd listened to my mother, I'd have taken the sweater and I wouldn't have caught a chill.", tip: "\"Prendere freddo\" = to catch a chill.", explanation: "One condition, two results." },
    ],
  },
  {
    slug: "b2-impossible-past-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Mixed Conditions",
    summary: "Fresh mixed conditions: past cause with present result, and present trait with past result.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Mixing the times",
        body: [
          "Past condition + present result: \"Se avessi ..., ora + conditional\". Present trait + past result: \"Se fossi ..., + past conditional\".",
        ],
        examples: [
          { es: "Se avessi fatto colazione, ora non avrei fame.", en: "If I'd had breakfast, I wouldn't be hungry now." },
          { es: "Se fosse più gentile, l'avrebbero promosso.", en: "If he were nicer, they'd have promoted him." },
          { es: "Se avessimo comprato i biglietti, adesso saremmo al concerto.", en: "If we'd bought the tickets, we'd be at the concert now." },
          { es: "Se non fossi così distratto, avresti visto il messaggio.", en: "If you weren't so absent-minded, you'd have seen the message." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I'd had breakfast, I wouldn't be hungry now.", answer: "Se avessi fatto colazione, ora non avrei fame.", altAnswers: ["Se avessi fatto colazione, adesso non avrei fame."], explanation: "Past condition + present result." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If he were nicer, they'd have promoted him.", answer: "Se fosse più gentile, l'avrebbero promosso.", altAnswers: ["Se fosse più simpatico, l'avrebbero promosso."], explanation: "Present trait + past result." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we'd bought the tickets, we'd be at the concert now.", answer: "Se avessimo comprato i biglietti, adesso saremmo al concerto.", altAnswers: ["Se avessimo comprato i biglietti, ora saremmo al concerto."], explanation: "Mixed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you weren't so absent-minded, you'd have seen the message. (to a man)", answer: "Se non fossi così distratto, avresti visto il messaggio.", explanation: "Mixed: trait + past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I hadn't moved to Italy, I wouldn't speak Italian.", answer: "Se non mi fossi trasferito in Italia, non parlerei italiano.", altAnswers: ["Se non mi fossi trasferita in Italia, non parlerei italiano.", "Se non mi fossi trasferito in Italia, non parlerei l'italiano."], explanation: "Past cause + present result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If she were less shy, she'd have sung at the party.", answer: "Se fosse meno timida, avrebbe cantato alla festa.", explanation: "Trait + past result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they had planted the trees, there would be shade now.", answer: "Se avessero piantato gli alberi, ora ci sarebbe ombra.", altAnswers: ["Se avessero piantato gli alberi, adesso ci sarebbe ombra.", "Se avessero piantato gli alberi, ora ci sarebbe l'ombra."], explanation: "Past cause + present result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I didn't love cooking, I wouldn't have opened a restaurant.", answer: "Se non amassi cucinare, non avrei aperto un ristorante.", altAnswers: ["Se non mi piacesse cucinare, non avrei aperto un ristorante."], explanation: "Trait + past result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you'd gone to bed earlier, you wouldn't be so tired. (to a friend)", answer: "Se fossi andato a letto prima, non saresti così stanco.", altAnswers: ["Se fossi andata a letto prima, non saresti così stanca."], explanation: "Past cause + present state." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If we were richer, we'd have bought that house.", answer: "Se fossimo più ricchi, avremmo comprato quella casa.", altAnswers: ["Se fossimo più ricche, avremmo comprato quella casa."], explanation: "Present fact + past result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I'd learned to swim as a child, I [wouldn't be] afraid of water now.", sentence: "Se avessi imparato a nuotare da piccolo, ora non ___ paura dell'acqua.", answer: "avrei", explanation: "\"Avere paura\" → present conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you [were] more punctual, you wouldn't have missed the start. (to a friend)", sentence: "Se ___ più puntuale, non avresti perso l'inizio.", answer: "fossi", explanation: "Trait → imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If they hadn't closed the factory, the town [would be] alive today.", sentence: "Se non avessero chiuso la fabbrica, oggi il paese ___ vivo.", answer: "sarebbe", explanation: "Present result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I [knew] the city better, I wouldn't have gotten lost.", sentence: "Se ___ meglio la città, non mi sarei perso.", answer: "conoscessi", explanation: "Present fact → \"conoscessi\"." },
      { type: "multiple-choice", question: "Which completes \"Se fossi più paziente, ieri non ___\"?", options: ["avrei litigato con mia sorella", "litigherei con mia sorella", "litigassi con mia sorella", "litigo con mia sorella"], correctIndex: 0, explanation: "\"Ieri\" → past conditional." },
      { type: "dictation", audio: "Se avessi fatto colazione, ora non avrei fame.", explanation: "Mixed." },
      { type: "speak", text: "Se non mi fossi trasferito in Italia, non parlerei italiano e non avrei conosciuto i miei amici.", prompt: "Say it in Italian: If I hadn't moved to Italy, I wouldn't speak Italian and I wouldn't have met my friends.", tip: "par-le-REI (now) vs a-VREI co-no-SCIU-to (then).", explanation: "Mixed, then impossible past." },
    ],
  },
  {
    slug: "b2-impossible-past-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: All Types",
    summary: "Mixed practice with real, hypothetical, impossible-past and mixed conditions.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Four patterns",
        body: [
          "Real: indicative. Hypothetical: \"-ssi\" + conditional. Impossible past: pluperfect + past conditional. Mixed: combine them by time. The spoken double imperfetto is for listening, not writing.",
        ],
        examples: [
          { es: "Se vieni, porta il vino.", en: "If you come, bring the wine." },
          { es: "Se venissi, porteresti il vino?", en: "If you came, would you bring the wine?" },
          { es: "Se fossi venuto, avresti portato il vino?", en: "If you'd come, would you have brought the wine?" },
          { es: "Se l'avessi portato, ora avremmo qualcosa da bere.", en: "If you'd brought it, we'd have something to drink now." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you come, bring the wine. (to a friend)", answer: "Se vieni, porta il vino.", explanation: "Real + imperative." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you'd brought it, we'd have something to drink now. (the wine)", answer: "Se l'avessi portato, ora avremmo qualcosa da bere.", altAnswers: ["Se l'avessi portato, adesso avremmo qualcosa da bere."], explanation: "Mixed." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you came, would you bring the wine? (to a friend)", answer: "Se venissi, porteresti il vino?", explanation: "Hypothetical." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you'd come, would you have brought the wine? (to a man)", answer: "Se fossi venuto, avresti portato il vino?", explanation: "Impossible past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you see Luca, say hello from me. (to a friend)", answer: "Se vedi Luca, salutalo da parte mia.", altAnswers: ["Se vedi Luca, salutamelo.", "Se vedi Luca, salutalo."], explanation: "Real + imperative." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I saw Luca, I'd say hello.", answer: "Se vedessi Luca, lo saluterei.", explanation: "Hypothetical." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I'd seen Luca, I'd have said hello.", answer: "Se avessi visto Luca, l'avrei salutato.", altAnswers: ["Se avessi visto Luca, lo avrei salutato."], explanation: "Impossible past." },
      { type: "translate", direction: "en-es", prompt: "Write the standard version of \"Se lo sapevo, non ci andavo\": If I'd known, I wouldn't have gone.", source: "If I'd known, I wouldn't have gone.", answer: "Se l'avessi saputo, non ci sarei andato.", altAnswers: ["Se l'avessi saputo, non ci sarei andata.", "Se lo avessi saputo, non ci sarei andato."], explanation: "Standard written form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the sea is calm, we'll go out in the boat.", answer: "Se il mare è calmo, usciamo in barca.", altAnswers: ["Se il mare è calmo, usciremo in barca.", "Se il mare è calmo, andiamo in barca."], explanation: "Real." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the sea had been calm, we'd have gone out in the boat.", answer: "Se il mare fosse stato calmo, saremmo usciti in barca.", altAnswers: ["Se il mare fosse stato calmo, saremmo andati in barca.", "Se il mare fosse stato calmo, saremmo uscite in barca."], explanation: "Impossible past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the sea [were] calm, we'd go out in the boat.", sentence: "Se il mare ___ calmo, usciremmo in barca.", answer: "fosse", explanation: "Hypothetical." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you'd fixed the faucet, [we wouldn't have] a flooded kitchen now. (to a friend)", sentence: "Se avessi aggiustato il rubinetto, ora ___ la cucina allagata.", answer: "non avremmo", explanation: "Mixed: present result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you [need] help, call me. (to a friend)", sentence: "Se ___ aiuto, chiamami.", answer: "hai bisogno di", altAnswers: ["ti serve"], explanation: "Real." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If I [were] in your shoes, I wouldn't worry. (to a friend)", sentence: "Se ___ nei tuoi panni, non mi preoccuperei.", answer: "fossi", explanation: "\"Essere nei panni di qualcuno\" = to be in someone's shoes." },
      { type: "multiple-choice", question: "\"Se pioveva, non uscivamo\" in a story about childhood vacations means ...", options: ["Whenever it rained, we didn't go out.", "If it had rained, we wouldn't have gone out.", "If it rains, we won't go out.", "It rained and we didn't go out."], correctIndex: 0, explanation: "A real past habit." },
      { type: "dictation", audio: "Se il mare fosse stato calmo, saremmo usciti in barca.", explanation: "Impossible past." },
      { type: "speak", text: "Se vedi Luca, salutalo. Se l'avessi visto io, l'avrei invitato a cena.", prompt: "Say it to a friend: If you see Luca, say hello. If I'd seen him, I'd have invited him to dinner.", tip: "Real first, then impossible past.", explanation: "Two types side by side." },
    ],
  },
];
