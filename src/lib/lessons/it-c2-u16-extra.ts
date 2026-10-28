// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u16-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 16 Extra Practice: Translation Lab, Part 2.
// All source passages are original.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U16_EXTRA: Lesson[] = [
  {
    slug: "c2-translation-2-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Literary",
    summary: "Fresh literary passages to translate into Italian: narrative tenses, habits, dialogue and voice.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh passage",
        body: [
          "Translate this original passage: ‘The old man kept bees behind the church. Every evening he would walk among the hives without gloves, talking to them as if they were his children. The priest disapproved; the bees did not. When he fell ill, the whole village noticed that the honey that year tasted different, though nobody could say how.’",
          "Remember the unit's decisions: \"passato remoto\" for events, imperfect for habits (English ‘would’), \"come se\" + imperfect subjunctive, and short sentences kept short. ‘The bees did not’ is a joke built on an ellipsis; Italian keeps it with \"le api no\".",
        ],
        examples: [
          { es: "Il vecchio teneva le api dietro la chiesa.", en: "The old man kept bees behind the church." },
          { es: "Ogni sera passeggiava tra le arnie senza guanti, parlando con loro come se fossero figli suoi.", en: "Every evening he would walk among the hives without gloves, talking to them as if they were his children." },
          { es: "Il parroco disapprovava; le api no.", en: "The priest disapproved; the bees did not." },
          { es: "Quell'anno il miele aveva un sapore diverso, anche se nessuno sapeva dire in che cosa.", en: "That year the honey tasted different, though nobody could say how." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The priest disapproved; the bees did not.", answer: "Il parroco disapprovava; le api no.", altAnswers: ["Il prete disapprovava; le api no.", "Il parroco non approvava; le api sì."], explanation: "Ellipsis with \"no\" keeps the joke." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The old man kept bees behind the church.", answer: "Il vecchio teneva le api dietro la chiesa.", altAnswers: ["Il vecchio allevava api dietro la chiesa.", "Il vecchio teneva delle api dietro la chiesa."], explanation: "\"Tenere le api\" or \"allevare api\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When he fell ill, the whole village noticed.", answer: "Quando si ammalò, tutto il paese se ne accorse.", altAnswers: ["Quando si ammalò, se ne accorse tutto il paese.", "Quando si è ammalato, tutto il paese se n'è accorto.", "Quando si ammalò, l'intero paese se ne accorse."], explanation: "\"Accorgersene\": the \"ne\" refers back." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He talked to them as if they were his children.", answer: "Parlava con loro come se fossero figli suoi.", altAnswers: ["Gli parlava come se fossero figli suoi.", "Parlava con loro come se fossero i suoi figli.", "Gli parlava come se fossero i suoi figli."], explanation: "\"Come se\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "She put down her cup and looked out of the window.", answer: "Posò la tazza e guardò fuori dalla finestra.", altAnswers: ["Appoggiò la tazza e guardò fuori dalla finestra.", "Posò la tazza e guardò dalla finestra."], explanation: "No possessive with \"tazza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "On Sundays they would eat at her mother's.", answer: "La domenica mangiavano da sua madre.", altAnswers: ["La domenica pranzavano da sua madre.", "Di domenica mangiavano da sua madre.", "La domenica mangiavano dalla madre di lei."], explanation: "Habit: imperfect; \"la domenica\" = on Sundays." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "'It's late,' he said, without looking up.", answer: "«È tardi», disse senza alzare lo sguardo.", altAnswers: ["«È tardi» disse senza alzare lo sguardo.", "«È tardi», disse, senza alzare gli occhi.", "«È tardi», disse senza alzare gli occhi."], explanation: "‘Look up’ → \"alzare lo sguardo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Nobody could say how.", answer: "Nessuno sapeva dire in che cosa.", altAnswers: ["Nessuno sapeva dire come.", "Nessuno avrebbe saputo dire in che cosa.", "Nessuno sapeva dire in cosa."], explanation: "‘Could’ of ability in the past: \"sapeva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (literary narrative).", source: "As soon as she had gone, he opened the drawer.", answer: "Appena fu uscita, aprì il cassetto.", altAnswers: ["Appena se ne fu andata, aprì il cassetto.", "Non appena fu uscita, aprì il cassetto.", "Appena lei fu uscita, lui aprì il cassetto."], explanation: "\"Trapassato remoto\" after \"appena\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He walked among the [hives] without gloves.", sentence: "Passeggiava tra le ___ senza guanti.", answer: "arnie", explanation: "\"L'arnia\" = beehive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The honey [tasted] different.", sentence: "Il miele ___ un sapore diverso.", answer: "aveva", explanation: "\"Avere un sapore\" = to taste (of)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "'Come in,' she [murmured].", sentence: "«Entra», ___.", answer: "mormorò", altAnswers: ["sussurrò"], explanation: "A precise speech verb." },
      { type: "word-order", prompt: "Put the words in order to say: The priest disapproved; the bees did not.", words: ["Il", "parroco", "disapprovava;", "le", "api", "no."], translation: "The priest disapproved; the bees did not.", explanation: "The ellipsis is the punchline." },
      { type: "word-order", prompt: "Put the words in order to say: It was raining. It had been raining for days.", words: ["Pioveva.", "Pioveva", "da", "giorni."], translation: "It was raining. It had been raining for days.", explanation: "\"Da\" + imperfect for an ongoing past state." },
      { type: "multiple-choice", question: "‘Every evening he would walk among the hives’: which tense translates ‘would walk’?", options: ["Imperfect: passeggiava", "Conditional: passeggerebbe", "Past conditional: avrebbe passeggiato", "Passato remoto: passeggiò"], correctIndex: 0, explanation: "Habitual ‘would’ is never a conditional." },
      { type: "dictation", audio: "Ogni sera passeggiava tra le arnie, parlando con le api come se fossero figli suoi.", explanation: "\"Come se fossero\": imperfect subjunctive." },
      { type: "speak", text: "Il parroco disapprovava; le api no.", prompt: "Read the line aloud with comic timing: The priest disapproved; the bees did not.", tip: "Pause at the semicolon before \"le api no\".", explanation: "Timing makes the joke." },
    ],
  },
  {
    slug: "c2-translation-2-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Journalistic",
    summary: "Fresh news passages to translate into Italian: headlines, the reporting conditional, institutions and numbers.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A fresh news brief",
        body: [
          "Translate this invented brief: ‘Storm Lucia hit the Ligurian coast overnight, forcing schools to close in three provinces. No injuries were reported, but the regional government said damage could exceed ten million euros. Rail services between Genoa and La Spezia are expected to resume tomorrow.’",
          "Italian news prefers the present or the \"passato prossimo\", \"si registrano\" for ‘were reported’, \"la Regione\" for the regional government, and the conditional \"dovrebbe\" for an expectation. A headline adds a keyword and a colon: \"Maltempo in Liguria: scuole chiuse in tre province\".",
        ],
        examples: [
          { es: "Maltempo in Liguria: scuole chiuse in tre province.", en: "Storm hits Liguria: schools shut in three provinces." },
          { es: "La tempesta Lucia ha colpito nella notte la costa ligure.", en: "Storm Lucia hit the Ligurian coast overnight." },
          { es: "Non si registrano feriti, ma i danni potrebbero superare i dieci milioni di euro.", en: "No injuries were reported, but damage could exceed ten million euros." },
          { es: "La circolazione ferroviaria tra Genova e La Spezia dovrebbe riprendere domani.", en: "Rail services between Genoa and La Spezia are expected to resume tomorrow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "No injuries were reported.", answer: "Non si registrano feriti.", altAnswers: ["Non ci sono feriti.", "Non si segnalano feriti.", "Non sono stati segnalati feriti."], explanation: "\"Si registrano\": standard news phrasing." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "Rail services are expected to resume tomorrow.", answer: "La circolazione ferroviaria dovrebbe riprendere domani.", altAnswers: ["I treni dovrebbero tornare a circolare domani.", "Il servizio ferroviario dovrebbe riprendere domani."], explanation: "\"Dovrebbe\" for an expectation." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "Damage could exceed ten million euros.", answer: "I danni potrebbero superare i dieci milioni di euro.", altAnswers: ["I danni potrebbero superare i 10 milioni di euro.", "I danni potrebbero oltrepassare i dieci milioni di euro."], explanation: "\"Milioni di euro\": \"euro\" doesn't change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "Schools were closed in three provinces.", answer: "Le scuole sono state chiuse in tre province.", altAnswers: ["Sono state chiuse le scuole in tre province.", "Scuole chiuse in tre province."], explanation: "\"Province\", not \"provincie\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (headline).", source: "Minister quits over expenses scandal.", answer: "Si dimette il ministro travolto dallo scandalo delle spese.", altAnswers: ["Il ministro si dimette per lo scandalo delle spese.", "Scandalo spese, si dimette il ministro.", "Spese, il ministro si dimette."], explanation: "Present tense, verb first for impact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "The minister is reportedly ready to resign.", answer: "Il ministro sarebbe pronto a dimettersi.", altAnswers: ["Secondo indiscrezioni, il ministro è pronto a dimettersi.", "La ministra sarebbe pronta a dimettersi."], explanation: "Reporting conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "The alleged thief was released on bail.", answer: "Il presunto ladro è stato rilasciato su cauzione.", altAnswers: ["Il presunto ladro è stato scarcerato su cauzione.", "Il presunto ladro è stato liberato su cauzione."], explanation: "\"Presunto\" protects the presumption of innocence. \"Su cauzione\" appears mostly in reports on US or UK cases, since bail plays almost no role in Italian criminal procedure." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "The European Central Bank raised rates by a quarter of a point.", answer: "La Banca centrale europea ha alzato i tassi di un quarto di punto.", altAnswers: ["La Bce ha alzato i tassi di un quarto di punto.", "La Banca centrale europea ha aumentato i tassi di un quarto di punto.", "La BCE ha alzato i tassi di 25 punti base."], explanation: "\"La Bce\" in Italian, not ECB." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian (news style).", source: "The town is about twelve miles from Turin.", answer: "Il paese è a circa venti chilometri da Torino.", altAnswers: ["Il comune si trova a circa venti chilometri da Torino.", "Il paese si trova a circa venti chilometri da Torino."], explanation: "Twelve miles ≈ twenty kilometers." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Storm Lucia hit the coast [overnight].", sentence: "La tempesta Lucia ha colpito la costa ___.", answer: "nella notte", altAnswers: ["durante la notte", "stanotte"], explanation: "\"Nella notte\": news style." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The regional government] has declared a state of emergency.", sentence: "___ ha dichiarato lo stato di emergenza.", answer: "La Regione", altAnswers: ["La giunta regionale"], explanation: "Capital R for the institution." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "'We will rebuild,' [the mayor said].", sentence: "«Ricostruiremo», ___.", answer: "ha dichiarato il sindaco", altAnswers: ["ha detto il sindaco", "ha assicurato il sindaco", "ha dichiarato la sindaca"], explanation: "Verb before subject after a quote." },
      { type: "word-order", prompt: "Put the words in order to say: Storm in Liguria: schools shut.", words: ["Maltempo", "in", "Liguria:", "scuole", "chiuse."], translation: "Storm in Liguria: schools shut.", explanation: "Nominal headline." },
      { type: "word-order", prompt: "Put the words in order to say: According to sources, a deal is close.", words: ["Secondo", "alcune", "fonti,", "l'accordo", "sarebbe", "vicino."], translation: "According to sources, a deal is close.", explanation: "Source + conditional." },
      { type: "multiple-choice", question: "Which Italian headline best renders ‘Firm axes 500 jobs’?", options: ["L'azienda taglia 500 posti di lavoro", "La ditta ascia 500 lavori", "La società ha licenziato 500 lavori", "Impresa: 500 asce"], correctIndex: 0, explanation: "\"Tagliare posti di lavoro\"." },
      { type: "listen-choose", audio: "Secondo fonti vicine alla Regione, i danni potrebbero superare i dieci milioni, ma manca ancora una stima ufficiale.", question: "How certain is the damage figure?", options: ["It's an unofficial estimate.", "It's an official figure.", "There is no damage.", "Damage is under one million."], correctIndex: 0, explanation: "\"Fonti vicine\" + \"manca una stima ufficiale\"." },
      { type: "speak", text: "Non si registrano feriti, ma i danni potrebbero superare i dieci milioni di euro.", prompt: "Read the news line aloud: No injuries were reported, but damage could exceed ten million euros.", tip: "Newsreader pace: slight pause after \"feriti\".", explanation: "News phrasing aloud." },
    ],
  },
];
