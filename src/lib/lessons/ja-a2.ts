import type { Lesson } from "./types";

export const JA_A2_LESSONS: Lesson[] = [
  {
    "slug": "te-form-formation-requests-1",
    "level": "JA-A2",
    "number": 1,
    "title": "The Te-Form: Requests and Sequences, Part 1 of 3",
    "summary": "Learn how to build the て-form for all three verb groups, then put it to work making polite requests with ください and linking two actions together in a single sentence.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "What the Te-Form Is For",
        "body": [
          "Every verb you learned in JA-A1 was in the ます form -- polite, and always locked to present/future or negative. The て-form is different: it isn't a tense at all. It's a connector form, similar in spirit to '-ing' or 'and' in English, that lets a verb plug into other grammar patterns instead of ending a sentence by itself.",
          "The name comes from the fact that almost every te-form ends in て, or in で when the sound of the verb calls for a voiced (softer, buzzier) version of that same ending. You'll learn exactly which verbs get which ending in the next two sections.",
          "This lesson covers the two most useful beginner jobs the te-form does: turning a verb into a polite request with て + ください ('please do X'), and chaining two actions together in one sentence ('do X, and then Y'). Once you're comfortable with these, the te-form will keep reappearing in almost every grammar pattern you learn from here on, so it's worth getting solid now."
        ],
        "examples": [
          {
            "es": "ちょっと待ってください。",
            "en": "chotto matte kudasai. -- Please wait a moment."
          },
          {
            "es": "顔を洗って、着替えます。",
            "en": "kao o aratte, kigaemasu. -- I wash my face and get dressed."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does the て-form primarily function as in Japanese grammar?",
            "options": [
              "A past-tense marker",
              "A connector form that links a verb to requests and to other verbs",
              "A question marker",
              "A counter suffix for objects"
            ],
            "correctIndex": 1,
            "explanation": "The て-form doesn't mark tense by itself -- it connects a verb to what comes next, whether that's ください for a request or another verb for a sequence of actions."
          },
          {
            "type": "multi-select",
            "question": "Which of the following are common uses of the て-form? (Select all that apply)",
            "options": [
              "Making polite requests with ください",
              "Linking two actions in one sentence",
              "Expressing distant past tense",
              "Counting objects"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "This lesson focuses on て + ください for requests and て-form chaining for sequential actions. Tense and counting are separate topics."
          }
        ]
      },
      {
        "heading": "Te-Form for Godan (U-Verb) Group",
        "body": [
          "Godan verbs -- the group with sound-based endings you first met in JA-A1 -- form their te-form by looking at the last syllable of the dictionary form and swapping it for a set ending. Group them by sound: う, つ, and る all become って; ぬ, ぶ, and む all become んで; く becomes いて; ぐ becomes いで; and す becomes して.",
          "These aren't random -- they cluster by how the mouth makes the sound. う/つ/る all involve a quick stop of air, so they all collapse into the small っ plus て. ぬ/ぶ/む are all nasal sounds, so they soften into んで with a voiced で. く and ぐ are a plain/voiced pair, so they become いて and いで respectively. す stands alone and becomes して.",
          "There is one famous exception you must simply memorize: 行く (iku, 'to go') looks like a く-verb, so you'd expect 行いて, but it's actually irregular and becomes 行って, following the う/つ/る pattern instead. This is the single most common te-form mistake beginners make, so it's worth burning into memory right away."
        ],
        "examples": [
          {
            "es": "飲む → 飲んで",
            "en": "nomu → nonde -- to drink → (drinking, and...)"
          },
          {
            "es": "待つ → 待って",
            "en": "matsu → matte -- to wait → (waiting, and...)"
          },
          {
            "es": "行く → 行って",
            "en": "iku → itte -- to go → (going, and...) [irregular]"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Conjugate 飲む (to drink) into its te-form.",
            "sentence": "飲む → ___",
            "answer": "飲んで",
            "hint": "む endings become んで.",
            "explanation": "む is in the ぬ・ぶ・む group, which all become んで. 飲む → 飲んで."
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words to say: 'Please wait a moment.'",
            "words": [
              "ちょっと",
              "待って",
              "ください"
            ],
            "translation": "Please wait a moment.",
            "explanation": "待つ (to wait) is a godan verb ending in つ, so it becomes 待って, followed by ください to make it a polite request."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which te-form matches 買う (to buy)?",
        "options": [
          "買って",
          "買いて",
          "買んで",
          "買して"
        ],
        "correctIndex": 0,
        "explanation": "買う ends in う, which belongs to the う・つ・る group that becomes って: 買って."
      },
      {
        "type": "multiple-choice",
        "question": "Which te-form matches 泳ぐ (to swim)?",
        "options": [
          "泳いて",
          "泳いで",
          "泳して",
          "泳って"
        ],
        "correctIndex": 1,
        "explanation": "ぐ becomes いで (the voiced counterpart of く→いて): 泳ぐ → 泳いで."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate 話す (to speak) into its te-form.",
        "sentence": "話す → ___",
        "answer": "話して",
        "hint": "す endings become して.",
        "explanation": "す is its own group and always becomes して: 話す → 話して."
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank to say: 'Please read this book.'",
        "sentence": "この本を___ください。",
        "answer": "読んで",
        "hint": "読む is a godan む-verb.",
        "explanation": "読む belongs to the ぬ・ぶ・む group, which becomes んで: 読んで + ください."
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank to say: 'I get up and eat breakfast.'",
        "sentence": "___、朝ご飯を食べます。",
        "answer": "起きて",
        "hint": "起きる is ichidan.",
        "explanation": "起きる is ichidan, so drop る and add て: 起きて. The final verb 食べます carries the tense."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say: 'Please write your name here.'",
        "words": [
          "ここ",
          "に",
          "名前",
          "を",
          "書いて",
          "ください"
        ],
        "translation": "Please write your name here.",
        "explanation": "書く is godan く→いて, giving 書いて; combined with ください it forms the polite request."
      }
    ]
  },
  {
    "slug": "te-form-formation-requests-2",
    "level": "JA-A2",
    "number": 2,
    "title": "The Te-Form: Requests and Sequences, Part 2 of 3",
    "summary": "Learn how to build the て-form for all three verb groups, then put it to work making polite requests with ください and linking two actions together in a single sentence.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Te-Form for Ichidan (Ru-Verb) Group and the Irregulars",
        "body": [
          "Ichidan verbs are the easy group: just drop the final る and add て. 食べる (to eat) becomes 食べて, 見る (to see/watch) becomes 見て, and 起きる (to wake up) becomes 起きて. There's no sound-matching table to worry about here -- it's the same rule every time.",
          "The catch is remembering which る-verbs are actually ichidan. As you learned in JA-A1, some verbs that end in る are secretly godan 'shape-fakers' -- 帰る (to go home), for instance, is godan, so its te-form follows the godan って rule: 帰る → 帰って, not 帰て. When you meet a new る-verb, you still need to know its group before you can conjugate it correctly.",
          "Finally, the two true irregulars: する (to do) becomes して, and 来る (くる, to come) becomes 来て, read きて -- notice the kanji reading itself changes from くる to きて. These two don't follow any pattern; they just have to be memorized, but since する and 来る are both extremely common verbs, you'll see them constantly."
        ],
        "examples": [
          {
            "es": "食べる → 食べて",
            "en": "taberu → tabete -- to eat → (eating, and...)"
          },
          {
            "es": "する → して",
            "en": "suru → shite -- to do → (doing, and...)"
          },
          {
            "es": "来る → 来て",
            "en": "kuru → kite -- to come → (coming, and...)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which is the correct te-form of 食べる (to eat)?",
            "options": [
              "食べて",
              "食べって",
              "食べいて",
              "食べんで"
            ],
            "correctIndex": 0,
            "explanation": "食べる is ichidan, so you simply drop る and add て: 食べて."
          },
          {
            "type": "fill-blank",
            "prompt": "Conjugate 来る (to come) into its te-form, using kanji and kana.",
            "sentence": "来る → ___",
            "answer": "来て",
            "hint": "This is an irregular verb: くる becomes きて.",
            "explanation": "来る is irregular. Its te-form is 来て, read きて, not 来いて or any pattern-based form."
          }
        ]
      },
      {
        "heading": "Polite Requests: Te-Form + ください",
        "body": [
          "Once you can form the て-form, one of its most immediately useful jobs is making a polite request: て-form + ください means 'please do ~'. This is different from ます, which just states that an action happens -- ください actively asks someone else to do something, so it's what you'll use with teachers, shopkeepers, coworkers, or anyone you're politely asking for a favor.",
          "The pattern slots into the sentence exactly where the verb would normally go: [object] を [te-form] ください. For example, ここに名前を書いてください keeps the familiar を marking the object (名前, 'name') before the verb, and ください simply attaches after the te-form verb at the end.",
          "You'll see this construction everywhere in real life -- on signs, in instructions, from clerks and teachers. For now, always keep ください attached for politeness; dropping it turns the sentence into blunt casual speech, and the negative version of this pattern ('please don't do X') is a separate grammar point you'll learn later."
        ],
        "examples": [
          {
            "es": "ここに名前を書いてください。",
            "en": "koko ni namae o kaite kudasai. -- Please write your name here."
          },
          {
            "es": "窓を開けてください。",
            "en": "mado o akete kudasai. -- Please open the window."
          },
          {
            "es": "少し待ってください。",
            "en": "sukoshi matte kudasai. -- Please wait a little."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange the words to say: 'Please open the window.'",
            "words": [
              "窓",
              "を",
              "開けて",
              "ください"
            ],
            "translation": "Please open the window.",
            "explanation": "窓 (window) is marked with を as the object, followed by the te-form 開けて and then ください to form the polite request."
          },
          {
            "type": "multiple-choice",
            "question": "Which particle belongs between 名前 (name) and 書いてください in 'Please write your name here' (ここに名前___書いてください)?",
            "options": [
              "は",
              "を",
              "に",
              "で"
            ],
            "correctIndex": 1,
            "explanation": "名前 is the direct object of 書く (to write), so it takes the object particle を: 名前を書いてください."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Arrange the words to say: 'I go to school and study.'",
        "words": [
          "学校",
          "へ",
          "行って",
          "勉強します"
        ],
        "translation": "I go to school and study.",
        "explanation": "行く is irregular, becoming 行って; the final verb 勉強します carries the ます tense for the whole sentence."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say: 'Please look at this.'",
        "words": [
          "これ",
          "を",
          "見て",
          "ください"
        ],
        "translation": "Please look at this.",
        "explanation": "見る is ichidan, so its te-form is simply 見て; adding ください makes it a polite request."
      },
      {
        "type": "multi-select",
        "question": "Which of these are ichidan (ru-verb) te-forms, formed by simply dropping る and adding て? (Select all that apply)",
        "options": [
          "食べて",
          "飲んで",
          "見て",
          "起きて"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "食べて, 見て, and 起きて all come from ichidan verbs (食べる, 見る, 起きる). 飲んで comes from the godan verb 飲む."
      },
      {
        "type": "multi-select",
        "question": "Which sentences are grammatically correct polite requests using て + ください? (Select all that apply)",
        "options": [
          "窓を開けてください。",
          "窓を開けますください。",
          "ドアを閉めてください。",
          "ドアを閉めるください。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "ください must attach directly to a te-form verb -- not to ます form (開けます) or dictionary form (閉める)."
      },
      {
        "type": "matching",
        "instructions": "Match each dictionary-form verb with its correct te-form.",
        "pairs": [
          {
            "left": "待つ",
            "right": "待って"
          },
          {
            "left": "遊ぶ",
            "right": "遊んで"
          },
          {
            "left": "帰る",
            "right": "帰って"
          },
          {
            "left": "聞く",
            "right": "聞いて"
          },
          {
            "left": "する",
            "right": "して"
          }
        ],
        "explanation": "待つ (つ→って), 遊ぶ (ぶ→んで), 帰る (godan る→って), 聞く (く→いて), and する (irregular→して)."
      }
    ]
  },
  {
    "slug": "te-form-formation-requests-3",
    "level": "JA-A2",
    "number": 3,
    "title": "The Te-Form: Requests and Sequences, Part 3 of 3",
    "summary": "Learn how to build the て-form for all three verb groups, then put it to work making polite requests with ください and linking two actions together in a single sentence.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Linking Two Actions in Sequence",
        "body": [
          "The second core use of the te-form is joining two or more actions into a single sentence, roughly 'do X, and then Y'. Instead of saying two separate ます sentences, you leave the earlier verb(s) in te-form and only conjugate the very last verb to ます, letting it carry the tense and politeness for the whole sentence.",
          "This mirrors how you'd naturally describe a sequence of events in English with 'and': 朝起きて、コーヒーを飲みます literally strings together 'wake up' and 'drink coffee' into one flowing sentence, with the implication that the actions happen in that order.",
          "You aren't limited to two actions -- you can chain three or more te-forms in a row before the final ます verb, such as 起きて、顔を洗って、朝ご飯を食べます ('I wake up, wash my face, and eat breakfast'). Only the very last verb in the chain gets conjugated; everything before it stays in te-form."
        ],
        "examples": [
          {
            "es": "朝起きて、コーヒーを飲みます。",
            "en": "asa okite, koohii o nomimasu. -- I wake up in the morning and drink coffee."
          },
          {
            "es": "図書館へ行って、本を読みます。",
            "en": "toshokan e itte, hon o yomimasu. -- I go to the library and read a book."
          },
          {
            "es": "宿題をして、寝ます。",
            "en": "shukudai o shite, nemasu. -- I do my homework and (then) sleep."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Fill in the blank to say: 'I go to the library and read a book.'",
            "sentence": "図書館へ___、本を読みます。",
            "answer": "行って",
            "hint": "行く is irregular in the te-form.",
            "explanation": "行く becomes 行って (not 行いて), the one exception in the godan く group. The final verb, 読みます, carries the tense."
          },
          {
            "type": "matching",
            "instructions": "Match each dictionary-form verb to its correct te-form, used here for chaining actions.",
            "pairs": [
              {
                "left": "起きる",
                "right": "起きて"
              },
              {
                "left": "読む",
                "right": "読んで"
              },
              {
                "left": "話す",
                "right": "話して"
              },
              {
                "left": "する",
                "right": "して"
              }
            ],
            "explanation": "起きる is ichidan (drop る, add て); 読む is godan む→んで; 話す is godan す→して; する is the irregular して."
          }
        ]
      },
      {
        "heading": "Combining Both Patterns",
        "body": [
          "Now that you know both uses, notice how similar they look on the surface -- both simply take a te-form verb and attach something after it, either ください for a request or another verb (ending in ます) for a sequence. The difference is entirely in what follows the te-form, not in how the te-form itself is built.",
          "This is also a good moment to add a few more everyday verbs to your toolkit: 開ける/閉める (to open/close), 話す (to speak), 見る (to watch/see), and 聞く (to listen/hear) all show up constantly in both requests and sequences, so practicing them in both patterns pays off twice.",
          "Compare how differently the same verb behaves depending on context: 見てください asks someone to look at something right now, while テレビを見て、寝ます describes a personal routine -- watching TV and then going to sleep. Same te-form, two very different jobs."
        ],
        "examples": [
          {
            "es": "テレビを見て、寝ます。",
            "en": "terebi o mite, nemasu. -- I watch TV and go to sleep."
          },
          {
            "es": "先生の話を聞いてください。",
            "en": "sensei no hanashi o kiite kudasai. -- Please listen to the teacher's talk."
          },
          {
            "es": "ドアを閉めてください。",
            "en": "doa o shimete kudasai. -- Please close the door."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Which sentences correctly use the て-form to link two actions? (Select all that apply)",
            "options": [
              "テレビを見て、寝ます。",
              "テレビを見ます、寝ます。",
              "宿題をして、寝ます。",
              "宿題をします、して寝ます。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Only the final verb in a chain is conjugated to ます; earlier verbs must stay in te-form (見て, して), not ます form."
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words to say: 'Please close the door.'",
            "words": [
              "ドア",
              "を",
              "閉めて",
              "ください"
            ],
            "translation": "Please close the door.",
            "explanation": "閉める is ichidan, so its te-form is 閉めて; combined with ください it forms a polite request."
          }
        ]
      },
      {
        "heading": "Common Pitfalls and a Quick Review",
        "body": [
          "The three mistakes beginners make most often: forgetting that 行く is irregular (行って, not 行いて); mixing up ichidan verbs with godan 'shape-faker' る-verbs (食べて vs. 帰って); and forgetting to voice the ending after ぬ・ぶ・む, writing んて instead of the correct んで.",
          "A reliable strategy: when you meet a new verb, first recall its group from JA-A1 (godan, ichidan, or irregular), then apply the matching rule -- sound-based endings for godan, drop-る-add-て for ichidan, and memorized forms for する/来る. The te-form itself never changes based on what follows it, so once you've built it correctly, it works equally well before ください or before another verb.",
          "Keep practicing this conjugation until it's automatic: the て-form is the gateway to a huge amount of grammar ahead, including describing ongoing actions, asking permission, and more. Everything from here builds on the exact forms you just learned."
        ],
        "examples": [
          {
            "es": "飲んでください。",
            "en": "nonde kudasai. -- Please drink."
          },
          {
            "es": "早く起きて、勉強します。",
            "en": "hayaku okite, benkyou shimasu. -- I get up early and study."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each verb-ending group to its te-form pattern.",
            "pairs": [
              {
                "left": "う・つ・る",
                "right": "って"
              },
              {
                "left": "ぬ・ぶ・む",
                "right": "んで"
              },
              {
                "left": "く",
                "right": "いて"
              },
              {
                "left": "ぐ",
                "right": "いで"
              },
              {
                "left": "す",
                "right": "して"
              }
            ],
            "explanation": "These five sound-based groups cover every regular godan verb's te-form conjugation."
          },
          {
            "type": "multiple-choice",
            "question": "What is the te-form of 行く (to go)? Careful -- it's an exception!",
            "options": [
              "行いて",
              "行って",
              "行んで",
              "行して"
            ],
            "correctIndex": 1,
            "explanation": "行く looks like a く-verb but is irregular, following the う・つ・る pattern instead: 行って."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which verb group does 話す belong to, and what te-form does that produce?",
        "options": [
          "Ichidan; 話て",
          "Godan; 話して",
          "Irregular; 話して",
          "Godan; 話いて"
        ],
        "correctIndex": 1,
        "explanation": "話す is a regular godan verb ending in す, so it follows the す→して rule: 話して."
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank to say: 'Please come here.'",
        "sentence": "ここに___ください。",
        "answer": "来て",
        "hint": "来る is irregular: くる → きて.",
        "explanation": "来る is one of the two true irregulars. Its te-form is 来て, read きて."
      },
      {
        "type": "multiple-choice",
        "question": "In the sentence 「顔を洗って、着替えます」, what role does 洗って (te-form) play?",
        "options": [
          "It marks the sentence as a question.",
          "It links to the next action, 着替えます, showing a sequence of events.",
          "It is the main polite verb of the sentence.",
          "It negates the following verb."
        ],
        "correctIndex": 1,
        "explanation": "洗って is the te-form of 洗う, linking 'wash (face)' to the following action 着替えます ('get dressed'). Only the final verb carries ます."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say: 'I read a book and (then) sleep.'",
        "words": [
          "本",
          "を",
          "読んで",
          "寝ます"
        ],
        "translation": "I read a book and sleep.",
        "explanation": "読む becomes 読んで (む→んで), and the final verb 寝ます carries the tense for the whole sentence."
      },
      {
        "type": "fill-blank",
        "prompt": "Conjugate 遊ぶ (to play / hang out) into its te-form.",
        "sentence": "遊ぶ → ___",
        "answer": "遊んで",
        "hint": "ぶ endings become んで.",
        "explanation": "ぶ belongs to the ぬ・ぶ・む group, which all become んで: 遊ぶ → 遊んで."
      }
    ]
  },
  {
    "slug": "te-form-ongoing-permission-prohibition-1",
    "level": "JA-A2",
    "number": 4,
    "title": "The Te-Form, Part 2: Ongoing Actions, Permission, and Prohibition, Part 1 of 3",
    "summary": "Put the te-form you just learned to work in three new ways: describe what's happening right now (or a lasting state) with ～ている, politely ask for permission with ～てもいいですか, and state firm prohibitions with ～てはいけません.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Same Te-Form, Three New Jobs",
        "body": [
          "In the last lesson you learned how to build the te-form for any verb — godan, ichidan, or irregular — and you used it with ください to make polite requests like 待ってください (please wait) or 座ってください (please sit down). Good news: the hard part is already behind you. Everything in this lesson reuses the exact same te-form you already know how to build. Nothing new gets conjugated; you just attach different things after it.",
          "In this lesson the te-form takes on three more jobs. Attach います and it describes an action in progress or a lasting state (食べています, 'is eating' / '住んでいます', 'lives [somewhere]'). Attach もいいですか and it becomes a polite request for permission ('is it okay if I...?'). Attach はいけません and it becomes a flat statement that something is forbidden ('you must not...').",
          "Notice the shape of all three: te-form, then a short additional piece. Because the te-form itself never changes based on what follows it, once you can produce 食べて, 飲んで, 話して, 来て, and して confidently, you can immediately use them in all three new patterns below."
        ],
        "examples": [
          {
            "es": "今、テレビを見ています。",
            "en": "ima, terebi o mite imasu. -- I'm watching TV right now."
          },
          {
            "es": "写真を撮ってもいいですか。",
            "en": "shashin o tottemo ii desu ka. -- Is it okay if I take a photo?"
          },
          {
            "es": "ここでタバコを吸ってはいけません。",
            "en": "koko de tabako o suttewa ikemasen. -- You must not smoke here."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "In the sentence 「今、テレビを見ています。」, what job is the て-form + auxiliary doing?",
            "options": [
              "Making a polite request",
              "Describing an action in progress right now",
              "Asking for permission",
              "Stating a prohibition"
            ],
            "correctIndex": 1,
            "explanation": "見ています combines the て-form of 見る with います. Paired with 今 ('now'), this describes an action happening at this very moment — 'I am watching.'"
          },
          {
            "type": "multi-select",
            "question": "Which of these sentences use the て-form as part of their grammar? (Select all that apply.)",
            "options": [
              "今、テレビを見ています。",
              "毎日、テレビを見ます。",
              "写真を撮ってもいいですか。",
              "明日、京都へ行きます。",
              "ここでタバコを吸ってはいけません。"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "見ています (て-form + います), 撮ってもいいですか (て-form + もいいですか), and 吸ってはいけません (て-form + はいけません) all build on the て-form. 見ます and 行きます are plain ます-form verbs with no て-form involved."
          }
        ]
      },
      {
        "heading": "～ている for Actions in Progress",
        "body": [
          "The first new job is formed with te-form + います, the polite form of いる ('to exist,' used for people and animals). Because いる is an ichidan verb, ています conjugates exactly like any other ichidan verb you already know: ています for present/habitual, ていません for negative ('is not doing'), ていました for past ('was doing'), and ていませんでした for past negative.",
          "Its main job is describing an action that is happening right now, in progress at the moment of speaking — much like English '-ing.' It's typically paired with 今 ('now') or answers the question 'what are you doing?' This is a different meaning from the plain ます form you learned in A1: 毎日、パンを食べます means 'I eat bread every day' (a habit or a general fact), while 今、パンを食べています means 'I am eating bread right now' (zoomed into the middle of the action).",
          "Questions work exactly like any other ですか/ますか question: 何をしていますか ('what are you doing?') can be answered はい、～ています or いいえ、～ていません, so this pattern slots neatly into conversations you can already have."
        ],
        "examples": [
          {
            "es": "田中さんは今、電話で話しています。",
            "en": "Tanaka-san wa ima, denwa de hanashite imasu. -- Tanaka-san is talking on the phone right now."
          },
          {
            "es": "子供たちは公園で遊んでいます。",
            "en": "kodomotachi wa kouen de asonde imasu. -- The children are playing in the park."
          },
          {
            "es": "すみません、何をしていますか。－宿題をしています。",
            "en": "sumimasen, nani o shite imasu ka. -- shukudai o shite imasu. -- Excuse me, what are you doing? -- I'm doing homework."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence: 'I am reading a book right now.'",
            "sentence": "今、本を___。",
            "answer": "読んでいます",
            "hint": "て-form of 読む (よむ) + います",
            "explanation": "読む is a godan む-verb, so its て-form is 読んで. Adding います gives 読んでいます, 'am reading' — an action in progress right now."
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words: 'Tanaka-san is talking on the phone right now.'",
            "words": [
              "田中さん",
              "は",
              "今",
              "電話",
              "で",
              "話しています"
            ],
            "translation": "Tanaka-san is talking on the phone right now.",
            "explanation": "は marks the topic (田中さん), 今 gives the time, 電話で marks the means ('by/on the phone'), and 話しています is the te-form + います verb describing the ongoing action."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which sentence describes an action happening at this exact moment?",
        "options": [
          "私は毎朝、六時に起きます。",
          "今、子供たちは公園で遊んでいます。",
          "田中さんは大阪に住んでいます。",
          "私は日本語を勉強しません。"
        ],
        "correctIndex": 1,
        "explanation": "今 plus 遊んでいます (て-form + います on the activity verb 遊ぶ) marks an action in progress right now. The others describe a habit, a stable state, and a plain negative fact."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the sentence: 'Mr. Sato works at a hospital.' (use ～ています)",
        "sentence": "佐藤さんは病院で___。",
        "answer": "働いています",
        "hint": "て-form of 働く (はたらく) + います",
        "explanation": "働く is a godan く-verb, so its て-form は 働いて. Here ています describes Sato's ongoing job — a stable fact about him, not something happening at this second."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words: 'The children are playing in the park.'",
        "words": [
          "子供たち",
          "は",
          "公園",
          "で",
          "遊んでいます"
        ],
        "translation": "The children are playing in the park.",
        "explanation": "は marks the topic, 公園で marks where the action happens, and 遊んでいます (て-form of 遊ぶ + います) describes the ongoing action."
      },
      {
        "type": "multi-select",
        "question": "Which sentences describe a stable STATE, not an action happening at this exact moment? (Select all that apply.)",
        "options": [
          "田中さんは結婚しています。",
          "田中さんは今、コーヒーを飲んでいます。",
          "私は大阪に住んでいます。",
          "子供たちは公園で遊んでいます。",
          "山田さんの電話番号を知っています。"
        ],
        "correctIndexes": [
          0,
          2,
          4
        ],
        "explanation": "結婚しています (married), 住んでいます (lives somewhere), and 知っています (knows) all describe stable, resultant states. 飲んでいます and 遊んでいます describe activities in progress right now."
      },
      {
        "type": "matching",
        "instructions": "Match each dictionary-form verb to its て-form.",
        "pairs": [
          {
            "left": "開ける",
            "right": "開けて"
          },
          {
            "left": "吸う",
            "right": "吸って"
          },
          {
            "left": "住む",
            "right": "住んで"
          },
          {
            "left": "撮る",
            "right": "撮って"
          }
        ],
        "explanation": "A quick review of te-form formation across an ichidan verb (開ける), a godan う-verb (吸う), a godan む-verb (住む), and a godan る-verb (撮る) — the foundation every pattern in this lesson is built on."
      }
    ]
  },
  {
    "slug": "te-form-ongoing-permission-prohibition-2",
    "level": "JA-A2",
    "number": 5,
    "title": "The Te-Form, Part 2: Ongoing Actions, Permission, and Prohibition, Part 2 of 3",
    "summary": "Put the te-form you just learned to work in three new ways: describe what's happening right now (or a lasting state) with ～ている, politely ask for permission with ～てもいいですか, and state firm prohibitions with ～てはいけません.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "～ている for States: Jobs, Marriage, Address, and Knowledge",
        "body": [
          "Here's the twist: with certain verbs, ています doesn't describe an action still happening — it describes a stable state that resulted from an action that already finished. These are verbs describing an instantaneous change rather than a stretched-out activity. 結婚する describes the single event of getting married; 結婚しています therefore doesn't mean 'is in the process of marrying' (that would be strange), it means 'is [currently, as a result of that event] married.' The same logic applies to 住む ('to take up residence'): 住んでいます means 'lives [somewhere], is currently residing there' — not 'is in the middle of moving in.'",
          "知る behaves the same way with its own twist worth memorizing. Learning a fact is a one-time event (information entering your head), so 知っています means 'I know [it]' — the ongoing state of having that information. But to say 'I don't know,' natural Japanese uses the simple negative 知りません, not the grammatically expected 知っていません. Both exist, but 知りません is what you'll hear and should reach for; treat it as a set phrase to memorize alongside 知っています.",
          "Because state-ている and progressive-ている look identical in form, only the verb's meaning and context tell you which reading applies. Verbs naming a momentary change — 結婚する, 住む, 知る, 持つ ('to hold/own,' so 持っています = 'to have'), 覚える ('to memorize,' so 覚えています = 'to remember') — default to the state reading. Verbs naming an extended activity — 食べる, 飲む, 話す, 遊ぶ, 読む — default to the progressive reading you saw in the previous section."
        ],
        "examples": [
          {
            "es": "山田さんは大阪に住んでいます。",
            "en": "Yamada-san wa Oosaka ni sunde imasu. -- Yamada lives in Osaka."
          },
          {
            "es": "私は鈴木さんを知っています。",
            "en": "watashi wa Suzuki-san o shitte imasu. -- I know Suzuki."
          },
          {
            "es": "姉は結婚しています。弟は独身です。",
            "en": "ane wa kekkon shite imasu. otouto wa dokushin desu. -- My older sister is married. My younger brother is single."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each Japanese sentence with its English meaning.",
            "pairs": [
              {
                "left": "山田さんは大阪に住んでいます。",
                "right": "Yamada lives in Osaka."
              },
              {
                "left": "私は鈴木さんを知っています。",
                "right": "I know Suzuki."
              },
              {
                "left": "姉は結婚しています。",
                "right": "My older sister is married."
              },
              {
                "left": "弟は独身です。",
                "right": "My younger brother is single."
              }
            ],
            "explanation": "The first three use ～ている to describe stable states (residence, knowledge, marital status). The last uses plain です with the adjective-like noun 独身 ('single'), since there's no verb-based state to describe — a useful contrast to notice."
          },
          {
            "type": "multiple-choice",
            "question": "Which sentence correctly expresses 'I don't know Mr. Yamada,' using the natural, idiomatic negative?",
            "options": [
              "山田さんを知っていません。",
              "山田さんを知りません。",
              "山田さんを知っています。",
              "山田さんを知ってはいけません。"
            ],
            "correctIndex": 1,
            "explanation": "Even though 知る follows the ている = state pattern, its natural negative is 知りません, not 知っていません. This is a set phrase worth memorizing exactly as is."
          }
        ]
      },
      {
        "heading": "Asking for Permission: ～てもいいですか",
        "body": [
          "The second new pattern is te-form + もいいですか, literally something like 'even if [I do this], is it good?' The も here is the same も you know meaning 'even/also,' and its presence is what softens the sentence — instead of bluntly asking to do something, you're leaving room for the other person to say no.",
          "Use it whenever you want to ask permission in everyday situations: opening a window, borrowing an item, using someone's phone, sitting in a particular seat, smoking, or taking a photo. It's extremely common in classrooms, offices, someone's home, or any time you're unsure whether something is allowed.",
          "Drop the か and ～てもいいですか becomes ～てもいいです, a statement granting permission ('you may...' / 'it's fine if you...'). This is typically said by whoever has the authority to allow it — a teacher, shop staff, or host — either answering a request or offering permission before being asked."
        ],
        "examples": [
          {
            "es": "先生、窓を開けてもいいですか。",
            "en": "sensei, mado o aketemo ii desu ka. -- Teacher, may I open the window?"
          },
          {
            "es": "この電話を使ってもいいですか。",
            "en": "kono denwa o tsukattemo ii desu ka. -- May I use this phone?"
          },
          {
            "es": "はい、座ってもいいですよ。",
            "en": "hai, suwattemo ii desu yo. -- Yes, you may sit down."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the question: 'May I borrow this pen?'",
            "sentence": "このペンを___か。",
            "answer": "借りてもいいです",
            "hint": "て-form of 借りる (かりる) + もいいです",
            "explanation": "借りる is ichidan, so its て-form is 借りて. Adding もいいですか produces 借りてもいいですか, 'may I borrow?'"
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words: 'May I smoke here?'",
            "words": [
              "ここ",
              "で",
              "タバコ",
              "を",
              "吸ってもいいですか"
            ],
            "translation": "May I smoke here?",
            "explanation": "ここで marks the location, タバコを marks the object being smoked, and 吸ってもいいですか is 吸う's て-form with the permission-asking ending."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "田中さんは今、会社で働いています。 Depending on context, this sentence could mean:",
        "options": [
          "Only that Tanaka is at the office working right now, and nothing else.",
          "Either that Tanaka is currently working, or that Tanaka has a job at that company — context decides which.",
          "That Tanaka used to work there but has since quit.",
          "That Tanaka is asking permission to work."
        ],
        "correctIndex": 1,
        "explanation": "働く can be read as an ongoing activity ('is working right now') or, especially without 今, as a stable state ('works at [that company]'). This ambiguity is normal — surrounding context usually makes the intended meaning clear."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the polite request: 'Is it okay if I turn on the air conditioner?'",
        "sentence": "エアコンを___か。",
        "answer": "つけてもいいです",
        "hint": "て-form of つける + もいいです",
        "explanation": "つける is ichidan, so its て-form は つけて. Adding もいいですか produces つけてもいいですか, 'is it okay if I turn it on?'"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words: 'Yamada lives in Osaka.'",
        "words": [
          "山田さん",
          "は",
          "大阪",
          "に",
          "住んでいます"
        ],
        "translation": "Yamada lives in Osaka.",
        "explanation": "山田さんは marks the topic, 大阪に marks the place of residence (に, not で, with 住む), and 住んでいます is the resultant-state ている form."
      },
      {
        "type": "multiple-choice",
        "question": "Which is the most natural way to ask a shopkeeper if you may try on a shirt?",
        "options": [
          "このシャツを試着してもいいですか。",
          "このシャツを試着してはいけません。",
          "このシャツを試着しています。",
          "このシャツを試着しました。"
        ],
        "correctIndex": 0,
        "explanation": "てもいいですか is the pattern for asking permission — 'may I try this shirt on?' The other options state a prohibition, an ongoing action, and a completed past action, none of which ask for permission."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the prohibition: 'You must not drink alcohol here.'",
        "sentence": "ここでお酒を___。",
        "answer": "飲んではいけません",
        "hint": "て-form of 飲む + はいけません",
        "explanation": "飲む is a godan む-verb, so its て-form は 飲んで. Adding はいけません gives the firm prohibition 飲んではいけません。"
      }
    ]
  },
  {
    "slug": "te-form-ongoing-permission-prohibition-3",
    "level": "JA-A2",
    "number": 6,
    "title": "The Te-Form, Part 2: Ongoing Actions, Permission, and Prohibition, Part 3 of 3",
    "summary": "Put the te-form you just learned to work in three new ways: describe what's happening right now (or a lasting state) with ～ている, politely ask for permission with ～てもいいですか, and state firm prohibitions with ～てはいけません.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Granting or Refusing Permission",
        "body": [
          "When someone asks you ～てもいいですか, the easiest affirmative answers are はい/ええ、どうぞ ('yes, please do') or はい、いいですよ ('sure, that's fine'). どうぞ alone is especially handy — a one-word green light you can use constantly.",
          "Refusals are rarely blunt in Japanese. Rather than flatly saying いいえ、だめです ('no, that's not allowed' — which does exist and gets used for firm rules), a personal refusal is usually softened with すみません followed by a trailing ちょっと… ('it's a bit...'), letting the sentence drift off unfinished instead of stating the reason outright. Learning to recognize すみません、ちょっと… as a polite 'no' is an important listening skill — no matter how politely it's phrased, it isn't a yes.",
          "Save direct negative answers like いいえ、いけません for situations involving a real, fixed rule rather than personal preference — for example, staff enforcing a store or building policy, where being direct is expected and understood, not rude."
        ],
        "examples": [
          {
            "es": "A：窓を開けてもいいですか。B：ええ、どうぞ。",
            "en": "A: mado o aketemo ii desu ka. B: ee, douzo. -- A: May I open the window? B: Sure, go ahead."
          },
          {
            "es": "A：ここでタバコを吸ってもいいですか。B：すみません、ここは禁煙です。",
            "en": "A: koko de tabako o suttemo ii desu ka. B: sumimasen, koko wa kin'en desu. -- A: May I smoke here? B: Sorry, this is a no-smoking area."
          },
          {
            "es": "いいですよ。使ってください。",
            "en": "ii desu yo. tsukatte kudasai. -- That's fine. Please go ahead and use it."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "You ask 「トイレを使ってもいいですか。」 and the person replies 「すみません、ちょっと…」. What are they communicating?",
            "options": [
              "Yes, of course, go ahead.",
              "A polite, indirect way of saying no.",
              "They don't understand the question.",
              "They're asking you to wait a moment and then it will be a yes."
            ],
            "correctIndex": 1,
            "explanation": "Trailing off after すみません、ちょっと… is a very common, indirect way to refuse a request without stating the reason bluntly. It should be understood as 'no.'"
          },
          {
            "type": "multi-select",
            "question": "Which responses politely GRANT permission when someone asks 「窓を開けてもいいですか。」? (Select all that apply.)",
            "options": [
              "ええ、どうぞ。",
              "すみません、ちょっと…",
              "はい、いいですよ。",
              "いいえ、だめです。",
              "どうぞ、開けてください。"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "どうぞ, いいですよ, and どうぞ開けてください all grant the request. すみません、ちょっと… is a soft refusal, and いいえ、だめです is a direct refusal — neither grants permission."
          }
        ]
      },
      {
        "heading": "Prohibition: ～てはいけません",
        "body": [
          "The third pattern is te-form + はいけません. The は here is the same contrast-marking は you already know from topics, and its job is to make the statement stronger than a simple negative — roughly 'as for doing this, it does not go / is not acceptable.' いけません comes from a negative form related to 行く ('to go/proceed'), so the underlying feel is something like 'that won't fly.'",
          "Use it for firm prohibitions: rules, laws, and warnings. You'll see this grammar echoed on countless signs around Japan — 禁煙 (no smoking), 撮影禁止 (no photography), 立入禁止 (no entry) — and you'll hear it spoken directly when a teacher, parent, or official states a rule: 図書館で走ってはいけません, 'you must not run in the library.'",
          "Compare it with ～てもいいですか from the previous section: that pattern asks about one specific, personal request and invites a yes-or-no answer. ～てはいけません, by contrast, states a categorical rule as a flat fact — no question mark, no room to negotiate. In casual speech だめ often replaces いけません (～てはだめです), but ～てはいけません is the standard, neutral-polite form worth learning first."
        ],
        "examples": [
          {
            "es": "図書館で走ってはいけません。",
            "en": "toshokan de hashitte wa ikemasen. -- You must not run in the library."
          },
          {
            "es": "ここで写真を撮ってはいけません。",
            "en": "koko de shashin o tottewa ikemasen. -- You must not take photos here."
          },
          {
            "es": "授業中に寝てはいけません。",
            "en": "jugyouchuu ni netewa ikemasen. -- You must not sleep during class."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the sign: 'You must not enter here.'",
            "sentence": "ここに___。",
            "answer": "入ってはいけません",
            "hint": "て-form of 入る (はいる) + はいけません",
            "explanation": "入る looks like an ichidan verb but is actually godan, so its て-form is 入って, not 入て. Adding はいけません gives the firm prohibition 入ってはいけません, 'you must not enter.'"
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words: 'You must not take photos here.'",
            "words": [
              "ここ",
              "で",
              "写真",
              "を",
              "撮ってはいけません"
            ],
            "translation": "You must not take photos here.",
            "explanation": "ここで gives the location, 写真を marks the object, and 撮ってはいけません is 撮る's て-form with the prohibition ending — a sentence you'd see or hear as 撮影禁止 in sign form."
          }
        ]
      },
      {
        "heading": "Putting It All Together",
        "body": [
          "All three patterns share the same starting point — the te-form — but end differently, and those endings are what carry the meaning: ～ています (statement, no か) describes what's happening or what's true right now; ～てもいいですか (question, ends in か) asks whether an action is permitted; ～てはいけません (statement, no か, no room to negotiate) declares that an action is forbidden.",
          "Because ています and てもいいですか both begin the same way, listen and read past the first few syllables before deciding what a sentence is doing — the presence of か and もい is what marks a permission question, while a plain ています ending (or ていました, ていません) marks a description of an ongoing action or state.",
          "The short exchange below shows all three working together in one natural conversation, plus a bonus: the negative form ～ていません ('am not doing'), which you can now recognize as simply ています with the copula turned negative, exactly the way you already handle ません with any other verb."
        ],
        "examples": [
          {
            "es": "すみません、ここに座ってもいいですか。",
            "en": "sumimasen, koko ni suwattemo ii desu ka. -- Excuse me, may I sit here?"
          },
          {
            "es": "ええ、どうぞ。でも、ここでタバコを吸ってはいけませんよ。",
            "en": "ee, douzo. demo, koko de tabako o suttewa ikemasen yo. -- Sure, go ahead. But you mustn't smoke here."
          },
          {
            "es": "分かりました。今、吸っていませんから、大丈夫です。",
            "en": "wakarimashita. ima, sutte imasen kara, daijoubu desu. -- Understood. I'm not smoking right now, so it's fine."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each grammar pattern with what it is used for.",
            "pairs": [
              {
                "left": "～ています",
                "right": "an action in progress right now, or a stable state/result"
              },
              {
                "left": "～てもいいですか",
                "right": "asking for permission to do something"
              },
              {
                "left": "～てはいけません",
                "right": "stating that something is prohibited/forbidden"
              },
              {
                "left": "～てください",
                "right": "making a polite request (review from the previous lesson)"
              }
            ],
            "explanation": "All four patterns build on the te-form you already know how to conjugate; only the ending changes what job the sentence is doing."
          },
          {
            "type": "multiple-choice",
            "question": "A sign in a museum reads 「ここで写真を撮ってはいけません。」 What does it mean?",
            "options": [
              "You may take photos here.",
              "Are you allowed to take photos here?",
              "You must not take photos here.",
              "Someone is taking photos here right now."
            ],
            "correctIndex": 2,
            "explanation": "はいけません with no か is a flat statement of prohibition, not a question — 'you must not take photos here.'"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Arrange the words: 'You must not sleep during class.'",
        "words": [
          "授業中",
          "に",
          "寝てはいけません"
        ],
        "translation": "You must not sleep during class.",
        "explanation": "授業中に marks the time ('during class'), and 寝てはいけません (て-form of 寝る + はいけません) states the prohibition."
      },
      {
        "type": "multi-select",
        "question": "You see museum signs for no photography, no touching, and no smoking. Which sentences correctly state these as prohibitions with ～てはいけません? (Select all that apply.)",
        "options": [
          "ここで写真を撮ってはいけません。",
          "ここでタバコを吸ってもいいですか。",
          "ここで触ってはいけません。",
          "ここでタバコを吸ってはいけません。",
          "ここで写真を撮りません。"
        ],
        "correctIndexes": [
          0,
          2,
          3
        ],
        "explanation": "撮ってはいけません, 触ってはいけません, and 吸ってはいけません all correctly use て-form + はいけません to state prohibitions. 撮ってもいいですか is a permission QUESTION, not a prohibition, and 撮りません is only a plain negative, not the stronger prohibition grammar from this lesson."
      },
      {
        "type": "matching",
        "instructions": "Match each rule with the correct Japanese prohibition sentence.",
        "pairs": [
          {
            "left": "No smoking here",
            "right": "ここでタバコを吸ってはいけません。"
          },
          {
            "left": "No photography here",
            "right": "ここで写真を撮ってはいけません。"
          },
          {
            "left": "No parking here",
            "right": "ここで駐車してはいけません。"
          },
          {
            "left": "Must not run in the library",
            "right": "図書館で走ってはいけません。"
          }
        ],
        "explanation": "Each rule is stated with て-form + はいけません — the pattern you'll see echoed on Japanese signage as 禁煙, 撮影禁止, 駐車禁止, and spoken warnings like this one about running."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence is correct for telling a student 'You must not be late for class'?",
        "options": [
          "授業に遅れてもいいですか。",
          "授業に遅れています。",
          "授業に遅れてはいけません。",
          "授業に遅れました。"
        ],
        "correctIndex": 2,
        "explanation": "遅れてはいけません (て-form of 遅れる + はいけません) states the prohibition. The others ask permission to be late, describe currently being late, and describe having been late in the past."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the sentence describing a stable state: 'I know that restaurant.'",
        "sentence": "あのレストランを___。",
        "answer": "知っています",
        "hint": "て-form of 知る + います",
        "explanation": "知る is godan despite looking ichidan, so its て-form は 知って. 知っています expresses the state of knowing something — remember that the negative 'don't know' is the irregular-feeling 知りません, not 知っていません。"
      }
    ]
  },
  {
    "slug": "past-tense-masu-plain-1",
    "level": "JA-A2",
    "number": 7,
    "title": "Past Tense: Polite and Plain, Part 1 of 3",
    "summary": "Learn to talk about anything that already happened: the polite past of verbs (ました / ませんでした), the past of です (でした / じゃなかったです / ではありませんでした), the past of い-adjectives (かった / くなかった), and a first preview of the plain past (だった / じゃなかった).",
    "duration": "7 min",
    "sections": [
      {
        "heading": "The Polite Past of Verbs: ～ました",
        "body": [
          "In JA-A1 you learned that the ます form covers both present and future actions: 食べます can mean 'I eat' or 'I will eat.' To talk about something that already happened, Deep End keeps the same polite register but swaps the ending: ます becomes ました. So 食べます ('eat / will eat') becomes 食べました ('ate'), and this single change works for every verb, whether it originally ended in ～る, ～う, ～く, or was an irregular verb like する or 来る.",
          "Because the transformation happens on the ます-stem -- the same stem you already use for other polite forms -- there's nothing new to memorize about verb groups. 行きます → 行きました (went), 見ます → 見ました (watched/saw), 勉強します → 勉強しました (studied). The verb's meaning and base stem stay identical; only the very end of the word marks the shift into the past.",
          "Past-tense sentences are usually anchored by a time expression like 昨日 (yesterday), 先週 (last week), or 去年 (last year). These time words typically sit near the front of the sentence and often don't need a particle at all -- unlike nouns marked with は, が, を, に, で, or と, a time word like 昨日 can simply stand on its own before the rest of the sentence."
        ],
        "examples": [
          {
            "es": "昨日、映画を見ました。",
            "en": "kinou, eiga o mimashita. -- Yesterday, I watched a movie."
          },
          {
            "es": "先週、京都に行きました。",
            "en": "senshuu, Kyouto ni ikimashita. -- Last week, I went to Kyoto."
          },
          {
            "es": "今朝、コーヒーを飲みました。",
            "en": "kesa, koohii o nomimashita. -- This morning, I drank coffee."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence with the polite past of 食べる (to eat).",
            "sentence": "朝ご飯を___。",
            "answer": "食べました",
            "hint": "Change the ます-stem's ending from ます to ました.",
            "explanation": "食べます (present/future) becomes 食べました (past) by changing ます to ました. This works the same way for every verb, regardless of type."
          },
          {
            "type": "multiple-choice",
            "question": "Which sentence correctly says 'I went to Kyoto last week'?",
            "options": [
              "先週、京都に行きます。",
              "先週、京都に行きました。",
              "先週、京都に行きませんでした。",
              "先週、京都は行きました。"
            ],
            "correctIndex": 1,
            "explanation": "行きました is the polite past of 行きます (to go). 先週 (last week) signals the past tense, and に marks Kyoto as the destination."
          }
        ]
      },
      {
        "heading": "The Polite Past Negative: ～ませんでした",
        "body": [
          "Just as ません is the polite negative of ます (見ません, 'do not watch'), its past-tense counterpart is ませんでした. This single fixed ending replaces ません whenever the negated action is in the past: 見ません ('do not watch') becomes 見ませんでした ('did not watch').",
          "ませんでした might look long, but it doesn't conjugate any further -- there's no separate 'negative past' stem to learn. You simply take the polite negative form you already know from A1 and add でした onto the end: verb-stem + ません + でした. 勉強しません → 勉強しませんでした (did not study), 会いません → 会いませんでした (did not meet).",
          "This form pairs naturally with words like 全然 (not at all) and あまり (not much), which strengthen or soften the negation, though ませんでした works perfectly well on its own too. Notice that the particle after the verb's object or target doesn't change between affirmative and negative -- only the verb ending shifts."
        ],
        "examples": [
          {
            "es": "昨日、勉強しませんでした。",
            "en": "kinou, benkyou shimasendeshita. -- I didn't study yesterday."
          },
          {
            "es": "今朝、コーヒーを飲みませんでした。",
            "en": "kesa, koohii o nomimasendeshita. -- I didn't drink coffee this morning."
          },
          {
            "es": "週末、友達に会いませんでした。",
            "en": "shuumatsu, tomodachi ni aimasendeshita. -- I didn't meet my friend over the weekend."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange the words to say 'I didn't drink coffee this morning.'",
            "words": [
              "今朝",
              "コーヒー",
              "を",
              "飲みませんでした"
            ],
            "translation": "I didn't drink coffee this morning.",
            "explanation": "ませんでした is the polite past negative ending, replacing ません. 今朝 (this morning) sets the time frame without needing a particle."
          },
          {
            "type": "multi-select",
            "question": "Which of the following are correct polite past NEGATIVE verb forms?",
            "options": [
              "見ませんでした",
              "見ました",
              "飲みませんでした",
              "飲みます"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "見ませんでした (did not see/watch) and 飲みませんでした (did not drink) both use the ～ませんでした ending for polite past negative. 見ました and 飲みます are affirmative forms."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Which is the correct polite past tense of 飲む (to drink)?",
        "options": [
          "飲みます",
          "飲みました",
          "飲みません",
          "飲んでした"
        ],
        "correctIndex": 1,
        "explanation": "飲みます becomes 飲みました by changing ます to ました, the polite past ending."
      },
      {
        "type": "fill-blank",
        "prompt": "Put 行く into the polite past negative to say 'didn't go on a trip.'",
        "sentence": "先週、旅行に___。",
        "answer": "行きませんでした",
        "hint": "Polite past negative of 行きます.",
        "explanation": "行きません (did not go, negative) becomes 行きませんでした in the past, following the ～ませんでした pattern."
      },
      {
        "type": "multiple-choice",
        "question": "先週は忙しかったです。 -- What does this sentence mean?",
        "options": [
          "Last week was busy.",
          "This week is busy.",
          "Last week wasn't busy.",
          "Next week will be busy."
        ],
        "correctIndex": 0,
        "explanation": "忙しかったです is the past tense of the い-adjective 忙しい (busy), and 先週 (last week) sets the time, giving 'Last week was busy.'"
      },
      {
        "type": "multi-select",
        "question": "Which of these correctly mean 'He wasn't a teacher'?",
        "options": [
          "先生でした",
          "先生じゃなかったです",
          "先生ではありませんでした",
          "先生じゃないです"
        ],
        "correctIndexes": [
          1,
          2
        ],
        "explanation": "先生じゃなかったです and 先生ではありませんでした both express past negative. 先生でした is affirmative past, and 先生じゃないです is present negative, not past."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'Yesterday, the weather was good.'",
        "words": [
          "昨日",
          "は",
          "天気",
          "が",
          "よかった",
          "です"
        ],
        "translation": "Yesterday, the weather was good.",
        "explanation": "天気がよかったです is the natural way to say weather 'was good,' with が marking 天気 (weather) and よかった as the irregular past of いい."
      }
    ]
  },
  {
    "slug": "past-tense-masu-plain-2",
    "level": "JA-A2",
    "number": 8,
    "title": "Past Tense: Polite and Plain, Part 2 of 3",
    "summary": "Learn to talk about anything that already happened: the polite past of verbs (ました / ませんでした), the past of です (でした / じゃなかったです / ではありませんでした), the past of い-adjectives (かった / くなかった), and a first preview of the plain past (だった / じゃなかった).",
    "duration": "9 min",
    "sections": [
      {
        "heading": "The Past of です: でした",
        "body": [
          "です itself has a past-tense form, separate from anything verbs do. When です attaches to a noun or a な-adjective, its past form is でした -- 'was' or 'were.' 学生です ('is a student') becomes 学生でした ('was a student'), and 元気です ('is well/fine') becomes 元気でした ('was well/fine').",
          "Unlike a verb, です doesn't change depending on what comes before it -- でした is a single fixed replacement no matter whether the subject is a person, an object, or a situation. This makes it one of the easiest past-tense patterns in Japanese: identify the noun or な-adjective, and swap です for でした.",
          "The same rule applies to な-adjectives, since grammatically they behave like nouns when combined with です. 静かです ('is quiet') → 静かでした ('was quiet'); 有名です ('is famous') → 有名でした ('was famous'). Note that a な-adjective never actually shows its な before です or でした -- that な only appears when the adjective directly modifies a following noun, something you'll see more of in later lessons."
        ],
        "examples": [
          {
            "es": "去年、学生でした。",
            "en": "kyonen, gakusei deshita. -- Last year, I was a student."
          },
          {
            "es": "先週末は静かでした。",
            "en": "senshuumatsu wa shizuka deshita. -- Last weekend was quiet."
          },
          {
            "es": "その先生は有名でした。",
            "en": "sono sensei wa yuumei deshita. -- That teacher was famous."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each present-tense です sentence with its past-tense equivalent.",
            "pairs": [
              {
                "left": "学生です",
                "right": "学生でした"
              },
              {
                "left": "元気です",
                "right": "元気でした"
              },
              {
                "left": "静かです",
                "right": "静かでした"
              },
              {
                "left": "有名です",
                "right": "有名でした"
              }
            ],
            "explanation": "です becomes でした in the past tense for both nouns (学生, 'student') and な-adjectives (元気, 静か, 有名). The stem word never changes -- only です shifts to でした."
          },
          {
            "type": "multiple-choice",
            "question": "去年、学生でした。 -- What does this sentence mean?",
            "options": [
              "I am a student.",
              "I was a student last year.",
              "I will be a student next year.",
              "Last year was fun."
            ],
            "correctIndex": 1,
            "explanation": "学生でした is the past tense of 学生です ('is a student'), so the sentence means 'I was a student last year,' with 去年 marking the time as 'last year.'"
          }
        ]
      },
      {
        "heading": "The Negative Past of です: じゃなかったです and ではありませんでした",
        "body": [
          "To say a noun or な-adjective sentence was NOT true in the past, Japanese offers two common patterns. The first, じゃなかったです, is what you'll hear constantly in everyday conversation. The second, ではありませんでした, is more formal and shows up in writing, announcements, and polite business speech. Both mean exactly the same thing: 'was not.'",
          "じゃ is simply a contraction of では, so じゃなかったです is built from では + なかった (the plain negative past, covered later in this lesson) + です for politeness. 暇です ('is free') → 暇じゃなかったです ('was not free'). ではありませんでした instead extends the negative present pattern with でした-style past marking: 大変です ('is tough') → 大変ではありませんでした ('was not tough').",
          "In casual daily speech, native speakers reach for じゃなかったです far more often than ではありませんでした, but both are fully correct and polite. For now, treat them as interchangeable options for the same meaning, and get comfortable recognizing both."
        ],
        "examples": [
          {
            "es": "先週は暇じゃなかったです。",
            "en": "senshuu wa hima ja nakatta desu. -- Last week I wasn't free."
          },
          {
            "es": "会議は大変ではありませんでした。",
            "en": "kaigi wa taihen dewa arimasendeshita. -- The meeting wasn't tough."
          },
          {
            "es": "彼は先生じゃなかったです。",
            "en": "kare wa sensei ja nakatta desu. -- He wasn't a teacher."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Negate this sentence in the common everyday style: 会議は大変でした。 → The meeting was NOT tough.",
            "sentence": "会議は___。",
            "answer": "大変じゃなかったです",
            "hint": "Use じゃなかったです, the everyday spoken negative past of です.",
            "explanation": "大変じゃなかったです negates 大変でした. じゃなかったです is the everyday spoken equivalent of the more formal ではありませんでした."
          },
          {
            "type": "multi-select",
            "question": "Which of these correctly mean 'He was not a teacher'?",
            "options": [
              "彼は先生じゃなかったです。",
              "彼は先生ではありませんでした。",
              "彼は先生でした。",
              "彼は先生じゃないです。"
            ],
            "correctIndexes": [
              0,
              1
            ],
            "explanation": "Both 先生じゃなかったです (casual-polite) and 先生ではありませんでした (formal) correctly express past negative. 先生でした is affirmative past, and 先生じゃないです is present negative, not past."
          }
        ]
      },
      {
        "heading": "The Past of い-Adjectives: ～かった and ～くなかった",
        "body": [
          "い-adjectives are unusual because they carry tense on their own, without needing です at all -- です just adds a layer of politeness on top. For the past affirmative, drop the final い and add かった: 高い ('expensive') → 高かった ('was expensive'), 暑い ('hot') → 暑かった ('was hot'). Add です afterward for the polite version most learners use day to day: 高かったです, 暑かったです.",
          "The negative past follows the same logic, but starts from the negative form you learned in A1: ～くない. Change that ない to なかった: 高くない ('not expensive') → 高くなかった ('was not expensive'). Again, です can be added for politeness without changing the meaning: 高くなかったです.",
          "One important irregular case to memorize: いい ('good') does not become いかった. Its past form is よかった, because いい is itself an irregular spelling of the older adjective よい, and all of いい's conjugations are built from よ-, not い-. So 'the movie was good' is 映画はよかったです, never 映画はいかったです."
        ],
        "examples": [
          {
            "es": "昨日は暑かったです。",
            "en": "kinou wa atsukatta desu. -- Yesterday was hot."
          },
          {
            "es": "旅行は楽しかったです。",
            "en": "ryokou wa tanoshikatta desu. -- The trip was fun."
          },
          {
            "es": "テストは難しくなかったです。",
            "en": "tesuto wa muzukashikunakatta desu. -- The test wasn't difficult."
          },
          {
            "es": "映画はよかったです。",
            "en": "eiga wa yokatta desu. -- The movie was good."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange the words to say 'The test wasn't difficult.'",
            "words": [
              "テスト",
              "は",
              "難しくなかった",
              "です"
            ],
            "translation": "The test wasn't difficult.",
            "explanation": "難しくなかった is the past negative of the い-adjective 難しい (difficult): drop い, add くなかった. です adds politeness."
          },
          {
            "type": "multiple-choice",
            "question": "Which sentence correctly uses the irregular past of いい?",
            "options": [
              "映画はいかったです。",
              "映画はよかったです。",
              "映画はいいでした。",
              "映画はいくなかったです。"
            ],
            "correctIndex": 1,
            "explanation": "いい is irregular -- its past form は よかった (not いかった), since it conjugates from the older form よい. 映画はよかったです means 'The movie was good.'"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each present/plain form to its polite past form.",
        "pairs": [
          {
            "left": "食べます",
            "right": "食べました"
          },
          {
            "left": "元気です",
            "right": "元気でした"
          },
          {
            "left": "高くないです",
            "right": "高くなかったです"
          },
          {
            "left": "学生です",
            "right": "学生でした"
          }
        ],
        "explanation": "Verbs shift ます→ました; です shifts to でした for nouns/な-adjectives; い-adjective negatives shift くない→くなかった, with です added for politeness."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete with the past tense of the い-adjective 楽しい (fun).",
        "sentence": "パーティーは___。",
        "answer": "楽しかったです",
        "hint": "Drop い, add かった, then です.",
        "explanation": "楽しい drops its い and adds かった to become 楽しかった; です adds politeness, giving 楽しかったです ('was fun')."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence correctly uses the PLAIN past form?",
        "options": [
          "休みだった。",
          "休みでした。",
          "休みますでした。",
          "休みじゃなかったでした。"
        ],
        "correctIndex": 0,
        "explanation": "休みだった is the plain past of 休みです (it's a day off) -- だった is the plain counterpart of でした. The other options are either polite or ungrammatical."
      },
      {
        "type": "multi-select",
        "question": "Select all correct negative past forms of 大変です (was tough).",
        "options": [
          "大変じゃなかったです",
          "大変ではありませんでした",
          "大変くなかったです",
          "大変じゃない"
        ],
        "correctIndexes": [
          0,
          1
        ],
        "explanation": "大変 is a な-adjective, so its negative past uses じゃなかったです or ではありませんでした. くなかった only applies to い-adjectives, and 大変じゃない is present, not past, negative."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'I didn't meet my friend last week.'",
        "words": [
          "先週",
          "友達",
          "に",
          "会いませんでした"
        ],
        "translation": "I didn't meet my friend last week.",
        "explanation": "会いませんでした is the polite past negative of 会います (to meet), with に marking 友達 (friend) as the person met."
      }
    ]
  },
  {
    "slug": "past-tense-masu-plain-3",
    "level": "JA-A2",
    "number": 9,
    "title": "Past Tense: Polite and Plain, Part 3 of 3",
    "summary": "Learn to talk about anything that already happened: the polite past of verbs (ました / ませんでした), the past of です (でした / じゃなかったです / ではありませんでした), the past of い-adjectives (かった / くなかった), and a first preview of the plain past (だった / じゃなかった).",
    "duration": "7 min",
    "sections": [
      {
        "heading": "A Preview of Plain Past: だった and じゃなかった",
        "body": [
          "Everything covered so far -- ました, ませんでした, でした, じゃなかったです -- belongs to polite speech, the register you use with strangers, teachers, coworkers, and anyone you'd address with です/ます in the present tense. Japanese also has a plain (casual) register, used with close friends, family, and in diaries, novels, and quoted thoughts. You'll study the plain register fully in a later lesson, but it's worth previewing its past-tense forms now, since they're simple variations of what you just learned.",
          "For nouns and な-adjectives, the plain past affirmative is だった -- the casual counterpart of でした. 学生でした ('was a student,' polite) becomes 学生だった ('was a student,' plain). The plain past negative is じゃなかった, simply dropping the です from じゃなかったです: 元気でした → 元気だった; 静かじゃなかったです → 静かじゃなかった.",
          "い-adjectives are actually already in plain form once you remove です -- 楽しかったです is just 楽しかった (plain) plus です (politeness). So かった and くなかった, which you learned in the previous section, double as both polite (with です) and plain (without です) past tense for い-adjectives. You'll start recognizing plain forms often in casual conversation, texts, and manga, even before you begin producing them yourself."
        ],
        "examples": [
          {
            "es": "昨日は休みだった。",
            "en": "kinou wa yasumi datta. -- Yesterday was a day off. (plain)"
          },
          {
            "es": "パーティーは静かじゃなかった。",
            "en": "paatii wa shizuka ja nakatta. -- The party wasn't quiet. (plain)"
          },
          {
            "es": "天気はよかった。",
            "en": "tenki wa yokatta. -- The weather was good. (plain -- い-adjectives are already plain)"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each polite past form with its plain past counterpart.",
            "pairs": [
              {
                "left": "休みでした",
                "right": "休みだった"
              },
              {
                "left": "静かじゃなかったです",
                "right": "静かじゃなかった"
              },
              {
                "left": "よかったです",
                "right": "よかった"
              },
              {
                "left": "忙しかったです",
                "right": "忙しかった"
              }
            ],
            "explanation": "Plain forms drop です: でした→だった, じゃなかったです→じゃなかった. い-adjective past forms (よかった, 忙しかった) are already plain -- です is just added or removed for politeness."
          },
          {
            "type": "multi-select",
            "question": "Which of these are PLAIN (casual) past-tense sentences?",
            "options": [
              "昨日は休みだった。",
              "昨日は休みでした。",
              "パーティーは静かじゃなかった。",
              "パーティーは静かじゃなかったです。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "休みだった and 静かじゃなかった are plain forms, without です. The other two options include です, making them polite forms."
          }
        ]
      },
      {
        "heading": "Putting It Together: Talking About the Past",
        "body": [
          "With all four past-tense patterns in hand -- verb ました/ませんでした, です's でした/じゃなかったです, and い-adjective かった/くなかった -- you can now describe a whole weekend, trip, or day in the past. Time words like 昨日 (yesterday), 先週 (last week), 先月 (last month), and 去年 (last year) set the scene, and you can string several past-tense sentences together to build a short narrative.",
          "To ask about the past politely, add か after でした or after a ました/ませんでした verb. 週末はどうでしたか ('How was the weekend?') is one of the most common past-tense questions in daily conversation: どう means 'how,' and でしたか turns it into a polite past-tense question. You could answer with an い-adjective (楽しかったです, 'it was fun') or with a fuller sentence about what you did (友達と映画を見ました, 'I watched a movie with a friend').",
          "Mastering these forms means you can now talk naturally about anything that already happened -- meals, weather, trips, feelings, and plans that did or didn't happen -- entirely in the polite register you've been building since A1, with a first glimpse of the plain register still to come."
        ],
        "examples": [
          {
            "es": "週末はどうでしたか。",
            "en": "shuumatsu wa dou deshita ka. -- How was the weekend?"
          },
          {
            "es": "楽しかったです。友達と映画を見ました。",
            "en": "tanoshikatta desu. tomodachi to eiga o mimashita. -- It was fun. I watched a movie with a friend."
          },
          {
            "es": "先月は忙しかったです。今月は暇です。",
            "en": "sengetsu wa isogashikatta desu. kongetsu wa hima desu. -- Last month was busy. This month I'm free."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Answer the question 週末はどうでしたか (How was the weekend?) by saying it was fun.",
            "sentence": "___。",
            "answer": "楽しかったです",
            "hint": "Past tense of 楽しい + です.",
            "explanation": "楽しかったです ('It was fun') answers どうでしたか using the past tense of the い-adjective 楽しい."
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words to ask 'How was the trip?'",
            "words": [
              "旅行",
              "は",
              "どう",
              "でした",
              "か"
            ],
            "translation": "How was the trip?",
            "explanation": "どうでしたか asks 'how was it?' in the past tense, built from どう (how) + でした (past of です) + か (question marker)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Complete using the polite past of 見る (to watch/see).",
        "sentence": "昨日、映画を___。",
        "answer": "見ました",
        "hint": "ます-stem + past ending.",
        "explanation": "見ます becomes 見ました, the polite past form, meaning 'watched.'"
      },
      {
        "type": "multiple-choice",
        "question": "How do you politely ask 'How was the weekend?'",
        "options": [
          "週末はどうでしたか。",
          "週末はどうですか。",
          "週末はどうでした。",
          "週末はどうかったですか。"
        ],
        "correctIndex": 0,
        "explanation": "週末はどうでしたか uses でした (past of です) plus か to ask about the past politely. どうですか asks about the present, not the past."
      },
      {
        "type": "matching",
        "instructions": "Match the plain past endings with their polite equivalents.",
        "pairs": [
          {
            "left": "だった",
            "right": "でした"
          },
          {
            "left": "じゃなかった",
            "right": "じゃなかったです"
          },
          {
            "left": "かった",
            "right": "かったです"
          },
          {
            "left": "くなかった",
            "right": "くなかったです"
          }
        ],
        "explanation": "Each plain past ending has a polite counterpart formed simply by adding です. だった/でした and じゃなかった/じゃなかったです apply to nouns and な-adjectives; かった/かったです and くなかった/くなかったです apply to い-adjectives."
      },
      {
        "type": "fill-blank",
        "prompt": "Negate this sentence: その部屋は静かでした。 → The room was NOT quiet.",
        "sentence": "その部屋は___。",
        "answer": "静かじゃなかったです",
        "hint": "Use じゃなかったです, the everyday negative past of です.",
        "explanation": "静かじゃなかったです negates 静かでした, following the same pattern as other な-adjectives in the negative past."
      },
      {
        "type": "multiple-choice",
        "question": "Which word correctly completes: 去年、日本語を___。 (studied)",
        "options": [
          "勉強します",
          "勉強しました",
          "勉強しません",
          "勉強しませんでした"
        ],
        "correctIndex": 1,
        "explanation": "去年 (last year) signals past tense, so the affirmative past 勉強しました ('studied') is correct."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'The trip wasn't fun.'",
        "words": [
          "旅行",
          "は",
          "楽しくなかった",
          "です"
        ],
        "translation": "The trip wasn't fun.",
        "explanation": "楽しくなかった is the past negative of the い-adjective 楽しい (fun): drop い, add くなかった. です adds politeness."
      }
    ]
  },
  {
    "slug": "potential-form-tai-form-1",
    "level": "JA-A2",
    "number": 10,
    "title": "The Potential Form and the たい Form, Part 1 of 3",
    "summary": "Learn to say what you can do and what you want to do by building two new verb forms directly onto the verbs you already know -- the potential form ('can speak,' 'can eat') and the たい form ('want to go,' 'want to drink') -- and the special way their objects often take が instead of を.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Introducing the Potential Form",
        "body": [
          "In JA-A1, you learned to describe actions you do or will do using the polite ます form. This lesson adds a new layer of meaning: ability. The potential form (可能形, kanou-kei) lets a Japanese verb express 'can do,' 'am able to do,' or 'it's possible to do' entirely on its own -- no separate helper verb like English 'can' is needed. The ability is built right into the verb.",
          "This is a genuinely new verb, derived from the original one through a predictable change. Once you've built a potential verb, it behaves exactly like an ordinary ichidan (る-dropping) verb from JA-A1 -- which means you already know how to make it polite, negative, or past tense, because you learned those patterns for ichidan verbs already.",
          "How you build the potential form depends on which of the three verb groups the original verb belongs to: godan (u-verbs), ichidan (ru-verbs), or one of the two irregulars, する and 来る. The next two sections walk through each group in turn."
        ],
        "examples": [
          {
            "es": "話せる。",
            "en": "hanaseru. -- (I/someone) can speak. (plain/dictionary form)"
          },
          {
            "es": "話せます。",
            "en": "hanasemasu. -- (I/someone) can speak. (polite)"
          },
          {
            "es": "話せません。",
            "en": "hanasemasen. -- (I/someone) cannot speak. (polite negative)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What does the potential form of a Japanese verb express?",
            "options": [
              "Something happened in the past",
              "Ability -- what someone can do",
              "A polite request",
              "That an action is happening right now"
            ],
            "correctIndex": 1,
            "explanation": "The potential form builds the meaning 'can do' directly into the verb, so no separate word for 'can' is needed, unlike in English."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the polite negative potential form of 話す (to speak).",
            "sentence": "話___。",
            "answer": "せません",
            "hint": "Potential verbs conjugate like ichidan verbs for politeness and negation.",
            "explanation": "話す becomes the potential verb 話せる ('can speak'), which is then made polite and negative like any ichidan verb: 話せません。"
          }
        ]
      },
      {
        "heading": "Building the Potential Form: Godan Verbs",
        "body": [
          "Godan (u-verb) potential forms are built by changing the verb's final -u sound to the matching -e sound, then adding る. 話す (hanasu, 'to speak') ends in す, which shifts to せ, giving 話せる (hanaseru, 'can speak'). The same shift applies across the whole godan group: 読む (yomu, 'to read') → 読める (yomeru); 書く (kaku, 'to write') → 書ける (kakeru); 飲む (nomu, 'to drink') → 飲める (nomeru); 泳ぐ (oyogu, 'to swim') → 泳げる (oyogeru).",
          "Verbs ending in う are a small exception to watch for: う shifts to え (not いえ), so 買う (kau, 'to buy') becomes 買える (kaeru), and 会う (au, 'to meet') becomes 会える (aeru).",
          "Because the result (話せる, 読める, etc.) always ends in -eる, every godan potential verb is now shaped like an ichidan verb. To make it polite, just drop る and add ます, exactly as you learned for verbs like 食べる: 話せる → 話せます。"
        ],
        "examples": [
          {
            "es": "漢字が読めます。",
            "en": "kanji ga yomemasu. -- (I) can read kanji."
          },
          {
            "es": "今日は泳げません。",
            "en": "kyou wa oyogemasen. -- (I) can't swim today."
          },
          {
            "es": "この漢字が書けますか。",
            "en": "kono kanji ga kakemasu ka. -- Can (you) write this kanji?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Give the potential form of 飲む (to drink).",
            "sentence": "飲む → ___",
            "answer": "飲める",
            "hint": "Change the final む to め and add る.",
            "explanation": "飲む (godan, u-verb) → 飲める: the final -u sound む shifts to the -e sound め, then る is added."
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words to say: 'I can write kanji.'",
            "words": [
              "私",
              "は",
              "漢字",
              "が",
              "書けます"
            ],
            "translation": "watashi wa kanji ga kakemasu. -- I can write kanji.",
            "explanation": "The topic 私は comes first, then the object of ability 漢字が, then the potential verb 書けます at the end."
          }
        ]
      },
      {
        "heading": "Building the Potential Form: Ichidan Verbs and Irregulars",
        "body": [
          "Ichidan (ru-verb) potential forms are simpler than godan ones: just drop the final る and add られる. 食べる (taberu, 'to eat') → 食べられる (taberareru, 'can eat'); 見る (miru, 'to see/watch') → 見られる (mirareru, 'can see/watch'); 寝る (neru, 'to sleep') → 寝られる (nerareru, 'can sleep'). As with godan potentials, the result ends in -eる, so politeness works the same way: 食べられる → 食べられます。",
          "In casual spoken Japanese, many people drop the ら from られる, saying 食べれる instead of 食べられる. This is called 'ra-nuki kotoba' (ら-nuki, 'ら-dropped speech'). It's extremely common in conversation, but it's considered nonstandard, so this lesson -- and most textbooks and written Japanese -- use the full られる form.",
          "The two irregular verbs each do something different. する ('to do') becomes できる (dekiru) -- an entirely different-looking word, not a predictable conjugation, and one you'll also see attached to noun+する verbs like 運転する ('to drive') → 運転できる ('can drive'). 来る ('to come') becomes 来られる (korareru) -- note the reading changes from 来ます (kimasu) to 来られる (korareru)。"
        ],
        "examples": [
          {
            "es": "野菜が食べられます。",
            "en": "yasai ga taberaremasu. -- (I) can eat vegetables."
          },
          {
            "es": "料理ができます。",
            "en": "ryouri ga dekimasu. -- (I) can cook. (lit. cooking is possible)"
          },
          {
            "es": "明日、来られますか。",
            "en": "ashita, koraremasu ka. -- Can (you) come tomorrow?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the correct potential form of する ('to do')?",
            "options": [
              "すれる",
              "せられる",
              "できる",
              "しられる"
            ],
            "correctIndex": 2,
            "explanation": "する is irregular in the potential form: it becomes できる, a completely different-looking word, not a predictable ら+れる pattern."
          },
          {
            "type": "fill-blank",
            "prompt": "Give the potential form of 見る (to see/watch).",
            "sentence": "見る → ___",
            "answer": "見られる",
            "hint": "Ichidan verbs drop る and add られる.",
            "explanation": "見る (ichidan) drops る and adds られる, giving 見られる ('can see' / 'can watch')。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How is the potential form of a godan (u-verb) verb like 読む (to read) formed?",
        "options": [
          "Drop む and add られる",
          "Change the final -u sound to its -e sound and add る",
          "Add たい to the ます-stem",
          "Replace the whole verb with できる"
        ],
        "correctIndex": 1,
        "explanation": "Godan verbs shift their final -u sound to the matching -e sound before adding る: 読む → 読める。"
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the particle that fits the standard tendency for potential-verb objects.",
        "sentence": "本___読めます。",
        "answer": "が",
        "hint": "Potential verbs usually take this particle for their object instead of を.",
        "explanation": "本が読めます ('I can read the book') follows the standard が-tendency with potential verbs."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say: 'I can speak Japanese.'",
        "words": [
          "私",
          "は",
          "日本語",
          "が",
          "話せます"
        ],
        "translation": "watashi wa nihongo ga hanasemasu. -- I can speak Japanese.",
        "explanation": "The topic 私は starts the sentence, followed by 日本語が (the ability's object) and the potential verb 話せます。"
      },
      {
        "type": "multi-select",
        "question": "Which of these are correctly formed potential verbs?",
        "options": [
          "見られる (from 見る)",
          "読める (from 読む)",
          "できる (from する)",
          "食べる (unchanged, from 食べる)"
        ],
        "correctIndexes": [
          0,
          1,
          2
        ],
        "explanation": "見られる, 読める, and できる are all correctly formed potential verbs; 食べる is simply the plain dictionary form, not a potential form (which would be 食べられる)。"
      },
      {
        "type": "matching",
        "instructions": "Match each dictionary-form verb to its correct potential form.",
        "pairs": [
          {
            "left": "話す",
            "right": "話せる"
          },
          {
            "left": "食べる",
            "right": "食べられる"
          },
          {
            "left": "する",
            "right": "できる"
          },
          {
            "left": "来る",
            "right": "来られる"
          },
          {
            "left": "飲む",
            "right": "飲める"
          }
        ],
        "explanation": "話す→話せる and 飲む→飲める follow the godan pattern; 食べる→食べられる follows the ichidan pattern; する→できる and 来る→来られる are irregular."
      },
      {
        "type": "fill-blank",
        "prompt": "Make 見る (want to watch) negative and polite in the たい form.",
        "sentence": "その映画を見___です。",
        "answer": "たくない",
        "hint": "Form たい first (見たい), then conjugate it like an い-adjective.",
        "explanation": "見る's たい form is 見たい; negating it like an い-adjective gives 見たくない, plus です for politeness."
      }
    ]
  },
  {
    "slug": "potential-form-tai-form-2",
    "level": "JA-A2",
    "number": 11,
    "title": "The Potential Form and the たい Form, Part 2 of 3",
    "summary": "Learn to say what you can do and what you want to do by building two new verb forms directly onto the verbs you already know -- the potential form ('can speak,' 'can eat') and the たい form ('want to go,' 'want to drink') -- and the special way their objects often take が instead of を.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Using the Potential Form: が Instead of を",
        "body": [
          "Once you have a potential verb, you can use it in a sentence just like any other verb -- but there's one important pattern to notice with its object. When a sentence describes ability, the thing you're able to do is very often marked with が rather than を. Compare 日本語を話します ('I speak Japanese,' plain ability-neutral statement) with 日本語が話せます ('I can speak Japanese,' potential form) -- the object switches from を to が.",
          "This happens because potential verbs describe more of a state or capability than a direct action, and が is the particle Japanese naturally uses to mark what a state applies to (similar to how you learned が with adjectives like 好き in JA-A1). The same logic applies whether the object is a language, a food, a skill, or anything else: ピアノが弾けます ('I can play the piano'), すしが食べられます ('I can eat sushi')。",
          "That said, treat this as a strong tendency, not an unbreakable rule. In casual speech, especially, many Japanese speakers keep を with potential verbs -- 日本語を話せます is grammatically fine and commonly heard. が is the more standard, 'textbook' choice and the safer one to produce yourself, but don't be surprised when you hear を in the wild."
        ],
        "examples": [
          {
            "es": "日本語が話せます。",
            "en": "nihongo ga hanasemasu. -- I can speak Japanese."
          },
          {
            "es": "ピアノが弾けますか。",
            "en": "piano ga hikemasu ka. -- Can you play the piano?"
          },
          {
            "es": "すしを食べられますか。",
            "en": "sushi o taberaremasu ka. -- Can you eat sushi? (casual, を also heard)"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which particle most naturally marks the object of a potential verb, like in '___ フランス語が話せます' (I can speak French)?",
            "options": [
              "を, always, no exceptions",
              "が, as the standard tendency, though を is heard casually",
              "は, because it always replaces を",
              "に, because potential verbs are stative"
            ],
            "correctIndex": 1,
            "explanation": "が is the standard particle with potential verbs because they describe a state of ability, though を is still heard in casual speech."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the particle for this sentence about ability.",
            "sentence": "英語___読めます。",
            "answer": "が",
            "hint": "The object of a potential verb usually takes this particle instead of を.",
            "explanation": "英語が読めます ('I can read English') -- が marks the object of the potential verb 読める, following the standard tendency."
          }
        ]
      },
      {
        "heading": "The たい Form: Saying What You Want to Do",
        "body": [
          "Alongside 'can do,' this lesson covers another very useful pattern: 'want to do,' built with the たい form. To form it, take a verb's ます-stem (the part right before ます) and add たい instead. 行きます (ikimasu, 'go') → 行きたい (ikitai, 'want to go'); 食べます (tabemasu, 'eat') → 食べたい (tabetai, 'want to eat'); 飲みます (nomimasu, 'drink') → 飲みたい (nomitai, 'want to drink')。This works the same way for every verb group, since it's built from the ます-stem, not the dictionary form -- there's no need to sort verbs into godan/ichidan/irregular the way you did for the potential form.",
          "たい isn't itself a verb -- it attaches to a verb stem and then conjugates like an い-adjective, which you already know from JA-A1. That means 行きたい alone is plain/casual, and 行きたいです is the polite version, following the same です-attachment pattern you learned for adjectives like 楽しい → 楽しいです。",
          "One important limit: the plain たい form is used for the speaker's own desires, or to ask the listener directly about theirs with か. 私は日本へ行きたいです ('I want to go to Japan') and 何が食べたいですか ('What do you want to eat?') are both natural. Describing what a third person (someone other than you or the person you're talking to) wants requires a different grammar pattern -- not covered in this lesson -- so avoid using plain たい to say things like 'he wants to go.'"
        ],
        "examples": [
          {
            "es": "日本へ行きたいです。",
            "en": "nihon e ikitai desu. -- I want to go to Japan."
          },
          {
            "es": "何を食べたいですか。",
            "en": "nani o tabetai desu ka. -- What do you want to eat?"
          },
          {
            "es": "新しい車が買いたいです。",
            "en": "atarashii kuruma ga kaitai desu. -- I want to buy a new car."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Build the たい form of 飲みます (to drink).",
            "sentence": "飲みます → ___",
            "answer": "飲みたい",
            "hint": "Drop ます and add たい to the stem.",
            "explanation": "飲みます's stem is 飲み; adding たい gives 飲みたい ('want to drink')。"
          },
          {
            "type": "multiple-choice",
            "question": "Which use of the plain たい form is grammatically correct as-is?",
            "options": [
              "Saying what a stranger on the train wants to eat",
              "Saying what you yourself want to do",
              "Saying what your friend's sister wants to buy",
              "Saying what a character in a story wants"
            ],
            "correctIndex": 1,
            "explanation": "Plain たい is for the speaker's own desires, or asking the listener directly -- describing a third person's want needs a different form not taught in this lesson."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Who can the plain たい form describe wanting to do something?",
        "options": [
          "Anyone, including strangers and third parties",
          "Only the speaker, or the listener when asked directly",
          "Only people who are not present",
          "Only groups of people, never one person"
        ],
        "correctIndex": 1,
        "explanation": "The plain たい form is limited to the speaker's own desires or a direct question to the listener; a third person's wants need different grammar not covered here."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say: 'I want to eat sushi.'",
        "words": [
          "すし",
          "が",
          "食べたい",
          "です"
        ],
        "translation": "sushi ga tabetai desu. -- I want to eat sushi.",
        "explanation": "すしが食べたいです places が before the たい-form verb 食べたい, followed by です for politeness."
      },
      {
        "type": "fill-blank",
        "prompt": "Give the past-tense たい form for 'wanted to go to Japan.'",
        "sentence": "日本へ行き___です。",
        "answer": "たかった",
        "hint": "Drop い from たい and add かった, like an い-adjective in the past tense.",
        "explanation": "行きたい's past tense follows い-adjective rules: 行きたい → 行きたかった ('wanted to go')。"
      },
      {
        "type": "multiple-choice",
        "question": "What does 来られる (korareru) mean?",
        "options": [
          "Came (past tense of 来る)",
          "Can come (potential form of 来る)",
          "Want to come",
          "Coming right now"
        ],
        "correctIndex": 1,
        "explanation": "来られる is the irregular potential form of 来る ('to come'), meaning 'can come.' Note it's read korareru, different from 来ます (kimasu)。"
      },
      {
        "type": "multi-select",
        "question": "Which sentences correctly follow the standard が-tendency for potential or たい verbs?",
        "options": [
          "ピアノが弾けます。",
          "ピアノを弾けます。(casual, less standard)",
          "コーヒーが飲みたいです。",
          "コーヒーは飲みたいです。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "ピアノが弾けます and コーヒーが飲みたいです both use が, the standard particle for potential and たい objects; を is heard casually, and は changes the meaning to a contrast."
      }
    ]
  },
  {
    "slug": "potential-form-tai-form-3",
    "level": "JA-A2",
    "number": 12,
    "title": "The Potential Form and the たい Form, Part 3 of 3",
    "summary": "Learn to say what you can do and what you want to do by building two new verb forms directly onto the verbs you already know -- the potential form ('can speak,' 'can eat') and the たい form ('want to go,' 'want to drink') -- and the special way their objects often take が instead of を.",
    "duration": "6 min",
    "sections": [
      {
        "heading": "Conjugating たい Like an い-Adjective",
        "body": [
          "Because たい behaves grammatically like an い-adjective, all the negative and past-tense patterns you learned for adjectives in JA-A1 apply here directly. To make it negative, drop the final い and add くない, just as with adjectives: 行きたい → 行きたくない ('don't want to go')。To make it polite, add です: 行きたくないです。",
          "For past tense, drop い and add かった: 行きたい → 行きたかった ('wanted to go'), and politely, 行きたかったです。Combining negative and past works the same way adjectives do: 行きたくなかったです ('didn't want to go')。",
          "This consistency is one of the real payoffs of having learned い-adjective conjugation thoroughly in JA-A1 -- there's no new conjugation pattern to memorize here, only a new base word (the verb stem + たい) to plug into a pattern you already own."
        ],
        "examples": [
          {
            "es": "今日は勉強したくないです。",
            "en": "kyou wa benkyou shitakunai desu. -- (I) don't want to study today."
          },
          {
            "es": "去年、フランスへ行きたかったです。",
            "en": "kyonen, furansu e ikitakatta desu. -- Last year, (I) wanted to go to France."
          },
          {
            "es": "あのレストランで食べたくなかったです。",
            "en": "ano resutoran de tabetakunakatta desu. -- (I) didn't want to eat at that restaurant."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Make 行きたい (want to go) negative and polite.",
            "sentence": "映画に行き___です。",
            "answer": "たくない",
            "hint": "Drop い from たい and add くない, like an い-adjective.",
            "explanation": "行きたい → 行きたくない (negative), then + です for politeness: 行きたくないです ('don't want to go')。"
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words to say: 'I wanted to drink coffee.'",
            "words": [
              "コーヒー",
              "が",
              "飲みたかった",
              "です"
            ],
            "translation": "koohii ga nomitakatta desu. -- I wanted to drink coffee.",
            "explanation": "コーヒーが飲みたかったです uses が for the object and the past たい form 飲みたかった, plus です for politeness."
          }
        ]
      },
      {
        "heading": "が with the たい Form, and Whose Desires It Can Describe",
        "body": [
          "Just like the potential form, the たい form very often takes が for its object rather than を, following the same flexible tendency. 水が飲みたいです ('I want to drink water') is the more standard phrasing, though 水を飲みたいです is also common, especially in casual speech or when the sentence has already used が elsewhere and を helps avoid repetition.",
          "This が-tendency shows up together with the object-focused meaning both forms share: whether you're talking about what you're able to do or what you want to do, the focus shifts from 'performing an action on an object' toward 'a state involving that thing' -- and が is the particle that marks what a state is about.",
          "Remember the limit from earlier: this whole が/を pattern with たい, like たい itself, applies to the speaker's own wants (or a direct question to the listener). If you ever need to describe what someone else wants, you'll need a different grammar pattern -- for example, native speakers often use forms like 〜たがっている for a third person -- but that's a topic for a later lesson, not this one."
        ],
        "examples": [
          {
            "es": "水が飲みたいです。",
            "en": "mizu ga nomitai desu. -- I want to drink water."
          },
          {
            "es": "コーヒーが飲みたいですか。",
            "en": "koohii ga nomitai desu ka. -- Do you want to drink coffee?"
          },
          {
            "es": "沖縄が旅行したいです。",
            "en": "okinawa ga ryokou shitai desu. -- I want to travel to Okinawa."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Which of these sentences correctly use が with the たい form, following the standard tendency?",
            "options": [
              "水が飲みたいです。",
              "水は飲みたいです。",
              "すしが食べたいです。",
              "すしに食べたいです。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "水が飲みたいです and すしが食べたいです both correctly use が to mark the object of desire, following the same tendency as potential-form sentences."
          },
          {
            "type": "multiple-choice",
            "question": "If you want to say your friend's brother wants to go to Japan, what should you keep in mind?",
            "options": [
              "Plain たい works fine for anyone",
              "Plain たい is only for your own wants or a direct question -- a different form is needed for a third person",
              "You must use the potential form instead",
              "You must drop です to talk about someone else"
            ],
            "correctIndex": 1,
            "explanation": "たい in its plain form describes the speaker's own desires or asks the listener directly; describing a third person's want requires different grammar not covered in this lesson."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each Japanese sentence to its English meaning.",
        "pairs": [
          {
            "left": "日本語が話せます。",
            "right": "I can speak Japanese."
          },
          {
            "left": "水が飲みたいです。",
            "right": "I want to drink water."
          },
          {
            "left": "漢字が書けません。",
            "right": "I cannot write kanji."
          },
          {
            "left": "行きたくないです。",
            "right": "I don't want to go."
          },
          {
            "left": "料理ができます。",
            "right": "I can cook."
          }
        ],
        "explanation": "Each sentence pairs a potential or たい verb form with its correct English translation, reviewing ability and desire expressions from this lesson."
      },
      {
        "type": "fill-blank",
        "prompt": "Give the potential form of 見る (to see/watch).",
        "sentence": "見る → ___。",
        "answer": "見られる",
        "hint": "Ichidan verbs drop る and add られる.",
        "explanation": "見る (ichidan) becomes 見られる by dropping る and adding られる: 'can see/watch.'"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to ask: 'Can you play the piano?'",
        "words": [
          "ピアノ",
          "が",
          "弾けます",
          "か"
        ],
        "translation": "piano ga hikemasu ka. -- Can you play the piano?",
        "explanation": "ピアノが弾けますか places が before the potential verb 弾けます, with か added at the end to form a question."
      },
      {
        "type": "multiple-choice",
        "question": "In casual speech, what sometimes happens to the object particle of a potential or たい verb?",
        "options": [
          "It's replaced by に",
          "を is used instead of the more standard が",
          "It's dropped entirely, always",
          "It becomes へ"
        ],
        "correctIndex": 1,
        "explanation": "While が is the more standard, textbook choice for potential and たい objects, を is also commonly heard, especially in casual speech -- this is a flexible tendency, not an absolute rule."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the sentence: 'I can cook.' (using the irregular する → できる pattern)",
        "sentence": "料理が___。",
        "answer": "できます",
        "hint": "する's potential form is できる; make it polite.",
        "explanation": "料理ができます uses できる, the irregular potential form of する, made polite as できます。"
      }
    ]
  },
  {
    "slug": "giving-receiving-agemoraukureru-1",
    "level": "JA-A2",
    "number": 13,
    "title": "Giving and Receiving: あげる, もらう, くれる, Part 1 of 3",
    "summary": "Learn Japanese's three perspective-driven giving-and-receiving verbs — あげる, もらう, and くれる — and master the single biggest trap for English speakers: choosing between あげる and くれる based on whether a gift moves away from or toward the speaker's side.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Three Verbs, One English Word",
        "body": [
          "In English, the verb \"give\" doesn't care who is doing the giving or who is doing the receiving — \"I gave Sam a book\" and \"Sam gave me a book\" both just use \"give.\" Japanese draws a hard line here. Depending on whether something moves away from the speaker's side or toward it, Japanese speakers must choose a completely different verb. Get this wrong and a sentence doesn't just sound awkward — it can sound backwards, like you've described the transaction happening in reverse.",
          "There are three verbs to learn: あげる (ageru), which describes the speaker or someone in the speaker's in-group giving something to someone else; もらう (morau), which describes the speaker or someone in the speaker's in-group receiving something from someone else; and くれる (kureru), which describes someone else giving something to the speaker or someone in the speaker's in-group. あげる and くれる both translate as \"give\" in English, but they are never interchangeable — the choice depends entirely on perspective, not on politeness or formality.",
          "Think of it as a compass with the speaker at the center. あげる points outward — something leaves your side and travels to someone else. くれる points inward — something arrives at your side from someone else. もらう describes the arrival too, but from the receiver's own point of view rather than the giver's. Keep that compass in mind through this whole lesson; it resolves almost every confusion these three verbs cause."
        ],
        "examples": [
          {
            "es": "誕生日に何をあげますか。",
            "en": "tanjoubi ni nani o agemasu ka. -- What are you going to give (them) for their birthday?"
          },
          {
            "es": "誕生日に何をもらいましたか。",
            "en": "tanjoubi ni nani o moraimashita ka. -- What did you receive for your birthday?"
          },
          {
            "es": "誕生日に何をくれましたか。",
            "en": "tanjoubi ni nani o kuremashita ka. -- What did they give you for your birthday?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which verb describes someone else giving something to you?",
            "options": [
              "あげる",
              "もらう",
              "くれる",
              "です"
            ],
            "correctIndex": 2,
            "explanation": "くれる describes a gift moving toward the speaker's side, given by someone else."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the blank.",
            "sentence": "誕生日に何を___ましたか。",
            "answer": "もらい",
            "hint": "You're asking what someone received.",
            "explanation": "何をもらいましたか asks \"what did you receive\" — もらう is the receiving verb."
          }
        ]
      },
      {
        "heading": "あげる: Giving Away From Yourself",
        "body": [
          "あげる follows the same basic sentence pattern as any ます-verb sentence: [Giver] は/が [Receiver] に [Object] を あげます. The giver — often the speaker, marked with は because it's usually the topic of the conversation — hands something to the receiver, who is marked with に, exactly like the destination particle に you already know from verbs like 行きます. 私は友達に本をあげます literally reads \"As for me, to my friend, I give a book\" — and that direction, from the topic outward to the person marked with に, is the whole grammatical picture.",
          "あげる isn't limited to the speaker as giver. It also covers any transaction where the giver is someone the speaker identifies with — a friend, a sibling, a coworker — as long as the receiver is not the speaker's side. 姉は弟にプレゼントをあげました (\"My older sister gave my younger brother a present\") uses あげる correctly because both people are members of the speaker's family, but the gift is still moving away from the sister's side to the brother's — nobody involved is \"me,\" so there's no inward direction to trigger くれる.",
          "One nuance worth knowing even though it isn't the focus here: あげる can sound slightly self-important when the receiver is someone clearly above you in status, like a teacher or your boss — saying \"I gave my teacher flowers\" with plain あげる can come across as if you're bragging about doing them a favor. Japanese has a humble version, さしあげる, reserved for exactly that situation. You'll learn it properly later; for now just recognize that あげる is the everyday, neutral choice among people of roughly equal status."
        ],
        "examples": [
          {
            "es": "私は友達に本をあげます。",
            "en": "watashi wa tomodachi ni hon o agemasu. -- I give my friend a book."
          },
          {
            "es": "姉は弟にプレゼントをあげました。",
            "en": "ane wa otouto ni purezento o agemashita. -- My older sister gave my younger brother a present."
          },
          {
            "es": "田中さんに花をあげましょうか。",
            "en": "Tanaka-san ni hana o agemashou ka. -- Shall I give Tanaka flowers?"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Put the words in order to say \"I give my friend a book.\"",
            "words": [
              "私",
              "は",
              "友達",
              "に",
              "本",
              "を",
              "あげます"
            ],
            "translation": "I give my friend a book.",
            "explanation": "Topic (giver) は receiver に object をあげます — the standard あげる pattern."
          },
          {
            "type": "multi-select",
            "question": "Select all sentences that correctly use あげる.",
            "options": [
              "私は友達に花をあげます。",
              "友達が私に花をあげます。",
              "姉は弟にプレゼントをあげました。",
              "母が私に本をあげました。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "あげる needs the gift moving away from the subject to someone outside the speaker's own side. Options 2 and 4 both describe something arriving at the speaker's side, which needs くれる instead."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "You are telling a friend what you plan to do for your sister's birthday. Which sentence correctly says \"I will give my sister a book\"?",
        "options": [
          "私は妹に本をあげます。",
          "私は妹に本をもらいます。",
          "妹が私に本をくれます。",
          "私は妹に本をくれます。"
        ],
        "correctIndex": 0,
        "explanation": "The book moves away from the speaker to the sister, so あげる is correct. くれる would be backwards here, since the speaker is the giver, not the receiver."
      },
      {
        "type": "multiple-choice",
        "question": "田中さんが私に花をくれました。 What does this sentence mean?",
        "options": [
          "I gave Tanaka flowers.",
          "Tanaka gave me flowers.",
          "I received flowers from Tanaka's friend.",
          "Tanaka received flowers from me."
        ],
        "correctIndex": 1,
        "explanation": "くれる marks a transaction moving toward the speaker's side; が marks the giver (Tanaka), so the sentence means \"Tanaka gave me flowers.\""
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the sentence with the correct form of あげる.",
        "sentence": "私は友達に誕生日プレゼントを___ました。",
        "answer": "あげ",
        "hint": "The speaker is the one giving here.",
        "explanation": "Since the speaker is giving the present away to a friend, あげる is correct: あげました。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the sentence with the correct form of くれる.",
        "sentence": "友達が私にプレゼントを___ました。",
        "answer": "くれ",
        "hint": "The friend is giving something to the speaker.",
        "explanation": "Because the gift moves toward the speaker's side, くれる is correct: くれました。"
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order to say \"I gave my little sister chocolate.\"",
        "words": [
          "私",
          "は",
          "妹",
          "に",
          "チョコレート",
          "を",
          "あげました"
        ],
        "translation": "I gave my little sister chocolate.",
        "explanation": "Giver (topic) は receiver に object をあげました — the chocolate moves away from the speaker to the sister."
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order to say \"Tanaka gave me a book.\"",
        "words": [
          "田中さん",
          "が",
          "私",
          "に",
          "本",
          "を",
          "くれました"
        ],
        "translation": "Tanaka gave me a book.",
        "explanation": "Giver が receiver に object をくれました — the book moves toward the speaker, so くれる is used with が marking the giver, Tanaka."
      }
    ]
  },
  {
    "slug": "giving-receiving-agemoraukureru-2",
    "level": "JA-A2",
    "number": 14,
    "title": "Giving and Receiving: あげる, もらう, くれる, Part 2 of 3",
    "summary": "Learn Japanese's three perspective-driven giving-and-receiving verbs — あげる, もらう, and くれる — and master the single biggest trap for English speakers: choosing between あげる and くれる based on whether a gift moves away from or toward the speaker's side.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "もらう: Receiving From Someone",
        "body": [
          "もらう flips the roles: [Receiver] は/が [Giver] に (or から) [Object] を もらいます. Notice that the receiver — again, usually the speaker — takes the position of the topic, and the giver is marked with に or から instead of the object marker used for あげる's receiver. 私は友達に本をもらいました and 私は友達から本をもらいました both mean \"I received a book from my friend\"; either particle is acceptable when the giver is a person, though から can feel slightly more natural when the giver is a place or organization, like 会社から (\"from the company\")。",
          "Unlike the あげる/くれる pair, もらう doesn't split into two different verbs depending on direction. That's because the subject of もらう is always the one receiving — the sentence is already telling you, grammatically, whose side the object is arriving at. There's no separate word needed for \"someone else receives something from me,\" because that's still described from the receiver's viewpoint: 友達は私に本をもらいました means \"My friend received a book from me,\" with 友達, not 私, as the subject.",
          "This makes もらう the most flexible of the three verbs to use safely, but don't let that tempt you into using it as a catch-all. もらう specifically frames the sentence around the receiving event, so it fits best when receiving — not giving — is what you want to emphasize."
        ],
        "examples": [
          {
            "es": "私は友達に本をもらいました。",
            "en": "watashi wa tomodachi ni hon o moraimashita. -- I received a book from my friend."
          },
          {
            "es": "誕生日に母から時計をもらいました。",
            "en": "tanjoubi ni haha kara tokei o moraimashita. -- I received a watch from my mother for my birthday."
          },
          {
            "es": "弟は友達にゲームをもらいました。",
            "en": "otouto wa tomodachi ni geemu o moraimashita. -- My younger brother received a game from his friend."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which particle(s) can mark the giver in a もらう sentence when the giver is a person?",
            "options": [
              "を only",
              "は or が only",
              "に or から",
              "で only"
            ],
            "correctIndex": 2,
            "explanation": "Both に and から can mark the giver of a もらう sentence when the giver is a person."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence with a particle that marks the giver.",
            "sentence": "私は母___時計をもらいました。",
            "answer": "に",
            "hint": "Either に or から works here; give one.",
            "explanation": "に (or から) marks the giver, 母, in this もらう sentence."
          }
        ]
      },
      {
        "heading": "くれる: Someone Gives TO You",
        "body": [
          "くれる shares あげる's basic meaning — \"give\" — but describes the exact opposite direction: [Giver] が [Receiver] に [Object] を くれます, where the receiver is the speaker or someone in the speaker's in-group. 友達が私に本をくれました means \"My friend gave me a book.\" Notice the giver is marked with が, not は; the giver is usually new or emphasized information (\"it was my friend who gave it\"), while the receiver, when it's the speaker, is so predictable that 私に is frequently dropped altogether: 友達が本をくれました is a completely natural, complete sentence.",
          "Here is the point that trips up nearly every English speaker: あげる and くれる are not two ways of saying the same thing. あげる can never describe someone giving something to you, and くれる can never describe you giving something to someone else. 友達は私に本をあげました is not just unnatural — most Japanese speakers will hear it as flatly wrong, because あげる's direction is outward from its subject, and here the subject (友達) would be handing something toward the speaker, which is くれる's job, not あげる's.",
          "The in-group extends beyond just \"me.\" If a friend gives a present to your little sister, that still counts as movement toward your side, so くれる is correct: 友達が妹にプレゼントをくれました (\"My friend gave my little sister a present\")。You'll build on exactly this idea in a later section."
        ],
        "examples": [
          {
            "es": "友達が私に本をくれました。",
            "en": "tomodachi ga watashi ni hon o kuremashita. -- My friend gave me a book."
          },
          {
            "es": "田中さんがチョコレートをくれました。",
            "en": "Tanaka-san ga chokoreeto o kuremashita. -- Tanaka gave me chocolate."
          },
          {
            "es": "兄が妹に誕生日プレゼントをくれました。",
            "en": "ani ga imouto ni tanjoubi purezento o kuremashita. -- My older brother gave my younger sister a birthday present."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Put the words in order to say \"My friend gave me chocolate.\"",
            "words": [
              "友達",
              "が",
              "私",
              "に",
              "チョコレート",
              "を",
              "くれました"
            ],
            "translation": "My friend gave me chocolate.",
            "explanation": "Giver が receiver (speaker) に object をくれました — the chocolate arrives at the speaker's side."
          },
          {
            "type": "multiple-choice",
            "question": "Why is が, not は, typically used to mark the giver in a くれる sentence?",
            "options": [
              "Because くれる is always a question",
              "Because the giver is usually new or emphasized information",
              "Because は cannot mark people",
              "Because くれる is in the past tense"
            ],
            "correctIndex": 1,
            "explanation": "が highlights the giver as the focus of new information (\"it was my friend who gave it\"), which is the typical role of the giver in a くれる sentence."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multi-select",
        "question": "Select all sentences that are grammatically correct.",
        "options": [
          "友達が私に花をくれました。",
          "私は友達に花をくれました。",
          "妹が私にクッキーをくれました。",
          "友達が妹に本をあげました。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "くれる correctly describes gifts arriving at the speaker's side (from a friend to me, or from a friend to my sister)。Option 2 has the speaker as giver, which needs あげる, and option 4 describes a gift arriving at the speaker's sister — an in-group member — so it needs くれる, not あげる。"
      },
      {
        "type": "multi-select",
        "question": "Select all sentences that mean the speaker received something (using もらう)。",
        "options": [
          "私は友達に本をもらいました。",
          "私は友達に本をあげました。",
          "私は母から時計をもらいました。",
          "友達が私に時計をくれました。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "もらう always frames the sentence around receiving, with the receiver as the subject. Option 2 describes giving, not receiving, and option 4 describes the speaker receiving too, but with くれる rather than もらう, so it doesn't fit what the question asked for."
      },
      {
        "type": "matching",
        "instructions": "Match each Japanese sentence to its English translation.",
        "pairs": [
          {
            "left": "私は友達に本をあげました。",
            "right": "I gave my friend a book."
          },
          {
            "left": "友達が私に本をくれました。",
            "right": "My friend gave me a book."
          },
          {
            "left": "私は友達に本をもらいました。",
            "right": "I received a book from my friend."
          },
          {
            "left": "母が友達に花をあげました。",
            "right": "My mother gave her friend flowers."
          }
        ],
        "explanation": "Each sentence's verb signals a different direction: あげる (away from the subject), くれる (toward the speaker's side), and もらう (framed around receiving)。"
      },
      {
        "type": "multiple-choice",
        "question": "Which particle correctly marks the giver in this もらう sentence? 私は誕生日に母___時計をもらいました。",
        "options": [
          "を",
          "は",
          "から",
          "が"
        ],
        "correctIndex": 2,
        "explanation": "から (like に) marks the giver in a もらう sentence. を would mark the object (時計), not the giver, so から is the correct choice here."
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank with the correct verb (あげました or くれました)。",
        "sentence": "友達の誕生日に、私は花を___。",
        "answer": "あげました",
        "hint": "The speaker is giving flowers to a friend on the friend's birthday.",
        "explanation": "Since the speaker is the giver and the flowers move away to the friend, あげました is correct."
      }
    ]
  },
  {
    "slug": "giving-receiving-agemoraukureru-3",
    "level": "JA-A2",
    "number": 15,
    "title": "Giving and Receiving: あげる, もらう, くれる, Part 3 of 3",
    "summary": "Learn Japanese's three perspective-driven giving-and-receiving verbs — あげる, もらう, and くれる — and master the single biggest trap for English speakers: choosing between あげる and くれる based on whether a gift moves away from or toward the speaker's side.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "あげる vs くれる: The Real Test",
        "body": [
          "Run every giving sentence through one question: does the object move away from the speaker's side, or toward it? Away → あげる. Toward → くれる. This single test resolves the confusion almost every time, because unlike English \"give,\" Japanese grammar encodes the direction directly into the verb — you can't accidentally leave it ambiguous the way \"I gave him a book\" leaves it unclear who benefits.",
          "Look at these near-mirror-image sentences side by side. 私は田中さんにチョコをあげました (\"I gave Tanaka chocolate\") — the chocolate leaves my side and goes to Tanaka, so あげる. 田中さんが私にチョコをくれました (\"Tanaka gave me chocolate\") — the chocolate arrives at my side from Tanaka, so くれる. Both are natural English sentences using \"give,\" and both describe someone handing over chocolate, but in Japanese they are built from opposite verbs because the direction relative to the speaker has flipped.",
          "The test still works when neither person is literally \"I.\" 弟は友達に漫画をあげました (\"My little brother gave his friend manga\") uses あげる because the manga leaves my brother's side — even though my brother is part of my in-group, the receiver (his friend) is outside it, so the direction is still outward. Compare that to a sentence in the next section, where the receiver is inside your in-group instead — that's when くれる takes over even though you, the speaker, aren't directly involved."
        ],
        "examples": [
          {
            "es": "私は田中さんにチョコをあげました。",
            "en": "watashi wa Tanaka-san ni choko o agemashita. -- I gave Tanaka chocolate."
          },
          {
            "es": "田中さんが私にチョコをくれました。",
            "en": "Tanaka-san ga watashi ni choko o kuremashita. -- Tanaka gave me chocolate."
          },
          {
            "es": "弟は友達に漫画をあげました。",
            "en": "otouto wa tomodachi ni manga o agemashita. -- My little brother gave his friend manga."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Select the sentence(s) that describe the SAME direction as 友達が私に本をくれました。",
            "options": [
              "田中さんが私にチョコをくれました。",
              "私は田中さんにチョコをあげました。",
              "私は友達に本をあげました。",
              "先生が私にペンをくれました。"
            ],
            "correctIndexes": [
              0,
              3
            ],
            "explanation": "All くれる sentences share the same direction: something arriving at the speaker's side from someone else. The あげる sentences describe the opposite direction."
          },
          {
            "type": "fill-blank",
            "prompt": "Choose あげました or くれました to complete the sentence correctly.",
            "sentence": "田中さんが私にチョコを___。",
            "answer": "くれました",
            "hint": "Tanaka is the giver; the speaker is the receiver.",
            "explanation": "Since Tanaka (が) gives to the speaker (に), the gift arrives at the speaker's side, so くれました is correct."
          }
        ]
      },
      {
        "heading": "In-Group Perspective: Family and Friends",
        "body": [
          "Japanese speakers organize people into 内 (uchi, \"inside/in-group\") and 外 (soto, \"outside/out-group\"), and giving-and-receiving verbs are one of the clearest places this shows up in everyday grammar. Your immediate family, close friends, and sometimes your own team or company all count as your uchi. When you're narrating a transaction between two other people, you choose あげる or くれる by asking which side of that uchi/soto line you identify with — not by asking whether you were literally involved.",
          "If an outsider gives something to a member of your in-group, that's movement toward your side, so くれる is correct even though you weren't the one who received anything: 友達が母に花をくれました (\"My friend gave my mother flowers\") — your mother is your uchi, so the flowers are treated as arriving on your side of the line. Flip the roles and it becomes あげる: 母は友達に手紙をあげました (\"My mother gave her friend a letter\") — now the letter is leaving your side, going out to someone outside your in-group.",
          "This is also why くれる shows up constantly in conversations about family even when the speaker never says 私に at all. 妹が私にクッキーをくれました can just as naturally be said as 妹がクッキーをくれました — the くれる itself already signals \"toward me/my side,\" so the receiver doesn't need to be spelled out."
        ],
        "examples": [
          {
            "es": "友達が母に花をくれました。",
            "en": "tomodachi ga haha ni hana o kuremashita. -- My friend gave my mother flowers."
          },
          {
            "es": "母は友達に手紙をあげました。",
            "en": "haha wa tomodachi ni tegami o agemashita. -- My mother gave her friend a letter."
          },
          {
            "es": "妹が私にクッキーをくれました。",
            "en": "imouto ga watashi ni kukkii o kuremashita. -- My little sister gave me cookies."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each sentence to the correct description of its direction.",
            "pairs": [
              {
                "left": "友達が母に花をくれました。",
                "right": "A gift arrives at the speaker's in-group (mother)."
              },
              {
                "left": "母は友達に手紙をあげました。",
                "right": "A gift leaves the speaker's in-group (mother) to an outsider."
              },
              {
                "left": "妹が私にクッキーをくれました。",
                "right": "A gift arrives directly at the speaker."
              },
              {
                "left": "私は妹にクッキーをあげました。",
                "right": "A gift leaves the speaker to an in-group member."
              }
            ],
            "explanation": "Whether the giver or receiver is a family member matters less than which side of the uchi/soto line the object is moving toward."
          },
          {
            "type": "multiple-choice",
            "question": "友達が弟に本をくれました。 Why is くれる correct here even though the speaker didn't receive anything?",
            "options": [
              "Because 弟 (the speaker's younger brother) is part of the speaker's in-group, so the book is moving toward the speaker's side",
              "Because くれる is always used with 弟",
              "Because the friend is older than the brother",
              "Because the sentence is a question"
            ],
            "correctIndex": 0,
            "explanation": "The receiver, 弟, belongs to the speaker's in-group, so even though \"I\" wasn't directly involved, the direction is still treated as toward the speaker's side, requiring くれる."
          }
        ]
      },
      {
        "heading": "Putting It Together: Birthday Gifts",
        "body": [
          "All three verbs conjugate exactly like the other ます-verbs you already know: あげます/あげません/あげました/あげませんでした, もらいます/もらいません/もらいました/もらいませんでした, and くれます/くれません/くれました/くれませんでした follow the same present-negative-past-past-negative pattern from A1. Nothing new to learn there — the only new work is choosing the right verb in the first place.",
          "Two related words are worth recognizing even though they're not the focus of this lesson: さしあげる is the humble version of あげる, used when giving to someone clearly above you in status (先生に花をさしあげました, \"I gave my teacher flowers,\" humbly), and いただく is the humble version of もらう. You'll study both properly in a later lesson on polite speech levels — for now, just don't be surprised if you see them.",
          "Put all three together and a birthday party tells a complete story: 誕生日パーティーで、私は友達にケーキをあげました。そして、友達は私にプレゼントをくれました。(\"At the birthday party, I gave my friend cake. And my friend gave me a present.\")Notice how naturally the verb switches the moment the direction of the gift reverses — that switch is the entire grammar point of this lesson."
        ],
        "examples": [
          {
            "es": "誕生日パーティーで、私は友達にケーキをあげました。",
            "en": "tanjoubi paatii de, watashi wa tomodachi ni keeki o agemashita. -- At the birthday party, I gave my friend cake."
          },
          {
            "es": "そして、友達は私にプレゼントをくれました。",
            "en": "soshite, tomodachi wa watashi ni purezento o kuremashita. -- And my friend gave me a present."
          },
          {
            "es": "先生に花をさしあげました。",
            "en": "sensei ni hana o sashiagemashita. -- I gave my teacher flowers. (humble)"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence with the correct past-tense verb.",
            "sentence": "去年の誕生日に、姉は私にセーターを___。",
            "answer": "くれました",
            "hint": "The older sister is giving to the speaker.",
            "explanation": "Since the sweater moves from the sister to the speaker, くれる is correct: くれました。"
          },
          {
            "type": "word-order",
            "prompt": "Put the words in order to say \"What did you receive for your birthday?\"",
            "words": [
              "誕生日",
              "に",
              "何",
              "を",
              "もらいました",
              "か"
            ],
            "translation": "What did you receive for your birthday?",
            "explanation": "誕生日に何をもらいましたか asks about what the listener received, using もらう's past interrogative form."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "word-order",
        "prompt": "Put the words in order to say \"My older sister gave my younger brother manga.\"",
        "words": [
          "姉",
          "は",
          "弟",
          "に",
          "漫画",
          "を",
          "あげました"
        ],
        "translation": "My older sister gave my younger brother manga.",
        "explanation": "Both people are outside the speaker's own \"I,\" and the manga moves away from the sister to the brother, so あげる is correct even though the giver is a family member."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence is grammatically incorrect in Japanese?",
        "options": [
          "友達が私に本をくれました。",
          "私は友達に本をあげました。",
          "友達は私に本をあげました。",
          "私は友達に本をもらいました。"
        ],
        "correctIndex": 2,
        "explanation": "友達は私に本をあげました is backwards: あげる can't describe someone giving to the speaker. It should be 友達は私に本をくれました, using くれる instead."
      },
      {
        "type": "multiple-choice",
        "question": "妹が私にクッキーをくれました。 Who is the giver in this sentence?",
        "options": [
          "The speaker",
          "The speaker's younger sister",
          "A friend",
          "Unknown from this sentence"
        ],
        "correctIndex": 1,
        "explanation": "が marks the giver in a くれる sentence; here 妹 (younger sister) is marked with が, so she is the one who gave the cookies."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the sentence describing what you received last year.",
        "sentence": "去年の誕生日に、財布を___。",
        "answer": "もらいました",
        "hint": "You're describing something you received, not gave.",
        "explanation": "Talking about what you received uses もらう; もらいました is the polite past form."
      },
      {
        "type": "multi-select",
        "question": "Select all sentences where the gift is moving toward the speaker's in-group.",
        "options": [
          "友達が母に花をくれました。",
          "私は友達に花をあげました。",
          "田中さんが私にケーキをくれました。",
          "私は田中さんにケーキをあげました。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "In both correct sentences, くれる signals the gift arriving at the speaker's side — either directly at the speaker (Tanaka's cake) or at an in-group member (the speaker's mother)。The あげる sentences describe the opposite direction, gifts leaving the speaker's side."
      }
    ]
  },
  {
    "slug": "particles-kara-made-ya-comparison-1",
    "level": "JA-A2",
    "number": 16,
    "title": "Particles for Range, Listing, and Comparison: から/まで, や, へ vs に, より, のほうが, Part 1 of 3",
    "summary": "Learn to express time and place ranges with から and まで, list examples non-exhaustively with や (versus the exhaustive と), fine-tune direction versus destination with へ and に, and compare two things using より and のほうが.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "から and まで with Time",
        "body": [
          "You already know how to state a single time with に, such as 七時に (at 7:00). To describe a range of time — a starting point and an ending point — Japanese uses から ('from') and まで ('until/to') attached directly after time expressions.",
          "These two particles are often used together in the pattern [time A]から[time B]まで, meaning 'from time A to time B.' Either one can also appear alone if only the start or only the end matters.",
          "から and まで attach the same way regardless of whether the time is a clock time, a day of the week, or a month, so the pattern is very flexible once you know it."
        ],
        "examples": [
          {
            "es": "授業は九時から十二時までです。",
            "en": "jugyou wa kuji kara juuni-ji made desu. -- Class is from 9:00 to 12:00."
          },
          {
            "es": "月曜日から金曜日まで働きます。",
            "en": "getsuyoubi kara kinyoubi made hatarakimasu. -- I work from Monday to Friday."
          },
          {
            "es": "夏休みは七月から九月までです。",
            "en": "natsuyasumi wa shichigatsu kara kugatsu made desu. -- Summer vacation is from July to September."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence with the correct particle for the starting point of a time range.",
            "sentence": "図書館は九時___五時までです。",
            "answer": "から",
            "hint": "This marks the starting point of a time range.",
            "explanation": "から marks the starting point of a period of time, while まで marks the ending point; together they form the 'from...to' pattern for time ranges."
          },
          {
            "type": "multiple-choice",
            "question": "Which sentence correctly says 'Summer vacation is from July to September'?",
            "options": [
              "夏休みは七月に九月です。",
              "夏休みは七月から九月までです。",
              "夏休みは七月や九月です。",
              "夏休みは七月へ九月です。"
            ],
            "correctIndex": 1,
            "explanation": "から marks the starting time and まで marks the ending time; only this option uses the correct から...まで pairing for a time range."
          }
        ]
      },
      {
        "heading": "から and まで with Place",
        "body": [
          "から and まで also work with places, not just time: から marks the starting location ('from [place]') and まで marks the ending location ('to/as far as [place]')。Together they frame an entire route.",
          "This pattern is especially common with verbs of movement like 行きます, 来ます, and 歩きます, and with questions asking how far or how long a route is.",
          "Don't confuse this with に or へ, which mark only the destination of a single movement; から...まで describes the whole span between two points."
        ],
        "examples": [
          {
            "es": "駅から学校まで歩きます。",
            "en": "eki kara gakkou made arukimasu. -- I walk from the station to school."
          },
          {
            "es": "大阪から東京まで新幹線で行きます。",
            "en": "Oosaka kara Toukyou made shinkansen de ikimasu. -- I go from Osaka to Tokyo by shinkansen."
          },
          {
            "es": "ここから郵便局までどのくらいですか。",
            "en": "koko kara yuubinkyoku made dono kurai desu ka. -- How far is it from here to the post office?"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Put the words in order to say 'I walk from the station to school.'",
            "words": [
              "駅",
              "から",
              "学校",
              "まで",
              "歩きます"
            ],
            "translation": "I walk from the station to school.",
            "explanation": "から attaches to the starting place (駅) and まで to the ending place (学校); the verb 歩きます comes at the end as usual."
          },
          {
            "type": "multiple-choice",
            "question": "What does 「ここから郵便局までどのくらいですか。」mean?",
            "options": [
              "How far is it from here to the post office?",
              "Where is the post office from here?",
              "When does the post office open?",
              "Is the post office near here?"
            ],
            "correctIndex": 0,
            "explanation": "から and まで frame the route being measured — from here (ここから) to the post office (郵便局まで) — and どのくらい asks about the extent or distance of that route."
          }
        ]
      },
      {
        "heading": "や for Non-Exhaustive Listing vs と",
        "body": [
          "You already know と for connecting nouns as a complete, closed list: 'A and B, and nothing else.' や is a different listing particle: it gives a few representative examples from a larger, unspecified set — 'A and B, among other things.'",
          "や is frequently followed by など ('etc., and so on') after the last item in the list, which makes the 'these are just examples' meaning extra clear, though など is optional.",
          "Choosing と versus や changes what you're claiming: と says the list is complete, while や leaves room for more items you haven't mentioned."
        ],
        "examples": [
          {
            "es": "机の上に本とペンがあります。",
            "en": "tsukue no ue ni hon to pen ga arimasu. -- There is a book and a pen on the desk. (exactly these two)"
          },
          {
            "es": "机の上に本やペンなどがあります。",
            "en": "tsukue no ue ni hon ya pen nado ga arimasu. -- There are things like a book, a pen, and so on, on the desk."
          },
          {
            "es": "好きな果物はりんごやバナナです。",
            "en": "suki na kudamono wa ringo ya banana desu. -- My favorite fruits are things like apples and bananas."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Which sentences use や correctly to imply a non-exhaustive list (examples among possibly more items)?",
            "options": [
              "机の上に本やペンがあります。",
              "机の上に本とペンがあります。",
              "かばんの中にパスポートやカメラなどがあります。",
              "友達と映画を見ました。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "や signals that the listed items (本, ペン / パスポート, カメラ) are just examples from a larger, unspecified set, especially when followed by など ('etc.')。と, by contrast, lists a closed, complete set, as in the other two options."
          },
          {
            "type": "fill-blank",
            "prompt": "Choose と or や: this sentence lists exactly two items and nothing else.",
            "sentence": "机の上に本___ペンがあります。",
            "answer": "と",
            "hint": "The list is closed — only these two items are on the desk.",
            "explanation": "Because the sentence describes a complete, exhaustive list of exactly two items, と is required; や would incorrectly suggest there might be other items too."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Choose the correct completion: 「銀行は九時___三時までです。」",
        "options": [
          "から",
          "まで",
          "や",
          "より"
        ],
        "correctIndex": 0,
        "explanation": "から marks the starting point of the bank's hours (9:00); まで later in the sentence already marks the ending point (3:00), so から is needed for the blank."
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank to say 'From the station to the museum is about ten minutes.'",
        "sentence": "駅から美術館___十分ぐらいです。",
        "answer": "まで",
        "hint": "This marks the ending point of the distance being measured.",
        "explanation": "まで marks the ending point (美術館) of the distance being described, pairing with から, which already marks the starting point (駅)。"
      },
      {
        "type": "multi-select",
        "question": "Which sentences use と correctly for an exhaustive, closed list?",
        "options": [
          "財布の中に千円札と五百円玉があります。",
          "財布の中に千円札や五百円玉があります。",
          "冷蔵庫に卵とバターがあります。それだけです。",
          "冷蔵庫に卵やバターなどがあります。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "と lists items exhaustively — nothing else is included — which fits the first option (a wallet with exactly these two items) and the third, where それだけです ('that's all') confirms the list is complete; や in the other two options instead suggests there may be more items than listed."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'There are things like apples and bananas in the fridge.'",
        "words": [
          "冷蔵庫",
          "に",
          "りんご",
          "や",
          "バナナ",
          "が",
          "あります"
        ],
        "translation": "There are things like apples and bananas in the fridge.",
        "explanation": "や lists りんご and バナナ as representative examples of what's in the fridge, implying other items may be there too, unlike と, which would name a complete list."
      },
      {
        "type": "multiple-choice",
        "question": "Which best captures the difference between へ and に after a place in 「大阪へ行きます」vs「大阪に行きます」?",
        "options": [
          "へ is only for trains, に is only for cars.",
          "へ slightly emphasizes the journey/direction, に slightly emphasizes the destination point; in casual speech they're largely interchangeable.",
          "へ is polite and に is rude.",
          "There is no difference at all in any context."
        ],
        "correctIndex": 1,
        "explanation": "へ puts a bit more focus on heading toward a place, while に puts more focus on the specific destination reached; in everyday conversation both are commonly used and understood the same way for simple 'go to' statements."
      }
    ]
  },
  {
    "slug": "particles-kara-made-ya-comparison-2",
    "level": "JA-A2",
    "number": 17,
    "title": "Particles for Range, Listing, and Comparison: から/まで, や, へ vs に, より, のほうが, Part 2 of 3",
    "summary": "Learn to express time and place ranges with から and まで, list examples non-exhaustively with や (versus the exhaustive と), fine-tune direction versus destination with へ and に, and compare two things using より and のほうが.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "へ vs に: Direction vs Destination",
        "body": [
          "Both へ and に can mark the goal of movement after verbs like 行きます, 来ます, and 帰ります. へ puts a bit more emphasis on the direction or journey toward a place, while に puts more emphasis on arriving at a specific destination point.",
          "In everyday casual conversation, the two are largely interchangeable for simple 'go to' statements, and に is generally the more common choice overall. へ tends to show up more in writing or when the speaker wants to highlight 'heading toward' rather than a precise target.",
          "に also has jobs that へ cannot do, such as marking the person of an indirect object (会います 'to meet' someone) or a specific point in time; in those cases only に is possible, and へ cannot substitute for it."
        ],
        "examples": [
          {
            "es": "来週、大阪へ行きます。",
            "en": "raishuu, Oosaka e ikimasu. -- Next week I'm heading to Osaka."
          },
          {
            "es": "七時に家に帰ります。",
            "en": "shichi-ji ni ie ni kaerimasu. -- I'll return home at 7:00."
          },
          {
            "es": "友達に会います。それから、京都へ行きます。",
            "en": "tomodachi ni aimasu. sorekara, Kyouto e ikimasu. -- I'll meet my friend. After that, I'm going to Kyoto."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "In 「大阪へ行きます」, what does へ emphasize compared to に?",
            "options": [
              "The exact arrival point",
              "The direction or journey toward a place",
              "That the action happens repeatedly",
              "That the place is far away"
            ],
            "correctIndex": 1,
            "explanation": "へ highlights the direction of movement or the journey itself, while に would emphasize arriving at a precise destination point; in casual speech the two often overlap for simple 'go to' sentences."
          },
          {
            "type": "fill-blank",
            "prompt": "Fill in the blank with the particle that CANNOT be replaced by へ, because it marks the person met rather than a direction.",
            "sentence": "駅で友達___会いました。",
            "answer": "に",
            "hint": "会います always takes this particle for the person met, regardless of direction.",
            "explanation": "に after a person marks them as the indirect object of 会います ('to meet')；this use of に is not about spatial direction, so へ cannot substitute for it here, unlike with motion verbs such as 行きます。"
          }
        ]
      },
      {
        "heading": "Comparing Two Things with より",
        "body": [
          "To say one thing is more [adjective] than another, use the pattern A は B より [adjective]です. B, marked by より, is the standard being compared against, and A, marked by は, is what's being described.",
          "より attaches directly to the noun being compared against, and the adjective that follows conjugates completely normally — present, negative, or past, exactly as you already learned.",
          "Word order is somewhat flexible: the より-phrase can be moved to the front of the sentence for emphasis, but A は B より [adjective] is the neutral, most common order."
        ],
        "examples": [
          {
            "es": "新幹線はバスより速いです。",
            "en": "shinkansen wa basu yori hayai desu. -- The shinkansen is faster than the bus."
          },
          {
            "es": "今日は昨日より寒いです。",
            "en": "kyou wa kinou yori samui desu. -- Today is colder than yesterday."
          },
          {
            "es": "この部屋はあの部屋より静かです。",
            "en": "kono heya wa ano heya yori shizuka desu. -- This room is quieter than that room."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange the words to say 'The shinkansen is faster than the bus.'",
            "words": [
              "新幹線",
              "は",
              "バス",
              "より",
              "速い",
              "です"
            ],
            "translation": "The shinkansen is faster than the bus.",
            "explanation": "より marks バス as the standard of comparison; the pattern A は B より [adjective]です means 'A is more [adjective] than B.'"
          },
          {
            "type": "multiple-choice",
            "question": "Which sentence means 'Today is colder than yesterday'?",
            "options": [
              "今日は昨日より寒いです。",
              "昨日は今日より寒いです。",
              "今日と昨日は寒いです。",
              "今日は昨日ほど寒くないです。"
            ],
            "correctIndex": 0,
            "explanation": "The subject before は (今日) is the one being described, and より marks 昨日 as what it's compared against, so this sentence correctly says 'today is colder than yesterday.'"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank with the particle that cannot be replaced by へ, because it marks an indirect object rather than a direction.",
        "sentence": "駅で友達___会いました。",
        "answer": "に",
        "hint": "会います always takes this particle for the person met, regardless of direction.",
        "explanation": "に after a person marks them as the indirect object of 会います ('to meet')；this use of に is not about spatial direction, so へ cannot substitute for it here, unlike with motion verbs such as 行きます。"
      },
      {
        "type": "multiple-choice",
        "question": "In 「この部屋はあの部屋より静かです」, what role does より play?",
        "options": [
          "It marks the subject of the sentence.",
          "It marks あの部屋 as the standard being compared against.",
          "It means 'and' between two nouns.",
          "It makes the adjective negative."
        ],
        "correctIndex": 1,
        "explanation": "より attaches to the noun that serves as the point of comparison (あの部屋)；the sentence states that この部屋 is quieter relative to that standard."
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'This room is quieter than that room.'",
        "words": [
          "この",
          "部屋",
          "は",
          "あの",
          "部屋",
          "より",
          "静か",
          "です"
        ],
        "translation": "This room is quieter than that room.",
        "explanation": "The pattern A は B より [な-adjective]です compares A to B, with より marking B (あの部屋) as what A is being measured against."
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the comparison: 'This test is harder than that one.'",
        "sentence": "このテストはあのテスト___難しいです。",
        "answer": "より",
        "hint": "This particle marks the item being compared against.",
        "explanation": "より marks あのテスト as the standard of comparison, giving the meaning 'this test is more difficult than that test.'"
      },
      {
        "type": "multiple-choice",
        "question": "What does のほうが mark in a comparison sentence?",
        "options": [
          "The less preferred option",
          "The option being favored or judged as 'more so'",
          "A location",
          "A time range"
        ],
        "correctIndex": 1,
        "explanation": "のほうが attaches to the item that comes out ahead in the comparison — the one being favored or described as having more of the quality in question."
      }
    ]
  },
  {
    "slug": "particles-kara-made-ya-comparison-3",
    "level": "JA-A2",
    "number": 18,
    "title": "Particles for Range, Listing, and Comparison: から/まで, や, へ vs に, より, のほうが, Part 3 of 3",
    "summary": "Learn to express time and place ranges with から and まで, list examples non-exhaustively with や (versus the exhaustive と), fine-tune direction versus destination with へ and に, and compare two things using より and のほうが.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Stating a Preference with のほうが",
        "body": [
          "To highlight which of two options you prefer or judge as 'more so,' attach のほうが to that option: A のほうが B より [adjective]です — 'A is more [adjective] compared to B.' より still marks the thing being compared against, and either part can be dropped when context makes it clear.",
          "This pattern is especially common when answering a question like どちらが好きですか ('Which do you like better?')：the reply typically drops the 'B より' part entirely and just says A のほうが...です。",
          "のほうが foregrounds a choice or preference between two specific options, whereas a plain より sentence (without のほうが) simply states an objective comparison without necessarily implying a preference."
        ],
        "examples": [
          {
            "es": "コーヒーと紅茶とどちらが好きですか。コーヒーのほうが好きです。",
            "en": "koohii to koucha to dochira ga suki desu ka. koohii no hou ga suki desu. -- Which do you like more, coffee or tea? -- I like coffee more."
          },
          {
            "es": "電車のほうがバスより便利です。",
            "en": "densha no hou ga basu yori benri desu. -- The train is more convenient than the bus."
          },
          {
            "es": "夏より冬のほうが好きです。",
            "en": "natsu yori fuyu no hou ga suki desu. -- I like winter more than summer."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the preference sentence: 'The train is more convenient than the bus.'",
            "sentence": "電車___ほうがバスより便利です。",
            "answer": "の",
            "hint": "This connects the noun 電車 to ほうが, marking it as the preferred option.",
            "explanation": "のほうが attaches to the preferred item (電車) to mark it as 'the one that is more so' compared to the item marked by より (バス)。"
          },
          {
            "type": "multi-select",
            "question": "Which responses correctly answer 「コーヒーと紅茶とどちらが好きですか。」by stating a preference for coffee?",
            "options": [
              "コーヒーのほうが好きです。",
              "コーヒーより紅茶が好きです。",
              "コーヒーが好きです。紅茶よりおいしいです。",
              "紅茶のほうが好きです。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "コーヒーのほうが好きです directly states a preference for coffee using のほうが, and the third option expresses the same preference by saying coffee is tastier (おいしい) than tea using より; the other two options both state a preference for tea instead."
          }
        ]
      },
      {
        "heading": "Putting It All Together",
        "body": [
          "These patterns combine naturally in everyday speech: you might describe a trip's range with から/まで, list what you packed with や, mention direction with へ or に, and compare options with より or のほうが — all in the same conversation.",
          "Quick reference: から = starting point (time/place), まで = ending point (time/place), や = partial/example listing (versus と for an exhaustive list), へ = direction/journey, に = destination point (or indirect object/specific time), より = 'than' (comparison standard), のほうが = the preferred option.",
          "Paying attention to which particle carries which nuance is what starts to make your Japanese sound precise and natural as your sentences grow longer and more complex."
        ],
        "examples": [
          {
            "es": "東京から京都まで新幹線で行きますが、バスのほうが安いです。",
            "en": "Toukyou kara Kyouto made shinkansen de ikimasu ga, basu no hou ga yasui desu. -- I'll go from Tokyo to Kyoto by shinkansen, but the bus is cheaper."
          },
          {
            "es": "かばんの中にパスポートやカメラを入れました。",
            "en": "kaban no naka ni pasupooto ya kamera wo iremashita. -- I put things like my passport and camera in my bag."
          },
          {
            "es": "九時から会議が始まりますから、早く会社へ行きます。",
            "en": "kuji kara kaigi ga hajimarimasu kara, hayaku kaisha e ikimasu. -- Since the meeting starts at 9:00, I'll go to the office early."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each particle or pattern to its core meaning.",
            "pairs": [
              {
                "left": "から",
                "right": "starting point (time or place)"
              },
              {
                "left": "まで",
                "right": "ending point (time or place)"
              },
              {
                "left": "や",
                "right": "non-exhaustive listing ('and, among others')"
              },
              {
                "left": "より",
                "right": "standard of comparison ('than')"
              }
            ],
            "explanation": "から/まで frame a range, や signals a partial list (versus と for a complete one), and より marks what something is being compared against in a comparison sentence."
          },
          {
            "type": "multiple-choice",
            "question": "Which sentence best combines a time range, a direction particle, and a comparison in one natural sentence?",
            "options": [
              "東京から京都まで新幹線で行きますが、バスのほうが安いです。",
              "東京は京都より新幹線です。",
              "東京へ京都からバスです。",
              "東京と京都は新幹線とバスです。"
            ],
            "correctIndex": 0,
            "explanation": "This option correctly uses から...まで for the travel range, で for the means of transport, and のほうが...安いです to state that the bus is the cheaper option — combining several grammar points naturally, as fluent speakers do."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank: 'Winter, more than summer, I like.' (emphatic word order)",
        "sentence": "夏より冬___好きです。",
        "answer": "のほうが",
        "hint": "This marks 冬 as the preferred option, with 夏より already stating what it's compared to.",
        "explanation": "Even though the より-phrase (夏より) is moved to the front for emphasis, のほうが still attaches to the preferred item (冬) to mark it as the one being favored."
      },
      {
        "type": "multi-select",
        "question": "Which sentences correctly use から and まで together to express a range (time or place)?",
        "options": [
          "月曜日から金曜日まで働きます。",
          "駅から学校です。",
          "大阪から東京まで新幹線で行きます。",
          "九時と五時までです。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "The first and third options correctly pair から (starting point) with まで (ending point) to frame a time range and a travel route; the second is missing まで, and the fourth incorrectly uses と instead of から。"
      },
      {
        "type": "matching",
        "instructions": "Match each Japanese sentence to its English meaning.",
        "pairs": [
          {
            "left": "電車のほうがバスより便利です。",
            "right": "The train is more convenient than the bus."
          },
          {
            "left": "机の上に本やペンなどがあります。",
            "right": "There are things like a book, a pen, and so on, on the desk."
          },
          {
            "left": "来週、大阪へ行きます。",
            "right": "Next week I'm heading to Osaka."
          },
          {
            "left": "図書館は九時から五時までです。",
            "right": "The library is open from 9:00 to 5:00."
          }
        ],
        "explanation": "Each sentence demonstrates one of this lesson's patterns: のほうが...より for preference, や(...など) for a non-exhaustive list, へ for direction, and から...まで for a time range."
      },
      {
        "type": "multiple-choice",
        "question": "Which sentence correctly means 'Since the meeting starts at 9:00, I'll go to the office early'?",
        "options": [
          "九時から会議が始まりますから、早く会社へ行きます。",
          "九時まで会議が始まりますが、早く会社に行きません。",
          "九時や会議が始まります、早く会社です。",
          "九時より会議が始まります、早く会社まで行きます。"
        ],
        "correctIndex": 0,
        "explanation": "から appears twice here with different jobs: 九時から marks the meeting's starting time, and 始まりますから is the reason marker ('since/because')；only this option uses both correctly alongside へ for direction."
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the blank to say 'I put things like my passport and camera in my bag.' (non-exhaustive list)",
        "sentence": "かばんの中にパスポート___カメラを入れました。",
        "answer": "や",
        "hint": "The list is only examples — there may be other items too.",
        "explanation": "や marks パスポート and カメラ as representative examples of what's in the bag, not necessarily the complete contents, matching the intended 'things like...' meaning."
      }
    ]
  },
  {
    "slug": "noun-modification-relative-clauses-1",
    "level": "JA-A2",
    "number": 19,
    "title": "Modifying Nouns with Clauses (Relative Clauses), Part 1 of 3",
    "summary": "Learn how Japanese modifies nouns with entire clauses instead of relative pronouns like 'that' or 'who' — placing plain-form verbs, negatives, and adjectives directly before the noun, and switching は to が for embedded subjects.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "The Core Idea: Modification Without Relative Pronouns",
        "body": [
          "In English, we attach extra information to a noun with a relative pronoun: 'the book that I bought,' 'the man who is running.' Japanese has no word that works like 'that' or 'who' in this role. Instead, the entire modifying clause is simply placed directly in front of the noun it describes, in plain (dictionary-style) form.",
          "This pattern is sometimes called a noun-modifying clause. The key rule to internalize now, before looking at any specific verb tense, is this: whatever sits immediately before a noun and describes it must be in plain form — never polite ます-form — and it attaches with no connecting word at all.",
          "Because there is no relative pronoun, word order carries the meaning. Everything before the noun modifies it; nothing after it does (unless yet another clause is added)。This can feel backwards at first, since English's relative clause comes after the noun ('the book that I bought') while Japanese's comes before it (買った本)。"
        ],
        "examples": [
          {
            "es": "食べる人",
            "en": "taberu hito -- the person who eats / will eat"
          },
          {
            "es": "昨日買った本",
            "en": "kinou katta hon -- the book (that I) bought yesterday"
          },
          {
            "es": "私が作った料理",
            "en": "watashi ga tsukutta ryouri -- the food that I made"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which word does Japanese use to mean 'that' or 'which' in a phrase like 'the book that I bought'?",
            "options": [
              "という",
              "の",
              "There is no such word — the clause goes directly before the noun",
              "それ"
            ],
            "correctIndex": 2,
            "explanation": "Japanese has no relative pronoun. The modifying clause simply attaches directly in front of the noun, in plain form, with nothing in between."
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words to say 'the book that I bought yesterday.'",
            "words": [
              "私",
              "が",
              "昨日",
              "買った",
              "本"
            ],
            "translation": "the book that I bought yesterday",
            "explanation": "The whole clause 私が昨日買った (I bought yesterday) comes before 本 (book), with the embedded subject marked by が rather than は。"
          }
        ]
      },
      {
        "heading": "Plain Non-Past Verb + Noun",
        "body": [
          "The simplest version of this pattern uses a plain non-past (dictionary-form) verb directly before a noun. This expresses something habitual, generally true, or something that will happen — similar to English 'the person who eats' or 'the student who is coming tomorrow.'",
          "Any particles and objects that belong to the verb stay exactly where they would in a normal sentence; only the whole clause as a unit moves in front of the noun. So 毎朝コーヒーを飲む人 keeps を right where it normally would, with the entire clause 毎朝コーヒーを飲む sitting before 人。",
          "Note that only the plain form works here — ます-form verbs cannot modify a noun this way. 食べます人 is simply ungrammatical; it must be 食べる人。"
        ],
        "examples": [
          {
            "es": "日本語を話す人",
            "en": "nihongo o hanasu hito -- the person who speaks Japanese"
          },
          {
            "es": "明日来る友達",
            "en": "ashita kuru tomodachi -- the friend who is coming tomorrow"
          },
          {
            "es": "毎日走る人",
            "en": "mainichi hashiru hito -- the person who runs every day"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Fill in the modifying verb in plain non-past form.",
            "sentence": "毎朝コーヒーを___人は元気です。",
            "answer": "飲む",
            "hint": "dictionary form of 飲みます",
            "explanation": "飲む is the plain non-past form of 飲みます, and it goes directly before 人 to mean 'the person who drinks (coffee every morning).'"
          },
          {
            "type": "multiple-choice",
            "question": "Which sentence correctly means 'the student who is coming tomorrow'?",
            "options": [
              "明日来る学生",
              "明日来ます学生",
              "明日来た学生",
              "明日来ない学生"
            ],
            "correctIndex": 0,
            "explanation": "来る is the plain non-past form of 来ます and correctly modifies 学生。来ます is polite and cannot modify a noun this way; 来た is past; 来ない is negative."
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "How does Japanese typically translate 'the person who eats natto'?",
        "options": [
          "納豆を食べる人という人",
          "納豆を食べる人",
          "納豆を食べます人",
          "人が納豆を食べる"
        ],
        "correctIndex": 1,
        "explanation": "The plain non-past verb 食べる attaches directly before 人, with no relative pronoun and no ます-form。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the clause with the plain non-past form.",
        "sentence": "日本語を___人はかっこいいです。",
        "answer": "話す",
        "hint": "dictionary form of 話します",
        "explanation": "話す is the plain non-past form of 話します, correctly modifying 人 to mean 'a person who speaks Japanese.'"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'the letter that my friend wrote.'",
        "words": [
          "友達",
          "が",
          "書いた",
          "手紙"
        ],
        "translation": "the letter that my friend wrote",
        "explanation": "友達が書いた (my friend wrote) is the modifying clause, placed directly before 手紙 with the subject marked by が。"
      },
      {
        "type": "multi-select",
        "question": "Which of these are correctly formed modifying clauses (any tense)?",
        "options": [
          "食べない人",
          "食べません人",
          "昨日来た学生",
          "昨日来ます学生"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "食べない and 来た are plain forms and modify nouns correctly. 食べません and 来ます are polite forms and cannot be used directly before a noun。"
      },
      {
        "type": "matching",
        "instructions": "Match each modifying phrase to its English meaning.",
        "pairs": [
          {
            "left": "食べない人",
            "right": "a person who doesn't eat"
          },
          {
            "left": "買った本",
            "right": "the book that was bought"
          },
          {
            "left": "来る学生",
            "right": "the student who is coming"
          },
          {
            "left": "作った料理",
            "right": "the food that was made"
          }
        ],
        "explanation": "Each Japanese phrase places a plain-form verb (non-past, past, or negative) directly before the noun it describes, with no relative pronoun。"
      },
      {
        "type": "fill-blank",
        "prompt": "Fill in the correct particle for the embedded subject.",
        "sentence": "田中さん___作った料理はとてもおいしかったです。",
        "answer": "が",
        "hint": "subject inside a modifying clause, not the topic of the whole sentence",
        "explanation": "田中さん is the subject of the modifying clause 作った料理, not the topic of the whole sentence, so it takes が rather than は。"
      }
    ]
  },
  {
    "slug": "noun-modification-relative-clauses-2",
    "level": "JA-A2",
    "number": 20,
    "title": "Modifying Nouns with Clauses (Relative Clauses), Part 2 of 3",
    "summary": "Learn how Japanese modifies nouns with entire clauses instead of relative pronouns like 'that' or 'who' — placing plain-form verbs, negatives, and adjectives directly before the noun, and switching は to が for embedded subjects.",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Plain Past Verb + Noun",
        "body": [
          "The same pattern works with the plain past (た-form) of a verb, and this is one of the most common uses of noun modification: describing a noun by something that already happened to it or with it. 昨日買った本 means 'the book (that I) bought yesterday.'",
          "The tense inside the modifying clause is independent of the tense of the main sentence — it simply describes when the modifying action or state happened, judged from its own timeline. A past-tense clause can modify a noun inside a present-tense main sentence, and vice versa.",
          "As with the non-past form, everything else about the clause — particles, objects, adverbs — stays exactly as it would in an ordinary sentence; only the whole thing shifts in front of the noun it describes."
        ],
        "examples": [
          {
            "es": "昨日買った本はおもしろいです。",
            "en": "kinou katta hon wa omoshiroi desu. -- The book (that I) bought yesterday is interesting."
          },
          {
            "es": "先週見た映画",
            "en": "senshuu mita eiga -- the movie (that I) watched last week"
          },
          {
            "es": "友達が書いた手紙",
            "en": "tomodachi ga kaita tegami -- the letter that my friend wrote"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange the words to say 'the movie (that I) watched last week.'",
            "words": [
              "先週",
              "見た",
              "映画"
            ],
            "translation": "the movie (that I) watched last week",
            "explanation": "先週見た (watched last week) is the modifying clause, placed directly before 映画 (movie), with no relative pronoun needed."
          },
          {
            "type": "fill-blank",
            "prompt": "Put the verb in plain past form to modify 手紙 (letter)。",
            "sentence": "友達が___手紙はとても長かったです。",
            "answer": "書いた",
            "hint": "past form of 書きます",
            "explanation": "書いた is the plain past form of 書きます (書く → 書いた), and it modifies 手紙 to mean 'the letter that (my friend) wrote.'"
          }
        ]
      },
      {
        "heading": "Plain Negative + Noun",
        "body": [
          "Negative modifying clauses work exactly the same way, using the plain negative forms ない (non-past negative) and なかった (past negative) directly before the noun. 食べない人 means 'a person who doesn't eat,' and 食べなかった人 means 'a person who didn't eat.'",
          "This is extremely useful for describing something by what it is not: 肉を食べない人 ('a person who doesn't eat meat'), 宿題をしなかった学生 ('the student who didn't do the homework')。As always, ません and ませんでした — the polite negative forms — cannot be used in this position.",
          "Keep an eye on irregular negatives, like 知る becoming 知らない (not 知りない), since these are easy to mix up when you're also tracking word order."
        ],
        "examples": [
          {
            "es": "肉を食べない人",
            "en": "niku o tabenai hito -- a person who doesn't eat meat"
          },
          {
            "es": "宿題をしなかった学生",
            "en": "shukudai o shinakatta gakusei -- the student who didn't do the homework"
          },
          {
            "es": "漢字を知らない人",
            "en": "kanji o shiranai hito -- a person who doesn't know kanji"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Which of these are correctly formed negative modifying clauses?",
            "options": [
              "肉を食べない人",
              "肉を食べません人",
              "宿題をしなかった学生",
              "宿題をしませんでした学生"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Modifying clauses require plain forms, never ます-form。食べない and しなかった are plain negative forms and work correctly; 食べません and しませんでした are polite and cannot directly modify a noun this way."
          },
          {
            "type": "fill-blank",
            "prompt": "Complete with the correct plain negative form.",
            "sentence": "漢字を___人は少ないです。",
            "answer": "知らない",
            "hint": "negative plain form built from 知る",
            "explanation": "知る becomes 知らない in the plain negative (not 知りない), and it modifies 人 to mean 'people who don't know kanji.'"
          }
        ]
      },
      {
        "heading": "な-Adjectives and い-Adjectives Modifying Nouns",
        "body": [
          "You already know that い-adjectives modify nouns directly, with no extra word needed: 大きい家 ('a big house'), 高い店 ('an expensive store')。This is actually the same underlying pattern as verb-clause modification — the plain form of a descriptive word sits right before the noun.",
          "な-adjectives need the connector な before the noun: 静かな部屋 ('a quiet room'), 有名な先生 ('a famous teacher')。Think of な as the attributive counterpart of だ — だ cannot go directly before a noun, so it changes to な in this position, the same way a verb must be in plain form rather than ます-form。",
          "Negative and past adjective forms modify nouns the same way, with no special adjustment needed: 高くない店 ('a store that isn't expensive'), 静かだった部屋 ('a room that was quiet')。Once you see adjectives as just a shorter type of modifying clause, the whole system feels more unified."
        ],
        "examples": [
          {
            "es": "静かな部屋がほしいです。",
            "en": "shizuka na heya ga hoshii desu. -- I want a quiet room."
          },
          {
            "es": "有名な先生",
            "en": "yuumei na sensei -- a famous teacher"
          },
          {
            "es": "高くない店",
            "en": "takakunai mise -- a store that isn't expensive"
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each adjective phrase to its English meaning.",
            "pairs": [
              {
                "left": "静かな部屋",
                "right": "a quiet room"
              },
              {
                "left": "有名な先生",
                "right": "a famous teacher"
              },
              {
                "left": "高くない店",
                "right": "a store that isn't expensive"
              },
              {
                "left": "大きい犬",
                "right": "a big dog"
              }
            ],
            "explanation": "な-adjectives take な before a noun (静かな, 有名な)；い-adjectives, including their negative forms, attach directly with no extra word (高くない, 大きい)。"
          },
          {
            "type": "multiple-choice",
            "question": "Which particle connects a な-adjective to the noun it modifies?",
            "options": [
              "を",
              "な",
              "に",
              "が"
            ],
            "correctIndex": 1,
            "explanation": "な is the attributive form that だ takes before a noun. 静か + な + 部屋 becomes 静かな部屋, since 静かだ部屋 is ungrammatical。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "彼が住んでいた家 most naturally means:",
        "options": [
          "the house he is living in",
          "the house he was living in",
          "the house he will live in",
          "the house he wants to live in"
        ],
        "correctIndex": 1,
        "explanation": "住んでいた is the past form of the ～ている pattern, describing a state that held in the past — 'was living in.' A modifying clause's tense is independent of the main sentence's tense。"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'I read the letter that my friend wrote.'",
        "words": [
          "友達",
          "が",
          "書いた",
          "手紙",
          "を",
          "読みました"
        ],
        "translation": "I read the letter that my friend wrote.",
        "explanation": "The modifying clause 友達が書いた (my friend wrote) sits before 手紙, and the whole modified noun phrase then takes を as the object of 読みました。"
      },
      {
        "type": "fill-blank",
        "prompt": "Use the correct plain past form of 来る。",
        "sentence": "昨日___友達はもう帰りました。",
        "answer": "来た",
        "hint": "irregular past tense of 来ます",
        "explanation": "来る is irregular; its plain past form is 来た (kita), not 来った。This modifies 友達 to mean 'the friend who came yesterday.'"
      },
      {
        "type": "multiple-choice",
        "question": "Which is the correct way to say 'a famous restaurant' as a modifying phrase?",
        "options": [
          "有名レストラン",
          "有名なレストラン",
          "有名だレストラン",
          "有名のレストラン"
        ],
        "correctIndex": 1,
        "explanation": "有名 is a な-adjective, so it needs な before the noun it modifies: 有名なレストラン。Dropping な, or using だ or の instead, is incorrect here。"
      },
      {
        "type": "multi-select",
        "question": "Which of the following are grammatically correct noun-modifying clauses?",
        "options": [
          "私が読んだ本",
          "私は読んだ本",
          "私が読みました本",
          "私が読む本"
        ],
        "correctIndexes": [
          0,
          3
        ],
        "explanation": "私が読んだ本 and 私が読む本 both correctly use が for the embedded subject and a plain verb form。私は読んだ本 wrongly uses は inside the modifying clause, and 私が読みました本 wrongly uses the polite ました form。"
      }
    ]
  },
  {
    "slug": "noun-modification-relative-clauses-3",
    "level": "JA-A2",
    "number": 21,
    "title": "Modifying Nouns with Clauses (Relative Clauses), Part 3 of 3",
    "summary": "Learn how Japanese modifies nouns with entire clauses instead of relative pronouns like 'that' or 'who' — placing plain-form verbs, negatives, and adjectives directly before the noun, and switching は to が for embedded subjects.",
    "duration": "7 min",
    "sections": [
      {
        "heading": "Embedded Subjects: は Becomes が",
        "body": [
          "When a modifying clause has its own subject, that subject is marked with が, never は — even if you would normally use は for that noun in a standalone sentence. Compare 私は昨日本を買いました ('I bought a book yesterday,' a complete sentence with 私 as topic) to 私が昨日買った本 ('the book that I bought yesterday,' a modifying clause with 私 as its subject)。",
          "The reason is that は marks the topic of an entire sentence, but a modifying clause is not an independent sentence — it has no topic of its own. Its subject is just a plain grammatical subject relative to the noun it's building up to, so it takes が, the same way が marks subjects in other subordinate contexts.",
          "This は→が switch is one of the most common stumbling points for learners, because the instinct is to keep は from the 'original' sentence. A useful check: if you can mentally rewrite the clause as a complete sentence and it used は for its subject, that は must become が once the clause is tucked in front of a noun。"
        ],
        "examples": [
          {
            "es": "私が昨日買った本はおもしろいです。",
            "en": "watashi ga kinou katta hon wa omoshiroi desu. -- The book that I bought yesterday is interesting."
          },
          {
            "es": "田中さんが作った料理はとてもおいしかったです。",
            "en": "tanaka-san ga tsukutta ryouri wa totemo oishikatta desu. -- The food that Tanaka-san made was very delicious."
          },
          {
            "es": "妹が読んでいる本",
            "en": "imouto ga yondeiru hon -- the book that my younger sister is reading"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Choose the correct particle for the embedded subject.",
            "sentence": "私___昨日買った本はおもしろいです。",
            "answer": "が",
            "hint": "the subject inside a modifying clause",
            "explanation": "私 is the subject of the modifying clause 買った本 (the book that was bought), not the topic of the whole sentence, so it takes が rather than は。"
          },
          {
            "type": "multiple-choice",
            "question": "Why does 私 take が instead of は in 私が作った料理はおいしかったです?",
            "options": [
              "Because 私 is being strongly emphasized",
              "Because 私 is the subject of an embedded modifying clause, which cannot have its own topic marked with は",
              "Because 料理 is a special word that requires が before it",
              "There is no reason; は would also be correct here"
            ],
            "correctIndex": 1,
            "explanation": "は marks the topic of a whole sentence, but a modifying clause isn't its own sentence and has no topic slot, so its subject is marked with が instead."
          }
        ]
      },
      {
        "heading": "Combining It All: Longer Modifying Clauses",
        "body": [
          "Modifying clauses can be as long and detailed as a full sentence — including a が-marked subject, an を-marked object, and location or time particles like で and に — and the whole thing still just sits in front of the noun with no change in internal word order.",
          "For example, 私が今朝カフェで飲んだコーヒー stacks a subject (私が), a time expression (今朝), a location (カフェで), and a past-tense verb (飲んだ) all before コーヒー, meaning 'the coffee that I drank at the cafe this morning.'",
          "These longer modified nouns can then function as the subject or object of a larger sentence, letting you pack a lot of detail into one smooth sentence instead of splitting it into two. This is one of the most powerful tools for sounding natural in Japanese, so it's worth practicing with your own examples."
        ],
        "examples": [
          {
            "es": "私が今朝カフェで飲んだコーヒーはおいしかったです。",
            "en": "watashi ga kesa kafe de nonda koohii wa oishikatta desu. -- The coffee that I drank at the cafe this morning was delicious."
          },
          {
            "es": "田中さんが去年住んでいた部屋",
            "en": "tanaka-san ga kyonen sundeita heya -- the room that Tanaka-san was living in last year"
          },
          {
            "es": "昨日図書館で借りた本を読んでいます。",
            "en": "kinou toshokan de karita hon o yondeimasu. -- I am reading the book that I borrowed at the library yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange the words to say 'the coffee that I drank at the cafe this morning.'",
            "words": [
              "私",
              "が",
              "今朝",
              "カフェ",
              "で",
              "飲んだ",
              "コーヒー"
            ],
            "translation": "the coffee that I drank at the cafe this morning",
            "explanation": "All the pieces of the clause — subject が, time word 今朝, location で, and the past verb 飲んだ — come before コーヒー in their normal internal order."
          },
          {
            "type": "multi-select",
            "question": "Which of these are grammatically correct long modifying clauses?",
            "options": [
              "私が今朝カフェで飲んだコーヒー",
              "私は今朝カフェで飲んだコーヒー",
              "田中さんが去年住んでいた部屋",
              "田中さんが去年住んでいましたの部屋"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "Both correct options use が for the embedded subject and a plain verb form. The second wrongly uses は inside the clause, and the fourth wrongly uses the polite ました form plus an unnecessary の。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each Japanese phrase to its English meaning.",
        "pairs": [
          {
            "left": "静かだった部屋",
            "right": "a room that was quiet"
          },
          {
            "left": "高くない店",
            "right": "a store that isn't expensive"
          },
          {
            "left": "宿題をしなかった学生",
            "right": "the student who didn't do the homework"
          },
          {
            "left": "漢字を知らない人",
            "right": "a person who doesn't know kanji"
          }
        ],
        "explanation": "Plain past, negative, and adjective forms all modify nouns the same basic way: they sit directly in front of the noun with no relative pronoun。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete with the correct plain past negative form.",
        "sentence": "宿題を___学生は先生と話しました。",
        "answer": "しなかった",
        "hint": "past negative of します",
        "explanation": "しなかった is the plain past negative form of します, and it modifies 学生 to mean 'the student who didn't do (the homework).'"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words to say 'I want a quiet room.'",
        "words": [
          "静かな",
          "部屋",
          "が",
          "ほしいです"
        ],
        "translation": "I want a quiet room.",
        "explanation": "静かな部屋 (a quiet room) is the modified noun phrase, and it takes が before ほしいです, the pattern for expressing 'want' with a noun。"
      },
      {
        "type": "multiple-choice",
        "question": "In 私が作った料理はおいしかったです, why is が used instead of は after 私?",
        "options": [
          "Because 私 is being emphasized",
          "Because 私 is the subject of an embedded modifying clause, which cannot have its own topic marked with は",
          "Because 料理 is the topic of the whole sentence",
          "There is no reason; は would also be correct"
        ],
        "correctIndex": 1,
        "explanation": "は marks the topic of an entire sentence, but a modifying clause has no topic slot of its own, so its subject is marked with が instead。"
      }
    ]
  },
  {
    "slug": "casual-plain-speech-register-1",
    "level": "JA-A2",
    "number": 22,
    "title": "Casual Speech: The Plain Form System, Part 1 of 3",
    "summary": "Pull together the dictionary form, plain negative, and plain past you've been building piece by piece into one unified casual-speech system, learn how だ works (and disappears), and understand when plain speech is appropriate versus polite です/ます。",
    "duration": "7 min",
    "sections": [
      {
        "heading": "The Dictionary Form: Casual Present and Future",
        "body": [
          "You've already met the plain non-past form of verbs in noun-modifying clauses like 食べる人 ('the person who eats') and 昨日買った本 ('the book [I] bought yesterday')。That same form — called the dictionary form because it's the headword form used in Japanese dictionaries — is also how verbs appear at the end of casual sentences, replacing the ます-form you've used so far。",
          "Godan (u-verb) conjugation follows a predictable pattern: drop -imasu and add -u, so 買います becomes 買う, 話します becomes 話す, and 飲みます becomes 飲む。Ichidan (ru-verb) conjugation is even simpler: just drop る from the front — 食べます → 食べる, 見ます → 見る。",
          "The two irregular verbs don't follow either pattern and must be memorized directly: します becomes する, and 来ます becomes 来る (read くる)。These dictionary forms are the base you'll build every other casual form from in this lesson。"
        ],
        "examples": [
          {
            "es": "買います → 買う",
            "en": "kaimasu → kau -- to buy (polite → dictionary form)"
          },
          {
            "es": "食べます → 食べる",
            "en": "tabemasu → taberu -- to eat"
          },
          {
            "es": "します → する / 来ます → 来る",
            "en": "shimasu → suru / kimasu → kuru -- irregular verbs"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which is the dictionary (plain non-past) form of 飲みます?",
            "options": [
              "飲む",
              "飲んだ",
              "飲まない",
              "飲んでいる"
            ],
            "correctIndex": 0,
            "explanation": "飲みます is a godan verb; drop -imasu and add -u to get 飲む (nomu), the dictionary form。"
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the casual sentence using the dictionary form of 食べる (to eat)。",
            "sentence": "毎日、朝ご飯を___。",
            "answer": "食べる",
            "hint": "ichidan verb — use it as-is",
            "explanation": "食べる is already in dictionary form; ichidan verbs need no change, unlike the ます-form 食べます which required dropping る and adding ます。"
          }
        ]
      },
      {
        "heading": "The Plain Negative: ない Form",
        "body": [
          "The plain negative is formed differently depending on the verb group, and this is the first time you're seeing the full system laid out. For godan verbs, change the final -u sound to the corresponding -a sound and add ない: 飲む → 飲まない, 話す → 話さない, 泳ぐ → 泳がない。The one irregular twist is verbs ending in う, which take わ rather than あ: 買う → 買わない (not 買あない)。",
          "Ichidan verbs are simple: drop る and add ない, so 見る → 見ない and 食べる → 食べない。The two irregular verbs again must be memorized: する → しない, and 来る → 来ない (read こない)。",
          "Once formed, ない behaves exactly like an い-adjective — it can take past tense (なかった) and other endings the same way an adjective does, which you'll build on in the next two sections. In casual speech, the ない form with a rising intonation and no か is also a common way to make an invitation, like 食べない? ('Won't you eat?')。"
        ],
        "examples": [
          {
            "es": "飲む → 飲まない",
            "en": "nomu → nomanai -- not drink / won't drink"
          },
          {
            "es": "見る → 見ない",
            "en": "miru → minai -- not watch / won't watch"
          },
          {
            "es": "買う → 買わない",
            "en": "kau → kawanai -- not buy (note う → わ, not あ)"
          }
        ],
        "checkpoint": [
          {
            "type": "word-order",
            "prompt": "Arrange the words to form a casual invitation: 'Won't you eat pizza?'",
            "words": [
              "ピザ",
              "を",
              "食べない?"
            ],
            "translation": "Won't you eat pizza?",
            "explanation": "食べない? uses the plain negative form with rising question intonation, a common casual way to invite someone to do something together, without needing か。"
          },
          {
            "type": "multiple-choice",
            "question": "What is the correct plain negative form of 話す (to speak)?",
            "options": [
              "話さない",
              "話わない",
              "話なない",
              "話ない"
            ],
            "correctIndex": 0,
            "explanation": "話す is a godan verb ending in す; change す to さ before adding ない: 話さない (hanasanai)。The う→わ exception only applies to verbs ending in う。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What is the dictionary form of 買います (to buy)?",
        "options": [
          "買う",
          "買った",
          "買わない",
          "買いた"
        ],
        "correctIndex": 0,
        "explanation": "買います is a godan verb; -imasu becomes -u, giving 買う (kau)。"
      },
      {
        "type": "multiple-choice",
        "question": "Which is the correct dictionary form of 来ます (to come)?",
        "options": [
          "来る (くる)",
          "来う",
          "来ない",
          "来た"
        ],
        "correctIndex": 0,
        "explanation": "来る is irregular; its dictionary form is memorized directly as くる (kuru), not formed by a regular pattern。"
      },
      {
        "type": "fill-blank",
        "prompt": "Give the plain negative form of 見る (to watch/see)。",
        "sentence": "テレビを___。",
        "answer": "見ない",
        "hint": "ichidan: drop る, add ない",
        "explanation": "見る is ichidan, so drop る and add ない: 見ない (minai, 'not watch')。"
      },
      {
        "type": "fill-blank",
        "prompt": "Give the plain negative of 泳ぐ (to swim)。",
        "sentence": "今日は海で___。",
        "answer": "泳がない",
        "hint": "ぐ → が + ない",
        "explanation": "For godan verbs ending in ぐ, change ぐ to が before adding ない: 泳ぐ → 泳がない (oyoganai)。"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words: 'I met a friend yesterday.' (casual past)",
        "words": [
          "昨日",
          "友達",
          "に",
          "会った"
        ],
        "translation": "I met a friend yesterday.",
        "explanation": "会った is the plain past (た-form) of 会う (to meet), now used as the main sentence-final verb rather than only inside a modifying clause。"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words: 'This tea wasn't hot.' (casual, negative past)",
        "words": [
          "このお茶",
          "は",
          "熱くなかった"
        ],
        "translation": "This tea wasn't hot.",
        "explanation": "熱くなかった is the plain negative past of the い-adjective 熱い (hot): 熱い → 熱くない → 熱くなかった。"
      }
    ]
  },
  {
    "slug": "casual-plain-speech-register-2",
    "level": "JA-A2",
    "number": 23,
    "title": "Casual Speech: The Plain Form System, Part 2 of 3",
    "summary": "Pull together the dictionary form, plain negative, and plain past you've been building piece by piece into one unified casual-speech system, learn how だ works (and disappears), and understand when plain speech is appropriate versus polite です/ます。",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Plain Past: Unifying Nouns, Adjectives, and Verbs",
        "body": [
          "You already previewed だった and じゃなかった for nouns and な-adjectives, and you've used the た-form of verbs inside modifying clauses like 昨日買った本。Now it's time to see all of these as one system: the plain past。",
          "For nouns and な-adjectives, です becomes だった in the past: 学生です → 学生だった, 暇です → 暇だった。For い-adjectives, drop the final い and add かった: 楽しい → 楽しかった, 寒い → 寒かった。The one irregular い-adjective is いい ('good'), whose past is よかった, not いかった。",
          "For verbs, the plain past is simply the た-form you already know from noun modification — 行く → 行った, 食べる → 食べた, 見る → 見た — now used as the final verb of a casual sentence instead of only inside a clause modifying a noun。"
        ],
        "examples": [
          {
            "es": "学生だった。",
            "en": "gakusei datta. -- [I] was a student."
          },
          {
            "es": "楽しかった。",
            "en": "tanoshikatta. -- It was fun."
          },
          {
            "es": "昨日、友達に会った。",
            "en": "kinou, tomodachi ni atta. -- [I] met a friend yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each word type with its correct plain past (affirmative) form pattern。",
            "pairs": [
              {
                "left": "Noun (先生 - teacher)",
                "right": "先生だった"
              },
              {
                "left": "な-adjective (暇 - free)",
                "right": "暇だった"
              },
              {
                "left": "い-adjective (寒い - cold)",
                "right": "寒かった"
              },
              {
                "left": "Verb (行く - to go)",
                "right": "行った"
              }
            ],
            "explanation": "Nouns and な-adjectives take だった for the plain past; い-adjectives drop い and add かった; verbs use the た-form, the same form used earlier for modifying nouns like 行った人。"
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence with the plain past of 楽しい (fun)。",
            "sentence": "昨日のパーティーは___。",
            "answer": "楽しかった",
            "hint": "drop い, add かった",
            "explanation": "い-adjectives form the plain past by dropping the final い and adding かった: 楽しい → 楽しかった (tanoshikatta, 'was fun')。"
          }
        ]
      },
      {
        "heading": "Plain Negative Past: なかった, じゃなかった, くなかった",
        "body": [
          "The negative past completes the four-part plain paradigm (present/past × affirmative/negative), which mirrors the です/ます paradigm you already know well: ます/ません/ました/ませんでした maps onto る(or dictionary form)/ない/た/なかった。",
          "For verbs, take the ない form, drop the final い, and add かった: 飲まない → 飲まなかった, 行かない → 行かなかった。For nouns and な-adjectives, add じゃなかった (casual) or the slightly more neutral ではなかった: 暇じゃなかった ('wasn't free')。For い-adjectives, take the ない form (くない) and add かった: 寒くない → 寒くなかった。",
          "Once you can produce all four plain forms confidently for any word type, you have the complete grammatical toolkit for casual conversation — everything else in this lesson is about knowing when and how to use it naturally。"
        ],
        "examples": [
          {
            "es": "昨日は暇じゃなかった。",
            "en": "kinou wa hima ja nakatta. -- Yesterday wasn't free."
          },
          {
            "es": "あまり寒くなかった。",
            "en": "amari samukunakatta. -- It wasn't very cold."
          },
          {
            "es": "昨日は雨が降らなかった。",
            "en": "kinou wa ame ga furanakatta. -- It didn't rain yesterday."
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Which of these are correctly formed plain negative-past forms? Select all that apply.",
            "options": [
              "寒くなかった (was not cold)",
              "暇じゃなかった (was not free)",
              "行かなかった (did not go)",
              "食べなくない (incorrect)",
              "するなかった (incorrect)"
            ],
            "correctIndexes": [
              0,
              1,
              2
            ],
            "explanation": "寒くなかった (い-adjective), 暇じゃなかった (な-adjective/noun), and 行かなかった (verb) all follow correct negative-past patterns。食べなくない and するなかった are not valid conjugations。"
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words: 'It didn't rain yesterday.'",
            "words": [
              "昨日",
              "は",
              "雨",
              "が",
              "降らなかった"
            ],
            "translation": "It didn't rain yesterday.",
            "explanation": "降らなかった is the plain negative past of 降る (to fall/rain), formed from 降らない → 降らなかった。"
          }
        ]
      },
      {
        "heading": "だ: The Plain Copula, and When It Vanishes",
        "body": [
          "だ is the plain-speech equivalent of です, attaching to nouns and な-adjectives in casual statements: これは本だ。('This is a book.')い-adjectives and verbs never take だ — they're already grammatically complete on their own, so 寒いだ or 食べるだ are simply wrong。",
          "In actual casual speech, だ is frequently dropped. Before か in a casual question, だ disappears entirely — you never say これは本だか?, only これ、本? with rising intonation (or, less commonly, これ、本か?)。だ is also often dropped in soft casual statements, especially when the rest of the sentence and intonation make the meaning clear。",
          "A useful rule of thumb: だ shows up mainly in flat statements (これは本だ), it vanishes before か, and it reappears in a special form (な) before の in explanatory questions — a pattern covered later in this lesson。"
        ],
        "examples": [
          {
            "es": "今日は休みだ。",
            "en": "kyou wa yasumi da. -- Today is a day off."
          },
          {
            "es": "今日、休み?",
            "en": "kyou, yasumi? -- Is today a day off? (だ dropped, rising intonation)"
          },
          {
            "es": "これ、誰の?",
            "en": "kore, dare no? -- Whose is this?"
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "In casual speech, how would you naturally ask 'Is this yours?'",
            "options": [
              "これ、あなたの?",
              "これ、あなたのだか?",
              "これはあなたのですだ?",
              "これあなたのですか?"
            ],
            "correctIndex": 0,
            "explanation": "In casual questions, だ is dropped before か, and か itself is often dropped too, replaced by rising intonation: これ、あなたの?"
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the casual statement (keep だ)。",
            "sentence": "これは私の傘___。",
            "answer": "だ",
            "hint": "plain copula, used in flat statements (not before か)",
            "explanation": "だ is the plain-form equivalent of です and appears at the end of casual statements involving nouns or な-adjectives, though it is commonly dropped before か in questions。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "matching",
        "instructions": "Match each polite (ます/です) form with its plain casual equivalent。",
        "pairs": [
          {
            "left": "食べます",
            "right": "食べる"
          },
          {
            "left": "食べません",
            "right": "食べない"
          },
          {
            "left": "食べました",
            "right": "食べた"
          },
          {
            "left": "食べませんでした",
            "right": "食べなかった"
          }
        ],
        "explanation": "The polite ます-form system (present, negative, past, negative-past) maps directly onto the plain-form system: る/ない/た/なかった。"
      },
      {
        "type": "matching",
        "instructions": "Match each sentence type with its correct negative-past pattern。",
        "pairs": [
          {
            "left": "Noun negative past (先生 - teacher)",
            "right": "先生じゃなかった"
          },
          {
            "left": "な-adjective negative past (暇 - free)",
            "right": "暇じゃなかった"
          },
          {
            "left": "い-adjective negative past (寒い - cold)",
            "right": "寒くなかった"
          },
          {
            "left": "Verb negative past (飲む - to drink)",
            "right": "飲まなかった"
          }
        ],
        "explanation": "Nouns and な-adjectives share the same negative-past pattern (じゃなかった), while い-adjectives use くなかった and verbs use the ない-form base plus かった (なかった)。"
      },
      {
        "type": "multi-select",
        "question": "Which sentences correctly use だ, or correctly omit it? Select all that apply。",
        "options": [
          "今日は雨だ。(statement, keeping だ)",
          "今日、雨? (question, だ dropped before implied か)",
          "今日は雨だか? (question using だか)",
          "これは本だ。(statement, keeping だ)"
        ],
        "correctIndexes": [
          0,
          1,
          3
        ],
        "explanation": "だ is used in plain statements (今日は雨だ, これは本だ) but is dropped before か or in casual rising-intonation questions (今日、雨?)。だか is not a valid combination in standard casual speech。"
      },
      {
        "type": "multi-select",
        "question": "Which of the following are valid plain (dictionary) forms of verbs? Select all that apply。",
        "options": [
          "飲む (to drink)",
          "食べる (to eat)",
          "する (to do)",
          "来ます (to come, polite)",
          "話す (to speak)"
        ],
        "correctIndexes": [
          0,
          1,
          2,
          4
        ],
        "explanation": "飲む, 食べる, する, and 話す are all plain dictionary forms。来ます is a polite ます-form, not a plain form。"
      },
      {
        "type": "multiple-choice",
        "question": "You are meeting your new manager for the first time. Which greeting is most appropriate?",
        "options": [
          "初めまして。よろしくお願いします。",
          "初めて。よろしく。",
          "はじめまして。よろしくね。",
          "よろしく!"
        ],
        "correctIndex": 0,
        "explanation": "With someone you've just met, especially a superior, full polite です/ます-style speech (including the set polite greeting) is expected; shortened casual greetings would sound too familiar。"
      }
    ]
  },
  {
    "slug": "casual-plain-speech-register-3",
    "level": "JA-A2",
    "number": 24,
    "title": "Casual Speech: The Plain Form System, Part 3 of 3",
    "summary": "Pull together the dictionary form, plain negative, and plain past you've been building piece by piece into one unified casual-speech system, learn how だ works (and disappears), and understand when plain speech is appropriate versus polite です/ます。",
    "duration": "8 min",
    "sections": [
      {
        "heading": "Choosing Your Register: Casual vs. Polite",
        "body": [
          "です/ます (teineigo) is the default with strangers, people of higher status, elders, and in formal or work contexts, and it's almost always the safe choice the first time you meet someone. Plain form is used with close friends, family, and people of similar or younger age/status once a relationship is established — this inner circle is often called uchi ('inside'), as opposed to soto ('outside'), where politeness stays the norm。",
          "Register can shift mid-relationship: two coworkers might start with polite speech and gradually switch to casual as they become friends. It can also be asymmetric — a boss might speak casually to a junior employee while the junior continues using です/ます, reflecting the status difference rather than any disrespect。",
          "Getting this wrong in either direction sends a real social signal: using plain form too early with someone unfamiliar or senior can sound presumptuous or rude, while staying rigidly polite with close friends or family can come across as cold or distant。"
        ],
        "examples": [
          {
            "es": "先生：お元気ですか。／友達：元気?",
            "en": "sensei: ogenki desu ka. / tomodachi: genki? -- teacher: how are you (polite) / friend: how's it going? (casual)"
          },
          {
            "es": "（上司に）明日、会議に行きます。",
            "en": "(joushi ni) ashita, kaigi ni ikimasu. -- (to a boss) I will go to the meeting tomorrow."
          },
          {
            "es": "（親友に）明日、行く?",
            "en": "(shinyuu ni) ashita, iku? -- (to a close friend) Are you going tomorrow?"
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "In which of these situations is casual/plain speech generally appropriate? Select all that apply.",
            "options": [
              "Talking with a close friend your own age",
              "Speaking to your company's president",
              "Chatting with your younger sibling",
              "Answering a question in a job interview",
              "Texting a classmate you're friends with"
            ],
            "correctIndexes": [
              0,
              2,
              4
            ],
            "explanation": "Plain/casual speech fits close friends, family, and people of similar or younger age or status once familiarity is established。Superiors, strangers, and formal settings like interviews call for です/ます polite speech。"
          },
          {
            "type": "multiple-choice",
            "question": "Your coworker, who is also your close friend, starts asking about your weekend using casual speech. What does this most likely indicate?",
            "options": [
              "They are being rude",
              "The relationship is close enough for casual speech to be appropriate",
              "They forgot proper Japanese",
              "They only speak casually because you are a foreigner"
            ],
            "correctIndex": 1,
            "explanation": "Switching to plain form between people who know each other well signals closeness and informality — it's a normal, expected shift once a relationship becomes familiar (uchi), not a sign of rudeness。"
          }
        ]
      },
      {
        "heading": "Casual Speech in Questions: Dropping か and Using の / んだ",
        "body": [
          "In casual conversation, か is very often dropped from yes/no questions entirely, with rising intonation alone doing the work that か does in polite speech: 行きますか becomes simply 行く? A plain-form verb or adjective at the end of a sentence, said with a rising pitch, is understood as a question。",
          "の (in fuller or more emphatic speech, んだ) is added to plain forms to give a question an explanatory, conversational nuance — roughly 'what's the story here?' rather than a neutral yes/no question. どうしたの? ('What's wrong?') asks for an explanation, not just a yes or no。",
          "The attachment pattern differs slightly by word type: verbs and い-adjectives attach の directly to the plain form (行くの?, 寒いの?), while nouns and な-adjectives insert な before の (元気なの?, 学生なの?) — the same な that also appears in the noun-modifying use of な-adjectives。"
        ],
        "examples": [
          {
            "es": "どこ行くの?",
            "en": "doko iku no? -- Where are you going? (explanatory, casual)"
          },
          {
            "es": "元気なの?",
            "en": "genki nano? -- Are you doing okay? (な-adjective + なの)"
          },
          {
            "es": "なんで来ないの?",
            "en": "nande konai no? -- Why aren't you coming?"
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the casual explanatory question: 'Why aren't you coming?'",
            "sentence": "なんで___?",
            "answer": "来ないの",
            "hint": "plain negative of 来る + の",
            "explanation": "の adds an explanatory nuance to casual questions; here 来ない (plain negative of 来る) combines with の to ask for an explanation: なんで来ないの?"
          },
          {
            "type": "word-order",
            "prompt": "Arrange the words: 'Where are you going?' (casual, explanatory)",
            "words": [
              "どこ",
              "行くの"
            ],
            "translation": "Where are you going?",
            "explanation": "の attached to the plain form 行く turns a simple question into a softer, more conversational one, commonly used in casual speech: どこ行くの?"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "Why is the plain non-past form often called the 'dictionary form'?",
        "options": [
          "It's the form listed as the headword in Japanese dictionaries",
          "It's only used when reading dictionaries aloud",
          "It's a simplified form invented for beginners",
          "It's used exclusively in formal written Japanese"
        ],
        "correctIndex": 0,
        "explanation": "Japanese dictionaries list verbs under their plain non-past form (e.g. 食べる, not 食べます), which is why this form is commonly called the dictionary form。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the casual sentence with the correct plain negative past for a noun。",
        "sentence": "あの人は先生___。",
        "answer": "じゃなかった",
        "hint": "noun plain negative past",
        "explanation": "For nouns, the plain negative past is formed with じゃなかった (or the more formal ではなかった): 先生じゃなかった, 'was not a teacher.'"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the casual question using の for an explanatory nuance。",
        "sentence": "どうした___?",
        "answer": "の",
        "hint": "attaches to the plain form for explanatory questions",
        "explanation": "の (fully, んだ) attached to a plain form softens a question and adds an explanatory, conversational nuance: どうしたの?, 'What's wrong?'"
      },
      {
        "type": "word-order",
        "prompt": "Arrange the words: 'Are you busy tomorrow too?' (casual, dropping か)",
        "words": [
          "明日",
          "も",
          "忙しい?"
        ],
        "translation": "Are you busy tomorrow too?",
        "explanation": "In casual questions, か is frequently dropped altogether; rising intonation alone signals a question, as in 明日も忙しい?"
      },
      {
        "type": "multiple-choice",
        "question": "Which situation calls for です/ます polite speech rather than plain form?",
        "options": [
          "Ordering coffee from a barista you don't know",
          "Chatting with your little brother at home",
          "Texting your best friend from college",
          "Complaining to a close friend about work"
        ],
        "correctIndex": 0,
        "explanation": "Interactions with strangers, service staff, and people outside your inner circle (soto) typically require polite です/ます speech, regardless of how casual the conversation's content is。"
      }
    ]
  },
  {
    "slug": "a2-module-review-1",
    "level": "JA-A2",
    "number": 25,
    "title": "A2 Module Review: Putting It All Together, Part 1 of 3",
    "summary": "A cumulative review of everything from the A2 module: te-form and requests, ～ている, permission and prohibition, past tense, potential and たい forms, giving and receiving, comparison particles, and plain-form noun modification and register. Short refreshers followed by mixed practice that combines grammar points the way real sentences do。",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Te-Form Formation and Polite Requests",
        "body": [
          "The te-form is the hub of Japanese grammar. Godan verbs change based on their final sound (く→いて, ぐ→いで, う/つ/る→って, ぬ/ぶ/む→んで, す→して); ichidan verbs drop る and add て; and the irregulars する and 来る become して and 来て。From here, the te-form connects to requests, ongoing actions, permission, and prohibition。",
          "て + ください turns any verb into a polite request, 'please do ~.' Among close friends, the ください is often dropped and the bare te-form alone carries the same request, just more casually — this is one of the first places speech register comes into play。"
        ],
        "examples": [
          {
            "es": "ここに名前を書いてください。",
            "en": "koko ni namae o kaite kudasai. -- Please write your name here."
          },
          {
            "es": "ちょっと待ってください。",
            "en": "chotto matte kudasai. -- Please wait a moment."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the correct te-form of 飲む (to drink)?",
            "options": [
              "飲んで",
              "飲いて",
              "飲って",
              "飲みて"
            ],
            "correctIndex": 0,
            "explanation": "Godan verbs ending in む take んで in the te-form, the same pattern as ぬ and ぶ verbs: 飲む → 飲んで。"
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the polite request with the te-form of 開ける plus ください。",
            "sentence": "窓を___。",
            "answer": "開けてください",
            "hint": "開ける is ichidan: drop る and add て。",
            "explanation": "開ける is an ichidan verb, so its te-form is simply 開けて; adding ください makes it the polite request 'please open (the window).'"
          }
        ]
      },
      {
        "heading": "～ている: Ongoing Action and Resultant State",
        "body": [
          "～ている, built on the te-form, has two distinct meanings depending on the verb. With continuous action verbs like 食べる, 読む, and 書く, it describes an action in progress: 'is doing ~.' With instantaneous verbs like 結婚する, 死ぬ, or 開く, it instead describes a resultant state — 窓が開いている means 'the window is open' (the state left behind by someone opening it), not 'the window is currently opening.'",
          "知る is a well-known irregularity: to say you know something, you must use 知っています, never the bare present tense 知ります。But to say you don't know, the plain negative 知りません is used instead of the expected 知っていません, which sounds unnatural to native speakers。"
        ],
        "examples": [
          {
            "es": "今、テレビを見ています。",
            "en": "ima, terebi o mite imasu. -- I am watching TV right now."
          },
          {
            "es": "あの人を知っていますか。「いいえ、知りません。」",
            "en": "ano hito o shitte imasu ka. \"iie, shirimasen.\" -- Do you know that person? \"No, I don't know.\""
          }
        ],
        "checkpoint": [
          {
            "type": "multi-select",
            "question": "Which sentences use ～ている to describe a resultant state, rather than an action in progress?",
            "options": [
              "電気がついています。",
              "今、宿題をしています。",
              "もう起きています。",
              "手紙を書いています。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "つく (turn on) and 起きる (wake up) are instantaneous verbs, so their ～ている forms describe the state left afterward: the light is on, and the person is (now) awake。する and 書く here describe actions still happening。"
          },
          {
            "type": "fill-blank",
            "prompt": "Complete the response with the correct negative form of 'to know.'",
            "sentence": "すみません、その人は___。",
            "answer": "知りません",
            "hint": "Not 知っていません。",
            "explanation": "知る's negative 'don't know' is the fixed, irregular 知りません, even though the affirmative uses the て-form 知っています。"
          }
        ]
      },
      {
        "heading": "Permission and Prohibition",
        "body": [
          "～てもいいですか (te-form + もいいですか) asks for permission: 'May I ~?' A simple はい、いいですよ grants it. This pattern is built directly on the te-form reviewed in Section 1, so anything you can put into te-form, you can turn into a permission question。",
          "～てはいけません (te-form + はいけません) states a prohibition, 'must not ~,' and often appears on signs or in rules. In casual conversation, ～ちゃだめ is more common than はいけません, which tends to sound more formal or official。"
        ],
        "examples": [
          {
            "es": "ここで写真を撮ってもいいですか。",
            "en": "koko de shashin o totte mo ii desu ka. -- May I take a photo here?"
          },
          {
            "es": "この部屋でたばこを吸ってはいけません。",
            "en": "kono heya de tabako o sutte wa ikemasen. -- You must not smoke in this room."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "A sign says 「ここに座ってはいけません。」What does this mean?",
            "options": [
              "You must not sit here.",
              "May I sit here?",
              "Please sit here.",
              "You don't have to sit here."
            ],
            "correctIndex": 0,
            "explanation": "～てはいけません states a prohibition, 'you must not do ~,' making this a rule forbidding sitting there, not a request or a question。"
          },
          {
            "type": "word-order",
            "prompt": "Put the words in order to ask permission to use the phone。",
            "words": [
              "電話",
              "を",
              "使って",
              "も",
              "いいです",
              "か"
            ],
            "translation": "May I use the phone?",
            "explanation": "The pattern is [verb te-form] + も + いいですか: 使って (te-form of 使う) + もいいですか asks for permission to use something。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What is the correct te-form of 読む (to read)?",
        "options": [
          "読んで",
          "読いて",
          "読って",
          "読みて"
        ],
        "correctIndex": 0,
        "explanation": "む-ending godan verbs take んで in the te-form, just like 飲む → 飲んで。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the polite request using する's te-form。",
        "sentence": "図書館では静かに___。",
        "answer": "してください",
        "hint": "する → して",
        "explanation": "静かにする means 'to be quiet'; adding してください turns it into the polite request 'please be quiet.'"
      },
      {
        "type": "multi-select",
        "question": "Which sentences describe a resultant state with ～ている, rather than an action still happening?",
        "options": [
          "電気がついています。",
          "今、宿題をしています。",
          "もう起きています。",
          "手紙を書いています。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "つく and 起きる are instantaneous verbs, so their ～ている forms describe the state that results: the light is on, and the person is awake。"
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order: 'I can work from 9 to 5.'",
        "words": [
          "九時",
          "から",
          "五時",
          "まで",
          "働けます"
        ],
        "translation": "I can work from 9 to 5.",
        "explanation": "から marks the starting point and まで the ending point of the time range, and 働けます is the potential form of 働く, 'to work.'"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete with the correct past form for comparing two tests。",
        "sentence": "先週のテストより今週のテストのほうが簡単___。",
        "answer": "でした",
        "hint": "簡単 takes the copula, not an い-adjective ending。",
        "explanation": "簡単 is a な-adjective/noun-type word, so its past uses でした (like です's past), unlike true い-adjectives, which take かった。"
      },
      {
        "type": "multiple-choice",
        "question": "What does 「先生が私に本をくれました。」mean?",
        "options": [
          "The teacher gave me a book.",
          "I gave the teacher a book.",
          "The teacher received a book from me.",
          "I received a book from the teacher."
        ],
        "correctIndex": 0,
        "explanation": "くれる always describes something given to the speaker (or their in-group), so the sentence means the teacher is the giver and 'I' is the receiver。"
      },
      {
        "type": "matching",
        "instructions": "Match each grammar pattern with its meaning。",
        "pairs": [
          {
            "left": "～てもいいですか",
            "right": "asking for permission"
          },
          {
            "left": "～てはいけません",
            "right": "prohibition, 'must not'"
          },
          {
            "left": "～たい",
            "right": "expressing the speaker's own desire"
          },
          {
            "left": "～(ら)れる",
            "right": "expressing ability, 'can do'"
          }
        ],
        "explanation": "These four patterns are all built on either the te-form or the verb stem, and each carries a distinct meaning: permission, prohibition, desire, and ability。"
      }
    ]
  },
  {
    "slug": "a2-module-review-2",
    "level": "JA-A2",
    "number": 26,
    "title": "A2 Module Review: Putting It All Together, Part 2 of 3",
    "summary": "A cumulative review of everything from the A2 module: te-form and requests, ～ている, permission and prohibition, past tense, potential and たい forms, giving and receiving, comparison particles, and plain-form noun modification and register. Short refreshers followed by mixed practice that combines grammar points the way real sentences do。",
    "duration": "9 min",
    "sections": [
      {
        "heading": "Past Tense: Verbs, です, and い-Adjectives",
        "body": [
          "Verb past tense in polite speech is regular across all groups: ～ました (affirmative) and ～ませんでした (negative) simply replace ます, regardless of whether the verb is godan, ichidan, or irregular — 食べました, 行きませんでした。",
          "です has its own irregular past forms: でした (affirmative) and じゃなかったです / ではありませんでした (negative)。い-adjectives instead drop い and add かった or くなかった — 忙しい → 忙しかった / 忙しくなかった。いい is the odd one out: its past is よかった (never いかった), since いい is itself a modern shortening of an older form よい。"
        ],
        "examples": [
          {
            "es": "昨日、友達と映画を見ました。",
            "en": "kinou, tomodachi to eiga o mimashita. -- Yesterday I watched a movie with a friend."
          },
          {
            "es": "テストは難しくなかったです。でも、天気はよかったです。",
            "en": "tesuto wa muzukashikunakatta desu. demo, tenki wa yokatta desu. -- The test wasn't difficult. But the weather was good."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the sentence with the correct negative past of いい。",
            "sentence": "昨日のパーティーはあまり___。",
            "answer": "よくなかったです",
            "hint": "いい's past forms are irregular: よかった / よくなかった。",
            "explanation": "いい conjugates from its older form よい, so its negative past は よくなかった(です), not いくなかったです。"
          },
          {
            "type": "multi-select",
            "question": "Which of these sentences correctly express a past event?",
            "options": [
              "映画を見ました。",
              "映画を見ています。",
              "天気がよかったです。",
              "忙しいです。"
            ],
            "correctIndexes": [
              0,
              2
            ],
            "explanation": "見ました is the polite past of 見る, and よかったです is the irregular past of いい。見ています describes an ongoing action, and 忙しいです is present tense。"
          }
        ]
      },
      {
        "heading": "Potential Form and たい Form",
        "body": [
          "The potential form expresses ability, 'can do.' Godan verbs shift their final u-sound to an e-sound and add る (書く→書ける, 泳ぐ→泳げる); ichidan verbs drop る and add られる (食べる→食べられる); and the irregulars become できる and 来られる。Because the focus shifts from doing something to something being possible, the object is usually marked with が instead of を。",
          "たい attaches to the verb stem (ます-form minus ます) to mean 'want to do' — 食べたい, 行きたい — and conjugates exactly like an い-adjective, so its past is たかった and its negative is たくない。It's normally reserved for the speaker's own desires; other people's wants use ～たがっている instead。"
        ],
        "examples": [
          {
            "es": "漢字が少し読めます。",
            "en": "kanji ga sukoshi yomemasu. -- I can read a little kanji."
          },
          {
            "es": "今度の休みに温泉に行きたいです。",
            "en": "kondo no yasumi ni onsen ni ikitai desu. -- I want to go to a hot spring on the next vacation."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "What is the correct potential form of 泳ぐ (to swim)?",
            "options": [
              "泳げる",
              "泳える",
              "泳ぎられる",
              "泳ぐられる"
            ],
            "correctIndex": 0,
            "explanation": "Godan verbs form the potential by shifting the final u-sound to an e-sound and adding る: 泳ぐ (-gu) → 泳げる (-geru)。"
          },
          {
            "type": "fill-blank",
            "prompt": "Complete with the particle used before a potential verb。",
            "sentence": "日本語___少し話せます。",
            "answer": "が",
            "hint": "Potential verbs usually take が, not を。",
            "explanation": "With potential verbs, the thing that can be done is marked with が rather than を, since the sentence describes a state of possibility rather than a direct action。"
          }
        ]
      },
      {
        "heading": "Giving and Receiving: あげる, もらう, くれる",
        "body": [
          "あげる ('give') is used when the subject gives to someone else, never to the speaker。もらう ('receive') is used when the speaker (or their in-group) receives something, with the giver marked by に or から。くれる ('give') is reserved specifically for someone giving something to the speaker or the speaker's in-group — the direction 'toward me' is built into the verb itself。",
          "This three-way split reflects uchi/soto (in-group/out-group) awareness: くれる and もらう both center on things moving toward 'my side,' while あげる covers anything moving away from the speaker's side, including gifts between two other people。Picking the wrong verb can make it sound like you've lost track of whose perspective the sentence is told from。"
        ],
        "examples": [
          {
            "es": "私は田中さんに花をあげました。",
            "en": "watashi wa Tanaka-san ni hana o agemashita. -- I gave Tanaka flowers."
          },
          {
            "es": "山田さんが私にお土産をくれました。",
            "en": "Yamada-san ga watashi ni omiyage o kuremashita. -- Yamada gave me a souvenir."
          }
        ],
        "checkpoint": [
          {
            "type": "matching",
            "instructions": "Match each giving/receiving verb with the perspective it's used from。",
            "pairs": [
              {
                "left": "あげる",
                "right": "the subject gives to someone else (not the speaker)"
              },
              {
                "left": "もらう",
                "right": "the speaker (or in-group) receives something"
              },
              {
                "left": "くれる",
                "right": "someone gives something to the speaker"
              }
            ],
            "explanation": "The verb choice depends entirely on direction relative to the speaker: あげる moves away from the speaker's side, while もらう and くれる both describe something arriving on the speaker's side。"
          },
          {
            "type": "fill-blank",
            "prompt": "Complete with the correct giving verb, in past tense, for something a friend gave to you。",
            "sentence": "友達が誕生日にプレゼントを___。",
            "answer": "くれました",
            "hint": "The speaker is the one who received it。",
            "explanation": "Because the gift moved toward the speaker, くれました is required rather than あげました, which would only be correct if the speaker were the giver。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fill-blank",
        "prompt": "Complete with the particle used before a potential verb。",
        "sentence": "私はピアノ___弾けます。",
        "answer": "が",
        "hint": "Potential verbs usually take が, not を。",
        "explanation": "With potential verbs like 弾ける, the thing that can be done is marked with が, not を, since the focus is on possibility rather than direct action。"
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order for a casual question: 'Did you eat something yesterday?'",
        "words": [
          "昨日",
          "何か",
          "食べた",
          "？"
        ],
        "translation": "Did you eat something yesterday?",
        "explanation": "食べた is the plain past of 食べる, used here without か or ですか to keep the question fully casual, appropriate for talking to a close friend。"
      },
      {
        "type": "multiple-choice",
        "question": "Which phrase correctly means 'the book that I bought yesterday'?",
        "options": [
          "昨日買った本",
          "昨日買う本",
          "昨日買いました本",
          "昨日買っている本"
        ],
        "correctIndex": 0,
        "explanation": "Noun modification uses the plain form directly before the noun, so the plain past 買った (not the polite 買いました or the present 買う) is required here。"
      },
      {
        "type": "multi-select",
        "question": "Which of these are in plain form rather than polite form?",
        "options": [
          "食べる",
          "食べます",
          "行かない",
          "行きません"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "食べる (dictionary form) and 行かない (plain negative) are both plain form; 食べます and 行きません are their polite equivalents。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete with the correct verb for receiving something from someone outside your household。",
        "sentence": "私は山田さんから花を___。",
        "answer": "もらいました",
        "hint": "The speaker is the one receiving, and the giver is marked with から。",
        "explanation": "もらう is used when the speaker receives something, with the giver marked by から or に — here, もらいました is the polite past tense。"
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order: 'Please come to my house at seven.'",
        "words": [
          "七時",
          "に",
          "私",
          "の",
          "家",
          "へ",
          "来て",
          "ください"
        ],
        "translation": "Please come to my house at seven.",
        "explanation": "に marks the specific time, へ marks the direction of movement toward 家, and 来てください is the te-form request built on the irregular verb 来る。"
      }
    ]
  },
  {
    "slug": "a2-module-review-3",
    "level": "JA-A2",
    "number": 27,
    "title": "A2 Module Review: Putting It All Together, Part 3 of 3",
    "summary": "A cumulative review of everything from the A2 module: te-form and requests, ～ている, permission and prohibition, past tense, potential and たい forms, giving and receiving, comparison particles, and plain-form noun modification and register. Short refreshers followed by mixed practice that combines grammar points the way real sentences do。",
    "duration": "8 min",
    "sections": [
      {
        "heading": "から／まで, や, へ vs に, and Comparison",
        "body": [
          "から and まで mark a starting and ending point, for both time and place: 九時から五時まで働きます, 'I work from 9 to 5.' や lists a few representative items from a larger, unrestricted set (often with など), unlike と, which lists every item exhaustively。へ and に can both mark a destination after a movement verb, but に can also mark a specific arrival point or an indirect object, while へ emphasizes the direction of movement itself。",
          "To compare two things, use AはBより + adjective ('A is more ~ than B'), or ask AとBとどちらが～ですか ('which of A and B is more ~?')。To answer, ～のほうが～です singles out the winner: 'A is the one that is more ~.' Japanese has no separate comparative adjective form — the comparison is carried entirely by particles。"
        ],
        "examples": [
          {
            "es": "月曜日から金曜日まで学校があります。",
            "en": "getsuyoubi kara kinyoubi made gakkou ga arimasu. -- There is school from Monday to Friday."
          },
          {
            "es": "電車より飛行機のほうが速いです。",
            "en": "densha yori hikouki no hou ga hayai desu. -- Planes are faster than trains."
          }
        ],
        "checkpoint": [
          {
            "type": "multiple-choice",
            "question": "Which sentence correctly uses や to give a partial, non-exhaustive list?",
            "options": [
              "机の上に本やノートなどがあります。",
              "机の上に本や本があります。",
              "私や田中さんです。",
              "本とノートやがあります。"
            ],
            "correctIndex": 0,
            "explanation": "や signals that book and notebook are just examples from a larger set of things on the desk, especially reinforced by など ('and so on')。The other options misuse や or repeat items with it。"
          },
          {
            "type": "word-order",
            "prompt": "Put the words in order: 'Between kanji and hiragana, which can you read?'",
            "words": [
              "漢字",
              "と",
              "ひらがな",
              "と",
              "どちら",
              "が",
              "読めます",
              "か"
            ],
            "translation": "Between kanji and hiragana, which can you read?",
            "explanation": "AとBとどちらが～ですか is the fixed pattern for asking someone to choose between two options, here combined with the potential verb 読めます from Section 5。"
          }
        ]
      },
      {
        "heading": "Plain-Form Noun Modification and Register",
        "body": [
          "To modify a noun with a verb or clause, Japanese simply places the plain form directly before the noun, with no relative pronoun needed: 食べる人 ('the person who eats'), 昨日買った本 ('the book I bought yesterday')。Inside such a modifying clause, the subject is often marked with が instead of は, even when は would mark the same subject in a standalone sentence — 私が撮った写真 ('the photo I took')。",
          "Plain form — dictionary form, plain negative ～ない, plain past ～た/～なかった, and だ instead of です — is used in casual speech among friends and family, and it's also the form required inside modifying clauses and many grammar patterns regardless of overall politeness。Fluent speakers switch fluidly between plain and polite register depending on the listener, even mid-conversation if the audience or setting shifts。"
        ],
        "examples": [
          {
            "es": "これは去年撮った写真です。",
            "en": "kore wa kyonen totta shashin desu. -- This is a photo I took last year."
          },
          {
            "es": "A: 明日、何する？ B: たぶん家にいる。",
            "en": "A: ashita, nani suru? B: tabun ie ni iru. -- A: What are you doing tomorrow? B: Probably staying home."
          }
        ],
        "checkpoint": [
          {
            "type": "fill-blank",
            "prompt": "Complete the noun-modifying clause with the particle that marks its subject。",
            "sentence": "これは私___撮った写真です。",
            "answer": "が",
            "hint": "Subjects inside modifying clauses often take が, not は。",
            "explanation": "Inside a clause that modifies a noun (here, 写真), the subject is typically marked with が rather than は, even though は would mark 私 in a standalone sentence。"
          },
          {
            "type": "multiple-choice",
            "question": "Which of these is in casual/plain speech rather than polite speech?",
            "options": [
              "食べます",
              "食べた",
              "食べました",
              "食べません"
            ],
            "correctIndex": 1,
            "explanation": "食べた is the plain past of 食べる, used in casual speech and inside modifying clauses; the other three options all end in polite ます forms。"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "multiple-choice",
        "question": "What is the correct negative past of 楽しい (fun)?",
        "options": [
          "楽しくなかったです",
          "楽しいなかったです",
          "楽しかったないです",
          "楽しくないでした"
        ],
        "correctIndex": 0,
        "explanation": "い-adjectives form the negative past by dropping い and adding くなかった: 楽しい → 楽しくなかった(です)。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete the sentence with the correct prohibition ending。",
        "sentence": "危ないですから、ここで泳いで___。",
        "answer": "はいけません",
        "hint": "te-form + はいけません",
        "explanation": "泳いで (te-form of 泳ぐ) + はいけません states a prohibition: 'you must not swim here, because it's dangerous.'"
      },
      {
        "type": "multi-select",
        "question": "Which sentences correctly use より or のほうが to compare two things?",
        "options": [
          "コーヒーより紅茶のほうが好きです。",
          "コーヒーがより紅茶好きです。",
          "夏より冬のほうが好きです。",
          "冬はより夏好きです。"
        ],
        "correctIndexes": [
          0,
          2
        ],
        "explanation": "The correct pattern is AよりBのほうが好きです, with より directly after the thing being compared against; options 2 and 4 scramble the particle order and are ungrammatical。"
      },
      {
        "type": "word-order",
        "prompt": "Put the words in order: 'I want to eat things like sushi and tempura.'",
        "words": [
          "寿司",
          "や",
          "天ぷら",
          "など",
          "を",
          "食べたい",
          "です"
        ],
        "translation": "I want to eat things like sushi and tempura.",
        "explanation": "や combined with など lists sushi and tempura as representative examples, while 食べたいです expresses the speaker's own desire using the たい form。"
      },
      {
        "type": "matching",
        "instructions": "Match each particle or pattern with its function。",
        "pairs": [
          {
            "left": "から～まで",
            "right": "marks a starting point and an ending point"
          },
          {
            "left": "や",
            "right": "lists a few examples from a larger set"
          },
          {
            "left": "より",
            "right": "marks the thing being compared against ('than')"
          },
          {
            "left": "のほうが",
            "right": "singles out the one that is more ~"
          }
        ],
        "explanation": "These particles work together across A2 sentences describing ranges, example lists, and comparisons between two things。"
      },
      {
        "type": "fill-blank",
        "prompt": "Complete this casual exchange with the plain-form copula。",
        "sentence": "A: これ誰の本？ B: それは私の___。",
        "answer": "だ",
        "hint": "だ replaces です in casual speech。",
        "explanation": "In casual conversation, だ is used instead of です; 私のだ means 'it's mine,' matching the plain-form question 誰の本？"
      },
      {
        "type": "multiple-choice",
        "question": "Which verb form correctly describes 'the door is open' as a state, not 'is opening'?",
        "options": [
          "開いています",
          "開けています",
          "開きます",
          "開いました"
        ],
        "correctIndex": 0,
        "explanation": "開く is intransitive, and its ～ている form describes the resulting state 'is open.' 開けている (from transitive 開ける) would instead mean someone is in the process of opening it。"
      }
    ]
  }
];
