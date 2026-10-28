// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u11-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 11 Extra Practice: The Subjunctive, Part 5: Conjunctions.
// Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B1_U11_EXTRA: Lesson[] = [
  {
    slug: "b1-conjunctions-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Although and So That",
    summary: "Fresh sentences with benché / sebbene / nonostante and affinché / perché / in modo che.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Concession and purpose",
        body: [
          "Although: \"benché / sebbene / nonostante\" + subjunctive, or \"anche se\" + indicative. So that: \"affinché / perché / in modo che\" + subjunctive; same subject: \"per\" + infinitive.",
        ],
        examples: [
          { es: "Sebbene costi tanto, ne vale la pena.", en: "Although it costs a lot, it's worth it." },
          { es: "Nonostante abbia la febbre, va a lavorare.", en: "Although he has a temperature, he goes to work." },
          { es: "Ti scrivo la ricetta perché tu possa rifarla.", en: "I'll write you the recipe so you can make it again." },
          { es: "Chiudo la porta in modo che il gatto non esca.", en: "I'll shut the door so the cat doesn't get out." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although it costs a lot, it's worth it.", answer: "Sebbene costi tanto, ne vale la pena.", altAnswers: ["Benché costi tanto, ne vale la pena.", "Nonostante costi tanto, ne vale la pena.", "Anche se costa tanto, ne vale la pena.", "Sebbene costi molto, ne vale la pena."], explanation: "\"Costi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll shut the door so the cat doesn't get out.", answer: "Chiudo la porta in modo che il gatto non esca.", altAnswers: ["Chiudo la porta perché il gatto non esca.", "Chiudo la porta affinché il gatto non esca.", "Chiudo la porta così il gatto non esce."], explanation: "\"Esca\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although he has a temperature, he goes to work.", answer: "Nonostante abbia la febbre, va a lavorare.", altAnswers: ["Benché abbia la febbre, va a lavorare.", "Sebbene abbia la febbre, va a lavorare.", "Anche se ha la febbre, va a lavorare."], explanation: "\"Abbia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll write you the recipe so you can make it again. (to a friend)", answer: "Ti scrivo la ricetta perché tu possa rifarla.", altAnswers: ["Ti scrivo la ricetta affinché tu possa rifarla.", "Ti scrivo la ricetta così puoi rifarla."], explanation: "\"Possa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although we live close by, we rarely see each other.", answer: "Benché abitiamo vicino, ci vediamo raramente.", altAnswers: ["Nonostante abitiamo vicino, ci vediamo raramente.", "Anche se abitiamo vicino, ci vediamo raramente.", "Sebbene abitiamo vicino, ci vediamo raramente.", "Benché abitiamo vicino, ci vediamo poco."], explanation: "\"Abitiamo\": noi subjunctive = present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going to Rome to see an exhibition.", answer: "Vado a Roma per vedere una mostra.", explanation: "Same subject: \"per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Speak slowly so that she understands. (to a friend)", answer: "Parla piano perché lei capisca.", altAnswers: ["Parla piano affinché capisca.", "Parla lentamente perché lei capisca.", "Parla piano in modo che capisca.", "Parla piano perché capisca."], explanation: "\"Capisca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Although the film is long, it's not boring.", answer: "Benché il film sia lungo, non è noioso.", altAnswers: ["Nonostante il film sia lungo, non è noioso.", "Sebbene il film sia lungo, non è noioso.", "Anche se il film è lungo, non è noioso."], explanation: "\"Sia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Despite the cold, the kids are playing outside.", answer: "Nonostante il freddo, i bambini giocano fuori.", explanation: "\"Nonostante\" + noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm leaving the key under the mat so that you [find] it.", sentence: "Lascio la chiave sotto lo zerbino perché tu la ___.", answer: "trovi", explanation: "\"Trovi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Although they [are] rich, they're very generous.", sentence: "Benché ___ ricchi, sono molto generosi.", answer: "siano", explanation: "\"Siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Even though I [know] the answer, I'm not saying.", sentence: "Anche se ___ la risposta, non la dico.", answer: "so", explanation: "\"Anche se\" + indicative." },
      { type: "word-order", prompt: "Put the words in order to say: Although it's raining, we're going out.", words: ["Benché", "piova,", "usciamo."], translation: "Although it's raining, we're going out.", altOrders: [["Usciamo,", "benché", "piova."]], explanation: "\"Piova\"." },
      { type: "multiple-choice", question: "\"Te lo ripeto affinché tu non lo ___.\" (dimenticare)", options: ["dimentichi", "dimentica", "dimenticare", "dimentici"], correctIndex: 0, explanation: "\"Dimentichi\", with h." },
      { type: "listen-choose", audio: "Nonostante abbia la febbre, va a lavorare.", question: "What does he do?", options: ["He goes to work.", "He stays in bed.", "He goes to the doctor.", "He works from home."], correctIndex: 0, explanation: "\"Va a lavorare\"." },
      { type: "dictation", audio: "Sebbene costi tanto, la compro perché i bambini possano giocare.", explanation: "\"Costi\", \"possano\"." },
      { type: "speak", text: "Benché sia stanca, cucino io, perché tu possa riposare.", prompt: "Say it in Italian (as a woman): Although I'm tired, I'll cook, so that you can rest.", tip: "ri-po-SA-re.", explanation: "\"Benché sia\", \"perché tu possa\"." },
    ],
  },
  {
    slug: "b1-conjunctions-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Before, Without, Unless",
    summary: "Fresh sentences with prima che, senza che, a meno che (non), purché and a condizione che.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Time and conditions",
        body: [
          "\"Prima che\" (before), \"senza che\" (without), \"a meno che (non)\" (unless), \"purché / a condizione che / basta che\" (as long as): all + subjunctive when the subject changes.",
        ],
        examples: [
          { es: "Finisco prima che arrivi il capo.", en: "I'll finish before the boss arrives." },
          { es: "Compra sempre i regali senza che lei lo sappia.", en: "He always buys presents without her knowing." },
          { es: "Ci vediamo domani, a meno che tu non abbia altri impegni.", en: "See you tomorrow, unless you have other plans." },
          { es: "Puoi restare, purché non fumi.", en: "You can stay, as long as you don't smoke." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll finish before the boss arrives.", answer: "Finisco prima che arrivi il capo.", altAnswers: ["Finisco prima che il capo arrivi."], explanation: "\"Arrivi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You can stay, as long as you don't smoke. (to a friend)", answer: "Puoi restare, purché non fumi.", altAnswers: ["Puoi rimanere, purché non fumi.", "Puoi restare, basta che non fumi.", "Puoi restare, a condizione che tu non fumi."], explanation: "\"Fumi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He always buys presents without her knowing.", answer: "Compra sempre i regali senza che lei lo sappia.", altAnswers: ["Compra sempre i regali senza che lo sappia."], explanation: "\"Sappia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you tomorrow, unless you have other plans. (to a friend)", answer: "Ci vediamo domani, a meno che tu non abbia altri impegni.", altAnswers: ["Ci vediamo domani, a meno che non abbia altri impegni.", "Ci vediamo domani, a meno che tu abbia altri impegni."], explanation: "\"Abbia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's leave before it starts to rain.", answer: "Partiamo prima che cominci a piovere.", altAnswers: ["Andiamo via prima che cominci a piovere.", "Partiamo prima che inizi a piovere."], explanation: "\"Cominci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's leave before eating.", answer: "Partiamo prima di mangiare.", altAnswers: ["Andiamo via prima di mangiare."], explanation: "Same subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll lend you the book, provided you give it back to me.", answer: "Ti presto il libro, purché tu me lo restituisca.", altAnswers: ["Ti presto il libro, a condizione che tu me lo restituisca.", "Ti presto il libro, basta che tu me lo ridia.", "Ti presto il libro, purché tu me lo ridia."], explanation: "\"Restituisca\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We'll eat outside, unless it's windy.", answer: "Mangiamo fuori, a meno che non tiri vento.", altAnswers: ["Mangiamo fuori, a meno che non ci sia vento.", "Mangiamo fuori a meno che non tiri vento."], explanation: "\"Tira vento\" → \"tiri vento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He went out without saying anything.", answer: "È uscito senza dire niente.", altAnswers: ["È uscito senza dire nulla."], explanation: "Same subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Let's tidy the house before your parents [arrive].", sentence: "Mettiamo in ordine prima che ___ i tuoi genitori.", answer: "arrivino", explanation: "\"Arrivino\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You can borrow my bike, as long as you [are] careful.", sentence: "Puoi prendere la mia bici, purché tu ___ attento.", answer: "stia", explanation: "\"Stare attento\" → \"stia attento\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll come, unless the meeting [goes on] too long.", sentence: "Vengo, a meno che la riunione non ___ troppo.", answer: "duri", explanation: "\"Durare\" → \"duri\"." },
      { type: "word-order", prompt: "Put the words in order to say: Call me before you leave.", words: ["Chiamami", "prima", "di", "partire."], translation: "Call me before you leave.", explanation: "Same subject." },
      { type: "multiple-choice", question: "\"Esco senza che nessuno mi ___.\" (vedere)", options: ["veda", "vede", "vedere", "vedono"], correctIndex: 0, explanation: "\"Veda\"." },
      { type: "listen-choose", audio: "Puoi restare, purché non fumi.", question: "What's the condition?", options: ["Don't smoke.", "Leave early.", "Be quiet.", "Pay the rent."], correctIndex: 0, explanation: "\"Purché non fumi\"." },
      { type: "dictation", audio: "Partiamo prima che faccia buio, a meno che tu non voglia restare.", explanation: "\"Faccia\", \"voglia\"." },
      { type: "speak", text: "Ti presto il libro, purché tu me lo restituisca prima che finiscano le vacanze.", prompt: "Say it in Italian: I'll lend you the book, as long as you give it back before the holidays end.", tip: "re-sti-tu-I-sca.", explanation: "\"Purché\", \"prima che\"." },
    ],
  },
  {
    slug: "b1-conjunctions-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Che or Di?",
    summary: "Fresh sentences choosing prima che / prima di, senza che / senza, perché / per.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "One subject or two?",
        body: [
          "One subject: \"prima di\", \"senza\", \"per\" + infinitive. Two subjects: \"prima che\", \"senza che\", \"perché / affinché\" + subjunctive.",
        ],
        examples: [
          { es: "Faccio la doccia prima di uscire.", en: "I have a shower before going out." },
          { es: "Faccio la doccia prima che si svegli mio figlio.", en: "I have a shower before my son wakes up." },
          { es: "Lavoro per pagare l'affitto.", en: "I work to pay the rent." },
          { es: "Lavoro perché i miei figli possano studiare.", en: "I work so that my children can study." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a shower before my son wakes up.", answer: "Faccio la doccia prima che si svegli mio figlio.", altAnswers: ["Faccio la doccia prima che mio figlio si svegli."], explanation: "Two subjects." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work so that my children can study.", answer: "Lavoro perché i miei figli possano studiare.", altAnswers: ["Lavoro affinché i miei figli possano studiare."], explanation: "Two subjects." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a shower before going out.", answer: "Faccio la doccia prima di uscire.", explanation: "One subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work to pay the rent.", answer: "Lavoro per pagare l'affitto.", explanation: "One subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She reads without wearing glasses.", answer: "Legge senza mettere gli occhiali.", altAnswers: ["Legge senza occhiali.", "Legge senza portare gli occhiali."], explanation: "One subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She reads without anyone disturbing her.", answer: "Legge senza che nessuno la disturbi.", explanation: "Two subjects." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We save money to travel.", answer: "Risparmiamo per viaggiare.", altAnswers: ["Mettiamo da parte i soldi per viaggiare."], explanation: "One subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We save money so that our kids can travel.", answer: "Risparmiamo perché i nostri figli possano viaggiare.", altAnswers: ["Risparmiamo affinché i nostri figli possano viaggiare."], explanation: "Two subjects." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Think before you answer. (to a friend)", answer: "Pensa prima di rispondere.", explanation: "One subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll call you [before the film starts].", sentence: "Ti chiamo ___ il film.", answer: "prima che inizi", altAnswers: ["prima che cominci"], explanation: "Two subjects." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I left [without paying].", sentence: "Sono uscito ___.", answer: "senza pagare", explanation: "One subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm explaining it again [so that you understand]. (plural)", sentence: "Lo spiego di nuovo ___.", answer: "perché capiate", altAnswers: ["affinché capiate", "in modo che capiate"], explanation: "Two subjects." },
      { type: "word-order", prompt: "Put the words in order to say: I came to help you.", words: ["Sono", "venuto", "per", "aiutarti."], translation: "I came to help you.", explanation: "One subject." },
      { type: "multiple-choice", question: "Which is right for: Wash your hands before eating?", options: ["Lavati le mani prima di mangiare.", "Lavati le mani prima che tu mangi.", "Lavati le mani prima mangiare.", "Lavati le mani prima che mangi tu."], correctIndex: 0, explanation: "One subject." },
      { type: "listen-choose", audio: "Legge senza che nessuno la disturbi.", question: "What's the situation?", options: ["Nobody disturbs her while she reads.", "She disturbs everyone.", "She can't read.", "Someone reads to her."], correctIndex: 0, explanation: "\"Senza che nessuno la disturbi\"." },
      { type: "dictation", audio: "Esco prima di cena, prima che arrivino gli ospiti.", explanation: "\"Prima di\" + noun, \"prima che\" + subjunctive." },
      { type: "speak", text: "Lavoro per pagare l'affitto, e risparmio perché i miei figli possano studiare.", prompt: "Say it in Italian: I work to pay the rent, and I save so that my children can study.", tip: "ri-SPAR-mio.", explanation: "\"Per\" + infinitive, \"perché\" + subjunctive." },
    ],
  },
];
