// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u14-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 14 Extra Practice: The Conditional. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U14_EXTRA: Lesson[] = [
  {
    slug: "a2-conditional-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Conditional Forms",
    summary: "Fresh sentences with regular and irregular conditionals in every person.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Would, in every person",
        body: [
          "Future stem + \"-ei, -esti, -ebbe, -emmo, -este, -ebbero\". New verbs: \"cambiare\" (to change), \"scegliere\" (to choose: \"sceglierei\"), \"spendere\" (to spend), \"tenere\" (\"terrei\"), \"vendere\" (to sell).",
        ],
        examples: [
          { es: "Cambierei colore alle pareti.", en: "I'd change the colour of the walls." },
          { es: "Quale sceglieresti?", en: "Which one would you choose?" },
          { es: "Non spenderebbero mai così tanto.", en: "They'd never spend so much." },
          { es: "Venderemmo la macchina.", en: "We'd sell the car." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Which one would you choose? (to a friend)", answer: "Quale sceglieresti?", altAnswers: ["Tu quale sceglieresti?", "Quale sceglieresti tu?"], explanation: "\"Sceglier-\" + \"-esti\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd sell the car.", answer: "Venderemmo la macchina.", altAnswers: ["Noi venderemmo la macchina."], explanation: "\"Vender-\" + \"-emmo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They'd never spend so much.", answer: "Non spenderebbero mai così tanto.", altAnswers: ["Loro non spenderebbero mai così tanto."], explanation: "\"Spender-\" + \"-ebbero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd change the colour of the walls.", answer: "Cambierei colore alle pareti.", altAnswers: ["Cambierei il colore delle pareti."], explanation: "\"Cambiare\" → \"cambier-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you keep the dog? (to a friend)", answer: "Terresti il cane?", altAnswers: ["Tu terresti il cane?"], explanation: "\"Tenere\" → \"terr-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She'd be happy.", answer: "Sarebbe contenta.", altAnswers: ["Lei sarebbe contenta.", "Sarebbe felice."], explanation: "\"Sarebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd have more time.", answer: "Avremmo più tempo.", altAnswers: ["Noi avremmo più tempo."], explanation: "\"Avremmo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you go by car? (to friends)", answer: "Andreste in macchina?", altAnswers: ["Voi andreste in macchina?"], explanation: "\"Andr-\" + \"-este\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He'd play tennis every day.", answer: "Giocherebbe a tennis ogni giorno.", altAnswers: ["Giocherebbe a tennis tutti i giorni."], explanation: "h: \"giocher-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd stay here.", answer: "Rimarrei qui.", altAnswers: ["Resterei qui.", "Starei qui.", "Rimarrei qua."], explanation: "\"Rimarr-\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd eat] something light.", sentence: "___ qualcosa di leggero.", answer: "Mangerei", explanation: "\"Manger-\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you see] that film? (to friends)", sentence: "___ quel film?", answer: "Vedreste", explanation: "\"Vedr-\" + \"-este\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[They'd know] the way.", sentence: "___ la strada.", answer: "Saprebbero", explanation: "\"Sapr-\" + \"-ebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[She would come] with us.", sentence: "___ con noi.", answer: "Verrebbe", explanation: "\"Verr-\" + \"-ebbe\"." },
      { type: "listen-choose", audio: "Sceglieremmo il menù del giorno.", question: "What did you hear?", options: ["sceglieremmo (we'd choose)", "sceglieremo (we'll choose)", "scegliamo (we choose)", "sceglierei (I'd choose)"], correctIndex: 0, explanation: "Long m: conditional." },
      { type: "dictation", audio: "Venderemmo la casa e andremmo al mare.", explanation: "Two \"-emmo\" forms." },
      { type: "speak", text: "Con un milione di euro cambierei casa e viaggerei per un anno.", prompt: "Say it in Italian: With a million euros I'd move house and travel for a year.", tip: "\"Milione\": mi-LIO-ne.", explanation: "\"Cambierei\", \"viaggerei\"." },
    ],
  },
  {
    slug: "a2-conditional-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Requests and Advice",
    summary: "Fresh situations for polite requests and advice.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Ask and advise",
        body: [
          "Requests: \"vorrei\", \"potrei\", \"potresti / potrebbe\", \"ti / Le dispiacerebbe\". Advice: \"dovresti / dovrebbe\", \"al tuo / Suo posto\" + conditional, \"faresti meglio a\", \"sarebbe meglio\".",
        ],
        examples: [
          { es: "Potrebbe chiamarmi un taxi?", en: "Could you call me a taxi?" },
          { es: "Ti dispiacerebbe abbassare la musica?", en: "Would you mind turning the music down?" },
          { es: "Dovrebbe portare il certificato.", en: "You should bring the certificate." },
          { es: "Sarebbe meglio non uscire.", en: "It would be better not to go out." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you call me a taxi? (at hotel reception)", answer: "Potrebbe chiamarmi un taxi?", altAnswers: ["Mi potrebbe chiamare un taxi?"], explanation: "Lei: \"potrebbe\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you mind turning the music down? (to a flatmate)", answer: "Ti dispiacerebbe abbassare la musica?", altAnswers: ["Ti dispiace abbassare la musica?"], explanation: "\"Ti dispiacerebbe\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should bring the certificate. (to a client)", answer: "Dovrebbe portare il certificato.", explanation: "Lei: \"dovrebbe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be better not to go out.", answer: "Sarebbe meglio non uscire.", explanation: "\"Sarebbe meglio\" + \"non\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could I try this jacket on?", answer: "Potrei provare questa giacca?", altAnswers: ["Posso provare questa giacca?"], explanation: "\"Potrei\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were you I'd book now. (to a friend)", answer: "Al tuo posto prenoterei adesso.", altAnswers: ["Al tuo posto prenoterei subito.", "Al posto tuo prenoterei adesso.", "Al tuo posto prenoterei ora."], explanation: "\"Al tuo posto\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You'd better call your mother. (to a friend)", answer: "Faresti meglio a chiamare tua madre.", altAnswers: ["Faresti meglio a chiamare tua mamma."], explanation: "\"Faresti meglio a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Would you have a pen? (to a stranger)", answer: "Avrebbe una penna?", altAnswers: ["Scusi, avrebbe una penna?"], explanation: "\"Avrebbe\" for Lei." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You shouldn't drink so much coffee. (to a friend)", answer: "Non dovresti bere così tanto caffè.", altAnswers: ["Non dovresti bere tanto caffè."], explanation: "\"Non dovresti\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Would you mind] waiting a moment? (to a customer)", sentence: "___ aspettare un momento?", answer: "Le dispiacerebbe", altAnswers: ["Le dispiace"], explanation: "\"Le\" for Lei." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could you] lend me your bike? (to a friend)", sentence: "___ prestarmi la bici?", answer: "Potresti", explanation: "\"Potresti\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We should] leave now.", sentence: "___ andare adesso.", answer: "Dovremmo", explanation: "\"Dovremmo\": double m." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'd like] the bill, please.", sentence: "___ il conto, per favore.", answer: "Vorrei", explanation: "\"Vorrei\" + noun." },
      { type: "multiple-choice", question: "Your colleague (Lei) looks pale. What do you say?", options: ["Dovrebbe andare a casa.", "Dovresti andare a casa.", "Dovrebbi andare a casa.", "Deve andare a casa!"], correctIndex: 0, explanation: "Lei + advice: \"dovrebbe\"." },
      { type: "listen-choose", audio: "Le dispiacerebbe spegnere la sigaretta?", question: "What is being asked?", options: ["Would you mind putting out your cigarette?", "Would you like a cigarette?", "Do you mind if I smoke?", "Could you light my cigarette?"], correctIndex: 0, explanation: "\"Spegnere\" = to put out." },
      { type: "dictation", audio: "Al tuo posto non direi niente.", explanation: "\"Direi\": conditional of \"dire\"." },
      { type: "speak", text: "Scusi, Le dispiacerebbe abbassare la voce? Mio figlio dorme.", prompt: "On the train, say politely in Italian: Excuse me, would you mind lowering your voice? My son is sleeping.", tip: "di-spia-ce-REB-be: stress near the end.", explanation: "The most courteous request." },
    ],
  },
  {
    slug: "a2-conditional-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: -emmo or -emo?",
    summary: "Listen for the double m that marks the conditional, and spell it right.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Hold the m",
        body: [
          "\"-emmo\" = would (conditional); \"-emo\" = will (future). Listen for the length of the m and for clues: \"ma\", \"volentieri\", a request → conditional; a date or \"domani\" → future.",
        ],
        examples: [
          { es: "Torneremo presto.", en: "We'll be back soon." },
          { es: "Torneremmo, ma è troppo lontano.", en: "We'd come back, but it's too far." },
          { es: "Usciremo alle otto.", en: "We'll go out at eight." },
          { es: "Usciremmo, ma piove.", en: "We'd go out, but it's raining." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Usciremmo, ma piove.", question: "What did you hear?", options: ["usciremmo (we'd go out)", "usciremo (we'll go out)", "usciamo (we go out)", "uscivamo (we used to go out)"], correctIndex: 0, explanation: "Long m + \"ma\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll be back soon.", answer: "Torneremo presto.", altAnswers: ["Noi torneremo presto.", "Torniamo presto."], explanation: "Future: single m." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Torneremo a giugno.", question: "What did you hear?", options: ["torneremo (we'll come back)", "torneremmo (we'd come back)", "torniamo (we come back)", "tornavamo (we used to come back)"], correctIndex: 0, explanation: "Short m + a date: future." },
      { type: "listen-choose", audio: "Compreremmo una casa più grande.", question: "What did you hear?", options: ["compreremmo (we'd buy)", "compreremo (we'll buy)", "compriamo (we buy)", "compravamo (we used to buy)"], correctIndex: 0, explanation: "Long m: conditional." },
      { type: "dictation", audio: "Usciremo alle otto.", explanation: "Future: \"-emo\"." },
      { type: "dictation", audio: "Usciremmo, ma piove.", explanation: "Conditional: \"-emmo\"." },
      { type: "dictation", audio: "Vorremmo due caffè, per favore.", explanation: "Polite request: conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd come back, but it's too far.", answer: "Torneremmo, ma è troppo lontano.", explanation: "Conditional: \"torneremmo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll buy a bigger house.", answer: "Compreremo una casa più grande.", altAnswers: ["Noi compreremo una casa più grande."], explanation: "Future: \"compreremo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd buy a bigger house.", answer: "Compreremmo una casa più grande.", altAnswers: ["Noi compreremmo una casa più grande."], explanation: "Conditional: \"compreremmo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll be there at nine.", answer: "Saremo lì alle nove.", altAnswers: ["Alle nove saremo lì.", "Saremo là alle nove."], explanation: "Future: \"saremo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'd be there at nine, but the train is late.", answer: "Saremmo lì alle nove, ma il treno è in ritardo.", explanation: "Conditional: \"saremmo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We'll do] it tomorrow.", sentence: "Lo ___ domani.", answer: "faremo", explanation: "Future: \"faremo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We'd do] it, but we haven't got time.", sentence: "Lo ___, ma non abbiamo tempo.", answer: "faremmo", explanation: "Conditional: \"faremmo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Could we] change table?", sentence: "___ cambiare tavolo?", answer: "Potremmo", explanation: "Polite request: \"potremmo\"." },
      { type: "speak", text: "Saremmo felici di venire. Arriveremo alle otto.", prompt: "Reply to an invitation in Italian: We'd be happy to come. We'll arrive at eight.", tip: "sa-REM-mo with a long m, then ar-ri-ve-RE-mo with a short one.", explanation: "Conditional, then future." },
    ],
  },
];
