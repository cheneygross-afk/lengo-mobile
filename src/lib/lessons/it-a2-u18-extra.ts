// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u18-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Italian A2 Unit 18 Extra Practice: Health and the Body. Optional lessons
// folded away under the unit (docs/italian-course/authoring.md).
export const IT_A2_U18_EXTRA: Lesson[] = [
  {
    slug: "a2-health-extra-1",
    level: "IT-A2",
    number: 1,
    title: "Extra Practice: Body and Symptoms",
    summary: "Fresh sentences with body parts, irregular plurals and symptoms.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Body and symptoms",
        body: [
          "Symptoms take \"avere\" + article (\"ho la tosse\"); feelings take \"sentirsi\" (\"mi sento debole\"). Watch the feminine plurals: \"le braccia\", \"le dita\", \"le ginocchia\", \"le orecchie\".",
        ],
        examples: [
          { es: "Ho il naso chiuso e gli occhi rossi.", en: "I've got a blocked nose and red eyes." },
          { es: "Mio figlio ha la tosse da una settimana.", en: "My son has had a cough for a week." },
          { es: "Ho le ginocchia gonfie dopo la corsa.", en: "My knees are swollen after the run." },
          { es: "Mi sento debole e non ho fame.", en: "I feel weak and I'm not hungry." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My son has had a cough for a week.", answer: "Mio figlio ha la tosse da una settimana.", explanation: "\"Avere la tosse\" + \"da\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My knees are swollen after the run.", answer: "Ho le ginocchia gonfie dopo la corsa.", explanation: "\"Le ginocchia\": feminine \"gonfie\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a blocked nose and red eyes.", answer: "Ho il naso chiuso e gli occhi rossi.", explanation: "\"Avere\" + article + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel weak and I'm not hungry.", answer: "Mi sento debole e non ho fame.", altAnswers: ["Mi sento debole e non ho appetito."], explanation: "\"Sentirsi\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My grandmother has a temperature of thirty-seven and a half.", answer: "Mia nonna ha la febbre a trentasette e mezzo.", altAnswers: ["Mia nonna ha 37 e mezzo di febbre.", "Mia nonna ha la febbre a 37 e mezzo."], explanation: "\"Avere la febbre a\" + number." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children have cold hands.", answer: "I bambini hanno le mani fredde.", altAnswers: ["I bambini hanno le mani gelate."], explanation: "\"Le mani\": feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you allergic to eggs? (to a friend)", answer: "Sei allergico alle uova?", altAnswers: ["Sei allergica alle uova?"], explanation: "\"A\" + \"le\" → \"alle uova\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm better, but I still have a cough.", answer: "Sto meglio, ma ho ancora la tosse.", altAnswers: ["Mi sento meglio, ma ho ancora la tosse."], explanation: "\"Stare meglio\"; \"ancora\" = still." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He has very long [fingers].", sentence: "Ha le ___ lunghissime.", answer: "dita", explanation: "\"Le dita\" + feminine adjective." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I feel dizzy] when I stand up.", sentence: "___ quando mi alzo.", answer: "Mi gira la testa", explanation: "\"Mi gira la testa\" = I feel dizzy." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After the flight I [felt sick].", sentence: "Dopo il volo ___.", answer: "avevo la nausea", explanation: "\"Avere la nausea\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She's got [a cold].", sentence: "Ha ___.", answer: "il raffreddore", explanation: "\"Il raffreddore\" = a cold." },
      { type: "word-order", prompt: "Put the words in order to say: I've had a temperature since Tuesday.", words: ["Ho", "la", "febbre", "da", "martedì."], translation: "I've had a temperature since Tuesday.", explanation: "Present + \"da\"." },
      { type: "multiple-choice", question: "How do you say I'm allergic to pollen?", options: ["Sono allergico al polline.", "Ho allergico al polline.", "Sono allergico del polline.", "Sono allergia al polline."], correctIndex: 0, explanation: "\"Essere allergico a\"." },
      { type: "listen-choose", audio: "Ho la tosse e mi fanno male le orecchie.", question: "What are her symptoms?", options: ["a cough and earache", "a cough and a headache", "a cold and sore eyes", "a temperature and backache"], correctIndex: 0, explanation: "\"La tosse\", \"le orecchie\"." },
      { type: "dictation", audio: "Mi sento debole e ho le labbra secche.", explanation: "\"Le labbra\": feminine plural." },
      { type: "speak", text: "Ho il raffreddore, la tosse e mi sento un po' debole.", prompt: "Say it in Italian: I've got a cold, a cough, and I feel a bit weak.", tip: "raf-fred-DO-re: two doubles, ff and dd.", explanation: "\"Avere\" for symptoms, \"sentirsi\" for feelings." },
    ],
  },
  {
    slug: "a2-health-extra-2",
    level: "IT-A2",
    number: 2,
    title: "Extra Practice: Mi Fa Male",
    summary: "Fresh sentences with mi fa male / mi fanno male, ho mal di and farsi male.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Fa or fanno, mal di",
        body: [
          "Singular body part → \"fa male\"; plural → \"fanno male\". Change the pronoun for the person: \"mi, ti, gli, le, Le, ci, vi\". \"Ho mal di\" + no article. \"Farsi male a\" + article.",
        ],
        examples: [
          { es: "Ti fanno male gli occhi?", en: "Do your eyes hurt?" },
          { es: "Le fa male la schiena da anni.", en: "Her back has hurt for years." },
          { es: "Ci fanno male i piedi dopo la gita.", en: "Our feet hurt after the trip." },
          { es: "Si è fatto male alla spalla in palestra.", en: "He hurt his shoulder at the gym." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do your eyes hurt? (to a friend)", answer: "Ti fanno male gli occhi?", explanation: "\"Gli occhi\" → \"fanno\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He hurt his shoulder at the gym.", answer: "Si è fatto male alla spalla in palestra.", explanation: "\"Farsi male a\" + article." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her back has hurt for years.", answer: "Le fa male la schiena da anni.", altAnswers: ["Ha mal di schiena da anni."], explanation: "\"Le\" = to her; present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Our feet hurt after the trip.", answer: "Ci fanno male i piedi dopo la gita.", explanation: "\"Ci\" = to us; plural → \"fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Does your stomach hurt? (formal)", answer: "Le fa male lo stomaco?", altAnswers: ["Ha mal di stomaco?", "Le fa male la pancia?", "Ha mal di pancia?"], explanation: "Formal \"Le\" + singular \"fa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a headache, turn the music down! (to a friend)", answer: "Ho mal di testa, abbassa la musica!", altAnswers: ["Mi fa male la testa, abbassa la musica!"], explanation: "\"Mal di testa\" + tu command." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Luca's teeth hurt.", answer: "A Luca fanno male i denti.", altAnswers: ["Luca ha mal di denti."], explanation: "\"A Luca\" + plural \"fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you hurt yourselves? (to a group)", answer: "Vi siete fatti male?", altAnswers: ["Vi siete fatte male?"], explanation: "\"Farsi male\" with \"voi\": \"fatti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My [legs hurt] after the run.", sentence: "Mi ___ dopo la corsa.", answer: "fanno male le gambe", explanation: "Plural → \"fanno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I've got [a sore throat] from shouting.", sentence: "Ho ___ perché ho gridato.", answer: "mal di gola", explanation: "\"Mal di\" + no article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She hurt her [hand] in the door.", sentence: "Si è fatta male alla ___ con la porta.", answer: "mano", explanation: "\"La mano\": feminine, so \"alla\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[His head hurts].", sentence: "___.", answer: "Gli fa male la testa", altAnswers: ["Ha mal di testa"], explanation: "\"Gli\" = to him." },
      { type: "word-order", prompt: "Put the words in order to say: My ears hurt.", words: ["Mi", "fanno", "male", "le", "orecchie."], translation: "My ears hurt.", explanation: "\"Le orecchie\" → \"fanno\"." },
      { type: "multiple-choice", question: "How do you say does your knee hurt? (to a friend)", options: ["Ti fa male il ginocchio?", "Ti fanno male il ginocchio?", "Hai male il ginocchio?", "Ti senti male il ginocchio?"], correctIndex: 0, explanation: "Singular → \"fa\"." },
      { type: "listen-choose", audio: "Mi sono fatto male al piede giocando a calcio.", question: "What happened?", options: ["He hurt his foot playing football.", "He hurt his hand playing football.", "His feet hurt after a walk.", "He watched a football match."], correctIndex: 0, explanation: "\"Al piede\" = his foot." },
      { type: "dictation", audio: "Gli fanno male le braccia e la schiena.", explanation: "Two subjects → plural \"fanno\"." },
      { type: "speak", text: "Ahi, mi sono fatta male al dito! Mi fa malissimo.", prompt: "Say it in Italian: Ouch, I've hurt my finger! It really hurts.", tip: "ma-LIS-si-mo: double s.", explanation: "\"Farsi male a\"; \"malissimo\" = very badly." },
    ],
  },
  {
    slug: "a2-health-extra-3",
    level: "IT-A2",
    number: 3,
    title: "Extra Practice: Doctor and Pharmacy",
    summary: "More short dialogues at the doctor's and the pharmacy, with Lei commands and dovere.",
    duration: "15 min",
    optional: true,
    kind: "drill",
    sections: [
      {
        heading: "Doctor and pharmacy",
        body: [
          "Doctors and pharmacists give Lei commands (\"prenda\", \"beva\", \"stia\", \"torni\") or use \"deve\" + infinitive: \"deve riposare\". Patients ask with \"Ha qualcosa per ...?\" and \"Devo ...?\".",
        ],
        examples: [
          { es: "Devo prenderlo prima o dopo i pasti?", en: "Do I have to take it before or after meals?" },
          { es: "Lo prenda dopo cena.", en: "Take it after dinner." },
          { es: "Deve riposare e bere molto.", en: "You must rest and drink a lot." },
          { es: "Ha qualcosa per il mal di testa?", en: "Have you got anything for a headache?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I have to take it before or after meals?", answer: "Devo prenderlo prima o dopo i pasti?", altAnswers: ["Lo devo prendere prima o dopo i pasti?"], explanation: "\"Lo\" attached to the infinitive or before \"devo\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You must rest and drink a lot. (formal)", answer: "Deve riposare e bere molto.", altAnswers: ["Deve riposarsi e bere molto."], explanation: "\"Deve\" + infinitives." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take it after dinner. (formal)", answer: "Lo prenda dopo cena.", explanation: "Lei command: \"lo\" goes before." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got anything for a headache? (formal)", answer: "Ha qualcosa per il mal di testa?", altAnswers: ["Avete qualcosa per il mal di testa?"], explanation: "\"Il mal di testa\": article after \"per\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come back in a week. (formal)", answer: "Torni tra una settimana.", altAnswers: ["Torni fra una settimana."], explanation: "\"Tra\" = in; Lei command." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I need a prescription for this syrup?", answer: "Ci vuole la ricetta per questo sciroppo?", altAnswers: ["Serve la ricetta per questo sciroppo?"], explanation: "\"Ci vuole\" + singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't drink alcohol with these tablets. (formal)", answer: "Non beva alcol con queste compresse.", altAnswers: ["Non beva alcolici con queste compresse."], explanation: "Negative Lei command: \"non\" + \"beva\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like an appointment with the doctor.", answer: "Vorrei un appuntamento con il medico.", altAnswers: ["Vorrei un appuntamento col medico.", "Vorrei prendere un appuntamento con il medico."], explanation: "Conditional \"vorrei\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Take] one tablet every eight hours. (formal)", sentence: "___ una compressa ogni otto ore.", answer: "Prenda", explanation: "\"Prendere → prenda\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Stay] in bed for two days. (formal)", sentence: "___ a letto due giorni.", answer: "Stia", explanation: "\"Stare → stia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "How many [do I have to take]? (tablets)", sentence: "Quante ne ___?", answer: "devo prendere", explanation: "\"Ne\" + \"devo\" + infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Show me] your tongue. (formal)", sentence: "___ la lingua.", answer: "Mi faccia vedere", altAnswers: ["Mi mostri"], explanation: "\"Mi faccia vedere\" = let me see." },
      { type: "word-order", prompt: "Put the words in order to say: Take these drops three times a day.", words: ["Prenda", "queste", "gocce", "tre", "volte", "al", "giorno."], translation: "Take these drops three times a day.", explanation: "\"Le gocce\" = drops." },
      { type: "multiple-choice", question: "The pharmacist says \"Le prenda a stomaco pieno\". What does she mean?", options: ["Take them after eating.", "Take them before eating.", "Take them with a full glass of water.", "Take them instead of eating."], correctIndex: 0, explanation: "\"A stomaco pieno\" = on a full stomach." },
      { type: "listen-choose", audio: "Se domani ha ancora la febbre, mi chiami.", question: "What should the patient do?", options: ["Call the doctor if the temperature is still there tomorrow.", "Come back tomorrow anyway.", "Take a tablet tomorrow morning.", "Go to A&E tonight."], correctIndex: 0, explanation: "\"Mi chiami\": Lei command with \"mi\" before." },
      { type: "dictation", audio: "Deve stare a riposo e prendere lo sciroppo.", explanation: "\"Deve\" + infinitives." },
      { type: "speak", text: "Buonasera, vorrei qualcosa per la tosse. Ci vuole la ricetta?", prompt: "Say it in Italian at the pharmacy: Good evening, I'd like something for a cough. Do I need a prescription?", tip: "\"Ricetta\": ri-CET-ta, hold the tt.", explanation: "\"Vorrei\" + \"ci vuole\"." },
    ],
  },
];
