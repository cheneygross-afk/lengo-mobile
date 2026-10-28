// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u23-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian Upper Intermediate (B2) Unit 23 Extra Practice: Education.
// Optional lessons folded away under the unit
// (docs/italian-course/authoring.md).
export const IT_B2_U23_EXTRA: Lesson[] = [
  {
    slug: "b2-education-extra-1",
    level: "IT-B2",
    number: 1,
    title: "Extra Practice: School",
    summary: "Fresh texts about school life: schedules, tests, report cards and parents' meetings.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Messages from school",
        body: [
          "School notices and parents' chats use a fixed vocabulary: \"il colloquio\" (parent-teacher meeting), \"l'orario\" (schedule), \"la gita scolastica\" (school trip), \"l'uscita anticipata\" (leaving early), \"la giustificazione\" (absence note), \"il consiglio di classe\".",
        ],
        examples: [
          { es: "I colloqui con i professori si prenotano sul registro elettronico.", en: "Meetings with teachers are booked on the online register." },
          { es: "Venerdì la classe va in gita a Ravenna.", en: "On Friday the class is going on a trip to Ravenna." },
          { es: "Per l'uscita anticipata serve la firma di un genitore.", en: "To leave early a parent's signature is needed." },
          { es: "Ricordati di portare la giustificazione per l'assenza di lunedì.", en: "Remember to bring the note for Monday's absence." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Friday the class is going on a trip to Ravenna.", answer: "Venerdì la classe va in gita a Ravenna.", altAnswers: ["Venerdì la classe andrà in gita a Ravenna."], explanation: "\"Andare in gita\" = to go on a trip." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "To leave early a parent's signature is needed.", answer: "Per l'uscita anticipata serve la firma di un genitore.", altAnswers: ["Per uscire prima serve la firma di un genitore.", "Per l'uscita anticipata è necessaria la firma di un genitore."], explanation: "\"Serve\" agrees with \"la firma\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Meetings with teachers are booked online.", answer: "I colloqui con i professori si prenotano online.", altAnswers: ["I colloqui con gli insegnanti si prenotano online.", "I colloqui con i professori vengono prenotati online."], explanation: "\"Si prenotano\": si passive, plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Remember to bring the absence note. (to a child)", answer: "Ricordati di portare la giustificazione.", altAnswers: ["Ricordati di portare la giustificazione per l'assenza."], explanation: "\"Ricordarsi di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The schedule changes in October.", answer: "L'orario cambia a ottobre.", altAnswers: ["L'orario cambia in ottobre."], explanation: "\"L'orario\" = schedule, timetable." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My son got a seven in Italian on his report card.", answer: "Mio figlio ha preso sette in italiano in pagella.", altAnswers: ["Mio figlio ha preso un sette in italiano in pagella.", "Mio figlio ha sette in italiano in pagella.", "In pagella mio figlio ha preso sette in italiano."], explanation: "\"In pagella\" = on the report card." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lessons finish at one.", answer: "Le lezioni finiscono all'una.", altAnswers: ["Le lezioni terminano all'una."], explanation: "\"All'una\": one o'clock is singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher says he talks too much in class.", answer: "La prof dice che parla troppo in classe.", altAnswers: ["Il prof dice che parla troppo in classe.", "La professoressa dice che parla troppo in classe.", "Il professore dice che parla troppo in classe."], explanation: "Reported speech in the present: no tense change." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow I have two oral tests.", answer: "Domani ho due interrogazioni.", explanation: "\"L'interrogazione\" → \"le interrogazioni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If he studied more, he'd be promoted.", answer: "Se studiasse di più, sarebbe promosso.", altAnswers: ["Se studiasse di più, verrebbe promosso.", "Sarebbe promosso se studiasse di più."], explanation: "\"Se\" + imperfect subjunctive, conditional." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've booked [the parent-teacher meeting].", sentence: "Ho prenotato ___.", answer: "il colloquio", explanation: "\"Il colloquio\" also means interview." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's [held back] for the second time.", sentence: "È stata ___ per la seconda volta.", answer: "bocciata", explanation: "\"Bocciata\" agrees with the girl." },
      { type: "word-order", prompt: "Put the words in order to say: The class is going on a trip to Ravenna.", words: ["La classe", "va", "in gita", "a Ravenna."], translation: "The class is going on a trip to Ravenna.", explanation: "\"In gita\": no article." },
      { type: "multiple-choice", question: "A note says \"Uscita anticipata alle 11:00\". What does it mean?", options: ["The pupil leaves school early at 11.", "The pupil arrives at 11.", "School opens at 11.", "The trip leaves at 11."], correctIndex: 0, explanation: "\"Uscita anticipata\" = leaving early." },
      { type: "listen-choose", audio: "Ricordati di portare la giustificazione per l'assenza di lunedì.", question: "What must the child bring?", options: ["a note for Monday's absence", "homework for Monday", "a signature for a trip", "Monday's schedule"], correctIndex: 0, explanation: "\"La giustificazione\" = absence note." },
      { type: "dictation", audio: "I colloqui si prenotano sul registro elettronico.", explanation: "\"Si prenotano\": plural." },
      { type: "speak", text: "Buongiorno, vorrei prenotare un colloquio con la professoressa di matematica.", prompt: "Call the school: Good morning, I'd like to book a meeting with the math teacher.", tip: "col-LO-quio: double l.", explanation: "\"Vorrei\" + infinitive for a polite request." },
    ],
  },
  {
    slug: "b2-education-extra-2",
    level: "IT-B2",
    number: 2,
    title: "Extra Practice: University",
    summary: "Fresh texts about university life: enrollment, exams, thesis and graduation.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "From enrollment to graduation",
        body: [
          "University paperwork: \"l'immatricolazione\" (first enrollment), \"la segreteria studenti\" (student office), \"il libretto\" (record of exams), \"il piano di studi\" (study plan), \"la sessione di laurea\", \"la festa di laurea\".",
        ],
        examples: [
          { es: "L'immatricolazione si fa online entro settembre.", en: "Enrollment is done online by September." },
          { es: "Sono andata in segreteria per cambiare il piano di studi.", en: "I went to the student office to change my study plan." },
          { es: "Ho già venti esami sul libretto.", en: "I've already got twenty exams on my record." },
          { es: "Dopo la laurea abbiamo fatto una grande festa.", en: "After the graduation we had a big party." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Enrollment is done online by September.", answer: "L'immatricolazione si fa online entro settembre.", altAnswers: ["L'iscrizione si fa online entro settembre."], explanation: "\"Entro\" = by (a deadline)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I went to the student office.", answer: "Sono andato in segreteria.", altAnswers: ["Sono andata in segreteria.", "Sono andato alla segreteria studenti.", "Sono andata alla segreteria studenti."], explanation: "\"In segreteria\", like \"in ufficio\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I want to change my study plan.", answer: "Voglio cambiare il piano di studi.", altAnswers: ["Voglio cambiare il mio piano di studi.", "Vorrei cambiare il piano di studi."], explanation: "\"Il piano di studi\" = study plan." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've already passed twenty exams.", answer: "Ho già superato venti esami.", altAnswers: ["Ho già passato venti esami.", "Ho già dato venti esami."], explanation: "\"Superare\" or \"passare\" un esame." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The deadline for the thesis is in March.", answer: "La scadenza per la tesi è a marzo.", altAnswers: ["La scadenza della tesi è a marzo.", "Il termine per la tesi è a marzo."], explanation: "\"La scadenza\" = deadline." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My supervisor hasn't replied yet.", answer: "Il mio relatore non ha ancora risposto.", altAnswers: ["La mia relatrice non ha ancora risposto."], explanation: "\"Non ... ancora\" = not yet." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After the graduation we had a big party.", answer: "Dopo la laurea abbiamo fatto una grande festa.", altAnswers: ["Dopo la laurea abbiamo fatto una festa grande."], explanation: "\"La laurea\" = degree and graduation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I had studied more, I would have gotten thirty.", answer: "Se avessi studiato di più, avrei preso trenta.", altAnswers: ["Se avessi studiato di più avrei preso 30.", "Avrei preso trenta se avessi studiato di più."], explanation: "Impossible past: pluperfect subjunctive + past conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The lecture hall was full.", answer: "L'aula era piena.", altAnswers: ["L'aula magna era piena."], explanation: "\"L'aula\" = classroom, lecture hall." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She's doing a PhD in Turin.", answer: "Sta facendo il dottorato a Torino.", altAnswers: ["Fa il dottorato a Torino.", "Fa un dottorato a Torino."], explanation: "\"Il dottorato\" = PhD." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got twenty exams [on my record].", sentence: "Ho venti esami ___.", answer: "sul libretto", explanation: "\"Il libretto\" records your exams." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The next [exam date] is in June.", sentence: "Il prossimo ___ è a giugno.", answer: "appello", explanation: "\"L'appello\" = exam date." },
      { type: "word-order", prompt: "Put the words in order to say: I went to the student office to change my study plan.", words: ["Sono andata", "in segreteria", "per cambiare", "il piano", "di studi."], translation: "I went to the student office to change my study plan.", explanation: "\"Per\" + infinitive for purpose." },
      { type: "multiple-choice", question: "What is \"l'immatricolazione\"?", options: ["first enrollment at university", "a car registration only", "the graduation ceremony", "an exam"], correctIndex: 0, explanation: "The first enrollment; also used for registering a car." },
      { type: "listen-choose", audio: "Dopo la laurea abbiamo fatto una grande festa.", question: "What happened after graduating?", options: ["a big party", "a trip abroad", "a new exam", "a job interview"], correctIndex: 0, explanation: "\"Una grande festa\"." },
      { type: "dictation", audio: "L'immatricolazione si fa online entro settembre.", explanation: "\"Entro\" = by." },
      { type: "speak", text: "Mi mancano due esami e la tesi, poi finalmente mi laureo.", prompt: "Say it in Italian: I've got two exams and my thesis left, then I finally graduate.", tip: "LAU-re-o: stress on lau.", explanation: "\"Mi mancano\" + plural." },
    ],
  },
  {
    slug: "b2-education-extra-3",
    level: "IT-B2",
    number: 3,
    title: "Extra Practice: Debates",
    summary: "Fresh debate texts: phones in class, school uniforms, the length of the school day.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "For and against",
        body: [
          "Debate toolkit: \"c'è chi sostiene che\" + subjunctive, \"sono favorevole / contrario a\", \"da una parte ... dall'altra\", \"se\" + imperfect subjunctive, \"purché\". New topics: \"il cellulare in classe\", \"la divisa\" (school uniform; Italian schools rarely have one), \"il tempo pieno\" (full-day school).",
        ],
        examples: [
          { es: "Sono favorevole al divieto del cellulare in classe.", en: "I'm in favor of banning phones in class." },
          { es: "In Italia quasi nessuna scuola pubblica ha la divisa.", en: "In Italy almost no public school has a uniform." },
          { es: "C'è chi sostiene che il tempo pieno aiuti le famiglie.", en: "Some argue that full-day school helps families." },
          { es: "Se ci fosse la divisa, ci sarebbero meno differenze.", en: "If there were uniforms, there'd be fewer differences." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm in favor of banning phones in class.", answer: "Sono favorevole al divieto del cellulare in classe.", altAnswers: ["Sono favorevole a vietare il cellulare in classe.", "Sono favorevole a vietare i cellulari in classe."], explanation: "\"Favorevole a\" + noun or infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there were uniforms, there'd be fewer differences.", answer: "Se ci fosse la divisa, ci sarebbero meno differenze.", explanation: "\"Se ci fosse\" + \"ci sarebbero\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Almost no public school has a uniform.", answer: "Quasi nessuna scuola pubblica ha la divisa.", altAnswers: ["Quasi nessuna scuola statale ha la divisa."], explanation: "\"Nessuna\" before the verb needs no \"non\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some argue that full-day school helps families.", answer: "C'è chi sostiene che il tempo pieno aiuti le famiglie.", altAnswers: ["Alcuni sostengono che il tempo pieno aiuti le famiglie."], explanation: "Subjunctive \"aiuti\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm against uniforms. (a man speaking)", answer: "Sono contrario alla divisa.", altAnswers: ["Io sono contrario alla divisa.", "Sono contrario alle divise."], explanation: "\"Contrario a\" + article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's absurd that pupils use their phones in class.", answer: "È assurdo che gli alunni usino il cellulare in classe.", altAnswers: ["È assurdo che gli studenti usino il cellulare in classe.", "È assurdo che gli alunni usino i cellulari in classe."], explanation: "\"È assurdo che\" + \"usino\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Phones can be useful, as long as the teacher decides.", answer: "Il cellulare può essere utile, purché decida l'insegnante.", altAnswers: ["I cellulari possono essere utili, purché decida l'insegnante.", "Il cellulare può essere utile, purché sia l'insegnante a decidere."], explanation: "\"Purché\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On the one hand it's expensive, on the other it's useful.", answer: "Da una parte è costoso, dall'altra è utile.", altAnswers: ["Da un lato è costoso, dall'altro è utile.", "Da una parte costa caro, dall'altra è utile."], explanation: "\"Da una parte ... dall'altra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like school to start later.", answer: "Vorrei che la scuola cominciasse più tardi.", altAnswers: ["Vorrei che la scuola iniziasse più tardi.", "Mi piacerebbe che la scuola cominciasse più tardi."], explanation: "\"Vorrei che\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If the school day were longer, pupils would be more tired.", answer: "Se la giornata scolastica fosse più lunga, gli alunni sarebbero più stanchi.", altAnswers: ["Se l'orario scolastico fosse più lungo, gli alunni sarebbero più stanchi.", "Se la giornata scolastica fosse più lunga, i ragazzi sarebbero più stanchi."], explanation: "Hypothetical: \"fosse\" + \"sarebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [in favor of] full-day school.", sentence: "Sono ___ tempo pieno.", answer: "favorevole al", explanation: "\"Favorevole a\" + \"il\" = \"al\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt that the ban [will work].", sentence: "Dubito che il divieto ___.", answer: "funzioni", explanation: "\"Dubitare che\" + subjunctive." },
      { type: "word-order", prompt: "Put the words in order to say: If there were uniforms, there'd be fewer differences.", words: ["Se ci fosse", "la divisa,", "ci sarebbero", "meno", "differenze."], translation: "If there were uniforms, there'd be fewer differences.", explanation: "\"Meno\" is invariable." },
      { type: "multiple-choice", question: "What is \"il tempo pieno\" at an Italian primary school?", options: ["a full-day schedule including lunch", "a full-time teacher", "a full class", "the summer vacation"], correctIndex: 0, explanation: "\"Tempo pieno\": school until mid-afternoon with lunch." },
      { type: "listen-choose", audio: "C'è chi sostiene che il tempo pieno aiuti le famiglie.", question: "What do some people argue?", options: ["Full-day school helps families.", "Full-day school is too expensive.", "Families don't want full-day school.", "Teachers want shorter days."], correctIndex: 0, explanation: "\"Aiuti le famiglie\" = helps families." },
      { type: "dictation", audio: "Sono favorevole al divieto del cellulare in classe.", explanation: "\"Al divieto\" = to the ban." },
      { type: "speak", text: "Da una parte il cellulare può essere utile, dall'altra distrae gli studenti.", prompt: "Weigh it up: On the one hand phones can be useful, on the other they distract students.", tip: "di-STRA-e: three syllables.", explanation: "\"Da una parte ... dall'altra\"." },
    ],
  },
];
