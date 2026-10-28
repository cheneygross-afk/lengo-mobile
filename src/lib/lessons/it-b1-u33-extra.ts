// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u33-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian B1 Unit 33 Extra Practice: CILS UNO Tasks. Optional lessons folded
// away under the unit (docs/italian-course/authoring.md).
export const IT_B1_U33_EXTRA: Lesson[] = [
  {
    slug: "b1-cils-extra-1",
    level: "IT-B1",
    number: 1,
    title: "Extra Practice: More Listening Tasks",
    summary: "More exam-format listening: a supermarket announcement, a voicemail from a doctor's office and a radio traffic report.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Three recordings",
        body: [
          "Read each question first, then listen. Recording 1, a supermarket: \"Gentili clienti, oggi la frutta e la verdura sono scontate del 30%.\" Recording 2, a doctor's office: \"Buongiorno, la chiamiamo dallo studio del dottor Ferri: l'appuntamento di giovedì è spostato a venerdì alla stessa ora.\" Recording 3, a traffic report: \"Code di cinque chilometri sulla A14 tra Rimini e Cesena per un incidente.\"",
        ],
        examples: [
          { es: "Oggi la frutta è scontata del 30%.", en: "Today fruit is 30% off." },
          { es: "L'appuntamento è spostato a venerdì.", en: "The appointment has been moved to Friday." },
          { es: "Ci sono code di cinque chilometri.", en: "There are five-kilometer traffic jams." },
          { es: "Alla stessa ora.", en: "At the same time." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Gentili clienti, oggi la frutta e la verdura sono scontate del trenta per cento.", question: "What's on offer?", options: ["fruit and vegetables", "meat and fish", "bread", "everything in the shop"], correctIndex: 0, explanation: "\"La frutta e la verdura\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The appointment has been moved to Friday.", answer: "L'appuntamento è spostato a venerdì.", altAnswers: ["L'appuntamento è stato spostato a venerdì."], explanation: "\"Spostare\" = to move, reschedule." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "La chiamiamo dallo studio del dottor Ferri: l'appuntamento di giovedì è spostato a venerdì alla stessa ora.", question: "What has changed?", options: ["the day", "the time", "the doctor", "the address"], correctIndex: 0, explanation: "Thursday → Friday, same time." },
      { type: "listen-choose", audio: "Code di cinque chilometri sulla A14 tra Rimini e Cesena per un incidente.", question: "Why is traffic backed up?", options: ["an accident", "road work", "snow", "a demonstration"], correctIndex: 0, explanation: "\"Per un incidente\"." },
      { type: "listen-choose", audio: "Il museo è aperto tutti i giorni tranne il lunedì, dalle nove alle diciannove.", question: "When is the museum closed?", options: ["on Mondays", "on Sundays", "every evening", "never"], correctIndex: 0, explanation: "\"Tranne\" = except." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today fruit is 30% off.", answer: "Oggi la frutta è scontata del 30%.", altAnswers: ["Oggi la frutta è scontata del trenta per cento.", "Oggi c'è il 30% di sconto sulla frutta."], explanation: "\"Scontato del\" + percentage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There are five-kilometer traffic jams.", answer: "Ci sono code di cinque chilometri.", altAnswers: ["Ci sono cinque chilometri di coda."], explanation: "\"Coda\" = line, backup (of traffic)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum is open every day except Monday.", answer: "Il museo è aperto tutti i giorni tranne il lunedì.", altAnswers: ["Il museo è aperto tutti i giorni eccetto il lunedì.", "Il museo è aperto tutti i giorni tranne lunedì."], explanation: "\"Tranne\" = except." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're calling you from the doctor's office. (formal)", answer: "La chiamiamo dallo studio del medico.", altAnswers: ["La chiamiamo dallo studio medico.", "La chiamiamo dallo studio del dottore."], explanation: "\"La\" = you (formal), direct object." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At the same time.", answer: "Alla stessa ora.", altAnswers: ["Allo stesso orario."], explanation: "\"Stesso\" before the noun = same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The flight has been canceled.", answer: "Il volo è stato cancellato.", altAnswers: ["Il volo è cancellato.", "Il volo è stato annullato."], explanation: "Passive with \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Open every day [except] Sunday.", sentence: "Aperto tutti i giorni ___ la domenica.", answer: "tranne", altAnswers: ["eccetto", "salvo"], explanation: "\"Tranne\" = except." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Prices are [reduced] by 20%.", sentence: "I prezzi sono ___ del 20%.", answer: "scontati", altAnswers: ["ridotti"], explanation: "Agrees with \"prezzi\"." },
      { type: "word-order", prompt: "Put the words in order to say: The appointment is moved to Friday.", words: ["L'appuntamento", "è", "spostato", "a", "venerdì."], translation: "The appointment is moved to Friday.", explanation: "\"Spostare a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Passengers are advised that the flight has been canceled.", answer: "Si avvisano i passeggeri che il volo è stato cancellato.", altAnswers: ["Si avvisano i signori passeggeri che il volo è stato cancellato.", "Si avvisano i passeggeri che il volo è stato annullato."], explanation: "Announcement style." },
      { type: "dictation", audio: "L'appuntamento di giovedì è spostato a venerdì.", explanation: "\"Spostato\"." },
      { type: "speak", text: "Ho sentito alla radio che ci sono code sulla A14 per un incidente: partiamo più tardi.", prompt: "Tell a friend: I heard on the radio there are traffic jams on the A14 because of an accident: let's leave later.", tip: "\"A14\": a quattordici.", explanation: "Report what you heard." },
    ],
  },
  {
    slug: "b1-cils-extra-2",
    level: "IT-B1",
    number: 2,
    title: "Extra Practice: More Reading Tasks",
    summary: "More exam-format reading: a short article on a village festival with multiple-choice questions, and ads to match to people.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The article",
        body: [
          "\"Ogni anno, la seconda domenica di settembre, il piccolo paese di Castelnuovo festeggia la Sagra della Castagna. Le strade del centro si riempiono di bancarelle e i visitatori possono assaggiare dolci, zuppe e caldarroste. La festa è organizzata da un'associazione di volontari, e il ricavato viene usato per restaurare la chiesa del paese. L'anno scorso sono arrivati più di diecimila visitatori, il doppio degli abitanti di tutta la provincia.\"",
        ],
        examples: [
          { es: "Il paese festeggia la Sagra della Castagna.", en: "The village celebrates the Chestnut Festival." },
          { es: "Le strade si riempiono di bancarelle.", en: "The streets fill with stalls." },
          { es: "Il ricavato viene usato per restaurare la chiesa.", en: "The proceeds are used to restore the church." },
          { es: "Sono arrivati più di diecimila visitatori.", en: "More than ten thousand visitors came." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is the money used for?", options: ["restoring the church", "paying the volunteers", "building a new square", "a school"], correctIndex: 0, explanation: "\"Per restaurare la chiesa\"." },
          { type: "listen-choose", audio: "La festa è organizzata da un'associazione di volontari.", question: "Who organizes the festival?", options: ["volunteers", "the city", "a company", "the church"], correctIndex: 0, explanation: "\"Un'associazione di volontari\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The festival is on the second Sunday of September.", answer: "La sagra è la seconda domenica di settembre.", altAnswers: ["La festa è la seconda domenica di settembre.", "La sagra si fa la seconda domenica di settembre."], explanation: "No preposition before \"la seconda domenica\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The visitors were twice the inhabitants.", answer: "I visitatori erano il doppio degli abitanti.", altAnswers: ["I visitatori sono stati il doppio degli abitanti."], explanation: "\"Il doppio di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The streets fill with stalls.", answer: "Le strade si riempiono di bancarelle.", altAnswers: [], explanation: "\"Riempirsi di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Visitors can taste cakes and soups.", answer: "I visitatori possono assaggiare dolci e zuppe.", altAnswers: [], explanation: "\"Assaggiare\" = to taste." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The festival is organized by volunteers.", answer: "La festa è organizzata da volontari.", altAnswers: ["La sagra è organizzata da volontari.", "La festa viene organizzata da volontari."], explanation: "Passive with \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The proceeds are used to restore the church.", answer: "Il ricavato viene usato per restaurare la chiesa.", altAnswers: ["Il ricavato è usato per restaurare la chiesa."], explanation: "Passive with \"venire\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "More than ten thousand visitors came.", answer: "Sono arrivati più di diecimila visitatori.", altAnswers: ["Sono venuti più di diecimila visitatori."], explanation: "\"Più di\" + number." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every year the village celebrates the festival.", answer: "Ogni anno il paese festeggia la sagra.", altAnswers: ["Ogni anno il paese celebra la sagra."], explanation: "\"Festeggiare\" = to celebrate." },
      { type: "matching", instructions: "Match the Italian to the English.", pairs: [{ left: "la sagra", right: "village food festival" }, { left: "la bancarella", right: "stall" }, { left: "le caldarroste", right: "roast chestnuts" }, { left: "il ricavato", right: "the proceeds" }], explanation: "Festival vocabulary." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Twice] the inhabitants.", sentence: "___ degli abitanti.", answer: "Il doppio", explanation: "\"Il doppio di\" = twice as many as." },
      { type: "word-order", prompt: "Put the words in order to say: The festival takes place in September.", words: ["La", "sagra", "si", "svolge", "a", "settembre."], translation: "The festival takes place in September.", explanation: "\"Svolgersi\" = to take place." },
      { type: "multiple-choice", question: "Anna is vegetarian and free only on Saturday evenings. Which ad suits her?", options: ["Cena vegetariana, sabato ore 20.", "Grigliata di carne, sabato ore 20.", "Cena vegetariana, venerdì ore 20.", "Pranzo di pesce, domenica ore 13."], correctIndex: 0, explanation: "Both conditions must match." },
      { type: "dictation", audio: "Le strade del centro si riempiono di bancarelle.", explanation: "\"Bancarelle\" = stalls." },
      { type: "speak", text: "A settembre c'è la Sagra della Castagna: le strade si riempiono di bancarelle e si possono assaggiare dolci e caldarroste.", prompt: "Invite a friend: In September there's the Chestnut Festival: the streets fill with stalls and you can taste cakes and roast chestnuts.", tip: "\"Caldarroste\": cal-dar-ROS-te.", explanation: "Summary with impersonal \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The village has fewer than five thousand inhabitants.", answer: "Il paese ha meno di cinquemila abitanti.", altAnswers: [], explanation: "\"Meno di\" + number." },
    ],
  },
  {
    slug: "b1-cils-extra-3",
    level: "IT-B1",
    number: 3,
    title: "Extra Practice: More Grammar Tasks",
    summary: "More exam-format cloze: articles, prepositions, pronouns and verbs in a short email and a short story.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Two short cloze texts",
        body: [
          "Email: \"Ciao Giulia, ___ (1) settimana prossima vado ___ (2) Napoli per lavoro. Se sei libera, possiamo vederci: ___ (3) offro una pizza!\" Answers: (1) la, (2) a, (3) ti.",
          "Story: \"Quando ___ (1, essere) piccola, mia nonna mi ___ (2, raccontare) sempre storie di paura. Una sera, mentre ___ (3, leggere), ___ (4, andare) via la luce.\" Answers: (1) ero, (2) raccontava, (3) leggevamo, (4) è andata.",
        ],
        examples: [
          { es: "La settimana prossima vado a Napoli.", en: "Next week I'm going to Naples." },
          { es: "Ti offro una pizza.", en: "I'll buy you a pizza." },
          { es: "Mia nonna mi raccontava sempre storie.", en: "My grandmother always told me stories." },
          { es: "Mentre leggevamo, è andata via la luce.", en: "While we were reading, the power went off." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Next week I'm going [to] Naples.", sentence: "La settimana prossima vado ___ Napoli.", answer: "a", explanation: "\"A\" + city." },
          { type: "listen-choose", audio: "Mentre leggevamo, è andata via la luce.", question: "What happened?", options: ["The power went off.", "Someone came in.", "They fell asleep.", "The book was finished."], correctIndex: 0, explanation: "\"Andare via la luce\" = power cut." },
        ],
      },
    ],
    exercises: [
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'll buy [you] a pizza.", sentence: "___ offro una pizza.", answer: "Ti", explanation: "\"Offrire a\": indirect pronoun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My grandmother [used to tell] me stories.", sentence: "Mia nonna mi ___ storie.", answer: "raccontava", explanation: "Habit: imperfetto." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "While we were reading, the power [went] off.", sentence: "Mentre leggevamo, ___ via la luce.", answer: "è andata", explanation: "Sudden event: passato prossimo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've lived [in] Italy for two years.", sentence: "Vivo ___ Italia da due anni.", answer: "in", explanation: "\"In\" + country." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm glad you [are coming].", sentence: "Sono contento che tu ___.", answer: "venga", explanation: "Feeling + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're free, we can meet. (to a friend)", answer: "Se sei libera, possiamo vederci.", altAnswers: ["Se sei libero, possiamo vederci.", "Se sei libera, ci possiamo vedere.", "Se sei libero, ci possiamo vedere."], explanation: "Real condition." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When I was little, I was afraid of the dark.", answer: "Quando ero piccola, avevo paura del buio.", altAnswers: ["Quando ero piccolo, avevo paura del buio."], explanation: "Imperfetto for states." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already told her. (the news)", answer: "Gliel'ho già detto.", altAnswers: ["Gliel'ho già detta.", "Glielo ho già detto."], explanation: "\"Le\" + \"lo\" = \"glielo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How many of them do you want? (to a shopkeeper, formal)", answer: "Quanti ne vuole?", altAnswers: ["Quante ne vuole?"], explanation: "\"Ne\" for a quantity." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The museum was closed for restoration.", answer: "Il museo era chiuso per restauro.", altAnswers: ["Il museo era chiuso per lavori di restauro."], explanation: "\"Per\" + cause." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think they're right.", answer: "Penso che abbiano ragione.", altAnswers: ["Credo che abbiano ragione."], explanation: "Subjunctive \"abbiano\"." },
      { type: "word-order", prompt: "Put the words in order to say: My grandmother always told me stories.", words: ["Mia", "nonna", "mi", "raccontava", "sempre", "storie."], translation: "My grandmother always told me stories.", explanation: "No article with \"mia nonna\"." },
      { type: "multiple-choice", question: "\"Sono andato ___ dentista.\"", options: ["dal", "al", "nel", "dalla"], correctIndex: 0, explanation: "\"Da\" + person." },
      { type: "dictation", audio: "Quando ero piccola, mia nonna mi raccontava sempre storie di paura.", explanation: "Imperfetto for habits." },
      { type: "speak", text: "Ciao Giulia, la settimana prossima vado a Napoli per lavoro. Se sei libera, ti offro una pizza!", prompt: "Leave a voice message: Hi Giulia, next week I'm going to Naples for work. If you're free, I'll buy you a pizza!", tip: "\"Napoli\": stress on NA.", explanation: "Prepositions and pronouns in context." },
    ],
  },
];
