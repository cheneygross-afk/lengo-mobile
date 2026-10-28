// Synced from cheneygross-afk/lengo:src/lib/lessons/it-c1-u09-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian C1 Unit 9 Extra Practice: Idioms and Proverbs. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_C1_U09_EXTRA: Lesson[] = [
  {
    slug: "c1-idioms-extra-1",
    level: "IT-C1",
    number: 1,
    title: "Extra Practice: Proverbs",
    summary: "Fresh situations in which to use the unit's proverbs, in full or in half.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Which proverb fits?",
        body: [
          "Each item describes a situation; answer with the proverb that comments on it. In conversation you may quote only the first half, followed by dots; in writing, give the whole proverb unless the prompt says otherwise.",
        ],
        examples: [
          { es: "Si è alzato alle cinque e ha trovato posto: il mattino ha l'oro in bocca.", en: "He got up at five and found a seat: the early bird catches the worm." },
          { es: "Sembrava un turista, invece era il direttore: l'abito non fa il monaco.", en: "He looked like a tourist, but he was the director: don't judge by appearances." },
          { es: "Ha accettato la prima offerta: meglio un uovo oggi che una gallina domani.", en: "She accepted the first offer: a bird in the hand is worth two in the bush." },
          { es: "Ha fatto lo scherzo a tutti, e ora lo fanno a lui: chi la fa l'aspetti.", en: "He played tricks on everyone, and now they're playing one on him: what goes around comes around." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "He looked like a tourist, but he was the director: don't judge by appearances.", answer: "Sembrava un turista, invece era il direttore: l'abito non fa il monaco.", explanation: "Appearances deceive." },
          { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "She accepted the first offer: a bird in the hand is worth two in the bush.", answer: "Ha accettato la prima offerta: meglio un uovo oggi che una gallina domani.", explanation: "Sure and small beats big and uncertain." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "He got up at five and found a seat: the early bird catches the worm.", answer: "Si è alzato alle cinque e ha trovato posto: il mattino ha l'oro in bocca.", explanation: "Morning gold." },
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "He played tricks on everyone, and now they're playing one on him: what goes around comes around.", answer: "Ha fatto lo scherzo a tutti, e ora lo fanno a lui: chi la fa l'aspetti.", altAnswers: ["Ha fatto scherzi a tutti, e ora lo fanno a lui: chi la fa l'aspetti."], explanation: "Payback proverb." },
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "Everyone wants to renovate the station, but it's easier said than done.", answer: "Tutti vogliono rinnovare la stazione, ma tra il dire e il fare c'è di mezzo il mare.", altAnswers: ["Tutti vogliono ristrutturare la stazione, ma tra il dire e il fare c'è di mezzo il mare."], explanation: "Saying versus doing." },
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "She waited too long and the apartment was sold: you snooze, you lose.", answer: "Ha aspettato troppo e l'appartamento è stato venduto: chi dorme non piglia pesci.", explanation: "Missed chance." },
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "He studies a little every day and never panics: slow and steady wins the race.", answer: "Studia un po' ogni giorno e non va mai nel panico: chi va piano va sano e va lontano.", explanation: "Steady progress." },
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "The soufflé didn't rise. Oh well, things don't always turn out right.", answer: "Il soufflé non è lievitato. Pazienza, non tutte le ciambelle riescono col buco.", altAnswers: ["Il soufflé non si è gonfiato. Pazienza, non tutte le ciambelle riescono col buco.", "Il soufflé non è cresciuto. Pazienza, non tutte le ciambelle riescono col buco."], explanation: "Consolation." },
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "Second flat tire this week: things come in threes.", answer: "Seconda gomma bucata questa settimana: non c'è due senza tre.", altAnswers: ["Secondo pneumatico bucato questa settimana: non c'è due senza tre."], explanation: "Superstitious joke." },
      { type: "translate", direction: "en-es", prompt: "Give the proverb that fits.", source: "Marta helped me move in the rain: a true friend is a treasure.", answer: "Marta mi ha aiutato a traslocare sotto la pioggia: chi trova un amico trova un tesoro.", altAnswers: ["Marta mi ha aiutata a traslocare sotto la pioggia: chi trova un amico trova un tesoro."], explanation: "Friendship." },
      { type: "fill-blank", prompt: "Write the first half of the proverb.", en: "Well, [slow and steady]...", sentence: "Eh, ___...", answer: "chi va piano", explanation: "Half a proverb in conversation." },
      { type: "fill-blank", prompt: "Write the second half of the proverb.", en: "Between saying and doing, [the sea lies in between].", sentence: "Tra il dire e il fare ___.", answer: "c'è di mezzo il mare", explanation: "Completing the proverb." },
      { type: "fill-blank", prompt: "Write the second half of the proverb.", en: "Whoever finds a friend [finds a treasure].", sentence: "Chi trova un amico ___.", answer: "trova un tesoro", explanation: "Completing the proverb." },
      { type: "fill-blank", prompt: "Write the second half of the proverb.", en: "Not every ring cake [comes out with a hole].", sentence: "Non tutte le ciambelle ___.", answer: "riescono col buco", altAnswers: ["riescono con il buco"], explanation: "Completing the proverb." },
      { type: "multiple-choice", question: "Your colleague arrived first and got the best desk. Which proverb fits?", options: ["Il mattino ha l'oro in bocca.", "L'abito non fa il monaco.", "Chi la fa l'aspetti.", "Non c'è due senza tre."], correctIndex: 0, explanation: "Early rewards." },
      { type: "listen-choose", audio: "Ho rifiutato il lavoro aspettando di meglio, e adesso niente. Aveva ragione la nonna: meglio un uovo oggi...", question: "What does the speaker regret?", options: ["Refusing a sure job while waiting for a better one", "Accepting a bad job", "Eating eggs", "Getting up late"], correctIndex: 0, explanation: "Half a proverb as regret." },
      { type: "dictation", audio: "Chi va piano va sano e va lontano.", explanation: "Slow and steady." },
      { type: "speak", text: "Sembrava un turista, invece era il nuovo direttore. Eh, l'abito non fa il monaco!", prompt: "Tell the story: He looked like a tourist, but he was the new director. Well, don't judge by appearances!", tip: "Surprise in the first sentence, wisdom in the second.", explanation: "Proverb as a comment." },
    ],
  },
  {
    slug: "c1-idioms-extra-2",
    level: "IT-C1",
    number: 2,
    title: "Extra Practice: Idioms",
    summary: "Fresh contexts for animal, color and verb idioms, conjugated to fit.",
    duration: "20 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Idioms in the office",
        body: [
          "The sentences come from an invented office in Milano over one busy week. Put each idiom into the right tense and person; watch agreement with \"essere\" (\"è cascata dalle nuvole\") and pronouns (\"mi ha dato buca\").",
        ],
        examples: [
          { es: "Il nuovo stagista è una lumaca.", en: "The new intern is painfully slow." },
          { es: "La riunione è andata a vuoto: c'erano quattro gatti.", en: "The meeting was pointless: hardly anyone came." },
          { es: "Il direttore ci ha dato carta bianca.", en: "The director gave us a free hand." },
          { es: "Venerdì facciamo tutti il ponte.", en: "On Friday we're all taking the day off." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "The new intern is painfully slow.", answer: "Il nuovo stagista è una lumaca.", altAnswers: ["La nuova stagista è una lumaca."], explanation: "\"Essere una lumaca\"." },
          { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "The director gave us a free hand.", answer: "Il direttore ci ha dato carta bianca.", altAnswers: ["La direttrice ci ha dato carta bianca."], explanation: "\"Dare carta bianca\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "On Friday we're all taking the day off.", answer: "Venerdì facciamo tutti il ponte.", explanation: "\"Fare il ponte\"." },
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "Our manager remembers everything: she has a memory like an elephant.", answer: "La nostra responsabile ricorda tutto: ha una memoria da elefante.", altAnswers: ["La nostra manager ricorda tutto: ha una memoria da elefante.", "La nostra responsabile si ricorda tutto: ha una memoria da elefante."], explanation: "\"Memoria da elefante\"." },
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "At the Christmas party Paolo had too much to drink.", answer: "Alla festa di Natale Paolo ha alzato il gomito.", altAnswers: ["Alla festa di Natale Paolo ha alzato un po' il gomito."], explanation: "\"Alzare il gomito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "When she heard about the merger, she was flabbergasted.", answer: "Quando ha saputo della fusione, è cascata dalle nuvole.", altAnswers: ["Quando ha saputo della fusione, è caduta dalle nuvole."], explanation: "Feminine agreement." },
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "The client stood us up.", answer: "Il cliente ci ha dato buca.", altAnswers: ["La cliente ci ha dato buca."], explanation: "\"Dare buca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "The company is in the red.", answer: "L'azienda è in rosso.", altAnswers: ["La società è in rosso."], explanation: "\"In rosso\"." },
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "I didn't sleep a wink before the presentation.", answer: "Ho passato la notte in bianco prima della presentazione.", explanation: "\"In bianco\"." },
      { type: "translate", direction: "en-es", prompt: "Translate with an idiom.", source: "At the conference I felt like a fish out of water.", answer: "Al convegno mi sentivo un pesce fuor d'acqua.", altAnswers: ["Al convegno mi sentivo come un pesce fuor d'acqua.", "Alla conferenza mi sentivo un pesce fuor d'acqua."], explanation: "\"Pesce fuor d'acqua\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At six o'clock everyone [sneaked off].", sentence: "Alle sei tutti hanno ___.", answer: "tagliato la corda", explanation: "\"Tagliare la corda\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "With this plan we [keep everyone happy].", sentence: "Con questo piano ___.", answer: "salviamo capra e cavoli", explanation: "Goat and cabbages." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Stop [beating around the bush].", sentence: "Smettila di ___.", answer: "menare il can per l'aia", explanation: "Dog and threshing floor." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [got completely the wrong idea].", sentence: "Ha ___.", answer: "preso lucciole per lanterne", explanation: "Fireflies and lanterns." },
      {
        type: "matching",
        instructions: "Match the idiom to its meaning.",
        pairs: [
          { left: "salvare capra e cavoli", right: "to keep everyone happy" },
          { left: "fare orecchie da mercante", right: "to pretend not to hear" },
          { left: "essere una volpe", right: "to be sly" },
          { left: "avere una fifa blu", right: "to be terrified" },
          { left: "piantare in asso", right: "to leave in the lurch" },
        ],
        explanation: "Mixed idioms.",
      },
      { type: "listen-choose", audio: "Alla riunione di lunedì c'erano quattro gatti: metà ufficio aveva fatto il ponte.", question: "Why was the meeting almost empty?", options: ["Half the office had taken a long weekend.", "There was a strike.", "The meeting was canceled.", "Everyone was ill."], correctIndex: 0, explanation: "\"Quattro gatti\" + \"fare il ponte\"." },
      { type: "dictation", audio: "Il direttore ci ha dato carta bianca.", explanation: "\"Carta bianca\" = a free hand." },
      { type: "speak", text: "Il cliente ci ha dato buca, l'azienda è in rosso e il capo è di umore nero. Che settimana!", prompt: "Sum up the week: The client stood us up, the company is in the red and the boss is in a foul mood. What a week!", tip: "Three idioms; end with an exclamation.", explanation: "Office idioms." },
    ],
  },
];
