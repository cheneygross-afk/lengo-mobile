// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u03-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 3 Extra Practice: Sequence of Tenses. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U03_EXTRA: Lesson[] = [
  {
    slug: "b2-sequence-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Present Main Verbs",
    summary: "Fresh sentences after present-tense triggers: present subjunctive, past subjunctive or future.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Now, before, later",
        body: [
          "Present trigger: same time \"sia\", earlier \"sia stato\" (or \"fosse\" for a past state), later future or present subjunctive.",
        ],
        examples: [
          { es: "Non credo che Giulia sia in ufficio.", en: "I don't think Giulia's at the office." },
          { es: "Non credo che Giulia sia andata in ufficio.", en: "I don't think Giulia went to the office." },
          { es: "Non credo che Giulia andrà in ufficio.", en: "I don't think Giulia will go to the office." },
          { es: "Pare che da giovane suonasse la chitarra.", en: "Apparently he played the guitar when he was young." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think Giulia went to the office.", answer: "Non credo che Giulia sia andata in ufficio.", altAnswers: ["Non penso che Giulia sia andata in ufficio."], explanation: "Present + earlier." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Apparently he played the guitar when he was young.", answer: "Pare che da giovane suonasse la chitarra.", altAnswers: ["Sembra che da giovane suonasse la chitarra."], explanation: "A past habit → \"suonasse\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think Giulia's at the office.", answer: "Non credo che Giulia sia in ufficio.", altAnswers: ["Non penso che Giulia sia in ufficio."], explanation: "Present + same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think Giulia will go to the office.", answer: "Non credo che Giulia andrà in ufficio.", altAnswers: ["Non credo che Giulia vada in ufficio.", "Non penso che Giulia andrà in ufficio."], explanation: "Present + later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm glad you've found a job. (to a friend)", answer: "Sono contento che tu abbia trovato lavoro.", altAnswers: ["Sono contenta che tu abbia trovato lavoro.", "Sono contento che tu abbia trovato un lavoro.", "Sono contenta che tu abbia trovato un lavoro."], explanation: "Present + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's possible that the museum is closed today.", answer: "È possibile che oggi il museo sia chiuso.", altAnswers: ["È possibile che il museo oggi sia chiuso.", "Può darsi che oggi il museo sia chiuso."], explanation: "Present + same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the doctor will see me tomorrow.", answer: "Spero che il medico mi riceva domani.", altAnswers: ["Spero che domani il medico mi riceva.", "Spero che il medico mi visiterà domani.", "Spero che il medico mi visiti domani."], explanation: "Present + later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They say the hotel used to be a convent.", answer: "Si dice che l'albergo fosse un convento.", altAnswers: ["Dicono che l'albergo fosse un convento.", "Si dice che l'hotel fosse un convento."], explanation: "A past state → \"fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm afraid I've lost the receipt.", answer: "Temo di aver perso lo scontrino.", altAnswers: ["Ho paura di aver perso lo scontrino.", "Temo di avere perso lo scontrino."], explanation: "Same subject → past infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's strange that nobody has noticed.", answer: "È strano che nessuno se ne sia accorto.", explanation: "Present + earlier." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt they [have read] the contract.", sentence: "Dubito che ___ il contratto.", answer: "abbiano letto", explanation: "Present + earlier." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seems the strike [will last] two days.", sentence: "Sembra che lo sciopero ___ due giorni.", answer: "durerà", altAnswers: ["duri"], explanation: "Present + later." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I think you [are] right. (to a friend)", sentence: "Credo che ___ ragione.", answer: "tu abbia", altAnswers: ["abbia"], explanation: "\"Abbia\" alone is correct, but it could be I, you or he, so \"tu\" is usually added to make the person clear." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Make sure the children [have eaten]. (to a friend)", sentence: "Assicurati che i bambini ___.", answer: "abbiano mangiato", explanation: "Imperative trigger + earlier." },
      { type: "listen-choose", audio: "È strano che nessuno se ne sia accorto.", question: "What's strange?", options: ["That nobody noticed.", "That nobody will notice.", "That everyone noticed.", "That nobody is noticing now."], correctIndex: 0, explanation: "\"Se ne sia accorto\": earlier." },
      { type: "dictation", audio: "Si dice che l'albergo fosse un convento.", explanation: "\"Fosse\" for a past state." },
      { type: "speak", text: "Non credo che Giulia sia andata in ufficio, ma penso che ci andrà domani.", prompt: "Say it in Italian: I don't think Giulia went to the office, but I think she'll go tomorrow.", tip: "\"Ci andrà\": the ci means there.", explanation: "Earlier → past subjunctive; later → future." },
    ],
  },
  {
    slug: "b2-sequence-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Past Main Verbs",
    summary: "Fresh sentences after past triggers: imperfect, pluperfect or past conditional.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Same time, before, after",
        body: [
          "Past trigger: same time \"fosse\", earlier \"fosse stato\", later \"sarebbe stato\" (or the imperfect subjunctive after wishes).",
        ],
        examples: [
          { es: "Credevo che Paolo fosse in vacanza.", en: "I thought Paolo was on vacation." },
          { es: "Credevo che Paolo fosse andato in vacanza.", en: "I thought Paolo had gone on vacation." },
          { es: "Credevo che Paolo sarebbe andato in vacanza.", en: "I thought Paolo would go on vacation." },
          { es: "Volevamo che restassero fino a domenica.", en: "We wanted them to stay until Sunday." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought Paolo had gone on vacation.", answer: "Credevo che Paolo fosse andato in vacanza.", altAnswers: ["Pensavo che Paolo fosse andato in vacanza."], explanation: "Past + earlier." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought Paolo would go on vacation.", answer: "Credevo che Paolo sarebbe andato in vacanza.", altAnswers: ["Pensavo che Paolo sarebbe andato in vacanza."], explanation: "Past + later." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought Paolo was on vacation.", answer: "Credevo che Paolo fosse in vacanza.", altAnswers: ["Pensavo che Paolo fosse in vacanza."], explanation: "Past + same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We wanted them to stay until Sunday.", answer: "Volevamo che restassero fino a domenica.", altAnswers: ["Volevamo che rimanessero fino a domenica."], explanation: "Wish → imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She promised she would call.", answer: "Ha promesso che avrebbe chiamato.", altAnswers: ["Ha promesso che avrebbe telefonato.", "Ha promesso di chiamare."], explanation: "Future in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seemed the shop had closed down.", answer: "Sembrava che il negozio avesse chiuso.", altAnswers: ["Sembrava che il negozio avesse chiuso i battenti."], explanation: "Past + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was worried you were ill. (to a friend)", answer: "Ero preoccupato che fossi malato.", altAnswers: ["Ero preoccupata che fossi malata.", "Ero preoccupato che fossi malata.", "Ero preoccupata che fossi malato.", "Temevo che fossi malato.", "Temevo che fossi malata."], explanation: "Past + same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't know the flight would be so long.", answer: "Non sapevamo che il volo sarebbe stato così lungo.", explanation: "Past + later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone hoped the strike had ended.", answer: "Tutti speravano che lo sciopero fosse finito.", explanation: "Past + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was unlikely that he would accept.", answer: "Era improbabile che accettasse.", altAnswers: ["Era poco probabile che accettasse.", "Era improbabile che avrebbe accettato."], explanation: "Impersonal past + later → \"accettasse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I thought you [had moved]. (plural)", sentence: "Pensavo che vi ___.", answer: "foste trasferiti", altAnswers: ["foste trasferite"], explanation: "Past + earlier, reflexive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He said the package [would arrive] on Monday.", sentence: "Ha detto che il pacco ___ lunedì.", answer: "sarebbe arrivato", explanation: "Future in the past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was necessary for us [to leave] at dawn.", sentence: "Era necessario che ___ all'alba.", answer: "partissimo", explanation: "Past + later → \"partissimo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I was sorry they [hadn't won].", sentence: "Mi dispiaceva che non ___.", answer: "avessero vinto", explanation: "Past + earlier." },
      { type: "listen-choose", audio: "Non sapevamo che il volo sarebbe stato così lungo.", question: "What didn't they know?", options: ["How long the flight would be.", "That the flight had been long.", "That the flight was canceled.", "That the flight was short."], correctIndex: 0, explanation: "\"Sarebbe stato\": later." },
      { type: "dictation", audio: "Ha promesso che avrebbe chiamato appena arrivata.", explanation: "Future in the past; \"appena arrivata\" = as soon as she arrived." },
      { type: "speak", text: "Credevo che Paolo fosse in vacanza, invece era a casa.", prompt: "Say it in Italian: I thought Paolo was on vacation, but he was at home.", tip: "\"Invece\" marks the surprise: in-VE-ce.", explanation: "Subjunctive for the belief, indicative for the fact." },
    ],
  },
  {
    slug: "b2-sequence-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: The Grid",
    summary: "Mixed sequences with present, past and conditional main verbs.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Every column, every row",
        body: [
          "Main verb first, then the time of the event. Conditional triggers take only \"-ssi\" forms or the pluperfect.",
        ],
        examples: [
          { es: "Sono felice che siate venuti.", en: "I'm happy you came." },
          { es: "Ero felice che foste venuti.", en: "I was happy you had come." },
          { es: "Sarei felice che veniste.", en: "I'd be happy if you came." },
          { es: "Sarei stato felice che foste venuti.", en: "I'd have been happy if you had come." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm happy you came. (plural)", answer: "Sono felice che siate venuti.", altAnswers: ["Sono contento che siate venuti.", "Sono contenta che siate venuti.", "Sono felice che siate venute."], explanation: "Present + earlier." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd be happy if you came. (plural)", answer: "Sarei felice che veniste.", altAnswers: ["Sarei felice se veniste.", "Sarei contento se veniste.", "Sarei contenta se veniste."], explanation: "Conditional → \"veniste\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was happy you had come. (plural)", answer: "Ero felice che foste venuti.", altAnswers: ["Ero contento che foste venuti.", "Ero contenta che foste venuti.", "Ero felice che foste venute."], explanation: "Past + earlier." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the meeting has been postponed.", answer: "Credo che la riunione sia stata rinviata.", altAnswers: ["Penso che la riunione sia stata rinviata.", "Credo che la riunione sia stata rimandata."], explanation: "Present + earlier, passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought the meeting had been postponed.", answer: "Credevo che la riunione fosse stata rinviata.", altAnswers: ["Pensavo che la riunione fosse stata rinviata.", "Credevo che la riunione fosse stata rimandata."], explanation: "Past + earlier, passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like the meeting to be postponed.", answer: "Vorrei che la riunione fosse rinviata.", altAnswers: ["Vorrei che la riunione venisse rinviata.", "Vorrei che la riunione fosse rimandata."], explanation: "Conditional → \"fosse rinviata\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We think prices will rise.", answer: "Pensiamo che i prezzi aumenteranno.", altAnswers: ["Crediamo che i prezzi aumenteranno.", "Pensiamo che i prezzi aumentino."], explanation: "Present + later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We thought prices would rise.", answer: "Pensavamo che i prezzi sarebbero aumentati.", altAnswers: ["Credevamo che i prezzi sarebbero aumentati."], explanation: "Past + later." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be a pity if you missed the concert. (to a friend)", answer: "Sarebbe un peccato che ti perdessi il concerto.", altAnswers: ["Sarebbe un peccato se ti perdessi il concerto.", "Sarebbe un peccato se perdessi il concerto."], explanation: "Conditional → \"perdessi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a pity you missed the concert. (to a friend)", answer: "È un peccato che ti sia perso il concerto.", altAnswers: ["È un peccato che ti sia persa il concerto.", "Peccato che ti sia perso il concerto.", "Peccato che ti sia persa il concerto."], explanation: "Present + earlier." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was a pity you [had missed] the concert. (to a male friend)", sentence: "Era un peccato che ti ___ il concerto.", answer: "fossi perso", explanation: "Past + earlier." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd prefer you [not to smoke] here. (polite)", sentence: "Preferirei che qui non ___.", answer: "fumasse", altAnswers: ["Lei fumasse"], explanation: "Conditional → \"fumasse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sure she [will pass] the exam.", sentence: "Sono sicuro che ___ l'esame.", answer: "passerà", altAnswers: ["supererà"], explanation: "Certainty → indicative future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I was sure she [would pass] the exam.", sentence: "Ero sicuro che ___ l'esame.", answer: "avrebbe passato", altAnswers: ["avrebbe superato"], explanation: "Certainty in the past → past conditional." },
      { type: "multiple-choice", question: "Which fits? \"Avrei voluto che tu ___ i miei nonni.\"", options: ["avessi conosciuto", "abbia conosciuto", "conosca", "conoscerai"], correctIndex: 0, explanation: "Past conditional → pluperfect (or imperfect)." },
      { type: "dictation", audio: "Pensavamo che i prezzi sarebbero aumentati.", explanation: "Future in the past." },
      { type: "speak", text: "Sono felice che siate venuti. Avrei voluto che foste venuti prima!", prompt: "Say it in Italian: I'm happy you came. I'd have liked you to come earlier!", tip: "SIA-te, FO-ste: present vs past.", explanation: "Present column, then past conditional + pluperfect." },
    ],
  },
];
