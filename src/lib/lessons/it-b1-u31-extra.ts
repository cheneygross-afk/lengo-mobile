// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u31-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 31 Extra Practice: Word Formation. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U31_EXTRA: Lesson[] = [
  {
    slug: "b1-word-formation-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Suffixes",
    summary: "Fresh words with -ino, -one, -accio, -zione, -mento, -tore, -ezza, -oso and -bile.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "New words, same rules",
        body: [
          "Try the suffixes on new bases: \"scarpa\" → \"scarpetta\", \"letto\" → \"lettino\" (a cot, a sunbed), \"pigro\" → \"pigrone\" (lazybones), \"dirigere\" → \"il direttore / la direttrice\", \"gentile\" → \"la gentilezza\", \"spiegare\" → \"la spiegazione\".",
        ],
        examples: [
          { es: "Al mare affittiamo due lettini.", en: "At the beach we rent two sunbeds." },
          { es: "Dai, pigrone, alzati!", en: "Come on, lazybones, get up!" },
          { es: "La direttrice ci ha ricevuto subito.", en: "The (woman) director saw us straight away." },
          { es: "Grazie per la gentilezza.", en: "Thank you for your kindness." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you for your kindness.", answer: "Grazie per la gentilezza.", altAnswers: ["Grazie della gentilezza.", "La ringrazio per la gentilezza."], explanation: "\"Gentile\" → \"gentilezza\"." },
          { type: "listen-choose", audio: "Al mare affittiamo due lettini.", question: "What do they rent at the beach?", options: ["two sunbeds", "two cots", "two umbrellas", "two small rooms"], correctIndex: 0, explanation: "At the beach, \"lettino\" = sunbed." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come on, lazybones, get up! (to a friend)", answer: "Dai, pigrone, alzati!", altAnswers: ["Dai, pigrona, alzati!"], explanation: "\"Pigro\" + \"-one\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The explanation was clear.", answer: "La spiegazione era chiara.", altAnswers: ["La spiegazione è stata chiara."], explanation: "\"Spiegare\" → \"spiegazione\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The director saw us straight away. (a woman)", answer: "La direttrice ci ha ricevuto subito.", altAnswers: ["La direttrice ci ha ricevuti subito.", "La direttrice ci ha ricevute subito."], explanation: "\"Dirigere\" → \"direttore / direttrice\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children's shoes are tiny.", answer: "Le scarpette dei bambini sono piccolissime.", altAnswers: ["Le scarpe dei bambini sono piccolissime.", "Le scarpette dei bambini sono minuscole."], explanation: "\"Scarpa\" + \"-etta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's a very tasty sauce.", answer: "È un sugo molto gustoso.", altAnswers: ["È una salsa molto gustosa.", "È un sugo gustosissimo."], explanation: "\"Gusto\" → \"gustoso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The movement is growing.", answer: "Il movimento sta crescendo.", altAnswers: ["Il movimento cresce."], explanation: "\"Muovere\" → \"movimento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The water is drinkable.", answer: "L'acqua è potabile.", altAnswers: ["L'acqua è bevibile."], explanation: "\"Potabile\" is the official word; \"bevibile\" = drinkable (taste)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What a horrible film!", answer: "Che filmaccio!", altAnswers: ["Che brutto film!"], explanation: "\"Film\" + \"-accio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sadness passes.", answer: "La tristezza passa.", altAnswers: [], explanation: "\"Triste\" → \"tristezza\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [singer] is from Naples. (a woman)", sentence: "La ___ è di Napoli.", answer: "cantante", explanation: "\"-ante\" nouns are the same for both genders." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Thanks for the [invitation].", sentence: "Grazie per l'___.", answer: "invito", explanation: "Not every verb takes a suffix: \"invitare\" → \"invito\"." },
      { type: "word-order", prompt: "Put the words in order to say: The little dog sleeps on the cot.", words: ["Il", "cagnolino", "dorme", "sul", "lettino."], translation: "The little dog sleeps on the cot.", explanation: "Two diminutives." },
      { type: "multiple-choice", question: "\"La gentilezza\" comes from ...", options: ["gentile", "gente", "gentiluomo", "genitore"], correctIndex: 0, explanation: "\"Gentile\" + \"-ezza\"." },
      { type: "dictation", audio: "Grazie per la spiegazione e per la gentilezza.", explanation: "\"-zione\" and \"-ezza\"." },
      { type: "speak", text: "Dai, pigrone! Che tempaccio, ma andiamo lo stesso al mare: ho prenotato due lettini.", prompt: "Say it to a friend: Come on, lazybones! Awful weather, but let's go to the beach anyway: I've booked two sunbeds.", tip: "pi-GRO-ne, tem-PAC-cio, let-TI-ni.", explanation: "Three suffixed words." },
    ],
  },
  {
    slug: "b1-word-formation-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Prefixes",
    summary: "Fresh words with ri-, s-, dis-, in- / im- / il- / ir-, pre- and ultra-.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Prefix check",
        body: [
          "\"Ri-\" again (\"riprovare\", \"ripartire\"); \"s-\" and \"dis-\" undo (\"sbloccare\", \"sconosciuto\", \"disabilitare\"); \"in-\" not, with \"im-\", \"il-\", \"ir-\" before \"p / b / m\", \"l\", \"r\" (\"imprevisto\", \"illimitato\", \"irraggiungibile\"); \"pre-\" before (\"prevendita\"); \"ultra-\" extremely (\"ultrarapido\").",
        ],
        examples: [
          { es: "Riprova tra cinque minuti.", en: "Try again in five minutes." },
          { es: "Ho sbloccato il telefono.", en: "I've unlocked the phone." },
          { es: "C'è stato un imprevisto.", en: "Something unexpected came up." },
          { es: "Ho internet illimitato.", en: "I've got unlimited internet." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Something unexpected came up.", answer: "C'è stato un imprevisto.", altAnswers: ["Ho avuto un imprevisto."], explanation: "\"Im-\" + \"previsto\"." },
          { type: "listen-choose", audio: "Riprova tra cinque minuti.", question: "What should you do?", options: ["try again in five minutes", "wait fifty minutes", "give up", "call back tomorrow"], correctIndex: 0, explanation: "\"Ri-\" + \"provare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've unlocked the phone.", answer: "Ho sbloccato il telefono.", altAnswers: ["Ho sbloccato il cellulare."], explanation: "\"S-\" + \"bloccare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got unlimited internet.", answer: "Ho internet illimitato.", altAnswers: ["Ho internet senza limiti."], explanation: "\"Il-\" before \"l\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The train leaves again at six.", answer: "Il treno riparte alle sei.", altAnswers: [], explanation: "\"Ri-\" + \"partire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A stranger called me.", answer: "Mi ha chiamato uno sconosciuto.", altAnswers: ["Uno sconosciuto mi ha chiamato.", "Mi ha chiamata uno sconosciuto."], explanation: "\"S-\" + \"conosciuto\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The summit is unreachable.", answer: "La vetta è irraggiungibile.", altAnswers: ["La cima è irraggiungibile."], explanation: "\"Ir-\" before \"r\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I bought the tickets in advance sales.", answer: "Ho comprato i biglietti in prevendita.", altAnswers: ["Ho preso i biglietti in prevendita."], explanation: "\"Pre-\" + \"vendita\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Disable the camera.", answer: "Disabilita la fotocamera.", altAnswers: ["Disattiva la fotocamera.", "Disabilita la videocamera."], explanation: "\"Dis-\" + \"abilitare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Patience is indispensable.", answer: "La pazienza è indispensabile.", altAnswers: [], explanation: "\"In-\" + \"dispensabile\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've reread the contract.", answer: "Ho riletto il contratto.", altAnswers: [], explanation: "\"Ri-\" + \"leggere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The connection is [ultrafast].", sentence: "La connessione è ___.", answer: "ultraveloce", altAnswers: ["ultrarapida"], explanation: "\"Ultra-\" = extremely." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He's [unhappy] with the result.", sentence: "È ___ del risultato.", answer: "scontento", altAnswers: ["insoddisfatto"], explanation: "\"S-\" + \"contento\"." },
      { type: "word-order", prompt: "Put the words in order to say: The phone is unreachable.", words: ["Il", "telefono", "è", "irraggiungibile."], translation: "The phone is unreachable.", explanation: "Typical message when a phone is off." },
      { type: "multiple-choice", question: "Which spelling is correct?", options: ["imbattibile", "inbattibile", "ibattibile", "irbattibile"], correctIndex: 0, explanation: "\"Im-\" before \"b\"." },
      { type: "dictation", audio: "C'è stato un imprevisto, riparto domani mattina.", explanation: "\"Im-\" and \"ri-\"." },
      { type: "speak", text: "Scusa, c'è stato un imprevisto: il telefono era irraggiungibile. Riprovo più tardi.", prompt: "Apologise to a friend: Sorry, something unexpected came up: my phone was unreachable. I'll try again later.", tip: "Double \"r\": ir-rag-giun-GI-bi-le.", explanation: "Three prefixed words." },
    ],
  },
  {
    slug: "b1-word-formation-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Guess the Meaning",
    summary: "Read a short advert and a short message full of derived words, and work out what they mean from the parts.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two short texts",
        body: [
          "Text 1, an advert: \"Affittasi villetta con giardinetto, a due passi dal mare. Cucina abitabile, due camerette, terrazzino panoramico. Ideale per famiglie. Prenotazione con caparra, pagamento anticipato.\"",
          "Text 2, a message: \"Ciao! Il weekend è stato un disastro: tempaccio, un traffico incredibile e il ristorantino che volevamo era chiuso. Però abbiamo trovato una pizzeria economica e simpaticissima. Ritorniamo il mese prossimo!\"",
        ],
        examples: [
          { es: "Affittasi villetta con giardinetto.", en: "Small villa with small garden for rent." },
          { es: "La cucina è abitabile.", en: "The kitchen is big enough to eat in." },
          { es: "Il ristorantino era chiuso.", en: "The little restaurant was closed." },
          { es: "Ritorniamo il mese prossimo.", en: "We're coming back next month." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Text 1: how many bedrooms are there?", options: ["two small bedrooms", "one big bedroom", "three bedrooms", "none"], correctIndex: 0, explanation: "\"Due camerette\"." },
          { type: "listen-choose", audio: "Il ristorantino che volevamo era chiuso.", question: "What was the problem?", options: ["The little restaurant was closed.", "The restaurant was full.", "The restaurant was expensive.", "The food was bad."], correctIndex: 0, explanation: "\"Ristorante\" + \"-ino\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Small villa for rent near the sea.", answer: "Affittasi villetta vicino al mare.", altAnswers: ["Si affitta villetta vicino al mare.", "Affittasi villetta a due passi dal mare."], explanation: "\"Affittasi\": ad style." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The kitchen is big enough to eat in.", answer: "La cucina è abitabile.", altAnswers: [], explanation: "\"Abitare\" → \"abitabile\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Payment in advance.", answer: "Pagamento anticipato.", altAnswers: ["Pagamento in anticipo."], explanation: "\"Pagare\" → \"pagamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's a small terrace with a view.", answer: "C'è un terrazzino panoramico.", altAnswers: ["C'è un terrazzino con vista."], explanation: "\"Terrazzo\" + \"-ino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The weekend was a disaster.", answer: "Il weekend è stato un disastro.", altAnswers: ["Il fine settimana è stato un disastro."], explanation: "Passato prossimo of \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We found a cheap and very friendly pizzeria.", answer: "Abbiamo trovato una pizzeria economica e simpaticissima.", altAnswers: ["Abbiamo trovato una pizzeria economica e molto simpatica."], explanation: "\"Economico\" = cheap." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're coming back next month.", answer: "Ritorniamo il mese prossimo.", altAnswers: ["Torniamo il mese prossimo."], explanation: "\"Ri-\" + \"tornare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Booking with a deposit.", answer: "Prenotazione con caparra.", altAnswers: ["Prenotazione con acconto."], explanation: "\"Caparra\" = deposit." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Two [small bedrooms].", sentence: "Due ___.", answer: "camerette", explanation: "\"Camera\" + \"-etta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Awful weather] all weekend.", sentence: "___ tutto il weekend.", answer: "Tempaccio", explanation: "\"Tempo\" + \"-accio\"." },
      { type: "word-order", prompt: "Put the words in order to say: The little restaurant was closed.", words: ["Il", "ristorantino", "era", "chiuso."], translation: "The little restaurant was closed.", explanation: "Diminutive of \"ristorante\"." },
      { type: "multiple-choice", question: "\"A due passi dal mare\" means ...", options: ["very close to the sea", "two kilometres from the sea", "with two steps down to the sea", "far from the sea"], correctIndex: 0, explanation: "Literally two steps from the sea." },
      { type: "multiple-choice", question: "Text 2: what went well?", options: ["They found a nice cheap pizzeria.", "The weather.", "The traffic.", "The little restaurant."], correctIndex: 0, explanation: "\"Una pizzeria economica e simpaticissima\"." },
      { type: "dictation", audio: "Affittasi villetta con giardinetto e terrazzino.", explanation: "Three diminutives." },
      { type: "speak", text: "Il weekend è stato un disastro: tempaccio e traffico. Però abbiamo trovato una pizzeria simpaticissima!", prompt: "Tell a friend: The weekend was a disaster: awful weather and traffic. But we found a really lovely pizzeria!", tip: "\"Simpaticissima\": stress on TIS.", explanation: "Pejorative + superlative." },
    ],
  },
];
