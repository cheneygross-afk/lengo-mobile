// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u07-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 7 Extra Practice: Nuance with the Subjunctive. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U07_EXTRA: Lesson[] = [
  {
    slug: "c1-mood-nuance-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Mood Pairs",
    summary: "Fresh pairs of sentences where indicative and subjunctive say different things.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Same verb, two meanings",
        body: [
          "Each item tells you what the speaker means; choose the mood that says it. Pairs: identified versus sought-after (\"un hotel che ha\" / \"che abbia\"), realising versus sympathising (\"capisco che sei\" / \"che tu sia\"), statement versus order (\"dice che viene\" / \"che venga\"), fact versus topic (\"il fatto è che\" / \"il fatto che\").",
        ],
        examples: [
          { es: "Prenoto l'hotel che ha la piscina.", en: "I'm booking the hotel that has a pool." },
          { es: "Cerco un hotel che abbia la piscina.", en: "I'm looking for a hotel with a pool." },
          { es: "Il capo dice che venga subito.", en: "The boss says he should come at once." },
          { es: "Il capo dice che viene subito.", en: "The boss says he's coming at once." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate. You know which hotel.", source: "I'm booking the hotel that has a pool.", answer: "Prenoto l'hotel che ha la piscina.", altAnswers: ["Prenoto l'albergo che ha la piscina."], explanation: "Identified hotel: indicative." },
          { type: "translate", direction: "en-es", prompt: "Translate. The boss gives an order.", source: "The boss says he should come at once.", answer: "Il capo dice che venga subito.", altAnswers: ["Il capo dice di venire subito."], explanation: "\"Dire che\" + subjunctive = an order." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate. Any hotel of that kind.", source: "I'm looking for a hotel with a pool.", answer: "Cerco un hotel che abbia la piscina.", altAnswers: ["Cerco un albergo che abbia la piscina.", "Cerco un hotel che abbia una piscina."], explanation: "Sought-after: subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate. A statement.", source: "The boss says he's coming at once.", answer: "Il capo dice che viene subito.", altAnswers: ["Il capo dice che arriva subito."], explanation: "Statement: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate. You notice it (tu).", source: "I can see you're nervous.", answer: "Capisco che sei nervoso.", altAnswers: ["Vedo che sei nervoso.", "Capisco che sei nervosa."], explanation: "Observation: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate. You sympathise (tu).", source: "I understand that you're nervous before the exam.", answer: "Capisco che tu sia nervoso prima dell'esame.", altAnswers: ["Capisco che tu sia nervosa prima dell'esame."], explanation: "Accepting a feeling: subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate. You know this person.", source: "I know a plumber who works on Sundays.", answer: "Conosco un idraulico che lavora la domenica.", explanation: "Identified person: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate. You don't know if one exists.", source: "Is there a plumber who works on Sundays?", answer: "C'è un idraulico che lavori la domenica?", altAnswers: ["Esiste un idraulico che lavori la domenica?"], explanation: "Uncertain existence: subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate. A conceded fact (tu).", source: "I admit you were right.", answer: "Ammetto che avevi ragione.", altAnswers: ["Ammetto che hai avuto ragione."], explanation: "Conceding a fact: indicative." },
      { type: "translate", direction: "en-es", prompt: "Translate. A hypothesis (tu).", source: "Let's suppose you were right.", answer: "Ammettiamo che tu avessi ragione.", altAnswers: ["Supponiamo che tu avessi ragione.", "Ammettiamo che tu abbia avuto ragione."], explanation: "Hypothesis: subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "The thing is, the shop [closes] at seven.", sentence: "Il fatto è che il negozio ___ alle sette.", answer: "chiude", explanation: "\"Il fatto è che\" + indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "The fact that the shop [closes] at seven is a problem.", sentence: "Il fatto che il negozio ___ alle sette è un problema.", answer: "chiuda", explanation: "\"Il fatto che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "I didn't know you [were] married.", sentence: "Non sapevo che ___ sposato.", answer: "eri", altAnswers: ["fossi"], explanation: "A fact you've just learned: indicative is natural; the subjunctive is also possible." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Tell them [to bring] the keys.", sentence: "Di' loro che ___ le chiavi.", answer: "portino", explanation: "Order: subjunctive." },
      {
        type: "matching",
        instructions: "Match each sentence to its meaning.",
        pairs: [
          { left: "Cerco un hotel che abbia la piscina.", right: "any hotel with a pool" },
          { left: "Prenoto l'hotel che ha la piscina.", right: "a specific hotel" },
          { left: "Ammetto che hai ragione.", right: "I concede it" },
          { left: "Ammettiamo che tu abbia ragione.", right: "let's suppose it" },
        ],
        explanation: "The mood carries the meaning.",
      },
      { type: "listen-choose", audio: "C'è un idraulico che lavori la domenica?", question: "What does the speaker want to know?", options: ["Whether such a plumber exists", "Where a specific plumber lives", "What a plumber costs", "When the plumber is coming"], correctIndex: 0, explanation: "Subjunctive: uncertain existence." },
      { type: "dictation", audio: "Capisco che tu sia nervoso prima dell'esame.", explanation: "Sympathising subjunctive." },
      { type: "speak", text: "Cerco un hotel che abbia la piscina, ma alla fine prenoto quello che ha il parcheggio.", prompt: "Explain your booking: I'm looking for a hotel with a pool, but in the end I'll book the one that has parking.", tip: "Contrast \"abbia\" and \"ha\".", explanation: "One sentence, both moods." },
    ],
  },
  {
    slug: "c1-mood-nuance-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Independent Subjunctive",
    summary: "Fresh sentences with the subjunctive standing alone: suspicions, wishes, permission, orders and set phrases.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "No main clause needed",
        body: [
          "Each item is a short reaction. Tools: \"Che\" + subjunctive for suspicion or an order for a third person, \"magari\" or nothing + imperfect or pluperfect subjunctive for wishes and regrets, Lei forms + \"pure\" for permission, and set phrases like \"che io sappia\", \"fosse per me\", \"Dio non voglia\".",
        ],
        examples: [
          { es: "Che abbia perso il treno?", en: "Could she have missed the train?" },
          { es: "Ci avessi pensato prima!", en: "If only I'd thought of it before!" },
          { es: "Si sieda pure.", en: "Please, do sit down." },
          { es: "Che io sappia, la riunione è confermata.", en: "As far as I know, the meeting is confirmed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a suspicion.", source: "Could she have missed the train?", answer: "Che abbia perso il treno?", explanation: "Stand-alone past subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Translate as a regret.", source: "If only I'd thought of it before!", answer: "Ci avessi pensato prima!", altAnswers: ["Magari ci avessi pensato prima!", "Se ci avessi pensato prima!"], explanation: "Pluperfect subjunctive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate (Lei).", source: "Please, do sit down.", answer: "Si sieda pure.", altAnswers: ["Prego, si sieda pure.", "Si accomodi pure."], explanation: "Lei subjunctive + \"pure\"." },
      { type: "translate", direction: "en-es", prompt: "Translate with a set phrase.", source: "As far as I know, the meeting is confirmed.", answer: "Che io sappia, la riunione è confermata.", altAnswers: ["Per quanto ne so, la riunione è confermata."], explanation: "\"Che io sappia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate as a suspicion.", source: "Could the shop be closed?", answer: "Che il negozio sia chiuso?", altAnswers: ["Che sia chiuso il negozio?"], explanation: "Present subjunctive: a doubt about now." },
      { type: "translate", direction: "en-es", prompt: "Translate as a wish.", source: "If only it were summer!", answer: "Magari fosse estate!", altAnswers: ["Fosse estate!", "Se fosse estate!"], explanation: "Imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate as an order about a third person.", source: "Let him pay, then!", answer: "Che paghi lui, allora!", altAnswers: ["Paghi lui, allora!"], explanation: "\"Che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate as a wish.", source: "Long live the bride and groom!", answer: "Viva gli sposi!", altAnswers: ["Evviva gli sposi!", "Vivano gli sposi!"], explanation: "\"Viva\" is often invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate as a regret.", source: "If only you'd told me!", answer: "Me l'avessi detto!", altAnswers: ["Magari me l'avessi detto!", "Se me l'avessi detto!"], explanation: "Pluperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate with a set phrase.", source: "If it were up to me, we'd stay at home.", answer: "Fosse per me, resteremmo a casa.", altAnswers: ["Se fosse per me, resteremmo a casa.", "Fosse per me, staremmo a casa."], explanation: "\"Fosse per me\" + conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "God [forbid]!", sentence: "Dio non ___!", answer: "voglia", explanation: "Frozen subjunctive of \"volere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "[So] be it.", sentence: "___ sia.", answer: "Così", explanation: "\"Così sia\" = so be it, amen." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Could they [be] lost?", sentence: "Che si ___ persi?", answer: "siano", explanation: "Past subjunctive of a reflexive verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "Go [ahead], signora.", sentence: "Faccia ___, signora.", answer: "pure", explanation: "\"Pure\" gives permission." },
      { type: "multi-select", question: "Which sentences express a wish? Select all that apply.", options: ["Magari fosse vero!", "Avessi vent'anni!", "Vinca il migliore!", "Che sia vero?", "Che io sappia."], correctIndexes: [0, 1, 2], explanation: "\"Che sia vero?\" is a doubt; \"che io sappia\" is a set phrase." },
      { type: "listen-choose", audio: "Non è ancora arrivata. Che abbia perso il treno?", question: "What does the speaker suspect?", options: ["She may have missed the train.", "She is on the train.", "The train was cancelled.", "She took the car."], correctIndex: 0, explanation: "\"Che abbia perso\": suspicion." },
      { type: "dictation", audio: "Magari fosse estate! Fosse per me, partirei domani.", explanation: "Wish + set phrase." },
      { type: "speak", text: "Che io sappia, la riunione è confermata. Si sieda pure, arriveranno tra poco.", prompt: "Reassure the visitor (Lei): As far as I know, the meeting is confirmed. Please sit down, they'll be here shortly.", tip: "\"Sieda\": stress on the first syllable, \"siè-da\".", explanation: "Set phrase + permission." },
    ],
  },
];
