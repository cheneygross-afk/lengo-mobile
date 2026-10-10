// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u11-extra.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Extra practice (optional) lessons for EN-C2 unit u11 (listening and reading strategies).
// Drill-focused: a short recap, then lots of exercises.

export const EN_C2_U11_EXTRA: Lesson[] = [
  // ---------------------------------------------------------------------
  // Extra 1. Hearing weak forms and linking
  // ---------------------------------------------------------------------
  {
    slug: "en-c2-weak-forms-drill-1",
    optional: true,
    level: "EN-C2",
    number: 1,
    title: "Extra Practice: Hearing Weak Forms and Linking",
    summary: "A listening drill on what happens to the small words in fast speech: weak forms of \"of\", \"to\", \"can\", \"was\", \"have\" and \"them\", linking, elision and assimilation, and the chunks written informally as \"wanna\", \"gonna\", \"didja\" and \"lemme\".",
    duration: "12 min",
    sections: [
      {
        heading: "Quick recap: the small words shrink",
        body: [
          "Spanish gives every syllable roughly the same length, so Spanish speakers listen for full vowels in every word. English is stress-timed: content words (nouns, main verbs, adjectives) are stressed, and the function words between them shrink to a schwa /ə/ or almost nothing.",
          "The most frequent weak forms: \"of\" /əv/ or /ə/, \"to\" /tə/, \"for\" /fə/, \"can\" /kən/, \"was\" /wəz/, \"were\" /wə/, \"have\" /əv/, \"them\" /ðəm/ or /əm/, \"and\" /ən/ or /n/, \"at\" /ət/. In \"a cup of tea\" you hear /ə ˈkʌp ə ˈtiː/: the \"of\" is just a schwa.",
          "A useful trick: \"can\" is weak /kən/ in positive sentences, while \"can't\" keeps its full vowel /kɑːnt/ (UK) or /kænt/ (US). So if you hear a clear, long vowel, it is probably negative, even when the final t is barely audible.",
        ],
        examples: [
          { es: "I was waiting for them at the station.", en: "Los estaba esperando en la estación. (/aɪ wəz ˈweɪtɪŋ fər əm ət ðə ˈsteɪʃn/)" },
          { es: "She can swim, but she can't dive.", en: "Sabe nadar, pero no sabe tirarse de cabeza." },
          { es: "We should have left earlier.", en: "Deberíamos habernos ido antes. (\"should have\" suena /ˈʃʊdəv/)" },
          { es: "A cup of tea and a slice of cake, please.", en: "Un té y un pedazo de pastel, por favor." },
          { es: "Tell them to wait.", en: "Diles que esperen. (\"tell them\" suena /ˈtel əm/)" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "I can come on Friday, but I can't stay late.",
            question: "What does the speaker say?",
            options: [
              "She can come on Friday but must leave early.",
              "She can't come on Friday at all.",
              "She can come on Friday and stay late.",
              "She can't come on Friday but can stay late another day.",
            ],
            correctIndex: 0,
            explanation: "The first \"can\" is weak /kən/; \"can't\" has a full vowel and stress. Listen for the vowel, not for the t.",
          },
          {
            type: "fill-blank",
            prompt: "Write the bold words in English.",
            sentence: "I ___ come, but I was ill.",
            answer: "could have",
            altAnswers: ["might have"],
            en: "[Podría haber] venido, pero estaba enfermo.",
            explanation: "In speech \"could have\" is /ˈkʊdəv/ or even /ˈkʊdə/, which is why native speakers sometimes write *could of. In writing, always \"could have\" or \"could've\".",
          },
        ],
      },
      {
        heading: "Linking, elision and assimilation",
        body: [
          "Linking: a final consonant joins the next vowel, so \"an apple\" sounds like \"a napple\" and \"turn it off\" like \"tur ni toff\". Between vowels English inserts a small /j/, /w/ or (in British English) /r/: \"go on\" /ɡəʊ wɒn/, \"far away\" /fɑːr əˈweɪ/.",
          "Elision: /t/ and /d/ between consonants often disappear: \"next door\" /neks dɔː/, \"last night\" /lɑːs naɪt/, \"old man\" /əʊl mæn/. Assimilation: sounds change to suit their neighbors: \"ten past\" /tem pɑːst/, \"would you\" /ˈwʊdʒu/, \"don't you\" /ˈdəʊntʃu/, \"did you\" /ˈdɪdʒə/.",
          "The informal spellings \"gonna\" (going to), \"wanna\" (want to), \"gotta\" (got to), \"lemme\" (let me) and \"dunno\" (don't know) show these processes. Recognize them in speech and song lyrics, but do not write them in formal texts.",
        ],
        examples: [
          { es: "Turn it off, please.", en: "Apágalo, por favor. (suena /ˈtɜː nɪ ˈtɒf/)" },
          { es: "Did you see the game last night?", en: "¿Viste el partido anoche? (\"did you\" suena /ˈdɪdʒə/)" },
          { es: "Let me think about it.", en: "Déjame pensarlo. (suena \"lemme\")" },
          { es: "I'm going to call her later.", en: "La voy a llamar más tarde. (suena \"gonna\")" },
          { es: "Would you mind waiting a moment?", en: "¿Te importaría esperar un momento? (\"would you\" suena /ˈwʊdʒu/)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In fast speech you hear /ˈdɪdʒə ˈfɪnɪʃ/ at the start of a question. What are the words?",
            options: ["Did you finish", "Do you finish", "Would you finish", "Did your finish"],
            correctIndex: 0,
            explanation: "/d/ + /j/ merge into /dʒ/ (assimilation): \"did you\" becomes /ˈdɪdʒə/. \"Would you\" gives /ˈwʊdʒu/, with a different first vowel.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "dictation",
        audio: "I was going to ask them for a lift.",
        explanation: "Weak forms: \"was\" /wəz/, \"to\" /tə/, \"them\" /ðəm/, \"for\" /fə/, \"a\" /ə/. Only \"going\", \"ask\" and \"lift\" carry stress.",
      },
      {
        type: "listen-choose",
        audio: "Tell them to wait for us at the station.",
        question: "How many words are in the sentence?",
        options: ["9", "7", "8", "10"],
        correctIndex: 0,
        explanation: "\"Tell them to wait for us at the station\": nine words, but you only clearly hear \"tell\", \"wait\" and \"station\". \"Them\", \"to\", \"for\", \"us\", \"at\" and \"the\" are all weak.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Deberías habérselo dicho.",
        answer: "You should have told him.",
        altAnswers: ["You should have told her.", "You should have told them.", "You ought to have told him.", "You ought to have told her.", "You ought to have told them."],
        explanation: "In speech \"should have told him\" is /ˈʃʊdəv ˈtəʊld ɪm/: \"have\" and \"him\" lose their h. Never write *should of.",
      },
      {
        type: "listen-choose",
        audio: "You should have seen his face.",
        question: "What did you hear?",
        options: [
          "You should have seen his face.",
          "You shouldn't have seen his face.",
          "You should see his face.",
          "You showed us his face.",
        ],
        correctIndex: 0,
        explanation: "\"Should have\" /ˈʃʊdəv/ is easy to miss. A negative would have a clear /nt/ and stress on \"shouldn't\".",
      },
      {
        type: "dictation",
        audio: "What do you want to do this weekend?",
        explanation: "In casual speech this sounds like /ˈwɒdʒə ˈwɒnə du/: \"what do you\" merges, and \"want to\" becomes \"wanna\".",
      },
      {
        type: "multiple-choice",
        question: "A friend says /ˈlemi ˈsiː/. What did she say?",
        options: ["Let me see.", "Lend me some.", "Lemon tea.", "Let's meet."],
        correctIndex: 0,
        explanation: "\"Let me\" loses its t and joins the next word: \"lemme\". It is only a spoken form; write \"let me\".",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "¿Qué vas a hacer esta noche?",
        answer: "What are you going to do tonight?",
        altAnswers: ["What are you doing tonight?", "What are you going to do this evening?", "What are you doing this evening?", "What will you do tonight?"],
        explanation: "In speech you will hear something like /ˈwɒtʃə ˈɡʌnə du təˈnaɪt/: \"what are you\" shrinks to \"whatcha\" and \"going to\" to \"gonna\".",
      },
      {
        type: "dictation",
        audio: "Let me know if you need a hand with them.",
        explanation: "\"Let me\" sounds like \"lemme\", \"need a\" links (/ˈniːdə/) and \"them\" is weak /ðəm/.",
      },
      {
        type: "listen-choose",
        audio: "Where were you at the time?",
        question: "What is the speaker asking?",
        options: [
          "Where you were when it happened.",
          "Where you are now.",
          "What time you will arrive.",
          "Where you will be later.",
        ],
        correctIndex: 0,
        explanation: "\"Were\" is weak /wə/, so \"where were you\" sounds like /weə wə ju/. The past form tells you the question is about a moment in the past.",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "¿Quieres venir con nosotros?",
        answer: "Do you want to come with us?",
        altAnswers: ["Would you like to come with us?", "Do you want to come along with us?", "Do you want to come along?", "Would you like to come along?", "Would you like to join us?", "Do you want to join us?"],
        explanation: "Fast speech: /dʒə ˈwɒnə ˈkʌm wɪð əs/. \"Do you\" can shrink to /dʒə/, \"want to\" to \"wanna\", and \"us\" is weak /əs/.",
      },
      {
        type: "matching",
        instructions: "Match each informal spoken form with the words it stands for.",
        pairs: [
          { left: "gonna", right: "going to" },
          { left: "wanna", right: "want to" },
          { left: "gotta", right: "got to" },
          { left: "dunno", right: "don't know" },
          { left: "lemme", right: "let me" },
          { left: "kinda", right: "kind of" },
        ],
        explanation: "These spellings reflect weak forms and assimilation. Use them to decode speech; in writing, use the full words.",
      },
      {
        type: "dictation",
        audio: "I'd have gone if I'd known you were there.",
        altAnswers: ["I would have gone if I had known you were there."],
        explanation: "Both \"'d\" and \"have\" almost vanish: /aɪd əv ˈɡɒn/. The weak \"were\" /wə/ at the end is also easy to miss.",
      },
      {
        type: "multiple-choice",
        question: "Which phrase has a sound that disappears (elision) in normal speech?",
        options: ["next door", "big apple", "go on", "see it"],
        correctIndex: 0,
        explanation: "In \"next door\" the /t/ between /ks/ and /d/ disappears: /neks dɔː/. The other phrases link (\"bi gapple\") or insert a glide (\"go won\", \"see yit\").",
      },
      {
        type: "translate",
        direction: "es-en",
        prompt: "Translate into English.",
        source: "Le pedí que esperara un momento.",
        answer: "I asked her to wait a moment.",
        altAnswers: ["I asked him to wait a moment.", "I asked her to wait for a moment.", "I asked him to wait for a moment.", "I asked her to wait a minute.", "I asked him to wait a minute.", "I asked her to wait a second.", "I asked him to wait a second.", "I asked them to wait a moment."],
        explanation: "Spoken: /aɪ ˈɑːskt ə tə ˈweɪt ə ˈməʊmənt/. \"Her\" loses its h and shrinks to /ə/, just like \"to\" and \"a\". Listening for \"asked\" and \"wait\" gives you the meaning.",
      },
      {
        type: "listen-choose",
        audio: "Would you mind if I opened the window?",
        question: "What is the speaker doing?",
        options: [
          "Asking for permission to open the window.",
          "Asking you to open the window.",
          "Complaining that the window is open.",
          "Asking whether the window opens.",
        ],
        correctIndex: 0,
        explanation: "\"Would you\" merges into /ˈwʊdʒu/, and the key information is in \"if I opened\": the speaker wants to open it.",
      },
      {
        type: "dictation",
        audio: "We're going to have to wait and see.",
        explanation: "/wɪə ˈɡʌnə ˈhæftə ˈweɪt n ˈsiː/: \"going to\" becomes \"gonna\", \"have to\" becomes /ˈhæftə/ and \"and\" shrinks to /n/.",
      },
      {
        type: "speak",
        text: "I was going to ask you, but you'd already gone.",
        tip: "Stress only \"going\", \"ask\", \"already\" and \"gone\". Let \"was\", \"to\" and \"you\" shrink: /aɪ wəz ˈɡəʊɪŋ tə ˈɑːsk ju/.",
        explanation: "Producing weak forms yourself is the best way to start hearing them.",
      },
    ],
  },
];
