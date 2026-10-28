// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u18.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 18: Health and the Body. Body parts and their irregular
// plurals, mi fa male / mi fanno male, ho mal di, symptoms, sentirsi,
// farsi male, the pharmacy, the doctor and the pronto soccorso.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U18: Lesson[] = [
  {
    slug: "a2-the-body",
    level: "IT-A2",
    number: 1,
    title: "The Body",
    summary: "Name the parts of the body, including the ones with an irregular plural: il braccio, le braccia.",
    duration: "15 min",
    sections: [
      {
        heading: "Head and face",
        body: [
          "\"La testa\" (head), \"la faccia\" or \"il viso\" (face), \"gli occhi\" (eyes), \"il naso\" (nose), \"la bocca\" (mouth), \"i denti\" (teeth), \"la gola\" (throat), \"il collo\" (neck).",
          "Italian uses the article, not a possessive, with your own body: \"Mi lavo i denti\" (I brush my teeth), \"Chiudi gli occhi\" (close your eyes). \"I miei occhi\" sounds like you're comparing them with someone else's.",
        ],
        examples: [
          { es: "Ho gli occhi stanchi.", en: "My eyes are tired." },
          { es: "Chiudi gli occhi e apri la bocca.", en: "Close your eyes and open your mouth." },
          { es: "Mi lavo i denti tre volte al giorno.", en: "I brush my teeth three times a day." },
          { es: "Ha il naso rosso per il freddo.", en: "He has a red nose from the cold." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My eyes are tired.", answer: "Ho gli occhi stanchi.", altAnswers: ["Ho gli occhi stanchi!"], explanation: "Italian says I have the eyes tired: \"ho\" + article, no \"miei\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I brush [my teeth] after dinner.", sentence: "Mi lavo ___ dopo cena.", answer: "i denti", explanation: "Reflexive \"mi lavo\" + article: \"i denti\", not \"i miei denti\"." },
        ],
      },
      {
        heading: "Body, arms and legs",
        body: [
          "\"La spalla\" (shoulder), \"la schiena\" (back), \"la pancia\" (tummy), \"lo stomaco\" (stomach), \"il braccio\" (arm), \"la mano\" (hand), \"il dito\" (finger), \"la gamba\" (leg), \"il ginocchio\" (knee), \"il piede\" (foot).",
          "\"La mano\" is feminine even though it ends in \"-o\", and its plural is \"le mani\". Pronounce the \"gli\" in \"ginocchio\" and \"ginocchia\" like the one in \"figli\".",
        ],
        examples: [
          { es: "Ho la schiena rigida.", en: "My back is stiff." },
          { es: "Lavati le mani prima di mangiare!", en: "Wash your hands before you eat!" },
          { es: "Alza la gamba destra.", en: "Lift your right leg." },
          { es: "Mi sono rotto il braccio a sciare.", en: "I broke my arm skiing." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wash your hands before you eat! (to a child)", answer: "Lavati le mani prima di mangiare!", altAnswers: ["Lavati le mani prima di mangiare."], explanation: "\"La mano\" → \"le mani\": feminine, irregular plural." },
          { type: "listen-choose", audio: "Alza la gamba destra.", question: "What should you lift?", options: ["your right leg", "your right arm", "your left leg", "your head"], correctIndex: 0, explanation: "\"La gamba\" = the leg; \"destra\" = right." },
        ],
      },
      {
        heading: "Plurals in -a",
        body: [
          "A few masculine body words take a feminine plural in \"-a\": \"il braccio → le braccia\", \"il dito → le dita\", \"il ginocchio → le ginocchia\", \"il labbro → le labbra\", \"l'osso → le ossa\". \"L'orecchio\" has a feminine plural too: \"le orecchie\". Outside the body, the classic is \"l'uovo → le uova\".",
          "Because the plural is feminine, everything with it is feminine plural: \"le braccia lunghe\", \"le dita fredde\", \"le uova fresche\".",
        ],
        examples: [
          { es: "Ho le dita fredde.", en: "My fingers are cold." },
          { es: "Mi fanno male le ginocchia.", en: "My knees hurt." },
          { es: "Ha le braccia lunghe.", en: "She has long arms." },
          { es: "Queste uova sono fresche?", en: "Are these eggs fresh?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My fingers are cold.", answer: "Ho le dita fredde.", altAnswers: ["Ho le dita gelate."], explanation: "\"Il dito → le dita\", feminine: \"fredde\"." },
          { type: "multiple-choice", question: "How do you say she has long arms?", options: ["Ha le braccia lunghe.", "Ha i bracci lunghi.", "Ha le braccie lunghe.", "Ha le braccia lunghi."], correctIndex: 0, explanation: "\"Le braccia\": feminine plural, so \"lunghe\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Close your eyes and open your mouth.", answer: "Chiudi gli occhi e apri la bocca.", altAnswers: ["Chiudi gli occhi e apri la bocca!"], explanation: "Tu commands + article with body parts." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My back is stiff.", answer: "Ho la schiena rigida.", altAnswers: ["Ho la schiena bloccata."], explanation: "\"Ho\" + article + body part + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are these eggs fresh?", answer: "Queste uova sono fresche?", altAnswers: ["Sono fresche queste uova?"], explanation: "\"L'uovo → le uova\": feminine, so \"queste\" and \"fresche\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I broke my arm skiing.", answer: "Mi sono rotto il braccio a sciare.", altAnswers: ["Mi sono rotta il braccio a sciare.", "Mi sono rotto il braccio sciando.", "Mi sono rotta il braccio sciando."], explanation: "\"Rompersi\" + article: \"il braccio\", not \"il mio braccio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The baby has very small fingers.", answer: "Il bambino ha le dita piccolissime.", altAnswers: ["La bambina ha le dita piccolissime.", "Il bambino ha le dita molto piccole.", "La bambina ha le dita molto piccole."], explanation: "\"Le dita\" is feminine: \"piccolissime\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He has [big ears].", sentence: "Ha ___.", answer: "le orecchie grandi", explanation: "\"L'orecchio → le orecchie\", feminine plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My [lips] are dry.", sentence: "Ho ___ secche.", answer: "le labbra", explanation: "\"Il labbro → le labbra\"; \"secche\" is feminine plural." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Put [your hands] on the table.", sentence: "Metti ___ sul tavolo.", answer: "le mani", explanation: "\"La mano → le mani\"; no possessive needed." },
      { type: "word-order", prompt: "Put the words in order to say: Lift your right leg.", words: ["Alza", "la", "gamba", "destra."], translation: "Lift your right leg.", explanation: "\"Gamba\" is feminine: \"destra\"." },
      { type: "matching", instructions: "Match the singular to its plural.", pairs: [{ left: "il braccio", right: "le braccia" }, { left: "il dito", right: "le dita" }, { left: "il ginocchio", right: "le ginocchia" }, { left: "l'orecchio", right: "le orecchie" }, { left: "la mano", right: "le mani" }, { left: "l'osso", right: "le ossa" }], explanation: "All these plurals are feminine." },
      { type: "dictation", audio: "Mi fanno male le ginocchia e ho le mani fredde.", explanation: "\"Le ginocchia\", \"le mani\": feminine plurals." },
      { type: "speak", text: "Ho le ginocchia stanche e le braccia pesanti.", prompt: "Say it in Italian: My knees are tired and my arms feel heavy.", tip: "gi-NOC-chia: double c, then a soft \"chia\".", explanation: "Feminine plurals: \"stanche\", \"pesanti\"." },
    ],
  },
  {
    slug: "a2-it-hurts",
    level: "IT-A2",
    number: 2,
    title: "It Hurts: Mi Fa Male",
    summary: "Say what hurts with mi fa male / mi fanno male and ho mal di, and say you've hurt yourself.",
    duration: "15 min",
    sections: [
      {
        heading: "Mi fa male, mi fanno male",
        body: [
          "\"Mi fa male la testa\" works like \"mi piace\": literally the head does me harm. The body part is the subject, so the verb agrees with it: \"mi fa male\" + singular, \"mi fanno male\" + plural.",
          "Change the pronoun for other people: \"ti fa male\", \"gli fa male\" (him), \"le fa male\" (her), \"Le fa male\" (formal you), \"ci fanno male\". With a name: \"a Marco fa male il piede\".",
        ],
        examples: [
          { es: "Mi fa male la testa.", en: "My head hurts." },
          { es: "Mi fanno male i piedi.", en: "My feet hurt." },
          { es: "Ti fa male il braccio?", en: "Does your arm hurt?" },
          { es: "A Marco fanno male le gambe.", en: "Marco's legs hurt." },
          { es: "Dove Le fa male?", en: "Where does it hurt? (formal)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My feet hurt.", answer: "Mi fanno male i piedi.", altAnswers: ["I piedi mi fanno male."], explanation: "Plural subject \"i piedi\" → \"fanno\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Does your arm hurt]? (to a friend)", sentence: "___?", answer: "Ti fa male il braccio", explanation: "\"Ti\" + \"fa\" (singular) + \"il braccio\"." },
          { type: "multiple-choice", question: "How do you say my knees hurt?", options: ["Mi fanno male le ginocchia.", "Mi fa male le ginocchia.", "Mi fanno male i ginocchia.", "Ho male le ginocchia."], correctIndex: 0, explanation: "Plural \"le ginocchia\" → \"fanno\"." },
        ],
      },
      {
        heading: "Ho mal di ...",
        body: [
          "For aches, the everyday set phrase is \"ho mal di\" + body part with no article: \"ho mal di testa\" (headache), \"mal di gola\" (sore throat), \"mal di pancia\" (stomach ache), \"mal di denti\", \"mal di schiena\". Note \"mal\", not \"male\", before \"di\".",
          "Both ways are fine: \"ho mal di testa\" = \"mi fa male la testa\".",
        ],
        examples: [
          { es: "Ho mal di gola da ieri.", en: "I've had a sore throat since yesterday." },
          { es: "Hai mal di pancia?", en: "Have you got a stomach ache?" },
          { es: "Ha sempre mal di schiena.", en: "She always has back pain." },
          { es: "Ho un terribile mal di denti.", en: "I've got a terrible toothache." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a sore throat since yesterday.", answer: "Ho mal di gola da ieri.", altAnswers: ["Mi fa male la gola da ieri."], explanation: "\"Ho mal di\" + no article; present + \"da\" for still going on." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got a stomach ache? (to a friend)", answer: "Hai mal di pancia?", altAnswers: ["Ti fa male la pancia?", "Hai mal di stomaco?"], explanation: "\"Mal di pancia\": \"mal\", no article." },
        ],
      },
      {
        heading: "Farsi male",
        body: [
          "\"Farsi male\" means to hurt yourself. It's reflexive, so it takes \"essere\" in the past and agrees: \"mi sono fatto male\" (a man), \"mi sono fatta male\" (a woman). Add the body part with \"a\": \"mi sono fatto male al ginocchio\".",
          "\"Attento, ti fai male!\" (careful, you'll hurt yourself) is what every Italian parent says.",
        ],
        examples: [
          { es: "Mi sono fatto male al ginocchio.", en: "I hurt my knee." },
          { es: "Ti sei fatta male?", en: "Did you hurt yourself? (to a woman)" },
          { es: "Attento, ti fai male!", en: "Careful, you'll hurt yourself!" },
          { es: "Si è fatto male a una mano.", en: "He hurt one of his hands." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hurt my knee. (a man speaking)", answer: "Mi sono fatto male al ginocchio.", explanation: "\"Farsi male\" + \"a\" + article: \"al ginocchio\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Did you hurt yourself]? (to a woman)", sentence: "___?", answer: "Ti sei fatta male", explanation: "\"Essere\" + \"fatta\", agreeing with a woman." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My head hurts.", answer: "Mi fa male la testa.", altAnswers: ["Ho mal di testa.", "La testa mi fa male."], explanation: "Singular \"la testa\" → \"fa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco's legs hurt.", answer: "A Marco fanno male le gambe.", explanation: "\"A Marco\" + \"fanno\" (plural)." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where does it hurt? (formal)", answer: "Dove Le fa male?", altAnswers: ["Dove le fa male?"], explanation: "Formal \"Le\" + \"fa male\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She always has back pain.", answer: "Ha sempre mal di schiena.", altAnswers: ["Lei ha sempre mal di schiena.", "Le fa sempre male la schiena."], explanation: "\"Mal di\" + no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Careful, you'll hurt yourself! (to a boy)", answer: "Attento, ti fai male!", altAnswers: ["Attento, ti fai male."], explanation: "Present \"ti fai male\" for an imminent risk." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "His ears hurt.", answer: "Gli fanno male le orecchie.", altAnswers: ["Gli fanno male le orecchie!"], explanation: "\"Gli\" = to him; \"le orecchie\" plural → \"fanno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've got a terrible toothache].", sentence: "___.", answer: "Ho un terribile mal di denti", altAnswers: ["Ho un mal di denti terribile"], explanation: "\"Un mal di denti\": the phrase works as a noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My [fingers hurt].", sentence: "Mi ___.", answer: "fanno male le dita", explanation: "\"Le dita\" → \"fanno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "She [hurt] her foot.", sentence: "Si è ___ al piede.", answer: "fatta male", explanation: "\"Si è fatta\": agrees with \"lei\"." },
      { type: "word-order", prompt: "Put the words in order to say: My knees hurt.", words: ["Mi", "fanno", "male", "le", "ginocchia."], translation: "My knees hurt.", explanation: "Plural subject after the verb." },
      { type: "listen-choose", audio: "Mi sono fatta male alla spalla giocando a tennis.", question: "What happened?", options: ["She hurt her shoulder playing tennis.", "She hurt her back playing tennis.", "Her shoulder hurts after work.", "She watched a tennis match."], correctIndex: 0, explanation: "\"Alla spalla\" = her shoulder." },
      { type: "speak", text: "Mi fa male la gola e mi fanno male anche le orecchie.", prompt: "Say it in Italian: My throat hurts, and my ears hurt too.", tip: "Singular \"fa\", then plural \"fanno\".", explanation: "The verb agrees with the body part." },
    ],
  },
  {
    slug: "a2-symptoms",
    level: "IT-A2",
    number: 3,
    title: "Symptoms",
    summary: "Describe how you feel: ho la febbre, ho il raffreddore, mi sento stanco, mi gira la testa, sono allergico a.",
    duration: "15 min",
    sections: [
      {
        heading: "Avere: febbre, tosse, raffreddore",
        body: [
          "Most symptoms use \"avere\" + article: \"ho la febbre\", \"ho la tosse\" (a cough), \"ho il raffreddore\" (a cold), \"ho la nausea\". For your temperature: \"ho la febbre a 38\" or \"ho 38 di febbre\".",
          "Never \"sono febbre\": Italian has a temperature the way it has a cold.",
        ],
        examples: [
          { es: "Ho la febbre a trentotto.", en: "I've got a temperature of thirty-eight." },
          { es: "Ho la tosse e il naso chiuso.", en: "I've got a cough and a blocked nose." },
          { es: "Mia figlia ha il raffreddore.", en: "My daughter has a cold." },
          { es: "Dopo il viaggio avevo la nausea.", en: "After the journey I felt sick." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a cough and a blocked nose.", answer: "Ho la tosse e il naso chiuso.", altAnswers: ["Ho la tosse e ho il naso chiuso."], explanation: "\"Avere\" + article for symptoms." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My daughter [has a cold].", sentence: "Mia figlia ___.", answer: "ha il raffreddore", explanation: "\"Avere il raffreddore\". \"Figlia\": soft \"gli\"." },
        ],
      },
      {
        heading: "Sentirsi and stare",
        body: [
          "\"Sentirsi\" + adjective says how you feel: \"mi sento stanco\", \"mi sento debole\" (weak), \"mi sento meglio\". \"Mi sento male\" means I feel ill, or I'm about to faint.",
          "\"Stare\" works too: \"sto male\" (I'm ill), \"sto meglio\" (I'm better). \"Mi gira la testa\" means I feel dizzy: literally my head is spinning.",
        ],
        examples: [
          { es: "Mi sento stanca da una settimana.", en: "I've felt tired for a week." },
          { es: "Oggi sto meglio, grazie.", en: "I'm better today, thanks." },
          { es: "Mi gira la testa, devo sedermi.", en: "I feel dizzy, I have to sit down." },
          { es: "Ti senti bene? Sei pallido.", en: "Are you feeling all right? You're pale." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I feel dizzy, I have to sit down.", answer: "Mi gira la testa, devo sedermi.", altAnswers: ["Mi gira la testa, mi devo sedere.", "Mi gira la testa: devo sedermi."], explanation: "\"Mi gira la testa\" = I feel dizzy." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm better today, thanks.", answer: "Oggi sto meglio, grazie.", altAnswers: ["Oggi mi sento meglio, grazie.", "Sto meglio oggi, grazie."], explanation: "\"Stare meglio\" or \"sentirsi meglio\"." },
          { type: "listen-choose", audio: "Ti senti bene? Sei pallido.", question: "What does she notice?", options: ["He's pale.", "He's hot.", "He's late.", "He's coughing."], correctIndex: 0, explanation: "\"Pallido\" = pale." },
        ],
      },
      {
        heading: "Allergies",
        body: [
          "\"Sono allergico a\" + article: \"sono allergica ai gatti\", \"sono allergico alla penicillina\", \"al polline\". The adjective agrees with you. Useful at the doctor's and in restaurants.",
        ],
        examples: [
          { es: "Sono allergica ai gatti.", en: "I'm allergic to cats." },
          { es: "È allergico alla penicillina.", en: "He's allergic to penicillin." },
          { es: "Siete allergici a qualcosa?", en: "Are you allergic to anything? (to a group)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's allergic to penicillin.", answer: "È allergico alla penicillina.", altAnswers: ["Lui è allergico alla penicillina."], explanation: "\"A\" + \"la\" → \"alla\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm [allergic to cats]. (a woman speaking)", sentence: "Sono ___.", answer: "allergica ai gatti", explanation: "\"Allergica\" agrees; \"a\" + \"i\" → \"ai\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a temperature of thirty-eight.", answer: "Ho la febbre a trentotto.", altAnswers: ["Ho la febbre a 38.", "Ho 38 di febbre.", "Ho trentotto di febbre."], explanation: "\"Avere la febbre a\" + number." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've felt tired for a week. (a woman speaking)", answer: "Mi sento stanca da una settimana.", altAnswers: ["Mi sento stanca da una settimana!"], explanation: "Present + \"da\": still going on." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you feeling all right? (to a friend)", answer: "Ti senti bene?", altAnswers: ["Stai bene?"], explanation: "\"Sentirsi bene\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm allergic to cats. (a woman speaking)", answer: "Sono allergica ai gatti.", explanation: "\"Allergica a\" + article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you allergic to anything? (to a group)", answer: "Siete allergici a qualcosa?", explanation: "\"Allergici\" agrees with \"voi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He's had a temperature since Sunday.", answer: "Ha la febbre da domenica.", altAnswers: ["Lui ha la febbre da domenica."], explanation: "\"Avere la febbre\" + \"da\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I feel ill], call a doctor!", sentence: "___, chiama un medico!", answer: "Mi sento male", altAnswers: ["Sto male"], explanation: "\"Sentirsi male\" = to feel ill." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "After the boat trip I [felt sick].", sentence: "Dopo il giro in barca ___.", answer: "avevo la nausea", explanation: "\"Avere la nausea\" = to feel sick." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I've got a cough] at night.", sentence: "___ di notte.", answer: "Ho la tosse", explanation: "\"Avere la tosse\"." },
      { type: "word-order", prompt: "Put the words in order to say: I feel weak and I have a temperature.", words: ["Mi", "sento", "debole", "e", "ho", "la", "febbre."], translation: "I feel weak and I have a temperature.", explanation: "\"Sentirsi\" + adjective, \"avere\" + symptom." },
      { type: "dictation", audio: "Ho il raffreddore e mi gira un po' la testa.", explanation: "\"Mi gira la testa\" = I feel dizzy." },
      { type: "speak", text: "Ho la tosse da tre giorni e oggi mi sento debole.", prompt: "Say it in Italian: I've had a cough for three days and today I feel weak.", tip: "TOS-se: hold the double s.", explanation: "\"Avere la tosse\" + \"da\"; \"sentirsi\" + adjective." },
    ],
  },
  {
    slug: "a2-drill-body-plurals",
    level: "IT-A2",
    number: 4,
    title: "Drill: Le Braccia, Le Dita, Le Uova",
    summary: "High-repetition practice of the irregular plurals and mi fa male / mi fanno male.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Feminine plurals in -a",
        body: [
          "\"Le braccia, le dita, le ginocchia, le labbra, le ossa, le uova\", plus \"le orecchie\" and \"le mani\": all feminine plural. Adjectives and \"fanno\" follow.",
        ],
        examples: [
          { es: "Mi fanno male le dita.", en: "My fingers hurt." },
          { es: "Ho le labbra screpolate.", en: "My lips are chapped." },
          { es: "Compra sei uova, per favore.", en: "Buy six eggs, please." },
          { es: "Ha le ossa forti.", en: "He has strong bones." },
          { es: "Si è rotto due dita.", en: "He broke two fingers." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Buy six eggs, please. (to a friend)", answer: "Compra sei uova, per favore.", altAnswers: ["Compra sei uova, per piacere.", "Per favore, compra sei uova."], explanation: "\"L'uovo → le uova\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My fingers hurt.", answer: "Mi fanno male le dita.", explanation: "\"Le dita\" → \"fanno\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He broke two fingers.", answer: "Si è rotto due dita.", altAnswers: ["Lui si è rotto due dita."], explanation: "\"Due dita\": plural of \"il dito\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My lips are chapped.", answer: "Ho le labbra screpolate.", altAnswers: ["Ho le labbra secche."], explanation: "\"Le labbra\": feminine adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He has strong bones.", answer: "Ha le ossa forti.", altAnswers: ["Lui ha le ossa forti."], explanation: "\"L'osso → le ossa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My arms hurt.", answer: "Mi fanno male le braccia.", altAnswers: ["Le braccia mi fanno male."], explanation: "\"Le braccia\" → \"fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "These eggs are not fresh.", answer: "Queste uova non sono fresche.", explanation: "\"Queste\", \"fresche\": feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Wash your hands! (to a group)", answer: "Lavatevi le mani!", altAnswers: ["Lavatevi le mani."], explanation: "\"Le mani\"; voi command + \"vi\" attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got cold ears.", answer: "Ho le orecchie fredde.", altAnswers: ["Ho le orecchie gelate."], explanation: "\"Le orecchie\": feminine plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Her knees hurt.", answer: "Le fanno male le ginocchia.", altAnswers: ["Le fanno male le ginocchia!"], explanation: "\"Le\" = to her; \"le ginocchia\" → \"fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need two eggs for the cake.", answer: "Mi servono due uova per la torta.", altAnswers: ["Ho bisogno di due uova per la torta.", "Per la torta mi servono due uova.", "Ci vogliono due uova per la torta."], explanation: "\"Mi servono\" agrees with \"due uova\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Count on [your fingers].", sentence: "Conta sulle ___.", answer: "dita", explanation: "\"Sulle dita\": feminine article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Bend [your knees]!", sentence: "Piega ___!", answer: "le ginocchia", explanation: "\"Il ginocchio → le ginocchia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My [arm hurts].", sentence: "Mi ___.", answer: "fa male il braccio", explanation: "Singular: \"fa\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [hurt his fingers].", sentence: "Si è fatto male ___.", answer: "alle dita", explanation: "\"A\" + \"le\" → \"alle\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The eggs are [broken].", sentence: "Le uova sono ___.", answer: "rotte", explanation: "Feminine plural agreement." },
      { type: "word-order", prompt: "Put the words in order to say: Raise your arms!", words: ["Alza", "le", "braccia!"], translation: "Raise your arms!", explanation: "\"Le braccia\"." },
      { type: "word-order", prompt: "Put the words in order to say: Her ears hurt.", words: ["Le", "fanno", "male", "le", "orecchie."], translation: "Her ears hurt.", explanation: "Pronoun \"le\", then article \"le\"." },
      { type: "multiple-choice", question: "Which one is correct?", options: ["Le uova sono fresche.", "Gli uovi sono freschi.", "Le uove sono fresche.", "Gli uova sono freschi."], correctIndex: 0, explanation: "\"Le uova\", feminine plural." },
      { type: "dictation", audio: "Ho le mani fredde e le labbra secche.", explanation: "\"Le mani\", \"le labbra\": feminine plurals." },
      { type: "speak", text: "Mi fanno male le braccia, le ginocchia e le dita.", prompt: "Say it in Italian: My arms, my knees and my fingers hurt.", tip: "\"Ginocchia\": the \"gi\" is soft, then a long \"cc\".", explanation: "One plural verb for the whole list." },
    ],
  },
  {
    slug: "a2-dialogue-lab-pharmacy",
    level: "IT-A2",
    number: 5,
    title: "Dialogue Lab: At the Pharmacy",
    summary: "Ask a pharmacist for something for a cold, answer da quanto tempo?, and follow prenda queste due volte al giorno.",
    duration: "15 min",
    sections: [
      {
        heading: "Asking for something",
        body: [
          "In Italy the pharmacist (\"il farmacista\", \"la farmacista\") gives a lot of advice. Ask \"Ha qualcosa per ...?\": \"per il mal di gola\", \"per la tosse\", \"per il raffreddore\". The pharmacist uses \"Lei\".",
        ],
        examples: [
          { es: "Buongiorno, ha qualcosa per il raffreddore?", en: "Good morning, have you got anything for a cold?" },
          { es: "Da quanto tempo ce l'ha?", en: "How long have you had it?" },
          { es: "Da due giorni. Ho anche un po' di tosse.", en: "For two days. I've also got a bit of a cough." },
          { es: "Ha la febbre?", en: "Have you got a temperature?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Good morning, have you got anything for a sore throat?", answer: "Buongiorno, ha qualcosa per il mal di gola?", altAnswers: ["Buongiorno, avete qualcosa per il mal di gola?"], explanation: "\"Ha qualcosa per\" + article + problem." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "How long [have you had it]?", sentence: "Da quanto tempo ___?", answer: "ce l'ha", explanation: "\"Ce l'ha\": \"avere\" with \"lo\" needs \"ce\"; present + \"da\"." },
        ],
      },
      {
        heading: "The advice",
        body: [
          "The pharmacist gives Lei commands: \"prenda\" (take), \"beva\" (drink), \"stia\" (stay), \"torni\" (come back). Dosage: \"due volte al giorno\" (twice a day), \"dopo i pasti\" (after meals), \"a stomaco pieno\" (on a full stomach).",
        ],
        examples: [
          { es: "Prenda queste compresse due volte al giorno.", en: "Take these tablets twice a day." },
          { es: "Le prenda dopo i pasti.", en: "Take them after meals." },
          { es: "Beva molta acqua e stia al caldo.", en: "Drink lots of water and keep warm." },
          { es: "Se tra tre giorni non sta meglio, vada dal medico.", en: "If you're not better in three days, go to the doctor." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take these tablets twice a day. (formal)", answer: "Prenda queste compresse due volte al giorno.", altAnswers: ["Prenda queste pastiglie due volte al giorno."], explanation: "Lei command \"prenda\"." },
          { type: "listen-choose", audio: "Beva molta acqua e stia al caldo.", question: "What does the pharmacist recommend?", options: ["drinking lots of water and keeping warm", "drinking hot tea and going out", "eating less and resting", "taking a hot bath"], correctIndex: 0, explanation: "\"Beva\", \"stia\": Lei commands." },
        ],
      },
      {
        heading: "Prescriptions and paying",
        body: [
          "Ask \"Ci vuole la ricetta?\" (do I need a prescription?). Many medicines are \"da banco\" (over the counter). \"Lo sciroppo\" is syrup; \"le bustine\" are sachets.",
        ],
        examples: [
          { es: "Ci vuole la ricetta?", en: "Do I need a prescription?" },
          { es: "No, è un farmaco da banco.", en: "No, it's an over-the-counter medicine." },
          { es: "Per la tosse Le do uno sciroppo.", en: "For the cough I'll give you a syrup." },
          { es: "Sono dodici euro e cinquanta.", en: "That's twelve euros fifty." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do I need a prescription?", answer: "Ci vuole la ricetta?", altAnswers: ["Serve la ricetta?", "Ci vuole la ricetta medica?"], explanation: "\"Ci vuole\" + singular." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "For the cough [I'll give you] a syrup. (formal)", sentence: "Per la tosse ___ uno sciroppo.", answer: "Le do", explanation: "Formal \"Le\" = to you." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got anything for a cough? (formal)", answer: "Ha qualcosa per la tosse?", altAnswers: ["Avete qualcosa per la tosse?"], explanation: "\"Qualcosa per\" + article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For two days. I've also got a bit of a cough.", answer: "Da due giorni. Ho anche un po' di tosse.", explanation: "\"Da\" + time; \"un po' di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take them after meals. (the tablets, formal)", answer: "Le prenda dopo i pasti.", altAnswers: ["Le prenda dopo mangiato."], explanation: "\"Le\" (the tablets) goes before a Lei command." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If you're not better in three days, go to the doctor. (formal)", answer: "Se tra tre giorni non sta meglio, vada dal medico.", altAnswers: ["Se fra tre giorni non sta meglio, vada dal medico.", "Se tra tre giorni non sta meglio, vada dal dottore."], explanation: "\"Tra\" = in; \"vada\" = Lei command of \"andare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's an over-the-counter medicine.", answer: "È un farmaco da banco.", altAnswers: ["È un medicinale da banco."], explanation: "\"Da banco\" = no prescription needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Drink lots of water and keep warm. (formal)", answer: "Beva molta acqua e stia al caldo.", altAnswers: ["Beva tanta acqua e stia al caldo."], explanation: "\"Beva\", \"stia\": Lei commands." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Take one [sachet] in the evening.", sentence: "Prenda una ___ la sera.", answer: "bustina", explanation: "\"La bustina\" = sachet." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do I need] the prescription?", sentence: "___ la ricetta?", answer: "Ci vuole", altAnswers: ["Serve"], explanation: "\"Ci vuole\" + singular noun." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Take it [on a full stomach].", sentence: "Lo prenda ___.", answer: "a stomaco pieno", explanation: "\"A stomaco pieno\" = after eating." },
      { type: "word-order", prompt: "Put the words in order to say: Take these tablets twice a day.", words: ["Prenda", "queste", "compresse", "due", "volte", "al", "giorno."], translation: "Take these tablets twice a day.", explanation: "\"Due volte al giorno\" = twice a day." },
      { type: "multiple-choice", question: "The pharmacist asks \"Da quanto tempo ce l'ha?\". What's the best answer?", options: ["Da tre giorni.", "Tre giorni fa.", "Per tre giorni.", "Tra tre giorni."], correctIndex: 0, explanation: "Still going on → \"da\"." },
      { type: "dictation", audio: "Prenda una compressa la mattina e una la sera.", explanation: "\"Prenda\": Lei command." },
      { type: "speak", text: "Buongiorno, ha qualcosa per il mal di gola? Ce l'ho da ieri.", prompt: "Say it in Italian: Good morning, have you got anything for a sore throat? I've had it since yesterday.", tip: "\"Ce l'ho\": say it as one word, ce-LO.", explanation: "\"Ce l'ho\" + \"da\"." },
    ],
  },
  {
    slug: "a2-dialogue-lab-medico",
    level: "IT-A2",
    number: 6,
    title: "Dialogue Lab: At the Medico di Base",
    summary: "Follow a visit to the family doctor: dove Le fa male?, mi faccia vedere, Le prescrivo ...",
    duration: "15 min",
    sections: [
      {
        heading: "Mi dica",
        body: [
          "Everyone in Italy has a \"medico di base\" (family doctor). Bring \"la tessera sanitaria\" (health card). The doctor opens with \"Mi dica\" (tell me) or \"Che problema ha?\" and asks how long it's been going on.",
        ],
        examples: [
          { es: "Buongiorno, si accomodi. Mi dica.", en: "Good morning, take a seat. Tell me." },
          { es: "Da qualche giorno mi fa male lo stomaco.", en: "My stomach has been hurting for a few days." },
          { es: "Ha anche la febbre?", en: "Have you also got a temperature?" },
          { es: "Sì, ieri sera avevo trentotto di febbre.", en: "Yes, last night I had a temperature of thirty-eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "My stomach has been hurting for a few days.", answer: "Da qualche giorno mi fa male lo stomaco.", altAnswers: ["Mi fa male lo stomaco da qualche giorno.", "Ho mal di stomaco da qualche giorno.", "Da qualche giorno ho mal di stomaco."], explanation: "\"Lo stomaco\" → \"fa\"; present + \"da\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Take a seat. [Tell me]. (formal)", sentence: "Si accomodi. ___.", answer: "Mi dica", explanation: "Lei command of \"dire\" + \"mi\" before it." },
        ],
      },
      {
        heading: "The examination",
        body: [
          "Expect a string of Lei commands: \"mi faccia vedere\" (let me see), \"si sdrai\" (lie down), \"apra la bocca\", \"respiri profondamente\" (breathe deeply). The doctor presses and asks \"Le fa male qui?\". Listening to your chest, a doctor might still say \"dica trentatré\" (say thirty-three).",
        ],
        examples: [
          { es: "Mi faccia vedere. Si sdrai, per favore.", en: "Let me see. Lie down, please." },
          { es: "Dove Le fa male? Qui?", en: "Where does it hurt? Here?" },
          { es: "Apra la bocca e respiri profondamente.", en: "Open your mouth and breathe deeply." },
          { es: "Ahi! Sì, lì mi fa molto male.", en: "Ouch! Yes, it really hurts there." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let me see. Lie down, please. (formal)", answer: "Mi faccia vedere. Si sdrai, per favore.", altAnswers: ["Mi faccia vedere. Si sdrai, prego."], explanation: "\"Faccia\" and \"si sdrai\": Lei commands, pronoun before." },
          { type: "listen-choose", audio: "Apra la bocca e respiri profondamente.", question: "What does the doctor ask?", options: ["Open your mouth and breathe deeply.", "Close your mouth and hold your breath.", "Open your eyes and look up.", "Lie down and relax."], correctIndex: 0, explanation: "\"Apra\", \"respiri\": Lei commands." },
        ],
      },
      {
        heading: "The prescription",
        body: [
          "\"Non è niente di grave\" (it's nothing serious). \"Le prescrivo\" (I'll prescribe you) or \"Le faccio la ricetta\" (I'll write you a prescription). If you need time off work, ask for \"il certificato di malattia\".",
        ],
        examples: [
          { es: "Non è niente di grave, è un'influenza.", en: "It's nothing serious, it's flu." },
          { es: "Le prescrivo un antibiotico.", en: "I'll prescribe you an antibiotic." },
          { es: "Stia a casa tre giorni e torni se non migliora.", en: "Stay at home for three days and come back if it doesn't get better." },
          { es: "Mi potrebbe fare il certificato per il lavoro?", en: "Could you write me a sick note for work?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you write me a sick note for work? (formal)", answer: "Mi potrebbe fare il certificato per il lavoro?", altAnswers: ["Potrebbe farmi il certificato per il lavoro?", "Mi potrebbe fare il certificato di malattia?"], explanation: "Conditional \"potrebbe\" for a polite request." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'll prescribe you] an antibiotic. (formal)", sentence: "___ un antibiotico.", answer: "Le prescrivo", explanation: "Formal \"Le\" = to you." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where does it hurt? Here? (formal)", answer: "Dove Le fa male? Qui?", altAnswers: ["Dove le fa male? Qui?", "Dove Le fa male? Qua?"], explanation: "Formal \"Le\" + \"fa male\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Open your mouth and breathe deeply. (formal)", answer: "Apra la bocca e respiri profondamente.", altAnswers: ["Apra la bocca e respiri a fondo."], explanation: "\"Aprire → apra\", \"respirare → respiri\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's nothing serious, it's flu.", answer: "Non è niente di grave, è un'influenza.", altAnswers: ["Non è niente di grave, è l'influenza.", "Niente di grave, è un'influenza."], explanation: "\"Niente di\" + adjective." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Stay at home for three days. (formal)", answer: "Stia a casa tre giorni.", altAnswers: ["Stia a casa per tre giorni."], explanation: "\"Stare → stia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Ouch! Yes, it really hurts there.", answer: "Ahi! Sì, lì mi fa molto male.", altAnswers: ["Ahi! Sì, lì mi fa tanto male.", "Ahi! Sì, mi fa molto male lì."], explanation: "\"Molto\" goes before \"male\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Come back next week. (formal)", answer: "Torni la settimana prossima.", altAnswers: ["Torni la prossima settimana."], explanation: "\"Tornare → torni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let me see]. (formal)", sentence: "___.", answer: "Mi faccia vedere", explanation: "\"Faccia\" + infinitive = let me." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Have you got your [health card]?", sentence: "Ha la ___?", answer: "tessera sanitaria", explanation: "\"La tessera sanitaria\" = health card." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Take it [three times a day]. (the syrup)", sentence: "Lo prenda ___.", answer: "tre volte al giorno", explanation: "\"Volte al giorno\"." },
      { type: "word-order", prompt: "Put the words in order to say: I'll write you a prescription.", words: ["Le", "faccio", "la", "ricetta."], translation: "I'll write you a prescription.", explanation: "\"Fare la ricetta\" = to write a prescription." },
      { type: "multiple-choice", question: "The doctor says \"Dica trentatré\". What should you do?", options: ["Say \"trentatré\" while she listens to your chest.", "Count to thirty-three.", "Come back in thirty-three days.", "Take thirty-three drops."], correctIndex: 0, explanation: "A classic of Italian doctors' visits." },
      { type: "dictation", audio: "Si sdrai, per favore. Le fa male qui?", explanation: "\"Si sdrai\": Lei command of \"sdraiarsi\"." },
      { type: "speak", text: "Dottore, da tre giorni ho mal di gola e mi fanno male le orecchie.", prompt: "Say it in Italian: Doctor, for three days I've had a sore throat and my ears hurt.", tip: "o-REC-chie: double c, and stress on the second syllable.", explanation: "\"Ho mal di\" + \"mi fanno male\" + plural." },
    ],
  },
  {
    slug: "a2-error-hunt-health",
    level: "IT-A2",
    number: 7,
    title: "Error Hunt: Health",
    summary: "Find and fix the typical mistakes: mi fa male i piedi, i braccia, ho male la testa, sono febbre.",
    duration: "15 min",
    sections: [
      {
        heading: "Fa or fanno?",
        body: [
          "\"*Mi fa male i piedi\" is wrong: the body part is the subject, so a plural needs \"fanno\". \"*Ho male la testa\" mixes two phrases: say \"ho mal di testa\" or \"mi fa male la testa\".",
        ],
        examples: [
          { es: "Mi fanno male i piedi.", en: "My feet hurt." },
          { es: "Ho mal di testa.", en: "I've got a headache." },
          { es: "Mi fa male la testa.", en: "My head hurts." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Mi fa male i piedi\". Translate into Italian: My feet hurt.", source: "My feet hurt.", answer: "Mi fanno male i piedi.", explanation: "Plural subject → \"fanno\"." },
          { type: "fill-blank", prompt: "Fix \"*Ho male la testa\". Write the Italian for the bold words.", en: "[I've got a headache].", sentence: "___.", answer: "Ho mal di testa", altAnswers: ["Mi fa male la testa"], explanation: "\"Mal di\" + no article." },
        ],
      },
      {
        heading: "Le braccia, not i braccia",
        body: [
          "\"*I braccia\" and \"*le braccie\" are both wrong: the plural is \"le braccia\", feminine, ending in \"-a\". Same for \"le dita\" (not \"*le dite\"), \"le uova\" (not \"*gli uovi\").",
        ],
        examples: [
          { es: "Mi fanno male le braccia.", en: "My arms hurt." },
          { es: "Ho le dita gonfie.", en: "My fingers are swollen." },
          { es: "Ho comprato una dozzina di uova.", en: "I bought a dozen eggs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Mi fanno male i braccia\". Translate into Italian: My arms hurt.", source: "My arms hurt.", answer: "Mi fanno male le braccia.", explanation: "\"Le braccia\", feminine plural." },
          { type: "translate", direction: "en-es", prompt: "Fix \"*Ho le dite gonfie\". Translate into Italian: My fingers are swollen.", source: "My fingers are swollen.", answer: "Ho le dita gonfie.", explanation: "\"Le dita\": the plural ends in \"-a\"." },
        ],
      },
      {
        heading: "Avere, sentirsi",
        body: [
          "\"*Sono febbre\" doesn't exist: \"ho la febbre\". \"Mi sento malato\" is fine (I feel ill), but \"*mi sento male la testa\" is not: for a body part use \"mi fa male\". \"Mi sento male\" alone means I feel ill.",
        ],
        examples: [
          { es: "Ho la febbre da ieri.", en: "I've had a temperature since yesterday." },
          { es: "Mi sento malato, vado a letto.", en: "I feel ill, I'm going to bed." },
          { es: "Mi fa male la testa da stamattina.", en: "My head has been hurting since this morning." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Fix \"*Sono febbre da ieri\". Translate into Italian: I've had a temperature since yesterday.", source: "I've had a temperature since yesterday.", answer: "Ho la febbre da ieri.", explanation: "\"Avere la febbre\"." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Mi sento malata, resto a casa.", "Mi sento male la testa.", "Sono febbre, resto a casa.", "Ho male la gola."], correctIndex: 0, explanation: "\"Sentirsi malato/a\" is fine on its own." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Fix \"*Mi sento male la testa\". Translate into Italian: My head has been hurting since this morning.", source: "My head has been hurting since this morning.", answer: "Mi fa male la testa da stamattina.", altAnswers: ["Ho mal di testa da stamattina.", "Mi fa male la testa da questa mattina."], explanation: "Body part → \"mi fa male\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Ho comprato una dozzina di uovi\". Translate into Italian: I bought a dozen eggs.", source: "I bought a dozen eggs.", answer: "Ho comprato una dozzina di uova.", explanation: "\"L'uovo → le uova\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Mi fa male le gambe\". Translate into Italian: My legs hurt.", source: "My legs hurt.", answer: "Mi fanno male le gambe.", explanation: "Plural → \"fanno\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Sono il raffreddore\". Translate into Italian: I've got a cold.", source: "I've got a cold.", answer: "Ho il raffreddore.", altAnswers: ["Ho preso il raffreddore."], explanation: "Symptoms take \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Mi sono fatto male il mio ginocchio\". Translate into Italian: I hurt my knee. (a man speaking)", source: "I hurt my knee.", answer: "Mi sono fatto male al ginocchio.", explanation: "\"Farsi male a\" + article, no possessive." },
      { type: "translate", direction: "en-es", prompt: "Fix \"*Lui è allergico per i gatti\". Translate into Italian: He's allergic to cats.", source: "He's allergic to cats.", answer: "È allergico ai gatti.", altAnswers: ["Lui è allergico ai gatti."], explanation: "\"Allergico a\", not \"per\"." },
      { type: "fill-blank", prompt: "Fix \"*Ho le orecchi fredde\". Write the Italian for the bold words.", en: "I've got cold [ears].", sentence: "Ho le ___ fredde.", answer: "orecchie", explanation: "\"L'orecchio → le orecchie\"." },
      { type: "fill-blank", prompt: "Fix \"*Ho mal della gola\". Write the Italian for the bold words.", en: "I've got [a sore throat].", sentence: "Ho ___.", answer: "mal di gola", explanation: "\"Mal di\" with no article." },
      { type: "fill-blank", prompt: "Fix \"*Ti fanno male la pancia?\". Write the Italian for the bold words.", en: "[Does your tummy hurt]?", sentence: "___?", answer: "Ti fa male la pancia", explanation: "Singular \"la pancia\" → \"fa\"." },
      { type: "word-order", prompt: "Fix \"*Lavati i tuoi mani\". Put the words in order to say: Wash your hands.", words: ["Lavati", "le", "mani."], translation: "Wash your hands.", explanation: "\"Le mani\", and no possessive." },
      { type: "multiple-choice", question: "Which sentence has a mistake?", options: ["Mi fa male i denti.", "Mi fanno male i denti.", "Ho mal di denti.", "Mi fa male un dente."], correctIndex: 0, explanation: "\"I denti\" is plural: \"mi fanno male\"." },
      { type: "listen-choose", audio: "Mi sento male, mi gira la testa.", question: "How does she feel?", options: ["ill and dizzy", "tired but fine", "better than yesterday", "hungry"], correctIndex: 0, explanation: "\"Mi sento male\" + \"mi gira la testa\"." },
      { type: "dictation", audio: "Mi fanno male le braccia e ho la febbre.", explanation: "\"Le braccia\" + \"fanno\"; \"avere la febbre\"." },
      { type: "speak", text: "Non sono febbre: ho la febbre! E mi fanno male le ginocchia.", prompt: "Correct yourself in Italian: Not \"sono febbre\": I have a temperature! And my knees hurt.", tip: "gi-NOC-chia: soft \"gi\", then a long \"cc\".", explanation: "\"Avere la febbre\"; plural → \"fanno\"." },
    ],
  },
  {
    slug: "a2-mission-call-in-sick",
    level: "IT-A2",
    number: 8,
    title: "Real-World Mission: Calling in Sick",
    summary: "Write a message to your boss saying you're ill, what the doctor said and when you'll be back.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "The message",
        body: [
          "A sick message to a boss you call \"Lei\": greet, say you can't come in, give the symptoms, say what the doctor said, and close politely. In Italy the doctor sends the certificate online; you pass on its number (\"il numero di protocollo\").",
          "\"Mi ha detto di\" + infinitive reports advice: \"mi ha detto di stare a riposo\". Use the conditional to ask politely.",
        ],
        examples: [
          { es: "Buongiorno dottoressa Ferri, purtroppo oggi non posso venire in ufficio.", en: "Good morning Dr Ferri, unfortunately I can't come into the office today." },
          { es: "Ho la febbre a trentanove e mal di gola.", en: "I've got a temperature of thirty-nine and a sore throat." },
          { es: "Il medico mi ha dato tre giorni di malattia.", en: "The doctor has signed me off for three days." },
          { es: "Mi ha detto di stare a riposo fino a venerdì.", en: "He told me to rest until Friday." },
          { es: "Le mando il numero di protocollo del certificato.", en: "I'm sending you the certificate number." },
          { es: "Potrebbe avvisare i colleghi? Grazie e scusi il disturbo.", en: "Could you let my colleagues know? Thanks, and sorry for the trouble." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Unfortunately I can't come into the office today.", answer: "Purtroppo oggi non posso venire in ufficio.", altAnswers: ["Purtroppo non posso venire in ufficio oggi.", "Oggi purtroppo non posso venire in ufficio."], explanation: "\"Venire\" towards the listener's place." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He told me to rest until Friday.", answer: "Mi ha detto di stare a riposo fino a venerdì.", altAnswers: ["Mi ha detto di riposare fino a venerdì.", "Mi ha detto di riposarmi fino a venerdì."], explanation: "\"Dire di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The doctor has signed me off for three days.", answer: "Il medico mi ha dato tre giorni di malattia.", altAnswers: ["Il dottore mi ha dato tre giorni di malattia."], explanation: "\"Giorni di malattia\" = sick days." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've got a temperature of thirty-nine and a sore throat.", answer: "Ho la febbre a trentanove e mal di gola.", altAnswers: ["Ho la febbre a 39 e mal di gola.", "Ho 39 di febbre e mal di gola.", "Ho la febbre a trentanove e ho mal di gola."], explanation: "\"Avere la febbre a\"; \"mal di gola\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you let my colleagues know? (formal)", answer: "Potrebbe avvisare i colleghi?", altAnswers: ["Potrebbe avvisare i miei colleghi?", "Può avvisare i colleghi?"], explanation: "Conditional for a polite request." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've had a temperature since last night.", answer: "Ho la febbre da ieri sera.", explanation: "Present + \"da\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I hope to be back on Monday.", answer: "Spero di tornare lunedì.", altAnswers: ["Spero di rientrare lunedì.", "Spero di tornare al lavoro lunedì."], explanation: "\"Sperare di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If there's anything urgent, you can write to me. (formal)", answer: "Se c'è qualcosa di urgente, mi può scrivere.", altAnswers: ["Se c'è qualcosa di urgente, può scrivermi.", "Per qualsiasi cosa urgente, mi può scrivere."], explanation: "\"Qualcosa di\" + adjective; formal \"può\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "He [prescribed] me an antibiotic.", sentence: "Mi ha ___ un antibiotico.", answer: "prescritto", explanation: "\"Prescrivere → prescritto\", like \"scrivere → scritto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Thanks, and [sorry for the trouble].", sentence: "Grazie e ___.", answer: "scusi il disturbo", explanation: "Formal \"scusi\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I'm sending you [the certificate number]. (formal)", sentence: "Le mando ___.", answer: "il numero di protocollo del certificato", altAnswers: ["il numero del certificato"], explanation: "\"Le mando\" = I'm sending you (formal)." },
      { type: "word-order", prompt: "Put the words in order to say: I'm not feeling well and I have to stay at home.", words: ["Non", "mi", "sento", "bene", "e", "devo", "restare", "a", "casa."], translation: "I'm not feeling well and I have to stay at home.", explanation: "\"Sentirsi\" + \"dovere\" + infinitive." },
      { type: "multiple-choice", question: "Which closing fits a message to your boss?", options: ["Grazie e scusi il disturbo.", "Ciao, a dopo!", "Baci!", "Dai, ci sentiamo!"], correctIndex: 0, explanation: "Formal \"scusi\" suits a boss you call Lei." },
      { type: "listen-choose", audio: "Il medico mi ha detto di stare a casa fino a mercoledì.", question: "Until when must he stay at home?", options: ["until Wednesday", "until Monday", "for a week", "until tomorrow"], correctIndex: 0, explanation: "\"Fino a mercoledì\"." },
      { type: "dictation", audio: "Purtroppo ho l'influenza e oggi non posso venire.", explanation: "\"L'influenza\" = flu." },
      { type: "speak", text: "Buongiorno, sono Paolo. Purtroppo sto male: ho la febbre e il medico mi ha dato tre giorni di malattia.", prompt: "Leave a voicemail for your boss in Italian: Good morning, it's Paolo. Unfortunately I'm ill: I've got a temperature and the doctor has signed me off for three days.", tip: "ma-lat-TI-a: double t, stress on the \"i\".", explanation: "\"Stare male\", \"avere la febbre\", passato prossimo for the doctor's visit." },
    ],
  },
  {
    slug: "a2-listening-lab-emergency",
    level: "IT-A2",
    number: 9,
    title: "Listening Lab: At the Pronto Soccorso",
    summary: "Understand short exchanges in an Italian emergency room, from triage to the doctor's advice.",
    duration: "15 min",
    sections: [
      {
        heading: "At triage",
        body: [
          "At \"il pronto soccorso\" (A&E, the emergency room) a nurse does triage first and asks what happened. Answer with the passato prossimo: \"sono caduto\", \"mi sono tagliato\" (I cut myself), \"ho sbattuto la testa\" (I hit my head).",
        ],
        examples: [
          { es: "Cosa è successo?", en: "What happened?" },
          { es: "Sono caduta dalla bicicletta.", en: "I fell off my bike." },
          { es: "Mi sono tagliato un dito in cucina.", en: "I cut my finger in the kitchen." },
          { es: "Ha sbattuto la testa?", en: "Did you hit your head?" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Sono caduta dalla bicicletta e mi fa male il polso.", question: "What's the problem?", options: ["She fell off her bike and her wrist hurts.", "She fell off her bike and hit her head.", "Her bike was stolen.", "She cut her hand on her bike."], correctIndex: 0, explanation: "\"Il polso\" = the wrist." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I cut my finger in the kitchen. (a man speaking)", answer: "Mi sono tagliato un dito in cucina.", altAnswers: ["Mi sono tagliato il dito in cucina."], explanation: "Reflexive \"tagliarsi\" + \"essere\"." },
        ],
      },
      {
        heading: "Waiting",
        body: [
          "Waits can be long. Ask \"Quanto c'è da aspettare?\" (how long is the wait?). You'll hear \"Si accomodi in sala d'attesa\" (please take a seat in the waiting room) and \"La chiamiamo noi\" (we'll call you).",
        ],
        examples: [
          { es: "Quanto c'è da aspettare?", en: "How long is the wait?" },
          { es: "Ci vuole almeno un'ora.", en: "It takes at least an hour." },
          { es: "Si accomodi in sala d'attesa, La chiamiamo noi.", en: "Please take a seat in the waiting room, we'll call you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long is the wait?", answer: "Quanto c'è da aspettare?", altAnswers: ["Quanto bisogna aspettare?", "Quanto tempo c'è da aspettare?"], explanation: "\"C'è da\" + infinitive = there's ... to do." },
          { type: "dictation", audio: "Si accomodi in sala d'attesa.", explanation: "Lei command \"si accomodi\"." },
        ],
      },
      {
        heading: "The doctor",
        body: [
          "The doctor may order \"una radiografia\" (an X-ray). Good news: \"Non è rotto, è solo una distorsione\" (it's not broken, it's just a sprain). Then come the instructions: \"metta il ghiaccio\" (put ice on it), \"non lo sforzi\" (don't strain it).",
        ],
        examples: [
          { es: "Facciamo una radiografia al polso.", en: "Let's do an X-ray of your wrist." },
          { es: "Non è rotto, è solo una distorsione.", en: "It's not broken, it's just a sprain." },
          { es: "Metta il ghiaccio e non lo sforzi per una settimana.", en: "Put ice on it and don't strain it for a week." },
          { es: "Se Le fa ancora male, torni.", en: "If it still hurts, come back." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's not broken, it's just a sprain.", answer: "Non è rotto, è solo una distorsione.", altAnswers: ["Non è rotto, è soltanto una distorsione."], explanation: "\"Rotto\" agrees with \"il polso\"." },
          { type: "listen-choose", audio: "Metta il ghiaccio e non lo sforzi per una settimana.", question: "What should the patient do?", options: ["Put ice on it and not strain it for a week.", "Take tablets for a week.", "Come back in a week for an X-ray.", "Keep it warm and move it a lot."], correctIndex: 0, explanation: "\"Metta\", \"non lo sforzi\": Lei commands." },
        ],
      },
    ],
    exercises: [
      { type: "listen-choose", audio: "Ho sbattuto la testa e adesso mi gira.", question: "What's wrong?", options: ["He hit his head and now feels dizzy.", "He has a headache from work.", "He fell and hurt his back.", "His head is hot."], correctIndex: 0, explanation: "\"Mi gira\" = my head is spinning." },
      { type: "listen-choose", audio: "C'è da aspettare almeno due ore, mi dispiace.", question: "How long is the wait?", options: ["at least two hours", "two minutes", "about an hour", "until tomorrow"], correctIndex: 0, explanation: "\"Almeno\" = at least." },
      { type: "dictation", audio: "Non è rotto, ma deve mettere il ghiaccio.", explanation: "\"Deve\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What happened?", answer: "Cosa è successo?", altAnswers: ["Cos'è successo?", "Che cosa è successo?", "Che è successo?"], explanation: "\"Succedere\" takes \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fell off my bike. (a woman speaking)", answer: "Sono caduta dalla bicicletta.", altAnswers: ["Sono caduta dalla bici."], explanation: "\"Cadere\" + \"essere\", agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you hit your head? (formal)", answer: "Ha sbattuto la testa?", explanation: "\"Sbattere la testa\" with \"avere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Let's do an X-ray of your wrist.", answer: "Facciamo una radiografia al polso.", explanation: "\"Fare una radiografia a\" + body part." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Put ice on it and don't strain it. (formal)", answer: "Metta il ghiaccio e non lo sforzi.", explanation: "Lei commands; \"lo\" before the negative command." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "If it still hurts, come back. (formal)", answer: "Se Le fa ancora male, torni.", altAnswers: ["Se le fa ancora male, torni."], explanation: "\"Le fa male\" + Lei command \"torni\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Please take a seat in [the waiting room].", sentence: "Si accomodi in ___.", answer: "sala d'attesa", explanation: "\"La sala d'attesa\" = waiting room." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It takes] at least an hour.", sentence: "___ almeno un'ora.", answer: "Ci vuole", explanation: "\"Ci vuole\" + singular." },
      { type: "speak", text: "Mi scusi, mi sono fatto male alla caviglia. Quanto c'è da aspettare?", prompt: "Say it in Italian at the triage desk: Excuse me, I've hurt my ankle. How long is the wait?", tip: "ca-VI-glia: soft \"gli\", as in \"figli\".", explanation: "\"Farsi male a\"; \"c'è da\" + infinitive." },
    ],
  },
  {
    slug: "a2-spiral-units-12-18",
    level: "IT-A2",
    number: 10,
    title: "Spiral Review: Commands, Conditional, Ci, Ne",
    summary: "Mixed practice of Units 12-18 in health and everyday situations: commands, the conditional, ci, ne and time words.",
    duration: "16 min",
    kind: "review",
    sections: [
      {
        heading: "Everything together",
        body: [
          "Commands: tu \"prendi\", Lei \"prenda\", with pronouns attached to tu forms (\"prendila\") and before Lei forms (\"la prenda\"). Conditional: \"dovresti\", \"potrebbe\", \"vorrei\". \"Ci\" for places and \"ci vuole\"; \"ne\" for quantities.",
        ],
        examples: [
          { es: "Hai mal di testa? Prendi un'aspirina e riposati.", en: "Have you got a headache? Take an aspirin and rest." },
          { es: "Dovresti andare dal medico. Ci vai domani?", en: "You should go to the doctor. Are you going tomorrow?" },
          { es: "Quante compresse prendo? Ne prenda due al giorno.", en: "How many tablets do I take? Take two a day." },
          { es: "Vorrei una crema per le mani, per favore.", en: "I'd like a hand cream, please." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You should go to the doctor. Are you going tomorrow?", answer: "Dovresti andare dal medico. Ci vai domani?", altAnswers: ["Dovresti andare dal dottore. Ci vai domani?"], explanation: "Conditional \"dovresti\" + \"ci\" for the place." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Take two a day. (tablets, formal)", answer: "Ne prenda due al giorno.", explanation: "\"Ne\" + number; Lei command." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got a headache? Take an aspirin and rest. (to a friend)", answer: "Hai mal di testa? Prendi un'aspirina e riposati.", altAnswers: ["Hai mal di testa? Prendi un'aspirina e riposa."], explanation: "Tu commands; \"riposati\" with \"ti\" attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like a hand cream, please.", answer: "Vorrei una crema per le mani, per favore.", altAnswers: ["Vorrei una crema mani, per favore."], explanation: "Conditional \"vorrei\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The syrup? Take it after meals. (to a friend)", answer: "Lo sciroppo? Prendilo dopo i pasti.", altAnswers: ["Lo sciroppo? Prendilo dopo mangiato."], explanation: "Tu command + \"lo\" attached." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The syrup? Take it after meals. (formal)", answer: "Lo sciroppo? Lo prenda dopo i pasti.", altAnswers: ["Lo sciroppo? Lo prenda dopo mangiato."], explanation: "Lei command: \"lo\" goes before." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Could you help me? I've hurt my foot. (formal, a woman speaking)", answer: "Potrebbe aiutarmi? Mi sono fatta male al piede.", altAnswers: ["Mi potrebbe aiutare? Mi sono fatta male al piede."], explanation: "Conditional + \"farsi male a\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take to get to the hospital?", answer: "Quanto ci vuole per arrivare all'ospedale?", altAnswers: ["Quanto ci vuole per andare all'ospedale?", "Quanto tempo ci vuole per arrivare all'ospedale?", "Quanto ci vuole per arrivare in ospedale?"], explanation: "\"Ci vuole\" for time needed." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't go out with a temperature! (to a friend)", answer: "Non uscire con la febbre!", altAnswers: ["Non uscire con la febbre."], explanation: "Negative tu command = \"non\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Plasters? I need some. (talking about \"cerotti\")", answer: "I cerotti? Ne ho bisogno.", altAnswers: ["Cerotti? Ne ho bisogno.", "I cerotti? Me ne servono."], explanation: "\"Avere bisogno di\" → \"ne\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In your shoes, [I'd stay] at home.", sentence: "Al posto tuo ___ a casa.", answer: "Starei", altAnswers: ["Resterei", "Rimarrei"], explanation: "Conditional for advice." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The pharmacy? [I've been there] already.", sentence: "La farmacia? ___ già stato.", answer: "Ci sono", explanation: "\"Ci\" for the place, before \"sono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Let's call] the doctor!", sentence: "___ il medico!", answer: "Chiamiamo", explanation: "Noi command = noi present." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Have you got] the health card? Yes, I've got it.", sentence: "___ la tessera sanitaria? Sì, ce l'ho.", answer: "Ce l'hai", explanation: "\"Ce l'hai\" in speech, echoed by \"ce l'ho\"." },
      { type: "word-order", prompt: "Put the words in order to say: Rest and drink lots of water! (to a group)", words: ["Riposatevi", "e", "bevete", "molta", "acqua!"], translation: "Rest and drink lots of water!", explanation: "Voi commands; \"vi\" attached." },
      { type: "multiple-choice", question: "Tablets: \"Quante ne devo prendere?\" Which answer is right?", options: ["Ne prenda una ogni otto ore.", "La prenda una ogni otto ore.", "Ci prenda una ogni otto ore.", "Prenda ne una ogni otto ore."], correctIndex: 0, explanation: "\"Ne\" + number, before the Lei command." },
      { type: "listen-choose", audio: "Al pronto soccorso? Ci sono andata ieri sera, ci ho messo tre ore!", question: "What does she say?", options: ["She went to A&E last night and it took her three hours.", "She's going to A&E in three hours.", "She worked at A&E for three hours.", "She'll go to A&E tonight."], correctIndex: 0, explanation: "\"Metterci\" = to take (time)." },
      { type: "dictation", audio: "Dovrebbe stare a letto e prendere queste compresse.", explanation: "Conditional \"dovrebbe\" + infinitives." },
      { type: "speak", text: "Non stai bene? Va' a casa e chiamami stasera!", prompt: "Say it in Italian to a colleague you call tu: You're not well? Go home and call me tonight!", tip: "\"Chiamami\": stress on CHIA, the \"mi\" is light.", explanation: "Tu commands; \"mi\" attached to \"chiama\"." },
    ],
  },
];

export const IT_A2_U18_WRITING: WriteExercise = {
  type: "write",
  prompt: "You can't come to your Italian class this week. Write an email to your teacher: say what's wrong and since when, describe your symptoms, say what the doctor or pharmacist told you to do, and ask politely for the homework.",
  minWords: 50,
  maxWords: 100,
  rubric: [
    "Describes symptoms with ho mal di, mi fa male / mi fanno male and avere (la febbre, la tosse)",
    "Uses present + da for symptoms still going on",
    "Reports advice with mi ha detto di + infinitive or a Lei command",
    "Asks politely with the conditional (potrebbe, vorrei)",
  ],
  modelAnswer: "Gentile professoressa, purtroppo questa settimana non posso venire a lezione. Ho la febbre da lunedì e ho anche la tosse. Mi fanno male la gola e le orecchie e mi sento molto stanca. Ieri sono andata dal medico: mi ha detto di stare a letto e di bere molta acqua. Mi ha prescritto anche uno sciroppo. Potrebbe mandarmi i compiti per email? Vorrei fare gli esercizi a casa. Grazie mille e a presto, Sarah",
  explanation: "\"Ho la febbre da lunedì\" uses the present + \"da\" because it's still going on. \"Mi fanno male\" is plural for \"la gola e le orecchie\". \"Mi ha detto di stare\" reports advice, and \"potrebbe\" makes the request polite.",
};
