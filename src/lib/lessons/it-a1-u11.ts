// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a1-u11.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A1 Unit 11: My Day: Reflexive Verbs. Reflexive verbs and the
// position of the pronoun, ci vediamo, frequency words, days of the week
// with and without the article, parts of the day, question intonation.
// Conventions: docs/italian-course/authoring.md.
export const IT_A1_U11: Lesson[] = [
  {
    slug: "a1-reflexive-verbs-1",
    level: "IT-A1",
    number: 1,
    title: "Reflexive Verbs, Part 1 of 2",
    summary: "Describe your morning with mi sveglio, mi alzo, mi lavo, mi vesto, and finally understand mi chiamo.",
    duration: "14 min",
    sections: [
      {
        heading: "Mi chiamo, explained",
        body: [
          "Since Unit 1 you've said \"mi chiamo Luca\". Literally it's I call myself Luca: \"chiamarsi\" is a reflexive verb, an action you do to yourself. Its infinitive ends in -si: \"chiamarsi\", \"alzarsi\" (to get up), \"svegliarsi\" (to wake up), \"lavarsi\" (to wash), \"vestirsi\" (to get dressed).",
          "English often has no myself here (I get up, I get dressed), but Italian always uses the pronoun: \"mi alzo\", never \"alzo\" alone for I get up.",
        ],
        examples: [
          { es: "Mi chiamo Luca.", en: "My name is Luca." },
          { es: "Mi sveglio alle sette.", en: "I wake up at seven." },
          { es: "Mi alzo subito.", en: "I get up straight away." },
          { es: "Mi lavo e mi vesto.", en: "I wash and get dressed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wake up at seven.", answer: "Mi sveglio alle sette.", altAnswers: ["Io mi sveglio alle sette."], explanation: "\"Svegliarsi\": \"mi\" + verb." },
          { type: "multiple-choice", question: "Which means I get up?", options: ["Mi alzo.", "Alzo.", "Io alzo me.", "Mi alza."], correctIndex: 0, explanation: "Reflexive: \"mi alzo\"." },
        ],
      },
      {
        heading: "The pronoun before the verb",
        body: [
          "The pronoun matches the person and goes right before the verb: \"mi alzo\" (I), \"ti alzi\" (you), \"si alza\" (he, she, formal you). The verb has its normal endings: \"alzarsi\" is an -are verb, \"vestirsi\" an -ire verb (\"mi vesto, ti vesti, si veste\").",
          "With a time: \"Mi alzo alle sette\". As a question: \"A che ora ti alzi?\".",
        ],
        examples: [
          { es: "A che ora ti alzi?", en: "What time do you get up?" },
          { es: "Ti vesti in fretta.", en: "You get dressed in a hurry." },
          { es: "Giulia si sveglia presto.", en: "Giulia wakes up early." },
          { es: "Come si chiama, signora?", en: "What's your name, madam?" },
          { es: "Marco si lava i denti.", en: "Marco brushes his teeth." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time do you get up? (to a friend)", answer: "A che ora ti alzi?", altAnswers: ["Tu a che ora ti alzi?"], explanation: "\"Ti\" + \"alzi\"." },
          { type: "listen-choose", audio: "Giulia si sveglia presto.", question: "What does Giulia do early?", options: ["wakes up", "goes to bed", "gets dressed", "has a shower"], correctIndex: 0, explanation: "\"Svegliarsi\" = to wake up." },
        ],
      },
      {
        heading: "Your body, the article",
        body: [
          "With parts of the body, Italian uses the article, not my: \"Mi lavo le mani\" (I wash my hands), \"Si lava i denti\" (he brushes his teeth). The \"mi\" already says whose they are.",
        ],
        examples: [
          { es: "Mi lavo le mani.", en: "I wash my hands." },
          { es: "Ti lavi i capelli ogni giorno?", en: "Do you wash your hair every day?" },
          { es: "Si lava la faccia.", en: "She washes her face." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I wash [my hands].", sentence: "Mi lavo ___.", answer: "le mani", explanation: "Article, not \"mie\": \"mi\" shows whose." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I get up straight away.", answer: "Mi alzo subito.", altAnswers: ["Io mi alzo subito."], explanation: "\"Mi alzo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wash and get dressed.", answer: "Mi lavo e mi vesto.", altAnswers: ["Io mi lavo e mi vesto."], explanation: "The pronoun before each verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Giulia wakes up early.", answer: "Giulia si sveglia presto.", explanation: "\"Si\" for she." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's your name, madam?", answer: "Come si chiama, signora?", altAnswers: ["Signora, come si chiama?"], explanation: "Lei: \"si chiama\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco brushes his teeth.", answer: "Marco si lava i denti.", explanation: "\"Lavarsi i denti\"; article, not \"suoi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you get dressed in a hurry? (to a friend)", answer: "Ti vesti in fretta?", altAnswers: ["Tu ti vesti in fretta?"], explanation: "\"Vestirsi\": -ire, \"ti vesti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I wake up] at half past six.", sentence: "___ alle sei e mezza.", answer: "Mi sveglio", altAnswers: ["Io mi sveglio"], explanation: "\"Mi sveglio\": gli as in \"famiglia\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you wash [your hair] every day? (to a friend)", sentence: "Ti lavi ___ ogni giorno?", answer: "i capelli", explanation: "Article with body parts." },
      { type: "word-order", prompt: "Put the words in order to say: I wake up at seven and get up straight away.", words: ["Mi", "sveglio", "alle", "sette", "e", "mi", "alzo", "subito."], translation: "I wake up at seven and get up straight away.", explanation: "\"Mi\" before each verb." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "svegliarsi", right: "to wake up" },
          { left: "alzarsi", right: "to get up" },
          { left: "lavarsi", right: "to wash (yourself)" },
          { left: "vestirsi", right: "to get dressed" },
          { left: "chiamarsi", right: "to be called" },
        ],
        explanation: "Reflexive infinitives end in -si.",
      },
      { type: "dictation", audio: "Mi sveglio, mi alzo e mi lavo.", explanation: "Three reflexive io forms." },
      {
        type: "speak",
        text: "Mi sveglio alle sette, mi alzo subito, mi lavo e mi vesto.",
        prompt: "Describe your morning: I wake up at seven, get up straight away, wash and get dressed.",
        tip: "\"Sveglio\": zve-LLYO, the gli is soft.",
        explanation: "Four reflexive verbs in a row.",
      },
    ],
  },
  {
    slug: "a1-reflexive-verbs-2",
    level: "IT-A1",
    number: 2,
    title: "Reflexive Verbs, Part 2 of 2",
    summary: "Use reflexive verbs in the plural, with non, and tell lavo la macchina from mi lavo; say ci vediamo.",
    duration: "14 min",
    sections: [
      {
        heading: "Ci, vi, si",
        body: [
          "The plural pronouns: \"ci alziamo\" (we get up), \"vi alzate\" (you get up), \"si alzano\" (they get up). So the whole verb is \"mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano\". \"Si\" is both he / she and they: the ending decides.",
          "New verbs: \"divertirsi\" (to have fun), \"riposarsi\" (to rest), \"addormentarsi\" (to fall asleep), \"prepararsi\" (to get ready).",
        ],
        examples: [
          { es: "Ci alziamo alle otto.", en: "We get up at eight." },
          { es: "Vi divertite?", en: "Are you having fun? (plural)" },
          { es: "La domenica si riposano.", en: "On Sundays they rest." },
          { es: "I bambini si addormentano alle nove.", en: "The children fall asleep at nine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you having fun? (plural)", answer: "Vi divertite?", altAnswers: ["Voi vi divertite?"], explanation: "\"Vi\" + \"-ite\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sundays [they rest].", sentence: "La domenica ___.", answer: "si riposano", explanation: "\"Si\" + loro ending." },
        ],
      },
      {
        heading: "Non mi alzo",
        body: [
          "\"Non\" goes before the pronoun: \"Non mi alzo presto\" (I don't get up early), \"Non si diverte\". Never between them.",
          "Many verbs exist in both forms. Without the pronoun the action goes to something else: \"Lavo la macchina\" (I wash the car). With it, it comes back to you: \"Mi lavo\" (I wash myself). Same for \"sveglio i bambini\" (I wake the children) vs \"mi sveglio\".",
        ],
        examples: [
          { es: "Non mi alzo presto la domenica.", en: "I don't get up early on Sundays." },
          { es: "Lavo la macchina.", en: "I wash the car." },
          { es: "Sveglio i bambini alle sette.", en: "I wake the children at seven." },
          { es: "Chiamo Marco.", en: "I'm calling Marco." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't get up early on Sundays.", answer: "Non mi alzo presto la domenica.", altAnswers: ["La domenica non mi alzo presto."], explanation: "\"Non\" + \"mi\" + verb." },
          { type: "multiple-choice", question: "Which means I wake the children?", options: ["Sveglio i bambini.", "Mi sveglio i bambini.", "Si sveglia i bambini.", "Mi sveglio bambini."], correctIndex: 0, explanation: "The action goes to someone else: no pronoun." },
        ],
      },
      {
        heading: "Ci vediamo",
        body: [
          "\"Ci\" can also mean each other: \"Ci vediamo\" (we'll see each other = see you), \"Ci sentiamo\" (we'll hear from each other = talk soon). \"Ci vediamo domani!\" is the standard goodbye before a next meeting.",
        ],
        examples: [
          { es: "Ci vediamo domani!", en: "See you tomorrow!" },
          { es: "Ci sentiamo stasera.", en: "Talk to you tonight." },
          { es: "Marco e Sara si conoscono da anni.", en: "Marco and Sara have known each other for years." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you tomorrow!", answer: "Ci vediamo domani!", altAnswers: ["A domani!"], explanation: "\"Ci vediamo\" = we'll see each other." },
          { type: "listen-choose", audio: "Ci sentiamo stasera.", question: "What does it mean?", options: ["Talk to you tonight.", "We feel good tonight.", "See you tomorrow.", "We're sitting down tonight."], correctIndex: 0, explanation: "\"Sentirsi\" = to hear from each other." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We get up at eight.", answer: "Ci alziamo alle otto.", altAnswers: ["Noi ci alziamo alle otto."], explanation: "\"Ci\" + \"-iamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The children fall asleep at nine.", answer: "I bambini si addormentano alle nove.", explanation: "ad-dor-MEN-ta-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I wash the car on Saturdays.", answer: "Lavo la macchina il sabato.", altAnswers: ["Il sabato lavo la macchina."], explanation: "Not reflexive: you wash the car." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She isn't having fun.", answer: "Non si diverte.", altAnswers: ["Lei non si diverte."], explanation: "\"Non\" before \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Talk to you tonight.", answer: "Ci sentiamo stasera.", explanation: "\"Ci sentiamo\" = talk soon." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you getting ready? (plural)", answer: "Vi preparate?", altAnswers: ["Voi vi preparate?", "Vi state preparando?"], explanation: "\"Vi\" + \"-ate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We rest] after lunch.", sentence: "___ dopo pranzo.", answer: "Ci riposiamo", altAnswers: ["Noi ci riposiamo"], explanation: "\"Ci\" + noi form." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I wake] my husband at seven.", sentence: "___ mio marito alle sette.", answer: "Sveglio", altAnswers: ["Io sveglio"], explanation: "No pronoun: you wake someone else." },
      { type: "word-order", prompt: "Put the words in order to say: On Saturdays we don't get up early.", words: ["Il", "sabato", "non", "ci", "alziamo", "presto."], translation: "On Saturdays we don't get up early.", explanation: "\"Non\" + \"ci\" + verb." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Non mi alzo presto.", "Mi non alzo presto.", "Mi alzo non presto.", "Non alzo mi presto."], correctIndex: 0, explanation: "\"Non\" comes first." },
      { type: "dictation", audio: "Vi divertite? Sì, ci divertiamo molto!", explanation: "\"Vi\" and \"ci\"." },
      {
        type: "speak",
        text: "Il sabato non ci alziamo presto. Ci riposiamo e ci divertiamo.",
        prompt: "Say it in Italian: On Saturdays we don't get up early. We rest and have fun.",
        tip: "di-ver-TIA-mo: stress on the ending.",
        explanation: "Three noi reflexives.",
      },
    ],
  },
  {
    slug: "a1-drill-reflexive",
    level: "IT-A1",
    number: 3,
    title: "Drill: Reflexive Verbs",
    summary: "Produce twelve reflexive verbs in all persons and with non.",
    duration: "20 min",
    kind: "drill",
    sections: [
      {
        heading: "Twelve verbs",
        body: [
          "\"svegliarsi, alzarsi, lavarsi, vestirsi, chiamarsi, divertirsi, riposarsi, addormentarsi, prepararsi, pettinarsi\" (to comb your hair), \"truccarsi\" (to put on make-up), \"annoiarsi\" (to get bored). Also \"farsi la doccia\" (to have a shower): \"mi faccio la doccia\". Pronoun: \"mi, ti, si, ci, vi, si\"; \"non\" before it.",
        ],
        examples: [
          { es: "Mi faccio la doccia la sera.", en: "I have a shower in the evening." },
          { es: "Ti trucchi per la festa?", en: "Are you putting make-up on for the party?" },
          { es: "Si annoiano a casa.", en: "They get bored at home." },
          { es: "Non ci pettiniamo mai!", en: "We never comb our hair!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a shower in the evening.", answer: "Mi faccio la doccia la sera.", altAnswers: ["La sera mi faccio la doccia.", "Faccio la doccia la sera."], explanation: "\"Farsi la doccia\"; \"fare la doccia\" is fine too." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They get bored at home.", answer: "Si annoiano a casa.", altAnswers: ["A casa si annoiano.", "Loro si annoiano a casa."], explanation: "\"Si\" + loro ending." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time do you wake up? (plural)", answer: "A che ora vi svegliate?", altAnswers: ["Voi a che ora vi svegliate?"], explanation: "\"Vi svegliate\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "He gets dressed quickly.", answer: "Si veste in fretta.", altAnswers: ["Si veste velocemente.", "Lui si veste in fretta."], explanation: "\"Si veste\": -ire." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're getting ready.", answer: "Ci prepariamo.", altAnswers: ["Noi ci prepariamo.", "Ci stiamo preparando."], explanation: "\"Ci prepariamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I don't get bored.", answer: "Non mi annoio.", altAnswers: ["Io non mi annoio."], explanation: "\"Non\" + \"mi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you rest on Sundays? (to a friend)", answer: "Ti riposi la domenica?", altAnswers: ["La domenica ti riposi?"], explanation: "\"Ti riposi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "She puts on make-up in the car.", answer: "Si trucca in macchina.", altAnswers: ["Lei si trucca in macchina."], explanation: "\"Truccarsi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They get up at six.", answer: "Si alzano alle sei.", altAnswers: ["Loro si alzano alle sei."], explanation: "AL-za-no." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I fall asleep on the sofa.", answer: "Mi addormento sul divano.", altAnswers: ["Io mi addormento sul divano."], explanation: "su + il = \"sul\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you having fun? (to a friend)", answer: "Ti diverti?", altAnswers: ["Tu ti diverti?"], explanation: "\"Divertirsi\": -ire." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We wash] our hands.", sentence: "___ le mani.", answer: "Ci laviamo", altAnswers: ["Noi ci laviamo"], explanation: "Article, not \"nostre\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The children [don't get bored].", sentence: "I bambini ___.", answer: "non si annoiano", explanation: "\"Non si annoiano\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You comb your hair] in the bathroom. (plural)", sentence: "___ in bagno.", answer: "Vi pettinate", altAnswers: ["Voi vi pettinate"], explanation: "\"Vi pettinate\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "What [is your name], sir?", sentence: "Come ___, signore?", answer: "si chiama", explanation: "Lei: \"si chiama\"." },
      {
        type: "matching",
        instructions: "Match the Italian to the English.",
        pairs: [
          { left: "mi alzo", right: "I get up" },
          { left: "ti alzi", right: "you get up" },
          { left: "si alza", right: "he / she gets up" },
          { left: "ci alziamo", right: "we get up" },
          { left: "vi alzate", right: "you (plural) get up" },
          { left: "si alzano", right: "they get up" },
        ],
        explanation: "The whole reflexive present.",
      },
      { type: "dictation", audio: "Ci svegliamo alle sette e ci prepariamo.", explanation: "Two noi reflexives." },
      { type: "dictation", audio: "Si veste e si pettina.", explanation: "Two lui / lei reflexives." },
      {
        type: "speak",
        text: "Mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano.",
        prompt: "Say all six forms of alzarsi.",
        tip: "AL-za-no: the loro form keeps the io stress.",
        explanation: "Pronoun + verb in every person.",
      },
    ],
  },
  {
    slug: "a1-how-often",
    level: "IT-A1",
    number: 4,
    title: "How Often?",
    summary: "Say how often you do things with sempre, di solito, spesso, qualche volta, raramente and non ... mai.",
    duration: "14 min",
    sections: [
      {
        heading: "Always to rarely",
        body: [
          "From most to least: \"sempre\" (always), \"di solito\" (usually), \"spesso\" (often), \"qualche volta\" (sometimes), \"raramente\" (rarely). \"Sempre\" and \"spesso\" usually go after the verb: \"Mi alzo sempre alle sette\". \"Di solito\" and \"qualche volta\" often start the sentence: \"Di solito ceno alle otto\".",
          "Every day is \"ogni giorno\" or \"tutti i giorni\": \"ogni\" never changes and takes a singular noun.",
        ],
        examples: [
          { es: "Mi alzo sempre alle sette.", en: "I always get up at seven." },
          { es: "Di solito ceno alle otto.", en: "I usually have dinner at eight." },
          { es: "Vado spesso in palestra.", en: "I often go to the gym." },
          { es: "Qualche volta lavoro da casa.", en: "Sometimes I work from home." },
          { es: "Faccio sport tutti i giorni.", en: "I do sport every day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I usually have dinner at eight.", answer: "Di solito ceno alle otto.", altAnswers: ["Ceno di solito alle otto.", "Di solito io ceno alle otto."], explanation: "\"Di solito\" = usually." },
          { type: "multiple-choice", question: "Which is the most frequent?", options: ["sempre", "spesso", "qualche volta", "raramente"], correctIndex: 0, explanation: "\"Sempre\" = always." },
        ],
      },
      {
        heading: "Non ... mai",
        body: [
          "Never needs two words, around the verb: \"non\" before it, \"mai\" after it. \"Non prendo mai il caffè la sera\" (I never have coffee in the evening). With a reflexive: \"Non mi alzo mai tardi\". English never alone becomes \"non ... mai\": \"mai prendo\" on its own is wrong.",
          "\"Mai\" alone answers a question: \"Vai mai a teatro?\" \"Mai!\".",
        ],
        examples: [
          { es: "Non prendo mai il caffè la sera.", en: "I never have coffee in the evening." },
          { es: "Non mi alzo mai tardi.", en: "I never get up late." },
          { es: "Marco non cucina mai.", en: "Marco never cooks." },
          { es: "Vai mai a teatro? Mai!", en: "Do you ever go to the theatre? Never!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco never cooks.", answer: "Marco non cucina mai.", explanation: "\"Non\" + verb + \"mai\"." },
          { type: "listen-choose", audio: "Non prendo mai il caffè la sera.", question: "When does the speaker have coffee in the evening?", options: ["never", "always", "sometimes", "often"], correctIndex: 0, explanation: "\"Non ... mai\" = never." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I always get up at seven.", answer: "Mi alzo sempre alle sette.", altAnswers: ["Mi alzo alle sette sempre.", "Io mi alzo sempre alle sette."], explanation: "\"Sempre\" after the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I often go to the gym.", answer: "Vado spesso in palestra.", altAnswers: ["Spesso vado in palestra."], explanation: "\"Spesso\" after the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Sometimes I work from home.", answer: "Qualche volta lavoro da casa.", altAnswers: ["A volte lavoro da casa.", "Lavoro da casa qualche volta."], explanation: "\"Qualche volta\" or \"a volte\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I never get up late.", answer: "Non mi alzo mai tardi.", altAnswers: ["Io non mi alzo mai tardi."], explanation: "\"Non mi\" + verb + \"mai\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We rarely go out.", answer: "Usciamo raramente.", altAnswers: ["Raramente usciamo.", "Usciamo poco."], explanation: "\"Raramente\" = rarely." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I do sport every day.", answer: "Faccio sport tutti i giorni.", altAnswers: ["Faccio sport ogni giorno.", "Ogni giorno faccio sport."], explanation: "\"Tutti i giorni\" = \"ogni giorno\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Giulia [never eats] meat.", sentence: "Giulia ___ la carne.", answer: "non mangia mai", explanation: "\"Non\" ... \"mai\" around the verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you ever go] to the theatre? (to a friend)", sentence: "___ a teatro?", answer: "Vai mai", altAnswers: ["Tu vai mai"], explanation: "\"Mai\" in a question = ever." },
      { type: "word-order", prompt: "Put the words in order to say: I usually have a shower in the morning.", words: ["Di", "solito", "mi", "faccio", "la", "doccia", "la", "mattina."], translation: "I usually have a shower in the morning.", explanation: "\"Di solito\" first." },
      { type: "multiple-choice", question: "Which sentence means I never watch TV?", options: ["Non guardo mai la TV.", "Mai guardo la TV.", "Guardo mai la TV.", "Non mai guardo la TV."], correctIndex: 0, explanation: "\"Non\" + verb + \"mai\"." },
      { type: "dictation", audio: "Di solito mi alzo presto, ma la domenica mai.", explanation: "\"Di solito\", \"mai\"." },
      {
        type: "speak",
        text: "Mi alzo sempre presto, vado spesso in palestra, ma non mi riposo mai!",
        prompt: "Say it in Italian: I always get up early, I often go to the gym, but I never rest!",
        tip: "\"Spesso\": hold the double s.",
        explanation: "Three frequency words.",
      },
    ],
  },
  {
    slug: "a1-days-of-the-week",
    level: "IT-A1",
    number: 5,
    title: "The Days of the Week",
    summary: "Name the days without capitals, tell lunedì (this Monday) from il lunedì (every Monday), and use oggi, domani, stamattina and stasera.",
    duration: "14 min",
    sections: [
      {
        heading: "Lunedì to domenica",
        body: [
          "\"Lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica\". No capital letters. The first five are stressed on the last syllable, with an accent: lu-ne-DÌ. All are masculine except \"la domenica\".",
          "Without an article a day means the coming one (or a specific one): \"Lunedì vado dal medico\" (on Monday). With the article it means every: \"Il lunedì vado in palestra\" (on Mondays).",
        ],
        examples: [
          { es: "lunedì, martedì, mercoledì", en: "Monday, Tuesday, Wednesday" },
          { es: "giovedì, venerdì, sabato, domenica", en: "Thursday, Friday, Saturday, Sunday" },
          { es: "Lunedì vado dal medico.", en: "On Monday I'm going to the doctor's." },
          { es: "Il lunedì vado in palestra.", en: "On Mondays I go to the gym." },
          { es: "La domenica pranziamo dai nonni.", en: "On Sundays we have lunch at my grandparents'." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Mondays I go to the gym.", answer: "Il lunedì vado in palestra.", altAnswers: ["Vado in palestra il lunedì."], explanation: "Every Monday: \"il lunedì\"." },
          { type: "multiple-choice", question: "Which day is feminine?", options: ["domenica", "sabato", "lunedì", "venerdì"], correctIndex: 0, explanation: "\"La domenica\"." },
        ],
      },
      {
        heading: "Today, tomorrow, this morning",
        body: [
          "\"Oggi\" (today), \"domani\" (tomorrow), \"dopodomani\" (the day after tomorrow). \"Stamattina\" (this morning), \"stasera\" (this evening), \"stanotte\" (tonight, during the night) are one word each. \"Il fine settimana\" or \"il weekend\" is the weekend.",
        ],
        examples: [
          { es: "Oggi è martedì.", en: "Today is Tuesday." },
          { es: "Stamattina mi alzo tardi.", en: "This morning I'm getting up late." },
          { es: "Ci vediamo dopodomani.", en: "See you the day after tomorrow." },
          { es: "Cosa fai nel fine settimana?", en: "What are you doing at the weekend?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Today is Tuesday.", answer: "Oggi è martedì.", explanation: "No capital, no article." },
          { type: "listen-choose", audio: "Ci vediamo dopodomani.", question: "When will they meet?", options: ["the day after tomorrow", "tomorrow", "today", "next week"], correctIndex: 0, explanation: "\"Dopodomani\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Monday I'm going to the doctor's.", answer: "Lunedì vado dal medico.", altAnswers: ["Vado dal medico lunedì.", "Lunedì vado dal dottore."], explanation: "This Monday: no article." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays we have lunch at my grandparents'.", answer: "La domenica pranziamo dai nonni.", altAnswers: ["La domenica mangiamo dai nonni."], explanation: "Every Sunday: \"la domenica\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What are you doing at the weekend? (to a friend)", answer: "Cosa fai nel fine settimana?", altAnswers: ["Che cosa fai nel fine settimana?", "Cosa fai nel weekend?", "Cosa fai questo fine settimana?"], explanation: "\"Nel fine settimana\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This evening I'm staying in.", answer: "Stasera sto a casa.", altAnswers: ["Stasera resto a casa."], explanation: "\"Stasera\": one word." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Fridays I don't work.", answer: "Il venerdì non lavoro.", altAnswers: ["Non lavoro il venerdì."], explanation: "\"Il venerdì\" = every Friday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you on Thursday!", answer: "Ci vediamo giovedì!", altAnswers: ["A giovedì!"], explanation: "This Thursday: no article." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[This morning] I get up late.", sentence: "___ mi alzo tardi.", answer: "Stamattina", explanation: "One word." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The museum is closed [on Mondays].", sentence: "Il museo è chiuso ___.", answer: "il lunedì", explanation: "Every Monday." },
      { type: "word-order", prompt: "Put the words in order to say: On Wednesday and Friday I study Italian.", words: ["Mercoledì", "e", "venerdì", "studio", "italiano."], translation: "On Wednesday and Friday I study Italian.", explanation: "Lower-case days." },
      { type: "multiple-choice", question: "\"Il sabato\" means ...", options: ["on Saturdays, every Saturday", "this Saturday", "last Saturday", "Saturday morning"], correctIndex: 0, explanation: "The article makes it a habit." },
      { type: "dictation", audio: "Oggi è giovedì, domani è venerdì.", explanation: "Accents on the final ì." },
      {
        type: "speak",
        text: "Il lunedì e il mercoledì vado in palestra. Sabato vado al mare.",
        prompt: "Say it in Italian: On Mondays and Wednesdays I go to the gym. On Saturday I'm going to the seaside.",
        tip: "lu-ne-DÌ, mer-co-le-DÌ: stress on the last syllable.",
        explanation: "Habit with the article, one-off without.",
      },
    ],
  },
  {
    slug: "a1-sound-intonation",
    level: "IT-A1",
    number: 6,
    title: "Sounds: Questions and Statements",
    summary: "Turn a statement into a yes / no question with your voice alone, and stress the days of the week correctly.",
    duration: "14 min",
    sections: [
      {
        heading: "Same words, different tune",
        body: [
          "Italian yes / no questions usually keep the statement's word order: \"Parli italiano.\" (you speak Italian) and \"Parli italiano?\" (do you speak Italian?) are the same words. Only the melody changes: a statement falls at the end, a question rises on the last stressed syllable.",
          "So when you listen, follow the voice, and when you speak, lift it clearly: \"Ti alzi presto?\" vs \"Ti alzi presto.\" (you get up early).",
        ],
        examples: [
          { es: "Parli italiano.", en: "You speak Italian." },
          { es: "Parli italiano?", en: "Do you speak Italian?" },
          { es: "Ti alzi presto?", en: "Do you get up early?" },
          { es: "Marco lavora oggi?", en: "Is Marco working today?" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Ti alzi presto?", question: "Is it a question or a statement?", options: ["a question: do you get up early?", "a statement: you get up early.", "an order: get up early!", "a negative: you don't get up early."], correctIndex: 0, explanation: "The voice rises at the end." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Is Marco working today?", answer: "Marco lavora oggi?", altAnswers: ["Lavora oggi Marco?", "Oggi Marco lavora?"], explanation: "Same order as the statement; the voice does the work." },
        ],
      },
      {
        heading: "Stress in the days",
        body: [
          "\"Lunedì, martedì, mercoledì, giovedì, venerdì\" are stressed on the last syllable, which is why they carry an accent. \"Sabato\" is stressed on the first (SA-ba-to) and \"domenica\" on the second (do-ME-ni-ca), with no written accent.",
        ],
        examples: [
          { es: "Ci vediamo venerdì?", en: "See you on Friday?" },
          { es: "Sabato lavori?", en: "Are you working on Saturday?" },
          { es: "La domenica dormo.", en: "On Sundays I sleep." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "How is \"sabato\" stressed?", options: ["SA-ba-to", "sa-BA-to", "sa-ba-TO", "all syllables equally"], correctIndex: 0, explanation: "First syllable: SA-ba-to." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you working on Saturday? (to a friend)", answer: "Sabato lavori?", altAnswers: ["Lavori sabato?", "Tu lavori sabato?"], explanation: "A question by intonation." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you speak Italian? (to a friend)", answer: "Parli italiano?", altAnswers: ["Tu parli italiano?", "Parli l'italiano?"], explanation: "Rising voice, same words." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You speak Italian. (to a friend)", answer: "Parli italiano.", altAnswers: ["Tu parli italiano.", "Parli l'italiano."], explanation: "Falling voice." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you on Friday?", answer: "Ci vediamo venerdì?", explanation: "ve-ner-DÌ." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are the children asleep?", answer: "I bambini dormono?", altAnswers: ["Dormono i bambini?"], explanation: "A yes / no question by intonation." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you having fun? (plural)", answer: "Vi divertite?", altAnswers: ["Voi vi divertite?"], explanation: "Rise on -TI-." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sundays [I sleep].", sentence: "La domenica ___.", answer: "dormo", altAnswers: ["io dormo"], explanation: "do-ME-ni-ca, DOR-mo." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Do you get up early] on Wednesdays? (to a friend)", sentence: "___ il mercoledì?", answer: "Ti alzi presto", explanation: "Same words as the statement." },
      { type: "word-order", prompt: "Put the words in order to say: Is Giulia coming on Thursday?", words: ["Giulia", "viene", "giovedì?"], translation: "Is Giulia coming on Thursday?", altOrders: [["Viene", "Giulia", "giovedì?"]], explanation: "Intonation makes the question." },
      { type: "listen-choose", audio: "Lavori domani.", question: "Is it a question or a statement?", options: ["a statement: you're working tomorrow.", "a question: are you working tomorrow?", "an order: work tomorrow!", "a negative: you're not working tomorrow."], correctIndex: 0, explanation: "The voice falls." },
      { type: "listen-choose", audio: "Ti piace il mare?", question: "What did you hear?", options: ["a question about liking the sea", "a statement that you like the sea", "a statement that I like the sea", "a question about the mountains"], correctIndex: 0, explanation: "Rising melody." },
      { type: "dictation", audio: "Esci stasera? Sì, esco con Luca.", explanation: "Question, then statement." },
      {
        type: "speak",
        text: "Parli italiano. Parli italiano? Lavori sabato. Lavori sabato?",
        prompt: "Say each pair as a statement, then as a question.",
        tip: "Fall for the statement, rise for the question.",
        explanation: "Intonation alone makes the question.",
      },
    ],
  },
  {
    slug: "a1-contrast-lunedi-il-lunedi",
    level: "IT-A1",
    number: 7,
    title: "Contrast Clinic: Lunedì or Il Lunedì?",
    summary: "See pairs side by side: lunedì / il lunedì, stamattina / la mattina, stasera / di sera.",
    duration: "14 min",
    sections: [
      {
        heading: "One day or every week",
        body: [
          "\"Lunedì vado dal medico\": one Monday, the coming one. \"Il lunedì vado in palestra\": every Monday. The same with every day: \"Sabato lavoro\" (this Saturday) vs \"Il sabato lavoro\" (I work Saturdays). English often adds an s for the habit; Italian adds the article.",
        ],
        examples: [
          { es: "Lunedì vado dal medico.", en: "On Monday I'm going to the doctor's." },
          { es: "Il lunedì vado in palestra.", en: "On Mondays I go to the gym." },
          { es: "Sabato lavoro.", en: "I'm working this Saturday." },
          { es: "Il sabato lavoro.", en: "I work on Saturdays." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I work on Saturdays.", answer: "Il sabato lavoro.", altAnswers: ["Lavoro il sabato."], explanation: "Habit: \"il sabato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm working this Saturday.", answer: "Sabato lavoro.", altAnswers: ["Lavoro sabato.", "Questo sabato lavoro."], explanation: "One Saturday: no article." },
        ],
      },
      {
        heading: "This morning or in the mornings",
        body: [
          "Parts of the day follow the same idea. Today's: \"stamattina\" (this morning), \"stasera\" (this evening). Every day's: \"la mattina\" (in the mornings), \"il pomeriggio\" (in the afternoons), \"la sera\" or \"di sera\" (in the evenings), \"la notte\" or \"di notte\" (at night).",
        ],
        examples: [
          { es: "Stamattina prendo l'autobus.", en: "This morning I'm taking the bus." },
          { es: "La mattina prendo la metro.", en: "In the mornings I take the underground." },
          { es: "Stasera esco.", en: "I'm going out this evening." },
          { es: "Di sera leggo.", en: "In the evenings I read." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the evenings I read.", answer: "Di sera leggo.", altAnswers: ["La sera leggo.", "Leggo la sera.", "Leggo di sera."], explanation: "Habit: \"la sera\" / \"di sera\"." },
          { type: "listen-choose", audio: "Stamattina prendo l'autobus.", question: "When does the speaker take the bus?", options: ["this morning", "every morning", "this evening", "every evening"], correctIndex: 0, explanation: "\"Stamattina\" = this morning." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Mondays I go to the gym.", answer: "Il lunedì vado in palestra.", altAnswers: ["Vado in palestra il lunedì."], explanation: "Habit." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Monday I'm going to the doctor's.", answer: "Lunedì vado dal medico.", altAnswers: ["Vado dal medico lunedì.", "Lunedì vado dal dottore."], explanation: "One Monday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the mornings I take the underground.", answer: "La mattina prendo la metro.", altAnswers: ["Di mattina prendo la metro.", "La mattina prendo la metropolitana."], explanation: "Habit: \"la mattina\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm going out this evening.", answer: "Stasera esco.", altAnswers: ["Esco stasera."], explanation: "Today: \"stasera\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays the shops are closed.", answer: "La domenica i negozi sono chiusi.", explanation: "\"La domenica\" = every Sunday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This Sunday the shop is open.", answer: "Domenica il negozio è aperto.", altAnswers: ["Questa domenica il negozio è aperto."], explanation: "One Sunday." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the afternoons] I work from home.", sentence: "___ lavoro da casa.", answer: "Il pomeriggio", altAnswers: ["Di pomeriggio"], explanation: "Habit." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[This morning] I'm not well.", sentence: "___ non sto bene.", answer: "Stamattina", explanation: "Today." },
      { type: "word-order", prompt: "Put the words in order to say: On Fridays I go out, but this Friday I'm staying in.", words: ["Il", "venerdì", "esco,", "ma", "questo", "venerdì", "sto", "a", "casa."], translation: "On Fridays I go out, but this Friday I'm staying in.", explanation: "Habit with the article, one-off without." },
      { type: "multiple-choice", question: "\"Martedì vado a Roma.\" What does it mean?", options: ["I'm going to Rome on Tuesday.", "I go to Rome every Tuesday.", "I went to Rome on Tuesday.", "I'm in Rome on Tuesdays."], correctIndex: 0, explanation: "No article: one Tuesday." },
      { type: "dictation", audio: "Il giovedì gioco a tennis, ma giovedì no.", explanation: "Habit vs one Thursday." },
      {
        type: "speak",
        text: "La sera di solito leggo, ma stasera esco con Chiara.",
        prompt: "Say it in Italian: In the evenings I usually read, but this evening I'm going out with Chiara.",
        tip: "Stress the contrast: la SE-ra / sta-SE-ra.",
        explanation: "\"La sera\" vs \"stasera\".",
      },
    ],
  },
  {
    slug: "a1-dialogue-lab-flatmates",
    level: "IT-A1",
    number: 8,
    title: "Dialogue Lab: Flatmates' Schedules",
    summary: "Two flatmates in Milano agree who uses the bathroom when: a che ora ti alzi?, mi faccio la doccia alle sette.",
    duration: "14 min",
    sections: [
      {
        heading: "The bathroom problem",
        body: [
          "Luca and Sofia share a flat in Milano and one bathroom. Sofia: \"A che ora ti alzi la mattina?\" Luca: \"Di solito mi alzo alle sei e mezza e mi faccio la doccia alle sette.\" Sofia: \"Anch'io! È un problema.\"",
        ],
        examples: [
          { es: "A che ora ti alzi la mattina?", en: "What time do you get up in the morning?" },
          { es: "Di solito mi alzo alle sei e mezza.", en: "I usually get up at half past six." },
          { es: "Mi faccio la doccia alle sette.", en: "I have a shower at seven." },
          { es: "Anch'io! È un problema.", en: "Me too! That's a problem." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What time do you get up in the morning? (to a friend)", answer: "A che ora ti alzi la mattina?", altAnswers: ["La mattina a che ora ti alzi?"], explanation: "\"Ti alzi\" + \"la mattina\"." },
          { type: "listen-choose", audio: "Di solito mi alzo alle sei e mezza.", question: "When does Luca usually get up?", options: ["6:30", "6:15", "7:30", "7:00"], correctIndex: 0, explanation: "\"Le sei e mezza\" = 6:30." },
        ],
      },
      {
        heading: "The deal",
        body: [
          "They find a solution. Sofia: \"Io esco alle otto, tu?\" Luca: \"Io alle otto e mezza. Allora tu ti fai la doccia alle sette, io alle sette e mezza.\" Sofia: \"Perfetto. E il sabato? Il sabato non ci alziamo mai presto!\" Luca: \"Esatto. Ci vediamo stasera!\"",
        ],
        examples: [
          { es: "Io esco alle otto, tu?", en: "I leave at eight, what about you?" },
          { es: "Tu ti fai la doccia alle sette, io alle sette e mezza.", en: "You have your shower at seven, me at half past." },
          { es: "Il sabato non ci alziamo mai presto!", en: "On Saturdays we never get up early!" },
          { es: "Ci vediamo stasera!", en: "See you this evening!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Saturdays we never get up early!", answer: "Il sabato non ci alziamo mai presto!", altAnswers: ["Il sabato non ci alziamo mai di buon'ora!"], explanation: "\"Non ci\" + verb + \"mai\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You have your shower] at seven.", sentence: "Tu ___ alle sette.", answer: "ti fai la doccia", altAnswers: ["fai la doccia"], explanation: "\"Farsi la doccia\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I usually get up at half past six.", answer: "Di solito mi alzo alle sei e mezza.", altAnswers: ["Di solito mi alzo alle sei e mezzo.", "Mi alzo di solito alle sei e mezza."], explanation: "\"Di solito\" + reflexive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a shower at seven.", answer: "Mi faccio la doccia alle sette.", altAnswers: ["Faccio la doccia alle sette."], explanation: "\"Farsi la doccia\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I leave at eight, what about you? (to a friend)", answer: "Io esco alle otto, tu?", altAnswers: ["Esco alle otto, e tu?", "Io esco alle otto, e tu?"], explanation: "\"Esco\" = I leave the house." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you this evening!", answer: "Ci vediamo stasera!", altAnswers: ["A stasera!"], explanation: "\"Ci vediamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Me too! That's a problem.", answer: "Anch'io! È un problema.", altAnswers: ["Anche io! È un problema."], explanation: "Ordinary verb: \"anch'io\"; \"il problema\" is masculine." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[What time do you go to bed]? (to a friend)", sentence: "___?", answer: "A che ora vai a letto", altAnswers: ["A che ora vai a dormire"], explanation: "\"Andare a letto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "On Sundays [we rest].", sentence: "La domenica ___.", answer: "ci riposiamo", explanation: "\"Ci\" + noi." },
      { type: "word-order", prompt: "Put the words in order to say: You have your shower first, then me.", words: ["Tu", "ti", "fai", "la", "doccia", "prima,", "poi", "io."], translation: "You have your shower first, then me.", explanation: "\"Prima\" = first, \"poi\" = then." },
      { type: "multiple-choice", question: "Sofia asks \"A che ora ti alzi?\". Which answer fits?", options: ["Mi alzo alle sei e mezza.", "Ti alzi alle sei e mezza.", "Si alza alle sei e mezza.", "Alzo alle sei e mezza."], correctIndex: 0, explanation: "Answer about yourself: \"mi alzo\"." },
      { type: "multiple-choice", question: "What do Luca and Sofia never do on Saturdays?", options: ["get up early", "have a shower", "go out", "sleep"], correctIndex: 0, explanation: "\"Non ci alziamo mai presto\"." },
      { type: "dictation", audio: "Mi faccio la doccia e poi esco.", explanation: "\"Mi faccio\", \"esco\"." },
      {
        type: "speak",
        text: "Di solito mi alzo alle sette e mi faccio la doccia alle sette e un quarto. E tu?",
        prompt: "Tell your flatmate: I usually get up at seven and have a shower at quarter past seven. And you?",
        tip: "Rise on \"E tu?\".",
        explanation: "Routine + question back.",
      },
    ],
  },
  {
    slug: "a1-transform-routine",
    level: "IT-A1",
    number: 9,
    title: "Transformations: Your Routine, Their Routine",
    summary: "Turn a first-person routine into a description of someone else and of a couple: mi alzo → si alza → si alzano.",
    duration: "14 min",
    sections: [
      {
        heading: "Io → lui / lei",
        body: [
          "To describe someone else, change both the pronoun and the ending: \"mi alzo\" → \"si alza\", \"mi vesto\" → \"si veste\". Non-reflexive verbs change only the ending: \"faccio colazione\" → \"fa colazione\", \"esco\" → \"esce\".",
        ],
        examples: [
          { es: "Mi sveglio alle sette. → Si sveglia alle sette.", en: "I wake up at seven. → She wakes up at seven." },
          { es: "Mi vesto. → Si veste.", en: "I get dressed. → He gets dressed." },
          { es: "Faccio colazione. → Fa colazione.", en: "I have breakfast. → She has breakfast." },
          { es: "Esco alle otto. → Esce alle otto.", en: "I leave at eight. → He leaves at eight." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Mi sveglio alle sette\" to Giulia and write: Giulia wakes up at seven.", source: "Giulia wakes up at seven.", answer: "Giulia si sveglia alle sette.", explanation: "\"Mi\" → \"si\", \"-o\" → \"-a\"." },
          { type: "translate", direction: "en-es", prompt: "Change \"Esco alle otto\" to he and write: He leaves at eight.", source: "He leaves at eight.", answer: "Esce alle otto.", altAnswers: ["Lui esce alle otto.", "Esce di casa alle otto."], explanation: "\"Esco\" → \"esce\"." },
        ],
      },
      {
        heading: "→ loro",
        body: [
          "For a couple, the pronoun stays \"si\" and the ending becomes loro: \"si alza\" → \"si alzano\", \"si veste\" → \"si vestono\". Check irregular verbs: \"esce\" → \"escono\", \"fa\" → \"fanno\", \"va\" → \"vanno\".",
        ],
        examples: [
          { es: "Si alza alle sei. → Si alzano alle sei.", en: "He gets up at six. → They get up at six." },
          { es: "Si veste. → Si vestono.", en: "She gets dressed. → They get dressed." },
          { es: "Va al lavoro in bici. → Vanno al lavoro in bici.", en: "He cycles to work. → They cycle to work." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"Si alza alle sei\" to they and write: They get up at six.", source: "They get up at six.", answer: "Si alzano alle sei.", altAnswers: ["Loro si alzano alle sei."], explanation: "\"Si\" stays, the ending changes." },
          { type: "listen-choose", audio: "Si vestono in fretta.", question: "Who gets dressed in a hurry?", options: ["they", "he", "she", "we"], correctIndex: 0, explanation: "\"-ono\" = they." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Change \"Mi vesto\" to Marco and write: Marco gets dressed.", source: "Marco gets dressed.", answer: "Marco si veste.", explanation: "\"Si veste\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Faccio colazione al bar\" to she and write: She has breakfast at the bar.", source: "She has breakfast at the bar.", answer: "Fa colazione al bar.", altAnswers: ["Lei fa colazione al bar."], explanation: "\"Faccio\" → \"fa\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Mi addormento alle undici\" to they and write: They fall asleep at eleven.", source: "They fall asleep at eleven.", answer: "Si addormentano alle undici.", altAnswers: ["Loro si addormentano alle undici."], explanation: "\"Si\" + loro." },
      { type: "translate", direction: "en-es", prompt: "Change \"Vado al lavoro in bici\" to they and write: They cycle to work.", source: "They cycle to work.", answer: "Vanno al lavoro in bici.", altAnswers: ["Vanno a lavorare in bici.", "Loro vanno al lavoro in bici."], explanation: "\"Vado\" → \"vanno\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Non mi riposo mai\" to he and write: He never rests.", source: "He never rests.", answer: "Non si riposa mai.", altAnswers: ["Lui non si riposa mai."], explanation: "\"Non\" + \"si\" + verb + \"mai\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"Mi diverto\" to we and write: We have fun.", source: "We have fun.", answer: "Ci divertiamo.", altAnswers: ["Noi ci divertiamo."], explanation: "\"Mi\" → \"ci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Anna and Paolo [get up] at seven.", sentence: "Anna e Paolo ___ alle sette.", answer: "si alzano", explanation: "Loro." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "My sister [goes out] at nine.", sentence: "Mia sorella ___ alle nove.", answer: "esce", explanation: "\"Uscire\": \"esce\"." },
      { type: "word-order", prompt: "Put the words in order to say: They get up, get dressed and leave.", words: ["Si", "alzano,", "si", "vestono", "ed", "escono."], translation: "They get up, get dressed and leave.", explanation: "Three loro forms; \"ed\" before a vowel." },
      { type: "multiple-choice", question: "\"Mi faccio la doccia.\" → loro?", options: ["Si fanno la doccia.", "Si fa la doccia.", "Ci facciamo la doccia.", "Si faccio la doccia."], correctIndex: 0, explanation: "\"Si\" + \"fanno\"." },
      { type: "dictation", audio: "Si svegliano alle sei e si alzano subito.", explanation: "Two loro reflexives." },
      {
        type: "speak",
        text: "Giulia si sveglia alle sette, si fa la doccia e va al lavoro.",
        prompt: "Describe Giulia's morning: Giulia wakes up at seven, has a shower and goes to work.",
        tip: "\"Si\" before each reflexive verb, not before \"va\".",
        explanation: "Lei forms: reflexive and not.",
      },
    ],
  },
  {
    slug: "a1-mission-a-day-in-my-life",
    level: "IT-A1",
    number: 10,
    title: "Real-World Mission: A Day in My Life",
    summary: "Write and say a short description of your weekday and your Sunday.",
    duration: "15 min",
    kind: "review",
    sections: [
      {
        heading: "A weekday",
        body: [
          "Your mission: your Italian teacher asks the class to describe a weekday and a Sunday. Go in order, with times and linking words: \"prima\" (first), \"poi\" (then), \"dopo\" (afterwards), \"alla fine\" (in the end). \"Durante la settimana mi sveglio alle sette. Prima mi faccio la doccia, poi faccio colazione.\"",
        ],
        examples: [
          { es: "Durante la settimana mi sveglio alle sette.", en: "During the week I wake up at seven." },
          { es: "Prima mi faccio la doccia, poi faccio colazione.", en: "First I have a shower, then I have breakfast." },
          { es: "Esco di casa alle otto e prendo il tram.", en: "I leave home at eight and take the tram." },
          { es: "Dopo il lavoro vado in palestra.", en: "After work I go to the gym." },
          { es: "Alla fine mi addormento davanti alla TV.", en: "In the end I fall asleep in front of the TV." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "First I have a shower, then I have breakfast.", answer: "Prima mi faccio la doccia, poi faccio colazione.", altAnswers: ["Prima faccio la doccia, poi faccio colazione."], explanation: "\"Prima\" ... \"poi\"." },
          { type: "listen-choose", audio: "Dopo il lavoro vado in palestra.", question: "When does the speaker go to the gym?", options: ["after work", "before work", "at lunchtime", "on Sundays"], correctIndex: 0, explanation: "\"Dopo il lavoro\" = after work." },
        ],
      },
      {
        heading: "Sunday",
        body: [
          "Sunday is different: \"La domenica non mi alzo mai prima delle dieci\" (before ten). \"Pranzo con la famiglia\", \"Il pomeriggio mi riposo o faccio una passeggiata\". Use frequency words to sound natural.",
        ],
        examples: [
          { es: "La domenica non mi alzo mai prima delle dieci.", en: "On Sundays I never get up before ten." },
          { es: "Pranzo con la mia famiglia.", en: "I have lunch with my family." },
          { es: "Il pomeriggio mi riposo.", en: "In the afternoon I rest." },
          { es: "Qualche volta faccio una passeggiata.", en: "Sometimes I go for a walk." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Sundays I never get up before ten.", answer: "La domenica non mi alzo mai prima delle dieci.", explanation: "\"Non ... mai\"; \"prima delle\" = before." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "In the afternoon [I rest].", sentence: "Il pomeriggio ___.", answer: "mi riposo", altAnswers: ["io mi riposo"], explanation: "\"Riposarsi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "During the week I wake up at seven.", answer: "Durante la settimana mi sveglio alle sette.", altAnswers: ["Durante la settimana mi alzo alle sette."], explanation: "\"Mi sveglio\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I leave home at eight and take the tram.", answer: "Esco di casa alle otto e prendo il tram.", altAnswers: ["Esco da casa alle otto e prendo il tram."], explanation: "\"Uscire di casa\"; \"prendere\" for transport." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "After work I go to the gym.", answer: "Dopo il lavoro vado in palestra.", altAnswers: ["Vado in palestra dopo il lavoro."], explanation: "\"In palestra\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have lunch with my family.", answer: "Pranzo con la mia famiglia.", altAnswers: ["Pranzo con la famiglia."], explanation: "\"Pranzare\" = to have lunch." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the evening I cook and then I watch a film.", answer: "La sera cucino e poi guardo un film.", altAnswers: ["Di sera cucino e poi guardo un film."], explanation: "\"La sera\" for habit; \"poi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I go to bed at eleven.", answer: "Vado a letto alle undici.", altAnswers: ["Vado a dormire alle undici."], explanation: "\"Andare a letto\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Sometimes] I go for a walk.", sentence: "___ faccio una passeggiata.", answer: "Qualche volta", altAnswers: ["A volte"], explanation: "Frequency word first." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[In the end] I fall asleep in front of the TV.", sentence: "___ mi addormento davanti alla TV.", answer: "Alla fine", explanation: "\"Alla fine\" = in the end." },
      { type: "word-order", prompt: "Put the words in order to say: On Sundays I get up late and rest.", words: ["La", "domenica", "mi", "alzo", "tardi", "e", "mi", "riposo."], translation: "On Sundays I get up late and rest.", explanation: "Habit + two reflexives." },
      { type: "multiple-choice", question: "Which word means then, next?", options: ["poi", "prima", "mai", "sempre"], correctIndex: 0, explanation: "\"Poi\" = then." },
      { type: "dictation", audio: "Prima mi lavo, poi mi vesto.", explanation: "\"Prima\" ... \"poi\"." },
      {
        type: "speak",
        text: "Durante la settimana mi sveglio alle sette, faccio colazione ed esco alle otto. La domenica invece mi alzo tardi e mi riposo.",
        prompt: "Describe your week: During the week I wake up at seven, have breakfast and leave at eight. On Sundays, though, I get up late and rest.",
        tip: "\"Invece\" marks the contrast: in-VE-ce.",
        explanation: "Weekday vs Sunday.",
      },
    ],
  },
];

export const IT_A1_U11_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your Italian teacher asks you to describe a typical weekday and a typical Sunday. Write two short paragraphs: what time you wake up and get up, what you do in the morning, afternoon and evening, and how Sunday is different. Use at least three reflexive verbs and two frequency words.",
  minWords: 40,
  maxWords: 100,
  rubric: [
    "Uses reflexive verbs with the right pronoun before the verb (mi sveglio, mi alzo, mi faccio la doccia, mi riposo)",
    "Puts non before the pronoun and uses non ... mai correctly",
    "Uses frequency words (sempre, di solito, spesso, qualche volta) in natural positions",
    "Uses days and parts of the day correctly: il lunedì / la domenica for habits, la mattina / la sera, no capitals",
  ],
  modelAnswer: "Durante la settimana mi sveglio alle sette meno un quarto. Mi alzo subito, mi faccio la doccia e faccio colazione. Esco di casa alle otto e prendo la metro. Di solito pranzo in ufficio. La sera cucino e alle undici vado a letto. La domenica invece non mi alzo mai prima delle dieci. Spesso pranzo dai miei genitori e il pomeriggio mi riposo o faccio una passeggiata.",
  explanation: "\"Mi sveglio\", \"mi alzo\", \"mi faccio la doccia\" and \"mi riposo\" are reflexive, with the pronoun before the verb. \"Non mi alzo mai\" wraps the verb. \"La domenica\" means every Sunday, and \"dai miei genitori\" means at my parents' place.",
};
