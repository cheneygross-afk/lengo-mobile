// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u01-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B2 Unit 1 Extra Practice: The Imperfect Subjunctive. Optional
// lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B2_U01_EXTRA: Lesson[] = [
  {
    slug: "b2-imperfect-subjunctive-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: Forms",
    summary: "Fresh verbs in the imperfect subjunctive, regular and irregular, in every person.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "New verbs, same endings",
        body: [
          "\"-ssi, -ssi, -sse, -ssimo, -ste, -ssero\" on the infinitive minus -re. New verbs for this practice: \"guidare\" (to drive), \"spegnere\" (to switch off), \"riempire\" (to fill), \"accorgersi\" (to notice), \"distrarsi\" (to get distracted: \"distraessi\", from \"distraevo\").",
        ],
        examples: [
          { es: "Volevo che guidassi tu.", en: "I wanted you to drive." },
          { es: "Era meglio che spegnessimo il telefono.", en: "It was better for us to switch off our phones." },
          { es: "Speravo che nessuno se ne accorgesse.", en: "I was hoping nobody would notice." },
          { es: "Temevo che i bambini si distraessero.", en: "I was afraid the children would get distracted." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wanted you to drive. (to a friend)", answer: "Volevo che guidassi tu.", altAnswers: ["Volevo che tu guidassi."], explanation: "\"Guida-\" + \"-ssi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was hoping nobody would notice.", answer: "Speravo che nessuno se ne accorgesse.", explanation: "\"Accorgersene\" → \"se ne accorgesse\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was better for us to switch off our phones.", answer: "Era meglio che spegnessimo il telefono.", altAnswers: ["Era meglio che spegnessimo i telefoni.", "Era meglio spegnere il telefono."], explanation: "\"Spegne-\" + \"-ssimo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was afraid the children would get distracted.", answer: "Temevo che i bambini si distraessero.", altAnswers: ["Avevo paura che i bambini si distraessero."], explanation: "\"Distrarsi\": long stem \"distrae-\" + \"-ssero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They wanted us to fill in the form.", answer: "Volevano che riempissimo il modulo.", altAnswers: ["Volevano che compilassimo il modulo."], explanation: "\"Riempi-\" + \"-ssimo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought you (plural) were coming by car.", answer: "Pensavo che veniste in macchina.", altAnswers: ["Credevo che veniste in macchina.", "Pensavo che voi veniste in macchina."], explanation: "voi: \"veniste\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was strange that she didn't reply.", answer: "Era strano che non rispondesse.", altAnswers: ["Era strano che lei non rispondesse."], explanation: "\"Risponde-\" + \"-sse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wish you'd give me back my book. (to a friend)", answer: "Vorrei che mi restituissi il libro.", altAnswers: ["Vorrei che mi ridessi il libro.", "Vorrei che tu mi restituissi il libro."], explanation: "\"Restituire\" → \"restituissi\", no -isc-." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We didn't think they would stay so long.", answer: "Non pensavamo che restassero così a lungo.", altAnswers: ["Non pensavamo che rimanessero così a lungo.", "Non pensavamo che restassero così tanto."], explanation: "\"Restassero\": later than the thought, still imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like you to put the keys here. (polite)", answer: "Vorrei che mettesse le chiavi qui.", altAnswers: ["Vorrei che Lei mettesse le chiavi qui.", "Vorrei che mettesse qui le chiavi."], explanation: "Lei: \"mettesse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I hoped they [would understand] the joke.", sentence: "Speravo che ___ la battuta.", answer: "capissero", explanation: "\"Capissero\", no -isc-." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was important that you [were] calm. (to a friend)", sentence: "Era importante che ___ calmo.", answer: "stessi", altAnswers: ["tu stessi", "fossi", "tu fossi"], explanation: "\"Stare calmo\" = to keep calm; \"stessi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The waiter wanted us [to order] quickly.", sentence: "Il cameriere voleva che ___ in fretta.", answer: "ordinassimo", explanation: "\"Ordina-\" + \"-ssimo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'd prefer you (plural) [not to say] anything.", sentence: "Preferirei che non ___ niente.", answer: "diceste", altAnswers: ["voi diceste"], explanation: "\"Dire\", voi: \"diceste\"." },
      { type: "listen-choose", audio: "Volevo che mi dessi il tuo numero.", question: "What did the speaker want?", options: ["For you to give them your number.", "To give you their number.", "For you to call them.", "For you to change your number."], correctIndex: 0, explanation: "\"Che mi dessi\": that you give me." },
      { type: "dictation", audio: "Era meglio che spegnessimo il telefono.", explanation: "\"Spegnessimo\": gn, then a double s." },
      { type: "speak", text: "Volevo che guidassi tu, perché temevo di distrarmi.", prompt: "Say it to a friend: I wanted you to drive, because I was afraid of getting distracted.", tip: "gui-DAS-si: the u in \"gui\" is pronounced.", explanation: "Two subjects → \"guidassi\"; same subject → \"di distrarmi\"." },
    ],
  },
  {
    slug: "b2-imperfect-subjunctive-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: Past Triggers",
    summary: "Fresh sentences with past triggers of opinion, wish, feeling and necessity.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Triggers in the past",
        body: [
          "Imperfetto or passato prossimo trigger → imperfect subjunctive for the same time or later. Same subject → \"di\" + infinitive.",
        ],
        examples: [
          { es: "Mi sembrava che fossi un po' giù.", en: "You seemed a bit down to me." },
          { es: "Ci è dispiaciuto che non poteste venire.", en: "We were sorry you (plural) couldn't come." },
          { es: "Non mi aspettavo che il volo costasse così tanto.", en: "I didn't expect the flight to cost so much." },
          { es: "Ero sicuro di aver chiuso la porta.", en: "I was sure I'd closed the door." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were sorry you (plural) couldn't come.", answer: "Ci è dispiaciuto che non poteste venire.", altAnswers: ["Ci dispiaceva che non poteste venire."], explanation: "\"Dispiacere\" in the past → \"poteste\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You seemed a bit down to me. (to a friend)", answer: "Mi sembrava che fossi un po' giù.", altAnswers: ["Mi pareva che fossi un po' giù.", "Mi sembrava che tu fossi un po' giù."], explanation: "\"Mi sembrava che\" + \"fossi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't expect the flight to cost so much.", answer: "Non mi aspettavo che il volo costasse così tanto.", altAnswers: ["Non mi aspettavo che il volo costasse tanto."], explanation: "\"Aspettarsi che\" + \"costasse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone thought the shop was closed.", answer: "Tutti pensavano che il negozio fosse chiuso.", altAnswers: ["Tutti credevano che il negozio fosse chiuso."], explanation: "\"Pensavano che\" + \"fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The landlord wanted us to pay in cash.", answer: "Il padrone di casa voleva che pagassimo in contanti.", altAnswers: ["Il proprietario voleva che pagassimo in contanti."], explanation: "\"Pagassimo\": no h needed before -ss." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was a pity that it was raining.", answer: "Era un peccato che piovesse.", explanation: "\"Era un peccato che\" + \"piovesse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I doubted he would agree.", answer: "Dubitavo che fosse d'accordo.", altAnswers: ["Dubitavo che sarebbe stato d'accordo."], explanation: "\"Dubitare che\" in the past → \"fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She was afraid she'd miss the train.", answer: "Aveva paura di perdere il treno.", altAnswers: ["Temeva di perdere il treno."], explanation: "Same subject: \"di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was possible that they didn't know.", answer: "Era possibile che non lo sapessero.", altAnswers: ["Poteva darsi che non lo sapessero."], explanation: "\"Era possibile che\" + \"sapessero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I asked them to speak more slowly.", answer: "Gli ho chiesto di parlare più lentamente.", altAnswers: ["Ho chiesto loro di parlare più lentamente.", "Ho chiesto che parlassero più lentamente.", "Ho chiesto che parlassero più piano.", "Gli ho chiesto di parlare più piano."], explanation: "\"Chiedere a qualcuno di\" + infinitive is most natural; \"ho chiesto che parlassero\" is also correct." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I didn't know Marco [had] a sister.", sentence: "Non sapevo che Marco ___ una sorella.", answer: "avesse", explanation: "\"Non sapevo che\" + \"avesse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It seemed that the meeting [would never end].", sentence: "Sembrava che la riunione non ___ mai.", answer: "finisse", explanation: "\"Finisse\", no -isc-." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We hoped you (plural) [would have] fun.", sentence: "Speravamo che vi ___.", answer: "divertiste", explanation: "\"Divertirsi\", voi: \"vi divertiste\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It was normal that you [were] nervous. (to a friend)", sentence: "Era normale che ___ nervoso.", answer: "fossi", altAnswers: ["tu fossi"], explanation: "\"Era normale che\" + \"fossi\"." },
      { type: "listen-choose", audio: "Non mi aspettavo che il volo costasse così tanto.", question: "What surprised the speaker?", options: ["The price of the flight.", "The length of the flight.", "That the flight was cancelled.", "That the flight was cheap."], correctIndex: 0, explanation: "\"Costasse così tanto\" = cost so much." },
      { type: "dictation", audio: "Era un peccato che piovesse proprio quel giorno.", explanation: "\"Piovesse\" after \"era un peccato che\"." },
      { type: "speak", text: "Pensavo che il negozio fosse chiuso, ma era aperto.", prompt: "Say it in Italian: I thought the shop was closed, but it was open.", tip: "Contrast \"fosse\" (thought) with \"era\" (fact).", explanation: "Subjunctive for the belief, indicative for the fact." },
    ],
  },
  {
    slug: "b2-imperfect-subjunctive-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Vorrei Che and Magari",
    summary: "Fresh wishes with vorrei che, preferirei che, sarebbe meglio che and magari.",
    duration: "16 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Wishes with a conditional or magari",
        body: [
          "Conditional trigger → imperfect subjunctive, even for now. \"Magari\" + imperfect subjunctive = if only; \"magari\" + indicative = maybe.",
        ],
        examples: [
          { es: "Vorrei che il caffè fosse un po' più forte.", en: "I'd like the coffee to be a bit stronger." },
          { es: "Sarebbe meglio che prenotaste subito.", en: "You'd better book straight away (plural)." },
          { es: "Magari nevicasse a Natale!", en: "If only it would snow at Christmas!" },
          { es: "Magari ci sentiamo in settimana.", en: "Maybe we'll talk during the week." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only it would snow at Christmas!", answer: "Magari nevicasse a Natale!", explanation: "\"Magari\" + \"nevicasse\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe we'll talk during the week.", answer: "Magari ci sentiamo in settimana.", altAnswers: ["Magari ci sentiamo durante la settimana.", "Forse ci sentiamo in settimana."], explanation: "Indicative: \"magari\" = maybe." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like the coffee to be a bit stronger.", answer: "Vorrei che il caffè fosse un po' più forte.", explanation: "\"Vorrei che\" + \"fosse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'd better book straight away. (plural)", answer: "Sarebbe meglio che prenotaste subito.", altAnswers: ["Sarebbe meglio che voi prenotaste subito."], explanation: "\"Prenotaste\": voi, one s." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd rather you didn't tell anyone.", answer: "Preferirei che non lo dicessi a nessuno.", altAnswers: ["Preferirei che tu non lo dicessi a nessuno.", "Preferirei che non dicessi niente a nessuno."], explanation: "\"Preferirei che\" + \"dicessi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only I could sleep a bit more!", answer: "Magari potessi dormire un po' di più!", altAnswers: ["Magari potessi dormire di più!"], explanation: "\"Magari\" + \"potessi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be fair for everyone to pay the same.", answer: "Sarebbe giusto che tutti pagassero lo stesso.", altAnswers: ["Sarebbe giusto che tutti pagassero la stessa cifra."], explanation: "\"Sarebbe giusto che\" + \"pagassero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to change jobs.", answer: "Vorrei cambiare lavoro.", altAnswers: ["Mi piacerebbe cambiare lavoro."], explanation: "Same subject: infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If only the neighbours were quieter!", answer: "Magari i vicini fossero più silenziosi!", altAnswers: ["Magari i vicini facessero meno rumore!"], explanation: "\"Magari\" + \"fossero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd like you to be our guest. (polite)", answer: "Vorremmo che fosse nostro ospite.", altAnswers: ["Vorremmo che Lei fosse nostro ospite.", "Vorremmo che fosse nostra ospite.", "Vorremmo che Lei fosse nostra ospite."], explanation: "\"Lei\" → \"fosse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I wish you [didn't live] so far away. (to a friend)", sentence: "Vorrei che non ___ così lontano.", answer: "abitassi", altAnswers: ["vivessi", "tu abitassi", "tu vivessi"], explanation: "\"Abitassi\" after \"vorrei che\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It would be better if he [rested].", sentence: "Sarebbe meglio che ___.", answer: "si riposasse", altAnswers: ["riposasse"], explanation: "\"Riposarsi\" → \"si riposasse\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If only they [gave] us a discount!", sentence: "Magari ci ___ uno sconto!", answer: "facessero", altAnswers: ["dessero"], explanation: "\"Fare uno sconto\" → \"facessero\"." },
      { type: "multiple-choice", question: "Your friend says: \"Magari passo da te dopo cena.\" What does she mean?", options: ["Maybe she'll drop by after dinner.", "She wishes she could drop by after dinner.", "She dropped by after dinner.", "She wants you to drop by after dinner."], correctIndex: 0, explanation: "Indicative \"passo\" → maybe." },
      { type: "listen-choose", audio: "Magari nevicasse a Natale!", question: "What does it mean?", options: ["If only it would snow at Christmas!", "Maybe it'll snow at Christmas.", "It snowed at Christmas.", "It always snows at Christmas."], correctIndex: 0, explanation: "Subjunctive → a wish." },
      { type: "dictation", audio: "Preferirei che non lo dicessi a nessuno.", explanation: "\"Dicessi\" after \"preferirei che\"." },
      { type: "speak", text: "Magari potessi dormire un po' di più! Vorrei che la sveglia non suonasse mai.", prompt: "Say it in Italian: If only I could sleep a bit more! I wish the alarm never went off.", tip: "\"Sveglia\": the gli sound, like million said quickly.", explanation: "\"Magari\" + \"potessi\"; \"vorrei che\" + \"suonasse\"." },
    ],
  },
];
