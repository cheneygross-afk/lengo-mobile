// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b2-u23.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian Upper Intermediate (B2) Unit 23: Education. The school system,
// university, school life and education debates; review in context of
// comparisons, the subjunctive in opinions and if sentences.
// Conventions: docs/italian-course/authoring.md.
export const IT_B2_U23: Lesson[] = [
  {
    slug: "b2-school-system",
    level: "IT-B2",
    number: 1,
    title: "The Italian School System",
    summary: "Follow an Italian child from the asilo nido to the maturità, with the official names and the everyday ones.",
    duration: "17 min",
    sections: [
      {
        heading: "From nursery to middle school",
        body: [
          "Every stage has an official name and an everyday one. \"L'asilo nido\" (or \"il nido\") is for children under three and is optional. \"La scuola dell'infanzia\", which everyone still calls \"l'asilo\" or \"la materna\", goes from three to six. Then \"la scuola primaria\", universally \"le elementari\": five years, from six to eleven, with \"i maestri\" and \"le maestre\".",
          "\"La scuola secondaria di primo grado\" is \"le medie\": three years, from eleven to fourteen, ending with an exam. From here teachers are \"i professori\" (\"i prof\" in student slang). Note the plurals: Italians go \"alle elementari\" and \"alle medie\", and a pupil is \"in prima\", \"in seconda\" (in the first, second year) of each stage.",
          "School life starts early: lessons usually run from about 8:00 to 13:00 or 14:00, five or six days a week depending on the school, and pupils go home for lunch. \"Il tempo pieno\" (full-day school, until about 16:30 with lunch at school) exists mainly at primary level.",
        ],
        examples: [
          { es: "Mia figlia va al nido tre mattine a settimana.", en: "My daughter goes to nursery three mornings a week." },
          { es: "All'asilo i bambini imparano a stare insieme.", en: "At nursery school children learn to get along." },
          { es: "Mio nipote fa la terza elementare.", en: "My nephew is in third grade." },
          { es: "La maestra di italiano è molto paziente.", en: "The Italian teacher is very patient." },
          { es: "Alle medie ho avuto un professore di matematica bravissimo.", en: "At middle school I had a brilliant maths teacher." },
          { es: "Le medie finiscono con un esame a giugno.", en: "Middle school ends with an exam in June." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian, with the everyday name.", source: "My nephew is in third grade at primary school.", answer: "Mio nipote fa la terza elementare.", altAnswers: ["Mio nipote è in terza elementare.", "Mio nipote frequenta la terza elementare."], explanation: "\"Fare la terza elementare\" or \"essere in terza\": the year as an ordinal." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "At middle school I had a brilliant maths teacher.", answer: "Alle medie ho avuto un professore di matematica bravissimo.", altAnswers: ["Alle medie avevo un professore di matematica bravissimo.", "Alle medie ho avuto una professoressa di matematica bravissima."], explanation: "\"Alle medie\": plural; from middle school on, teachers are \"professori\"." },
          { type: "multiple-choice", question: "Who teaches at \"le elementari\"?", options: ["i maestri e le maestre", "i professori universitari", "i presidi", "i tutor"], correctIndex: 0, explanation: "Primary teachers are \"maestri\"; secondary teachers are \"professori\"." },
        ],
      },
      {
        heading: "Secondary school and the maturità",
        body: [
          "\"La scuola secondaria di secondo grado\" is \"le superiori\": five years, from fourteen to nineteen. Students choose between \"il liceo\" (classico, scientifico, linguistico, artistico, delle scienze umane...), more academic; \"l'istituto tecnico\"; and \"l'istituto professionale\", more vocational. School is compulsory until sixteen.",
          "It ends with \"l'esame di Stato\", known as \"la maturità\": written papers and an oral exam, with a mark out of 100. \"Il liceo classico\" teaches Latin and ancient Greek; \"lo scientifico\" more maths and science. Trap: \"il liceo\" is not a lyceum or a college; it's simply an academic upper secondary school.",
          "After the \"superiori\" you get \"il diploma\": \"diplomarsi\" is to finish secondary school. Many technical and vocational students go straight to work, while most \"liceali\" (liceo students) go on to university.",
        ],
        examples: [
          { es: "Dopo le medie ho scelto il liceo scientifico.", en: "After middle school I chose a science-focused secondary school." },
          { es: "Mio fratello frequenta un istituto tecnico per il turismo.", en: "My brother attends a technical school specialising in tourism." },
          { es: "Al classico si studiano il latino e il greco antico.", en: "At the liceo classico you study Latin and ancient Greek." },
          { es: "Quest'anno Giulia fa la maturità.", en: "Giulia is taking her final school exams this year." },
          { es: "Ha preso cento alla maturità.", en: "She got a hundred in her final exams." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia is taking her final school exams this year.", answer: "Quest'anno Giulia fa la maturità.", altAnswers: ["Giulia fa la maturità quest'anno.", "Quest'anno Giulia ha la maturità.", "Quest'anno Giulia dà la maturità."], explanation: "\"Fare la maturità\" = to sit the final state exam." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My brother attends [a technical school].", sentence: "Mio fratello frequenta ___.", answer: "un istituto tecnico", explanation: "\"Frequentare\" = to attend; \"l'istituto tecnico\"." },
          { type: "listen-choose", audio: "Al classico si studiano il latino e il greco antico.", question: "What do you study at the liceo classico?", options: ["Latin and ancient Greek", "classical music", "history of art only", "modern languages"], correctIndex: 0, explanation: "\"Si studiano\" agrees with the two subjects." },
        ],
      },
      {
        heading: "Comparing stages",
        body: [
          "To compare, use \"più ... di\" and \"meno ... di\" with nouns and pronouns (\"le superiori sono più impegnative delle medie\"), \"più ... che\" between two adjectives, verbs or phrases (\"è più teorico che pratico\"), and \"tanto quanto\" or \"così come\" for equality.",
          "\"Rispetto a\" (compared with) is the workhorse of comparisons: \"rispetto alle medie, il liceo richiede molto più studio\". Contrast with \"mentre\" (whereas): \"il liceo prepara all'università, mentre il professionale prepara al lavoro\".",
          "For the size of a difference, put \"molto\", \"poco\" or \"un po'\" before \"più\": \"molto più impegnativo\", \"un po' meno teorico\". \"Migliore\" and \"peggiore\" are the irregular better and worse: \"la scuola italiana è migliore in storia\".",
        ],
        examples: [
          { es: "Le superiori sono più impegnative delle medie.", en: "Upper secondary is more demanding than middle school." },
          { es: "Il programma è più teorico che pratico.", en: "The curriculum is more theoretical than practical." },
          { es: "Rispetto alle medie, il liceo richiede molto più studio.", en: "Compared with middle school, the liceo takes much more studying." },
          { es: "Il liceo prepara all'università, mentre il professionale prepara al lavoro.", en: "The liceo prepares you for university, whereas the vocational school prepares you for work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The curriculum is more theoretical than practical.", answer: "Il programma è più teorico che pratico.", explanation: "Two adjectives compared: \"più ... che\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Upper secondary is more demanding than middle school.", answer: "Le superiori sono più impegnative delle medie.", altAnswers: ["Le superiori sono più difficili delle medie.", "La scuola superiore è più impegnativa della scuola media."], explanation: "Two nouns compared: \"più ... di\" + article: \"delle medie\"." },
          { type: "speak", text: "Il liceo prepara all'università, mentre il professionale prepara al lavoro.", prompt: "Say it in Italian: The liceo prepares you for university, whereas the vocational school prepares you for work.", tip: "pro-fes-sio-NA-le: double s.", explanation: "\"Mentre\" sets up the contrast." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My daughter goes to nursery.", answer: "Mia figlia va al nido.", altAnswers: ["Mia figlia va all'asilo nido.", "Mia figlia va all'asilo."], explanation: "\"Il nido\" for under-threes; \"l'asilo\" for three to six, though many use it loosely." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Primary school lasts five years.", answer: "Le elementari durano cinque anni.", altAnswers: ["La scuola primaria dura cinque anni.", "La scuola elementare dura cinque anni."], explanation: "\"Le elementari\" is plural, so \"durano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "School is compulsory until sixteen.", answer: "La scuola è obbligatoria fino a sedici anni.", altAnswers: ["La scuola è obbligatoria fino ai sedici anni.", "La scuola è obbligatoria fino a 16 anni.", "La scuola è obbligatoria fino ai 16 anni."], explanation: "\"Obbligatoria\" agrees with \"la scuola\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After middle school I chose the liceo linguistico.", answer: "Dopo le medie ho scelto il liceo linguistico.", altAnswers: ["Dopo le medie ho scelto il linguistico."], explanation: "\"Dopo le medie\": the everyday name." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She got a hundred in her final exams.", answer: "Ha preso cento alla maturità.", altAnswers: ["Ha preso 100 alla maturità.", "Alla maturità ha preso cento."], explanation: "\"Prendere\" + mark; the maturità is out of 100." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Compared with] middle school, the liceo takes more studying.", sentence: "___ medie, il liceo richiede più studio.", answer: "Rispetto alle", altAnswers: ["In confronto alle"], explanation: "\"Rispetto a\" + article: \"alle medie\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "At primary school my [teacher] was called Anna.", sentence: "Alle elementari la mia ___ si chiamava Anna.", answer: "maestra", explanation: "Primary school teachers are \"maestri\"." },
      { type: "word-order", prompt: "Put the words in order to say: Middle school ends with an exam in June.", words: ["Le medie", "finiscono", "con un", "esame", "a giugno."], translation: "Middle school ends with an exam in June.", explanation: "Plural subject, plural verb." },
      { type: "matching", instructions: "Match the everyday name to the official stage.", pairs: [{ left: "l'asilo", right: "scuola dell'infanzia (3-6)" }, { left: "le elementari", right: "scuola primaria (6-11)" }, { left: "le medie", right: "secondaria di primo grado (11-14)" }, { left: "le superiori", right: "secondaria di secondo grado (14-19)" }, { left: "la maturità", right: "esame di Stato" }], explanation: "Italians use the everyday names in conversation." },
      { type: "dictation", audio: "Dopo le medie ho scelto il liceo scientifico.", explanation: "\"Le medie\" and \"il liceo scientifico\"." },
      { type: "speak", text: "Ho fatto le elementari e le medie in un paese, poi il liceo classico in città.", prompt: "Tell your school history: I did primary and middle school in a village, then the liceo classico in the city.", tip: "e-le-men-TA-ri: stress on ta.", explanation: "\"Fare\" + school stage, with the everyday names." },
    ],
  },
  {
    slug: "b2-university",
    level: "IT-B2",
    number: 2,
    title: "University",
    summary: "Understand how Italian degrees, oral exams, marks out of thirty and the thesis work, and talk about student life.",
    duration: "17 min",
    sections: [
      {
        heading: "Degrees",
        body: [
          "The first degree is \"la laurea triennale\" (three years), followed by \"la laurea magistrale\" (two more). Some courses, like medicine and law, are \"a ciclo unico\": five or six years in one go. To graduate is \"laurearsi\" (\"mi sono laureata in Economia\"), and a graduate is \"un laureato\" or \"una laureata\". Then you may go on to \"il dottorato\" (PhD).",
          "Students choose \"un corso di laurea\" (a degree course) within a department, still often called \"la facoltà\". You \"ti iscrivi\" (enrol) \"a\" a course, \"frequenti\" (attend) \"le lezioni\", and collect \"i crediti\" (CFU). Trap: \"la lettura\" is reading; a lecture is \"una lezione\".",
          "Degree subjects are capitalised in Italian when they name a course: \"una laurea in Lettere\" (humanities), \"Giurisprudenza\" (law), \"Scienze politiche\", \"Lingue\". \"Studiare legge\" is common in speech, but the course is \"Giurisprudenza\".",
        ],
        examples: [
          { es: "Si è laureata in Economia a Bologna.", en: "She got her degree in economics in Bologna." },
          { es: "Dopo la triennale ho fatto la magistrale a Milano.", en: "After my bachelor's I did a master's in Milan." },
          { es: "Medicina è un corso a ciclo unico di sei anni.", en: "Medicine is a single six-year degree course." },
          { es: "Mi sono iscritto a Ingegneria nel 2020.", en: "I enrolled in engineering in 2020." },
          { es: "Le lezioni cominciano alle otto e mezza.", en: "Lectures start at half past eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She got her degree in economics.", answer: "Si è laureata in Economia.", altAnswers: ["Si è laureata in economia."], explanation: "\"Laurearsi in\" + subject; reflexive, so \"essere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lectures start at half past eight.", answer: "Le lezioni cominciano alle otto e mezza.", altAnswers: ["Le lezioni iniziano alle otto e mezza.", "Le lezioni cominciano alle 8:30.", "Le lezioni iniziano alle 8:30.", "Le lezioni cominciano alle otto e mezzo."], explanation: "A lecture is \"una lezione\"; \"la lettura\" is reading." },
          { type: "multiple-choice", question: "Your friend says \"Faccio la magistrale\". What is she doing?", options: ["a two-year master's degree", "a teacher training course", "her first degree", "a PhD"], correctIndex: 0, explanation: "\"La magistrale\" follows the three-year \"triennale\"." },
        ],
      },
      {
        heading: "Exams out of thirty",
        body: [
          "Many university exams are oral: you \"dai\" or \"sostieni\" un esame (take an exam) on a date called \"l'appello\", in a \"sessione\". The mark is \"in trentesimi\": 18 is the pass mark and 30 the top, with \"30 e lode\" (30 cum laude) for excellence. Students may \"rifiutare il voto\" (turn down the mark) and try again.",
          "To fail is \"essere bocciato\" or, more casually, \"farsi bocciare\"; to pass is \"passare\" or \"superare\" l'esame. The final degree mark is out of 110, and \"110 e lode\" is every student's dream.",
          "Exams are public: other students often sit in the room and listen to the oral. Before an exam, Italians wish each other \"in bocca al lupo\", answered with \"crepi!\" (or \"crepi il lupo!\").",
        ],
        examples: [
          { es: "Domani do l'esame di Diritto privato.", en: "Tomorrow I'm taking the private law exam." },
          { es: "Ho preso 30 e lode in Storia contemporanea!", en: "I got top marks with honours in contemporary history!" },
          { es: "Ha rifiutato un 22 e lo ridà a febbraio.", en: "He turned down a 22 and is retaking it in February." },
          { es: "Mi hanno bocciato all'orale.", en: "They failed me in the oral." },
          { es: "Si è laureato con 110 e lode.", en: "He graduated with first-class honours." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow I'm taking the law exam.", answer: "Domani do l'esame di Diritto.", altAnswers: ["Domani do l'esame di diritto.", "Domani sostengo l'esame di Diritto.", "Domani sostengo l'esame di diritto.", "Domani ho l'esame di Diritto.", "Domani ho l'esame di diritto."], explanation: "\"Dare un esame\" = to take an exam; \"diritto\" = law." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [turned down the mark] and is retaking the exam.", sentence: "Ha ___ e ridà l'esame.", answer: "rifiutato il voto", explanation: "Students can \"rifiutare il voto\" and try again." },
          { type: "listen-choose", audio: "Ho preso 30 e lode in Storia contemporanea!", question: "How did the exam go?", options: ["The best possible mark.", "A bare pass.", "A fail.", "An average mark."], correctIndex: 0, explanation: "\"30 e lode\" is the top mark." },
        ],
      },
      {
        heading: "Thesis and student life",
        body: [
          "To graduate you write \"la tesi\" with \"il relatore\" (supervisor) and then \"discuti la tesi\" (defend it) at \"la seduta di laurea\". Friends bring \"la corona d'alloro\" (a laurel wreath) and there's a party.",
          "\"I fuori sede\" are students who study away from home and share a flat: \"una stanza singola\" or \"doppia\". \"Andare fuori corso\" is to fall behind and take longer than planned. \"Il diritto allo studio\" covers grants (\"le borse di studio\") and student housing.",
        ],
        examples: [
          { es: "Sto scrivendo la tesi sulla storia del cinema italiano.", en: "I'm writing my thesis on the history of Italian cinema." },
          { es: "Discute la tesi venerdì: siamo tutti invitati.", en: "She defends her thesis on Friday: we're all invited." },
          { es: "Da fuori sede divido un appartamento con tre ragazze.", en: "Studying away from home, I share a flat with three girls." },
          { es: "È andato fuori corso perché lavorava.", en: "He fell behind with his degree because he was working." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm writing my thesis on Italian cinema.", answer: "Sto scrivendo la tesi sul cinema italiano.", altAnswers: ["Scrivo la tesi sul cinema italiano.", "Sto scrivendo la mia tesi sul cinema italiano."], explanation: "\"La tesi su\" + topic." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He fell behind because he was working.", answer: "È andato fuori corso perché lavorava.", explanation: "\"Andare fuori corso\"; imperfect for the background cause." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I enrolled in engineering.", answer: "Mi sono iscritto a Ingegneria.", altAnswers: ["Mi sono iscritta a Ingegneria.", "Mi sono iscritto a ingegneria.", "Mi sono iscritta a ingegneria.", "Mi sono iscritto ad Ingegneria.", "Mi sono iscritta ad Ingegneria."], explanation: "\"Iscriversi a\" + course." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After my bachelor's I did a master's.", answer: "Dopo la triennale ho fatto la magistrale.", altAnswers: ["Dopo la laurea triennale ho fatto la magistrale.", "Dopo la triennale ho fatto la laurea magistrale."], explanation: "\"La triennale\", \"la magistrale\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They failed me in the oral.", answer: "Mi hanno bocciato all'orale.", altAnswers: ["Mi hanno bocciata all'orale.", "Sono stato bocciato all'orale.", "Sono stata bocciata all'orale."], explanation: "\"Bocciare\" = to fail someone." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He graduated with first-class honours.", answer: "Si è laureato con 110 e lode.", altAnswers: ["Si è laureato con centodieci e lode."], explanation: "The top degree mark: \"110 e lode\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "18 is the pass mark.", answer: "Il 18 è il voto minimo per passare.", altAnswers: ["Diciotto è il voto minimo per passare.", "Il diciotto è il voto minimo per passare.", "Il 18 è la sufficienza."], explanation: "Exams are marked out of 30; 18 is the minimum." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She defends her thesis on Friday.", answer: "Discute la tesi venerdì.", altAnswers: ["Venerdì discute la tesi.", "Si laurea venerdì."], explanation: "\"Discutere la tesi\" = to defend the thesis." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I share a flat with other [students from out of town].", sentence: "Divido un appartamento con altri ___.", answer: "fuori sede", altAnswers: ["studenti fuori sede"], explanation: "\"Fuori sede\" is invariable." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I won [a grant].", sentence: "Ho vinto ___.", answer: "una borsa di studio", explanation: "\"La borsa di studio\" = grant, scholarship." },
      { type: "word-order", prompt: "Put the words in order to say: Medicine is a single six-year degree.", words: ["Medicina", "è un corso", "a ciclo", "unico", "di sei anni."], translation: "Medicine is a single six-year degree.", explanation: "\"A ciclo unico\" = in one cycle." },
      { type: "dictation", audio: "Ha rifiutato il voto e ridà l'esame a febbraio.", explanation: "\"Ridà\": \"ridare\", with an accent." },
      { type: "speak", text: "Mi sono laureata in Lettere a Padova con 110 e lode.", prompt: "Say it in Italian: I got my degree in humanities in Padua with first-class honours.", tip: "cen-to-DIE-ci e LO-de.", explanation: "\"Laurearsi in\" + subject; \"Lettere\" = humanities." },
    ],
  },
  {
    slug: "b2-learning-and-teaching",
    level: "IT-B2",
    number: 3,
    title: "Learning and Teaching",
    summary: "Talk about school life: homework, oral tests, marks out of ten, being held back or promoted.",
    duration: "16 min",
    sections: [
      {
        heading: "Tests and marks",
        body: [
          "At Italian middle and secondary schools, marks go from 1 to 10 and \"il sei\" is \"la sufficienza\" (a pass); below six is \"un'insufficienza\". There are two kinds of test: \"il compito in classe\" or \"la verifica\" (a written test), and \"l'interrogazione\", an oral test where the teacher calls a pupil to the front and asks questions.",
          "\"Essere interrogato\" is to be tested orally (\"oggi mi interroga in storia\" = she's going to test me in history today). Marks are written in \"il registro elettronico\", which parents can check online, and summed up in \"la pagella\" (report card).",
          "\"La media\" is your average, the number that counts at the end of the year: \"ho la media dell'otto\". Tests are announced, but \"le interrogazioni\" can come any day, which is why Italian pupils often know the whole programme by heart.",
        ],
        examples: [
          { es: "Ho preso sette nel compito di matematica.", en: "I got seven in the maths test." },
          { es: "Domani c'è la verifica di inglese.", en: "Tomorrow there's an English test." },
          { es: "Spero che oggi la prof non mi interroghi.", en: "I hope the teacher doesn't test me today." },
          { es: "Cinque in latino: è un'insufficienza.", en: "Five in Latin: that's a fail." },
          { es: "I miei genitori controllano il registro elettronico ogni sera.", en: "My parents check the online register every evening." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope the teacher doesn't test me today.", answer: "Spero che oggi la prof non mi interroghi.", altAnswers: ["Spero che oggi la professoressa non mi interroghi.", "Spero che oggi il prof non mi interroghi.", "Spero che il professore non mi interroghi oggi.", "Spero che oggi il professore non mi interroghi."], explanation: "\"Sperare che\" + subjunctive; \"interrogare\" keeps the hard g: \"interroghi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got seven in the maths test.", answer: "Ho preso sette nel compito di matematica.", altAnswers: ["Ho preso 7 nel compito di matematica.", "Ho preso sette nella verifica di matematica.", "Ho preso 7 nella verifica di matematica."], explanation: "\"Prendere\" + mark, no article." },
          { type: "multiple-choice", question: "What is \"un'interrogazione\" at an Italian school?", options: ["an oral test in front of the class", "a police interview", "a written exam", "a meeting with parents"], correctIndex: 0, explanation: "Pupils are \"interrogati\": questioned orally on the material." },
        ],
      },
      {
        heading: "Promoted or held back",
        body: [
          "At the end of the year a pupil is \"promosso\" (moves up a year) or \"bocciato\" (held back) and has to \"ripetere l'anno\". In between, a pupil with one or two fails may be \"rimandato\" in those subjects: they study over the summer and take a test before the new year starts.",
          "Teachers \"spiegano\" (explain), \"assegnano i compiti\" (set homework) and \"correggono\" (mark, correct). Pupils \"studiano\", \"ripassano\" (revise), and sometimes \"copiano\" (cheat, copy). Skipping school is \"marinare la scuola\" (in Milan \"bigiare\"), and regional slang has many more versions.",
        ],
        examples: [
          { es: "È stato promosso con la media dell'otto.", en: "He moved up a year with an average of eight." },
          { es: "L'hanno bocciata e deve ripetere l'anno.", en: "They held her back and she has to repeat the year." },
          { es: "Sono stato rimandato in matematica: quest'estate studio.", en: "I've got a resit in maths: I'm studying this summer." },
          { es: "La prof ci ha assegnato un sacco di compiti.", en: "The teacher gave us loads of homework." },
          { es: "Una volta abbiamo marinato la scuola per andare al mare.", en: "Once we skipped school to go to the beach." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She has to repeat the year.", answer: "Deve ripetere l'anno.", altAnswers: ["Lei deve ripetere l'anno."], explanation: "\"Ripetere l'anno\" after being \"bocciato\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The teacher [gave us] loads of homework.", sentence: "La prof ci ___ un sacco di compiti.", answer: "ha assegnato", altAnswers: ["ha dato"], explanation: "\"Assegnare i compiti\" = to set homework." },
          { type: "listen-choose", audio: "Sono stato rimandato in matematica: quest'estate studio.", question: "What is the speaker's situation?", options: ["He has to make up maths over the summer.", "He failed the whole year.", "He passed everything.", "He is teaching maths this summer."], correctIndex: 0, explanation: "\"Rimandato in\" a subject = must make it up before the next year." },
        ],
      },
      {
        heading: "Talking about teaching",
        body: [
          "Opinions about teachers and methods call for the subjunctive: \"credo che i compiti siano troppi\", \"è importante che l'insegnante sappia motivare\". When the main verb is past, shift to the imperfect subjunctive: \"pensavo che la prof fosse severa, invece è simpatica\".",
          "\"Insegnare\" takes \"a\" + person and, for a skill, \"a\" + infinitive: \"mi ha insegnato a scrivere bene\". \"Imparare\" works the same way: \"ho imparato a programmare\".",
          "\"Spiegare\" takes \"a\" for the person too: \"il prof ci spiega la lezione\", \"spiegami come funziona\". Note \"studiare\" for revision and \"imparare a memoria\" (to learn by heart), a skill Italian schools still value.",
        ],
        examples: [
          { es: "Credo che i compiti per le vacanze siano troppi.", en: "I think there's too much holiday homework." },
          { es: "Pensavo che la prof fosse severa, invece è simpatica.", en: "I thought the teacher was strict, but she's actually nice." },
          { es: "Il mio maestro mi ha insegnato ad amare la lettura.", en: "My teacher taught me to love reading." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought the teacher was strict.", answer: "Pensavo che la prof fosse severa.", altAnswers: ["Pensavo che la professoressa fosse severa.", "Pensavo che il prof fosse severo.", "Pensavo che il professore fosse severo.", "Credevo che la prof fosse severa.", "Credevo che il professore fosse severo."], explanation: "Past main verb → imperfect subjunctive \"fosse\"." },
          { type: "speak", text: "Il mio maestro mi ha insegnato ad amare la lettura.", prompt: "Say it in Italian: My teacher taught me to love reading.", tip: "in-se-GNA-to: gn as in canyon.", explanation: "\"Insegnare a\" + infinitive; \"ad\" before a vowel." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow there's an English test.", answer: "Domani c'è la verifica di inglese.", altAnswers: ["Domani c'è il compito di inglese.", "Domani c'è il compito in classe di inglese.", "Domani abbiamo la verifica di inglese."], explanation: "\"La verifica\" or \"il compito in classe\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He moved up a year with an average of eight.", answer: "È stato promosso con la media dell'otto.", altAnswers: ["È stato promosso con la media di otto.", "È stato promosso con l'otto di media."], explanation: "\"Essere promosso\" = to move up a year." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Five in Latin is a fail.", answer: "Cinque in latino è un'insufficienza.", altAnswers: ["Un cinque in latino è un'insufficienza.", "Il cinque in latino è un'insufficienza."], explanation: "Below six = \"insufficienza\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My parents check the online register.", answer: "I miei genitori controllano il registro elettronico.", altAnswers: ["I miei controllano il registro elettronico."], explanation: "\"Il registro elettronico\" = online class register." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think there's too much homework.", answer: "Credo che i compiti siano troppi.", altAnswers: ["Penso che i compiti siano troppi.", "Secondo me i compiti sono troppi."], explanation: "\"I compiti\" is plural; \"credo che\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I learned to program at school.", answer: "Ho imparato a programmare a scuola.", altAnswers: ["A scuola ho imparato a programmare."], explanation: "\"Imparare a\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Once we [skipped school].", sentence: "Una volta abbiamo ___.", answer: "marinato la scuola", altAnswers: ["bigiato la scuola", "bigiato"], explanation: "\"Marinare la scuola\" = to skip school." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I need to [revise] history.", sentence: "Devo ___ storia.", answer: "ripassare", explanation: "\"Ripassare\" = to revise, go over." },
      { type: "word-order", prompt: "Put the words in order to say: They held her back and she has to repeat the year.", words: ["L'hanno", "bocciata", "e deve", "ripetere", "l'anno."], translation: "They held her back and she has to repeat the year.", explanation: "\"Bocciata\" agrees with \"l'\" (her) before \"avere\"." },
      { type: "dictation", audio: "Spero che oggi la prof non mi interroghi.", explanation: "\"Interroghi\": h keeps the hard g." },
      { type: "speak", text: "Alle superiori avevo paura delle interrogazioni, ma sono sempre stato promosso.", prompt: "Say it in Italian: At secondary school I was scared of oral tests, but I always moved up a year.", tip: "in-ter-ro-ga-ZIO-ni: double r.", explanation: "Imperfect for a state, passato prossimo for the result." },
    ],
  },
  {
    slug: "b2-education-debate",
    level: "IT-B2",
    number: 4,
    title: "Education Debates",
    summary: "Argue about limited admissions, university fees and public versus private schools, with the subjunctive and if sentences.",
    duration: "17 min",
    sections: [
      {
        heading: "Limited places and fees",
        body: [
          "Some degree courses, medicine above all, have \"il numero chiuso\" (officially \"il numero programmato\"): a fixed number of places, traditionally allocated by \"un test d'ingresso\" (entrance test). It has been debated for decades. University fees, \"le tasse universitarie\", are low by English-speaking standards and depend \"sul reddito familiare\" (family income): students from low-income families pay nothing.",
          "Present both sides fairly: \"c'è chi sostiene che\" (some people argue that) + indicative or subjunctive, \"e chi invece ritiene che\" + subjunctive. Take a side with \"sono favorevole a\" (in favour of) or \"sono contrario a\" + noun or infinitive: \"sono contraria al numero chiuso\", \"sono favorevole ad abolirlo\".",
          "Other useful stance verbs: \"ritenere\" (to believe, formal), \"essere d'accordo con\" (to agree with), \"opporsi a\" (to oppose). The subjunctive after \"ritenere che\" and \"pensare che\" marks it as an opinion, not a fact.",
        ],
        examples: [
          { es: "A Medicina c'è il numero chiuso da molti anni.", en: "Medicine has had limited admissions for many years." },
          { es: "Le tasse universitarie dipendono dal reddito familiare.", en: "University fees depend on family income." },
          { es: "C'è chi sostiene che il test sia ingiusto.", en: "Some people argue that the test is unfair." },
          { es: "Altri ritengono che servano più medici, non meno.", en: "Others believe more doctors are needed, not fewer." },
          { es: "Sono contraria al numero chiuso.", en: "I'm against limited admissions." },
          { es: "Sono favorevole ad abolire il test d'ingresso.", en: "I'm in favour of abolishing the entrance test." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "University fees depend on family income.", answer: "Le tasse universitarie dipendono dal reddito familiare.", altAnswers: ["Le tasse universitarie dipendono dal reddito della famiglia."], explanation: "\"Dipendere da\"; \"le tasse\" = fees here, not taxes on income." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some people argue that the test is unfair.", answer: "C'è chi sostiene che il test sia ingiusto.", altAnswers: ["C'è chi sostiene che il test è ingiusto.", "Alcuni sostengono che il test sia ingiusto."], explanation: "\"C'è chi\" = there are those who; the subjunctive distances you from the view." },
          { type: "multiple-choice", question: "How do you say you're in favour of abolishing the test?", options: ["Sono favorevole ad abolire il test.", "Sono favorevole di abolire il test.", "Sono a favore che abolire il test.", "Favorisco abolire il test."], correctIndex: 0, explanation: "\"Favorevole a\" + infinitive; \"ad\" before a vowel." },
        ],
      },
      {
        heading: "Public and private schools",
        body: [
          "In Italy most pupils go to \"la scuola statale\" (state school), which is free and generally well regarded. Private schools that follow the national curriculum are \"scuole paritarie\", and families pay \"la retta\" (the fee). Unlike in Britain or the US, private doesn't automatically mean prestigious: \"una scuola privata non è necessariamente migliore di una pubblica\".",
          "Other recurring topics: \"la dispersione scolastica\" (early school leaving), \"il precariato degli insegnanti\" (teachers on temporary contracts), \"le classi pollaio\" (literally hen-house classes: overcrowded classrooms), and \"il diritto allo studio\" (the right to education, meaning grants and support).",
          "When you compare public and private, avoid absolute claims: \"non è detto che\" + subjunctive (it doesn't necessarily follow that) is a handy hedge: \"non è detto che una scuola privata sia migliore\".",
        ],
        examples: [
          { es: "La scuola statale è gratuita e generalmente di buon livello.", en: "State school is free and generally of a good standard." },
          { es: "La retta della scuola paritaria è di 400 euro al mese.", en: "The private school fee is 400 euros a month." },
          { es: "Una scuola privata non è necessariamente migliore di una pubblica.", en: "A private school isn't necessarily better than a state one." },
          { es: "La dispersione scolastica è più alta nel Sud.", en: "Early school leaving is higher in the South." },
          { es: "Molti insegnanti sono precari da anni.", en: "Many teachers have been on temporary contracts for years." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A private school isn't necessarily better than a state one.", answer: "Una scuola privata non è necessariamente migliore di una pubblica.", altAnswers: ["Una scuola privata non è per forza migliore di una pubblica.", "Una scuola privata non è necessariamente migliore di una statale.", "Una scuola privata non è per forza migliore di una statale."], explanation: "\"Migliore di\" + noun phrase; \"una\" stands for \"una scuola\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Early school leaving] is higher in the South.", sentence: "___ è più alta nel Sud.", answer: "La dispersione scolastica", altAnswers: ["L'abbandono scolastico"], explanation: "\"La dispersione scolastica\": the standard term." },
          { type: "listen-choose", audio: "La retta della scuola paritaria è di 400 euro al mese.", question: "What does it cost?", options: ["400 euros a month in fees", "400 euros a year in fees", "40 euros a month", "nothing"], correctIndex: 0, explanation: "\"La retta\" = the fee; \"al mese\" = a month." },
        ],
      },
      {
        heading: "Arguing with if",
        body: [
          "Debates live on hypotheses. Use \"se\" + imperfect subjunctive + conditional for what would happen: \"se l'università fosse gratuita per tutti, più ragazzi si iscriverebbero\". For a past that can't change, \"se\" + pluperfect subjunctive + past conditional: \"se avessero investito di più, oggi avremmo scuole migliori\" (a mixed type, with a present result).",
          "Conditions you'd accept: \"purché\" and \"a patto che\" + subjunctive (\"accetto il numero chiuso purché il test sia equo\").",
        ],
        examples: [
          { es: "Se l'università fosse gratuita, più ragazzi si iscriverebbero.", en: "If university were free, more young people would enrol." },
          { es: "Se avessero investito di più, oggi avremmo scuole migliori.", en: "If they had invested more, we'd have better schools today." },
          { es: "Accetto il numero chiuso purché il test sia equo.", en: "I accept limited admissions as long as the test is fair." },
          { es: "Se fossi ministra, ridurrei il numero di alunni per classe.", en: "If I were the minister, I'd reduce the number of pupils per class." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If university were free, more young people would enrol.", answer: "Se l'università fosse gratuita, più ragazzi si iscriverebbero.", altAnswers: ["Se l'università fosse gratuita, più giovani si iscriverebbero.", "Più ragazzi si iscriverebbero se l'università fosse gratuita.", "Più giovani si iscriverebbero se l'università fosse gratuita."], explanation: "\"Se\" + imperfect subjunctive, then conditional; never \"se sarebbe\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I accept it as long as the test is fair.", answer: "Lo accetto purché il test sia equo.", altAnswers: ["Lo accetto a patto che il test sia equo.", "Lo accetto purché il test sia giusto.", "Lo accetto a patto che il test sia giusto."], explanation: "\"Purché\" + subjunctive." },
          { type: "speak", text: "Se fossi ministro, ridurrei il numero di alunni per classe.", prompt: "Say it in Italian: If I were the minister, I'd reduce the number of pupils per class.", tip: "ri-dur-REI: stress on the final ei.", explanation: "\"Se fossi\" + conditional \"ridurrei\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Medicine has had limited admissions for many years.", answer: "A Medicina c'è il numero chiuso da molti anni.", altAnswers: ["A Medicina c'è il numero chiuso da tanti anni.", "Medicina ha il numero chiuso da molti anni."], explanation: "Present + \"da\" for something still true." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm against limited admissions. (a woman speaking)", answer: "Sono contraria al numero chiuso.", altAnswers: ["Io sono contraria al numero chiuso."], explanation: "\"Contrario a\" agrees with the speaker." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Others believe more doctors are needed.", answer: "Altri ritengono che servano più medici.", altAnswers: ["Altri pensano che servano più medici.", "Altri ritengono che ci vogliano più medici.", "Altri credono che servano più medici."], explanation: "\"Ritenere che\" + subjunctive \"servano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Many teachers have been on temporary contracts for years.", answer: "Molti insegnanti sono precari da anni.", explanation: "\"Essere precario\" = to have no permanent contract." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If they had invested more, we'd have better schools today.", answer: "Se avessero investito di più, oggi avremmo scuole migliori.", altAnswers: ["Se avessero investito di più, oggi avremmo delle scuole migliori.", "Oggi avremmo scuole migliori se avessero investito di più."], explanation: "Mixed condition: past cause, present result." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "State school is free.", answer: "La scuola statale è gratuita.", altAnswers: ["La scuola pubblica è gratuita.", "La scuola statale è gratis."], explanation: "\"Gratuita\" agrees; \"gratis\" is invariable and more casual." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Classes are [overcrowded].", sentence: "Le classi sono ___.", answer: "sovraffollate", altAnswers: ["troppo numerose", "affollate"], explanation: "Journalists also say \"classi pollaio\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Some people argue that] fees are too high.", sentence: "___ le tasse siano troppo alte.", answer: "C'è chi sostiene che", altAnswers: ["Alcuni sostengono che", "C'è chi pensa che"], explanation: "\"C'è chi\" + singular verb." },
      { type: "word-order", prompt: "Put the words in order to say: I'm in favour of abolishing the entrance test.", words: ["Sono", "favorevole", "ad abolire", "il test", "d'ingresso."], translation: "I'm in favour of abolishing the entrance test.", explanation: "\"Favorevole a\" + infinitive." },
      { type: "multiple-choice", question: "Which sentence is correct written Italian?", options: ["Se le tasse fossero più basse, più ragazzi studierebbero.", "Se le tasse sarebbero più basse, più ragazzi studierebbero.", "Se le tasse erano più basse, più ragazzi studierebbero.", "Se le tasse siano più basse, più ragazzi studierebbero."], correctIndex: 0, explanation: "\"Se\" + imperfect subjunctive, never the conditional." },
      { type: "dictation", audio: "Accetto il numero chiuso purché il test sia equo.", explanation: "\"Purché\" with é, followed by the subjunctive." },
      { type: "speak", text: "C'è chi sostiene che il numero chiuso sia necessario, ma io sono contrario.", prompt: "Give both sides: Some people argue that limited admissions are necessary, but I'm against them.", tip: "con-TRA-rio: stress on tra.", explanation: "\"C'è chi sostiene che\" + subjunctive, then your view." },
    ],
  },
  {
    slug: "b2-drill-education-vocabulary",
    level: "IT-B2",
    number: 5,
    title: "Drill: Education Vocabulary",
    summary: "High-repetition production of school and university words in full sentences.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "School",
        body: [
          "Recall: \"il nido\", \"l'asilo\", \"le elementari\", \"le medie\", \"le superiori\", \"il liceo\", \"la maturità\", \"il compito in classe\", \"l'interrogazione\", \"la pagella\", \"promosso\", \"bocciato\", \"rimandato\", \"ripetere l'anno\", \"la sufficienza\".",
        ],
        examples: [
          { es: "In pagella ho tutte sufficienze.", en: "I've passed every subject on my report." },
          { es: "Quest'anno mio figlio inizia le superiori.", en: "My son starts upper secondary this year." },
          { es: "È stato rimandato in chimica.", en: "He has to make up chemistry over the summer." },
          { es: "Mi hanno interrogato in geografia.", en: "I was tested orally in geography." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My son starts upper secondary this year.", answer: "Quest'anno mio figlio inizia le superiori.", altAnswers: ["Mio figlio inizia le superiori quest'anno.", "Quest'anno mio figlio comincia le superiori."], explanation: "\"Le superiori\" = upper secondary." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was tested orally in geography.", answer: "Mi hanno interrogato in geografia.", altAnswers: ["Mi hanno interrogata in geografia.", "Sono stato interrogato in geografia.", "Sono stata interrogata in geografia."], explanation: "\"Interrogare\" = to test orally." },
        ],
      },
      {
        heading: "University",
        body: [
          "Recall: \"la triennale\", \"la magistrale\", \"laurearsi\", \"iscriversi a\", \"dare un esame\", \"l'appello\", \"30 e lode\", \"la tesi\", \"il relatore\", \"fuori sede\", \"fuori corso\", \"la borsa di studio\", \"le tasse universitarie\".",
        ],
        examples: [
          { es: "Il prossimo appello è il 15 giugno.", en: "The next exam session is on 15 June." },
          { es: "La mia relatrice mi ha dato ottimi consigli.", en: "My supervisor gave me excellent advice." },
          { es: "Mi mancano tre esami alla laurea.", en: "I've got three exams left before I graduate." },
          { es: "Ho vinto una borsa di studio per l'Erasmus.", en: "I won a grant for Erasmus." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got three exams left before I graduate.", answer: "Mi mancano tre esami alla laurea.", altAnswers: ["Mi mancano tre esami per laurearmi.", "Mi restano tre esami alla laurea."], explanation: "\"Mancare\" agrees with what's missing: \"mi mancano tre esami\"." },
          { type: "listen-choose", audio: "Il prossimo appello è il 15 giugno.", question: "What happens on 15 June?", options: ["the next exam date", "graduation day", "the start of lectures", "the enrolment deadline"], correctIndex: 0, explanation: "\"L'appello\" = an exam date." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've passed every subject on my report.", answer: "In pagella ho tutte sufficienze.", altAnswers: ["Ho tutte sufficienze in pagella.", "In pagella ho tutte le sufficienze."], explanation: "\"La sufficienza\" = a pass mark." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She failed and has to repeat the year.", answer: "È stata bocciata e deve ripetere l'anno.", altAnswers: ["L'hanno bocciata e deve ripetere l'anno."], explanation: "\"Essere bocciato\" = to be held back." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Tomorrow I'm taking the history exam.", answer: "Domani do l'esame di storia.", altAnswers: ["Domani ho l'esame di storia.", "Domani sostengo l'esame di storia.", "Domani do l'esame di Storia."], explanation: "\"Dare un esame\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My supervisor gave me excellent advice.", answer: "Il mio relatore mi ha dato ottimi consigli.", altAnswers: ["La mia relatrice mi ha dato ottimi consigli."], explanation: "\"Il relatore\" = thesis supervisor." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He graduated in law.", answer: "Si è laureato in Giurisprudenza.", altAnswers: ["Si è laureato in giurisprudenza.", "Si è laureato in Legge.", "Si è laureato in legge."], explanation: "The law degree is \"Giurisprudenza\"; \"Legge\" is common in speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm studying away from home in Bologna.", answer: "Sono fuori sede a Bologna.", altAnswers: ["Studio fuori sede a Bologna.", "Sono una studentessa fuori sede a Bologna.", "Sono uno studente fuori sede a Bologna."], explanation: "\"Fuori sede\" = away from home." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got thirty in the oral.", answer: "Ho preso trenta all'orale.", altAnswers: ["Ho preso 30 all'orale."], explanation: "\"Prendere\" + mark." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The teacher gave us an oral test.", answer: "La prof ci ha interrogato.", altAnswers: ["Il prof ci ha interrogato.", "La professoressa ci ha interrogato.", "Il professore ci ha interrogato.", "La prof ci ha interrogati.", "Il prof ci ha interrogati."], explanation: "\"Interrogare\" + direct object." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [moved up a year] with good marks.", sentence: "___ con buoni voti.", answer: "È stato promosso", explanation: "\"Essere promosso\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I [enrolled in] medicine.", sentence: "___ a Medicina.", answer: "Mi sono iscritto", altAnswers: ["Mi sono iscritta"], explanation: "\"Iscriversi a\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm writing [my thesis] on Dante.", sentence: "Sto scrivendo ___ su Dante.", answer: "la tesi", altAnswers: ["la mia tesi"], explanation: "\"La tesi\" is invariable: \"le tesi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [fell behind] with his degree.", sentence: "È andato ___.", answer: "fuori corso", explanation: "\"Andare fuori corso\"." },
      { type: "dictation", audio: "Mi mancano tre esami e poi discuto la tesi.", explanation: "\"Mi mancano\" agrees with \"tre esami\"." },
      { type: "speak", text: "Ho fatto il liceo scientifico, poi mi sono laureato in Ingegneria a Torino.", prompt: "Say it in Italian: I went to a science liceo, then got my degree in engineering in Turin.", tip: "in-ge-gne-RI-a: stress on ri.", explanation: "\"Fare il liceo\", \"laurearsi in\"." },
    ],
  },
  {
    slug: "b2-drill-education-opinions",
    level: "IT-B2",
    number: 6,
    title: "Drill: Opinions on Education",
    summary: "High-repetition production of opinions about schools and universities with the subjunctive.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Present opinions",
        body: [
          "Pattern: \"credo / penso / ritengo / mi sembra che\" + present subjunctive; \"è giusto / è importante / è assurdo che\" + present subjunctive. Remember \"sia\", \"abbia\", \"debba\", \"possa\", \"faccia\", \"vada\".",
        ],
        examples: [
          { es: "Credo che la scuola debba insegnare a pensare.", en: "I think school should teach people to think." },
          { es: "È assurdo che uno studente paghi così tanto.", en: "It's absurd that a student pays so much." },
          { es: "Mi sembra che i ragazzi leggano poco.", en: "It seems to me that young people read very little." },
          { es: "È giusto che l'università sia aperta a tutti.", en: "It's right that university is open to everyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think school should teach people to think.", answer: "Credo che la scuola debba insegnare a pensare.", altAnswers: ["Penso che la scuola debba insegnare a pensare.", "Ritengo che la scuola debba insegnare a pensare."], explanation: "\"Debba\": present subjunctive of \"dovere\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's right that university is open to everyone.", answer: "È giusto che l'università sia aperta a tutti.", explanation: "\"È giusto che\" + \"sia\"." },
        ],
      },
      {
        heading: "Past opinions",
        body: [
          "Pattern: past main verb → imperfect subjunctive: \"pensavo che fosse facile\", \"speravo che mi promuovessero\". For an earlier event, pluperfect: \"credevo che avesse già finito\".",
        ],
        examples: [
          { es: "Pensavo che l'università fosse più facile.", en: "I thought university would be easier." },
          { es: "Speravo che mi dessero una borsa di studio.", en: "I was hoping they'd give me a grant." },
          { es: "Credevo che si fosse già laureata.", en: "I thought she had already graduated." },
          { es: "Era importante che i miei genitori mi sostenessero.", en: "It was important that my parents supported me." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought university would be easier.", answer: "Pensavo che l'università fosse più facile.", altAnswers: ["Credevo che l'università fosse più facile.", "Pensavo che l'università sarebbe stata più facile."], explanation: "Past main verb → imperfect subjunctive \"fosse\"." },
          { type: "listen-choose", audio: "Credevo che si fosse già laureata.", question: "What did the speaker think?", options: ["that she had already graduated", "that she would graduate soon", "that she had failed", "that she was enrolling"], correctIndex: 0, explanation: "Pluperfect subjunctive \"si fosse laureata\" = had graduated." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's absurd that a student pays so much.", answer: "È assurdo che uno studente paghi così tanto.", altAnswers: ["È assurdo che uno studente paghi tanto."], explanation: "\"Paghi\": h keeps the hard g." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It seems to me that young people read very little.", answer: "Mi sembra che i ragazzi leggano poco.", altAnswers: ["Mi sembra che i giovani leggano poco.", "Mi pare che i ragazzi leggano poco.", "Mi sembra che i ragazzi leggano pochissimo."], explanation: "\"Leggano\": subjunctive of \"leggere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't think homework is useless.", answer: "Non credo che i compiti siano inutili.", altAnswers: ["Non penso che i compiti siano inutili."], explanation: "\"I compiti\" is plural: \"siano\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that teachers are well paid.", answer: "È importante che gli insegnanti siano pagati bene.", altAnswers: ["È importante che gli insegnanti siano ben pagati.", "È importante che i professori siano pagati bene."], explanation: "\"È importante che\" + passive subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like schools to have more labs.", answer: "Vorrei che le scuole avessero più laboratori.", altAnswers: ["Mi piacerebbe che le scuole avessero più laboratori."], explanation: "\"Vorrei che\" + imperfect subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I was hoping they'd give me a grant.", answer: "Speravo che mi dessero una borsa di studio.", explanation: "\"Dessero\": imperfect subjunctive of \"dare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was important that my parents supported me.", answer: "Era importante che i miei genitori mi sostenessero.", altAnswers: ["Era importante che i miei mi sostenessero."], explanation: "Past main verb → \"sostenessero\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought she had already graduated.", answer: "Credevo che si fosse già laureata.", altAnswers: ["Pensavo che si fosse già laureata."], explanation: "Earlier event → pluperfect subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I doubt that the reform [will work].", sentence: "Dubito che la riforma ___.", answer: "funzioni", explanation: "\"Dubitare che\" + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's normal that pupils [are] tired in June.", sentence: "È normale che gli alunni ___ stanchi a giugno.", answer: "siano", explanation: "\"È normale che\" + \"siano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I thought the exam [was] oral.", sentence: "Pensavo che l'esame ___ orale.", answer: "fosse", explanation: "Imperfect subjunctive after \"pensavo\"." },
      { type: "word-order", prompt: "Put the words in order to say: I think school should teach people to think.", words: ["Credo", "che la scuola", "debba", "insegnare", "a pensare."], translation: "I think school should teach people to think.", explanation: "\"Debba\": subjunctive." },
      { type: "dictation", audio: "È giusto che l'università sia aperta a tutti.", explanation: "\"Sia\" after \"è giusto che\"." },
      { type: "speak", text: "Penso che la scuola debba insegnare a pensare, non solo a ricordare.", prompt: "Say it in Italian: I think school should teach people to think, not just to remember.", tip: "DEB-ba: double b.", explanation: "\"Penso che\" + \"debba\"." },
    ],
  },
  {
    slug: "b2-reading-lab-education",
    level: "IT-B2",
    number: 7,
    title: "Reading Lab: An Article on Schools",
    summary: "Read a newspaper article on the yearly argument about holiday homework and follow how it balances the two sides.",
    duration: "17 min",
    sections: [
      {
        heading: "The debate returns",
        body: [
          "The article opens with a familiar Italian ritual: every June, the argument about \"i compiti per le vacanze\" (holiday homework). Read for structure: \"da una parte ... dall'altra\" (on the one hand ... on the other) sets out the two camps, and \"secondo i quali\" (according to whom) attaches an opinion to a group.",
          "\"Puntuale come il caldo\" (as punctual as the heat) is a typical journalistic simile. \"Proprio per questo\" means for exactly this reason, and introduces the argument of those in favour.",
        ],
        examples: [
          { es: "Ogni giugno, puntuale come il caldo, torna la polemica sui compiti per le vacanze.", en: "Every June, as regular as the heat, the row over holiday homework is back." },
          { es: "Da una parte ci sono gli insegnanti che li considerano indispensabili.", en: "On one side are the teachers who consider it essential." },
          { es: "Dall'altra ci sono i genitori, secondo i quali l'estate dovrebbe servire a riposare.", en: "On the other are the parents, who believe summer should be for resting." },
          { es: "In Italia le vacanze estive durano circa tre mesi, tra le più lunghe d'Europa.", en: "In Italy the summer holidays last about three months, among the longest in Europe." },
          { es: "Proprio per questo, sostengono i favorevoli, un po' di esercizio è necessario.", en: "For exactly this reason, supporters argue, a bit of practice is necessary." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Why do supporters think holiday homework is necessary?", options: ["Because the summer break is very long.", "Because pupils have bad marks.", "Because parents ask for it.", "Because the law requires it."], correctIndex: 0, explanation: "\"Proprio per questo\" refers back to the three-month holiday." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In Italy the summer holidays last about three months.", answer: "In Italia le vacanze estive durano circa tre mesi.", altAnswers: ["In Italia le vacanze d'estate durano circa tre mesi.", "In Italia le vacanze estive durano più o meno tre mesi."], explanation: "\"Le vacanze\" is plural: \"durano\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On one side are the teachers, on the other the parents.", answer: "Da una parte ci sono gli insegnanti, dall'altra i genitori.", altAnswers: ["Da una parte ci sono gli insegnanti, dall'altra ci sono i genitori.", "Da un lato ci sono gli insegnanti, dall'altro i genitori."], explanation: "\"Da una parte ... dall'altra\" (or \"da un lato ... dall'altro\")." },
        ],
      },
      {
        heading: "A middle way",
        body: [
          "The second half reports a compromise and quotes a head teacher. Italian newspapers mark quotations with « » (caporali) and introduce them with verbs like \"racconta\", \"spiega\", \"osserva\" placed after the quote.",
          "The ending raises the deeper issue, \"le disuguaglianze\" (inequality), and concludes with \"più che\" + infinitive: \"più che abolire i compiti, bisognerebbe ripensarli\" (rather than abolishing homework, we should rethink it).",
        ],
        examples: [
          { es: "Alcune scuole hanno scelto una via di mezzo.", en: "Some schools have chosen a middle way." },
          { es: "Niente schede da riempire, ma una lista di libri da leggere.", en: "No worksheets to fill in, but a list of books to read." },
          { es: "«I ragazzi tornano più motivati», racconta la preside.", en: "\"The kids come back more motivated,\" says the head teacher." },
          { es: "Non tutte le famiglie possono permettersi viaggi o campi estivi.", en: "Not every family can afford trips or summer camps." },
          { es: "Più che abolire i compiti, bisognerebbe ripensarli.", en: "Rather than abolishing homework, we should rethink it." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What do some schools give instead of worksheets?", options: ["a reading list and a travel diary", "no work at all", "online tests", "extra lessons in July"], correctIndex: 0, explanation: "\"Una lista di libri da leggere\" (and, in the full text, a travel diary)." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Not every family can afford trips.", answer: "Non tutte le famiglie possono permettersi viaggi.", altAnswers: ["Non tutte le famiglie possono permettersi dei viaggi.", "Non tutte le famiglie si possono permettere viaggi."], explanation: "\"Permettersi\" = to afford; the pronoun can attach or go first." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Rather than abolishing] homework, we should rethink it.", sentence: "___ i compiti, bisognerebbe ripensarli.", answer: "Più che abolire", explanation: "\"Più che\" + infinitive = rather than." },
        ],
      },
      {
        heading: "How the article argues",
        body: [
          "The writer never says \"I\". Positions belong to others (\"secondo i quali\", \"sostengono i favorevoli\"), and the conclusion uses the impersonal conditional \"bisognerebbe\" (one ought to). Learn to spot these moves: they're the backbone of the argumentative texts in the CILS DUE exam.",
          "\"Da\" + infinitive expresses something to be done: \"libri da leggere\", \"schede da riempire\", \"un diario da scrivere\".",
        ],
        examples: [
          { es: "Ai ragazzi è stato chiesto di tenere un diario da scrivere ogni settimana.", en: "The kids were asked to keep a diary to write in every week." },
          { es: "Per molti bambini l'estate significa mesi senza stimoli.", en: "For many children summer means months without stimulation." },
          { es: "Bisognerebbe dare a tutti le stesse opportunità.", en: "Everyone ought to be given the same opportunities." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone ought to be given the same opportunities.", answer: "Bisognerebbe dare a tutti le stesse opportunità.", altAnswers: ["Si dovrebbero dare a tutti le stesse opportunità.", "Bisognerebbe offrire a tutti le stesse opportunità."], explanation: "Impersonal \"bisognerebbe\" + infinitive." },
          { type: "speak", text: "Più che abolire i compiti, bisognerebbe ripensarli.", prompt: "State the article's conclusion: Rather than abolishing homework, we should rethink it.", tip: "bi-so-gne-REB-be: double b.", explanation: "\"Ripensarli\": pronoun attached to the infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "What problem does the end of the article raise?", options: ["inequality between families", "teachers' salaries", "the cost of books", "school buildings"], correctIndex: 0, explanation: "\"Le disuguaglianze\": not every family can afford trips or camps." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Some schools have chosen a middle way.", answer: "Alcune scuole hanno scelto una via di mezzo.", altAnswers: ["Certe scuole hanno scelto una via di mezzo.", "Alcune scuole hanno scelto una soluzione di mezzo."], explanation: "\"Una via di mezzo\" = a middle way." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The kids come back more motivated.", answer: "I ragazzi tornano più motivati.", altAnswers: ["I ragazzi rientrano più motivati."], explanation: "\"Motivati\" agrees with \"ragazzi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "a list of books to read", answer: "una lista di libri da leggere", altAnswers: ["un elenco di libri da leggere"], explanation: "\"Da\" + infinitive = to be done." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The parents believe summer should be for resting.", answer: "I genitori ritengono che l'estate debba servire a riposare.", altAnswers: ["I genitori pensano che l'estate dovrebbe servire a riposare.", "Secondo i genitori l'estate dovrebbe servire a riposare.", "I genitori pensano che l'estate debba servire a riposare."], explanation: "\"Servire a\" + infinitive = to be for." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Every June the row is back.", answer: "Ogni giugno torna la polemica.", altAnswers: ["Ogni giugno la polemica torna.", "Ogni anno a giugno torna la polemica."], explanation: "\"La polemica\" = public row, controversy." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The parents, [according to whom] summer is for resting, protest.", sentence: "I genitori, ___ l'estate è per riposare, protestano.", answer: "secondo i quali", explanation: "\"Secondo\" + \"i quali\" for a plural group." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[For exactly this reason], a bit of practice is necessary.", sentence: "___, un po' di esercizio è necessario.", answer: "Proprio per questo", explanation: "\"Proprio\" = exactly, precisely." },
      { type: "word-order", prompt: "Put the words in order to say: For many children summer means months without stimulation.", words: ["Per molti", "bambini", "l'estate", "significa", "mesi", "senza stimoli."], translation: "For many children summer means months without stimulation.", explanation: "\"Significare\" = to mean." },
      { type: "dictation", audio: "Non tutte le famiglie possono permettersi viaggi o campi estivi.", explanation: "\"Permettersi\" = to afford." },
      { type: "speak", text: "Secondo me i compiti per le vacanze servono, purché non siano troppi.", prompt: "Give your view: In my opinion holiday homework is useful, as long as there isn't too much.", tip: "pur-CHÉ: closed é.", explanation: "\"Purché\" + subjunctive \"siano\"." },
    ],
  },
  {
    slug: "b2-listening-lab-students",
    level: "IT-B2",
    number: 8,
    title: "Listening Lab: Students Talk",
    summary: "Listen to three university students talk about rent, working while studying and Erasmus, in natural spoken Italian.",
    duration: "17 min",
    sections: [
      {
        heading: "Chiara: away from home",
        body: [
          "A student radio programme asks three students how their year is going. Chiara is from Bari and studies law in Bologna. Listen for the spoken markers: \"cioè\" (I mean), \"tipo\" (like), \"neanche\" (not even).",
          "Rent is \"l'affitto\"; a room in a shared flat is \"una stanza\" or \"una camera\", \"singola\" or \"doppia\". Students complain about \"il caro affitti\" (the high cost of rent).",
        ],
        examples: [
          { es: "Sono di Bari e studio Giurisprudenza a Bologna.", en: "I'm from Bari and I study law in Bologna." },
          { es: "Da fuori sede la cosa più difficile è trovare casa.", en: "As a student away from home, the hardest thing is finding somewhere to live." },
          { es: "Pago 450 euro per una singola, e non è neanche grande.", en: "I pay 450 euros for a single room, and it isn't even big." },
          { es: "Cioè, tipo metà della mia borsa di studio se ne va in affitto.", en: "I mean, like half my grant goes on rent." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Pago 450 euro per una singola, e non è neanche grande.", question: "What does Chiara say about her room?", options: ["It costs 450 euros and isn't even big.", "It's big but costs 450 euros.", "It's a shared room for 450 euros.", "She pays 150 euros for it."], correctIndex: 0, explanation: "\"Non è neanche grande\" = it isn't even big." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The hardest thing is finding somewhere to live.", answer: "La cosa più difficile è trovare casa.", altAnswers: ["La cosa più difficile è trovare un alloggio.", "La cosa più difficile è trovare una casa."], explanation: "\"Trovare casa\" with no article: to find somewhere to live." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It isn't even big.", answer: "Non è neanche grande.", altAnswers: ["Non è nemmeno grande.", "Non è neppure grande."], explanation: "\"Non ... neanche\" = not even." },
        ],
      },
      {
        heading: "Matteo: working and studying",
        body: [
          "Matteo studies engineering in Turin and works in a pizzeria. Listen for \"sennò\" (otherwise, a spoken form of \"altrimenti\") and \"farcela\" (to manage, cope): \"non ce la faccio\" = I can't manage.",
          "\"Andare a rilento\" means to go slowly: he's falling behind with exams. \"Lo studente lavoratore\" is the official term for a working student.",
        ],
        examples: [
          { es: "Lavoro tre sere a settimana in pizzeria.", en: "I work three evenings a week in a pizzeria." },
          { es: "Sennò con l'affitto non ce la faccio.", en: "Otherwise I can't manage the rent." },
          { es: "Il problema è che così vado un po' a rilento con gli esami.", en: "The problem is that this way I'm a bit slow with my exams." },
          { es: "Boh, forse mi laureo con un anno di ritardo.", en: "Dunno, maybe I'll graduate a year late." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il problema è che così vado un po' a rilento con gli esami.", question: "What's Matteo's problem?", options: ["He's falling behind with exams.", "He failed all his exams.", "His exams are too easy.", "He has no time to work."], correctIndex: 0, explanation: "\"Andare a rilento\" = to go slowly." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Otherwise I can't manage the rent.", answer: "Sennò con l'affitto non ce la faccio.", altAnswers: ["Altrimenti con l'affitto non ce la faccio.", "Sennò non ce la faccio con l'affitto.", "Altrimenti non ce la faccio con l'affitto."], explanation: "\"Farcela\" → \"ce la faccio\"; \"sennò\" is spoken for \"altrimenti\"." },
        ],
      },
      {
        heading: "Sofia: back from Erasmus",
        body: [
          "Sofia has just come back from Erasmus in Valencia. \"Appena\" + passato prossimo means just: \"sono appena tornata\". \"Convalidare gli esami\" is getting the exams you took abroad recognised, often a bureaucratic headache: \"un incubo\" (a nightmare).",
          "Notice how a superlative with a relative clause takes the subjunctive even in speech when it's emphatic: \"l'esperienza più bella che abbia mai fatto\".",
        ],
        examples: [
          { es: "Sono appena tornata dall'Erasmus.", en: "I've just come back from Erasmus." },
          { es: "È stata l'esperienza più bella che abbia mai fatto.", en: "It was the best experience I've ever had." },
          { es: "Convalidare gli esami è stato un incubo.", en: "Getting my exams recognised was a nightmare." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've just come back from Erasmus. (a woman speaking)", answer: "Sono appena tornata dall'Erasmus.", altAnswers: ["Sono appena rientrata dall'Erasmus."], explanation: "\"Appena\" between auxiliary and participle." },
          { type: "speak", text: "È stata l'esperienza più bella che abbia mai fatto.", prompt: "Say it in Italian: It was the best experience I've ever had.", tip: "e-spe-RIEN-za: stress on rien.", explanation: "Superlative + subjunctive \"abbia fatto\"; \"fare un'esperienza\"." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Convalidare gli esami è stato un incubo.", question: "What was a nightmare for Sofia?", options: ["getting her exams recognised", "living abroad", "learning the language", "finding a flat"], correctIndex: 0, explanation: "\"Convalidare gli esami\" = get exams recognised." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm from Bari and I study law in Bologna.", answer: "Sono di Bari e studio Giurisprudenza a Bologna.", altAnswers: ["Sono di Bari e studio giurisprudenza a Bologna.", "Sono di Bari e studio Legge a Bologna.", "Sono di Bari e studio legge a Bologna."], explanation: "\"Essere di\" + city of origin." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Half my grant goes on rent.", answer: "Metà della mia borsa di studio se ne va in affitto.", altAnswers: ["La metà della mia borsa di studio se ne va in affitto.", "Metà della mia borsa di studio va nell'affitto.", "Metà della borsa di studio se ne va in affitto."], explanation: "\"Andarsene in\" = to be spent on, to go on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work three evenings a week.", answer: "Lavoro tre sere a settimana.", altAnswers: ["Lavoro tre sere alla settimana.", "Lavoro tre sere la settimana."], explanation: "\"A settimana\" or \"alla settimana\" = per week." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Maybe I'll graduate a year late.", answer: "Forse mi laureo con un anno di ritardo.", altAnswers: ["Forse mi laureerò con un anno di ritardo."], explanation: "The present for a near future is natural in speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It was the best experience I've ever had.", answer: "È stata l'esperienza più bella che abbia mai fatto.", altAnswers: ["È stata l'esperienza più bella che io abbia mai fatto.", "È stata la più bella esperienza che abbia mai fatto.", "È stata l'esperienza più bella della mia vita."], explanation: "\"Fare un'esperienza\"; superlative + subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I can't manage] with work and exams.", sentence: "___ con il lavoro e gli esami.", answer: "Non ce la faccio", explanation: "\"Farcela\": \"ce la faccio\", \"ce la fai\"..." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [a bit slow] with my exams.", sentence: "Vado ___ con gli esami.", answer: "un po' a rilento", altAnswers: ["a rilento"], explanation: "\"Andare a rilento\" = to go slowly." },
      { type: "word-order", prompt: "Put the words in order to say: I pay 450 euros for a single room.", words: ["Pago", "450 euro", "per una", "stanza", "singola."], translation: "I pay 450 euros for a single room.", explanation: "\"Euro\" is invariable." },
      { type: "dictation", audio: "Sennò con l'affitto non ce la faccio.", explanation: "\"Sennò\" = otherwise; \"ce la faccio\" from \"farcela\"." },
      { type: "speak", text: "Studio fuori sede, lavoro due sere a settimana e vado un po' a rilento con gli esami.", prompt: "Talk about your own year: I study away from home, I work two evenings a week and I'm a bit slow with my exams.", tip: "ri-LEN-to: stress on len.", explanation: "Three everyday student phrases." },
    ],
  },
  {
    slug: "b2-error-hunt-education",
    level: "IT-B2",
    number: 9,
    title: "Error Hunt: Education",
    summary: "Fix the English-shaped mistakes learners make about school and university: college, graduato, an A, la scuola alta.",
    duration: "16 min",
    sections: [
      {
        heading: "College, high school, graduate",
        body: [
          "\"*Vado al college\" doesn't work: in Italy \"un collegio\" is a boarding school or a hall of residence. Going to university is \"andare all'università\" or \"fare l'università\". \"*La scuola alta\" is a literal translation of high school: say \"le superiori\" or \"la scuola superiore\", or name the type (\"il liceo\").",
          "\"*Sono graduato\" is the worst of all: \"un graduato\" is a non-commissioned officer in the army. To graduate is \"laurearsi\" (\"mi sono laureato nel 2019\"); finishing secondary school is \"diplomarsi\" (\"mi sono diplomata al liceo\"), and that qualification is \"il diploma\".",
        ],
        examples: [
          { es: "Mia figlia fa l'università a Padova.", en: "My daughter goes to university in Padua." },
          { es: "Alle superiori ero un disastro in matematica.", en: "At high school I was hopeless at maths." },
          { es: "Mi sono laureato nel 2019.", en: "I graduated in 2019." },
          { es: "Si è diplomata al liceo linguistico.", en: "She finished high school at a languages liceo." },
          { es: "Ha vissuto due anni in un collegio universitario.", en: "He lived in a university hall of residence for two years." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*Sono graduato nel 2019\". Write it correctly: I graduated in 2019.", source: "I graduated in 2019.", answer: "Mi sono laureato nel 2019.", altAnswers: ["Mi sono laureata nel 2019."], explanation: "\"Laurearsi\" = to graduate from university; \"un graduato\" is a soldier's rank." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*Vado al college\". Write it correctly: My daughter goes to university.", source: "My daughter goes to university.", answer: "Mia figlia va all'università.", altAnswers: ["Mia figlia fa l'università."], explanation: "\"Andare all'università\" or \"fare l'università\"." },
          { type: "multiple-choice", question: "How do you say \"at high school\" in Italian?", options: ["alle superiori", "alla scuola alta", "all'alta scuola", "al college"], correctIndex: 0, explanation: "\"Le superiori\" = upper secondary school." },
        ],
      },
      {
        heading: "Marks, grades and lectures",
        body: [
          "\"*Ho preso un A\" makes no sense in Italy, where marks are numbers: out of 10 at school (\"ho preso nove\") and out of 30 at university (\"ho preso trenta\", \"trenta e lode\"). No article: \"ho preso otto\", not \"*un otto\" in neutral speech, though \"un bell'otto\" (a nice eight) is fine.",
          "\"Grado\" is a degree of temperature or rank, never a class year: \"*sono nel terzo grado\" is \"faccio la terza\" (elementare, media...). And remember \"la lezione\" = lecture, \"la lettura\" = reading, \"il corso\" = course, \"la materia\" = school subject.",
        ],
        examples: [
          { es: "Ho preso nove nella verifica di scienze.", en: "I got nine in the science test." },
          { es: "All'esame di Fisica ho preso trenta.", en: "I got full marks in the physics exam." },
          { es: "Mio figlio fa la terza media.", en: "My son is in his third year of middle school." },
          { es: "La mia materia preferita era la storia.", en: "My favourite subject was history." },
          { es: "Oggi la lezione di Diritto è annullata.", en: "Today's law lecture is cancelled." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*Ho preso un A in fisica\". Write it correctly for a university exam: I got full marks in physics.", source: "I got full marks in physics.", answer: "Ho preso trenta in Fisica.", altAnswers: ["Ho preso 30 in Fisica.", "Ho preso trenta in fisica.", "Ho preso 30 in fisica.", "Ho preso trenta all'esame di Fisica."], explanation: "University marks are out of 30." },
          { type: "fill-blank", prompt: "A learner wrote \"*è nel terzo grado\". Write the Italian for the bold words.", en: "My son [is in his third year] of middle school.", sentence: "Mio figlio ___ media.", answer: "fa la terza", altAnswers: ["è in terza"], explanation: "\"Fare la terza media\"; \"grado\" is not a class year." },
          { type: "listen-choose", audio: "Oggi la lezione di Diritto è annullata.", question: "What's cancelled?", options: ["the law lecture", "the law reading list", "the law exam", "the law degree"], correctIndex: 0, explanation: "\"La lezione\" = lecture." },
        ],
      },
      {
        heading: "Teachers and the faculty",
        body: [
          "\"*Il professore della scuola elementare\" should be \"il maestro\" or \"la maestra\". At university, the teaching staff is \"il corpo docente\" or \"i docenti\"; \"la facoltà\" is the department or school, never the people. A head teacher is \"il preside\" (officially \"il dirigente scolastico\"), and a university's head is \"il rettore\".",
        ],
        examples: [
          { es: "La maestra di mia figlia è giovanissima.", en: "My daughter's primary teacher is very young." },
          { es: "I docenti di questa facoltà sono molto preparati.", en: "The teaching staff in this department are very knowledgeable." },
          { es: "Il preside ha convocato i genitori.", en: "The head teacher called the parents in." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"*la facoltà è molto preparata\" meaning the staff. Write it correctly: The teaching staff are very knowledgeable.", source: "The teaching staff are very knowledgeable.", answer: "I docenti sono molto preparati.", altAnswers: ["Il corpo docente è molto preparato.", "I professori sono molto preparati."], explanation: "\"La facoltà\" is the department; the staff are \"i docenti\"." },
          { type: "speak", text: "Il preside ha convocato i genitori.", prompt: "Say it in Italian: The head teacher called the parents in.", tip: "PRE-si-de: stress on the first syllable.", explanation: "\"Il preside\" = head teacher." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"*Mi sono graduata al liceo\" and write: She finished high school in 2015.", source: "She finished high school in 2015.", answer: "Si è diplomata nel 2015.", altAnswers: ["Si è diplomata al liceo nel 2015.", "Ha preso il diploma nel 2015.", "Ha finito le superiori nel 2015."], explanation: "Secondary school ends with \"il diploma\": \"diplomarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Alla scuola alta ero timido\" and write: At high school I was shy.", source: "At high school I was shy.", answer: "Alle superiori ero timido.", altAnswers: ["Alle superiori ero timida.", "Al liceo ero timido.", "Al liceo ero timida."], explanation: "\"Le superiori\" = high school." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ho preso un A\" and write, for a school test: I got ten in the test.", source: "I got ten in the test.", answer: "Ho preso dieci nella verifica.", altAnswers: ["Ho preso 10 nella verifica.", "Ho preso dieci nel compito.", "Ho preso 10 nel compito.", "Ho preso dieci al compito."], explanation: "School marks are out of 10, with no article." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Vado alla lettura alle nove\" and write: I've got a lecture at nine.", source: "I've got a lecture at nine.", answer: "Ho lezione alle nove.", altAnswers: ["Ho una lezione alle nove.", "Ho lezione alle 9."], explanation: "A lecture is \"una lezione\"; \"avere lezione\" with no article is natural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My favourite subject was history.", answer: "La mia materia preferita era la storia.", altAnswers: ["La mia materia preferita era storia."], explanation: "School subject = \"la materia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He lived in a university hall of residence.", answer: "Ha vissuto in un collegio universitario.", altAnswers: ["Ha abitato in un collegio universitario.", "Viveva in un collegio universitario."], explanation: "\"Il collegio\" = residence, not college as a school." },
      { type: "fill-blank", prompt: "Fix \"*il rettore della scuola\" and write the Italian for the bold words.", en: "[The head teacher] called the parents in.", sentence: "___ ha convocato i genitori.", answer: "Il preside", altAnswers: ["La preside", "Il dirigente scolastico", "La dirigente scolastica"], explanation: "\"Il rettore\" runs a university; schools have \"il preside\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [graduated in] medicine.", sentence: "___ Medicina.", answer: "Si è laureata in", explanation: "\"Laurearsi in\" + subject." },
      { type: "word-order", prompt: "Put the words in order to say: My daughter goes to university in Padua.", words: ["Mia figlia", "fa", "l'università", "a Padova."], translation: "My daughter goes to university in Padua.", explanation: "\"Fare l'università\"." },
      { type: "multi-select", question: "Which sentences are correct Italian? Choose all that apply.", options: ["Mi sono laureato a Pisa.", "Sono graduato a Pisa.", "Ho preso trenta e lode.", "Ho preso un A.", "Mio figlio fa la seconda media.", "Mio figlio è nel secondo grado."], correctIndexes: [0, 2, 4], explanation: "\"Laurearsi\", marks as numbers, years as ordinals with \"fare\"." },
      { type: "dictation", audio: "Mi sono diplomata al liceo e poi mi sono laureata a Pisa.", explanation: "\"Diplomarsi\" after school, \"laurearsi\" after university." },
      { type: "speak", text: "Mi sono laureato a Bologna, dove ho preso trenta e lode all'esame di Storia.", prompt: "Fix it and say it: a learner said \"Sono graduato al college di Bologna, dove ho preso un A in storia.\"", tip: "LO-de: open o.", explanation: "\"Laurearsi\", \"a Bologna\", \"trenta e lode\"." },
    ],
  },
  {
    slug: "b2-mission-compare-systems",
    level: "IT-B2",
    number: 10,
    title: "Real-World Mission: Compare Two School Systems",
    summary: "Write a clear comparison of the Italian school system and your own for an Italian family planning to move.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Set up the comparison",
        body: [
          "Your mission: an Italian colleague, Francesca, is moving to your country with her two children, aged eight and fifteen, and asks how schools differ. Open by stating the main difference: \"la differenza principale è che...\". Then organise by stage, using \"mentre\", \"invece\" and \"a differenza di\" (unlike): \"a differenza dell'Italia, da noi la scuola comincia a cinque anni\".",
          "\"Da noi\" (where we are, in our country) and \"da voi\" (in yours) are the natural way to compare countries in conversation and informal writing. \"Sia ... sia\" (or \"sia ... che\") means both ... and: \"sia in Italia sia da noi la scuola è gratuita\".",
        ],
        examples: [
          { es: "La differenza principale è che da noi non esiste la maturità.", en: "The main difference is that we don't have a final state exam." },
          { es: "A differenza dell'Italia, da noi la scuola comincia a cinque anni.", en: "Unlike in Italy, school starts at five here." },
          { es: "Sia in Italia sia da noi la scuola statale è gratuita.", en: "Both in Italy and here, state school is free." },
          { es: "Da voi gli esami sono orali, mentre da noi sono quasi tutti scritti.", en: "In your country exams are oral, whereas ours are almost all written." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unlike in Italy, school starts at five here.", answer: "A differenza dell'Italia, da noi la scuola comincia a cinque anni.", altAnswers: ["A differenza dell'Italia, da noi la scuola inizia a cinque anni.", "Diversamente dall'Italia, da noi la scuola comincia a cinque anni."], explanation: "\"A differenza di\" + article; \"da noi\" = here, in our country." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Both in Italy and here, state school is free.", answer: "Sia in Italia sia da noi la scuola statale è gratuita.", altAnswers: ["Sia in Italia che da noi la scuola statale è gratuita.", "Sia in Italia sia da noi la scuola pubblica è gratuita.", "Sia in Italia che da noi la scuola pubblica è gratuita."], explanation: "\"Sia ... sia\" or \"sia ... che\" = both ... and." },
        ],
      },
      {
        heading: "Compare the details",
        body: [
          "Use the full range of comparisons: \"più / meno ... di\", \"più ... che\", \"tanto quanto\", \"lo stesso numero di\", and superlatives (\"l'aspetto più diverso è...\"). Numbers make it concrete: \"le lezioni finiscono all'una, mentre da noi alle tre e mezza\". In most Italian schools lessons are in the morning and many pupils go home for lunch.",
          "Give your view with a subjunctive and soften it: \"credo che il sistema italiano sia più teorico\", \"ho l'impressione che da noi si dia più importanza allo sport\".",
        ],
        examples: [
          { es: "Le lezioni finiscono all'una, mentre da noi alle tre e mezza.", en: "Lessons finish at one, whereas ours finish at half past three." },
          { es: "I ragazzi italiani studiano più materie dei nostri.", en: "Italian teenagers study more subjects than ours." },
          { es: "Credo che il sistema italiano sia più teorico che pratico.", en: "I think the Italian system is more theoretical than practical." },
          { es: "Ho l'impressione che da noi si dia più importanza allo sport.", en: "I get the impression we put more emphasis on sport." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lessons finish at one, whereas ours finish at three.", answer: "Le lezioni finiscono all'una, mentre da noi alle tre.", altAnswers: ["Le lezioni finiscono all'una, mentre le nostre finiscono alle tre.", "Le lezioni finiscono all'una, mentre da noi finiscono alle tre."], explanation: "\"Mentre\" for the contrast; the verb can be left out the second time." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I get the impression we put more emphasis on sport.", answer: "Ho l'impressione che da noi si dia più importanza allo sport.", altAnswers: ["Ho l'impressione che noi diamo più importanza allo sport."], explanation: "\"Avere l'impressione che\" + subjunctive \"si dia\"." },
          { type: "listen-choose", audio: "I ragazzi italiani studiano più materie dei nostri.", question: "What does it mean?", options: ["Italian teenagers study more subjects than ours.", "Italian teenagers study fewer subjects than ours.", "Our teenagers study the same subjects.", "Italian teenagers study our subjects."], correctIndex: 0, explanation: "\"Più ... dei nostri\" = more than ours." },
        ],
      },
      {
        heading: "Advise",
        body: [
          "End with advice using if-sentences and the conditional: \"se fossi in te, iscriverei Luca a una scuola vicino a casa\", \"per tua figlia potrebbe essere utile un corso di lingua prima di settembre\". \"Ti consiglio di\" + infinitive is the friendly way to recommend.",
        ],
        examples: [
          { es: "Se fossi in te, iscriverei Luca a una scuola vicino a casa.", en: "If I were you, I'd enrol Luca at a school near home." },
          { es: "Per tua figlia potrebbe essere utile un corso di lingua.", en: "A language course could be useful for your daughter." },
          { es: "Ti consiglio di contattare la scuola prima dell'estate.", en: "I'd advise you to contact the school before the summer." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If I were you, I'd contact the school.", answer: "Se fossi in te, contatterei la scuola.", altAnswers: ["Se fossi in te contatterei la scuola.", "Io, se fossi in te, contatterei la scuola."], explanation: "\"Se fossi in te\" + conditional." },
          { type: "speak", text: "Ti consiglio di contattare la scuola prima dell'estate.", prompt: "Advise your friend: I'd advise you to contact the school before the summer.", tip: "con-si-GLIO: gli as in million.", explanation: "\"Consigliare di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The main difference is that we don't have oral exams.", answer: "La differenza principale è che da noi non ci sono esami orali.", altAnswers: ["La differenza principale è che noi non abbiamo esami orali.", "La principale differenza è che da noi non ci sono esami orali."], explanation: "\"La differenza principale è che\" + indicative fact." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In your country exams are oral, whereas ours are written.", answer: "Da voi gli esami sono orali, mentre da noi sono scritti.", altAnswers: ["Da voi gli esami sono orali, mentre i nostri sono scritti."], explanation: "\"Da voi\" / \"da noi\" for countries." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Italian teenagers study more subjects than ours.", answer: "I ragazzi italiani studiano più materie dei nostri.", altAnswers: ["Gli adolescenti italiani studiano più materie dei nostri.", "I ragazzi italiani studiano più materie rispetto ai nostri."], explanation: "\"Più ... di\" + article: \"dei nostri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I think the Italian system is more theoretical than practical.", answer: "Credo che il sistema italiano sia più teorico che pratico.", altAnswers: ["Penso che il sistema italiano sia più teorico che pratico."], explanation: "Subjunctive \"sia\"; \"più ... che\" between adjectives." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "A language course could be useful.", answer: "Potrebbe essere utile un corso di lingua.", altAnswers: ["Un corso di lingua potrebbe essere utile."], explanation: "\"Potrebbe\" softens the advice." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Both] in Italy [and] here school is free.", sentence: "Sia in Italia ___ da noi la scuola è gratuita.", answer: "sia", altAnswers: ["che"], explanation: "\"Sia ... sia\" or \"sia ... che\" = both ... and." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Unlike] Italy, we have no oral exams.", sentence: "___ Italia, da noi non ci sono esami orali.", answer: "A differenza dell'", altAnswers: ["Diversamente dall'"], explanation: "\"A differenza di\" + \"l'Italia\"." },
      { type: "word-order", prompt: "Put the words in order to say: If I were you, I'd enrol Luca at a school near home.", words: ["Se fossi", "in te,", "iscriverei", "Luca", "a una scuola", "vicino a casa."], translation: "If I were you, I'd enrol Luca at a school near home.", explanation: "\"Se fossi in te\" + conditional." },
      { type: "multiple-choice", question: "Which sentence compares correctly?", options: ["Le giornate scolastiche sono più corte in Italia che da noi.", "Le giornate scolastiche sono più corte in Italia di da noi.", "Le giornate scolastiche sono più corte in Italia di noi.", "Le giornate scolastiche sono più corte in Italia come da noi."], correctIndex: 0, explanation: "Comparing two phrases with prepositions: \"più ... che\"." },
      { type: "dictation", audio: "A differenza dell'Italia, da noi la scuola comincia a cinque anni.", explanation: "\"A differenza di\" + article." },
      { type: "speak", text: "Sia in Italia sia da noi la scuola statale è gratuita, ma da voi le lezioni finiscono prima.", prompt: "Compare: Both in Italy and here state school is free, but in your country lessons finish earlier.", tip: "gra-TU-i-ta: stress on tu.", explanation: "\"Sia ... sia\", then the contrast with \"ma\"." },
    ],
  },
];

export const IT_B2_U23_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your Italian colleague Francesca is moving to your country with her children, aged eight and fifteen, and asks how the school system differs from the Italian one. Write her an email comparing the two systems: the stages and ages, timetables, marks and exams, and one strength and one weakness of each. Give her your opinion and one or two pieces of advice.",
  minWords: 150,
  maxWords: 220,
  rubric: [
    "Names the Italian stages correctly (le elementari, le medie, le superiori, il liceo, la maturità) and compares them with your own",
    "Uses a range of comparison structures (più / meno ... di, più ... che, mentre, a differenza di, sia ... sia, da noi / da voi)",
    "Gives opinions with the subjunctive (credo che, ho l'impressione che) and marks as Italians do (voti in decimi, la sufficienza)",
    "Ends with advice using se fossi in te + conditional or ti consiglio di + infinitive",
  ],
  modelAnswer: "Cara Francesca, che bella notizia! Provo a spiegarti le differenze principali. A differenza dell'Italia, da noi la scuola comincia a cinque anni e non esiste una divisione tra medie e superiori: c'è una sola scuola secondaria dagli undici ai sedici anni, poi due anni facoltativi prima dell'università. Le lezioni finiscono alle tre e mezza, mentre da voi finiscono all'una, ma i ragazzi pranzano a scuola. Anche i voti sono diversi: non si usano i numeri da 1 a 10, ma le lettere, e gli esami sono quasi tutti scritti. Non ci sono interrogazioni, quindi tuo figlio sarà contento! Sia in Italia sia da noi la scuola statale è gratuita. Ho l'impressione che il sistema italiano sia più teorico e dia una cultura generale più ampia, mentre il nostro è più pratico e lascia più spazio allo sport e alle attività di gruppo. Se fossi in te, iscriverei i ragazzi a una scuola vicino a casa e, per il più grande, ti consiglio di contattare la scuola prima dell'estate, perché a quindici anni la scelta delle materie è importante. Un abbraccio e a presto!",
  explanation: "The email compares stage by stage with \"a differenza di\", \"mentre\" and \"sia ... sia\", and uses \"da noi\" / \"da voi\" naturally. \"Ho l'impressione che ... sia ... e dia\" expresses an opinion with the subjunctive, and \"se fossi in te, iscriverei\" and \"ti consiglio di\" give the advice.",
};
