// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u29-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 29 Extra Practice: Reading Lab.
// Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U29_EXTRA: Lesson[] = [
  {
    slug: "b2-reading-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: More Editorials",
    summary: "A fresh editorial on cell phones in schools: thesis, arguments, objection and conclusion.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Phones in the classroom",
        body: [
          "This short editorial argues that phones should stay out of the classroom. Find the thesis, the arguments, the objection and the reply.",
        ],
        examples: [
          { es: "È giusto vietare i cellulari in classe? Secondo noi, sì.", en: "Is it right to ban cell phones in class? In our view, yes." },
          { es: "Gli studenti si distraggono continuamente e la concentrazione ne risente.", en: "Students are constantly distracted and concentration suffers." },
          { es: "Qualcuno dirà che il telefono è uno strumento di studio.", en: "Someone will say that the phone is a study tool." },
          { es: "Ma per questo esistono i computer della scuola, usati sotto la guida degli insegnanti.", en: "But that's what school computers are for, used under teachers' guidance." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is the editorial's thesis?", options: ["Phones should be banned in class.", "Phones are useful study tools.", "Schools need more phones.", "Teachers should use phones more."], correctIndex: 0, explanation: "\"Secondo noi, sì\": yes to the ban." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Students are constantly distracted.", answer: "Gli studenti si distraggono continuamente.", altAnswers: ["Gli studenti sono continuamente distratti."], explanation: "\"Distrarsi\" = to get distracted." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "What objection does the author anticipate?", options: ["The phone is a study tool.", "Phones are too expensive.", "Parents want to call their children.", "Phones are already banned."], correctIndex: 0, explanation: "\"Qualcuno dirà che il telefono è uno strumento di studio\"." },
      { type: "multiple-choice", question: "How does the author reply?", options: ["School computers can do that job.", "Phones should be cheaper.", "Students should study at home.", "Teachers should decide."], correctIndex: 0, explanation: "\"Per questo esistono i computer della scuola\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is it right to ban cell phones in class?", answer: "È giusto vietare i cellulari in classe?", altAnswers: ["È giusto vietare i telefonini in classe?", "È giusto proibire i cellulari in classe?"], explanation: "\"È giusto\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Concentration suffers.", answer: "La concentrazione ne risente.", explanation: "\"Risentirne\" = to suffer from it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Someone will say that the phone is a study tool.", answer: "Qualcuno dirà che il telefono è uno strumento di studio.", altAnswers: ["Qualcuno dirà che il cellulare è uno strumento di studio."], explanation: "Anticipating an objection." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "That's what school computers are for.", answer: "Per questo esistono i computer della scuola.", altAnswers: ["A questo servono i computer della scuola."], explanation: "\"Computer\" is invariable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In our view, the ban is necessary.", answer: "Secondo noi, il divieto è necessario.", altAnswers: ["Secondo noi il divieto è necessario.", "A nostro avviso, il divieto è necessario."], explanation: "\"Il divieto\" = the ban." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It is important that students learn to concentrate.", answer: "È importante che gli studenti imparino a concentrarsi.", explanation: "\"È importante che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Students [get distracted] constantly.", sentence: "Gli studenti ___ continuamente.", answer: "si distraggono", explanation: "\"Distrarsi\" like \"trarre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Used [under the guidance of] teachers.", sentence: "Usati ___ insegnanti.", answer: "sotto la guida degli", explanation: "\"Sotto la guida di\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In our view], yes.", sentence: "___, sì.", answer: "Secondo noi", altAnswers: ["A nostro avviso", "A nostro parere"], explanation: "Opinion marker." },
      { type: "word-order", prompt: "Put the words in order to say: Is it right to ban cell phones in class?", words: ["È giusto", "vietare", "i cellulari", "in classe?"], translation: "Is it right to ban cell phones in class?", explanation: "Rhetorical opening question." },
      { type: "listen-choose", audio: "Gli studenti si distraggono continuamente e la concentrazione ne risente.", question: "What problem does the author describe?", options: ["distraction and poor concentration", "phone theft", "high costs", "bullying"], correctIndex: 0, explanation: "\"Si distraggono\", \"la concentrazione ne risente\"." },
      { type: "dictation", audio: "È giusto vietare i cellulari in classe? Secondo noi, sì.", explanation: "Thesis as question and answer." },
      { type: "speak", text: "Secondo me il divieto è giusto, perché gli studenti si distraggono continuamente.", prompt: "Give your view: In my opinion the ban is right, because students are constantly distracted.", tip: "di-STRAG-go-no: double g.", explanation: "Opinion + reason." },
    ],
  },
  {
    slug: "b2-reading-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: More Long-Form",
    summary: "A fresh reportage extract about the night shift at a city's fruit and vegetable market.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "The market at night",
        body: [
          "A reportage on \"il mercato ortofrutticolo\", the wholesale fruit and vegetable market, which works while the city sleeps. Notice the scene-setting present, the numbers and the quoted voices.",
        ],
        examples: [
          { es: "Sono le tre di notte e il mercato è già pieno di furgoni.", en: "It's three in the morning and the market is already full of vans." },
          { es: "Ogni notte passano di qui oltre cinquecento tonnellate di frutta e verdura.", en: "Every night over five hundred metric tons of fruit and vegetables pass through here." },
          { es: "\"Faccio questo lavoro da trent'anni\", racconta un grossista.", en: "I've done this job for thirty years, says a wholesaler." },
          { es: "Alle sei, quando la città si sveglia, i banchi sono già vuoti.", en: "At six, when the city wakes up, the stalls are already empty." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "When does the market work?", options: ["at night", "in the afternoon", "only on weekends", "in the evening"], correctIndex: 0, explanation: "\"Le tre di notte\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's three in the morning and the market is already full.", answer: "Sono le tre di notte e il mercato è già pieno.", altAnswers: ["Sono le tre del mattino e il mercato è già pieno."], explanation: "\"Le tre di notte\" = 3 a.m." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "How much produce passes through each night?", options: ["over 500 metric tons", "about 50 metric tons", "5,000 metric tons", "500 kilos"], correctIndex: 0, explanation: "\"Oltre cinquecento tonnellate\"." },
      { type: "multiple-choice", question: "What happens at six?", options: ["The stalls are already empty.", "The market opens.", "The vans arrive.", "The prices go up."], correctIndex: 0, explanation: "\"I banchi sono già vuoti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every night over five hundred metric tons pass through here.", answer: "Ogni notte passano di qui oltre cinquecento tonnellate.", altAnswers: ["Ogni notte passano di qui più di cinquecento tonnellate.", "Ogni notte passano da qui oltre cinquecento tonnellate."], explanation: "\"Passare di qui\" = to pass through here." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've done this job for thirty years.", answer: "Faccio questo lavoro da trent'anni.", altAnswers: ["Faccio questo lavoro da trenta anni."], explanation: "Present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "When the city wakes up, the stalls are already empty.", answer: "Quando la città si sveglia, i banchi sono già vuoti.", explanation: "\"Svegliarsi\" = to wake up." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The market is full of vans.", answer: "Il mercato è pieno di furgoni.", explanation: "\"Pieno di\" = full of." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Prices are set before dawn.", answer: "I prezzi si decidono prima dell'alba.", altAnswers: ["I prezzi vengono decisi prima dell'alba.", "I prezzi si fissano prima dell'alba.", "I prezzi vengono fissati prima dell'alba."], explanation: "Si passivante or passive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Says a wholesaler.", answer: "Racconta un grossista.", altAnswers: ["Dice un grossista.", "Spiega un grossista."], explanation: "Reporting verb before the subject." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [wholesale fruit and vegetable market].", sentence: "Il ___.", answer: "mercato ortofrutticolo", explanation: "\"Orto\" + \"frutta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The [stalls] are empty.", sentence: "I ___ sono vuoti.", answer: "banchi", explanation: "\"Il banco\" = stall." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Over] five hundred metric tons.", sentence: "___ cinquecento tonnellate.", answer: "Oltre", altAnswers: ["Più di"], explanation: "\"Oltre\" = over." },
      { type: "word-order", prompt: "Put the words in order to say: It's three in the morning and the market is already full of vans.", words: ["Sono le tre", "di notte", "e il mercato", "è già pieno", "di furgoni."], translation: "It's three in the morning and the market is already full of vans.", explanation: "Scene-setting present." },
      { type: "listen-choose", audio: "Faccio questo lavoro da trent'anni, racconta un grossista.", question: "How long has the wholesaler done this job?", options: ["thirty years", "three years", "thirteen years", "three months"], correctIndex: 0, explanation: "\"Da trent'anni\"." },
      { type: "dictation", audio: "Alle sei, quando la città si sveglia, i banchi sono già vuoti.", explanation: "Time clause with \"quando\"." },
      { type: "speak", text: "Ogni notte passano di qui oltre cinquecento tonnellate di frutta e verdura.", prompt: "Read the figure: Every night over five hundred metric tons of fruit and vegetables pass through here.", tip: "ton-nel-LA-te: double n and double l.", explanation: "Subject after the verb." },
    ],
  },
  {
    slug: "b2-reading-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: More CILS DUE Tasks",
    summary: "Fresh CILS DUE-style tasks: a short notice with multiple choice, information finding and a cloze.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "A notice from a language school",
        body: [
          "Read the notice and do the tasks. Remember: questions follow the order of the text, and wrong options often change one detail.",
        ],
        examples: [
          { es: "I corsi intensivi di luglio iniziano lunedì 3 e terminano venerdì 28.", en: "The intensive July courses start on Monday the 3rd and end on Friday the 28th." },
          { es: "Le lezioni si svolgono dal lunedì al venerdì, dalle 9 alle 13.", en: "Lessons take place Monday to Friday, from 9 to 1." },
          { es: "Il pomeriggio sono previste attività culturali facoltative.", en: "In the afternoon optional cultural activities are planned." },
          { es: "Le iscrizioni si chiudono il 15 giugno.", en: "Enrollment closes on June 15." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Are the afternoon activities required?", options: ["No, they're optional.", "Yes.", "Only on Fridays.", "Only for beginners."], correctIndex: 0, explanation: "\"Facoltative\" = optional." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Enrollment closes on June 15.", answer: "Le iscrizioni si chiudono il 15 giugno.", altAnswers: ["Le iscrizioni chiudono il 15 giugno.", "Le iscrizioni si chiudono il quindici giugno."], explanation: "\"Le iscrizioni\" is plural." },
        ],
      },
    ],
    exercises: [
      { type: "multi-select", question: "Which statements are in the notice?", options: ["Lessons are in the morning.", "The course lasts four weeks.", "Afternoon activities are optional.", "Lessons are on Saturdays too.", "Enrollment closes on June 30."], correctIndexes: [0, 1, 2], explanation: "Lessons Monday to Friday; enrollment closes on June 15." },
      { type: "multiple-choice", question: "When do lessons finish each day?", options: ["at 1 p.m.", "at 9 a.m.", "at 3 p.m.", "at 11 a.m."], correctIndex: 0, explanation: "\"Dalle 9 alle 13\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The courses start on Monday and end on Friday.", answer: "I corsi iniziano lunedì e terminano venerdì.", altAnswers: ["I corsi cominciano lunedì e finiscono venerdì.", "I corsi iniziano il lunedì e terminano il venerdì."], explanation: "\"Terminare\" = to end." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lessons take place from Monday to Friday.", answer: "Le lezioni si svolgono dal lunedì al venerdì.", altAnswers: ["Le lezioni si tengono dal lunedì al venerdì.", "Le lezioni sono dal lunedì al venerdì."], explanation: "\"Svolgersi\" = to take place." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Optional cultural activities are planned.", answer: "Sono previste attività culturali facoltative.", altAnswers: ["Sono previste delle attività culturali facoltative."], explanation: "\"Facoltativo\" = optional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Space is limited, so enroll early.", answer: "I posti sono limitati, quindi iscrivetevi presto.", altAnswers: ["I posti sono limitati, perciò iscrivetevi presto.", "I posti sono limitati, quindi iscriviti presto.", "I posti sono limitati, quindi si consiglia di iscriversi presto."], explanation: "\"Iscriversi\" with \"voi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lessons are from 9 to 1.", answer: "Le lezioni sono dalle 9 alle 13.", altAnswers: ["Le lezioni sono dalle nove all'una.", "Le lezioni si svolgono dalle 9 alle 13.", "Le lezioni vanno dalle 9 alle 13."], explanation: "\"Dalle\" ... \"alle\" with clock times." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "If you [enrolled] by June, you'd get a discount.", sentence: "Se ti ___ entro giugno, avresti uno sconto.", answer: "iscrivessi", explanation: "\"Se\" + imperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The school [where] I studied.", sentence: "La scuola ___ ho studiato.", answer: "dove", altAnswers: ["in cui"], explanation: "Relative of place." },
      { type: "word-order", prompt: "Put the words in order to say: Enrollment closes on June 15.", words: ["Le iscrizioni", "si chiudono", "il 15", "giugno."], translation: "Enrollment closes on June 15.", explanation: "Plural verb." },
      { type: "listen-choose", audio: "Il pomeriggio sono previste attività culturali facoltative.", question: "What happens in the afternoon?", options: ["optional cultural activities", "required lessons", "exams", "nothing"], correctIndex: 0, explanation: "\"Facoltative\"." },
      { type: "dictation", audio: "I corsi intensivi di luglio iniziano lunedì 3 e terminano venerdì 28.", explanation: "Dates with weekdays." },
      { type: "speak", text: "Le lezioni si svolgono dal lunedì al venerdì, dalle nove all'una.", prompt: "Tell a friend: Lessons are Monday to Friday, from nine to one.", tip: "all'U-na: one o'clock is \"l'una\".", explanation: "Spoken times use \"l'una\"." },
    ],
  },
];
