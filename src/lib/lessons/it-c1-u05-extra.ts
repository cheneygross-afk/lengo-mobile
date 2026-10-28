// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u05-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 5 Extra Practice: Academic Italian. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U05_EXTRA: Lesson[] = [
  {
    slug: "c1-academic-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Summaries",
    summary: "Fresh sentences for reporting what an author argues, in the neutral voice of an academic summary.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Reporting an author",
        body: [
          "The sentences in this practice summarise invented articles on cities, schools and food. Verbs to produce: \"sostenere\", \"affermare\", \"osservare\", \"mettere in luce\", \"concludere\". Connectors to produce: \"in sintesi\", \"secondo l'autrice\", \"in primo luogo\", \"infine\", \"ne consegue che\".",
        ],
        examples: [
          { es: "Secondo l'autrice, il centro storico si sta svuotando.", en: "According to the author, the historic centre is emptying." },
          { es: "L'articolo mette in luce il ruolo delle biblioteche di quartiere.", en: "The article highlights the role of neighbourhood libraries." },
          { es: "In sintesi, lo studio conferma l'ipotesi iniziale.", en: "In short, the study confirms the initial hypothesis." },
          { es: "L'autore conclude che servono nuovi investimenti.", en: "The author concludes that new investment is needed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "According to the author, the historic centre is emptying.", answer: "Secondo l'autrice, il centro storico si sta svuotando.", altAnswers: ["Secondo l'autore, il centro storico si sta svuotando.", "Secondo l'autrice il centro storico si sta spopolando."], explanation: "\"Svuotarsi\" = to empty; \"spopolarsi\" = to lose its inhabitants." },
          { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "The article highlights the role of neighbourhood libraries.", answer: "L'articolo mette in luce il ruolo delle biblioteche di quartiere.", altAnswers: ["L'articolo evidenzia il ruolo delle biblioteche di quartiere.", "L'articolo sottolinea il ruolo delle biblioteche di quartiere."], explanation: "\"Mettere in luce\" = to highlight." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "In short, the study confirms the initial hypothesis.", answer: "In sintesi, lo studio conferma l'ipotesi iniziale.", altAnswers: ["In sintesi lo studio conferma l'ipotesi di partenza.", "In breve, lo studio conferma l'ipotesi iniziale."], explanation: "\"In sintesi\" opens the summary's conclusion." },
      { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "The author concludes that new investment is needed.", answer: "L'autore conclude che servono nuovi investimenti.", altAnswers: ["L'autore conclude che sono necessari nuovi investimenti.", "L'autrice conclude che servono nuovi investimenti."], explanation: "\"Concludere che\" + indicative: the author states it as fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "The author argues that school canteens should use local products.", answer: "L'autore sostiene che le mense scolastiche dovrebbero usare prodotti locali.", altAnswers: ["L'autore sostiene che le mense scolastiche debbano usare prodotti locali.", "L'autrice sostiene che le mense scolastiche dovrebbero usare prodotti locali."], explanation: "\"Sostenere che\" = to argue that; the conditional \"dovrebbero\" keeps it a recommendation." },
      { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "Firstly, the article describes the method.", answer: "In primo luogo, l'articolo descrive il metodo.", altAnswers: ["Innanzitutto, l'articolo descrive il metodo.", "In primo luogo l'articolo illustra il metodo."], explanation: "\"In primo luogo\" orders the points of a summary." },
      { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "The author observes that prices have risen.", answer: "L'autore osserva che i prezzi sono aumentati.", altAnswers: ["L'autore osserva che i prezzi sono saliti.", "L'autrice osserva che i prezzi sono aumentati."], explanation: "\"Osservare che\" = to observe that." },
      { type: "translate", direction: "en-es", prompt: "Translate into academic Italian.", source: "It follows that the problem is not only economic.", answer: "Ne consegue che il problema non è soltanto economico.", altAnswers: ["Ne consegue che il problema non è solo economico.", "Ne deriva che il problema non è soltanto economico."], explanation: "\"Ne consegue che\" = it follows that." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The aim of the article] is to compare two cities.", sentence: "___ è confrontare due città.", answer: "Lo scopo dell'articolo", altAnswers: ["L'obiettivo dell'articolo", "Il fine dell'articolo"], explanation: "\"Lo scopo\": \"lo\" before s + consonant." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Finally], the author proposes three solutions.", sentence: "___, l'autore propone tre soluzioni.", answer: "Infine", altAnswers: ["Da ultimo", "In conclusione"], explanation: "\"Infine\" closes a list of points." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The study [is based on] two hundred interviews.", sentence: "Lo studio ___ duecento interviste.", answer: "si basa su", altAnswers: ["si fonda su"], explanation: "\"Basarsi su\" = to be based on." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the second part], the author discusses the data.", sentence: "___, l'autore discute i dati.", answer: "Nella seconda parte", explanation: "\"Nella\" = in + la." },
      {
        type: "word-order",
        prompt: "Build the sentence: The author points out that the data are incomplete.",
        words: ["L'autore", "fa", "notare", "che", "i", "dati", "sono", "incompleti."],
        translation: "The author points out that the data are incomplete.",
        explanation: "\"Fare notare che\" = to point out that.",
      },
      { type: "multiple-choice", question: "Which sentence suits a neutral academic summary?", options: ["L'autore sostiene che il turismo ha cambiato il quartiere.", "L'autore dice un sacco di cose sul turismo.", "Secondo me l'autore ha ragione da vendere.", "L'autore parla del turismo, tipo, nel quartiere."], correctIndex: 0, explanation: "A summary reports the claim with a precise verb and no personal comment." },
      {
        type: "matching",
        instructions: "Match the reporting verb to its meaning.",
        pairs: [
          { left: "sostenere", right: "to argue" },
          { left: "osservare", right: "to observe" },
          { left: "mettere in luce", right: "to highlight" },
          { left: "concludere", right: "to conclude" },
          { left: "ribadire", right: "to restate" },
        ],
        explanation: "Reporting verbs avoid the vague \"dire\".",
      },
      { type: "listen-choose", audio: "In sintesi, l'autrice ritiene che le piccole librerie possano sopravvivere solo grazie agli eventi.", question: "What does the author think?", options: ["Small bookshops can survive only through events.", "Small bookshops will all close.", "Events harm small bookshops.", "Big bookshops organise more events."], correctIndex: 0, explanation: "\"Ritenere che\" + subjunctive \"possano\"." },
      { type: "dictation", audio: "Secondo l'autore, il centro storico si sta svuotando.", explanation: "\"Svuotando\": one t, one v." },
      { type: "speak", text: "In sintesi, l'articolo mette in luce il ruolo delle biblioteche di quartiere.", prompt: "Sum up the article aloud: In short, the article highlights the role of neighbourhood libraries.", tip: "\"Biblioteche\": hard k sound before e.", explanation: "A one-line summary." },
    ],
  },
  {
    slug: "c1-academic-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Hedging",
    summary: "Fresh claims to soften with conditionals, impersonal verbs and the subjunctive.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Softening a claim",
        body: [
          "Each item turns a confident claim into a cautious academic one. Tools to produce: the conditional (\"sembrerebbe\", \"si potrebbe\"), \"pare che\" and \"è probabile che\" with the subjunctive, \"tendere a\", \"in parte\", \"almeno in apparenza\".",
        ],
        examples: [
          { es: "I dati sembrerebbero indicare un calo.", en: "The data would seem to indicate a decline." },
          { es: "È probabile che il campione sia troppo piccolo.", en: "The sample is probably too small." },
          { es: "Pare che il fenomeno sia più diffuso al Nord.", en: "The phenomenon appears to be more widespread in the North." },
          { es: "I giovani tendono a leggere meno quotidiani.", en: "Young people tend to read fewer newspapers." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "The data would seem to indicate a decline.", answer: "I dati sembrerebbero indicare un calo.", altAnswers: ["I dati sembrano indicare un calo.", "I dati sembrerebbero indicare una diminuzione."], explanation: "The conditional \"sembrerebbero\" softens the claim further." },
          { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "The sample is probably too small.", answer: "È probabile che il campione sia troppo piccolo.", altAnswers: ["Probabilmente il campione è troppo piccolo.", "Il campione è probabilmente troppo piccolo."], explanation: "\"È probabile che\" + subjunctive \"sia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "The phenomenon appears to be more widespread in the North.", answer: "Pare che il fenomeno sia più diffuso al Nord.", altAnswers: ["Sembra che il fenomeno sia più diffuso al Nord.", "Il fenomeno sembra più diffuso al Nord."], explanation: "\"Pare che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "Young people tend to read fewer newspapers.", answer: "I giovani tendono a leggere meno quotidiani.", altAnswers: ["I giovani tendono a leggere meno giornali."], explanation: "\"Tendere a\" + infinitive turns a rule into a tendency." },
      { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "One could hypothesise that the cause is the price.", answer: "Si potrebbe ipotizzare che la causa sia il prezzo.", altAnswers: ["Si potrebbe supporre che la causa sia il prezzo.", "Si può ipotizzare che la causa sia il prezzo."], explanation: "\"Si potrebbe ipotizzare che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "These results are, at least in part, surprising.", answer: "Questi risultati sono, almeno in parte, sorprendenti.", altAnswers: ["Questi risultati sono almeno in parte sorprendenti.", "Tali risultati sono, almeno in parte, sorprendenti."], explanation: "\"Almeno in parte\" limits the claim." },
      { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "It cannot be ruled out that the data are incomplete.", answer: "Non si può escludere che i dati siano incompleti.", altAnswers: ["Non è da escludere che i dati siano incompleti.", "Non si esclude che i dati siano incompleti."], explanation: "\"Non si può escludere che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate with a cautious tone.", source: "The survey suggests that families spend less on books.", answer: "L'indagine suggerisce che le famiglie spendano meno in libri.", altAnswers: ["L'indagine suggerisce che le famiglie spendono meno in libri.", "L'indagine suggerisce che le famiglie spendano meno per i libri."], explanation: "\"Suggerire che\" in the sense of 'indicate' takes the subjunctive or, more assertively, the indicative." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It would seem] that the trend is changing.", sentence: "___ che la tendenza stia cambiando.", answer: "Sembrerebbe", altAnswers: ["Parrebbe", "Sembra"], explanation: "Conditional of \"sembrare\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sample is [relatively] small.", sentence: "Il campione è ___ ridotto.", answer: "relativamente", explanation: "\"Relativamente\" softens the adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[To our knowledge], no one has studied this dialect.", sentence: "___, nessuno ha studiato questo dialetto.", answer: "Per quanto ne sappiamo", altAnswers: ["A quanto ci risulta", "Per quanto ci risulta"], explanation: "\"Per quanto ne sappiamo\": subjunctive after \"per quanto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It is likely that the results [are] different in the South.", sentence: "È probabile che i risultati ___ diversi al Sud.", answer: "siano", explanation: "\"È probabile che\" requires the subjunctive." },
      {
        type: "word-order",
        prompt: "Build the sentence: The data seem to confirm the hypothesis.",
        words: ["I", "dati", "sembrano", "confermare", "l'ipotesi."],
        translation: "The data seem to confirm the hypothesis.",
        explanation: "\"Sembrare\" + infinitive.",
      },
      { type: "multiple-choice", question: "Which version is properly hedged?", options: ["I risultati sembrerebbero indicare una relazione tra le due variabili.", "I risultati dimostrano senza ombra di dubbio la relazione.", "È ovvio che le due variabili sono collegate.", "Tutti sanno che le variabili sono collegate."], correctIndex: 0, explanation: "The conditional makes the claim cautious; the others overstate it." },
      { type: "multi-select", question: "Which expressions soften a claim? Select all that apply.", options: ["sembrerebbe", "almeno in parte", "è probabile che", "senza dubbio", "è evidente che"], correctIndexes: [0, 1, 2], explanation: "\"Senza dubbio\" and \"è evidente che\" strengthen a claim instead." },
      { type: "listen-choose", audio: "Non si può escludere che il calo dipenda in parte dalla pandemia.", question: "What does the speaker say?", options: ["The decline may partly depend on the pandemic.", "The pandemic caused the whole decline.", "The pandemic had no effect.", "There was no decline."], correctIndex: 0, explanation: "\"Non si può escludere\" + \"in parte\": a double hedge." },
      { type: "dictation", audio: "È probabile che il campione sia troppo piccolo.", explanation: "\"Campione\" (sample) and the subjunctive \"sia\"." },
      { type: "speak", text: "I dati sembrerebbero indicare un calo, ma il campione è relativamente ridotto.", prompt: "Present your finding cautiously: The data would seem to indicate a decline, but the sample is relatively small.", tip: "\"Sembrerebbero\": stress on \"-ebb-\", double b.", explanation: "Two hedges in one sentence." },
    ],
  },
];
