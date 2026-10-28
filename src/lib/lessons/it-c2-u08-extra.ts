// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c2-u08-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C2 Unit 8 Extra Practice: Advanced Idioms and Sayings, Part 3.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_C2_U08_EXTRA: Lesson[] = [
  {
    slug: "c2-idioms-3-extra-1",
    level: "IT-C2",
    number: 1,
    title: "Extra Practice: Idioms",
    summary: "Use the unit's idioms in fresh contexts: a neighbours' meeting, a job interview, a football club.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "At the condominium meeting",
        body: [
          "A scene written for this practice. \"L'amministratore, come al solito, menava il can per l'aia. Il signor Bianchi, che non paga le spese da due anni, faceva orecchie da mercante. Quando la signora del terzo piano ha parlato delle infiltrazioni, il costruttore è caduto dalle nuvole. Alla fine, per tagliare la testa al toro, abbiamo votato.\"",
        ],
        examples: [
          { es: "L'amministratore menava il can per l'aia.", en: "The building manager was beating about the bush." },
          { es: "Non paga le spese da due anni.", en: "He hasn't paid the service charges for two years." },
          { es: "Il costruttore è caduto dalle nuvole.", en: "The builder acted all surprised." },
          { es: "Per tagliare la testa al toro, abbiamo votato.", en: "To settle it once and for all, we voted." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "To settle it once and for all, we voted.", answer: "Per tagliare la testa al toro, abbiamo votato.", altAnswers: ["Per tagliare la testa al toro abbiamo votato."], explanation: "Decisive idiom." },
          { type: "listen-choose", audio: "Non paga le spese da due anni e fa orecchie da mercante.", question: "What is Mr Bianchi's behaviour?", options: ["He doesn't pay and ignores requests.", "He pays late but apologises.", "He has moved out.", "He manages the building."], correctIndex: 0, explanation: "\"Fare orecchie da mercante\"." },
        ],
      },
      {
        heading: "At work and at the stadium",
        body: [
          "Fresh lines. At an interview: \"Non ho santi in paradiso, ma ho un buon curriculum.\" About a manager: \"Cerca sempre il pelo nell'uovo, ma almeno non fa di ogni erba un fascio.\" At the stadium: \"Abbiamo vinto il derby, ma con tre squalificati: vittoria di Pirro.\" \"L'allenatore ha detto che resta, ma ha la coda di paglia.\"",
        ],
        examples: [
          { es: "Non ho santi in paradiso, ma ho un buon curriculum.", en: "I have no friends in high places, but I have a good CV." },
          { es: "Almeno non fa di ogni erba un fascio.", en: "At least she doesn't lump everyone together." },
          { es: "Abbiamo vinto il derby, ma con tre squalificati.", en: "We won the derby, but with three players suspended." },
          { es: "Ha la coda di paglia.", en: "He has a guilty conscience." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have no friends in high places, but I have a good CV.", answer: "Non ho santi in paradiso, ma ho un buon curriculum.", altAnswers: ["Non ho santi in paradiso ma ho un buon curriculum."], explanation: "\"Santi in paradiso\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's always [nitpicking].", sentence: "Cerca sempre ___.", answer: "il pelo nell'uovo", explanation: "\"Cercare il pelo nell'uovo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The building manager was beating about the bush.", answer: "L'amministratore menava il can per l'aia.", altAnswers: ["L'amministratore tergiversava.", "L'amministratore girava intorno al problema."], explanation: "\"Amministratore di condominio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The builder acted all surprised.", answer: "Il costruttore è caduto dalle nuvole.", altAnswers: ["Il costruttore cadde dalle nuvole.", "Il costruttore ha fatto finta di niente."], explanation: "Feigned surprise." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He has a guilty conscience.", answer: "Ha la coda di paglia.", altAnswers: ["Ha la coscienza sporca.", "Lui ha la coda di paglia."], explanation: "\"Coda di paglia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We won the derby, but it was a Pyrrhic victory.", answer: "Abbiamo vinto il derby, ma è stata una vittoria di Pirro.", altAnswers: ["Abbiamo vinto il derby, ma è una vittoria di Pirro."], explanation: "\"Vittoria di Pirro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She turns up at every party.", answer: "È come il prezzemolo: la trovi a ogni festa.", altAnswers: ["È come il prezzemolo.", "Non manca a nessuna festa."], explanation: "\"Come il prezzemolo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The minister had to eat humble pie.", answer: "Il ministro è dovuto andare a Canossa.", altAnswers: ["Il ministro ha dovuto andare a Canossa.", "La ministra è dovuta andare a Canossa."], explanation: "\"Andare a Canossa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [put a brave face on it].", sentence: "Ha ___.", answer: "fatto buon viso a cattivo gioco", explanation: "Fixed form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You've [made a blunder].", sentence: "Hai ___.", answer: "preso un granchio", altAnswers: ["preso lucciole per lanterne"], explanation: "\"Prendere un granchio\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "With this solution we [have it both ways].", sentence: "Con questa soluzione ___.", answer: "salviamo capra e cavoli", altAnswers: ["abbiamo salvato capra e cavoli"], explanation: "Satisfy both sides." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The meeting [was a Babel].", sentence: "La riunione ___.", answer: "era una Babele", altAnswers: ["è stata una Babele", "era una babele"], explanation: "Chaos." },
      { type: "word-order", prompt: "Put the words in order to say: He's furious today.", words: ["Oggi", "ha", "un", "diavolo", "per", "capello."], translation: "He's furious today.", altOrders: [["Ha", "un", "diavolo", "per", "capello", "oggi."]], explanation: "\"Un diavolo per capello\"." },
      { type: "matching", instructions: "Match the situation to the idiom.", pairs: [{ left: "ignoring a request", right: "fare orecchie da mercante" }, { left: "a costly win", right: "vittoria di Pirro" }, { left: "getting in free", right: "fare il portoghese" }, { left: "ending a discussion", right: "tagliare la testa al toro" }], explanation: "Idioms in context." },
      { type: "multiple-choice", question: "A colleague overreacts to a harmless joke about lateness. You suspect he's been late too. What do you say?", options: ["Hai la coda di paglia?", "Sei come il prezzemolo?", "Hai fatto il portoghese?", "Hai passato il Rubicone?"], correctIndex: 0, explanation: "Defensive guilt." },
      { type: "dictation", audio: "Alla fine, per tagliare la testa al toro, abbiamo votato.", explanation: "Narrative + idiom." },
      { type: "speak", text: "Non ho santi in paradiso, ma ho un buon curriculum.", prompt: "Say it at an interview: I have no friends in high places, but I have a good CV.", tip: "Confident, light tone.", explanation: "Self-presentation with an idiom." },
    ],
  },
  {
    slug: "c2-idioms-3-extra-2",
    level: "IT-C2",
    number: 2,
    title: "Extra Practice: Latin Phrases",
    summary: "Use Latin phrases in fresh news, office and everyday contexts.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "In the news",
        body: [
          "Invented news lines: \"Il sindaco pro tempore ha nominato una commissione ad hoc.\" \"Il contributo sarà erogato una tantum.\" \"Il decreto è stato approvato in extremis, prima della pausa estiva.\" \"Di fatto, o meglio de facto, la riforma non è mai partita.\" \"I due candidati sono arrivati ex aequo.\"",
        ],
        examples: [
          { es: "Il sindaco pro tempore ha nominato una commissione.", en: "The current mayor appointed a committee." },
          { es: "Il contributo sarà erogato una tantum.", en: "The grant will be paid as a one-off." },
          { es: "Il decreto è stato approvato in extremis.", en: "The decree was approved at the last moment." },
          { es: "La riforma, de facto, non è mai partita.", en: "The reform, in practice, never got started." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The grant will be paid as a one-off.", answer: "Il contributo sarà erogato una tantum.", altAnswers: ["Il contributo verrà erogato una tantum.", "Il contributo sarà versato una tantum."], explanation: "\"Erogare\" = to pay out (bureaucratic)." },
          { type: "listen-choose", audio: "I due candidati sono arrivati ex aequo.", question: "What was the result?", options: ["a tie", "a clear winner", "both disqualified", "a recount"], correctIndex: 0, explanation: "\"Ex aequo\"." },
        ],
      },
      {
        heading: "In everyday life",
        body: [
          "Everyday lines: \"Ti mando il curriculum stasera.\" \"Scusa, è stato un lapsus: volevo dire martedì.\" \"Lui ordina una pizza? Idem.\" \"Mi ha dato un aut aut: o il calcetto o lei.\" \"Non giudicare a priori: prima assaggia.\" \"Mio fratello è il mio alter ego.\"",
        ],
        examples: [
          { es: "Scusa, è stato un lapsus: volevo dire martedì.", en: "Sorry, slip of the tongue: I meant Tuesday." },
          { es: "Mi ha dato un aut aut.", en: "She gave me an ultimatum." },
          { es: "Non giudicare a priori: prima assaggia.", en: "Don't judge in advance: taste it first." },
          { es: "Mio fratello è il mio alter ego.", en: "My brother is my alter ego." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't judge in advance: taste it first.", answer: "Non giudicare a priori: prima assaggia.", altAnswers: ["Non giudicare a priori, prima assaggia.", "Non giudicare a priori: assaggia prima."], explanation: "\"A priori\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Sorry, [slip of the tongue]: I meant Tuesday.", sentence: "Scusa, ___: volevo dire martedì.", answer: "è stato un lapsus", altAnswers: ["un lapsus", "lapsus"], explanation: "\"Lapsus\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The current mayor appointed a special committee.", answer: "Il sindaco pro tempore ha nominato una commissione ad hoc.", altAnswers: ["La sindaca pro tempore ha nominato una commissione ad hoc.", "Il sindaco pro tempore ha nominato un comitato ad hoc."], explanation: "Two Latin phrases." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The decree was approved at the last moment.", answer: "Il decreto è stato approvato in extremis.", altAnswers: ["Il decreto è stato approvato all'ultimo momento.", "Il decreto venne approvato in extremis."], explanation: "\"In extremis\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She gave me an ultimatum.", answer: "Mi ha dato un aut aut.", altAnswers: ["Mi ha posto un aut aut.", "Mi ha dato un ultimatum."], explanation: "\"Aut aut\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll send you my CV tonight.", answer: "Ti mando il curriculum stasera.", altAnswers: ["Stasera ti mando il curriculum.", "Le mando il curriculum stasera.", "Ti mando il mio curriculum stasera."], explanation: "Present for near future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My brother is my alter ego.", answer: "Mio fratello è il mio alter ego.", explanation: "\"Alter ego\": masculine, invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The reform never got started in practice.", answer: "La riforma, de facto, non è mai partita.", altAnswers: ["Di fatto la riforma non è mai partita.", "La riforma, di fatto, non è mai partita."], explanation: "\"De facto\" or Italian \"di fatto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [tied] for second place.", sentence: "Sono arrivati secondi ___.", answer: "ex aequo", explanation: "\"Ex aequo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The accident happened [on the way to work].", sentence: "L'infortunio è avvenuto ___.", answer: "in itinere", altAnswers: ["andando al lavoro"], explanation: "\"In itinere\": legal term for commuting accidents." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's a [one-of-a-kind] solution.", sentence: "È una soluzione ___.", answer: "sui generis", explanation: "\"Sui generis\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Repetition helps]: let's revise once more.", sentence: "___: ripassiamo ancora una volta.", answer: "Repetita iuvant", explanation: "Teacher's Latin." },
      { type: "word-order", prompt: "Put the words in order to say: The quorum was not reached.", words: ["Il", "quorum", "non", "è", "stato", "raggiunto."], translation: "The quorum was not reached.", explanation: "Referendum vocabulary." },
      { type: "matching", instructions: "Match the Latin to the English.", pairs: [{ left: "pro tempore", right: "for the time being" }, { left: "a priori", right: "in advance" }, { left: "in itinere", right: "on the way" }, { left: "alter ego", right: "second self" }], explanation: "Latin phrases." },
      { type: "multiple-choice", question: "\"E dulcis in fundo, ci hanno tolto il parcheggio.\" What tone does \"dulcis in fundo\" have here?", options: ["ironic: the worst comes last", "sincere: the best comes last", "neutral: a list item", "angry: a threat"], correctIndex: 0, explanation: "Ironic use." },
      { type: "dictation", audio: "Il contributo sarà erogato una tantum entro dicembre.", explanation: "\"Erogare\": bureaucratic." },
      { type: "speak", text: "Scusate, è stato un lapsus: volevo dire martedì, non mercoledì.", prompt: "Correct yourself at a meeting: Sorry, slip of the tongue: I meant Tuesday, not Wednesday.", tip: "Light, apologetic tone.", explanation: "\"Lapsus\" in daily use." },
    ],
  },
];
