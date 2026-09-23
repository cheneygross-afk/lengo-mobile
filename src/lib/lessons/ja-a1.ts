import type { Lesson } from "./types";

export const JA_A1_LESSONS: Lesson[] = [
  {
    "slug": "greetings-introductions-etiquette-1",
    "level": "JA-A1",
    "number": 1,
    "title": "Greetings, Introductions, and Basic Etiquette, Part 1 of 2",
    "summary": "The first words you'll actually use: greetings for every time of day, thanks and apologies, and how to introduce yourself in Japanese.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Greetings for every time of day",
        "body": [
          "Japanese greetings are tied to time of day, unlike English's all-purpose \"hi.\" おはようございます (ohayou gozaimasu) is used in the morning -- close friends and family often shorten it to just おはよう (ohayou). こんにちは (konnichiwa) covers the daytime, roughly late morning through early evening, and is the closest thing to an all-purpose greeting you'll use. こんばんは (konbanwa) takes over in the evening.",
          "Notice something about こんにちは and こんばんは: both end in は, the same character you learned as an irregular particle reading back in the Alphabets module -- pronounced \"wa,\" not \"ha,\" here too. That's not a coincidence: these greetings are historically shortened sentences, and the は you see is that same topic particle.",
          "さようなら (sayounara) means \"goodbye,\" but it's more formal and more final than English speakers often assume -- it can imply you won't see the person again for a while. For casual, everyday parting among people you'll see again soon, じゃあね (jaa ne) or またね (mata ne, \"see you again\") are far more natural. おやすみなさい (oyasumi nasai) is specifically \"good night,\" used when someone is going to sleep, not as a general evening farewell."
        ],
        "examples": [
          {
            "es": "おはようございます",
            "en": "ohayou gozaimasu -- good morning"
          },
          {
            "es": "こんにちは",
            "en": "konnichiwa -- hello / good afternoon"
          },
          {
            "es": "またね",
            "en": "mata ne -- see you again (casual)"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each greeting to when it's used.",
            "pairs": [
              {
                "left": "おはようございます",
                "right": "Morning"
              },
              {
                "left": "こんにちは",
                "right": "Daytime (the closest to an all-purpose greeting)"
              },
              {
                "left": "こんばんは",
                "right": "Evening"
              },
              {
                "left": "おやすみなさい",
                "right": "Said when someone is going to sleep"
              }
            ],
            "explanation": "Japanese greetings are tied to time of day, unlike English's all-purpose \"hi.\""
          },
          {
            "type": "multiple-choice",
            "question": "Why are こんにちは and こんばんは both spelled with は rather than わ, even though は is pronounced \"wa\" here?",
            "options": [
              "They're historically shortened sentences, and the は is the same topic particle you'll study as grammar",
              "It's simply a spelling exception with no explanation",
              "は and わ are interchangeable everywhere in Japanese",
              "こんにちは and こんばんは are actually written with わ, not は"
            ],
            "correctIndex": 0,
            "explanation": "These greetings are shortened sentences, and the は is the same topic particle (pronounced \"wa\") you'll formally study in a later lesson."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the casual, everyday way to say \"see you again\" to someone you'll see soon.",
            "sentence": "___ね (casual \"see you again\")",
            "answer": "また",
            "explanation": "またね (mata ne) is the casual, everyday farewell -- さようなら is more formal and final."
          }
        ]
      },
      {
        "heading": "Thanks and apologies",
        "body": [
          "ありがとうございます (arigatou gozaimasu) is \"thank you\" in its polite form -- casual speech shortens it to just ありがとう (arigatou) among friends. Both are extremely common and safe to use in almost any situation.",
          "すみません (sumimasen) is one of the most useful phrases in the entire language, because it does three jobs at once: a mild apology (\"sorry\"), \"excuse me\" to get someone's attention or squeeze past them, and even a way to say thank you when someone has gone out of their way for you (acknowledging the trouble they took).",
          "ごめんなさい (gomen nasai) is a more direct, personal apology than すみません -- reserved for situations where you're genuinely sorry about something specific, rather than the all-purpose social lubricant すみません provides. Among close friends, it's often shortened to just ごめん (gomen)."
        ],
        "examples": [
          {
            "es": "ありがとうございます",
            "en": "arigatou gozaimasu -- thank you"
          },
          {
            "es": "すみません",
            "en": "sumimasen -- excuse me / sorry / thanks for the trouble"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which phrase can mean \"excuse me,\" \"sorry,\" AND \"thanks for the trouble,\" depending on context?",
            "options": [
              "すみません",
              "ありがとうございます",
              "ごめんなさい",
              "さようなら"
            ],
            "correctIndex": 0,
            "explanation": "すみません is unusually versatile -- it covers a mild apology, getting someone's attention, and acknowledging an inconvenience someone took on for you."
          },
          {
            "type": "matching",
            "instructions": "Match each phrase to its typical use.",
            "pairs": [
              {
                "left": "ありがとうございます",
                "right": "Thank you (polite)"
              },
              {
                "left": "ありがとう",
                "right": "Thanks (casual, among friends)"
              },
              {
                "left": "ごめんなさい",
                "right": "A direct, personal apology"
              }
            ],
            "explanation": "ありがとうございます/ありがとう scale from polite to casual; ごめんなさい is a more direct apology than すみません."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the casual, shortened version of ごめんなさい used among close friends.",
            "sentence": "___ (casual apology, shortened from ごめんなさい)",
            "answer": "ごめん",
            "explanation": "ごめん (gomen) is the casual shortening of ごめんなさい, used among close friends."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which greeting is used specifically in the morning?",
        "options": [
          "おはようございます",
          "こんにちは",
          "こんばんは",
          "おやすみなさい"
        ],
        "correctIndex": 0,
        "explanation": "おはようございます (ohayou gozaimasu) is the morning greeting; こんにちは covers daytime, こんばんは covers evening, and おやすみなさい is specifically \"good night\" before sleep."
      },
      {
        "type": "multi-select",
        "question": "Which of these are true about はじめまして and よろしくおねがいします?",
        "options": [
          "はじめまして is said only at a first meeting",
          "よろしくおねがいします has no single natural English translation",
          "Both phrases are typically said together when introducing yourself",
          "よろしくおねがいします means \"goodbye\""
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "はじめまして and よろしくおねがいします form a fixed introduction pair -- the first for a first meeting, the second a set social phrase with no direct English equivalent."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the polite way to ask someone's name.",
        "sentence": "お___は？ (asking for someone's name politely)",
        "answer": "なまえ",
        "hint": "The お prefix attaches to this word for name.",
        "explanation": "おなまえは？(O-namae wa?) is the standard polite way to ask someone's name."
      }
    ]
  },
  {
    "slug": "greetings-introductions-etiquette-2",
    "level": "JA-A1",
    "number": 2,
    "title": "Greetings, Introductions, and Basic Etiquette, Part 2 of 2",
    "summary": "The first words you'll actually use: greetings for every time of day, thanks and apologies, and how to introduce yourself in Japanese.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Introducing yourself: はじめまして",
        "body": [
          "The standard self-introduction follows a fixed pattern you'll hear constantly: はじめまして。[name]です。よろしくおねがいします。(Hajimemashite. [Name] desu. Yoroshiku onegaishimasu.) はじめまして literally relates to \"for the first time\" and functions like \"nice to meet you,\" said only at a first meeting.",
          "です (desu) you'll study properly as grammar in the next lesson -- for now, treat [name]です as simply \"I am [name].\" よろしくおねがいします is famously difficult to translate directly; it's a set social phrase said after introducing yourself (or before asking a favor) that roughly means \"please treat me well\" or \"I look forward to working with you.\" There's no single natural English equivalent -- it's simply expected in this exact slot.",
          "Putting it together: はじめまして。田中です。よろしくおねがいします。(Hajimemashite. Tanaka desu. Yoroshiku onegaishimasu. -- \"Nice to meet you. I'm Tanaka. Please treat me well.\")"
        ],
        "examples": [
          {
            "es": "はじめまして。田中です。よろしくおねがいします。",
            "en": "Nice to meet you. I'm Tanaka. (set introduction phrase)"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange these words to form the standard self-introduction opening phrase (\"Nice to meet you\").",
            "words": [
              "はじめまして"
            ],
            "translation": "Nice to meet you (said only at a first meeting)",
            "explanation": "はじめまして opens a self-introduction and is said only when meeting someone for the first time."
          },
          {
            "type": "multiple-choice",
            "question": "What is the fixed three-part pattern for introducing yourself in Japanese?",
            "options": [
              "はじめまして。[name]です。よろしくおねがいします。",
              "こんにちは。[name]です。さようなら。",
              "すみません。[name]です。ありがとう。",
              "おはようございます。[name]です。またね。"
            ],
            "correctIndex": 0,
            "explanation": "はじめまして (nice to meet you) + [name]です (I'm [name]) + よろしくおねがいします (set closing phrase) is the standard introduction pattern."
          }
        ]
      },
      {
        "heading": "Asking and giving names",
        "body": [
          "To ask someone's name politely: おなまえは？(O-namae wa? -- \"[And] your name?\") The お is a politeness prefix attached to many nouns when referring to someone else's things or attributes; using it for your own name would sound oddly self-important, so you'd simply answer with [name]です.",
          "A fuller, more formal version: おなまえはなんですか？(O-namae wa nan desu ka? -- \"What is your name?\") なん (or なに) means \"what,\" and か at the end marks the sentence as a question -- you'll cover か properly as grammar in an upcoming lesson."
        ],
        "examples": [
          {
            "es": "おなまえは？",
            "en": "O-namae wa? -- And your name?"
          },
          {
            "es": "山田です。",
            "en": "Yamada desu. -- I'm Yamada."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the polite way to ask someone's name.",
            "sentence": "お___は？ (asking for someone's name politely)",
            "answer": "なまえ",
            "explanation": "おなまえは？(O-namae wa?) is the standard polite way to ask someone's name."
          },
          {
            "type": "multiple-choice",
            "question": "What does the お in おなまえ signal?",
            "options": [
              "A politeness prefix, used when referring to someone else's things or attributes",
              "That the word is a question",
              "That the word is in the past tense",
              "That the speaker is being rude"
            ],
            "correctIndex": 0,
            "explanation": "お is a respectful prefix used for someone else's belongings or attributes -- never for your own."
          }
        ]
      },
      {
        "heading": "Yes, no, and basic reactions",
        "body": [
          "はい (hai) is \"yes,\" and いいえ (iie) is \"no\" -- though in casual conversation, native speakers often soften a direct いいえ or avoid it entirely in favor of vaguer, more indirect responses, since bluntly disagreeing can feel abrupt in Japanese social norms.",
          "そうです (sou desu) means something like \"that's right\" or \"that's so\" -- an agreement phrase used constantly in conversation, often repeated (そうですね, sou desu ne, \"that's right, isn't it\") as a conversational filler while thinking or agreeing. ちがいます (chigaimasu) means \"that's wrong / different,\" a politer way to disagree than a flat いいえ."
        ],
        "examples": [
          {
            "es": "そうですね。",
            "en": "Sou desu ne. -- That's right, isn't it."
          },
          {
            "es": "ちがいます。",
            "en": "Chigaimasu. -- That's not right / that's different."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does そうです convey in conversation?",
            "options": [
              "Agreement (\"that's right\")",
              "A greeting",
              "An apology",
              "A question"
            ],
            "correctIndex": 0,
            "explanation": "そうです (sou desu) is an agreement phrase, often extended with ね (そうですね) as a conversational filler."
          },
          {
            "type": "matching",
            "instructions": "Match each word/phrase to its meaning.",
            "pairs": [
              {
                "left": "はい",
                "right": "Yes"
              },
              {
                "left": "いいえ",
                "right": "No"
              },
              {
                "left": "そうですね",
                "right": "That's right, isn't it (agreement/filler)"
              }
            ],
            "explanation": "はい/いいえ are direct yes/no, while そうですね softens agreement into a natural conversational filler."
          }
        ]
      },
      {
        "heading": "A note on bowing and register",
        "body": [
          "A slight bow of the head or shoulders often accompanies greetings, thanks, and introductions -- the depth and formality of the bow scales with the situation, but as a beginner, a small nod is a perfectly natural accompaniment to any of the phrases in this lesson.",
          "Everything in this lesson is in the polite (ます/です) register, appropriate for strangers, teachers, service situations, and anyone you don't have an established casual relationship with. That's the safest default register for a beginner, and it's what the rest of this A1 module will build on."
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What register (politeness level) does this entire lesson use?",
            "options": [
              "Polite (ます/です register), appropriate for strangers, teachers, and service situations",
              "Casual (plain) speech, for close friends only",
              "Formal written/literary Japanese",
              "There is no consistent register in this lesson"
            ],
            "correctIndex": 0,
            "explanation": "Every phrase in this lesson uses the polite ます/です register -- the safe default for a beginner."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each phrase to its meaning.",
        "pairs": [
          {
            "left": "ありがとうございます",
            "right": "Thank you"
          },
          {
            "left": "すみません",
            "right": "Excuse me / sorry"
          },
          {
            "left": "そうです",
            "right": "That's right"
          },
          {
            "left": "ちがいます",
            "right": "That's not right / different"
          }
        ],
        "explanation": "Each phrase has a distinct, non-overlapping conversational role, even though すみません and ごめんなさい (not shown here) both touch on apology."
      },
      {
        "type": "word-order",
        "prompt": "Arrange these words to form the standard self-introduction closing phrase.",
        "words": [
          "よろしく",
          "おねがいします"
        ],
        "translation": "Please treat me well / nice to meet you (set phrase)",
        "explanation": "よろしくおねがいします is said as a set, fixed phrase after introducing yourself."
      },
      {
        "type": "multiple-choice",
        "question": "Why would using お in front of your own name (おなまえ) when introducing yourself sound strange?",
        "options": [
          "お is a politeness prefix used when referring to someone ELSE's things, not your own",
          "お can only attach to verbs, never nouns",
          "It's grammatically impossible to attach お to なまえ",
          "There's no issue -- it's used for your own name too"
        ],
        "correctIndex": 0,
        "explanation": "お is a respectful prefix applied to another person's belongings or attributes -- applying it to your own name would sound self-important, so you simply answer with [name]です instead."
      }
    ]
  },
  {
    "slug": "sentence-structure-desu-1",
    "level": "JA-A1",
    "number": 3,
    "title": "Sentence Structure and です: X は Y です, Part 1 of 3",
    "summary": "The single most important pattern in beginner Japanese: how です forms a sentence, how は marks the topic, and how to make it negative or a question.",
    "duration": "5 min",
    "sections": [
      {
        "heading": "The basic pattern: X は Y です",
        "body": [
          "Japanese sentence order is famously different from English: the verb (or, here, です) comes at the end, not in the middle. The core beginner pattern is X は Y です -- \"as for X, it's Y.\" 私は学生です (Watashi wa gakusei desu) breaks down as 私 (watashi, I) + は (topic particle, \"wa\") + 学生 (gakusei, student) + です (desu, \"is/am/are\").",
          "です itself doesn't change based on who or what the subject is -- unlike English's \"am/is/are,\" です is one single word regardless of person or number. That makes it dramatically simpler than English's verb \"to be\" once the word order clicks.",
          "は marks whatever the sentence is \"about\" -- the topic being discussed -- rather than strictly the grammatical subject in the English sense. This distinction (topic vs. subject) becomes more important later, but for now, treat は as marking \"as for ___.\""
        ],
        "examples": [
          {
            "es": "私は学生です。",
            "en": "Watashi wa gakusei desu. -- I am a student."
          },
          {
            "es": "これは本です。",
            "en": "Kore wa hon desu. -- This is a book."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "In X は Y です, what does は do?",
            "options": [
              "Marks X as the topic being discussed (\"as for X\")",
              "Means \"is\" or \"am\"",
              "Turns the sentence into a question",
              "Marks Y as the object being acted on"
            ],
            "correctIndex": 0,
            "explanation": "は marks the topic -- \"as for X\" -- with です then supplying \"is/am/are.\""
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the topic particle.",
            "sentence": "私___学生です。 (Watashi ___ gakusei desu. -- I am a student.)",
            "answer": "は",
            "explanation": "は is the topic particle: 私は学生です, \"as for me, [I'm] a student.\""
          },
          {
            "type": "matching",
            "instructions": "Match each Japanese sentence to its English meaning.",
            "pairs": [
              {
                "left": "私は学生です。",
                "right": "I am a student."
              },
              {
                "left": "これは本です。",
                "right": "This is a book."
              }
            ],
            "explanation": "Both follow the X は Y です pattern: 私 (I) / これ (this) as topic, 学生 (student) / 本 (book) as what's being said about it."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "In 私は学生です, what role does は play?",
        "options": [
          "Marks 私 (\"I\") as the topic of the sentence",
          "Means \"student\"",
          "Makes the sentence a question",
          "Is the verb"
        ],
        "correctIndex": 0,
        "explanation": "は is the topic particle, marking what the sentence is \"about\" -- here, 私 (watashi, I)."
      },
      {
        "type": "multi-select",
        "question": "Which of these correctly negate a です sentence?",
        "options": [
          "ではありません",
          "じゃありません",
          "ですか",
          "でした"
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "ではありません and its casual contraction じゃありません both negate です; ですか forms a question, and でした is simple past (not negative)."
      }
    ]
  },
  {
    "slug": "sentence-structure-desu-2",
    "level": "JA-A1",
    "number": 4,
    "title": "Sentence Structure and です: X は Y です, Part 2 of 3",
    "summary": "The single most important pattern in beginner Japanese: how です forms a sentence, how は marks the topic, and how to make it negative or a question.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Making it negative",
        "body": [
          "To negate X は Y です, replace です with ではありません (dewa arimasen) in formal speech, or じゃありません (ja arimasen) in slightly more casual (but still polite) speech -- じゃ is simply a contraction of では that's extremely common in everyday conversation.",
          "私は学生ではありません (Watashi wa gakusei dewa arimasen) -- \"I am not a student.\" 田中さんは先生じゃありません (Tanaka-san wa sensei ja arimasen) -- \"Tanaka is not a teacher.\"",
          "Note さん (-san) attached after 田中: this is a polite title added after someone's name (roughly like Mr./Ms., but used far more broadly and by default for almost anyone you're not extremely close to) -- never attach さん to your own name."
        ],
        "examples": [
          {
            "es": "私は先生ではありません。",
            "en": "Watashi wa sensei dewa arimasen. -- I am not a teacher."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does じゃありません do to a sentence?",
            "options": [
              "Makes it negative (a contraction of ではありません)",
              "Makes it a question",
              "Makes it past tense",
              "Makes it more formal than ではありません"
            ],
            "correctIndex": 0,
            "explanation": "じゃありません is the everyday-conversation contraction of ではありません, both meaning \"is not.\""
          },
          {
            "type": "fill-blank",
            "prompt": "Negate the sentence using the casual contraction.",
            "sentence": "私は学生___。 (casual: I am not a student.)",
            "answer": "じゃありません",
            "explanation": "じゃありません is the casual contraction of ではありません, both meaning \"is not.\""
          },
          {
            "type": "multi-select",
            "question": "Which of these correctly mean \"is not\" after X は Y___?",
            "options": [
              "ではありません",
              "じゃありません",
              "です",
              "でした"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "ではありません (formal) and じゃありません (casual contraction) both mean \"is not.\" です is the plain affirmative, and でした is past tense."
          }
        ]
      },
      {
        "heading": "Turning it into a question with か",
        "body": [
          "Adding か to the end of a です sentence turns it into a yes/no (or open) question -- no word order change, no extra \"do/does\" the way English needs. 学生ですか？(Gakusei desu ka? -- \"Are [you] a student?\") is simply 学生です (\"[someone] is a student\") plus か.",
          "This is dramatically simpler than English question formation, and it applies broadly across Japanese grammar, not just です sentences -- you'll see か used this way with verbs in later lessons too.",
          "Japanese frequently omits the subject/topic entirely when it's clear from context -- 学生ですか？doesn't specify \"you,\" but in a face-to-face conversation, that's obviously who's being asked. Don't be surprised by \"missing\" subjects; this is completely normal, not an error or a simplification for beginners."
        ],
        "examples": [
          {
            "es": "学生ですか？",
            "en": "Gakusei desu ka? -- Are you a student?"
          },
          {
            "es": "はい、学生です。",
            "en": "Hai, gakusei desu. -- Yes, I am a student."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "How do you turn 学生です (\"[you] are a student\") into a question?",
            "options": [
              "Add か to the end: 学生ですか",
              "Move です to the front: です学生",
              "Add \"do\" before 学生",
              "Change です to でした"
            ],
            "correctIndex": 0,
            "explanation": "Adding か to the end of a です sentence makes it a question -- no word order change needed."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the question.",
            "sentence": "学生です___？ (Are [you] a student?)",
            "answer": "か",
            "explanation": "か at the end of a sentence turns a statement into a yes/no question."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Complete the question asking what something is.",
        "sentence": "これは___ですか？(What is this?)",
        "answer": "何",
        "hint": "The question word for \"what.\"",
        "explanation": "これは何ですか？(Kore wa nan desu ka?) means \"What is this?\" -- 何 is \"what.\""
      },
      {
        "type": "matching",
        "instructions": "Match each form of です to what it expresses.",
        "pairs": [
          {
            "left": "です",
            "right": "Present/future affirmative"
          },
          {
            "left": "ではありません",
            "right": "Present/future negative"
          },
          {
            "left": "でした",
            "right": "Past affirmative"
          },
          {
            "left": "ではありませんでした",
            "right": "Past negative"
          }
        ],
        "explanation": "です conjugates as a single, closed set of four forms across tense and polarity -- much simpler than English's \"to be.\""
      }
    ]
  },
  {
    "slug": "sentence-structure-desu-3",
    "level": "JA-A1",
    "number": 5,
    "title": "Sentence Structure and です: X は Y です, Part 3 of 3",
    "summary": "The single most important pattern in beginner Japanese: how です forms a sentence, how は marks the topic, and how to make it negative or a question.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Putting は and です questions together",
        "body": [
          "A full exchange: これは何ですか？(Kore wa nan desu ka? -- \"What is this?\") これは本です。(Kore wa hon desu. -- \"This is a book.\") 何 (nan/nani) is the question word for \"what\" -- you'll meet the other core question words in an upcoming lesson.",
          "Another common pattern: [name]さんは日本人ですか？(-- \"Is [name] Japanese?\") はい、日本人です。/ いいえ、日本人ではありません。(\"Yes, [they are] Japanese\" / \"No, [they] are not Japanese.\")"
        ],
        "examples": [
          {
            "es": "これは何ですか？",
            "en": "Kore wa nan desu ka? -- What is this?"
          },
          {
            "es": "本です。",
            "en": "Hon desu. -- It's a book."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each question to its answer.",
            "pairs": [
              {
                "left": "これは何ですか？",
                "right": "これは本です。"
              },
              {
                "left": "田中さんは日本人ですか？",
                "right": "はい、日本人です。"
              }
            ],
            "explanation": "これは何ですか？ (\"What is this?\") is answered with これは本です (\"This is a book\"); a yes/no question about 田中さん is answered with はい/いいえ plus the same X は Y です pattern."
          },
          {
            "type": "word-order",
            "prompt": "Put the words in order to ask \"What is this?\"",
            "words": [
              "これ",
              "は",
              "何",
              "ですか"
            ],
            "translation": "What is this?",
            "explanation": "これは何ですか？ -- topic (これ) + は + question word (何) + ですか."
          }
        ]
      },
      {
        "heading": "Past tense: でした",
        "body": [
          "です becomes でした (deshita) in the past tense -- 学生でした (gakusei deshita, \"[I] was a student\"). The negative past is ではありませんでした (dewa arimasen deshita) or the casual じゃありませんでした (ja arimasen deshita).",
          "Notice the pattern: です handles present/future, でした handles past, and the negative forms simply insert ではありません/じゃありません before adding でした for the past-negative. This same でした pattern will reappear once you study い-adjectives and な-adjectives later in this module."
        ],
        "examples": [
          {
            "es": "先生でした。",
            "en": "Sensei deshita. -- [I/they] was a teacher."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the past-tense form of です.",
            "sentence": "です becomes ___ in the past tense.",
            "answer": "でした",
            "explanation": "でした (deshita) is the past-tense form of です -- e.g. 学生でした, \"[I] was a student.\""
          },
          {
            "type": "multiple-choice",
            "question": "What does 学生でした mean?",
            "options": [
              "[I] was a student",
              "[I] am a student",
              "[I] am not a student",
              "[I] will be a student"
            ],
            "correctIndex": 0,
            "explanation": "でした is the past tense of です -- 学生でした means \"[I] was a student.\""
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the past-tense negative.",
            "sentence": "先生___ (casual: [I] was not a teacher.)",
            "answer": "じゃありませんでした",
            "explanation": "The casual past-negative inserts じゃありません before でした: じゃありませんでした, \"was not.\""
          }
        ]
      },
      {
        "heading": "Why this pattern matters so much",
        "body": [
          "X は Y です isn't just one grammar point among many -- it's the scaffold nearly every other beginner sentence hangs off of, directly or with small modifications. Once です, its negative, its question form, and its past tense are automatic, an enormous share of basic conversation opens up.",
          "The next few lessons build directly on this: pronouns and question words slot into the X and Y positions you've just learned, and the particles lesson after that expands は into its fuller particle system (は, が, を, に, で, と)."
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Arrange these words/particles to form \"I am a student.\"",
        "words": [
          "私",
          "は",
          "学生",
          "です"
        ],
        "translation": "I am a student.",
        "explanation": "私は学生です follows the X は Y です pattern: topic + topic particle + predicate + です."
      },
      {
        "type": "multiple-choice",
        "question": "Why might 学生ですか？(\"Are you a student?\") not explicitly include the word for \"you\"?",
        "options": [
          "Japanese frequently omits a subject/topic that's already clear from context",
          "It's grammatically required to omit \"you\" in questions",
          "\"You\" doesn't exist as a concept in Japanese",
          "This is a beginner simplification not used by native speakers"
        ],
        "correctIndex": 0,
        "explanation": "Omitting a subject/topic clear from context is completely standard, natural Japanese at every level, not a simplification -- not a grammatical requirement either, just common usage."
      }
    ]
  },
  {
    "slug": "pronouns-demonstratives-question-words-1",
    "level": "JA-A1",
    "number": 6,
    "title": "Pronouns, Demonstratives, and Question Words, Part 1 of 2",
    "summary": "Fill in the X and Y slots of the sentences you just learned: personal pronouns, the これ/それ/あれ system, and the core question words.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Personal pronouns -- used more sparingly than in English",
        "body": [
          "私 (watashi, I/me) is the standard, safe first-person pronoun for learners -- gender-neutral in polite usage, appropriate almost anywhere. あなた (anata, you) technically means \"you,\" but native speakers actually use it quite rarely -- addressing someone by name (plus さん) is far more natural and far more common than あなた, which can even feel oddly distant or presumptuous between people who know each other.",
          "彼 (kare, he) and 彼女 (kanojo, she) exist, but -- just like あなた -- native speakers default to using someone's name whenever possible rather than a pronoun. This is a real structural difference from English, not just a stylistic preference: Japanese leans on context and names, and drops pronouns constantly once the referent is clear.",
          "The practical takeaway: learn 私 solidly, recognize あなた/彼/彼女 when you encounter them, but get comfortable with sentences that simply don't state a subject at all -- as you saw in the previous lesson, this is the Japanese norm, not an exception."
        ],
        "examples": [
          {
            "es": "私は学生です。",
            "en": "Watashi wa gakusei desu. -- I am a student."
          },
          {
            "es": "田中さんは先生です。",
            "en": "Tanaka-san wa sensei desu. -- Tanaka is a teacher. (name preferred over \"he/she\")"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Why do native speakers use あなた (\"you\") much less than English speakers use \"you\"?",
            "options": [
              "They prefer addressing people by name (plus さん) instead",
              "あなた is grammatically incorrect",
              "あなた can only be used with children",
              "Japanese has no word for \"you\" at all"
            ],
            "correctIndex": 0,
            "explanation": "Native speakers default to a person's name + さん rather than あなた, which can feel distant or presumptuous."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the standard, safe first-person pronoun for learners.",
            "sentence": "___は学生です。 (I am a student.)",
            "answer": "私",
            "explanation": "私 (watashi) is the standard gender-neutral \"I/me\" appropriate almost anywhere in polite speech."
          },
          {
            "type": "multi-select",
            "question": "Which of these are true about Japanese pronoun use?",
            "options": [
              "Names + さん are preferred over 彼/彼女/あなた when possible",
              "Subjects are often dropped entirely once the referent is clear",
              "あなた is the most common way to say \"you\" in daily conversation",
              "私 is a safe, gender-neutral way to say \"I\""
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "Japanese leans on names and context over pronouns, and often omits the subject altogether -- あなた is actually used sparingly, not as the default \"you.\""
          }
        ]
      },
      {
        "heading": "これ・それ・あれ: this, that, and that over there",
        "body": [
          "Japanese demonstratives follow a three-way distance system rather than English's two-way this/that. これ (kore) is near the speaker (\"this\"). それ (sore) is near the listener (\"that, near you\"). あれ (are) is far from both speaker and listener (\"that, over there\").",
          "これは本です。(Kore wa hon desu. -- \"This is a book,\" close to the speaker.) それは何ですか？(Sore wa nan desu ka? -- \"What is that?\" near the listener.) あれは山です。(Are wa yama desu. -- \"That over there is a mountain,\" far from both.)",
          "This same three-way pattern (called こそあど, ko-so-a-do, after their first sounds) reappears with location words and, as you'll see next, with noun-modifying demonstratives -- learning the logic once here pays off repeatedly."
        ],
        "examples": [
          {
            "es": "これは本です。",
            "en": "Kore wa hon desu. -- This is a book."
          },
          {
            "es": "あれは山です。",
            "en": "Are wa yama desu. -- That over there is a mountain."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which demonstrative refers to something far from both the speaker and the listener?",
            "options": [
              "あれ",
              "これ",
              "それ",
              "どれ"
            ],
            "correctIndex": 0,
            "explanation": "あれ (are) marks something distant from both speaker and listener; これ is near the speaker, それ near the listener."
          },
          {
            "type": "matching",
            "instructions": "Match each demonstrative to its distance.",
            "pairs": [
              {
                "left": "これ",
                "right": "near the speaker (\"this\")"
              },
              {
                "left": "それ",
                "right": "near the listener (\"that, near you\")"
              },
              {
                "left": "あれ",
                "right": "far from both (\"that, over there\")"
              }
            ],
            "explanation": "これ/それ/あれ follow a three-way distance system, unlike English's two-way this/that."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence asking about something near the listener.",
            "sentence": "___は何ですか？ (What is that, near you?)",
            "answer": "それ",
            "explanation": "それ (sore) refers to something near the listener rather than the speaker."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which demonstrative would you use for something close to you, the speaker?",
        "options": [
          "これ",
          "それ",
          "あれ",
          "どれ"
        ],
        "correctIndex": 0,
        "explanation": "これ (kore) marks something near the speaker; それ is near the listener, あれ is far from both."
      },
      {
        "type": "multi-select",
        "question": "Which of these are true about Japanese pronoun usage?",
        "options": [
          "私 (I) is commonly used and safe for learners",
          "あなた (you) is used far less often than English \"you\" -- names are preferred",
          "Japanese frequently omits pronouns entirely when context makes the referent clear",
          "彼女 (she) is the single most common way to refer to a woman in conversation"
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "私 is safe and common; あなた/彼/彼女 exist but are used far less than their English counterparts, since names (plus さん) and omission are both preferred."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the noun-modifying form for \"this\" (used directly before a noun, unlike これ).",
        "sentence": "___本 means \"this book\" (kono hon).",
        "answer": "この",
        "explanation": "この (kono) modifies a following noun directly -- これ cannot attach to a noun the same way."
      }
    ]
  },
  {
    "slug": "pronouns-demonstratives-question-words-2",
    "level": "JA-A1",
    "number": 7,
    "title": "Pronouns, Demonstratives, and Question Words, Part 2 of 2",
    "summary": "Fill in the X and Y slots of the sentences you just learned: personal pronouns, the これ/それ/あれ system, and the core question words.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "この・その・あの + noun (and どれ/どの)",
        "body": [
          "これ/それ/あれ stand alone as full nouns (\"this [thing]\"), but when directly modifying a following noun, use この/その/あの instead: この本 (kono hon, \"this book\"), その人 (sono hito, \"that person\"), あの山 (ano yama, \"that mountain over there\"). Never say これ本 -- これ can't attach directly to a noun the way この can.",
          "どれ (dore, \"which one,\" standing alone) and どの (dono, \"which,\" plus a noun) complete the set as the question-word member of the こそあど pattern: どれが好きですか？(\"Which one do you like?\") どの本ですか？(\"Which book is it?\")"
        ],
        "examples": [
          {
            "es": "この本",
            "en": "kono hon -- this book"
          },
          {
            "es": "どの本ですか？",
            "en": "Dono hon desu ka? -- Which book is it?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which form correctly modifies a noun directly, as in \"this book\"?",
            "options": [
              "この本",
              "これ本",
              "これの本",
              "この本です"
            ],
            "correctIndex": 0,
            "explanation": "この/その/あの attach directly before a noun (この本, \"this book\"); これ/それ/あれ stand alone and cannot attach directly to a noun."
          },
          {
            "type": "matching",
            "instructions": "Match each standalone demonstrative to its noun-modifying counterpart.",
            "pairs": [
              {
                "left": "これ",
                "right": "この"
              },
              {
                "left": "それ",
                "right": "その"
              },
              {
                "left": "あれ",
                "right": "あの"
              },
              {
                "left": "どれ",
                "right": "どの"
              }
            ],
            "explanation": "これ/それ/あれ/どれ stand alone as full nouns; この/その/あの/どの modify a following noun directly."
          }
        ]
      },
      {
        "heading": "Core question words: なに, だれ, どこ, いつ",
        "body": [
          "何 (nani, or なん/nan before です/だ and certain sounds) means \"what\" -- you already saw it in the previous lesson. だれ (dare) means \"who\": あの人はだれですか？(\"Who is that person?\") どこ (doko) means \"where\": ここはどこですか？(\"Where is this place?\") いつ (itsu) means \"when\": たんじょうびはいつですか？(\"When is [your] birthday?\")",
          "All of these follow the same か-question pattern from the previous lesson -- question word slots directly into the Y position of X は Y です, and か marks it as a question, exactly like any other です question."
        ],
        "examples": [
          {
            "es": "あの人はだれですか？",
            "en": "Ano hito wa dare desu ka? -- Who is that person?"
          },
          {
            "es": "ここはどこですか？",
            "en": "Koko wa doko desu ka? -- Where is this place?"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each question word to its meaning.",
            "pairs": [
              {
                "left": "何",
                "right": "what"
              },
              {
                "left": "だれ",
                "right": "who"
              },
              {
                "left": "どこ",
                "right": "where"
              },
              {
                "left": "いつ",
                "right": "when"
              }
            ],
            "explanation": "何 (what), だれ (who), どこ (where), and いつ (when) are core question words that slot into the Y position of X は Y です."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the question asking who someone is.",
            "sentence": "あの人は___ですか？ (Who is that person?)",
            "answer": "だれ",
            "explanation": "だれ (dare) means \"who\" -- あの人はだれですか？, \"Who is that person?\""
          }
        ]
      },
      {
        "heading": "どう and なぜ／どうして",
        "body": [
          "どう (dou) means \"how,\" often used for asking someone's opinion or state: 元気ですか？(genki desu ka, \"are you well/how are you?\") is actually more common in that exact role than どうですか, but どうですか (\"how is it/how about it?\") is extremely common for opinions and suggestions.",
          "なぜ (naze) and どうして (doushite) both mean \"why,\" with どうして feeling slightly more conversational and なぜ slightly more formal/written -- both are perfectly usable for a beginner, and either is understood everywhere."
        ],
        "examples": [
          {
            "es": "元気ですか？",
            "en": "Genki desu ka? -- Are you well? / How are you?"
          },
          {
            "es": "どうしてですか？",
            "en": "Doushite desu ka? -- Why is that?"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each question word to its meaning.",
            "pairs": [
              {
                "left": "だれ",
                "right": "who"
              },
              {
                "left": "どこ",
                "right": "where"
              },
              {
                "left": "いつ",
                "right": "when"
              },
              {
                "left": "どうして",
                "right": "why"
              }
            ],
            "explanation": "だれ (who), どこ (where), いつ (when), and どうして (why) round out the core question words alongside 何 (what) and どう (how)."
          },
          {
            "type": "multiple-choice",
            "question": "Which question word means \"how\" and is often used to ask about someone's state or opinion?",
            "options": [
              "どう",
              "だれ",
              "いつ",
              "どこ"
            ],
            "correctIndex": 0,
            "explanation": "どう (dou) means \"how\" -- 元気ですか？ uses this idea to ask \"how are you,\" and どうですか？ asks for an opinion or suggestion."
          },
          {
            "type": "multi-select",
            "question": "Which words both mean \"why\"?",
            "options": [
              "なぜ",
              "どうして",
              "どう",
              "どこ"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "なぜ (naze, slightly more formal/written) and どうして (doushite, more conversational) both mean \"why.\""
          }
        ]
      },
      {
        "heading": "Putting it all together",
        "body": [
          "You now have enough pieces to ask and answer a huge range of basic questions: これはだれのですか？(Kore wa dare no desu ka? -- \"Whose is this?,\" using の for possession, which you'll formally cover in the next lesson alongside the other core particles) この人はだれですか？(\"Who is this person?\") あの本はどこですか？(\"Where is that book?\")",
          "The next lesson steps back to look at the full particle system -- は, が, を, に, で, と -- which is what makes sentences like these grammatically precise rather than just a pile of vocabulary in the right general order."
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each question word to its meaning.",
        "pairs": [
          {
            "left": "何",
            "right": "what"
          },
          {
            "left": "どこ",
            "right": "where"
          },
          {
            "left": "いつ",
            "right": "when"
          },
          {
            "left": "どう",
            "right": "how"
          }
        ],
        "explanation": "何 (what), どこ (where), いつ (when), and どう (how) are four of the core Japanese question words."
      },
      {
        "type": "word-order",
        "prompt": "Arrange these words to ask \"Who is that person?\"",
        "words": [
          "あの",
          "人",
          "は",
          "だれ",
          "ですか"
        ],
        "translation": "Who is that person?",
        "explanation": "あの人はだれですか？follows the X は Y ですか pattern, with あの人 (\"that person\") as the topic and だれ (\"who\") as the question word."
      },
      {
        "type": "multiple-choice",
        "question": "What does the term こそあど (ko-so-a-do) refer to?",
        "options": [
          "The shared distance-based pattern behind これ/それ/あれ/どれ and この/その/あの/どの",
          "A style of formal Japanese writing",
          "A counting system for objects",
          "A type of verb conjugation"
        ],
        "correctIndex": 0,
        "explanation": "こそあど names the recurring near-speaker/near-listener/far-from-both/question pattern shared by これ・それ・あれ・どれ and この・その・あの・どの."
      }
    ]
  },
  {
    "slug": "core-particles-1",
    "level": "JA-A1",
    "number": 8,
    "title": "Core Particles: は, が, を, に, で, と, Part 1 of 3",
    "summary": "Particles are what make Japanese word order flexible and precise at the same time -- the six most essential ones, and what job each one does.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Why particles matter more than word order",
        "body": [
          "In English, word order tells you who's doing what (\"the dog bites the man\" vs. \"the man bites the dog\" -- same words, different meaning). In Japanese, small particles attached after each word do that job instead, which is why Japanese word order can shift around more freely than English's without changing who did what to whom.",
          "This lesson covers six particles you'll use constantly: は (topic), が (subject/emphasis), を (direct object), に (time/direction/existence location), で (means/action location), and と (\"and\"/\"with\"). Each has one core job, though most have secondary uses you'll encounter later."
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "In Japanese, what does the job that word order does in English?",
            "options": [
              "Small particles attached after each word",
              "Verb conjugation endings",
              "Capitalization",
              "Sentence length"
            ],
            "correctIndex": 0,
            "explanation": "Particles mark each word's grammatical role, which is why Japanese word order can shift more freely than English's."
          }
        ]
      },
      {
        "heading": "は vs. が: topic vs. subject",
        "body": [
          "You already know は marks the topic -- what the sentence is \"about.\" が marks the grammatical subject more narrowly, often introducing new information or answering an implicit \"who/what\" question, and it's frequently used for emphasis or contrast.",
          "Compare: 私は学生です (\"As for me, [I'm] a student\" -- は, general statement about yourself) vs. だれが学生ですか？(\"Who is a student?\") 私が学生です。(\"I am [the one who is] a student\" -- が, answering exactly which person, with a slight emphasis on \"I,\" specifically, as opposed to someone else.)",
          "As a beginner rule of thumb: use は for general statements and topics already established in the conversation, and が when introducing new information, answering a specific question, or emphasizing exactly who or what. This distinction takes real practice to feel natural -- don't worry about mastering it instantly."
        ],
        "examples": [
          {
            "es": "私は学生です。",
            "en": "Watashi wa gakusei desu. -- I am a student. (general statement)"
          },
          {
            "es": "私が学生です。",
            "en": "Watashi ga gakusei desu. -- I'm the student. (emphasis / answering \"who?\")"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which particle is more likely to be used when directly answering the question \"who is a student?\"",
            "options": [
              "が",
              "は",
              "を",
              "に"
            ],
            "correctIndex": 0,
            "explanation": "が tends to introduce new or specifically-emphasized information, which fits directly answering a \"who/what\" question."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle for a general statement about yourself.",
            "sentence": "私___学生です。 (As for me, [I'm] a student -- general statement.)",
            "answer": "は",
            "explanation": "は marks the topic for a general statement; が would instead emphasize \"I\" specifically, e.g. answering \"who is a student?\""
          },
          {
            "type": "multi-select",
            "question": "Which describe typical uses of が?",
            "options": [
              "Introducing new information",
              "Answering a specific \"who/what\" question",
              "Marking a general topic already established in conversation",
              "Emphasizing exactly who or what"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "が introduces new information, answers specific questions, and emphasizes -- marking an already-established general topic is は's job."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "In 本を読みます (\"[I] read a book\"), what does を mark?",
        "options": [
          "The direct object (本, the book being read)",
          "The location of the action",
          "The topic of the sentence",
          "A question"
        ],
        "correctIndex": 0,
        "explanation": "を marks the direct object -- 本 (hon, book) is the thing being read."
      },
      {
        "type": "multi-select",
        "question": "Which of these are correct uses of に?",
        "options": [
          "Marking a specific time (7時に, \"at 7 o'clock\")",
          "Marking a destination (日本に行きます, \"go to Japan\")",
          "Marking the direct object of a verb",
          "Marking where something exists (ここにいます, \"is here\")"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "に marks time, destination, and location of existence; marking the direct object is を's job, not に's."
      }
    ]
  },
  {
    "slug": "core-particles-2",
    "level": "JA-A1",
    "number": 9,
    "title": "Core Particles: は, が, を, に, で, と, Part 2 of 3",
    "summary": "Particles are what make Japanese word order flexible and precise at the same time -- the six most essential ones, and what job each one does.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "を: marking the direct object",
        "body": [
          "を (pronounced \"o,\" identical to お -- recall this irregularity from the Alphabets module) marks the direct object of a verb -- the thing being acted upon. パンを食べます (Pan o tabemasu, \"[I] eat bread\") -- パン (pan, bread) is what's being eaten, marked by を. 本を読みます (Hon o yomimasu, \"[I] read a book\").",
          "を is almost exclusively a grammar particle in modern Japanese -- unlike お, it essentially never starts an ordinary word, so seeing を in text is a strong, reliable signal that a direct object came right before it."
        ],
        "examples": [
          {
            "es": "パンを食べます。",
            "en": "Pan o tabemasu. -- I eat bread."
          },
          {
            "es": "本を読みます。",
            "en": "Hon o yomimasu. -- I read a book."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does を mark?",
            "options": [
              "The direct object of a verb",
              "The topic of the sentence",
              "The location of an action",
              "A companion (\"with\")"
            ],
            "correctIndex": 0,
            "explanation": "を marks the direct object -- the thing being acted upon, as in パンを食べます, \"[I] eat bread.\""
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle marking the direct object.",
            "sentence": "本___読みます。 (I read a book.)",
            "answer": "を",
            "explanation": "を marks 本 (book) as the direct object of 読みます (read)."
          }
        ]
      },
      {
        "heading": "に: time, direction, and existence",
        "body": [
          "に has several related jobs. Marking a specific point in time: 7時に起きます (Shichi-ji ni okimasu, \"[I] wake up at 7 o'clock\"). Marking a destination/direction with a verb of movement: 日本に行きます (Nihon ni ikimasu, \"[I] go to Japan\"). Marking where something/someone exists (with あります/います, which you'll cover properly in a later lesson): 猫はここにいます (Neko wa koko ni imasu, \"The cat is here\").",
          "A useful mental shortcut: に tends to answer \"when\" or \"to/at what specific point\" -- a fixed time, a destination, or a location of existence."
        ],
        "examples": [
          {
            "es": "7時に起きます。",
            "en": "Shichi-ji ni okimasu. -- I wake up at 7 o'clock."
          },
          {
            "es": "日本に行きます。",
            "en": "Nihon ni ikimasu. -- I go to Japan."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which sentence uses に correctly to mark a destination?",
            "options": [
              "日本に行きます。",
              "日本を行きます。",
              "日本は行きます。",
              "日本と行きます。"
            ],
            "correctIndex": 0,
            "explanation": "に marks a destination with a verb of movement: 日本に行きます, \"[I] go to Japan.\""
          },
          {
            "type": "matching",
            "instructions": "Match each use of に to its example.",
            "pairs": [
              {
                "left": "a specific point in time",
                "right": "7時に起きます。"
              },
              {
                "left": "a destination",
                "right": "日本に行きます。"
              }
            ],
            "explanation": "に marks fixed points in time, destinations of movement, and locations of existence."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Complete the particle for \"means\" or \"method\" in this sentence.",
        "sentence": "バス___行きます。(I go by bus.)",
        "answer": "で",
        "explanation": "で marks the means by which something is done -- here, バス (bus) as the method of travel."
      },
      {
        "type": "matching",
        "instructions": "Match each particle to its core job.",
        "pairs": [
          {
            "left": "は",
            "right": "Marks the topic"
          },
          {
            "left": "を",
            "right": "Marks the direct object"
          },
          {
            "left": "と",
            "right": "Connects nouns (\"and\") or marks a companion (\"with\")"
          },
          {
            "left": "で",
            "right": "Marks the location of an action, or the means"
          }
        ],
        "explanation": "Each particle has one core, distinct grammatical job, even though most have secondary uses covered in later lessons."
      }
    ]
  },
  {
    "slug": "core-particles-3",
    "level": "JA-A1",
    "number": 10,
    "title": "Core Particles: は, が, を, に, で, と, Part 3 of 3",
    "summary": "Particles are what make Japanese word order flexible and precise at the same time -- the six most essential ones, and what job each one does.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "で: the location of an action, and means",
        "body": [
          "で marks where an action takes place (as opposed to に's \"where something exists\"): 図書館で勉強します (Toshokan de benkyou shimasu, \"[I] study at the library\") -- studying is an action happening at the library, so で, not に.",
          "で also marks the means or method by something is done: バスで行きます (Basu de ikimasu, \"[I] go by bus\"), 日本語で話します (Nihongo de hanashimasu, \"[I] speak in Japanese\").",
          "The classic に vs. で confusion for beginners: に marks where something simply exists or is heading toward; で marks where an action is actively performed, or the tool/method used to perform it."
        ],
        "examples": [
          {
            "es": "図書館で勉強します。",
            "en": "Toshokan de benkyou shimasu. -- I study at the library."
          },
          {
            "es": "バスで行きます。",
            "en": "Basu de ikimasu. -- I go by bus."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which particle marks where an action (like studying) actively takes place?",
            "options": [
              "で",
              "に",
              "を",
              "と"
            ],
            "correctIndex": 0,
            "explanation": "で marks the location of an action (or the means by which it's done); に marks existence, destination, or a fixed point in time."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle marking the means of transportation.",
            "sentence": "バス___行きます。 (I go by bus.)",
            "answer": "で",
            "explanation": "で marks the means or method by which something is done -- バスで行きます, \"[I] go by bus.\""
          },
          {
            "type": "multi-select",
            "question": "Which are correct uses of で?",
            "options": [
              "Marking where an action takes place",
              "Marking the means or method of doing something",
              "Marking a fixed point in time",
              "Marking a destination of movement"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "で marks the location of an action or the means/method used; time and destination are typically に's job."
          }
        ]
      },
      {
        "heading": "と: \"and\" and \"with\"",
        "body": [
          "と connects nouns as a complete list (\"and,\" with nothing left out, unlike English's looser \"and\" which can imply \"and other things\"): パンとコーヒー (pan to kōhī, \"bread and coffee\" -- exactly those two things, nothing more implied).",
          "と also marks \"with\" a companion: 友達と行きます (Tomodachi to ikimasu, \"[I] go with a friend\"). 友達 (tomodachi) means \"friend.\"",
          "With all six particles now covered -- は, が, を, に, で, と -- you have the grammatical glue behind nearly every simple sentence you'll build in this module and beyond."
        ],
        "examples": [
          {
            "es": "パンとコーヒー",
            "en": "pan to kōhī -- bread and coffee"
          },
          {
            "es": "友達と行きます。",
            "en": "Tomodachi to ikimasu. -- I go with a friend."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which particle connects nouns as a complete \"and\" list, or marks \"with\" a companion?",
            "options": [
              "と",
              "で",
              "に",
              "が"
            ],
            "correctIndex": 0,
            "explanation": "と means \"and\" (a complete list) or \"with\" (a companion): パンとコーヒー, 友達と行きます。"
          },
          {
            "type": "matching",
            "instructions": "Match each particle to its core job.",
            "pairs": [
              {
                "left": "は",
                "right": "topic (\"as for X\")"
              },
              {
                "left": "が",
                "right": "subject / new information / emphasis"
              },
              {
                "left": "を",
                "right": "direct object"
              },
              {
                "left": "に",
                "right": "time, destination, or existence location"
              },
              {
                "left": "で",
                "right": "action location or means"
              },
              {
                "left": "と",
                "right": "\"and\" / \"with\""
              }
            ],
            "explanation": "These six particles -- は, が, を, に, で, と -- are the grammatical glue behind nearly every simple Japanese sentence."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Arrange these words/particles to say \"I go to Japan.\"",
        "words": [
          "日本",
          "に",
          "行きます"
        ],
        "translation": "I go to Japan.",
        "explanation": "日本に行きます uses に to mark Japan as the destination of the verb 行きます (\"go\")."
      },
      {
        "type": "multiple-choice",
        "question": "What's the key difference between は and が?",
        "options": [
          "は marks a general topic; が tends to introduce new information or add emphasis",
          "は is used only in questions; が is used only in statements",
          "は and が are completely interchangeable with no difference",
          "が is only used with pronouns, is is only used with nouns"
        ],
        "correctIndex": 0,
        "explanation": "は marks the general topic of a sentence, while が more narrowly marks the subject, often introducing new information or adding emphasis."
      }
    ]
  },
  {
    "slug": "numbers-counting-basic-counters-1",
    "level": "JA-A1",
    "number": 11,
    "title": "Numbers, Counting, and Basic Counters, Part 1 of 2",
    "summary": "Two overlapping number systems, and why Japanese can't just say \"three\" without also saying what kind of thing you're counting.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "Two number systems: Sino-Japanese and native",
        "body": [
          "Japanese has two overlapping sets of numbers. The Sino-Japanese set (borrowed from Chinese, historically) is used for most counting, math, telephone numbers, and dates: いち (1), に (2), さん (3), し/よん (4), ご (5), ろく (6), しち/なな (7), はち (8), きゅう (9), じゅう (10).",
          "Notice 4 and 7 each have two readings (し/よん and しち/なな) -- both are used, but し is often avoided in certain contexts because it sounds identical to 死 (shi, \"death\"), a well-known superstition-driven habit similar to some buildings skipping a \"13th floor\" in English-speaking countries.",
          "The native Japanese set (older, pre-dating the Chinese-derived system) only goes cleanly from 1 to 10 and is used specifically for counting generic objects and in a handful of fixed expressions: ひとつ (1), ふたつ (2), みっつ (3), よっつ (4), いつつ (5), むっつ (6), ななつ (7), やっつ (8), ここのつ (9), とお (10)."
        ],
        "examples": [
          {
            "es": "いち、に、さん",
            "en": "ichi, ni, san -- 1, 2, 3 (Sino-Japanese)"
          },
          {
            "es": "ひとつ、ふたつ、みっつ",
            "en": "hitotsu, futatsu, mittsu -- 1, 2, 3 (native, generic objects)"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each Sino-Japanese number to its value.",
            "pairs": [
              {
                "left": "いち",
                "right": "1"
              },
              {
                "left": "さん",
                "right": "3"
              },
              {
                "left": "ご",
                "right": "5"
              },
              {
                "left": "じゅう",
                "right": "10"
              }
            ],
            "explanation": "いち (1), さん (3), ご (5), and じゅう (10) are core Sino-Japanese numbers, used for most counting, math, and dates."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the reading of 4 that's often avoided because it sounds like \"death.\"",
            "sentence": "4 can be read し or よん, but ___ is often avoided.",
            "answer": "し",
            "explanation": "し (shi) sounds identical to 死 (death), so よん is often preferred in many contexts."
          }
        ]
      },
      {
        "heading": "When to use which system",
        "body": [
          "The native ひとつ/ふたつ/みっつ set works on its own, with no counter word needed, specifically for counting generic small objects informally: りんごをひとつください (Ringo o hitotsu kudasai, \"[One] apple, please\"). It only exists up to 10 -- beyond that, you switch to Sino-Japanese numbers plus a counter.",
          "The Sino-Japanese set (いち、に、さん...) is what you use for telephone numbers, prices, math, dates, and -- critically -- as the base for counter words, covered next. It's the system you'll use far more often once you go beyond very small, everyday quantities."
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which number system is used for telephone numbers, prices, and as the base for counters?",
            "options": [
              "Sino-Japanese (いち、に、さん...)",
              "Native Japanese (ひとつ、ふたつ、みっつ...)",
              "Both equally in all situations",
              "Neither -- counters use their own separate numbers"
            ],
            "correctIndex": 0,
            "explanation": "Sino-Japanese numbers are used for telephone numbers, prices, math, dates, and as the base for counter words."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the native counting word for \"one,\" used with generic small objects.",
            "sentence": "りんごを___ください。 (One apple, please.)",
            "answer": "ひとつ",
            "explanation": "ひとつ is the native Japanese word for \"one,\" used alone (no counter needed) for generic small objects."
          }
        ]
      },
      {
        "heading": "Why counters exist",
        "body": [
          "Japanese numbers, on their own, can't directly attach to most nouns the way English \"three apples\" works. Instead, a counter word attaches to the number, and which counter you use depends on the shape or category of what's being counted -- flat objects, long thin objects, people, small animals, and more each traditionally have their own counter.",
          "This might sound intimidating, but as a beginner you only need a small handful of high-frequency counters to get by in the vast majority of everyday situations -- covered in the next section."
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What determines which counter word is used with a number in Japanese?",
            "options": [
              "The shape or category of the object being counted",
              "The number itself (odd vs. even)",
              "Whether the sentence is a question",
              "The time of day"
            ],
            "correctIndex": 0,
            "explanation": "Japanese counters are chosen based on the shape/category of the counted object -- flat objects, long objects, people, and so on each typically use a different counter."
          },
          {
            "type": "multiple-choice",
            "question": "Why can't Japanese numbers directly attach to most nouns the way English \"three apples\" does?",
            "options": [
              "A counter word must attach to the number, chosen by the object's shape/category",
              "Japanese numbers can only be used for math, never for objects",
              "Nouns in Japanese are always plural already",
              "Counters are optional and rarely used"
            ],
            "correctIndex": 0,
            "explanation": "A counter word attaches to the number based on what's being counted -- this is required, not optional, in standard Japanese."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which counter is used for people?",
        "options": [
          "人 (にん)",
          "個 (こ)",
          "枚 (まい)",
          "本 (ほん)"
        ],
        "correctIndex": 0,
        "explanation": "人 (nin) is the counter for people -- with irregular readings for one (hitori) and two (futari)."
      },
      {
        "type": "multi-select",
        "question": "Which of these are true about Japanese numbers and counters?",
        "options": [
          "The native ひとつ/ふたつ set only goes up to 10",
          "一人 (\"one person\") and 二人 (\"two people\") have irregular readings",
          "Every noun uses the exact same counter word",
          "Sino-Japanese numbers build compositionally past 10 (じゅういち = 11)"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "The native number set stops at 10, 一人/二人 are irregular, and Sino-Japanese numbers combine compositionally -- but different nouns require different counters, not one universal counter."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the counter for flat, thin objects like tickets or paper.",
        "sentence": "きっぷを二___ (two tickets) uses the counter for flat objects.",
        "answer": "枚",
        "hint": "Also read \"mai.\"",
        "explanation": "枚 (mai) counts flat, thin objects such as paper, tickets, and plates."
      }
    ]
  },
  {
    "slug": "numbers-counting-basic-counters-2",
    "level": "JA-A1",
    "number": 12,
    "title": "Numbers, Counting, and Basic Counters, Part 2 of 2",
    "summary": "Two overlapping number systems, and why Japanese can't just say \"three\" without also saying what kind of thing you're counting.",
    "duration": "10 min",
    "sections": [
      {
        "heading": "The essential beginner counters",
        "body": [
          "人 (にん/nin) counts people: 一人 (hitori, \"one person\" -- irregular reading!), 二人 (futari, \"two people\" -- also irregular!), 三人 (san-nin), 四人 (yo-nin), and so on regularly from three onward. The irregularity of 一人/二人 is worth memorizing specifically, since they're used constantly.",
          "つ (tsu) is actually the same native counter from ひとつ/ふたつ -- a safe, generic fallback counter for small objects when you're unsure of the specific counter, usable up to 10 (beyond that, switch to another appropriate counter).",
          "個 (こ/ko) counts small, roughly round or cube-shaped objects generically: りんごを三個 (ringo o san-ko, \"three apples\"). 枚 (まい/mai) counts flat, thin objects: paper, tickets, plates: きっぷを二枚 (kippu o ni-mai, \"two tickets\").",
          "本 (ほん/hon, with sound changes: いっぽん/ippon, さんぼん/sanbon) counts long, thin cylindrical objects: pencils, bottles, umbrellas: えんぴつを一本 (enpitsu o ippon, \"one pencil\"). Notice ほん shifts to ぽん or ぼん after certain numbers -- a sound-change pattern that also affects 分 (minutes) and other counters, which you don't need to memorize exhaustively yet, just recognize as a normal pattern."
        ],
        "examples": [
          {
            "es": "三人",
            "en": "san-nin -- three people"
          },
          {
            "es": "りんごを三個",
            "en": "ringo o san-ko -- three apples"
          },
          {
            "es": "えんぴつを一本",
            "en": "enpitsu o ippon -- one pencil"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each counter to what it counts.",
            "pairs": [
              {
                "left": "人 (にん)",
                "right": "people"
              },
              {
                "left": "個 (こ)",
                "right": "small round/cube-shaped objects"
              },
              {
                "left": "枚 (まい)",
                "right": "flat, thin objects (paper, tickets)"
              },
              {
                "left": "本 (ほん)",
                "right": "long, thin cylindrical objects (pencils, bottles)"
              }
            ],
            "explanation": "人 counts people, 個 counts small round objects, 枚 counts flat objects, and 本 counts long thin objects."
          },
          {
            "type": "multiple-choice",
            "question": "What is the irregular reading for \"one person\"?",
            "options": [
              "一人 (hitori)",
              "一人 (ichi-nin)",
              "一人 (hito-nin)",
              "一人 (issen)"
            ],
            "correctIndex": 0,
            "explanation": "一人 (hitori, \"one person\") and 二人 (futari, \"two people\") are irregular readings worth memorizing -- from three onward the pattern becomes regular (三人, san-nin)."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the counter for flat, thin objects like tickets.",
            "sentence": "きっぷを二___ (two tickets)",
            "answer": "枚",
            "explanation": "枚 (mai) counts flat, thin objects such as paper, tickets, and plates."
          }
        ]
      },
      {
        "heading": "Counter word order in a sentence",
        "body": [
          "Unlike English (\"three apples\"), a counted noun phrase in Japanese typically places the counter after the object and its particle, right before the verb: りんごを三個食べます (Ringo o san-ko tabemasu, \"[I] eat three apples\") -- literally \"apple(s) [object marker] three-pieces eat.\"",
          "This might feel backward at first coming from English, but it becomes automatic quickly with exposure, since the pattern (noun + を + number-counter + verb) repeats constantly across everyday sentences."
        ],
        "examples": [
          {
            "es": "りんごを三個食べます。",
            "en": "Ringo o san-ko tabemasu. -- I eat three apples."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Where does the counter typically go in a Japanese sentence?",
            "options": [
              "After the object and its particle, right before the verb",
              "Before the object, like English \"three apples\"",
              "At the very end of the sentence, after the verb",
              "Immediately after は"
            ],
            "correctIndex": 0,
            "explanation": "The pattern is noun + を + number-counter + verb, as in りんごを三個食べます -- the counter comes after the object, not before it like in English."
          },
          {
            "type": "word-order",
            "prompt": "Put the words in order to say \"I eat three apples.\"",
            "words": [
              "りんご",
              "を",
              "三個",
              "食べます"
            ],
            "translation": "I eat three apples.",
            "explanation": "りんごを三個食べます -- noun (りんご) + object marker (を) + number-counter (三個) + verb (食べます)."
          }
        ]
      },
      {
        "heading": "Numbers beyond ten",
        "body": [
          "Sino-Japanese numbers past 10 build compositionally: じゅういち (11, \"ten-one\"), じゅうに (12, \"ten-two\"), にじゅう (20, \"two-ten\"), にじゅういち (21, \"two-ten-one\"), and so on -- no separate words to memorize the way English has \"twenty,\" \"thirty,\" etc. as distinct words. ひゃく (100), せん (1000), and まん (10,000) are the next major landmarks.",
          "This compositional structure means that once you know 1-10 solidly, extending to larger numbers is mostly a matter of combining pieces you already know, rather than learning an entirely new vocabulary set."
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "How is 21 formed in Sino-Japanese numbers?",
            "options": [
              "にじゅういち (two-ten-one)",
              "A completely separate word, like English \"twenty-one\"",
              "いちじゅうに",
              "にじゅう alone"
            ],
            "correctIndex": 0,
            "explanation": "Japanese numbers build compositionally: にじゅういち literally means \"two-ten-one\" (20 + 1 = 21), with no separate word needed."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each counter to what it counts.",
        "pairs": [
          {
            "left": "人",
            "right": "People"
          },
          {
            "left": "個",
            "right": "Small, round/cube-shaped objects"
          },
          {
            "left": "枚",
            "right": "Flat, thin objects"
          },
          {
            "left": "本",
            "right": "Long, thin cylindrical objects"
          }
        ],
        "explanation": "Each counter corresponds to a category of object shape -- people, round objects, flat objects, and long thin objects, respectively."
      },
      {
        "type": "word-order",
        "prompt": "Arrange these words/particles to say \"I eat three apples.\"",
        "words": [
          "りんご",
          "を",
          "三個",
          "食べます"
        ],
        "translation": "I eat three apples.",
        "explanation": "りんごを三個食べます places the counted quantity (三個) after the object and its particle, before the verb."
      },
      {
        "type": "multiple-choice",
        "question": "Why is し (4) sometimes avoided in certain contexts in favor of よん?",
        "options": [
          "し sounds identical to 死 (shi), the word for \"death\"",
          "し is grammatically incorrect for the number 4",
          "し is only used for telephone numbers",
          "There's no such avoidance -- both are used completely interchangeably in all contexts"
        ],
        "correctIndex": 0,
        "explanation": "し (4) is a homophone of 死 (death), leading to a superstition-driven preference for よん in some contexts -- similar to skipping \"13\" in some English-speaking cultures."
      }
    ]
  },
  {
    "slug": "verbs-masu-form-1",
    "level": "JA-A1",
    "number": 13,
    "title": "Verbs in the ます Form: Present, Future, and Negative, Part 1 of 3",
    "summary": "Your first real Japanese verbs -- the polite ます form that covers present and future tense, its negative, and the handful of common verbs you'll use constantly.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Verbs come last, and ます is your polite default",
        "body": [
          "You already know from earlier lessons that the verb (or です) goes at the end of a Japanese sentence. Real action verbs work the same way, and in polite speech, they typically end in ます (-masu): 食べます (tabemasu, \"eat\"), 飲みます (nomimasu, \"drink\"), 行きます (ikimasu, \"go\"), 見ます (mimasu, \"see/watch\"), します (shimasu, \"do\").",
          "One especially useful feature of ます: it doesn't distinguish present from future the way English does. 食べます can mean \"[I] eat\" (as a habit or general statement) or \"[I] will eat\" (about to happen), with context -- not the verb form -- telling you which.",
          "This lesson treats ます as a fixed ending you attach to a verb stem, without yet explaining every rule for how a dictionary-form verb becomes its ます form -- that's a deeper topic for later study. For now, simply learn each verb's ます form directly, the way this lesson presents them."
        ],
        "examples": [
          {
            "es": "食べます。",
            "en": "Tabemasu. -- [I] eat / will eat."
          },
          {
            "es": "行きます。",
            "en": "Ikimasu. -- [I] go / will go."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What's special about ます regarding present vs. future?",
            "options": [
              "It doesn't distinguish them -- context tells you which is meant",
              "ます is only used for the future",
              "ます is only used for the present",
              "You must add か to make it future tense"
            ],
            "correctIndex": 0,
            "explanation": "食べます can mean \"[I] eat\" or \"[I] will eat\" -- context, not the verb form, tells you which."
          },
          {
            "type": "matching",
            "instructions": "Match each ます verb to its meaning.",
            "pairs": [
              {
                "left": "食べます",
                "right": "eat"
              },
              {
                "left": "飲みます",
                "right": "drink"
              },
              {
                "left": "行きます",
                "right": "go"
              },
              {
                "left": "見ます",
                "right": "see/watch"
              }
            ],
            "explanation": "These are common everyday ます verbs used constantly in beginner Japanese."
          }
        ]
      },
      {
        "heading": "The negative: ません",
        "body": [
          "Negating a ます verb is refreshingly simple and completely regular: swap ます for ません (masen). 食べません (tabemasen, \"[I] don't/won't eat\"), 行きません (ikimasen, \"[I] don't/won't go\"). No exceptions to learn here -- every ます verb negates the exact same way.",
          "Compare this to です's negative (ではありません/じゃありません from Lesson 2) -- verbs are actually simpler, since ません is a single, direct swap rather than a longer phrase."
        ],
        "examples": [
          {
            "es": "食べません。",
            "en": "Tabemasen. -- [I] don't/won't eat."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "How do you negate a ます verb?",
            "options": [
              "Replace ます with ません",
              "Add ではありません after it",
              "Add か at the end",
              "There is no negative form for verbs"
            ],
            "correctIndex": 0,
            "explanation": "Every ます verb negates the same simple way: swap ます for ません."
          },
          {
            "type": "fill-blank",
            "prompt": "Negate the verb.",
            "sentence": "行き___。 (I don't/won't go.)",
            "answer": "ません",
            "explanation": "行きません (ikimasen) is the negative of 行きます -- swap ます for ません."
          },
          {
            "type": "multiple-choice",
            "question": "How does negating a ます verb compare to negating です?",
            "options": [
              "Verbs are simpler -- a single direct swap (ません) vs. です's longer phrase (ではありません)",
              "です is simpler than verbs",
              "They work exactly the same way",
              "Verbs cannot be negated at all"
            ],
            "correctIndex": 0,
            "explanation": "ません is a single, direct swap for every ます verb, unlike です's longer ではありません/じゃありません."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which verb means \"there is/are,\" used specifically for inanimate objects?",
        "options": [
          "あります",
          "います",
          "します",
          "行きます"
        ],
        "correctIndex": 0,
        "explanation": "あります is for inanimate objects; います is the equivalent for animate beings (people, animals)."
      },
      {
        "type": "multi-select",
        "question": "Which of these are true about the ます form?",
        "options": [
          "It doesn't distinguish present from future tense -- context does",
          "Its negative is formed by swapping ます for ません",
          "It changes form depending on who the subject is (like English \"am/is/are\")",
          "It's the polite, default verb ending for everyday speech"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "ます covers present/future without changing form for tense, negates simply as ません, and is the standard polite verb ending -- unlike English \"to be,\" it doesn't change based on subject."
      }
    ]
  },
  {
    "slug": "verbs-masu-form-2",
    "level": "JA-A1",
    "number": 14,
    "title": "Verbs in the ます Form: Present, Future, and Negative, Part 2 of 3",
    "summary": "Your first real Japanese verbs -- the polite ます form that covers present and future tense, its negative, and the handful of common verbs you'll use constantly.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "を with action verbs",
        "body": [
          "Recall を from the particles lesson: it marks the direct object of a verb. Most everyday ます verbs take a direct object marked with を: パンを食べます (Pan o tabemasu, \"[I] eat bread\"), 水を飲みます (Mizu o nomimasu, \"[I] drink water\"), テレビを見ます (Terebi o mimasu, \"[I] watch TV\").",
          "します (shimasu, \"do\") is unusually flexible -- it attaches to countless nouns (often loanwords) to form compound verbs: 勉強します (benkyou shimasu, \"study\" -- literally \"do studying\"), 買い物します (kaimono shimasu, \"shop\"). You'll see this pattern constantly as your vocabulary grows."
        ],
        "examples": [
          {
            "es": "水を飲みます。",
            "en": "Mizu o nomimasu. -- I drink water."
          },
          {
            "es": "勉強します。",
            "en": "Benkyou shimasu. -- I study."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle marking the direct object.",
            "sentence": "水___飲みます。 (I drink water.)",
            "answer": "を",
            "explanation": "を marks 水 (water) as the direct object of 飲みます (drink)."
          },
          {
            "type": "multiple-choice",
            "question": "What does 勉強します literally mean, and what does it illustrate about します?",
            "options": [
              "\"Do studying\" -- します attaches to nouns to form compound verbs",
              "\"Study hard\" -- it's an intensifier",
              "\"Want to study\" -- it expresses desire",
              "\"Studied\" -- it's a past-tense marker"
            ],
            "correctIndex": 0,
            "explanation": "します is flexible and attaches to many nouns (often loanwords) to form compound verbs like 勉強します (\"do studying\" = study)."
          }
        ]
      },
      {
        "heading": "行きます and に: going somewhere",
        "body": [
          "行きます (ikimasu, \"go\") pairs naturally with に (destination, from the particles lesson) rather than を, since a destination isn't a direct object being acted upon: 学校に行きます (Gakkou ni ikimasu, \"[I] go to school\"). This is a common point of confusion for beginners used to English's \"go to,\" so it's worth fixing now: motion verbs take に (or へ, a related particle you'll encounter later) for their destination, not を."
        ],
        "examples": [
          {
            "es": "学校に行きます。",
            "en": "Gakkou ni ikimasu. -- I go to school."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which particle marks the destination of 行きます (\"go\")?",
            "options": [
              "に",
              "を",
              "が",
              "と"
            ],
            "correctIndex": 0,
            "explanation": "Motion verbs like 行きます take に (or later, へ) for their destination -- not を, since a destination isn't a direct object."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle for the destination.",
            "sentence": "学校___行きます。 (I go to school.)",
            "answer": "に",
            "explanation": "学校に行きます -- に marks 学校 (school) as the destination."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Complete the particle used with 行きます to mark a destination.",
        "sentence": "学校___行きます。(I go to school.)",
        "answer": "に",
        "explanation": "に marks the destination of a motion verb like 行きます -- not を, which is reserved for direct objects."
      },
      {
        "type": "matching",
        "instructions": "Match each verb to its meaning.",
        "pairs": [
          {
            "left": "食べます",
            "right": "eat"
          },
          {
            "left": "飲みます",
            "right": "drink"
          },
          {
            "left": "見ます",
            "right": "see / watch"
          },
          {
            "left": "行きます",
            "right": "go"
          }
        ],
        "explanation": "These five ます verbs (with します from the lesson) form the core beginner action-verb toolkit."
      },
      {
        "type": "word-order",
        "prompt": "Arrange these words/particles to say \"I drink water.\"",
        "words": [
          "水",
          "を",
          "飲みます"
        ],
        "translation": "I drink water.",
        "explanation": "水を飲みます marks 水 (water) as the direct object with を, followed by the verb 飲みます (drink)."
      }
    ]
  },
  {
    "slug": "verbs-masu-form-3",
    "level": "JA-A1",
    "number": 15,
    "title": "Verbs in the ます Form: Present, Future, and Negative, Part 3 of 3",
    "summary": "Your first real Japanese verbs -- the polite ます form that covers present and future tense, its negative, and the handful of common verbs you'll use constantly.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "あります and います: existence",
        "body": [
          "Japanese uses two completely different verbs for \"there is/are,\" depending on whether the thing existing is animate or inanimate. あります (arimasu) is for inanimate objects: 本があります (Hon ga arimasu, \"There is a book\"). います (imasu) is for animate beings -- people and animals: 猫がいます (Neko ga imasu, \"There is a cat\").",
          "Notice both examples use が, not は or を -- existence sentences typically mark what exists with が, since you're usually introducing new information (\"there IS a...\") rather than commenting on an established topic.",
          "This animate/inanimate distinction has no equivalent in English's single \"there is/are,\" so it takes conscious practice at first -- but it becomes automatic quickly once you notice the pattern."
        ],
        "examples": [
          {
            "es": "本があります。",
            "en": "Hon ga arimasu. -- There is a book."
          },
          {
            "es": "猫がいます。",
            "en": "Neko ga imasu. -- There is a cat."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the verb for \"there is/are\" used specifically for animate things like people and animals.",
            "sentence": "猫が___。(There is a cat.)",
            "answer": "います",
            "explanation": "います (imasu) is used for animate beings; あります is used for inanimate objects."
          },
          {
            "type": "multiple-choice",
            "question": "Which verb for \"there is/are\" is used for inanimate objects like books?",
            "options": [
              "あります",
              "います",
              "です",
              "でした"
            ],
            "correctIndex": 0,
            "explanation": "あります (arimasu) is for inanimate objects; います (imasu) is for animate beings like people and animals."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle used with existence verbs like あります/います.",
            "sentence": "猫___います。 (There is a cat.)",
            "answer": "が",
            "explanation": "Existence sentences typically mark what exists with が, since they usually introduce new information."
          }
        ]
      },
      {
        "heading": "Building simple sentences with everything so far",
        "body": [
          "Combine particles, numbers, and verbs from this module: 図書館で本を三冊読みます (Toshokan de hon o san-satsu yomimasu, \"[I] read three books at the library\" -- 冊/satsu is the counter for bound volumes, a natural extension of the counters lesson). 友達と学校に行きます (Tomodachi to gakkou ni ikimasu, \"[I] go to school with a friend\").",
          "The next lesson adds adjectives to this toolkit, which will let you describe things (\"a big book,\" \"the library is quiet\") rather than only stating actions and existence."
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Put the words in order to say \"I go to school with a friend.\"",
            "words": [
              "友達",
              "と",
              "学校",
              "に",
              "行きます"
            ],
            "translation": "I go to school with a friend.",
            "explanation": "友達と学校に行きます -- 友達 (friend) + と (with) + 学校 (school) + に (destination) + 行きます (go)."
          },
          {
            "type": "multi-select",
            "question": "Which sentences are grammatically correct?",
            "options": [
              "水を飲みます。",
              "学校に行きます。",
              "水に飲みます。",
              "猫をいます。"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "水を飲みます (drink water) and 学校に行きます (go to school) use the correct particles; 水に飲みます and 猫をいます swap in the wrong particle."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why do あります and います typically pair with が rather than は?",
        "options": [
          "Existence sentences usually introduce new information, which が tends to mark",
          "が is required by law with any verb ending in す",
          "は cannot be used with any verb, ever",
          "There's no real pattern -- it's random which particle is used"
        ],
        "correctIndex": 0,
        "explanation": "が tends to introduce new information -- exactly what \"there is/are a ___\" sentences are doing, which is why が, not は, is the natural fit here."
      }
    ]
  },
  {
    "slug": "adjectives-i-na-1",
    "level": "JA-A1",
    "number": 16,
    "title": "Adjectives: い-Adjectives and な-Adjectives, Part 1 of 3",
    "summary": "Japanese splits adjectives into two grammatically distinct families -- learn to tell them apart and conjugate each one correctly.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Two families of adjectives",
        "body": [
          "Japanese adjectives fall into two grammatically distinct groups, and telling them apart matters because they conjugate completely differently. い-adjectives all end in い in their dictionary form: 大きい (ookii, big), 小さい (chiisai, small), 高い (takai, tall/expensive), 安い (yasui, cheap), おいしい (oishii, delicious).",
          "な-adjectives (sometimes called \"adjectival nouns\") don't follow that い-ending pattern, and behave more like nouns grammatically: 静か(な) (shizuka, quiet), きれい(な) (kirei, pretty/clean), 元気(な) (genki, healthy/energetic), 好き(な) (suki, likable/favorite).",
          "A quick, mostly-reliable test: if it ends in い and describing something with it directly before a noun requires no extra word, it's probably an い-adjective. If describing something before a noun requires inserting な, it's a な-adjective -- even a handful of words that happen to end in い (like きれい) are actually な-adjectives, so this test isn't airtight, just a strong starting heuristic."
        ],
        "examples": [
          {
            "es": "大きい",
            "en": "ookii -- big (い-adjective)"
          },
          {
            "es": "静か",
            "en": "shizuka -- quiet (な-adjective)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What's a strong (though not airtight) heuristic for spotting an い-adjective?",
            "options": [
              "It ends in い and attaches directly before a noun with no extra word",
              "It always describes color",
              "It never appears before a noun",
              "It always ends in な"
            ],
            "correctIndex": 0,
            "explanation": "い-adjectives end in い and attach directly to nouns; な-adjectives need な inserted, even a few that happen to end in い, like きれい."
          },
          {
            "type": "multi-select",
            "question": "Which of these are な-adjectives?",
            "options": [
              "静か (quiet)",
              "大きい (big)",
              "きれい (pretty/clean)",
              "高い (tall/expensive)"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "静か and きれい are な-adjectives (きれい is a well-known exception that ends in い but is still な-type); 大きい and 高い are true い-adjectives."
          }
        ]
      },
      {
        "heading": "い-adjectives before a noun and as a predicate",
        "body": [
          "い-adjectives attach directly before a noun with no extra word needed: 大きい本 (ookii hon, \"a big book\"). As a predicate (the Y in X は Y です), they can stand alone without です, though です is commonly added anyway for politeness -- it doesn't change the tense or meaning, just the formality: この本は大きい。/ この本は大きいです。both mean \"This book is big,\" the second simply more polite.",
          "This is a genuine grammatical difference from な-adjectives and nouns, where です is doing real grammatical work (as the copula) -- with い-adjectives, です is purely a politeness marker layered on top of a sentence that's already complete without it."
        ],
        "examples": [
          {
            "es": "大きい本です。",
            "en": "Ookii hon desu. -- It's a big book."
          },
          {
            "es": "この本は大きいです。",
            "en": "Kono hon wa ookii desu. -- This book is big."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What role does です play when added after an い-adjective predicate, like 大きいです?",
            "options": [
              "Pure politeness -- the sentence is already grammatically complete without it",
              "It's required for the sentence to make grammatical sense at all",
              "It changes the tense from present to past",
              "It negates the adjective"
            ],
            "correctIndex": 0,
            "explanation": "With い-adjectives, です is only a politeness marker -- unlike with nouns/な-adjectives, where です is a real copula doing grammatical work."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the missing word to say \"a big book.\"",
            "sentence": "___本 (a big book)",
            "answer": "大きい",
            "explanation": "い-adjectives attach directly before a noun with no extra word needed: 大きい本."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which of these is an い-adjective?",
        "options": [
          "大きい (big)",
          "静か (quiet)",
          "きれい (pretty)",
          "元気 (healthy)"
        ],
        "correctIndex": 0,
        "explanation": "大きい ends in い and conjugates on its own (大きくない, 大きかった) -- a true い-adjective. きれい, despite ending in い, is actually a な-adjective."
      },
      {
        "type": "multi-select",
        "question": "Which of these are true about な-adjectives?",
        "options": [
          "They need な inserted before directly modifying a noun",
          "They negate and go to the past tense exactly like です does",
          "They always end in い in their dictionary form",
          "です functions as a real copula with them, unlike with い-adjectives"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "な-adjectives insert な before a noun and conjugate like です -- they do NOT reliably end in い (that's the い-adjective pattern, with some exceptions like きれい)."
      }
    ]
  },
  {
    "slug": "adjectives-i-na-2",
    "level": "JA-A1",
    "number": 17,
    "title": "Adjectives: い-Adjectives and な-Adjectives, Part 2 of 3",
    "summary": "Japanese splits adjectives into two grammatically distinct families -- learn to tell them apart and conjugate each one correctly.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "い-adjective negation and past tense",
        "body": [
          "い-adjectives conjugate on their own, without needing ではありません the way です-sentences do. Negative: drop the final い and add くない: 大きくない (ookikunai, \"not big\"). Past: drop い and add かった: 大きかった (ookikatta, \"was big\"). Past negative: combine both -- drop い, add くなかった: 大きくなかった (ookikunakatta, \"was not big\").",
          "です can still be added after any of these forms purely for politeness, exactly as before: 大きくないです, 大きかったです, 大きくなかったです -- all grammatically complete without です, all more polite with it.",
          "One important irregular exception: いい (ii, \"good\") conjugates using its older root よ (yo) instead of い itself: よくない (not good), よかった (was good), よくなかった (was not good) -- never いくない or いかった."
        ],
        "examples": [
          {
            "es": "大きくない。",
            "en": "Ookikunai. -- Not big."
          },
          {
            "es": "大きかった。",
            "en": "Ookikatta. -- Was big."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "How do you form the negative of an い-adjective like 大きい (big)?",
            "options": [
              "Drop い and add くない (大きくない)",
              "Add ではありません after it",
              "Add ません to the end",
              "い-adjectives cannot be negated"
            ],
            "correctIndex": 0,
            "explanation": "い-adjectives negate by dropping the final い and adding くない -- 大きい becomes 大きくない."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the past-tense form of 大きい.",
            "sentence": "大き___ (was big)",
            "answer": "かった",
            "explanation": "大きかった (ookikatta) is the past tense of 大きい -- drop い, add かった."
          },
          {
            "type": "multiple-choice",
            "question": "What is the irregular negative form of いい (good)?",
            "options": [
              "よくない",
              "いくない",
              "いいくない",
              "いかった"
            ],
            "correctIndex": 0,
            "explanation": "いい is irregular -- it conjugates from the older root よ, giving よくない (not good), never いくない."
          }
        ]
      },
      {
        "heading": "な-adjectives before a noun and as a predicate",
        "body": [
          "な-adjectives need な inserted before a following noun -- hence the name: 静かな図書館 (shizuka na toshokan, \"a quiet library\"). Drop the な entirely when the adjective is the predicate rather than modifying a noun directly, and use です/だ instead, exactly like a noun would: 図書館は静かです (Toshokan wa shizuka desu, \"The library is quiet\") -- no な here, since it's not directly modifying a following noun.",
          "This です actually functions as a real copula here (unlike with い-adjectives), because grammatically a な-adjective predicate behaves like a noun predicate, not like an い-adjective predicate."
        ],
        "examples": [
          {
            "es": "静かな図書館",
            "en": "shizuka na toshokan -- a quiet library"
          },
          {
            "es": "図書館は静かです。",
            "en": "Toshokan wa shizuka desu. -- The library is quiet."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle needed before a noun.",
            "sentence": "静か___図書館 (a quiet library)",
            "answer": "な",
            "explanation": "な-adjectives insert な before a following noun: 静かな図書館."
          },
          {
            "type": "multiple-choice",
            "question": "When 静か is the predicate (not modifying a noun directly), what happens to な?",
            "options": [
              "It's dropped, and です/だ is used instead, like a noun",
              "It stays, as in 図書館は静かなです",
              "It's replaced with い",
              "The sentence becomes ungrammatical"
            ],
            "correctIndex": 0,
            "explanation": "図書館は静かです -- な is dropped as a predicate, and です functions as a real copula, just like with nouns."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Complete the past-tense form of 大きい (big).",
        "sentence": "大き___ means \"was big.\"",
        "answer": "かった",
        "explanation": "い-adjectives form the past by dropping い and adding かった -- 大きい becomes 大きかった."
      },
      {
        "type": "matching",
        "instructions": "Match each adjective form to its meaning.",
        "pairs": [
          {
            "left": "大きくない",
            "right": "not big"
          },
          {
            "left": "大きかった",
            "right": "was big"
          },
          {
            "left": "静かです",
            "right": "is quiet"
          },
          {
            "left": "静かでした",
            "right": "was quiet"
          }
        ],
        "explanation": "い-adjectives (大きい) and な-adjectives (静か) conjugate differently but predictably once you know which family a word belongs to."
      }
    ]
  },
  {
    "slug": "adjectives-i-na-3",
    "level": "JA-A1",
    "number": 18,
    "title": "Adjectives: い-Adjectives and な-Adjectives, Part 3 of 3",
    "summary": "Japanese splits adjectives into two grammatically distinct families -- learn to tell them apart and conjugate each one correctly.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "な-adjective negation and past tense",
        "body": [
          "Because な-adjectives behave like nouns as predicates, they negate and go to the past tense the exact same way です does (from Lesson 2): 静かではありません / 静かじゃありません (\"not quiet\"), 静かでした (\"was quiet\"), 静かではありませんでした / 静かじゃありませんでした (\"was not quiet\").",
          "This is genuinely good news: you don't need to learn a new conjugation pattern for な-adjectives at all -- the です conjugation table you already memorized in Lesson 2 covers them completely."
        ],
        "examples": [
          {
            "es": "静かじゃありません。",
            "en": "Shizuka ja arimasen. -- Not quiet."
          },
          {
            "es": "静かでした。",
            "en": "Shizuka deshita. -- Was quiet."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each な-adjective form to its です equivalent from Lesson 2.",
            "pairs": [
              {
                "left": "静かです",
                "right": "です (present affirmative)"
              },
              {
                "left": "静かじゃありません",
                "right": "じゃありません (present negative)"
              },
              {
                "left": "静かでした",
                "right": "でした (past affirmative)"
              }
            ],
            "explanation": "な-adjectives conjugate exactly like です, since they function grammatically like nouns as predicates."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the casual negative form.",
            "sentence": "静か___ (casual: not quiet)",
            "answer": "じゃありません",
            "explanation": "静かじゃありません -- な-adjectives negate exactly like です, using じゃありません/ではありません."
          },
          {
            "type": "multiple-choice",
            "question": "Why do な-adjectives conjugate exactly like です?",
            "options": [
              "Because な-adjectives function grammatically like nouns as predicates",
              "Because they are secretly い-adjectives",
              "Because all Japanese adjectives conjugate identically",
              "There is no real reason -- it's a coincidence"
            ],
            "correctIndex": 0,
            "explanation": "な-adjectives behave like nouns when used as predicates, so the same です conjugation table from Lesson 2 applies directly."
          }
        ]
      },
      {
        "heading": "い vs. な at a glance",
        "body": [
          "い-adjective (大きい, big): before a noun, attach directly (大きい本); negate by dropping い and adding くない (大きくない); past by dropping い and adding かった (大きかった).",
          "な-adjective (静か, quiet): before a noun, insert な (静かな図書館); negate and go to the past exactly like です (静かじゃありません, 静かでした).",
          "With verbs, particles, adjectives, and numbers now all covered, you have the core grammar toolkit of this entire A1 module. The final lesson ties everything together with time expressions, daily routine vocabulary, and a full review."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each adjective to its family.",
            "pairs": [
              {
                "left": "大きい",
                "right": "い-adjective"
              },
              {
                "left": "静か",
                "right": "な-adjective"
              },
              {
                "left": "おいしい",
                "right": "い-adjective"
              },
              {
                "left": "元気",
                "right": "な-adjective"
              }
            ],
            "explanation": "大きい and おいしい end in い and are い-adjectives; 静か and 元気 are な-adjectives that need な before a noun."
          },
          {
            "type": "multi-select",
            "question": "Which statements correctly describe い-adjectives vs. な-adjectives?",
            "options": [
              "い-adjectives negate by dropping い and adding くない",
              "な-adjectives negate exactly like です (じゃありません)",
              "な-adjectives attach directly to a noun with no extra word",
              "い-adjectives insert な before a following noun"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "い-adjectives conjugate on their own (くない/かった); な-adjectives conjugate exactly like です and require な before a noun -- the last two options describe it backwards."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Arrange these words to say \"The library is quiet.\"",
        "words": [
          "図書館",
          "は",
          "静か",
          "です"
        ],
        "translation": "The library is quiet.",
        "explanation": "図書館は静かです drops な (since 静か is the predicate here, not modifying a following noun) and uses です as a true copula."
      },
      {
        "type": "multiple-choice",
        "question": "What's irregular about いい (good) compared to other い-adjectives?",
        "options": [
          "It conjugates using the older root よ instead of い (よくない, よかった)",
          "It cannot be negated at all",
          "It's actually a な-adjective in disguise",
          "It never appears before a noun"
        ],
        "correctIndex": 0,
        "explanation": "いい is a known irregular い-adjective: its conjugated forms use よ instead of い -- よくない, not いくない."
      }
    ]
  },
  {
    "slug": "time-days-daily-routine-review-1",
    "level": "JA-A1",
    "number": 19,
    "title": "Time, Days, and Daily Routine (A1 Module Review), Part 1 of 3",
    "summary": "Telling time, naming days of the week, describing a daily routine -- and a full review pulling together everything from this A1 module.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Telling time: 時 and 分",
        "body": [
          "時 (じ/ji) attaches to a Sino-Japanese number to mean \"o'clock\": 一時 (ichi-ji, 1 o'clock), 二時 (ni-ji, 2 o'clock), 三時 (san-ji, 3 o'clock) -- straightforward, with one irregularity: 四時 is yo-ji (not shi-ji), following the same し-avoidance pattern from the numbers lesson.",
          "分 (ふん/ぷん, fun/pun) means \"minutes,\" and -- like 本 from the counters lesson -- its pronunciation shifts depending on the preceding number: 一分 (いっぷん, ippun), 二分 (にふん, nifun), 三分 (さんぷん, sanpun). You don't need to memorize every shift perfectly right now; recognizing that this kind of sound change is a normal, recurring pattern (not a random exception) is the useful takeaway.",
          "Putting them together: 三時半 (san-ji han, \"3:30\" -- 半/han means \"half\") or 三時十五分 (san-ji juugo-fun, \"3:15\")."
        ],
        "examples": [
          {
            "es": "三時半です。",
            "en": "San-ji han desu. -- It's 3:30."
          },
          {
            "es": "七時に起きます。",
            "en": "Shichi-ji ni okimasu. -- I wake up at 7."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the irregular reading for \"4 o'clock\"?",
            "options": [
              "四時 (yo-ji)",
              "四時 (shi-ji)",
              "四時 (yon-ji)",
              "四時 (go-ji)"
            ],
            "correctIndex": 0,
            "explanation": "四時 is read yo-ji (not shi-ji), following the same し-avoidance pattern seen with numbers."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the word meaning \"half,\" used for the :30 mark.",
            "sentence": "三時___ (3:30)",
            "answer": "半",
            "explanation": "半 (han) means \"half\" -- 三時半, \"3:30.\""
          }
        ]
      },
      {
        "heading": "Days of the week: 曜日",
        "body": [
          "The seven days each end in 曜日 (youbi): 月曜日 (getsuyoubi, Monday -- 月, moon), 火曜日 (kayoubi, Tuesday -- 火, fire), 水曜日 (suiyoubi, Wednesday -- 水, water), 木曜日 (mokuyoubi, Thursday -- 木, tree/wood), 金曜日 (kinyoubi, Friday -- 金, gold/metal), 土曜日 (doyoubi, Saturday -- 土, earth), 日曜日 (nichiyoubi, Sunday -- 日, sun).",
          "Each day is named after one of five classical elements (fire, water, wood, metal, earth) plus the sun and moon -- a pattern with roots shared, distantly, with several other East Asian calendar traditions.",
          "何曜日ですか？(Nan youbi desu ka? -- \"What day is it?\") 今日は月曜日です。(Kyou wa getsuyoubi desu. -- \"Today is Monday.\") 今日 (kyou) means \"today.\""
        ],
        "examples": [
          {
            "es": "今日は何曜日ですか？",
            "en": "Kyou wa nan youbi desu ka? -- What day is today?"
          },
          {
            "es": "今日は月曜日です。",
            "en": "Kyou wa getsuyoubi desu. -- Today is Monday."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which day is 水曜日?",
            "options": [
              "Wednesday",
              "Monday",
              "Friday",
              "Sunday"
            ],
            "correctIndex": 0,
            "explanation": "水曜日 (suiyoubi) is Wednesday -- 水 means \"water.\""
          },
          {
            "type": "matching",
            "instructions": "Match each day to its element/meaning.",
            "pairs": [
              {
                "left": "月曜日",
                "right": "Monday (moon)"
              },
              {
                "left": "火曜日",
                "right": "Tuesday (fire)"
              },
              {
                "left": "金曜日",
                "right": "Friday (gold/metal)"
              },
              {
                "left": "日曜日",
                "right": "Sunday (sun)"
              }
            ],
            "explanation": "Each day of the week is named after an element or celestial body: moon, fire, water, wood, gold/metal, earth, sun."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the ending shared by all days of the week.",
            "sentence": "月___ (Monday)",
            "answer": "曜日",
            "explanation": "曜日 (youbi) is the shared ending for all seven days of the week."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What does 何曜日ですか？ ask?",
        "options": [
          "What day of the week is it?",
          "What time is it?",
          "Where is it?",
          "Who is it?"
        ],
        "correctIndex": 0,
        "explanation": "何曜日ですか？(Nan youbi desu ka?) asks \"What day of the week is it?\""
      }
    ]
  },
  {
    "slug": "time-days-daily-routine-review-2",
    "level": "JA-A1",
    "number": 20,
    "title": "Time, Days, and Daily Routine (A1 Module Review), Part 2 of 3",
    "summary": "Telling time, naming days of the week, describing a daily routine -- and a full review pulling together everything from this A1 module.",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Daily routine vocabulary",
        "body": [
          "起きます (okimasu, wake up/get up), 寝ます (nemasu, sleep/go to bed), 働きます (hatarakimasu, work), 勉強します (benkyou shimasu, study), 食べます、飲みます、行きます (from Lesson 6) all combine naturally with the time expressions above: 毎朝七時に起きます (Mai-asa shichi-ji ni okimasu, \"[I] wake up at 7 every morning\"). 毎朝 (mai-asa) means \"every morning.\"",
          "毎 (mai) is a useful prefix meaning \"every,\" combining with several time words: 毎日 (mainichi, every day), 毎週 (maishuu, every week), 毎晩 (maiban, every night)."
        ],
        "examples": [
          {
            "es": "毎朝七時に起きます。",
            "en": "Mai-asa shichi-ji ni okimasu. -- I wake up at 7 every morning."
          },
          {
            "es": "毎日勉強します。",
            "en": "Mainichi benkyou shimasu. -- I study every day."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each verb to its meaning.",
            "pairs": [
              {
                "left": "起きます",
                "right": "wake up/get up"
              },
              {
                "left": "寝ます",
                "right": "sleep/go to bed"
              },
              {
                "left": "働きます",
                "right": "work"
              },
              {
                "left": "勉強します",
                "right": "study"
              }
            ],
            "explanation": "These are core daily-routine verbs that combine naturally with time expressions."
          },
          {
            "type": "multiple-choice",
            "question": "What does the prefix 毎 (mai) mean, as in 毎朝 or 毎日?",
            "options": [
              "\"Every\" (every morning, every day)",
              "\"Never\"",
              "\"Sometimes\"",
              "\"Last\" (last morning, last day)"
            ],
            "correctIndex": 0,
            "explanation": "毎 means \"every\" -- 毎朝 (every morning), 毎日 (every day), 毎週 (every week), 毎晩 (every night)."
          }
        ]
      },
      {
        "heading": "A full daily-routine paragraph",
        "body": [
          "Combining nearly everything from this module: 毎朝七時に起きます。学校で勉強します。友達とご飯を食べます。図書館は静かです。よく本を読みます。夜十時に寝ます。(\"Every morning I wake up at 7. I study at school. I eat a meal with friends. The library is quiet. I often read books. I go to sleep at 10 at night.\")",
          "ご飯 (gohan) literally means \"cooked rice\" but functions as the general word for \"a meal\" in casual conversation. よく (yoku) means \"often,\" placed before the verb it modifies. 夜 (yoru) means \"night.\"",
          "Notice how much of this paragraph reuses is/particles/verb patterns from every earlier lesson in this module -- that repetition, across different vocabulary, is exactly what makes the grammar start to feel automatic."
        ],
        "examples": [
          {
            "es": "友達とご飯を食べます。",
            "en": "Tomodachi to gohan o tabemasu. -- I eat a meal with friends."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Fill in the word for a general meal (literally \"cooked rice\").",
            "sentence": "友達と___を食べます。 (I eat a meal with friends.)",
            "answer": "ご飯",
            "explanation": "ご飯 (gohan) literally means \"cooked rice\" but is the general casual word for \"a meal.\""
          },
          {
            "type": "word-order",
            "prompt": "Put the words in order to say \"I often read books.\"",
            "words": [
              "よく",
              "本",
              "を",
              "読みます"
            ],
            "translation": "I often read books.",
            "explanation": "よく本を読みます -- よく (often) + 本 (books) + を (object marker) + 読みます (read)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "Which of these are true about telling time in Japanese?",
        "options": [
          "時 attaches to a number to mean \"o'clock\"",
          "四時 (4 o'clock) is read \"yo-ji,\" not \"shi-ji\"",
          "分 (minutes) never changes its pronunciation",
          "半 means \"half,\" as in 三時半 (3:30)"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "時 means o'clock, 四時 avoids the し reading, and 半 means \"half\" -- but 分's pronunciation does shift (ippun, nifun, sanpun...) depending on the preceding number."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the day of the week that means \"moon day.\"",
        "sentence": "___曜日 means Monday (based on 月, moon).",
        "answer": "月",
        "explanation": "月曜日 (getsuyoubi) is Monday, named after 月 (moon)."
      }
    ]
  },
  {
    "slug": "time-days-daily-routine-review-3",
    "level": "JA-A1",
    "number": 21,
    "title": "Time, Days, and Daily Routine (A1 Module Review), Part 3 of 3",
    "summary": "Telling time, naming days of the week, describing a daily routine -- and a full review pulling together everything from this A1 module.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Module review: what you've covered",
        "body": [
          "Across this A1 module: greetings and self-introductions; the X は Y です pattern with its negative, question, and past forms; pronouns, demonstratives (これ/それ/あれ, この/その/あの), and question words; the six core particles (は, が, を, に, で, と); two number systems plus counters; ます-form verbs with their negatives, motion verbs with に, and あります/います for existence; and both adjective families (い and な) with their full conjugation patterns.",
          "That's a genuinely functional A1 foundation -- enough to introduce yourself, describe your day, count and ask about basic quantities, and form simple negative and past-tense statements and questions across nouns, verbs, and adjectives alike."
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each grammar point to what it does.",
            "pairs": [
              {
                "left": "は",
                "right": "marks the topic"
              },
              {
                "left": "を",
                "right": "marks the direct object"
              },
              {
                "left": "に",
                "right": "marks time, destination, or existence"
              },
              {
                "left": "ません",
                "right": "negates a ます verb"
              },
              {
                "left": "でした",
                "right": "past tense of です"
              }
            ],
            "explanation": "A cumulative recap of the core particles and conjugation endings covered across this A1 module."
          },
          {
            "type": "multi-select",
            "question": "Which of these are true about this A1 module's grammar?",
            "options": [
              "い-adjectives conjugate on their own (くない, かった)",
              "な-adjectives conjugate exactly like です",
              "あります is used for animate beings like people and cats",
              "が often introduces new information or marks emphasis"
            ],
            "correctIndexes": [
              0,
              1,
              3
            ],
            "explanation": "あります is for inanimate objects -- います is used for animate beings; the other three statements are correct summaries of what this module covered."
          }
        ]
      },
      {
        "heading": "Where to go from here",
        "body": [
          "From this foundation, A2-level Japanese would typically continue into the te-form (て form) -- a single verb conjugation that unlocks requests, ongoing actions, sequences of actions, and permission-asking, all from one shape -- along with more particles, more natural conversational patterns, and casual (plain) speech alongside the polite ます/です forms this module focused on exclusively.",
          "For now, revisit any lesson in this module that still feels shaky before moving on -- the grammar here (especially です, ます, and the two adjective families) is genuinely foundational, and it's worth it being solid rather than rushed."
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each grammar point to its category.",
        "pairs": [
          {
            "left": "は, が, を, に, で, と",
            "right": "Core particles"
          },
          {
            "left": "これ・それ・あれ",
            "right": "Demonstratives"
          },
          {
            "left": "大きい / 静か",
            "right": "い-adjectives and な-adjectives"
          },
          {
            "left": "食べます / ません",
            "right": "ます-form verbs and their negative"
          }
        ],
        "explanation": "Each grammar point built on the ones before it across this module's eight lessons."
      },
      {
        "type": "word-order",
        "prompt": "Arrange these words to say \"I wake up at 7 every morning.\"",
        "words": [
          "毎朝",
          "七時",
          "に",
          "起きます"
        ],
        "translation": "I wake up at 7 every morning.",
        "explanation": "毎朝七時に起きます places the time expression (毎朝七時に) before the verb (起きます), following standard Japanese word order."
      }
    ]
  }
];
