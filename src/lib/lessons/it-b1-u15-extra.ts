// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u15-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 15 Extra Practice: "If" Sentences, Part 1: Real
// Conditions. Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B1_U15_EXTRA: Lesson[] = [
  {
    slug: "b1-real-if-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Se + Present",
    summary: "Fresh real conditions with se + present and a present or a command.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "If this, then that",
        body: [
          "\"Se\" + present indicative, then a present (habit or near plan) or an imperative (advice). No subjunctive, no conditional.",
        ],
        examples: [
          { es: "Se esco tardi dall'ufficio, prendo un taxi.", en: "If I leave the office late, I take a taxi." },
          { es: "Se hai mal di testa, prendi un'aspirina.", en: "If you have a headache, take an aspirin." },
          { es: "Se la pasta è scotta, non la mangio.", en: "If the pasta is overcooked, I don't eat it." },
          { es: "Se volete, vi accompagno io.", en: "If you like, I'll take you. (plural)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you have a headache, take an aspirin. (to a friend)", answer: "Se hai mal di testa, prendi un'aspirina.", altAnswers: ["Prendi un'aspirina se hai mal di testa."], explanation: "\"Avere mal di testa\"; \"un'aspirina\" with an apostrophe." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the pasta is overcooked, I don't eat it.", answer: "Se la pasta è scotta, non la mangio.", altAnswers: ["Non mangio la pasta se è scotta."], explanation: "\"Scotto\" = overcooked; \"la\" for the pasta." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I leave the office late, I take a taxi.", answer: "Se esco tardi dall'ufficio, prendo un taxi.", altAnswers: ["Se esco tardi dall'ufficio prendo un taxi.", "Prendo un taxi se esco tardi dall'ufficio."], explanation: "A habit: present + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you like, I'll take you. (plural)", answer: "Se volete, vi accompagno io.", altAnswers: ["Se volete, vi accompagno.", "Vi accompagno io, se volete."], explanation: "\"Accompagnare\" = to take, go with someone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it's too expensive, we won't buy it.", answer: "Se è troppo caro, non lo compriamo.", altAnswers: ["Se costa troppo, non lo compriamo.", "Se è troppo cara, non la compriamo."], explanation: "Present for a near decision." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you don't understand, ask the teacher. (to a friend)", answer: "Se non capisci, chiedi all'insegnante.", altAnswers: ["Se non capisci, chiedi al professore.", "Se non capisci, chiedi alla professoressa."], explanation: "\"Chiedere a\" + person." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If he's not at home, I'll leave the package with the neighbor.", answer: "Se non è a casa, lascio il pacco alla vicina.", altAnswers: ["Se non è a casa, lascio il pacco al vicino.", "Se non è in casa, lascio il pacco al vicino.", "Se non è in casa, lascio il pacco alla vicina."], explanation: "\"Lasciare a\" = to leave with someone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're in a hurry, go ahead. (polite)", answer: "Se ha fretta, passi pure.", altAnswers: ["Se ha fretta, vada pure.", "Passi pure, se ha fretta."], explanation: "\"Avere fretta\" = to be in a hurry; \"Lei\" command + \"pure\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you add some lemon, [it tastes] better.", sentence: "Se aggiungi un po' di limone, ___ più buono.", answer: "è", altAnswers: ["viene"], explanation: "A general truth: present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you're sleepy], go to bed. (to a friend)", sentence: "___, vai a letto.", answer: "Se hai sonno", explanation: "\"Avere sonno\" = to be sleepy." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you see a pharmacy, [stop]. (to a friend)", sentence: "Se vedi una farmacia, ___.", answer: "fermati", explanation: "Reflexive \"tu\" command." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If the café is closed, [we'll have coffee] at home.", sentence: "Se il bar è chiuso, ___ a casa.", answer: "prendiamo il caffè", altAnswers: ["beviamo il caffè", "facciamo il caffè"], explanation: "Near plan: present." },
      { type: "word-order", prompt: "Put the words in order to say: If you have any doubts, ask me.", words: ["Se", "hai", "dubbi,", "chiedimi", "pure."], translation: "If you have any doubts, ask me.", explanation: "\"Pure\" softens the command." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Se hai tempo, leggi questo articolo.", "Se abbia tempo, leggi questo articolo.", "Se avresti tempo, leggi questo articolo.", "Se hai tempo, leggeresti questo articolo."], correctIndex: 0, explanation: "Present indicative + imperative." },
      { type: "listen-choose", audio: "Se ti annoi, vieni da noi.", question: "What does it mean?", options: ["If you're bored, come over to our place.", "If you come over, you'll be bored.", "If we're bored, we'll come to you.", "You're bored, so we'll come."], correctIndex: 0, explanation: "\"Annoiarsi\" = to get bored; \"da noi\" = to our place." },
      { type: "dictation", audio: "Se fa bel tempo, pranziamo in terrazza.", explanation: "Present + present." },
      { type: "speak", text: "Se hai freddo, chiudi la finestra; se hai caldo, accendi il ventilatore.", prompt: "Say it in Italian: If you're cold, close the window; if you're hot, turn on the fan.", tip: "\"Ventilatore\": stress on TO, ven-ti-la-TO-re.", explanation: "Two conditions with \"avere\" + noun." },
    ],
  },
  {
    slug: "b1-real-if-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Se + Future",
    summary: "Fresh conditions about the future with the future in both clauses.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Future + future",
        body: [
          "For planned or distant events, careful Italian puts both clauses in the future: \"Se vincerò, festeggerò\". In speech, the present is common in both.",
        ],
        examples: [
          { es: "Se troveranno casa, si sposeranno l'anno prossimo.", en: "If they find a house, they'll get married next year." },
          { es: "Se l'esame andrà bene, farò una festa.", en: "If the exam goes well, I'll throw a party." },
          { es: "Se il prezzo scenderà, compreremo i biglietti.", en: "If the price drops, we'll buy the tickets." },
          { es: "Se ci sarà la neve, andremo a sciare.", en: "If there's snow, we'll go skiing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the exam goes well, I'll throw a party.", answer: "Se l'esame andrà bene, farò una festa.", altAnswers: ["Se l'esame va bene, faccio una festa.", "Se l'esame andrà bene, organizzerò una festa."], explanation: "Future + future." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's snow, we'll go skiing.", answer: "Se ci sarà la neve, andremo a sciare.", altAnswers: ["Se c'è la neve, andiamo a sciare.", "Se nevicherà, andremo a sciare."], explanation: "\"Ci sarà\" = there will be." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they find a house, they'll get married next year.", answer: "Se troveranno casa, si sposeranno l'anno prossimo.", altAnswers: ["Se trovano casa, si sposano l'anno prossimo.", "Se troveranno una casa, si sposeranno l'anno prossimo."], explanation: "Reflexive \"sposarsi\" in the future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the price drops, we'll buy the tickets.", answer: "Se il prezzo scenderà, compreremo i biglietti.", altAnswers: ["Se il prezzo scende, compriamo i biglietti.", "Se il prezzo calerà, compreremo i biglietti."], explanation: "\"Scendere\" = to go down." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you come to Bari, I'll show you the old town. (to a friend)", answer: "Se verrai a Bari, ti farò vedere la città vecchia.", altAnswers: ["Se vieni a Bari, ti faccio vedere la città vecchia.", "Se verrai a Bari, ti mostrerò la città vecchia.", "Se verrai a Bari, ti farò vedere Bari vecchia."], explanation: "\"Far vedere\" = to show." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you work hard, you'll get a promotion. (to a friend)", answer: "Se lavorerai sodo, avrai una promozione.", altAnswers: ["Se lavorerai sodo, otterrai una promozione.", "Se lavori sodo, avrai una promozione."], explanation: "\"Sodo\" = hard (with work)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it's sunny on Sunday, we'll have lunch outside.", answer: "Se domenica ci sarà il sole, pranzeremo fuori.", altAnswers: ["Se domenica c'è il sole, pranziamo fuori.", "Se domenica farà bel tempo, pranzeremo fuori.", "Se domenica farà bello, pranzeremo fuori."], explanation: "Future + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the bank gives us the loan, we'll open a restaurant.", answer: "Se la banca ci darà il prestito, apriremo un ristorante.", altAnswers: ["Se la banca ci dà il prestito, apriamo un ristorante."], explanation: "\"Ci darà\" = will give us." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If you call me] tomorrow, I'll tell you everything. (to a friend)", sentence: "___ domani, ti racconterò tutto.", answer: "Se mi chiamerai", altAnswers: ["Se mi chiami", "Se mi telefonerai", "Se mi telefoni"], explanation: "Future condition, future result." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If they arrive late, [they'll miss] the start.", sentence: "Se arriveranno tardi, ___ l'inizio.", answer: "perderanno", altAnswers: ["si perderanno"], explanation: "Future + future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If [we have] enough money, we'll go to Japan.", sentence: "Se ___ abbastanza soldi, andremo in Giappone.", answer: "avremo", altAnswers: ["abbiamo"], explanation: "Single m: \"avremo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you need help, [I'll be] here. (to a friend)", sentence: "Se avrai bisogno di aiuto, ___ qui.", answer: "sarò", altAnswers: ["io sarò", "ci sarò"], explanation: "\"Sarò\" = I'll be." },
      { type: "word-order", prompt: "Put the words in order to say: If it rains, they'll postpone the concert.", words: ["Se", "pioverà,", "rimanderanno", "il", "concerto."], translation: "If it rains, they'll postpone the concert.", explanation: "Future in both clauses." },
      { type: "multiple-choice", question: "Which version is NOT correct?", options: ["Se verrai, saresti contento.", "Se verrai, sarai contento.", "Se vieni, sarai contento.", "Se vieni, sei contento."], correctIndex: 0, explanation: "A real future condition never takes the conditional." },
      { type: "listen-choose", audio: "Se ci sarà il sole, andremo al mare.", question: "What did you hear?", options: ["Se ci sarà il sole, andremo al mare.", "Se c'è il sole, andiamo al mare.", "Se c'era il sole, andavamo al mare.", "Se ci sarà il sole, andremmo al mare."], correctIndex: 0, explanation: "Future + future: \"sarà\", \"andremo\" (one m)." },
      { type: "dictation", audio: "Se tutto andrà bene, ci vedremo a Natale.", explanation: "Future + future." },
      { type: "speak", text: "Se passerò l'esame, andrò in vacanza in Sicilia con i miei amici.", prompt: "Say it in Italian: If I pass the exam, I'll go on vacation to Sicily with my friends.", tip: "\"Passerò\" and \"andrò\": stress the final ò.", explanation: "Future in both clauses." },
    ],
  },
  {
    slug: "b1-real-if-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Se or Quando?",
    summary: "Mixed practice choosing se or quando, with the right tense after each.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Maybe or for sure",
        body: [
          "\"Se\" for what may happen, \"quando\" for what will happen. After both, careful Italian uses the future for a future time. \"Se\" also means whether; \"quando\" + present can mean whenever.",
        ],
        examples: [
          { es: "Quando torni dal lavoro, compra il pane.", en: "When you get back from work, buy some bread." },
          { es: "Se passi dal panificio, compra il pane.", en: "If you go past the bakery, buy some bread." },
          { es: "Quando sarò grande, farò il pilota.", en: "When I grow up, I'll be a pilot." },
          { es: "Non so se arriverà in tempo.", en: "I don't know whether he'll arrive in time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I grow up, I'll be a pilot.", answer: "Quando sarò grande, farò il pilota.", altAnswers: ["Da grande farò il pilota.", "Quando sarò grande, sarò un pilota."], explanation: "Certain: \"quando\" + future." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't know whether he'll arrive in time.", answer: "Non so se arriverà in tempo.", altAnswers: ["Non so se arriva in tempo."], explanation: "\"Se\" = whether." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you get back from work, buy some bread. (to a friend)", answer: "Quando torni dal lavoro, compra il pane.", altAnswers: ["Quando tornerai dal lavoro, compra il pane.", "Quando torni dal lavoro, prendi il pane."], explanation: "Certain: \"quando\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you go past the bakery, buy some bread. (to a friend)", answer: "Se passi dal panificio, compra il pane.", altAnswers: ["Se passi dal fornaio, compra il pane.", "Se passi dal panificio, prendi il pane."], explanation: "Uncertain: \"se\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When vacation starts, I'll sleep until ten.", answer: "Quando cominceranno le vacanze, dormirò fino alle dieci.", altAnswers: ["Quando iniziano le vacanze, dormo fino alle dieci.", "Quando inizieranno le vacanze, dormirò fino alle dieci.", "Quando cominciano le vacanze, dormo fino alle dieci."], explanation: "Certain and future: \"quando\" + future." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I win the lottery, I'll stop working.", answer: "Se vincerò alla lotteria, smetterò di lavorare.", altAnswers: ["Se vinco alla lotteria, smetto di lavorare.", "Se vincerò la lotteria, smetterò di lavorare."], explanation: "Uncertain: \"se\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Whenever I'm in Rome, I eat carbonara.", answer: "Quando sono a Roma, mangio la carbonara.", altAnswers: ["Ogni volta che sono a Roma, mangio la carbonara."], explanation: "\"Quando\" + present for a repeated situation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ask him if he wants a coffee. (to a friend)", answer: "Chiedigli se vuole un caffè.", altAnswers: ["Domandagli se vuole un caffè."], explanation: "\"Se\" = whether, after \"chiedere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[When] the baby is born, we'll move.", sentence: "___ nascerà il bambino, cambieremo casa.", answer: "Quando", explanation: "The birth is certain." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[If] it's a girl, we'll call her Sofia.", sentence: "___ sarà una femmina, la chiameremo Sofia.", answer: "Se", explanation: "Uncertain: \"se\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It depends [whether] there's traffic.", sentence: "Dipende ___ c'è traffico.", answer: "se", explanation: "\"Dipende se\" = it depends whether." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [you're] in Venice, send me a photo. (to a friend)", sentence: "Quando ___ a Venezia, mandami una foto.", answer: "sarai", altAnswers: ["sei"], explanation: "Future after \"quando\", present in speech." },
      { type: "word-order", prompt: "Put the words in order to say: When the store opens, I'll buy the tickets.", words: ["Quando", "apre", "il", "negozio,", "compro", "i", "biglietti."], translation: "When the store opens, I'll buy the tickets.", explanation: "Certain, near future: present + present." },
      { type: "multiple-choice", question: "Your friend's train is due at 18:15. What do you write?", options: ["Quando arrivi, ti aspetto al binario.", "Se arrivi, ti aspetto al binario.", "Se arriverai, ti aspetto al binario.", "Quando arriveresti, ti aspetto al binario."], correctIndex: 0, explanation: "The arrival is expected: \"quando\"." },
      { type: "listen-choose", audio: "Non so se domani ho tempo.", question: "What does it mean?", options: ["I don't know whether I'll have time tomorrow.", "If I have time tomorrow, I'll know.", "When I have time tomorrow, I'll know.", "I know I'll have time tomorrow."], correctIndex: 0, explanation: "\"Non so se\" = I don't know whether." },
      { type: "dictation", audio: "Quando sarai a casa, scrivimi.", explanation: "\"Quando\" + future, then a command." },
      { type: "speak", text: "Quando arrivo a casa ti chiamo; se è tardi, ti mando un messaggio.", prompt: "Say it in Italian: When I get home I'll call you; if it's late, I'll send you a message.", tip: "Contrast the two openings: QUAN-do, then SE.", explanation: "\"Quando\" for the certain arrival, \"se\" for the uncertain lateness." },
    ],
  },
];
