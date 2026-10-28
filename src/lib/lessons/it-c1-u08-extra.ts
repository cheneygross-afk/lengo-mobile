// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u08-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 8 Extra Practice: Modal Nuance. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U08_EXTRA: Lesson[] = [
  {
    slug: "c1-modals-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Dovere and Potere",
    summary: "Fresh sentences for deductions, expectations, missed chances and the potere / riuscire / sapere choice.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At the airport",
        body: [
          "The sentences in this practice follow a family stuck at an airport after a delayed flight. Decide each time: deduction (\"deve\" + infinitive), expectation (\"doveva\", \"dovrebbe\"), missed chance (\"avrebbe potuto\", \"poteva\"), or ability (\"sapere\", \"potere\", \"riuscire\").",
        ],
        examples: [
          { es: "Il volo doveva partire alle sette.", en: "The flight was supposed to leave at seven." },
          { es: "Deve esserci stato un guasto.", en: "There must have been a technical fault." },
          { es: "Avremmo potuto prendere il treno.", en: "We could have taken the train." },
          { es: "Non riesco a trovare il gate.", en: "I can't find the gate." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate as a deduction.", source: "There must have been a technical fault.", answer: "Deve esserci stato un guasto.", altAnswers: ["Ci deve essere stato un guasto.", "Dev'esserci stato un guasto."], explanation: "\"Esserci\" in the past infinitive: \"esserci stato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate.", source: "We could have taken the train.", answer: "Avremmo potuto prendere il treno.", altAnswers: ["Potevamo prendere il treno."], explanation: "Missed chance." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "The flight was supposed to leave at seven.", answer: "Il volo doveva partire alle sette.", explanation: "\"Doveva\" = the plan." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "The next flight should leave in two hours.", answer: "Il prossimo volo dovrebbe partire tra due ore.", altAnswers: ["Il prossimo volo dovrebbe partire fra due ore."], explanation: "Expectation: conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate as a deduction.", source: "The pilots must be tired.", answer: "I piloti devono essere stanchi.", altAnswers: ["I piloti saranno stanchi."], explanation: "Present deduction." },
      { type: "translate", direction: "en-es", prompt: "Translate as a deduction.", source: "Our suitcase must have ended up in Rome.", answer: "La nostra valigia deve essere finita a Roma.", altAnswers: ["La nostra valigia dev'essere finita a Roma."], explanation: "\"Finire\" takes \"essere\" here; agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate. Effort, not permission.", source: "I can't find the gate.", answer: "Non riesco a trovare il gate.", altAnswers: ["Non riesco a trovare l'uscita."], explanation: "\"Riuscire a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "My son can't read yet.", answer: "Mio figlio non sa ancora leggere.", altAnswers: ["Mio figlio non sa leggere ancora."], explanation: "Skill: \"sapere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "We had to sleep at the airport.", answer: "Abbiamo dovuto dormire in aeroporto.", altAnswers: ["Abbiamo dovuto dormire all'aeroporto."], explanation: "Obligation carried out." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "They might have cancelled the flight.", answer: "Potrebbero aver cancellato il volo.", altAnswers: ["Potrebbero avere cancellato il volo.", "Può darsi che abbiano cancellato il volo.", "Potrebbero aver annullato il volo."], explanation: "Possibility about the past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The airline [should have warned] us.", sentence: "La compagnia ___ avvisarci.", answer: "avrebbe dovuto", explanation: "Should have." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We [could have left] yesterday.", sentence: "___ partire ieri.", answer: "Saremmo potuti", altAnswers: ["Avremmo potuto", "Saremmo potute"], explanation: "\"Partire\" takes \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It could have been worse]: at least we have a hotel.", sentence: "___: almeno abbiamo un albergo.", answer: "Poteva andare peggio", explanation: "Bright-side formula." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [didn't manage to] call my mother.", sentence: "___ chiamare mia madre.", answer: "Non sono riuscito a", altAnswers: ["Non sono riuscita a"], explanation: "\"Riuscire\" + \"essere\"." },
      { type: "multiple-choice", question: "The board says 'cancelled'. Which reaction is a deduction about the past?", options: ["Deve esserci stato un problema.", "Abbiamo dovuto aspettare.", "Dovremmo chiedere un rimborso.", "Il volo doveva partire."], correctIndex: 0, explanation: "\"Deve\" + past infinitive." },
      { type: "listen-choose", audio: "Il volo doveva partire alle sette, ma deve esserci stato un guasto.", question: "What does the speaker think happened?", options: ["There must have been a fault.", "The flight left at seven.", "The pilots were on strike.", "The weather was bad."], correctIndex: 0, explanation: "Plan + deduction." },
      { type: "dictation", audio: "Avremmo potuto prendere il treno delle sei.", explanation: "Missed chance." },
      { type: "speak", text: "Il volo doveva partire alle sette. Deve esserci stato un guasto, ma la compagnia avrebbe dovuto avvisarci.", prompt: "Complain at the desk: The flight was supposed to leave at seven. There must have been a fault, but the airline should have warned us.", tip: "Firm but polite tone.", explanation: "Three modal meanings." },
    ],
  },
  {
    slug: "c1-modals-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Perception Verbs",
    summary: "Fresh sentences with vedere, sentire, guardare and ascoltare + infinitive, pronouns and agreement.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A witness statement",
        body: [
          "The sentences come from an invented witness statement after a car accident in a small square. Pattern: perception verb + bare infinitive; unstressed pronouns before the perception verb; agreement of the participle with a preceding \"lo\", \"la\", \"li\", \"le\".",
        ],
        examples: [
          { es: "Ho visto la macchina arrivare a forte velocità.", en: "I saw the car arrive at high speed." },
          { es: "L'ho sentita frenare.", en: "I heard it brake." },
          { es: "Ho visto due ragazzi attraversare la strada.", en: "I saw two young men cross the road." },
          { es: "Li ho visti cadere.", en: "I saw them fall." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate.", source: "I saw the car arrive at high speed.", answer: "Ho visto la macchina arrivare a forte velocità.", altAnswers: ["Ho visto arrivare la macchina a forte velocità.", "Ho visto l'auto arrivare a forte velocità."], explanation: "Bare infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate. (the car)", source: "I heard it brake.", answer: "L'ho sentita frenare.", explanation: "\"La macchina\" → \"la\" → \"sentita\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "I saw two young men cross the road.", answer: "Ho visto due ragazzi attraversare la strada.", explanation: "Person before an infinitive with an object." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "I saw them fall.", answer: "Li ho visti cadere.", explanation: "Agreement with \"li\"." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "I heard someone shout.", answer: "Ho sentito qualcuno gridare.", altAnswers: ["Ho sentito gridare qualcuno.", "Ho sentito qualcuno urlare."], explanation: "Either word order." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "I watched the ambulance arrive.", answer: "Ho guardato arrivare l'ambulanza.", altAnswers: ["Ho guardato l'ambulanza arrivare.", "Ho visto arrivare l'ambulanza."], explanation: "\"Guardare\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "I heard the driver apologise.", answer: "Ho sentito l'autista scusarsi.", altAnswers: ["Ho sentito il conducente scusarsi.", "Ho sentito l'automobilista scusarsi."], explanation: "Reflexive infinitive keeps its pronoun." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "Did you see her get out of the car?", answer: "L'hai vista scendere dalla macchina?", altAnswers: ["L'hai vista scendere dall'auto?", "L'ha vista scendere dalla macchina?"], explanation: "\"Scendere da\" = to get out of." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "I've heard it said many times.", answer: "L'ho sentito dire molte volte.", altAnswers: ["L'ho sentito dire tante volte.", "L'ho sentito dire spesso."], explanation: "Set phrase \"sentir dire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate.", source: "I can hear the children laughing.", answer: "Sento ridere i bambini.", altAnswers: ["Sento i bambini ridere."], explanation: "Present: no agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "I [saw] them leave. (the women)", sentence: "Le ho ___ andare via.", answer: "viste", explanation: "Agreement with \"le\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold word.", en: "I heard the dog [bark].", sentence: "Ho sentito il cane ___.", answer: "abbaiare", explanation: "Bare infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've heard [him say it].", sentence: "___ sentito dire.", answer: "Gliel'ho", explanation: "\"Glielo\" + \"ho\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We heard them] arrive at midnight.", sentence: "___ arrivare a mezzanotte.", answer: "Li abbiamo sentiti", altAnswers: ["Le abbiamo sentite"], explanation: "Pronoun + agreement." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["L'ho visto attraversare.", "L'ho visto ad attraversare.", "Ho visto lui attraversando.", "Lo ho visto di attraversare."], correctIndex: 0, explanation: "Pronoun first, bare infinitive." },
      { type: "listen-choose", audio: "Ho visto la macchina arrivare a forte velocità e poi l'ho sentita frenare.", question: "What did the witness notice?", options: ["The car came fast and then braked.", "The car was parked.", "The car came slowly.", "The car didn't brake."], correctIndex: 0, explanation: "Two perception phrases." },
      { type: "dictation", audio: "Li ho visti attraversare sulle strisce.", explanation: "\"Sulle strisce\" = on the zebra crossing." },
      { type: "speak", text: "Ho visto la macchina arrivare veloce, l'ho sentita frenare e poi ho visto due ragazzi cadere.", prompt: "Give your witness statement: I saw the car arrive fast, I heard it brake and then I saw two young men fall.", tip: "Three perception phrases; keep the infinitives clear.", explanation: "A witness account." },
    ],
  },
];
