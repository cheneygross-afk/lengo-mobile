// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u14-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 14 Extra Practice: The Future Perfect and Probability.
// Optional lessons folded away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U14_EXTRA: Lesson[] = [
  {
    slug: "b1-future-perfect-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: Sequences",
    summary: "Fresh sentences putting two future events in order with quando, appena and dopo che.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "First this, then that",
        body: [
          "The earlier future event takes the future perfect; the later one takes the future or an imperative. In relaxed speech, present + present is also heard.",
        ],
        examples: [
          { es: "Quando avrai compiuto diciotto anni, potrai votare.", en: "When you've turned eighteen, you'll be able to vote." },
          { es: "Appena avrò fatto la doccia, usciamo.", en: "As soon as I've had a shower, we'll go out." },
          { es: "Dopo che avranno visto la casa, decideranno.", en: "After they've seen the house, they'll decide." },
          { es: "Quando sarete arrivati in albergo, scriveteci.", en: "When you've got to the hotel, write to us." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After they've seen the house, they'll decide.", answer: "Dopo che avranno visto la casa, decideranno.", altAnswers: ["Quando avranno visto la casa, decideranno.", "Dopo che avranno visto la casa decideranno."], explanation: "\"Avranno visto\" first, \"decideranno\" second." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you've got to the hotel, write to us. (plural)", answer: "Quando sarete arrivati in albergo, scriveteci.", altAnswers: ["Quando sarete arrivate in albergo, scriveteci.", "Appena sarete arrivati in albergo, scriveteci.", "Quando arrivate in albergo, scriveteci."], explanation: "Future perfect + imperative; \"ci\" attaches to \"scrivete\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you've turned eighteen, you'll be able to vote. (to a friend)", answer: "Quando avrai compiuto diciotto anni, potrai votare.", altAnswers: ["Quando avrai compiuto 18 anni, potrai votare."], explanation: "\"Compiere gli anni\" = to have a birthday, turn an age." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as I've had a shower, we'll go out.", answer: "Appena avrò fatto la doccia, usciamo.", altAnswers: ["Appena avrò fatto la doccia, usciremo.", "Appena faccio la doccia, usciamo.", "Non appena avrò fatto la doccia, usciremo."], explanation: "\"Fare la doccia\" = to have a shower." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When you've finished the soup, you can have dessert. (to a child)", answer: "Quando avrai finito la minestra, potrai mangiare il dolce.", altAnswers: ["Quando avrai finito la minestra, potrai prendere il dolce.", "Quando hai finito la minestra, puoi mangiare il dolce."], explanation: "Future perfect + future of \"potere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Once the rain has stopped, we'll go for a walk.", answer: "Una volta che avrà smesso di piovere, faremo una passeggiata.", altAnswers: ["Quando avrà smesso di piovere, faremo una passeggiata.", "Appena avrà smesso di piovere, faremo una passeggiata."], explanation: "\"Smettere di piovere\" = for the rain to stop." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "As soon as the doctor has seen you, you can go home. (polite)", answer: "Appena il medico l'avrà visitata, potrà tornare a casa.", altAnswers: ["Appena il medico l'avrà visitato, potrà tornare a casa.", "Appena il dottore l'avrà visitata, potrà tornare a casa.", "Appena il dottore l'avrà visitato, potrà tornare a casa."], explanation: "\"La\" (you, formal) before \"avrà\"; \"visitare\" = to examine." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When we've paid the bills, we'll have nothing left.", answer: "Quando avremo pagato le bollette, non ci resterà niente.", altAnswers: ["Quando avremo pagato le bollette, non ci rimarrà niente.", "Dopo che avremo pagato le bollette, non ci resterà niente."], explanation: "\"Le bollette\" = utility bills; \"non ci resterà niente\" = we'll have nothing left." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When [you've learned] the rules, the game is easy. (plural)", sentence: "Quando ___ le regole, il gioco sarà facile.", answer: "avrete imparato", altAnswers: ["voi avrete imparato"], explanation: "\"Avrete imparato\": first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "As soon as [she has got] the results, she'll call us.", sentence: "Appena ___ i risultati, ci chiamerà.", answer: "avrà avuto", altAnswers: ["avrà ricevuto"], explanation: "\"Avrà avuto\" or \"avrà ricevuto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After [the children have gone] to sleep, we'll watch the film.", sentence: "Dopo che i bambini ___ a dormire, guarderemo il film.", answer: "saranno andati", explanation: "\"Andare\" with \"essere\": \"saranno andati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When I've saved enough, [I'll buy] a bike.", sentence: "Quando avrò risparmiato abbastanza, ___ una bici.", answer: "comprerò", altAnswers: ["mi comprerò", "mi compro", "compro"], explanation: "The later event: plain future." },
      { type: "word-order", prompt: "Put the words in order to say: As soon as you've arrived, send me a message.", words: ["Appena", "sarai", "arrivata,", "mandami", "un", "messaggio."], translation: "As soon as you've arrived, send me a message.", explanation: "Future perfect + imperative with the pronoun attached." },
      { type: "multiple-choice", question: "Which is the careful written version of: when I've read the report, I'll reply?", options: ["Quando avrò letto la relazione, risponderò.", "Quando ho letto la relazione, risponderei.", "Quando leggerei la relazione, risponderò.", "Quando avessi letto la relazione, rispondo."], correctIndex: 0, explanation: "Future perfect + future." },
      { type: "listen-choose", audio: "Dopo che avrete visto il museo, vi porto a mangiare.", question: "What will happen after the museum?", options: ["The speaker will take them to eat.", "They'll go home.", "They'll see another museum.", "The speaker will meet them at the museum."], correctIndex: 0, explanation: "\"Vi porto a mangiare\" = I'll take you to eat." },
      { type: "dictation", audio: "Quando avrò finito l'esame, andrò in vacanza.", explanation: "Future perfect, then future." },
      { type: "speak", text: "Appena avremo traslocato, organizzeremo una festa per gli amici.", prompt: "Say it in Italian: As soon as we've moved, we'll throw a party for our friends.", tip: "\"Organizzeremo\": double z, voiced, or-ga-niz-ze-RE-mo.", explanation: "Future perfect + future." },
    ],
  },
  {
    slug: "b1-future-perfect-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: Guesses",
    summary: "Fresh guesses about now with the future and about the past with the future perfect.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Probably, must, I suppose",
        body: [
          "Guess about now: simple future (\"sarà\", \"avrà\", \"staranno\"). Guess about what has already happened: future perfect (\"sarà stato\", \"avrà fatto\").",
        ],
        examples: [
          { es: "Il cane abbaia: sarà arrivato il postino.", en: "The dog's barking: the postman must have arrived." },
          { es: "C'è profumo di torta: la nonna starà cucinando.", en: "There's a smell of cake: Grandma must be baking." },
          { es: "Avrà vinto alla lotteria!", en: "He must have won the lottery!" },
          { es: "Sarà vero, ma non ci credo.", en: "It may well be true, but I don't believe it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The dog's barking: the postman must have arrived.", answer: "Il cane abbaia: sarà arrivato il postino.", altAnswers: ["Il cane abbaia: il postino sarà arrivato.", "Il cane abbaia, sarà arrivato il postino."], explanation: "Past guess: \"sarà arrivato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He must have won the lottery!", answer: "Avrà vinto alla lotteria!", altAnswers: ["Avrà vinto la lotteria!", "Lui avrà vinto alla lotteria!"], explanation: "\"Vincere alla lotteria\"; future perfect of probability." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Grandma must be baking.", answer: "La nonna starà cucinando.", altAnswers: ["La nonna cucinerà.", "La nonna starà facendo una torta."], explanation: "Guess about something in progress: \"starà\" + gerund." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It may well be true, but I don't believe it.", answer: "Sarà vero, ma non ci credo.", altAnswers: ["Sarà anche vero, ma non ci credo."], explanation: "A concessive \"sarà\": it may be so, but ..." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lights are off: they must have gone out.", answer: "Le luci sono spente: saranno usciti.", altAnswers: ["Le luci sono spente: saranno uscite.", "Le luci sono spente, saranno usciti."], explanation: "Past guess with \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The car is very clean: he must have washed it.", answer: "La macchina è pulitissima: l'avrà lavata.", altAnswers: ["La macchina è molto pulita: l'avrà lavata.", "La macchina è pulitissima: l'avrà lavata lui."], explanation: "\"L'avrà lavata\": agreement with \"la macchina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where can they be?", answer: "Dove saranno?", altAnswers: ["Ma dove saranno?"], explanation: "Present guess in a question." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where can they have gone?", answer: "Dove saranno andati?", altAnswers: ["Dove saranno andate?", "Ma dove saranno andati?"], explanation: "Past guess: \"saranno andati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Francesca is smiling: [she must have passed] the exam.", sentence: "Francesca sorride: ___ l'esame.", answer: "avrà passato", altAnswers: ["avrà superato"], explanation: "Past guess: future perfect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's nobody at the bus stop: the bus [must have] just gone by.", sentence: "Non c'è nessuno alla fermata: l'autobus ___ appena passato.", answer: "sarà", explanation: "\"Sarà appena passato\": just, with the future perfect." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[He must earn] a lot.", sentence: "___ un sacco di soldi.", answer: "Guadagnerà", explanation: "A guess about now: simple future." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "They [must have paid] a fortune.", sentence: "___ una fortuna.", answer: "Avranno pagato", altAnswers: ["Avranno speso"], explanation: "Past guess." },
      { type: "word-order", prompt: "Put the words in order to say: Who can have left the door open?", words: ["Chi", "avrà", "lasciato", "la", "porta", "aperta?"], translation: "Who can have left the door open?", explanation: "Future perfect in a question to yourself." },
      { type: "multiple-choice", question: "Your neighbour's car isn't outside this morning. What's the natural guess?", options: ["Sarà già andato al lavoro.", "Andrà già al lavoro.", "Sarebbe già andato al lavoro.", "È andato già al lavoro, lo so."], correctIndex: 0, explanation: "A guess about something already done: future perfect." },
      { type: "listen-choose", audio: "Avrà avuto i suoi motivi.", question: "What does it mean?", options: ["He must have had his reasons.", "He will have his reasons.", "He would have had his reasons.", "He has no reasons."], correctIndex: 0, explanation: "A guess about the past, often said to excuse someone." },
      { type: "dictation", audio: "Sarà stanca, avrà lavorato tutto il giorno.", explanation: "Present guess, then past guess." },
      { type: "speak", text: "Non risponde al telefono: sarà in riunione, o avrà dimenticato il cellulare a casa.", prompt: "Say it in Italian: She's not answering the phone: she's probably in a meeting, or she must have left her mobile at home.", tip: "\"Cellulare\": double l, cel-lu-LA-re.", explanation: "A present guess and a past guess." },
    ],
  },
  {
    slug: "b1-future-perfect-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: Deadlines",
    summary: "Fresh sentences with entro and the future perfect for things that will be done by a certain time.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Entro + date",
        body: [
          "\"Entro\" (by, within) + a time, then the future perfect: \"Entro le sei avrò finito\". \"Per\" + time is also common: \"per domani\". Watch the single m in \"avremo\" and \"saremo\".",
        ],
        examples: [
          { es: "Entro le sei avrò finito.", en: "By six I'll have finished." },
          { es: "Entro dicembre avremo pagato il mutuo.", en: "By December we'll have paid off the mortgage." },
          { es: "Per giovedì avrete ricevuto il pacco.", en: "By Thursday you'll have received the parcel. (plural)" },
          { es: "Entro l'estate saranno tornati dal Canada.", en: "By the summer they'll have come back from Canada." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By Thursday you'll have received the parcel. (plural)", answer: "Per giovedì avrete ricevuto il pacco.", altAnswers: ["Entro giovedì avrete ricevuto il pacco.", "Avrete ricevuto il pacco entro giovedì."], explanation: "\"Avrete ricevuto\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By the summer they'll have come back from Canada.", answer: "Entro l'estate saranno tornati dal Canada.", altAnswers: ["Per l'estate saranno tornati dal Canada.", "Entro l'estate saranno tornate dal Canada."], explanation: "\"Tornare\" takes \"essere\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By six I'll have finished.", answer: "Entro le sei avrò finito.", altAnswers: ["Per le sei avrò finito.", "Avrò finito entro le sei."], explanation: "\"Entro le sei\": the hour takes \"le\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By December we'll have paid off the mortgage.", answer: "Entro dicembre avremo pagato il mutuo.", altAnswers: ["Per dicembre avremo pagato il mutuo.", "Entro dicembre avremo estinto il mutuo."], explanation: "\"Il mutuo\" = the mortgage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By tomorrow morning the snow will have melted.", answer: "Entro domattina la neve si sarà sciolta.", altAnswers: ["Per domani mattina la neve si sarà sciolta.", "Entro domani mattina la neve si sarà sciolta."], explanation: "\"Sciogliersi\" = to melt: reflexive, so \"si sarà sciolta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By the end of the course you'll have learned a lot. (to a friend)", answer: "Entro la fine del corso avrai imparato molto.", altAnswers: ["Alla fine del corso avrai imparato molto.", "Entro la fine del corso avrai imparato tanto."], explanation: "\"Avrai imparato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By next year Chiara will have graduated.", answer: "Entro l'anno prossimo Chiara si sarà laureata.", altAnswers: ["Per l'anno prossimo Chiara si sarà laureata."], explanation: "\"Laurearsi\" = to graduate: reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "By the time you come back, I'll have cleaned the house.", answer: "Quando tornerai, avrò pulito la casa.", altAnswers: ["Quando torni, avrò pulito la casa.", "Quando tornerai, avrò già pulito la casa."], explanation: "By the time = \"quando\"; the cleaning is first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By two o'clock [the guests will have left].", sentence: "Entro le due ___.", answer: "gli ospiti saranno partiti", altAnswers: ["gli ospiti saranno andati via", "gli ospiti se ne saranno andati"], explanation: "Essere + plural agreement." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By Friday [I'll have sent] the invoice.", sentence: "Entro venerdì ___ la fattura.", answer: "avrò mandato", altAnswers: ["avrò inviato", "avrò spedito"], explanation: "\"Avrò mandato\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By May [we will have built] the new kitchen.", sentence: "Entro maggio ___ la cucina nuova.", answer: "avremo rifatto", altAnswers: ["avremo costruito", "avremo montato"], explanation: "Single m: \"avremo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In two hours [the train will have arrived] in Naples.", sentence: "Tra due ore ___ a Napoli.", answer: "il treno sarà arrivato", altAnswers: ["il treno sarà già arrivato"], explanation: "\"Sarà arrivato\" with \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: By the weekend we'll have painted the bedroom.", words: ["Entro", "il", "fine", "settimana", "avremo", "dipinto", "la", "camera."], translation: "By the weekend we'll have painted the bedroom.", explanation: "\"Dipingere\" → \"dipinto\"; \"camera\" = bedroom." },
      { type: "multiple-choice", question: "Which sentence promises a deadline?", options: ["Entro lunedì avremo finito.", "Entro lunedì avremmo finito.", "Lunedì abbiamo finito.", "Lunedì finivamo."], correctIndex: 0, explanation: "Future perfect with a single m." },
      { type: "listen-choose", audio: "Per mezzogiorno saremo arrivati.", question: "What did you hear?", options: ["Per mezzogiorno saremo arrivati.", "Per mezzogiorno saremmo arrivati.", "Per mezzogiorno siamo arrivati.", "Per mezzogiorno eravamo arrivati."], correctIndex: 0, explanation: "Single m: \"saremo\", a deadline." },
      { type: "dictation", audio: "Entro sabato avranno consegnato il divano.", explanation: "\"Consegnare\" = to deliver." },
      { type: "speak", text: "Entro venerdì avrò finito la relazione e per lunedì l'avrò mandata al cliente.", prompt: "Say it in Italian: By Friday I'll have finished the report and by Monday I'll have sent it to the client.", tip: "\"L'avrò mandata\": the participle agrees with \"la relazione\".", explanation: "Two deadlines, one with an agreeing pronoun." },
    ],
  },
];
