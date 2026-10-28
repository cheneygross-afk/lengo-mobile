// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u17-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 17 Extra Practice: Time and Duration. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U17_EXTRA: Lesson[] = [
  {
    slug: "a2-time-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Da and Fa",
    summary: "Fresh sentences contrasting da with the present and fa with the past.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Since, for, ago",
        body: [
          "Still true: present + \"da\" + time or starting point. Ago: past + time + \"fa\". \"Da quanto tempo ...?\" vs \"Quanto tempo fa ...?\".",
        ],
        examples: [
          { es: "Ho la patente da dieci anni.", en: "I've had my driving licence for ten years." },
          { es: "Ho preso la patente dieci anni fa.", en: "I got my driving licence ten years ago." },
          { es: "Non mangio carne da due anni.", en: "I haven't eaten meat for two years." },
          { es: "Ho smesso di mangiare carne due anni fa.", en: "I stopped eating meat two years ago." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had my driving licence for ten years.", answer: "Ho la patente da dieci anni.", explanation: "Present + \"da\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got my driving licence ten years ago.", answer: "Ho preso la patente dieci anni fa.", explanation: "Past + \"fa\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't eaten meat for two years.", answer: "Non mangio carne da due anni.", altAnswers: ["Non mangio la carne da due anni."], explanation: "Present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I stopped eating meat two years ago.", answer: "Ho smesso di mangiare carne due anni fa.", altAnswers: ["Due anni fa ho smesso di mangiare carne."], explanation: "Past + \"fa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They've been married since 2010.", answer: "Sono sposati dal 2010.", explanation: "\"Dal\" + year." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They got married in 2010, fifteen years ago.", answer: "Si sono sposati nel 2010, quindici anni fa.", explanation: "\"Fa\" after." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long have you had a dog? (to a friend)", answer: "Da quanto tempo hai un cane?", altAnswers: ["Da quanto hai un cane?"], explanation: "\"Da quanto tempo\" + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long ago did you buy it? (the dog, to a friend)", answer: "Quanto tempo fa l'hai preso?", altAnswers: ["Quanto tempo fa l'hai comprato?"], explanation: "\"Quanto tempo fa\" + past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been feeling tired for a week.", answer: "Mi sento stanco da una settimana.", altAnswers: ["Mi sento stanca da una settimana.", "Sono stanco da una settimana.", "Sono stanca da una settimana."], explanation: "Present + \"da\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I phoned her [a week ago].", sentence: "L'ho chiamata ___.", answer: "una settimana fa", explanation: "\"Fa\" after." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We haven't heard from each other] for months.", sentence: "___ da mesi.", answer: "Non ci sentiamo", explanation: "Present + \"da\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shop has been closed [since August].", sentence: "Il negozio è chiuso ___.", answer: "da agosto", explanation: "\"Da\" + month." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The shop closed [three months ago].", sentence: "Il negozio ha chiuso ___.", answer: "tre mesi fa", explanation: "\"Fa\" after." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've been living] alone since March.", sentence: "___ da sola da marzo.", answer: "Vivo", altAnswers: ["Abito"], explanation: "Present." },
      { type: "multiple-choice", question: "\"Da quanto tempo sei in Italia?\" Which answer fits?", options: ["Da tre settimane.", "Tre settimane fa.", "Tra tre settimane.", "Per tre settimane fa."], correctIndex: 0, explanation: "\"Da quanto\" → \"da\"." },
      { type: "listen-choose", audio: "Sono arrivata in Italia un mese fa.", question: "When did she arrive?", options: ["a month ago", "for a month", "in a month", "every month"], correctIndex: 0, explanation: "\"Un mese fa\"." },
      { type: "dictation", audio: "Sono in Italia da un mese, sono arrivata un mese fa.", explanation: "\"Da\" vs \"fa\"." },
      { type: "speak", text: "Non fumo da cinque anni: ho smesso cinque anni fa, il primo gennaio!", prompt: "Say it in Italian: I haven't smoked for five years: I stopped five years ago, on the first of January!", tip: "\"Smesso\": hold the double s.", explanation: "\"Da\" and \"fa\" for the same story." },
    ],
  },
  {
    slug: "a2-time-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Stare + Gerund",
    summary: "Fresh sentences with stare + gerund and stare per, present and past.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "In the middle of it",
        body: [
          "\"Sto\" + gerund = right now; \"stavo\" + gerund = I was in the middle of; \"sto per\" + infinitive = I'm about to. Pronouns before \"stare\": \"lo sto facendo\".",
        ],
        examples: [
          { es: "Sto traducendo un documento.", en: "I'm translating a document." },
          { es: "Stavamo per ordinare.", en: "We were about to order." },
          { es: "Lo stai leggendo?", en: "Are you reading it?" },
          { es: "Si stava addormentando.", en: "He was falling asleep." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We were about to order.", answer: "Stavamo per ordinare.", explanation: "\"Stavamo per\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you reading it? (the book, to a friend)", answer: "Lo stai leggendo?", altAnswers: ["Stai leggendolo?", "Lo leggi?"], explanation: "Pronoun before \"stai\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm translating a document.", answer: "Sto traducendo un documento.", explanation: "\"Tradurre\" → \"traducendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He was falling asleep.", answer: "Si stava addormentando.", altAnswers: ["Stava addormentandosi."], explanation: "Reflexive pronoun before \"stava\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The shop is about to close.", answer: "Il negozio sta per chiudere.", explanation: "\"Sta per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What were you thinking? (to a friend)", answer: "Cosa stavi pensando?", altAnswers: ["Che cosa stavi pensando?", "A cosa stavi pensando?", "Cosa pensavi?"], explanation: "\"Stavi pensando\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're painting the kitchen.", answer: "Stiamo dipingendo la cucina.", altAnswers: ["Stiamo pitturando la cucina."], explanation: "\"Dipingere\" → \"dipingendo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was about to say the same thing!", answer: "Stavo per dire la stessa cosa!", explanation: "\"Stavo per dire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who are you talking to? (to a friend)", answer: "Con chi stai parlando?", altAnswers: ["Con chi parli?"], explanation: "\"Con chi\" first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[She's having] a shower.", sentence: "___ la doccia.", answer: "Sta facendo", explanation: "\"Fare la doccia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[The baby is about to] wake up.", sentence: "___ svegliarsi.", answer: "Il bambino sta per", explanation: "\"Sta per\" + reflexive infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm drinking] a herbal tea.", sentence: "___ una tisana.", answer: "Sto bevendo", explanation: "\"Bevendo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We were saying goodbye] when the bus arrived.", sentence: "Ci ___ quando è arrivato l'autobus.", answer: "stavamo salutando", explanation: "\"Ci\" before \"stavamo\", then the gerund \"salutando\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'm doing it], be patient!", sentence: "___, abbi pazienza!", answer: "Lo sto facendo", altAnswers: ["Sto facendolo"], explanation: "Pronoun + \"sto\" + gerund." },
      { type: "multiple-choice", question: "\"Stavo per uscire\" means ...", options: ["I was about to go out.", "I was going out.", "I went out.", "I'm going out."], correctIndex: 0, explanation: "\"Stavo per\" = was about to." },
      { type: "listen-choose", audio: "Si stava addormentando sul divano.", question: "What was he doing?", options: ["falling asleep on the sofa", "getting up from the sofa", "sitting on the sofa", "cleaning the sofa"], correctIndex: 0, explanation: "\"Addormentarsi\" = to fall asleep." },
      { type: "dictation", audio: "Sto traducendo e sto per finire.", explanation: "Gerund and \"sto per\"." },
      { type: "speak", text: "Non posso adesso: sto facendo la doccia e sto per uscire.", prompt: "Say it in Italian: I can't right now: I'm having a shower and I'm about to go out.", tip: "\"Doccia\": DOC-cia, hold the double c.", explanation: "Progressive and \"stare per\"." },
    ],
  },
  {
    slug: "a2-time-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: How Long?",
    summary: "Fresh questions and answers about how long, how long ago and when.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Questions about time",
        body: [
          "\"Da quanto tempo?\" (how long, still going on), \"Quanto tempo fa?\" (how long ago), \"Per quanto tempo?\" (for how long, finished), \"Tra quanto?\" (in how long), \"Quanto ci metti?\" (how long does it take you).",
        ],
        examples: [
          { es: "Per quanto tempo hai vissuto a Parigi?", en: "How long did you live in Paris?" },
          { es: "Tra quanto arrivi?", en: "How soon will you be here?" },
          { es: "Da quanto tempo vi conoscete?", en: "How long have you known each other?" },
          { es: "Quanto tempo fa è successo?", en: "How long ago did it happen?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long did you live in Paris? (to a friend)", answer: "Per quanto tempo hai vissuto a Parigi?", altAnswers: ["Quanto tempo hai vissuto a Parigi?", "Per quanto tempo hai abitato a Parigi?"], explanation: "Finished → \"per quanto tempo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How soon will you be here? (to a friend)", answer: "Tra quanto arrivi?", altAnswers: ["Fra quanto arrivi?"], explanation: "\"Tra quanto\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long have you known each other? (to a couple)", answer: "Da quanto tempo vi conoscete?", altAnswers: ["Da quanto vi conoscete?"], explanation: "Still true → \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long ago did it happen?", answer: "Quanto tempo fa è successo?", explanation: "\"Quanto tempo fa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've known each other for twelve years.", answer: "Ci conosciamo da dodici anni.", explanation: "Present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It happened two days ago.", answer: "È successo due giorni fa.", explanation: "Past + \"fa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll be there in twenty minutes.", answer: "Arrivo tra venti minuti.", altAnswers: ["Arrivo fra venti minuti."], explanation: "\"Tra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I lived in Paris for four years.", answer: "Ho vissuto a Parigi per quattro anni.", altAnswers: ["Ho abitato a Parigi per quattro anni.", "Ho vissuto a Parigi quattro anni."], explanation: "\"Per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take you to get home? (to a friend)", answer: "Quanto ci metti per tornare a casa?", altAnswers: ["Quanto ci metti a tornare a casa?", "Quanto tempo ci metti per tornare a casa?"], explanation: "\"Metterci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[How long have you been] in Italy? (to a friend)", sentence: "___ in Italia?", answer: "Da quanto tempo sei", altAnswers: ["Da quanto sei"], explanation: "\"Da quanto tempo\" + present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[How long ago] did you arrive? (to a friend)", sentence: "___ sei arrivato?", answer: "Quanto tempo fa", explanation: "\"Quanto tempo fa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[For how long] did you study it?", sentence: "___ l'hai studiato?", answer: "Per quanto tempo", explanation: "Finished period." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It takes me [twenty minutes].", sentence: "Ci metto ___.", answer: "venti minuti", explanation: "\"Metterci\" + time." },
      { type: "matching", instructions: "Match each question to its answer.", pairs: [{ left: "Da quanto tempo sei qui?", right: "For an hour." }, { left: "Quanto tempo fa sei arrivato?", right: "An hour ago." }, { left: "Tra quanto parti?", right: "In an hour." }, { left: "Per quanto tempo hai dormito?", right: "For eight hours." }], explanation: "Each question word has its own time answer." },
      { type: "listen-choose", audio: "Tra quanto arrivi? Tra dieci minuti.", question: "When will the friend arrive?", options: ["in ten minutes", "ten minutes ago", "for ten minutes", "at ten"], correctIndex: 0, explanation: "\"Tra dieci minuti\"." },
      { type: "dictation", audio: "Da quanto tempo vi conoscete? Da dodici anni.", explanation: "\"Da\" twice." },
      { type: "speak", text: "Sono in Italia da tre mesi. Sono arrivato a settembre e tra due settimane torno a casa.", prompt: "Say it in Italian: I've been in Italy for three months. I arrived in September and in two weeks I'm going back home.", tip: "Three time words: da, a, tra.", explanation: "Present + \"da\", past, \"tra\"." },
    ],
  },
];
