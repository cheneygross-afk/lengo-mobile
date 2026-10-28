// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u18-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 18 Extra Practice: Translation Lab. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
// English quoted in explanations goes in 'single quotes'.
export const IT_C1_U18_EXTRA: Lesson[] = [
  {
    slug: "c1-translation-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Structures",
    summary: "Fresh sentences that combine phrasal verbs, -ing forms, passives, noun stacks, general you and 'have been doing'.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Mixed structures",
        body: [
          "Each sentence below hides one or two of the unit's traps. Before translating, ask: is there a phrasal verb (one Italian verb)? An -ing that is really a noun or an infinitive? A passive that sounds better with \"si\", \"andare\" or \"loro\"? A noun stack to read backwards? A 'have been doing' that needs \"da\" + present?",
          "Then read your Italian aloud. If it sounds like a translation, it probably is: move the subject, drop a pronoun, or swap a noun for a verb.",
        ],
        examples: [
          { es: "Lavoro in questo ufficio da sei anni.", en: "I've been working in this office for six years." },
          { es: "Le domande vanno presentate entro marzo.", en: "Applications must be submitted by March." },
          { es: "Il responsabile del reparto vendite estero.", en: "The overseas sales department manager." },
          { es: "Ha rinunciato a candidarsi dopo aver letto il bando.", en: "She gave up applying after reading the call for applications." },
          { es: "Qui non si entra senza prenotazione.", en: "You can't get in here without a reservation." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been working in this office for six years.", answer: "Lavoro in questo ufficio da sei anni.", altAnswers: ["Lavoro in quest'ufficio da sei anni.", "Sono sei anni che lavoro in questo ufficio."], explanation: "\"Da\" + present." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian (use andare).", source: "Applications must be submitted by March.", answer: "Le domande vanno presentate entro marzo.", altAnswers: ["Le domande devono essere presentate entro marzo.", "Le candidature vanno presentate entro marzo."], explanation: "\"Andare\" + participle." },
          { type: "listen-choose", audio: "Qui non si entra senza prenotazione.", question: "What does it mean?", options: ["You can't get in here without a reservation.", "Nobody has made a reservation here.", "Enter here to book.", "Reservations are not accepted here."], correctIndex: 0, explanation: "General 'you' = \"si\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The overseas sales department manager.", answer: "Il responsabile del reparto vendite estero.", altAnswers: ["Il responsabile dell'ufficio vendite estero.", "La responsabile del reparto vendite estero.", "Il direttore del reparto vendite estero."], explanation: "Head first." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She gave up applying after reading the call for applications.", answer: "Ha rinunciato a candidarsi dopo aver letto il bando.", altAnswers: ["Ha rinunciato a candidarsi dopo avere letto il bando.", "Ha rinunciato a fare domanda dopo aver letto il bando."], explanation: "\"Rinunciare a\" + \"dopo aver\" + participle." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can't get in here without a reservation.", answer: "Qui non si entra senza prenotazione.", altAnswers: ["Non si può entrare qui senza prenotazione.", "Qui non si può entrare senza prenotazione."], explanation: "Impersonal \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were told the flight had been canceled.", answer: "Ci hanno detto che il volo era stato cancellato.", altAnswers: ["Ci è stato detto che il volo era stato cancellato.", "Ci hanno detto che il volo era stato annullato."], explanation: "Indirect object stays \"ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cooking relaxes me.", answer: "Cucinare mi rilassa.", explanation: "Infinitive subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've run out of coffee.", answer: "È finito il caffè.", altAnswers: ["Abbiamo finito il caffè.", "Il caffè è finito.", "Non c'è più caffè."], explanation: "\"Finire\" with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I saw her crossing the road.", answer: "L'ho vista attraversare la strada.", altAnswers: ["L'ho vista che attraversava la strada."], explanation: "Perception verb + infinitive; agreement \"vista\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A three-day conference.", answer: "Un convegno di tre giorni.", altAnswers: ["Una conferenza di tre giorni.", "Un congresso di tre giorni."], explanation: "Measure after the noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The museum [is being restored].", sentence: "Il museo ___.", answer: "viene restaurato", altAnswers: ["è in restauro", "è in fase di restauro"], explanation: "\"Venire\" + participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[How long have you been] waiting?", sentence: "___ aspetti?", answer: "Da quanto tempo", altAnswers: ["Da quanto"], explanation: "\"Da quanto tempo\" + present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [put off] the wedding.", sentence: "Hanno ___ il matrimonio.", answer: "rimandato", altAnswers: ["rinviato"], explanation: "'Put off' = \"rimandare\"." },
      { type: "word-order", prompt: "Put the words in order to say: You learn by doing.", words: ["Facendo", "si", "impara."], translation: "You learn by doing.", altOrders: [["Si", "impara", "facendo."]], explanation: "Gerund of means + impersonal \"si\"." },
      { type: "multiple-choice", question: "Best translation of 'The man wearing a hat is my teacher'?", options: ["L'uomo con il cappello è il mio professore.", "L'uomo indossando un cappello è il mio professore.", "L'uomo indossante cappello è il mio professore.", "L'uomo sta indossando un cappello è il mio professore."], correctIndex: 0, explanation: "Descriptive -ing = \"con\" or a relative clause." },
      { type: "dictation", audio: "Lavoro in questo ufficio da sei anni.", explanation: "\"Da\" + present." },
      { type: "speak", text: "Ci hanno detto che il volo era stato cancellato, così abbiamo rimandato tutto.", prompt: "Say it in Italian: We were told the flight had been canceled, so we put everything off.", tip: "\"cancellato\": double l.", explanation: "Passive with \"ci\" + phrasal verb." },
    ],
  },
  {
    slug: "c1-translation-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: False Friends",
    summary: "Fresh sentences with the false friends advanced translators still get wrong.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Twelve traps",
        body: [
          "Review: \"argomento\" (topic), \"eventualmente\" (if need be), \"attualmente\" (currently), \"sensibile\" (sensitive), \"preservativo\" (condom), \"morbido\" (soft), \"rumore\" (noise), \"comprensivo\" (understanding), \"pretendere\" (to demand), \"editore\" (publisher), \"educato\" (polite). New ones: \"annoiato\" = 'bored' (not 'annoyed' = \"infastidito\", \"seccato\"); \"magazzino\" = 'warehouse' (a 'magazine' is \"una rivista\"); \"camera\" = 'room' (a 'camera' is \"una macchina fotografica\").",
        ],
        examples: [
          { es: "Ero annoiato, non arrabbiato.", en: "I was bored, not angry." },
          { es: "Era infastidita dal rumore.", en: "She was annoyed by the noise." },
          { es: "Lavora nel magazzino di un supermercato.", en: "He works in a supermarket warehouse." },
          { es: "Ho comprato una rivista e una macchina fotografica.", en: "I bought a magazine and a camera." },
          { es: "Eventualmente ti presto la mia.", en: "If need be, I'll lend you mine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She was annoyed by the noise.", answer: "Era infastidita dal rumore.", altAnswers: ["Era seccata dal rumore.", "Il rumore la infastidiva."], explanation: "'Annoyed' = \"infastidito\"; \"annoiato\" = bored." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought a magazine and a camera.", answer: "Ho comprato una rivista e una macchina fotografica.", explanation: "Two false friends in one sentence." },
          { type: "listen-choose", audio: "Lavora nel magazzino di un supermercato.", question: "Where does he work?", options: ["In a supermarket warehouse", "For a supermarket magazine", "In a supermarket's office", "At a newsstand"], correctIndex: 0, explanation: "\"Magazzino\" = warehouse." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was bored, not angry. (a man speaking)", answer: "Ero annoiato, non arrabbiato.", explanation: "\"Annoiato\" = bored." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If need be, I'll lend you mine.", answer: "Eventualmente ti presto la mia.", altAnswers: ["Eventualmente ti presto il mio.", "Se serve, ti presto la mia.", "Se serve, ti presto il mio."], explanation: "\"Eventualmente\" = if need be." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Actually, I prefer tea.", answer: "In realtà preferisco il tè.", altAnswers: ["A dire il vero preferisco il tè.", "Veramente preferisco il tè."], explanation: "'Actually' = \"in realtà\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's a sensible answer.", answer: "È una risposta sensata.", altAnswers: ["È una risposta ragionevole.", "Questa è una risposta sensata."], explanation: "'Sensible' = \"sensato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a strange noise in the car.", answer: "C'è un rumore strano in macchina.", altAnswers: ["C'è uno strano rumore in macchina.", "C'è un rumore strano nella macchina."], explanation: "\"Rumore\" = noise." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The topic of the debate was immigration.", answer: "L'argomento del dibattito era l'immigrazione.", altAnswers: ["Il tema del dibattito era l'immigrazione."], explanation: "\"Argomento\" = topic." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Our room has a view of the sea.", answer: "La nostra camera ha vista sul mare.", altAnswers: ["La nostra camera ha la vista sul mare.", "La nostra camera dà sul mare."], explanation: "\"Camera\" = room." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Eventually they found a solution.", answer: "Alla fine hanno trovato una soluzione.", altAnswers: ["Alla fine trovarono una soluzione.", "Infine hanno trovato una soluzione."], explanation: "'Eventually' = \"alla fine\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children were very [polite].", sentence: "I bambini erano molto ___.", answer: "educati", altAnswers: ["beneducati"], explanation: "\"Educato\" = polite." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Don't [pretend] to be asleep.", sentence: "Non ___ di dormire.", answer: "fingere", altAnswers: ["far finta", "fare finta"], explanation: "'Pretend' = \"fingere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A [comprehensive] guide to Sicily.", sentence: "Una guida ___ della Sicilia.", answer: "completa", altAnswers: ["esauriente"], explanation: "Not \"comprensiva\"." },
      { type: "word-order", prompt: "Put the words in order to say: My skin is very sensitive.", words: ["Ho", "la", "pelle", "molto", "sensibile."], translation: "My skin is very sensitive.", explanation: "\"Sensibile\" = sensitive." },
      { type: "multiple-choice", question: "\"Il suo editore ha rifiutato il manoscritto\" means ...", options: ["Her publisher rejected the manuscript.", "Her editor rewrote the manuscript.", "Her editor lost the manuscript.", "Her reader loved the manuscript."], correctIndex: 0, explanation: "\"Editore\" = publisher." },
      { type: "dictation", audio: "In realtà preferisco il tè.", explanation: "\"In realtà\" = actually." },
      { type: "speak", text: "Ero annoiato, non arrabbiato. In realtà, eventualmente posso tornare domani.", prompt: "Say it in Italian: I was bored, not angry. Actually, if need be, I can come back tomorrow.", tip: "Three false friends, all used correctly.", explanation: "\"Annoiato\", \"in realtà\", \"eventualmente\"." },
    ],
  },
];
